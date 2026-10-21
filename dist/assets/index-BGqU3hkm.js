(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function d(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(f){if(f.ep)return;f.ep=!0;const p=d(f);fetch(f.href,p)}})();var vu={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function Ix(){if(bh)return zo;bh=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(u,f,p){var v=null;if(p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),"key"in f){p={};for(var x in f)x!=="key"&&(p[x]=f[x])}else p=f;return f=p.ref,{$$typeof:i,type:u,key:v,ref:f!==void 0?f:null,props:p}}return zo.Fragment=c,zo.jsx=d,zo.jsxs=d,zo}var yh;function Vx(){return yh||(yh=1,vu.exports=Ix()),vu.exports}var s=Vx(),gu={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function Yx(){if(Nh)return te;Nh=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),C=Symbol.for("react.view_transition"),L=Symbol.iterator;function Q(S){return S===null||typeof S!="object"?null:(S=L&&S[L]||S["@@iterator"],typeof S=="function"?S:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,_={};function G(S,q,F){this.props=S,this.context=q,this.refs=_,this.updater=F||H}G.prototype.isReactComponent={},G.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},G.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function I(){}I.prototype=G.prototype;function ue(S,q,F){this.props=S,this.context=q,this.refs=_,this.updater=F||H}var de=ue.prototype=new I;de.constructor=ue,B(de,G.prototype),de.isPureReactComponent=!0;var me=Array.isArray;function ee(){}var $={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function ke(S,q,F){var J=F.ref;return{$$typeof:i,type:S,key:q,ref:J!==void 0?J:null,props:F}}function ia(S,q){return ke(S.type,q,S.props)}function Je(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function Ea(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(F){return q[F]})}var za=/\/+/g;function Ne(S,q){return typeof S=="object"&&S!==null&&S.key!=null?Ea(""+S.key):q.toString(36)}function U(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ee,ee):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Y(S,q,F,J,ve){var ge=typeof S;(ge==="undefined"||ge==="boolean")&&(S=null);var be=!1;if(S===null)be=!0;else switch(ge){case"bigint":case"string":case"number":be=!0;break;case"object":switch(S.$$typeof){case i:case c:be=!0;break;case E:return be=S._init,Y(be(S._payload),q,F,J,ve)}}if(be)return ve=ve(S),be=J===""?"."+Ne(S,0):J,me(ve)?(F="",be!=null&&(F=be.replace(za,"$&/")+"/"),Y(ve,q,F,"",function(bt){return bt})):ve!=null&&(Je(ve)&&(ve=ia(ve,F+(ve.key==null||S&&S.key===ve.key?"":(""+ve.key).replace(za,"$&/")+"/")+be)),q.push(ve)),1;be=0;var K=J===""?".":J+":";if(me(S))for(var ae=0;ae<S.length;ae++)J=S[ae],ge=K+Ne(J,ae),be+=Y(J,q,F,ge,ve);else if(ae=Q(S),typeof ae=="function")for(S=ae.call(S),ae=0;!(J=S.next()).done;)J=J.value,ge=K+Ne(J,ae++),be+=Y(J,q,F,ge,ve);else if(ge==="object"){if(typeof S.then=="function")return Y(U(S),q,F,J,ve);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return be}function Z(S,q,F){if(S==null)return S;var J=[],ve=0;return Y(S,J,"","",function(ge){return q.call(F,ge,ve++)}),J}function se(S){if(S._status===-1){var q=S._result,F=q();F.then(function(J){(S._status===0||S._status===-1)&&(S._status=1,S._result=J,F.status===void 0&&(F.status="fulfilled",F.value=J))},function(J){(S._status===0||S._status===-1)&&(S._status=2,S._result=J,F.status===void 0&&(F.status="rejected",F.reason=J))}),S._status===-1&&(S._status=0,S._result=F)}if(S._status===1)return S._result.default;throw S._result}var Ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Xa(S){var q=$.T,F={};F.types=q!==null?q.types:null,$.T=F;try{var J=S(),ve=$.S;ve!==null&&ve(F,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ee,Ee)}catch(ge){Ee(ge)}finally{q!==null&&F.types!==null&&(q.types=F.types),$.T=q}}function xt(S){var q=$.T;if(q!==null){var F=q.types;F===null?q.types=[S]:F.indexOf(S)===-1&&F.push(S)}else Xa(xt.bind(null,S))}var vn={map:Z,forEach:function(S,q,F){Z(S,function(){q.apply(this,arguments)},F)},count:function(S){var q=0;return Z(S,function(){q++}),q},toArray:function(S){return Z(S,function(q){return q})||[]},only:function(S){if(!Je(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return te.Activity=h,te.Children=vn,te.Component=G,te.Fragment=d,te.Profiler=f,te.PureComponent=ue,te.StrictMode=u,te.Suspense=y,te.ViewTransition=C,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,te.__COMPILER_RUNTIME={__proto__:null,c:function(S){return $.H.useMemoCache(S)}},te.addTransitionType=xt,te.cache=function(S){return function(){return S.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(S,q,F){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var J=B({},S.props),ve=S.key;if(q!=null)for(ge in q.key!==void 0&&(ve=""+q.key),q)!Ye.call(q,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&q.ref===void 0||(J[ge]=q[ge]);var ge=arguments.length-2;if(ge===1)J.children=F;else if(1<ge){for(var be=Array(ge),K=0;K<ge;K++)be[K]=arguments[K+2];J.children=be}return ke(S.type,ve,J)},te.createContext=function(S){return S={$$typeof:v,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:p,_context:S},S},te.createElement=function(S,q,F){var J,ve={},ge=null;if(q!=null)for(J in q.key!==void 0&&(ge=""+q.key),q)Ye.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ve[J]=q[J]);var be=arguments.length-2;if(be===1)ve.children=F;else if(1<be){for(var K=Array(be),ae=0;ae<be;ae++)K[ae]=arguments[ae+2];ve.children=K}if(S&&S.defaultProps)for(J in be=S.defaultProps,be)ve[J]===void 0&&(ve[J]=be[J]);return ke(S,ge,ve)},te.createRef=function(){return{current:null}},te.forwardRef=function(S){return{$$typeof:x,render:S}},te.isValidElement=Je,te.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:se}},te.memo=function(S,q){return{$$typeof:j,type:S,compare:q===void 0?null:q}},te.startTransition=Xa,te.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},te.use=function(S){return $.H.use(S)},te.useActionState=function(S,q,F){return $.H.useActionState(S,q,F)},te.useCallback=function(S,q){return $.H.useCallback(S,q)},te.useContext=function(S){return $.H.useContext(S)},te.useDebugValue=function(){},te.useDeferredValue=function(S,q){return $.H.useDeferredValue(S,q)},te.useEffect=function(S,q){return $.H.useEffect(S,q)},te.useEffectEvent=function(S){return $.H.useEffectEvent(S)},te.useId=function(){return $.H.useId()},te.useImperativeHandle=function(S,q,F){return $.H.useImperativeHandle(S,q,F)},te.useInsertionEffect=function(S,q){return $.H.useInsertionEffect(S,q)},te.useLayoutEffect=function(S,q){return $.H.useLayoutEffect(S,q)},te.useMemo=function(S,q){return $.H.useMemo(S,q)},te.useOptimistic=function(S,q){return $.H.useOptimistic(S,q)},te.useReducer=function(S,q,F){return $.H.useReducer(S,q,F)},te.useRef=function(S){return $.H.useRef(S)},te.useState=function(S){return $.H.useState(S)},te.useSyncExternalStore=function(S,q,F){return $.H.useSyncExternalStore(S,q,F)},te.useTransition=function(){return $.H.useTransition()},te.version="19.3.0",te}var Eh;function Uu(){return Eh||(Eh=1,gu.exports=Yx()),gu.exports}var N=Uu(),xu={exports:{}},Uo={},bu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function Qx(){return Sh||(Sh=1,(function(i){function c(U,Y){var Z=U.length;U.push(Y);e:for(;0<Z;){var se=Z-1>>>1,Ee=U[se];if(0<f(Ee,Y))U[se]=Y,U[Z]=Ee,Z=se;else break e}}function d(U){return U.length===0?null:U[0]}function u(U){if(U.length===0)return null;var Y=U[0],Z=U.pop();if(Z!==Y){U[0]=Z;e:for(var se=0,Ee=U.length,Xa=Ee>>>1;se<Xa;){var xt=2*(se+1)-1,vn=U[xt],S=xt+1,q=U[S];if(0>f(vn,Z))S<Ee&&0>f(q,vn)?(U[se]=q,U[S]=Z,se=S):(U[se]=vn,U[xt]=Z,se=xt);else if(S<Ee&&0>f(q,Z))U[se]=q,U[S]=Z,se=S;else break e}}return Y}function f(U,Y){var Z=U.sortIndex-Y.sortIndex;return Z!==0?Z:U.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var v=Date,x=v.now();i.unstable_now=function(){return v.now()-x}}var y=[],j=[],E=1,h=null,C=3,L=!1,Q=!1,H=!1,B=!1,_=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function ue(U){for(var Y=d(j);Y!==null;){if(Y.callback===null)u(j);else if(Y.startTime<=U)u(j),Y.sortIndex=Y.expirationTime,c(y,Y);else break;Y=d(j)}}function de(U){if(H=!1,ue(U),!Q)if(d(y)!==null)Q=!0,me||(me=!0,Je());else{var Y=d(j);Y!==null&&Ne(de,Y.startTime-U)}}var me=!1,ee=-1,$=5,Ye=-1;function ke(){return B?!0:!(i.unstable_now()-Ye<$)}function ia(){if(B=!1,me){var U=i.unstable_now();Ye=U;var Y=!0;try{e:{Q=!1,H&&(H=!1,G(ee),ee=-1),L=!0;var Z=C;try{a:{for(ue(U),h=d(y);h!==null&&!(h.expirationTime>U&&ke());){var se=h.callback;if(typeof se=="function"){h.callback=null,C=h.priorityLevel;var Ee=se(h.expirationTime<=U);if(U=i.unstable_now(),typeof Ee=="function"){h.callback=Ee,ue(U),Y=!0;break a}h===d(y)&&u(y),ue(U)}else u(y);h=d(y)}if(h!==null)Y=!0;else{var Xa=d(j);Xa!==null&&Ne(de,Xa.startTime-U),Y=!1}}break e}finally{h=null,C=Z,L=!1}Y=void 0}}finally{Y?Je():me=!1}}}var Je;if(typeof I=="function")Je=function(){I(ia)};else if(typeof MessageChannel<"u"){var Ea=new MessageChannel,za=Ea.port2;Ea.port1.onmessage=ia,Je=function(){za.postMessage(null)}}else Je=function(){_(ia,0)};function Ne(U,Y){ee=_(function(){U(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(U){switch(C){case 1:case 2:case 3:var Y=3;break;default:Y=C}var Z=C;C=Y;try{return U()}finally{C=Z}},i.unstable_requestPaint=function(){B=!0},i.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=C;C=U;try{return Y()}finally{C=Z}},i.unstable_scheduleCallback=function(U,Y,Z){var se=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,U){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,U={id:E++,callback:Y,priorityLevel:U,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>se?(U.sortIndex=Z,c(j,U),d(y)===null&&U===d(j)&&(H?(G(ee),ee=-1):H=!0,Ne(de,Z-se))):(U.sortIndex=Ee,c(y,U),Q||L||(Q=!0,me||(me=!0,Je()))),U},i.unstable_shouldYield=ke,i.unstable_wrapCallback=function(U){var Y=C;return function(){var Z=C;C=Y;try{return U.apply(this,arguments)}finally{C=Z}}}})(yu)),yu}var Ah;function kx(){return Ah||(Ah=1,bu.exports=Qx()),bu.exports}var Nu={exports:{}},oa={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Xx(){if(Oh)return oa;Oh=1;var i=Uu();function c(E){var h="https://react.dev/errors/"+E;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+E+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal"),p=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function x(E,h,C){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:L==null?null:L===v?v:""+L,children:E,containerInfo:h,implementation:C}}var y=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(E,h){if(E==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return oa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,oa.browser=function(E){return{$$typeof:p,_reason:E}},oa.createPortal=function(E,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return x(E,h,null,C)},oa.flushSync=function(E){var h=y.T,C=u.p;try{if(y.T=null,u.p=2,E)return E()}finally{y.T=h,u.p=C,u.d.f()}},oa.preconnect=function(E,h){typeof E=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(E,h))},oa.prefetchDNS=function(E){typeof E=="string"&&u.d.D(E)},oa.preinit=function(E,h){if(typeof E=="string"&&h&&typeof h.as=="string"){var C=h.as,L=j(C,h.crossOrigin),Q=typeof h.integrity=="string"?h.integrity:void 0,H=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?u.d.S(E,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:L,integrity:Q,fetchPriority:H}):C==="script"&&u.d.X(E,{crossOrigin:L,integrity:Q,fetchPriority:H,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},oa.preinitModule=function(E,h){if(typeof E=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=j(h.as,h.crossOrigin);u.d.M(E,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}}else h==null&&u.d.M(E)},oa.preload=function(E,h){if(typeof E=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,L=j(C,h.crossOrigin);u.d.L(E,C,{crossOrigin:L,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},oa.preloadModule=function(E,h){if(typeof E=="string")if(h){var C=j(h.as,h.crossOrigin);u.d.m(E,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}else u.d.m(E)},oa.requestFormReset=function(E){u.d.r(E)},oa.unstable_batchedUpdates=function(E,h){return E(h)},oa.useFormState=function(E,h,C){return y.H.useFormState(E,h,C)},oa.useFormStatus=function(){return y.H.useHostTransitionStatus()},oa.version="19.3.0",oa}var Th;function Zx(){if(Th)return Nu.exports;Th=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Nu.exports=Xx(),Nu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh;function Kx(){if(jh)return Uo;jh=1;var i=kx(),c=Uu(),d=Zx();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){for(var a=e,t=a;t&&!t.alternate;)a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function x(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(u(188))}function j(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(u(188));return a!==e?null:e}for(var t=e,n=a;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return y(l),e;if(o===n)return y(l),a;o=o.sibling}throw Error(u(188))}if(t.return!==n.return)t=l,n=o;else{for(var r=!1,m=l.child;m;){if(m===t){r=!0,t=l,n=o;break}if(m===n){r=!0,n=l,t=o;break}m=m.sibling}if(!r){for(m=o.child;m;){if(m===t){r=!0,t=o,n=l;break}if(m===n){r=!0,n=o,t=l;break}m=m.sibling}if(!r)throw Error(u(189))}}if(t.alternate!==n)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:a}function E(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=E(e),a!==null)return a;e=e.sibling}return null}function h(e,a,t,n,l,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,n,l,o)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&h(e.child,a,t,n,l,o))return!0;e=e.sibling}return!1}function C(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function L(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function Q(e){var a=[null,null],t=C(e);return t===null||H(a,e,t.child,{foundSelf:!1}),a}function H(e,a,t,n){for(;t!==null;){if(t===a)n.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(n.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&H(e,a,t.child,n))return!0;t=t.sibling}return!1}function B(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(u(559))}}var _=null,G=null;function I(e,a,t){return e===t?!0:e===a?(_=e,!0):!1}function ue(e,a,t){return e===t?(G=e,!1):e===a?(G!==null&&(_=e),!0):!1}function de(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function me(e,a,t){for(var n=0,l=e;l;l=t(l))n++;l=0;for(var o=a;o;o=t(o))l++;for(;0<n-l;)e=t(e),n--;for(;0<l-n;)a=t(a),l--;for(;n--;){if(e===a||a!==null&&e===a.alternate)return e;e=t(e),a=t(a)}return null}var ee=Object.assign,$=Symbol.for("react.element"),Ye=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),ia=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),Ea=Symbol.for("react.profiler"),za=Symbol.for("react.consumer"),Ne=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Xa=Symbol.for("react.activity"),xt=Symbol.for("react.legacy_hidden"),vn=Symbol.for("react.memo_cache_sentinel"),S=Symbol.for("react.view_transition"),q=Symbol.for("react.recoverable"),F=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ia:return"Fragment";case Ea:return"Profiler";case Je:return"StrictMode";case Y:return"Suspense";case Z:return"SuspenseList";case Xa:return"Activity";case S:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case Ne:return e.displayName||"Context";case za:return(e._context.displayName||"Context")+".Consumer";case U:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return a=e.displayName||null,a!==null?a:ge(e.type)||"Memo";case Ee:a=e._payload,e=e._init;try{return ge(e(a))}catch{}}return null}var be=Array.isArray,K=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bt={pending:!1,data:null,method:null,action:null},Us=[],Vn=-1;function et(e){return{current:e}}function $e(e){0>Vn||(e.current=Us[Vn],Us[Vn]=null,Vn--)}function Re(e,a){Vn++,Us[Vn]=e.current,e.current=a}var at=et(null),Bl=et(null),Ht=et(null),Qo=et(null);function ko(e,a){switch(Re(Ht,a),Re(Bl,e),Re(at,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?wp(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=wp(a),e=Rp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(at),Re(at,e)}function Yn(){$e(at),$e(Bl),$e(Ht)}function qs(e){var a=e.memoizedState;a!==null&&(Cl._currentValue=a.memoizedState,Re(Qo,e)),a=at.current;var t=Rp(a,e.type);a!==t&&(Re(Bl,e),Re(at,t))}function Xo(e){Bl.current===e&&($e(at),$e(Bl)),Qo.current===e&&($e(Qo),Cl._currentValue=bt)}var Ls,Ku;function Bt(e){if(Ls===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Ls=a&&a[1]||"",Ku=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ls+e+Ku}var Hs=!1;function Bs(e,a){if(!e||Hs)return"";Hs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(V){var A=V}Reflect.construct(e,[],z)}else{try{z.call()}catch(V){A=V}z=!1;try{var R=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),z=!0,new e}finally{z&&(R!==void 0?Object.defineProperty(e.prototype,"props",R):delete e.prototype.props)}}}else{try{throw Error()}catch(V){A=V}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(V){if(V&&A&&typeof V.stack=="string")return[V.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),r=o[0],m=o[1];if(r&&m){var g=r.split(`
`),T=m.split(`
`);for(l=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(n===g.length||l===T.length)for(n=g.length-1,l=T.length-1;1<=n&&0<=l&&g[n]!==T[l];)l--;for(;1<=n&&0<=l;n--,l--)if(g[n]!==T[l]){if(n!==1||l!==1)do if(n--,l--,0>l||g[n]!==T[l]){var D=`
`+g[n].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=n&&0<=l);break}}}finally{Hs=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Bt(t):""}function kv(e,a){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==a&&a!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Bs(e.type,!1);case 11:return Bs(e.type.render,!1);case 1:return Bs(e.type,!0);case 31:return Bt("Activity");case 30:return Bt("ViewTransition");default:return""}}function Pu(e){try{var a="",t=null;do a+=kv(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Gs=Object.prototype.hasOwnProperty,Is=i.unstable_scheduleCallback,Vs=i.unstable_cancelCallback,Xv=i.unstable_shouldYield,Zv=i.unstable_requestPaint,Sa=i.unstable_now,Kv=i.unstable_getCurrentPriorityLevel,Fu=i.unstable_ImmediatePriority,Ju=i.unstable_UserBlockingPriority,Zo=i.unstable_NormalPriority,Pv=i.unstable_LowPriority,$u=i.unstable_IdlePriority,Fv=i.log,Jv=i.unstable_setDisableYieldValue,Gl=null,Aa=null;function Gt(e){if(typeof Fv=="function"&&Jv(e),Aa&&typeof Aa.setStrictMode=="function")try{Aa.setStrictMode(Gl,e)}catch{}}var Oa=Math.clz32?Math.clz32:e0,$v=Math.log,Wv=Math.LN2;function e0(e){return e>>>=0,e===0?32:31-($v(e)/Wv|0)|0}var Ko=256,Po=262144,Fo=4194304;function gn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jo(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~o,n!==0?l=gn(n):(r&=m,r!==0?l=gn(r):t||(t=m&~e,t!==0&&(l=gn(t))))):(m=n&~o,m!==0?l=gn(m):r!==0?l=gn(r):t||(t=n&~e,t!==0&&(l=gn(t)))),l===0?0:a!==0&&a!==l&&(a&o)===0&&(o=l&-l,t=a&-a,o>=t||o===32&&(t&4194048)!==0)?a:l}function Il(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Wu(e,a){(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-Oa(t),l=1<<n;a|=e[n],t&=~l}return a}function a0(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(){var e=Fo;return Fo<<=1,(Fo&62914560)===0&&(Fo=4194304),e}function Ys(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Vl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function t0(e,a,t,n,l,o){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var m=e.entanglements,g=e.expirationTimes,T=e.hiddenUpdates;for(t=r&~t;0<t;){var D=31-Oa(t),z=1<<D;m[D]=0,g[D]=-1;var A=T[D];if(A!==null)for(T[D]=null,D=0;D<A.length;D++){var R=A[D];R!==null&&(R.lane&=-536870913)}t&=~z}n!==0&&ad(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(r&~a))}function ad(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-Oa(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function td(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-Oa(t),l=1<<n;l&a|e[n]&a&&(e[n]|=a),t&=~l}}function nd(e,a){var t=a&-a;return t=(t&42)!==0?1:Qs(t),(t&(e.suspendedLanes|a))!==0?0:t}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ld(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:mh(e.type))}function od(e,a){var t=ae.p;try{return ae.p=e,a()}finally{ae.p=t}}var yt=Math.random().toString(36).slice(2),We="__reactFiber$"+yt,fa="__reactProps$"+yt,Qn="__reactContainer$"+yt,id="__reactEvents$"+yt,n0="__reactListeners$"+yt,l0="__reactHandles$"+yt,sd="__reactResources$"+yt,Yl="__reactMarker$"+yt,$o="__reactLoad$"+yt;function Wo(e){delete e[We],delete e[fa],delete e[n0],delete e[l0]}function xn(e){var a;if(a=e[We])return a;for(var t=e.parentNode;t;){if(a=t[Qn]||t[We]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Xp(e);e!==null;){if(t=e[We])return t;e=Xp(e)}return a}e=t,t=e.parentNode}return null}function kn(e){if(e=e[We]||e[Qn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ql(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function Xn(e){var a=e[sd];return a||(a=e[sd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Xe(e){e[Yl]=!0}function rd(e){e[$o]=void 0}var cd=new Set,ud={};function bn(e,a){Zn(e,a),Zn(e+"Capture",a)}function Zn(e,a){for(ud[e]=a,e=0;e<a.length;e++)cd.add(a[e])}var o0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dd={},md={};function i0(e){return Gs.call(md,e)?!0:Gs.call(dd,e)?!1:o0.test(e)?md[e]=!0:(dd[e]=!0,!1)}var xe=!1;function fd(){var e=xe;return xe=!1,e}function ei(e,a,t){if(i0(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,t)}}function ai(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,t)}}function Nt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,n)}}function Ta(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function s0(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(r){t=""+r,o.call(this,r)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Xs(e){if(!e._valueTracker){var a=pd(e)?"checked":"value";e._valueTracker=s0(e,a,""+e[a])}}function hd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=pd(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}var r0=/[\n"\\]/g;function Ua(e){return e.replace(r0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Zs(e,a,t,n,l,o,r,m){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),a!=null?r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ta(a)):e.value!==""+Ta(a)&&(e.value=""+Ta(a)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),a!=null?r==="number"&&e.value==a?Ks(e,Ta(e.value)):Ks(e,Ta(a)):t!=null?Ks(e,Ta(t)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Ta(m):e.removeAttribute("name")}function vd(e,a,t,n,l,o,r,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),a!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||a!=null)){Xs(e);return}t=t!=null?""+Ta(t):"",a=a!=null?""+Ta(a):t,m||a===e.value||(e.value=a),e.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Xs(e)}function Ks(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function Kn(e,a,t,n){if(e=e.options,a){a={};for(var l=0;l<t.length;l++)a["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=a.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ta(t),a=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function gd(e,a,t){if(a!=null&&(a=""+Ta(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ta(t):""}function xd(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(u(92));if(be(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Ta(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Xs(e)}function Pn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var c0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||c0.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function yd(e,a,t){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",xe=!0);for(var l in a)n=a[l],a.hasOwnProperty(l)&&t[l]!==n&&(bd(e,l,n),xe=!0)}else for(var o in a)a.hasOwnProperty(o)&&bd(e,o,a[o])}function Ps(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return d0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tt(){}var Fs=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Jn=null;function Nd(e){var a=kn(e);if(a&&(e=a.stateNode)){var t=e[fa]||null;e:switch(e=a.stateNode,a.type){case"input":if(Zs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ua(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var l=n[fa]||null;if(!l)throw Error(u(90));Zs(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&hd(n)}break e;case"textarea":gd(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Kn(e,!!t.multiple,a,!1)}}}var $s=!1;function Ed(e,a,t){if($s)return e(a,t);$s=!0;try{var n=e(a);return n}finally{if($s=!1,(Fn!==null||Jn!==null)&&(ts(),Fn&&(a=Fn,e=Jn,Jn=Fn=null,Nd(a),e)))for(a=0;a<e.length;a++)Nd(e[a])}}function kl(e,a){var t=e.stateNode;if(t===null)return null;var n=t[fa]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,a,typeof t));return t}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=!1;if(Et)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{Ws=!1}var It=null,er=null,ni=null;function Sd(){if(ni)return ni;var e,a=er,t=a.length,n,l="value"in It?It.value:It.textContent,o=l.length;for(e=0;e<t&&a[e]===l[e];e++);var r=t-e;for(n=1;n<=r&&a[t-n]===l[o-n];n++);return ni=l.slice(e,1<n?1-n:void 0)}function li(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function Ad(){return!1}function ca(e){function a(t,n,l,o,r){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oi:Ad,this.isPropagationStopped=Ad,this}return ee(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),a}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=ca(Vt),Zl=ee({},Vt,{view:0,detail:0}),m0=ca(Zl),ar,tr,Kl,si=ee({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(ar=e.screenX-Kl.screenX,tr=e.screenY-Kl.screenY):tr=ar=0,Kl=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:tr}}),Od=ca(si),f0=ee({},si,{dataTransfer:0}),p0=ca(f0),h0=ee({},Zl,{relatedTarget:0}),nr=ca(h0),v0=ee({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=ca(v0),x0=ee({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b0=ca(x0),y0=ee({},Vt,{data:0}),Td=ca(y0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=S0[e])?!!a[e]:!1}function lr(){return A0}var O0=ee({},Zl,{key:function(e){if(e.key){var a=N0[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lr,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T0=ca(O0),j0=ee({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=ca(j0),w0=ee({},Vt,{submitter:0}),R0=ca(w0),C0=ee({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lr}),D0=ca(C0),_0=ee({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=ca(_0),z0=ee({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=ca(z0),q0=ee({},Vt,{newState:0,oldState:0,source:0}),L0=ca(q0),H0=[9,13,27,32],or=Et&&"CompositionEvent"in window,Pl=null;Et&&"documentMode"in document&&(Pl=document.documentMode);var B0=Et&&"TextEvent"in window&&!Pl,wd=Et&&(!or||Pl&&8<Pl&&11>=Pl),Rd=" ",Cd=!1;function Dd(e,a){switch(e){case"keyup":return H0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function G0(e,a){switch(e){case"compositionend":return _d(a);case"keypress":return a.which!==32?null:(Cd=!0,Rd);case"textInput":return e=a.data,e===Rd&&Cd?null:e;default:return null}}function I0(e,a){if($n)return e==="compositionend"||!or&&Dd(e,a)?(e=Sd(),ni=er=It=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return wd&&a.locale!=="ko"?null:a.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!V0[e.type]:a==="textarea"}function zd(e,a,t,n){Fn?Jn?Jn.push(n):Jn=[n]:Fn=n,a=rs(a,"onChange"),0<a.length&&(t=new ii("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var Fl=null,Jl=null;function Y0(e){Ep(e,0)}function ri(e){var a=Ql(e);if(hd(a))return e}function Ud(e,a){if(e==="change")return a}var qd=!1;if(Et){var ir;if(Et){var sr="oninput"in document;if(!sr){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),sr=typeof Ld.oninput=="function"}ir=sr}else ir=!1;qd=ir&&(!document.documentMode||9<document.documentMode)}function Hd(){Fl&&(Fl.detachEvent("onpropertychange",Bd),Jl=Fl=null)}function Bd(e){if(e.propertyName==="value"&&ri(Jl)){var a=[];zd(a,Jl,e,Js(e)),Ed(Y0,a)}}function Q0(e,a,t){e==="focusin"?(Hd(),Fl=a,Jl=t,Fl.attachEvent("onpropertychange",Bd)):e==="focusout"&&Hd()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(Jl)}function X0(e,a){if(e==="click")return ri(a)}function Z0(e,a){if(e==="input"||e==="change")return ri(a)}function K0(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ja=typeof Object.is=="function"?Object.is:K0;function $l(e,a){if(ja(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!Gs.call(a,l)||!ja(e[l],a[l]))return!1}return!0}function rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,a){var t=Gd(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gd(t)}}function Vd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Vd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=rr(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=rr(e.document)}return a}function cr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var P0=Et&&"documentMode"in document&&11>=document.documentMode,Wn=null,ur=null,Wl=null,dr=!1;function Qd(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dr||Wn==null||Wn!==rr(n)||(n=Wn,"selectionStart"in n&&cr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wl&&$l(Wl,n)||(Wl=n,n=rs(ur,"onSelect"),0<n.length&&(a=new ii("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=Wn)))}function yn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var el={animationend:yn("Animation","AnimationEnd"),animationiteration:yn("Animation","AnimationIteration"),animationstart:yn("Animation","AnimationStart"),transitionrun:yn("Transition","TransitionRun"),transitionstart:yn("Transition","TransitionStart"),transitioncancel:yn("Transition","TransitionCancel"),transitionend:yn("Transition","TransitionEnd")},mr={},kd={};Et&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Nn(e){if(mr[e])return mr[e];if(!el[e])return e;var a=el[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in kd)return mr[e]=a[t];return e}var Xd=Nn("animationend"),Zd=Nn("animationiteration"),Kd=Nn("animationstart"),F0=Nn("transitionrun"),J0=Nn("transitionstart"),$0=Nn("transitioncancel"),Pd=Nn("transitionend"),Fd=new Map,fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fr.push("scrollEnd");function Za(e,a){Fd.set(e,a),bn(a,[e])}var W0=0;function St(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=Ja.identifierPrefix;var t=W0++;return e="_"+e+"t_"+t.toString(32)+"_",a.autoName=e}function Jd(e){if(e==null||typeof e=="string")return e;var a=null,t=yl;if(t!==null)for(var n=0;n<t.length;n++){var l=e[t[n]];if(l!=null){if(l==="none")return"none";a=a==null?l:a+(" "+l)}}return a??e.default}function At(e,a){return e=Jd(e),a=Jd(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var ci=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qa=[],al=0,pr=0;function ui(){for(var e=al,a=pr=al=0;a<e;){var t=qa[a];qa[a++]=null;var n=qa[a];qa[a++]=null;var l=qa[a];qa[a++]=null;var o=qa[a];if(qa[a++]=null,n!==null&&l!==null){var r=n.pending;r===null?l.next=l:(l.next=r.next,r.next=l),n.pending=l}o!==0&&$d(t,l,o)}}function di(e,a,t,n){qa[al++]=e,qa[al++]=a,qa[al++]=t,qa[al++]=n,pr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function hr(e,a,t,n){return di(e,a,t,n),mi(e)}function En(e,a){return di(e,null,null,a),mi(e)}function $d(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,n=o.alternate,n!==null&&(n.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&a!==null&&(l=31-Oa(t),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[a]:n.push(a),a.lane=t|536870912),o):null}function mi(e){if(50<Eo)throw Eo=0,as=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var tl={};function eg(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pa(e,a,t,n){return new eg(e,a,t,n)}function vr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,a){var t=e.alternate;return t===null?(t=pa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Wd(e,a){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function fi(e,a,t,n,l,o){var r=0;if(n=e,typeof n=="function")vr(n)&&(r=1);else if(typeof n=="string")r=wx(e,t,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case Xa:return e=pa(31,t,a,l),e.elementType=Xa,e.lanes=o,e;case ia:return Sn(t.children,l,o,a);case Je:r=8,l|=24;break;case Ea:return e=pa(12,t,a,l|2),e.elementType=Ea,e.lanes=o,e;case Y:return e=pa(13,t,a,l),e.elementType=Y,e.lanes=o,e;case Z:return e=pa(19,t,a,l),e.elementType=Z,e.lanes=o,e;case xt:case S:return e=l|32,e=pa(30,t,a,e),e.elementType=S,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ne:r=10;break e;case za:r=9;break e;case U:r=11;break e;case se:r=14;break e;case Ee:r=16,n=null;break e}r=29,t=Error(u(130,e===null?"null":typeof e,"")),n=null}return a=pa(r,t,a,l),a.elementType=e,a.type=n,a.lanes=o,a}function Sn(e,a,t,n){return e=pa(7,e,n,a),e.lanes=t,e}function gr(e,a,t){return e=pa(6,e,null,a),e.lanes=t,e}function em(e){var a=pa(18,null,null,0);return a.stateNode=e,a}function xr(e,a,t){return a=pa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var am=new WeakMap;function La(e,a){if(typeof e=="object"&&e!==null){var t=am.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Pu(a)},am.set(e,a),a)}return{value:e,source:a,stack:Pu(a)}}var nl=[],ll=0,pi=null,eo=0,Ha=[],Ba=0,Yt=null,nt=1,lt="";function Tt(e,a){nl[ll++]=eo,nl[ll++]=pi,pi=e,eo=a}function tm(e,a,t){Ha[Ba++]=nt,Ha[Ba++]=lt,Ha[Ba++]=Yt,Yt=e;var n=nt;e=lt;var l=32-Oa(n)-1;n&=~(1<<l),t+=1;var o=32-Oa(a)+l;if(30<o){var r=l-l%5;o=(n&(1<<r)-1).toString(32),n>>=r,l-=r,nt=1<<32-Oa(a)+l|t<<l|n,lt=o+e}else nt=1<<o|t<<l|n,lt=e}function hi(e){e.return!==null&&(Tt(e,1),tm(e,1,0))}function br(e){for(;e===pi;)pi=nl[--ll],nl[ll]=null,eo=nl[--ll],nl[ll]=null;for(;e===Yt;)Yt=Ha[--Ba],Ha[Ba]=null,lt=Ha[--Ba],Ha[Ba]=null,nt=Ha[--Ba],Ha[Ba]=null}function nm(e,a){Ha[Ba++]=nt,Ha[Ba++]=lt,Ha[Ba++]=Yt,nt=a.id,lt=a.overflow,Yt=e}var Ze=null,Ce=null,ie=!1,Qt=null,Ga=!1,yr=Error(u(519));function kt(e){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(La(a,e)),yr}function lm(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[We]=e,a[fa]=n,t){case"dialog":ce("cancel",a),ce("close",a);break;case"iframe":case"object":case"embed":ce("load",a);break;case"video":case"audio":for(t=0;t<Ao.length;t++)ce(Ao[t],a);break;case"source":ce("error",a);break;case"img":case"image":case"link":ce("error",a),ce("load",a);break;case"details":ce("toggle",a);break;case"input":ce("invalid",a),vd(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ce("invalid",a);break;case"textarea":ce("invalid",a),xd(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Tp(a.textContent,t)?(n.popover!=null&&(ce("beforetoggle",a),ce("toggle",a)),n.onScroll!=null&&ce("scroll",a),n.onScrollEnd!=null&&ce("scrollend",a),n.onClick!=null&&(a.onclick=tt),a=!0):a=!1,a||kt(e,!0)}function vi(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Ga=!1;return;case 27:case 3:Ga=!0;return;default:Ze=Ze.return}}function ol(e){if(e!==Ze)return!1;if(!ie)return vi(e),ie=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Fc(e.type,e.memoizedProps)),t=!t),t&&Ce&&kt(e),vi(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=kp(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=kp(e)}else a===27?(a=Ce,rn(e.type)?(e=ou,ou=null,Ce=e):Ce=a):Ce=Ze?Va(e.stateNode.nextSibling):null;return!0}function An(){Ce=Ze=null,ie=!1}function Nr(){var e=Qt;return e!==null&&(ga===null?ga=e:ga.push.apply(ga,e),Qt=null),e}function ao(e){Qt===null?Qt=[e]:Qt.push(e)}var Er=et(null),On=null,jt=null;function Xt(e,a,t){Re(Er,a._currentValue),a._currentValue=t}function wt(e){e._currentValue=Er.current,$e(Er)}function gi(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Sr(e,a,t,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var r=l.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=l;for(var g=0;g<a.length;g++)if(m.context===a[g]){o.lanes|=t,m=o.alternate,m!==null&&(m.lanes|=t),gi(o.return,t,e),n||(r=null);break e}o=m.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(u(341));r.lanes|=t,o=r.alternate,o!==null&&(o.lanes|=t),gi(r,t,e),r=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,r=l.alternate,r!==null&&(r.lanes|=t),gi(l.return,t,e),r=l.child,r=r!==null?r.sibling:null):r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Tn(e,a,t,n){e=null;for(var l=a,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var m=l.type;ja(l.pendingProps.value,r.value)||(e!==null?e.push(m):e=[m])}}else if(l===Qo.current){if(r=l.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Cl):e=[Cl])}l=l.return}return e!==null&&Sr(a,e,t,n),a.flags|=262144,e!==null}function xi(e){for(e=e.firstContext;e!==null;){if(!ja(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jn(e){On=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return om(On,e)}function bi(e,a){return On===null&&jn(e),om(e,a)}function om(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},jt===null){if(e===null)throw Error(u(308));jt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else jt=jt.next=a;return t}var ag=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},tg=i.unstable_scheduleCallback,ng=i.unstable_NormalPriority,Be={$$typeof:Ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ar(){return{controller:new ag,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&tg(ng,function(){e.controller.abort()})}function im(e,a){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<a.length;e++){var n=a[e];t.indexOf(n)===-1&&t.push(n)}}}var no=null;function lg(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var lo=null,Or=0,wn=0,il=null;function og(e,a){if(lo===null){var t=lo=[];Or=0,wn=Ic(),il={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Or++,a.then(sm,sm),a}function sm(){if(--Or===0&&(no=null,lo!==null)){il!==null&&(il.status="fulfilled");var e=lo;lo=null,wn=0,il=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function ig(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<t.length;l++)(0,t[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),n}var rm=K.S;K.S=function(e,a){if(ap=Sa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&og(e,a),no!==null)for(var t=Al;t!==null;)im(t,no),t=t.next;if(t=e.types,t!==null){for(var n=Al;n!==null;)im(n,t),n=n.next;if(wn!==0){n=no,n===null&&(n=no=[]);for(var l=0;l<t.length;l++){var o=t[l];n.indexOf(o)===-1&&n.push(o)}}}rm!==null&&rm(e,a)};var Rn=et(null);function Tr(){var e=Rn.current;return e!==null?e:we.pooledCache}function yi(e,a){a===null?Re(Rn,Rn.current):Re(Rn,a.pool)}function cm(){var e=Tr();return e===null?null:{parent:Be._currentValue,pool:e}}var sl=Error(u(460)),jr=Error(u(474)),Ni=Error(u(542)),Ei={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dm(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(tt,tt),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,fm(e),e===void 0&&!("reason"in a)?Error(u(600)):e;default:if(typeof a.status=="string")a.then(tt,tt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,fm(e),e}throw Dn=a,sl}}function Cn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Dn=t,sl):t}}var Dn=null;function mm(){if(Dn===null)throw Error(u(459));var e=Dn;return Dn=null,e}function fm(e){if(e===sl||e===Ni)throw Error(u(483))}var rl=null,oo=0;function Si(e){var a=oo;return oo+=1,rl===null&&(rl=[]),dm(rl,e,a)}function Zt(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ai(e,a){throw a.$$typeof===$?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function pm(e){function a(O,b){if(e){var w=O.deletions;w===null?(O.deletions=[b],O.flags|=16):w.push(b)}}function t(O,b){if(!e)return null;for(;b!==null;)a(O,b),b=b.sibling;return null}function n(O){for(var b=new Map;O!==null;)O.key===null?b.set(O.index,O):b.set(O.key,O),O=O.sibling;return b}function l(O,b){return O=Ot(O,b),O.index=0,O.sibling=null,O}function o(O,b,w){return O.index=w,e?(w=O.alternate,w!==null?(w=w.index,w<b?(O.flags|=2,b):w):(O.flags|=134217730,b)):(O.flags|=1048576,b)}function r(O){return e&&O.alternate===null&&(O.flags|=134217730),O}function m(O,b,w,M){return b===null||b.tag!==6?(b=gr(w,O.mode,M),b.return=O,b):(b=l(b,w),b.return=O,b)}function g(O,b,w,M){var k=w.type;return k===ia?(O=D(O,b,w.props.children,M,w.key),Zt(O,w),O):b!==null&&(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ee&&Cn(k)===b.type)?(b=l(b,w.props),Zt(b,w),b.return=O,b):(b=fi(w.type,w.key,w.props,null,O.mode,M),Zt(b,w),b.return=O,b)}function T(O,b,w,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=xr(w,O.mode,M),b.return=O,b):(b=l(b,w.children||[]),b.return=O,b)}function D(O,b,w,M,k){return b===null||b.tag!==7?(b=Sn(w,O.mode,M,k),b.return=O,b):(b=l(b,w),b.return=O,b)}function z(O,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=gr(""+b,O.mode,w),b.return=O,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ye:return w=fi(b.type,b.key,b.props,null,O.mode,w),Zt(w,b),w.return=O,w;case ke:return b=xr(b,O.mode,w),b.return=O,b;case Ee:return b=Cn(b),z(O,b,w)}if(be(b)||J(b))return b=Sn(b,O.mode,w,null),b.return=O,b;if(typeof b.then=="function")return z(O,Si(b),w);if(b.$$typeof===Ne)return z(O,bi(O,b),w);Ai(O,b)}return null}function A(O,b,w,M){var k=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return k!==null?null:m(O,b,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ye:return w.key===k?g(O,b,w,M):null;case ke:return w.key===k?T(O,b,w,M):null;case Ee:return w=Cn(w),A(O,b,w,M)}if(be(w)||J(w))return k!==null?null:D(O,b,w,M,null);if(typeof w.then=="function")return A(O,b,Si(w),M);if(w.$$typeof===Ne)return A(O,b,bi(O,w),M);Ai(O,w)}return null}function R(O,b,w,M,k){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return O=O.get(w)||null,m(b,O,""+M,k);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ye:return O=O.get(M.key===null?w:M.key)||null,g(b,O,M,k);case ke:return O=O.get(M.key===null?w:M.key)||null,T(b,O,M,k);case Ee:return M=Cn(M),R(O,b,w,M,k)}if(be(M)||J(M))return O=O.get(w)||null,D(b,O,M,k,null);if(typeof M.then=="function")return R(O,b,w,Si(M),k);if(M.$$typeof===Ne)return R(O,b,w,bi(b,M),k);Ai(b,M)}return null}function V(O,b,w,M){for(var k=null,pe=null,P=b,W=b=0,Ve=null;P!==null&&W<w.length;W++){P.index>W?(Ve=P,P=null):Ve=P.sibling;var he=A(O,P,w[W],M);if(he===null){P===null&&(P=Ve);break}e&&P&&he.alternate===null&&a(O,P),b=o(he,b,W),pe===null?k=he:pe.sibling=he,pe=he,P=Ve}if(W===w.length)return t(O,P),ie&&Tt(O,W),k;if(P===null){for(;W<w.length;W++)P=z(O,w[W],M),P!==null&&(b=o(P,b,W),pe===null?k=P:pe.sibling=P,pe=P);return ie&&Tt(O,W),k}for(P=n(P);W<w.length;W++)Ve=R(P,O,W,w[W],M),Ve!==null&&(e&&(he=Ve.alternate,he!==null&&P.delete(he.key===null?W:he.key)),b=o(Ve,b,W),pe===null?k=Ve:pe.sibling=Ve,pe=Ve);return e&&P.forEach(function(fn){return a(O,fn)}),ie&&Tt(O,W),k}function X(O,b,w,M){if(w==null)throw Error(u(151));for(var k=null,pe=null,P=b,W=b=0,Ve=null,he=w.next();P!==null&&!he.done;W++,he=w.next()){P.index>W?(Ve=P,P=null):Ve=P.sibling;var fn=A(O,P,he.value,M);if(fn===null){P===null&&(P=Ve);break}e&&P&&fn.alternate===null&&a(O,P),b=o(fn,b,W),pe===null?k=fn:pe.sibling=fn,pe=fn,P=Ve}if(he.done)return t(O,P),ie&&Tt(O,W),k;if(P===null){for(;!he.done;W++,he=w.next())he=z(O,he.value,M),he!==null&&(b=o(he,b,W),pe===null?k=he:pe.sibling=he,pe=he);return ie&&Tt(O,W),k}for(P=n(P);!he.done;W++,he=w.next())he=R(P,O,W,he.value,M),he!==null&&(e&&(Ve=he.alternate,Ve!==null&&P.delete(Ve.key===null?W:Ve.key)),b=o(he,b,W),pe===null?k=he:pe.sibling=he,pe=he);return e&&P.forEach(function(Gx){return a(O,Gx)}),ie&&Tt(O,W),k}function oe(O,b,w,M){if(typeof w=="object"&&w!==null&&w.type===ia&&w.key===null&&w.props.ref===void 0&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ye:e:{for(var k=w.key;b!==null;){if(b.key===k){if(k=w.type,k===ia){if(b.tag===7){t(O,b.sibling),M=l(b,w.props.children),Zt(M,w),M.return=O,O=M;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ee&&Cn(k)===b.type){t(O,b.sibling),M=l(b,w.props),Zt(M,w),M.return=O,O=M;break e}t(O,b);break}else a(O,b);b=b.sibling}w.type===ia?(M=Sn(w.props.children,O.mode,M,w.key),Zt(M,w),M.return=O,O=M):(M=fi(w.type,w.key,w.props,null,O.mode,M),Zt(M,w),M.return=O,O=M)}return r(O);case ke:e:{for(k=w.key;b!==null;){if(b.key===k)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){t(O,b.sibling),M=l(b,w.children||[]),M.return=O,O=M;break e}else{t(O,b);break}else a(O,b);b=b.sibling}M=xr(w,O.mode,M),M.return=O,O=M}return r(O);case Ee:return w=Cn(w),oe(O,b,w,M)}if(be(w))return V(O,b,w,M);if(J(w)){if(k=J(w),typeof k!="function")throw Error(u(150));return w=k.call(w),X(O,b,w,M)}if(typeof w.then=="function")return oe(O,b,Si(w),M);if(w.$$typeof===Ne)return oe(O,b,bi(O,w),M);Ai(O,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,b!==null&&b.tag===6?(t(O,b.sibling),M=l(b,w),M.return=O,O=M):(t(O,b),M=gr(w,O.mode,M),M.return=O,O=M),r(O)):t(O,b)}return function(O,b,w,M){try{oo=0;var k=oe(O,b,w,M);return rl=null,k}catch(P){if(P===sl||P===Ni)throw P;var pe=pa(29,P,null,O.mode);return pe.lanes=M,pe.return=O,pe}finally{}}}var _n=pm(!0),hm=pm(!1),Kt=!1;function wr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ft(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ye&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=mi(e),$d(e,null,t),a}return di(e,n,a,t),mi(e)}function io(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,td(e,t)}}function Cr(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=r:o=o.next=r,t=t.next}while(t!==null);o===null?l=o=a:o=o.next=a}else l=o=a;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Dr=!1;function so(){if(Dr){var e=il;if(e!==null)throw e}}function ro(e,a,t,n){Dr=!1;var l=e.updateQueue;Kt=!1;var o=l.firstBaseUpdate,r=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var g=m,T=g.next;g.next=null,r===null?o=T:r.next=T,r=g;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==r&&(m===null?D.firstBaseUpdate=T:m.next=T,D.lastBaseUpdate=g))}if(o!==null){var z=l.baseState;r=0,D=T=g=null,m=o;do{var A=m.lane&-536870913,R=A!==m.lane;if(R?(fe&A)===A:(n&A)===A){A!==0&&A===wn&&(Dr=!0),D!==null&&(D=D.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var V=e,X=m;A=a;var oe=t;switch(X.tag){case 1:if(V=X.payload,typeof V=="function"){z=V.call(oe,z,A);break e}z=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=X.payload,A=typeof V=="function"?V.call(oe,z,A):V,A==null)break e;z=ee({},z,A);break e;case 2:Kt=!0}}A=m.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[A]:R.push(A))}else R={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(T=D=R,g=z):D=D.next=R,r|=A;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;R=m,m=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);D===null&&(g=z),l.baseState=g,l.firstBaseUpdate=T,l.lastBaseUpdate=D,o===null&&(l.shared.lanes=0),nn|=r,e.lanes=r,e.memoizedState=z}}function vm(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function gm(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)vm(t[e],a)}var Jt=et(null),Oi=et(0);function xm(e,a){e=Mt,Re(Oi,e),Re(Jt,a),Mt=e|a.baseLanes}function _r(){Re(Oi,Mt),Re(Jt,Jt.current)}function Mr(){Mt=Oi.current,$e(Jt),$e(Oi)}var aa=et(null),sa=null;function $t(e){var a=e.alternate;Re(ta,ta.current&1),Re(aa,e),sa===null&&(a===null||Jt.current!==null||a.memoizedState!==null)&&(sa=e)}function zr(e){Re(ta,ta.current),Re(aa,e),sa===null&&(sa=e)}function bm(e){e.tag===22?(Re(ta,ta.current),Re(aa,e),sa===null&&(sa=e)):Wt()}function Wt(){Re(ta,ta.current),Re(aa,aa.current)}function wa(e){$e(aa),sa===e&&(sa=null),$e(ta)}var ta=et(0);function co(e,a){Re(aa,aa.current),Re(ta,a)}function Ur(e){$e(ta),$e(aa),sa===e&&(sa=null)}function Ti(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||nu(t)||lu(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Rt=0,le=null,je=null,Ge=null,ji=!1,cl=!1,Mn=!1,wi=0,uo=0,ul=null,sg=0;function qe(){throw Error(u(321))}function qr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!ja(e[t],a[t]))return!1;return!0}function Lr(e,a,t,n,l,o){return Rt=o,le=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,K.H=e===null||e.memoizedState===null?tf:nf,Mn=!1,o=t(n,l),Mn=!1,cl&&(o=Nm(a,t,n,l)),ym(e),o}function ym(e){K.H=Ui;var a=je!==null&&je.next!==null;if(Rt=0,Ge=je=le=null,ji=!1,uo=0,ul=null,a)throw Error(u(300));e===null||Ie||(e=e.dependencies,e!==null&&xi(e)&&(Ie=!0))}function Nm(e,a,t,n){le=e;var l=0;do{if(cl&&(ul=null),uo=0,cl=!1,25<=l)throw Error(u(301));if(l+=1,Ge=je=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}K.H=hg,o=a(t,n)}while(cl);return o}function rg(){var e=K.H,a=e.useState()[0];return a=typeof a.then=="function"?mo(a):a,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(le.flags|=1024),a}function Hr(){var e=wi!==0;return wi=0,e}function Br(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Gr(e){if(ji){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ji=!1}Rt=0,Ge=je=le=null,cl=!1,uo=wi=0,ul=null}function ua(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function He(){if(je===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var a=Ge===null?le.memoizedState:Ge.next;if(a!==null)Ge=a,je=e;else{if(e===null)throw le.alternate===null?Error(u(467)):Error(u(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ge===null?le.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ri(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var a=uo;return uo+=1,ul===null&&(ul=[]),e=dm(ul,e,a),a=le,(Ge===null?a.memoizedState:Ge.next)===null&&(a=a.alternate,K.H=a===null||a.memoizedState===null?tf:nf),e}function Ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===q)return;if(e.$$typeof===Ne)return ea(e)}throw Error(u(438,String(e)))}function Ir(e){var a=null,t=le.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=le.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Ri(),le.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=vn;return a.index++,t}function Ct(e,a){return typeof a=="function"?a(e):a}function Di(e){var a=He();return Vr(a,je,e)}function Vr(e,a,t){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var r=l.next;l.next=o.next,o.next=r}a.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{a=l.next;var m=r=null,g=null,T=a,D=!1;do{var z=T.lane&-536870913;if(z!==T.lane?(fe&z)===z:(Rt&z)===z){var A=T.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),z===wn&&(D=!0);else if((Rt&A)===A){T=T.next,A===wn&&(D=!0);continue}else z={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(m=g=z,r=o):g=g.next=z,le.lanes|=A,nn|=A;z=T.action,Mn&&t(o,z),o=T.hasEagerState?T.eagerState:t(o,z)}else A={lane:z,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(m=g=A,r=o):g=g.next=A,le.lanes|=z,nn|=z;T=T.next}while(T!==null&&T!==a);if(g===null?r=o:g.next=m,!ja(o,e.memoizedState)&&(Ie=!0,D&&(t=il,t!==null)))throw t;e.memoizedState=o,e.baseState=r,e.baseQueue=g,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Yr(e){var a=He(),t=a.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,o=a.memoizedState;if(l!==null){t.pending=null;var r=l=l.next;do o=e(o,r.action),r=r.next;while(r!==l);ja(o,a.memoizedState)||(Ie=!0),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),t.lastRenderedState=o}return[o,n]}function Em(e,a,t){var n=le,l=He(),o=ie;if(o){if(t===void 0)throw Error(u(407));t=t()}else t=a();var r=!ja((je||l).memoizedState,t);if(r&&(l.memoizedState=t,Ie=!0),l=l.queue,Xr(Om.bind(null,n,l,e),[e]),e=l.getSnapshot!==a||r||Ge!==null&&(Ge.memoizedState.tag&1)!==0,dl(e?9:8,{destroy:void 0},Am.bind(null,n,l,t,a),null),e){if(n.flags|=2048,we===null)throw Error(u(349));o||(Rt&127)!==0||Sm(n,a,t)}return t}function Sm(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=le.updateQueue,a===null?(a=Ri(),le.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Am(e,a,t,n){a.value=t,a.getSnapshot=n,Tm(a)&&jm(e)}function Om(e,a,t){return t(function(){Tm(a)&&jm(e)})}function Tm(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!ja(e,t)}catch{return!0}}function jm(e){var a=En(e,2);a!==null&&xa(a,e,2)}function Qr(e){var a=ua();if(typeof e=="function"){var t=e;if(e=t(),Mn){Gt(!0);try{t()}finally{Gt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:e},a}function wm(e,a,t,n){return e.baseState=t,Vr(e,je,typeof n=="function"?n:Ct)}function cg(e,a,t,n,l){if(zi(e))throw Error(u(485));if(e=a.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){o.listeners.push(r)}};K.T!==null?t(!0):o.isTransition=!1,n(o),t=a.pending,t===null?(o.next=a.pending=o,Rm(a,o)):(o.next=t.next,a.pending=t.next=o)}}function Rm(e,a){var t=a.action,n=a.payload,l=e.state;if(a.isTransition){var o=K.T,r={};r.types=o!==null?o.types:null,K.T=r;try{var m=t(l,n),g=K.S;g!==null&&g(r,m),Cm(e,a,m)}catch(T){kr(e,a,T)}finally{o!==null&&r.types!==null&&(o.types=r.types),K.T=o}}else try{o=t(l,n),Cm(e,a,o)}catch(T){kr(e,a,T)}}function Cm(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Dm(e,a,n)},function(n){return kr(e,a,n)}):Dm(e,a,t)}function Dm(e,a,t){a.status="fulfilled",a.value=t,_m(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Rm(e,t)))}function kr(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,_m(a),a=a.next;while(a!==n)}e.action=null}function _m(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Mm(e,a){return a}function zm(e,a){if(ie){var t=we.formState;if(t!==null){e:{var n=le;if(ie){if(Ce){a:{for(var l=Ce,o=Ga;l.nodeType!==8;){if(!o){l=null;break a}if(l=Va(l.nextSibling),l===null){l=null;break a}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Ce=Va(l.nextSibling),n=l.data==="F!";break e}}kt(n)}n=!1}n&&(a=t[0])}}return t=ua(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:a},t.queue=n,t=Wm.bind(null,le,n),n.dispatch=t,n=Qr(!1),o=Jr.bind(null,le,!1,n.queue),n=ua(),l={state:a,dispatch:null,action:e,pending:null},n.queue=l,t=cg.bind(null,le,l,o,t),l.dispatch=t,n.memoizedState=e,[a,t,!1]}function Um(e){var a=He();return qm(a,je,e)}function qm(e,a,t){if(a=Vr(e,a,Mm)[0],e=Di(Ct)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=mo(a)}catch(r){throw r===sl?Ni:r}else n=a;a=He();var l=a.queue,o=l.dispatch;return t!==a.memoizedState&&(le.flags|=2048,dl(9,{destroy:void 0},ug.bind(null,l,t),null)),[n,o,e]}function ug(e,a){e.action=a}function Lm(e){var a=He(),t=je;if(t!==null)return qm(a,t,e);He(),a=a.memoizedState,t=He();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function dl(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=le.updateQueue,a===null&&(a=Ri(),le.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Hm(){return He().memoizedState}function _i(e,a,t,n){var l=ua();le.flags|=e,l.memoizedState=dl(1|a,{destroy:void 0},t,n===void 0?null:n)}function Mi(e,a,t,n){var l=He();n=n===void 0?null:n;var o=l.memoizedState.inst;je!==null&&n!==null&&qr(n,je.memoizedState.deps)?l.memoizedState=dl(a,o,t,n):(le.flags|=e,l.memoizedState=dl(1|a,o,t,n))}function Bm(e,a){_i(8390656,8,e,a)}function Xr(e,a){Mi(2048,8,e,a)}function dg(e){le.flags|=4;var a=le.updateQueue;if(a===null)a=Ri(),le.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Gm(e){var a=He().memoizedState;return dg({ref:a,nextImpl:e}),function(){if((ye&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function Im(e,a){return Mi(4,2,e,a)}function Vm(e,a){return Mi(4,4,e,a)}function Ym(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Qm(e,a,t){t=t!=null?t.concat([e]):null,Mi(4,4,Ym.bind(null,a,e),t)}function Zr(){}function km(e,a){var t=He();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&qr(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Xm(e,a){var t=He();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&qr(a,n[1]))return n[0];if(n=e(),Mn){Gt(!0);try{e()}finally{Gt(!1)}}return t.memoizedState=[n,a],n}function Kr(e,a,t){return t===void 0||(Rt&1073741824)!==0&&(fe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=np(),le.lanes|=e,nn|=e,t)}function Zm(e,a,t,n){return ja(t,a)?t:Jt.current!==null?(e=Kr(e,t,n),ja(e,a)||(Ie=!0),e):(Rt&106)===0||(Rt&1073741824)!==0&&(fe&261930)===0?(Ie=!0,e.memoizedState=t):(e=np(),le.lanes|=e,nn|=e,a)}function Km(e,a,t,n,l){var o=ae.p;ae.p=o!==0&&8>o?o:8;var r=K.T,m={};m.types=r!==null?r.types:null,K.T=m,Jr(e,!1,a,t);try{var g=l(),T=K.S;if(T!==null&&T(m,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=ig(g,n);fo(e,a,D,_a(e))}else fo(e,a,n,_a(e))}catch(z){fo(e,a,{then:function(){},status:"rejected",reason:z},_a())}finally{ae.p=o,r!==null&&m.types!==null&&(r.types=m.types),K.T=r}}function mg(){}function Pr(e,a,t,n){if(e.tag!==5)throw Error(u(476));var l=Pm(e).queue;Km(e,l,a,bt,t===null?mg:function(){return Fm(e),t(n)})}function Pm(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:bt,baseState:bt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:bt},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Fm(e){var a=Pm(e);a.next===null&&(a=e.alternate.memoizedState),fo(e,a.next.queue,{},_a())}function Fr(){return ea(Cl)}function Jm(){return He().memoizedState}function $m(){return He().memoizedState}function fg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=_a();e=Pt(t);var n=Ft(a,e,t);n!==null&&(xa(n,a,t),io(n,a,t)),a={cache:Ar()},e.payload=a;return}a=a.return}}function pg(e,a,t){var n=_a();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},zi(e)?ef(a,t):(t=hr(e,a,t,n),t!==null&&(xa(t,e,n),af(t,a,n)))}function Wm(e,a,t){var n=_a();fo(e,a,t,n)}function fo(e,a,t,n){var l={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(zi(e))ef(a,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=a.lastRenderedReducer,o!==null))try{var r=a.lastRenderedState,m=o(r,t);if(l.hasEagerState=!0,l.eagerState=m,ja(m,r))return di(e,a,l,0),we===null&&ui(),!1}catch{}finally{}if(t=hr(e,a,l,n),t!==null)return xa(t,e,n),af(t,a,n),!0}return!1}function Jr(e,a,t,n){if(n={lane:2,revertLane:Ic(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zi(e)){if(a)throw Error(u(479))}else a=hr(e,t,n,2),a!==null&&xa(a,e,2)}function zi(e){var a=e.alternate;return e===le||a!==null&&a===le}function ef(e,a){cl=ji=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function af(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,td(e,t)}}var Ui={readContext:ea,use:Ci,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe,useEffectEvent:qe},tf={readContext:ea,use:Ci,useCallback:function(e,a){return ua().memoizedState=[e,a===void 0?null:a],e},useContext:ea,useEffect:Bm,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,_i(4194308,4,Ym.bind(null,a,e),t)},useLayoutEffect:function(e,a){return _i(4194308,4,e,a)},useInsertionEffect:function(e,a){_i(4,2,e,a)},useMemo:function(e,a){var t=ua();a=a===void 0?null:a;var n=e();if(Mn){Gt(!0);try{e()}finally{Gt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ua();if(t!==void 0){var l=t(a);if(Mn){Gt(!0);try{t(a)}finally{Gt(!1)}}}else l=a;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=pg.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var a=ua();return e={current:e},a.memoizedState=e},useState:function(e){e=Qr(e);var a=e.queue,t=Wm.bind(null,le,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Zr,useDeferredValue:function(e,a){var t=ua();return Kr(t,e,a)},useTransition:function(){var e=Qr(!1);return e=Km.bind(null,le,e.queue,!0,!1),ua().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=le,l=ua();if(ie){if(t===void 0)throw Error(u(407));t=t()}else{if(t=a(),we===null)throw Error(u(349));(fe&127)!==0||Sm(n,a,t)}l.memoizedState=t;var o={value:t,getSnapshot:a};return l.queue=o,Bm(Om.bind(null,n,o,e),[e]),n.flags|=2048,dl(9,{destroy:void 0},Am.bind(null,n,o,t,a),null),t},useId:function(){var e=ua(),a=we.identifierPrefix;if(ie){var t=lt,n=nt;t=(n&~(1<<32-Oa(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=wi++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=sg++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Fr,useFormState:zm,useActionState:zm,useOptimistic:function(e){var a=ua();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Jr.bind(null,le,!0,t),t.dispatch=a,[e,a]},useMemoCache:Ir,useCacheRefresh:function(){return ua().memoizedState=fg.bind(null,le)},useEffectEvent:function(e){var a=ua(),t={impl:e};return a.memoizedState=t,function(){if((ye&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},nf={readContext:ea,use:Ci,useCallback:km,useContext:ea,useEffect:Xr,useImperativeHandle:Qm,useInsertionEffect:Im,useLayoutEffect:Vm,useMemo:Xm,useReducer:Di,useRef:Hm,useState:function(){return Di(Ct)},useDebugValue:Zr,useDeferredValue:function(e,a){var t=He();return Zm(t,je.memoizedState,e,a)},useTransition:function(){var e=Di(Ct)[0],a=He().memoizedState;return[typeof e=="boolean"?e:mo(e),a]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:Fr,useFormState:Um,useActionState:Um,useOptimistic:function(e,a){var t=He();return wm(t,je,e,a)},useMemoCache:Ir,useCacheRefresh:$m,useEffectEvent:Gm},hg={readContext:ea,use:Ci,useCallback:km,useContext:ea,useEffect:Xr,useImperativeHandle:Qm,useInsertionEffect:Im,useLayoutEffect:Vm,useMemo:Xm,useReducer:Yr,useRef:Hm,useState:function(){return Yr(Ct)},useDebugValue:Zr,useDeferredValue:function(e,a){var t=He();return je===null?Kr(t,e,a):Zm(t,je.memoizedState,e,a)},useTransition:function(){var e=Yr(Ct)[0],a=He().memoizedState;return[typeof e=="boolean"?e:mo(e),a]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:Fr,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,a){var t=He();return je!==null?wm(t,je,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Ir,useCacheRefresh:$m,useEffectEvent:Gm};function $r(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:ee({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Wr={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=_a(),l=Pt(n);l.payload=a,t!=null&&(l.callback=t),a=Ft(e,l,n),a!==null&&(xa(a,e,n),io(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=_a(),l=Pt(n);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=Ft(e,l,n),a!==null&&(xa(a,e,n),io(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=_a(),n=Pt(t);n.tag=2,a!=null&&(n.callback=a),a=Ft(e,n,t),a!==null&&(xa(a,e,t),io(a,e,t))}};function lf(e,a,t,n,l,o,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,r):a.prototype&&a.prototype.isPureReactComponent?!$l(t,n)||!$l(l,o):!0}function of(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Wr.enqueueReplaceState(a,a.state,null)}function zn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=ee({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function sf(e){ci(e)}function rf(e){console.error(e)}function cf(e){ci(e)}function qi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function uf(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ec(e,a,t){return t=Pt(t),t.tag=3,t.payload={element:null},t.callback=function(){qi(e,a)},t}function df(e){return e=Pt(e),e.tag=3,e}function mf(e,a,t,n){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){uf(a,t,n)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){uf(a,t,n),typeof l!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function vg(e,a,t,n,l){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Tn(a,t,l,!0),t=aa.current,t!==null){switch(t.tag){case 31:case 13:case 19:return sa===null?ns():t.alternate===null&&Le===0&&(Le=3),t.flags&=-257,t.flags|=65536,t.lanes=l,n===Ei?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Hc(e,n,l)),!1;case 22:return t.flags|=65536,n===Ei?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Hc(e,n,l)),!1}throw Error(u(435,t.tag))}return Hc(e,n,l),ns(),!1}if(ie)return a=aa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==yr&&(e=Error(u(422),{cause:n}),ao(La(e,t)))):(n!==yr&&(a=Error(u(423),{cause:n}),ao(La(a,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=La(n,t),l=ec(e.stateNode,n,l),Cr(e,l),Le!==4&&(Le=2)),!1;var o=Error(u(520),{cause:n});if(o=La(o,t),No===null?No=[o]:No.push(o),Le!==4&&(Le=2),a===null)return!0;n=La(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=ec(t.stateNode,n,e),Cr(t,e),!1;case 1:if(a=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ln===null||!ln.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=df(l),mf(l,e,t,n),Cr(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var ac=Error(u(461)),Ie=!1;function Qe(e,a,t,n){a.child=e===null?hm(a,null,t,n):_n(a,e.child,t,n)}function ff(e,a,t,n,l){t=t.render;var o=a.ref;if("ref"in n){var r={};for(var m in n)m!=="ref"&&(r[m]=n[m])}else r=n;return jn(a),n=Lr(e,a,t,r,o,l),m=Hr(),e!==null&&!Ie?(Br(e,a,l),Dt(e,a,l)):(ie&&m&&hi(a),a.flags|=1,Qe(e,a,n,l),a.child)}function pf(e,a,t,n,l){if(e===null){var o=t.type;return typeof o=="function"&&!vr(o)&&o.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=o,hf(e,a,o,n,l)):(e=fi(t.type,null,n,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(o=e.child,!cc(e,l)){var r=o.memoizedProps;if(t=t.compare,t=t!==null?t:$l,t(r,n)&&e.ref===a.ref)return Dt(e,a,l)}return a.flags|=1,e=Ot(o,n),e.ref=a.ref,e.return=a,a.child=e}function hf(e,a,t,n,l){if(e!==null){var o=e.memoizedProps;if($l(o,n)&&e.ref===a.ref)if(Ie=!1,a.pendingProps=n=o,cc(e,l))(e.flags&131072)!==0&&(Ie=!0);else return a.lanes=e.lanes,Dt(e,a,l)}return tc(e,a,t,n,l)}function vf(e,a,t,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(n=a.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,a.child=null;return gf(e,a,o,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&yi(a,o!==null?o.cachePool:null),o!==null?xm(a,o):_r(),bm(a);else return n=a.lanes=536870912,gf(e,a,o!==null?o.baseLanes|t:t,t,n)}else o!==null?(yi(a,o.cachePool),xm(a,o),Wt(),a.memoizedState=null):(e!==null&&yi(a,null),_r(),Wt());return Qe(e,a,l,t),a.child}function po(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function gf(e,a,t,n,l){var o=Tr();return o=o===null?null:{parent:Be._currentValue,pool:o},a.memoizedState={baseLanes:t,cachePool:o},e!==null&&yi(a,null),_r(),bm(a),e!==null&&Tn(e,a,n,!0),a.childLanes=l,null}function Li(e,a){return a=Hi({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function xf(e,a,t){return _n(a,e.child,null,t),e=Li(a,a.pendingProps),e.flags|=2,wa(a),a.memoizedState=null,e}function gg(e,a,t){var n=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ie){if(n.mode==="hidden")return e=Li(a,n),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},po(null,e);if(zr(a),(e=Ce)?(e=Qp(e,Ga),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:nt,overflow:lt}:null,retryLane:536870912,hydrationErrors:null},t=em(e),t.return=a,a.child=t,Ze=a,Ce=null)):e=null,e===null)throw kt(a);return a.lanes=536870912,null}return Li(a,n)}var o=e.memoizedState;if(o!==null){var r=o.dehydrated;if(zr(a),l)if(a.flags&256)a.flags&=-257,a=xf(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(u(558));else if(Ie||Tn(e,a,t,!1),l=(t&e.childLanes)!==0,Ie||l){if(Jt.current===null){if(n=we,n!==null&&(r=nd(n,t),r!==0&&r!==o.retryLane))throw o.retryLane=r,En(e,r),xa(n,e,r),ac;ns()}a=xf(e,a,t)}else e=o.treeContext,Ce=Va(r.nextSibling),Ze=a,ie=!0,Qt=null,Ga=!1,e!==null&&nm(a,e),a=Li(a,n),a.flags|=134221824;return a}return e=Ot(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function ml(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function tc(e,a,t,n,l){return jn(a),t=Lr(e,a,t,n,void 0,l),n=Hr(),e!==null&&!Ie?(Br(e,a,l),Dt(e,a,l)):(ie&&n&&hi(a),a.flags|=1,Qe(e,a,t,l),a.child)}function bf(e,a,t,n,l,o){return jn(a),a.updateQueue=null,t=Nm(a,n,t,l),ym(e),n=Hr(),e!==null&&!Ie?(Br(e,a,o),Dt(e,a,o)):(ie&&n&&hi(a),a.flags|=1,Qe(e,a,t,o),a.child)}function yf(e,a,t,n,l){if(jn(a),a.stateNode===null){var o=tl,r=t.contextType;typeof r=="object"&&r!==null&&(o=ea(r)),o=new t(n,o),a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Wr,a.stateNode=o,o._reactInternals=a,o=a.stateNode,o.props=n,o.state=a.memoizedState,o.refs={},wr(a),r=t.contextType,o.context=typeof r=="object"&&r!==null?ea(r):tl,o.state=a.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&($r(a,t,r,n),o.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&Wr.enqueueReplaceState(o,o.state,null),ro(a,n,o,l),so(),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){o=a.stateNode;var m=a.memoizedProps,g=zn(t,m);o.props=g;var T=o.context,D=t.contextType;r=tl,typeof D=="object"&&D!==null&&(r=ea(D));var z=t.getDerivedStateFromProps;D=typeof z=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=a.pendingProps!==m,D||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||T!==r)&&of(a,o,n,r),Kt=!1;var A=a.memoizedState;o.state=A,ro(a,n,o,l),so(),T=a.memoizedState,m||A!==T||Kt?(typeof z=="function"&&($r(a,t,z,n),T=a.memoizedState),(g=Kt||lf(a,t,g,n,A,T,r))?(D||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=T),o.props=n,o.state=T,o.context=r,n=g):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{o=a.stateNode,Rr(e,a),r=a.memoizedProps,D=zn(t,r),o.props=D,z=a.pendingProps,A=o.context,T=t.contextType,g=tl,typeof T=="object"&&T!==null&&(g=ea(T)),m=t.getDerivedStateFromProps,(T=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==z||A!==g)&&of(a,o,n,g),Kt=!1,A=a.memoizedState,o.state=A,ro(a,n,o,l),so();var R=a.memoizedState;r!==z||A!==R||Kt||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof m=="function"&&($r(a,t,m,n),R=a.memoizedState),(D=Kt||lf(a,t,D,n,A,R,g)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(T||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,R,g),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,R,g)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=R),o.props=n,o.state=R,o.context=g,n=D):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),n=!1)}return o=n,ml(e,a),n=(a.flags&128)!==0,o||n?(o=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:o.render(),a.flags|=1,e!==null&&n?(a.child=_n(a,e.child,null,l),a.child=_n(a,null,t,l)):Qe(e,a,t,l),a.memoizedState=o.state,e=a.child):e=Dt(e,a,l),e}function Nf(e,a,t,n){return An(),a.flags|=256,Qe(e,a,t,n),a.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:cm()}}function oc(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Da),e}function Ef(e,a,t){var n=a.pendingProps,l=!1,o=(a.flags&128)!==0,r;if((r=o)||(r=e!==null&&e.memoizedState===null?!1:(ta.current&2)!==0),r&&(l=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,e===null){if(ie){if(l?$t(a):Wt(),(e=Ce)?(e=Qp(e,Ga),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:nt,overflow:lt}:null,retryLane:536870912,hydrationErrors:null},t=em(e),t.return=a,a.child=t,Ze=a,Ce=null)):e=null,e===null)throw kt(a);return lu(e)?a.lanes=32:a.lanes=536870912,null}return o=n.children,n=n.fallback,l?(Wt(),l=a.mode,o=Hi({mode:"hidden",children:o},l),n=Sn(n,l,t,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=lc(t),n.childLanes=oc(e,r,t),a.memoizedState=nc,po(null,n)):($t(a),ic(a,o))}var m=e.memoizedState;if(m!==null){var g=m.dehydrated;if(g!==null)return xg(e,a,o,r,n,g,m,t)}return l?(Wt(),l=n.fallback,o=a.mode,m=e.child,g=m.sibling,n=Ot(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&1206910976,g!==null?l=Ot(g,l):(l=Sn(l,o,t,null),l.flags|=2),l.return=a,n.return=a,n.sibling=l,a.child=n,po(null,n),n=a.child,l=e.child.memoizedState,l===null?l=lc(t):(o=l.cachePool,o!==null?(m=Be._currentValue,o=o.parent!==m?{parent:m,pool:m}:o):o=cm(),l={baseLanes:l.baseLanes|t,cachePool:o}),n.memoizedState=l,n.childLanes=oc(e,r,t),a.memoizedState=nc,po(e.child,n)):($t(a),t=e.child,e=t.sibling,t=Ot(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t)}function ic(e,a){return a=Hi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Hi(e,a){return e=pa(22,e,null,a),e.lanes=0,e}function Bi(e,a,t){return _n(a,e.child,null,t),e=ic(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function xg(e,a,t,n,l,o,r,m){if(t)return a.flags&256?($t(a),a.flags&=-257,Bi(e,a,m)):a.memoizedState!==null?(Wt(),a.child=e.child,a.flags|=128,null):(Wt(),o=l.fallback,r=a.mode,l=Hi({mode:"visible",children:l.children},r),o=Sn(o,r,m,null),o.flags|=2,l.return=a,o.return=a,l.sibling=o,a.child=l,_n(a,e.child,null,m),l=a.child,l.memoizedState=lc(m),l.childLanes=oc(e,n,m),a.memoizedState=nc,po(null,l));if($t(a),lu(o)){if(n=o.nextSibling&&o.nextSibling.dataset,n)var g=n.dgst;return n=g,n!==""&&(l=Error(u(419)),l.stack="",l.digest=n,ao({value:l,source:null,stack:null})),Bi(e,a,m)}if(Ie||Tn(e,a,m,!1),n=(m&e.childLanes)!==0,Ie||n){if(Jt.current!==null)return Bi(e,a,m);if(n=we,n!==null&&(l=nd(n,m),l!==0&&l!==r.retryLane))throw r.retryLane=l,En(e,l),xa(n,e,l),ac;return nu(o)||ns(),Bi(e,a,m)}return nu(o)?(a.flags|=192,a.child=e.child,null):(e=r.treeContext,Ce=Va(o.nextSibling),Ze=a,ie=!0,Qt=null,Ga=!1,e!==null&&nm(a,e),a=ic(a,l.children),a.flags|=134221824,a)}function Sf(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),gi(e.return,a,t)}function Af(e){for(var a=null;e!==null;){var t=e.alternate;t!==null&&Ti(t)===null&&(a=e),e=e.sibling}return a}function Gi(e,a,t,n,l,o){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l,treeForkCount:o}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=t,r.tailMode=l,r.treeForkCount=o)}function sc(e){var a=e.child;for(e.child=null;a!==null;){var t=a.sibling;a.sibling=e.child,e.child=a,a=t}}function rc(e,a,t){var n=a.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var r=ta.current;if(a.flags&128)return co(a,r),null;var m=(r&2)!==0;if(m?(r=r&1|2,a.flags|=128):r&=1,co(a,r),l==="backwards"&&e!==null?(sc(e),Qe(e,a,n,t),sc(e)):Qe(e,a,n,t),n=ie?eo:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sf(e,t,a);else if(e.tag===19)Sf(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":t=Af(a.child),t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null,sc(a)),Gi(a,!0,l,null,o,n);break;case"unstable_legacy-backwards":for(t=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&Ti(e)===null){a.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Gi(a,!0,t,null,o,n);break;case"together":Gi(a,!1,null,null,void 0,n);break;case"independent":a.memoizedState=null;break;default:t=Af(a.child),t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null),Gi(a,!1,l,t,o,n)}return a.child}function Of(e,a,t){var n=a.pendingProps;return Xt(a,a.type,n.value),Qe(e,a,n.children,t),a.child}function Dt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),nn|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Tn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,t=Ot(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ot(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function cc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function bg(e,a,t){switch(a.tag){case 3:ko(a,a.stateNode.containerInfo),Xt(a,Be,e.memoizedState.cache),An();break;case 27:case 5:qs(a);break;case 4:ko(a,a.stateNode.containerInfo);break;case 10:Xt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,zr(a),null;break;case 13:var n=a.memoizedState;if(n!==null){if(n.dehydrated!==null)return $t(a),a.flags|=128,null;n=Tn(e,a,t,!1);var l=a.child.childLanes;return n||(t&l)!==0?Ef(e,a,t):($t(a),e=Dt(e,a,t),e!==null?e.sibling:null)}$t(a);break;case 19:if(a.flags&128)return rc(e,a,t);if(l=(e.flags&128)!==0,n=(t&a.childLanes)!==0,n||(Tn(e,a,t,!1),n=(t&a.childLanes)!==0),l){if(n)return rc(e,a,t);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),co(a,ta.current),n)break;return null;case 22:return a.lanes=0,vf(e,a,t,a.pendingProps);case 24:Xt(a,Be,e.memoizedState.cache)}return Dt(e,a,t)}function Tf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ie=!0;else{if(!cc(e,t)&&(a.flags&128)===0)return Ie=!1,bg(e,a,t);Ie=(e.flags&131072)!==0}else Ie=!1,ie&&(a.flags&1048576)!==0&&tm(a,eo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Cn(a.elementType),a.type=e,typeof e=="function")vr(e)?(n=zn(e,n),a.tag=1,a=yf(null,a,e,n,t)):(a.tag=0,a=tc(null,a,e,n,t));else{if(e!=null){var l=e.$$typeof;if(l===U){a.tag=11,a=ff(null,a,e,n,t);break e}else if(l===se){a.tag=14,a=pf(null,a,e,n,t);break e}else if(l===Ne){a.tag=10,a.type=e,a=Of(null,a,t);break e}}throw a=ge(e)||e,Error(u(306,a,""))}}return a;case 0:return tc(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,l=zn(n,a.pendingProps),yf(e,a,n,l,t);case 3:e:{if(ko(a,a.stateNode.containerInfo),e===null)throw Error(u(387));n=a.pendingProps;var o=a.memoizedState;l=o.element,Rr(e,a),ro(a,n,null,t);var r=a.memoizedState;if(n=r.cache,Xt(a,Be,n),n!==o.cache&&Sr(a,[Be],t,!0),so(),n=r.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=o,a.memoizedState=o,a.flags&256){a=Nf(e,a,n,t);break e}else if(n!==l){l=La(Error(u(424)),a),ao(l),a=Nf(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Va(e.firstChild),Ze=a,ie=!0,Qt=null,Ga=!0,t=hm(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(An(),n===l){a=Dt(e,a,t);break e}Qe(e,a,n,t)}a=a.child}return a;case 26:return ml(e,a),e===null?(t=Jp(a.type,null,a.pendingProps,null))?a.memoizedState=t:ie||(a.stateNode=Cp(a.type,a.pendingProps,Ht.current,a)):a.memoizedState=Jp(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return qs(a),e===null&&ie&&(n=a.stateNode=Zp(a.type,a.pendingProps,Ht.current),Ze=a,Ga=!0,l=Ce,rn(a.type)?(ou=l,Ce=Va(n.firstChild)):Ce=l),Qe(e,a,a.pendingProps.children,t),ml(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ie&&((l=n=Ce)&&(n=fx(n,a.type,a.pendingProps,Ga),n!==null?(a.stateNode=n,Ze=a,Ce=Va(n.firstChild),Ga=!1,l=!0):l=!1),l||kt(a)),qs(a),l=a.type,o=a.pendingProps,r=e!==null?e.memoizedProps:null,n=o.children,Fc(l,o)?n=null:r!==null&&Fc(l,r)&&(a.flags|=32),a.memoizedState!==null&&(l=Lr(e,a,rg,null,null,t),Cl._currentValue=l),ml(e,a),Qe(e,a,n,t),a.child;case 6:return e===null&&ie&&((e=t=Ce)&&(t=px(t,a.pendingProps,Ga),t!==null?(a.stateNode=t,Ze=a,Ce=null,e=!0):e=!1),e||kt(a)),null;case 13:return Ef(e,a,t);case 4:return ko(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=_n(a,null,n,t):Qe(e,a,n,t),a.child;case 11:return ff(e,a,a.type,a.pendingProps,t);case 7:return n=a.pendingProps,ml(e,a),Qe(e,a,n,t),a.child;case 8:return Qe(e,a,a.pendingProps.children,t),a.child;case 12:return Qe(e,a,a.pendingProps.children,t),a.child;case 10:return Of(e,a,t);case 9:return l=a.type._context,n=a.pendingProps.children,jn(a),l=ea(l),n=n(l),a.flags|=1,Qe(e,a,n,t),a.child;case 14:return pf(e,a,a.type,a.pendingProps,t);case 15:return hf(e,a,a.type,a.pendingProps,t);case 19:return rc(e,a,t);case 31:return gg(e,a,t);case 22:return vf(e,a,t,a.pendingProps);case 24:return jn(a),n=ea(Be),e===null?(l=Tr(),l===null&&(l=we,o=Ar(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),a.memoizedState={parent:n,cache:l},wr(a),Xt(a,Be,l)):((e.lanes&t)!==0&&(Rr(e,a),ro(a,null,null,t),so()),l=e.memoizedState,o=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),Xt(a,Be,n)):(n=o.cache,Xt(a,Be,n),n!==l.cache&&Sr(a,[Be],t,!0))),Qe(e,a,a.pendingProps.children,t),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=a.pendingProps,n.name!=null&&n.name!=="auto"?a.flags|=e===null?18882560:18874368:ie&&hi(a),e!==null&&e.memoizedProps.name!==n.name?a.flags|=4194816:ml(e,a),Qe(e,a,n.children,t),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function _t(e){e.flags|=4}function uc(e,a,t,n,l){var o;if((o=(e.mode&32)!==0)&&(o=t===null?ah(a,n):ah(a,n)&&(n.src!==t.src||n.srcSet!==t.srcSet)),o){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(sp())e.flags|=8192;else throw Dn=Ei,jr}else e.flags&=-16777217}function jf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!th(a))if(sp())e.flags|=8192;else throw Dn=Ei,jr}function Ii(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ed():536870912,e.lanes|=a,gl|=a)}function ho(e,a){if(!ie)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(a=e.tail,t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null}}function De(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&1206910976,n|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function yg(e,a,t){var n=a.pendingProps;switch(br(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(a),null;case 1:return De(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),wt(Be),Yn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ol(a)?_t(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Nr())),De(a),null;case 26:var l=a.type,o=a.memoizedState;return e===null?(_t(a),o!==null?(De(a),jf(a,o)):(De(a),uc(a,l,null,n,t))):o?o!==e.memoizedState?(_t(a),De(a),jf(a,o)):(De(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&_t(a),De(a),uc(a,l,e,n,t)),null;case 27:if(Xo(a),t=Ht.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&_t(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return De(a),a.subtreeFlags&=-33554433,null}e=at.current,ol(a)?lm(a):(e=Zp(l,n,t),a.stateNode=e,_t(a))}return De(a),a.subtreeFlags&=-33554433,null;case 5:if(Xo(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&_t(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return De(a),a.subtreeFlags&=-33554433,null}if(o=at.current,ol(a))lm(a);else{var r=To(Ht.current);switch(o){case 1:o=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=r.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?r.createElement(l,{is:n.is}):r.createElement(l)}}o[We]=a,o[fa]=n;e:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)o.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=o;e:switch(la(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&_t(a)}}return De(a),a.subtreeFlags&=-33554433,uc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&_t(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(u(166));if(e=Ht.current,ol(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,l=Ze,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[We]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Tp(e.nodeValue,t)),e||kt(a,!0)}else e=To(e).createTextNode(n),e[We]=a,a.stateNode=e}return De(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=ol(a),t!==null){if(e===null){if(!n)throw Error(u(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[We]=a}else An(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;De(a),e=!1}else t=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(wa(a),a):(wa(a),null);if((a.flags&128)!==0)throw Error(u(558))}return De(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ol(a),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[We]=a}else An(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;De(a),l=!1}else l=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(wa(a),a):(wa(a),null)}return wa(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Ii(a,a.updateQueue),De(a),null);case 4:return Yn(),e===null&&kc(a.stateNode.containerInfo),a.flags|=67108864,De(a),null;case 10:return wt(a.type),De(a),null;case 19:if(Ur(a),n=a.memoizedState,n===null)return De(a),null;if(l=(a.flags&128)!==0,o=n.rendering,o===null)if(l)ho(n,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(o=Ti(e),o!==null){for(a.flags|=128,ho(n,!1),e=o.updateQueue,a.updateQueue=e,Ii(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Wd(t,e),t=t.sibling;return co(a,ta.current&1|2),ie&&Tt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Sa()>Wi&&(a.flags|=128,l=!0,ho(n,!1),a.lanes=4194304)}else{if(!l)if(e=Ti(o),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Ii(a,e),ho(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!o.alternate&&!ie)return De(a),null}else 2*Sa()-n.renderingStartTime>Wi&&t!==536870912&&(a.flags|=128,l=!0,ho(n,!1),a.lanes=4194304);n.isBackwards?(o.sibling=a.child,a.child=o):(e=n.last,e!==null?e.sibling=o:a.child=o,n.last=o)}if(n.tail!==null){e=n.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Sa(),e.sibling=null,o=ta.current,o=l?o&1|2:o&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!t||ie?co(a,o):(t=o,Re(aa,a),Re(ta,t),sa===null&&(sa=a)),ie&&Tt(a,n.treeForkCount),e}return De(a),null;case 22:case 23:return wa(a),Mr(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(De(a),a.subtreeFlags&6&&(a.flags|=8192)):De(a),t=a.updateQueue,t!==null&&Ii(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&$e(Rn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),wt(Be),De(a),null;case 25:return null;case 30:return a.flags|=33554432,De(a),null}throw Error(u(156,a.tag))}function Ng(e,a){switch(br(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return wt(Be),Yn(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Xo(a),null;case 31:if(a.memoizedState!==null){if(wa(a),a.alternate===null)throw Error(u(340));An()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(wa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));An()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ur(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return Yn(),null;case 10:return wt(a.type),null;case 22:case 23:return wa(a),Mr(),e!==null&&$e(Rn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return wt(Be),null;case 25:return null;default:return null}}function wf(e,a){switch(br(a),a.tag){case 3:wt(Be),Yn();break;case 26:case 27:case 5:Xo(a);break;case 4:Yn();break;case 31:a.memoizedState!==null&&wa(a);break;case 13:wa(a);break;case 19:Ur(a);break;case 10:wt(a.type);break;case 22:case 23:wa(a),Mr(),e!==null&&$e(Rn);break;case 24:wt(Be)}}function vo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){n=void 0;var o=t.create,r=t.inst;n=o(),r.destroy=n}t=t.next}while(t!==l)}}catch(m){Oe(a,a.return,m)}}function en(e,a,t){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var r=n.inst,m=r.destroy;if(m!==void 0){r.destroy=void 0,l=a;var g=t,T=m;try{T()}catch(D){Oe(l,g,D)}}}n=n.next}while(n!==o)}}catch(D){Oe(a,a.return,D)}}function Rf(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{gm(a,t)}catch(n){Oe(e,e.return,n)}}}function Cf(e,a,t){t.props=zn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){Oe(e,a,n)}}function ot(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var l=e.stateNode,o=St(e.memoizedProps,l);(l.ref===null||l.ref.name!==o)&&(l.ref=Lp(o)),n=l.ref;break;case 7:if(e.stateNode===null){var r=new Ma(e);h(e.child,!1,dx,r,void 0,void 0),e.stateNode=r}n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(m){Oe(e,a,m)}}function na(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(l){Oe(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Oe(e,a,l)}else t.current=null}function Vi(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var t=0;t<a.length;t++)Yp(e.stateNode,a[t])}function Df(e){for(var a=e.return;a!==null&&(mc(a)&&Yp(e.stateNode,a.stateNode),!dc(a));)a=a.return}function go(e){for(var a=e.return;a!==null&&(mc(a)&&mx(e.stateNode,a.stateNode),!dc(a));)a=a.return}function dc(e){return e.tag===5||e.tag===3||e.tag===27}function mc(e){return e&&e.tag===7&&e.stateNode!==null}function fc(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(l){Oe(e,e.return,l)}}function pc(e,a,t){try{var n=e.stateNode;Zg(n,e.type,t,a),n[fa]=a}catch(l){Oe(e,e.return,l)}}function _f(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rn(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,a,t,n){var l=e.tag;if(l===5||l===6)l=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(l),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=tt)),Vi(e,n),xe=!0;else if(l!==4&&(l===27&&(Vi(e,n),n=null,rn(e.type)&&(t=e.stateNode,a=null)),e=e.child,e!==null))for(vc(e,a,t,n),e=e.sibling;e!==null;)vc(e,a,t,n),e=e.sibling}function Yi(e,a,t,n){var l=e.tag;if(l===5||l===6)l=e.stateNode,a?t.insertBefore(l,a):t.appendChild(l),Vi(e,n),xe=!0;else if(l!==4&&(l===27&&(Vi(e,n),n=null,rn(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Yi(e,a,t,n),e=e.sibling;e!==null;)Yi(e,a,t,n),e=e.sibling}function Mf(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);la(a,n,t),a[We]=e,a[fa]=t}catch(o){Oe(e,e.return,o)}}var Qi=!1,Ra=null;function zf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Qi=!0)}var it=null;function Uf(){var e=it;return it=null,e}var ha=0;function fl(e,a,t,n,l){return ha=0,qf(e.child,a,t,n,l)}function qf(e,a,t,n,l){for(var o=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(n!==null){var m=Wc(r);n.push(m),m.view&&(o=!0)}else o||Wc(r).view&&(o=!0);Qi=!0,Up(r,ha===0?a:a+"_"+ha,t),ha++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||qf(e.child,a,t,n,l)&&(o=!0));e=e.sibling}return o}function st(e,a){for(;e!==null;)e.tag===5?qp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||st(e.child,a)),e=e.sibling}function ki(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ki(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(u(544));var t=a.name;a=At(a.default,a.share),a!=="none"&&(fl(e,t,a,null,!1)||st(e.child,!1))}e=e.sibling}}function gc(e,a){if(e.tag===30){var t=e.stateNode,n=e.memoizedProps,l=St(n,t),o=At(n.default,t.paired?n.share:n.enter);o!=="none"?fl(e,l,o,null,!1)?(ki(e),t.paired||a||Nl(e,n.onEnter)):st(e.child,!1):ki(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gc(e,a),e=e.sibling;else ki(e)}function xc(e){if(Ra!==null&&Ra.size!==0){var a=Ra;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,n=t.name;if(n!=null&&n!=="auto"){var l=a.get(n);if(l!==void 0){var o=At(t.default,t.share);if(o!=="none"&&(fl(e,n,o,null,!1)?(o=e.stateNode,l.paired=o,o.paired=l,Nl(e,t.onShare)):st(e.child,!1)),a.delete(n),a.size===0)break}}}xc(e)}e=e.sibling}}}function bc(e){if(e.tag===30){var a=e.memoizedProps,t=St(a,e.stateNode),n=Ra!==null?Ra.get(t):void 0,l=At(a.default,n!==void 0?a.share:a.exit);l!=="none"&&(fl(e,t,l,null,!1)?n!==void 0?(l=e.stateNode,n.paired=l,l.paired=n,Ra.delete(t),Nl(e,a.onShare)):Nl(e,a.onExit):st(e.child,!1)),Ra!==null&&xc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bc(e),e=e.sibling;else Ra!==null&&xc(e)}function Lf(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,t=St(a,e.stateNode);a=At(a.default,a.update),e.flags&=-5,a!=="none"&&fl(e,t,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Lf(e);e=e.sibling}}function yc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,st(e.child,!1))}yc(e)}e=e.sibling}}function Xi(e){if(e.tag===30)e.stateNode.paired=null,st(e.child,!1),yc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xi(e),e=e.sibling;else yc(e)}function Hf(e){for(e=e.child;e!==null;)e.tag===30?st(e.child,!1):(e.subtreeFlags&33554432)!==0&&Hf(e),e=e.sibling}function Nc(e,a,t,n,l,o,r){for(var m=!1;a!==null;){if(a.tag===5){var g=a.stateNode;if(o!==null&&ha<o.length){var T=o[ha],D=Wc(g);(T.view||D.view)&&(m=!0);var z;if(z=(e.flags&4)===0)if(D.clip)z=!0;else{z=T.rect;var A=D.rect;z=z.y!==A.y||z.x!==A.x||z.height!==A.height||z.width!==A.width}z&&(e.flags|=4),D.abs?D=!T.abs:(T=T.rect,D=D.rect,D=T.height!==D.height||T.width!==D.width),D&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Up(g,ha===0?t:t+"_"+ha,l),m&&(e.flags&4)!==0||(it===null&&(it=[]),it.push(g,ha===0?n:n+"_"+ha,a.memoizedProps)),ha++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&r?e.flags|=a.flags&32:Nc(e,a.child,t,n,l,o,r)&&(m=!0));a=a.sibling}return m}function Bf(e,a){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=e.stateNode,l=St(t,n),o=At(t.default,t.update),r;r=e.memoizedState,e.memoizedState=null,n=e;var m=e.child;ha=0,l=Nc(n,m,l,l,o,r,!1),(e.flags&4)!==0&&l&&Nl(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Bf(e);e=e.sibling}}var Ke=!1,Se=!1,rt=!1,Ec=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,Pe=null,ct=!1,xo=!1,Zi=!1,Sc=!1;function Eg(e,a,t){if(e=e.containerInfo,Kc=Dl,e=Yd(e),cr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var m=0,g=-1,T=-1,D=0,z=0,A=e,R=null;a:for(;;){for(var V;A!==n||o!==0&&A.nodeType!==3||(g=m+o),A!==r||l!==0&&A.nodeType!==3||(T=m+l),A.nodeType===3&&(m+=A.nodeValue.length),(V=A.firstChild)!==null;)R=A,A=V;for(;;){if(A===e)break a;if(R===n&&++D===o&&(g=m),R===r&&++z===l&&(T=m),(V=A.nextSibling)!==null)break;A=R,R=A.parentNode}A=V}n=g===-1||T===-1?null:{start:g,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:e,selectionRange:n},Dl=!1,t=(t&335544064)===t,Pe=a,a=t?9270:1024;Pe!==null;){if(e=Pe,t&&(n=e.deletions,n!==null))for(o=0;o<n.length;o++)t&&bc(n[o]);if(e.alternate===null&&(e.flags&2)!==0)t&&zf(e),Ki(t);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&t&&bc(n),Ki(t);continue}else if(n!==null&&n.memoizedState!==null){t&&zf(e),Ki(t);continue}}n=e.child,(e.subtreeFlags&a)!==0&&n!==null?(n.return=e,Pe=n):(t&&Lf(e),Ki(t))}}Ra=null}function Ki(e){for(;Pe!==null;){var a=Pe,t=e,n=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){t=void 0,l=n.memoizedProps,n=n.memoizedState;var o=a.stateNode;try{var r=zn(a.type,l);t=o.getSnapshotBeforeUpdate(r,n),o.__reactInternalSnapshotBeforeUpdate=t}catch(m){Oe(a,a.return,m)}}break;case 3:if((l&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)tu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":tu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&n!==null&&(t=St(n.memoizedProps,n.stateNode),l=a.memoizedProps,l=At(l.default,l.update),l!=="none"&&fl(n,t,l,n.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(u(163))}if(n=a.sibling,n!==null){n.return=a.return,Pe=n;break}Pe=a.return}}function If(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:ut(e,t),n&4&&vo(5,t);break;case 1:if(ut(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(r){Oe(t,t.return,r)}else{var l=zn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Oe(t,t.return,r)}}n&64&&Rf(t),n&512&&ot(t,t.return);break;case 3:if(ut(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{gm(e,a)}catch(r){Oe(t,t.return,r)}}break;case 27:a===null&&n&4&&Mf(t);case 26:case 5:ut(e,t),a===null&&n&4&&fc(t),n&512&&ot(t,t.return);break;case 12:ut(e,t);break;case 31:ut(e,t),n&4&&kf(e,t);break;case 13:ut(e,t),n&4&&Xf(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=zg.bind(null,t),hx(e,t))));break;case 22:if(n=t.memoizedState!==null||Ke,!n){var o=a!==null&&a.memoizedState!==null||Se;a=Ke,l=Se,Ke=n,(Se=o)&&!l?(n=2,(t.subtreeFlags&8772)!==0&&(n|=1),Fa(e,t,n)):ut(e,t),Ke=a,Se=l}break;case 30:ut(e,t),n&512&&ot(t,t.return);break;case 7:n&512&&ot(t,t.return);default:ut(e,t)}}function Ac(e,a){for(e=e.child;e!==null;)Vf(e,a),e=e.sibling}function Vf(e,a){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(a){var n=t.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var l=e.stateNode,o=e.memoizedProps.style,r=o!=null&&o.hasOwnProperty("display")?o.display:null;l.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(g){Oe(e,e.return,g)}Oc(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,xe=!0}catch(g){Oe(e,e.return,g)}break;case 18:try{var m=e.stateNode;a?zp(m,!0):zp(e.stateNode,!1)}catch(g){Oe(e,e.return,g)}break;case 22:case 23:e.memoizedState===null&&Ac(e,a);break;default:Ac(e,a)}}function Oc(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,n=a;switch(t.tag){case 4:Vf(t,n);break e;case 22:t.memoizedState===null&&Oc(t,n);break e;default:Oc(t,n)}}e=e.sibling}}function Yf(e){var a=e.alternate;a!==null&&(e.alternate=null,Yf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Wo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,va=!1;function Ka(e,a,t){for(t=t.child;t!==null;)Qf(e,a,t),t=t.sibling}function Qf(e,a,t){if(Aa&&typeof Aa.onCommitFiberUnmount=="function")try{Aa.onCommitFiberUnmount(Gl,t)}catch{}switch(t.tag){case 26:Se||na(t,a),Ka(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Se&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Se||na(t,a),go(t);var n=Me,l=va;rn(t.type)&&(Me=t.stateNode,va=!1),Ka(e,a,t),Kp(t.stateNode,t.type,t.memoizedProps),Me=n,va=l;break;case 5:Se||na(t,a),go(t);case 6:if(t.tag===6&&go(t),n=Me,l=va,Me=null,Ka(e,a,t),Me=n,va=l,Me!==null)if(va)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(t.stateNode),xe=!0}catch(o){Oe(t,a,o)}else try{Me.removeChild(t.stateNode),xe=!0}catch(o){Oe(t,a,o)}break;case 18:Me!==null&&(va?(e=Me,Mp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),_l(e)):Mp(Me,t.stateNode));break;case 4:n=Me,l=va,Me=t.stateNode.containerInfo,va=!0,Ka(e,a,t),Me=n,va=l;break;case 0:case 11:case 14:case 15:en(2,t,a),Se||en(4,t,a),Ka(e,a,t);break;case 1:Se||(na(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Cf(t,a,n)),Ka(e,a,t);break;case 21:Ka(e,a,t);break;case 22:Se=(n=Se)||t.memoizedState!==null,Ka(e,a,t),Se=n;break;case 30:na(t,a),Ka(e,a,t);break;case 7:Se||na(t,a),Ka(e,a,t);break;default:Ka(e,a,t)}}function kf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(t){Oe(a,a.return,t)}}}function Xf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(t){Oe(a,a.return,t)}}function Sg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Gf),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Gf),a;default:throw Error(u(435,e.tag))}}function Pi(e,a){var t=Sg(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var l=Ug.bind(null,e,n);n.then(l,l)}})}function da(e,a,t){var n=a.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],r=e,m=a,g=m;e:for(;g!==null;){switch(g.tag){case 27:if(rn(g.type)){Me=g.stateNode,va=!1;break e}break;case 5:Me=g.stateNode,va=!1;break e;case 3:case 4:Me=g.stateNode.containerInfo,va=!0;break e}g=g.return}if(Me===null)throw Error(u(160));Qf(r,m,o),Me=null,va=!1,r=o.alternate,r!==null&&(r.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Zf(a,e,t),a=a.sibling}var Pa=null;function Zf(e,a,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var o=0;o<n.length;o++){var r=n[o];r.ref.impl=r.nextImpl}da(a,e,t),ma(e),l&4&&(en(3,e,e.return),vo(3,e),en(5,e,e.return));break;case 1:da(a,e,t),ma(e),l&512&&(Se||n===null||na(n,n.return)),l&64&&Ke&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:if(o=Pa,da(a,e,t),ma(e),l&512&&(Se||n===null||na(n,n.return)),l&4)if(l=n!==null?n.memoizedState:null,t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null)if(Ke)e.stateNode=Cp(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,t=e.memoizedProps,l=o.ownerDocument||o;a:switch(a){case"title":n=l.getElementsByTagName("title")[0],(!n||n[Yl]||n[We]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=l.createElement(a),l.head.insertBefore(n,l.querySelector("head > title"))),la(n,a,t),n[We]=e,Xe(n),a=n;break e;case"link":if(o=eh("link","href",l).get(a+(t.href||""))){for(r=0;r<o.length;r++)if(n=o[r],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(r,1);break a}}n=l.createElement(a),la(n,a,t),l.head.appendChild(n);break;case"meta":if(o=eh("meta","content",l).get(a+(t.content||""))){for(r=0;r<o.length;r++)if(n=o[r],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(r,1);break a}}n=l.createElement(a),la(n,a,t),l.head.appendChild(n);break;default:throw Error(u(468,a))}n[We]=e,Xe(n),a=n}e.stateNode=a}else Ke||cu(o,e.type,e.stateNode);else e.stateNode=Wp(o,t,e.memoizedProps);else l!==t?(l===null?(a=n.stateNode,a===null||Se||a.parentNode.removeChild(a)):l.count--,t===null?Ke||cu(o,e.type,e.stateNode):Wp(o,t,e.memoizedProps)):t===null&&e.stateNode!==null&&pc(e,e.memoizedProps,n.memoizedProps);break;case 27:da(a,e,t),ma(e),l&512&&(Se||n===null||na(n,n.return)),n!==null&&l&4&&pc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(o=rt,rt=!1,da(a,e,t),rt=o,ma(e),l&512&&(Se||n===null||na(n,n.return)),e.flags&32){a=e.stateNode;try{Pn(a,""),xe=!0}catch(D){Oe(e,e.return,D)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,pc(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ec=!0);break;case 6:if(da(a,e,t),ma(e),l&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a,xe=!0}catch(D){Oe(e,e.return,D)}}break;case 3:if(xe=!1,us=null,o=Pa,Pa=jo(a.containerInfo),da(a,e,t),Pa=o,ma(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{_l(a.containerInfo)}catch(D){Oe(e,e.return,D)}Ec&&(Ec=!1,Kf(e)),xe=!1;break;case 4:l=rt,rt=Ke,n=fd(),o=Pa,Pa=jo(e.stateNode.containerInfo),da(a,e,t),ma(e),Pa=o,xe&&xo&&(Zi=!0),xe=n,rt=l;break;case 12:da(a,e,t),ma(e);break;case 31:da(a,e,t),ma(e),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pi(e,a)));break;case 13:da(a,e,t),ma(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($i=Sa()),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pi(e,a)));break;case 22:o=e.memoizedState!==null,r=n!==null&&n.memoizedState!==null;var m=Ke,g=Se,T=rt;Ke=m||o,rt=T||o,Se=g||r,da(a,e,t),Se=g,rt=T,Ke=m,ma(e),l&8192&&(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,!o||n===null||r||Ke||Se||(a=r||Se,t=Ke,n=Se,Ke=o||Ke,Se=a,an(e,2),Ke=t,Se=n),!o&&rt||Ac(e,o)),l&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Pi(e,t))));break;case 19:da(a,e,t),ma(e),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Pi(e,a)));break;case 30:l&512&&(Se||n===null||na(n,n.return)),l=fd(),o=xo,r=(t&335544064)===t,m=e.memoizedProps,xo=r&&At(m.default,m.update)!=="none",da(a,e,t),ma(e),r&&n!==null&&xe&&(e.flags|=4),xo=o,xe=l;break;case 21:break;case 7:l&512&&(Se||n===null||na(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:da(a,e,t),ma(e)}}function ma(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(_f(n)){t=n;break}n=n.return}n=null;for(var l=e.return;l!==null;){if(mc(l)){var o=l.stateNode;n===null?n=[o]:n.push(o)}if(dc(l))break;l=l.return}var r=n;if(t==null)throw Error(u(160));switch(t.tag){case 27:var m=t.stateNode,g=hc(e);Yi(e,g,m,r);break;case 5:var T=t.stateNode;t.flags&32&&(Pn(T,""),t.flags&=-33);var D=hc(e);Yi(e,D,T,r);break;case 3:case 4:var z=t.stateNode.containerInfo,A=hc(e);vc(e,A,z,r);break;default:throw Error(u(161))}}catch(R){Oe(e,e.return,R)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Kf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Kf(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Dl=!0,a.reset(),Dl=!1),e=e.sibling}}function pl(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)Pf(a,e),a=a.sibling;else Bf(a)}function Pf(e,a){var t=e.alternate;if(t===null)gc(e,!1);else switch(e.tag){case 3:if(Sc=ct=!1,Uf(),pl(a,e),!ct&&!Zi){if(e=it,e!==null)for(var n=0;n<e.length;n+=3){t=e[n];var l=e[n+1];qp(t,e[n+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Sc=!0}it=null;break;case 5:pl(a,e);break;case 4:n=ct,ct=!1,pl(a,e),ct&&(Zi=!0),ct=n;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?gc(e,!1):pl(a,e));break;case 30:n=ct,l=Uf(),ct=!1,pl(a,e),ct&&(e.flags|=4);var o=e.memoizedProps,r=e.stateNode;a=St(o,r),r=St(t.memoizedProps,r);var m=At(o.default,o.update);m==="none"?a=!1:(o=t.memoizedState,t.memoizedState=null,t=e.child,ha=0,a=Nc(e,t,a,r,m,o,!0),ha!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Nl(e,e.memoizedProps.onUpdate),it=l):l!==null&&(l.push.apply(l,it),it=l),ct=(e.flags&32)!==0?!0:n;break;default:pl(a,e)}}function ut(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)If(e,a.alternate,a),a=a.sibling}function an(e,a){for(e=e.child;e!==null;){var t=e,n=a;switch(t.tag){case 0:case 11:case 14:case 15:en(4,t,t.return),an(t,n);break;case 1:na(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Cf(t,t.return,l),an(t,n);break;case 27:(n&2)!==0&&Kp(t.stateNode,t.type,t.memoizedProps);case 5:na(t,t.return),t.tag!==5&&t.tag!==27||go(t),an(t,n);break;case 6:go(t);break;case 26:na(t,t.return),l=t.stateNode,t.memoizedState!==null||l===null||Se||l.parentNode.removeChild(l),an(t,n);break;case 22:t.memoizedState===null&&an(t,n);break;case 30:na(t,t.return),an(t,n);break;case 7:na(t,t.return);default:an(t,n)}e=e.sibling}}function Fa(e,a,t){for(t=(a.subtreeFlags&8772)!==0?t:t&-2,a=a.child;a!==null;){var n=a.alternate,l=e,o=a,r=o.flags,m=(t&1)!==0;switch(o.tag){case 0:case 11:case 15:Fa(l,o,t),vo(4,o);break;case 1:if(Fa(l,o,t),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){Oe(n,n.return,D)}if(n=o,l=n.updateQueue,l!==null){var g=n.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)vm(T[l],g)}catch(D){Oe(n,n.return,D)}}m&&r&64&&Rf(o),ot(o,o.return);break;case 27:(t&2)!==0&&Mf(o);case 5:o.tag!==5&&o.tag!==27||Df(o),Fa(l,o,t),m&&n===null&&r&4&&fc(o),ot(o,o.return);break;case 6:Df(o);break;case 26:g=o.stateNode,o.memoizedState!==null||g===null||Ke||cu(jo(g.ownerDocument),o.type,g),Fa(l,o,t),m&&n===null&&r&4&&fc(o),ot(o,o.return);break;case 12:Fa(l,o,t);break;case 31:Fa(l,o,t),m&&r&4&&kf(l,o);break;case 13:Fa(l,o,t),m&&r&4&&Xf(l,o);break;case 22:o.memoizedState===null&&Fa(l,o,t),ot(o,o.return);break;case 30:Fa(l,o,t),ot(o,o.return);break;case 7:ot(o,o.return);default:Fa(l,o,t)}a=a.sibling}}function Tc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&to(t))}function jc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&to(e))}function Ia(e,a,t,n){var l=(t&335544064)===t;if(a.subtreeFlags&(l?10262:10256))for(a=a.child;a!==null;)Ff(e,a,t,n),a=a.sibling;else l&&Hf(a)}function Ff(e,a,t,n){var l=(t&335544064)===t;l&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&Xi(a);var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ia(e,a,t,n),o&2048&&vo(9,a);break;case 1:Ia(e,a,t,n);break;case 3:Ia(e,a,t,n),l&&Sc&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,a.alternate!==null&&(o=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==o&&(a.refCount++,o!=null&&to(o)));break;case 12:if(o&2048){Ia(e,a,t,n),o=a.stateNode;try{var r=a.memoizedProps,m=r.id,g=r.onPostCommit;typeof g=="function"&&g(m,a.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(T){Oe(a,a.return,T)}}else Ia(e,a,t,n);break;case 31:Ia(e,a,t,n);break;case 13:Ia(e,a,t,n);break;case 23:break;case 22:r=a.stateNode,m=a.alternate,a.memoizedState!==null?(l&&m!==null&&m.memoizedState===null&&Xi(m),r._visibility&2?Ia(e,a,t,n):bo(e,a)):(l&&m!==null&&m.memoizedState!==null&&Xi(a),r._visibility&2?Ia(e,a,t,n):(r._visibility|=2,hl(e,a,t,n,(a.subtreeFlags&10256)!==0||!1))),o&2048&&Tc(m,a);break;case 24:Ia(e,a,t,n),o&2048&&jc(a.alternate,a);break;case 30:l&&(o=a.alternate,o!==null&&(st(o.child,!0),st(a.child,!0))),Ia(e,a,t,n);break;default:Ia(e,a,t,n)}}function hl(e,a,t,n,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var o=e,r=a,m=t,g=n,T=r.flags;switch(r.tag){case 0:case 11:case 15:hl(o,r,m,g,l),vo(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?hl(o,r,m,g,l):bo(o,r):(D._visibility|=2,hl(o,r,m,g,l)),l&&T&2048&&Tc(r.alternate,r);break;case 24:hl(o,r,m,g,l),l&&T&2048&&jc(r.alternate,r);break;default:hl(o,r,m,g,l)}a=a.sibling}}function bo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,l=n.flags;switch(n.tag){case 22:bo(t,n),l&2048&&Tc(n.alternate,n);break;case 24:bo(t,n),l&2048&&jc(n.alternate,n);break;default:bo(t,n)}a=a.sibling}}var Un=8192;function qn(e,a,t){if(e.subtreeFlags&Un)for(e=e.child;e!==null;)Jf(e,a,t),e=e.sibling}function Jf(e,a,t){switch(e.tag){case 26:qn(e,a,t),e.flags&Un&&(e.memoizedState!==null?Rx(t,Pa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&lh(t,e)));break;case 5:qn(e,a,t),e.flags&Un&&(e=e.stateNode,(a&335544128)===a&&lh(t,e));break;case 3:case 4:var n=Pa;Pa=jo(e.stateNode.containerInfo),qn(e,a,t),Pa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Un,Un=16777216,qn(e,a,t),Un=n):qn(e,a,t));break;case 30:if((e.flags&Un)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var l=e.stateNode;l.paired=null,Ra===null&&(Ra=new Map),Ra.set(n,l)}qn(e,a,t);break;default:qn(e,a,t)}}function $f(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function yo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Pe=n,ep(n,e)}$f(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wf(e),e=e.sibling}function Wf(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&en(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Fi(e)):yo(e);break;default:yo(e)}}function Fi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Pe=n,ep(n,e)}$f(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:en(8,a,a.return),Fi(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Fi(a));break;default:Fi(a)}e=e.sibling}}function ep(e,a){for(;Pe!==null;){var t=Pe;switch(t.tag){case 0:case 11:case 15:en(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:to(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Pe=n;else e:for(t=e;Pe!==null;){n=Pe;var l=n.sibling,o=n.return;if(Yf(n),n===t){Pe=null;break e}if(l!==null){l.return=o,Pe=l;break e}Pe=o}}}var Ag={getCacheForType:function(e){var a=ea(Be),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ea(Be).controller.signal}},Og=typeof WeakMap=="function"?WeakMap:Map,ye=0,we=null,re=null,fe=0,Ae=0,Ca=null,tn=!1,vl=!1,wc=!1,Mt=0,Le=0,nn=0,Ln=0,Ji=0,Da=0,gl=0,No=null,ga=null,Rc=!1,$i=0,ap=0,Wi=1/0,es=null,ln=null,ze=0,Ja=null,Hn=null,dt=0,Cc=0,Dc=null,tp=null,xl=null,bl=null,yl=null,Eo=0,as=null;function _a(){return(ye&2)!==0&&fe!==0?fe&-fe:K.T!==null?Ic():ld()}function np(){if(Da===0)if((fe&536870912)===0||ie){var e=Po;Po<<=1,(Po&3932160)===0&&(Po=262144),Da=e}else Da=536870912;return e=aa.current,e!==null&&(e.flags|=32),Da}function Nl(e,a){if(a!=null){var t=e.stateNode,n=t.ref;n===null&&(n=t.ref=Lp(St(e.memoizedProps,t))),bl===null&&(bl=[]),bl.push(a.bind(null,n))}}function xa(e,a,t){(e===we&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(El(e,0),on(e,fe,Da,!1)),Vl(e,t),((ye&2)===0||e!==we)&&(e===we&&((ye&2)===0&&(Ln|=t),Le===4&&on(e,fe,Da,!1)),mt(e))}function lp(e,a,t){if((ye&6)!==0)throw Error(u(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Il(e,a),l=n?wg(e,a):Mc(e,a,!0),o=n;do{if(l===0){vl&&!n&&on(e,a,0,!1);break}else{if(t=e.current.alternate,o&&!Tg(t)){l=Mc(e,a,!1),o=!1;continue}if(l===2){if(o=a,e.errorRecoveryDisabledLanes&o)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var m=e;l=No;var g=m.current.memoizedState.isDehydrated;if(g&&(El(m,r).flags|=256),r=Mc(m,r,!1),r!==2&&r!==6){if(wc&&!g){m.errorRecoveryDisabledLanes|=o,Ln|=o,l=4;break e}o=ga,ga=l,o!==null&&(ga===null?ga=o:ga.push.apply(ga,o))}l=r}if(o=!1,l!==2)continue}}if(l===1){El(e,0),on(e,a,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:on(n,a,Da,!tn);break e;case 2:ga=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(l=$i+300-Sa(),10<l)){if(on(n,a,Da,!tn),Jo(n,0,!0)!==0)break e;dt=a,n.timeoutHandle=$c(op.bind(null,n,t,ga,es,Rc,a,Da,Ln,gl,tn,o,"Throttled",-0,0),l);break e}op(n,t,ga,es,Rc,a,Da,Ln,gl,tn,o,null,-0,0)}}break}while(!0);mt(e)}function op(e,a,t,n,l,o,r,m,g,T,D,z,A,R){e.timeoutHandle=-1;var V=a.subtreeFlags,X=(o&335544064)===o;if(z=null,(X||V&8192||(V&16785408)===16785408)&&(z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tt},Ra=null,Jf(a,o,z),X&&(V=z,X=e.containerInfo,X=(X.nodeType===9?X:X.ownerDocument).__reactViewTransition,X!=null&&(V.count++,V.waitingForViewTransition=!0,V=Co.bind(V),X.finished.then(V,V))),V=(o&62914560)===o?$i-Sa():(o&4194048)===o?ap-Sa():0,V=Cx(z,V),V!==null)){dt=o,e.cancelPendingCommit=V(fp.bind(null,e,a,o,t,n,l,r,m,g,T,D,z,null,A,R)),on(e,o,r,!T);return}fp(e,a,o,t,n,l,r,m,g,T,D,z)}function Tg(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var l=t[n],o=l.getSnapshot;l=l.value;try{if(!ja(o(),l))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function on(e,a,t,n){a=Wu(e,a),a&=~Ji,a&=~Ln,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var l=a;0<l;){var o=31-Oa(l),r=1<<o;n[o]=-1,l&=~r}t!==0&&ad(e,t,a)}function ts(){return(ye&6)===0?(So(0),!1):!0}function _c(){if(re!==null){if(Ae===0)var e=re.return;else e=re,jt=On=null,Gr(e),rl=null,oo=0,e=re;for(;e!==null;)wf(e.alternate,e),e=e.return;re=null}}function El(e,a){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,Fg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),dt=0,_c(),we=e,re=t=Ot(e.current,null),fe=a,Ae=0,Ca=null,tn=!1,vl=Il(e,a),wc=!1,gl=Da=Ji=Ln=nn=Le=0,ga=No=null,Rc=!1,Mt=Wu(e,a),ui(),t}function ip(e,a){le=null,K.H=Ui,a===sl||a===Ni?(a=mm(),Ae=3):a===jr?(a=mm(),Ae=4):Ae=a===ac?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ca=a,re===null&&(Le=1,qi(e,La(a,e.current)))}function sp(){var e=aa.current;return e===null?!0:(fe&4194048)===fe?sa===null:(fe&62914560)===fe||(fe&536870912)!==0?e===sa:!1}function rp(){var e=K.H;return K.H=Ui,e===null?Ui:e}function cp(){var e=K.A;return K.A=Ag,e}function ns(){Le=4,tn||(fe&4194048)!==fe&&aa.current!==null||(vl=!0),(nn&134217727)===0&&(Ln&134217727)===0||we===null||on(we,fe,Da,!1)}function Mc(e,a,t){var n=ye;ye|=2;var l=rp(),o=cp();(we!==e||fe!==a)&&(es=null,El(e,a)),a=!1;var r=Le;e:do try{if(Ae!==0&&re!==null){var m=re,g=Ca;switch(Ae){case 8:_c(),r=6;break e;case 3:case 2:case 9:case 6:aa.current===null&&(a=!0);var T=Ae;if(Ae=0,Ca=null,Sl(e,m,g,T),t&&vl){r=0;break e}break;default:T=Ae,Ae=0,Ca=null,Sl(e,m,g,T)}}jg(),r=Le;break}catch(D){ip(e,D)}while(!0);return a&&e.shellSuspendCounter++,jt=On=null,ye=n,K.H=l,K.A=o,re===null&&(we=null,fe=0,ui()),r}function jg(){for(;re!==null;)up(re)}function wg(e,a){var t=ye;ye|=2;var n=rp(),l=cp();we!==e||fe!==a?(es=null,Wi=Sa()+500,El(e,a)):vl=Il(e,a);e:do try{if(Ae!==0&&re!==null){a=re;var o=Ca;a:switch(Ae){case 1:Ae=0,Ca=null,Sl(e,a,o,1);break;case 2:case 9:if(um(o)){Ae=0,Ca=null,dp(a);break}a=function(){Ae!==2&&Ae!==9||we!==e||(Ae=7),mt(e)},o.then(a,a);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:um(o)?(Ae=0,Ca=null,dp(a)):(Ae=0,Ca=null,Sl(e,a,o,7));break;case 5:var r=null;switch(re.tag){case 26:r=re.memoizedState;case 5:case 27:var m=re;if(r?th(r):m.stateNode.complete){Ae=0,Ca=null;var g=m.sibling;if(g!==null)re=g;else{var T=m.return;T!==null?(re=T,ls(T)):re=null}break a}}Ae=0,Ca=null,Sl(e,a,o,5);break;case 6:Ae=0,Ca=null,Sl(e,a,o,6);break;case 8:_c(),Le=6;break e;default:throw Error(u(462))}}Rg();break}catch(D){ip(e,D)}while(!0);return jt=On=null,K.H=n,K.A=l,ye=t,re!==null?0:(we=null,fe=0,ui(),Le)}function Rg(){for(;re!==null&&!Xv();)up(re)}function up(e){var a=Tf(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,a===null?ls(e):re=a}function dp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=bf(t,a,a.pendingProps,a.type,void 0,fe);break;case 11:a=bf(t,a,a.pendingProps,a.type.render,a.ref,fe);break;case 5:Gr(a);var n=a;n===Ze&&(ie?(vi(n),n.tag===5&&n.stateNode!=null&&(Ce=n.stateNode)):(vi(n),ie=!0));default:wf(t,a),a=re=Wd(a,Mt),a=Tf(t,a,Mt)}e.memoizedProps=e.pendingProps,a===null?ls(e):re=a}function Sl(e,a,t,n){jt=On=null,Gr(a),rl=null,oo=0;var l=a.return;try{if(vg(e,l,a,t,fe)){Le=1,qi(e,La(t,e.current)),re=null;return}}catch(o){if(l!==null)throw re=l,o;Le=1,qi(e,La(t,e.current)),re=null;return}a.flags&32768?(ie||n===1?e=!0:vl||(fe&536870912)!==0?e=!1:(tn=e=!0,(n===2||n===9||n===3||n===6)&&(n=aa.current,n!==null&&n.tag===13&&(n.flags|=16384))),mp(a,e)):ls(a)}function ls(e){var a=e;do{if((a.flags&32768)!==0){mp(a,tn);return}e=a.return;var t=yg(a.alternate,a,Mt);if(t!==null){re=t;return}if(a=a.sibling,a!==null){re=a;return}re=a=e}while(a!==null);Le===0&&(Le=5)}function mp(e,a){do{var t=Ng(e.alternate,e);if(t!==null){t.flags&=32767,re=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){re=e;return}re=e=t}while(e!==null);Le=6,re=null}function fp(e,a,t,n,l,o,r,m,g,T,D,z){e.cancelPendingCommit=null;do os();while(ze!==0);if((ye&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));e===we&&(re=we=null,fe=0),Hn=a,Ja=e,dt=t,Dc=l,tp=n,Cg(e,a,t,r,m,g,z)}}function Cg(e,a,t,n,l,o,r){var m=a.lanes|a.childLanes;if(Cc=m,m|=pr,t0(e,t,m,n,l,o),bl=null,(t&335544064)===t?(yl=lg(e),n=10262):(yl=null,n=10256),(a.subtreeFlags&n)!==0||(a.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,qg(Zo,function(){return Lc(),null})):(e.callbackNode=null,e.callbackPriority=0),Qi=!1,n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=K.T,K.T=null,l=ae.p,ae.p=2,o=ye,ye|=4;try{Eg(e,a,t)}finally{ye=o,ae.p=l,K.T=n}}ze=1,Qi?xl=tx(r,e.containerInfo,yl,zc,Uc,_g,qc,Lc,Dg):(zc(),Uc(),qc())}function Dg(e){if(ze!==0){var a=Ja.onRecoverableError;a(e,{componentStack:null})}}function _g(){ze===3&&(ze=0,Pf(Hn,Ja),ze=4)}function zc(){if(ze===1){ze=0;var e=Ja,a=Hn,t=dt,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=K.T,K.T=null;var l=ae.p;ae.p=2;var o=ye;ye|=4;try{xo=Zi=!1,Zf(a,e,t),t=Pc;var r=Yd(e.containerInfo),m=t.focusedElem,g=t.selectionRange;if(r!==m&&m&&m.ownerDocument&&Vd(m.ownerDocument.documentElement,m)){if(g!==null&&cr(m)){var T=g.start,D=g.end;if(D===void 0&&(D=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(D,m.value.length);else{var z=m.ownerDocument||document,A=z&&z.defaultView||window;if(A.getSelection){var R=A.getSelection(),V=m.textContent.length,X=Math.min(g.start,V),oe=g.end===void 0?X:Math.min(g.end,V);!R.extend&&X>oe&&(r=oe,oe=X,X=r);var O=Id(m,X),b=Id(m,oe);if(O&&b&&(R.rangeCount!==1||R.anchorNode!==O.node||R.anchorOffset!==O.offset||R.focusNode!==b.node||R.focusOffset!==b.offset)){var w=z.createRange();w.setStart(O.node,O.offset),R.removeAllRanges(),X>oe?(R.addRange(w),R.extend(b.node,b.offset)):(w.setEnd(b.node,b.offset),R.addRange(w))}}}}for(z=[],R=m;R=R.parentNode;)R.nodeType===1&&z.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<z.length;m++){var M=z[m];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Dl=!!Kc,Pc=Kc=null}finally{ye=o,ae.p=l,K.T=n}}e.current=a,ze=2}}function Uc(){if(ze===2){ze=0;var e=Ja,a=Hn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=K.T,K.T=null;var n=ae.p;ae.p=2;var l=ye;ye|=4;try{If(e,a.alternate,a)}finally{ye=l,ae.p=n,K.T=t}}ze=3}}function qc(){if(ze===4||ze===3){ze=0;var e=xl;xl=null,Zv();var a=Ja,t=Hn,n=dt,l=tp,o=(n&335544064)===n?10262:10256;if((t.subtreeFlags&o)!==0||(t.flags&o)!==0?ze=5:(ze=0,Hn=Ja=null,pp(a,a.pendingLanes)),o=a.pendingLanes,o===0&&(ln=null),ks(n),t=t.stateNode,Aa&&typeof Aa.onCommitFiberRoot=="function")try{Aa.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=K.T,o=ae.p,ae.p=2,K.T=null;try{for(var r=a.onRecoverableError,m=0;m<l.length;m++){var g=l[m];r(g.value,{componentStack:g.stack})}}finally{K.T=t,ae.p=o}}if(l=bl,r=yl,yl=null,l!==null&&(bl=null,r===null&&(r=[]),e!==null))for(g=0;g<l.length;g++)t=(0,l[g])(r),t!==void 0&&e.finished.finally(t);(dt&3)!==0&&os(),mt(a),o=a.pendingLanes,(n&261930)!==0&&(o&42)!==0?a===as?Eo++:(Eo=0,as=a):(Eo=0,as=null),So(0)}}function pp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,to(a)))}function os(){return xl!==null&&(xl.skipTransition(),xl=null),zc(),Uc(),qc(),Lc()}function Lc(){if(ze!==5)return!1;var e=Ja,a=Cc;Cc=0;var t=ks(dt),n=K.T,l=ae.p;try{ae.p=32>t?32:t,K.T=null,t=Dc,Dc=null;var o=Ja,r=dt;if(ze=0,Hn=Ja=null,dt=0,(ye&6)!==0)throw Error(u(331));var m=ye;if(ye|=4,Wf(o.current),Ff(o,o.current,r,t),ye=m,So(0,!1),Aa&&typeof Aa.onPostCommitFiberRoot=="function")try{Aa.onPostCommitFiberRoot(Gl,o)}catch{}return!0}finally{ae.p=l,K.T=n,pp(e,a)}}function hp(e,a,t){a=La(t,a),a=ec(e.stateNode,a,2),e=Ft(e,a,2),e!==null&&(Vl(e,2),mt(e))}function Oe(e,a,t){if(e.tag===3)hp(e,e,t);else for(;a!==null;){if(a.tag===3){hp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ln===null||!ln.has(n))){e=La(t,e),t=df(2),n=Ft(a,t,2),n!==null&&(mf(t,n,a,e),Vl(n,2),mt(n));break}}a=a.return}}function Hc(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Og;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(t)||(wc=!0,l.add(t),e=Mg.bind(null,e,a,t),a.then(e,e))}function Mg(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,we===e&&(fe&t)===t&&((Le===4||Le===3&&(fe&62914560)===fe&&300>Sa()-$i)&&(ye&2)===0?El(e,0):Ji|=t,gl===fe&&(gl=0)),mt(e)}function vp(e,a){a===0&&(a=ed()),e=En(e,a),e!==null&&(Vl(e,a),mt(e))}function zg(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),vp(e,t)}function Ug(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(a),vp(e,t)}function qg(e,a){return Is(e,a)}var Al=null,Ol=null,Bc=!1,is=!1,Gc=!1,sn=0;function mt(e){e!==Ol&&e.next===null&&(Ol===null?Al=Ol=e:Ol=Ol.next=e),is=!0,Bc||(Bc=!0,Hg())}function So(e,a){if(!Gc&&is){Gc=!0;do for(var t=!1,n=Al;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var r=n.suspendedLanes,m=n.pingedLanes;o=(1<<31-Oa(42|e)+1)-1,o&=l&~(r&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,yp(n,o))}else o=fe,o=Jo(n,n===we?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Il(n,o)||(t=!0,yp(n,o));n=n.next}while(t);Gc=!1}}function Lg(){gp()}function gp(){is=Bc=!1;var e=0;sn!==0&&Pg()&&(e=sn);for(var a=Sa(),t=null,n=Al;n!==null;){var l=n.next,o=xp(n,a);o===0?(n.next=null,t===null?Al=l:t.next=l,l===null&&(Ol=t)):(t=n,(e!==0||(o&3)!==0)&&(is=!0)),n=l}ze!==0&&ze!==5||So(e),sn!==0&&(sn=0)}function xp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var r=31-Oa(o),m=1<<r,g=l[r];g===-1?((m&t)===0||(m&n)!==0)&&(l[r]=a0(m,a)):g<=a&&(e.expiredLanes|=m),o&=~m}if(a=we,t=fe,t=Jo(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Vs(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Il(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&Vs(n),ks(t)){case 2:case 8:t=Ju;break;case 32:t=Zo;break;case 268435456:t=$u;break;default:t=Zo}return n=bp.bind(null,e),t=Is(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&Vs(n),e.callbackPriority=2,e.callbackNode=null,2}function bp(e,a){if(ze!==0&&ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(os()&&e.callbackNode!==t)return null;var n=fe;return n=Jo(e,e===we?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(lp(e,n,a),xp(e,Sa()),e.callbackNode!=null&&e.callbackNode===t?bp.bind(null,e):null)}function yp(e,a){if(os())return null;lp(e,a,!0)}function Hg(){Jg(function(){(ye&6)!==0?Is(Fu,Lg):gp()})}function Ic(){if(sn===0){var e=wn;e===0&&(e=Ko,Ko<<=1,(Ko&261888)===0&&(Ko=256)),sn=e}return sn}function Np(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(e)}function Bg(e,a,t,n,l){if(a==="submit"&&t&&t.stateNode===l){var o=Np((l[fa]||null).action),r=n.submitter;r&&(a=(a=r[fa]||null)?Np(a.formAction):r.getAttribute("formAction"),a!==null&&(o=a,r=null));var m=new ii("action","action",null,n,l);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(sn!==0){var g=new FormData(l,r);Pr(t,{pending:!0,data:g,method:l.method,action:o},null,g)}}else typeof o=="function"&&(m.preventDefault(),g=new FormData(l,r),Pr(t,{pending:!0,data:g,method:l.method,action:o},o,g))},currentTarget:l}]})}}for(var Vc=0;Vc<fr.length;Vc++){var Yc=fr[Vc],Gg=Yc.toLowerCase(),Ig=Yc[0].toUpperCase()+Yc.slice(1);Za(Gg,"on"+Ig)}Za(Xd,"onAnimationEnd"),Za(Zd,"onAnimationIteration"),Za(Kd,"onAnimationStart"),Za("dblclick","onDoubleClick"),Za("focusin","onFocus"),Za("focusout","onBlur"),Za(F0,"onTransitionRun"),Za(J0,"onTransitionStart"),Za($0,"onTransitionCancel"),Za(Pd,"onTransitionEnd"),Zn("onMouseEnter",["mouseout","mouseover"]),Zn("onMouseLeave",["mouseout","mouseover"]),Zn("onPointerEnter",["pointerout","pointerover"]),Zn("onPointerLeave",["pointerout","pointerover"]),bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Ep(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var o=void 0;if(a)for(var r=n.length-1;0<=r;r--){var m=n[r],g=m.instance,T=m.currentTarget;if(m=m.listener,g!==o&&l.isPropagationStopped())break e;o=m,l.currentTarget=T;try{o(l)}catch(D){ci(D)}l.currentTarget=null,o=g}else for(r=0;r<n.length;r++){if(m=n[r],g=m.instance,T=m.currentTarget,m=m.listener,g!==o&&l.isPropagationStopped())break e;o=m,l.currentTarget=T;try{o(l)}catch(D){ci(D)}l.currentTarget=null,o=g}}}}function ce(e,a){var t=a[id];t===void 0&&(t=a[id]=new Set);var n=e+"__bubble";t.has(n)||(Sp(a,e,2,!1),t.add(n))}function Qc(e,a,t){var n=0;a&&(n|=4),Sp(t,e,n,a)}var ss="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[ss]){e[ss]=!0,cd.forEach(function(t){t!=="selectionchange"&&(Vg.has(t)||Qc(t,!1,e),Qc(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ss]||(a[ss]=!0,Qc("selectionchange",!1,a))}}function Sp(e,a,t,n){switch(mh(a)){case 2:var l=zx;break;case 8:l=Ux;break;default:l=du}t=l.bind(null,a,t,e),l=void 0,!Ws||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(a,t,{capture:!0,passive:l}):e.addEventListener(a,t,!0):l!==void 0?e.addEventListener(a,t,{passive:l}):e.addEventListener(a,t,!1)}function Xc(e,a,t,n,l){var o=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var m=n.stateNode.containerInfo;if(m===l)break;if(r===4)for(r=n.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;m!==null;){if(r=xn(m),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){n=o=r;continue e}m=m.parentNode}}n=n.return}Ed(function(){var T=o,D=Js(t),z=[];e:{var A=Fd.get(e);if(A!==void 0){var R=ii,V=e;switch(e){case"keypress":if(li(t)===0)break e;case"keydown":case"keyup":R=T0;break;case"focusin":V="focus",R=nr;break;case"focusout":V="blur",R=nr;break;case"beforeblur":case"afterblur":R=nr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=D0;break;case Xd:case Zd:case Kd:R=g0;break;case Pd:R=M0;break;case"scroll":case"scrollend":R=m0;break;case"wheel":R=U0;break;case"copy":case"cut":case"paste":R=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=jd;break;case"submit":R=R0;break;case"toggle":case"beforetoggle":R=L0}var X=(a&4)!==0,oe=!X&&(e==="scroll"||e==="scrollend"),O=X?A!==null?A+"Capture":null:A;X=[];for(var b=T,w;b!==null;){var M=b;if(w=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||w===null||O===null||(M=kl(b,O),M!=null&&X.push(Oo(b,M,w))),oe)break;b=b.return}0<X.length&&(A=new R(A,V,null,t,D),z.push({event:A,listeners:X}))}}if((a&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",R&&t!==Fs&&(V=t.relatedTarget||t.fromElement)&&(xn(V)||V[Qn]))break e;(A||R)&&(V=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,A?(R=t.relatedTarget||t.toElement,A=T,R=R?xn(R):null,R!==null&&(oe=p(R),X=R.tag,R!==oe||X!==5&&X!==27&&X!==6)&&(R=null)):(A=null,R=T),A!==R&&(X=Od,M="onMouseLeave",O="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(X=jd,M="onPointerLeave",O="onPointerEnter",b="pointer"),oe=A==null?V:Ql(A),w=R==null?V:Ql(R),V=new X(M,b+"leave",A,t,D),V.target=oe,V.relatedTarget=w,M=null,xn(D)===T&&(X=new X(O,b+"enter",R,t,D),X.target=w,X.relatedTarget=oe,M=X),oe=M,X=A&&R?me(A,R,Yg):null,A!==null&&Ap(z,V,A,X,!1),R!==null&&oe!==null&&Ap(z,oe,R,X,!0)))}e:{if(A=T?Ql(T):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var k=Ud;else if(Md(A))if(qd)k=Z0;else{k=k0;var pe=Q0}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Ps(T.elementType)&&(k=Ud):k=X0;if(k&&(k=k(e,T))){zd(z,k,t,D);break e}pe&&pe(e,A,T)}switch(pe=T?Ql(T):window,e){case"focusin":(Md(pe)||pe.contentEditable==="true")&&(Wn=pe,ur=T,Wl=null);break;case"focusout":Wl=ur=Wn=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,Qd(z,t,D);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Qd(z,t,D)}var P;if(or)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else $n?Dd(e,t)&&(W="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(W="onCompositionStart");W&&(wd&&t.locale!=="ko"&&($n||W!=="onCompositionStart"?W==="onCompositionEnd"&&$n&&(P=Sd()):(It=D,er="value"in It?It.value:It.textContent,$n=!0)),pe=rs(T,W),0<pe.length&&(W=new Td(W,e,null,t,D),z.push({event:W,listeners:pe}),P?W.data=P:(P=_d(t),P!==null&&(W.data=P)))),(P=B0?G0(e,t):I0(e,t))&&(W=rs(T,"onBeforeInput"),0<W.length&&(pe=new Td("onBeforeInput","beforeinput",null,t,D),z.push({event:pe,listeners:W}),pe.data=P)),Bg(z,e,T,t,D)}Ep(z,a)})}function Oo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function rs(e,a){for(var t=a+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=kl(e,t),l!=null&&n.unshift(Oo(e,l,o)),l=kl(e,a),l!=null&&n.push(Oo(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Yg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ap(e,a,t,n,l){for(var o=a._reactName,r=[];t!==null&&t!==n;){var m=t,g=m.alternate,T=m.stateNode;if(m=m.tag,g!==null&&g===n)break;m!==5&&m!==26&&m!==27||T===null||(g=T,l?(T=kl(t,o),T!=null&&r.unshift(Oo(t,T,g))):l||(T=kl(t,o),T!=null&&r.push(Oo(t,T,g)))),t=t.return}r.length!==0&&e.push({event:a,listeners:r})}var Qg=/\r\n?/g,kg=/\u0000|\uFFFD/g;function Op(e){return(typeof e=="string"?e:""+e).replace(Qg,`
`).replace(kg,"")}function Tp(e,a){return a=Op(a),Op(e)===a}function Te(e,a,t,n,l,o){switch(t){case"children":if(typeof n=="string")a==="body"||a==="textarea"&&n===""||Pn(e,n);else if(typeof n=="number"||typeof n=="bigint")a!=="body"&&Pn(e,""+n);else return;break;case"className":ai(e,"class",n);break;case"tabIndex":ai(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,t,n);break;case"style":yd(e,n,o);return;case"data":if(a!=="object"){ai(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ti(n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(a!=="input"&&Te(e,a,"name",l.name,l,null),Te(e,a,"formEncType",l.formEncType,l,null),Te(e,a,"formMethod",l.formMethod,l,null),Te(e,a,"formTarget",l.formTarget,l,null)):(Te(e,a,"encType",l.encType,l,null),Te(e,a,"method",l.method,l,null),Te(e,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=ti(n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=tt);return;case"onScroll":n!=null&&ce("scroll",e);return;case"onScrollEnd":n!=null&&ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(u(60));(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=ti(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ce("beforetoggle",e),ce("toggle",e),ei(e,"popover",n);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ei(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=u0.get(t)||t,ei(e,t,n);else return}xe=!0}function Zc(e,a,t,n,l,o){switch(t){case"style":yd(e,n,o);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(u(60));(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof n=="string")Pn(e,n);else if(typeof n=="number"||typeof n=="bigint")Pn(e,""+n);else return;break;case"onScroll":n!=null&&ce("scroll",e);return;case"onScrollEnd":n!=null&&ce("scrollend",e);return;case"onClick":n!=null&&(e.onclick=tt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!ud.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),o=t.slice(2,l?t.length-7:void 0),a=e[fa]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(o,a,l),typeof n=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(o,n,l);break e}xe=!0,t in e?e[t]=n:n===!0?e.setAttribute(t,""):ei(e,t,n)}return}xe=!0}function la(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var n=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var r=t[o];if(r!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Te(e,a,o,r,t,null)}}l&&Te(e,a,"srcSet",t.srcSet,t,null),n&&Te(e,a,"src",t.src,t,null);return;case"input":ce("invalid",e);var m=o=r=l=null,g=null,T=null;for(n in t)if(t.hasOwnProperty(n)){var D=t[n];if(D!=null)switch(n){case"name":l=D;break;case"type":r=D;break;case"checked":g=D;break;case"defaultChecked":T=D;break;case"value":o=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,a));break;default:Te(e,a,n,D,t,null)}}vd(e,o,m,g,T,r,l,!1);return;case"select":ce("invalid",e),n=r=o=null;for(l in t)if(t.hasOwnProperty(l)&&(m=t[l],m!=null))switch(l){case"value":o=m;break;case"defaultValue":r=m;break;case"multiple":n=m;default:Te(e,a,l,m,t,null)}a=o,t=r,e.multiple=!!n,a!=null?Kn(e,!!n,a,!1):t!=null&&Kn(e,!!n,t,!0);return;case"textarea":ce("invalid",e),o=l=n=null;for(r in t)if(t.hasOwnProperty(r)&&(m=t[r],m!=null))switch(r){case"value":n=m;break;case"defaultValue":l=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Te(e,a,r,m,t,null)}xd(e,n,l,o);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(n=t[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Te(e,a,g,n,t,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(n=0;n<Ao.length;n++)ce(Ao[n],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(n=t[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Te(e,a,T,n,t,null)}return;default:if(Ps(a)){for(D in t)t.hasOwnProperty(D)&&(n=t[D],n!==void 0&&Zc(e,a,D,n,t,void 0));return}}for(m in t)t.hasOwnProperty(m)&&(n=t[m],n!=null&&Te(e,a,m,n,t,null))}var Xg={};function Zg(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,r=null,m=null,g=null,T=null,D=null;for(R in t){var z=t[R];if(t.hasOwnProperty(R)&&z!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=z;default:n.hasOwnProperty(R)||Te(e,a,R,null,n,z)}}for(var A in n){var R=n[A];if(z=t[A],n.hasOwnProperty(A)&&(R!=null||z!=null))switch(A){case"type":R!==z&&(xe=!0),o=R;break;case"name":R!==z&&(xe=!0),l=R;break;case"checked":R!==z&&(xe=!0),T=R;break;case"defaultChecked":R!==z&&(xe=!0),D=R;break;case"value":R!==z&&(xe=!0),r=R;break;case"defaultValue":R!==z&&(xe=!0),m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,a));break;default:R!==z&&Te(e,a,A,R,n,z)}}Zs(e,r,m,g,T,D,o,l);return;case"select":R=r=m=A=null;for(o in t)if(g=t[o],t.hasOwnProperty(o)&&g!=null)switch(o){case"value":break;case"multiple":R=g;default:n.hasOwnProperty(o)||Te(e,a,o,null,n,g)}for(l in n)if(o=n[l],g=t[l],n.hasOwnProperty(l)&&(o!=null||g!=null))switch(l){case"value":o!==g&&(xe=!0),A=o;break;case"defaultValue":o!==g&&(xe=!0),m=o;break;case"multiple":o!==g&&(xe=!0),r=o;default:o!==g&&Te(e,a,l,o,n,g)}a=m,t=r,n=R,A!=null?Kn(e,!!t,A,!1):!!n!=!!t&&(a!=null?Kn(e,!!t,a,!0):Kn(e,!!t,t?[]:"",!1));return;case"textarea":R=A=null;for(m in t)if(l=t[m],t.hasOwnProperty(m)&&l!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Te(e,a,m,null,n,l)}for(r in n)if(l=n[r],o=t[r],n.hasOwnProperty(r)&&(l!=null||o!=null))switch(r){case"value":l!==o&&(xe=!0),A=l;break;case"defaultValue":l!==o&&(xe=!0),R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==o&&Te(e,a,r,l,n,o)}gd(e,A,R);return;case"option":for(var V in t)if(A=t[V],t.hasOwnProperty(V)&&A!=null&&!n.hasOwnProperty(V))switch(V){case"selected":e.selected=!1;break;default:Te(e,a,V,null,n,A)}for(g in n)if(A=n[g],R=t[g],n.hasOwnProperty(g)&&A!==R&&(A!=null||R!=null))switch(g){case"selected":A!==R&&(xe=!0),e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Te(e,a,g,A,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in t)A=t[X],t.hasOwnProperty(X)&&A!=null&&!n.hasOwnProperty(X)&&Te(e,a,X,null,n,A);for(T in n)if(A=n[T],R=t[T],n.hasOwnProperty(T)&&A!==R&&(A!=null||R!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,a));break;default:Te(e,a,T,A,n,R)}return;default:if(Ps(a)){for(var oe in t)A=t[oe],t.hasOwnProperty(oe)&&A!==void 0&&!n.hasOwnProperty(oe)&&Zc(e,a,oe,void 0,n,A);for(D in n)A=n[D],R=t[D],!n.hasOwnProperty(D)||A===R||A===void 0&&R===void 0||Zc(e,a,D,A,n,R);return}}for(var O in t)A=t[O],t.hasOwnProperty(O)&&A!=null&&!n.hasOwnProperty(O)&&Te(e,a,O,null,n,A);for(z in n)A=n[z],R=t[z],!n.hasOwnProperty(z)||A===R||A==null&&R==null||Te(e,a,z,A,n,R)}function jp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var l=t[n],o=l.transferSize,r=l.initiatorType,m=l.duration;if(o&&m&&jp(r)){for(r=0,m=l.responseEnd,n+=1;n<t.length;n++){var g=t[n],T=g.startTime;if(T>m)break;var D=g.transferSize,z=g.initiatorType;D&&jp(z)&&(g=g.responseEnd,r+=D*(g<m?1:(m-T)/(g-T)))}if(--n,a+=8*(o+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kc=null,Pc=null;function To(e){return e.nodeType===9?e:e.ownerDocument}function wp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Cp(e,a,t,n){return t=To(t).createElement(e),t[We]=n,t[fa]=a,la(t,e,a),Xe(t),t}function Fc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Pg(){var e=window.event;return e&&e.type==="popstate"?e===Jc?!1:(Jc=e,!0):(Jc=null,!1)}var $c=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,_p=typeof requestAnimationFrame=="function"?requestAnimationFrame:$c,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(e){return Dp.resolve(null).then(e).catch($g)}:$c;function $g(e){setTimeout(function(){throw e})}function rn(e){return e==="head"}function Mp(e,a){var t=a,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(l),_l(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")iu(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,iu(t);for(var o=t.firstChild;o;){var r=o.nextSibling,m=o.nodeName;o[Yl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=r}}else t==="body"&&iu(e.ownerDocument.body);t=l}while(t);_l(a)}function zp(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function Up(e,a,t){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(a=e.getClientRects(),a.length===1)var n=1;else for(var l=n=0;l<a.length;l++){var o=a[l];0<o.width&&0<o.height&&n++}n===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function qp(e,a){e=e.style,a=a.style;var t=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(t=a.display,e.display=t==null||typeof t=="boolean"?"":t,t=a.margin,t!=null?e.margin=t:(t=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function Wg(e,a,t){return t=t.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function Wc(e){var a=e.getBoundingClientRect(),t=getComputedStyle(e);return Wg(a,t,e)}function ex(e){return e.documentElement.clientHeight}function ax(e){this.addEventListener("load",e),this.addEventListener("error",e)}function tx(e,a,t,n,l,o,r,m,g){var T=a.nodeType===9?a:a.ownerDocument;try{var D=T.startViewTransition({update:function(){var A=T.defaultView,R=A.navigation&&A.navigation.transition,V=T.fonts.status;n();var X=[];if(V==="loaded"&&(ex(T),T.fonts.status==="loading"&&X.push(T.fonts.ready)),V=X.length,e!==null)for(var oe=e.suspenseyImages,O=0,b=0;b<oe.length;b++){var w=oe[b];if(!w.complete){var M=w.getBoundingClientRect();if(0<M.bottom&&0<M.right&&M.top<A.innerHeight&&M.left<A.innerWidth){if(O+=nh(w),O>ds){X.length=V;break}w=new Promise(ax.bind(w)),X.push(w)}}}if(0<X.length)return A=Promise.race([Promise.all(X),new Promise(function(k){return setTimeout(k,500)})]).then(l,l),(R?Promise.allSettled([R.finished,A]):A).then(o,o);if(l(),R)return R.finished.then(o,o);o()},types:t});T.__reactViewTransition=D;var z=[];return D.ready.then(function(){for(var A=T.documentElement.getAnimations({subtree:!0}),R=0;R<A.length;R++){var V=A[R],X=V.effect,oe=X.pseudoElement;if(oe!=null&&oe.startsWith("::view-transition")){z.push(V),V=X.getKeyframes();for(var O=oe=void 0,b=!0,w=0;w<V.length;w++){var M=V[w],k=M.width;if(oe===void 0)oe=k;else if(oe!==k){b=!1;break}if(k=M.height,O===void 0)O=k;else if(O!==k){b=!1;break}delete M.width,delete M.height,M.transform==="none"&&delete M.transform}b&&oe!==void 0&&O!==void 0&&(X.setKeyframes(V),b=getComputedStyle(X.target,X.pseudoElement),b.width!==oe||b.height!==O)&&(b=V[0],b.width=oe,b.height=O,b=V[V.length-1],b.width=oe,b.height=O,X.setKeyframes(V))}}r()},function(A){T.__reactViewTransition===D&&(T.__reactViewTransition=null);try{if(typeof A=="object"&&A!==null)switch(A.name){case"InvalidStateError":(A.message==="View transition was skipped because document visibility state is hidden."||A.message==="Skipping view transition because document visibility state has become hidden."||A.message==="Skipping view transition because viewport size changed."||A.message==="Transition was aborted because of invalid state")&&(A=null)}A!==null&&g(A)}finally{n(),l(),r()}}),D.finished.finally(function(){for(var A=0;A<z.length;A++)z[A].cancel();T.__reactViewTransition===D&&(T.__reactViewTransition=null),m()}),D}catch{return n(),l(),r(),null}}function Bn(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}Bn.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:ee({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},Bn.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,t=e.getAnimations({subtree:!0}),n=[],l=0;l<t.length;l++){var o=t[l].effect;o!==null&&o.target===e&&o.pseudoElement===a&&n.push(t[l])}return n},Bn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lp(e){return{name:e,group:new Bn("group",e),imagePair:new Bn("image-pair",e),old:new Bn("old",e),new:new Bn("new",e)}}function Ma(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ma.prototype.addEventListener=function(e,a,t){var n=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(n=t.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(Bp(o,e,a,t)===-1){var r=this,m=a;t!=null&&typeof t!="boolean"&&t.once===!0&&(m=function(g){r.removeEventListener(e,a,t),typeof a=="function"?a.call(this,g):a.handleEvent(g)}),n!==null&&(l=r.removeEventListener.bind(r,e,a,t),n.addEventListener("abort",l,{once:!0}),l=n.removeEventListener.bind(n,"abort",l)),n=Tl(t),o.push({type:e,listener:a,optionsOrUseCapture:t,attachedListener:m,cleanup:l}),h(this._fragmentFiber.child,!1,nx,e,m,n)}this._eventListeners=o}};function nx(e,a,t,n){return B(e).addEventListener(a,t,n),!1}Ma.prototype.removeEventListener=function(e,a,t){var n=this._eventListeners;if(n!==null&&(a=Bp(n,e,a,t),a!==-1)){var l=n[a];t=l.attachedListener;var o=l.cleanup;l=Tl(l.optionsOrUseCapture),h(this._fragmentFiber.child,!1,lx,e,t,l),n.splice(a,1),o!==null&&o()}};function lx(e,a,t,n){return B(e).removeEventListener(a,t,n),!1}function Tl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Bp(e,a,t,n){if(e.length===0)return-1;n=Hp(n);for(var l=0;l<e.length;l++){var o=e[l];if(o.type===a&&o.listener===t&&Hp(o.optionsOrUseCapture)===n)return l}return-1}Ma.prototype.dispatchEvent=function(e){var a=C(this._fragmentFiber);if(a===null)return!0;a=B(a);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var n=a.nodeType===9?a.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var o=t[l];n.addEventListener(o.type,o.attachedListener,Tl(o.optionsOrUseCapture))}if(a.appendChild(n),e=n.dispatchEvent(e),t)for(l=0;l<t.length;l++)o=t[l],n.removeEventListener(o.type,o.attachedListener,Tl(o.optionsOrUseCapture));return a.removeChild(n),e}return a.dispatchEvent(e)},Ma.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Gp,e,void 0,void 0)};function Gp(e,a){return e.tag===6?!1:(e=B(e),vx(e,a))}Ma.prototype.focusLast=function(e){var a=[];h(this._fragmentFiber.child,!0,eu,a,void 0,void 0);for(var t=a.length-1;0<=t&&!Gp(a[t],e);t--);};function eu(e,a){return a.push(e),!1}Ma.prototype.blur=function(){var e=C(this._fragmentFiber);e!==null&&(e=B(e),e=To(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,ox,e,void 0,void 0))};function ox(e,a){return e.tag===6?!1:(e=B(e),e===a||e.contains(a)?(a.blur(),!0):!1)}Ma.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,ix,e,void 0,void 0)};function ix(e,a){return e.tag===6||(e=B(e),a.observe(e)),!1}Ma.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),h(this._fragmentFiber.child,!1,sx,e,void 0,void 0);for(var t=a=0;t<$a.length;t++){var n=$a[t];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):$a[a++]=n}$a.length=a}};function sx(e,a){return e.tag===6||(e=B(e),a.unobserve(e)),!1}var $a=[],au=!1;function rx(e,a,t){$a.push({fragmentInstance:e,observer:a,instance:t}),au||(au=!0,gx(function(){au=!1;var n=$a;$a=[];for(var l=0;l<n.length;l++){var o=n[l];o.observer.unobserve(o.instance)}}))}Ma.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,cx,e,void 0,void 0),e};function cx(e,a){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),a.push.apply(a,t.getClientRects())}else e=B(e),a.push.apply(a,e.getClientRects());return!1}Ma.prototype.getRootNode=function(e){var a=C(this._fragmentFiber);return a===null?this:B(a).getRootNode(e)},Ma.prototype.compareDocumentPosition=function(e){var a=C(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];h(this._fragmentFiber.child,!1,eu,t,void 0,void 0);var n=B(a);if(t.length===0){if(t=n,L(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(t=a)}a=this._fragmentFiber;var l=n=t.compareDocumentPosition(e);return t===e?l=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Q(a)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=B(t).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=B(t[0]),l=B(t[t.length-1]);var o=L(this._fragmentFiber)?a.parentElement:n;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=o.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=a.compareDocumentPosition(e),m=l.compareDocumentPosition(e),g=r&Node.DOCUMENT_POSITION_CONTAINED_BY||m&Node.DOCUMENT_POSITION_CONTAINED_BY;return m=n&&o&&r&Node.DOCUMENT_POSITION_FOLLOWING&&m&Node.DOCUMENT_POSITION_PRECEDING,a=n&&a===e||o&&l===e||g||m?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&a===e||!o&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ux(a,this._fragmentFiber,t[0],t[t.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ux(e,a,t,n,l){var o=xn(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===a||o.alternate===a)){t=!0;break e}o=o.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=l.ownerDocument,l===o||l===o.documentElement||l===o.body;e:{for(o=a,a=C(a);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==a&&o.alternate!==a)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!o)&&!(a=o===t)&&(a=me(t,o,de),a===null?a=!1:(h(a,!0,I,o,t),o=_,_=null,a=o!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!o)&&!(a=o===n)&&(a=me(n,o,de),a===null?a=!1:(h(a,!0,ue,o,n),o=_,G=_=null,a=o!==null)),a):!1}function Ip(e,a){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ma.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(u(566));var a=[];h(this._fragmentFiber.child,!1,eu,a,void 0,void 0);var t=e!==!1;if(a.length===0){var n=Q(this._fragmentFiber);if(n=t?n[1]||n[0]||C(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=B(n),Ip(e,t);return}if(n=B(n),n.nodeType!==9){if(n.nodeType===11){t="host"in n?n.host:null,t!==null&&t.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=t?a.length-1:0;n!==(t?-1:a.length);){var l=a[n];l.tag===6?(l=B(l),Ip(l,t)):B(l).scrollIntoView(e),n+=t?-1:1}};function dx(e,a){return e=B(e),Vp(e,a),!1}function Vp(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function Yp(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];e.addEventListener(l.type,l.attachedListener,Tl(l.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(o){for(var r=0,m=0;m<$a.length;m++){var g=$a[m];(g.fragmentInstance!==a||g.observer!==o||g.instance!==e)&&($a[r++]=g)}$a.length=r,o.observe(e)}),Vp(e,a))}function mx(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];e.removeEventListener(l.type,l.attachedListener,Tl(l.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(o){typeof o.rootMargin=="string"?rx(a,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function tu(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":tu(t),Wo(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function fx(e,a,t,n){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Yl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Va(e.nextSibling),e===null)break}return null}function px(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Va(e.nextSibling),e===null))return null;return e}function Qp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Va(e.nextSibling),e===null))return null;return e}function nu(e){return e.data==="$?"||e.data==="$~"}function lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hx(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Va(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var ou=null;function kp(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Va(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Xp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function vx(e,a){function t(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return n}function gx(e){_p(function(){_p(function(a){return e(a)})})}function Zp(e,a,t){switch(a=To(t),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Kp(e,a,t){for(var n in t){var l=t[n];t.hasOwnProperty(n)&&l!=null&&Te(e,a,n,null,Xg,l)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===tt&&(e.onclick=null),Wo(e)}function iu(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Wo(e)}var Ya=new Map,Pp=new Set;function jo(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var zt=ae.d;ae.d={f:xx,r:bx,D:yx,C:Nx,L:Ex,m:Sx,X:Ox,S:Ax,M:Tx};function xx(){var e=zt.f(),a=ts();return e||a}function bx(e){var a=kn(e);a!==null&&a.tag===5&&a.type==="form"?Fm(a):zt.r(e)}var jl=typeof document>"u"?null:document;function Fp(e,a,t){var n=jl;if(n&&typeof a=="string"&&a){var l=Ua(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Pp.has(l)||(Pp.add(l),e={rel:e,crossOrigin:t,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),la(a,"link",e),Xe(a),n.head.appendChild(a)))}}function yx(e){zt.D(e),Fp("dns-prefetch",e,null)}function Nx(e,a){zt.C(e,a),Fp("preconnect",e,a)}function Ex(e,a,t){zt.L(e,a,t);var n=jl;if(n&&e&&a){var l='link[rel="preload"][as="'+Ua(a)+'"]';a==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Ua(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Ua(t.imageSizes)+'"]')):l+='[href="'+Ua(e)+'"]';var o=l;switch(a){case"style":o=wl(e);break;case"script":o=Rl(e)}if(!(Ya.has(o)||(e=ee({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Ya.set(o,e),n.querySelector(l)!==null||a==="style"&&n.querySelector(wo(o))||a==="script"&&n.querySelector(Ro(o))))){var r=n.createElement("link");la(r,"link",e),a==="style"&&(r[$o]=!0,r.onload=r.onerror=function(){rd(r)}),Xe(r),n.head.appendChild(r)}}}function Sx(e,a){zt.m(e,a);var t=jl;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+Ua(n)+'"][href="'+Ua(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Rl(e)}if(!Ya.has(o)&&(e=ee({rel:"modulepreload",href:e},a),Ya.set(o,e),t.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ro(o)))return}n=t.createElement("link"),la(n,"link",e),Xe(n),t.head.appendChild(n)}}}function Ax(e,a,t){zt.S(e,a,t);var n=jl;if(n&&e){var l=Xn(n).hoistableStyles,o=wl(e);a=a||"default";var r=l.get(o);if(!r){var m={loading:0,preload:null};if(r=n.querySelector(wo(o)))m.loading=5;else{e=ee({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Ya.get(o))&&su(e,t);var g=r=n.createElement("link");Xe(g),la(g,"link",e),g._p=new Promise(function(T,D){g.onload=T,g.onerror=D}),g.addEventListener("load",function(){m.loading|=1}),g.addEventListener("error",function(){m.loading|=2}),m.loading|=4,cs(r,a,n)}r={type:"stylesheet",instance:r,count:1,state:m},l.set(o,r)}}}function Ox(e,a){zt.X(e,a);var t=jl;if(t&&e){var n=Xn(t).hoistableScripts,l=Rl(e),o=n.get(l);o||(o=t.querySelector(Ro(l)),o||(e=ee({src:e,async:!0},a),(a=Ya.get(l))&&ru(e,a),o=t.createElement("script"),Xe(o),la(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Tx(e,a){zt.M(e,a);var t=jl;if(t&&e){var n=Xn(t).hoistableScripts,l=Rl(e),o=n.get(l);o||(o=t.querySelector(Ro(l)),o||(e=ee({src:e,async:!0,type:"module"},a),(a=Ya.get(l))&&ru(e,a),o=t.createElement("script"),Xe(o),la(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function Jp(e,a,t,n){var l=(l=Ht.current)?jo(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=wl(t.href),a=Xn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=wl(t.href);var o=Xn(l).hoistableStyles,r=o.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,r),(o=l.querySelector(wo(e)))?o._p||(r.instance=o,r.state.loading=5):(o=Ya.get(e),o||(o={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ya.set(e,o)),jx(l,e,o,r.state))),a&&n===null)throw Error(u(528,""));return r}if(a&&n!==null)throw Error(u(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(t=Rl(t),a=Xn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function wl(e){return'href="'+Ua(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function $p(e){return ee({},e,{"data-precedence":e.precedence,precedence:null})}function jx(e,a,t,n){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[$o]!==!0){n.loading=1;return}}else a=e.createElement("link"),a[$o]=!0,a.onload=a.onerror=rd.bind(null,a),la(a,"link",t),Xe(a),e.head.appendChild(a);n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2})}function Rl(e){return'[src="'+Ua(e)+'"]'}function Ro(e){return"script[async]"+e}function Wp(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ua(t.href)+'"]');if(n)return a.instance=n,Xe(n),n;var l=ee({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Xe(n),la(n,"style",l),cs(n,t.precedence,e),a.instance=n;case"stylesheet":l=wl(t.href);var o=e.querySelector(wo(l));if(o)return a.state.loading|=4,a.instance=o,Xe(o),o;n=$p(t),(l=Ya.get(l))&&su(n,l),o=(e.ownerDocument||e).createElement("link"),Xe(o);var r=o;return r._p=new Promise(function(m,g){r.onload=m,r.onerror=g}),la(o,"link",n),a.state.loading|=4,cs(o,t.precedence,e),a.instance=o;case"script":return o=Rl(t.src),(l=e.querySelector(Ro(o)))?(a.instance=l,Xe(l),l):(n=t,(l=Ya.get(o))&&(n=ee({},t),ru(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Xe(l),la(l,"link",n),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,cs(n,t.precedence,e));return a.instance}function cs(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,r=0;r<n.length;r++){var m=n[r];if(m.dataset.precedence===a)o=m;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function su(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ru(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var us=null;function eh(e,a,t){if(us===null){var n=new Map,l=us=new Map;l.set(t,n)}else l=us,n=l.get(t),n||(n=new Map,l.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Yl]||o[We]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var r=o.getAttribute(a)||"";r=e+r;var m=n.get(r);m?m.push(o):n.set(r,[o])}}return n}function cu(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function wx(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ah(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nh(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function lh(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=nh(a),e.suspenseyImages.push(a)),e=Dx.bind(e),a.decode().then(e,e))}function Rx(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=wl(n.href),o=a.querySelector(wo(l));if(o){a=o._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Co.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=o,Xe(o);return}o=a.ownerDocument||a,n=$p(n),(l=Ya.get(l))&&su(n,l),o=o.createElement("link"),Xe(o);var r=o;r._p=new Promise(function(m,g){r.onload=m,r.onerror=g}),la(o,"link",n),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Co.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var ds=0;function Cx(e,a){return e.stylesheets&&e.count===0&&fs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+a);0<e.imgBytes&&ds===0&&(ds=62500*Kg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>ds?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function oh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)fs(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function Co(){this.count--,oh(this)}function Dx(){this.imgCount--,oh(this)}var ms=null;function fs(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ms=new Map,a.forEach(_x,e),ms=null,Co.call(e))}function _x(e,a){if(!(a.state.loading&4)){var t=ms.get(e);if(t)var n=t.get(null);else{t=new Map,ms.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var r=l[o];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),n=r)}n&&t.set(null,n)}l=a.instance,r=l.getAttribute("data-precedence"),o=t.get(r)||n,o===n&&t.set(null,l),t.set(r,l),this.count++,n=Co.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var Cl={$$typeof:Ne,Provider:null,Consumer:null,_currentValue:bt,_currentValue2:bt,_threadCount:0};function Mx(e,a,t,n,l,o,r,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.hiddenUpdates=Ys(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.transitionTypes=null,this.incompleteTransitions=new Map}function ih(e,a,t,n,l,o,r,m,g,T,D,z){return e=new Mx(e,a,t,r,g,T,D,z,m),a=1,o===!0&&(a|=24),o=pa(3,null,null,a),e.current=o,o.stateNode=e,a=Ar(),a.refCount++,e.pooledCache=a,a.refCount++,o.memoizedState={element:n,isDehydrated:t,cache:a},wr(o),e}function sh(e){return e?(e=tl,e):tl}function rh(e,a,t,n,l,o){l=sh(l),n.context===null?n.context=l:n.pendingContext=l,n=Pt(a),n.payload={element:t},o=o===void 0?null:o,o!==null&&(n.callback=o),t=Ft(e,n,a),t!==null&&(xa(t,e,a),io(t,e,a))}function ch(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function uu(e,a){ch(e,a),(e=e.alternate)&&ch(e,a)}function uh(e){if(e.tag===13||e.tag===31){var a=En(e,67108864);a!==null&&xa(a,e,67108864),uu(e,67108864)}}function dh(e){if(e.tag===13||e.tag===31){var a=_a();a=Qs(a);var t=En(e,a);t!==null&&xa(t,e,a),uu(e,a)}}var Dl=!0;function zx(e,a,t,n){var l=K.T;K.T=null;var o=ae.p;try{ae.p=2,du(e,a,t,n)}finally{ae.p=o,K.T=l}}function Ux(e,a,t,n){var l=K.T;K.T=null;var o=ae.p;try{ae.p=8,du(e,a,t,n)}finally{ae.p=o,K.T=l}}function du(e,a,t,n){if(Dl){var l=mu(n);if(l===null)Xc(e,a,n,ps,t),fh(e,n);else if(Lx(l,e,a,t,n))n.stopPropagation();else if(fh(e,n),a&4&&-1<qx.indexOf(e)){for(;l!==null;){var o=kn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var r=gn(o.pendingLanes);if(r!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;r;){var g=1<<31-Oa(r);m.entanglements[1]|=g,r&=~g}mt(o),(ye&6)===0&&(Wi=Sa()+500,So(0))}}break;case 31:case 13:m=En(o,2),m!==null&&xa(m,o,2),ts(),uu(o,2)}if(o=mu(n),o===null&&Xc(e,a,n,ps,t),o===l)break;l=o}l!==null&&n.stopPropagation()}else Xc(e,a,n,null,t)}}function mu(e){return e=Js(e),fu(e)}var ps=null;function fu(e){if(ps=null,e=xn(e),e!==null){var a=p(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=x(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ps=e,null}function mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kv()){case Fu:return 2;case Ju:return 8;case Zo:case Pv:return 32;case $u:return 268435456;default:return 32}default:return 32}}var pu=!1,cn=null,un=null,dn=null,Do=new Map,_o=new Map,mn=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fh(e,a){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Do.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(a.pointerId)}}function Mo(e,a,t,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},a!==null&&(a=kn(a),a!==null&&uh(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function Lx(e,a,t,n,l){switch(a){case"focusin":return cn=Mo(cn,e,a,t,n,l),!0;case"dragenter":return un=Mo(un,e,a,t,n,l),!0;case"mouseover":return dn=Mo(dn,e,a,t,n,l),!0;case"pointerover":var o=l.pointerId;return Do.set(o,Mo(Do.get(o)||null,e,a,t,n,l)),!0;case"gotpointercapture":return o=l.pointerId,_o.set(o,Mo(_o.get(o)||null,e,a,t,n,l)),!0}return!1}function ph(e){var a=xn(e.target);if(a!==null){var t=p(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,od(e.priority,function(){dh(t)});return}}else if(a===31){if(a=x(t),a!==null){e.blockedOn=a,od(e.priority,function(){dh(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=mu(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Fs=n,t.target.dispatchEvent(n),Fs=null}else return a=kn(t),a!==null&&uh(a),e.blockedOn=t,!1;a.shift()}return!0}function hh(e,a,t){hs(e)&&t.delete(a)}function Hx(){pu=!1,cn!==null&&hs(cn)&&(cn=null),un!==null&&hs(un)&&(un=null),dn!==null&&hs(dn)&&(dn=null),Do.forEach(hh),_o.forEach(hh)}function vs(e,a){e.blockedOn===a&&(e.blockedOn=null,pu||(pu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Hx)))}var gs=null;function vh(e){gs!==e&&(gs=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){gs===e&&(gs=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],l=e[a+2];if(typeof n!="function"){if(fu(n||t)===null)continue;break}var o=kn(t);o!==null&&(e.splice(a,3),a-=3,Pr(o,{pending:!0,data:l,method:t.method,action:n},n,l))}}))}function _l(e){function a(g){return vs(g,e)}cn!==null&&vs(cn,e),un!==null&&vs(un,e),dn!==null&&vs(dn,e),Do.forEach(a),_o.forEach(a);for(var t=0;t<mn.length;t++){var n=mn[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)ph(t),t.blockedOn===null&&mn.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var l=t[n],o=t[n+1],r=l[fa]||null;if(typeof o=="function")r||vh(t);else if(r){var m=null;if(o&&o.hasAttribute("formAction")){if(l=o,r=o[fa]||null)m=r.formAction;else if(fu(l)!==null)continue}else m=r.action;typeof m=="function"?t[n+1]=m:(t.splice(n,3),n-=3),vh(t)}}}function gh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function hu(e){this._internalRoot=e}xs.prototype.render=hu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var t=a.current,n=_a();rh(t,n,e,a,null,null)},xs.prototype.unmount=hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;rh(e.current,2,null,e,null,null),ts(),a[Qn]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var a=ld();e={blockedOn:null,target:e,priority:a};for(var t=0;t<mn.length&&a!==0&&a<mn[t].priority;t++);mn.splice(t,0,e),t===0&&ph(e)}};var xh=c.version;if(xh!=="19.3.0")throw Error(u(527,xh,"19.3.0"));ae.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=j(a),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Bx={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Gl=bs.inject(Bx),Aa=bs}catch{}}return Uo.createRoot=function(e,a){if(!f(e))throw Error(u(299));var t=!1,n="",l=sf,o=rf,r=cf;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=ih(e,1,!1,null,null,t,n,null,l,o,r,gh),e[Qn]=a.current,kc(e),new hu(a)},Uo.hydrateRoot=function(e,a,t){if(!f(e))throw Error(u(299));var n=!1,l="",o=sf,r=rf,m=cf,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),a=ih(e,1,!0,a,t??null,n,l,g,o,r,m,gh),a.context=sh(null),t=a.current,n=_a(),n=Qs(n),l=Pt(n),l.callback=null,Ft(t,l,n),t=n,a.current.lanes=t,Vl(a,t),mt(a),e[Qn]=a.current,kc(e),new xs(a)},Uo.version="19.3.0",Uo}var wh;function Px(){if(wh)return xu.exports;wh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),xu.exports=Kx(),xu.exports}var Fx=Px();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Fh=/^[\\/]{2}/;function Jx(i,c){return c+i.replace(/\\/g,"/")}var Rh="popstate";function Ch(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function $x(i={}){function c(u,f){var j;let p=(j=f.state)==null?void 0:j.masked,{pathname:v,search:x,hash:y}=p||u.location;return Ru("",{pathname:v,search:x,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default",p?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function d(u,f){return typeof f=="string"?f:zl(f)}return e1(c,d,null,i)}function Ue(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function vt(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Wx(){return Math.random().toString(36).substring(2,10)}function Dh(i,c){return{usr:i.state,key:i.key,idx:c,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function Ru(i,c,d=null,u,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?ql(c):c,state:d,key:c&&c.key||u||Wx(),mask:f}}function zl({pathname:i="/",search:c="",hash:d=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function ql(i){let c={};if(i){let d=i.indexOf("#");d>=0&&(c.hash=i.substring(d),i=i.substring(0,d));let u=i.indexOf("?");u>=0&&(c.search=i.substring(u),i=i.substring(0,u)),i&&(c.pathname=i)}return c}function e1(i,c,d,u={}){let{window:f=document.defaultView,v5Compat:p=!1}=u,v=f.history,x="POP",y=null,j=E();j==null&&(j=0,v.replaceState({...v.state,idx:j},""));function E(){return(v.state||{idx:null}).idx}function h(){x="POP";let B=E(),_=B==null?null:B-j;j=B,y&&y({action:x,location:H.location,delta:_})}function C(B,_){x="PUSH";let G=Ch(B)?B:Ru(H.location,B,_);j=E()+1;let I=Dh(G,j),ue=H.createHref(G.mask||G);try{v.pushState(I,"",ue)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;f.location.assign(ue)}p&&y&&y({action:x,location:H.location,delta:1})}function L(B,_){x="REPLACE";let G=Ch(B)?B:Ru(H.location,B,_);j=E();let I=Dh(G,j),ue=H.createHref(G.mask||G);v.replaceState(I,"",ue),p&&y&&y({action:x,location:H.location,delta:0})}function Q(B){return a1(f,B)}let H={get action(){return x},get location(){return i(f,v)},listen(B){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Rh,h),y=B,()=>{f.removeEventListener(Rh,h),y=null}},createHref(B){return c(f,B)},createURL:Q,encodeLocation(B){let _=Q(B);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:C,replace:L,go(B){return v.go(B)}};return H}function a1(i,c,d=!1){let u="http://localhost";i&&(u=i.location.origin!=="null"?i.location.origin:i.location.href),Ue(u,"No window.location.(origin|href) available to create URL");let f=typeof c=="string"?c:zl(c);return f=f.replace(/ $/,"%20"),!d&&Fh.test(f)&&(f=u+f),new URL(f,u)}function Jh(i,c,d="/"){return t1(i,c,d,!1)}function t1(i,c,d,u,f){let p=typeof c=="string"?ql(c):c,v=qt(p.pathname||"/",d);if(v==null)return null;let x=n1(i),y=null,j=p1(v);for(let E=0;y==null&&E<x.length;++E)y=f1(x[E],j,u);return y}function n1(i){let c=$h(i);return l1(c),c}function $h(i,c=[],d=[],u="",f=!1){let p=(v,x,y=f,j)=>{let E={relativePath:j===void 0?v.path||"":j,caseSensitive:v.caseSensitive===!0,childrenIndex:x,route:v};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(u)&&y)return;Ue(E.relativePath.startsWith(u),`Absolute route path "${E.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(u.length)}let h=Wa([u,E.relativePath]),C=d.concat(E);v.children&&v.children.length>0&&(Ue(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),$h(v.children,c,C,h,y)),!(v.path==null&&!v.index)&&c.push({path:h,score:d1(h,v.index),routesMeta:C.map((L,Q)=>{let[H,B]=av(L.relativePath,L.caseSensitive,Q===C.length-1);return{...L,matcher:H,compiledParams:B}})})};return i.forEach((v,x)=>{var y;if(v.path===""||!((y=v.path)!=null&&y.includes("?")))p(v,x);else for(let j of Wh(v.path))p(v,x,!0,j)}),c}function Wh(i){let c=i.split("/");if(c.length===0)return[];let[d,...u]=c,f=d.endsWith("?"),p=d.replace(/\?$/,"");if(u.length===0)return f?[p,""]:[p];let v=Wh(u.join("/")),x=[];return x.push(...v.map(y=>y===""?p:[p,y].join("/"))),f&&x.push(...v),x.map(y=>i.startsWith("/")&&y===""?"/":y)}function l1(i){i.sort((c,d)=>c.score!==d.score?d.score-c.score:m1(c.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var o1=/^:[\w-]+$/,i1=3,s1=2,r1=1,c1=10,u1=-2,_h=i=>i==="*";function d1(i,c){let d=i.split("/"),u=d.length;return d.some(_h)&&(u+=u1),c&&(u+=s1),d.filter(f=>!_h(f)).reduce((f,p)=>f+(o1.test(p)?i1:p===""?r1:c1),u)}function m1(i,c){return i.length===c.length&&i.slice(0,-1).every((u,f)=>u===c[f])?i[i.length-1]-c[c.length-1]:0}function f1(i,c,d=!1){let{routesMeta:u}=i,f={},p="/",v=[];for(let x=0;x<u.length;++x){let y=u[x],j=x===u.length-1,E=p==="/"?c:c.slice(p.length)||"/",h={path:y.relativePath,caseSensitive:y.caseSensitive,end:j},C=y.matcher&&y.compiledParams?ev(h,E,y.matcher,y.compiledParams):Ss(h,E),L=y.route;if(!C&&j&&d&&!u[u.length-1].route.index&&(C=Ss({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!C)return null;Object.assign(f,C.params),v.push({params:f,pathname:Wa([p,C.pathname]),pathnameBase:g1(Wa([p,C.pathnameBase])),route:L}),C.pathnameBase!=="/"&&(p=Wa([p,C.pathnameBase]))}return v}function Ss(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[d,u]=av(i.path,i.caseSensitive,i.end);return ev(i,c,d,u)}function ev(i,c,d,u){let f=c.match(d);if(!f)return null;let p=f[0],v=Ul(p,1),x=f.slice(1);return{params:u.reduce((j,{paramName:E,isOptional:h},C)=>{if(E==="*"){let Q=x[C]||"";v=Ul(p.slice(0,p.length-Q.length),1)}const L=x[C];return h&&!L?j[E]=void 0:j[E]=(L||"").replace(/%2F/g,"/"),j},{}),pathname:p,pathnameBase:v,pattern:i}}function av(i,c=!1,d=!0){vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,x,y,j,E)=>{if(u.push({paramName:x,isOptional:y!=null}),y){let h=E.charAt(j+v.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),u]}function p1(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function qt(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,u=i.charAt(d);return u&&u!=="/"?null:i.slice(d)||"/"}function h1(i,c="/"){let{pathname:d,search:u="",hash:f=""}=typeof i=="string"?ql(i):i,p;return d?(d=nv(d),d.startsWith("/")||d.startsWith("\\")?p=Mh(d.substring(1),"/"):p=Mh(d,c)):p=c,{pathname:p,search:x1(u),hash:b1(f)}}function Mh(i,c){let d=Ul(c).split("/");return i.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function Eu(i,c,d,u){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function v1(i){return i.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function tv(i){let c=v1(i);return c.map((d,u)=>u===c.length-1?d.pathname:d.pathnameBase)}function Lu(i,c,d,u=!1){let f;typeof i=="string"?f=ql(i):(f={...i},Ue(!f.pathname||!f.pathname.includes("?"),Eu("?","pathname","search",f)),Ue(!f.pathname||!f.pathname.includes("#"),Eu("#","pathname","hash",f)),Ue(!f.search||!f.search.includes("#"),Eu("#","search","hash",f)));let p=i===""||f.pathname==="",v=p?"/":f.pathname,x;if(v==null)x=d;else{let h=c.length-1;if(!u&&v.startsWith("..")){let C=v.split("/");for(;C[0]==="..";)C.shift(),h-=1;f.pathname=C.join("/")}x=h>=0?c[h]:"/"}let y=h1(f,x),j=v&&v!=="/"&&v.endsWith("/"),E=(p||v===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(j||E)&&(y.pathname+="/"),y}var nv=i=>i.replace(/[\\/]{2,}/g,"/"),Wa=i=>nv(i.join("/"));function Ul(i,c=0){let d=i.length;for(;d>c&&i.charCodeAt(d-1)===47;)d--;return d===i.length?i:i.slice(0,d)}var g1=i=>Ul(i).replace(/^\/*/,"/"),x1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,b1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,y1=class{constructor(i,c,d,u=!1){this.status=i,this.statusText=c||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function N1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function E1(i){let c=i.map(d=>d.route.path).filter(Boolean);return Wa(c)||"/"}var lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ov(i,c){let d=i;if(typeof d!="string"||!qu.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,f=!1;if(lv)try{let p=new URL(window.location.href),v=Fh.test(d)?new URL(Jx(d,p.protocol)):new URL(d),x=qt(v.pathname,c);v.origin===p.origin&&x!=null?d=x+v.search+v.hash:f=!0}catch{vt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zh=new URL("http://localhost");function iv(i){if(i.createURL)return i.createURL("/");try{return new URL(i.createHref("/"),zh)}catch{return zh}}function Su(i,c){return i.origin===c.origin&&(i.origin!=="null"||i.protocol===c.protocol&&i.host===c.host)}function S1(i,c){if(i.startsWith("//"))return!0;let d=c.protocol.toLowerCase();return i.toLowerCase().startsWith(d)?c.host===""||i.slice(d.length).startsWith("//"):!1}function sv(i,c,d,u){let f=null;try{f=i==null?null:new URL(i,d)}catch{}let p=new URL(c,d),v=f!=null&&!Su(f,d),x=!Su(p,d);if(u==="reject"){if(v||x)throw new Error("External navigation is not allowed")}else if(x&&(f==null||!S1(i,f)||!Su(f,p)))throw new Error("External navigation is not allowed")}var rv=["POST","PUT","PATCH","DELETE"];new Set(rv);var A1=["GET",...rv];new Set(A1);var O1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function T1(i){try{return O1.includes(new URL(i).protocol)}catch{return!1}}var Ll=N.createContext(null);Ll.displayName="DataRouter";var js=N.createContext(null);js.displayName="DataRouterState";var cv=N.createContext(!1);function j1(){return N.useContext(cv)}var uv=N.createContext({isTransitioning:!1});uv.displayName="ViewTransition";var w1=N.createContext(new Map);w1.displayName="Fetchers";var R1=N.createContext(null);R1.displayName="Await";var ka=N.createContext(null);ka.displayName="Navigation";var Ho=N.createContext(null);Ho.displayName="Location";var gt=N.createContext({outlet:null,matches:[],isDataRoute:!1});gt.displayName="Route";var Hu=N.createContext(null);Hu.displayName="RouteError";var dv="REACT_ROUTER_ERROR",C1="REDIRECT",D1="ROUTE_ERROR_RESPONSE";function _1(i){if(i.startsWith(`${dv}:${C1}:{`))try{let c=JSON.parse(i.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function M1(i){if(i.startsWith(`${dv}:${D1}:{`))try{let c=JSON.parse(i.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new y1(c.status,c.statusText,c.data)}catch{}}function z1(i,{relative:c}={}){Ue(Bo(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=N.useContext(ka),{hash:f,pathname:p,search:v}=Go(i,{relative:c}),x=p;return d!=="/"&&(x=p==="/"?d:Wa([d,p])),u.createHref({pathname:x,search:v,hash:f})}function Bo(){return N.useContext(Ho)!=null}function Lt(){return Ue(Bo(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ho).location}var mv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fv(i){N.useContext(ka).static||N.useLayoutEffect(i)}function U1(){let{isDataRoute:i}=N.useContext(gt);return i?P1():q1()}function q1(){Ue(Bo(),"useNavigate() may be used only in the context of a <Router> component.");let i=N.useContext(Ll),{basename:c,navigator:d}=N.useContext(ka),{matches:u}=N.useContext(gt),{pathname:f}=Lt(),p=JSON.stringify(tv(u)),v=N.useRef(!1);return fv(()=>{v.current=!0}),N.useCallback((y,j={})=>{if(vt(v.current,mv),!v.current)return;if(typeof y=="number"){d.go(y);return}let E=Lu(y,JSON.parse(p),f,j.relative==="path");i==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:Wa([c,E.pathname])),sv(typeof y=="string"?y:zl(y),d.createHref(E),iv(d),"reject"),(j.replace?d.replace:d.push)(E,j.state,j)},[c,d,p,f,i])}N.createContext(null);function L1(){let{matches:i}=N.useContext(gt),c=i[i.length-1];return(c==null?void 0:c.params)??{}}function Go(i,{relative:c}={}){let{matches:d}=N.useContext(gt),{pathname:u}=Lt(),f=JSON.stringify(tv(d));return N.useMemo(()=>Lu(i,JSON.parse(f),u,c==="path"),[i,f,u,c])}function H1(i,c){return pv(i,c)}function pv(i,c,d){var B;Ue(Bo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=N.useContext(ka),{matches:f}=N.useContext(gt),p=f[f.length-1],v=p?p.params:{},x=p?p.pathname:"/",y=p?p.pathnameBase:"/",j=p&&p.route;{let _=j&&j.path||"";vv(x,!j||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let E=Lt(),h;if(c){let _=typeof c=="string"?ql(c):c;Ue(y==="/"||((B=_.pathname)==null?void 0:B.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${_.pathname}" was given in the \`location\` prop.`),h=_}else h=E;let C=h.pathname||"/",L=C;if(y!=="/"){let _=y.replace(/^\//,"").split("/");L="/"+C.replace(/^\//,"").split("/").slice(_.length).join("/")}let Q=d&&d.state.matches.length?d.state.matches.map(_=>Object.assign(_,{route:d.manifest[_.route.id]||_.route})):Jh(i,{pathname:L});vt(j||Q!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),vt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Y1(Q&&Q.map(_=>Object.assign({},_,{params:Object.assign({},v,_.params),pathname:Wa([y,u.encodeLocation?u.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?y:Wa([y,u.encodeLocation?u.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),f,d);return c&&H?N.createElement(Ho.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},H):H}function B1(){let i=K1(),c=N1(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),d=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:p},"ErrorBoundary")," or"," ",N.createElement("code",{style:p},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},c),d?N.createElement("pre",{style:f},d):null,v)}var G1=N.createElement(B1,null),hv=class extends N.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const d=M1(i.digest);d&&(i=d)}let c=i!==void 0?N.createElement(gt.Provider,{value:this.props.routeContext},N.createElement(Hu.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?N.createElement(I1,{error:i},c):c}};hv.contextType=cv;var Au=new WeakMap;function I1({children:i,error:c}){let{basename:d,navigator:u}=N.useContext(ka);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let f=_1(c.digest);if(f){let p=Au.get(c);if(p)throw p;let v=ov(f.location,d),x=v.absoluteURL||v.to;if(sv(f.location,x,iv(u),"allow-explicit"),T1(x))throw new Error("Invalid redirect location");if(lv&&!Au.get(c))if(v.isExternal||f.reloadDocument)window.location.href=x;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(v.to,{replace:f.replace}));throw Au.set(c,y),y}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${x}`})}}return i}function V1({routeContext:i,match:c,children:d}){let u=N.useContext(Ll);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),N.createElement(gt.Provider,{value:i},d)}function Y1(i,c=[],d){let u=d==null?void 0:d.state;if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let f=i,p=u==null?void 0:u.errors;if(p!=null){let E=f.findIndex(h=>h.route.id&&(p==null?void 0:p[h.route.id])!==void 0);Ue(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,E+1))}let v=!1,x=-1;if(d&&u){v=u.renderFallback;for(let E=0;E<f.length;E++){let h=f[E];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(x=E),h.route.id){let{loaderData:C,errors:L}=u,Q=h.route.loader&&!C.hasOwnProperty(h.route.id)&&(!L||L[h.route.id]===void 0);if(h.route.lazy||Q){d.isStatic&&(v=!0),x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}}let y=d==null?void 0:d.onError,j=u&&y?(E,h)=>{var C,L;y(E,{location:u.location,params:((L=(C=u.matches)==null?void 0:C[0])==null?void 0:L.params)??{},pattern:E1(u.matches),errorInfo:h})}:void 0;return f.reduceRight((E,h,C)=>{let L,Q=!1,H=null,B=null;u&&(L=p&&h.route.id?p[h.route.id]:void 0,H=h.route.errorElement||G1,v&&(x<0&&C===0?(vv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,B=null):x===C&&(Q=!0,B=h.route.hydrateFallbackElement||null)));let _=c.concat(f.slice(0,C+1)),G=()=>{let I;return L?I=H:Q?I=B:h.route.Component?I=N.createElement(h.route.Component,null):h.route.element?I=h.route.element:I=E,N.createElement(V1,{match:h,routeContext:{outlet:E,matches:_,isDataRoute:u!=null},children:I})};return u&&(h.route.ErrorBoundary||h.route.errorElement||C===0)?N.createElement(hv,{location:u.location,revalidation:u.revalidation,component:H,error:L,children:G(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:j}):G()},null)}function Bu(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q1(i){let c=N.useContext(Ll);return Ue(c,Bu(i)),c}function k1(i){let c=N.useContext(js);return Ue(c,Bu(i)),c}function X1(i){let c=N.useContext(gt);return Ue(c,Bu(i)),c}function Gu(i){let c=X1(i),d=c.matches[c.matches.length-1];return Ue(d.route.id,`${i} can only be used on routes that contain a unique "id"`),d.route.id}function Z1(){return Gu("useRouteId")}function K1(){var u;let i=N.useContext(Hu),c=k1("useRouteError"),d=Gu("useRouteError");return i!==void 0?i:(u=c.errors)==null?void 0:u[d]}function P1(){let{router:i}=Q1("useNavigate"),c=Gu("useNavigate"),d=N.useRef(!1);return fv(()=>{d.current=!0}),N.useCallback(async(f,p={})=>{vt(d.current,mv),d.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:c,...p}))},[i,c])}var Uh={};function vv(i,c,d){!c&&!Uh[i]&&(Uh[i]=!0,vt(!1,d))}N.memo(F1);function F1({routes:i,manifest:c,future:d,state:u,isStatic:f,onError:p}){return pv(i,void 0,{manifest:c,state:u,isStatic:f,onError:p})}function ba(i){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function J1({basename:i="/",children:c=null,location:d,navigationType:u="POP",navigator:f,static:p=!1,useTransitions:v}){Ue(!Bo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=i.replace(/^\/*/,"/"),y=N.useMemo(()=>({basename:x,navigator:f,static:p,useTransitions:v,future:{}}),[x,f,p,v]);typeof d=="string"&&(d=ql(d));let{pathname:j="/",search:E="",hash:h="",state:C=null,key:L="default",mask:Q}=d,H=N.useMemo(()=>{let B=qt(j,x);return B==null?null:{location:{pathname:B,search:E,hash:h,state:C,key:L,mask:Q},navigationType:u}},[x,j,E,h,C,L,u,Q]);return vt(H!=null,`<Router basename="${x}"> is not able to match the URL "${j}${E}${h}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:N.createElement(ka.Provider,{value:y},N.createElement(Ho.Provider,{children:c,value:H}))}function $1({children:i,location:c}){return H1(Cu(i),c)}function Cu(i,c=[]){let d=[];return N.Children.forEach(i,(u,f)=>{if(!N.isValidElement(u))return;let p=[...c,f];if(u.type===N.Fragment){d.push.apply(d,Cu(u.props.children,p));return}Ue(u.type===ba,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!u.props.index||!u.props.children,"An index route cannot have child routes.");let v={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(v.children=Cu(u.props.children,p)),d.push(v)}),d}var Ns="get",Es="application/x-www-form-urlencoded";function ws(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function W1(i){return ws(i)&&i.tagName.toLowerCase()==="button"}function eb(i){return ws(i)&&i.tagName.toLowerCase()==="form"}function ab(i){return ws(i)&&i.tagName.toLowerCase()==="input"}function tb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function nb(i,c){return i.button===0&&(!c||c==="_self")&&!tb(i)}var ys=null;function lb(){if(ys===null)try{new FormData(document.createElement("form"),0),ys=!1}catch{ys=!0}return ys}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ou(i){return i!=null&&!ob.has(i)?(vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Es}"`),null):i}function ib(i,c){let d,u,f,p,v;if(eb(i)){let x=i.getAttribute("action");u=x?qt(x,c):null,d=i.getAttribute("method")||Ns,f=Ou(i.getAttribute("enctype"))||Es,p=new FormData(i)}else if(W1(i)||ab(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||x.getAttribute("action");if(u=y?qt(y,c):null,d=i.getAttribute("formmethod")||x.getAttribute("method")||Ns,f=Ou(i.getAttribute("formenctype"))||Ou(x.getAttribute("enctype"))||Es,p=new FormData(x,i),!lb()){let{name:j,type:E,value:h}=i;if(E==="image"){let C=j?`${j}.`:"";p.append(`${C}x`,"0"),p.append(`${C}y`,"0")}else j&&p.append(j,h)}}else{if(ws(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ns,u=null,f=Es,v=i}return p&&f==="text/plain"&&(v=p,p=void 0),{action:u,method:d.toLowerCase(),encType:f,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Iu(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function gv(i,c,d,u){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return d?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:c&&qt(f.pathname,c)==="/"?f.pathname=`${Ul(c)}/_root.${u}`:f.pathname=`${Ul(f.pathname)}.${u}`,f}async function sb(i,c){if(i.id in c)return c[i.id];try{let d=await import(i.module);return c[i.id]=d,d}catch(d){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function cb(i,c,d){let u=await Promise.all(i.map(async f=>{let p=c.routes[f.route.id];if(p){let v=await sb(p,d);return v.links?v.links():[]}return[]}));return fb(u.flat(1).filter(rb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function qh(i,c,d,u,f,p){let v=(y,j)=>d[j]?y.route.id!==d[j].route.id:!0,x=(y,j)=>{var E;return d[j].pathname!==y.pathname||((E=d[j].route.path)==null?void 0:E.endsWith("*"))&&d[j].params["*"]!==y.params["*"]};return p==="assets"?c.filter((y,j)=>v(y,j)||x(y,j)):p==="data"?c.filter((y,j)=>{var h;let E=u.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(v(y,j)||x(y,j))return!0;if(y.route.shouldRevalidate){let C=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((h=d[0])==null?void 0:h.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function ub(i,c,{includeHydrateFallback:d}={}){return db(i.map(u=>{let f=c.routes[u.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function db(i){return[...new Set(i)]}function mb(i){let c={},d=Object.keys(i).sort();for(let u of d)c[u]=i[u];return c}function fb(i,c){let d=new Set;return new Set(c),i.reduce((u,f)=>{let p=JSON.stringify(mb(f));return d.has(p)||(d.add(p),u.push({key:p,link:f})),u},[])}function Vu(){let i=N.useContext(Ll);return Iu(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function pb(){let i=N.useContext(js);return Iu(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Yu=N.createContext(void 0);Yu.displayName="FrameworkContext";function Rs(){let i=N.useContext(Yu);return Iu(i,"You must render this element inside a <HydratedRouter> element"),i}function hb(i,c){let d=N.useContext(Yu),[u,f]=N.useState(!1),[p,v]=N.useState(!1),{onFocus:x,onBlur:y,onMouseEnter:j,onMouseLeave:E,onTouchStart:h}=c,C=N.useRef(null);N.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let H=_=>{_.forEach(G=>{v(G.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return C.current&&B.observe(C.current),()=>{B.disconnect()}}},[i]),N.useEffect(()=>{if(u){let H=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(H)}}},[u]);let L=()=>{f(!0)},Q=()=>{f(!1),v(!1)};return d?i!=="intent"?[p,C,{}]:[p,C,{onFocus:qo(x,L),onBlur:qo(y,Q),onMouseEnter:qo(j,L),onMouseLeave:qo(E,Q),onTouchStart:qo(h,L)}]:[!1,C,{}]}function qo(i,c){return d=>{i&&i(d),d.defaultPrevented||c(d)}}function vb({page:i,...c}){let d=j1(),{nonce:u}=Rs(),{router:f}=Vu(),p=N.useMemo(()=>Jh(f.routes,i,f.basename),[f.routes,i,f.basename]);return p?(c.nonce==null&&u&&(c={...c,nonce:u}),d?N.createElement(xb,{page:i,matches:p,...c}):N.createElement(bb,{page:i,matches:p,...c})):null}function gb(i){let{manifest:c,routeModules:d}=Rs(),[u,f]=N.useState([]);return N.useEffect(()=>{let p=!1;return cb(i,c,d).then(v=>{p||f(v)}),()=>{p=!0}},[i,c,d]),u}function xb({page:i,matches:c,...d}){let u=Lt(),{future:f}=Rs(),{basename:p}=Vu(),v=N.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let x=gv(i,p,f.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,j=[];for(let E of c)typeof E.route.shouldRevalidate=="function"?y=!0:j.push(E.route.id);return y&&j.length>0&&x.searchParams.set("_routes",j.join(",")),[x.pathname+x.search]},[p,f.v8_trailingSlashAwareDataRequests,i,u,c]);return N.createElement(N.Fragment,null,v.map(x=>N.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...d})))}function bb({page:i,matches:c,...d}){let u=Lt(),{future:f,manifest:p,routeModules:v}=Rs(),{basename:x}=Vu(),{loaderData:y,matches:j}=pb(),E=N.useMemo(()=>qh(i,c,j,p,u,"data"),[i,c,j,p,u]),h=N.useMemo(()=>qh(i,c,j,p,u,"assets"),[i,c,j,p,u]),C=N.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let H=new Set,B=!1;if(c.forEach(G=>{var ue;let I=p.routes[G.route.id];!I||!I.hasLoader||(!E.some(de=>de.route.id===G.route.id)&&G.route.id in y&&((ue=v[G.route.id])!=null&&ue.shouldRevalidate)||I.hasClientLoader?B=!0:H.add(G.route.id))}),H.size===0)return[];let _=gv(i,x,f.v8_trailingSlashAwareDataRequests,"data");return B&&H.size>0&&_.searchParams.set("_routes",c.filter(G=>H.has(G.route.id)).map(G=>G.route.id).join(",")),[_.pathname+_.search]},[x,f.v8_trailingSlashAwareDataRequests,y,u,p,E,c,i,v]),L=N.useMemo(()=>ub(h,p),[h,p]),Q=gb(h);return N.createElement(N.Fragment,null,C.map(H=>N.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...d})),L.map(H=>N.createElement("link",{key:H,rel:"modulepreload",href:H,...d})),Q.map(({key:H,link:B})=>N.createElement("link",{key:H,nonce:d.nonce,...B,crossOrigin:B.crossOrigin??d.crossOrigin})))}function yb(...i){return c=>{i.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var Nb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nb&&(window.__reactRouterVersion="7.18.4")}catch{}function Eb({basename:i,children:c,useTransitions:d,window:u}){let f=N.useRef();f.current==null&&(f.current=$x({window:u,v5Compat:!0}));let p=f.current,[v,x]=N.useState({action:p.action,location:p.location}),y=N.useCallback(j=>{d===!1?x(j):N.startTransition(()=>x(j))},[d]);return N.useLayoutEffect(()=>p.listen(y),[p,y]),N.createElement(J1,{basename:i,children:c,location:v.location,navigationType:v.action,navigator:p,useTransitions:d})}var ht=N.forwardRef(function({onClick:c,discover:d="render",prefetch:u="none",relative:f,reloadDocument:p,replace:v,mask:x,state:y,target:j,to:E,preventScrollReset:h,viewTransition:C,defaultShouldRevalidate:L,...Q},H){let{basename:B,navigator:_,useTransitions:G}=N.useContext(ka),I=typeof E=="string"&&qu.test(E),ue=ov(E,B);E=ue.to;let de=z1(E,{relative:f}),me=Lt(),ee=null;if(x){let Ne=Lu(x,[],me.mask?me.mask.pathname:"/",!0);B!=="/"&&(Ne.pathname=Ne.pathname==="/"?B:Wa([B,Ne.pathname])),ee=_.createHref(Ne)}let[$,Ye,ke]=hb(u,Q),ia=Tb(E,{replace:v,mask:x,state:y,target:j,preventScrollReset:h,relative:f,viewTransition:C,defaultShouldRevalidate:L,useTransitions:G});function Je(Ne){c&&c(Ne),Ne.defaultPrevented||ia(Ne)}let Ea=!(ue.isExternal||p),za=N.createElement("a",{...Q,...ke,href:(Ea?ee:void 0)||ue.absoluteURL||de,onClick:Ea?Je:c,ref:yb(H,Ye),target:j,"data-discover":!I&&d==="render"?"true":void 0});return $&&!I?N.createElement(N.Fragment,null,za,N.createElement(vb,{page:de})):za});ht.displayName="Link";var Sb=N.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:u="",end:f=!1,style:p,to:v,viewTransition:x,children:y,...j},E){let h=Go(v,{relative:j.relative}),C=Lt(),L=N.useContext(js),{navigator:Q,basename:H}=N.useContext(ka),B=L!=null&&Db(h)&&x===!0,_=Q.encodeLocation?Q.encodeLocation(h).pathname:h.pathname,G=C.pathname,I=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;d||(G=G.toLowerCase(),I=I?I.toLowerCase():null,_=_.toLowerCase()),I&&H&&(I=qt(I,H)||I);const ue=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let de=G===_||!f&&G.startsWith(_)&&G.charAt(ue)==="/",me=I!=null&&(I===_||!f&&I.startsWith(_)&&I.charAt(_.length)==="/"),ee={isActive:de,isPending:me,isTransitioning:B},$=de?c:void 0,Ye;typeof u=="function"?Ye=u(ee):Ye=[u,de?"active":null,me?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ke=typeof p=="function"?p(ee):p;return N.createElement(ht,{...j,"aria-current":$,className:Ye,ref:E,style:ke,to:v,viewTransition:x},typeof y=="function"?y(ee):y)});Sb.displayName="NavLink";var Ab=N.forwardRef(({discover:i="render",fetcherKey:c,navigate:d,reloadDocument:u,replace:f,state:p,method:v=Ns,action:x,onSubmit:y,relative:j,preventScrollReset:E,viewTransition:h,defaultShouldRevalidate:C,...L},Q)=>{let{useTransitions:H}=N.useContext(ka),B=Rb(),_=Cb(x,{relative:j}),G=v.toLowerCase()==="get"?"get":"post",I=typeof x=="string"&&qu.test(x),ue=de=>{if(y&&y(de),de.defaultPrevented)return;de.preventDefault();let me=de.nativeEvent.submitter,ee=(me==null?void 0:me.getAttribute("formmethod"))||v,$=()=>B(me||de.currentTarget,{fetcherKey:c,method:ee,navigate:d,replace:f,state:p,relative:j,preventScrollReset:E,viewTransition:h,defaultShouldRevalidate:C});H&&d!==!1?N.startTransition(()=>$()):$()};return N.createElement("form",{ref:Q,method:G,action:_,onSubmit:u?y:ue,...L,"data-discover":!I&&i==="render"?"true":void 0})});Ab.displayName="Form";function Ob(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xv(i){let c=N.useContext(Ll);return Ue(c,Ob(i)),c}function Tb(i,{target:c,replace:d,mask:u,state:f,preventScrollReset:p,relative:v,viewTransition:x,defaultShouldRevalidate:y,useTransitions:j}={}){let E=U1(),h=Lt(),C=Go(i,{relative:v});return N.useCallback(L=>{if(nb(L,c)){L.preventDefault();let Q=d!==void 0?d:zl(h)===zl(C),H=()=>E(i,{replace:Q,mask:u,state:f,preventScrollReset:p,relative:v,viewTransition:x,defaultShouldRevalidate:y});j?N.startTransition(()=>H()):H()}},[h,E,C,d,u,f,c,i,p,v,x,y,j])}var jb=0,wb=()=>`__${String(++jb)}__`;function Rb(){let{router:i}=xv("useSubmit"),{basename:c}=N.useContext(ka),d=Z1(),u=i.fetch,f=i.navigate;return N.useCallback(async(p,v={})=>{let{action:x,method:y,encType:j,formData:E,body:h}=ib(p,c);if(v.navigate===!1){let C=v.fetcherKey||wb();await u(C,d,v.action||x,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:h,formMethod:v.method||y,formEncType:v.encType||j,flushSync:v.flushSync})}else await f(v.action||x,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:E,body:h,formMethod:v.method||y,formEncType:v.encType||j,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[u,f,c,d])}function Cb(i,{relative:c}={}){let{basename:d}=N.useContext(ka),u=N.useContext(gt);Ue(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),p={...Go(i||".",{relative:c})},v=Lt();if(i==null){p.search=v.search;let x=new URLSearchParams(p.search),y=x.getAll("index");if(y.some(E=>E==="")){x.delete("index"),y.filter(h=>h).forEach(h=>x.append("index",h));let E=x.toString();p.search=E?`?${E}`:""}}return(!i||i===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Wa([d,p.pathname])),zl(p)}function Db(i,{relative:c}={}){let d=N.useContext(uv);Ue(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=xv("useViewTransitionState"),f=Go(i,{relative:c});if(!d.isTransitioning)return!1;let p=qt(d.currentLocation.pathname,u)||d.currentLocation.pathname,v=qt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return Ss(f.pathname,v)!=null||Ss(f.pathname,p)!=null}const _b={sm:"w-[92px]",md:"w-[150px]",lg:"w-[200px]",xl:"w-[260px]"},hn=({size:i="md",className:c="",glow:d=!0})=>s.jsxs("span",{id:"vm-midias-logo",className:`relative inline-flex shrink-0 items-center justify-center select-none ${c}`,children:[d&&s.jsx("span",{className:"absolute inset-[24%] -z-10 bg-[#f40b36]/18 blur-xl","aria-hidden":"true"}),s.jsx("img",{src:"/images/logo-VMmidias.png",alt:"VM MÍDIAS",className:`${_b[i]} h-auto object-contain transition-transform duration-300 hover:scale-[1.02]`,loading:"eager",decoding:"async"})]});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zb=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,d,u)=>u?u.toUpperCase():d.toLowerCase()),Lh=i=>{const c=zb(i);return c.charAt(0).toUpperCase()+c.slice(1)},bv=(...i)=>i.filter((c,d,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===d).join(" ").trim(),Ub=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=N.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:f="",children:p,iconNode:v,...x},y)=>N.createElement("svg",{ref:y,...qb,width:c,height:c,stroke:i,strokeWidth:u?Number(d)*24/Number(c):d,className:bv("lucide",f),...!p&&!Ub(x)&&{"aria-hidden":"true"},...x},[...v.map(([j,E])=>N.createElement(j,E)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(i,c)=>{const d=N.forwardRef(({className:u,...f},p)=>N.createElement(Lb,{ref:p,iconNode:c,className:bv(`lucide-${Mb(Lh(i))}`,`lucide-${i}`,u),...f}));return d.displayName=Lh(i),d};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Io=ne("arrow-left",Hb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pt=ne("arrow-right",Bb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Hh=ne("arrow-up-right",Gb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Vb=ne("arrow-up",Ib);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Hl=ne("building-2",Yb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],kb=ne("calendar-check",Qb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Cs=ne("check",Xb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Kb=ne("chevron-down",Zb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Fb=ne("chevron-left",Pb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],yv=ne("chevron-right",Jb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Bh=ne("circle-alert",$b);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ey=ne("circle-check",Wb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],Nv=ne("clipboard",ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ev=ne("clock-3",ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],ly=ne("cloud-upload",ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],iy=ne("coins",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ry=ne("download",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],uy=ne("external-link",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],my=ne("file-image",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],py=ne("file",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],vy=ne("globe",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],xy=ne("headphones",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],yy=ne("image-off",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ey=ne("image",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ay=ne("instagram",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Qa=ne("loader-circle",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],Gh=ne("lock-keyhole",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Sv=ne("log-out",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ih=ne("mail",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qu=ne("map-pin",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Dy=ne("menu",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Av=ne("newspaper",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],zy=ne("palette",My);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],qy=ne("pencil",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Hy=ne("plus",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ov=ne("refresh-cw",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Iy=ne("repeat",Gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Tv=ne("search",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Qy=ne("send",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jv=ne("shield-check",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Zy=ne("sparkles",Xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Py=ne("star",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],wv=ne("trash-2",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],$y=ne("video",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ds=ne("x",Wy),_e={company:{name:"VM MÍDIAS",legalName:"VM MÍDIAS Publicidade e Painéis Digitais",tagline:"SUA MARCA EM DESTAQUE.",locationShort:"Capela do Alto — SP",domain:"www.vmmidias.com.br",whatsappRaw:"551531650153",whatsappFormatted:"(15) 3165-0153",email:"fredericolopescorrea@hotmail.com",instagramUrl:"https://www.instagram.com/vmmidiasindoor",heroVideoUrl:"/videos/Apresentacao-VMmidias.mp4"},plans:[{id:"start",name:"START",type:"MÍDIA INDOOR",coverage:"Divulgação em 05 locais",badge:null,prices:{mensal:{price:"179,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"159,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"139,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 05 pontos estratégicos","Exibição contínua durante todo o horário comercial","Alta frequência de repetições diárias","Criação de arte estática inclusa sem custo adicional","Suporte e atendimento direto em Capela do Alto"]},{id:"destaque",name:"DESTAQUE",type:"MÍDIA INDOOR",coverage:"Divulgação em 09 locais + 01 adicional",badge:"MAIS ESCOLHIDO",prices:{mensal:{price:"259,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"237,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"217,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 09 locais + 01 ponto adicional grátis","Maior presença e frequência em toda a rede","Prioridade em pontos de altíssimo fluxo","Criação de arte inclusa sem custo adicional","Relatórios de inserções e atendimento prioritário"]}],supporters:[{id:"esquina-do-salgado",name:"Esquina do Salgado",logoUrl:"/images/apoiadores/esquina-do-salgado.png"},{id:"espetinho-do-vg",name:"Espetinho do VG",logoUrl:"/images/apoiadores/espetinho-do-vg.png"},{id:"boteco-do-gordao",name:"Boteco do Gordão",logoUrl:"/images/apoiadores/boteco-do-gordao.png"},{id:"mg-sampaio-iperozinho",name:"MG Sampaio Iperózinho",logoUrl:"/images/apoiadores/mg-sampaio.jpg"},{id:"mg-sampaio-culaus",name:"MG Sampaio Culaus",logoUrl:"/images/apoiadores/mg-sampaio.jpg"}],howItWorksSteps:[{step:"01",title:"ESCOLHA SEU PLANO",description:"Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual."},{step:"02",title:"ENVIE SUAS INFORMAÇÕES",description:"Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal."},{step:"03",title:"CRIAMOS SUA CAMPANHA",description:"Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas."},{step:"04",title:"SUA MARCA ENTRA NO AR",description:"Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto."}],whyAdvertise:[{id:"presenca-diaria",title:"PRESENÇA DIÁRIA",description:"Sua marca presente constantemente durante todo o expediente dos melhores estabelecimentos da cidade.",iconName:"CalendarCheck"},{id:"pontos-estrategicos",title:"PONTOS ESTRATÉGICOS",description:"Publicidade instalada exatamente onde as pessoas de Capela do Alto realmente compram e circulam.",iconName:"MapPin"},{id:"alta-frequencia",title:"ALTA FREQUÊNCIA",description:"A repetição diária gera familiaridade. Quem vê todos os dias lembra na hora de comprar.",iconName:"Repeat"},{id:"preco-acessivel",title:"PREÇO ACESSÍVEL",description:"Planos a partir de R$ 139/mês, pensados sob medida para o orçamento do comércio e serviços locais.",iconName:"Coins"},{id:"criacao-facilitada",title:"CRIAÇÃO FACILITADA",description:"Você não precisa ser designer. Nós ajudamos sua empresa a colocar sua campanha no ar com padrão profissional.",iconName:"Palette"},{id:"atendimento-local",title:"ATENDIMENTO LOCAL",description:"Suporte próximo, ágil e humanizado em Capela do Alto, com quem conhece o mercado da nossa região.",iconName:"Headphones"}],faqs:[{question:"O que é mídia indoor?",answer:"Mídia Indoor (também conhecida como DOOH - Digital Out of Home) é a veiculação de anúncios em telas digitais de alta resolução instaladas dentro de estabelecimentos comerciais estratégicos onde há fluxo contínuo de pessoas e tempo de permanência."},{question:"Onde meu anúncio será exibido?",answer:"Sua marca será exibida em telas digitais instaladas nos principais pontos de circulação de Capela do Alto — como supermercados, restaurantes, padarias, lotéricas, academias e comércios parceiros da nossa rede."},{question:"Como envio minha arte?",answer:"Basta nos enviar pelo WhatsApp ou e-mail o seu logotipo (em alta resolução), imagens dos seus produtos/serviços e as informações de contato que deseja destacar. É simples e rápido."},{question:"A VM MÍDIAS cria o anúncio?",answer:"Sim! A criação da arte estática para veiculação nas telas já está inclusa no seu plano, sem cobrança adicional. Caso você queira um vídeo animado em movimento para chamar ainda mais atenção, oferecemos o serviço opcional de animação."},{question:"Quanto tempo demora para minha campanha entrar no ar?",answer:"Após a aprovação da sua arte ou recebimento do seu material finalizado, a campanha entra no ar na nossa rede de telas em até 48 horas úteis."},{question:"Posso alterar minha campanha durante o contrato?",answer:"Sim! Você pode atualizar sua arte ou oferta para divulgar datas comemorativas, promoções especiais ou lançamentos de produtos conforme as condições do seu plano contratado."},{question:"Qual é a diferença entre START e DESTAQUE?",answer:"O Plano START veicula sua marca em 05 locais estratégicos da rede. O Plano DESTAQUE é o mais escolhido: oferece divulgação em 09 locais mais 01 ponto adicional bonificado (total de 10 locais), proporcionando o dobro de cobertura na cidade."},{question:"Como funciona o plano mensal?",answer:"No plano mensal você tem total flexibilidade: renova mês a mês sem fidelidade. Já nos planos semestral (6 meses) e anual (12 meses), você garante descontos progressivos expressivos e a melhor relação custo-benefício por mês."},{question:"Posso contratar mais pontos?",answer:"Com certeza! Conforme a rede de telas da VM MÍDIAS expande em novos bairros e estabelecimentos de Capela do Alto, você pode ampliar sua presença para novos pontos estratégicos adicionais."},{question:"Como faço para anunciar?",answer:"Basta clicar em qualquer botão de contato ou no botão flutuante de WhatsApp do site, escolher seu plano e falar diretamente com nossa equipe. Nós cuidamos de todo o processo para colocar sua marca em destaque rapidamente!"}]},pn=({title:i,...c})=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":i?void 0:!0,role:i?"img":void 0,...c,children:[i&&s.jsx("title",{children:i}),s.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.297.297-.495.1-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.438-9.886 9.893-9.886a9.821 9.821 0 017.021 2.91 9.825 9.825 0 012.9 7.027c-.003 5.45-4.439 9.887-9.93 9.887m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.449h.005c6.559 0 11.895-5.336 11.898-11.893a11.821 11.821 0 00-3.49-8.414Z"})]}),e2=()=>{const[i,c]=N.useState(!1),[d,u]=N.useState("inicio");N.useEffect(()=>{if(!i)return;const v=document.body.style.overflow;document.body.style.overflow="hidden";const x=j=>{j.key==="Escape"&&c(!1)},y=()=>{window.innerWidth>=1024&&c(!1)};return window.addEventListener("keydown",x),window.addEventListener("resize",y),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",x),window.removeEventListener("resize",y)}},[i]),N.useEffect(()=>{const x=["inicio","onde-estamos","como-funciona","planos","contato"].map(j=>document.getElementById(j)).filter(j=>!!j),y=new IntersectionObserver(j=>{const E=j.filter(h=>h.isIntersecting).sort((h,C)=>C.intersectionRatio-h.intersectionRatio)[0];E&&u(E.target.id)},{rootMargin:"-18% 0px -62% 0px",threshold:[0,.15,.35]});return x.forEach(j=>y.observe(j)),()=>y.disconnect()},[]);const f=[{label:"Início",href:"#inicio"},{label:"Onde Estamos",href:"#onde-estamos"},{label:"Como Funciona",href:"#como-funciona"},{label:"Planos",href:"#planos"},{label:"Contato",href:"#contato"}],p=()=>{c(!1)};return s.jsxs(s.Fragment,{children:[s.jsx("header",{id:"main-header",className:"fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/10 bg-[#030406]/96 shadow-2xl shadow-black/40 backdrop-blur-xl lg:h-[84px]",children:s.jsx("div",{className:"mx-auto h-full max-w-[1500px] px-4 sm:px-8 lg:px-12",children:s.jsxs("div",{className:"flex h-full items-center justify-between",children:[s.jsx("a",{href:"#inicio",className:"flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D] rounded-md","aria-label":"VM MÍDIAS - Ir para o início",children:s.jsx(hn,{size:"sm"})}),s.jsx("nav",{id:"desktop-navigation",className:"hidden lg:flex items-center space-x-7","aria-label":"Navegação Principal",children:f.map(v=>s.jsxs("a",{href:v.href,"aria-current":d===v.href.slice(1)?"page":void 0,className:`text-[13px] font-bold transition-colors relative py-2 group focus:outline-none focus-visible:text-white ${d===v.href.slice(1)?"text-white":"text-[#94979f] hover:text-white"}`,children:[v.label,s.jsx("span",{className:`absolute bottom-0 left-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full ${d===v.href.slice(1)?"w-full":"w-0"}`})]},v.href))}),s.jsx("div",{className:"hidden lg:flex items-center gap-4",children:s.jsxs("a",{id:"header-cta-button",href:"#contato",className:"group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#f40b36] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d90a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[s.jsx("span",{children:"ANUNCIE AGORA"}),s.jsx(pt,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})}),s.jsxs("div",{className:"flex lg:hidden items-center gap-3",children:[s.jsxs("a",{href:"#contato",onClick:p,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8032D] text-white text-xs font-bold uppercase tracking-wider",children:[s.jsx("span",{children:"Anuncie"}),s.jsx(pt,{className:"w-3.5 h-3.5"})]}),s.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>c(!i),className:"p-2 rounded-lg bg-[#15151B] border border-[#22222E] text-white hover:text-[#F8032D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":i,"aria-controls":"mobile-navigation-drawer","aria-label":i?"Fechar menu de navegação":"Abrir menu de navegação",children:i?s.jsx(Ds,{className:"w-6 h-6"}):s.jsx(Dy,{className:"w-6 h-6"})})]})]})})}),i&&s.jsx("div",{id:"mobile-navigation-drawer",className:"fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto bg-[#050609] lg:hidden",children:s.jsxs("div",{className:"flex min-h-full flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-8",children:[s.jsx("div",{className:"mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38",children:"Navegação"}),s.jsx("nav",{"aria-label":"Navegação móvel",className:"border-t border-white/10",children:f.map((v,x)=>s.jsxs("a",{href:v.href,onClick:p,"aria-current":d===v.href.slice(1)?"page":void 0,className:`group flex min-h-14 items-center gap-4 border-b border-white/10 px-1 text-base font-bold transition-colors ${d===v.href.slice(1)?"text-white":"text-white/65 hover:text-white"}`,children:[s.jsx("span",{className:`text-[10px] tabular-nums ${d===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`,children:String(x+1).padStart(2,"0")}),s.jsx("span",{className:"flex-1",children:v.label}),s.jsx(pt,{className:`h-4 w-4 transition-transform group-hover:translate-x-1 ${d===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`})]},v.href))}),s.jsxs("div",{className:"mt-auto flex flex-col gap-3 border-t border-white/10 pt-5",children:[s.jsxs("a",{href:"#contato",onClick:p,className:"flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-[#F8032D] py-3 text-sm font-black text-white",children:[s.jsx("span",{children:"ANUNCIE AGORA"}),s.jsx(pt,{className:"w-4 h-4"})]}),s.jsxs("a",{href:`https://wa.me/${_e.company.whatsappRaw}?text=${encodeURIComponent("Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.")}`,target:"_blank",rel:"noopener noreferrer",onClick:p,className:"flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] py-2.5 text-sm font-bold text-white",children:[s.jsx(pn,{className:"w-4 h-4 text-emerald-400"}),s.jsx("span",{children:"Falar pelo WhatsApp"})]})]})]})})]})},Vo=({children:i,align:c="left",className:d=""})=>s.jsxs("div",{className:`brand-eyebrow ${c==="center"?"justify-center":""} ${d}`,children:[s.jsx("span",{className:"brand-eyebrow-line","aria-hidden":"true"}),s.jsx("span",{children:i})]}),_s=({eyebrow:i,title:c,accent:d,description:u,align:f="center",className:p=""})=>s.jsxs("div",{className:`${f==="center"?"text-center mx-auto":"text-left"} max-w-4xl ${p}`,children:[s.jsx(Vo,{align:f,children:i}),s.jsxs("h2",{className:"brand-section-title",children:[c," ",s.jsx("span",{className:"text-[#ff143f] text-led-glow",children:d})]}),u&&s.jsx("p",{className:"brand-section-copy",children:u})]}),As=({href:i,children:c,variant:d="primary",id:u,className:f=""})=>s.jsxs("a",{id:u,href:i,className:`group brand-button ${d==="outline"?"brand-button-outline":"brand-button-primary"} ${f}`,children:[s.jsx("span",{children:c}),s.jsx(pt,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]}),a2=({src:i,poster:c})=>s.jsx("div",{className:"relative aspect-video w-full overflow-hidden border border-white/20 bg-[#08090c] shadow-[0_24px_70px_rgba(0,0,0,0.5)]",children:s.jsx("video",{className:"h-full w-full object-cover",controls:!0,playsInline:!0,preload:"metadata",poster:c,"aria-label":"Conheça a VM Mídias",children:s.jsx("source",{src:i,type:"video/mp4"})})}),t2=()=>s.jsxs("section",{id:"inicio",className:"relative min-h-[100svh] overflow-hidden bg-black lg:h-[100svh]",children:[s.jsx("div",{className:"absolute inset-0 bg-hero-city hero-photo-motion","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen","aria-hidden":"true"}),s.jsx("div",{className:"relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-5 pb-10 pt-[104px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-6 lg:pt-[96px]",children:s.jsxs("div",{className:"grid w-full items-center gap-7 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-6",children:[s.jsxs("div",{className:"order-1 lg:col-span-7 lg:row-start-1 lg:self-end",children:[s.jsx(Vo,{children:"VM Mídias · Capela do Alto"}),s.jsxs("h1",{className:"max-w-[820px] text-[clamp(2.8rem,12vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-white lg:text-[clamp(4rem,5.5vw,6.2rem)]",children:["Seu negócio já é bom",s.jsx("span",{className:"mt-3 block text-[#ff143f] text-led-glow",children:"Agora ele precisa aparecer."})]})]}),s.jsx("div",{className:"order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1",children:s.jsx(a2,{src:_e.company.heroVideoUrl,poster:"/images/generated/vm-indoor-space.webp"})}),s.jsxs("div",{className:"order-3 lg:col-span-7 lg:row-start-2 lg:self-start",children:[s.jsx("p",{className:"max-w-2xl text-base leading-relaxed text-[#d0d1d6] sm:text-xl lg:text-lg xl:text-xl",children:"Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida."}),s.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[s.jsx(As,{id:"hero-primary-cta",href:"#contato",children:"Colocar minha marca em destaque"}),s.jsx(As,{id:"hero-secondary-cta",href:"#planos",variant:"outline",children:"Conhecer os planos"})]})]})]})})]}),n2=({supporter:i})=>{const[c,d]=N.useState(!1),u=i.name.split(" ").filter(Boolean).slice(0,2).map(f=>f[0]).join("");return s.jsx("div",{className:"flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-black/35 p-6 sm:p-8",children:c?s.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full border border-[#f40b36]/45 bg-[#f40b36]/10 text-2xl font-black tracking-tight text-white","aria-hidden":"true",children:u}):s.jsx("img",{src:i.logoUrl,alt:`Logo ${i.name}`,className:"h-full max-h-28 w-full object-contain",onError:()=>d(!0)})})},l2=()=>s.jsxs("section",{id:"onde-estamos",className:"relative overflow-hidden border-b border-white/10 bg-[#06070a] py-24 lg:py-32",children:[s.jsx("div",{className:"absolute inset-0 bg-indoor-space bg-cover bg-center opacity-[0.08]","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/95 to-[#06070a]","aria-hidden":"true"}),s.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[s.jsxs("div",{className:"mb-12 max-w-5xl",children:[s.jsx(Vo,{children:"Rede de apoiadores"}),s.jsxs("h2",{className:"brand-section-title",children:["Comércios que já estão com a"," ",s.jsx("span",{className:"text-[#f40b36]",children:"VM Mídias."})]}),s.jsx("p",{className:"brand-section-copy max-w-3xl",children:"Empresas locais que apoiam a nossa rede e fortalecem a mídia indoor em Capela do Alto."})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5",children:_e.supporters.map(i=>s.jsxs("article",{className:"overflow-hidden border border-white/10 bg-[#0b0d10]/90",children:[s.jsx(n2,{supporter:i}),s.jsxs("div",{className:"min-h-28 p-4 sm:p-5",children:[s.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.18em] text-[#f40b36] sm:text-[10px]",children:"Apoiador VM Mídias"}),s.jsx("h3",{className:"mt-2 text-sm font-black leading-snug text-white sm:text-base",children:i.name})]})]},i.id))})]})]}),o2=()=>s.jsx("section",{id:"como-funciona",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:s.jsxs("div",{className:"mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12",children:[s.jsx("div",{className:"lg:col-span-5",children:s.jsxs("div",{className:"lg:sticky lg:top-32",children:[s.jsx(_s,{eyebrow:"Do planejamento ao resultado",title:"Como",accent:"funciona",description:"Simples, rápido e sem burocracia.",align:"left"}),s.jsx("div",{className:"mt-8",children:s.jsx(As,{href:"#contato",children:"Começar agora"})})]})}),s.jsxs("div",{className:"relative lg:col-span-7 lg:pl-12",children:[s.jsx("div",{className:"absolute bottom-8 left-[19px] top-8 w-px bg-white/12 lg:left-[67px]","aria-hidden":"true"}),s.jsx("div",{className:"space-y-0",children:_e.howItWorksSteps.map((i,c)=>s.jsxs("article",{className:"group relative grid grid-cols-[40px_1fr] gap-5 border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:grid-cols-[56px_1fr] lg:gap-8 lg:py-11",children:[s.jsx("div",{className:"relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#030406] text-xs font-black text-white transition-colors group-hover:border-[#f40b36] group-hover:text-[#f40b36] lg:h-14 lg:w-14",children:String(c+1).padStart(2,"0")}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:i.title}),s.jsx("p",{className:"mt-3 text-sm font-semibold text-white/75",children:i.description})]})]},i.step))})]})]})}),Vh=[{id:"mensal",label:"Mensal",shortLabel:"Mensal"},{id:"semestral",label:"Semestral",shortLabel:"6 meses"},{id:"anual",label:"Anual",shortLabel:"12 meses"}],i2=({onSelectPlan:i})=>{const[c,d]=N.useState("anual"),u=p=>{var v;i==null||i(p.name,c),(v=document.getElementById("contato"))==null||v.scrollIntoView({behavior:"smooth"})},f=p=>{var y;const v=(y=Vh.find(j=>j.id===c))==null?void 0:y.label,x=`Olá! Tenho interesse no Plano ${p.name}, período ${v}. Gostaria de receber mais informações.`;return`https://wa.me/${_e.company.whatsappRaw}?text=${encodeURIComponent(x)}`};return s.jsx("section",{id:"planos",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:s.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[s.jsx(_s,{eyebrow:"Planos VM Mídias",title:"Escolha sua",accent:"presença",description:"Dois planos claros. Você escolhe a cobertura e o período ideal para o seu negócio.",className:"mb-9"}),s.jsx("div",{className:"mx-auto mb-10 flex max-w-xl rounded-lg border border-white/10 bg-[#0d0f13] p-1.5",children:Vh.map(p=>s.jsxs("button",{type:"button",onClick:()=>d(p.id),"aria-pressed":c===p.id,className:`relative flex min-h-12 flex-1 flex-col items-center justify-center rounded-md px-2 text-center transition-colors ${c===p.id?"bg-[#f40b36] text-white":"text-white/52 hover:bg-white/[0.04] hover:text-white"}`,children:[s.jsx("span",{className:"text-xs font-black uppercase tracking-[0.1em]",children:p.shortLabel}),p.id==="anual"&&s.jsx("span",{className:`mt-0.5 text-[9px] font-bold uppercase ${c==="anual"?"text-white/75":"text-[#f40b36]"}`,children:"melhor valor"})]},p.id))}),s.jsx("div",{className:"mx-auto grid max-w-6xl overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 lg:gap-px",children:_e.plans.map(p=>{const v=p.id==="destaque",x=p.prices[c],y=p.features.slice(0,4);return s.jsxs("article",{className:`relative flex flex-col bg-[#0d0f13] p-7 sm:p-10 lg:p-12 ${v?"border-t-4 border-[#f40b36] lg:border-t-0 lg:border-l-4":""}`,children:[s.jsxs("div",{className:"flex items-start justify-between gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]",children:p.type}),s.jsxs("h3",{className:"mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl",children:["Plano ",p.name]})]}),v&&s.jsxs("span",{className:"flex shrink-0 items-center gap-1 bg-[#f40b36] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider text-white",children:[s.jsx(Py,{className:"h-3 w-3 fill-current"})," Mais escolhido"]})]}),s.jsx("p",{className:"mt-4 text-sm font-semibold text-white/62",children:p.coverage}),s.jsxs("div",{className:"my-8 border-y border-white/10 py-7",children:[s.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.14em] text-white/38",children:x.note}),s.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[s.jsx("span",{className:"mb-2 text-sm font-black text-[#f40b36]",children:"R$"}),s.jsx("span",{className:"text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl",children:x.price}),s.jsx("span",{className:"mb-2 text-sm text-white/45",children:x.period})]})]}),s.jsx("div",{className:"space-y-4",children:y.map(j=>s.jsxs("div",{className:"flex gap-3 text-sm leading-6 text-white/70",children:[s.jsx(Cs,{className:"mt-1 h-4 w-4 shrink-0 text-[#f40b36]"}),s.jsx("span",{children:j})]},j))}),s.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/48",children:[s.jsx($y,{className:"h-4 w-4 shrink-0 text-[#f40b36]"}),s.jsxs("span",{children:["Vídeo animado opcional por ",p.optionalVideo[c]]})]}),s.jsxs("div",{className:"mt-auto pt-8",children:[s.jsxs("button",{type:"button",onClick:()=>u(p),className:`group flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.1em] transition-colors ${v?"bg-[#f40b36] text-white hover:bg-[#d90a31]":"border border-white/18 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`,children:["Escolher ",p.name," ",s.jsx(pt,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}),s.jsxs("a",{href:f(p),target:"_blank",rel:"noopener noreferrer",className:"mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/42 transition-colors hover:text-[#25D366]",children:[s.jsx(pn,{className:"h-4 w-4"})," Tirar dúvidas pelo WhatsApp"]})]})]},p.id)})})]})})},Yh=({item:i})=>{const c=i.icon;return s.jsx("article",{className:"group relative flex h-full min-h-[250px] flex-col border border-white/10 bg-[#08090d]/90 p-6 transition-colors duration-300 hover:border-[#ff143f]/45 hover:bg-[#0b0c11] sm:p-7",children:s.jsxs("div",{className:"flex items-start gap-5",children:[s.jsxs("div",{className:"shrink-0",children:[s.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff143f] text-[#ff143f] shadow-[0_0_24px_rgba(248,3,45,0.2)] transition-all duration-300 group-hover:bg-[#ff143f] group-hover:text-white",children:s.jsx(c,{className:"h-6 w-6","aria-hidden":"true"})}),s.jsx("span",{className:"mt-3 block text-center text-[10px] font-black tracking-[0.25em] text-[#5d606b]",children:i.number})]}),s.jsxs("div",{className:"min-w-0 pt-1",children:[s.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white lg:text-2xl",children:i.title}),s.jsx("span",{className:"my-4 block h-[3px] w-10 bg-[#ff143f] shadow-[0_0_12px_#f8032d]"}),s.jsx("p",{className:"max-w-lg text-sm leading-7 text-[#aeb0b8]",children:i.text})]})]})})},s2=({items:i,desktopColumns:c=3,mobileCarousel:d=!1})=>{const u=N.useRef(null),[f,p]=N.useState(0),v=c===2?"md:grid-cols-2":"md:grid-cols-3",x=j=>{var C;const E=Math.max(0,Math.min(i.length-1,j)),h=(C=u.current)==null?void 0:C.children[E];h==null||h.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),p(E)},y=()=>{const j=u.current;if(!j||j.clientWidth===0)return;const E=Math.round(j.scrollLeft/j.clientWidth);p(Math.max(0,Math.min(i.length-1,E)))};return d?s.jsxs("div",{children:[s.jsx("div",{ref:u,onScroll:y,className:`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 ${v}`,children:i.map(j=>s.jsx("div",{className:"min-w-full snap-center md:min-w-0",children:s.jsx(Yh,{item:j})},j.id))}),s.jsxs("div",{className:"mt-5 flex items-center justify-between md:hidden",children:[s.jsx("button",{type:"button",onClick:()=>x(f-1),disabled:f===0,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver benefício anterior",children:s.jsx(Fb,{className:"h-5 w-5"})}),s.jsx("div",{className:"flex items-center gap-2","aria-label":"Posição do carrossel",children:i.map((j,E)=>s.jsx("button",{type:"button",onClick:()=>x(E),className:`h-2 rounded-full transition-all ${E===f?"w-7 bg-[#ff143f]":"w-2 bg-white/20"}`,"aria-label":`Ver benefício ${E+1}`,"aria-current":E===f?"true":void 0},j.id))}),s.jsx("button",{type:"button",onClick:()=>x(f+1),disabled:f===i.length-1,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver próximo benefício",children:s.jsx(yv,{className:"h-5 w-5"})})]})]}):s.jsx("div",{className:`grid grid-cols-1 gap-4 ${v}`,children:i.map(j=>s.jsx(Yh,{item:j},j.id))})},r2=()=>{const i={CalendarCheck:kb,MapPin:Qu,Repeat:Iy,Coins:iy,Palette:zy,Headphones:xy},c=_e.whyAdvertise.map((d,u)=>({id:d.id,number:String(u+1).padStart(2,"0"),title:d.title,text:d.description,icon:i[d.iconName]||Zy}));return s.jsx("section",{id:"por-que-anunciar",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:s.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[s.jsx(_s,{eyebrow:"Vantagens VM Mídias",title:"Por que anunciar",accent:"com a VM Mídias",description:"Mais que mídia, resultados de visibilidade e autoridade para o seu negócio.",align:"left",className:"mb-14 lg:mb-20"}),s.jsx(s2,{items:c,desktopColumns:2,mobileCarousel:!0})]})})},c2=()=>{const[i,c]=N.useState(0),d=u=>{c(f=>f===u?null:u)};return s.jsx("section",{id:"faq",className:"relative py-24 lg:py-32 bg-[#030406] border-b border-white/10 overflow-hidden",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[s.jsx(_s,{eyebrow:"Tire suas dúvidas",title:"Perguntas",accent:"frequentes",description:"Tudo o que você precisa saber antes de colocar sua marca nas telas.",className:"mb-16"}),s.jsx("div",{className:"border-t border-white/10",children:_e.faqs.map((u,f)=>{const p=i===f;return s.jsxs("div",{className:"overflow-hidden border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.025]",children:[s.jsxs("button",{type:"button",onClick:()=>d(f),className:"w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":p,children:[s.jsx("span",{className:"text-base sm:text-lg font-bold text-white leading-snug",children:u.question}),s.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ${p?"rotate-180 border-[#F8032D] text-[#F8032D]":"text-gray-400"}`,children:s.jsx(Kb,{className:"w-4 h-4"})})]}),p&&s.jsx("div",{className:"max-w-3xl pb-7 pr-12 text-sm leading-relaxed text-gray-300 animate-in fade-in duration-200",children:u.answer})]},f)})})]})})},u2=()=>s.jsxs("section",{className:"relative py-28 lg:py-40 bg-[#000000] border-b border-white/10 overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-indoor-space opacity-30 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-black/70 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-led-grid opacity-30 pointer-events-none"}),s.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none"}),s.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[s.jsx("div",{className:"mb-6 flex justify-center",children:s.jsx(hn,{size:"sm",glow:!0})}),s.jsx(Vo,{align:"center",className:"mb-6",children:"Oportunidade limitada de ponto"}),s.jsxs("h2",{className:"text-[clamp(2.8rem,6vw,6.5rem)] font-black text-white tracking-[-0.055em] leading-[0.94] uppercase mb-7",children:["SUA MARCA PODE SER ",s.jsx("br",{className:"hidden sm:inline"}),s.jsx("span",{className:"text-[#F8032D] text-led-glow",children:"A PRÓXIMA A APARECER."})]}),s.jsx("p",{className:"text-base sm:text-xl text-[#A9ACB3] max-w-2xl mx-auto leading-relaxed mb-10",children:"Coloque sua empresa nos pontos onde Capela do Alto realmente circula. Garanta frequência, visibilidade e resultados reais."}),s.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:s.jsx(As,{id:"cta-final-button",href:"#contato",className:"w-full sm:w-auto sm:px-10 sm:min-h-16",children:"Quero colocar minha marca em destaque"})})]})]}),d2=({selectedPlanName:i,selectedPlanCycle:c})=>{const[d,u]=N.useState({nome:"",empresa:"",plano:"PLANO DESTAQUE (Mais Escolhido)",mensagem:""}),[f,p]=N.useState({});N.useEffect(()=>{i&&u(E=>({...E,plano:i.toUpperCase()==="START"?"PLANO START (05 locais)":"PLANO DESTAQUE (Mais Escolhido)"}))},[i,c]);const v=E=>{const h=E.target.name;u(C=>({...C,[h]:E.target.value})),f[h]&&p(C=>({...C,[h]:void 0}))},x=E=>{E.preventDefault();const h={};if(d.nome.trim()||(h.nome="Informe seu nome."),d.mensagem.trim()||(h.mensagem="Escreva uma mensagem para continuar."),p(h),Object.keys(h).length>0)return;const C=["*CONTATO PELO SITE — VM MÍDIAS*","",`*Nome:* ${d.nome.trim()}`,d.empresa.trim()?`*Empresa:* ${d.empresa.trim()}`:"",`*Interesse:* ${d.plano}${c?` — ${c}`:""}`,`*Mensagem:* ${d.mensagem.trim()}`].filter(Boolean).join(`
`),L=`https://wa.me/${_e.company.whatsappRaw}?text=${encodeURIComponent(C)}`;window.open(L,"_blank","noopener,noreferrer")},y="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#f40b36] focus:ring-0",j=[{value:"PLANO DESTAQUE (Mais Escolhido)",label:"Destaque",detail:"10 locais"},{value:"PLANO START (05 locais)",label:"Start",detail:"5 locais"},{value:"PAINÉIS DE LED (Sob Medida)",label:"Painel de LED",detail:"sob medida"},{value:"OUTRO / TIRAR DÚVIDAS",label:"Tenho dúvidas",detail:"quero orientação"}];return s.jsx("section",{id:"contato",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:s.jsx("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:s.jsxs("div",{className:"grid gap-14 lg:grid-cols-12 lg:gap-20",children:[s.jsxs("div",{className:"lg:col-span-5",children:[s.jsx(Vo,{children:"Contato direto"}),s.jsxs("h2",{className:"brand-section-title !text-[clamp(3.4rem,7vw,7rem)]",children:["Vamos",s.jsx("br",{}),"conversar."]}),s.jsx("p",{className:"mt-6 max-w-md text-base leading-7 text-white/58",children:"Conte o que sua marca precisa. Ao enviar, abriremos o WhatsApp da VM Mídias com a mensagem pronta."}),s.jsxs("div",{className:"mt-10 border-y border-white/10",children:[s.jsxs("a",{href:`https://wa.me/${_e.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4 border-b border-white/10 py-5",children:[s.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:s.jsx(pn,{className:"h-5 w-5"})}),s.jsxs("span",{className:"flex-1",children:[s.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"WhatsApp comercial"}),s.jsx("span",{className:"mt-1 block font-bold text-white",children:_e.company.whatsappFormatted})]}),s.jsx(Hh,{className:"h-4 w-4 text-white/35 transition-colors group-hover:text-[#25D366]"})]}),s.jsxs("div",{className:"flex items-center gap-4 py-5",children:[s.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:s.jsx(Qu,{className:"h-5 w-5"})}),s.jsxs("span",{children:[s.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"Atendimento local"}),s.jsx("span",{className:"mt-1 block font-bold text-white",children:_e.company.locationShort})]})]})]})]}),s.jsxs("div",{className:"lg:col-span-7 lg:pt-10",children:[s.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#f40b36]",children:"Mensagem rápida"}),s.jsx("h3",{className:"mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:"Fale direto com nosso time"})]}),s.jsx(pn,{className:"hidden h-8 w-8 sm:block"})]}),s.jsxs("form",{onSubmit:x,noValidate:!0,className:"space-y-7",children:[s.jsxs("div",{className:"grid gap-7 sm:grid-cols-2",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"form-nome",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Seu nome"}),s.jsx("input",{id:"form-nome",name:"nome",type:"text",autoComplete:"name",value:d.nome,onChange:v,placeholder:"Como podemos chamar você?",className:`${y} ${f.nome?"!border-red-500":""}`,"aria-invalid":!!f.nome}),f.nome&&s.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[s.jsx(Bh,{className:"h-3.5 w-3.5"}),f.nome]})]}),s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"form-empresa",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:["Empresa"," ",s.jsx("span",{className:"font-normal normal-case text-white/30"})]}),s.jsx("input",{id:"form-empresa",name:"empresa",type:"text",autoComplete:"organization",value:d.empresa,onChange:v,placeholder:"Nome do seu negócio",className:y})]})]}),s.jsxs("fieldset",{children:[s.jsx("legend",{className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Qual é o seu interesse?"}),s.jsx("div",{className:"mt-3 grid grid-cols-2 gap-2",children:j.map(E=>{const h=d.plano===E.value;return s.jsxs("button",{type:"button",onClick:()=>u(C=>({...C,plano:E.value})),"aria-pressed":h,className:`min-h-16 rounded-md border px-3 py-3 text-left transition-colors ${h?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-white/[0.025] hover:border-white/28"}`,children:[s.jsx("span",{className:`block text-sm font-black ${h?"text-white":"text-white/68"}`,children:E.label}),s.jsx("span",{className:"mt-0.5 block text-[10px] uppercase tracking-wider text-white/32",children:E.detail})]},E.value)})})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"form-mensagem",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Sua mensagem"}),s.jsx("textarea",{id:"form-mensagem",name:"mensagem",rows:4,value:d.mensagem,onChange:v,placeholder:"Conte brevemente o que você quer divulgar...",className:`${y} resize-y ${f.mensagem?"!border-red-500":""}`,"aria-invalid":!!f.mensagem}),f.mensagem&&s.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[s.jsx(Bh,{className:"h-3.5 w-3.5"}),f.mensagem]})]}),s.jsxs("button",{id:"contact-submit-button",type:"submit",className:"group flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041108] transition-colors hover:bg-[#38e478] sm:w-auto sm:min-w-72",children:[s.jsx(pn,{className:"h-5 w-5"}),"Enviar pelo WhatsApp",s.jsx(Hh,{className:"h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"})]})]})]})]})})})},m2=({onOpenPrivacyModal:i})=>{const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx("footer",{id:"main-footer",className:"bg-[#0A0A0E] border-t border-[#1C1C26] text-white pt-16 pb-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E2A]",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("a",{href:"#inicio",className:"inline-block","aria-label":"VM MÍDIAS",children:s.jsx(hn,{size:"md"})}),s.jsx("p",{className:"text-xs text-[#F8032D] font-extrabold uppercase tracking-widest",children:_e.company.tagline}),s.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Rede de telas digitais e mídia indoor estratégica em Capela do Alto. Visibilidade constante e frequência que transformam marcas locais em referências."}),s.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[s.jsx("a",{href:_e.company.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-[#F8032D] hover:border-[#F8032D]/40 transition-all","aria-label":"Instagram da VM MÍDIAS",children:s.jsx(Ay,{className:"w-4 h-4"})}),s.jsx("a",{href:`https://wa.me/${_e.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all","aria-label":"WhatsApp da VM MÍDIAS",children:s.jsx(pn,{className:"w-4 h-4"})}),s.jsx("a",{href:`mailto:${_e.company.email}`,className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all","aria-label":"E-mail da VM MÍDIAS",children:s.jsx(Ih,{className:"w-4 h-4"})})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Navegação"}),s.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[s.jsx("li",{children:s.jsx("a",{href:"#inicio",className:"hover:text-white transition-colors",children:"Início"})}),s.jsx("li",{children:s.jsx("a",{href:"#onde-estamos",className:"hover:text-white transition-colors",children:"Onde Estamos"})}),s.jsx("li",{children:s.jsx("a",{href:"#como-funciona",className:"hover:text-white transition-colors",children:"Como Funciona"})}),s.jsx("li",{children:s.jsx("a",{href:"#planos",className:"hover:text-white transition-colors",children:"Planos"})}),s.jsx("li",{children:s.jsx("a",{href:"#contato",className:"hover:text-white transition-colors",children:"Contato"})})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Presença Local"}),s.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(Qu,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsxs("span",{children:[_e.company.locationShort," — Brasil"]})]}),s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(vy,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsx("span",{children:_e.company.domain})]}),s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(Ih,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsx("span",{children:_e.company.email})]}),s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(pn,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsx("span",{children:"Atendimento comercial via WhatsApp"})]})]})]})]}),s.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[s.jsxs("div",{children:["© 2026 ",_e.company.name,". Todos os direitos reservados."]}),s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("button",{type:"button",onClick:i,className:"text-gray-400 hover:text-white transition-colors underline underline-offset-4",children:"Política de Privacidade (LGPD)"}),s.jsxs("button",{type:"button",onClick:c,className:"inline-flex items-center gap-1 text-gray-400 hover:text-[#F8032D] transition-colors","aria-label":"Voltar ao topo da página",children:[s.jsx("span",{children:"Topo"}),s.jsx(Vb,{className:"w-3.5 h-3.5"})]})]})]})]})})},f2=({customMessage:i})=>{const[c,d]=N.useState(!1),u=i||"Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.",f=`https://wa.me/${_e.company.whatsappRaw}?text=${encodeURIComponent(u)}`;return s.jsxs("div",{id:"floating-whatsapp-container",className:"fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto",children:[c&&s.jsxs("div",{className:"mb-3 max-w-xs bg-[#111116] border border-[#22222E] rounded-xl p-3.5 shadow-2xl shadow-black text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative",children:[s.jsx("button",{type:"button",onClick:()=>d(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-white","aria-label":"Fechar mensagem",children:s.jsx(Ds,{className:"w-3.5 h-3.5"})}),s.jsxs("div",{className:"font-bold text-white mb-1 flex items-center gap-1.5",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Atendimento VM MÍDIAS"]}),s.jsx("p",{className:"text-gray-300",children:"Dúvidas sobre os planos START e DESTAQUE? Fale diretamente conosco pelo WhatsApp."})]}),s.jsxs("a",{id:"floating-whatsapp-button",href:f,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>d(!0),className:"group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400","aria-label":"Falar com a VM MÍDIAS no WhatsApp",children:[s.jsx("span",{className:"absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60"}),s.jsx(pn,{className:"w-7 h-7 transition-transform group-hover:scale-110"}),s.jsx("span",{className:"absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0E]"})]})]})},ft="pt-3 text-base font-black text-white",Tu="list-disc space-y-1.5 pl-5 text-white/58",Rv=()=>s.jsxs("div",{className:"space-y-4 text-sm leading-7 text-white/68",children:[s.jsxs("p",{children:["Esta Política explica como a"," ",s.jsx("strong",{className:"text-white",children:_e.company.legalName})," ","(“VM MÍDIAS”), na qualidade de controladora, trata dados pessoais de visitantes, interessados, clientes e representantes de empresas que usam o site ",_e.company.domain," e seus canais de atendimento."]}),s.jsx("p",{children:"O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e os princípios de finalidade, necessidade, transparência, segurança e prevenção."}),s.jsx("h4",{className:ft,children:"1. Dados que podemos coletar"}),s.jsx("p",{children:"Dependendo do canal utilizado, podemos receber:"}),s.jsxs("ul",{className:Tu,children:[s.jsx("li",{children:"nome, empresa, telefone/WhatsApp e e-mail;"}),s.jsx("li",{children:"plano, produto ou serviço de interesse e mensagens comerciais;"}),s.jsx("li",{children:"briefing de criação, tipo de peça, objetivo, textos, estilo, prazo, chamada para ação e informações que deverão aparecer na campanha;"}),s.jsx("li",{children:"arquivos enviados para criação de vídeos, como logos, fotos, referências, documentos e vídeos, além de links do Drive, Canva ou Dropbox;"}),s.jsx("li",{children:"protocolo, situação do atendimento e datas de criação e atualização do pedido;"}),s.jsx("li",{children:"dados técnicos essenciais, como registros de acesso e endereço IP, que podem ser processados pela hospedagem e pelos serviços de infraestrutura para segurança e funcionamento."})]}),s.jsx("p",{children:"Não solicitamos senhas, dados bancários ou dados pessoais sensíveis nos formulários. Não inclua esse tipo de informação no briefing ou nos links compartilhados."}),s.jsx("h4",{className:ft,children:"2. Para que usamos os dados"}),s.jsxs("ul",{className:Tu,children:[s.jsx("li",{children:"responder contatos, dúvidas e solicitações de orçamento;"}),s.jsx("li",{children:"apresentar planos, propostas e condições comerciais;"}),s.jsx("li",{children:"organizar, criar, revisar, aprovar e programar artes e vídeos contratados;"}),s.jsx("li",{children:"acompanhar o histórico e o andamento de cada solicitação;"}),s.jsx("li",{children:"prevenir abuso, fraude, spam e incidentes de segurança;"}),s.jsx("li",{children:"cumprir contratos e obrigações legais ou regulatórias."})]}),s.jsx("h4",{className:ft,children:"3. Bases legais"}),s.jsx("p",{children:"Conforme o contexto, o tratamento poderá ocorrer com base no consentimento, na execução de contrato ou de procedimentos preliminares solicitados pelo titular, no cumprimento de obrigação legal ou regulatória e no legítimo interesse da VM MÍDIAS, sempre respeitando os direitos e as expectativas do titular."}),s.jsx("h4",{className:ft,children:"4. Armazenamento e compartilhamento"}),s.jsx("p",{children:"Os dados podem ser tratados pela equipe da VM MÍDIAS e por fornecedores necessários à operação, estritamente para as finalidades desta Política, incluindo:"}),s.jsxs("ul",{className:Tu,children:[s.jsx("li",{children:"HostGator, responsável pela hospedagem do site;"}),s.jsx("li",{children:"Supabase, utilizado para registrar solicitações e armazenar de forma privada os materiais enviados para produção;"}),s.jsx("li",{children:"n8n, quando utilizado para automatizar o fluxo interno de atendimento;"}),s.jsx("li",{children:"WhatsApp/Meta, quando o visitante decide iniciar atendimento por esse canal;"}),s.jsx("li",{children:"serviços escolhidos pelo cliente para compartilhar arquivos por link, sujeitos às próprias políticas de privacidade."})]}),s.jsx("p",{children:"A VM MÍDIAS não vende nem aluga dados pessoais. Alguns fornecedores podem utilizar infraestrutura localizada fora do Brasil; nesses casos, buscamos utilizar serviços reconhecidos e medidas compatíveis com a legislação aplicável."}),s.jsx("h4",{className:ft,children:"5. Prazo de conservação"}),s.jsx("p",{children:"Mantemos os dados somente pelo tempo necessário para atender a solicitação, executar a relação comercial, preservar o histórico de criação e cumprir obrigações legais. Depois desse período, eles poderão ser eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida por lei."}),s.jsx("h4",{className:ft,children:"6. Cookies, recursos técnicos e links externos"}),s.jsx("p",{children:"O site utiliza recursos técnicos necessários para navegação, segurança e envio dos formulários. Não utilizamos os dados dos formulários para vender perfis de publicidade. Links externos, como Instagram, WhatsApp, Drive, Canva ou Dropbox, passam a seguir as políticas dos respectivos serviços quando acessados."}),s.jsx("h4",{className:ft,children:"7. Segurança"}),s.jsx("p",{children:"Adotamos controles compatíveis com o porte e a natureza da operação para reduzir riscos de acesso não autorizado, alteração, perda ou divulgação indevida. Nenhum sistema é completamente imune a incidentes, mas revisamos acessos e integrações para limitar o tratamento ao necessário."}),s.jsx("h4",{className:ft,children:"8. Direitos do titular"}),s.jsx("p",{children:"Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando aplicável, portabilidade conforme regulamentação, oposição, revogação do consentimento e revisão de decisões exclusivamente automatizadas que afetem seus interesses."}),s.jsx("h4",{className:ft,children:"9. Como falar sobre seus dados"}),s.jsxs("p",{children:["Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail"," ",s.jsx("strong",{className:"text-white",children:_e.company.email})," ou pelo WhatsApp oficial ",_e.company.whatsappFormatted,". Podemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger os dados envolvidos."]}),s.jsx("h4",{className:ft,children:"10. Atualizações desta Política"}),s.jsx("p",{children:"Esta Política poderá ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão disponíveis nesta página."})]}),p2=({isOpen:i,onClose:c})=>i?s.jsx("div",{id:"privacy-policy-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",children:s.jsxs("div",{className:"relative w-full max-w-3xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto",children:[s.jsx("button",{type:"button",onClick:c,className:"absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A24] transition-colors","aria-label":"Fechar Política de Privacidade",children:s.jsx(Ds,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex items-center gap-3 mb-6 pb-4 border-b border-[#22222E]",children:[s.jsx("div",{className:"p-2.5 rounded-lg bg-[#F8032D]/10 text-[#F8032D] border border-[#F8032D]/20",children:s.jsx(jv,{className:"w-6 h-6"})}),s.jsxs("div",{children:[s.jsx("h3",{id:"privacy-modal-title",className:"text-xl font-black text-white",children:"Política de Privacidade & LGPD"}),s.jsx("p",{className:"text-xs text-gray-400",children:"Atualizado em 28 de setembro de 2026."})]})]}),s.jsx(Rv,{}),s.jsx("div",{className:"mt-8 pt-4 border-t border-[#22222E] flex justify-end",children:s.jsx("button",{type:"button",onClick:c,className:"px-6 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white font-bold text-sm shadow-led-sm transition-all",children:"Entendido e Fechar"})})]})}):null;function h2(){return N.useEffect(()=>{const i=document.title;return document.title="Política de Privacidade | VM MÍDIAS",()=>{document.title=i}},[]),s.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[s.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex h-[76px] max-w-5xl items-center justify-between px-5 sm:px-8",children:[s.jsx("a",{href:"/","aria-label":"Voltar ao site da VM MÍDIAS",children:s.jsx(hn,{size:"sm"})}),s.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white",children:[s.jsx(Io,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})}),s.jsx("main",{className:"px-5 py-12 sm:px-8 sm:py-16",children:s.jsxs("article",{className:"brand-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-10 lg:p-12",children:[s.jsxs("header",{className:"mb-8 flex items-start gap-4 border-b border-white/10 pb-7",children:[s.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]",children:s.jsx(jv,{className:"h-6 w-6"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Transparência e LGPD"}),s.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:"Política de Privacidade"}),s.jsx("p",{className:"mt-2 text-xs text-white/40",children:"Atualizada em 29 de setembro de 2026."})]})]}),s.jsx(Rv,{})]})})]})}const v2=`Act like um Diretor Criativo Sênior, Motion Designer, Diretor de Arte, Especialista em Lettering Animado, Branding e Prompt Engineer especializado em criação de publicidade audiovisual para MÍDIA INDOOR e geração de vídeo por IA no Google Flow.

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

Take a deep breath and work on this problem step-by-step.`,g2=`Act like a Senior Advertising Art Director, Creative Director, Indoor Media Specialist, Visual Key Designer, Typography & Lettering Director, Brand Designer and AI Image Prompt Engineer with extensive experience creating high-impact advertising campaigns for digital indoor media, vertical displays, digital signage, retail screens, elevator screens, shopping mall panels, corporate displays, supermarket screens, clinics, gyms, waiting areas, restaurants, stores and high-traffic indoor environments.

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

Take a deep breath and work on this problem step-by-step.`;function Cv(i,c){const d=i==null?void 0:i.trim();if(!d)throw new Error(`Configuração do Supabase ausente. Defina ${c} no arquivo .env.`);return d}const Fe=Cv("https://dtmoboiwgqaphlthoexe.supabase.co","VITE_SUPABASE_URL"),ra=Cv("sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M","VITE_SUPABASE_PUBLISHABLE_KEY"),ku="video-request-assets",Ms="business-assets",zs="vm-admin-supabase-session",x2=ku,Dv=Ms;function _v(i){const c=i.lastIndexOf("."),d=c>=0?i.slice(c).toLowerCase():"";return`${(c>=0?i.slice(0,c):i).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||"arquivo"}${d.replace(/[^a-z0-9.]/g,"")}`}function Yo(i){return i.split("/").map(encodeURIComponent).join("/")}async function b2(i,c,d){const u=`solicitacoes/${d}`,f=c.map(async(p,v)=>{const x=`${u}/${i}/${String(v+1).padStart(2,"0")}-${_v(p.name)}`,y=await fetch(`${Fe}/storage/v1/object/${ku}/${Yo(x)}`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${ra}`,"Content-Type":p.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:p});if(!y.ok){const j=await y.text();throw console.error("Falha ao enviar material do vídeo:",j),new Error(`Não foi possível enviar o arquivo “${p.name}”. Verifique o formato e tente novamente.`)}return{path:x,name:p.name,size:p.size,mime_type:p.type||"application/octet-stream"}});return Promise.all(f)}async function Mv(i,c,d=0){const u=c.map(async(f,p)=>{const v=`negocios/${i}/${String(d+p+1).padStart(2,"0")}-${crypto.randomUUID().slice(0,8)}-${_v(f.name)}`;if(!(await fetch(`${Fe}/storage/v1/object/${Ms}/${Yo(v)}`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${ra}`,"Content-Type":f.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:f})).ok)throw new Error(`Não foi possível enviar “${f.name}”.`);return{path:v,name:f.name,size:f.size,mime_type:f.type||"application/octet-stream"}});return Promise.all(u)}function In(i){return`${Fe}/storage/v1/object/public/${Ms}/${Yo(i)}`}async function y2(i){if(!(await fetch(`${Fe}/rest/v1/rpc/create_business_secure`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${ra}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:i.id,p_name:i.name,p_whatsapp:i.whatsapp,p_instagram:i.instagram,p_address:i.address,p_segment:i.segment,p_description:i.description,p_assets:i.assets,p_consent:i.consent})})).ok)throw new Error("Não foi possível cadastrar o negócio agora.")}async function zv(){const i=await fetch(`${Fe}/rest/v1/rpc/list_businesses_public`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${ra}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!i.ok)throw new Error("Não foi possível carregar os negócios. Aplique a nova migração no Supabase.");return await i.json()}async function N2(i,c,d){const u=await fetch(`${Fe}/rest/v1/rpc/update_business_secure`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${ra}`,"Content-Type":"application/json"},body:JSON.stringify({p_business_id:i,p_name:c.name,p_whatsapp:c.whatsapp,p_instagram:c.instagram,p_address:c.address,p_segment:c.segment,p_description:c.description,p_new_assets:d})});if(!u.ok){const f=await u.text();throw/LIMITE_IMAGENS/i.test(f)?new Error("O negócio pode possuir no máximo 10 imagens."):new Error("Não foi possível atualizar as informações do negócio.")}}async function E2(i){const c=await fetch(`${Fe}/rest/v1/rpc/create_video_request_secure`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${ra}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:i.id,p_protocol:i.protocol,p_business_id:i.business_id,p_campaign_objective:i.campaign_objective,p_objective_other:i.objective_other,p_video_idea:i.video_idea,p_uploaded_assets:i.uploaded_assets,p_consent:i.consent})});if(!c.ok){const d=await c.text();throw console.error("Falha ao registrar solicitação de vídeo:",d),new Error("Não foi possível registrar sua solicitação agora.")}}function Uv(){try{const i=localStorage.getItem(zs);if(!i)return null;const c=JSON.parse(i);return!c.access_token||!c.expires_at?null:c}catch{return null}}function Lo(){localStorage.removeItem(zs)}async function Xu(i){const c=await fetch(`${Fe}/rest/v1/rpc/is_vm_admin`,{method:"POST",headers:{apikey:ra,Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!c.ok)throw c.status===404?new Error("A proteção administrativa ainda não foi instalada no Supabase."):new Error("Não foi possível verificar a permissão administrativa.");if(await c.json()!==!0)throw new Error("Este usuário não possui acesso administrativo.")}async function qv(i,c){const d=await fetch(`${Fe}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:ra,"Content-Type":"application/json"},body:JSON.stringify({email:i,password:c})});if(!d.ok){let p="";try{const v=await d.json();p=String((v==null?void 0:v.msg)||(v==null?void 0:v.message)||(v==null?void 0:v.error_description)||"")}catch{}throw/email not confirmed/i.test(p)?new Error("Este usuário ainda não confirmou o e-mail no Supabase."):new Error("E-mail ou senha inválidos.")}const u=await d.json(),f={access_token:u.access_token,refresh_token:u.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(u.expires_in||3600),user:u.user};return await Xu(f.access_token),localStorage.setItem(zs,JSON.stringify(f)),f}async function S2(i){const c=await fetch(`${Fe}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:ra,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:i.refresh_token})});if(!c.ok)throw Lo(),new Error("Sua sessão expirou. Entre novamente.");const d=await c.json(),u={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(d.expires_in||3600),user:d.user};return await Xu(u.access_token),localStorage.setItem(zs,JSON.stringify(u)),u}async function Du(i){return i.expires_at>Math.floor(Date.now()/1e3)+60?(await Xu(i.access_token),i):S2(i)}function Gn(i){return{apikey:ra,Authorization:`Bearer ${i}`}}async function A2(i){const c=await fetch(`${Fe}/rest/v1/video_requests?select=*&order=created_at.desc`,{headers:Gn(i),cache:"no-store"});if(!c.ok)throw c.status===401?new Error("Sua sessão expirou. Entre novamente."):new Error("Não foi possível carregar as solicitações. Confira as permissões do Supabase.");return await c.json()}async function O2(i){const c=await fetch(`${Fe}/rest/v1/businesses?select=id,name,whatsapp,instagram,address,segment,description,assets,consent,created_at,updated_at&order=name.asc`,{headers:Gn(i),cache:"no-store"});if(!c.ok)throw new Error("Não foi possível carregar os negócios no painel.");return await c.json()}async function T2(i){const c=new Date(Date.now()-12096e5).toISOString(),d=await fetch(`${Fe}/rest/v1/news_articles?select=*&published_at=gte.${encodeURIComponent(c)}&order=published_at.desc`,{headers:Gn(i),cache:"no-store"});if(!d.ok)throw d.status===404?new Error("O painel de notícias ainda não foi instalado no Supabase. Execute a migração 202610190001_news_moderation_queue.sql."):new Error("Não foi possível carregar a fila de notícias.");return await d.json()}async function j2(i,c,d){const u=await fetch(`${Fe}/rest/v1/rpc/moderate_news_article_admin`,{method:"POST",headers:{...Gn(i),"Content-Type":"application/json"},body:JSON.stringify({p_article_id:c,p_decision:d})});if(!u.ok)throw u.status===401?new Error("Sua sessão expirou. Entre novamente."):u.status===404?new Error("A aprovação de notícias ainda não foi instalada no Supabase."):new Error("Não foi possível atualizar esta notícia.")}async function w2(i,c,d){const u=await fetch(`${Fe}/rest/v1/rpc/remove_business_asset_admin`,{method:"POST",headers:{...Gn(i),"Content-Type":"application/json"},body:JSON.stringify({p_business_id:c,p_asset_path:d})});if(!u.ok)throw u.status===401?new Error("Sua sessão expirou. Entre novamente."):u.status===404?new Error("A exclusão ainda não foi ativada no Supabase. Execute a migração 202610060001_delete_business_assets_admin.sql."):new Error("Não foi possível excluir esta imagem do negócio.");const f=await fetch(`${Fe}/storage/v1/object/${Ms}/${Yo(d)}`,{method:"DELETE",headers:Gn(i)});!f.ok&&f.status!==404&&console.warn("A imagem saiu do cadastro, mas o arquivo não pôde ser removido do Storage.")}async function Lv(i,c,d=3600){const u=await fetch(`${Fe}/storage/v1/object/sign/${ku}/${Yo(c)}`,{method:"POST",headers:{...Gn(i),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:d})});if(!u.ok)throw new Error("Não foi possível abrir este arquivo.");const f=await u.json(),p=f.signedURL||f.signedUrl;if(!p)throw new Error("O Supabase não retornou o link do arquivo.");return p.startsWith("http")?p:`${Fe}/storage/v1${p}`}const Hv={institucional:"Publicidade institucional da marca",produto_servico:"Divulgar determinado produto ou serviço",promocao:"Promoção exclusiva e/ou inédita",fortalecer_marca:"Fortalecer a marca",visita_estabelecimento:"Incentivar a visita no estabelecimento",outro:"Outro"};function Qh(i){return i==null||i===""||Array.isArray(i)&&i.length===0||typeof i=="object"&&i!==null&&Object.keys(i).length===0}function Os(i){return Array.isArray(i)?i.map(Os).filter(c=>!Qh(c)):i&&typeof i=="object"?Object.fromEntries(Object.entries(i).filter(([,c])=>!Qh(c)).map(([c,d])=>[c,Os(d)])):i}function R2(i){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(i))}function C2(i,c,d){return Os({negocio:{id:i.id,nome:i.name,whatsapp:i.whatsapp,instagram:i.instagram,endereco:i.address,segmento:i.segment,descricao:i.description,imagens:i.assets.map(u=>({nome:u.name,caminho_bucket:`${Dv}/${u.path}`,url:In(u.path),tipo:u.mime_type})),cadastrado_em:i.created_at},solicitacao_video:{id:c.id,protocolo:c.protocol,objetivo:Hv[c.campaign_objective||""]||c.campaign_objective,outro_objetivo:c.objective_other,descricao_do_video:c.video_idea,imagens_adicionais:c.uploaded_assets.map(u=>({nome:u.name,caminho_bucket:`${x2}/${u.path}`,url:d[u.path],url_valida_por:"7 dias",tipo:u.mime_type})),formato:"Vertical 9:16",duracao_segundos:c.duration_seconds,status:c.status,solicitado_em:c.created_at},prompt_para_ia:v2.trim()})}function D2(i){return Os({negocio:{id:i.id,nome:i.name,whatsapp:i.whatsapp,instagram:i.instagram,endereco:i.address,segmento:i.segment,descricao:i.description,imagens:i.assets.map(c=>({nome:c.name,caminho_bucket:`${Dv}/${c.path}`,url:In(c.path),tipo:c.mime_type})),cadastrado_em:i.created_at},prompt_para_visual_key:g2.trim()})}function kh(){const[i,c]=N.useState(()=>Uv()),[d,u]=N.useState([]),[f,p]=N.useState([]),[v,x]=N.useState(""),[y,j]=N.useState(""),[E,h]=N.useState(!!i),[C,L]=N.useState(""),Q=async _=>{h(!0),L("");try{const G=await Du(_);c(G);const[I,ue]=await Promise.all([O2(G.access_token),A2(G.access_token)]);u(I),p(ue)}catch(G){const I=G instanceof Error?G.message:"Não foi possível carregar o painel.";L(I),(I.includes("sessão")||I.includes("administrativ")||I.includes("permissão"))&&(Lo(),c(null))}finally{h(!1)}};N.useEffect(()=>{document.title="Painel administrativo | VM MÍDIAS",i&&Q(i)},[]);const H=N.useMemo(()=>{const _=d.map(I=>({business:I,requests:f.filter(ue=>ue.business_id===I.id)})),G=y.trim().toLocaleLowerCase("pt-BR");return G?_.filter(({business:I})=>`${I.name} ${I.segment}`.toLocaleLowerCase("pt-BR").includes(G)):_},[d,y,f]),B=H.find(_=>_.business.id===v)||null;return i?s.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[s.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[s.jsxs("div",{className:"flex items-center gap-5",children:[s.jsx("a",{href:"/",children:s.jsx(hn,{size:"sm"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),s.jsx("h1",{className:"font-black",children:"Negócios e solicitações"})]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("a",{href:"/admin/noticias","aria-label":"Aprovação de notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Av,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Notícias"})]}),s.jsxs("button",{onClick:()=>void Q(i),disabled:E,className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Ov,{className:`h-4 w-4 ${E?"animate-spin":""}`}),s.jsx("span",{className:"hidden sm:inline",children:"Atualizar"})]}),s.jsxs("button",{onClick:()=>{Lo(),c(null)},className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Sv,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Sair"})]})]})]})}),s.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[s.jsxs("section",{className:"flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Painel de clientes"}),s.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Um card para cada negócio."})]}),s.jsxs("label",{className:"relative block w-full max-w-md",children:[s.jsx(Tv,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),s.jsx("input",{value:y,onChange:_=>j(_.target.value),className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]",placeholder:"Buscar negócio"})]})]}),C&&s.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:C}),E&&!d.length?s.jsx("div",{className:"flex min-h-64 items-center justify-center",children:s.jsx(Qa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):B?s.jsx(M2,{group:B,session:i,onBack:()=>x(""),onBusinessUpdated:_=>u(G=>G.map(I=>I.id===_.id?_:I))}):H.length?s.jsx("section",{className:"mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",children:H.map(_=>s.jsx(_2,{group:_,onOpen:()=>x(_.business.id)},_.business.id))}):s.jsx("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhum negócio cadastrado."})]})]}):s.jsx(Gv,{loading:E,error:C,onLogin:async(_,G)=>{h(!0),L("");try{const I=await qv(_,G);c(I),await Q(I)}catch(I){L(I instanceof Error?I.message:"Não foi possível entrar.")}finally{h(!1)}}})}function _2({group:i,onOpen:c}){const d=i.business.assets[0];return s.jsxs("button",{onClick:c,className:"group rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-1 hover:border-[#f40b36]/55",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:d?s.jsx("img",{src:In(d.path),alt:"",className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-7 w-7 text-white/30"})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("h3",{className:"truncate text-xl font-black",children:i.business.name}),s.jsx("p",{className:"mt-1 truncate text-sm text-white/45",children:i.business.segment})]}),s.jsx(yv,{className:"h-5 w-5 text-white/30 group-hover:text-[#ff3155]"})]}),s.jsx("div",{className:"mt-5 border-t border-white/10 pt-4",children:s.jsxs("span",{className:"rounded-full border border-[#f40b36]/25 bg-[#f40b36]/10 px-3 py-1.5 text-xs font-black text-[#ff6a82]",children:[i.requests.length," ",i.requests.length===1?"solicitação":"solicitações"]})})]})}function M2({group:i,session:c,onBack:d,onBusinessUpdated:u}){const f=i.business,[p,v]=N.useState(!1),[x,y]=N.useState(""),[j,E]=N.useState(""),[h,C]=N.useState(""),L=async()=>{y("");try{await navigator.clipboard.writeText(JSON.stringify(D2(f),null,2)),v(!0),window.setTimeout(()=>v(!1),1800)}catch{y("Não foi possível copiar o JSON para a área de transferência.")}},Q=async H=>{if(window.confirm(`Deseja realmente excluir a imagem “${H.name}”? Esta ação não poderá ser desfeita.`)){E(H.path),C("");try{await w2(c.access_token,f.id,H.path),u({...f,assets:f.assets.filter(_=>_.path!==H.path),updated_at:new Date().toISOString()})}catch(_){C(_ instanceof Error?_.message:"Não foi possível excluir esta imagem.")}finally{E("")}}};return s.jsxs("section",{className:"mt-7",children:[s.jsxs("button",{onClick:d,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[s.jsx(Io,{className:"h-4 w-4"}),"Todos os negócios"]}),s.jsxs("div",{className:"mt-5 rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[s.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[s.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[s.jsx("div",{className:"flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:f.assets[0]?s.jsx("img",{src:In(f.assets[0].path),alt:"",className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-8 w-8 text-white/30"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.16em] text-[#ff3155]",children:"Negócio"}),s.jsx("h2",{className:"mt-1 text-3xl font-black sm:text-4xl",children:f.name}),s.jsx("p",{className:"mt-2 text-sm text-white/50",children:[f.segment,f.whatsapp,f.instagram,f.address].filter(Boolean).join(" · ")})]})]}),s.jsxs("button",{type:"button",onClick:()=>void L(),className:"inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-5 text-center text-xs font-black uppercase leading-tight tracking-[0.08em] transition hover:bg-[#ff3155]",children:[p?s.jsx(Cs,{className:"h-4 w-4"}):s.jsx(Nv,{className:"h-4 w-4"}),p?"JSON copiado":"Copiar JSON para Visual Key"]})]}),x&&s.jsx("p",{className:"mt-4 text-sm text-red-300",children:x}),f.description&&s.jsx("p",{className:"mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60",children:f.description}),s.jsx(Bv,{assets:f.assets,publicAssets:!0,deletingPath:j,onDelete:H=>void Q(H)}),h&&s.jsx("p",{className:"mt-4 text-sm text-red-300",children:h})]}),s.jsx("h3",{className:"mt-8 text-2xl font-black",children:"Solicitações deste negócio"}),i.requests.length?s.jsx("div",{className:"mt-5 grid gap-5 xl:grid-cols-2",children:i.requests.map(H=>s.jsx(z2,{business:f,request:H,session:c},H.id))}):s.jsx("div",{className:"mt-5 rounded-xl border border-dashed border-white/15 p-12 text-center text-white/45",children:"Este negócio ainda não solicitou vídeos."})]})}function z2({business:i,request:c,session:d}){const[u,f]=N.useState(!1),[p,v]=N.useState(!1),[x,y]=N.useState(""),j=async()=>{v(!0),y("");try{const E=await Promise.all(c.uploaded_assets.map(async h=>[h.path,await Lv(d.access_token,h.path,604800)]));await navigator.clipboard.writeText(JSON.stringify(C2(i,c,Object.fromEntries(E)),null,2)),f(!0),window.setTimeout(()=>f(!1),1800)}catch(E){y(E instanceof Error?E.message:"Não foi possível gerar o JSON.")}finally{v(!1)}};return s.jsxs("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:[s.jsxs("header",{className:"flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between",children:[s.jsxs("div",{children:[s.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase text-white/60",children:c.status}),s.jsx("h4",{className:"mt-4 text-xl font-black",children:Hv[c.campaign_objective||""]||"Novo vídeo"}),s.jsxs("p",{className:"mt-2 text-xs text-white/40",children:[c.protocol," · ",R2(c.created_at)]})]}),s.jsxs("button",{onClick:()=>void j(),disabled:p,className:"inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase tracking-[0.08em] disabled:opacity-60",children:[p?s.jsx(Qa,{className:"h-4 w-4 animate-spin"}):u?s.jsx(Cs,{className:"h-4 w-4"}):s.jsx(Nv,{className:"h-4 w-4"}),p?"Gerando URLs":u?"JSON copiado":"Copiar JSON"]})]}),s.jsxs("div",{className:"p-5",children:[c.video_idea&&s.jsx("p",{className:"text-sm leading-7 text-white/65",children:c.video_idea}),c.objective_other&&s.jsxs("p",{className:"mt-3 text-sm text-white/55",children:["Outro objetivo: ",c.objective_other]}),c.uploaded_assets.length>0&&s.jsx(Bv,{assets:c.uploaded_assets,accessToken:d.access_token}),x&&s.jsx("p",{className:"mt-4 text-xs text-red-300",children:x})]})]})}function Bv({assets:i,accessToken:c,publicAssets:d=!1,deletingPath:u="",onDelete:f}){const[p,v]=N.useState(()=>d?Object.fromEntries(i.map(x=>[x.path,In(x.path)])):{});return N.useEffect(()=>{d||!c||Promise.all(i.map(async x=>[x.path,await Lv(c,x.path,3600)])).then(x=>v(Object.fromEntries(x))).catch(()=>{})},[c,i,d]),s.jsx("div",{className:"mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",children:i.map(x=>{const y=p[x.path];return s.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/25 p-2",children:[x.mime_type.startsWith("image/")&&y?s.jsx("img",{src:y,alt:x.name,className:"h-24 w-full rounded-lg object-cover"}):s.jsx("div",{className:"flex h-24 items-center justify-center",children:s.jsx(py,{className:"h-7 w-7 text-white/30"})}),s.jsx("span",{className:"mt-2 block truncate text-[11px] font-bold text-white/70",children:x.name}),y&&s.jsxs("a",{href:y,download:x.name,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-[10px] font-black uppercase text-white/70 hover:border-[#f40b36]/55",children:[s.jsx(ry,{className:"h-3.5 w-3.5"}),"Baixar"]}),f&&s.jsxs("button",{type:"button",onClick:()=>f(x),disabled:!!u,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-red-400/25 bg-red-400/10 text-[10px] font-black uppercase text-red-200 transition hover:border-red-400/60 hover:bg-red-400/15 disabled:cursor-wait disabled:opacity-50",children:[u===x.path?s.jsx(Qa,{className:"h-3.5 w-3.5 animate-spin"}):s.jsx(wv,{className:"h-3.5 w-3.5"}),u===x.path?"Excluindo":"Excluir imagem"]})]},x.path)})})}function Gv({onLogin:i,loading:c,error:d}){const[u,f]=N.useState(""),[p,v]=N.useState(""),x=y=>{y.preventDefault(),i(u.trim(),p)};return s.jsxs("div",{className:"min-h-screen bg-[#050609] px-5 py-10 text-white",children:[s.jsxs("a",{href:"/",className:"mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-white/55",children:[s.jsx(Io,{className:"h-4 w-4"}),"Voltar ao site"]}),s.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center",children:s.jsxs("form",{onSubmit:x,className:"w-full rounded-2xl border border-white/12 bg-[#0d0f13] p-6 sm:p-9",children:[s.jsx(hn,{size:"md"}),s.jsx(Gh,{className:"mt-8 h-10 w-10 text-[#ff3155]"}),s.jsx("p",{className:"mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Acesso restrito"}),s.jsx("h1",{className:"mt-2 text-3xl font-black",children:"Painel administrativo"}),s.jsxs("label",{className:"mt-7 block text-sm font-bold",children:["E-mail",s.jsx("input",{required:!0,type:"email",value:u,onChange:y=>f(y.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),s.jsxs("label",{className:"mt-5 block text-sm font-bold",children:["Senha",s.jsx("input",{required:!0,type:"password",value:p,onChange:y=>v(y.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),d&&s.jsx("p",{className:"mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100",children:d}),s.jsxs("button",{disabled:c,className:"brand-button brand-button-primary mt-6 w-full",children:[c?s.jsx(Qa,{className:"h-4 w-4 animate-spin"}):s.jsx(Gh,{className:"h-4 w-4"}),"Entrar no painel"]})]})})]})}const Xh={pending:"Avaliar para Stories",approved:"Fila de Stories",published:"Publicadas nos Stories",rejected:"Fora dos Stories"},U2={waiting_approval:"Aguardando aprovação",queued:"Na fila",publishing:"Publicando agora",published:"Publicada no Instagram",failed:"Tentará novamente",needs_review:"Requer conferência",skipped:"Fora da fila"};function Ts(i){return i.moderation_status==="pending"?"pending":i.moderation_status==="rejected"?"rejected":i.story_status==="published"?"published":"approved"}function q2(i){return i?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(i)):""}const L2=/(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;function _u(i){return i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Zh(i){const c={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'};let d=String(i||"").replace(/<!\[CDATA\[|\]\]>/gi,"");for(let u=0;u<3;u+=1){const f=d;if(d=d.replace(/&#(x?[0-9a-f]+);/gi,(p,v)=>{const x=Number.parseInt(v.replace(/^x/i,""),/^x/i.test(v)?16:10);return Number.isFinite(x)&&x<=1114111?String.fromCodePoint(x):p}).replace(/&(amp|apos|gt|lt|nbsp|quot);/gi,(p,v)=>c[v.toLowerCase()]),d===f)break}return d.replace(/\s+/g," ").trim()}function H2(i){return{...i,title:Zh(i.title),summary:Zh(i.summary)||null}}function B2(i){const c=_u(i.title),d=_u(`${i.title} ${i.summary||""}`),u=/\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;return!(/^videos?\s*:/.test(c)||/\b(assista|acompanhe|veja)\b/.test(d)&&/\b(videos?|jornal|edicao)\b/.test(d)||u.test(d)&&/\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(d)||/^ao vivo\s*:/.test(c))}function Zu(i){return/^https?:\/\//i.test(i.image_url||"")&&!L2.test(i.image_url||"")}function G2(i){const c=Date.now()-1728e5,d=new Set,u=new Map,f=[];for(const p of i){if(Ts(p)!=="pending"||!Zu(p)||!B2(p))continue;const v=Date.parse(p.published_at);if(Number.isFinite(v)&&v<c)continue;const x=_u(p.title).trim();if(!x||d.has(x))continue;const y=u.get(p.source_name)||0;if(!(y>=3)&&(d.add(x),u.set(p.source_name,y+1),f.push(p),f.length>=24))break}return f}function I2(){const[i,c]=N.useState(()=>Uv()),[d,u]=N.useState([]),[f,p]=N.useState("pending"),[v,x]=N.useState(!!i),[y,j]=N.useState(""),[E,h]=N.useState(""),C=async _=>{x(!0),h("");try{const G=await Du(_);c(G),u((await T2(G.access_token)).map(H2))}catch(G){const I=G instanceof Error?G.message:"Não foi possível carregar as notícias.";h(I),(I.includes("sessão")||I.includes("administrativ")||I.includes("permissão"))&&(Lo(),c(null))}finally{x(!1)}};N.useEffect(()=>{document.title="Stories de notícias | VM MÍDIAS",i&&C(i)},[]);const L=N.useMemo(()=>G2(d),[d]),Q=N.useMemo(()=>{const _=d.reduce((G,I)=>(G[Ts(I)]+=1,G),{pending:0,approved:0,published:0,rejected:0});return _.pending=L.length,_},[d,L]),H=N.useMemo(()=>{if(f==="pending")return L;const _=d.filter(G=>Ts(G)===f);return f!=="approved"?_:_.sort((G,I)=>new Date(G.queued_at||G.published_at).getTime()-new Date(I.queued_at||I.published_at).getTime())},[d,L,f]),B=async(_,G)=>{if(i){j(_.id),h("");try{const I=await Du(i);c(I),await j2(I.access_token,_.id,G);const ue=new Date().toISOString();u(de=>de.map(me=>me.id===_.id?{...me,moderation_status:G,story_status:G==="approved"?me.story_status==="published"?"published":"queued":"skipped",reviewed_at:ue,queued_at:G==="approved"?ue:me.queued_at,last_story_error:G==="approved"?null:me.last_story_error,updated_at:ue}:me))}catch(I){h(I instanceof Error?I.message:"Não foi possível atualizar esta notícia.")}finally{j("")}}};return i?s.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[s.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[s.jsxs("div",{className:"flex min-w-0 items-center gap-4 sm:gap-5",children:[s.jsx("a",{href:"/","aria-label":"Voltar ao site",children:s.jsx(hn,{size:"sm"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),s.jsx("h1",{className:"truncate font-black",children:"Stories de notícias"})]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("a",{href:"/admin/solicitacoes","aria-label":"Negócios e solicitações",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Hl,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),s.jsxs("button",{onClick:()=>void C(i),disabled:v,"aria-label":"Atualizar notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Ov,{className:`h-4 w-4 ${v?"animate-spin":""}`}),s.jsx("span",{className:"hidden md:inline",children:"Atualizar"})]}),s.jsx("button",{onClick:()=>{Lo(),c(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:s.jsx(Sv,{className:"h-4 w-4"})})]})]})}),s.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[s.jsxs("section",{className:"border-b border-white/10 pb-8",children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Fila editorial"}),s.jsx("h2",{className:"mt-2 max-w-3xl text-3xl font-black sm:text-5xl",children:"Você decide o que vai para os Stories."}),s.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base",children:"A TV e o site recebem automaticamente as notícias úteis. Aqui você avalia uma seleção menor para os Stories. A prévia 9:16 mostra o corte real da imagem antes da aprovação."})]}),s.jsx("nav",{className:"mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4","aria-label":"Filtrar notícias",children:Object.keys(Xh).map(_=>s.jsxs("button",{onClick:()=>p(_),className:`rounded-xl border px-4 py-3 text-left transition ${f===_?"border-[#f40b36] bg-[#f40b36]/12":"border-white/10 bg-[#0c0e12] hover:border-white/20"}`,children:[s.jsx("span",{className:"block text-2xl font-black",children:Q[_]}),s.jsx("span",{className:"mt-1 block text-xs font-bold text-white/55",children:Xh[_]})]},_))}),f==="rejected"&&s.jsxs("p",{className:"mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-xs leading-5 text-white/55",children:[s.jsx(Ev,{className:"h-4 w-4 shrink-0 text-[#ff3155]"}),"As notícias recusadas são excluídas definitivamente do banco quando o dia termina, considerando o horário de São Paulo."]}),E&&s.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:E}),v&&!d.length?s.jsx("div",{className:"flex min-h-72 items-center justify-center",children:s.jsx(Qa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):H.length?s.jsx("section",{className:"mt-6 grid gap-5 xl:grid-cols-2",children:H.map((_,G)=>s.jsx(V2,{article:_,queuePosition:f==="approved"?G+1:void 0,working:y===_.id,onApprove:()=>void B(_,"approved"),onReject:()=>void B(_,"rejected")},_.id))}):s.jsxs("div",{className:"mt-6 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:[s.jsx(Av,{className:"mx-auto mb-4 h-9 w-9"}),"Nenhuma notícia nesta etapa."]})]})]}):s.jsx(Gv,{loading:v,error:E,onLogin:async(_,G)=>{x(!0),h("");try{const I=await qv(_,G);c(I),await C(I)}catch(I){h(I instanceof Error?I.message:"Não foi possível entrar.")}finally{x(!1)}}})}function V2({article:i,queuePosition:c,working:d,onApprove:u,onReject:f}){const p=Ts(i),v=Zu(i);return s.jsx("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:s.jsxs("div",{className:"grid md:grid-cols-[220px_minmax(0,1fr)]",children:[s.jsx("div",{className:"border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r",children:s.jsx(Y2,{article:i})}),s.jsxs("div",{className:"p-5 sm:p-6",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]",children:[s.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]",children:i.category}),s.jsx("span",{className:"text-white/40",children:i.source_name}),c&&s.jsxs("span",{className:"ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65",children:[s.jsx(Ev,{className:"h-3 w-3"})," #",c," da fila · até ",c,"h"]})]}),s.jsx("h3",{className:"mt-4 text-xl font-black leading-tight sm:text-2xl",children:i.title}),i.summary&&s.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-white/55",children:i.summary}),s.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40",children:[s.jsx("span",{children:q2(i.published_at)}),i.article_url&&s.jsxs("a",{href:i.article_url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-bold text-white/65 hover:text-white",children:["Abrir matéria ",s.jsx(uy,{className:"h-3.5 w-3.5"})]})]}),p==="pending"?s.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[s.jsxs("button",{onClick:f,disabled:d,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 font-black transition hover:border-red-400/50 hover:text-red-200 disabled:opacity-50",children:[d?s.jsx(Qa,{className:"h-4 w-4 animate-spin"}):s.jsx(Ds,{className:"h-4 w-4"}),"Não enviar"]}),s.jsxs("button",{onClick:u,disabled:d||!v,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:opacity-50",children:[d?s.jsx(Qa,{className:"h-4 w-4 animate-spin"}):s.jsx(Cs,{className:"h-4 w-4"}),"Enviar aos Stories"]})]}):s.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4",children:[s.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold text-white/55",children:[p==="approved"?s.jsx(Qy,{className:"h-4 w-4 text-[#ff3155]"}):null,U2[i.story_status]]}),p==="rejected"&&s.jsx("button",{onClick:u,disabled:d||!v,className:"rounded-lg border border-white/12 px-3 py-2 text-xs font-black hover:border-[#f40b36]/60 disabled:opacity-50",children:"Enviar aos Stories"}),p==="approved"&&i.story_status==="needs_review"&&s.jsx("button",{onClick:u,disabled:d,className:"rounded-lg border border-amber-300/25 px-3 py-2 text-xs font-black text-amber-100 hover:border-amber-300/60 disabled:opacity-50",children:"Reenfileirar"})]}),i.last_story_error&&s.jsx("p",{className:"mt-4 rounded-lg border border-amber-300/20 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100/80",children:i.last_story_error}),!v&&s.jsx("p",{className:"mt-4 rounded-lg border border-white/10 bg-white/[.03] p-3 text-xs leading-5 text-white/55",children:"Esta matéria não possui uma fotografia válida para o formato 9:16."})]})]})})}function Y2({article:i}){const c=Zu(i),d=i.title.length>170?10:i.title.length>130?12:i.title.length>95?14:17;return s.jsxs("div",{children:[s.jsxs("div",{className:"relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/12 bg-[#030305] shadow-2xl","aria-label":"Prévia do Story em proporção 9 por 16",children:[s.jsxs("div",{className:"absolute inset-x-0 top-0 h-[57%] overflow-hidden bg-[#111116]",children:[c?s.jsx("img",{src:i.image_url||"",alt:"",className:"h-full w-full object-cover",loading:"lazy"}):s.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-white/30",children:[s.jsx(yy,{className:"h-8 w-8"}),s.jsx("span",{className:"text-[10px] font-bold",children:"Sem imagem válida"})]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#030305]"}),s.jsx("img",{src:"/images/braba-news.png",alt:"BRABA NEWS",className:"absolute left-1/2 top-[3%] w-[43%] -translate-x-1/2 object-contain"})]}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 top-[54%] bg-[#030305] px-[6%] pb-[3%] pt-[4%]",children:[s.jsx("p",{className:"text-[7px] font-black uppercase tracking-[.18em] text-[#ff3155]",children:i.category||"Informação"}),s.jsx("h4",{className:"mt-2 font-black leading-[1.02] tracking-[-.035em] text-white",style:{fontSize:`${d}px`},children:i.title}),s.jsx("div",{className:"mt-2 h-1 w-[37%] bg-gradient-to-r from-[#f8034b] via-[#86152f] to-[#33121d]"}),i.summary&&s.jsx("p",{className:"mt-3 line-clamp-3 text-[9px] leading-[1.45] text-white/80",children:i.summary}),s.jsxs("div",{className:"absolute inset-x-[6%] bottom-[3%] flex items-center justify-between border-t border-white/20 pt-2 text-[7px] text-white/55",children:[s.jsx("strong",{className:"text-white",children:"BRABA NEWS"}),s.jsx("span",{className:"max-w-[48%] truncate",children:i.source_name})]})]})]}),s.jsx("p",{className:"mt-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white/35",children:"Prévia 9:16 · corte exato"})]})}const Kh=5,Q2=25*1024*1024,k2=new Set(["image/jpeg","image/png","image/webp","image/svg+xml"]),ya="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#07080b] px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition hover:border-white/30 focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/25",Na="block text-sm font-bold text-white",X2=[["institucional","Publicidade institucional da marca"],["produto_servico","Divulgar determinado produto ou serviço"],["promocao","Promoção exclusiva e/ou inédita"],["fortalecer_marca","Fortalecer a marca"],["visita_estabelecimento","Incentivar a visita no meu estabelecimento"],["outro","Outro"]];function Z2(){const i=new Date;return`VMV-${`${i.getFullYear()}${String(i.getMonth()+1).padStart(2,"0")}${String(i.getDate()).padStart(2,"0")}`}-${crypto.randomUUID().slice(0,6).toUpperCase()}`}function Ut(i){return i.trim()||null}function Mu(i,c){if(i.length+c.length>Kh)return`Envie no máximo ${Kh} imagens.`;const d=c.find(f=>!k2.has(f.type));if(d)return`O formato de “${d.name}” não é aceito.`;const u=c.find(f=>f.size>Q2);return u?`O arquivo “${u.name}” ultrapassa 25 MB.`:""}function Ml({children:i}){return s.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[s.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8",children:[s.jsx(ht,{to:"/","aria-label":"Voltar ao site",children:s.jsx(hn,{size:"sm"})}),s.jsxs("div",{className:"flex items-center gap-5",children:[s.jsx("span",{className:"hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline",children:"Portal de vídeos"}),s.jsxs(ht,{to:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 hover:text-white",children:[s.jsx(Io,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})]})}),i]})}function Iv({eyebrow:i,title:c,copy:d}){return s.jsxs("section",{className:"relative overflow-hidden border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16",children:[s.jsx("div",{className:"pointer-events-none absolute inset-0 bg-led-grid opacity-35"}),s.jsx("div",{className:"pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]"}),s.jsxs("div",{className:"relative mx-auto max-w-4xl text-center",children:[s.jsxs("p",{className:"brand-eyebrow justify-center",children:[s.jsx("span",{className:"brand-eyebrow-line"}),i]}),s.jsx("h1",{className:"brand-section-title",children:c}),s.jsx("p",{className:"brand-section-copy mx-auto",children:d})]})]})}function ju(){const[i,c]=N.useState([]),[d,u]=N.useState(""),[f,p]=N.useState(!0),[v,x]=N.useState("");N.useEffect(()=>{document.title="Escolha seu negócio | VM MÍDIAS",zv().then(c).catch(j=>x(j instanceof Error?j.message:"Não foi possível carregar os negócios.")).finally(()=>p(!1))},[]);const y=N.useMemo(()=>{const j=d.trim().toLocaleLowerCase("pt-BR");return j?i.filter(E=>`${E.name} ${E.segment}`.toLocaleLowerCase("pt-BR").includes(j)):i},[i,d]);return s.jsx(Ml,{children:s.jsxs("main",{children:[s.jsx(Iv,{eyebrow:"Seu espaço na VM MÍDIAS",title:s.jsxs(s.Fragment,{children:["Encontre seu ",s.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Pesquise o nome do seu negócio para consultar os dados cadastrados e solicitar um novo vídeo."}),s.jsxs("section",{className:"mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14",children:[s.jsxs("div",{className:"flex flex-col gap-4 rounded-2xl border border-white/12 bg-[#0d0f13] p-4 sm:flex-row sm:items-center sm:p-5",children:[s.jsxs("label",{className:"relative min-w-0 flex-1",children:[s.jsx(Tv,{className:"pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35"}),s.jsx("input",{value:d,onChange:j=>u(j.target.value),className:"h-14 w-full rounded-xl border border-white/15 bg-black/30 pl-12 pr-4 text-base outline-none placeholder:text-white/35 focus:border-[#f40b36]",placeholder:"Digite o nome do negócio",autoFocus:!0})]}),s.jsxs(ht,{to:"/solicitar-video/novo-negocio",className:"brand-button brand-button-primary whitespace-nowrap",children:[s.jsx(Hy,{className:"h-4 w-4"}),"Cadastrar negócio"]})]}),v&&s.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),f?s.jsx("div",{className:"flex min-h-64 items-center justify-center",children:s.jsx(Qa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):y.length?s.jsx("div",{className:"mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:y.map(j=>s.jsx(K2,{business:j},j.id))}):s.jsxs("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center",children:[s.jsx(Hl,{className:"mx-auto h-9 w-9 text-white/25"}),s.jsx("h2",{className:"mt-4 text-xl font-black",children:"Negócio não encontrado"}),s.jsx("p",{className:"mt-2 text-sm text-white/50",children:"Confira o nome ou cadastre o negócio para continuar."})]})]})]})})}function K2({business:i}){const c=i.assets[0];return s.jsxs(ht,{to:`/solicitar-video/negocio/${i.id}`,className:"group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f13] p-5 transition hover:-translate-y-1 hover:border-[#f40b36]/55 hover:shadow-2xl hover:shadow-[#f40b36]/10",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35",children:c?s.jsx("img",{src:In(c.path),alt:`Logo de ${i.name}`,className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-8 w-8 text-white/30"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h2",{className:"truncate text-xl font-black",children:i.name}),s.jsx("p",{className:"mt-1 truncate text-sm text-white/50",children:i.segment})]})]}),s.jsxs("span",{className:"mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.1em] text-white/65 group-hover:text-white",children:["Abrir negócio ",s.jsx(pt,{className:"h-4 w-4"})]})]})}const Vv={name:"",whatsapp:"",instagram:"",address:"",segment:"",description:"",consent:!1};function wu(){const[i,c]=N.useState(Vv),[d,u]=N.useState([]),[f,p]=N.useState(!1),[v,x]=N.useState(""),[y,j]=N.useState(null);N.useEffect(()=>{document.title="Cadastrar negócio | VM MÍDIAS"},[]);const E=C=>{const L=Array.from(C.target.files??[]);C.target.value="";const Q=Mu(d,L);if(Q)return x(Q);x(""),u(H=>[...H,...L])},h=async C=>{if(C.preventDefault(),x(""),!d.length)return x("Envie o logo ou ao menos uma imagem do negócio.");p(!0);try{const L=crypto.randomUUID(),Q=await Mv(L,d),H={id:L,name:i.name.trim(),whatsapp:Ut(i.whatsapp),instagram:Ut(i.instagram),address:Ut(i.address),segment:i.segment.trim(),description:Ut(i.description),assets:Q,consent:!0};await y2(H),j({...H,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),window.scrollTo({top:0,behavior:"smooth"})}catch(L){x(L instanceof Error?L.message:"Não foi possível cadastrar o negócio.")}finally{p(!1)}};return y?s.jsx(Qv,{title:"Negócio cadastrado",copy:"Agora o negócio já pode ser encontrado na pesquisa e receber novas solicitações de vídeo.",action:s.jsxs(ht,{to:`/solicitar-video/negocio/${y.id}`,className:"brand-button brand-button-primary",children:["Abrir negócio ",s.jsx(pt,{className:"h-4 w-4"})]})}):s.jsx(Ml,{children:s.jsxs("main",{children:[s.jsx(Iv,{eyebrow:"Primeiro acesso",title:s.jsxs(s.Fragment,{children:["Cadastre seu ",s.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Preencha somente as informações principais. Elas ficarão salvas para os próximos vídeos."}),s.jsx("section",{className:"mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14",children:s.jsxs("form",{onSubmit:h,className:"brand-panel rounded-2xl p-5 sm:p-8",children:[s.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[s.jsxs("label",{className:`${Na} sm:col-span-2`,children:["Nome do negócio *",s.jsx("input",{required:!0,maxLength:120,value:i.name,onChange:C=>c({...i,name:C.target.value}),className:ya,placeholder:"Nome do negócio"})]}),s.jsxs("label",{className:Na,children:["Segmento do negócio *",s.jsx("input",{required:!0,maxLength:120,value:i.segment,onChange:C=>c({...i,segment:C.target.value}),className:ya,placeholder:"Ex.: bar, mercado, academia"})]}),s.jsxs("label",{className:Na,children:["Endereço (caso seja físico)",s.jsx("input",{maxLength:300,value:i.address,onChange:C=>c({...i,address:C.target.value}),className:ya,placeholder:"Rua, número e bairro"})]}),s.jsxs("label",{className:Na,children:["WhatsApp",s.jsx("input",{maxLength:30,value:i.whatsapp,onChange:C=>c({...i,whatsapp:C.target.value}),className:ya,placeholder:"(15) 99999-9999"})]}),s.jsxs("label",{className:Na,children:["Instagram",s.jsx("input",{maxLength:120,value:i.instagram,onChange:C=>c({...i,instagram:C.target.value}),className:ya,placeholder:"@nomedonegocio"})]})]}),s.jsxs("label",{className:`${Na} mt-5`,children:["Faça uma breve descrição sobre o negócio",s.jsx("textarea",{rows:4,maxLength:1200,value:i.description,onChange:C=>c({...i,description:C.target.value}),className:ya,placeholder:"Conte brevemente o que o negócio oferece"})]}),s.jsx(zu,{files:d,onFiles:E,onRemove:C=>u(L=>L.filter((Q,H)=>H!==C)),title:"Logo e imagens do negócio *",copy:"Envie primeiro o logo e depois fotos da fachada, ambiente, produtos ou serviços. Máximo de 5 imagens."}),s.jsx(Yv,{checked:i.consent,onChange:C=>c({...i,consent:C})}),v&&s.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),s.jsx("button",{disabled:f,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Qa,{className:"h-4 w-4 animate-spin"}),"Salvando negócio…"]}):s.jsxs(s.Fragment,{children:["Cadastrar negócio ",s.jsx(pt,{className:"h-4 w-4"})]})})]})})]})})}function Ph(){const{businessId:i=""}=L1(),[c,d]=N.useState(null),[u,f]=N.useState(!0),[p,v]=N.useState(!1),[x,y]=N.useState(Vv),[j,E]=N.useState([]),[h,C]=N.useState(""),[L,Q]=N.useState(""),[H,B]=N.useState(""),[_,G]=N.useState([]),[I,ue]=N.useState(!1),[de,me]=N.useState(!1),[ee,$]=N.useState(""),[Ye,ke]=N.useState("");N.useEffect(()=>{zv().then(U=>{const Y=U.find(Z=>Z.id===i)||null;d(Y),Y&&y({name:Y.name,whatsapp:Y.whatsapp||"",instagram:Y.instagram||"",address:Y.address||"",segment:Y.segment,description:Y.description||"",consent:!0})}).catch(U=>$(U instanceof Error?U.message:"Não foi possível abrir o negócio.")).finally(()=>f(!1))},[i]);const ia=U=>{const Y=Array.from(U.target.files??[]);U.target.value="";const Z=Mu(_,Y);if(Z)return $(Z);$(""),G(se=>[...se,...Y])},Je=U=>{const Y=Array.from(U.target.files??[]);U.target.value="";const Z=Mu(j,Y);if(Z)return $(Z);if(((c==null?void 0:c.assets.length)||0)+j.length+Y.length>10)return $("O negócio pode possuir no máximo 10 imagens.");$(""),E(se=>[...se,...Y])},Ea=async()=>{if(c){me(!0),$("");try{const U=j.length?await Mv(c.id,j,c.assets.length):[],Y={name:x.name.trim(),whatsapp:Ut(x.whatsapp),instagram:Ut(x.instagram),address:Ut(x.address),segment:x.segment.trim(),description:Ut(x.description)};await N2(c.id,Y,U),d({...c,...Y,assets:[...c.assets,...U],updated_at:new Date().toISOString()}),E([]),v(!1)}catch(U){$(U instanceof Error?U.message:"Não foi possível alterar os dados.")}finally{me(!1)}}},za=async U=>{if(U.preventDefault(),!!c){if($(""),!h)return $("Escolha um objetivo para o vídeo.");me(!0);try{const Y=crypto.randomUUID(),Z=Z2(),se=_.length?await b2(Y,_,c.id):[];await E2({id:Y,business_id:c.id,protocol:Z,campaign_objective:h,objective_other:h==="outro"?Ut(L):null,video_idea:H.trim(),uploaded_assets:se,consent:!0,video_format:"vertical_9_16",duration_seconds:20}),ke(Z),window.scrollTo({top:0,behavior:"smooth"})}catch(Y){$(Y instanceof Error?Y.message:"Não foi possível enviar o pedido.")}finally{me(!1)}}};if(u)return s.jsx(Ml,{children:s.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:s.jsx(Qa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})})});if(!c)return s.jsx(Ml,{children:s.jsxs("div",{className:"mx-auto max-w-xl px-5 py-24 text-center",children:[s.jsx("h1",{className:"text-3xl font-black",children:"Negócio não encontrado"}),s.jsx(ht,{to:"/solicitar-video",className:"brand-button brand-button-primary mt-7",children:"Voltar para a pesquisa"})]})});if(Ye)return s.jsx(Qv,{title:"Novo vídeo solicitado",copy:`Recebemos o pedido de ${c.name}. Guarde o protocolo ${Ye}.`,action:s.jsx(ht,{to:"/solicitar-video",className:"brand-button brand-button-primary",children:"Voltar aos negócios"})});const Ne=c.assets[0];return s.jsx(Ml,{children:s.jsxs("main",{className:"mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14",children:[s.jsxs(ht,{to:"/solicitar-video",className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[s.jsx(Io,{className:"h-4 w-4"}),"Voltar para a pesquisa"]}),s.jsxs("section",{className:"mt-6 rounded-2xl border border-white/12 bg-[#0d0f13] p-5 sm:p-8",children:[s.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[s.jsx("div",{className:"flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-black/30",children:Ne?s.jsx("img",{src:In(Ne.path),alt:`Logo de ${c.name}`,className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-9 w-9 text-white/30"})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Negócio cadastrado"}),s.jsx("h1",{className:"mt-2 text-3xl font-black sm:text-5xl",children:c.name}),s.jsxs("p",{className:"mt-2 text-white/50",children:[c.segment,c.address?` · ${c.address}`:""]})]}),s.jsxs("button",{type:"button",onClick:()=>v(!p),className:"brand-button brand-button-outline",children:[s.jsx(qy,{className:"h-4 w-4"}),"Alterar informações"]})]}),p&&s.jsxs("div",{className:"mt-7 border-t border-white/10 pt-7",children:[s.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[s.jsxs("label",{className:`${Na} sm:col-span-2`,children:["Nome do negócio *",s.jsx("input",{required:!0,value:x.name,onChange:U=>y({...x,name:U.target.value}),className:ya})]}),s.jsxs("label",{className:Na,children:["Segmento *",s.jsx("input",{required:!0,value:x.segment,onChange:U=>y({...x,segment:U.target.value}),className:ya})]}),s.jsxs("label",{className:Na,children:["Endereço",s.jsx("input",{value:x.address,onChange:U=>y({...x,address:U.target.value}),className:ya})]}),s.jsxs("label",{className:Na,children:["WhatsApp",s.jsx("input",{value:x.whatsapp,onChange:U=>y({...x,whatsapp:U.target.value}),className:ya})]}),s.jsxs("label",{className:Na,children:["Instagram",s.jsx("input",{maxLength:120,value:x.instagram,onChange:U=>y({...x,instagram:U.target.value}),className:ya,placeholder:"@nomedonegocio"})]})]}),s.jsxs("label",{className:`${Na} mt-5`,children:["Descrição",s.jsx("textarea",{rows:3,value:x.description,onChange:U=>y({...x,description:U.target.value}),className:ya})]}),s.jsx(zu,{files:j,onFiles:Je,onRemove:U=>E(Y=>Y.filter((Z,se)=>se!==U)),title:"Adicionar novas imagens",copy:`Este negócio possui ${c.assets.length} de 10 imagens. Você pode adicionar até 5 por vez.`}),s.jsxs("button",{type:"button",disabled:de,onClick:()=>void Ea(),className:"brand-button brand-button-primary mt-5 disabled:opacity-50",children:[de?s.jsx(Qa,{className:"h-4 w-4 animate-spin"}):null,"Salvar alterações"]})]})]}),s.jsxs("form",{onSubmit:za,className:"brand-panel mt-7 rounded-2xl p-5 sm:p-8",children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Novo pedido"}),s.jsx("h2",{className:"mt-2 text-2xl font-black sm:text-4xl",children:"Solicitar novo vídeo"}),s.jsxs("p",{className:"mt-3 text-sm leading-6 text-white/50",children:["O pedido ficará automaticamente relacionado a ",c.name,"."]}),s.jsxs("fieldset",{className:"mt-8",children:[s.jsx("legend",{className:"text-base font-black",children:"1. Objetivo do vídeo *"}),s.jsx("p",{className:"mt-1 text-sm text-white/45",children:"Escolha apenas uma opção."}),s.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:X2.map(([U,Y])=>s.jsxs("label",{className:`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition ${h===U?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-black/20 hover:border-white/25"}`,children:[s.jsx("input",{required:!0,type:"radio",name:"objective",value:U,checked:h===U,onChange:()=>C(U),className:"h-4 w-4 accent-[#f40b36]"}),Y]},U))}),h==="outro"&&s.jsxs("label",{className:`${Na} mt-4`,children:["Qual?",s.jsx("input",{maxLength:300,value:L,onChange:U=>Q(U.target.value),className:ya,placeholder:"Descreva o outro objetivo"})]})]}),s.jsxs("label",{className:`${Na} mt-8`,children:["2. Escreva brevemente o que deseja no vídeo",s.jsx("textarea",{rows:5,maxLength:2400,value:H,onChange:U=>B(U.target.value),className:ya,placeholder:"Conte sua ideia de forma simples"}),s.jsxs("span",{className:"mt-2 block text-xs font-normal text-white/35",children:[H.length,"/2400 caracteres"]})]}),s.jsx(zu,{files:_,onFiles:ia,onRemove:U=>G(Y=>Y.filter((Z,se)=>se!==U)),title:"3. Imagens adicionais",copy:"Envie somente imagens úteis para este novo vídeo. Máximo de 5 imagens."}),s.jsx(Yv,{checked:I,onChange:ue}),ee&&s.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:ee}),s.jsx("button",{disabled:de,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:de?s.jsxs(s.Fragment,{children:[s.jsx(Qa,{className:"h-4 w-4 animate-spin"}),"Enviando pedido…"]}):s.jsxs(s.Fragment,{children:["Solicitar novo vídeo ",s.jsx(pt,{className:"h-4 w-4"})]})})]})]})})}function zu({files:i,onFiles:c,onRemove:d,title:u,copy:f}){return s.jsxs("div",{className:"mt-7",children:[s.jsx("p",{className:"text-sm font-bold",children:u}),s.jsxs("label",{className:"mt-2 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/20 bg-black/20 px-5 py-7 text-center hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5",children:[s.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp,image/svg+xml",onChange:c,className:"sr-only"}),s.jsx(ly,{className:"h-7 w-7 text-[#ff3155]"}),s.jsx("strong",{className:"mt-3 text-sm",children:"Escolher imagens"}),s.jsx("span",{className:"mt-2 max-w-lg text-xs leading-5 text-white/40",children:f})]}),i.length>0&&s.jsx("ul",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:i.map((p,v)=>s.jsxs("li",{className:"flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[s.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]",children:p.type.startsWith("image/")?s.jsx(Ey,{className:"h-4 w-4"}):s.jsx(my,{className:"h-4 w-4"})}),s.jsx("span",{className:"min-w-0 flex-1 truncate text-xs font-bold",children:p.name}),s.jsx("button",{type:"button",onClick:()=>d(v),"aria-label":`Remover ${p.name}`,className:"rounded-md p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300",children:s.jsx(wv,{className:"h-4 w-4"})})]},`${p.name}-${p.lastModified}-${v}`))})]})}function Yv({checked:i,onChange:c}){return s.jsxs("label",{className:"mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60",children:[s.jsx("input",{required:!0,type:"checkbox",checked:i,onChange:d=>c(d.target.checked),className:"mt-1 h-4 w-4 accent-[#f40b36]"}),"Autorizo a VM MÍDIAS a utilizar as informações e imagens enviadas para produzir os vídeos e entrar em contato."]})}function Qv({title:i,copy:c,action:d}){return s.jsx(Ml,{children:s.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-76px)] max-w-2xl items-center px-5 py-16",children:s.jsxs("section",{className:"w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-8 text-center",children:[s.jsx(ey,{className:"mx-auto h-14 w-14 text-emerald-300"}),s.jsx("h1",{className:"mt-6 text-3xl font-black sm:text-5xl",children:i}),s.jsx("p",{className:"mx-auto mt-4 max-w-lg leading-7 text-white/55",children:c}),s.jsx("div",{className:"mt-8",children:d})]})})})}function P2(){return s.jsxs($1,{children:[s.jsx(ba,{path:"/admin",element:s.jsx(kh,{})}),s.jsx(ba,{path:"/admin/solicitacoes",element:s.jsx(kh,{})}),s.jsx(ba,{path:"/admin/noticias",element:s.jsx(I2,{})}),s.jsx(ba,{path:"/solicitar-video",element:s.jsx(ju,{})}),s.jsx(ba,{path:"/solicitar-video/novo-negocio",element:s.jsx(wu,{})}),s.jsx(ba,{path:"/solicitar-video/negocio/:businessId",element:s.jsx(Ph,{})}),s.jsx(ba,{path:"/solicitar-video/novo-comercio",element:s.jsx(wu,{})}),s.jsx(ba,{path:"/solicitar-video/comercio/:businessId",element:s.jsx(Ph,{})}),s.jsx(ba,{path:"/solicitar-video/novo-cliente",element:s.jsx(wu,{})}),s.jsx(ba,{path:"/solicitar-video/cliente-atual",element:s.jsx(ju,{})}),s.jsx(ba,{path:"/solicitar-arte",element:s.jsx(ju,{})}),s.jsx(ba,{path:"/politica-de-privacidade",element:s.jsx(h2,{})}),s.jsx(ba,{path:"*",element:s.jsx(F2,{})})]})}function F2(){const[i,c]=N.useState(!1),[d,u]=N.useState("DESTAQUE"),[f,p]=N.useState("anual"),v=(x,y)=>{u(x),p(y)};return s.jsxs("div",{className:"min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#F8032D] selection:text-white flex flex-col",children:[s.jsx(e2,{}),s.jsxs("main",{className:"flex-grow",children:[s.jsx(t2,{}),s.jsx(l2,{}),s.jsx(o2,{}),s.jsx(i2,{onSelectPlan:v}),s.jsx(r2,{}),s.jsx(c2,{}),s.jsx(u2,{}),s.jsx(d2,{selectedPlanName:d,selectedPlanCycle:f})]}),s.jsx(m2,{onOpenPrivacyModal:()=>c(!0)}),s.jsx(f2,{}),s.jsx(p2,{isOpen:i,onClose:()=>c(!1)})]})}Fx.createRoot(document.getElementById("root")).render(s.jsx(N.StrictMode,{children:s.jsx(Eb,{children:s.jsx(P2,{})})}));
