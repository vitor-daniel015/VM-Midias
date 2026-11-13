(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function d(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(m){if(m.ep)return;m.ep=!0;const p=d(m);fetch(m.href,p)}})();var gu={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function Yx(){if(yh)return zo;yh=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(u,m,p){var v=null;if(p!==void 0&&(v=""+p),m.key!==void 0&&(v=""+m.key),"key"in m){p={};for(var x in m)x!=="key"&&(p[x]=m[x])}else p=m;return m=p.ref,{$$typeof:i,type:u,key:v,ref:m!==void 0?m:null,props:p}}return zo.Fragment=c,zo.jsx=d,zo.jsxs=d,zo}var Nh;function kx(){return Nh||(Nh=1,gu.exports=Yx()),gu.exports}var s=kx(),xu={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function Qx(){if(Eh)return ne;Eh=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),C=Symbol.for("react.view_transition"),B=Symbol.iterator;function Y(E){return E===null||typeof E!="object"?null:(E=B&&E[B]||E["@@iterator"],typeof E=="function"?E:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,U={};function k(E,q,F){this.props=E,this.context=q,this.refs=U,this.updater=F||L}k.prototype.isReactComponent={},k.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},k.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function V(){}V.prototype=k.prototype;function de(E,q,F){this.props=E,this.context=q,this.refs=U,this.updater=F||L}var ce=de.prototype=new V;ce.constructor=de,H(ce,k.prototype),ce.isPureReactComponent=!0;var Ee=Array.isArray;function ee(){}var $={H:null,A:null,T:null,S:null},Ie=Object.prototype.hasOwnProperty;function W(E,q,F){var J=F.ref;return{$$typeof:i,type:E,key:q,ref:J!==void 0?J:null,props:F}}function re(E,q){return W(E.type,q,E.props)}function oe(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function Ve(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(F){return q[F]})}var Pe=/\/+/g;function me(E,q){return typeof E=="object"&&E!==null&&E.key!=null?Ve(""+E.key):q.toString(36)}function z(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(ee,ee):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function I(E,q,F,J,be){var ye=typeof E;(ye==="undefined"||ye==="boolean")&&(E=null);var Se=!1;if(E===null)Se=!0;else switch(ye){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(E.$$typeof){case i:case c:Se=!0;break;case S:return Se=E._init,I(Se(E._payload),q,F,J,be)}}if(Se)return be=be(E),Se=J===""?"."+me(E,0):J,Ee(be)?(F="",Se!=null&&(F=Se.replace(Pe,"$&/")+"/"),I(be,q,F,"",function(bt){return bt})):be!=null&&(oe(be)&&(be=re(be,F+(be.key==null||E&&E.key===be.key?"":(""+be.key).replace(Pe,"$&/")+"/")+Se)),q.push(be)),1;Se=0;var K=J===""?".":J+":";if(Ee(E))for(var te=0;te<E.length;te++)J=E[te],ye=K+me(J,te),Se+=I(J,q,F,ye,be);else if(te=Y(E),typeof te=="function")for(E=te.call(E),te=0;!(J=E.next()).done;)J=J.value,ye=K+me(J,te++),Se+=I(J,q,F,ye,be);else if(ye==="object"){if(typeof E.then=="function")return I(z(E),q,F,J,be);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Z(E,q,F){if(E==null)return E;var J=[],be=0;return I(E,J,"","",function(ye){return q.call(F,ye,be++)}),J}function fe(E){if(E._status===-1){var q=E._result,F=q();F.then(function(J){(E._status===0||E._status===-1)&&(E._status=1,E._result=J,F.status===void 0&&(F.status="fulfilled",F.value=J))},function(J){(E._status===0||E._status===-1)&&(E._status=2,E._result=J,F.status===void 0&&(F.status="rejected",F.reason=J))}),E._status===-1&&(E._status=0,E._result=F)}if(E._status===1)return E._result.default;throw E._result}var Oe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function Xa(E){var q=$.T,F={};F.types=q!==null?q.types:null,$.T=F;try{var J=E(),be=$.S;be!==null&&be(F,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ee,Oe)}catch(ye){Oe(ye)}finally{q!==null&&F.types!==null&&(q.types=F.types),$.T=q}}function xt(E){var q=$.T;if(q!==null){var F=q.types;F===null?q.types=[E]:F.indexOf(E)===-1&&F.push(E)}else Xa(xt.bind(null,E))}var vn={map:Z,forEach:function(E,q,F){Z(E,function(){q.apply(this,arguments)},F)},count:function(E){var q=0;return Z(E,function(){q++}),q},toArray:function(E){return Z(E,function(q){return q})||[]},only:function(E){if(!oe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ne.Activity=h,ne.Children=vn,ne.Component=k,ne.Fragment=d,ne.Profiler=m,ne.PureComponent=de,ne.StrictMode=u,ne.Suspense=N,ne.ViewTransition=C,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ne.__COMPILER_RUNTIME={__proto__:null,c:function(E){return $.H.useMemoCache(E)}},ne.addTransitionType=xt,ne.cache=function(E){return function(){return E.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(E,q,F){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=H({},E.props),be=E.key;if(q!=null)for(ye in q.key!==void 0&&(be=""+q.key),q)!Ie.call(q,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&q.ref===void 0||(J[ye]=q[ye]);var ye=arguments.length-2;if(ye===1)J.children=F;else if(1<ye){for(var Se=Array(ye),K=0;K<ye;K++)Se[K]=arguments[K+2];J.children=Se}return W(E.type,be,J)},ne.createContext=function(E){return E={$$typeof:v,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},ne.createElement=function(E,q,F){var J,be={},ye=null;if(q!=null)for(J in q.key!==void 0&&(ye=""+q.key),q)Ie.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(be[J]=q[J]);var Se=arguments.length-2;if(Se===1)be.children=F;else if(1<Se){for(var K=Array(Se),te=0;te<Se;te++)K[te]=arguments[te+2];be.children=K}if(E&&E.defaultProps)for(J in Se=E.defaultProps,Se)be[J]===void 0&&(be[J]=Se[J]);return W(E,ye,be)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(E){return{$$typeof:x,render:E}},ne.isValidElement=oe,ne.lazy=function(E){return{$$typeof:S,_payload:{_status:-1,_result:E},_init:fe}},ne.memo=function(E,q){return{$$typeof:j,type:E,compare:q===void 0?null:q}},ne.startTransition=Xa,ne.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ne.use=function(E){return $.H.use(E)},ne.useActionState=function(E,q,F){return $.H.useActionState(E,q,F)},ne.useCallback=function(E,q){return $.H.useCallback(E,q)},ne.useContext=function(E){return $.H.useContext(E)},ne.useDebugValue=function(){},ne.useDeferredValue=function(E,q){return $.H.useDeferredValue(E,q)},ne.useEffect=function(E,q){return $.H.useEffect(E,q)},ne.useEffectEvent=function(E){return $.H.useEffectEvent(E)},ne.useId=function(){return $.H.useId()},ne.useImperativeHandle=function(E,q,F){return $.H.useImperativeHandle(E,q,F)},ne.useInsertionEffect=function(E,q){return $.H.useInsertionEffect(E,q)},ne.useLayoutEffect=function(E,q){return $.H.useLayoutEffect(E,q)},ne.useMemo=function(E,q){return $.H.useMemo(E,q)},ne.useOptimistic=function(E,q){return $.H.useOptimistic(E,q)},ne.useReducer=function(E,q,F){return $.H.useReducer(E,q,F)},ne.useRef=function(E){return $.H.useRef(E)},ne.useState=function(E){return $.H.useState(E)},ne.useSyncExternalStore=function(E,q,F){return $.H.useSyncExternalStore(E,q,F)},ne.useTransition=function(){return $.H.useTransition()},ne.version="19.3.0",ne}var Sh;function Uu(){return Sh||(Sh=1,xu.exports=Qx()),xu.exports}var y=Uu(),bu={exports:{}},Uo={},yu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function Xx(){return Ah||(Ah=1,(function(i){function c(z,I){var Z=z.length;z.push(I);e:for(;0<Z;){var fe=Z-1>>>1,Oe=z[fe];if(0<m(Oe,I))z[fe]=I,z[Z]=Oe,Z=fe;else break e}}function d(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var I=z[0],Z=z.pop();if(Z!==I){z[0]=Z;e:for(var fe=0,Oe=z.length,Xa=Oe>>>1;fe<Xa;){var xt=2*(fe+1)-1,vn=z[xt],E=xt+1,q=z[E];if(0>m(vn,Z))E<Oe&&0>m(q,vn)?(z[fe]=q,z[E]=Z,fe=E):(z[fe]=vn,z[xt]=Z,fe=xt);else if(E<Oe&&0>m(q,Z))z[fe]=q,z[E]=Z,fe=E;else break e}}return I}function m(z,I){var Z=z.sortIndex-I.sortIndex;return Z!==0?Z:z.id-I.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var v=Date,x=v.now();i.unstable_now=function(){return v.now()-x}}var N=[],j=[],S=1,h=null,C=3,B=!1,Y=!1,L=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function de(z){for(var I=d(j);I!==null;){if(I.callback===null)u(j);else if(I.startTime<=z)u(j),I.sortIndex=I.expirationTime,c(N,I);else break;I=d(j)}}function ce(z){if(L=!1,de(z),!Y)if(d(N)!==null)Y=!0,Ee||(Ee=!0,oe());else{var I=d(j);I!==null&&me(ce,I.startTime-z)}}var Ee=!1,ee=-1,$=5,Ie=-1;function W(){return H?!0:!(i.unstable_now()-Ie<$)}function re(){if(H=!1,Ee){var z=i.unstable_now();Ie=z;var I=!0;try{e:{Y=!1,L&&(L=!1,k(ee),ee=-1),B=!0;var Z=C;try{a:{for(de(z),h=d(N);h!==null&&!(h.expirationTime>z&&W());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,C=h.priorityLevel;var Oe=fe(h.expirationTime<=z);if(z=i.unstable_now(),typeof Oe=="function"){h.callback=Oe,de(z),I=!0;break a}h===d(N)&&u(N),de(z)}else u(N);h=d(N)}if(h!==null)I=!0;else{var Xa=d(j);Xa!==null&&me(ce,Xa.startTime-z),I=!1}}break e}finally{h=null,C=Z,B=!1}I=void 0}}finally{I?oe():Ee=!1}}}var oe;if(typeof V=="function")oe=function(){V(re)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Pe=Ve.port2;Ve.port1.onmessage=re,oe=function(){Pe.postMessage(null)}}else oe=function(){U(re,0)};function me(z,I){ee=U(function(){z(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(z){switch(C){case 1:case 2:case 3:var I=3;break;default:I=C}var Z=C;C=I;try{return z()}finally{C=Z}},i.unstable_requestPaint=function(){H=!0},i.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=C;C=z;try{return I()}finally{C=Z}},i.unstable_scheduleCallback=function(z,I,Z){var fe=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,z){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=Z+Oe,z={id:S++,callback:I,priorityLevel:z,startTime:Z,expirationTime:Oe,sortIndex:-1},Z>fe?(z.sortIndex=Z,c(j,z),d(N)===null&&z===d(j)&&(L?(k(ee),ee=-1):L=!0,me(ce,Z-fe))):(z.sortIndex=Oe,c(N,z),Y||B||(Y=!0,Ee||(Ee=!0,oe()))),z},i.unstable_shouldYield=W,i.unstable_wrapCallback=function(z){var I=C;return function(){var Z=C;C=I;try{return z.apply(this,arguments)}finally{C=Z}}}})(Nu)),Nu}var Oh;function Zx(){return Oh||(Oh=1,yu.exports=Xx()),yu.exports}var Eu={exports:{}},ra={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Kx(){if(Th)return ra;Th=1;var i=Uu();function c(S){var h="https://react.dev/errors/"+S;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+S+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal"),p=Symbol.for("react.recoverable"),v=Symbol.for("react.optimistic_key");function x(S,h,C){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:B==null?null:B===v?v:""+B,children:S,containerInfo:h,implementation:C}}var N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(S,h){if(S==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ra.browser=function(S){return{$$typeof:p,_reason:S}},ra.createPortal=function(S,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return x(S,h,null,C)},ra.flushSync=function(S){var h=N.T,C=u.p;try{if(N.T=null,u.p=2,S)return S()}finally{N.T=h,u.p=C,u.d.f()}},ra.preconnect=function(S,h){typeof S=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(S,h))},ra.prefetchDNS=function(S){typeof S=="string"&&u.d.D(S)},ra.preinit=function(S,h){if(typeof S=="string"&&h&&typeof h.as=="string"){var C=h.as,B=j(C,h.crossOrigin),Y=typeof h.integrity=="string"?h.integrity:void 0,L=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?u.d.S(S,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:B,integrity:Y,fetchPriority:L}):C==="script"&&u.d.X(S,{crossOrigin:B,integrity:Y,fetchPriority:L,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ra.preinitModule=function(S,h){if(typeof S=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=j(h.as,h.crossOrigin);u.d.M(S,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}}else h==null&&u.d.M(S)},ra.preload=function(S,h){if(typeof S=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,B=j(C,h.crossOrigin);u.d.L(S,C,{crossOrigin:B,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ra.preloadModule=function(S,h){if(typeof S=="string")if(h){var C=j(h.as,h.crossOrigin);u.d.m(S,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0})}else u.d.m(S)},ra.requestFormReset=function(S){u.d.r(S)},ra.unstable_batchedUpdates=function(S,h){return S(h)},ra.useFormState=function(S,h,C){return N.H.useFormState(S,h,C)},ra.useFormStatus=function(){return N.H.useHostTransitionStatus()},ra.version="19.3.0",ra}var jh;function Px(){if(jh)return Eu.exports;jh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Eu.exports=Kx(),Eu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh;function Fx(){if(wh)return Uo;wh=1;var i=Zx(),c=Uu(),d=Px();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){for(var a=e,t=a;t&&!t.alternate;)a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;for(;a.return;)a=a.return;return a.tag===3?e:null}function v(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function x(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function N(e){if(p(e)!==e)throw Error(u(188))}function j(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(u(188));return a!==e?null:e}for(var t=e,n=a;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){t=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return N(l),e;if(o===n)return N(l),a;o=o.sibling}throw Error(u(188))}if(t.return!==n.return)t=l,n=o;else{for(var r=!1,f=l.child;f;){if(f===t){r=!0,t=l,n=o;break}if(f===n){r=!0,n=l,t=o;break}f=f.sibling}if(!r){for(f=o.child;f;){if(f===t){r=!0,t=o,n=l;break}if(f===n){r=!0,n=o,t=l;break}f=f.sibling}if(!r)throw Error(u(189))}}if(t.alternate!==n)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:a}function S(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=S(e),a!==null)return a;e=e.sibling}return null}function h(e,a,t,n,l,o){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&t(e,n,l,o)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&h(e.child,a,t,n,l,o))return!0;e=e.sibling}return!1}function C(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function B(e){var a=!1;for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return a}function Y(e){var a=[null,null],t=C(e);return t===null||L(a,e,t.child,{foundSelf:!1}),a}function L(e,a,t,n){for(;t!==null;){if(t===a)n.foundSelf=!0;else if(t.tag===5||t.tag===27||t.tag===6){if(n.foundSelf)return e[1]=t,!0;e[0]=t}else if((t.tag!==22||t.memoizedState===null)&&L(e,a,t.child,n))return!0;t=t.sibling}return!1}function H(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(u(559))}}var U=null,k=null;function V(e,a,t){return e===t?!0:e===a?(U=e,!0):!1}function de(e,a,t){return e===t?(k=e,!1):e===a?(k!==null&&(U=e),!0):!1}function ce(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Ee(e,a,t){for(var n=0,l=e;l;l=t(l))n++;l=0;for(var o=a;o;o=t(o))l++;for(;0<n-l;)e=t(e),n--;for(;0<l-n;)a=t(a),l--;for(;n--;){if(e===a||a!==null&&e===a.alternate)return e;e=t(e),a=t(a)}return null}var ee=Object.assign,$=Symbol.for("react.element"),Ie=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),me=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Xa=Symbol.for("react.activity"),xt=Symbol.for("react.legacy_hidden"),vn=Symbol.for("react.memo_cache_sentinel"),E=Symbol.for("react.view_transition"),q=Symbol.for("react.recoverable"),F=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case re:return"Fragment";case Ve:return"Profiler";case oe:return"StrictMode";case I:return"Suspense";case Z:return"SuspenseList";case Xa:return"Activity";case E:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case me:return e.displayName||"Context";case Pe:return(e._context.displayName||"Context")+".Consumer";case z:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return a=e.displayName||null,a!==null?a:ye(e.type)||"Memo";case Oe:a=e._payload,e=e._init;try{return ye(e(a))}catch{}}return null}var Se=Array.isArray,K=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,bt={pending:!1,data:null,method:null,action:null},qs=[],Vn=-1;function et(e){return{current:e}}function aa(e){0>Vn||(e.current=qs[Vn],qs[Vn]=null,Vn--)}function _e(e,a){Vn++,qs[Vn]=e.current,e.current=a}var at=et(null),Bl=et(null),Ht=et(null),Xo=et(null);function Zo(e,a){switch(_e(Ht,a),_e(Bl,e),_e(at,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Rp(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Rp(a),e=Cp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}aa(at),_e(at,e)}function Yn(){aa(at),aa(Bl),aa(Ht)}function Ls(e){var a=e.memoizedState;a!==null&&(Cl._currentValue=a.memoizedState,_e(Xo,e)),a=at.current;var t=Cp(a,e.type);a!==t&&(_e(Bl,e),_e(at,t))}function Ko(e){Bl.current===e&&(aa(at),aa(Bl)),Xo.current===e&&(aa(Xo),Cl._currentValue=bt)}var Hs,Pu;function Bt(e){if(Hs===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Hs=a&&a[1]||"",Pu=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hs+e+Pu}var Bs=!1;function Gs(e,a){if(!e||Bs)return"";Bs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(G){var A=G}Reflect.construct(e,[],M)}else{try{M.call()}catch(G){A=G}M=!1;try{var R=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),M=!0,new e}finally{M&&(R!==void 0?Object.defineProperty(e.prototype,"props",R):delete e.prototype.props)}}}else{try{throw Error()}catch(G){A=G}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(G){if(G&&A&&typeof G.stack=="string")return[G.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),r=o[0],f=o[1];if(r&&f){var g=r.split(`
`),T=f.split(`
`);for(l=n=0;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;for(;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;if(n===g.length||l===T.length)for(n=g.length-1,l=T.length-1;1<=n&&0<=l&&g[n]!==T[l];)l--;for(;1<=n&&0<=l;n--,l--)if(g[n]!==T[l]){if(n!==1||l!==1)do if(n--,l--,0>l||g[n]!==T[l]){var D=`
`+g[n].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=n&&0<=l);break}}}finally{Bs=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Bt(t):""}function Zv(e,a){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return e.child!==a&&a!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Gs(e.type,!1);case 11:return Gs(e.type.render,!1);case 1:return Gs(e.type,!0);case 31:return Bt("Activity");case 30:return Bt("ViewTransition");default:return""}}function Fu(e){try{var a="",t=null;do a+=Zv(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Is=Object.prototype.hasOwnProperty,Vs=i.unstable_scheduleCallback,Ys=i.unstable_cancelCallback,Kv=i.unstable_shouldYield,Pv=i.unstable_requestPaint,Oa=i.unstable_now,Fv=i.unstable_getCurrentPriorityLevel,Ju=i.unstable_ImmediatePriority,$u=i.unstable_UserBlockingPriority,Po=i.unstable_NormalPriority,Jv=i.unstable_LowPriority,Wu=i.unstable_IdlePriority,$v=i.log,Wv=i.unstable_setDisableYieldValue,Gl=null,Ta=null;function Gt(e){if(typeof $v=="function"&&Wv(e),Ta&&typeof Ta.setStrictMode=="function")try{Ta.setStrictMode(Gl,e)}catch{}}var ja=Math.clz32?Math.clz32:t0,e0=Math.log,a0=Math.LN2;function t0(e){return e>>>=0,e===0?32:31-(e0(e)/a0|0)|0}var Fo=256,Jo=262144,$o=4194304;function gn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wo(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~o,n!==0?l=gn(n):(r&=f,r!==0?l=gn(r):t||(t=f&~e,t!==0&&(l=gn(t))))):(f=n&~o,f!==0?l=gn(f):r!==0?l=gn(r):t||(t=n&~e,t!==0&&(l=gn(t)))),l===0?0:a!==0&&a!==l&&(a&o)===0&&(o=l&-l,t=a&-a,o>=t||o===32&&(t&4194048)!==0)?a:l}function Il(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function ed(e,a){(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-ja(t),l=1<<n;a|=e[n],t&=~l}return a}function n0(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var e=$o;return $o<<=1,($o&62914560)===0&&($o=4194304),e}function ks(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Vl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function l0(e,a,t,n,l,o){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,T=e.hiddenUpdates;for(t=r&~t;0<t;){var D=31-ja(t),M=1<<D;f[D]=0,g[D]=-1;var A=T[D];if(A!==null)for(T[D]=null,D=0;D<A.length;D++){var R=A[D];R!==null&&(R.lane&=-536870913)}t&=~M}n!==0&&td(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(r&~a))}function td(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-ja(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function nd(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-ja(t),l=1<<n;l&a|e[n]&a&&(e[n]|=a),t&=~l}}function ld(e,a){var t=a&-a;return t=(t&42)!==0?1:Qs(t),(t&(e.suspendedLanes|a))!==0?0:t}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function od(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:fh(e.type))}function id(e,a){var t=te.p;try{return te.p=e,a()}finally{te.p=t}}var yt=Math.random().toString(36).slice(2),ta="__reactFiber$"+yt,ha="__reactProps$"+yt,kn="__reactContainer$"+yt,sd="__reactEvents$"+yt,o0="__reactListeners$"+yt,i0="__reactHandles$"+yt,rd="__reactResources$"+yt,Yl="__reactMarker$"+yt,ei="__reactLoad$"+yt;function ai(e){delete e[ta],delete e[ha],delete e[o0],delete e[i0]}function xn(e){var a;if(a=e[ta])return a;for(var t=e.parentNode;t;){if(a=t[kn]||t[ta]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Zp(e);e!==null;){if(t=e[ta])return t;e=Zp(e)}return a}e=t,t=e.parentNode}return null}function Qn(e){if(e=e[ta]||e[kn]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function kl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function Xn(e){var a=e[rd];return a||(a=e[rd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Fe(e){e[Yl]=!0}function cd(e){e[ei]=void 0}var ud=new Set,dd={};function bn(e,a){Zn(e,a),Zn(e+"Capture",a)}function Zn(e,a){for(dd[e]=a,e=0;e<a.length;e++)ud.add(a[e])}var s0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),md={},fd={};function r0(e){return Is.call(fd,e)?!0:Is.call(md,e)?!1:s0.test(e)?fd[e]=!0:(md[e]=!0,!1)}var Ne=!1;function pd(){var e=Ne;return Ne=!1,e}function ti(e,a,t){if(r0(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,t)}}function ni(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,t)}}function Nt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,n)}}function wa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function c0(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return l.call(this)},set:function(r){t=""+r,o.call(this,r)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Zs(e){if(!e._valueTracker){var a=hd(e)?"checked":"value";e._valueTracker=c0(e,a,""+e[a])}}function vd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=hd(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}var u0=/[\n"\\]/g;function qa(e){return e.replace(u0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ks(e,a,t,n,l,o,r,f){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),a!=null?r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+wa(a)):e.value!==""+wa(a)&&(e.value=""+wa(a)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),a!=null?r==="number"&&e.value==a?Ps(e,wa(e.value)):Ps(e,wa(a)):t!=null?Ps(e,wa(t)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+wa(f):e.removeAttribute("name")}function gd(e,a,t,n,l,o,r,f){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),a!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||a!=null)){Zs(e);return}t=t!=null?""+wa(t):"",a=a!=null?""+wa(a):t,f||a===e.value||(e.value=a),e.defaultValue=a}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Zs(e)}function Ps(e,a){e.defaultValue!==""+a&&(e.defaultValue=""+a)}function Kn(e,a,t,n){if(e=e.options,a){a={};for(var l=0;l<t.length;l++)a["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=a.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&n&&(e[t].defaultSelected=!0)}else{for(t=""+wa(t),a=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}a!==null||e[l].disabled||(a=e[l])}a!==null&&(a.selected=!0)}}function xd(e,a,t){if(a!=null&&(a=""+wa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+wa(t):""}function bd(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(u(92));if(Se(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=wa(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Zs(e)}function Pn(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var d0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||d0.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Nd(e,a,t){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",Ne=!0);for(var l in a)n=a[l],a.hasOwnProperty(l)&&t[l]!==n&&(yd(e,l,n),Ne=!0)}else for(var o in a)a.hasOwnProperty(o)&&yd(e,o,a[o])}function Fs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var m0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),f0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function li(e){return f0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tt(){}var Js=null;function $s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Jn=null;function Ed(e){var a=Qn(e);if(a&&(e=a.stateNode)){var t=e[ha]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ks(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+qa(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var l=n[ha]||null;if(!l)throw Error(u(90));Ks(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&vd(n)}break e;case"textarea":xd(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Kn(e,!!t.multiple,a,!1)}}}var Ws=!1;function Sd(e,a,t){if(Ws)return e(a,t);Ws=!0;try{var n=e(a);return n}finally{if(Ws=!1,(Fn!==null||Jn!==null)&&(ls(),Fn&&(a=Fn,e=Jn,Jn=Fn=null,Ed(a),e)))for(a=0;a<e.length;a++)Ed(e[a])}}function Ql(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ha]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,a,typeof t));return t}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(Et)try{var Xl={};Object.defineProperty(Xl,"passive",{get:function(){er=!0}}),window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{er=!1}var It=null,ar=null,oi=null;function Ad(){if(oi)return oi;var e,a=ar,t=a.length,n,l="value"in It?It.value:It.textContent,o=l.length;for(e=0;e<t&&a[e]===l[e];e++);var r=t-e;for(n=1;n<=r&&a[t-n]===l[o-n];n++);return oi=l.slice(e,1<n?1-n:void 0)}function ii(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function Od(){return!1}function da(e){function a(t,n,l,o,r){this._reactName=t,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=r,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?si:Od,this.isPropagationStopped=Od,this}return ee(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),a}var Vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=da(Vt),Zl=ee({},Vt,{view:0,detail:0}),p0=da(Zl),tr,nr,Kl,ci=ee({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(tr=e.screenX-Kl.screenX,nr=e.screenY-Kl.screenY):nr=tr=0,Kl=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:nr}}),Td=da(ci),h0=ee({},ci,{dataTransfer:0}),v0=da(h0),g0=ee({},Zl,{relatedTarget:0}),lr=da(g0),x0=ee({},Vt,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=da(x0),y0=ee({},Vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N0=da(y0),E0=ee({},Vt,{data:0}),jd=da(E0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=O0[e])?!!a[e]:!1}function or(){return T0}var j0=ee({},Zl,{key:function(e){if(e.key){var a=S0[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=da(j0),R0=ee({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=da(R0),C0=ee({},Vt,{submitter:0}),D0=da(C0),_0=ee({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),M0=da(_0),z0=ee({},Vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=da(z0),q0=ee({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=da(q0),H0=ee({},Vt,{newState:0,oldState:0,source:0}),B0=da(H0),G0=[9,13,27,32],ir=Et&&"CompositionEvent"in window,Pl=null;Et&&"documentMode"in document&&(Pl=document.documentMode);var I0=Et&&"TextEvent"in window&&!Pl,Rd=Et&&(!ir||Pl&&8<Pl&&11>=Pl),Cd=" ",Dd=!1;function _d(e,a){switch(e){case"keyup":return G0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function V0(e,a){switch(e){case"compositionend":return Md(a);case"keypress":return a.which!==32?null:(Dd=!0,Cd);case"textInput":return e=a.data,e===Cd&&Dd?null:e;default:return null}}function Y0(e,a){if($n)return e==="compositionend"||!ir&&_d(e,a)?(e=Ad(),oi=ar=It=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Rd&&a.locale!=="ko"?null:a.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!k0[e.type]:a==="textarea"}function Ud(e,a,t,n){Fn?Jn?Jn.push(n):Jn=[n]:Fn=n,a=us(a,"onChange"),0<a.length&&(t=new ri("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var Fl=null,Jl=null;function Q0(e){Sp(e,0)}function ui(e){var a=kl(e);if(vd(a))return e}function qd(e,a){if(e==="change")return a}var Ld=!1;if(Et){var sr;if(Et){var rr="oninput"in document;if(!rr){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),rr=typeof Hd.oninput=="function"}sr=rr}else sr=!1;Ld=sr&&(!document.documentMode||9<document.documentMode)}function Bd(){Fl&&(Fl.detachEvent("onpropertychange",Gd),Jl=Fl=null)}function Gd(e){if(e.propertyName==="value"&&ui(Jl)){var a=[];Ud(a,Jl,e,$s(e)),Sd(Q0,a)}}function X0(e,a,t){e==="focusin"?(Bd(),Fl=a,Jl=t,Fl.attachEvent("onpropertychange",Gd)):e==="focusout"&&Bd()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(Jl)}function K0(e,a){if(e==="click")return ui(a)}function P0(e,a){if(e==="input"||e==="change")return ui(a)}function F0(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ra=typeof Object.is=="function"?Object.is:F0;function $l(e,a){if(Ra(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var l=t[n];if(!Is.call(a,l)||!Ra(e[l],a[l]))return!1}return!0}function cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,a){var t=Id(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Id(t)}}function Yd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Yd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=cr(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=cr(e.document)}return a}function ur(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var J0=Et&&"documentMode"in document&&11>=document.documentMode,Wn=null,dr=null,Wl=null,mr=!1;function Qd(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mr||Wn==null||Wn!==cr(n)||(n=Wn,"selectionStart"in n&&ur(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wl&&$l(Wl,n)||(Wl=n,n=us(dr,"onSelect"),0<n.length&&(a=new ri("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=Wn)))}function yn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var el={animationend:yn("Animation","AnimationEnd"),animationiteration:yn("Animation","AnimationIteration"),animationstart:yn("Animation","AnimationStart"),transitionrun:yn("Transition","TransitionRun"),transitionstart:yn("Transition","TransitionStart"),transitioncancel:yn("Transition","TransitionCancel"),transitionend:yn("Transition","TransitionEnd")},fr={},Xd={};Et&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Nn(e){if(fr[e])return fr[e];if(!el[e])return e;var a=el[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Xd)return fr[e]=a[t];return e}var Zd=Nn("animationend"),Kd=Nn("animationiteration"),Pd=Nn("animationstart"),$0=Nn("transitionrun"),W0=Nn("transitionstart"),eg=Nn("transitioncancel"),Fd=Nn("transitionend"),Jd=new Map,pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pr.push("scrollEnd");function Za(e,a){Jd.set(e,a),bn(a,[e])}var ag=0;function St(e,a){if(e.name!=null&&e.name!=="auto")return e.name;if(a.autoName!==null)return a.autoName;e=Ja.identifierPrefix;var t=ag++;return e="_"+e+"t_"+t.toString(32)+"_",a.autoName=e}function $d(e){if(e==null||typeof e=="string")return e;var a=null,t=yl;if(t!==null)for(var n=0;n<t.length;n++){var l=e[t[n]];if(l!=null){if(l==="none")return"none";a=a==null?l:a+(" "+l)}}return a??e.default}function At(e,a){return e=$d(e),a=$d(a),a==null?e==="auto"?null:e:a==="auto"?null:a}var di=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},La=[],al=0,hr=0;function mi(){for(var e=al,a=hr=al=0;a<e;){var t=La[a];La[a++]=null;var n=La[a];La[a++]=null;var l=La[a];La[a++]=null;var o=La[a];if(La[a++]=null,n!==null&&l!==null){var r=n.pending;r===null?l.next=l:(l.next=r.next,r.next=l),n.pending=l}o!==0&&Wd(t,l,o)}}function fi(e,a,t,n){La[al++]=e,La[al++]=a,La[al++]=t,La[al++]=n,hr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function vr(e,a,t,n){return fi(e,a,t,n),pi(e)}function En(e,a){return fi(e,null,null,a),pi(e)}function Wd(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,n=o.alternate,n!==null&&(n.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&a!==null&&(l=31-ja(t),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[a]:n.push(a),a.lane=t|536870912),o):null}function pi(e){if(50<Eo)throw Eo=0,ns=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var tl={};function tg(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function va(e,a,t,n){return new tg(e,a,t,n)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,a){var t=e.alternate;return t===null?(t=va(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function em(e,a){e.flags&=1206910978;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function hi(e,a,t,n,l,o){var r=0;if(n=e,typeof n=="function")gr(n)&&(r=1);else if(typeof n=="string")r=Cx(e,t,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case Xa:return e=va(31,t,a,l),e.elementType=Xa,e.lanes=o,e;case re:return Sn(t.children,l,o,a);case oe:r=8,l|=24;break;case Ve:return e=va(12,t,a,l|2),e.elementType=Ve,e.lanes=o,e;case I:return e=va(13,t,a,l),e.elementType=I,e.lanes=o,e;case Z:return e=va(19,t,a,l),e.elementType=Z,e.lanes=o,e;case xt:case E:return e=l|32,e=va(30,t,a,e),e.elementType=E,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case me:r=10;break e;case Pe:r=9;break e;case z:r=11;break e;case fe:r=14;break e;case Oe:r=16,n=null;break e}r=29,t=Error(u(130,e===null?"null":typeof e,"")),n=null}return a=va(r,t,a,l),a.elementType=e,a.type=n,a.lanes=o,a}function Sn(e,a,t,n){return e=va(7,e,n,a),e.lanes=t,e}function xr(e,a,t){return e=va(6,e,null,a),e.lanes=t,e}function am(e){var a=va(18,null,null,0);return a.stateNode=e,a}function br(e,a,t){return a=va(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var tm=new WeakMap;function Ha(e,a){if(typeof e=="object"&&e!==null){var t=tm.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Fu(a)},tm.set(e,a),a)}return{value:e,source:a,stack:Fu(a)}}var nl=[],ll=0,vi=null,eo=0,Ba=[],Ga=0,Yt=null,nt=1,lt="";function Tt(e,a){nl[ll++]=eo,nl[ll++]=vi,vi=e,eo=a}function nm(e,a,t){Ba[Ga++]=nt,Ba[Ga++]=lt,Ba[Ga++]=Yt,Yt=e;var n=nt;e=lt;var l=32-ja(n)-1;n&=~(1<<l),t+=1;var o=32-ja(a)+l;if(30<o){var r=l-l%5;o=(n&(1<<r)-1).toString(32),n>>=r,l-=r,nt=1<<32-ja(a)+l|t<<l|n,lt=o+e}else nt=1<<o|t<<l|n,lt=e}function gi(e){e.return!==null&&(Tt(e,1),nm(e,1,0))}function yr(e){for(;e===vi;)vi=nl[--ll],nl[ll]=null,eo=nl[--ll],nl[ll]=null;for(;e===Yt;)Yt=Ba[--Ga],Ba[Ga]=null,lt=Ba[--Ga],Ba[Ga]=null,nt=Ba[--Ga],Ba[Ga]=null}function lm(e,a){Ba[Ga++]=nt,Ba[Ga++]=lt,Ba[Ga++]=Yt,nt=a.id,lt=a.overflow,Yt=e}var Je=null,Me=null,ue=!1,kt=null,Ia=!1,Nr=Error(u(519));function Qt(e){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(Ha(a,e)),Nr}function om(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[ta]=e,a[ha]=n,t){case"dialog":he("cancel",a),he("close",a);break;case"iframe":case"object":case"embed":he("load",a);break;case"video":case"audio":for(t=0;t<Ao.length;t++)he(Ao[t],a);break;case"source":he("error",a);break;case"img":case"image":case"link":he("error",a),he("load",a);break;case"details":he("toggle",a);break;case"input":he("invalid",a),gd(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":he("invalid",a);break;case"textarea":he("invalid",a),bd(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||jp(a.textContent,t)?(n.popover!=null&&(he("beforetoggle",a),he("toggle",a)),n.onScroll!=null&&he("scroll",a),n.onScrollEnd!=null&&he("scrollend",a),n.onClick!=null&&(a.onclick=tt),a=!0):a=!1,a||Qt(e,!0)}function xi(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Ia=!1;return;case 27:case 3:Ia=!0;return;default:Je=Je.return}}function ol(e){if(e!==Je)return!1;if(!ue)return xi(e),ue=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Jc(e.type,e.memoizedProps)),t=!t),t&&Me&&Qt(e),xi(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=Xp(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=Xp(e)}else a===27?(a=Me,rn(e.type)?(e=iu,iu=null,Me=e):Me=a):Me=Je?Ya(e.stateNode.nextSibling):null;return!0}function An(){Me=Je=null,ue=!1}function Er(){var e=kt;return e!==null&&(ba===null?ba=e:ba.push.apply(ba,e),kt=null),e}function ao(e){kt===null?kt=[e]:kt.push(e)}var Sr=et(null),On=null,jt=null;function Xt(e,a,t){_e(Sr,a._currentValue),a._currentValue=t}function wt(e){e._currentValue=Sr.current,aa(Sr)}function bi(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Ar(e,a,t,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var r=l.child;o=o.firstContext;e:for(;o!==null;){var f=o;o=l;for(var g=0;g<a.length;g++)if(f.context===a[g]){o.lanes|=t,f=o.alternate,f!==null&&(f.lanes|=t),bi(o.return,t,e),n||(r=null);break e}o=f.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(u(341));r.lanes|=t,o=r.alternate,o!==null&&(o.lanes|=t),bi(r,t,e),r=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=t,r=l.alternate,r!==null&&(r.lanes|=t),bi(l.return,t,e),r=l.child,r=r!==null?r.sibling:null):r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Tn(e,a,t,n){e=null;for(var l=a,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var f=l.type;Ra(l.pendingProps.value,r.value)||(e!==null?e.push(f):e=[f])}}else if(l===Xo.current){if(r=l.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Cl):e=[Cl])}l=l.return}return e!==null&&Ar(a,e,t,n),a.flags|=262144,e!==null}function yi(e){for(e=e.firstContext;e!==null;){if(!Ra(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jn(e){On=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return im(On,e)}function Ni(e,a){return On===null&&jn(e),im(e,a)}function im(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},jt===null){if(e===null)throw Error(u(308));jt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else jt=jt.next=a;return t}var ng=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},lg=i.unstable_scheduleCallback,og=i.unstable_NormalPriority,ke={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Or(){return{controller:new ng,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&lg(og,function(){e.controller.abort()})}function sm(e,a){if((e.pendingLanes&4194048)!==0){var t=e.transitionTypes;for(t===null&&(t=e.transitionTypes=[]),e=0;e<a.length;e++){var n=a[e];t.indexOf(n)===-1&&t.push(n)}}}var no=null;function ig(e){var a=e.transitionTypes;return e.transitionTypes=null,a}var lo=null,Tr=0,wn=0,il=null;function sg(e,a){if(lo===null){var t=lo=[];Tr=0,wn=Vc(),il={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Tr++,a.then(rm,rm),a}function rm(){if(--Tr===0&&(no=null,lo!==null)){il!==null&&(il.status="fulfilled");var e=lo;lo=null,wn=0,il=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function rg(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var l=0;l<t.length;l++)(0,t[l])(a)},function(l){for(n.status="rejected",n.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),n}var cm=K.S;K.S=function(e,a){if(tp=Oa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&sg(e,a),no!==null)for(var t=Al;t!==null;)sm(t,no),t=t.next;if(t=e.types,t!==null){for(var n=Al;n!==null;)sm(n,t),n=n.next;if(wn!==0){n=no,n===null&&(n=no=[]);for(var l=0;l<t.length;l++){var o=t[l];n.indexOf(o)===-1&&n.push(o)}}}cm!==null&&cm(e,a)};var Rn=et(null);function jr(){var e=Rn.current;return e!==null?e:De.pooledCache}function Ei(e,a){a===null?_e(Rn,Rn.current):_e(Rn,a.pool)}function um(){var e=jr();return e===null?null:{parent:ke._currentValue,pool:e}}var sl=Error(u(460)),wr=Error(u(474)),Si=Error(u(542)),Ai={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mm(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(tt,tt),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,pm(e),e===void 0&&!("reason"in a)?Error(u(600)):e;default:if(typeof a.status=="string")a.then(tt,tt);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var l=a;l.status="fulfilled",l.value=n}},function(n){if(a.status==="pending"){var l=a;l.status="rejected",l.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,pm(e),e}throw Dn=a,sl}}function Cn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Dn=t,sl):t}}var Dn=null;function fm(){if(Dn===null)throw Error(u(459));var e=Dn;return Dn=null,e}function pm(e){if(e===sl||e===Si)throw Error(u(483))}var rl=null,oo=0;function Oi(e){var a=oo;return oo+=1,rl===null&&(rl=[]),mm(rl,e,a)}function Zt(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ti(e,a){throw a.$$typeof===$?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function hm(e){function a(O,b){if(e){var w=O.deletions;w===null?(O.deletions=[b],O.flags|=16):w.push(b)}}function t(O,b){if(!e)return null;for(;b!==null;)a(O,b),b=b.sibling;return null}function n(O){for(var b=new Map;O!==null;)O.key===null?b.set(O.index,O):b.set(O.key,O),O=O.sibling;return b}function l(O,b){return O=Ot(O,b),O.index=0,O.sibling=null,O}function o(O,b,w){return O.index=w,e?(w=O.alternate,w!==null?(w=w.index,w<b?(O.flags|=2,b):w):(O.flags|=134217730,b)):(O.flags|=1048576,b)}function r(O){return e&&O.alternate===null&&(O.flags|=134217730),O}function f(O,b,w,_){return b===null||b.tag!==6?(b=xr(w,O.mode,_),b.return=O,b):(b=l(b,w),b.return=O,b)}function g(O,b,w,_){var Q=w.type;return Q===re?(O=D(O,b,w.props.children,_,w.key),Zt(O,w),O):b!==null&&(b.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Oe&&Cn(Q)===b.type)?(b=l(b,w.props),Zt(b,w),b.return=O,b):(b=hi(w.type,w.key,w.props,null,O.mode,_),Zt(b,w),b.return=O,b)}function T(O,b,w,_){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=br(w,O.mode,_),b.return=O,b):(b=l(b,w.children||[]),b.return=O,b)}function D(O,b,w,_,Q){return b===null||b.tag!==7?(b=Sn(w,O.mode,_,Q),b.return=O,b):(b=l(b,w),b.return=O,b)}function M(O,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=xr(""+b,O.mode,w),b.return=O,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ie:return w=hi(b.type,b.key,b.props,null,O.mode,w),Zt(w,b),w.return=O,w;case W:return b=br(b,O.mode,w),b.return=O,b;case Oe:return b=Cn(b),M(O,b,w)}if(Se(b)||J(b))return b=Sn(b,O.mode,w,null),b.return=O,b;if(typeof b.then=="function")return M(O,Oi(b),w);if(b.$$typeof===me)return M(O,Ni(O,b),w);Ti(O,b)}return null}function A(O,b,w,_){var Q=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return Q!==null?null:f(O,b,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ie:return w.key===Q?g(O,b,w,_):null;case W:return w.key===Q?T(O,b,w,_):null;case Oe:return w=Cn(w),A(O,b,w,_)}if(Se(w)||J(w))return Q!==null?null:D(O,b,w,_,null);if(typeof w.then=="function")return A(O,b,Oi(w),_);if(w.$$typeof===me)return A(O,b,Ni(O,w),_);Ti(O,w)}return null}function R(O,b,w,_,Q){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return O=O.get(w)||null,f(b,O,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ie:return O=O.get(_.key===null?w:_.key)||null,g(b,O,_,Q);case W:return O=O.get(_.key===null?w:_.key)||null,T(b,O,_,Q);case Oe:return _=Cn(_),R(O,b,w,_,Q)}if(Se(_)||J(_))return O=O.get(w)||null,D(b,O,_,Q,null);if(typeof _.then=="function")return R(O,b,w,Oi(_),Q);if(_.$$typeof===me)return R(O,b,w,Ni(b,_),Q);Ti(b,_)}return null}function G(O,b,w,_){for(var Q=null,ge=null,P=b,ae=b=0,Ze=null;P!==null&&ae<w.length;ae++){P.index>ae?(Ze=P,P=null):Ze=P.sibling;var xe=A(O,P,w[ae],_);if(xe===null){P===null&&(P=Ze);break}e&&P&&xe.alternate===null&&a(O,P),b=o(xe,b,ae),ge===null?Q=xe:ge.sibling=xe,ge=xe,P=Ze}if(ae===w.length)return t(O,P),ue&&Tt(O,ae),Q;if(P===null){for(;ae<w.length;ae++)P=M(O,w[ae],_),P!==null&&(b=o(P,b,ae),ge===null?Q=P:ge.sibling=P,ge=P);return ue&&Tt(O,ae),Q}for(P=n(P);ae<w.length;ae++)Ze=R(P,O,ae,w[ae],_),Ze!==null&&(e&&(xe=Ze.alternate,xe!==null&&P.delete(xe.key===null?ae:xe.key)),b=o(Ze,b,ae),ge===null?Q=Ze:ge.sibling=Ze,ge=Ze);return e&&P.forEach(function(fn){return a(O,fn)}),ue&&Tt(O,ae),Q}function X(O,b,w,_){if(w==null)throw Error(u(151));for(var Q=null,ge=null,P=b,ae=b=0,Ze=null,xe=w.next();P!==null&&!xe.done;ae++,xe=w.next()){P.index>ae?(Ze=P,P=null):Ze=P.sibling;var fn=A(O,P,xe.value,_);if(fn===null){P===null&&(P=Ze);break}e&&P&&fn.alternate===null&&a(O,P),b=o(fn,b,ae),ge===null?Q=fn:ge.sibling=fn,ge=fn,P=Ze}if(xe.done)return t(O,P),ue&&Tt(O,ae),Q;if(P===null){for(;!xe.done;ae++,xe=w.next())xe=M(O,xe.value,_),xe!==null&&(b=o(xe,b,ae),ge===null?Q=xe:ge.sibling=xe,ge=xe);return ue&&Tt(O,ae),Q}for(P=n(P);!xe.done;ae++,xe=w.next())xe=R(P,O,ae,xe.value,_),xe!==null&&(e&&(Ze=xe.alternate,Ze!==null&&P.delete(Ze.key===null?ae:Ze.key)),b=o(xe,b,ae),ge===null?Q=xe:ge.sibling=xe,ge=xe);return e&&P.forEach(function(Vx){return a(O,Vx)}),ue&&Tt(O,ae),Q}function se(O,b,w,_){if(typeof w=="object"&&w!==null&&w.type===re&&w.key===null&&w.props.ref===void 0&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ie:e:{for(var Q=w.key;b!==null;){if(b.key===Q){if(Q=w.type,Q===re){if(b.tag===7){t(O,b.sibling),_=l(b,w.props.children),Zt(_,w),_.return=O,O=_;break e}}else if(b.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Oe&&Cn(Q)===b.type){t(O,b.sibling),_=l(b,w.props),Zt(_,w),_.return=O,O=_;break e}t(O,b);break}else a(O,b);b=b.sibling}w.type===re?(_=Sn(w.props.children,O.mode,_,w.key),Zt(_,w),_.return=O,O=_):(_=hi(w.type,w.key,w.props,null,O.mode,_),Zt(_,w),_.return=O,O=_)}return r(O);case W:e:{for(Q=w.key;b!==null;){if(b.key===Q)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){t(O,b.sibling),_=l(b,w.children||[]),_.return=O,O=_;break e}else{t(O,b);break}else a(O,b);b=b.sibling}_=br(w,O.mode,_),_.return=O,O=_}return r(O);case Oe:return w=Cn(w),se(O,b,w,_)}if(Se(w))return G(O,b,w,_);if(J(w)){if(Q=J(w),typeof Q!="function")throw Error(u(150));return w=Q.call(w),X(O,b,w,_)}if(typeof w.then=="function")return se(O,b,Oi(w),_);if(w.$$typeof===me)return se(O,b,Ni(O,w),_);Ti(O,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,b!==null&&b.tag===6?(t(O,b.sibling),_=l(b,w),_.return=O,O=_):(t(O,b),_=xr(w,O.mode,_),_.return=O,O=_),r(O)):t(O,b)}return function(O,b,w,_){try{oo=0;var Q=se(O,b,w,_);return rl=null,Q}catch(P){if(P===sl||P===Si)throw P;var ge=va(29,P,null,O.mode);return ge.lanes=_,ge.return=O,ge}finally{}}}var _n=hm(!0),vm=hm(!1),Kt=!1;function Rr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ft(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ae&2)!==0){var l=n.pending;return l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a,a=pi(e),Wd(e,null,t),a}return fi(e,n,a,t),pi(e)}function io(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,nd(e,t)}}function Dr(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=r:o=o.next=r,t=t.next}while(t!==null);o===null?l=o=a:o=o.next=a}else l=o=a;t={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var _r=!1;function so(){if(_r){var e=il;if(e!==null)throw e}}function ro(e,a,t,n){_r=!1;var l=e.updateQueue;Kt=!1;var o=l.firstBaseUpdate,r=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var g=f,T=g.next;g.next=null,r===null?o=T:r.next=T,r=g;var D=e.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==r&&(f===null?D.firstBaseUpdate=T:f.next=T,D.lastBaseUpdate=g))}if(o!==null){var M=l.baseState;r=0,D=T=g=null,f=o;do{var A=f.lane&-536870913,R=A!==f.lane;if(R?(ve&A)===A:(n&A)===A){A!==0&&A===wn&&(_r=!0),D!==null&&(D=D.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var G=e,X=f;A=a;var se=t;switch(X.tag){case 1:if(G=X.payload,typeof G=="function"){M=G.call(se,M,A);break e}M=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=X.payload,A=typeof G=="function"?G.call(se,M,A):G,A==null)break e;M=ee({},M,A);break e;case 2:Kt=!0}}A=f.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[A]:R.push(A))}else R={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(T=D=R,g=M):D=D.next=R,r|=A;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;R=f,f=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);D===null&&(g=M),l.baseState=g,l.firstBaseUpdate=T,l.lastBaseUpdate=D,o===null&&(l.shared.lanes=0),nn|=r,e.lanes=r,e.memoizedState=M}}function gm(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function xm(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)gm(t[e],a)}var Jt=et(null),ji=et(0);function bm(e,a){e=Mt,_e(ji,e),_e(Jt,a),Mt=e|a.baseLanes}function Mr(){_e(ji,Mt),_e(Jt,Jt.current)}function zr(){Mt=ji.current,aa(Jt),aa(ji)}var la=et(null),ca=null;function $t(e){var a=e.alternate;_e(oa,oa.current&1),_e(la,e),ca===null&&(a===null||Jt.current!==null||a.memoizedState!==null)&&(ca=e)}function Ur(e){_e(oa,oa.current),_e(la,e),ca===null&&(ca=e)}function ym(e){e.tag===22?(_e(oa,oa.current),_e(la,e),ca===null&&(ca=e)):Wt()}function Wt(){_e(oa,oa.current),_e(la,la.current)}function Ca(e){aa(la),ca===e&&(ca=null),aa(oa)}var oa=et(0);function co(e,a){_e(la,la.current),_e(oa,a)}function qr(e){aa(oa),aa(la),ca===e&&(ca=null)}function wi(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||lu(t)||ou(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Rt=0,ie=null,Ce=null,Qe=null,Ri=!1,cl=!1,Mn=!1,Ci=0,uo=0,ul=null,cg=0;function Be(){throw Error(u(321))}function Lr(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Ra(e[t],a[t]))return!1;return!0}function Hr(e,a,t,n,l,o){return Rt=o,ie=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,K.H=e===null||e.memoizedState===null?nf:lf,Mn=!1,o=t(n,l),Mn=!1,cl&&(o=Em(a,t,n,l)),Nm(e),o}function Nm(e){K.H=Li;var a=Ce!==null&&Ce.next!==null;if(Rt=0,Qe=Ce=ie=null,Ri=!1,uo=0,ul=null,a)throw Error(u(300));e===null||Xe||(e=e.dependencies,e!==null&&yi(e)&&(Xe=!0))}function Em(e,a,t,n){ie=e;var l=0;do{if(cl&&(ul=null),uo=0,cl=!1,25<=l)throw Error(u(301));if(l+=1,Qe=Ce=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}K.H=gg,o=a(t,n)}while(cl);return o}function ug(){var e=K.H,a=e.useState()[0];return a=typeof a.then=="function"?mo(a):a,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ie.flags|=1024),a}function Br(){var e=Ci!==0;return Ci=0,e}function Gr(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Ir(e){if(Ri){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ri=!1}Rt=0,Qe=Ce=ie=null,cl=!1,uo=Ci=0,ul=null}function ma(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ye(){if(Ce===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var a=Qe===null?ie.memoizedState:Qe.next;if(a!==null)Qe=a,Ce=e;else{if(e===null)throw ie.alternate===null?Error(u(467)):Error(u(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var a=uo;return uo+=1,ul===null&&(ul=[]),e=mm(ul,e,a),a=ie,(Qe===null?a.memoizedState:Qe.next)===null&&(a=a.alternate,K.H=a===null||a.memoizedState===null?nf:lf),e}function _i(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===q)return;if(e.$$typeof===me)return na(e)}throw Error(u(438,String(e)))}function Vr(e){var a=null,t=ie.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=ie.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(l){return l.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Di(),ie.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=vn;return a.index++,t}function Ct(e,a){return typeof a=="function"?a(e):a}function Mi(e){var a=Ye();return Yr(a,Ce,e)}function Yr(e,a,t){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var r=l.next;l.next=o.next,o.next=r}a.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{a=l.next;var f=r=null,g=null,T=a,D=!1;do{var M=T.lane&-536870913;if(M!==T.lane?(ve&M)===M:(Rt&M)===M){var A=T.revertLane;if(A===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),M===wn&&(D=!0);else if((Rt&A)===A){T=T.next,A===wn&&(D=!0);continue}else M={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(f=g=M,r=o):g=g.next=M,ie.lanes|=A,nn|=A;M=T.action,Mn&&t(o,M),o=T.hasEagerState?T.eagerState:t(o,M)}else A={lane:M,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},g===null?(f=g=A,r=o):g=g.next=A,ie.lanes|=M,nn|=M;T=T.next}while(T!==null&&T!==a);if(g===null?r=o:g.next=f,!Ra(o,e.memoizedState)&&(Xe=!0,D&&(t=il,t!==null)))throw t;e.memoizedState=o,e.baseState=r,e.baseQueue=g,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function kr(e){var a=Ye(),t=a.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var n=t.dispatch,l=t.pending,o=a.memoizedState;if(l!==null){t.pending=null;var r=l=l.next;do o=e(o,r.action),r=r.next;while(r!==l);Ra(o,a.memoizedState)||(Xe=!0),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),t.lastRenderedState=o}return[o,n]}function Sm(e,a,t){var n=ie,l=Ye(),o=ue;if(o){if(t===void 0)throw Error(u(407));t=t()}else t=a();var r=!Ra((Ce||l).memoizedState,t);if(r&&(l.memoizedState=t,Xe=!0),l=l.queue,Zr(Tm.bind(null,n,l,e),[e]),e=l.getSnapshot!==a||r||Qe!==null&&(Qe.memoizedState.tag&1)!==0,dl(e?9:8,{destroy:void 0},Om.bind(null,n,l,t,a),null),e){if(n.flags|=2048,De===null)throw Error(u(349));o||(Rt&127)!==0||Am(n,a,t)}return t}function Am(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=ie.updateQueue,a===null?(a=Di(),ie.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Om(e,a,t,n){a.value=t,a.getSnapshot=n,jm(a)&&wm(e)}function Tm(e,a,t){return t(function(){jm(a)&&wm(e)})}function jm(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Ra(e,t)}catch{return!0}}function wm(e){var a=En(e,2);a!==null&&ya(a,e,2)}function Qr(e){var a=ma();if(typeof e=="function"){var t=e;if(e=t(),Mn){Gt(!0);try{t()}finally{Gt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:e},a}function Rm(e,a,t,n){return e.baseState=t,Yr(e,Ce,typeof n=="function"?n:Ct)}function dg(e,a,t,n,l){if(qi(e))throw Error(u(485));if(e=a.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){o.listeners.push(r)}};K.T!==null?t(!0):o.isTransition=!1,n(o),t=a.pending,t===null?(o.next=a.pending=o,Cm(a,o)):(o.next=t.next,a.pending=t.next=o)}}function Cm(e,a){var t=a.action,n=a.payload,l=e.state;if(a.isTransition){var o=K.T,r={};r.types=o!==null?o.types:null,K.T=r;try{var f=t(l,n),g=K.S;g!==null&&g(r,f),Dm(e,a,f)}catch(T){Xr(e,a,T)}finally{o!==null&&r.types!==null&&(o.types=r.types),K.T=o}}else try{o=t(l,n),Dm(e,a,o)}catch(T){Xr(e,a,T)}}function Dm(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){_m(e,a,n)},function(n){return Xr(e,a,n)}):_m(e,a,t)}function _m(e,a,t){a.status="fulfilled",a.value=t,Mm(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Cm(e,t)))}function Xr(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,Mm(a),a=a.next;while(a!==n)}e.action=null}function Mm(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function zm(e,a){return a}function Um(e,a){if(ue){var t=De.formState;if(t!==null){e:{var n=ie;if(ue){if(Me){a:{for(var l=Me,o=Ia;l.nodeType!==8;){if(!o){l=null;break a}if(l=Ya(l.nextSibling),l===null){l=null;break a}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Me=Ya(l.nextSibling),n=l.data==="F!";break e}}Qt(n)}n=!1}n&&(a=t[0])}}return t=ma(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:a},t.queue=n,t=ef.bind(null,ie,n),n.dispatch=t,n=Qr(!1),o=$r.bind(null,ie,!1,n.queue),n=ma(),l={state:a,dispatch:null,action:e,pending:null},n.queue=l,t=dg.bind(null,ie,l,o,t),l.dispatch=t,n.memoizedState=e,[a,t,!1]}function qm(e){var a=Ye();return Lm(a,Ce,e)}function Lm(e,a,t){if(a=Yr(e,a,zm)[0],e=Mi(Ct)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=mo(a)}catch(r){throw r===sl?Si:r}else n=a;a=Ye();var l=a.queue,o=l.dispatch;return t!==a.memoizedState&&(ie.flags|=2048,dl(9,{destroy:void 0},mg.bind(null,l,t),null)),[n,o,e]}function mg(e,a){e.action=a}function Hm(e){var a=Ye(),t=Ce;if(t!==null)return Lm(a,t,e);Ye(),a=a.memoizedState,t=Ye();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function dl(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=ie.updateQueue,a===null&&(a=Di(),ie.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function Bm(){return Ye().memoizedState}function zi(e,a,t,n){var l=ma();ie.flags|=e,l.memoizedState=dl(1|a,{destroy:void 0},t,n===void 0?null:n)}function Ui(e,a,t,n){var l=Ye();n=n===void 0?null:n;var o=l.memoizedState.inst;Ce!==null&&n!==null&&Lr(n,Ce.memoizedState.deps)?l.memoizedState=dl(a,o,t,n):(ie.flags|=e,l.memoizedState=dl(1|a,o,t,n))}function Gm(e,a){zi(8390656,8,e,a)}function Zr(e,a){Ui(2048,8,e,a)}function fg(e){ie.flags|=4;var a=ie.updateQueue;if(a===null)a=Di(),ie.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function Im(e){var a=Ye().memoizedState;return fg({ref:a,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function Vm(e,a){return Ui(4,2,e,a)}function Ym(e,a){return Ui(4,4,e,a)}function km(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Qm(e,a,t){t=t!=null?t.concat([e]):null,Ui(4,4,km.bind(null,a,e),t)}function Kr(){}function Xm(e,a){var t=Ye();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&Lr(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function Zm(e,a){var t=Ye();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&Lr(a,n[1]))return n[0];if(n=e(),Mn){Gt(!0);try{e()}finally{Gt(!1)}}return t.memoizedState=[n,a],n}function Pr(e,a,t){return t===void 0||(Rt&1073741824)!==0&&(ve&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=lp(),ie.lanes|=e,nn|=e,t)}function Km(e,a,t,n){return Ra(t,a)?t:Jt.current!==null?(e=Pr(e,t,n),Ra(e,a)||(Xe=!0),e):(Rt&106)===0||(Rt&1073741824)!==0&&(ve&261930)===0?(Xe=!0,e.memoizedState=t):(e=lp(),ie.lanes|=e,nn|=e,a)}function Pm(e,a,t,n,l){var o=te.p;te.p=o!==0&&8>o?o:8;var r=K.T,f={};f.types=r!==null?r.types:null,K.T=f,$r(e,!1,a,t);try{var g=l(),T=K.S;if(T!==null&&T(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var D=rg(g,n);fo(e,a,D,za(e))}else fo(e,a,n,za(e))}catch(M){fo(e,a,{then:function(){},status:"rejected",reason:M},za())}finally{te.p=o,r!==null&&f.types!==null&&(r.types=f.types),K.T=r}}function pg(){}function Fr(e,a,t,n){if(e.tag!==5)throw Error(u(476));var l=Fm(e).queue;Pm(e,l,a,bt,t===null?pg:function(){return Jm(e),t(n)})}function Fm(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:bt,baseState:bt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:bt},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Jm(e){var a=Fm(e);a.next===null&&(a=e.alternate.memoizedState),fo(e,a.next.queue,{},za())}function Jr(){return na(Cl)}function $m(){return Ye().memoizedState}function Wm(){return Ye().memoizedState}function hg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=za();e=Pt(t);var n=Ft(a,e,t);n!==null&&(ya(n,a,t),io(n,a,t)),a={cache:Or()},e.payload=a;return}a=a.return}}function vg(e,a,t){var n=za();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},qi(e)?af(a,t):(t=vr(e,a,t,n),t!==null&&(ya(t,e,n),tf(t,a,n)))}function ef(e,a,t){var n=za();fo(e,a,t,n)}function fo(e,a,t,n){var l={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(qi(e))af(a,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=a.lastRenderedReducer,o!==null))try{var r=a.lastRenderedState,f=o(r,t);if(l.hasEagerState=!0,l.eagerState=f,Ra(f,r))return fi(e,a,l,0),De===null&&mi(),!1}catch{}finally{}if(t=vr(e,a,l,n),t!==null)return ya(t,e,n),tf(t,a,n),!0}return!1}function $r(e,a,t,n){if(n={lane:2,revertLane:Vc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(a)throw Error(u(479))}else a=vr(e,t,n,2),a!==null&&ya(a,e,2)}function qi(e){var a=e.alternate;return e===ie||a!==null&&a===ie}function af(e,a){cl=Ri=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function tf(e,a,t){if((t&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,nd(e,t)}}var Li={readContext:na,use:_i,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be,useEffectEvent:Be},nf={readContext:na,use:_i,useCallback:function(e,a){return ma().memoizedState=[e,a===void 0?null:a],e},useContext:na,useEffect:Gm,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,zi(4194308,4,km.bind(null,a,e),t)},useLayoutEffect:function(e,a){return zi(4194308,4,e,a)},useInsertionEffect:function(e,a){zi(4,2,e,a)},useMemo:function(e,a){var t=ma();a=a===void 0?null:a;var n=e();if(Mn){Gt(!0);try{e()}finally{Gt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ma();if(t!==void 0){var l=t(a);if(Mn){Gt(!0);try{t(a)}finally{Gt(!1)}}}else l=a;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=vg.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var a=ma();return e={current:e},a.memoizedState=e},useState:function(e){e=Qr(e);var a=e.queue,t=ef.bind(null,ie,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Kr,useDeferredValue:function(e,a){var t=ma();return Pr(t,e,a)},useTransition:function(){var e=Qr(!1);return e=Pm.bind(null,ie,e.queue,!0,!1),ma().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=ie,l=ma();if(ue){if(t===void 0)throw Error(u(407));t=t()}else{if(t=a(),De===null)throw Error(u(349));(ve&127)!==0||Am(n,a,t)}l.memoizedState=t;var o={value:t,getSnapshot:a};return l.queue=o,Gm(Tm.bind(null,n,o,e),[e]),n.flags|=2048,dl(9,{destroy:void 0},Om.bind(null,n,o,t,a),null),t},useId:function(){var e=ma(),a=De.identifierPrefix;if(ue){var t=lt,n=nt;t=(n&~(1<<32-ja(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=Ci++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=cg++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Jr,useFormState:Um,useActionState:Um,useOptimistic:function(e){var a=ma();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=$r.bind(null,ie,!0,t),t.dispatch=a,[e,a]},useMemoCache:Vr,useCacheRefresh:function(){return ma().memoizedState=hg.bind(null,ie)},useEffectEvent:function(e){var a=ma(),t={impl:e};return a.memoizedState=t,function(){if((Ae&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},lf={readContext:na,use:_i,useCallback:Xm,useContext:na,useEffect:Zr,useImperativeHandle:Qm,useInsertionEffect:Vm,useLayoutEffect:Ym,useMemo:Zm,useReducer:Mi,useRef:Bm,useState:function(){return Mi(Ct)},useDebugValue:Kr,useDeferredValue:function(e,a){var t=Ye();return Km(t,Ce.memoizedState,e,a)},useTransition:function(){var e=Mi(Ct)[0],a=Ye().memoizedState;return[typeof e=="boolean"?e:mo(e),a]},useSyncExternalStore:Sm,useId:$m,useHostTransitionStatus:Jr,useFormState:qm,useActionState:qm,useOptimistic:function(e,a){var t=Ye();return Rm(t,Ce,e,a)},useMemoCache:Vr,useCacheRefresh:Wm,useEffectEvent:Im},gg={readContext:na,use:_i,useCallback:Xm,useContext:na,useEffect:Zr,useImperativeHandle:Qm,useInsertionEffect:Vm,useLayoutEffect:Ym,useMemo:Zm,useReducer:kr,useRef:Bm,useState:function(){return kr(Ct)},useDebugValue:Kr,useDeferredValue:function(e,a){var t=Ye();return Ce===null?Pr(t,e,a):Km(t,Ce.memoizedState,e,a)},useTransition:function(){var e=kr(Ct)[0],a=Ye().memoizedState;return[typeof e=="boolean"?e:mo(e),a]},useSyncExternalStore:Sm,useId:$m,useHostTransitionStatus:Jr,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,a){var t=Ye();return Ce!==null?Rm(t,Ce,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Vr,useCacheRefresh:Wm,useEffectEvent:Im};function Wr(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:ee({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ec={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=za(),l=Pt(n);l.payload=a,t!=null&&(l.callback=t),a=Ft(e,l,n),a!==null&&(ya(a,e,n),io(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=za(),l=Pt(n);l.tag=1,l.payload=a,t!=null&&(l.callback=t),a=Ft(e,l,n),a!==null&&(ya(a,e,n),io(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=za(),n=Pt(t);n.tag=2,a!=null&&(n.callback=a),a=Ft(e,n,t),a!==null&&(ya(a,e,t),io(a,e,t))}};function of(e,a,t,n,l,o,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,r):a.prototype&&a.prototype.isPureReactComponent?!$l(t,n)||!$l(l,o):!0}function sf(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&ec.enqueueReplaceState(a,a.state,null)}function zn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=ee({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function rf(e){di(e)}function cf(e){console.error(e)}function uf(e){di(e)}function Hi(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function df(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ac(e,a,t){return t=Pt(t),t.tag=3,t.payload={element:null},t.callback=function(){Hi(e,a)},t}function mf(e){return e=Pt(e),e.tag=3,e}function ff(e,a,t,n){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){df(a,t,n)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){df(a,t,n),typeof l!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function xg(e,a,t,n,l){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Tn(a,t,l,!0),t=la.current,t!==null){switch(t.tag){case 31:case 13:case 19:return ca===null?os():t.alternate===null&&Ge===0&&(Ge=3),t.flags&=-257,t.flags|=65536,t.lanes=l,n===Ai?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Bc(e,n,l)),!1;case 22:return t.flags|=65536,n===Ai?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Bc(e,n,l)),!1}throw Error(u(435,t.tag))}return Bc(e,n,l),os(),!1}if(ue)return a=la.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=l,n!==Nr&&(e=Error(u(422),{cause:n}),ao(Ha(e,t)))):(n!==Nr&&(a=Error(u(423),{cause:n}),ao(Ha(a,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Ha(n,t),l=ac(e.stateNode,n,l),Dr(e,l),Ge!==4&&(Ge=2)),!1;var o=Error(u(520),{cause:n});if(o=Ha(o,t),No===null?No=[o]:No.push(o),Ge!==4&&(Ge=2),a===null)return!0;n=Ha(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=ac(t.stateNode,n,e),Dr(t,e),!1;case 1:if(a=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ln===null||!ln.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=mf(l),ff(l,e,t,n),Dr(t,l),!1;break;case 22:if(t.memoizedState!==null)return t.flags|=65536,!1}t=t.return}while(t!==null);return!1}var tc=Error(u(461)),Xe=!1;function Ke(e,a,t,n){a.child=e===null?vm(a,null,t,n):_n(a,e.child,t,n)}function pf(e,a,t,n,l){t=t.render;var o=a.ref;if("ref"in n){var r={};for(var f in n)f!=="ref"&&(r[f]=n[f])}else r=n;return jn(a),n=Hr(e,a,t,r,o,l),f=Br(),e!==null&&!Xe?(Gr(e,a,l),Dt(e,a,l)):(ue&&f&&gi(a),a.flags|=1,Ke(e,a,n,l),a.child)}function hf(e,a,t,n,l){if(e===null){var o=t.type;return typeof o=="function"&&!gr(o)&&o.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=o,vf(e,a,o,n,l)):(e=hi(t.type,null,n,a,a.mode,l),e.ref=a.ref,e.return=a,a.child=e)}if(o=e.child,!uc(e,l)){var r=o.memoizedProps;if(t=t.compare,t=t!==null?t:$l,t(r,n)&&e.ref===a.ref)return Dt(e,a,l)}return a.flags|=1,e=Ot(o,n),e.ref=a.ref,e.return=a,a.child=e}function vf(e,a,t,n,l){if(e!==null){var o=e.memoizedProps;if($l(o,n)&&e.ref===a.ref)if(Xe=!1,a.pendingProps=n=o,uc(e,l))(e.flags&131072)!==0&&(Xe=!0);else return a.lanes=e.lanes,Dt(e,a,l)}return nc(e,a,t,n,l)}function gf(e,a,t,n){var l=n.children,o=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((a.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(n=a.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~o}else n=0,a.child=null;return xf(e,a,o,t,n)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ei(a,o!==null?o.cachePool:null),o!==null?bm(a,o):Mr(),ym(a);else return n=a.lanes=536870912,xf(e,a,o!==null?o.baseLanes|t:t,t,n)}else o!==null?(Ei(a,o.cachePool),bm(a,o),Wt(),a.memoizedState=null):(e!==null&&Ei(a,null),Mr(),Wt());return Ke(e,a,l,t),a.child}function po(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function xf(e,a,t,n,l){var o=jr();return o=o===null?null:{parent:ke._currentValue,pool:o},a.memoizedState={baseLanes:t,cachePool:o},e!==null&&Ei(a,null),Mr(),ym(a),e!==null&&Tn(e,a,n,!0),a.childLanes=l,null}function Bi(e,a){return a=Gi({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function bf(e,a,t){return _n(a,e.child,null,t),e=Bi(a,a.pendingProps),e.flags|=2,Ca(a),a.memoizedState=null,e}function bg(e,a,t){var n=a.pendingProps,l=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ue){if(n.mode==="hidden")return e=Bi(a,n),a.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},po(null,e);if(Ur(a),(e=Me)?(e=Qp(e,Ia),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:nt,overflow:lt}:null,retryLane:536870912,hydrationErrors:null},t=am(e),t.return=a,a.child=t,Je=a,Me=null)):e=null,e===null)throw Qt(a);return a.lanes=536870912,null}return Bi(a,n)}var o=e.memoizedState;if(o!==null){var r=o.dehydrated;if(Ur(a),l)if(a.flags&256)a.flags&=-257,a=bf(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(u(558));else if(Xe||Tn(e,a,t,!1),l=(t&e.childLanes)!==0,Xe||l){if(Jt.current===null){if(n=De,n!==null&&(r=ld(n,t),r!==0&&r!==o.retryLane))throw o.retryLane=r,En(e,r),ya(n,e,r),tc;os()}a=bf(e,a,t)}else e=o.treeContext,Me=Ya(r.nextSibling),Je=a,ue=!0,kt=null,Ia=!1,e!==null&&lm(a,e),a=Bi(a,n),a.flags|=134221824;return a}return e=Ot(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function ml(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function nc(e,a,t,n,l){return jn(a),t=Hr(e,a,t,n,void 0,l),n=Br(),e!==null&&!Xe?(Gr(e,a,l),Dt(e,a,l)):(ue&&n&&gi(a),a.flags|=1,Ke(e,a,t,l),a.child)}function yf(e,a,t,n,l,o){return jn(a),a.updateQueue=null,t=Em(a,n,t,l),Nm(e),n=Br(),e!==null&&!Xe?(Gr(e,a,o),Dt(e,a,o)):(ue&&n&&gi(a),a.flags|=1,Ke(e,a,t,o),a.child)}function Nf(e,a,t,n,l){if(jn(a),a.stateNode===null){var o=tl,r=t.contextType;typeof r=="object"&&r!==null&&(o=na(r)),o=new t(n,o),a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ec,a.stateNode=o,o._reactInternals=a,o=a.stateNode,o.props=n,o.state=a.memoizedState,o.refs={},Rr(a),r=t.contextType,o.context=typeof r=="object"&&r!==null?na(r):tl,o.state=a.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Wr(a,t,r,n),o.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&ec.enqueueReplaceState(o,o.state,null),ro(a,n,o,l),so(),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){o=a.stateNode;var f=a.memoizedProps,g=zn(t,f);o.props=g;var T=o.context,D=t.contextType;r=tl,typeof D=="object"&&D!==null&&(r=na(D));var M=t.getDerivedStateFromProps;D=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function",f=a.pendingProps!==f,D||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f||T!==r)&&sf(a,o,n,r),Kt=!1;var A=a.memoizedState;o.state=A,ro(a,n,o,l),so(),T=a.memoizedState,f||A!==T||Kt?(typeof M=="function"&&(Wr(a,t,M,n),T=a.memoizedState),(g=Kt||of(a,t,g,n,A,T,r))?(D||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=T),o.props=n,o.state=T,o.context=r,n=g):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{o=a.stateNode,Cr(e,a),r=a.memoizedProps,D=zn(t,r),o.props=D,M=a.pendingProps,A=o.context,T=t.contextType,g=tl,typeof T=="object"&&T!==null&&(g=na(T)),f=t.getDerivedStateFromProps,(T=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==M||A!==g)&&sf(a,o,n,g),Kt=!1,A=a.memoizedState,o.state=A,ro(a,n,o,l),so();var R=a.memoizedState;r!==M||A!==R||Kt||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof f=="function"&&(Wr(a,t,f,n),R=a.memoizedState),(D=Kt||of(a,t,D,n,A,R,g)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(T||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,R,g),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,R,g)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=R),o.props=n,o.state=R,o.context=g,n=D):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(a.flags|=1024),n=!1)}return o=n,ml(e,a),n=(a.flags&128)!==0,o||n?(o=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:o.render(),a.flags|=1,e!==null&&n?(a.child=_n(a,e.child,null,l),a.child=_n(a,null,t,l)):Ke(e,a,t,l),a.memoizedState=o.state,e=a.child):e=Dt(e,a,l),e}function Ef(e,a,t,n){return An(),a.flags|=256,Ke(e,a,t,n),a.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:um()}}function ic(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ma),e}function Sf(e,a,t){var n=a.pendingProps,l=!1,o=(a.flags&128)!==0,r;if((r=o)||(r=e!==null&&e.memoizedState===null?!1:(oa.current&2)!==0),r&&(l=!0,a.flags&=-129),r=(a.flags&32)!==0,a.flags&=-33,e===null){if(ue){if(l?$t(a):Wt(),(e=Me)?(e=Qp(e,Ia),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Yt!==null?{id:nt,overflow:lt}:null,retryLane:536870912,hydrationErrors:null},t=am(e),t.return=a,a.child=t,Je=a,Me=null)):e=null,e===null)throw Qt(a);return ou(e)?a.lanes=32:a.lanes=536870912,null}return o=n.children,n=n.fallback,l?(Wt(),l=a.mode,o=Gi({mode:"hidden",children:o},l),n=Sn(n,l,t,null),o.return=a,n.return=a,o.sibling=n,a.child=o,n=a.child,n.memoizedState=oc(t),n.childLanes=ic(e,r,t),a.memoizedState=lc,po(null,n)):($t(a),sc(a,o))}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(g!==null)return yg(e,a,o,r,n,g,f,t)}return l?(Wt(),l=n.fallback,o=a.mode,f=e.child,g=f.sibling,n=Ot(f,{mode:"hidden",children:n.children}),n.subtreeFlags=f.subtreeFlags&1206910976,g!==null?l=Ot(g,l):(l=Sn(l,o,t,null),l.flags|=2),l.return=a,n.return=a,n.sibling=l,a.child=n,po(null,n),n=a.child,l=e.child.memoizedState,l===null?l=oc(t):(o=l.cachePool,o!==null?(f=ke._currentValue,o=o.parent!==f?{parent:f,pool:f}:o):o=um(),l={baseLanes:l.baseLanes|t,cachePool:o}),n.memoizedState=l,n.childLanes=ic(e,r,t),a.memoizedState=lc,po(e.child,n)):($t(a),t=e.child,e=t.sibling,t=Ot(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t)}function sc(e,a){return a=Gi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Gi(e,a){return e=va(22,e,null,a),e.lanes=0,e}function Ii(e,a,t){return _n(a,e.child,null,t),e=sc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function yg(e,a,t,n,l,o,r,f){if(t)return a.flags&256?($t(a),a.flags&=-257,Ii(e,a,f)):a.memoizedState!==null?(Wt(),a.child=e.child,a.flags|=128,null):(Wt(),o=l.fallback,r=a.mode,l=Gi({mode:"visible",children:l.children},r),o=Sn(o,r,f,null),o.flags|=2,l.return=a,o.return=a,l.sibling=o,a.child=l,_n(a,e.child,null,f),l=a.child,l.memoizedState=oc(f),l.childLanes=ic(e,n,f),a.memoizedState=lc,po(null,l));if($t(a),ou(o)){if(n=o.nextSibling&&o.nextSibling.dataset,n)var g=n.dgst;return n=g,n!==""&&(l=Error(u(419)),l.stack="",l.digest=n,ao({value:l,source:null,stack:null})),Ii(e,a,f)}if(Xe||Tn(e,a,f,!1),n=(f&e.childLanes)!==0,Xe||n){if(Jt.current!==null)return Ii(e,a,f);if(n=De,n!==null&&(l=ld(n,f),l!==0&&l!==r.retryLane))throw r.retryLane=l,En(e,l),ya(n,e,l),tc;return lu(o)||os(),Ii(e,a,f)}return lu(o)?(a.flags|=192,a.child=e.child,null):(e=r.treeContext,Me=Ya(o.nextSibling),Je=a,ue=!0,kt=null,Ia=!1,e!==null&&lm(a,e),a=sc(a,l.children),a.flags|=134221824,a)}function Af(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),bi(e.return,a,t)}function Of(e){for(var a=null;e!==null;){var t=e.alternate;t!==null&&wi(t)===null&&(a=e),e=e.sibling}return a}function Vi(e,a,t,n,l,o){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:l,treeForkCount:o}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=t,r.tailMode=l,r.treeForkCount=o)}function rc(e){var a=e.child;for(e.child=null;a!==null;){var t=a.sibling;a.sibling=e.child,e.child=a,a=t}}function cc(e,a,t){var n=a.pendingProps,l=n.revealOrder,o=n.tail;n=n.children;var r=oa.current;if(a.flags&128)return co(a,r),null;var f=(r&2)!==0;if(f?(r=r&1|2,a.flags|=128):r&=1,co(a,r),l==="backwards"&&e!==null?(rc(e),Ke(e,a,n,t),rc(e)):Ke(e,a,n,t),n=ue?eo:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,t,a);else if(e.tag===19)Af(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":t=Of(a.child),t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null,rc(a)),Vi(a,!0,l,null,o,n);break;case"unstable_legacy-backwards":for(t=null,l=a.child,a.child=null;l!==null;){if(e=l.alternate,e!==null&&wi(e)===null){a.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vi(a,!0,t,null,o,n);break;case"together":Vi(a,!1,null,null,void 0,n);break;case"independent":a.memoizedState=null;break;default:t=Of(a.child),t===null?(l=a.child,a.child=null):(l=t.sibling,t.sibling=null),Vi(a,!1,l,t,o,n)}return a.child}function Tf(e,a,t){var n=a.pendingProps;return Xt(a,a.type,n.value),Ke(e,a,n.children,t),a.child}function Dt(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),nn|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(Tn(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,t=Ot(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Ot(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function uc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function Ng(e,a,t){switch(a.tag){case 3:Zo(a,a.stateNode.containerInfo),Xt(a,ke,e.memoizedState.cache),An();break;case 27:case 5:Ls(a);break;case 4:Zo(a,a.stateNode.containerInfo);break;case 10:Xt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ur(a),null;break;case 13:var n=a.memoizedState;if(n!==null){if(n.dehydrated!==null)return $t(a),a.flags|=128,null;n=Tn(e,a,t,!1);var l=a.child.childLanes;return n||(t&l)!==0?Sf(e,a,t):($t(a),e=Dt(e,a,t),e!==null?e.sibling:null)}$t(a);break;case 19:if(a.flags&128)return cc(e,a,t);if(l=(e.flags&128)!==0,n=(t&a.childLanes)!==0,n||(Tn(e,a,t,!1),n=(t&a.childLanes)!==0),l){if(n)return cc(e,a,t);a.flags|=128}if(l=a.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),co(a,oa.current),n)break;return null;case 22:return a.lanes=0,gf(e,a,t,a.pendingProps);case 24:Xt(a,ke,e.memoizedState.cache)}return Dt(e,a,t)}function jf(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Xe=!0;else{if(!uc(e,t)&&(a.flags&128)===0)return Xe=!1,Ng(e,a,t);Xe=(e.flags&131072)!==0}else Xe=!1,ue&&(a.flags&1048576)!==0&&nm(a,eo,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Cn(a.elementType),a.type=e,typeof e=="function")gr(e)?(n=zn(e,n),a.tag=1,a=Nf(null,a,e,n,t)):(a.tag=0,a=nc(null,a,e,n,t));else{if(e!=null){var l=e.$$typeof;if(l===z){a.tag=11,a=pf(null,a,e,n,t);break e}else if(l===fe){a.tag=14,a=hf(null,a,e,n,t);break e}else if(l===me){a.tag=10,a.type=e,a=Tf(null,a,t);break e}}throw a=ye(e)||e,Error(u(306,a,""))}}return a;case 0:return nc(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,l=zn(n,a.pendingProps),Nf(e,a,n,l,t);case 3:e:{if(Zo(a,a.stateNode.containerInfo),e===null)throw Error(u(387));n=a.pendingProps;var o=a.memoizedState;l=o.element,Cr(e,a),ro(a,n,null,t);var r=a.memoizedState;if(n=r.cache,Xt(a,ke,n),n!==o.cache&&Ar(a,[ke],t,!0),so(),n=r.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:r.cache},a.updateQueue.baseState=o,a.memoizedState=o,a.flags&256){a=Ef(e,a,n,t);break e}else if(n!==l){l=Ha(Error(u(424)),a),ao(l),a=Ef(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Ya(e.firstChild),Je=a,ue=!0,kt=null,Ia=!0,t=vm(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling}else{if(An(),n===l){a=Dt(e,a,t);break e}Ke(e,a,n,t)}a=a.child}return a;case 26:return ml(e,a),e===null?(t=$p(a.type,null,a.pendingProps,null))?a.memoizedState=t:ue||(a.stateNode=Dp(a.type,a.pendingProps,Ht.current,a)):a.memoizedState=$p(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ls(a),e===null&&ue&&(n=a.stateNode=Kp(a.type,a.pendingProps,Ht.current),Je=a,Ia=!0,l=Me,rn(a.type)?(iu=l,Me=Ya(n.firstChild)):Me=l),Ke(e,a,a.pendingProps.children,t),ml(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ue&&((l=n=Me)&&(n=hx(n,a.type,a.pendingProps,Ia),n!==null?(a.stateNode=n,Je=a,Me=Ya(n.firstChild),Ia=!1,l=!0):l=!1),l||Qt(a)),Ls(a),l=a.type,o=a.pendingProps,r=e!==null?e.memoizedProps:null,n=o.children,Jc(l,o)?n=null:r!==null&&Jc(l,r)&&(a.flags|=32),a.memoizedState!==null&&(l=Hr(e,a,ug,null,null,t),Cl._currentValue=l),ml(e,a),Ke(e,a,n,t),a.child;case 6:return e===null&&ue&&((e=t=Me)&&(t=vx(t,a.pendingProps,Ia),t!==null?(a.stateNode=t,Je=a,Me=null,e=!0):e=!1),e||Qt(a)),null;case 13:return Sf(e,a,t);case 4:return Zo(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=_n(a,null,n,t):Ke(e,a,n,t),a.child;case 11:return pf(e,a,a.type,a.pendingProps,t);case 7:return n=a.pendingProps,ml(e,a),Ke(e,a,n,t),a.child;case 8:return Ke(e,a,a.pendingProps.children,t),a.child;case 12:return Ke(e,a,a.pendingProps.children,t),a.child;case 10:return Tf(e,a,t);case 9:return l=a.type._context,n=a.pendingProps.children,jn(a),l=na(l),n=n(l),a.flags|=1,Ke(e,a,n,t),a.child;case 14:return hf(e,a,a.type,a.pendingProps,t);case 15:return vf(e,a,a.type,a.pendingProps,t);case 19:return cc(e,a,t);case 31:return bg(e,a,t);case 22:return gf(e,a,t,a.pendingProps);case 24:return jn(a),n=na(ke),e===null?(l=jr(),l===null&&(l=De,o=Or(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),a.memoizedState={parent:n,cache:l},Rr(a),Xt(a,ke,l)):((e.lanes&t)!==0&&(Cr(e,a),ro(a,null,null,t),so()),l=e.memoizedState,o=a.memoizedState,l.parent!==n?(l={parent:n,cache:n},a.memoizedState=l,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=l),Xt(a,ke,n)):(n=o.cache,Xt(a,ke,n),n!==l.cache&&Ar(a,[ke],t,!0))),Ke(e,a,a.pendingProps.children,t),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=a.pendingProps,n.name!=null&&n.name!=="auto"?a.flags|=e===null?18882560:18874368:ue&&gi(a),e!==null&&e.memoizedProps.name!==n.name?a.flags|=4194816:ml(e,a),Ke(e,a,n.children,t),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function _t(e){e.flags|=4}function dc(e,a,t,n,l){var o;if((o=(e.mode&32)!==0)&&(o=t===null?th(a,n):th(a,n)&&(n.src!==t.src||n.srcSet!==t.srcSet)),o){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rp())e.flags|=8192;else throw Dn=Ai,wr}else e.flags&=-16777217}function wf(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nh(a))if(rp())e.flags|=8192;else throw Dn=Ai,wr}function Yi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ad():536870912,e.lanes|=a,gl|=a)}function ho(e,a){if(!ue)switch(e.tailMode){case"visible":break;case"collapsed":for(var t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(a=e.tail,t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null}}function ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags&1206910976,n|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function Eg(e,a,t){var n=a.pendingProps;switch(yr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(a),null;case 1:return ze(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),wt(ke),Yn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ol(a)?_t(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Er())),ze(a),null;case 26:var l=a.type,o=a.memoizedState;return e===null?(_t(a),o!==null?(ze(a),wf(a,o)):(ze(a),dc(a,l,null,n,t))):o?o!==e.memoizedState?(_t(a),ze(a),wf(a,o)):(ze(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&_t(a),ze(a),dc(a,l,e,n,t)),null;case 27:if(Ko(a),t=Ht.current,l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&_t(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return ze(a),a.subtreeFlags&=-33554433,null}e=at.current,ol(a)?om(a):(e=Kp(l,n,t),a.stateNode=e,_t(a))}return ze(a),a.subtreeFlags&=-33554433,null;case 5:if(Ko(a),l=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&_t(a);else{if(!n){if(a.stateNode===null)throw Error(u(166));return ze(a),a.subtreeFlags&=-33554433,null}if(o=at.current,ol(a))om(a);else{var r=To(Ht.current);switch(o){case 1:o=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=r.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?o.multiple=!0:n.size&&(o.size=n.size);break;default:o=typeof n.is=="string"?r.createElement(l,{is:n.is}):r.createElement(l)}}o[ta]=a,o[ha]=n;e:for(r=a.child;r!==null;){if(r.tag===5||r.tag===6)o.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}a.stateNode=o;e:switch(sa(o,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&_t(a)}}return ze(a),a.subtreeFlags&=-33554433,dc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&_t(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(u(166));if(e=Ht.current,ol(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,l=Je,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[ta]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||jp(e.nodeValue,t)),e||Qt(a,!0)}else e=To(e).createTextNode(n),e[ta]=a,a.stateNode=e}return ze(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=ol(a),t!==null){if(e===null){if(!n)throw Error(u(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ta]=a}else An(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ze(a),e=!1}else t=Er(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(Ca(a),a):(Ca(a),null);if((a.flags&128)!==0)throw Error(u(558))}return ze(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ol(a),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=a.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[ta]=a}else An(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ze(a),l=!1}else l=Er(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return a.flags&256?(Ca(a),a):(Ca(a),null)}return Ca(a),(a.flags&128)!==0?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Yi(a,a.updateQueue),ze(a),null);case 4:return Yn(),e===null&&Xc(a.stateNode.containerInfo),a.flags|=67108864,ze(a),null;case 10:return wt(a.type),ze(a),null;case 19:if(qr(a),n=a.memoizedState,n===null)return ze(a),null;if(l=(a.flags&128)!==0,o=n.rendering,o===null)if(l)ho(n,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(o=wi(e),o!==null){for(a.flags|=128,ho(n,!1),e=o.updateQueue,a.updateQueue=e,Yi(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)em(t,e),t=t.sibling;return co(a,oa.current&1|2),ue&&Tt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Oa()>as&&(a.flags|=128,l=!0,ho(n,!1),a.lanes=4194304)}else{if(!l)if(e=wi(o),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Yi(a,e),ho(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!o.alternate&&!ue)return ze(a),null}else 2*Oa()-n.renderingStartTime>as&&t!==536870912&&(a.flags|=128,l=!0,ho(n,!1),a.lanes=4194304);n.isBackwards?(o.sibling=a.child,a.child=o):(e=n.last,e!==null?e.sibling=o:a.child=o,n.last=o)}if(n.tail!==null){e=n.tail;e:{for(t=e;t!==null;){if(t.alternate!==null){t=!1;break e}t=t.sibling}t=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Oa(),e.sibling=null,o=oa.current,o=l?o&1|2:o&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!t||ue?co(a,o):(t=o,_e(la,a),_e(oa,t),ca===null&&(ca=a)),ue&&Tt(a,n.treeForkCount),e}return ze(a),null;case 22:case 23:return Ca(a),zr(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(t&536870912)!==0&&(a.flags&128)===0&&(ze(a),a.subtreeFlags&6&&(a.flags|=8192)):ze(a),t=a.updateQueue,t!==null&&Yi(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&aa(Rn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),wt(ke),ze(a),null;case 25:return null;case 30:return a.flags|=33554432,ze(a),null}throw Error(u(156,a.tag))}function Sg(e,a){switch(yr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return wt(ke),Yn(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ko(a),null;case 31:if(a.memoizedState!==null){if(Ca(a),a.alternate===null)throw Error(u(340));An()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(Ca(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));An()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return qr(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;case 4:return Yn(),null;case 10:return wt(a.type),null;case 22:case 23:return Ca(a),zr(),e!==null&&aa(Rn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return wt(ke),null;case 25:return null;default:return null}}function Rf(e,a){switch(yr(a),a.tag){case 3:wt(ke),Yn();break;case 26:case 27:case 5:Ko(a);break;case 4:Yn();break;case 31:a.memoizedState!==null&&Ca(a);break;case 13:Ca(a);break;case 19:qr(a);break;case 10:wt(a.type);break;case 22:case 23:Ca(a),zr(),e!==null&&aa(Rn);break;case 24:wt(ke)}}function vo(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){n=void 0;var o=t.create,r=t.inst;n=o(),r.destroy=n}t=t.next}while(t!==l)}}catch(f){we(a,a.return,f)}}function en(e,a,t){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var r=n.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,l=a;var g=t,T=f;try{T()}catch(D){we(l,g,D)}}}n=n.next}while(n!==o)}}catch(D){we(a,a.return,D)}}function Cf(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{xm(a,t)}catch(n){we(e,e.return,n)}}}function Df(e,a,t){t.props=zn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){we(e,a,n)}}function ot(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var l=e.stateNode,o=St(e.memoizedProps,l);(l.ref===null||l.ref.name!==o)&&(l.ref=Hp(o)),n=l.ref;break;case 7:if(e.stateNode===null){var r=new Ua(e);h(e.child,!1,fx,r,void 0,void 0),e.stateNode=r}n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(f){we(e,a,f)}}function ia(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(l){we(e,a,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){we(e,a,l)}else t.current=null}function ki(e,a){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var t=0;t<a.length;t++)kp(e.stateNode,a[t])}function _f(e){for(var a=e.return;a!==null&&(fc(a)&&kp(e.stateNode,a.stateNode),!mc(a));)a=a.return}function go(e){for(var a=e.return;a!==null&&(fc(a)&&px(e.stateNode,a.stateNode),!mc(a));)a=a.return}function mc(e){return e.tag===5||e.tag===3||e.tag===27}function fc(e){return e&&e.tag===7&&e.stateNode!==null}function pc(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(l){we(e,e.return,l)}}function hc(e,a,t){try{var n=e.stateNode;Pg(n,e.type,t,a),n[ha]=a}catch(l){we(e,e.return,l)}}function Mf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rn(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,a,t,n){var l=e.tag;if(l===5||l===6)l=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(l,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(l),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=tt)),ki(e,n),Ne=!0;else if(l!==4&&(l===27&&(ki(e,n),n=null,rn(e.type)&&(t=e.stateNode,a=null)),e=e.child,e!==null))for(gc(e,a,t,n),e=e.sibling;e!==null;)gc(e,a,t,n),e=e.sibling}function Qi(e,a,t,n){var l=e.tag;if(l===5||l===6)l=e.stateNode,a?t.insertBefore(l,a):t.appendChild(l),ki(e,n),Ne=!0;else if(l!==4&&(l===27&&(ki(e,n),n=null,rn(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Qi(e,a,t,n),e=e.sibling;e!==null;)Qi(e,a,t,n),e=e.sibling}function zf(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,l=a.attributes;l.length;)a.removeAttributeNode(l[0]);sa(a,n,t),a[ta]=e,a[ha]=t}catch(o){we(e,e.return,o)}}var Xi=!1,Da=null;function Uf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Xi=!0)}var it=null;function qf(){var e=it;return it=null,e}var ga=0;function fl(e,a,t,n,l){return ga=0,Lf(e.child,a,t,n,l)}function Lf(e,a,t,n,l){for(var o=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(n!==null){var f=eu(r);n.push(f),f.view&&(o=!0)}else o||eu(r).view&&(o=!0);Xi=!0,qp(r,ga===0?a:a+"_"+ga,t),ga++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Lf(e.child,a,t,n,l)&&(o=!0));e=e.sibling}return o}function st(e,a){for(;e!==null;)e.tag===5?Lp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||st(e.child,a)),e=e.sibling}function Zi(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zi(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var a=e.memoizedProps;if(a.name==null||a.name==="auto")throw Error(u(544));var t=a.name;a=At(a.default,a.share),a!=="none"&&(fl(e,t,a,null,!1)||st(e.child,!1))}e=e.sibling}}function xc(e,a){if(e.tag===30){var t=e.stateNode,n=e.memoizedProps,l=St(n,t),o=At(n.default,t.paired?n.share:n.enter);o!=="none"?fl(e,l,o,null,!1)?(Zi(e),t.paired||a||Nl(e,n.onEnter)):st(e.child,!1):Zi(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xc(e,a),e=e.sibling;else Zi(e)}function bc(e){if(Da!==null&&Da.size!==0){var a=Da;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.memoizedProps,n=t.name;if(n!=null&&n!=="auto"){var l=a.get(n);if(l!==void 0){var o=At(t.default,t.share);if(o!=="none"&&(fl(e,n,o,null,!1)?(o=e.stateNode,l.paired=o,o.paired=l,Nl(e,t.onShare)):st(e.child,!1)),a.delete(n),a.size===0)break}}}bc(e)}e=e.sibling}}}function yc(e){if(e.tag===30){var a=e.memoizedProps,t=St(a,e.stateNode),n=Da!==null?Da.get(t):void 0,l=At(a.default,n!==void 0?a.share:a.exit);l!=="none"&&(fl(e,t,l,null,!1)?n!==void 0?(l=e.stateNode,n.paired=l,l.paired=n,Da.delete(t),Nl(e,a.onShare)):Nl(e,a.onExit):st(e.child,!1)),Da!==null&&bc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)yc(e),e=e.sibling;else Da!==null&&bc(e)}function Hf(e){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,t=St(a,e.stateNode);a=At(a.default,a.update),e.flags&=-5,a!=="none"&&fl(e,t,a,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Hf(e);e=e.sibling}}function Nc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.stateNode;a.paired!==null&&(a.paired=null,st(e.child,!1))}Nc(e)}e=e.sibling}}function Ki(e){if(e.tag===30)e.stateNode.paired=null,st(e.child,!1),Nc(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ki(e),e=e.sibling;else Nc(e)}function Bf(e){for(e=e.child;e!==null;)e.tag===30?st(e.child,!1):(e.subtreeFlags&33554432)!==0&&Bf(e),e=e.sibling}function Ec(e,a,t,n,l,o,r){for(var f=!1;a!==null;){if(a.tag===5){var g=a.stateNode;if(o!==null&&ga<o.length){var T=o[ga],D=eu(g);(T.view||D.view)&&(f=!0);var M;if(M=(e.flags&4)===0)if(D.clip)M=!0;else{M=T.rect;var A=D.rect;M=M.y!==A.y||M.x!==A.x||M.height!==A.height||M.width!==A.width}M&&(e.flags|=4),D.abs?D=!T.abs:(T=T.rect,D=D.rect,D=T.height!==D.height||T.width!==D.width),D&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&qp(g,ga===0?t:t+"_"+ga,l),f&&(e.flags&4)!==0||(it===null&&(it=[]),it.push(g,ga===0?n:n+"_"+ga,a.memoizedProps)),ga++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&r?e.flags|=a.flags&32:Ec(e,a.child,t,n,l,o,r)&&(f=!0));a=a.sibling}return f}function Gf(e,a){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=e.stateNode,l=St(t,n),o=At(t.default,t.update),r;r=e.memoizedState,e.memoizedState=null,n=e;var f=e.child;ga=0,l=Ec(n,f,l,l,o,r,!1),(e.flags&4)!==0&&l&&Nl(e,t.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Gf(e);e=e.sibling}}var $e=!1,Te=!1,rt=!1,Sc=!1,If=typeof WeakSet=="function"?WeakSet:Set,We=null,ct=!1,xo=!1,Pi=!1,Ac=!1;function Ag(e,a,t){if(e=e.containerInfo,Pc=Dl,e=kd(e),ur(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,g=-1,T=-1,D=0,M=0,A=e,R=null;a:for(;;){for(var G;A!==n||o!==0&&A.nodeType!==3||(g=f+o),A!==r||l!==0&&A.nodeType!==3||(T=f+l),A.nodeType===3&&(f+=A.nodeValue.length),(G=A.firstChild)!==null;)R=A,A=G;for(;;){if(A===e)break a;if(R===n&&++D===o&&(g=f),R===r&&++M===l&&(T=f),(G=A.nextSibling)!==null)break;A=R,R=A.parentNode}A=G}n=g===-1||T===-1?null:{start:g,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fc={focusedElem:e,selectionRange:n},Dl=!1,t=(t&335544064)===t,We=a,a=t?9270:1024;We!==null;){if(e=We,t&&(n=e.deletions,n!==null))for(o=0;o<n.length;o++)t&&yc(n[o]);if(e.alternate===null&&(e.flags&2)!==0)t&&Uf(e),Fi(t);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&t&&yc(n),Fi(t);continue}else if(n!==null&&n.memoizedState!==null){t&&Uf(e),Fi(t);continue}}n=e.child,(e.subtreeFlags&a)!==0&&n!==null?(n.return=e,We=n):(t&&Hf(e),Fi(t))}}Da=null}function Fi(e){for(;We!==null;){var a=We,t=e,n=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&n!==null){t=void 0,l=n.memoizedProps,n=n.memoizedState;var o=a.stateNode;try{var r=zn(a.type,l);t=o.getSnapshotBeforeUpdate(r,n),o.__reactInternalSnapshotBeforeUpdate=t}catch(f){we(a,a.return,f)}}break;case 3:if((l&1024)!==0){if(n=a.stateNode.containerInfo,t=n.nodeType,t===9)nu(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":nu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:t&&n!==null&&(t=St(n.memoizedProps,n.stateNode),l=a.memoizedProps,l=At(l.default,l.update),l!=="none"&&fl(n,t,l,n.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(u(163))}if(n=a.sibling,n!==null){n.return=a.return,We=n;break}We=a.return}}function Vf(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:ut(e,t),n&4&&vo(5,t);break;case 1:if(ut(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(r){we(t,t.return,r)}else{var l=zn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(l,a,e.__reactInternalSnapshotBeforeUpdate)}catch(r){we(t,t.return,r)}}n&64&&Cf(t),n&512&&ot(t,t.return);break;case 3:if(ut(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{xm(e,a)}catch(r){we(t,t.return,r)}}break;case 27:a===null&&n&4&&zf(t);case 26:case 5:ut(e,t),a===null&&n&4&&pc(t),n&512&&ot(t,t.return);break;case 12:ut(e,t);break;case 31:ut(e,t),n&4&&Xf(e,t);break;case 13:ut(e,t),n&4&&Zf(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=qg.bind(null,t),gx(e,t))));break;case 22:if(n=t.memoizedState!==null||$e,!n){var o=a!==null&&a.memoizedState!==null||Te;a=$e,l=Te,$e=n,(Te=o)&&!l?(n=2,(t.subtreeFlags&8772)!==0&&(n|=1),Fa(e,t,n)):ut(e,t),$e=a,Te=l}break;case 30:ut(e,t),n&512&&ot(t,t.return);break;case 7:n&512&&ot(t,t.return);default:ut(e,t)}}function Oc(e,a){for(e=e.child;e!==null;)Yf(e,a),e=e.sibling}function Yf(e,a){switch(e.tag){case 5:case 26:try{var t=e.stateNode;if(a){var n=t.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var l=e.stateNode,o=e.memoizedProps.style,r=o!=null&&o.hasOwnProperty("display")?o.display:null;l.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(g){we(e,e.return,g)}Tc(e,a);break;case 6:try{e.stateNode.nodeValue=a?"":e.memoizedProps,Ne=!0}catch(g){we(e,e.return,g)}break;case 18:try{var f=e.stateNode;a?Up(f,!0):Up(e.stateNode,!1)}catch(g){we(e,e.return,g)}break;case 22:case 23:e.memoizedState===null&&Oc(e,a);break;default:Oc(e,a)}}function Tc(e,a){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var t=e,n=a;switch(t.tag){case 4:Yf(t,n);break e;case 22:t.memoizedState===null&&Tc(t,n);break e;default:Tc(t,n)}}e=e.sibling}}function kf(e){var a=e.alternate;a!==null&&(e.alternate=null,kf(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ai(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,xa=!1;function Ka(e,a,t){for(t=t.child;t!==null;)Qf(e,a,t),t=t.sibling}function Qf(e,a,t){if(Ta&&typeof Ta.onCommitFiberUnmount=="function")try{Ta.onCommitFiberUnmount(Gl,t)}catch{}switch(t.tag){case 26:Te||ia(t,a),Ka(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Te&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Te||ia(t,a),go(t);var n=qe,l=xa;rn(t.type)&&(qe=t.stateNode,xa=!1),Ka(e,a,t),Pp(t.stateNode,t.type,t.memoizedProps),qe=n,xa=l;break;case 5:Te||ia(t,a),go(t);case 6:if(t.tag===6&&go(t),n=qe,l=xa,qe=null,Ka(e,a,t),qe=n,xa=l,qe!==null)if(xa)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(t.stateNode),Ne=!0}catch(o){we(t,a,o)}else try{qe.removeChild(t.stateNode),Ne=!0}catch(o){we(t,a,o)}break;case 18:qe!==null&&(xa?(e=qe,zp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),_l(e)):zp(qe,t.stateNode));break;case 4:n=qe,l=xa,qe=t.stateNode.containerInfo,xa=!0,Ka(e,a,t),qe=n,xa=l;break;case 0:case 11:case 14:case 15:en(2,t,a),Te||en(4,t,a),Ka(e,a,t);break;case 1:Te||(ia(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Df(t,a,n)),Ka(e,a,t);break;case 21:Ka(e,a,t);break;case 22:Te=(n=Te)||t.memoizedState!==null,Ka(e,a,t),Te=n;break;case 30:ia(t,a),Ka(e,a,t);break;case 7:Te||ia(t,a),Ka(e,a,t);break;default:Ka(e,a,t)}}function Xf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(t){we(a,a.return,t)}}}function Zf(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(t){we(a,a.return,t)}}function Og(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new If),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new If),a;default:throw Error(u(435,e.tag))}}function Ji(e,a){var t=Og(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var l=Lg.bind(null,e,n);n.then(l,l)}})}function fa(e,a,t){var n=a.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],r=e,f=a,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(rn(g.type)){qe=g.stateNode,xa=!1;break e}break;case 5:qe=g.stateNode,xa=!1;break e;case 3:case 4:qe=g.stateNode.containerInfo,xa=!0;break e}g=g.return}if(qe===null)throw Error(u(160));Qf(r,f,o),qe=null,xa=!1,r=o.alternate,r!==null&&(r.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Kf(a,e,t),a=a.sibling}var Pa=null;function Kf(e,a,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var o=0;o<n.length;o++){var r=n[o];r.ref.impl=r.nextImpl}fa(a,e,t),pa(e),l&4&&(en(3,e,e.return),vo(3,e),en(5,e,e.return));break;case 1:fa(a,e,t),pa(e),l&512&&(Te||n===null||ia(n,n.return)),l&64&&$e&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:if(o=Pa,fa(a,e,t),pa(e),l&512&&(Te||n===null||ia(n,n.return)),l&4)if(l=n!==null?n.memoizedState:null,t=e.memoizedState,n===null)if(t===null)if(e.stateNode===null)if($e)e.stateNode=Dp(e.type,e.memoizedProps,a.containerInfo,e);else{e:{a=e.type,t=e.memoizedProps,l=o.ownerDocument||o;a:switch(a){case"title":n=l.getElementsByTagName("title")[0],(!n||n[Yl]||n[ta]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=l.createElement(a),l.head.insertBefore(n,l.querySelector("head > title"))),sa(n,a,t),n[ta]=e,Fe(n),a=n;break e;case"link":if(o=ah("link","href",l).get(a+(t.href||""))){for(r=0;r<o.length;r++)if(n=o[r],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(r,1);break a}}n=l.createElement(a),sa(n,a,t),l.head.appendChild(n);break;case"meta":if(o=ah("meta","content",l).get(a+(t.content||""))){for(r=0;r<o.length;r++)if(n=o[r],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(r,1);break a}}n=l.createElement(a),sa(n,a,t),l.head.appendChild(n);break;default:throw Error(u(468,a))}n[ta]=e,Fe(n),a=n}e.stateNode=a}else $e||uu(o,e.type,e.stateNode);else e.stateNode=eh(o,t,e.memoizedProps);else l!==t?(l===null?(a=n.stateNode,a===null||Te||a.parentNode.removeChild(a)):l.count--,t===null?$e||uu(o,e.type,e.stateNode):eh(o,t,e.memoizedProps)):t===null&&e.stateNode!==null&&hc(e,e.memoizedProps,n.memoizedProps);break;case 27:fa(a,e,t),pa(e),l&512&&(Te||n===null||ia(n,n.return)),n!==null&&l&4&&hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(o=rt,rt=!1,fa(a,e,t),rt=o,pa(e),l&512&&(Te||n===null||ia(n,n.return)),e.flags&32){a=e.stateNode;try{Pn(a,""),Ne=!0}catch(D){we(e,e.return,D)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,hc(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Sc=!0);break;case 6:if(fa(a,e,t),pa(e),l&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a,Ne=!0}catch(D){we(e,e.return,D)}}break;case 3:if(Ne=!1,ms=null,o=Pa,Pa=jo(a.containerInfo),fa(a,e,t),Pa=o,pa(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{_l(a.containerInfo)}catch(D){we(e,e.return,D)}Sc&&(Sc=!1,Pf(e)),Ne=!1;break;case 4:l=rt,rt=$e,n=pd(),o=Pa,Pa=jo(e.stateNode.containerInfo),fa(a,e,t),pa(e),Pa=o,Ne&&xo&&(Pi=!0),Ne=n,rt=l;break;case 12:fa(a,e,t),pa(e);break;case 31:fa(a,e,t),pa(e),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 13:fa(a,e,t),pa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(es=Oa()),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 22:o=e.memoizedState!==null,r=n!==null&&n.memoizedState!==null;var f=$e,g=Te,T=rt;$e=f||o,rt=T||o,Te=g||r,fa(a,e,t),Te=g,rt=T,$e=f,pa(e),l&8192&&(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,!o||n===null||r||$e||Te||(a=r||Te,t=$e,n=Te,$e=o||$e,Te=a,an(e,2),$e=t,Te=n),!o&&rt||Oc(e,o)),l&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ji(e,t))));break;case 19:fa(a,e,t),pa(e),l&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ji(e,a)));break;case 30:l&512&&(Te||n===null||ia(n,n.return)),l=pd(),o=xo,r=(t&335544064)===t,f=e.memoizedProps,xo=r&&At(f.default,f.update)!=="none",fa(a,e,t),pa(e),r&&n!==null&&Ne&&(e.flags|=4),xo=o,Ne=l;break;case 21:break;case 7:l&512&&(Te||n===null||ia(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:fa(a,e,t),pa(e)}}function pa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(Mf(n)){t=n;break}n=n.return}n=null;for(var l=e.return;l!==null;){if(fc(l)){var o=l.stateNode;n===null?n=[o]:n.push(o)}if(mc(l))break;l=l.return}var r=n;if(t==null)throw Error(u(160));switch(t.tag){case 27:var f=t.stateNode,g=vc(e);Qi(e,g,f,r);break;case 5:var T=t.stateNode;t.flags&32&&(Pn(T,""),t.flags&=-33);var D=vc(e);Qi(e,D,T,r);break;case 3:case 4:var M=t.stateNode.containerInfo,A=vc(e);gc(e,A,M,r);break;default:throw Error(u(161))}}catch(R){we(e,e.return,R)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Pf(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Dl=!0,a.reset(),Dl=!1),e=e.sibling}}function pl(e,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)Ff(a,e),a=a.sibling;else Gf(a)}function Ff(e,a){var t=e.alternate;if(t===null)xc(e,!1);else switch(e.tag){case 3:if(Ac=ct=!1,qf(),pl(a,e),!ct&&!Pi){if(e=it,e!==null)for(var n=0;n<e.length;n+=3){t=e[n];var l=e[n+1];Lp(t,e[n+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ac=!0}it=null;break;case 5:pl(a,e);break;case 4:n=ct,ct=!1,pl(a,e),ct&&(Pi=!0),ct=n;break;case 22:e.memoizedState===null&&(t.memoizedState!==null?xc(e,!1):pl(a,e));break;case 30:n=ct,l=qf(),ct=!1,pl(a,e),ct&&(e.flags|=4);var o=e.memoizedProps,r=e.stateNode;a=St(o,r),r=St(t.memoizedProps,r);var f=At(o.default,o.update);f==="none"?a=!1:(o=t.memoizedState,t.memoizedState=null,t=e.child,ga=0,a=Ec(e,t,a,r,f,o,!0),ga!==(o===null?0:o.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(Nl(e,e.memoizedProps.onUpdate),it=l):l!==null&&(l.push.apply(l,it),it=l),ct=(e.flags&32)!==0?!0:n;break;default:pl(a,e)}}function ut(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Vf(e,a.alternate,a),a=a.sibling}function an(e,a){for(e=e.child;e!==null;){var t=e,n=a;switch(t.tag){case 0:case 11:case 14:case 15:en(4,t,t.return),an(t,n);break;case 1:ia(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Df(t,t.return,l),an(t,n);break;case 27:(n&2)!==0&&Pp(t.stateNode,t.type,t.memoizedProps);case 5:ia(t,t.return),t.tag!==5&&t.tag!==27||go(t),an(t,n);break;case 6:go(t);break;case 26:ia(t,t.return),l=t.stateNode,t.memoizedState!==null||l===null||Te||l.parentNode.removeChild(l),an(t,n);break;case 22:t.memoizedState===null&&an(t,n);break;case 30:ia(t,t.return),an(t,n);break;case 7:ia(t,t.return);default:an(t,n)}e=e.sibling}}function Fa(e,a,t){for(t=(a.subtreeFlags&8772)!==0?t:t&-2,a=a.child;a!==null;){var n=a.alternate,l=e,o=a,r=o.flags,f=(t&1)!==0;switch(o.tag){case 0:case 11:case 15:Fa(l,o,t),vo(4,o);break;case 1:if(Fa(l,o,t),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){we(n,n.return,D)}if(n=o,l=n.updateQueue,l!==null){var g=n.stateNode;try{var T=l.shared.hiddenCallbacks;if(T!==null)for(l.shared.hiddenCallbacks=null,l=0;l<T.length;l++)gm(T[l],g)}catch(D){we(n,n.return,D)}}f&&r&64&&Cf(o),ot(o,o.return);break;case 27:(t&2)!==0&&zf(o);case 5:o.tag!==5&&o.tag!==27||_f(o),Fa(l,o,t),f&&n===null&&r&4&&pc(o),ot(o,o.return);break;case 6:_f(o);break;case 26:g=o.stateNode,o.memoizedState!==null||g===null||$e||uu(jo(g.ownerDocument),o.type,g),Fa(l,o,t),f&&n===null&&r&4&&pc(o),ot(o,o.return);break;case 12:Fa(l,o,t);break;case 31:Fa(l,o,t),f&&r&4&&Xf(l,o);break;case 13:Fa(l,o,t),f&&r&4&&Zf(l,o);break;case 22:o.memoizedState===null&&Fa(l,o,t),ot(o,o.return);break;case 30:Fa(l,o,t),ot(o,o.return);break;case 7:ot(o,o.return);default:Fa(l,o,t)}a=a.sibling}}function jc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&to(t))}function wc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&to(e))}function Va(e,a,t,n){var l=(t&335544064)===t;if(a.subtreeFlags&(l?10262:10256))for(a=a.child;a!==null;)Jf(e,a,t,n),a=a.sibling;else l&&Bf(a)}function Jf(e,a,t,n){var l=(t&335544064)===t;l&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&Ki(a);var o=a.flags;switch(a.tag){case 0:case 11:case 15:Va(e,a,t,n),o&2048&&vo(9,a);break;case 1:Va(e,a,t,n);break;case 3:Va(e,a,t,n),l&&Ac&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),o&2048&&(o=null,a.alternate!==null&&(o=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==o&&(a.refCount++,o!=null&&to(o)));break;case 12:if(o&2048){Va(e,a,t,n),o=a.stateNode;try{var r=a.memoizedProps,f=r.id,g=r.onPostCommit;typeof g=="function"&&g(f,a.alternate===null?"mount":"update",o.passiveEffectDuration,-0)}catch(T){we(a,a.return,T)}}else Va(e,a,t,n);break;case 31:Va(e,a,t,n);break;case 13:Va(e,a,t,n);break;case 23:break;case 22:r=a.stateNode,f=a.alternate,a.memoizedState!==null?(l&&f!==null&&f.memoizedState===null&&Ki(f),r._visibility&2?Va(e,a,t,n):bo(e,a)):(l&&f!==null&&f.memoizedState!==null&&Ki(a),r._visibility&2?Va(e,a,t,n):(r._visibility|=2,hl(e,a,t,n,(a.subtreeFlags&10256)!==0||!1))),o&2048&&jc(f,a);break;case 24:Va(e,a,t,n),o&2048&&wc(a.alternate,a);break;case 30:l&&(o=a.alternate,o!==null&&(st(o.child,!0),st(a.child,!0))),Va(e,a,t,n);break;default:Va(e,a,t,n)}}function hl(e,a,t,n,l){for(l=l&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var o=e,r=a,f=t,g=n,T=r.flags;switch(r.tag){case 0:case 11:case 15:hl(o,r,f,g,l),vo(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?hl(o,r,f,g,l):bo(o,r):(D._visibility|=2,hl(o,r,f,g,l)),l&&T&2048&&jc(r.alternate,r);break;case 24:hl(o,r,f,g,l),l&&T&2048&&wc(r.alternate,r);break;default:hl(o,r,f,g,l)}a=a.sibling}}function bo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,l=n.flags;switch(n.tag){case 22:bo(t,n),l&2048&&jc(n.alternate,n);break;case 24:bo(t,n),l&2048&&wc(n.alternate,n);break;default:bo(t,n)}a=a.sibling}}var Un=8192;function qn(e,a,t){if(e.subtreeFlags&Un)for(e=e.child;e!==null;)$f(e,a,t),e=e.sibling}function $f(e,a,t){switch(e.tag){case 26:qn(e,a,t),e.flags&Un&&(e.memoizedState!==null?Dx(t,Pa,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&oh(t,e)));break;case 5:qn(e,a,t),e.flags&Un&&(e=e.stateNode,(a&335544128)===a&&oh(t,e));break;case 3:case 4:var n=Pa;Pa=jo(e.stateNode.containerInfo),qn(e,a,t),Pa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Un,Un=16777216,qn(e,a,t),Un=n):qn(e,a,t));break;case 30:if((e.flags&Un)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var l=e.stateNode;l.paired=null,Da===null&&(Da=new Map),Da.set(n,l)}qn(e,a,t);break;default:qn(e,a,t)}}function Wf(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function yo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];We=n,ap(n,e)}Wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ep(e),e=e.sibling}function ep(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&en(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,$i(e)):yo(e);break;default:yo(e)}}function $i(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];We=n,ap(n,e)}Wf(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:en(8,a,a.return),$i(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,$i(a));break;default:$i(a)}e=e.sibling}}function ap(e,a){for(;We!==null;){var t=We;switch(t.tag){case 0:case 11:case 15:en(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:to(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,We=n;else e:for(t=e;We!==null;){n=We;var l=n.sibling,o=n.return;if(kf(n),n===t){We=null;break e}if(l!==null){l.return=o,We=l;break e}We=o}}}var Tg={getCacheForType:function(e){var a=na(ke),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return na(ke).controller.signal}},jg=typeof WeakMap=="function"?WeakMap:Map,Ae=0,De=null,pe=null,ve=0,je=0,_a=null,tn=!1,vl=!1,Rc=!1,Mt=0,Ge=0,nn=0,Ln=0,Wi=0,Ma=0,gl=0,No=null,ba=null,Cc=!1,es=0,tp=0,as=1/0,ts=null,ln=null,Le=0,Ja=null,Hn=null,dt=0,Dc=0,_c=null,np=null,xl=null,bl=null,yl=null,Eo=0,ns=null;function za(){return(Ae&2)!==0&&ve!==0?ve&-ve:K.T!==null?Vc():od()}function lp(){if(Ma===0)if((ve&536870912)===0||ue){var e=Jo;Jo<<=1,(Jo&3932160)===0&&(Jo=262144),Ma=e}else Ma=536870912;return e=la.current,e!==null&&(e.flags|=32),Ma}function Nl(e,a){if(a!=null){var t=e.stateNode,n=t.ref;n===null&&(n=t.ref=Hp(St(e.memoizedProps,t))),bl===null&&(bl=[]),bl.push(a.bind(null,n))}}function ya(e,a,t){(e===De&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(El(e,0),on(e,ve,Ma,!1)),Vl(e,t),((Ae&2)===0||e!==De)&&(e===De&&((Ae&2)===0&&(Ln|=t),Ge===4&&on(e,ve,Ma,!1)),mt(e))}function op(e,a,t){if((Ae&6)!==0)throw Error(u(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Il(e,a),l=n?Cg(e,a):zc(e,a,!0),o=n;do{if(l===0){vl&&!n&&on(e,a,0,!1);break}else{if(t=e.current.alternate,o&&!wg(t)){l=zc(e,a,!1),o=!1;continue}if(l===2){if(o=a,e.errorRecoveryDisabledLanes&o)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){a=r;e:{var f=e;l=No;var g=f.current.memoizedState.isDehydrated;if(g&&(El(f,r).flags|=256),r=zc(f,r,!1),r!==2&&r!==6){if(Rc&&!g){f.errorRecoveryDisabledLanes|=o,Ln|=o,l=4;break e}o=ba,ba=l,o!==null&&(ba===null?ba=o:ba.push.apply(ba,o))}l=r}if(o=!1,l!==2)continue}}if(l===1){El(e,0),on(e,a,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:on(n,a,Ma,!tn);break e;case 2:ba=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(l=es+300-Oa(),10<l)){if(on(n,a,Ma,!tn),Wo(n,0,!0)!==0)break e;dt=a,n.timeoutHandle=Wc(ip.bind(null,n,t,ba,ts,Cc,a,Ma,Ln,gl,tn,o,"Throttled",-0,0),l);break e}ip(n,t,ba,ts,Cc,a,Ma,Ln,gl,tn,o,null,-0,0)}}break}while(!0);mt(e)}function ip(e,a,t,n,l,o,r,f,g,T,D,M,A,R){e.timeoutHandle=-1;var G=a.subtreeFlags,X=(o&335544064)===o;if(M=null,(X||G&8192||(G&16785408)===16785408)&&(M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tt},Da=null,$f(a,o,M),X&&(G=M,X=e.containerInfo,X=(X.nodeType===9?X:X.ownerDocument).__reactViewTransition,X!=null&&(G.count++,G.waitingForViewTransition=!0,G=Co.bind(G),X.finished.then(G,G))),G=(o&62914560)===o?es-Oa():(o&4194048)===o?tp-Oa():0,G=_x(M,G),G!==null)){dt=o,e.cancelPendingCommit=G(pp.bind(null,e,a,o,t,n,l,r,f,g,T,D,M,null,A,R)),on(e,o,r,!T);return}pp(e,a,o,t,n,l,r,f,g,T,D,M)}function wg(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var l=t[n],o=l.getSnapshot;l=l.value;try{if(!Ra(o(),l))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function on(e,a,t,n){a=ed(e,a),a&=~Wi,a&=~Ln,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var l=a;0<l;){var o=31-ja(l),r=1<<o;n[o]=-1,l&=~r}t!==0&&td(e,t,a)}function ls(){return(Ae&6)===0?(So(0),!1):!0}function Mc(){if(pe!==null){if(je===0)var e=pe.return;else e=pe,jt=On=null,Ir(e),rl=null,oo=0,e=pe;for(;e!==null;)Rf(e.alternate,e),e=e.return;pe=null}}function El(e,a){var t=e.timeoutHandle;return t!==-1&&(e.timeoutHandle=-1,$g(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),dt=0,Mc(),De=e,pe=t=Ot(e.current,null),ve=a,je=0,_a=null,tn=!1,vl=Il(e,a),Rc=!1,gl=Ma=Wi=Ln=nn=Ge=0,ba=No=null,Cc=!1,Mt=ed(e,a),mi(),t}function sp(e,a){ie=null,K.H=Li,a===sl||a===Si?(a=fm(),je=3):a===wr?(a=fm(),je=4):je=a===tc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,_a=a,pe===null&&(Ge=1,Hi(e,Ha(a,e.current)))}function rp(){var e=la.current;return e===null?!0:(ve&4194048)===ve?ca===null:(ve&62914560)===ve||(ve&536870912)!==0?e===ca:!1}function cp(){var e=K.H;return K.H=Li,e===null?Li:e}function up(){var e=K.A;return K.A=Tg,e}function os(){Ge=4,tn||(ve&4194048)!==ve&&la.current!==null||(vl=!0),(nn&134217727)===0&&(Ln&134217727)===0||De===null||on(De,ve,Ma,!1)}function zc(e,a,t){var n=Ae;Ae|=2;var l=cp(),o=up();(De!==e||ve!==a)&&(ts=null,El(e,a)),a=!1;var r=Ge;e:do try{if(je!==0&&pe!==null){var f=pe,g=_a;switch(je){case 8:Mc(),r=6;break e;case 3:case 2:case 9:case 6:la.current===null&&(a=!0);var T=je;if(je=0,_a=null,Sl(e,f,g,T),t&&vl){r=0;break e}break;default:T=je,je=0,_a=null,Sl(e,f,g,T)}}Rg(),r=Ge;break}catch(D){sp(e,D)}while(!0);return a&&e.shellSuspendCounter++,jt=On=null,Ae=n,K.H=l,K.A=o,pe===null&&(De=null,ve=0,mi()),r}function Rg(){for(;pe!==null;)dp(pe)}function Cg(e,a){var t=Ae;Ae|=2;var n=cp(),l=up();De!==e||ve!==a?(ts=null,as=Oa()+500,El(e,a)):vl=Il(e,a);e:do try{if(je!==0&&pe!==null){a=pe;var o=_a;a:switch(je){case 1:je=0,_a=null,Sl(e,a,o,1);break;case 2:case 9:if(dm(o)){je=0,_a=null,mp(a);break}a=function(){je!==2&&je!==9||De!==e||(je=7),mt(e)},o.then(a,a);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:dm(o)?(je=0,_a=null,mp(a)):(je=0,_a=null,Sl(e,a,o,7));break;case 5:var r=null;switch(pe.tag){case 26:r=pe.memoizedState;case 5:case 27:var f=pe;if(r?nh(r):f.stateNode.complete){je=0,_a=null;var g=f.sibling;if(g!==null)pe=g;else{var T=f.return;T!==null?(pe=T,is(T)):pe=null}break a}}je=0,_a=null,Sl(e,a,o,5);break;case 6:je=0,_a=null,Sl(e,a,o,6);break;case 8:Mc(),Ge=6;break e;default:throw Error(u(462))}}Dg();break}catch(D){sp(e,D)}while(!0);return jt=On=null,K.H=n,K.A=l,Ae=t,pe!==null?0:(De=null,ve=0,mi(),Ge)}function Dg(){for(;pe!==null&&!Kv();)dp(pe)}function dp(e){var a=jf(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,a===null?is(e):pe=a}function mp(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=yf(t,a,a.pendingProps,a.type,void 0,ve);break;case 11:a=yf(t,a,a.pendingProps,a.type.render,a.ref,ve);break;case 5:Ir(a);var n=a;n===Je&&(ue?(xi(n),n.tag===5&&n.stateNode!=null&&(Me=n.stateNode)):(xi(n),ue=!0));default:Rf(t,a),a=pe=em(a,Mt),a=jf(t,a,Mt)}e.memoizedProps=e.pendingProps,a===null?is(e):pe=a}function Sl(e,a,t,n){jt=On=null,Ir(a),rl=null,oo=0;var l=a.return;try{if(xg(e,l,a,t,ve)){Ge=1,Hi(e,Ha(t,e.current)),pe=null;return}}catch(o){if(l!==null)throw pe=l,o;Ge=1,Hi(e,Ha(t,e.current)),pe=null;return}a.flags&32768?(ue||n===1?e=!0:vl||(ve&536870912)!==0?e=!1:(tn=e=!0,(n===2||n===9||n===3||n===6)&&(n=la.current,n!==null&&n.tag===13&&(n.flags|=16384))),fp(a,e)):is(a)}function is(e){var a=e;do{if((a.flags&32768)!==0){fp(a,tn);return}e=a.return;var t=Eg(a.alternate,a,Mt);if(t!==null){pe=t;return}if(a=a.sibling,a!==null){pe=a;return}pe=a=e}while(a!==null);Ge===0&&(Ge=5)}function fp(e,a){do{var t=Sg(e.alternate,e);if(t!==null){t.flags&=32767,pe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){pe=e;return}pe=e=t}while(e!==null);Ge=6,pe=null}function pp(e,a,t,n,l,o,r,f,g,T,D,M){e.cancelPendingCommit=null;do ss();while(Le!==0);if((Ae&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));e===De&&(pe=De=null,ve=0),Hn=a,Ja=e,dt=t,_c=l,np=n,_g(e,a,t,r,f,g,M)}}function _g(e,a,t,n,l,o,r){var f=a.lanes|a.childLanes;if(Dc=f,f|=hr,l0(e,t,f,n,l,o),bl=null,(t&335544064)===t?(yl=ig(e),n=10262):(yl=null,n=10256),(a.subtreeFlags&n)!==0||(a.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,Hg(Po,function(){return Hc(),null})):(e.callbackNode=null,e.callbackPriority=0),Xi=!1,n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=K.T,K.T=null,l=te.p,te.p=2,o=Ae,Ae|=4;try{Ag(e,a,t)}finally{Ae=o,te.p=l,K.T=n}}Le=1,Xi?xl=lx(r,e.containerInfo,yl,Uc,qc,zg,Lc,Hc,Mg):(Uc(),qc(),Lc())}function Mg(e){if(Le!==0){var a=Ja.onRecoverableError;a(e,{componentStack:null})}}function zg(){Le===3&&(Le=0,Ff(Hn,Ja),Le=4)}function Uc(){if(Le===1){Le=0;var e=Ja,a=Hn,t=dt,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=K.T,K.T=null;var l=te.p;te.p=2;var o=Ae;Ae|=4;try{xo=Pi=!1,Kf(a,e,t),t=Fc;var r=kd(e.containerInfo),f=t.focusedElem,g=t.selectionRange;if(r!==f&&f&&f.ownerDocument&&Yd(f.ownerDocument.documentElement,f)){if(g!==null&&ur(f)){var T=g.start,D=g.end;if(D===void 0&&(D=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(D,f.value.length);else{var M=f.ownerDocument||document,A=M&&M.defaultView||window;if(A.getSelection){var R=A.getSelection(),G=f.textContent.length,X=Math.min(g.start,G),se=g.end===void 0?X:Math.min(g.end,G);!R.extend&&X>se&&(r=se,se=X,X=r);var O=Vd(f,X),b=Vd(f,se);if(O&&b&&(R.rangeCount!==1||R.anchorNode!==O.node||R.anchorOffset!==O.offset||R.focusNode!==b.node||R.focusOffset!==b.offset)){var w=M.createRange();w.setStart(O.node,O.offset),R.removeAllRanges(),X>se?(R.addRange(w),R.extend(b.node,b.offset)):(w.setEnd(b.node,b.offset),R.addRange(w))}}}}for(M=[],R=f;R=R.parentNode;)R.nodeType===1&&M.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<M.length;f++){var _=M[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Dl=!!Pc,Fc=Pc=null}finally{Ae=o,te.p=l,K.T=n}}e.current=a,Le=2}}function qc(){if(Le===2){Le=0;var e=Ja,a=Hn,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=K.T,K.T=null;var n=te.p;te.p=2;var l=Ae;Ae|=4;try{Vf(e,a.alternate,a)}finally{Ae=l,te.p=n,K.T=t}}Le=3}}function Lc(){if(Le===4||Le===3){Le=0;var e=xl;xl=null,Pv();var a=Ja,t=Hn,n=dt,l=np,o=(n&335544064)===n?10262:10256;if((t.subtreeFlags&o)!==0||(t.flags&o)!==0?Le=5:(Le=0,Hn=Ja=null,hp(a,a.pendingLanes)),o=a.pendingLanes,o===0&&(ln=null),Xs(n),t=t.stateNode,Ta&&typeof Ta.onCommitFiberRoot=="function")try{Ta.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=K.T,o=te.p,te.p=2,K.T=null;try{for(var r=a.onRecoverableError,f=0;f<l.length;f++){var g=l[f];r(g.value,{componentStack:g.stack})}}finally{K.T=t,te.p=o}}if(l=bl,r=yl,yl=null,l!==null&&(bl=null,r===null&&(r=[]),e!==null))for(g=0;g<l.length;g++)t=(0,l[g])(r),t!==void 0&&e.finished.finally(t);(dt&3)!==0&&ss(),mt(a),o=a.pendingLanes,(n&261930)!==0&&(o&42)!==0?a===ns?Eo++:(Eo=0,ns=a):(Eo=0,ns=null),So(0)}}function hp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,to(a)))}function ss(){return xl!==null&&(xl.skipTransition(),xl=null),Uc(),qc(),Lc(),Hc()}function Hc(){if(Le!==5)return!1;var e=Ja,a=Dc;Dc=0;var t=Xs(dt),n=K.T,l=te.p;try{te.p=32>t?32:t,K.T=null,t=_c,_c=null;var o=Ja,r=dt;if(Le=0,Hn=Ja=null,dt=0,(Ae&6)!==0)throw Error(u(331));var f=Ae;if(Ae|=4,ep(o.current),Jf(o,o.current,r,t),Ae=f,So(0,!1),Ta&&typeof Ta.onPostCommitFiberRoot=="function")try{Ta.onPostCommitFiberRoot(Gl,o)}catch{}return!0}finally{te.p=l,K.T=n,hp(e,a)}}function vp(e,a,t){a=Ha(t,a),a=ac(e.stateNode,a,2),e=Ft(e,a,2),e!==null&&(Vl(e,2),mt(e))}function we(e,a,t){if(e.tag===3)vp(e,e,t);else for(;a!==null;){if(a.tag===3){vp(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ln===null||!ln.has(n))){e=Ha(t,e),t=mf(2),n=Ft(a,t,2),n!==null&&(ff(t,n,a,e),Vl(n,2),mt(n));break}}a=a.return}}function Bc(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new jg;var l=new Set;n.set(a,l)}else l=n.get(a),l===void 0&&(l=new Set,n.set(a,l));l.has(t)||(Rc=!0,l.add(t),e=Ug.bind(null,e,a,t),a.then(e,e))}function Ug(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,De===e&&(ve&t)===t&&((Ge===4||Ge===3&&(ve&62914560)===ve&&300>Oa()-es)&&(Ae&2)===0?El(e,0):Wi|=t,gl===ve&&(gl=0)),mt(e)}function gp(e,a){a===0&&(a=ad()),e=En(e,a),e!==null&&(Vl(e,a),mt(e))}function qg(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),gp(e,t)}function Lg(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(a),gp(e,t)}function Hg(e,a){return Vs(e,a)}var Al=null,Ol=null,Gc=!1,rs=!1,Ic=!1,sn=0;function mt(e){e!==Ol&&e.next===null&&(Ol===null?Al=Ol=e:Ol=Ol.next=e),rs=!0,Gc||(Gc=!0,Gg())}function So(e,a){if(!Ic&&rs){Ic=!0;do for(var t=!1,n=Al;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var r=n.suspendedLanes,f=n.pingedLanes;o=(1<<31-ja(42|e)+1)-1,o&=l&~(r&~f),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Np(n,o))}else o=ve,o=Wo(n,n===De?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Il(n,o)||(t=!0,Np(n,o));n=n.next}while(t);Ic=!1}}function Bg(){xp()}function xp(){rs=Gc=!1;var e=0;sn!==0&&Jg()&&(e=sn);for(var a=Oa(),t=null,n=Al;n!==null;){var l=n.next,o=bp(n,a);o===0?(n.next=null,t===null?Al=l:t.next=l,l===null&&(Ol=t)):(t=n,(e!==0||(o&3)!==0)&&(rs=!0)),n=l}Le!==0&&Le!==5||So(e),sn!==0&&(sn=0)}function bp(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var r=31-ja(o),f=1<<r,g=l[r];g===-1?((f&t)===0||(f&n)!==0)&&(l[r]=n0(f,a)):g<=a&&(e.expiredLanes|=f),o&=~f}if(a=De,t=ve,t=Wo(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(je===2||je===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Il(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&Ys(n),Xs(t)){case 2:case 8:t=$u;break;case 32:t=Po;break;case 268435456:t=Wu;break;default:t=Po}return n=yp.bind(null,e),t=Vs(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&Ys(n),e.callbackPriority=2,e.callbackNode=null,2}function yp(e,a){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(ss()&&e.callbackNode!==t)return null;var n=ve;return n=Wo(e,e===De?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(op(e,n,a),bp(e,Oa()),e.callbackNode!=null&&e.callbackNode===t?yp.bind(null,e):null)}function Np(e,a){if(ss())return null;op(e,a,!0)}function Gg(){Wg(function(){(Ae&6)!==0?Vs(Ju,Bg):xp()})}function Vc(){if(sn===0){var e=wn;e===0&&(e=Fo,Fo<<=1,(Fo&261888)===0&&(Fo=256)),sn=e}return sn}function Ep(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:li(e)}function Ig(e,a,t,n,l){if(a==="submit"&&t&&t.stateNode===l){var o=Ep((l[ha]||null).action),r=n.submitter;r&&(a=(a=r[ha]||null)?Ep(a.formAction):r.getAttribute("formAction"),a!==null&&(o=a,r=null));var f=new ri("action","action",null,n,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(sn!==0){var g=new FormData(l,r);Fr(t,{pending:!0,data:g,method:l.method,action:o},null,g)}}else typeof o=="function"&&(f.preventDefault(),g=new FormData(l,r),Fr(t,{pending:!0,data:g,method:l.method,action:o},o,g))},currentTarget:l}]})}}for(var Yc=0;Yc<pr.length;Yc++){var kc=pr[Yc],Vg=kc.toLowerCase(),Yg=kc[0].toUpperCase()+kc.slice(1);Za(Vg,"on"+Yg)}Za(Zd,"onAnimationEnd"),Za(Kd,"onAnimationIteration"),Za(Pd,"onAnimationStart"),Za("dblclick","onDoubleClick"),Za("focusin","onFocus"),Za("focusout","onBlur"),Za($0,"onTransitionRun"),Za(W0,"onTransitionStart"),Za(eg,"onTransitionCancel"),Za(Fd,"onTransitionEnd"),Zn("onMouseEnter",["mouseout","mouseover"]),Zn("onMouseLeave",["mouseout","mouseover"]),Zn("onPointerEnter",["pointerout","pointerover"]),Zn("onPointerLeave",["pointerout","pointerover"]),bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function Sp(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],l=n.event;n=n.listeners;e:{var o=void 0;if(a)for(var r=n.length-1;0<=r;r--){var f=n[r],g=f.instance,T=f.currentTarget;if(f=f.listener,g!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=T;try{o(l)}catch(D){di(D)}l.currentTarget=null,o=g}else for(r=0;r<n.length;r++){if(f=n[r],g=f.instance,T=f.currentTarget,f=f.listener,g!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=T;try{o(l)}catch(D){di(D)}l.currentTarget=null,o=g}}}}function he(e,a){var t=a[sd];t===void 0&&(t=a[sd]=new Set);var n=e+"__bubble";t.has(n)||(Ap(a,e,2,!1),t.add(n))}function Qc(e,a,t){var n=0;a&&(n|=4),Ap(t,e,n,a)}var cs="_reactListening"+Math.random().toString(36).slice(2);function Xc(e){if(!e[cs]){e[cs]=!0,ud.forEach(function(t){t!=="selectionchange"&&(kg.has(t)||Qc(t,!1,e),Qc(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[cs]||(a[cs]=!0,Qc("selectionchange",!1,a))}}function Ap(e,a,t,n){switch(fh(a)){case 2:var l=qx;break;case 8:l=Lx;break;default:l=mu}t=l.bind(null,a,t,e),l=void 0,!er||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(a,t,{capture:!0,passive:l}):e.addEventListener(a,t,!0):l!==void 0?e.addEventListener(a,t,{passive:l}):e.addEventListener(a,t,!1)}function Zc(e,a,t,n,l){var o=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var f=n.stateNode.containerInfo;if(f===l)break;if(r===4)for(r=n.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;f!==null;){if(r=xn(f),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){n=o=r;continue e}f=f.parentNode}}n=n.return}Sd(function(){var T=o,D=$s(t),M=[];e:{var A=Jd.get(e);if(A!==void 0){var R=ri,G=e;switch(e){case"keypress":if(ii(t)===0)break e;case"keydown":case"keyup":R=w0;break;case"focusin":G="focus",R=lr;break;case"focusout":G="blur",R=lr;break;case"beforeblur":case"afterblur":R=lr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=M0;break;case Zd:case Kd:case Pd:R=b0;break;case Fd:R=U0;break;case"scroll":case"scrollend":R=p0;break;case"wheel":R=L0;break;case"copy":case"cut":case"paste":R=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=wd;break;case"submit":R=D0;break;case"toggle":case"beforetoggle":R=B0}var X=(a&4)!==0,se=!X&&(e==="scroll"||e==="scrollend"),O=X?A!==null?A+"Capture":null:A;X=[];for(var b=T,w;b!==null;){var _=b;if(w=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||w===null||O===null||(_=Ql(b,O),_!=null&&X.push(Oo(b,_,w))),se)break;b=b.return}0<X.length&&(A=new R(A,G,null,t,D),M.push({event:A,listeners:X}))}}if((a&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",R&&t!==Js&&(G=t.relatedTarget||t.fromElement)&&(xn(G)||G[kn]))break e;(A||R)&&(G=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,A?(R=t.relatedTarget||t.toElement,A=T,R=R?xn(R):null,R!==null&&(se=p(R),X=R.tag,R!==se||X!==5&&X!==27&&X!==6)&&(R=null)):(A=null,R=T),A!==R&&(X=Td,_="onMouseLeave",O="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(X=wd,_="onPointerLeave",O="onPointerEnter",b="pointer"),se=A==null?G:kl(A),w=R==null?G:kl(R),G=new X(_,b+"leave",A,t,D),G.target=se,G.relatedTarget=w,_=null,xn(D)===T&&(X=new X(O,b+"enter",R,t,D),X.target=w,X.relatedTarget=se,_=X),se=_,X=A&&R?Ee(A,R,Qg):null,A!==null&&Op(M,G,A,X,!1),R!==null&&se!==null&&Op(M,se,R,X,!0)))}e:{if(A=T?kl(T):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var Q=qd;else if(zd(A))if(Ld)Q=P0;else{Q=Z0;var ge=X0}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?T&&Fs(T.elementType)&&(Q=qd):Q=K0;if(Q&&(Q=Q(e,T))){Ud(M,Q,t,D);break e}ge&&ge(e,A,T)}switch(ge=T?kl(T):window,e){case"focusin":(zd(ge)||ge.contentEditable==="true")&&(Wn=ge,dr=T,Wl=null);break;case"focusout":Wl=dr=Wn=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,Qd(M,t,D);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":Qd(M,t,D)}var P;if(ir)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else $n?_d(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(Rd&&t.locale!=="ko"&&($n||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&$n&&(P=Ad()):(It=D,ar="value"in It?It.value:It.textContent,$n=!0)),ge=us(T,ae),0<ge.length&&(ae=new jd(ae,e,null,t,D),M.push({event:ae,listeners:ge}),P?ae.data=P:(P=Md(t),P!==null&&(ae.data=P)))),(P=I0?V0(e,t):Y0(e,t))&&(ae=us(T,"onBeforeInput"),0<ae.length&&(ge=new jd("onBeforeInput","beforeinput",null,t,D),M.push({event:ge,listeners:ae}),ge.data=P)),Ig(M,e,T,t,D)}Sp(M,a)})}function Oo(e,a,t){return{instance:e,listener:a,currentTarget:t}}function us(e,a){for(var t=a+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Ql(e,t),l!=null&&n.unshift(Oo(e,l,o)),l=Ql(e,a),l!=null&&n.push(Oo(e,l,o))),e.tag===3)return n;e=e.return}return[]}function Qg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Op(e,a,t,n,l){for(var o=a._reactName,r=[];t!==null&&t!==n;){var f=t,g=f.alternate,T=f.stateNode;if(f=f.tag,g!==null&&g===n)break;f!==5&&f!==26&&f!==27||T===null||(g=T,l?(T=Ql(t,o),T!=null&&r.unshift(Oo(t,T,g))):l||(T=Ql(t,o),T!=null&&r.push(Oo(t,T,g)))),t=t.return}r.length!==0&&e.push({event:a,listeners:r})}var Xg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function Tp(e){return(typeof e=="string"?e:""+e).replace(Xg,`
`).replace(Zg,"")}function jp(e,a){return a=Tp(a),Tp(e)===a}function Re(e,a,t,n,l,o){switch(t){case"children":if(typeof n=="string")a==="body"||a==="textarea"&&n===""||Pn(e,n);else if(typeof n=="number"||typeof n=="bigint")a!=="body"&&Pn(e,""+n);else return;break;case"className":ni(e,"class",n);break;case"tabIndex":ni(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(e,t,n);break;case"style":Nd(e,n,o);return;case"data":if(a!=="object"){ni(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=li(n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(a!=="input"&&Re(e,a,"name",l.name,l,null),Re(e,a,"formEncType",l.formEncType,l,null),Re(e,a,"formMethod",l.formMethod,l,null),Re(e,a,"formTarget",l.formTarget,l,null)):(Re(e,a,"encType",l.encType,l,null),Re(e,a,"method",l.method,l,null),Re(e,a,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=li(n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=tt);return;case"onScroll":n!=null&&he("scroll",e);return;case"onScrollEnd":n!=null&&he("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(u(60));(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=li(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":he("beforetoggle",e),he("toggle",e),ti(e,"popover",n);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ti(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=m0.get(t)||t,ti(e,t,n);else return}Ne=!0}function Kc(e,a,t,n,l,o){switch(t){case"style":Nd(e,n,o);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(t=n.__html,t!=null){if(l.children!=null)throw Error(u(60));(o!=null?o.__html:void 0)!==t&&(e.innerHTML=t)}}break;case"children":if(typeof n=="string")Pn(e,n);else if(typeof n=="number"||typeof n=="bigint")Pn(e,""+n);else return;break;case"onScroll":n!=null&&he("scroll",e);return;case"onScrollEnd":n!=null&&he("scrollend",e);return;case"onClick":n!=null&&(e.onclick=tt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!dd.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),o=t.slice(2,l?t.length-7:void 0),a=e[ha]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(o,a,l),typeof n=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(o,n,l);break e}Ne=!0,t in e?e[t]=n:n===!0?e.setAttribute(t,""):ti(e,t,n)}return}Ne=!0}function sa(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var n=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var r=t[o];if(r!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Re(e,a,o,r,t,null)}}l&&Re(e,a,"srcSet",t.srcSet,t,null),n&&Re(e,a,"src",t.src,t,null);return;case"input":he("invalid",e);var f=o=r=l=null,g=null,T=null;for(n in t)if(t.hasOwnProperty(n)){var D=t[n];if(D!=null)switch(n){case"name":l=D;break;case"type":r=D;break;case"checked":g=D;break;case"defaultChecked":T=D;break;case"value":o=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,a));break;default:Re(e,a,n,D,t,null)}}gd(e,o,f,g,T,r,l,!1);return;case"select":he("invalid",e),n=r=o=null;for(l in t)if(t.hasOwnProperty(l)&&(f=t[l],f!=null))switch(l){case"value":o=f;break;case"defaultValue":r=f;break;case"multiple":n=f;default:Re(e,a,l,f,t,null)}a=o,t=r,e.multiple=!!n,a!=null?Kn(e,!!n,a,!1):t!=null&&Kn(e,!!n,t,!0);return;case"textarea":he("invalid",e),o=l=n=null;for(r in t)if(t.hasOwnProperty(r)&&(f=t[r],f!=null))switch(r){case"value":n=f;break;case"defaultValue":l=f;break;case"children":o=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:Re(e,a,r,f,t,null)}bd(e,n,l,o);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(n=t[g],n!=null))switch(g){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Re(e,a,g,n,t,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(n=0;n<Ao.length;n++)he(Ao[n],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in t)if(t.hasOwnProperty(T)&&(n=t[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Re(e,a,T,n,t,null)}return;default:if(Fs(a)){for(D in t)t.hasOwnProperty(D)&&(n=t[D],n!==void 0&&Kc(e,a,D,n,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(n=t[f],n!=null&&Re(e,a,f,n,t,null))}var Kg={};function Pg(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,r=null,f=null,g=null,T=null,D=null;for(R in t){var M=t[R];if(t.hasOwnProperty(R)&&M!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":g=M;default:n.hasOwnProperty(R)||Re(e,a,R,null,n,M)}}for(var A in n){var R=n[A];if(M=t[A],n.hasOwnProperty(A)&&(R!=null||M!=null))switch(A){case"type":R!==M&&(Ne=!0),o=R;break;case"name":R!==M&&(Ne=!0),l=R;break;case"checked":R!==M&&(Ne=!0),T=R;break;case"defaultChecked":R!==M&&(Ne=!0),D=R;break;case"value":R!==M&&(Ne=!0),r=R;break;case"defaultValue":R!==M&&(Ne=!0),f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,a));break;default:R!==M&&Re(e,a,A,R,n,M)}}Ks(e,r,f,g,T,D,o,l);return;case"select":R=r=f=A=null;for(o in t)if(g=t[o],t.hasOwnProperty(o)&&g!=null)switch(o){case"value":break;case"multiple":R=g;default:n.hasOwnProperty(o)||Re(e,a,o,null,n,g)}for(l in n)if(o=n[l],g=t[l],n.hasOwnProperty(l)&&(o!=null||g!=null))switch(l){case"value":o!==g&&(Ne=!0),A=o;break;case"defaultValue":o!==g&&(Ne=!0),f=o;break;case"multiple":o!==g&&(Ne=!0),r=o;default:o!==g&&Re(e,a,l,o,n,g)}a=f,t=r,n=R,A!=null?Kn(e,!!t,A,!1):!!n!=!!t&&(a!=null?Kn(e,!!t,a,!0):Kn(e,!!t,t?[]:"",!1));return;case"textarea":R=A=null;for(f in t)if(l=t[f],t.hasOwnProperty(f)&&l!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Re(e,a,f,null,n,l)}for(r in n)if(l=n[r],o=t[r],n.hasOwnProperty(r)&&(l!=null||o!=null))switch(r){case"value":l!==o&&(Ne=!0),A=l;break;case"defaultValue":l!==o&&(Ne=!0),R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==o&&Re(e,a,r,l,n,o)}xd(e,A,R);return;case"option":for(var G in t)if(A=t[G],t.hasOwnProperty(G)&&A!=null&&!n.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:Re(e,a,G,null,n,A)}for(g in n)if(A=n[g],R=t[g],n.hasOwnProperty(g)&&A!==R&&(A!=null||R!=null))switch(g){case"selected":A!==R&&(Ne=!0),e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Re(e,a,g,A,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in t)A=t[X],t.hasOwnProperty(X)&&A!=null&&!n.hasOwnProperty(X)&&Re(e,a,X,null,n,A);for(T in n)if(A=n[T],R=t[T],n.hasOwnProperty(T)&&A!==R&&(A!=null||R!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,a));break;default:Re(e,a,T,A,n,R)}return;default:if(Fs(a)){for(var se in t)A=t[se],t.hasOwnProperty(se)&&A!==void 0&&!n.hasOwnProperty(se)&&Kc(e,a,se,void 0,n,A);for(D in n)A=n[D],R=t[D],!n.hasOwnProperty(D)||A===R||A===void 0&&R===void 0||Kc(e,a,D,A,n,R);return}}for(var O in t)A=t[O],t.hasOwnProperty(O)&&A!=null&&!n.hasOwnProperty(O)&&Re(e,a,O,null,n,A);for(M in n)A=n[M],R=t[M],!n.hasOwnProperty(M)||A===R||A==null&&R==null||Re(e,a,M,A,n,R)}function wp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var l=t[n],o=l.transferSize,r=l.initiatorType,f=l.duration;if(o&&f&&wp(r)){for(r=0,f=l.responseEnd,n+=1;n<t.length;n++){var g=t[n],T=g.startTime;if(T>f)break;var D=g.transferSize,M=g.initiatorType;D&&wp(M)&&(g=g.responseEnd,r+=D*(g<f?1:(f-T)/(g-T)))}if(--n,a+=8*(o+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pc=null,Fc=null;function To(e){return e.nodeType===9?e:e.ownerDocument}function Rp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Dp(e,a,t,n){return t=To(t).createElement(e),t[ta]=n,t[ha]=a,sa(t,e,a),Fe(t),t}function Jc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $c=null;function Jg(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var Wc=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,Mp=typeof requestAnimationFrame=="function"?requestAnimationFrame:Wc,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(e){return _p.resolve(null).then(e).catch(ex)}:Wc;function ex(e){setTimeout(function(){throw e})}function rn(e){return e==="head"}function zp(e,a){var t=a,n=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(l),_l(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")su(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,su(t);for(var o=t.firstChild;o;){var r=o.nextSibling,f=o.nodeName;o[Yl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=r}}else t==="body"&&su(e.ownerDocument.body);t=l}while(t);_l(a)}function Up(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function qp(e,a,t){if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline"){if(a=e.getClientRects(),a.length===1)var n=1;else for(var l=n=0;l<a.length;l++){var o=a[l];0<o.width&&0<o.height&&n++}n===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)}}function Lp(e,a){e=e.style,a=a.style;var t=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(t=a.display,e.display=t==null||typeof t=="boolean"?"":t,t=a.margin,t!=null?e.margin=t:(t=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))}function ax(e,a,t){return t=t.ownerDocument.defaultView,{rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth}}function eu(e){var a=e.getBoundingClientRect(),t=getComputedStyle(e);return ax(a,t,e)}function tx(e){return e.documentElement.clientHeight}function nx(e){this.addEventListener("load",e),this.addEventListener("error",e)}function lx(e,a,t,n,l,o,r,f,g){var T=a.nodeType===9?a:a.ownerDocument;try{var D=T.startViewTransition({update:function(){var A=T.defaultView,R=A.navigation&&A.navigation.transition,G=T.fonts.status;n();var X=[];if(G==="loaded"&&(tx(T),T.fonts.status==="loading"&&X.push(T.fonts.ready)),G=X.length,e!==null)for(var se=e.suspenseyImages,O=0,b=0;b<se.length;b++){var w=se[b];if(!w.complete){var _=w.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<A.innerHeight&&_.left<A.innerWidth){if(O+=lh(w),O>fs){X.length=G;break}w=new Promise(nx.bind(w)),X.push(w)}}}if(0<X.length)return A=Promise.race([Promise.all(X),new Promise(function(Q){return setTimeout(Q,500)})]).then(l,l),(R?Promise.allSettled([R.finished,A]):A).then(o,o);if(l(),R)return R.finished.then(o,o);o()},types:t});T.__reactViewTransition=D;var M=[];return D.ready.then(function(){for(var A=T.documentElement.getAnimations({subtree:!0}),R=0;R<A.length;R++){var G=A[R],X=G.effect,se=X.pseudoElement;if(se!=null&&se.startsWith("::view-transition")){M.push(G),G=X.getKeyframes();for(var O=se=void 0,b=!0,w=0;w<G.length;w++){var _=G[w],Q=_.width;if(se===void 0)se=Q;else if(se!==Q){b=!1;break}if(Q=_.height,O===void 0)O=Q;else if(O!==Q){b=!1;break}delete _.width,delete _.height,_.transform==="none"&&delete _.transform}b&&se!==void 0&&O!==void 0&&(X.setKeyframes(G),b=getComputedStyle(X.target,X.pseudoElement),b.width!==se||b.height!==O)&&(b=G[0],b.width=se,b.height=O,b=G[G.length-1],b.width=se,b.height=O,X.setKeyframes(G))}}r()},function(A){T.__reactViewTransition===D&&(T.__reactViewTransition=null);try{if(typeof A=="object"&&A!==null)switch(A.name){case"InvalidStateError":(A.message==="View transition was skipped because document visibility state is hidden."||A.message==="Skipping view transition because document visibility state has become hidden."||A.message==="Skipping view transition because viewport size changed."||A.message==="Transition was aborted because of invalid state")&&(A=null)}A!==null&&g(A)}finally{n(),l(),r()}}),D.finished.finally(function(){for(var A=0;A<M.length;A++)M[A].cancel();T.__reactViewTransition===D&&(T.__reactViewTransition=null),f()}),D}catch{return n(),l(),r(),null}}function Bn(e,a){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"}Bn.prototype.animate=function(e,a){return a=typeof a=="number"?{duration:a}:ee({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)},Bn.prototype.getAnimations=function(){for(var e=this._scope,a=this._selector,t=e.getAnimations({subtree:!0}),n=[],l=0;l<t.length;l++){var o=t[l].effect;o!==null&&o.target===e&&o.pseudoElement===a&&n.push(t[l])}return n},Bn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Hp(e){return{name:e,group:new Bn("group",e),imagePair:new Bn("image-pair",e),old:new Bn("old",e),new:new Bn("new",e)}}function Ua(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ua.prototype.addEventListener=function(e,a,t){var n=null,l=null;if(!(t!=null&&typeof t!="boolean"&&(n=t.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var o=this._eventListeners;if(Gp(o,e,a,t)===-1){var r=this,f=a;t!=null&&typeof t!="boolean"&&t.once===!0&&(f=function(g){r.removeEventListener(e,a,t),typeof a=="function"?a.call(this,g):a.handleEvent(g)}),n!==null&&(l=r.removeEventListener.bind(r,e,a,t),n.addEventListener("abort",l,{once:!0}),l=n.removeEventListener.bind(n,"abort",l)),n=Tl(t),o.push({type:e,listener:a,optionsOrUseCapture:t,attachedListener:f,cleanup:l}),h(this._fragmentFiber.child,!1,ox,e,f,n)}this._eventListeners=o}};function ox(e,a,t,n){return H(e).addEventListener(a,t,n),!1}Ua.prototype.removeEventListener=function(e,a,t){var n=this._eventListeners;if(n!==null&&(a=Gp(n,e,a,t),a!==-1)){var l=n[a];t=l.attachedListener;var o=l.cleanup;l=Tl(l.optionsOrUseCapture),h(this._fragmentFiber.child,!1,ix,e,t,l),n.splice(a,1),o!==null&&o()}};function ix(e,a,t,n){return H(e).removeEventListener(a,t,n),!1}function Tl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Bp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Gp(e,a,t,n){if(e.length===0)return-1;n=Bp(n);for(var l=0;l<e.length;l++){var o=e[l];if(o.type===a&&o.listener===t&&Bp(o.optionsOrUseCapture)===n)return l}return-1}Ua.prototype.dispatchEvent=function(e){var a=C(this._fragmentFiber);if(a===null)return!0;a=H(a);var t=this._eventListeners;if(t!==null&&0<t.length||!e.bubbles){var n=a.nodeType===9?a.createComment(""):document.createTextNode("");if(t)for(var l=0;l<t.length;l++){var o=t[l];n.addEventListener(o.type,o.attachedListener,Tl(o.optionsOrUseCapture))}if(a.appendChild(n),e=n.dispatchEvent(e),t)for(l=0;l<t.length;l++)o=t[l],n.removeEventListener(o.type,o.attachedListener,Tl(o.optionsOrUseCapture));return a.removeChild(n),e}return a.dispatchEvent(e)},Ua.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Ip,e,void 0,void 0)};function Ip(e,a){return e.tag===6?!1:(e=H(e),xx(e,a))}Ua.prototype.focusLast=function(e){var a=[];h(this._fragmentFiber.child,!0,au,a,void 0,void 0);for(var t=a.length-1;0<=t&&!Ip(a[t],e);t--);};function au(e,a){return a.push(e),!1}Ua.prototype.blur=function(){var e=C(this._fragmentFiber);e!==null&&(e=H(e),e=To(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,sx,e,void 0,void 0))};function sx(e,a){return e.tag===6?!1:(e=H(e),e===a||e.contains(a)?(a.blur(),!0):!1)}Ua.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,rx,e,void 0,void 0)};function rx(e,a){return e.tag===6||(e=H(e),a.observe(e)),!1}Ua.prototype.unobserveUsing=function(e){var a=this._observers;if(a!==null&&a.has(e)){a.delete(e),h(this._fragmentFiber.child,!1,cx,e,void 0,void 0);for(var t=a=0;t<$a.length;t++){var n=$a[t];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):$a[a++]=n}$a.length=a}};function cx(e,a){return e.tag===6||(e=H(e),a.unobserve(e)),!1}var $a=[],tu=!1;function ux(e,a,t){$a.push({fragmentInstance:e,observer:a,instance:t}),tu||(tu=!0,bx(function(){tu=!1;var n=$a;$a=[];for(var l=0;l<n.length;l++){var o=n[l];o.observer.unobserve(o.instance)}}))}Ua.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,dx,e,void 0,void 0),e};function dx(e,a){if(e.tag===6){e=e.stateNode;var t=e.ownerDocument.createRange();t.selectNodeContents(e),a.push.apply(a,t.getClientRects())}else e=H(e),a.push.apply(a,e.getClientRects());return!1}Ua.prototype.getRootNode=function(e){var a=C(this._fragmentFiber);return a===null?this:H(a).getRootNode(e)},Ua.prototype.compareDocumentPosition=function(e){var a=C(this._fragmentFiber);if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var t=[];h(this._fragmentFiber.child,!1,au,t,void 0,void 0);var n=H(a);if(t.length===0){if(t=n,B(this._fragmentFiber)){e:{for(a=this._fragmentFiber.return;a!==null;){if(a.tag===4){a=a.stateNode.containerInfo;break e}if(a.tag===3||a.tag===5||a.tag===27)break;a=a.return}a=null}a!=null&&(t=a)}a=this._fragmentFiber;var l=n=t.compareDocumentPosition(e);return t===e?l=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Y(a)[1],t===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=H(t).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}a=H(t[0]),l=H(t[t.length-1]);var o=B(this._fragmentFiber)?a.parentElement:n;if(o==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=o.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,o=o.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=a.compareDocumentPosition(e),f=l.compareDocumentPosition(e),g=r&Node.DOCUMENT_POSITION_CONTAINED_BY||f&Node.DOCUMENT_POSITION_CONTAINED_BY;return f=n&&o&&r&Node.DOCUMENT_POSITION_FOLLOWING&&f&Node.DOCUMENT_POSITION_PRECEDING,a=n&&a===e||o&&l===e||g||f?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&a===e||!o&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||mx(a,this._fragmentFiber,t[0],t[t.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function mx(e,a,t,n,l){var o=xn(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(t=!!o)e:{for(;o!==null;){if(o.tag===7&&(o===a||o.alternate===a)){t=!0;break e}o=o.return}t=!1}return t}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(o===null)return o=l.ownerDocument,l===o||l===o.documentElement||l===o.body;e:{for(o=a,a=C(a);o!==null;){if(!(o.tag!==5&&o.tag!==3&&o.tag!==27||o!==a&&o.alternate!==a)){o=!0;break e}o=o.return}o=!1}return o}return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!o)&&!(a=o===t)&&(a=Ee(t,o,ce),a===null?a=!1:(h(a,!0,V,o,t),o=U,U=null,a=o!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!o)&&!(a=o===n)&&(a=Ee(n,o,ce),a===null?a=!1:(h(a,!0,de,o,n),o=U,k=U=null,a=o!==null)),a):!1}function Vp(e,a){var t=e.ownerDocument.createRange();t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ua.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(u(566));var a=[];h(this._fragmentFiber.child,!1,au,a,void 0,void 0);var t=e!==!1;if(a.length===0){var n=Y(this._fragmentFiber);if(n=t?n[1]||n[0]||C(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=H(n),Vp(e,t);return}if(n=H(n),n.nodeType!==9){if(n.nodeType===11){t="host"in n?n.host:null,t!==null&&t.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=t?a.length-1:0;n!==(t?-1:a.length);){var l=a[n];l.tag===6?(l=H(l),Vp(l,t)):H(l).scrollIntoView(e),n+=t?-1:1}};function fx(e,a){return e=H(e),Yp(e,a),!1}function Yp(e,a){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)}function kp(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];e.addEventListener(l.type,l.attachedListener,Tl(l.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(o){for(var r=0,f=0;f<$a.length;f++){var g=$a[f];(g.fragmentInstance!==a||g.observer!==o||g.instance!==e)&&($a[r++]=g)}$a.length=r,o.observe(e)}),Yp(e,a))}function px(e,a){var t=a._eventListeners;if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];e.removeEventListener(l.type,l.attachedListener,Tl(l.optionsOrUseCapture))}e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(o){typeof o.rootMargin=="string"?ux(a,o,e):o.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(a))}function nu(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":nu(t),ai(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function hx(e,a,t,n){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Yl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ya(e.nextSibling),e===null)break}return null}function vx(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ya(e.nextSibling),e===null))return null;return e}function Qp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ya(e.nextSibling),e===null))return null;return e}function lu(e){return e.data==="$?"||e.data==="$~"}function ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gx(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ya(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var iu=null;function Xp(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Ya(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Zp(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function xx(e,a){function t(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)}finally{e.ownerDocument.removeEventListener("focus",t,!0)}return n}function bx(e){Mp(function(){Mp(function(a){return e(a)})})}function Kp(e,a,t){switch(a=To(t),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Pp(e,a,t){for(var n in t){var l=t[n];t.hasOwnProperty(n)&&l!=null&&Re(e,a,n,null,Kg,l)}t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===tt&&(e.onclick=null),ai(e)}function su(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ai(e)}var ka=new Map,Fp=new Set;function jo(e){if(typeof e.getRootNode=="function"){var a=e.getRootNode();if(a.nodeType===9||a.nodeType===11)return a}return e.nodeType===9?e:e.ownerDocument}var zt=te.d;te.d={f:yx,r:Nx,D:Ex,C:Sx,L:Ax,m:Ox,X:jx,S:Tx,M:wx};function yx(){var e=zt.f(),a=ls();return e||a}function Nx(e){var a=Qn(e);a!==null&&a.tag===5&&a.type==="form"?Jm(a):zt.r(e)}var jl=typeof document>"u"?null:document;function Jp(e,a,t){var n=jl;if(n&&typeof a=="string"&&a){var l=qa(a);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Fp.has(l)||(Fp.add(l),e={rel:e,crossOrigin:t,href:a},n.querySelector(l)===null&&(a=n.createElement("link"),sa(a,"link",e),Fe(a),n.head.appendChild(a)))}}function Ex(e){zt.D(e),Jp("dns-prefetch",e,null)}function Sx(e,a){zt.C(e,a),Jp("preconnect",e,a)}function Ax(e,a,t){zt.L(e,a,t);var n=jl;if(n&&e&&a){var l='link[rel="preload"][as="'+qa(a)+'"]';a==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+qa(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+qa(t.imageSizes)+'"]')):l+='[href="'+qa(e)+'"]';var o=l;switch(a){case"style":o=wl(e);break;case"script":o=Rl(e)}if(!(ka.has(o)||(e=ee({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),ka.set(o,e),n.querySelector(l)!==null||a==="style"&&n.querySelector(wo(o))||a==="script"&&n.querySelector(Ro(o))))){var r=n.createElement("link");sa(r,"link",e),a==="style"&&(r[ei]=!0,r.onload=r.onerror=function(){cd(r)}),Fe(r),n.head.appendChild(r)}}}function Ox(e,a){zt.m(e,a);var t=jl;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",l='link[rel="modulepreload"][as="'+qa(n)+'"][href="'+qa(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Rl(e)}if(!ka.has(o)&&(e=ee({rel:"modulepreload",href:e},a),ka.set(o,e),t.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ro(o)))return}n=t.createElement("link"),sa(n,"link",e),Fe(n),t.head.appendChild(n)}}}function Tx(e,a,t){zt.S(e,a,t);var n=jl;if(n&&e){var l=Xn(n).hoistableStyles,o=wl(e);a=a||"default";var r=l.get(o);if(!r){var f={loading:0,preload:null};if(r=n.querySelector(wo(o)))f.loading=5;else{e=ee({rel:"stylesheet",href:e,"data-precedence":a},t),(t=ka.get(o))&&ru(e,t);var g=r=n.createElement("link");Fe(g),sa(g,"link",e),g._p=new Promise(function(T,D){g.onload=T,g.onerror=D}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,ds(r,a,n)}r={type:"stylesheet",instance:r,count:1,state:f},l.set(o,r)}}}function jx(e,a){zt.X(e,a);var t=jl;if(t&&e){var n=Xn(t).hoistableScripts,l=Rl(e),o=n.get(l);o||(o=t.querySelector(Ro(l)),o||(e=ee({src:e,async:!0},a),(a=ka.get(l))&&cu(e,a),o=t.createElement("script"),Fe(o),sa(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function wx(e,a){zt.M(e,a);var t=jl;if(t&&e){var n=Xn(t).hoistableScripts,l=Rl(e),o=n.get(l);o||(o=t.querySelector(Ro(l)),o||(e=ee({src:e,async:!0,type:"module"},a),(a=ka.get(l))&&cu(e,a),o=t.createElement("script"),Fe(o),sa(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function $p(e,a,t,n){var l=(l=Ht.current)?jo(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=wl(t.href),a=Xn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=wl(t.href);var o=Xn(l).hoistableStyles,r=o.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,r),(o=l.querySelector(wo(e)))?o._p||(r.instance=o,r.state.loading=5):(o=ka.get(e),o||(o={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},ka.set(e,o)),Rx(l,e,o,r.state))),a&&n===null)throw Error(u(528,""));return r}if(a&&n!==null)throw Error(u(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(t=Rl(t),a=Xn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function wl(e){return'href="'+qa(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function Wp(e){return ee({},e,{"data-precedence":e.precedence,precedence:null})}function Rx(e,a,t,n){if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")){if(a[ei]!==!0){n.loading=1;return}}else a=e.createElement("link"),a[ei]=!0,a.onload=a.onerror=cd.bind(null,a),sa(a,"link",t),Fe(a),e.head.appendChild(a);n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2})}function Rl(e){return'[src="'+qa(e)+'"]'}function Ro(e){return"script[async]"+e}function eh(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+qa(t.href)+'"]');if(n)return a.instance=n,Fe(n),n;var l=ee({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),sa(n,"style",l),ds(n,t.precedence,e),a.instance=n;case"stylesheet":l=wl(t.href);var o=e.querySelector(wo(l));if(o)return a.state.loading|=4,a.instance=o,Fe(o),o;n=Wp(t),(l=ka.get(l))&&ru(n,l),o=(e.ownerDocument||e).createElement("link"),Fe(o);var r=o;return r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),sa(o,"link",n),a.state.loading|=4,ds(o,t.precedence,e),a.instance=o;case"script":return o=Rl(t.src),(l=e.querySelector(Ro(o)))?(a.instance=l,Fe(l),l):(n=t,(l=ka.get(o))&&(n=ee({},t),cu(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Fe(l),sa(l,"link",n),e.head.appendChild(l),a.instance=l);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,ds(n,t.precedence,e));return a.instance}function ds(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,r=0;r<n.length;r++){var f=n[r];if(f.dataset.precedence===a)o=f;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ru(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function cu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ms=null;function ah(e,a,t){if(ms===null){var n=new Map,l=ms=new Map;l.set(t,n)}else l=ms,n=l.get(t),n||(n=new Map,l.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Yl]||o[ta]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var r=o.getAttribute(a)||"";r=e+r;var f=n.get(r);f?f.push(o):n.set(r,[o])}}return n}function uu(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Cx(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function th(e,a){return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"}function nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lh(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function oh(e,a){typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=lh(a),e.suspenseyImages.push(a)),e=Mx.bind(e),a.decode().then(e,e))}function Dx(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=wl(n.href),o=a.querySelector(wo(l));if(o){a=o._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Co.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=o,Fe(o);return}o=a.ownerDocument||a,n=Wp(n),(l=ka.get(l))&&ru(n,l),o=o.createElement("link"),Fe(o);var r=o;r._p=new Promise(function(f,g){r.onload=f,r.onerror=g}),sa(o,"link",n),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Co.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var fs=0;function _x(e,a){return e.stylesheets&&e.count===0&&hs(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&hs(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+a);0<e.imgBytes&&fs===0&&(fs=62500*Fg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hs(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>fs?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function ih(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)hs(e,e.stylesheets);else if(e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}}}function Co(){this.count--,ih(this)}function Mx(){this.imgCount--,ih(this)}var ps=null;function hs(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,a.forEach(zx,e),ps=null,Co.call(e))}function zx(e,a){if(!(a.state.loading&4)){var t=ps.get(e);if(t)var n=t.get(null);else{t=new Map,ps.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var r=l[o];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),n=r)}n&&t.set(null,n)}l=a.instance,r=l.getAttribute("data-precedence"),o=t.get(r)||n,o===n&&t.set(null,l),t.set(r,l),this.count++,n=Co.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),a.state.loading|=4}}var Cl={$$typeof:me,Provider:null,Consumer:null,_currentValue:bt,_currentValue2:bt,_threadCount:0};function Ux(e,a,t,n,l,o,r,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.hiddenUpdates=ks(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.transitionTypes=null,this.incompleteTransitions=new Map}function sh(e,a,t,n,l,o,r,f,g,T,D,M){return e=new Ux(e,a,t,r,g,T,D,M,f),a=1,o===!0&&(a|=24),o=va(3,null,null,a),e.current=o,o.stateNode=e,a=Or(),a.refCount++,e.pooledCache=a,a.refCount++,o.memoizedState={element:n,isDehydrated:t,cache:a},Rr(o),e}function rh(e){return e?(e=tl,e):tl}function ch(e,a,t,n,l,o){l=rh(l),n.context===null?n.context=l:n.pendingContext=l,n=Pt(a),n.payload={element:t},o=o===void 0?null:o,o!==null&&(n.callback=o),t=Ft(e,n,a),t!==null&&(ya(t,e,a),io(t,e,a))}function uh(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function du(e,a){uh(e,a),(e=e.alternate)&&uh(e,a)}function dh(e){if(e.tag===13||e.tag===31){var a=En(e,67108864);a!==null&&ya(a,e,67108864),du(e,67108864)}}function mh(e){if(e.tag===13||e.tag===31){var a=za();a=Qs(a);var t=En(e,a);t!==null&&ya(t,e,a),du(e,a)}}var Dl=!0;function qx(e,a,t,n){var l=K.T;K.T=null;var o=te.p;try{te.p=2,mu(e,a,t,n)}finally{te.p=o,K.T=l}}function Lx(e,a,t,n){var l=K.T;K.T=null;var o=te.p;try{te.p=8,mu(e,a,t,n)}finally{te.p=o,K.T=l}}function mu(e,a,t,n){if(Dl){var l=fu(n);if(l===null)Zc(e,a,n,vs,t),ph(e,n);else if(Bx(l,e,a,t,n))n.stopPropagation();else if(ph(e,n),a&4&&-1<Hx.indexOf(e)){for(;l!==null;){var o=Qn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var r=gn(o.pendingLanes);if(r!==0){var f=o;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var g=1<<31-ja(r);f.entanglements[1]|=g,r&=~g}mt(o),(Ae&6)===0&&(as=Oa()+500,So(0))}}break;case 31:case 13:f=En(o,2),f!==null&&ya(f,o,2),ls(),du(o,2)}if(o=fu(n),o===null&&Zc(e,a,n,vs,t),o===l)break;l=o}l!==null&&n.stopPropagation()}else Zc(e,a,n,null,t)}}function fu(e){return e=$s(e),pu(e)}var vs=null;function pu(e){if(vs=null,e=xn(e),e!==null){var a=p(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=v(a),e!==null)return e;e=null}else if(t===31){if(e=x(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return vs=e,null}function fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fv()){case Ju:return 2;case $u:return 8;case Po:case Jv:return 32;case Wu:return 268435456;default:return 32}default:return 32}}var hu=!1,cn=null,un=null,dn=null,Do=new Map,_o=new Map,mn=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(e,a){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Do.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(a.pointerId)}}function Mo(e,a,t,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},a!==null&&(a=Qn(a),a!==null&&dh(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,l!==null&&a.indexOf(l)===-1&&a.push(l),e)}function Bx(e,a,t,n,l){switch(a){case"focusin":return cn=Mo(cn,e,a,t,n,l),!0;case"dragenter":return un=Mo(un,e,a,t,n,l),!0;case"mouseover":return dn=Mo(dn,e,a,t,n,l),!0;case"pointerover":var o=l.pointerId;return Do.set(o,Mo(Do.get(o)||null,e,a,t,n,l)),!0;case"gotpointercapture":return o=l.pointerId,_o.set(o,Mo(_o.get(o)||null,e,a,t,n,l)),!0}return!1}function hh(e){var a=xn(e.target);if(a!==null){var t=p(a);if(t!==null){if(a=t.tag,a===13){if(a=v(t),a!==null){e.blockedOn=a,id(e.priority,function(){mh(t)});return}}else if(a===31){if(a=x(t),a!==null){e.blockedOn=a,id(e.priority,function(){mh(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=fu(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Js=n,t.target.dispatchEvent(n),Js=null}else return a=Qn(t),a!==null&&dh(a),e.blockedOn=t,!1;a.shift()}return!0}function vh(e,a,t){gs(e)&&t.delete(a)}function Gx(){hu=!1,cn!==null&&gs(cn)&&(cn=null),un!==null&&gs(un)&&(un=null),dn!==null&&gs(dn)&&(dn=null),Do.forEach(vh),_o.forEach(vh)}function xs(e,a){e.blockedOn===a&&(e.blockedOn=null,hu||(hu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Gx)))}var bs=null;function gh(e){bs!==e&&(bs=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){bs===e&&(bs=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],l=e[a+2];if(typeof n!="function"){if(pu(n||t)===null)continue;break}var o=Qn(t);o!==null&&(e.splice(a,3),a-=3,Fr(o,{pending:!0,data:l,method:t.method,action:n},n,l))}}))}function _l(e){function a(g){return xs(g,e)}cn!==null&&xs(cn,e),un!==null&&xs(un,e),dn!==null&&xs(dn,e),Do.forEach(a),_o.forEach(a);for(var t=0;t<mn.length;t++){var n=mn[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)hh(t),t.blockedOn===null&&mn.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var l=t[n],o=t[n+1],r=l[ha]||null;if(typeof o=="function")r||gh(t);else if(r){var f=null;if(o&&o.hasAttribute("formAction")){if(l=o,r=o[ha]||null)f=r.formAction;else if(pu(l)!==null)continue}else f=r.action;typeof f=="function"?t[n+1]=f:(t.splice(n,3),n-=3),gh(t)}}}function xh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function a(){l!==null&&(l(),l=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),l!==null&&(l(),l=null)}}}function vu(e){this._internalRoot=e}ys.prototype.render=vu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var t=a.current,n=za();ch(t,n,e,a,null,null)},ys.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;ch(e.current,2,null,e,null,null),ls(),a[kn]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var a=od();e={blockedOn:null,target:e,priority:a};for(var t=0;t<mn.length&&a!==0&&a<mn[t].priority;t++);mn.splice(t,0,e),t===0&&hh(e)}};var bh=c.version;if(bh!=="19.3.0")throw Error(u(527,bh,"19.3.0"));te.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=j(a),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Ix={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{Gl=Ns.inject(Ix),Ta=Ns}catch{}}return Uo.createRoot=function(e,a){if(!m(e))throw Error(u(299));var t=!1,n="",l=rf,o=cf,r=uf;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=sh(e,1,!1,null,null,t,n,null,l,o,r,xh),e[kn]=a.current,Xc(e),new vu(a)},Uo.hydrateRoot=function(e,a,t){if(!m(e))throw Error(u(299));var n=!1,l="",o=rf,r=cf,f=uf,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),a=sh(e,1,!0,a,t??null,n,l,g,o,r,f,xh),a.context=rh(null),t=a.current,n=za(),n=Qs(n),l=Pt(n),l.callback=null,Ft(t,l,n),t=n,a.current.lanes=t,Vl(a,t),mt(a),e[kn]=a.current,Xc(e),new ys(a)},Uo.version="19.3.0",Uo}var Rh;function Jx(){if(Rh)return bu.exports;Rh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),bu.exports=Fx(),bu.exports}var $x=Jx();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,$h=/^[\\/]{2}/;function Wx(i,c){return c+i.replace(/\\/g,"/")}var Ch="popstate";function Dh(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function e1(i={}){function c(u,m){var j;let p=(j=m.state)==null?void 0:j.masked,{pathname:v,search:x,hash:N}=p||u.location;return Cu("",{pathname:v,search:x,hash:N},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function d(u,m){return typeof m=="string"?m:zl(m)}return t1(c,d,null,i)}function He(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function vt(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function a1(){return Math.random().toString(36).substring(2,10)}function _h(i,c){return{usr:i.state,key:i.key,idx:c,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function Cu(i,c,d=null,u,m){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?ql(c):c,state:d,key:c&&c.key||u||a1(),mask:m}}function zl({pathname:i="/",search:c="",hash:d=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function ql(i){let c={};if(i){let d=i.indexOf("#");d>=0&&(c.hash=i.substring(d),i=i.substring(0,d));let u=i.indexOf("?");u>=0&&(c.search=i.substring(u),i=i.substring(0,u)),i&&(c.pathname=i)}return c}function t1(i,c,d,u={}){let{window:m=document.defaultView,v5Compat:p=!1}=u,v=m.history,x="POP",N=null,j=S();j==null&&(j=0,v.replaceState({...v.state,idx:j},""));function S(){return(v.state||{idx:null}).idx}function h(){x="POP";let H=S(),U=H==null?null:H-j;j=H,N&&N({action:x,location:L.location,delta:U})}function C(H,U){x="PUSH";let k=Dh(H)?H:Cu(L.location,H,U);j=S()+1;let V=_h(k,j),de=L.createHref(k.mask||k);try{v.pushState(V,"",de)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;m.location.assign(de)}p&&N&&N({action:x,location:L.location,delta:1})}function B(H,U){x="REPLACE";let k=Dh(H)?H:Cu(L.location,H,U);j=S();let V=_h(k,j),de=L.createHref(k.mask||k);v.replaceState(V,"",de),p&&N&&N({action:x,location:L.location,delta:0})}function Y(H){return n1(m,H)}let L={get action(){return x},get location(){return i(m,v)},listen(H){if(N)throw new Error("A history only accepts one active listener");return m.addEventListener(Ch,h),N=H,()=>{m.removeEventListener(Ch,h),N=null}},createHref(H){return c(m,H)},createURL:Y,encodeLocation(H){let U=Y(H);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:C,replace:B,go(H){return v.go(H)}};return L}function n1(i,c,d=!1){let u="http://localhost";i&&(u=i.location.origin!=="null"?i.location.origin:i.location.href),He(u,"No window.location.(origin|href) available to create URL");let m=typeof c=="string"?c:zl(c);return m=m.replace(/ $/,"%20"),!d&&$h.test(m)&&(m=u+m),new URL(m,u)}function Wh(i,c,d="/"){return l1(i,c,d,!1)}function l1(i,c,d,u,m){let p=typeof c=="string"?ql(c):c,v=qt(p.pathname||"/",d);if(v==null)return null;let x=o1(i),N=null,j=v1(v);for(let S=0;N==null&&S<x.length;++S)N=h1(x[S],j,u);return N}function o1(i){let c=ev(i);return i1(c),c}function ev(i,c=[],d=[],u="",m=!1){let p=(v,x,N=m,j)=>{let S={relativePath:j===void 0?v.path||"":j,caseSensitive:v.caseSensitive===!0,childrenIndex:x,route:v};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(u)&&N)return;He(S.relativePath.startsWith(u),`Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(u.length)}let h=Wa([u,S.relativePath]),C=d.concat(S);v.children&&v.children.length>0&&(He(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),ev(v.children,c,C,h,N)),!(v.path==null&&!v.index)&&c.push({path:h,score:f1(h,v.index),routesMeta:C.map((B,Y)=>{let[L,H]=nv(B.relativePath,B.caseSensitive,Y===C.length-1);return{...B,matcher:L,compiledParams:H}})})};return i.forEach((v,x)=>{var N;if(v.path===""||!((N=v.path)!=null&&N.includes("?")))p(v,x);else for(let j of av(v.path))p(v,x,!0,j)}),c}function av(i){let c=i.split("/");if(c.length===0)return[];let[d,...u]=c,m=d.endsWith("?"),p=d.replace(/\?$/,"");if(u.length===0)return m?[p,""]:[p];let v=av(u.join("/")),x=[];return x.push(...v.map(N=>N===""?p:[p,N].join("/"))),m&&x.push(...v),x.map(N=>i.startsWith("/")&&N===""?"/":N)}function i1(i){i.sort((c,d)=>c.score!==d.score?d.score-c.score:p1(c.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var s1=/^:[\w-]+$/,r1=3,c1=2,u1=1,d1=10,m1=-2,Mh=i=>i==="*";function f1(i,c){let d=i.split("/"),u=d.length;return d.some(Mh)&&(u+=m1),c&&(u+=c1),d.filter(m=>!Mh(m)).reduce((m,p)=>m+(s1.test(p)?r1:p===""?u1:d1),u)}function p1(i,c){return i.length===c.length&&i.slice(0,-1).every((u,m)=>u===c[m])?i[i.length-1]-c[c.length-1]:0}function h1(i,c,d=!1){let{routesMeta:u}=i,m={},p="/",v=[];for(let x=0;x<u.length;++x){let N=u[x],j=x===u.length-1,S=p==="/"?c:c.slice(p.length)||"/",h={path:N.relativePath,caseSensitive:N.caseSensitive,end:j},C=N.matcher&&N.compiledParams?tv(h,S,N.matcher,N.compiledParams):Ts(h,S),B=N.route;if(!C&&j&&d&&!u[u.length-1].route.index&&(C=Ts({path:N.relativePath,caseSensitive:N.caseSensitive,end:!1},S)),!C)return null;Object.assign(m,C.params),v.push({params:m,pathname:Wa([p,C.pathname]),pathnameBase:b1(Wa([p,C.pathnameBase])),route:B}),C.pathnameBase!=="/"&&(p=Wa([p,C.pathnameBase]))}return v}function Ts(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[d,u]=nv(i.path,i.caseSensitive,i.end);return tv(i,c,d,u)}function tv(i,c,d,u){let m=c.match(d);if(!m)return null;let p=m[0],v=Ul(p,1),x=m.slice(1);return{params:u.reduce((j,{paramName:S,isOptional:h},C)=>{if(S==="*"){let Y=x[C]||"";v=Ul(p.slice(0,p.length-Y.length),1)}const B=x[C];return h&&!B?j[S]=void 0:j[S]=(B||"").replace(/%2F/g,"/"),j},{}),pathname:p,pathnameBase:v,pattern:i}}function nv(i,c=!1,d=!0){vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,x,N,j,S)=>{if(u.push({paramName:x,isOptional:N!=null}),N){let h=S.charAt(j+v.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,c?void 0:"i"),u]}function v1(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function qt(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,u=i.charAt(d);return u&&u!=="/"?null:i.slice(d)||"/"}function g1(i,c="/"){let{pathname:d,search:u="",hash:m=""}=typeof i=="string"?ql(i):i,p;return d?(d=ov(d),d.startsWith("/")||d.startsWith("\\")?p=zh(d.substring(1),"/"):p=zh(d,c)):p=c,{pathname:p,search:y1(u),hash:N1(m)}}function zh(i,c){let d=Ul(c).split("/");return i.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Su(i,c,d,u){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function x1(i){return i.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function lv(i){let c=x1(i);return c.map((d,u)=>u===c.length-1?d.pathname:d.pathnameBase)}function Lu(i,c,d,u=!1){let m;typeof i=="string"?m=ql(i):(m={...i},He(!m.pathname||!m.pathname.includes("?"),Su("?","pathname","search",m)),He(!m.pathname||!m.pathname.includes("#"),Su("#","pathname","hash",m)),He(!m.search||!m.search.includes("#"),Su("#","search","hash",m)));let p=i===""||m.pathname==="",v=p?"/":m.pathname,x;if(v==null)x=d;else{let h=c.length-1;if(!u&&v.startsWith("..")){let C=v.split("/");for(;C[0]==="..";)C.shift(),h-=1;m.pathname=C.join("/")}x=h>=0?c[h]:"/"}let N=g1(m,x),j=v&&v!=="/"&&v.endsWith("/"),S=(p||v===".")&&d.endsWith("/");return!N.pathname.endsWith("/")&&(j||S)&&(N.pathname+="/"),N}var ov=i=>i.replace(/[\\/]{2,}/g,"/"),Wa=i=>ov(i.join("/"));function Ul(i,c=0){let d=i.length;for(;d>c&&i.charCodeAt(d-1)===47;)d--;return d===i.length?i:i.slice(0,d)}var b1=i=>Ul(i).replace(/^\/*/,"/"),y1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,N1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,E1=class{constructor(i,c,d,u=!1){this.status=i,this.statusText=c||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function S1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function A1(i){let c=i.map(d=>d.route.path).filter(Boolean);return Wa(c)||"/"}var iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sv(i,c){let d=i;if(typeof d!="string"||!qu.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,m=!1;if(iv)try{let p=new URL(window.location.href),v=$h.test(d)?new URL(Wx(d,p.protocol)):new URL(d),x=qt(v.pathname,c);v.origin===p.origin&&x!=null?d=x+v.search+v.hash:m=!0}catch{vt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uh=new URL("http://localhost");function rv(i){if(i.createURL)return i.createURL("/");try{return new URL(i.createHref("/"),Uh)}catch{return Uh}}function Au(i,c){return i.origin===c.origin&&(i.origin!=="null"||i.protocol===c.protocol&&i.host===c.host)}function O1(i,c){if(i.startsWith("//"))return!0;let d=c.protocol.toLowerCase();return i.toLowerCase().startsWith(d)?c.host===""||i.slice(d.length).startsWith("//"):!1}function cv(i,c,d,u){let m=null;try{m=i==null?null:new URL(i,d)}catch{}let p=new URL(c,d),v=m!=null&&!Au(m,d),x=!Au(p,d);if(u==="reject"){if(v||x)throw new Error("External navigation is not allowed")}else if(x&&(m==null||!O1(i,m)||!Au(m,p)))throw new Error("External navigation is not allowed")}var uv=["POST","PUT","PATCH","DELETE"];new Set(uv);var T1=["GET",...uv];new Set(T1);var j1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function w1(i){try{return j1.includes(new URL(i).protocol)}catch{return!1}}var Ll=y.createContext(null);Ll.displayName="DataRouter";var Rs=y.createContext(null);Rs.displayName="DataRouterState";var dv=y.createContext(!1);function R1(){return y.useContext(dv)}var mv=y.createContext({isTransitioning:!1});mv.displayName="ViewTransition";var C1=y.createContext(new Map);C1.displayName="Fetchers";var D1=y.createContext(null);D1.displayName="Await";var Qa=y.createContext(null);Qa.displayName="Navigation";var Go=y.createContext(null);Go.displayName="Location";var gt=y.createContext({outlet:null,matches:[],isDataRoute:!1});gt.displayName="Route";var Hu=y.createContext(null);Hu.displayName="RouteError";var fv="REACT_ROUTER_ERROR",_1="REDIRECT",M1="ROUTE_ERROR_RESPONSE";function z1(i){if(i.startsWith(`${fv}:${_1}:{`))try{let c=JSON.parse(i.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function U1(i){if(i.startsWith(`${fv}:${M1}:{`))try{let c=JSON.parse(i.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new E1(c.status,c.statusText,c.data)}catch{}}function q1(i,{relative:c}={}){He(Io(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=y.useContext(Qa),{hash:m,pathname:p,search:v}=Vo(i,{relative:c}),x=p;return d!=="/"&&(x=p==="/"?d:Wa([d,p])),u.createHref({pathname:x,search:v,hash:m})}function Io(){return y.useContext(Go)!=null}function Lt(){return He(Io(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Go).location}var pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hv(i){y.useContext(Qa).static||y.useLayoutEffect(i)}function L1(){let{isDataRoute:i}=y.useContext(gt);return i?J1():H1()}function H1(){He(Io(),"useNavigate() may be used only in the context of a <Router> component.");let i=y.useContext(Ll),{basename:c,navigator:d}=y.useContext(Qa),{matches:u}=y.useContext(gt),{pathname:m}=Lt(),p=JSON.stringify(lv(u)),v=y.useRef(!1);return hv(()=>{v.current=!0}),y.useCallback((N,j={})=>{if(vt(v.current,pv),!v.current)return;if(typeof N=="number"){d.go(N);return}let S=Lu(N,JSON.parse(p),m,j.relative==="path");i==null&&c!=="/"&&(S.pathname=S.pathname==="/"?c:Wa([c,S.pathname])),cv(typeof N=="string"?N:zl(N),d.createHref(S),rv(d),"reject"),(j.replace?d.replace:d.push)(S,j.state,j)},[c,d,p,m,i])}y.createContext(null);function B1(){let{matches:i}=y.useContext(gt),c=i[i.length-1];return(c==null?void 0:c.params)??{}}function Vo(i,{relative:c}={}){let{matches:d}=y.useContext(gt),{pathname:u}=Lt(),m=JSON.stringify(lv(d));return y.useMemo(()=>Lu(i,JSON.parse(m),u,c==="path"),[i,m,u,c])}function G1(i,c){return vv(i,c)}function vv(i,c,d){var H;He(Io(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=y.useContext(Qa),{matches:m}=y.useContext(gt),p=m[m.length-1],v=p?p.params:{},x=p?p.pathname:"/",N=p?p.pathnameBase:"/",j=p&&p.route;{let U=j&&j.path||"";xv(x,!j||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let S=Lt(),h;if(c){let U=typeof c=="string"?ql(c):c;He(N==="/"||((H=U.pathname)==null?void 0:H.startsWith(N)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${U.pathname}" was given in the \`location\` prop.`),h=U}else h=S;let C=h.pathname||"/",B=C;if(N!=="/"){let U=N.replace(/^\//,"").split("/");B="/"+C.replace(/^\//,"").split("/").slice(U.length).join("/")}let Y=d&&d.state.matches.length?d.state.matches.map(U=>Object.assign(U,{route:d.manifest[U.route.id]||U.route})):Wh(i,{pathname:B});vt(j||Y!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),vt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Q1(Y&&Y.map(U=>Object.assign({},U,{params:Object.assign({},v,U.params),pathname:Wa([N,u.encodeLocation?u.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?N:Wa([N,u.encodeLocation?u.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),m,d);return c&&L?y.createElement(Go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},L):L}function I1(){let i=F1(),c=S1(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),d=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:p},"ErrorBoundary")," or"," ",y.createElement("code",{style:p},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},c),d?y.createElement("pre",{style:m},d):null,v)}var V1=y.createElement(I1,null),gv=class extends y.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const d=U1(i.digest);d&&(i=d)}let c=i!==void 0?y.createElement(gt.Provider,{value:this.props.routeContext},y.createElement(Hu.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?y.createElement(Y1,{error:i},c):c}};gv.contextType=dv;var Ou=new WeakMap;function Y1({children:i,error:c}){let{basename:d,navigator:u}=y.useContext(Qa);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let m=z1(c.digest);if(m){let p=Ou.get(c);if(p)throw p;let v=sv(m.location,d),x=v.absoluteURL||v.to;if(cv(m.location,x,rv(u),"allow-explicit"),w1(x))throw new Error("Invalid redirect location");if(iv&&!Ou.get(c))if(v.isExternal||m.reloadDocument)window.location.href=x;else{const N=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(v.to,{replace:m.replace}));throw Ou.set(c,N),N}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${x}`})}}return i}function k1({routeContext:i,match:c,children:d}){let u=y.useContext(Ll);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),y.createElement(gt.Provider,{value:i},d)}function Q1(i,c=[],d){let u=d==null?void 0:d.state;if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let m=i,p=u==null?void 0:u.errors;if(p!=null){let S=m.findIndex(h=>h.route.id&&(p==null?void 0:p[h.route.id])!==void 0);He(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,S+1))}let v=!1,x=-1;if(d&&u){v=u.renderFallback;for(let S=0;S<m.length;S++){let h=m[S];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(x=S),h.route.id){let{loaderData:C,errors:B}=u,Y=h.route.loader&&!C.hasOwnProperty(h.route.id)&&(!B||B[h.route.id]===void 0);if(h.route.lazy||Y){d.isStatic&&(v=!0),x>=0?m=m.slice(0,x+1):m=[m[0]];break}}}}let N=d==null?void 0:d.onError,j=u&&N?(S,h)=>{var C,B;N(S,{location:u.location,params:((B=(C=u.matches)==null?void 0:C[0])==null?void 0:B.params)??{},pattern:A1(u.matches),errorInfo:h})}:void 0;return m.reduceRight((S,h,C)=>{let B,Y=!1,L=null,H=null;u&&(B=p&&h.route.id?p[h.route.id]:void 0,L=h.route.errorElement||V1,v&&(x<0&&C===0?(xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,H=null):x===C&&(Y=!0,H=h.route.hydrateFallbackElement||null)));let U=c.concat(m.slice(0,C+1)),k=()=>{let V;return B?V=L:Y?V=H:h.route.Component?V=y.createElement(h.route.Component,null):h.route.element?V=h.route.element:V=S,y.createElement(k1,{match:h,routeContext:{outlet:S,matches:U,isDataRoute:u!=null},children:V})};return u&&(h.route.ErrorBoundary||h.route.errorElement||C===0)?y.createElement(gv,{location:u.location,revalidation:u.revalidation,component:L,error:B,children:k(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:j}):k()},null)}function Bu(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X1(i){let c=y.useContext(Ll);return He(c,Bu(i)),c}function Z1(i){let c=y.useContext(Rs);return He(c,Bu(i)),c}function K1(i){let c=y.useContext(gt);return He(c,Bu(i)),c}function Gu(i){let c=K1(i),d=c.matches[c.matches.length-1];return He(d.route.id,`${i} can only be used on routes that contain a unique "id"`),d.route.id}function P1(){return Gu("useRouteId")}function F1(){var u;let i=y.useContext(Hu),c=Z1("useRouteError"),d=Gu("useRouteError");return i!==void 0?i:(u=c.errors)==null?void 0:u[d]}function J1(){let{router:i}=X1("useNavigate"),c=Gu("useNavigate"),d=y.useRef(!1);return hv(()=>{d.current=!0}),y.useCallback(async(m,p={})=>{vt(d.current,pv),d.current&&(typeof m=="number"?await i.navigate(m):await i.navigate(m,{fromRouteId:c,...p}))},[i,c])}var qh={};function xv(i,c,d){!c&&!qh[i]&&(qh[i]=!0,vt(!1,d))}y.memo($1);function $1({routes:i,manifest:c,future:d,state:u,isStatic:m,onError:p}){return vv(i,void 0,{manifest:c,state:u,isStatic:m,onError:p})}function Na(i){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function W1({basename:i="/",children:c=null,location:d,navigationType:u="POP",navigator:m,static:p=!1,useTransitions:v}){He(!Io(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=i.replace(/^\/*/,"/"),N=y.useMemo(()=>({basename:x,navigator:m,static:p,useTransitions:v,future:{}}),[x,m,p,v]);typeof d=="string"&&(d=ql(d));let{pathname:j="/",search:S="",hash:h="",state:C=null,key:B="default",mask:Y}=d,L=y.useMemo(()=>{let H=qt(j,x);return H==null?null:{location:{pathname:H,search:S,hash:h,state:C,key:B,mask:Y},navigationType:u}},[x,j,S,h,C,B,u,Y]);return vt(L!=null,`<Router basename="${x}"> is not able to match the URL "${j}${S}${h}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:y.createElement(Qa.Provider,{value:N},y.createElement(Go.Provider,{children:c,value:L}))}function eb({children:i,location:c}){return G1(Du(i),c)}function Du(i,c=[]){let d=[];return y.Children.forEach(i,(u,m)=>{if(!y.isValidElement(u))return;let p=[...c,m];if(u.type===y.Fragment){d.push.apply(d,Du(u.props.children,p));return}He(u.type===Na,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!u.props.index||!u.props.children,"An index route cannot have child routes.");let v={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(v.children=Du(u.props.children,p)),d.push(v)}),d}var Ss="get",As="application/x-www-form-urlencoded";function Cs(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function ab(i){return Cs(i)&&i.tagName.toLowerCase()==="button"}function tb(i){return Cs(i)&&i.tagName.toLowerCase()==="form"}function nb(i){return Cs(i)&&i.tagName.toLowerCase()==="input"}function lb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ob(i,c){return i.button===0&&(!c||c==="_self")&&!lb(i)}var Es=null;function ib(){if(Es===null)try{new FormData(document.createElement("form"),0),Es=!1}catch{Es=!0}return Es}var sb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tu(i){return i!=null&&!sb.has(i)?(vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${As}"`),null):i}function rb(i,c){let d,u,m,p,v;if(tb(i)){let x=i.getAttribute("action");u=x?qt(x,c):null,d=i.getAttribute("method")||Ss,m=Tu(i.getAttribute("enctype"))||As,p=new FormData(i)}else if(ab(i)||nb(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let N=i.getAttribute("formaction")||x.getAttribute("action");if(u=N?qt(N,c):null,d=i.getAttribute("formmethod")||x.getAttribute("method")||Ss,m=Tu(i.getAttribute("formenctype"))||Tu(x.getAttribute("enctype"))||As,p=new FormData(x,i),!ib()){let{name:j,type:S,value:h}=i;if(S==="image"){let C=j?`${j}.`:"";p.append(`${C}x`,"0"),p.append(`${C}y`,"0")}else j&&p.append(j,h)}}else{if(Cs(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ss,u=null,m=As,v=i}return p&&m==="text/plain"&&(v=p,p=void 0),{action:u,method:d.toLowerCase(),encType:m,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Iu(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function bv(i,c,d,u){let m=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return d?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:c&&qt(m.pathname,c)==="/"?m.pathname=`${Ul(c)}/_root.${u}`:m.pathname=`${Ul(m.pathname)}.${u}`,m}async function cb(i,c){if(i.id in c)return c[i.id];try{let d=await import(i.module);return c[i.id]=d,d}catch(d){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ub(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function db(i,c,d){let u=await Promise.all(i.map(async m=>{let p=c.routes[m.route.id];if(p){let v=await cb(p,d);return v.links?v.links():[]}return[]}));return hb(u.flat(1).filter(ub).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Lh(i,c,d,u,m,p){let v=(N,j)=>d[j]?N.route.id!==d[j].route.id:!0,x=(N,j)=>{var S;return d[j].pathname!==N.pathname||((S=d[j].route.path)==null?void 0:S.endsWith("*"))&&d[j].params["*"]!==N.params["*"]};return p==="assets"?c.filter((N,j)=>v(N,j)||x(N,j)):p==="data"?c.filter((N,j)=>{var h;let S=u.routes[N.route.id];if(!S||!S.hasLoader)return!1;if(v(N,j)||x(N,j))return!0;if(N.route.shouldRevalidate){let C=N.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((h=d[0])==null?void 0:h.params)||{},nextUrl:new URL(i,window.origin),nextParams:N.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function mb(i,c,{includeHydrateFallback:d}={}){return fb(i.map(u=>{let m=c.routes[u.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function fb(i){return[...new Set(i)]}function pb(i){let c={},d=Object.keys(i).sort();for(let u of d)c[u]=i[u];return c}function hb(i,c){let d=new Set;return new Set(c),i.reduce((u,m)=>{let p=JSON.stringify(pb(m));return d.has(p)||(d.add(p),u.push({key:p,link:m})),u},[])}function Vu(){let i=y.useContext(Ll);return Iu(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function vb(){let i=y.useContext(Rs);return Iu(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Yu=y.createContext(void 0);Yu.displayName="FrameworkContext";function Ds(){let i=y.useContext(Yu);return Iu(i,"You must render this element inside a <HydratedRouter> element"),i}function gb(i,c){let d=y.useContext(Yu),[u,m]=y.useState(!1),[p,v]=y.useState(!1),{onFocus:x,onBlur:N,onMouseEnter:j,onMouseLeave:S,onTouchStart:h}=c,C=y.useRef(null);y.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let L=U=>{U.forEach(k=>{v(k.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return C.current&&H.observe(C.current),()=>{H.disconnect()}}},[i]),y.useEffect(()=>{if(u){let L=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(L)}}},[u]);let B=()=>{m(!0)},Y=()=>{m(!1),v(!1)};return d?i!=="intent"?[p,C,{}]:[p,C,{onFocus:qo(x,B),onBlur:qo(N,Y),onMouseEnter:qo(j,B),onMouseLeave:qo(S,Y),onTouchStart:qo(h,B)}]:[!1,C,{}]}function qo(i,c){return d=>{i&&i(d),d.defaultPrevented||c(d)}}function xb({page:i,...c}){let d=R1(),{nonce:u}=Ds(),{router:m}=Vu(),p=y.useMemo(()=>Wh(m.routes,i,m.basename),[m.routes,i,m.basename]);return p?(c.nonce==null&&u&&(c={...c,nonce:u}),d?y.createElement(yb,{page:i,matches:p,...c}):y.createElement(Nb,{page:i,matches:p,...c})):null}function bb(i){let{manifest:c,routeModules:d}=Ds(),[u,m]=y.useState([]);return y.useEffect(()=>{let p=!1;return db(i,c,d).then(v=>{p||m(v)}),()=>{p=!0}},[i,c,d]),u}function yb({page:i,matches:c,...d}){let u=Lt(),{future:m}=Ds(),{basename:p}=Vu(),v=y.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let x=bv(i,p,m.v8_trailingSlashAwareDataRequests,"rsc"),N=!1,j=[];for(let S of c)typeof S.route.shouldRevalidate=="function"?N=!0:j.push(S.route.id);return N&&j.length>0&&x.searchParams.set("_routes",j.join(",")),[x.pathname+x.search]},[p,m.v8_trailingSlashAwareDataRequests,i,u,c]);return y.createElement(y.Fragment,null,v.map(x=>y.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...d})))}function Nb({page:i,matches:c,...d}){let u=Lt(),{future:m,manifest:p,routeModules:v}=Ds(),{basename:x}=Vu(),{loaderData:N,matches:j}=vb(),S=y.useMemo(()=>Lh(i,c,j,p,u,"data"),[i,c,j,p,u]),h=y.useMemo(()=>Lh(i,c,j,p,u,"assets"),[i,c,j,p,u]),C=y.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let L=new Set,H=!1;if(c.forEach(k=>{var de;let V=p.routes[k.route.id];!V||!V.hasLoader||(!S.some(ce=>ce.route.id===k.route.id)&&k.route.id in N&&((de=v[k.route.id])!=null&&de.shouldRevalidate)||V.hasClientLoader?H=!0:L.add(k.route.id))}),L.size===0)return[];let U=bv(i,x,m.v8_trailingSlashAwareDataRequests,"data");return H&&L.size>0&&U.searchParams.set("_routes",c.filter(k=>L.has(k.route.id)).map(k=>k.route.id).join(",")),[U.pathname+U.search]},[x,m.v8_trailingSlashAwareDataRequests,N,u,p,S,c,i,v]),B=y.useMemo(()=>mb(h,p),[h,p]),Y=bb(h);return y.createElement(y.Fragment,null,C.map(L=>y.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...d})),B.map(L=>y.createElement("link",{key:L,rel:"modulepreload",href:L,...d})),Y.map(({key:L,link:H})=>y.createElement("link",{key:L,nonce:d.nonce,...H,crossOrigin:H.crossOrigin??d.crossOrigin})))}function Eb(...i){return c=>{i.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var Sb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sb&&(window.__reactRouterVersion="7.18.4")}catch{}function Ab({basename:i,children:c,useTransitions:d,window:u}){let m=y.useRef();m.current==null&&(m.current=e1({window:u,v5Compat:!0}));let p=m.current,[v,x]=y.useState({action:p.action,location:p.location}),N=y.useCallback(j=>{d===!1?x(j):y.startTransition(()=>x(j))},[d]);return y.useLayoutEffect(()=>p.listen(N),[p,N]),y.createElement(W1,{basename:i,children:c,location:v.location,navigationType:v.action,navigator:p,useTransitions:d})}var ht=y.forwardRef(function({onClick:c,discover:d="render",prefetch:u="none",relative:m,reloadDocument:p,replace:v,mask:x,state:N,target:j,to:S,preventScrollReset:h,viewTransition:C,defaultShouldRevalidate:B,...Y},L){let{basename:H,navigator:U,useTransitions:k}=y.useContext(Qa),V=typeof S=="string"&&qu.test(S),de=sv(S,H);S=de.to;let ce=q1(S,{relative:m}),Ee=Lt(),ee=null;if(x){let me=Lu(x,[],Ee.mask?Ee.mask.pathname:"/",!0);H!=="/"&&(me.pathname=me.pathname==="/"?H:Wa([H,me.pathname])),ee=U.createHref(me)}let[$,Ie,W]=gb(u,Y),re=wb(S,{replace:v,mask:x,state:N,target:j,preventScrollReset:h,relative:m,viewTransition:C,defaultShouldRevalidate:B,useTransitions:k});function oe(me){c&&c(me),me.defaultPrevented||re(me)}let Ve=!(de.isExternal||p),Pe=y.createElement("a",{...Y,...W,href:(Ve?ee:void 0)||de.absoluteURL||ce,onClick:Ve?oe:c,ref:Eb(L,Ie),target:j,"data-discover":!V&&d==="render"?"true":void 0});return $&&!V?y.createElement(y.Fragment,null,Pe,y.createElement(xb,{page:ce})):Pe});ht.displayName="Link";var Ob=y.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:u="",end:m=!1,style:p,to:v,viewTransition:x,children:N,...j},S){let h=Vo(v,{relative:j.relative}),C=Lt(),B=y.useContext(Rs),{navigator:Y,basename:L}=y.useContext(Qa),H=B!=null&&Mb(h)&&x===!0,U=Y.encodeLocation?Y.encodeLocation(h).pathname:h.pathname,k=C.pathname,V=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;d||(k=k.toLowerCase(),V=V?V.toLowerCase():null,U=U.toLowerCase()),V&&L&&(V=qt(V,L)||V);const de=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let ce=k===U||!m&&k.startsWith(U)&&k.charAt(de)==="/",Ee=V!=null&&(V===U||!m&&V.startsWith(U)&&V.charAt(U.length)==="/"),ee={isActive:ce,isPending:Ee,isTransitioning:H},$=ce?c:void 0,Ie;typeof u=="function"?Ie=u(ee):Ie=[u,ce?"active":null,Ee?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let W=typeof p=="function"?p(ee):p;return y.createElement(ht,{...j,"aria-current":$,className:Ie,ref:S,style:W,to:v,viewTransition:x},typeof N=="function"?N(ee):N)});Ob.displayName="NavLink";var Tb=y.forwardRef(({discover:i="render",fetcherKey:c,navigate:d,reloadDocument:u,replace:m,state:p,method:v=Ss,action:x,onSubmit:N,relative:j,preventScrollReset:S,viewTransition:h,defaultShouldRevalidate:C,...B},Y)=>{let{useTransitions:L}=y.useContext(Qa),H=Db(),U=_b(x,{relative:j}),k=v.toLowerCase()==="get"?"get":"post",V=typeof x=="string"&&qu.test(x),de=ce=>{if(N&&N(ce),ce.defaultPrevented)return;ce.preventDefault();let Ee=ce.nativeEvent.submitter,ee=(Ee==null?void 0:Ee.getAttribute("formmethod"))||v,$=()=>H(Ee||ce.currentTarget,{fetcherKey:c,method:ee,navigate:d,replace:m,state:p,relative:j,preventScrollReset:S,viewTransition:h,defaultShouldRevalidate:C});L&&d!==!1?y.startTransition(()=>$()):$()};return y.createElement("form",{ref:Y,method:k,action:U,onSubmit:u?N:de,...B,"data-discover":!V&&i==="render"?"true":void 0})});Tb.displayName="Form";function jb(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yv(i){let c=y.useContext(Ll);return He(c,jb(i)),c}function wb(i,{target:c,replace:d,mask:u,state:m,preventScrollReset:p,relative:v,viewTransition:x,defaultShouldRevalidate:N,useTransitions:j}={}){let S=L1(),h=Lt(),C=Vo(i,{relative:v});return y.useCallback(B=>{if(ob(B,c)){B.preventDefault();let Y=d!==void 0?d:zl(h)===zl(C),L=()=>S(i,{replace:Y,mask:u,state:m,preventScrollReset:p,relative:v,viewTransition:x,defaultShouldRevalidate:N});j?y.startTransition(()=>L()):L()}},[h,S,C,d,u,m,c,i,p,v,x,N,j])}var Rb=0,Cb=()=>`__${String(++Rb)}__`;function Db(){let{router:i}=yv("useSubmit"),{basename:c}=y.useContext(Qa),d=P1(),u=i.fetch,m=i.navigate;return y.useCallback(async(p,v={})=>{let{action:x,method:N,encType:j,formData:S,body:h}=rb(p,c);if(v.navigate===!1){let C=v.fetcherKey||Cb();await u(C,d,v.action||x,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:S,body:h,formMethod:v.method||N,formEncType:v.encType||j,flushSync:v.flushSync})}else await m(v.action||x,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:S,body:h,formMethod:v.method||N,formEncType:v.encType||j,replace:v.replace,state:v.state,fromRouteId:d,flushSync:v.flushSync,viewTransition:v.viewTransition})},[u,m,c,d])}function _b(i,{relative:c}={}){let{basename:d}=y.useContext(Qa),u=y.useContext(gt);He(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),p={...Vo(i||".",{relative:c})},v=Lt();if(i==null){p.search=v.search;let x=new URLSearchParams(p.search),N=x.getAll("index");if(N.some(S=>S==="")){x.delete("index"),N.filter(h=>h).forEach(h=>x.append("index",h));let S=x.toString();p.search=S?`?${S}`:""}}return(!i||i===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Wa([d,p.pathname])),zl(p)}function Mb(i,{relative:c}={}){let d=y.useContext(mv);He(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=yv("useViewTransitionState"),m=Vo(i,{relative:c});if(!d.isTransitioning)return!1;let p=qt(d.currentLocation.pathname,u)||d.currentLocation.pathname,v=qt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return Ts(m.pathname,v)!=null||Ts(m.pathname,p)!=null}const zb={sm:"w-[92px]",md:"w-[150px]",lg:"w-[200px]",xl:"w-[260px]"},hn=({size:i="md",className:c="",glow:d=!0})=>s.jsxs("span",{id:"vm-midias-logo",className:`relative inline-flex shrink-0 items-center justify-center select-none ${c}`,children:[d&&s.jsx("span",{className:"absolute inset-[24%] -z-10 bg-[#f40b36]/18 blur-xl","aria-hidden":"true"}),s.jsx("img",{src:"/images/logo-VMmidias.png",alt:"VM MÍDIAS",className:`${zb[i]} h-auto object-contain transition-transform duration-300 hover:scale-[1.02]`,loading:"eager",decoding:"async"})]});/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qb=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,d,u)=>u?u.toUpperCase():d.toLowerCase()),Hh=i=>{const c=qb(i);return c.charAt(0).toUpperCase()+c.slice(1)},Nv=(...i)=>i.filter((c,d,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===d).join(" ").trim(),Lb=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=y.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:m="",children:p,iconNode:v,...x},N)=>y.createElement("svg",{ref:N,...Hb,width:c,height:c,stroke:i,strokeWidth:u?Number(d)*24/Number(c):d,className:Nv("lucide",m),...!p&&!Lb(x)&&{"aria-hidden":"true"},...x},[...v.map(([j,S])=>y.createElement(j,S)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(i,c)=>{const d=y.forwardRef(({className:u,...m},p)=>y.createElement(Bb,{ref:p,iconNode:c,className:Nv(`lucide-${Ub(Hh(i))}`,`lucide-${i}`,u),...m}));return d.displayName=Hh(i),d};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Yo=le("arrow-left",Gb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],pt=le("arrow-right",Ib);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Bh=le("arrow-up-right",Vb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],kb=le("arrow-up",Yb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Hl=le("building-2",Qb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Zb=le("calendar-check",Xb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_s=le("check",Kb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fb=le("chevron-down",Pb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$b=le("chevron-left",Jb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ev=le("chevron-right",Wb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gh=le("circle-alert",ey);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ty=le("circle-check",ay);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],Sv=le("clipboard",ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Av=le("clock-3",ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],iy=le("cloud-upload",oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],ry=le("coins",sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],uy=le("download",cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],my=le("external-link",dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],py=le("file-image",fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],vy=le("file",hy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],xy=le("globe",gy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],yy=le("headphones",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],Ey=le("image-off",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ay=le("image",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ty=le("instagram",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Aa=le("loader-circle",jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],Ih=le("lock-keyhole",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Ov=le("log-out",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Vh=le("mail",Cy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ku=le("map-pin",Dy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],My=le("menu",_y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],Tv=le("newspaper",zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],qy=le("palette",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Hy=le("pencil",Ly);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gy=le("plus",By);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],jv=le("refresh-cw",Iy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Yy=le("repeat",Vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Qu=le("search",ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Xy=le("send",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wv=le("shield-check",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Py=le("sparkles",Ky);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Jy=le("star",Fy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Rv=le("trash-2",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],e2=le("video",Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ho=le("x",a2),Ue={company:{name:"VM MÍDIAS",legalName:"VM MÍDIAS Publicidade e Painéis Digitais",tagline:"SUA MARCA EM DESTAQUE.",locationShort:"Capela do Alto — SP",domain:"www.vmmidias.com.br",whatsappRaw:"551531650153",whatsappFormatted:"(15) 3165-0153",email:"fredericolopescorrea@hotmail.com",instagramUrl:"https://www.instagram.com/vmmidiasindoor",heroVideoUrl:"/videos/Apresentacao-VMmidias.mp4"},plans:[{id:"start",name:"START",type:"MÍDIA INDOOR",coverage:"Divulgação em 05 locais",badge:null,prices:{mensal:{price:"179,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"159,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"139,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 05 pontos estratégicos","Exibição contínua durante todo o horário comercial","Alta frequência de repetições diárias","Criação de arte estática inclusa sem custo adicional","Suporte e atendimento direto em Capela do Alto"]},{id:"destaque",name:"DESTAQUE",type:"MÍDIA INDOOR",coverage:"Divulgação em 09 locais + 01 adicional",badge:"MAIS ESCOLHIDO",prices:{mensal:{price:"259,00",period:"/ mês",note:"Sem fidelidade",badge:null},semestral:{price:"237,00",period:"/ mês",note:"Contrato de 06 meses",badge:null},anual:{price:"217,00",period:"/ mês",note:"Contrato de 12 meses",badge:"MELHOR CUSTO-BENEFÍCIO"}},optionalVideo:{mensal:"R$ 100",semestral:"R$ 75",anual:"R$ 50"},features:["Divulgação em 09 locais + 01 ponto adicional grátis","Maior presença e frequência em toda a rede","Prioridade em pontos de altíssimo fluxo","Criação de arte inclusa sem custo adicional","Relatórios de inserções e atendimento prioritário"]}],supporters:[{id:"esquina-do-salgado",name:"Esquina do Salgado",logoUrl:"/images/apoiadores/esquina-do-salgado.png"},{id:"espetinho-do-vg",name:"Espetinho do VG",logoUrl:"/images/apoiadores/espetinho-do-vg.png"},{id:"boteco-do-gordao",name:"Boteco do Gordão",logoUrl:"/images/apoiadores/boteco-do-gordao.png"},{id:"mg-sampaio-iperozinho",name:"MG Sampaio Iperózinho",logoUrl:"/images/apoiadores/mg-sampaio.jpg"},{id:"mg-sampaio-culaus",name:"MG Sampaio Culaus",logoUrl:"/images/apoiadores/mg-sampaio.jpg"}],howItWorksSteps:[{step:"01",title:"ESCOLHA SEU PLANO",description:"Selecione entre START (05 locais) ou DESTAQUE (09 locais + 01 bônus) e a duração contratual."},{step:"02",title:"ENVIE SUAS INFORMAÇÕES",description:"Compartilhe pelo WhatsApp seu logo, fotos do seu produto/serviço e sua mensagem principal."},{step:"03",title:"CRIAMOS SUA CAMPANHA",description:"Nossa equipe cria a arte publicitária especialmente ajustada para impacto visual nas telas."},{step:"04",title:"SUA MARCA ENTRA NO AR",description:"Sua empresa começa a ser transmitida nos pontos comerciais mais movimentados de Capela do Alto."}],whyAdvertise:[{id:"presenca-diaria",title:"PRESENÇA DIÁRIA",description:"Sua marca presente constantemente durante todo o expediente dos melhores estabelecimentos da cidade.",iconName:"CalendarCheck"},{id:"pontos-estrategicos",title:"PONTOS ESTRATÉGICOS",description:"Publicidade instalada exatamente onde as pessoas de Capela do Alto realmente compram e circulam.",iconName:"MapPin"},{id:"alta-frequencia",title:"ALTA FREQUÊNCIA",description:"A repetição diária gera familiaridade. Quem vê todos os dias lembra na hora de comprar.",iconName:"Repeat"},{id:"preco-acessivel",title:"PREÇO ACESSÍVEL",description:"Planos a partir de R$ 139/mês, pensados sob medida para o orçamento do comércio e serviços locais.",iconName:"Coins"},{id:"criacao-facilitada",title:"CRIAÇÃO FACILITADA",description:"Você não precisa ser designer. Nós ajudamos sua empresa a colocar sua campanha no ar com padrão profissional.",iconName:"Palette"},{id:"atendimento-local",title:"ATENDIMENTO LOCAL",description:"Suporte próximo, ágil e humanizado em Capela do Alto, com quem conhece o mercado da nossa região.",iconName:"Headphones"}],faqs:[{question:"O que é mídia indoor?",answer:"Mídia Indoor (também conhecida como DOOH - Digital Out of Home) é a veiculação de anúncios em telas digitais de alta resolução instaladas dentro de estabelecimentos comerciais estratégicos onde há fluxo contínuo de pessoas e tempo de permanência."},{question:"Onde meu anúncio será exibido?",answer:"Sua marca será exibida em telas digitais instaladas nos principais pontos de circulação de Capela do Alto — como supermercados, restaurantes, padarias, lotéricas, academias e comércios parceiros da nossa rede."},{question:"Como envio minha arte?",answer:"Basta nos enviar pelo WhatsApp ou e-mail o seu logotipo (em alta resolução), imagens dos seus produtos/serviços e as informações de contato que deseja destacar. É simples e rápido."},{question:"A VM MÍDIAS cria o anúncio?",answer:"Sim! A criação da arte estática para veiculação nas telas já está inclusa no seu plano, sem cobrança adicional. Caso você queira um vídeo animado em movimento para chamar ainda mais atenção, oferecemos o serviço opcional de animação."},{question:"Quanto tempo demora para minha campanha entrar no ar?",answer:"Após a aprovação da sua arte ou recebimento do seu material finalizado, a campanha entra no ar na nossa rede de telas em até 48 horas úteis."},{question:"Posso alterar minha campanha durante o contrato?",answer:"Sim! Você pode atualizar sua arte ou oferta para divulgar datas comemorativas, promoções especiais ou lançamentos de produtos conforme as condições do seu plano contratado."},{question:"Qual é a diferença entre START e DESTAQUE?",answer:"O Plano START veicula sua marca em 05 locais estratégicos da rede. O Plano DESTAQUE é o mais escolhido: oferece divulgação em 09 locais mais 01 ponto adicional bonificado (total de 10 locais), proporcionando o dobro de cobertura na cidade."},{question:"Como funciona o plano mensal?",answer:"No plano mensal você tem total flexibilidade: renova mês a mês sem fidelidade. Já nos planos semestral (6 meses) e anual (12 meses), você garante descontos progressivos expressivos e a melhor relação custo-benefício por mês."},{question:"Posso contratar mais pontos?",answer:"Com certeza! Conforme a rede de telas da VM MÍDIAS expande em novos bairros e estabelecimentos de Capela do Alto, você pode ampliar sua presença para novos pontos estratégicos adicionais."},{question:"Como faço para anunciar?",answer:"Basta clicar em qualquer botão de contato ou no botão flutuante de WhatsApp do site, escolher seu plano e falar diretamente com nossa equipe. Nós cuidamos de todo o processo para colocar sua marca em destaque rapidamente!"}]},pn=({title:i,...c})=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":i?void 0:!0,role:i?"img":void 0,...c,children:[i&&s.jsx("title",{children:i}),s.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.172.198-.297.297-.495.1-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.438-9.886 9.893-9.886a9.821 9.821 0 017.021 2.91 9.825 9.825 0 012.9 7.027c-.003 5.45-4.439 9.887-9.93 9.887m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.69 1.449h.005c6.559 0 11.895-5.336 11.898-11.893a11.821 11.821 0 00-3.49-8.414Z"})]}),t2=()=>{const[i,c]=y.useState(!1),[d,u]=y.useState("inicio");y.useEffect(()=>{if(!i)return;const v=document.body.style.overflow;document.body.style.overflow="hidden";const x=j=>{j.key==="Escape"&&c(!1)},N=()=>{window.innerWidth>=1024&&c(!1)};return window.addEventListener("keydown",x),window.addEventListener("resize",N),()=>{document.body.style.overflow=v,window.removeEventListener("keydown",x),window.removeEventListener("resize",N)}},[i]),y.useEffect(()=>{const x=["inicio","onde-estamos","como-funciona","planos","contato"].map(j=>document.getElementById(j)).filter(j=>!!j),N=new IntersectionObserver(j=>{const S=j.filter(h=>h.isIntersecting).sort((h,C)=>C.intersectionRatio-h.intersectionRatio)[0];S&&u(S.target.id)},{rootMargin:"-18% 0px -62% 0px",threshold:[0,.15,.35]});return x.forEach(j=>N.observe(j)),()=>N.disconnect()},[]);const m=[{label:"Início",href:"#inicio"},{label:"Onde Estamos",href:"#onde-estamos"},{label:"Como Funciona",href:"#como-funciona"},{label:"Planos",href:"#planos"},{label:"Contato",href:"#contato"}],p=()=>{c(!1)};return s.jsxs(s.Fragment,{children:[s.jsx("header",{id:"main-header",className:"fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/10 bg-[#030406]/96 shadow-2xl shadow-black/40 backdrop-blur-xl lg:h-[84px]",children:s.jsx("div",{className:"mx-auto h-full max-w-[1500px] px-4 sm:px-8 lg:px-12",children:s.jsxs("div",{className:"flex h-full items-center justify-between",children:[s.jsx("a",{href:"#inicio",className:"flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D] rounded-md","aria-label":"VM MÍDIAS - Ir para o início",children:s.jsx(hn,{size:"sm"})}),s.jsx("nav",{id:"desktop-navigation",className:"hidden lg:flex items-center space-x-7","aria-label":"Navegação Principal",children:m.map(v=>s.jsxs("a",{href:v.href,"aria-current":d===v.href.slice(1)?"page":void 0,className:`text-[13px] font-bold transition-colors relative py-2 group focus:outline-none focus-visible:text-white ${d===v.href.slice(1)?"text-white":"text-[#94979f] hover:text-white"}`,children:[v.label,s.jsx("span",{className:`absolute bottom-0 left-0 h-[2px] bg-[#F8032D] transition-all duration-300 group-hover:w-full ${d===v.href.slice(1)?"w-full":"w-0"}`})]},v.href))}),s.jsx("div",{className:"hidden lg:flex items-center gap-4",children:s.jsxs("a",{id:"header-cta-button",href:"#contato",className:"group inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-[#f40b36] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d90a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-white",children:[s.jsx("span",{children:"ANUNCIE AGORA"}),s.jsx(pt,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})}),s.jsxs("div",{className:"flex lg:hidden items-center gap-3",children:[s.jsxs("a",{href:"#contato",onClick:p,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8032D] text-white text-xs font-bold uppercase tracking-wider",children:[s.jsx("span",{children:"Anuncie"}),s.jsx(pt,{className:"w-3.5 h-3.5"})]}),s.jsx("button",{id:"mobile-menu-toggle",type:"button",onClick:()=>c(!i),className:"p-2 rounded-lg bg-[#15151B] border border-[#22222E] text-white hover:text-[#F8032D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":i,"aria-controls":"mobile-navigation-drawer","aria-label":i?"Fechar menu de navegação":"Abrir menu de navegação",children:i?s.jsx(Ho,{className:"w-6 h-6"}):s.jsx(My,{className:"w-6 h-6"})})]})]})})}),i&&s.jsx("div",{id:"mobile-navigation-drawer",className:"fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto bg-[#050609] lg:hidden",children:s.jsxs("div",{className:"flex min-h-full flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-6 sm:px-8",children:[s.jsx("div",{className:"mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38",children:"Navegação"}),s.jsx("nav",{"aria-label":"Navegação móvel",className:"border-t border-white/10",children:m.map((v,x)=>s.jsxs("a",{href:v.href,onClick:p,"aria-current":d===v.href.slice(1)?"page":void 0,className:`group flex min-h-14 items-center gap-4 border-b border-white/10 px-1 text-base font-bold transition-colors ${d===v.href.slice(1)?"text-white":"text-white/65 hover:text-white"}`,children:[s.jsx("span",{className:`text-[10px] tabular-nums ${d===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`,children:String(x+1).padStart(2,"0")}),s.jsx("span",{className:"flex-1",children:v.label}),s.jsx(pt,{className:`h-4 w-4 transition-transform group-hover:translate-x-1 ${d===v.href.slice(1)?"text-[#f40b36]":"text-white/25"}`})]},v.href))}),s.jsxs("div",{className:"mt-auto flex flex-col gap-3 border-t border-white/10 pt-5",children:[s.jsxs("a",{href:"#contato",onClick:p,className:"flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-[#F8032D] py-3 text-sm font-black text-white",children:[s.jsx("span",{children:"ANUNCIE AGORA"}),s.jsx(pt,{className:"w-4 h-4"})]}),s.jsxs("a",{href:`https://wa.me/${Ue.company.whatsappRaw}?text=${encodeURIComponent("Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.")}`,target:"_blank",rel:"noopener noreferrer",onClick:p,className:"flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.035] py-2.5 text-sm font-bold text-white",children:[s.jsx(pn,{className:"w-4 h-4 text-emerald-400"}),s.jsx("span",{children:"Falar pelo WhatsApp"})]})]})]})})]})},ko=({children:i,align:c="left",className:d=""})=>s.jsxs("div",{className:`brand-eyebrow ${c==="center"?"justify-center":""} ${d}`,children:[s.jsx("span",{className:"brand-eyebrow-line","aria-hidden":"true"}),s.jsx("span",{children:i})]}),Ms=({eyebrow:i,title:c,accent:d,description:u,align:m="center",className:p=""})=>s.jsxs("div",{className:`${m==="center"?"text-center mx-auto":"text-left"} max-w-4xl ${p}`,children:[s.jsx(ko,{align:m,children:i}),s.jsxs("h2",{className:"brand-section-title",children:[c," ",s.jsx("span",{className:"text-[#ff143f] text-led-glow",children:d})]}),u&&s.jsx("p",{className:"brand-section-copy",children:u})]}),js=({href:i,children:c,variant:d="primary",id:u,className:m=""})=>s.jsxs("a",{id:u,href:i,className:`group brand-button ${d==="outline"?"brand-button-outline":"brand-button-primary"} ${m}`,children:[s.jsx("span",{children:c}),s.jsx(pt,{className:"w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"})]}),n2=({src:i,poster:c})=>s.jsx("div",{className:"relative aspect-video w-full overflow-hidden border border-white/20 bg-[#08090c] shadow-[0_24px_70px_rgba(0,0,0,0.5)]",children:s.jsx("video",{className:"h-full w-full object-cover",controls:!0,playsInline:!0,preload:"metadata",poster:c,"aria-label":"Conheça a VM Mídias",children:s.jsx("source",{src:i,type:"video/mp4"})})}),l2=()=>s.jsxs("section",{id:"inicio",className:"relative min-h-[100svh] overflow-hidden bg-black lg:h-[100svh]",children:[s.jsx("div",{className:"absolute inset-0 bg-hero-city hero-photo-motion","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,5,0.98)_0%,rgba(2,3,5,0.93)_34%,rgba(2,3,5,0.56)_60%,rgba(2,3,5,0.06)_100%)]","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(0deg,rgba(2,3,5,0.94)_0%,transparent_36%,rgba(2,3,5,0.38)_100%)]","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 vm-noise opacity-[0.06] mix-blend-screen","aria-hidden":"true"}),s.jsx("div",{className:"relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-5 pb-10 pt-[104px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-6 lg:pt-[96px]",children:s.jsxs("div",{className:"grid w-full items-center gap-7 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-6",children:[s.jsxs("div",{className:"order-1 lg:col-span-7 lg:row-start-1 lg:self-end",children:[s.jsx(ko,{children:"VM Mídias · Capela do Alto"}),s.jsxs("h1",{className:"max-w-[820px] text-[clamp(2.8rem,12vw,4.6rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-white lg:text-[clamp(4rem,5.5vw,6.2rem)]",children:["Seu negócio já é bom",s.jsx("span",{className:"mt-3 block text-[#ff143f] text-led-glow",children:"Agora ele precisa aparecer."})]})]}),s.jsx("div",{className:"order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1",children:s.jsx(n2,{src:Ue.company.heroVideoUrl,poster:"/images/generated/vm-indoor-space.webp"})}),s.jsxs("div",{className:"order-3 lg:col-span-7 lg:row-start-2 lg:self-start",children:[s.jsx("p",{className:"max-w-2xl text-base leading-relaxed text-[#d0d1d6] sm:text-xl lg:text-lg xl:text-xl",children:"Publicidade em telas estratégicas de Capela do Alto para sua empresa ser vista, lembrada e escolhida."}),s.jsxs("div",{className:"mt-7 flex flex-col gap-3 sm:flex-row",children:[s.jsx(js,{id:"hero-primary-cta",href:"#contato",children:"Colocar minha marca em destaque"}),s.jsx(js,{id:"hero-secondary-cta",href:"#planos",variant:"outline",children:"Conhecer os planos"})]})]})]})})]}),o2=({supporter:i})=>{const[c,d]=y.useState(!1),u=i.name.split(" ").filter(Boolean).slice(0,2).map(m=>m[0]).join("");return s.jsx("div",{className:"flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-black/35 p-6 sm:p-8",children:c?s.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full border border-[#f40b36]/45 bg-[#f40b36]/10 text-2xl font-black tracking-tight text-white","aria-hidden":"true",children:u}):s.jsx("img",{src:i.logoUrl,alt:`Logo ${i.name}`,className:"h-full max-h-28 w-full object-contain",onError:()=>d(!0)})})},i2=()=>s.jsxs("section",{id:"onde-estamos",className:"relative overflow-hidden border-b border-white/10 bg-[#06070a] py-24 lg:py-32",children:[s.jsx("div",{className:"absolute inset-0 bg-indoor-space bg-cover bg-center opacity-[0.08]","aria-hidden":"true"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/95 to-[#06070a]","aria-hidden":"true"}),s.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[s.jsxs("div",{className:"mb-12 max-w-5xl",children:[s.jsx(ko,{children:"Rede de apoiadores"}),s.jsxs("h2",{className:"brand-section-title",children:["Comércios que já estão com a"," ",s.jsx("span",{className:"text-[#f40b36]",children:"VM Mídias."})]}),s.jsx("p",{className:"brand-section-copy max-w-3xl",children:"Empresas locais que apoiam a nossa rede e fortalecem a mídia indoor em Capela do Alto."})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5",children:Ue.supporters.map(i=>s.jsxs("article",{className:"overflow-hidden border border-white/10 bg-[#0b0d10]/90",children:[s.jsx(o2,{supporter:i}),s.jsxs("div",{className:"min-h-28 p-4 sm:p-5",children:[s.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.18em] text-[#f40b36] sm:text-[10px]",children:"Apoiador VM Mídias"}),s.jsx("h3",{className:"mt-2 text-sm font-black leading-snug text-white sm:text-base",children:i.name})]})]},i.id))})]})]}),s2=()=>s.jsx("section",{id:"como-funciona",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:s.jsxs("div",{className:"mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12",children:[s.jsx("div",{className:"lg:col-span-5",children:s.jsxs("div",{className:"lg:sticky lg:top-32",children:[s.jsx(Ms,{eyebrow:"Do planejamento ao resultado",title:"Como",accent:"funciona",description:"Simples, rápido e sem burocracia.",align:"left"}),s.jsx("div",{className:"mt-8",children:s.jsx(js,{href:"#contato",children:"Começar agora"})})]})}),s.jsxs("div",{className:"relative lg:col-span-7 lg:pl-12",children:[s.jsx("div",{className:"absolute bottom-8 left-[19px] top-8 w-px bg-white/12 lg:left-[67px]","aria-hidden":"true"}),s.jsx("div",{className:"space-y-0",children:Ue.howItWorksSteps.map((i,c)=>s.jsxs("article",{className:"group relative grid grid-cols-[40px_1fr] gap-5 border-b border-white/10 py-8 first:pt-0 last:border-b-0 lg:grid-cols-[56px_1fr] lg:gap-8 lg:py-11",children:[s.jsx("div",{className:"relative z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#030406] text-xs font-black text-white transition-colors group-hover:border-[#f40b36] group-hover:text-[#f40b36] lg:h-14 lg:w-14",children:String(c+1).padStart(2,"0")}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:i.title}),s.jsx("p",{className:"mt-3 text-sm font-semibold text-white/75",children:i.description})]})]},i.step))})]})]})}),Yh=[{id:"mensal",label:"Mensal",shortLabel:"Mensal"},{id:"semestral",label:"Semestral",shortLabel:"6 meses"},{id:"anual",label:"Anual",shortLabel:"12 meses"}],r2=({onSelectPlan:i})=>{const[c,d]=y.useState("anual"),u=p=>{var v;i==null||i(p.name,c),(v=document.getElementById("contato"))==null||v.scrollIntoView({behavior:"smooth"})},m=p=>{var N;const v=(N=Yh.find(j=>j.id===c))==null?void 0:N.label,x=`Olá! Tenho interesse no Plano ${p.name}, período ${v}. Gostaria de receber mais informações.`;return`https://wa.me/${Ue.company.whatsappRaw}?text=${encodeURIComponent(x)}`};return s.jsx("section",{id:"planos",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:s.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[s.jsx(Ms,{eyebrow:"Planos VM Mídias",title:"Escolha sua",accent:"presença",description:"Dois planos claros. Você escolhe a cobertura e o período ideal para o seu negócio.",className:"mb-9"}),s.jsx("div",{className:"mx-auto mb-10 flex max-w-xl rounded-lg border border-white/10 bg-[#0d0f13] p-1.5",children:Yh.map(p=>s.jsxs("button",{type:"button",onClick:()=>d(p.id),"aria-pressed":c===p.id,className:`relative flex min-h-12 flex-1 flex-col items-center justify-center rounded-md px-2 text-center transition-colors ${c===p.id?"bg-[#f40b36] text-white":"text-white/52 hover:bg-white/[0.04] hover:text-white"}`,children:[s.jsx("span",{className:"text-xs font-black uppercase tracking-[0.1em]",children:p.shortLabel}),p.id==="anual"&&s.jsx("span",{className:`mt-0.5 text-[9px] font-bold uppercase ${c==="anual"?"text-white/75":"text-[#f40b36]"}`,children:"melhor valor"})]},p.id))}),s.jsx("div",{className:"mx-auto grid max-w-6xl overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 lg:gap-px",children:Ue.plans.map(p=>{const v=p.id==="destaque",x=p.prices[c],N=p.features.slice(0,4);return s.jsxs("article",{className:`relative flex flex-col bg-[#0d0f13] p-7 sm:p-10 lg:p-12 ${v?"border-t-4 border-[#f40b36] lg:border-t-0 lg:border-l-4":""}`,children:[s.jsxs("div",{className:"flex items-start justify-between gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-[11px] font-black uppercase tracking-[0.18em] text-[#f40b36]",children:p.type}),s.jsxs("h3",{className:"mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl",children:["Plano ",p.name]})]}),v&&s.jsxs("span",{className:"flex shrink-0 items-center gap-1 bg-[#f40b36] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider text-white",children:[s.jsx(Jy,{className:"h-3 w-3 fill-current"})," Mais escolhido"]})]}),s.jsx("p",{className:"mt-4 text-sm font-semibold text-white/62",children:p.coverage}),s.jsxs("div",{className:"my-8 border-y border-white/10 py-7",children:[s.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.14em] text-white/38",children:x.note}),s.jsxs("div",{className:"mt-2 flex items-end gap-2",children:[s.jsx("span",{className:"mb-2 text-sm font-black text-[#f40b36]",children:"R$"}),s.jsx("span",{className:"text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl",children:x.price}),s.jsx("span",{className:"mb-2 text-sm text-white/45",children:x.period})]})]}),s.jsx("div",{className:"space-y-4",children:N.map(j=>s.jsxs("div",{className:"flex gap-3 text-sm leading-6 text-white/70",children:[s.jsx(_s,{className:"mt-1 h-4 w-4 shrink-0 text-[#f40b36]"}),s.jsx("span",{children:j})]},j))}),s.jsxs("div",{className:"mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/48",children:[s.jsx(e2,{className:"h-4 w-4 shrink-0 text-[#f40b36]"}),s.jsxs("span",{children:["Vídeo animado opcional por ",p.optionalVideo[c]]})]}),s.jsxs("div",{className:"mt-auto pt-8",children:[s.jsxs("button",{type:"button",onClick:()=>u(p),className:`group flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-black uppercase tracking-[0.1em] transition-colors ${v?"bg-[#f40b36] text-white hover:bg-[#d90a31]":"border border-white/18 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`,children:["Escolher ",p.name," ",s.jsx(pt,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}),s.jsxs("a",{href:m(p),target:"_blank",rel:"noopener noreferrer",className:"mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/42 transition-colors hover:text-[#25D366]",children:[s.jsx(pn,{className:"h-4 w-4"})," Tirar dúvidas pelo WhatsApp"]})]})]},p.id)})})]})})},kh=({item:i})=>{const c=i.icon;return s.jsx("article",{className:"group relative flex h-full min-h-[250px] flex-col border border-white/10 bg-[#08090d]/90 p-6 transition-colors duration-300 hover:border-[#ff143f]/45 hover:bg-[#0b0c11] sm:p-7",children:s.jsxs("div",{className:"flex items-start gap-5",children:[s.jsxs("div",{className:"shrink-0",children:[s.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ff143f] text-[#ff143f] shadow-[0_0_24px_rgba(248,3,45,0.2)] transition-all duration-300 group-hover:bg-[#ff143f] group-hover:text-white",children:s.jsx(c,{className:"h-6 w-6","aria-hidden":"true"})}),s.jsx("span",{className:"mt-3 block text-center text-[10px] font-black tracking-[0.25em] text-[#5d606b]",children:i.number})]}),s.jsxs("div",{className:"min-w-0 pt-1",children:[s.jsx("h3",{className:"text-xl font-black uppercase tracking-tight text-white lg:text-2xl",children:i.title}),s.jsx("span",{className:"my-4 block h-[3px] w-10 bg-[#ff143f] shadow-[0_0_12px_#f8032d]"}),s.jsx("p",{className:"max-w-lg text-sm leading-7 text-[#aeb0b8]",children:i.text})]})]})})},c2=({items:i,desktopColumns:c=3,mobileCarousel:d=!1})=>{const u=y.useRef(null),[m,p]=y.useState(0),v=c===2?"md:grid-cols-2":"md:grid-cols-3",x=j=>{var C;const S=Math.max(0,Math.min(i.length-1,j)),h=(C=u.current)==null?void 0:C.children[S];h==null||h.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),p(S)},N=()=>{const j=u.current;if(!j||j.clientWidth===0)return;const S=Math.round(j.scrollLeft/j.clientWidth);p(Math.max(0,Math.min(i.length-1,S)))};return d?s.jsxs("div",{children:[s.jsx("div",{ref:u,onScroll:N,className:`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:overflow-visible md:pb-0 ${v}`,children:i.map(j=>s.jsx("div",{className:"min-w-full snap-center md:min-w-0",children:s.jsx(kh,{item:j})},j.id))}),s.jsxs("div",{className:"mt-5 flex items-center justify-between md:hidden",children:[s.jsx("button",{type:"button",onClick:()=>x(m-1),disabled:m===0,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver benefício anterior",children:s.jsx($b,{className:"h-5 w-5"})}),s.jsx("div",{className:"flex items-center gap-2","aria-label":"Posição do carrossel",children:i.map((j,S)=>s.jsx("button",{type:"button",onClick:()=>x(S),className:`h-2 rounded-full transition-all ${S===m?"w-7 bg-[#ff143f]":"w-2 bg-white/20"}`,"aria-label":`Ver benefício ${S+1}`,"aria-current":S===m?"true":void 0},j.id))}),s.jsx("button",{type:"button",onClick:()=>x(m+1),disabled:m===i.length-1,className:"flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ff143f] hover:text-[#ff143f] disabled:cursor-not-allowed disabled:opacity-30","aria-label":"Ver próximo benefício",children:s.jsx(Ev,{className:"h-5 w-5"})})]})]}):s.jsx("div",{className:`grid grid-cols-1 gap-4 ${v}`,children:i.map(j=>s.jsx(kh,{item:j},j.id))})},u2=()=>{const i={CalendarCheck:Zb,MapPin:ku,Repeat:Yy,Coins:ry,Palette:qy,Headphones:yy},c=Ue.whyAdvertise.map((d,u)=>({id:d.id,number:String(u+1).padStart(2,"0"),title:d.title,text:d.description,icon:i[d.iconName]||Py}));return s.jsx("section",{id:"por-que-anunciar",className:"border-b border-white/10 bg-[#030406] py-24 lg:py-32",children:s.jsxs("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:[s.jsx(Ms,{eyebrow:"Vantagens VM Mídias",title:"Por que anunciar",accent:"com a VM Mídias",description:"Mais que mídia, resultados de visibilidade e autoridade para o seu negócio.",align:"left",className:"mb-14 lg:mb-20"}),s.jsx(c2,{items:c,desktopColumns:2,mobileCarousel:!0})]})})},d2=()=>{const[i,c]=y.useState(0),d=u=>{c(m=>m===u?null:u)};return s.jsx("section",{id:"faq",className:"relative py-24 lg:py-32 bg-[#030406] border-b border-white/10 overflow-hidden",children:s.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[s.jsx(Ms,{eyebrow:"Tire suas dúvidas",title:"Perguntas",accent:"frequentes",description:"Tudo o que você precisa saber antes de colocar sua marca nas telas.",className:"mb-16"}),s.jsx("div",{className:"border-t border-white/10",children:Ue.faqs.map((u,m)=>{const p=i===m;return s.jsxs("div",{className:"overflow-hidden border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.025]",children:[s.jsxs("button",{type:"button",onClick:()=>d(m),className:"w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8032D]","aria-expanded":p,children:[s.jsx("span",{className:"text-base sm:text-lg font-bold text-white leading-snug",children:u.question}),s.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 transition-all duration-300 ${p?"rotate-180 border-[#F8032D] text-[#F8032D]":"text-gray-400"}`,children:s.jsx(Fb,{className:"w-4 h-4"})})]}),p&&s.jsx("div",{className:"max-w-3xl pb-7 pr-12 text-sm leading-relaxed text-gray-300 animate-in fade-in duration-200",children:u.answer})]},m)})})]})})},m2=()=>s.jsxs("section",{className:"relative py-28 lg:py-40 bg-[#000000] border-b border-white/10 overflow-hidden",children:[s.jsx("div",{className:"absolute inset-0 bg-indoor-space opacity-30 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-black/70 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-led-grid opacity-30 pointer-events-none"}),s.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#F8032D]/15 via-[#F8032D]/30 to-[#F8032D]/15 blur-[160px] pointer-events-none"}),s.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[s.jsx("div",{className:"mb-6 flex justify-center",children:s.jsx(hn,{size:"sm",glow:!0})}),s.jsx(ko,{align:"center",className:"mb-6",children:"Oportunidade limitada de ponto"}),s.jsxs("h2",{className:"text-[clamp(2.8rem,6vw,6.5rem)] font-black text-white tracking-[-0.055em] leading-[0.94] uppercase mb-7",children:["SUA MARCA PODE SER ",s.jsx("br",{className:"hidden sm:inline"}),s.jsx("span",{className:"text-[#F8032D] text-led-glow",children:"A PRÓXIMA A APARECER."})]}),s.jsx("p",{className:"text-base sm:text-xl text-[#A9ACB3] max-w-2xl mx-auto leading-relaxed mb-10",children:"Coloque sua empresa nos pontos onde Capela do Alto realmente circula. Garanta frequência, visibilidade e resultados reais."}),s.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:s.jsx(js,{id:"cta-final-button",href:"#contato",className:"w-full sm:w-auto sm:px-10 sm:min-h-16",children:"Quero colocar minha marca em destaque"})})]})]}),f2=({selectedPlanName:i,selectedPlanCycle:c})=>{const[d,u]=y.useState({nome:"",empresa:"",plano:"PLANO DESTAQUE (Mais Escolhido)",mensagem:""}),[m,p]=y.useState({});y.useEffect(()=>{i&&u(S=>({...S,plano:i.toUpperCase()==="START"?"PLANO START (05 locais)":"PLANO DESTAQUE (Mais Escolhido)"}))},[i,c]);const v=S=>{const h=S.target.name;u(C=>({...C,[h]:S.target.value})),m[h]&&p(C=>({...C,[h]:void 0}))},x=S=>{S.preventDefault();const h={};if(d.nome.trim()||(h.nome="Informe seu nome."),d.mensagem.trim()||(h.mensagem="Escreva uma mensagem para continuar."),p(h),Object.keys(h).length>0)return;const C=["*CONTATO PELO SITE — VM MÍDIAS*","",`*Nome:* ${d.nome.trim()}`,d.empresa.trim()?`*Empresa:* ${d.empresa.trim()}`:"",`*Interesse:* ${d.plano}${c?` — ${c}`:""}`,`*Mensagem:* ${d.mensagem.trim()}`].filter(Boolean).join(`
`),B=`https://wa.me/${Ue.company.whatsappRaw}?text=${encodeURIComponent(C)}`;window.open(B,"_blank","noopener,noreferrer")},N="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3.5 text-base text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#f40b36] focus:ring-0",j=[{value:"PLANO DESTAQUE (Mais Escolhido)",label:"Destaque",detail:"10 locais"},{value:"PLANO START (05 locais)",label:"Start",detail:"5 locais"},{value:"PAINÉIS DE LED (Sob Medida)",label:"Painel de LED",detail:"sob medida"},{value:"OUTRO / TIRAR DÚVIDAS",label:"Tenho dúvidas",detail:"quero orientação"}];return s.jsx("section",{id:"contato",className:"border-b border-white/10 bg-[#08090d] py-24 lg:py-32",children:s.jsx("div",{className:"mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12",children:s.jsxs("div",{className:"grid gap-14 lg:grid-cols-12 lg:gap-20",children:[s.jsxs("div",{className:"lg:col-span-5",children:[s.jsx(ko,{children:"Contato direto"}),s.jsxs("h2",{className:"brand-section-title !text-[clamp(3.4rem,7vw,7rem)]",children:["Vamos",s.jsx("br",{}),"conversar."]}),s.jsx("p",{className:"mt-6 max-w-md text-base leading-7 text-white/58",children:"Conte o que sua marca precisa. Ao enviar, abriremos o WhatsApp da VM Mídias com a mensagem pronta."}),s.jsxs("div",{className:"mt-10 border-y border-white/10",children:[s.jsxs("a",{href:`https://wa.me/${Ue.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4 border-b border-white/10 py-5",children:[s.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:s.jsx(pn,{className:"h-5 w-5"})}),s.jsxs("span",{className:"flex-1",children:[s.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"WhatsApp comercial"}),s.jsx("span",{className:"mt-1 block font-bold text-white",children:Ue.company.whatsappFormatted})]}),s.jsx(Bh,{className:"h-4 w-4 text-white/35 transition-colors group-hover:text-[#25D366]"})]}),s.jsxs("div",{className:"flex items-center gap-4 py-5",children:[s.jsx("span",{className:"flex h-10 w-10 items-center justify-center border border-white/12 text-[#f40b36]",children:s.jsx(ku,{className:"h-5 w-5"})}),s.jsxs("span",{children:[s.jsx("span",{className:"block text-xs uppercase tracking-[0.16em] text-white/38",children:"Atendimento local"}),s.jsx("span",{className:"mt-1 block font-bold text-white",children:Ue.company.locationShort})]})]})]})]}),s.jsxs("div",{className:"lg:col-span-7 lg:pt-10",children:[s.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#f40b36]",children:"Mensagem rápida"}),s.jsx("h3",{className:"mt-2 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl",children:"Fale direto com nosso time"})]}),s.jsx(pn,{className:"hidden h-8 w-8 sm:block"})]}),s.jsxs("form",{onSubmit:x,noValidate:!0,className:"space-y-7",children:[s.jsxs("div",{className:"grid gap-7 sm:grid-cols-2",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"form-nome",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Seu nome"}),s.jsx("input",{id:"form-nome",name:"nome",type:"text",autoComplete:"name",value:d.nome,onChange:v,placeholder:"Como podemos chamar você?",className:`${N} ${m.nome?"!border-red-500":""}`,"aria-invalid":!!m.nome}),m.nome&&s.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[s.jsx(Gh,{className:"h-3.5 w-3.5"}),m.nome]})]}),s.jsxs("div",{children:[s.jsxs("label",{htmlFor:"form-empresa",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:["Empresa"," ",s.jsx("span",{className:"font-normal normal-case text-white/30"})]}),s.jsx("input",{id:"form-empresa",name:"empresa",type:"text",autoComplete:"organization",value:d.empresa,onChange:v,placeholder:"Nome do seu negócio",className:N})]})]}),s.jsxs("fieldset",{children:[s.jsx("legend",{className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Qual é o seu interesse?"}),s.jsx("div",{className:"mt-3 grid grid-cols-2 gap-2",children:j.map(S=>{const h=d.plano===S.value;return s.jsxs("button",{type:"button",onClick:()=>u(C=>({...C,plano:S.value})),"aria-pressed":h,className:`min-h-16 rounded-md border px-3 py-3 text-left transition-colors ${h?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-white/[0.025] hover:border-white/28"}`,children:[s.jsx("span",{className:`block text-sm font-black ${h?"text-white":"text-white/68"}`,children:S.label}),s.jsx("span",{className:"mt-0.5 block text-[10px] uppercase tracking-wider text-white/32",children:S.detail})]},S.value)})})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"form-mensagem",className:"text-xs font-bold uppercase tracking-[0.14em] text-white/58",children:"Sua mensagem"}),s.jsx("textarea",{id:"form-mensagem",name:"mensagem",rows:4,value:d.mensagem,onChange:v,placeholder:"Conte brevemente o que você quer divulgar...",className:`${N} resize-y ${m.mensagem?"!border-red-500":""}`,"aria-invalid":!!m.mensagem}),m.mensagem&&s.jsxs("p",{className:"mt-2 flex items-center gap-1 text-xs text-red-400",children:[s.jsx(Gh,{className:"h-3.5 w-3.5"}),m.mensagem]})]}),s.jsxs("button",{id:"contact-submit-button",type:"submit",className:"group flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041108] transition-colors hover:bg-[#38e478] sm:w-auto sm:min-w-72",children:[s.jsx(pn,{className:"h-5 w-5"}),"Enviar pelo WhatsApp",s.jsx(Bh,{className:"h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"})]})]})]})]})})})},p2=({onOpenPrivacyModal:i})=>{const c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx("footer",{id:"main-footer",className:"bg-[#0A0A0E] border-t border-[#1C1C26] text-white pt-16 pb-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E1E2A]",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("a",{href:"#inicio",className:"inline-block","aria-label":"VM MÍDIAS",children:s.jsx(hn,{size:"md"})}),s.jsx("p",{className:"text-xs text-[#F8032D] font-extrabold uppercase tracking-widest",children:Ue.company.tagline}),s.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Rede de telas digitais e mídia indoor estratégica em Capela do Alto. Visibilidade constante e frequência que transformam marcas locais em referências."}),s.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[s.jsx("a",{href:Ue.company.instagramUrl,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-[#F8032D] hover:border-[#F8032D]/40 transition-all","aria-label":"Instagram da VM MÍDIAS",children:s.jsx(Ty,{className:"w-4 h-4"})}),s.jsx("a",{href:`https://wa.me/${Ue.company.whatsappRaw}`,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all","aria-label":"WhatsApp da VM MÍDIAS",children:s.jsx(pn,{className:"w-4 h-4"})}),s.jsx("a",{href:`mailto:${Ue.company.email}`,className:"w-9 h-9 rounded-lg bg-[#15151F] border border-[#232330] flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all","aria-label":"E-mail da VM MÍDIAS",children:s.jsx(Vh,{className:"w-4 h-4"})})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Navegação"}),s.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[s.jsx("li",{children:s.jsx("a",{href:"#inicio",className:"hover:text-white transition-colors",children:"Início"})}),s.jsx("li",{children:s.jsx("a",{href:"#onde-estamos",className:"hover:text-white transition-colors",children:"Onde Estamos"})}),s.jsx("li",{children:s.jsx("a",{href:"#como-funciona",className:"hover:text-white transition-colors",children:"Como Funciona"})}),s.jsx("li",{children:s.jsx("a",{href:"#planos",className:"hover:text-white transition-colors",children:"Planos"})}),s.jsx("li",{children:s.jsx("a",{href:"#contato",className:"hover:text-white transition-colors",children:"Contato"})})]})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-300",children:"Presença Local"}),s.jsxs("ul",{className:"space-y-3 text-sm text-gray-400",children:[s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(ku,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsxs("span",{children:[Ue.company.locationShort," — Brasil"]})]}),s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(xy,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsx("span",{children:Ue.company.domain})]}),s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(Vh,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsx("span",{children:Ue.company.email})]}),s.jsxs("li",{className:"flex items-start gap-2.5",children:[s.jsx(pn,{className:"w-4 h-4 text-[#F8032D] shrink-0 mt-0.5"}),s.jsx("span",{children:"Atendimento comercial via WhatsApp"})]})]})]})]}),s.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[s.jsxs("div",{children:["© 2026 ",Ue.company.name,". Todos os direitos reservados."]}),s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("button",{type:"button",onClick:i,className:"text-gray-400 hover:text-white transition-colors underline underline-offset-4",children:"Política de Privacidade (LGPD)"}),s.jsxs("button",{type:"button",onClick:c,className:"inline-flex items-center gap-1 text-gray-400 hover:text-[#F8032D] transition-colors","aria-label":"Voltar ao topo da página",children:[s.jsx("span",{children:"Topo"}),s.jsx(kb,{className:"w-3.5 h-3.5"})]})]})]})]})})},h2=({customMessage:i})=>{const[c,d]=y.useState(!1),u=i||"Olá! Vi o site da VM MÍDIAS e gostaria de saber como colocar minha empresa em destaque nas telas.",m=`https://wa.me/${Ue.company.whatsappRaw}?text=${encodeURIComponent(u)}`;return s.jsxs("div",{id:"floating-whatsapp-container",className:"fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto",children:[c&&s.jsxs("div",{className:"mb-3 max-w-xs bg-[#111116] border border-[#22222E] rounded-xl p-3.5 shadow-2xl shadow-black text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative",children:[s.jsx("button",{type:"button",onClick:()=>d(!1),className:"absolute top-2 right-2 text-gray-400 hover:text-white","aria-label":"Fechar mensagem",children:s.jsx(Ho,{className:"w-3.5 h-3.5"})}),s.jsxs("div",{className:"font-bold text-white mb-1 flex items-center gap-1.5",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Atendimento VM MÍDIAS"]}),s.jsx("p",{className:"text-gray-300",children:"Dúvidas sobre os planos START e DESTAQUE? Fale diretamente conosco pelo WhatsApp."})]}),s.jsxs("a",{id:"floating-whatsapp-button",href:m,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>d(!0),className:"group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400","aria-label":"Falar com a VM MÍDIAS no WhatsApp",children:[s.jsx("span",{className:"absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60"}),s.jsx(pn,{className:"w-7 h-7 transition-transform group-hover:scale-110"}),s.jsx("span",{className:"absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0E]"})]})]})},ft="pt-3 text-base font-black text-white",ju="list-disc space-y-1.5 pl-5 text-white/58",Cv=()=>s.jsxs("div",{className:"space-y-4 text-sm leading-7 text-white/68",children:[s.jsxs("p",{children:["Esta Política explica como a"," ",s.jsx("strong",{className:"text-white",children:Ue.company.legalName})," ","(“VM MÍDIAS”), na qualidade de controladora, trata dados pessoais de visitantes, interessados, clientes e representantes de empresas que usam o site ",Ue.company.domain," e seus canais de atendimento."]}),s.jsx("p",{children:"O tratamento observa a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e os princípios de finalidade, necessidade, transparência, segurança e prevenção."}),s.jsx("h4",{className:ft,children:"1. Dados que podemos coletar"}),s.jsx("p",{children:"Dependendo do canal utilizado, podemos receber:"}),s.jsxs("ul",{className:ju,children:[s.jsx("li",{children:"nome, empresa, telefone/WhatsApp e e-mail;"}),s.jsx("li",{children:"plano, produto ou serviço de interesse e mensagens comerciais;"}),s.jsx("li",{children:"briefing de criação, tipo de peça, objetivo, textos, estilo, prazo, chamada para ação e informações que deverão aparecer na campanha;"}),s.jsx("li",{children:"arquivos enviados para criação de vídeos, como logos, fotos, referências, documentos e vídeos, além de links do Drive, Canva ou Dropbox;"}),s.jsx("li",{children:"protocolo, situação do atendimento e datas de criação e atualização do pedido;"}),s.jsx("li",{children:"dados técnicos essenciais, como registros de acesso e endereço IP, que podem ser processados pela hospedagem e pelos serviços de infraestrutura para segurança e funcionamento."})]}),s.jsx("p",{children:"Não solicitamos senhas, dados bancários ou dados pessoais sensíveis nos formulários. Não inclua esse tipo de informação no briefing ou nos links compartilhados."}),s.jsx("h4",{className:ft,children:"2. Para que usamos os dados"}),s.jsxs("ul",{className:ju,children:[s.jsx("li",{children:"responder contatos, dúvidas e solicitações de orçamento;"}),s.jsx("li",{children:"apresentar planos, propostas e condições comerciais;"}),s.jsx("li",{children:"organizar, criar, revisar, aprovar e programar artes e vídeos contratados;"}),s.jsx("li",{children:"acompanhar o histórico e o andamento de cada solicitação;"}),s.jsx("li",{children:"prevenir abuso, fraude, spam e incidentes de segurança;"}),s.jsx("li",{children:"cumprir contratos e obrigações legais ou regulatórias."})]}),s.jsx("h4",{className:ft,children:"3. Bases legais"}),s.jsx("p",{children:"Conforme o contexto, o tratamento poderá ocorrer com base no consentimento, na execução de contrato ou de procedimentos preliminares solicitados pelo titular, no cumprimento de obrigação legal ou regulatória e no legítimo interesse da VM MÍDIAS, sempre respeitando os direitos e as expectativas do titular."}),s.jsx("h4",{className:ft,children:"4. Armazenamento e compartilhamento"}),s.jsx("p",{children:"Os dados podem ser tratados pela equipe da VM MÍDIAS e por fornecedores necessários à operação, estritamente para as finalidades desta Política, incluindo:"}),s.jsxs("ul",{className:ju,children:[s.jsx("li",{children:"HostGator, responsável pela hospedagem do site;"}),s.jsx("li",{children:"Supabase, utilizado para registrar solicitações e armazenar de forma privada os materiais enviados para produção;"}),s.jsx("li",{children:"n8n, quando utilizado para automatizar o fluxo interno de atendimento;"}),s.jsx("li",{children:"WhatsApp/Meta, quando o visitante decide iniciar atendimento por esse canal;"}),s.jsx("li",{children:"serviços escolhidos pelo cliente para compartilhar arquivos por link, sujeitos às próprias políticas de privacidade."})]}),s.jsx("p",{children:"A VM MÍDIAS não vende nem aluga dados pessoais. Alguns fornecedores podem utilizar infraestrutura localizada fora do Brasil; nesses casos, buscamos utilizar serviços reconhecidos e medidas compatíveis com a legislação aplicável."}),s.jsx("h4",{className:ft,children:"5. Prazo de conservação"}),s.jsx("p",{children:"Mantemos os dados somente pelo tempo necessário para atender a solicitação, executar a relação comercial, preservar o histórico de criação e cumprir obrigações legais. Depois desse período, eles poderão ser eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida por lei."}),s.jsx("h4",{className:ft,children:"6. Cookies, recursos técnicos e links externos"}),s.jsx("p",{children:"O site utiliza recursos técnicos necessários para navegação, segurança e envio dos formulários. Não utilizamos os dados dos formulários para vender perfis de publicidade. Links externos, como Instagram, WhatsApp, Drive, Canva ou Dropbox, passam a seguir as políticas dos respectivos serviços quando acessados."}),s.jsx("h4",{className:ft,children:"7. Segurança"}),s.jsx("p",{children:"Adotamos controles compatíveis com o porte e a natureza da operação para reduzir riscos de acesso não autorizado, alteração, perda ou divulgação indevida. Nenhum sistema é completamente imune a incidentes, mas revisamos acessos e integrações para limitar o tratamento ao necessário."}),s.jsx("h4",{className:ft,children:"8. Direitos do titular"}),s.jsx("p",{children:"Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando aplicável, portabilidade conforme regulamentação, oposição, revogação do consentimento e revisão de decisões exclusivamente automatizadas que afetem seus interesses."}),s.jsx("h4",{className:ft,children:"9. Como falar sobre seus dados"}),s.jsxs("p",{children:["Para exercer direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail"," ",s.jsx("strong",{className:"text-white",children:Ue.company.email})," ou pelo WhatsApp oficial ",Ue.company.whatsappFormatted,". Podemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger os dados envolvidos."]}),s.jsx("h4",{className:ft,children:"10. Atualizações desta Política"}),s.jsx("p",{children:"Esta Política poderá ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão disponíveis nesta página."})]}),v2=({isOpen:i,onClose:c})=>i?s.jsx("div",{id:"privacy-policy-modal",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",children:s.jsxs("div",{className:"relative w-full max-w-3xl max-h-[85vh] bg-[#111116] border border-[#22222E] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto",children:[s.jsx("button",{type:"button",onClick:c,className:"absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A24] transition-colors","aria-label":"Fechar Política de Privacidade",children:s.jsx(Ho,{className:"w-5 h-5"})}),s.jsxs("div",{className:"flex items-center gap-3 mb-6 pb-4 border-b border-[#22222E]",children:[s.jsx("div",{className:"p-2.5 rounded-lg bg-[#F8032D]/10 text-[#F8032D] border border-[#F8032D]/20",children:s.jsx(wv,{className:"w-6 h-6"})}),s.jsxs("div",{children:[s.jsx("h3",{id:"privacy-modal-title",className:"text-xl font-black text-white",children:"Política de Privacidade & LGPD"}),s.jsx("p",{className:"text-xs text-gray-400",children:"Atualizado em 28 de setembro de 2026."})]})]}),s.jsx(Cv,{}),s.jsx("div",{className:"mt-8 pt-4 border-t border-[#22222E] flex justify-end",children:s.jsx("button",{type:"button",onClick:c,className:"px-6 py-2.5 rounded-lg bg-[#F8032D] hover:bg-[#B80024] text-white font-bold text-sm shadow-led-sm transition-all",children:"Entendido e Fechar"})})]})}):null;function g2(){return y.useEffect(()=>{const i=document.title;return document.title="Política de Privacidade | VM MÍDIAS",()=>{document.title=i}},[]),s.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[s.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex h-[76px] max-w-5xl items-center justify-between px-5 sm:px-8",children:[s.jsx("a",{href:"/","aria-label":"Voltar ao site da VM MÍDIAS",children:s.jsx(hn,{size:"sm"})}),s.jsxs("a",{href:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white",children:[s.jsx(Yo,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})}),s.jsx("main",{className:"px-5 py-12 sm:px-8 sm:py-16",children:s.jsxs("article",{className:"brand-panel mx-auto max-w-4xl rounded-2xl p-6 sm:p-10 lg:p-12",children:[s.jsxs("header",{className:"mb-8 flex items-start gap-4 border-b border-white/10 pb-7",children:[s.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f40b36]/25 bg-[#f40b36]/10 text-[#ff3155]",children:s.jsx(wv,{className:"h-6 w-6"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Transparência e LGPD"}),s.jsx("h1",{className:"mt-2 text-3xl font-black tracking-tight sm:text-4xl",children:"Política de Privacidade"}),s.jsx("p",{className:"mt-2 text-xs text-white/40",children:"Atualizada em 29 de setembro de 2026."})]})]}),s.jsx(Cv,{})]})})]})}const x2=`Act like um Diretor Criativo Sênior, Motion Designer, Diretor de Arte, Especialista em Lettering Animado, Branding e Prompt Engineer especializado em criação de publicidade audiovisual para MÍDIA INDOOR e geração de vídeo por IA no Google Flow.

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

Take a deep breath and work on this problem step-by-step.`,b2=`Act like a Senior Advertising Art Director, Creative Director, Indoor Media Specialist, Visual Key Designer, Typography & Lettering Director, Brand Designer and AI Image Prompt Engineer with extensive experience creating high-impact advertising campaigns for digital indoor media, vertical displays, digital signage, retail screens, elevator screens, shopping mall panels, corporate displays, supermarket screens, clinics, gyms, waiting areas, restaurants, stores and high-traffic indoor environments.

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

Take a deep breath and work on this problem step-by-step.`;function Dv(i,c){const d=i==null?void 0:i.trim();if(!d)throw new Error(`Configuração do Supabase ausente. Defina ${c} no arquivo .env.`);return d}const ea=Dv("https://dtmoboiwgqaphlthoexe.supabase.co","VITE_SUPABASE_URL"),ua=Dv("sb_publishable_QsbWeq7SpeQo-5etkC4noA_67efJh8M","VITE_SUPABASE_PUBLISHABLE_KEY"),Xu="video-request-assets",zs="business-assets",Us="vm-admin-supabase-session",y2=Xu,_v=zs,Qh="vm-manual-news-refresh-v1";function Mv(i){const c=i.lastIndexOf("."),d=c>=0?i.slice(c).toLowerCase():"";return`${(c>=0?i.slice(0,c):i).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,70)||"arquivo"}${d.replace(/[^a-z0-9.]/g,"")}`}function Qo(i){return i.split("/").map(encodeURIComponent).join("/")}async function N2(i,c,d){const u=`solicitacoes/${d}`,m=c.map(async(p,v)=>{const x=`${u}/${i}/${String(v+1).padStart(2,"0")}-${Mv(p.name)}`,N=await fetch(`${ea}/storage/v1/object/${Xu}/${Qo(x)}`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${ua}`,"Content-Type":p.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:p});if(!N.ok){const j=await N.text();throw console.error("Falha ao enviar material do vídeo:",j),new Error(`Não foi possível enviar o arquivo “${p.name}”. Verifique o formato e tente novamente.`)}return{path:x,name:p.name,size:p.size,mime_type:p.type||"application/octet-stream"}});return Promise.all(m)}async function zv(i,c,d=0){const u=c.map(async(m,p)=>{const v=`negocios/${i}/${String(d+p+1).padStart(2,"0")}-${crypto.randomUUID().slice(0,8)}-${Mv(m.name)}`;if(!(await fetch(`${ea}/storage/v1/object/${zs}/${Qo(v)}`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${ua}`,"Content-Type":m.type||"application/octet-stream","cache-control":"3600","x-upsert":"false"},body:m})).ok)throw new Error(`Não foi possível enviar “${m.name}”.`);return{path:v,name:m.name,size:m.size,mime_type:m.type||"application/octet-stream"}});return Promise.all(u)}function In(i){return`${ea}/storage/v1/object/public/${zs}/${Qo(i)}`}async function E2(i){if(!(await fetch(`${ea}/rest/v1/rpc/create_business_secure`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${ua}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:i.id,p_name:i.name,p_whatsapp:i.whatsapp,p_instagram:i.instagram,p_address:i.address,p_segment:i.segment,p_description:i.description,p_assets:i.assets,p_consent:i.consent})})).ok)throw new Error("Não foi possível cadastrar o negócio agora.")}async function Uv(){const i=await fetch(`${ea}/rest/v1/rpc/list_businesses_public`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${ua}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!i.ok)throw new Error("Não foi possível carregar os negócios. Aplique a nova migração no Supabase.");return await i.json()}async function S2(i,c,d){const u=await fetch(`${ea}/rest/v1/rpc/update_business_secure`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${ua}`,"Content-Type":"application/json"},body:JSON.stringify({p_business_id:i,p_name:c.name,p_whatsapp:c.whatsapp,p_instagram:c.instagram,p_address:c.address,p_segment:c.segment,p_description:c.description,p_new_assets:d})});if(!u.ok){const m=await u.text();throw/LIMITE_IMAGENS/i.test(m)?new Error("O negócio pode possuir no máximo 10 imagens."):new Error("Não foi possível atualizar as informações do negócio.")}}async function A2(i){const c=await fetch(`${ea}/rest/v1/rpc/create_video_request_secure`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${ua}`,"Content-Type":"application/json"},body:JSON.stringify({p_id:i.id,p_protocol:i.protocol,p_business_id:i.business_id,p_campaign_objective:i.campaign_objective,p_objective_other:i.objective_other,p_video_idea:i.video_idea,p_uploaded_assets:i.uploaded_assets,p_consent:i.consent})});if(!c.ok){const d=await c.text();throw console.error("Falha ao registrar solicitação de vídeo:",d),new Error("Não foi possível registrar sua solicitação agora.")}}function qv(){try{const i=localStorage.getItem(Us);if(!i)return null;const c=JSON.parse(i);return!c.access_token||!c.expires_at?null:c}catch{return null}}function Bo(){localStorage.removeItem(Us)}async function Zu(i){const c=await fetch(`${ea}/rest/v1/rpc/is_vm_admin`,{method:"POST",headers:{apikey:ua,Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:"{}",cache:"no-store"});if(!c.ok)throw c.status===404?new Error("A proteção administrativa ainda não foi instalada no Supabase."):new Error("Não foi possível verificar a permissão administrativa.");if(await c.json()!==!0)throw new Error("Este usuário não possui acesso administrativo.")}async function Lv(i,c){const d=await fetch(`${ea}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:ua,"Content-Type":"application/json"},body:JSON.stringify({email:i,password:c})});if(!d.ok){let p="";try{const v=await d.json();p=String((v==null?void 0:v.msg)||(v==null?void 0:v.message)||(v==null?void 0:v.error_description)||"")}catch{}throw/email not confirmed/i.test(p)?new Error("Este usuário ainda não confirmou o e-mail no Supabase."):new Error("E-mail ou senha inválidos.")}const u=await d.json(),m={access_token:u.access_token,refresh_token:u.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(u.expires_in||3600),user:u.user};return await Zu(m.access_token),localStorage.setItem(Us,JSON.stringify(m)),m}async function O2(i){const c=await fetch(`${ea}/auth/v1/token?grant_type=refresh_token`,{method:"POST",headers:{apikey:ua,"Content-Type":"application/json"},body:JSON.stringify({refresh_token:i.refresh_token})});if(!c.ok)throw Bo(),new Error("Sua sessão expirou. Entre novamente.");const d=await c.json(),u={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Math.floor(Date.now()/1e3)+Number(d.expires_in||3600),user:d.user};return await Zu(u.access_token),localStorage.setItem(Us,JSON.stringify(u)),u}async function Os(i){return i.expires_at>Math.floor(Date.now()/1e3)+60?(await Zu(i.access_token),i):O2(i)}function Gn(i){return{apikey:ua,Authorization:`Bearer ${i}`}}async function T2(i){const c=await fetch(`${ea}/rest/v1/video_requests?select=*&order=created_at.desc`,{headers:Gn(i),cache:"no-store"});if(!c.ok)throw c.status===401?new Error("Sua sessão expirou. Entre novamente."):new Error("Não foi possível carregar as solicitações. Confira as permissões do Supabase.");return await c.json()}async function j2(i){const c=await fetch(`${ea}/rest/v1/businesses?select=id,name,whatsapp,instagram,address,segment,description,assets,consent,created_at,updated_at&order=name.asc`,{headers:Gn(i),cache:"no-store"});if(!c.ok)throw new Error("Não foi possível carregar os negócios no painel.");return await c.json()}function w2(i=new Date){const c=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(i).filter(m=>m.type!=="literal").map(m=>[m.type,Number(m.value)])),d=Date.UTC(c.year,c.month-1,c.day);let u=d;for(let m=0;m<2;m+=1){const p=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(new Date(u)).filter(x=>x.type!=="literal").map(x=>[x.type,Number(x.value)])),v=Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second);u=d-(v-Math.floor(u/1e3)*1e3)}return new Date(u).toISOString()}async function R2(i){const c=w2(),d=await fetch(`${ea}/rest/v1/news_articles?select=*&published_at=gte.${encodeURIComponent(c)}&order=published_at.desc`,{headers:Gn(i),cache:"no-store"});if(!d.ok)throw d.status===404?new Error("O painel de notícias ainda não foi instalado no Supabase. Execute a migração 202610190001_news_moderation_queue.sql."):new Error("Não foi possível carregar a fila de notícias.");return await d.json()}async function Hv(i,c,d){const u=await fetch(`${ea}/rest/v1/rpc/moderate_news_article_admin`,{method:"POST",headers:{...Gn(i),"Content-Type":"application/json"},body:JSON.stringify({p_article_id:c,p_decision:d})});if(!u.ok)throw u.status===401?new Error("Sua sessão expirou. Entre novamente."):u.status===404?new Error("A aprovação de notícias ainda não foi instalada no Supabase."):new Error("Não foi possível atualizar esta notícia.")}async function C2(i,c){await Hv(i,c,"approved")}async function D2(i,c,d){const u=await fetch(`${ea}/rest/v1/rpc/remove_business_asset_admin`,{method:"POST",headers:{...Gn(i),"Content-Type":"application/json"},body:JSON.stringify({p_business_id:c,p_asset_path:d})});if(!u.ok)throw u.status===401?new Error("Sua sessão expirou. Entre novamente."):u.status===404?new Error("A exclusão ainda não foi ativada no Supabase. Execute a migração 202610060001_delete_business_assets_admin.sql."):new Error("Não foi possível excluir esta imagem do negócio.");const m=await fetch(`${ea}/storage/v1/object/${zs}/${Qo(d)}`,{method:"DELETE",headers:Gn(i)});!m.ok&&m.status!==404&&console.warn("A imagem saiu do cadastro, mas o arquivo não pôde ser removido do Storage.")}async function Bv(i,c,d=3600){const u=await fetch(`${ea}/storage/v1/object/sign/${Xu}/${Qo(c)}`,{method:"POST",headers:{...Gn(i),"Content-Type":"application/json"},body:JSON.stringify({expiresIn:d})});if(!u.ok)throw new Error("Não foi possível abrir este arquivo.");const m=await u.json(),p=m.signedURL||m.signedUrl;if(!p)throw new Error("O Supabase não retornou o link do arquivo.");return p.startsWith("http")?p:`${ea}/storage/v1${p}`}const Gv={institucional:"Publicidade institucional da marca",produto_servico:"Divulgar determinado produto ou serviço",promocao:"Promoção exclusiva e/ou inédita",fortalecer_marca:"Fortalecer a marca",visita_estabelecimento:"Incentivar a visita no estabelecimento",outro:"Outro"};function Xh(i){return i==null||i===""||Array.isArray(i)&&i.length===0||typeof i=="object"&&i!==null&&Object.keys(i).length===0}function ws(i){return Array.isArray(i)?i.map(ws).filter(c=>!Xh(c)):i&&typeof i=="object"?Object.fromEntries(Object.entries(i).filter(([,c])=>!Xh(c)).map(([c,d])=>[c,ws(d)])):i}function _2(i){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(i))}function M2(i,c,d){return ws({negocio:{id:i.id,nome:i.name,whatsapp:i.whatsapp,instagram:i.instagram,endereco:i.address,segmento:i.segment,descricao:i.description,imagens:i.assets.map(u=>({nome:u.name,caminho_bucket:`${_v}/${u.path}`,url:In(u.path),tipo:u.mime_type})),cadastrado_em:i.created_at},solicitacao_video:{id:c.id,protocolo:c.protocol,objetivo:Gv[c.campaign_objective||""]||c.campaign_objective,outro_objetivo:c.objective_other,descricao_do_video:c.video_idea,imagens_adicionais:c.uploaded_assets.map(u=>({nome:u.name,caminho_bucket:`${y2}/${u.path}`,url:d[u.path],url_valida_por:"7 dias",tipo:u.mime_type})),formato:"Vertical 9:16",duracao_segundos:c.duration_seconds,status:c.status,solicitado_em:c.created_at},prompt_para_ia:x2.trim()})}function z2(i){return ws({negocio:{id:i.id,nome:i.name,whatsapp:i.whatsapp,instagram:i.instagram,endereco:i.address,segmento:i.segment,descricao:i.description,imagens:i.assets.map(c=>({nome:c.name,caminho_bucket:`${_v}/${c.path}`,url:In(c.path),tipo:c.mime_type})),cadastrado_em:i.created_at},prompt_para_visual_key:b2.trim()})}function Zh(){const[i,c]=y.useState(()=>qv()),[d,u]=y.useState([]),[m,p]=y.useState([]),[v,x]=y.useState(""),[N,j]=y.useState(""),[S,h]=y.useState(!!i),[C,B]=y.useState(""),Y=async U=>{h(!0),B("");try{const k=await Os(U);c(k);const[V,de]=await Promise.all([j2(k.access_token),T2(k.access_token)]);u(V),p(de)}catch(k){const V=k instanceof Error?k.message:"Não foi possível carregar o painel.";B(V),(V.includes("sessão")||V.includes("administrativ")||V.includes("permissão"))&&(Bo(),c(null))}finally{h(!1)}};y.useEffect(()=>{document.title="Painel administrativo | VM MÍDIAS",i&&Y(i)},[]);const L=y.useMemo(()=>{const U=d.map(V=>({business:V,requests:m.filter(de=>de.business_id===V.id)})),k=N.trim().toLocaleLowerCase("pt-BR");return k?U.filter(({business:V})=>`${V.name} ${V.segment}`.toLocaleLowerCase("pt-BR").includes(k)):U},[d,N,m]),H=L.find(U=>U.business.id===v)||null;return i?s.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[s.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[s.jsxs("div",{className:"flex items-center gap-5",children:[s.jsx("a",{href:"/",children:s.jsx(hn,{size:"sm"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),s.jsx("h1",{className:"font-black",children:"Negócios e solicitações"})]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("a",{href:"/admin/noticias","aria-label":"Aprovação de notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Tv,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Notícias"})]}),s.jsxs("button",{onClick:()=>void Y(i),disabled:S,className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(jv,{className:`h-4 w-4 ${S?"animate-spin":""}`}),s.jsx("span",{className:"hidden sm:inline",children:"Atualizar"})]}),s.jsxs("button",{onClick:()=>{Bo(),c(null)},className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Ov,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Sair"})]})]})]})}),s.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[s.jsxs("section",{className:"flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between",children:[s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Painel de clientes"}),s.jsx("h2",{className:"mt-2 text-3xl font-black sm:text-5xl",children:"Um card para cada negócio."})]}),s.jsxs("label",{className:"relative block w-full max-w-md",children:[s.jsx(Qu,{className:"absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"}),s.jsx("input",{value:N,onChange:U=>j(U.target.value),className:"h-12 w-full rounded-xl border border-white/12 bg-[#0c0d11] pl-11 pr-4 outline-none focus:border-[#f40b36]",placeholder:"Buscar negócio"})]})]}),C&&s.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:C}),S&&!d.length?s.jsx("div",{className:"flex min-h-64 items-center justify-center",children:s.jsx(Aa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):H?s.jsx(q2,{group:H,session:i,onBack:()=>x(""),onBusinessUpdated:U=>u(k=>k.map(V=>V.id===U.id?U:V))}):L.length?s.jsx("section",{className:"mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",children:L.map(U=>s.jsx(U2,{group:U,onOpen:()=>x(U.business.id)},U.business.id))}):s.jsx("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:"Nenhum negócio cadastrado."})]})]}):s.jsx(Vv,{loading:S,error:C,onLogin:async(U,k)=>{h(!0),B("");try{const V=await Lv(U,k);c(V),await Y(V)}catch(V){B(V instanceof Error?V.message:"Não foi possível entrar.")}finally{h(!1)}}})}function U2({group:i,onOpen:c}){const d=i.business.assets[0];return s.jsxs("button",{onClick:c,className:"group rounded-2xl border border-white/12 bg-[#0c0e12] p-5 text-left transition hover:-translate-y-1 hover:border-[#f40b36]/55",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:d?s.jsx("img",{src:In(d.path),alt:"",className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-7 w-7 text-white/30"})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("h3",{className:"truncate text-xl font-black",children:i.business.name}),s.jsx("p",{className:"mt-1 truncate text-sm text-white/45",children:i.business.segment})]}),s.jsx(Ev,{className:"h-5 w-5 text-white/30 group-hover:text-[#ff3155]"})]}),s.jsx("div",{className:"mt-5 border-t border-white/10 pt-4",children:s.jsxs("span",{className:"rounded-full border border-[#f40b36]/25 bg-[#f40b36]/10 px-3 py-1.5 text-xs font-black text-[#ff6a82]",children:[i.requests.length," ",i.requests.length===1?"solicitação":"solicitações"]})})]})}function q2({group:i,session:c,onBack:d,onBusinessUpdated:u}){const m=i.business,[p,v]=y.useState(!1),[x,N]=y.useState(""),[j,S]=y.useState(""),[h,C]=y.useState(""),B=async()=>{N("");try{await navigator.clipboard.writeText(JSON.stringify(z2(m),null,2)),v(!0),window.setTimeout(()=>v(!1),1800)}catch{N("Não foi possível copiar o JSON para a área de transferência.")}},Y=async L=>{if(window.confirm(`Deseja realmente excluir a imagem “${L.name}”? Esta ação não poderá ser desfeita.`)){S(L.path),C("");try{await D2(c.access_token,m.id,L.path),u({...m,assets:m.assets.filter(U=>U.path!==L.path),updated_at:new Date().toISOString()})}catch(U){C(U instanceof Error?U.message:"Não foi possível excluir esta imagem.")}finally{S("")}}};return s.jsxs("section",{className:"mt-7",children:[s.jsxs("button",{onClick:d,className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[s.jsx(Yo,{className:"h-4 w-4"}),"Todos os negócios"]}),s.jsxs("div",{className:"mt-5 rounded-2xl border border-white/12 bg-[#0c0e12] p-5 sm:p-7",children:[s.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[s.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center",children:[s.jsx("div",{className:"flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30",children:m.assets[0]?s.jsx("img",{src:In(m.assets[0].path),alt:"",className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-8 w-8 text-white/30"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.16em] text-[#ff3155]",children:"Negócio"}),s.jsx("h2",{className:"mt-1 text-3xl font-black sm:text-4xl",children:m.name}),s.jsx("p",{className:"mt-2 text-sm text-white/50",children:[m.segment,m.whatsapp,m.instagram,m.address].filter(Boolean).join(" · ")})]})]}),s.jsxs("button",{type:"button",onClick:()=>void B(),className:"inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-5 text-center text-xs font-black uppercase leading-tight tracking-[0.08em] transition hover:bg-[#ff3155]",children:[p?s.jsx(_s,{className:"h-4 w-4"}):s.jsx(Sv,{className:"h-4 w-4"}),p?"JSON copiado":"Copiar JSON para Visual Key"]})]}),x&&s.jsx("p",{className:"mt-4 text-sm text-red-300",children:x}),m.description&&s.jsx("p",{className:"mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60",children:m.description}),s.jsx(Iv,{assets:m.assets,publicAssets:!0,deletingPath:j,onDelete:L=>void Y(L)}),h&&s.jsx("p",{className:"mt-4 text-sm text-red-300",children:h})]}),s.jsx("h3",{className:"mt-8 text-2xl font-black",children:"Solicitações deste negócio"}),i.requests.length?s.jsx("div",{className:"mt-5 grid gap-5 xl:grid-cols-2",children:i.requests.map(L=>s.jsx(L2,{business:m,request:L,session:c},L.id))}):s.jsx("div",{className:"mt-5 rounded-xl border border-dashed border-white/15 p-12 text-center text-white/45",children:"Este negócio ainda não solicitou vídeos."})]})}function L2({business:i,request:c,session:d}){const[u,m]=y.useState(!1),[p,v]=y.useState(!1),[x,N]=y.useState(""),j=async()=>{v(!0),N("");try{const S=await Promise.all(c.uploaded_assets.map(async h=>[h.path,await Bv(d.access_token,h.path,604800)]));await navigator.clipboard.writeText(JSON.stringify(M2(i,c,Object.fromEntries(S)),null,2)),m(!0),window.setTimeout(()=>m(!1),1800)}catch(S){N(S instanceof Error?S.message:"Não foi possível gerar o JSON.")}finally{v(!1)}};return s.jsxs("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:[s.jsxs("header",{className:"flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-start sm:justify-between",children:[s.jsxs("div",{children:[s.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase text-white/60",children:c.status}),s.jsx("h4",{className:"mt-4 text-xl font-black",children:Gv[c.campaign_objective||""]||"Novo vídeo"}),s.jsxs("p",{className:"mt-2 text-xs text-white/40",children:[c.protocol," · ",_2(c.created_at)]})]}),s.jsxs("button",{onClick:()=>void j(),disabled:p,className:"inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#f40b36] px-4 text-xs font-black uppercase tracking-[0.08em] disabled:opacity-60",children:[p?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):u?s.jsx(_s,{className:"h-4 w-4"}):s.jsx(Sv,{className:"h-4 w-4"}),p?"Gerando URLs":u?"JSON copiado":"Copiar JSON"]})]}),s.jsxs("div",{className:"p-5",children:[c.video_idea&&s.jsx("p",{className:"text-sm leading-7 text-white/65",children:c.video_idea}),c.objective_other&&s.jsxs("p",{className:"mt-3 text-sm text-white/55",children:["Outro objetivo: ",c.objective_other]}),c.uploaded_assets.length>0&&s.jsx(Iv,{assets:c.uploaded_assets,accessToken:d.access_token}),x&&s.jsx("p",{className:"mt-4 text-xs text-red-300",children:x})]})]})}function Iv({assets:i,accessToken:c,publicAssets:d=!1,deletingPath:u="",onDelete:m}){const[p,v]=y.useState(()=>d?Object.fromEntries(i.map(x=>[x.path,In(x.path)])):{});return y.useEffect(()=>{d||!c||Promise.all(i.map(async x=>[x.path,await Bv(c,x.path,3600)])).then(x=>v(Object.fromEntries(x))).catch(()=>{})},[c,i,d]),s.jsx("div",{className:"mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",children:i.map(x=>{const N=p[x.path];return s.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/25 p-2",children:[x.mime_type.startsWith("image/")&&N?s.jsx("img",{src:N,alt:x.name,className:"h-24 w-full rounded-lg object-cover"}):s.jsx("div",{className:"flex h-24 items-center justify-center",children:s.jsx(vy,{className:"h-7 w-7 text-white/30"})}),s.jsx("span",{className:"mt-2 block truncate text-[11px] font-bold text-white/70",children:x.name}),N&&s.jsxs("a",{href:N,download:x.name,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-[10px] font-black uppercase text-white/70 hover:border-[#f40b36]/55",children:[s.jsx(uy,{className:"h-3.5 w-3.5"}),"Baixar"]}),m&&s.jsxs("button",{type:"button",onClick:()=>m(x),disabled:!!u,className:"mt-2 inline-flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-red-400/25 bg-red-400/10 text-[10px] font-black uppercase text-red-200 transition hover:border-red-400/60 hover:bg-red-400/15 disabled:cursor-wait disabled:opacity-50",children:[u===x.path?s.jsx(Aa,{className:"h-3.5 w-3.5 animate-spin"}):s.jsx(Rv,{className:"h-3.5 w-3.5"}),u===x.path?"Excluindo":"Excluir imagem"]})]},x.path)})})}function Vv({onLogin:i,loading:c,error:d}){const[u,m]=y.useState(""),[p,v]=y.useState(""),x=N=>{N.preventDefault(),i(u.trim(),p)};return s.jsxs("div",{className:"min-h-screen bg-[#050609] px-5 py-10 text-white",children:[s.jsxs("a",{href:"/",className:"mx-auto flex max-w-6xl items-center gap-2 text-xs font-bold text-white/55",children:[s.jsx(Yo,{className:"h-4 w-4"}),"Voltar ao site"]}),s.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-80px)] max-w-md items-center",children:s.jsxs("form",{onSubmit:x,className:"w-full rounded-2xl border border-white/12 bg-[#0d0f13] p-6 sm:p-9",children:[s.jsx(hn,{size:"md"}),s.jsx(Ih,{className:"mt-8 h-10 w-10 text-[#ff3155]"}),s.jsx("p",{className:"mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Acesso restrito"}),s.jsx("h1",{className:"mt-2 text-3xl font-black",children:"Painel administrativo"}),s.jsxs("label",{className:"mt-7 block text-sm font-bold",children:["E-mail",s.jsx("input",{required:!0,type:"email",value:u,onChange:N=>m(N.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),s.jsxs("label",{className:"mt-5 block text-sm font-bold",children:["Senha",s.jsx("input",{required:!0,type:"password",value:p,onChange:N=>v(N.target.value),className:"mt-2 h-12 w-full rounded-lg border border-white/12 bg-black/25 px-4 outline-none focus:border-[#f40b36]"})]}),d&&s.jsx("p",{className:"mt-5 rounded-lg border border-red-400/25 bg-red-400/10 p-3 text-sm text-red-100",children:d}),s.jsxs("button",{disabled:c,className:"brand-button brand-button-primary mt-6 w-full",children:[c?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):s.jsx(Ih,{className:"h-4 w-4"}),"Entrar no painel"]})]})})]})}const Kh={pending:"Avaliar para Stories",approved:"Fila de Stories",published:"Publicadas nos Stories",rejected:"Fora dos Stories"},H2={waiting_approval:"Aguardando aprovação",queued:"Na fila",publishing:"Publicando agora",published:"Publicada no Instagram",failed:"Tentará novamente",needs_review:"Requer conferência",skipped:"Fora da fila"};function Lo(i){return i.moderation_status==="pending"?"pending":i.moderation_status==="rejected"?"rejected":i.story_status==="published"?"published":"approved"}function B2(i){return i?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Sao_Paulo"}).format(new Date(i)):""}const G2=/(?:logo-30-anos|share-30-anos|favicon|spacer|pixel|placeholder|sem[-_ ]imagem|\/logo(?:[-_.\/]|$)|lh3\.googleusercontent\.com\/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc)/i;function _u(i){return i.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function Ph(i){const c={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'};let d=String(i||"").replace(/<!\[CDATA\[|\]\]>/gi,"");for(let u=0;u<3;u+=1){const m=d;if(d=d.replace(/&#(x?[0-9a-f]+);/gi,(p,v)=>{const x=Number.parseInt(v.replace(/^x/i,""),/^x/i.test(v)?16:10);return Number.isFinite(x)&&x<=1114111?String.fromCodePoint(x):p}).replace(/&(amp|apos|gt|lt|nbsp|quot);/gi,(p,v)=>c[v.toLowerCase()]),d===m)break}return d.replace(/\s+/g," ").trim()}function I2(i){return{...i,title:Ph(i.title),summary:Ph(i.summary)||null}}function V2(i){const c=_u(i.title),d=_u(`${i.title} ${i.summary||""}`),u=/\b(jornal|telejornal|eptv|sptv|bom dia|jornal hoje|jornal nacional|jornal do almoco|jornal anhanguera|link vanguarda|jac\s?1|mg\s?1|rj\s?1|df\s?1|globonews)\b/;return!(/^videos?\s*:/.test(c)||/\b(assista|acompanhe|veja)\b/.test(d)&&/\b(videos?|jornal|edicao)\b/.test(d)||u.test(d)&&/\b(ao vivo|esta no ar|agora no ar|integra|edicao|segunda|terca|quarta|quinta|sexta|sabado|domingo)\b/.test(d)||/^ao vivo\s*:/.test(c))}function Ku(i){return/^https?:\/\//i.test(i.image_url||"")&&!G2.test(i.image_url||"")}function Y2(i){const c=Date.now()-1728e5,d=new Set,u=new Map,m=[];for(const p of i){if(Lo(p)!=="pending"||!Ku(p)||!V2(p))continue;const v=Date.parse(p.published_at);if(Number.isFinite(v)&&v<c)continue;const x=_u(p.title).trim();if(!x||d.has(x))continue;const N=u.get(p.source_name)||0;if(!(N>=3)&&(d.add(x),u.set(p.source_name,N+1),m.push(p),m.length>=24))break}return m}function k2(){const[i,c]=y.useState(()=>qv()),[d,u]=y.useState([]),[m,p]=y.useState("pending"),[v,x]=y.useState(!!i),[N,j]=y.useState(!1),[S,h]=y.useState(""),[C,B]=y.useState(""),[Y,L]=y.useState(""),[H,U]=y.useState(""),[k,V]=y.useState(""),de=async W=>{x(!0),V("");try{const re=await Os(W);c(re);const oe=await R2(re.access_token),Ve=oe.find(Pe=>Pe.external_id===Qh);B((Ve==null?void 0:Ve.id)||""),u(oe.filter(Pe=>Pe.external_id!==Qh).map(I2))}catch(re){const oe=re instanceof Error?re.message:"Não foi possível carregar as notícias.";V(oe),(oe.includes("sessão")||oe.includes("administrativ")||oe.includes("permissão"))&&(Bo(),c(null))}finally{x(!1)}};y.useEffect(()=>{document.title="Stories de notícias | VM MÍDIAS",i&&de(i)},[]),y.useEffect(()=>{if(!i)return;const W=window.setInterval(()=>void de(i),6e4);return()=>window.clearInterval(W)},[i==null?void 0:i.access_token]);const ce=y.useMemo(()=>Y2(d),[d]),Ee=y.useMemo(()=>{const W=d.reduce((re,oe)=>(re[Lo(oe)]+=1,re),{pending:0,approved:0,published:0,rejected:0});return W.pending=ce.length,W},[d,ce]),ee=y.useMemo(()=>{if(m==="pending")return ce;const W=d.filter(re=>Lo(re)===m);return m!=="approved"?W:W.sort((re,oe)=>new Date(re.queued_at||re.published_at).getTime()-new Date(oe.queued_at||oe.published_at).getTime())},[d,ce,m]),$=async(W,re)=>{if(i){L(W.id),U(""),h(""),V("");try{const oe=await Os(i);c(oe),await Hv(oe.access_token,W.id,re);const Ve=new Date().toISOString();u(Pe=>Pe.map(me=>me.id===W.id?{...me,moderation_status:re,story_status:re==="approved"?me.story_status==="published"?"published":"queued":"skipped",reviewed_at:Ve,queued_at:re==="approved"?Ve:me.queued_at,last_story_error:re==="approved"?null:me.last_story_error,updated_at:Ve}:me)),re==="rejected"&&Lo(W)==="approved"&&U("Notícia retirada da fila de Stories.")}catch(oe){V(oe instanceof Error?oe.message:"Não foi possível atualizar esta notícia.")}finally{L("")}}},Ie=async()=>{if(!(!i||!C||N)){j(!0),h(""),U(""),V("");try{const W=await Os(i);c(W),await C2(W.access_token,C),p("pending"),h("Busca solicitada. As novas notícias aparecerão automaticamente aqui em até 5 minutos.")}catch(W){V(W instanceof Error?W.message:"Não foi possível buscar mais notícias agora.")}finally{j(!1)}}};return i?s.jsxs("div",{className:"min-h-screen bg-[#050609] text-white",children:[s.jsx("header",{className:"sticky top-0 z-40 border-b border-white/10 bg-[#050609]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8",children:[s.jsxs("div",{className:"flex min-w-0 items-center gap-4 sm:gap-5",children:[s.jsx("a",{href:"/","aria-label":"Voltar ao site",children:s.jsx(hn,{size:"sm"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-[#ff3155]",children:"Administração"}),s.jsx("h1",{className:"truncate font-black",children:"Stories de notícias"})]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("a",{href:"/admin/solicitacoes","aria-label":"Negócios e solicitações",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(Hl,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Negócios"})]}),s.jsxs("button",{onClick:()=>void de(i),disabled:v,"aria-label":"Atualizar notícias",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:[s.jsx(jv,{className:`h-4 w-4 ${v?"animate-spin":""}`}),s.jsx("span",{className:"hidden md:inline",children:"Atualizar"})]}),s.jsx("button",{onClick:()=>{Bo(),c(null)},"aria-label":"Sair",className:"inline-flex h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-bold text-white/70",children:s.jsx(Ov,{className:"h-4 w-4"})})]})]})}),s.jsxs("main",{className:"mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12",children:[s.jsxs("section",{className:"border-b border-white/10 pb-8",children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Fila editorial"}),s.jsx("h2",{className:"mt-2 max-w-3xl text-3xl font-black sm:text-5xl",children:"Você decide o que vai para os Stories."}),s.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base",children:"A TV e o site recebem automaticamente as notícias úteis. Aqui você avalia uma seleção menor para os Stories. A prévia 9:16 mostra o corte real da imagem antes da aprovação."}),s.jsxs("div",{className:"mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center",children:[s.jsxs("button",{type:"button",onClick:()=>void Ie(),disabled:N||v||!C,className:"inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] px-5 text-sm font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:cursor-wait disabled:opacity-55",children:[N?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):s.jsx(Qu,{className:"h-4 w-4"}),N?"Solicitando busca...":"Buscar mais notícias"]}),s.jsx("span",{className:"text-xs leading-5 text-white/45",children:"Busca fontes adicionais. Somente matérias de hoje e com menos de 24 horas entram na lista."})]}),S&&s.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:S}),H&&s.jsx("p",{className:"mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",role:"status",children:H})]}),s.jsx("nav",{className:"mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4","aria-label":"Filtrar notícias",children:Object.keys(Kh).map(W=>s.jsxs("button",{onClick:()=>p(W),className:`rounded-xl border px-4 py-3 text-left transition ${m===W?"border-[#f40b36] bg-[#f40b36]/12":"border-white/10 bg-[#0c0e12] hover:border-white/20"}`,children:[s.jsx("span",{className:"block text-2xl font-black",children:Ee[W]}),s.jsx("span",{className:"mt-1 block text-xs font-bold text-white/55",children:Kh[W]})]},W))}),m==="rejected"&&s.jsxs("p",{className:"mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0e12] px-4 py-3 text-xs leading-5 text-white/55",children:[s.jsx(Av,{className:"h-4 w-4 shrink-0 text-[#ff3155]"}),"As notícias recusadas são excluídas definitivamente do banco quando o dia termina, considerando o horário de São Paulo."]}),k&&s.jsx("p",{className:"mt-6 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:k}),v&&!d.length?s.jsx("div",{className:"flex min-h-72 items-center justify-center",children:s.jsx(Aa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):ee.length?s.jsx("section",{className:"mt-6 grid gap-5 xl:grid-cols-2",children:ee.map((W,re)=>s.jsx(Q2,{article:W,queuePosition:m==="approved"?re+1:void 0,working:Y===W.id,onApprove:()=>void $(W,"approved"),onReject:()=>void $(W,"rejected")},W.id))}):s.jsxs("div",{className:"mt-6 rounded-2xl border border-dashed border-white/15 py-20 text-center text-white/45",children:[s.jsx(Tv,{className:"mx-auto mb-4 h-9 w-9"}),"Nenhuma notícia nesta etapa."]})]})]}):s.jsx(Vv,{loading:v,error:k,onLogin:async(W,re)=>{x(!0),V("");try{const oe=await Lv(W,re);c(oe),await de(oe)}catch(oe){V(oe instanceof Error?oe.message:"Não foi possível entrar.")}finally{x(!1)}}})}function Q2({article:i,queuePosition:c,working:d,onApprove:u,onReject:m}){const p=Lo(i),v=Ku(i);return s.jsx("article",{className:"overflow-hidden rounded-2xl border border-white/12 bg-[#0c0e12]",children:s.jsxs("div",{className:"grid md:grid-cols-[220px_minmax(0,1fr)]",children:[s.jsx("div",{className:"border-b border-white/10 bg-black/30 p-4 md:border-b-0 md:border-r",children:s.jsx(X2,{article:i})}),s.jsxs("div",{className:"p-5 sm:p-6",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em]",children:[s.jsx("span",{className:"rounded-full bg-[#f40b36]/12 px-2.5 py-1 text-[#ff5c78]",children:i.category}),s.jsx("span",{className:"text-white/40",children:i.source_name}),c&&s.jsxs("span",{className:"ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/65",children:[s.jsx(Av,{className:"h-3 w-3"})," #",c," da fila · até ",c,"h"]})]}),s.jsx("h3",{className:"mt-4 text-xl font-black leading-tight sm:text-2xl",children:i.title}),i.summary&&s.jsx("p",{className:"mt-3 line-clamp-3 text-sm leading-6 text-white/55",children:i.summary}),s.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40",children:[s.jsx("span",{children:B2(i.published_at)}),i.article_url&&s.jsxs("a",{href:i.article_url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-bold text-white/65 hover:text-white",children:["Abrir matéria ",s.jsx(my,{className:"h-3.5 w-3.5"})]})]}),p==="pending"?s.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[s.jsxs("button",{onClick:m,disabled:d,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 font-black transition hover:border-red-400/50 hover:text-red-200 disabled:opacity-50",children:[d?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):s.jsx(Ho,{className:"h-4 w-4"}),"Não enviar"]}),s.jsxs("button",{onClick:u,disabled:d||!v,className:"inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f40b36] font-black shadow-[0_12px_35px_rgba(244,11,54,.2)] transition hover:bg-[#ff1644] disabled:opacity-50",children:[d?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):s.jsx(_s,{className:"h-4 w-4"}),"Enviar aos Stories"]})]}):s.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4",children:[s.jsxs("span",{className:"inline-flex items-center gap-2 text-xs font-bold text-white/55",children:[p==="approved"?s.jsx(Xy,{className:"h-4 w-4 text-[#ff3155]"}):null,H2[i.story_status]]}),p==="rejected"&&s.jsx("button",{onClick:u,disabled:d||!v,className:"rounded-lg border border-white/12 px-3 py-2 text-xs font-black hover:border-[#f40b36]/60 disabled:opacity-50",children:"Enviar aos Stories"}),p==="approved"&&i.story_status!=="publishing"&&s.jsxs("button",{onClick:m,disabled:d,className:"inline-flex items-center gap-2 rounded-lg border border-red-400/25 px-3 py-2 text-xs font-black text-red-100 transition hover:border-red-400/60 hover:bg-red-400/10 disabled:opacity-50",children:[d?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):s.jsx(Ho,{className:"h-4 w-4"}),"Retirar da fila"]}),p==="approved"&&i.story_status==="needs_review"&&s.jsx("button",{onClick:u,disabled:d,className:"rounded-lg border border-amber-300/25 px-3 py-2 text-xs font-black text-amber-100 hover:border-amber-300/60 disabled:opacity-50",children:"Reenfileirar"})]}),i.last_story_error&&s.jsx("p",{className:"mt-4 rounded-lg border border-amber-300/20 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100/80",children:i.last_story_error}),!v&&s.jsx("p",{className:"mt-4 rounded-lg border border-white/10 bg-white/[.03] p-3 text-xs leading-5 text-white/55",children:"Esta matéria não possui uma fotografia válida para o formato 9:16."})]})]})})}function X2({article:i}){const c=Ku(i),d=i.title.length>170?10:i.title.length>130?12:i.title.length>95?14:17;return s.jsxs("div",{children:[s.jsxs("div",{className:"relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl border border-white/12 bg-[#030305] shadow-2xl","aria-label":"Prévia do Story em proporção 9 por 16",children:[s.jsxs("div",{className:"absolute inset-x-0 top-0 h-[57%] overflow-hidden bg-[#111116]",children:[c?s.jsx("img",{src:i.image_url||"",alt:"",className:"h-full w-full object-cover",loading:"lazy"}):s.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-2 text-white/30",children:[s.jsx(Ey,{className:"h-8 w-8"}),s.jsx("span",{className:"text-[10px] font-bold",children:"Sem imagem válida"})]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#030305]"}),s.jsx("img",{src:"/images/braba-news.png",alt:"BRABA NEWS",className:"absolute left-1/2 top-[3%] w-[43%] -translate-x-1/2 object-contain"})]}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 top-[54%] bg-[#030305] px-[6%] pb-[3%] pt-[4%]",children:[s.jsx("p",{className:"text-[7px] font-black uppercase tracking-[.18em] text-[#ff3155]",children:i.category||"Informação"}),s.jsx("h4",{className:"mt-2 font-black leading-[1.02] tracking-[-.035em] text-white",style:{fontSize:`${d}px`},children:i.title}),s.jsx("div",{className:"mt-2 h-1 w-[37%] bg-gradient-to-r from-[#f8034b] via-[#86152f] to-[#33121d]"}),i.summary&&s.jsx("p",{className:"mt-3 line-clamp-3 text-[9px] leading-[1.45] text-white/80",children:i.summary}),s.jsxs("div",{className:"absolute inset-x-[6%] bottom-[3%] flex items-center justify-between border-t border-white/20 pt-2 text-[7px] text-white/55",children:[s.jsx("strong",{className:"text-white",children:"BRABA NEWS"}),s.jsx("span",{className:"max-w-[48%] truncate",children:i.source_name})]})]})]}),s.jsx("p",{className:"mt-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-white/35",children:"Prévia 9:16 · corte exato"})]})}const Fh=5,Z2=25*1024*1024,K2=new Set(["image/jpeg","image/png","image/webp","image/svg+xml"]),Ea="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#07080b] px-4 py-3 text-[15px] text-white placeholder:text-white/40 transition hover:border-white/30 focus:border-[#f40b36] focus:outline-none focus:ring-2 focus:ring-[#f40b36]/25",Sa="block text-sm font-bold text-white",P2=[["institucional","Publicidade institucional da marca"],["produto_servico","Divulgar determinado produto ou serviço"],["promocao","Promoção exclusiva e/ou inédita"],["fortalecer_marca","Fortalecer a marca"],["visita_estabelecimento","Incentivar a visita no meu estabelecimento"],["outro","Outro"]];function F2(){const i=new Date;return`VMV-${`${i.getFullYear()}${String(i.getMonth()+1).padStart(2,"0")}${String(i.getDate()).padStart(2,"0")}`}-${crypto.randomUUID().slice(0,6).toUpperCase()}`}function Ut(i){return i.trim()||null}function Mu(i,c){if(i.length+c.length>Fh)return`Envie no máximo ${Fh} imagens.`;const d=c.find(m=>!K2.has(m.type));if(d)return`O formato de “${d.name}” não é aceito.`;const u=c.find(m=>m.size>Z2);return u?`O arquivo “${u.name}” ultrapassa 25 MB.`:""}function Ml({children:i}){return s.jsxs("div",{className:"min-h-screen bg-[#030406] text-white",children:[s.jsx("header",{className:"sticky top-0 z-30 border-b border-white/10 bg-[#030406]/95 backdrop-blur-xl",children:s.jsxs("div",{className:"mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8",children:[s.jsx(ht,{to:"/","aria-label":"Voltar ao site",children:s.jsx(hn,{size:"sm"})}),s.jsxs("div",{className:"flex items-center gap-5",children:[s.jsx("span",{className:"hidden text-[10px] font-black uppercase tracking-[0.18em] text-white/35 sm:inline",children:"Portal de vídeos"}),s.jsxs(ht,{to:"/",className:"inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 hover:text-white",children:[s.jsx(Yo,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:"Voltar ao site"})]})]})]})}),i]})}function Yv({eyebrow:i,title:c,copy:d}){return s.jsxs("section",{className:"relative overflow-hidden border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16",children:[s.jsx("div",{className:"pointer-events-none absolute inset-0 bg-led-grid opacity-35"}),s.jsx("div",{className:"pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f40b36]/12 blur-[110px]"}),s.jsxs("div",{className:"relative mx-auto max-w-4xl text-center",children:[s.jsxs("p",{className:"brand-eyebrow justify-center",children:[s.jsx("span",{className:"brand-eyebrow-line"}),i]}),s.jsx("h1",{className:"brand-section-title",children:c}),s.jsx("p",{className:"brand-section-copy mx-auto",children:d})]})]})}function wu(){const[i,c]=y.useState([]),[d,u]=y.useState(""),[m,p]=y.useState(!0),[v,x]=y.useState("");y.useEffect(()=>{document.title="Escolha seu negócio | VM MÍDIAS",Uv().then(c).catch(j=>x(j instanceof Error?j.message:"Não foi possível carregar os negócios.")).finally(()=>p(!1))},[]);const N=y.useMemo(()=>{const j=d.trim().toLocaleLowerCase("pt-BR");return j?i.filter(S=>`${S.name} ${S.segment}`.toLocaleLowerCase("pt-BR").includes(j)):i},[i,d]);return s.jsx(Ml,{children:s.jsxs("main",{children:[s.jsx(Yv,{eyebrow:"Seu espaço na VM MÍDIAS",title:s.jsxs(s.Fragment,{children:["Encontre seu ",s.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Pesquise o nome do seu negócio para consultar os dados cadastrados e solicitar um novo vídeo."}),s.jsxs("section",{className:"mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14",children:[s.jsxs("div",{className:"flex flex-col gap-4 rounded-2xl border border-white/12 bg-[#0d0f13] p-4 sm:flex-row sm:items-center sm:p-5",children:[s.jsxs("label",{className:"relative min-w-0 flex-1",children:[s.jsx(Qu,{className:"pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35"}),s.jsx("input",{value:d,onChange:j=>u(j.target.value),className:"h-14 w-full rounded-xl border border-white/15 bg-black/30 pl-12 pr-4 text-base outline-none placeholder:text-white/35 focus:border-[#f40b36]",placeholder:"Digite o nome do negócio",autoFocus:!0})]}),s.jsxs(ht,{to:"/solicitar-video/novo-negocio",className:"brand-button brand-button-primary whitespace-nowrap",children:[s.jsx(Gy,{className:"h-4 w-4"}),"Cadastrar negócio"]})]}),v&&s.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),m?s.jsx("div",{className:"flex min-h-64 items-center justify-center",children:s.jsx(Aa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})}):N.length?s.jsx("div",{className:"mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:N.map(j=>s.jsx(J2,{business:j},j.id))}):s.jsxs("div",{className:"mt-7 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center",children:[s.jsx(Hl,{className:"mx-auto h-9 w-9 text-white/25"}),s.jsx("h2",{className:"mt-4 text-xl font-black",children:"Negócio não encontrado"}),s.jsx("p",{className:"mt-2 text-sm text-white/50",children:"Confira o nome ou cadastre o negócio para continuar."})]})]})]})})}function J2({business:i}){const c=i.assets[0];return s.jsxs(ht,{to:`/solicitar-video/negocio/${i.id}`,className:"group overflow-hidden rounded-2xl border border-white/12 bg-[#0d0f13] p-5 transition hover:-translate-y-1 hover:border-[#f40b36]/55 hover:shadow-2xl hover:shadow-[#f40b36]/10",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/35",children:c?s.jsx("img",{src:In(c.path),alt:`Logo de ${i.name}`,className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-8 w-8 text-white/30"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h2",{className:"truncate text-xl font-black",children:i.name}),s.jsx("p",{className:"mt-1 truncate text-sm text-white/50",children:i.segment})]})]}),s.jsxs("span",{className:"mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase tracking-[0.1em] text-white/65 group-hover:text-white",children:["Abrir negócio ",s.jsx(pt,{className:"h-4 w-4"})]})]})}const kv={name:"",whatsapp:"",instagram:"",address:"",segment:"",description:"",consent:!1};function Ru(){const[i,c]=y.useState(kv),[d,u]=y.useState([]),[m,p]=y.useState(!1),[v,x]=y.useState(""),[N,j]=y.useState(null);y.useEffect(()=>{document.title="Cadastrar negócio | VM MÍDIAS"},[]);const S=C=>{const B=Array.from(C.target.files??[]);C.target.value="";const Y=Mu(d,B);if(Y)return x(Y);x(""),u(L=>[...L,...B])},h=async C=>{if(C.preventDefault(),x(""),!d.length)return x("Envie o logo ou ao menos uma imagem do negócio.");p(!0);try{const B=crypto.randomUUID(),Y=await zv(B,d),L={id:B,name:i.name.trim(),whatsapp:Ut(i.whatsapp),instagram:Ut(i.instagram),address:Ut(i.address),segment:i.segment.trim(),description:Ut(i.description),assets:Y,consent:!0};await E2(L),j({...L,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),window.scrollTo({top:0,behavior:"smooth"})}catch(B){x(B instanceof Error?B.message:"Não foi possível cadastrar o negócio.")}finally{p(!1)}};return N?s.jsx(Xv,{title:"Negócio cadastrado",copy:"Agora o negócio já pode ser encontrado na pesquisa e receber novas solicitações de vídeo.",action:s.jsxs(ht,{to:`/solicitar-video/negocio/${N.id}`,className:"brand-button brand-button-primary",children:["Abrir negócio ",s.jsx(pt,{className:"h-4 w-4"})]})}):s.jsx(Ml,{children:s.jsxs("main",{children:[s.jsx(Yv,{eyebrow:"Primeiro acesso",title:s.jsxs(s.Fragment,{children:["Cadastre seu ",s.jsx("span",{className:"text-[#f40b36]",children:"negócio"})]}),copy:"Preencha somente as informações principais. Elas ficarão salvas para os próximos vídeos."}),s.jsx("section",{className:"mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14",children:s.jsxs("form",{onSubmit:h,className:"brand-panel rounded-2xl p-5 sm:p-8",children:[s.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[s.jsxs("label",{className:`${Sa} sm:col-span-2`,children:["Nome do negócio *",s.jsx("input",{required:!0,maxLength:120,value:i.name,onChange:C=>c({...i,name:C.target.value}),className:Ea,placeholder:"Nome do negócio"})]}),s.jsxs("label",{className:Sa,children:["Segmento do negócio *",s.jsx("input",{required:!0,maxLength:120,value:i.segment,onChange:C=>c({...i,segment:C.target.value}),className:Ea,placeholder:"Ex.: bar, mercado, academia"})]}),s.jsxs("label",{className:Sa,children:["Endereço (caso seja físico)",s.jsx("input",{maxLength:300,value:i.address,onChange:C=>c({...i,address:C.target.value}),className:Ea,placeholder:"Rua, número e bairro"})]}),s.jsxs("label",{className:Sa,children:["WhatsApp",s.jsx("input",{maxLength:30,value:i.whatsapp,onChange:C=>c({...i,whatsapp:C.target.value}),className:Ea,placeholder:"(15) 99999-9999"})]}),s.jsxs("label",{className:Sa,children:["Instagram",s.jsx("input",{maxLength:120,value:i.instagram,onChange:C=>c({...i,instagram:C.target.value}),className:Ea,placeholder:"@nomedonegocio"})]})]}),s.jsxs("label",{className:`${Sa} mt-5`,children:["Faça uma breve descrição sobre o negócio",s.jsx("textarea",{rows:4,maxLength:1200,value:i.description,onChange:C=>c({...i,description:C.target.value}),className:Ea,placeholder:"Conte brevemente o que o negócio oferece"})]}),s.jsx(zu,{files:d,onFiles:S,onRemove:C=>u(B=>B.filter((Y,L)=>L!==C)),title:"Logo e imagens do negócio *",copy:"Envie primeiro o logo e depois fotos da fachada, ambiente, produtos ou serviços. Máximo de 5 imagens."}),s.jsx(Qv,{checked:i.consent,onChange:C=>c({...i,consent:C})}),v&&s.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:v}),s.jsx("button",{disabled:m,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:m?s.jsxs(s.Fragment,{children:[s.jsx(Aa,{className:"h-4 w-4 animate-spin"}),"Salvando negócio…"]}):s.jsxs(s.Fragment,{children:["Cadastrar negócio ",s.jsx(pt,{className:"h-4 w-4"})]})})]})})]})})}function Jh(){const{businessId:i=""}=B1(),[c,d]=y.useState(null),[u,m]=y.useState(!0),[p,v]=y.useState(!1),[x,N]=y.useState(kv),[j,S]=y.useState([]),[h,C]=y.useState(""),[B,Y]=y.useState(""),[L,H]=y.useState(""),[U,k]=y.useState([]),[V,de]=y.useState(!1),[ce,Ee]=y.useState(!1),[ee,$]=y.useState(""),[Ie,W]=y.useState("");y.useEffect(()=>{Uv().then(z=>{const I=z.find(Z=>Z.id===i)||null;d(I),I&&N({name:I.name,whatsapp:I.whatsapp||"",instagram:I.instagram||"",address:I.address||"",segment:I.segment,description:I.description||"",consent:!0})}).catch(z=>$(z instanceof Error?z.message:"Não foi possível abrir o negócio.")).finally(()=>m(!1))},[i]);const re=z=>{const I=Array.from(z.target.files??[]);z.target.value="";const Z=Mu(U,I);if(Z)return $(Z);$(""),k(fe=>[...fe,...I])},oe=z=>{const I=Array.from(z.target.files??[]);z.target.value="";const Z=Mu(j,I);if(Z)return $(Z);if(((c==null?void 0:c.assets.length)||0)+j.length+I.length>10)return $("O negócio pode possuir no máximo 10 imagens.");$(""),S(fe=>[...fe,...I])},Ve=async()=>{if(c){Ee(!0),$("");try{const z=j.length?await zv(c.id,j,c.assets.length):[],I={name:x.name.trim(),whatsapp:Ut(x.whatsapp),instagram:Ut(x.instagram),address:Ut(x.address),segment:x.segment.trim(),description:Ut(x.description)};await S2(c.id,I,z),d({...c,...I,assets:[...c.assets,...z],updated_at:new Date().toISOString()}),S([]),v(!1)}catch(z){$(z instanceof Error?z.message:"Não foi possível alterar os dados.")}finally{Ee(!1)}}},Pe=async z=>{if(z.preventDefault(),!!c){if($(""),!h)return $("Escolha um objetivo para o vídeo.");Ee(!0);try{const I=crypto.randomUUID(),Z=F2(),fe=U.length?await N2(I,U,c.id):[];await A2({id:I,business_id:c.id,protocol:Z,campaign_objective:h,objective_other:h==="outro"?Ut(B):null,video_idea:L.trim(),uploaded_assets:fe,consent:!0,video_format:"vertical_9_16",duration_seconds:20}),W(Z),window.scrollTo({top:0,behavior:"smooth"})}catch(I){$(I instanceof Error?I.message:"Não foi possível enviar o pedido.")}finally{Ee(!1)}}};if(u)return s.jsx(Ml,{children:s.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:s.jsx(Aa,{className:"h-8 w-8 animate-spin text-[#f40b36]"})})});if(!c)return s.jsx(Ml,{children:s.jsxs("div",{className:"mx-auto max-w-xl px-5 py-24 text-center",children:[s.jsx("h1",{className:"text-3xl font-black",children:"Negócio não encontrado"}),s.jsx(ht,{to:"/solicitar-video",className:"brand-button brand-button-primary mt-7",children:"Voltar para a pesquisa"})]})});if(Ie)return s.jsx(Xv,{title:"Novo vídeo solicitado",copy:`Recebemos o pedido de ${c.name}. Guarde o protocolo ${Ie}.`,action:s.jsx(ht,{to:"/solicitar-video",className:"brand-button brand-button-primary",children:"Voltar aos negócios"})});const me=c.assets[0];return s.jsx(Ml,{children:s.jsxs("main",{className:"mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14",children:[s.jsxs(ht,{to:"/solicitar-video",className:"inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-white",children:[s.jsx(Yo,{className:"h-4 w-4"}),"Voltar para a pesquisa"]}),s.jsxs("section",{className:"mt-6 rounded-2xl border border-white/12 bg-[#0d0f13] p-5 sm:p-8",children:[s.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[s.jsx("div",{className:"flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-black/30",children:me?s.jsx("img",{src:In(me.path),alt:`Logo de ${c.name}`,className:"h-full w-full object-contain p-2"}):s.jsx(Hl,{className:"h-9 w-9 text-white/30"})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Negócio cadastrado"}),s.jsx("h1",{className:"mt-2 text-3xl font-black sm:text-5xl",children:c.name}),s.jsxs("p",{className:"mt-2 text-white/50",children:[c.segment,c.address?` · ${c.address}`:""]})]}),s.jsxs("button",{type:"button",onClick:()=>v(!p),className:"brand-button brand-button-outline",children:[s.jsx(Hy,{className:"h-4 w-4"}),"Alterar informações"]})]}),p&&s.jsxs("div",{className:"mt-7 border-t border-white/10 pt-7",children:[s.jsxs("div",{className:"grid gap-5 sm:grid-cols-2",children:[s.jsxs("label",{className:`${Sa} sm:col-span-2`,children:["Nome do negócio *",s.jsx("input",{required:!0,value:x.name,onChange:z=>N({...x,name:z.target.value}),className:Ea})]}),s.jsxs("label",{className:Sa,children:["Segmento *",s.jsx("input",{required:!0,value:x.segment,onChange:z=>N({...x,segment:z.target.value}),className:Ea})]}),s.jsxs("label",{className:Sa,children:["Endereço",s.jsx("input",{value:x.address,onChange:z=>N({...x,address:z.target.value}),className:Ea})]}),s.jsxs("label",{className:Sa,children:["WhatsApp",s.jsx("input",{value:x.whatsapp,onChange:z=>N({...x,whatsapp:z.target.value}),className:Ea})]}),s.jsxs("label",{className:Sa,children:["Instagram",s.jsx("input",{maxLength:120,value:x.instagram,onChange:z=>N({...x,instagram:z.target.value}),className:Ea,placeholder:"@nomedonegocio"})]})]}),s.jsxs("label",{className:`${Sa} mt-5`,children:["Descrição",s.jsx("textarea",{rows:3,value:x.description,onChange:z=>N({...x,description:z.target.value}),className:Ea})]}),s.jsx(zu,{files:j,onFiles:oe,onRemove:z=>S(I=>I.filter((Z,fe)=>fe!==z)),title:"Adicionar novas imagens",copy:`Este negócio possui ${c.assets.length} de 10 imagens. Você pode adicionar até 5 por vez.`}),s.jsxs("button",{type:"button",disabled:ce,onClick:()=>void Ve(),className:"brand-button brand-button-primary mt-5 disabled:opacity-50",children:[ce?s.jsx(Aa,{className:"h-4 w-4 animate-spin"}):null,"Salvar alterações"]})]})]}),s.jsxs("form",{onSubmit:Pe,className:"brand-panel mt-7 rounded-2xl p-5 sm:p-8",children:[s.jsx("p",{className:"text-xs font-black uppercase tracking-[0.18em] text-[#ff3155]",children:"Novo pedido"}),s.jsx("h2",{className:"mt-2 text-2xl font-black sm:text-4xl",children:"Solicitar novo vídeo"}),s.jsxs("p",{className:"mt-3 text-sm leading-6 text-white/50",children:["O pedido ficará automaticamente relacionado a ",c.name,"."]}),s.jsxs("fieldset",{className:"mt-8",children:[s.jsx("legend",{className:"text-base font-black",children:"1. Objetivo do vídeo *"}),s.jsx("p",{className:"mt-1 text-sm text-white/45",children:"Escolha apenas uma opção."}),s.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:P2.map(([z,I])=>s.jsxs("label",{className:`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-bold transition ${h===z?"border-[#f40b36] bg-[#f40b36]/10":"border-white/12 bg-black/20 hover:border-white/25"}`,children:[s.jsx("input",{required:!0,type:"radio",name:"objective",value:z,checked:h===z,onChange:()=>C(z),className:"h-4 w-4 accent-[#f40b36]"}),I]},z))}),h==="outro"&&s.jsxs("label",{className:`${Sa} mt-4`,children:["Qual?",s.jsx("input",{maxLength:300,value:B,onChange:z=>Y(z.target.value),className:Ea,placeholder:"Descreva o outro objetivo"})]})]}),s.jsxs("label",{className:`${Sa} mt-8`,children:["2. Escreva brevemente o que deseja no vídeo",s.jsx("textarea",{rows:5,maxLength:2400,value:L,onChange:z=>H(z.target.value),className:Ea,placeholder:"Conte sua ideia de forma simples"}),s.jsxs("span",{className:"mt-2 block text-xs font-normal text-white/35",children:[L.length,"/2400 caracteres"]})]}),s.jsx(zu,{files:U,onFiles:re,onRemove:z=>k(I=>I.filter((Z,fe)=>fe!==z)),title:"3. Imagens adicionais",copy:"Envie somente imagens úteis para este novo vídeo. Máximo de 5 imagens."}),s.jsx(Qv,{checked:V,onChange:de}),ee&&s.jsx("p",{className:"mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm text-red-100",children:ee}),s.jsx("button",{disabled:ce,className:"brand-button brand-button-primary mt-6 w-full disabled:opacity-55",children:ce?s.jsxs(s.Fragment,{children:[s.jsx(Aa,{className:"h-4 w-4 animate-spin"}),"Enviando pedido…"]}):s.jsxs(s.Fragment,{children:["Solicitar novo vídeo ",s.jsx(pt,{className:"h-4 w-4"})]})})]})]})})}function zu({files:i,onFiles:c,onRemove:d,title:u,copy:m}){return s.jsxs("div",{className:"mt-7",children:[s.jsx("p",{className:"text-sm font-bold",children:u}),s.jsxs("label",{className:"mt-2 flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-white/20 bg-black/20 px-5 py-7 text-center hover:border-[#f40b36]/60 hover:bg-[#f40b36]/5",children:[s.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg,image/png,image/webp,image/svg+xml",onChange:c,className:"sr-only"}),s.jsx(iy,{className:"h-7 w-7 text-[#ff3155]"}),s.jsx("strong",{className:"mt-3 text-sm",children:"Escolher imagens"}),s.jsx("span",{className:"mt-2 max-w-lg text-xs leading-5 text-white/40",children:m})]}),i.length>0&&s.jsx("ul",{className:"mt-3 grid gap-2 sm:grid-cols-2",children:i.map((p,v)=>s.jsxs("li",{className:"flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 p-3",children:[s.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#ff3155]",children:p.type.startsWith("image/")?s.jsx(Ay,{className:"h-4 w-4"}):s.jsx(py,{className:"h-4 w-4"})}),s.jsx("span",{className:"min-w-0 flex-1 truncate text-xs font-bold",children:p.name}),s.jsx("button",{type:"button",onClick:()=>d(v),"aria-label":`Remover ${p.name}`,className:"rounded-md p-2 text-white/40 hover:bg-red-400/10 hover:text-red-300",children:s.jsx(Rv,{className:"h-4 w-4"})})]},`${p.name}-${p.lastModified}-${v}`))})]})}function Qv({checked:i,onChange:c}){return s.jsxs("label",{className:"mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60",children:[s.jsx("input",{required:!0,type:"checkbox",checked:i,onChange:d=>c(d.target.checked),className:"mt-1 h-4 w-4 accent-[#f40b36]"}),"Autorizo a VM MÍDIAS a utilizar as informações e imagens enviadas para produzir os vídeos e entrar em contato."]})}function Xv({title:i,copy:c,action:d}){return s.jsx(Ml,{children:s.jsx("main",{className:"mx-auto flex min-h-[calc(100vh-76px)] max-w-2xl items-center px-5 py-16",children:s.jsxs("section",{className:"w-full rounded-2xl border border-emerald-400/25 bg-[#0d1012] p-8 text-center",children:[s.jsx(ty,{className:"mx-auto h-14 w-14 text-emerald-300"}),s.jsx("h1",{className:"mt-6 text-3xl font-black sm:text-5xl",children:i}),s.jsx("p",{className:"mx-auto mt-4 max-w-lg leading-7 text-white/55",children:c}),s.jsx("div",{className:"mt-8",children:d})]})})})}function $2(){return s.jsxs(eb,{children:[s.jsx(Na,{path:"/admin",element:s.jsx(Zh,{})}),s.jsx(Na,{path:"/admin/solicitacoes",element:s.jsx(Zh,{})}),s.jsx(Na,{path:"/admin/noticias",element:s.jsx(k2,{})}),s.jsx(Na,{path:"/solicitar-video",element:s.jsx(wu,{})}),s.jsx(Na,{path:"/solicitar-video/novo-negocio",element:s.jsx(Ru,{})}),s.jsx(Na,{path:"/solicitar-video/negocio/:businessId",element:s.jsx(Jh,{})}),s.jsx(Na,{path:"/solicitar-video/novo-comercio",element:s.jsx(Ru,{})}),s.jsx(Na,{path:"/solicitar-video/comercio/:businessId",element:s.jsx(Jh,{})}),s.jsx(Na,{path:"/solicitar-video/novo-cliente",element:s.jsx(Ru,{})}),s.jsx(Na,{path:"/solicitar-video/cliente-atual",element:s.jsx(wu,{})}),s.jsx(Na,{path:"/solicitar-arte",element:s.jsx(wu,{})}),s.jsx(Na,{path:"/politica-de-privacidade",element:s.jsx(g2,{})}),s.jsx(Na,{path:"*",element:s.jsx(W2,{})})]})}function W2(){const[i,c]=y.useState(!1),[d,u]=y.useState("DESTAQUE"),[m,p]=y.useState("anual"),v=(x,N)=>{u(x),p(N)};return s.jsxs("div",{className:"min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#F8032D] selection:text-white flex flex-col",children:[s.jsx(t2,{}),s.jsxs("main",{className:"flex-grow",children:[s.jsx(l2,{}),s.jsx(i2,{}),s.jsx(s2,{}),s.jsx(r2,{onSelectPlan:v}),s.jsx(u2,{}),s.jsx(d2,{}),s.jsx(m2,{}),s.jsx(f2,{selectedPlanName:d,selectedPlanCycle:m})]}),s.jsx(p2,{onOpenPrivacyModal:()=>c(!0)}),s.jsx(h2,{}),s.jsx(v2,{isOpen:i,onClose:()=>c(!1)})]})}$x.createRoot(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsx(Ab,{children:s.jsx($2,{})})}));
