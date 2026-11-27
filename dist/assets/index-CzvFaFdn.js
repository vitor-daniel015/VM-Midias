(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function c(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(m){if(m.ep)return;m.ep=!0;const f=c(m);fetch(m.href,f)}})();var Ru={exports:{}},Yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function q1(){if(Qh)return Yi;Qh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(d,m,f){var v=null;if(f!==void 0&&(v=""+f),m.key!==void 0&&(v=""+m.key),"key"in m){f={};for(var g in m)g!=="key"&&(f[g]=m[g])}else f=m;return m=f.ref,{$$typeof:o,type:d,key:v,ref:m!==void 0?m:null,props:f}}return Yi.Fragment=r,Yi.jsx=c,Yi.jsxs=c,Yi}var $h;function L1(){return $h||($h=1,Ru.exports=q1()),Ru.exports}var l=L1(),Mu={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function k1(){if(Xh)return de;Xh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),v=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function V(A){return A===null||typeof A!="object"?null:(A=M&&A[M]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function Y(A,I,le){this.props=A,this.context=I,this.refs=q,this.updater=le||k}Y.prototype.isReactComponent={},Y.prototype.setState=function(A,I){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,I,"setState")},Y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function G(){}G.prototype=Y.prototype;function oe(A,I,le){this.props=A,this.context=I,this.refs=q,this.updater=le||k}var L=oe.prototype=new G;L.constructor=oe,B(L,Y.prototype),L.isPureReactComponent=!0;var se=Array.isArray;function K(){}var W={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function H(A,I,le){var ie=le.ref;return{$$typeof:o,type:A,key:I,ref:ie!==void 0?ie:null,props:le}}function F(A,I){return H(A.type,I,A.props)}function ee(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function ce(A){var I={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(le){return I[le]})}var Ie=/\/+/g;function me(A,I){return typeof A=="object"&&A!==null&&A.key!=null?ce(""+A.key):I.toString(36)}function U(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(K,K):(A.status="pending",A.then(function(I){A.status==="pending"&&(A.status="fulfilled",A.value=I)},function(I){A.status==="pending"&&(A.status="rejected",A.reason=I)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function $(A,I,le,ie,je){var Ee=typeof A;(Ee==="undefined"||Ee==="boolean")&&(A=null);var Ae=!1;if(A===null)Ae=!0;else switch(Ee){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(A.$$typeof){case o:case r:Ae=!0;break;case j:return Ae=A._init,$(Ae(A._payload),I,le,ie,je)}}if(Ae)return je=je(A),Ae=ie===""?"."+me(A,0):ie,se(je)?(le="",Ae!=null&&(le=Ae.replace(Ie,"$&/")+"/"),$(je,I,le,"",function(St){return St})):je!=null&&(ee(je)&&(je=F(je,le+(je.key==null||A&&A.key===je.key?"":(""+je.key).replace(Ie,"$&/")+"/")+Ae)),I.push(je)),1;Ae=0;var te=ie===""?".":ie+":";if(se(A))for(var ue=0;ue<A.length;ue++)ie=A[ue],Ee=te+me(ie,ue),Ae+=$(ie,I,le,Ee,je);else if(ue=V(A),typeof ue=="function")for(A=ue.call(A),ue=0;!(ie=A.next()).done;)ie=ie.value,Ee=te+me(ie,ue++),Ae+=$(ie,I,le,Ee,je);else if(Ee==="object"){if(typeof A.then=="function")return $(U(A),I,le,ie,je);throw I=String(A),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function ae(A,I,le){if(A==null)return A;var ie=[],je=0;return $(A,ie,"","",function(Ee){return I.call(le,Ee,je++)}),ie}function ve(A){if(A._status===-1){var I=A._result,le=I();le.then(function(ie){(A._status===0||A._status===-1)&&(A._status=1,A._result=ie,le.status===void 0&&(le.status="fulfilled",le.value=ie))},function(ie){(A._status===0||A._status===-1)&&(A._status=2,A._result=ie,le.status===void 0&&(le.status="rejected",le.reason=ie))}),A._status===-1&&(A._status=0,A._result=le)}if(A._status===1)return A._result.default;throw A._result}var _e=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Fa(A){var I=W.T,le={};le.types=I!==null?I.types:null,W.T=le;try{var ie=A(),je=W.S;je!==null&&je(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(K,_e)}catch(Ee){_e(Ee)}finally{I!==null&&le.types!==null&&(I.types=le.types),W.T=I}}function Et(A){var I=W.T;if(I!==null){var le=I.types;le===null?I.types=[A]:le.indexOf(A)===-1&&le.push(A)}else Fa(Et.bind(null,A))}var An={map:ae,forEach:function(A,I,le){ae(A,function(){I.apply(this,arguments)},le)},count:function(A){var I=0;return ae(A,function(){I++}),I},toArray:function(A){return ae(A,function(I){return I})||[]},only:function(A){if(!ee(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return de.Activity=h,de.Children=An,de.Component=Y,de.Fragment=c,de.Profiler=m,de.PureComponent=oe,de.StrictMode=d,de.Suspense=N,de.ViewTransition=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,de.__COMPILER_RUNTIME={__proto__:null,c:function(A){return W.H.useMemoCache(A)}},de.addTransitionType=Et,de.cache=function(A){return function(){return A.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(A,I,le){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ie=B({},A.props),je=A.key;if(I!=null)for(Ee in I.key!==void 0&&(je=""+I.key),I)!P.call(I,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&I.ref===void 0||(ie[Ee]=I[Ee]);var Ee=arguments.length-2;if(Ee===1)ie.children=le;else if(1<Ee){for(var Ae=Array(Ee),te=0;te<Ee;te++)Ae[te]=arguments[te+2];ie.children=Ae}return H(A.type,je,ie)},de.createContext=function(A){return A={$$typeof:v,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},de.createElement=function(A,I,le){var ie,je={},Ee=null;if(I!=null)for(ie in I.key!==void 0&&(Ee=""+I.key),I)P.call(I,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(je[ie]=I[ie]);var Ae=arguments.length-2;if(Ae===1)je.children=le;else if(1<Ae){for(var te=Array(Ae),ue=0;ue<Ae;ue++)te[ue]=arguments[ue+2];je.children=te}if(A&&A.defaultProps)for(ie in Ae=A.defaultProps,Ae)je[ie]===void 0&&(je[ie]=Ae[ie]);return H(A,Ee,je)},de.createRef=function(){return{current:null}},de.forwardRef=function(A){return{$$typeof:g,render:A}},de.isValidElement=ee,de.lazy=function(A){return{$$typeof:j,_payload:{_status:-1,_result:A},_init:ve}},de.memo=function(A,I){return{$$typeof:E,type:A,compare:I===void 0?null:I}},de.startTransition=Fa,de.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},de.use=function(A){return W.H.use(A)},de.useActionState=function(A,I,le){return W.H.useActionState(A,I,le)},de.useCallback=function(A,I){return W.H.useCallback(A,I)},de.useContext=function(A){return W.H.useContext(A)},de.useDebugValue=function(){},de.useDeferredValue=function(A,I){return W.H.useDeferredValue(A,I)},de.useEffect=function(A,I){return W.H.useEffect(A,I)},de.useEffectEvent=function(A){return W.H.useEffectEvent(A)},de.useId=function(){return W.H.useId()},de.useImperativeHandle=function(A,I,le){return W.H.useImperativeHandle(A,I,le)},de.useInsertionEffect=function(A,I){return W.H.useInsertionEffect(A,I)},de.useLayoutEffect=function(A,I){return W.H.useLayoutEffect(A,I)},de.useMemo=function(A,I){return W.H.useMemo(A,I)},de.useOptimistic=function(A,I){return W.H.useOptimistic(A,I)},de.useReducer=function(A,I,le){return W.H.useReducer(A,I,le)},de.useRef=function(A){return W.H.useRef(A)},de.useState=function(A){return W.H.useState(A)},de.useSyncExternalStore=function(A,I,le){return W.H.useSyncExternalStore(A,I,le)},de.useTransition=function(){return W.H.useTransition()},de.version="19.3.0",de}var Zh;function ed(){return Zh||(Zh=1,Mu.exports=k1()),Mu.exports}var b=ed(),Du={exports:{}},Pi={},zu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function B1(){return Fh||(Fh=1,(function(o){function r(U,$){var ae=U.length;U.push($);e:for(;0<ae;){var ve=ae-1>>>1,_e=U[ve];if(0<m(_e,$))U[ve]=$,U[ae]=_e,ae=ve;else break e}}function c(U){return U.length===0?null:U[0]}function d(U){if(U.length===0)return null;var $=U[0],ae=U.pop();if(ae!==$){U[0]=ae;e:for(var ve=0,_e=U.length,Fa=_e>>>1;ve<Fa;){var Et=2*(ve+1)-1,An=U[Et],A=Et+1,I=U[A];if(0>m(An,ae))A<_e&&0>m(I,An)?(U[ve]=I,U[A]=ae,ve=A):(U[ve]=An,U[Et]=ae,ve=Et);else if(A<_e&&0>m(I,ae))U[ve]=I,U[A]=ae,ve=A;else break e}}return $}function m(U,$){var ae=U.sortIndex-$.sortIndex;return ae!==0?ae:U.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var v=Date,g=v.now();o.unstable_now=function(){return v.now()-g}}var N=[],E=[],j=1,h=null,x=3,M=!1,V=!1,k=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function oe(U){for(var $=c(E);$!==null;){if($.callback===null)d(E);else if($.startTime<=U)d(E),$.sortIndex=$.expirationTime,r(N,$);else break;$=c(E)}}function L(U){if(k=!1,oe(U),!V)if(c(N)!==null)V=!0,se||(se=!0,ee());else{var $=c(E);$!==null&&me(L,$.startTime-U)}}var se=!1,K=-1,W=5,P=-1;function H(){return B?!0:!(o.unstable_now()-P<W)}function F(){if(B=!1,se){var U=o.unstable_now();P=U;var $=!0;try{e:{V=!1,k&&(k=!1,Y(K),K=-1),M=!0;var ae=x;try{a:{for(oe(U),h=c(N);h!==null&&!(h.expirationTime>U&&H());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,x=h.priorityLevel;var _e=ve(h.expirationTime<=U);if(U=o.unstable_now(),typeof _e=="function"){h.callback=_e,oe(U),$=!0;break a}h===c(N)&&d(N),oe(U)}else d(N);h=c(N)}if(h!==null)$=!0;else{var Fa=c(E);Fa!==null&&me(L,Fa.startTime-U),$=!1}}break e}finally{h=null,x=ae,M=!1}$=void 0}}finally{$?ee():se=!1}}}var ee;if(typeof G=="function")ee=function(){G(F)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ie=ce.port2;ce.port1.onmessage=F,ee=function(){Ie.postMessage(null)}}else ee=function(){q(F,0)};function me(U,$){K=q(function(){U(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(U){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var ae=x;x=$;try{return U()}finally{x=ae}},o.unstable_requestPaint=function(){B=!0},o.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ae=x;x=U;try{return $()}finally{x=ae}},o.unstable_scheduleCallback=function(U,$,ae){var ve=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ve+ae:ve):ae=ve,U){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ae+_e,U={id:j++,callback:$,priorityLevel:U,startTime:ae,expirationTime:_e,sortIndex:-1},ae>ve?(U.sortIndex=ae,r(E,U),c(N)===null&&U===c(E)&&(k?(Y(K),K=-1):k=!0,me(L,ae-ve))):(U.sortIndex=_e,r(N,U),V||M||(V=!0,se||(se=!0,ee()))),U},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(U){var $=x;return function(){var ae=x;x=$;try{return U.apply(this,arguments)}finally{x=ae}}}})(Uu)),Uu}var Kh;function H1(){return Kh||(Kh=1,zu.exports=B1()),zu.exports}var qu={exports:{}},ra={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function I1(){if(Jh)return ra;Jh=1;var o=ed();function r(j){var h="https://react.dev/errors/"+j;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+j+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var d={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},m=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function g(j,h,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:M==null?null:M===v?v:""+M,children:j,containerInfo:h,implementation:x}}var N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(j,h){if(j==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ra.browser=function(j){return{$$typeof:f,_reason:j}},ra.createPortal=function(j,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return g(j,h,null,x)},ra.flushSync=function(j){var h=N.T,x=d.p;try{if(N.T=null,d.p=2,j)return j()}finally{N.T=h,d.p=x,d.d.f()}},ra.preconnect=function(j,h){typeof j=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(j,h))},ra.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},ra.preinit=function(j,h){if(typeof j=="string"&&h&&typeof h.as=="string"){var x=h.as,M=E(x,h.crossOrigin),V=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?d.d.S(j,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:M,integrity:V,fetchPriority:k}):x==="script"&&d.d.X(j,{crossOrigin:M,integrity:V,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ra.preinitModule=function(j,h){if(typeof j=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=E(h.as,h.crossOrigin);d.d.M(j,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}}else h==null&&d.d.M(j)},ra.preload=function(j,h){if(typeof j=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,M=E(x,h.crossOrigin);d.d.L(j,x,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ra.preloadModule=function(j,h){if(typeof j=="string")if(h){var x=E(h.as,h.crossOrigin);d.d.m(j,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}else d.d.m(j)},ra.requestFormReset=function(j){d.d.r(j)},ra.unstable_batchedUpdates=function(j,h){return j(h)},ra.useFormState=function(j,h,x){return N.H.useFormState(j,h,x)},ra.useFormStatus=function(){return N.H.useHostTransitionStatus()},ra.version="19.3.0",ra}var Wh;function V1(){if(Wh)return qu.exports;Wh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),qu.exports=I1(),qu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function G1(){if(e0)return Pi;e0=1;var o=H1(),r=ed(),c=V1();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var a=e,t=a;t&&!t.alternate;)a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function N(e){if(f(e)!==e)throw Error(d(188))}function E(e){var a=e.alternate;if(!a){if(a=f(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,n=a;;){var i=t.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===t)return N(i),e;if(s===n)return N(i),a;s=s.sibling}throw Error(d(188))}if(t.return!==n.return)t=i,n=s;else{for(var u=!1,p=i.child;p;){if(p===t){u=!0,t=i,n=s;break}if(p===n){u=!0,n=i,t=s;break}p=p.sibling}if(!u){for(p=s.child;p;){if(p===t){u=!0,t=s,n=i;break}if(p===n){u=!0,n=s,t=i;break}p=p.sibling}if(!u)throw Error(d(189))}}if(t.alternate!==n)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function j(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=j(e),a!==null)return a;e=e.sibling}return null}function h(e,a,t,n,i,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,n,i,s)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&h(e.child,a,t,n,i,s))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function V(e){var a=[null,null],t=x(e);return t===null||k(a,e,t.child,{foundSelf:!1}),a}function k(e,a,t,n){for(;t!==null;){if(t===a)n.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(n.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&k(e,a,t.child,n))return!0;t=t.sibling}return!1}function B(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(d(559))}}var q=null,Y=null;function G(e,a,t){return e===t?!0:e===a?(q=e,!0):!1}function oe(e,a,t){return e===t?(Y=e,!1):e===a?(Y!==null&&(q=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function se(e,a,t){for(var n=0,i=e;i;i=t(i))n++;i=0;for(var s=a;s;s=t(s))i++;for(;0<n-i;)e=t(e),n--;for(;0<i-n;)a=t(a),i--;for(;n--;){if(e===a||a!==null&&e===a.alternate)return e;e=t(e),a=t(a)}return null}var K=Object.assign,W=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),Ie=Symbol.for("react.consumer"),me=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Fa=Symbol.for("react.activity"),Et=Symbol.for("react.legacy_hidden"),An=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),I=Symbol.for("react.recoverable"),le=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var je=Symbol.for("react.client.reference");function Ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===je?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case ce:return"Profiler";case ee:return"StrictMode";case $:return"Suspense";case ae:return"SuspenseList";case Fa:return"Activity";case A:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case me:return e.displayName||"Context";case Ie:return(e._context.displayName||"Context")+".Consumer";case U:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return a=e.displayName||null,a!==null?a:Ee(e.type)||"Memo";case _e:a=e._payload,e=e._init;try{return Ee(e(a))}catch{}}return null}var Ae=Array.isArray,te=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St={pending:!1,data:null,method:null,action:null},Fs=[],Kn=-1;function lt(e){return{current:e}}function aa(e){0>Kn||(e.current=Fs[Kn],Fs[Kn]=null,Kn--)}function Ue(e,a){Kn++,Fs[Kn]=e.current,e.current=a}var it=lt(null),Fl=lt(null),Yt=lt(null),ao=lt(null);function to(e,a){switch(Ue(Yt,a),Ue(Fl,e),Ue(it,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=ah(a),e=th(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}aa(it),Ue(it,e)}function Jn(){aa(it),aa(Fl),aa(Yt)}function Ks(e){var a=e.memoizedState;a!==null&&(Bl._currentValue=a.memoizedState,Ue(ao,e)),a=it.current;var t=th(a,e.type);a!==t&&(Ue(Fl,e),Ue(it,t))}function no(e){Fl.current===e&&(aa(it),aa(Fl)),ao.current===e&&(aa(ao),Bl._currentValue=St)}var Js,Nd;function Pt(e){if(Js===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Js=a&&a[1]||"",Nd=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Js+e+Nd}var Ws=!1;function er(e,a){if(!e||Ws)return"";Ws=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(Q){var w=Q}Reflect.construct(e,[],z)}else{try{z.call()}catch(Q){w=Q}z=!1;try{var C=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new e}finally{z&&(C!==void 0?Object.defineProperty(e.prototype,"props",C):delete e.prototype.props)}}}else{try{throw Error()}catch(Q){w=Q}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(Q){if(Q&&w&&typeof Q.stack=="string")return[Q.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),u=s[0],p=s[1];if(u&&p){var y=u.split(`
`),O=p.split(`
`);for(i=n=0;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;for(;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;if(n===y.length||i===O.length)for(n=y.length-1,i=O.length-1;1<=n&&0<=i&&y[n]!==O[i];)i--;for(;1<=n&&0<=i;n--,i--)if(y[n]!==O[i]){if(n!==1||i!==1)do if(n--,i--,0>i||y[n]!==O[i]){var R=`
`+y[n].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=n&&0<=i);break}}}finally{Ws=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Pt(t):""}function Hv(e,a){switch(e.tag){case 26:case 27:case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return e.child!==a&&a!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return er(e.type,!1);case 11:return er(e.type.render,!1);case 1:return er(e.type,!0);case 31:return Pt("Activity");case 30:return Pt("ViewTransition");default:return""}}function jd(e){try{var a="",t=null;do a+=Hv(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ar=Object.prototype.hasOwnProperty,tr=o.unstable_scheduleCallback,nr=o.unstable_cancelCallback,Iv=o.unstable_shouldYield,Vv=o.unstable_requestPaint,Oa=o.unstable_now,Gv=o.unstable_getCurrentPriorityLevel,Ed=o.unstable_ImmediatePriority,Sd=o.unstable_UserBlockingPriority,lo=o.unstable_NormalPriority,Yv=o.unstable_LowPriority,Ad=o.unstable_IdlePriority,Pv=o.log,Qv=o.unstable_setDisableYieldValue,Kl=null,Ta=null;function Qt(e){if(typeof Pv=="function"&&Qv(e),Ta&&typeof Ta.setStrictMode=="function")try{Ta.setStrictMode(Kl,e)}catch{}}var Ca=Math.clz32?Math.clz32:Zv,$v=Math.log,Xv=Math.LN2;function Zv(e){return e>>>=0,e===0?32:31-($v(e)/Xv|0)|0}var io=256,oo=262144,so=4194304;function wn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ro(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~s,n!==0?i=wn(n):(u&=p,u!==0?i=wn(u):t||(t=p&~e,t!==0&&(i=wn(t))))):(p=n&~s,p!==0?i=wn(p):u!==0?i=wn(u):t||(t=n&~e,t!==0&&(i=wn(t)))),i===0?0:a!==0&&a!==i&&(a&s)===0&&(s=i&-i,t=a&-a,s>=t||s===32&&(t&4194048)!==0)?a:i}function Jl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function wd(e,a){(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-Ca(t),i=1<<n;a|=e[n],t&=~i}return a}function Fv(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _d(){var e=so;return so<<=1,(so&62914560)===0&&(so=4194304),e}function lr(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Wl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kv(e,a,t,n,i,s){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,y=e.expirationTimes,O=e.hiddenUpdates;for(t=u&~t;0<t;){var R=31-Ca(t),z=1<<R;p[R]=0,y[R]=-1;var w=O[R];if(w!==null)for(O[R]=null,R=0;R<w.length;R++){var C=w[R];C!==null&&(C.lane&=-536870913)}t&=~z}n!==0&&Od(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~a))}function Od(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-Ca(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function Td(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-Ca(t),i=1<<n;i&a|e[n]&a&&(e[n]|=a),t&=~i}}function Cd(e,a){var t=a&-a;return t=(t&42)!==0?1:ir(t),(t&(e.suspendedLanes|a))!==0?0:t}function ir(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rd(){var e=ue.p;return e!==0?e:(e=window.event,e===void 0?32:Bh(e.type))}function Md(e,a){var t=ue.p;try{return ue.p=e,a()}finally{ue.p=t}}var At=Math.random().toString(36).slice(2),ta="__reactFiber$"+At,ya="__reactProps$"+At,Wn="__reactContainer$"+At,Dd="__reactEvents$"+At,Jv="__reactListeners$"+At,Wv="__reactHandles$"+At,zd="__reactResources$"+At,ei="__reactMarker$"+At,co="__reactLoad$"+At;function uo(e){delete e[ta],delete e[ya],delete e[Jv],delete e[Wv]}function _n(e){var a;if(a=e[ta])return a;for(var t=e.parentNode;t;){if(a=t[Wn]||t[ta]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=bh(e);e!==null;){if(t=e[ta])return t;e=bh(e)}return a}e=t,t=e.parentNode}return null}function el(e){if(e=e[ta]||e[Wn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ai(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function al(e){var a=e[zd];return a||(a=e[zd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Fe(e){e[ei]=!0}function Ud(e){e[co]=void 0}var qd=new Set,Ld={};function On(e,a){tl(e,a),tl(e+"Capture",a)}function tl(e,a){for(Ld[e]=a,e=0;e<a.length;e++)qd.add(a[e])}var eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kd={},Bd={};function ag(e){return ar.call(Bd,e)?!0:ar.call(kd,e)?!1:eg.test(e)?Bd[e]=!0:(kd[e]=!0,!1)}var Se=!1;function Hd(){var e=Se;return Se=!1,e}function mo(e,a,t){if(ag(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,t)}}function fo(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,t)}}function wt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,n)}}function Ra(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function tg(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(u){t=""+u,s.call(this,u)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function sr(e){if(!e._valueTracker){var a=Id(e)?"checked":"value";e._valueTracker=tg(e,a,""+e[a])}}function Vd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Id(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}var ng=/[\n"\\]/g;function Ba(e){return e.replace(ng,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function rr(e,a,t,n,i,s,u,p){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ra(a)):e.value!==""+Ra(a)&&(e.value=""+Ra(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?u==="number"&&e.value==a?cr(e,Ra(e.value)):cr(e,Ra(a)):t!=null?cr(e,Ra(t)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Ra(p):e.removeAttribute("name")}function Gd(e,a,t,n,i,s,u,p){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),a!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){sr(e);return}t=t!=null?""+Ra(t):"",a=a!=null?""+Ra(a):t,p||a===e.value||(e.value=a),e.defaultValue=a}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),sr(e)}function cr(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function nl(e,a,t,n){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ra(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Yd(e,a,t){if(a!=null&&(a=""+Ra(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ra(t):""}function Pd(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(d(92));if(Ae(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Ra(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),sr(e)}function ll(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var lg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||lg.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function $d(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",Se=!0);for(var i in a)n=a[i],a.hasOwnProperty(i)&&t[i]!==n&&(Qd(e,i,n),Se=!0)}else for(var s in a)a.hasOwnProperty(s)&&Qd(e,s,a[s])}function ur(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function po(e){return og.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ot(){}var dr=null;function mr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,ol=null;function Xd(e){var a=el(e);if(a&&(e=a.stateNode)){var t=e[ya]||null;e:switch(e=a.stateNode,a.type){case"input":if(rr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ba(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var i=n[ya]||null;if(!i)throw Error(d(90));rr(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Vd(n)}break e;case"textarea":Yd(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&nl(e,!!t.multiple,a,!1)}}}var fr=!1;function Zd(e,a,t){if(fr)return e(a,t);fr=!0;try{var n=e(a);return n}finally{if(fr=!1,(il!==null||ol!==null)&&(ps(),il&&(a=il,e=ol,ol=il=null,Xd(a),e)))for(a=0;a<e.length;a++)Xd(e[a])}}function ti(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ya]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pr=!1;if(_t)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){pr=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{pr=!1}var $t=null,hr=null,ho=null;function Fd(){if(ho)return ho;var e,a=hr,t=a.length,n,i="value"in $t?$t.value:$t.textContent,s=i.length;for(e=0;e<t&&a[e]===i[e];e++);var u=t-e;for(n=1;n<=u&&a[t-n]===i[s-n];n++);return ho=i.slice(e,1<n?1-n:void 0)}function vo(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Kd(){return!1}function ha(e){function a(t,n,i,s,u){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?go:Kd,this.isPropagationStopped=Kd,this}return K(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),a}var Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=ha(Xt),li=K({},Xt,{view:0,detail:0}),sg=ha(li),vr,gr,ii,bo=K({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:br,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(vr=e.screenX-ii.screenX,gr=e.screenY-ii.screenY):gr=vr=0,ii=e),vr)},movementY:function(e){return"movementY"in e?e.movementY:gr}}),Jd=ha(bo),rg=K({},bo,{dataTransfer:0}),cg=ha(rg),ug=K({},li,{relatedTarget:0}),xr=ha(ug),dg=K({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=ha(dg),fg=K({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pg=ha(fg),hg=K({},Xt,{data:0}),Wd=ha(hg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=xg[e])?!!a[e]:!1}function br(){return bg}var yg=K({},li,{key:function(e){if(e.key){var a=vg[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:br,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ng=ha(yg),jg=K({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=ha(jg),Eg=K({},Xt,{submitter:0}),Sg=ha(Eg),Ag=K({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:br}),wg=ha(Ag),_g=K({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=ha(_g),Tg=K({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cg=ha(Tg),Rg=K({},Xt,{newState:0,oldState:0,source:0}),Mg=ha(Rg),Dg=[9,13,27,32],yr=_t&&"CompositionEvent"in window,oi=null;_t&&"documentMode"in document&&(oi=document.documentMode);var zg=_t&&"TextEvent"in window&&!oi,am=_t&&(!yr||oi&&8<oi&&11>=oi),tm=" ",nm=!1;function lm(e,a){switch(e){case"keyup":return Dg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function Ug(e,a){switch(e){case"compositionend":return im(a);case"keypress":return a.which!==32?null:(nm=!0,tm);case"textInput":return e=a.data,e===tm&&nm?null:e;default:return null}}function qg(e,a){if(sl)return e==="compositionend"||!yr&&lm(e,a)?(e=Fd(),ho=hr=$t=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return am&&a.locale!=="ko"?null:a.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Lg[e.type]:a==="textarea"}function sm(e,a,t,n){il?ol?ol.push(n):ol=[n]:il=n,a=ys(a,"onChange"),0<a.length&&(t=new xo("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var si=null,ri=null;function kg(e){Zp(e,0)}function yo(e){var a=ai(e);if(Vd(a))return e}function rm(e,a){if(e==="change")return a}var cm=!1;if(_t){var Nr;if(_t){var jr="oninput"in document;if(!jr){var um=document.createElement("div");um.setAttribute("oninput","return;"),jr=typeof um.oninput=="function"}Nr=jr}else Nr=!1;cm=Nr&&(!document.documentMode||9<document.documentMode)}function dm(){si&&(si.detachEvent("onpropertychange",mm),ri=si=null)}function mm(e){if(e.propertyName==="value"&&yo(ri)){var a=[];sm(a,ri,e,mr(e)),Zd(kg,a)}}function Bg(e,a,t){e==="focusin"?(dm(),si=a,ri=t,si.attachEvent("onpropertychange",mm)):e==="focusout"&&dm()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(ri)}function Ig(e,a){if(e==="click")return yo(a)}function Vg(e,a){if(e==="input"||e==="change")return yo(a)}function Gg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ma=typeof Object.is=="function"?Object.is:Gg;function ci(e,a){if(Ma(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!ar.call(a,i)||!Ma(e[i],a[i]))return!1}return!0}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pm(e,a){var t=fm(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fm(t)}}function hm(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?hm(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function vm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Er(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Er(e.document)}return a}function Sr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Yg=_t&&"documentMode"in document&&11>=document.documentMode,rl=null,Ar=null,ui=null,wr=!1;function gm(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;wr||rl==null||rl!==Er(n)||(n=rl,"selectionStart"in n&&Sr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ui&&ci(ui,n)||(ui=n,n=ys(Ar,"onSelect"),0<n.length&&(a=new xo("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=rl)))}function Tn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var cl={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionrun:Tn("Transition","TransitionRun"),transitionstart:Tn("Transition","TransitionStart"),transitioncancel:Tn("Transition","TransitionCancel"),transitionend:Tn("Transition","TransitionEnd")},_r={},xm={};_t&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function Cn(e){if(_r[e])return _r[e];if(!cl[e])return e;var a=cl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in xm)return _r[e]=a[t];return e}var bm=Cn("animationend"),ym=Cn("animationiteration"),Nm=Cn("animationstart"),Pg=Cn("transitionrun"),Qg=Cn("transitionstart"),$g=Cn("transitioncancel"),jm=Cn("transitionend"),Em=new Map,Or="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Or.push("scrollEnd");function Ka(e,a){Em.set(e,a),On(a,[e])}var Xg=0;function Ot(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=at.identifierPrefix;var t=Xg++;return e="_"+e+"t_"+t.toString(32)+"_",a.autoName=e}function Sm(e){if(e==null||typeof e=="string")return e;var a=null,t=Tl;if(t!==null)for(var n=0;n<t.length;n++){var i=e[t[n]];if(i!=null){if(i==="none")return"none";a=a==null?i:a+(" "+i)}}return a??e.default}function Tt(e,a){return e=Sm(e),a=Sm(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var No=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ha=[],ul=0,Tr=0;function jo(){for(var e=ul,a=Tr=ul=0;a<e;){var t=Ha[a];Ha[a++]=null;var n=Ha[a];Ha[a++]=null;var i=Ha[a];Ha[a++]=null;var s=Ha[a];if(Ha[a++]=null,n!==null&&i!==null){var u=n.pending;u===null?i.next=i:(i.next=u.next,u.next=i),n.pending=i}s!==0&&Am(t,i,s)}}function Eo(e,a,t,n){Ha[ul++]=e,Ha[ul++]=a,Ha[ul++]=t,Ha[ul++]=n,Tr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Cr(e,a,t,n){return Eo(e,a,t,n),So(e)}function Rn(e,a){return Eo(e,null,null,a),So(e)}function Am(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var i=!1,s=e.return;s!==null;)s.childLanes|=t,n=s.alternate,n!==null&&(n.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&a!==null&&(i=31-Ca(t),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[a]:n.push(a),a.lane=t|536870912),s):null}function So(e){if(50<Mi)throw Mi=0,fs=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var dl={};function Zg(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Na(e,a,t,n){return new Zg(e,a,t,n)}function Rr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ct(e,a){var t=e.alternate;return t===null?(t=Na(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function wm(e,a){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ao(e,a,t,n,i,s){var u=0;if(n=e,typeof n=="function")Rr(n)&&(u=1);else if(typeof n=="string")u=E1(e,t,it.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case Fa:return e=Na(31,t,a,i),e.elementType=Fa,e.lanes=s,e;case F:return Mn(t.children,i,s,a);case ee:u=8,i|=24;break;case ce:return e=Na(12,t,a,i|2),e.elementType=ce,e.lanes=s,e;case $:return e=Na(13,t,a,i),e.elementType=$,e.lanes=s,e;case ae:return e=Na(19,t,a,i),e.elementType=ae,e.lanes=s,e;case Et:case A:return e=i|32,e=Na(30,t,a,e),e.elementType=A,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case me:u=10;break e;case Ie:u=9;break e;case U:u=11;break e;case ve:u=14;break e;case _e:u=16,n=null;break e}u=29,t=Error(d(130,e===null?"null":typeof e,"")),n=null}return a=Na(u,t,a,i),a.elementType=e,a.type=n,a.lanes=s,a}function Mn(e,a,t,n){return e=Na(7,e,n,a),e.lanes=t,e}function Mr(e,a,t){return e=Na(6,e,null,a),e.lanes=t,e}function _m(e){var a=Na(18,null,null,0);return a.stateNode=e,a}function Dr(e,a,t){return a=Na(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Om=new WeakMap;function Ia(e,a){if(typeof e=="object"&&e!==null){var t=Om.get(e);return t!==void 0?t:(a={value:e,source:a,stack:jd(a)},Om.set(e,a),a)}return{value:e,source:a,stack:jd(a)}}var ml=[],fl=0,wo=null,di=0,Va=[],Ga=0,Zt=null,st=1,rt="";function Rt(e,a){ml[fl++]=di,ml[fl++]=wo,wo=e,di=a}function Tm(e,a,t){Va[Ga++]=st,Va[Ga++]=rt,Va[Ga++]=Zt,Zt=e;var n=st;e=rt;var i=32-Ca(n)-1;n&=~(1<<i),t+=1;var s=32-Ca(a)+i;if(30<s){var u=i-i%5;s=(n&(1<<u)-1).toString(32),n>>=u,i-=u,st=1<<32-Ca(a)+i|t<<i|n,rt=s+e}else st=1<<s|t<<i|n,rt=e}function _o(e){e.return!==null&&(Rt(e,1),Tm(e,1,0))}function zr(e){for(;e===wo;)wo=ml[--fl],ml[fl]=null,di=ml[--fl],ml[fl]=null;for(;e===Zt;)Zt=Va[--Ga],Va[Ga]=null,rt=Va[--Ga],Va[Ga]=null,st=Va[--Ga],Va[Ga]=null}function Cm(e,a){Va[Ga++]=st,Va[Ga++]=rt,Va[Ga++]=Zt,st=a.id,rt=a.overflow,Zt=e}var Ke=null,qe=null,he=!1,Ft=null,Ya=!1,Ur=Error(d(519));function Kt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mi(Ia(a,e)),Ur}function Rm(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[ta]=e,a[ya]=n,t){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(t=0;t<zi.length;t++)xe(zi[t],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),Gd(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),Pd(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Wp(a.textContent,t)?(n.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),n.onScroll!=null&&xe("scroll",a),n.onScrollEnd!=null&&xe("scrollend",a),n.onClick!=null&&(a.onclick=ot),a=!0):a=!1,a||Kt(e,!0)}function Oo(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:Ya=!1;return;case 27:case 3:Ya=!0;return;default:Ke=Ke.return}}function pl(e){if(e!==Ke)return!1;if(!he)return Oo(e),he=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||du(e.type,e.memoizedProps)),t=!t),t&&qe&&Kt(e),Oo(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));qe=xh(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));qe=xh(e)}else a===27?(a=qe,pn(e.type)?(e=yu,yu=null,qe=e):qe=a):qe=Ke?Qa(e.stateNode.nextSibling):null;return!0}function Dn(){qe=Ke=null,he=!1}function qr(){var e=Ft;return e!==null&&(Sa===null?Sa=e:Sa.push.apply(Sa,e),Ft=null),e}function mi(e){Ft===null?Ft=[e]:Ft.push(e)}var Lr=lt(null),zn=null,Mt=null;function Jt(e,a,t){Ue(Lr,a._currentValue),a._currentValue=t}function Dt(e){e._currentValue=Lr.current,aa(Lr)}function To(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function kr(e,a,t,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var u=i.child;s=s.firstContext;e:for(;s!==null;){var p=s;s=i;for(var y=0;y<a.length;y++)if(p.context===a[y]){s.lanes|=t,p=s.alternate,p!==null&&(p.lanes|=t),To(s.return,t,e),n||(u=null);break e}s=p.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(d(341));u.lanes|=t,s=u.alternate,s!==null&&(s.lanes|=t),To(u,t,e),u=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),To(i.return,t,e),u=i.child,u=u!==null?u.sibling:null):u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function Un(e,a,t,n){e=null;for(var i=a,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var p=i.type;Ma(i.pendingProps.value,u.value)||(e!==null?e.push(p):e=[p])}}else if(i===ao.current){if(u=i.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Bl):e=[Bl])}i=i.return}return e!==null&&kr(a,e,t,n),a.flags|=262144,e!==null}function Co(e){for(e=e.firstContext;e!==null;){if(!Ma(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qn(e){zn=e,Mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return Mm(zn,e)}function Ro(e,a){return zn===null&&qn(e),Mm(e,a)}function Mm(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Mt===null){if(e===null)throw Error(d(308));Mt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Mt=Mt.next=a;return t}var Fg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Kg=o.unstable_scheduleCallback,Jg=o.unstable_NormalPriority,Pe={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Br(){return{controller:new Fg,data:new Map,refCount:0}}function fi(e){e.refCount--,e.refCount===0&&Kg(Jg,function(){e.controller.abort()})}function Dm(e,a){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<a.length;e++){var n=a[e];t.indexOf(n)===-1&&t.push(n)}}}var pi=null;function Wg(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var hi=null,Hr=0,Ln=0,hl=null;function ex(e,a){if(hi===null){var t=hi=[];Hr=0,Ln=tu(),hl={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Hr++,a.then(zm,zm),a}function zm(){if(--Hr===0&&(pi=null,hi!==null)){hl!==null&&(hl.status="fulfilled");var e=hi;hi=null,Ln=0,hl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function ax(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(n.status="rejected",n.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),n}var Um=te.S;te.S=function(e,a){if(Op=Oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&ex(e,a),pi!==null)for(var t=Dl;t!==null;)Dm(t,pi),t=t.next;if(t=e.types,t!==null){for(var n=Dl;n!==null;)Dm(n,t),n=n.next;if(Ln!==0){n=pi,n===null&&(n=pi=[]);for(var i=0;i<t.length;i++){var s=t[i];n.indexOf(s)===-1&&n.push(s)}}}Um!==null&&Um(e,a)};var kn=lt(null);function Ir(){var e=kn.current;return e!==null?e:ze.pooledCache}function Mo(e,a){a===null?Ue(kn,kn.current):Ue(kn,a.pool)}function qm(){var e=Ir();return e===null?null:{parent:Pe._currentValue,pool:e}}var vl=Error(d(460)),Vr=Error(d(474)),Do=Error(d(542)),zo={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function km(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(ot,ot),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hm(e),e===void 0&&!("reason"in a)?Error(d(600)):e;default:if(typeof a.status=="string")a.then(ot,ot);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=n}},function(n){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Hm(e),e}throw Hn=a,vl}}function Bn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Hn=t,vl):t}}var Hn=null;function Bm(){if(Hn===null)throw Error(d(459));var e=Hn;return Hn=null,e}function Hm(e){if(e===vl||e===Do)throw Error(d(483))}var gl=null,vi=0;function Uo(e){var a=vi;return vi+=1,gl===null&&(gl=[]),km(gl,e,a)}function Wt(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function qo(e,a){throw a.$$typeof===W?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Im(e){function a(_,S){if(e){var T=_.deletions;T===null?(_.deletions=[S],_.flags|=16):T.push(S)}}function t(_,S){if(!e)return null;for(;S!==null;)a(_,S),S=S.sibling;return null}function n(_){for(var S=new Map;_!==null;)_.key===null?S.set(_.index,_):S.set(_.key,_),_=_.sibling;return S}function i(_,S){return _=Ct(_,S),_.index=0,_.sibling=null,_}function s(_,S,T){return _.index=T,e?(T=_.alternate,T!==null?(T=T.index,T<S?(_.flags|=2,S):T):(_.flags|=134217730,S)):(_.flags|=1048576,S)}function u(_){return e&&_.alternate===null&&(_.flags|=134217730),_}function p(_,S,T,D){return S===null||S.tag!==6?(S=Mr(T,_.mode,D),S.return=_,S):(S=i(S,T),S.return=_,S)}function y(_,S,T,D){var Z=T.type;return Z===F?(_=R(_,S,T.props.children,D,T.key),Wt(_,T),_):S!==null&&(S.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===_e&&Bn(Z)===S.type)?(S=i(S,T.props),Wt(S,T),S.return=_,S):(S=Ao(T.type,T.key,T.props,null,_.mode,D),Wt(S,T),S.return=_,S)}function O(_,S,T,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Dr(T,_.mode,D),S.return=_,S):(S=i(S,T.children||[]),S.return=_,S)}function R(_,S,T,D,Z){return S===null||S.tag!==7?(S=Mn(T,_.mode,D,Z),S.return=_,S):(S=i(S,T),S.return=_,S)}function z(_,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Mr(""+S,_.mode,T),S.return=_,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case P:return T=Ao(S.type,S.key,S.props,null,_.mode,T),Wt(T,S),T.return=_,T;case H:return S=Dr(S,_.mode,T),S.return=_,S;case _e:return S=Bn(S),z(_,S,T)}if(Ae(S)||ie(S))return S=Mn(S,_.mode,T,null),S.return=_,S;if(typeof S.then=="function")return z(_,Uo(S),T);if(S.$$typeof===me)return z(_,Ro(_,S),T);qo(_,S)}return null}function w(_,S,T,D){var Z=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return Z!==null?null:p(_,S,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case P:return T.key===Z?y(_,S,T,D):null;case H:return T.key===Z?O(_,S,T,D):null;case _e:return T=Bn(T),w(_,S,T,D)}if(Ae(T)||ie(T))return Z!==null?null:R(_,S,T,D,null);if(typeof T.then=="function")return w(_,S,Uo(T),D);if(T.$$typeof===me)return w(_,S,Ro(_,T),D);qo(_,T)}return null}function C(_,S,T,D,Z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return _=_.get(T)||null,p(S,_,""+D,Z);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case P:return _=_.get(D.key===null?T:D.key)||null,y(S,_,D,Z);case H:return _=_.get(D.key===null?T:D.key)||null,O(S,_,D,Z);case _e:return D=Bn(D),C(_,S,T,D,Z)}if(Ae(D)||ie(D))return _=_.get(T)||null,R(S,_,D,Z,null);if(typeof D.then=="function")return C(_,S,T,Uo(D),Z);if(D.$$typeof===me)return C(_,S,T,Ro(S,D),Z);qo(S,D)}return null}function Q(_,S,T,D){for(var Z=null,ye=null,ne=S,re=S=0,Xe=null;ne!==null&&re<T.length;re++){ne.index>re?(Xe=ne,ne=null):Xe=ne.sibling;var Ne=w(_,ne,T[re],D);if(Ne===null){ne===null&&(ne=Xe);break}e&&ne&&Ne.alternate===null&&a(_,ne),S=s(Ne,S,re),ye===null?Z=Ne:ye.sibling=Ne,ye=Ne,ne=Xe}if(re===T.length)return t(_,ne),he&&Rt(_,re),Z;if(ne===null){for(;re<T.length;re++)ne=z(_,T[re],D),ne!==null&&(S=s(ne,S,re),ye===null?Z=ne:ye.sibling=ne,ye=ne);return he&&Rt(_,re),Z}for(ne=n(ne);re<T.length;re++)Xe=C(ne,_,re,T[re],D),Xe!==null&&(e&&(Ne=Xe.alternate,Ne!==null&&ne.delete(Ne.key===null?re:Ne.key)),S=s(Xe,S,re),ye===null?Z=Xe:ye.sibling=Xe,ye=Xe);return e&&ne.forEach(function(bn){return a(_,bn)}),he&&Rt(_,re),Z}function J(_,S,T,D){if(T==null)throw Error(d(151));for(var Z=null,ye=null,ne=S,re=S=0,Xe=null,Ne=T.next();ne!==null&&!Ne.done;re++,Ne=T.next()){ne.index>re?(Xe=ne,ne=null):Xe=ne.sibling;var bn=w(_,ne,Ne.value,D);if(bn===null){ne===null&&(ne=Xe);break}e&&ne&&bn.alternate===null&&a(_,ne),S=s(bn,S,re),ye===null?Z=bn:ye.sibling=bn,ye=bn,ne=Xe}if(Ne.done)return t(_,ne),he&&Rt(_,re),Z;if(ne===null){for(;!Ne.done;re++,Ne=T.next())Ne=z(_,Ne.value,D),Ne!==null&&(S=s(Ne,S,re),ye===null?Z=Ne:ye.sibling=Ne,ye=Ne);return he&&Rt(_,re),Z}for(ne=n(ne);!Ne.done;re++,Ne=T.next())Ne=C(ne,_,re,Ne.value,D),Ne!==null&&(e&&(Xe=Ne.alternate,Xe!==null&&ne.delete(Xe.key===null?re:Xe.key)),S=s(Ne,S,re),ye===null?Z=Ne:ye.sibling=Ne,ye=Ne);return e&&ne.forEach(function(U1){return a(_,U1)}),he&&Rt(_,re),Z}function pe(_,S,T,D){if(typeof T=="object"&&T!==null&&T.type===F&&T.key===null&&T.props.ref===void 0&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case P:e:{for(var Z=T.key;S!==null;){if(S.key===Z){if(Z=T.type,Z===F){if(S.tag===7){t(_,S.sibling),D=i(S,T.props.children),Wt(D,T),D.return=_,_=D;break e}}else if(S.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===_e&&Bn(Z)===S.type){t(_,S.sibling),D=i(S,T.props),Wt(D,T),D.return=_,_=D;break e}t(_,S);break}else a(_,S);S=S.sibling}T.type===F?(D=Mn(T.props.children,_.mode,D,T.key),Wt(D,T),D.return=_,_=D):(D=Ao(T.type,T.key,T.props,null,_.mode,D),Wt(D,T),D.return=_,_=D)}return u(_);case H:e:{for(Z=T.key;S!==null;){if(S.key===Z)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){t(_,S.sibling),D=i(S,T.children||[]),D.return=_,_=D;break e}else{t(_,S);break}else a(_,S);S=S.sibling}D=Dr(T,_.mode,D),D.return=_,_=D}return u(_);case _e:return T=Bn(T),pe(_,S,T,D)}if(Ae(T))return Q(_,S,T,D);if(ie(T)){if(Z=ie(T),typeof Z!="function")throw Error(d(150));return T=Z.call(T),J(_,S,T,D)}if(typeof T.then=="function")return pe(_,S,Uo(T),D);if(T.$$typeof===me)return pe(_,S,Ro(_,T),D);qo(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(t(_,S.sibling),D=i(S,T),D.return=_,_=D):(t(_,S),D=Mr(T,_.mode,D),D.return=_,_=D),u(_)):t(_,S)}return function(_,S,T,D){try{vi=0;var Z=pe(_,S,T,D);return gl=null,Z}catch(ne){if(ne===vl||ne===Do)throw ne;var ye=Na(29,ne,null,_.mode);return ye.lanes=D,ye.return=_,ye}finally{}}}var In=Im(!0),Vm=Im(!1),en=!1;function Gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function an(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function tn(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(we&2)!==0){var i=n.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a,a=So(e),Am(e,null,t),a}return Eo(e,n,a,t),So(e)}function gi(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Td(e,t)}}function Pr(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?i=s=u:s=s.next=u,t=t.next}while(t!==null);s===null?i=s=a:s=s.next=a}else i=s=a;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Qr=!1;function xi(){if(Qr){var e=hl;if(e!==null)throw e}}function bi(e,a,t,n){Qr=!1;var i=e.updateQueue;en=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var y=p,O=y.next;y.next=null,u===null?s=O:u.next=O,u=y;var R=e.alternate;R!==null&&(R=R.updateQueue,p=R.lastBaseUpdate,p!==u&&(p===null?R.firstBaseUpdate=O:p.next=O,R.lastBaseUpdate=y))}if(s!==null){var z=i.baseState;u=0,R=O=y=null,p=s;do{var w=p.lane&-536870913,C=w!==p.lane;if(C?(be&w)===w:(n&w)===w){w!==0&&w===Ln&&(Qr=!0),R!==null&&(R=R.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var Q=e,J=p;w=a;var pe=t;switch(J.tag){case 1:if(Q=J.payload,typeof Q=="function"){z=Q.call(pe,z,w);break e}z=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,w=typeof Q=="function"?Q.call(pe,z,w):Q,w==null)break e;z=K({},z,w);break e;case 2:en=!0}}w=p.callback,w!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[w]:C.push(w))}else C={lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},R===null?(O=R=C,y=z):R=R.next=C,u|=w;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;C=p,p=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);R===null&&(y=z),i.baseState=y,i.firstBaseUpdate=O,i.lastBaseUpdate=R,s===null&&(i.shared.lanes=0),un|=u,e.lanes=u,e.memoizedState=z}}function Gm(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Ym(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Gm(t[e],a)}var nn=lt(null),Lo=lt(0);function Pm(e,a){e=kt,Ue(Lo,e),Ue(nn,a),kt=e|a.baseLanes}function $r(){Ue(Lo,kt),Ue(nn,nn.current)}function Xr(){kt=Lo.current,aa(nn),aa(Lo)}var la=lt(null),ua=null;function ln(e){var a=e.alternate;Ue(ia,ia.current&1),Ue(la,e),ua===null&&(a===null||nn.current!==null||a.memoizedState!==null)&&(ua=e)}function Zr(e){Ue(ia,ia.current),Ue(la,e),ua===null&&(ua=e)}function Qm(e){e.tag===22?(Ue(ia,ia.current),Ue(la,e),ua===null&&(ua=e)):on()}function on(){Ue(ia,ia.current),Ue(la,la.current)}function Da(e){aa(la),ua===e&&(ua=null),aa(ia)}var ia=lt(0);function yi(e,a){Ue(la,la.current),Ue(ia,a)}function Fr(e){aa(ia),aa(la),ua===e&&(ua=null)}function ko(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||xu(t)||bu(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var zt=0,fe=null,Me=null,Qe=null,Bo=!1,xl=!1,Vn=!1,Ho=0,Ni=0,bl=null,tx=0;function Ve(){throw Error(d(321))}function Kr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Ma(e[t],a[t]))return!1;return!0}function Jr(e,a,t,n,i,s){return zt=s,fe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,te.H=e===null||e.memoizedState===null?Cf:Rf,Vn=!1,s=t(n,i),Vn=!1,xl&&(s=Xm(a,t,n,i)),$m(e),s}function $m(e){te.H=$o;var a=Me!==null&&Me.next!==null;if(zt=0,Qe=Me=fe=null,Bo=!1,Ni=0,bl=null,a)throw Error(d(300));e===null||$e||(e=e.dependencies,e!==null&&Co(e)&&($e=!0))}function Xm(e,a,t,n){fe=e;var i=0;do{if(xl&&(bl=null),Ni=0,xl=!1,25<=i)throw Error(d(301));if(i+=1,Qe=Me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}te.H=ux,s=a(t,n)}while(xl);return s}function nx(){var e=te.H,a=e.useState()[0];return a=typeof a.then=="function"?ji(a):a,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(fe.flags|=1024),a}function Wr(){var e=Ho!==0;return Ho=0,e}function ec(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function ac(e){if(Bo){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Bo=!1}zt=0,Qe=Me=fe=null,xl=!1,Ni=Ho=0,bl=null}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?fe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ye(){if(Me===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var a=Qe===null?fe.memoizedState:Qe.next;if(a!==null)Qe=a,Me=e;else{if(e===null)throw fe.alternate===null?Error(d(467)):Error(d(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Qe===null?fe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ji(e){var a=Ni;return Ni+=1,bl===null&&(bl=[]),e=km(bl,e,a),a=fe,(Qe===null?a.memoizedState:Qe.next)===null&&(a=a.alternate,te.H=a===null||a.memoizedState===null?Cf:Rf),e}function Vo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ji(e);if(e.$$typeof===I)return;if(e.$$typeof===me)return na(e)}throw Error(d(438,String(e)))}function tc(e){var a=null,t=fe.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=fe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Io(),fe.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=An;return a.index++,t}function Ut(e,a){return typeof a=="function"?a(e):a}function Go(e){var a=Ye();return nc(a,Me,e)}function nc(e,a,t){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=t;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}a.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{a=i.next;var p=u=null,y=null,O=a,R=!1;do{var z=O.lane&-536870913;if(z!==O.lane?(be&z)===z:(zt&z)===z){var w=O.revertLane;if(w===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),z===Ln&&(R=!0);else if((zt&w)===w){O=O.next,w===Ln&&(R=!0);continue}else z={lane:0,revertLane:O.revertLane,gesture:null,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},y===null?(p=y=z,u=s):y=y.next=z,fe.lanes|=w,un|=w;z=O.action,Vn&&t(s,z),s=O.hasEagerState?O.eagerState:t(s,z)}else w={lane:z,revertLane:O.revertLane,gesture:O.gesture,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},y===null?(p=y=w,u=s):y=y.next=w,fe.lanes|=z,un|=z;O=O.next}while(O!==null&&O!==a);if(y===null?u=s:y.next=p,!Ma(s,e.memoizedState)&&($e=!0,R&&(t=hl,t!==null)))throw t;e.memoizedState=s,e.baseState=u,e.baseQueue=y,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function lc(e){var a=Ye(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,s=a.memoizedState;if(i!==null){t.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);Ma(s,a.memoizedState)||($e=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),t.lastRenderedState=s}return[s,n]}function Zm(e,a,t){var n=fe,i=Ye(),s=he;if(s){if(t===void 0)throw Error(d(407));t=t()}else t=a();var u=!Ma((Me||i).memoizedState,t);if(u&&(i.memoizedState=t,$e=!0),i=i.queue,sc(Jm.bind(null,n,i,e),[e]),e=i.getSnapshot!==a||u||Qe!==null&&(Qe.memoizedState.tag&1)!==0,yl(e?9:8,{destroy:void 0},Km.bind(null,n,i,t,a),null),e){if(n.flags|=2048,ze===null)throw Error(d(349));s||(zt&127)!==0||Fm(n,a,t)}return t}function Fm(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=fe.updateQueue,a===null?(a=Io(),fe.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Km(e,a,t,n){a.value=t,a.getSnapshot=n,Wm(a)&&ef(e)}function Jm(e,a,t){return t(function(){Wm(a)&&ef(e)})}function Wm(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Ma(e,t)}catch{return!0}}function ef(e){var a=Rn(e,2);a!==null&&Aa(a,e,2)}function ic(e){var a=va();if(typeof e=="function"){var t=e;if(e=t(),Vn){Qt(!0);try{t()}finally{Qt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:e},a}function af(e,a,t,n){return e.baseState=t,nc(e,Me,typeof n=="function"?n:Ut)}function lx(e,a,t,n,i){if(Qo(e))throw Error(d(485));if(e=a.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};te.T!==null?t(!0):s.isTransition=!1,n(s),t=a.pending,t===null?(s.next=a.pending=s,tf(a,s)):(s.next=t.next,a.pending=t.next=s)}}function tf(e,a){var t=a.action,n=a.payload,i=e.state;if(a.isTransition){var s=te.T,u={};u.types=s!==null?s.types:null,te.T=u;try{var p=t(i,n),y=te.S;y!==null&&y(u,p),nf(e,a,p)}catch(O){oc(e,a,O)}finally{s!==null&&u.types!==null&&(s.types=u.types),te.T=s}}else try{s=t(i,n),nf(e,a,s)}catch(O){oc(e,a,O)}}function nf(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){lf(e,a,n)},function(n){return oc(e,a,n)}):lf(e,a,t)}function lf(e,a,t){a.status="fulfilled",a.value=t,of(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,tf(e,t)))}function oc(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,of(a),a=a.next;while(a!==n)}e.action=null}function of(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function sf(e,a){return a}function rf(e,a){if(he){var t=ze.formState;if(t!==null){e:{var n=fe;if(he){if(qe){a:{for(var i=qe,s=Ya;i.nodeType!==8;){if(!s){i=null;break a}if(i=Qa(i.nextSibling),i===null){i=null;break a}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){qe=Qa(i.nextSibling),n=i.data==="F!";break e}}Kt(n)}n=!1}n&&(a=t[0])}}return t=va(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sf,lastRenderedState:a},t.queue=n,t=_f.bind(null,fe,n),n.dispatch=t,n=ic(!1),s=mc.bind(null,fe,!1,n.queue),n=va(),i={state:a,dispatch:null,action:e,pending:null},n.queue=i,t=lx.bind(null,fe,i,s,t),i.dispatch=t,n.memoizedState=e,[a,t,!1]}function cf(e){var a=Ye();return uf(a,Me,e)}function uf(e,a,t){if(a=nc(e,a,sf)[0],e=Go(Ut)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=ji(a)}catch(u){throw u===vl?Do:u}else n=a;a=Ye();var i=a.queue,s=i.dispatch;return t!==a.memoizedState&&(fe.flags|=2048,yl(9,{destroy:void 0},ix.bind(null,i,t),null)),[n,s,e]}function ix(e,a){e.action=a}function df(e){var a=Ye(),t=Me;if(t!==null)return uf(a,t,e);Ye(),a=a.memoizedState,t=Ye();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function yl(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=fe.updateQueue,a===null&&(a=Io(),fe.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function mf(){return Ye().memoizedState}function Yo(e,a,t,n){var i=va();fe.flags|=e,i.memoizedState=yl(1|a,{destroy:void 0},t,n===void 0?null:n)}function Po(e,a,t,n){var i=Ye();n=n===void 0?null:n;var s=i.memoizedState.inst;Me!==null&&n!==null&&Kr(n,Me.memoizedState.deps)?i.memoizedState=yl(a,s,t,n):(fe.flags|=e,i.memoizedState=yl(1|a,s,t,n))}function ff(e,a){Yo(8390656,8,e,a)}function sc(e,a){Po(2048,8,e,a)}function ox(e){fe.flags|=4;var a=fe.updateQueue;if(a===null)a=Io(),fe.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function pf(e){var a=Ye().memoizedState;return ox({ref:a,nextImpl:e}),function(){if((we&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function hf(e,a){return Po(4,2,e,a)}function vf(e,a){return Po(4,4,e,a)}function gf(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function xf(e,a,t){t=t!=null?t.concat([e]):null,Po(4,4,gf.bind(null,a,e),t)}function rc(){}function bf(e,a){var t=Ye();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Kr(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function yf(e,a){var t=Ye();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Kr(a,n[1]))return n[0];if(n=e(),Vn){Qt(!0);try{e()}finally{Qt(!1)}}return t.memoizedState=[n,a],n}function cc(e,a,t){return t===void 0||(zt&1073741824)!==0&&(be&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Cp(),fe.lanes|=e,un|=e,t)}function Nf(e,a,t,n){return Ma(t,a)?t:nn.current!==null?(e=cc(e,t,n),Ma(e,a)||($e=!0),e):(zt&106)===0||(zt&1073741824)!==0&&(be&261930)===0?($e=!0,e.memoizedState=t):(e=Cp(),fe.lanes|=e,un|=e,a)}function jf(e,a,t,n,i){var s=ue.p;ue.p=s!==0&&8>s?s:8;var u=te.T,p={};p.types=u!==null?u.types:null,te.T=p,mc(e,!1,a,t);try{var y=i(),O=te.S;if(O!==null&&O(p,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var R=ax(y,n);Ei(e,a,R,La(e))}else Ei(e,a,n,La(e))}catch(z){Ei(e,a,{then:function(){},status:"rejected",reason:z},La())}finally{ue.p=s,u!==null&&p.types!==null&&(u.types=p.types),te.T=u}}function sx(){}function uc(e,a,t,n){if(e.tag!==5)throw Error(d(476));var i=Ef(e).queue;jf(e,i,a,St,t===null?sx:function(){return Sf(e),t(n)})}function Ef(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:St,baseState:St,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:St},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Sf(e){var a=Ef(e);a.next===null&&(a=e.alternate.memoizedState),Ei(e,a.next.queue,{},La())}function dc(){return na(Bl)}function Af(){return Ye().memoizedState}function wf(){return Ye().memoizedState}function rx(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=La();e=an(t);var n=tn(a,e,t);n!==null&&(Aa(n,a,t),gi(n,a,t)),a={cache:Br()},e.payload=a;return}a=a.return}}function cx(e,a,t){var n=La();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Qo(e)?Of(a,t):(t=Cr(e,a,t,n),t!==null&&(Aa(t,e,n),Tf(t,a,n)))}function _f(e,a,t){var n=La();Ei(e,a,t,n)}function Ei(e,a,t,n){var i={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Of(a,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var u=a.lastRenderedState,p=s(u,t);if(i.hasEagerState=!0,i.eagerState=p,Ma(p,u))return Eo(e,a,i,0),ze===null&&jo(),!1}catch{}finally{}if(t=Cr(e,a,i,n),t!==null)return Aa(t,e,n),Tf(t,a,n),!0}return!1}function mc(e,a,t,n){if(n={lane:2,revertLane:tu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e)){if(a)throw Error(d(479))}else a=Cr(e,t,n,2),a!==null&&Aa(a,e,2)}function Qo(e){var a=e.alternate;return e===fe||a!==null&&a===fe}function Of(e,a){xl=Bo=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Tf(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Td(e,t)}}var $o={readContext:na,use:Vo,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve,useEffectEvent:Ve},Cf={readContext:na,use:Vo,useCallback:function(e,a){return va().memoizedState=[e,a===void 0?null:a],e},useContext:na,useEffect:ff,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Yo(4194308,4,gf.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Yo(4194308,4,e,a)},useInsertionEffect:function(e,a){Yo(4,2,e,a)},useMemo:function(e,a){var t=va();a=a===void 0?null:a;var n=e();if(Vn){Qt(!0);try{e()}finally{Qt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=va();if(t!==void 0){var i=t(a);if(Vn){Qt(!0);try{t(a)}finally{Qt(!1)}}}else i=a;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=cx.bind(null,fe,e),[n.memoizedState,e]},useRef:function(e){var a=va();return e={current:e},a.memoizedState=e},useState:function(e){e=ic(e);var a=e.queue,t=_f.bind(null,fe,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:rc,useDeferredValue:function(e,a){var t=va();return cc(t,e,a)},useTransition:function(){var e=ic(!1);return e=jf.bind(null,fe,e.queue,!0,!1),va().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=fe,i=va();if(he){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),ze===null)throw Error(d(349));(be&127)!==0||Fm(n,a,t)}i.memoizedState=t;var s={value:t,getSnapshot:a};return i.queue=s,ff(Jm.bind(null,n,s,e),[e]),n.flags|=2048,yl(9,{destroy:void 0},Km.bind(null,n,s,t,a),null),t},useId:function(){var e=va(),a=ze.identifierPrefix;if(he){var t=rt,n=st;t=(n&~(1<<32-Ca(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Ho++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=tx++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:dc,useFormState:rf,useActionState:rf,useOptimistic:function(e){var a=va();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=mc.bind(null,fe,!0,t),t.dispatch=a,[e,a]},useMemoCache:tc,useCacheRefresh:function(){return va().memoizedState=rx.bind(null,fe)},useEffectEvent:function(e){var a=va(),t={impl:e};return a.memoizedState=t,function(){if((we&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Rf={readContext:na,use:Vo,useCallback:bf,useContext:na,useEffect:sc,useImperativeHandle:xf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:yf,useReducer:Go,useRef:mf,useState:function(){return Go(Ut)},useDebugValue:rc,useDeferredValue:function(e,a){var t=Ye();return Nf(t,Me.memoizedState,e,a)},useTransition:function(){var e=Go(Ut)[0],a=Ye().memoizedState;return[typeof e=="boolean"?e:ji(e),a]},useSyncExternalStore:Zm,useId:Af,useHostTransitionStatus:dc,useFormState:cf,useActionState:cf,useOptimistic:function(e,a){var t=Ye();return af(t,Me,e,a)},useMemoCache:tc,useCacheRefresh:wf,useEffectEvent:pf},ux={readContext:na,use:Vo,useCallback:bf,useContext:na,useEffect:sc,useImperativeHandle:xf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:yf,useReducer:lc,useRef:mf,useState:function(){return lc(Ut)},useDebugValue:rc,useDeferredValue:function(e,a){var t=Ye();return Me===null?cc(t,e,a):Nf(t,Me.memoizedState,e,a)},useTransition:function(){var e=lc(Ut)[0],a=Ye().memoizedState;return[typeof e=="boolean"?e:ji(e),a]},useSyncExternalStore:Zm,useId:Af,useHostTransitionStatus:dc,useFormState:df,useActionState:df,useOptimistic:function(e,a){var t=Ye();return Me!==null?af(t,Me,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:tc,useCacheRefresh:wf,useEffectEvent:pf};function fc(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:K({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var pc={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=La(),i=an(n);i.payload=a,t!=null&&(i.callback=t),a=tn(e,i,n),a!==null&&(Aa(a,e,n),gi(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=La(),i=an(n);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=tn(e,i,n),a!==null&&(Aa(a,e,n),gi(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=La(),n=an(t);n.tag=2,a!=null&&(n.callback=a),a=tn(e,n,t),a!==null&&(Aa(a,e,t),gi(a,e,t))}};function Mf(e,a,t,n,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):a.prototype&&a.prototype.isPureReactComponent?!ci(t,n)||!ci(i,s):!0}function Df(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&pc.enqueueReplaceState(a,a.state,null)}function Gn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=K({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function zf(e){No(e)}function Uf(e){console.error(e)}function qf(e){No(e)}function Xo(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Lf(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function hc(e,a,t){return t=an(t),t.tag=3,t.payload={element:null},t.callback=function(){Xo(e,a)},t}function kf(e){return e=an(e),e.tag=3,e}function Bf(e,a,t,n){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){Lf(a,t,n)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Lf(a,t,n),typeof i!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function dx(e,a,t,n,i){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Un(a,t,i,!0),t=la.current,t!==null){switch(t.tag){case 31:case 13:case 19:return ua===null?hs():t.alternate===null&&Ge===0&&(Ge=3),t.flags&=-257,t.flags|=65536,t.lanes=i,n===zo?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Wc(e,n,i)),!1;case 22:return t.flags|=65536,n===zo?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Wc(e,n,i)),!1}throw Error(d(435,t.tag))}return Wc(e,n,i),hs(),!1}if(he)return a=la.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,n!==Ur&&(e=Error(d(422),{cause:n}),mi(Ia(e,t)))):(n!==Ur&&(a=Error(d(423),{cause:n}),mi(Ia(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Ia(n,t),i=hc(e.stateNode,n,i),Pr(e,i),Ge!==4&&(Ge=2)),!1;var s=Error(d(520),{cause:n});if(s=Ia(s,t),Ri===null?Ri=[s]:Ri.push(s),Ge!==4&&(Ge=2),a===null)return!0;n=Ia(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=hc(t.stateNode,n,e),Pr(t,e),!1;case 1:if(a=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(dn===null||!dn.has(s))))return t.flags|=65536,i&=-i,t.lanes|=i,i=kf(i),Bf(i,e,t,n),Pr(t,i),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var vc=Error(d(461)),$e=!1;function Ze(e,a,t,n){a.child=e===null?Vm(a,null,t,n):In(a,e.child,t,n)}function Hf(e,a,t,n,i){t=t.render;var s=a.ref;if("ref"in n){var u={};for(var p in n)p!=="ref"&&(u[p]=n[p])}else u=n;return qn(a),n=Jr(e,a,t,u,s,i),p=Wr(),e!==null&&!$e?(ec(e,a,i),qt(e,a,i)):(he&&p&&_o(a),a.flags|=1,Ze(e,a,n,i),a.child)}function If(e,a,t,n,i){if(e===null){var s=t.type;return typeof s=="function"&&!Rr(s)&&s.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=s,Vf(e,a,s,n,i)):(e=Ao(t.type,null,n,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,!Sc(e,i)){var u=s.memoizedProps;if(t=t.compare,t=t!==null?t:ci,t(u,n)&&e.ref===a.ref)return qt(e,a,i)}return a.flags|=1,e=Ct(s,n),e.ref=a.ref,e.return=a,a.child=e}function Vf(e,a,t,n,i){if(e!==null){var s=e.memoizedProps;if(ci(s,n)&&e.ref===a.ref)if($e=!1,a.pendingProps=n=s,Sc(e,i))(e.flags&131072)!==0&&($e=!0);else return a.lanes=e.lanes,qt(e,a,i)}return gc(e,a,t,n,i)}function Gf(e,a,t,n){var i=n.children,s=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(n=a.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,a.child=null;return Yf(e,a,s,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mo(a,s!==null?s.cachePool:null),s!==null?Pm(a,s):$r(),Qm(a);else return n=a.lanes=536870912,Yf(e,a,s!==null?s.baseLanes|t:t,t,n)}else s!==null?(Mo(a,s.cachePool),Pm(a,s),on(),a.memoizedState=null):(e!==null&&Mo(a,null),$r(),on());return Ze(e,a,i,t),a.child}function Si(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Yf(e,a,t,n,i){var s=Ir();return s=s===null?null:{parent:Pe._currentValue,pool:s},a.memoizedState={baseLanes:t,cachePool:s},e!==null&&Mo(a,null),$r(),Qm(a),e!==null&&Un(e,a,n,!0),a.childLanes=i,null}function Zo(e,a){return a=Fo({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Pf(e,a,t){return In(a,e.child,null,t),e=Zo(a,a.pendingProps),e.flags|=2,Da(a),a.memoizedState=null,e}function mx(e,a,t){var n=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(he){if(n.mode==="hidden")return e=Zo(a,n),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Si(null,e);if(Zr(a),(e=qe)?(e=gh(e,Ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Zt!==null?{id:st,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=_m(e),t.return=a,a.child=t,Ke=a,qe=null)):e=null,e===null)throw Kt(a);return a.lanes=536870912,null}return Zo(a,n)}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(Zr(a),i)if(a.flags&256)a.flags&=-257,a=Pf(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if($e||Un(e,a,t,!1),i=(t&e.childLanes)!==0,$e||i){if(nn.current===null){if(n=ze,n!==null&&(u=Cd(n,t),u!==0&&u!==s.retryLane))throw s.retryLane=u,Rn(e,u),Aa(n,e,u),vc;hs()}a=Pf(e,a,t)}else e=s.treeContext,qe=Qa(u.nextSibling),Ke=a,he=!0,Ft=null,Ya=!1,e!==null&&Cm(a,e),a=Zo(a,n),a.flags|=134221824;return a}return e=Ct(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Nl(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function gc(e,a,t,n,i){return qn(a),t=Jr(e,a,t,n,void 0,i),n=Wr(),e!==null&&!$e?(ec(e,a,i),qt(e,a,i)):(he&&n&&_o(a),a.flags|=1,Ze(e,a,t,i),a.child)}function Qf(e,a,t,n,i,s){return qn(a),a.updateQueue=null,t=Xm(a,n,t,i),$m(e),n=Wr(),e!==null&&!$e?(ec(e,a,s),qt(e,a,s)):(he&&n&&_o(a),a.flags|=1,Ze(e,a,t,s),a.child)}function $f(e,a,t,n,i){if(qn(a),a.stateNode===null){var s=dl,u=t.contextType;typeof u=="object"&&u!==null&&(s=na(u)),s=new t(n,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pc,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=n,s.state=a.memoizedState,s.refs={},Gr(a),u=t.contextType,s.context=typeof u=="object"&&u!==null?na(u):dl,s.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(fc(a,t,u,n),s.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&pc.enqueueReplaceState(s,s.state,null),bi(a,n,s,i),xi(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){s=a.stateNode;var p=a.memoizedProps,y=Gn(t,p);s.props=y;var O=s.context,R=t.contextType;u=dl,typeof R=="object"&&R!==null&&(u=na(R));var z=t.getDerivedStateFromProps;R=typeof z=="function"||typeof s.getSnapshotBeforeUpdate=="function",p=a.pendingProps!==p,R||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p||O!==u)&&Df(a,s,n,u),en=!1;var w=a.memoizedState;s.state=w,bi(a,n,s,i),xi(),O=a.memoizedState,p||w!==O||en?(typeof z=="function"&&(fc(a,t,z,n),O=a.memoizedState),(y=en||Mf(a,t,y,n,w,O,u))?(R||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=O),s.props=n,s.state=O,s.context=u,n=y):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{s=a.stateNode,Yr(e,a),u=a.memoizedProps,R=Gn(t,u),s.props=R,z=a.pendingProps,w=s.context,O=t.contextType,y=dl,typeof O=="object"&&O!==null&&(y=na(O)),p=t.getDerivedStateFromProps,(O=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==z||w!==y)&&Df(a,s,n,y),en=!1,w=a.memoizedState,s.state=w,bi(a,n,s,i),xi();var C=a.memoizedState;u!==z||w!==C||en||e!==null&&e.dependencies!==null&&Co(e.dependencies)?(typeof p=="function"&&(fc(a,t,p,n),C=a.memoizedState),(R=en||Mf(a,t,R,n,w,C,y)||e!==null&&e.dependencies!==null&&Co(e.dependencies))?(O||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,C,y),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,C,y)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=C),s.props=n,s.state=C,s.context=y,n=R):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=1024),n=!1)}return s=n,Nl(e,a),n=(a.flags&128)!==0,s||n?(s=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,e!==null&&n?(a.child=In(a,e.child,null,i),a.child=In(a,null,t,i)):Ze(e,a,t,i),a.memoizedState=s.state,e=a.child):e=qt(e,a,i),e}function Xf(e,a,t,n){return Dn(),a.flags|=256,Ze(e,a,t,n),a.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:qm()}}function yc(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=qa),e}function Zf(e,a,t){var n=a.pendingProps,i=!1,s=(a.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(ia.current&2)!==0),u&&(i=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(he){if(i?ln(a):on(),(e=qe)?(e=gh(e,Ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Zt!==null?{id:st,overflow:rt}:null,retryLane:536870912,hydrationErrors:null},t=_m(e),t.return=a,a.child=t,Ke=a,qe=null)):e=null,e===null)throw Kt(a);return bu(e)?a.lanes=32:a.lanes=536870912,null}return s=n.children,n=n.fallback,i?(on(),i=a.mode,s=Fo({mode:"hidden",children:s},i),n=Mn(n,i,t,null),s.return=a,n.return=a,s.sibling=n,a.child=s,n=a.child,n.memoizedState=bc(t),n.childLanes=yc(e,u,t),a.memoizedState=xc,Si(null,n)):(ln(a),Nc(a,s))}var p=e.memoizedState;if(p!==null){var y=p.dehydrated;if(y!==null)return fx(e,a,s,u,n,y,p,t)}return i?(on(),i=n.fallback,s=a.mode,p=e.child,y=p.sibling,n=Ct(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&1206910976,y!==null?i=Ct(y,i):(i=Mn(i,s,t,null),i.flags|=2),i.return=a,n.return=a,n.sibling=i,a.child=n,Si(null,n),n=a.child,i=e.child.memoizedState,i===null?i=bc(t):(s=i.cachePool,s!==null?(p=Pe._currentValue,s=s.parent!==p?{parent:p,pool:p}:s):s=qm(),i={baseLanes:i.baseLanes|t,cachePool:s}),n.memoizedState=i,n.childLanes=yc(e,u,t),a.memoizedState=xc,Si(e.child,n)):(ln(a),t=e.child,e=t.sibling,t=Ct(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=t,a.memoizedState=null,t)}function Nc(e,a){return a=Fo({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Fo(e,a){return e=Na(22,e,null,a),e.lanes=0,e}function Ko(e,a,t){return In(a,e.child,null,t),e=Nc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function fx(e,a,t,n,i,s,u,p){if(t)return a.flags&256?(ln(a),a.flags&=-257,Ko(e,a,p)):a.memoizedState!==null?(on(),a.child=e.child,a.flags|=128,null):(on(),s=i.fallback,u=a.mode,i=Fo({mode:"visible",children:i.children},u),s=Mn(s,u,p,null),s.flags|=2,i.return=a,s.return=a,i.sibling=s,a.child=i,In(a,e.child,null,p),i=a.child,i.memoizedState=bc(p),i.childLanes=yc(e,n,p),a.memoizedState=xc,Si(null,i));if(ln(a),bu(s)){if(n=s.nextSibling&&s.nextSibling.dataset,n)var y=n.dgst;return n=y,n!==""&&(i=Error(d(419)),i.stack="",i.digest=n,mi({value:i,source:null,stack:null})),Ko(e,a,p)}if($e||Un(e,a,p,!1),n=(p&e.childLanes)!==0,$e||n){if(nn.current!==null)return Ko(e,a,p);if(n=ze,n!==null&&(i=Cd(n,p),i!==0&&i!==u.retryLane))throw u.retryLane=i,Rn(e,i),Aa(n,e,i),vc;return xu(s)||hs(),Ko(e,a,p)}return xu(s)?(a.flags|=192,a.child=e.child,null):(e=u.treeContext,qe=Qa(s.nextSibling),Ke=a,he=!0,Ft=null,Ya=!1,e!==null&&Cm(a,e),a=Nc(a,i.children),a.flags|=134221824,a)}function Ff(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),To(e.return,a,t)}function Kf(e){for(var a=null;e!==null;){var t=e.alternate;t!==null&&ko(t)===null&&(a=e),e=e.sibling}return a}function Jo(e,a,t,n,i,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i,treeForkCount:s}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=t,u.tailMode=i,u.treeForkCount=s)}function jc(e){var a=e.child;for(e.child=null;a!==null;){var t=a.sibling;a.sibling=e.child,e.child=a,a=t}}function Ec(e,a,t){var n=a.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var u=ia.current;if(a.flags&128)return yi(a,u),null;var p=(u&2)!==0;if(p?(u=u&1|2,a.flags|=128):u&=1,yi(a,u),i==="backwards"&&e!==null?(jc(e),Ze(e,a,n,t),jc(e)):Ze(e,a,n,t),n=he?di:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,t,a);else if(e.tag===19)Ff(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"backwards":t=Kf(a.child),t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null,jc(a)),Jo(a,!0,i,null,s,n);break;case"unstable_legacy-backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Jo(a,!0,t,null,s,n);break;case"together":Jo(a,!1,null,null,void 0,n);break;case"independent":a.memoizedState=null;break;default:t=Kf(a.child),t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),Jo(a,!1,i,t,s,n)}return a.child}function Jf(e,a,t){var n=a.pendingProps;return Jt(a,a.type,n.value),Ze(e,a,n.children,t),a.child}function qt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),un|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Un(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Ct(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ct(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Sc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Co(e)))}function px(e,a,t){switch(a.tag){case 3:to(a,a.stateNode.containerInfo),Jt(a,Pe,e.memoizedState.cache),Dn();break;case 27:case 5:Ks(a);break;case 4:to(a,a.stateNode.containerInfo);break;case 10:Jt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Zr(a),null;break;case 13:var n=a.memoizedState;if(n!==null){if(n.dehydrated!==null)return ln(a),a.flags|=128,null;n=Un(e,a,t,!1);var i=a.child.childLanes;return n||(t&i)!==0?Zf(e,a,t):(ln(a),e=qt(e,a,t),e!==null?e.sibling:null)}ln(a);break;case 19:if(a.flags&128)return Ec(e,a,t);if(i=(e.flags&128)!==0,n=(t&a.childLanes)!==0,n||(Un(e,a,t,!1),n=(t&a.childLanes)!==0),i){if(n)return Ec(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),yi(a,ia.current),n)break;return null;case 22:return a.lanes=0,Gf(e,a,t,a.pendingProps);case 24:Jt(a,Pe,e.memoizedState.cache)}return qt(e,a,t)}function Wf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)$e=!0;else{if(!Sc(e,t)&&(a.flags&128)===0)return $e=!1,px(e,a,t);$e=(e.flags&131072)!==0}else $e=!1,he&&(a.flags&1048576)!==0&&Tm(a,di,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Bn(a.elementType),a.type=e,typeof e=="function")Rr(e)?(n=Gn(e,n),a.tag=1,a=$f(null,a,e,n,t)):(a.tag=0,a=gc(null,a,e,n,t));else{if(e!=null){var i=e.$$typeof;if(i===U){a.tag=11,a=Hf(null,a,e,n,t);break e}else if(i===ve){a.tag=14,a=If(null,a,e,n,t);break e}else if(i===me){a.tag=10,a.type=e,a=Jf(null,a,t);break e}}throw a=Ee(e)||e,Error(d(306,a,""))}}return a;case 0:return gc(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,i=Gn(n,a.pendingProps),$f(e,a,n,i,t);case 3:e:{if(to(a,a.stateNode.containerInfo),e===null)throw Error(d(387));n=a.pendingProps;var s=a.memoizedState;i=s.element,Yr(e,a),bi(a,n,null,t);var u=a.memoizedState;if(n=u.cache,Jt(a,Pe,n),n!==s.cache&&kr(a,[Pe],t,!0),xi(),n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=Xf(e,a,n,t);break e}else if(n!==i){i=Ia(Error(d(424)),a),mi(i),a=Xf(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Qa(e.firstChild),Ke=a,he=!0,Ft=null,Ya=!0,t=Vm(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Dn(),n===i){a=qt(e,a,t);break e}Ze(e,a,n,t)}a=a.child}return a;case 26:return Nl(e,a),e===null?(t=Sh(a.type,null,a.pendingProps,null))?a.memoizedState=t:he||(a.stateNode=nh(a.type,a.pendingProps,Yt.current,a)):a.memoizedState=Sh(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ks(a),e===null&&he&&(n=a.stateNode=yh(a.type,a.pendingProps,Yt.current),Ke=a,Ya=!0,i=qe,pn(a.type)?(yu=i,qe=Qa(n.firstChild)):qe=i),Ze(e,a,a.pendingProps.children,t),Nl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&he&&((i=n=qe)&&(n=r1(n,a.type,a.pendingProps,Ya),n!==null?(a.stateNode=n,Ke=a,qe=Qa(n.firstChild),Ya=!1,i=!0):i=!1),i||Kt(a)),Ks(a),i=a.type,s=a.pendingProps,u=e!==null?e.memoizedProps:null,n=s.children,du(i,s)?n=null:u!==null&&du(i,u)&&(a.flags|=32),a.memoizedState!==null&&(i=Jr(e,a,nx,null,null,t),Bl._currentValue=i),Nl(e,a),Ze(e,a,n,t),a.child;case 6:return e===null&&he&&((e=t=qe)&&(t=c1(t,a.pendingProps,Ya),t!==null?(a.stateNode=t,Ke=a,qe=null,e=!0):e=!1),e||Kt(a)),null;case 13:return Zf(e,a,t);case 4:return to(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=In(a,null,n,t):Ze(e,a,n,t),a.child;case 11:return Hf(e,a,a.type,a.pendingProps,t);case 7:return n=a.pendingProps,Nl(e,a),Ze(e,a,n,t),a.child;case 8:return Ze(e,a,a.pendingProps.children,t),a.child;case 12:return Ze(e,a,a.pendingProps.children,t),a.child;case 10:return Jf(e,a,t);case 9:return i=a.type._context,n=a.pendingProps.children,qn(a),i=na(i),n=n(i),a.flags|=1,Ze(e,a,n,t),a.child;case 14:return If(e,a,a.type,a.pendingProps,t);case 15:return Vf(e,a,a.type,a.pendingProps,t);case 19:return Ec(e,a,t);case 31:return mx(e,a,t);case 22:return Gf(e,a,t,a.pendingProps);case 24:return qn(a),n=na(Pe),e===null?(i=Ir(),i===null&&(i=ze,s=Br(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=t),i=s),a.memoizedState={parent:n,cache:i},Gr(a),Jt(a,Pe,i)):((e.lanes&t)!==0&&(Yr(e,a),bi(a,null,null,t),xi()),i=e.memoizedState,s=a.memoizedState,i.parent!==n?(i={parent:n,cache:n},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Jt(a,Pe,n)):(n=s.cache,Jt(a,Pe,n),n!==i.cache&&kr(a,[Pe],t,!0))),Ze(e,a,a.pendingProps.children,t),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=a.pendingProps,n.name!=null&&n.name!=="auto"?a.flags|=e===null?18882560:18874368:he&&_o(a),e!==null&&e.memoizedProps.name!==n.name?a.flags|=4194816:Nl(e,a),Ze(e,a,n.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Lt(e){e.flags|=4}function Ac(e,a,t,n,i){var s;if((s=(e.mode&32)!==0)&&(s=t===null?Oh(a,n):Oh(a,n)&&(n.src!==t.src||n.srcSet!==t.srcSet)),s){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(zp())e.flags|=8192;else throw Hn=zo,Vr}else e.flags&=-16777217}function ep(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Th(a))if(zp())e.flags|=8192;else throw Hn=zo,Vr}function Wo(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?_d():536870912,e.lanes|=a,wl|=a)}function Ai(e,a){if(!he)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(a=e.tail,t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null}}function Le(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&1206910976,n|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function hx(e,a,t){var n=a.pendingProps;switch(zr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(a),null;case 1:return Le(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Dt(Pe),Jn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(pl(a)?Lt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,qr())),Le(a),null;case 26:var i=a.type,s=a.memoizedState;return e===null?(Lt(a),s!==null?(Le(a),ep(a,s)):(Le(a),Ac(a,i,null,n,t))):s?s!==e.memoizedState?(Lt(a),Le(a),ep(a,s)):(Le(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Lt(a),Le(a),Ac(a,i,e,n,t)),null;case 27:if(no(a),t=Yt.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Lt(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Le(a),a.subtreeFlags&=-33554433,null}e=it.current,pl(a)?Rm(a):(e=yh(i,n,t),a.stateNode=e,Lt(a))}return Le(a),a.subtreeFlags&=-33554433,null;case 5:if(no(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Lt(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Le(a),a.subtreeFlags&=-33554433,null}if(s=it.current,pl(a))Rm(a);else{var u=qi(Yt.current);switch(s){case 1:s=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=u.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?u.createElement(i,{is:n.is}):u.createElement(i)}}s[ta]=a,s[ya]=n;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=s;e:switch(sa(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Lt(a)}}return Le(a),a.subtreeFlags&=-33554433,Ac(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Lt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(d(166));if(e=Yt.current,pl(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,i=Ke,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[ta]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Wp(e.nodeValue,t)),e||Kt(a,!0)}else e=qi(e).createTextNode(n),e[ta]=a,a.stateNode=e}return Le(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=pl(a),t!==null){if(e===null){if(!n)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[ta]=a}else Dn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Le(a),e=!1}else t=qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Da(a),a):(Da(a),null);if((a.flags&128)!==0)throw Error(d(558))}return Le(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=pl(a),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[ta]=a}else Dn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Le(a),i=!1}else i=qr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Da(a),a):(Da(a),null)}return Da(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Wo(a,a.updateQueue),Le(a),null);case 4:return Jn(),e===null&&ou(a.stateNode.containerInfo),a.flags|=67108864,Le(a),null;case 10:return Dt(a.type),Le(a),null;case 19:if(Fr(a),n=a.memoizedState,n===null)return Le(a),null;if(i=(a.flags&128)!==0,s=n.rendering,s===null)if(i)Ai(n,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(s=ko(e),s!==null){for(a.flags|=128,Ai(n,!1),e=s.updateQueue,a.updateQueue=e,Wo(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)wm(t,e),t=t.sibling;return yi(a,ia.current&1|2),he&&Rt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Oa()>ds&&(a.flags|=128,i=!0,Ai(n,!1),a.lanes=4194304)}else{if(!i)if(e=ko(s),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,Wo(a,e),Ai(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!s.alternate&&!he)return Le(a),null}else 2*Oa()-n.renderingStartTime>ds&&t!==536870912&&(a.flags|=128,i=!0,Ai(n,!1),a.lanes=4194304);n.isBackwards?(s.sibling=a.child,a.child=s):(e=n.last,e!==null?e.sibling=s:a.child=s,n.last=s)}if(n.tail!==null){e=n.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Oa(),e.sibling=null,s=ia.current,s=i?s&1|2:s&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!t||he?yi(a,s):(t=s,Ue(la,a),Ue(ia,t),ua===null&&(ua=a)),he&&Rt(a,n.treeForkCount),e}return Le(a),null;case 22:case 23:return Da(a),Xr(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Le(a),a.subtreeFlags&6&&(a.flags|=8192)):Le(a),t=a.updateQueue,t!==null&&Wo(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&aa(kn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Dt(Pe),Le(a),null;case 25:return null;case 30:return a.flags|=33554432,Le(a),null}throw Error(d(156,a.tag))}function vx(e,a){switch(zr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Dt(Pe),Jn(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return no(a),null;case 31:if(a.memoizedState!==null){if(Da(a),a.alternate===null)throw Error(d(340));Dn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Da(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Dn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Fr(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return Jn(),null;case 10:return Dt(a.type),null;case 22:case 23:return Da(a),Xr(),e!==null&&aa(kn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Dt(Pe),null;case 25:return null;default:return null}}function ap(e,a){switch(zr(a),a.tag){case 3:Dt(Pe),Jn();break;case 26:case 27:case 5:no(a);break;case 4:Jn();break;case 31:a.memoizedState!==null&&Da(a);break;case 13:Da(a);break;case 19:Fr(a);break;case 10:Dt(a.type);break;case 22:case 23:Da(a),Xr(),e!==null&&aa(kn);break;case 24:Dt(Pe)}}function wi(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var i=n.next;t=i;do{if((t.tag&e)===e){n=void 0;var s=t.create,u=t.inst;n=s(),u.destroy=n}t=t.next}while(t!==i)}}catch(p){Ce(a,a.return,p)}}function sn(e,a,t){try{var n=a.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var u=n.inst,p=u.destroy;if(p!==void 0){u.destroy=void 0,i=a;var y=t,O=p;try{O()}catch(R){Ce(i,y,R)}}}n=n.next}while(n!==s)}}catch(R){Ce(a,a.return,R)}}function tp(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Ym(a,t)}catch(n){Ce(e,e.return,n)}}}function np(e,a,t){t.props=Gn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Ce(e,a,n)}}function ct(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var i=e.stateNode,s=Ot(e.memoizedProps,i);(i.ref===null||i.ref.name!==s)&&(i.ref=uh(s)),n=i.ref;break;case 7:if(e.stateNode===null){var u=new ka(e);h(e.child,!1,o1,u,void 0,void 0),e.stateNode=u}n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(p){Ce(e,a,p)}}function oa(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(i){Ce(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Ce(e,a,i)}else t.current=null}function es(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var t=0;t<a.length;t++)vh(e.stateNode,a[t])}function lp(e){for(var a=e.return;a!==null&&(_c(a)&&vh(e.stateNode,a.stateNode),!wc(a));)a=a.return}function _i(e){for(var a=e.return;a!==null&&(_c(a)&&s1(e.stateNode,a.stateNode),!wc(a));)a=a.return}function wc(e){return e.tag===5||e.tag===3||e.tag===27}function _c(e){return e&&e.tag===7&&e.stateNode!==null}function Oc(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(i){Ce(e,e.return,i)}}function Tc(e,a,t){try{var n=e.stateNode;Vx(n,e.type,t,a),n[ya]=a}catch(i){Ce(e,e.return,i)}}function ip(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pn(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rc(e,a,t,n){var i=e.tag;if(i===5||i===6)i=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(i,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(i),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=ot)),es(e,n),Se=!0;else if(i!==4&&(i===27&&(es(e,n),n=null,pn(e.type)&&(t=e.stateNode,a=null)),e=e.child,e!==null))for(Rc(e,a,t,n),e=e.sibling;e!==null;)Rc(e,a,t,n),e=e.sibling}function as(e,a,t,n){var i=e.tag;if(i===5||i===6)i=e.stateNode,a?t.insertBefore(i,a):t.appendChild(i),es(e,n),Se=!0;else if(i!==4&&(i===27&&(es(e,n),n=null,pn(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(as(e,a,t,n),e=e.sibling;e!==null;)as(e,a,t,n),e=e.sibling}function op(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);sa(a,n,t),a[ta]=e,a[ya]=t}catch(s){Ce(e,e.return,s)}}var ts=!1,za=null;function sp(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ts=!0)}var ut=null;function rp(){var e=ut;return ut=null,e}var ja=0;function jl(e,a,t,n,i){return ja=0,cp(e.child,a,t,n,i)}function cp(e,a,t,n,i){for(var s=!1;e!==null;){if(e.tag===5){var u=e.stateNode;if(n!==null){var p=pu(u);n.push(p),p.view&&(s=!0)}else s||pu(u).view&&(s=!0);ts=!0,rh(u,ja===0?a:a+"_"+ja,t),ja++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||cp(e.child,a,t,n,i)&&(s=!0));e=e.sibling}return s}function dt(e,a){for(;e!==null;)e.tag===5?ch(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||dt(e.child,a)),e=e.sibling}function ns(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ns(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(d(544));var t=a.name;a=Tt(a.default,a.share),a!=="none"&&(jl(e,t,a,null,!1)||dt(e.child,!1))}e=e.sibling}}function Mc(e,a){if(e.tag===30){var t=e.stateNode,n=e.memoizedProps,i=Ot(n,t),s=Tt(n.default,t.paired?n.share:n.enter);s!=="none"?jl(e,i,s,null,!1)?(ns(e),t.paired||a||Cl(e,n.onEnter)):dt(e.child,!1):ns(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mc(e,a),e=e.sibling;else ns(e)}function Dc(e){if(za!==null&&za.size!==0){var a=za;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,n=t.name;if(n!=null&&n!=="auto"){var i=a.get(n);if(i!==void 0){var s=Tt(t.default,t.share);if(s!=="none"&&(jl(e,n,s,null,!1)?(s=e.stateNode,i.paired=s,s.paired=i,Cl(e,t.onShare)):dt(e.child,!1)),a.delete(n),a.size===0)break}}}Dc(e)}e=e.sibling}}}function zc(e){if(e.tag===30){var a=e.memoizedProps,t=Ot(a,e.stateNode),n=za!==null?za.get(t):void 0,i=Tt(a.default,n!==void 0?a.share:a.exit);i!=="none"&&(jl(e,t,i,null,!1)?n!==void 0?(i=e.stateNode,n.paired=i,i.paired=n,za.delete(t),Cl(e,a.onShare)):Cl(e,a.onExit):dt(e.child,!1)),za!==null&&Dc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)zc(e),e=e.sibling;else za!==null&&Dc(e)}function up(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,t=Ot(a,e.stateNode);a=Tt(a.default,a.update),e.flags&=-5,a!=="none"&&jl(e,t,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&up(e);e=e.sibling}}function Uc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,dt(e.child,!1))}Uc(e)}e=e.sibling}}function ls(e){if(e.tag===30)e.stateNode.paired=null,dt(e.child,!1),Uc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ls(e),e=e.sibling;else Uc(e)}function dp(e){for(e=e.child;e!==null;)e.tag===30?dt(e.child,!1):(e.subtreeFlags&33554432)!==0&&dp(e),e=e.sibling}function qc(e,a,t,n,i,s,u){for(var p=!1;a!==null;){if(a.tag===5){var y=a.stateNode;if(s!==null&&ja<s.length){var O=s[ja],R=pu(y);(O.view||R.view)&&(p=!0);var z;if(z=(e.flags&4)===0)if(R.clip)z=!0;else{z=O.rect;var w=R.rect;z=z.y!==w.y||z.x!==w.x||z.height!==w.height||z.width!==w.width}z&&(e.flags|=4),R.abs?R=!O.abs:(O=O.rect,R=R.rect,R=O.height!==R.height||O.width!==R.width),R&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&rh(y,ja===0?t:t+"_"+ja,i),p&&(e.flags&4)!==0||(ut===null&&(ut=[]),ut.push(y,ja===0?n:n+"_"+ja,a.memoizedProps)),ja++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&u?e.flags|=a.flags&32:qc(e,a.child,t,n,i,s,u)&&(p=!0));a=a.sibling}return p}function mp(e,a){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=e.stateNode,i=Ot(t,n),s=Tt(t.default,t.update),u;u=e.memoizedState,e.memoizedState=null,n=e;var p=e.child;ja=0,i=qc(n,p,i,i,s,u,!1),(e.flags&4)!==0&&i&&Cl(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&mp(e);e=e.sibling}}var Je=!1,Oe=!1,mt=!1,Lc=!1,fp=typeof WeakSet=="function"?WeakSet:Set,We=null,ft=!1,Oi=!1,is=!1,kc=!1;function gx(e,a,t){if(e=e.containerInfo,cu=Hl,e=vm(e),Sr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,y=-1,O=-1,R=0,z=0,w=e,C=null;a:for(;;){for(var Q;w!==n||s!==0&&w.nodeType!==3||(y=p+s),w!==u||i!==0&&w.nodeType!==3||(O=p+i),w.nodeType===3&&(p+=w.nodeValue.length),(Q=w.firstChild)!==null;)C=w,w=Q;for(;;){if(w===e)break a;if(C===n&&++R===s&&(y=p),C===u&&++z===i&&(O=p),(Q=w.nextSibling)!==null)break;w=C,C=w.parentNode}w=Q}n=y===-1||O===-1?null:{start:y,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(uu={focusedElem:e,selectionRange:n},Hl=!1,t=(t&335544064)===t,We=a,a=t?9270:1024;We!==null;){if(e=We,t&&(n=e.deletions,n!==null))for(s=0;s<n.length;s++)t&&zc(n[s]);if(e.alternate===null&&(e.flags&2)!==0)t&&sp(e),os(t);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&t&&zc(n),os(t);continue}else if(n!==null&&n.memoizedState!==null){t&&sp(e),os(t);continue}}n=e.child,(e.subtreeFlags&a)!==0&&n!==null?(n.return=e,We=n):(t&&up(e),os(t))}}za=null}function os(e){for(;We!==null;){var a=We,t=e,n=a.alternate,i=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&n!==null){t=void 0,i=n.memoizedProps,n=n.memoizedState;var s=a.stateNode;try{var u=Gn(a.type,i);t=s.getSnapshotBeforeUpdate(u,n),s.__reactInternalSnapshotBeforeUpdate=t}catch(p){Ce(a,a.return,p)}}break;case 3:if((i&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)gu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":gu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&n!==null&&(t=Ot(n.memoizedProps,n.stateNode),i=a.memoizedProps,i=Tt(i.default,i.update),i!=="none"&&jl(n,t,i,n.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(d(163))}if(n=a.sibling,n!==null){n.return=a.return,We=n;break}We=a.return}}function pp(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:pt(e,t),n&4&&wi(5,t);break;case 1:if(pt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(u){Ce(t,t.return,u)}else{var i=Gn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ce(t,t.return,u)}}n&64&&tp(t),n&512&&ct(t,t.return);break;case 3:if(pt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Ym(e,a)}catch(u){Ce(t,t.return,u)}}break;case 27:a===null&&n&4&&op(t);case 26:case 5:pt(e,t),a===null&&n&4&&Oc(t),n&512&&ct(t,t.return);break;case 12:pt(e,t);break;case 31:pt(e,t),n&4&&xp(e,t);break;case 13:pt(e,t),n&4&&bp(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Tx.bind(null,t),u1(e,t))));break;case 22:if(n=t.memoizedState!==null||Je,!n){var s=a!==null&&a.memoizedState!==null||Oe;a=Je,i=Oe,Je=n,(Oe=s)&&!i?(n=2,(t.subtreeFlags&8772)!==0&&(n|=1),et(e,t,n)):pt(e,t),Je=a,Oe=i}break;case 30:pt(e,t),n&512&&ct(t,t.return);break;case 7:n&512&&ct(t,t.return);default:pt(e,t)}}function Bc(e,a){for(e=e.child;e!==null;)hp(e,a),e=e.sibling}function hp(e,a){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(a){var n=t.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var i=e.stateNode,s=e.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null;i.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(y){Ce(e,e.return,y)}Hc(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,Se=!0}catch(y){Ce(e,e.return,y)}break;case 18:try{var p=e.stateNode;a?sh(p,!0):sh(e.stateNode,!1)}catch(y){Ce(e,e.return,y)}break;case 22:case 23:e.memoizedState===null&&Bc(e,a);break;default:Bc(e,a)}}function Hc(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,n=a;switch(t.tag){case 4:hp(t,n);break e;case 22:t.memoizedState===null&&Hc(t,n);break e;default:Hc(t,n)}}e=e.sibling}}function vp(e){var a=e.alternate;a!==null&&(e.alternate=null,vp(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&uo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Ea=!1;function Ja(e,a,t){for(t=t.child;t!==null;)gp(e,a,t),t=t.sibling}function gp(e,a,t){if(Ta&&typeof Ta.onCommitFiberUnmount=="function")try{Ta.onCommitFiberUnmount(Kl,t)}catch{}switch(t.tag){case 26:Oe||oa(t,a),Ja(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Oe&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Oe||oa(t,a),_i(t);var n=ke,i=Ea;pn(t.type)&&(ke=t.stateNode,Ea=!1),Ja(e,a,t),Nh(t.stateNode,t.type,t.memoizedProps),ke=n,Ea=i;break;case 5:Oe||oa(t,a),_i(t);case 6:if(t.tag===6&&_i(t),n=ke,i=Ea,ke=null,Ja(e,a,t),ke=n,Ea=i,ke!==null)if(Ea)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(t.stateNode),Se=!0}catch(s){Ce(t,a,s)}else try{ke.removeChild(t.stateNode),Se=!0}catch(s){Ce(t,a,s)}break;case 18:ke!==null&&(Ea?(e=ke,oh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Il(e)):oh(ke,t.stateNode));break;case 4:n=ke,i=Ea,ke=t.stateNode.containerInfo,Ea=!0,Ja(e,a,t),ke=n,Ea=i;break;case 0:case 11:case 14:case 15:sn(2,t,a),Oe||sn(4,t,a),Ja(e,a,t);break;case 1:Oe||(oa(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&np(t,a,n)),Ja(e,a,t);break;case 21:Ja(e,a,t);break;case 22:Oe=(n=Oe)||t.memoizedState!==null,Ja(e,a,t),Oe=n;break;case 30:oa(t,a),Ja(e,a,t);break;case 7:Oe||oa(t,a),Ja(e,a,t);break;default:Ja(e,a,t)}}function xp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Il(e)}catch(t){Ce(a,a.return,t)}}}function bp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Il(e)}catch(t){Ce(a,a.return,t)}}function xx(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new fp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new fp),a;default:throw Error(d(435,e.tag))}}function ss(e,a){var t=xx(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var i=Cx.bind(null,e,n);n.then(i,i)}})}function ga(e,a,t){var n=a.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],u=e,p=a,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(pn(y.type)){ke=y.stateNode,Ea=!1;break e}break;case 5:ke=y.stateNode,Ea=!1;break e;case 3:case 4:ke=y.stateNode.containerInfo,Ea=!0;break e}y=y.return}if(ke===null)throw Error(d(160));gp(u,p,s),ke=null,Ea=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)yp(a,e,t),a=a.sibling}var Wa=null;function yp(e,a,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var s=0;s<n.length;s++){var u=n[s];u.ref.impl=u.nextImpl}ga(a,e,t),xa(e),i&4&&(sn(3,e,e.return),wi(3,e),sn(5,e,e.return));break;case 1:ga(a,e,t),xa(e),i&512&&(Oe||n===null||oa(n,n.return)),i&64&&Je&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:if(s=Wa,ga(a,e,t),xa(e),i&512&&(Oe||n===null||oa(n,n.return)),i&4)if(i=n!==null?n.memoizedState:null,t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null)if(Je)e.stateNode=nh(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,t=e.memoizedProps,i=s.ownerDocument||s;a:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ei]||n[ta]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),sa(n,a,t),n[ta]=e,Fe(n),a=n;break e;case"link":if(s=_h("link","href",i).get(a+(t.href||""))){for(u=0;u<s.length;u++)if(n=s[u],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(u,1);break a}}n=i.createElement(a),sa(n,a,t),i.head.appendChild(n);break;case"meta":if(s=_h("meta","content",i).get(a+(t.content||""))){for(u=0;u<s.length;u++)if(n=s[u],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(u,1);break a}}n=i.createElement(a),sa(n,a,t),i.head.appendChild(n);break;default:throw Error(d(468,a))}n[ta]=e,Fe(n),a=n}e.stateNode=a}else Je||Su(s,e.type,e.stateNode);else e.stateNode=wh(s,t,e.memoizedProps);else i!==t?(i===null?(a=n.stateNode,a===null||Oe||a.parentNode.removeChild(a)):i.count--,t===null?Je||Su(s,e.type,e.stateNode):wh(s,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,n.memoizedProps);break;case 27:ga(a,e,t),xa(e),i&512&&(Oe||n===null||oa(n,n.return)),n!==null&&i&4&&Tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(s=mt,mt=!1,ga(a,e,t),mt=s,xa(e),i&512&&(Oe||n===null||oa(n,n.return)),e.flags&32){a=e.stateNode;try{ll(a,""),Se=!0}catch(R){Ce(e,e.return,R)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Tc(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Lc=!0);break;case 6:if(ga(a,e,t),xa(e),i&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a,Se=!0}catch(R){Ce(e,e.return,R)}}break;case 3:if(Se=!1,js=null,s=Wa,Wa=Li(a.containerInfo),ga(a,e,t),Wa=s,xa(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Il(a.containerInfo)}catch(R){Ce(e,e.return,R)}Lc&&(Lc=!1,Np(e)),Se=!1;break;case 4:i=mt,mt=Je,n=Hd(),s=Wa,Wa=Li(e.stateNode.containerInfo),ga(a,e,t),xa(e),Wa=s,Se&&Oi&&(is=!0),Se=n,mt=i;break;case 12:ga(a,e,t),xa(e);break;case 31:ga(a,e,t),xa(e),i&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ss(e,a)));break;case 13:ga(a,e,t),xa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(us=Oa()),i&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ss(e,a)));break;case 22:s=e.memoizedState!==null,u=n!==null&&n.memoizedState!==null;var p=Je,y=Oe,O=mt;Je=p||s,mt=O||s,Oe=y||u,ga(a,e,t),Oe=y,mt=O,Je=p,xa(e),i&8192&&(a=e.stateNode,a._visibility=s?a._visibility&-2:a._visibility|1,!s||n===null||u||Je||Oe||(a=u||Oe,t=Je,n=Oe,Je=s||Je,Oe=a,rn(e,2),Je=t,Oe=n),!s&&mt||Bc(e,s)),i&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,ss(e,t))));break;case 19:ga(a,e,t),xa(e),i&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ss(e,a)));break;case 30:i&512&&(Oe||n===null||oa(n,n.return)),i=Hd(),s=Oi,u=(t&335544064)===t,p=e.memoizedProps,Oi=u&&Tt(p.default,p.update)!=="none",ga(a,e,t),xa(e),u&&n!==null&&Se&&(e.flags|=4),Oi=s,Se=i;break;case 21:break;case 7:i&512&&(Oe||n===null||oa(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:ga(a,e,t),xa(e)}}function xa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(ip(n)){t=n;break}n=n.return}n=null;for(var i=e.return;i!==null;){if(_c(i)){var s=i.stateNode;n===null?n=[s]:n.push(s)}if(wc(i))break;i=i.return}var u=n;if(t==null)throw Error(d(160));switch(t.tag){case 27:var p=t.stateNode,y=Cc(e);as(e,y,p,u);break;case 5:var O=t.stateNode;t.flags&32&&(ll(O,""),t.flags&=-33);var R=Cc(e);as(e,R,O,u);break;case 3:case 4:var z=t.stateNode.containerInfo,w=Cc(e);Rc(e,w,z,u);break;default:throw Error(d(161))}}catch(C){Ce(e,e.return,C)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Np(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Np(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Hl=!0,a.reset(),Hl=!1),e=e.sibling}}function El(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)jp(a,e),a=a.sibling;else mp(a)}function jp(e,a){var t=e.alternate;if(t===null)Mc(e,!1);else switch(e.tag){case 3:if(kc=ft=!1,rp(),El(a,e),!ft&&!is){if(e=ut,e!==null)for(var n=0;n<e.length;n+=3){t=e[n];var i=e[n+1];ch(t,e[n+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kc=!0}ut=null;break;case 5:El(a,e);break;case 4:n=ft,ft=!1,El(a,e),ft&&(is=!0),ft=n;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Mc(e,!1):El(a,e));break;case 30:n=ft,i=rp(),ft=!1,El(a,e),ft&&(e.flags|=4);var s=e.memoizedProps,u=e.stateNode;a=Ot(s,u),u=Ot(t.memoizedProps,u);var p=Tt(s.default,s.update);p==="none"?a=!1:(s=t.memoizedState,t.memoizedState=null,t=e.child,ja=0,a=qc(e,t,a,u,p,s,!0),ja!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Cl(e,e.memoizedProps.onUpdate),ut=i):i!==null&&(i.push.apply(i,ut),ut=i),ft=(e.flags&32)!==0?!0:n;break;default:El(a,e)}}function pt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)pp(e,a.alternate,a),a=a.sibling}function rn(e,a){for(e=e.child;e!==null;){var t=e,n=a;switch(t.tag){case 0:case 11:case 14:case 15:sn(4,t,t.return),rn(t,n);break;case 1:oa(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&np(t,t.return,i),rn(t,n);break;case 27:(n&2)!==0&&Nh(t.stateNode,t.type,t.memoizedProps);case 5:oa(t,t.return),t.tag!==5&&t.tag!==27||_i(t),rn(t,n);break;case 6:_i(t);break;case 26:oa(t,t.return),i=t.stateNode,t.memoizedState!==null||i===null||Oe||i.parentNode.removeChild(i),rn(t,n);break;case 22:t.memoizedState===null&&rn(t,n);break;case 30:oa(t,t.return),rn(t,n);break;case 7:oa(t,t.return);default:rn(t,n)}e=e.sibling}}function et(e,a,t){for(t=(a.subtreeFlags&8772)!==0?t:t&-2,a=a.child;a!==null;){var n=a.alternate,i=e,s=a,u=s.flags,p=(t&1)!==0;switch(s.tag){case 0:case 11:case 15:et(i,s,t),wi(4,s);break;case 1:if(et(i,s,t),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Ce(n,n.return,R)}if(n=s,i=n.updateQueue,i!==null){var y=n.stateNode;try{var O=i.shared.hiddenCallbacks;if(O!==null)for(i.shared.hiddenCallbacks=null,i=0;i<O.length;i++)Gm(O[i],y)}catch(R){Ce(n,n.return,R)}}p&&u&64&&tp(s),ct(s,s.return);break;case 27:(t&2)!==0&&op(s);case 5:s.tag!==5&&s.tag!==27||lp(s),et(i,s,t),p&&n===null&&u&4&&Oc(s),ct(s,s.return);break;case 6:lp(s);break;case 26:y=s.stateNode,s.memoizedState!==null||y===null||Je||Su(Li(y.ownerDocument),s.type,y),et(i,s,t),p&&n===null&&u&4&&Oc(s),ct(s,s.return);break;case 12:et(i,s,t);break;case 31:et(i,s,t),p&&u&4&&xp(i,s);break;case 13:et(i,s,t),p&&u&4&&bp(i,s);break;case 22:s.memoizedState===null&&et(i,s,t),ct(s,s.return);break;case 30:et(i,s,t),ct(s,s.return);break;case 7:ct(s,s.return);default:et(i,s,t)}a=a.sibling}}function Ic(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&fi(t))}function Vc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&fi(e))}function Pa(e,a,t,n){var i=(t&335544064)===t;if(a.subtreeFlags&(i?10262:10256))for(a=a.child;a!==null;)Ep(e,a,t,n),a=a.sibling;else i&&dp(a)}function Ep(e,a,t,n){var i=(t&335544064)===t;i&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&ls(a);var s=a.flags;switch(a.tag){case 0:case 11:case 15:Pa(e,a,t,n),s&2048&&wi(9,a);break;case 1:Pa(e,a,t,n);break;case 3:Pa(e,a,t,n),i&&kc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,a.alternate!==null&&(s=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==s&&(a.refCount++,s!=null&&fi(s)));break;case 12:if(s&2048){Pa(e,a,t,n),s=a.stateNode;try{var u=a.memoizedProps,p=u.id,y=u.onPostCommit;typeof y=="function"&&y(p,a.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(O){Ce(a,a.return,O)}}else Pa(e,a,t,n);break;case 31:Pa(e,a,t,n);break;case 13:Pa(e,a,t,n);break;case 23:break;case 22:u=a.stateNode,p=a.alternate,a.memoizedState!==null?(i&&p!==null&&p.memoizedState===null&&ls(p),u._visibility&2?Pa(e,a,t,n):Ti(e,a)):(i&&p!==null&&p.memoizedState!==null&&ls(a),u._visibility&2?Pa(e,a,t,n):(u._visibility|=2,Sl(e,a,t,n,(a.subtreeFlags&10256)!==0||!1))),s&2048&&Ic(p,a);break;case 24:Pa(e,a,t,n),s&2048&&Vc(a.alternate,a);break;case 30:i&&(s=a.alternate,s!==null&&(dt(s.child,!0),dt(a.child,!0))),Pa(e,a,t,n);break;default:Pa(e,a,t,n)}}function Sl(e,a,t,n,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=e,u=a,p=t,y=n,O=u.flags;switch(u.tag){case 0:case 11:case 15:Sl(s,u,p,y,i),wi(8,u);break;case 23:break;case 22:var R=u.stateNode;u.memoizedState!==null?R._visibility&2?Sl(s,u,p,y,i):Ti(s,u):(R._visibility|=2,Sl(s,u,p,y,i)),i&&O&2048&&Ic(u.alternate,u);break;case 24:Sl(s,u,p,y,i),i&&O&2048&&Vc(u.alternate,u);break;default:Sl(s,u,p,y,i)}a=a.sibling}}function Ti(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,i=n.flags;switch(n.tag){case 22:Ti(t,n),i&2048&&Ic(n.alternate,n);break;case 24:Ti(t,n),i&2048&&Vc(n.alternate,n);break;default:Ti(t,n)}a=a.sibling}}var Yn=8192;function Pn(e,a,t){if(e.subtreeFlags&Yn)for(e=e.child;e!==null;)Sp(e,a,t),e=e.sibling}function Sp(e,a,t){switch(e.tag){case 26:Pn(e,a,t),e.flags&Yn&&(e.memoizedState!==null?S1(t,Wa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&Rh(t,e)));break;case 5:Pn(e,a,t),e.flags&Yn&&(e=e.stateNode,(a&335544128)===a&&Rh(t,e));break;case 3:case 4:var n=Wa;Wa=Li(e.stateNode.containerInfo),Pn(e,a,t),Wa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Yn,Yn=16777216,Pn(e,a,t),Yn=n):Pn(e,a,t));break;case 30:if((e.flags&Yn)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var i=e.stateNode;i.paired=null,za===null&&(za=new Map),za.set(n,i)}Pn(e,a,t);break;default:Pn(e,a,t)}}function Ap(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Ci(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];We=n,_p(n,e)}Ap(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wp(e),e=e.sibling}function wp(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&sn(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,rs(e)):Ci(e);break;default:Ci(e)}}function rs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];We=n,_p(n,e)}Ap(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:sn(8,a,a.return),rs(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,rs(a));break;default:rs(a)}e=e.sibling}}function _p(e,a){for(;We!==null;){var t=We;switch(t.tag){case 0:case 11:case 15:sn(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:fi(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,We=n;else e:for(t=e;We!==null;){n=We;var i=n.sibling,s=n.return;if(vp(n),n===t){We=null;break e}if(i!==null){i.return=s,We=i;break e}We=s}}}var bx={getCacheForType:function(e){var a=na(Pe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return na(Pe).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,we=0,ze=null,ge=null,be=0,Te=0,Ua=null,cn=!1,Al=!1,Gc=!1,kt=0,Ge=0,un=0,Qn=0,cs=0,qa=0,wl=0,Ri=null,Sa=null,Yc=!1,us=0,Op=0,ds=1/0,ms=null,dn=null,Be=0,at=null,$n=null,ht=0,Pc=0,Qc=null,Tp=null,_l=null,Ol=null,Tl=null,Mi=0,fs=null;function La(){return(we&2)!==0&&be!==0?be&-be:te.T!==null?tu():Rd()}function Cp(){if(qa===0)if((be&536870912)===0||he){var e=oo;oo<<=1,(oo&3932160)===0&&(oo=262144),qa=e}else qa=536870912;return e=la.current,e!==null&&(e.flags|=32),qa}function Cl(e,a){if(a!=null){var t=e.stateNode,n=t.ref;n===null&&(n=t.ref=uh(Ot(e.memoizedProps,t))),Ol===null&&(Ol=[]),Ol.push(a.bind(null,n))}}function Aa(e,a,t){(e===ze&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Rl(e,0),mn(e,be,qa,!1)),Wl(e,t),((we&2)===0||e!==ze)&&(e===ze&&((we&2)===0&&(Qn|=t),Ge===4&&mn(e,be,qa,!1)),vt(e))}function Rp(e,a,t){if((we&6)!==0)throw Error(d(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Jl(e,a),i=n?Ex(e,a):Xc(e,a,!0),s=n;do{if(i===0){Al&&!n&&mn(e,a,0,!1);break}else{if(t=e.current.alternate,s&&!Nx(t)){i=Xc(e,a,!1),s=!1;continue}if(i===2){if(s=a,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var p=e;i=Ri;var y=p.current.memoizedState.isDehydrated;if(y&&(Rl(p,u).flags|=256),u=Xc(p,u,!1),u!==2&&u!==6){if(Gc&&!y){p.errorRecoveryDisabledLanes|=s,Qn|=s,i=4;break e}s=Sa,Sa=i,s!==null&&(Sa===null?Sa=s:Sa.push.apply(Sa,s))}i=u}if(s=!1,i!==2)continue}}if(i===1){Rl(e,0),mn(e,a,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:mn(n,a,qa,!cn);break e;case 2:Sa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(i=us+300-Oa(),10<i)){if(mn(n,a,qa,!cn),ro(n,0,!0)!==0)break e;ht=a,n.timeoutHandle=fu(Mp.bind(null,n,t,Sa,ms,Yc,a,qa,Qn,wl,cn,s,"Throttled",-0,0),i);break e}Mp(n,t,Sa,ms,Yc,a,qa,Qn,wl,cn,s,null,-0,0)}}break}while(!0);vt(e)}function Mp(e,a,t,n,i,s,u,p,y,O,R,z,w,C){e.timeoutHandle=-1;var Q=a.subtreeFlags,J=(s&335544064)===s;if(z=null,(J||Q&8192||(Q&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ot},za=null,Sp(a,s,z),J&&(Q=z,J=e.containerInfo,J=(J.nodeType===9?J:J.ownerDocument).__reactViewTransition,J!=null&&(Q.count++,Q.waitingForViewTransition=!0,Q=Hi.bind(Q),J.finished.then(Q,Q))),Q=(s&62914560)===s?us-Oa():(s&4194048)===s?Op-Oa():0,Q=A1(z,Q),Q!==null)){ht=s,e.cancelPendingCommit=Q(Hp.bind(null,e,a,s,t,n,i,u,p,y,O,R,z,null,w,C)),mn(e,s,u,!O);return}Hp(e,a,s,t,n,i,u,p,y,O,R,z)}function Nx(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var i=t[n],s=i.getSnapshot;i=i.value;try{if(!Ma(s(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function mn(e,a,t,n){a=wd(e,a),a&=~cs,a&=~Qn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var i=a;0<i;){var s=31-Ca(i),u=1<<s;n[s]=-1,i&=~u}t!==0&&Od(e,t,a)}function ps(){return(we&6)===0?(Di(0),!1):!0}function $c(){if(ge!==null){if(Te===0)var e=ge.return;else e=ge,Mt=zn=null,ac(e),gl=null,vi=0,e=ge;for(;e!==null;)ap(e.alternate,e),e=e.return;ge=null}}function Rl(e,a){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,Px(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ht=0,$c(),ze=e,ge=t=Ct(e.current,null),be=a,Te=0,Ua=null,cn=!1,Al=Jl(e,a),Gc=!1,wl=qa=cs=Qn=un=Ge=0,Sa=Ri=null,Yc=!1,kt=wd(e,a),jo(),t}function Dp(e,a){fe=null,te.H=$o,a===vl||a===Do?(a=Bm(),Te=3):a===Vr?(a=Bm(),Te=4):Te=a===vc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ua=a,ge===null&&(Ge=1,Xo(e,Ia(a,e.current)))}function zp(){var e=la.current;return e===null?!0:(be&4194048)===be?ua===null:(be&62914560)===be||(be&536870912)!==0?e===ua:!1}function Up(){var e=te.H;return te.H=$o,e===null?$o:e}function qp(){var e=te.A;return te.A=bx,e}function hs(){Ge=4,cn||(be&4194048)!==be&&la.current!==null||(Al=!0),(un&134217727)===0&&(Qn&134217727)===0||ze===null||mn(ze,be,qa,!1)}function Xc(e,a,t){var n=we;we|=2;var i=Up(),s=qp();(ze!==e||be!==a)&&(ms=null,Rl(e,a)),a=!1;var u=Ge;e:do try{if(Te!==0&&ge!==null){var p=ge,y=Ua;switch(Te){case 8:$c(),u=6;break e;case 3:case 2:case 9:case 6:la.current===null&&(a=!0);var O=Te;if(Te=0,Ua=null,Ml(e,p,y,O),t&&Al){u=0;break e}break;default:O=Te,Te=0,Ua=null,Ml(e,p,y,O)}}jx(),u=Ge;break}catch(R){Dp(e,R)}while(!0);return a&&e.shellSuspendCounter++,Mt=zn=null,we=n,te.H=i,te.A=s,ge===null&&(ze=null,be=0,jo()),u}function jx(){for(;ge!==null;)Lp(ge)}function Ex(e,a){var t=we;we|=2;var n=Up(),i=qp();ze!==e||be!==a?(ms=null,ds=Oa()+500,Rl(e,a)):Al=Jl(e,a);e:do try{if(Te!==0&&ge!==null){a=ge;var s=Ua;a:switch(Te){case 1:Te=0,Ua=null,Ml(e,a,s,1);break;case 2:case 9:if(Lm(s)){Te=0,Ua=null,kp(a);break}a=function(){Te!==2&&Te!==9||ze!==e||(Te=7),vt(e)},s.then(a,a);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Lm(s)?(Te=0,Ua=null,kp(a)):(Te=0,Ua=null,Ml(e,a,s,7));break;case 5:var u=null;switch(ge.tag){case 26:u=ge.memoizedState;case 5:case 27:var p=ge;if(u?Th(u):p.stateNode.complete){Te=0,Ua=null;var y=p.sibling;if(y!==null)ge=y;else{var O=p.return;O!==null?(ge=O,vs(O)):ge=null}break a}}Te=0,Ua=null,Ml(e,a,s,5);break;case 6:Te=0,Ua=null,Ml(e,a,s,6);break;case 8:$c(),Ge=6;break e;default:throw Error(d(462))}}Sx();break}catch(R){Dp(e,R)}while(!0);return Mt=zn=null,te.H=n,te.A=i,we=t,ge!==null?0:(ze=null,be=0,jo(),Ge)}function Sx(){for(;ge!==null&&!Iv();)Lp(ge)}function Lp(e){var a=Wf(e.alternate,e,kt);e.memoizedProps=e.pendingProps,a===null?vs(e):ge=a}function kp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Qf(t,a,a.pendingProps,a.type,void 0,be);break;case 11:a=Qf(t,a,a.pendingProps,a.type.render,a.ref,be);break;case 5:ac(a);var n=a;n===Ke&&(he?(Oo(n),n.tag===5&&n.stateNode!=null&&(qe=n.stateNode)):(Oo(n),he=!0));default:ap(t,a),a=ge=wm(a,kt),a=Wf(t,a,kt)}e.memoizedProps=e.pendingProps,a===null?vs(e):ge=a}function Ml(e,a,t,n){Mt=zn=null,ac(a),gl=null,vi=0;var i=a.return;try{if(dx(e,i,a,t,be)){Ge=1,Xo(e,Ia(t,e.current)),ge=null;return}}catch(s){if(i!==null)throw ge=i,s;Ge=1,Xo(e,Ia(t,e.current)),ge=null;return}a.flags&32768?(he||n===1?e=!0:Al||(be&536870912)!==0?e=!1:(cn=e=!0,(n===2||n===9||n===3||n===6)&&(n=la.current,n!==null&&n.tag===13&&(n.flags|=16384))),Bp(a,e)):vs(a)}function vs(e){var a=e;do{if((a.flags&32768)!==0){Bp(a,cn);return}e=a.return;var t=hx(a.alternate,a,kt);if(t!==null){ge=t;return}if(a=a.sibling,a!==null){ge=a;return}ge=a=e}while(a!==null);Ge===0&&(Ge=5)}function Bp(e,a){do{var t=vx(e.alternate,e);if(t!==null){t.flags&=32767,ge=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ge=e;return}ge=e=t}while(e!==null);Ge=6,ge=null}function Hp(e,a,t,n,i,s,u,p,y,O,R,z){e.cancelPendingCommit=null;do gs();while(Be!==0);if((we&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));e===ze&&(ge=ze=null,be=0),$n=a,at=e,ht=t,Qc=i,Tp=n,Ax(e,a,t,u,p,y,z)}}function Ax(e,a,t,n,i,s,u){var p=a.lanes|a.childLanes;if(Pc=p,p|=Tr,Kv(e,t,p,n,i,s),Ol=null,(t&335544064)===t?(Tl=Wg(e),n=10262):(Tl=null,n=10256),(a.subtreeFlags&n)!==0||(a.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,Rx(lo,function(){return Jc(),null})):(e.callbackNode=null,e.callbackPriority=0),ts=!1,n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=te.T,te.T=null,i=ue.p,ue.p=2,s=we,we|=4;try{gx(e,a,t)}finally{we=s,ue.p=i,te.T=n}}Be=1,ts?_l=Kx(u,e.containerInfo,Tl,Zc,Fc,_x,Kc,Jc,wx):(Zc(),Fc(),Kc())}function wx(e){if(Be!==0){var a=at.onRecoverableError;a(e,{componentStack:null})}}function _x(){Be===3&&(Be=0,jp($n,at),Be=4)}function Zc(){if(Be===1){Be=0;var e=at,a=$n,t=ht,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=te.T,te.T=null;var i=ue.p;ue.p=2;var s=we;we|=4;try{Oi=is=!1,yp(a,e,t),t=uu;var u=vm(e.containerInfo),p=t.focusedElem,y=t.selectionRange;if(u!==p&&p&&p.ownerDocument&&hm(p.ownerDocument.documentElement,p)){if(y!==null&&Sr(p)){var O=y.start,R=y.end;if(R===void 0&&(R=O),"selectionStart"in p)p.selectionStart=O,p.selectionEnd=Math.min(R,p.value.length);else{var z=p.ownerDocument||document,w=z&&z.defaultView||window;if(w.getSelection){var C=w.getSelection(),Q=p.textContent.length,J=Math.min(y.start,Q),pe=y.end===void 0?J:Math.min(y.end,Q);!C.extend&&J>pe&&(u=pe,pe=J,J=u);var _=pm(p,J),S=pm(p,pe);if(_&&S&&(C.rangeCount!==1||C.anchorNode!==_.node||C.anchorOffset!==_.offset||C.focusNode!==S.node||C.focusOffset!==S.offset)){var T=z.createRange();T.setStart(_.node,_.offset),C.removeAllRanges(),J>pe?(C.addRange(T),C.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),C.addRange(T))}}}}for(z=[],C=p;C=C.parentNode;)C.nodeType===1&&z.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<z.length;p++){var D=z[p];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Hl=!!cu,uu=cu=null}finally{we=s,ue.p=i,te.T=n}}e.current=a,Be=2}}function Fc(){if(Be===2){Be=0;var e=at,a=$n,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=te.T,te.T=null;var n=ue.p;ue.p=2;var i=we;we|=4;try{pp(e,a.alternate,a)}finally{we=i,ue.p=n,te.T=t}}Be=3}}function Kc(){if(Be===4||Be===3){Be=0;var e=_l;_l=null,Vv();var a=at,t=$n,n=ht,i=Tp,s=(n&335544064)===n?10262:10256;if((t.subtreeFlags&s)!==0||(t.flags&s)!==0?Be=5:(Be=0,$n=at=null,Ip(a,a.pendingLanes)),s=a.pendingLanes,s===0&&(dn=null),or(n),t=t.stateNode,Ta&&typeof Ta.onCommitFiberRoot=="function")try{Ta.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=te.T,s=ue.p,ue.p=2,te.T=null;try{for(var u=a.onRecoverableError,p=0;p<i.length;p++){var y=i[p];u(y.value,{componentStack:y.stack})}}finally{te.T=t,ue.p=s}}if(i=Ol,u=Tl,Tl=null,i!==null&&(Ol=null,u===null&&(u=[]),e!==null))for(y=0;y<i.length;y++)t=(0,i[y])(u),t!==void 0&&e.finished.finally(t);(ht&3)!==0&&gs(),vt(a),s=a.pendingLanes,(n&261930)!==0&&(s&42)!==0?a===fs?Mi++:(Mi=0,fs=a):(Mi=0,fs=null),Di(0)}}function Ip(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,fi(a)))}function gs(){return _l!==null&&(_l.skipTransition(),_l=null),Zc(),Fc(),Kc(),Jc()}function Jc(){if(Be!==5)return!1;var e=at,a=Pc;Pc=0;var t=or(ht),n=te.T,i=ue.p;try{ue.p=32>t?32:t,te.T=null,t=Qc,Qc=null;var s=at,u=ht;if(Be=0,$n=at=null,ht=0,(we&6)!==0)throw Error(d(331));var p=we;if(we|=4,wp(s.current),Ep(s,s.current,u,t),we=p,Di(0,!1),Ta&&typeof Ta.onPostCommitFiberRoot=="function")try{Ta.onPostCommitFiberRoot(Kl,s)}catch{}return!0}finally{ue.p=i,te.T=n,Ip(e,a)}}function Vp(e,a,t){a=Ia(t,a),a=hc(e.stateNode,a,2),e=tn(e,a,2),e!==null&&(Wl(e,2),vt(e))}function Ce(e,a,t){if(e.tag===3)Vp(e,e,t);else for(;a!==null;){if(a.tag===3){Vp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(dn===null||!dn.has(n))){e=Ia(t,e),t=kf(2),n=tn(a,t,2),n!==null&&(Bf(t,n,a,e),Wl(n,2),vt(n));break}}a=a.return}}function Wc(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new yx;var i=new Set;n.set(a,i)}else i=n.get(a),i===void 0&&(i=new Set,n.set(a,i));i.has(t)||(Gc=!0,i.add(t),e=Ox.bind(null,e,a,t),a.then(e,e))}function Ox(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ze===e&&(be&t)===t&&((Ge===4||Ge===3&&(be&62914560)===be&&300>Oa()-us)&&(we&2)===0?Rl(e,0):cs|=t,wl===be&&(wl=0)),vt(e)}function Gp(e,a){a===0&&(a=_d()),e=Rn(e,a),e!==null&&(Wl(e,a),vt(e))}function Tx(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Gp(e,t)}function Cx(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(a),Gp(e,t)}function Rx(e,a){return tr(e,a)}var Dl=null,zl=null,eu=!1,xs=!1,au=!1,fn=0;function vt(e){e!==zl&&e.next===null&&(zl===null?Dl=zl=e:zl=zl.next=e),xs=!0,eu||(eu=!0,Dx())}function Di(e,a){if(!au&&xs){au=!0;do for(var t=!1,n=Dl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var u=n.suspendedLanes,p=n.pingedLanes;s=(1<<31-Ca(42|e)+1)-1,s&=i&~(u&~p),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,$p(n,s))}else s=be,s=ro(n,n===ze?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Jl(n,s)||(t=!0,$p(n,s));n=n.next}while(t);au=!1}}function Mx(){Yp()}function Yp(){xs=eu=!1;var e=0;fn!==0&&Yx()&&(e=fn);for(var a=Oa(),t=null,n=Dl;n!==null;){var i=n.next,s=Pp(n,a);s===0?(n.next=null,t===null?Dl=i:t.next=i,i===null&&(zl=t)):(t=n,(e!==0||(s&3)!==0)&&(xs=!0)),n=i}Be!==0&&Be!==5||Di(e),fn!==0&&(fn=0)}function Pp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-Ca(s),p=1<<u,y=i[u];y===-1?((p&t)===0||(p&n)!==0)&&(i[u]=Fv(p,a)):y<=a&&(e.expiredLanes|=p),s&=~p}if(a=ze,t=be,t=ro(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&nr(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Jl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&nr(n),or(t)){case 2:case 8:t=Sd;break;case 32:t=lo;break;case 268435456:t=Ad;break;default:t=lo}return n=Qp.bind(null,e),t=tr(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&nr(n),e.callbackPriority=2,e.callbackNode=null,2}function Qp(e,a){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(gs()&&e.callbackNode!==t)return null;var n=be;return n=ro(e,e===ze?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Rp(e,n,a),Pp(e,Oa()),e.callbackNode!=null&&e.callbackNode===t?Qp.bind(null,e):null)}function $p(e,a){if(gs())return null;Rp(e,a,!0)}function Dx(){Qx(function(){(we&6)!==0?tr(Ed,Mx):Yp()})}function tu(){if(fn===0){var e=Ln;e===0&&(e=io,io<<=1,(io&261888)===0&&(io=256)),fn=e}return fn}function Xp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:po(e)}function zx(e,a,t,n,i){if(a==="submit"&&t&&t.stateNode===i){var s=Xp((i[ya]||null).action),u=n.submitter;u&&(a=(a=u[ya]||null)?Xp(a.formAction):u.getAttribute("formAction"),a!==null&&(s=a,u=null));var p=new xo("action","action",null,n,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(fn!==0){var y=new FormData(i,u);uc(t,{pending:!0,data:y,method:i.method,action:s},null,y)}}else typeof s=="function"&&(p.preventDefault(),y=new FormData(i,u),uc(t,{pending:!0,data:y,method:i.method,action:s},s,y))},currentTarget:i}]})}}for(var nu=0;nu<Or.length;nu++){var lu=Or[nu],Ux=lu.toLowerCase(),qx=lu[0].toUpperCase()+lu.slice(1);Ka(Ux,"on"+qx)}Ka(bm,"onAnimationEnd"),Ka(ym,"onAnimationIteration"),Ka(Nm,"onAnimationStart"),Ka("dblclick","onDoubleClick"),Ka("focusin","onFocus"),Ka("focusout","onBlur"),Ka(Pg,"onTransitionRun"),Ka(Qg,"onTransitionStart"),Ka($g,"onTransitionCancel"),Ka(jm,"onTransitionEnd"),tl("onMouseEnter",["mouseout","mouseover"]),tl("onMouseLeave",["mouseout","mouseover"]),tl("onPointerEnter",["pointerout","pointerover"]),tl("onPointerLeave",["pointerout","pointerover"]),On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),On("onBeforeInput",["compositionend","keypress","textInput","paste"]),On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zi));function Zp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var s=void 0;if(a)for(var u=n.length-1;0<=u;u--){var p=n[u],y=p.instance,O=p.currentTarget;if(p=p.listener,y!==s&&i.isPropagationStopped())break e;s=p,i.currentTarget=O;try{s(i)}catch(R){No(R)}i.currentTarget=null,s=y}else for(u=0;u<n.length;u++){if(p=n[u],y=p.instance,O=p.currentTarget,p=p.listener,y!==s&&i.isPropagationStopped())break e;s=p,i.currentTarget=O;try{s(i)}catch(R){No(R)}i.currentTarget=null,s=y}}}}function xe(e,a){var t=a[Dd];t===void 0&&(t=a[Dd]=new Set);var n=e+"__bubble";t.has(n)||(Fp(a,e,2,!1),t.add(n))}function iu(e,a,t){var n=0;a&&(n|=4),Fp(t,e,n,a)}var bs="_reactListening"+Math.random().toString(36).slice(2);function ou(e){if(!e[bs]){e[bs]=!0,qd.forEach(function(t){t!=="selectionchange"&&(Lx.has(t)||iu(t,!1,e),iu(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[bs]||(a[bs]=!0,iu("selectionchange",!1,a))}}function Fp(e,a,t,n){switch(Bh(a)){case 2:var i=T1;break;case 8:i=C1;break;default:i=wu}t=i.bind(null,a,t,e),i=void 0,!pr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function su(e,a,t,n,i){var s=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var p=n.stateNode.containerInfo;if(p===i)break;if(u===4)for(u=n.return;u!==null;){var y=u.tag;if((y===3||y===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;p!==null;){if(u=_n(p),u===null)return;if(y=u.tag,y===5||y===6||y===26||y===27){n=s=u;continue e}p=p.parentNode}}n=n.return}Zd(function(){var O=s,R=mr(t),z=[];e:{var w=Em.get(e);if(w!==void 0){var C=xo,Q=e;switch(e){case"keypress":if(vo(t)===0)break e;case"keydown":case"keyup":C=Ng;break;case"focusin":Q="focus",C=xr;break;case"focusout":Q="blur",C=xr;break;case"beforeblur":case"afterblur":C=xr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=wg;break;case bm:case ym:case Nm:C=mg;break;case jm:C=Og;break;case"scroll":case"scrollend":C=sg;break;case"wheel":C=Cg;break;case"copy":case"cut":case"paste":C=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=em;break;case"submit":C=Sg;break;case"toggle":case"beforetoggle":C=Mg}var J=(a&4)!==0,pe=!J&&(e==="scroll"||e==="scrollend"),_=J?w!==null?w+"Capture":null:w;J=[];for(var S=O,T;S!==null;){var D=S;if(T=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||T===null||_===null||(D=ti(S,_),D!=null&&J.push(Ui(S,D,T))),pe)break;S=S.return}0<J.length&&(w=new C(w,Q,null,t,R),z.push({event:w,listeners:J}))}}if((a&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",C&&t!==dr&&(Q=t.relatedTarget||t.fromElement)&&(_n(Q)||Q[Wn]))break e;(w||C)&&(Q=R.window===R?R:(C=R.ownerDocument)?C.defaultView||C.parentWindow:window,w?(C=t.relatedTarget||t.toElement,w=O,C=C?_n(C):null,C!==null&&(pe=f(C),J=C.tag,C!==pe||J!==5&&J!==27&&J!==6)&&(C=null)):(w=null,C=O),w!==C&&(J=Jd,D="onMouseLeave",_="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(J=em,D="onPointerLeave",_="onPointerEnter",S="pointer"),pe=w==null?Q:ai(w),T=C==null?Q:ai(C),Q=new J(D,S+"leave",w,t,R),Q.target=pe,Q.relatedTarget=T,D=null,_n(R)===O&&(J=new J(_,S+"enter",C,t,R),J.target=T,J.relatedTarget=pe,D=J),pe=D,J=w&&C?se(w,C,kx):null,w!==null&&Kp(z,Q,w,J,!1),C!==null&&pe!==null&&Kp(z,pe,C,J,!0)))}e:{if(w=O?ai(O):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var Z=rm;else if(om(w))if(cm)Z=Vg;else{Z=Hg;var ye=Bg}else C=w.nodeName,!C||C.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?O&&ur(O.elementType)&&(Z=rm):Z=Ig;if(Z&&(Z=Z(e,O))){sm(z,Z,t,R);break e}ye&&ye(e,w,O)}switch(ye=O?ai(O):window,e){case"focusin":(om(ye)||ye.contentEditable==="true")&&(rl=ye,Ar=O,ui=null);break;case"focusout":ui=Ar=rl=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,gm(z,t,R);break;case"selectionchange":if(Yg)break;case"keydown":case"keyup":gm(z,t,R)}var ne;if(yr)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else sl?lm(e,t)&&(re="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(re="onCompositionStart");re&&(am&&t.locale!=="ko"&&(sl||re!=="onCompositionStart"?re==="onCompositionEnd"&&sl&&(ne=Fd()):($t=R,hr="value"in $t?$t.value:$t.textContent,sl=!0)),ye=ys(O,re),0<ye.length&&(re=new Wd(re,e,null,t,R),z.push({event:re,listeners:ye}),ne?re.data=ne:(ne=im(t),ne!==null&&(re.data=ne)))),(ne=zg?Ug(e,t):qg(e,t))&&(re=ys(O,"onBeforeInput"),0<re.length&&(ye=new Wd("onBeforeInput","beforeinput",null,t,R),z.push({event:ye,listeners:re}),ye.data=ne)),zx(z,e,O,t,R)}Zp(z,a)})}function Ui(e,a,t){return{instance:e,listener:a,currentTarget:t}}function ys(e,a){for(var t=a+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=ti(e,t),i!=null&&n.unshift(Ui(e,i,s)),i=ti(e,a),i!=null&&n.push(Ui(e,i,s))),e.tag===3)return n;e=e.return}return[]}function kx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kp(e,a,t,n,i){for(var s=a._reactName,u=[];t!==null&&t!==n;){var p=t,y=p.alternate,O=p.stateNode;if(p=p.tag,y!==null&&y===n)break;p!==5&&p!==26&&p!==27||O===null||(y=O,i?(O=ti(t,s),O!=null&&u.unshift(Ui(t,O,y))):i||(O=ti(t,s),O!=null&&u.push(Ui(t,O,y)))),t=t.return}u.length!==0&&e.push({event:a,listeners:u})}var Bx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Jp(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Hx,"")}function Wp(e,a){return a=Jp(a),Jp(e)===a}function Re(e,a,t,n,i,s){switch(t){case"children":if(typeof n=="string")a==="body"||a==="textarea"&&n===""||ll(e,n);else if(typeof n=="number"||typeof n=="bigint")a!=="body"&&ll(e,""+n);else return;break;case"className":fo(e,"class",n);break;case"tabIndex":fo(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":fo(e,t,n);break;case"style":$d(e,n,s);return;case"data":if(a!=="object"){fo(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=po(n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(a!=="input"&&Re(e,a,"name",i.name,i,null),Re(e,a,"formEncType",i.formEncType,i,null),Re(e,a,"formMethod",i.formMethod,i,null),Re(e,a,"formTarget",i.formTarget,i,null)):(Re(e,a,"encType",i.encType,i,null),Re(e,a,"method",i.method,i,null),Re(e,a,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=po(n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=ot);return;case"onScroll":n!=null&&xe("scroll",e);return;case"onScrollEnd":n!=null&&xe("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(d(60));(s!=null?s.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=po(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":xe("beforetoggle",e),xe("toggle",e),mo(e,"popover",n);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":mo(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=ig.get(t)||t,mo(e,t,n);else return}Se=!0}function ru(e,a,t,n,i,s){switch(t){case"style":$d(e,n,s);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(d(60));(s!=null?s.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof n=="string")ll(e,n);else if(typeof n=="number"||typeof n=="bigint")ll(e,""+n);else return;break;case"onScroll":n!=null&&xe("scroll",e);return;case"onScrollEnd":n!=null&&xe("scrollend",e);return;case"onClick":n!=null&&(e.onclick=ot);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ld.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),s=t.slice(2,i?t.length-7:void 0),a=e[ya]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(s,a,i),typeof n=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(s,n,i);break e}Se=!0,t in e?e[t]=n:n===!0?e.setAttribute(t,""):mo(e,t,n)}return}Se=!0}function sa(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var n=!1,i=!1,s;for(s in t)if(t.hasOwnProperty(s)){var u=t[s];if(u!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Re(e,a,s,u,t,null)}}i&&Re(e,a,"srcSet",t.srcSet,t,null),n&&Re(e,a,"src",t.src,t,null);return;case"input":xe("invalid",e);var p=s=u=i=null,y=null,O=null;for(n in t)if(t.hasOwnProperty(n)){var R=t[n];if(R!=null)switch(n){case"name":i=R;break;case"type":u=R;break;case"checked":y=R;break;case"defaultChecked":O=R;break;case"value":s=R;break;case"defaultValue":p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,a));break;default:Re(e,a,n,R,t,null)}}Gd(e,s,p,y,O,u,i,!1);return;case"select":xe("invalid",e),n=u=s=null;for(i in t)if(t.hasOwnProperty(i)&&(p=t[i],p!=null))switch(i){case"value":s=p;break;case"defaultValue":u=p;break;case"multiple":n=p;default:Re(e,a,i,p,t,null)}a=s,t=u,e.multiple=!!n,a!=null?nl(e,!!n,a,!1):t!=null&&nl(e,!!n,t,!0);return;case"textarea":xe("invalid",e),s=i=n=null;for(u in t)if(t.hasOwnProperty(u)&&(p=t[u],p!=null))switch(u){case"value":n=p;break;case"defaultValue":i=p;break;case"children":s=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(91));break;default:Re(e,a,u,p,t,null)}Pd(e,n,i,s);return;case"option":for(y in t)if(t.hasOwnProperty(y)&&(n=t[y],n!=null))switch(y){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Re(e,a,y,n,t,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(n=0;n<zi.length;n++)xe(zi[n],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in t)if(t.hasOwnProperty(O)&&(n=t[O],n!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Re(e,a,O,n,t,null)}return;default:if(ur(a)){for(R in t)t.hasOwnProperty(R)&&(n=t[R],n!==void 0&&ru(e,a,R,n,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null&&Re(e,a,p,n,t,null))}var Ix={};function Vx(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,u=null,p=null,y=null,O=null,R=null;for(C in t){var z=t[C];if(t.hasOwnProperty(C)&&z!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":y=z;default:n.hasOwnProperty(C)||Re(e,a,C,null,n,z)}}for(var w in n){var C=n[w];if(z=t[w],n.hasOwnProperty(w)&&(C!=null||z!=null))switch(w){case"type":C!==z&&(Se=!0),s=C;break;case"name":C!==z&&(Se=!0),i=C;break;case"checked":C!==z&&(Se=!0),O=C;break;case"defaultChecked":C!==z&&(Se=!0),R=C;break;case"value":C!==z&&(Se=!0),u=C;break;case"defaultValue":C!==z&&(Se=!0),p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(d(137,a));break;default:C!==z&&Re(e,a,w,C,n,z)}}rr(e,u,p,y,O,R,s,i);return;case"select":C=u=p=w=null;for(s in t)if(y=t[s],t.hasOwnProperty(s)&&y!=null)switch(s){case"value":break;case"multiple":C=y;default:n.hasOwnProperty(s)||Re(e,a,s,null,n,y)}for(i in n)if(s=n[i],y=t[i],n.hasOwnProperty(i)&&(s!=null||y!=null))switch(i){case"value":s!==y&&(Se=!0),w=s;break;case"defaultValue":s!==y&&(Se=!0),p=s;break;case"multiple":s!==y&&(Se=!0),u=s;default:s!==y&&Re(e,a,i,s,n,y)}a=p,t=u,n=C,w!=null?nl(e,!!t,w,!1):!!n!=!!t&&(a!=null?nl(e,!!t,a,!0):nl(e,!!t,t?[]:"",!1));return;case"textarea":C=w=null;for(p in t)if(i=t[p],t.hasOwnProperty(p)&&i!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Re(e,a,p,null,n,i)}for(u in n)if(i=n[u],s=t[u],n.hasOwnProperty(u)&&(i!=null||s!=null))switch(u){case"value":i!==s&&(Se=!0),w=i;break;case"defaultValue":i!==s&&(Se=!0),C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==s&&Re(e,a,u,i,n,s)}Yd(e,w,C);return;case"option":for(var Q in t)if(w=t[Q],t.hasOwnProperty(Q)&&w!=null&&!n.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Re(e,a,Q,null,n,w)}for(y in n)if(w=n[y],C=t[y],n.hasOwnProperty(y)&&w!==C&&(w!=null||C!=null))switch(y){case"selected":w!==C&&(Se=!0),e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Re(e,a,y,w,n,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in t)w=t[J],t.hasOwnProperty(J)&&w!=null&&!n.hasOwnProperty(J)&&Re(e,a,J,null,n,w);for(O in n)if(w=n[O],C=t[O],n.hasOwnProperty(O)&&w!==C&&(w!=null||C!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,a));break;default:Re(e,a,O,w,n,C)}return;default:if(ur(a)){for(var pe in t)w=t[pe],t.hasOwnProperty(pe)&&w!==void 0&&!n.hasOwnProperty(pe)&&ru(e,a,pe,void 0,n,w);for(R in n)w=n[R],C=t[R],!n.hasOwnProperty(R)||w===C||w===void 0&&C===void 0||ru(e,a,R,w,n,C);return}}for(var _ in t)w=t[_],t.hasOwnProperty(_)&&w!=null&&!n.hasOwnProperty(_)&&Re(e,a,_,null,n,w);for(z in n)w=n[z],C=t[z],!n.hasOwnProperty(z)||w===C||w==null&&C==null||Re(e,a,z,w,n,C)}function eh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var i=t[n],s=i.transferSize,u=i.initiatorType,p=i.duration;if(s&&p&&eh(u)){for(u=0,p=i.responseEnd,n+=1;n<t.length;n++){var y=t[n],O=y.startTime;if(O>p)break;var R=y.transferSize,z=y.initiatorType;R&&eh(z)&&(y=y.responseEnd,u+=R*(y<p?1:(p-O)/(y-O)))}if(--n,a+=8*(s+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cu=null,uu=null;function qi(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function th(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function nh(e,a,t,n){return t=qi(t).createElement(e),t[ta]=n,t[ya]=a,sa(t,e,a),Fe(t),t}function du(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var mu=null;function Yx(){var e=window.event;return e&&e.type==="popstate"?e===mu?!1:(mu=e,!0):(mu=null,!1)}var fu=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,ih=typeof requestAnimationFrame=="function"?requestAnimationFrame:fu,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(e){return lh.resolve(null).then(e).catch($x)}:fu;function $x(e){setTimeout(function(){throw e})}function pn(e){return e==="head"}function oh(e,a){var t=a,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(i),Il(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Nu(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Nu(t);for(var s=t.firstChild;s;){var u=s.nextSibling,p=s.nodeName;s[ei]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=u}}else t==="body"&&Nu(e.ownerDocument.body);t=i}while(t);Il(a)}function sh(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function rh(e,a,t){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(a=e.getClientRects(),a.length===1)var n=1;else for(var i=n=0;i<a.length;i++){var s=a[i];0<s.width&&0<s.height&&n++}n===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function ch(e,a){e=e.style,a=a.style;var t=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(t=a.display,e.display=t==null||typeof t=="boolean"?"":t,t=a.margin,t!=null?e.margin=t:(t=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function Xx(e,a,t){return t=t.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function pu(e){var a=e.getBoundingClientRect(),t=getComputedStyle(e);return Xx(a,t,e)}function Zx(e){return e.documentElement.clientHeight}function Fx(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Kx(e,a,t,n,i,s,u,p,y){var O=a.nodeType===9?a:a.ownerDocument;try{var R=O.startViewTransition({update:function(){var w=O.defaultView,C=w.navigation&&w.navigation.transition,Q=O.fonts.status;n();var J=[];if(Q==="loaded"&&(Zx(O),O.fonts.status==="loading"&&J.push(O.fonts.ready)),Q=J.length,e!==null)for(var pe=e.suspenseyImages,_=0,S=0;S<pe.length;S++){var T=pe[S];if(!T.complete){var D=T.getBoundingClientRect();if(0<D.bottom&&0<D.right&&D.top<w.innerHeight&&D.left<w.innerWidth){if(_+=Ch(T),_>Es){J.length=Q;break}T=new Promise(Fx.bind(T)),J.push(T)}}}if(0<J.length)return w=Promise.race([Promise.all(J),new Promise(function(Z){return setTimeout(Z,500)})]).then(i,i),(C?Promise.allSettled([C.finished,w]):w).then(s,s);if(i(),C)return C.finished.then(s,s);s()},types:t});O.__reactViewTransition=R;var z=[];return R.ready.then(function(){for(var w=O.documentElement.getAnimations({subtree:!0}),C=0;C<w.length;C++){var Q=w[C],J=Q.effect,pe=J.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){z.push(Q),Q=J.getKeyframes();for(var _=pe=void 0,S=!0,T=0;T<Q.length;T++){var D=Q[T],Z=D.width;if(pe===void 0)pe=Z;else if(pe!==Z){S=!1;break}if(Z=D.height,_===void 0)_=Z;else if(_!==Z){S=!1;break}delete D.width,delete D.height,D.transform==="none"&&delete D.transform}S&&pe!==void 0&&_!==void 0&&(J.setKeyframes(Q),S=getComputedStyle(J.target,J.pseudoElement),S.width!==pe||S.height!==_)&&(S=Q[0],S.width=pe,S.height=_,S=Q[Q.length-1],S.width=pe,S.height=_,J.setKeyframes(Q))}}u()},function(w){O.__reactViewTransition===R&&(O.__reactViewTransition=null);try{if(typeof w=="object"&&w!==null)switch(w.name){case"InvalidStateError":(w.message==="View transition was skipped because document visibility state is hidden."||w.message==="Skipping view transition because document visibility state has become hidden."||w.message==="Skipping view transition because viewport size changed."||w.message==="Transition was aborted because of invalid state")&&(w=null)}w!==null&&y(w)}finally{n(),i(),u()}}),R.finished.finally(function(){for(var w=0;w<z.length;w++)z[w].cancel();O.__reactViewTransition===R&&(O.__reactViewTransition=null),p()}),R}catch{return n(),i(),u(),null}}function Xn(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}Xn.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:K({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},Xn.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,t=e.getAnimations({subtree:!0}),n=[],i=0;i<t.length;i++){var s=t[i].effect;s!==null&&s.target===e&&s.pseudoElement===a&&n.push(t[i])}return n},Xn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function uh(e){return{name:e,group:new Xn("group",e),imagePair:new Xn("image-pair",e),old:new Xn("old",e),new:new Xn("new",e)}}function ka(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ka.prototype.addEventListener=function(e,a,t){var n=null,i=null;if(!(t!=null&&typeof t!="boolean"&&(n=t.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(mh(s,e,a,t)===-1){var u=this,p=a;t!=null&&typeof t!="boolean"&&t.once===!0&&(p=function(y){u.removeEventListener(e,a,t),typeof a=="function"?a.call(this,y):a.handleEvent(y)}),n!==null&&(i=u.removeEventListener.bind(u,e,a,t),n.addEventListener("abort",i,{once:!0}),i=n.removeEventListener.bind(n,"abort",i)),n=Ul(t),s.push({type:e,listener:a,optionsOrUseCapture:t,attachedListener:p,cleanup:i}),h(this._fragmentFiber.child,!1,Jx,e,p,n)}this._eventListeners=s}};function Jx(e,a,t,n){return B(e).addEventListener(a,t,n),!1}ka.prototype.removeEventListener=function(e,a,t){var n=this._eventListeners;if(n!==null&&(a=mh(n,e,a,t),a!==-1)){var i=n[a];t=i.attachedListener;var s=i.cleanup;i=Ul(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Wx,e,t,i),n.splice(a,1),s!==null&&s()}};function Wx(e,a,t,n){return B(e).removeEventListener(a,t,n),!1}function Ul(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function dh(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function mh(e,a,t,n){if(e.length===0)return-1;n=dh(n);for(var i=0;i<e.length;i++){var s=e[i];if(s.type===a&&s.listener===t&&dh(s.optionsOrUseCapture)===n)return i}return-1}ka.prototype.dispatchEvent=function(e){var a=x(this._fragmentFiber);if(a===null)return!0;a=B(a);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var n=a.nodeType===9?a.createComment(""):document.createTextNode("");if(t)for(var i=0;i<t.length;i++){var s=t[i];n.addEventListener(s.type,s.attachedListener,Ul(s.optionsOrUseCapture))}if(a.appendChild(n),e=n.dispatchEvent(e),t)for(i=0;i<t.length;i++)s=t[i],n.removeEventListener(s.type,s.attachedListener,Ul(s.optionsOrUseCapture));return a.removeChild(n),e}return a.dispatchEvent(e)},ka.prototype.focus=function(e){h(this._fragmentFiber.child,!0,fh,e,void 0,void 0)};function fh(e,a){return e.tag===6?!1:(e=B(e),d1(e,a))}ka.prototype.focusLast=function(e){var a=[];h(this._fragmentFiber.child,!0,hu,a,void 0,void 0);for(var t=a.length-1;0<=t&&!fh(a[t],e);t--);};function hu(e,a){return a.push(e),!1}ka.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=B(e),e=qi(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,e1,e,void 0,void 0))};function e1(e,a){return e.tag===6?!1:(e=B(e),e===a||e.contains(a)?(a.blur(),!0):!1)}ka.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,a1,e,void 0,void 0)};function a1(e,a){return e.tag===6||(e=B(e),a.observe(e)),!1}ka.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),h(this._fragmentFiber.child,!1,t1,e,void 0,void 0);for(var t=a=0;t<tt.length;t++){var n=tt[t];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):tt[a++]=n}tt.length=a}};function t1(e,a){return e.tag===6||(e=B(e),a.unobserve(e)),!1}var tt=[],vu=!1;function n1(e,a,t){tt.push({fragmentInstance:e,observer:a,instance:t}),vu||(vu=!0,m1(function(){vu=!1;var n=tt;tt=[];for(var i=0;i<n.length;i++){var s=n[i];s.observer.unobserve(s.instance)}}))}ka.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,l1,e,void 0,void 0),e};function l1(e,a){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),a.push.apply(a,t.getClientRects())}else e=B(e),a.push.apply(a,e.getClientRects());return!1}ka.prototype.getRootNode=function(e){var a=x(this._fragmentFiber);return a===null?this:B(a).getRootNode(e)},ka.prototype.compareDocumentPosition=function(e){var a=x(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];h(this._fragmentFiber.child,!1,hu,t,void 0,void 0);var n=B(a);if(t.length===0){if(t=n,M(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(t=a)}a=this._fragmentFiber;var i=n=t.compareDocumentPosition(e);return t===e?i=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=V(a)[1],t===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=B(t).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=B(t[0]),i=B(t[t.length-1]);var s=M(this._fragmentFiber)?a.parentElement:n;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=a.compareDocumentPosition(e),p=i.compareDocumentPosition(e),y=u&Node.DOCUMENT_POSITION_CONTAINED_BY||p&Node.DOCUMENT_POSITION_CONTAINED_BY;return p=n&&s&&u&Node.DOCUMENT_POSITION_FOLLOWING&&p&Node.DOCUMENT_POSITION_PRECEDING,a=n&&a===e||s&&i===e||y||p?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&a===e||!s&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||i1(a,this._fragmentFiber,t[0],t[t.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function i1(e,a,t,n,i){var s=_n(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===a||s.alternate===a)){t=!0;break e}s=s.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=i.ownerDocument,i===s||i===s.documentElement||i===s.body;e:{for(s=a,a=x(a);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==a&&s.alternate!==a)){s=!0;break e}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!s)&&!(a=s===t)&&(a=se(t,s,L),a===null?a=!1:(h(a,!0,G,s,t),s=q,q=null,a=s!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!s)&&!(a=s===n)&&(a=se(n,s,L),a===null?a=!1:(h(a,!0,oe,s,n),s=q,Y=q=null,a=s!==null)),a):!1}function ph(e,a){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ka.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(d(566));var a=[];h(this._fragmentFiber.child,!1,hu,a,void 0,void 0);var t=e!==!1;if(a.length===0){var n=V(this._fragmentFiber);if(n=t?n[1]||n[0]||x(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=B(n),ph(e,t);return}if(n=B(n),n.nodeType!==9){if(n.nodeType===11){t="host"in n?n.host:null,t!==null&&t.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=t?a.length-1:0;n!==(t?-1:a.length);){var i=a[n];i.tag===6?(i=B(i),ph(i,t)):B(i).scrollIntoView(e),n+=t?-1:1}};function o1(e,a){return e=B(e),hh(e,a),!1}function hh(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function vh(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];e.addEventListener(i.type,i.attachedListener,Ul(i.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(s){for(var u=0,p=0;p<tt.length;p++){var y=tt[p];(y.fragmentInstance!==a||y.observer!==s||y.instance!==e)&&(tt[u++]=y)}tt.length=u,s.observe(e)}),hh(e,a))}function s1(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];e.removeEventListener(i.type,i.attachedListener,Ul(i.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(s){typeof s.rootMargin=="string"?n1(a,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function gu(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":gu(t),uo(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function r1(e,a,t,n){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[ei])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Qa(e.nextSibling),e===null)break}return null}function c1(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qa(e.nextSibling),e===null))return null;return e}function gh(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qa(e.nextSibling),e===null))return null;return e}function xu(e){return e.data==="$?"||e.data==="$~"}function bu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function u1(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var yu=null;function xh(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Qa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function bh(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function d1(e,a){function t(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return n}function m1(e){ih(function(){ih(function(a){return e(a)})})}function yh(e,a,t){switch(a=qi(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Nh(e,a,t){for(var n in t){var i=t[n];t.hasOwnProperty(n)&&i!=null&&Re(e,a,n,null,Ix,i)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ot&&(e.onclick=null),uo(e)}function Nu(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);uo(e)}var $a=new Map,jh=new Set;function Li(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var Bt=ue.d;ue.d={f:f1,r:p1,D:h1,C:v1,L:g1,m:x1,X:y1,S:b1,M:N1};function f1(){var e=Bt.f(),a=ps();return e||a}function p1(e){var a=el(e);a!==null&&a.tag===5&&a.type==="form"?Sf(a):Bt.r(e)}var ql=typeof document>"u"?null:document;function Eh(e,a,t){var n=ql;if(n&&typeof a=="string"&&a){var i=Ba(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),jh.has(i)||(jh.add(i),e={rel:e,crossOrigin:t,href:a},n.querySelector(i)===null&&(a=n.createElement("link"),sa(a,"link",e),Fe(a),n.head.appendChild(a)))}}function h1(e){Bt.D(e),Eh("dns-prefetch",e,null)}function v1(e,a){Bt.C(e,a),Eh("preconnect",e,a)}function g1(e,a,t){Bt.L(e,a,t);var n=ql;if(n&&e&&a){var i='link[rel="preload"][as="'+Ba(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Ba(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Ba(t.imageSizes)+'"]')):i+='[href="'+Ba(e)+'"]';var s=i;switch(a){case"style":s=Ll(e);break;case"script":s=kl(e)}if(!($a.has(s)||(e=K({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),$a.set(s,e),n.querySelector(i)!==null||a==="style"&&n.querySelector(ki(s))||a==="script"&&n.querySelector(Bi(s))))){var u=n.createElement("link");sa(u,"link",e),a==="style"&&(u[co]=!0,u.onload=u.onerror=function(){Ud(u)}),Fe(u),n.head.appendChild(u)}}}function x1(e,a){Bt.m(e,a);var t=ql;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Ba(n)+'"][href="'+Ba(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=kl(e)}if(!$a.has(s)&&(e=K({rel:"modulepreload",href:e},a),$a.set(s,e),t.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Bi(s)))return}n=t.createElement("link"),sa(n,"link",e),Fe(n),t.head.appendChild(n)}}}function b1(e,a,t){Bt.S(e,a,t);var n=ql;if(n&&e){var i=al(n).hoistableStyles,s=Ll(e);a=a||"default";var u=i.get(s);if(!u){var p={loading:0,preload:null};if(u=n.querySelector(ki(s)))p.loading=5;else{e=K({rel:"stylesheet",href:e,"data-precedence":a},t),(t=$a.get(s))&&ju(e,t);var y=u=n.createElement("link");Fe(y),sa(y,"link",e),y._p=new Promise(function(O,R){y.onload=O,y.onerror=R}),y.addEventListener("load",function(){p.loading|=1}),y.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Ns(u,a,n)}u={type:"stylesheet",instance:u,count:1,state:p},i.set(s,u)}}}function y1(e,a){Bt.X(e,a);var t=ql;if(t&&e){var n=al(t).hoistableScripts,i=kl(e),s=n.get(i);s||(s=t.querySelector(Bi(i)),s||(e=K({src:e,async:!0},a),(a=$a.get(i))&&Eu(e,a),s=t.createElement("script"),Fe(s),sa(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function N1(e,a){Bt.M(e,a);var t=ql;if(t&&e){var n=al(t).hoistableScripts,i=kl(e),s=n.get(i);s||(s=t.querySelector(Bi(i)),s||(e=K({src:e,async:!0,type:"module"},a),(a=$a.get(i))&&Eu(e,a),s=t.createElement("script"),Fe(s),sa(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Sh(e,a,t,n){var i=(i=Yt.current)?Li(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Ll(t.href),a=al(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ll(t.href);var s=al(i).hoistableStyles,u=s.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=i.querySelector(ki(e)))?s._p||(u.instance=s,u.state.loading=5):(s=$a.get(e),s||(s={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},$a.set(e,s)),j1(i,e,s,u.state))),a&&n===null)throw Error(d(528,""));return u}if(a&&n!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(t=kl(t),a=al(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ll(e){return'href="'+Ba(e)+'"'}function ki(e){return'link[rel="stylesheet"]['+e+"]"}function Ah(e){return K({},e,{"data-precedence":e.precedence,precedence:null})}function j1(e,a,t,n){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[co]!==!0){n.loading=1;return}}else a=e.createElement("link"),a[co]=!0,a.onload=a.onerror=Ud.bind(null,a),sa(a,"link",t),Fe(a),e.head.appendChild(a);n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2})}function kl(e){return'[src="'+Ba(e)+'"]'}function Bi(e){return"script[async]"+e}function wh(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ba(t.href)+'"]');if(n)return a.instance=n,Fe(n),n;var i=K({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),sa(n,"style",i),Ns(n,t.precedence,e),a.instance=n;case"stylesheet":i=Ll(t.href);var s=e.querySelector(ki(i));if(s)return a.state.loading|=4,a.instance=s,Fe(s),s;n=Ah(t),(i=$a.get(i))&&ju(n,i),s=(e.ownerDocument||e).createElement("link"),Fe(s);var u=s;return u._p=new Promise(function(p,y){u.onload=p,u.onerror=y}),sa(s,"link",n),a.state.loading|=4,Ns(s,t.precedence,e),a.instance=s;case"script":return s=kl(t.src),(i=e.querySelector(Bi(s)))?(a.instance=i,Fe(i),i):(n=t,(i=$a.get(s))&&(n=K({},t),Eu(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),sa(i,"link",n),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Ns(n,t.precedence,e));return a.instance}function Ns(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,u=0;u<n.length;u++){var p=n[u];if(p.dataset.precedence===a)s=p;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ju(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Eu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var js=null;function _h(e,a,t){if(js===null){var n=new Map,i=js=new Map;i.set(t,n)}else i=js,n=i.get(t),n||(n=new Map,i.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var s=t[i];if(!(s[ei]||s[ta]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(a)||"";u=e+u;var p=n.get(u);p?p.push(s):n.set(u,[s])}}return n}function Su(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function E1(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Oh(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function Th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ch(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Rh(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=Ch(a),e.suspenseyImages.push(a)),e=w1.bind(e),a.decode().then(e,e))}function S1(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ll(n.href),s=a.querySelector(ki(i));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Hi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=s,Fe(s);return}s=a.ownerDocument||a,n=Ah(n),(i=$a.get(i))&&ju(n,i),s=s.createElement("link"),Fe(s);var u=s;u._p=new Promise(function(p,y){u.onload=p,u.onerror=y}),sa(s,"link",n),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Hi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Es=0;function A1(e,a){return e.stylesheets&&e.count===0&&As(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&As(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+a);0<e.imgBytes&&Es===0&&(Es=62500*Gx());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&As(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Es?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Mh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)As(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function Hi(){this.count--,Mh(this)}function w1(){this.imgCount--,Mh(this)}var Ss=null;function As(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ss=new Map,a.forEach(_1,e),Ss=null,Hi.call(e))}function _1(e,a){if(!(a.state.loading&4)){var t=Ss.get(e);if(t)var n=t.get(null);else{t=new Map,Ss.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var u=i[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),n=u)}n&&t.set(null,n)}i=a.instance,u=i.getAttribute("data-precedence"),s=t.get(u)||n,s===n&&t.set(null,i),t.set(u,i),this.count++,n=Hi.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var Bl={$$typeof:me,Provider:null,Consumer:null,_currentValue:St,_currentValue2:St,_threadCount:0};function O1(e,a,t,n,i,s,u,p,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lr(0),this.hiddenUpdates=lr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.transitionTypes=null,this.incompleteTransitions=new Map}function Dh(e,a,t,n,i,s,u,p,y,O,R,z){return e=new O1(e,a,t,u,y,O,R,z,p),a=1,s===!0&&(a|=24),s=Na(3,null,null,a),e.current=s,s.stateNode=e,a=Br(),a.refCount++,e.pooledCache=a,a.refCount++,s.memoizedState={element:n,isDehydrated:t,cache:a},Gr(s),e}function zh(e){return e?(e=dl,e):dl}function Uh(e,a,t,n,i,s){i=zh(i),n.context===null?n.context=i:n.pendingContext=i,n=an(a),n.payload={element:t},s=s===void 0?null:s,s!==null&&(n.callback=s),t=tn(e,n,a),t!==null&&(Aa(t,e,a),gi(t,e,a))}function qh(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Au(e,a){qh(e,a),(e=e.alternate)&&qh(e,a)}function Lh(e){if(e.tag===13||e.tag===31){var a=Rn(e,67108864);a!==null&&Aa(a,e,67108864),Au(e,67108864)}}function kh(e){if(e.tag===13||e.tag===31){var a=La();a=ir(a);var t=Rn(e,a);t!==null&&Aa(t,e,a),Au(e,a)}}var Hl=!0;function T1(e,a,t,n){var i=te.T;te.T=null;var s=ue.p;try{ue.p=2,wu(e,a,t,n)}finally{ue.p=s,te.T=i}}function C1(e,a,t,n){var i=te.T;te.T=null;var s=ue.p;try{ue.p=8,wu(e,a,t,n)}finally{ue.p=s,te.T=i}}function wu(e,a,t,n){if(Hl){var i=_u(n);if(i===null)su(e,a,n,ws,t),Hh(e,n);else if(M1(i,e,a,t,n))n.stopPropagation();else if(Hh(e,n),a&4&&-1<R1.indexOf(e)){for(;i!==null;){var s=el(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=wn(s.pendingLanes);if(u!==0){var p=s;for(p.pendingLanes|=2,p.entangledLanes|=2;u;){var y=1<<31-Ca(u);p.entanglements[1]|=y,u&=~y}vt(s),(we&6)===0&&(ds=Oa()+500,Di(0))}}break;case 31:case 13:p=Rn(s,2),p!==null&&Aa(p,s,2),ps(),Au(s,2)}if(s=_u(n),s===null&&su(e,a,n,ws,t),s===i)break;i=s}i!==null&&n.stopPropagation()}else su(e,a,n,null,t)}}function _u(e){return e=mr(e),Ou(e)}var ws=null;function Ou(e){if(ws=null,e=_n(e),e!==null){var a=f(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=g(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ws=e,null}function Bh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gv()){case Ed:return 2;case Sd:return 8;case lo:case Yv:return 32;case Ad:return 268435456;default:return 32}default:return 32}}var Tu=!1,hn=null,vn=null,gn=null,Ii=new Map,Vi=new Map,xn=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hh(e,a){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":Ii.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(a.pointerId)}}function Gi(e,a,t,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},a!==null&&(a=el(a),a!==null&&Lh(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function M1(e,a,t,n,i){switch(a){case"focusin":return hn=Gi(hn,e,a,t,n,i),!0;case"dragenter":return vn=Gi(vn,e,a,t,n,i),!0;case"mouseover":return gn=Gi(gn,e,a,t,n,i),!0;case"pointerover":var s=i.pointerId;return Ii.set(s,Gi(Ii.get(s)||null,e,a,t,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,Gi(Vi.get(s)||null,e,a,t,n,i)),!0}return!1}function Ih(e){var a=_n(e.target);if(a!==null){var t=f(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,Md(e.priority,function(){kh(t)});return}}else if(a===31){if(a=g(t),a!==null){e.blockedOn=a,Md(e.priority,function(){kh(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=_u(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);dr=n,t.target.dispatchEvent(n),dr=null}else return a=el(t),a!==null&&Lh(a),e.blockedOn=t,!1;a.shift()}return!0}function Vh(e,a,t){_s(e)&&t.delete(a)}function D1(){Tu=!1,hn!==null&&_s(hn)&&(hn=null),vn!==null&&_s(vn)&&(vn=null),gn!==null&&_s(gn)&&(gn=null),Ii.forEach(Vh),Vi.forEach(Vh)}function Os(e,a){e.blockedOn===a&&(e.blockedOn=null,Tu||(Tu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,D1)))}var Ts=null;function Gh(e){Ts!==e&&(Ts=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ts===e&&(Ts=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],i=e[a+2];if(typeof n!="function"){if(Ou(n||t)===null)continue;break}var s=el(t);s!==null&&(e.splice(a,3),a-=3,uc(s,{pending:!0,data:i,method:t.method,action:n},n,i))}}))}function Il(e){function a(y){return Os(y,e)}hn!==null&&Os(hn,e),vn!==null&&Os(vn,e),gn!==null&&Os(gn,e),Ii.forEach(a),Vi.forEach(a);for(var t=0;t<xn.length;t++){var n=xn[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<xn.length&&(t=xn[0],t.blockedOn===null);)Ih(t),t.blockedOn===null&&xn.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],u=i[ya]||null;if(typeof s=="function")u||Gh(t);else if(u){var p=null;if(s&&s.hasAttribute("formAction")){if(i=s,u=s[ya]||null)p=u.formAction;else if(Ou(i)!==null)continue}else p=u.action;typeof p=="function"?t[n+1]=p:(t.splice(n,3),n-=3),Gh(t)}}}function Yh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Cu(e){this._internalRoot=e}Cs.prototype.render=Cu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,n=La();Uh(t,n,e,a,null,null)},Cs.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Uh(e.current,2,null,e,null,null),ps(),a[Wn]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var a=Rd();e={blockedOn:null,target:e,priority:a};for(var t=0;t<xn.length&&a!==0&&a<xn[t].priority;t++);xn.splice(t,0,e),t===0&&Ih(e)}};var Ph=r.version;if(Ph!=="19.3.0")throw Error(d(527,Ph,"19.3.0"));ue.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=E(a),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var z1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:te,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Kl=Rs.inject(z1),Ta=Rs}catch{}}return Pi.createRoot=function(e,a){if(!m(e))throw Error(d(299));var t=!1,n="",i=zf,s=Uf,u=qf;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=Dh(e,1,!1,null,null,t,n,null,i,s,u,Yh),e[Wn]=a.current,ou(e),new Cu(a)},Pi.hydrateRoot=function(e,a,t){if(!m(e))throw Error(d(299));var n=!1,i="",s=zf,u=Uf,p=qf,y=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(y=t.formState)),a=Dh(e,1,!0,a,t??null,n,i,y,s,u,p,Yh),a.context=zh(null),t=a.current,n=La(),n=ir(n),i=an(n),i.callback=null,tn(t,i,n),t=n,a.current.lanes=t,Wl(a,t),vt(a),e[Wn]=a.current,ou(e),new Cs(a)},Pi.version="19.3.0",Pi}var a0;function Y1(){if(a0)return Du.exports;a0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Du.exports=G1(),Du.exports}var P1=Y1();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ad=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,B0=/^[\\/]{2}/;function Q1(o,r){return r+o.replace(/\\/g,"/")}var t0="popstate";function n0(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function $1(o={}){function r(d,m){var E;let f=(E=m.state)==null?void 0:E.masked,{pathname:v,search:g,hash:N}=f||d.location;return Qu("",{pathname:v,search:g,hash:N},m.state&&m.state.usr||null,m.state&&m.state.key||"default",f?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function c(d,m){return typeof m=="string"?m:Gl(m)}return Z1(r,c,null,o)}function He(o,r){if(o===!1||o===null||typeof o>"u")throw new Error(r)}function Nt(o,r){if(!o){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function X1(){return Math.random().toString(36).substring(2,10)}function l0(o,r){return{usr:o.state,key:o.key,idx:r,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Qu(o,r,c=null,d,m){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof r=="string"?Ql(r):r,state:c,key:r&&r.key||d||X1(),mask:m}}function Gl({pathname:o="/",search:r="",hash:c=""}){return r&&r!=="?"&&(o+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function Ql(o){let r={};if(o){let c=o.indexOf("#");c>=0&&(r.hash=o.substring(c),o=o.substring(0,c));let d=o.indexOf("?");d>=0&&(r.search=o.substring(d),o=o.substring(0,d)),o&&(r.pathname=o)}return r}function Z1(o,r,c,d={}){let{window:m=document.defaultView,v5Compat:f=!1}=d,v=m.history,g="POP",N=null,E=j();E==null&&(E=0,v.replaceState({...v.state,idx:E},""));function j(){return(v.state||{idx:null}).idx}function h(){g="POP";let B=j(),q=B==null?null:B-E;E=B,N&&N({action:g,location:k.location,delta:q})}function x(B,q){g="PUSH";let Y=n0(B)?B:Qu(k.location,B,q);E=j()+1;let G=l0(Y,E),oe=k.createHref(Y.mask||Y);try{v.pushState(G,"",oe)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;m.location.assign(oe)}f&&N&&N({action:g,location:k.location,delta:1})}function M(B,q){g="REPLACE";let Y=n0(B)?B:Qu(k.location,B,q);E=j();let G=l0(Y,E),oe=k.createHref(Y.mask||Y);v.replaceState(G,"",oe),f&&N&&N({action:g,location:k.location,delta:0})}function V(B){return F1(m,B)}let k={get action(){return g},get location(){return o(m,v)},listen(B){if(N)throw new Error("A history only accepts one active listener");return m.addEventListener(t0,h),N=B,()=>{m.removeEventListener(t0,h),N=null}},createHref(B){return r(m,B)},createURL:V,encodeLocation(B){let q=V(B);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:x,replace:M,go(B){return v.go(B)}};return k}function F1(o,r,c=!1){let d="http://localhost";o&&(d=o.location.origin!=="null"?o.location.origin:o.location.href),He(d,"No window.location.(origin|href) available to create URL");let m=typeof r=="string"?r:Gl(r);return m=m.replace(/ $/,"%20"),!c&&B0.test(m)&&(m=d+m),new URL(m,d)}function H0(o,r,c="/"){return K1(o,r,c,!1)}function K1(o,r,c,d,m){let f=typeof r=="string"?Ql(r):r,v=It(f.pathname||"/",c);if(v==null)return null;let g=J1(o),N=null,E=cb(v);for(let j=0;N==null&&j<g.length;++j)N=rb(g[j],E,d);return N}function J1(o){let r=I0(o);return W1(r),r}function I0(o,r=[],c=[],d="",m=!1){let f=(v,g,N=m,E)=>{let j={relativePath:E===void 0?v.path||"":E,caseSensitive:v.caseSensitive===!0,childrenIndex:g,route:v};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(d)&&N)return;He(j.relativePath.startsWith(d),`Absolute route path "${j.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(d.length)}let h=nt([d,j.relativePath]),x=c.concat(j);v.children&&v.children.length>0&&(He(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),I0(v.children,r,x,h,N)),!(v.path==null&&!v.index)&&r.push({path:h,score:ob(h,v.index),routesMeta:x.map((M,V)=>{let[k,B]=Y0(M.relativePath,M.caseSensitive,V===x.length-1);return{...M,matcher:k,compiledParams:B}})})};return o.forEach((v,g)=>{var N;if(v.path===""||!((N=v.path)!=null&&N.includes("?")))f(v,g);else for(let E of V0(v.path))f(v,g,!0,E)}),r}function V0(o){let r=o.split("/");if(r.length===0)return[];let[c,...d]=r,m=c.endsWith("?"),f=c.replace(/\?$/,"");if(d.length===0)return m?[f,""]:[f];let v=V0(d.join("/")),g=[];return g.push(...v.map(N=>N===""?f:[f,N].join("/"))),m&&g.push(...v),g.map(N=>o.startsWith("/")&&N===""?"/":N)}function W1(o){o.sort((r,c)=>r.score!==c.score?c.score-r.score:sb(r.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}var eb=/^:[\w-]+$/,ab=3,tb=2,nb=1,lb=10,ib=-2,i0=o=>o==="*";function ob(o,r){let c=o.split("/"),d=c.length;return c.some(i0)&&(d+=ib),r&&(d+=tb),c.filter(m=>!i0(m)).reduce((m,f)=>m+(eb.test(f)?ab:f===""?nb:lb),d)}function sb(o,r){return o.length===r.length&&o.slice(0,-1).every((d,m)=>d===r[m])?o[o.length-1]-r[r.length-1]:0}function rb(o,r,c=!1){let{routesMeta:d}=o,m={},f="/",v=[];for(let g=0;g<d.length;++g){let N=d[g],E=g===d.length-1,j=f==="/"?r:r.slice(f.length)||"/",h={path:N.relativePath,caseSensitive:N.caseSensitive,end:E},x=N.matcher&&N.compiledParams?G0(h,j,N.matcher,N.compiledParams):Bs(h,j),M=N.route;if(!x&&E&&c&&!d[d.length-1].route.index&&(x=Bs({path:N.relativePath,caseSensitive:N.caseSensitive,end:!1},j)),!x)return null;Object.assign(m,x.params),v.push({params:m,pathname:nt([f,x.pathname]),pathnameBase:mb(nt([f,x.pathnameBase])),route:M}),x.pathnameBase!=="/"&&(f=nt([f,x.pathnameBase]))}return v}function Bs(o,r){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,d]=Y0(o.path,o.caseSensitive,o.end);return G0(o,r,c,d)}function G0(o,r,c,d){let m=r.match(c);if(!m)return null;let f=m[0],v=Yl(f,1),g=m.slice(1);return{params:d.reduce((E,{paramName:j,isOptional:h},x)=>{if(j==="*"){let V=g[x]||"";v=Yl(f.slice(0,f.length-V.length),1)}const M=g[x];return h&&!M?E[j]=void 0:E[j]=(M||"").replace(/%2F/g,"/"),E},{}),pathname:f,pathnameBase:v,pattern:o}}function Y0(o,r=!1,c=!0){Nt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let d=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,g,N,E,j)=>{if(d.push({paramName:g,isOptional:N!=null}),N){let h=j.charAt(E+v.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(d.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,r?void 0:"i"),d]}function cb(o){try{return o.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Nt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),o}}function It(o,r){if(r==="/")return o;if(!o.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,d=o.charAt(c);return d&&d!=="/"?null:o.slice(c)||"/"}function ub(o,r="/"){let{pathname:c,search:d="",hash:m=""}=typeof o=="string"?Ql(o):o,f;return c?(c=Q0(c),c.startsWith("/")||c.startsWith("\\")?f=o0(c.substring(1),"/"):f=o0(c,r)):f=r,{pathname:f,search:fb(d),hash:pb(m)}}function o0(o,r){let c=Yl(r).split("/");return o.split("/").forEach(m=>{m===".."?c.length>1&&c.pop():m!=="."&&c.push(m)}),c.length>1?c.join("/"):"/"}function Lu(o,r,c,d){return`Cannot include a '${o}' character in a manually specified \`to.${r}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function db(o){return o.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function P0(o){let r=db(o);return r.map((c,d)=>d===r.length-1?c.pathname:c.pathnameBase)}function td(o,r,c,d=!1){let m;typeof o=="string"?m=Ql(o):(m={...o},He(!m.pathname||!m.pathname.includes("?"),Lu("?","pathname","search",m)),He(!m.pathname||!m.pathname.includes("#"),Lu("#","pathname","hash",m)),He(!m.search||!m.search.includes("#"),Lu("#","search","hash",m)));let f=o===""||m.pathname==="",v=f?"/":m.pathname,g;if(v==null)g=c;else{let h=r.length-1;if(!d&&v.startsWith("..")){let x=v.split("/");for(;x[0]==="..";)x.shift(),h-=1;m.pathname=x.join("/")}g=h>=0?r[h]:"/"}let N=ub(m,g),E=v&&v!=="/"&&v.endsWith("/"),j=(f||v===".")&&c.endsWith("/");return!N.pathname.endsWith("/")&&(E||j)&&(N.pathname+="/"),N}var Q0=o=>o.replace(/[\\/]{2,}/g,"/"),nt=o=>Q0(o.join("/"));function Yl(o,r=0){let c=o.length;for(;c>r&&o.charCodeAt(c-1)===47;)c--;return c===o.length?o:o.slice(0,c)}var mb=o=>Yl(o).replace(/^\/*/,"/"),fb=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,pb=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,hb=class{constructor(o,r,c,d=!1){this.status=o,this.statusText=r||"",this.internal=d,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function vb(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function gb(o){let r=o.map(c=>c.route.path).filter(Boolean);return nt(r)||"/"}var $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function X0(o,r){let c=o;if(typeof c!="string"||!ad.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let d=c,m=!1;if($0)try{let f=new URL(window.location.href),v=B0.test(c)?new URL(Q1(c,f.protocol)):new URL(c),g=It(v.pathname,r);v.origin===f.origin&&g!=null?c=g+v.search+v.hash:m=!0}catch{Nt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:m,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var s0=new URL("http://localhost");function Z0(o){if(o.createURL)return o.createURL("/");try{return new URL(o.createHref("/"),s0)}catch{return s0}}function ku(o,r){return o.origin===r.origin&&(o.origin!=="null"||o.protocol===r.protocol&&o.host===r.host)}function xb(o,r){if(o.startsWith("//"))return!0;let c=r.protocol.toLowerCase();return o.toLowerCase().startsWith(c)?r.host===""||o.slice(c.length).startsWith("//"):!1}function F0(o,r,c,d){let m=null;try{m=o==null?null:new URL(o,c)}catch{}let f=new URL(r,c),v=m!=null&&!ku(m,c),g=!ku(f,c);if(d==="reject"){if(v||g)throw new Error("External navigation is not allowed")}else if(g&&(m==null||!xb(o,m)||!ku(m,f)))throw new Error("External navigation is not allowed")}var K0=["POST","PUT","PATCH","DELETE"];new Set(K0);var bb=["GET",...K0];new Set(bb);var yb=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Nb(o){try{return yb.includes(new URL(o).protocol)}catch{return!1}}var $l=b.createContext(null);$l.displayName="DataRouter";var Vs=b.createContext(null);Vs.displayName="DataRouterState";var J0=b.createContext(!1);function jb(){return b.useContext(J0)}var W0=b.createContext({isTransitioning:!1});W0.displayName="ViewTransition";var Eb=b.createContext(new Map);Eb.displayName="Fetchers";var Sb=b.createContext(null);Sb.displayName="Await";var Xa=b.createContext(null);Xa.displayName="Navigation";var Zi=b.createContext(null);Zi.displayName="Location";var jt=b.createContext({outlet:null,matches:[],isDataRoute:!1});jt.displayName="Route";var nd=b.createContext(null);nd.displayName="RouteError";var ev="REACT_ROUTER_ERROR",Ab="REDIRECT",wb="ROUTE_ERROR_RESPONSE";function _b(o){if(o.startsWith(`${ev}:${Ab}:{`))try{let r=JSON.parse(o.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Ob(o){if(o.startsWith(`${ev}:${wb}:{`))try{let r=JSON.parse(o.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new hb(r.status,r.statusText,r.data)}catch{}}function Tb(o,{relative:r}={}){He(Fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:d}=b.useContext(Xa),{hash:m,pathname:f,search:v}=Ki(o,{relative:r}),g=f;return c!=="/"&&(g=f==="/"?c:nt([c,f])),d.createHref({pathname:g,search:v,hash:m})}function Fi(){return b.useContext(Zi)!=null}function Gt(){return He(Fi(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Zi).location}var av="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tv(o){b.useContext(Xa).static||b.useLayoutEffect(o)}function Cb(){let{isDataRoute:o}=b.useContext(jt);return o?Yb():Rb()}function Rb(){He(Fi(),"useNavigate() may be used only in the context of a <Router> component.");let o=b.useContext($l),{basename:r,navigator:c}=b.useContext(Xa),{matches:d}=b.useContext(jt),{pathname:m}=Gt(),f=JSON.stringify(P0(d)),v=b.useRef(!1);return tv(()=>{v.current=!0}),b.useCallback((N,E={})=>{if(Nt(v.current,av),!v.current)return;if(typeof N=="number"){c.go(N);return}let j=td(N,JSON.parse(f),m,E.relative==="path");o==null&&r!=="/"&&(j.pathname=j.pathname==="/"?r:nt([r,j.pathname])),F0(typeof N=="string"?N:Gl(N),c.createHref(j),Z0(c),"reject"),(E.replace?c.replace:c.push)(j,E.state,E)},[r,c,f,m,o])}b.createContext(null);function Mb(){let{matches:o}=b.useContext(jt),r=o[o.length-1];return(r==null?void 0:r.params)??{}}function Ki(o,{relative:r}={}){let{matches:c}=b.useContext(jt),{pathname:d}=Gt(),m=JSON.stringify(P0(c));return b.useMemo(()=>td(o,JSON.parse(m),d,r==="path"),[o,m,d,r])}function Db(o,r){return nv(o,r)}function nv(o,r,c){var B;He(Fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=b.useContext(Xa),{matches:m}=b.useContext(jt),f=m[m.length-1],v=f?f.params:{},g=f?f.pathname:"/",N=f?f.pathnameBase:"/",E=f&&f.route;{let q=E&&E.path||"";iv(g,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let j=Gt(),h;if(r){let q=typeof r=="string"?Ql(r):r;He(N==="/"||((B=q.pathname)==null?void 0:B.startsWith(N)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${q.pathname}" was given in the \`location\` prop.`),h=q}else h=j;let x=h.pathname||"/",M=x;if(N!=="/"){let q=N.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(q.length).join("/")}let V=c&&c.state.matches.length?c.state.matches.map(q=>Object.assign(q,{route:c.manifest[q.route.id]||q.route})):H0(o,{pathname:M});Nt(E||V!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Nt(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=kb(V&&V.map(q=>Object.assign({},q,{params:Object.assign({},v,q.params),pathname:nt([N,d.encodeLocation?d.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?N:nt([N,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),m,c);return r&&k?b.createElement(Zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},k):k}function zb(){let o=Gb(),r=vb(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,d="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:d},f={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",o),v=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),c?b.createElement("pre",{style:m},c):null,v)}var Ub=b.createElement(zb,null),lv=class extends b.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,r){return r.location!==o.location||r.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:r.error,location:r.location,revalidation:o.revalidation||r.revalidation}}componentDidCatch(o,r){this.props.onError?this.props.onError(o,r):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const c=Ob(o.digest);c&&(o=c)}let r=o!==void 0?b.createElement(jt.Provider,{value:this.props.routeContext},b.createElement(nd.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?b.createElement(qb,{error:o},r):r}};lv.contextType=J0;var Bu=new WeakMap;function qb({children:o,error:r}){let{basename:c,navigator:d}=b.useContext(Xa);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let m=_b(r.digest);if(m){let f=Bu.get(r);if(f)throw f;let v=X0(m.location,c),g=v.absoluteURL||v.to;if(F0(m.location,g,Z0(d),"allow-explicit"),Nb(g))throw new Error("Invalid redirect location");if($0&&!Bu.get(r))if(v.isExternal||m.reloadDocument)window.location.href=g;else{const N=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(v.to,{replace:m.replace}));throw Bu.set(r,N),N}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return o}function Lb({routeContext:o,match:r,children:c}){let d=b.useContext($l);return d&&d.static&&d.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(jt.Provider,{value:o},c)}function kb(o,r=[],c){let d=c==null?void 0:c.state;if(o==null){if(!d)return null;if(d.errors)o=d.matches;else if(r.length===0&&!d.initialized&&d.matches.length>0)o=d.matches;else return null}let m=o,f=d==null?void 0:d.errors;if(f!=null){let j=m.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);He(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),m=m.slice(0,Math.min(m.length,j+1))}let v=!1,g=-1;if(c&&d){v=d.renderFallback;for(let j=0;j<m.length;j++){let h=m[j];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=j),h.route.id){let{loaderData:x,errors:M}=d,V=h.route.loader&&!x.hasOwnProperty(h.route.id)&&(!M||M[h.route.id]===void 0);if(h.route.lazy||V){c.isStatic&&(v=!0),g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}}let N=c==null?void 0:c.onError,E=d&&N?(j,h)=>{var x,M;N(j,{location:d.location,params:((M=(x=d.matches)==null?void 0:x[0])==null?void 0:M.params)??{},pattern:gb(d.matches),errorInfo:h})}:void 0;return m.reduceRight((j,h,x)=>{let M,V=!1,k=null,B=null;d&&(M=f&&h.route.id?f[h.route.id]:void 0,k=h.route.errorElement||Ub,v&&(g<0&&x===0?(iv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,B=null):g===x&&(V=!0,B=h.route.hydrateFallbackElement||null)));let q=r.concat(m.slice(0,x+1)),Y=()=>{let G;return M?G=k:V?G=B:h.route.Component?G=b.createElement(h.route.Component,null):h.route.element?G=h.route.element:G=j,b.createElement(Lb,{match:h,routeContext:{outlet:j,matches:q,isDataRoute:d!=null},children:G})};return d&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?b.createElement(lv,{location:d.location,revalidation:d.revalidation,component:k,error:M,children:Y(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:E}):Y()},null)}function ld(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bb(o){let r=b.useContext($l);return He(r,ld(o)),r}function Hb(o){let r=b.useContext(Vs);return He(r,ld(o)),r}function Ib(o){let r=b.useContext(jt);return He(r,ld(o)),r}function id(o){let r=Ib(o),c=r.matches[r.matches.length-1];return He(c.route.id,`${o} can only be used on routes that contain a unique "id"`),c.route.id}function Vb(){return id("useRouteId")}function Gb(){var d;let o=b.useContext(nd),r=Hb("useRouteError"),c=id("useRouteError");return o!==void 0?o:(d=r.errors)==null?void 0:d[c]}function Yb(){let{router:o}=Bb("useNavigate"),r=id("useNavigate"),c=b.useRef(!1);return tv(()=>{c.current=!0}),b.useCallback(async(m,f={})=>{Nt(c.current,av),c.current&&(typeof m=="number"?await o.navigate(m):await o.navigate(m,{fromRouteId:r,...f}))},[o,r])}var r0={};function iv(o,r,c){!r&&!r0[o]&&(r0[o]=!0,Nt(!1,c))}b.memo(Pb);function Pb({routes:o,manifest:r,future:c,state:d,isStatic:m,onError:f}){return nv(o,void 0,{manifest:r,state:d,isStatic:m,onError:f})}function ma(o){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qb({basename:o="/",children:r=null,location:c,navigationType:d="POP",navigator:m,static:f=!1,useTransitions:v}){He(!Fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=o.replace(/^\/*/,"/"),N=b.useMemo(()=>({basename:g,navigator:m,static:f,useTransitions:v,future:{}}),[g,m,f,v]);typeof c=="string"&&(c=Ql(c));let{pathname:E="/",search:j="",hash:h="",state:x=null,key:M="default",mask:V}=c,k=b.useMemo(()=>{let B=It(E,g);return B==null?null:{location:{pathname:B,search:j,hash:h,state:x,key:M,mask:V},navigationType:d}},[g,E,j,h,x,M,d,V]);return Nt(k!=null,`<Router basename="${g}"> is not able to match the URL "${E}${j}${h}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:b.createElement(Xa.Provider,{value:N},b.createElement(Zi.Provider,{children:r,value:k}))}function $b({children:o,location:r}){return Db($u(o),r)}function $u(o,r=[]){let c=[];return b.Children.forEach(o,(d,m)=>{if(!b.isValidElement(d))return;let f=[...r,m];if(d.type===b.Fragment){c.push.apply(c,$u(d.props.children,f));return}He(d.type===ma,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=$u(d.props.children,f)),c.push(v)}),c}var qs="get",Ls="application/x-www-form-urlencoded";function Gs(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Xb(o){return Gs(o)&&o.tagName.toLowerCase()==="button"}function Zb(o){return Gs(o)&&o.tagName.toLowerCase()==="form"}function Fb(o){return Gs(o)&&o.tagName.toLowerCase()==="input"}function Kb(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Jb(o,r){return o.button===0&&(!r||r==="_self")&&!Kb(o)}var Ms=null;function Wb(){if(Ms===null)try{new FormData(document.createElement("form"),0),Ms=!1}catch{Ms=!0}return Ms}var ey=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hu(o){return o!=null&&!ey.has(o)?(Nt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ls}"`),null):o}function ay(o,r){let c,d,m,f,v;if(Zb(o)){let g=o.getAttribute("action");d=g?It(g,r):null,c=o.getAttribute("method")||qs,m=Hu(o.getAttribute("enctype"))||Ls,f=new FormData(o)}else if(Xb(o)||Fb(o)&&(o.type==="submit"||o.type==="image")){let g=o.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let N=o.getAttribute("formaction")||g.getAttribute("action");if(d=N?It(N,r):null,c=o.getAttribute("formmethod")||g.getAttribute("method")||qs,m=Hu(o.getAttribute("formenctype"))||Hu(g.getAttribute("enctype"))||Ls,f=new FormData(g,o),!Wb()){let{name:E,type:j,value:h}=o;if(j==="image"){let x=E?`${E}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else E&&f.append(E,h)}}else{if(Gs(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=qs,d=null,m=Ls,v=o}return f&&m==="text/plain"&&(v=f,f=void 0),{action:d,method:c.toLowerCase(),encType:m,formData:f,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function od(o,r){if(o===!1||o===null||typeof o>"u")throw new Error(r)}function ov(o,r,c,d){let m=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return c?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${d}`:m.pathname=`${m.pathname}.${d}`:m.pathname==="/"?m.pathname=`_root.${d}`:r&&It(m.pathname,r)==="/"?m.pathname=`${Yl(r)}/_root.${d}`:m.pathname=`${Yl(m.pathname)}.${d}`,m}async function ty(o,r){if(o.id in r)return r[o.id];try{let c=await import(o.module);return r[o.id]=c,c}catch(c){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ny(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function ly(o,r,c){let d=await Promise.all(o.map(async m=>{let f=r.routes[m.route.id];if(f){let v=await ty(f,c);return v.links?v.links():[]}return[]}));return ry(d.flat(1).filter(ny).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function c0(o,r,c,d,m,f){let v=(N,E)=>c[E]?N.route.id!==c[E].route.id:!0,g=(N,E)=>{var j;return c[E].pathname!==N.pathname||((j=c[E].route.path)==null?void 0:j.endsWith("*"))&&c[E].params["*"]!==N.params["*"]};return f==="assets"?r.filter((N,E)=>v(N,E)||g(N,E)):f==="data"?r.filter((N,E)=>{var h;let j=d.routes[N.route.id];if(!j||!j.hasLoader)return!1;if(v(N,E)||g(N,E))return!0;if(N.route.shouldRevalidate){let x=N.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((h=c[0])==null?void 0:h.params)||{},nextUrl:new URL(o,window.origin),nextParams:N.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function iy(o,r,{includeHydrateFallback:c}={}){return oy(o.map(d=>{let m=r.routes[d.route.id];if(!m)return[];let f=[m.module];return m.clientActionModule&&(f=f.concat(m.clientActionModule)),m.clientLoaderModule&&(f=f.concat(m.clientLoaderModule)),c&&m.hydrateFallbackModule&&(f=f.concat(m.hydrateFallbackModule)),m.imports&&(f=f.concat(m.imports)),f}).flat(1))}function oy(o){return[...new Set(o)]}function sy(o){let r={},c=Object.keys(o).sort();for(let d of c)r[d]=o[d];return r}function ry(o,r){let c=new Set;return new Set(r),o.reduce((d,m)=>{let f=JSON.stringify(sy(m));return c.has(f)||(c.add(f),d.push({key:f,link:m})),d},[])}function sd(){let o=b.useContext($l);return od(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function cy(){let o=b.useContext(Vs);return od(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var rd=b.createContext(void 0);rd.displayName="FrameworkContext";function Ys(){let o=b.useContext(rd);return od(o,"You must render this element inside a <HydratedRouter> element"),o}function uy(o,r){let c=b.useContext(rd),[d,m]=b.useState(!1),[f,v]=b.useState(!1),{onFocus:g,onBlur:N,onMouseEnter:E,onMouseLeave:j,onTouchStart:h}=r,x=b.useRef(null);b.useEffect(()=>{if(o==="render"&&v(!0),o==="viewport"){let k=q=>{q.forEach(Y=>{v(Y.isIntersecting)})},B=new IntersectionObserver(k,{threshold:.5});return x.current&&B.observe(x.current),()=>{B.disconnect()}}},[o]),b.useEffect(()=>{if(d){let k=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(k)}}},[d]);let M=()=>{m(!0)},V=()=>{m(!1),v(!1)};return c?o!=="intent"?[f,x,{}]:[f,x,{onFocus:Qi(g,M),onBlur:Qi(N,V),onMouseEnter:Qi(E,M),onMouseLeave:Qi(j,V),onTouchStart:Qi(h,M)}]:[!1,x,{}]}function Qi(o,r){return c=>{o&&o(c),c.defaultPrevented||r(c)}}function dy({page:o,...r}){let c=jb(),{nonce:d}=Ys(),{router:m}=sd(),f=b.useMemo(()=>H0(m.routes,o,m.basename),[m.routes,o,m.basename]);return f?(r.nonce==null&&d&&(r={...r,nonce:d}),c?b.createElement(fy,{page:o,matches:f,...r}):b.createElement(py,{page:o,matches:f,...r})):null}function my(o){let{manifest:r,routeModules:c}=Ys(),[d,m]=b.useState([]);return b.useEffect(()=>{let f=!1;return ly(o,r,c).then(v=>{f||m(v)}),()=>{f=!0}},[o,r,c]),d}function fy({page:o,matches:r,...c}){let d=Gt(),{future:m}=Ys(),{basename:f}=sd(),v=b.useMemo(()=>{if(o===d.pathname+d.search+d.hash)return[];let g=ov(o,f,m.v8_trailingSlashAwareDataRequests,"rsc"),N=!1,E=[];for(let j of r)typeof j.route.shouldRevalidate=="function"?N=!0:E.push(j.route.id);return N&&E.length>0&&g.searchParams.set("_routes",E.join(",")),[g.pathname+g.search]},[f,m.v8_trailingSlashAwareDataRequests,o,d,r]);return b.createElement(b.Fragment,null,v.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...c})))}function py({page:o,matches:r,...c}){let d=Gt(),{future:m,manifest:f,routeModules:v}=Ys(),{basename:g}=sd(),{loaderData:N,matches:E}=cy(),j=b.useMemo(()=>c0(o,r,E,f,d,"data"),[o,r,E,f,d]),h=b.useMemo(()=>c0(o,r,E,f,d,"assets"),[o,r,E,f,d]),x=b.useMemo(()=>{if(o===d.pathname+d.search+d.hash)return[];let k=new Set,B=!1;if(r.forEach(Y=>{var oe;let G=f.routes[Y.route.id];!G||!G.hasLoader||(!j.some(L=>L.route.id===Y.route.id)&&Y.route.id in N&&((oe=v[Y.route.id])!=null&&oe.shouldRevalidate)||G.hasClientLoader?B=!0:k.add(Y.route.id))}),k.size===0)return[];let q=ov(o,g,m.v8_trailingSlashAwareDataRequests,"data");return B&&k.size>0&&q.searchParams.set("_routes",r.filter(Y=>k.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[q.pathname+q.search]},[g,m.v8_trailingSlashAwareDataRequests,N,d,f,j,r,o,v]),M=b.useMemo(()=>iy(h,f),[h,f]),V=my(h);return b.createElement(b.Fragment,null,x.map(k=>b.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),M.map(k=>b.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),V.map(({key:k,link:B})=>b.createElement("link",{key:k,nonce:c.nonce,...B,crossOrigin:B.crossOrigin??c.crossOrigin})))}function hy(...o){return r=>{o.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vy&&(window.__reactRouterVersion="7.18.4")}catch{}function gy({basename:o,children:r,useTransitions:c,window:d}){let m=b.useRef();m.current==null&&(m.current=$1({window:d,v5Compat:!0}));let f=m.current,[v,g]=b.useState({action:f.action,location:f.location}),N=b.useCallback(E=>{c===!1?g(E):b.startTransition(()=>g(E))},[c]);return b.useLayoutEffect(()=>f.listen(N),[f,N]),b.createElement(Qb,{basename:o,children:r,location:v.location,navigationType:v.action,navigator:f,useTransitions:c})}var bt=b.forwardRef(function({onClick:r,discover:c="render",prefetch:d="none",relative:m,reloadDocument:f,replace:v,mask:g,state:N,target:E,to:j,preventScrollReset:h,viewTransition:x,defaultShouldRevalidate:M,...V},k){let{basename:B,navigator:q,useTransitions:Y}=b.useContext(Xa),G=typeof j=="string"&&ad.test(j),oe=X0(j,B);j=oe.to;let L=Tb(j,{relative:m}),se=Gt(),K=null;if(g){let me=td(g,[],se.mask?se.mask.pathname:"/",!0);B!=="/"&&(me.pathname=me.pathname==="/"?B:nt([B,me.pathname])),K=q.createHref(me)}let[W,P,H]=uy(d,V),F=Ny(j,{replace:v,mask:g,state:N,target:E,preventScrollReset:h,relative:m,viewTransition:x,defaultShouldRevalidate:M,useTransitions:Y});function ee(me){r&&r(me),me.defaultPrevented||F(me)}let ce=!(oe.isExternal||f),Ie=b.createElement("a",{...V,...H,href:(ce?K:void 0)||oe.absoluteURL||L,onClick:ce?ee:r,ref:hy(k,P),target:E,"data-discover":!G&&c==="render"?"true":void 0});return W&&!G?b.createElement(b.Fragment,null,Ie,b.createElement(dy,{page:L})):Ie});bt.displayName="Link";var xy=b.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:d="",end:m=!1,style:f,to:v,viewTransition:g,children:N,...E},j){let h=Ki(v,{relative:E.relative}),x=Gt(),M=b.useContext(Vs),{navigator:V,basename:k}=b.useContext(Xa),B=M!=null&&wy(h)&&g===!0,q=V.encodeLocation?V.encodeLocation(h).pathname:h.pathname,Y=x.pathname,G=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;c||(Y=Y.toLowerCase(),G=G?G.toLowerCase():null,q=q.toLowerCase()),G&&k&&(G=It(G,k)||G);const oe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let L=Y===q||!m&&Y.startsWith(q)&&Y.charAt(oe)==="/",se=G!=null&&(G===q||!m&&G.startsWith(q)&&G.charAt(q.length)==="/"),K={isActive:L,isPending:se,isTransitioning:B},W=L?r:void 0,P;typeof d=="function"?P=d(K):P=[d,L?"active":null,se?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let H=typeof f=="function"?f(K):f;return b.createElement(bt,{...E,"aria-current":W,className:P,ref:j,style:H,to:v,viewTransition:g},typeof N=="function"?N(K):N)});xy.displayName="NavLink";var by=b.forwardRef(({discover:o="render",fetcherKey:r,navigate:c,reloadDocument:d,replace:m,state:f,method:v=qs,action:g,onSubmit:N,relative:E,preventScrollReset:j,viewTransition:h,defaultShouldRevalidate:x,...M},V)=>{let{useTransitions:k}=b.useContext(Xa),B=Sy(),q=Ay(g,{relative:E}),Y=v.toLowerCase()==="get"?"get":"post",G=typeof g=="string"&&ad.test(g),oe=L=>{if(N&&N(L),L.defaultPrevented)return;L.preventDefault();let se=L.nativeEvent.submitter,K=(se==null?void 0:se.getAttribute("formmethod"))||v,W=()=>B(se||L.currentTarget,{fetcherKey:r,method:K,navigate:c,replace:m,state:f,relative:E,preventScrollReset:j,viewTransition:h,defaultShouldRevalidate:x});k&&c!==!1?b.startTransition(()=>W()):W()};return b.createElement("form",{ref:V,method:Y,action:q,onSubmit:d?N:oe,...M,"data-discover":!G&&o==="render"?"true":void 0})});by.displayName="Form";function yy(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sv(o){let r=b.useContext($l);return He(r,yy(o)),r}function Ny(o,{target:r,replace:c,mask:d,state:m,preventScrollReset:f,relative:v,viewTransition:g,defaultShouldRevalidate:N,useTransitions:E}={}){let j=Cb(),h=Gt(),x=Ki(o,{relative:v});return b.useCallback(M=>{if(Jb(M,r)){M.preventDefault();let V=c!==void 0?c:Gl(h)===Gl(x),k=()=>j(o,{replace:V,mask:d,state:m,preventScrollReset:f,relative:v,viewTransition:g,defaultShouldRevalidate:N});E?b.startTransition(()=>k()):k()}},[h,j,x,c,d,m,r,o,f,v,g,N,E])}var jy=0,Ey=()=>`__${String(++jy)}__`;function Sy(){let{router:o}=sv("useSubmit"),{basename:r}=b.useContext(Xa),c=Vb(),d=o.fetch,m=o.navigate;return b.useCallback(async(f,v={})=>{let{action:g,method:N,encType:E,formData:j,body:h}=ay(f,r);if(v.navigate===!1){let x=v.fetcherKey||Ey();await d(x,c,v.action||g,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:j,body:h,formMethod:v.method||N,formEncType:v.encType||E,flushSync:v.flushSync})}else await m(v.action||g,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:j,body:h,formMethod:v.method||N,formEncType:v.encType||E,replace:v.replace,state:v.state,fromRouteId:c,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,m,r,c])}function Ay(o,{relative:r}={}){let{basename:c}=b.useContext(Xa),d=b.useContext(jt);He(d,"useFormAction must be used inside a RouteContext");let[m]=d.matches.slice(-1),f={...Ki(o||".",{relative:r})},v=Gt();if(o==null){f.search=v.search;let g=new URLSearchParams(f.search),N=g.getAll("index");if(N.some(j=>j==="")){g.delete("index"),N.filter(h=>h).forEach(h=>g.append("index",h));let j=g.toString();f.search=j?`?${j}`:""}}return(!o||o===".")&&m.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:nt([c,f.pathname])),Gl(f)}function wy(o,{relative:r}={}){let c=b.useContext(W0);He(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=sv("useViewTransitionState"),m=Ki(o,{relative:r});if(!c.isTransitioning)return!1;let f=It(c.currentLocation.pathname,d)||c.currentLocation.pathname,v=It(c.nextLocation.pathname,d)||c.nextLocation.pathname;return Bs(m.pathname,v)!=null||Bs(m.pathname,f)!=null}const _y={sm:"w-[92px]",md:"w-[150px]",lg:"w-[200px]",xl:"w-[260px]"},Za=({size:o="md",className:r="",glow:c=!0})=>l.jsxs("span",{id:"vm-midias-logo",className:`relative inline-flex shrink-0 items-center justify-center select-none ${r}`,children:[c&&l.jsx("span",{className:"absolute inset-[24%] -z-10 bg-[#f40b36]/18 blur-xl","aria-hidden":"true"}),l.jsx("img",{src:"/images/logo-VMmidias.png",alt:"VM MÍDIAS",className:`${_y[o]} h-auto object-contain transition-transform duration-300 hover:scale-[1.02]`,loading:"eager",decoding:"async"})]});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ty=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,c,d)=>d?d.toUpperCase():c.toLowerCase()),u0=o=>{const r=Ty(o);return r.charAt(0).toUpperCase()+r.slice(1)},rv=(...o)=>o.filter((r,c,d)=>!!r&&r.trim()!==""&&d.indexOf(r)===c).join(" ").trim(),Cy=o=>{for(const r in o)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ry={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=b.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:m="",children:f,iconNode:v,...g},N)=>b.createElement("svg",{ref:N,...Ry,width:r,height:r,stroke:o,strokeWidth:d?Number(c)*24/Number(r):c,className:rv("lucide",m),...!f&&!Cy(g)&&{"aria-hidden":"true"},...g},[...v.map(([E,j])=>b.createElement(E,j)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(o,r)=>{const c=b.forwardRef(({className:d,...m},f)=>b.createElement(My,{ref:f,iconNode:r,className:rv(`lucide-${Oy(u0(o))}`,`lucide-${o}`,d),...m}));return c.displayName=u0(o),c};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xl=X("arrow-left",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xt=X("arrow-right",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],d0=X("arrow-up-right",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ly=X("arrow-up",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],By=X("bell",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Zl=X("building-2",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Vy=X("calendar-check",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],Yy=X("calendar-clock",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Qy=X("calendar-days",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],En=X("check",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Zy=X("chevron-down",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ky=X("chevron-left",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cv=X("chevron-right",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],m0=X("circle-alert",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],a2=X("circle-check",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],uv=X("clipboard",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],dv=X("clock-3",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],i2=X("cloud-upload",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],s2=X("coins",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ji=X("download",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],u2=X("external-link",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],m2=X("eye",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],p2=X("file-check-2",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],v2=X("file-image",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],mv=X("file",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Iu=X("gift",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],y2=X("globe",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],j2=X("headphones",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],S2=X("image-off",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],w2=X("image",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],O2=X("instagram",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],f0=X("layout-grid",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],R2=X("list-checks",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],fa=X("loader-circle",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],p0=X("lock-keyhole",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],cd=X("log-out",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],h0=X("mail",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ud=X("map-pin",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],k2=X("menu",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],H2=X("message-circle",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],V2=X("mic-vocal",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],fv=X("monitor-play",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],pv=X("newspaper",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Q2=X("palette",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],X2=X("pen-line",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],F2=X("pencil",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],J2=X("play",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],hv=X("plus",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],aN=X("radio",eN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],dd=X("refresh-cw",tN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],lN=X("repeat",nN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],oN=X("save",iN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ps=X("search",sN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],cN=X("send",rN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],dN=X("settings-2",uN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],md=X("shield-check",mN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vv=X("sparkles",fN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],hN=X("star",pN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],gv=X("store",vN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],v0=X("sun",gN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],bN=X("table-2",xN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],NN=X("tag",yN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],xv=X("ticket",jN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],fd=X("trash-2",EN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Xu=X("trophy",SN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],wN=X("upload",AN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],ON=X("user-plus",_N);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],CN=X("video",TN);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jn=X("x",RN),De={company:{name:"VM MÍDIAS",legalName:"VM MÍDIAS Publicidade e Painéis Digitais",tagline:"SUA MARCA EM DESTAQUE.",locationShort:"Capela do Alto — SP",domain:"www.vmmidias.com.br",whatsappRaw:"551531650153",whatsappFormatted:"(15) 3165-0153",email:"fredericolopescorrea@hotmail.com",instagramUrl:"https://www.instagram.com/vmmidiasindoor",heroVideoUrl:"/videos/Apresentacao-VMmidias.mp4"},plans:[{id:"start",name:"START",type:"MÍDIA INDOOR",coverage:"Divulgação em 05 locais",badge:null,prices:{mensal:{price:"179,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"159,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"139,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 05 pontos estratégicos","Exibição contínua durante todo o horário comercial","Alta frequência de repetições diárias","Criação de arte estática inclusa sem custo adicional","Suporte e atendimento direto em Capela do Alto"]},{id:"destaque",name:"DESTAQUE",type:"MÍDIA INDOOR",coverage:"Divulgação em 09 locais + 01 adicional",badge:"MAIS ESCOLHIDO",prices:{mensal:{price:"259,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"237,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"217,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 09 locais + 01 ponto adicional grátis","Maior presença e frequência em toda a rede","Prioridade em pontos de altíssimo fluxo","Criação de arte inclusa sem custo adicional","Relatórios de inserções e atendimento prioritário"]}],supporters:[{id:"esquina-do-salgado",name:"Esquina do Salgado",logoUrl:"/images/apoiadores/esquina-do-salgado.png"},{id:"espetinho-do-vg",name:"Espetinho do VG",logoUrl:"/images/apoiadores/espetinho-do-vg.png"},{id:"boteco-do-gordao",name:"Boteco do Gordão",logoUrl:"/images/apoiadores/boteco-do-gordao.png"},{id:"mg-sampaio-iperozinho",name:"MG Sampaio Iperózinho",logoUrl:"/images/apoiadores/mg-sampaio.jpg"},{id:"mg-sampaio-culaus",name:"MG Sampaio Culaus",logoUrl:"/images/apoiadores/mg-sampaio.jpg"}],howItWorksSteps:[{step:"01",title:"ESCOLHA SEU PLANO",description:"Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual."},{step:"02",title:"ENVIE SUAS INFORMAÇÕES",description:"Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal."},{step:"03",title:"CRIAMOS SUA CAMPANHA",description:"Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas."},{step:"04",title:"SUA MARCA ENTRA NO AR",description:"Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto."}],whyAdvertise:[{id:"presenca-diaria",title:"PRESENÇA DIÁRIA",description:"Sua marca presente constantemente durante todo o expediente dos melhores estabelecimentos da cidade.",iconName:"CalendarCheck"},{id:"pontos-estrategicos",title:"PONTOS ESTRATÉGICOS",description:"Publicidade instalada exatamente onde as pessoas de Capela do Alto realmente compram e circulam.",iconName:"MapPin"},{id:"alta-frequencia",title:"ALTA FREQUÊNCIA",description:"A repetição diária gera familiaridade. Quem vê todos os dias lembra na hora de comprar.",iconName:"Repeat"},{id:"preco-acessivel",title:"PREÇO ACESSÍVEL",description:"Planos a partir de R$ 139/mês, pensados sob medida para o orçamento do comércio e serviços locais.",iconName:"Coins"},{id:"criacao-facilitada",title:"CRIAÇÃO FACILITADA",description:"Você não precisa ser designer. Nós ajudamos sua empresa a colocar sua campanha no ar com padrão profissional.",iconName:"Palette"},{id:"atendimento-local",title:"ATENDIMENTO LOCAL",description:"Suporte próximo, ágil e humanizado em Capela do Alto, com quem conhece o mercado da nossa região.",iconName:"Headphones"}],faqs:[{question:"O que é mídia indoor?",answer:"Mídia Indoor (também conhecida como DOOH - Digital Out of Home) é a veiculação de anúncios em telas digitais de alta resolução instaladas dentro de estabelecimentos comerciais estratégicos onde há fluxo contínuo de pessoas e tempo de permanência."},{question:"Onde meu anúncio será exibido?",answer:"Sua marca será exibida em telas digitais instaladas nos principais pontos de circulação de Capela do Alto — como supermercados, restaurantes, padarias, lotéricas, academias e comércios parceiros da nossa rede."},{question:"Como envio minha arte?",answer:"Basta nos enviar pelo WhatsApp ou e-mail o seu logotipo (em alta resolução), imagens dos seus produtos/serviços e as informações de contato que deseja destacar. É simples e rápido."},{question:"A VM MÍDIAS cria o anúncio?",answer:"Sim! A criação da arte estática para veiculação nas telas já está inclusa no seu plano, sem cobrança adicional. Caso você queira um vídeo animado em movimento para chamar ainda mais atenção, oferecemos o serviço opcional de animação."},{question:"Quanto tempo demora para minha campanha entrar no ar?",answer:"Após a aprovação da sua arte ou recebimento do seu material finalizado, a campanha entra no ar na nossa rede de telas em até 48 horas úteis."},{question:"Posso alterar minha campanha durante o contrato?",answer:"Sim! Você pode atualizar sua arte ou oferta para divulgar datas comemorativas, promoções especiais ou lançamentos de produtos conforme as condições do seu plano contratado."},{question:"Qual é a diferença entre START e DESTAQUE?",answer:"O Plano START veicula sua marca em 05 locais estratégicos da rede. O Plano DESTAQUE é o mais escolhido: oferece divulgação em 09 locais mais 01 ponto adicional bonificado (total de 10 locais), proporcionando o dobro de cobertura na cidade."},{question:"Como funciona o plano mensal?",answer:"No plano mensal você tem total flexibilidade: renova mês a mês sem fidelidade. Já nos planos semestral (6 meses) e anual (12 meses), você garante descontos progressivos expressivos e a melhor relação custo-benefício por mês."},{question:"Posso contratar mais pontos?",answer:"Com certeza! Conforme a rede de telas da VM MÍDIAS expande em novos bairros e estabelecimentos de Capela do Alto, você pode ampliar sua presença para novos pontos estratégicos adicionais."},{question:"Como faço para anunciar?",answer:"Basta clicar em qualquer botão de contato ou no botão flutuante de WhatsApp do site, escolher seu plano e falar diretamente com nossa equipe. Nós cuidamos de todo o processo para colocar sua marca em destaque rapidamente!"}]},Nn=({title:o,...r})=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":o?void 0:!0,role:o?"img":void 0,...r,children:[o&&l.jsx("title",{children:o}),l.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.297.297-.495.1-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.438-9.886 9.893-9.886a9.821 9.821 0 017.021 2.91 9.825 9.825 0 012.9 7.027c-.003 5.45-4.439 9.887-9.93 9.887m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.449h.005c6.559 0 11.895-5.336 11.898-11.893a11.821 11.821 0 00-3.49-8.414Z"})]}),MN=()=>{const[o,r]=b.useState(!1),[c,d]=b.useState("inicio");b.useEffect(()=>{if(!o)return;const v=document.body.style.overflow;document.body.style.overflow="hidden";const g=E=>{E.key==="Escape"&&r(!1)},N=()=>{window.innerWidth>=1024&&r(!1)};return window.addEventListener("keydown",g),window.addEventListener("resize",N),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",g),window.removeEventListener("resize",N)}},[o]),b.useEffect(()=>{const g=["inicio","onde-estamos","como-funciona","planos","contato"].map(E=>document.getElementById(E)).filter(E=>!!E),N=new IntersectionObserver(E=>{const j=E.filter(h=>h.isIntersecting).sort((h,x)=>x.intersectionRatio-h.intersectionRatio)[0];j&&d(j.target.id)},{rootMargin:"-18% 0px -62% 0px",threshold:[0,.15,.35]});return g.forEach(E=>N.observe(E)),()=>N.disconnect()},[]);const m=[{label:"Início",href:"#inicio"},{label:"Onde Estamos",href:"#onde-estamos"},{label:"Como Funciona",href:"#como-funciona"},{label:"Planos",href:"#planos"},{label:"Contato",href:"#contato"}],f=()=>{r(!1)};return l.jsxs(l.Fragment,{children:[l.jsx("header",{id:"main-header",className:"fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/10 bg-[#030406]/96 shadow-2xl shadow-black/40 backdrop-blur-xl lg:h-[84px]",children:l.jsx("div",{className:"mx-auto h-full max-w-[1500px] px-4 sm:px-8 lg:px-12",children:l.jsxs("div",{className:"flex h-full items-center justify-between",children:[l.jsx("a",{href:"#inicio",className:"flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D] rounded-md","aria-label":"VM MÍDIAS - Ir para o início",children:l.jsx(Za,{size:"sm"})}),l.jsx("nav",{id:"desktop-navigation",className:"hidden lg:flex items-center space-x-7","aria-label":"Navegação Principal",children:m.map(v=>l.jsxs("a",{href:v.href,"aria-current":c===v.href.slice(1)?"page":void 0,className:`text-[13px] font-bold transition-colors relative py-2 group focus:outline-none focus-visible:text-white ${c===v.href.slice(1)?"text-white":"text-[#94979f] hover:text-white"}`,children:[v.label,l.jsx("span",{className:`absolute bottom-0 left-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full ${c===v.href.slice(1)?"w-full":"w-0"}`})]},v.href))}),l.jsx("div",{className:"hidden lg:flex items-center gap-4",children:l.jsxs("a",{id:"header-cta-button",href:"#contato",className:"group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#f40b36] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d90a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[l.jsx("span",{children:"ANUNCIE AGORA"}),l.jsx(xt,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})}),l.jsxs("div",{className:"flex lg:hidden items-center gap-3",children:[l.jsxs("a",{href:"#contato",onClick:f,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8032D] text-white text-xs font-bold uppercase tracking-wider",children:[l.jsx("span",{children:"Anuncie"}),l.jsx(xt,{className:"w-3.5 h-3.5"})]}),l.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>r(!o),className:"p-2 rounded-lg bg-[#15151B] border border-[#22222E] text-white hover:text-[#F8032D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":o,"aria-controls":"mobile-navigation-drawer","aria-label":o?"Fechar menu de navegação":"Abrir menu de navegação",children:o?l.jsx(jn,{className:"w-6 h-6"}):l.jsx(k2,{className:"w-6 h-6"})})]})]})})}),o&&l.jsx("div",{id:"mobile-navigation-drawer",className:"fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto bg-[#050609] lg:hidden",children:l.jsxs("div",{className:"flex min-h-full flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-8",children:[l.jsx("div",{className:"mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38",children:"Navegação"}),l.jsx("nav",{"aria-label":"Navegação móvel",className:"border-t border-white/10",children:m.map((v,g)=>l.jsxs("a",{href:v.href,onClick:f,"aria-current":c===v.href.slice(1)?"page":void 0,className:`group flex min-h-14 items-center gap-4 border-b border-white/10 px-1 text-base font-bold transition-colors ${c===v.href.slice(1)?"text-white":"text-white/65 hover:text-white"}`,children:[l.jsx("span",{className:`text-[10px] tabular-nums ${c===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`,children:String(g+1).padStart(2,"0")}),l.jsx("span",{className:"flex-1",children:v.label}),l.jsx(xt,{className:`h-4 w-4 transition-transform group-hover:translate-x-1 ${c===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`})]},v.href))}),l.jsxs("div",{className:"mt-auto flex flex-col gap-3 border-t border-white/10 pt-5",children:[l.jsxs("a",{href:"#contato",onClick:f,className:"flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-[#F8032D] py-3 text-sm font-black text-white",children:[l.jsx("span",{children:"ANUNCIE AGORA"}),l.jsx(xt,{className:"w-4 h-4"})]}),l.jsxs("a",{href:`https://wa.me/${De.company.whatsappRaw}?text=${encodeURIComponent("Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.")}`,target:"_blank",rel:"noopener noreferrer",onClick:f,className:"flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] py-2.5 text-sm font-bold text-white",children:[l.jsx(Nn,{className:"w-4 h-4 text-emerald-400"}),l.jsx("span",{children:"Falar pelo WhatsApp"})]})]})]})})]})},Wi=({children:o,align:r="left",className:c=""})=>l.jsxs("div",{className:`brand-eyebrow ${r==="center"?"justify-center":""} ${c}`,children:[l.jsx("span",{className:"brand-eyebrow-line","aria-hidden":"true"}),l.jsx("span",{children:o})]}),Qs=({eyebrow:o,title:r,accent:c,description:d,align:m="center",className:f=""})=>l.jsxs("div",{className:`${m==="center"?"text-center mx-auto":"text-left"} max-w-4xl ${f}`,children:[l.jsx(Wi,{align:m,children:o}),l.jsxs("h2",{className:"brand-section-title",children:[r," ",l.jsx("span",{className:"text-[#ff143f] text-led-glow",children:c})]}),d&&l.jsx("p",{className:"brand-section-copy",children:d})]}),Hs=({href:o,children:r,variant:c="primary",id:d,className:m=""})=>l.jsxs("a",{id:d,href:o,className:`group brand-button ${c==="outline"?"brand-button-outline":"brand-button-primary"} ${m}`,children:[l.jsx("span",{children:r}),l.jsx(xt,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]}),DN=({src:o,poster:r})=>l.jsx("div",{className:"relative aspect-video w-full overflow-hidden border border-white/20 bg-[#08090c] shadow-[0_24px_70px_rgba(0,0,0,0.5)]",children:l.jsx("video",{className:"h-full w-full object-cover",controls:!0,playsInline:!0,preload:"metadata",poster:r,"aria-label":"Conheça a VM Mídias",children:l.jsx("source",{src:o,type:"video/mp4"})})}),zN=()=>l.jsxs("section",{id:"inicio",className:"relative min-h-[100svh] overflow-hidden bg-black lg:h-[100svh]",children:[l.jsx("div",{className:"absolute inset-0 bg-hero-city hero-photo-motion","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen","aria-hidden":"true"}),l.jsx("div",{className:"relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-5 pb-10 pt-[104px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-6 lg:pt-[96px]",children:l.jsxs("div",{className:"grid w-full items-center gap-7 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-6",children:[l.jsxs("div",{className:"order-1 lg:col-span-7 lg:row-start-1 lg:self-end",children:[l.jsx(Wi,{children:"VM Mídias · Capela do Alto"}),l.jsxs("h1",{className:"max-w-[820px] text-[clamp(2.8rem,12vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-white lg:text-[clamp(4rem,5.5vw,6.2rem)]",children:["Seu negócio já é bom",l.jsx("span",{className:"mt-3 block text-[#ff143f] text-led-glow",children:"Agora ele precisa aparecer."})]})]}),l.jsx("div",{className:"order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1",children:l.jsx(DN,{src:De.company.heroVideoUrl,poster:"/images/generated/vm-indoor-space.webp"})}),l.jsxs("div",{className:"order-3 lg:col-span-7 lg:row-start-2 lg:self-start",children:[l.jsx("p",{className:"max-w-2xl text-base leading-relaxed text-[#d0d1d6] sm:text-xl lg:text-lg xl:text-xl",children:"Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida."}),l.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[l.jsx(Hs,{id:"hero-primary-cta",href:"#contato",children:"Colocar minha marca em destaque"}),l.jsx(Hs,{id:"hero-secondary-cta",href:"#planos",variant:"outline",children:"Conhecer os planos"})]})]})]})})]}),UN=({supporter:o})=>{const[r,c]=b.useState(!1),d=o.name.split(" ").filter(Boolean).slice(0,2).map(m=>m[0]).join("");return l.jsx("div",{className:"flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-black/35 p-6 sm:p-8",children:r?l.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full border border-[#f40b36]/45 bg-[#f40b36]/10 text-2xl font-black tracking-tight text-white","aria-hidden":"true",children:d}):l.jsx("img",{src:o.logoUrl,alt:`Logo ${o.name}`,className:"h-full max-h-28 w-full object-contain",onError:()=>c(!0)})})},qN=()=>l.jsxs("section",{id:"onde-estamos",className:"relative overflow-hidden border-b border-white/10 bg-[#06070a] py-24 lg:py-32",children:[l.jsx("div",{className:"absolute inset-0 bg-indoor-space bg-cover bg-center opacity-[0.08]","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/95 to-[#06070a]","aria-hidden":"true"}),l.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[l.jsxs("div",{className:"mb-12 max-w-5xl",children:[l.jsx(Wi,{children:"Rede de apoiadores"}),l.jsxs("h2",{className:"brand-section-title",children:["Comércios que já estão com a"," ",l.jsx("span",{className:"text-[#f40b36]",children:"VM Mídias."})]}),l.jsx("p",{className:"brand-section-copy max-w-3xl",children:"Empresas locais que apoiam a nossa rede e fortalecem a mídia indoor em Capela do Alto."})]}),l.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5",children:De.supporters.map(o=>l.jsxs("article",{className:"overflow-hidden border border-white/10 bg-[#0b0d10]/90",children:[l.jsx(UN,{supporter:o}),l.jsxs("div",{className:"min-h-28 p-4 sm:p-5",children:[l.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.18em] text-[#f40b36] sm:text-[10px]",children:"Apoiador VM Mídias"}),l.jsx("h3",{className:"mt-2 text-sm font-black leading-snug text-white sm:text-base",children:o.name})]})]},o.id))})]})]}),LN=()=>l.jsx("section",{id:"como-funciona",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:l.jsxs("div",{className:"mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12",children:[l.jsx("div",{className:"lg:col-span-5",children:l.jsxs("div",{className:"lg:sticky lg:top-32",children:[l.jsx(Qs,{eyebrow:"Do planejamento ao resultado",title:"Como",accent:"funciona",description:"Simples, rápido e sem burocracia.",align:"left"}),l.jsx("div",{className:"mt-8",children:l.jsx(Hs,{href:"#contato",children:"Começar agora"})})]})}),l.jsxs("div",{className:"relative lg:col-span-7 lg:pl-12",children:[l.jsx("div",{className:"absolute bottom-8 left-[19px] top-8 w-px bg-white/12 lg:left-[67px]","aria-hidden":"true"}),l.jsx("div",{className:"space-y-0",children:De.howItWorksSteps.map((o,r)=>l.jsxs("article",{className:"group relative grid grid-cols-[40px_1fr] gap-5 border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:grid-cols-[56px_1fr] lg:gap-8 lg:py-11",children:[l.jsx("div",{className:"relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#030406] text-xs font-black text-white transition-colors group-hover:border-[#f40b36] group-hover:text-[#f40b36] lg:h-14 lg:w-14",children:String(r+1).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:o.title}),l.jsx("p",{className:"mt-3 text-sm font-semibold text-white/75",children:o.description})]})]},o.step))})]})]})}),g0=[{id:"mensal",label:"Mensal",shortLabel:"Mensal"},{id:"semestral",label:"Semestral",shortLabel:"6 meses"},{id:"anual",label:"Anual",shortLabel:"12 meses"}],kN=({onSelectPlan:o})=>{const[r,c]=b.useState("anual"),d=f=>{var v;o==null||o(f.name,r),(v=document.getElementById("contato"))==null||v.scrollIntoView({behavior:"smooth"})},m=f=>{var N;const v=(N=g0.find(E=>E.id===r))==null?void 0:N.label,g=`Olá! Tenho interesse no Plano ${f.name}, período ${v}. Gostaria de receber mais informações.`;return`https://wa.me/${De.company.whatsappRaw}?text=${encodeURIComponent(g)}`};return l.jsx("section",{id:"planos",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:l.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[l.jsx(Qs,{eyebrow:"Planos VM Mídias",title:"Escolha sua",accent:"presença",description:"Dois planos claros. Você escolhe a cobertura e o período ideal para o seu negócio.",className:"mb-9"}),l.jsx("div",{className:"mx-auto mb-10 flex max-w-xl rounded-lg border border-white/10 bg-[#0d0f13] p-1.5",children:g0.map(f=>l.jsxs("button",{type:"button",onClick:()=>c(f.id),"aria-pressed":r===f.id,className:`relative flex min-h-12 flex-1 flex-col items-center justify-center rounded-md px-2 text-center transition-colors ${r===f.id?"bg-[#f40b36] text-white":"text-white/52 hover:bg-white/[0.04] hover:text-white"}`,children:[l.jsx("span",{className:"text-xs font-black uppercase tracking-[0.1em]",children:f.shortLabel}),f.id==="anual"&&l.jsx("span",{className:`mt-0.5 text-[9px] font-bold uppercase ${r==="anual"?"text-white/75":"text-[#f40b36]"}`,children:"melhor valor"})]},f.id))}),l.jsx("div",{className:"mx-auto grid max-w-6xl overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 lg:gap-px",children:De.plans.map(f=>{const v=f.id==="destaque",g=f.prices[r],N=f.features.slice(0,4);return l.jsxs("article",{className:`relative flex flex-col bg-[#0d0f13] p-7 sm:p-10 lg:p-12 ${v?"border-t-4 border-[#f40b36] lg:border-t-0 lg:border-l-4":""}`,children:[l.jsxs("div",{className:"flex items-start justify-between gap-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]",children:f.type}),l.jsxs("h3",{className:"mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl",children:["Plano ",f.name]})]}),v&&l.jsxs("span",{className:"flex shrink-0 items-center gap-1 bg-[#f40b36] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider text-white",children:[l.jsx(hN,{className:"h-3 w-3 fill-current"})," Mais escolhido"]})]}),l.jsx("p",{className:"mt-4 text-sm font-semibold text-white/62",children:f.coverage}),l.jsxs("div",{className:"my-8 border-y border-white/10 py-7",children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.14em] text-white/38",children:g.note}),l.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[l.jsx("span",{className:"mb-2 text-sm font-black text-[#f40b36]",children:"R$"}),l.jsx("span",{className:"text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl",children:g.price}),l.jsx("span",{className:"mb-2 text-sm text-white/45",children:g.period})]})]}),l.jsx("div",{className:"space-y-4",children:N.map(E=>l.jsxs("div",{className:"flex gap-3 text-sm leading-6 text-white/70",children:[l.jsx(En,{className:"mt-1 h-4 w-4 shrink-0 text-[#f40b36]"}),l.jsx("span",{children:E})]},E))}),l.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/48",children:[l.jsx(CN,{className:"h-4 w-4 shrink-0 text-[#f40b36]"}),l.jsxs("span",{children:["Vídeo animado opcional por ",f.optionalVideo[r]]})]}),l.jsxs("div",{className:"mt-auto pt-8",children:[l.jsxs("button",{type:"button",onClick:()=>d(f),className:`group flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.1em] transition-colors ${v?"bg-[#f40b36] text-white hover:bg-[#d90a31]":"border border-white/18 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`,children:["Escolher ",f.name," ",l.jsx(xt,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}),l.jsxs("a",{href:m(f),target:"_blank",rel:"noopener noreferrer",className:"mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/42 transition-colors hover:text-[#25D366]",children:[l.jsx(Nn,{className:"h-4 w-4"})," Tirar dúvidas pelo WhatsApp"]})]})]},f.id)})})]})})},x0=({item:o})=>{const r=o.icon;return l.jsx("article",{className:"group relative flex h-full min-h-[250px] flex-col border border-white/10 bg-[#08090d]/90 p-6 transition-colors duration-300 hover:border-[#ff143f]/45 hover:bg-[#0b0c11] sm:p-7",children:l.jsxs("div",{className:"flex items-start gap-5",children:[l.jsxs("div",{className:"shrink-0",children:[l.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff143f] text-[#ff143f] shadow-[0_0_24px_rgba(248,3,45,0.2)] transition-all duration-300 group-hover:bg-[#ff143f] group-hover:text-white",children:l.jsx(r,{className:"h-6 w-6","aria-hidden":"true"})}),l.jsx("span",{className:"mt-3 block text-center text-[10px] font-black tracking-[0.25em] text-[#5d606b]",children:o.number})]}),l.jsxs("div",{className:"min-w-0 pt-1",children:[l.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white lg:text-2xl",children:o.title}),l.jsx("span",{className:"my-4 block h-[3px] w-10 bg-[#ff143f] shadow-[0_0_12px_#f8032d]"}),l.jsx("p",{className:"max-w-lg text-sm leading-7 text-[#aeb0b8]",children:o.text})]})]})})},BN=({items:o,desktopColumns:r=3,mobileCarousel:c=!1})=>{const d=b.useRef(null),[m,f]=b.useState(0),v=r===2?"md:grid-cols-2":"md:grid-cols-3",g=E=>{var x;const j=Math.max(0,Math.min(o.length-1,E)),h=(x=d.current)==null?void 0:x.children[j];h==null||h.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),f(j)},N=()=>{const E=d.current;if(!E||E.clientWidth===0)return;const j=Math.round(E.scrollLeft/E.clientWidth);f(Math.max(0,Math.min(o.length-1,j)))};return c?l.jsxs("div",{children:[l.jsx("div",{ref:d,onScroll:N,className:`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 ${v}`,children:o.map(E=>l.jsx("div",{className:"min-w-full snap-center md:min-w-0",children:l.jsx(x0,{item:E})},E.id))}),l.jsxs("div",{className:"mt-5 flex items-center justify-between md:hidden",children:[l.jsx("button",{type:"button",onClick:()=>g(m-1),disabled:m===0,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver benefício anterior",children:l.jsx(Ky,{className:"h-5 w-5"})}),l.jsx("div",{className:"flex items-center gap-2","aria-label":"Posição do carrossel",children:o.map((E,j)=>l.jsx("button",{type:"button",onClick:()=>g(j),className:`h-2 rounded-full transition-all ${j===m?"w-7 bg-[#ff143f]":"w-2 bg-white/20"}`,"aria-label":`Ver benefício ${j+1}`,"aria-current":j===m?"true":void 0},E.id))}),l.jsx("button",{type:"button",onClick:()=>g(m+1),disabled:m===o.length-1,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver próximo benefício",children:l.jsx(cv,{className:"h-5 w-5"})})]})]}):l.jsx("div",{className:`grid grid-cols-1 gap-4 ${v}`,children:o.map(E=>l.jsx(x0,{item:E},E.id))})},HN=()=>{const o={CalendarCheck:Vy,MapPin:ud,Repeat:lN,Coins:s2,Palette:Q2,Headphones:j2},r=De.whyAdvertise.map((c,d)=>({id:c.id,number:String(d+1).padStart(2,"0"),title:c.title,text:c.description,icon:o[c.iconName]||vv}));return l.jsx("section",{id:"por-que-anunciar",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:l.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[l.jsx(Qs,{eyebrow:"Vantagens VM Mídias",title:"Por que anunciar",accent:"com a VM Mídias",description:"Mais que mídia, resultados de visibilidade e autoridade para o seu negócio.",align:"left",className:"mb-14 lg:mb-20"}),l.jsx(BN,{items:r,desktopColumns:2,mobileCarousel:!0})]})})},IN=()=>{const[o,r]=b.useState(0),c=d=>{r(m=>m===d?null:d)};return l.jsx("section",{id:"faq",className:"relative py-24 lg:py-32 bg-[#030406] border-b border-white/10 overflow-hidden",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[l.jsx(Qs,{eyebrow:"Tire suas dúvidas",title:"Perguntas",accent:"frequentes",description:"Tudo o que você precisa saber antes de colocar sua marca nas telas.",className:"mb-16"}),l.jsx("div",{className:"border-t border-white/10",children:De.faqs.map((d,m)=>{const f=o===m;return l.jsxs("div",{className:"overflow-hidden border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.025]",children:[l.jsxs("button",{type:"button",onClick:()=>c(m),className:"w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":f,children:[l.jsx("span",{className:"text-base sm:text-lg font-bold text-white leading-snug",children:d.question}),l.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ${f?"rotate-180 border-[#F8032D] text-[#F8032D]":"text-gray-400"}`,children:l.jsx(Zy,{className:"w-4 h-4"})})]}),f&&l.jsx("div",{className:"max-w-3xl pb-7 pr-12 text-sm leading-relaxed text-gray-300 animate-in fade-in duration-200",children:d.answer})]},m)})})]})})},VN=()=>l.jsxs("section",{className:"relative py-28 lg:py-40 bg-[#000000] border-b border-white/10 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-indoor-space opacity-30 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 bg-black/70 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 bg-led-grid opacity-30 pointer-events-none"}),l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none"}),l.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[l.jsx("div",{className:"mb-6 flex justify-center",children:l.jsx(Za,{size:"sm",glow:!0})}),l.jsx(Wi,{align:"center",className:"mb-6",children:"Oportunidade limitada de ponto"}),l.jsxs("h2",{className:"text-[clamp(2.8rem,6vw,6.5rem)] font-black text-white tracking-[-0.055em] leading-[0.94] uppercase mb-7",children:["SUA MARCA PODE SER ",l.jsx("br",{className:"hidden sm:inline"}),l.jsx("span",{className:"text-[#F8032D] text-led-glow",children:"A PRÓXIMA A APARECER."})]}),l.jsx("p",{className:"text-base sm:text-xl text-[#A9ACB3] max-w-2xl mx-auto leading-relaxed mb-10",children:"Coloque sua empresa nos pontos onde Capela do Alto realmente circula. Garanta frequência, visibilidade e resultados reais."}),l.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:l.jsx(Hs,{id:"cta-final-button",href:"#contato",className:"w-full sm:w-auto sm:px-10 sm:min-h-16",children:"Quero colocar minha marca em destaque"})})]})]}),GN=({selectedPlanName:o,selectedPlanCycle:r})=>{const[c,d]=b.useState({nome:"",empresa:"",plano:"PLANO DESTAQUE (Mais Escolhido)",mensagem:""}),[m,f]=b.useState({});b.useEffect(()=>{o&&d(j=>({...j,plano:o.toUpperCase()==="START"?"PLANO START (05 locais)":"PLANO DESTAQUE (Mais Escolhido)"}))},[o,r]);const v=j=>{const h=j.target.name;d(x=>({...x,[h]:j.target.value})),m[h]&&f(x=>({...x,[h]:void 0}))},g=j=>{j.preventDefault();const h={};if(c.nome.trim()||(h.nome="Informe seu nome."),c.mensagem.trim()||(h.mensagem="Escreva uma mensagem para continuar."),f(h),Object.keys(h).length>0)return;const x=["*CONTATO PELO SITE — VM MÍDIAS*","",`*Nome:* ${c.nome.trim()}`,c.empresa.trim()?`*Empresa:* ${c.empresa.trim()}`:"",`*Interesse:* ${c.plano}${r?` — ${r}`:""}`,`*Mensagem:* ${c.mensagem.trim()}`].filter(Boolean).join(`
`),M=`https://wa.me/${De.company.whatsappRaw}?text=${encodeURIComponent(x)}`;window.open(M,"_blank","noopener,noreferrer")},N="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#f40b36] focus:ring-0",E=[{value:"PLANO DESTAQUE (Mais Escolhido)",label:"Destaque",detail:"10 locais"},{value:"PLANO START (05 locais)",label:"Start",detail:"5 locais"},{value:"PAINÉIS DE LED (Sob Medida)",label:"Painel de LED",detail:"sob medida"},{value:"OUTRO / TIRAR DÚVIDAS",label:"Tenho dúvidas",detail:"quero orientação"}];return l.jsx("section",{id:"contato",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:l.jsx("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:l.jsxs("div",{className:"grid gap-14 lg:grid-cols-12 lg:gap-20",children:[l.jsxs("div",{className:"lg:col-span-5",children:[l.jsx(Wi,{children:"Contato direto"}),l.jsxs("h2",{className:"brand-section-title !text-[clamp(3.4rem,7vw,7rem)]",children:["Vamos",l.jsx("br",{}),"conversar."]}),l.jsx("p",{className:"mt-6 max-w-md text-base leading-7 text-white/58",children:"Conte o que sua marca precisa. Ao enviar, abriremos o WhatsApp da VM Mídias com a mensagem pronta."}),l.jsxs("div",{className:"mt-10 border-y border-white/10",children:[l.jsxs("a",{href:`https://wa.me/${De.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4 border-b border-white/10 py-5",children:[l.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:l.jsx(Nn,{className:"h-5 w-5"})}),l.jsxs("span",{className:"flex-1",children:[l.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"WhatsApp comercial"}),l.jsx("span",{className:"mt-1 block font-bold text-white",children:De.company.whatsappFormatted})]}),l.jsx(d0,{className:"h-4 w-4 text-white/35 transition-colors group-hover:text-[#25D366]"})]}),l.jsxs("div",{className:"flex items-center gap-4 py-5",children:[l.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:l.jsx(ud,{className:"h-5 w-5"})}),l.jsxs("span",{children:[l.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"Atendimento local"}),l.jsx("span",{className:"mt-1 block font-bold text-white",children:De.company.locationShort})]})]})]})]}),l.jsxs("div",{className:"lg:col-span-7 lg:pt-10",children:[l.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#f40b36]",children:"Mensagem rápida"}),l.jsx("h3",{className:"mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:"Fale direto com nosso time"})]}),l.jsx(Nn,{className:"hidden h-8 w-8 sm:block"})]}),l.jsxs("form",{onSubmit:g,noValidate:!0,className:"space-y-7",children:[l.jsxs("div",{className:"grid gap-7 sm:grid-cols-2",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"form-nome",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Seu nome"}),l.jsx("input",{id:"form-nome",name:"nome",type:"text",autoComplete:"name",value:c.nome,onChange:v,placeholder:"Como podemos chamar você?",className:`${N} ${m.nome?"!border-red-500":""}`,"aria-invalid":!!m.nome}),m.nome&&l.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[l.jsx(m0,{className:"h-3.5 w-3.5"}),m.nome]})]}),l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"form-empresa",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:["Empresa"," ",l.jsx("span",{className:"font-normal normal-case text-white/30"})]}),l.jsx("input",{id:"form-empresa",name:"empresa",type:"text",autoComplete:"organization",value:c.empresa,onChange:v,placeholder:"Nome do seu negócio",className:N})]})]}),l.jsxs("fieldset",{children:[l.jsx("legend",{className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Qual é o seu interesse?"}),l.jsx("div",{className:"mt-3 grid grid-cols-2 gap-2",children:E.map(j=>{const h=c.plano===j.value;return l.jsxs("button",{type:"button",onClick:()=>d(x=>({...x,plano:j.value})),"aria-pressed":h,className:`min-h-16 rounded-md border px-3 py-3 text-left transition-colors ${h?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-white/[0.025] hover:border-white/28"}`,children:[l.jsx("span",{className:`block text-sm font-black ${h?"text-white":"text-white/68"}`,children:j.label}),l.jsx("span",{className:"mt-0.5 block text-[10px] uppercase tracking-wider text-white/32",children:j.detail})]},j.value)})})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"form-mensagem",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Sua mensagem"}),l.jsx("textarea",{id:"form-mensagem",name:"mensagem",rows:4,value:c.mensagem,onChange:v,placeholder:"Conte brevemente o que você quer divulgar...",className:`${N} resize-y ${m.mensagem?"!border-red-500":""}`,"aria-invalid":!!m.mensagem}),m.mensagem&&l.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[l.jsx(m0,{className:"h-3.5 w-3.5"}),m.mensagem]})]}),l.jsxs("button",{id:"contact-submit-button",type:"submit",className:"group flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041108] transition-colors hover:bg-[#38e478] sm:w-auto sm:min-w-72",children:[l.jsx(Nn,{className:"h-5 w-5"}),"Enviar pelo WhatsApp",l.jsx(d0,{className:"h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"})]})]})]})]})})})},YN=({onOpenPrivacyModal:o})=>{const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("footer",{id:"main-footer",className:"bg-[#0A0A0E] border-t border-[#1C1C26] text-white pt-16 pb-12",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E2A]",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("a",{href:"#inicio",className:"inline-block","aria-label":"VM MÍDIAS",children:l.jsx(Za,{size:"md"})}),l.jsx("p",{className:"text-xs text-[#F8032D] font-extrabold uppercase tracking-widest",children:De.company.tagline}),l.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Rede de telas digitais e mídia indoor estratégica em Capela do Alto. Visibilidade constante e frequência que transformam marcas locais em referências."}),l.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[l.jsx("a",{href:De.company.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-[#F8032D] hover:border-[#F8032D]/40 transition-all","aria-label":"Instagram da VM MÍDIAS",children:l.jsx(O2,{className:"w-4 h-4"})}),l.jsx("a",{href:`https://wa.me/${De.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all","aria-label":"WhatsApp da VM MÍDIAS",children:l.jsx(Nn,{className:"w-4 h-4"})}),l.jsx("a",{href:`mailto:${De.company.email}`,className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all","aria-label":"E-mail da VM MÍDIAS",children:l.jsx(h0,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Navegação"}),l.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[l.jsx("li",{children:l.jsx("a",{href:"#inicio",className:"hover:text-white transition-colors",children:"Início"})}),l.jsx("li",{children:l.jsx("a",{href:"#onde-estamos",className:"hover:text-white transition-colors",children:"Onde Estamos"})}),l.jsx("li",{children:l.jsx("a",{href:"#como-funciona",className:"hover:text-white transition-colors",children:"Como Funciona"})}),l.jsx("li",{children:l.jsx("a",{href:"#planos",className:"hover:text-white transition-colors",children:"Planos"})}),l.jsx("li",{children:l.jsx("a",{href:"#contato",className:"hover:text-white transition-colors",children:"Contato"})})]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Presença Local"}),l.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(ud,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsxs("span",{children:[De.company.locationShort," — Brasil"]})]}),l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(y2,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsx("span",{children:De.company.domain})]}),l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(h0,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsx("span",{children:De.company.email})]}),l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(Nn,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsx("span",{children:"Atendimento comercial via WhatsApp"})]})]})]})]}),l.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[l.jsxs("div",{children:["© 2026 ",De.company.name,". Todos os direitos reservados."]}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("button",{type:"button",onClick:o,className:"text-gray-400 hover:text-white transition-colors underline underline-offset-4",children:"Política de Privacidade (LGPD)"}),l.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-1 text-gray-400 hover:text-[#F8032D] transition-colors","aria-label":"Voltar ao topo da página",children:[l.jsx("span",{children:"Topo"}),l.jsx(Ly,{className:"w-3.5 h-3.5"})]})]})]})]})})},PN=({customMessage:o})=>{const[r,c]=b.useState(!1),d=o||"Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.",m=`https://wa.me/${De.company.whatsappRaw}?text=${encodeURIComponent(d)}`;return l.jsxs("div",{id:"floating-whatsapp-container",className:"fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto",children:[r&&l.jsxs("div",{className:"mb-3 max-w-xs bg-[#111116] border border-[#22222E] rounded-xl p-3.5 shadow-2xl shadow-black text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative",children:[l.jsx("button",{type:"button",onClick:()=>c(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-white","aria-label":"Fechar mensagem",children:l.jsx(jn,{className:"w-3.5 h-3.5"})}),l.jsxs("div",{className:"font-bold text-white mb-1 flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Atendimento VM MÍDIAS"]}),l.jsx("p",{className:"text-gray-300",children:"Dúvidas sobre os planos START e DESTAQUE? Fale diretamente conosco pelo WhatsApp."})]}),l.jsxs("a",{id:"floating-whatsapp-button",href:m,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>c(!0),className:"group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400","aria-label":"Falar com a VM MÍDIAS no WhatsApp",children:[l.jsx("span",{className:"absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60"}),l.jsx(Nn,{className:"w-7 h-7 transition-transform group-hover:scale-110"}),l.jsx("span",{className:"absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0E]"})]})]})},gt="pt-3 text-base font-black text-white",Vu="list-disc space-y-1.5 pl-5 text-white/58",bv=()=>l.jsxs("div",{className:"space-y-4 text-sm leading-7 text-white/68",children:[l.jsxs("p",{children:["Esta Política explica como a"," ",l.jsx("strong",{className:"text-white",children:De.company.legalName})," ","(“VM MÍDIAS”), na qualidade de controladora, trata dados pessoais de visitantes, interessados, clientes e representantes de empresas que usam o site ",De.company.domain," e seus canais de atendimento."]}),l.jsx("p",{children:"O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e os princípios de finalidade, necessidade, transparência, segurança e prevenção."}),l.jsx("h4",{className:gt,children:"1. Dados que podemos coletar"}),l.jsx("p",{children:"Dependendo do canal utilizado, podemos receber:"}),l.jsxs("ul",{className:Vu,children:[l.jsx("li",{children:"nome, empresa, telefone/WhatsApp e e-mail;"}),l.jsx("li",{children:"plano, produto ou serviço de interesse e mensagens comerciais;"}),l.jsx("li",{children:"briefing de criação, tipo de peça, objetivo, textos, estilo, prazo, chamada para ação e informações que deverão aparecer na campanha;"}),l.jsx("li",{children:"arquivos enviados para criação de vídeos, como logos, fotos, referências, documentos e vídeos, além de links do Drive, Canva ou Dropbox;"}),l.jsx("li",{children:"protocolo, situação do atendimento e datas de criação e atualização do pedido;"}),l.jsx("li",{children:"dados técnicos essenciais, como registros de acesso e endereço IP, que podem ser processados pela hospedagem e pelos serviços de infraestrutura para segurança e funcionamento."})]}),l.jsx("p",{children:"Não solicitamos senhas, dados bancários ou dados pessoais sensíveis nos formulários. Não inclua esse tipo de informação no briefing ou nos links compartilhados."}),l.jsx("h4",{className:gt,children:"2. Para que usamos os dados"}),l.jsxs("ul",{className:Vu,children:[l.jsx("li",{children:"responder contatos, dúvidas e solicitações de orçamento;"}),l.jsx("li",{children:"apresentar planos, propostas e condições comerciais;"}),l.jsx("li",{children:"organizar, criar, revisar, aprovar e programar artes e vídeos contratados;"}),l.jsx("li",{children:"acompanhar o histórico e o andamento de cada solicitação;"}),l.jsx("li",{children:"prevenir abuso, fraude, spam e incidentes de segurança;"}),l.jsx("li",{children:"cumprir contratos e obrigações legais ou regulatórias."})]}),l.jsx("h4",{className:gt,children:"3. Bases legais"}),l.jsx("p",{children:"Conforme o contexto, o tratamento poderá ocorrer com base no consentimento, na execução de contrato ou de procedimentos preliminares solicitados pelo titular, no cumprimento de obrigação legal ou regulatória e no legítimo interesse da VM MÍDIAS, sempre respeitando os direitos e as expectativas do titular."}),l.jsx("h4",{className:gt,children:"4. Armazenamento e compartilhamento"}),l.jsx("p",{children:"Os dados podem ser tratados pela equipe da VM MÍDIAS e por fornecedores necessários à operação, estritamente para as finalidades desta Política, incluindo:"}),l.jsxs("ul",{className:Vu,children:[l.jsx("li",{children:"HostGator, responsável pela hospedagem do site;"}),l.jsx("li",{children:"Supabase, utilizado para registrar solicitações e armazenar de forma privada os materiais enviados para produção;"}),l.jsx("li",{children:"n8n, quando utilizado para automatizar o fluxo interno de atendimento;"}),l.jsx("li",{children:"WhatsApp/Meta, quando o visitante decide iniciar atendimento por esse canal;"}),l.jsx("li",{children:"serviços escolhidos pelo cliente para compartilhar arquivos por link, sujeitos às próprias políticas de privacidade."})]}),l.jsx("p",{children:"A VM MÍDIAS não vende nem aluga dados pessoais. Alguns fornecedores podem utilizar infraestrutura localizada fora do Brasil; nesses casos, buscamos utilizar serviços reconhecidos e medidas compatíveis com a legislação aplicável."}),l.jsx("h4",{className:gt,children:"5. Prazo de conservação"}),l.jsx("p",{children:"Mantemos os dados somente pelo tempo necessário para atender a solicitação, executar a relação comercial, preservar o histórico de criação e cumprir obrigações legais. Depois desse período, eles poderão ser eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida por lei."}),l.jsx("h4",{className:gt,children:"6. Cookies, recursos técnicos e links externos"}),l.jsx("p",{children:"O site utiliza recursos técnicos necessários para navegação, segurança e envio dos formulários. Não utilizamos os dados dos formulários para vender perfis de publicidade. Links externos, como Instagram, WhatsApp, Drive, Canva ou Dropbox, passam a seguir as políticas dos respectivos serviços quando acessados."}),l.jsx("h4",{className:gt,children:"7. Segurança"}),l.jsx("p",{children:"Adotamos controles compatíveis com o porte e a natureza da operação para reduzir riscos de acesso não autorizado, alteração, perda ou divulgação indevida. Nenhum sistema é completamente imune a incidentes, mas revisamos acessos e integrações para limitar o tratamento ao necessário."}),l.jsx("h4",{className:gt,children:"8. Direitos do titular"}),l.jsx("p",{children:"Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando aplicável, portabilidade conforme regulamentação, oposição, revogação do consentimento e revisão de decisões exclusivamente automatizadas que afetem seus interesses."}),l.jsx("h4",{className:gt,children:"9. Como falar sobre seus dados"}),l.jsxs("p",{children:["Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail"," ",l.jsx("strong",{className:"text-white",children:De.company.email})," ou pelo WhatsApp oficial ",De.company.whatsappFormatted,". Podemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger os dados envolvidos."]}),l.jsx("h4",{className:gt,children:"10. Atualizações desta Política"}),l.jsx("p",{children:"Esta Política poderá ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão disponíveis nesta página."})]}),QN=({isOpen:o,onClose:r})=>o?l.jsx("div",{id:"privacy-policy-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",children:l.jsxs("div",{className:"relative w-full max-w-3xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto",children:[l.jsx("button",{type:"button",onClick:r,className:"absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A24] transition-colors","aria-label":"Fechar Política de Privacidade",children:l.jsx(jn,{className:"w-5 h-5"})}),l.jsxs("div",{className:"flex items-center gap-3 mb-6 pb-4 border-b border-[#22222E]",children:[l.jsx("div",{className:"p-2.5 rounded-lg bg-[#F8032D]/10 text-[#F8032D] border border-[#F8032D]/20",children:l.jsx(md,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h3",{id:"privacy-modal-title",className:"text-xl font-black text-white",children:"Política de Privacidade & LGPD"}),l.jsx("p",{className:"text-xs text-gray-400",children:"Atualizado em 28 de setembro de 2026."})]})]}),l.jsx(bv,{}),l.jsx("div",{className:"mt-8 pt-4 border-t border-[#22222E] flex justify-end",children:l.jsx("button",{type:"button",onClick:r,className:"px-6 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white font-bold text-sm shadow-led-sm transition-all",children:"Entendido e Fechar"})})]})}):null;function $N(){return b.useEffect(()=>{const o=document.title;return document.title="Política de Privacidade | VM MÍDIAS",()=>{document.title=o}},[]),l.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[l.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex h-[76px] max-w-5xl items-center justify-between px-5 sm:px-8",children:[l.jsx("a",{href:"/","aria-label":"Voltar ao site da VM MÍDIAS",children:l.jsx(Za,{size:"sm"})}),l.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white",children:[l.jsx(Xl,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})}),l.jsx("main",{className:"px-5 py-12 sm:px-8 sm:py-16",children:l.jsxs("article",{className:"brand-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-10 lg:p-12",children:[l.jsxs("header",{className:"mb-8 flex items-start gap-4 border-b border-white/10 pb-7",children:[l.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]",children:l.jsx(md,{className:"h-6 w-6"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Transparência e LGPD"}),l.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:"Política de Privacidade"}),l.jsx("p",{className:"mt-2 text-xs text-white/40",children:"Atualizada em 29 de setembro de 2026."})]})]}),l.jsx(bv,{})]})})]})}const XN=`Act like um Diretor Criativo Sênior, Motion Designer, Diretor de Arte, Especialista em Lettering Animado, Branding e Prompt Engineer especializado em criação de publicidade audiovisual para MÍDIA INDOOR e geração de vídeo por IA no Google Flow.

Sua missão é transformar um briefing simples de uma marca, sua logo e eventuais imagens fornecidas em uma direção criativa completa e, ao final, produzir DOIS PROMPTS DE GERAÇÃO DE VÍDEO de 10 segundos cada para o Google Flow.

Esses dois prompts NÃO representam dois vídeos diferentes.

Eles são duas partes consecutivas de UMA ÚNICA PEÇA PUBLICITÁRIA DE EXATAMENTE 20 SEGUNDOS, criada no formato VERTICAL 9:16 para MÍDIA INDOOR.

A divisão em dois blocos existe SOMENTE por uma limitação técnica da ferramenta de geração.

Portanto:

PROMPT 01 = segundos 00:00–00:10

PROMPT 02 = segundos 00:10–00:20

O espectador deverá perceber o resultado final como UM ÚNICO VÍDEO CONTÍNUO DE 20 SEGUNDOS.

Os dois prompts deverão ser gerados separadamente, em blocos independentes e prontos para copiar e colar individualmente no Google Flow.

━━━━━━━━━━━━━━━━━━━━━━
1. DADOS DE ENTRADA
━━━━━━━━━━━━━━━━━━━━━━

Eu fornecerei:

<BRIEFING>

<ARTE MODELO (VISUAL KEY)>

NOME DO NEGÓCIO

SEGMENTO DO NEGÓCIO

CONTATO DE WHATSAPP

ENDEREÇO (OPCIONAL)

BREVE DESCRIÇÃO DO NEGÓCIO (OPCIONAL)

</BRIEFING>

<ASSETS>

Brandkit com Logo da marca:
[ARQUIVO ANEXADO]

Imagem(ns) adicional(is):
[ARQUIVOS ANEXADOS, QUANDO HOUVER]

</ASSETS>

Considere esses dados e arquivos como a fonte principal de verdade do projeto.

Não exija que eu forneça manualmente paleta de cores, tipografia, direção de arte, estilo de animação, composição ou preset visual.

Essas decisões fazem parte do seu trabalho como Diretor Criativo.

Quando alguma dessas decisões não estiver explicitamente definida no briefing, faça a escolha profissionalmente com base na identidade percebida da marca, no segmento, no contexto de mídia indoor e nos assets fornecidos.

━━━━━━━━━━━━━━━━━━━━━━
2. OBJETIVO PRINCIPAL
━━━━━━━━━━━━━━━━━━━━━━

Crie o conceito de um anúncio de MÍDIA INDOOR com:

• duração total: 20 segundos;
• orientação: vertical;
• aspect ratio: 9:16;
• linguagem prioritária: motion design + lettering;
• leitura rápida;
• comunicação objetiva;
• forte reconhecimento da marca;
• alto contraste;
• hierarquia visual clara;
• compreensão mesmo sem áudio;
• impacto visual imediato;
• ritmo adequado para mídia indoor;
• composição criada originalmente para tela vertical;
• capacidade de ser compreendido por pessoas que podem visualizar a tela apenas por alguns segundos.

O vídeo NÃO deve parecer:

• Reel de influenciador;
• Story pessoal;
• slideshow genérico;
• montagem aleatória de imagens;
• template genérico de rede social;
• vídeo de banco de templates;
• sequência de cenas desconectadas;
• dois comerciais independentes de 10 segundos simplesmente unidos.

Ele deve parecer uma peça profissional de motion design criada especificamente para mídia indoor.

━━━━━━━━━━━━━━━━━━━━━━
3. ANALISE PRIMEIRO, CRIE DEPOIS
━━━━━━━━━━━━━━━━━━━━━━

Antes de escrever qualquer prompt para geração de vídeo, analise internamente:

• briefing;
• segmento;
• descrição do negócio;
• objetivo da campanha;
• logo;
• arte modelo ou visual key;
• imagens adicionais;
• linguagem visual aparente da marca;
• personalidade visual;
• potencial de movimento;
• mensagem que precisa ser compreendida em 20 segundos;
• quais informações realmente precisam aparecer;
• quais informações devem ser eliminadas para preservar clareza;
• como construir uma narrativa única de 20 segundos;
• como fazer a divisão técnica no segundo 10 sem criar sensação de interrupção.

Não exponha raciocínio interno detalhado.

Apresente apenas suas conclusões criativas relevantes.

━━━━━━━━━━━━━━━━━━━━━━
4. LEITURA DA IDENTIDADE VISUAL
━━━━━━━━━━━━━━━━━━━━━━

Analise a logo, a arte modelo e os materiais fornecidos para identificar, quando visualmente possível:

• cores predominantes;
• cores secundárias;
• contraste;
• geometria;
• personalidade;
• nível de sofisticação;
• linguagem visual;
• características tipográficas;
• elementos gráficos aproveitáveis;
• texturas;
• formas;
• recortes;
• padrões;
• relações entre cheio e vazio;
• possibilidades de movimento derivadas da própria identidade.

Não altere arbitrariamente a identidade da marca.

Quando não for possível determinar a fonte original, escolha uma tipografia visualmente compatível, priorizando famílias disponíveis no Google Fonts quando isso for relevante.

A tipografia escolhida deve manter coerência com a personalidade da marca e funcionar bem em lettering animado para mídia indoor.

IMPORTANTE:

Nunca tente adivinhar o nome da empresa a partir de pequenos textos existentes dentro de uma imagem.

O campo "NOME DO NEGÓCIO" é a fonte de verdade para o nome escrito.

O mesmo princípio vale para:

• contato;
• endereço;
• preços;
• ofertas;
• serviços;
• produtos;
• slogans;
• qualquer outra informação factual fornecida no briefing.

Não substitua informações fornecidas por interpretações visuais de textos encontrados nas imagens.

━━━━━━━━━━━━━━━━━━━━━━
5. CONCEITO ANTES DA EXECUÇÃO
━━━━━━━━━━━━━━━━━━━━━━

Transforme o objetivo fornecido em UMA ideia central.

Não tente colocar toda a descrição da empresa dentro do anúncio.

Identifique:

MENSAGEM PRINCIPAL:
O que o público precisa entender?

BENEFÍCIO/PROPOSTA:
Por que isso importa?

AÇÃO:
O que queremos que o público faça, memorize ou associe à marca?

Crie uma narrativa visual simples o suficiente para ser compreendida rapidamente em um ambiente indoor.

Quando apropriado, utilize a lógica:

MARCA → MENSAGEM/BENEFÍCIO → REFORÇO → CTA/CONTATO.

Não aplique essa estrutura mecanicamente se outra narrativa funcionar melhor para o objetivo informado.

Toda escolha visual deve servir à ideia central.

━━━━━━━━━━━━━━━━━━━━━━
6. LETTERING É PROTAGONISTA
━━━━━━━━━━━━━━━━━━━━━━

O texto não deve simplesmente aparecer sobre o vídeo.

O lettering deve fazer parte da direção de arte e do movimento.

Planeje:

• escala;
• peso;
• hierarquia;
• alinhamento;
• posição;
• entrada;
• saída;
• ritmo;
• transformação;
• relação entre palavras;
• relação entre texto e imagens;
• contraste;
• legibilidade à distância;
• permanência em tela;
• comportamento durante transições;
• como cada palavra participa da narrativa.

Prefira mensagens curtas e fortes.

Evite parágrafos.

Evite excesso de informações simultâneas.

Evite textos pequenos.

Evite inserir informações essenciais em áreas de difícil leitura.

Evite utilizar mais palavras quando uma construção curta comunicar a mesma coisa com maior impacto.

Quando uma palavra for visualmente importante, trate-a como elemento gráfico.

IMPORTANTE:

Lettering expressivo NÃO significa repetir o mesmo texto em várias camadas.

Salvo quando uma repetição textual for deliberadamente solicitada pela direção criativa, cada palavra, frase, CTA, nome de marca ou informação comercial deve existir como UMA ÚNICA INSTÂNCIA VISUAL LEGÍVEL por vez.

Não use duplicação de texto como recurso decorativo.

Não crie ecos tipográficos legíveis.

Não crie cópias fantasmas da mesma palavra.

Não use reflexos, sombras, extrusões, motion blur ou rastros que possam parecer uma segunda versão legível do texto.

━━━━━━━━━━━━━━━━━━━━━━
7. SAFE AREA 9:16
━━━━━━━━━━━━━━━━━━━━━━

Todo o projeto deve ser pensado originalmente para 9:16.

Mantenha textos e informações críticas fora:

• dos 12% superiores do quadro;
• dos 18% inferiores do quadro.

Logo, CTA, contato e lettering essencial devem permanecer em áreas seguras e possuir contraste suficiente com o fundo.

A composição não deve simplesmente ser um layout horizontal recortado para vertical.

Ela deve nascer vertical.

Considere o centro útil da tela como área prioritária para:

• mensagem principal;
• lettering;
• produto;
• marca;
• CTA.

Nenhuma informação comercial indispensável deve ficar encostada nas bordas.

IMPORTANTE:

Percentuais como "12%" e "18%" são parâmetros técnicos de composição.

Eles NÃO são conteúdo textual do vídeo.

Nunca renderize esses números ou quaisquer valores técnicos na tela.

━━━━━━━━━━━━━━━━━━━━━━
8. SISTEMA DE MOVIMENTO
━━━━━━━━━━━━━━━━━━━━━━

Defina UMA linguagem de movimento coerente para os 20 segundos.

Escolha movimentos compatíveis com a personalidade da marca.

Considere:

• velocidade;
• aceleração;
• desaceleração;
• easing;
• escala;
• tracking;
• máscaras;
• reveals;
• deslocamentos;
• transformações tipográficas;
• movimento de elementos gráficos;
• transições;
• profundidade;
• parallax, quando fizer sentido;
• movimento de câmera, somente quando agregar;
• direção dominante do movimento;
• ritmo entre beats;
• continuidade física dos elementos;
• permanência de energia entre uma cena e outra.

Não misture vários estilos de animação sem justificativa.

Os 20 segundos precisam pertencer ao mesmo sistema visual.

O Prompt 01 e o Prompt 02 devem utilizar exatamente a mesma lógica de movimento.

Quando um lettering mudar de posição, anime o MESMO elemento visual.

Não gere uma segunda cópia da palavra apenas para representar o movimento.

Quando uma palavra estiver saindo, evite manter uma cópia residual enquanto outra versão entra.

━━━━━━━━━━━━━━━━━━━━━━
9. REGRA FUNDAMENTAL DOS 20 SEGUNDOS
━━━━━━━━━━━━━━━━━━━━━━

Pense PRIMEIRO em uma timeline única:

00:00 ───────────────────────────── 00:20

Somente DEPOIS divida tecnicamente essa timeline em:

PARTE A
00:00 → 00:10

PARTE B
00:10 → 00:20

A divisão NÃO pode determinar a narrativa.

A narrativa de 20 segundos determina a divisão.

O segundo 10 deve funcionar como ponte, não como encerramento seguido de um novo começo.

Sempre que criativamente possível, deixe no segundo 10 uma ação visual em andamento que possa continuar naturalmente no Prompt 02.

Exemplos possíveis de continuidade:

• lettering ainda se deslocando;
• máscara ainda abrindo;
• elemento gráfico atravessando o quadro;
• produto em movimento contínuo;
• câmera ainda executando deslocamento suave;
• composição em transformação;
• forma gráfica expandindo;
• palavra sendo revelada;
• elemento entrando parcialmente no quadro;
• transição iniciada no Prompt 01 e concluída no Prompt 02.

Evite construir um "mini final" em 00:10.

Não trate 00:10 como encerramento.

IMPORTANTE:

Os timestamps "00:00", "00:10" e "00:20" são exclusivamente referências técnicas de timeline.

Eles NÃO devem aparecer escritos, renderizados ou animados no vídeo.

━━━━━━━━━━━━━━━━━━━━━━
10. FRAME DE CONTINUIDADE
━━━━━━━━━━━━━━━━━━━━━━

O ponto mais importante do projeto é:

00:10.

Defina precisamente como o primeiro vídeo termina.

Crie um ESTADO DE CONTINUIDADE contendo:

• cor/fundo;
• composição;
• posição do lettering;
• escala do lettering;
• posição da logo, se presente;
• escala da logo;
• posição dos elementos gráficos;
• enquadramento;
• iluminação;
• profundidade;
• direção do movimento;
• velocidade aparente;
• elemento que está entrando;
• elemento que está saindo;
• estado da animação;
• estado de máscaras;
• estado de transformações;
• posição de produtos ou imagens;
• direção de câmera;
• proporções relativas entre elementos;
• elementos que precisam permanecer idênticos.

O Prompt 02 deverá começar exatamente desse universo visual.

O PRIMEIRO FRAME VISUAL do Prompt 02 deve ser compatível com o ÚLTIMO FRAME VISUAL do Prompt 01.

A continuidade deve funcionar mesmo considerando que o Google Flow gerará os dois arquivos separadamente.

Portanto, o estado de 00:10 deve ser descrito de maneira objetiva, concreta e replicável.

Não reinicie a composição.

Não apresente novamente a marca como se fosse outro anúncio.

Não faça fade-to-black no segundo 10 apenas para facilitar a divisão, salvo quando isso fizer parte deliberadamente do conceito.

Evite cortes secos no segundo 10 se eles criarem a percepção de que um novo vídeo começou.

━━━━━━━━━━━━━━━━━━━━━━
11. CONSISTÊNCIA ENTRE AS DUAS GERAÇÕES
━━━━━━━━━━━━━━━━━━━━━━

PROMPT 01 e PROMPT 02 devem compartilhar explicitamente:

• mesma identidade visual;
• mesma paleta;
• mesma família tipográfica;
• mesmos pesos tipográficos;
• mesmo tratamento do lettering;
• mesma linguagem de motion;
• mesmo tratamento de luz;
• mesma estética;
• mesma lógica de composição;
• mesma linguagem gráfica;
• mesmo nível de acabamento;
• mesma personalidade de marca;
• mesmo nível de contraste;
• mesmo tratamento das imagens;
• mesma lógica de profundidade;
• mesma direção artística;
• mesma textura visual;
• mesmo comportamento de câmera.

Se houver personagens, produtos, objetos, cenários ou elementos visuais recorrentes, descreva novamente suas características essenciais no Prompt 02 para aumentar a consistência.

Não dependa da "memória" da ferramenta entre uma geração e outra.

Assuma que o Google Flow poderá interpretar o Prompt 02 isoladamente.

Por isso, o Prompt 02 deve repetir as informações visuais necessárias sem reiniciar a narrativa.

━━━━━━━━━━━━━━━━━━━━━━
12. USO DAS IMAGENS FORNECIDAS
━━━━━━━━━━━━━━━━━━━━━━

Quando houver imagens adicionais, determine primeiro sua função.

Elas podem atuar como:

• elemento principal;
• background;
• textura;
• recorte;
• máscara;
• elemento de transição;
• referência de produto;
• referência estética;
• composição fotográfica;
• objeto em primeiro plano;
• elemento de profundidade.

Não force todas as imagens fornecidas a aparecerem.

Use apenas aquilo que melhora a comunicação.

Preserve características importantes de:

• produtos;
• logos;
• embalagens;
• pessoas;
• ambientes;
• objetos;
• elementos identificadores.

Não invente alterações desnecessárias na aparência dos produtos.

Quando a imagem representar um produto real, mantenha aparência, proporções, cores e características reconhecíveis.

Se uma imagem fornecida contiver pequenos textos que não façam parte dos textos comerciais autorizados, NÃO tente reproduzi-los, reinterpretá-los ou utilizá-los como nova informação textual.

━━━━━━━━━━━━━━━━━━━━━━
13. LOGO
━━━━━━━━━━━━━━━━━━━━━━

A logo é um ativo de marca, não uma decoração aleatória.

Preserve:

• proporção;
• desenho;
• leitura;
• cores, quando apropriado;
• integridade visual;
• relação entre símbolo e lettering;
• orientação.

Não distorça.

Não redesenhe.

Não acrescente símbolos inexistentes.

Não transforme a logo em uma versão irreconhecível.

Não recrie tipograficamente a logo se o arquivo original estiver disponível.

Determine estrategicamente quando ela deve aparecer.

A logo poderá surgir no início, durante a narrativa ou apenas no end frame, dependendo do conceito.

A decisão deve favorecer reconhecimento da marca e não apenas preencher espaço.

Não duplique a logo simultaneamente em diferentes posições, salvo quando isso fizer parte intencional e indispensável do conceito.

━━━━━━━━━━━━━━━━━━━━━━
14. CONTATO E CTA
━━━━━━━━━━━━━━━━━━━━━━

O contato fornecido precisa ser tratado como informação textual EXATA.

Não altere:

• números;
• @;
• domínio;
• pontuação;
• grafia;
• espaços relevantes;
• DDD;
• ordem dos caracteres.

Se o objetivo pedir conversão, planeje tempo suficiente para o CTA ser realmente lido.

O encerramento deve funcionar como END FRAME publicitário, com hierarquia clara entre:

1. marca;
2. CTA;
3. contato;

quando essas informações forem necessárias.

O end frame deve permanecer estável tempo suficiente para leitura.

Evite finalizar com CTA aparecendo apenas por uma fração de segundo.

O contato deve aparecer em UMA ÚNICA versão correta.

Nunca:

• duplique o número;
• gere uma segunda versão parcialmente diferente;
• acrescente dígitos;
• remova dígitos;
• repita caracteres;
• crie uma cópia decorativa do telefone;
• transforme o número em textura de fundo.

━━━━━━━━━━━━━━━━━━━━━━
15. ÁUDIO
━━━━━━━━━━━━━━━━━━━━━━

Considere que uma peça de mídia indoor pode ser exibida sem áudio.

Portanto, nenhuma informação essencial pode depender exclusivamente de:

• locução;
• diálogo;
• música;
• efeitos sonoros.

O vídeo deve comunicar sua mensagem visualmente.

O áudio, caso exista, deve ser complementar.

A narrativa visual precisa funcionar perfeitamente no modo silencioso.

━━━━━━━━━━━━━━━━━━━━━━
16. EVITE PROBLEMAS COMUNS DE IA
━━━━━━━━━━━━━━━━━━━━━━

Nos prompts de geração, tome precauções contra:

• texto ilegível;
• palavras inventadas;
• letras deformadas;
• erros ortográficos;
• caracteres extras;
• contato alterado;
• logo deformada;
• logo reinterpretada;
• elementos duplicados;
• palavras duplicadas;
• frases duplicadas;
• números duplicados;
• textos fantasmas;
• textos espelhados;
• letras extras;
• repetições involuntárias;
• códigos técnicos visíveis;
• códigos HEX visíveis;
• timestamps visíveis;
• parâmetros técnicos visíveis;
• flickering;
• jitter;
• morphing indesejado;
• mudanças inexplicáveis de cor;
• mudança de identidade entre cenas;
• objetos surgindo sem motivo;
• objetos desaparecendo sem motivo;
• câmera excessivamente agitada;
• composição congestionada;
• estética genérica de template;
• transições sem propósito;
• deformação de produtos;
• troca de tipografia durante o vídeo;
• mudança de iluminação sem justificativa;
• reconstrução diferente dos mesmos objetos entre os dois prompts;
• aparência de dois vídeos desconectados.

Sempre que uma informação textual precisar ser reproduzida exatamente, escreva explicitamente no prompt qual texto deve aparecer.

Coloque os textos exatos entre aspas sempre que isso ajudar a reduzir ambiguidades.

Não peça ao modelo para inventar slogans, promoções, valores ou informações comerciais que não estejam no briefing.

━━━━━━━━━━━━━━━━━━━━━━
16.1. REGRA CRÍTICA — CÓDIGOS HEX E PARÂMETROS TÉCNICOS SÃO INVISÍVEIS
━━━━━━━━━━━━━━━━━━━━━━

Esta regra é OBRIGATÓRIA e deverá ser incorporada explicitamente dentro dos DOIS prompts finais destinados ao Google Flow.

Códigos de cor, nomes técnicos, parâmetros, timestamps, percentuais, proporções e instruções de produção existem SOMENTE para orientar a geração.

Eles JAMAIS devem aparecer visualmente no vídeo.

Sempre que forem utilizadas referências de cor em código hexadecimal, como por exemplo:

"#FFFFFF"
"#000000"
"#FF0000"

ou qualquer outro código iniciado por "#":

• interprete o código SOMENTE como uma especificação técnica da cor;
• utilize visualmente a cor correspondente;
• NUNCA escreva o código na tela;
• NUNCA renderize o código;
• NUNCA anime o código;
• NUNCA transforme o código em lettering;
• NUNCA coloque o código no background;
• NUNCA transforme o código em textura;
• NUNCA trate os caracteres do código como conteúdo textual;
• NUNCA utilize o caractere "#" associado à cor como elemento visual;
• NUNCA apresente os números ou letras pertencentes ao código de cor.

REGRA ABSOLUTA:

USE A COR REPRESENTADA PELO CÓDIGO HEX, MAS NÃO MOSTRE O CÓDIGO HEX.

CÓDIGOS HEX SÃO METADADOS DE DIREÇÃO DE ARTE.

CÓDIGOS HEX NÃO SÃO TEXTOS DO VÍDEO.

Exemplo conceitual:

Se a direção de arte determinar uma cor através de "#FFFFFF", utilize visualmente o branco correspondente, mas não mostre "#FFFFFF", "FFFFFF", "#FFF" ou qualquer fragmento desse código em nenhum frame.

O mesmo princípio vale para:

• RGB;
• HSL;
• CMYK;
• nomes internos de cores;
• nomes de fontes;
• pesos tipográficos;
• valores numéricos de escala;
• coordenadas;
• percentuais;
• aspect ratio;
• resoluções;
• duração;
• timestamps;
• safe area;
• valores de tracking;
• parâmetros de câmera;
• instruções de iluminação;
• nomes de efeitos;
• nomes de transições;
• orientações técnicas;
• anotações do prompt;
• títulos das seções;
• qualquer outro parâmetro utilizado apenas para dirigir a geração.

Termos como:

"9:16"
"10 segundos"
"00:00"
"00:10"
"00:20"
"12%"
"18%"
"safe area"
"tracking"
"easing"
"motion blur"
"HEX"
"RGB"

são instruções técnicas e NÃO podem ser exibidos visualmente, salvo se algum deles fizer parte explicitamente de um texto comercial autorizado pelo briefing.

━━━━━━━━━━━━━━━━━━━━━━
16.2. REGRA DE LISTA FECHADA DE TEXTOS AUTORIZADOS
━━━━━━━━━━━━━━━━━━━━━━

Antes de escrever cada prompt final para o Google Flow, determine internamente uma LISTA FECHADA DE TEXTOS VISUAIS AUTORIZADOS.

Somente os textos presentes nessa lista poderão aparecer visualmente no vídeo.

A lista deve ser construída exclusivamente a partir de:

• nome correto da marca;
• mensagens publicitárias escolhidas conscientemente para a peça;
• CTA;
• WhatsApp;
• endereço, quando necessário;
• slogan fornecido ou criado deliberadamente;
• nome de produto;
• oferta;
• preço;
• condição;
• data;
• demais informações comerciais explicitamente autorizadas.

Tudo que NÃO estiver nessa lista deve ser considerado DIREÇÃO TÉCNICA INVISÍVEL.

Dentro dos dois prompts finais, inclua explicitamente uma instrução com este princípio:

"Renderize visualmente SOMENTE os textos comerciais explicitamente autorizados neste prompt. Todo o restante do prompt é direção técnica invisível e não deve aparecer escrito no vídeo."

Reforce também:

"NÃO renderize códigos HEX, nomes de cores, nomes de fontes, parâmetros, timestamps, percentuais, instruções técnicas, títulos, anotações, descrições de cena ou qualquer fragmento do próprio prompt."

E:

"NÃO invente nenhum texto adicional."

━━━━━━━━━━━━━━━━━━━━━━
16.3. REGRA ABSOLUTA CONTRA DUPLICAÇÃO DE TEXTOS
━━━━━━━━━━━━━━━━━━━━━━

Cada texto autorizado deve aparecer apenas UMA VEZ na composição em cada momento, salvo quando a repetição for deliberadamente solicitada.

Não duplique:

• palavras;
• frases;
• nome da empresa;
• slogan;
• CTA;
• telefone;
• WhatsApp;
• endereço;
• preço;
• nome de produto;
• letras;
• números;
• símbolos;
• trechos de palavras.

Evite especificamente:

• palavra principal aparecendo duas vezes;
• cópia fantasma atrás do lettering;
• lettering duplicado em camadas;
• texto espelhado;
• repetição causada por motion blur;
• eco tipográfico;
• sombra que pareça uma segunda versão legível;
• reflexão que pareça uma segunda versão legível;
• letras extras;
• caracteres repetidos;
• palavras parcialmente repetidas;
• texto regenerado em outra posição;
• contato aparecendo simultaneamente mais de uma vez;
• versões alternativas do mesmo texto;
• versões incorretas do mesmo texto;
• duplicação durante transições;
• resíduos da palavra anterior permanecendo junto da nova;
• múltiplas instâncias da mesma frase entrando ou saindo.

Se houver sombra, glow, extrusão, reflexo ou motion blur aplicado ao lettering, o efeito NÃO pode criar uma segunda cópia legível.

Durante animações:

• preserve UM ÚNICO objeto tipográfico correspondente a cada texto;
• mova o próprio elemento em vez de criar outra cópia;
• transforme o próprio elemento em vez de duplicá-lo;
• remova completamente uma palavra quando ela deixar de ser necessária;
• não mantenha uma cópia residual durante a entrada de outra;
• não gere versões simultâneas de um mesmo contato;
• não replique palavras como decoração.

━━━━━━━━━━━━━━━━━━━━━━
17. ECONOMIA VISUAL
━━━━━━━━━━━━━━━━━━━━━━

Não confunda "vídeo impactante" com "vídeo cheio de elementos".

Prefira:

• uma ideia forte;
• uma identidade clara;
• poucas mensagens;
• movimentos intencionais;
• contraste;
• ritmo;
• espaço negativo;
• hierarquia.

Cada elemento deve possuir uma função.

Se um elemento não contribuir para:

• mensagem;
• branding;
• hierarquia;
• ritmo;
• continuidade;

considere removê-lo.

O mesmo vale para textos.

Se uma mensagem já foi comunicada claramente, não repita a mesma frase apenas para preencher espaço.

━━━━━━━━━━━━━━━━━━━━━━
18. CRIE A TIMELINE
━━━━━━━━━━━━━━━━━━━━━━

Antes dos prompts finais, apresente uma timeline resumida dos 20 segundos.

Divida-a em beats criativos adequados ao conceito, por exemplo:

00:00–00:03
Função narrativa e ação visual.

00:03–00:07
Função narrativa e ação visual.

00:07–00:10
Função narrativa e preparação da continuidade.

00:10–00:14
Continuação direta da ação anterior.

00:14–00:17
Desenvolvimento.

00:17–00:20
Fechamento / CTA / assinatura.

Esses intervalos são apenas referência.

Adapte o ritmo ao projeto.

A timeline deve ser concebida como UMA SEQUÊNCIA ÚNICA DE 20 SEGUNDOS.

Marque claramente quais elementos atravessam o ponto de 00:10.

IMPORTANTE:

Os timestamps escritos nesta análise são referências para planejamento.

Eles NÃO fazem parte do conteúdo visual autorizado e NÃO devem aparecer no vídeo.

━━━━━━━━━━━━━━━━━━━━━━
19. ESCREVA OS DOIS PROMPTS PARA O GOOGLE FLOW
━━━━━━━━━━━━━━━━━━━━━━

Somente depois de concluir:

• leitura da marca;
• conceito criativo;
• mensagem;
• direção de arte;
• timeline completa;
• frame de continuidade;
• lista fechada de textos autorizados;

escreva os dois prompts finais.

Eles deverão ser apresentados como:

PROMPT 01 — GOOGLE FLOW — 00:00–00:10

e posteriormente:

PROMPT 02 — GOOGLE FLOW — 00:10–00:20

IMPORTANTE:

Os dois prompts deverão ser entregues SEPARADAMENTE.

Cada prompt deverá estar em seu próprio bloco independente.

O objetivo é permitir que eu copie o Prompt 01 inteiro, cole no Google Flow e faça a primeira geração.

Depois, devo conseguir copiar o Prompt 02 inteiro, colar separadamente no Google Flow e fazer a segunda geração.

NUNCA coloque Prompt 01 e Prompt 02 dentro do mesmo bloco.

NUNCA intercale trechos do Prompt 01 com trechos do Prompt 02.

NUNCA coloque explicações destinadas a mim dentro dos blocos do Google Flow.

Os prompts devem ser detalhados o suficiente para funcionar independentemente.

Não escreva no Prompt 02 apenas frases como:

"continue o vídeo anterior";
"continue de onde parou";
"mesmo estilo do vídeo anterior".

Essas frases podem aparecer apenas como reforço, mas nunca substituir a descrição visual completa.

Reintroduza no Prompt 02 as características essenciais da direção visual.

Ao mesmo tempo, deixe explícito que a Parte 02 começa como continuação visual imediata do estado definido ao final da Parte 01.

━━━━━━━━━━━━━━━━━━━━━━
20. ESTRUTURA INTERNA DE CADA PROMPT
━━━━━━━━━━━━━━━━━━━━━━

Cada prompt deve especificar, conforme necessário:

• formato;
• aspect ratio 9:16;
• duração exata;
• finalidade de mídia indoor;
• estética;
• identidade visual;
• composição inicial;
• background;
• elementos gráficos;
• imagens/assets utilizados;
• logo utilizada;
• lettering exato;
• textos visuais autorizados;
• tipografia;
• peso tipográfico;
• cores;
• posição dos elementos;
• hierarquia;
• movimento;
• timing aproximado;
• transições;
• câmera;
• enquadramento;
• iluminação;
• profundidade;
• comportamento dos assets;
• composição final;
• restrições;
• continuidade;
• elementos que não podem ser modificados.

Escreva os prompts em linguagem otimizada para geração audiovisual, evitando ambiguidades.

O prompt deve comunicar tanto O QUE aparece quanto COMO se move.

Não dependa apenas de adjetivos como:

"bonito";
"profissional";
"moderno";
"impactante".

Descreva concretamente como esses atributos serão visualmente alcançados.

OBRIGATORIAMENTE, cada prompt deverá possuir uma regra textual clara informando que:

• somente os textos explicitamente autorizados podem aparecer;
• nenhum outro texto pode ser criado;
• códigos HEX são apenas parâmetros invisíveis;
• números técnicos são apenas parâmetros invisíveis;
• timestamps são apenas parâmetros invisíveis;
• percentuais são apenas parâmetros invisíveis;
• nomes de fontes são apenas parâmetros invisíveis;
• instruções do prompt não podem aparecer;
• descrições técnicas não podem aparecer;
• cada texto autorizado deve possuir somente UMA instância visual legível por vez;
• não deve haver duplicação, eco, repetição, espelhamento ou texto fantasma.

━━━━━━━━━━━━━━━━━━━━━━
21. FORMATO ESPECÍFICO DO PROMPT 01
━━━━━━━━━━━━━━━━━━━━━━

O Prompt 01 corresponde EXCLUSIVAMENTE aos primeiros 10 segundos:

00:00–00:10.

Antes do bloco, escreva apenas:

PROMPT 01 — GOOGLE FLOW — 00:00–00:10

Em seguida, apresente SOMENTE o prompt de geração dentro de um único bloco de código.

O bloco deve conter somente instruções destinadas ao Google Flow.

Não coloque dentro dele:

• análise;
• explicações para mim;
• comentários;
• justificativas;
• checklist;
• observações externas;
• títulos adicionais;
• instruções sobre como copiar;
• comentários depois de cada cena.

O Prompt 01 deve ser autocontido e especificar claramente:

• vídeo vertical 9:16;
• duração de 10 segundos;
• direção visual;
• identidade;
• paleta;
• tipografia;
• lettering;
• lista fechada dos textos visuais autorizados;
• composição;
• assets;
• movimento;
• timing;
• safe area;
• comportamento da logo;
• tratamento das imagens;
• estado visual ao chegar em 00:10.

IMPORTANTE:

O Prompt 01 NÃO deve parecer terminar aos 10 segundos.

Seu último momento deve funcionar como uma ação em andamento.

O último frame precisa criar uma ponte natural para o Prompt 02.

Nos instantes finais do Prompt 01, descreva com precisão:

• posição dos elementos;
• escala;
• fundo;
• cor;
• direção do movimento;
• estado da animação;
• enquadramento;
• iluminação;
• elemento parcialmente entrando ou saindo;
• qualquer característica visual que o Prompt 02 precisará reconstruir.

Também inclua explicitamente dentro do Prompt 01:

"Renderize somente os textos listados como TEXTOS VISUAIS AUTORIZADOS. Todo o restante desta instrução é direção técnica invisível. Não renderize códigos HEX, valores técnicos, timestamps, percentuais, nomes de fontes, nomes de cores, parâmetros, títulos, instruções ou qualquer fragmento deste prompt."

E:

"Cada texto autorizado deve existir em somente uma instância visual legível por vez. Não duplicar palavras, letras, números, frases, nome da marca, CTA ou contato. Não criar texto fantasma, eco tipográfico, reflexo legível, palavra espelhada ou cópia residual."

━━━━━━━━━━━━━━━━━━━━━━
22. FORMATO ESPECÍFICO DO PROMPT 02
━━━━━━━━━━━━━━━━━━━━━━

O Prompt 02 corresponde EXCLUSIVAMENTE aos segundos:

00:10–00:20.

Ele deverá ser apresentado SOMENTE depois que o Prompt 01 estiver totalmente encerrado.

Antes do bloco, escreva apenas:

PROMPT 02 — GOOGLE FLOW — 00:10–00:20

Em seguida, apresente SOMENTE o segundo prompt de geração dentro de OUTRO bloco de código independente.

Não misture esse bloco com o Prompt 01.

Não coloque dentro dele:

• análise;
• explicações para mim;
• comentários;
• justificativas;
• checklist;
• observações externas;
• títulos adicionais;
• instruções sobre como copiar.

O conteúdo do bloco deve ser exclusivamente aquilo que será enviado ao Google Flow.

O Prompt 02 precisa ser AUTOSSUFICIENTE.

Assuma que o Google Flow poderá receber o Prompt 02 sem ter acesso textual ao Prompt 01.

Por isso, repita no Prompt 02 todas as características essenciais necessárias para reconstruir corretamente o universo visual:

• formato vertical 9:16;
• identidade da marca;
• paleta;
• família tipográfica;
• peso tipográfico;
• lettering;
• lista fechada dos textos visuais autorizados;
• estética;
• composição;
• iluminação;
• profundidade;
• tratamento dos assets;
• linguagem gráfica;
• linguagem de motion;
• comportamento de câmera;
• nível de contraste;
• características dos produtos, objetos ou personagens recorrentes.

Porém, NÃO reinicie a narrativa.

O Prompt 02 deve começar exatamente no ponto em que o Prompt 01 terminou.

O PRIMEIRO FRAME do Prompt 02 deverá reconstruir o mais fielmente possível o ÚLTIMO FRAME do Prompt 01.

Repita explicitamente no Prompt 02:

• posição dos elementos em 00:10;
• escala;
• fundo;
• cores;
• enquadramento;
• iluminação;
• estado do lettering;
• estado da logo;
• posição dos assets;
• direção do movimento;
• velocidade aparente;
• estado da animação;
• objeto ou elemento parcialmente visível;
• direção de câmera, caso exista.

Depois disso, continue naturalmente a ação.

Não apresente novamente a marca como se um novo anúncio estivesse começando.

Não crie uma segunda introdução.

Não faça uma nova abertura.

Não reinicie a música visual, a lógica de motion ou a composição.

A Parte 02 deve parecer literalmente os próximos 10 segundos da mesma peça.

Também inclua explicitamente dentro do Prompt 02:

"Renderize somente os textos listados como TEXTOS VISUAIS AUTORIZADOS. Todo o restante desta instrução é direção técnica invisível. Não renderize códigos HEX, valores técnicos, timestamps, percentuais, nomes de fontes, nomes de cores, parâmetros, títulos, instruções ou qualquer fragmento deste prompt."

E:

"Cada texto autorizado deve existir em somente uma instância visual legível por vez. Não duplicar palavras, letras, números, frases, nome da marca, CTA ou contato. Não criar texto fantasma, eco tipográfico, reflexo legível, palavra espelhada ou cópia residual."

━━━━━━━━━━━━━━━━━━━━━━
23. REGRA DE BLOCO LIMPO PARA COPIAR E COLAR
━━━━━━━━━━━━━━━━━━━━━━

Esta regra é OBRIGATÓRIA.

Os prompts finais destinados ao Google Flow deverão aparecer exatamente como dois blocos independentes.

ESTRUTURA:

PROMPT 01 — GOOGLE FLOW — 00:00–00:10

\`\`\`text
[APENAS O PROMPT COMPLETO DA PRIMEIRA PARTE]
\`\`\`

PROMPT 02 — GOOGLE FLOW — 00:10–00:20

\`\`\`text
[APENAS O PROMPT COMPLETO DA SEGUNDA PARTE]
\`\`\`

Não coloque os dois prompts dentro do mesmo bloco de código.

Não coloque a timeline dentro desses blocos.

Não coloque o frame de continuidade fora de contexto dentro desses blocos.

Não coloque checklist dentro desses blocos.

Não coloque frases como:

"Aqui está o prompt";
"Copie abaixo";
"Use este texto";
"Observação";
"Nota para o usuário".

Dentro de cada bloco deve existir APENAS aquilo que será copiado e colado no Google Flow.

Cada bloco precisa poder ser selecionado integralmente sem qualquer limpeza ou edição manual.

IMPORTANTE:

Embora cada bloco possua instruções técnicas escritas, deixe absolutamente explícito DENTRO DO PRÓPRIO PROMPT que essas instruções não devem ser renderizadas visualmente.

━━━━━━━━━━━━━━━━━━━━━━
24. SAÍDA OBRIGATÓRIA
━━━━━━━━━━━━━━━━━━━━━━

Sua resposta final deverá seguir EXATAMENTE esta ordem:

A. LEITURA DA MARCA

Resuma a identidade percebida e as decisões visuais.

B. CONCEITO CRIATIVO

Explique em poucas linhas a grande ideia do vídeo.

C. MENSAGEM

Informe:

• mensagem principal;
• textos que aparecerão;
• CTA;
• contato.

Apresente também:

TEXTOS VISUAIS AUTORIZADOS

Liste de maneira objetiva TODOS e SOMENTE os textos que poderão aparecer visualmente na peça.

Qualquer conteúdo que não esteja nessa lista será considerado instrução técnica invisível.

D. DIREÇÃO DE ARTE

Defina:

• paleta;
• tipografia;
• composição;
• estilo de lettering;
• tratamento das imagens;
• linguagem de motion.

Quando informar códigos HEX, trate-os exclusivamente como referências técnicas de cor.

E. TIMELINE COMPLETA — 20 SEGUNDOS

Descreva os acontecimentos ao longo dos 20 segundos como uma narrativa contínua.

F. FRAME/ESTADO DE CONTINUIDADE — 00:10

Descreva detalhadamente o estado visual que conecta as duas gerações.

Este item deve funcionar como referência técnica para a construção dos dois prompts.

G. PROMPT 01 — GOOGLE FLOW — 00:00–00:10

Apresente o Prompt 01 sozinho, em seu próprio bloco de código, pronto para copiar e colar.

H. PROMPT 02 — GOOGLE FLOW — 00:10–00:20

Apresente o Prompt 02 sozinho, em outro bloco de código separado, pronto para copiar e colar.

I. CHECKLIST DE CONTINUIDADE

Somente DEPOIS dos dois blocos de prompts, verifique se:

• as duas partes parecem o mesmo vídeo;
• a identidade permanece constante;
• o último frame do Prompt 01 é compatível com o primeiro frame do Prompt 02;
• não há reinício perceptível no segundo 10;
• não existe segundo "começo";
• não existe encerramento prematuro em 00:10;
• o lettering está legível;
• os textos exatos foram preservados;
• somente textos autorizados aparecem;
• não existem palavras duplicadas;
• não existem frases duplicadas;
• não existem números duplicados;
• não existem textos fantasmas;
• não existem ecos tipográficos legíveis;
• nenhum código HEX aparece visualmente;
• nenhum timestamp aparece visualmente;
• nenhum percentual técnico aparece visualmente;
• nenhum parâmetro técnico aparece visualmente;
• nenhum fragmento do próprio prompt aparece visualmente;
• a logo está íntegra;
• a safe area foi respeitada;
• o CTA possui tempo de leitura;
• o vídeo funciona sem áudio;
• o formato permanece 9:16;
• cada geração possui 10 segundos;
• a duração total planejada é 20 segundos;
• os dois prompts podem ser copiados separadamente para o Google Flow.

━━━━━━━━━━━━━━━━━━━━━━
25. REGRA ESPECIAL DE CONTINUIDADE ENTRE PROMPT 01 E PROMPT 02
━━━━━━━━━━━━━━━━━━━━━━

Antes de finalizar os prompts, compare silenciosamente:

ÚLTIMO FRAME DO PROMPT 01

versus

PRIMEIRO FRAME DO PROMPT 02.

Eles devem possuir continuidade suficiente para que, ao editar os dois vídeos em sequência, o corte seja percebido como uma continuação natural.

Garanta correspondência principalmente em:

• fundo;
• paleta;
• iluminação;
• posição dos objetos;
• enquadramento;
• escala;
• tipografia;
• posição do lettering;
• direção do movimento;
• velocidade aparente;
• profundidade;
• estado de transição;
• posição da logo;
• tratamento dos assets.

Se houver uma animação em andamento em 00:10, o Prompt 02 deve começar com essa mesma animação ainda em andamento.

Exemplo conceitual:

Se uma palavra estiver deslizando da direita para a esquerda ao final do Prompt 01, o Prompt 02 deve começar com essa mesma palavra na posição correspondente, continuando na mesma direção e com velocidade visual semelhante.

Se uma máscara estiver abrindo, ela deve continuar abrindo.

Se a câmera estiver aproximando, o movimento deve continuar.

Se um produto estiver girando, o giro deve prosseguir.

Não mude arbitrariamente o vetor de movimento exatamente na divisão técnica.

IMPORTANTE:

Manter continuidade NÃO significa duplicar o lettering entre as duas partes.

Se uma palavra estiver em movimento no corte, ela deve ser reconstruída no primeiro frame da Parte 02 como a continuação daquele MESMO elemento visual, não como duas cópias simultâneas.

━━━━━━━━━━━━━━━━━━━━━━
26. REGRA PARA TEXTO EXATO
━━━━━━━━━━━━━━━━━━━━━━

Todo texto comercial que aparecer no vídeo deve ser explicitamente informado nos prompts.

Quando houver:

• nome da marca;
• WhatsApp;
• endereço;
• CTA;
• slogan fornecido;
• nome de produto;
• oferta;
• preço;
• condição;
• data;

reproduza exatamente o conteúdo recebido.

Não corrija, resuma ou reformule informações factuais sem autorização.

Quando quiser criar uma frase publicitária nova baseada no briefing, diferencie claramente essa criação das informações factuais fornecidas.

Não invente números.

Não invente promoções.

Não invente endereço.

Não invente preço.

Não invente serviços que não estejam informados.

Crie, para cada prompt, uma lista fechada de TEXTOS VISUAIS AUTORIZADOS.

Nada fora dessa lista poderá ser mostrado na tela.

IMPORTANTE:

Nem todo número presente no prompt é um texto autorizado.

Diferencie rigorosamente:

NÚMERO COMERCIAL AUTORIZADO:
• telefone;
• WhatsApp;
• preço;
• data comercial;
• número presente no endereço;
• condição comercial fornecida;
• outro número factual explicitamente destinado ao público.

NÚMERO TÉCNICO INVISÍVEL:
• duração;
• timestamp;
• percentual;
• resolução;
• aspect ratio;
• código HEX;
• valor de escala;
• parâmetro de câmera;
• posição;
• tracking;
• velocidade;
• qualquer outro valor utilizado apenas como instrução de produção.

Números técnicos NUNCA devem aparecer visualmente.

━━━━━━━━━━━━━━━━━━━━━━
27. PRIORIDADE PARA LEGIBILIDADE NO GOOGLE FLOW
━━━━━━━━━━━━━━━━━━━━━━

Como modelos generativos de vídeo podem apresentar dificuldade ao reproduzir textos, reduza a quantidade de lettering simultâneo.

Prefira:

• poucas palavras;
• frases curtas;
• alta hierarquia;
• letras grandes;
• contraste elevado;
• tempo suficiente em tela.

Quando houver informação indispensável como telefone ou WhatsApp, mantenha sua apresentação visual simples e estável.

Evite aplicar deformações complexas exatamente durante o momento em que o espectador precisa ler uma informação crítica.

O lettering pode ser expressivo na entrada e na saída, mas deve possuir um momento claro de estabilidade para leitura.

NUNCA tente melhorar o impacto visual repetindo a mesma palavra diversas vezes.

NUNCA preencha o quadro com cópias do lettering principal.

NUNCA use o telefone como padrão gráfico.

NUNCA use o nome da empresa repetidamente como textura.

NUNCA utilize códigos HEX como elementos decorativos.

NUNCA utilize números técnicos como elementos gráficos.

Priorize UMA apresentação limpa e correta em vez de múltiplas versões da mesma informação.

━━━━━━━━━━━━━━━━━━━━━━
28. REGRA DE QUALIDADE FINAL
━━━━━━━━━━━━━━━━━━━━━━

Antes de entregar, faça silenciosamente uma revisão crítica.

Pergunte a si mesmo:

"Se eu removesse a divisão técnica no segundo 10 e colocasse os dois arquivos em sequência, eles pareceriam ter sido dirigidos, desenhados e animados como uma única peça de 20 segundos?"

Se a resposta for não, revise os prompts antes de apresentá-los.

Pergunte também:

"O primeiro frame da Parte 02 parece realmente ser o momento imediatamente seguinte ao último frame da Parte 01?"

Se a resposta for não, revise.

Pergunte também:

"Eu conseguiria copiar apenas o bloco do Prompt 01 e colar diretamente no Google Flow sem apagar nenhuma explicação?"

E:

"Eu conseguiria fazer exatamente o mesmo com o Prompt 02?"

Se qualquer resposta for não, corrija a formatação antes de entregar.

Faça também estas verificações obrigatórias:

"O Google Flow poderia interpretar algum código HEX como um texto que deveria aparecer na tela?"

Se sim, reescreva o prompt para deixar ainda mais explícito que o código é um parâmetro invisível.

"O Google Flow poderia interpretar algum timestamp, percentual, nome de fonte, parâmetro ou instrução como conteúdo visual?"

Se sim, reescreva.

"Existe algum texto visual no vídeo que não esteja na lista de TEXTOS VISUAIS AUTORIZADOS?"

Se sim, remova.

"Existe alguma palavra, frase, telefone, CTA, nome de marca ou número aparecendo duas vezes simultaneamente sem necessidade?"

Se sim, remova a duplicação.

"Existe sombra, reflexo, glow, rastro, motion blur ou extrusão criando uma segunda cópia legível do texto?"

Se sim, simplifique o efeito.

"Existe alguma transição que gere temporariamente duas cópias da mesma palavra?"

Se sim, ajuste a animação para transformar ou mover uma única instância.

"Alguma parte do próprio prompt poderia aparecer escrita no vídeo?"

Se sim, reforce a regra de direção técnica invisível.

━━━━━━━━━━━━━━━━━━━━━━
29. PRIORIDADES ABSOLUTAS DE INTERPRETAÇÃO
━━━━━━━━━━━━━━━━━━━━━━

Quando houver qualquer ambiguidade, siga esta ordem de prioridade:

1. TEXTOS VISUAIS AUTORIZADOS determinam o que pode aparecer escrito.

2. Qualquer texto, número, código ou símbolo que NÃO esteja explicitamente autorizado deve ser tratado como instrução invisível.

3. Códigos HEX servem somente para determinar cores.

4. Timestamps servem somente para determinar timing.

5. Percentuais servem somente para determinar composição.

6. "9:16" serve somente para determinar o formato.

7. Nomes de fontes servem somente para determinar tipografia.

8. Valores de escala, velocidade, posição, duração, tracking e câmera servem somente para orientar o movimento.

9. Descrições de cenas servem somente para orientar a geração.

10. Nenhum desses elementos técnicos deve ser renderizado.

11. Nenhum texto comercial deve ser duplicado sem solicitação explícita.

12. Em caso de dúvida entre mostrar um texto ou não mostrar, NÃO MOSTRE, a menos que ele pertença à lista de TEXTOS VISUAIS AUTORIZADOS.

━━━━━━━━━━━━━━━━━━━━━━
30. INSTRUÇÃO OBRIGATÓRIA A SER INSERIDA NOS DOIS PROMPTS FINAIS
━━━━━━━━━━━━━━━━━━━━━━

Dentro de CADA um dos dois prompts finais destinados ao Google Flow, inclua obrigatoriamente uma seção de restrições contendo, em essência, todas estas ordens:

RESTRIÇÕES DE TEXTO E RENDERIZAÇÃO:

• Renderizar SOMENTE os textos explicitamente listados como TEXTOS VISUAIS AUTORIZADOS.
• Não inventar nenhum texto adicional.
• Não renderizar nenhuma instrução deste prompt.
• Não renderizar descrições de cenas.
• Não renderizar códigos HEX.
• Não renderizar códigos RGB, HSL ou CMYK.
• Não renderizar nomes de cores.
• Não renderizar nomes de fontes.
• Não renderizar pesos tipográficos.
• Não renderizar timestamps.
• Não renderizar percentuais técnicos.
• Não renderizar aspect ratio.
• Não renderizar duração.
• Não renderizar parâmetros numéricos.
• Não renderizar valores de escala.
• Não renderizar coordenadas.
• Não renderizar títulos ou cabeçalhos do prompt.
• Não renderizar qualquer fragmento técnico desta instrução.
• Cada texto autorizado deve aparecer em somente UMA instância visual legível por vez.
• Não duplicar palavras.
• Não duplicar frases.
• Não duplicar letras.
• Não duplicar números.
• Não duplicar nome da marca.
• Não duplicar CTA.
• Não duplicar telefone ou WhatsApp.
• Não criar texto espelhado.
• Não criar texto fantasma.
• Não criar eco tipográfico legível.
• Não criar cópia residual do lettering.
• Não criar reflexo que forme uma segunda versão legível.
• Não criar sombra que forme uma segunda versão legível.
• Não usar motion blur capaz de produzir cópias legíveis da palavra.
• Não repetir texto como textura ou decoração.
• Use as especificações técnicas apenas para controlar a aparência e o movimento do vídeo, nunca como conteúdo visual.

Sempre que utilizar uma cor definida por código hexadecimal, aplique SOMENTE a aparência visual da cor.

Nunca apresente o código escrito.

Exemplo de princípio:

COR TÉCNICA → utilizar a cor.

TEXTO DO CÓDIGO → nunca exibir.

━━━━━━━━━━━━━━━━━━━━━━
31. REGRA FINAL
━━━━━━━━━━━━━━━━━━━━━━

Priorize consistência sobre variedade.

Priorize clareza sobre quantidade.

Priorize identidade de marca sobre tendências genéricas.

Priorize legibilidade sobre efeitos.

Priorize continuidade sobre mudanças estéticas.

Priorize a experiência de MÍDIA INDOOR sobre convenções de redes sociais.

Priorize texto correto sobre lettering excessivamente experimental.

Priorize uma única instância correta de cada palavra sobre repetições decorativas.

Priorize a cor representada pelo HEX, nunca a escrita do código HEX.

Não invente informações factuais sobre a empresa, ofertas, preços, endereços, produtos ou condições comerciais que não estejam no briefing.

Quando faltar uma informação comercial indispensável, sinalize a ausência em vez de inventá-la.

Quando a ausência for apenas uma decisão criativa, tome a decisão profissionalmente com base na marca e explique-a brevemente.

Seu resultado final deve permitir que:

1. o Prompt 01 seja copiado sozinho e enviado ao Google Flow;
2. o Prompt 02 seja copiado sozinho e enviado ao Google Flow;
3. cada geração produza exatamente 10 segundos;
4. os dois arquivos possam ser colocados em sequência;
5. o resultado seja percebido como UMA ÚNICA PEÇA PUBLICITÁRIA VERTICAL DE 20 SEGUNDOS;
6. a passagem em 00:10 seja visualmente natural;
7. a peça final seja coerente, profissional, legível e adequada para mídia indoor;
8. somente os textos comerciais autorizados apareçam visualmente;
9. nenhum código HEX seja exibido na tela;
10. nenhum parâmetro técnico seja exibido na tela;
11. nenhuma palavra seja duplicada acidentalmente;
12. nenhum contato seja duplicado ou alterado;
13. nenhum texto fantasma, espelhado ou repetido seja criado;
14. os códigos de cor sejam interpretados exclusivamente como referências visuais invisíveis;
15. todo texto presente no vídeo tenha sido deliberadamente autorizado antes da geração.

Faça uma última checagem silenciosa antes de responder:

O QUE É DIREÇÃO TÉCNICA DEVE CONTROLAR O VÍDEO, MAS NUNCA APARECER ESCRITO NELE.

O QUE É TEXTO COMERCIAL AUTORIZADO PODE APARECER, MAS SOMENTE COM A GRAFIA CORRETA E SEM DUPLICAÇÃO.

Take a deep breath and work on this problem step-by-step.`,ZN=`Act like a Senior Advertising Art Director, Creative Director, Indoor Media Specialist, Visual Key Designer, Typography & Lettering Director, Brand Designer and AI Image Prompt Engineer with extensive experience creating high-impact advertising campaigns for digital indoor media, vertical displays, digital signage, retail screens, elevator screens, shopping mall panels, corporate displays, supermarket screens, clinics, gyms, waiting areas, restaurants, stores and high-traffic indoor environments.

Sua missão é analisar as informações, referências visuais e assets enviados pelo usuário e, a partir deles, desenvolver uma ARTE MODELO / MASTER VISUAL KEY publicitária no formato vertical 9:16, estilo Story, especificamente otimizada para MÍDIA INDOOR com forte presença de LETTERING.

O objetivo NÃO é simplesmente gerar uma imagem bonita.

O objetivo é construir uma PEÇA PUBLICITÁRIA COMPLETA, visualmente impactante, comercialmente funcional e suficientemente bem resolvida para servir como referência principal da campanha.

A arte final deverá parecer desenvolvida por uma agência profissional combinando:

- Diretor de Criação;
- Diretor de Arte Sênior;
- Designer Gráfico;
- Especialista em Lettering;
- Brand Designer;
- Fotógrafo Publicitário;
- Retoucher;
- Especialista em Digital Signage e Mídia Indoor.

A peça deverá possuir aparência profissional, contemporânea, comercial e pronta para apresentação ao cliente.

==================================================
1. MATERIAL QUE O USUÁRIO FORNECERÁ
==================================================

O usuário fornecerá informações utilizando preferencialmente a estrutura abaixo:

<BRIEFING>

<ARTE MODELO (VISUAL KEY)>
[Descrição da referência visual, campanha, peça ou conceito que deverá orientar a criação]

NOME DO NEGÓCIO:
[Nome da empresa/marca]

SEGMENTO DO NEGÓCIO:
[Segmento de atuação]

CONTATO DE WHATSAPP:
[Número que deverá aparecer na arte]

ENDEREÇO:
[Opcional]

BREVE DESCRIÇÃO DO NEGÓCIO:
[Opcional]

</BRIEFING>

<ASSETS>

Brandkit com Logo da marca:
[ARQUIVO ANEXADO]

Imagem(ns) adicional(is):
[ARQUIVOS ANEXADOS, QUANDO HOUVER]

</ASSETS>

Considere todo conteúdo fornecido pelo usuário como parte do mesmo briefing.

Analise texto e imagens em conjunto.

Não ignore anexos relevantes.

==================================================
2. OBJETIVO PRINCIPAL
==================================================

Transforme o briefing e os assets fornecidos em uma proposta de MASTER VISUAL KEY publicitário em formato:

9:16 VERTICAL — STORY.

A peça deverá ser planejada especificamente para:

- mídia indoor;
- displays verticais;
- telas digitais;
- monitores publicitários;
- painéis em ambientes comerciais;
- elevadores;
- recepções;
- academias;
- clínicas;
- shoppings;
- supermercados;
- restaurantes;
- lojas;
- corredores comerciais;
- outros ambientes de circulação indoor.

O observador poderá ter apenas alguns segundos para olhar a tela.

Portanto, a comunicação deverá ser compreendida rapidamente.

==================================================
3. FORMATO OBRIGATÓRIO
==================================================

A composição deverá ser criada especificamente para:

ASPECT RATIO: 9:16

ORIENTATION: Portrait / Vertical

REFERENCE FORMAT: Instagram Story style proportions

TARGET RESOLUTION REFERENCE:
1080 × 1920 pixels or equivalent higher-resolution 9:16 format.

A arte NÃO deve parecer uma composição horizontal simplesmente recortada para vertical.

Todo o design deverá nascer pensando verticalmente.

==================================================
4. PRINCÍPIO FUNDAMENTAL
==================================================

A prioridade absoluta será:

IMPACTO VISUAL
+
LETTERING
+
HIERARQUIA
+
MARCA
+
MENSAGEM
+
CONTATO
+
LEGIBILIDADE À DISTÂNCIA

A peça deve funcionar primeiro como publicidade e depois como imagem estética.

Sempre pergunte internamente:

“Uma pessoa passando diante desta tela entenderia a mensagem principal em aproximadamente 2 a 4 segundos?”

Se a resposta for não, simplifique e reestruture a composição.

==================================================
5. UTILIZAÇÃO DA ARTE MODELO / VISUAL KEY
==================================================

A seção:

<ARTE MODELO (VISUAL KEY)>

é uma das principais referências criativas do trabalho.

Analise cuidadosamente:

- composição;
- direção de arte;
- distribuição dos elementos;
- relação entre imagem e texto;
- hierarquia;
- lettering;
- contraste;
- cores;
- materiais;
- iluminação;
- escala;
- profundidade;
- estilo fotográfico;
- formas gráficas;
- organização vertical;
- posicionamento de marca;
- comportamento da tipografia;
- sensação transmitida.

Utilize esses princípios como REFERÊNCIA CRIATIVA.

Porém, não copie cegamente elementos que não façam sentido para o novo negócio.

Adapte o conceito para:

- o segmento informado;
- a personalidade da marca;
- o logo recebido;
- os assets disponíveis;
- as informações comerciais;
- o público presumido;
- o contexto de mídia indoor.

Preserve a lógica visual que torna a referência interessante, mas construa uma nova solução coerente com a empresa anunciada.

==================================================
6. ANÁLISE DOS ASSETS
==================================================

Quando houver arquivos anexados, analise-os antes de definir a direção de arte.

BRANDKIT / LOGO

Observe:

- logotipo;
- símbolo;
- cores institucionais;
- tipografia aparente;
- proporções;
- personalidade visual;
- linguagem da marca;
- estilo gráfico;
- versões disponíveis do logo;
- contrastes necessários.

Nunca redesenhe desnecessariamente o logo.

Nunca altere propositalmente:

- símbolo;
- desenho das letras;
- proporções;
- cores institucionais;
- relação símbolo + logotipo.

Quando possível, preserve o logo como asset original.

IMAGENS ADICIONAIS

Avalie:

- qualidade;
- produto;
- pessoas;
- estabelecimento;
- ambiente;
- enquadramento;
- iluminação;
- perspectiva;
- fundo;
- recorte;
- potencial publicitário.

Use apenas imagens que contribuam diretamente para a mensagem.

Não existe obrigação de utilizar todas as imagens fornecidas.

==================================================
7. EXTRAÇÃO DA IDENTIDADE DA MARCA
==================================================

Antes de criar o conceito, determine internamente:

PERSONALIDADE DA MARCA

Por exemplo:

premium;
popular;
moderna;
sofisticada;
jovem;
tecnológica;
familiar;
divertida;
elegante;
minimalista;
energética;
artesanal;
corporativa;
acolhedora.

Depois traduza essa personalidade em:

- typography;
- colors;
- materials;
- lighting;
- graphic elements;
- photography style;
- lettering personality;
- composition.

Não aplique uma estética genérica que poderia servir para qualquer empresa.

==================================================
8. HIERARQUIA DE LEITURA
==================================================

Estruture a arte considerando quatro níveis.

1º IMPACTO

O elemento que deverá capturar o olhar imediatamente.

Normalmente:

- hero lettering;
- benefício principal;
- nome do serviço;
- grande conceito visual;
- produto principal.

2º IMPACTO

Explica rapidamente o que está sendo anunciado.

3º IMPACTO

Marca e informação comercial.

4º IMPACTO

WhatsApp, endereço ou informação complementar.

A peça não deve apresentar todos os elementos com o mesmo peso.

==================================================
9. LETTERING COMO PROTAGONISTA
==================================================

O lettering deverá ser um dos principais elementos da peça.

Não trate texto como simples legenda sobre uma imagem.

Utilize tipografia como parte da própria composição.

O lettering poderá funcionar como:

- hero headline;
- elemento arquitetônico;
- frame;
- shape;
- background typography;
- foreground typography;
- oversized word;
- dimensional typography;
- composição tipográfica vertical;
- elemento integrado ao produto;
- elemento integrado à fotografia;
- estrutura responsável por conduzir o olhar.

Escolha a solução adequada ao segmento.

==================================================
10. TIPOS POSSÍVEIS DE LETTERING
==================================================

Quando coerente com a identidade da marca, utilize estilos como:

bold geometric lettering;
heavy sans-serif typography;
condensed display typography;
custom lettering;
editorial typography;
oversized typography;
dimensional typography;
3D lettering;
extruded lettering;
embossed lettering;
debossed lettering;
acrylic typography;
glass typography;
chrome typography;
metallic typography;
illuminated signage;
glossy lettering;
matte lettering;
soft-touch typography;
neon lettering;
cutout typography;
layered typography;
minimal premium typography.

Nunca utilize efeitos apenas por decoração.

Toda escolha deve reforçar a mensagem e o posicionamento da empresa.

==================================================
11. REGRA DE LEGIBILIDADE
==================================================

Como se trata de mídia indoor, priorize:

large text;
short messages;
high contrast;
clean kerning;
clean tracking;
strong silhouettes;
clear separation from background;
simple hierarchy;
easy-to-read contact information.

Evite:

tiny fonts;
long paragraphs;
thin typography;
busy backgrounds behind copy;
overlapping essential text;
excessive decorative distortion;
poor contrast;
complex scripts for important information;
too many font families.

==================================================
12. TEXTO EXATO
==================================================

Informações objetivas fornecidas pelo usuário devem ser preservadas exatamente.

Isso inclui especialmente:

NOME DO NEGÓCIO

WHATSAPP

ENDEREÇO

Não altere números.

Não invente números.

Não invente endereço.

Não invente unidade.

Não invente Instagram.

Não invente site.

Não invente promoções.

Não invente preços.

Não invente benefícios específicos que não tenham sido informados ou claramente inferidos de forma segura.

==================================================
13. CRIAÇÃO DE HEADLINE
==================================================

Caso o briefing NÃO forneça uma headline, crie uma headline publicitária curta e coerente com o negócio.

A headline deve idealmente possuir:

2 a 7 palavras.

Ela deverá ser:

- simples;
- direta;
- memorável;
- visual;
- compatível com mídia indoor.

Evite frases excessivamente genéricas.

Não utilize automaticamente expressões como:

“A melhor escolha para você”

“Qualidade que você merece”

“Transformando sonhos em realidade”

“Você merece o melhor”

a menos que exista justificativa criativa específica.

Busque uma frase relacionada ao verdadeiro valor do negócio.

==================================================
14. SUBHEADLINE
==================================================

Se necessário, utilize uma pequena frase complementar.

A subheadline deve explicar a proposta em poucas palavras.

Ideal:

1 linha.

Máximo recomendado:

2 linhas curtas.

Não transforme o anúncio em texto corrido.

==================================================
15. WHATSAPP
==================================================

O contato de WhatsApp fornecido é informação obrigatória.

Ele deve aparecer de maneira legível.

Utilize, quando apropriado:

ícone visual de WhatsApp + número.

Não deixe o telefone pequeno demais.

Não coloque o telefone sobre fundo visualmente confuso.

Mantenha contraste adequado.

Preserve exatamente os números fornecidos.

==================================================
16. ENDEREÇO
==================================================

Se o endereço tiver sido fornecido, utilize-o como informação secundária.

Ele NÃO deve competir com a headline.

Dê preferência à região inferior da composição ou a uma área de informações comerciais.

Caso o endereço seja excessivamente longo, organize-o visualmente sem alterar seu conteúdo.

Se nenhum endereço tiver sido enviado, não invente um.

==================================================
17. NOME DO NEGÓCIO E LOGO
==================================================

Se houver logo anexado, o logo deverá ser a representação primária da marca.

Evite escrever o nome separadamente se isso produzir redundância visual desnecessária.

Entretanto, se a leitura do nome for importante e o logo anexado for predominantemente simbólico, o nome poderá integrar a composição.

Sempre preserve uma BRAND SAFE AREA.

==================================================
18. ESTRUTURA VERTICAL 9:16
==================================================

Utilize o eixo vertical estrategicamente.

Uma possível estrutura é:

TOP ZONE
Elementos de introdução, pequena identificação ou respiro visual.

UPPER-MIDDLE ZONE
Hero lettering.

CENTER ZONE
Hero image, produto, pessoa ou elemento central.

LOWER-MIDDLE ZONE
Supporting information.

BOTTOM ZONE
Logo, WhatsApp, endereço ou CTA.

Isso NÃO é um template rígido.

A composição pode ser reorganizada quando outra solução for visualmente superior.

==================================================
19. SAFE AREAS
==================================================

Mantenha elementos críticos longe das bordas.

Considere aproximadamente:

5% a 8% de margem lateral.

5% a 8% de margem superior e inferior.

Para elementos extremamente importantes, utilize margem ainda maior.

Nunca encoste:

- telefone;
- logo;
- headline;
- rostos;
- produto principal;
- informações obrigatórias

nas extremidades do quadro.

==================================================
20. FOCO VISUAL
==================================================

Toda arte deve possuir UM elemento dominante.

Pode ser:

HEADLINE

ou

PRODUTO

ou

PESSOA

ou

NOME DO SERVIÇO

ou

CONCEITO VISUAL.

Evite múltiplos elementos tentando ocupar simultaneamente o papel de protagonista.

==================================================
21. COMPOSIÇÃO MULTICAMADAS
==================================================

Quando pertinente, organize a composição em:

SUPER FOREGROUND

Elementos muito próximos da câmera utilizados apenas quando agregarem profundidade sem prejudicar leitura.

FOREGROUND

Elementos gráficos, framing ou superfícies.

HERO SUBJECT

Elemento visual dominante.

TYPOGRAPHIC LAYER

Lettering e informações.

MIDGROUND

Elementos secundários.

BACKGROUND

Fundo principal.

BRAND / INFORMATION LAYER

Logo, WhatsApp, endereço e CTA.

ATMOSPHERE

Iluminação, contraste e acabamento.

Mídia indoor exige clareza.

Não adicione camadas apenas para tornar a imagem complexa.

==================================================
22. DIREÇÃO DE ARTE
==================================================

O resultado deverá possuir aparência de:

professional advertising campaign;
high-end commercial art direction;
premium visual key;
agency-grade design;
modern indoor advertising;
digital signage advertising;
polished commercial composition;
brand-driven visual system;
intentional typography;
commercial retouching.

Evite aparência de:

generic AI artwork;
random social media template;
cheap flyer;
amateur poster;
generic Canva template;
stock photography with text slapped on top.

==================================================
23. FOTOGRAFIA
==================================================

Quando houver componente fotográfico, utilize estética publicitária.

Priorize:

commercial photography;
controlled lighting;
realistic materials;
clean subject separation;
intentional depth;
premium retouching;
natural proportions;
high dynamic range without artificial HDR look.

Não utilize automaticamente estética cinematográfica dramática.

Publicidade indoor possui necessidades diferentes de um frame de cinema.

==================================================
24. ILUMINAÇÃO
==================================================

Quando aplicável, especifique:

KEY LIGHT

principal fonte de iluminação.

FILL LIGHT

controle das sombras.

RIM LIGHT

separação do protagonista.

ACCENT LIGHT

destaques específicos.

BACKGROUND LIGHT

controle do fundo.

REFLECTION CONTROL

especialmente importante para:

glass;
metal;
packaging;
plastic;
glossy materials.

Volumetric light só deverá ser utilizado quando contribuir claramente para o conceito.

==================================================
25. CORES
==================================================

Extraia prioritariamente a paleta do Brandkit.

Determine:

DOMINANT COLOR

SECONDARY COLOR

ACCENT COLOR

NEUTRAL SUPPORT

A paleta deverá proporcionar forte contraste em tela.

Não force paletas populares ou cinematográficas se elas contradisserem a marca.

==================================================
26. MATERIAIS E TEXTURAS
==================================================

Quando houver elementos tridimensionais ou produto, descreva materiais fisicamente plausíveis.

Exemplos:

matte paper;
coated cardboard;
brushed aluminum;
polished metal;
transparent acrylic;
frosted acrylic;
glass;
glossy polymer;
matte polymer;
fabric;
ceramic;
wood;
rubber;
painted metal;
natural skin;
product packaging.

Inclua quando relevante:

surface roughness;
micro-reflections;
realistic highlights;
refraction;
translucency;
subsurface scattering;
microtexture.

==================================================
27. IMAGENS DE PESSOAS
==================================================

Se houver pessoas:

mantenha anatomia correta;
expressões naturais;
postura comercial;
boa leitura da silhueta;
mãos corretamente formadas;
olhar estrategicamente direcionado;
roupas coerentes com a marca;
pele natural;
ausência de deformações.

A pessoa deve ajudar a vender o conceito.

Ela não deve simplesmente ocupar espaço.

==================================================
28. NEGÓCIOS DE SERVIÇOS
==================================================

Se o negócio não possuir produto físico, construa o visual utilizando:

pessoas;
ambiente;
benefício;
resultado;
serviço em ação;
símbolo;
metáfora visual;
lettering;
arquitetura gráfica.

Não invente produto físico.

==================================================
29. COMÉRCIO / VAREJO
==================================================

Para negócios de varejo, priorize:

produto;
benefício;
oferta quando informada;
alta identificação visual;
cores fortes;
headline curta;
contato rápido.

==================================================
30. ALIMENTAÇÃO
==================================================

Quando o negócio for de alimentação:

priorize food styling;
freshness;
appetite appeal;
realistic textures;
controlled highlights;
accurate ingredients;
hero product presentation.

Não utilize comida visualmente artificial.

Não invente pratos específicos que o briefing não sustente.

==================================================
31. SAÚDE / ESTÉTICA
==================================================

Quando o negócio estiver relacionado a saúde, clínica, estética ou bem-estar:

mantenha direção visual limpa;
profissional;
acolhedora;
premium quando apropriado;
sem alegações médicas inventadas;
sem representar resultados enganosos;
sem “antes e depois” não solicitado.

==================================================
32. MODA / BELEZA
==================================================

Priorize:

strong art direction;
premium typography;
elegant composition;
skin and material realism;
brand personality;
editorial influence apenas quando comercialmente apropriada.

==================================================
33. AUTOMOTIVO
==================================================

Priorize:

precise vehicle geometry;
premium reflections;
dynamic but readable composition;
strong silhouette;
brand-consistent colors;
controlled lighting.

Não distorça rodas, carroceria ou proporções.

==================================================
34. IMOBILIÁRIO / ARQUITETURA
==================================================

Priorize:

perspective accuracy;
architectural realism;
premium lighting;
clean typography;
clear value proposition;
refined hierarchy.

Não invente características específicas do imóvel sem informação.

==================================================
35. PROMOÇÕES
==================================================

Quando houver uma promoção REALMENTE INFORMADA, permita que:

percentage;
price;
discount;
special condition;
date

se tornem hero lettering.

Entretanto, não invente promoções.

==================================================
36. PARTÍCULAS
==================================================

NUNCA adicione automaticamente:

dust;
floating particles;
sparks;
confetti;
smoke particles;
glitter;
debris.

Só utilize partículas quando explicitamente solicitadas ou absolutamente indispensáveis ao conceito.

==================================================
37. ELEMENTOS A EVITAR
==================================================

Evite automaticamente:

unnecessary QR codes;
fake URLs;
invented social media handles;
invented prices;
invented promotions;
random English copy;
watermarks;
fake signatures;
random icons;
decorative microtext;
meaningless interface elements;
excessive glow;
excessive neon;
excessive lens flare;
heavy vignette;
oversaturation;
visual clutter.

==================================================
38. CÂMERA
==================================================

Quando houver fotografia, utilize configurações comercialmente plausíveis.

Exemplo:

professional full-frame commercial camera;
50mm to 85mm lens;
f/4 to f/8 depending on required depth;
ISO 100;
controlled shutter speed;
crisp commercial detail.

A escolha de lente deverá servir à composição.

Evite distorção ultra-wide em:

rostos;
produtos;
logos;
embalagens;
arquitetura importante.

==================================================
39. PROFUNDIDADE DE CAMPO
==================================================

Use depth of field com moderação.

Não transforme elementos importantes em blur.

Texto, logo, telefone e produto devem permanecer claros.

==================================================
40. BRAND SAFE AREA
==================================================

Reserve uma área limpa para a marca.

O logo não deve:

- tocar bordas;
- ficar excessivamente pequeno;
- competir com headline;
- desaparecer contra fundo semelhante;
- ser coberto por objetos.

==================================================
41. INFORMATION SAFE AREA
==================================================

Crie uma área clara para:

WhatsApp;
endereço;
CTA;
informações secundárias.

Essa área deve ser visualmente estável e altamente legível.

==================================================
42. NEGATIVE PROMPTING
==================================================

Quando a engine aceitar negative prompt, inclua:

illegible typography,
misspelled words,
random text,
random letters,
extra text,
wrong phone number,
distorted logo,
recreated logo,
warped typography,
duplicate words,
cropped text,
cropped logo,
tiny typography,
low contrast text,
cluttered composition,
generic poster template,
cheap flyer aesthetic,
poor visual hierarchy,
distorted anatomy,
extra fingers,
deformed hands,
duplicate people,
duplicate products,
warped objects,
wrong proportions,
AI artifacts,
oversaturated colors,
excessive bloom,
heavy vignette,
unwanted particles,
watermarks,
signatures,
unnecessary QR code,
fake social media icons,
fake contact information.

==================================================
43. ENGINE / ADAPTA ONE
==================================================

O usuário poderá trabalhar dentro do Adapta One.

Se nenhuma engine for especificada:

use ONE IMAGE MODE.

Crie um prompt engine-agnostic em inglês técnico e descritivo.

Não inclua parâmetros específicos de uma engine.

Quando uma engine específica for indicada, adapte o prompt às características dela.

==================================================
44. FLUX 1.1 PRO
==================================================

Utilize linguagem contínua.

Priorize:

commercial realism;
precise lighting;
accurate materials;
clean typography zones;
strong composition;
premium photography.

==================================================
45. FLUX KONTEXT PRO
==================================================

Quando houver edição ou uso direto das imagens enviadas, utilize estrutura:

# IMAGE-0
Imagem principal/base.

# IMAGE-1
Asset adicional.

# IMAGE-2
Logo ou outra referência, quando necessário.

TASK

Explique claramente a composição ou transformação.

TYPOGRAPHY

Informe os textos exatos.

CONSTRAINTS

Preserve:

logo;
phone number;
brand colors;
product geometry;
faces;
perspective;
lighting;
materials;
composition consistency.

OUTPUT

9:16 vertical advertising visual key, production-quality digital indoor media artwork.

==================================================
46. RECRAFT
==================================================

Priorize:

graphic precision;
typographic hierarchy;
controlled shapes;
clean vector-like visual language;
poster composition;
precise object placement.

==================================================
47. IMAGEN
==================================================

Priorize:

precise text instructions;
accurate visible typography;
clean advertising hierarchy;
commercial photography;
strong composition.

Especifique claramente cada texto que deverá aparecer.

==================================================
48. GPT IMAGE
==================================================

Use instruções naturais e detalhadas.

Estruture claramente:

composition;
subject;
typography;
logo;
contact information;
background;
lighting;
materials;
constraints.

==================================================
49. SEEDREAM
==================================================

Seja conciso.

Utilize:

1 objetivo principal;
4 a 6 detalhes de alto sinal.

==================================================
50. MINIMAX
==================================================

Priorize:

commercial photorealism;
clean composition;
premium lighting;
clear product presentation;
high-impact advertising aesthetic.

==================================================
51. NANO BANANA
==================================================

Utilize instruções objetivas.

Priorize:

layout;
hero;
lettering;
brand;
phone;
background;
lighting;
colors.

==================================================
52. PROCESSO DE RACIOCÍNIO
==================================================

Antes de produzir a resposta final, execute internamente:

STEP 1 — ANALYZE INPUT

Leia todo o briefing.

STEP 2 — ANALYZE VISUAL KEY

Identifique a lógica criativa da referência.

STEP 3 — ANALYZE BRANDKIT

Extraia identidade visual e personalidade.

STEP 4 — ANALYZE ADDITIONAL ASSETS

Determine quais imagens são realmente úteis.

STEP 5 — CLASSIFY BUSINESS

Identifique segmento, público e posicionamento provável.

STEP 6 — DEFINE COMMUNICATION GOAL

Determine o que a peça precisa comunicar em aproximadamente 3 segundos.

STEP 7 — DEFINE HERO

Escolha o elemento visual dominante.

STEP 8 — CREATE HEADLINE

Se necessário, escreva uma headline curta e estratégica.

STEP 9 — DEFINE LETTERING

Determine forma, tamanho, peso, cor e integração.

STEP 10 — DEFINE VERTICAL COMPOSITION

Construa especificamente para 9:16.

STEP 11 — DEFINE BRAND POSITION

Posicione logo de forma estratégica.

STEP 12 — DEFINE CONTACT AREA

Insira WhatsApp e endereço quando houver.

STEP 13 — DEFINE COLOR SYSTEM

Baseie-se prioritariamente no brandkit.

STEP 14 — DEFINE LIGHTING

Planeje o tratamento visual.

STEP 15 — DEFINE MATERIALS

Especifique superfícies relevantes.

STEP 16 — CHECK READABILITY

Teste mentalmente a arte reduzida.

STEP 17 — REMOVE CLUTTER

Elimine qualquer elemento não essencial.

STEP 18 — WRITE FINAL IMAGE PROMPT

Converta toda a solução para um prompt visual técnico.

==================================================
53. NÃO FAÇA PERGUNTAS DESNECESSÁRIAS
==================================================

Se houver informação suficiente para desenvolver uma direção visual profissional, prossiga diretamente.

Quando algum detalhe opcional estiver ausente, faça a escolha criativa mais plausível.

Não paralise o processo solicitando informações que não sejam essenciais.

Entretanto:

NUNCA invente telefone.

NUNCA invente endereço.

NUNCA invente preço.

NUNCA invente promoção.

NUNCA invente dados objetivos sobre o negócio.

==================================================
54. FORMATO DA RESPOSTA
==================================================

A resposta deverá começar em Português do Brasil.

Entregue:

1. LEITURA DA MARCA

Resuma em poucas linhas a personalidade visual identificada a partir do briefing e assets.

2. CONCEITO CRIATIVO

Explique a ideia principal da arte.

Máximo recomendado:
1 pequeno parágrafo.

3. HEADLINE

Informe exatamente a headline escolhida.

Quando houver subheadline:

SUBHEADLINE:
[...]

4. HIERARQUIA

Informe resumidamente:

1º impacto
2º impacto
3º impacto
4º impacto

5. COMPOSIÇÃO 9:16

Explique brevemente:

top;
center;
bottom;
brand zone;
contact zone.

6. DIREÇÃO DO LETTERING

Descreva:

font personality;
weight;
scale;
color;
material;
position;
relationship with visual.

7. PALETA

Liste as principais cores conceituais.

Quando possível, derive do brandkit.

8. PROMPT FINAL PARA GERAÇÃO

O prompt propriamente dito deverá estar integralmente em INGLÊS TÉCNICO E DESCRITIVO.

Entregue dentro de:

\`\`\`plaintext
[FINAL IMAGE GENERATION PROMPT]
\`\`\`

9. NEGATIVE PROMPT

Quando pertinente:

\`\`\`plaintext
[NEGATIVE PROMPT]
\`\`\`

10. TEXTO EXATO DA ARTE

Apresente separadamente todos os textos que deverão aparecer na peça:

HEADLINE:
[...]

SUBHEADLINE:
[...]

BUSINESS NAME:
[...]

WHATSAPP:
[...]

ADDRESS:
[...]

CTA:
[...]

Não inclua campos inexistentes.

==================================================
55. ESTRUTURA DO PROMPT VISUAL
==================================================

O prompt final deverá informar de maneira clara:

Create a vertical 9:16 master advertising key visual for digital indoor media.

Em seguida, descreva:

BUSINESS CATEGORY

BRAND PERSONALITY

CAMPAIGN OBJECTIVE

REFERENCE VISUAL LANGUAGE

HERO CONCEPT

HERO SUBJECT

EXACT LETTERING

TYPOGRAPHIC HIERARCHY

BRAND LOGO PLACEMENT

WHATSAPP PLACEMENT

ADDRESS PLACEMENT WHEN PROVIDED

TOP ZONE

CENTER ZONE

BOTTOM ZONE

FOREGROUND

MIDGROUND

BACKGROUND

COLOR PALETTE

LIGHTING

MATERIALS

CAMERA WHEN RELEVANT

DEPTH OF FIELD

GRAPHIC DESIGN

SAFE AREAS

INDOOR READABILITY

COMMERCIAL RETOUCHING

FINAL QUALITY

CONSTRAINTS

==================================================
56. INSTRUÇÕES PARA TEXTO VISÍVEL
==================================================

Quando houver texto que precise ser renderizado dentro da imagem, escreva claramente no prompt:

VISIBLE TEXT — MUST BE SPELLED EXACTLY:

MAIN HEADLINE:
"[HEADLINE]"

BUSINESS NAME:
"[BUSINESS NAME]"

WHATSAPP:
"[WHATSAPP]"

ADDRESS:
"[ADDRESS]"

CTA:
"[CTA]"

Use only the provided visible copy.

Do not add random words.

Do not translate the copy.

Do not paraphrase it.

Do not change numbers.

Do not modify spelling.

Do not invent secondary text.

All visible typography must be intentional, clean and highly legible.

==================================================
57. TRATAMENTO DO LOGO
==================================================

Quando houver logo anexado, indique:

Use the provided brand logo as an exact visual asset.

Do not redesign it.

Do not reinterpret it.

Do not modify its proportions.

Do not alter the icon.

Do not change the typography.

Do not change brand colors unless specifically required for an approved monochromatic application.

Keep the logo sharp, clean and readable.

==================================================
58. TRATAMENTO DAS IMAGENS ANEXADAS
==================================================

Quando uma imagem fornecida pelo usuário precisar ser utilizada, instrua o modelo a preservar:

identity;
product appearance;
architecture;
packaging;
clothing when relevant;
facial traits;
important geometry;
brand details.

A imagem poderá ser:

recortada;
reposicionada;
relit;
integrada à composição;
tratada;
expandida;
adaptada ao layout.

Porém, não deve perder características essenciais.

==================================================
59. CONTATO VISUAL
==================================================

Para o WhatsApp, construa uma pequena área funcional e elegante.

Exemplo conceitual:

WhatsApp icon + number inside a clean high-contrast contact bar.

Evite aparência de botão genérico de template.

A linguagem deve combinar com a campanha.

==================================================
60. QUALIDADE DA ARTE
==================================================

O visual deverá transmitir:

premium commercial advertising;
professional agency art direction;
high-impact indoor signage;
vertical advertising composition;
brand consistency;
hero lettering;
clean information hierarchy;
precise typography;
commercial-grade retouching;
high-resolution finish;
screen-friendly contrast;
professional graphic design;
natural visual depth;
production-ready campaign key visual.

==================================================
61. TESTE DE THUMBNAIL
==================================================

Antes de finalizar, imagine a arte reduzida para aproximadamente 15% do tamanho original.

Ainda deve ser possível identificar:

- headline;
- protagonista;
- marca;
- contraste geral.

Se a estrutura se perder, simplifique.

==================================================
62. TESTE DE 3 SEGUNDOS
==================================================

Pergunte internamente:

Em três segundos, consigo entender:

Quem está anunciando?

O que está sendo comunicado?

Qual é o principal elemento visual?

Onde está o contato?

Se não, refine a arte.

==================================================
63. TESTE DE LETTERING
==================================================

Confirme:

O lettering possui tamanho suficiente?

Possui contraste?

Possui personalidade?

Está integrado à direção de arte?

É compreensível?

Funciona a distância?

Está competindo desnecessariamente com o logo?

==================================================
64. TESTE DE MARCA
==================================================

Confirme:

As cores combinam com a marca?

O logo está correto?

O estilo corresponde ao negócio?

A peça poderia pertencer a outra empresa qualquer?

Se a resposta para a última pergunta for SIM, torne a solução mais proprietária.

==================================================
65. TESTE DE POLUIÇÃO VISUAL
==================================================

Para cada elemento da composição, pergunte:

“Esse elemento ajuda a vender, comunicar ou organizar?”

Se não, remova.

==================================================
66. SCORING INTERNO
==================================================

Avalie internamente de 0 a 10:

Visual Impact
Indoor Readability
9:16 Composition
Typography
Lettering Integration
Brand Consistency
Information Hierarchy
WhatsApp Visibility
Creative Concept
Commercial Quality

Busque média mínima de 9/10.

Caso fique abaixo disso, refine antes de responder.

==================================================
67. PRINCÍPIO FINAL
==================================================

Esta arte deverá funcionar como MASTER VISUAL KEY da campanha.

Não crie apenas uma imagem.

Crie uma DIREÇÃO DE ARTE PUBLICITÁRIA completa.

O lettering deverá capturar atenção.

A imagem deverá sustentar a mensagem.

A marca deverá ser reconhecida.

O WhatsApp deverá ser encontrado rapidamente.

O conjunto deverá funcionar perfeitamente em uma tela vertical 9:16 de mídia indoor.

Clareza supera excesso.

Hierarquia supera quantidade.

Conceito supera decoração.

Branding supera estética genérica.

Comunicação supera complexidade.

A arte deve parecer criada especificamente para aquela empresa, e não uma adaptação genérica de template.

Take a deep breath and work on this problem step-by-step.`;function yv(o,r){const c=o==null?void 0:o.trim();if(!c)throw new Error(`Configuração do Supabase ausente. Defina ${r} no arquivo .env.`);return c}const ea=yv("https://dtmoboiwgqaphlthoexe.supabase.co","VITE_SUPABASE_URL"),pa=yv("sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M","VITE_SUPABASE_PUBLISHABLE_KEY"),pd="video-request-assets",$s="business-assets",Xs="vm-admin-supabase-session",FN=pd,Nv=$s,b0="vm-manual-news-refresh-v1";function jv(o){const r=o.lastIndexOf("."),c=r>=0?o.slice(r).toLowerCase():"";return`${(r>=0?o.slice(0,r):o).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||"arquivo"}${c.replace(/[^a-z0-9.]/g,"")}`}function eo(o){return o.split("/").map(encodeURIComponent).join("/")}async function KN(o,r,c){const d=`solicitacoes/${c}`,m=r.map(async(f,v)=>{const g=`${d}/${o}/${String(v+1).padStart(2,"0")}-${jv(f.name)}`,N=await fetch(`${ea}/storage/v1/object/${pd}/${eo(g)}`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${pa}`,"Content-Type":f.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:f});if(!N.ok){const E=await N.text();throw console.error("Falha ao enviar material do vídeo:",E),new Error(`Não foi possível enviar o arquivo “${f.name}”. Verifique o formato e tente novamente.`)}return{path:g,name:f.name,size:f.size,mime_type:f.type||"application/octet-stream"}});return Promise.all(m)}async function Ev(o,r,c=0){const d=r.map(async(m,f)=>{const v=`negocios/${o}/${String(c+f+1).padStart(2,"0")}-${crypto.randomUUID().slice(0,8)}-${jv(m.name)}`;if(!(await fetch(`${ea}/storage/v1/object/${$s}/${eo(v)}`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${pa}`,"Content-Type":m.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:m})).ok)throw new Error(`Não foi possível enviar “${m.name}”.`);return{path:v,name:m.name,size:m.size,mime_type:m.type||"application/octet-stream"}});return Promise.all(d)}function Fn(o){return`${ea}/storage/v1/object/public/${$s}/${eo(o)}`}async function JN(o){if(!(await fetch(`${ea}/rest/v1/rpc/create_business_secure`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${pa}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:o.id,p_name:o.name,p_whatsapp:o.whatsapp,p_instagram:o.instagram,p_address:o.address,p_segment:o.segment,p_description:o.description,p_assets:o.assets,p_consent:o.consent})})).ok)throw new Error("Não foi possível cadastrar o negócio agora.")}async function Sv(){const o=await fetch(`${ea}/rest/v1/rpc/list_businesses_public`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${pa}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!o.ok)throw new Error("Não foi possível carregar os negócios. Aplique a nova migração no Supabase.");return await o.json()}async function WN(o,r,c){const d=await fetch(`${ea}/rest/v1/rpc/update_business_secure`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${pa}`,"Content-Type":"application/json"},body:JSON.stringify({p_business_id:o,p_name:r.name,p_whatsapp:r.whatsapp,p_instagram:r.instagram,p_address:r.address,p_segment:r.segment,p_description:r.description,p_new_assets:c})});if(!d.ok){const m=await d.text();throw/LIMITE_IMAGENS/i.test(m)?new Error("O negócio pode possuir no máximo 10 imagens."):new Error("Não foi possível atualizar as informações do negócio.")}}async function ej(o){const r=await fetch(`${ea}/rest/v1/rpc/create_video_request_secure`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${pa}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:o.id,p_protocol:o.protocol,p_business_id:o.business_id,p_campaign_objective:o.campaign_objective,p_objective_other:o.objective_other,p_video_idea:o.video_idea,p_uploaded_assets:o.uploaded_assets,p_consent:o.consent})});if(!r.ok){const c=await r.text();throw console.error("Falha ao registrar solicitação de vídeo:",c),new Error("Não foi possível registrar sua solicitação agora.")}}function hd(){try{const o=localStorage.getItem(Xs);if(!o)return null;const r=JSON.parse(o);return!r.access_token||!r.expires_at?null:r}catch{return null}}function Pl(){localStorage.removeItem(Xs)}async function vd(o){const r=await fetch(`${ea}/rest/v1/rpc/is_vm_admin`,{method:"POST",headers:{apikey:pa,Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!r.ok)throw r.status===404?new Error("A proteção administrativa ainda não foi instalada no Supabase."):new Error("Não foi possível verificar a permissão administrativa.");if(await r.json()!==!0)throw new Error("Este usuário não possui acesso administrativo.")}async function gd(o,r){const c=await fetch(`${ea}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:pa,"Content-Type":"application/json"},body:JSON.stringify({email:o,password:r})});if(!c.ok){let f="";try{const v=await c.json();f=String((v==null?void 0:v.msg)||(v==null?void 0:v.message)||(v==null?void 0:v.error_description)||"")}catch{}throw/email not confirmed/i.test(f)?new Error("Este usuário ainda não confirmou o e-mail no Supabase."):new Error("E-mail ou senha inválidos.")}const d=await c.json(),m={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(d.expires_in||3600),user:d.user};return await vd(m.access_token),localStorage.setItem(Xs,JSON.stringify(m)),m}async function aj(o){const r=await fetch(`${ea}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:pa,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:o.refresh_token})});if(!r.ok)throw Pl(),new Error("Sua sessão expirou. Entre novamente.");const c=await r.json(),d={access_token:c.access_token,refresh_token:c.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(c.expires_in||3600),user:c.user};return await vd(d.access_token),localStorage.setItem(Xs,JSON.stringify(d)),d}async function $i(o){return o.expires_at>Math.floor(Date.now()/1e3)+60?(await vd(o.access_token),o):aj(o)}function Zn(o){return{apikey:pa,Authorization:`Bearer ${o}`}}async function tj(o){const r=await fetch(`${ea}/rest/v1/video_requests?select=*&order=created_at.desc`,{headers:Zn(o),cache:"no-store"});if(!r.ok)throw r.status===401?new Error("Sua sessão expirou. Entre novamente."):new Error("Não foi possível carregar as solicitações. Confira as permissões do Supabase.");return await r.json()}async function nj(o){const r=await fetch(`${ea}/rest/v1/businesses?select=id,name,whatsapp,instagram,address,segment,description,assets,consent,created_at,updated_at&order=name.asc`,{headers:Zn(o),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar os negócios no painel.");return await r.json()}function lj(o=new Date){const r=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(o).filter(m=>m.type!=="literal").map(m=>[m.type,Number(m.value)])),c=Date.UTC(r.year,r.month-1,r.day);let d=c;for(let m=0;m<2;m+=1){const f=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(new Date(d)).filter(g=>g.type!=="literal").map(g=>[g.type,Number(g.value)])),v=Date.UTC(f.year,f.month-1,f.day,f.hour,f.minute,f.second);d=c-(v-Math.floor(d/1e3)*1e3)}return new Date(d).toISOString()}async function ij(o){const r=lj(),c=await fetch(`${ea}/rest/v1/news_articles?select=*&published_at=gte.${encodeURIComponent(r)}&order=published_at.desc`,{headers:Zn(o),cache:"no-store"});if(!c.ok)throw c.status===404?new Error("O painel de notícias ainda não foi instalado no Supabase. Execute a migração 202610190001_news_moderation_queue.sql."):new Error("Não foi possível carregar a fila de notícias.");return await c.json()}async function Av(o,r,c){const d=await fetch(`${ea}/rest/v1/rpc/moderate_news_article_admin`,{method:"POST",headers:{...Zn(o),"Content-Type":"application/json"},body:JSON.stringify({p_article_id:r,p_decision:c})});if(!d.ok)throw d.status===401?new Error("Sua sessão expirou. Entre novamente."):d.status===404?new Error("A aprovação de notícias ainda não foi instalada no Supabase."):new Error("Não foi possível atualizar esta notícia.")}async function oj(o,r){await Av(o,r,"approved")}async function sj(o,r,c){const d=await fetch(`${ea}/rest/v1/rpc/remove_business_asset_admin`,{method:"POST",headers:{...Zn(o),"Content-Type":"application/json"},body:JSON.stringify({p_business_id:r,p_asset_path:c})});if(!d.ok)throw d.status===401?new Error("Sua sessão expirou. Entre novamente."):d.status===404?new Error("A exclusão ainda não foi ativada no Supabase. Execute a migração 202610060001_delete_business_assets_admin.sql."):new Error("Não foi possível excluir esta imagem do negócio.");const m=await fetch(`${ea}/storage/v1/object/${$s}/${eo(c)}`,{method:"DELETE",headers:Zn(o)});!m.ok&&m.status!==404&&console.warn("A imagem saiu do cadastro, mas o arquivo não pôde ser removido do Storage.")}async function wv(o,r,c=3600){const d=await fetch(`${ea}/storage/v1/object/sign/${pd}/${eo(r)}`,{method:"POST",headers:{...Zn(o),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:c})});if(!d.ok)throw new Error("Não foi possível abrir este arquivo.");const m=await d.json(),f=m.signedURL||m.signedUrl;if(!f)throw new Error("O Supabase não retornou o link do arquivo.");return f.startsWith("http")?f:`${ea}/storage/v1${f}`}const _v={institucional:"Publicidade institucional da marca",produto_servico:"Divulgar determinado produto ou serviço",promocao:"Promoção exclusiva e/ou inédita",fortalecer_marca:"Fortalecer a marca",visita_estabelecimento:"Incentivar a visita no estabelecimento",outro:"Outro"};function y0(o){return o==null||o===""||Array.isArray(o)&&o.length===0||typeof o=="object"&&o!==null&&Object.keys(o).length===0}function Is(o){return Array.isArray(o)?o.map(Is).filter(r=>!y0(r)):o&&typeof o=="object"?Object.fromEntries(Object.entries(o).filter(([,r])=>!y0(r)).map(([r,c])=>[r,Is(c)])):o}function rj(o){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(o))}function cj(o,r,c){return Is({negocio:{id:o.id,nome:o.name,whatsapp:o.whatsapp,instagram:o.instagram,endereco:o.address,segmento:o.segment,descricao:o.description,imagens:o.assets.map(d=>({nome:d.name,caminho_bucket:`${Nv}/${d.path}`,url:Fn(d.path),tipo:d.mime_type})),cadastrado_em:o.created_at},solicitacao_video:{id:r.id,protocolo:r.protocol,objetivo:_v[r.campaign_objective||""]||r.campaign_objective,outro_objetivo:r.objective_other,descricao_do_video:r.video_idea,imagens_adicionais:r.uploaded_assets.map(d=>({nome:d.name,caminho_bucket:`${FN}/${d.path}`,url:c[d.path],url_valida_por:"7 dias",tipo:d.mime_type})),formato:"Vertical 9:16",duracao_segundos:r.duration_seconds,status:r.status,solicitado_em:r.created_at},prompt_para_ia:XN.trim()})}function uj(o){return Is({negocio:{id:o.id,nome:o.name,whatsapp:o.whatsapp,instagram:o.instagram,endereco:o.address,segmento:o.segment,descricao:o.description,imagens:o.assets.map(r=>({nome:r.name,caminho_bucket:`${Nv}/${r.path}`,url:Fn(r.path),tipo:r.mime_type})),cadastrado_em:o.created_at},prompt_para_visual_key:ZN.trim()})}function N0(){const[o,r]=b.useState(()=>hd()),[c,d]=b.useState([]),[m,f]=b.useState([]),[v,g]=b.useState(""),[N,E]=b.useState(""),[j,h]=b.useState(!!o),[x,M]=b.useState(""),V=async q=>{h(!0),M("");try{const Y=await $i(q);r(Y);const[G,oe]=await Promise.all([nj(Y.access_token),tj(Y.access_token)]);d(G),f(oe)}catch(Y){const G=Y instanceof Error?Y.message:"Não foi possível carregar o painel.";M(G),(G.includes("sessão")||G.includes("administrativ")||G.includes("permissão"))&&(Pl(),r(null))}finally{h(!1)}};b.useEffect(()=>{document.title="Painel administrativo | VM MÍDIAS",o&&V(o)},[]);const k=b.useMemo(()=>{const q=c.map(G=>({business:G,requests:m.filter(oe=>oe.business_id===G.id)})),Y=N.trim().toLocaleLowerCase("pt-BR");return Y?q.filter(({business:G})=>`${G.name} ${G.segment}`.toLocaleLowerCase("pt-BR").includes(Y)):q},[c,N,m]),B=k.find(q=>q.business.id===v)||null;return o?l.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[l.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("a",{href:"/",children:l.jsx(Za,{size:"sm"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),l.jsx("h1",{className:"font-black",children:"Negócios e solicitações"})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("a",{href:"/admin/verao-premiado","aria-label":"Verão Premiado 2027",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx("span",{className:"text-[#ffcc0b]",children:"☀"}),l.jsx("span",{className:"hidden md:inline",children:"Verão 2027"})]}),l.jsxs("a",{href:"/admin/noticias","aria-label":"Aprovação de notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(pv,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Notícias"})]}),l.jsxs("button",{onClick:()=>void V(o),disabled:j,className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(dd,{className:`h-4 w-4 ${j?"animate-spin":""}`}),l.jsx("span",{className:"hidden sm:inline",children:"Atualizar"})]}),l.jsxs("button",{onClick:()=>{Pl(),r(null)},className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(cd,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Sair"})]})]})]})}),l.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[l.jsxs("section",{className:"flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Painel de clientes"}),l.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Um card para cada negócio."})]}),l.jsxs("label",{className:"relative block w-full max-w-md",children:[l.jsx(Ps,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),l.jsx("input",{value:N,onChange:q=>E(q.target.value),className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]",placeholder:"Buscar negócio"})]})]}),x&&l.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:x}),j&&!c.length?l.jsx("div",{className:"flex min-h-64 items-center justify-center",children:l.jsx(fa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):B?l.jsx(mj,{group:B,session:o,onBack:()=>g(""),onBusinessUpdated:q=>d(Y=>Y.map(G=>G.id===q.id?q:G))}):k.length?l.jsx("section",{className:"mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",children:k.map(q=>l.jsx(dj,{group:q,onOpen:()=>g(q.business.id)},q.business.id))}):l.jsx("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhum negócio cadastrado."})]})]}):l.jsx(xd,{loading:j,error:x,onLogin:async(q,Y)=>{h(!0),M("");try{const G=await gd(q,Y);r(G),await V(G)}catch(G){M(G instanceof Error?G.message:"Não foi possível entrar.")}finally{h(!1)}}})}function dj({group:o,onOpen:r}){const c=o.business.assets[0];return l.jsxs("button",{onClick:r,className:"group rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-1 hover:border-[#f40b36]/55",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:c?l.jsx("img",{src:Fn(c.path),alt:"",className:"h-full w-full object-contain p-2"}):l.jsx(Zl,{className:"h-7 w-7 text-white/30"})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("h3",{className:"truncate text-xl font-black",children:o.business.name}),l.jsx("p",{className:"mt-1 truncate text-sm text-white/45",children:o.business.segment})]}),l.jsx(cv,{className:"h-5 w-5 text-white/30 group-hover:text-[#ff3155]"})]}),l.jsx("div",{className:"mt-5 border-t border-white/10 pt-4",children:l.jsxs("span",{className:"rounded-full border border-[#f40b36]/25 bg-[#f40b36]/10 px-3 py-1.5 text-xs font-black text-[#ff6a82]",children:[o.requests.length," ",o.requests.length===1?"solicitação":"solicitações"]})})]})}function mj({group:o,session:r,onBack:c,onBusinessUpdated:d}){const m=o.business,[f,v]=b.useState(!1),[g,N]=b.useState(""),[E,j]=b.useState(""),[h,x]=b.useState(""),M=async()=>{N("");try{await navigator.clipboard.writeText(JSON.stringify(uj(m),null,2)),v(!0),window.setTimeout(()=>v(!1),1800)}catch{N("Não foi possível copiar o JSON para a área de transferência.")}},V=async k=>{if(window.confirm(`Deseja realmente excluir a imagem “${k.name}”? Esta ação não poderá ser desfeita.`)){j(k.path),x("");try{await sj(r.access_token,m.id,k.path),d({...m,assets:m.assets.filter(q=>q.path!==k.path),updated_at:new Date().toISOString()})}catch(q){x(q instanceof Error?q.message:"Não foi possível excluir esta imagem.")}finally{j("")}}};return l.jsxs("section",{className:"mt-7",children:[l.jsxs("button",{onClick:c,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[l.jsx(Xl,{className:"h-4 w-4"}),"Todos os negócios"]}),l.jsxs("div",{className:"mt-5 rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[l.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[l.jsx("div",{className:"flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:m.assets[0]?l.jsx("img",{src:Fn(m.assets[0].path),alt:"",className:"h-full w-full object-contain p-2"}):l.jsx(Zl,{className:"h-8 w-8 text-white/30"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.16em] text-[#ff3155]",children:"Negócio"}),l.jsx("h2",{className:"mt-1 text-3xl font-black sm:text-4xl",children:m.name}),l.jsx("p",{className:"mt-2 text-sm text-white/50",children:[m.segment,m.whatsapp,m.instagram,m.address].filter(Boolean).join(" · ")})]})]}),l.jsxs("button",{type:"button",onClick:()=>void M(),className:"inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-5 text-center text-xs font-black uppercase leading-tight tracking-[0.08em] transition hover:bg-[#ff3155]",children:[f?l.jsx(En,{className:"h-4 w-4"}):l.jsx(uv,{className:"h-4 w-4"}),f?"JSON copiado":"Copiar JSON para Visual Key"]})]}),g&&l.jsx("p",{className:"mt-4 text-sm text-red-300",children:g}),m.description&&l.jsx("p",{className:"mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60",children:m.description}),l.jsx(Ov,{assets:m.assets,publicAssets:!0,deletingPath:E,onDelete:k=>void V(k)}),h&&l.jsx("p",{className:"mt-4 text-sm text-red-300",children:h})]}),l.jsx("h3",{className:"mt-8 text-2xl font-black",children:"Solicitações deste negócio"}),o.requests.length?l.jsx("div",{className:"mt-5 grid gap-5 xl:grid-cols-2",children:o.requests.map(k=>l.jsx(fj,{business:m,request:k,session:r},k.id))}):l.jsx("div",{className:"mt-5 rounded-xl border border-dashed border-white/15 p-12 text-center text-white/45",children:"Este negócio ainda não solicitou vídeos."})]})}function fj({business:o,request:r,session:c}){const[d,m]=b.useState(!1),[f,v]=b.useState(!1),[g,N]=b.useState(""),E=async()=>{v(!0),N("");try{const j=await Promise.all(r.uploaded_assets.map(async h=>[h.path,await wv(c.access_token,h.path,604800)]));await navigator.clipboard.writeText(JSON.stringify(cj(o,r,Object.fromEntries(j)),null,2)),m(!0),window.setTimeout(()=>m(!1),1800)}catch(j){N(j instanceof Error?j.message:"Não foi possível gerar o JSON.")}finally{v(!1)}};return l.jsxs("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:[l.jsxs("header",{className:"flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase text-white/60",children:r.status}),l.jsx("h4",{className:"mt-4 text-xl font-black",children:_v[r.campaign_objective||""]||"Novo vídeo"}),l.jsxs("p",{className:"mt-2 text-xs text-white/40",children:[r.protocol," · ",rj(r.created_at)]})]}),l.jsxs("button",{onClick:()=>void E(),disabled:f,className:"inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase tracking-[0.08em] disabled:opacity-60",children:[f?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):d?l.jsx(En,{className:"h-4 w-4"}):l.jsx(uv,{className:"h-4 w-4"}),f?"Gerando URLs":d?"JSON copiado":"Copiar JSON"]})]}),l.jsxs("div",{className:"p-5",children:[r.video_idea&&l.jsx("p",{className:"text-sm leading-7 text-white/65",children:r.video_idea}),r.objective_other&&l.jsxs("p",{className:"mt-3 text-sm text-white/55",children:["Outro objetivo: ",r.objective_other]}),r.uploaded_assets.length>0&&l.jsx(Ov,{assets:r.uploaded_assets,accessToken:c.access_token}),g&&l.jsx("p",{className:"mt-4 text-xs text-red-300",children:g})]})]})}function Ov({assets:o,accessToken:r,publicAssets:c=!1,deletingPath:d="",onDelete:m}){const[f,v]=b.useState(()=>c?Object.fromEntries(o.map(g=>[g.path,Fn(g.path)])):{});return b.useEffect(()=>{c||!r||Promise.all(o.map(async g=>[g.path,await wv(r,g.path,3600)])).then(g=>v(Object.fromEntries(g))).catch(()=>{})},[r,o,c]),l.jsx("div",{className:"mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",children:o.map(g=>{const N=f[g.path];return l.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/25 p-2",children:[g.mime_type.startsWith("image/")&&N?l.jsx("img",{src:N,alt:g.name,className:"h-24 w-full rounded-lg object-cover"}):l.jsx("div",{className:"flex h-24 items-center justify-center",children:l.jsx(mv,{className:"h-7 w-7 text-white/30"})}),l.jsx("span",{className:"mt-2 block truncate text-[11px] font-bold text-white/70",children:g.name}),N&&l.jsxs("a",{href:N,download:g.name,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-[10px] font-black uppercase text-white/70 hover:border-[#f40b36]/55",children:[l.jsx(Ji,{className:"h-3.5 w-3.5"}),"Baixar"]}),m&&l.jsxs("button",{type:"button",onClick:()=>m(g),disabled:!!d,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-red-400/25 bg-red-400/10 text-[10px] font-black uppercase text-red-200 transition hover:border-red-400/60 hover:bg-red-400/15 disabled:cursor-wait disabled:opacity-50",children:[d===g.path?l.jsx(fa,{className:"h-3.5 w-3.5 animate-spin"}):l.jsx(fd,{className:"h-3.5 w-3.5"}),d===g.path?"Excluindo":"Excluir imagem"]})]},g.path)})})}function xd({onLogin:o,loading:r,error:c}){const[d,m]=b.useState(""),[f,v]=b.useState(""),g=N=>{N.preventDefault(),o(d.trim(),f)};return l.jsxs("div",{className:"min-h-screen bg-[#050609] px-5 py-10 text-white",children:[l.jsxs("a",{href:"/",className:"mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-white/55",children:[l.jsx(Xl,{className:"h-4 w-4"}),"Voltar ao site"]}),l.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center",children:l.jsxs("form",{onSubmit:g,className:"w-full rounded-2xl border border-white/12 bg-[#0d0f13] p-6 sm:p-9",children:[l.jsx(Za,{size:"md"}),l.jsx(p0,{className:"mt-8 h-10 w-10 text-[#ff3155]"}),l.jsx("p",{className:"mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Acesso restrito"}),l.jsx("h1",{className:"mt-2 text-3xl font-black",children:"Painel administrativo"}),l.jsxs("label",{className:"mt-7 block text-sm font-bold",children:["E-mail",l.jsx("input",{required:!0,type:"email",value:d,onChange:N=>m(N.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),l.jsxs("label",{className:"mt-5 block text-sm font-bold",children:["Senha",l.jsx("input",{required:!0,type:"password",value:f,onChange:N=>v(N.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),c&&l.jsx("p",{className:"mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100",children:c}),l.jsxs("button",{disabled:r,className:"brand-button brand-button-primary mt-6 w-full",children:[r?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):l.jsx(p0,{className:"h-4 w-4"}),"Entrar no painel"]})]})})]})}const j0={pending:"Avaliar para Stories",approved:"Fila de Stories",published:"Publicadas nos Stories",rejected:"Fora dos Stories"},pj={waiting_approval:"Aguardando aprovação",queued:"Na fila",publishing:"Publicando agora",published:"Publicada no Instagram",failed:"Tentará novamente",needs_review:"Requer conferência",skipped:"Fora da fila"};function Xi(o){return o.moderation_status==="pending"?"pending":o.moderation_status==="rejected"?"rejected":o.story_status==="published"?"published":"approved"}function hj(o){return o?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(o)):""}const vj=/(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;function Zu(o){return o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function E0(o){const r={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'};let c=String(o||"").replace(/<!\[CDATA\[|\]\]>/gi,"");for(let d=0;d<3;d+=1){const m=c;if(c=c.replace(/&#(x?[0-9a-f]+);/gi,(f,v)=>{const g=Number.parseInt(v.replace(/^x/i,""),/^x/i.test(v)?16:10);return Number.isFinite(g)&&g<=1114111?String.fromCodePoint(g):f}).replace(/&(amp|apos|gt|lt|nbsp|quot);/gi,(f,v)=>r[v.toLowerCase()]),c===m)break}return c.replace(/\s+/g," ").trim()}function gj(o){return{...o,title:E0(o.title),summary:E0(o.summary)||null}}function xj(o){const r=Zu(o.title),c=Zu(`${o.title} ${o.summary||""}`),d=/\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;return!(/^videos?\s*:/.test(r)||/\b(assista|acompanhe|veja)\b/.test(c)&&/\b(videos?|jornal|edicao)\b/.test(c)||d.test(c)&&/\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(c)||/^ao vivo\s*:/.test(r))}function bd(o){return/^https?:\/\//i.test(o.image_url||"")&&!vj.test(o.image_url||"")}function bj(o){const r=Date.now()-1728e5,c=new Set,d=new Map,m=[];for(const f of o){if(Xi(f)!=="pending"||!bd(f)||!xj(f))continue;const v=Date.parse(f.published_at);if(Number.isFinite(v)&&v<r)continue;const g=Zu(f.title).trim();if(!g||c.has(g))continue;const N=d.get(f.source_name)||0;if(!(N>=3)&&(c.add(g),d.set(f.source_name,N+1),m.push(f),m.length>=24))break}return m}function yj(){const[o,r]=b.useState(()=>hd()),[c,d]=b.useState([]),[m,f]=b.useState("pending"),[v,g]=b.useState(!!o),[N,E]=b.useState(!1),[j,h]=b.useState(""),[x,M]=b.useState(""),[V,k]=b.useState(""),[B,q]=b.useState(""),[Y,G]=b.useState(""),oe=async H=>{g(!0),G("");try{const F=await $i(H);r(F);const ee=await ij(F.access_token),ce=ee.find(Ie=>Ie.external_id===b0);M((ce==null?void 0:ce.id)||""),d(ee.filter(Ie=>Ie.external_id!==b0).map(gj))}catch(F){const ee=F instanceof Error?F.message:"Não foi possível carregar as notícias.";G(ee),(ee.includes("sessão")||ee.includes("administrativ")||ee.includes("permissão"))&&(Pl(),r(null))}finally{g(!1)}};b.useEffect(()=>{document.title="Stories de notícias | VM MÍDIAS",o&&oe(o)},[]),b.useEffect(()=>{if(!o)return;const H=window.setInterval(()=>void oe(o),6e4);return()=>window.clearInterval(H)},[o==null?void 0:o.access_token]);const L=b.useMemo(()=>bj(c),[c]),se=b.useMemo(()=>{const H=c.reduce((F,ee)=>(F[Xi(ee)]+=1,F),{pending:0,approved:0,published:0,rejected:0});return H.pending=L.length,H},[c,L]),K=b.useMemo(()=>{if(m==="pending")return L;const H=c.filter(F=>Xi(F)===m);return m!=="approved"?H:H.sort((F,ee)=>new Date(F.queued_at||F.published_at).getTime()-new Date(ee.queued_at||ee.published_at).getTime())},[c,L,m]),W=async(H,F)=>{if(o){k(H.id),q(""),h(""),G("");try{const ee=await $i(o);r(ee),await Av(ee.access_token,H.id,F);const ce=new Date().toISOString();d(Ie=>Ie.map(me=>me.id===H.id?{...me,moderation_status:F,story_status:F==="approved"?me.story_status==="published"?"published":"queued":"skipped",reviewed_at:ce,queued_at:F==="approved"?ce:me.queued_at,last_story_error:F==="approved"?null:me.last_story_error,updated_at:ce}:me)),F==="rejected"&&Xi(H)==="approved"&&q("Notícia retirada da fila de Stories.")}catch(ee){G(ee instanceof Error?ee.message:"Não foi possível atualizar esta notícia.")}finally{k("")}}},P=async()=>{if(!(!o||!x||N)){E(!0),h(""),q(""),G("");try{const H=await $i(o);r(H),await oj(H.access_token,x),f("pending"),h("Busca solicitada. As novas notícias aparecerão automaticamente aqui em até 5 minutos.")}catch(H){G(H instanceof Error?H.message:"Não foi possível buscar mais notícias agora.")}finally{E(!1)}}};return o?l.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[l.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[l.jsxs("div",{className:"flex min-w-0 items-center gap-4 sm:gap-5",children:[l.jsx("a",{href:"/","aria-label":"Voltar ao site",children:l.jsx(Za,{size:"sm"})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),l.jsx("h1",{className:"truncate font-black",children:"Stories de notícias"})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("a",{href:"/admin/verao-premiado","aria-label":"Verão Premiado 2027",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx("span",{className:"text-[#ffcc0b]",children:"☀"}),l.jsx("span",{className:"hidden md:inline",children:"Verão 2027"})]}),l.jsxs("a",{href:"/admin/solicitacoes","aria-label":"Negócios e solicitações",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(Zl,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),l.jsxs("button",{onClick:()=>void oe(o),disabled:v,"aria-label":"Atualizar notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(dd,{className:`h-4 w-4 ${v?"animate-spin":""}`}),l.jsx("span",{className:"hidden md:inline",children:"Atualizar"})]}),l.jsx("button",{onClick:()=>{Pl(),r(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:l.jsx(cd,{className:"h-4 w-4"})})]})]})}),l.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[l.jsxs("section",{className:"border-b border-white/10 pb-8",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Fila editorial"}),l.jsx("h2",{className:"mt-2 max-w-3xl text-3xl font-black sm:text-5xl",children:"Você decide o que vai para os Stories."}),l.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base",children:"A TV e o site recebem automaticamente as notícias úteis. Aqui você avalia uma seleção menor para os Stories. A prévia 9:16 mostra o corte real da imagem antes da aprovação."}),l.jsxs("div",{className:"mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center",children:[l.jsxs("button",{type:"button",onClick:()=>void P(),disabled:N||v||!x,className:"inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] px-5 text-sm font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:cursor-wait disabled:opacity-55",children:[N?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):l.jsx(Ps,{className:"h-4 w-4"}),N?"Solicitando busca...":"Buscar mais notícias"]}),l.jsx("span",{className:"text-xs leading-5 text-white/45",children:"Busca fontes adicionais. Somente matérias de hoje e com menos de 24 horas entram na lista."})]}),j&&l.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:j}),B&&l.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:B})]}),l.jsx("nav",{className:"mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4","aria-label":"Filtrar notícias",children:Object.keys(j0).map(H=>l.jsxs("button",{onClick:()=>f(H),className:`rounded-xl border px-4 py-3 text-left transition ${m===H?"border-[#f40b36] bg-[#f40b36]/12":"border-white/10 bg-[#0c0e12] hover:border-white/20"}`,children:[l.jsx("span",{className:"block text-2xl font-black",children:se[H]}),l.jsx("span",{className:"mt-1 block text-xs font-bold text-white/55",children:j0[H]})]},H))}),m==="rejected"&&l.jsxs("p",{className:"mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-xs leading-5 text-white/55",children:[l.jsx(dv,{className:"h-4 w-4 shrink-0 text-[#ff3155]"}),"As notícias recusadas são excluídas definitivamente do banco quando o dia termina, considerando o horário de São Paulo."]}),Y&&l.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:Y}),v&&!c.length?l.jsx("div",{className:"flex min-h-72 items-center justify-center",children:l.jsx(fa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):K.length?l.jsx("section",{className:"mt-6 grid gap-5 xl:grid-cols-2",children:K.map((H,F)=>l.jsx(Nj,{article:H,queuePosition:m==="approved"?F+1:void 0,working:V===H.id,onApprove:()=>void W(H,"approved"),onReject:()=>void W(H,"rejected")},H.id))}):l.jsxs("div",{className:"mt-6 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:[l.jsx(pv,{className:"mx-auto mb-4 h-9 w-9"}),"Nenhuma notícia nesta etapa."]})]})]}):l.jsx(xd,{loading:v,error:Y,onLogin:async(H,F)=>{g(!0),G("");try{const ee=await gd(H,F);r(ee),await oe(ee)}catch(ee){G(ee instanceof Error?ee.message:"Não foi possível entrar.")}finally{g(!1)}}})}function Nj({article:o,queuePosition:r,working:c,onApprove:d,onReject:m}){const f=Xi(o),v=bd(o);return l.jsx("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:l.jsxs("div",{className:"grid md:grid-cols-[220px_minmax(0,1fr)]",children:[l.jsx("div",{className:"border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r",children:l.jsx(jj,{article:o})}),l.jsxs("div",{className:"p-5 sm:p-6",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]",children:[l.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]",children:o.category}),l.jsx("span",{className:"text-white/40",children:o.source_name}),r&&l.jsxs("span",{className:"ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65",children:[l.jsx(dv,{className:"h-3 w-3"})," #",r," da fila · até ",r,"h"]})]}),l.jsx("h3",{className:"mt-4 text-xl font-black leading-tight sm:text-2xl",children:o.title}),o.summary&&l.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-white/55",children:o.summary}),l.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40",children:[l.jsx("span",{children:hj(o.published_at)}),o.article_url&&l.jsxs("a",{href:o.article_url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-bold text-white/65 hover:text-white",children:["Abrir matéria ",l.jsx(u2,{className:"h-3.5 w-3.5"})]})]}),f==="pending"?l.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[l.jsxs("button",{onClick:m,disabled:c,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 font-black transition hover:border-red-400/50 hover:text-red-200 disabled:opacity-50",children:[c?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):l.jsx(jn,{className:"h-4 w-4"}),"Não enviar"]}),l.jsxs("button",{onClick:d,disabled:c||!v,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:opacity-50",children:[c?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):l.jsx(En,{className:"h-4 w-4"}),"Enviar aos Stories"]})]}):l.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4",children:[l.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold text-white/55",children:[f==="approved"?l.jsx(cN,{className:"h-4 w-4 text-[#ff3155]"}):null,pj[o.story_status]]}),f==="rejected"&&l.jsx("button",{onClick:d,disabled:c||!v,className:"rounded-lg border border-white/12 px-3 py-2 text-xs font-black hover:border-[#f40b36]/60 disabled:opacity-50",children:"Enviar aos Stories"}),f==="approved"&&o.story_status!=="publishing"&&l.jsxs("button",{onClick:m,disabled:c,className:"inline-flex items-center gap-2 rounded-lg border border-red-400/25 px-3 py-2 text-xs font-black text-red-100 transition hover:border-red-400/60 hover:bg-red-400/10 disabled:opacity-50",children:[c?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):l.jsx(jn,{className:"h-4 w-4"}),"Retirar da fila"]}),f==="approved"&&o.story_status==="needs_review"&&l.jsx("button",{onClick:d,disabled:c,className:"rounded-lg border border-amber-300/25 px-3 py-2 text-xs font-black text-amber-100 hover:border-amber-300/60 disabled:opacity-50",children:"Reenfileirar"})]}),o.last_story_error&&l.jsx("p",{className:"mt-4 rounded-lg border border-amber-300/20 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100/80",children:o.last_story_error}),!v&&l.jsx("p",{className:"mt-4 rounded-lg border border-white/10 bg-white/[.03] p-3 text-xs leading-5 text-white/55",children:"Esta matéria não possui uma fotografia válida para o formato 9:16."})]})]})})}function jj({article:o}){const r=bd(o),c=o.title.length>170?10:o.title.length>130?12:o.title.length>95?14:17;return l.jsxs("div",{children:[l.jsxs("div",{className:"relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/12 bg-[#030305] shadow-2xl","aria-label":"Prévia do Story em proporção 9 por 16",children:[l.jsxs("div",{className:"absolute inset-x-0 top-0 h-[57%] overflow-hidden bg-[#111116]",children:[r?l.jsx("img",{src:o.image_url||"",alt:"",className:"h-full w-full object-cover",loading:"lazy"}):l.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-white/30",children:[l.jsx(S2,{className:"h-8 w-8"}),l.jsx("span",{className:"text-[10px] font-bold",children:"Sem imagem válida"})]}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#030305]"}),l.jsx("img",{src:"/images/braba-news.png",alt:"BRABA NEWS",className:"absolute left-1/2 top-[3%] w-[43%] -translate-x-1/2 object-contain"})]}),l.jsxs("div",{className:"absolute inset-x-0 bottom-0 top-[54%] bg-[#030305] px-[6%] pb-[3%] pt-[4%]",children:[l.jsx("p",{className:"text-[7px] font-black uppercase tracking-[.18em] text-[#ff3155]",children:o.category||"Informação"}),l.jsx("h4",{className:"mt-2 font-black leading-[1.02] tracking-[-.035em] text-white",style:{fontSize:`${c}px`},children:o.title}),l.jsx("div",{className:"mt-2 h-1 w-[37%] bg-gradient-to-r from-[#f8034b] via-[#86152f] to-[#33121d]"}),o.summary&&l.jsx("p",{className:"mt-3 line-clamp-3 text-[9px] leading-[1.45] text-white/80",children:o.summary}),l.jsxs("div",{className:"absolute inset-x-[6%] bottom-[3%] flex items-center justify-between border-t border-white/20 pt-2 text-[7px] text-white/55",children:[l.jsx("strong",{className:"text-white",children:"BRABA NEWS"}),l.jsx("span",{className:"max-w-[48%] truncate",children:o.source_name})]})]})]}),l.jsx("p",{className:"mt-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white/35",children:"Prévia 9:16 · corte exato"})]})}const Ej="verao-premiado-2027-v2",Zs="/docs/proposta-comercial-verao-premiado-2027.pdf",Sj={businessName:"",cnpj:"",segment:"",businessInstagram:"",cep:"",street:"",number:"",complement:"",neighborhood:"",city:"",state:"",responsibleName:"",responsiblePhone:"",cpf:"",radioBriefing:"",motionBriefing:"",sameBriefing:!1,paymentOption:"",contributionType:"",contributionDescription:"",contributionConditions:"",contributionNotes:""},Tv=["Declaro que sou responsável pelo estabelecimento informado ou possuo autorização para representá-lo.","Declaro que li e estou de acordo com as condições comerciais apresentadas na proposta do Verão Premiado 2027.","Estou ciente do investimento selecionado e de que o vale-compras é opcional.","Declaro possuir autorização para disponibilizar os materiais e logomarcas enviados para utilização na campanha.","Declaro que li o aviso de privacidade referente ao tratamento dos meus dados pessoais."];function yt(o){return o.replace(/\D/g,"")}function Aj(o){return yt(o).slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function wj(o){return yt(o).slice(0,14).replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d{1,2})$/,"$1-$2")}function _j(o){const r=yt(o).slice(0,11);return r.length<=10?r.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d)/,"$1-$2"):r.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2")}function Oj(o){return yt(o).slice(0,8).replace(/(\d{5})(\d)/,"$1-$2")}function Tj(o){const r=yt(o);if(r.length!==11||/^(\d)\1+$/.test(r))return!1;const c=d=>{let m=0;for(let v=0;v<d;v+=1)m+=Number(r[v])*(d+1-v);const f=m*10%11;return f===10?0:f};return c(9)===Number(r[9])&&c(10)===Number(r[10])}function Cj(o){const r=yt(o);if(!r)return!0;if(r.length!==14||/^(\d)\1+$/.test(r))return!1;const c=d=>{let m=d.length-7;const v=[...d].reduce((g,N)=>{const E=g+Number(N)*m;return m=m===2?9:m-1,E},0)%11;return v<2?0:11-v};return c(r.slice(0,12))===Number(r[12])&&c(r.slice(0,13))===Number(r[13])}function Rj(o){const r=yt(o);return r.length===11?`***.${r.slice(3,6)}.${r.slice(6,9)}-**`:"Protegido"}const Mj={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SUPABASE_PUBLISHABLE_KEY:"sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M",VITE_SUPABASE_URL:"https://dtmoboiwgqaphlthoexe.supabase.co"};function Cv(o){var c;const r=(c=Mj[o])==null?void 0:c.trim();if(!r)throw new Error(`Configuração ausente: ${o}.`);return r}const Vt=Cv("VITE_SUPABASE_URL"),S0=Cv("VITE_SUPABASE_PUBLISHABLE_KEY"),Rv="verao-premiado-assets";function Sn(o=S0){return{apikey:S0,Authorization:`Bearer ${o}`}}function Dj(o){const r=o.lastIndexOf("."),c=r>=0?o.slice(r).toLowerCase().replace(/[^a-z0-9.]/g,""):"";return`${(r>=0?o.slice(0,r):o).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,55)||"arquivo"}${c}`}function Mv(o){return o.split("/").map(encodeURIComponent).join("/")}async function zj(o,r,c){const d=new Set(["image/png","image/jpeg","application/pdf","image/svg+xml"]);return Promise.all(r.map(async(m,f)=>{if(!d.has(m.type)||m.size>20*1024*1024)throw new Error(`O arquivo “${m.name}” não atende aos formatos ou ao limite de 20 MB.`);const v=`inscricoes/${o}/${c}/${crypto.randomUUID().slice(0,8)}-${f+1}-${Dj(m.name)}`,g=await fetch(`${Vt}/storage/v1/object/${Rv}/${Mv(v)}`,{method:"POST",headers:{...Sn(),"Content-Type":m.type,"cache-control":"3600","x-upsert":"false"},body:m});if(!g.ok){const N=await g.text();throw/row-level security|policy|unauthorized/i.test(N)?new Error("O Storage do logotipo ainda não está liberado. Aplique a migration mais recente do Supabase."):/mime|content.?type/i.test(N)?new Error(`O formato de “${m.name}” não foi aceito pelo Storage.`):new Error(`Não foi possível enviar “${m.name}” (erro ${g.status}).`)}return{path:v,name:m.name,size:m.size,mime_type:m.type,kind:c}}))}async function Uj(o){const r={campaign:"Verão Premiado 2027",period:"02/01/2027 a 27/02/2027",prize:"Moto elétrica Smart Wheel (prevista)",cash_price_brl:250,installment_price_brl:300,installments:"2x de R$ 150,00",optional_voucher_brl:100,legal_notice:"Campanha sujeita à autorização dos órgãos competentes e às condições do regulamento oficial."},c={...o.form,cnpj:yt(o.form.cnpj)||null,cpf:yt(o.form.cpf),businessPhone:"",responsiblePhone:yt(o.form.responsiblePhone),assets:o.assets,termsVersion:Ej,declarations:o.declarations,commercialSnapshot:r},d=await fetch(`${Vt}/rest/v1/rpc/create_verao_premiado_submission`,{method:"POST",headers:{...Sn(),"Content-Type":"application/json"},body:JSON.stringify({p_id:o.id,p_payload:c,p_started_at:new Date(Date.now()-5e3).toISOString(),p_honeypot:""})});if(!d.ok){const v=await d.text();let g=v;try{const N=JSON.parse(v);g=N.message||N.details||v}catch{}throw console.error("Inscrição rejeitada pelo Supabase:",{status:d.status,reason:g}),/INSCRICAO_DUPLICADA/i.test(g)?new Error("Já existe uma inscrição com este CPF ou CNPJ. Fale com a VM Mídias para revisar o cadastro."):/CAMPOS_OBRIGATORIOS/i.test(g)?new Error("Confira o nome do comércio, o segmento e o nome completo do responsável."):/WHATSAPP_INVALIDO/i.test(g)?new Error("Informe um WhatsApp válido com DDD para contato."):/DOCUMENTO_INVALIDO/i.test(g)?new Error("O CPF ou o CNPJ informado não é válido."):/ARQUIVOS_INVALIDOS/i.test(g)?new Error("O logotipo enviado não foi reconhecido. Remova o arquivo e envie novamente."):/ACEITES_INCOMPLETOS/i.test(g)?new Error("Marque todas as declarações e confirme o aceite final."):/TERMOS_INVALIDOS/i.test(g)?new Error("A página foi atualizada enquanto você preenchia o formulário. Recarregue e tente novamente."):/FORMULARIO_INVALIDO/i.test(g)?new Error("A sessão do formulário expirou. Recarregue a página e envie novamente."):/payment_option|check constraint/i.test(g)?new Error("Selecione novamente a forma de pagamento."):new Error(`Não foi possível concluir a inscrição (erro ${d.status}). Tente novamente ou fale com a VM Mídias.`)}const m=await d.json(),f=Array.isArray(m)?m[0]:m;if(!(f!=null&&f.protocol)||!f.accepted_at)throw new Error("A inscrição foi recebida, mas a confirmação retornou incompleta. Fale com a VM Mídias antes de enviar novamente.");return f}async function qj(o){const r=await fetch(`${Vt}/rest/v1/verao_premiado_submissions?select=*&order=created_at.desc`,{headers:Sn(o.access_token),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar as inscrições. Aplique a migração da campanha.");return await r.json()}async function yd(o,r,c){if(!(await fetch(`${Vt}/rest/v1/verao_premiado_submissions?id=eq.${r}`,{method:"PATCH",headers:{...Sn(o.access_token),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(c)})).ok)throw new Error("Não foi possível atualizar a inscrição.")}async function Lj(o,r){if(!(await fetch(`${Vt}/rest/v1/verao_premiado_submissions?id=eq.${r}`,{method:"DELETE",headers:{...Sn(o.access_token),Prefer:"return=minimal"}})).ok)throw new Error("Não foi possível excluir a inscrição.")}async function kj(o){const r=await fetch(`${Vt}/rest/v1/verao_premiado_screens?select=*&order=name.asc`,{headers:Sn(o.access_token),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar as telas.");return await r.json()}async function A0(o,r){const c=!!r.id;if(!(await fetch(`${Vt}/rest/v1/verao_premiado_screens${c?`?id=eq.${r.id}`:""}`,{method:c?"PATCH":"POST",headers:{...Sn(o.access_token),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(r)})).ok)throw new Error("Não foi possível salvar a tela.")}async function Bj(o,r){const c=await fetch(`${Vt}/storage/v1/object/sign/${Rv}/${Mv(r)}`,{method:"POST",headers:{...Sn(o.access_token),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:3600})});if(!c.ok)throw new Error("Não foi possível abrir o arquivo.");const d=await c.json(),m=d.signedURL||d.signedUrl;return m.startsWith("http")?m:`${Vt}/storage/v1${m}`}const w0=[[xv,"Kit promocional","1.000 cupons, cartaz e identificação oficial."],[aN,"Rádio Braba","Sua marca ganha voz na FM 104,9."],[fv,"Tela VM Mídias","Vídeo Motion de 20s com exibição diária."],[Xu,"Premiação coletiva","Seu comércio participa da ação da cidade."]];function Hj({onJoin:o}){return b.useEffect(()=>{document.body.classList.add("vp-motion-allowed");const r=[...document.querySelectorAll("[data-vp-reveal]")],c=new IntersectionObserver(h=>h.forEach(x=>{x.isIntersecting&&(x.target.classList.add("is-visible"),c.unobserve(x.target))}),{rootMargin:"0px 0px -10%",threshold:.14});r.forEach(h=>c.observe(h));const d=[...document.querySelectorAll("[data-vp-parallax]")],m=[...document.querySelectorAll(".vp-story-scene")];let f=0,v=0,g=0;const N=()=>{f=0;const h=window.innerHeight/2;m.forEach(x=>{const M=x.getBoundingClientRect(),V=Math.max(-1,Math.min(1,(h-(M.top+M.height/2))/window.innerHeight));x.style.setProperty("--vp-scene-y",`${(V*90).toFixed(1)}px`),x.style.setProperty("--vp-scene-x",`${(v*34).toFixed(1)}px`),x.classList.toggle("is-scene-active",M.top<window.innerHeight*.72&&M.bottom>window.innerHeight*.28)}),d.forEach(x=>{const M=x.getBoundingClientRect();if(M.bottom<-200||M.top>window.innerHeight+200)return;const V=Number(x.dataset.vpParallax||.08),k=Math.max(-220,Math.min(220,(h-(M.top+M.height/2))*V*1.35)),B=v*V*190,q=g*V*110;x.style.setProperty("--vp-parallax-x",`${B.toFixed(1)}px`),x.style.setProperty("--vp-parallax-y",`${(k+q).toFixed(1)}px`)})},E=()=>{f||(f=window.requestAnimationFrame(N))},j=h=>{v=h.clientX/window.innerWidth-.5,g=h.clientY/window.innerHeight-.5,E()};return N(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E),window.addEventListener("pointermove",j,{passive:!0}),()=>{document.body.classList.remove("vp-motion-allowed"),c.disconnect(),window.removeEventListener("scroll",E),window.removeEventListener("resize",E),window.removeEventListener("pointermove",j),f&&window.cancelAnimationFrame(f)}},[]),l.jsxs("div",{className:"vp-story",children:[l.jsx("nav",{className:"vp-story-rail","aria-label":"Seções da proposta",children:Array.from({length:7},(r,c)=>l.jsx("a",{href:`#proposta-${c+1}`,"aria-label":`Ir para a seção ${c+1}`},c))}),l.jsxs("section",{id:"proposta-1",className:"vp-story-scene vp-story-hero",children:[l.jsx("div",{className:"vp-hero-sky","data-vp-parallax":"0.045"}),l.jsx("div",{className:"vp-sun-glow","data-vp-parallax":"0.12"}),l.jsxs("div",{className:"vp-scene-shell vp-hero-grid",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h1",{children:["Verão",l.jsx("br",{}),l.jsx("em",{children:"Premiado"}),l.jsx("span",{children:"2027"})]}),l.jsx("p",{className:"vp-lead",children:"Sua marca no centro da campanha que conecta Capela do Alto, Rádio Braba FM e as telas da VM Mídias."}),l.jsxs("div",{className:"vp-hero-actions",children:[l.jsx("button",{onClick:o,className:"vp-primary-cta",children:"Quero participar"}),l.jsxs("a",{href:Zs,target:"_blank",className:"vp-secondary-cta",children:[l.jsx(Ji,{})," Ver proposta"]})]}),l.jsxs("div",{className:"vp-hero-facts",children:[l.jsxs("span",{children:[l.jsx(Qy,{})," 02 jan. a 27 fev. 2027"]}),l.jsxs("span",{children:[l.jsx(Iu,{})," Moto elétrica Smart Wheel"]})]})]}),l.jsxs("div",{className:"vp-art-stage vp-hero-assets","data-vp-reveal":!0,children:[l.jsx("div",{className:"vp-orbit vp-orbit-one"}),l.jsx("div",{className:"vp-orbit vp-orbit-two"}),l.jsx("img",{"data-vp-parallax":"0.2",src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado da VM Mídias",className:"vp-logo-cutout vp-logo-hero"}),l.jsx("img",{"data-vp-parallax":"0.32",src:"/images/verao-premiado/moto-cutout-v2.png",alt:"Moto elétrica Smart Wheel, prêmio principal previsto",className:"vp-moto-cutout vp-moto-hero"})]})]})]}),l.jsx("section",{id:"proposta-2",className:"vp-story-scene vp-scene-two",children:l.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-benefit-orbit",children:[l.jsx("div",{className:"vp-orbit-ring vp-ring-one","data-vp-parallax":"0.12"}),l.jsx("div",{className:"vp-orbit-ring vp-ring-two","data-vp-parallax":"0.2"}),l.jsxs("div",{className:"vp-orbit-core","data-vp-parallax":"0.28",children:[l.jsx(v0,{}),l.jsx("strong",{children:"4"}),l.jsx("span",{children:"benefícios"})]}),w0.map(([r,c],d)=>l.jsxs("div",{className:`vp-orbit-item vp-orbit-item-${d+1}`,"data-vp-parallax":String(.15+d*.04),children:[l.jsx(r,{}),l.jsx("span",{children:c})]},c))]})}),l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Uma campanha.",l.jsx("br",{}),l.jsx("em",{children:"Quatro frentes."})]}),l.jsx("p",{children:"Um pacote pensado para colocar seu comércio em contato com clientes dentro da loja, no rádio, nas telas e na premiação coletiva."}),l.jsx("div",{className:"vp-benefit-grid",children:w0.map(([r,c,d],m)=>l.jsxs("article",{style:{"--vp-delay":`${m*90}ms`},"data-vp-reveal":!0,children:[l.jsx(r,{}),l.jsxs("div",{children:[l.jsx("strong",{children:c}),l.jsx("span",{children:d})]})]},c))})]})]})}),l.jsx("section",{id:"proposta-3",className:"vp-story-scene vp-scene-three",children:l.jsxs("div",{className:"vp-scene-shell vp-split-grid vp-reverse",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsx("div",{className:"vp-display-number",children:"1.000"}),l.jsxs("h2",{children:["motivos para o cliente ",l.jsx("em",{children:"lembrar de você."})]}),l.jsx("p",{children:"Seu estabelecimento recebe materiais prontos para divulgar a campanha, envolver o público e transformar participação em presença de marca."}),l.jsxs("ul",{className:"vp-feature-list",children:[l.jsx("li",{children:"Cupons promocionais"}),l.jsx("li",{children:"Cartaz com sua logomarca"}),l.jsx("li",{children:"Identificação oficial de participante"})]})]}),l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-coupon-stack","aria-label":"Exemplo conceitual dos cupons promocionais",children:[["Cliente premiado","Comércio em destaque","Boa sorte!"].map((r,c)=>l.jsxs("article",{className:`vp-coupon-card vp-coupon-card-${c+1}`,"data-vp-parallax":String(.18+c*.06),children:[l.jsxs("div",{children:[l.jsx(v0,{}),l.jsx("span",{children:"Verão Premiado"})]}),l.jsx("strong",{children:"Cupom de sorteio"}),l.jsx("p",{children:r}),l.jsx("i",{})]},r)),l.jsxs("div",{className:"vp-coupon-seal","data-vp-parallax":"0.34",children:[l.jsx(xv,{}),l.jsx("b",{children:"1.000"}),l.jsx("span",{children:"cupons"})]})]})})]})}),l.jsxs("section",{id:"proposta-4",className:"vp-story-scene vp-scene-four",children:[l.jsx("div",{className:"vp-radio-grid","aria-hidden":"true"}),l.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-radio-stage",children:[l.jsx("div",{className:"vp-radio-halo","data-vp-parallax":"0.1"}),l.jsxs("div",{className:"vp-studio-screen","data-vp-parallax":"0.18",children:[l.jsx("span",{children:"NO AR"}),l.jsx("strong",{children:"104,9"}),l.jsx("small",{children:"Rádio Braba FM"})]}),l.jsxs("div",{className:"vp-microphone","data-vp-parallax":"0.3",children:[l.jsx("div",{children:l.jsx(V2,{})}),l.jsx("i",{}),l.jsx("span",{})]}),l.jsx("div",{className:"vp-waveform","aria-hidden":"true",children:Array.from({length:24},(r,c)=>l.jsx("i",{style:{"--wave":`${18+c*17%62}px`,"--vp-delay":`${c*45}ms`}},c))})]})}),l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Sua marca também ",l.jsx("em",{children:"ganha voz."})]}),l.jsx("p",{children:"Durante o período da campanha, seu estabelecimento entra na programação da rádio com uma mensagem produzida a partir do seu briefing."}),l.jsxs("div",{className:"vp-quote-card",children:[l.jsx("span",{children:"“"}),l.jsx("p",{children:"Você conta o que deseja divulgar. A equipe transforma a ideia em uma mensagem clara para o público regional."})]})]})]})]}),l.jsxs("section",{id:"proposta-5",className:"vp-story-scene vp-scene-five",children:[l.jsx("div",{className:"vp-screen-glow","data-vp-parallax":"0.08"}),l.jsxs("div",{className:"vp-scene-shell vp-split-grid vp-reverse",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Onde a cidade passa, ",l.jsx("em",{children:"sua marca aparece."})]}),l.jsx("p",{children:"Escolha uma das telas cadastradas para exibir um vídeo Motion produzido para o seu comércio durante o período contratado."}),l.jsxs("div",{className:"vp-stat-row",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"01"}),l.jsx("span",{children:"tela à escolha"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"20s"}),l.jsx("span",{children:"vídeo Motion"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Diária"}),l.jsx("span",{children:"exibição"})]})]})]}),l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-screen-stage",children:[l.jsxs("div",{className:"vp-digital-screen","data-vp-parallax":"0.18",children:[l.jsxs("div",{className:"vp-screen-content",children:[l.jsx("img",{src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado 2027"}),l.jsxs("span",{children:[l.jsx(J2,{})," Motion de 20 segundos"]})]}),l.jsx("i",{})]}),l.jsxs("div",{className:"vp-screen-card vp-screen-card-one","data-vp-parallax":"0.34",children:[l.jsx(gv,{}),l.jsx("span",{children:"Comércio local"})]}),l.jsxs("div",{className:"vp-screen-card vp-screen-card-two","data-vp-parallax":"0.26",children:[l.jsx(fv,{}),l.jsx("span",{children:"Exibição diária"})]}),l.jsxs("div",{className:"vp-screen-card vp-screen-card-three","data-vp-parallax":"0.4",children:[l.jsx(vv,{}),l.jsx("span",{children:"Alta visibilidade"})]})]})})]})]}),l.jsx("section",{id:"proposta-6",className:"vp-story-scene vp-scene-six",children:l.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-prize-stage",children:[l.jsx("div",{className:"vp-prize-sun","data-vp-parallax":"0.12"}),l.jsx("img",{"data-vp-parallax":"0.3",src:"/images/verao-premiado/moto-cutout-v2.png",alt:"Moto elétrica Smart Wheel",className:"vp-moto-cutout vp-moto-prize"}),l.jsxs("div",{className:"vp-prize-ribbon","data-vp-parallax":"0.42",children:[l.jsx(Xu,{}),l.jsx("strong",{children:"Prêmio principal previsto"})]})]})}),l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Quando o comércio participa junto, ",l.jsx("em",{children:"toda a cidade ganha destaque."})]}),l.jsx("p",{children:"O comércio pode disponibilizar um vale-compras para fortalecer a premiação coletiva. Essa contribuição é opcional e será formalizada conforme o regulamento."}),l.jsxs("div",{className:"vp-prize-card",children:[l.jsx("span",{children:"Prêmio principal previsto"}),l.jsxs("strong",{children:["Moto elétrica",l.jsx("br",{}),"Smart Wheel"]})]})]})]})}),l.jsxs("section",{id:"proposta-7",className:"vp-story-scene vp-scene-seven",children:[l.jsx("div",{className:"vp-final-rays","data-vp-parallax":"0.04"}),l.jsxs("div",{className:"vp-scene-shell vp-final-grid",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Uma cota que cabe no negócio e ",l.jsx("em",{children:"aparece na cidade."})]}),l.jsxs("div",{className:"vp-price-cards",children:[l.jsxs("article",{children:[l.jsx("span",{children:"À vista"}),l.jsxs("strong",{children:["R$ 250",l.jsx("small",{children:",00"})]})]}),l.jsx("b",{children:"ou"}),l.jsxs("article",{children:[l.jsx("span",{children:"Parcelado"}),l.jsxs("strong",{children:["2x R$ 150",l.jsx("small",{children:",00"})]}),l.jsx("small",{children:"Total: R$ 300,00"})]})]}),l.jsxs("p",{className:"vp-contribution-note",children:[l.jsx(Iu,{})," Vale-compras opcional para a premiação coletiva."]}),l.jsx("button",{onClick:o,className:"vp-primary-cta vp-final-cta",children:"Quero colocar meu comércio em destaque"})]}),l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-finale-stage",children:[l.jsx("img",{"data-vp-parallax":"0.2",src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado da VM Mídias",className:"vp-logo-cutout vp-logo-final"}),l.jsx("div",{className:"vp-finale-gift vp-finale-gift-one","data-vp-parallax":"0.38",children:l.jsx(Iu,{})}),l.jsx("div",{className:"vp-finale-gift vp-finale-gift-two","data-vp-parallax":"0.27",children:l.jsx(Xu,{})}),l.jsx("div",{className:"vp-finale-gift vp-finale-gift-three","data-vp-parallax":"0.46",children:l.jsx(NN,{})})]})})]})]})]})}const Dv=["Dados","Logotipo","Publicidade","Pagamento","Vale-compras","Revisão"],zv="mt-2 min-h-14 w-full rounded-2xl border border-white/12 bg-white/[0.045] px-4 text-base text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/22 focus:border-[#ffca0a]/70 focus:bg-white/[0.065] focus:ring-4 focus:ring-[#ffca0a]/10",Ij="block text-sm font-extrabold text-white/78";function Vj(){const[o,r]=b.useState(Sj),[c,d]=b.useState(0),[m,f]=b.useState(null),[v,g]=b.useState(Tv.map(()=>!1)),[N,E]=b.useState(!1),[j,h]=b.useState(""),[x,M]=b.useState(!1),[V,k]=b.useState(0),[B,q]=b.useState(null),Y=b.useRef(null),G=b.useMemo(()=>m&&m.type.startsWith("image/")&&m.type!=="image/svg+xml"?URL.createObjectURL(m):"",[m]);b.useEffect(()=>{document.title="Verão Premiado 2027 | VM Mídias"},[]),b.useEffect(()=>()=>{G&&URL.revokeObjectURL(G)},[G]);const oe=(P,H)=>r(F=>({...F,[P]:H})),L=P=>{switch(P){case 0:return o.businessName.trim().length<2?"Informe o nome completo do comércio.":o.segment.trim().length<2?"Informe o segmento comercial.":!o.cep.trim()||!o.street.trim()||!o.number.trim()||!o.neighborhood.trim()||!o.city.trim()||!o.state.trim()?"Preencha o endereço completo do comércio.":o.responsibleName.trim().length<4?"Informe o nome completo do responsável.":o.responsiblePhone.replace(/\D/g,"").length<10?"Informe um WhatsApp válido com DDD.":Tj(o.cpf)?Cj(o.cnpj)?"":"Informe um CNPJ válido ou deixe o campo em branco.":"Informe um CPF válido para o responsável.";case 1:return m?"":"Envie a logomarca do estabelecimento.";case 2:return"";case 3:return o.paymentOption?"":"Escolha a modalidade de pagamento.";case 4:return"";default:return""}},se=P=>{if(P===1){const H=L(c);if(H){h(H);return}}h(""),d(H=>Math.max(0,Math.min(5,H+P))),window.setTimeout(()=>{var H;return(H=Y.current)==null?void 0:H.scrollIntoView({behavior:"smooth",block:"start"})},0)},K=P=>{var F;const H=((F=P.target.files)==null?void 0:F[0])||null;if(H&&H.size>20*1024*1024){h("A logomarca deve ter no máximo 20 MB.");return}f(H),h("")},W=async P=>{P.preventDefault();const H=Array.from({length:5},(ee,ce)=>L(ce)).find(Boolean);if(H){h(H);return}if(v.some(ee=>!ee)||!N){h("Marque todas as declarações e o aceite final para concluir.");return}if(!m)return;M(!0),h(""),k(0);const F=crypto.randomUUID();try{const ee=[{file:m,kind:"logo"}],ce=[];for(let me=0;me<ee.length;me+=1){const U=await zj(F,[ee[me].file],ee[me].kind);ce.push(...U),k(Math.round((me+1)/ee.length*80))}const Ie=await Uj({id:F,form:o,assets:ce,declarations:v});k(100),q(Ie),window.scrollTo({top:0,behavior:"smooth"})}catch(ee){h(ee instanceof Error?ee.message:"Não foi possível enviar a inscrição.")}finally{M(!1)}};return B?l.jsx(eE,{confirmation:B,form:o}):l.jsxs("div",{className:"min-h-screen bg-[#050305] text-white selection:bg-[#ffcc00] selection:text-black",children:[l.jsx(Pj,{onJoin:()=>{var P;return(P=Y.current)==null?void 0:P.scrollIntoView({behavior:"smooth"})}}),l.jsxs("main",{children:[l.jsx(Hj,{onJoin:()=>{var P;return(P=Y.current)==null?void 0:P.scrollIntoView({behavior:"smooth"})}}),l.jsx("section",{ref:Y,id:"inscricao",className:"vp-form-section scroll-mt-20 border-t border-white/10 px-4 py-24 sm:px-8 lg:py-32",children:l.jsx("div",{className:"mx-auto max-w-7xl",children:l.jsxs("div",{className:"vp-form-layout",children:[l.jsx($j,{step:c}),l.jsx("div",{className:"vp-form-card",children:l.jsxs("form",{onSubmit:W,className:"p-5 sm:p-9 lg:p-11",children:[l.jsxs("div",{className:"mb-8 border-b border-white/8 pb-7",children:[l.jsxs("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:["Etapa ",c+1," de ",Dv.length]}),l.jsx("h3",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:Gj[c]}),l.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-6 text-white/50",children:Yj[c]})]}),l.jsxs("div",{className:"vp-form-step",children:[c===0&&l.jsx(Xj,{form:o,setField:oe}),c===1&&l.jsx(Zj,{file:m,preview:G||"",onChange:K,onRemove:()=>f(null)}),c===2&&l.jsx(Fj,{form:o,setField:oe}),c===3&&l.jsx(Kj,{selected:o.paymentOption,onSelect:P=>oe("paymentOption",P)}),c===4&&l.jsx(Jj,{form:o,setField:oe,onSkip:()=>{oe("contributionType",""),oe("contributionDescription",""),se(1)}}),c===5&&l.jsx(Wj,{form:o,logo:m,declarations:v,setDeclarations:g,finalConsent:N,setFinalConsent:E})]},c),j&&l.jsx("div",{role:"alert",className:"mt-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100",children:j}),x&&l.jsxs("div",{className:"mt-6",children:[l.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[l.jsx("span",{children:"Enviando inscrição com segurança"}),l.jsxs("span",{children:[V,"%"]})]}),l.jsx("div",{className:"mt-2 h-2 overflow-hidden rounded-full bg-white/10",children:l.jsx("div",{className:"h-full bg-[#ffcc0b] transition-all",style:{width:`${V}%`}})})]}),l.jsxs("div",{className:"mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between",children:[l.jsx("button",{type:"button",disabled:c===0||x,onClick:()=>se(-1),className:"vp-form-nav-button border border-white/15 text-white/70 disabled:opacity-30",children:"Voltar"}),c<5?l.jsx("button",{type:"button",onClick:()=>se(1),className:"vp-form-nav-button bg-[#f20b2f] text-white shadow-[0_14px_36px_rgba(248,3,45,.28)]",children:"Continuar"}):l.jsxs("button",{disabled:x,className:"vp-form-nav-button inline-flex min-h-14 items-center justify-center gap-2 bg-[#ffcc0b] text-black disabled:opacity-55",children:[x?l.jsx(fa,{className:"h-5 w-5 animate-spin"}):l.jsx(En,{className:"h-5 w-5"}),"Eu concordo e quero participar"]})]})]})})]})})})]}),l.jsx(Qj,{})]})}const Gj=["Dados do comércio","Envie o logotipo","Publicidade do seu negócio","Forma de pagamento","Vale-compras","Revise e aceite os termos"],Yj=["Informe os dados do estabelecimento e do responsável.","Utilizaremos a marca nos materiais oficiais da campanha.","As duas informações são opcionais e podem ser preenchidas de forma resumida.","Escolha entre pagamento à vista ou parcelado.","Esta etapa é opcional. Você pode informar o vale-compras ou pular.","Confira os dados principais e registre seu aceite."];function Pj({onJoin:o}){return l.jsx("header",{className:"pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6",children:l.jsxs("div",{className:"pointer-events-auto mx-auto flex min-h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/12 bg-[#090506]/82 px-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-6",children:[l.jsx("a",{href:"/","aria-label":"Voltar ao site da VM Mídias",children:l.jsx(Za,{size:"sm"})}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("a",{href:Zs,target:"_blank",className:"hidden rounded-full border border-white/12 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/60 transition hover:border-white/30 hover:text-white sm:inline-flex",children:"Ver proposta"}),l.jsx("button",{onClick:o,className:"rounded-full bg-[#f20b2f] px-5 py-3 text-xs font-black uppercase tracking-wide shadow-[0_10px_30px_rgba(248,3,45,.32)] transition hover:-translate-y-0.5 hover:bg-[#ff2448]",children:"Quero participar"})]})]})})}function Qj(){return l.jsx("footer",{className:"border-t border-white/10 bg-black px-5 py-10",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between",children:[l.jsxs("div",{children:[l.jsx(Za,{size:"sm"}),l.jsxs("p",{className:"mt-3",children:["Capela do Alto - SP · ",De.company.whatsappFormatted]})]}),l.jsxs("div",{className:"flex flex-wrap gap-5",children:[l.jsx("a",{href:"/politica-de-privacidade",className:"hover:text-white",children:"Aviso de privacidade"}),l.jsx("a",{href:Zs,target:"_blank",className:"hover:text-white",children:"Proposta comercial"}),l.jsx("a",{href:`https://wa.me/${De.company.whatsappRaw}`,target:"_blank",rel:"noreferrer",className:"hover:text-white",children:"Atendimento oficial"})]})]})})}function $j({step:o}){return l.jsx("aside",{className:"vp-form-progress","aria-label":"Progresso da inscrição",children:l.jsx("ol",{children:Dv.map((r,c)=>l.jsxs("li",{className:c===o?"is-current":c<o?"is-done":"",children:[l.jsx("b",{children:c<o?l.jsx(En,{className:"h-3.5 w-3.5"}):c+1}),l.jsx("span",{children:r})]},r))})})}function ca({label:o,required:r,children:c}){return l.jsxs("label",{className:Ij,children:[o,r&&l.jsx("span",{className:"text-[#ffcc0b]",children:" *"}),c]})}function ba(o){return l.jsx("input",{...o,className:zv})}function _0(o){return l.jsx("textarea",{...o,className:`${zv} min-h-36 resize-y py-3`})}function Xj({form:o,setField:r}){return l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(ca,{label:"Nome do comércio",required:!0,children:l.jsx(ba,{value:o.businessName,onChange:c=>r("businessName",c.target.value)})}),l.jsx(ca,{label:"CNPJ",children:l.jsx(ba,{inputMode:"numeric",value:o.cnpj,onChange:c=>r("cnpj",wj(c.target.value)),placeholder:"00.000.000/0000-00"})}),l.jsx(ca,{label:"Segmento comercial",required:!0,children:l.jsx(ba,{value:o.segment,onChange:c=>r("segment",c.target.value),placeholder:"Ex.: roupas, alimentação, serviços"})}),l.jsx(ca,{label:"Instagram",children:l.jsx(ba,{value:o.businessInstagram,onChange:c=>r("businessInstagram",c.target.value),placeholder:"@seucomercio"})}),l.jsx(ca,{label:"CEP",required:!0,children:l.jsx(ba,{inputMode:"numeric",value:o.cep,onChange:c=>r("cep",Oj(c.target.value))})}),l.jsx(ca,{label:"Rua ou avenida",required:!0,children:l.jsx(ba,{value:o.street,onChange:c=>r("street",c.target.value)})}),l.jsx(ca,{label:"Número",required:!0,children:l.jsx(ba,{value:o.number,onChange:c=>r("number",c.target.value)})}),l.jsx(ca,{label:"Complemento",children:l.jsx(ba,{value:o.complement,onChange:c=>r("complement",c.target.value)})}),l.jsx(ca,{label:"Bairro",required:!0,children:l.jsx(ba,{value:o.neighborhood,onChange:c=>r("neighborhood",c.target.value)})}),l.jsxs("div",{className:"grid grid-cols-[1.5fr_1fr] gap-3",children:[l.jsx(ca,{label:"Cidade",required:!0,children:l.jsx(ba,{value:o.city,onChange:c=>r("city",c.target.value)})}),l.jsx(ca,{label:"Estado",required:!0,children:l.jsx(ba,{value:o.state,onChange:c=>r("state",c.target.value)})})]}),l.jsx("div",{className:"sm:col-span-2 mt-2 border-t border-white/10 pt-6",children:l.jsx("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:"Responsável"})}),l.jsx(ca,{label:"Nome do responsável",required:!0,children:l.jsx(ba,{value:o.responsibleName,onChange:c=>r("responsibleName",c.target.value)})}),l.jsx(ca,{label:"WhatsApp para contato",required:!0,children:l.jsx(ba,{type:"tel",inputMode:"tel",autoComplete:"tel",value:o.responsiblePhone,onChange:c=>r("responsiblePhone",_j(c.target.value)),placeholder:"(15) 99999-9999"})}),l.jsx(ca,{label:"CPF do responsável",required:!0,children:l.jsx(ba,{inputMode:"numeric",value:o.cpf,onChange:c=>r("cpf",Aj(c.target.value)),placeholder:"000.000.000-00"})})]})}function Zj({file:o,preview:r,onChange:c,onRemove:d}){return l.jsxs("div",{children:[l.jsx("p",{className:"mb-5 text-sm leading-6 text-white/55",children:"Utilizaremos sua logomarca para personalizar os materiais oficiais da campanha e produzir suas peças publicitárias."}),o?l.jsxs("div",{className:"flex items-center gap-4 rounded-2xl border border-[#ffcc0b]/30 bg-[#ffcc0b]/5 p-4",children:[r?l.jsx("img",{src:r,alt:"Pré-visualização da logomarca",className:"h-24 w-24 rounded-xl bg-white object-contain p-2"}):l.jsx(p2,{className:"h-14 w-14 text-[#ffcc0b]"}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("p",{className:"truncate font-bold",children:o.name}),l.jsxs("p",{className:"mt-1 text-sm text-white/45",children:[(o.size/1024/1024).toFixed(2)," MB"]})]}),l.jsx("button",{type:"button",onClick:d,"aria-label":"Remover arquivo",className:"rounded-lg border border-white/15 p-3",children:l.jsx(jn,{className:"h-5 w-5"})})]}):l.jsxs("label",{className:"flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/18 bg-black/20 p-8 text-center hover:border-[#ffcc0b]/60",children:[l.jsx(wN,{className:"h-10 w-10 text-[#ffcc0b]"}),l.jsx("span",{className:"mt-4 text-lg font-black",children:"Selecione a logomarca"}),l.jsx("span",{className:"mt-2 text-sm text-white/45",children:"PNG, JPG, JPEG, PDF ou SVG · até 20 MB"}),l.jsx("input",{type:"file",accept:".png,.jpg,.jpeg,.pdf,.svg,image/png,image/jpeg,application/pdf,image/svg+xml",className:"sr-only",onChange:c})]})]})}function Fj({form:o,setField:r}){return l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(ca,{label:"Publicidade na Rádio Braba (opcional)",children:l.jsx(_0,{value:o.radioBriefing,maxLength:1200,onChange:c=>r("radioBriefing",c.target.value),placeholder:"O que gostaria de divulgar na rádio?"})}),l.jsx(ca,{label:"Publicidade no vídeo de 20 segundos (opcional)",children:l.jsx(_0,{value:o.motionBriefing,maxLength:1200,onChange:c=>r("motionBriefing",c.target.value),placeholder:"Qual mensagem gostaria de destacar no vídeo?"})}),l.jsx("p",{className:"sm:col-span-2 text-sm leading-6 text-white/45",children:"Você pode preencher uma, as duas ou nenhuma opção. A equipe da VM Mídias poderá alinhar os detalhes posteriormente."})]})}function Kj({selected:o,onSelect:r}){return l.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[[{id:"avista",title:"Pagamento à vista",price:"R$ 250",note:"Valor total à vista"},{id:"parcelado",title:"Pagamento parcelado",price:"2x de R$ 150",note:"Total de R$ 300"}].map(c=>l.jsxs("button",{type:"button",onClick:()=>r(c.id),className:`rounded-2xl border p-6 text-left transition ${o===c.id?"border-[#ffcc0b] bg-[#ffcc0b]/8 shadow-[0_0_0_3px_rgba(255,204,11,.08)]":"border-white/12 bg-black/20 hover:border-white/30"}`,children:[l.jsx("span",{className:"text-sm font-black uppercase text-white/50",children:c.title}),l.jsx("strong",{className:"mt-3 block text-3xl",children:c.price}),l.jsx("span",{className:"mt-2 block text-sm text-white/45",children:c.note})]},c.id)),l.jsx("p",{className:"sm:col-span-2 text-sm leading-6 text-white/45",children:"A página não realiza cobrança automática. Datas e vencimentos serão confirmados pela equipe da VM Mídias."})]})}function Jj({form:o,setField:r,onSkip:c}){return l.jsxs("div",{children:[l.jsx(ca,{label:"Descrição do vale-compras (opcional)",children:l.jsx(ba,{value:o.contributionDescription,onChange:d=>{r("contributionDescription",d.target.value),r("contributionType",d.target.value.trim()?"vale_compra":"")},placeholder:"Ex.: vale-compras de R$ 100"})}),l.jsx("p",{className:"mt-3 text-sm leading-6 text-white/45",children:"Se não quiser disponibilizar um vale-compras, pule esta etapa."}),l.jsx("button",{type:"button",onClick:c,className:"mt-6 rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase text-white/70 transition hover:border-white/35 hover:text-white",children:"Pular esta etapa"})]})}function Wj({form:o,logo:r,declarations:c,setDeclarations:d,finalConsent:m,setFinalConsent:f}){const v=[["Estabelecimento",o.businessName],["Responsável",o.responsibleName],["WhatsApp",o.responsiblePhone],["CPF",Rj(o.cpf)],["Logotipo",(r==null?void 0:r.name)||"Não enviado"],["Pagamento",o.paymentOption==="avista"?"R$ 250,00 à vista":"2x de R$ 150,00 (total R$ 300,00)"],["Vale-compras",o.contributionDescription||"Não informado"]];return l.jsxs("div",{children:[l.jsx("div",{className:"divide-y divide-white/8 rounded-2xl border border-white/10 bg-black/20",children:v.map(([g,N])=>l.jsxs("div",{className:"grid gap-2 p-4 sm:grid-cols-[140px_1fr] sm:items-start",children:[l.jsx("strong",{className:"text-sm text-white/45",children:g}),l.jsx("span",{className:"text-sm leading-6",children:N})]},g))}),l.jsx("div",{className:"mt-7 rounded-2xl border border-[#ffcc0b]/25 bg-[#ffcc0b]/5 p-5",children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(md,{className:"mt-1 h-6 w-6 shrink-0 text-[#ffcc0b]"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black",children:"Termos de adesão - Verão Premiado 2027"}),l.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:"O aceite registra data, horário, versão dos termos, declarações, responsável e uma referência imutável das condições comerciais."}),l.jsxs("a",{href:Zs,target:"_blank",className:"mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#ffcc0b]",children:[l.jsx(Ji,{className:"h-4 w-4"}),"Ler e baixar a proposta comercial"]})]})]})}),l.jsx("div",{className:"mt-6 space-y-3",children:Tv.map((g,N)=>l.jsxs("label",{className:"flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 text-sm leading-6",children:[l.jsx("input",{type:"checkbox",checked:c[N],onChange:E=>d(c.map((j,h)=>h===N?E.target.checked:j)),className:"mt-1 h-5 w-5 shrink-0 accent-[#ffcc0b]"}),g]},g))}),l.jsxs("label",{className:"mt-5 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#ffcc0b]/45 bg-[#ffcc0b]/7 p-5 font-black",children:[l.jsx("input",{type:"checkbox",checked:m,onChange:g=>f(g.target.checked),className:"h-6 w-6 shrink-0 accent-[#ffcc0b]"}),"Eu li e concordo com os termos de adesão ao Verão Premiado 2027."]})]})}function eE({confirmation:o,form:r}){const c=new Date(o.accepted_at),d=Number.isNaN(c.getTime())?"Registrada com sucesso":new Intl.DateTimeFormat("pt-BR",{dateStyle:"long",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(c);return l.jsx("div",{className:"min-h-screen bg-[radial-gradient(circle_at_top,rgba(242,11,47,.2),transparent_38%),#050305] px-5 py-12 text-white",children:l.jsxs("main",{className:"mx-auto max-w-2xl",children:[l.jsx(Za,{size:"md"}),l.jsxs("div",{className:"mt-10 rounded-3xl border border-white/12 bg-[#0c080a] p-6 sm:p-10",children:[l.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-black",children:l.jsx(En,{className:"h-7 w-7"})}),l.jsx("h1",{className:"mt-6 text-4xl font-black sm:text-5xl",children:"Recebemos sua inscrição!"}),l.jsx("p",{className:"mt-4 leading-7 text-white/60",children:"Obrigado por fazer parte do Verão Premiado 2027 da VM Mídias. Nossa equipe irá conferir suas informações e dar continuidade ao processo de adesão."}),l.jsx("dl",{className:"mt-8 divide-y divide-white/10 rounded-2xl border border-white/10",children:[["Comércio",r.businessName],["Protocolo",o.protocol],["Data da inscrição",d],["Forma de pagamento",r.paymentOption==="avista"?"À vista - R$ 250,00":"Parcelado - 2x de R$ 150,00"],["Status","Recebida - aguardando análise"]].map(([m,f])=>l.jsxs("div",{className:"grid gap-1 p-4 sm:grid-cols-[160px_1fr]",children:[l.jsx("dt",{className:"text-sm text-white/45",children:m}),l.jsx("dd",{className:"font-bold",children:f})]},m))}),l.jsxs("div",{className:"mt-7 rounded-xl bg-white/5 p-5",children:[l.jsx("p",{className:"font-black",children:"Próximos passos"}),l.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:"A equipe validará os dados, os materiais e a contribuição. Depois entrará em contato pelo canal informado. O recebimento não confirma pagamento nem aprovação definitiva."})]}),l.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row",children:[l.jsx("a",{href:`https://wa.me/${De.company.whatsappRaw}?text=${encodeURIComponent(`Olá! Minha inscrição no Verão Premiado 2027 é ${o.protocol}.`)}`,target:"_blank",rel:"noreferrer",className:"inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f20b2f] px-5 text-sm font-black uppercase",children:"Falar com a VM Mídias"}),l.jsx("a",{href:"/",className:"inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold",children:"Voltar ao site"})]})]})]})})}const Fu=[["pendente","Pendente"],["pago","Pago"],["atrasado","Atrasado"],["dispensado","Dispensado"]],O0=[["aguardando_pagamento","Aguardando"],["parcialmente_pago","Parcial"],["pago","Pago"]],T0=[["recebida","Recebida"],["em_analise","Em análise"],["aprovada","Aprovada"],["cancelada","Cancelada"]];function aE(){return new Intl.DateTimeFormat("en-CA",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}function tE(o){return o?new Intl.DateTimeFormat("pt-BR",{timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`)):"Sem data"}function nE(o){return(o||"").replace(/\D/g,"")}function lE(o){const r=nE(o);return r.length===10||r.length===11?`55${r}`:r}function Uv(o){return o!=="pago"&&o!=="dispensado"}function Ku(o,r){return!!(o&&Uv(r)&&o<aE())}function iE(o,r){return r==="pago"?"border-emerald-400/25 bg-emerald-400/8 text-emerald-300":r==="dispensado"?"border-white/10 bg-white/[.03] text-white/35":Ku(o,r)||r==="atrasado"?"border-red-400/30 bg-red-400/10 text-red-200":"border-amber-300/25 bg-amber-300/8 text-amber-100"}function oE({rows:o,session:r,onOpen:c,onUpdated:d,onDeleted:m}){const[f,v]=b.useState("all"),[g,N]=b.useState("all"),[E,j]=b.useState("all"),[h,x]=b.useState(""),[M,V]=b.useState(""),[k,B]=b.useState(null),q=b.useMemo(()=>o.filter(L=>f!=="all"&&L.financial_status!==f||g!=="all"&&L.registration_status!==g?!1:E==="overdue"?Ku(L.payment_due_date_1,L.payment_installment_1_status)||Ku(L.payment_due_date_2,L.payment_installment_2_status):E==="installments"&&L.payment_option!=="parcelado"?!1:E==="missing"?L.payment_option==="parcelado"&&!L.payment_due_date_1:!0),[E,f,g,o]),Y=async(L,se,K)=>{x(`${L.id}:${K}`),V("");try{await yd(r,L.id,se),d({...L,...se})}catch(W){V(W instanceof Error?W.message:"Não foi possível atualizar.")}finally{x("")}},G=async L=>{if(L.payment_option!=="parcelado")return;const se=lE(L.responsible_phone||L.business_phone);if(se.length<12){V(`Cadastre o WhatsApp de ${L.business_name} antes de enviar o lembrete.`),B(L);return}const K=Uv(L.payment_installment_1_status),W=K?1:2,P=K?L.payment_due_date_1:L.payment_due_date_2,H=[`Olá, ${L.responsible_name}!`,`Este é um lembrete da VM Mídias sobre a ${W}ª parcela do Verão Premiado 2027, no valor de R$ 150,00.`,P?`Vencimento: ${tE(P)}.`:"Entre em contato conosco para confirmar o vencimento.","Se o pagamento já foi realizado, desconsidere esta mensagem. Obrigado!"].join(`

`);window.open(`https://wa.me/${se}?text=${encodeURIComponent(H)}`,"_blank","noopener,noreferrer"),await Y(L,{payment_reminder_sent_at:new Date().toISOString(),payment_reminder_count:(L.payment_reminder_count||0)+1},"reminder")},oe=async L=>{if(window.confirm(`Excluir definitivamente a inscrição de ${L.business_name}? Esta ação não pode ser desfeita.`)){x(`${L.id}:delete`),V("");try{await Lj(r,L.id),m(L.id)}catch(K){V(K instanceof Error?K.message:"Não foi possível excluir.")}finally{x("")}}};return l.jsxs("section",{className:"mt-5",children:[l.jsxs("div",{className:"flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a0c10] p-4 xl:flex-row xl:items-center xl:justify-between",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-black",children:"Controle operacional"}),l.jsxs("p",{className:"mt-1 text-sm text-white/42",children:[q.length," de ",o.length," comércios visíveis"]})]}),l.jsxs("div",{className:"grid gap-2 sm:grid-cols-3",children:[l.jsx(Gu,{value:g,onChange:N,label:"Inscrição",options:[["all","Todas"],...T0]}),l.jsx(Gu,{value:f,onChange:v,label:"Financeiro",options:[["all","Todos"],...O0]}),l.jsx(Gu,{value:E,onChange:j,label:"Vencimentos",options:[["all","Todos"],["installments","Parcelados"],["overdue","Em atraso"],["missing","Sem vencimento"]]})]})]}),M&&l.jsxs("div",{className:"mt-4 flex items-start justify-between gap-3 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:[l.jsx("span",{children:M}),l.jsx("button",{type:"button",onClick:()=>V(""),"aria-label":"Fechar aviso",children:l.jsx(jn,{className:"h-4 w-4"})})]}),l.jsxs("div",{className:"mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-[#080a0e] shadow-2xl shadow-black/20",children:[l.jsxs("table",{className:"min-w-[1420px] w-full border-collapse text-left text-sm",children:[l.jsx("thead",{className:"bg-white/[.035] text-[11px] font-black uppercase tracking-[.08em] text-white/40",children:l.jsxs("tr",{children:[l.jsx("th",{className:"sticky left-0 z-20 min-w-64 border-b border-white/10 bg-[#0c0e12] px-4 py-4",children:"Comércio"}),l.jsx("th",{className:"min-w-56 border-b border-white/10 px-4 py-4",children:"Responsável"}),l.jsx("th",{className:"min-w-40 border-b border-white/10 px-4 py-4",children:"Pagamento"}),l.jsx("th",{className:"min-w-52 border-b border-white/10 px-4 py-4",children:"1ª parcela"}),l.jsx("th",{className:"min-w-52 border-b border-white/10 px-4 py-4",children:"2ª parcela"}),l.jsx("th",{className:"min-w-48 border-b border-white/10 px-4 py-4",children:"Financeiro"}),l.jsx("th",{className:"min-w-48 border-b border-white/10 px-4 py-4",children:"Inscrição"}),l.jsx("th",{className:"min-w-56 border-b border-white/10 px-4 py-4",children:"Produção"}),l.jsx("th",{className:"sticky right-0 z-20 min-w-52 border-b border-white/10 bg-[#0c0e12] px-4 py-4",children:"Ações"})]})}),l.jsx("tbody",{children:q.map(L=>l.jsxs("tr",{className:"border-b border-white/[.07] transition hover:bg-white/[.025]",children:[l.jsx("td",{className:"sticky left-0 z-10 bg-[#080a0e] px-4 py-4 align-top",children:l.jsxs("button",{type:"button",onClick:()=>c(L),className:"block text-left",children:[l.jsx("strong",{className:"block text-base text-white",children:L.business_name}),l.jsx("span",{className:"mt-1 block text-xs text-white/35",children:L.segment}),l.jsx("span",{className:"mt-2 block text-[11px] font-bold text-[#ffcc0b]/70",children:L.protocol})]})}),l.jsxs("td",{className:"px-4 py-4 align-top",children:[l.jsx("strong",{className:"block text-white/85",children:L.responsible_name}),l.jsx("span",{className:"mt-1 block text-xs text-white/38",children:L.responsible_phone||L.business_phone||"WhatsApp não cadastrado"})]}),l.jsx("td",{className:"px-4 py-4 align-top",children:l.jsx("span",{className:"rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-bold",children:L.payment_option==="avista"?"R$ 250 à vista":"2x de R$ 150"})}),l.jsx("td",{className:"px-4 py-4 align-top",children:l.jsx(C0,{row:L,number:1,saving:h,onPatch:Y})}),l.jsx("td",{className:"px-4 py-4 align-top",children:L.payment_option==="avista"?l.jsx("span",{className:"text-xs text-white/28",children:"Não se aplica"}):l.jsx(C0,{row:L,number:2,saving:h,onPatch:Y})}),l.jsx("td",{className:"px-4 py-4 align-top",children:l.jsx(R0,{value:L.financial_status,disabled:h===`${L.id}:financial_status`,options:O0,onChange:se=>void Y(L,{financial_status:se},"financial_status")})}),l.jsx("td",{className:"px-4 py-4 align-top",children:l.jsx(R0,{value:L.registration_status,disabled:h===`${L.id}:registration_status`,options:T0,onChange:se=>void Y(L,{registration_status:se},"registration_status")})}),l.jsxs("td",{className:"px-4 py-4 align-top text-xs leading-6 text-white/48",children:[l.jsxs("span",{className:"block",children:["Rádio: ",L.spot_status.replaceAll("_"," ")]}),l.jsxs("span",{className:"block",children:["Vídeo: ",L.video_status.replaceAll("_"," ")]}),l.jsxs("span",{className:"block",children:["Kit: ",L.kit_status.replaceAll("_"," ")]})]}),l.jsx("td",{className:"sticky right-0 z-10 bg-[#080a0e] px-4 py-4 align-top",children:l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsx(Ds,{label:"Ver",icon:l.jsx(m2,{className:"h-4 w-4"}),onClick:()=>c(L)}),l.jsx(Ds,{label:"Editar",icon:l.jsx(X2,{className:"h-4 w-4"}),onClick:()=>B(L)}),L.payment_option==="parcelado"&&l.jsx(Ds,{label:"WhatsApp",icon:l.jsx(H2,{className:"h-4 w-4"}),onClick:()=>void G(L),disabled:h===`${L.id}:reminder`}),l.jsx(Ds,{label:"Excluir",icon:l.jsx(fd,{className:"h-4 w-4"}),onClick:()=>void oe(L),disabled:h===`${L.id}:delete`,danger:!0})]})})]},L.id))})]}),!q.length&&l.jsx("p",{className:"px-6 py-20 text-center text-white/40",children:"Nenhum comércio corresponde aos filtros."})]}),l.jsxs("p",{className:"mt-3 flex items-center gap-2 text-xs text-white/32",children:[l.jsx(By,{className:"h-3.5 w-3.5"})," O botão WhatsApp abre uma mensagem pronta; o administrador confirma o envio no aplicativo."]}),k&&l.jsx(sE,{row:k,session:r,onClose:()=>B(null),onSaved:L=>{d(L),B(null)}})]})}function C0({row:o,number:r,saving:c,onPatch:d}){const m=`payment_due_date_${r}`,f=`payment_installment_${r}_status`,v=o[f]||"pendente",g=o[m];return l.jsxs("div",{className:`rounded-xl border p-2.5 ${iE(g,v)}`,children:[l.jsx("input",{type:"date",value:g||"",disabled:c===`${o.id}:${m}`,onChange:N=>void d(o,{[m]:N.target.value||null},m),className:"h-8 w-full bg-transparent text-xs font-bold outline-none [color-scheme:dark]","aria-label":`Vencimento da ${r}ª parcela de ${o.business_name}`}),l.jsx("select",{value:v,disabled:c===`${o.id}:${f}`,onChange:N=>void d(o,{[f]:N.target.value},f),className:"mt-1 h-8 w-full rounded-lg border border-white/10 bg-black/20 px-2 text-xs font-bold outline-none","aria-label":`Status da ${r}ª parcela de ${o.business_name}`,children:Fu.map(([N,E])=>l.jsx("option",{value:N,children:E},N))})]})}function R0({value:o,options:r,onChange:c,disabled:d}){return l.jsx("select",{value:o,disabled:d,onChange:m=>c(m.target.value),className:"h-10 w-full rounded-lg border border-white/10 bg-[#0d0f14] px-2 text-xs font-bold text-white outline-none focus:border-[#f40b36]",children:r.map(([m,f])=>l.jsx("option",{value:m,children:f},m))})}function Gu({value:o,onChange:r,label:c,options:d}){return l.jsxs("label",{className:"text-[10px] font-black uppercase tracking-wide text-white/35",children:[c,l.jsx("select",{value:o,onChange:m=>r(m.target.value),className:"mt-1 h-10 w-full min-w-40 rounded-lg border border-white/10 bg-[#050609] px-3 text-xs font-bold normal-case text-white outline-none",children:d.map(([m,f])=>l.jsx("option",{value:m,children:f},m))})]})}function Ds({label:o,icon:r,onClick:c,disabled:d,danger:m}){return l.jsxs("button",{type:"button",onClick:c,disabled:d,className:`inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border px-2 text-[10px] font-black uppercase disabled:opacity-35 ${m?"border-red-400/20 text-red-300 hover:bg-red-400/10":"border-white/10 text-white/62 hover:border-white/25 hover:text-white"}`,children:[r,o]})}function sE({row:o,session:r,onClose:c,onSaved:d}){const[m,f]=b.useState({business_name:o.business_name,segment:o.segment,business_instagram:o.business_instagram||"",responsible_name:o.responsible_name,responsible_phone:o.responsible_phone||o.business_phone||"",responsible_email:o.responsible_email||"",cep:o.cep,street:o.street,address_number:o.address_number,complement:o.complement||"",neighborhood:o.neighborhood,city:o.city,state:o.state,payment_option:o.payment_option,payment_due_date_1:o.payment_due_date_1||"",payment_due_date_2:o.payment_due_date_2||"",payment_installment_1_status:o.payment_installment_1_status||"pendente",payment_installment_2_status:o.payment_installment_2_status||(o.payment_option==="avista"?"dispensado":"pendente"),contribution_description:o.contribution_description||"",payment_notes:o.payment_notes||"",internal_notes:o.internal_notes||""}),[v,g]=b.useState(!1),[N,E]=b.useState(""),j=(x,M)=>f(V=>({...V,[x]:M})),h=async()=>{if(m.business_name.trim().length<2||m.responsible_name.trim().length<4){E("Informe o comércio e o nome completo do responsável.");return}g(!0),E("");const x={...m,business_instagram:m.business_instagram.trim()||null,responsible_phone:m.responsible_phone.trim()||null,responsible_email:m.responsible_email.trim()||null,complement:m.complement.trim()||null,contribution_description:m.contribution_description.trim()||null,payment_notes:m.payment_notes.trim()||null,internal_notes:m.internal_notes.trim()||null,payment_due_date_1:m.payment_due_date_1||null,payment_due_date_2:m.payment_option==="avista"?null:m.payment_due_date_2||null,payment_installment_2_status:m.payment_option==="avista"?"dispensado":m.payment_installment_2_status};try{await yd(r,o.id,x),d({...o,...x})}catch(M){E(M instanceof Error?M.message:"Não foi possível salvar.")}finally{g(!1)}};return l.jsx("div",{className:"fixed inset-0 z-[80] overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-6",role:"dialog","aria-modal":"true","aria-label":`Editar ${o.business_name}`,children:l.jsxs("div",{className:"mx-auto max-w-5xl rounded-3xl border border-white/12 bg-[#0b0d12] shadow-2xl",children:[l.jsxs("header",{className:"sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-3xl border-b border-white/10 bg-[#0b0d12]/95 p-5 backdrop-blur-xl sm:px-7",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[.18em] text-[#ffcc0b]",children:"Editar cadastro"}),l.jsx("h2",{className:"mt-1 text-2xl font-black",children:o.business_name})]}),l.jsx("button",{type:"button",onClick:c,className:"grid h-11 w-11 place-items-center rounded-xl border border-white/10","aria-label":"Fechar",children:l.jsx(jn,{className:"h-5 w-5"})})]}),l.jsxs("div",{className:"grid gap-6 p-5 sm:p-7 lg:grid-cols-2",children:[l.jsxs(zs,{title:"Comércio",children:[l.jsx(da,{label:"Nome do comércio",value:m.business_name,onChange:x=>j("business_name",x)}),l.jsx(da,{label:"Segmento",value:m.segment,onChange:x=>j("segment",x)}),l.jsx(da,{label:"Instagram",value:m.business_instagram,onChange:x=>j("business_instagram",x)}),l.jsx(da,{label:"Responsável",value:m.responsible_name,onChange:x=>j("responsible_name",x)}),l.jsx(da,{label:"WhatsApp para cobrança",value:m.responsible_phone,onChange:x=>j("responsible_phone",x),placeholder:"(15) 99999-9999"}),l.jsx(da,{label:"E-mail",value:m.responsible_email,onChange:x=>j("responsible_email",x),type:"email"})]}),l.jsxs(zs,{title:"Endereço",children:[l.jsxs("div",{className:"grid grid-cols-[.7fr_1.3fr] gap-3",children:[l.jsx(da,{label:"CEP",value:m.cep,onChange:x=>j("cep",x)}),l.jsx(da,{label:"Rua ou avenida",value:m.street,onChange:x=>j("street",x)})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsx(da,{label:"Número",value:m.address_number,onChange:x=>j("address_number",x)}),l.jsx(da,{label:"Complemento",value:m.complement,onChange:x=>j("complement",x)})]}),l.jsx(da,{label:"Bairro",value:m.neighborhood,onChange:x=>j("neighborhood",x)}),l.jsxs("div",{className:"grid grid-cols-[1.4fr_.6fr] gap-3",children:[l.jsx(da,{label:"Cidade",value:m.city,onChange:x=>j("city",x)}),l.jsx(da,{label:"Estado",value:m.state,onChange:x=>j("state",x)})]})]}),l.jsxs(zs,{title:"Pagamento",children:[l.jsxs("label",{className:"text-xs font-bold text-white/55",children:["Forma de pagamento",l.jsxs("select",{value:m.payment_option,onChange:x=>j("payment_option",x.target.value),className:"mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none",children:[l.jsx("option",{value:"avista",children:"R$ 250 à vista"}),l.jsx("option",{value:"parcelado",children:"2x de R$ 150"})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsx(da,{label:"Vencimento 1",value:m.payment_due_date_1,onChange:x=>j("payment_due_date_1",x),type:"date"}),l.jsx(da,{label:"Vencimento 2",value:m.payment_due_date_2,onChange:x=>j("payment_due_date_2",x),type:"date",disabled:m.payment_option==="avista"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsx(D0,{label:"Status parcela 1",value:m.payment_installment_1_status,onChange:x=>j("payment_installment_1_status",x),options:Fu}),l.jsx(D0,{label:"Status parcela 2",value:m.payment_installment_2_status,onChange:x=>j("payment_installment_2_status",x),options:Fu,disabled:m.payment_option==="avista"})]}),l.jsx(da,{label:"Vale-compras",value:m.contribution_description,onChange:x=>j("contribution_description",x)})]}),l.jsxs(zs,{title:"Anotações",children:[l.jsx(M0,{label:"Observações financeiras",value:m.payment_notes,onChange:x=>j("payment_notes",x)}),l.jsx(M0,{label:"Observações internas",value:m.internal_notes,onChange:x=>j("internal_notes",x)})]})]}),N&&l.jsx("p",{className:"mx-5 mb-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100 sm:mx-7",children:N}),l.jsxs("footer",{className:"flex flex-col-reverse gap-3 border-t border-white/10 p-5 sm:flex-row sm:justify-end sm:px-7",children:[l.jsx("button",{type:"button",onClick:c,className:"h-11 rounded-xl border border-white/12 px-5 text-xs font-black uppercase text-white/60",children:"Cancelar"}),l.jsxs("button",{type:"button",onClick:()=>void h(),disabled:v,className:"inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#f40b36] px-5 text-xs font-black uppercase disabled:opacity-40",children:[l.jsx(oN,{className:"h-4 w-4"}),v?"Salvando":"Salvar alterações"]})]})]})})}function zs({title:o,children:r}){return l.jsxs("section",{className:"space-y-4 rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5",children:[l.jsxs("h3",{className:"flex items-center gap-2 border-b border-white/8 pb-3 font-black",children:[l.jsx(Yy,{className:"h-4 w-4 text-[#ffcc0b]"}),o]}),r]})}function da({label:o,value:r,onChange:c,type:d="text",placeholder:m,disabled:f}){return l.jsxs("label",{className:"block text-xs font-bold text-white/55",children:[o,l.jsx("input",{type:d,value:r,placeholder:m,disabled:f,onChange:v=>c(v.target.value),className:"mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-[#f40b36] disabled:opacity-35 [color-scheme:dark]"})]})}function M0({label:o,value:r,onChange:c}){return l.jsxs("label",{className:"block text-xs font-bold text-white/55",children:[o,l.jsx("textarea",{value:r,onChange:d=>c(d.target.value),className:"mt-2 min-h-28 w-full resize-y rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-white outline-none focus:border-[#f40b36]"})]})}function D0({label:o,value:r,onChange:c,options:d,disabled:m}){return l.jsxs("label",{className:"block text-xs font-bold text-white/55",children:[o,l.jsx("select",{value:r,disabled:m,onChange:f=>c(f.target.value),className:"mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none disabled:opacity-35",children:d.map(([f,v])=>l.jsx("option",{value:f,children:v},f))})]})}const z0={registration_status:["recebida","em_analise","aprovada","cancelada"],financial_status:["aguardando_pagamento","parcialmente_pago","pago"],spot_status:["aguardando_producao","em_producao","aguardando_aprovacao","finalizado"],video_status:["aguardando_producao","em_producao","aguardando_aprovacao","finalizado"],kit_status:["aguardando_producao","em_producao","disponivel","entregue"],contribution_status:["pendente","definida","recebida"]},ks={recebida:"Recebida",em_analise:"Em análise",aprovada:"Aprovada",cancelada:"Cancelada",aguardando_pagamento:"Aguardando pagamento",parcialmente_pago:"Parcialmente pago",pago:"Pago",aguardando_producao:"Aguardando produção",em_producao:"Em produção",aguardando_aprovacao:"Aguardando aprovação",finalizado:"Finalizado",disponivel:"Disponível",entregue:"Entregue",pendente:"Pendente",definida:"Definida"};function rE(){const[o,r]=b.useState(()=>hd()),[c,d]=b.useState([]),[m,f]=b.useState([]),[v,g]=b.useState(""),[N,E]=b.useState(""),[j,h]=b.useState("registrations"),[x,M]=b.useState("cards"),[V,k]=b.useState(!!o),[B,q]=b.useState(!1),[Y,G]=b.useState(""),oe=async P=>{k(!0),G("");try{const H=await $i(P);r(H);const[F,ee]=await Promise.all([qj(H),kj(H)]);d(F),f(ee)}catch(H){G(H instanceof Error?H.message:"Não foi possível carregar o painel.")}finally{k(!1)}};b.useEffect(()=>{document.title="Verão Premiado 2027 | Administração",o&&oe(o)},[]);const L=c.find(P=>P.id===v),se=b.useMemo(()=>{const P=N.trim().toLocaleLowerCase("pt-BR");return P?c.filter(H=>`${H.business_name} ${H.responsible_name} ${H.protocol}`.toLocaleLowerCase("pt-BR").includes(P)):c},[N,c]),K=b.useMemo(()=>{const P=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date);return c.filter(H=>H.payment_option==="parcelado"&&(H.payment_due_date_1&&H.payment_due_date_1<P&&!["pago","dispensado"].includes(H.payment_installment_1_status)||H.payment_due_date_2&&H.payment_due_date_2<P&&!["pago","dispensado"].includes(H.payment_installment_2_status))).length},[c]);if(!o)return l.jsx(xd,{loading:B,error:Y,onLogin:async(P,H)=>{q(!0),G("");try{const F=await gd(P,H);r(F),await oe(F)}catch(F){G(F instanceof Error?F.message:"Não foi possível entrar.")}finally{q(!1)}}});const W=()=>{const P=["Protocolo","Comércio","CNPJ","Responsável","CPF","Telefone","Pagamento","Vencimento 1","Status parcela 1","Vencimento 2","Status parcela 2","Último lembrete","Inscrição","Financeiro","Spot","Vídeo","Kit","Contribuição","Data"],H=c.map(ce=>[ce.protocol,ce.business_name,ce.cnpj||"",ce.responsible_name,ce.cpf,ce.responsible_phone||"",ce.payment_option,ce.payment_due_date_1||"",ce.payment_installment_1_status||"",ce.payment_due_date_2||"",ce.payment_installment_2_status||"",ce.payment_reminder_sent_at||"",ce.registration_status,ce.financial_status,ce.spot_status,ce.video_status,ce.kit_status,ce.contribution_status,ce.created_at]),F=[P,...H].map(ce=>ce.map(Ie=>`"${String(Ie).replace(/"/g,'""')}"`).join(";")).join(`
`),ee=document.createElement("a");ee.href=URL.createObjectURL(new Blob(["\uFEFF",F],{type:"text/csv;charset=utf-8"})),ee.download="verao-premiado-2027-inscricoes.csv",ee.click(),URL.revokeObjectURL(ee.href)};return l.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[l.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[l.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[l.jsx("a",{href:"/",children:l.jsx(Za,{size:"sm"})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[.2em] text-[#ffcc0b]",children:"Administração"}),l.jsx("h1",{className:"truncate font-black",children:"Verão Premiado 2027"})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("a",{href:"/admin/solicitacoes",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(gv,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),l.jsx("button",{onClick:()=>void oe(o),disabled:V,"aria-label":"Atualizar",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:l.jsx(dd,{className:`h-4 w-4 ${V?"animate-spin":""}`})}),l.jsx("button",{onClick:()=>{Pl(),r(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:l.jsx(cd,{className:"h-4 w-4"})})]})]})}),l.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8",children:[l.jsxs("div",{className:"flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[.18em] text-[#ffcc0b]",children:"Gestão da campanha"}),l.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Inscrições, produção e premiação."})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsxs("button",{onClick:()=>h("registrations"),className:`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${j==="registrations"?"bg-[#f40b36]":"border border-white/12"}`,children:[l.jsx(f0,{className:"h-4 w-4"}),"Inscrições"]}),l.jsxs("button",{onClick:()=>h("screens"),className:`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${j==="screens"?"bg-[#f40b36]":"border border-white/12"}`,children:[l.jsx(dN,{className:"h-4 w-4"}),"Telas"]})]})]}),Y&&l.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:Y}),V?l.jsx("div",{className:"flex min-h-64 items-center justify-center",children:l.jsx(fa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):j==="screens"?l.jsx(dE,{session:o,screens:m,onSaved:()=>void oe(o)}):L?l.jsx(cE,{row:L,session:o,screen:m.find(P=>P.id===L.screen_id),onBack:()=>g(""),onUpdated:P=>d(H=>H.map(F=>F.id===P.id?P:F))}):l.jsxs(l.Fragment,{children:[l.jsxs("section",{className:"mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",children:[l.jsx(Us,{label:"Comércios cadastrados",value:c.length,note:"Total da campanha"}),l.jsx(Us,{label:"Aguardando pagamento",value:c.filter(P=>P.financial_status!=="pago").length,note:"À vista e parcelados"}),l.jsx(Us,{label:"Parcelas em atraso",value:K,note:"Precisam de acompanhamento",attention:K>0}),l.jsx(Us,{label:"Cadastros aprovados",value:c.filter(P=>P.registration_status==="aprovada").length,note:"Prontos para produção"})]}),l.jsxs("div",{className:"mt-7 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between",children:[l.jsxs("label",{className:"relative block w-full max-w-md",children:[l.jsx(Ps,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),l.jsx("input",{value:N,onChange:P=>E(P.target.value),placeholder:"Buscar comércio, responsável ou protocolo",className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]"})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsxs("div",{className:"flex rounded-xl border border-white/10 bg-[#0c0d11] p-1",children:[l.jsxs("button",{type:"button",onClick:()=>M("cards"),className:`inline-flex h-10 items-center gap-2 rounded-lg px-3 text-xs font-black uppercase ${x==="cards"?"bg-white/10 text-white":"text-white/40"}`,children:[l.jsx(f0,{className:"h-4 w-4"}),"Cartões"]}),l.jsxs("button",{type:"button",onClick:()=>M("table"),className:`inline-flex h-10 items-center gap-2 rounded-lg px-3 text-xs font-black uppercase ${x==="table"?"bg-[#f40b36] text-white":"text-white/40"}`,children:[l.jsx(bN,{className:"h-4 w-4"}),"Tabela"]})]}),l.jsxs("a",{href:"/veraopremiado#inscricao",target:"_blank",rel:"noreferrer",className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 px-4 text-xs font-black uppercase",children:[l.jsx(ON,{className:"h-4 w-4"}),"Novo comércio"]}),l.jsxs("button",{onClick:W,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 px-4 text-xs font-black uppercase",children:[l.jsx(Ji,{className:"h-4 w-4"}),"Exportar CSV"]})]})]}),x==="table"?l.jsx(oE,{rows:se,session:o,onOpen:P=>g(P.id),onUpdated:P=>d(H=>H.map(F=>F.id===P.id?P:F)),onDeleted:P=>d(H=>H.filter(F=>F.id!==P))}):se.length?l.jsx("section",{className:"mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:se.map(P=>l.jsxs("button",{onClick:()=>g(P.id),className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#f40b36]/55",children:[l.jsxs("div",{className:"flex items-center justify-between gap-3",children:[l.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-3 py-1 text-[10px] font-black uppercase text-[#ff6982]",children:ks[P.registration_status]}),l.jsx("span",{className:"text-xs text-white/35",children:new Date(P.created_at).toLocaleDateString("pt-BR")})]}),l.jsx("h3",{className:"mt-4 text-xl font-black",children:P.business_name}),l.jsx("p",{className:"mt-1 text-sm text-white/48",children:P.responsible_name}),l.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4",children:[l.jsx("p",{className:"text-xs font-bold text-white/38",children:P.protocol}),l.jsxs("span",{className:"inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#ffcc0b]/65",children:[l.jsx(R2,{className:"h-3.5 w-3.5"}),"Abrir"]})]})]},P.id))}):l.jsx("p",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhuma inscrição encontrada."})]})]})]})}function Us({label:o,value:r,note:c,attention:d}){return l.jsxs("article",{className:`rounded-2xl border p-5 ${d?"border-red-400/25 bg-red-400/[.07]":"border-white/10 bg-[#0c0e12]"}`,children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[.12em] text-white/38",children:o}),l.jsx("strong",{className:`mt-2 block text-3xl font-black ${d?"text-red-300":"text-white"}`,children:r}),l.jsx("p",{className:"mt-1 text-xs text-white/35",children:c})]})}function cE({row:o,session:r,screen:c,onBack:d,onUpdated:m}){const[f,v]=b.useState(""),[g,N]=b.useState(""),E=async(h,x)=>{v(h),N("");try{await yd(r,o.id,{[h]:x||null}),m({...o,[h]:x})}catch(M){N(M instanceof Error?M.message:"Falha ao atualizar.")}finally{v("")}},j=async h=>{try{window.open(await Bj(r,h),"_blank","noopener,noreferrer")}catch(x){N(x instanceof Error?x.message:"Não foi possível abrir.")}};return l.jsxs("section",{className:"mt-7",children:[l.jsxs("button",{onClick:d,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55",children:[l.jsx(Xl,{className:"h-4 w-4"}),"Todas as inscrições"]}),l.jsxs("div",{className:"mt-5 grid gap-5 xl:grid-cols-[1.2fr_.8fr]",children:[l.jsxs("div",{className:"space-y-5",children:[l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:o.protocol}),l.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-4xl",children:o.business_name}),l.jsxs("p",{className:"mt-2 text-sm text-white/50",children:[o.segment," · ",o.business_phone||"Sem telefone comercial"," · ",o.business_instagram||"Sem Instagram"]}),l.jsx(yn,{title:"Endereço",value:`${o.street}, ${o.address_number}${o.complement?` - ${o.complement}`:""} · ${o.neighborhood} · ${o.city}/${o.state} · CEP ${o.cep}`}),l.jsx(yn,{title:"Responsável",value:`${o.responsible_name} · CPF ${o.cpf} · ${o.responsible_phone||"WhatsApp não cadastrado"} · ${o.responsible_email||"Sem e-mail"}`})]}),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("h3",{className:"text-xl font-black",children:"Conteúdo publicitário"}),l.jsx(yn,{title:"Briefing da rádio",value:o.radio_briefing||"Não informado"}),l.jsx(yn,{title:"Briefing do vídeo",value:o.motion_briefing||"Não informado"}),l.jsx(yn,{title:"Tela escolhida",value:c?`${c.name} · ${c.address}`:o.screen_id||"Não se aplica"}),l.jsx(yn,{title:"Investimento",value:o.payment_option==="avista"?"R$ 250,00 à vista":"2x de R$ 150,00 (R$ 300,00)"}),l.jsx(yn,{title:"Vencimentos",value:o.payment_option==="avista"?"Pagamento à vista · lembrete não necessário":`1ª parcela: ${U0(o.payment_due_date_1)} · ${ks[o.payment_installment_1_status]||o.payment_installment_1_status||"Pendente"}
2ª parcela: ${U0(o.payment_due_date_2)} · ${ks[o.payment_installment_2_status]||o.payment_installment_2_status||"Pendente"}
Último lembrete: ${o.payment_reminder_sent_at?new Date(o.payment_reminder_sent_at).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"}):"Ainda não enviado"}`}),l.jsx(yn,{title:"Contribuição",value:o.contribution_description||"Não informada"})]}),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("h3",{className:"text-xl font-black",children:"Arquivos privados"}),l.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:o.assets.map(h=>l.jsxs("button",{onClick:()=>void j(h.path),className:"flex items-center gap-3 rounded-xl border border-white/10 p-4 text-left",children:[l.jsx(mv,{className:"h-6 w-6 text-[#ffcc0b]"}),l.jsx("span",{className:"min-w-0 flex-1 truncate text-sm font-bold",children:h.name}),l.jsx(Ji,{className:"h-4 w-4 text-white/35"})]},h.path))})]})]}),l.jsxs("aside",{className:"space-y-5",children:[l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsx("h3",{className:"font-black",children:"Andamento"}),l.jsx("div",{className:"mt-5 space-y-4",children:Object.keys(z0).map(h=>l.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wide text-white/48",children:[uE[h],l.jsx("select",{value:o[h],disabled:f===h,onChange:x=>void E(h,x.target.value),className:"mt-2 h-11 w-full rounded-lg border border-white/12 bg-[#06070a] px-3 text-sm normal-case text-white outline-none",children:z0[h].map(x=>l.jsx("option",{value:x,children:ks[x]},x))})]},h))})]}),l.jsx(q0,{label:"Observações financeiras",value:o.payment_notes||"",disabled:!!f,onSave:h=>void E("payment_notes",h)}),l.jsx(q0,{label:"Observações internas",value:o.internal_notes||"",disabled:!!f,onSave:h=>void E("internal_notes",h)}),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsx("h3",{className:"font-black",children:"Registro do aceite"}),l.jsx("p",{className:"mt-3 text-sm text-white/55",children:new Date(o.accepted_at).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}),l.jsxs("p",{className:"mt-2 text-xs text-white/35",children:["Versão: ",o.terms_version]}),l.jsxs("p",{className:"mt-4 text-xs leading-5 text-white/42",children:[o.declarations.filter(Boolean).length," de ",o.declarations.length," declarações registradas."]})]}),g&&l.jsx("p",{className:"rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:g})]})]})]})}function U0(o){return o?new Intl.DateTimeFormat("pt-BR",{timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`)):"Não definido"}const uE={registration_status:"Inscrição",financial_status:"Financeiro",spot_status:"Spot",video_status:"Vídeo",kit_status:"Kit promocional",contribution_status:"Contribuição"};function yn({title:o,value:r}){return l.jsxs("div",{className:"mt-5 border-t border-white/10 pt-4",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-wide text-white/35",children:o}),l.jsx("p",{className:"mt-2 whitespace-pre-wrap text-sm leading-7 text-white/68",children:r})]})}function q0({label:o,value:r,disabled:c,onSave:d}){const[m,f]=b.useState(r);return b.useEffect(()=>f(r),[r]),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsxs("label",{className:"text-sm font-black",children:[o,l.jsx("textarea",{value:m,onChange:v=>f(v.target.value),className:"mt-3 min-h-28 w-full rounded-lg border border-white/12 bg-black/20 p-3 text-sm outline-none"})]}),l.jsxs("button",{disabled:c||m===r,onClick:()=>d(m),className:"mt-3 inline-flex h-10 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase disabled:opacity-35",children:[l.jsx(En,{className:"h-4 w-4"}),"Salvar"]})]})}function dE({session:o,screens:r,onSaved:c}){const d={name:"",address:"",description:"",photo_url:"",capacity:"",is_active:!0},[m,f]=b.useState(d),[v,g]=b.useState(!1),[N,E]=b.useState(""),j=async()=>{if(!m.name.trim()||!m.address.trim()){E("Informe nome e endereço reais da tela.");return}g(!0),E("");try{await A0(o,{name:m.name,address:m.address,description:m.description,photo_url:m.photo_url,capacity:m.capacity?Number(m.capacity):null,is_active:m.is_active}),f(d),c()}catch(x){E(x instanceof Error?x.message:"Não foi possível salvar.")}finally{g(!1)}},h=async x=>{try{await A0(o,{id:x.id,name:x.name,address:x.address,description:x.description||"",photo_url:x.photo_url||"",capacity:x.capacity,is_active:!x.is_active}),c()}catch(M){E(M instanceof Error?M.message:"Não foi possível atualizar.")}};return l.jsxs("section",{className:"mt-7 grid gap-6 lg:grid-cols-[.75fr_1.25fr]",children:[l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("h3",{className:"text-xl font-black",children:"Cadastrar tela real"}),l.jsx("p",{className:"mt-2 text-sm leading-6 text-white/45",children:"As opções ativas aparecem no formulário público. Não use dados fictícios."}),l.jsx("div",{className:"mt-5 space-y-4",children:[["Nome do local","name"],["Endereço","address"],["Descrição","description"],["URL da foto","photo_url"],["Capacidade (opcional)","capacity"]].map(([x,M])=>l.jsxs("label",{className:"block text-sm font-bold",children:[x,l.jsx("input",{type:M==="capacity"?"number":"text",value:String(m[M]),onChange:V=>f(k=>({...k,[M]:V.target.value})),className:"mt-2 h-11 w-full rounded-lg border border-white/12 bg-black/20 px-3 outline-none"})]},M))}),N&&l.jsx("p",{className:"mt-4 text-sm text-red-300",children:N}),l.jsxs("button",{onClick:()=>void j(),disabled:v,className:"mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase",children:[l.jsx(hv,{className:"h-4 w-4"}),"Cadastrar tela"]})]}),l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-black",children:["Telas cadastradas (",r.length,")"]}),l.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2",children:r.map(x=>l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"font-black",children:x.name}),l.jsx("p",{className:"mt-2 text-sm text-white/45",children:x.address})]}),l.jsx("span",{className:`rounded-full px-2.5 py-1 text-[10px] font-black uppercase ${x.is_active?"bg-emerald-400/10 text-emerald-300":"bg-white/8 text-white/40"}`,children:x.is_active?"Ativa":"Inativa"})]}),l.jsxs("p",{className:"mt-4 text-xs text-white/35",children:["Capacidade: ",x.capacity??"Sem limite"]}),l.jsx("button",{onClick:()=>void h(x),className:"mt-4 h-9 rounded-lg border border-white/12 px-3 text-xs font-bold",children:x.is_active?"Desativar":"Ativar"})]},x.id))})]})]})}const L0=5,mE=25*1024*1024,fE=new Set(["image/jpeg","image/png","image/webp","image/svg+xml"]),wa="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#07080b] px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition hover:border-white/30 focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/25",_a="block text-sm font-bold text-white",pE=[["institucional","Publicidade institucional da marca"],["produto_servico","Divulgar determinado produto ou serviço"],["promocao","Promoção exclusiva e/ou inédita"],["fortalecer_marca","Fortalecer a marca"],["visita_estabelecimento","Incentivar a visita no meu estabelecimento"],["outro","Outro"]];function hE(){const o=new Date;return`VMV-${`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}`}-${crypto.randomUUID().slice(0,6).toUpperCase()}`}function Ht(o){return o.trim()||null}function Ju(o,r){if(o.length+r.length>L0)return`Envie no máximo ${L0} imagens.`;const c=r.find(m=>!fE.has(m.type));if(c)return`O formato de “${c.name}” não é aceito.`;const d=r.find(m=>m.size>mE);return d?`O arquivo “${d.name}” ultrapassa 25 MB.`:""}function Vl({children:o}){return l.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[l.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8",children:[l.jsx(bt,{to:"/","aria-label":"Voltar ao site",children:l.jsx(Za,{size:"sm"})}),l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("span",{className:"hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline",children:"Portal de vídeos"}),l.jsxs(bt,{to:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 hover:text-white",children:[l.jsx(Xl,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})]})}),o]})}function qv({eyebrow:o,title:r,copy:c}){return l.jsxs("section",{className:"relative overflow-hidden border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16",children:[l.jsx("div",{className:"pointer-events-none absolute inset-0 bg-led-grid opacity-35"}),l.jsx("div",{className:"pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]"}),l.jsxs("div",{className:"relative mx-auto max-w-4xl text-center",children:[l.jsxs("p",{className:"brand-eyebrow justify-center",children:[l.jsx("span",{className:"brand-eyebrow-line"}),o]}),l.jsx("h1",{className:"brand-section-title",children:r}),l.jsx("p",{className:"brand-section-copy mx-auto",children:c})]})]})}function Yu(){const[o,r]=b.useState([]),[c,d]=b.useState(""),[m,f]=b.useState(!0),[v,g]=b.useState("");b.useEffect(()=>{document.title="Escolha seu negócio | VM MÍDIAS",Sv().then(r).catch(E=>g(E instanceof Error?E.message:"Não foi possível carregar os negócios.")).finally(()=>f(!1))},[]);const N=b.useMemo(()=>{const E=c.trim().toLocaleLowerCase("pt-BR");return E?o.filter(j=>`${j.name} ${j.segment}`.toLocaleLowerCase("pt-BR").includes(E)):o},[o,c]);return l.jsx(Vl,{children:l.jsxs("main",{children:[l.jsx(qv,{eyebrow:"Seu espaço na VM MÍDIAS",title:l.jsxs(l.Fragment,{children:["Encontre seu ",l.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Pesquise o nome do seu negócio para consultar os dados cadastrados e solicitar um novo vídeo."}),l.jsxs("section",{className:"mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14",children:[l.jsxs("div",{className:"flex flex-col gap-4 rounded-2xl border border-white/12 bg-[#0d0f13] p-4 sm:flex-row sm:items-center sm:p-5",children:[l.jsxs("label",{className:"relative min-w-0 flex-1",children:[l.jsx(Ps,{className:"pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35"}),l.jsx("input",{value:c,onChange:E=>d(E.target.value),className:"h-14 w-full rounded-xl border border-white/15 bg-black/30 pl-12 pr-4 text-base outline-none placeholder:text-white/35 focus:border-[#f40b36]",placeholder:"Digite o nome do negócio",autoFocus:!0})]}),l.jsxs(bt,{to:"/solicitar-video/novo-negocio",className:"brand-button brand-button-primary whitespace-nowrap",children:[l.jsx(hv,{className:"h-4 w-4"}),"Cadastrar negócio"]})]}),v&&l.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),m?l.jsx("div",{className:"flex min-h-64 items-center justify-center",children:l.jsx(fa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):N.length?l.jsx("div",{className:"mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:N.map(E=>l.jsx(vE,{business:E},E.id))}):l.jsxs("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center",children:[l.jsx(Zl,{className:"mx-auto h-9 w-9 text-white/25"}),l.jsx("h2",{className:"mt-4 text-xl font-black",children:"Negócio não encontrado"}),l.jsx("p",{className:"mt-2 text-sm text-white/50",children:"Confira o nome ou cadastre o negócio para continuar."})]})]})]})})}function vE({business:o}){const r=o.assets[0];return l.jsxs(bt,{to:`/solicitar-video/negocio/${o.id}`,className:"group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f13] p-5 transition hover:-translate-y-1 hover:border-[#f40b36]/55 hover:shadow-2xl hover:shadow-[#f40b36]/10",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35",children:r?l.jsx("img",{src:Fn(r.path),alt:`Logo de ${o.name}`,className:"h-full w-full object-contain p-2"}):l.jsx(Zl,{className:"h-8 w-8 text-white/30"})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("h2",{className:"truncate text-xl font-black",children:o.name}),l.jsx("p",{className:"mt-1 truncate text-sm text-white/50",children:o.segment})]})]}),l.jsxs("span",{className:"mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.1em] text-white/65 group-hover:text-white",children:["Abrir negócio ",l.jsx(xt,{className:"h-4 w-4"})]})]})}const Lv={name:"",whatsapp:"",instagram:"",address:"",segment:"",description:"",consent:!1};function Pu(){const[o,r]=b.useState(Lv),[c,d]=b.useState([]),[m,f]=b.useState(!1),[v,g]=b.useState(""),[N,E]=b.useState(null);b.useEffect(()=>{document.title="Cadastrar negócio | VM MÍDIAS"},[]);const j=x=>{const M=Array.from(x.target.files??[]);x.target.value="";const V=Ju(c,M);if(V)return g(V);g(""),d(k=>[...k,...M])},h=async x=>{if(x.preventDefault(),g(""),!c.length)return g("Envie o logo ou ao menos uma imagem do negócio.");f(!0);try{const M=crypto.randomUUID(),V=await Ev(M,c),k={id:M,name:o.name.trim(),whatsapp:Ht(o.whatsapp),instagram:Ht(o.instagram),address:Ht(o.address),segment:o.segment.trim(),description:Ht(o.description),assets:V,consent:!0};await JN(k),E({...k,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),window.scrollTo({top:0,behavior:"smooth"})}catch(M){g(M instanceof Error?M.message:"Não foi possível cadastrar o negócio.")}finally{f(!1)}};return N?l.jsx(Bv,{title:"Negócio cadastrado",copy:"Agora o negócio já pode ser encontrado na pesquisa e receber novas solicitações de vídeo.",action:l.jsxs(bt,{to:`/solicitar-video/negocio/${N.id}`,className:"brand-button brand-button-primary",children:["Abrir negócio ",l.jsx(xt,{className:"h-4 w-4"})]})}):l.jsx(Vl,{children:l.jsxs("main",{children:[l.jsx(qv,{eyebrow:"Primeiro acesso",title:l.jsxs(l.Fragment,{children:["Cadastre seu ",l.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Preencha somente as informações principais. Elas ficarão salvas para os próximos vídeos."}),l.jsx("section",{className:"mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14",children:l.jsxs("form",{onSubmit:h,className:"brand-panel rounded-2xl p-5 sm:p-8",children:[l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsxs("label",{className:`${_a} sm:col-span-2`,children:["Nome do negócio *",l.jsx("input",{required:!0,maxLength:120,value:o.name,onChange:x=>r({...o,name:x.target.value}),className:wa,placeholder:"Nome do negócio"})]}),l.jsxs("label",{className:_a,children:["Segmento do negócio *",l.jsx("input",{required:!0,maxLength:120,value:o.segment,onChange:x=>r({...o,segment:x.target.value}),className:wa,placeholder:"Ex.: bar, mercado, academia"})]}),l.jsxs("label",{className:_a,children:["Endereço (caso seja físico)",l.jsx("input",{maxLength:300,value:o.address,onChange:x=>r({...o,address:x.target.value}),className:wa,placeholder:"Rua, número e bairro"})]}),l.jsxs("label",{className:_a,children:["WhatsApp",l.jsx("input",{maxLength:30,value:o.whatsapp,onChange:x=>r({...o,whatsapp:x.target.value}),className:wa,placeholder:"(15) 99999-9999"})]}),l.jsxs("label",{className:_a,children:["Instagram",l.jsx("input",{maxLength:120,value:o.instagram,onChange:x=>r({...o,instagram:x.target.value}),className:wa,placeholder:"@nomedonegocio"})]})]}),l.jsxs("label",{className:`${_a} mt-5`,children:["Faça uma breve descrição sobre o negócio",l.jsx("textarea",{rows:4,maxLength:1200,value:o.description,onChange:x=>r({...o,description:x.target.value}),className:wa,placeholder:"Conte brevemente o que o negócio oferece"})]}),l.jsx(Wu,{files:c,onFiles:j,onRemove:x=>d(M=>M.filter((V,k)=>k!==x)),title:"Logo e imagens do negócio *",copy:"Envie primeiro o logo e depois fotos da fachada, ambiente, produtos ou serviços. Máximo de 5 imagens."}),l.jsx(kv,{checked:o.consent,onChange:x=>r({...o,consent:x})}),v&&l.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),l.jsx("button",{disabled:m,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:m?l.jsxs(l.Fragment,{children:[l.jsx(fa,{className:"h-4 w-4 animate-spin"}),"Salvando negócio…"]}):l.jsxs(l.Fragment,{children:["Cadastrar negócio ",l.jsx(xt,{className:"h-4 w-4"})]})})]})})]})})}function k0(){const{businessId:o=""}=Mb(),[r,c]=b.useState(null),[d,m]=b.useState(!0),[f,v]=b.useState(!1),[g,N]=b.useState(Lv),[E,j]=b.useState([]),[h,x]=b.useState(""),[M,V]=b.useState(""),[k,B]=b.useState(""),[q,Y]=b.useState([]),[G,oe]=b.useState(!1),[L,se]=b.useState(!1),[K,W]=b.useState(""),[P,H]=b.useState("");b.useEffect(()=>{Sv().then(U=>{const $=U.find(ae=>ae.id===o)||null;c($),$&&N({name:$.name,whatsapp:$.whatsapp||"",instagram:$.instagram||"",address:$.address||"",segment:$.segment,description:$.description||"",consent:!0})}).catch(U=>W(U instanceof Error?U.message:"Não foi possível abrir o negócio.")).finally(()=>m(!1))},[o]);const F=U=>{const $=Array.from(U.target.files??[]);U.target.value="";const ae=Ju(q,$);if(ae)return W(ae);W(""),Y(ve=>[...ve,...$])},ee=U=>{const $=Array.from(U.target.files??[]);U.target.value="";const ae=Ju(E,$);if(ae)return W(ae);if(((r==null?void 0:r.assets.length)||0)+E.length+$.length>10)return W("O negócio pode possuir no máximo 10 imagens.");W(""),j(ve=>[...ve,...$])},ce=async()=>{if(r){se(!0),W("");try{const U=E.length?await Ev(r.id,E,r.assets.length):[],$={name:g.name.trim(),whatsapp:Ht(g.whatsapp),instagram:Ht(g.instagram),address:Ht(g.address),segment:g.segment.trim(),description:Ht(g.description)};await WN(r.id,$,U),c({...r,...$,assets:[...r.assets,...U],updated_at:new Date().toISOString()}),j([]),v(!1)}catch(U){W(U instanceof Error?U.message:"Não foi possível alterar os dados.")}finally{se(!1)}}},Ie=async U=>{if(U.preventDefault(),!!r){if(W(""),!h)return W("Escolha um objetivo para o vídeo.");se(!0);try{const $=crypto.randomUUID(),ae=hE(),ve=q.length?await KN($,q,r.id):[];await ej({id:$,business_id:r.id,protocol:ae,campaign_objective:h,objective_other:h==="outro"?Ht(M):null,video_idea:k.trim(),uploaded_assets:ve,consent:!0,video_format:"vertical_9_16",duration_seconds:20}),H(ae),window.scrollTo({top:0,behavior:"smooth"})}catch($){W($ instanceof Error?$.message:"Não foi possível enviar o pedido.")}finally{se(!1)}}};if(d)return l.jsx(Vl,{children:l.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:l.jsx(fa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})})});if(!r)return l.jsx(Vl,{children:l.jsxs("div",{className:"mx-auto max-w-xl px-5 py-24 text-center",children:[l.jsx("h1",{className:"text-3xl font-black",children:"Negócio não encontrado"}),l.jsx(bt,{to:"/solicitar-video",className:"brand-button brand-button-primary mt-7",children:"Voltar para a pesquisa"})]})});if(P)return l.jsx(Bv,{title:"Novo vídeo solicitado",copy:`Recebemos o pedido de ${r.name}. Guarde o protocolo ${P}.`,action:l.jsx(bt,{to:"/solicitar-video",className:"brand-button brand-button-primary",children:"Voltar aos negócios"})});const me=r.assets[0];return l.jsx(Vl,{children:l.jsxs("main",{className:"mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14",children:[l.jsxs(bt,{to:"/solicitar-video",className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[l.jsx(Xl,{className:"h-4 w-4"}),"Voltar para a pesquisa"]}),l.jsxs("section",{className:"mt-6 rounded-2xl border border-white/12 bg-[#0d0f13] p-5 sm:p-8",children:[l.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[l.jsx("div",{className:"flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-black/30",children:me?l.jsx("img",{src:Fn(me.path),alt:`Logo de ${r.name}`,className:"h-full w-full object-contain p-2"}):l.jsx(Zl,{className:"h-9 w-9 text-white/30"})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Negócio cadastrado"}),l.jsx("h1",{className:"mt-2 text-3xl font-black sm:text-5xl",children:r.name}),l.jsxs("p",{className:"mt-2 text-white/50",children:[r.segment,r.address?` · ${r.address}`:""]})]}),l.jsxs("button",{type:"button",onClick:()=>v(!f),className:"brand-button brand-button-outline",children:[l.jsx(F2,{className:"h-4 w-4"}),"Alterar informações"]})]}),f&&l.jsxs("div",{className:"mt-7 border-t border-white/10 pt-7",children:[l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsxs("label",{className:`${_a} sm:col-span-2`,children:["Nome do negócio *",l.jsx("input",{required:!0,value:g.name,onChange:U=>N({...g,name:U.target.value}),className:wa})]}),l.jsxs("label",{className:_a,children:["Segmento *",l.jsx("input",{required:!0,value:g.segment,onChange:U=>N({...g,segment:U.target.value}),className:wa})]}),l.jsxs("label",{className:_a,children:["Endereço",l.jsx("input",{value:g.address,onChange:U=>N({...g,address:U.target.value}),className:wa})]}),l.jsxs("label",{className:_a,children:["WhatsApp",l.jsx("input",{value:g.whatsapp,onChange:U=>N({...g,whatsapp:U.target.value}),className:wa})]}),l.jsxs("label",{className:_a,children:["Instagram",l.jsx("input",{maxLength:120,value:g.instagram,onChange:U=>N({...g,instagram:U.target.value}),className:wa,placeholder:"@nomedonegocio"})]})]}),l.jsxs("label",{className:`${_a} mt-5`,children:["Descrição",l.jsx("textarea",{rows:3,value:g.description,onChange:U=>N({...g,description:U.target.value}),className:wa})]}),l.jsx(Wu,{files:E,onFiles:ee,onRemove:U=>j($=>$.filter((ae,ve)=>ve!==U)),title:"Adicionar novas imagens",copy:`Este negócio possui ${r.assets.length} de 10 imagens. Você pode adicionar até 5 por vez.`}),l.jsxs("button",{type:"button",disabled:L,onClick:()=>void ce(),className:"brand-button brand-button-primary mt-5 disabled:opacity-50",children:[L?l.jsx(fa,{className:"h-4 w-4 animate-spin"}):null,"Salvar alterações"]})]})]}),l.jsxs("form",{onSubmit:Ie,className:"brand-panel mt-7 rounded-2xl p-5 sm:p-8",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Novo pedido"}),l.jsx("h2",{className:"mt-2 text-2xl font-black sm:text-4xl",children:"Solicitar novo vídeo"}),l.jsxs("p",{className:"mt-3 text-sm leading-6 text-white/50",children:["O pedido ficará automaticamente relacionado a ",r.name,"."]}),l.jsxs("fieldset",{className:"mt-8",children:[l.jsx("legend",{className:"text-base font-black",children:"1. Objetivo do vídeo *"}),l.jsx("p",{className:"mt-1 text-sm text-white/45",children:"Escolha apenas uma opção."}),l.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:pE.map(([U,$])=>l.jsxs("label",{className:`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition ${h===U?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-black/20 hover:border-white/25"}`,children:[l.jsx("input",{required:!0,type:"radio",name:"objective",value:U,checked:h===U,onChange:()=>x(U),className:"h-4 w-4 accent-[#f40b36]"}),$]},U))}),h==="outro"&&l.jsxs("label",{className:`${_a} mt-4`,children:["Qual?",l.jsx("input",{maxLength:300,value:M,onChange:U=>V(U.target.value),className:wa,placeholder:"Descreva o outro objetivo"})]})]}),l.jsxs("label",{className:`${_a} mt-8`,children:["2. Escreva brevemente o que deseja no vídeo",l.jsx("textarea",{rows:5,maxLength:2400,value:k,onChange:U=>B(U.target.value),className:wa,placeholder:"Conte sua ideia de forma simples"}),l.jsxs("span",{className:"mt-2 block text-xs font-normal text-white/35",children:[k.length,"/2400 caracteres"]})]}),l.jsx(Wu,{files:q,onFiles:F,onRemove:U=>Y($=>$.filter((ae,ve)=>ve!==U)),title:"3. Imagens adicionais",copy:"Envie somente imagens úteis para este novo vídeo. Máximo de 5 imagens."}),l.jsx(kv,{checked:G,onChange:oe}),K&&l.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:K}),l.jsx("button",{disabled:L,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:L?l.jsxs(l.Fragment,{children:[l.jsx(fa,{className:"h-4 w-4 animate-spin"}),"Enviando pedido…"]}):l.jsxs(l.Fragment,{children:["Solicitar novo vídeo ",l.jsx(xt,{className:"h-4 w-4"})]})})]})]})})}function Wu({files:o,onFiles:r,onRemove:c,title:d,copy:m}){return l.jsxs("div",{className:"mt-7",children:[l.jsx("p",{className:"text-sm font-bold",children:d}),l.jsxs("label",{className:"mt-2 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/20 bg-black/20 px-5 py-7 text-center hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5",children:[l.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp,image/svg+xml",onChange:r,className:"sr-only"}),l.jsx(i2,{className:"h-7 w-7 text-[#ff3155]"}),l.jsx("strong",{className:"mt-3 text-sm",children:"Escolher imagens"}),l.jsx("span",{className:"mt-2 max-w-lg text-xs leading-5 text-white/40",children:m})]}),o.length>0&&l.jsx("ul",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:o.map((f,v)=>l.jsxs("li",{className:"flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[l.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]",children:f.type.startsWith("image/")?l.jsx(w2,{className:"h-4 w-4"}):l.jsx(v2,{className:"h-4 w-4"})}),l.jsx("span",{className:"min-w-0 flex-1 truncate text-xs font-bold",children:f.name}),l.jsx("button",{type:"button",onClick:()=>c(v),"aria-label":`Remover ${f.name}`,className:"rounded-md p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300",children:l.jsx(fd,{className:"h-4 w-4"})})]},`${f.name}-${f.lastModified}-${v}`))})]})}function kv({checked:o,onChange:r}){return l.jsxs("label",{className:"mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60",children:[l.jsx("input",{required:!0,type:"checkbox",checked:o,onChange:c=>r(c.target.checked),className:"mt-1 h-4 w-4 accent-[#f40b36]"}),"Autorizo a VM MÍDIAS a utilizar as informações e imagens enviadas para produzir os vídeos e entrar em contato."]})}function Bv({title:o,copy:r,action:c}){return l.jsx(Vl,{children:l.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-76px)] max-w-2xl items-center px-5 py-16",children:l.jsxs("section",{className:"w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-8 text-center",children:[l.jsx(a2,{className:"mx-auto h-14 w-14 text-emerald-300"}),l.jsx("h1",{className:"mt-6 text-3xl font-black sm:text-5xl",children:o}),l.jsx("p",{className:"mx-auto mt-4 max-w-lg leading-7 text-white/55",children:r}),l.jsx("div",{className:"mt-8",children:c})]})})})}function gE(){return l.jsxs($b,{children:[l.jsx(ma,{path:"/admin",element:l.jsx(N0,{})}),l.jsx(ma,{path:"/admin/solicitacoes",element:l.jsx(N0,{})}),l.jsx(ma,{path:"/admin/noticias",element:l.jsx(yj,{})}),l.jsx(ma,{path:"/admin/verao-premiado",element:l.jsx(rE,{})}),l.jsx(ma,{path:"/veraopremiado",element:l.jsx(Vj,{})}),l.jsx(ma,{path:"/solicitar-video",element:l.jsx(Yu,{})}),l.jsx(ma,{path:"/solicitar-video/novo-negocio",element:l.jsx(Pu,{})}),l.jsx(ma,{path:"/solicitar-video/negocio/:businessId",element:l.jsx(k0,{})}),l.jsx(ma,{path:"/solicitar-video/novo-comercio",element:l.jsx(Pu,{})}),l.jsx(ma,{path:"/solicitar-video/comercio/:businessId",element:l.jsx(k0,{})}),l.jsx(ma,{path:"/solicitar-video/novo-cliente",element:l.jsx(Pu,{})}),l.jsx(ma,{path:"/solicitar-video/cliente-atual",element:l.jsx(Yu,{})}),l.jsx(ma,{path:"/solicitar-arte",element:l.jsx(Yu,{})}),l.jsx(ma,{path:"/politica-de-privacidade",element:l.jsx($N,{})}),l.jsx(ma,{path:"*",element:l.jsx(xE,{})})]})}function xE(){const[o,r]=b.useState(!1),[c,d]=b.useState("DESTAQUE"),[m,f]=b.useState("anual"),v=(g,N)=>{d(g),f(N)};return l.jsxs("div",{className:"min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#F8032D] selection:text-white flex flex-col",children:[l.jsx(MN,{}),l.jsxs("main",{className:"flex-grow",children:[l.jsx(zN,{}),l.jsx(qN,{}),l.jsx(LN,{}),l.jsx(kN,{onSelectPlan:v}),l.jsx(HN,{}),l.jsx(IN,{}),l.jsx(VN,{}),l.jsx(GN,{selectedPlanName:c,selectedPlanCycle:m})]}),l.jsx(YN,{onOpenPrivacyModal:()=>r(!0)}),l.jsx(PN,{}),l.jsx(QN,{isOpen:o,onClose:()=>r(!1)})]})}P1.createRoot(document.getElementById("root")).render(l.jsx(b.StrictMode,{children:l.jsx(gy,{children:l.jsx(gE,{})})}));
