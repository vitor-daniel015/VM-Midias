(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function u(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(m){if(m.ep)return;m.ep=!0;const p=u(m);fetch(m.href,p)}})();var wu={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qh;function b1(){if(qh)return Yo;qh=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(d,m,p){var v=null;if(p!==void 0&&(v=""+p),m.key!==void 0&&(v=""+m.key),"key"in m){p={};for(var g in m)g!=="key"&&(p[g]=m[g])}else p=m;return m=p.ref,{$$typeof:s,type:d,key:v,ref:m!==void 0?m:null,props:p}}return Yo.Fragment=r,Yo.jsx=u,Yo.jsxs=u,Yo}var Lh;function y1(){return Lh||(Lh=1,wu.exports=b1()),wu.exports}var l=y1(),Ou={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh;function N1(){if(Bh)return ce;Bh=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),N=Symbol.for("react.view_transition"),U=Symbol.iterator;function I(A){return A===null||typeof A!="object"?null:(A=U&&A[U]||A["@@iterator"],typeof A=="function"?A:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,q={};function Q(A,H,ae){this.props=A,this.context=H,this.refs=q,this.updater=ae||L}Q.prototype.isReactComponent={},Q.prototype.setState=function(A,H){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,H,"setState")},Q.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function V(){}V.prototype=Q.prototype;function ie(A,H,ae){this.props=A,this.context=H,this.refs=q,this.updater=ae||L}var ue=ie.prototype=new V;ue.constructor=ie,B(ue,Q.prototype),ue.isPureReactComponent=!0;var K=Array.isArray;function X(){}var P={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function k(A,H,ae){var te=ae.ref;return{$$typeof:s,type:A,key:H,ref:te!==void 0?te:null,props:ae}}function le(A,H){return k(A.type,H,A.props)}function ne(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function ze(A){var H={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ae){return H[ae]})}var Ye=/\/+/g;function de(A,H){return typeof A=="object"&&A!==null&&A.key!=null?ze(""+A.key):H.toString(36)}function z(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(X,X):(A.status="pending",A.then(function(H){A.status==="pending"&&(A.status="fulfilled",A.value=H)},function(H){A.status==="pending"&&(A.status="rejected",A.reason=H)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Y(A,H,ae,te,Ne){var Ee=typeof A;(Ee==="undefined"||Ee==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(Ee){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case s:case r:Se=!0;break;case E:return Se=A._init,Y(Se(A._payload),H,ae,te,Ne)}}if(Se)return Ne=Ne(A),Se=te===""?"."+de(A,0):te,K(Ne)?(ae="",Se!=null&&(ae=Se.replace(Ye,"$&/")+"/"),Y(Ne,H,ae,"",function(Et){return Et})):Ne!=null&&(ne(Ne)&&(Ne=le(Ne,ae+(Ne.key==null||A&&A.key===Ne.key?"":(""+Ne.key).replace(Ye,"$&/")+"/")+Se)),H.push(Ne)),1;Se=0;var W=te===""?".":te+":";if(K(A))for(var re=0;re<A.length;re++)te=A[re],Ee=W+de(te,re),Se+=Y(te,H,ae,Ee,Ne);else if(re=I(A),typeof re=="function")for(A=re.call(A),re=0;!(te=A.next()).done;)te=te.value,Ee=W+de(te,re++),Se+=Y(te,H,ae,Ee,Ne);else if(Ee==="object"){if(typeof A.then=="function")return Y(z(A),H,ae,te,Ne);throw H=String(A),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return Se}function F(A,H,ae){if(A==null)return A;var te=[],Ne=0;return Y(A,te,"","",function(Ee){return H.call(ae,Ee,Ne++)}),te}function he(A){if(A._status===-1){var H=A._result,ae=H();ae.then(function(te){(A._status===0||A._status===-1)&&(A._status=1,A._result=te,ae.status===void 0&&(ae.status="fulfilled",ae.value=te))},function(te){(A._status===0||A._status===-1)&&(A._status=2,A._result=te,ae.status===void 0&&(ae.status="rejected",ae.reason=te))}),A._status===-1&&(A._status=0,A._result=ae)}if(A._status===1)return A._result.default;throw A._result}var we=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Za(A){var H=P.T,ae={};ae.types=H!==null?H.types:null,P.T=ae;try{var te=A(),Ne=P.S;Ne!==null&&Ne(ae,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(X,we)}catch(Ee){we(Ee)}finally{H!==null&&ae.types!==null&&(H.types=ae.types),P.T=H}}function Nt(A){var H=P.T;if(H!==null){var ae=H.types;ae===null?H.types=[A]:ae.indexOf(A)===-1&&ae.push(A)}else Za(Nt.bind(null,A))}var Nn={map:F,forEach:function(A,H,ae){F(A,function(){H.apply(this,arguments)},ae)},count:function(A){var H=0;return F(A,function(){H++}),H},toArray:function(A){return F(A,function(H){return H})||[]},only:function(A){if(!ne(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ce.Activity=h,ce.Children=Nn,ce.Component=Q,ce.Fragment=u,ce.Profiler=m,ce.PureComponent=ie,ce.StrictMode=d,ce.Suspense=y,ce.ViewTransition=N,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},ce.addTransitionType=Nt,ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(A,H,ae){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=B({},A.props),Ne=A.key;if(H!=null)for(Ee in H.key!==void 0&&(Ne=""+H.key),H)!se.call(H,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&H.ref===void 0||(te[Ee]=H[Ee]);var Ee=arguments.length-2;if(Ee===1)te.children=ae;else if(1<Ee){for(var Se=Array(Ee),W=0;W<Ee;W++)Se[W]=arguments[W+2];te.children=Se}return k(A.type,Ne,te)},ce.createContext=function(A){return A={$$typeof:v,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},ce.createElement=function(A,H,ae){var te,Ne={},Ee=null;if(H!=null)for(te in H.key!==void 0&&(Ee=""+H.key),H)se.call(H,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(Ne[te]=H[te]);var Se=arguments.length-2;if(Se===1)Ne.children=ae;else if(1<Se){for(var W=Array(Se),re=0;re<Se;re++)W[re]=arguments[re+2];Ne.children=W}if(A&&A.defaultProps)for(te in Se=A.defaultProps,Se)Ne[te]===void 0&&(Ne[te]=Se[te]);return k(A,Ee,Ne)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:g,render:A}},ce.isValidElement=ne,ce.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:he}},ce.memo=function(A,H){return{$$typeof:S,type:A,compare:H===void 0?null:H}},ce.startTransition=Za,ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(A){return P.H.use(A)},ce.useActionState=function(A,H,ae){return P.H.useActionState(A,H,ae)},ce.useCallback=function(A,H){return P.H.useCallback(A,H)},ce.useContext=function(A){return P.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,H){return P.H.useDeferredValue(A,H)},ce.useEffect=function(A,H){return P.H.useEffect(A,H)},ce.useEffectEvent=function(A){return P.H.useEffectEvent(A)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(A,H,ae){return P.H.useImperativeHandle(A,H,ae)},ce.useInsertionEffect=function(A,H){return P.H.useInsertionEffect(A,H)},ce.useLayoutEffect=function(A,H){return P.H.useLayoutEffect(A,H)},ce.useMemo=function(A,H){return P.H.useMemo(A,H)},ce.useOptimistic=function(A,H){return P.H.useOptimistic(A,H)},ce.useReducer=function(A,H,ae){return P.H.useReducer(A,H,ae)},ce.useRef=function(A){return P.H.useRef(A)},ce.useState=function(A){return P.H.useState(A)},ce.useSyncExternalStore=function(A,H,ae){return P.H.useSyncExternalStore(A,H,ae)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.3.0",ce}var Hh;function Xu(){return Hh||(Hh=1,Ou.exports=N1()),Ou.exports}var b=Xu(),Tu={exports:{}},Qo={},Cu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kh;function E1(){return kh||(kh=1,(function(s){function r(z,Y){var F=z.length;z.push(Y);e:for(;0<F;){var he=F-1>>>1,we=z[he];if(0<m(we,Y))z[he]=Y,z[F]=we,F=he;else break e}}function u(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var Y=z[0],F=z.pop();if(F!==Y){z[0]=F;e:for(var he=0,we=z.length,Za=we>>>1;he<Za;){var Nt=2*(he+1)-1,Nn=z[Nt],A=Nt+1,H=z[A];if(0>m(Nn,F))A<we&&0>m(H,Nn)?(z[he]=H,z[A]=F,he=A):(z[he]=Nn,z[Nt]=F,he=Nt);else if(A<we&&0>m(H,F))z[he]=H,z[A]=F,he=A;else break e}}return Y}function m(z,Y){var F=z.sortIndex-Y.sortIndex;return F!==0?F:z.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var v=Date,g=v.now();s.unstable_now=function(){return v.now()-g}}var y=[],S=[],E=1,h=null,N=3,U=!1,I=!1,L=!1,B=!1,q=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function ie(z){for(var Y=u(S);Y!==null;){if(Y.callback===null)d(S);else if(Y.startTime<=z)d(S),Y.sortIndex=Y.expirationTime,r(y,Y);else break;Y=u(S)}}function ue(z){if(L=!1,ie(z),!I)if(u(y)!==null)I=!0,K||(K=!0,ne());else{var Y=u(S);Y!==null&&de(ue,Y.startTime-z)}}var K=!1,X=-1,P=5,se=-1;function k(){return B?!0:!(s.unstable_now()-se<P)}function le(){if(B=!1,K){var z=s.unstable_now();se=z;var Y=!0;try{e:{I=!1,L&&(L=!1,Q(X),X=-1),U=!0;var F=N;try{a:{for(ie(z),h=u(y);h!==null&&!(h.expirationTime>z&&k());){var he=h.callback;if(typeof he=="function"){h.callback=null,N=h.priorityLevel;var we=he(h.expirationTime<=z);if(z=s.unstable_now(),typeof we=="function"){h.callback=we,ie(z),Y=!0;break a}h===u(y)&&d(y),ie(z)}else d(y);h=u(y)}if(h!==null)Y=!0;else{var Za=u(S);Za!==null&&de(ue,Za.startTime-z),Y=!1}}break e}finally{h=null,N=F,U=!1}Y=void 0}}finally{Y?ne():K=!1}}}var ne;if(typeof V=="function")ne=function(){V(le)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Ye=ze.port2;ze.port1.onmessage=le,ne=function(){Ye.postMessage(null)}}else ne=function(){q(le,0)};function de(z,Y){X=q(function(){z(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(z){switch(N){case 1:case 2:case 3:var Y=3;break;default:Y=N}var F=N;N=Y;try{return z()}finally{N=F}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=N;N=z;try{return Y()}finally{N=F}},s.unstable_scheduleCallback=function(z,Y,F){var he=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?he+F:he):F=he,z){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=F+we,z={id:E++,callback:Y,priorityLevel:z,startTime:F,expirationTime:we,sortIndex:-1},F>he?(z.sortIndex=F,r(S,z),u(y)===null&&z===u(S)&&(L?(Q(X),X=-1):L=!0,de(ue,F-he))):(z.sortIndex=we,r(y,z),I||U||(I=!0,K||(K=!0,ne()))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var Y=N;return function(){var F=N;N=Y;try{return z.apply(this,arguments)}finally{N=F}}}})(Ru)),Ru}var Ih;function j1(){return Ih||(Ih=1,Cu.exports=E1()),Cu.exports}var _u={exports:{}},ra={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function S1(){if(Vh)return ra;Vh=1;var s=Xu();function r(E){var h="https://react.dev/errors/"+E;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)h+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+E+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},m=Symbol.for("react.portal"),p=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function g(E,h,N){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:U==null?null:U===v?v:""+U,children:E,containerInfo:h,implementation:N}}var y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(E,h){if(E==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ra.browser=function(E){return{$$typeof:p,_reason:E}},ra.createPortal=function(E,h){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return g(E,h,null,N)},ra.flushSync=function(E){var h=y.T,N=d.p;try{if(y.T=null,d.p=2,E)return E()}finally{y.T=h,d.p=N,d.d.f()}},ra.preconnect=function(E,h){typeof E=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(E,h))},ra.prefetchDNS=function(E){typeof E=="string"&&d.d.D(E)},ra.preinit=function(E,h){if(typeof E=="string"&&h&&typeof h.as=="string"){var N=h.as,U=S(N,h.crossOrigin),I=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;N==="style"?d.d.S(E,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:U,integrity:I,fetchPriority:L}):N==="script"&&d.d.X(E,{crossOrigin:U,integrity:I,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ra.preinitModule=function(E,h){if(typeof E=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var N=S(h.as,h.crossOrigin);d.d.M(E,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}}else h==null&&d.d.M(E)},ra.preload=function(E,h){if(typeof E=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var N=h.as,U=S(N,h.crossOrigin);d.d.L(E,N,{crossOrigin:U,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ra.preloadModule=function(E,h){if(typeof E=="string")if(h){var N=S(h.as,h.crossOrigin);d.d.m(E,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}else d.d.m(E)},ra.requestFormReset=function(E){d.d.r(E)},ra.unstable_batchedUpdates=function(E,h){return E(h)},ra.useFormState=function(E,h,N){return y.H.useFormState(E,h,N)},ra.useFormStatus=function(){return y.H.useHostTransitionStatus()},ra.version="19.3.0",ra}var Gh;function A1(){if(Gh)return _u.exports;Gh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),_u.exports=S1(),_u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function w1(){if(Yh)return Qo;Yh=1;var s=j1(),r=Xu(),u=A1();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){for(var a=e,t=a;t&&!t.alternate;)a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(d(188))}function S(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(d(188));return a!==e?null:e}for(var t=e,n=a;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return y(o),e;if(i===n)return y(o),a;i=i.sibling}throw Error(d(188))}if(t.return!==n.return)t=o,n=i;else{for(var c=!1,f=o.child;f;){if(f===t){c=!0,t=o,n=i;break}if(f===n){c=!0,n=o,t=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===t){c=!0,t=i,n=o;break}if(f===n){c=!0,n=i,t=o;break}f=f.sibling}if(!c)throw Error(d(189))}}if(t.alternate!==n)throw Error(d(190))}if(t.tag!==3)throw Error(d(188));return t.stateNode.current===t?e:a}function E(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=E(e),a!==null)return a;e=e.sibling}return null}function h(e,a,t,n,o,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,n,o,i)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&h(e.child,a,t,n,o,i))return!0;e=e.sibling}return!1}function N(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function U(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function I(e){var a=[null,null],t=N(e);return t===null||L(a,e,t.child,{foundSelf:!1}),a}function L(e,a,t,n){for(;t!==null;){if(t===a)n.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(n.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&L(e,a,t.child,n))return!0;t=t.sibling}return!1}function B(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(d(559))}}var q=null,Q=null;function V(e,a,t){return e===t?!0:e===a?(q=e,!0):!1}function ie(e,a,t){return e===t?(Q=e,!1):e===a?(Q!==null&&(q=e),!0):!1}function ue(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function K(e,a,t){for(var n=0,o=e;o;o=t(o))n++;o=0;for(var i=a;i;i=t(i))o++;for(;0<n-o;)e=t(e),n--;for(;0<o-n;)a=t(a),o--;for(;n--;){if(e===a||a!==null&&e===a.alternate)return e;e=t(e),a=t(a)}return null}var X=Object.assign,P=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),Ye=Symbol.for("react.consumer"),de=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Za=Symbol.for("react.activity"),Nt=Symbol.for("react.legacy_hidden"),Nn=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),H=Symbol.for("react.recoverable"),ae=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function Ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case ze:return"Profiler";case ne:return"StrictMode";case Y:return"Suspense";case F:return"SuspenseList";case Za:return"Activity";case A:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case de:return e.displayName||"Context";case Ye:return(e._context.displayName||"Context")+".Consumer";case z:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case he:return a=e.displayName||null,a!==null?a:Ee(e.type)||"Memo";case we:a=e._payload,e=e._init;try{return Ee(e(a))}catch{}}return null}var Se=Array.isArray,W=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Et={pending:!1,data:null,method:null,action:null},Qs=[],Zn=-1;function nt(e){return{current:e}}function aa(e){0>Zn||(e.current=Qs[Zn],Qs[Zn]=null,Zn--)}function Ue(e,a){Zn++,Qs[Zn]=e.current,e.current=a}var lt=nt(null),Zl=nt(null),It=nt(null),ai=nt(null);function ti(e,a){switch(Ue(It,a),Ue(Zl,e),Ue(lt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Qp(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Qp(a),e=Xp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}aa(lt),Ue(lt,e)}function Kn(){aa(lt),aa(Zl),aa(It)}function Xs(e){var a=e.memoizedState;a!==null&&(Ll._currentValue=a.memoizedState,Ue(ai,e)),a=lt.current;var t=Xp(a,e.type);a!==t&&(Ue(Zl,e),Ue(lt,t))}function ni(e){Zl.current===e&&(aa(lt),aa(Zl)),ai.current===e&&(aa(ai),Ll._currentValue=Et)}var Ps,dd;function Vt(e){if(Ps===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ps=a&&a[1]||"",dd=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ps+e+dd}var $s=!1;function Zs(e,a){if(!e||$s)return"";$s=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(G){var w=G}Reflect.construct(e,[],D)}else{try{D.call()}catch(G){w=G}D=!1;try{var R=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),D=!0,new e}finally{D&&(R!==void 0?Object.defineProperty(e.prototype,"props",R):delete e.prototype.props)}}}else{try{throw Error()}catch(G){w=G}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(G){if(G&&w&&typeof G.stack=="string")return[G.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var x=c.split(`
`),T=f.split(`
`);for(o=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;if(n===x.length||o===T.length)for(n=x.length-1,o=T.length-1;1<=n&&0<=o&&x[n]!==T[o];)o--;for(;1<=n&&0<=o;n--,o--)if(x[n]!==T[o]){if(n!==1||o!==1)do if(n--,o--,0>o||x[n]!==T[o]){var _=`
`+x[n].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=n&&0<=o);break}}}finally{$s=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Vt(t):""}function j0(e,a){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==a&&a!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Zs(e.type,!1);case 11:return Zs(e.type.render,!1);case 1:return Zs(e.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function md(e){try{var a="",t=null;do a+=j0(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ks=Object.prototype.hasOwnProperty,Fs=s.unstable_scheduleCallback,Js=s.unstable_cancelCallback,S0=s.unstable_shouldYield,A0=s.unstable_requestPaint,Oa=s.unstable_now,w0=s.unstable_getCurrentPriorityLevel,fd=s.unstable_ImmediatePriority,pd=s.unstable_UserBlockingPriority,li=s.unstable_NormalPriority,O0=s.unstable_LowPriority,hd=s.unstable_IdlePriority,T0=s.log,C0=s.unstable_setDisableYieldValue,Kl=null,Ta=null;function Gt(e){if(typeof T0=="function"&&C0(e),Ta&&typeof Ta.setStrictMode=="function")try{Ta.setStrictMode(Kl,e)}catch{}}var Ca=Math.clz32?Math.clz32:M0,R0=Math.log,_0=Math.LN2;function M0(e){return e>>>=0,e===0?32:31-(R0(e)/_0|0)|0}var oi=256,ii=262144,si=4194304;function En(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~i,n!==0?o=En(n):(c&=f,c!==0?o=En(c):t||(t=f&~e,t!==0&&(o=En(t))))):(f=n&~i,f!==0?o=En(f):c!==0?o=En(c):t||(t=n&~e,t!==0&&(o=En(t)))),o===0?0:a!==0&&a!==o&&(a&i)===0&&(i=o&-o,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:o}function Fl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function vd(e,a){(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-Ca(t),o=1<<n;a|=e[n],t&=~o}return a}function D0(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(){var e=si;return si<<=1,(si&62914560)===0&&(si=4194304),e}function Ws(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Jl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z0(e,a,t,n,o,i){var c=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,x=e.expirationTimes,T=e.hiddenUpdates;for(t=c&~t;0<t;){var _=31-Ca(t),D=1<<_;f[_]=0,x[_]=-1;var w=T[_];if(w!==null)for(T[_]=null,_=0;_<w.length;_++){var R=w[_];R!==null&&(R.lane&=-536870913)}t&=~D}n!==0&&xd(e,n,0),i!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~a))}function xd(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-Ca(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function bd(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-Ca(t),o=1<<n;o&a|e[n]&a&&(e[n]|=a),t&=~o}}function yd(e,a){var t=a&-a;return t=(t&42)!==0?1:er(t),(t&(e.suspendedLanes|a))!==0?0:t}function er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nd(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Ch(e.type))}function Ed(e,a){var t=re.p;try{return re.p=e,a()}finally{re.p=t}}var jt=Math.random().toString(36).slice(2),ta="__reactFiber$"+jt,xa="__reactProps$"+jt,Fn="__reactContainer$"+jt,jd="__reactEvents$"+jt,U0="__reactListeners$"+jt,q0="__reactHandles$"+jt,Sd="__reactResources$"+jt,Wl="__reactMarker$"+jt,ci="__reactLoad$"+jt;function ui(e){delete e[ta],delete e[xa],delete e[U0],delete e[q0]}function jn(e){var a;if(a=e[ta])return a;for(var t=e.parentNode;t;){if(a=t[Fn]||t[ta]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=ch(e);e!==null;){if(t=e[ta])return t;e=ch(e)}return a}e=t,t=e.parentNode}return null}function Jn(e){if(e=e[ta]||e[Fn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function eo(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function Wn(e){var a=e[Sd];return a||(a=e[Sd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ke(e){e[Wl]=!0}function Ad(e){e[ci]=void 0}var wd=new Set,Od={};function Sn(e,a){el(e,a),el(e+"Capture",a)}function el(e,a){for(Od[e]=a,e=0;e<a.length;e++)wd.add(a[e])}var L0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Td={},Cd={};function B0(e){return Ks.call(Cd,e)?!0:Ks.call(Td,e)?!1:L0.test(e)?Cd[e]=!0:(Td[e]=!0,!1)}var je=!1;function Rd(){var e=je;return je=!1,e}function di(e,a,t){if(B0(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,t)}}function mi(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,t)}}function St(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,n)}}function Ra(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function H0(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(c){t=""+c,i.call(this,c)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function tr(e){if(!e._valueTracker){var a=_d(e)?"checked":"value";e._valueTracker=H0(e,a,""+e[a])}}function Md(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=_d(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}var k0=/[\n"\\]/g;function Ba(e){return e.replace(k0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function nr(e,a,t,n,o,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),a!=null?c==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ra(a)):e.value!==""+Ra(a)&&(e.value=""+Ra(a)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),a!=null?c==="number"&&e.value==a?lr(e,Ra(e.value)):lr(e,Ra(a)):t!=null?lr(e,Ra(t)):n!=null&&e.removeAttribute("value"),o==null&&i!=null&&(e.defaultChecked=!!i),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Ra(f):e.removeAttribute("name")}function Dd(e,a,t,n,o,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){tr(e);return}t=t!=null?""+Ra(t):"",a=a!=null?""+Ra(a):t,f||a===e.value||(e.value=a),e.defaultValue=a}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),tr(e)}function lr(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function al(e,a,t,n){if(e=e.options,a){a={};for(var o=0;o<t.length;o++)a["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=a.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ra(t),a=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function zd(e,a,t){if(a!=null&&(a=""+Ra(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ra(t):""}function Ud(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(d(92));if(Se(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Ra(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),tr(e)}function tl(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var I0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qd(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||I0.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Ld(e,a,t){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",je=!0);for(var o in a)n=a[o],a.hasOwnProperty(o)&&t[o]!==n&&(qd(e,o,n),je=!0)}else for(var i in a)a.hasOwnProperty(i)&&qd(e,i,a[i])}function or(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),G0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fi(e){return G0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ot(){}var ir=null;function sr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,ll=null;function Bd(e){var a=Jn(e);if(a&&(e=a.stateNode)){var t=e[xa]||null;e:switch(e=a.stateNode,a.type){case"input":if(nr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ba(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var o=n[xa]||null;if(!o)throw Error(d(90));nr(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&Md(n)}break e;case"textarea":zd(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&al(e,!!t.multiple,a,!1)}}}var rr=!1;function Hd(e,a,t){if(rr)return e(a,t);rr=!0;try{var n=e(a);return n}finally{if(rr=!1,(nl!==null||ll!==null)&&(fs(),nl&&(a=nl,e=ll,ll=nl=null,Bd(a),e)))for(a=0;a<e.length;a++)Bd(e[a])}}function ao(e,a){var t=e.stateNode;if(t===null)return null;var n=t[xa]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(d(231,a,typeof t));return t}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cr=!1;if(At)try{var to={};Object.defineProperty(to,"passive",{get:function(){cr=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{cr=!1}var Yt=null,ur=null,pi=null;function kd(){if(pi)return pi;var e,a=ur,t=a.length,n,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<t&&a[e]===o[e];e++);var c=t-e;for(n=1;n<=c&&a[t-n]===o[i-n];n++);return pi=o.slice(e,1<n?1-n:void 0)}function hi(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function Id(){return!1}function pa(e){function a(t,n,o,i,c){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:Id,this.isPropagationStopped=Id,this}return X(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),a}var Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=pa(Qt),no=X({},Qt,{view:0,detail:0}),Y0=pa(no),dr,mr,lo,xi=X({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(dr=e.screenX-lo.screenX,mr=e.screenY-lo.screenY):mr=dr=0,lo=e),dr)},movementY:function(e){return"movementY"in e?e.movementY:mr}}),Vd=pa(xi),Q0=X({},xi,{dataTransfer:0}),X0=pa(Q0),P0=X({},no,{relatedTarget:0}),fr=pa(P0),$0=X({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=pa($0),K0=X({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=pa(K0),J0=X({},Qt,{data:0}),Gd=pa(J0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=ag[e])?!!a[e]:!1}function pr(){return tg}var ng=X({},no,{key:function(e){if(e.key){var a=W0[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=pa(ng),og=X({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=pa(og),ig=X({},Qt,{submitter:0}),sg=pa(ig),rg=X({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),cg=pa(rg),ug=X({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=pa(ug),mg=X({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=pa(mg),pg=X({},Qt,{newState:0,oldState:0,source:0}),hg=pa(pg),vg=[9,13,27,32],hr=At&&"CompositionEvent"in window,oo=null;At&&"documentMode"in document&&(oo=document.documentMode);var gg=At&&"TextEvent"in window&&!oo,Qd=At&&(!hr||oo&&8<oo&&11>=oo),Xd=" ",Pd=!1;function $d(e,a){switch(e){case"keyup":return vg.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function xg(e,a){switch(e){case"compositionend":return Zd(a);case"keypress":return a.which!==32?null:(Pd=!0,Xd);case"textInput":return e=a.data,e===Xd&&Pd?null:e;default:return null}}function bg(e,a){if(ol)return e==="compositionend"||!hr&&$d(e,a)?(e=kd(),pi=ur=Yt=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Qd&&a.locale!=="ko"?null:a.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!yg[e.type]:a==="textarea"}function Fd(e,a,t,n){nl?ll?ll.push(n):ll=[n]:nl=n,a=bs(a,"onChange"),0<a.length&&(t=new gi("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var io=null,so=null;function Ng(e){Hp(e,0)}function bi(e){var a=eo(e);if(Md(a))return e}function Jd(e,a){if(e==="change")return a}var Wd=!1;if(At){var vr;if(At){var gr="oninput"in document;if(!gr){var em=document.createElement("div");em.setAttribute("oninput","return;"),gr=typeof em.oninput=="function"}vr=gr}else vr=!1;Wd=vr&&(!document.documentMode||9<document.documentMode)}function am(){io&&(io.detachEvent("onpropertychange",tm),so=io=null)}function tm(e){if(e.propertyName==="value"&&bi(so)){var a=[];Fd(a,so,e,sr(e)),Hd(Ng,a)}}function Eg(e,a,t){e==="focusin"?(am(),io=a,so=t,io.attachEvent("onpropertychange",tm)):e==="focusout"&&am()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(so)}function Sg(e,a){if(e==="click")return bi(a)}function Ag(e,a){if(e==="input"||e==="change")return bi(a)}function wg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var _a=typeof Object.is=="function"?Object.is:wg;function ro(e,a){if(_a(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!Ks.call(a,o)||!_a(e[o],a[o]))return!1}return!0}function xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lm(e,a){var t=nm(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nm(t)}}function om(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?om(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function im(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=xr(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=xr(e.document)}return a}function br(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Og=At&&"documentMode"in document&&11>=document.documentMode,il=null,yr=null,co=null,Nr=!1;function sm(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Nr||il==null||il!==xr(n)||(n=il,"selectionStart"in n&&br(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),co&&ro(co,n)||(co=n,n=bs(yr,"onSelect"),0<n.length&&(a=new gi("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=il)))}function An(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var sl={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionrun:An("Transition","TransitionRun"),transitionstart:An("Transition","TransitionStart"),transitioncancel:An("Transition","TransitionCancel"),transitionend:An("Transition","TransitionEnd")},Er={},rm={};At&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function wn(e){if(Er[e])return Er[e];if(!sl[e])return e;var a=sl[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in rm)return Er[e]=a[t];return e}var cm=wn("animationend"),um=wn("animationiteration"),dm=wn("animationstart"),Tg=wn("transitionrun"),Cg=wn("transitionstart"),Rg=wn("transitioncancel"),mm=wn("transitionend"),fm=new Map,jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jr.push("scrollEnd");function Ka(e,a){fm.set(e,a),Sn(a,[e])}var _g=0;function wt(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=et.identifierPrefix;var t=_g++;return e="_"+e+"t_"+t.toString(32)+"_",a.autoName=e}function pm(e){if(e==null||typeof e=="string")return e;var a=null,t=Ol;if(t!==null)for(var n=0;n<t.length;n++){var o=e[t[n]];if(o!=null){if(o==="none")return"none";a=a==null?o:a+(" "+o)}}return a??e.default}function Ot(e,a){return e=pm(e),a=pm(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ha=[],rl=0,Sr=0;function Ni(){for(var e=rl,a=Sr=rl=0;a<e;){var t=Ha[a];Ha[a++]=null;var n=Ha[a];Ha[a++]=null;var o=Ha[a];Ha[a++]=null;var i=Ha[a];if(Ha[a++]=null,n!==null&&o!==null){var c=n.pending;c===null?o.next=o:(o.next=c.next,c.next=o),n.pending=o}i!==0&&hm(t,o,i)}}function Ei(e,a,t,n){Ha[rl++]=e,Ha[rl++]=a,Ha[rl++]=t,Ha[rl++]=n,Sr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ar(e,a,t,n){return Ei(e,a,t,n),ji(e)}function On(e,a){return Ei(e,null,null,a),ji(e)}function hm(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var o=!1,i=e.return;i!==null;)i.childLanes|=t,n=i.alternate,n!==null&&(n.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(o=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,o&&a!==null&&(o=31-Ca(t),e=i.hiddenUpdates,n=e[o],n===null?e[o]=[a]:n.push(a),a.lane=t|536870912),i):null}function ji(e){if(50<Mo)throw Mo=0,ms=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var cl={};function Mg(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ba(e,a,t,n){return new Mg(e,a,t,n)}function wr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tt(e,a){var t=e.alternate;return t===null?(t=ba(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function vm(e,a){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Si(e,a,t,n,o,i){var c=0;if(n=e,typeof n=="function")wr(n)&&(c=1);else if(typeof n=="string")c=i1(e,t,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case Za:return e=ba(31,t,a,o),e.elementType=Za,e.lanes=i,e;case le:return Tn(t.children,o,i,a);case ne:c=8,o|=24;break;case ze:return e=ba(12,t,a,o|2),e.elementType=ze,e.lanes=i,e;case Y:return e=ba(13,t,a,o),e.elementType=Y,e.lanes=i,e;case F:return e=ba(19,t,a,o),e.elementType=F,e.lanes=i,e;case Nt:case A:return e=o|32,e=ba(30,t,a,e),e.elementType=A,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case de:c=10;break e;case Ye:c=9;break e;case z:c=11;break e;case he:c=14;break e;case we:c=16,n=null;break e}c=29,t=Error(d(130,e===null?"null":typeof e,"")),n=null}return a=ba(c,t,a,o),a.elementType=e,a.type=n,a.lanes=i,a}function Tn(e,a,t,n){return e=ba(7,e,n,a),e.lanes=t,e}function Or(e,a,t){return e=ba(6,e,null,a),e.lanes=t,e}function gm(e){var a=ba(18,null,null,0);return a.stateNode=e,a}function Tr(e,a,t){return a=ba(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var xm=new WeakMap;function ka(e,a){if(typeof e=="object"&&e!==null){var t=xm.get(e);return t!==void 0?t:(a={value:e,source:a,stack:md(a)},xm.set(e,a),a)}return{value:e,source:a,stack:md(a)}}var ul=[],dl=0,Ai=null,uo=0,Ia=[],Va=0,Xt=null,it=1,st="";function Ct(e,a){ul[dl++]=uo,ul[dl++]=Ai,Ai=e,uo=a}function bm(e,a,t){Ia[Va++]=it,Ia[Va++]=st,Ia[Va++]=Xt,Xt=e;var n=it;e=st;var o=32-Ca(n)-1;n&=~(1<<o),t+=1;var i=32-Ca(a)+o;if(30<i){var c=o-o%5;i=(n&(1<<c)-1).toString(32),n>>=c,o-=c,it=1<<32-Ca(a)+o|t<<o|n,st=i+e}else it=1<<i|t<<o|n,st=e}function wi(e){e.return!==null&&(Ct(e,1),bm(e,1,0))}function Cr(e){for(;e===Ai;)Ai=ul[--dl],ul[dl]=null,uo=ul[--dl],ul[dl]=null;for(;e===Xt;)Xt=Ia[--Va],Ia[Va]=null,st=Ia[--Va],Ia[Va]=null,it=Ia[--Va],Ia[Va]=null}function ym(e,a){Ia[Va++]=it,Ia[Va++]=st,Ia[Va++]=Xt,it=a.id,st=a.overflow,Xt=e}var Fe=null,qe=null,pe=!1,Pt=null,Ga=!1,Rr=Error(d(519));function $t(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(ka(a,e)),Rr}function Nm(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[ta]=e,a[xa]=n,t){case"dialog":ge("cancel",a),ge("close",a);break;case"iframe":case"object":case"embed":ge("load",a);break;case"video":case"audio":for(t=0;t<zo.length;t++)ge(zo[t],a);break;case"source":ge("error",a);break;case"img":case"image":case"link":ge("error",a),ge("load",a);break;case"details":ge("toggle",a);break;case"input":ge("invalid",a),Dd(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ge("invalid",a);break;case"textarea":ge("invalid",a),Ud(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Gp(a.textContent,t)?(n.popover!=null&&(ge("beforetoggle",a),ge("toggle",a)),n.onScroll!=null&&ge("scroll",a),n.onScrollEnd!=null&&ge("scrollend",a),n.onClick!=null&&(a.onclick=ot),a=!0):a=!1,a||$t(e,!0)}function Oi(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Ga=!1;return;case 27:case 3:Ga=!0;return;default:Fe=Fe.return}}function ml(e){if(e!==Fe)return!1;if(!pe)return Oi(e),pe=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||iu(e.type,e.memoizedProps)),t=!t),t&&qe&&$t(e),Oi(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));qe=rh(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));qe=rh(e)}else a===27?(a=qe,dn(e.type)?(e=hu,hu=null,qe=e):qe=a):qe=Fe?Qa(e.stateNode.nextSibling):null;return!0}function Cn(){qe=Fe=null,pe=!1}function _r(){var e=Pt;return e!==null&&(Ea===null?Ea=e:Ea.push.apply(Ea,e),Pt=null),e}function mo(e){Pt===null?Pt=[e]:Pt.push(e)}var Mr=nt(null),Rn=null,Rt=null;function Zt(e,a,t){Ue(Mr,a._currentValue),a._currentValue=t}function _t(e){e._currentValue=Mr.current,aa(Mr)}function Ti(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Dr(e,a,t,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var i=o.dependencies;if(i!==null){var c=o.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=o;for(var x=0;x<a.length;x++)if(f.context===a[x]){i.lanes|=t,f=i.alternate,f!==null&&(f.lanes|=t),Ti(i.return,t,e),n||(c=null);break e}i=f.next}}else if(o.tag===18){if(c=o.return,c===null)throw Error(d(341));c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),Ti(c,t,e),c=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Ti(o.return,t,e),c=o.child,c=c!==null?c.sibling:null):c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===e){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}}function _n(e,a,t,n){e=null;for(var o=a,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var c=o.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var f=o.type;_a(o.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(o===ai.current){if(c=o.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ll):e=[Ll])}o=o.return}return e!==null&&Dr(a,e,t,n),a.flags|=262144,e!==null}function Ci(e){for(e=e.firstContext;e!==null;){if(!_a(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mn(e){Rn=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return Em(Rn,e)}function Ri(e,a){return Rn===null&&Mn(e),Em(e,a)}function Em(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Rt===null){if(e===null)throw Error(d(308));Rt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Rt=Rt.next=a;return t}var Dg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},zg=s.unstable_scheduleCallback,Ug=s.unstable_NormalPriority,Qe={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Dg,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&zg(Ug,function(){e.controller.abort()})}function jm(e,a){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<a.length;e++){var n=a[e];t.indexOf(n)===-1&&t.push(n)}}}var po=null;function qg(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var ho=null,Ur=0,Dn=0,fl=null;function Lg(e,a){if(ho===null){var t=ho=[];Ur=0,Dn=Fc(),fl={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Ur++,a.then(Sm,Sm),a}function Sm(){if(--Ur===0&&(po=null,ho!==null)){fl!==null&&(fl.status="fulfilled");var e=ho;ho=null,Dn=0,fl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Bg(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var o=0;o<t.length;o++)(0,t[o])(a)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var Am=W.S;W.S=function(e,a){if(xp=Oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Lg(e,a),po!==null)for(var t=_l;t!==null;)jm(t,po),t=t.next;if(t=e.types,t!==null){for(var n=_l;n!==null;)jm(n,t),n=n.next;if(Dn!==0){n=po,n===null&&(n=po=[]);for(var o=0;o<t.length;o++){var i=t[o];n.indexOf(i)===-1&&n.push(i)}}}Am!==null&&Am(e,a)};var zn=nt(null);function qr(){var e=zn.current;return e!==null?e:De.pooledCache}function _i(e,a){a===null?Ue(zn,zn.current):Ue(zn,a.pool)}function wm(){var e=qr();return e===null?null:{parent:Qe._currentValue,pool:e}}var pl=Error(d(460)),Lr=Error(d(474)),Mi=Error(d(542)),Di={then:function(){}};function Om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tm(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(ot,ot),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Rm(e),e===void 0&&!("reason"in a)?Error(d(600)):e;default:if(typeof a.status=="string")a.then(ot,ot);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=n}},function(n){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Rm(e),e}throw qn=a,pl}}function Un(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(qn=t,pl):t}}var qn=null;function Cm(){if(qn===null)throw Error(d(459));var e=qn;return qn=null,e}function Rm(e){if(e===pl||e===Mi)throw Error(d(483))}var hl=null,vo=0;function zi(e){var a=vo;return vo+=1,hl===null&&(hl=[]),Tm(hl,e,a)}function Kt(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ui(e,a){throw a.$$typeof===P?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function _m(e){function a(O,j){if(e){var C=O.deletions;C===null?(O.deletions=[j],O.flags|=16):C.push(j)}}function t(O,j){if(!e)return null;for(;j!==null;)a(O,j),j=j.sibling;return null}function n(O){for(var j=new Map;O!==null;)O.key===null?j.set(O.index,O):j.set(O.key,O),O=O.sibling;return j}function o(O,j){return O=Tt(O,j),O.index=0,O.sibling=null,O}function i(O,j,C){return O.index=C,e?(C=O.alternate,C!==null?(C=C.index,C<j?(O.flags|=2,j):C):(O.flags|=134217730,j)):(O.flags|=1048576,j)}function c(O){return e&&O.alternate===null&&(O.flags|=134217730),O}function f(O,j,C,M){return j===null||j.tag!==6?(j=Or(C,O.mode,M),j.return=O,j):(j=o(j,C),j.return=O,j)}function x(O,j,C,M){var $=C.type;return $===le?(O=_(O,j,C.props.children,M,C.key),Kt(O,C),O):j!==null&&(j.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Un($)===j.type)?(j=o(j,C.props),Kt(j,C),j.return=O,j):(j=Si(C.type,C.key,C.props,null,O.mode,M),Kt(j,C),j.return=O,j)}function T(O,j,C,M){return j===null||j.tag!==4||j.stateNode.containerInfo!==C.containerInfo||j.stateNode.implementation!==C.implementation?(j=Tr(C,O.mode,M),j.return=O,j):(j=o(j,C.children||[]),j.return=O,j)}function _(O,j,C,M,$){return j===null||j.tag!==7?(j=Tn(C,O.mode,M,$),j.return=O,j):(j=o(j,C),j.return=O,j)}function D(O,j,C){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Or(""+j,O.mode,C),j.return=O,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case se:return C=Si(j.type,j.key,j.props,null,O.mode,C),Kt(C,j),C.return=O,C;case k:return j=Tr(j,O.mode,C),j.return=O,j;case we:return j=Un(j),D(O,j,C)}if(Se(j)||te(j))return j=Tn(j,O.mode,C,null),j.return=O,j;if(typeof j.then=="function")return D(O,zi(j),C);if(j.$$typeof===de)return D(O,Ri(O,j),C);Ui(O,j)}return null}function w(O,j,C,M){var $=j!==null?j.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return $!==null?null:f(O,j,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case se:return C.key===$?x(O,j,C,M):null;case k:return C.key===$?T(O,j,C,M):null;case we:return C=Un(C),w(O,j,C,M)}if(Se(C)||te(C))return $!==null?null:_(O,j,C,M,null);if(typeof C.then=="function")return w(O,j,zi(C),M);if(C.$$typeof===de)return w(O,j,Ri(O,C),M);Ui(O,C)}return null}function R(O,j,C,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return O=O.get(C)||null,f(j,O,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case se:return O=O.get(M.key===null?C:M.key)||null,x(j,O,M,$);case k:return O=O.get(M.key===null?C:M.key)||null,T(j,O,M,$);case we:return M=Un(M),R(O,j,C,M,$)}if(Se(M)||te(M))return O=O.get(C)||null,_(j,O,M,$,null);if(typeof M.then=="function")return R(O,j,C,zi(M),$);if(M.$$typeof===de)return R(O,j,C,Ri(j,M),$);Ui(j,M)}return null}function G(O,j,C,M){for(var $=null,be=null,ee=j,oe=j=0,$e=null;ee!==null&&oe<C.length;oe++){ee.index>oe?($e=ee,ee=null):$e=ee.sibling;var ye=w(O,ee,C[oe],M);if(ye===null){ee===null&&(ee=$e);break}e&&ee&&ye.alternate===null&&a(O,ee),j=i(ye,j,oe),be===null?$=ye:be.sibling=ye,be=ye,ee=$e}if(oe===C.length)return t(O,ee),pe&&Ct(O,oe),$;if(ee===null){for(;oe<C.length;oe++)ee=D(O,C[oe],M),ee!==null&&(j=i(ee,j,oe),be===null?$=ee:be.sibling=ee,be=ee);return pe&&Ct(O,oe),$}for(ee=n(ee);oe<C.length;oe++)$e=R(ee,O,oe,C[oe],M),$e!==null&&(e&&(ye=$e.alternate,ye!==null&&ee.delete(ye.key===null?oe:ye.key)),j=i($e,j,oe),be===null?$=$e:be.sibling=$e,be=$e);return e&&ee.forEach(function(vn){return a(O,vn)}),pe&&Ct(O,oe),$}function Z(O,j,C,M){if(C==null)throw Error(d(151));for(var $=null,be=null,ee=j,oe=j=0,$e=null,ye=C.next();ee!==null&&!ye.done;oe++,ye=C.next()){ee.index>oe?($e=ee,ee=null):$e=ee.sibling;var vn=w(O,ee,ye.value,M);if(vn===null){ee===null&&(ee=$e);break}e&&ee&&vn.alternate===null&&a(O,ee),j=i(vn,j,oe),be===null?$=vn:be.sibling=vn,be=vn,ee=$e}if(ye.done)return t(O,ee),pe&&Ct(O,oe),$;if(ee===null){for(;!ye.done;oe++,ye=C.next())ye=D(O,ye.value,M),ye!==null&&(j=i(ye,j,oe),be===null?$=ye:be.sibling=ye,be=ye);return pe&&Ct(O,oe),$}for(ee=n(ee);!ye.done;oe++,ye=C.next())ye=R(ee,O,oe,ye.value,M),ye!==null&&(e&&($e=ye.alternate,$e!==null&&ee.delete($e.key===null?oe:$e.key)),j=i(ye,j,oe),be===null?$=ye:be.sibling=ye,be=ye);return e&&ee.forEach(function(x1){return a(O,x1)}),pe&&Ct(O,oe),$}function fe(O,j,C,M){if(typeof C=="object"&&C!==null&&C.type===le&&C.key===null&&C.props.ref===void 0&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case se:e:{for(var $=C.key;j!==null;){if(j.key===$){if($=C.type,$===le){if(j.tag===7){t(O,j.sibling),M=o(j,C.props.children),Kt(M,C),M.return=O,O=M;break e}}else if(j.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Un($)===j.type){t(O,j.sibling),M=o(j,C.props),Kt(M,C),M.return=O,O=M;break e}t(O,j);break}else a(O,j);j=j.sibling}C.type===le?(M=Tn(C.props.children,O.mode,M,C.key),Kt(M,C),M.return=O,O=M):(M=Si(C.type,C.key,C.props,null,O.mode,M),Kt(M,C),M.return=O,O=M)}return c(O);case k:e:{for($=C.key;j!==null;){if(j.key===$)if(j.tag===4&&j.stateNode.containerInfo===C.containerInfo&&j.stateNode.implementation===C.implementation){t(O,j.sibling),M=o(j,C.children||[]),M.return=O,O=M;break e}else{t(O,j);break}else a(O,j);j=j.sibling}M=Tr(C,O.mode,M),M.return=O,O=M}return c(O);case we:return C=Un(C),fe(O,j,C,M)}if(Se(C))return G(O,j,C,M);if(te(C)){if($=te(C),typeof $!="function")throw Error(d(150));return C=$.call(C),Z(O,j,C,M)}if(typeof C.then=="function")return fe(O,j,zi(C),M);if(C.$$typeof===de)return fe(O,j,Ri(O,C),M);Ui(O,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,j!==null&&j.tag===6?(t(O,j.sibling),M=o(j,C),M.return=O,O=M):(t(O,j),M=Or(C,O.mode,M),M.return=O,O=M),c(O)):t(O,j)}return function(O,j,C,M){try{vo=0;var $=fe(O,j,C,M);return hl=null,$}catch(ee){if(ee===pl||ee===Mi)throw ee;var be=ba(29,ee,null,O.mode);return be.lanes=M,be.return=O,be}finally{}}}var Ln=_m(!0),Mm=_m(!1),Ft=!1;function Br(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wt(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ae&2)!==0){var o=n.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a,a=ji(e),hm(e,null,t),a}return Ei(e,n,a,t),ji(e)}function go(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,bd(e,t)}}function kr(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var c={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?o=i=c:i=i.next=c,t=t.next}while(t!==null);i===null?o=i=a:i=i.next=a}else o=i=a;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Ir=!1;function xo(){if(Ir){var e=fl;if(e!==null)throw e}}function bo(e,a,t,n){Ir=!1;var o=e.updateQueue;Ft=!1;var i=o.firstBaseUpdate,c=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var x=f,T=x.next;x.next=null,c===null?i=T:c.next=T,c=x;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==c&&(f===null?_.firstBaseUpdate=T:f.next=T,_.lastBaseUpdate=x))}if(i!==null){var D=o.baseState;c=0,_=T=x=null,f=i;do{var w=f.lane&-536870913,R=w!==f.lane;if(R?(xe&w)===w:(n&w)===w){w!==0&&w===Dn&&(Ir=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var G=e,Z=f;w=a;var fe=t;switch(Z.tag){case 1:if(G=Z.payload,typeof G=="function"){D=G.call(fe,D,w);break e}D=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Z.payload,w=typeof G=="function"?G.call(fe,D,w):G,w==null)break e;D=X({},D,w);break e;case 2:Ft=!0}}w=f.callback,w!==null&&(e.flags|=64,R&&(e.flags|=8192),R=o.callbacks,R===null?o.callbacks=[w]:R.push(w))}else R={lane:w,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(T=_=R,x=D):_=_.next=R,c|=w;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;R=f,f=R.next,R.next=null,o.lastBaseUpdate=R,o.shared.pending=null}}while(!0);_===null&&(x=D),o.baseState=x,o.firstBaseUpdate=T,o.lastBaseUpdate=_,i===null&&(o.shared.lanes=0),sn|=c,e.lanes=c,e.memoizedState=D}}function Dm(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function zm(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Dm(t[e],a)}var en=nt(null),qi=nt(0);function Um(e,a){e=qt,Ue(qi,e),Ue(en,a),qt=e|a.baseLanes}function Vr(){Ue(qi,qt),Ue(en,en.current)}function Gr(){qt=qi.current,aa(en),aa(qi)}var la=nt(null),ca=null;function an(e){var a=e.alternate;Ue(oa,oa.current&1),Ue(la,e),ca===null&&(a===null||en.current!==null||a.memoizedState!==null)&&(ca=e)}function Yr(e){Ue(oa,oa.current),Ue(la,e),ca===null&&(ca=e)}function qm(e){e.tag===22?(Ue(oa,oa.current),Ue(la,e),ca===null&&(ca=e)):tn()}function tn(){Ue(oa,oa.current),Ue(la,la.current)}function Ma(e){aa(la),ca===e&&(ca=null),aa(oa)}var oa=nt(0);function yo(e,a){Ue(la,la.current),Ue(oa,a)}function Qr(e){aa(oa),aa(la),ca===e&&(ca=null)}function Li(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||fu(t)||pu(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Mt=0,me=null,_e=null,Xe=null,Bi=!1,vl=!1,Bn=!1,Hi=0,No=0,gl=null,Hg=0;function Ie(){throw Error(d(321))}function Xr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!_a(e[t],a[t]))return!1;return!0}function Pr(e,a,t,n,o,i){return Mt=i,me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,W.H=e===null||e.memoizedState===null?yf:Nf,Bn=!1,i=t(n,o),Bn=!1,vl&&(i=Bm(a,t,n,o)),Lm(e),i}function Lm(e){W.H=Xi;var a=_e!==null&&_e.next!==null;if(Mt=0,Xe=_e=me=null,Bi=!1,No=0,gl=null,a)throw Error(d(300));e===null||Pe||(e=e.dependencies,e!==null&&Ci(e)&&(Pe=!0))}function Bm(e,a,t,n){me=e;var o=0;do{if(vl&&(gl=null),No=0,vl=!1,25<=o)throw Error(d(301));if(o+=1,Xe=_e=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}W.H=Pg,i=a(t,n)}while(vl);return i}function kg(){var e=W.H,a=e.useState()[0];return a=typeof a.then=="function"?Eo(a):a,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(me.flags|=1024),a}function $r(){var e=Hi!==0;return Hi=0,e}function Zr(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Kr(e){if(Bi){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Bi=!1}Mt=0,Xe=_e=me=null,vl=!1,No=Hi=0,gl=null}function ha(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?me.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ge(){if(_e===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var a=Xe===null?me.memoizedState:Xe.next;if(a!==null)Xe=a,_e=e;else{if(e===null)throw me.alternate===null?Error(d(467)):Error(d(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Xe===null?me.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function ki(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var a=No;return No+=1,gl===null&&(gl=[]),e=Tm(gl,e,a),a=me,(Xe===null?a.memoizedState:Xe.next)===null&&(a=a.alternate,W.H=a===null||a.memoizedState===null?yf:Nf),e}function Ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===H)return;if(e.$$typeof===de)return na(e)}throw Error(d(438,String(e)))}function Fr(e){var a=null,t=me.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=me.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=ki(),me.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=Nn;return a.index++,t}function Dt(e,a){return typeof a=="function"?a(e):a}function Vi(e){var a=Ge();return Jr(a,_e,e)}function Jr(e,a,t){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=t;var o=e.baseQueue,i=n.pending;if(i!==null){if(o!==null){var c=o.next;o.next=i.next,i.next=c}a.baseQueue=o=i,n.pending=null}if(i=e.baseState,o===null)e.memoizedState=i;else{a=o.next;var f=c=null,x=null,T=a,_=!1;do{var D=T.lane&-536870913;if(D!==T.lane?(xe&D)===D:(Mt&D)===D){var w=T.revertLane;if(w===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),D===Dn&&(_=!0);else if((Mt&w)===w){T=T.next,w===Dn&&(_=!0);continue}else D={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(f=x=D,c=i):x=x.next=D,me.lanes|=w,sn|=w;D=T.action,Bn&&t(i,D),i=T.hasEagerState?T.eagerState:t(i,D)}else w={lane:D,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(f=x=w,c=i):x=x.next=w,me.lanes|=D,sn|=D;T=T.next}while(T!==null&&T!==a);if(x===null?c=i:x.next=f,!_a(i,e.memoizedState)&&(Pe=!0,_&&(t=fl,t!==null)))throw t;e.memoizedState=i,e.baseState=c,e.baseQueue=x,n.lastRenderedState=i}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Wr(e){var a=Ge(),t=a.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var n=t.dispatch,o=t.pending,i=a.memoizedState;if(o!==null){t.pending=null;var c=o=o.next;do i=e(i,c.action),c=c.next;while(c!==o);_a(i,a.memoizedState)||(Pe=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,n]}function Hm(e,a,t){var n=me,o=Ge(),i=pe;if(i){if(t===void 0)throw Error(d(407));t=t()}else t=a();var c=!_a((_e||o).memoizedState,t);if(c&&(o.memoizedState=t,Pe=!0),o=o.queue,tc(Vm.bind(null,n,o,e),[e]),e=o.getSnapshot!==a||c||Xe!==null&&(Xe.memoizedState.tag&1)!==0,xl(e?9:8,{destroy:void 0},Im.bind(null,n,o,t,a),null),e){if(n.flags|=2048,De===null)throw Error(d(349));i||(Mt&127)!==0||km(n,a,t)}return t}function km(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=me.updateQueue,a===null?(a=ki(),me.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Im(e,a,t,n){a.value=t,a.getSnapshot=n,Gm(a)&&Ym(e)}function Vm(e,a,t){return t(function(){Gm(a)&&Ym(e)})}function Gm(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!_a(e,t)}catch{return!0}}function Ym(e){var a=On(e,2);a!==null&&ja(a,e,2)}function ec(e){var a=ha();if(typeof e=="function"){var t=e;if(e=t(),Bn){Gt(!0);try{t()}finally{Gt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:e},a}function Qm(e,a,t,n){return e.baseState=t,Jr(e,_e,typeof n=="function"?n:Dt)}function Ig(e,a,t,n,o){if(Qi(e))throw Error(d(485));if(e=a.action,e!==null){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};W.T!==null?t(!0):i.isTransition=!1,n(i),t=a.pending,t===null?(i.next=a.pending=i,Xm(a,i)):(i.next=t.next,a.pending=t.next=i)}}function Xm(e,a){var t=a.action,n=a.payload,o=e.state;if(a.isTransition){var i=W.T,c={};c.types=i!==null?i.types:null,W.T=c;try{var f=t(o,n),x=W.S;x!==null&&x(c,f),Pm(e,a,f)}catch(T){ac(e,a,T)}finally{i!==null&&c.types!==null&&(i.types=c.types),W.T=i}}else try{i=t(o,n),Pm(e,a,i)}catch(T){ac(e,a,T)}}function Pm(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){$m(e,a,n)},function(n){return ac(e,a,n)}):$m(e,a,t)}function $m(e,a,t){a.status="fulfilled",a.value=t,Zm(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Xm(e,t)))}function ac(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Zm(a),a=a.next;while(a!==n)}e.action=null}function Zm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Km(e,a){return a}function Fm(e,a){if(pe){var t=De.formState;if(t!==null){e:{var n=me;if(pe){if(qe){a:{for(var o=qe,i=Ga;o.nodeType!==8;){if(!i){o=null;break a}if(o=Qa(o.nextSibling),o===null){o=null;break a}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){qe=Qa(o.nextSibling),n=o.data==="F!";break e}}$t(n)}n=!1}n&&(a=t[0])}}return t=ha(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:a},t.queue=n,t=gf.bind(null,me,n),n.dispatch=t,n=ec(!1),i=sc.bind(null,me,!1,n.queue),n=ha(),o={state:a,dispatch:null,action:e,pending:null},n.queue=o,t=Ig.bind(null,me,o,i,t),o.dispatch=t,n.memoizedState=e,[a,t,!1]}function Jm(e){var a=Ge();return Wm(a,_e,e)}function Wm(e,a,t){if(a=Jr(e,a,Km)[0],e=Vi(Dt)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Eo(a)}catch(c){throw c===pl?Mi:c}else n=a;a=Ge();var o=a.queue,i=o.dispatch;return t!==a.memoizedState&&(me.flags|=2048,xl(9,{destroy:void 0},Vg.bind(null,o,t),null)),[n,i,e]}function Vg(e,a){e.action=a}function ef(e){var a=Ge(),t=_e;if(t!==null)return Wm(a,t,e);Ge(),a=a.memoizedState,t=Ge();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function xl(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=me.updateQueue,a===null&&(a=ki(),me.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function af(){return Ge().memoizedState}function Gi(e,a,t,n){var o=ha();me.flags|=e,o.memoizedState=xl(1|a,{destroy:void 0},t,n===void 0?null:n)}function Yi(e,a,t,n){var o=Ge();n=n===void 0?null:n;var i=o.memoizedState.inst;_e!==null&&n!==null&&Xr(n,_e.memoizedState.deps)?o.memoizedState=xl(a,i,t,n):(me.flags|=e,o.memoizedState=xl(1|a,i,t,n))}function tf(e,a){Gi(8390656,8,e,a)}function tc(e,a){Yi(2048,8,e,a)}function Gg(e){me.flags|=4;var a=me.updateQueue;if(a===null)a=ki(),me.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function nf(e){var a=Ge().memoizedState;return Gg({ref:a,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function lf(e,a){return Yi(4,2,e,a)}function of(e,a){return Yi(4,4,e,a)}function sf(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function rf(e,a,t){t=t!=null?t.concat([e]):null,Yi(4,4,sf.bind(null,a,e),t)}function nc(){}function cf(e,a){var t=Ge();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Xr(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function uf(e,a){var t=Ge();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Xr(a,n[1]))return n[0];if(n=e(),Bn){Gt(!0);try{e()}finally{Gt(!1)}}return t.memoizedState=[n,a],n}function lc(e,a,t){return t===void 0||(Mt&1073741824)!==0&&(xe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=yp(),me.lanes|=e,sn|=e,t)}function df(e,a,t,n){return _a(t,a)?t:en.current!==null?(e=lc(e,t,n),_a(e,a)||(Pe=!0),e):(Mt&106)===0||(Mt&1073741824)!==0&&(xe&261930)===0?(Pe=!0,e.memoizedState=t):(e=yp(),me.lanes|=e,sn|=e,a)}function mf(e,a,t,n,o){var i=re.p;re.p=i!==0&&8>i?i:8;var c=W.T,f={};f.types=c!==null?c.types:null,W.T=f,sc(e,!1,a,t);try{var x=o(),T=W.S;if(T!==null&&T(f,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var _=Bg(x,n);jo(e,a,_,qa(e))}else jo(e,a,n,qa(e))}catch(D){jo(e,a,{then:function(){},status:"rejected",reason:D},qa())}finally{re.p=i,c!==null&&f.types!==null&&(c.types=f.types),W.T=c}}function Yg(){}function oc(e,a,t,n){if(e.tag!==5)throw Error(d(476));var o=ff(e).queue;mf(e,o,a,Et,t===null?Yg:function(){return pf(e),t(n)})}function ff(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Et,baseState:Et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:Et},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function pf(e){var a=ff(e);a.next===null&&(a=e.alternate.memoizedState),jo(e,a.next.queue,{},qa())}function ic(){return na(Ll)}function hf(){return Ge().memoizedState}function vf(){return Ge().memoizedState}function Qg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=qa();e=Jt(t);var n=Wt(a,e,t);n!==null&&(ja(n,a,t),go(n,a,t)),a={cache:zr()},e.payload=a;return}a=a.return}}function Xg(e,a,t){var n=qa();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Qi(e)?xf(a,t):(t=Ar(e,a,t,n),t!==null&&(ja(t,e,n),bf(t,a,n)))}function gf(e,a,t){var n=qa();jo(e,a,t,n)}function jo(e,a,t,n){var o={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qi(e))xf(a,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var c=a.lastRenderedState,f=i(c,t);if(o.hasEagerState=!0,o.eagerState=f,_a(f,c))return Ei(e,a,o,0),De===null&&Ni(),!1}catch{}finally{}if(t=Ar(e,a,o,n),t!==null)return ja(t,e,n),bf(t,a,n),!0}return!1}function sc(e,a,t,n){if(n={lane:2,revertLane:Fc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qi(e)){if(a)throw Error(d(479))}else a=Ar(e,t,n,2),a!==null&&ja(a,e,2)}function Qi(e){var a=e.alternate;return e===me||a!==null&&a===me}function xf(e,a){vl=Bi=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function bf(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,bd(e,t)}}var Xi={readContext:na,use:Ii,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie,useEffectEvent:Ie},yf={readContext:na,use:Ii,useCallback:function(e,a){return ha().memoizedState=[e,a===void 0?null:a],e},useContext:na,useEffect:tf,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Gi(4194308,4,sf.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Gi(4194308,4,e,a)},useInsertionEffect:function(e,a){Gi(4,2,e,a)},useMemo:function(e,a){var t=ha();a=a===void 0?null:a;var n=e();if(Bn){Gt(!0);try{e()}finally{Gt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ha();if(t!==void 0){var o=t(a);if(Bn){Gt(!0);try{t(a)}finally{Gt(!1)}}}else o=a;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=Xg.bind(null,me,e),[n.memoizedState,e]},useRef:function(e){var a=ha();return e={current:e},a.memoizedState=e},useState:function(e){e=ec(e);var a=e.queue,t=gf.bind(null,me,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:nc,useDeferredValue:function(e,a){var t=ha();return lc(t,e,a)},useTransition:function(){var e=ec(!1);return e=mf.bind(null,me,e.queue,!0,!1),ha().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=me,o=ha();if(pe){if(t===void 0)throw Error(d(407));t=t()}else{if(t=a(),De===null)throw Error(d(349));(xe&127)!==0||km(n,a,t)}o.memoizedState=t;var i={value:t,getSnapshot:a};return o.queue=i,tf(Vm.bind(null,n,i,e),[e]),n.flags|=2048,xl(9,{destroy:void 0},Im.bind(null,n,i,t,a),null),t},useId:function(){var e=ha(),a=De.identifierPrefix;if(pe){var t=st,n=it;t=(n&~(1<<32-Ca(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Hi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Hg++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:ic,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var a=ha();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=sc.bind(null,me,!0,t),t.dispatch=a,[e,a]},useMemoCache:Fr,useCacheRefresh:function(){return ha().memoizedState=Qg.bind(null,me)},useEffectEvent:function(e){var a=ha(),t={impl:e};return a.memoizedState=t,function(){if((Ae&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}},Nf={readContext:na,use:Ii,useCallback:cf,useContext:na,useEffect:tc,useImperativeHandle:rf,useInsertionEffect:lf,useLayoutEffect:of,useMemo:uf,useReducer:Vi,useRef:af,useState:function(){return Vi(Dt)},useDebugValue:nc,useDeferredValue:function(e,a){var t=Ge();return df(t,_e.memoizedState,e,a)},useTransition:function(){var e=Vi(Dt)[0],a=Ge().memoizedState;return[typeof e=="boolean"?e:Eo(e),a]},useSyncExternalStore:Hm,useId:hf,useHostTransitionStatus:ic,useFormState:Jm,useActionState:Jm,useOptimistic:function(e,a){var t=Ge();return Qm(t,_e,e,a)},useMemoCache:Fr,useCacheRefresh:vf,useEffectEvent:nf},Pg={readContext:na,use:Ii,useCallback:cf,useContext:na,useEffect:tc,useImperativeHandle:rf,useInsertionEffect:lf,useLayoutEffect:of,useMemo:uf,useReducer:Wr,useRef:af,useState:function(){return Wr(Dt)},useDebugValue:nc,useDeferredValue:function(e,a){var t=Ge();return _e===null?lc(t,e,a):df(t,_e.memoizedState,e,a)},useTransition:function(){var e=Wr(Dt)[0],a=Ge().memoizedState;return[typeof e=="boolean"?e:Eo(e),a]},useSyncExternalStore:Hm,useId:hf,useHostTransitionStatus:ic,useFormState:ef,useActionState:ef,useOptimistic:function(e,a){var t=Ge();return _e!==null?Qm(t,_e,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Fr,useCacheRefresh:vf,useEffectEvent:nf};function rc(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:X({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var cc={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=qa(),o=Jt(n);o.payload=a,t!=null&&(o.callback=t),a=Wt(e,o,n),a!==null&&(ja(a,e,n),go(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=qa(),o=Jt(n);o.tag=1,o.payload=a,t!=null&&(o.callback=t),a=Wt(e,o,n),a!==null&&(ja(a,e,n),go(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=qa(),n=Jt(t);n.tag=2,a!=null&&(n.callback=a),a=Wt(e,n,t),a!==null&&(ja(a,e,t),go(a,e,t))}};function Ef(e,a,t,n,o,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,c):a.prototype&&a.prototype.isPureReactComponent?!ro(t,n)||!ro(o,i):!0}function jf(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&cc.enqueueReplaceState(a,a.state,null)}function Hn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=X({},t));for(var o in e)t[o]===void 0&&(t[o]=e[o])}return t}function Sf(e){yi(e)}function Af(e){console.error(e)}function wf(e){yi(e)}function Pi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function Of(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function uc(e,a,t){return t=Jt(t),t.tag=3,t.payload={element:null},t.callback=function(){Pi(e,a)},t}function Tf(e){return e=Jt(e),e.tag=3,e}function Cf(e,a,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var i=n.value;e.payload=function(){return o(i)},e.callback=function(){Of(a,t,n)}}var c=t.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Of(a,t,n),typeof o!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function $g(e,a,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&_n(a,t,o,!0),t=la.current,t!==null){switch(t.tag){case 31:case 13:case 19:return ca===null?ps():t.alternate===null&&Ve===0&&(Ve=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===Di?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),$c(e,n,o)),!1;case 22:return t.flags|=65536,n===Di?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),$c(e,n,o)),!1}throw Error(d(435,t.tag))}return $c(e,n,o),ps(),!1}if(pe)return a=la.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,n!==Rr&&(e=Error(d(422),{cause:n}),mo(ka(e,t)))):(n!==Rr&&(a=Error(d(423),{cause:n}),mo(ka(a,t))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=ka(n,t),o=uc(e.stateNode,n,o),kr(e,o),Ve!==4&&(Ve=2)),!1;var i=Error(d(520),{cause:n});if(i=ka(i,t),_o===null?_o=[i]:_o.push(i),Ve!==4&&(Ve=2),a===null)return!0;n=ka(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=o&-o,t.lanes|=e,e=uc(t.stateNode,n,e),kr(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(rn===null||!rn.has(i))))return t.flags|=65536,o&=-o,t.lanes|=o,o=Tf(o),Cf(o,e,t,n),kr(t,o),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var dc=Error(d(461)),Pe=!1;function Ze(e,a,t,n){a.child=e===null?Mm(a,null,t,n):Ln(a,e.child,t,n)}function Rf(e,a,t,n,o){t=t.render;var i=a.ref;if("ref"in n){var c={};for(var f in n)f!=="ref"&&(c[f]=n[f])}else c=n;return Mn(a),n=Pr(e,a,t,c,i,o),f=$r(),e!==null&&!Pe?(Zr(e,a,o),zt(e,a,o)):(pe&&f&&wi(a),a.flags|=1,Ze(e,a,n,o),a.child)}function _f(e,a,t,n,o){if(e===null){var i=t.type;return typeof i=="function"&&!wr(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Mf(e,a,i,n,o)):(e=Si(t.type,null,n,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!bc(e,o)){var c=i.memoizedProps;if(t=t.compare,t=t!==null?t:ro,t(c,n)&&e.ref===a.ref)return zt(e,a,o)}return a.flags|=1,e=Tt(i,n),e.ref=a.ref,e.return=a,a.child=e}function Mf(e,a,t,n,o){if(e!==null){var i=e.memoizedProps;if(ro(i,n)&&e.ref===a.ref)if(Pe=!1,a.pendingProps=n=i,bc(e,o))(e.flags&131072)!==0&&(Pe=!0);else return a.lanes=e.lanes,zt(e,a,o)}return mc(e,a,t,n,o)}function Df(e,a,t,n){var o=n.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(i=i!==null?i.baseLanes|t:t,e!==null){for(n=a.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~i}else n=0,a.child=null;return zf(e,a,i,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(a,i!==null?i.cachePool:null),i!==null?Um(a,i):Vr(),qm(a);else return n=a.lanes=536870912,zf(e,a,i!==null?i.baseLanes|t:t,t,n)}else i!==null?(_i(a,i.cachePool),Um(a,i),tn(),a.memoizedState=null):(e!==null&&_i(a,null),Vr(),tn());return Ze(e,a,o,t),a.child}function So(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function zf(e,a,t,n,o){var i=qr();return i=i===null?null:{parent:Qe._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&_i(a,null),Vr(),qm(a),e!==null&&_n(e,a,n,!0),a.childLanes=o,null}function $i(e,a){return a=Zi({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Uf(e,a,t){return Ln(a,e.child,null,t),e=$i(a,a.pendingProps),e.flags|=2,Ma(a),a.memoizedState=null,e}function Zg(e,a,t){var n=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(pe){if(n.mode==="hidden")return e=$i(a,n),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},So(null,e);if(Yr(a),(e=qe)?(e=sh(e,Ga),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Xt!==null?{id:it,overflow:st}:null,retryLane:536870912,hydrationErrors:null},t=gm(e),t.return=a,a.child=t,Fe=a,qe=null)):e=null,e===null)throw $t(a);return a.lanes=536870912,null}return $i(a,n)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Yr(a),o)if(a.flags&256)a.flags&=-257,a=Uf(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Pe||_n(e,a,t,!1),o=(t&e.childLanes)!==0,Pe||o){if(en.current===null){if(n=De,n!==null&&(c=yd(n,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,On(e,c),ja(n,e,c),dc;ps()}a=Uf(e,a,t)}else e=i.treeContext,qe=Qa(c.nextSibling),Fe=a,pe=!0,Pt=null,Ga=!1,e!==null&&ym(a,e),a=$i(a,n),a.flags|=134221824;return a}return e=Tt(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function bl(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(d(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function mc(e,a,t,n,o){return Mn(a),t=Pr(e,a,t,n,void 0,o),n=$r(),e!==null&&!Pe?(Zr(e,a,o),zt(e,a,o)):(pe&&n&&wi(a),a.flags|=1,Ze(e,a,t,o),a.child)}function qf(e,a,t,n,o,i){return Mn(a),a.updateQueue=null,t=Bm(a,n,t,o),Lm(e),n=$r(),e!==null&&!Pe?(Zr(e,a,i),zt(e,a,i)):(pe&&n&&wi(a),a.flags|=1,Ze(e,a,t,i),a.child)}function Lf(e,a,t,n,o){if(Mn(a),a.stateNode===null){var i=cl,c=t.contextType;typeof c=="object"&&c!==null&&(i=na(c)),i=new t(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},Br(a),c=t.contextType,i.context=typeof c=="object"&&c!==null?na(c):cl,i.state=a.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(rc(a,t,c,n),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&cc.enqueueReplaceState(i,i.state,null),bo(a,n,i,o),xo(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){i=a.stateNode;var f=a.memoizedProps,x=Hn(t,f);i.props=x;var T=i.context,_=t.contextType;c=cl,typeof _=="object"&&_!==null&&(c=na(_));var D=t.getDerivedStateFromProps;_=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=a.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||T!==c)&&jf(a,i,n,c),Ft=!1;var w=a.memoizedState;i.state=w,bo(a,n,i,o),xo(),T=a.memoizedState,f||w!==T||Ft?(typeof D=="function"&&(rc(a,t,D,n),T=a.memoizedState),(x=Ft||Ef(a,t,x,n,w,T,c))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=T),i.props=n,i.state=T,i.context=c,n=x):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,Hr(e,a),c=a.memoizedProps,_=Hn(t,c),i.props=_,D=a.pendingProps,w=i.context,T=t.contextType,x=cl,typeof T=="object"&&T!==null&&(x=na(T)),f=t.getDerivedStateFromProps,(T=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==D||w!==x)&&jf(a,i,n,x),Ft=!1,w=a.memoizedState,i.state=w,bo(a,n,i,o),xo();var R=a.memoizedState;c!==D||w!==R||Ft||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof f=="function"&&(rc(a,t,f,n),R=a.memoizedState),(_=Ft||Ef(a,t,_,n,w,R,x)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,R,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,R,x)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=R),i.props=n,i.state=R,i.context=x,n=_):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(a.flags|=1024),n=!1)}return i=n,bl(e,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&n?(a.child=Ln(a,e.child,null,o),a.child=Ln(a,null,t,o)):Ze(e,a,t,o),a.memoizedState=i.state,e=a.child):e=zt(e,a,o),e}function Bf(e,a,t,n){return Cn(),a.flags|=256,Ze(e,a,t,n),a.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:wm()}}function hc(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ua),e}function Hf(e,a,t){var n=a.pendingProps,o=!1,i=(a.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(oa.current&2)!==0),c&&(o=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,e===null){if(pe){if(o?an(a):tn(),(e=qe)?(e=sh(e,Ga),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Xt!==null?{id:it,overflow:st}:null,retryLane:536870912,hydrationErrors:null},t=gm(e),t.return=a,a.child=t,Fe=a,qe=null)):e=null,e===null)throw $t(a);return pu(e)?a.lanes=32:a.lanes=536870912,null}return i=n.children,n=n.fallback,o?(tn(),o=a.mode,i=Zi({mode:"hidden",children:i},o),n=Tn(n,o,t,null),i.return=a,n.return=a,i.sibling=n,a.child=i,n=a.child,n.memoizedState=pc(t),n.childLanes=hc(e,c,t),a.memoizedState=fc,So(null,n)):(an(a),vc(a,i))}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(x!==null)return Kg(e,a,i,c,n,x,f,t)}return o?(tn(),o=n.fallback,i=a.mode,f=e.child,x=f.sibling,n=Tt(f,{mode:"hidden",children:n.children}),n.subtreeFlags=f.subtreeFlags&1206910976,x!==null?o=Tt(x,o):(o=Tn(o,i,t,null),o.flags|=2),o.return=a,n.return=a,n.sibling=o,a.child=n,So(null,n),n=a.child,o=e.child.memoizedState,o===null?o=pc(t):(i=o.cachePool,i!==null?(f=Qe._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=wm(),o={baseLanes:o.baseLanes|t,cachePool:i}),n.memoizedState=o,n.childLanes=hc(e,c,t),a.memoizedState=fc,So(e.child,n)):(an(a),t=e.child,e=t.sibling,t=Tt(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(c=a.deletions,c===null?(a.deletions=[e],a.flags|=16):c.push(e)),a.child=t,a.memoizedState=null,t)}function vc(e,a){return a=Zi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Zi(e,a){return e=ba(22,e,null,a),e.lanes=0,e}function Ki(e,a,t){return Ln(a,e.child,null,t),e=vc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Kg(e,a,t,n,o,i,c,f){if(t)return a.flags&256?(an(a),a.flags&=-257,Ki(e,a,f)):a.memoizedState!==null?(tn(),a.child=e.child,a.flags|=128,null):(tn(),i=o.fallback,c=a.mode,o=Zi({mode:"visible",children:o.children},c),i=Tn(i,c,f,null),i.flags|=2,o.return=a,i.return=a,o.sibling=i,a.child=o,Ln(a,e.child,null,f),o=a.child,o.memoizedState=pc(f),o.childLanes=hc(e,n,f),a.memoizedState=fc,So(null,o));if(an(a),pu(i)){if(n=i.nextSibling&&i.nextSibling.dataset,n)var x=n.dgst;return n=x,n!==""&&(o=Error(d(419)),o.stack="",o.digest=n,mo({value:o,source:null,stack:null})),Ki(e,a,f)}if(Pe||_n(e,a,f,!1),n=(f&e.childLanes)!==0,Pe||n){if(en.current!==null)return Ki(e,a,f);if(n=De,n!==null&&(o=yd(n,f),o!==0&&o!==c.retryLane))throw c.retryLane=o,On(e,o),ja(n,e,o),dc;return fu(i)||ps(),Ki(e,a,f)}return fu(i)?(a.flags|=192,a.child=e.child,null):(e=c.treeContext,qe=Qa(i.nextSibling),Fe=a,pe=!0,Pt=null,Ga=!1,e!==null&&ym(a,e),a=vc(a,o.children),a.flags|=134221824,a)}function kf(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Ti(e.return,a,t)}function If(e){for(var a=null;e!==null;){var t=e.alternate;t!==null&&Li(t)===null&&(a=e),e=e.sibling}return a}function Fi(e,a,t,n,o,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o,treeForkCount:i}:(c.isBackwards=a,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=t,c.tailMode=o,c.treeForkCount=i)}function gc(e){var a=e.child;for(e.child=null;a!==null;){var t=a.sibling;a.sibling=e.child,e.child=a,a=t}}function xc(e,a,t){var n=a.pendingProps,o=n.revealOrder,i=n.tail;n=n.children;var c=oa.current;if(a.flags&128)return yo(a,c),null;var f=(c&2)!==0;if(f?(c=c&1|2,a.flags|=128):c&=1,yo(a,c),o==="backwards"&&e!==null?(gc(e),Ze(e,a,n,t),gc(e)):Ze(e,a,n,t),n=pe?uo:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kf(e,t,a);else if(e.tag===19)kf(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":t=If(a.child),t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null,gc(a)),Fi(a,!0,o,null,i,n);break;case"unstable_legacy-backwards":for(t=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Li(e)===null){a.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Fi(a,!0,t,null,i,n);break;case"together":Fi(a,!1,null,null,void 0,n);break;case"independent":a.memoizedState=null;break;default:t=If(a.child),t===null?(o=a.child,a.child=null):(o=t.sibling,t.sibling=null),Fi(a,!1,o,t,i,n)}return a.child}function Vf(e,a,t){var n=a.pendingProps;return Zt(a,a.type,n.value),Ze(e,a,n.children,t),a.child}function zt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),sn|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(_n(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,t=Tt(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Tt(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function bc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function Fg(e,a,t){switch(a.tag){case 3:ti(a,a.stateNode.containerInfo),Zt(a,Qe,e.memoizedState.cache),Cn();break;case 27:case 5:Xs(a);break;case 4:ti(a,a.stateNode.containerInfo);break;case 10:Zt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Yr(a),null;break;case 13:var n=a.memoizedState;if(n!==null){if(n.dehydrated!==null)return an(a),a.flags|=128,null;n=_n(e,a,t,!1);var o=a.child.childLanes;return n||(t&o)!==0?Hf(e,a,t):(an(a),e=zt(e,a,t),e!==null?e.sibling:null)}an(a);break;case 19:if(a.flags&128)return xc(e,a,t);if(o=(e.flags&128)!==0,n=(t&a.childLanes)!==0,n||(_n(e,a,t,!1),n=(t&a.childLanes)!==0),o){if(n)return xc(e,a,t);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),yo(a,oa.current),n)break;return null;case 22:return a.lanes=0,Df(e,a,t,a.pendingProps);case 24:Zt(a,Qe,e.memoizedState.cache)}return zt(e,a,t)}function Gf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Pe=!0;else{if(!bc(e,t)&&(a.flags&128)===0)return Pe=!1,Fg(e,a,t);Pe=(e.flags&131072)!==0}else Pe=!1,pe&&(a.flags&1048576)!==0&&bm(a,uo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Un(a.elementType),a.type=e,typeof e=="function")wr(e)?(n=Hn(e,n),a.tag=1,a=Lf(null,a,e,n,t)):(a.tag=0,a=mc(null,a,e,n,t));else{if(e!=null){var o=e.$$typeof;if(o===z){a.tag=11,a=Rf(null,a,e,n,t);break e}else if(o===he){a.tag=14,a=_f(null,a,e,n,t);break e}else if(o===de){a.tag=10,a.type=e,a=Vf(null,a,t);break e}}throw a=Ee(e)||e,Error(d(306,a,""))}}return a;case 0:return mc(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,o=Hn(n,a.pendingProps),Lf(e,a,n,o,t);case 3:e:{if(ti(a,a.stateNode.containerInfo),e===null)throw Error(d(387));n=a.pendingProps;var i=a.memoizedState;o=i.element,Hr(e,a),bo(a,n,null,t);var c=a.memoizedState;if(n=c.cache,Zt(a,Qe,n),n!==i.cache&&Dr(a,[Qe],t,!0),xo(),n=c.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:c.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=Bf(e,a,n,t);break e}else if(n!==o){o=ka(Error(d(424)),a),mo(o),a=Bf(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Qa(e.firstChild),Fe=a,pe=!0,Pt=null,Ga=!0,t=Mm(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(Cn(),n===o){a=zt(e,a,t);break e}Ze(e,a,n,t)}a=a.child}return a;case 26:return bl(e,a),e===null?(t=ph(a.type,null,a.pendingProps,null))?a.memoizedState=t:pe||(a.stateNode=Pp(a.type,a.pendingProps,It.current,a)):a.memoizedState=ph(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Xs(a),e===null&&pe&&(n=a.stateNode=uh(a.type,a.pendingProps,It.current),Fe=a,Ga=!0,o=qe,dn(a.type)?(hu=o,qe=Qa(n.firstChild)):qe=o),Ze(e,a,a.pendingProps.children,t),bl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&pe&&((o=n=qe)&&(n=Qx(n,a.type,a.pendingProps,Ga),n!==null?(a.stateNode=n,Fe=a,qe=Qa(n.firstChild),Ga=!1,o=!0):o=!1),o||$t(a)),Xs(a),o=a.type,i=a.pendingProps,c=e!==null?e.memoizedProps:null,n=i.children,iu(o,i)?n=null:c!==null&&iu(o,c)&&(a.flags|=32),a.memoizedState!==null&&(o=Pr(e,a,kg,null,null,t),Ll._currentValue=o),bl(e,a),Ze(e,a,n,t),a.child;case 6:return e===null&&pe&&((e=t=qe)&&(t=Xx(t,a.pendingProps,Ga),t!==null?(a.stateNode=t,Fe=a,qe=null,e=!0):e=!1),e||$t(a)),null;case 13:return Hf(e,a,t);case 4:return ti(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Ln(a,null,n,t):Ze(e,a,n,t),a.child;case 11:return Rf(e,a,a.type,a.pendingProps,t);case 7:return n=a.pendingProps,bl(e,a),Ze(e,a,n,t),a.child;case 8:return Ze(e,a,a.pendingProps.children,t),a.child;case 12:return Ze(e,a,a.pendingProps.children,t),a.child;case 10:return Vf(e,a,t);case 9:return o=a.type._context,n=a.pendingProps.children,Mn(a),o=na(o),n=n(o),a.flags|=1,Ze(e,a,n,t),a.child;case 14:return _f(e,a,a.type,a.pendingProps,t);case 15:return Mf(e,a,a.type,a.pendingProps,t);case 19:return xc(e,a,t);case 31:return Zg(e,a,t);case 22:return Df(e,a,t,a.pendingProps);case 24:return Mn(a),n=na(Qe),e===null?(o=qr(),o===null&&(o=De,i=zr(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=t),o=i),a.memoizedState={parent:n,cache:o},Br(a),Zt(a,Qe,o)):((e.lanes&t)!==0&&(Hr(e,a),bo(a,null,null,t),xo()),o=e.memoizedState,i=a.memoizedState,o.parent!==n?(o={parent:n,cache:n},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),Zt(a,Qe,n)):(n=i.cache,Zt(a,Qe,n),n!==o.cache&&Dr(a,[Qe],t,!0))),Ze(e,a,a.pendingProps.children,t),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=a.pendingProps,n.name!=null&&n.name!=="auto"?a.flags|=e===null?18882560:18874368:pe&&wi(a),e!==null&&e.memoizedProps.name!==n.name?a.flags|=4194816:bl(e,a),Ze(e,a,n.children,t),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Ut(e){e.flags|=4}function yc(e,a,t,n,o){var i;if((i=(e.mode&32)!==0)&&(i=t===null?xh(a,n):xh(a,n)&&(n.src!==t.src||n.srcSet!==t.srcSet)),i){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Sp())e.flags|=8192;else throw qn=Di,Lr}else e.flags&=-16777217}function Yf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(a))if(Sp())e.flags|=8192;else throw qn=Di,Lr}function Ji(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?gd():536870912,e.lanes|=a,Sl|=a)}function Ao(e,a){if(!pe)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(a=e.tail,t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null}}function Le(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&1206910976,n|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function Jg(e,a,t){var n=a.pendingProps;switch(Cr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(a),null;case 1:return Le(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),_t(Qe),Kn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ml(a)?Ut(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,_r())),Le(a),null;case 26:var o=a.type,i=a.memoizedState;return e===null?(Ut(a),i!==null?(Le(a),Yf(a,i)):(Le(a),yc(a,o,null,n,t))):i?i!==e.memoizedState?(Ut(a),Le(a),Yf(a,i)):(Le(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ut(a),Le(a),yc(a,o,e,n,t)),null;case 27:if(ni(a),t=It.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Ut(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Le(a),a.subtreeFlags&=-33554433,null}e=lt.current,ml(a)?Nm(a):(e=uh(o,n,t),a.stateNode=e,Ut(a))}return Le(a),a.subtreeFlags&=-33554433,null;case 5:if(ni(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&Ut(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Le(a),a.subtreeFlags&=-33554433,null}if(i=lt.current,ml(a))Nm(a);else{var c=qo(It.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?c.createElement(o,{is:n.is}):c.createElement(o)}}i[ta]=a,i[xa]=n;e:for(c=a.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break e;for(;c.sibling===null;){if(c.return===null||c.return===a)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a.stateNode=i;e:switch(sa(i,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ut(a)}}return Le(a),a.subtreeFlags&=-33554433,yc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&Ut(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(d(166));if(e=It.current,ml(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,o=Fe,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[ta]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Gp(e.nodeValue,t)),e||$t(a,!0)}else e=qo(e).createTextNode(n),e[ta]=a,a.stateNode=e}return Le(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=ml(a),t!==null){if(e===null){if(!n)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[ta]=a}else Cn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Le(a),e=!1}else t=_r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Ma(a),a):(Ma(a),null);if((a.flags&128)!==0)throw Error(d(558))}return Le(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ml(a),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[ta]=a}else Cn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Le(a),o=!1}else o=_r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(Ma(a),a):(Ma(a),null)}return Ma(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==o&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Ji(a,a.updateQueue),Le(a),null);case 4:return Kn(),e===null&&au(a.stateNode.containerInfo),a.flags|=67108864,Le(a),null;case 10:return _t(a.type),Le(a),null;case 19:if(Qr(a),n=a.memoizedState,n===null)return Le(a),null;if(o=(a.flags&128)!==0,i=n.rendering,i===null)if(o)Ao(n,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(i=Li(e),i!==null){for(a.flags|=128,Ao(n,!1),e=i.updateQueue,a.updateQueue=e,Ji(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)vm(t,e),t=t.sibling;return yo(a,oa.current&1|2),pe&&Ct(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Oa()>us&&(a.flags|=128,o=!0,Ao(n,!1),a.lanes=4194304)}else{if(!o)if(e=Li(i),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Ji(a,e),Ao(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!i.alternate&&!pe)return Le(a),null}else 2*Oa()-n.renderingStartTime>us&&t!==536870912&&(a.flags|=128,o=!0,Ao(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(e=n.last,e!==null?e.sibling=i:a.child=i,n.last=i)}if(n.tail!==null){e=n.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Oa(),e.sibling=null,i=oa.current,i=o?i&1|2:i&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!t||pe?yo(a,i):(t=i,Ue(la,a),Ue(oa,t),ca===null&&(ca=a)),pe&&Ct(a,n.treeForkCount),e}return Le(a),null;case 22:case 23:return Ma(a),Gr(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(Le(a),a.subtreeFlags&6&&(a.flags|=8192)):Le(a),t=a.updateQueue,t!==null&&Ji(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&aa(zn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),_t(Qe),Le(a),null;case 25:return null;case 30:return a.flags|=33554432,Le(a),null}throw Error(d(156,a.tag))}function Wg(e,a){switch(Cr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return _t(Qe),Kn(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ni(a),null;case 31:if(a.memoizedState!==null){if(Ma(a),a.alternate===null)throw Error(d(340));Cn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Ma(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Cn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Qr(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return Kn(),null;case 10:return _t(a.type),null;case 22:case 23:return Ma(a),Gr(),e!==null&&aa(zn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return _t(Qe),null;case 25:return null;default:return null}}function Qf(e,a){switch(Cr(a),a.tag){case 3:_t(Qe),Kn();break;case 26:case 27:case 5:ni(a);break;case 4:Kn();break;case 31:a.memoizedState!==null&&Ma(a);break;case 13:Ma(a);break;case 19:Qr(a);break;case 10:_t(a.type);break;case 22:case 23:Ma(a),Gr(),e!==null&&aa(zn);break;case 24:_t(Qe)}}function wo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&e)===e){n=void 0;var i=t.create,c=t.inst;n=i(),c.destroy=n}t=t.next}while(t!==o)}}catch(f){Ce(a,a.return,f)}}function nn(e,a,t){try{var n=a.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var i=o.next;n=i;do{if((n.tag&e)===e){var c=n.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,o=a;var x=t,T=f;try{T()}catch(_){Ce(o,x,_)}}}n=n.next}while(n!==i)}}catch(_){Ce(a,a.return,_)}}function Xf(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{zm(a,t)}catch(n){Ce(e,e.return,n)}}}function Pf(e,a,t){t.props=Hn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Ce(e,a,n)}}function rt(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var o=e.stateNode,i=wt(e.memoizedProps,o);(o.ref===null||o.ref.name!==i)&&(o.ref=eh(i)),n=o.ref;break;case 7:if(e.stateNode===null){var c=new La(e);h(e.child,!1,Gx,c,void 0,void 0),e.stateNode=c}n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(f){Ce(e,a,f)}}function ia(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){Ce(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){Ce(e,a,o)}else t.current=null}function Wi(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var t=0;t<a.length;t++)ih(e.stateNode,a[t])}function $f(e){for(var a=e.return;a!==null&&(Ec(a)&&ih(e.stateNode,a.stateNode),!Nc(a));)a=a.return}function Oo(e){for(var a=e.return;a!==null&&(Ec(a)&&Yx(e.stateNode,a.stateNode),!Nc(a));)a=a.return}function Nc(e){return e.tag===5||e.tag===3||e.tag===27}function Ec(e){return e&&e.tag===7&&e.stateNode!==null}function jc(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){Ce(e,e.return,o)}}function Sc(e,a,t){try{var n=e.stateNode;Ax(n,e.type,t,a),n[xa]=a}catch(o){Ce(e,e.return,o)}}function Zf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&dn(e.type)||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wc(e,a,t,n){var o=e.tag;if(o===5||o===6)o=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(o,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(o),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=ot)),Wi(e,n),je=!0;else if(o!==4&&(o===27&&(Wi(e,n),n=null,dn(e.type)&&(t=e.stateNode,a=null)),e=e.child,e!==null))for(wc(e,a,t,n),e=e.sibling;e!==null;)wc(e,a,t,n),e=e.sibling}function es(e,a,t,n){var o=e.tag;if(o===5||o===6)o=e.stateNode,a?t.insertBefore(o,a):t.appendChild(o),Wi(e,n),je=!0;else if(o!==4&&(o===27&&(Wi(e,n),n=null,dn(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(es(e,a,t,n),e=e.sibling;e!==null;)es(e,a,t,n),e=e.sibling}function Kf(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);sa(a,n,t),a[ta]=e,a[xa]=t}catch(i){Ce(e,e.return,i)}}var as=!1,Da=null;function Ff(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(as=!0)}var ct=null;function Jf(){var e=ct;return ct=null,e}var ya=0;function yl(e,a,t,n,o){return ya=0,Wf(e.child,a,t,n,o)}function Wf(e,a,t,n,o){for(var i=!1;e!==null;){if(e.tag===5){var c=e.stateNode;if(n!==null){var f=cu(c);n.push(f),f.view&&(i=!0)}else i||cu(c).view&&(i=!0);as=!0,Jp(c,ya===0?a:a+"_"+ya,t),ya++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||Wf(e.child,a,t,n,o)&&(i=!0));e=e.sibling}return i}function ut(e,a){for(;e!==null;)e.tag===5?Wp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||ut(e.child,a)),e=e.sibling}function ts(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ts(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(d(544));var t=a.name;a=Ot(a.default,a.share),a!=="none"&&(yl(e,t,a,null,!1)||ut(e.child,!1))}e=e.sibling}}function Oc(e,a){if(e.tag===30){var t=e.stateNode,n=e.memoizedProps,o=wt(n,t),i=Ot(n.default,t.paired?n.share:n.enter);i!=="none"?yl(e,o,i,null,!1)?(ts(e),t.paired||a||Tl(e,n.onEnter)):ut(e.child,!1):ts(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Oc(e,a),e=e.sibling;else ts(e)}function Tc(e){if(Da!==null&&Da.size!==0){var a=Da;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,n=t.name;if(n!=null&&n!=="auto"){var o=a.get(n);if(o!==void 0){var i=Ot(t.default,t.share);if(i!=="none"&&(yl(e,n,i,null,!1)?(i=e.stateNode,o.paired=i,i.paired=o,Tl(e,t.onShare)):ut(e.child,!1)),a.delete(n),a.size===0)break}}}Tc(e)}e=e.sibling}}}function Cc(e){if(e.tag===30){var a=e.memoizedProps,t=wt(a,e.stateNode),n=Da!==null?Da.get(t):void 0,o=Ot(a.default,n!==void 0?a.share:a.exit);o!=="none"&&(yl(e,t,o,null,!1)?n!==void 0?(o=e.stateNode,n.paired=o,o.paired=n,Da.delete(t),Tl(e,a.onShare)):Tl(e,a.onExit):ut(e.child,!1)),Da!==null&&Tc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Cc(e),e=e.sibling;else Da!==null&&Tc(e)}function ep(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,t=wt(a,e.stateNode);a=Ot(a.default,a.update),e.flags&=-5,a!=="none"&&yl(e,t,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&ep(e);e=e.sibling}}function Rc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,ut(e.child,!1))}Rc(e)}e=e.sibling}}function ns(e){if(e.tag===30)e.stateNode.paired=null,ut(e.child,!1),Rc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ns(e),e=e.sibling;else Rc(e)}function ap(e){for(e=e.child;e!==null;)e.tag===30?ut(e.child,!1):(e.subtreeFlags&33554432)!==0&&ap(e),e=e.sibling}function _c(e,a,t,n,o,i,c){for(var f=!1;a!==null;){if(a.tag===5){var x=a.stateNode;if(i!==null&&ya<i.length){var T=i[ya],_=cu(x);(T.view||_.view)&&(f=!0);var D;if(D=(e.flags&4)===0)if(_.clip)D=!0;else{D=T.rect;var w=_.rect;D=D.y!==w.y||D.x!==w.x||D.height!==w.height||D.width!==w.width}D&&(e.flags|=4),_.abs?_=!T.abs:(T=T.rect,_=_.rect,_=T.height!==_.height||T.width!==_.width),_&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Jp(x,ya===0?t:t+"_"+ya,o),f&&(e.flags&4)!==0||(ct===null&&(ct=[]),ct.push(x,ya===0?n:n+"_"+ya,a.memoizedProps)),ya++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&c?e.flags|=a.flags&32:_c(e,a.child,t,n,o,i,c)&&(f=!0));a=a.sibling}return f}function tp(e,a){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=e.stateNode,o=wt(t,n),i=Ot(t.default,t.update),c;c=e.memoizedState,e.memoizedState=null,n=e;var f=e.child;ya=0,o=_c(n,f,o,o,i,c,!1),(e.flags&4)!==0&&o&&Tl(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&tp(e);e=e.sibling}}var Je=!1,Oe=!1,dt=!1,Mc=!1,np=typeof WeakSet=="function"?WeakSet:Set,We=null,mt=!1,To=!1,ls=!1,Dc=!1;function ex(e,a,t){if(e=e.containerInfo,lu=Bl,e=im(e),br(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var f=0,x=-1,T=-1,_=0,D=0,w=e,R=null;a:for(;;){for(var G;w!==n||i!==0&&w.nodeType!==3||(x=f+i),w!==c||o!==0&&w.nodeType!==3||(T=f+o),w.nodeType===3&&(f+=w.nodeValue.length),(G=w.firstChild)!==null;)R=w,w=G;for(;;){if(w===e)break a;if(R===n&&++_===i&&(x=f),R===c&&++D===o&&(T=f),(G=w.nextSibling)!==null)break;w=R,R=w.parentNode}w=G}n=x===-1||T===-1?null:{start:x,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},Bl=!1,t=(t&335544064)===t,We=a,a=t?9270:1024;We!==null;){if(e=We,t&&(n=e.deletions,n!==null))for(i=0;i<n.length;i++)t&&Cc(n[i]);if(e.alternate===null&&(e.flags&2)!==0)t&&Ff(e),os(t);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&t&&Cc(n),os(t);continue}else if(n!==null&&n.memoizedState!==null){t&&Ff(e),os(t);continue}}n=e.child,(e.subtreeFlags&a)!==0&&n!==null?(n.return=e,We=n):(t&&ep(e),os(t))}}Da=null}function os(e){for(;We!==null;){var a=We,t=e,n=a.alternate,o=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&n!==null){t=void 0,o=n.memoizedProps,n=n.memoizedState;var i=a.stateNode;try{var c=Hn(a.type,o);t=i.getSnapshotBeforeUpdate(c,n),i.__reactInternalSnapshotBeforeUpdate=t}catch(f){Ce(a,a.return,f)}}break;case 3:if((o&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)mu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":mu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&n!==null&&(t=wt(n.memoizedProps,n.stateNode),o=a.memoizedProps,o=Ot(o.default,o.update),o!=="none"&&yl(n,t,o,n.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(d(163))}if(n=a.sibling,n!==null){n.return=a.return,We=n;break}We=a.return}}function lp(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:ft(e,t),n&4&&wo(5,t);break;case 1:if(ft(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(c){Ce(t,t.return,c)}else{var o=Hn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ce(t,t.return,c)}}n&64&&Xf(t),n&512&&rt(t,t.return);break;case 3:if(ft(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{zm(e,a)}catch(c){Ce(t,t.return,c)}}break;case 27:a===null&&n&4&&Kf(t);case 26:case 5:ft(e,t),a===null&&n&4&&jc(t),n&512&&rt(t,t.return);break;case 12:ft(e,t);break;case 31:ft(e,t),n&4&&rp(e,t);break;case 13:ft(e,t),n&4&&cp(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=mx.bind(null,t),Px(e,t))));break;case 22:if(n=t.memoizedState!==null||Je,!n){var i=a!==null&&a.memoizedState!==null||Oe;a=Je,o=Oe,Je=n,(Oe=i)&&!o?(n=2,(t.subtreeFlags&8772)!==0&&(n|=1),Wa(e,t,n)):ft(e,t),Je=a,Oe=o}break;case 30:ft(e,t),n&512&&rt(t,t.return);break;case 7:n&512&&rt(t,t.return);default:ft(e,t)}}function zc(e,a){for(e=e.child;e!==null;)op(e,a),e=e.sibling}function op(e,a){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(a){var n=t.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var o=e.stateNode,i=e.memoizedProps.style,c=i!=null&&i.hasOwnProperty("display")?i.display:null;o.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(x){Ce(e,e.return,x)}Uc(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,je=!0}catch(x){Ce(e,e.return,x)}break;case 18:try{var f=e.stateNode;a?Fp(f,!0):Fp(e.stateNode,!1)}catch(x){Ce(e,e.return,x)}break;case 22:case 23:e.memoizedState===null&&zc(e,a);break;default:zc(e,a)}}function Uc(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,n=a;switch(t.tag){case 4:op(t,n);break e;case 22:t.memoizedState===null&&Uc(t,n);break e;default:Uc(t,n)}}e=e.sibling}}function ip(e){var a=e.alternate;a!==null&&(e.alternate=null,ip(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ui(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,Na=!1;function Fa(e,a,t){for(t=t.child;t!==null;)sp(e,a,t),t=t.sibling}function sp(e,a,t){if(Ta&&typeof Ta.onCommitFiberUnmount=="function")try{Ta.onCommitFiberUnmount(Kl,t)}catch{}switch(t.tag){case 26:Oe||ia(t,a),Fa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Oe&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Oe||ia(t,a),Oo(t);var n=Be,o=Na;dn(t.type)&&(Be=t.stateNode,Na=!1),Fa(e,a,t),dh(t.stateNode,t.type,t.memoizedProps),Be=n,Na=o;break;case 5:Oe||ia(t,a),Oo(t);case 6:if(t.tag===6&&Oo(t),n=Be,o=Na,Be=null,Fa(e,a,t),Be=n,Na=o,Be!==null)if(Na)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(t.stateNode),je=!0}catch(i){Ce(t,a,i)}else try{Be.removeChild(t.stateNode),je=!0}catch(i){Ce(t,a,i)}break;case 18:Be!==null&&(Na?(e=Be,Kp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Hl(e)):Kp(Be,t.stateNode));break;case 4:n=Be,o=Na,Be=t.stateNode.containerInfo,Na=!0,Fa(e,a,t),Be=n,Na=o;break;case 0:case 11:case 14:case 15:nn(2,t,a),Oe||nn(4,t,a),Fa(e,a,t);break;case 1:Oe||(ia(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Pf(t,a,n)),Fa(e,a,t);break;case 21:Fa(e,a,t);break;case 22:Oe=(n=Oe)||t.memoizedState!==null,Fa(e,a,t),Oe=n;break;case 30:ia(t,a),Fa(e,a,t);break;case 7:Oe||ia(t,a),Fa(e,a,t);break;default:Fa(e,a,t)}}function rp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hl(e)}catch(t){Ce(a,a.return,t)}}}function cp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(t){Ce(a,a.return,t)}}function ax(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new np),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new np),a;default:throw Error(d(435,e.tag))}}function is(e,a){var t=ax(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var o=fx.bind(null,e,n);n.then(o,o)}})}function va(e,a,t){var n=a.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o],c=e,f=a,x=f;e:for(;x!==null;){switch(x.tag){case 27:if(dn(x.type)){Be=x.stateNode,Na=!1;break e}break;case 5:Be=x.stateNode,Na=!1;break e;case 3:case 4:Be=x.stateNode.containerInfo,Na=!0;break e}x=x.return}if(Be===null)throw Error(d(160));sp(c,f,i),Be=null,Na=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)up(a,e,t),a=a.sibling}var Ja=null;function up(e,a,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var i=0;i<n.length;i++){var c=n[i];c.ref.impl=c.nextImpl}va(a,e,t),ga(e),o&4&&(nn(3,e,e.return),wo(3,e),nn(5,e,e.return));break;case 1:va(a,e,t),ga(e),o&512&&(Oe||n===null||ia(n,n.return)),o&64&&Je&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:if(i=Ja,va(a,e,t),ga(e),o&512&&(Oe||n===null||ia(n,n.return)),o&4)if(o=n!==null?n.memoizedState:null,t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null)if(Je)e.stateNode=Pp(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,t=e.memoizedProps,o=i.ownerDocument||i;a:switch(a){case"title":n=o.getElementsByTagName("title")[0],(!n||n[Wl]||n[ta]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=o.createElement(a),o.head.insertBefore(n,o.querySelector("head > title"))),sa(n,a,t),n[ta]=e,Ke(n),a=n;break e;case"link":if(i=gh("link","href",o).get(a+(t.href||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(c,1);break a}}n=o.createElement(a),sa(n,a,t),o.head.appendChild(n);break;case"meta":if(i=gh("meta","content",o).get(a+(t.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(c,1);break a}}n=o.createElement(a),sa(n,a,t),o.head.appendChild(n);break;default:throw Error(d(468,a))}n[ta]=e,Ke(n),a=n}e.stateNode=a}else Je||bu(i,e.type,e.stateNode);else e.stateNode=vh(i,t,e.memoizedProps);else o!==t?(o===null?(a=n.stateNode,a===null||Oe||a.parentNode.removeChild(a)):o.count--,t===null?Je||bu(i,e.type,e.stateNode):vh(i,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Sc(e,e.memoizedProps,n.memoizedProps);break;case 27:va(a,e,t),ga(e),o&512&&(Oe||n===null||ia(n,n.return)),n!==null&&o&4&&Sc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(i=dt,dt=!1,va(a,e,t),dt=i,ga(e),o&512&&(Oe||n===null||ia(n,n.return)),e.flags&32){a=e.stateNode;try{tl(a,""),je=!0}catch(_){Ce(e,e.return,_)}}o&4&&e.stateNode!=null&&(a=e.memoizedProps,Sc(e,a,n!==null?n.memoizedProps:a)),o&1024&&(Mc=!0);break;case 6:if(va(a,e,t),ga(e),o&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a,je=!0}catch(_){Ce(e,e.return,_)}}break;case 3:if(je=!1,Ns=null,i=Ja,Ja=Lo(a.containerInfo),va(a,e,t),Ja=i,ga(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(a.containerInfo)}catch(_){Ce(e,e.return,_)}Mc&&(Mc=!1,dp(e)),je=!1;break;case 4:o=dt,dt=Je,n=Rd(),i=Ja,Ja=Lo(e.stateNode.containerInfo),va(a,e,t),ga(e),Ja=i,je&&To&&(ls=!0),je=n,dt=o;break;case 12:va(a,e,t),ga(e);break;case 31:va(a,e,t),ga(e),o&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,is(e,a)));break;case 13:va(a,e,t),ga(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(cs=Oa()),o&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,is(e,a)));break;case 22:i=e.memoizedState!==null,c=n!==null&&n.memoizedState!==null;var f=Je,x=Oe,T=dt;Je=f||i,dt=T||i,Oe=x||c,va(a,e,t),Oe=x,dt=T,Je=f,ga(e),o&8192&&(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,!i||n===null||c||Je||Oe||(a=c||Oe,t=Je,n=Oe,Je=i||Je,Oe=a,ln(e,2),Je=t,Oe=n),!i&&dt||zc(e,i)),o&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,is(e,t))));break;case 19:va(a,e,t),ga(e),o&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,is(e,a)));break;case 30:o&512&&(Oe||n===null||ia(n,n.return)),o=Rd(),i=To,c=(t&335544064)===t,f=e.memoizedProps,To=c&&Ot(f.default,f.update)!=="none",va(a,e,t),ga(e),c&&n!==null&&je&&(e.flags|=4),To=i,je=o;break;case 21:break;case 7:o&512&&(Oe||n===null||ia(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:va(a,e,t),ga(e)}}function ga(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(Zf(n)){t=n;break}n=n.return}n=null;for(var o=e.return;o!==null;){if(Ec(o)){var i=o.stateNode;n===null?n=[i]:n.push(i)}if(Nc(o))break;o=o.return}var c=n;if(t==null)throw Error(d(160));switch(t.tag){case 27:var f=t.stateNode,x=Ac(e);es(e,x,f,c);break;case 5:var T=t.stateNode;t.flags&32&&(tl(T,""),t.flags&=-33);var _=Ac(e);es(e,_,T,c);break;case 3:case 4:var D=t.stateNode.containerInfo,w=Ac(e);wc(e,w,D,c);break;default:throw Error(d(161))}}catch(R){Ce(e,e.return,R)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function dp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;dp(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Bl=!0,a.reset(),Bl=!1),e=e.sibling}}function Nl(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)mp(a,e),a=a.sibling;else tp(a)}function mp(e,a){var t=e.alternate;if(t===null)Oc(e,!1);else switch(e.tag){case 3:if(Dc=mt=!1,Jf(),Nl(a,e),!mt&&!ls){if(e=ct,e!==null)for(var n=0;n<e.length;n+=3){t=e[n];var o=e[n+1];Wp(t,e[n+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dc=!0}ct=null;break;case 5:Nl(a,e);break;case 4:n=mt,mt=!1,Nl(a,e),mt&&(ls=!0),mt=n;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?Oc(e,!1):Nl(a,e));break;case 30:n=mt,o=Jf(),mt=!1,Nl(a,e),mt&&(e.flags|=4);var i=e.memoizedProps,c=e.stateNode;a=wt(i,c),c=wt(t.memoizedProps,c);var f=Ot(i.default,i.update);f==="none"?a=!1:(i=t.memoizedState,t.memoizedState=null,t=e.child,ya=0,a=_c(e,t,a,c,f,i,!0),ya!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Tl(e,e.memoizedProps.onUpdate),ct=o):o!==null&&(o.push.apply(o,ct),ct=o),mt=(e.flags&32)!==0?!0:n;break;default:Nl(a,e)}}function ft(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)lp(e,a.alternate,a),a=a.sibling}function ln(e,a){for(e=e.child;e!==null;){var t=e,n=a;switch(t.tag){case 0:case 11:case 14:case 15:nn(4,t,t.return),ln(t,n);break;case 1:ia(t,t.return);var o=t.stateNode;typeof o.componentWillUnmount=="function"&&Pf(t,t.return,o),ln(t,n);break;case 27:(n&2)!==0&&dh(t.stateNode,t.type,t.memoizedProps);case 5:ia(t,t.return),t.tag!==5&&t.tag!==27||Oo(t),ln(t,n);break;case 6:Oo(t);break;case 26:ia(t,t.return),o=t.stateNode,t.memoizedState!==null||o===null||Oe||o.parentNode.removeChild(o),ln(t,n);break;case 22:t.memoizedState===null&&ln(t,n);break;case 30:ia(t,t.return),ln(t,n);break;case 7:ia(t,t.return);default:ln(t,n)}e=e.sibling}}function Wa(e,a,t){for(t=(a.subtreeFlags&8772)!==0?t:t&-2,a=a.child;a!==null;){var n=a.alternate,o=e,i=a,c=i.flags,f=(t&1)!==0;switch(i.tag){case 0:case 11:case 15:Wa(o,i,t),wo(4,i);break;case 1:if(Wa(o,i,t),n=i,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(_){Ce(n,n.return,_)}if(n=i,o=n.updateQueue,o!==null){var x=n.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)Dm(T[o],x)}catch(_){Ce(n,n.return,_)}}f&&c&64&&Xf(i),rt(i,i.return);break;case 27:(t&2)!==0&&Kf(i);case 5:i.tag!==5&&i.tag!==27||$f(i),Wa(o,i,t),f&&n===null&&c&4&&jc(i),rt(i,i.return);break;case 6:$f(i);break;case 26:x=i.stateNode,i.memoizedState!==null||x===null||Je||bu(Lo(x.ownerDocument),i.type,x),Wa(o,i,t),f&&n===null&&c&4&&jc(i),rt(i,i.return);break;case 12:Wa(o,i,t);break;case 31:Wa(o,i,t),f&&c&4&&rp(o,i);break;case 13:Wa(o,i,t),f&&c&4&&cp(o,i);break;case 22:i.memoizedState===null&&Wa(o,i,t),rt(i,i.return);break;case 30:Wa(o,i,t),rt(i,i.return);break;case 7:rt(i,i.return);default:Wa(o,i,t)}a=a.sibling}}function qc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&fo(t))}function Lc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&fo(e))}function Ya(e,a,t,n){var o=(t&335544064)===t;if(a.subtreeFlags&(o?10262:10256))for(a=a.child;a!==null;)fp(e,a,t,n),a=a.sibling;else o&&ap(a)}function fp(e,a,t,n){var o=(t&335544064)===t;o&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&ns(a);var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ya(e,a,t,n),i&2048&&wo(9,a);break;case 1:Ya(e,a,t,n);break;case 3:Ya(e,a,t,n),o&&Dc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,a.alternate!==null&&(i=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==i&&(a.refCount++,i!=null&&fo(i)));break;case 12:if(i&2048){Ya(e,a,t,n),i=a.stateNode;try{var c=a.memoizedProps,f=c.id,x=c.onPostCommit;typeof x=="function"&&x(f,a.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(T){Ce(a,a.return,T)}}else Ya(e,a,t,n);break;case 31:Ya(e,a,t,n);break;case 13:Ya(e,a,t,n);break;case 23:break;case 22:c=a.stateNode,f=a.alternate,a.memoizedState!==null?(o&&f!==null&&f.memoizedState===null&&ns(f),c._visibility&2?Ya(e,a,t,n):Co(e,a)):(o&&f!==null&&f.memoizedState!==null&&ns(a),c._visibility&2?Ya(e,a,t,n):(c._visibility|=2,El(e,a,t,n,(a.subtreeFlags&10256)!==0||!1))),i&2048&&qc(f,a);break;case 24:Ya(e,a,t,n),i&2048&&Lc(a.alternate,a);break;case 30:o&&(i=a.alternate,i!==null&&(ut(i.child,!0),ut(a.child,!0))),Ya(e,a,t,n);break;default:Ya(e,a,t,n)}}function El(e,a,t,n,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,c=a,f=t,x=n,T=c.flags;switch(c.tag){case 0:case 11:case 15:El(i,c,f,x,o),wo(8,c);break;case 23:break;case 22:var _=c.stateNode;c.memoizedState!==null?_._visibility&2?El(i,c,f,x,o):Co(i,c):(_._visibility|=2,El(i,c,f,x,o)),o&&T&2048&&qc(c.alternate,c);break;case 24:El(i,c,f,x,o),o&&T&2048&&Lc(c.alternate,c);break;default:El(i,c,f,x,o)}a=a.sibling}}function Co(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,o=n.flags;switch(n.tag){case 22:Co(t,n),o&2048&&qc(n.alternate,n);break;case 24:Co(t,n),o&2048&&Lc(n.alternate,n);break;default:Co(t,n)}a=a.sibling}}var kn=8192;function In(e,a,t){if(e.subtreeFlags&kn)for(e=e.child;e!==null;)pp(e,a,t),e=e.sibling}function pp(e,a,t){switch(e.tag){case 26:In(e,a,t),e.flags&kn&&(e.memoizedState!==null?s1(t,Ja,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&Nh(t,e)));break;case 5:In(e,a,t),e.flags&kn&&(e=e.stateNode,(a&335544128)===a&&Nh(t,e));break;case 3:case 4:var n=Ja;Ja=Lo(e.stateNode.containerInfo),In(e,a,t),Ja=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=kn,kn=16777216,In(e,a,t),kn=n):In(e,a,t));break;case 30:if((e.flags&kn)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var o=e.stateNode;o.paired=null,Da===null&&(Da=new Map),Da.set(n,o)}In(e,a,t);break;default:In(e,a,t)}}function hp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Ro(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];We=n,gp(n,e)}hp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vp(e),e=e.sibling}function vp(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&nn(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,ss(e)):Ro(e);break;default:Ro(e)}}function ss(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];We=n,gp(n,e)}hp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:nn(8,a,a.return),ss(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,ss(a));break;default:ss(a)}e=e.sibling}}function gp(e,a){for(;We!==null;){var t=We;switch(t.tag){case 0:case 11:case 15:nn(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:fo(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,We=n;else e:for(t=e;We!==null;){n=We;var o=n.sibling,i=n.return;if(ip(n),n===t){We=null;break e}if(o!==null){o.return=i,We=o;break e}We=i}}}var tx={getCacheForType:function(e){var a=na(Qe),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return na(Qe).controller.signal}},nx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,De=null,ve=null,xe=0,Te=0,za=null,on=!1,jl=!1,Bc=!1,qt=0,Ve=0,sn=0,Vn=0,rs=0,Ua=0,Sl=0,_o=null,Ea=null,Hc=!1,cs=0,xp=0,us=1/0,ds=null,rn=null,He=0,et=null,Gn=null,pt=0,kc=0,Ic=null,bp=null,Al=null,wl=null,Ol=null,Mo=0,ms=null;function qa(){return(Ae&2)!==0&&xe!==0?xe&-xe:W.T!==null?Fc():Nd()}function yp(){if(Ua===0)if((xe&536870912)===0||pe){var e=ii;ii<<=1,(ii&3932160)===0&&(ii=262144),Ua=e}else Ua=536870912;return e=la.current,e!==null&&(e.flags|=32),Ua}function Tl(e,a){if(a!=null){var t=e.stateNode,n=t.ref;n===null&&(n=t.ref=eh(wt(e.memoizedProps,t))),wl===null&&(wl=[]),wl.push(a.bind(null,n))}}function ja(e,a,t){(e===De&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),cn(e,xe,Ua,!1)),Jl(e,t),((Ae&2)===0||e!==De)&&(e===De&&((Ae&2)===0&&(Vn|=t),Ve===4&&cn(e,xe,Ua,!1)),ht(e))}function Np(e,a,t){if((Ae&6)!==0)throw Error(d(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Fl(e,a),o=n?ix(e,a):Gc(e,a,!0),i=n;do{if(o===0){jl&&!n&&cn(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!lx(t)){o=Gc(e,a,!1),i=!1;continue}if(o===2){if(i=a,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){a=c;e:{var f=e;o=_o;var x=f.current.memoizedState.isDehydrated;if(x&&(Cl(f,c).flags|=256),c=Gc(f,c,!1),c!==2&&c!==6){if(Bc&&!x){f.errorRecoveryDisabledLanes|=i,Vn|=i,o=4;break e}i=Ea,Ea=o,i!==null&&(Ea===null?Ea=i:Ea.push.apply(Ea,i))}o=c}if(i=!1,o!==2)continue}}if(o===1){Cl(e,0),cn(e,a,0,!0);break}e:{switch(n=e,i=o,i){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:cn(n,a,Ua,!on);break e;case 2:Ea=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(o=cs+300-Oa(),10<o)){if(cn(n,a,Ua,!on),ri(n,0,!0)!==0)break e;pt=a,n.timeoutHandle=ru(Ep.bind(null,n,t,Ea,ds,Hc,a,Ua,Vn,Sl,on,i,"Throttled",-0,0),o);break e}Ep(n,t,Ea,ds,Hc,a,Ua,Vn,Sl,on,i,null,-0,0)}}break}while(!0);ht(e)}function Ep(e,a,t,n,o,i,c,f,x,T,_,D,w,R){e.timeoutHandle=-1;var G=a.subtreeFlags,Z=(i&335544064)===i;if(D=null,(Z||G&8192||(G&16785408)===16785408)&&(D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ot},Da=null,pp(a,i,D),Z&&(G=D,Z=e.containerInfo,Z=(Z.nodeType===9?Z:Z.ownerDocument).__reactViewTransition,Z!=null&&(G.count++,G.waitingForViewTransition=!0,G=ko.bind(G),Z.finished.then(G,G))),G=(i&62914560)===i?cs-Oa():(i&4194048)===i?xp-Oa():0,G=r1(D,G),G!==null)){pt=i,e.cancelPendingCommit=G(Rp.bind(null,e,a,i,t,n,o,c,f,x,T,_,D,null,w,R)),cn(e,i,c,!T);return}Rp(e,a,i,t,n,o,c,f,x,T,_,D)}function lx(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],i=o.getSnapshot;o=o.value;try{if(!_a(i(),o))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function cn(e,a,t,n){a=vd(e,a),a&=~rs,a&=~Vn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var o=a;0<o;){var i=31-Ca(o),c=1<<i;n[i]=-1,o&=~c}t!==0&&xd(e,t,a)}function fs(){return(Ae&6)===0?(Do(0),!1):!0}function Vc(){if(ve!==null){if(Te===0)var e=ve.return;else e=ve,Rt=Rn=null,Kr(e),hl=null,vo=0,e=ve;for(;e!==null;)Qf(e.alternate,e),e=e.return;ve=null}}function Cl(e,a){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,Tx(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),pt=0,Vc(),De=e,ve=t=Tt(e.current,null),xe=a,Te=0,za=null,on=!1,jl=Fl(e,a),Bc=!1,Sl=Ua=rs=Vn=sn=Ve=0,Ea=_o=null,Hc=!1,qt=vd(e,a),Ni(),t}function jp(e,a){me=null,W.H=Xi,a===pl||a===Mi?(a=Cm(),Te=3):a===Lr?(a=Cm(),Te=4):Te=a===dc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,za=a,ve===null&&(Ve=1,Pi(e,ka(a,e.current)))}function Sp(){var e=la.current;return e===null?!0:(xe&4194048)===xe?ca===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ca:!1}function Ap(){var e=W.H;return W.H=Xi,e===null?Xi:e}function wp(){var e=W.A;return W.A=tx,e}function ps(){Ve=4,on||(xe&4194048)!==xe&&la.current!==null||(jl=!0),(sn&134217727)===0&&(Vn&134217727)===0||De===null||cn(De,xe,Ua,!1)}function Gc(e,a,t){var n=Ae;Ae|=2;var o=Ap(),i=wp();(De!==e||xe!==a)&&(ds=null,Cl(e,a)),a=!1;var c=Ve;e:do try{if(Te!==0&&ve!==null){var f=ve,x=za;switch(Te){case 8:Vc(),c=6;break e;case 3:case 2:case 9:case 6:la.current===null&&(a=!0);var T=Te;if(Te=0,za=null,Rl(e,f,x,T),t&&jl){c=0;break e}break;default:T=Te,Te=0,za=null,Rl(e,f,x,T)}}ox(),c=Ve;break}catch(_){jp(e,_)}while(!0);return a&&e.shellSuspendCounter++,Rt=Rn=null,Ae=n,W.H=o,W.A=i,ve===null&&(De=null,xe=0,Ni()),c}function ox(){for(;ve!==null;)Op(ve)}function ix(e,a){var t=Ae;Ae|=2;var n=Ap(),o=wp();De!==e||xe!==a?(ds=null,us=Oa()+500,Cl(e,a)):jl=Fl(e,a);e:do try{if(Te!==0&&ve!==null){a=ve;var i=za;a:switch(Te){case 1:Te=0,za=null,Rl(e,a,i,1);break;case 2:case 9:if(Om(i)){Te=0,za=null,Tp(a);break}a=function(){Te!==2&&Te!==9||De!==e||(Te=7),ht(e)},i.then(a,a);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Om(i)?(Te=0,za=null,Tp(a)):(Te=0,za=null,Rl(e,a,i,7));break;case 5:var c=null;switch(ve.tag){case 26:c=ve.memoizedState;case 5:case 27:var f=ve;if(c?bh(c):f.stateNode.complete){Te=0,za=null;var x=f.sibling;if(x!==null)ve=x;else{var T=f.return;T!==null?(ve=T,hs(T)):ve=null}break a}}Te=0,za=null,Rl(e,a,i,5);break;case 6:Te=0,za=null,Rl(e,a,i,6);break;case 8:Vc(),Ve=6;break e;default:throw Error(d(462))}}sx();break}catch(_){jp(e,_)}while(!0);return Rt=Rn=null,W.H=n,W.A=o,Ae=t,ve!==null?0:(De=null,xe=0,Ni(),Ve)}function sx(){for(;ve!==null&&!S0();)Op(ve)}function Op(e){var a=Gf(e.alternate,e,qt);e.memoizedProps=e.pendingProps,a===null?hs(e):ve=a}function Tp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=qf(t,a,a.pendingProps,a.type,void 0,xe);break;case 11:a=qf(t,a,a.pendingProps,a.type.render,a.ref,xe);break;case 5:Kr(a);var n=a;n===Fe&&(pe?(Oi(n),n.tag===5&&n.stateNode!=null&&(qe=n.stateNode)):(Oi(n),pe=!0));default:Qf(t,a),a=ve=vm(a,qt),a=Gf(t,a,qt)}e.memoizedProps=e.pendingProps,a===null?hs(e):ve=a}function Rl(e,a,t,n){Rt=Rn=null,Kr(a),hl=null,vo=0;var o=a.return;try{if($g(e,o,a,t,xe)){Ve=1,Pi(e,ka(t,e.current)),ve=null;return}}catch(i){if(o!==null)throw ve=o,i;Ve=1,Pi(e,ka(t,e.current)),ve=null;return}a.flags&32768?(pe||n===1?e=!0:jl||(xe&536870912)!==0?e=!1:(on=e=!0,(n===2||n===9||n===3||n===6)&&(n=la.current,n!==null&&n.tag===13&&(n.flags|=16384))),Cp(a,e)):hs(a)}function hs(e){var a=e;do{if((a.flags&32768)!==0){Cp(a,on);return}e=a.return;var t=Jg(a.alternate,a,qt);if(t!==null){ve=t;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);Ve===0&&(Ve=5)}function Cp(e,a){do{var t=Wg(e.alternate,e);if(t!==null){t.flags&=32767,ve=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=t}while(e!==null);Ve=6,ve=null}function Rp(e,a,t,n,o,i,c,f,x,T,_,D){e.cancelPendingCommit=null;do vs();while(He!==0);if((Ae&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));e===De&&(ve=De=null,xe=0),Gn=a,et=e,pt=t,Ic=o,bp=n,rx(e,a,t,c,f,x,D)}}function rx(e,a,t,n,o,i,c){var f=a.lanes|a.childLanes;if(kc=f,f|=Sr,z0(e,t,f,n,o,i),wl=null,(t&335544064)===t?(Ol=qg(e),n=10262):(Ol=null,n=10256),(a.subtreeFlags&n)!==0||(a.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,px(li,function(){return Pc(),null})):(e.callbackNode=null,e.callbackPriority=0),as=!1,n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=W.T,W.T=null,o=re.p,re.p=2,i=Ae,Ae|=4;try{ex(e,a,t)}finally{Ae=i,re.p=o,W.T=n}}He=1,as?Al=zx(c,e.containerInfo,Ol,Yc,Qc,ux,Xc,Pc,cx):(Yc(),Qc(),Xc())}function cx(e){if(He!==0){var a=et.onRecoverableError;a(e,{componentStack:null})}}function ux(){He===3&&(He=0,mp(Gn,et),He=4)}function Yc(){if(He===1){He=0;var e=et,a=Gn,t=pt,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=W.T,W.T=null;var o=re.p;re.p=2;var i=Ae;Ae|=4;try{To=ls=!1,up(a,e,t),t=ou;var c=im(e.containerInfo),f=t.focusedElem,x=t.selectionRange;if(c!==f&&f&&f.ownerDocument&&om(f.ownerDocument.documentElement,f)){if(x!==null&&br(f)){var T=x.start,_=x.end;if(_===void 0&&(_=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(_,f.value.length);else{var D=f.ownerDocument||document,w=D&&D.defaultView||window;if(w.getSelection){var R=w.getSelection(),G=f.textContent.length,Z=Math.min(x.start,G),fe=x.end===void 0?Z:Math.min(x.end,G);!R.extend&&Z>fe&&(c=fe,fe=Z,Z=c);var O=lm(f,Z),j=lm(f,fe);if(O&&j&&(R.rangeCount!==1||R.anchorNode!==O.node||R.anchorOffset!==O.offset||R.focusNode!==j.node||R.focusOffset!==j.offset)){var C=D.createRange();C.setStart(O.node,O.offset),R.removeAllRanges(),Z>fe?(R.addRange(C),R.extend(j.node,j.offset)):(C.setEnd(j.node,j.offset),R.addRange(C))}}}}for(D=[],R=f;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var M=D[f];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Bl=!!lu,ou=lu=null}finally{Ae=i,re.p=o,W.T=n}}e.current=a,He=2}}function Qc(){if(He===2){He=0;var e=et,a=Gn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=W.T,W.T=null;var n=re.p;re.p=2;var o=Ae;Ae|=4;try{lp(e,a.alternate,a)}finally{Ae=o,re.p=n,W.T=t}}He=3}}function Xc(){if(He===4||He===3){He=0;var e=Al;Al=null,A0();var a=et,t=Gn,n=pt,o=bp,i=(n&335544064)===n?10262:10256;if((t.subtreeFlags&i)!==0||(t.flags&i)!==0?He=5:(He=0,Gn=et=null,_p(a,a.pendingLanes)),i=a.pendingLanes,i===0&&(rn=null),ar(n),t=t.stateNode,Ta&&typeof Ta.onCommitFiberRoot=="function")try{Ta.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=W.T,i=re.p,re.p=2,W.T=null;try{for(var c=a.onRecoverableError,f=0;f<o.length;f++){var x=o[f];c(x.value,{componentStack:x.stack})}}finally{W.T=t,re.p=i}}if(o=wl,c=Ol,Ol=null,o!==null&&(wl=null,c===null&&(c=[]),e!==null))for(x=0;x<o.length;x++)t=(0,o[x])(c),t!==void 0&&e.finished.finally(t);(pt&3)!==0&&vs(),ht(a),i=a.pendingLanes,(n&261930)!==0&&(i&42)!==0?a===ms?Mo++:(Mo=0,ms=a):(Mo=0,ms=null),Do(0)}}function _p(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,fo(a)))}function vs(){return Al!==null&&(Al.skipTransition(),Al=null),Yc(),Qc(),Xc(),Pc()}function Pc(){if(He!==5)return!1;var e=et,a=kc;kc=0;var t=ar(pt),n=W.T,o=re.p;try{re.p=32>t?32:t,W.T=null,t=Ic,Ic=null;var i=et,c=pt;if(He=0,Gn=et=null,pt=0,(Ae&6)!==0)throw Error(d(331));var f=Ae;if(Ae|=4,vp(i.current),fp(i,i.current,c,t),Ae=f,Do(0,!1),Ta&&typeof Ta.onPostCommitFiberRoot=="function")try{Ta.onPostCommitFiberRoot(Kl,i)}catch{}return!0}finally{re.p=o,W.T=n,_p(e,a)}}function Mp(e,a,t){a=ka(t,a),a=uc(e.stateNode,a,2),e=Wt(e,a,2),e!==null&&(Jl(e,2),ht(e))}function Ce(e,a,t){if(e.tag===3)Mp(e,e,t);else for(;a!==null;){if(a.tag===3){Mp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(rn===null||!rn.has(n))){e=ka(t,e),t=Tf(2),n=Wt(a,t,2),n!==null&&(Cf(t,n,a,e),Jl(n,2),ht(n));break}}a=a.return}}function $c(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new nx;var o=new Set;n.set(a,o)}else o=n.get(a),o===void 0&&(o=new Set,n.set(a,o));o.has(t)||(Bc=!0,o.add(t),e=dx.bind(null,e,a,t),a.then(e,e))}function dx(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,De===e&&(xe&t)===t&&((Ve===4||Ve===3&&(xe&62914560)===xe&&300>Oa()-cs)&&(Ae&2)===0?Cl(e,0):rs|=t,Sl===xe&&(Sl=0)),ht(e)}function Dp(e,a){a===0&&(a=gd()),e=On(e,a),e!==null&&(Jl(e,a),ht(e))}function mx(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),Dp(e,t)}function fx(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(a),Dp(e,t)}function px(e,a){return Fs(e,a)}var _l=null,Ml=null,Zc=!1,gs=!1,Kc=!1,un=0;function ht(e){e!==Ml&&e.next===null&&(Ml===null?_l=Ml=e:Ml=Ml.next=e),gs=!0,Zc||(Zc=!0,vx())}function Do(e,a){if(!Kc&&gs){Kc=!0;do for(var t=!1,n=_l;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var i=0;else{var c=n.suspendedLanes,f=n.pingedLanes;i=(1<<31-Ca(42|e)+1)-1,i&=o&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Lp(n,i))}else i=xe,i=ri(n,n===De?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Fl(n,i)||(t=!0,Lp(n,i));n=n.next}while(t);Kc=!1}}function hx(){zp()}function zp(){gs=Zc=!1;var e=0;un!==0&&Ox()&&(e=un);for(var a=Oa(),t=null,n=_l;n!==null;){var o=n.next,i=Up(n,a);i===0?(n.next=null,t===null?_l=o:t.next=o,o===null&&(Ml=t)):(t=n,(e!==0||(i&3)!==0)&&(gs=!0)),n=o}He!==0&&He!==5||Do(e),un!==0&&(un=0)}function Up(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-Ca(i),f=1<<c,x=o[c];x===-1?((f&t)===0||(f&n)!==0)&&(o[c]=D0(f,a)):x<=a&&(e.expiredLanes|=f),i&=~f}if(a=De,t=xe,t=ri(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Fl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&Js(n),ar(t)){case 2:case 8:t=pd;break;case 32:t=li;break;case 268435456:t=hd;break;default:t=li}return n=qp.bind(null,e),t=Fs(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&Js(n),e.callbackPriority=2,e.callbackNode=null,2}function qp(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(vs()&&e.callbackNode!==t)return null;var n=xe;return n=ri(e,e===De?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Np(e,n,a),Up(e,Oa()),e.callbackNode!=null&&e.callbackNode===t?qp.bind(null,e):null)}function Lp(e,a){if(vs())return null;Np(e,a,!0)}function vx(){Cx(function(){(Ae&6)!==0?Fs(fd,hx):zp()})}function Fc(){if(un===0){var e=Dn;e===0&&(e=oi,oi<<=1,(oi&261888)===0&&(oi=256)),un=e}return un}function Bp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fi(e)}function gx(e,a,t,n,o){if(a==="submit"&&t&&t.stateNode===o){var i=Bp((o[xa]||null).action),c=n.submitter;c&&(a=(a=c[xa]||null)?Bp(a.formAction):c.getAttribute("formAction"),a!==null&&(i=a,c=null));var f=new gi("action","action",null,n,o);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(un!==0){var x=new FormData(o,c);oc(t,{pending:!0,data:x,method:o.method,action:i},null,x)}}else typeof i=="function"&&(f.preventDefault(),x=new FormData(o,c),oc(t,{pending:!0,data:x,method:o.method,action:i},i,x))},currentTarget:o}]})}}for(var Jc=0;Jc<jr.length;Jc++){var Wc=jr[Jc],xx=Wc.toLowerCase(),bx=Wc[0].toUpperCase()+Wc.slice(1);Ka(xx,"on"+bx)}Ka(cm,"onAnimationEnd"),Ka(um,"onAnimationIteration"),Ka(dm,"onAnimationStart"),Ka("dblclick","onDoubleClick"),Ka("focusin","onFocus"),Ka("focusout","onBlur"),Ka(Tg,"onTransitionRun"),Ka(Cg,"onTransitionStart"),Ka(Rg,"onTransitionCancel"),Ka(mm,"onTransitionEnd"),el("onMouseEnter",["mouseout","mouseover"]),el("onMouseLeave",["mouseout","mouseover"]),el("onPointerEnter",["pointerout","pointerover"]),el("onPointerLeave",["pointerout","pointerover"]),Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Hp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],o=n.event;n=n.listeners;e:{var i=void 0;if(a)for(var c=n.length-1;0<=c;c--){var f=n[c],x=f.instance,T=f.currentTarget;if(f=f.listener,x!==i&&o.isPropagationStopped())break e;i=f,o.currentTarget=T;try{i(o)}catch(_){yi(_)}o.currentTarget=null,i=x}else for(c=0;c<n.length;c++){if(f=n[c],x=f.instance,T=f.currentTarget,f=f.listener,x!==i&&o.isPropagationStopped())break e;i=f,o.currentTarget=T;try{i(o)}catch(_){yi(_)}o.currentTarget=null,i=x}}}}function ge(e,a){var t=a[jd];t===void 0&&(t=a[jd]=new Set);var n=e+"__bubble";t.has(n)||(kp(a,e,2,!1),t.add(n))}function eu(e,a,t){var n=0;a&&(n|=4),kp(t,e,n,a)}var xs="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[xs]){e[xs]=!0,wd.forEach(function(t){t!=="selectionchange"&&(yx.has(t)||eu(t,!1,e),eu(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[xs]||(a[xs]=!0,eu("selectionchange",!1,a))}}function kp(e,a,t,n){switch(Ch(a)){case 2:var o=m1;break;case 8:o=f1;break;default:o=Nu}t=o.bind(null,a,t,e),o=void 0,!cr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(a,t,{capture:!0,passive:o}):e.addEventListener(a,t,!0):o!==void 0?e.addEventListener(a,t,{passive:o}):e.addEventListener(a,t,!1)}function tu(e,a,t,n,o){var i=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var f=n.stateNode.containerInfo;if(f===o)break;if(c===4)for(c=n.return;c!==null;){var x=c.tag;if((x===3||x===4)&&c.stateNode.containerInfo===o)return;c=c.return}for(;f!==null;){if(c=jn(f),c===null)return;if(x=c.tag,x===5||x===6||x===26||x===27){n=i=c;continue e}f=f.parentNode}}n=n.return}Hd(function(){var T=i,_=sr(t),D=[];e:{var w=fm.get(e);if(w!==void 0){var R=gi,G=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":R=lg;break;case"focusin":G="focus",R=fr;break;case"focusout":G="blur",R=fr;break;case"beforeblur":case"afterblur":R=fr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=cg;break;case cm:case um:case dm:R=Z0;break;case mm:R=dg;break;case"scroll":case"scrollend":R=Y0;break;case"wheel":R=fg;break;case"copy":case"cut":case"paste":R=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Yd;break;case"submit":R=sg;break;case"toggle":case"beforetoggle":R=hg}var Z=(a&4)!==0,fe=!Z&&(e==="scroll"||e==="scrollend"),O=Z?w!==null?w+"Capture":null:w;Z=[];for(var j=T,C;j!==null;){var M=j;if(C=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||C===null||O===null||(M=ao(j,O),M!=null&&Z.push(Uo(j,M,C))),fe)break;j=j.return}0<Z.length&&(w=new R(w,G,null,t,_),D.push({event:w,listeners:Z}))}}if((a&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",R&&t!==ir&&(G=t.relatedTarget||t.fromElement)&&(jn(G)||G[Fn]))break e;(w||R)&&(G=_.window===_?_:(R=_.ownerDocument)?R.defaultView||R.parentWindow:window,w?(R=t.relatedTarget||t.toElement,w=T,R=R?jn(R):null,R!==null&&(fe=p(R),Z=R.tag,R!==fe||Z!==5&&Z!==27&&Z!==6)&&(R=null)):(w=null,R=T),w!==R&&(Z=Vd,M="onMouseLeave",O="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Yd,M="onPointerLeave",O="onPointerEnter",j="pointer"),fe=w==null?G:eo(w),C=R==null?G:eo(R),G=new Z(M,j+"leave",w,t,_),G.target=fe,G.relatedTarget=C,M=null,jn(_)===T&&(Z=new Z(O,j+"enter",R,t,_),Z.target=C,Z.relatedTarget=fe,M=Z),fe=M,Z=w&&R?K(w,R,Nx):null,w!==null&&Ip(D,G,w,Z,!1),R!==null&&fe!==null&&Ip(D,fe,R,Z,!0)))}e:{if(w=T?eo(T):window,R=w.nodeName&&w.nodeName.toLowerCase(),R==="select"||R==="input"&&w.type==="file")var $=Jd;else if(Kd(w))if(Wd)$=Ag;else{$=jg;var be=Eg}else R=w.nodeName,!R||R.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?T&&or(T.elementType)&&($=Jd):$=Sg;if($&&($=$(e,T))){Fd(D,$,t,_);break e}be&&be(e,w,T)}switch(be=T?eo(T):window,e){case"focusin":(Kd(be)||be.contentEditable==="true")&&(il=be,yr=T,co=null);break;case"focusout":co=yr=il=null;break;case"mousedown":Nr=!0;break;case"contextmenu":case"mouseup":case"dragend":Nr=!1,sm(D,t,_);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":sm(D,t,_)}var ee;if(hr)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ol?$d(e,t)&&(oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(oe="onCompositionStart");oe&&(Qd&&t.locale!=="ko"&&(ol||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ol&&(ee=kd()):(Yt=_,ur="value"in Yt?Yt.value:Yt.textContent,ol=!0)),be=bs(T,oe),0<be.length&&(oe=new Gd(oe,e,null,t,_),D.push({event:oe,listeners:be}),ee?oe.data=ee:(ee=Zd(t),ee!==null&&(oe.data=ee)))),(ee=gg?xg(e,t):bg(e,t))&&(oe=bs(T,"onBeforeInput"),0<oe.length&&(be=new Gd("onBeforeInput","beforeinput",null,t,_),D.push({event:be,listeners:oe}),be.data=ee)),gx(D,e,T,t,_)}Hp(D,a)})}function Uo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function bs(e,a){for(var t=a+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=ao(e,t),o!=null&&n.unshift(Uo(e,o,i)),o=ao(e,a),o!=null&&n.push(Uo(e,o,i))),e.tag===3)return n;e=e.return}return[]}function Nx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ip(e,a,t,n,o){for(var i=a._reactName,c=[];t!==null&&t!==n;){var f=t,x=f.alternate,T=f.stateNode;if(f=f.tag,x!==null&&x===n)break;f!==5&&f!==26&&f!==27||T===null||(x=T,o?(T=ao(t,i),T!=null&&c.unshift(Uo(t,T,x))):o||(T=ao(t,i),T!=null&&c.push(Uo(t,T,x)))),t=t.return}c.length!==0&&e.push({event:a,listeners:c})}var Ex=/\r\n?/g,jx=/\u0000|\uFFFD/g;function Vp(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(jx,"")}function Gp(e,a){return a=Vp(a),Vp(e)===a}function Re(e,a,t,n,o,i){switch(t){case"children":if(typeof n=="string")a==="body"||a==="textarea"&&n===""||tl(e,n);else if(typeof n=="number"||typeof n=="bigint")a!=="body"&&tl(e,""+n);else return;break;case"className":mi(e,"class",n);break;case"tabIndex":mi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(e,t,n);break;case"style":Ld(e,n,i);return;case"data":if(a!=="object"){mi(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=fi(n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&Re(e,a,"name",o.name,o,null),Re(e,a,"formEncType",o.formEncType,o,null),Re(e,a,"formMethod",o.formMethod,o,null),Re(e,a,"formTarget",o.formTarget,o,null)):(Re(e,a,"encType",o.encType,o,null),Re(e,a,"method",o.method,o,null),Re(e,a,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=fi(n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=ot);return;case"onScroll":n!=null&&ge("scroll",e);return;case"onScrollEnd":n!=null&&ge("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=fi(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ge("beforetoggle",e),ge("toggle",e),di(e,"popover",n);break;case"xlinkActuate":St(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":St(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":St(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":St(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":St(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":St(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":St(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":St(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":St(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":di(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=V0.get(t)||t,di(e,t,n);else return}je=!0}function nu(e,a,t,n,o,i){switch(t){case"style":Ld(e,n,i);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(d(60));(i!=null?i.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof n=="string")tl(e,n);else if(typeof n=="number"||typeof n=="bigint")tl(e,""+n);else return;break;case"onScroll":n!=null&&ge("scroll",e);return;case"onScrollEnd":n!=null&&ge("scrollend",e);return;case"onClick":n!=null&&(e.onclick=ot);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Od.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),i=t.slice(2,o?t.length-7:void 0),a=e[xa]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(i,a,o),typeof n=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(i,n,o);break e}je=!0,t in e?e[t]=n:n===!0?e.setAttribute(t,""):di(e,t,n)}return}je=!0}function sa(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var n=!1,o=!1,i;for(i in t)if(t.hasOwnProperty(i)){var c=t[i];if(c!=null)switch(i){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Re(e,a,i,c,t,null)}}o&&Re(e,a,"srcSet",t.srcSet,t,null),n&&Re(e,a,"src",t.src,t,null);return;case"input":ge("invalid",e);var f=i=c=o=null,x=null,T=null;for(n in t)if(t.hasOwnProperty(n)){var _=t[n];if(_!=null)switch(n){case"name":o=_;break;case"type":c=_;break;case"checked":x=_;break;case"defaultChecked":T=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(d(137,a));break;default:Re(e,a,n,_,t,null)}}Dd(e,i,f,x,T,c,o,!1);return;case"select":ge("invalid",e),n=c=i=null;for(o in t)if(t.hasOwnProperty(o)&&(f=t[o],f!=null))switch(o){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":n=f;default:Re(e,a,o,f,t,null)}a=i,t=c,e.multiple=!!n,a!=null?al(e,!!n,a,!1):t!=null&&al(e,!!n,t,!0);return;case"textarea":ge("invalid",e),i=o=n=null;for(c in t)if(t.hasOwnProperty(c)&&(f=t[c],f!=null))switch(c){case"value":n=f;break;case"defaultValue":o=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(d(91));break;default:Re(e,a,c,f,t,null)}Ud(e,n,o,i);return;case"option":for(x in t)if(t.hasOwnProperty(x)&&(n=t[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Re(e,a,x,n,t,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(n=0;n<zo.length;n++)ge(zo[n],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(n=t[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Re(e,a,T,n,t,null)}return;default:if(or(a)){for(_ in t)t.hasOwnProperty(_)&&(n=t[_],n!==void 0&&nu(e,a,_,n,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(n=t[f],n!=null&&Re(e,a,f,n,t,null))}var Sx={};function Ax(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,c=null,f=null,x=null,T=null,_=null;for(R in t){var D=t[R];if(t.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":x=D;default:n.hasOwnProperty(R)||Re(e,a,R,null,n,D)}}for(var w in n){var R=n[w];if(D=t[w],n.hasOwnProperty(w)&&(R!=null||D!=null))switch(w){case"type":R!==D&&(je=!0),i=R;break;case"name":R!==D&&(je=!0),o=R;break;case"checked":R!==D&&(je=!0),T=R;break;case"defaultChecked":R!==D&&(je=!0),_=R;break;case"value":R!==D&&(je=!0),c=R;break;case"defaultValue":R!==D&&(je=!0),f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,a));break;default:R!==D&&Re(e,a,w,R,n,D)}}nr(e,c,f,x,T,_,i,o);return;case"select":R=c=f=w=null;for(i in t)if(x=t[i],t.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":R=x;default:n.hasOwnProperty(i)||Re(e,a,i,null,n,x)}for(o in n)if(i=n[o],x=t[o],n.hasOwnProperty(o)&&(i!=null||x!=null))switch(o){case"value":i!==x&&(je=!0),w=i;break;case"defaultValue":i!==x&&(je=!0),f=i;break;case"multiple":i!==x&&(je=!0),c=i;default:i!==x&&Re(e,a,o,i,n,x)}a=f,t=c,n=R,w!=null?al(e,!!t,w,!1):!!n!=!!t&&(a!=null?al(e,!!t,a,!0):al(e,!!t,t?[]:"",!1));return;case"textarea":R=w=null;for(f in t)if(o=t[f],t.hasOwnProperty(f)&&o!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Re(e,a,f,null,n,o)}for(c in n)if(o=n[c],i=t[c],n.hasOwnProperty(c)&&(o!=null||i!=null))switch(c){case"value":o!==i&&(je=!0),w=o;break;case"defaultValue":o!==i&&(je=!0),R=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:o!==i&&Re(e,a,c,o,n,i)}zd(e,w,R);return;case"option":for(var G in t)if(w=t[G],t.hasOwnProperty(G)&&w!=null&&!n.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:Re(e,a,G,null,n,w)}for(x in n)if(w=n[x],R=t[x],n.hasOwnProperty(x)&&w!==R&&(w!=null||R!=null))switch(x){case"selected":w!==R&&(je=!0),e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Re(e,a,x,w,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in t)w=t[Z],t.hasOwnProperty(Z)&&w!=null&&!n.hasOwnProperty(Z)&&Re(e,a,Z,null,n,w);for(T in n)if(w=n[T],R=t[T],n.hasOwnProperty(T)&&w!==R&&(w!=null||R!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,a));break;default:Re(e,a,T,w,n,R)}return;default:if(or(a)){for(var fe in t)w=t[fe],t.hasOwnProperty(fe)&&w!==void 0&&!n.hasOwnProperty(fe)&&nu(e,a,fe,void 0,n,w);for(_ in n)w=n[_],R=t[_],!n.hasOwnProperty(_)||w===R||w===void 0&&R===void 0||nu(e,a,_,w,n,R);return}}for(var O in t)w=t[O],t.hasOwnProperty(O)&&w!=null&&!n.hasOwnProperty(O)&&Re(e,a,O,null,n,w);for(D in n)w=n[D],R=t[D],!n.hasOwnProperty(D)||w===R||w==null&&R==null||Re(e,a,D,w,n,R)}function Yp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var o=t[n],i=o.transferSize,c=o.initiatorType,f=o.duration;if(i&&f&&Yp(c)){for(c=0,f=o.responseEnd,n+=1;n<t.length;n++){var x=t[n],T=x.startTime;if(T>f)break;var _=x.transferSize,D=x.initiatorType;_&&Yp(D)&&(x=x.responseEnd,c+=_*(x<f?1:(f-T)/(x-T)))}if(--n,a+=8*(i+c)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lu=null,ou=null;function qo(e){return e.nodeType===9?e:e.ownerDocument}function Qp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Pp(e,a,t,n){return t=qo(t).createElement(e),t[ta]=n,t[xa]=a,sa(t,e,a),Ke(t),t}function iu(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var su=null;function Ox(){var e=window.event;return e&&e.type==="popstate"?e===su?!1:(su=e,!0):(su=null,!1)}var ru=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,Zp=typeof requestAnimationFrame=="function"?requestAnimationFrame:ru,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(e){return $p.resolve(null).then(e).catch(Rx)}:ru;function Rx(e){setTimeout(function(){throw e})}function dn(e){return e==="head"}function Kp(e,a){var t=a,n=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(o),Hl(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")vu(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,vu(t);for(var i=t.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[Wl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}else t==="body"&&vu(e.ownerDocument.body);t=o}while(t);Hl(a)}function Fp(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function Jp(e,a,t){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(a=e.getClientRects(),a.length===1)var n=1;else for(var o=n=0;o<a.length;o++){var i=a[o];0<i.width&&0<i.height&&n++}n===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function Wp(e,a){e=e.style,a=a.style;var t=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(t=a.display,e.display=t==null||typeof t=="boolean"?"":t,t=a.margin,t!=null?e.margin=t:(t=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function _x(e,a,t){return t=t.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function cu(e){var a=e.getBoundingClientRect(),t=getComputedStyle(e);return _x(a,t,e)}function Mx(e){return e.documentElement.clientHeight}function Dx(e){this.addEventListener("load",e),this.addEventListener("error",e)}function zx(e,a,t,n,o,i,c,f,x){var T=a.nodeType===9?a:a.ownerDocument;try{var _=T.startViewTransition({update:function(){var w=T.defaultView,R=w.navigation&&w.navigation.transition,G=T.fonts.status;n();var Z=[];if(G==="loaded"&&(Mx(T),T.fonts.status==="loading"&&Z.push(T.fonts.ready)),G=Z.length,e!==null)for(var fe=e.suspenseyImages,O=0,j=0;j<fe.length;j++){var C=fe[j];if(!C.complete){var M=C.getBoundingClientRect();if(0<M.bottom&&0<M.right&&M.top<w.innerHeight&&M.left<w.innerWidth){if(O+=yh(C),O>Es){Z.length=G;break}C=new Promise(Dx.bind(C)),Z.push(C)}}}if(0<Z.length)return w=Promise.race([Promise.all(Z),new Promise(function($){return setTimeout($,500)})]).then(o,o),(R?Promise.allSettled([R.finished,w]):w).then(i,i);if(o(),R)return R.finished.then(i,i);i()},types:t});T.__reactViewTransition=_;var D=[];return _.ready.then(function(){for(var w=T.documentElement.getAnimations({subtree:!0}),R=0;R<w.length;R++){var G=w[R],Z=G.effect,fe=Z.pseudoElement;if(fe!=null&&fe.startsWith("::view-transition")){D.push(G),G=Z.getKeyframes();for(var O=fe=void 0,j=!0,C=0;C<G.length;C++){var M=G[C],$=M.width;if(fe===void 0)fe=$;else if(fe!==$){j=!1;break}if($=M.height,O===void 0)O=$;else if(O!==$){j=!1;break}delete M.width,delete M.height,M.transform==="none"&&delete M.transform}j&&fe!==void 0&&O!==void 0&&(Z.setKeyframes(G),j=getComputedStyle(Z.target,Z.pseudoElement),j.width!==fe||j.height!==O)&&(j=G[0],j.width=fe,j.height=O,j=G[G.length-1],j.width=fe,j.height=O,Z.setKeyframes(G))}}c()},function(w){T.__reactViewTransition===_&&(T.__reactViewTransition=null);try{if(typeof w=="object"&&w!==null)switch(w.name){case"InvalidStateError":(w.message==="View transition was skipped because document visibility state is hidden."||w.message==="Skipping view transition because document visibility state has become hidden."||w.message==="Skipping view transition because viewport size changed."||w.message==="Transition was aborted because of invalid state")&&(w=null)}w!==null&&x(w)}finally{n(),o(),c()}}),_.finished.finally(function(){for(var w=0;w<D.length;w++)D[w].cancel();T.__reactViewTransition===_&&(T.__reactViewTransition=null),f()}),_}catch{return n(),o(),c(),null}}function Yn(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}Yn.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:X({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},Yn.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,t=e.getAnimations({subtree:!0}),n=[],o=0;o<t.length;o++){var i=t[o].effect;i!==null&&i.target===e&&i.pseudoElement===a&&n.push(t[o])}return n},Yn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function eh(e){return{name:e,group:new Yn("group",e),imagePair:new Yn("image-pair",e),old:new Yn("old",e),new:new Yn("new",e)}}function La(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}La.prototype.addEventListener=function(e,a,t){var n=null,o=null;if(!(t!=null&&typeof t!="boolean"&&(n=t.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(th(i,e,a,t)===-1){var c=this,f=a;t!=null&&typeof t!="boolean"&&t.once===!0&&(f=function(x){c.removeEventListener(e,a,t),typeof a=="function"?a.call(this,x):a.handleEvent(x)}),n!==null&&(o=c.removeEventListener.bind(c,e,a,t),n.addEventListener("abort",o,{once:!0}),o=n.removeEventListener.bind(n,"abort",o)),n=Dl(t),i.push({type:e,listener:a,optionsOrUseCapture:t,attachedListener:f,cleanup:o}),h(this._fragmentFiber.child,!1,Ux,e,f,n)}this._eventListeners=i}};function Ux(e,a,t,n){return B(e).addEventListener(a,t,n),!1}La.prototype.removeEventListener=function(e,a,t){var n=this._eventListeners;if(n!==null&&(a=th(n,e,a,t),a!==-1)){var o=n[a];t=o.attachedListener;var i=o.cleanup;o=Dl(o.optionsOrUseCapture),h(this._fragmentFiber.child,!1,qx,e,t,o),n.splice(a,1),i!==null&&i()}};function qx(e,a,t,n){return B(e).removeEventListener(a,t,n),!1}function Dl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function ah(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function th(e,a,t,n){if(e.length===0)return-1;n=ah(n);for(var o=0;o<e.length;o++){var i=e[o];if(i.type===a&&i.listener===t&&ah(i.optionsOrUseCapture)===n)return o}return-1}La.prototype.dispatchEvent=function(e){var a=N(this._fragmentFiber);if(a===null)return!0;a=B(a);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var n=a.nodeType===9?a.createComment(""):document.createTextNode("");if(t)for(var o=0;o<t.length;o++){var i=t[o];n.addEventListener(i.type,i.attachedListener,Dl(i.optionsOrUseCapture))}if(a.appendChild(n),e=n.dispatchEvent(e),t)for(o=0;o<t.length;o++)i=t[o],n.removeEventListener(i.type,i.attachedListener,Dl(i.optionsOrUseCapture));return a.removeChild(n),e}return a.dispatchEvent(e)},La.prototype.focus=function(e){h(this._fragmentFiber.child,!0,nh,e,void 0,void 0)};function nh(e,a){return e.tag===6?!1:(e=B(e),$x(e,a))}La.prototype.focusLast=function(e){var a=[];h(this._fragmentFiber.child,!0,uu,a,void 0,void 0);for(var t=a.length-1;0<=t&&!nh(a[t],e);t--);};function uu(e,a){return a.push(e),!1}La.prototype.blur=function(){var e=N(this._fragmentFiber);e!==null&&(e=B(e),e=qo(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Lx,e,void 0,void 0))};function Lx(e,a){return e.tag===6?!1:(e=B(e),e===a||e.contains(a)?(a.blur(),!0):!1)}La.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Bx,e,void 0,void 0)};function Bx(e,a){return e.tag===6||(e=B(e),a.observe(e)),!1}La.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),h(this._fragmentFiber.child,!1,Hx,e,void 0,void 0);for(var t=a=0;t<at.length;t++){var n=at[t];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):at[a++]=n}at.length=a}};function Hx(e,a){return e.tag===6||(e=B(e),a.unobserve(e)),!1}var at=[],du=!1;function kx(e,a,t){at.push({fragmentInstance:e,observer:a,instance:t}),du||(du=!0,Zx(function(){du=!1;var n=at;at=[];for(var o=0;o<n.length;o++){var i=n[o];i.observer.unobserve(i.instance)}}))}La.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Ix,e,void 0,void 0),e};function Ix(e,a){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),a.push.apply(a,t.getClientRects())}else e=B(e),a.push.apply(a,e.getClientRects());return!1}La.prototype.getRootNode=function(e){var a=N(this._fragmentFiber);return a===null?this:B(a).getRootNode(e)},La.prototype.compareDocumentPosition=function(e){var a=N(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];h(this._fragmentFiber.child,!1,uu,t,void 0,void 0);var n=B(a);if(t.length===0){if(t=n,U(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(t=a)}a=this._fragmentFiber;var o=n=t.compareDocumentPosition(e);return t===e?o=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=I(a)[1],t===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=B(t).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=B(t[0]),o=B(t[t.length-1]);var i=U(this._fragmentFiber)?a.parentElement:n;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var c=a.compareDocumentPosition(e),f=o.compareDocumentPosition(e),x=c&Node.DOCUMENT_POSITION_CONTAINED_BY||f&Node.DOCUMENT_POSITION_CONTAINED_BY;return f=n&&i&&c&Node.DOCUMENT_POSITION_FOLLOWING&&f&Node.DOCUMENT_POSITION_PRECEDING,a=n&&a===e||i&&o===e||x||f?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&a===e||!i&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Vx(a,this._fragmentFiber,t[0],t[t.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Vx(e,a,t,n,o){var i=jn(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===a||i.alternate===a)){t=!0;break e}i=i.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=o.ownerDocument,o===i||o===i.documentElement||o===i.body;e:{for(i=a,a=N(a);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==a&&i.alternate!==a)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!i)&&!(a=i===t)&&(a=K(t,i,ue),a===null?a=!1:(h(a,!0,V,i,t),i=q,q=null,a=i!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!i)&&!(a=i===n)&&(a=K(n,i,ue),a===null?a=!1:(h(a,!0,ie,i,n),i=q,Q=q=null,a=i!==null)),a):!1}function lh(e,a){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}La.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(d(566));var a=[];h(this._fragmentFiber.child,!1,uu,a,void 0,void 0);var t=e!==!1;if(a.length===0){var n=I(this._fragmentFiber);if(n=t?n[1]||n[0]||N(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=B(n),lh(e,t);return}if(n=B(n),n.nodeType!==9){if(n.nodeType===11){t="host"in n?n.host:null,t!==null&&t.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=t?a.length-1:0;n!==(t?-1:a.length);){var o=a[n];o.tag===6?(o=B(o),lh(o,t)):B(o).scrollIntoView(e),n+=t?-1:1}};function Gx(e,a){return e=B(e),oh(e,a),!1}function oh(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function ih(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];e.addEventListener(o.type,o.attachedListener,Dl(o.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(i){for(var c=0,f=0;f<at.length;f++){var x=at[f];(x.fragmentInstance!==a||x.observer!==i||x.instance!==e)&&(at[c++]=x)}at.length=c,i.observe(e)}),oh(e,a))}function Yx(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];e.removeEventListener(o.type,o.attachedListener,Dl(o.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(i){typeof i.rootMargin=="string"?kx(a,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function mu(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":mu(t),ui(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Qx(e,a,t,n){for(;e.nodeType===1;){var o=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Wl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Qa(e.nextSibling),e===null)break}return null}function Xx(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qa(e.nextSibling),e===null))return null;return e}function sh(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qa(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$?"||e.data==="$~"}function pu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Px(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var hu=null;function rh(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Qa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function ch(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function $x(e,a){function t(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return n}function Zx(e){Zp(function(){Zp(function(a){return e(a)})})}function uh(e,a,t){switch(a=qo(t),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function dh(e,a,t){for(var n in t){var o=t[n];t.hasOwnProperty(n)&&o!=null&&Re(e,a,n,null,Sx,o)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ot&&(e.onclick=null),ui(e)}function vu(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ui(e)}var Xa=new Map,mh=new Set;function Lo(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var Lt=re.d;re.d={f:Kx,r:Fx,D:Jx,C:Wx,L:e1,m:a1,X:n1,S:t1,M:l1};function Kx(){var e=Lt.f(),a=fs();return e||a}function Fx(e){var a=Jn(e);a!==null&&a.tag===5&&a.type==="form"?pf(a):Lt.r(e)}var zl=typeof document>"u"?null:document;function fh(e,a,t){var n=zl;if(n&&typeof a=="string"&&a){var o=Ba(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),mh.has(o)||(mh.add(o),e={rel:e,crossOrigin:t,href:a},n.querySelector(o)===null&&(a=n.createElement("link"),sa(a,"link",e),Ke(a),n.head.appendChild(a)))}}function Jx(e){Lt.D(e),fh("dns-prefetch",e,null)}function Wx(e,a){Lt.C(e,a),fh("preconnect",e,a)}function e1(e,a,t){Lt.L(e,a,t);var n=zl;if(n&&e&&a){var o='link[rel="preload"][as="'+Ba(a)+'"]';a==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Ba(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Ba(t.imageSizes)+'"]')):o+='[href="'+Ba(e)+'"]';var i=o;switch(a){case"style":i=Ul(e);break;case"script":i=ql(e)}if(!(Xa.has(i)||(e=X({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Xa.set(i,e),n.querySelector(o)!==null||a==="style"&&n.querySelector(Bo(i))||a==="script"&&n.querySelector(Ho(i))))){var c=n.createElement("link");sa(c,"link",e),a==="style"&&(c[ci]=!0,c.onload=c.onerror=function(){Ad(c)}),Ke(c),n.head.appendChild(c)}}}function a1(e,a){Lt.m(e,a);var t=zl;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+Ba(n)+'"][href="'+Ba(e)+'"]',i=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ql(e)}if(!Xa.has(i)&&(e=X({rel:"modulepreload",href:e},a),Xa.set(i,e),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ho(i)))return}n=t.createElement("link"),sa(n,"link",e),Ke(n),t.head.appendChild(n)}}}function t1(e,a,t){Lt.S(e,a,t);var n=zl;if(n&&e){var o=Wn(n).hoistableStyles,i=Ul(e);a=a||"default";var c=o.get(i);if(!c){var f={loading:0,preload:null};if(c=n.querySelector(Bo(i)))f.loading=5;else{e=X({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Xa.get(i))&&gu(e,t);var x=c=n.createElement("link");Ke(x),sa(x,"link",e),x._p=new Promise(function(T,_){x.onload=T,x.onerror=_}),x.addEventListener("load",function(){f.loading|=1}),x.addEventListener("error",function(){f.loading|=2}),f.loading|=4,ys(c,a,n)}c={type:"stylesheet",instance:c,count:1,state:f},o.set(i,c)}}}function n1(e,a){Lt.X(e,a);var t=zl;if(t&&e){var n=Wn(t).hoistableScripts,o=ql(e),i=n.get(o);i||(i=t.querySelector(Ho(o)),i||(e=X({src:e,async:!0},a),(a=Xa.get(o))&&xu(e,a),i=t.createElement("script"),Ke(i),sa(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(o,i))}}function l1(e,a){Lt.M(e,a);var t=zl;if(t&&e){var n=Wn(t).hoistableScripts,o=ql(e),i=n.get(o);i||(i=t.querySelector(Ho(o)),i||(e=X({src:e,async:!0,type:"module"},a),(a=Xa.get(o))&&xu(e,a),i=t.createElement("script"),Ke(i),sa(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(o,i))}}function ph(e,a,t,n){var o=(o=It.current)?Lo(o):null;if(!o)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Ul(t.href),a=Wn(o).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ul(t.href);var i=Wn(o).hoistableStyles,c=i.get(e);if(c||(o=o.ownerDocument||o,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=o.querySelector(Bo(e)))?i._p||(c.instance=i,c.state.loading=5):(i=Xa.get(e),i||(i={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Xa.set(e,i)),o1(o,e,i,c.state))),a&&n===null)throw Error(d(528,""));return c}if(a&&n!==null)throw Error(d(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(t=ql(t),a=Wn(o).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ul(e){return'href="'+Ba(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function hh(e){return X({},e,{"data-precedence":e.precedence,precedence:null})}function o1(e,a,t,n){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[ci]!==!0){n.loading=1;return}}else a=e.createElement("link"),a[ci]=!0,a.onload=a.onerror=Ad.bind(null,a),sa(a,"link",t),Ke(a),e.head.appendChild(a);n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2})}function ql(e){return'[src="'+Ba(e)+'"]'}function Ho(e){return"script[async]"+e}function vh(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ba(t.href)+'"]');if(n)return a.instance=n,Ke(n),n;var o=X({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ke(n),sa(n,"style",o),ys(n,t.precedence,e),a.instance=n;case"stylesheet":o=Ul(t.href);var i=e.querySelector(Bo(o));if(i)return a.state.loading|=4,a.instance=i,Ke(i),i;n=hh(t),(o=Xa.get(o))&&gu(n,o),i=(e.ownerDocument||e).createElement("link"),Ke(i);var c=i;return c._p=new Promise(function(f,x){c.onload=f,c.onerror=x}),sa(i,"link",n),a.state.loading|=4,ys(i,t.precedence,e),a.instance=i;case"script":return i=ql(t.src),(o=e.querySelector(Ho(i)))?(a.instance=o,Ke(o),o):(n=t,(o=Xa.get(i))&&(n=X({},t),xu(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ke(o),sa(o,"link",n),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,ys(n,t.precedence,e));return a.instance}function ys(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,i=o,c=0;c<n.length;c++){var f=n[c];if(f.dataset.precedence===a)i=f;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function gu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function xu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ns=null;function gh(e,a,t){if(Ns===null){var n=new Map,o=Ns=new Map;o.set(t,n)}else o=Ns,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),o=0;o<t.length;o++){var i=t[o];if(!(i[Wl]||i[ta]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(a)||"";c=e+c;var f=n.get(c);f?f.push(i):n.set(c,[i])}}return n}function bu(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function i1(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function xh(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yh(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Nh(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=yh(a),e.suspenseyImages.push(a)),e=c1.bind(e),a.decode().then(e,e))}function s1(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Ul(n.href),i=a.querySelector(Bo(o));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ko.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,Ke(i);return}i=a.ownerDocument||a,n=hh(n),(o=Xa.get(o))&&gu(n,o),i=i.createElement("link"),Ke(i);var c=i;c._p=new Promise(function(f,x){c.onload=f,c.onerror=x}),sa(i,"link",n),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ko.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Es=0;function r1(e,a){return e.stylesheets&&e.count===0&&Ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&Es===0&&(Es=62500*wx());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Es?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function Eh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ss(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function ko(){this.count--,Eh(this)}function c1(){this.imgCount--,Eh(this)}var js=null;function Ss(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,js=new Map,a.forEach(u1,e),js=null,ko.call(e))}function u1(e,a){if(!(a.state.loading&4)){var t=js.get(e);if(t)var n=t.get(null);else{t=new Map,js.set(e,t);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var c=o[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),n=c)}n&&t.set(null,n)}o=a.instance,c=o.getAttribute("data-precedence"),i=t.get(c)||n,i===n&&t.set(null,o),t.set(c,o),this.count++,n=ko.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),i?i.parentNode.insertBefore(o,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Ll={$$typeof:de,Provider:null,Consumer:null,_currentValue:Et,_currentValue2:Et,_threadCount:0};function d1(e,a,t,n,o,i,c,f,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ws(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.hiddenUpdates=Ws(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.transitionTypes=null,this.incompleteTransitions=new Map}function jh(e,a,t,n,o,i,c,f,x,T,_,D){return e=new d1(e,a,t,c,x,T,_,D,f),a=1,i===!0&&(a|=24),i=ba(3,null,null,a),e.current=i,i.stateNode=e,a=zr(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:t,cache:a},Br(i),e}function Sh(e){return e?(e=cl,e):cl}function Ah(e,a,t,n,o,i){o=Sh(o),n.context===null?n.context=o:n.pendingContext=o,n=Jt(a),n.payload={element:t},i=i===void 0?null:i,i!==null&&(n.callback=i),t=Wt(e,n,a),t!==null&&(ja(t,e,a),go(t,e,a))}function wh(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function yu(e,a){wh(e,a),(e=e.alternate)&&wh(e,a)}function Oh(e){if(e.tag===13||e.tag===31){var a=On(e,67108864);a!==null&&ja(a,e,67108864),yu(e,67108864)}}function Th(e){if(e.tag===13||e.tag===31){var a=qa();a=er(a);var t=On(e,a);t!==null&&ja(t,e,a),yu(e,a)}}var Bl=!0;function m1(e,a,t,n){var o=W.T;W.T=null;var i=re.p;try{re.p=2,Nu(e,a,t,n)}finally{re.p=i,W.T=o}}function f1(e,a,t,n){var o=W.T;W.T=null;var i=re.p;try{re.p=8,Nu(e,a,t,n)}finally{re.p=i,W.T=o}}function Nu(e,a,t,n){if(Bl){var o=Eu(n);if(o===null)tu(e,a,n,As,t),Rh(e,n);else if(h1(o,e,a,t,n))n.stopPropagation();else if(Rh(e,n),a&4&&-1<p1.indexOf(e)){for(;o!==null;){var i=Jn(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=En(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var x=1<<31-Ca(c);f.entanglements[1]|=x,c&=~x}ht(i),(Ae&6)===0&&(us=Oa()+500,Do(0))}}break;case 31:case 13:f=On(i,2),f!==null&&ja(f,i,2),fs(),yu(i,2)}if(i=Eu(n),i===null&&tu(e,a,n,As,t),i===o)break;o=i}o!==null&&n.stopPropagation()}else tu(e,a,n,null,t)}}function Eu(e){return e=sr(e),ju(e)}var As=null;function ju(e){if(As=null,e=jn(e),e!==null){var a=p(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=g(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return As=e,null}function Ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(w0()){case fd:return 2;case pd:return 8;case li:case O0:return 32;case hd:return 268435456;default:return 32}default:return 32}}var Su=!1,mn=null,fn=null,pn=null,Io=new Map,Vo=new Map,hn=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rh(e,a){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Io.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(a.pointerId)}}function Go(e,a,t,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},a!==null&&(a=Jn(a),a!==null&&Oh(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function h1(e,a,t,n,o){switch(a){case"focusin":return mn=Go(mn,e,a,t,n,o),!0;case"dragenter":return fn=Go(fn,e,a,t,n,o),!0;case"mouseover":return pn=Go(pn,e,a,t,n,o),!0;case"pointerover":var i=o.pointerId;return Io.set(i,Go(Io.get(i)||null,e,a,t,n,o)),!0;case"gotpointercapture":return i=o.pointerId,Vo.set(i,Go(Vo.get(i)||null,e,a,t,n,o)),!0}return!1}function _h(e){var a=jn(e.target);if(a!==null){var t=p(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,Ed(e.priority,function(){Th(t)});return}}else if(a===31){if(a=g(t),a!==null){e.blockedOn=a,Ed(e.priority,function(){Th(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Eu(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);ir=n,t.target.dispatchEvent(n),ir=null}else return a=Jn(t),a!==null&&Oh(a),e.blockedOn=t,!1;a.shift()}return!0}function Mh(e,a,t){ws(e)&&t.delete(a)}function v1(){Su=!1,mn!==null&&ws(mn)&&(mn=null),fn!==null&&ws(fn)&&(fn=null),pn!==null&&ws(pn)&&(pn=null),Io.forEach(Mh),Vo.forEach(Mh)}function Os(e,a){e.blockedOn===a&&(e.blockedOn=null,Su||(Su=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,v1)))}var Ts=null;function Dh(e){Ts!==e&&(Ts=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ts===e&&(Ts=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],o=e[a+2];if(typeof n!="function"){if(ju(n||t)===null)continue;break}var i=Jn(t);i!==null&&(e.splice(a,3),a-=3,oc(i,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function Hl(e){function a(x){return Os(x,e)}mn!==null&&Os(mn,e),fn!==null&&Os(fn,e),pn!==null&&Os(pn,e),Io.forEach(a),Vo.forEach(a);for(var t=0;t<hn.length;t++){var n=hn[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<hn.length&&(t=hn[0],t.blockedOn===null);)_h(t),t.blockedOn===null&&hn.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],i=t[n+1],c=o[xa]||null;if(typeof i=="function")c||Dh(t);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(o=i,c=i[xa]||null)f=c.formAction;else if(ju(o)!==null)continue}else f=c.action;typeof f=="function"?t[n+1]=f:(t.splice(n,3),n-=3),Dh(t)}}}function zh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return o=c})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Au(e){this._internalRoot=e}Cs.prototype.render=Au.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var t=a.current,n=qa();Ah(t,n,e,a,null,null)},Cs.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Ah(e.current,2,null,e,null,null),fs(),a[Fn]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var a=Nd();e={blockedOn:null,target:e,priority:a};for(var t=0;t<hn.length&&a!==0&&a<hn[t].priority;t++);hn.splice(t,0,e),t===0&&_h(e)}};var Uh=r.version;if(Uh!=="19.3.0")throw Error(d(527,Uh,"19.3.0"));re.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=S(a),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var g1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Kl=Rs.inject(g1),Ta=Rs}catch{}}return Qo.createRoot=function(e,a){if(!m(e))throw Error(d(299));var t=!1,n="",o=Sf,i=Af,c=wf;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError)),a=jh(e,1,!1,null,null,t,n,null,o,i,c,zh),e[Fn]=a.current,au(e),new Au(a)},Qo.hydrateRoot=function(e,a,t){if(!m(e))throw Error(d(299));var n=!1,o="",i=Sf,c=Af,f=wf,x=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.formState!==void 0&&(x=t.formState)),a=jh(e,1,!0,a,t??null,n,o,x,i,c,f,zh),a.context=Sh(null),t=a.current,n=qa(),n=er(n),o=Jt(n),o.callback=null,Wt(t,o,n),t=n,a.current.lanes=t,Jl(a,t),ht(a),e[Fn]=a.current,au(e),new Cs(a)},Qo.version="19.3.0",Qo}var Qh;function O1(){if(Qh)return Tu.exports;Qh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Tu.exports=w1(),Tu.exports}var T1=O1();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Nv=/^[\\/]{2}/;function C1(s,r){return r+s.replace(/\\/g,"/")}var Xh="popstate";function Ph(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function R1(s={}){function r(d,m){var S;let p=(S=m.state)==null?void 0:S.masked,{pathname:v,search:g,hash:y}=p||d.location;return ku("",{pathname:v,search:g,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function u(d,m){return typeof m=="string"?m:Il(m)}return M1(r,u,null,s)}function ke(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function bt(s,r){if(!s){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function _1(){return Math.random().toString(36).substring(2,10)}function $h(s,r){return{usr:s.state,key:s.key,idx:r,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function ku(s,r,u=null,d,m){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof r=="string"?Ql(r):r,state:u,key:r&&r.key||d||_1(),mask:m}}function Il({pathname:s="/",search:r="",hash:u=""}){return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(s+=u.charAt(0)==="#"?u:"#"+u),s}function Ql(s){let r={};if(s){let u=s.indexOf("#");u>=0&&(r.hash=s.substring(u),s=s.substring(0,u));let d=s.indexOf("?");d>=0&&(r.search=s.substring(d),s=s.substring(0,d)),s&&(r.pathname=s)}return r}function M1(s,r,u,d={}){let{window:m=document.defaultView,v5Compat:p=!1}=d,v=m.history,g="POP",y=null,S=E();S==null&&(S=0,v.replaceState({...v.state,idx:S},""));function E(){return(v.state||{idx:null}).idx}function h(){g="POP";let B=E(),q=B==null?null:B-S;S=B,y&&y({action:g,location:L.location,delta:q})}function N(B,q){g="PUSH";let Q=Ph(B)?B:ku(L.location,B,q);S=E()+1;let V=$h(Q,S),ie=L.createHref(Q.mask||Q);try{v.pushState(V,"",ie)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;m.location.assign(ie)}p&&y&&y({action:g,location:L.location,delta:1})}function U(B,q){g="REPLACE";let Q=Ph(B)?B:ku(L.location,B,q);S=E();let V=$h(Q,S),ie=L.createHref(Q.mask||Q);v.replaceState(V,"",ie),p&&y&&y({action:g,location:L.location,delta:0})}function I(B){return D1(m,B)}let L={get action(){return g},get location(){return s(m,v)},listen(B){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(Xh,h),y=B,()=>{m.removeEventListener(Xh,h),y=null}},createHref(B){return r(m,B)},createURL:I,encodeLocation(B){let q=I(B);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:N,replace:U,go(B){return v.go(B)}};return L}function D1(s,r,u=!1){let d="http://localhost";s&&(d=s.location.origin!=="null"?s.location.origin:s.location.href),ke(d,"No window.location.(origin|href) available to create URL");let m=typeof r=="string"?r:Il(r);return m=m.replace(/ $/,"%20"),!u&&Nv.test(m)&&(m=d+m),new URL(m,d)}function Ev(s,r,u="/"){return z1(s,r,u,!1)}function z1(s,r,u,d,m){let p=typeof r=="string"?Ql(r):r,v=Ht(p.pathname||"/",u);if(v==null)return null;let g=U1(s),y=null,S=X1(v);for(let E=0;y==null&&E<g.length;++E)y=Q1(g[E],S,d);return y}function U1(s){let r=jv(s);return q1(r),r}function jv(s,r=[],u=[],d="",m=!1){let p=(v,g,y=m,S)=>{let E={relativePath:S===void 0?v.path||"":S,caseSensitive:v.caseSensitive===!0,childrenIndex:g,route:v};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(d)&&y)return;ke(E.relativePath.startsWith(d),`Absolute route path "${E.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(d.length)}let h=tt([d,E.relativePath]),N=u.concat(E);v.children&&v.children.length>0&&(ke(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),jv(v.children,r,N,h,y)),!(v.path==null&&!v.index)&&r.push({path:h,score:G1(h,v.index),routesMeta:N.map((U,I)=>{let[L,B]=wv(U.relativePath,U.caseSensitive,I===N.length-1);return{...U,matcher:L,compiledParams:B}})})};return s.forEach((v,g)=>{var y;if(v.path===""||!((y=v.path)!=null&&y.includes("?")))p(v,g);else for(let S of Sv(v.path))p(v,g,!0,S)}),r}function Sv(s){let r=s.split("/");if(r.length===0)return[];let[u,...d]=r,m=u.endsWith("?"),p=u.replace(/\?$/,"");if(d.length===0)return m?[p,""]:[p];let v=Sv(d.join("/")),g=[];return g.push(...v.map(y=>y===""?p:[p,y].join("/"))),m&&g.push(...v),g.map(y=>s.startsWith("/")&&y===""?"/":y)}function q1(s){s.sort((r,u)=>r.score!==u.score?u.score-r.score:Y1(r.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var L1=/^:[\w-]+$/,B1=3,H1=2,k1=1,I1=10,V1=-2,Zh=s=>s==="*";function G1(s,r){let u=s.split("/"),d=u.length;return u.some(Zh)&&(d+=V1),r&&(d+=H1),u.filter(m=>!Zh(m)).reduce((m,p)=>m+(L1.test(p)?B1:p===""?k1:I1),d)}function Y1(s,r){return s.length===r.length&&s.slice(0,-1).every((d,m)=>d===r[m])?s[s.length-1]-r[r.length-1]:0}function Q1(s,r,u=!1){let{routesMeta:d}=s,m={},p="/",v=[];for(let g=0;g<d.length;++g){let y=d[g],S=g===d.length-1,E=p==="/"?r:r.slice(p.length)||"/",h={path:y.relativePath,caseSensitive:y.caseSensitive,end:S},N=y.matcher&&y.compiledParams?Av(h,E,y.matcher,y.compiledParams):zs(h,E),U=y.route;if(!N&&S&&u&&!d[d.length-1].route.index&&(N=zs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!N)return null;Object.assign(m,N.params),v.push({params:m,pathname:tt([p,N.pathname]),pathnameBase:Z1(tt([p,N.pathnameBase])),route:U}),N.pathnameBase!=="/"&&(p=tt([p,N.pathnameBase]))}return v}function zs(s,r){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[u,d]=wv(s.path,s.caseSensitive,s.end);return Av(s,r,u,d)}function Av(s,r,u,d){let m=r.match(u);if(!m)return null;let p=m[0],v=Vl(p,1),g=m.slice(1);return{params:d.reduce((S,{paramName:E,isOptional:h},N)=>{if(E==="*"){let I=g[N]||"";v=Vl(p.slice(0,p.length-I.length),1)}const U=g[N];return h&&!U?S[E]=void 0:S[E]=(U||"").replace(/%2F/g,"/"),S},{}),pathname:p,pathnameBase:v,pattern:s}}function wv(s,r=!1,u=!0){bt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,g,y,S,E)=>{if(d.push({paramName:g,isOptional:y!=null}),y){let h=E.charAt(S+v.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,r?void 0:"i"),d]}function X1(s){try{return s.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return bt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),s}}function Ht(s,r){if(r==="/")return s;if(!s.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,d=s.charAt(u);return d&&d!=="/"?null:s.slice(u)||"/"}function P1(s,r="/"){let{pathname:u,search:d="",hash:m=""}=typeof s=="string"?Ql(s):s,p;return u?(u=Tv(u),u.startsWith("/")||u.startsWith("\\")?p=Kh(u.substring(1),"/"):p=Kh(u,r)):p=r,{pathname:p,search:K1(d),hash:F1(m)}}function Kh(s,r){let u=Vl(r).split("/");return s.split("/").forEach(m=>{m===".."?u.length>1&&u.pop():m!=="."&&u.push(m)}),u.length>1?u.join("/"):"/"}function Mu(s,r,u,d){return`Cannot include a '${s}' character in a manually specified \`to.${r}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $1(s){return s.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function Ov(s){let r=$1(s);return r.map((u,d)=>d===r.length-1?u.pathname:u.pathnameBase)}function $u(s,r,u,d=!1){let m;typeof s=="string"?m=Ql(s):(m={...s},ke(!m.pathname||!m.pathname.includes("?"),Mu("?","pathname","search",m)),ke(!m.pathname||!m.pathname.includes("#"),Mu("#","pathname","hash",m)),ke(!m.search||!m.search.includes("#"),Mu("#","search","hash",m)));let p=s===""||m.pathname==="",v=p?"/":m.pathname,g;if(v==null)g=u;else{let h=r.length-1;if(!d&&v.startsWith("..")){let N=v.split("/");for(;N[0]==="..";)N.shift(),h-=1;m.pathname=N.join("/")}g=h>=0?r[h]:"/"}let y=P1(m,g),S=v&&v!=="/"&&v.endsWith("/"),E=(p||v===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(S||E)&&(y.pathname+="/"),y}var Tv=s=>s.replace(/[\\/]{2,}/g,"/"),tt=s=>Tv(s.join("/"));function Vl(s,r=0){let u=s.length;for(;u>r&&s.charCodeAt(u-1)===47;)u--;return u===s.length?s:s.slice(0,u)}var Z1=s=>Vl(s).replace(/^\/*/,"/"),K1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,F1=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,J1=class{constructor(s,r,u,d=!1){this.status=s,this.statusText=r||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function W1(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function eb(s){let r=s.map(u=>u.route.path).filter(Boolean);return tt(r)||"/"}var Cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Rv(s,r){let u=s;if(typeof u!="string"||!Pu.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,m=!1;if(Cv)try{let p=new URL(window.location.href),v=Nv.test(u)?new URL(C1(u,p.protocol)):new URL(u),g=Ht(v.pathname,r);v.origin===p.origin&&g!=null?u=g+v.search+v.hash:m=!0}catch{bt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:m,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fh=new URL("http://localhost");function _v(s){if(s.createURL)return s.createURL("/");try{return new URL(s.createHref("/"),Fh)}catch{return Fh}}function Du(s,r){return s.origin===r.origin&&(s.origin!=="null"||s.protocol===r.protocol&&s.host===r.host)}function ab(s,r){if(s.startsWith("//"))return!0;let u=r.protocol.toLowerCase();return s.toLowerCase().startsWith(u)?r.host===""||s.slice(u.length).startsWith("//"):!1}function Mv(s,r,u,d){let m=null;try{m=s==null?null:new URL(s,u)}catch{}let p=new URL(r,u),v=m!=null&&!Du(m,u),g=!Du(p,u);if(d==="reject"){if(v||g)throw new Error("External navigation is not allowed")}else if(g&&(m==null||!ab(s,m)||!Du(m,p)))throw new Error("External navigation is not allowed")}var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var tb=["GET",...Dv];new Set(tb);var nb=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function lb(s){try{return nb.includes(new URL(s).protocol)}catch{return!1}}var Xl=b.createContext(null);Xl.displayName="DataRouter";var Ls=b.createContext(null);Ls.displayName="DataRouterState";var zv=b.createContext(!1);function ob(){return b.useContext(zv)}var Uv=b.createContext({isTransitioning:!1});Uv.displayName="ViewTransition";var ib=b.createContext(new Map);ib.displayName="Fetchers";var sb=b.createContext(null);sb.displayName="Await";var Pa=b.createContext(null);Pa.displayName="Navigation";var Zo=b.createContext(null);Zo.displayName="Location";var yt=b.createContext({outlet:null,matches:[],isDataRoute:!1});yt.displayName="Route";var Zu=b.createContext(null);Zu.displayName="RouteError";var qv="REACT_ROUTER_ERROR",rb="REDIRECT",cb="ROUTE_ERROR_RESPONSE";function ub(s){if(s.startsWith(`${qv}:${rb}:{`))try{let r=JSON.parse(s.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function db(s){if(s.startsWith(`${qv}:${cb}:{`))try{let r=JSON.parse(s.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new J1(r.status,r.statusText,r.data)}catch{}}function mb(s,{relative:r}={}){ke(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=b.useContext(Pa),{hash:m,pathname:p,search:v}=Fo(s,{relative:r}),g=p;return u!=="/"&&(g=p==="/"?u:tt([u,p])),d.createHref({pathname:g,search:v,hash:m})}function Ko(){return b.useContext(Zo)!=null}function kt(){return ke(Ko(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Zo).location}var Lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bv(s){b.useContext(Pa).static||b.useLayoutEffect(s)}function fb(){let{isDataRoute:s}=b.useContext(yt);return s?Ob():pb()}function pb(){ke(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=b.useContext(Xl),{basename:r,navigator:u}=b.useContext(Pa),{matches:d}=b.useContext(yt),{pathname:m}=kt(),p=JSON.stringify(Ov(d)),v=b.useRef(!1);return Bv(()=>{v.current=!0}),b.useCallback((y,S={})=>{if(bt(v.current,Lv),!v.current)return;if(typeof y=="number"){u.go(y);return}let E=$u(y,JSON.parse(p),m,S.relative==="path");s==null&&r!=="/"&&(E.pathname=E.pathname==="/"?r:tt([r,E.pathname])),Mv(typeof y=="string"?y:Il(y),u.createHref(E),_v(u),"reject"),(S.replace?u.replace:u.push)(E,S.state,S)},[r,u,p,m,s])}b.createContext(null);function hb(){let{matches:s}=b.useContext(yt),r=s[s.length-1];return(r==null?void 0:r.params)??{}}function Fo(s,{relative:r}={}){let{matches:u}=b.useContext(yt),{pathname:d}=kt(),m=JSON.stringify(Ov(u));return b.useMemo(()=>$u(s,JSON.parse(m),d,r==="path"),[s,m,d,r])}function vb(s,r){return Hv(s,r)}function Hv(s,r,u){var B;ke(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=b.useContext(Pa),{matches:m}=b.useContext(yt),p=m[m.length-1],v=p?p.params:{},g=p?p.pathname:"/",y=p?p.pathnameBase:"/",S=p&&p.route;{let q=S&&S.path||"";Iv(g,!S||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let E=kt(),h;if(r){let q=typeof r=="string"?Ql(r):r;ke(y==="/"||((B=q.pathname)==null?void 0:B.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),h=q}else h=E;let N=h.pathname||"/",U=N;if(y!=="/"){let q=y.replace(/^\//,"").split("/");U="/"+N.replace(/^\//,"").split("/").slice(q.length).join("/")}let I=u&&u.state.matches.length?u.state.matches.map(q=>Object.assign(q,{route:u.manifest[q.route.id]||q.route})):Ev(s,{pathname:U});bt(S||I!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),bt(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Nb(I&&I.map(q=>Object.assign({},q,{params:Object.assign({},v,q.params),pathname:tt([y,d.encodeLocation?d.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:tt([y,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),m,u);return r&&L?b.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},L):L}function gb(){let s=wb(),r=W1(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),u=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:d},p={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",s),v=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),u?b.createElement("pre",{style:m},u):null,v)}var xb=b.createElement(gb,null),kv=class extends b.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){this.props.onError?this.props.onError(s,r):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const u=db(s.digest);u&&(s=u)}let r=s!==void 0?b.createElement(yt.Provider,{value:this.props.routeContext},b.createElement(Zu.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?b.createElement(bb,{error:s},r):r}};kv.contextType=zv;var zu=new WeakMap;function bb({children:s,error:r}){let{basename:u,navigator:d}=b.useContext(Pa);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let m=ub(r.digest);if(m){let p=zu.get(r);if(p)throw p;let v=Rv(m.location,u),g=v.absoluteURL||v.to;if(Mv(m.location,g,_v(d),"allow-explicit"),lb(g))throw new Error("Invalid redirect location");if(Cv&&!zu.get(r))if(v.isExternal||m.reloadDocument)window.location.href=g;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(v.to,{replace:m.replace}));throw zu.set(r,y),y}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return s}function yb({routeContext:s,match:r,children:u}){let d=b.useContext(Xl);return d&&d.static&&d.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(yt.Provider,{value:s},u)}function Nb(s,r=[],u){let d=u==null?void 0:u.state;if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(r.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let m=s,p=d==null?void 0:d.errors;if(p!=null){let E=m.findIndex(h=>h.route.id&&(p==null?void 0:p[h.route.id])!==void 0);ke(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,E+1))}let v=!1,g=-1;if(u&&d){v=d.renderFallback;for(let E=0;E<m.length;E++){let h=m[E];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=E),h.route.id){let{loaderData:N,errors:U}=d,I=h.route.loader&&!N.hasOwnProperty(h.route.id)&&(!U||U[h.route.id]===void 0);if(h.route.lazy||I){u.isStatic&&(v=!0),g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}}let y=u==null?void 0:u.onError,S=d&&y?(E,h)=>{var N,U;y(E,{location:d.location,params:((U=(N=d.matches)==null?void 0:N[0])==null?void 0:U.params)??{},pattern:eb(d.matches),errorInfo:h})}:void 0;return m.reduceRight((E,h,N)=>{let U,I=!1,L=null,B=null;d&&(U=p&&h.route.id?p[h.route.id]:void 0,L=h.route.errorElement||xb,v&&(g<0&&N===0?(Iv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,B=null):g===N&&(I=!0,B=h.route.hydrateFallbackElement||null)));let q=r.concat(m.slice(0,N+1)),Q=()=>{let V;return U?V=L:I?V=B:h.route.Component?V=b.createElement(h.route.Component,null):h.route.element?V=h.route.element:V=E,b.createElement(yb,{match:h,routeContext:{outlet:E,matches:q,isDataRoute:d!=null},children:V})};return d&&(h.route.ErrorBoundary||h.route.errorElement||N===0)?b.createElement(kv,{location:d.location,revalidation:d.revalidation,component:L,error:U,children:Q(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:S}):Q()},null)}function Ku(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eb(s){let r=b.useContext(Xl);return ke(r,Ku(s)),r}function jb(s){let r=b.useContext(Ls);return ke(r,Ku(s)),r}function Sb(s){let r=b.useContext(yt);return ke(r,Ku(s)),r}function Fu(s){let r=Sb(s),u=r.matches[r.matches.length-1];return ke(u.route.id,`${s} can only be used on routes that contain a unique "id"`),u.route.id}function Ab(){return Fu("useRouteId")}function wb(){var d;let s=b.useContext(Zu),r=jb("useRouteError"),u=Fu("useRouteError");return s!==void 0?s:(d=r.errors)==null?void 0:d[u]}function Ob(){let{router:s}=Eb("useNavigate"),r=Fu("useNavigate"),u=b.useRef(!1);return Bv(()=>{u.current=!0}),b.useCallback(async(m,p={})=>{bt(u.current,Lv),u.current&&(typeof m=="number"?await s.navigate(m):await s.navigate(m,{fromRouteId:r,...p}))},[s,r])}var Jh={};function Iv(s,r,u){!r&&!Jh[s]&&(Jh[s]=!0,bt(!1,u))}b.memo(Tb);function Tb({routes:s,manifest:r,future:u,state:d,isStatic:m,onError:p}){return Hv(s,void 0,{manifest:r,state:d,isStatic:m,onError:p})}function ua(s){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cb({basename:s="/",children:r=null,location:u,navigationType:d="POP",navigator:m,static:p=!1,useTransitions:v}){ke(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=s.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:g,navigator:m,static:p,useTransitions:v,future:{}}),[g,m,p,v]);typeof u=="string"&&(u=Ql(u));let{pathname:S="/",search:E="",hash:h="",state:N=null,key:U="default",mask:I}=u,L=b.useMemo(()=>{let B=Ht(S,g);return B==null?null:{location:{pathname:B,search:E,hash:h,state:N,key:U,mask:I},navigationType:d}},[g,S,E,h,N,U,d,I]);return bt(L!=null,`<Router basename="${g}"> is not able to match the URL "${S}${E}${h}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:b.createElement(Pa.Provider,{value:y},b.createElement(Zo.Provider,{children:r,value:L}))}function Rb({children:s,location:r}){return vb(Iu(s),r)}function Iu(s,r=[]){let u=[];return b.Children.forEach(s,(d,m)=>{if(!b.isValidElement(d))return;let p=[...r,m];if(d.type===b.Fragment){u.push.apply(u,Iu(d.props.children,p));return}ke(d.type===ua,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=Iu(d.props.children,p)),u.push(v)}),u}var Ms="get",Ds="application/x-www-form-urlencoded";function Bs(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function _b(s){return Bs(s)&&s.tagName.toLowerCase()==="button"}function Mb(s){return Bs(s)&&s.tagName.toLowerCase()==="form"}function Db(s){return Bs(s)&&s.tagName.toLowerCase()==="input"}function zb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ub(s,r){return s.button===0&&(!r||r==="_self")&&!zb(s)}var _s=null;function qb(){if(_s===null)try{new FormData(document.createElement("form"),0),_s=!1}catch{_s=!0}return _s}var Lb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(s){return s!=null&&!Lb.has(s)?(bt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ds}"`),null):s}function Bb(s,r){let u,d,m,p,v;if(Mb(s)){let g=s.getAttribute("action");d=g?Ht(g,r):null,u=s.getAttribute("method")||Ms,m=Uu(s.getAttribute("enctype"))||Ds,p=new FormData(s)}else if(_b(s)||Db(s)&&(s.type==="submit"||s.type==="image")){let g=s.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=s.getAttribute("formaction")||g.getAttribute("action");if(d=y?Ht(y,r):null,u=s.getAttribute("formmethod")||g.getAttribute("method")||Ms,m=Uu(s.getAttribute("formenctype"))||Uu(g.getAttribute("enctype"))||Ds,p=new FormData(g,s),!qb()){let{name:S,type:E,value:h}=s;if(E==="image"){let N=S?`${S}.`:"";p.append(`${N}x`,"0"),p.append(`${N}y`,"0")}else S&&p.append(S,h)}}else{if(Bs(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ms,d=null,m=Ds,v=s}return p&&m==="text/plain"&&(v=p,p=void 0),{action:d,method:u.toLowerCase(),encType:m,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ju(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function Vv(s,r,u,d){let m=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return u?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${d}`:m.pathname=`${m.pathname}.${d}`:m.pathname==="/"?m.pathname=`_root.${d}`:r&&Ht(m.pathname,r)==="/"?m.pathname=`${Vl(r)}/_root.${d}`:m.pathname=`${Vl(m.pathname)}.${d}`,m}async function Hb(s,r){if(s.id in r)return r[s.id];try{let u=await import(s.module);return r[s.id]=u,u}catch(u){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Ib(s,r,u){let d=await Promise.all(s.map(async m=>{let p=r.routes[m.route.id];if(p){let v=await Hb(p,u);return v.links?v.links():[]}return[]}));return Qb(d.flat(1).filter(kb).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Wh(s,r,u,d,m,p){let v=(y,S)=>u[S]?y.route.id!==u[S].route.id:!0,g=(y,S)=>{var E;return u[S].pathname!==y.pathname||((E=u[S].route.path)==null?void 0:E.endsWith("*"))&&u[S].params["*"]!==y.params["*"]};return p==="assets"?r.filter((y,S)=>v(y,S)||g(y,S)):p==="data"?r.filter((y,S)=>{var h;let E=d.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(v(y,S)||g(y,S))return!0;if(y.route.shouldRevalidate){let N=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((h=u[0])==null?void 0:h.params)||{},nextUrl:new URL(s,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Vb(s,r,{includeHydrateFallback:u}={}){return Gb(s.map(d=>{let m=r.routes[d.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),u&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function Gb(s){return[...new Set(s)]}function Yb(s){let r={},u=Object.keys(s).sort();for(let d of u)r[d]=s[d];return r}function Qb(s,r){let u=new Set;return new Set(r),s.reduce((d,m)=>{let p=JSON.stringify(Yb(m));return u.has(p)||(u.add(p),d.push({key:p,link:m})),d},[])}function Wu(){let s=b.useContext(Xl);return Ju(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Xb(){let s=b.useContext(Ls);return Ju(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var ed=b.createContext(void 0);ed.displayName="FrameworkContext";function Hs(){let s=b.useContext(ed);return Ju(s,"You must render this element inside a <HydratedRouter> element"),s}function Pb(s,r){let u=b.useContext(ed),[d,m]=b.useState(!1),[p,v]=b.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:S,onMouseLeave:E,onTouchStart:h}=r,N=b.useRef(null);b.useEffect(()=>{if(s==="render"&&v(!0),s==="viewport"){let L=q=>{q.forEach(Q=>{v(Q.isIntersecting)})},B=new IntersectionObserver(L,{threshold:.5});return N.current&&B.observe(N.current),()=>{B.disconnect()}}},[s]),b.useEffect(()=>{if(d){let L=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(L)}}},[d]);let U=()=>{m(!0)},I=()=>{m(!1),v(!1)};return u?s!=="intent"?[p,N,{}]:[p,N,{onFocus:Xo(g,U),onBlur:Xo(y,I),onMouseEnter:Xo(S,U),onMouseLeave:Xo(E,I),onTouchStart:Xo(h,U)}]:[!1,N,{}]}function Xo(s,r){return u=>{s&&s(u),u.defaultPrevented||r(u)}}function $b({page:s,...r}){let u=ob(),{nonce:d}=Hs(),{router:m}=Wu(),p=b.useMemo(()=>Ev(m.routes,s,m.basename),[m.routes,s,m.basename]);return p?(r.nonce==null&&d&&(r={...r,nonce:d}),u?b.createElement(Kb,{page:s,matches:p,...r}):b.createElement(Fb,{page:s,matches:p,...r})):null}function Zb(s){let{manifest:r,routeModules:u}=Hs(),[d,m]=b.useState([]);return b.useEffect(()=>{let p=!1;return Ib(s,r,u).then(v=>{p||m(v)}),()=>{p=!0}},[s,r,u]),d}function Kb({page:s,matches:r,...u}){let d=kt(),{future:m}=Hs(),{basename:p}=Wu(),v=b.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let g=Vv(s,p,m.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,S=[];for(let E of r)typeof E.route.shouldRevalidate=="function"?y=!0:S.push(E.route.id);return y&&S.length>0&&g.searchParams.set("_routes",S.join(",")),[g.pathname+g.search]},[p,m.v8_trailingSlashAwareDataRequests,s,d,r]);return b.createElement(b.Fragment,null,v.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...u})))}function Fb({page:s,matches:r,...u}){let d=kt(),{future:m,manifest:p,routeModules:v}=Hs(),{basename:g}=Wu(),{loaderData:y,matches:S}=Xb(),E=b.useMemo(()=>Wh(s,r,S,p,d,"data"),[s,r,S,p,d]),h=b.useMemo(()=>Wh(s,r,S,p,d,"assets"),[s,r,S,p,d]),N=b.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let L=new Set,B=!1;if(r.forEach(Q=>{var ie;let V=p.routes[Q.route.id];!V||!V.hasLoader||(!E.some(ue=>ue.route.id===Q.route.id)&&Q.route.id in y&&((ie=v[Q.route.id])!=null&&ie.shouldRevalidate)||V.hasClientLoader?B=!0:L.add(Q.route.id))}),L.size===0)return[];let q=Vv(s,g,m.v8_trailingSlashAwareDataRequests,"data");return B&&L.size>0&&q.searchParams.set("_routes",r.filter(Q=>L.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[q.pathname+q.search]},[g,m.v8_trailingSlashAwareDataRequests,y,d,p,E,r,s,v]),U=b.useMemo(()=>Vb(h,p),[h,p]),I=Zb(h);return b.createElement(b.Fragment,null,N.map(L=>b.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...u})),U.map(L=>b.createElement("link",{key:L,rel:"modulepreload",href:L,...u})),I.map(({key:L,link:B})=>b.createElement("link",{key:L,nonce:u.nonce,...B,crossOrigin:B.crossOrigin??u.crossOrigin})))}function Jb(...s){return r=>{s.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Wb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wb&&(window.__reactRouterVersion="7.18.4")}catch{}function ey({basename:s,children:r,useTransitions:u,window:d}){let m=b.useRef();m.current==null&&(m.current=R1({window:d,v5Compat:!0}));let p=m.current,[v,g]=b.useState({action:p.action,location:p.location}),y=b.useCallback(S=>{u===!1?g(S):b.startTransition(()=>g(S))},[u]);return b.useLayoutEffect(()=>p.listen(y),[p,y]),b.createElement(Cb,{basename:s,children:r,location:v.location,navigationType:v.action,navigator:p,useTransitions:u})}var xt=b.forwardRef(function({onClick:r,discover:u="render",prefetch:d="none",relative:m,reloadDocument:p,replace:v,mask:g,state:y,target:S,to:E,preventScrollReset:h,viewTransition:N,defaultShouldRevalidate:U,...I},L){let{basename:B,navigator:q,useTransitions:Q}=b.useContext(Pa),V=typeof E=="string"&&Pu.test(E),ie=Rv(E,B);E=ie.to;let ue=mb(E,{relative:m}),K=kt(),X=null;if(g){let de=$u(g,[],K.mask?K.mask.pathname:"/",!0);B!=="/"&&(de.pathname=de.pathname==="/"?B:tt([B,de.pathname])),X=q.createHref(de)}let[P,se,k]=Pb(d,I),le=ly(E,{replace:v,mask:g,state:y,target:S,preventScrollReset:h,relative:m,viewTransition:N,defaultShouldRevalidate:U,useTransitions:Q});function ne(de){r&&r(de),de.defaultPrevented||le(de)}let ze=!(ie.isExternal||p),Ye=b.createElement("a",{...I,...k,href:(ze?X:void 0)||ie.absoluteURL||ue,onClick:ze?ne:r,ref:Jb(L,se),target:S,"data-discover":!V&&u==="render"?"true":void 0});return P&&!V?b.createElement(b.Fragment,null,Ye,b.createElement($b,{page:ue})):Ye});xt.displayName="Link";var ay=b.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:d="",end:m=!1,style:p,to:v,viewTransition:g,children:y,...S},E){let h=Fo(v,{relative:S.relative}),N=kt(),U=b.useContext(Ls),{navigator:I,basename:L}=b.useContext(Pa),B=U!=null&&cy(h)&&g===!0,q=I.encodeLocation?I.encodeLocation(h).pathname:h.pathname,Q=N.pathname,V=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;u||(Q=Q.toLowerCase(),V=V?V.toLowerCase():null,q=q.toLowerCase()),V&&L&&(V=Ht(V,L)||V);const ie=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let ue=Q===q||!m&&Q.startsWith(q)&&Q.charAt(ie)==="/",K=V!=null&&(V===q||!m&&V.startsWith(q)&&V.charAt(q.length)==="/"),X={isActive:ue,isPending:K,isTransitioning:B},P=ue?r:void 0,se;typeof d=="function"?se=d(X):se=[d,ue?"active":null,K?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let k=typeof p=="function"?p(X):p;return b.createElement(xt,{...S,"aria-current":P,className:se,ref:E,style:k,to:v,viewTransition:g},typeof y=="function"?y(X):y)});ay.displayName="NavLink";var ty=b.forwardRef(({discover:s="render",fetcherKey:r,navigate:u,reloadDocument:d,replace:m,state:p,method:v=Ms,action:g,onSubmit:y,relative:S,preventScrollReset:E,viewTransition:h,defaultShouldRevalidate:N,...U},I)=>{let{useTransitions:L}=b.useContext(Pa),B=sy(),q=ry(g,{relative:S}),Q=v.toLowerCase()==="get"?"get":"post",V=typeof g=="string"&&Pu.test(g),ie=ue=>{if(y&&y(ue),ue.defaultPrevented)return;ue.preventDefault();let K=ue.nativeEvent.submitter,X=(K==null?void 0:K.getAttribute("formmethod"))||v,P=()=>B(K||ue.currentTarget,{fetcherKey:r,method:X,navigate:u,replace:m,state:p,relative:S,preventScrollReset:E,viewTransition:h,defaultShouldRevalidate:N});L&&u!==!1?b.startTransition(()=>P()):P()};return b.createElement("form",{ref:I,method:Q,action:q,onSubmit:d?y:ie,...U,"data-discover":!V&&s==="render"?"true":void 0})});ty.displayName="Form";function ny(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gv(s){let r=b.useContext(Xl);return ke(r,ny(s)),r}function ly(s,{target:r,replace:u,mask:d,state:m,preventScrollReset:p,relative:v,viewTransition:g,defaultShouldRevalidate:y,useTransitions:S}={}){let E=fb(),h=kt(),N=Fo(s,{relative:v});return b.useCallback(U=>{if(Ub(U,r)){U.preventDefault();let I=u!==void 0?u:Il(h)===Il(N),L=()=>E(s,{replace:I,mask:d,state:m,preventScrollReset:p,relative:v,viewTransition:g,defaultShouldRevalidate:y});S?b.startTransition(()=>L()):L()}},[h,E,N,u,d,m,r,s,p,v,g,y,S])}var oy=0,iy=()=>`__${String(++oy)}__`;function sy(){let{router:s}=Gv("useSubmit"),{basename:r}=b.useContext(Pa),u=Ab(),d=s.fetch,m=s.navigate;return b.useCallback(async(p,v={})=>{let{action:g,method:y,encType:S,formData:E,body:h}=Bb(p,r);if(v.navigate===!1){let N=v.fetcherKey||iy();await d(N,u,v.action||g,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:h,formMethod:v.method||y,formEncType:v.encType||S,flushSync:v.flushSync})}else await m(v.action||g,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:h,formMethod:v.method||y,formEncType:v.encType||S,replace:v.replace,state:v.state,fromRouteId:u,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,m,r,u])}function ry(s,{relative:r}={}){let{basename:u}=b.useContext(Pa),d=b.useContext(yt);ke(d,"useFormAction must be used inside a RouteContext");let[m]=d.matches.slice(-1),p={...Fo(s||".",{relative:r})},v=kt();if(s==null){p.search=v.search;let g=new URLSearchParams(p.search),y=g.getAll("index");if(y.some(E=>E==="")){g.delete("index"),y.filter(h=>h).forEach(h=>g.append("index",h));let E=g.toString();p.search=E?`?${E}`:""}}return(!s||s===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:tt([u,p.pathname])),Il(p)}function cy(s,{relative:r}={}){let u=b.useContext(Uv);ke(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Gv("useViewTransitionState"),m=Fo(s,{relative:r});if(!u.isTransitioning)return!1;let p=Ht(u.currentLocation.pathname,d)||u.currentLocation.pathname,v=Ht(u.nextLocation.pathname,d)||u.nextLocation.pathname;return zs(m.pathname,v)!=null||zs(m.pathname,p)!=null}const uy={sm:"w-[92px]",md:"w-[150px]",lg:"w-[200px]",xl:"w-[260px]"},$a=({size:s="md",className:r="",glow:u=!0})=>l.jsxs("span",{id:"vm-midias-logo",className:`relative inline-flex shrink-0 items-center justify-center select-none ${r}`,children:[u&&l.jsx("span",{className:"absolute inset-[24%] -z-10 bg-[#f40b36]/18 blur-xl","aria-hidden":"true"}),l.jsx("img",{src:"/images/logo-VMmidias.png",alt:"VM MÍDIAS",className:`${uy[s]} h-auto object-contain transition-transform duration-300 hover:scale-[1.02]`,loading:"eager",decoding:"async"})]});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),my=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,u,d)=>d?d.toUpperCase():u.toLowerCase()),ev=s=>{const r=my(s);return r.charAt(0).toUpperCase()+r.slice(1)},Yv=(...s)=>s.filter((r,u,d)=>!!r&&r.trim()!==""&&d.indexOf(r)===u).join(" ").trim(),fy=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var py={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=b.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:u=2,absoluteStrokeWidth:d,className:m="",children:p,iconNode:v,...g},y)=>b.createElement("svg",{ref:y,...py,width:r,height:r,stroke:s,strokeWidth:d?Number(u)*24/Number(r):u,className:Yv("lucide",m),...!p&&!fy(g)&&{"aria-hidden":"true"},...g},[...v.map(([S,E])=>b.createElement(S,E)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(s,r)=>{const u=b.forwardRef(({className:d,...m},p)=>b.createElement(hy,{ref:p,iconNode:r,className:Yv(`lucide-${dy(ev(s))}`,`lucide-${s}`,d),...m}));return u.displayName=ev(s),u};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Pl=J("arrow-left",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],gt=J("arrow-right",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],av=J("arrow-up-right",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],yy=J("arrow-up",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],$l=J("building-2",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],jy=J("calendar-check",Ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Ay=J("calendar-days",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yn=J("check",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ty=J("chevron-down",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ry=J("chevron-left",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qv=J("chevron-right",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],tv=J("circle-alert",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zy=J("circle-check",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],Xv=J("clipboard",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Pv=J("clock-3",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],By=J("cloud-upload",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],ky=J("coins",Hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Jo=J("download",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Gy=J("external-link",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Qy=J("file-check-2",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],Py=J("file-image",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],$v=J("file",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],qu=J("gift",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Fy=J("globe",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Wy=J("headphones",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],a2=J("image-off",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],n2=J("image",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],o2=J("instagram",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],s2=J("layout-grid",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ma=J("loader-circle",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],nv=J("lock-keyhole",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ad=J("log-out",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],lv=J("mail",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],td=J("map-pin",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],p2=J("menu",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],v2=J("mic-vocal",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],Zv=J("monitor-play",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Kv=J("newspaper",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],y2=J("palette",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],E2=J("pencil",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],S2=J("play",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Fv=J("plus",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],O2=J("radio",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],nd=J("refresh-cw",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],R2=J("repeat",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ks=J("search",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],D2=J("send",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],U2=J("settings-2",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ld=J("shield-check",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Jv=J("sparkles",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],H2=J("star",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],Wv=J("store",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ov=J("sun",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],G2=J("tag",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],e0=J("ticket",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],a0=J("trash-2",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Vu=J("trophy",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],$2=J("upload",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],K2=J("video",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gl=J("x",F2),Me={company:{name:"VM MÍDIAS",legalName:"VM MÍDIAS Publicidade e Painéis Digitais",tagline:"SUA MARCA EM DESTAQUE.",locationShort:"Capela do Alto — SP",domain:"www.vmmidias.com.br",whatsappRaw:"551531650153",whatsappFormatted:"(15) 3165-0153",email:"fredericolopescorrea@hotmail.com",instagramUrl:"https://www.instagram.com/vmmidiasindoor",heroVideoUrl:"/videos/Apresentacao-VMmidias.mp4"},plans:[{id:"start",name:"START",type:"MÍDIA INDOOR",coverage:"Divulgação em 05 locais",badge:null,prices:{mensal:{price:"179,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"159,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"139,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 05 pontos estratégicos","Exibição contínua durante todo o horário comercial","Alta frequência de repetições diárias","Criação de arte estática inclusa sem custo adicional","Suporte e atendimento direto em Capela do Alto"]},{id:"destaque",name:"DESTAQUE",type:"MÍDIA INDOOR",coverage:"Divulgação em 09 locais + 01 adicional",badge:"MAIS ESCOLHIDO",prices:{mensal:{price:"259,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"237,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"217,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 09 locais + 01 ponto adicional grátis","Maior presença e frequência em toda a rede","Prioridade em pontos de altíssimo fluxo","Criação de arte inclusa sem custo adicional","Relatórios de inserções e atendimento prioritário"]}],supporters:[{id:"esquina-do-salgado",name:"Esquina do Salgado",logoUrl:"/images/apoiadores/esquina-do-salgado.png"},{id:"espetinho-do-vg",name:"Espetinho do VG",logoUrl:"/images/apoiadores/espetinho-do-vg.png"},{id:"boteco-do-gordao",name:"Boteco do Gordão",logoUrl:"/images/apoiadores/boteco-do-gordao.png"},{id:"mg-sampaio-iperozinho",name:"MG Sampaio Iperózinho",logoUrl:"/images/apoiadores/mg-sampaio.jpg"},{id:"mg-sampaio-culaus",name:"MG Sampaio Culaus",logoUrl:"/images/apoiadores/mg-sampaio.jpg"}],howItWorksSteps:[{step:"01",title:"ESCOLHA SEU PLANO",description:"Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual."},{step:"02",title:"ENVIE SUAS INFORMAÇÕES",description:"Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal."},{step:"03",title:"CRIAMOS SUA CAMPANHA",description:"Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas."},{step:"04",title:"SUA MARCA ENTRA NO AR",description:"Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto."}],whyAdvertise:[{id:"presenca-diaria",title:"PRESENÇA DIÁRIA",description:"Sua marca presente constantemente durante todo o expediente dos melhores estabelecimentos da cidade.",iconName:"CalendarCheck"},{id:"pontos-estrategicos",title:"PONTOS ESTRATÉGICOS",description:"Publicidade instalada exatamente onde as pessoas de Capela do Alto realmente compram e circulam.",iconName:"MapPin"},{id:"alta-frequencia",title:"ALTA FREQUÊNCIA",description:"A repetição diária gera familiaridade. Quem vê todos os dias lembra na hora de comprar.",iconName:"Repeat"},{id:"preco-acessivel",title:"PREÇO ACESSÍVEL",description:"Planos a partir de R$ 139/mês, pensados sob medida para o orçamento do comércio e serviços locais.",iconName:"Coins"},{id:"criacao-facilitada",title:"CRIAÇÃO FACILITADA",description:"Você não precisa ser designer. Nós ajudamos sua empresa a colocar sua campanha no ar com padrão profissional.",iconName:"Palette"},{id:"atendimento-local",title:"ATENDIMENTO LOCAL",description:"Suporte próximo, ágil e humanizado em Capela do Alto, com quem conhece o mercado da nossa região.",iconName:"Headphones"}],faqs:[{question:"O que é mídia indoor?",answer:"Mídia Indoor (também conhecida como DOOH - Digital Out of Home) é a veiculação de anúncios em telas digitais de alta resolução instaladas dentro de estabelecimentos comerciais estratégicos onde há fluxo contínuo de pessoas e tempo de permanência."},{question:"Onde meu anúncio será exibido?",answer:"Sua marca será exibida em telas digitais instaladas nos principais pontos de circulação de Capela do Alto — como supermercados, restaurantes, padarias, lotéricas, academias e comércios parceiros da nossa rede."},{question:"Como envio minha arte?",answer:"Basta nos enviar pelo WhatsApp ou e-mail o seu logotipo (em alta resolução), imagens dos seus produtos/serviços e as informações de contato que deseja destacar. É simples e rápido."},{question:"A VM MÍDIAS cria o anúncio?",answer:"Sim! A criação da arte estática para veiculação nas telas já está inclusa no seu plano, sem cobrança adicional. Caso você queira um vídeo animado em movimento para chamar ainda mais atenção, oferecemos o serviço opcional de animação."},{question:"Quanto tempo demora para minha campanha entrar no ar?",answer:"Após a aprovação da sua arte ou recebimento do seu material finalizado, a campanha entra no ar na nossa rede de telas em até 48 horas úteis."},{question:"Posso alterar minha campanha durante o contrato?",answer:"Sim! Você pode atualizar sua arte ou oferta para divulgar datas comemorativas, promoções especiais ou lançamentos de produtos conforme as condições do seu plano contratado."},{question:"Qual é a diferença entre START e DESTAQUE?",answer:"O Plano START veicula sua marca em 05 locais estratégicos da rede. O Plano DESTAQUE é o mais escolhido: oferece divulgação em 09 locais mais 01 ponto adicional bonificado (total de 10 locais), proporcionando o dobro de cobertura na cidade."},{question:"Como funciona o plano mensal?",answer:"No plano mensal você tem total flexibilidade: renova mês a mês sem fidelidade. Já nos planos semestral (6 meses) e anual (12 meses), você garante descontos progressivos expressivos e a melhor relação custo-benefício por mês."},{question:"Posso contratar mais pontos?",answer:"Com certeza! Conforme a rede de telas da VM MÍDIAS expande em novos bairros e estabelecimentos de Capela do Alto, você pode ampliar sua presença para novos pontos estratégicos adicionais."},{question:"Como faço para anunciar?",answer:"Basta clicar em qualquer botão de contato ou no botão flutuante de WhatsApp do site, escolher seu plano e falar diretamente com nossa equipe. Nós cuidamos de todo o processo para colocar sua marca em destaque rapidamente!"}]},gn=({title:s,...r})=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":s?void 0:!0,role:s?"img":void 0,...r,children:[s&&l.jsx("title",{children:s}),l.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.297.297-.495.1-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.438-9.886 9.893-9.886a9.821 9.821 0 017.021 2.91 9.825 9.825 0 012.9 7.027c-.003 5.45-4.439 9.887-9.93 9.887m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.449h.005c6.559 0 11.895-5.336 11.898-11.893a11.821 11.821 0 00-3.49-8.414Z"})]}),J2=()=>{const[s,r]=b.useState(!1),[u,d]=b.useState("inicio");b.useEffect(()=>{if(!s)return;const v=document.body.style.overflow;document.body.style.overflow="hidden";const g=S=>{S.key==="Escape"&&r(!1)},y=()=>{window.innerWidth>=1024&&r(!1)};return window.addEventListener("keydown",g),window.addEventListener("resize",y),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",g),window.removeEventListener("resize",y)}},[s]),b.useEffect(()=>{const g=["inicio","onde-estamos","como-funciona","planos","contato"].map(S=>document.getElementById(S)).filter(S=>!!S),y=new IntersectionObserver(S=>{const E=S.filter(h=>h.isIntersecting).sort((h,N)=>N.intersectionRatio-h.intersectionRatio)[0];E&&d(E.target.id)},{rootMargin:"-18% 0px -62% 0px",threshold:[0,.15,.35]});return g.forEach(S=>y.observe(S)),()=>y.disconnect()},[]);const m=[{label:"Início",href:"#inicio"},{label:"Onde Estamos",href:"#onde-estamos"},{label:"Como Funciona",href:"#como-funciona"},{label:"Planos",href:"#planos"},{label:"Contato",href:"#contato"}],p=()=>{r(!1)};return l.jsxs(l.Fragment,{children:[l.jsx("header",{id:"main-header",className:"fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/10 bg-[#030406]/96 shadow-2xl shadow-black/40 backdrop-blur-xl lg:h-[84px]",children:l.jsx("div",{className:"mx-auto h-full max-w-[1500px] px-4 sm:px-8 lg:px-12",children:l.jsxs("div",{className:"flex h-full items-center justify-between",children:[l.jsx("a",{href:"#inicio",className:"flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D] rounded-md","aria-label":"VM MÍDIAS - Ir para o início",children:l.jsx($a,{size:"sm"})}),l.jsx("nav",{id:"desktop-navigation",className:"hidden lg:flex items-center space-x-7","aria-label":"Navegação Principal",children:m.map(v=>l.jsxs("a",{href:v.href,"aria-current":u===v.href.slice(1)?"page":void 0,className:`text-[13px] font-bold transition-colors relative py-2 group focus:outline-none focus-visible:text-white ${u===v.href.slice(1)?"text-white":"text-[#94979f] hover:text-white"}`,children:[v.label,l.jsx("span",{className:`absolute bottom-0 left-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full ${u===v.href.slice(1)?"w-full":"w-0"}`})]},v.href))}),l.jsx("div",{className:"hidden lg:flex items-center gap-4",children:l.jsxs("a",{id:"header-cta-button",href:"#contato",className:"group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#f40b36] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d90a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[l.jsx("span",{children:"ANUNCIE AGORA"}),l.jsx(gt,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})}),l.jsxs("div",{className:"flex lg:hidden items-center gap-3",children:[l.jsxs("a",{href:"#contato",onClick:p,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8032D] text-white text-xs font-bold uppercase tracking-wider",children:[l.jsx("span",{children:"Anuncie"}),l.jsx(gt,{className:"w-3.5 h-3.5"})]}),l.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>r(!s),className:"p-2 rounded-lg bg-[#15151B] border border-[#22222E] text-white hover:text-[#F8032D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":s,"aria-controls":"mobile-navigation-drawer","aria-label":s?"Fechar menu de navegação":"Abrir menu de navegação",children:s?l.jsx(Gl,{className:"w-6 h-6"}):l.jsx(p2,{className:"w-6 h-6"})})]})]})})}),s&&l.jsx("div",{id:"mobile-navigation-drawer",className:"fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto bg-[#050609] lg:hidden",children:l.jsxs("div",{className:"flex min-h-full flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-8",children:[l.jsx("div",{className:"mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38",children:"Navegação"}),l.jsx("nav",{"aria-label":"Navegação móvel",className:"border-t border-white/10",children:m.map((v,g)=>l.jsxs("a",{href:v.href,onClick:p,"aria-current":u===v.href.slice(1)?"page":void 0,className:`group flex min-h-14 items-center gap-4 border-b border-white/10 px-1 text-base font-bold transition-colors ${u===v.href.slice(1)?"text-white":"text-white/65 hover:text-white"}`,children:[l.jsx("span",{className:`text-[10px] tabular-nums ${u===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`,children:String(g+1).padStart(2,"0")}),l.jsx("span",{className:"flex-1",children:v.label}),l.jsx(gt,{className:`h-4 w-4 transition-transform group-hover:translate-x-1 ${u===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`})]},v.href))}),l.jsxs("div",{className:"mt-auto flex flex-col gap-3 border-t border-white/10 pt-5",children:[l.jsxs("a",{href:"#contato",onClick:p,className:"flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-[#F8032D] py-3 text-sm font-black text-white",children:[l.jsx("span",{children:"ANUNCIE AGORA"}),l.jsx(gt,{className:"w-4 h-4"})]}),l.jsxs("a",{href:`https://wa.me/${Me.company.whatsappRaw}?text=${encodeURIComponent("Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.")}`,target:"_blank",rel:"noopener noreferrer",onClick:p,className:"flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] py-2.5 text-sm font-bold text-white",children:[l.jsx(gn,{className:"w-4 h-4 text-emerald-400"}),l.jsx("span",{children:"Falar pelo WhatsApp"})]})]})]})})]})},Wo=({children:s,align:r="left",className:u=""})=>l.jsxs("div",{className:`brand-eyebrow ${r==="center"?"justify-center":""} ${u}`,children:[l.jsx("span",{className:"brand-eyebrow-line","aria-hidden":"true"}),l.jsx("span",{children:s})]}),Is=({eyebrow:s,title:r,accent:u,description:d,align:m="center",className:p=""})=>l.jsxs("div",{className:`${m==="center"?"text-center mx-auto":"text-left"} max-w-4xl ${p}`,children:[l.jsx(Wo,{align:m,children:s}),l.jsxs("h2",{className:"brand-section-title",children:[r," ",l.jsx("span",{className:"text-[#ff143f] text-led-glow",children:u})]}),d&&l.jsx("p",{className:"brand-section-copy",children:d})]}),Us=({href:s,children:r,variant:u="primary",id:d,className:m=""})=>l.jsxs("a",{id:d,href:s,className:`group brand-button ${u==="outline"?"brand-button-outline":"brand-button-primary"} ${m}`,children:[l.jsx("span",{children:r}),l.jsx(gt,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]}),W2=({src:s,poster:r})=>l.jsx("div",{className:"relative aspect-video w-full overflow-hidden border border-white/20 bg-[#08090c] shadow-[0_24px_70px_rgba(0,0,0,0.5)]",children:l.jsx("video",{className:"h-full w-full object-cover",controls:!0,playsInline:!0,preload:"metadata",poster:r,"aria-label":"Conheça a VM Mídias",children:l.jsx("source",{src:s,type:"video/mp4"})})}),eN=()=>l.jsxs("section",{id:"inicio",className:"relative min-h-[100svh] overflow-hidden bg-black lg:h-[100svh]",children:[l.jsx("div",{className:"absolute inset-0 bg-hero-city hero-photo-motion","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen","aria-hidden":"true"}),l.jsx("div",{className:"relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-5 pb-10 pt-[104px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-6 lg:pt-[96px]",children:l.jsxs("div",{className:"grid w-full items-center gap-7 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-6",children:[l.jsxs("div",{className:"order-1 lg:col-span-7 lg:row-start-1 lg:self-end",children:[l.jsx(Wo,{children:"VM Mídias · Capela do Alto"}),l.jsxs("h1",{className:"max-w-[820px] text-[clamp(2.8rem,12vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-white lg:text-[clamp(4rem,5.5vw,6.2rem)]",children:["Seu negócio já é bom",l.jsx("span",{className:"mt-3 block text-[#ff143f] text-led-glow",children:"Agora ele precisa aparecer."})]})]}),l.jsx("div",{className:"order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1",children:l.jsx(W2,{src:Me.company.heroVideoUrl,poster:"/images/generated/vm-indoor-space.webp"})}),l.jsxs("div",{className:"order-3 lg:col-span-7 lg:row-start-2 lg:self-start",children:[l.jsx("p",{className:"max-w-2xl text-base leading-relaxed text-[#d0d1d6] sm:text-xl lg:text-lg xl:text-xl",children:"Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida."}),l.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[l.jsx(Us,{id:"hero-primary-cta",href:"#contato",children:"Colocar minha marca em destaque"}),l.jsx(Us,{id:"hero-secondary-cta",href:"#planos",variant:"outline",children:"Conhecer os planos"})]})]})]})})]}),aN=({supporter:s})=>{const[r,u]=b.useState(!1),d=s.name.split(" ").filter(Boolean).slice(0,2).map(m=>m[0]).join("");return l.jsx("div",{className:"flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-black/35 p-6 sm:p-8",children:r?l.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full border border-[#f40b36]/45 bg-[#f40b36]/10 text-2xl font-black tracking-tight text-white","aria-hidden":"true",children:d}):l.jsx("img",{src:s.logoUrl,alt:`Logo ${s.name}`,className:"h-full max-h-28 w-full object-contain",onError:()=>u(!0)})})},tN=()=>l.jsxs("section",{id:"onde-estamos",className:"relative overflow-hidden border-b border-white/10 bg-[#06070a] py-24 lg:py-32",children:[l.jsx("div",{className:"absolute inset-0 bg-indoor-space bg-cover bg-center opacity-[0.08]","aria-hidden":"true"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/95 to-[#06070a]","aria-hidden":"true"}),l.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[l.jsxs("div",{className:"mb-12 max-w-5xl",children:[l.jsx(Wo,{children:"Rede de apoiadores"}),l.jsxs("h2",{className:"brand-section-title",children:["Comércios que já estão com a"," ",l.jsx("span",{className:"text-[#f40b36]",children:"VM Mídias."})]}),l.jsx("p",{className:"brand-section-copy max-w-3xl",children:"Empresas locais que apoiam a nossa rede e fortalecem a mídia indoor em Capela do Alto."})]}),l.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5",children:Me.supporters.map(s=>l.jsxs("article",{className:"overflow-hidden border border-white/10 bg-[#0b0d10]/90",children:[l.jsx(aN,{supporter:s}),l.jsxs("div",{className:"min-h-28 p-4 sm:p-5",children:[l.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.18em] text-[#f40b36] sm:text-[10px]",children:"Apoiador VM Mídias"}),l.jsx("h3",{className:"mt-2 text-sm font-black leading-snug text-white sm:text-base",children:s.name})]})]},s.id))})]})]}),nN=()=>l.jsx("section",{id:"como-funciona",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:l.jsxs("div",{className:"mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12",children:[l.jsx("div",{className:"lg:col-span-5",children:l.jsxs("div",{className:"lg:sticky lg:top-32",children:[l.jsx(Is,{eyebrow:"Do planejamento ao resultado",title:"Como",accent:"funciona",description:"Simples, rápido e sem burocracia.",align:"left"}),l.jsx("div",{className:"mt-8",children:l.jsx(Us,{href:"#contato",children:"Começar agora"})})]})}),l.jsxs("div",{className:"relative lg:col-span-7 lg:pl-12",children:[l.jsx("div",{className:"absolute bottom-8 left-[19px] top-8 w-px bg-white/12 lg:left-[67px]","aria-hidden":"true"}),l.jsx("div",{className:"space-y-0",children:Me.howItWorksSteps.map((s,r)=>l.jsxs("article",{className:"group relative grid grid-cols-[40px_1fr] gap-5 border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:grid-cols-[56px_1fr] lg:gap-8 lg:py-11",children:[l.jsx("div",{className:"relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#030406] text-xs font-black text-white transition-colors group-hover:border-[#f40b36] group-hover:text-[#f40b36] lg:h-14 lg:w-14",children:String(r+1).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:s.title}),l.jsx("p",{className:"mt-3 text-sm font-semibold text-white/75",children:s.description})]})]},s.step))})]})]})}),iv=[{id:"mensal",label:"Mensal",shortLabel:"Mensal"},{id:"semestral",label:"Semestral",shortLabel:"6 meses"},{id:"anual",label:"Anual",shortLabel:"12 meses"}],lN=({onSelectPlan:s})=>{const[r,u]=b.useState("anual"),d=p=>{var v;s==null||s(p.name,r),(v=document.getElementById("contato"))==null||v.scrollIntoView({behavior:"smooth"})},m=p=>{var y;const v=(y=iv.find(S=>S.id===r))==null?void 0:y.label,g=`Olá! Tenho interesse no Plano ${p.name}, período ${v}. Gostaria de receber mais informações.`;return`https://wa.me/${Me.company.whatsappRaw}?text=${encodeURIComponent(g)}`};return l.jsx("section",{id:"planos",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:l.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[l.jsx(Is,{eyebrow:"Planos VM Mídias",title:"Escolha sua",accent:"presença",description:"Dois planos claros. Você escolhe a cobertura e o período ideal para o seu negócio.",className:"mb-9"}),l.jsx("div",{className:"mx-auto mb-10 flex max-w-xl rounded-lg border border-white/10 bg-[#0d0f13] p-1.5",children:iv.map(p=>l.jsxs("button",{type:"button",onClick:()=>u(p.id),"aria-pressed":r===p.id,className:`relative flex min-h-12 flex-1 flex-col items-center justify-center rounded-md px-2 text-center transition-colors ${r===p.id?"bg-[#f40b36] text-white":"text-white/52 hover:bg-white/[0.04] hover:text-white"}`,children:[l.jsx("span",{className:"text-xs font-black uppercase tracking-[0.1em]",children:p.shortLabel}),p.id==="anual"&&l.jsx("span",{className:`mt-0.5 text-[9px] font-bold uppercase ${r==="anual"?"text-white/75":"text-[#f40b36]"}`,children:"melhor valor"})]},p.id))}),l.jsx("div",{className:"mx-auto grid max-w-6xl overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 lg:gap-px",children:Me.plans.map(p=>{const v=p.id==="destaque",g=p.prices[r],y=p.features.slice(0,4);return l.jsxs("article",{className:`relative flex flex-col bg-[#0d0f13] p-7 sm:p-10 lg:p-12 ${v?"border-t-4 border-[#f40b36] lg:border-t-0 lg:border-l-4":""}`,children:[l.jsxs("div",{className:"flex items-start justify-between gap-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]",children:p.type}),l.jsxs("h3",{className:"mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl",children:["Plano ",p.name]})]}),v&&l.jsxs("span",{className:"flex shrink-0 items-center gap-1 bg-[#f40b36] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider text-white",children:[l.jsx(H2,{className:"h-3 w-3 fill-current"})," Mais escolhido"]})]}),l.jsx("p",{className:"mt-4 text-sm font-semibold text-white/62",children:p.coverage}),l.jsxs("div",{className:"my-8 border-y border-white/10 py-7",children:[l.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.14em] text-white/38",children:g.note}),l.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[l.jsx("span",{className:"mb-2 text-sm font-black text-[#f40b36]",children:"R$"}),l.jsx("span",{className:"text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl",children:g.price}),l.jsx("span",{className:"mb-2 text-sm text-white/45",children:g.period})]})]}),l.jsx("div",{className:"space-y-4",children:y.map(S=>l.jsxs("div",{className:"flex gap-3 text-sm leading-6 text-white/70",children:[l.jsx(yn,{className:"mt-1 h-4 w-4 shrink-0 text-[#f40b36]"}),l.jsx("span",{children:S})]},S))}),l.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/48",children:[l.jsx(K2,{className:"h-4 w-4 shrink-0 text-[#f40b36]"}),l.jsxs("span",{children:["Vídeo animado opcional por ",p.optionalVideo[r]]})]}),l.jsxs("div",{className:"mt-auto pt-8",children:[l.jsxs("button",{type:"button",onClick:()=>d(p),className:`group flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.1em] transition-colors ${v?"bg-[#f40b36] text-white hover:bg-[#d90a31]":"border border-white/18 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`,children:["Escolher ",p.name," ",l.jsx(gt,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}),l.jsxs("a",{href:m(p),target:"_blank",rel:"noopener noreferrer",className:"mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/42 transition-colors hover:text-[#25D366]",children:[l.jsx(gn,{className:"h-4 w-4"})," Tirar dúvidas pelo WhatsApp"]})]})]},p.id)})})]})})},sv=({item:s})=>{const r=s.icon;return l.jsx("article",{className:"group relative flex h-full min-h-[250px] flex-col border border-white/10 bg-[#08090d]/90 p-6 transition-colors duration-300 hover:border-[#ff143f]/45 hover:bg-[#0b0c11] sm:p-7",children:l.jsxs("div",{className:"flex items-start gap-5",children:[l.jsxs("div",{className:"shrink-0",children:[l.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff143f] text-[#ff143f] shadow-[0_0_24px_rgba(248,3,45,0.2)] transition-all duration-300 group-hover:bg-[#ff143f] group-hover:text-white",children:l.jsx(r,{className:"h-6 w-6","aria-hidden":"true"})}),l.jsx("span",{className:"mt-3 block text-center text-[10px] font-black tracking-[0.25em] text-[#5d606b]",children:s.number})]}),l.jsxs("div",{className:"min-w-0 pt-1",children:[l.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white lg:text-2xl",children:s.title}),l.jsx("span",{className:"my-4 block h-[3px] w-10 bg-[#ff143f] shadow-[0_0_12px_#f8032d]"}),l.jsx("p",{className:"max-w-lg text-sm leading-7 text-[#aeb0b8]",children:s.text})]})]})})},oN=({items:s,desktopColumns:r=3,mobileCarousel:u=!1})=>{const d=b.useRef(null),[m,p]=b.useState(0),v=r===2?"md:grid-cols-2":"md:grid-cols-3",g=S=>{var N;const E=Math.max(0,Math.min(s.length-1,S)),h=(N=d.current)==null?void 0:N.children[E];h==null||h.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),p(E)},y=()=>{const S=d.current;if(!S||S.clientWidth===0)return;const E=Math.round(S.scrollLeft/S.clientWidth);p(Math.max(0,Math.min(s.length-1,E)))};return u?l.jsxs("div",{children:[l.jsx("div",{ref:d,onScroll:y,className:`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 ${v}`,children:s.map(S=>l.jsx("div",{className:"min-w-full snap-center md:min-w-0",children:l.jsx(sv,{item:S})},S.id))}),l.jsxs("div",{className:"mt-5 flex items-center justify-between md:hidden",children:[l.jsx("button",{type:"button",onClick:()=>g(m-1),disabled:m===0,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver benefício anterior",children:l.jsx(Ry,{className:"h-5 w-5"})}),l.jsx("div",{className:"flex items-center gap-2","aria-label":"Posição do carrossel",children:s.map((S,E)=>l.jsx("button",{type:"button",onClick:()=>g(E),className:`h-2 rounded-full transition-all ${E===m?"w-7 bg-[#ff143f]":"w-2 bg-white/20"}`,"aria-label":`Ver benefício ${E+1}`,"aria-current":E===m?"true":void 0},S.id))}),l.jsx("button",{type:"button",onClick:()=>g(m+1),disabled:m===s.length-1,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver próximo benefício",children:l.jsx(Qv,{className:"h-5 w-5"})})]})]}):l.jsx("div",{className:`grid grid-cols-1 gap-4 ${v}`,children:s.map(S=>l.jsx(sv,{item:S},S.id))})},iN=()=>{const s={CalendarCheck:jy,MapPin:td,Repeat:R2,Coins:ky,Palette:y2,Headphones:Wy},r=Me.whyAdvertise.map((u,d)=>({id:u.id,number:String(d+1).padStart(2,"0"),title:u.title,text:u.description,icon:s[u.iconName]||Jv}));return l.jsx("section",{id:"por-que-anunciar",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:l.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[l.jsx(Is,{eyebrow:"Vantagens VM Mídias",title:"Por que anunciar",accent:"com a VM Mídias",description:"Mais que mídia, resultados de visibilidade e autoridade para o seu negócio.",align:"left",className:"mb-14 lg:mb-20"}),l.jsx(oN,{items:r,desktopColumns:2,mobileCarousel:!0})]})})},sN=()=>{const[s,r]=b.useState(0),u=d=>{r(m=>m===d?null:d)};return l.jsx("section",{id:"faq",className:"relative py-24 lg:py-32 bg-[#030406] border-b border-white/10 overflow-hidden",children:l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[l.jsx(Is,{eyebrow:"Tire suas dúvidas",title:"Perguntas",accent:"frequentes",description:"Tudo o que você precisa saber antes de colocar sua marca nas telas.",className:"mb-16"}),l.jsx("div",{className:"border-t border-white/10",children:Me.faqs.map((d,m)=>{const p=s===m;return l.jsxs("div",{className:"overflow-hidden border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.025]",children:[l.jsxs("button",{type:"button",onClick:()=>u(m),className:"w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":p,children:[l.jsx("span",{className:"text-base sm:text-lg font-bold text-white leading-snug",children:d.question}),l.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ${p?"rotate-180 border-[#F8032D] text-[#F8032D]":"text-gray-400"}`,children:l.jsx(Ty,{className:"w-4 h-4"})})]}),p&&l.jsx("div",{className:"max-w-3xl pb-7 pr-12 text-sm leading-relaxed text-gray-300 animate-in fade-in duration-200",children:d.answer})]},m)})})]})})},rN=()=>l.jsxs("section",{className:"relative py-28 lg:py-40 bg-[#000000] border-b border-white/10 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-indoor-space opacity-30 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 bg-black/70 pointer-events-none"}),l.jsx("div",{className:"absolute inset-0 bg-led-grid opacity-30 pointer-events-none"}),l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none"}),l.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[l.jsx("div",{className:"mb-6 flex justify-center",children:l.jsx($a,{size:"sm",glow:!0})}),l.jsx(Wo,{align:"center",className:"mb-6",children:"Oportunidade limitada de ponto"}),l.jsxs("h2",{className:"text-[clamp(2.8rem,6vw,6.5rem)] font-black text-white tracking-[-0.055em] leading-[0.94] uppercase mb-7",children:["SUA MARCA PODE SER ",l.jsx("br",{className:"hidden sm:inline"}),l.jsx("span",{className:"text-[#F8032D] text-led-glow",children:"A PRÓXIMA A APARECER."})]}),l.jsx("p",{className:"text-base sm:text-xl text-[#A9ACB3] max-w-2xl mx-auto leading-relaxed mb-10",children:"Coloque sua empresa nos pontos onde Capela do Alto realmente circula. Garanta frequência, visibilidade e resultados reais."}),l.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:l.jsx(Us,{id:"cta-final-button",href:"#contato",className:"w-full sm:w-auto sm:px-10 sm:min-h-16",children:"Quero colocar minha marca em destaque"})})]})]}),cN=({selectedPlanName:s,selectedPlanCycle:r})=>{const[u,d]=b.useState({nome:"",empresa:"",plano:"PLANO DESTAQUE (Mais Escolhido)",mensagem:""}),[m,p]=b.useState({});b.useEffect(()=>{s&&d(E=>({...E,plano:s.toUpperCase()==="START"?"PLANO START (05 locais)":"PLANO DESTAQUE (Mais Escolhido)"}))},[s,r]);const v=E=>{const h=E.target.name;d(N=>({...N,[h]:E.target.value})),m[h]&&p(N=>({...N,[h]:void 0}))},g=E=>{E.preventDefault();const h={};if(u.nome.trim()||(h.nome="Informe seu nome."),u.mensagem.trim()||(h.mensagem="Escreva uma mensagem para continuar."),p(h),Object.keys(h).length>0)return;const N=["*CONTATO PELO SITE — VM MÍDIAS*","",`*Nome:* ${u.nome.trim()}`,u.empresa.trim()?`*Empresa:* ${u.empresa.trim()}`:"",`*Interesse:* ${u.plano}${r?` — ${r}`:""}`,`*Mensagem:* ${u.mensagem.trim()}`].filter(Boolean).join(`
`),U=`https://wa.me/${Me.company.whatsappRaw}?text=${encodeURIComponent(N)}`;window.open(U,"_blank","noopener,noreferrer")},y="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#f40b36] focus:ring-0",S=[{value:"PLANO DESTAQUE (Mais Escolhido)",label:"Destaque",detail:"10 locais"},{value:"PLANO START (05 locais)",label:"Start",detail:"5 locais"},{value:"PAINÉIS DE LED (Sob Medida)",label:"Painel de LED",detail:"sob medida"},{value:"OUTRO / TIRAR DÚVIDAS",label:"Tenho dúvidas",detail:"quero orientação"}];return l.jsx("section",{id:"contato",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:l.jsx("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:l.jsxs("div",{className:"grid gap-14 lg:grid-cols-12 lg:gap-20",children:[l.jsxs("div",{className:"lg:col-span-5",children:[l.jsx(Wo,{children:"Contato direto"}),l.jsxs("h2",{className:"brand-section-title !text-[clamp(3.4rem,7vw,7rem)]",children:["Vamos",l.jsx("br",{}),"conversar."]}),l.jsx("p",{className:"mt-6 max-w-md text-base leading-7 text-white/58",children:"Conte o que sua marca precisa. Ao enviar, abriremos o WhatsApp da VM Mídias com a mensagem pronta."}),l.jsxs("div",{className:"mt-10 border-y border-white/10",children:[l.jsxs("a",{href:`https://wa.me/${Me.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4 border-b border-white/10 py-5",children:[l.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:l.jsx(gn,{className:"h-5 w-5"})}),l.jsxs("span",{className:"flex-1",children:[l.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"WhatsApp comercial"}),l.jsx("span",{className:"mt-1 block font-bold text-white",children:Me.company.whatsappFormatted})]}),l.jsx(av,{className:"h-4 w-4 text-white/35 transition-colors group-hover:text-[#25D366]"})]}),l.jsxs("div",{className:"flex items-center gap-4 py-5",children:[l.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:l.jsx(td,{className:"h-5 w-5"})}),l.jsxs("span",{children:[l.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"Atendimento local"}),l.jsx("span",{className:"mt-1 block font-bold text-white",children:Me.company.locationShort})]})]})]})]}),l.jsxs("div",{className:"lg:col-span-7 lg:pt-10",children:[l.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#f40b36]",children:"Mensagem rápida"}),l.jsx("h3",{className:"mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:"Fale direto com nosso time"})]}),l.jsx(gn,{className:"hidden h-8 w-8 sm:block"})]}),l.jsxs("form",{onSubmit:g,noValidate:!0,className:"space-y-7",children:[l.jsxs("div",{className:"grid gap-7 sm:grid-cols-2",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"form-nome",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Seu nome"}),l.jsx("input",{id:"form-nome",name:"nome",type:"text",autoComplete:"name",value:u.nome,onChange:v,placeholder:"Como podemos chamar você?",className:`${y} ${m.nome?"!border-red-500":""}`,"aria-invalid":!!m.nome}),m.nome&&l.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[l.jsx(tv,{className:"h-3.5 w-3.5"}),m.nome]})]}),l.jsxs("div",{children:[l.jsxs("label",{htmlFor:"form-empresa",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:["Empresa"," ",l.jsx("span",{className:"font-normal normal-case text-white/30"})]}),l.jsx("input",{id:"form-empresa",name:"empresa",type:"text",autoComplete:"organization",value:u.empresa,onChange:v,placeholder:"Nome do seu negócio",className:y})]})]}),l.jsxs("fieldset",{children:[l.jsx("legend",{className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Qual é o seu interesse?"}),l.jsx("div",{className:"mt-3 grid grid-cols-2 gap-2",children:S.map(E=>{const h=u.plano===E.value;return l.jsxs("button",{type:"button",onClick:()=>d(N=>({...N,plano:E.value})),"aria-pressed":h,className:`min-h-16 rounded-md border px-3 py-3 text-left transition-colors ${h?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-white/[0.025] hover:border-white/28"}`,children:[l.jsx("span",{className:`block text-sm font-black ${h?"text-white":"text-white/68"}`,children:E.label}),l.jsx("span",{className:"mt-0.5 block text-[10px] uppercase tracking-wider text-white/32",children:E.detail})]},E.value)})})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"form-mensagem",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Sua mensagem"}),l.jsx("textarea",{id:"form-mensagem",name:"mensagem",rows:4,value:u.mensagem,onChange:v,placeholder:"Conte brevemente o que você quer divulgar...",className:`${y} resize-y ${m.mensagem?"!border-red-500":""}`,"aria-invalid":!!m.mensagem}),m.mensagem&&l.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[l.jsx(tv,{className:"h-3.5 w-3.5"}),m.mensagem]})]}),l.jsxs("button",{id:"contact-submit-button",type:"submit",className:"group flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041108] transition-colors hover:bg-[#38e478] sm:w-auto sm:min-w-72",children:[l.jsx(gn,{className:"h-5 w-5"}),"Enviar pelo WhatsApp",l.jsx(av,{className:"h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"})]})]})]})]})})})},uN=({onOpenPrivacyModal:s})=>{const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("footer",{id:"main-footer",className:"bg-[#0A0A0E] border-t border-[#1C1C26] text-white pt-16 pb-12",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E2A]",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("a",{href:"#inicio",className:"inline-block","aria-label":"VM MÍDIAS",children:l.jsx($a,{size:"md"})}),l.jsx("p",{className:"text-xs text-[#F8032D] font-extrabold uppercase tracking-widest",children:Me.company.tagline}),l.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Rede de telas digitais e mídia indoor estratégica em Capela do Alto. Visibilidade constante e frequência que transformam marcas locais em referências."}),l.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[l.jsx("a",{href:Me.company.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-[#F8032D] hover:border-[#F8032D]/40 transition-all","aria-label":"Instagram da VM MÍDIAS",children:l.jsx(o2,{className:"w-4 h-4"})}),l.jsx("a",{href:`https://wa.me/${Me.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all","aria-label":"WhatsApp da VM MÍDIAS",children:l.jsx(gn,{className:"w-4 h-4"})}),l.jsx("a",{href:`mailto:${Me.company.email}`,className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all","aria-label":"E-mail da VM MÍDIAS",children:l.jsx(lv,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Navegação"}),l.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[l.jsx("li",{children:l.jsx("a",{href:"#inicio",className:"hover:text-white transition-colors",children:"Início"})}),l.jsx("li",{children:l.jsx("a",{href:"#onde-estamos",className:"hover:text-white transition-colors",children:"Onde Estamos"})}),l.jsx("li",{children:l.jsx("a",{href:"#como-funciona",className:"hover:text-white transition-colors",children:"Como Funciona"})}),l.jsx("li",{children:l.jsx("a",{href:"#planos",className:"hover:text-white transition-colors",children:"Planos"})}),l.jsx("li",{children:l.jsx("a",{href:"#contato",className:"hover:text-white transition-colors",children:"Contato"})})]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Presença Local"}),l.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(td,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsxs("span",{children:[Me.company.locationShort," — Brasil"]})]}),l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(Fy,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsx("span",{children:Me.company.domain})]}),l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(lv,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsx("span",{children:Me.company.email})]}),l.jsxs("li",{className:"flex items-start gap-2.5",children:[l.jsx(gn,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),l.jsx("span",{children:"Atendimento comercial via WhatsApp"})]})]})]})]}),l.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[l.jsxs("div",{children:["© 2026 ",Me.company.name,". Todos os direitos reservados."]}),l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx("button",{type:"button",onClick:s,className:"text-gray-400 hover:text-white transition-colors underline underline-offset-4",children:"Política de Privacidade (LGPD)"}),l.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-1 text-gray-400 hover:text-[#F8032D] transition-colors","aria-label":"Voltar ao topo da página",children:[l.jsx("span",{children:"Topo"}),l.jsx(yy,{className:"w-3.5 h-3.5"})]})]})]})]})})},dN=({customMessage:s})=>{const[r,u]=b.useState(!1),d=s||"Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.",m=`https://wa.me/${Me.company.whatsappRaw}?text=${encodeURIComponent(d)}`;return l.jsxs("div",{id:"floating-whatsapp-container",className:"fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto",children:[r&&l.jsxs("div",{className:"mb-3 max-w-xs bg-[#111116] border border-[#22222E] rounded-xl p-3.5 shadow-2xl shadow-black text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative",children:[l.jsx("button",{type:"button",onClick:()=>u(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-white","aria-label":"Fechar mensagem",children:l.jsx(Gl,{className:"w-3.5 h-3.5"})}),l.jsxs("div",{className:"font-bold text-white mb-1 flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Atendimento VM MÍDIAS"]}),l.jsx("p",{className:"text-gray-300",children:"Dúvidas sobre os planos START e DESTAQUE? Fale diretamente conosco pelo WhatsApp."})]}),l.jsxs("a",{id:"floating-whatsapp-button",href:m,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>u(!0),className:"group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400","aria-label":"Falar com a VM MÍDIAS no WhatsApp",children:[l.jsx("span",{className:"absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60"}),l.jsx(gn,{className:"w-7 h-7 transition-transform group-hover:scale-110"}),l.jsx("span",{className:"absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0E]"})]})]})},vt="pt-3 text-base font-black text-white",Lu="list-disc space-y-1.5 pl-5 text-white/58",t0=()=>l.jsxs("div",{className:"space-y-4 text-sm leading-7 text-white/68",children:[l.jsxs("p",{children:["Esta Política explica como a"," ",l.jsx("strong",{className:"text-white",children:Me.company.legalName})," ","(“VM MÍDIAS”), na qualidade de controladora, trata dados pessoais de visitantes, interessados, clientes e representantes de empresas que usam o site ",Me.company.domain," e seus canais de atendimento."]}),l.jsx("p",{children:"O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e os princípios de finalidade, necessidade, transparência, segurança e prevenção."}),l.jsx("h4",{className:vt,children:"1. Dados que podemos coletar"}),l.jsx("p",{children:"Dependendo do canal utilizado, podemos receber:"}),l.jsxs("ul",{className:Lu,children:[l.jsx("li",{children:"nome, empresa, telefone/WhatsApp e e-mail;"}),l.jsx("li",{children:"plano, produto ou serviço de interesse e mensagens comerciais;"}),l.jsx("li",{children:"briefing de criação, tipo de peça, objetivo, textos, estilo, prazo, chamada para ação e informações que deverão aparecer na campanha;"}),l.jsx("li",{children:"arquivos enviados para criação de vídeos, como logos, fotos, referências, documentos e vídeos, além de links do Drive, Canva ou Dropbox;"}),l.jsx("li",{children:"protocolo, situação do atendimento e datas de criação e atualização do pedido;"}),l.jsx("li",{children:"dados técnicos essenciais, como registros de acesso e endereço IP, que podem ser processados pela hospedagem e pelos serviços de infraestrutura para segurança e funcionamento."})]}),l.jsx("p",{children:"Não solicitamos senhas, dados bancários ou dados pessoais sensíveis nos formulários. Não inclua esse tipo de informação no briefing ou nos links compartilhados."}),l.jsx("h4",{className:vt,children:"2. Para que usamos os dados"}),l.jsxs("ul",{className:Lu,children:[l.jsx("li",{children:"responder contatos, dúvidas e solicitações de orçamento;"}),l.jsx("li",{children:"apresentar planos, propostas e condições comerciais;"}),l.jsx("li",{children:"organizar, criar, revisar, aprovar e programar artes e vídeos contratados;"}),l.jsx("li",{children:"acompanhar o histórico e o andamento de cada solicitação;"}),l.jsx("li",{children:"prevenir abuso, fraude, spam e incidentes de segurança;"}),l.jsx("li",{children:"cumprir contratos e obrigações legais ou regulatórias."})]}),l.jsx("h4",{className:vt,children:"3. Bases legais"}),l.jsx("p",{children:"Conforme o contexto, o tratamento poderá ocorrer com base no consentimento, na execução de contrato ou de procedimentos preliminares solicitados pelo titular, no cumprimento de obrigação legal ou regulatória e no legítimo interesse da VM MÍDIAS, sempre respeitando os direitos e as expectativas do titular."}),l.jsx("h4",{className:vt,children:"4. Armazenamento e compartilhamento"}),l.jsx("p",{children:"Os dados podem ser tratados pela equipe da VM MÍDIAS e por fornecedores necessários à operação, estritamente para as finalidades desta Política, incluindo:"}),l.jsxs("ul",{className:Lu,children:[l.jsx("li",{children:"HostGator, responsável pela hospedagem do site;"}),l.jsx("li",{children:"Supabase, utilizado para registrar solicitações e armazenar de forma privada os materiais enviados para produção;"}),l.jsx("li",{children:"n8n, quando utilizado para automatizar o fluxo interno de atendimento;"}),l.jsx("li",{children:"WhatsApp/Meta, quando o visitante decide iniciar atendimento por esse canal;"}),l.jsx("li",{children:"serviços escolhidos pelo cliente para compartilhar arquivos por link, sujeitos às próprias políticas de privacidade."})]}),l.jsx("p",{children:"A VM MÍDIAS não vende nem aluga dados pessoais. Alguns fornecedores podem utilizar infraestrutura localizada fora do Brasil; nesses casos, buscamos utilizar serviços reconhecidos e medidas compatíveis com a legislação aplicável."}),l.jsx("h4",{className:vt,children:"5. Prazo de conservação"}),l.jsx("p",{children:"Mantemos os dados somente pelo tempo necessário para atender a solicitação, executar a relação comercial, preservar o histórico de criação e cumprir obrigações legais. Depois desse período, eles poderão ser eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida por lei."}),l.jsx("h4",{className:vt,children:"6. Cookies, recursos técnicos e links externos"}),l.jsx("p",{children:"O site utiliza recursos técnicos necessários para navegação, segurança e envio dos formulários. Não utilizamos os dados dos formulários para vender perfis de publicidade. Links externos, como Instagram, WhatsApp, Drive, Canva ou Dropbox, passam a seguir as políticas dos respectivos serviços quando acessados."}),l.jsx("h4",{className:vt,children:"7. Segurança"}),l.jsx("p",{children:"Adotamos controles compatíveis com o porte e a natureza da operação para reduzir riscos de acesso não autorizado, alteração, perda ou divulgação indevida. Nenhum sistema é completamente imune a incidentes, mas revisamos acessos e integrações para limitar o tratamento ao necessário."}),l.jsx("h4",{className:vt,children:"8. Direitos do titular"}),l.jsx("p",{children:"Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando aplicável, portabilidade conforme regulamentação, oposição, revogação do consentimento e revisão de decisões exclusivamente automatizadas que afetem seus interesses."}),l.jsx("h4",{className:vt,children:"9. Como falar sobre seus dados"}),l.jsxs("p",{children:["Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail"," ",l.jsx("strong",{className:"text-white",children:Me.company.email})," ou pelo WhatsApp oficial ",Me.company.whatsappFormatted,". Podemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger os dados envolvidos."]}),l.jsx("h4",{className:vt,children:"10. Atualizações desta Política"}),l.jsx("p",{children:"Esta Política poderá ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão disponíveis nesta página."})]}),mN=({isOpen:s,onClose:r})=>s?l.jsx("div",{id:"privacy-policy-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",children:l.jsxs("div",{className:"relative w-full max-w-3xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto",children:[l.jsx("button",{type:"button",onClick:r,className:"absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A24] transition-colors","aria-label":"Fechar Política de Privacidade",children:l.jsx(Gl,{className:"w-5 h-5"})}),l.jsxs("div",{className:"flex items-center gap-3 mb-6 pb-4 border-b border-[#22222E]",children:[l.jsx("div",{className:"p-2.5 rounded-lg bg-[#F8032D]/10 text-[#F8032D] border border-[#F8032D]/20",children:l.jsx(ld,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h3",{id:"privacy-modal-title",className:"text-xl font-black text-white",children:"Política de Privacidade & LGPD"}),l.jsx("p",{className:"text-xs text-gray-400",children:"Atualizado em 28 de setembro de 2026."})]})]}),l.jsx(t0,{}),l.jsx("div",{className:"mt-8 pt-4 border-t border-[#22222E] flex justify-end",children:l.jsx("button",{type:"button",onClick:r,className:"px-6 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white font-bold text-sm shadow-led-sm transition-all",children:"Entendido e Fechar"})})]})}):null;function fN(){return b.useEffect(()=>{const s=document.title;return document.title="Política de Privacidade | VM MÍDIAS",()=>{document.title=s}},[]),l.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[l.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex h-[76px] max-w-5xl items-center justify-between px-5 sm:px-8",children:[l.jsx("a",{href:"/","aria-label":"Voltar ao site da VM MÍDIAS",children:l.jsx($a,{size:"sm"})}),l.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white",children:[l.jsx(Pl,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})}),l.jsx("main",{className:"px-5 py-12 sm:px-8 sm:py-16",children:l.jsxs("article",{className:"brand-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-10 lg:p-12",children:[l.jsxs("header",{className:"mb-8 flex items-start gap-4 border-b border-white/10 pb-7",children:[l.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]",children:l.jsx(ld,{className:"h-6 w-6"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Transparência e LGPD"}),l.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:"Política de Privacidade"}),l.jsx("p",{className:"mt-2 text-xs text-white/40",children:"Atualizada em 29 de setembro de 2026."})]})]}),l.jsx(t0,{})]})})]})}const pN=`Act like um Diretor Criativo Sênior, Motion Designer, Diretor de Arte, Especialista em Lettering Animado, Branding e Prompt Engineer especializado em criação de publicidade audiovisual para MÍDIA INDOOR e geração de vídeo por IA no Google Flow.

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

Take a deep breath and work on this problem step-by-step.`,hN=`Act like a Senior Advertising Art Director, Creative Director, Indoor Media Specialist, Visual Key Designer, Typography & Lettering Director, Brand Designer and AI Image Prompt Engineer with extensive experience creating high-impact advertising campaigns for digital indoor media, vertical displays, digital signage, retail screens, elevator screens, shopping mall panels, corporate displays, supermarket screens, clinics, gyms, waiting areas, restaurants, stores and high-traffic indoor environments.

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

Take a deep breath and work on this problem step-by-step.`;function n0(s,r){const u=s==null?void 0:s.trim();if(!u)throw new Error(`Configuração do Supabase ausente. Defina ${r} no arquivo .env.`);return u}const ea=n0("https://dtmoboiwgqaphlthoexe.supabase.co","VITE_SUPABASE_URL"),fa=n0("sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M","VITE_SUPABASE_PUBLISHABLE_KEY"),od="video-request-assets",Vs="business-assets",Gs="vm-admin-supabase-session",vN=od,l0=Vs,rv="vm-manual-news-refresh-v1";function o0(s){const r=s.lastIndexOf("."),u=r>=0?s.slice(r).toLowerCase():"";return`${(r>=0?s.slice(0,r):s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||"arquivo"}${u.replace(/[^a-z0-9.]/g,"")}`}function ei(s){return s.split("/").map(encodeURIComponent).join("/")}async function gN(s,r,u){const d=`solicitacoes/${u}`,m=r.map(async(p,v)=>{const g=`${d}/${s}/${String(v+1).padStart(2,"0")}-${o0(p.name)}`,y=await fetch(`${ea}/storage/v1/object/${od}/${ei(g)}`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${fa}`,"Content-Type":p.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:p});if(!y.ok){const S=await y.text();throw console.error("Falha ao enviar material do vídeo:",S),new Error(`Não foi possível enviar o arquivo “${p.name}”. Verifique o formato e tente novamente.`)}return{path:g,name:p.name,size:p.size,mime_type:p.type||"application/octet-stream"}});return Promise.all(m)}async function i0(s,r,u=0){const d=r.map(async(m,p)=>{const v=`negocios/${s}/${String(u+p+1).padStart(2,"0")}-${crypto.randomUUID().slice(0,8)}-${o0(m.name)}`;if(!(await fetch(`${ea}/storage/v1/object/${Vs}/${ei(v)}`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${fa}`,"Content-Type":m.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:m})).ok)throw new Error(`Não foi possível enviar “${m.name}”.`);return{path:v,name:m.name,size:m.size,mime_type:m.type||"application/octet-stream"}});return Promise.all(d)}function Pn(s){return`${ea}/storage/v1/object/public/${Vs}/${ei(s)}`}async function xN(s){if(!(await fetch(`${ea}/rest/v1/rpc/create_business_secure`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${fa}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:s.id,p_name:s.name,p_whatsapp:s.whatsapp,p_instagram:s.instagram,p_address:s.address,p_segment:s.segment,p_description:s.description,p_assets:s.assets,p_consent:s.consent})})).ok)throw new Error("Não foi possível cadastrar o negócio agora.")}async function s0(){const s=await fetch(`${ea}/rest/v1/rpc/list_businesses_public`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${fa}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!s.ok)throw new Error("Não foi possível carregar os negócios. Aplique a nova migração no Supabase.");return await s.json()}async function bN(s,r,u){const d=await fetch(`${ea}/rest/v1/rpc/update_business_secure`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${fa}`,"Content-Type":"application/json"},body:JSON.stringify({p_business_id:s,p_name:r.name,p_whatsapp:r.whatsapp,p_instagram:r.instagram,p_address:r.address,p_segment:r.segment,p_description:r.description,p_new_assets:u})});if(!d.ok){const m=await d.text();throw/LIMITE_IMAGENS/i.test(m)?new Error("O negócio pode possuir no máximo 10 imagens."):new Error("Não foi possível atualizar as informações do negócio.")}}async function yN(s){const r=await fetch(`${ea}/rest/v1/rpc/create_video_request_secure`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${fa}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:s.id,p_protocol:s.protocol,p_business_id:s.business_id,p_campaign_objective:s.campaign_objective,p_objective_other:s.objective_other,p_video_idea:s.video_idea,p_uploaded_assets:s.uploaded_assets,p_consent:s.consent})});if(!r.ok){const u=await r.text();throw console.error("Falha ao registrar solicitação de vídeo:",u),new Error("Não foi possível registrar sua solicitação agora.")}}function id(){try{const s=localStorage.getItem(Gs);if(!s)return null;const r=JSON.parse(s);return!r.access_token||!r.expires_at?null:r}catch{return null}}function Yl(){localStorage.removeItem(Gs)}async function sd(s){const r=await fetch(`${ea}/rest/v1/rpc/is_vm_admin`,{method:"POST",headers:{apikey:fa,Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!r.ok)throw r.status===404?new Error("A proteção administrativa ainda não foi instalada no Supabase."):new Error("Não foi possível verificar a permissão administrativa.");if(await r.json()!==!0)throw new Error("Este usuário não possui acesso administrativo.")}async function rd(s,r){const u=await fetch(`${ea}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:fa,"Content-Type":"application/json"},body:JSON.stringify({email:s,password:r})});if(!u.ok){let p="";try{const v=await u.json();p=String((v==null?void 0:v.msg)||(v==null?void 0:v.message)||(v==null?void 0:v.error_description)||"")}catch{}throw/email not confirmed/i.test(p)?new Error("Este usuário ainda não confirmou o e-mail no Supabase."):new Error("E-mail ou senha inválidos.")}const d=await u.json(),m={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(d.expires_in||3600),user:d.user};return await sd(m.access_token),localStorage.setItem(Gs,JSON.stringify(m)),m}async function NN(s){const r=await fetch(`${ea}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:fa,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:s.refresh_token})});if(!r.ok)throw Yl(),new Error("Sua sessão expirou. Entre novamente.");const u=await r.json(),d={access_token:u.access_token,refresh_token:u.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(u.expires_in||3600),user:u.user};return await sd(d.access_token),localStorage.setItem(Gs,JSON.stringify(d)),d}async function Po(s){return s.expires_at>Math.floor(Date.now()/1e3)+60?(await sd(s.access_token),s):NN(s)}function Xn(s){return{apikey:fa,Authorization:`Bearer ${s}`}}async function EN(s){const r=await fetch(`${ea}/rest/v1/video_requests?select=*&order=created_at.desc`,{headers:Xn(s),cache:"no-store"});if(!r.ok)throw r.status===401?new Error("Sua sessão expirou. Entre novamente."):new Error("Não foi possível carregar as solicitações. Confira as permissões do Supabase.");return await r.json()}async function jN(s){const r=await fetch(`${ea}/rest/v1/businesses?select=id,name,whatsapp,instagram,address,segment,description,assets,consent,created_at,updated_at&order=name.asc`,{headers:Xn(s),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar os negócios no painel.");return await r.json()}function SN(s=new Date){const r=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(s).filter(m=>m.type!=="literal").map(m=>[m.type,Number(m.value)])),u=Date.UTC(r.year,r.month-1,r.day);let d=u;for(let m=0;m<2;m+=1){const p=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(new Date(d)).filter(g=>g.type!=="literal").map(g=>[g.type,Number(g.value)])),v=Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second);d=u-(v-Math.floor(d/1e3)*1e3)}return new Date(d).toISOString()}async function AN(s){const r=SN(),u=await fetch(`${ea}/rest/v1/news_articles?select=*&published_at=gte.${encodeURIComponent(r)}&order=published_at.desc`,{headers:Xn(s),cache:"no-store"});if(!u.ok)throw u.status===404?new Error("O painel de notícias ainda não foi instalado no Supabase. Execute a migração 202610190001_news_moderation_queue.sql."):new Error("Não foi possível carregar a fila de notícias.");return await u.json()}async function r0(s,r,u){const d=await fetch(`${ea}/rest/v1/rpc/moderate_news_article_admin`,{method:"POST",headers:{...Xn(s),"Content-Type":"application/json"},body:JSON.stringify({p_article_id:r,p_decision:u})});if(!d.ok)throw d.status===401?new Error("Sua sessão expirou. Entre novamente."):d.status===404?new Error("A aprovação de notícias ainda não foi instalada no Supabase."):new Error("Não foi possível atualizar esta notícia.")}async function wN(s,r){await r0(s,r,"approved")}async function ON(s,r,u){const d=await fetch(`${ea}/rest/v1/rpc/remove_business_asset_admin`,{method:"POST",headers:{...Xn(s),"Content-Type":"application/json"},body:JSON.stringify({p_business_id:r,p_asset_path:u})});if(!d.ok)throw d.status===401?new Error("Sua sessão expirou. Entre novamente."):d.status===404?new Error("A exclusão ainda não foi ativada no Supabase. Execute a migração 202610060001_delete_business_assets_admin.sql."):new Error("Não foi possível excluir esta imagem do negócio.");const m=await fetch(`${ea}/storage/v1/object/${Vs}/${ei(u)}`,{method:"DELETE",headers:Xn(s)});!m.ok&&m.status!==404&&console.warn("A imagem saiu do cadastro, mas o arquivo não pôde ser removido do Storage.")}async function c0(s,r,u=3600){const d=await fetch(`${ea}/storage/v1/object/sign/${od}/${ei(r)}`,{method:"POST",headers:{...Xn(s),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:u})});if(!d.ok)throw new Error("Não foi possível abrir este arquivo.");const m=await d.json(),p=m.signedURL||m.signedUrl;if(!p)throw new Error("O Supabase não retornou o link do arquivo.");return p.startsWith("http")?p:`${ea}/storage/v1${p}`}const u0={institucional:"Publicidade institucional da marca",produto_servico:"Divulgar determinado produto ou serviço",promocao:"Promoção exclusiva e/ou inédita",fortalecer_marca:"Fortalecer a marca",visita_estabelecimento:"Incentivar a visita no estabelecimento",outro:"Outro"};function cv(s){return s==null||s===""||Array.isArray(s)&&s.length===0||typeof s=="object"&&s!==null&&Object.keys(s).length===0}function qs(s){return Array.isArray(s)?s.map(qs).filter(r=>!cv(r)):s&&typeof s=="object"?Object.fromEntries(Object.entries(s).filter(([,r])=>!cv(r)).map(([r,u])=>[r,qs(u)])):s}function TN(s){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(s))}function CN(s,r,u){return qs({negocio:{id:s.id,nome:s.name,whatsapp:s.whatsapp,instagram:s.instagram,endereco:s.address,segmento:s.segment,descricao:s.description,imagens:s.assets.map(d=>({nome:d.name,caminho_bucket:`${l0}/${d.path}`,url:Pn(d.path),tipo:d.mime_type})),cadastrado_em:s.created_at},solicitacao_video:{id:r.id,protocolo:r.protocol,objetivo:u0[r.campaign_objective||""]||r.campaign_objective,outro_objetivo:r.objective_other,descricao_do_video:r.video_idea,imagens_adicionais:r.uploaded_assets.map(d=>({nome:d.name,caminho_bucket:`${vN}/${d.path}`,url:u[d.path],url_valida_por:"7 dias",tipo:d.mime_type})),formato:"Vertical 9:16",duracao_segundos:r.duration_seconds,status:r.status,solicitado_em:r.created_at},prompt_para_ia:pN.trim()})}function RN(s){return qs({negocio:{id:s.id,nome:s.name,whatsapp:s.whatsapp,instagram:s.instagram,endereco:s.address,segmento:s.segment,descricao:s.description,imagens:s.assets.map(r=>({nome:r.name,caminho_bucket:`${l0}/${r.path}`,url:Pn(r.path),tipo:r.mime_type})),cadastrado_em:s.created_at},prompt_para_visual_key:hN.trim()})}function uv(){const[s,r]=b.useState(()=>id()),[u,d]=b.useState([]),[m,p]=b.useState([]),[v,g]=b.useState(""),[y,S]=b.useState(""),[E,h]=b.useState(!!s),[N,U]=b.useState(""),I=async q=>{h(!0),U("");try{const Q=await Po(q);r(Q);const[V,ie]=await Promise.all([jN(Q.access_token),EN(Q.access_token)]);d(V),p(ie)}catch(Q){const V=Q instanceof Error?Q.message:"Não foi possível carregar o painel.";U(V),(V.includes("sessão")||V.includes("administrativ")||V.includes("permissão"))&&(Yl(),r(null))}finally{h(!1)}};b.useEffect(()=>{document.title="Painel administrativo | VM MÍDIAS",s&&I(s)},[]);const L=b.useMemo(()=>{const q=u.map(V=>({business:V,requests:m.filter(ie=>ie.business_id===V.id)})),Q=y.trim().toLocaleLowerCase("pt-BR");return Q?q.filter(({business:V})=>`${V.name} ${V.segment}`.toLocaleLowerCase("pt-BR").includes(Q)):q},[u,y,m]),B=L.find(q=>q.business.id===v)||null;return s?l.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[l.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("a",{href:"/",children:l.jsx($a,{size:"sm"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),l.jsx("h1",{className:"font-black",children:"Negócios e solicitações"})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("a",{href:"/admin/verao-premiado","aria-label":"Verão Premiado 2027",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx("span",{className:"text-[#ffcc0b]",children:"☀"}),l.jsx("span",{className:"hidden md:inline",children:"Verão 2027"})]}),l.jsxs("a",{href:"/admin/noticias","aria-label":"Aprovação de notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(Kv,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Notícias"})]}),l.jsxs("button",{onClick:()=>void I(s),disabled:E,className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(nd,{className:`h-4 w-4 ${E?"animate-spin":""}`}),l.jsx("span",{className:"hidden sm:inline",children:"Atualizar"})]}),l.jsxs("button",{onClick:()=>{Yl(),r(null)},className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(ad,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Sair"})]})]})]})}),l.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[l.jsxs("section",{className:"flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Painel de clientes"}),l.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Um card para cada negócio."})]}),l.jsxs("label",{className:"relative block w-full max-w-md",children:[l.jsx(ks,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),l.jsx("input",{value:y,onChange:q=>S(q.target.value),className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]",placeholder:"Buscar negócio"})]})]}),N&&l.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:N}),E&&!u.length?l.jsx("div",{className:"flex min-h-64 items-center justify-center",children:l.jsx(ma,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):B?l.jsx(MN,{group:B,session:s,onBack:()=>g(""),onBusinessUpdated:q=>d(Q=>Q.map(V=>V.id===q.id?q:V))}):L.length?l.jsx("section",{className:"mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",children:L.map(q=>l.jsx(_N,{group:q,onOpen:()=>g(q.business.id)},q.business.id))}):l.jsx("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhum negócio cadastrado."})]})]}):l.jsx(cd,{loading:E,error:N,onLogin:async(q,Q)=>{h(!0),U("");try{const V=await rd(q,Q);r(V),await I(V)}catch(V){U(V instanceof Error?V.message:"Não foi possível entrar.")}finally{h(!1)}}})}function _N({group:s,onOpen:r}){const u=s.business.assets[0];return l.jsxs("button",{onClick:r,className:"group rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-1 hover:border-[#f40b36]/55",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:u?l.jsx("img",{src:Pn(u.path),alt:"",className:"h-full w-full object-contain p-2"}):l.jsx($l,{className:"h-7 w-7 text-white/30"})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("h3",{className:"truncate text-xl font-black",children:s.business.name}),l.jsx("p",{className:"mt-1 truncate text-sm text-white/45",children:s.business.segment})]}),l.jsx(Qv,{className:"h-5 w-5 text-white/30 group-hover:text-[#ff3155]"})]}),l.jsx("div",{className:"mt-5 border-t border-white/10 pt-4",children:l.jsxs("span",{className:"rounded-full border border-[#f40b36]/25 bg-[#f40b36]/10 px-3 py-1.5 text-xs font-black text-[#ff6a82]",children:[s.requests.length," ",s.requests.length===1?"solicitação":"solicitações"]})})]})}function MN({group:s,session:r,onBack:u,onBusinessUpdated:d}){const m=s.business,[p,v]=b.useState(!1),[g,y]=b.useState(""),[S,E]=b.useState(""),[h,N]=b.useState(""),U=async()=>{y("");try{await navigator.clipboard.writeText(JSON.stringify(RN(m),null,2)),v(!0),window.setTimeout(()=>v(!1),1800)}catch{y("Não foi possível copiar o JSON para a área de transferência.")}},I=async L=>{if(window.confirm(`Deseja realmente excluir a imagem “${L.name}”? Esta ação não poderá ser desfeita.`)){E(L.path),N("");try{await ON(r.access_token,m.id,L.path),d({...m,assets:m.assets.filter(q=>q.path!==L.path),updated_at:new Date().toISOString()})}catch(q){N(q instanceof Error?q.message:"Não foi possível excluir esta imagem.")}finally{E("")}}};return l.jsxs("section",{className:"mt-7",children:[l.jsxs("button",{onClick:u,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[l.jsx(Pl,{className:"h-4 w-4"}),"Todos os negócios"]}),l.jsxs("div",{className:"mt-5 rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[l.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[l.jsx("div",{className:"flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:m.assets[0]?l.jsx("img",{src:Pn(m.assets[0].path),alt:"",className:"h-full w-full object-contain p-2"}):l.jsx($l,{className:"h-8 w-8 text-white/30"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.16em] text-[#ff3155]",children:"Negócio"}),l.jsx("h2",{className:"mt-1 text-3xl font-black sm:text-4xl",children:m.name}),l.jsx("p",{className:"mt-2 text-sm text-white/50",children:[m.segment,m.whatsapp,m.instagram,m.address].filter(Boolean).join(" · ")})]})]}),l.jsxs("button",{type:"button",onClick:()=>void U(),className:"inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-5 text-center text-xs font-black uppercase leading-tight tracking-[0.08em] transition hover:bg-[#ff3155]",children:[p?l.jsx(yn,{className:"h-4 w-4"}):l.jsx(Xv,{className:"h-4 w-4"}),p?"JSON copiado":"Copiar JSON para Visual Key"]})]}),g&&l.jsx("p",{className:"mt-4 text-sm text-red-300",children:g}),m.description&&l.jsx("p",{className:"mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60",children:m.description}),l.jsx(d0,{assets:m.assets,publicAssets:!0,deletingPath:S,onDelete:L=>void I(L)}),h&&l.jsx("p",{className:"mt-4 text-sm text-red-300",children:h})]}),l.jsx("h3",{className:"mt-8 text-2xl font-black",children:"Solicitações deste negócio"}),s.requests.length?l.jsx("div",{className:"mt-5 grid gap-5 xl:grid-cols-2",children:s.requests.map(L=>l.jsx(DN,{business:m,request:L,session:r},L.id))}):l.jsx("div",{className:"mt-5 rounded-xl border border-dashed border-white/15 p-12 text-center text-white/45",children:"Este negócio ainda não solicitou vídeos."})]})}function DN({business:s,request:r,session:u}){const[d,m]=b.useState(!1),[p,v]=b.useState(!1),[g,y]=b.useState(""),S=async()=>{v(!0),y("");try{const E=await Promise.all(r.uploaded_assets.map(async h=>[h.path,await c0(u.access_token,h.path,604800)]));await navigator.clipboard.writeText(JSON.stringify(CN(s,r,Object.fromEntries(E)),null,2)),m(!0),window.setTimeout(()=>m(!1),1800)}catch(E){y(E instanceof Error?E.message:"Não foi possível gerar o JSON.")}finally{v(!1)}};return l.jsxs("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:[l.jsxs("header",{className:"flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase text-white/60",children:r.status}),l.jsx("h4",{className:"mt-4 text-xl font-black",children:u0[r.campaign_objective||""]||"Novo vídeo"}),l.jsxs("p",{className:"mt-2 text-xs text-white/40",children:[r.protocol," · ",TN(r.created_at)]})]}),l.jsxs("button",{onClick:()=>void S(),disabled:p,className:"inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase tracking-[0.08em] disabled:opacity-60",children:[p?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):d?l.jsx(yn,{className:"h-4 w-4"}):l.jsx(Xv,{className:"h-4 w-4"}),p?"Gerando URLs":d?"JSON copiado":"Copiar JSON"]})]}),l.jsxs("div",{className:"p-5",children:[r.video_idea&&l.jsx("p",{className:"text-sm leading-7 text-white/65",children:r.video_idea}),r.objective_other&&l.jsxs("p",{className:"mt-3 text-sm text-white/55",children:["Outro objetivo: ",r.objective_other]}),r.uploaded_assets.length>0&&l.jsx(d0,{assets:r.uploaded_assets,accessToken:u.access_token}),g&&l.jsx("p",{className:"mt-4 text-xs text-red-300",children:g})]})]})}function d0({assets:s,accessToken:r,publicAssets:u=!1,deletingPath:d="",onDelete:m}){const[p,v]=b.useState(()=>u?Object.fromEntries(s.map(g=>[g.path,Pn(g.path)])):{});return b.useEffect(()=>{u||!r||Promise.all(s.map(async g=>[g.path,await c0(r,g.path,3600)])).then(g=>v(Object.fromEntries(g))).catch(()=>{})},[r,s,u]),l.jsx("div",{className:"mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",children:s.map(g=>{const y=p[g.path];return l.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/25 p-2",children:[g.mime_type.startsWith("image/")&&y?l.jsx("img",{src:y,alt:g.name,className:"h-24 w-full rounded-lg object-cover"}):l.jsx("div",{className:"flex h-24 items-center justify-center",children:l.jsx($v,{className:"h-7 w-7 text-white/30"})}),l.jsx("span",{className:"mt-2 block truncate text-[11px] font-bold text-white/70",children:g.name}),y&&l.jsxs("a",{href:y,download:g.name,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-[10px] font-black uppercase text-white/70 hover:border-[#f40b36]/55",children:[l.jsx(Jo,{className:"h-3.5 w-3.5"}),"Baixar"]}),m&&l.jsxs("button",{type:"button",onClick:()=>m(g),disabled:!!d,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-red-400/25 bg-red-400/10 text-[10px] font-black uppercase text-red-200 transition hover:border-red-400/60 hover:bg-red-400/15 disabled:cursor-wait disabled:opacity-50",children:[d===g.path?l.jsx(ma,{className:"h-3.5 w-3.5 animate-spin"}):l.jsx(a0,{className:"h-3.5 w-3.5"}),d===g.path?"Excluindo":"Excluir imagem"]})]},g.path)})})}function cd({onLogin:s,loading:r,error:u}){const[d,m]=b.useState(""),[p,v]=b.useState(""),g=y=>{y.preventDefault(),s(d.trim(),p)};return l.jsxs("div",{className:"min-h-screen bg-[#050609] px-5 py-10 text-white",children:[l.jsxs("a",{href:"/",className:"mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-white/55",children:[l.jsx(Pl,{className:"h-4 w-4"}),"Voltar ao site"]}),l.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center",children:l.jsxs("form",{onSubmit:g,className:"w-full rounded-2xl border border-white/12 bg-[#0d0f13] p-6 sm:p-9",children:[l.jsx($a,{size:"md"}),l.jsx(nv,{className:"mt-8 h-10 w-10 text-[#ff3155]"}),l.jsx("p",{className:"mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Acesso restrito"}),l.jsx("h1",{className:"mt-2 text-3xl font-black",children:"Painel administrativo"}),l.jsxs("label",{className:"mt-7 block text-sm font-bold",children:["E-mail",l.jsx("input",{required:!0,type:"email",value:d,onChange:y=>m(y.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),l.jsxs("label",{className:"mt-5 block text-sm font-bold",children:["Senha",l.jsx("input",{required:!0,type:"password",value:p,onChange:y=>v(y.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),u&&l.jsx("p",{className:"mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100",children:u}),l.jsxs("button",{disabled:r,className:"brand-button brand-button-primary mt-6 w-full",children:[r?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):l.jsx(nv,{className:"h-4 w-4"}),"Entrar no painel"]})]})})]})}const dv={pending:"Avaliar para Stories",approved:"Fila de Stories",published:"Publicadas nos Stories",rejected:"Fora dos Stories"},zN={waiting_approval:"Aguardando aprovação",queued:"Na fila",publishing:"Publicando agora",published:"Publicada no Instagram",failed:"Tentará novamente",needs_review:"Requer conferência",skipped:"Fora da fila"};function $o(s){return s.moderation_status==="pending"?"pending":s.moderation_status==="rejected"?"rejected":s.story_status==="published"?"published":"approved"}function UN(s){return s?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(s)):""}const qN=/(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;function Gu(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function mv(s){const r={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'};let u=String(s||"").replace(/<!\[CDATA\[|\]\]>/gi,"");for(let d=0;d<3;d+=1){const m=u;if(u=u.replace(/&#(x?[0-9a-f]+);/gi,(p,v)=>{const g=Number.parseInt(v.replace(/^x/i,""),/^x/i.test(v)?16:10);return Number.isFinite(g)&&g<=1114111?String.fromCodePoint(g):p}).replace(/&(amp|apos|gt|lt|nbsp|quot);/gi,(p,v)=>r[v.toLowerCase()]),u===m)break}return u.replace(/\s+/g," ").trim()}function LN(s){return{...s,title:mv(s.title),summary:mv(s.summary)||null}}function BN(s){const r=Gu(s.title),u=Gu(`${s.title} ${s.summary||""}`),d=/\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;return!(/^videos?\s*:/.test(r)||/\b(assista|acompanhe|veja)\b/.test(u)&&/\b(videos?|jornal|edicao)\b/.test(u)||d.test(u)&&/\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(u)||/^ao vivo\s*:/.test(r))}function ud(s){return/^https?:\/\//i.test(s.image_url||"")&&!qN.test(s.image_url||"")}function HN(s){const r=Date.now()-1728e5,u=new Set,d=new Map,m=[];for(const p of s){if($o(p)!=="pending"||!ud(p)||!BN(p))continue;const v=Date.parse(p.published_at);if(Number.isFinite(v)&&v<r)continue;const g=Gu(p.title).trim();if(!g||u.has(g))continue;const y=d.get(p.source_name)||0;if(!(y>=3)&&(u.add(g),d.set(p.source_name,y+1),m.push(p),m.length>=24))break}return m}function kN(){const[s,r]=b.useState(()=>id()),[u,d]=b.useState([]),[m,p]=b.useState("pending"),[v,g]=b.useState(!!s),[y,S]=b.useState(!1),[E,h]=b.useState(""),[N,U]=b.useState(""),[I,L]=b.useState(""),[B,q]=b.useState(""),[Q,V]=b.useState(""),ie=async k=>{g(!0),V("");try{const le=await Po(k);r(le);const ne=await AN(le.access_token),ze=ne.find(Ye=>Ye.external_id===rv);U((ze==null?void 0:ze.id)||""),d(ne.filter(Ye=>Ye.external_id!==rv).map(LN))}catch(le){const ne=le instanceof Error?le.message:"Não foi possível carregar as notícias.";V(ne),(ne.includes("sessão")||ne.includes("administrativ")||ne.includes("permissão"))&&(Yl(),r(null))}finally{g(!1)}};b.useEffect(()=>{document.title="Stories de notícias | VM MÍDIAS",s&&ie(s)},[]),b.useEffect(()=>{if(!s)return;const k=window.setInterval(()=>void ie(s),6e4);return()=>window.clearInterval(k)},[s==null?void 0:s.access_token]);const ue=b.useMemo(()=>HN(u),[u]),K=b.useMemo(()=>{const k=u.reduce((le,ne)=>(le[$o(ne)]+=1,le),{pending:0,approved:0,published:0,rejected:0});return k.pending=ue.length,k},[u,ue]),X=b.useMemo(()=>{if(m==="pending")return ue;const k=u.filter(le=>$o(le)===m);return m!=="approved"?k:k.sort((le,ne)=>new Date(le.queued_at||le.published_at).getTime()-new Date(ne.queued_at||ne.published_at).getTime())},[u,ue,m]),P=async(k,le)=>{if(s){L(k.id),q(""),h(""),V("");try{const ne=await Po(s);r(ne),await r0(ne.access_token,k.id,le);const ze=new Date().toISOString();d(Ye=>Ye.map(de=>de.id===k.id?{...de,moderation_status:le,story_status:le==="approved"?de.story_status==="published"?"published":"queued":"skipped",reviewed_at:ze,queued_at:le==="approved"?ze:de.queued_at,last_story_error:le==="approved"?null:de.last_story_error,updated_at:ze}:de)),le==="rejected"&&$o(k)==="approved"&&q("Notícia retirada da fila de Stories.")}catch(ne){V(ne instanceof Error?ne.message:"Não foi possível atualizar esta notícia.")}finally{L("")}}},se=async()=>{if(!(!s||!N||y)){S(!0),h(""),q(""),V("");try{const k=await Po(s);r(k),await wN(k.access_token,N),p("pending"),h("Busca solicitada. As novas notícias aparecerão automaticamente aqui em até 5 minutos.")}catch(k){V(k instanceof Error?k.message:"Não foi possível buscar mais notícias agora.")}finally{S(!1)}}};return s?l.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[l.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[l.jsxs("div",{className:"flex min-w-0 items-center gap-4 sm:gap-5",children:[l.jsx("a",{href:"/","aria-label":"Voltar ao site",children:l.jsx($a,{size:"sm"})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),l.jsx("h1",{className:"truncate font-black",children:"Stories de notícias"})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("a",{href:"/admin/verao-premiado","aria-label":"Verão Premiado 2027",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx("span",{className:"text-[#ffcc0b]",children:"☀"}),l.jsx("span",{className:"hidden md:inline",children:"Verão 2027"})]}),l.jsxs("a",{href:"/admin/solicitacoes","aria-label":"Negócios e solicitações",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx($l,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),l.jsxs("button",{onClick:()=>void ie(s),disabled:v,"aria-label":"Atualizar notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(nd,{className:`h-4 w-4 ${v?"animate-spin":""}`}),l.jsx("span",{className:"hidden md:inline",children:"Atualizar"})]}),l.jsx("button",{onClick:()=>{Yl(),r(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:l.jsx(ad,{className:"h-4 w-4"})})]})]})}),l.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[l.jsxs("section",{className:"border-b border-white/10 pb-8",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Fila editorial"}),l.jsx("h2",{className:"mt-2 max-w-3xl text-3xl font-black sm:text-5xl",children:"Você decide o que vai para os Stories."}),l.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base",children:"A TV e o site recebem automaticamente as notícias úteis. Aqui você avalia uma seleção menor para os Stories. A prévia 9:16 mostra o corte real da imagem antes da aprovação."}),l.jsxs("div",{className:"mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center",children:[l.jsxs("button",{type:"button",onClick:()=>void se(),disabled:y||v||!N,className:"inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] px-5 text-sm font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:cursor-wait disabled:opacity-55",children:[y?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):l.jsx(ks,{className:"h-4 w-4"}),y?"Solicitando busca...":"Buscar mais notícias"]}),l.jsx("span",{className:"text-xs leading-5 text-white/45",children:"Busca fontes adicionais. Somente matérias de hoje e com menos de 24 horas entram na lista."})]}),E&&l.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:E}),B&&l.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:B})]}),l.jsx("nav",{className:"mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4","aria-label":"Filtrar notícias",children:Object.keys(dv).map(k=>l.jsxs("button",{onClick:()=>p(k),className:`rounded-xl border px-4 py-3 text-left transition ${m===k?"border-[#f40b36] bg-[#f40b36]/12":"border-white/10 bg-[#0c0e12] hover:border-white/20"}`,children:[l.jsx("span",{className:"block text-2xl font-black",children:K[k]}),l.jsx("span",{className:"mt-1 block text-xs font-bold text-white/55",children:dv[k]})]},k))}),m==="rejected"&&l.jsxs("p",{className:"mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-xs leading-5 text-white/55",children:[l.jsx(Pv,{className:"h-4 w-4 shrink-0 text-[#ff3155]"}),"As notícias recusadas são excluídas definitivamente do banco quando o dia termina, considerando o horário de São Paulo."]}),Q&&l.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:Q}),v&&!u.length?l.jsx("div",{className:"flex min-h-72 items-center justify-center",children:l.jsx(ma,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):X.length?l.jsx("section",{className:"mt-6 grid gap-5 xl:grid-cols-2",children:X.map((k,le)=>l.jsx(IN,{article:k,queuePosition:m==="approved"?le+1:void 0,working:I===k.id,onApprove:()=>void P(k,"approved"),onReject:()=>void P(k,"rejected")},k.id))}):l.jsxs("div",{className:"mt-6 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:[l.jsx(Kv,{className:"mx-auto mb-4 h-9 w-9"}),"Nenhuma notícia nesta etapa."]})]})]}):l.jsx(cd,{loading:v,error:Q,onLogin:async(k,le)=>{g(!0),V("");try{const ne=await rd(k,le);r(ne),await ie(ne)}catch(ne){V(ne instanceof Error?ne.message:"Não foi possível entrar.")}finally{g(!1)}}})}function IN({article:s,queuePosition:r,working:u,onApprove:d,onReject:m}){const p=$o(s),v=ud(s);return l.jsx("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:l.jsxs("div",{className:"grid md:grid-cols-[220px_minmax(0,1fr)]",children:[l.jsx("div",{className:"border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r",children:l.jsx(VN,{article:s})}),l.jsxs("div",{className:"p-5 sm:p-6",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]",children:[l.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]",children:s.category}),l.jsx("span",{className:"text-white/40",children:s.source_name}),r&&l.jsxs("span",{className:"ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65",children:[l.jsx(Pv,{className:"h-3 w-3"})," #",r," da fila · até ",r,"h"]})]}),l.jsx("h3",{className:"mt-4 text-xl font-black leading-tight sm:text-2xl",children:s.title}),s.summary&&l.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-white/55",children:s.summary}),l.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40",children:[l.jsx("span",{children:UN(s.published_at)}),s.article_url&&l.jsxs("a",{href:s.article_url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-bold text-white/65 hover:text-white",children:["Abrir matéria ",l.jsx(Gy,{className:"h-3.5 w-3.5"})]})]}),p==="pending"?l.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[l.jsxs("button",{onClick:m,disabled:u,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 font-black transition hover:border-red-400/50 hover:text-red-200 disabled:opacity-50",children:[u?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):l.jsx(Gl,{className:"h-4 w-4"}),"Não enviar"]}),l.jsxs("button",{onClick:d,disabled:u||!v,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:opacity-50",children:[u?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):l.jsx(yn,{className:"h-4 w-4"}),"Enviar aos Stories"]})]}):l.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4",children:[l.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold text-white/55",children:[p==="approved"?l.jsx(D2,{className:"h-4 w-4 text-[#ff3155]"}):null,zN[s.story_status]]}),p==="rejected"&&l.jsx("button",{onClick:d,disabled:u||!v,className:"rounded-lg border border-white/12 px-3 py-2 text-xs font-black hover:border-[#f40b36]/60 disabled:opacity-50",children:"Enviar aos Stories"}),p==="approved"&&s.story_status!=="publishing"&&l.jsxs("button",{onClick:m,disabled:u,className:"inline-flex items-center gap-2 rounded-lg border border-red-400/25 px-3 py-2 text-xs font-black text-red-100 transition hover:border-red-400/60 hover:bg-red-400/10 disabled:opacity-50",children:[u?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):l.jsx(Gl,{className:"h-4 w-4"}),"Retirar da fila"]}),p==="approved"&&s.story_status==="needs_review"&&l.jsx("button",{onClick:d,disabled:u,className:"rounded-lg border border-amber-300/25 px-3 py-2 text-xs font-black text-amber-100 hover:border-amber-300/60 disabled:opacity-50",children:"Reenfileirar"})]}),s.last_story_error&&l.jsx("p",{className:"mt-4 rounded-lg border border-amber-300/20 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100/80",children:s.last_story_error}),!v&&l.jsx("p",{className:"mt-4 rounded-lg border border-white/10 bg-white/[.03] p-3 text-xs leading-5 text-white/55",children:"Esta matéria não possui uma fotografia válida para o formato 9:16."})]})]})})}function VN({article:s}){const r=ud(s),u=s.title.length>170?10:s.title.length>130?12:s.title.length>95?14:17;return l.jsxs("div",{children:[l.jsxs("div",{className:"relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/12 bg-[#030305] shadow-2xl","aria-label":"Prévia do Story em proporção 9 por 16",children:[l.jsxs("div",{className:"absolute inset-x-0 top-0 h-[57%] overflow-hidden bg-[#111116]",children:[r?l.jsx("img",{src:s.image_url||"",alt:"",className:"h-full w-full object-cover",loading:"lazy"}):l.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-white/30",children:[l.jsx(a2,{className:"h-8 w-8"}),l.jsx("span",{className:"text-[10px] font-bold",children:"Sem imagem válida"})]}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#030305]"}),l.jsx("img",{src:"/images/braba-news.png",alt:"BRABA NEWS",className:"absolute left-1/2 top-[3%] w-[43%] -translate-x-1/2 object-contain"})]}),l.jsxs("div",{className:"absolute inset-x-0 bottom-0 top-[54%] bg-[#030305] px-[6%] pb-[3%] pt-[4%]",children:[l.jsx("p",{className:"text-[7px] font-black uppercase tracking-[.18em] text-[#ff3155]",children:s.category||"Informação"}),l.jsx("h4",{className:"mt-2 font-black leading-[1.02] tracking-[-.035em] text-white",style:{fontSize:`${u}px`},children:s.title}),l.jsx("div",{className:"mt-2 h-1 w-[37%] bg-gradient-to-r from-[#f8034b] via-[#86152f] to-[#33121d]"}),s.summary&&l.jsx("p",{className:"mt-3 line-clamp-3 text-[9px] leading-[1.45] text-white/80",children:s.summary}),l.jsxs("div",{className:"absolute inset-x-[6%] bottom-[3%] flex items-center justify-between border-t border-white/20 pt-2 text-[7px] text-white/55",children:[l.jsx("strong",{className:"text-white",children:"BRABA NEWS"}),l.jsx("span",{className:"max-w-[48%] truncate",children:s.source_name})]})]})]}),l.jsx("p",{className:"mt-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white/35",children:"Prévia 9:16 · corte exato"})]})}const GN="verao-premiado-2027-v2",Ys="/docs/proposta-comercial-verao-premiado-2027.pdf",YN={businessName:"",cnpj:"",segment:"",businessInstagram:"",cep:"",street:"",number:"",complement:"",neighborhood:"",city:"",state:"",responsibleName:"",cpf:"",radioBriefing:"",motionBriefing:"",sameBriefing:!1,paymentOption:"",contributionType:"",contributionDescription:"",contributionConditions:"",contributionNotes:""},m0=["Declaro que sou responsável pelo estabelecimento informado ou possuo autorização para representá-lo.","Declaro que li e estou de acordo com as condições comerciais apresentadas na proposta do Verão Premiado 2027.","Estou ciente do investimento selecionado e de que o vale-compras é opcional.","Declaro possuir autorização para disponibilizar os materiais e logomarcas enviados para utilização na campanha.","Declaro que li o aviso de privacidade referente ao tratamento dos meus dados pessoais."];function xn(s){return s.replace(/\D/g,"")}function QN(s){return xn(s).slice(0,11).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")}function XN(s){return xn(s).slice(0,14).replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d{1,2})$/,"$1-$2")}function PN(s){return xn(s).slice(0,8).replace(/(\d{5})(\d)/,"$1-$2")}function $N(s){const r=xn(s);if(r.length!==11||/^(\d)\1+$/.test(r))return!1;const u=d=>{let m=0;for(let v=0;v<d;v+=1)m+=Number(r[v])*(d+1-v);const p=m*10%11;return p===10?0:p};return u(9)===Number(r[9])&&u(10)===Number(r[10])}function ZN(s){const r=xn(s);if(!r)return!0;if(r.length!==14||/^(\d)\1+$/.test(r))return!1;const u=d=>{let m=d.length-7;const v=[...d].reduce((g,y)=>{const S=g+Number(y)*m;return m=m===2?9:m-1,S},0)%11;return v<2?0:11-v};return u(r.slice(0,12))===Number(r[12])&&u(r.slice(0,13))===Number(r[13])}function KN(s){const r=xn(s);return r.length===11?`***.${r.slice(3,6)}.${r.slice(6,9)}-**`:"Protegido"}const FN={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SUPABASE_PUBLISHABLE_KEY:"sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M",VITE_SUPABASE_URL:"https://dtmoboiwgqaphlthoexe.supabase.co"};function f0(s){var u;const r=(u=FN[s])==null?void 0:u.trim();if(!r)throw new Error(`Configuração ausente: ${s}.`);return r}const bn=f0("VITE_SUPABASE_URL"),fv=f0("VITE_SUPABASE_PUBLISHABLE_KEY"),p0="verao-premiado-assets";function $n(s=fv){return{apikey:fv,Authorization:`Bearer ${s}`}}function JN(s){const r=s.lastIndexOf("."),u=r>=0?s.slice(r).toLowerCase().replace(/[^a-z0-9.]/g,""):"";return`${(r>=0?s.slice(0,r):s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,55)||"arquivo"}${u}`}function h0(s){return s.split("/").map(encodeURIComponent).join("/")}async function WN(s,r,u){const d=new Set(["image/png","image/jpeg","application/pdf","image/svg+xml"]);return Promise.all(r.map(async(m,p)=>{if(!d.has(m.type)||m.size>20*1024*1024)throw new Error(`O arquivo “${m.name}” não atende aos formatos ou ao limite de 20 MB.`);const v=`inscricoes/${s}/${u}/${crypto.randomUUID().slice(0,8)}-${p+1}-${JN(m.name)}`,g=await fetch(`${bn}/storage/v1/object/${p0}/${h0(v)}`,{method:"POST",headers:{...$n(),"Content-Type":m.type,"cache-control":"3600","x-upsert":"false"},body:m});if(!g.ok){const y=await g.text();throw/row-level security|policy|unauthorized/i.test(y)?new Error("O Storage do logotipo ainda não está liberado. Aplique a migration mais recente do Supabase."):/mime|content.?type/i.test(y)?new Error(`O formato de “${m.name}” não foi aceito pelo Storage.`):new Error(`Não foi possível enviar “${m.name}” (erro ${g.status}).`)}return{path:v,name:m.name,size:m.size,mime_type:m.type,kind:u}}))}async function eE(s){const r={campaign:"Verão Premiado 2027",period:"02/01/2027 a 27/02/2027",prize:"Moto elétrica Smart Wheel (prevista)",cash_price_brl:250,installment_price_brl:300,installments:"2x de R$ 150,00",optional_voucher_brl:100,legal_notice:"Campanha sujeita à autorização dos órgãos competentes e às condições do regulamento oficial."},u={...s.form,cnpj:xn(s.form.cnpj)||null,cpf:xn(s.form.cpf),businessPhone:"",responsiblePhone:"",assets:s.assets,termsVersion:GN,declarations:s.declarations,commercialSnapshot:r},d=await fetch(`${bn}/rest/v1/rpc/create_verao_premiado_submission`,{method:"POST",headers:{...$n(),"Content-Type":"application/json"},body:JSON.stringify({p_id:s.id,p_payload:u,p_started_at:new Date(Date.now()-5e3).toISOString(),p_honeypot:""})});if(!d.ok){const m=await d.text();let p=m;try{const v=JSON.parse(m);p=v.message||v.details||m}catch{}throw console.error("Inscrição rejeitada pelo Supabase:",{status:d.status,reason:p}),/INSCRICAO_DUPLICADA/i.test(p)?new Error("Já existe uma inscrição com este CPF ou CNPJ. Fale com a VM Mídias para revisar o cadastro."):/CAMPOS_OBRIGATORIOS/i.test(p)?new Error("Confira o nome do comércio, o segmento e o nome completo do responsável."):/DOCUMENTO_INVALIDO/i.test(p)?new Error("O CPF ou o CNPJ informado não é válido."):/ARQUIVOS_INVALIDOS/i.test(p)?new Error("O logotipo enviado não foi reconhecido. Remova o arquivo e envie novamente."):/ACEITES_INCOMPLETOS/i.test(p)?new Error("Marque todas as declarações e confirme o aceite final."):/TERMOS_INVALIDOS/i.test(p)?new Error("A página foi atualizada enquanto você preenchia o formulário. Recarregue e tente novamente."):/FORMULARIO_INVALIDO/i.test(p)?new Error("A sessão do formulário expirou. Recarregue a página e envie novamente."):/payment_option|check constraint/i.test(p)?new Error("Selecione novamente a forma de pagamento."):new Error(`Não foi possível concluir a inscrição (erro ${d.status}). Tente novamente ou fale com a VM Mídias.`)}return await d.json()}async function aE(s){const r=await fetch(`${bn}/rest/v1/verao_premiado_submissions?select=*&order=created_at.desc`,{headers:$n(s.access_token),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar as inscrições. Aplique a migração da campanha.");return await r.json()}async function tE(s,r,u){if(!(await fetch(`${bn}/rest/v1/verao_premiado_submissions?id=eq.${r}`,{method:"PATCH",headers:{...$n(s.access_token),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(u)})).ok)throw new Error("Não foi possível atualizar a inscrição.")}async function nE(s){const r=await fetch(`${bn}/rest/v1/verao_premiado_screens?select=*&order=name.asc`,{headers:$n(s.access_token),cache:"no-store"});if(!r.ok)throw new Error("Não foi possível carregar as telas.");return await r.json()}async function pv(s,r){const u=!!r.id;if(!(await fetch(`${bn}/rest/v1/verao_premiado_screens${u?`?id=eq.${r.id}`:""}`,{method:u?"PATCH":"POST",headers:{...$n(s.access_token),"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(r)})).ok)throw new Error("Não foi possível salvar a tela.")}async function lE(s,r){const u=await fetch(`${bn}/storage/v1/object/sign/${p0}/${h0(r)}`,{method:"POST",headers:{...$n(s.access_token),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:3600})});if(!u.ok)throw new Error("Não foi possível abrir o arquivo.");const d=await u.json(),m=d.signedURL||d.signedUrl;return m.startsWith("http")?m:`${bn}/storage/v1${m}`}const hv=[[e0,"Kit promocional","1.000 cupons, cartaz e identificação oficial."],[O2,"Rádio Braba","Sua marca ganha voz na FM 104,9."],[Zv,"Tela VM Mídias","Vídeo Motion de 20s com exibição diária."],[Vu,"Premiação coletiva","Seu comércio participa da ação da cidade."]];function oE({onJoin:s}){return b.useEffect(()=>{document.body.classList.add("vp-motion-allowed");const r=[...document.querySelectorAll("[data-vp-reveal]")],u=new IntersectionObserver(h=>h.forEach(N=>{N.isIntersecting&&(N.target.classList.add("is-visible"),u.unobserve(N.target))}),{rootMargin:"0px 0px -10%",threshold:.14});r.forEach(h=>u.observe(h));const d=[...document.querySelectorAll("[data-vp-parallax]")],m=[...document.querySelectorAll(".vp-story-scene")];let p=0,v=0,g=0;const y=()=>{p=0;const h=window.innerHeight/2;m.forEach(N=>{const U=N.getBoundingClientRect(),I=Math.max(-1,Math.min(1,(h-(U.top+U.height/2))/window.innerHeight));N.style.setProperty("--vp-scene-y",`${(I*90).toFixed(1)}px`),N.style.setProperty("--vp-scene-x",`${(v*34).toFixed(1)}px`),N.classList.toggle("is-scene-active",U.top<window.innerHeight*.72&&U.bottom>window.innerHeight*.28)}),d.forEach(N=>{const U=N.getBoundingClientRect();if(U.bottom<-200||U.top>window.innerHeight+200)return;const I=Number(N.dataset.vpParallax||.08),L=Math.max(-220,Math.min(220,(h-(U.top+U.height/2))*I*1.35)),B=v*I*190,q=g*I*110;N.style.setProperty("--vp-parallax-x",`${B.toFixed(1)}px`),N.style.setProperty("--vp-parallax-y",`${(L+q).toFixed(1)}px`)})},S=()=>{p||(p=window.requestAnimationFrame(y))},E=h=>{v=h.clientX/window.innerWidth-.5,g=h.clientY/window.innerHeight-.5,S()};return y(),window.addEventListener("scroll",S,{passive:!0}),window.addEventListener("resize",S),window.addEventListener("pointermove",E,{passive:!0}),()=>{document.body.classList.remove("vp-motion-allowed"),u.disconnect(),window.removeEventListener("scroll",S),window.removeEventListener("resize",S),window.removeEventListener("pointermove",E),p&&window.cancelAnimationFrame(p)}},[]),l.jsxs("div",{className:"vp-story",children:[l.jsx("nav",{className:"vp-story-rail","aria-label":"Seções da proposta",children:Array.from({length:7},(r,u)=>l.jsx("a",{href:`#proposta-${u+1}`,"aria-label":`Ir para a seção ${u+1}`},u))}),l.jsxs("section",{id:"proposta-1",className:"vp-story-scene vp-story-hero",children:[l.jsx("div",{className:"vp-hero-sky","data-vp-parallax":"0.045"}),l.jsx("div",{className:"vp-sun-glow","data-vp-parallax":"0.12"}),l.jsxs("div",{className:"vp-scene-shell vp-hero-grid",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h1",{children:["Verão",l.jsx("br",{}),l.jsx("em",{children:"Premiado"}),l.jsx("span",{children:"2027"})]}),l.jsx("p",{className:"vp-lead",children:"Sua marca no centro da campanha que conecta Capela do Alto, Rádio Braba FM e as telas da VM Mídias."}),l.jsxs("div",{className:"vp-hero-actions",children:[l.jsx("button",{onClick:s,className:"vp-primary-cta",children:"Quero participar"}),l.jsxs("a",{href:Ys,target:"_blank",className:"vp-secondary-cta",children:[l.jsx(Jo,{})," Ver proposta"]})]}),l.jsxs("div",{className:"vp-hero-facts",children:[l.jsxs("span",{children:[l.jsx(Ay,{})," 02 jan. a 27 fev. 2027"]}),l.jsxs("span",{children:[l.jsx(qu,{})," Moto elétrica Smart Wheel"]})]})]}),l.jsxs("div",{className:"vp-art-stage vp-hero-assets","data-vp-reveal":!0,children:[l.jsx("div",{className:"vp-orbit vp-orbit-one"}),l.jsx("div",{className:"vp-orbit vp-orbit-two"}),l.jsx("img",{"data-vp-parallax":"0.2",src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado da VM Mídias",className:"vp-logo-cutout vp-logo-hero"}),l.jsx("img",{"data-vp-parallax":"0.32",src:"/images/verao-premiado/moto-cutout-v2.png",alt:"Moto elétrica Smart Wheel, prêmio principal previsto",className:"vp-moto-cutout vp-moto-hero"})]})]})]}),l.jsx("section",{id:"proposta-2",className:"vp-story-scene vp-scene-two",children:l.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-benefit-orbit",children:[l.jsx("div",{className:"vp-orbit-ring vp-ring-one","data-vp-parallax":"0.12"}),l.jsx("div",{className:"vp-orbit-ring vp-ring-two","data-vp-parallax":"0.2"}),l.jsxs("div",{className:"vp-orbit-core","data-vp-parallax":"0.28",children:[l.jsx(ov,{}),l.jsx("strong",{children:"4"}),l.jsx("span",{children:"benefícios"})]}),hv.map(([r,u],d)=>l.jsxs("div",{className:`vp-orbit-item vp-orbit-item-${d+1}`,"data-vp-parallax":String(.15+d*.04),children:[l.jsx(r,{}),l.jsx("span",{children:u})]},u))]})}),l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Uma campanha.",l.jsx("br",{}),l.jsx("em",{children:"Quatro frentes."})]}),l.jsx("p",{children:"Um pacote pensado para colocar seu comércio em contato com clientes dentro da loja, no rádio, nas telas e na premiação coletiva."}),l.jsx("div",{className:"vp-benefit-grid",children:hv.map(([r,u,d],m)=>l.jsxs("article",{style:{"--vp-delay":`${m*90}ms`},"data-vp-reveal":!0,children:[l.jsx(r,{}),l.jsxs("div",{children:[l.jsx("strong",{children:u}),l.jsx("span",{children:d})]})]},u))})]})]})}),l.jsx("section",{id:"proposta-3",className:"vp-story-scene vp-scene-three",children:l.jsxs("div",{className:"vp-scene-shell vp-split-grid vp-reverse",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsx("div",{className:"vp-display-number",children:"1.000"}),l.jsxs("h2",{children:["motivos para o cliente ",l.jsx("em",{children:"lembrar de você."})]}),l.jsx("p",{children:"Seu estabelecimento recebe materiais prontos para divulgar a campanha, envolver o público e transformar participação em presença de marca."}),l.jsxs("ul",{className:"vp-feature-list",children:[l.jsx("li",{children:"Cupons promocionais"}),l.jsx("li",{children:"Cartaz com sua logomarca"}),l.jsx("li",{children:"Identificação oficial de participante"})]})]}),l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-coupon-stack","aria-label":"Exemplo conceitual dos cupons promocionais",children:[["Cliente premiado","Comércio em destaque","Boa sorte!"].map((r,u)=>l.jsxs("article",{className:`vp-coupon-card vp-coupon-card-${u+1}`,"data-vp-parallax":String(.18+u*.06),children:[l.jsxs("div",{children:[l.jsx(ov,{}),l.jsx("span",{children:"Verão Premiado"})]}),l.jsx("strong",{children:"Cupom de sorteio"}),l.jsx("p",{children:r}),l.jsx("i",{})]},r)),l.jsxs("div",{className:"vp-coupon-seal","data-vp-parallax":"0.34",children:[l.jsx(e0,{}),l.jsx("b",{children:"1.000"}),l.jsx("span",{children:"cupons"})]})]})})]})}),l.jsxs("section",{id:"proposta-4",className:"vp-story-scene vp-scene-four",children:[l.jsx("div",{className:"vp-radio-grid","aria-hidden":"true"}),l.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-radio-stage",children:[l.jsx("div",{className:"vp-radio-halo","data-vp-parallax":"0.1"}),l.jsxs("div",{className:"vp-studio-screen","data-vp-parallax":"0.18",children:[l.jsx("span",{children:"NO AR"}),l.jsx("strong",{children:"104,9"}),l.jsx("small",{children:"Rádio Braba FM"})]}),l.jsxs("div",{className:"vp-microphone","data-vp-parallax":"0.3",children:[l.jsx("div",{children:l.jsx(v2,{})}),l.jsx("i",{}),l.jsx("span",{})]}),l.jsx("div",{className:"vp-waveform","aria-hidden":"true",children:Array.from({length:24},(r,u)=>l.jsx("i",{style:{"--wave":`${18+u*17%62}px`,"--vp-delay":`${u*45}ms`}},u))})]})}),l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Sua marca também ",l.jsx("em",{children:"ganha voz."})]}),l.jsx("p",{children:"Durante o período da campanha, seu estabelecimento entra na programação da rádio com uma mensagem produzida a partir do seu briefing."}),l.jsxs("div",{className:"vp-quote-card",children:[l.jsx("span",{children:"“"}),l.jsx("p",{children:"Você conta o que deseja divulgar. A equipe transforma a ideia em uma mensagem clara para o público regional."})]})]})]})]}),l.jsxs("section",{id:"proposta-5",className:"vp-story-scene vp-scene-five",children:[l.jsx("div",{className:"vp-screen-glow","data-vp-parallax":"0.08"}),l.jsxs("div",{className:"vp-scene-shell vp-split-grid vp-reverse",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Onde a cidade passa, ",l.jsx("em",{children:"sua marca aparece."})]}),l.jsx("p",{children:"Escolha uma das telas cadastradas para exibir um vídeo Motion produzido para o seu comércio durante o período contratado."}),l.jsxs("div",{className:"vp-stat-row",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"01"}),l.jsx("span",{children:"tela à escolha"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"20s"}),l.jsx("span",{children:"vídeo Motion"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Diária"}),l.jsx("span",{children:"exibição"})]})]})]}),l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-screen-stage",children:[l.jsxs("div",{className:"vp-digital-screen","data-vp-parallax":"0.18",children:[l.jsxs("div",{className:"vp-screen-content",children:[l.jsx("img",{src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado 2027"}),l.jsxs("span",{children:[l.jsx(S2,{})," Motion de 20 segundos"]})]}),l.jsx("i",{})]}),l.jsxs("div",{className:"vp-screen-card vp-screen-card-one","data-vp-parallax":"0.34",children:[l.jsx(Wv,{}),l.jsx("span",{children:"Comércio local"})]}),l.jsxs("div",{className:"vp-screen-card vp-screen-card-two","data-vp-parallax":"0.26",children:[l.jsx(Zv,{}),l.jsx("span",{children:"Exibição diária"})]}),l.jsxs("div",{className:"vp-screen-card vp-screen-card-three","data-vp-parallax":"0.4",children:[l.jsx(Jv,{}),l.jsx("span",{children:"Alta visibilidade"})]})]})})]})]}),l.jsx("section",{id:"proposta-6",className:"vp-story-scene vp-scene-six",children:l.jsxs("div",{className:"vp-scene-shell vp-split-grid",children:[l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-prize-stage",children:[l.jsx("div",{className:"vp-prize-sun","data-vp-parallax":"0.12"}),l.jsx("img",{"data-vp-parallax":"0.3",src:"/images/verao-premiado/moto-cutout-v2.png",alt:"Moto elétrica Smart Wheel",className:"vp-moto-cutout vp-moto-prize"}),l.jsxs("div",{className:"vp-prize-ribbon","data-vp-parallax":"0.42",children:[l.jsx(Vu,{}),l.jsx("strong",{children:"Prêmio principal previsto"})]})]})}),l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Quando o comércio participa junto, ",l.jsx("em",{children:"toda a cidade ganha destaque."})]}),l.jsx("p",{children:"O comércio pode disponibilizar um vale-compras para fortalecer a premiação coletiva. Essa contribuição é opcional e será formalizada conforme o regulamento."}),l.jsxs("div",{className:"vp-prize-card",children:[l.jsx("span",{children:"Prêmio principal previsto"}),l.jsxs("strong",{children:["Moto elétrica",l.jsx("br",{}),"Smart Wheel"]})]})]})]})}),l.jsxs("section",{id:"proposta-7",className:"vp-story-scene vp-scene-seven",children:[l.jsx("div",{className:"vp-final-rays","data-vp-parallax":"0.04"}),l.jsxs("div",{className:"vp-scene-shell vp-final-grid",children:[l.jsxs("div",{className:"vp-story-copy","data-vp-reveal":!0,children:[l.jsxs("h2",{children:["Uma cota que cabe no negócio e ",l.jsx("em",{children:"aparece na cidade."})]}),l.jsxs("div",{className:"vp-price-cards",children:[l.jsxs("article",{children:[l.jsx("span",{children:"À vista"}),l.jsxs("strong",{children:["R$ 250",l.jsx("small",{children:",00"})]})]}),l.jsx("b",{children:"ou"}),l.jsxs("article",{children:[l.jsx("span",{children:"Parcelado"}),l.jsxs("strong",{children:["2x R$ 150",l.jsx("small",{children:",00"})]}),l.jsx("small",{children:"Total: R$ 300,00"})]})]}),l.jsxs("p",{className:"vp-contribution-note",children:[l.jsx(qu,{})," Vale-compras opcional para a premiação coletiva."]}),l.jsx("button",{onClick:s,className:"vp-primary-cta vp-final-cta",children:"Quero colocar meu comércio em destaque"})]}),l.jsx("div",{className:"vp-art-wrap","data-vp-reveal":!0,children:l.jsxs("div",{className:"vp-finale-stage",children:[l.jsx("img",{"data-vp-parallax":"0.2",src:"/images/verao-premiado/logo-cutout-v2.png",alt:"Verão Premiado da VM Mídias",className:"vp-logo-cutout vp-logo-final"}),l.jsx("div",{className:"vp-finale-gift vp-finale-gift-one","data-vp-parallax":"0.38",children:l.jsx(qu,{})}),l.jsx("div",{className:"vp-finale-gift vp-finale-gift-two","data-vp-parallax":"0.27",children:l.jsx(Vu,{})}),l.jsx("div",{className:"vp-finale-gift vp-finale-gift-three","data-vp-parallax":"0.46",children:l.jsx(G2,{})})]})})]})]})]})}const v0=["Dados","Logotipo","Publicidade","Pagamento","Vale-compras","Revisão"],g0="mt-2 min-h-14 w-full rounded-2xl border border-white/12 bg-white/[0.045] px-4 text-base text-white outline-none transition duration-200 placeholder:text-white/25 hover:border-white/22 focus:border-[#ffca0a]/70 focus:bg-white/[0.065] focus:ring-4 focus:ring-[#ffca0a]/10",iE="block text-sm font-extrabold text-white/78";function sE(){const[s,r]=b.useState(YN),[u,d]=b.useState(0),[m,p]=b.useState(null),[v,g]=b.useState(m0.map(()=>!1)),[y,S]=b.useState(!1),[E,h]=b.useState(""),[N,U]=b.useState(!1),[I,L]=b.useState(0),[B,q]=b.useState(null),Q=b.useRef(null),V=b.useMemo(()=>m&&m.type.startsWith("image/")&&m.type!=="image/svg+xml"?URL.createObjectURL(m):"",[m]);b.useEffect(()=>{document.title="Verão Premiado 2027 | VM Mídias"},[]),b.useEffect(()=>()=>{V&&URL.revokeObjectURL(V)},[V]);const ie=(se,k)=>r(le=>({...le,[se]:k})),ue=se=>{switch(se){case 0:return s.businessName.trim().length<2?"Informe o nome completo do comércio.":s.segment.trim().length<2?"Informe o segmento comercial.":!s.cep.trim()||!s.street.trim()||!s.number.trim()||!s.neighborhood.trim()||!s.city.trim()||!s.state.trim()?"Preencha o endereço completo do comércio.":s.responsibleName.trim().length<4?"Informe o nome completo do responsável.":$N(s.cpf)?ZN(s.cnpj)?"":"Informe um CNPJ válido ou deixe o campo em branco.":"Informe um CPF válido para o responsável.";case 1:return m?"":"Envie a logomarca do estabelecimento.";case 2:return"";case 3:return s.paymentOption?"":"Escolha a modalidade de pagamento.";case 4:return"";default:return""}},K=se=>{if(se===1){const k=ue(u);if(k){h(k);return}}h(""),d(k=>Math.max(0,Math.min(5,k+se))),window.setTimeout(()=>{var k;return(k=Q.current)==null?void 0:k.scrollIntoView({behavior:"smooth",block:"start"})},0)},X=se=>{var le;const k=((le=se.target.files)==null?void 0:le[0])||null;if(k&&k.size>20*1024*1024){h("A logomarca deve ter no máximo 20 MB.");return}p(k),h("")},P=async se=>{se.preventDefault();const k=Array.from({length:5},(ne,ze)=>ue(ze)).find(Boolean);if(k){h(k);return}if(v.some(ne=>!ne)||!y){h("Marque todas as declarações e o aceite final para concluir.");return}if(!m)return;U(!0),h(""),L(0);const le=crypto.randomUUID();try{const ne=[{file:m,kind:"logo"}],ze=[];for(let de=0;de<ne.length;de+=1){const z=await WN(le,[ne[de].file],ne[de].kind);ze.push(...z),L(Math.round((de+1)/ne.length*80))}const Ye=await eE({id:le,form:s,assets:ze,declarations:v});L(100),q(Ye),window.scrollTo({top:0,behavior:"smooth"})}catch(ne){h(ne instanceof Error?ne.message:"Não foi possível enviar a inscrição.")}finally{U(!1)}};return B?l.jsx(bE,{confirmation:B,form:s}):l.jsxs("div",{className:"min-h-screen bg-[#050305] text-white selection:bg-[#ffcc00] selection:text-black",children:[l.jsx(uE,{onJoin:()=>{var se;return(se=Q.current)==null?void 0:se.scrollIntoView({behavior:"smooth"})}}),l.jsxs("main",{children:[l.jsx(oE,{onJoin:()=>{var se;return(se=Q.current)==null?void 0:se.scrollIntoView({behavior:"smooth"})}}),l.jsx("section",{ref:Q,id:"inscricao",className:"vp-form-section scroll-mt-20 border-t border-white/10 px-4 py-24 sm:px-8 lg:py-32",children:l.jsx("div",{className:"mx-auto max-w-7xl",children:l.jsxs("div",{className:"vp-form-layout",children:[l.jsx(mE,{step:u}),l.jsx("div",{className:"vp-form-card",children:l.jsxs("form",{onSubmit:P,className:"p-5 sm:p-9 lg:p-11",children:[l.jsxs("div",{className:"mb-8 border-b border-white/8 pb-7",children:[l.jsxs("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:["Etapa ",u+1," de ",v0.length]}),l.jsx("h3",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:rE[u]}),l.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-6 text-white/50",children:cE[u]})]}),l.jsxs("div",{className:"vp-form-step",children:[u===0&&l.jsx(fE,{form:s,setField:ie}),u===1&&l.jsx(pE,{file:m,preview:V||"",onChange:X,onRemove:()=>p(null)}),u===2&&l.jsx(hE,{form:s,setField:ie}),u===3&&l.jsx(vE,{selected:s.paymentOption,onSelect:se=>ie("paymentOption",se)}),u===4&&l.jsx(gE,{form:s,setField:ie,onSkip:()=>{ie("contributionType",""),ie("contributionDescription",""),K(1)}}),u===5&&l.jsx(xE,{form:s,logo:m,declarations:v,setDeclarations:g,finalConsent:y,setFinalConsent:S})]},u),E&&l.jsx("div",{role:"alert",className:"mt-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100",children:E}),N&&l.jsxs("div",{className:"mt-6",children:[l.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[l.jsx("span",{children:"Enviando inscrição com segurança"}),l.jsxs("span",{children:[I,"%"]})]}),l.jsx("div",{className:"mt-2 h-2 overflow-hidden rounded-full bg-white/10",children:l.jsx("div",{className:"h-full bg-[#ffcc0b] transition-all",style:{width:`${I}%`}})})]}),l.jsxs("div",{className:"mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between",children:[l.jsx("button",{type:"button",disabled:u===0||N,onClick:()=>K(-1),className:"vp-form-nav-button border border-white/15 text-white/70 disabled:opacity-30",children:"Voltar"}),u<5?l.jsx("button",{type:"button",onClick:()=>K(1),className:"vp-form-nav-button bg-[#f20b2f] text-white shadow-[0_14px_36px_rgba(248,3,45,.28)]",children:"Continuar"}):l.jsxs("button",{disabled:N,className:"vp-form-nav-button inline-flex min-h-14 items-center justify-center gap-2 bg-[#ffcc0b] text-black disabled:opacity-55",children:[N?l.jsx(ma,{className:"h-5 w-5 animate-spin"}):l.jsx(yn,{className:"h-5 w-5"}),"Eu concordo e quero participar"]})]})]})})]})})})]}),l.jsx(dE,{})]})}const rE=["Dados do comércio","Envie o logotipo","Publicidade do seu negócio","Forma de pagamento","Vale-compras","Revise e aceite os termos"],cE=["Informe os dados do estabelecimento e do responsável.","Utilizaremos a marca nos materiais oficiais da campanha.","As duas informações são opcionais e podem ser preenchidas de forma resumida.","Escolha entre pagamento à vista ou parcelado.","Esta etapa é opcional. Você pode informar o vale-compras ou pular.","Confira os dados principais e registre seu aceite."];function uE({onJoin:s}){return l.jsx("header",{className:"pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6",children:l.jsxs("div",{className:"pointer-events-auto mx-auto flex min-h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/12 bg-[#090506]/82 px-4 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:px-6",children:[l.jsx("a",{href:"/","aria-label":"Voltar ao site da VM Mídias",children:l.jsx($a,{size:"sm"})}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("a",{href:Ys,target:"_blank",className:"hidden rounded-full border border-white/12 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/60 transition hover:border-white/30 hover:text-white sm:inline-flex",children:"Ver proposta"}),l.jsx("button",{onClick:s,className:"rounded-full bg-[#f20b2f] px-5 py-3 text-xs font-black uppercase tracking-wide shadow-[0_10px_30px_rgba(248,3,45,.32)] transition hover:-translate-y-0.5 hover:bg-[#ff2448]",children:"Quero participar"})]})]})})}function dE(){return l.jsx("footer",{className:"border-t border-white/10 bg-black px-5 py-10",children:l.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between",children:[l.jsxs("div",{children:[l.jsx($a,{size:"sm"}),l.jsxs("p",{className:"mt-3",children:["Capela do Alto - SP · ",Me.company.whatsappFormatted]})]}),l.jsxs("div",{className:"flex flex-wrap gap-5",children:[l.jsx("a",{href:"/politica-de-privacidade",className:"hover:text-white",children:"Aviso de privacidade"}),l.jsx("a",{href:Ys,target:"_blank",className:"hover:text-white",children:"Proposta comercial"}),l.jsx("a",{href:`https://wa.me/${Me.company.whatsappRaw}`,target:"_blank",rel:"noreferrer",className:"hover:text-white",children:"Atendimento oficial"})]})]})})}function mE({step:s}){return l.jsx("aside",{className:"vp-form-progress","aria-label":"Progresso da inscrição",children:l.jsx("ol",{children:v0.map((r,u)=>l.jsxs("li",{className:u===s?"is-current":u<s?"is-done":"",children:[l.jsx("b",{children:u<s?l.jsx(yn,{className:"h-3.5 w-3.5"}):u+1}),l.jsx("span",{children:r})]},r))})})}function da({label:s,required:r,children:u}){return l.jsxs("label",{className:iE,children:[s,r&&l.jsx("span",{className:"text-[#ffcc0b]",children:" *"}),u]})}function Sa(s){return l.jsx("input",{...s,className:g0})}function vv(s){return l.jsx("textarea",{...s,className:`${g0} min-h-36 resize-y py-3`})}function fE({form:s,setField:r}){return l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(da,{label:"Nome do comércio",required:!0,children:l.jsx(Sa,{value:s.businessName,onChange:u=>r("businessName",u.target.value)})}),l.jsx(da,{label:"CNPJ",children:l.jsx(Sa,{inputMode:"numeric",value:s.cnpj,onChange:u=>r("cnpj",XN(u.target.value)),placeholder:"00.000.000/0000-00"})}),l.jsx(da,{label:"Segmento comercial",required:!0,children:l.jsx(Sa,{value:s.segment,onChange:u=>r("segment",u.target.value),placeholder:"Ex.: roupas, alimentação, serviços"})}),l.jsx(da,{label:"Instagram",children:l.jsx(Sa,{value:s.businessInstagram,onChange:u=>r("businessInstagram",u.target.value),placeholder:"@seucomercio"})}),l.jsx(da,{label:"CEP",required:!0,children:l.jsx(Sa,{inputMode:"numeric",value:s.cep,onChange:u=>r("cep",PN(u.target.value))})}),l.jsx(da,{label:"Rua ou avenida",required:!0,children:l.jsx(Sa,{value:s.street,onChange:u=>r("street",u.target.value)})}),l.jsx(da,{label:"Número",required:!0,children:l.jsx(Sa,{value:s.number,onChange:u=>r("number",u.target.value)})}),l.jsx(da,{label:"Complemento",children:l.jsx(Sa,{value:s.complement,onChange:u=>r("complement",u.target.value)})}),l.jsx(da,{label:"Bairro",required:!0,children:l.jsx(Sa,{value:s.neighborhood,onChange:u=>r("neighborhood",u.target.value)})}),l.jsxs("div",{className:"grid grid-cols-[1.5fr_1fr] gap-3",children:[l.jsx(da,{label:"Cidade",required:!0,children:l.jsx(Sa,{value:s.city,onChange:u=>r("city",u.target.value)})}),l.jsx(da,{label:"Estado",required:!0,children:l.jsx(Sa,{value:s.state,onChange:u=>r("state",u.target.value)})})]}),l.jsx("div",{className:"sm:col-span-2 mt-2 border-t border-white/10 pt-6",children:l.jsx("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:"Responsável"})}),l.jsx(da,{label:"Nome do responsável",required:!0,children:l.jsx(Sa,{value:s.responsibleName,onChange:u=>r("responsibleName",u.target.value)})}),l.jsx(da,{label:"CPF do responsável",required:!0,children:l.jsx(Sa,{inputMode:"numeric",value:s.cpf,onChange:u=>r("cpf",QN(u.target.value)),placeholder:"000.000.000-00"})})]})}function pE({file:s,preview:r,onChange:u,onRemove:d}){return l.jsxs("div",{children:[l.jsx("p",{className:"mb-5 text-sm leading-6 text-white/55",children:"Utilizaremos sua logomarca para personalizar os materiais oficiais da campanha e produzir suas peças publicitárias."}),s?l.jsxs("div",{className:"flex items-center gap-4 rounded-2xl border border-[#ffcc0b]/30 bg-[#ffcc0b]/5 p-4",children:[r?l.jsx("img",{src:r,alt:"Pré-visualização da logomarca",className:"h-24 w-24 rounded-xl bg-white object-contain p-2"}):l.jsx(Qy,{className:"h-14 w-14 text-[#ffcc0b]"}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("p",{className:"truncate font-bold",children:s.name}),l.jsxs("p",{className:"mt-1 text-sm text-white/45",children:[(s.size/1024/1024).toFixed(2)," MB"]})]}),l.jsx("button",{type:"button",onClick:d,"aria-label":"Remover arquivo",className:"rounded-lg border border-white/15 p-3",children:l.jsx(Gl,{className:"h-5 w-5"})})]}):l.jsxs("label",{className:"flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/18 bg-black/20 p-8 text-center hover:border-[#ffcc0b]/60",children:[l.jsx($2,{className:"h-10 w-10 text-[#ffcc0b]"}),l.jsx("span",{className:"mt-4 text-lg font-black",children:"Selecione a logomarca"}),l.jsx("span",{className:"mt-2 text-sm text-white/45",children:"PNG, JPG, JPEG, PDF ou SVG · até 20 MB"}),l.jsx("input",{type:"file",accept:".png,.jpg,.jpeg,.pdf,.svg,image/png,image/jpeg,application/pdf,image/svg+xml",className:"sr-only",onChange:u})]})]})}function hE({form:s,setField:r}){return l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsx(da,{label:"Publicidade na Rádio Braba (opcional)",children:l.jsx(vv,{value:s.radioBriefing,maxLength:1200,onChange:u=>r("radioBriefing",u.target.value),placeholder:"O que gostaria de divulgar na rádio?"})}),l.jsx(da,{label:"Publicidade no vídeo de 20 segundos (opcional)",children:l.jsx(vv,{value:s.motionBriefing,maxLength:1200,onChange:u=>r("motionBriefing",u.target.value),placeholder:"Qual mensagem gostaria de destacar no vídeo?"})}),l.jsx("p",{className:"sm:col-span-2 text-sm leading-6 text-white/45",children:"Você pode preencher uma, as duas ou nenhuma opção. A equipe da VM Mídias poderá alinhar os detalhes posteriormente."})]})}function vE({selected:s,onSelect:r}){return l.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[[{id:"avista",title:"Pagamento à vista",price:"R$ 250",note:"Valor total à vista"},{id:"parcelado",title:"Pagamento parcelado",price:"2x de R$ 150",note:"Total de R$ 300"}].map(u=>l.jsxs("button",{type:"button",onClick:()=>r(u.id),className:`rounded-2xl border p-6 text-left transition ${s===u.id?"border-[#ffcc0b] bg-[#ffcc0b]/8 shadow-[0_0_0_3px_rgba(255,204,11,.08)]":"border-white/12 bg-black/20 hover:border-white/30"}`,children:[l.jsx("span",{className:"text-sm font-black uppercase text-white/50",children:u.title}),l.jsx("strong",{className:"mt-3 block text-3xl",children:u.price}),l.jsx("span",{className:"mt-2 block text-sm text-white/45",children:u.note})]},u.id)),l.jsx("p",{className:"sm:col-span-2 text-sm leading-6 text-white/45",children:"A página não realiza cobrança automática. Datas e vencimentos serão confirmados pela equipe da VM Mídias."})]})}function gE({form:s,setField:r,onSkip:u}){return l.jsxs("div",{children:[l.jsx(da,{label:"Descrição do vale-compras (opcional)",children:l.jsx(Sa,{value:s.contributionDescription,onChange:d=>{r("contributionDescription",d.target.value),r("contributionType",d.target.value.trim()?"vale_compra":"")},placeholder:"Ex.: vale-compras de R$ 100"})}),l.jsx("p",{className:"mt-3 text-sm leading-6 text-white/45",children:"Se não quiser disponibilizar um vale-compras, pule esta etapa."}),l.jsx("button",{type:"button",onClick:u,className:"mt-6 rounded-full border border-white/15 px-5 py-3 text-xs font-black uppercase text-white/70 transition hover:border-white/35 hover:text-white",children:"Pular esta etapa"})]})}function xE({form:s,logo:r,declarations:u,setDeclarations:d,finalConsent:m,setFinalConsent:p}){const v=[["Estabelecimento",s.businessName],["Responsável",s.responsibleName],["CPF",KN(s.cpf)],["Logotipo",(r==null?void 0:r.name)||"Não enviado"],["Pagamento",s.paymentOption==="avista"?"R$ 250,00 à vista":"2x de R$ 150,00 (total R$ 300,00)"],["Vale-compras",s.contributionDescription||"Não informado"]];return l.jsxs("div",{children:[l.jsx("div",{className:"divide-y divide-white/8 rounded-2xl border border-white/10 bg-black/20",children:v.map(([g,y])=>l.jsxs("div",{className:"grid gap-2 p-4 sm:grid-cols-[140px_1fr] sm:items-start",children:[l.jsx("strong",{className:"text-sm text-white/45",children:g}),l.jsx("span",{className:"text-sm leading-6",children:y})]},g))}),l.jsx("div",{className:"mt-7 rounded-2xl border border-[#ffcc0b]/25 bg-[#ffcc0b]/5 p-5",children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(ld,{className:"mt-1 h-6 w-6 shrink-0 text-[#ffcc0b]"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-black",children:"Termos de adesão - Verão Premiado 2027"}),l.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:"O aceite registra data, horário, versão dos termos, declarações, responsável e uma referência imutável das condições comerciais."}),l.jsxs("a",{href:Ys,target:"_blank",className:"mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#ffcc0b]",children:[l.jsx(Jo,{className:"h-4 w-4"}),"Ler e baixar a proposta comercial"]})]})]})}),l.jsx("div",{className:"mt-6 space-y-3",children:m0.map((g,y)=>l.jsxs("label",{className:"flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 text-sm leading-6",children:[l.jsx("input",{type:"checkbox",checked:u[y],onChange:S=>d(u.map((E,h)=>h===y?S.target.checked:E)),className:"mt-1 h-5 w-5 shrink-0 accent-[#ffcc0b]"}),g]},g))}),l.jsxs("label",{className:"mt-5 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-[#ffcc0b]/45 bg-[#ffcc0b]/7 p-5 font-black",children:[l.jsx("input",{type:"checkbox",checked:m,onChange:g=>p(g.target.checked),className:"h-6 w-6 shrink-0 accent-[#ffcc0b]"}),"Eu li e concordo com os termos de adesão ao Verão Premiado 2027."]})]})}function bE({confirmation:s,form:r}){return l.jsx("div",{className:"min-h-screen bg-[radial-gradient(circle_at_top,rgba(242,11,47,.2),transparent_38%),#050305] px-5 py-12 text-white",children:l.jsxs("main",{className:"mx-auto max-w-2xl",children:[l.jsx($a,{size:"md"}),l.jsxs("div",{className:"mt-10 rounded-3xl border border-white/12 bg-[#0c080a] p-6 sm:p-10",children:[l.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-black",children:l.jsx(yn,{className:"h-7 w-7"})}),l.jsx("h1",{className:"mt-6 text-4xl font-black sm:text-5xl",children:"Recebemos sua inscrição!"}),l.jsx("p",{className:"mt-4 leading-7 text-white/60",children:"Obrigado por fazer parte do Verão Premiado 2027 da VM Mídias. Nossa equipe irá conferir suas informações e dar continuidade ao processo de adesão."}),l.jsx("dl",{className:"mt-8 divide-y divide-white/10 rounded-2xl border border-white/10",children:[["Comércio",r.businessName],["Protocolo",s.protocol],["Data da inscrição",new Intl.DateTimeFormat("pt-BR",{dateStyle:"long",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(s.accepted_at))],["Forma de pagamento",r.paymentOption==="avista"?"À vista - R$ 250,00":"Parcelado - 2x de R$ 150,00"],["Status","Recebida - aguardando análise"]].map(([u,d])=>l.jsxs("div",{className:"grid gap-1 p-4 sm:grid-cols-[160px_1fr]",children:[l.jsx("dt",{className:"text-sm text-white/45",children:u}),l.jsx("dd",{className:"font-bold",children:d})]},u))}),l.jsxs("div",{className:"mt-7 rounded-xl bg-white/5 p-5",children:[l.jsx("p",{className:"font-black",children:"Próximos passos"}),l.jsx("p",{className:"mt-2 text-sm leading-6 text-white/55",children:"A equipe validará os dados, os materiais e a contribuição. Depois entrará em contato pelo canal informado. O recebimento não confirma pagamento nem aprovação definitiva."})]}),l.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row",children:[l.jsx("a",{href:`https://wa.me/${Me.company.whatsappRaw}?text=${encodeURIComponent(`Olá! Minha inscrição no Verão Premiado 2027 é ${s.protocol}.`)}`,target:"_blank",rel:"noreferrer",className:"inline-flex min-h-12 items-center justify-center rounded-xl bg-[#f20b2f] px-5 text-sm font-black uppercase",children:"Falar com a VM Mídias"}),l.jsx("a",{href:"/",className:"inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold",children:"Voltar ao site"})]})]})]})})}const gv={registration_status:["recebida","em_analise","aprovada","cancelada"],financial_status:["aguardando_pagamento","parcialmente_pago","pago"],spot_status:["aguardando_producao","em_producao","aguardando_aprovacao","finalizado"],video_status:["aguardando_producao","em_producao","aguardando_aprovacao","finalizado"],kit_status:["aguardando_producao","em_producao","disponivel","entregue"],contribution_status:["pendente","definida","recebida"]},x0={recebida:"Recebida",em_analise:"Em análise",aprovada:"Aprovada",cancelada:"Cancelada",aguardando_pagamento:"Aguardando pagamento",parcialmente_pago:"Parcialmente pago",pago:"Pago",aguardando_producao:"Aguardando produção",em_producao:"Em produção",aguardando_aprovacao:"Aguardando aprovação",finalizado:"Finalizado",disponivel:"Disponível",entregue:"Entregue",pendente:"Pendente",definida:"Definida"};function yE(){const[s,r]=b.useState(()=>id()),[u,d]=b.useState([]),[m,p]=b.useState([]),[v,g]=b.useState(""),[y,S]=b.useState(""),[E,h]=b.useState("registrations"),[N,U]=b.useState(!!s),[I,L]=b.useState(!1),[B,q]=b.useState(""),Q=async K=>{U(!0),q("");try{const X=await Po(K);r(X);const[P,se]=await Promise.all([aE(X),nE(X)]);d(P),p(se)}catch(X){q(X instanceof Error?X.message:"Não foi possível carregar o painel.")}finally{U(!1)}};b.useEffect(()=>{document.title="Verão Premiado 2027 | Administração",s&&Q(s)},[]);const V=u.find(K=>K.id===v),ie=b.useMemo(()=>{const K=y.trim().toLocaleLowerCase("pt-BR");return K?u.filter(X=>`${X.business_name} ${X.responsible_name} ${X.protocol}`.toLocaleLowerCase("pt-BR").includes(K)):u},[y,u]);if(!s)return l.jsx(cd,{loading:I,error:B,onLogin:async(K,X)=>{L(!0),q("");try{const P=await rd(K,X);r(P),await Q(P)}catch(P){q(P instanceof Error?P.message:"Não foi possível entrar.")}finally{L(!1)}}});const ue=()=>{const K=["Protocolo","Comércio","CNPJ","Responsável","CPF","Telefone","Pagamento","Inscrição","Financeiro","Spot","Vídeo","Kit","Contribuição","Data"],X=u.map(k=>[k.protocol,k.business_name,k.cnpj||"",k.responsible_name,k.cpf,k.responsible_phone,k.payment_option,k.registration_status,k.financial_status,k.spot_status,k.video_status,k.kit_status,k.contribution_status,k.created_at]),P=[K,...X].map(k=>k.map(le=>`"${String(le).replace(/"/g,'""')}"`).join(";")).join(`
`),se=document.createElement("a");se.href=URL.createObjectURL(new Blob(["\uFEFF",P],{type:"text/csv;charset=utf-8"})),se.download="verao-premiado-2027-inscricoes.csv",se.click(),URL.revokeObjectURL(se.href)};return l.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[l.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[l.jsxs("div",{className:"flex min-w-0 items-center gap-4",children:[l.jsx("a",{href:"/",children:l.jsx($a,{size:"sm"})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-[10px] font-black uppercase tracking-[.2em] text-[#ffcc0b]",children:"Administração"}),l.jsx("h1",{className:"truncate font-black",children:"Verão Premiado 2027"})]})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("a",{href:"/admin/solicitacoes",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[l.jsx(Wv,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),l.jsx("button",{onClick:()=>void Q(s),disabled:N,"aria-label":"Atualizar",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:l.jsx(nd,{className:`h-4 w-4 ${N?"animate-spin":""}`})}),l.jsx("button",{onClick:()=>{Yl(),r(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:l.jsx(ad,{className:"h-4 w-4"})})]})]})}),l.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8",children:[l.jsxs("div",{className:"flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[.18em] text-[#ffcc0b]",children:"Gestão da campanha"}),l.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Inscrições, produção e premiação."})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsxs("button",{onClick:()=>h("registrations"),className:`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${E==="registrations"?"bg-[#f40b36]":"border border-white/12"}`,children:[l.jsx(s2,{className:"h-4 w-4"}),"Inscrições"]}),l.jsxs("button",{onClick:()=>h("screens"),className:`inline-flex h-11 items-center gap-2 rounded-lg px-4 text-xs font-black uppercase ${E==="screens"?"bg-[#f40b36]":"border border-white/12"}`,children:[l.jsx(U2,{className:"h-4 w-4"}),"Telas"]})]})]}),B&&l.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:B}),N?l.jsx("div",{className:"flex min-h-64 items-center justify-center",children:l.jsx(ma,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):E==="screens"?l.jsx(jE,{session:s,screens:m,onSaved:()=>void Q(s)}):V?l.jsx(NE,{row:V,session:s,screen:m.find(K=>K.id===V.screen_id),onBack:()=>g(""),onUpdated:K=>d(X=>X.map(P=>P.id===K.id?K:P))}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[l.jsxs("label",{className:"relative block w-full max-w-md",children:[l.jsx(ks,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),l.jsx("input",{value:y,onChange:K=>S(K.target.value),placeholder:"Buscar comércio, responsável ou protocolo",className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]"})]}),l.jsxs("button",{onClick:ue,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 px-4 text-xs font-black uppercase",children:[l.jsx(Jo,{className:"h-4 w-4"}),"Exportar CSV"]})]}),ie.length?l.jsx("section",{className:"mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:ie.map(K=>l.jsxs("button",{onClick:()=>g(K.id),className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-0.5 hover:border-[#f40b36]/55",children:[l.jsxs("div",{className:"flex items-center justify-between gap-3",children:[l.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-3 py-1 text-[10px] font-black uppercase text-[#ff6982]",children:x0[K.registration_status]}),l.jsx("span",{className:"text-xs text-white/35",children:new Date(K.created_at).toLocaleDateString("pt-BR")})]}),l.jsx("h3",{className:"mt-4 text-xl font-black",children:K.business_name}),l.jsx("p",{className:"mt-1 text-sm text-white/48",children:K.responsible_name}),l.jsx("p",{className:"mt-4 border-t border-white/10 pt-4 text-xs font-bold text-white/38",children:K.protocol})]},K.id))}):l.jsx("p",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhuma inscrição encontrada."})]})]})]})}function NE({row:s,session:r,screen:u,onBack:d,onUpdated:m}){const[p,v]=b.useState(""),[g,y]=b.useState(""),S=async(h,N)=>{v(h),y("");try{await tE(r,s.id,{[h]:N||null}),m({...s,[h]:N})}catch(U){y(U instanceof Error?U.message:"Falha ao atualizar.")}finally{v("")}},E=async h=>{try{window.open(await lE(r,h),"_blank","noopener,noreferrer")}catch(N){y(N instanceof Error?N.message:"Não foi possível abrir.")}};return l.jsxs("section",{className:"mt-7",children:[l.jsxs("button",{onClick:d,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55",children:[l.jsx(Pl,{className:"h-4 w-4"}),"Todas as inscrições"]}),l.jsxs("div",{className:"mt-5 grid gap-5 xl:grid-cols-[1.2fr_.8fr]",children:[l.jsxs("div",{className:"space-y-5",children:[l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[.16em] text-[#ffcc0b]",children:s.protocol}),l.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-4xl",children:s.business_name}),l.jsxs("p",{className:"mt-2 text-sm text-white/50",children:[s.segment," · ",s.business_phone," · ",s.business_instagram||"Sem Instagram"]}),l.jsx(Qn,{title:"Endereço",value:`${s.street}, ${s.address_number}${s.complement?` - ${s.complement}`:""} · ${s.neighborhood} · ${s.city}/${s.state} · CEP ${s.cep}`}),l.jsx(Qn,{title:"Responsável",value:`${s.responsible_name} · CPF ${s.cpf} · ${s.responsible_phone} · ${s.responsible_email||"Sem e-mail"}`})]}),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("h3",{className:"text-xl font-black",children:"Conteúdo publicitário"}),l.jsx(Qn,{title:"Briefing da rádio",value:s.radio_briefing}),l.jsx(Qn,{title:"Briefing do vídeo",value:s.motion_briefing}),l.jsx(Qn,{title:"Tela escolhida",value:u?`${u.name} · ${u.address}`:s.screen_id}),l.jsx(Qn,{title:"Investimento",value:s.payment_option==="avista"?"R$ 250,00 à vista":"2x de R$ 150,00 (R$ 300,00)"}),l.jsx(Qn,{title:"Contribuição",value:`${s.contribution_type}: ${s.contribution_description}${s.contribution_conditions?` · Condições: ${s.contribution_conditions}`:""}`})]}),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("h3",{className:"text-xl font-black",children:"Arquivos privados"}),l.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:s.assets.map(h=>l.jsxs("button",{onClick:()=>void E(h.path),className:"flex items-center gap-3 rounded-xl border border-white/10 p-4 text-left",children:[l.jsx($v,{className:"h-6 w-6 text-[#ffcc0b]"}),l.jsx("span",{className:"min-w-0 flex-1 truncate text-sm font-bold",children:h.name}),l.jsx(Jo,{className:"h-4 w-4 text-white/35"})]},h.path))})]})]}),l.jsxs("aside",{className:"space-y-5",children:[l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsx("h3",{className:"font-black",children:"Andamento"}),l.jsx("div",{className:"mt-5 space-y-4",children:Object.keys(gv).map(h=>l.jsxs("label",{className:"block text-xs font-bold uppercase tracking-wide text-white/48",children:[EE[h],l.jsx("select",{value:s[h],disabled:p===h,onChange:N=>void S(h,N.target.value),className:"mt-2 h-11 w-full rounded-lg border border-white/12 bg-[#06070a] px-3 text-sm normal-case text-white outline-none",children:gv[h].map(N=>l.jsx("option",{value:N,children:x0[N]},N))})]},h))})]}),l.jsx(xv,{label:"Observações financeiras",value:s.payment_notes||"",disabled:!!p,onSave:h=>void S("payment_notes",h)}),l.jsx(xv,{label:"Observações internas",value:s.internal_notes||"",disabled:!!p,onSave:h=>void S("internal_notes",h)}),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsx("h3",{className:"font-black",children:"Registro do aceite"}),l.jsx("p",{className:"mt-3 text-sm text-white/55",children:new Date(s.accepted_at).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}),l.jsxs("p",{className:"mt-2 text-xs text-white/35",children:["Versão: ",s.terms_version]}),l.jsxs("p",{className:"mt-4 text-xs leading-5 text-white/42",children:[s.declarations.filter(Boolean).length," de ",s.declarations.length," declarações registradas."]})]}),g&&l.jsx("p",{className:"rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:g})]})]})]})}const EE={registration_status:"Inscrição",financial_status:"Financeiro",spot_status:"Spot",video_status:"Vídeo",kit_status:"Kit promocional",contribution_status:"Contribuição"};function Qn({title:s,value:r}){return l.jsxs("div",{className:"mt-5 border-t border-white/10 pt-4",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-wide text-white/35",children:s}),l.jsx("p",{className:"mt-2 whitespace-pre-wrap text-sm leading-7 text-white/68",children:r})]})}function xv({label:s,value:r,disabled:u,onSave:d}){const[m,p]=b.useState(r);return b.useEffect(()=>p(r),[r]),l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsxs("label",{className:"text-sm font-black",children:[s,l.jsx("textarea",{value:m,onChange:v=>p(v.target.value),className:"mt-3 min-h-28 w-full rounded-lg border border-white/12 bg-black/20 p-3 text-sm outline-none"})]}),l.jsxs("button",{disabled:u||m===r,onClick:()=>d(m),className:"mt-3 inline-flex h-10 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase disabled:opacity-35",children:[l.jsx(yn,{className:"h-4 w-4"}),"Salvar"]})]})}function jE({session:s,screens:r,onSaved:u}){const d={name:"",address:"",description:"",photo_url:"",capacity:"",is_active:!0},[m,p]=b.useState(d),[v,g]=b.useState(!1),[y,S]=b.useState(""),E=async()=>{if(!m.name.trim()||!m.address.trim()){S("Informe nome e endereço reais da tela.");return}g(!0),S("");try{await pv(s,{name:m.name,address:m.address,description:m.description,photo_url:m.photo_url,capacity:m.capacity?Number(m.capacity):null,is_active:m.is_active}),p(d),u()}catch(N){S(N instanceof Error?N.message:"Não foi possível salvar.")}finally{g(!1)}},h=async N=>{try{await pv(s,{id:N.id,name:N.name,address:N.address,description:N.description||"",photo_url:N.photo_url||"",capacity:N.capacity,is_active:!N.is_active}),u()}catch(U){S(U instanceof Error?U.message:"Não foi possível atualizar.")}};return l.jsxs("section",{className:"mt-7 grid gap-6 lg:grid-cols-[.75fr_1.25fr]",children:[l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[l.jsx("h3",{className:"text-xl font-black",children:"Cadastrar tela real"}),l.jsx("p",{className:"mt-2 text-sm leading-6 text-white/45",children:"As opções ativas aparecem no formulário público. Não use dados fictícios."}),l.jsx("div",{className:"mt-5 space-y-4",children:[["Nome do local","name"],["Endereço","address"],["Descrição","description"],["URL da foto","photo_url"],["Capacidade (opcional)","capacity"]].map(([N,U])=>l.jsxs("label",{className:"block text-sm font-bold",children:[N,l.jsx("input",{type:U==="capacity"?"number":"text",value:String(m[U]),onChange:I=>p(L=>({...L,[U]:I.target.value})),className:"mt-2 h-11 w-full rounded-lg border border-white/12 bg-black/20 px-3 outline-none"})]},U))}),y&&l.jsx("p",{className:"mt-4 text-sm text-red-300",children:y}),l.jsxs("button",{onClick:()=>void E(),disabled:v,className:"mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase",children:[l.jsx(Fv,{className:"h-4 w-4"}),"Cadastrar tela"]})]}),l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-black",children:["Telas cadastradas (",r.length,")"]}),l.jsx("div",{className:"mt-4 grid gap-4 sm:grid-cols-2",children:r.map(N=>l.jsxs("article",{className:"rounded-2xl border border-white/12 bg-[#0c0e12] p-5",children:[l.jsxs("div",{className:"flex items-start justify-between gap-3",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"font-black",children:N.name}),l.jsx("p",{className:"mt-2 text-sm text-white/45",children:N.address})]}),l.jsx("span",{className:`rounded-full px-2.5 py-1 text-[10px] font-black uppercase ${N.is_active?"bg-emerald-400/10 text-emerald-300":"bg-white/8 text-white/40"}`,children:N.is_active?"Ativa":"Inativa"})]}),l.jsxs("p",{className:"mt-4 text-xs text-white/35",children:["Capacidade: ",N.capacity??"Sem limite"]}),l.jsx("button",{onClick:()=>void h(N),className:"mt-4 h-9 rounded-lg border border-white/12 px-3 text-xs font-bold",children:N.is_active?"Desativar":"Ativar"})]},N.id))})]})]})}const bv=5,SE=25*1024*1024,AE=new Set(["image/jpeg","image/png","image/webp","image/svg+xml"]),Aa="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#07080b] px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition hover:border-white/30 focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/25",wa="block text-sm font-bold text-white",wE=[["institucional","Publicidade institucional da marca"],["produto_servico","Divulgar determinado produto ou serviço"],["promocao","Promoção exclusiva e/ou inédita"],["fortalecer_marca","Fortalecer a marca"],["visita_estabelecimento","Incentivar a visita no meu estabelecimento"],["outro","Outro"]];function OE(){const s=new Date;return`VMV-${`${s.getFullYear()}${String(s.getMonth()+1).padStart(2,"0")}${String(s.getDate()).padStart(2,"0")}`}-${crypto.randomUUID().slice(0,6).toUpperCase()}`}function Bt(s){return s.trim()||null}function Yu(s,r){if(s.length+r.length>bv)return`Envie no máximo ${bv} imagens.`;const u=r.find(m=>!AE.has(m.type));if(u)return`O formato de “${u.name}” não é aceito.`;const d=r.find(m=>m.size>SE);return d?`O arquivo “${d.name}” ultrapassa 25 MB.`:""}function kl({children:s}){return l.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[l.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:l.jsxs("div",{className:"mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8",children:[l.jsx(xt,{to:"/","aria-label":"Voltar ao site",children:l.jsx($a,{size:"sm"})}),l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("span",{className:"hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline",children:"Portal de vídeos"}),l.jsxs(xt,{to:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 hover:text-white",children:[l.jsx(Pl,{className:"h-4 w-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})]})}),s]})}function b0({eyebrow:s,title:r,copy:u}){return l.jsxs("section",{className:"relative overflow-hidden border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16",children:[l.jsx("div",{className:"pointer-events-none absolute inset-0 bg-led-grid opacity-35"}),l.jsx("div",{className:"pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]"}),l.jsxs("div",{className:"relative mx-auto max-w-4xl text-center",children:[l.jsxs("p",{className:"brand-eyebrow justify-center",children:[l.jsx("span",{className:"brand-eyebrow-line"}),s]}),l.jsx("h1",{className:"brand-section-title",children:r}),l.jsx("p",{className:"brand-section-copy mx-auto",children:u})]})]})}function Bu(){const[s,r]=b.useState([]),[u,d]=b.useState(""),[m,p]=b.useState(!0),[v,g]=b.useState("");b.useEffect(()=>{document.title="Escolha seu negócio | VM MÍDIAS",s0().then(r).catch(S=>g(S instanceof Error?S.message:"Não foi possível carregar os negócios.")).finally(()=>p(!1))},[]);const y=b.useMemo(()=>{const S=u.trim().toLocaleLowerCase("pt-BR");return S?s.filter(E=>`${E.name} ${E.segment}`.toLocaleLowerCase("pt-BR").includes(S)):s},[s,u]);return l.jsx(kl,{children:l.jsxs("main",{children:[l.jsx(b0,{eyebrow:"Seu espaço na VM MÍDIAS",title:l.jsxs(l.Fragment,{children:["Encontre seu ",l.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Pesquise o nome do seu negócio para consultar os dados cadastrados e solicitar um novo vídeo."}),l.jsxs("section",{className:"mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14",children:[l.jsxs("div",{className:"flex flex-col gap-4 rounded-2xl border border-white/12 bg-[#0d0f13] p-4 sm:flex-row sm:items-center sm:p-5",children:[l.jsxs("label",{className:"relative min-w-0 flex-1",children:[l.jsx(ks,{className:"pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35"}),l.jsx("input",{value:u,onChange:S=>d(S.target.value),className:"h-14 w-full rounded-xl border border-white/15 bg-black/30 pl-12 pr-4 text-base outline-none placeholder:text-white/35 focus:border-[#f40b36]",placeholder:"Digite o nome do negócio",autoFocus:!0})]}),l.jsxs(xt,{to:"/solicitar-video/novo-negocio",className:"brand-button brand-button-primary whitespace-nowrap",children:[l.jsx(Fv,{className:"h-4 w-4"}),"Cadastrar negócio"]})]}),v&&l.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),m?l.jsx("div",{className:"flex min-h-64 items-center justify-center",children:l.jsx(ma,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):y.length?l.jsx("div",{className:"mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:y.map(S=>l.jsx(TE,{business:S},S.id))}):l.jsxs("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center",children:[l.jsx($l,{className:"mx-auto h-9 w-9 text-white/25"}),l.jsx("h2",{className:"mt-4 text-xl font-black",children:"Negócio não encontrado"}),l.jsx("p",{className:"mt-2 text-sm text-white/50",children:"Confira o nome ou cadastre o negócio para continuar."})]})]})]})})}function TE({business:s}){const r=s.assets[0];return l.jsxs(xt,{to:`/solicitar-video/negocio/${s.id}`,className:"group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f13] p-5 transition hover:-translate-y-1 hover:border-[#f40b36]/55 hover:shadow-2xl hover:shadow-[#f40b36]/10",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35",children:r?l.jsx("img",{src:Pn(r.path),alt:`Logo de ${s.name}`,className:"h-full w-full object-contain p-2"}):l.jsx($l,{className:"h-8 w-8 text-white/30"})}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("h2",{className:"truncate text-xl font-black",children:s.name}),l.jsx("p",{className:"mt-1 truncate text-sm text-white/50",children:s.segment})]})]}),l.jsxs("span",{className:"mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.1em] text-white/65 group-hover:text-white",children:["Abrir negócio ",l.jsx(gt,{className:"h-4 w-4"})]})]})}const y0={name:"",whatsapp:"",instagram:"",address:"",segment:"",description:"",consent:!1};function Hu(){const[s,r]=b.useState(y0),[u,d]=b.useState([]),[m,p]=b.useState(!1),[v,g]=b.useState(""),[y,S]=b.useState(null);b.useEffect(()=>{document.title="Cadastrar negócio | VM MÍDIAS"},[]);const E=N=>{const U=Array.from(N.target.files??[]);N.target.value="";const I=Yu(u,U);if(I)return g(I);g(""),d(L=>[...L,...U])},h=async N=>{if(N.preventDefault(),g(""),!u.length)return g("Envie o logo ou ao menos uma imagem do negócio.");p(!0);try{const U=crypto.randomUUID(),I=await i0(U,u),L={id:U,name:s.name.trim(),whatsapp:Bt(s.whatsapp),instagram:Bt(s.instagram),address:Bt(s.address),segment:s.segment.trim(),description:Bt(s.description),assets:I,consent:!0};await xN(L),S({...L,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),window.scrollTo({top:0,behavior:"smooth"})}catch(U){g(U instanceof Error?U.message:"Não foi possível cadastrar o negócio.")}finally{p(!1)}};return y?l.jsx(E0,{title:"Negócio cadastrado",copy:"Agora o negócio já pode ser encontrado na pesquisa e receber novas solicitações de vídeo.",action:l.jsxs(xt,{to:`/solicitar-video/negocio/${y.id}`,className:"brand-button brand-button-primary",children:["Abrir negócio ",l.jsx(gt,{className:"h-4 w-4"})]})}):l.jsx(kl,{children:l.jsxs("main",{children:[l.jsx(b0,{eyebrow:"Primeiro acesso",title:l.jsxs(l.Fragment,{children:["Cadastre seu ",l.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Preencha somente as informações principais. Elas ficarão salvas para os próximos vídeos."}),l.jsx("section",{className:"mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14",children:l.jsxs("form",{onSubmit:h,className:"brand-panel rounded-2xl p-5 sm:p-8",children:[l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsxs("label",{className:`${wa} sm:col-span-2`,children:["Nome do negócio *",l.jsx("input",{required:!0,maxLength:120,value:s.name,onChange:N=>r({...s,name:N.target.value}),className:Aa,placeholder:"Nome do negócio"})]}),l.jsxs("label",{className:wa,children:["Segmento do negócio *",l.jsx("input",{required:!0,maxLength:120,value:s.segment,onChange:N=>r({...s,segment:N.target.value}),className:Aa,placeholder:"Ex.: bar, mercado, academia"})]}),l.jsxs("label",{className:wa,children:["Endereço (caso seja físico)",l.jsx("input",{maxLength:300,value:s.address,onChange:N=>r({...s,address:N.target.value}),className:Aa,placeholder:"Rua, número e bairro"})]}),l.jsxs("label",{className:wa,children:["WhatsApp",l.jsx("input",{maxLength:30,value:s.whatsapp,onChange:N=>r({...s,whatsapp:N.target.value}),className:Aa,placeholder:"(15) 99999-9999"})]}),l.jsxs("label",{className:wa,children:["Instagram",l.jsx("input",{maxLength:120,value:s.instagram,onChange:N=>r({...s,instagram:N.target.value}),className:Aa,placeholder:"@nomedonegocio"})]})]}),l.jsxs("label",{className:`${wa} mt-5`,children:["Faça uma breve descrição sobre o negócio",l.jsx("textarea",{rows:4,maxLength:1200,value:s.description,onChange:N=>r({...s,description:N.target.value}),className:Aa,placeholder:"Conte brevemente o que o negócio oferece"})]}),l.jsx(Qu,{files:u,onFiles:E,onRemove:N=>d(U=>U.filter((I,L)=>L!==N)),title:"Logo e imagens do negócio *",copy:"Envie primeiro o logo e depois fotos da fachada, ambiente, produtos ou serviços. Máximo de 5 imagens."}),l.jsx(N0,{checked:s.consent,onChange:N=>r({...s,consent:N})}),v&&l.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),l.jsx("button",{disabled:m,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:m?l.jsxs(l.Fragment,{children:[l.jsx(ma,{className:"h-4 w-4 animate-spin"}),"Salvando negócio…"]}):l.jsxs(l.Fragment,{children:["Cadastrar negócio ",l.jsx(gt,{className:"h-4 w-4"})]})})]})})]})})}function yv(){const{businessId:s=""}=hb(),[r,u]=b.useState(null),[d,m]=b.useState(!0),[p,v]=b.useState(!1),[g,y]=b.useState(y0),[S,E]=b.useState([]),[h,N]=b.useState(""),[U,I]=b.useState(""),[L,B]=b.useState(""),[q,Q]=b.useState([]),[V,ie]=b.useState(!1),[ue,K]=b.useState(!1),[X,P]=b.useState(""),[se,k]=b.useState("");b.useEffect(()=>{s0().then(z=>{const Y=z.find(F=>F.id===s)||null;u(Y),Y&&y({name:Y.name,whatsapp:Y.whatsapp||"",instagram:Y.instagram||"",address:Y.address||"",segment:Y.segment,description:Y.description||"",consent:!0})}).catch(z=>P(z instanceof Error?z.message:"Não foi possível abrir o negócio.")).finally(()=>m(!1))},[s]);const le=z=>{const Y=Array.from(z.target.files??[]);z.target.value="";const F=Yu(q,Y);if(F)return P(F);P(""),Q(he=>[...he,...Y])},ne=z=>{const Y=Array.from(z.target.files??[]);z.target.value="";const F=Yu(S,Y);if(F)return P(F);if(((r==null?void 0:r.assets.length)||0)+S.length+Y.length>10)return P("O negócio pode possuir no máximo 10 imagens.");P(""),E(he=>[...he,...Y])},ze=async()=>{if(r){K(!0),P("");try{const z=S.length?await i0(r.id,S,r.assets.length):[],Y={name:g.name.trim(),whatsapp:Bt(g.whatsapp),instagram:Bt(g.instagram),address:Bt(g.address),segment:g.segment.trim(),description:Bt(g.description)};await bN(r.id,Y,z),u({...r,...Y,assets:[...r.assets,...z],updated_at:new Date().toISOString()}),E([]),v(!1)}catch(z){P(z instanceof Error?z.message:"Não foi possível alterar os dados.")}finally{K(!1)}}},Ye=async z=>{if(z.preventDefault(),!!r){if(P(""),!h)return P("Escolha um objetivo para o vídeo.");K(!0);try{const Y=crypto.randomUUID(),F=OE(),he=q.length?await gN(Y,q,r.id):[];await yN({id:Y,business_id:r.id,protocol:F,campaign_objective:h,objective_other:h==="outro"?Bt(U):null,video_idea:L.trim(),uploaded_assets:he,consent:!0,video_format:"vertical_9_16",duration_seconds:20}),k(F),window.scrollTo({top:0,behavior:"smooth"})}catch(Y){P(Y instanceof Error?Y.message:"Não foi possível enviar o pedido.")}finally{K(!1)}}};if(d)return l.jsx(kl,{children:l.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:l.jsx(ma,{className:"h-8 w-8 animate-spin text-[#f40b36]"})})});if(!r)return l.jsx(kl,{children:l.jsxs("div",{className:"mx-auto max-w-xl px-5 py-24 text-center",children:[l.jsx("h1",{className:"text-3xl font-black",children:"Negócio não encontrado"}),l.jsx(xt,{to:"/solicitar-video",className:"brand-button brand-button-primary mt-7",children:"Voltar para a pesquisa"})]})});if(se)return l.jsx(E0,{title:"Novo vídeo solicitado",copy:`Recebemos o pedido de ${r.name}. Guarde o protocolo ${se}.`,action:l.jsx(xt,{to:"/solicitar-video",className:"brand-button brand-button-primary",children:"Voltar aos negócios"})});const de=r.assets[0];return l.jsx(kl,{children:l.jsxs("main",{className:"mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14",children:[l.jsxs(xt,{to:"/solicitar-video",className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[l.jsx(Pl,{className:"h-4 w-4"}),"Voltar para a pesquisa"]}),l.jsxs("section",{className:"mt-6 rounded-2xl border border-white/12 bg-[#0d0f13] p-5 sm:p-8",children:[l.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[l.jsx("div",{className:"flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-black/30",children:de?l.jsx("img",{src:Pn(de.path),alt:`Logo de ${r.name}`,className:"h-full w-full object-contain p-2"}):l.jsx($l,{className:"h-9 w-9 text-white/30"})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Negócio cadastrado"}),l.jsx("h1",{className:"mt-2 text-3xl font-black sm:text-5xl",children:r.name}),l.jsxs("p",{className:"mt-2 text-white/50",children:[r.segment,r.address?` · ${r.address}`:""]})]}),l.jsxs("button",{type:"button",onClick:()=>v(!p),className:"brand-button brand-button-outline",children:[l.jsx(E2,{className:"h-4 w-4"}),"Alterar informações"]})]}),p&&l.jsxs("div",{className:"mt-7 border-t border-white/10 pt-7",children:[l.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[l.jsxs("label",{className:`${wa} sm:col-span-2`,children:["Nome do negócio *",l.jsx("input",{required:!0,value:g.name,onChange:z=>y({...g,name:z.target.value}),className:Aa})]}),l.jsxs("label",{className:wa,children:["Segmento *",l.jsx("input",{required:!0,value:g.segment,onChange:z=>y({...g,segment:z.target.value}),className:Aa})]}),l.jsxs("label",{className:wa,children:["Endereço",l.jsx("input",{value:g.address,onChange:z=>y({...g,address:z.target.value}),className:Aa})]}),l.jsxs("label",{className:wa,children:["WhatsApp",l.jsx("input",{value:g.whatsapp,onChange:z=>y({...g,whatsapp:z.target.value}),className:Aa})]}),l.jsxs("label",{className:wa,children:["Instagram",l.jsx("input",{maxLength:120,value:g.instagram,onChange:z=>y({...g,instagram:z.target.value}),className:Aa,placeholder:"@nomedonegocio"})]})]}),l.jsxs("label",{className:`${wa} mt-5`,children:["Descrição",l.jsx("textarea",{rows:3,value:g.description,onChange:z=>y({...g,description:z.target.value}),className:Aa})]}),l.jsx(Qu,{files:S,onFiles:ne,onRemove:z=>E(Y=>Y.filter((F,he)=>he!==z)),title:"Adicionar novas imagens",copy:`Este negócio possui ${r.assets.length} de 10 imagens. Você pode adicionar até 5 por vez.`}),l.jsxs("button",{type:"button",disabled:ue,onClick:()=>void ze(),className:"brand-button brand-button-primary mt-5 disabled:opacity-50",children:[ue?l.jsx(ma,{className:"h-4 w-4 animate-spin"}):null,"Salvar alterações"]})]})]}),l.jsxs("form",{onSubmit:Ye,className:"brand-panel mt-7 rounded-2xl p-5 sm:p-8",children:[l.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Novo pedido"}),l.jsx("h2",{className:"mt-2 text-2xl font-black sm:text-4xl",children:"Solicitar novo vídeo"}),l.jsxs("p",{className:"mt-3 text-sm leading-6 text-white/50",children:["O pedido ficará automaticamente relacionado a ",r.name,"."]}),l.jsxs("fieldset",{className:"mt-8",children:[l.jsx("legend",{className:"text-base font-black",children:"1. Objetivo do vídeo *"}),l.jsx("p",{className:"mt-1 text-sm text-white/45",children:"Escolha apenas uma opção."}),l.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:wE.map(([z,Y])=>l.jsxs("label",{className:`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition ${h===z?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-black/20 hover:border-white/25"}`,children:[l.jsx("input",{required:!0,type:"radio",name:"objective",value:z,checked:h===z,onChange:()=>N(z),className:"h-4 w-4 accent-[#f40b36]"}),Y]},z))}),h==="outro"&&l.jsxs("label",{className:`${wa} mt-4`,children:["Qual?",l.jsx("input",{maxLength:300,value:U,onChange:z=>I(z.target.value),className:Aa,placeholder:"Descreva o outro objetivo"})]})]}),l.jsxs("label",{className:`${wa} mt-8`,children:["2. Escreva brevemente o que deseja no vídeo",l.jsx("textarea",{rows:5,maxLength:2400,value:L,onChange:z=>B(z.target.value),className:Aa,placeholder:"Conte sua ideia de forma simples"}),l.jsxs("span",{className:"mt-2 block text-xs font-normal text-white/35",children:[L.length,"/2400 caracteres"]})]}),l.jsx(Qu,{files:q,onFiles:le,onRemove:z=>Q(Y=>Y.filter((F,he)=>he!==z)),title:"3. Imagens adicionais",copy:"Envie somente imagens úteis para este novo vídeo. Máximo de 5 imagens."}),l.jsx(N0,{checked:V,onChange:ie}),X&&l.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:X}),l.jsx("button",{disabled:ue,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:ue?l.jsxs(l.Fragment,{children:[l.jsx(ma,{className:"h-4 w-4 animate-spin"}),"Enviando pedido…"]}):l.jsxs(l.Fragment,{children:["Solicitar novo vídeo ",l.jsx(gt,{className:"h-4 w-4"})]})})]})]})})}function Qu({files:s,onFiles:r,onRemove:u,title:d,copy:m}){return l.jsxs("div",{className:"mt-7",children:[l.jsx("p",{className:"text-sm font-bold",children:d}),l.jsxs("label",{className:"mt-2 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/20 bg-black/20 px-5 py-7 text-center hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5",children:[l.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp,image/svg+xml",onChange:r,className:"sr-only"}),l.jsx(By,{className:"h-7 w-7 text-[#ff3155]"}),l.jsx("strong",{className:"mt-3 text-sm",children:"Escolher imagens"}),l.jsx("span",{className:"mt-2 max-w-lg text-xs leading-5 text-white/40",children:m})]}),s.length>0&&l.jsx("ul",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:s.map((p,v)=>l.jsxs("li",{className:"flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[l.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]",children:p.type.startsWith("image/")?l.jsx(n2,{className:"h-4 w-4"}):l.jsx(Py,{className:"h-4 w-4"})}),l.jsx("span",{className:"min-w-0 flex-1 truncate text-xs font-bold",children:p.name}),l.jsx("button",{type:"button",onClick:()=>u(v),"aria-label":`Remover ${p.name}`,className:"rounded-md p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300",children:l.jsx(a0,{className:"h-4 w-4"})})]},`${p.name}-${p.lastModified}-${v}`))})]})}function N0({checked:s,onChange:r}){return l.jsxs("label",{className:"mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60",children:[l.jsx("input",{required:!0,type:"checkbox",checked:s,onChange:u=>r(u.target.checked),className:"mt-1 h-4 w-4 accent-[#f40b36]"}),"Autorizo a VM MÍDIAS a utilizar as informações e imagens enviadas para produzir os vídeos e entrar em contato."]})}function E0({title:s,copy:r,action:u}){return l.jsx(kl,{children:l.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-76px)] max-w-2xl items-center px-5 py-16",children:l.jsxs("section",{className:"w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-8 text-center",children:[l.jsx(zy,{className:"mx-auto h-14 w-14 text-emerald-300"}),l.jsx("h1",{className:"mt-6 text-3xl font-black sm:text-5xl",children:s}),l.jsx("p",{className:"mx-auto mt-4 max-w-lg leading-7 text-white/55",children:r}),l.jsx("div",{className:"mt-8",children:u})]})})})}function CE(){return l.jsxs(Rb,{children:[l.jsx(ua,{path:"/admin",element:l.jsx(uv,{})}),l.jsx(ua,{path:"/admin/solicitacoes",element:l.jsx(uv,{})}),l.jsx(ua,{path:"/admin/noticias",element:l.jsx(kN,{})}),l.jsx(ua,{path:"/admin/verao-premiado",element:l.jsx(yE,{})}),l.jsx(ua,{path:"/veraopremiado",element:l.jsx(sE,{})}),l.jsx(ua,{path:"/solicitar-video",element:l.jsx(Bu,{})}),l.jsx(ua,{path:"/solicitar-video/novo-negocio",element:l.jsx(Hu,{})}),l.jsx(ua,{path:"/solicitar-video/negocio/:businessId",element:l.jsx(yv,{})}),l.jsx(ua,{path:"/solicitar-video/novo-comercio",element:l.jsx(Hu,{})}),l.jsx(ua,{path:"/solicitar-video/comercio/:businessId",element:l.jsx(yv,{})}),l.jsx(ua,{path:"/solicitar-video/novo-cliente",element:l.jsx(Hu,{})}),l.jsx(ua,{path:"/solicitar-video/cliente-atual",element:l.jsx(Bu,{})}),l.jsx(ua,{path:"/solicitar-arte",element:l.jsx(Bu,{})}),l.jsx(ua,{path:"/politica-de-privacidade",element:l.jsx(fN,{})}),l.jsx(ua,{path:"*",element:l.jsx(RE,{})})]})}function RE(){const[s,r]=b.useState(!1),[u,d]=b.useState("DESTAQUE"),[m,p]=b.useState("anual"),v=(g,y)=>{d(g),p(y)};return l.jsxs("div",{className:"min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#F8032D] selection:text-white flex flex-col",children:[l.jsx(J2,{}),l.jsxs("main",{className:"flex-grow",children:[l.jsx(eN,{}),l.jsx(tN,{}),l.jsx(nN,{}),l.jsx(lN,{onSelectPlan:v}),l.jsx(iN,{}),l.jsx(sN,{}),l.jsx(rN,{}),l.jsx(cN,{selectedPlanName:u,selectedPlanCycle:m})]}),l.jsx(uN,{onOpenPrivacyModal:()=>r(!0)}),l.jsx(dN,{}),l.jsx(mN,{isOpen:s,onClose:()=>r(!1)})]})}T1.createRoot(document.getElementById("root")).render(l.jsx(b.StrictMode,{children:l.jsx(ey,{children:l.jsx(CE,{})})}));
