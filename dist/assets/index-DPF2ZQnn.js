(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const f of m)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function c(m){const f={};return m.integrity&&(f.integrity=m.integrity),m.referrerPolicy&&(f.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?f.credentials="include":m.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(m){if(m.ep)return;m.ep=!0;const f=c(m);fetch(m.href,f)}})();var Mu={exports:{}},Gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function jb(){if(Yh)return Gl;Yh=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(d,m,f){var v=null;if(f!==void 0&&(v=""+f),m.key!==void 0&&(v=""+m.key),"key"in m){f={};for(var g in m)g!=="key"&&(f[g]=m[g])}else f=m;return m=f.ref,{$$typeof:s,type:d,key:v,ref:m!==void 0?m:null,props:f}}return Gl.Fragment=r,Gl.jsx=c,Gl.jsxs=c,Gl}var Qh;function Sb(){return Qh||(Qh=1,Mu.exports=jb()),Mu.exports}var i=Sb(),Du={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function Ab(){if(Ph)return le;Ph=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),v=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),N=Symbol.for("react.view_transition"),U=Symbol.iterator;function I(S){return S===null||typeof S!="object"?null:(S=U&&S[U]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function Y(S,L,ae){this.props=S,this.context=L,this.refs=q,this.updater=ae||k}Y.prototype.isReactComponent={},Y.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},Y.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function H(){}H.prototype=Y.prototype;function oe(S,L,ae){this.props=S,this.context=L,this.refs=q,this.updater=ae||k}var ue=oe.prototype=new H;ue.constructor=oe,B(ue,Y.prototype),ue.isPureReactComponent=!0;var J=Array.isArray;function Q(){}var X={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function P(S,L,ae){var K=ae.ref;return{$$typeof:s,type:S,key:L,ref:K!==void 0?K:null,props:ae}}function se(S,L){return P(S.type,L,S.props)}function de(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function qe(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ae){return L[ae]})}var Ie=/\/+/g;function re(S,L){return typeof S=="object"&&S!==null&&S.key!=null?qe(""+S.key):L.toString(36)}function z(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Q,Q):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function V(S,L,ae,K,ye){var Se=typeof S;(Se==="undefined"||Se==="boolean")&&(S=null);var we=!1;if(S===null)we=!0;else switch(Se){case"bigint":case"string":case"number":we=!0;break;case"object":switch(S.$$typeof){case s:case r:we=!0;break;case E:return we=S._init,V(we(S._payload),L,ae,K,ye)}}if(we)return ye=ye(S),we=K===""?"."+re(S,0):K,J(ye)?(ae="",we!=null&&(ae=we.replace(Ie,"$&/")+"/"),V(ye,L,ae,"",function(St){return St})):ye!=null&&(de(ye)&&(ye=se(ye,ae+(ye.key==null||S&&S.key===ye.key?"":(""+ye.key).replace(Ie,"$&/")+"/")+we)),L.push(ye)),1;we=0;var ee=K===""?".":K+":";if(J(S))for(var ie=0;ie<S.length;ie++)K=S[ie],Se=ee+re(K,ie),we+=V(K,L,ae,Se,ye);else if(ie=I(S),typeof ie=="function")for(S=ie.call(S),ie=0;!(K=S.next()).done;)K=K.value,Se=ee+re(K,ie++),we+=V(K,L,ae,Se,ye);else if(Se==="object"){if(typeof S.then=="function")return V(z(S),L,ae,K,ye);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return we}function F(S,L,ae){if(S==null)return S;var K=[],ye=0;return V(S,K,"","",function(Se){return L.call(ae,Se,ye++)}),K}function pe(S){if(S._status===-1){var L=S._result,ae=L();ae.then(function(K){(S._status===0||S._status===-1)&&(S._status=1,S._result=K,ae.status===void 0&&(ae.status="fulfilled",ae.value=K))},function(K){(S._status===0||S._status===-1)&&(S._status=2,S._result=K,ae.status===void 0&&(ae.status="rejected",ae.reason=K))}),S._status===-1&&(S._status=0,S._result=ae)}if(S._status===1)return S._result.default;throw S._result}var Ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function ce(S){var L=X.T,ae={};ae.types=L!==null?L.types:null,X.T=ae;try{var K=S(),ye=X.S;ye!==null&&ye(ae,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Q,Ee)}catch(Se){Ee(Se)}finally{L!==null&&ae.types!==null&&(L.types=ae.types),X.T=L}}function je(S){var L=X.T;if(L!==null){var ae=L.types;ae===null?L.types=[S]:ae.indexOf(S)===-1&&ae.push(S)}else ce(je.bind(null,S))}var $e={map:F,forEach:function(S,L,ae){F(S,function(){L.apply(this,arguments)},ae)},count:function(S){var L=0;return F(S,function(){L++}),L},toArray:function(S){return F(S,function(L){return L})||[]},only:function(S){if(!de(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return le.Activity=h,le.Children=$e,le.Component=Y,le.Fragment=c,le.Profiler=m,le.PureComponent=oe,le.StrictMode=d,le.Suspense=y,le.ViewTransition=N,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,le.__COMPILER_RUNTIME={__proto__:null,c:function(S){return X.H.useMemoCache(S)}},le.addTransitionType=je,le.cache=function(S){return function(){return S.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(S,L,ae){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var K=B({},S.props),ye=S.key;if(L!=null)for(Se in L.key!==void 0&&(ye=""+L.key),L)!Te.call(L,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&L.ref===void 0||(K[Se]=L[Se]);var Se=arguments.length-2;if(Se===1)K.children=ae;else if(1<Se){for(var we=Array(Se),ee=0;ee<Se;ee++)we[ee]=arguments[ee+2];K.children=we}return P(S.type,ye,K)},le.createContext=function(S){return S={$$typeof:v,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},le.createElement=function(S,L,ae){var K,ye={},Se=null;if(L!=null)for(K in L.key!==void 0&&(Se=""+L.key),L)Te.call(L,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ye[K]=L[K]);var we=arguments.length-2;if(we===1)ye.children=ae;else if(1<we){for(var ee=Array(we),ie=0;ie<we;ie++)ee[ie]=arguments[ie+2];ye.children=ee}if(S&&S.defaultProps)for(K in we=S.defaultProps,we)ye[K]===void 0&&(ye[K]=we[K]);return P(S,Se,ye)},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:g,render:S}},le.isValidElement=de,le.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:pe}},le.memo=function(S,L){return{$$typeof:A,type:S,compare:L===void 0?null:L}},le.startTransition=ce,le.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},le.use=function(S){return X.H.use(S)},le.useActionState=function(S,L,ae){return X.H.useActionState(S,L,ae)},le.useCallback=function(S,L){return X.H.useCallback(S,L)},le.useContext=function(S){return X.H.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S,L){return X.H.useDeferredValue(S,L)},le.useEffect=function(S,L){return X.H.useEffect(S,L)},le.useEffectEvent=function(S){return X.H.useEffectEvent(S)},le.useId=function(){return X.H.useId()},le.useImperativeHandle=function(S,L,ae){return X.H.useImperativeHandle(S,L,ae)},le.useInsertionEffect=function(S,L){return X.H.useInsertionEffect(S,L)},le.useLayoutEffect=function(S,L){return X.H.useLayoutEffect(S,L)},le.useMemo=function(S,L){return X.H.useMemo(S,L)},le.useOptimistic=function(S,L){return X.H.useOptimistic(S,L)},le.useReducer=function(S,L,ae){return X.H.useReducer(S,L,ae)},le.useRef=function(S){return X.H.useRef(S)},le.useState=function(S){return X.H.useState(S)},le.useSyncExternalStore=function(S,L,ae){return X.H.useSyncExternalStore(S,L,ae)},le.useTransition=function(){return X.H.useTransition()},le.version="19.3.0",le}var Xh;function ed(){return Xh||(Xh=1,Du.exports=Ab()),Du.exports}var b=ed(),zu={exports:{}},Yl={},Uu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function wb(){return $h||($h=1,(function(s){function r(z,V){var F=z.length;z.push(V);e:for(;0<F;){var pe=F-1>>>1,Ee=z[pe];if(0<m(Ee,V))z[pe]=V,z[F]=Ee,F=pe;else break e}}function c(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var V=z[0],F=z.pop();if(F!==V){z[0]=F;e:for(var pe=0,Ee=z.length,ce=Ee>>>1;pe<ce;){var je=2*(pe+1)-1,$e=z[je],S=je+1,L=z[S];if(0>m($e,F))S<Ee&&0>m(L,$e)?(z[pe]=L,z[S]=F,pe=S):(z[pe]=$e,z[je]=F,pe=je);else if(S<Ee&&0>m(L,F))z[pe]=L,z[S]=F,pe=S;else break e}}return V}function m(z,V){var F=z.sortIndex-V.sortIndex;return F!==0?F:z.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var v=Date,g=v.now();s.unstable_now=function(){return v.now()-g}}var y=[],A=[],E=1,h=null,N=3,U=!1,I=!1,k=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function oe(z){for(var V=c(A);V!==null;){if(V.callback===null)d(A);else if(V.startTime<=z)d(A),V.sortIndex=V.expirationTime,r(y,V);else break;V=c(A)}}function ue(z){if(k=!1,oe(z),!I)if(c(y)!==null)I=!0,J||(J=!0,de());else{var V=c(A);V!==null&&re(ue,V.startTime-z)}}var J=!1,Q=-1,X=5,Te=-1;function P(){return B?!0:!(s.unstable_now()-Te<X)}function se(){if(B=!1,J){var z=s.unstable_now();Te=z;var V=!0;try{e:{I=!1,k&&(k=!1,Y(Q),Q=-1),U=!0;var F=N;try{a:{for(oe(z),h=c(y);h!==null&&!(h.expirationTime>z&&P());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,N=h.priorityLevel;var Ee=pe(h.expirationTime<=z);if(z=s.unstable_now(),typeof Ee=="function"){h.callback=Ee,oe(z),V=!0;break a}h===c(y)&&d(y),oe(z)}else d(y);h=c(y)}if(h!==null)V=!0;else{var ce=c(A);ce!==null&&re(ue,ce.startTime-z),V=!1}}break e}finally{h=null,N=F,U=!1}V=void 0}}finally{V?de():J=!1}}}var de;if(typeof H=="function")de=function(){H(se)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Ie=qe.port2;qe.port1.onmessage=se,de=function(){Ie.postMessage(null)}}else de=function(){q(se,0)};function re(z,V){Q=q(function(){z(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(z){switch(N){case 1:case 2:case 3:var V=3;break;default:V=N}var F=N;N=V;try{return z()}finally{N=F}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=N;N=z;try{return V()}finally{N=F}},s.unstable_scheduleCallback=function(z,V,F){var pe=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=F+Ee,z={id:E++,callback:V,priorityLevel:z,startTime:F,expirationTime:Ee,sortIndex:-1},F>pe?(z.sortIndex=F,r(A,z),c(y)===null&&z===c(A)&&(k?(Y(Q),Q=-1):k=!0,re(ue,F-pe))):(z.sortIndex=Ee,r(y,z),I||U||(I=!0,J||(J=!0,de()))),z},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(z){var V=N;return function(){var F=N;N=V;try{return z.apply(this,arguments)}finally{N=F}}}})(qu)),qu}var Zh;function Ob(){return Zh||(Zh=1,Uu.exports=wb()),Uu.exports}var Lu={exports:{}},fa={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Tb(){if(Kh)return fa;Kh=1;var s=ed();function r(E){var h="https://react.dev/errors/"+E;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)h+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+E+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var d={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},m=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function g(E,h,N){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:U===v?v:""+U,children:E,containerInfo:h,implementation:N}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(E,h){if(E==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return fa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,fa.browser=function(E){return{$$typeof:f,_reason:E}},fa.createPortal=function(E,h){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return g(E,h,null,N)},fa.flushSync=function(E){var h=y.T,N=d.p;try{if(y.T=null,d.p=2,E)return E()}finally{y.T=h,d.p=N,d.d.f()}},fa.preconnect=function(E,h){typeof E=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(E,h))},fa.prefetchDNS=function(E){typeof E=="string"&&d.d.D(E)},fa.preinit=function(E,h){if(typeof E=="string"&&h&&typeof h.as=="string"){var N=h.as,U=A(N,h.crossOrigin),I=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;N==="style"?d.d.S(E,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:U,integrity:I,fetchPriority:k}):N==="script"&&d.d.X(E,{crossOrigin:U,integrity:I,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},fa.preinitModule=function(E,h){if(typeof E=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var N=A(h.as,h.crossOrigin);d.d.M(E,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}}else h==null&&d.d.M(E)},fa.preload=function(E,h){if(typeof E=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var N=h.as,U=A(N,h.crossOrigin);d.d.L(E,N,{crossOrigin:U,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},fa.preloadModule=function(E,h){if(typeof E=="string")if(h){var N=A(h.as,h.crossOrigin);d.d.m(E,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}else d.d.m(E)},fa.requestFormReset=function(E){d.d.r(E)},fa.unstable_batchedUpdates=function(E,h){return E(h)},fa.useFormState=function(E,h,N){return y.H.useFormState(E,h,N)},fa.useFormStatus=function(){return y.H.useHostTransitionStatus()},fa.version="19.3.0",fa}var Fh;function Cb(){if(Fh)return Lu.exports;Fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Lu.exports=Tb(),Lu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Rb(){if(Jh)return Yl;Jh=1;var s=Ob(),r=ed(),c=Cb();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var a=e,t=a;t&&!t.alternate;)a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(d(188))}function A(e){var a=e.alternate;if(!a){if(a=f(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,n=a;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return y(l),e;if(o===n)return y(l),a;o=o.sibling}throw Error(d(188))}if(t.return!==n.return)t=l,n=o;else{for(var u=!1,p=l.child;p;){if(p===t){u=!0,t=l,n=o;break}if(p===n){u=!0,n=l,t=o;break}p=p.sibling}if(!u){for(p=o.child;p;){if(p===t){u=!0,t=o,n=l;break}if(p===n){u=!0,n=o,t=l;break}p=p.sibling}if(!u)throw Error(d(189))}}if(t.alternate!==n)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function E(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=E(e),a!==null)return a;e=e.sibling}return null}function h(e,a,t,n,l,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,n,l,o)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&h(e.child,a,t,n,l,o))return!0;e=e.sibling}return!1}function N(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function U(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function I(e){var a=[null,null],t=N(e);return t===null||k(a,e,t.child,{foundSelf:!1}),a}function k(e,a,t,n){for(;t!==null;){if(t===a)n.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(n.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&k(e,a,t.child,n))return!0;t=t.sibling}return!1}function B(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(d(559))}}var q=null,Y=null;function H(e,a,t){return e===t?!0:e===a?(q=e,!0):!1}function oe(e,a,t){return e===t?(Y=e,!1):e===a?(Y!==null&&(q=e),!0):!1}function ue(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function J(e,a,t){for(var n=0,l=e;l;l=t(l))n++;l=0;for(var o=a;o;o=t(o))l++;for(;0<n-l;)e=t(e),n--;for(;0<l-n;)a=t(a),l--;for(;n--;){if(e===a||a!==null&&e===a.alternate)return e;e=t(e),a=t(a)}return null}var Q=Object.assign,X=Symbol.for("react.element"),Te=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),Ie=Symbol.for("react.consumer"),re=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),je=Symbol.for("react.legacy_hidden"),$e=Symbol.for("react.memo_cache_sentinel"),S=Symbol.for("react.view_transition"),L=Symbol.for("react.recoverable"),ae=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case se:return"Fragment";case qe:return"Profiler";case de:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case ce:return"Activity";case S:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case re:return e.displayName||"Context";case Ie:return(e._context.displayName||"Context")+".Consumer";case z:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pe:return a=e.displayName||null,a!==null?a:Se(e.type)||"Memo";case Ee:a=e._payload,e=e._init;try{return Se(e(a))}catch{}}return null}var we=Array.isArray,ee=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St={pending:!1,data:null,method:null,action:null},Fs=[],Kn=-1;function ot(e){return{current:e}}function oa(e){0>Kn||(e.current=Fs[Kn],Fs[Kn]=null,Kn--)}function Le(e,a){Kn++,Fs[Kn]=e.current,e.current=a}var st=ot(null),Zi=ot(null),Qt=ot(null),to=ot(null);function no(e,a){switch(Le(Qt,a),Le(Zi,e),Le(st,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Wp(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Wp(a),e=eh(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}oa(st),Le(st,e)}function Fn(){oa(st),oa(Zi),oa(Qt)}function Js(e){var a=e.memoizedState;a!==null&&(ki._currentValue=a.memoizedState,Le(to,e)),a=st.current;var t=eh(a,e.type);a!==t&&(Le(Zi,e),Le(st,t))}function io(e){Zi.current===e&&(oa(st),oa(Zi)),to.current===e&&(oa(to),ki._currentValue=St)}var Ws,bd;function Pt(e){if(Ws===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ws=a&&a[1]||"",bd=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ws+e+bd}var er=!1;function ar(e,a){if(!e||er)return"";er=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(G){var w=G}Reflect.construct(e,[],D)}else{try{D.call()}catch(G){w=G}D=!1;try{var R=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),D=!0,new e}finally{D&&(R!==void 0?Object.defineProperty(e.prototype,"props",R):delete e.prototype.props)}}}else{try{throw Error()}catch(G){w=G}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(G){if(G&&w&&typeof G.stack=="string")return[G.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),u=o[0],p=o[1];if(u&&p){var x=u.split(`
`),T=p.split(`
`);for(l=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(n===x.length||l===T.length)for(n=x.length-1,l=T.length-1;1<=n&&0<=l&&x[n]!==T[l];)l--;for(;1<=n&&0<=l;n--,l--)if(x[n]!==T[l]){if(n!==1||l!==1)do if(n--,l--,0>l||x[n]!==T[l]){var _=`
`+x[n].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=n&&0<=l);break}}}finally{er=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Pt(t):""}function O0(e,a){switch(e.tag){case 26:case 27:case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return e.child!==a&&a!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return ar(e.type,!1);case 11:return ar(e.type.render,!1);case 1:return ar(e.type,!0);case 31:return Pt("Activity");case 30:return Pt("ViewTransition");default:return""}}function yd(e){try{var a="",t=null;do a+=O0(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var tr=Object.prototype.hasOwnProperty,nr=s.unstable_scheduleCallback,ir=s.unstable_cancelCallback,T0=s.unstable_shouldYield,C0=s.unstable_requestPaint,Ra=s.unstable_now,R0=s.unstable_getCurrentPriorityLevel,Nd=s.unstable_ImmediatePriority,Ed=s.unstable_UserBlockingPriority,lo=s.unstable_NormalPriority,_0=s.unstable_LowPriority,jd=s.unstable_IdlePriority,M0=s.log,D0=s.unstable_setDisableYieldValue,Ki=null,_a=null;function Xt(e){if(typeof M0=="function"&&D0(e),_a&&typeof _a.setStrictMode=="function")try{_a.setStrictMode(Ki,e)}catch{}}var Ma=Math.clz32?Math.clz32:q0,z0=Math.log,U0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(z0(e)/U0|0)|0}var oo=256,so=262144,ro=4194304;function jn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function co(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~o,n!==0?l=jn(n):(u&=p,u!==0?l=jn(u):t||(t=p&~e,t!==0&&(l=jn(t))))):(p=n&~o,p!==0?l=jn(p):u!==0?l=jn(u):t||(t=n&~e,t!==0&&(l=jn(t)))),l===0?0:a!==0&&a!==l&&(a&o)===0&&(o=l&-l,t=a&-a,o>=t||o===32&&(t&4194048)!==0)?a:l}function Fi(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Sd(e,a){(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-Ma(t),l=1<<n;a|=e[n],t&=~l}return a}function L0(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ad(){var e=ro;return ro<<=1,(ro&62914560)===0&&(ro=4194304),e}function lr(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Ji(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function k0(e,a,t,n,l,o){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,T=e.hiddenUpdates;for(t=u&~t;0<t;){var _=31-Ma(t),D=1<<_;p[_]=0,x[_]=-1;var w=T[_];if(w!==null)for(T[_]=null,_=0;_<w.length;_++){var R=w[_];R!==null&&(R.lane&=-536870913)}t&=~D}n!==0&&wd(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(u&~a))}function wd(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-Ma(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function Od(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-Ma(t),l=1<<n;l&a|e[n]&a&&(e[n]|=a),t&=~l}}function Td(e,a){var t=a&-a;return t=(t&42)!==0?1:or(t),(t&(e.suspendedLanes|a))!==0?0:t}function or(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cd(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:Lh(e.type))}function Rd(e,a){var t=ie.p;try{return ie.p=e,a()}finally{ie.p=t}}var At=Math.random().toString(36).slice(2),sa="__reactFiber$"+At,Ea="__reactProps$"+At,Jn="__reactContainer$"+At,_d="__reactEvents$"+At,B0="__reactListeners$"+At,H0="__reactHandles$"+At,Md="__reactResources$"+At,Wi="__reactMarker$"+At,uo="__reactLoad$"+At;function mo(e){delete e[sa],delete e[Ea],delete e[B0],delete e[H0]}function Sn(e){var a;if(a=e[sa])return a;for(var t=e.parentNode;t;){if(a=t[Jn]||t[sa]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=gh(e);e!==null;){if(t=e[sa])return t;e=gh(e)}return a}e=t,t=e.parentNode}return null}function Wn(e){if(e=e[sa]||e[Jn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function el(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function ei(e){var a=e[Md];return a||(a=e[Md]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function aa(e){e[Wi]=!0}function Dd(e){e[uo]=void 0}var zd=new Set,Ud={};function An(e,a){ai(e,a),ai(e+"Capture",a)}function ai(e,a){for(Ud[e]=a,e=0;e<a.length;e++)zd.add(a[e])}var I0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qd={},Ld={};function V0(e){return tr.call(Ld,e)?!0:tr.call(qd,e)?!1:I0.test(e)?Ld[e]=!0:(qd[e]=!0,!1)}var Ae=!1;function kd(){var e=Ae;return Ae=!1,e}function fo(e,a,t){if(V0(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,t)}}function po(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,t)}}function wt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,n)}}function Da(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function G0(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(u){t=""+u,o.call(this,u)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function rr(e){if(!e._valueTracker){var a=Bd(e)?"checked":"value";e._valueTracker=G0(e,a,""+e[a])}}function Hd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Bd(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}var Y0=/[\n"\\]/g;function Ia(e){return e.replace(Y0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function cr(e,a,t,n,l,o,u,p){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Da(a)):e.value!==""+Da(a)&&(e.value=""+Da(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?u==="number"&&e.value==a?ur(e,Da(e.value)):ur(e,Da(a)):t!=null?ur(e,Da(t)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Da(p):e.removeAttribute("name")}function Id(e,a,t,n,l,o,u,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),a!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||a!=null)){rr(e);return}t=t!=null?""+Da(t):"",a=a!=null?""+Da(a):t,p||a===e.value||(e.value=a),e.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),rr(e)}function ur(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function ti(e,a,t,n){if(e=e.options,a){a={};for(var l=0;l<t.length;l++)a["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=a.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Da(t),a=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function Vd(e,a,t){if(a!=null&&(a=""+Da(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Da(t):""}function Gd(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(d(92));if(we(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Da(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),rr(e)}function ni(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Q0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Q0.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Qd(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",Ae=!0);for(var l in a)n=a[l],a.hasOwnProperty(l)&&t[l]!==n&&(Yd(e,l,n),Ae=!0)}else for(var o in a)a.hasOwnProperty(o)&&Yd(e,o,a[o])}function dr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ho(e){return X0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function rt(){}var mr=null;function fr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,li=null;function Pd(e){var a=Wn(e);if(a&&(e=a.stateNode)){var t=e[Ea]||null;e:switch(e=a.stateNode,a.type){case"input":if(cr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ia(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var l=n[Ea]||null;if(!l)throw Error(d(90));cr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Hd(n)}break e;case"textarea":Vd(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&ti(e,!!t.multiple,a,!1)}}}var pr=!1;function Xd(e,a,t){if(pr)return e(a,t);pr=!0;try{var n=e(a);return n}finally{if(pr=!1,(ii!==null||li!==null)&&(hs(),ii&&(a=ii,e=li,li=ii=null,Pd(a),e)))for(a=0;a<e.length;a++)Pd(e[a])}}function al(e,a){var t=e.stateNode;if(t===null)return null;var n=t[Ea]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hr=!1;if(Ot)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){hr=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{hr=!1}var $t=null,vr=null,vo=null;function $d(){if(vo)return vo;var e,a=vr,t=a.length,n,l="value"in $t?$t.value:$t.textContent,o=l.length;for(e=0;e<t&&a[e]===l[e];e++);var u=t-e;for(n=1;n<=u&&a[t-n]===l[o-n];n++);return vo=l.slice(e,1<n?1-n:void 0)}function go(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function Zd(){return!1}function xa(e){function a(t,n,l,o,u){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xo:Zd,this.isPropagationStopped=Zd,this}return Q(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),a}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=xa(Zt),nl=Q({},Zt,{view:0,detail:0}),$0=xa(nl),gr,xr,il,yo=Q({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(gr=e.screenX-il.screenX,xr=e.screenY-il.screenY):xr=gr=0,il=e),gr)},movementY:function(e){return"movementY"in e?e.movementY:xr}}),Kd=xa(yo),Z0=Q({},yo,{dataTransfer:0}),K0=xa(Z0),F0=Q({},nl,{relatedTarget:0}),br=xa(F0),J0=Q({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=xa(J0),eg=Q({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ag=xa(eg),tg=Q({},Zt,{data:0}),Fd=xa(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=lg[e])?!!a[e]:!1}function yr(){return og}var sg=Q({},nl,{key:function(e){if(e.key){var a=ng[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yr,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rg=xa(sg),cg=Q({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=xa(cg),ug=Q({},Zt,{submitter:0}),dg=xa(ug),mg=Q({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yr}),fg=xa(mg),pg=Q({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=xa(pg),vg=Q({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gg=xa(vg),xg=Q({},Zt,{newState:0,oldState:0,source:0}),bg=xa(xg),yg=[9,13,27,32],Nr=Ot&&"CompositionEvent"in window,ll=null;Ot&&"documentMode"in document&&(ll=document.documentMode);var Ng=Ot&&"TextEvent"in window&&!ll,Wd=Ot&&(!Nr||ll&&8<ll&&11>=ll),em=" ",am=!1;function tm(e,a){switch(e){case"keyup":return yg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function Eg(e,a){switch(e){case"compositionend":return nm(a);case"keypress":return a.which!==32?null:(am=!0,em);case"textInput":return e=a.data,e===em&&am?null:e;default:return null}}function jg(e,a){if(oi)return e==="compositionend"||!Nr&&tm(e,a)?(e=$d(),vo=vr=$t=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Wd&&a.locale!=="ko"?null:a.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Sg[e.type]:a==="textarea"}function lm(e,a,t,n){ii?li?li.push(n):li=[n]:ii=n,a=Ns(a,"onChange"),0<a.length&&(t=new bo("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var ol=null,sl=null;function Ag(e){Xp(e,0)}function No(e){var a=el(e);if(Hd(a))return e}function om(e,a){if(e==="change")return a}var sm=!1;if(Ot){var Er;if(Ot){var jr="oninput"in document;if(!jr){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),jr=typeof rm.oninput=="function"}Er=jr}else Er=!1;sm=Er&&(!document.documentMode||9<document.documentMode)}function cm(){ol&&(ol.detachEvent("onpropertychange",um),sl=ol=null)}function um(e){if(e.propertyName==="value"&&No(sl)){var a=[];lm(a,sl,e,fr(e)),Xd(Ag,a)}}function wg(e,a,t){e==="focusin"?(cm(),ol=a,sl=t,ol.attachEvent("onpropertychange",um)):e==="focusout"&&cm()}function Og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(sl)}function Tg(e,a){if(e==="click")return No(a)}function Cg(e,a){if(e==="input"||e==="change")return No(a)}function Rg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var za=typeof Object.is=="function"?Object.is:Rg;function rl(e,a){if(za(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!tr.call(a,l)||!za(e[l],a[l]))return!1}return!0}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mm(e,a){var t=dm(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dm(t)}}function fm(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?fm(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function pm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Sr(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Sr(e.document)}return a}function Ar(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var _g=Ot&&"documentMode"in document&&11>=document.documentMode,si=null,wr=null,cl=null,Or=!1;function hm(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Or||si==null||si!==Sr(n)||(n=si,"selectionStart"in n&&Ar(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),cl&&rl(cl,n)||(cl=n,n=Ns(wr,"onSelect"),0<n.length&&(a=new bo("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=si)))}function wn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var ri={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionrun:wn("Transition","TransitionRun"),transitionstart:wn("Transition","TransitionStart"),transitioncancel:wn("Transition","TransitionCancel"),transitionend:wn("Transition","TransitionEnd")},Tr={},vm={};Ot&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function On(e){if(Tr[e])return Tr[e];if(!ri[e])return e;var a=ri[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in vm)return Tr[e]=a[t];return e}var gm=On("animationend"),xm=On("animationiteration"),bm=On("animationstart"),Mg=On("transitionrun"),Dg=On("transitionstart"),zg=On("transitioncancel"),ym=On("transitionend"),Nm=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cr.push("scrollEnd");function Ja(e,a){Nm.set(e,a),An(a,[e])}var Ug=0;function Tt(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=tt.identifierPrefix;var t=Ug++;return e="_"+e+"t_"+t.toString(32)+"_",a.autoName=e}function Em(e){if(e==null||typeof e=="string")return e;var a=null,t=Ti;if(t!==null)for(var n=0;n<t.length;n++){var l=e[t[n]];if(l!=null){if(l==="none")return"none";a=a==null?l:a+(" "+l)}}return a??e.default}function Ct(e,a){return e=Em(e),a=Em(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var Eo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Va=[],ci=0,Rr=0;function jo(){for(var e=ci,a=Rr=ci=0;a<e;){var t=Va[a];Va[a++]=null;var n=Va[a];Va[a++]=null;var l=Va[a];Va[a++]=null;var o=Va[a];if(Va[a++]=null,n!==null&&l!==null){var u=n.pending;u===null?l.next=l:(l.next=u.next,u.next=l),n.pending=l}o!==0&&jm(t,l,o)}}function So(e,a,t,n){Va[ci++]=e,Va[ci++]=a,Va[ci++]=t,Va[ci++]=n,Rr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function _r(e,a,t,n){return So(e,a,t,n),Ao(e)}function Tn(e,a){return So(e,null,null,a),Ao(e)}function jm(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,n=o.alternate,n!==null&&(n.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&a!==null&&(l=31-Ma(t),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[a]:n.push(a),a.lane=t|536870912),o):null}function Ao(e){if(50<_l)throw _l=0,ps=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ui={};function qg(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(e,a,t,n){return new qg(e,a,t,n)}function Mr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rt(e,a){var t=e.alternate;return t===null?(t=ja(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Sm(e,a){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function wo(e,a,t,n,l,o){var u=0;if(n=e,typeof n=="function")Mr(n)&&(u=1);else if(typeof n=="string")u=ub(e,t,st.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case ce:return e=ja(31,t,a,l),e.elementType=ce,e.lanes=o,e;case se:return Cn(t.children,l,o,a);case de:u=8,l|=24;break;case qe:return e=ja(12,t,a,l|2),e.elementType=qe,e.lanes=o,e;case V:return e=ja(13,t,a,l),e.elementType=V,e.lanes=o,e;case F:return e=ja(19,t,a,l),e.elementType=F,e.lanes=o,e;case je:case S:return e=l|32,e=ja(30,t,a,e),e.elementType=S,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case re:u=10;break e;case Ie:u=9;break e;case z:u=11;break e;case pe:u=14;break e;case Ee:u=16,n=null;break e}u=29,t=Error(d(130,e===null?"null":typeof e,"")),n=null}return a=ja(u,t,a,l),a.elementType=e,a.type=n,a.lanes=o,a}function Cn(e,a,t,n){return e=ja(7,e,n,a),e.lanes=t,e}function Dr(e,a,t){return e=ja(6,e,null,a),e.lanes=t,e}function Am(e){var a=ja(18,null,null,0);return a.stateNode=e,a}function zr(e,a,t){return a=ja(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var wm=new WeakMap;function Ga(e,a){if(typeof e=="object"&&e!==null){var t=wm.get(e);return t!==void 0?t:(a={value:e,source:a,stack:yd(a)},wm.set(e,a),a)}return{value:e,source:a,stack:yd(a)}}var di=[],mi=0,Oo=null,ul=0,Ya=[],Qa=0,Kt=null,ct=1,ut="";function _t(e,a){di[mi++]=ul,di[mi++]=Oo,Oo=e,ul=a}function Om(e,a,t){Ya[Qa++]=ct,Ya[Qa++]=ut,Ya[Qa++]=Kt,Kt=e;var n=ct;e=ut;var l=32-Ma(n)-1;n&=~(1<<l),t+=1;var o=32-Ma(a)+l;if(30<o){var u=l-l%5;o=(n&(1<<u)-1).toString(32),n>>=u,l-=u,ct=1<<32-Ma(a)+l|t<<l|n,ut=o+e}else ct=1<<o|t<<l|n,ut=e}function To(e){e.return!==null&&(_t(e,1),Om(e,1,0))}function Ur(e){for(;e===Oo;)Oo=di[--mi],di[mi]=null,ul=di[--mi],di[mi]=null;for(;e===Kt;)Kt=Ya[--Qa],Ya[Qa]=null,ut=Ya[--Qa],Ya[Qa]=null,ct=Ya[--Qa],Ya[Qa]=null}function Tm(e,a){Ya[Qa++]=ct,Ya[Qa++]=ut,Ya[Qa++]=Kt,ct=a.id,ut=a.overflow,Kt=e}var ta=null,ke=null,he=!1,Ft=null,Pa=!1,qr=Error(d(519));function Jt(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dl(Ga(a,e)),qr}function Cm(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[sa]=e,a[Ea]=n,t){case"dialog":ge("cancel",a),ge("close",a);break;case"iframe":case"object":case"embed":ge("load",a);break;case"video":case"audio":for(t=0;t<Dl.length;t++)ge(Dl[t],a);break;case"source":ge("error",a);break;case"img":case"image":case"link":ge("error",a),ge("load",a);break;case"details":ge("toggle",a);break;case"input":ge("invalid",a),Id(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ge("invalid",a);break;case"textarea":ge("invalid",a),Gd(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Fp(a.textContent,t)?(n.popover!=null&&(ge("beforetoggle",a),ge("toggle",a)),n.onScroll!=null&&ge("scroll",a),n.onScrollEnd!=null&&ge("scrollend",a),n.onClick!=null&&(a.onclick=rt),a=!0):a=!1,a||Jt(e,!0)}function Co(e){for(ta=e.return;ta;)switch(ta.tag){case 5:case 31:case 13:Pa=!1;return;case 27:case 3:Pa=!0;return;default:ta=ta.return}}function fi(e){if(e!==ta)return!1;if(!he)return Co(e),he=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||mu(e.type,e.memoizedProps)),t=!t),t&&ke&&Jt(e),Co(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ke=vh(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));ke=vh(e)}else a===27?(a=ke,hn(e.type)?(e=Nu,Nu=null,ke=e):ke=a):ke=ta?$a(e.stateNode.nextSibling):null;return!0}function Rn(){ke=ta=null,he=!1}function Lr(){var e=Ft;return e!==null&&(wa===null?wa=e:wa.push.apply(wa,e),Ft=null),e}function dl(e){Ft===null?Ft=[e]:Ft.push(e)}var kr=ot(null),_n=null,Mt=null;function Wt(e,a,t){Le(kr,a._currentValue),a._currentValue=t}function Dt(e){e._currentValue=kr.current,oa(kr)}function Ro(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Br(e,a,t,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var u=l.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=l;for(var x=0;x<a.length;x++)if(p.context===a[x]){o.lanes|=t,p=o.alternate,p!==null&&(p.lanes|=t),Ro(o.return,t,e),n||(u=null);break e}o=p.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(d(341));u.lanes|=t,o=u.alternate,o!==null&&(o.lanes|=t),Ro(u,t,e),u=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Ro(l.return,t,e),u=l.child,u=u!==null?u.sibling:null):u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function Mn(e,a,t,n){e=null;for(var l=a,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var p=l.type;za(l.pendingProps.value,u.value)||(e!==null?e.push(p):e=[p])}}else if(l===to.current){if(u=l.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ki):e=[ki])}l=l.return}return e!==null&&Br(a,e,t,n),a.flags|=262144,e!==null}function _o(e){for(e=e.firstContext;e!==null;){if(!za(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dn(e){_n=e,Mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return Rm(_n,e)}function Mo(e,a){return _n===null&&Dn(e),Rm(e,a)}function Rm(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Mt===null){if(e===null)throw Error(d(308));Mt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Mt=Mt.next=a;return t}var Lg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},kg=s.unstable_scheduleCallback,Bg=s.unstable_NormalPriority,Ze={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hr(){return{controller:new Lg,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&kg(Bg,function(){e.controller.abort()})}function _m(e,a){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<a.length;e++){var n=a[e];t.indexOf(n)===-1&&t.push(n)}}}var fl=null;function Hg(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var pl=null,Ir=0,zn=0,pi=null;function Ig(e,a){if(pl===null){var t=pl=[];Ir=0,zn=nu(),pi={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Ir++,a.then(Mm,Mm),a}function Mm(){if(--Ir===0&&(fl=null,pl!==null)){pi!==null&&(pi.status="fulfilled");var e=pl;pl=null,zn=0,pi=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Vg(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<t.length;l++)(0,t[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),n}var Dm=ee.S;ee.S=function(e,a){if(wp=Ra(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ig(e,a),fl!==null)for(var t=Mi;t!==null;)_m(t,fl),t=t.next;if(t=e.types,t!==null){for(var n=Mi;n!==null;)_m(n,t),n=n.next;if(zn!==0){n=fl,n===null&&(n=fl=[]);for(var l=0;l<t.length;l++){var o=t[l];n.indexOf(o)===-1&&n.push(o)}}}Dm!==null&&Dm(e,a)};var Un=ot(null);function Vr(){var e=Un.current;return e!==null?e:Ue.pooledCache}function Do(e,a){a===null?Le(Un,Un.current):Le(Un,a.pool)}function zm(){var e=Vr();return e===null?null:{parent:Ze._currentValue,pool:e}}var hi=Error(d(460)),Gr=Error(d(474)),zo=Error(d(542)),Uo={then:function(){}};function Um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qm(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(rt,rt),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,km(e),e===void 0&&!("reason"in a)?Error(d(600)):e;default:if(typeof a.status=="string")a.then(rt,rt);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,km(e),e}throw Ln=a,hi}}function qn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Ln=t,hi):t}}var Ln=null;function Lm(){if(Ln===null)throw Error(d(459));var e=Ln;return Ln=null,e}function km(e){if(e===hi||e===zo)throw Error(d(483))}var vi=null,hl=0;function qo(e){var a=hl;return hl+=1,vi===null&&(vi=[]),qm(vi,e,a)}function en(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Lo(e,a){throw a.$$typeof===X?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Bm(e){function a(O,j){if(e){var C=O.deletions;C===null?(O.deletions=[j],O.flags|=16):C.push(j)}}function t(O,j){if(!e)return null;for(;j!==null;)a(O,j),j=j.sibling;return null}function n(O){for(var j=new Map;O!==null;)O.key===null?j.set(O.index,O):j.set(O.key,O),O=O.sibling;return j}function l(O,j){return O=Rt(O,j),O.index=0,O.sibling=null,O}function o(O,j,C){return O.index=C,e?(C=O.alternate,C!==null?(C=C.index,C<j?(O.flags|=2,j):C):(O.flags|=134217730,j)):(O.flags|=1048576,j)}function u(O){return e&&O.alternate===null&&(O.flags|=134217730),O}function p(O,j,C,M){return j===null||j.tag!==6?(j=Dr(C,O.mode,M),j.return=O,j):(j=l(j,C),j.return=O,j)}function x(O,j,C,M){var $=C.type;return $===se?(O=_(O,j,C.props.children,M,C.key),en(O,C),O):j!==null&&(j.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ee&&qn($)===j.type)?(j=l(j,C.props),en(j,C),j.return=O,j):(j=wo(C.type,C.key,C.props,null,O.mode,M),en(j,C),j.return=O,j)}function T(O,j,C,M){return j===null||j.tag!==4||j.stateNode.containerInfo!==C.containerInfo||j.stateNode.implementation!==C.implementation?(j=zr(C,O.mode,M),j.return=O,j):(j=l(j,C.children||[]),j.return=O,j)}function _(O,j,C,M,$){return j===null||j.tag!==7?(j=Cn(C,O.mode,M,$),j.return=O,j):(j=l(j,C),j.return=O,j)}function D(O,j,C){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Dr(""+j,O.mode,C),j.return=O,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Te:return C=wo(j.type,j.key,j.props,null,O.mode,C),en(C,j),C.return=O,C;case P:return j=zr(j,O.mode,C),j.return=O,j;case Ee:return j=qn(j),D(O,j,C)}if(we(j)||K(j))return j=Cn(j,O.mode,C,null),j.return=O,j;if(typeof j.then=="function")return D(O,qo(j),C);if(j.$$typeof===re)return D(O,Mo(O,j),C);Lo(O,j)}return null}function w(O,j,C,M){var $=j!==null?j.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return $!==null?null:p(O,j,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Te:return C.key===$?x(O,j,C,M):null;case P:return C.key===$?T(O,j,C,M):null;case Ee:return C=qn(C),w(O,j,C,M)}if(we(C)||K(C))return $!==null?null:_(O,j,C,M,null);if(typeof C.then=="function")return w(O,j,qo(C),M);if(C.$$typeof===re)return w(O,j,Mo(O,C),M);Lo(O,C)}return null}function R(O,j,C,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return O=O.get(C)||null,p(j,O,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Te:return O=O.get(M.key===null?C:M.key)||null,x(j,O,M,$);case P:return O=O.get(M.key===null?C:M.key)||null,T(j,O,M,$);case Ee:return M=qn(M),R(O,j,C,M,$)}if(we(M)||K(M))return O=O.get(C)||null,_(j,O,M,$,null);if(typeof M.then=="function")return R(O,j,C,qo(M),$);if(M.$$typeof===re)return R(O,j,C,Mo(j,M),$);Lo(j,M)}return null}function G(O,j,C,M){for(var $=null,be=null,te=j,ne=j=0,Je=null;te!==null&&ne<C.length;ne++){te.index>ne?(Je=te,te=null):Je=te.sibling;var Ne=w(O,te,C[ne],M);if(Ne===null){te===null&&(te=Je);break}e&&te&&Ne.alternate===null&&a(O,te),j=o(Ne,j,ne),be===null?$=Ne:be.sibling=Ne,be=Ne,te=Je}if(ne===C.length)return t(O,te),he&&_t(O,ne),$;if(te===null){for(;ne<C.length;ne++)te=D(O,C[ne],M),te!==null&&(j=o(te,j,ne),be===null?$=te:be.sibling=te,be=te);return he&&_t(O,ne),$}for(te=n(te);ne<C.length;ne++)Je=R(te,O,ne,C[ne],M),Je!==null&&(e&&(Ne=Je.alternate,Ne!==null&&te.delete(Ne.key===null?ne:Ne.key)),j=o(Je,j,ne),be===null?$=Je:be.sibling=Je,be=Je);return e&&te.forEach(function(yn){return a(O,yn)}),he&&_t(O,ne),$}function Z(O,j,C,M){if(C==null)throw Error(d(151));for(var $=null,be=null,te=j,ne=j=0,Je=null,Ne=C.next();te!==null&&!Ne.done;ne++,Ne=C.next()){te.index>ne?(Je=te,te=null):Je=te.sibling;var yn=w(O,te,Ne.value,M);if(yn===null){te===null&&(te=Je);break}e&&te&&yn.alternate===null&&a(O,te),j=o(yn,j,ne),be===null?$=yn:be.sibling=yn,be=yn,te=Je}if(Ne.done)return t(O,te),he&&_t(O,ne),$;if(te===null){for(;!Ne.done;ne++,Ne=C.next())Ne=D(O,Ne.value,M),Ne!==null&&(j=o(Ne,j,ne),be===null?$=Ne:be.sibling=Ne,be=Ne);return he&&_t(O,ne),$}for(te=n(te);!Ne.done;ne++,Ne=C.next())Ne=R(te,O,ne,Ne.value,M),Ne!==null&&(e&&(Je=Ne.alternate,Je!==null&&te.delete(Je.key===null?ne:Je.key)),j=o(Ne,j,ne),be===null?$=Ne:be.sibling=Ne,be=Ne);return e&&te.forEach(function(Eb){return a(O,Eb)}),he&&_t(O,ne),$}function fe(O,j,C,M){if(typeof C=="object"&&C!==null&&C.type===se&&C.key===null&&C.props.ref===void 0&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Te:e:{for(var $=C.key;j!==null;){if(j.key===$){if($=C.type,$===se){if(j.tag===7){t(O,j.sibling),M=l(j,C.props.children),en(M,C),M.return=O,O=M;break e}}else if(j.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ee&&qn($)===j.type){t(O,j.sibling),M=l(j,C.props),en(M,C),M.return=O,O=M;break e}t(O,j);break}else a(O,j);j=j.sibling}C.type===se?(M=Cn(C.props.children,O.mode,M,C.key),en(M,C),M.return=O,O=M):(M=wo(C.type,C.key,C.props,null,O.mode,M),en(M,C),M.return=O,O=M)}return u(O);case P:e:{for($=C.key;j!==null;){if(j.key===$)if(j.tag===4&&j.stateNode.containerInfo===C.containerInfo&&j.stateNode.implementation===C.implementation){t(O,j.sibling),M=l(j,C.children||[]),M.return=O,O=M;break e}else{t(O,j);break}else a(O,j);j=j.sibling}M=zr(C,O.mode,M),M.return=O,O=M}return u(O);case Ee:return C=qn(C),fe(O,j,C,M)}if(we(C))return G(O,j,C,M);if(K(C)){if($=K(C),typeof $!="function")throw Error(d(150));return C=$.call(C),Z(O,j,C,M)}if(typeof C.then=="function")return fe(O,j,qo(C),M);if(C.$$typeof===re)return fe(O,j,Mo(O,C),M);Lo(O,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,j!==null&&j.tag===6?(t(O,j.sibling),M=l(j,C),M.return=O,O=M):(t(O,j),M=Dr(C,O.mode,M),M.return=O,O=M),u(O)):t(O,j)}return function(O,j,C,M){try{hl=0;var $=fe(O,j,C,M);return vi=null,$}catch(te){if(te===hi||te===zo)throw te;var be=ja(29,te,null,O.mode);return be.lanes=M,be.return=O,be}finally{}}}var kn=Bm(!0),Hm=Bm(!1),an=!1;function Yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function nn(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Oe&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=Ao(e),jm(e,null,t),a}return So(e,n,a,t),Ao(e)}function vl(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Od(e,t)}}function Pr(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=u:o=o.next=u,t=t.next}while(t!==null);o===null?l=o=a:o=o.next=a}else l=o=a;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Xr=!1;function gl(){if(Xr){var e=pi;if(e!==null)throw e}}function xl(e,a,t,n){Xr=!1;var l=e.updateQueue;an=!1;var o=l.firstBaseUpdate,u=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var x=p,T=x.next;x.next=null,u===null?o=T:u.next=T,u=x;var _=e.alternate;_!==null&&(_=_.updateQueue,p=_.lastBaseUpdate,p!==u&&(p===null?_.firstBaseUpdate=T:p.next=T,_.lastBaseUpdate=x))}if(o!==null){var D=l.baseState;u=0,_=T=x=null,p=o;do{var w=p.lane&-536870913,R=w!==p.lane;if(R?(xe&w)===w:(n&w)===w){w!==0&&w===zn&&(Xr=!0),_!==null&&(_=_.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var G=e,Z=p;w=a;var fe=t;switch(Z.tag){case 1:if(G=Z.payload,typeof G=="function"){D=G.call(fe,D,w);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Z.payload,w=typeof G=="function"?G.call(fe,D,w):G,w==null)break e;D=Q({},D,w);break e;case 2:an=!0}}w=p.callback,w!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[w]:R.push(w))}else R={lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},_===null?(T=_=R,x=D):_=_.next=R,u|=w;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;R=p,p=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);_===null&&(x=D),l.baseState=x,l.firstBaseUpdate=T,l.lastBaseUpdate=_,o===null&&(l.shared.lanes=0),dn|=u,e.lanes=u,e.memoizedState=D}}function Im(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Vm(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Im(t[e],a)}var ln=ot(null),ko=ot(0);function Gm(e,a){e=kt,Le(ko,e),Le(ln,a),kt=e|a.baseLanes}function $r(){Le(ko,kt),Le(ln,ln.current)}function Zr(){kt=ko.current,oa(ln),oa(ko)}var ca=ot(null),ha=null;function on(e){var a=e.alternate;Le(ua,ua.current&1),Le(ca,e),ha===null&&(a===null||ln.current!==null||a.memoizedState!==null)&&(ha=e)}function Kr(e){Le(ua,ua.current),Le(ca,e),ha===null&&(ha=e)}function Ym(e){e.tag===22?(Le(ua,ua.current),Le(ca,e),ha===null&&(ha=e)):sn()}function sn(){Le(ua,ua.current),Le(ca,ca.current)}function Ua(e){oa(ca),ha===e&&(ha=null),oa(ua)}var ua=ot(0);function bl(e,a){Le(ca,ca.current),Le(ua,a)}function Fr(e){oa(ua),oa(ca),ha===e&&(ha=null)}function Bo(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||bu(t)||yu(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var zt=0,me=null,De=null,Ke=null,Ho=!1,gi=!1,Bn=!1,Io=0,yl=0,xi=null,Gg=0;function Qe(){throw Error(d(321))}function Jr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!za(e[t],a[t]))return!1;return!0}function Wr(e,a,t,n,l,o){return zt=o,me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,ee.H=e===null||e.memoizedState===null?Tf:Cf,Bn=!1,o=t(n,l),Bn=!1,gi&&(o=Pm(a,t,n,l)),Qm(e),o}function Qm(e){ee.H=$o;var a=De!==null&&De.next!==null;if(zt=0,Ke=De=me=null,Ho=!1,yl=0,xi=null,a)throw Error(d(300));e===null||Fe||(e=e.dependencies,e!==null&&_o(e)&&(Fe=!0))}function Pm(e,a,t,n){me=e;var l=0;do{if(gi&&(xi=null),yl=0,gi=!1,25<=l)throw Error(d(301));if(l+=1,Ke=De=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}ee.H=Fg,o=a(t,n)}while(gi);return o}function Yg(){var e=ee.H,a=e.useState()[0];return a=typeof a.then=="function"?Nl(a):a,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(me.flags|=1024),a}function ec(){var e=Io!==0;return Io=0,e}function ac(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function tc(e){if(Ho){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ho=!1}zt=0,Ke=De=me=null,gi=!1,yl=Io=0,xi=null}function ba(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?me.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Xe(){if(De===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var a=Ke===null?me.memoizedState:Ke.next;if(a!==null)Ke=a,De=e;else{if(e===null)throw me.alternate===null?Error(d(467)):Error(d(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ke===null?me.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nl(e){var a=yl;return yl+=1,xi===null&&(xi=[]),e=qm(xi,e,a),a=me,(Ke===null?a.memoizedState:Ke.next)===null&&(a=a.alternate,ee.H=a===null||a.memoizedState===null?Tf:Cf),e}function Go(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Nl(e);if(e.$$typeof===L)return;if(e.$$typeof===re)return ra(e)}throw Error(d(438,String(e)))}function nc(e){var a=null,t=me.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=me.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Vo(),me.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=$e;return a.index++,t}function Ut(e,a){return typeof a=="function"?a(e):a}function Yo(e){var a=Xe();return ic(a,De,e)}function ic(e,a,t){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=t;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var u=l.next;l.next=o.next,o.next=u}a.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{a=l.next;var p=u=null,x=null,T=a,_=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(xe&D)===D:(zt&D)===D){var w=T.revertLane;if(w===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===zn&&(_=!0);else if((zt&w)===w){T=T.next,w===zn&&(_=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(p=x=D,u=o):x=x.next=D,me.lanes|=w,dn|=w;D=T.action,Bn&&t(o,D),o=T.hasEagerState?T.eagerState:t(o,D)}else w={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(p=x=w,u=o):x=x.next=w,me.lanes|=D,dn|=D;T=T.next}while(T!==null&&T!==a);if(x===null?u=o:x.next=p,!za(o,e.memoizedState)&&(Fe=!0,_&&(t=pi,t!==null)))throw t;e.memoizedState=o,e.baseState=u,e.baseQueue=x,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function lc(e){var a=Xe(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,o=a.memoizedState;if(l!==null){t.pending=null;var u=l=l.next;do o=e(o,u.action),u=u.next;while(u!==l);za(o,a.memoizedState)||(Fe=!0),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),t.lastRenderedState=o}return[o,n]}function Xm(e,a,t){var n=me,l=Xe(),o=he;if(o){if(t===void 0)throw Error(d(407));t=t()}else t=a();var u=!za((De||l).memoizedState,t);if(u&&(l.memoizedState=t,Fe=!0),l=l.queue,rc(Km.bind(null,n,l,e),[e]),e=l.getSnapshot!==a||u||Ke!==null&&(Ke.memoizedState.tag&1)!==0,bi(e?9:8,{destroy:void 0},Zm.bind(null,n,l,t,a),null),e){if(n.flags|=2048,Ue===null)throw Error(d(349));o||(zt&127)!==0||$m(n,a,t)}return t}function $m(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=me.updateQueue,a===null?(a=Vo(),me.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Zm(e,a,t,n){a.value=t,a.getSnapshot=n,Fm(a)&&Jm(e)}function Km(e,a,t){return t(function(){Fm(a)&&Jm(e)})}function Fm(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!za(e,t)}catch{return!0}}function Jm(e){var a=Tn(e,2);a!==null&&Oa(a,e,2)}function oc(e){var a=ba();if(typeof e=="function"){var t=e;if(e=t(),Bn){Xt(!0);try{t()}finally{Xt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:e},a}function Wm(e,a,t,n){return e.baseState=t,ic(e,De,typeof n=="function"?n:Ut)}function Qg(e,a,t,n,l){if(Xo(e))throw Error(d(485));if(e=a.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){o.listeners.push(u)}};ee.T!==null?t(!0):o.isTransition=!1,n(o),t=a.pending,t===null?(o.next=a.pending=o,ef(a,o)):(o.next=t.next,a.pending=t.next=o)}}function ef(e,a){var t=a.action,n=a.payload,l=e.state;if(a.isTransition){var o=ee.T,u={};u.types=o!==null?o.types:null,ee.T=u;try{var p=t(l,n),x=ee.S;x!==null&&x(u,p),af(e,a,p)}catch(T){sc(e,a,T)}finally{o!==null&&u.types!==null&&(o.types=u.types),ee.T=o}}else try{o=t(l,n),af(e,a,o)}catch(T){sc(e,a,T)}}function af(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){tf(e,a,n)},function(n){return sc(e,a,n)}):tf(e,a,t)}function tf(e,a,t){a.status="fulfilled",a.value=t,nf(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,ef(e,t)))}function sc(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,nf(a),a=a.next;while(a!==n)}e.action=null}function nf(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function lf(e,a){return a}function of(e,a){if(he){var t=Ue.formState;if(t!==null){e:{var n=me;if(he){if(ke){a:{for(var l=ke,o=Pa;l.nodeType!==8;){if(!o){l=null;break a}if(l=$a(l.nextSibling),l===null){l=null;break a}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){ke=$a(l.nextSibling),n=l.data==="F!";break e}}Jt(n)}n=!1}n&&(a=t[0])}}return t=ba(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:a},t.queue=n,t=Af.bind(null,me,n),n.dispatch=t,n=oc(!1),o=fc.bind(null,me,!1,n.queue),n=ba(),l={state:a,dispatch:null,action:e,pending:null},n.queue=l,t=Qg.bind(null,me,l,o,t),l.dispatch=t,n.memoizedState=e,[a,t,!1]}function sf(e){var a=Xe();return rf(a,De,e)}function rf(e,a,t){if(a=ic(e,a,lf)[0],e=Yo(Ut)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Nl(a)}catch(u){throw u===hi?zo:u}else n=a;a=Xe();var l=a.queue,o=l.dispatch;return t!==a.memoizedState&&(me.flags|=2048,bi(9,{destroy:void 0},Pg.bind(null,l,t),null)),[n,o,e]}function Pg(e,a){e.action=a}function cf(e){var a=Xe(),t=De;if(t!==null)return rf(a,t,e);Xe(),a=a.memoizedState,t=Xe();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function bi(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=me.updateQueue,a===null&&(a=Vo(),me.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function uf(){return Xe().memoizedState}function Qo(e,a,t,n){var l=ba();me.flags|=e,l.memoizedState=bi(1|a,{destroy:void 0},t,n===void 0?null:n)}function Po(e,a,t,n){var l=Xe();n=n===void 0?null:n;var o=l.memoizedState.inst;De!==null&&n!==null&&Jr(n,De.memoizedState.deps)?l.memoizedState=bi(a,o,t,n):(me.flags|=e,l.memoizedState=bi(1|a,o,t,n))}function df(e,a){Qo(8390656,8,e,a)}function rc(e,a){Po(2048,8,e,a)}function Xg(e){me.flags|=4;var a=me.updateQueue;if(a===null)a=Vo(),me.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function mf(e){var a=Xe().memoizedState;return Xg({ref:a,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function ff(e,a){return Po(4,2,e,a)}function pf(e,a){return Po(4,4,e,a)}function hf(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function vf(e,a,t){t=t!=null?t.concat([e]):null,Po(4,4,hf.bind(null,a,e),t)}function cc(){}function gf(e,a){var t=Xe();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Jr(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function xf(e,a){var t=Xe();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Jr(a,n[1]))return n[0];if(n=e(),Bn){Xt(!0);try{e()}finally{Xt(!1)}}return t.memoizedState=[n,a],n}function uc(e,a,t){return t===void 0||(zt&1073741824)!==0&&(xe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Tp(),me.lanes|=e,dn|=e,t)}function bf(e,a,t,n){return za(t,a)?t:ln.current!==null?(e=uc(e,t,n),za(e,a)||(Fe=!0),e):(zt&106)===0||(zt&1073741824)!==0&&(xe&261930)===0?(Fe=!0,e.memoizedState=t):(e=Tp(),me.lanes|=e,dn|=e,a)}function yf(e,a,t,n,l){var o=ie.p;ie.p=o!==0&&8>o?o:8;var u=ee.T,p={};p.types=u!==null?u.types:null,ee.T=p,fc(e,!1,a,t);try{var x=l(),T=ee.S;if(T!==null&&T(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var _=Vg(x,n);El(e,a,_,Ba(e))}else El(e,a,n,Ba(e))}catch(D){El(e,a,{then:function(){},status:"rejected",reason:D},Ba())}finally{ie.p=o,u!==null&&p.types!==null&&(u.types=p.types),ee.T=u}}function $g(){}function dc(e,a,t,n){if(e.tag!==5)throw Error(d(476));var l=Nf(e).queue;yf(e,l,a,St,t===null?$g:function(){return Ef(e),t(n)})}function Nf(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:St,baseState:St,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:St},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ut,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Ef(e){var a=Nf(e);a.next===null&&(a=e.alternate.memoizedState),El(e,a.next.queue,{},Ba())}function mc(){return ra(ki)}function jf(){return Xe().memoizedState}function Sf(){return Xe().memoizedState}function Zg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ba();e=tn(t);var n=nn(a,e,t);n!==null&&(Oa(n,a,t),vl(n,a,t)),a={cache:Hr()},e.payload=a;return}a=a.return}}function Kg(e,a,t){var n=Ba();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Xo(e)?wf(a,t):(t=_r(e,a,t,n),t!==null&&(Oa(t,e,n),Of(t,a,n)))}function Af(e,a,t){var n=Ba();El(e,a,t,n)}function El(e,a,t,n){var l={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xo(e))wf(a,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=a.lastRenderedReducer,o!==null))try{var u=a.lastRenderedState,p=o(u,t);if(l.hasEagerState=!0,l.eagerState=p,za(p,u))return So(e,a,l,0),Ue===null&&jo(),!1}catch{}finally{}if(t=_r(e,a,l,n),t!==null)return Oa(t,e,n),Of(t,a,n),!0}return!1}function fc(e,a,t,n){if(n={lane:2,revertLane:nu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Xo(e)){if(a)throw Error(d(479))}else a=_r(e,t,n,2),a!==null&&Oa(a,e,2)}function Xo(e){var a=e.alternate;return e===me||a!==null&&a===me}function wf(e,a){gi=Ho=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Of(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,Od(e,t)}}var $o={readContext:ra,use:Go,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe,useEffectEvent:Qe},Tf={readContext:ra,use:Go,useCallback:function(e,a){return ba().memoizedState=[e,a===void 0?null:a],e},useContext:ra,useEffect:df,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Qo(4194308,4,hf.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Qo(4194308,4,e,a)},useInsertionEffect:function(e,a){Qo(4,2,e,a)},useMemo:function(e,a){var t=ba();a=a===void 0?null:a;var n=e();if(Bn){Xt(!0);try{e()}finally{Xt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ba();if(t!==void 0){var l=t(a);if(Bn){Xt(!0);try{t(a)}finally{Xt(!1)}}}else l=a;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Kg.bind(null,me,e),[n.memoizedState,e]},useRef:function(e){var a=ba();return e={current:e},a.memoizedState=e},useState:function(e){e=oc(e);var a=e.queue,t=Af.bind(null,me,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:cc,useDeferredValue:function(e,a){var t=ba();return uc(t,e,a)},useTransition:function(){var e=oc(!1);return e=yf.bind(null,me,e.queue,!0,!1),ba().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=me,l=ba();if(he){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),Ue===null)throw Error(d(349));(xe&127)!==0||$m(n,a,t)}l.memoizedState=t;var o={value:t,getSnapshot:a};return l.queue=o,df(Km.bind(null,n,o,e),[e]),n.flags|=2048,bi(9,{destroy:void 0},Zm.bind(null,n,o,t,a),null),t},useId:function(){var e=ba(),a=Ue.identifierPrefix;if(he){var t=ut,n=ct;t=(n&~(1<<32-Ma(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Io++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Gg++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:mc,useFormState:of,useActionState:of,useOptimistic:function(e){var a=ba();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=fc.bind(null,me,!0,t),t.dispatch=a,[e,a]},useMemoCache:nc,useCacheRefresh:function(){return ba().memoizedState=Zg.bind(null,me)},useEffectEvent:function(e){var a=ba(),t={impl:e};return a.memoizedState=t,function(){if((Oe&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Cf={readContext:ra,use:Go,useCallback:gf,useContext:ra,useEffect:rc,useImperativeHandle:vf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:xf,useReducer:Yo,useRef:uf,useState:function(){return Yo(Ut)},useDebugValue:cc,useDeferredValue:function(e,a){var t=Xe();return bf(t,De.memoizedState,e,a)},useTransition:function(){var e=Yo(Ut)[0],a=Xe().memoizedState;return[typeof e=="boolean"?e:Nl(e),a]},useSyncExternalStore:Xm,useId:jf,useHostTransitionStatus:mc,useFormState:sf,useActionState:sf,useOptimistic:function(e,a){var t=Xe();return Wm(t,De,e,a)},useMemoCache:nc,useCacheRefresh:Sf,useEffectEvent:mf},Fg={readContext:ra,use:Go,useCallback:gf,useContext:ra,useEffect:rc,useImperativeHandle:vf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:xf,useReducer:lc,useRef:uf,useState:function(){return lc(Ut)},useDebugValue:cc,useDeferredValue:function(e,a){var t=Xe();return De===null?uc(t,e,a):bf(t,De.memoizedState,e,a)},useTransition:function(){var e=lc(Ut)[0],a=Xe().memoizedState;return[typeof e=="boolean"?e:Nl(e),a]},useSyncExternalStore:Xm,useId:jf,useHostTransitionStatus:mc,useFormState:cf,useActionState:cf,useOptimistic:function(e,a){var t=Xe();return De!==null?Wm(t,De,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:nc,useCacheRefresh:Sf,useEffectEvent:mf};function pc(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:Q({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var hc={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Ba(),l=tn(n);l.payload=a,t!=null&&(l.callback=t),a=nn(e,l,n),a!==null&&(Oa(a,e,n),vl(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Ba(),l=tn(n);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=nn(e,l,n),a!==null&&(Oa(a,e,n),vl(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ba(),n=tn(t);n.tag=2,a!=null&&(n.callback=a),a=nn(e,n,t),a!==null&&(Oa(a,e,t),vl(a,e,t))}};function Rf(e,a,t,n,l,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,u):a.prototype&&a.prototype.isPureReactComponent?!rl(t,n)||!rl(l,o):!0}function _f(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&hc.enqueueReplaceState(a,a.state,null)}function Hn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=Q({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function Mf(e){Eo(e)}function Df(e){console.error(e)}function zf(e){Eo(e)}function Zo(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Uf(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vc(e,a,t){return t=tn(t),t.tag=3,t.payload={element:null},t.callback=function(){Zo(e,a)},t}function qf(e){return e=tn(e),e.tag=3,e}function Lf(e,a,t,n){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){Uf(a,t,n)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Uf(a,t,n),typeof l!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function Jg(e,a,t,n,l){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Mn(a,t,l,!0),t=ca.current,t!==null){switch(t.tag){case 31:case 13:case 19:return ha===null?vs():t.alternate===null&&Pe===0&&(Pe=3),t.flags&=-257,t.flags|=65536,t.lanes=l,n===Uo?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),eu(e,n,l)),!1;case 22:return t.flags|=65536,n===Uo?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),eu(e,n,l)),!1}throw Error(d(435,t.tag))}return eu(e,n,l),vs(),!1}if(he)return a=ca.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==qr&&(e=Error(d(422),{cause:n}),dl(Ga(e,t)))):(n!==qr&&(a=Error(d(423),{cause:n}),dl(Ga(a,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Ga(n,t),l=vc(e.stateNode,n,l),Pr(e,l),Pe!==4&&(Pe=2)),!1;var o=Error(d(520),{cause:n});if(o=Ga(o,t),Rl===null?Rl=[o]:Rl.push(o),Pe!==4&&(Pe=2),a===null)return!0;n=Ga(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=vc(t.stateNode,n,e),Pr(t,e),!1;case 1:if(a=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(mn===null||!mn.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=qf(l),Lf(l,e,t,n),Pr(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var gc=Error(d(461)),Fe=!1;function We(e,a,t,n){a.child=e===null?Hm(a,null,t,n):kn(a,e.child,t,n)}function kf(e,a,t,n,l){t=t.render;var o=a.ref;if("ref"in n){var u={};for(var p in n)p!=="ref"&&(u[p]=n[p])}else u=n;return Dn(a),n=Wr(e,a,t,u,o,l),p=ec(),e!==null&&!Fe?(ac(e,a,l),qt(e,a,l)):(he&&p&&To(a),a.flags|=1,We(e,a,n,l),a.child)}function Bf(e,a,t,n,l){if(e===null){var o=t.type;return typeof o=="function"&&!Mr(o)&&o.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=o,Hf(e,a,o,n,l)):(e=wo(t.type,null,n,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(o=e.child,!Ac(e,l)){var u=o.memoizedProps;if(t=t.compare,t=t!==null?t:rl,t(u,n)&&e.ref===a.ref)return qt(e,a,l)}return a.flags|=1,e=Rt(o,n),e.ref=a.ref,e.return=a,a.child=e}function Hf(e,a,t,n,l){if(e!==null){var o=e.memoizedProps;if(rl(o,n)&&e.ref===a.ref)if(Fe=!1,a.pendingProps=n=o,Ac(e,l))(e.flags&131072)!==0&&(Fe=!0);else return a.lanes=e.lanes,qt(e,a,l)}return xc(e,a,t,n,l)}function If(e,a,t,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(n=a.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,a.child=null;return Vf(e,a,o,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Do(a,o!==null?o.cachePool:null),o!==null?Gm(a,o):$r(),Ym(a);else return n=a.lanes=536870912,Vf(e,a,o!==null?o.baseLanes|t:t,t,n)}else o!==null?(Do(a,o.cachePool),Gm(a,o),sn(),a.memoizedState=null):(e!==null&&Do(a,null),$r(),sn());return We(e,a,l,t),a.child}function jl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Vf(e,a,t,n,l){var o=Vr();return o=o===null?null:{parent:Ze._currentValue,pool:o},a.memoizedState={baseLanes:t,cachePool:o},e!==null&&Do(a,null),$r(),Ym(a),e!==null&&Mn(e,a,n,!0),a.childLanes=l,null}function Ko(e,a){return a=Fo({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Gf(e,a,t){return kn(a,e.child,null,t),e=Ko(a,a.pendingProps),e.flags|=2,Ua(a),a.memoizedState=null,e}function Wg(e,a,t){var n=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(he){if(n.mode==="hidden")return e=Ko(a,n),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jl(null,e);if(Kr(a),(e=ke)?(e=hh(e,Pa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Kt!==null?{id:ct,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},t=Am(e),t.return=a,a.child=t,ta=a,ke=null)):e=null,e===null)throw Jt(a);return a.lanes=536870912,null}return Ko(a,n)}var o=e.memoizedState;if(o!==null){var u=o.dehydrated;if(Kr(a),l)if(a.flags&256)a.flags&=-257,a=Gf(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Fe||Mn(e,a,t,!1),l=(t&e.childLanes)!==0,Fe||l){if(ln.current===null){if(n=Ue,n!==null&&(u=Td(n,t),u!==0&&u!==o.retryLane))throw o.retryLane=u,Tn(e,u),Oa(n,e,u),gc;vs()}a=Gf(e,a,t)}else e=o.treeContext,ke=$a(u.nextSibling),ta=a,he=!0,Ft=null,Pa=!1,e!==null&&Tm(a,e),a=Ko(a,n),a.flags|=134221824;return a}return e=Rt(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function yi(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function xc(e,a,t,n,l){return Dn(a),t=Wr(e,a,t,n,void 0,l),n=ec(),e!==null&&!Fe?(ac(e,a,l),qt(e,a,l)):(he&&n&&To(a),a.flags|=1,We(e,a,t,l),a.child)}function Yf(e,a,t,n,l,o){return Dn(a),a.updateQueue=null,t=Pm(a,n,t,l),Qm(e),n=ec(),e!==null&&!Fe?(ac(e,a,o),qt(e,a,o)):(he&&n&&To(a),a.flags|=1,We(e,a,t,o),a.child)}function Qf(e,a,t,n,l){if(Dn(a),a.stateNode===null){var o=ui,u=t.contextType;typeof u=="object"&&u!==null&&(o=ra(u)),o=new t(n,o),a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=hc,a.stateNode=o,o._reactInternals=a,o=a.stateNode,o.props=n,o.state=a.memoizedState,o.refs={},Yr(a),u=t.contextType,o.context=typeof u=="object"&&u!==null?ra(u):ui,o.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(pc(a,t,u,n),o.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(u=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),u!==o.state&&hc.enqueueReplaceState(o,o.state,null),xl(a,n,o,l),gl(),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){o=a.stateNode;var p=a.memoizedProps,x=Hn(t,p);o.props=x;var T=o.context,_=t.contextType;u=ui,typeof _=="object"&&_!==null&&(u=ra(_));var D=t.getDerivedStateFromProps;_=typeof D=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=a.pendingProps!==p,_||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||T!==u)&&_f(a,o,n,u),an=!1;var w=a.memoizedState;o.state=w,xl(a,n,o,l),gl(),T=a.memoizedState,p||w!==T||an?(typeof D=="function"&&(pc(a,t,D,n),T=a.memoizedState),(x=an||Rf(a,t,x,n,w,T,u))?(_||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=T),o.props=n,o.state=T,o.context=u,n=x):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{o=a.stateNode,Qr(e,a),u=a.memoizedProps,_=Hn(t,u),o.props=_,D=a.pendingProps,w=o.context,T=t.contextType,x=ui,typeof T=="object"&&T!==null&&(x=ra(T)),p=t.getDerivedStateFromProps,(T=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==D||w!==x)&&_f(a,o,n,x),an=!1,w=a.memoizedState,o.state=w,xl(a,n,o,l),gl();var R=a.memoizedState;u!==D||w!==R||an||e!==null&&e.dependencies!==null&&_o(e.dependencies)?(typeof p=="function"&&(pc(a,t,p,n),R=a.memoizedState),(_=an||Rf(a,t,_,n,w,R,x)||e!==null&&e.dependencies!==null&&_o(e.dependencies))?(T||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,R,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,R,x)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=R),o.props=n,o.state=R,o.context=x,n=_):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(a.flags|=1024),n=!1)}return o=n,yi(e,a),n=(a.flags&128)!==0,o||n?(o=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:o.render(),a.flags|=1,e!==null&&n?(a.child=kn(a,e.child,null,l),a.child=kn(a,null,t,l)):We(e,a,t,l),a.memoizedState=o.state,e=a.child):e=qt(e,a,l),e}function Pf(e,a,t,n){return Rn(),a.flags|=256,We(e,a,t,n),a.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:zm()}}function Nc(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=ka),e}function Xf(e,a,t){var n=a.pendingProps,l=!1,o=(a.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(ua.current&2)!==0),u&&(l=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(he){if(l?on(a):sn(),(e=ke)?(e=hh(e,Pa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Kt!==null?{id:ct,overflow:ut}:null,retryLane:536870912,hydrationErrors:null},t=Am(e),t.return=a,a.child=t,ta=a,ke=null)):e=null,e===null)throw Jt(a);return yu(e)?a.lanes=32:a.lanes=536870912,null}return o=n.children,n=n.fallback,l?(sn(),l=a.mode,o=Fo({mode:"hidden",children:o},l),n=Cn(n,l,t,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=yc(t),n.childLanes=Nc(e,u,t),a.memoizedState=bc,jl(null,n)):(on(a),Ec(a,o))}var p=e.memoizedState;if(p!==null){var x=p.dehydrated;if(x!==null)return ex(e,a,o,u,n,x,p,t)}return l?(sn(),l=n.fallback,o=a.mode,p=e.child,x=p.sibling,n=Rt(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&1206910976,x!==null?l=Rt(x,l):(l=Cn(l,o,t,null),l.flags|=2),l.return=a,n.return=a,n.sibling=l,a.child=n,jl(null,n),n=a.child,l=e.child.memoizedState,l===null?l=yc(t):(o=l.cachePool,o!==null?(p=Ze._currentValue,o=o.parent!==p?{parent:p,pool:p}:o):o=zm(),l={baseLanes:l.baseLanes|t,cachePool:o}),n.memoizedState=l,n.childLanes=Nc(e,u,t),a.memoizedState=bc,jl(e.child,n)):(on(a),t=e.child,e=t.sibling,t=Rt(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=t,a.memoizedState=null,t)}function Ec(e,a){return a=Fo({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Fo(e,a){return e=ja(22,e,null,a),e.lanes=0,e}function Jo(e,a,t){return kn(a,e.child,null,t),e=Ec(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function ex(e,a,t,n,l,o,u,p){if(t)return a.flags&256?(on(a),a.flags&=-257,Jo(e,a,p)):a.memoizedState!==null?(sn(),a.child=e.child,a.flags|=128,null):(sn(),o=l.fallback,u=a.mode,l=Fo({mode:"visible",children:l.children},u),o=Cn(o,u,p,null),o.flags|=2,l.return=a,o.return=a,l.sibling=o,a.child=l,kn(a,e.child,null,p),l=a.child,l.memoizedState=yc(p),l.childLanes=Nc(e,n,p),a.memoizedState=bc,jl(null,l));if(on(a),yu(o)){if(n=o.nextSibling&&o.nextSibling.dataset,n)var x=n.dgst;return n=x,n!==""&&(l=Error(d(419)),l.stack="",l.digest=n,dl({value:l,source:null,stack:null})),Jo(e,a,p)}if(Fe||Mn(e,a,p,!1),n=(p&e.childLanes)!==0,Fe||n){if(ln.current!==null)return Jo(e,a,p);if(n=Ue,n!==null&&(l=Td(n,p),l!==0&&l!==u.retryLane))throw u.retryLane=l,Tn(e,l),Oa(n,e,l),gc;return bu(o)||vs(),Jo(e,a,p)}return bu(o)?(a.flags|=192,a.child=e.child,null):(e=u.treeContext,ke=$a(o.nextSibling),ta=a,he=!0,Ft=null,Pa=!1,e!==null&&Tm(a,e),a=Ec(a,l.children),a.flags|=134221824,a)}function $f(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Ro(e.return,a,t)}function Zf(e){for(var a=null;e!==null;){var t=e.alternate;t!==null&&Bo(t)===null&&(a=e),e=e.sibling}return a}function Wo(e,a,t,n,l,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l,treeForkCount:o}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=t,u.tailMode=l,u.treeForkCount=o)}function jc(e){var a=e.child;for(e.child=null;a!==null;){var t=a.sibling;a.sibling=e.child,e.child=a,a=t}}function Sc(e,a,t){var n=a.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var u=ua.current;if(a.flags&128)return bl(a,u),null;var p=(u&2)!==0;if(p?(u=u&1|2,a.flags|=128):u&=1,bl(a,u),l==="backwards"&&e!==null?(jc(e),We(e,a,n,t),jc(e)):We(e,a,n,t),n=he?ul:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$f(e,t,a);else if(e.tag===19)$f(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":t=Zf(a.child),t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null,jc(a)),Wo(a,!0,l,null,o,n);break;case"unstable_legacy-backwards":for(t=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&Bo(e)===null){a.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Wo(a,!0,t,null,o,n);break;case"together":Wo(a,!1,null,null,void 0,n);break;case"independent":a.memoizedState=null;break;default:t=Zf(a.child),t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null),Wo(a,!1,l,t,o,n)}return a.child}function Kf(e,a,t){var n=a.pendingProps;return Wt(a,a.type,n.value),We(e,a,n.children,t),a.child}function qt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),dn|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Mn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Rt(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Rt(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Ac(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&_o(e)))}function ax(e,a,t){switch(a.tag){case 3:no(a,a.stateNode.containerInfo),Wt(a,Ze,e.memoizedState.cache),Rn();break;case 27:case 5:Js(a);break;case 4:no(a,a.stateNode.containerInfo);break;case 10:Wt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Kr(a),null;break;case 13:var n=a.memoizedState;if(n!==null){if(n.dehydrated!==null)return on(a),a.flags|=128,null;n=Mn(e,a,t,!1);var l=a.child.childLanes;return n||(t&l)!==0?Xf(e,a,t):(on(a),e=qt(e,a,t),e!==null?e.sibling:null)}on(a);break;case 19:if(a.flags&128)return Sc(e,a,t);if(l=(e.flags&128)!==0,n=(t&a.childLanes)!==0,n||(Mn(e,a,t,!1),n=(t&a.childLanes)!==0),l){if(n)return Sc(e,a,t);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),bl(a,ua.current),n)break;return null;case 22:return a.lanes=0,If(e,a,t,a.pendingProps);case 24:Wt(a,Ze,e.memoizedState.cache)}return qt(e,a,t)}function Ff(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Fe=!0;else{if(!Ac(e,t)&&(a.flags&128)===0)return Fe=!1,ax(e,a,t);Fe=(e.flags&131072)!==0}else Fe=!1,he&&(a.flags&1048576)!==0&&Om(a,ul,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=qn(a.elementType),a.type=e,typeof e=="function")Mr(e)?(n=Hn(e,n),a.tag=1,a=Qf(null,a,e,n,t)):(a.tag=0,a=xc(null,a,e,n,t));else{if(e!=null){var l=e.$$typeof;if(l===z){a.tag=11,a=kf(null,a,e,n,t);break e}else if(l===pe){a.tag=14,a=Bf(null,a,e,n,t);break e}else if(l===re){a.tag=10,a.type=e,a=Kf(null,a,t);break e}}throw a=Se(e)||e,Error(d(306,a,""))}}return a;case 0:return xc(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,l=Hn(n,a.pendingProps),Qf(e,a,n,l,t);case 3:e:{if(no(a,a.stateNode.containerInfo),e===null)throw Error(d(387));n=a.pendingProps;var o=a.memoizedState;l=o.element,Qr(e,a),xl(a,n,null,t);var u=a.memoizedState;if(n=u.cache,Wt(a,Ze,n),n!==o.cache&&Br(a,[Ze],t,!0),gl(),n=u.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=o,a.memoizedState=o,a.flags&256){a=Pf(e,a,n,t);break e}else if(n!==l){l=Ga(Error(d(424)),a),dl(l),a=Pf(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=$a(e.firstChild),ta=a,he=!0,Ft=null,Pa=!0,t=Hm(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Rn(),n===l){a=qt(e,a,t);break e}We(e,a,n,t)}a=a.child}return a;case 26:return yi(e,a),e===null?(t=Eh(a.type,null,a.pendingProps,null))?a.memoizedState=t:he||(a.stateNode=ah(a.type,a.pendingProps,Qt.current,a)):a.memoizedState=Eh(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Js(a),e===null&&he&&(n=a.stateNode=xh(a.type,a.pendingProps,Qt.current),ta=a,Pa=!0,l=ke,hn(a.type)?(Nu=l,ke=$a(n.firstChild)):ke=l),We(e,a,a.pendingProps.children,t),yi(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&he&&((l=n=ke)&&(n=Zx(n,a.type,a.pendingProps,Pa),n!==null?(a.stateNode=n,ta=a,ke=$a(n.firstChild),Pa=!1,l=!0):l=!1),l||Jt(a)),Js(a),l=a.type,o=a.pendingProps,u=e!==null?e.memoizedProps:null,n=o.children,mu(l,o)?n=null:u!==null&&mu(l,u)&&(a.flags|=32),a.memoizedState!==null&&(l=Wr(e,a,Yg,null,null,t),ki._currentValue=l),yi(e,a),We(e,a,n,t),a.child;case 6:return e===null&&he&&((e=t=ke)&&(t=Kx(t,a.pendingProps,Pa),t!==null?(a.stateNode=t,ta=a,ke=null,e=!0):e=!1),e||Jt(a)),null;case 13:return Xf(e,a,t);case 4:return no(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=kn(a,null,n,t):We(e,a,n,t),a.child;case 11:return kf(e,a,a.type,a.pendingProps,t);case 7:return n=a.pendingProps,yi(e,a),We(e,a,n,t),a.child;case 8:return We(e,a,a.pendingProps.children,t),a.child;case 12:return We(e,a,a.pendingProps.children,t),a.child;case 10:return Kf(e,a,t);case 9:return l=a.type._context,n=a.pendingProps.children,Dn(a),l=ra(l),n=n(l),a.flags|=1,We(e,a,n,t),a.child;case 14:return Bf(e,a,a.type,a.pendingProps,t);case 15:return Hf(e,a,a.type,a.pendingProps,t);case 19:return Sc(e,a,t);case 31:return Wg(e,a,t);case 22:return If(e,a,t,a.pendingProps);case 24:return Dn(a),n=ra(Ze),e===null?(l=Vr(),l===null&&(l=Ue,o=Hr(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),a.memoizedState={parent:n,cache:l},Yr(a),Wt(a,Ze,l)):((e.lanes&t)!==0&&(Qr(e,a),xl(a,null,null,t),gl()),l=e.memoizedState,o=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),Wt(a,Ze,n)):(n=o.cache,Wt(a,Ze,n),n!==l.cache&&Br(a,[Ze],t,!0))),We(e,a,a.pendingProps.children,t),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=a.pendingProps,n.name!=null&&n.name!=="auto"?a.flags|=e===null?18882560:18874368:he&&To(a),e!==null&&e.memoizedProps.name!==n.name?a.flags|=4194816:yi(e,a),We(e,a,n.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Lt(e){e.flags|=4}function wc(e,a,t,n,l){var o;if((o=(e.mode&32)!==0)&&(o=t===null?wh(a,n):wh(a,n)&&(n.src!==t.src||n.srcSet!==t.srcSet)),o){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Mp())e.flags|=8192;else throw Ln=Uo,Gr}else e.flags&=-16777217}function Jf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Oh(a))if(Mp())e.flags|=8192;else throw Ln=Uo,Gr}function es(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ad():536870912,e.lanes|=a,Ai|=a)}function Sl(e,a){if(!he)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(a=e.tail,t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null}}function Be(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&1206910976,n|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function tx(e,a,t){var n=a.pendingProps;switch(Ur(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(a),null;case 1:return Be(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Dt(Ze),Fn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(fi(a)?Lt(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Lr())),Be(a),null;case 26:var l=a.type,o=a.memoizedState;return e===null?(Lt(a),o!==null?(Be(a),Jf(a,o)):(Be(a),wc(a,l,null,n,t))):o?o!==e.memoizedState?(Lt(a),Be(a),Jf(a,o)):(Be(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Lt(a),Be(a),wc(a,l,e,n,t)),null;case 27:if(io(a),t=Qt.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Lt(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Be(a),a.subtreeFlags&=-33554433,null}e=st.current,fi(a)?Cm(a):(e=xh(l,n,t),a.stateNode=e,Lt(a))}return Be(a),a.subtreeFlags&=-33554433,null;case 5:if(io(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Lt(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Be(a),a.subtreeFlags&=-33554433,null}if(o=st.current,fi(a))Cm(a);else{var u=Ul(Qt.current);switch(o){case 1:o=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=u.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?u.createElement(l,{is:n.is}):u.createElement(l)}}o[sa]=a,o[Ea]=n;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)o.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=o;e:switch(ma(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Lt(a)}}return Be(a),a.subtreeFlags&=-33554433,wc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Lt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(d(166));if(e=Qt.current,fi(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,l=ta,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[sa]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Fp(e.nodeValue,t)),e||Jt(a,!0)}else e=Ul(e).createTextNode(n),e[sa]=a,a.stateNode=e}return Be(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=fi(a),t!==null){if(e===null){if(!n)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[sa]=a}else Rn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Be(a),e=!1}else t=Lr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Ua(a),a):(Ua(a),null);if((a.flags&128)!==0)throw Error(d(558))}return Be(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fi(a),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[sa]=a}else Rn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Be(a),l=!1}else l=Lr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(Ua(a),a):(Ua(a),null)}return Ua(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),es(a,a.updateQueue),Be(a),null);case 4:return Fn(),e===null&&su(a.stateNode.containerInfo),a.flags|=67108864,Be(a),null;case 10:return Dt(a.type),Be(a),null;case 19:if(Fr(a),n=a.memoizedState,n===null)return Be(a),null;if(l=(a.flags&128)!==0,o=n.rendering,o===null)if(l)Sl(n,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(o=Bo(e),o!==null){for(a.flags|=128,Sl(n,!1),e=o.updateQueue,a.updateQueue=e,es(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Sm(t,e),t=t.sibling;return bl(a,ua.current&1|2),he&&_t(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Ra()>ms&&(a.flags|=128,l=!0,Sl(n,!1),a.lanes=4194304)}else{if(!l)if(e=Bo(o),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,es(a,e),Sl(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!o.alternate&&!he)return Be(a),null}else 2*Ra()-n.renderingStartTime>ms&&t!==536870912&&(a.flags|=128,l=!0,Sl(n,!1),a.lanes=4194304);n.isBackwards?(o.sibling=a.child,a.child=o):(e=n.last,e!==null?e.sibling=o:a.child=o,n.last=o)}if(n.tail!==null){e=n.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ra(),e.sibling=null,o=ua.current,o=l?o&1|2:o&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!t||he?bl(a,o):(t=o,Le(ca,a),Le(ua,t),ha===null&&(ha=a)),he&&_t(a,n.treeForkCount),e}return Be(a),null;case 22:case 23:return Ua(a),Zr(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Be(a),a.subtreeFlags&6&&(a.flags|=8192)):Be(a),t=a.updateQueue,t!==null&&es(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&oa(Un),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Dt(Ze),Be(a),null;case 25:return null;case 30:return a.flags|=33554432,Be(a),null}throw Error(d(156,a.tag))}function nx(e,a){switch(Ur(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Dt(Ze),Fn(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return io(a),null;case 31:if(a.memoizedState!==null){if(Ua(a),a.alternate===null)throw Error(d(340));Rn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Ua(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Rn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Fr(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return Fn(),null;case 10:return Dt(a.type),null;case 22:case 23:return Ua(a),Zr(),e!==null&&oa(Un),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Dt(Ze),null;case 25:return null;default:return null}}function Wf(e,a){switch(Ur(a),a.tag){case 3:Dt(Ze),Fn();break;case 26:case 27:case 5:io(a);break;case 4:Fn();break;case 31:a.memoizedState!==null&&Ua(a);break;case 13:Ua(a);break;case 19:Fr(a);break;case 10:Dt(a.type);break;case 22:case 23:Ua(a),Zr(),e!==null&&oa(Un);break;case 24:Dt(Ze)}}function Al(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){n=void 0;var o=t.create,u=t.inst;n=o(),u.destroy=n}t=t.next}while(t!==l)}}catch(p){_e(a,a.return,p)}}function rn(e,a,t){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var u=n.inst,p=u.destroy;if(p!==void 0){u.destroy=void 0,l=a;var x=t,T=p;try{T()}catch(_){_e(l,x,_)}}}n=n.next}while(n!==o)}}catch(_){_e(a,a.return,_)}}function ep(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Vm(a,t)}catch(n){_e(e,e.return,n)}}}function ap(e,a,t){t.props=Hn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){_e(e,a,n)}}function dt(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var l=e.stateNode,o=Tt(e.memoizedProps,l);(l.ref===null||l.ref.name!==o)&&(l.ref=rh(o)),n=l.ref;break;case 7:if(e.stateNode===null){var u=new Ha(e);h(e.child,!1,Xx,u,void 0,void 0),e.stateNode=u}n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(p){_e(e,a,p)}}function da(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(l){_e(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){_e(e,a,l)}else t.current=null}function as(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var t=0;t<a.length;t++)ph(e.stateNode,a[t])}function tp(e){for(var a=e.return;a!==null&&(Tc(a)&&ph(e.stateNode,a.stateNode),!Oc(a));)a=a.return}function wl(e){for(var a=e.return;a!==null&&(Tc(a)&&$x(e.stateNode,a.stateNode),!Oc(a));)a=a.return}function Oc(e){return e.tag===5||e.tag===3||e.tag===27}function Tc(e){return e&&e.tag===7&&e.stateNode!==null}function Cc(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(l){_e(e,e.return,l)}}function Rc(e,a,t){try{var n=e.stateNode;Cx(n,e.type,t,a),n[Ea]=a}catch(l){_e(e,e.return,l)}}function np(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hn(e.type)||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,a,t,n){var l=e.tag;if(l===5||l===6)l=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(l),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=rt)),as(e,n),Ae=!0;else if(l!==4&&(l===27&&(as(e,n),n=null,hn(e.type)&&(t=e.stateNode,a=null)),e=e.child,e!==null))for(Mc(e,a,t,n),e=e.sibling;e!==null;)Mc(e,a,t,n),e=e.sibling}function ts(e,a,t,n){var l=e.tag;if(l===5||l===6)l=e.stateNode,a?t.insertBefore(l,a):t.appendChild(l),as(e,n),Ae=!0;else if(l!==4&&(l===27&&(as(e,n),n=null,hn(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(ts(e,a,t,n),e=e.sibling;e!==null;)ts(e,a,t,n),e=e.sibling}function ip(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);ma(a,n,t),a[sa]=e,a[Ea]=t}catch(o){_e(e,e.return,o)}}var ns=!1,qa=null;function lp(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ns=!0)}var mt=null;function op(){var e=mt;return mt=null,e}var Sa=0;function Ni(e,a,t,n,l){return Sa=0,sp(e.child,a,t,n,l)}function sp(e,a,t,n,l){for(var o=!1;e!==null;){if(e.tag===5){var u=e.stateNode;if(n!==null){var p=hu(u);n.push(p),p.view&&(o=!0)}else o||hu(u).view&&(o=!0);ns=!0,oh(u,Sa===0?a:a+"_"+Sa,t),Sa++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||sp(e.child,a,t,n,l)&&(o=!0));e=e.sibling}return o}function ft(e,a){for(;e!==null;)e.tag===5?sh(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||ft(e.child,a)),e=e.sibling}function is(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(is(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(d(544));var t=a.name;a=Ct(a.default,a.share),a!=="none"&&(Ni(e,t,a,null,!1)||ft(e.child,!1))}e=e.sibling}}function Dc(e,a){if(e.tag===30){var t=e.stateNode,n=e.memoizedProps,l=Tt(n,t),o=Ct(n.default,t.paired?n.share:n.enter);o!=="none"?Ni(e,l,o,null,!1)?(is(e),t.paired||a||Ci(e,n.onEnter)):ft(e.child,!1):is(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Dc(e,a),e=e.sibling;else is(e)}function zc(e){if(qa!==null&&qa.size!==0){var a=qa;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,n=t.name;if(n!=null&&n!=="auto"){var l=a.get(n);if(l!==void 0){var o=Ct(t.default,t.share);if(o!=="none"&&(Ni(e,n,o,null,!1)?(o=e.stateNode,l.paired=o,o.paired=l,Ci(e,t.onShare)):ft(e.child,!1)),a.delete(n),a.size===0)break}}}zc(e)}e=e.sibling}}}function Uc(e){if(e.tag===30){var a=e.memoizedProps,t=Tt(a,e.stateNode),n=qa!==null?qa.get(t):void 0,l=Ct(a.default,n!==void 0?a.share:a.exit);l!=="none"&&(Ni(e,t,l,null,!1)?n!==void 0?(l=e.stateNode,n.paired=l,l.paired=n,qa.delete(t),Ci(e,a.onShare)):Ci(e,a.onExit):ft(e.child,!1)),qa!==null&&zc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Uc(e),e=e.sibling;else qa!==null&&zc(e)}function rp(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,t=Tt(a,e.stateNode);a=Ct(a.default,a.update),e.flags&=-5,a!=="none"&&Ni(e,t,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&rp(e);e=e.sibling}}function qc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,ft(e.child,!1))}qc(e)}e=e.sibling}}function ls(e){if(e.tag===30)e.stateNode.paired=null,ft(e.child,!1),qc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ls(e),e=e.sibling;else qc(e)}function cp(e){for(e=e.child;e!==null;)e.tag===30?ft(e.child,!1):(e.subtreeFlags&33554432)!==0&&cp(e),e=e.sibling}function Lc(e,a,t,n,l,o,u){for(var p=!1;a!==null;){if(a.tag===5){var x=a.stateNode;if(o!==null&&Sa<o.length){var T=o[Sa],_=hu(x);(T.view||_.view)&&(p=!0);var D;if(D=(e.flags&4)===0)if(_.clip)D=!0;else{D=T.rect;var w=_.rect;D=D.y!==w.y||D.x!==w.x||D.height!==w.height||D.width!==w.width}D&&(e.flags|=4),_.abs?_=!T.abs:(T=T.rect,_=_.rect,_=T.height!==_.height||T.width!==_.width),_&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&oh(x,Sa===0?t:t+"_"+Sa,l),p&&(e.flags&4)!==0||(mt===null&&(mt=[]),mt.push(x,Sa===0?n:n+"_"+Sa,a.memoizedProps)),Sa++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&u?e.flags|=a.flags&32:Lc(e,a.child,t,n,l,o,u)&&(p=!0));a=a.sibling}return p}function up(e,a){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=e.stateNode,l=Tt(t,n),o=Ct(t.default,t.update),u;u=e.memoizedState,e.memoizedState=null,n=e;var p=e.child;Sa=0,l=Lc(n,p,l,l,o,u,!1),(e.flags&4)!==0&&l&&Ci(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&up(e);e=e.sibling}}var na=!1,Ce=!1,pt=!1,kc=!1,dp=typeof WeakSet=="function"?WeakSet:Set,ia=null,ht=!1,Ol=!1,os=!1,Bc=!1;function ix(e,a,t){if(e=e.containerInfo,uu=Bi,e=pm(e),Ar(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,x=-1,T=-1,_=0,D=0,w=e,R=null;a:for(;;){for(var G;w!==n||o!==0&&w.nodeType!==3||(x=p+o),w!==u||l!==0&&w.nodeType!==3||(T=p+l),w.nodeType===3&&(p+=w.nodeValue.length),(G=w.firstChild)!==null;)R=w,w=G;for(;;){if(w===e)break a;if(R===n&&++_===o&&(x=p),R===u&&++D===l&&(T=p),(G=w.nextSibling)!==null)break;w=R,R=w.parentNode}w=G}n=x===-1||T===-1?null:{start:x,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},Bi=!1,t=(t&335544064)===t,ia=a,a=t?9270:1024;ia!==null;){if(e=ia,t&&(n=e.deletions,n!==null))for(o=0;o<n.length;o++)t&&Uc(n[o]);if(e.alternate===null&&(e.flags&2)!==0)t&&lp(e),ss(t);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&t&&Uc(n),ss(t);continue}else if(n!==null&&n.memoizedState!==null){t&&lp(e),ss(t);continue}}n=e.child,(e.subtreeFlags&a)!==0&&n!==null?(n.return=e,ia=n):(t&&rp(e),ss(t))}}qa=null}function ss(e){for(;ia!==null;){var a=ia,t=e,n=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){t=void 0,l=n.memoizedProps,n=n.memoizedState;var o=a.stateNode;try{var u=Hn(a.type,l);t=o.getSnapshotBeforeUpdate(u,n),o.__reactInternalSnapshotBeforeUpdate=t}catch(p){_e(a,a.return,p)}}break;case 3:if((l&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)xu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":xu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&n!==null&&(t=Tt(n.memoizedProps,n.stateNode),l=a.memoizedProps,l=Ct(l.default,l.update),l!=="none"&&Ni(n,t,l,n.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(d(163))}if(n=a.sibling,n!==null){n.return=a.return,ia=n;break}ia=a.return}}function mp(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:vt(e,t),n&4&&Al(5,t);break;case 1:if(vt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(u){_e(t,t.return,u)}else{var l=Hn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){_e(t,t.return,u)}}n&64&&ep(t),n&512&&dt(t,t.return);break;case 3:if(vt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Vm(e,a)}catch(u){_e(t,t.return,u)}}break;case 27:a===null&&n&4&&ip(t);case 26:case 5:vt(e,t),a===null&&n&4&&Cc(t),n&512&&dt(t,t.return);break;case 12:vt(e,t);break;case 31:vt(e,t),n&4&&vp(e,t);break;case 13:vt(e,t),n&4&&gp(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=vx.bind(null,t),Fx(e,t))));break;case 22:if(n=t.memoizedState!==null||na,!n){var o=a!==null&&a.memoizedState!==null||Ce;a=na,l=Ce,na=n,(Ce=o)&&!l?(n=2,(t.subtreeFlags&8772)!==0&&(n|=1),at(e,t,n)):vt(e,t),na=a,Ce=l}break;case 30:vt(e,t),n&512&&dt(t,t.return);break;case 7:n&512&&dt(t,t.return);default:vt(e,t)}}function Hc(e,a){for(e=e.child;e!==null;)fp(e,a),e=e.sibling}function fp(e,a){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(a){var n=t.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var l=e.stateNode,o=e.memoizedProps.style,u=o!=null&&o.hasOwnProperty("display")?o.display:null;l.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(x){_e(e,e.return,x)}Ic(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,Ae=!0}catch(x){_e(e,e.return,x)}break;case 18:try{var p=e.stateNode;a?lh(p,!0):lh(e.stateNode,!1)}catch(x){_e(e,e.return,x)}break;case 22:case 23:e.memoizedState===null&&Hc(e,a);break;default:Hc(e,a)}}function Ic(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,n=a;switch(t.tag){case 4:fp(t,n);break e;case 22:t.memoizedState===null&&Ic(t,n);break e;default:Ic(t,n)}}e=e.sibling}}function pp(e){var a=e.alternate;a!==null&&(e.alternate=null,pp(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&mo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,Aa=!1;function Wa(e,a,t){for(t=t.child;t!==null;)hp(e,a,t),t=t.sibling}function hp(e,a,t){if(_a&&typeof _a.onCommitFiberUnmount=="function")try{_a.onCommitFiberUnmount(Ki,t)}catch{}switch(t.tag){case 26:Ce||da(t,a),Wa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Ce&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ce||da(t,a),wl(t);var n=He,l=Aa;hn(t.type)&&(He=t.stateNode,Aa=!1),Wa(e,a,t),bh(t.stateNode,t.type,t.memoizedProps),He=n,Aa=l;break;case 5:Ce||da(t,a),wl(t);case 6:if(t.tag===6&&wl(t),n=He,l=Aa,He=null,Wa(e,a,t),He=n,Aa=l,He!==null)if(Aa)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(t.stateNode),Ae=!0}catch(o){_e(t,a,o)}else try{He.removeChild(t.stateNode),Ae=!0}catch(o){_e(t,a,o)}break;case 18:He!==null&&(Aa?(e=He,ih(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Hi(e)):ih(He,t.stateNode));break;case 4:n=He,l=Aa,He=t.stateNode.containerInfo,Aa=!0,Wa(e,a,t),He=n,Aa=l;break;case 0:case 11:case 14:case 15:rn(2,t,a),Ce||rn(4,t,a),Wa(e,a,t);break;case 1:Ce||(da(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&ap(t,a,n)),Wa(e,a,t);break;case 21:Wa(e,a,t);break;case 22:Ce=(n=Ce)||t.memoizedState!==null,Wa(e,a,t),Ce=n;break;case 30:da(t,a),Wa(e,a,t);break;case 7:Ce||da(t,a),Wa(e,a,t);break;default:Wa(e,a,t)}}function vp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hi(e)}catch(t){_e(a,a.return,t)}}}function gp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hi(e)}catch(t){_e(a,a.return,t)}}function lx(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new dp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new dp),a;default:throw Error(d(435,e.tag))}}function rs(e,a){var t=lx(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var l=gx.bind(null,e,n);n.then(l,l)}})}function ya(e,a,t){var n=a.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],u=e,p=a,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(hn(x.type)){He=x.stateNode,Aa=!1;break e}break;case 5:He=x.stateNode,Aa=!1;break e;case 3:case 4:He=x.stateNode.containerInfo,Aa=!0;break e}x=x.return}if(He===null)throw Error(d(160));hp(u,p,o),He=null,Aa=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)xp(a,e,t),a=a.sibling}var et=null;function xp(e,a,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var o=0;o<n.length;o++){var u=n[o];u.ref.impl=u.nextImpl}ya(a,e,t),Na(e),l&4&&(rn(3,e,e.return),Al(3,e),rn(5,e,e.return));break;case 1:ya(a,e,t),Na(e),l&512&&(Ce||n===null||da(n,n.return)),l&64&&na&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:if(o=et,ya(a,e,t),Na(e),l&512&&(Ce||n===null||da(n,n.return)),l&4)if(l=n!==null?n.memoizedState:null,t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null)if(na)e.stateNode=ah(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,t=e.memoizedProps,l=o.ownerDocument||o;a:switch(a){case"title":n=l.getElementsByTagName("title")[0],(!n||n[Wi]||n[sa]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=l.createElement(a),l.head.insertBefore(n,l.querySelector("head > title"))),ma(n,a,t),n[sa]=e,aa(n),a=n;break e;case"link":if(o=Ah("link","href",l).get(a+(t.href||""))){for(u=0;u<o.length;u++)if(n=o[u],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(u,1);break a}}n=l.createElement(a),ma(n,a,t),l.head.appendChild(n);break;case"meta":if(o=Ah("meta","content",l).get(a+(t.content||""))){for(u=0;u<o.length;u++)if(n=o[u],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(u,1);break a}}n=l.createElement(a),ma(n,a,t),l.head.appendChild(n);break;default:throw Error(d(468,a))}n[sa]=e,aa(n),a=n}e.stateNode=a}else na||Au(o,e.type,e.stateNode);else e.stateNode=Sh(o,t,e.memoizedProps);else l!==t?(l===null?(a=n.stateNode,a===null||Ce||a.parentNode.removeChild(a)):l.count--,t===null?na||Au(o,e.type,e.stateNode):Sh(o,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,n.memoizedProps);break;case 27:ya(a,e,t),Na(e),l&512&&(Ce||n===null||da(n,n.return)),n!==null&&l&4&&Rc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(o=pt,pt=!1,ya(a,e,t),pt=o,Na(e),l&512&&(Ce||n===null||da(n,n.return)),e.flags&32){a=e.stateNode;try{ni(a,""),Ae=!0}catch(_){_e(e,e.return,_)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Rc(e,a,n!==null?n.memoizedProps:a)),l&1024&&(kc=!0);break;case 6:if(ya(a,e,t),Na(e),l&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a,Ae=!0}catch(_){_e(e,e.return,_)}}break;case 3:if(Ae=!1,js=null,o=et,et=ql(a.containerInfo),ya(a,e,t),et=o,Na(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(a.containerInfo)}catch(_){_e(e,e.return,_)}kc&&(kc=!1,bp(e)),Ae=!1;break;case 4:l=pt,pt=na,n=kd(),o=et,et=ql(e.stateNode.containerInfo),ya(a,e,t),Na(e),et=o,Ae&&Ol&&(os=!0),Ae=n,pt=l;break;case 12:ya(a,e,t),Na(e);break;case 31:ya(a,e,t),Na(e),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,rs(e,a)));break;case 13:ya(a,e,t),Na(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ds=Ra()),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,rs(e,a)));break;case 22:o=e.memoizedState!==null,u=n!==null&&n.memoizedState!==null;var p=na,x=Ce,T=pt;na=p||o,pt=T||o,Ce=x||u,ya(a,e,t),Ce=x,pt=T,na=p,Na(e),l&8192&&(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,!o||n===null||u||na||Ce||(a=u||Ce,t=na,n=Ce,na=o||na,Ce=a,cn(e,2),na=t,Ce=n),!o&&pt||Hc(e,o)),l&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,rs(e,t))));break;case 19:ya(a,e,t),Na(e),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,rs(e,a)));break;case 30:l&512&&(Ce||n===null||da(n,n.return)),l=kd(),o=Ol,u=(t&335544064)===t,p=e.memoizedProps,Ol=u&&Ct(p.default,p.update)!=="none",ya(a,e,t),Na(e),u&&n!==null&&Ae&&(e.flags|=4),Ol=o,Ae=l;break;case 21:break;case 7:l&512&&(Ce||n===null||da(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:ya(a,e,t),Na(e)}}function Na(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(np(n)){t=n;break}n=n.return}n=null;for(var l=e.return;l!==null;){if(Tc(l)){var o=l.stateNode;n===null?n=[o]:n.push(o)}if(Oc(l))break;l=l.return}var u=n;if(t==null)throw Error(d(160));switch(t.tag){case 27:var p=t.stateNode,x=_c(e);ts(e,x,p,u);break;case 5:var T=t.stateNode;t.flags&32&&(ni(T,""),t.flags&=-33);var _=_c(e);ts(e,_,T,u);break;case 3:case 4:var D=t.stateNode.containerInfo,w=_c(e);Mc(e,w,D,u);break;default:throw Error(d(161))}}catch(R){_e(e,e.return,R)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;bp(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Bi=!0,a.reset(),Bi=!1),e=e.sibling}}function Ei(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)yp(a,e),a=a.sibling;else up(a)}function yp(e,a){var t=e.alternate;if(t===null)Dc(e,!1);else switch(e.tag){case 3:if(Bc=ht=!1,op(),Ei(a,e),!ht&&!os){if(e=mt,e!==null)for(var n=0;n<e.length;n+=3){t=e[n];var l=e[n+1];sh(t,e[n+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Bc=!0}mt=null;break;case 5:Ei(a,e);break;case 4:n=ht,ht=!1,Ei(a,e),ht&&(os=!0),ht=n;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Dc(e,!1):Ei(a,e));break;case 30:n=ht,l=op(),ht=!1,Ei(a,e),ht&&(e.flags|=4);var o=e.memoizedProps,u=e.stateNode;a=Tt(o,u),u=Tt(t.memoizedProps,u);var p=Ct(o.default,o.update);p==="none"?a=!1:(o=t.memoizedState,t.memoizedState=null,t=e.child,Sa=0,a=Lc(e,t,a,u,p,o,!0),Sa!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Ci(e,e.memoizedProps.onUpdate),mt=l):l!==null&&(l.push.apply(l,mt),mt=l),ht=(e.flags&32)!==0?!0:n;break;default:Ei(a,e)}}function vt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)mp(e,a.alternate,a),a=a.sibling}function cn(e,a){for(e=e.child;e!==null;){var t=e,n=a;switch(t.tag){case 0:case 11:case 14:case 15:rn(4,t,t.return),cn(t,n);break;case 1:da(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&ap(t,t.return,l),cn(t,n);break;case 27:(n&2)!==0&&bh(t.stateNode,t.type,t.memoizedProps);case 5:da(t,t.return),t.tag!==5&&t.tag!==27||wl(t),cn(t,n);break;case 6:wl(t);break;case 26:da(t,t.return),l=t.stateNode,t.memoizedState!==null||l===null||Ce||l.parentNode.removeChild(l),cn(t,n);break;case 22:t.memoizedState===null&&cn(t,n);break;case 30:da(t,t.return),cn(t,n);break;case 7:da(t,t.return);default:cn(t,n)}e=e.sibling}}function at(e,a,t){for(t=(a.subtreeFlags&8772)!==0?t:t&-2,a=a.child;a!==null;){var n=a.alternate,l=e,o=a,u=o.flags,p=(t&1)!==0;switch(o.tag){case 0:case 11:case 15:at(l,o,t),Al(4,o);break;case 1:if(at(l,o,t),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){_e(n,n.return,_)}if(n=o,l=n.updateQueue,l!==null){var x=n.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)Im(T[l],x)}catch(_){_e(n,n.return,_)}}p&&u&64&&ep(o),dt(o,o.return);break;case 27:(t&2)!==0&&ip(o);case 5:o.tag!==5&&o.tag!==27||tp(o),at(l,o,t),p&&n===null&&u&4&&Cc(o),dt(o,o.return);break;case 6:tp(o);break;case 26:x=o.stateNode,o.memoizedState!==null||x===null||na||Au(ql(x.ownerDocument),o.type,x),at(l,o,t),p&&n===null&&u&4&&Cc(o),dt(o,o.return);break;case 12:at(l,o,t);break;case 31:at(l,o,t),p&&u&4&&vp(l,o);break;case 13:at(l,o,t),p&&u&4&&gp(l,o);break;case 22:o.memoizedState===null&&at(l,o,t),dt(o,o.return);break;case 30:at(l,o,t),dt(o,o.return);break;case 7:dt(o,o.return);default:at(l,o,t)}a=a.sibling}}function Vc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ml(t))}function Gc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&ml(e))}function Xa(e,a,t,n){var l=(t&335544064)===t;if(a.subtreeFlags&(l?10262:10256))for(a=a.child;a!==null;)Np(e,a,t,n),a=a.sibling;else l&&cp(a)}function Np(e,a,t,n){var l=(t&335544064)===t;l&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&ls(a);var o=a.flags;switch(a.tag){case 0:case 11:case 15:Xa(e,a,t,n),o&2048&&Al(9,a);break;case 1:Xa(e,a,t,n);break;case 3:Xa(e,a,t,n),l&&Bc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,a.alternate!==null&&(o=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==o&&(a.refCount++,o!=null&&ml(o)));break;case 12:if(o&2048){Xa(e,a,t,n),o=a.stateNode;try{var u=a.memoizedProps,p=u.id,x=u.onPostCommit;typeof x=="function"&&x(p,a.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(T){_e(a,a.return,T)}}else Xa(e,a,t,n);break;case 31:Xa(e,a,t,n);break;case 13:Xa(e,a,t,n);break;case 23:break;case 22:u=a.stateNode,p=a.alternate,a.memoizedState!==null?(l&&p!==null&&p.memoizedState===null&&ls(p),u._visibility&2?Xa(e,a,t,n):Tl(e,a)):(l&&p!==null&&p.memoizedState!==null&&ls(a),u._visibility&2?Xa(e,a,t,n):(u._visibility|=2,ji(e,a,t,n,(a.subtreeFlags&10256)!==0||!1))),o&2048&&Vc(p,a);break;case 24:Xa(e,a,t,n),o&2048&&Gc(a.alternate,a);break;case 30:l&&(o=a.alternate,o!==null&&(ft(o.child,!0),ft(a.child,!0))),Xa(e,a,t,n);break;default:Xa(e,a,t,n)}}function ji(e,a,t,n,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var o=e,u=a,p=t,x=n,T=u.flags;switch(u.tag){case 0:case 11:case 15:ji(o,u,p,x,l),Al(8,u);break;case 23:break;case 22:var _=u.stateNode;u.memoizedState!==null?_._visibility&2?ji(o,u,p,x,l):Tl(o,u):(_._visibility|=2,ji(o,u,p,x,l)),l&&T&2048&&Vc(u.alternate,u);break;case 24:ji(o,u,p,x,l),l&&T&2048&&Gc(u.alternate,u);break;default:ji(o,u,p,x,l)}a=a.sibling}}function Tl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,l=n.flags;switch(n.tag){case 22:Tl(t,n),l&2048&&Vc(n.alternate,n);break;case 24:Tl(t,n),l&2048&&Gc(n.alternate,n);break;default:Tl(t,n)}a=a.sibling}}var In=8192;function Vn(e,a,t){if(e.subtreeFlags&In)for(e=e.child;e!==null;)Ep(e,a,t),e=e.sibling}function Ep(e,a,t){switch(e.tag){case 26:Vn(e,a,t),e.flags&In&&(e.memoizedState!==null?db(t,et,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&Ch(t,e)));break;case 5:Vn(e,a,t),e.flags&In&&(e=e.stateNode,(a&335544128)===a&&Ch(t,e));break;case 3:case 4:var n=et;et=ql(e.stateNode.containerInfo),Vn(e,a,t),et=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=In,In=16777216,Vn(e,a,t),In=n):Vn(e,a,t));break;case 30:if((e.flags&In)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var l=e.stateNode;l.paired=null,qa===null&&(qa=new Map),qa.set(n,l)}Vn(e,a,t);break;default:Vn(e,a,t)}}function jp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Cl(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ia=n,Ap(n,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sp(e),e=e.sibling}function Sp(e){switch(e.tag){case 0:case 11:case 15:Cl(e),e.flags&2048&&rn(9,e,e.return);break;case 3:Cl(e);break;case 12:Cl(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,cs(e)):Cl(e);break;default:Cl(e)}}function cs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];ia=n,Ap(n,e)}jp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:rn(8,a,a.return),cs(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,cs(a));break;default:cs(a)}e=e.sibling}}function Ap(e,a){for(;ia!==null;){var t=ia;switch(t.tag){case 0:case 11:case 15:rn(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ml(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,ia=n;else e:for(t=e;ia!==null;){n=ia;var l=n.sibling,o=n.return;if(pp(n),n===t){ia=null;break e}if(l!==null){l.return=o,ia=l;break e}ia=o}}}var ox={getCacheForType:function(e){var a=ra(Ze),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ra(Ze).controller.signal}},sx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ue=null,ve=null,xe=0,Re=0,La=null,un=!1,Si=!1,Yc=!1,kt=0,Pe=0,dn=0,Gn=0,us=0,ka=0,Ai=0,Rl=null,wa=null,Qc=!1,ds=0,wp=0,ms=1/0,fs=null,mn=null,Ve=0,tt=null,Yn=null,gt=0,Pc=0,Xc=null,Op=null,wi=null,Oi=null,Ti=null,_l=0,ps=null;function Ba(){return(Oe&2)!==0&&xe!==0?xe&-xe:ee.T!==null?nu():Cd()}function Tp(){if(ka===0)if((xe&536870912)===0||he){var e=so;so<<=1,(so&3932160)===0&&(so=262144),ka=e}else ka=536870912;return e=ca.current,e!==null&&(e.flags|=32),ka}function Ci(e,a){if(a!=null){var t=e.stateNode,n=t.ref;n===null&&(n=t.ref=rh(Tt(e.memoizedProps,t))),Oi===null&&(Oi=[]),Oi.push(a.bind(null,n))}}function Oa(e,a,t){(e===Ue&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Ri(e,0),fn(e,xe,ka,!1)),Ji(e,t),((Oe&2)===0||e!==Ue)&&(e===Ue&&((Oe&2)===0&&(Gn|=t),Pe===4&&fn(e,xe,ka,!1)),xt(e))}function Cp(e,a,t){if((Oe&6)!==0)throw Error(d(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Fi(e,a),l=n?ux(e,a):Zc(e,a,!0),o=n;do{if(l===0){Si&&!n&&fn(e,a,0,!1);break}else{if(t=e.current.alternate,o&&!rx(t)){l=Zc(e,a,!1),o=!1;continue}if(l===2){if(o=a,e.errorRecoveryDisabledLanes&o)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var p=e;l=Rl;var x=p.current.memoizedState.isDehydrated;if(x&&(Ri(p,u).flags|=256),u=Zc(p,u,!1),u!==2&&u!==6){if(Yc&&!x){p.errorRecoveryDisabledLanes|=o,Gn|=o,l=4;break e}o=wa,wa=l,o!==null&&(wa===null?wa=o:wa.push.apply(wa,o))}l=u}if(o=!1,l!==2)continue}}if(l===1){Ri(e,0),fn(e,a,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:fn(n,a,ka,!un);break e;case 2:wa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(l=ds+300-Ra(),10<l)){if(fn(n,a,ka,!un),co(n,0,!0)!==0)break e;gt=a,n.timeoutHandle=pu(Rp.bind(null,n,t,wa,fs,Qc,a,ka,Gn,Ai,un,o,"Throttled",-0,0),l);break e}Rp(n,t,wa,fs,Qc,a,ka,Gn,Ai,un,o,null,-0,0)}}break}while(!0);xt(e)}function Rp(e,a,t,n,l,o,u,p,x,T,_,D,w,R){e.timeoutHandle=-1;var G=a.subtreeFlags,Z=(o&335544064)===o;if(D=null,(Z||G&8192||(G&16785408)===16785408)&&(D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rt},qa=null,Ep(a,o,D),Z&&(G=D,Z=e.containerInfo,Z=(Z.nodeType===9?Z:Z.ownerDocument).__reactViewTransition,Z!=null&&(G.count++,G.waitingForViewTransition=!0,G=Bl.bind(G),Z.finished.then(G,G))),G=(o&62914560)===o?ds-Ra():(o&4194048)===o?wp-Ra():0,G=mb(D,G),G!==null)){gt=o,e.cancelPendingCommit=G(kp.bind(null,e,a,o,t,n,l,u,p,x,T,_,D,null,w,R)),fn(e,o,u,!T);return}kp(e,a,o,t,n,l,u,p,x,T,_,D)}function rx(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var l=t[n],o=l.getSnapshot;l=l.value;try{if(!za(o(),l))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function fn(e,a,t,n){a=Sd(e,a),a&=~us,a&=~Gn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var l=a;0<l;){var o=31-Ma(l),u=1<<o;n[o]=-1,l&=~u}t!==0&&wd(e,t,a)}function hs(){return(Oe&6)===0?(Ml(0),!1):!0}function $c(){if(ve!==null){if(Re===0)var e=ve.return;else e=ve,Mt=_n=null,tc(e),vi=null,hl=0,e=ve;for(;e!==null;)Wf(e.alternate,e),e=e.return;ve=null}}function Ri(e,a){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,Mx(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),gt=0,$c(),Ue=e,ve=t=Rt(e.current,null),xe=a,Re=0,La=null,un=!1,Si=Fi(e,a),Yc=!1,Ai=ka=us=Gn=dn=Pe=0,wa=Rl=null,Qc=!1,kt=Sd(e,a),jo(),t}function _p(e,a){me=null,ee.H=$o,a===hi||a===zo?(a=Lm(),Re=3):a===Gr?(a=Lm(),Re=4):Re=a===gc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,La=a,ve===null&&(Pe=1,Zo(e,Ga(a,e.current)))}function Mp(){var e=ca.current;return e===null?!0:(xe&4194048)===xe?ha===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ha:!1}function Dp(){var e=ee.H;return ee.H=$o,e===null?$o:e}function zp(){var e=ee.A;return ee.A=ox,e}function vs(){Pe=4,un||(xe&4194048)!==xe&&ca.current!==null||(Si=!0),(dn&134217727)===0&&(Gn&134217727)===0||Ue===null||fn(Ue,xe,ka,!1)}function Zc(e,a,t){var n=Oe;Oe|=2;var l=Dp(),o=zp();(Ue!==e||xe!==a)&&(fs=null,Ri(e,a)),a=!1;var u=Pe;e:do try{if(Re!==0&&ve!==null){var p=ve,x=La;switch(Re){case 8:$c(),u=6;break e;case 3:case 2:case 9:case 6:ca.current===null&&(a=!0);var T=Re;if(Re=0,La=null,_i(e,p,x,T),t&&Si){u=0;break e}break;default:T=Re,Re=0,La=null,_i(e,p,x,T)}}cx(),u=Pe;break}catch(_){_p(e,_)}while(!0);return a&&e.shellSuspendCounter++,Mt=_n=null,Oe=n,ee.H=l,ee.A=o,ve===null&&(Ue=null,xe=0,jo()),u}function cx(){for(;ve!==null;)Up(ve)}function ux(e,a){var t=Oe;Oe|=2;var n=Dp(),l=zp();Ue!==e||xe!==a?(fs=null,ms=Ra()+500,Ri(e,a)):Si=Fi(e,a);e:do try{if(Re!==0&&ve!==null){a=ve;var o=La;a:switch(Re){case 1:Re=0,La=null,_i(e,a,o,1);break;case 2:case 9:if(Um(o)){Re=0,La=null,qp(a);break}a=function(){Re!==2&&Re!==9||Ue!==e||(Re=7),xt(e)},o.then(a,a);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Um(o)?(Re=0,La=null,qp(a)):(Re=0,La=null,_i(e,a,o,7));break;case 5:var u=null;switch(ve.tag){case 26:u=ve.memoizedState;case 5:case 27:var p=ve;if(u?Oh(u):p.stateNode.complete){Re=0,La=null;var x=p.sibling;if(x!==null)ve=x;else{var T=p.return;T!==null?(ve=T,gs(T)):ve=null}break a}}Re=0,La=null,_i(e,a,o,5);break;case 6:Re=0,La=null,_i(e,a,o,6);break;case 8:$c(),Pe=6;break e;default:throw Error(d(462))}}dx();break}catch(_){_p(e,_)}while(!0);return Mt=_n=null,ee.H=n,ee.A=l,Oe=t,ve!==null?0:(Ue=null,xe=0,jo(),Pe)}function dx(){for(;ve!==null&&!T0();)Up(ve)}function Up(e){var a=Ff(e.alternate,e,kt);e.memoizedProps=e.pendingProps,a===null?gs(e):ve=a}function qp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Yf(t,a,a.pendingProps,a.type,void 0,xe);break;case 11:a=Yf(t,a,a.pendingProps,a.type.render,a.ref,xe);break;case 5:tc(a);var n=a;n===ta&&(he?(Co(n),n.tag===5&&n.stateNode!=null&&(ke=n.stateNode)):(Co(n),he=!0));default:Wf(t,a),a=ve=Sm(a,kt),a=Ff(t,a,kt)}e.memoizedProps=e.pendingProps,a===null?gs(e):ve=a}function _i(e,a,t,n){Mt=_n=null,tc(a),vi=null,hl=0;var l=a.return;try{if(Jg(e,l,a,t,xe)){Pe=1,Zo(e,Ga(t,e.current)),ve=null;return}}catch(o){if(l!==null)throw ve=l,o;Pe=1,Zo(e,Ga(t,e.current)),ve=null;return}a.flags&32768?(he||n===1?e=!0:Si||(xe&536870912)!==0?e=!1:(un=e=!0,(n===2||n===9||n===3||n===6)&&(n=ca.current,n!==null&&n.tag===13&&(n.flags|=16384))),Lp(a,e)):gs(a)}function gs(e){var a=e;do{if((a.flags&32768)!==0){Lp(a,un);return}e=a.return;var t=tx(a.alternate,a,kt);if(t!==null){ve=t;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);Pe===0&&(Pe=5)}function Lp(e,a){do{var t=nx(e.alternate,e);if(t!==null){t.flags&=32767,ve=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=t}while(e!==null);Pe=6,ve=null}function kp(e,a,t,n,l,o,u,p,x,T,_,D){e.cancelPendingCommit=null;do xs();while(Ve!==0);if((Oe&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));e===Ue&&(ve=Ue=null,xe=0),Yn=a,tt=e,gt=t,Xc=l,Op=n,mx(e,a,t,u,p,x,D)}}function mx(e,a,t,n,l,o,u){var p=a.lanes|a.childLanes;if(Pc=p,p|=Rr,k0(e,t,p,n,l,o),Oi=null,(t&335544064)===t?(Ti=Hg(e),n=10262):(Ti=null,n=10256),(a.subtreeFlags&n)!==0||(a.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,xx(lo,function(){return Wc(),null})):(e.callbackNode=null,e.callbackPriority=0),ns=!1,n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=ee.T,ee.T=null,l=ie.p,ie.p=2,o=Oe,Oe|=4;try{ix(e,a,t)}finally{Oe=o,ie.p=l,ee.T=n}}Ve=1,ns?wi=kx(u,e.containerInfo,Ti,Kc,Fc,px,Jc,Wc,fx):(Kc(),Fc(),Jc())}function fx(e){if(Ve!==0){var a=tt.onRecoverableError;a(e,{componentStack:null})}}function px(){Ve===3&&(Ve=0,yp(Yn,tt),Ve=4)}function Kc(){if(Ve===1){Ve=0;var e=tt,a=Yn,t=gt,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=ee.T,ee.T=null;var l=ie.p;ie.p=2;var o=Oe;Oe|=4;try{Ol=os=!1,xp(a,e,t),t=du;var u=pm(e.containerInfo),p=t.focusedElem,x=t.selectionRange;if(u!==p&&p&&p.ownerDocument&&fm(p.ownerDocument.documentElement,p)){if(x!==null&&Ar(p)){var T=x.start,_=x.end;if(_===void 0&&(_=T),"selectionStart"in p)p.selectionStart=T,p.selectionEnd=Math.min(_,p.value.length);else{var D=p.ownerDocument||document,w=D&&D.defaultView||window;if(w.getSelection){var R=w.getSelection(),G=p.textContent.length,Z=Math.min(x.start,G),fe=x.end===void 0?Z:Math.min(x.end,G);!R.extend&&Z>fe&&(u=fe,fe=Z,Z=u);var O=mm(p,Z),j=mm(p,fe);if(O&&j&&(R.rangeCount!==1||R.anchorNode!==O.node||R.anchorOffset!==O.offset||R.focusNode!==j.node||R.focusOffset!==j.offset)){var C=D.createRange();C.setStart(O.node,O.offset),R.removeAllRanges(),Z>fe?(R.addRange(C),R.extend(j.node,j.offset)):(C.setEnd(j.node,j.offset),R.addRange(C))}}}}for(D=[],R=p;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<D.length;p++){var M=D[p];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Bi=!!uu,du=uu=null}finally{Oe=o,ie.p=l,ee.T=n}}e.current=a,Ve=2}}function Fc(){if(Ve===2){Ve=0;var e=tt,a=Yn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=ee.T,ee.T=null;var n=ie.p;ie.p=2;var l=Oe;Oe|=4;try{mp(e,a.alternate,a)}finally{Oe=l,ie.p=n,ee.T=t}}Ve=3}}function Jc(){if(Ve===4||Ve===3){Ve=0;var e=wi;wi=null,C0();var a=tt,t=Yn,n=gt,l=Op,o=(n&335544064)===n?10262:10256;if((t.subtreeFlags&o)!==0||(t.flags&o)!==0?Ve=5:(Ve=0,Yn=tt=null,Bp(a,a.pendingLanes)),o=a.pendingLanes,o===0&&(mn=null),sr(n),t=t.stateNode,_a&&typeof _a.onCommitFiberRoot=="function")try{_a.onCommitFiberRoot(Ki,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=ee.T,o=ie.p,ie.p=2,ee.T=null;try{for(var u=a.onRecoverableError,p=0;p<l.length;p++){var x=l[p];u(x.value,{componentStack:x.stack})}}finally{ee.T=t,ie.p=o}}if(l=Oi,u=Ti,Ti=null,l!==null&&(Oi=null,u===null&&(u=[]),e!==null))for(x=0;x<l.length;x++)t=(0,l[x])(u),t!==void 0&&e.finished.finally(t);(gt&3)!==0&&xs(),xt(a),o=a.pendingLanes,(n&261930)!==0&&(o&42)!==0?a===ps?_l++:(_l=0,ps=a):(_l=0,ps=null),Ml(0)}}function Bp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,ml(a)))}function xs(){return wi!==null&&(wi.skipTransition(),wi=null),Kc(),Fc(),Jc(),Wc()}function Wc(){if(Ve!==5)return!1;var e=tt,a=Pc;Pc=0;var t=sr(gt),n=ee.T,l=ie.p;try{ie.p=32>t?32:t,ee.T=null,t=Xc,Xc=null;var o=tt,u=gt;if(Ve=0,Yn=tt=null,gt=0,(Oe&6)!==0)throw Error(d(331));var p=Oe;if(Oe|=4,Sp(o.current),Np(o,o.current,u,t),Oe=p,Ml(0,!1),_a&&typeof _a.onPostCommitFiberRoot=="function")try{_a.onPostCommitFiberRoot(Ki,o)}catch{}return!0}finally{ie.p=l,ee.T=n,Bp(e,a)}}function Hp(e,a,t){a=Ga(t,a),a=vc(e.stateNode,a,2),e=nn(e,a,2),e!==null&&(Ji(e,2),xt(e))}function _e(e,a,t){if(e.tag===3)Hp(e,e,t);else for(;a!==null;){if(a.tag===3){Hp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(mn===null||!mn.has(n))){e=Ga(t,e),t=qf(2),n=nn(a,t,2),n!==null&&(Lf(t,n,a,e),Ji(n,2),xt(n));break}}a=a.return}}function eu(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new sx;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(t)||(Yc=!0,l.add(t),e=hx.bind(null,e,a,t),a.then(e,e))}function hx(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ue===e&&(xe&t)===t&&((Pe===4||Pe===3&&(xe&62914560)===xe&&300>Ra()-ds)&&(Oe&2)===0?Ri(e,0):us|=t,Ai===xe&&(Ai=0)),xt(e)}function Ip(e,a){a===0&&(a=Ad()),e=Tn(e,a),e!==null&&(Ji(e,a),xt(e))}function vx(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Ip(e,t)}function gx(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(a),Ip(e,t)}function xx(e,a){return nr(e,a)}var Mi=null,Di=null,au=!1,bs=!1,tu=!1,pn=0;function xt(e){e!==Di&&e.next===null&&(Di===null?Mi=Di=e:Di=Di.next=e),bs=!0,au||(au=!0,yx())}function Ml(e,a){if(!tu&&bs){tu=!0;do for(var t=!1,n=Mi;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var u=n.suspendedLanes,p=n.pingedLanes;o=(1<<31-Ma(42|e)+1)-1,o&=l&~(u&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Qp(n,o))}else o=xe,o=co(n,n===Ue?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Fi(n,o)||(t=!0,Qp(n,o));n=n.next}while(t);tu=!1}}function bx(){Vp()}function Vp(){bs=au=!1;var e=0;pn!==0&&_x()&&(e=pn);for(var a=Ra(),t=null,n=Mi;n!==null;){var l=n.next,o=Gp(n,a);o===0?(n.next=null,t===null?Mi=l:t.next=l,l===null&&(Di=t)):(t=n,(e!==0||(o&3)!==0)&&(bs=!0)),n=l}Ve!==0&&Ve!==5||Ml(e),pn!==0&&(pn=0)}function Gp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var u=31-Ma(o),p=1<<u,x=l[u];x===-1?((p&t)===0||(p&n)!==0)&&(l[u]=L0(p,a)):x<=a&&(e.expiredLanes|=p),o&=~p}if(a=Ue,t=xe,t=co(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ir(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Fi(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&ir(n),sr(t)){case 2:case 8:t=Ed;break;case 32:t=lo;break;case 268435456:t=jd;break;default:t=lo}return n=Yp.bind(null,e),t=nr(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&ir(n),e.callbackPriority=2,e.callbackNode=null,2}function Yp(e,a){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(xs()&&e.callbackNode!==t)return null;var n=xe;return n=co(e,e===Ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Cp(e,n,a),Gp(e,Ra()),e.callbackNode!=null&&e.callbackNode===t?Yp.bind(null,e):null)}function Qp(e,a){if(xs())return null;Cp(e,a,!0)}function yx(){Dx(function(){(Oe&6)!==0?nr(Nd,bx):Vp()})}function nu(){if(pn===0){var e=zn;e===0&&(e=oo,oo<<=1,(oo&261888)===0&&(oo=256)),pn=e}return pn}function Pp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ho(e)}function Nx(e,a,t,n,l){if(a==="submit"&&t&&t.stateNode===l){var o=Pp((l[Ea]||null).action),u=n.submitter;u&&(a=(a=u[Ea]||null)?Pp(a.formAction):u.getAttribute("formAction"),a!==null&&(o=a,u=null));var p=new bo("action","action",null,n,l);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(pn!==0){var x=new FormData(l,u);dc(t,{pending:!0,data:x,method:l.method,action:o},null,x)}}else typeof o=="function"&&(p.preventDefault(),x=new FormData(l,u),dc(t,{pending:!0,data:x,method:l.method,action:o},o,x))},currentTarget:l}]})}}for(var iu=0;iu<Cr.length;iu++){var lu=Cr[iu],Ex=lu.toLowerCase(),jx=lu[0].toUpperCase()+lu.slice(1);Ja(Ex,"on"+jx)}Ja(gm,"onAnimationEnd"),Ja(xm,"onAnimationIteration"),Ja(bm,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(Mg,"onTransitionRun"),Ja(Dg,"onTransitionStart"),Ja(zg,"onTransitionCancel"),Ja(ym,"onTransitionEnd"),ai("onMouseEnter",["mouseout","mouseover"]),ai("onMouseLeave",["mouseout","mouseover"]),ai("onPointerEnter",["pointerout","pointerover"]),ai("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function Xp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var o=void 0;if(a)for(var u=n.length-1;0<=u;u--){var p=n[u],x=p.instance,T=p.currentTarget;if(p=p.listener,x!==o&&l.isPropagationStopped())break e;o=p,l.currentTarget=T;try{o(l)}catch(_){Eo(_)}l.currentTarget=null,o=x}else for(u=0;u<n.length;u++){if(p=n[u],x=p.instance,T=p.currentTarget,p=p.listener,x!==o&&l.isPropagationStopped())break e;o=p,l.currentTarget=T;try{o(l)}catch(_){Eo(_)}l.currentTarget=null,o=x}}}}function ge(e,a){var t=a[_d];t===void 0&&(t=a[_d]=new Set);var n=e+"__bubble";t.has(n)||($p(a,e,2,!1),t.add(n))}function ou(e,a,t){var n=0;a&&(n|=4),$p(t,e,n,a)}var ys="_reactListening"+Math.random().toString(36).slice(2);function su(e){if(!e[ys]){e[ys]=!0,zd.forEach(function(t){t!=="selectionchange"&&(Sx.has(t)||ou(t,!1,e),ou(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ys]||(a[ys]=!0,ou("selectionchange",!1,a))}}function $p(e,a,t,n){switch(Lh(a)){case 2:var l=vb;break;case 8:l=gb;break;default:l=Ou}t=l.bind(null,a,t,e),l=void 0,!hr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(a,t,{capture:!0,passive:l}):e.addEventListener(a,t,!0):l!==void 0?e.addEventListener(a,t,{passive:l}):e.addEventListener(a,t,!1)}function ru(e,a,t,n,l){var o=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var p=n.stateNode.containerInfo;if(p===l)break;if(u===4)for(u=n.return;u!==null;){var x=u.tag;if((x===3||x===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;p!==null;){if(u=Sn(p),u===null)return;if(x=u.tag,x===5||x===6||x===26||x===27){n=o=u;continue e}p=p.parentNode}}n=n.return}Xd(function(){var T=o,_=fr(t),D=[];e:{var w=Nm.get(e);if(w!==void 0){var R=bo,G=e;switch(e){case"keypress":if(go(t)===0)break e;case"keydown":case"keyup":R=rg;break;case"focusin":G="focus",R=br;break;case"focusout":G="blur",R=br;break;case"beforeblur":case"afterblur":R=br;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=fg;break;case gm:case xm:case bm:R=W0;break;case ym:R=hg;break;case"scroll":case"scrollend":R=$0;break;case"wheel":R=gg;break;case"copy":case"cut":case"paste":R=ag;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Jd;break;case"submit":R=dg;break;case"toggle":case"beforetoggle":R=bg}var Z=(a&4)!==0,fe=!Z&&(e==="scroll"||e==="scrollend"),O=Z?w!==null?w+"Capture":null:w;Z=[];for(var j=T,C;j!==null;){var M=j;if(C=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||C===null||O===null||(M=al(j,O),M!=null&&Z.push(zl(j,M,C))),fe)break;j=j.return}0<Z.length&&(w=new R(w,G,null,t,_),D.push({event:w,listeners:Z}))}}if((a&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",R&&t!==mr&&(G=t.relatedTarget||t.fromElement)&&(Sn(G)||G[Jn]))break e;(w||R)&&(G=_.window===_?_:(R=_.ownerDocument)?R.defaultView||R.parentWindow:window,w?(R=t.relatedTarget||t.toElement,w=T,R=R?Sn(R):null,R!==null&&(fe=f(R),Z=R.tag,R!==fe||Z!==5&&Z!==27&&Z!==6)&&(R=null)):(w=null,R=T),w!==R&&(Z=Kd,M="onMouseLeave",O="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Jd,M="onPointerLeave",O="onPointerEnter",j="pointer"),fe=w==null?G:el(w),C=R==null?G:el(R),G=new Z(M,j+"leave",w,t,_),G.target=fe,G.relatedTarget=C,M=null,Sn(_)===T&&(Z=new Z(O,j+"enter",R,t,_),Z.target=C,Z.relatedTarget=fe,M=Z),fe=M,Z=w&&R?J(w,R,Ax):null,w!==null&&Zp(D,G,w,Z,!1),R!==null&&fe!==null&&Zp(D,fe,R,Z,!0)))}e:{if(w=T?el(T):window,R=w.nodeName&&w.nodeName.toLowerCase(),R==="select"||R==="input"&&w.type==="file")var $=om;else if(im(w))if(sm)$=Cg;else{$=Og;var be=wg}else R=w.nodeName,!R||R.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?T&&dr(T.elementType)&&($=om):$=Tg;if($&&($=$(e,T))){lm(D,$,t,_);break e}be&&be(e,w,T)}switch(be=T?el(T):window,e){case"focusin":(im(be)||be.contentEditable==="true")&&(si=be,wr=T,cl=null);break;case"focusout":cl=wr=si=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,hm(D,t,_);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":hm(D,t,_)}var te;if(Nr)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else oi?tm(e,t)&&(ne="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(Wd&&t.locale!=="ko"&&(oi||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&oi&&(te=$d()):($t=_,vr="value"in $t?$t.value:$t.textContent,oi=!0)),be=Ns(T,ne),0<be.length&&(ne=new Fd(ne,e,null,t,_),D.push({event:ne,listeners:be}),te?ne.data=te:(te=nm(t),te!==null&&(ne.data=te)))),(te=Ng?Eg(e,t):jg(e,t))&&(ne=Ns(T,"onBeforeInput"),0<ne.length&&(be=new Fd("onBeforeInput","beforeinput",null,t,_),D.push({event:be,listeners:ne}),be.data=te)),Nx(D,e,T,t,_)}Xp(D,a)})}function zl(e,a,t){return{instance:e,listener:a,currentTarget:t}}function Ns(e,a){for(var t=a+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=al(e,t),l!=null&&n.unshift(zl(e,l,o)),l=al(e,a),l!=null&&n.push(zl(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Ax(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zp(e,a,t,n,l){for(var o=a._reactName,u=[];t!==null&&t!==n;){var p=t,x=p.alternate,T=p.stateNode;if(p=p.tag,x!==null&&x===n)break;p!==5&&p!==26&&p!==27||T===null||(x=T,l?(T=al(t,o),T!=null&&u.unshift(zl(t,T,x))):l||(T=al(t,o),T!=null&&u.push(zl(t,T,x)))),t=t.return}u.length!==0&&e.push({event:a,listeners:u})}var wx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Kp(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Ox,"")}function Fp(e,a){return a=Kp(a),Kp(e)===a}function Me(e,a,t,n,l,o){switch(t){case"children":if(typeof n=="string")a==="body"||a==="textarea"&&n===""||ni(e,n);else if(typeof n=="number"||typeof n=="bigint")a!=="body"&&ni(e,""+n);else return;break;case"className":po(e,"class",n);break;case"tabIndex":po(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":po(e,t,n);break;case"style":Qd(e,n,o);return;case"data":if(a!=="object"){po(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ho(n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(a!=="input"&&Me(e,a,"name",l.name,l,null),Me(e,a,"formEncType",l.formEncType,l,null),Me(e,a,"formMethod",l.formMethod,l,null),Me(e,a,"formTarget",l.formTarget,l,null)):(Me(e,a,"encType",l.encType,l,null),Me(e,a,"method",l.method,l,null),Me(e,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ho(n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=rt);return;case"onScroll":n!=null&&ge("scroll",e);return;case"onScrollEnd":n!=null&&ge("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(d(60));(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=ho(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ge("beforetoggle",e),ge("toggle",e),fo(e,"popover",n);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":fo(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=P0.get(t)||t,fo(e,t,n);else return}Ae=!0}function cu(e,a,t,n,l,o){switch(t){case"style":Qd(e,n,o);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(d(60));(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof n=="string")ni(e,n);else if(typeof n=="number"||typeof n=="bigint")ni(e,""+n);else return;break;case"onScroll":n!=null&&ge("scroll",e);return;case"onScrollEnd":n!=null&&ge("scrollend",e);return;case"onClick":n!=null&&(e.onclick=rt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ud.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),o=t.slice(2,l?t.length-7:void 0),a=e[Ea]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(o,a,l),typeof n=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(o,n,l);break e}Ae=!0,t in e?e[t]=n:n===!0?e.setAttribute(t,""):fo(e,t,n)}return}Ae=!0}function ma(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var n=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var u=t[o];if(u!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Me(e,a,o,u,t,null)}}l&&Me(e,a,"srcSet",t.srcSet,t,null),n&&Me(e,a,"src",t.src,t,null);return;case"input":ge("invalid",e);var p=o=u=l=null,x=null,T=null;for(n in t)if(t.hasOwnProperty(n)){var _=t[n];if(_!=null)switch(n){case"name":l=_;break;case"type":u=_;break;case"checked":x=_;break;case"defaultChecked":T=_;break;case"value":o=_;break;case"defaultValue":p=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(d(137,a));break;default:Me(e,a,n,_,t,null)}}Id(e,o,p,x,T,u,l,!1);return;case"select":ge("invalid",e),n=u=o=null;for(l in t)if(t.hasOwnProperty(l)&&(p=t[l],p!=null))switch(l){case"value":o=p;break;case"defaultValue":u=p;break;case"multiple":n=p;default:Me(e,a,l,p,t,null)}a=o,t=u,e.multiple=!!n,a!=null?ti(e,!!n,a,!1):t!=null&&ti(e,!!n,t,!0);return;case"textarea":ge("invalid",e),o=l=n=null;for(u in t)if(t.hasOwnProperty(u)&&(p=t[u],p!=null))switch(u){case"value":n=p;break;case"defaultValue":l=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(d(91));break;default:Me(e,a,u,p,t,null)}Gd(e,n,l,o);return;case"option":for(x in t)if(t.hasOwnProperty(x)&&(n=t[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Me(e,a,x,n,t,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(n=0;n<Dl.length;n++)ge(Dl[n],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(n=t[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Me(e,a,T,n,t,null)}return;default:if(dr(a)){for(_ in t)t.hasOwnProperty(_)&&(n=t[_],n!==void 0&&cu(e,a,_,n,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null&&Me(e,a,p,n,t,null))}var Tx={};function Cx(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,u=null,p=null,x=null,T=null,_=null;for(R in t){var D=t[R];if(t.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":x=D;default:n.hasOwnProperty(R)||Me(e,a,R,null,n,D)}}for(var w in n){var R=n[w];if(D=t[w],n.hasOwnProperty(w)&&(R!=null||D!=null))switch(w){case"type":R!==D&&(Ae=!0),o=R;break;case"name":R!==D&&(Ae=!0),l=R;break;case"checked":R!==D&&(Ae=!0),T=R;break;case"defaultChecked":R!==D&&(Ae=!0),_=R;break;case"value":R!==D&&(Ae=!0),u=R;break;case"defaultValue":R!==D&&(Ae=!0),p=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,a));break;default:R!==D&&Me(e,a,w,R,n,D)}}cr(e,u,p,x,T,_,o,l);return;case"select":R=u=p=w=null;for(o in t)if(x=t[o],t.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":R=x;default:n.hasOwnProperty(o)||Me(e,a,o,null,n,x)}for(l in n)if(o=n[l],x=t[l],n.hasOwnProperty(l)&&(o!=null||x!=null))switch(l){case"value":o!==x&&(Ae=!0),w=o;break;case"defaultValue":o!==x&&(Ae=!0),p=o;break;case"multiple":o!==x&&(Ae=!0),u=o;default:o!==x&&Me(e,a,l,o,n,x)}a=p,t=u,n=R,w!=null?ti(e,!!t,w,!1):!!n!=!!t&&(a!=null?ti(e,!!t,a,!0):ti(e,!!t,t?[]:"",!1));return;case"textarea":R=w=null;for(p in t)if(l=t[p],t.hasOwnProperty(p)&&l!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Me(e,a,p,null,n,l)}for(u in n)if(l=n[u],o=t[u],n.hasOwnProperty(u)&&(l!=null||o!=null))switch(u){case"value":l!==o&&(Ae=!0),w=l;break;case"defaultValue":l!==o&&(Ae=!0),R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==o&&Me(e,a,u,l,n,o)}Vd(e,w,R);return;case"option":for(var G in t)if(w=t[G],t.hasOwnProperty(G)&&w!=null&&!n.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:Me(e,a,G,null,n,w)}for(x in n)if(w=n[x],R=t[x],n.hasOwnProperty(x)&&w!==R&&(w!=null||R!=null))switch(x){case"selected":w!==R&&(Ae=!0),e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Me(e,a,x,w,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in t)w=t[Z],t.hasOwnProperty(Z)&&w!=null&&!n.hasOwnProperty(Z)&&Me(e,a,Z,null,n,w);for(T in n)if(w=n[T],R=t[T],n.hasOwnProperty(T)&&w!==R&&(w!=null||R!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,a));break;default:Me(e,a,T,w,n,R)}return;default:if(dr(a)){for(var fe in t)w=t[fe],t.hasOwnProperty(fe)&&w!==void 0&&!n.hasOwnProperty(fe)&&cu(e,a,fe,void 0,n,w);for(_ in n)w=n[_],R=t[_],!n.hasOwnProperty(_)||w===R||w===void 0&&R===void 0||cu(e,a,_,w,n,R);return}}for(var O in t)w=t[O],t.hasOwnProperty(O)&&w!=null&&!n.hasOwnProperty(O)&&Me(e,a,O,null,n,w);for(D in n)w=n[D],R=t[D],!n.hasOwnProperty(D)||w===R||w==null&&R==null||Me(e,a,D,w,n,R)}function Jp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var l=t[n],o=l.transferSize,u=l.initiatorType,p=l.duration;if(o&&p&&Jp(u)){for(u=0,p=l.responseEnd,n+=1;n<t.length;n++){var x=t[n],T=x.startTime;if(T>p)break;var _=x.transferSize,D=x.initiatorType;_&&Jp(D)&&(x=x.responseEnd,u+=_*(x<p?1:(p-T)/(x-T)))}if(--n,a+=8*(o+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uu=null,du=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function Wp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eh(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function ah(e,a,t,n){return t=Ul(t).createElement(e),t[sa]=n,t[Ea]=a,ma(t,e,a),aa(t),t}function mu(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var fu=null;function _x(){var e=window.event;return e&&e.type==="popstate"?e===fu?!1:(fu=e,!0):(fu=null,!1)}var pu=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,nh=typeof requestAnimationFrame=="function"?requestAnimationFrame:pu,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(e){return th.resolve(null).then(e).catch(zx)}:pu;function zx(e){setTimeout(function(){throw e})}function hn(e){return e==="head"}function ih(e,a){var t=a,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(l),Hi(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Eu(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Eu(t);for(var o=t.firstChild;o;){var u=o.nextSibling,p=o.nodeName;o[Wi]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=u}}else t==="body"&&Eu(e.ownerDocument.body);t=l}while(t);Hi(a)}function lh(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function oh(e,a,t){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(a=e.getClientRects(),a.length===1)var n=1;else for(var l=n=0;l<a.length;l++){var o=a[l];0<o.width&&0<o.height&&n++}n===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function sh(e,a){e=e.style,a=a.style;var t=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(t=a.display,e.display=t==null||typeof t=="boolean"?"":t,t=a.margin,t!=null?e.margin=t:(t=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function Ux(e,a,t){return t=t.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function hu(e){var a=e.getBoundingClientRect(),t=getComputedStyle(e);return Ux(a,t,e)}function qx(e){return e.documentElement.clientHeight}function Lx(e){this.addEventListener("load",e),this.addEventListener("error",e)}function kx(e,a,t,n,l,o,u,p,x){var T=a.nodeType===9?a:a.ownerDocument;try{var _=T.startViewTransition({update:function(){var w=T.defaultView,R=w.navigation&&w.navigation.transition,G=T.fonts.status;n();var Z=[];if(G==="loaded"&&(qx(T),T.fonts.status==="loading"&&Z.push(T.fonts.ready)),G=Z.length,e!==null)for(var fe=e.suspenseyImages,O=0,j=0;j<fe.length;j++){var C=fe[j];if(!C.complete){var M=C.getBoundingClientRect();if(0<M.bottom&&0<M.right&&M.top<w.innerHeight&&M.left<w.innerWidth){if(O+=Th(C),O>Ss){Z.length=G;break}C=new Promise(Lx.bind(C)),Z.push(C)}}}if(0<Z.length)return w=Promise.race([Promise.all(Z),new Promise(function($){return setTimeout($,500)})]).then(l,l),(R?Promise.allSettled([R.finished,w]):w).then(o,o);if(l(),R)return R.finished.then(o,o);o()},types:t});T.__reactViewTransition=_;var D=[];return _.ready.then(function(){for(var w=T.documentElement.getAnimations({subtree:!0}),R=0;R<w.length;R++){var G=w[R],Z=G.effect,fe=Z.pseudoElement;if(fe!=null&&fe.startsWith("::view-transition")){D.push(G),G=Z.getKeyframes();for(var O=fe=void 0,j=!0,C=0;C<G.length;C++){var M=G[C],$=M.width;if(fe===void 0)fe=$;else if(fe!==$){j=!1;break}if($=M.height,O===void 0)O=$;else if(O!==$){j=!1;break}delete M.width,delete M.height,M.transform==="none"&&delete M.transform}j&&fe!==void 0&&O!==void 0&&(Z.setKeyframes(G),j=getComputedStyle(Z.target,Z.pseudoElement),j.width!==fe||j.height!==O)&&(j=G[0],j.width=fe,j.height=O,j=G[G.length-1],j.width=fe,j.height=O,Z.setKeyframes(G))}}u()},function(w){T.__reactViewTransition===_&&(T.__reactViewTransition=null);try{if(typeof w=="object"&&w!==null)switch(w.name){case"InvalidStateError":(w.message==="View transition was skipped because document visibility state is hidden."||w.message==="Skipping view transition because document visibility state has become hidden."||w.message==="Skipping view transition because viewport size changed."||w.message==="Transition was aborted because of invalid state")&&(w=null)}w!==null&&x(w)}finally{n(),l(),u()}}),_.finished.finally(function(){for(var w=0;w<D.length;w++)D[w].cancel();T.__reactViewTransition===_&&(T.__reactViewTransition=null),p()}),_}catch{return n(),l(),u(),null}}function Qn(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}Qn.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:Q({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},Qn.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,t=e.getAnimations({subtree:!0}),n=[],l=0;l<t.length;l++){var o=t[l].effect;o!==null&&o.target===e&&o.pseudoElement===a&&n.push(t[l])}return n},Qn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function rh(e){return{name:e,group:new Qn("group",e),imagePair:new Qn("image-pair",e),old:new Qn("old",e),new:new Qn("new",e)}}function Ha(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ha.prototype.addEventListener=function(e,a,t){var n=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(n=t.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(uh(o,e,a,t)===-1){var u=this,p=a;t!=null&&typeof t!="boolean"&&t.once===!0&&(p=function(x){u.removeEventListener(e,a,t),typeof a=="function"?a.call(this,x):a.handleEvent(x)}),n!==null&&(l=u.removeEventListener.bind(u,e,a,t),n.addEventListener("abort",l,{once:!0}),l=n.removeEventListener.bind(n,"abort",l)),n=zi(t),o.push({type:e,listener:a,optionsOrUseCapture:t,attachedListener:p,cleanup:l}),h(this._fragmentFiber.child,!1,Bx,e,p,n)}this._eventListeners=o}};function Bx(e,a,t,n){return B(e).addEventListener(a,t,n),!1}Ha.prototype.removeEventListener=function(e,a,t){var n=this._eventListeners;if(n!==null&&(a=uh(n,e,a,t),a!==-1)){var l=n[a];t=l.attachedListener;var o=l.cleanup;l=zi(l.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Hx,e,t,l),n.splice(a,1),o!==null&&o()}};function Hx(e,a,t,n){return B(e).removeEventListener(a,t,n),!1}function zi(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function ch(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function uh(e,a,t,n){if(e.length===0)return-1;n=ch(n);for(var l=0;l<e.length;l++){var o=e[l];if(o.type===a&&o.listener===t&&ch(o.optionsOrUseCapture)===n)return l}return-1}Ha.prototype.dispatchEvent=function(e){var a=N(this._fragmentFiber);if(a===null)return!0;a=B(a);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var n=a.nodeType===9?a.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var o=t[l];n.addEventListener(o.type,o.attachedListener,zi(o.optionsOrUseCapture))}if(a.appendChild(n),e=n.dispatchEvent(e),t)for(l=0;l<t.length;l++)o=t[l],n.removeEventListener(o.type,o.attachedListener,zi(o.optionsOrUseCapture));return a.removeChild(n),e}return a.dispatchEvent(e)},Ha.prototype.focus=function(e){h(this._fragmentFiber.child,!0,dh,e,void 0,void 0)};function dh(e,a){return e.tag===6?!1:(e=B(e),Jx(e,a))}Ha.prototype.focusLast=function(e){var a=[];h(this._fragmentFiber.child,!0,vu,a,void 0,void 0);for(var t=a.length-1;0<=t&&!dh(a[t],e);t--);};function vu(e,a){return a.push(e),!1}Ha.prototype.blur=function(){var e=N(this._fragmentFiber);e!==null&&(e=B(e),e=Ul(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Ix,e,void 0,void 0))};function Ix(e,a){return e.tag===6?!1:(e=B(e),e===a||e.contains(a)?(a.blur(),!0):!1)}Ha.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Vx,e,void 0,void 0)};function Vx(e,a){return e.tag===6||(e=B(e),a.observe(e)),!1}Ha.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),h(this._fragmentFiber.child,!1,Gx,e,void 0,void 0);for(var t=a=0;t<nt.length;t++){var n=nt[t];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):nt[a++]=n}nt.length=a}};function Gx(e,a){return e.tag===6||(e=B(e),a.unobserve(e)),!1}var nt=[],gu=!1;function Yx(e,a,t){nt.push({fragmentInstance:e,observer:a,instance:t}),gu||(gu=!0,Wx(function(){gu=!1;var n=nt;nt=[];for(var l=0;l<n.length;l++){var o=n[l];o.observer.unobserve(o.instance)}}))}Ha.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Qx,e,void 0,void 0),e};function Qx(e,a){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),a.push.apply(a,t.getClientRects())}else e=B(e),a.push.apply(a,e.getClientRects());return!1}Ha.prototype.getRootNode=function(e){var a=N(this._fragmentFiber);return a===null?this:B(a).getRootNode(e)},Ha.prototype.compareDocumentPosition=function(e){var a=N(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];h(this._fragmentFiber.child,!1,vu,t,void 0,void 0);var n=B(a);if(t.length===0){if(t=n,U(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(t=a)}a=this._fragmentFiber;var l=n=t.compareDocumentPosition(e);return t===e?l=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=I(a)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=B(t).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=B(t[0]),l=B(t[t.length-1]);var o=U(this._fragmentFiber)?a.parentElement:n;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=o.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=a.compareDocumentPosition(e),p=l.compareDocumentPosition(e),x=u&Node.DOCUMENT_POSITION_CONTAINED_BY||p&Node.DOCUMENT_POSITION_CONTAINED_BY;return p=n&&o&&u&Node.DOCUMENT_POSITION_FOLLOWING&&p&Node.DOCUMENT_POSITION_PRECEDING,a=n&&a===e||o&&l===e||x||p?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&a===e||!o&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Px(a,this._fragmentFiber,t[0],t[t.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Px(e,a,t,n,l){var o=Sn(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===a||o.alternate===a)){t=!0;break e}o=o.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=l.ownerDocument,l===o||l===o.documentElement||l===o.body;e:{for(o=a,a=N(a);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==a&&o.alternate!==a)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!o)&&!(a=o===t)&&(a=J(t,o,ue),a===null?a=!1:(h(a,!0,H,o,t),o=q,q=null,a=o!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!o)&&!(a=o===n)&&(a=J(n,o,ue),a===null?a=!1:(h(a,!0,oe,o,n),o=q,Y=q=null,a=o!==null)),a):!1}function mh(e,a){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ha.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(d(566));var a=[];h(this._fragmentFiber.child,!1,vu,a,void 0,void 0);var t=e!==!1;if(a.length===0){var n=I(this._fragmentFiber);if(n=t?n[1]||n[0]||N(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=B(n),mh(e,t);return}if(n=B(n),n.nodeType!==9){if(n.nodeType===11){t="host"in n?n.host:null,t!==null&&t.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=t?a.length-1:0;n!==(t?-1:a.length);){var l=a[n];l.tag===6?(l=B(l),mh(l,t)):B(l).scrollIntoView(e),n+=t?-1:1}};function Xx(e,a){return e=B(e),fh(e,a),!1}function fh(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function ph(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];e.addEventListener(l.type,l.attachedListener,zi(l.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(o){for(var u=0,p=0;p<nt.length;p++){var x=nt[p];(x.fragmentInstance!==a||x.observer!==o||x.instance!==e)&&(nt[u++]=x)}nt.length=u,o.observe(e)}),fh(e,a))}function $x(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];e.removeEventListener(l.type,l.attachedListener,zi(l.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(o){typeof o.rootMargin=="string"?Yx(a,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function xu(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":xu(t),mo(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Zx(e,a,t,n){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Wi])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=$a(e.nextSibling),e===null)break}return null}function Kx(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$a(e.nextSibling),e===null))return null;return e}function hh(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$a(e.nextSibling),e===null))return null;return e}function bu(e){return e.data==="$?"||e.data==="$~"}function yu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fx(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function $a(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Nu=null;function vh(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return $a(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function gh(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Jx(e,a){function t(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return n}function Wx(e){nh(function(){nh(function(a){return e(a)})})}function xh(e,a,t){switch(a=Ul(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function bh(e,a,t){for(var n in t){var l=t[n];t.hasOwnProperty(n)&&l!=null&&Me(e,a,n,null,Tx,l)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===rt&&(e.onclick=null),mo(e)}function Eu(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);mo(e)}var Za=new Map,yh=new Set;function ql(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var Bt=ie.d;ie.d={f:eb,r:ab,D:tb,C:nb,L:ib,m:lb,X:sb,S:ob,M:rb};function eb(){var e=Bt.f(),a=hs();return e||a}function ab(e){var a=Wn(e);a!==null&&a.tag===5&&a.type==="form"?Ef(a):Bt.r(e)}var Ui=typeof document>"u"?null:document;function Nh(e,a,t){var n=Ui;if(n&&typeof a=="string"&&a){var l=Ia(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),yh.has(l)||(yh.add(l),e={rel:e,crossOrigin:t,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),ma(a,"link",e),aa(a),n.head.appendChild(a)))}}function tb(e){Bt.D(e),Nh("dns-prefetch",e,null)}function nb(e,a){Bt.C(e,a),Nh("preconnect",e,a)}function ib(e,a,t){Bt.L(e,a,t);var n=Ui;if(n&&e&&a){var l='link[rel="preload"][as="'+Ia(a)+'"]';a==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Ia(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Ia(t.imageSizes)+'"]')):l+='[href="'+Ia(e)+'"]';var o=l;switch(a){case"style":o=qi(e);break;case"script":o=Li(e)}if(!(Za.has(o)||(e=Q({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Za.set(o,e),n.querySelector(l)!==null||a==="style"&&n.querySelector(Ll(o))||a==="script"&&n.querySelector(kl(o))))){var u=n.createElement("link");ma(u,"link",e),a==="style"&&(u[uo]=!0,u.onload=u.onerror=function(){Dd(u)}),aa(u),n.head.appendChild(u)}}}function lb(e,a){Bt.m(e,a);var t=Ui;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+Ia(n)+'"][href="'+Ia(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Li(e)}if(!Za.has(o)&&(e=Q({rel:"modulepreload",href:e},a),Za.set(o,e),t.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(kl(o)))return}n=t.createElement("link"),ma(n,"link",e),aa(n),t.head.appendChild(n)}}}function ob(e,a,t){Bt.S(e,a,t);var n=Ui;if(n&&e){var l=ei(n).hoistableStyles,o=qi(e);a=a||"default";var u=l.get(o);if(!u){var p={loading:0,preload:null};if(u=n.querySelector(Ll(o)))p.loading=5;else{e=Q({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Za.get(o))&&ju(e,t);var x=u=n.createElement("link");aa(x),ma(x,"link",e),x._p=new Promise(function(T,_){x.onload=T,x.onerror=_}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Es(u,a,n)}u={type:"stylesheet",instance:u,count:1,state:p},l.set(o,u)}}}function sb(e,a){Bt.X(e,a);var t=Ui;if(t&&e){var n=ei(t).hoistableScripts,l=Li(e),o=n.get(l);o||(o=t.querySelector(kl(l)),o||(e=Q({src:e,async:!0},a),(a=Za.get(l))&&Su(e,a),o=t.createElement("script"),aa(o),ma(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function rb(e,a){Bt.M(e,a);var t=Ui;if(t&&e){var n=ei(t).hoistableScripts,l=Li(e),o=n.get(l);o||(o=t.querySelector(kl(l)),o||(e=Q({src:e,async:!0,type:"module"},a),(a=Za.get(l))&&Su(e,a),o=t.createElement("script"),aa(o),ma(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Eh(e,a,t,n){var l=(l=Qt.current)?ql(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=qi(t.href),a=ei(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=qi(t.href);var o=ei(l).hoistableStyles,u=o.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,u),(o=l.querySelector(Ll(e)))?o._p||(u.instance=o,u.state.loading=5):(o=Za.get(e),o||(o={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Za.set(e,o)),cb(l,e,o,u.state))),a&&n===null)throw Error(d(528,""));return u}if(a&&n!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(t=Li(t),a=ei(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function qi(e){return'href="'+Ia(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return Q({},e,{"data-precedence":e.precedence,precedence:null})}function cb(e,a,t,n){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[uo]!==!0){n.loading=1;return}}else a=e.createElement("link"),a[uo]=!0,a.onload=a.onerror=Dd.bind(null,a),ma(a,"link",t),aa(a),e.head.appendChild(a);n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2})}function Li(e){return'[src="'+Ia(e)+'"]'}function kl(e){return"script[async]"+e}function Sh(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ia(t.href)+'"]');if(n)return a.instance=n,aa(n),n;var l=Q({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),aa(n),ma(n,"style",l),Es(n,t.precedence,e),a.instance=n;case"stylesheet":l=qi(t.href);var o=e.querySelector(Ll(l));if(o)return a.state.loading|=4,a.instance=o,aa(o),o;n=jh(t),(l=Za.get(l))&&ju(n,l),o=(e.ownerDocument||e).createElement("link"),aa(o);var u=o;return u._p=new Promise(function(p,x){u.onload=p,u.onerror=x}),ma(o,"link",n),a.state.loading|=4,Es(o,t.precedence,e),a.instance=o;case"script":return o=Li(t.src),(l=e.querySelector(kl(o)))?(a.instance=l,aa(l),l):(n=t,(l=Za.get(o))&&(n=Q({},t),Su(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),aa(l),ma(l,"link",n),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Es(n,t.precedence,e));return a.instance}function Es(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,u=0;u<n.length;u++){var p=n[u];if(p.dataset.precedence===a)o=p;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ju(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Su(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var js=null;function Ah(e,a,t){if(js===null){var n=new Map,l=js=new Map;l.set(t,n)}else l=js,n=l.get(t),n||(n=new Map,l.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Wi]||o[sa]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var u=o.getAttribute(a)||"";u=e+u;var p=n.get(u);p?p.push(o):n.set(u,[o])}}return n}function Au(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function ub(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function wh(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function Oh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Th(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ch(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=Th(a),e.suspenseyImages.push(a)),e=fb.bind(e),a.decode().then(e,e))}function db(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=qi(n.href),o=a.querySelector(Ll(l));if(o){a=o._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Bl.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=o,aa(o);return}o=a.ownerDocument||a,n=jh(n),(l=Za.get(l))&&ju(n,l),o=o.createElement("link"),aa(o);var u=o;u._p=new Promise(function(p,x){u.onload=p,u.onerror=x}),ma(o,"link",n),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Bl.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Ss=0;function mb(e,a){return e.stylesheets&&e.count===0&&ws(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&ws(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+a);0<e.imgBytes&&Ss===0&&(Ss=62500*Rx());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ws(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Ss?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Rh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ws(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function Bl(){this.count--,Rh(this)}function fb(){this.imgCount--,Rh(this)}var As=null;function ws(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,As=new Map,a.forEach(pb,e),As=null,Bl.call(e))}function pb(e,a){if(!(a.state.loading&4)){var t=As.get(e);if(t)var n=t.get(null);else{t=new Map,As.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var u=l[o];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),n=u)}n&&t.set(null,n)}l=a.instance,u=l.getAttribute("data-precedence"),o=t.get(u)||n,o===n&&t.set(null,l),t.set(u,l),this.count++,n=Bl.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var ki={$$typeof:re,Provider:null,Consumer:null,_currentValue:St,_currentValue2:St,_threadCount:0};function hb(e,a,t,n,l,o,u,p,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lr(0),this.hiddenUpdates=lr(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.transitionTypes=null,this.incompleteTransitions=new Map}function _h(e,a,t,n,l,o,u,p,x,T,_,D){return e=new hb(e,a,t,u,x,T,_,D,p),a=1,o===!0&&(a|=24),o=ja(3,null,null,a),e.current=o,o.stateNode=e,a=Hr(),a.refCount++,e.pooledCache=a,a.refCount++,o.memoizedState={element:n,isDehydrated:t,cache:a},Yr(o),e}function Mh(e){return e?(e=ui,e):ui}function Dh(e,a,t,n,l,o){l=Mh(l),n.context===null?n.context=l:n.pendingContext=l,n=tn(a),n.payload={element:t},o=o===void 0?null:o,o!==null&&(n.callback=o),t=nn(e,n,a),t!==null&&(Oa(t,e,a),vl(t,e,a))}function zh(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function wu(e,a){zh(e,a),(e=e.alternate)&&zh(e,a)}function Uh(e){if(e.tag===13||e.tag===31){var a=Tn(e,67108864);a!==null&&Oa(a,e,67108864),wu(e,67108864)}}function qh(e){if(e.tag===13||e.tag===31){var a=Ba();a=or(a);var t=Tn(e,a);t!==null&&Oa(t,e,a),wu(e,a)}}var Bi=!0;function vb(e,a,t,n){var l=ee.T;ee.T=null;var o=ie.p;try{ie.p=2,Ou(e,a,t,n)}finally{ie.p=o,ee.T=l}}function gb(e,a,t,n){var l=ee.T;ee.T=null;var o=ie.p;try{ie.p=8,Ou(e,a,t,n)}finally{ie.p=o,ee.T=l}}function Ou(e,a,t,n){if(Bi){var l=Tu(n);if(l===null)ru(e,a,n,Os,t),kh(e,n);else if(bb(l,e,a,t,n))n.stopPropagation();else if(kh(e,n),a&4&&-1<xb.indexOf(e)){for(;l!==null;){var o=Wn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var u=jn(o.pendingLanes);if(u!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;u;){var x=1<<31-Ma(u);p.entanglements[1]|=x,u&=~x}xt(o),(Oe&6)===0&&(ms=Ra()+500,Ml(0))}}break;case 31:case 13:p=Tn(o,2),p!==null&&Oa(p,o,2),hs(),wu(o,2)}if(o=Tu(n),o===null&&ru(e,a,n,Os,t),o===l)break;l=o}l!==null&&n.stopPropagation()}else ru(e,a,n,null,t)}}function Tu(e){return e=fr(e),Cu(e)}var Os=null;function Cu(e){if(Os=null,e=Sn(e),e!==null){var a=f(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=g(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Os=e,null}function Lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(R0()){case Nd:return 2;case Ed:return 8;case lo:case _0:return 32;case jd:return 268435456;default:return 32}default:return 32}}var Ru=!1,vn=null,gn=null,xn=null,Hl=new Map,Il=new Map,bn=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kh(e,a){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Hl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(a.pointerId)}}function Vl(e,a,t,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},a!==null&&(a=Wn(a),a!==null&&Uh(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function bb(e,a,t,n,l){switch(a){case"focusin":return vn=Vl(vn,e,a,t,n,l),!0;case"dragenter":return gn=Vl(gn,e,a,t,n,l),!0;case"mouseover":return xn=Vl(xn,e,a,t,n,l),!0;case"pointerover":var o=l.pointerId;return Hl.set(o,Vl(Hl.get(o)||null,e,a,t,n,l)),!0;case"gotpointercapture":return o=l.pointerId,Il.set(o,Vl(Il.get(o)||null,e,a,t,n,l)),!0}return!1}function Bh(e){var a=Sn(e.target);if(a!==null){var t=f(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,Rd(e.priority,function(){qh(t)});return}}else if(a===31){if(a=g(t),a!==null){e.blockedOn=a,Rd(e.priority,function(){qh(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Tu(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);mr=n,t.target.dispatchEvent(n),mr=null}else return a=Wn(t),a!==null&&Uh(a),e.blockedOn=t,!1;a.shift()}return!0}function Hh(e,a,t){Ts(e)&&t.delete(a)}function yb(){Ru=!1,vn!==null&&Ts(vn)&&(vn=null),gn!==null&&Ts(gn)&&(gn=null),xn!==null&&Ts(xn)&&(xn=null),Hl.forEach(Hh),Il.forEach(Hh)}function Cs(e,a){e.blockedOn===a&&(e.blockedOn=null,Ru||(Ru=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yb)))}var Rs=null;function Ih(e){Rs!==e&&(Rs=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Rs===e&&(Rs=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],l=e[a+2];if(typeof n!="function"){if(Cu(n||t)===null)continue;break}var o=Wn(t);o!==null&&(e.splice(a,3),a-=3,dc(o,{pending:!0,data:l,method:t.method,action:n},n,l))}}))}function Hi(e){function a(x){return Cs(x,e)}vn!==null&&Cs(vn,e),gn!==null&&Cs(gn,e),xn!==null&&Cs(xn,e),Hl.forEach(a),Il.forEach(a);for(var t=0;t<bn.length;t++){var n=bn[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<bn.length&&(t=bn[0],t.blockedOn===null);)Bh(t),t.blockedOn===null&&bn.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var l=t[n],o=t[n+1],u=l[Ea]||null;if(typeof o=="function")u||Ih(t);else if(u){var p=null;if(o&&o.hasAttribute("formAction")){if(l=o,u=o[Ea]||null)p=u.formAction;else if(Cu(l)!==null)continue}else p=u.action;typeof p=="function"?t[n+1]=p:(t.splice(n,3),n-=3),Ih(t)}}}function Vh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function _u(e){this._internalRoot=e}_s.prototype.render=_u.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,n=Ba();Dh(t,n,e,a,null,null)},_s.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Dh(e.current,2,null,e,null,null),hs(),a[Jn]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var a=Cd();e={blockedOn:null,target:e,priority:a};for(var t=0;t<bn.length&&a!==0&&a<bn[t].priority;t++);bn.splice(t,0,e),t===0&&Bh(e)}};var Gh=r.version;if(Gh!=="19.3.0")throw Error(d(527,Gh,"19.3.0"));ie.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=A(a),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Nb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ee,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ms.isDisabled&&Ms.supportsFiber)try{Ki=Ms.inject(Nb),_a=Ms}catch{}}return Yl.createRoot=function(e,a){if(!m(e))throw Error(d(299));var t=!1,n="",l=Mf,o=Df,u=zf;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=_h(e,1,!1,null,null,t,n,null,l,o,u,Vh),e[Jn]=a.current,su(e),new _u(a)},Yl.hydrateRoot=function(e,a,t){if(!m(e))throw Error(d(299));var n=!1,l="",o=Mf,u=Df,p=zf,x=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.formState!==void 0&&(x=t.formState)),a=_h(e,1,!0,a,t??null,n,l,x,o,u,p,Vh),a.context=Mh(null),t=a.current,n=Ba(),n=or(n),l=tn(n),l.callback=null,nn(t,l,n),t=n,a.current.lanes=t,Ji(a,t),xt(a),e[Jn]=a.current,su(e),new _s(a)},Yl.version="19.3.0",Yl}var Wh;function _b(){if(Wh)return zu.exports;Wh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),zu.exports=Rb(),zu.exports}var Mb=_b();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ad=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ov=/^[\\/]{2}/;function Db(s,r){return r+s.replace(/\\/g,"/")}var ev="popstate";function av(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function zb(s={}){function r(d,m){var A;let f=(A=m.state)==null?void 0:A.masked,{pathname:v,search:g,hash:y}=f||d.location;return Pu("",{pathname:v,search:g,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default",f?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function c(d,m){return typeof m=="string"?m:Vi(m)}return qb(r,c,null,s)}function Ye(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function Et(s,r){if(!s){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ub(){return Math.random().toString(36).substring(2,10)}function tv(s,r){return{usr:s.state,key:s.key,idx:r,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Pu(s,r,c=null,d,m){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof r=="string"?Qi(r):r,state:c,key:r&&r.key||d||Ub(),mask:m}}function Vi({pathname:s="/",search:r="",hash:c=""}){return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(s+=c.charAt(0)==="#"?c:"#"+c),s}function Qi(s){let r={};if(s){let c=s.indexOf("#");c>=0&&(r.hash=s.substring(c),s=s.substring(0,c));let d=s.indexOf("?");d>=0&&(r.search=s.substring(d),s=s.substring(0,d)),s&&(r.pathname=s)}return r}function qb(s,r,c,d={}){let{window:m=document.defaultView,v5Compat:f=!1}=d,v=m.history,g="POP",y=null,A=E();A==null&&(A=0,v.replaceState({...v.state,idx:A},""));function E(){return(v.state||{idx:null}).idx}function h(){g="POP";let B=E(),q=B==null?null:B-A;A=B,y&&y({action:g,location:k.location,delta:q})}function N(B,q){g="PUSH";let Y=av(B)?B:Pu(k.location,B,q);A=E()+1;let H=tv(Y,A),oe=k.createHref(Y.mask||Y);try{v.pushState(H,"",oe)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;m.location.assign(oe)}f&&y&&y({action:g,location:k.location,delta:1})}function U(B,q){g="REPLACE";let Y=av(B)?B:Pu(k.location,B,q);A=E();let H=tv(Y,A),oe=k.createHref(Y.mask||Y);v.replaceState(H,"",oe),f&&y&&y({action:g,location:k.location,delta:0})}function I(B){return Lb(m,B)}let k={get action(){return g},get location(){return s(m,v)},listen(B){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(ev,h),y=B,()=>{m.removeEventListener(ev,h),y=null}},createHref(B){return r(m,B)},createURL:I,encodeLocation(B){let q=I(B);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:N,replace:U,go(B){return v.go(B)}};return k}function Lb(s,r,c=!1){let d="http://localhost";s&&(d=s.location.origin!=="null"?s.location.origin:s.location.href),Ye(d,"No window.location.(origin|href) available to create URL");let m=typeof r=="string"?r:Vi(r);return m=m.replace(/ $/,"%20"),!c&&Ov.test(m)&&(m=d+m),new URL(m,d)}function Tv(s,r,c="/"){return kb(s,r,c,!1)}function kb(s,r,c,d,m){let f=typeof r=="string"?Qi(r):r,v=It(f.pathname||"/",c);if(v==null)return null;let g=Bb(s),y=null,A=Kb(v);for(let E=0;y==null&&E<g.length;++E)y=Zb(g[E],A,d);return y}function Bb(s){let r=Cv(s);return Hb(r),r}function Cv(s,r=[],c=[],d="",m=!1){let f=(v,g,y=m,A)=>{let E={relativePath:A===void 0?v.path||"":A,caseSensitive:v.caseSensitive===!0,childrenIndex:g,route:v};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(d)&&y)return;Ye(E.relativePath.startsWith(d),`Absolute route path "${E.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(d.length)}let h=lt([d,E.relativePath]),N=c.concat(E);v.children&&v.children.length>0&&(Ye(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Cv(v.children,r,N,h,y)),!(v.path==null&&!v.index)&&r.push({path:h,score:Xb(h,v.index),routesMeta:N.map((U,I)=>{let[k,B]=Mv(U.relativePath,U.caseSensitive,I===N.length-1);return{...U,matcher:k,compiledParams:B}})})};return s.forEach((v,g)=>{var y;if(v.path===""||!((y=v.path)!=null&&y.includes("?")))f(v,g);else for(let A of Rv(v.path))f(v,g,!0,A)}),r}function Rv(s){let r=s.split("/");if(r.length===0)return[];let[c,...d]=r,m=c.endsWith("?"),f=c.replace(/\?$/,"");if(d.length===0)return m?[f,""]:[f];let v=Rv(d.join("/")),g=[];return g.push(...v.map(y=>y===""?f:[f,y].join("/"))),m&&g.push(...v),g.map(y=>s.startsWith("/")&&y===""?"/":y)}function Hb(s){s.sort((r,c)=>r.score!==c.score?c.score-r.score:$b(r.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}var Ib=/^:[\w-]+$/,Vb=3,Gb=2,Yb=1,Qb=10,Pb=-2,nv=s=>s==="*";function Xb(s,r){let c=s.split("/"),d=c.length;return c.some(nv)&&(d+=Pb),r&&(d+=Gb),c.filter(m=>!nv(m)).reduce((m,f)=>m+(Ib.test(f)?Vb:f===""?Yb:Qb),d)}function $b(s,r){return s.length===r.length&&s.slice(0,-1).every((d,m)=>d===r[m])?s[s.length-1]-r[r.length-1]:0}function Zb(s,r,c=!1){let{routesMeta:d}=s,m={},f="/",v=[];for(let g=0;g<d.length;++g){let y=d[g],A=g===d.length-1,E=f==="/"?r:r.slice(f.length)||"/",h={path:y.relativePath,caseSensitive:y.caseSensitive,end:A},N=y.matcher&&y.compiledParams?_v(h,E,y.matcher,y.compiledParams):ks(h,E),U=y.route;if(!N&&A&&c&&!d[d.length-1].route.index&&(N=ks({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!N)return null;Object.assign(m,N.params),v.push({params:m,pathname:lt([f,N.pathname]),pathnameBase:Wb(lt([f,N.pathnameBase])),route:U}),N.pathnameBase!=="/"&&(f=lt([f,N.pathnameBase]))}return v}function ks(s,r){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[c,d]=Mv(s.path,s.caseSensitive,s.end);return _v(s,r,c,d)}function _v(s,r,c,d){let m=r.match(c);if(!m)return null;let f=m[0],v=Gi(f,1),g=m.slice(1);return{params:d.reduce((A,{paramName:E,isOptional:h},N)=>{if(E==="*"){let I=g[N]||"";v=Gi(f.slice(0,f.length-I.length),1)}const U=g[N];return h&&!U?A[E]=void 0:A[E]=(U||"").replace(/%2F/g,"/"),A},{}),pathname:f,pathnameBase:v,pattern:s}}function Mv(s,r=!1,c=!0){Et(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,g,y,A,E)=>{if(d.push({paramName:g,isOptional:y!=null}),y){let h=E.charAt(A+v.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,r?void 0:"i"),d]}function Kb(s){try{return s.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Et(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),s}}function It(s,r){if(r==="/")return s;if(!s.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,d=s.charAt(c);return d&&d!=="/"?null:s.slice(c)||"/"}function Fb(s,r="/"){let{pathname:c,search:d="",hash:m=""}=typeof s=="string"?Qi(s):s,f;return c?(c=zv(c),c.startsWith("/")||c.startsWith("\\")?f=iv(c.substring(1),"/"):f=iv(c,r)):f=r,{pathname:f,search:e1(d),hash:a1(m)}}function iv(s,r){let c=Gi(r).split("/");return s.split("/").forEach(m=>{m===".."?c.length>1&&c.pop():m!=="."&&c.push(m)}),c.length>1?c.join("/"):"/"}function ku(s,r,c,d){return`Cannot include a '${s}' character in a manually specified \`to.${r}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jb(s){return s.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function Dv(s){let r=Jb(s);return r.map((c,d)=>d===r.length-1?c.pathname:c.pathnameBase)}function td(s,r,c,d=!1){let m;typeof s=="string"?m=Qi(s):(m={...s},Ye(!m.pathname||!m.pathname.includes("?"),ku("?","pathname","search",m)),Ye(!m.pathname||!m.pathname.includes("#"),ku("#","pathname","hash",m)),Ye(!m.search||!m.search.includes("#"),ku("#","search","hash",m)));let f=s===""||m.pathname==="",v=f?"/":m.pathname,g;if(v==null)g=c;else{let h=r.length-1;if(!d&&v.startsWith("..")){let N=v.split("/");for(;N[0]==="..";)N.shift(),h-=1;m.pathname=N.join("/")}g=h>=0?r[h]:"/"}let y=Fb(m,g),A=v&&v!=="/"&&v.endsWith("/"),E=(f||v===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(A||E)&&(y.pathname+="/"),y}var zv=s=>s.replace(/[\\/]{2,}/g,"/"),lt=s=>zv(s.join("/"));function Gi(s,r=0){let c=s.length;for(;c>r&&s.charCodeAt(c-1)===47;)c--;return c===s.length?s:s.slice(0,c)}var Wb=s=>Gi(s).replace(/^\/*/,"/"),e1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,a1=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,t1=class{constructor(s,r,c,d=!1){this.status=s,this.statusText=r||"",this.internal=d,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function n1(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function i1(s){let r=s.map(c=>c.route.path).filter(Boolean);return lt(r)||"/"}var Uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qv(s,r){let c=s;if(typeof c!="string"||!ad.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let d=c,m=!1;if(Uv)try{let f=new URL(window.location.href),v=Ov.test(c)?new URL(Db(c,f.protocol)):new URL(c),g=It(v.pathname,r);v.origin===f.origin&&g!=null?c=g+v.search+v.hash:m=!0}catch{Et(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:m,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var lv=new URL("http://localhost");function Lv(s){if(s.createURL)return s.createURL("/");try{return new URL(s.createHref("/"),lv)}catch{return lv}}function Bu(s,r){return s.origin===r.origin&&(s.origin!=="null"||s.protocol===r.protocol&&s.host===r.host)}function l1(s,r){if(s.startsWith("//"))return!0;let c=r.protocol.toLowerCase();return s.toLowerCase().startsWith(c)?r.host===""||s.slice(c.length).startsWith("//"):!1}function kv(s,r,c,d){let m=null;try{m=s==null?null:new URL(s,c)}catch{}let f=new URL(r,c),v=m!=null&&!Bu(m,c),g=!Bu(f,c);if(d==="reject"){if(v||g)throw new Error("External navigation is not allowed")}else if(g&&(m==null||!l1(s,m)||!Bu(m,f)))throw new Error("External navigation is not allowed")}var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var o1=["GET",...Bv];new Set(o1);var s1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function r1(s){try{return s1.includes(new URL(s).protocol)}catch{return!1}}var Pi=b.createContext(null);Pi.displayName="DataRouter";var Vs=b.createContext(null);Vs.displayName="DataRouterState";var Hv=b.createContext(!1);function c1(){return b.useContext(Hv)}var Iv=b.createContext({isTransitioning:!1});Iv.displayName="ViewTransition";var u1=b.createContext(new Map);u1.displayName="Fetchers";var d1=b.createContext(null);d1.displayName="Await";var Ka=b.createContext(null);Ka.displayName="Navigation";var Kl=b.createContext(null);Kl.displayName="Location";var jt=b.createContext({outlet:null,matches:[],isDataRoute:!1});jt.displayName="Route";var nd=b.createContext(null);nd.displayName="RouteError";var Vv="REACT_ROUTER_ERROR",m1="REDIRECT",f1="ROUTE_ERROR_RESPONSE";function p1(s){if(s.startsWith(`${Vv}:${m1}:{`))try{let r=JSON.parse(s.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function h1(s){if(s.startsWith(`${Vv}:${f1}:{`))try{let r=JSON.parse(s.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new t1(r.status,r.statusText,r.data)}catch{}}function v1(s,{relative:r}={}){Ye(Fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:d}=b.useContext(Ka),{hash:m,pathname:f,search:v}=Jl(s,{relative:r}),g=f;return c!=="/"&&(g=f==="/"?c:lt([c,f])),d.createHref({pathname:g,search:v,hash:m})}function Fl(){return b.useContext(Kl)!=null}function Gt(){return Ye(Fl(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Kl).location}var Gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yv(s){b.useContext(Ka).static||b.useLayoutEffect(s)}function g1(){let{isDataRoute:s}=b.useContext(jt);return s?_1():x1()}function x1(){Ye(Fl(),"useNavigate() may be used only in the context of a <Router> component.");let s=b.useContext(Pi),{basename:r,navigator:c}=b.useContext(Ka),{matches:d}=b.useContext(jt),{pathname:m}=Gt(),f=JSON.stringify(Dv(d)),v=b.useRef(!1);return Yv(()=>{v.current=!0}),b.useCallback((y,A={})=>{if(Et(v.current,Gv),!v.current)return;if(typeof y=="number"){c.go(y);return}let E=td(y,JSON.parse(f),m,A.relative==="path");s==null&&r!=="/"&&(E.pathname=E.pathname==="/"?r:lt([r,E.pathname])),kv(typeof y=="string"?y:Vi(y),c.createHref(E),Lv(c),"reject"),(A.replace?c.replace:c.push)(E,A.state,A)},[r,c,f,m,s])}b.createContext(null);function b1(){let{matches:s}=b.useContext(jt),r=s[s.length-1];return(r==null?void 0:r.params)??{}}function Jl(s,{relative:r}={}){let{matches:c}=b.useContext(jt),{pathname:d}=Gt(),m=JSON.stringify(Dv(c));return b.useMemo(()=>td(s,JSON.parse(m),d,r==="path"),[s,m,d,r])}function y1(s,r){return Qv(s,r)}function Qv(s,r,c){var B;Ye(Fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=b.useContext(Ka),{matches:m}=b.useContext(jt),f=m[m.length-1],v=f?f.params:{},g=f?f.pathname:"/",y=f?f.pathnameBase:"/",A=f&&f.route;{let q=A&&A.path||"";Xv(g,!A||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let E=Gt(),h;if(r){let q=typeof r=="string"?Qi(r):r;Ye(y==="/"||((B=q.pathname)==null?void 0:B.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),h=q}else h=E;let N=h.pathname||"/",U=N;if(y!=="/"){let q=y.replace(/^\//,"").split("/");U="/"+N.replace(/^\//,"").split("/").slice(q.length).join("/")}let I=c&&c.state.matches.length?c.state.matches.map(q=>Object.assign(q,{route:c.manifest[q.route.id]||q.route})):Tv(s,{pathname:U});Et(A||I!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Et(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=A1(I&&I.map(q=>Object.assign({},q,{params:Object.assign({},v,q.params),pathname:lt([y,d.encodeLocation?d.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:lt([y,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),m,c);return r&&k?b.createElement(Kl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},k):k}function N1(){let s=R1(),r=n1(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),c=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:d},f={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",s),v=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),c?b.createElement("pre",{style:m},c):null,v)}var E1=b.createElement(N1,null),Pv=class extends b.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){this.props.onError?this.props.onError(s,r):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const c=h1(s.digest);c&&(s=c)}let r=s!==void 0?b.createElement(jt.Provider,{value:this.props.routeContext},b.createElement(nd.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?b.createElement(j1,{error:s},r):r}};Pv.contextType=Hv;var Hu=new WeakMap;function j1({children:s,error:r}){let{basename:c,navigator:d}=b.useContext(Ka);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let m=p1(r.digest);if(m){let f=Hu.get(r);if(f)throw f;let v=qv(m.location,c),g=v.absoluteURL||v.to;if(kv(m.location,g,Lv(d),"allow-explicit"),r1(g))throw new Error("Invalid redirect location");if(Uv&&!Hu.get(r))if(v.isExternal||m.reloadDocument)window.location.href=g;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(v.to,{replace:m.replace}));throw Hu.set(r,y),y}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return s}function S1({routeContext:s,match:r,children:c}){let d=b.useContext(Pi);return d&&d.static&&d.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(jt.Provider,{value:s},c)}function A1(s,r=[],c){let d=c==null?void 0:c.state;if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(r.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let m=s,f=d==null?void 0:d.errors;if(f!=null){let E=m.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);Ye(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),m=m.slice(0,Math.min(m.length,E+1))}let v=!1,g=-1;if(c&&d){v=d.renderFallback;for(let E=0;E<m.length;E++){let h=m[E];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=E),h.route.id){let{loaderData:N,errors:U}=d,I=h.route.loader&&!N.hasOwnProperty(h.route.id)&&(!U||U[h.route.id]===void 0);if(h.route.lazy||I){c.isStatic&&(v=!0),g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}}let y=c==null?void 0:c.onError,A=d&&y?(E,h)=>{var N,U;y(E,{location:d.location,params:((U=(N=d.matches)==null?void 0:N[0])==null?void 0:U.params)??{},pattern:i1(d.matches),errorInfo:h})}:void 0;return m.reduceRight((E,h,N)=>{let U,I=!1,k=null,B=null;d&&(U=f&&h.route.id?f[h.route.id]:void 0,k=h.route.errorElement||E1,v&&(g<0&&N===0?(Xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,B=null):g===N&&(I=!0,B=h.route.hydrateFallbackElement||null)));let q=r.concat(m.slice(0,N+1)),Y=()=>{let H;return U?H=k:I?H=B:h.route.Component?H=b.createElement(h.route.Component,null):h.route.element?H=h.route.element:H=E,b.createElement(S1,{match:h,routeContext:{outlet:E,matches:q,isDataRoute:d!=null},children:H})};return d&&(h.route.ErrorBoundary||h.route.errorElement||N===0)?b.createElement(Pv,{location:d.location,revalidation:d.revalidation,component:k,error:U,children:Y(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:A}):Y()},null)}function id(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w1(s){let r=b.useContext(Pi);return Ye(r,id(s)),r}function O1(s){let r=b.useContext(Vs);return Ye(r,id(s)),r}function T1(s){let r=b.useContext(jt);return Ye(r,id(s)),r}function ld(s){let r=T1(s),c=r.matches[r.matches.length-1];return Ye(c.route.id,`${s} can only be used on routes that contain a unique "id"`),c.route.id}function C1(){return ld("useRouteId")}function R1(){var d;let s=b.useContext(nd),r=O1("useRouteError"),c=ld("useRouteError");return s!==void 0?s:(d=r.errors)==null?void 0:d[c]}function _1(){let{router:s}=w1("useNavigate"),r=ld("useNavigate"),c=b.useRef(!1);return Yv(()=>{c.current=!0}),b.useCallback(async(m,f={})=>{Et(c.current,Gv),c.current&&(typeof m=="number"?await s.navigate(m):await s.navigate(m,{fromRouteId:r,...f}))},[s,r])}var ov={};function Xv(s,r,c){!r&&!ov[s]&&(ov[s]=!0,Et(!1,c))}b.memo(M1);function M1({routes:s,manifest:r,future:c,state:d,isStatic:m,onError:f}){return Qv(s,void 0,{manifest:r,state:d,isStatic:m,onError:f})}function va(s){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function D1({basename:s="/",children:r=null,location:c,navigationType:d="POP",navigator:m,static:f=!1,useTransitions:v}){Ye(!Fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=s.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:g,navigator:m,static:f,useTransitions:v,future:{}}),[g,m,f,v]);typeof c=="string"&&(c=Qi(c));let{pathname:A="/",search:E="",hash:h="",state:N=null,key:U="default",mask:I}=c,k=b.useMemo(()=>{let B=It(A,g);return B==null?null:{location:{pathname:B,search:E,hash:h,state:N,key:U,mask:I},navigationType:d}},[g,A,E,h,N,U,d,I]);return Et(k!=null,`<Router basename="${g}"> is not able to match the URL "${A}${E}${h}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:b.createElement(Ka.Provider,{value:y},b.createElement(Kl.Provider,{children:r,value:k}))}function z1({children:s,location:r}){return y1(Xu(s),r)}function Xu(s,r=[]){let c=[];return b.Children.forEach(s,(d,m)=>{if(!b.isValidElement(d))return;let f=[...r,m];if(d.type===b.Fragment){c.push.apply(c,Xu(d.props.children,f));return}Ye(d.type===va,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=Xu(d.props.children,f)),c.push(v)}),c}var Us="get",qs="application/x-www-form-urlencoded";function Gs(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function U1(s){return Gs(s)&&s.tagName.toLowerCase()==="button"}function q1(s){return Gs(s)&&s.tagName.toLowerCase()==="form"}function L1(s){return Gs(s)&&s.tagName.toLowerCase()==="input"}function k1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function B1(s,r){return s.button===0&&(!r||r==="_self")&&!k1(s)}var Ds=null;function H1(){if(Ds===null)try{new FormData(document.createElement("form"),0),Ds=!1}catch{Ds=!0}return Ds}var I1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Iu(s){return s!=null&&!I1.has(s)?(Et(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qs}"`),null):s}function V1(s,r){let c,d,m,f,v;if(q1(s)){let g=s.getAttribute("action");d=g?It(g,r):null,c=s.getAttribute("method")||Us,m=Iu(s.getAttribute("enctype"))||qs,f=new FormData(s)}else if(U1(s)||L1(s)&&(s.type==="submit"||s.type==="image")){let g=s.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=s.getAttribute("formaction")||g.getAttribute("action");if(d=y?It(y,r):null,c=s.getAttribute("formmethod")||g.getAttribute("method")||Us,m=Iu(s.getAttribute("formenctype"))||Iu(g.getAttribute("enctype"))||qs,f=new FormData(g,s),!H1()){let{name:A,type:E,value:h}=s;if(E==="image"){let N=A?`${A}.`:"";f.append(`${N}x`,"0"),f.append(`${N}y`,"0")}else A&&f.append(A,h)}}else{if(Gs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Us,d=null,m=qs,v=s}return f&&m==="text/plain"&&(v=f,f=void 0),{action:d,method:c.toLowerCase(),encType:m,formData:f,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function od(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function $v(s,r,c,d){let m=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return c?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${d}`:m.pathname=`${m.pathname}.${d}`:m.pathname==="/"?m.pathname=`_root.${d}`:r&&It(m.pathname,r)==="/"?m.pathname=`${Gi(r)}/_root.${d}`:m.pathname=`${Gi(m.pathname)}.${d}`,m}async function G1(s,r){if(s.id in r)return r[s.id];try{let c=await import(s.module);return r[s.id]=c,c}catch(c){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Y1(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Q1(s,r,c){let d=await Promise.all(s.map(async m=>{let f=r.routes[m.route.id];if(f){let v=await G1(f,c);return v.links?v.links():[]}return[]}));return Z1(d.flat(1).filter(Y1).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function sv(s,r,c,d,m,f){let v=(y,A)=>c[A]?y.route.id!==c[A].route.id:!0,g=(y,A)=>{var E;return c[A].pathname!==y.pathname||((E=c[A].route.path)==null?void 0:E.endsWith("*"))&&c[A].params["*"]!==y.params["*"]};return f==="assets"?r.filter((y,A)=>v(y,A)||g(y,A)):f==="data"?r.filter((y,A)=>{var h;let E=d.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(v(y,A)||g(y,A))return!0;if(y.route.shouldRevalidate){let N=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((h=c[0])==null?void 0:h.params)||{},nextUrl:new URL(s,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function P1(s,r,{includeHydrateFallback:c}={}){return X1(s.map(d=>{let m=r.routes[d.route.id];if(!m)return[];let f=[m.module];return m.clientActionModule&&(f=f.concat(m.clientActionModule)),m.clientLoaderModule&&(f=f.concat(m.clientLoaderModule)),c&&m.hydrateFallbackModule&&(f=f.concat(m.hydrateFallbackModule)),m.imports&&(f=f.concat(m.imports)),f}).flat(1))}function X1(s){return[...new Set(s)]}function $1(s){let r={},c=Object.keys(s).sort();for(let d of c)r[d]=s[d];return r}function Z1(s,r){let c=new Set;return new Set(r),s.reduce((d,m)=>{let f=JSON.stringify($1(m));return c.has(f)||(c.add(f),d.push({key:f,link:m})),d},[])}function sd(){let s=b.useContext(Pi);return od(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function K1(){let s=b.useContext(Vs);return od(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var rd=b.createContext(void 0);rd.displayName="FrameworkContext";function Ys(){let s=b.useContext(rd);return od(s,"You must render this element inside a <HydratedRouter> element"),s}function F1(s,r){let c=b.useContext(rd),[d,m]=b.useState(!1),[f,v]=b.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:A,onMouseLeave:E,onTouchStart:h}=r,N=b.useRef(null);b.useEffect(()=>{if(s==="render"&&v(!0),s==="viewport"){let k=q=>{q.forEach(Y=>{v(Y.isIntersecting)})},B=new IntersectionObserver(k,{threshold:.5});return N.current&&B.observe(N.current),()=>{B.disconnect()}}},[s]),b.useEffect(()=>{if(d){let k=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(k)}}},[d]);let U=()=>{m(!0)},I=()=>{m(!1),v(!1)};return c?s!=="intent"?[f,N,{}]:[f,N,{onFocus:Ql(g,U),onBlur:Ql(y,I),onMouseEnter:Ql(A,U),onMouseLeave:Ql(E,I),onTouchStart:Ql(h,U)}]:[!1,N,{}]}function Ql(s,r){return c=>{s&&s(c),c.defaultPrevented||r(c)}}function J1({page:s,...r}){let c=c1(),{nonce:d}=Ys(),{router:m}=sd(),f=b.useMemo(()=>Tv(m.routes,s,m.basename),[m.routes,s,m.basename]);return f?(r.nonce==null&&d&&(r={...r,nonce:d}),c?b.createElement(ey,{page:s,matches:f,...r}):b.createElement(ay,{page:s,matches:f,...r})):null}function W1(s){let{manifest:r,routeModules:c}=Ys(),[d,m]=b.useState([]);return b.useEffect(()=>{let f=!1;return Q1(s,r,c).then(v=>{f||m(v)}),()=>{f=!0}},[s,r,c]),d}function ey({page:s,matches:r,...c}){let d=Gt(),{future:m}=Ys(),{basename:f}=sd(),v=b.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let g=$v(s,f,m.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,A=[];for(let E of r)typeof E.route.shouldRevalidate=="function"?y=!0:A.push(E.route.id);return y&&A.length>0&&g.searchParams.set("_routes",A.join(",")),[g.pathname+g.search]},[f,m.v8_trailingSlashAwareDataRequests,s,d,r]);return b.createElement(b.Fragment,null,v.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...c})))}function ay({page:s,matches:r,...c}){let d=Gt(),{future:m,manifest:f,routeModules:v}=Ys(),{basename:g}=sd(),{loaderData:y,matches:A}=K1(),E=b.useMemo(()=>sv(s,r,A,f,d,"data"),[s,r,A,f,d]),h=b.useMemo(()=>sv(s,r,A,f,d,"assets"),[s,r,A,f,d]),N=b.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let k=new Set,B=!1;if(r.forEach(Y=>{var oe;let H=f.routes[Y.route.id];!H||!H.hasLoader||(!E.some(ue=>ue.route.id===Y.route.id)&&Y.route.id in y&&((oe=v[Y.route.id])!=null&&oe.shouldRevalidate)||H.hasClientLoader?B=!0:k.add(Y.route.id))}),k.size===0)return[];let q=$v(s,g,m.v8_trailingSlashAwareDataRequests,"data");return B&&k.size>0&&q.searchParams.set("_routes",r.filter(Y=>k.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[q.pathname+q.search]},[g,m.v8_trailingSlashAwareDataRequests,y,d,f,E,r,s,v]),U=b.useMemo(()=>P1(h,f),[h,f]),I=W1(h);return b.createElement(b.Fragment,null,N.map(k=>b.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),U.map(k=>b.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),I.map(({key:k,link:B})=>b.createElement("link",{key:k,nonce:c.nonce,...B,crossOrigin:B.crossOrigin??c.crossOrigin})))}function ty(...s){return r=>{s.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ny&&(window.__reactRouterVersion="7.18.4")}catch{}function iy({basename:s,children:r,useTransitions:c,window:d}){let m=b.useRef();m.current==null&&(m.current=zb({window:d,v5Compat:!0}));let f=m.current,[v,g]=b.useState({action:f.action,location:f.location}),y=b.useCallback(A=>{c===!1?g(A):b.startTransition(()=>g(A))},[c]);return b.useLayoutEffect(()=>f.listen(y),[f,y]),b.createElement(D1,{basename:s,children:r,location:v.location,navigationType:v.action,navigator:f,useTransitions:c})}var Nt=b.forwardRef(function({onClick:r,discover:c="render",prefetch:d="none",relative:m,reloadDocument:f,replace:v,mask:g,state:y,target:A,to:E,preventScrollReset:h,viewTransition:N,defaultShouldRevalidate:U,...I},k){let{basename:B,navigator:q,useTransitions:Y}=b.useContext(Ka),H=typeof E=="string"&&ad.test(E),oe=qv(E,B);E=oe.to;let ue=v1(E,{relative:m}),J=Gt(),Q=null;if(g){let re=td(g,[],J.mask?J.mask.pathname:"/",!0);B!=="/"&&(re.pathname=re.pathname==="/"?B:lt([B,re.pathname])),Q=q.createHref(re)}let[X,Te,P]=F1(d,I),se=ry(E,{replace:v,mask:g,state:y,target:A,preventScrollReset:h,relative:m,viewTransition:N,defaultShouldRevalidate:U,useTransitions:Y});function de(re){r&&r(re),re.defaultPrevented||se(re)}let qe=!(oe.isExternal||f),Ie=b.createElement("a",{...I,...P,href:(qe?Q:void 0)||oe.absoluteURL||ue,onClick:qe?de:r,ref:ty(k,Te),target:A,"data-discover":!H&&c==="render"?"true":void 0});return X&&!H?b.createElement(b.Fragment,null,Ie,b.createElement(J1,{page:ue})):Ie});Nt.displayName="Link";var ly=b.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:d="",end:m=!1,style:f,to:v,viewTransition:g,children:y,...A},E){let h=Jl(v,{relative:A.relative}),N=Gt(),U=b.useContext(Vs),{navigator:I,basename:k}=b.useContext(Ka),B=U!=null&&fy(h)&&g===!0,q=I.encodeLocation?I.encodeLocation(h).pathname:h.pathname,Y=N.pathname,H=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;c||(Y=Y.toLowerCase(),H=H?H.toLowerCase():null,q=q.toLowerCase()),H&&k&&(H=It(H,k)||H);const oe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let ue=Y===q||!m&&Y.startsWith(q)&&Y.charAt(oe)==="/",J=H!=null&&(H===q||!m&&H.startsWith(q)&&H.charAt(q.length)==="/"),Q={isActive:ue,isPending:J,isTransitioning:B},X=ue?r:void 0,Te;typeof d=="function"?Te=d(Q):Te=[d,ue?"active":null,J?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let P=typeof f=="function"?f(Q):f;return b.createElement(Nt,{...A,"aria-current":X,className:Te,ref:E,style:P,to:v,viewTransition:g},typeof y=="function"?y(Q):y)});ly.displayName="NavLink";var oy=b.forwardRef(({discover:s="render",fetcherKey:r,navigate:c,reloadDocument:d,replace:m,state:f,method:v=Us,action:g,onSubmit:y,relative:A,preventScrollReset:E,viewTransition:h,defaultShouldRevalidate:N,...U},I)=>{let{useTransitions:k}=b.useContext(Ka),B=dy(),q=my(g,{relative:A}),Y=v.toLowerCase()==="get"?"get":"post",H=typeof g=="string"&&ad.test(g),oe=ue=>{if(y&&y(ue),ue.defaultPrevented)return;ue.preventDefault();let J=ue.nativeEvent.submitter,Q=(J==null?void 0:J.getAttribute("formmethod"))||v,X=()=>B(J||ue.currentTarget,{fetcherKey:r,method:Q,navigate:c,replace:m,state:f,relative:A,preventScrollReset:E,viewTransition:h,defaultShouldRevalidate:N});k&&c!==!1?b.startTransition(()=>X()):X()};return b.createElement("form",{ref:I,method:Y,action:q,onSubmit:d?y:oe,...U,"data-discover":!H&&s==="render"?"true":void 0})});oy.displayName="Form";function sy(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zv(s){let r=b.useContext(Pi);return Ye(r,sy(s)),r}function ry(s,{target:r,replace:c,mask:d,state:m,preventScrollReset:f,relative:v,viewTransition:g,defaultShouldRevalidate:y,useTransitions:A}={}){let E=g1(),h=Gt(),N=Jl(s,{relative:v});return b.useCallback(U=>{if(B1(U,r)){U.preventDefault();let I=c!==void 0?c:Vi(h)===Vi(N),k=()=>E(s,{replace:I,mask:d,state:m,preventScrollReset:f,relative:v,viewTransition:g,defaultShouldRevalidate:y});A?b.startTransition(()=>k()):k()}},[h,E,N,c,d,m,r,s,f,v,g,y,A])}var cy=0,uy=()=>`__${String(++cy)}__`;function dy(){let{router:s}=Zv("useSubmit"),{basename:r}=b.useContext(Ka),c=C1(),d=s.fetch,m=s.navigate;return b.useCallback(async(f,v={})=>{let{action:g,method:y,encType:A,formData:E,body:h}=V1(f,r);if(v.navigate===!1){let N=v.fetcherKey||uy();await d(N,c,v.action||g,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:h,formMethod:v.method||y,formEncType:v.encType||A,flushSync:v.flushSync})}else await m(v.action||g,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:h,formMethod:v.method||y,formEncType:v.encType||A,replace:v.replace,state:v.state,fromRouteId:c,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,m,r,c])}function my(s,{relative:r}={}){let{basename:c}=b.useContext(Ka),d=b.useContext(jt);Ye(d,"useFormAction must be used inside a RouteContext");let[m]=d.matches.slice(-1),f={...Jl(s||".",{relative:r})},v=Gt();if(s==null){f.search=v.search;let g=new URLSearchParams(f.search),y=g.getAll("index");if(y.some(E=>E==="")){g.delete("index"),y.filter(h=>h).forEach(h=>g.append("index",h));let E=g.toString();f.search=E?`?${E}`:""}}return(!s||s===".")&&m.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:lt([c,f.pathname])),Vi(f)}function fy(s,{relative:r}={}){let c=b.useContext(Iv);Ye(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Zv("useViewTransitionState"),m=Jl(s,{relative:r});if(!c.isTransitioning)return!1;let f=It(c.currentLocation.pathname,d)||c.currentLocation.pathname,v=It(c.nextLocation.pathname,d)||c.nextLocation.pathname;return ks(m.pathname,v)!=null||ks(m.pathname,f)!=null}const py={sm:"w-[92px]",md:"w-[150px]",lg:"w-[200px]",xl:"w-[260px]"},Fa=({size:s="md",className:r="",glow:c=!0})=>i.jsxs("span",{id:"vm-midias-logo",className:`relative inline-flex shrink-0 items-center justify-center select-none ${r}`,children:[c&&i.jsx("span",{className:"absolute inset-[24%] -z-10 bg-[#f40b36]/18 blur-xl","aria-hidden":"true"}),i.jsx("img",{src:"/images/logo-VMmidias.png",alt:"VM MÍDIAS",className:`${py[s]} h-auto object-contain transition-transform duration-300 hover:scale-[1.02]`,loading:"eager",decoding:"async"})]});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vy=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,c,d)=>d?d.toUpperCase():c.toLowerCase()),rv=s=>{const r=vy(s);return r.charAt(0).toUpperCase()+r.slice(1)},Kv=(...s)=>s.filter((r,c,d)=>!!r&&r.trim()!==""&&d.indexOf(r)===c).join(" ").trim(),gy=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=b.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:m="",children:f,iconNode:v,...g},y)=>b.createElement("svg",{ref:y,...xy,width:r,height:r,stroke:s,strokeWidth:d?Number(c)*24/Number(r):c,className:Kv("lucide",m),...!f&&!gy(g)&&{"aria-hidden":"true"},...g},[...v.map(([A,E])=>b.createElement(A,E)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(s,r)=>{const c=b.forwardRef(({className:d,...m},f)=>b.createElement(by,{ref:f,iconNode:r,className:Kv(`lucide-${hy(rv(s))}`,`lucide-${s}`,d),...m}));return c.displayName=rv(s),c};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xi=W("arrow-left",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yt=W("arrow-right",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],cv=W("arrow-up-right",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Sy=W("arrow-up",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],$i=W("building-2",Ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Oy=W("calendar-check",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Cy=W("calendar-days",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yt=W("check",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],My=W("chevron-down",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zy=W("chevron-left",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fv=W("chevron-right",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uv=W("circle-alert",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ky=W("circle-check",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],Jv=W("clipboard",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wv=W("clock-3",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Vy=W("cloud-upload",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],Yy=W("coins",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Wl=W("download",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Xy=W("external-link",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Zy=W("file-check-2",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],e0=W("file-image",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],a0=W("file",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],zs=W("gift",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],e2=W("globe",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],t2=W("headphones",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],i2=W("image-off",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],o2=W("image",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],r2=W("instagram",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],u2=W("layout-grid",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],pa=W("loader-circle",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],dv=W("lock-keyhole",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],cd=W("log-out",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mv=W("mail",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qs=W("map-pin",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],g2=W("menu",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],b2=W("mic-vocal",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],Bs=W("monitor-play",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],t0=W("newspaper",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],j2=W("palette",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],A2=W("pencil",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],O2=W("play",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],n0=W("plus",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],i0=W("radio",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ud=W("refresh-cw",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],M2=W("repeat",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ps=W("search",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],U2=W("send",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],L2=W("settings-2",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dd=W("shield-check",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ls=W("sparkles",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],I2=W("star",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],$u=W("store",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Vu=W("sun",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Q2=W("tag",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],Zu=W("ticket",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],l0=W("trash-2",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Pl=W("trophy",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],K2=W("upload",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],J2=W("video",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xn=W("x",W2),ze={company:{name:"VM MÍDIAS",legalName:"VM MÍDIAS Publicidade e Painéis Digitais",tagline:"SUA MARCA EM DESTAQUE.",locationShort:"Capela do Alto — SP",domain:"www.vmmidias.com.br",whatsappRaw:"551531650153",whatsappFormatted:"(15) 3165-0153",email:"fredericolopescorrea@hotmail.com",instagramUrl:"https://www.instagram.com/vmmidiasindoor",heroVideoUrl:"/videos/Apresentacao-VMmidias.mp4"},plans:[{id:"start",name:"START",type:"MÍDIA INDOOR",coverage:"Divulgação em 05 locais",badge:null,prices:{mensal:{price:"179,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"159,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"139,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 05 pontos estratégicos","Exibição contínua durante todo o horário comercial","Alta frequência de repetições diárias","Criação de arte estática inclusa sem custo adicional","Suporte e atendimento direto em Capela do Alto"]},{id:"destaque",name:"DESTAQUE",type:"MÍDIA INDOOR",coverage:"Divulgação em 09 locais + 01 adicional",badge:"MAIS ESCOLHIDO",prices:{mensal:{price:"259,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"237,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"217,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 09 locais + 01 ponto adicional grátis","Maior presença e frequência em toda a rede","Prioridade em pontos de altíssimo fluxo","Criação de arte inclusa sem custo adicional","Relatórios de inserções e atendimento prioritário"]}],supporters:[{id:"esquina-do-salgado",name:"Esquina do Salgado",logoUrl:"/images/apoiadores/esquina-do-salgado.png"},{id:"espetinho-do-vg",name:"Espetinho do VG",logoUrl:"/images/apoiadores/espetinho-do-vg.png"},{id:"boteco-do-gordao",name:"Boteco do Gordão",logoUrl:"/images/apoiadores/boteco-do-gordao.png"},{id:"mg-sampaio-iperozinho",name:"MG Sampaio Iperózinho",logoUrl:"/images/apoiadores/mg-sampaio.jpg"},{id:"mg-sampaio-culaus",name:"MG Sampaio Culaus",logoUrl:"/images/apoiadores/mg-sampaio.jpg"}],howItWorksSteps:[{step:"01",title:"ESCOLHA SEU PLANO",description:"Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual."},{step:"02",title:"ENVIE SUAS INFORMAÇÕES",description:"Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal."},{step:"03",title:"CRIAMOS SUA CAMPANHA",description:"Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas."},{step:"04",title:"SUA MARCA ENTRA NO AR",description:"Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto."}],whyAdvertise:[{id:"presenca-diaria",title:"PRESENÇA DIÁRIA",description:"Sua marca presente constantemente durante todo o expediente dos melhores estabelecimentos da cidade.",iconName:"CalendarCheck"},{id:"pontos-estrategicos",title:"PONTOS ESTRATÉGICOS",description:"Publicidade instalada exatamente onde as pessoas de Capela do Alto realmente compram e circulam.",iconName:"MapPin"},{id:"alta-frequencia",title:"ALTA FREQUÊNCIA",description:"A repetição diária gera familiaridade. Quem vê todos os dias lembra na hora de comprar.",iconName:"Repeat"},{id:"preco-acessivel",title:"PREÇO ACESSÍVEL",description:"Planos a partir de R$ 139/mês, pensados sob medida para o orçamento do comércio e serviços locais.",iconName:"Coins"},{id:"criacao-facilitada",title:"CRIAÇÃO FACILITADA",description:"Você não precisa ser designer. Nós ajudamos sua empresa a colocar sua campanha no ar com padrão profissional.",iconName:"Palette"},{id:"atendimento-local",title:"ATENDIMENTO LOCAL",description:"Suporte próximo, ágil e humanizado em Capela do Alto, com quem conhece o mercado da nossa região.",iconName:"Headphones"}],faqs:[{question:"O que é mídia indoor?",answer:"Mídia Indoor (também conhecida como DOOH - Digital Out of Home) é a veiculação de anúncios em telas digitais de alta resolução instaladas dentro de estabelecimentos comerciais estratégicos onde há fluxo contínuo de pessoas e tempo de permanência."},{question:"Onde meu anúncio será exibido?",answer:"Sua marca será exibida em telas digitais instaladas nos principais pontos de circulação de Capela do Alto — como supermercados, restaurantes, padarias, lotéricas, academias e comércios parceiros da nossa rede."},{question:"Como envio minha arte?",answer:"Basta nos enviar pelo WhatsApp ou e-mail o seu logotipo (em alta resolução), imagens dos seus produtos/serviços e as informações de contato que deseja destacar. É simples e rápido."},{question:"A VM MÍDIAS cria o anúncio?",answer:"Sim! A criação da arte estática para veiculação nas telas já está inclusa no seu plano, sem cobrança adicional. Caso você queira um vídeo animado em movimento para chamar ainda mais atenção, oferecemos o serviço opcional de animação."},{question:"Quanto tempo demora para minha campanha entrar no ar?",answer:"Após a aprovação da sua arte ou recebimento do seu material finalizado, a campanha entra no ar na nossa rede de telas em até 48 horas úteis."},{question:"Posso alterar minha campanha durante o contrato?",answer:"Sim! Você pode atualizar sua arte ou oferta para divulgar datas comemorativas, promoções especiais ou lançamentos de produtos conforme as condições do seu plano contratado."},{question:"Qual é a diferença entre START e DESTAQUE?",answer:"O Plano START veicula sua marca em 05 locais estratégicos da rede. O Plano DESTAQUE é o mais escolhido: oferece divulgação em 09 locais mais 01 ponto adicional bonificado (total de 10 locais), proporcionando o dobro de cobertura na cidade."},{question:"Como funciona o plano mensal?",answer:"No plano mensal você tem total flexibilidade: renova mês a mês sem fidelidade. Já nos planos semestral (6 meses) e anual (12 meses), você garante descontos progressivos expressivos e a melhor relação custo-benefício por mês."},{question:"Posso contratar mais pontos?",answer:"Com certeza! Conforme a rede de telas da VM MÍDIAS expande em novos bairros e estabelecimentos de Capela do Alto, você pode ampliar sua presença para novos pontos estratégicos adicionais."},{question:"Como faço para anunciar?",answer:"Basta clicar em qualquer botão de contato ou no botão flutuante de WhatsApp do site, escolher seu plano e falar diretamente com nossa equipe. Nós cuidamos de todo o processo para colocar sua marca em destaque rapidamente!"}]},Nn=({title:s,...r})=>i.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":s?void 0:!0,role:s?"img":void 0,...r,children:[s&&i.jsx("title",{children:s}),i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.297.297-.495.1-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.438-9.886 9.893-9.886a9.821 9.821 0 017.021 2.91 9.825 9.825 0 012.9 7.027c-.003 5.45-4.439 9.887-9.93 9.887m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.449h.005c6.559 0 11.895-5.336 11.898-11.893a11.821 11.821 0 00-3.49-8.414Z"})]}),eN=()=>{const[s,r]=b.useState(!1),[c,d]=b.useState("inicio");b.useEffect(()=>{if(!s)return;const v=document.body.style.overflow;document.body.style.overflow="hidden";const g=A=>{A.key==="Escape"&&r(!1)},y=()=>{window.innerWidth>=1024&&r(!1)};return window.addEventListener("keydown",g),window.addEventListener("resize",y),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",g),window.removeEventListener("resize",y)}},[s]),b.useEffect(()=>{const g=["inicio","onde-estamos","como-funciona","planos","contato"].map(A=>document.getElementById(A)).filter(A=>!!A),y=new IntersectionObserver(A=>{const E=A.filter(h=>h.isIntersecting).sort((h,N)=>N.intersectionRatio-h.intersectionRatio)[0];E&&d(E.target.id)},{rootMargin:"-18% 0px -62% 0px",threshold:[0,.15,.35]});return g.forEach(A=>y.observe(A)),()=>y.disconnect()},[]);const m=[{label:"Início",href:"#inicio"},{label:"Onde Estamos",href:"#onde-estamos"},{label:"Como Funciona",href:"#como-funciona"},{label:"Planos",href:"#planos"},{label:"Contato",href:"#contato"}],f=()=>{r(!1)};return i.jsxs(i.Fragment,{children:[i.jsx("header",{id:"main-header",className:"fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/10 bg-[#030406]/96 shadow-2xl shadow-black/40 backdrop-blur-xl lg:h-[84px]",children:i.jsx("div",{className:"mx-auto h-full max-w-[1500px] px-4 sm:px-8 lg:px-12",children:i.jsxs("div",{className:"flex h-full items-center justify-between",children:[i.jsx("a",{href:"#inicio",className:"flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D] rounded-md","aria-label":"VM MÍDIAS - Ir para o início",children:i.jsx(Fa,{size:"sm"})}),i.jsx("nav",{id:"desktop-navigation",className:"hidden lg:flex items-center space-x-7","aria-label":"Navegação Principal",children:m.map(v=>i.jsxs("a",{href:v.href,"aria-current":c===v.href.slice(1)?"page":void 0,className:`text-[13px] font-bold transition-colors relative py-2 group focus:outline-none focus-visible:text-white ${c===v.href.slice(1)?"text-white":"text-[#94979f] hover:text-white"}`,children:[v.label,i.jsx("span",{className:`absolute bottom-0 left-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full ${c===v.href.slice(1)?"w-full":"w-0"}`})]},v.href))}),i.jsx("div",{className:"hidden lg:flex items-center gap-4",children:i.jsxs("a",{id:"header-cta-button",href:"#contato",className:"group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#f40b36] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d90a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[i.jsx("span",{children:"ANUNCIE AGORA"}),i.jsx(yt,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})}),i.jsxs("div",{className:"flex lg:hidden items-center gap-3",children:[i.jsxs("a",{href:"#contato",onClick:f,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8032D] text-white text-xs font-bold uppercase tracking-wider",children:[i.jsx("span",{children:"Anuncie"}),i.jsx(yt,{className:"w-3.5 h-3.5"})]}),i.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>r(!s),className:"p-2 rounded-lg bg-[#15151B] border border-[#22222E] text-white hover:text-[#F8032D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":s,"aria-controls":"mobile-navigation-drawer","aria-label":s?"Fechar menu de navegação":"Abrir menu de navegação",children:s?i.jsx(Xn,{className:"w-6 h-6"}):i.jsx(g2,{className:"w-6 h-6"})})]})]})})}),s&&i.jsx("div",{id:"mobile-navigation-drawer",className:"fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto bg-[#050609] lg:hidden",children:i.jsxs("div",{className:"flex min-h-full flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-8",children:[i.jsx("div",{className:"mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38",children:"Navegação"}),i.jsx("nav",{"aria-label":"Navegação móvel",className:"border-t border-white/10",children:m.map((v,g)=>i.jsxs("a",{href:v.href,onClick:f,"aria-current":c===v.href.slice(1)?"page":void 0,className:`group flex min-h-14 items-center gap-4 border-b border-white/10 px-1 text-base font-bold transition-colors ${c===v.href.slice(1)?"text-white":"text-white/65 hover:text-white"}`,children:[i.jsx("span",{className:`text-[10px] tabular-nums ${c===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`,children:String(g+1).padStart(2,"0")}),i.jsx("span",{className:"flex-1",children:v.label}),i.jsx(yt,{className:`h-4 w-4 transition-transform group-hover:translate-x-1 ${c===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`})]},v.href))}),i.jsxs("div",{className:"mt-auto flex flex-col gap-3 border-t border-white/10 pt-5",children:[i.jsxs("a",{href:"#contato",onClick:f,className:"flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-[#F8032D] py-3 text-sm font-black text-white",children:[i.jsx("span",{children:"ANUNCIE AGORA"}),i.jsx(yt,{className:"w-4 h-4"})]}),i.jsxs("a",{href:`https://wa.me/${ze.company.whatsappRaw}?text=${encodeURIComponent("Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.")}`,target:"_blank",rel:"noopener noreferrer",onClick:f,className:"flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] py-2.5 text-sm font-bold text-white",children:[i.jsx(Nn,{className:"w-4 h-4 text-emerald-400"}),i.jsx("span",{children:"Falar pelo WhatsApp"})]})]})]})})]})},eo=({children:s,align:r="left",className:c=""})=>i.jsxs("div",{className:`brand-eyebrow ${r==="center"?"justify-center":""} ${c}`,children:[i.jsx("span",{className:"brand-eyebrow-line","aria-hidden":"true"}),i.jsx("span",{children:s})]}),Xs=({eyebrow:s,title:r,accent:c,description:d,align:m="center",className:f=""})=>i.jsxs("div",{className:`${m==="center"?"text-center mx-auto":"text-left"} max-w-4xl ${f}`,children:[i.jsx(eo,{align:m,children:s}),i.jsxs("h2",{className:"brand-section-title",children:[r," ",i.jsx("span",{className:"text-[#ff143f] text-led-glow",children:c})]}),d&&i.jsx("p",{className:"brand-section-copy",children:d})]}),Hs=({href:s,children:r,variant:c="primary",id:d,className:m=""})=>i.jsxs("a",{id:d,href:s,className:`group brand-button ${c==="outline"?"brand-button-outline":"brand-button-primary"} ${m}`,children:[i.jsx("span",{children:r}),i.jsx(yt,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]}),aN=({src:s,poster:r})=>i.jsx("div",{className:"relative aspect-video w-full overflow-hidden border border-white/20 bg-[#08090c] shadow-[0_24px_70px_rgba(0,0,0,0.5)]",children:i.jsx("video",{className:"h-full w-full object-cover",controls:!0,playsInline:!0,preload:"metadata",poster:r,"aria-label":"Conheça a VM Mídias",children:i.jsx("source",{src:s,type:"video/mp4"})})}),tN=()=>i.jsxs("section",{id:"inicio",className:"relative min-h-[100svh] overflow-hidden bg-black lg:h-[100svh]",children:[i.jsx("div",{className:"absolute inset-0 bg-hero-city hero-photo-motion","aria-hidden":"true"}),i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]","aria-hidden":"true"}),i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]","aria-hidden":"true"}),i.jsx("div",{className:"absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen","aria-hidden":"true"}),i.jsx("div",{className:"relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-5 pb-10 pt-[104px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-6 lg:pt-[96px]",children:i.jsxs("div",{className:"grid w-full items-center gap-7 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-6",children:[i.jsxs("div",{className:"order-1 lg:col-span-7 lg:row-start-1 lg:self-end",children:[i.jsx(eo,{children:"VM Mídias · Capela do Alto"}),i.jsxs("h1",{className:"max-w-[820px] text-[clamp(2.8rem,12vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-white lg:text-[clamp(4rem,5.5vw,6.2rem)]",children:["Seu negócio já é bom",i.jsx("span",{className:"mt-3 block text-[#ff143f] text-led-glow",children:"Agora ele precisa aparecer."})]})]}),i.jsx("div",{className:"order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1",children:i.jsx(aN,{src:ze.company.heroVideoUrl,poster:"/images/generated/vm-indoor-space.webp"})}),i.jsxs("div",{className:"order-3 lg:col-span-7 lg:row-start-2 lg:self-start",children:[i.jsx("p",{className:"max-w-2xl text-base leading-relaxed text-[#d0d1d6] sm:text-xl lg:text-lg xl:text-xl",children:"Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida."}),i.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[i.jsx(Hs,{id:"hero-primary-cta",href:"#contato",children:"Colocar minha marca em destaque"}),i.jsx(Hs,{id:"hero-secondary-cta",href:"#planos",variant:"outline",children:"Conhecer os planos"})]})]})]})})]}),nN=({supporter:s})=>{const[r,c]=b.useState(!1),d=s.name.split(" ").filter(Boolean).slice(0,2).map(m=>m[0]).join("");return i.jsx("div",{className:"flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-black/35 p-6 sm:p-8",children:r?i.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full border border-[#f40b36]/45 bg-[#f40b36]/10 text-2xl font-black tracking-tight text-white","aria-hidden":"true",children:d}):i.jsx("img",{src:s.logoUrl,alt:`Logo ${s.name}`,className:"h-full max-h-28 w-full object-contain",onError:()=>c(!0)})})},iN=()=>i.jsxs("section",{id:"onde-estamos",className:"relative overflow-hidden border-b border-white/10 bg-[#06070a] py-24 lg:py-32",children:[i.jsx("div",{className:"absolute inset-0 bg-indoor-space bg-cover bg-center opacity-[0.08]","aria-hidden":"true"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/95 to-[#06070a]","aria-hidden":"true"}),i.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[i.jsxs("div",{className:"mb-12 max-w-5xl",children:[i.jsx(eo,{children:"Rede de apoiadores"}),i.jsxs("h2",{className:"brand-section-title",children:["Comércios que já estão com a"," ",i.jsx("span",{className:"text-[#f40b36]",children:"VM Mídias."})]}),i.jsx("p",{className:"brand-section-copy max-w-3xl",children:"Empresas locais que apoiam a nossa rede e fortalecem a mídia indoor em Capela do Alto."})]}),i.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5",children:ze.supporters.map(s=>i.jsxs("article",{className:"overflow-hidden border border-white/10 bg-[#0b0d10]/90",children:[i.jsx(nN,{supporter:s}),i.jsxs("div",{className:"min-h-28 p-4 sm:p-5",children:[i.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.18em] text-[#f40b36] sm:text-[10px]",children:"Apoiador VM Mídias"}),i.jsx("h3",{className:"mt-2 text-sm font-black leading-snug text-white sm:text-base",children:s.name})]})]},s.id))})]})]}),lN=()=>i.jsx("section",{id:"como-funciona",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:i.jsxs("div",{className:"mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12",children:[i.jsx("div",{className:"lg:col-span-5",children:i.jsxs("div",{className:"lg:sticky lg:top-32",children:[i.jsx(Xs,{eyebrow:"Do planejamento ao resultado",title:"Como",accent:"funciona",description:"Simples, rápido e sem burocracia.",align:"left"}),i.jsx("div",{className:"mt-8",children:i.jsx(Hs,{href:"#contato",children:"Começar agora"})})]})}),i.jsxs("div",{className:"relative lg:col-span-7 lg:pl-12",children:[i.jsx("div",{className:"absolute bottom-8 left-[19px] top-8 w-px bg-white/12 lg:left-[67px]","aria-hidden":"true"}),i.jsx("div",{className:"space-y-0",children:ze.howItWorksSteps.map((s,r)=>i.jsxs("article",{className:"group relative grid grid-cols-[40px_1fr] gap-5 border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:grid-cols-[56px_1fr] lg:gap-8 lg:py-11",children:[i.jsx("div",{className:"relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#030406] text-xs font-black text-white transition-colors group-hover:border-[#f40b36] group-hover:text-[#f40b36] lg:h-14 lg:w-14",children:String(r+1).padStart(2,"0")}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:s.title}),i.jsx("p",{className:"mt-3 text-sm font-semibold text-white/75",children:s.description})]})]},s.step))})]})]})}),fv=[{id:"mensal",label:"Mensal",shortLabel:"Mensal"},{id:"semestral",label:"Semestral",shortLabel:"6 meses"},{id:"anual",label:"Anual",shortLabel:"12 meses"}],oN=({onSelectPlan:s})=>{const[r,c]=b.useState("anual"),d=f=>{var v;s==null||s(f.name,r),(v=document.getElementById("contato"))==null||v.scrollIntoView({behavior:"smooth"})},m=f=>{var y;const v=(y=fv.find(A=>A.id===r))==null?void 0:y.label,g=`Olá! Tenho interesse no Plano ${f.name}, período ${v}. Gostaria de receber mais informações.`;return`https://wa.me/${ze.company.whatsappRaw}?text=${encodeURIComponent(g)}`};return i.jsx("section",{id:"planos",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:i.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[i.jsx(Xs,{eyebrow:"Planos VM Mídias",title:"Escolha sua",accent:"presença",description:"Dois planos claros. Você escolhe a cobertura e o período ideal para o seu negócio.",className:"mb-9"}),i.jsx("div",{className:"mx-auto mb-10 flex max-w-xl rounded-lg border border-white/10 bg-[#0d0f13] p-1.5",children:fv.map(f=>i.jsxs("button",{type:"button",onClick:()=>c(f.id),"aria-pressed":r===f.id,className:`relative flex min-h-12 flex-1 flex-col items-center justify-center rounded-md px-2 text-center transition-colors ${r===f.id?"bg-[#f40b36] text-white":"text-white/52 hover:bg-white/[0.04] hover:text-white"}`,children:[i.jsx("span",{className:"text-xs font-black uppercase tracking-[0.1em]",children:f.shortLabel}),f.id==="anual"&&i.jsx("span",{className:`mt-0.5 text-[9px] font-bold uppercase ${r==="anual"?"text-white/75":"text-[#f40b36]"}`,children:"melhor valor"})]},f.id))}),i.jsx("div",{className:"mx-auto grid max-w-6xl overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 lg:gap-px",children:ze.plans.map(f=>{const v=f.id==="destaque",g=f.prices[r],y=f.features.slice(0,4);return i.jsxs("article",{className:`relative flex flex-col bg-[#0d0f13] p-7 sm:p-10 lg:p-12 ${v?"border-t-4 border-[#f40b36] lg:border-t-0 lg:border-l-4":""}`,children:[i.jsxs("div",{className:"flex items-start justify-between gap-4",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]",children:f.type}),i.jsxs("h3",{className:"mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl",children:["Plano ",f.name]})]}),v&&i.jsxs("span",{className:"flex shrink-0 items-center gap-1 bg-[#f40b36] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider text-white",children:[i.jsx(I2,{className:"h-3 w-3 fill-current"})," Mais escolhido"]})]}),i.jsx("p",{className:"mt-4 text-sm font-semibold text-white/62",children:f.coverage}),i.jsxs("div",{className:"my-8 border-y border-white/10 py-7",children:[i.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.14em] text-white/38",children:g.note}),i.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[i.jsx("span",{className:"mb-2 text-sm font-black text-[#f40b36]",children:"R$"}),i.jsx("span",{className:"text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl",children:g.price}),i.jsx("span",{className:"mb-2 text-sm text-white/45",children:g.period})]})]}),i.jsx("div",{className:"space-y-4",children:y.map(A=>i.jsxs("div",{className:"flex gap-3 text-sm leading-6 text-white/70",children:[i.jsx(Yt,{className:"mt-1 h-4 w-4 shrink-0 text-[#f40b36]"}),i.jsx("span",{children:A})]},A))}),i.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/48",children:[i.jsx(J2,{className:"h-4 w-4 shrink-0 text-[#f40b36]"}),i.jsxs("span",{children:["Vídeo animado opcional por ",f.optionalVideo[r]]})]}),i.jsxs("div",{className:"mt-auto pt-8",children:[i.jsxs("button",{type:"button",onClick:()=>d(f),className:`group flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.1em] transition-colors ${v?"bg-[#f40b36] text-white hover:bg-[#d90a31]":"border border-white/18 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`,children:["Escolher ",f.name," ",i.jsx(yt,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}),i.jsxs("a",{href:m(f),target:"_blank",rel:"noopener noreferrer",className:"mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/42 transition-colors hover:text-[#25D366]",children:[i.jsx(Nn,{className:"h-4 w-4"})," Tirar dúvidas pelo WhatsApp"]})]})]},f.id)})})]})})},pv=({item:s})=>{const r=s.icon;return i.jsx("article",{className:"group relative flex h-full min-h-[250px] flex-col border border-white/10 bg-[#08090d]/90 p-6 transition-colors duration-300 hover:border-[#ff143f]/45 hover:bg-[#0b0c11] sm:p-7",children:i.jsxs("div",{className:"flex items-start gap-5",children:[i.jsxs("div",{className:"shrink-0",children:[i.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff143f] text-[#ff143f] shadow-[0_0_24px_rgba(248,3,45,0.2)] transition-all duration-300 group-hover:bg-[#ff143f] group-hover:text-white",children:i.jsx(r,{className:"h-6 w-6","aria-hidden":"true"})}),i.jsx("span",{className:"mt-3 block text-center text-[10px] font-black tracking-[0.25em] text-[#5d606b]",children:s.number})]}),i.jsxs("div",{className:"min-w-0 pt-1",children:[i.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white lg:text-2xl",children:s.title}),i.jsx("span",{className:"my-4 block h-[3px] w-10 bg-[#ff143f] shadow-[0_0_12px_#f8032d]"}),i.jsx("p",{className:"max-w-lg text-sm leading-7 text-[#aeb0b8]",children:s.text})]})]})})},sN=({items:s,desktopColumns:r=3,mobileCarousel:c=!1})=>{const d=b.useRef(null),[m,f]=b.useState(0),v=r===2?"md:grid-cols-2":"md:grid-cols-3",g=A=>{var N;const E=Math.max(0,Math.min(s.length-1,A)),h=(N=d.current)==null?void 0:N.children[E];h==null||h.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),f(E)},y=()=>{const A=d.current;if(!A||A.clientWidth===0)return;const E=Math.round(A.scrollLeft/A.clientWidth);f(Math.max(0,Math.min(s.length-1,E)))};return c?i.jsxs("div",{children:[i.jsx("div",{ref:d,onScroll:y,className:`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 ${v}`,children:s.map(A=>i.jsx("div",{className:"min-w-full snap-center md:min-w-0",children:i.jsx(pv,{item:A})},A.id))}),i.jsxs("div",{className:"mt-5 flex items-center justify-between md:hidden",children:[i.jsx("button",{type:"button",onClick:()=>g(m-1),disabled:m===0,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver benefício anterior",children:i.jsx(zy,{className:"h-5 w-5"})}),i.jsx("div",{className:"flex items-center gap-2","aria-label":"Posição do carrossel",children:s.map((A,E)=>i.jsx("button",{type:"button",onClick:()=>g(E),className:`h-2 rounded-full transition-all ${E===m?"w-7 bg-[#ff143f]":"w-2 bg-white/20"}`,"aria-label":`Ver benefício ${E+1}`,"aria-current":E===m?"true":void 0},A.id))}),i.jsx("button",{type:"button",onClick:()=>g(m+1),disabled:m===s.length-1,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver próximo benefício",children:i.jsx(Fv,{className:"h-5 w-5"})})]})]}):i.jsx("div",{className:`grid grid-cols-1 gap-4 ${v}`,children:s.map(A=>i.jsx(pv,{item:A},A.id))})},rN=()=>{const s={CalendarCheck:Oy,MapPin:Qs,Repeat:M2,Coins:Yy,Palette:j2,Headphones:t2},r=ze.whyAdvertise.map((c,d)=>({id:c.id,number:String(d+1).padStart(2,"0"),title:c.title,text:c.description,icon:s[c.iconName]||Ls}));return i.jsx("section",{id:"por-que-anunciar",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:i.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[i.jsx(Xs,{eyebrow:"Vantagens VM Mídias",title:"Por que anunciar",accent:"com a VM Mídias",description:"Mais que mídia, resultados de visibilidade e autoridade para o seu negócio.",align:"left",className:"mb-14 lg:mb-20"}),i.jsx(sN,{items:r,desktopColumns:2,mobileCarousel:!0})]})})},cN=()=>{const[s,r]=b.useState(0),c=d=>{r(m=>m===d?null:d)};return i.jsx("section",{id:"faq",className:"relative py-24 lg:py-32 bg-[#030406] border-b border-white/10 overflow-hidden",children:i.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[i.jsx(Xs,{eyebrow:"Tire suas dúvidas",title:"Perguntas",accent:"frequentes",description:"Tudo o que você precisa saber antes de colocar sua marca nas telas.",className:"mb-16"}),i.jsx("div",{className:"border-t border-white/10",children:ze.faqs.map((d,m)=>{const f=s===m;return i.jsxs("div",{className:"overflow-hidden border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.025]",children:[i.jsxs("button",{type:"button",onClick:()=>c(m),className:"w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":f,children:[i.jsx("span",{className:"text-base sm:text-lg font-bold text-white leading-snug",children:d.question}),i.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ${f?"rotate-180 border-[#F8032D] text-[#F8032D]":"text-gray-400"}`,children:i.jsx(My,{className:"w-4 h-4"})})]}),f&&i.jsx("div",{className:"max-w-3xl pb-7 pr-12 text-sm leading-relaxed text-gray-300 animate-in fade-in duration-200",children:d.answer})]},m)})})]})})},uN=()=>i.jsxs("section",{className:"relative py-28 lg:py-40 bg-[#000000] border-b border-white/10 overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-indoor-space opacity-30 pointer-events-none"}),i.jsx("div",{className:"absolute inset-0 bg-black/70 pointer-events-none"}),i.jsx("div",{className:"absolute inset-0 bg-led-grid opacity-30 pointer-events-none"}),i.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none"}),i.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[i.jsx("div",{className:"mb-6 flex justify-center",children:i.jsx(Fa,{size:"sm",glow:!0})}),i.jsx(eo,{align:"center",className:"mb-6",children:"Oportunidade limitada de ponto"}),i.jsxs("h2",{className:"text-[clamp(2.8rem,6vw,6.5rem)] font-black text-white tracking-[-0.055em] leading-[0.94] uppercase mb-7",children:["SUA MARCA PODE SER ",i.jsx("br",{className:"hidden sm:inline"}),i.jsx("span",{className:"text-[#F8032D] text-led-glow",children:"A PRÓXIMA A APARECER."})]}),i.jsx("p",{className:"text-base sm:text-xl text-[#A9ACB3] max-w-2xl mx-auto leading-relaxed mb-10",children:"Coloque sua empresa nos pontos onde Capela do Alto realmente circula. Garanta frequência, visibilidade e resultados reais."}),i.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:i.jsx(Hs,{id:"cta-final-button",href:"#contato",className:"w-full sm:w-auto sm:px-10 sm:min-h-16",children:"Quero colocar minha marca em destaque"})})]})]}),dN=({selectedPlanName:s,selectedPlanCycle:r})=>{const[c,d]=b.useState({nome:"",empresa:"",plano:"PLANO DESTAQUE (Mais Escolhido)",mensagem:""}),[m,f]=b.useState({});b.useEffect(()=>{s&&d(E=>({...E,plano:s.toUpperCase()==="START"?"PLANO START (05 locais)":"PLANO DESTAQUE (Mais Escolhido)"}))},[s,r]);const v=E=>{const h=E.target.name;d(N=>({...N,[h]:E.target.value})),m[h]&&f(N=>({...N,[h]:void 0}))},g=E=>{E.preventDefault();const h={};if(c.nome.trim()||(h.nome="Informe seu nome."),c.mensagem.trim()||(h.mensagem="Escreva uma mensagem para continuar."),f(h),Object.keys(h).length>0)return;const N=["*CONTATO PELO SITE — VM MÍDIAS*","",`*Nome:* ${c.nome.trim()}`,c.empresa.trim()?`*Empresa:* ${c.empresa.trim()}`:"",`*Interesse:* ${c.plano}${r?` — ${r}`:""}`,`*Mensagem:* ${c.mensagem.trim()}`].filter(Boolean).join(`
`),U=`https://wa.me/${ze.company.whatsappRaw}?text=${encodeURIComponent(N)}`;window.open(U,"_blank","noopener,noreferrer")},y="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#f40b36] focus:ring-0",A=[{value:"PLANO DESTAQUE (Mais Escolhido)",label:"Destaque",detail:"10 locais"},{value:"PLANO START (05 locais)",label:"Start",detail:"5 locais"},{value:"PAINÉIS DE LED (Sob Medida)",label:"Painel de LED",detail:"sob medida"},{value:"OUTRO / TIRAR DÚVIDAS",label:"Tenho dúvidas",detail:"quero orientação"}];return i.jsx("section",{id:"contato",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:i.jsx("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:i.jsxs("div",{className:"grid gap-14 lg:grid-cols-12 lg:gap-20",children:[i.jsxs("div",{className:"lg:col-span-5",children:[i.jsx(eo,{children:"Contato direto"}),i.jsxs("h2",{className:"brand-section-title !text-[clamp(3.4rem,7vw,7rem)]",children:["Vamos",i.jsx("br",{}),"conversar."]}),i.jsx("p",{className:"mt-6 max-w-md text-base leading-7 text-white/58",children:"Conte o que sua marca precisa. Ao enviar, abriremos o WhatsApp da VM Mídias com a mensagem pronta."}),i.jsxs("div",{className:"mt-10 border-y border-white/10",children:[i.jsxs("a",{href:`https://wa.me/${ze.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4 border-b border-white/10 py-5",children:[i.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:i.jsx(Nn,{className:"h-5 w-5"})}),i.jsxs("span",{className:"flex-1",children:[i.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"WhatsApp comercial"}),i.jsx("span",{className:"mt-1 block font-bold text-white",children:ze.company.whatsappFormatted})]}),i.jsx(cv,{className:"h-4 w-4 text-white/35 transition-colors group-hover:text-[#25D366]"})]}),i.jsxs("div",{className:"flex items-center gap-4 py-5",children:[i.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:i.jsx(Qs,{className:"h-5 w-5"})}),i.jsxs("span",{children:[i.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"Atendimento local"}),i.jsx("span",{className:"mt-1 block font-bold text-white",children:ze.company.locationShort})]})]})]})]}),i.jsxs("div",{className:"lg:col-span-7 lg:pt-10",children:[i.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#f40b36]",children:"Mensagem rápida"}),i.jsx("h3",{className:"mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:"Fale direto com nosso time"})]}),i.jsx(Nn,{className:"hidden h-8 w-8 sm:block"})]}),i.jsxs("form",{onSubmit:g,noValidate:!0,className:"space-y-7",children:[i.jsxs("div",{className:"grid gap-7 sm:grid-cols-2",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"form-nome",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Seu nome"}),i.jsx("input",{id:"form-nome",name:"nome",type:"text",autoComplete:"name",value:c.nome,onChange:v,placeholder:"Como podemos chamar você?",className:`${y} ${m.nome?"!border-red-500":""}`,"aria-invalid":!!m.nome}),m.nome&&i.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[i.jsx(uv,{className:"h-3.5 w-3.5"}),m.nome]})]}),i.jsxs("div",{children:[i.jsxs("label",{htmlFor:"form-empresa",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:["Empresa"," ",i.jsx("span",{className:"font-normal normal-case text-white/30"})]}),i.jsx("input",{id:"form-empresa",name:"empresa",type:"text",autoComplete:"organization",value:c.empresa,onChange:v,placeholder:"Nome do seu negócio",className:y})]})]}),i.jsxs("fieldset",{children:[i.jsx("legend",{className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Qual é o seu interesse?"}),i.jsx("div",{className:"mt-3 grid grid-cols-2 gap-2",children:A.map(E=>{const h=c.plano===E.value;return i.jsxs("button",{type:"button",onClick:()=>d(N=>({...N,plano:E.value})),"aria-pressed":h,className:`min-h-16 rounded-md border px-3 py-3 text-left transition-colors ${h?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-white/[0.025] hover:border-white/28"}`,children:[i.jsx("span",{className:`block text-sm font-black ${h?"text-white":"text-white/68"}`,children:E.label}),i.jsx("span",{className:"mt-0.5 block text-[10px] uppercase tracking-wider text-white/32",children:E.detail})]},E.value)})})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"form-mensagem",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Sua mensagem"}),i.jsx("textarea",{id:"form-mensagem",name:"mensagem",rows:4,value:c.mensagem,onChange:v,placeholder:"Conte brevemente o que você quer divulgar...",className:`${y} resize-y ${m.mensagem?"!border-red-500":""}`,"aria-invalid":!!m.mensagem}),m.mensagem&&i.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[i.jsx(uv,{className:"h-3.5 w-3.5"}),m.mensagem]})]}),i.jsxs("button",{id:"contact-submit-button",type:"submit",className:"group flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041108] transition-colors hover:bg-[#38e478] sm:w-auto sm:min-w-72",children:[i.jsx(Nn,{className:"h-5 w-5"}),"Enviar pelo WhatsApp",i.jsx(cv,{className:"h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"})]})]})]})]})})})},mN=({onOpenPrivacyModal:s})=>{const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return i.jsx("footer",{id:"main-footer",className:"bg-[#0A0A0E] border-t border-[#1C1C26] text-white pt-16 pb-12",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E2A]",children:[i.jsxs("div",{className:"space-y-4",children:[i.jsx("a",{href:"#inicio",className:"inline-block","aria-label":"VM MÍDIAS",children:i.jsx(Fa,{size:"md"})}),i.jsx("p",{className:"text-xs text-[#F8032D] font-extrabold uppercase tracking-widest",children:ze.company.tagline}),i.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Rede de telas digitais e mídia indoor estratégica em Capela do Alto. Visibilidade constante e frequência que transformam marcas locais em referências."}),i.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[i.jsx("a",{href:ze.company.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-[#F8032D] hover:border-[#F8032D]/40 transition-all","aria-label":"Instagram da VM MÍDIAS",children:i.jsx(r2,{className:"w-4 h-4"})}),i.jsx("a",{href:`https://wa.me/${ze.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all","aria-label":"WhatsApp da VM MÍDIAS",children:i.jsx(Nn,{className:"w-4 h-4"})}),i.jsx("a",{href:`mailto:${ze.company.email}`,className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all","aria-label":"E-mail da VM MÍDIAS",children:i.jsx(mv,{className:"w-4 h-4"})})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Navegação"}),i.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[i.jsx("li",{children:i.jsx("a",{href:"#inicio",className:"hover:text-white transition-colors",children:"Início"})}),i.jsx("li",{children:i.jsx("a",{href:"#onde-estamos",className:"hover:text-white transition-colors",children:"Onde Estamos"})}),i.jsx("li",{children:i.jsx("a",{href:"#como-funciona",className:"hover:text-white transition-colors",children:"Como Funciona"})}),i.jsx("li",{children:i.jsx("a",{href:"#planos",className:"hover:text-white transition-colors",children:"Planos"})}),i.jsx("li",{children:i.jsx("a",{href:"#contato",className:"hover:text-white transition-colors",children:"Contato"})})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Presença Local"}),i.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx(Qs,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),i.jsxs("span",{children:[ze.company.locationShort," — Brasil"]})]}),i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx(e2,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),i.jsx("span",{children:ze.company.domain})]}),i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx(mv,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),i.jsx("span",{children:ze.company.email})]}),i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx(Nn,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),i.jsx("span",{children:"Atendimento comercial via WhatsApp"})]})]})]})]}),i.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[i.jsxs("div",{children:["© 2026 ",ze.company.name,". Todos os direitos reservados."]}),i.jsxs("div",{className:"flex items-center gap-6",children:[i.jsx("button",{type:"button",onClick:s,className:"text-gray-400 hover:text-white transition-colors underline underline-offset-4",children:"Política de Privacidade (LGPD)"}),i.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-1 text-gray-400 hover:text-[#F8032D] transition-colors","aria-label":"Voltar ao topo da página",children:[i.jsx("span",{children:"Topo"}),i.jsx(Sy,{className:"w-3.5 h-3.5"})]})]})]})]})})},fN=({customMessage:s})=>{const[r,c]=b.useState(!1),d=s||"Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.",m=`https://wa.me/${ze.company.whatsappRaw}?text=${encodeURIComponent(d)}`;return i.jsxs("div",{id:"floating-whatsapp-container",className:"fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto",children:[r&&i.jsxs("div",{className:"mb-3 max-w-xs bg-[#111116] border border-[#22222E] rounded-xl p-3.5 shadow-2xl shadow-black text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative",children:[i.jsx("button",{type:"button",onClick:()=>c(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-white","aria-label":"Fechar mensagem",children:i.jsx(Xn,{className:"w-3.5 h-3.5"})}),i.jsxs("div",{className:"font-bold text-white mb-1 flex items-center gap-1.5",children:[i.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Atendimento VM MÍDIAS"]}),i.jsx("p",{className:"text-gray-300",children:"Dúvidas sobre os planos START e DESTAQUE? Fale diretamente conosco pelo WhatsApp."})]}),i.jsxs("a",{id:"floating-whatsapp-button",href:m,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>c(!0),className:"group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400","aria-label":"Falar com a VM MÍDIAS no WhatsApp",children:[i.jsx("span",{className:"absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60"}),i.jsx(Nn,{className:"w-7 h-7 transition-transform group-hover:scale-110"}),i.jsx("span",{className:"absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0E]"})]})]})},bt="pt-3 text-base font-black text-white",Gu="list-disc space-y-1.5 pl-5 text-white/58",o0=()=>i.jsxs("div",{className:"space-y-4 text-sm leading-7 text-white/68",children:[i.jsxs("p",{children:["Esta Política explica como a"," ",i.jsx("strong",{className:"text-white",children:ze.company.legalName})," ","(“VM MÍDIAS”), na qualidade de controladora, trata dados pessoais de visitantes, interessados, clientes e representantes de empresas que usam o site ",ze.company.domain," e seus canais de atendimento."]}),i.jsx("p",{children:"O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e os princípios de finalidade, necessidade, transparência, segurança e prevenção."}),i.jsx("h4",{className:bt,children:"1. Dados que podemos coletar"}),i.jsx("p",{children:"Dependendo do canal utilizado, podemos receber:"}),i.jsxs("ul",{className:Gu,children:[i.jsx("li",{children:"nome, empresa, telefone/WhatsApp e e-mail;"}),i.jsx("li",{children:"plano, produto ou serviço de interesse e mensagens comerciais;"}),i.jsx("li",{children:"briefing de criação, tipo de peça, objetivo, textos, estilo, prazo, chamada para ação e informações que deverão aparecer na campanha;"}),i.jsx("li",{children:"arquivos enviados para criação de vídeos, como logos, fotos, referências, documentos e vídeos, além de links do Drive, Canva ou Dropbox;"}),i.jsx("li",{children:"protocolo, situação do atendimento e datas de criação e atualização do pedido;"}),i.jsx("li",{children:"dados técnicos essenciais, como registros de acesso e endereço IP, que podem ser processados pela hospedagem e pelos serviços de infraestrutura para segurança e funcionamento."})]}),i.jsx("p",{children:"Não solicitamos senhas, dados bancários ou dados pessoais sensíveis nos formulários. Não inclua esse tipo de informação no briefing ou nos links compartilhados."}),i.jsx("h4",{className:bt,children:"2. Para que usamos os dados"}),i.jsxs("ul",{className:Gu,children:[i.jsx("li",{children:"responder contatos, dúvidas e solicitações de orçamento;"}),i.jsx("li",{children:"apresentar planos, propostas e condições comerciais;"}),i.jsx("li",{children:"organizar, criar, revisar, aprovar e programar artes e vídeos contratados;"}),i.jsx("li",{children:"acompanhar o histórico e o andamento de cada solicitação;"}),i.jsx("li",{children:"prevenir abuso, fraude, spam e incidentes de segurança;"}),i.jsx("li",{children:"cumprir contratos e obrigações legais ou regulatórias."})]}),i.jsx("h4",{className:bt,children:"3. Bases legais"}),i.jsx("p",{children:"Conforme o contexto, o tratamento poderá ocorrer com base no consentimento, na execução de contrato ou de procedimentos preliminares solicitados pelo titular, no cumprimento de obrigação legal ou regulatória e no legítimo interesse da VM MÍDIAS, sempre respeitando os direitos e as expectativas do titular."}),i.jsx("h4",{className:bt,children:"4. Armazenamento e compartilhamento"}),i.jsx("p",{children:"Os dados podem ser tratados pela equipe da VM MÍDIAS e por fornecedores necessários à operação, estritamente para as finalidades desta Política, incluindo:"}),i.jsxs("ul",{className:Gu,children:[i.jsx("li",{children:"HostGator, responsável pela hospedagem do site;"}),i.jsx("li",{children:"Supabase, utilizado para registrar solicitações e armazenar de forma privada os materiais enviados para produção;"}),i.jsx("li",{children:"n8n, quando utilizado para automatizar o fluxo interno de atendimento;"}),i.jsx("li",{children:"WhatsApp/Meta, quando o visitante decide iniciar atendimento por esse canal;"}),i.jsx("li",{children:"serviços escolhidos pelo cliente para compartilhar arquivos por link, sujeitos às próprias políticas de privacidade."})]}),i.jsx("p",{children:"A VM MÍDIAS não vende nem aluga dados pessoais. Alguns fornecedores podem utilizar infraestrutura localizada fora do Brasil; nesses casos, buscamos utilizar serviços reconhecidos e medidas compatíveis com a legislação aplicável."}),i.jsx("h4",{className:bt,children:"5. Prazo de conservação"}),i.jsx("p",{children:"Mantemos os dados somente pelo tempo necessário para atender a solicitação, executar a relação comercial, preservar o histórico de criação e cumprir obrigações legais. Depois desse período, eles poderão ser eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida por lei."}),i.jsx("h4",{className:bt,children:"6. Cookies, recursos técnicos e links externos"}),i.jsx("p",{children:"O site utiliza recursos técnicos necessários para navegação, segurança e envio dos formulários. Não utilizamos os dados dos formulários para vender perfis de publicidade. Links externos, como Instagram, WhatsApp, Drive, Canva ou Dropbox, passam a seguir as políticas dos respectivos serviços quando acessados."}),i.jsx("h4",{className:bt,children:"7. Segurança"}),i.jsx("p",{children:"Adotamos controles compatíveis com o porte e a natureza da operação para reduzir riscos de acesso não autorizado, alteração, perda ou divulgação indevida. Nenhum sistema é completamente imune a incidentes, mas revisamos acessos e integrações para limitar o tratamento ao necessário."}),i.jsx("h4",{className:bt,children:"8. Direitos do titular"}),i.jsx("p",{children:"Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando aplicável, portabilidade conforme regulamentação, oposição, revogação do consentimento e revisão de decisões exclusivamente automatizadas que afetem seus interesses."}),i.jsx("h4",{className:bt,children:"9. Como falar sobre seus dados"}),i.jsxs("p",{children:["Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail"," ",i.jsx("strong",{className:"text-white",children:ze.company.email})," ou pelo WhatsApp oficial ",ze.company.whatsappFormatted,". Podemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger os dados envolvidos."]}),i.jsx("h4",{className:bt,children:"10. Atualizações desta Política"}),i.jsx("p",{children:"Esta Política poderá ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão disponíveis nesta página."})]}),pN=({isOpen:s,onClose:r})=>s?i.jsx("div",{id:"privacy-policy-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",children:i.jsxs("div",{className:"relative w-full max-w-3xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto",children:[i.jsx("button",{type:"button",onClick:r,className:"absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A24] transition-colors","aria-label":"Fechar Política de Privacidade",children:i.jsx(Xn,{className:"w-5 h-5"})}),i.jsxs("div",{className:"flex items-center gap-3 mb-6 pb-4 border-b border-[#22222E]",children:[i.jsx("div",{className:"p-2.5 rounded-lg bg-[#F8032D]/10 text-[#F8032D] border border-[#F8032D]/20",children:i.jsx(dd,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h3",{id:"privacy-modal-title",className:"text-xl font-black text-white",children:"Política de Privacidade & LGPD"}),i.jsx("p",{className:"text-xs text-gray-400",children:"Atualizado em 28 de setembro de 2026."})]})]}),i.jsx(o0,{}),i.jsx("div",{className:"mt-8 pt-4 border-t border-[#22222E] flex justify-end",children:i.jsx("button",{type:"button",onClick:r,className:"px-6 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white font-bold text-sm shadow-led-sm transition-all",children:"Entendido e Fechar"})})]})}):null;function hN(){return b.useEffect(()=>{const s=document.title;return document.title="Política de Privacidade | VM MÍDIAS",()=>{document.title=s}},[]),i.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[i.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:i.jsxs("div",{className:"mx-auto flex h-[76px] max-w-5xl items-center justify-between px-5 sm:px-8",children:[i.jsx("a",{href:"/","aria-label":"Voltar ao site da VM MÍDIAS",children:i.jsx(Fa,{size:"sm"})}),i.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white",children:[i.jsx(Xi,{className:"h-4 w-4"}),i.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})}),i.jsx("main",{className:"px-5 py-12 sm:px-8 sm:py-16",children:i.jsxs("article",{className:"brand-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-10 lg:p-12",children:[i.jsxs("header",{className:"mb-8 flex items-start gap-4 border-b border-white/10 pb-7",children:[i.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]",children:i.jsx(dd,{className:"h-6 w-6"})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Transparência e LGPD"}),i.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:"Política de Privacidade"}),i.jsx("p",{className:"mt-2 text-xs text-white/40",children:"Atualizada em 29 de setembro de 2026."})]})]}),i.jsx(o0,{})]})})]})}const vN=`Act like um Diretor Criativo Sênior, Motion Designer, Diretor de Arte, Especialista em Lettering Animado, Branding e Prompt Engineer especializado em criação de publicidade audiovisual para MÍDIA INDOOR e geração de vídeo por IA no Google Flow.

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

Take a deep breath and work on this problem step-by-step.`,gN=`Act like a Senior Advertising Art Director, Creative Director, Indoor Media Specialist, Visual Key Designer, Typography & Lettering Director, Brand Designer and AI Image Prompt Engineer with extensive experience creating high-impact advertising campaigns for digital indoor media, vertical displays, digital signage, retail screens, elevator screens, shopping mall panels, corporate displays, supermarket screens, clinics, gyms, waiting areas, restaurants, stores and high-traffic indoor environments.

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

Take a deep breath and work on this problem step-by-step.`;function s0(s,r){const c=s==null?void 0:s.trim();if(!c)throw new Error(`Configuração do Supabase ausente. Defina ${r} no arquivo .env.`);return c}const la=s0("https://dtmoboiwgqaphlthoexe.supabase.co","VITE_SUPABASE_URL"),ga=s0("sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M","VITE_SUPABASE_PUBLISHABLE_KEY"),md="video-request-assets",$s="business-assets",Zs="vm-admin-supabase-session",xN=md,r0=$s,hv="vm-manual-news-refresh-v1";function c0(s){const r=s.lastIndexOf("."),c=r>=0?s.slice(r).toLowerCase():"";return`${(r>=0?s.slice(0,r):s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||"arquivo"}${c.replace(/[^a-z0-9.]/g,"")}`}function ao(s){return s.split("/").map(encodeURIComponent).join("/")}async function bN(s,r,c){const d=`solicitacoes/${c}`,m=r.map(async(f,v)=>{const g=`${d}/${s}/${String(v+1).padStart(2,"0")}-${c0(f.name)}`,y=await fetch(`${la}/storage/v1/object/${md}/${ao(g)}`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${ga}`,"Content-Type":f.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:f});if(!y.ok){const A=await y.text();throw console.error("Falha ao enviar material do vídeo:",A),new Error(`Não foi possível enviar o arquivo “${f.name}”. Verifique o formato e tente novamente.`)}return{path:g,name:f.name,size:f.size,mime_type:f.type||"application/octet-stream"}});return Promise.all(m)}async function u0(s,r,c=0){const d=r.map(async(m,f)=>{const v=`negocios/${s}/${String(c+f+1).padStart(2,"0")}-${crypto.randomUUID().slice(0,8)}-${c0(m.name)}`;if(!(await fetch(`${la}/storage/v1/object/${$s}/${ao(v)}`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${ga}`,"Content-Type":m.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:m})).ok)throw new Error(`Não foi possível enviar “${m.name}”.`);return{path:v,name:m.name,size:m.size,mime_type:m.type||"application/octet-stream"}});return Promise.all(d)}function Zn(s){return`${la}/storage/v1/object/public/${$s}/${ao(s)}`}async function yN(s){if(!(await fetch(`${la}/rest/v1/rpc/create_business_secure`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${ga}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:s.id,p_name:s.name,p_whatsapp:s.whatsapp,p_instagram:s.instagram,p_address:s.address,p_segment:s.segment,p_description:s.description,p_assets:s.assets,p_consent:s.consent})})).ok)throw new Error("Não foi possível cadastrar o negócio agora.")}async function d0(){const s=await fetch(`${la}/rest/v1/rpc/list_businesses_public`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${ga}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!s.ok)throw new Error("Não foi possível carregar os negócios. Aplique a nova migração no Supabase.");return await s.json()}async function NN(s,r,c){const d=await fetch(`${la}/rest/v1/rpc/update_business_secure`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${ga}`,"Content-Type":"application/json"},body:JSON.stringify({p_business_id:s,p_name:r.name,p_whatsapp:r.whatsapp,p_instagram:r.instagram,p_address:r.address,p_segment:r.segment,p_description:r.description,p_new_assets:c})});if(!d.ok){const m=await d.text();throw/LIMITE_IMAGENS/i.test(m)?new Error("O negócio pode possuir no máximo 10 imagens."):new Error("Não foi possível atualizar as informações do negócio.")}}async function EN(s){const r=await fetch(`${la}/rest/v1/rpc/create_video_request_secure`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${ga}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:s.id,p_protocol:s.protocol,p_business_id:s.business_id,p_campaign_objective:s.campaign_objective,p_objective_other:s.objective_other,p_video_idea:s.video_idea,p_uploaded_assets:s.uploaded_assets,p_consent:s.consent})});if(!r.ok){const c=await r.text();throw console.error("Falha ao registrar solicitação de vídeo:",c),new Error("Não foi possível registrar sua solicitação agora.")}}function fd(){try{const s=localStorage.getItem(Zs);if(!s)return null;const r=JSON.parse(s);return!r.access_token||!r.expires_at?null:r}catch{return null}}function Yi(){localStorage.removeItem(Zs)}async function pd(s){const r=await fetch(`${la}/rest/v1/rpc/is_vm_admin`,{method:"POST",headers:{apikey:ga,Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!r.ok)throw r.status===404?new Error("A proteção administrativa ainda não foi instalada no Supabase."):new Error("Não foi possível verificar a permissão administrativa.");if(await r.json()!==!0)throw new Error("Este usuário não possui acesso administrativo.")}async function hd(s,r){const c=await fetch(`${la}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:ga,"Content-Type":"application/json"},body:JSON.stringify({email:s,password:r})});if(!c.ok){let f="";try{const v=await c.json();f=String((v==null?void 0:v.msg)||(v==null?void 0:v.message)||(v==null?void 0:v.error_description)||"")}catch{}throw/email not confirmed/i.test(f)?new Error("Este usuário ainda não confirmou o e-mail no Supabase."):new Error("E-mail ou senha inválidos.")}const d=await c.json(),m={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(d.expires_in||3600),user:d.user};return await pd(m.access_token),localStorage.setItem(Zs,JSON.stringify(m)),m}async function jN(s){const r=await fetch(`${la}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:ga,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})});if(!r.ok)throw Yi(),new Error("Sua sessão expirou. Entre novamente.");const c=await r.json(),d={access_token:c.access_token,refresh_token:c.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(c.expires_in||3600),user:c.user};return await pd(d.access_token),localStorage.setItem(Zs,JSON.stringify(d)),d}async function $l(s){return s.expires_at>Math.floor(Date.now()/1e3)+60?(await pd(s.access_token),s):jN(s)}function $n(s){return{apikey:ga,Authorization:`Bearer ${s}`}}async function SN(s){const r=await fetch(`${la}/rest/v1/video_requests?select=*&order=created_at.desc`,{headers:$n(s),cache:"no-store"});if(!r.ok)throw r.status===401?new Error("Sua sessão expirou. Entre novamente."):new Error("Não foi possível carregar as solicitações. Confira as permissões do Supabase.");return await r.json()}async function AN(s){const r=await fetch(`${la}/rest/v1/businesses?select=id,name,whatsapp,instagram,address,segment,description,assets,consent,created_at,updated_at&order=name.asc`,{headers:$n(s),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar os negócios no painel.");return await r.json()}function wN(s=new Date){const r=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(s).filter(m=>m.type!=="literal").map(m=>[m.type,Number(m.value)])),c=Date.UTC(r.year,r.month-1,r.day);let d=c;for(let m=0;m<2;m+=1){const f=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(new Date(d)).filter(g=>g.type!=="literal").map(g=>[g.type,Number(g.value)])),v=Date.UTC(f.year,f.month-1,f.day,f.hour,f.minute,f.second);d=c-(v-Math.floor(d/1e3)*1e3)}return new Date(d).toISOString()}async function ON(s){const r=wN(),c=await fetch(`${la}/rest/v1/news_articles?select=*&published_at=gte.${encodeURIComponent(r)}&order=published_at.desc`,{headers:$n(s),cache:"no-store"});if(!c.ok)throw c.status===404?new Error("O painel de notícias ainda não foi instalado no Supabase. Execute a migração 202610190001_news_moderation_queue.sql."):new Error("Não foi possível carregar a fila de notícias.");return await c.json()}async function m0(s,r,c){const d=await fetch(`${la}/rest/v1/rpc/moderate_news_article_admin`,{method:"POST",headers:{...$n(s),"Content-Type":"application/json"},body:JSON.stringify({p_article_id:r,p_decision:c})});if(!d.ok)throw d.status===401?new Error("Sua sessão expirou. Entre novamente."):d.status===404?new Error("A aprovação de notícias ainda não foi instalada no Supabase."):new Error("Não foi possível atualizar esta notícia.")}async function TN(s,r){await m0(s,r,"approved")}async function CN(s,r,c){const d=await fetch(`${la}/rest/v1/rpc/remove_business_asset_admin`,{method:"POST",headers:{...$n(s),"Content-Type":"application/json"},body:JSON.stringify({p_business_id:r,p_asset_path:c})});if(!d.ok)throw d.status===401?new Error("Sua sessão expirou. Entre novamente."):d.status===404?new Error("A exclusão ainda não foi ativada no Supabase. Execute a migração 202610060001_delete_business_assets_admin.sql."):new Error("Não foi possível excluir esta imagem do negócio.");const m=await fetch(`${la}/storage/v1/object/${$s}/${ao(c)}`,{method:"DELETE",headers:$n(s)});!m.ok&&m.status!==404&&console.warn("A imagem saiu do cadastro, mas o arquivo não pôde ser removido do Storage.")}async function f0(s,r,c=3600){const d=await fetch(`${la}/storage/v1/object/sign/${md}/${ao(r)}`,{method:"POST",headers:{...$n(s),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:c})});if(!d.ok)throw new Error("Não foi possível abrir este arquivo.");const m=await d.json(),f=m.signedURL||m.signedUrl;if(!f)throw new Error("O Supabase não retornou o link do arquivo.");return f.startsWith("http")?f:`${la}/storage/v1${f}`}const p0={institucional:"Publicidade institucional da marca",produto_servico:"Divulgar determinado produto ou serviço",promocao:"Promoção exclusiva e/ou inédita",fortalecer_marca:"Fortalecer a marca",visita_estabelecimento:"Incentivar a visita no estabelecimento",outro:"Outro"};function vv(s){return s==null||s===""||Array.isArray(s)&&s.length===0||typeof s=="object"&&s!==null&&Object.keys(s).length===0}function Is(s){return Array.isArray(s)?s.map(Is).filter(r=>!vv(r)):s&&typeof s=="object"?Object.fromEntries(Object.entries(s).filter(([,r])=>!vv(r)).map(([r,c])=>[r,Is(c)])):s}function RN(s){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(s))}function _N(s,r,c){return Is({negocio:{id:s.id,nome:s.name,whatsapp:s.whatsapp,instagram:s.instagram,endereco:s.address,segmento:s.segment,descricao:s.description,imagens:s.assets.map(d=>({nome:d.name,caminho_bucket:`${r0}/${d.path}`,url:Zn(d.path),tipo:d.mime_type})),cadastrado_em:s.created_at},solicitacao_video:{id:r.id,protocolo:r.protocol,objetivo:p0[r.campaign_objective||""]||r.campaign_objective,outro_objetivo:r.objective_other,descricao_do_video:r.video_idea,imagens_adicionais:r.uploaded_assets.map(d=>({nome:d.name,caminho_bucket:`${xN}/${d.path}`,url:c[d.path],url_valida_por:"7 dias",tipo:d.mime_type})),formato:"Vertical 9:16",duracao_segundos:r.duration_seconds,status:r.status,solicitado_em:r.created_at},prompt_para_ia:vN.trim()})}function MN(s){return Is({negocio:{id:s.id,nome:s.name,whatsapp:s.whatsapp,instagram:s.instagram,endereco:s.address,segmento:s.segment,descricao:s.description,imagens:s.assets.map(r=>({nome:r.name,caminho_bucket:`${r0}/${r.path}`,url:Zn(r.path),tipo:r.mime_type})),cadastrado_em:s.created_at},prompt_para_visual_key:gN.trim()})}function gv(){const[s,r]=b.useState(()=>fd()),[c,d]=b.useState([]),[m,f]=b.useState([]),[v,g]=b.useState(""),[y,A]=b.useState(""),[E,h]=b.useState(!!s),[N,U]=b.useState(""),I=async q=>{h(!0),U("");try{const Y=await $l(q);r(Y);const[H,oe]=await Promise.all([AN(Y.access_token),SN(Y.access_token)]);d(H),f(oe)}catch(Y){const H=Y instanceof Error?Y.message:"Não foi possível carregar o painel.";U(H),(H.includes("sessão")||H.includes("administrativ")||H.includes("permissão"))&&(Yi(),r(null))}finally{h(!1)}};b.useEffect(()=>{document.title="Painel administrativo | VM MÍDIAS",s&&I(s)},[]);const k=b.useMemo(()=>{const q=c.map(H=>({business:H,requests:m.filter(oe=>oe.business_id===H.id)})),Y=y.trim().toLocaleLowerCase("pt-BR");return Y?q.filter(({business:H})=>`${H.name} ${H.segment}`.toLocaleLowerCase("pt-BR").includes(Y)):q},[c,y,m]),B=k.find(q=>q.business.id===v)||null;return s?i.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[i.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:i.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[i.jsxs("div",{className:"flex items-center gap-5",children:[i.jsx("a",{href:"/",children:i.jsx(Fa,{size:"sm"})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),i.jsx("h1",{className:"font-black",children:"Negócios e solicitações"})]})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("a",{href:"/admin/verao-premiado","aria-label":"Verão Premiado 2027",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx("span",{className:"text-[#ffcc0b]",children:"☀"}),i.jsx("span",{className:"hidden md:inline",children:"Verão 2027"})]}),i.jsxs("a",{href:"/admin/noticias","aria-label":"Aprovação de notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx(t0,{className:"h-4 w-4"}),i.jsx("span",{className:"hidden sm:inline",children:"Notícias"})]}),i.jsxs("button",{onClick:()=>void I(s),disabled:E,className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx(ud,{className:`h-4 w-4 ${E?"animate-spin":""}`}),i.jsx("span",{className:"hidden sm:inline",children:"Atualizar"})]}),i.jsxs("button",{onClick:()=>{Yi(),r(null)},className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx(cd,{className:"h-4 w-4"}),i.jsx("span",{className:"hidden sm:inline",children:"Sair"})]})]})]})}),i.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[i.jsxs("section",{className:"flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Painel de clientes"}),i.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Um card para cada negócio."})]}),i.jsxs("label",{className:"relative block w-full max-w-md",children:[i.jsx(Ps,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),i.jsx("input",{value:y,onChange:q=>A(q.target.value),className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]",placeholder:"Buscar negócio"})]})]}),N&&i.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:N}),E&&!c.length?i.jsx("div",{className:"flex min-h-64 items-center justify-center",children:i.jsx(pa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):B?i.jsx(zN,{group:B,session:s,onBack:()=>g(""),onBusinessUpdated:q=>d(Y=>Y.map(H=>H.id===q.id?q:H))}):k.length?i.jsx("section",{className:"mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",children:k.map(q=>i.jsx(DN,{group:q,onOpen:()=>g(q.business.id)},q.business.id))}):i.jsx("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhum negócio cadastrado."})]})]}):i.jsx(vd,{loading:E,error:N,onLogin:async(q,Y)=>{h(!0),U("");try{const H=await hd(q,Y);r(H),await I(H)}catch(H){U(H instanceof Error?H.message:"Não foi possível entrar.")}finally{h(!1)}}})}function DN({group:s,onOpen:r}){const c=s.business.assets[0];return i.jsxs("button",{onClick:r,className:"group rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-1 hover:border-[#f40b36]/55",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:c?i.jsx("img",{src:Zn(c.path),alt:"",className:"h-full w-full object-contain p-2"}):i.jsx($i,{className:"h-7 w-7 text-white/30"})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("h3",{className:"truncate text-xl font-black",children:s.business.name}),i.jsx("p",{className:"mt-1 truncate text-sm text-white/45",children:s.business.segment})]}),i.jsx(Fv,{className:"h-5 w-5 text-white/30 group-hover:text-[#ff3155]"})]}),i.jsx("div",{className:"mt-5 border-t border-white/10 pt-4",children:i.jsxs("span",{className:"rounded-full border border-[#f40b36]/25 bg-[#f40b36]/10 px-3 py-1.5 text-xs font-black text-[#ff6a82]",children:[s.requests.length," ",s.requests.length===1?"solicitação":"solicitações"]})})]})}function zN({group:s,session:r,onBack:c,onBusinessUpdated:d}){const m=s.business,[f,v]=b.useState(!1),[g,y]=b.useState(""),[A,E]=b.useState(""),[h,N]=b.useState(""),U=async()=>{y("");try{await navigator.clipboard.writeText(JSON.stringify(MN(m),null,2)),v(!0),window.setTimeout(()=>v(!1),1800)}catch{y("Não foi possível copiar o JSON para a área de transferência.")}},I=async k=>{if(window.confirm(`Deseja realmente excluir a imagem “${k.name}”? Esta ação não poderá ser desfeita.`)){E(k.path),N("");try{await CN(r.access_token,m.id,k.path),d({...m,assets:m.assets.filter(q=>q.path!==k.path),updated_at:new Date().toISOString()})}catch(q){N(q instanceof Error?q.message:"Não foi possível excluir esta imagem.")}finally{E("")}}};return i.jsxs("section",{className:"mt-7",children:[i.jsxs("button",{onClick:c,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[i.jsx(Xi,{className:"h-4 w-4"}),"Todos os negócios"]}),i.jsxs("div",{className:"mt-5 rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[i.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[i.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[i.jsx("div",{className:"flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:m.assets[0]?i.jsx("img",{src:Zn(m.assets[0].path),alt:"",className:"h-full w-full object-contain p-2"}):i.jsx($i,{className:"h-8 w-8 text-white/30"})}),i.jsxs("div",{children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[0.16em] text-[#ff3155]",children:"Negócio"}),i.jsx("h2",{className:"mt-1 text-3xl font-black sm:text-4xl",children:m.name}),i.jsx("p",{className:"mt-2 text-sm text-white/50",children:[m.segment,m.whatsapp,m.instagram,m.address].filter(Boolean).join(" · ")})]})]}),i.jsxs("button",{type:"button",onClick:()=>void U(),className:"inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-5 text-center text-xs font-black uppercase leading-tight tracking-[0.08em] transition hover:bg-[#ff3155]",children:[f?i.jsx(Yt,{className:"h-4 w-4"}):i.jsx(Jv,{className:"h-4 w-4"}),f?"JSON copiado":"Copiar JSON para Visual Key"]})]}),g&&i.jsx("p",{className:"mt-4 text-sm text-red-300",children:g}),m.description&&i.jsx("p",{className:"mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60",children:m.description}),i.jsx(h0,{assets:m.assets,publicAssets:!0,deletingPath:A,onDelete:k=>void I(k)}),h&&i.jsx("p",{className:"mt-4 text-sm text-red-300",children:h})]}),i.jsx("h3",{className:"mt-8 text-2xl font-black",children:"Solicitações deste negócio"}),s.requests.length?i.jsx("div",{className:"mt-5 grid gap-5 xl:grid-cols-2",children:s.requests.map(k=>i.jsx(UN,{business:m,request:k,session:r},k.id))}):i.jsx("div",{className:"mt-5 rounded-xl border border-dashed border-white/15 p-12 text-center text-white/45",children:"Este negócio ainda não solicitou vídeos."})]})}function UN({business:s,request:r,session:c}){const[d,m]=b.useState(!1),[f,v]=b.useState(!1),[g,y]=b.useState(""),A=async()=>{v(!0),y("");try{const E=await Promise.all(r.uploaded_assets.map(async h=>[h.path,await f0(c.access_token,h.path,604800)]));await navigator.clipboard.writeText(JSON.stringify(_N(s,r,Object.fromEntries(E)),null,2)),m(!0),window.setTimeout(()=>m(!1),1800)}catch(E){y(E instanceof Error?E.message:"Não foi possível gerar o JSON.")}finally{v(!1)}};return i.jsxs("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:[i.jsxs("header",{className:"flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between",children:[i.jsxs("div",{children:[i.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase text-white/60",children:r.status}),i.jsx("h4",{className:"mt-4 text-xl font-black",children:p0[r.campaign_objective||""]||"Novo vídeo"}),i.jsxs("p",{className:"mt-2 text-xs text-white/40",children:[r.protocol," · ",RN(r.created_at)]})]}),i.jsxs("button",{onClick:()=>void A(),disabled:f,className:"inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase tracking-[0.08em] disabled:opacity-60",children:[f?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):d?i.jsx(Yt,{className:"h-4 w-4"}):i.jsx(Jv,{className:"h-4 w-4"}),f?"Gerando URLs":d?"JSON copiado":"Copiar JSON"]})]}),i.jsxs("div",{className:"p-5",children:[r.video_idea&&i.jsx("p",{className:"text-sm leading-7 text-white/65",children:r.video_idea}),r.objective_other&&i.jsxs("p",{className:"mt-3 text-sm text-white/55",children:["Outro objetivo: ",r.objective_other]}),r.uploaded_assets.length>0&&i.jsx(h0,{assets:r.uploaded_assets,accessToken:c.access_token}),g&&i.jsx("p",{className:"mt-4 text-xs text-red-300",children:g})]})]})}function h0({assets:s,accessToken:r,publicAssets:c=!1,deletingPath:d="",onDelete:m}){const[f,v]=b.useState(()=>c?Object.fromEntries(s.map(g=>[g.path,Zn(g.path)])):{});return b.useEffect(()=>{c||!r||Promise.all(s.map(async g=>[g.path,await f0(r,g.path,3600)])).then(g=>v(Object.fromEntries(g))).catch(()=>{})},[r,s,c]),i.jsx("div",{className:"mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",children:s.map(g=>{const y=f[g.path];return i.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/25 p-2",children:[g.mime_type.startsWith("image/")&&y?i.jsx("img",{src:y,alt:g.name,className:"h-24 w-full rounded-lg object-cover"}):i.jsx("div",{className:"flex h-24 items-center justify-center",children:i.jsx(a0,{className:"h-7 w-7 text-white/30"})}),i.jsx("span",{className:"mt-2 block truncate text-[11px] font-bold text-white/70",children:g.name}),y&&i.jsxs("a",{href:y,download:g.name,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-[10px] font-black uppercase text-white/70 hover:border-[#f40b36]/55",children:[i.jsx(Wl,{className:"h-3.5 w-3.5"}),"Baixar"]}),m&&i.jsxs("button",{type:"button",onClick:()=>m(g),disabled:!!d,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-red-400/25 bg-red-400/10 text-[10px] font-black uppercase text-red-200 transition hover:border-red-400/60 hover:bg-red-400/15 disabled:cursor-wait disabled:opacity-50",children:[d===g.path?i.jsx(pa,{className:"h-3.5 w-3.5 animate-spin"}):i.jsx(l0,{className:"h-3.5 w-3.5"}),d===g.path?"Excluindo":"Excluir imagem"]})]},g.path)})})}function vd({onLogin:s,loading:r,error:c}){const[d,m]=b.useState(""),[f,v]=b.useState(""),g=y=>{y.preventDefault(),s(d.trim(),f)};return i.jsxs("div",{className:"min-h-screen bg-[#050609] px-5 py-10 text-white",children:[i.jsxs("a",{href:"/",className:"mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-white/55",children:[i.jsx(Xi,{className:"h-4 w-4"}),"Voltar ao site"]}),i.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center",children:i.jsxs("form",{onSubmit:g,className:"w-full rounded-2xl border border-white/12 bg-[#0d0f13] p-6 sm:p-9",children:[i.jsx(Fa,{size:"md"}),i.jsx(dv,{className:"mt-8 h-10 w-10 text-[#ff3155]"}),i.jsx("p",{className:"mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Acesso restrito"}),i.jsx("h1",{className:"mt-2 text-3xl font-black",children:"Painel administrativo"}),i.jsxs("label",{className:"mt-7 block text-sm font-bold",children:["E-mail",i.jsx("input",{required:!0,type:"email",value:d,onChange:y=>m(y.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),i.jsxs("label",{className:"mt-5 block text-sm font-bold",children:["Senha",i.jsx("input",{required:!0,type:"password",value:f,onChange:y=>v(y.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),c&&i.jsx("p",{className:"mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100",children:c}),i.jsxs("button",{disabled:r,className:"brand-button brand-button-primary mt-6 w-full",children:[r?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):i.jsx(dv,{className:"h-4 w-4"}),"Entrar no painel"]})]})})]})}const xv={pending:"Avaliar para Stories",approved:"Fila de Stories",published:"Publicadas nos Stories",rejected:"Fora dos Stories"},qN={waiting_approval:"Aguardando aprovação",queued:"Na fila",publishing:"Publicando agora",published:"Publicada no Instagram",failed:"Tentará novamente",needs_review:"Requer conferência",skipped:"Fora da fila"};function Zl(s){return s.moderation_status==="pending"?"pending":s.moderation_status==="rejected"?"rejected":s.story_status==="published"?"published":"approved"}function LN(s){return s?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(s)):""}const kN=/(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;function Ku(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function bv(s){const r={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'};let c=String(s||"").replace(/<!\[CDATA\[|\]\]>/gi,"");for(let d=0;d<3;d+=1){const m=c;if(c=c.replace(/&#(x?[0-9a-f]+);/gi,(f,v)=>{const g=Number.parseInt(v.replace(/^x/i,""),/^x/i.test(v)?16:10);return Number.isFinite(g)&&g<=1114111?String.fromCodePoint(g):f}).replace(/&(amp|apos|gt|lt|nbsp|quot);/gi,(f,v)=>r[v.toLowerCase()]),c===m)break}return c.replace(/\s+/g," ").trim()}function BN(s){return{...s,title:bv(s.title),summary:bv(s.summary)||null}}function HN(s){const r=Ku(s.title),c=Ku(`${s.title} ${s.summary||""}`),d=/\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;return!(/^videos?\s*:/.test(r)||/\b(assista|acompanhe|veja)\b/.test(c)&&/\b(videos?|jornal|edicao)\b/.test(c)||d.test(c)&&/\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(c)||/^ao vivo\s*:/.test(r))}function gd(s){return/^https?:\/\//i.test(s.image_url||"")&&!kN.test(s.image_url||"")}function IN(s){const r=Date.now()-1728e5,c=new Set,d=new Map,m=[];for(const f of s){if(Zl(f)!=="pending"||!gd(f)||!HN(f))continue;const v=Date.parse(f.published_at);if(Number.isFinite(v)&&v<r)continue;const g=Ku(f.title).trim();if(!g||c.has(g))continue;const y=d.get(f.source_name)||0;if(!(y>=3)&&(c.add(g),d.set(f.source_name,y+1),m.push(f),m.length>=24))break}return m}function VN(){const[s,r]=b.useState(()=>fd()),[c,d]=b.useState([]),[m,f]=b.useState("pending"),[v,g]=b.useState(!!s),[y,A]=b.useState(!1),[E,h]=b.useState(""),[N,U]=b.useState(""),[I,k]=b.useState(""),[B,q]=b.useState(""),[Y,H]=b.useState(""),oe=async P=>{g(!0),H("");try{const se=await $l(P);r(se);const de=await ON(se.access_token),qe=de.find(Ie=>Ie.external_id===hv);U((qe==null?void 0:qe.id)||""),d(de.filter(Ie=>Ie.external_id!==hv).map(BN))}catch(se){const de=se instanceof Error?se.message:"Não foi possível carregar as notícias.";H(de),(de.includes("sessão")||de.includes("administrativ")||de.includes("permissão"))&&(Yi(),r(null))}finally{g(!1)}};b.useEffect(()=>{document.title="Stories de notícias | VM MÍDIAS",s&&oe(s)},[]),b.useEffect(()=>{if(!s)return;const P=window.setInterval(()=>void oe(s),6e4);return()=>window.clearInterval(P)},[s==null?void 0:s.access_token]);const ue=b.useMemo(()=>IN(c),[c]),J=b.useMemo(()=>{const P=c.reduce((se,de)=>(se[Zl(de)]+=1,se),{pending:0,approved:0,published:0,rejected:0});return P.pending=ue.length,P},[c,ue]),Q=b.useMemo(()=>{if(m==="pending")return ue;const P=c.filter(se=>Zl(se)===m);return m!=="approved"?P:P.sort((se,de)=>new Date(se.queued_at||se.published_at).getTime()-new Date(de.queued_at||de.published_at).getTime())},[c,ue,m]),X=async(P,se)=>{if(s){k(P.id),q(""),h(""),H("");try{const de=await $l(s);r(de),await m0(de.access_token,P.id,se);const qe=new Date().toISOString();d(Ie=>Ie.map(re=>re.id===P.id?{...re,moderation_status:se,story_status:se==="approved"?re.story_status==="published"?"published":"queued":"skipped",reviewed_at:qe,queued_at:se==="approved"?qe:re.queued_at,last_story_error:se==="approved"?null:re.last_story_error,updated_at:qe}:re)),se==="rejected"&&Zl(P)==="approved"&&q("Notícia retirada da fila de Stories.")}catch(de){H(de instanceof Error?de.message:"Não foi possível atualizar esta notícia.")}finally{k("")}}},Te=async()=>{if(!(!s||!N||y)){A(!0),h(""),q(""),H("");try{const P=await $l(s);r(P),await TN(P.access_token,N),f("pending"),h("Busca solicitada. As novas notícias aparecerão automaticamente aqui em até 5 minutos.")}catch(P){H(P instanceof Error?P.message:"Não foi possível buscar mais notícias agora.")}finally{A(!1)}}};return s?i.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[i.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:i.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[i.jsxs("div",{className:"flex min-w-0 items-center gap-4 sm:gap-5",children:[i.jsx("a",{href:"/","aria-label":"Voltar ao site",children:i.jsx(Fa,{size:"sm"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),i.jsx("h1",{className:"truncate font-black",children:"Stories de notícias"})]})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("a",{href:"/admin/verao-premiado","aria-label":"Verão Premiado 2027",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx("span",{className:"text-[#ffcc0b]",children:"☀"}),i.jsx("span",{className:"hidden md:inline",children:"Verão 2027"})]}),i.jsxs("a",{href:"/admin/solicitacoes","aria-label":"Negócios e solicitações",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx($i,{className:"h-4 w-4"}),i.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),i.jsxs("button",{onClick:()=>void oe(s),disabled:v,"aria-label":"Atualizar notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx(ud,{className:`h-4 w-4 ${v?"animate-spin":""}`}),i.jsx("span",{className:"hidden md:inline",children:"Atualizar"})]}),i.jsx("button",{onClick:()=>{Yi(),r(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:i.jsx(cd,{className:"h-4 w-4"})})]})]})}),i.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[i.jsxs("section",{className:"border-b border-white/10 pb-8",children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Fila editorial"}),i.jsx("h2",{className:"mt-2 max-w-3xl text-3xl font-black sm:text-5xl",children:"Você decide o que vai para os Stories."}),i.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base",children:"A TV e o site recebem automaticamente as notícias úteis. Aqui você avalia uma seleção menor para os Stories. A prévia 9:16 mostra o corte real da imagem antes da aprovação."}),i.jsxs("div",{className:"mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center",children:[i.jsxs("button",{type:"button",onClick:()=>void Te(),disabled:y||v||!N,className:"inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] px-5 text-sm font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:cursor-wait disabled:opacity-55",children:[y?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):i.jsx(Ps,{className:"h-4 w-4"}),y?"Solicitando busca...":"Buscar mais notícias"]}),i.jsx("span",{className:"text-xs leading-5 text-white/45",children:"Busca fontes adicionais. Somente matérias de hoje e com menos de 24 horas entram na lista."})]}),E&&i.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:E}),B&&i.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:B})]}),i.jsx("nav",{className:"mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4","aria-label":"Filtrar notícias",children:Object.keys(xv).map(P=>i.jsxs("button",{onClick:()=>f(P),className:`rounded-xl border px-4 py-3 text-left transition ${m===P?"border-[#f40b36] bg-[#f40b36]/12":"border-white/10 bg-[#0c0e12] hover:border-white/20"}`,children:[i.jsx("span",{className:"block text-2xl font-black",children:J[P]}),i.jsx("span",{className:"mt-1 block text-xs font-bold text-white/55",children:xv[P]})]},P))}),m==="rejected"&&i.jsxs("p",{className:"mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-xs leading-5 text-white/55",children:[i.jsx(Wv,{className:"h-4 w-4 shrink-0 text-[#ff3155]"}),"As notícias recusadas são excluídas definitivamente do banco quando o dia termina, considerando o horário de São Paulo."]}),Y&&i.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:Y}),v&&!c.length?i.jsx("div",{className:"flex min-h-72 items-center justify-center",children:i.jsx(pa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):Q.length?i.jsx("section",{className:"mt-6 grid gap-5 xl:grid-cols-2",children:Q.map((P,se)=>i.jsx(GN,{article:P,queuePosition:m==="approved"?se+1:void 0,working:I===P.id,onApprove:()=>void X(P,"approved"),onReject:()=>void X(P,"rejected")},P.id))}):i.jsxs("div",{className:"mt-6 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:[i.jsx(t0,{className:"mx-auto mb-4 h-9 w-9"}),"Nenhuma notícia nesta etapa."]})]})]}):i.jsx(vd,{loading:v,error:Y,onLogin:async(P,se)=>{g(!0),H("");try{const de=await hd(P,se);r(de),await oe(de)}catch(de){H(de instanceof Error?de.message:"Não foi possível entrar.")}finally{g(!1)}}})}function GN({article:s,queuePosition:r,working:c,onApprove:d,onReject:m}){const f=Zl(s),v=gd(s);return i.jsx("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:i.jsxs("div",{className:"grid md:grid-cols-[220px_minmax(0,1fr)]",children:[i.jsx("div",{className:"border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r",children:i.jsx(YN,{article:s})}),i.jsxs("div",{className:"p-5 sm:p-6",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]",children:[i.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]",children:s.category}),i.jsx("span",{className:"text-white/40",children:s.source_name}),r&&i.jsxs("span",{className:"ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65",children:[i.jsx(Wv,{className:"h-3 w-3"})," #",r," da fila · até ",r,"h"]})]}),i.jsx("h3",{className:"mt-4 text-xl font-black leading-tight sm:text-2xl",children:s.title}),s.summary&&i.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-white/55",children:s.summary}),i.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40",children:[i.jsx("span",{children:LN(s.published_at)}),s.article_url&&i.jsxs("a",{href:s.article_url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-bold text-white/65 hover:text-white",children:["Abrir matéria ",i.jsx(Xy,{className:"h-3.5 w-3.5"})]})]}),f==="pending"?i.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[i.jsxs("button",{onClick:m,disabled:c,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 font-black transition hover:border-red-400/50 hover:text-red-200 disabled:opacity-50",children:[c?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):i.jsx(Xn,{className:"h-4 w-4"}),"Não enviar"]}),i.jsxs("button",{onClick:d,disabled:c||!v,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:opacity-50",children:[c?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):i.jsx(Yt,{className:"h-4 w-4"}),"Enviar aos Stories"]})]}):i.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4",children:[i.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold text-white/55",children:[f==="approved"?i.jsx(U2,{className:"h-4 w-4 text-[#ff3155]"}):null,qN[s.story_status]]}),f==="rejected"&&i.jsx("button",{onClick:d,disabled:c||!v,className:"rounded-lg border border-white/12 px-3 py-2 text-xs font-black hover:border-[#f40b36]/60 disabled:opacity-50",children:"Enviar aos Stories"}),f==="approved"&&s.story_status!=="publishing"&&i.jsxs("button",{onClick:m,disabled:c,className:"inline-flex items-center gap-2 rounded-lg border border-red-400/25 px-3 py-2 text-xs font-black text-red-100 transition hover:border-red-400/60 hover:bg-red-400/10 disabled:opacity-50",children:[c?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):i.jsx(Xn,{className:"h-4 w-4"}),"Retirar da fila"]}),f==="approved"&&s.story_status==="needs_review"&&i.jsx("button",{onClick:d,disabled:c,className:"rounded-lg border border-amber-300/25 px-3 py-2 text-xs font-black text-amber-100 hover:border-amber-300/60 disabled:opacity-50",children:"Reenfileirar"})]}),s.last_story_error&&i.jsx("p",{className:"mt-4 rounded-lg border border-amber-300/20 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100/80",children:s.last_story_error}),!v&&i.jsx("p",{className:"mt-4 rounded-lg border border-white/10 bg-white/[.03] p-3 text-xs leading-5 text-white/55",children:"Esta matéria não possui uma fotografia válida para o formato 9:16."})]})]})})}function YN({article:s}){const r=gd(s),c=s.title.length>170?10:s.title.length>130?12:s.title.length>95?14:17;return i.jsxs("div",{children:[i.jsxs("div",{className:"relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/12 bg-[#030305] shadow-2xl","aria-label":"Prévia do Story em proporção 9 por 16",children:[i.jsxs("div",{className:"absolute inset-x-0 top-0 h-[57%] overflow-hidden bg-[#111116]",children:[r?i.jsx("img",{src:s.image_url||"",alt:"",className:"h-full w-full object-cover",loading:"lazy"}):i.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-white/30",children:[i.jsx(i2,{className:"h-8 w-8"}),i.jsx("span",{className:"text-[10px] font-bold",children:"Sem imagem válida"})]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#030305]"}),i.jsx("img",{src:"/images/braba-news.png",alt:"BRABA NEWS",className:"absolute left-1/2 top-[3%] w-[43%] -translate-x-1/2 object-contain"})]}),i.jsxs("div",{className:"absolute inset-x-0 bottom-0 top-[54%] bg-[#030305] px-[6%] pb-[3%] pt-[4%]",children:[i.jsx("p",{className:"text-[7px] font-black uppercase tracking-[.18em] text-[#ff3155]",children:s.category||"Informação"}),i.jsx("h4",{className:"mt-2 font-black leading-[1.02] tracking-[-.035em] text-white",style:{fontSize:`${c}px`},children:s.title}),i.jsx("div",{className:"mt-2 h-1 w-[37%] bg-gradient-to-r from-[#f8034b] via-[#86152f] to-[#33121d]"}),s.summary&&i.jsx("p",{className:"mt-3 line-clamp-3 text-[9px] leading-[1.45] text-white/80",children:s.summary}),i.jsxs("div",{className:"absolute inset-x-[6%] bottom-[3%] flex items-center justify-between border-t border-white/20 pt-2 text-[7px] text-white/55",children:[i.jsx("strong",{className:"text-white",children:"BRABA NEWS"}),i.jsx("span",{className:"max-w-[48%] truncate",children:s.source_name})]})]})]}),i.jsx("p",{className:"mt-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white/35",children:"Prévia 9:16 · corte exato"})]})}const QN="verao-premiado-2027-v1",Ks="/docs/proposta-comercial-verao-premiado-2027.pdf",PN={businessName:"",cnpj:"",segment:"",businessPhone:"",businessInstagram:"",businessEmail:"",cep:"",street:"",number:"",complement:"",neighborhood:"",city:"Capela do Alto",state:"São Paulo",responsibleName:"",cpf:"",responsiblePhone:"",responsibleEmail:"",responsibleRole:"",radioBriefing:"",motionBriefing:"",sameBriefing:!1,screenId:"",paymentOption:"",contributionType:"",contributionDescription:"",contributionConditions:"",contributionNotes:""},v0=["Declaro que sou responsável pelo estabelecimento informado ou possuo autorização para representá-lo.","Declaro que li e estou de acordo com as condições comerciais apresentadas na proposta do Verão Premiado 2027.","Estou ciente do investimento selecionado e da contribuição adicional de R$ 100,00 em produtos ou serviços para a premiação coletiva.","Declaro possuir autorização para disponibilizar os materiais e logomarcas enviados para utilização na campanha.","Declaro que li o aviso de privacidade referente ao tratamento dos meus dados pessoais."];function it(s){return s.replace(/\D/g,"")}function XN(s){return it(s).slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function $N(s){return it(s).slice(0,14).replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d{1,2})$/,"$1-$2")}function g0(s){const r=it(s).slice(0,11);return r.length<=10?r.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{4})(\d)/,"$1-$2"):r.replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2")}function ZN(s){return it(s).slice(0,8).replace(/(\d{5})(\d)/,"$1-$2")}function KN(s){const r=it(s);if(r.length!==11||/^(\d)\1+$/.test(r))return!1;const c=d=>{let m=0;for(let v=0;v<d;v+=1)m+=Number(r[v])*(d+1-v);const f=m*10%11;return f===10?0:f};return c(9)===Number(r[9])&&c(10)===Number(r[10])}function FN(s){const r=it(s);if(!r)return!0;if(r.length!==14||/^(\d)\1+$/.test(r))return!1;const c=d=>{let m=d.length-7;const v=[...d].reduce((g,y)=>{const A=g+Number(y)*m;return m=m===2?9:m-1,A},0)%11;return v<2?0:11-v};return c(r.slice(0,12))===Number(r[12])&&c(r.slice(0,13))===Number(r[13])}function JN(s){const r=it(s);return r.length===11?`***.${r.slice(3,6)}.${r.slice(6,9)}-**`:"Protegido"}const WN={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SUPABASE_PUBLISHABLE_KEY:"sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M",VITE_SUPABASE_URL:"https://dtmoboiwgqaphlthoexe.supabase.co"};function x0(s){var c;const r=(c=WN[s])==null?void 0:c.trim();if(!r)throw new Error(`Configuração ausente: ${s}.`);return r}const Vt=x0("VITE_SUPABASE_URL"),yv=x0("VITE_SUPABASE_PUBLISHABLE_KEY"),b0="verao-premiado-assets";function En(s=yv){return{apikey:yv,Authorization:`Bearer ${s}`}}function eE(s){const r=s.lastIndexOf("."),c=r>=0?s.slice(r).toLowerCase().replace(/[^a-z0-9.]/g,""):"";return`${(r>=0?s.slice(0,r):s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,55)||"arquivo"}${c}`}function y0(s){return s.split("/").map(encodeURIComponent).join("/")}async function aE(){const s=await fetch(`${Vt}/rest/v1/rpc/list_verao_premiado_screens`,{method:"POST",headers:{...En(),"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!s.ok)throw new Error("As telas da campanha ainda não foram configuradas.");return await s.json()}async function tE(s,r,c){const d=new Set(["image/png","image/jpeg","application/pdf","image/svg+xml"]);return Promise.all(r.map(async(m,f)=>{if(!d.has(m.type)||m.size>20*1024*1024)throw new Error(`O arquivo “${m.name}” não atende aos formatos ou ao limite de 20 MB.`);const v=`inscricoes/${s}/${c}/${crypto.randomUUID().slice(0,8)}-${f+1}-${eE(m.name)}`;if(!(await fetch(`${Vt}/storage/v1/object/${b0}/${y0(v)}`,{method:"POST",headers:{...En(),"Content-Type":m.type,"cache-control":"3600","x-upsert":"false"},body:m})).ok)throw new Error(`Não foi possível enviar “${m.name}”.`);return{path:v,name:m.name,size:m.size,mime_type:m.type,kind:c}}))}async function nE(s){const r={campaign:"Verão Premiado 2027",period:"02/01/2027 a 27/02/2027",prize:"Moto elétrica Smart Wheel (prevista)",cash_price_brl:250,installment_price_brl:300,installments:"2x de R$ 150,00",collective_prize_contribution_brl:100,legal_notice:"Campanha sujeita à autorização dos órgãos competentes e às condições do regulamento oficial."},c={...s.form,cnpj:it(s.form.cnpj)||null,cpf:it(s.form.cpf),businessPhone:it(s.form.businessPhone),responsiblePhone:it(s.form.responsiblePhone),assets:s.assets,termsVersion:QN,declarations:s.declarations,commercialSnapshot:r},d=await fetch(`${Vt}/rest/v1/rpc/create_verao_premiado_submission`,{method:"POST",headers:{...En(),"Content-Type":"application/json"},body:JSON.stringify({p_id:s.id,p_payload:c,p_started_at:s.startedAt,p_honeypot:s.honeypot})});if(!d.ok){const m=await d.text();throw/INSCRICAO_DUPLICADA/i.test(m)?new Error("Já existe uma inscrição com este CPF ou CNPJ. Fale com a VM Mídias para revisar o cadastro."):/TELA_INDISPONIVEL/i.test(m)?new Error("A tela escolhida não está mais disponível. Volte e selecione outra opção."):new Error("Não foi possível concluir a inscrição. Confira os dados e tente novamente.")}return await d.json()}async function iE(s){const r=await fetch(`${Vt}/rest/v1/verao_premiado_submissions?select=*&order=created_at.desc`,{headers:En(s.access_token),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar as inscrições. Aplique a migração da campanha.");return await r.json()}async function lE(s,r,c){if(!(await fetch(`${Vt}/rest/v1/verao_premiado_submissions?id=eq.${r}`,{method:"PATCH",headers:{...En(s.access_token),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(c)})).ok)throw new Error("Não foi possível atualizar a inscrição.")}async function oE(s){const r=await fetch(`${Vt}/rest/v1/verao_premiado_screens?select=*&order=name.asc`,{headers:En(s.access_token),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar as telas.");return await r.json()}async function Nv(s,r){const c=!!r.id;if(!(await fetch(`${Vt}/rest/v1/verao_premiado_screens${c?`?id=eq.${r.id}`:""}`,{method:c?"PATCH":"POST",headers:{...En(s.access_token),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(r)})).ok)throw new Error("Não foi possível salvar a tela.")}async function sE(s,r){const c=await fetch(`${Vt}/storage/v1/object/sign/${b0}/${y0(r)}`,{method:"POST",headers:{...En(s.access_token),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:3600})});if(!c.ok)throw new Error("Não foi possível abrir o arquivo.");const d=await c.json(),m=d.signedURL||d.signedUrl;return m.startsWith("http")?m:`${Vt}/storage/v1${m}`}const Ev=[[Zu,"Kit promocional","1.000 cupons, cartaz e identificação oficial."],[i0,"Rádio Braba","Sua marca ganha voz na FM 104,9."],[Bs,"Tela VM Mídias","Vídeo Motion de 20s com exibição diária."],[Pl,"Premiação coletiva","Seu comércio participa da ação da cidade."]];function rE({onJoin:s}){return b.useEffect(()=>{document.body.classList.add("vp-motion-allowed");const r=[...document.querySelectorAll("[data-vp-reveal]")],c=new IntersectionObserver(h=>h.forEach(N=>{N.isIntersecting&&(N.target.classList.add("is-visible"),c.unobserve(N.target))}),{rootMargin:"0px 0px -10%",threshold:.14});r.forEach(h=>c.observe(h));const d=[...document.querySelectorAll("[data-vp-parallax]")],m=[...document.querySelectorAll(".vp-story-scene")];let f=0,v=0,g=0;const y=()=>{f=0;const h=window.innerHeight/2;m.forEach(N=>{const U=N.getBoundingClientRect(),I=Math.max(-1,Math.min(1,(h-(U.top+U.height/2))/window.innerHeight));N.style.setProperty("--vp-scene-y",`${(I*90).toFixed(1)}px`),N.style.setProperty("--vp-scene-x",`${(v*34).toFixed(1)}px`),N.classList.toggle("is-scene-active",U.top<window.innerHeight*.72&&U.bottom>window.innerHeight*.28)}),d.forEach(N=>{const U=N.getBoundingClientRect();if(U.bottom<-200||U.top>window.innerHeight+200)return;const I=Number(N.dataset.vpParallax||.08),k=Math.max(-220,Math.min(220,(h-(U.top+U.height/2))*I*1.35)),B=v*I*190,q=g*I*110;N.style.setProperty("--vp-parallax-x",`${B.toFixed(1)}px`),N.style.setProperty("--vp-parallax-y",`${(k+q).toFixed(1)}px`)})},A=()=>{f||(f=window.requestAnimationFrame(y))},E=h=>{v=h.clientX/window.innerWidth-.5,g=h.clientY/window.innerHeight-.5,A()};return y(),window.addEventListener("scroll",A,{passive:!0}),window.addEventListener("resize",A),window.addEventListener("pointermove",E,{passive:!0}),()=>{document.body.classList.remove("vp-motion-allowed"),c.disconnect(),window.removeEventListener("scroll",A),window.removeEventListener("resize",A),window.removeEventListener("pointermove",E),f&&window.cancelAnimationFrame(f)}},[]),i.jsxs("div",{className:"vp-story",children:[i.jsx("nav",{className:"vp-story-rail","aria-label":"Seções da proposta",children:Array.from({length:7},(r,c)=>i.jsx("a",{href:`#proposta-${c+1}`,"aria-label":`Ir para a seção ${c+1}`},c))}),i.jsxs("section",{id:"proposta-1",className:"vp-story-scene vp-story-hero",children:[i.jsx("div",{className:"vp-hero-sky","data-vp-parallax":"0.045"}),i.jsx("div",{className:"vp-sun-glow","data-vp-parallax":"0.12"}),i.jsxs("div",{className:"vp-scene-shell vp-hero-grid",children:[i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(Vu,{})," O verão que faz o comércio brilhar"]}),i.jsxs("h1",{children:["Verão",i.jsx("br",{}),i.jsx("em",{children:"Premiado"}),i.jsx("span",{children:"2027"})]}),i.jsx("p",{className:"vp-lead",children:"Sua marca no centro da campanha que conecta Capela do Alto, Rádio Braba FM e as telas da VM Mídias."}),i.jsxs("div",{className:"vp-hero-actions",children:[i.jsx("button",{onClick:s,className:"vp-primary-cta",children:"Quero participar"}),i.jsxs("a",{href:Ks,target:"_blank",className:"vp-secondary-cta",children:[i.jsx(Wl,{})," Ver proposta"]})]}),i.jsxs("div",{className:"vp-hero-facts",children:[i.jsxs("span",{children:[i.jsx(Cy,{})," 02 jan. a 27 fev. 2027"]}),i.jsxs("span",{children:[i.jsx(zs,{})," Moto elétrica Smart Wheel"]})]})]}),i.jsxs("div",{className:"vp-art-stage vp-hero-assets","data-vp-reveal":!0,children:[i.jsx("div",{className:"vp-orbit vp-orbit-one"}),i.jsx("div",{className:"vp-orbit vp-orbit-two"}),i.jsx("img",{"data-vp-parallax":"0.2",src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado da VM Mídias",className:"vp-logo-cutout vp-logo-hero"}),i.jsx("img",{"data-vp-parallax":"0.32",src:"/images/verao-premiado/moto-cutout-v2.png",alt:"Moto elétrica Smart Wheel, prêmio principal previsto",className:"vp-moto-cutout vp-moto-hero"}),i.jsxs("div",{className:"vp-floating-badge vp-badge-prize",children:[i.jsx(Pl,{}),i.jsx("strong",{children:"Prêmio principal"}),i.jsx("span",{children:"Smart Wheel"})]}),i.jsxs("div",{className:"vp-floating-badge vp-badge-local",children:[i.jsx($u,{}),i.jsx("strong",{children:"Campanha local"}),i.jsx("span",{children:"Capela do Alto"})]})]})]}),i.jsx("div",{className:"vp-marquee","aria-hidden":"true",children:i.jsx("div",{children:"VIBRANTE · PROMOCIONAL · PREMIADA · VERÃO · CONFIANÇA · COMÉRCIO LOCAL · VIBRANTE · PROMOCIONAL · PREMIADA · VERÃO ·"})})]}),i.jsx("section",{id:"proposta-2",className:"vp-story-scene vp-scene-two",children:i.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[i.jsxs("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:[i.jsx("span",{className:"vp-scene-label",children:"Uma única cota"}),i.jsxs("div",{className:"vp-benefit-orbit",children:[i.jsx("div",{className:"vp-orbit-ring vp-ring-one","data-vp-parallax":"0.12"}),i.jsx("div",{className:"vp-orbit-ring vp-ring-two","data-vp-parallax":"0.2"}),i.jsxs("div",{className:"vp-orbit-core","data-vp-parallax":"0.28",children:[i.jsx(Vu,{}),i.jsx("strong",{children:"4"}),i.jsx("span",{children:"benefícios"})]}),Ev.map(([r,c],d)=>i.jsxs("div",{className:`vp-orbit-item vp-orbit-item-${d+1}`,"data-vp-parallax":String(.15+d*.04),children:[i.jsx(r,{}),i.jsx("span",{children:c})]},c))]})]}),i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(Ls,{})," Mais presença para sua marca"]}),i.jsxs("h2",{children:["Uma campanha.",i.jsx("br",{}),i.jsx("em",{children:"Quatro frentes."})]}),i.jsx("p",{children:"Um pacote pensado para colocar seu comércio em contato com clientes dentro da loja, no rádio, nas telas e na premiação coletiva."}),i.jsx("div",{className:"vp-benefit-grid",children:Ev.map(([r,c,d],m)=>i.jsxs("article",{style:{"--vp-delay":`${m*90}ms`},"data-vp-reveal":!0,children:[i.jsx(r,{}),i.jsxs("div",{children:[i.jsx("strong",{children:c}),i.jsx("span",{children:d})]})]},c))})]})]})}),i.jsxs("section",{id:"proposta-3",className:"vp-story-scene vp-scene-three",children:[i.jsx("div",{className:"vp-coupon-shape vp-coupon-one","data-vp-parallax":"0.13",children:"CUPOM"}),i.jsx("div",{className:"vp-coupon-shape vp-coupon-two","data-vp-parallax":"0.2",children:"SORTEIO"}),i.jsxs("div",{className:"vp-scene-shell vp-split-grid vp-reverse",children:[i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(Zu,{})," Kit promocional exclusivo"]}),i.jsx("div",{className:"vp-display-number",children:"1.000"}),i.jsxs("h2",{children:["motivos para o cliente ",i.jsx("em",{children:"lembrar de você."})]}),i.jsx("p",{children:"Seu estabelecimento recebe materiais prontos para divulgar a campanha, envolver o público e transformar participação em presença de marca."}),i.jsxs("ul",{className:"vp-feature-list",children:[i.jsx("li",{children:"Cupons promocionais"}),i.jsx("li",{children:"Cartaz com sua logomarca"}),i.jsx("li",{children:"Identificação oficial de participante"})]})]}),i.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:i.jsxs("div",{className:"vp-coupon-stack","aria-label":"Exemplo conceitual dos cupons promocionais",children:[["Cliente premiado","Comércio em destaque","Boa sorte!"].map((r,c)=>i.jsxs("article",{className:`vp-coupon-card vp-coupon-card-${c+1}`,"data-vp-parallax":String(.18+c*.06),children:[i.jsxs("div",{children:[i.jsx(Vu,{}),i.jsx("span",{children:"Verão Premiado"})]}),i.jsx("strong",{children:"Cupom de sorteio"}),i.jsx("p",{children:r}),i.jsx("i",{})]},r)),i.jsxs("div",{className:"vp-coupon-seal","data-vp-parallax":"0.34",children:[i.jsx(Zu,{}),i.jsx("b",{children:"1.000"}),i.jsx("span",{children:"cupons"})]})]})})]})]}),i.jsxs("section",{id:"proposta-4",className:"vp-story-scene vp-scene-four",children:[i.jsx("div",{className:"vp-radio-grid","aria-hidden":"true"}),i.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[i.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:i.jsxs("div",{className:"vp-radio-stage",children:[i.jsx("div",{className:"vp-radio-halo","data-vp-parallax":"0.1"}),i.jsxs("div",{className:"vp-studio-screen","data-vp-parallax":"0.18",children:[i.jsx("span",{children:"NO AR"}),i.jsx("strong",{children:"104,9"}),i.jsx("small",{children:"Rádio Braba FM"})]}),i.jsxs("div",{className:"vp-microphone","data-vp-parallax":"0.3",children:[i.jsx("div",{children:i.jsx(b2,{})}),i.jsx("i",{}),i.jsx("span",{})]}),i.jsx("div",{className:"vp-waveform","aria-hidden":"true",children:Array.from({length:24},(r,c)=>i.jsx("i",{style:{"--wave":`${18+c*17%62}px`,"--vp-delay":`${c*45}ms`}},c))})]})}),i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(i0,{})," Rádio Braba FM 104,9"]}),i.jsxs("h2",{children:["Sua marca também ",i.jsx("em",{children:"ganha voz."})]}),i.jsx("p",{children:"Durante o período da campanha, seu estabelecimento entra na programação da rádio com uma mensagem produzida a partir do seu briefing."}),i.jsxs("div",{className:"vp-quote-card",children:[i.jsx("span",{children:"“"}),i.jsx("p",{children:"Você conta o que deseja divulgar. A equipe transforma a ideia em uma mensagem clara para o público regional."})]}),i.jsx("small",{children:"Frequência e horários das inserções definidos em contrato."})]})]})]}),i.jsxs("section",{id:"proposta-5",className:"vp-story-scene vp-scene-five",children:[i.jsx("div",{className:"vp-screen-glow","data-vp-parallax":"0.08"}),i.jsxs("div",{className:"vp-scene-shell vp-split-grid vp-reverse",children:[i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(Bs,{})," Publicidade nas telas VM Mídias"]}),i.jsxs("h2",{children:["Onde a cidade passa, ",i.jsx("em",{children:"sua marca aparece."})]}),i.jsx("p",{children:"Escolha uma das telas cadastradas para exibir um vídeo Motion produzido para o seu comércio durante o período contratado."}),i.jsxs("div",{className:"vp-stat-row",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"01"}),i.jsx("span",{children:"tela à escolha"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:"20s"}),i.jsx("span",{children:"vídeo Motion"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Diária"}),i.jsx("span",{children:"exibição"})]})]})]}),i.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:i.jsxs("div",{className:"vp-screen-stage",children:[i.jsxs("div",{className:"vp-digital-screen","data-vp-parallax":"0.18",children:[i.jsxs("div",{className:"vp-screen-content",children:[i.jsx("img",{src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado 2027"}),i.jsxs("span",{children:[i.jsx(O2,{})," Motion de 20 segundos"]})]}),i.jsx("i",{})]}),i.jsxs("div",{className:"vp-screen-card vp-screen-card-one","data-vp-parallax":"0.34",children:[i.jsx($u,{}),i.jsx("span",{children:"Comércio local"})]}),i.jsxs("div",{className:"vp-screen-card vp-screen-card-two","data-vp-parallax":"0.26",children:[i.jsx(Bs,{}),i.jsx("span",{children:"Exibição diária"})]}),i.jsxs("div",{className:"vp-screen-card vp-screen-card-three","data-vp-parallax":"0.4",children:[i.jsx(Ls,{}),i.jsx("span",{children:"Alta visibilidade"})]})]})})]})]}),i.jsxs("section",{id:"proposta-6",className:"vp-story-scene vp-scene-six",children:[i.jsx("div",{className:"vp-gift-orb vp-orb-one","data-vp-parallax":"0.16",children:"R$ 100"}),i.jsx("div",{className:"vp-gift-orb vp-orb-two","data-vp-parallax":"0.1",children:i.jsx(zs,{})}),i.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[i.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:i.jsxs("div",{className:"vp-prize-stage",children:[i.jsx("div",{className:"vp-prize-sun","data-vp-parallax":"0.12"}),i.jsx("img",{"data-vp-parallax":"0.3",src:"/images/verao-premiado/moto-cutout-v2.png",alt:"Moto elétrica Smart Wheel",className:"vp-moto-cutout vp-moto-prize"}),i.jsxs("div",{className:"vp-prize-ribbon","data-vp-parallax":"0.42",children:[i.jsx(Pl,{}),i.jsx("strong",{children:"Prêmio principal previsto"})]})]})}),i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(Pl,{})," Premiação coletiva"]}),i.jsxs("h2",{children:["Quando o comércio participa junto, ",i.jsx("em",{children:"toda a cidade ganha destaque."})]}),i.jsx("p",{children:"Cada participante contribui com R$ 100 em produtos ou serviços. Os itens são definidos e formalizados conforme o regulamento aprovado."}),i.jsxs("div",{className:"vp-prize-card",children:[i.jsx("span",{children:"Prêmio principal previsto"}),i.jsxs("strong",{children:["Moto elétrica",i.jsx("br",{}),"Smart Wheel"]})]})]})]})]}),i.jsxs("section",{id:"proposta-7",className:"vp-story-scene vp-scene-seven",children:[i.jsx("div",{className:"vp-final-rays","data-vp-parallax":"0.04"}),i.jsxs("div",{className:"vp-scene-shell vp-final-grid",children:[i.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[i.jsxs("div",{className:"vp-kicker",children:[i.jsx(Ls,{})," Sua marca em destaque neste verão"]}),i.jsxs("h2",{children:["Uma cota que cabe no negócio e ",i.jsx("em",{children:"aparece na cidade."})]}),i.jsxs("div",{className:"vp-price-cards",children:[i.jsxs("article",{children:[i.jsx("span",{children:"À vista"}),i.jsxs("strong",{children:["R$ 250",i.jsx("small",{children:",00"})]})]}),i.jsx("b",{children:"ou"}),i.jsxs("article",{children:[i.jsx("span",{children:"Parcelado"}),i.jsxs("strong",{children:["2x R$ 150",i.jsx("small",{children:",00"})]}),i.jsx("small",{children:"Total: R$ 300,00"})]})]}),i.jsxs("p",{className:"vp-contribution-note",children:[i.jsx(zs,{})," + R$ 100 em produtos ou serviços para a premiação coletiva."]}),i.jsx("button",{onClick:s,className:"vp-primary-cta vp-final-cta",children:"Quero colocar meu comércio em destaque"}),i.jsx("small",{children:"Campanha sujeita à autorização dos órgãos competentes e às condições do regulamento oficial."})]}),i.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:i.jsxs("div",{className:"vp-finale-stage",children:[i.jsx("img",{"data-vp-parallax":"0.2",src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado da VM Mídias",className:"vp-logo-cutout vp-logo-final"}),i.jsx("div",{className:"vp-finale-gift vp-finale-gift-one","data-vp-parallax":"0.38",children:i.jsx(zs,{})}),i.jsx("div",{className:"vp-finale-gift vp-finale-gift-two","data-vp-parallax":"0.27",children:i.jsx(Pl,{})}),i.jsx("div",{className:"vp-finale-gift vp-finale-gift-three","data-vp-parallax":"0.46",children:i.jsx(Q2,{})})]})})]})]})]})}const Xl=["Comércio","Logomarca","Responsável","Rádio","Vídeo","Tela","Investimento","Premiação","Revisão"],xd="mt-2 min-h-14 w-full rounded-2xl border border-white/12 bg-white/[0.045] px-4 text-base text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/22 focus:border-[#ffca0a]/70 focus:bg-white/[0.065] focus:ring-4 focus:ring-[#ffca0a]/10",cE="block text-sm font-extrabold text-white/78";function uE(){const[s,r]=b.useState(PN),[c,d]=b.useState(0),[m,f]=b.useState(null),[v,g]=b.useState([]),[y,A]=b.useState([]),[E,h]=b.useState(!0),[N,U]=b.useState(""),[I,k]=b.useState(v0.map(()=>!1)),[B,q]=b.useState(!1),[Y,H]=b.useState(""),[oe,ue]=b.useState(!1),[J,Q]=b.useState(0),[X,Te]=b.useState(null),[P,se]=b.useState(""),de=b.useRef(new Date().toISOString()),qe=b.useRef(null),Ie=b.useMemo(()=>m&&m.type.startsWith("image/")&&m.type!=="image/svg+xml"?URL.createObjectURL(m):"",[m]);b.useEffect(()=>{document.title="Verão Premiado 2027 | VM Mídias",aE().then(A).catch(ce=>U(ce instanceof Error?ce.message:"Não foi possível carregar as telas.")).finally(()=>h(!1))},[]),b.useEffect(()=>()=>{Ie&&URL.revokeObjectURL(Ie)},[Ie]);const re=(ce,je)=>r($e=>({...$e,[ce]:je})),z=ce=>{switch(ce){case 0:return!s.businessName.trim()||!s.segment.trim()||s.businessPhone.replace(/\D/g,"").length<10||!s.cep.trim()||!s.street.trim()||!s.number.trim()||!s.neighborhood.trim()||!s.city.trim()||!s.state.trim()?"Preencha todos os campos obrigatórios do estabelecimento.":FN(s.cnpj)?"":"Informe um CNPJ válido ou deixe o campo em branco.";case 1:return m?"":"Envie a logomarca do estabelecimento.";case 2:return!s.responsibleName.trim()||!KN(s.cpf)||s.responsiblePhone.replace(/\D/g,"").length<10?"Informe nome, CPF válido e telefone do responsável.":"";case 3:return s.radioBriefing.trim().length>=20?"":"Descreva em pelo menos 20 caracteres o que deseja divulgar na rádio.";case 4:return s.motionBriefing.trim().length>=20?"":"Descreva em pelo menos 20 caracteres o conteúdo do vídeo.";case 5:return s.screenId?"":"Selecione uma tela disponível.";case 6:return s.paymentOption?"":"Escolha a modalidade de investimento.";case 7:return s.contributionType&&s.contributionDescription.trim()?"":"Informe o tipo e a descrição da contribuição.";default:return""}},V=ce=>{if(ce===1){const je=z(c);if(je){H(je);return}}H(""),d(je=>Math.max(0,Math.min(8,je+ce))),window.setTimeout(()=>{var je;return(je=qe.current)==null?void 0:je.scrollIntoView({behavior:"smooth",block:"start"})},0)},F=ce=>{var $e;const je=(($e=ce.target.files)==null?void 0:$e[0])||null;if(je&&je.size>20*1024*1024){H("A logomarca deve ter no máximo 20 MB.");return}f(je),H("")},pe=ce=>{const je=Array.from(ce.target.files||[]);if(je.some($e=>$e.size>20*1024*1024)){H("Cada arquivo deve ter no máximo 20 MB.");return}if(v.length+je.length>10){H("Envie no máximo 10 materiais adicionais.");return}g($e=>[...$e,...je]),H("")},Ee=async ce=>{ce.preventDefault();const je=Array.from({length:8},(S,L)=>z(L)).find(Boolean);if(je){H(je);return}if(I.some(S=>!S)||!B){H("Marque todas as declarações e o aceite final para concluir.");return}if(!m)return;ue(!0),H(""),Q(0);const $e=crypto.randomUUID();try{const S=[{file:m,kind:"logo"},...v.map(K=>({file:K,kind:"motion"}))],L=[];for(let K=0;K<S.length;K+=1){const ye=await tE($e,[S[K].file],S[K].kind);L.push(...ye),Q(Math.round((K+1)/S.length*80))}const ae=await nE({id:$e,form:s,assets:L,declarations:I,startedAt:de.current,honeypot:P});Q(100),Te(ae),window.scrollTo({top:0,behavior:"smooth"})}catch(S){H(S instanceof Error?S.message:"Não foi possível enviar a inscrição.")}finally{ue(!1)}};return X?i.jsx(AE,{confirmation:X,form:s}):i.jsxs("div",{className:"min-h-screen bg-[#050305] text-white selection:bg-[#ffcc00] selection:text-black",children:[i.jsx(fE,{onJoin:()=>{var ce;return(ce=qe.current)==null?void 0:ce.scrollIntoView({behavior:"smooth"})}}),i.jsxs("main",{children:[i.jsx(rE,{onJoin:()=>{var ce;return(ce=qe.current)==null?void 0:ce.scrollIntoView({behavior:"smooth"})}}),i.jsx("section",{ref:qe,id:"inscricao",className:"vp-form-section scroll-mt-20 border-t border-white/10 px-4 py-24 sm:px-8 lg:py-32",children:i.jsxs("div",{className:"mx-auto max-w-7xl",children:[i.jsxs("div",{className:"grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end",children:[i.jsxs("div",{children:[i.jsx(hE,{children:"Agora é com você"}),i.jsxs("h2",{className:"text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-7xl",children:["Seu comércio",i.jsx("br",{}),i.jsx("span",{className:"text-[#ffcc0b]",children:"entra em cena."})]})]}),i.jsx("p",{className:"max-w-2xl text-lg leading-8 text-white/58",children:"Uma inscrição guiada, clara e segura. Você envia as informações, escolhe onde quer aparecer e nossa equipe conduz os próximos passos."})]}),i.jsxs("div",{className:"vp-form-layout mt-12",children:[i.jsx(vE,{step:c}),i.jsx("div",{className:"vp-form-card",children:i.jsxs("form",{onSubmit:Ee,className:"p-5 sm:p-9 lg:p-11",children:[i.jsx("input",{"aria-hidden":!0,tabIndex:-1,autoComplete:"off",value:P,onChange:ce=>se(ce.target.value),className:"absolute -left-[9999px]",name:"website"}),i.jsxs("div",{className:"mb-8 border-b border-white/8 pb-7",children:[i.jsxs("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:["Etapa ",c+1," de ",Xl.length]}),i.jsx("h3",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:dE[c]}),i.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-6 text-white/50",children:mE[c]})]}),i.jsxs("div",{className:"vp-form-step",children:[c===0&&i.jsx(gE,{form:s,setField:re}),c===1&&i.jsx(xE,{file:m,preview:Ie||"",onChange:F,onRemove:()=>f(null)}),c===2&&i.jsx(bE,{form:s,setField:re}),c===3&&i.jsx(N0,{value:s.radioBriefing,onChange:ce=>re("radioBriefing",ce),radio:!0}),c===4&&i.jsx(yE,{form:s,setField:re,files:v,onFiles:pe,onRemove:ce=>g(je=>je.filter(($e,S)=>S!==ce))}),c===5&&i.jsx(NE,{screens:y,loading:E,error:N,selected:s.screenId,onSelect:ce=>re("screenId",ce)}),c===6&&i.jsx(EE,{selected:s.paymentOption,onSelect:ce=>re("paymentOption",ce)}),c===7&&i.jsx(jE,{form:s,setField:re}),c===8&&i.jsx(SE,{form:s,logo:m,screen:y.find(ce=>ce.id===s.screenId),declarations:I,setDeclarations:k,finalConsent:B,setFinalConsent:q,setStep:d})]},c),Y&&i.jsx("div",{role:"alert",className:"mt-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100",children:Y}),oe&&i.jsxs("div",{className:"mt-6",children:[i.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[i.jsx("span",{children:"Enviando inscrição com segurança"}),i.jsxs("span",{children:[J,"%"]})]}),i.jsx("div",{className:"mt-2 h-2 overflow-hidden rounded-full bg-white/10",children:i.jsx("div",{className:"h-full bg-[#ffcc0b] transition-all",style:{width:`${J}%`}})})]}),i.jsxs("div",{className:"mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between",children:[i.jsx("button",{type:"button",disabled:c===0||oe,onClick:()=>V(-1),className:"vp-form-nav-button border border-white/15 text-white/70 disabled:opacity-30",children:"Voltar"}),c<8?i.jsx("button",{type:"button",onClick:()=>V(1),className:"vp-form-nav-button bg-[#f20b2f] text-white shadow-[0_14px_36px_rgba(248,3,45,.28)]",children:"Continuar"}):i.jsxs("button",{disabled:oe,className:"vp-form-nav-button inline-flex min-h-14 items-center justify-center gap-2 bg-[#ffcc0b] text-black disabled:opacity-55",children:[oe?i.jsx(pa,{className:"h-5 w-5 animate-spin"}):i.jsx(Yt,{className:"h-5 w-5"}),"Eu concordo e quero participar"]})]})]})})]}),i.jsx("p",{className:"mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-white/40",children:"Esta é uma inscrição comercial de estabelecimento. Ela não representa participação de consumidor na premiação nem confirma pagamento ou aprovação definitiva."})]})})]}),i.jsx(pE,{})]})}const dE=["Dados do estabelecimento","Envie a logomarca do seu comércio","Dados do responsável","O que você deseja divulgar na rádio?","O que você deseja divulgar no seu vídeo de 20 segundos?","Escolha uma tela VM Mídias","Escolha o investimento","Contribuição para a premiação","Revise e aceite os termos"],mE=["Conte quem é o seu comércio e onde ele está.","Usaremos a marca nos materiais oficiais e nas peças publicitárias.","Precisamos identificar a pessoa autorizada a representar o estabelecimento.","Não precisa escrever um roteiro profissional. Envie as informações e nossa equipe transforma em briefing.","Priorize a mensagem essencial para caber em 20 segundos.","Somente as telas reais cadastradas pela administração aparecem aqui.","A forma de pagamento será combinada com a equipe; não há cobrança automática nesta página.","Cada participante disponibiliza R$ 100 em produtos ou serviços, conforme regulamento aprovado.","Confira tudo antes de registrar seu aceite eletrônico."];function fE({onJoin:s}){return i.jsx("header",{className:"pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6",children:i.jsxs("div",{className:"pointer-events-auto mx-auto flex min-h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/12 bg-[#090506]/82 px-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-6",children:[i.jsx("a",{href:"/","aria-label":"Voltar ao site da VM Mídias",children:i.jsx(Fa,{size:"sm"})}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("a",{href:Ks,target:"_blank",className:"hidden rounded-full border border-white/12 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/60 transition hover:border-white/30 hover:text-white sm:inline-flex",children:"Ver proposta"}),i.jsx("button",{onClick:s,className:"rounded-full bg-[#f20b2f] px-5 py-3 text-xs font-black uppercase tracking-wide shadow-[0_10px_30px_rgba(248,3,45,.32)] transition hover:-translate-y-0.5 hover:bg-[#ff2448]",children:"Quero participar"})]})]})})}function pE(){return i.jsx("footer",{className:"border-t border-white/10 bg-black px-5 py-10",children:i.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between",children:[i.jsxs("div",{children:[i.jsx(Fa,{size:"sm"}),i.jsxs("p",{className:"mt-3",children:["Capela do Alto - SP · ",ze.company.whatsappFormatted]})]}),i.jsxs("div",{className:"flex flex-wrap gap-5",children:[i.jsx("a",{href:"/politica-de-privacidade",className:"hover:text-white",children:"Aviso de privacidade"}),i.jsx("a",{href:Ks,target:"_blank",className:"hover:text-white",children:"Proposta comercial"}),i.jsx("a",{href:`https://wa.me/${ze.company.whatsappRaw}`,target:"_blank",rel:"noreferrer",className:"hover:text-white",children:"Atendimento oficial"})]})]})})}function hE({children:s,center:r=!1}){return i.jsx("p",{className:`mb-4 text-xs font-black uppercase tracking-[.22em] text-[#ffcc0b] ${r?"text-center":""}`,children:s})}function vE({step:s}){return i.jsxs("aside",{className:"vp-form-progress","aria-label":"Progresso da inscrição",children:[i.jsxs("div",{className:"vp-form-mobile-progress",children:[i.jsx("div",{children:i.jsx("i",{style:{width:`${(s+1)/Xl.length*100}%`}})}),i.jsxs("p",{children:[Xl[s]," · ",s+1," de ",Xl.length]})]}),i.jsx("ol",{children:Xl.map((r,c)=>i.jsxs("li",{className:c===s?"is-current":c<s?"is-done":"",children:[i.jsx("b",{children:c<s?i.jsx(Yt,{className:"h-3.5 w-3.5"}):c+1}),i.jsx("span",{children:r})]},r))})]})}function Ge({label:s,required:r,children:c}){return i.jsxs("label",{className:cE,children:[s,r&&i.jsx("span",{className:"text-[#ffcc0b]",children:" *"}),c]})}function ea(s){return i.jsx("input",{...s,className:xd})}function Fu(s){return i.jsx("textarea",{...s,className:`${xd} min-h-36 resize-y py-3`})}function gE({form:s,setField:r}){return i.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[i.jsx(Ge,{label:"Nome do comércio",required:!0,children:i.jsx(ea,{value:s.businessName,onChange:c=>r("businessName",c.target.value)})}),i.jsx(Ge,{label:"CNPJ (opcional)",children:i.jsx(ea,{inputMode:"numeric",value:s.cnpj,onChange:c=>r("cnpj",$N(c.target.value)),placeholder:"00.000.000/0000-00"})}),i.jsx(Ge,{label:"Segmento comercial",required:!0,children:i.jsx(ea,{value:s.segment,onChange:c=>r("segment",c.target.value),placeholder:"Ex.: roupas, alimentação, serviços"})}),i.jsx(Ge,{label:"Telefone ou WhatsApp comercial",required:!0,children:i.jsx(ea,{inputMode:"tel",value:s.businessPhone,onChange:c=>r("businessPhone",g0(c.target.value))})}),i.jsx(Ge,{label:"Instagram comercial",children:i.jsx(ea,{value:s.businessInstagram,onChange:c=>r("businessInstagram",c.target.value),placeholder:"@seucomercio"})}),i.jsx(Ge,{label:"E-mail comercial",children:i.jsx(ea,{type:"email",value:s.businessEmail,onChange:c=>r("businessEmail",c.target.value)})}),i.jsx(Ge,{label:"CEP",required:!0,children:i.jsx(ea,{inputMode:"numeric",value:s.cep,onChange:c=>r("cep",ZN(c.target.value))})}),i.jsx(Ge,{label:"Rua ou avenida",required:!0,children:i.jsx(ea,{value:s.street,onChange:c=>r("street",c.target.value)})}),i.jsx(Ge,{label:"Número",required:!0,children:i.jsx(ea,{value:s.number,onChange:c=>r("number",c.target.value)})}),i.jsx(Ge,{label:"Complemento",children:i.jsx(ea,{value:s.complement,onChange:c=>r("complement",c.target.value)})}),i.jsx(Ge,{label:"Bairro",required:!0,children:i.jsx(ea,{value:s.neighborhood,onChange:c=>r("neighborhood",c.target.value)})}),i.jsxs("div",{className:"grid grid-cols-[1.5fr_1fr] gap-3",children:[i.jsx(Ge,{label:"Cidade",required:!0,children:i.jsx(ea,{value:s.city,onChange:c=>r("city",c.target.value)})}),i.jsx(Ge,{label:"Estado",required:!0,children:i.jsx(ea,{value:s.state,onChange:c=>r("state",c.target.value)})})]})]})}function xE({file:s,preview:r,onChange:c,onRemove:d}){return i.jsxs("div",{children:[i.jsx("p",{className:"mb-5 text-sm leading-6 text-white/55",children:"Utilizaremos sua logomarca para personalizar os materiais oficiais da campanha e produzir suas peças publicitárias."}),s?i.jsxs("div",{className:"flex items-center gap-4 rounded-2xl border border-[#ffcc0b]/30 bg-[#ffcc0b]/5 p-4",children:[r?i.jsx("img",{src:r,alt:"Pré-visualização da logomarca",className:"h-24 w-24 rounded-xl bg-white object-contain p-2"}):i.jsx(Zy,{className:"h-14 w-14 text-[#ffcc0b]"}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"truncate font-bold",children:s.name}),i.jsxs("p",{className:"mt-1 text-sm text-white/45",children:[(s.size/1024/1024).toFixed(2)," MB"]})]}),i.jsx("button",{type:"button",onClick:d,"aria-label":"Remover arquivo",className:"rounded-lg border border-white/15 p-3",children:i.jsx(Xn,{className:"h-5 w-5"})})]}):i.jsxs("label",{className:"flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/18 bg-black/20 p-8 text-center hover:border-[#ffcc0b]/60",children:[i.jsx(K2,{className:"h-10 w-10 text-[#ffcc0b]"}),i.jsx("span",{className:"mt-4 text-lg font-black",children:"Selecione a logomarca"}),i.jsx("span",{className:"mt-2 text-sm text-white/45",children:"PNG, JPG, JPEG, PDF ou SVG · até 20 MB"}),i.jsx("input",{type:"file",accept:".png,.jpg,.jpeg,.pdf,.svg,image/png,image/jpeg,application/pdf,image/svg+xml",className:"sr-only",onChange:c})]})]})}function bE({form:s,setField:r}){return i.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[i.jsx(Ge,{label:"Nome completo",required:!0,children:i.jsx(ea,{value:s.responsibleName,onChange:c=>r("responsibleName",c.target.value)})}),i.jsx(Ge,{label:"CPF",required:!0,children:i.jsx(ea,{inputMode:"numeric",value:s.cpf,onChange:c=>r("cpf",XN(c.target.value)),placeholder:"000.000.000-00"})}),i.jsx(Ge,{label:"Telefone ou WhatsApp",required:!0,children:i.jsx(ea,{inputMode:"tel",value:s.responsiblePhone,onChange:c=>r("responsiblePhone",g0(c.target.value))})}),i.jsx(Ge,{label:"E-mail",children:i.jsx(ea,{type:"email",value:s.responsibleEmail,onChange:c=>r("responsibleEmail",c.target.value)})}),i.jsx(Ge,{label:"Cargo ou vínculo",children:i.jsx(ea,{value:s.responsibleRole,onChange:c=>r("responsibleRole",c.target.value),placeholder:"Ex.: proprietário(a), gerente"})})]})}function N0({value:s,onChange:r,radio:c=!1}){return i.jsxs("div",{children:[i.jsx("div",{className:"mb-5 grid gap-2 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/55 sm:grid-cols-2",children:["Principais produtos ou serviços","Promoções","Diferenciais do estabelecimento","Endereço e WhatsApp","Slogan","Horários de funcionamento"].map(d=>i.jsxs("span",{children:["• ",d]},d))}),i.jsx(Ge,{label:c?"Briefing para a Rádio Braba FM 104,9":"Briefing do vídeo",required:!0,children:i.jsx(Fu,{value:s,maxLength:2400,onChange:d=>r(d.target.value),placeholder:"Ex.: Gostaria de divulgar que nossa loja trabalha com..."})}),i.jsxs("p",{className:"mt-2 text-right text-xs text-white/35",children:[s.length,"/2400"]})]})}function yE({form:s,setField:r,files:c,onFiles:d,onRemove:m}){return i.jsxs("div",{children:[i.jsxs("label",{className:"mb-5 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4",children:[i.jsx("input",{type:"checkbox",checked:s.sameBriefing,onChange:f=>{r("sameBriefing",f.target.checked),f.target.checked&&r("motionBriefing",s.radioBriefing)},className:"mt-1 h-5 w-5 accent-[#ffcc0b]"}),i.jsxs("span",{children:[i.jsx("strong",{className:"block",children:"Quero utilizar as mesmas informações da rádio"}),i.jsx("small",{className:"mt-1 block text-sm text-white/45",children:"O texto será copiado e continuará editável."})]})]}),i.jsx(N0,{value:s.motionBriefing,onChange:f=>r("motionBriefing",f)}),i.jsxs("div",{className:"mt-6",children:[i.jsx("p",{className:"text-sm font-bold",children:"Materiais adicionais (opcional)"}),i.jsxs("label",{className:"mt-2 flex min-h-20 cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-white/18 px-4 text-sm font-bold",children:[i.jsx(e0,{className:"h-5 w-5 text-[#ffcc0b]"}),"Adicionar fotos ou materiais",i.jsx("input",{type:"file",multiple:!0,accept:".png,.jpg,.jpeg,.pdf,.svg,image/png,image/jpeg,application/pdf,image/svg+xml",onChange:d,className:"sr-only"})]}),c.length>0&&i.jsx("div",{className:"mt-3 space-y-2",children:c.map((f,v)=>i.jsxs("div",{className:"flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 text-sm",children:[i.jsx("span",{className:"min-w-0 flex-1 truncate",children:f.name}),i.jsx("button",{type:"button",onClick:()=>m(v),"aria-label":`Remover ${f.name}`,children:i.jsx(Xn,{className:"h-4 w-4"})})]},`${f.name}-${v}`))})]})]})}function NE({screens:s,loading:r,error:c,selected:d,onSelect:m}){return r?i.jsx("div",{className:"flex min-h-44 items-center justify-center",children:i.jsx(pa,{className:"h-8 w-8 animate-spin text-[#ffcc0b]"})}):c||!s.length?i.jsxs("div",{className:"rounded-2xl border border-amber-300/25 bg-amber-300/8 p-6",children:[i.jsx(Bs,{className:"h-8 w-8 text-[#ffcc0b]"}),i.jsx("p",{className:"mt-4 font-black",children:"Telas aguardando cadastro administrativo"}),i.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:c||"Nenhuma tela real foi cadastrada para a campanha. A seleção será liberada assim que a equipe concluir essa configuração."})]}):i.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:s.map(f=>i.jsxs("button",{type:"button",disabled:!f.available,onClick:()=>m(f.id),className:`overflow-hidden rounded-2xl border text-left transition ${d===f.id?"border-[#ffcc0b] bg-[#ffcc0b]/8":"border-white/12 bg-black/20 hover:border-white/30"} disabled:cursor-not-allowed disabled:opacity-45`,children:[f.photo_url&&i.jsx("img",{src:f.photo_url,alt:"",className:"h-36 w-full object-cover"}),i.jsxs("div",{className:"p-5",children:[i.jsxs("div",{className:"flex items-start justify-between gap-3",children:[i.jsx("strong",{className:"text-lg",children:f.name}),d===f.id&&i.jsx(Yt,{className:"h-5 w-5 text-[#ffcc0b]"})]}),i.jsxs("p",{className:"mt-2 flex gap-2 text-sm text-white/55",children:[i.jsx(Qs,{className:"h-4 w-4 shrink-0"}),f.address]}),f.description&&i.jsx("p",{className:"mt-3 text-sm leading-6 text-white/45",children:f.description}),i.jsx("p",{className:"mt-4 text-xs font-black uppercase text-[#ffcc0b]",children:f.available?"Disponível":"Indisponível"})]})]},f.id))})}function EE({selected:s,onSelect:r}){return i.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[[{id:"avista",title:"À vista",price:"R$ 250,00",note:"Pagamento combinado com a equipe"},{id:"parcelado",title:"Parcelado",price:"2x R$ 150,00",note:"Total de R$ 300,00"}].map(c=>i.jsxs("button",{type:"button",onClick:()=>r(c.id),className:`rounded-2xl border p-6 text-left ${s===c.id?"border-[#ffcc0b] bg-[#ffcc0b]/8":"border-white/12 bg-black/20"}`,children:[i.jsx("span",{className:"text-sm font-black uppercase text-white/50",children:c.title}),i.jsx("strong",{className:"mt-3 block text-3xl",children:c.price}),i.jsx("span",{className:"mt-2 block text-sm text-white/45",children:c.note})]},c.id)),i.jsx("p",{className:"sm:col-span-2 text-sm leading-6 text-white/45",children:"A página não realiza cobrança automática. Formas, datas e vencimentos serão confirmados pela administração da VM Mídias."})]})}function jE({form:s,setField:r}){return i.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[i.jsx(Ge,{label:"Tipo de contribuição",required:!0,children:i.jsxs("select",{value:s.contributionType,onChange:c=>r("contributionType",c.target.value),className:xd,children:[i.jsx("option",{value:"",children:"Selecione"}),i.jsx("option",{value:"produto",children:"Produto"}),i.jsx("option",{value:"servico",children:"Serviço"}),i.jsx("option",{value:"vale_compra",children:"Vale-compra"})]})}),i.jsx(Ge,{label:"Descrição da contribuição",required:!0,children:i.jsx(ea,{value:s.contributionDescription,onChange:c=>r("contributionDescription",c.target.value),placeholder:"O que será disponibilizado?"})}),i.jsx(Ge,{label:"Condições de utilização",children:i.jsx(Fu,{value:s.contributionConditions,onChange:c=>r("contributionConditions",c.target.value)})}),i.jsx(Ge,{label:"Observações adicionais",children:i.jsx(Fu,{value:s.contributionNotes,onChange:c=>r("contributionNotes",c.target.value)})})]})}function SE({form:s,logo:r,screen:c,declarations:d,setDeclarations:m,finalConsent:f,setFinalConsent:v,setStep:g}){const y=[["Estabelecimento",s.businessName,0],["Responsável",s.responsibleName,2],["CPF",JN(s.cpf),2],["Logomarca",(r==null?void 0:r.name)||"Não enviada",1],["Rádio",s.radioBriefing,3],["Vídeo",s.motionBriefing,4],["Tela",(c==null?void 0:c.name)||"Não selecionada",5],["Investimento",s.paymentOption==="avista"?"R$ 250,00 à vista":"2x de R$ 150,00 (total R$ 300,00)",6],["Contribuição",s.contributionDescription,7]];return i.jsxs("div",{children:[i.jsx("div",{className:"divide-y divide-white/8 rounded-2xl border border-white/10 bg-black/20",children:y.map(([A,E,h])=>i.jsxs("div",{className:"grid gap-2 p-4 sm:grid-cols-[140px_1fr_auto] sm:items-start",children:[i.jsx("strong",{className:"text-sm text-white/45",children:A}),i.jsx("span",{className:"line-clamp-3 text-sm leading-6",children:E}),i.jsx("button",{type:"button",onClick:()=>g(h),className:"text-left text-xs font-black uppercase text-[#ffcc0b]",children:"Editar"})]},A))}),i.jsx("div",{className:"mt-7 rounded-2xl border border-[#ffcc0b]/25 bg-[#ffcc0b]/5 p-5",children:i.jsxs("div",{className:"flex items-start gap-3",children:[i.jsx(dd,{className:"mt-1 h-6 w-6 shrink-0 text-[#ffcc0b]"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-black",children:"Termos de adesão - Verão Premiado 2027"}),i.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:"O aceite registra data, horário, versão dos termos, declarações, responsável e uma referência imutável das condições comerciais. Não constitui assinatura digital certificada."}),i.jsxs("a",{href:Ks,target:"_blank",className:"mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#ffcc0b]",children:[i.jsx(Wl,{className:"h-4 w-4"}),"Ler e baixar a proposta comercial"]})]})]})}),i.jsx("div",{className:"mt-6 space-y-3",children:v0.map((A,E)=>i.jsxs("label",{className:"flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 text-sm leading-6",children:[i.jsx("input",{type:"checkbox",checked:d[E],onChange:h=>m(d.map((N,U)=>U===E?h.target.checked:N)),className:"mt-1 h-5 w-5 shrink-0 accent-[#ffcc0b]"}),A]},A))}),i.jsxs("label",{className:"mt-5 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#ffcc0b]/45 bg-[#ffcc0b]/7 p-5 font-black",children:[i.jsx("input",{type:"checkbox",checked:f,onChange:A=>v(A.target.checked),className:"h-6 w-6 shrink-0 accent-[#ffcc0b]"}),"Eu li e concordo com os termos de adesão ao Verão Premiado 2027."]})]})}function AE({confirmation:s,form:r}){return i.jsx("div",{className:"min-h-screen bg-[radial-gradient(circle_at_top,rgba(242,11,47,.2),transparent_38%),#050305] px-5 py-12 text-white",children:i.jsxs("main",{className:"mx-auto max-w-2xl",children:[i.jsx(Fa,{size:"md"}),i.jsxs("div",{className:"mt-10 rounded-3xl border border-white/12 bg-[#0c080a] p-6 sm:p-10",children:[i.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-black",children:i.jsx(Yt,{className:"h-7 w-7"})}),i.jsx("h1",{className:"mt-6 text-4xl font-black sm:text-5xl",children:"Recebemos sua inscrição!"}),i.jsx("p",{className:"mt-4 leading-7 text-white/60",children:"Obrigado por fazer parte do Verão Premiado 2027 da VM Mídias. Nossa equipe irá conferir suas informações e dar continuidade ao processo de adesão."}),i.jsx("dl",{className:"mt-8 divide-y divide-white/10 rounded-2xl border border-white/10",children:[["Comércio",r.businessName],["Protocolo",s.protocol],["Data da inscrição",new Intl.DateTimeFormat("pt-BR",{dateStyle:"long",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(s.accepted_at))],["Forma de pagamento",r.paymentOption==="avista"?"À vista - R$ 250,00":"Parcelado - 2x de R$ 150,00"],["Status","Recebida - aguardando análise"]].map(([c,d])=>i.jsxs("div",{className:"grid gap-1 p-4 sm:grid-cols-[160px_1fr]",children:[i.jsx("dt",{className:"text-sm text-white/45",children:c}),i.jsx("dd",{className:"font-bold",children:d})]},c))}),i.jsxs("div",{className:"mt-7 rounded-xl bg-white/5 p-5",children:[i.jsx("p",{className:"font-black",children:"Próximos passos"}),i.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:"A equipe validará os dados, a disponibilidade da tela, os materiais e a contribuição. Depois entrará em contato pelo canal informado. O recebimento não confirma pagamento nem aprovação definitiva."})]}),i.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row",children:[i.jsx("a",{href:`https://wa.me/${ze.company.whatsappRaw}?text=${encodeURIComponent(`Olá! Minha inscrição no Verão Premiado 2027 é ${s.protocol}.`)}`,target:"_blank",rel:"noreferrer",className:"inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f20b2f] px-5 text-sm font-black uppercase",children:"Falar com a VM Mídias"}),i.jsx("a",{href:"/",className:"inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold",children:"Voltar ao site"})]})]})]})})}const jv={registration_status:["recebida","em_analise","aprovada","cancelada"],financial_status:["aguardando_pagamento","parcialmente_pago","pago"],spot_status:["aguardando_producao","em_producao","aguardando_aprovacao","finalizado"],video_status:["aguardando_producao","em_producao","aguardando_aprovacao","finalizado"],kit_status:["aguardando_producao","em_producao","disponivel","entregue"],contribution_status:["pendente","definida","recebida"]},E0={recebida:"Recebida",em_analise:"Em análise",aprovada:"Aprovada",cancelada:"Cancelada",aguardando_pagamento:"Aguardando pagamento",parcialmente_pago:"Parcialmente pago",pago:"Pago",aguardando_producao:"Aguardando produção",em_producao:"Em produção",aguardando_aprovacao:"Aguardando aprovação",finalizado:"Finalizado",disponivel:"Disponível",entregue:"Entregue",pendente:"Pendente",definida:"Definida"};function wE(){const[s,r]=b.useState(()=>fd()),[c,d]=b.useState([]),[m,f]=b.useState([]),[v,g]=b.useState(""),[y,A]=b.useState(""),[E,h]=b.useState("registrations"),[N,U]=b.useState(!!s),[I,k]=b.useState(!1),[B,q]=b.useState(""),Y=async J=>{U(!0),q("");try{const Q=await $l(J);r(Q);const[X,Te]=await Promise.all([iE(Q),oE(Q)]);d(X),f(Te)}catch(Q){q(Q instanceof Error?Q.message:"Não foi possível carregar o painel.")}finally{U(!1)}};b.useEffect(()=>{document.title="Verão Premiado 2027 | Administração",s&&Y(s)},[]);const H=c.find(J=>J.id===v),oe=b.useMemo(()=>{const J=y.trim().toLocaleLowerCase("pt-BR");return J?c.filter(Q=>`${Q.business_name} ${Q.responsible_name} ${Q.protocol}`.toLocaleLowerCase("pt-BR").includes(J)):c},[y,c]);if(!s)return i.jsx(vd,{loading:I,error:B,onLogin:async(J,Q)=>{k(!0),q("");try{const X=await hd(J,Q);r(X),await Y(X)}catch(X){q(X instanceof Error?X.message:"Não foi possível entrar.")}finally{k(!1)}}});const ue=()=>{const J=["Protocolo","Comércio","CNPJ","Responsável","CPF","Telefone","Pagamento","Inscrição","Financeiro","Spot","Vídeo","Kit","Contribuição","Data"],Q=c.map(P=>[P.protocol,P.business_name,P.cnpj||"",P.responsible_name,P.cpf,P.responsible_phone,P.payment_option,P.registration_status,P.financial_status,P.spot_status,P.video_status,P.kit_status,P.contribution_status,P.created_at]),X=[J,...Q].map(P=>P.map(se=>`"${String(se).replace(/"/g,'""')}"`).join(";")).join(`
`),Te=document.createElement("a");Te.href=URL.createObjectURL(new Blob(["\uFEFF",X],{type:"text/csv;charset=utf-8"})),Te.download="verao-premiado-2027-inscricoes.csv",Te.click(),URL.revokeObjectURL(Te.href)};return i.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[i.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:i.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[i.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[i.jsx("a",{href:"/",children:i.jsx(Fa,{size:"sm"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"text-[10px] font-black uppercase tracking-[.2em] text-[#ffcc0b]",children:"Administração"}),i.jsx("h1",{className:"truncate font-black",children:"Verão Premiado 2027"})]})]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsxs("a",{href:"/admin/solicitacoes",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[i.jsx($u,{className:"h-4 w-4"}),i.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),i.jsx("button",{onClick:()=>void Y(s),disabled:N,"aria-label":"Atualizar",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:i.jsx(ud,{className:`h-4 w-4 ${N?"animate-spin":""}`})}),i.jsx("button",{onClick:()=>{Yi(),r(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:i.jsx(cd,{className:"h-4 w-4"})})]})]})}),i.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8",children:[i.jsxs("div",{className:"flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[.18em] text-[#ffcc0b]",children:"Gestão da campanha"}),i.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Inscrições, produção e premiação."})]}),i.jsxs("div",{className:"flex flex-wrap gap-2",children:[i.jsxs("button",{onClick:()=>h("registrations"),className:`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${E==="registrations"?"bg-[#f40b36]":"border border-white/12"}`,children:[i.jsx(u2,{className:"h-4 w-4"}),"Inscrições"]}),i.jsxs("button",{onClick:()=>h("screens"),className:`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${E==="screens"?"bg-[#f40b36]":"border border-white/12"}`,children:[i.jsx(L2,{className:"h-4 w-4"}),"Telas"]})]})]}),B&&i.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:B}),N?i.jsx("div",{className:"flex min-h-64 items-center justify-center",children:i.jsx(pa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):E==="screens"?i.jsx(CE,{session:s,screens:m,onSaved:()=>void Y(s)}):H?i.jsx(OE,{row:H,session:s,screen:m.find(J=>J.id===H.screen_id),onBack:()=>g(""),onUpdated:J=>d(Q=>Q.map(X=>X.id===J.id?J:X))}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[i.jsxs("label",{className:"relative block w-full max-w-md",children:[i.jsx(Ps,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),i.jsx("input",{value:y,onChange:J=>A(J.target.value),placeholder:"Buscar comércio, responsável ou protocolo",className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]"})]}),i.jsxs("button",{onClick:ue,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 px-4 text-xs font-black uppercase",children:[i.jsx(Wl,{className:"h-4 w-4"}),"Exportar CSV"]})]}),oe.length?i.jsx("section",{className:"mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:oe.map(J=>i.jsxs("button",{onClick:()=>g(J.id),className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#f40b36]/55",children:[i.jsxs("div",{className:"flex items-center justify-between gap-3",children:[i.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-3 py-1 text-[10px] font-black uppercase text-[#ff6982]",children:E0[J.registration_status]}),i.jsx("span",{className:"text-xs text-white/35",children:new Date(J.created_at).toLocaleDateString("pt-BR")})]}),i.jsx("h3",{className:"mt-4 text-xl font-black",children:J.business_name}),i.jsx("p",{className:"mt-1 text-sm text-white/48",children:J.responsible_name}),i.jsx("p",{className:"mt-4 border-t border-white/10 pt-4 text-xs font-bold text-white/38",children:J.protocol})]},J.id))}):i.jsx("p",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhuma inscrição encontrada."})]})]})]})}function OE({row:s,session:r,screen:c,onBack:d,onUpdated:m}){const[f,v]=b.useState(""),[g,y]=b.useState(""),A=async(h,N)=>{v(h),y("");try{await lE(r,s.id,{[h]:N||null}),m({...s,[h]:N})}catch(U){y(U instanceof Error?U.message:"Falha ao atualizar.")}finally{v("")}},E=async h=>{try{window.open(await sE(r,h),"_blank","noopener,noreferrer")}catch(N){y(N instanceof Error?N.message:"Não foi possível abrir.")}};return i.jsxs("section",{className:"mt-7",children:[i.jsxs("button",{onClick:d,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55",children:[i.jsx(Xi,{className:"h-4 w-4"}),"Todas as inscrições"]}),i.jsxs("div",{className:"mt-5 grid gap-5 xl:grid-cols-[1.2fr_.8fr]",children:[i.jsxs("div",{className:"space-y-5",children:[i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:s.protocol}),i.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-4xl",children:s.business_name}),i.jsxs("p",{className:"mt-2 text-sm text-white/50",children:[s.segment," · ",s.business_phone," · ",s.business_instagram||"Sem Instagram"]}),i.jsx(Pn,{title:"Endereço",value:`${s.street}, ${s.address_number}${s.complement?` - ${s.complement}`:""} · ${s.neighborhood} · ${s.city}/${s.state} · CEP ${s.cep}`}),i.jsx(Pn,{title:"Responsável",value:`${s.responsible_name} · CPF ${s.cpf} · ${s.responsible_phone} · ${s.responsible_email||"Sem e-mail"}`})]}),i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[i.jsx("h3",{className:"text-xl font-black",children:"Conteúdo publicitário"}),i.jsx(Pn,{title:"Briefing da rádio",value:s.radio_briefing}),i.jsx(Pn,{title:"Briefing do vídeo",value:s.motion_briefing}),i.jsx(Pn,{title:"Tela escolhida",value:c?`${c.name} · ${c.address}`:s.screen_id}),i.jsx(Pn,{title:"Investimento",value:s.payment_option==="avista"?"R$ 250,00 à vista":"2x de R$ 150,00 (R$ 300,00)"}),i.jsx(Pn,{title:"Contribuição",value:`${s.contribution_type}: ${s.contribution_description}${s.contribution_conditions?` · Condições: ${s.contribution_conditions}`:""}`})]}),i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[i.jsx("h3",{className:"text-xl font-black",children:"Arquivos privados"}),i.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:s.assets.map(h=>i.jsxs("button",{onClick:()=>void E(h.path),className:"flex items-center gap-3 rounded-xl border border-white/10 p-4 text-left",children:[i.jsx(a0,{className:"h-6 w-6 text-[#ffcc0b]"}),i.jsx("span",{className:"min-w-0 flex-1 truncate text-sm font-bold",children:h.name}),i.jsx(Wl,{className:"h-4 w-4 text-white/35"})]},h.path))})]})]}),i.jsxs("aside",{className:"space-y-5",children:[i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[i.jsx("h3",{className:"font-black",children:"Andamento"}),i.jsx("div",{className:"mt-5 space-y-4",children:Object.keys(jv).map(h=>i.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wide text-white/48",children:[TE[h],i.jsx("select",{value:s[h],disabled:f===h,onChange:N=>void A(h,N.target.value),className:"mt-2 h-11 w-full rounded-lg border border-white/12 bg-[#06070a] px-3 text-sm normal-case text-white outline-none",children:jv[h].map(N=>i.jsx("option",{value:N,children:E0[N]},N))})]},h))})]}),i.jsx(Sv,{label:"Observações financeiras",value:s.payment_notes||"",disabled:!!f,onSave:h=>void A("payment_notes",h)}),i.jsx(Sv,{label:"Observações internas",value:s.internal_notes||"",disabled:!!f,onSave:h=>void A("internal_notes",h)}),i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[i.jsx("h3",{className:"font-black",children:"Registro do aceite"}),i.jsx("p",{className:"mt-3 text-sm text-white/55",children:new Date(s.accepted_at).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}),i.jsxs("p",{className:"mt-2 text-xs text-white/35",children:["Versão: ",s.terms_version]}),i.jsxs("p",{className:"mt-4 text-xs leading-5 text-white/42",children:[s.declarations.filter(Boolean).length," de ",s.declarations.length," declarações registradas."]})]}),g&&i.jsx("p",{className:"rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:g})]})]})]})}const TE={registration_status:"Inscrição",financial_status:"Financeiro",spot_status:"Spot",video_status:"Vídeo",kit_status:"Kit promocional",contribution_status:"Contribuição"};function Pn({title:s,value:r}){return i.jsxs("div",{className:"mt-5 border-t border-white/10 pt-4",children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-wide text-white/35",children:s}),i.jsx("p",{className:"mt-2 whitespace-pre-wrap text-sm leading-7 text-white/68",children:r})]})}function Sv({label:s,value:r,disabled:c,onSave:d}){const[m,f]=b.useState(r);return b.useEffect(()=>f(r),[r]),i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[i.jsxs("label",{className:"text-sm font-black",children:[s,i.jsx("textarea",{value:m,onChange:v=>f(v.target.value),className:"mt-3 min-h-28 w-full rounded-lg border border-white/12 bg-black/20 p-3 text-sm outline-none"})]}),i.jsxs("button",{disabled:c||m===r,onClick:()=>d(m),className:"mt-3 inline-flex h-10 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase disabled:opacity-35",children:[i.jsx(Yt,{className:"h-4 w-4"}),"Salvar"]})]})}function CE({session:s,screens:r,onSaved:c}){const d={name:"",address:"",description:"",photo_url:"",capacity:"",is_active:!0},[m,f]=b.useState(d),[v,g]=b.useState(!1),[y,A]=b.useState(""),E=async()=>{if(!m.name.trim()||!m.address.trim()){A("Informe nome e endereço reais da tela.");return}g(!0),A("");try{await Nv(s,{name:m.name,address:m.address,description:m.description,photo_url:m.photo_url,capacity:m.capacity?Number(m.capacity):null,is_active:m.is_active}),f(d),c()}catch(N){A(N instanceof Error?N.message:"Não foi possível salvar.")}finally{g(!1)}},h=async N=>{try{await Nv(s,{id:N.id,name:N.name,address:N.address,description:N.description||"",photo_url:N.photo_url||"",capacity:N.capacity,is_active:!N.is_active}),c()}catch(U){A(U instanceof Error?U.message:"Não foi possível atualizar.")}};return i.jsxs("section",{className:"mt-7 grid gap-6 lg:grid-cols-[.75fr_1.25fr]",children:[i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[i.jsx("h3",{className:"text-xl font-black",children:"Cadastrar tela real"}),i.jsx("p",{className:"mt-2 text-sm leading-6 text-white/45",children:"As opções ativas aparecem no formulário público. Não use dados fictícios."}),i.jsx("div",{className:"mt-5 space-y-4",children:[["Nome do local","name"],["Endereço","address"],["Descrição","description"],["URL da foto","photo_url"],["Capacidade (opcional)","capacity"]].map(([N,U])=>i.jsxs("label",{className:"block text-sm font-bold",children:[N,i.jsx("input",{type:U==="capacity"?"number":"text",value:String(m[U]),onChange:I=>f(k=>({...k,[U]:I.target.value})),className:"mt-2 h-11 w-full rounded-lg border border-white/12 bg-black/20 px-3 outline-none"})]},U))}),y&&i.jsx("p",{className:"mt-4 text-sm text-red-300",children:y}),i.jsxs("button",{onClick:()=>void E(),disabled:v,className:"mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase",children:[i.jsx(n0,{className:"h-4 w-4"}),"Cadastrar tela"]})]}),i.jsxs("div",{children:[i.jsxs("h3",{className:"text-xl font-black",children:["Telas cadastradas (",r.length,")"]}),i.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2",children:r.map(N=>i.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[i.jsxs("div",{className:"flex items-start justify-between gap-3",children:[i.jsxs("div",{children:[i.jsx("h4",{className:"font-black",children:N.name}),i.jsx("p",{className:"mt-2 text-sm text-white/45",children:N.address})]}),i.jsx("span",{className:`rounded-full px-2.5 py-1 text-[10px] font-black uppercase ${N.is_active?"bg-emerald-400/10 text-emerald-300":"bg-white/8 text-white/40"}`,children:N.is_active?"Ativa":"Inativa"})]}),i.jsxs("p",{className:"mt-4 text-xs text-white/35",children:["Capacidade: ",N.capacity??"Sem limite"]}),i.jsx("button",{onClick:()=>void h(N),className:"mt-4 h-9 rounded-lg border border-white/12 px-3 text-xs font-bold",children:N.is_active?"Desativar":"Ativar"})]},N.id))})]})]})}const Av=5,RE=25*1024*1024,_E=new Set(["image/jpeg","image/png","image/webp","image/svg+xml"]),Ta="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#07080b] px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition hover:border-white/30 focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/25",Ca="block text-sm font-bold text-white",ME=[["institucional","Publicidade institucional da marca"],["produto_servico","Divulgar determinado produto ou serviço"],["promocao","Promoção exclusiva e/ou inédita"],["fortalecer_marca","Fortalecer a marca"],["visita_estabelecimento","Incentivar a visita no meu estabelecimento"],["outro","Outro"]];function DE(){const s=new Date;return`VMV-${`${s.getFullYear()}${String(s.getMonth()+1).padStart(2,"0")}${String(s.getDate()).padStart(2,"0")}`}-${crypto.randomUUID().slice(0,6).toUpperCase()}`}function Ht(s){return s.trim()||null}function Ju(s,r){if(s.length+r.length>Av)return`Envie no máximo ${Av} imagens.`;const c=r.find(m=>!_E.has(m.type));if(c)return`O formato de “${c.name}” não é aceito.`;const d=r.find(m=>m.size>RE);return d?`O arquivo “${d.name}” ultrapassa 25 MB.`:""}function Ii({children:s}){return i.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[i.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:i.jsxs("div",{className:"mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8",children:[i.jsx(Nt,{to:"/","aria-label":"Voltar ao site",children:i.jsx(Fa,{size:"sm"})}),i.jsxs("div",{className:"flex items-center gap-5",children:[i.jsx("span",{className:"hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline",children:"Portal de vídeos"}),i.jsxs(Nt,{to:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 hover:text-white",children:[i.jsx(Xi,{className:"h-4 w-4"}),i.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})]})}),s]})}function j0({eyebrow:s,title:r,copy:c}){return i.jsxs("section",{className:"relative overflow-hidden border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16",children:[i.jsx("div",{className:"pointer-events-none absolute inset-0 bg-led-grid opacity-35"}),i.jsx("div",{className:"pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]"}),i.jsxs("div",{className:"relative mx-auto max-w-4xl text-center",children:[i.jsxs("p",{className:"brand-eyebrow justify-center",children:[i.jsx("span",{className:"brand-eyebrow-line"}),s]}),i.jsx("h1",{className:"brand-section-title",children:r}),i.jsx("p",{className:"brand-section-copy mx-auto",children:c})]})]})}function Yu(){const[s,r]=b.useState([]),[c,d]=b.useState(""),[m,f]=b.useState(!0),[v,g]=b.useState("");b.useEffect(()=>{document.title="Escolha seu negócio | VM MÍDIAS",d0().then(r).catch(A=>g(A instanceof Error?A.message:"Não foi possível carregar os negócios.")).finally(()=>f(!1))},[]);const y=b.useMemo(()=>{const A=c.trim().toLocaleLowerCase("pt-BR");return A?s.filter(E=>`${E.name} ${E.segment}`.toLocaleLowerCase("pt-BR").includes(A)):s},[s,c]);return i.jsx(Ii,{children:i.jsxs("main",{children:[i.jsx(j0,{eyebrow:"Seu espaço na VM MÍDIAS",title:i.jsxs(i.Fragment,{children:["Encontre seu ",i.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Pesquise o nome do seu negócio para consultar os dados cadastrados e solicitar um novo vídeo."}),i.jsxs("section",{className:"mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14",children:[i.jsxs("div",{className:"flex flex-col gap-4 rounded-2xl border border-white/12 bg-[#0d0f13] p-4 sm:flex-row sm:items-center sm:p-5",children:[i.jsxs("label",{className:"relative min-w-0 flex-1",children:[i.jsx(Ps,{className:"pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35"}),i.jsx("input",{value:c,onChange:A=>d(A.target.value),className:"h-14 w-full rounded-xl border border-white/15 bg-black/30 pl-12 pr-4 text-base outline-none placeholder:text-white/35 focus:border-[#f40b36]",placeholder:"Digite o nome do negócio",autoFocus:!0})]}),i.jsxs(Nt,{to:"/solicitar-video/novo-negocio",className:"brand-button brand-button-primary whitespace-nowrap",children:[i.jsx(n0,{className:"h-4 w-4"}),"Cadastrar negócio"]})]}),v&&i.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),m?i.jsx("div",{className:"flex min-h-64 items-center justify-center",children:i.jsx(pa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):y.length?i.jsx("div",{className:"mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:y.map(A=>i.jsx(zE,{business:A},A.id))}):i.jsxs("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center",children:[i.jsx($i,{className:"mx-auto h-9 w-9 text-white/25"}),i.jsx("h2",{className:"mt-4 text-xl font-black",children:"Negócio não encontrado"}),i.jsx("p",{className:"mt-2 text-sm text-white/50",children:"Confira o nome ou cadastre o negócio para continuar."})]})]})]})})}function zE({business:s}){const r=s.assets[0];return i.jsxs(Nt,{to:`/solicitar-video/negocio/${s.id}`,className:"group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f13] p-5 transition hover:-translate-y-1 hover:border-[#f40b36]/55 hover:shadow-2xl hover:shadow-[#f40b36]/10",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35",children:r?i.jsx("img",{src:Zn(r.path),alt:`Logo de ${s.name}`,className:"h-full w-full object-contain p-2"}):i.jsx($i,{className:"h-8 w-8 text-white/30"})}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("h2",{className:"truncate text-xl font-black",children:s.name}),i.jsx("p",{className:"mt-1 truncate text-sm text-white/50",children:s.segment})]})]}),i.jsxs("span",{className:"mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.1em] text-white/65 group-hover:text-white",children:["Abrir negócio ",i.jsx(yt,{className:"h-4 w-4"})]})]})}const S0={name:"",whatsapp:"",instagram:"",address:"",segment:"",description:"",consent:!1};function Qu(){const[s,r]=b.useState(S0),[c,d]=b.useState([]),[m,f]=b.useState(!1),[v,g]=b.useState(""),[y,A]=b.useState(null);b.useEffect(()=>{document.title="Cadastrar negócio | VM MÍDIAS"},[]);const E=N=>{const U=Array.from(N.target.files??[]);N.target.value="";const I=Ju(c,U);if(I)return g(I);g(""),d(k=>[...k,...U])},h=async N=>{if(N.preventDefault(),g(""),!c.length)return g("Envie o logo ou ao menos uma imagem do negócio.");f(!0);try{const U=crypto.randomUUID(),I=await u0(U,c),k={id:U,name:s.name.trim(),whatsapp:Ht(s.whatsapp),instagram:Ht(s.instagram),address:Ht(s.address),segment:s.segment.trim(),description:Ht(s.description),assets:I,consent:!0};await yN(k),A({...k,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),window.scrollTo({top:0,behavior:"smooth"})}catch(U){g(U instanceof Error?U.message:"Não foi possível cadastrar o negócio.")}finally{f(!1)}};return y?i.jsx(w0,{title:"Negócio cadastrado",copy:"Agora o negócio já pode ser encontrado na pesquisa e receber novas solicitações de vídeo.",action:i.jsxs(Nt,{to:`/solicitar-video/negocio/${y.id}`,className:"brand-button brand-button-primary",children:["Abrir negócio ",i.jsx(yt,{className:"h-4 w-4"})]})}):i.jsx(Ii,{children:i.jsxs("main",{children:[i.jsx(j0,{eyebrow:"Primeiro acesso",title:i.jsxs(i.Fragment,{children:["Cadastre seu ",i.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Preencha somente as informações principais. Elas ficarão salvas para os próximos vídeos."}),i.jsx("section",{className:"mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14",children:i.jsxs("form",{onSubmit:h,className:"brand-panel rounded-2xl p-5 sm:p-8",children:[i.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[i.jsxs("label",{className:`${Ca} sm:col-span-2`,children:["Nome do negócio *",i.jsx("input",{required:!0,maxLength:120,value:s.name,onChange:N=>r({...s,name:N.target.value}),className:Ta,placeholder:"Nome do negócio"})]}),i.jsxs("label",{className:Ca,children:["Segmento do negócio *",i.jsx("input",{required:!0,maxLength:120,value:s.segment,onChange:N=>r({...s,segment:N.target.value}),className:Ta,placeholder:"Ex.: bar, mercado, academia"})]}),i.jsxs("label",{className:Ca,children:["Endereço (caso seja físico)",i.jsx("input",{maxLength:300,value:s.address,onChange:N=>r({...s,address:N.target.value}),className:Ta,placeholder:"Rua, número e bairro"})]}),i.jsxs("label",{className:Ca,children:["WhatsApp",i.jsx("input",{maxLength:30,value:s.whatsapp,onChange:N=>r({...s,whatsapp:N.target.value}),className:Ta,placeholder:"(15) 99999-9999"})]}),i.jsxs("label",{className:Ca,children:["Instagram",i.jsx("input",{maxLength:120,value:s.instagram,onChange:N=>r({...s,instagram:N.target.value}),className:Ta,placeholder:"@nomedonegocio"})]})]}),i.jsxs("label",{className:`${Ca} mt-5`,children:["Faça uma breve descrição sobre o negócio",i.jsx("textarea",{rows:4,maxLength:1200,value:s.description,onChange:N=>r({...s,description:N.target.value}),className:Ta,placeholder:"Conte brevemente o que o negócio oferece"})]}),i.jsx(Wu,{files:c,onFiles:E,onRemove:N=>d(U=>U.filter((I,k)=>k!==N)),title:"Logo e imagens do negócio *",copy:"Envie primeiro o logo e depois fotos da fachada, ambiente, produtos ou serviços. Máximo de 5 imagens."}),i.jsx(A0,{checked:s.consent,onChange:N=>r({...s,consent:N})}),v&&i.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),i.jsx("button",{disabled:m,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:m?i.jsxs(i.Fragment,{children:[i.jsx(pa,{className:"h-4 w-4 animate-spin"}),"Salvando negócio…"]}):i.jsxs(i.Fragment,{children:["Cadastrar negócio ",i.jsx(yt,{className:"h-4 w-4"})]})})]})})]})})}function wv(){const{businessId:s=""}=b1(),[r,c]=b.useState(null),[d,m]=b.useState(!0),[f,v]=b.useState(!1),[g,y]=b.useState(S0),[A,E]=b.useState([]),[h,N]=b.useState(""),[U,I]=b.useState(""),[k,B]=b.useState(""),[q,Y]=b.useState([]),[H,oe]=b.useState(!1),[ue,J]=b.useState(!1),[Q,X]=b.useState(""),[Te,P]=b.useState("");b.useEffect(()=>{d0().then(z=>{const V=z.find(F=>F.id===s)||null;c(V),V&&y({name:V.name,whatsapp:V.whatsapp||"",instagram:V.instagram||"",address:V.address||"",segment:V.segment,description:V.description||"",consent:!0})}).catch(z=>X(z instanceof Error?z.message:"Não foi possível abrir o negócio.")).finally(()=>m(!1))},[s]);const se=z=>{const V=Array.from(z.target.files??[]);z.target.value="";const F=Ju(q,V);if(F)return X(F);X(""),Y(pe=>[...pe,...V])},de=z=>{const V=Array.from(z.target.files??[]);z.target.value="";const F=Ju(A,V);if(F)return X(F);if(((r==null?void 0:r.assets.length)||0)+A.length+V.length>10)return X("O negócio pode possuir no máximo 10 imagens.");X(""),E(pe=>[...pe,...V])},qe=async()=>{if(r){J(!0),X("");try{const z=A.length?await u0(r.id,A,r.assets.length):[],V={name:g.name.trim(),whatsapp:Ht(g.whatsapp),instagram:Ht(g.instagram),address:Ht(g.address),segment:g.segment.trim(),description:Ht(g.description)};await NN(r.id,V,z),c({...r,...V,assets:[...r.assets,...z],updated_at:new Date().toISOString()}),E([]),v(!1)}catch(z){X(z instanceof Error?z.message:"Não foi possível alterar os dados.")}finally{J(!1)}}},Ie=async z=>{if(z.preventDefault(),!!r){if(X(""),!h)return X("Escolha um objetivo para o vídeo.");J(!0);try{const V=crypto.randomUUID(),F=DE(),pe=q.length?await bN(V,q,r.id):[];await EN({id:V,business_id:r.id,protocol:F,campaign_objective:h,objective_other:h==="outro"?Ht(U):null,video_idea:k.trim(),uploaded_assets:pe,consent:!0,video_format:"vertical_9_16",duration_seconds:20}),P(F),window.scrollTo({top:0,behavior:"smooth"})}catch(V){X(V instanceof Error?V.message:"Não foi possível enviar o pedido.")}finally{J(!1)}}};if(d)return i.jsx(Ii,{children:i.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:i.jsx(pa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})})});if(!r)return i.jsx(Ii,{children:i.jsxs("div",{className:"mx-auto max-w-xl px-5 py-24 text-center",children:[i.jsx("h1",{className:"text-3xl font-black",children:"Negócio não encontrado"}),i.jsx(Nt,{to:"/solicitar-video",className:"brand-button brand-button-primary mt-7",children:"Voltar para a pesquisa"})]})});if(Te)return i.jsx(w0,{title:"Novo vídeo solicitado",copy:`Recebemos o pedido de ${r.name}. Guarde o protocolo ${Te}.`,action:i.jsx(Nt,{to:"/solicitar-video",className:"brand-button brand-button-primary",children:"Voltar aos negócios"})});const re=r.assets[0];return i.jsx(Ii,{children:i.jsxs("main",{className:"mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14",children:[i.jsxs(Nt,{to:"/solicitar-video",className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[i.jsx(Xi,{className:"h-4 w-4"}),"Voltar para a pesquisa"]}),i.jsxs("section",{className:"mt-6 rounded-2xl border border-white/12 bg-[#0d0f13] p-5 sm:p-8",children:[i.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[i.jsx("div",{className:"flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-black/30",children:re?i.jsx("img",{src:Zn(re.path),alt:`Logo de ${r.name}`,className:"h-full w-full object-contain p-2"}):i.jsx($i,{className:"h-9 w-9 text-white/30"})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Negócio cadastrado"}),i.jsx("h1",{className:"mt-2 text-3xl font-black sm:text-5xl",children:r.name}),i.jsxs("p",{className:"mt-2 text-white/50",children:[r.segment,r.address?` · ${r.address}`:""]})]}),i.jsxs("button",{type:"button",onClick:()=>v(!f),className:"brand-button brand-button-outline",children:[i.jsx(A2,{className:"h-4 w-4"}),"Alterar informações"]})]}),f&&i.jsxs("div",{className:"mt-7 border-t border-white/10 pt-7",children:[i.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[i.jsxs("label",{className:`${Ca} sm:col-span-2`,children:["Nome do negócio *",i.jsx("input",{required:!0,value:g.name,onChange:z=>y({...g,name:z.target.value}),className:Ta})]}),i.jsxs("label",{className:Ca,children:["Segmento *",i.jsx("input",{required:!0,value:g.segment,onChange:z=>y({...g,segment:z.target.value}),className:Ta})]}),i.jsxs("label",{className:Ca,children:["Endereço",i.jsx("input",{value:g.address,onChange:z=>y({...g,address:z.target.value}),className:Ta})]}),i.jsxs("label",{className:Ca,children:["WhatsApp",i.jsx("input",{value:g.whatsapp,onChange:z=>y({...g,whatsapp:z.target.value}),className:Ta})]}),i.jsxs("label",{className:Ca,children:["Instagram",i.jsx("input",{maxLength:120,value:g.instagram,onChange:z=>y({...g,instagram:z.target.value}),className:Ta,placeholder:"@nomedonegocio"})]})]}),i.jsxs("label",{className:`${Ca} mt-5`,children:["Descrição",i.jsx("textarea",{rows:3,value:g.description,onChange:z=>y({...g,description:z.target.value}),className:Ta})]}),i.jsx(Wu,{files:A,onFiles:de,onRemove:z=>E(V=>V.filter((F,pe)=>pe!==z)),title:"Adicionar novas imagens",copy:`Este negócio possui ${r.assets.length} de 10 imagens. Você pode adicionar até 5 por vez.`}),i.jsxs("button",{type:"button",disabled:ue,onClick:()=>void qe(),className:"brand-button brand-button-primary mt-5 disabled:opacity-50",children:[ue?i.jsx(pa,{className:"h-4 w-4 animate-spin"}):null,"Salvar alterações"]})]})]}),i.jsxs("form",{onSubmit:Ie,className:"brand-panel mt-7 rounded-2xl p-5 sm:p-8",children:[i.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Novo pedido"}),i.jsx("h2",{className:"mt-2 text-2xl font-black sm:text-4xl",children:"Solicitar novo vídeo"}),i.jsxs("p",{className:"mt-3 text-sm leading-6 text-white/50",children:["O pedido ficará automaticamente relacionado a ",r.name,"."]}),i.jsxs("fieldset",{className:"mt-8",children:[i.jsx("legend",{className:"text-base font-black",children:"1. Objetivo do vídeo *"}),i.jsx("p",{className:"mt-1 text-sm text-white/45",children:"Escolha apenas uma opção."}),i.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:ME.map(([z,V])=>i.jsxs("label",{className:`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition ${h===z?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-black/20 hover:border-white/25"}`,children:[i.jsx("input",{required:!0,type:"radio",name:"objective",value:z,checked:h===z,onChange:()=>N(z),className:"h-4 w-4 accent-[#f40b36]"}),V]},z))}),h==="outro"&&i.jsxs("label",{className:`${Ca} mt-4`,children:["Qual?",i.jsx("input",{maxLength:300,value:U,onChange:z=>I(z.target.value),className:Ta,placeholder:"Descreva o outro objetivo"})]})]}),i.jsxs("label",{className:`${Ca} mt-8`,children:["2. Escreva brevemente o que deseja no vídeo",i.jsx("textarea",{rows:5,maxLength:2400,value:k,onChange:z=>B(z.target.value),className:Ta,placeholder:"Conte sua ideia de forma simples"}),i.jsxs("span",{className:"mt-2 block text-xs font-normal text-white/35",children:[k.length,"/2400 caracteres"]})]}),i.jsx(Wu,{files:q,onFiles:se,onRemove:z=>Y(V=>V.filter((F,pe)=>pe!==z)),title:"3. Imagens adicionais",copy:"Envie somente imagens úteis para este novo vídeo. Máximo de 5 imagens."}),i.jsx(A0,{checked:H,onChange:oe}),Q&&i.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:Q}),i.jsx("button",{disabled:ue,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:ue?i.jsxs(i.Fragment,{children:[i.jsx(pa,{className:"h-4 w-4 animate-spin"}),"Enviando pedido…"]}):i.jsxs(i.Fragment,{children:["Solicitar novo vídeo ",i.jsx(yt,{className:"h-4 w-4"})]})})]})]})})}function Wu({files:s,onFiles:r,onRemove:c,title:d,copy:m}){return i.jsxs("div",{className:"mt-7",children:[i.jsx("p",{className:"text-sm font-bold",children:d}),i.jsxs("label",{className:"mt-2 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/20 bg-black/20 px-5 py-7 text-center hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5",children:[i.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp,image/svg+xml",onChange:r,className:"sr-only"}),i.jsx(Vy,{className:"h-7 w-7 text-[#ff3155]"}),i.jsx("strong",{className:"mt-3 text-sm",children:"Escolher imagens"}),i.jsx("span",{className:"mt-2 max-w-lg text-xs leading-5 text-white/40",children:m})]}),s.length>0&&i.jsx("ul",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:s.map((f,v)=>i.jsxs("li",{className:"flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[i.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]",children:f.type.startsWith("image/")?i.jsx(o2,{className:"h-4 w-4"}):i.jsx(e0,{className:"h-4 w-4"})}),i.jsx("span",{className:"min-w-0 flex-1 truncate text-xs font-bold",children:f.name}),i.jsx("button",{type:"button",onClick:()=>c(v),"aria-label":`Remover ${f.name}`,className:"rounded-md p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300",children:i.jsx(l0,{className:"h-4 w-4"})})]},`${f.name}-${f.lastModified}-${v}`))})]})}function A0({checked:s,onChange:r}){return i.jsxs("label",{className:"mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60",children:[i.jsx("input",{required:!0,type:"checkbox",checked:s,onChange:c=>r(c.target.checked),className:"mt-1 h-4 w-4 accent-[#f40b36]"}),"Autorizo a VM MÍDIAS a utilizar as informações e imagens enviadas para produzir os vídeos e entrar em contato."]})}function w0({title:s,copy:r,action:c}){return i.jsx(Ii,{children:i.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-76px)] max-w-2xl items-center px-5 py-16",children:i.jsxs("section",{className:"w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-8 text-center",children:[i.jsx(ky,{className:"mx-auto h-14 w-14 text-emerald-300"}),i.jsx("h1",{className:"mt-6 text-3xl font-black sm:text-5xl",children:s}),i.jsx("p",{className:"mx-auto mt-4 max-w-lg leading-7 text-white/55",children:r}),i.jsx("div",{className:"mt-8",children:c})]})})})}function UE(){return i.jsxs(z1,{children:[i.jsx(va,{path:"/admin",element:i.jsx(gv,{})}),i.jsx(va,{path:"/admin/solicitacoes",element:i.jsx(gv,{})}),i.jsx(va,{path:"/admin/noticias",element:i.jsx(VN,{})}),i.jsx(va,{path:"/admin/verao-premiado",element:i.jsx(wE,{})}),i.jsx(va,{path:"/veraopremiado",element:i.jsx(uE,{})}),i.jsx(va,{path:"/solicitar-video",element:i.jsx(Yu,{})}),i.jsx(va,{path:"/solicitar-video/novo-negocio",element:i.jsx(Qu,{})}),i.jsx(va,{path:"/solicitar-video/negocio/:businessId",element:i.jsx(wv,{})}),i.jsx(va,{path:"/solicitar-video/novo-comercio",element:i.jsx(Qu,{})}),i.jsx(va,{path:"/solicitar-video/comercio/:businessId",element:i.jsx(wv,{})}),i.jsx(va,{path:"/solicitar-video/novo-cliente",element:i.jsx(Qu,{})}),i.jsx(va,{path:"/solicitar-video/cliente-atual",element:i.jsx(Yu,{})}),i.jsx(va,{path:"/solicitar-arte",element:i.jsx(Yu,{})}),i.jsx(va,{path:"/politica-de-privacidade",element:i.jsx(hN,{})}),i.jsx(va,{path:"*",element:i.jsx(qE,{})})]})}function qE(){const[s,r]=b.useState(!1),[c,d]=b.useState("DESTAQUE"),[m,f]=b.useState("anual"),v=(g,y)=>{d(g),f(y)};return i.jsxs("div",{className:"min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#F8032D] selection:text-white flex flex-col",children:[i.jsx(eN,{}),i.jsxs("main",{className:"flex-grow",children:[i.jsx(tN,{}),i.jsx(iN,{}),i.jsx(lN,{}),i.jsx(oN,{onSelectPlan:v}),i.jsx(rN,{}),i.jsx(cN,{}),i.jsx(uN,{}),i.jsx(dN,{selectedPlanName:c,selectedPlanCycle:m})]}),i.jsx(mN,{onOpenPrivacyModal:()=>r(!0)}),i.jsx(fN,{}),i.jsx(pN,{isOpen:s,onClose:()=>r(!1)})]})}Mb.createRoot(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(iy,{children:i.jsx(UE,{})})}));
