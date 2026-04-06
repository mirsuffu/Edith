const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TrackerTab-BK-Gvv0l.js","assets/plus-X3gv4NkX.js","assets/useEditorMode-Ba_LyYvn.js","assets/ConfirmModal-yaApYysa.js","assets/chevron-down-G7sGfyRr.js","assets/chevron-right-Db_eljPD.js","assets/trash-2-BGGz19qK.js","assets/SubtabBar-DP5A-tb6.js","assets/PlannerHubTab-F1kw5LAq.js","assets/Toggle-Cc-TSTQ6.js","assets/Select-jjGER81K.js","assets/useNotifications-CJRSJiQ7.js","assets/PerformanceTab-x1qfn8AF.js","assets/EdithTab-CjmxNr7L.js","assets/SettingsTab-DSNk0iJo.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Vf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sh={exports:{}},Va={},Ah={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function HE(){if(Hg)return Ce;Hg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function C(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,$={};function F(M,W,ce){this.props=M,this.context=W,this.refs=$,this.updater=ce||U}F.prototype.isReactComponent={},F.prototype.setState=function(M,W){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,W,"setState")},F.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ee(){}ee.prototype=F.prototype;function ae(M,W,ce){this.props=M,this.context=W,this.refs=$,this.updater=ce||U}var me=ae.prototype=new ee;me.constructor=ae,q(me,F.prototype),me.isPureReactComponent=!0;var ve=Array.isArray,Ue=Object.prototype.hasOwnProperty,_e={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(M,W,ce){var Ae,ke={},De=null,ze=null;if(W!=null)for(Ae in W.ref!==void 0&&(ze=W.ref),W.key!==void 0&&(De=""+W.key),W)Ue.call(W,Ae)&&!P.hasOwnProperty(Ae)&&(ke[Ae]=W[Ae]);var Be=arguments.length-2;if(Be===1)ke.children=ce;else if(1<Be){for(var He=Array(Be),vt=0;vt<Be;vt++)He[vt]=arguments[vt+2];ke.children=He}if(M&&M.defaultProps)for(Ae in Be=M.defaultProps,Be)ke[Ae]===void 0&&(ke[Ae]=Be[Ae]);return{$$typeof:n,type:M,key:De,ref:ze,props:ke,_owner:_e.current}}function k(M,W){return{$$typeof:n,type:M.type,key:W,ref:M.ref,props:M.props,_owner:M._owner}}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function D(M){var W={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ce){return W[ce]})}var O=/\/+/g;function A(M,W){return typeof M=="object"&&M!==null&&M.key!=null?D(""+M.key):W.toString(36)}function Le(M,W,ce,Ae,ke){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(De){case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case n:case e:ze=!0}}if(ze)return ze=M,ke=ke(ze),M=Ae===""?"."+A(ze,0):Ae,ve(ke)?(ce="",M!=null&&(ce=M.replace(O,"$&/")+"/"),Le(ke,W,ce,"",function(vt){return vt})):ke!=null&&(x(ke)&&(ke=k(ke,ce+(!ke.key||ze&&ze.key===ke.key?"":(""+ke.key).replace(O,"$&/")+"/")+M)),W.push(ke)),1;if(ze=0,Ae=Ae===""?".":Ae+":",ve(M))for(var Be=0;Be<M.length;Be++){De=M[Be];var He=Ae+A(De,Be);ze+=Le(De,W,ce,He,ke)}else if(He=C(M),typeof He=="function")for(M=He.call(M),Be=0;!(De=M.next()).done;)De=De.value,He=Ae+A(De,Be++),ze+=Le(De,W,ce,He,ke);else if(De==="object")throw W=String(M),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ze}function Xe(M,W,ce){if(M==null)return M;var Ae=[],ke=0;return Le(M,Ae,"","",function(De){return W.call(ce,De,ke++)}),Ae}function st(M){if(M._status===-1){var W=M._result;W=W(),W.then(function(ce){(M._status===0||M._status===-1)&&(M._status=1,M._result=ce)},function(ce){(M._status===0||M._status===-1)&&(M._status=2,M._result=ce)}),M._status===-1&&(M._status=0,M._result=W)}if(M._status===1)return M._result.default;throw M._result}var Pe={current:null},Z={transition:null},he={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:_e};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Xe,forEach:function(M,W,ce){Xe(M,function(){W.apply(this,arguments)},ce)},count:function(M){var W=0;return Xe(M,function(){W++}),W},toArray:function(M){return Xe(M,function(W){return W})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=F,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ae,Ce.StrictMode=i,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Ce.act=ne,Ce.cloneElement=function(M,W,ce){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ae=q({},M.props),ke=M.key,De=M.ref,ze=M._owner;if(W!=null){if(W.ref!==void 0&&(De=W.ref,ze=_e.current),W.key!==void 0&&(ke=""+W.key),M.type&&M.type.defaultProps)var Be=M.type.defaultProps;for(He in W)Ue.call(W,He)&&!P.hasOwnProperty(He)&&(Ae[He]=W[He]===void 0&&Be!==void 0?Be[He]:W[He])}var He=arguments.length-2;if(He===1)Ae.children=ce;else if(1<He){Be=Array(He);for(var vt=0;vt<He;vt++)Be[vt]=arguments[vt+2];Ae.children=Be}return{$$typeof:n,type:M.type,key:ke,ref:De,props:Ae,_owner:ze}},Ce.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},Ce.createElement=T,Ce.createFactory=function(M){var W=T.bind(null,M);return W.type=M,W},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:f,render:M}},Ce.isValidElement=x,Ce.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:st}},Ce.memo=function(M,W){return{$$typeof:_,type:M,compare:W===void 0?null:W}},Ce.startTransition=function(M){var W=Z.transition;Z.transition={};try{M()}finally{Z.transition=W}},Ce.unstable_act=ne,Ce.useCallback=function(M,W){return Pe.current.useCallback(M,W)},Ce.useContext=function(M){return Pe.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return Pe.current.useDeferredValue(M)},Ce.useEffect=function(M,W){return Pe.current.useEffect(M,W)},Ce.useId=function(){return Pe.current.useId()},Ce.useImperativeHandle=function(M,W,ce){return Pe.current.useImperativeHandle(M,W,ce)},Ce.useInsertionEffect=function(M,W){return Pe.current.useInsertionEffect(M,W)},Ce.useLayoutEffect=function(M,W){return Pe.current.useLayoutEffect(M,W)},Ce.useMemo=function(M,W){return Pe.current.useMemo(M,W)},Ce.useReducer=function(M,W,ce){return Pe.current.useReducer(M,W,ce)},Ce.useRef=function(M){return Pe.current.useRef(M)},Ce.useState=function(M){return Pe.current.useState(M)},Ce.useSyncExternalStore=function(M,W,ce){return Pe.current.useSyncExternalStore(M,W,ce)},Ce.useTransition=function(){return Pe.current.useTransition()},Ce.version="18.3.1",Ce}var Kg;function ml(){return Kg||(Kg=1,Ah.exports=HE()),Ah.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function KE(){if(Gg)return Va;Gg=1;var n=ml(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,g,_){var v,S={},C=null,U=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(U=g.ref);for(v in g)i.call(g,v)&&!l.hasOwnProperty(v)&&(S[v]=g[v]);if(f&&f.defaultProps)for(v in g=f.defaultProps,g)S[v]===void 0&&(S[v]=g[v]);return{$$typeof:e,type:f,key:C,ref:U,props:S,_owner:o.current}}return Va.Fragment=t,Va.jsx=c,Va.jsxs=c,Va}var Qg;function GE(){return Qg||(Qg=1,Sh.exports=KE()),Sh.exports}var b=GE(),de=ml();const j_=Vf(de);var Wu={},kh={exports:{}},nn={},Ch={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function QE(){return Yg||(Yg=1,(function(n){function e(Z,he){var ne=Z.length;Z.push(he);e:for(;0<ne;){var M=ne-1>>>1,W=Z[M];if(0<o(W,he))Z[M]=he,Z[ne]=W,ne=M;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var he=Z[0],ne=Z.pop();if(ne!==he){Z[0]=ne;e:for(var M=0,W=Z.length,ce=W>>>1;M<ce;){var Ae=2*(M+1)-1,ke=Z[Ae],De=Ae+1,ze=Z[De];if(0>o(ke,ne))De<W&&0>o(ze,ke)?(Z[M]=ze,Z[De]=ne,M=De):(Z[M]=ke,Z[Ae]=ne,M=Ae);else if(De<W&&0>o(ze,ne))Z[M]=ze,Z[De]=ne,M=De;else break e}}return he}function o(Z,he){var ne=Z.sortIndex-he.sortIndex;return ne!==0?ne:Z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var g=[],_=[],v=1,S=null,C=3,U=!1,q=!1,$=!1,F=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Z){for(var he=t(_);he!==null;){if(he.callback===null)i(_);else if(he.startTime<=Z)i(_),he.sortIndex=he.expirationTime,e(g,he);else break;he=t(_)}}function ve(Z){if($=!1,me(Z),!q)if(t(g)!==null)q=!0,st(Ue);else{var he=t(_);he!==null&&Pe(ve,he.startTime-Z)}}function Ue(Z,he){q=!1,$&&($=!1,ee(T),T=-1),U=!0;var ne=C;try{for(me(he),S=t(g);S!==null&&(!(S.expirationTime>he)||Z&&!D());){var M=S.callback;if(typeof M=="function"){S.callback=null,C=S.priorityLevel;var W=M(S.expirationTime<=he);he=n.unstable_now(),typeof W=="function"?S.callback=W:S===t(g)&&i(g),me(he)}else i(g);S=t(g)}if(S!==null)var ce=!0;else{var Ae=t(_);Ae!==null&&Pe(ve,Ae.startTime-he),ce=!1}return ce}finally{S=null,C=ne,U=!1}}var _e=!1,P=null,T=-1,k=5,x=-1;function D(){return!(n.unstable_now()-x<k)}function O(){if(P!==null){var Z=n.unstable_now();x=Z;var he=!0;try{he=P(!0,Z)}finally{he?A():(_e=!1,P=null)}}else _e=!1}var A;if(typeof ae=="function")A=function(){ae(O)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Xe=Le.port2;Le.port1.onmessage=O,A=function(){Xe.postMessage(null)}}else A=function(){F(O,0)};function st(Z){P=Z,_e||(_e=!0,A())}function Pe(Z,he){T=F(function(){Z(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){q||U||(q=!0,st(Ue))},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(Z){switch(C){case 1:case 2:case 3:var he=3;break;default:he=C}var ne=C;C=he;try{return Z()}finally{C=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,he){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=C;C=Z;try{return he()}finally{C=ne}},n.unstable_scheduleCallback=function(Z,he,ne){var M=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?M+ne:M):ne=M,Z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,Z={id:v++,callback:he,priorityLevel:Z,startTime:ne,expirationTime:W,sortIndex:-1},ne>M?(Z.sortIndex=ne,e(_,Z),t(g)===null&&Z===t(_)&&($?(ee(T),T=-1):$=!0,Pe(ve,ne-M))):(Z.sortIndex=W,e(g,Z),q||U||(q=!0,st(Ue))),Z},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(Z){var he=C;return function(){var ne=C;C=he;try{return Z.apply(this,arguments)}finally{C=ne}}}})(Rh)),Rh}var Xg;function YE(){return Xg||(Xg=1,Ch.exports=QE()),Ch.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function XE(){if(Jg)return nn;Jg=1;var n=ml(),e=YE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function C(r){return g.call(S,r)?!0:g.call(v,r)?!1:_.test(r)?S[r]=!0:(v[r]=!0,!1)}function U(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function q(r,s,a,d){if(s===null||typeof s>"u"||U(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,d,h,m,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){F[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];F[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){F[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){F[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){F[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){F[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){F[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){F[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){F[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function ae(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(ee,ae);F[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(ee,ae);F[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(ee,ae);F[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){F[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),F.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){F[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function me(r,s,a,d){var h=F.hasOwnProperty(s)?F[s]:null;(h!==null?h.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,h,d)&&(a=null),d||h===null?C(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,d=h.attributeNamespace,a===null?r.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var ve=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ue=Symbol.for("react.element"),_e=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function he(r){return r===null||typeof r!="object"?null:(r=Z&&r[Z]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,M;function W(r){if(M===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var ce=!1;function Ae(r,s){if(!r||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var d=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){d=z}r.call(s.prototype)}else{try{throw Error()}catch(z){d=z}r()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var h=z.stack.split(`
`),m=d.stack.split(`
`),w=h.length-1,I=m.length-1;1<=w&&0<=I&&h[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(h[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||h[w]!==m[I]){var R=`
`+h[w].replace(" at new "," at ");return r.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",r.displayName)),R}while(1<=w&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?W(r):""}function ke(r){switch(r.tag){case 5:return W(r.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case _e:return"Portal";case k:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case Le:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Xe:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case st:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function ze(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=He(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return h.call(this)},set:function(w){d=""+w,m.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function mr(r){r._valueTracker||(r._valueTracker=vt(r))}function Ts(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=He(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function qr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ri(r,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Is(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=Be(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function $o(r,s){s=s.checked,s!=null&&me(r,"checked",s,!1)}function Wo(r,s){$o(r,s);var a=Be(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ss(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ss(r,s.type,Be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Pl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ss(r,s,a){(s!=="number"||qr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var gr=Array.isArray;function yr(r,s,a,d){if(r=r.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=s.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&d&&(r[a].defaultSelected=!0)}else{for(a=""+Be(a),s=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,d&&(r[h].defaultSelected=!0);return}s!==null||r[h].disabled||(s=r[h])}s!==null&&(s.selected=!0)}}function qo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function As(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Be(a)}}function ks(r,s){var a=Be(s.value),d=Be(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function Ho(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var _r,Ko=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,h){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,h)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=_r.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xi=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(r){xi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Pi[s]=Pi[r]})});function Go(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Pi.hasOwnProperty(r)&&Pi[r]?(""+s).trim():s+"px"}function Qo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,h=Go(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,h):r[a]=h}}var Yo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(r,s){if(s){if(Yo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Jo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function Cs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Rs=null,hn=null,qn=null;function Ps(r){if(r=Ta(r)){if(typeof Rs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=su(s),Rs(r.stateNode,r.type,s))}}function Hn(r){hn?qn?qn.push(r):qn=[r]:hn=r}function Zo(){if(hn){var r=hn,s=qn;if(qn=hn=null,Ps(r),s)for(r=0;r<s.length;r++)Ps(s[r])}}function bi(r,s){return r(s)}function ea(){}var vr=!1;function ta(r,s,a){if(vr)return r(s,a);vr=!0;try{return bi(r,s,a)}finally{vr=!1,(hn!==null||qn!==null)&&(ea(),Zo())}}function ot(r,s){var a=r.stateNode;if(a===null)return null;var d=su(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var xs=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){xs=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{xs=!1}function Di(r,s,a,d,h,m,w,I,R){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(K){this.onError(K)}}var Oi=!1,Ns=null,kn=!1,na=null,Jc={onError:function(r){Oi=!0,Ns=r}};function bs(r,s,a,d,h,m,w,I,R){Oi=!1,Ns=null,Di.apply(Jc,arguments)}function xl(r,s,a,d,h,m,w,I,R){if(bs.apply(this,arguments),Oi){if(Oi){var z=Ns;Oi=!1,Ns=null}else throw Error(t(198));kn||(kn=!0,na=z)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Mi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Rn(r){if(Cn(r)!==r)throw Error(t(188))}function Nl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(d=h.return,d!==null){a=d;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return Rn(h),r;if(m===d)return Rn(h),s;m=m.sibling}throw Error(t(188))}if(a.return!==d.return)a=h,d=m;else{for(var w=!1,I=h.child;I;){if(I===a){w=!0,a=h,d=m;break}if(I===d){w=!0,d=h,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,d=h;break}if(I===d){w=!0,d=m,a=h;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ra(r){return r=Nl(r),r!==null?Ds(r):null}function Ds(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ds(r);if(s!==null)return s;r=r.sibling}return null}var Os=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,bl=e.unstable_shouldYield,Zc=e.unstable_requestPaint,Ke=e.unstable_now,Dl=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,Kr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,sa=e.unstable_LowPriority,Ol=e.unstable_IdlePriority,Vi=null,rn=null;function Ml(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Vi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Vl,oa=Math.log,Ll=Math.LN2;function Vl(r){return r>>>=0,r===0?32:31-(oa(r)/Ll|0)|0}var Ms=64,Ls=4194304;function Gr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Fi(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,h=r.suspendedLanes,m=r.pingedLanes,w=a&268435455;if(w!==0){var I=w&~h;I!==0?d=Gr(I):(m&=w,m!==0&&(d=Gr(m)))}else w=a&~h,w!==0?d=Gr(w):m!==0&&(d=Gr(m));if(d===0)return 0;if(s!==0&&s!==d&&(s&h)===0&&(h=d&-d,m=s&-s,h>=m||h===16&&(m&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-Wt(s),h=1<<a,d|=r[a],s&=~h;return d}function ed(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,h=r.expirationTimes,m=r.pendingLanes;0<m;){var w=31-Wt(m),I=1<<w,R=h[w];R===-1?((I&a)===0||(I&d)!==0)&&(h[w]=ed(I,s)):R<=s&&(r.expiredLanes|=I),m&=~I}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ji(){var r=Ms;return Ms<<=1,(Ms&4194240)===0&&(Ms=64),r}function Qr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Yr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function qe(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-Wt(a),m=1<<h;s[h]=0,d[h]=-1,r[h]=-1,a&=~m}}function Xr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-Wt(a),h=1<<d;h&s|r[d]&s&&(r[d]|=s),a&=~h}}var Ne=0;function Jr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Fl,Vs,jl,Ul,zl,aa=!1,Kn=[],kt=null,Pn=null,xn=null,Zr=new Map,pn=new Map,Gn=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Zr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(s.pointerId)}}function Qt(r,s,a,d,h,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:m,targetContainers:[h]},s!==null&&(s=Ta(s),s!==null&&Vs(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),r)}function nd(r,s,a,d,h){switch(s){case"focusin":return kt=Qt(kt,r,s,a,d,h),!0;case"dragenter":return Pn=Qt(Pn,r,s,a,d,h),!0;case"mouseover":return xn=Qt(xn,r,s,a,d,h),!0;case"pointerover":var m=h.pointerId;return Zr.set(m,Qt(Zr.get(m)||null,r,s,a,d,h)),!0;case"gotpointercapture":return m=h.pointerId,pn.set(m,Qt(pn.get(m)||null,r,s,a,d,h)),!0}return!1}function $l(r){var s=Wi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=Mi(a),s!==null){r.blockedOn=s,zl(r.priority,function(){jl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Fs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Ni=d,a.target.dispatchEvent(d),Ni=null}else return s=Ta(a),s!==null&&Vs(s),r.blockedOn=a,!1;s.shift()}return!0}function Ui(r,s,a){Er(r)&&a.delete(s)}function Wl(){aa=!1,kt!==null&&Er(kt)&&(kt=null),Pn!==null&&Er(Pn)&&(Pn=null),xn!==null&&Er(xn)&&(xn=null),Zr.forEach(Ui),pn.forEach(Ui)}function Nn(r,s){r.blockedOn===s&&(r.blockedOn=null,aa||(aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wl)))}function bn(r){function s(h){return Nn(h,r)}if(0<Kn.length){Nn(Kn[0],r);for(var a=1;a<Kn.length;a++){var d=Kn[a];d.blockedOn===r&&(d.blockedOn=null)}}for(kt!==null&&Nn(kt,r),Pn!==null&&Nn(Pn,r),xn!==null&&Nn(xn,r),Zr.forEach(s),pn.forEach(s),a=0;a<Gn.length;a++)d=Gn[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)$l(a),a.blockedOn===null&&Gn.shift()}var Tr=ve.ReactCurrentBatchConfig,ei=!0;function Je(r,s,a,d){var h=Ne,m=Tr.transition;Tr.transition=null;try{Ne=1,la(r,s,a,d)}finally{Ne=h,Tr.transition=m}}function rd(r,s,a,d){var h=Ne,m=Tr.transition;Tr.transition=null;try{Ne=4,la(r,s,a,d)}finally{Ne=h,Tr.transition=m}}function la(r,s,a,d){if(ei){var h=Fs(r,s,a,d);if(h===null)pd(r,s,d,zi,a),Bl(r,d);else if(nd(h,r,s,a,d))d.stopPropagation();else if(Bl(r,d),s&4&&-1<td.indexOf(r)){for(;h!==null;){var m=Ta(h);if(m!==null&&Fl(m),m=Fs(r,s,a,d),m===null&&pd(r,s,d,zi,a),m===h)break;h=m}h!==null&&d.stopPropagation()}else pd(r,s,d,null,a)}}var zi=null;function Fs(r,s,a,d){if(zi=null,r=Cs(d),r=Wi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Mi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return zi=r,null}function ua(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dl()){case Li:return 1;case Kr:return 4;case fn:case sa:return 16;case Ol:return 536870912;default:return 16}default:return 16}}var on=null,js=null,Yt=null;function ca(){if(Yt)return Yt;var r,s=js,a=s.length,d,h="value"in on?on.value:on.textContent,m=h.length;for(r=0;r<a&&s[r]===h[r];r++);var w=a-r;for(d=1;d<=w&&s[a-d]===h[m-d];d++);return Yt=h.slice(r,1<d?1-d:void 0)}function Us(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function da(){return!1}function Ct(r){function s(a,d,h,m,w){this._reactName=a,this._targetInst=h,this.type=d,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in r)r.hasOwnProperty(I)&&(a=r[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Qn:da,this.isPropagationStopped=da,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),s}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Ct(Dn),Yn=ne({},Dn,{view:0,detail:0}),id=Ct(Yn),Bs,Ir,ti,Bi=ne({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ti&&(ti&&r.type==="mousemove"?(Bs=r.screenX-ti.screenX,Ir=r.screenY-ti.screenY):Ir=Bs=0,ti=r),Bs)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),$s=Ct(Bi),ha=ne({},Bi,{dataTransfer:0}),ql=Ct(ha),Ws=ne({},Yn,{relatedTarget:0}),qs=Ct(Ws),Hl=ne({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Ct(Hl),Kl=ne({},Dn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Gl=Ct(Kl),Ql=ne({},Dn,{data:0}),fa=Ct(Ql),Hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Yl[r])?!!s[r]:!1}function Xn(){return Xl}var u=ne({},Yn,{key:function(r){if(r.key){var s=Hs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Us(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Us(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Us(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Ct(u),y=ne({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(y),L=ne({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),B=Ct(L),J=ne({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Ct(J),pt=ne({},Bi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Ct(pt),wt=[9,13,27,32],ut=f&&"CompositionEvent"in window,mn=null;f&&"documentMode"in document&&(mn=document.documentMode);var an=f&&"TextEvent"in window&&!mn,$i=f&&(!ut||mn&&8<mn&&11>=mn),Ks=" ",Up=!1;function zp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gs=!1;function $w(r,s){switch(r){case"compositionend":return Bp(s);case"keypress":return s.which!==32?null:(Up=!0,Ks);case"textInput":return r=s.data,r===Ks&&Up?null:r;default:return null}}function Ww(r,s){if(Gs)return r==="compositionend"||!ut&&zp(r,s)?(r=ca(),Yt=js=on=null,Gs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return $i&&s.locale!=="ko"?null:s.data;default:return null}}var qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!qw[r.type]:s==="textarea"}function Wp(r,s,a,d){Hn(d),s=nu(s,"onChange"),0<s.length&&(a=new zs("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var pa=null,ma=null;function Hw(r){lm(r,0)}function Jl(r){var s=Zs(r);if(Ts(s))return r}function Kw(r,s){if(r==="change")return s}var qp=!1;if(f){var sd;if(f){var od="oninput"in document;if(!od){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),od=typeof Hp.oninput=="function"}sd=od}else sd=!1;qp=sd&&(!document.documentMode||9<document.documentMode)}function Kp(){pa&&(pa.detachEvent("onpropertychange",Gp),ma=pa=null)}function Gp(r){if(r.propertyName==="value"&&Jl(ma)){var s=[];Wp(s,ma,r,Cs(r)),ta(Hw,s)}}function Gw(r,s,a){r==="focusin"?(Kp(),pa=s,ma=a,pa.attachEvent("onpropertychange",Gp)):r==="focusout"&&Kp()}function Qw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Jl(ma)}function Yw(r,s){if(r==="click")return Jl(s)}function Xw(r,s){if(r==="input"||r==="change")return Jl(s)}function Jw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var On=typeof Object.is=="function"?Object.is:Jw;function ga(r,s){if(On(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var h=a[d];if(!g.call(s,h)||!On(r[h],s[h]))return!1}return!0}function Qp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Yp(r,s){var a=Qp(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qp(a)}}function Xp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Xp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Jp(){for(var r=window,s=qr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=qr(r.document)}return s}function ad(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Zw(r){var s=Jp(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Xp(a.ownerDocument.documentElement,a)){if(d!==null&&ad(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,m=Math.min(d.start,h);d=d.end===void 0?m:Math.min(d.end,h),!r.extend&&m>d&&(h=d,d=m,m=h),h=Yp(a,m);var w=Yp(a,d);h&&w&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),r.removeAllRanges(),m>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var eE=f&&"documentMode"in document&&11>=document.documentMode,Qs=null,ld=null,ya=null,ud=!1;function Zp(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ud||Qs==null||Qs!==qr(d)||(d=Qs,"selectionStart"in d&&ad(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ya&&ga(ya,d)||(ya=d,d=nu(ld,"onSelect"),0<d.length&&(s=new zs("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=Qs)))}function Zl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ys={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},cd={},em={};f&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function eu(r){if(cd[r])return cd[r];if(!Ys[r])return r;var s=Ys[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in em)return cd[r]=s[a];return r}var tm=eu("animationend"),nm=eu("animationiteration"),rm=eu("animationstart"),im=eu("transitionend"),sm=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(r,s){sm.set(r,s),l(s,[r])}for(var dd=0;dd<om.length;dd++){var hd=om[dd],tE=hd.toLowerCase(),nE=hd[0].toUpperCase()+hd.slice(1);ni(tE,"on"+nE)}ni(tm,"onAnimationEnd"),ni(nm,"onAnimationIteration"),ni(rm,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(im,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rE=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function am(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,xl(d,s,void 0,r),r.currentTarget=null}function lm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],h=d.event;d=d.listeners;e:{var m=void 0;if(s)for(var w=d.length-1;0<=w;w--){var I=d[w],R=I.instance,z=I.currentTarget;if(I=I.listener,R!==m&&h.isPropagationStopped())break e;am(h,I,z),m=R}else for(w=0;w<d.length;w++){if(I=d[w],R=I.instance,z=I.currentTarget,I=I.listener,R!==m&&h.isPropagationStopped())break e;am(h,I,z),m=R}}}if(kn)throw r=na,kn=!1,na=null,r}function Qe(r,s){var a=s[wd];a===void 0&&(a=s[wd]=new Set);var d=r+"__bubble";a.has(d)||(um(s,r,2,!1),a.add(d))}function fd(r,s,a){var d=0;s&&(d|=4),um(a,r,d,s)}var tu="_reactListening"+Math.random().toString(36).slice(2);function va(r){if(!r[tu]){r[tu]=!0,i.forEach(function(a){a!=="selectionchange"&&(rE.has(a)||fd(a,!1,r),fd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tu]||(s[tu]=!0,fd("selectionchange",!1,s))}}function um(r,s,a,d){switch(ua(s)){case 1:var h=Je;break;case 4:h=rd;break;default:h=la}a=h.bind(null,s,a,r),h=void 0,!xs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),d?h!==void 0?r.addEventListener(s,a,{capture:!0,passive:h}):r.addEventListener(s,a,!0):h!==void 0?r.addEventListener(s,a,{passive:h}):r.addEventListener(s,a,!1)}function pd(r,s,a,d,h){var m=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var I=d.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(w===4)for(w=d.return;w!==null;){var R=w.tag;if((R===3||R===4)&&(R=w.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;w=w.return}for(;I!==null;){if(w=Wi(I),w===null)return;if(R=w.tag,R===5||R===6){d=m=w;continue e}I=I.parentNode}}d=d.return}ta(function(){var z=m,K=Cs(a),Q=[];e:{var H=sm.get(r);if(H!==void 0){var te=zs,ie=r;switch(r){case"keypress":if(Us(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":ie="focus",te=qs;break;case"focusout":ie="blur",te=qs;break;case"beforeblur":case"afterblur":te=qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B;break;case tm:case nm:case rm:te=Sr;break;case im:te=$e;break;case"scroll":te=id;break;case"wheel":te=Oe;break;case"copy":case"cut":case"paste":te=Gl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var se=(s&4)!==0,at=!se&&r==="scroll",V=se?H!==null?H+"Capture":null:H;se=[];for(var N=z,j;N!==null;){j=N;var X=j.stateNode;if(j.tag===5&&X!==null&&(j=X,V!==null&&(X=ot(N,V),X!=null&&se.push(wa(N,X,j)))),at)break;N=N.return}0<se.length&&(H=new te(H,ie,null,a,K),Q.push({event:H,listeners:se}))}}if((s&7)===0){e:{if(H=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",H&&a!==Ni&&(ie=a.relatedTarget||a.fromElement)&&(Wi(ie)||ie[Ar]))break e;if((te||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=z,ie=ie?Wi(ie):null,ie!==null&&(at=Cn(ie),ie!==at||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=z),te!==ie)){if(se=$s,X="onMouseLeave",V="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(se=E,X="onPointerLeave",V="onPointerEnter",N="pointer"),at=te==null?H:Zs(te),j=ie==null?H:Zs(ie),H=new se(X,N+"leave",te,a,K),H.target=at,H.relatedTarget=j,X=null,Wi(K)===z&&(se=new se(V,N+"enter",ie,a,K),se.target=j,se.relatedTarget=at,X=se),at=X,te&&ie)t:{for(se=te,V=ie,N=0,j=se;j;j=Xs(j))N++;for(j=0,X=V;X;X=Xs(X))j++;for(;0<N-j;)se=Xs(se),N--;for(;0<j-N;)V=Xs(V),j--;for(;N--;){if(se===V||V!==null&&se===V.alternate)break t;se=Xs(se),V=Xs(V)}se=null}else se=null;te!==null&&cm(Q,H,te,se,!1),ie!==null&&at!==null&&cm(Q,at,ie,se,!0)}}e:{if(H=z?Zs(z):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var le=Kw;else if($p(H))if(qp)le=Xw;else{le=Qw;var fe=Gw}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(le=Yw);if(le&&(le=le(r,z))){Wp(Q,le,a,K);break e}fe&&fe(r,H,z),r==="focusout"&&(fe=H._wrapperState)&&fe.controlled&&H.type==="number"&&Ss(H,"number",H.value)}switch(fe=z?Zs(z):window,r){case"focusin":($p(fe)||fe.contentEditable==="true")&&(Qs=fe,ld=z,ya=null);break;case"focusout":ya=ld=Qs=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,Zp(Q,a,K);break;case"selectionchange":if(eE)break;case"keydown":case"keyup":Zp(Q,a,K)}var pe;if(ut)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Gs?zp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&($i&&a.locale!=="ko"&&(Gs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Gs&&(pe=ca()):(on=K,js="value"in on?on.value:on.textContent,Gs=!0)),fe=nu(z,Ee),0<fe.length&&(Ee=new fa(Ee,r,null,a,K),Q.push({event:Ee,listeners:fe}),pe?Ee.data=pe:(pe=Bp(a),pe!==null&&(Ee.data=pe)))),(pe=an?$w(r,a):Ww(r,a))&&(z=nu(z,"onBeforeInput"),0<z.length&&(K=new fa("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:z}),K.data=pe))}lm(Q,s)})}function wa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function nu(r,s){for(var a=s+"Capture",d=[];r!==null;){var h=r,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=ot(r,a),m!=null&&d.unshift(wa(r,m,h)),m=ot(r,s),m!=null&&d.push(wa(r,m,h))),r=r.return}return d}function Xs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function cm(r,s,a,d,h){for(var m=s._reactName,w=[];a!==null&&a!==d;){var I=a,R=I.alternate,z=I.stateNode;if(R!==null&&R===d)break;I.tag===5&&z!==null&&(I=z,h?(R=ot(a,m),R!=null&&w.unshift(wa(a,R,I))):h||(R=ot(a,m),R!=null&&w.push(wa(a,R,I)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var iE=/\r\n?/g,sE=/\u0000|\uFFFD/g;function dm(r){return(typeof r=="string"?r:""+r).replace(iE,`
`).replace(sE,"")}function ru(r,s,a){if(s=dm(s),dm(r)!==s&&a)throw Error(t(425))}function iu(){}var md=null,gd=null;function yd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,oE=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,aE=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(r){return hm.resolve(null).then(r).catch(lE)}:_d;function lE(r){setTimeout(function(){throw r})}function vd(r,s){var a=s,d=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(d===0){r.removeChild(h),bn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=h}while(a);bn(s)}function ri(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function fm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Js,Ea="__reactProps$"+Js,Ar="__reactContainer$"+Js,wd="__reactEvents$"+Js,uE="__reactListeners$"+Js,cE="__reactHandles$"+Js;function Wi(r){var s=r[Jn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=fm(r);r!==null;){if(a=r[Jn])return a;r=fm(r)}return s}r=a,a=r.parentNode}return null}function Ta(r){return r=r[Jn]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Zs(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function su(r){return r[Ea]||null}var Ed=[],eo=-1;function ii(r){return{current:r}}function Ye(r){0>eo||(r.current=Ed[eo],Ed[eo]=null,eo--)}function Ge(r,s){eo++,Ed[eo]=r.current,r.current=s}var si={},Mt=ii(si),Xt=ii(!1),qi=si;function to(r,s){var a=r.type.contextTypes;if(!a)return si;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=s[m];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=h),h}function Jt(r){return r=r.childContextTypes,r!=null}function ou(){Ye(Xt),Ye(Mt)}function pm(r,s,a){if(Mt.current!==si)throw Error(t(168));Ge(Mt,s),Ge(Xt,a)}function mm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var h in d)if(!(h in s))throw Error(t(108,ze(r)||"Unknown",h));return ne({},a,d)}function au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||si,qi=Mt.current,Ge(Mt,r),Ge(Xt,Xt.current),!0}function gm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=mm(r,s,qi),d.__reactInternalMemoizedMergedChildContext=r,Ye(Xt),Ye(Mt),Ge(Mt,r)):Ye(Xt),Ge(Xt,a)}var kr=null,lu=!1,Td=!1;function ym(r){kr===null?kr=[r]:kr.push(r)}function dE(r){lu=!0,ym(r)}function oi(){if(!Td&&kr!==null){Td=!0;var r=0,s=Ne;try{var a=kr;for(Ne=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}kr=null,lu=!1}catch(h){throw kr!==null&&(kr=kr.slice(r+1)),Os(Li,oi),h}finally{Ne=s,Td=!1}}return null}var no=[],ro=0,uu=null,cu=0,gn=[],yn=0,Hi=null,Cr=1,Rr="";function Ki(r,s){no[ro++]=cu,no[ro++]=uu,uu=r,cu=s}function _m(r,s,a){gn[yn++]=Cr,gn[yn++]=Rr,gn[yn++]=Hi,Hi=r;var d=Cr;r=Rr;var h=32-Wt(d)-1;d&=~(1<<h),a+=1;var m=32-Wt(s)+h;if(30<m){var w=h-h%5;m=(d&(1<<w)-1).toString(32),d>>=w,h-=w,Cr=1<<32-Wt(s)+h|a<<h|d,Rr=m+r}else Cr=1<<m|a<<h|d,Rr=r}function Id(r){r.return!==null&&(Ki(r,1),_m(r,1,0))}function Sd(r){for(;r===uu;)uu=no[--ro],no[ro]=null,cu=no[--ro],no[ro]=null;for(;r===Hi;)Hi=gn[--yn],gn[yn]=null,Rr=gn[--yn],gn[yn]=null,Cr=gn[--yn],gn[yn]=null}var ln=null,un=null,Ze=!1,Mn=null;function vm(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function wm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ri(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Hi!==null?{id:Cr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Ad(r){return(r.mode&1)!==0&&(r.flags&128)===0}function kd(r){if(Ze){var s=un;if(s){var a=s;if(!wm(r,s)){if(Ad(r))throw Error(t(418));s=ri(a.nextSibling);var d=ln;s&&wm(r,s)?vm(d,a):(r.flags=r.flags&-4097|2,Ze=!1,ln=r)}}else{if(Ad(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,ln=r}}}function Em(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function du(r){if(r!==ln)return!1;if(!Ze)return Em(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!yd(r.type,r.memoizedProps)),s&&(s=un)){if(Ad(r))throw Tm(),Error(t(418));for(;s;)vm(r,s),s=ri(s.nextSibling)}if(Em(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ri(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ri(r.stateNode.nextSibling):null;return!0}function Tm(){for(var r=un;r;)r=ri(r.nextSibling)}function io(){un=ln=null,Ze=!1}function Cd(r){Mn===null?Mn=[r]:Mn.push(r)}var hE=ve.ReactCurrentBatchConfig;function Ia(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var h=d,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(w){var I=h.refs;w===null?delete I[m]:I[m]=w},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function hu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Im(r){var s=r._init;return s(r._payload)}function Sm(r){function s(V,N){if(r){var j=V.deletions;j===null?(V.deletions=[N],V.flags|=16):j.push(N)}}function a(V,N){if(!r)return null;for(;N!==null;)s(V,N),N=N.sibling;return null}function d(V,N){for(V=new Map;N!==null;)N.key!==null?V.set(N.key,N):V.set(N.index,N),N=N.sibling;return V}function h(V,N){return V=pi(V,N),V.index=0,V.sibling=null,V}function m(V,N,j){return V.index=j,r?(j=V.alternate,j!==null?(j=j.index,j<N?(V.flags|=2,N):j):(V.flags|=2,N)):(V.flags|=1048576,N)}function w(V){return r&&V.alternate===null&&(V.flags|=2),V}function I(V,N,j,X){return N===null||N.tag!==6?(N=_h(j,V.mode,X),N.return=V,N):(N=h(N,j),N.return=V,N)}function R(V,N,j,X){var le=j.type;return le===P?K(V,N,j.props.children,X,j.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===st&&Im(le)===N.type)?(X=h(N,j.props),X.ref=Ia(V,N,j),X.return=V,X):(X=Lu(j.type,j.key,j.props,null,V.mode,X),X.ref=Ia(V,N,j),X.return=V,X)}function z(V,N,j,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=vh(j,V.mode,X),N.return=V,N):(N=h(N,j.children||[]),N.return=V,N)}function K(V,N,j,X,le){return N===null||N.tag!==7?(N=ts(j,V.mode,X,le),N.return=V,N):(N=h(N,j),N.return=V,N)}function Q(V,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return N=_h(""+N,V.mode,j),N.return=V,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ue:return j=Lu(N.type,N.key,N.props,null,V.mode,j),j.ref=Ia(V,null,N),j.return=V,j;case _e:return N=vh(N,V.mode,j),N.return=V,N;case st:var X=N._init;return Q(V,X(N._payload),j)}if(gr(N)||he(N))return N=ts(N,V.mode,j,null),N.return=V,N;hu(V,N)}return null}function H(V,N,j,X){var le=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return le!==null?null:I(V,N,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ue:return j.key===le?R(V,N,j,X):null;case _e:return j.key===le?z(V,N,j,X):null;case st:return le=j._init,H(V,N,le(j._payload),X)}if(gr(j)||he(j))return le!==null?null:K(V,N,j,X,null);hu(V,j)}return null}function te(V,N,j,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return V=V.get(j)||null,I(N,V,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Ue:return V=V.get(X.key===null?j:X.key)||null,R(N,V,X,le);case _e:return V=V.get(X.key===null?j:X.key)||null,z(N,V,X,le);case st:var fe=X._init;return te(V,N,j,fe(X._payload),le)}if(gr(X)||he(X))return V=V.get(j)||null,K(N,V,X,le,null);hu(N,X)}return null}function ie(V,N,j,X){for(var le=null,fe=null,pe=N,Ee=N=0,It=null;pe!==null&&Ee<j.length;Ee++){pe.index>Ee?(It=pe,pe=null):It=pe.sibling;var Fe=H(V,pe,j[Ee],X);if(Fe===null){pe===null&&(pe=It);break}r&&pe&&Fe.alternate===null&&s(V,pe),N=m(Fe,N,Ee),fe===null?le=Fe:fe.sibling=Fe,fe=Fe,pe=It}if(Ee===j.length)return a(V,pe),Ze&&Ki(V,Ee),le;if(pe===null){for(;Ee<j.length;Ee++)pe=Q(V,j[Ee],X),pe!==null&&(N=m(pe,N,Ee),fe===null?le=pe:fe.sibling=pe,fe=pe);return Ze&&Ki(V,Ee),le}for(pe=d(V,pe);Ee<j.length;Ee++)It=te(pe,V,Ee,j[Ee],X),It!==null&&(r&&It.alternate!==null&&pe.delete(It.key===null?Ee:It.key),N=m(It,N,Ee),fe===null?le=It:fe.sibling=It,fe=It);return r&&pe.forEach(function(mi){return s(V,mi)}),Ze&&Ki(V,Ee),le}function se(V,N,j,X){var le=he(j);if(typeof le!="function")throw Error(t(150));if(j=le.call(j),j==null)throw Error(t(151));for(var fe=le=null,pe=N,Ee=N=0,It=null,Fe=j.next();pe!==null&&!Fe.done;Ee++,Fe=j.next()){pe.index>Ee?(It=pe,pe=null):It=pe.sibling;var mi=H(V,pe,Fe.value,X);if(mi===null){pe===null&&(pe=It);break}r&&pe&&mi.alternate===null&&s(V,pe),N=m(mi,N,Ee),fe===null?le=mi:fe.sibling=mi,fe=mi,pe=It}if(Fe.done)return a(V,pe),Ze&&Ki(V,Ee),le;if(pe===null){for(;!Fe.done;Ee++,Fe=j.next())Fe=Q(V,Fe.value,X),Fe!==null&&(N=m(Fe,N,Ee),fe===null?le=Fe:fe.sibling=Fe,fe=Fe);return Ze&&Ki(V,Ee),le}for(pe=d(V,pe);!Fe.done;Ee++,Fe=j.next())Fe=te(pe,V,Ee,Fe.value,X),Fe!==null&&(r&&Fe.alternate!==null&&pe.delete(Fe.key===null?Ee:Fe.key),N=m(Fe,N,Ee),fe===null?le=Fe:fe.sibling=Fe,fe=Fe);return r&&pe.forEach(function(qE){return s(V,qE)}),Ze&&Ki(V,Ee),le}function at(V,N,j,X){if(typeof j=="object"&&j!==null&&j.type===P&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Ue:e:{for(var le=j.key,fe=N;fe!==null;){if(fe.key===le){if(le=j.type,le===P){if(fe.tag===7){a(V,fe.sibling),N=h(fe,j.props.children),N.return=V,V=N;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===st&&Im(le)===fe.type){a(V,fe.sibling),N=h(fe,j.props),N.ref=Ia(V,fe,j),N.return=V,V=N;break e}a(V,fe);break}else s(V,fe);fe=fe.sibling}j.type===P?(N=ts(j.props.children,V.mode,X,j.key),N.return=V,V=N):(X=Lu(j.type,j.key,j.props,null,V.mode,X),X.ref=Ia(V,N,j),X.return=V,V=X)}return w(V);case _e:e:{for(fe=j.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(V,N.sibling),N=h(N,j.children||[]),N.return=V,V=N;break e}else{a(V,N);break}else s(V,N);N=N.sibling}N=vh(j,V.mode,X),N.return=V,V=N}return w(V);case st:return fe=j._init,at(V,N,fe(j._payload),X)}if(gr(j))return ie(V,N,j,X);if(he(j))return se(V,N,j,X);hu(V,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,N!==null&&N.tag===6?(a(V,N.sibling),N=h(N,j),N.return=V,V=N):(a(V,N),N=_h(j,V.mode,X),N.return=V,V=N),w(V)):a(V,N)}return at}var so=Sm(!0),Am=Sm(!1),fu=ii(null),pu=null,oo=null,Rd=null;function Pd(){Rd=oo=pu=null}function xd(r){var s=fu.current;Ye(fu),r._currentValue=s}function Nd(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function ao(r,s){pu=r,Rd=oo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Zt=!0),r.firstContext=null)}function _n(r){var s=r._currentValue;if(Rd!==r)if(r={context:r,memoizedValue:s,next:null},oo===null){if(pu===null)throw Error(t(308));oo=r,pu.dependencies={lanes:0,firstContext:r}}else oo=oo.next=r;return s}var Gi=null;function bd(r){Gi===null?Gi=[r]:Gi.push(r)}function km(r,s,a,d){var h=s.interleaved;return h===null?(a.next=a,bd(s)):(a.next=h.next,h.next=a),s.interleaved=a,Pr(r,d)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ai=!1;function Dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function li(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Ve&2)!==0){var h=d.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s,Pr(r,a)}return h=d.interleaved,h===null?(s.next=s,bd(d)):(s.next=h.next,h.next=s),d.interleaved=s,Pr(r,a)}function mu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Xr(r,a)}}function Rm(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?h=m=s:m=m.next=s}else h=m=s;a={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function gu(r,s,a,d){var h=r.updateQueue;ai=!1;var m=h.firstBaseUpdate,w=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var R=I,z=R.next;R.next=null,w===null?m=z:w.next=z,w=R;var K=r.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==w&&(I===null?K.firstBaseUpdate=z:I.next=z,K.lastBaseUpdate=R))}if(m!==null){var Q=h.baseState;w=0,K=z=R=null,I=m;do{var H=I.lane,te=I.eventTime;if((d&H)===H){K!==null&&(K=K.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=r,se=I;switch(H=s,te=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(te,Q,H);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,H=typeof ie=="function"?ie.call(te,Q,H):ie,H==null)break e;Q=ne({},Q,H);break e;case 2:ai=!0}}I.callback!==null&&I.lane!==0&&(r.flags|=64,H=h.effects,H===null?h.effects=[I]:H.push(I))}else te={eventTime:te,lane:H,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(z=K=te,R=Q):K=K.next=te,w|=H;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;H=I,I=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);if(K===null&&(R=Q),h.baseState=R,h.firstBaseUpdate=z,h.lastBaseUpdate=K,s=h.shared.interleaved,s!==null){h=s;do w|=h.lane,h=h.next;while(h!==s)}else m===null&&(h.shared.lanes=0);Xi|=w,r.lanes=w,r.memoizedState=Q}}function Pm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],h=d.callback;if(h!==null){if(d.callback=null,d=a,typeof h!="function")throw Error(t(191,h));h.call(d)}}}var Sa={},Zn=ii(Sa),Aa=ii(Sa),ka=ii(Sa);function Qi(r){if(r===Sa)throw Error(t(174));return r}function Od(r,s){switch(Ge(ka,s),Ge(Aa,r),Ge(Zn,Sa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ye(Zn),Ge(Zn,s)}function lo(){Ye(Zn),Ye(Aa),Ye(ka)}function xm(r){Qi(ka.current);var s=Qi(Zn.current),a=ft(s,r.type);s!==a&&(Ge(Aa,r),Ge(Zn,a))}function Md(r){Aa.current===r&&(Ye(Zn),Ye(Aa))}var et=ii(0);function yu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ld=[];function Vd(){for(var r=0;r<Ld.length;r++)Ld[r]._workInProgressVersionPrimary=null;Ld.length=0}var _u=ve.ReactCurrentDispatcher,Fd=ve.ReactCurrentBatchConfig,Yi=0,tt=null,mt=null,Et=null,vu=!1,Ca=!1,Ra=0,fE=0;function Lt(){throw Error(t(321))}function jd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!On(r[a],s[a]))return!1;return!0}function Ud(r,s,a,d,h,m){if(Yi=m,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,_u.current=r===null||r.memoizedState===null?yE:_E,r=a(d,h),Ca){m=0;do{if(Ca=!1,Ra=0,25<=m)throw Error(t(301));m+=1,Et=mt=null,s.updateQueue=null,_u.current=vE,r=a(d,h)}while(Ca)}if(_u.current=Tu,s=mt!==null&&mt.next!==null,Yi=0,Et=mt=tt=null,vu=!1,s)throw Error(t(300));return r}function zd(){var r=Ra!==0;return Ra=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?tt.memoizedState=Et=r:Et=Et.next=r,Et}function vn(){if(mt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=Et===null?tt.memoizedState:Et.next;if(s!==null)Et=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Et===null?tt.memoizedState=Et=r:Et=Et.next=r}return Et}function Pa(r,s){return typeof s=="function"?s(r):s}function Bd(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=mt,h=d.baseQueue,m=a.pending;if(m!==null){if(h!==null){var w=h.next;h.next=m.next,m.next=w}d.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,d=d.baseState;var I=w=null,R=null,z=m;do{var K=z.lane;if((Yi&K)===K)R!==null&&(R=R.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:r(d,z.action);else{var Q={lane:K,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};R===null?(I=R=Q,w=d):R=R.next=Q,tt.lanes|=K,Xi|=K}z=z.next}while(z!==null&&z!==m);R===null?w=d:R.next=I,On(d,s.memoizedState)||(Zt=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=R,a.lastRenderedState=d}if(r=a.interleaved,r!==null){h=r;do m=h.lane,tt.lanes|=m,Xi|=m,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function $d(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,h=a.pending,m=s.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do m=r(m,w.action),w=w.next;while(w!==h);On(m,s.memoizedState)||(Zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,d]}function Nm(){}function bm(r,s){var a=tt,d=vn(),h=s(),m=!On(d.memoizedState,h);if(m&&(d.memoizedState=h,Zt=!0),d=d.queue,Wd(Mm.bind(null,a,d,r),[r]),d.getSnapshot!==s||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,xa(9,Om.bind(null,a,d,h,s),void 0,null),Tt===null)throw Error(t(349));(Yi&30)!==0||Dm(a,s,h)}return h}function Dm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Om(r,s,a,d){s.value=a,s.getSnapshot=d,Lm(s)&&Vm(r)}function Mm(r,s,a){return a(function(){Lm(s)&&Vm(r)})}function Lm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!On(r,a)}catch{return!0}}function Vm(r){var s=Pr(r,1);s!==null&&jn(s,r,1,-1)}function Fm(r){var s=er();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:r},s.queue=r,r=r.dispatch=gE.bind(null,tt,r),[s.memoizedState,r]}function xa(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function jm(){return vn().memoizedState}function wu(r,s,a,d){var h=er();tt.flags|=r,h.memoizedState=xa(1|s,a,void 0,d===void 0?null:d)}function Eu(r,s,a,d){var h=vn();d=d===void 0?null:d;var m=void 0;if(mt!==null){var w=mt.memoizedState;if(m=w.destroy,d!==null&&jd(d,w.deps)){h.memoizedState=xa(s,a,m,d);return}}tt.flags|=r,h.memoizedState=xa(1|s,a,m,d)}function Um(r,s){return wu(8390656,8,r,s)}function Wd(r,s){return Eu(2048,8,r,s)}function zm(r,s){return Eu(4,2,r,s)}function Bm(r,s){return Eu(4,4,r,s)}function $m(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Wm(r,s,a){return a=a!=null?a.concat([r]):null,Eu(4,4,$m.bind(null,s,r),a)}function qd(){}function qm(r,s){var a=vn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&jd(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function Hm(r,s){var a=vn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&jd(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function Km(r,s,a){return(Yi&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(On(a,s)||(a=ji(),tt.lanes|=a,Xi|=a,r.baseState=!0),s)}function pE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var d=Fd.transition;Fd.transition={};try{r(!1),s()}finally{Ne=a,Fd.transition=d}}function Gm(){return vn().memoizedState}function mE(r,s,a){var d=hi(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Qm(r))Ym(s,a);else if(a=km(r,s,a,d),a!==null){var h=Kt();jn(a,r,d,h),Xm(a,s,d)}}function gE(r,s,a){var d=hi(r),h={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qm(r))Ym(s,h);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,I=m(w,a);if(h.hasEagerState=!0,h.eagerState=I,On(I,w)){var R=s.interleaved;R===null?(h.next=h,bd(s)):(h.next=R.next,R.next=h),s.interleaved=h;return}}catch{}finally{}a=km(r,s,h,d),a!==null&&(h=Kt(),jn(a,r,d,h),Xm(a,s,d))}}function Qm(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function Ym(r,s){Ca=vu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Xm(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Xr(r,a)}}var Tu={readContext:_n,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},yE={readContext:_n,useCallback:function(r,s){return er().memoizedState=[r,s===void 0?null:s],r},useContext:_n,useEffect:Um,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,wu(4194308,4,$m.bind(null,s,r),a)},useLayoutEffect:function(r,s){return wu(4194308,4,r,s)},useInsertionEffect:function(r,s){return wu(4,2,r,s)},useMemo:function(r,s){var a=er();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=er();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=mE.bind(null,tt,r),[d.memoizedState,r]},useRef:function(r){var s=er();return r={current:r},s.memoizedState=r},useState:Fm,useDebugValue:qd,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=Fm(!1),s=r[0];return r=pE.bind(null,r[1]),er().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=tt,h=er();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(Yi&30)!==0||Dm(d,s,a)}h.memoizedState=a;var m={value:a,getSnapshot:s};return h.queue=m,Um(Mm.bind(null,d,m,r),[r]),d.flags|=2048,xa(9,Om.bind(null,d,m,a,s),void 0,null),a},useId:function(){var r=er(),s=Tt.identifierPrefix;if(Ze){var a=Rr,d=Cr;a=(d&~(1<<32-Wt(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ra++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=fE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},_E={readContext:_n,useCallback:qm,useContext:_n,useEffect:Wd,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Hm,useReducer:Bd,useRef:jm,useState:function(){return Bd(Pa)},useDebugValue:qd,useDeferredValue:function(r){var s=vn();return Km(s,mt.memoizedState,r)},useTransition:function(){var r=Bd(Pa)[0],s=vn().memoizedState;return[r,s]},useMutableSource:Nm,useSyncExternalStore:bm,useId:Gm,unstable_isNewReconciler:!1},vE={readContext:_n,useCallback:qm,useContext:_n,useEffect:Wd,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Hm,useReducer:$d,useRef:jm,useState:function(){return $d(Pa)},useDebugValue:qd,useDeferredValue:function(r){var s=vn();return mt===null?s.memoizedState=r:Km(s,mt.memoizedState,r)},useTransition:function(){var r=$d(Pa)[0],s=vn().memoizedState;return[r,s]},useMutableSource:Nm,useSyncExternalStore:bm,useId:Gm,unstable_isNewReconciler:!1};function Ln(r,s){if(r&&r.defaultProps){s=ne({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Hd(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ne({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Iu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Kt(),h=hi(r),m=xr(d,h);m.payload=s,a!=null&&(m.callback=a),s=li(r,m,h),s!==null&&(jn(s,r,h,d),mu(s,r,h))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Kt(),h=hi(r),m=xr(d,h);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=li(r,m,h),s!==null&&(jn(s,r,h,d),mu(s,r,h))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),d=hi(r),h=xr(a,d);h.tag=2,s!=null&&(h.callback=s),s=li(r,h,d),s!==null&&(jn(s,r,d,a),mu(s,r,d))}};function Jm(r,s,a,d,h,m,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,m,w):s.prototype&&s.prototype.isPureReactComponent?!ga(a,d)||!ga(h,m):!0}function Zm(r,s,a){var d=!1,h=si,m=s.contextType;return typeof m=="object"&&m!==null?m=_n(m):(h=Jt(s)?qi:Mt.current,d=s.contextTypes,m=(d=d!=null)?to(r,h):si),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Iu,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=m),s}function eg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Iu.enqueueReplaceState(s,s.state,null)}function Kd(r,s,a,d){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},Dd(r);var m=s.contextType;typeof m=="object"&&m!==null?h.context=_n(m):(m=Jt(s)?qi:Mt.current,h.context=to(r,m)),h.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Hd(r,s,m,a),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&Iu.enqueueReplaceState(h,h.state,null),gu(r,a,h,d),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function uo(r,s){try{var a="",d=s;do a+=ke(d),d=d.return;while(d);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:h,digest:null}}function Gd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Qd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var wE=typeof WeakMap=="function"?WeakMap:Map;function tg(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){xu||(xu=!0,ch=d),Qd(r,s)},a}function ng(r,s,a){a=xr(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var h=s.value;a.payload=function(){return d(h)},a.callback=function(){Qd(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Qd(r,s),typeof d!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function rg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new wE;var h=new Set;d.set(s,h)}else h=d.get(s),h===void 0&&(h=new Set,d.set(s,h));h.has(a)||(h.add(a),r=OE.bind(null,r,s,a),s.then(r,r))}function ig(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function sg(r,s,a,d,h){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,li(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var EE=ve.ReactCurrentOwner,Zt=!1;function Ht(r,s,a,d){s.child=r===null?Am(s,null,a,d):so(s,r.child,a,d)}function og(r,s,a,d,h){a=a.render;var m=s.ref;return ao(s,h),d=Ud(r,s,a,d,m,h),a=zd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,Nr(r,s,h)):(Ze&&a&&Id(s),s.flags|=1,Ht(r,s,d,h),s.child)}function ag(r,s,a,d,h){if(r===null){var m=a.type;return typeof m=="function"&&!yh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,lg(r,s,m,d,h)):(r=Lu(a.type,null,d,s,s.mode,h),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&h)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(w,d)&&r.ref===s.ref)return Nr(r,s,h)}return s.flags|=1,r=pi(m,d),r.ref=s.ref,r.return=s,s.child=r}function lg(r,s,a,d,h){if(r!==null){var m=r.memoizedProps;if(ga(m,d)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=d=m,(r.lanes&h)!==0)(r.flags&131072)!==0&&(Zt=!0);else return s.lanes=r.lanes,Nr(r,s,h)}return Yd(r,s,a,d,h)}function ug(r,s,a){var d=s.pendingProps,h=d.children,m=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ho,cn),cn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(ho,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=m!==null?m.baseLanes:a,Ge(ho,cn),cn|=d}else m!==null?(d=m.baseLanes|a,s.memoizedState=null):d=a,Ge(ho,cn),cn|=d;return Ht(r,s,h,a),s.child}function cg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Yd(r,s,a,d,h){var m=Jt(a)?qi:Mt.current;return m=to(s,m),ao(s,h),a=Ud(r,s,a,d,m,h),d=zd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,Nr(r,s,h)):(Ze&&d&&Id(s),s.flags|=1,Ht(r,s,a,h),s.child)}function dg(r,s,a,d,h){if(Jt(a)){var m=!0;au(s)}else m=!1;if(ao(s,h),s.stateNode===null)Au(r,s),Zm(s,a,d),Kd(s,a,d,h),d=!0;else if(r===null){var w=s.stateNode,I=s.memoizedProps;w.props=I;var R=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=_n(z):(z=Jt(a)?qi:Mt.current,z=to(s,z));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof w.getSnapshotBeforeUpdate=="function";Q||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==d||R!==z)&&eg(s,w,d,z),ai=!1;var H=s.memoizedState;w.state=H,gu(s,d,w,h),R=s.memoizedState,I!==d||H!==R||Xt.current||ai?(typeof K=="function"&&(Hd(s,a,K,d),R=s.memoizedState),(I=ai||Jm(s,a,I,d,H,R,z))?(Q||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=R),w.props=d,w.state=R,w.context=z,d=I):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,Cm(r,s),I=s.memoizedProps,z=s.type===s.elementType?I:Ln(s.type,I),w.props=z,Q=s.pendingProps,H=w.context,R=a.contextType,typeof R=="object"&&R!==null?R=_n(R):(R=Jt(a)?qi:Mt.current,R=to(s,R));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Q||H!==R)&&eg(s,w,d,R),ai=!1,H=s.memoizedState,w.state=H,gu(s,d,w,h);var ie=s.memoizedState;I!==Q||H!==ie||Xt.current||ai?(typeof te=="function"&&(Hd(s,a,te,d),ie=s.memoizedState),(z=ai||Jm(s,a,z,d,H,ie,R)||!1)?(K||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ie,R),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ie,R)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ie),w.props=d,w.state=ie,w.context=R,d=z):(typeof w.componentDidUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),d=!1)}return Xd(r,s,a,d,m,h)}function Xd(r,s,a,d,h,m){cg(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return h&&gm(s,a,!1),Nr(r,s,m);d=s.stateNode,EE.current=s;var I=w&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=so(s,r.child,null,m),s.child=so(s,null,I,m)):Ht(r,s,I,m),s.memoizedState=d.state,h&&gm(s,a,!0),s.child}function hg(r){var s=r.stateNode;s.pendingContext?pm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&pm(r,s.context,!1),Od(r,s.containerInfo)}function fg(r,s,a,d,h){return io(),Cd(h),s.flags|=256,Ht(r,s,a,d),s.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function Zd(r){return{baseLanes:r,cachePool:null,transitions:null}}function pg(r,s,a){var d=s.pendingProps,h=et.current,m=!1,w=(s.flags&128)!==0,I;if((I=w)||(I=r!==null&&r.memoizedState===null?!1:(h&2)!==0),I?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),Ge(et,h&1),r===null)return kd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,r=d.fallback,m?(d=s.mode,m=s.child,w={mode:"hidden",children:w},(d&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=Vu(w,d,0,null),r=ts(r,d,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=Zd(a),s.memoizedState=Jd,r):eh(s,w));if(h=r.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return TE(r,s,w,d,I,h,a);if(m){m=d.fallback,w=s.mode,h=r.child,I=h.sibling;var R={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==h?(d=s.child,d.childLanes=0,d.pendingProps=R,s.deletions=null):(d=pi(h,R),d.subtreeFlags=h.subtreeFlags&14680064),I!==null?m=pi(I,m):(m=ts(m,w,a,null),m.flags|=2),m.return=s,d.return=s,d.sibling=m,s.child=d,d=m,m=s.child,w=r.child.memoizedState,w=w===null?Zd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=r.childLanes&~a,s.memoizedState=Jd,d}return m=r.child,r=m.sibling,d=pi(m,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function eh(r,s){return s=Vu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Su(r,s,a,d){return d!==null&&Cd(d),so(s,r.child,null,a),r=eh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function TE(r,s,a,d,h,m,w){if(a)return s.flags&256?(s.flags&=-257,d=Gd(Error(t(422))),Su(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=d.fallback,h=s.mode,d=Vu({mode:"visible",children:d.children},h,0,null),m=ts(m,h,w,null),m.flags|=2,d.return=s,m.return=s,d.sibling=m,s.child=d,(s.mode&1)!==0&&so(s,r.child,null,w),s.child.memoizedState=Zd(w),s.memoizedState=Jd,m);if((s.mode&1)===0)return Su(r,s,w,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var I=d.dgst;return d=I,m=Error(t(419)),d=Gd(m,d,void 0),Su(r,s,w,d)}if(I=(w&r.childLanes)!==0,Zt||I){if(d=Tt,d!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(d.suspendedLanes|w))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Pr(r,h),jn(d,r,h,-1))}return gh(),d=Gd(Error(t(421))),Su(r,s,w,d)}return h.data==="$?"?(s.flags|=128,s.child=r.child,s=ME.bind(null,r),h._reactRetry=s,null):(r=m.treeContext,un=ri(h.nextSibling),ln=s,Ze=!0,Mn=null,r!==null&&(gn[yn++]=Cr,gn[yn++]=Rr,gn[yn++]=Hi,Cr=r.id,Rr=r.overflow,Hi=s),s=eh(s,d.children),s.flags|=4096,s)}function mg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Nd(r.return,s,a)}function th(r,s,a,d,h){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:h}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=d,m.tail=a,m.tailMode=h)}function gg(r,s,a){var d=s.pendingProps,h=d.revealOrder,m=d.tail;if(Ht(r,s,d.children,a),d=et.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&mg(r,a,s);else if(r.tag===19)mg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Ge(et,d),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)r=a.alternate,r!==null&&yu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),th(s,!1,h,a,m);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(r=h.alternate,r!==null&&yu(r)===null){s.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}th(s,!0,a,null,m);break;case"together":th(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Au(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Xi|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=pi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=pi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function IE(r,s,a){switch(s.tag){case 3:hg(s),io();break;case 5:xm(s);break;case 1:Jt(s.type)&&au(s);break;case 4:Od(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,h=s.memoizedProps.value;Ge(fu,d._currentValue),d._currentValue=h;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ge(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?pg(r,s,a):(Ge(et,et.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);Ge(et,et.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return gg(r,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ge(et,et.current),d)break;return null;case 22:case 23:return s.lanes=0,ug(r,s,a)}return Nr(r,s,a)}var yg,nh,_g,vg;yg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nh=function(){},_g=function(r,s,a,d){var h=r.memoizedProps;if(h!==d){r=s.stateNode,Qi(Zn.current);var m=null;switch(a){case"input":h=Ri(r,h),d=Ri(r,d),m=[];break;case"select":h=ne({},h,{value:void 0}),d=ne({},d,{value:void 0}),m=[];break;case"textarea":h=qo(r,h),d=qo(r,d),m=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=iu)}Xo(a,d);var w;a=null;for(z in h)if(!d.hasOwnProperty(z)&&h.hasOwnProperty(z)&&h[z]!=null)if(z==="style"){var I=h[z];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in d){var R=d[z];if(I=h?.[z],d.hasOwnProperty(z)&&R!==I&&(R!=null||I!=null))if(z==="style")if(I){for(w in I)!I.hasOwnProperty(w)||R&&R.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in R)R.hasOwnProperty(w)&&I[w]!==R[w]&&(a||(a={}),a[w]=R[w])}else a||(m||(m=[]),m.push(z,a)),a=R;else z==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(m=m||[]).push(z,R)):z==="children"?typeof R!="string"&&typeof R!="number"||(m=m||[]).push(z,""+R):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(R!=null&&z==="onScroll"&&Qe("scroll",r),m||I===R||(m=[])):(m=m||[]).push(z,R))}a&&(m=m||[]).push("style",a);var z=m;(s.updateQueue=z)&&(s.flags|=4)}},vg=function(r,s,a,d){a!==d&&(s.flags|=4)};function Na(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function SE(r,s,a){var d=s.pendingProps;switch(Sd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Jt(s.type)&&ou(),Vt(s),null;case 3:return d=s.stateNode,lo(),Ye(Xt),Ye(Mt),Vd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(du(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mn!==null&&(fh(Mn),Mn=null))),nh(r,s),Vt(s),null;case 5:Md(s);var h=Qi(ka.current);if(a=s.type,r!==null&&s.stateNode!=null)_g(r,s,a,d,h),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=Qi(Zn.current),du(s)){d=s.stateNode,a=s.type;var m=s.memoizedProps;switch(d[Jn]=s,d[Ea]=m,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",d),Qe("close",d);break;case"iframe":case"object":case"embed":Qe("load",d);break;case"video":case"audio":for(h=0;h<_a.length;h++)Qe(_a[h],d);break;case"source":Qe("error",d);break;case"img":case"image":case"link":Qe("error",d),Qe("load",d);break;case"details":Qe("toggle",d);break;case"input":Is(d,m),Qe("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",d);break;case"textarea":As(d,m),Qe("invalid",d)}Xo(a,m),h=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?d.textContent!==I&&(m.suppressHydrationWarning!==!0&&ru(d.textContent,I,r),h=["children",I]):typeof I=="number"&&d.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ru(d.textContent,I,r),h=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Qe("scroll",d)}switch(a){case"input":mr(d),Pl(d,m,!0);break;case"textarea":mr(d),Ho(d);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(d.onclick=iu)}d=h,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(a,{is:d.is}):(r=w.createElement(a),a==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,a),r[Jn]=s,r[Ea]=d,yg(r,s,!1,!1),s.stateNode=r;e:{switch(w=Jo(a,d),a){case"dialog":Qe("cancel",r),Qe("close",r),h=d;break;case"iframe":case"object":case"embed":Qe("load",r),h=d;break;case"video":case"audio":for(h=0;h<_a.length;h++)Qe(_a[h],r);h=d;break;case"source":Qe("error",r),h=d;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),h=d;break;case"details":Qe("toggle",r),h=d;break;case"input":Is(r,d),h=Ri(r,d),Qe("invalid",r);break;case"option":h=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},h=ne({},d,{value:void 0}),Qe("invalid",r);break;case"textarea":As(r,d),h=qo(r,d),Qe("invalid",r);break;default:h=d}Xo(a,h),I=h;for(m in I)if(I.hasOwnProperty(m)){var R=I[m];m==="style"?Qo(r,R):m==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Ko(r,R)):m==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Hr(r,R):typeof R=="number"&&Hr(r,""+R):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?R!=null&&m==="onScroll"&&Qe("scroll",r):R!=null&&me(r,m,R,w))}switch(a){case"input":mr(r),Pl(r,d,!1);break;case"textarea":mr(r),Ho(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Be(d.value));break;case"select":r.multiple=!!d.multiple,m=d.value,m!=null?yr(r,!!d.multiple,m,!1):d.defaultValue!=null&&yr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=iu)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)vg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=Qi(ka.current),Qi(Zn.current),du(s)){if(d=s.stateNode,a=s.memoizedProps,d[Jn]=s,(m=d.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:ru(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ru(d.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Jn]=s,s.stateNode=d}return Vt(s),null;case 13:if(Ye(et),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&un!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Tm(),io(),s.flags|=98560,m=!1;else if(m=du(s),d!==null&&d.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Jn]=s}else io(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vt(s),m=!1}else Mn!==null&&(fh(Mn),Mn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(et.current&1)!==0?gt===0&&(gt=3):gh())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return lo(),nh(r,s),r===null&&va(s.stateNode.containerInfo),Vt(s),null;case 10:return xd(s.type._context),Vt(s),null;case 17:return Jt(s.type)&&ou(),Vt(s),null;case 19:if(Ye(et),m=s.memoizedState,m===null)return Vt(s),null;if(d=(s.flags&128)!==0,w=m.rendering,w===null)if(d)Na(m,!1);else{if(gt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=yu(r),w!==null){for(s.flags|=128,Na(m,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)m=a,r=d,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,r=w.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(et,et.current&1|2),s.child}r=r.sibling}m.tail!==null&&Ke()>fo&&(s.flags|=128,d=!0,Na(m,!1),s.lanes=4194304)}else{if(!d)if(r=yu(w),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Na(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ze)return Vt(s),null}else 2*Ke()-m.renderingStartTime>fo&&a!==1073741824&&(s.flags|=128,d=!0,Na(m,!1),s.lanes=4194304);m.isBackwards?(w.sibling=s.child,s.child=w):(a=m.last,a!==null?a.sibling=w:s.child=w,m.last=w)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ke(),s.sibling=null,a=et.current,Ge(et,d?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return mh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function AE(r,s){switch(Sd(s),s.tag){case 1:return Jt(s.type)&&ou(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return lo(),Ye(Xt),Ye(Mt),Vd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Md(s),null;case 13:if(Ye(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));io()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(et),null;case 4:return lo(),null;case 10:return xd(s.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var ku=!1,Ft=!1,kE=typeof WeakSet=="function"?WeakSet:Set,re=null;function co(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){rt(r,s,d)}else a.current=null}function rh(r,s,a){try{a()}catch(d){rt(r,s,d)}}var wg=!1;function CE(r,s){if(md=ei,r=Jp(),ad(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var h=d.anchorOffset,m=d.focusNode;d=d.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,R=-1,z=0,K=0,Q=r,H=null;t:for(;;){for(var te;Q!==a||h!==0&&Q.nodeType!==3||(I=w+h),Q!==m||d!==0&&Q.nodeType!==3||(R=w+d),Q.nodeType===3&&(w+=Q.nodeValue.length),(te=Q.firstChild)!==null;)H=Q,Q=te;for(;;){if(Q===r)break t;if(H===a&&++z===h&&(I=w),H===m&&++K===d&&(R=w),(te=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=te}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:r,selectionRange:a},ei=!1,re=s;re!==null;)if(s=re,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,re=r;else for(;re!==null;){s=re;try{var ie=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,at=ie.memoizedState,V=s.stateNode,N=V.getSnapshotBeforeUpdate(s.elementType===s.type?se:Ln(s.type,se),at);V.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,re=r;break}re=s.return}return ie=wg,wg=!1,ie}function ba(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&r)===r){var m=h.destroy;h.destroy=void 0,m!==void 0&&rh(s,a,m)}h=h.next}while(h!==d)}}function Cu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function ih(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Eg(r){var s=r.alternate;s!==null&&(r.alternate=null,Eg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Jn],delete s[Ea],delete s[wd],delete s[uE],delete s[cE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Tg(r){return r.tag===5||r.tag===3||r.tag===4}function Ig(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Tg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function sh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=iu));else if(d!==4&&(r=r.child,r!==null))for(sh(r,s,a),r=r.sibling;r!==null;)sh(r,s,a),r=r.sibling}function oh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(oh(r,s,a),r=r.sibling;r!==null;)oh(r,s,a),r=r.sibling}var Rt=null,Vn=!1;function ui(r,s,a){for(a=a.child;a!==null;)Sg(r,s,a),a=a.sibling}function Sg(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Vi,a)}catch{}switch(a.tag){case 5:Ft||co(a,s);case 6:var d=Rt,h=Vn;Rt=null,ui(r,s,a),Rt=d,Vn=h,Rt!==null&&(Vn?(r=Rt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Vn?(r=Rt,a=a.stateNode,r.nodeType===8?vd(r.parentNode,a):r.nodeType===1&&vd(r,a),bn(r)):vd(Rt,a.stateNode));break;case 4:d=Rt,h=Vn,Rt=a.stateNode.containerInfo,Vn=!0,ui(r,s,a),Rt=d,Vn=h;break;case 0:case 11:case 14:case 15:if(!Ft&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var m=h,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&rh(a,s,w),h=h.next}while(h!==d)}ui(r,s,a);break;case 1:if(!Ft&&(co(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(I){rt(a,s,I)}ui(r,s,a);break;case 21:ui(r,s,a);break;case 22:a.mode&1?(Ft=(d=Ft)||a.memoizedState!==null,ui(r,s,a),Ft=d):ui(r,s,a);break;default:ui(r,s,a)}}function Ag(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new kE),s.forEach(function(d){var h=LE.bind(null,r,d);a.has(d)||(a.add(d),d.then(h,h))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var h=a[d];try{var m=r,w=s,I=w;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,Vn=!1;break e;case 3:Rt=I.stateNode.containerInfo,Vn=!0;break e;case 4:Rt=I.stateNode.containerInfo,Vn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));Sg(m,w,h),Rt=null,Vn=!1;var R=h.alternate;R!==null&&(R.return=null),h.return=null}catch(z){rt(h,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)kg(s,r),s=s.sibling}function kg(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),tr(r),d&4){try{ba(3,r,r.return),Cu(3,r)}catch(se){rt(r,r.return,se)}try{ba(5,r,r.return)}catch(se){rt(r,r.return,se)}}break;case 1:Fn(s,r),tr(r),d&512&&a!==null&&co(a,a.return);break;case 5:if(Fn(s,r),tr(r),d&512&&a!==null&&co(a,a.return),r.flags&32){var h=r.stateNode;try{Hr(h,"")}catch(se){rt(r,r.return,se)}}if(d&4&&(h=r.stateNode,h!=null)){var m=r.memoizedProps,w=a!==null?a.memoizedProps:m,I=r.type,R=r.updateQueue;if(r.updateQueue=null,R!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&$o(h,m),Jo(I,w);var z=Jo(I,m);for(w=0;w<R.length;w+=2){var K=R[w],Q=R[w+1];K==="style"?Qo(h,Q):K==="dangerouslySetInnerHTML"?Ko(h,Q):K==="children"?Hr(h,Q):me(h,K,Q,z)}switch(I){case"input":Wo(h,m);break;case"textarea":ks(h,m);break;case"select":var H=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?yr(h,!!m.multiple,te,!1):H!==!!m.multiple&&(m.defaultValue!=null?yr(h,!!m.multiple,m.defaultValue,!0):yr(h,!!m.multiple,m.multiple?[]:"",!1))}h[Ea]=m}catch(se){rt(r,r.return,se)}}break;case 6:if(Fn(s,r),tr(r),d&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,m=r.memoizedProps;try{h.nodeValue=m}catch(se){rt(r,r.return,se)}}break;case 3:if(Fn(s,r),tr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{bn(s.containerInfo)}catch(se){rt(r,r.return,se)}break;case 4:Fn(s,r),tr(r);break;case 13:Fn(s,r),tr(r),h=r.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(uh=Ke())),d&4&&Ag(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(z=Ft)||K,Fn(s,r),Ft=z):Fn(s,r),tr(r),d&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!K&&(r.mode&1)!==0)for(re=r,K=r.child;K!==null;){for(Q=re=K;re!==null;){switch(H=re,te=H.child,H.tag){case 0:case 11:case 14:case 15:ba(4,H,H.return);break;case 1:co(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){d=H,a=H.return;try{s=d,ie.props=s.memoizedProps,ie.state=s.memoizedState,ie.componentWillUnmount()}catch(se){rt(d,a,se)}}break;case 5:co(H,H.return);break;case 22:if(H.memoizedState!==null){Pg(Q);continue}}te!==null?(te.return=H,re=te):Pg(Q)}K=K.sibling}e:for(K=null,Q=r;;){if(Q.tag===5){if(K===null){K=Q;try{h=Q.stateNode,z?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Q.stateNode,R=Q.memoizedProps.style,w=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=Go("display",w))}catch(se){rt(r,r.return,se)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=z?"":Q.memoizedProps}catch(se){rt(r,r.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===r)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===r)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===r)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Fn(s,r),tr(r),d&4&&Ag(r);break;case 21:break;default:Fn(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Tg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(Hr(h,""),d.flags&=-33);var m=Ig(r);oh(r,m,h);break;case 3:case 4:var w=d.stateNode.containerInfo,I=Ig(r);sh(r,I,w);break;default:throw Error(t(161))}}catch(R){rt(r,r.return,R)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function RE(r,s,a){re=r,Cg(r)}function Cg(r,s,a){for(var d=(r.mode&1)!==0;re!==null;){var h=re,m=h.child;if(h.tag===22&&d){var w=h.memoizedState!==null||ku;if(!w){var I=h.alternate,R=I!==null&&I.memoizedState!==null||Ft;I=ku;var z=Ft;if(ku=w,(Ft=R)&&!z)for(re=h;re!==null;)w=re,R=w.child,w.tag===22&&w.memoizedState!==null?xg(h):R!==null?(R.return=w,re=R):xg(h);for(;m!==null;)re=m,Cg(m),m=m.sibling;re=h,ku=I,Ft=z}Rg(r)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,re=m):Rg(r)}}function Rg(r){for(;re!==null;){var s=re;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Cu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ft)if(a===null)d.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:Ln(s.type,a.memoizedProps);d.componentDidUpdate(h,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Pm(s,m,d);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Pm(s,w,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var R=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var K=z.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&bn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&ih(s)}catch(H){rt(s,s.return,H)}}if(s===r){re=null;break}if(a=s.sibling,a!==null){a.return=s.return,re=a;break}re=s.return}}function Pg(r){for(;re!==null;){var s=re;if(s===r){re=null;break}var a=s.sibling;if(a!==null){a.return=s.return,re=a;break}re=s.return}}function xg(r){for(;re!==null;){var s=re;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Cu(4,s)}catch(R){rt(s,a,R)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var h=s.return;try{d.componentDidMount()}catch(R){rt(s,h,R)}}var m=s.return;try{ih(s)}catch(R){rt(s,m,R)}break;case 5:var w=s.return;try{ih(s)}catch(R){rt(s,w,R)}}}catch(R){rt(s,s.return,R)}if(s===r){re=null;break}var I=s.sibling;if(I!==null){I.return=s.return,re=I;break}re=s.return}}var PE=Math.ceil,Ru=ve.ReactCurrentDispatcher,ah=ve.ReactCurrentOwner,wn=ve.ReactCurrentBatchConfig,Ve=0,Tt=null,ct=null,Pt=0,cn=0,ho=ii(0),gt=0,Da=null,Xi=0,Pu=0,lh=0,Oa=null,en=null,uh=0,fo=1/0,br=null,xu=!1,ch=null,ci=null,Nu=!1,di=null,bu=0,Ma=0,dh=null,Du=-1,Ou=0;function Kt(){return(Ve&6)!==0?Ke():Du!==-1?Du:Du=Ke()}function hi(r){return(r.mode&1)===0?1:(Ve&2)!==0&&Pt!==0?Pt&-Pt:hE.transition!==null?(Ou===0&&(Ou=ji()),Ou):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ua(r.type)),r)}function jn(r,s,a,d){if(50<Ma)throw Ma=0,dh=null,Error(t(185));Yr(r,a,d),((Ve&2)===0||r!==Tt)&&(r===Tt&&((Ve&2)===0&&(Pu|=a),gt===4&&fi(r,Pt)),tn(r,d),a===1&&Ve===0&&(s.mode&1)===0&&(fo=Ke()+500,lu&&oi()))}function tn(r,s){var a=r.callbackNode;wr(r,s);var d=Fi(r,r===Tt?Pt:0);if(d===0)a!==null&&ia(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&ia(a),s===1)r.tag===0?dE(bg.bind(null,r)):ym(bg.bind(null,r)),aE(function(){(Ve&6)===0&&oi()}),a=null;else{switch(Jr(d)){case 1:a=Li;break;case 4:a=Kr;break;case 16:a=fn;break;case 536870912:a=Ol;break;default:a=fn}a=Ug(a,Ng.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Ng(r,s){if(Du=-1,Ou=0,(Ve&6)!==0)throw Error(t(327));var a=r.callbackNode;if(po()&&r.callbackNode!==a)return null;var d=Fi(r,r===Tt?Pt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Mu(r,d);else{s=d;var h=Ve;Ve|=2;var m=Og();(Tt!==r||Pt!==s)&&(br=null,fo=Ke()+500,Zi(r,s));do try{bE();break}catch(I){Dg(r,I)}while(!0);Pd(),Ru.current=m,Ve=h,ct!==null?s=0:(Tt=null,Pt=0,s=gt)}if(s!==0){if(s===2&&(h=sn(r),h!==0&&(d=h,s=hh(r,h))),s===1)throw a=Da,Zi(r,0),fi(r,d),tn(r,Ke()),a;if(s===6)fi(r,d);else{if(h=r.current.alternate,(d&30)===0&&!xE(h)&&(s=Mu(r,d),s===2&&(m=sn(r),m!==0&&(d=m,s=hh(r,m))),s===1))throw a=Da,Zi(r,0),fi(r,d),tn(r,Ke()),a;switch(r.finishedWork=h,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:es(r,en,br);break;case 3:if(fi(r,d),(d&130023424)===d&&(s=uh+500-Ke(),10<s)){if(Fi(r,0)!==0)break;if(h=r.suspendedLanes,(h&d)!==d){Kt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=_d(es.bind(null,r,en,br),s);break}es(r,en,br);break;case 4:if(fi(r,d),(d&4194240)===d)break;for(s=r.eventTimes,h=-1;0<d;){var w=31-Wt(d);m=1<<w,w=s[w],w>h&&(h=w),d&=~m}if(d=h,d=Ke()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*PE(d/1960))-d,10<d){r.timeoutHandle=_d(es.bind(null,r,en,br),d);break}es(r,en,br);break;case 5:es(r,en,br);break;default:throw Error(t(329))}}}return tn(r,Ke()),r.callbackNode===a?Ng.bind(null,r):null}function hh(r,s){var a=Oa;return r.current.memoizedState.isDehydrated&&(Zi(r,s).flags|=256),r=Mu(r,s),r!==2&&(s=en,en=a,s!==null&&fh(s)),r}function fh(r){en===null?en=r:en.push.apply(en,r)}function xE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var h=a[d],m=h.getSnapshot;h=h.value;try{if(!On(m(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fi(r,s){for(s&=~lh,s&=~Pu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),d=1<<a;r[a]=-1,s&=~d}}function bg(r){if((Ve&6)!==0)throw Error(t(327));po();var s=Fi(r,0);if((s&1)===0)return tn(r,Ke()),null;var a=Mu(r,s);if(r.tag!==0&&a===2){var d=sn(r);d!==0&&(s=d,a=hh(r,d))}if(a===1)throw a=Da,Zi(r,0),fi(r,s),tn(r,Ke()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,es(r,en,br),tn(r,Ke()),null}function ph(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(fo=Ke()+500,lu&&oi())}}function Ji(r){di!==null&&di.tag===0&&(Ve&6)===0&&po();var s=Ve;Ve|=1;var a=wn.transition,d=Ne;try{if(wn.transition=null,Ne=1,r)return r()}finally{Ne=d,wn.transition=a,Ve=s,(Ve&6)===0&&oi()}}function mh(){cn=ho.current,Ye(ho)}function Zi(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,oE(a)),ct!==null)for(a=ct.return;a!==null;){var d=a;switch(Sd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&ou();break;case 3:lo(),Ye(Xt),Ye(Mt),Vd();break;case 5:Md(d);break;case 4:lo();break;case 13:Ye(et);break;case 19:Ye(et);break;case 10:xd(d.type._context);break;case 22:case 23:mh()}a=a.return}if(Tt=r,ct=r=pi(r.current,null),Pt=cn=s,gt=0,Da=null,lh=Pu=Xi=0,en=Oa=null,Gi!==null){for(s=0;s<Gi.length;s++)if(a=Gi[s],d=a.interleaved,d!==null){a.interleaved=null;var h=d.next,m=a.pending;if(m!==null){var w=m.next;m.next=h,d.next=w}a.pending=d}Gi=null}return r}function Dg(r,s){do{var a=ct;try{if(Pd(),_u.current=Tu,vu){for(var d=tt.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}vu=!1}if(Yi=0,Et=mt=tt=null,Ca=!1,Ra=0,ah.current=null,a===null||a.return===null){gt=1,Da=s,ct=null;break}e:{var m=r,w=a.return,I=a,R=s;if(s=Pt,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var z=R,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=K.alternate;H?(K.updateQueue=H.updateQueue,K.memoizedState=H.memoizedState,K.lanes=H.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=ig(w);if(te!==null){te.flags&=-257,sg(te,w,I,m,s),te.mode&1&&rg(m,z,s),s=te,R=z;var ie=s.updateQueue;if(ie===null){var se=new Set;se.add(R),s.updateQueue=se}else ie.add(R);break e}else{if((s&1)===0){rg(m,z,s),gh();break e}R=Error(t(426))}}else if(Ze&&I.mode&1){var at=ig(w);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),sg(at,w,I,m,s),Cd(uo(R,I));break e}}m=R=uo(R,I),gt!==4&&(gt=2),Oa===null?Oa=[m]:Oa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var V=tg(m,R,s);Rm(m,V);break e;case 1:I=R;var N=m.type,j=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ci===null||!ci.has(j)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=ng(m,I,s);Rm(m,X);break e}}m=m.return}while(m!==null)}Lg(a)}catch(le){s=le,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Og(){var r=Ru.current;return Ru.current=Tu,r===null?Tu:r}function gh(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(Xi&268435455)===0&&(Pu&268435455)===0||fi(Tt,Pt)}function Mu(r,s){var a=Ve;Ve|=2;var d=Og();(Tt!==r||Pt!==s)&&(br=null,Zi(r,s));do try{NE();break}catch(h){Dg(r,h)}while(!0);if(Pd(),Ve=a,Ru.current=d,ct!==null)throw Error(t(261));return Tt=null,Pt=0,gt}function NE(){for(;ct!==null;)Mg(ct)}function bE(){for(;ct!==null&&!bl();)Mg(ct)}function Mg(r){var s=jg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Lg(r):ct=s,ah.current=null}function Lg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=SE(a,s,cn),a!==null){ct=a;return}}else{if(a=AE(a,s),a!==null){a.flags&=32767,ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ct=null;return}}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);gt===0&&(gt=5)}function es(r,s,a){var d=Ne,h=wn.transition;try{wn.transition=null,Ne=1,DE(r,s,a,d)}finally{wn.transition=h,Ne=d}return null}function DE(r,s,a,d){do po();while(di!==null);if((Ve&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(qe(r,m),r===Tt&&(ct=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nu||(Nu=!0,Ug(fn,function(){return po(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=wn.transition,wn.transition=null;var w=Ne;Ne=1;var I=Ve;Ve|=4,ah.current=null,CE(r,a),kg(a,r),Zw(gd),ei=!!md,gd=md=null,r.current=a,RE(a),Zc(),Ve=I,Ne=w,wn.transition=m}else r.current=a;if(Nu&&(Nu=!1,di=r,bu=h),m=r.pendingLanes,m===0&&(ci=null),Ml(a.stateNode),tn(r,Ke()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)h=s[a],d(h.value,{componentStack:h.stack,digest:h.digest});if(xu)throw xu=!1,r=ch,ch=null,r;return(bu&1)!==0&&r.tag!==0&&po(),m=r.pendingLanes,(m&1)!==0?r===dh?Ma++:(Ma=0,dh=r):Ma=0,oi(),null}function po(){if(di!==null){var r=Jr(bu),s=wn.transition,a=Ne;try{if(wn.transition=null,Ne=16>r?16:r,di===null)var d=!1;else{if(r=di,di=null,bu=0,(Ve&6)!==0)throw Error(t(331));var h=Ve;for(Ve|=4,re=r.current;re!==null;){var m=re,w=m.child;if((re.flags&16)!==0){var I=m.deletions;if(I!==null){for(var R=0;R<I.length;R++){var z=I[R];for(re=z;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:ba(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var H=K.sibling,te=K.return;if(Eg(K),K===z){re=null;break}if(H!==null){H.return=te,re=H;break}re=te}}}var ie=m.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var at=se.sibling;se.sibling=null,se=at}while(se!==null)}}re=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,re=w;else e:for(;re!==null;){if(m=re,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ba(9,m,m.return)}var V=m.sibling;if(V!==null){V.return=m.return,re=V;break e}re=m.return}}var N=r.current;for(re=N;re!==null;){w=re;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,re=j;else e:for(w=N;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Cu(9,I)}}catch(le){rt(I,I.return,le)}if(I===w){re=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,re=X;break e}re=I.return}}if(Ve=h,oi(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Vi,r)}catch{}d=!0}return d}finally{Ne=a,wn.transition=s}}return!1}function Vg(r,s,a){s=uo(a,s),s=tg(r,s,1),r=li(r,s,1),s=Kt(),r!==null&&(Yr(r,1,s),tn(r,s))}function rt(r,s,a){if(r.tag===3)Vg(r,r,a);else for(;s!==null;){if(s.tag===3){Vg(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ci===null||!ci.has(d))){r=uo(a,r),r=ng(s,r,1),s=li(s,r,1),r=Kt(),s!==null&&(Yr(s,1,r),tn(s,r));break}}s=s.return}}function OE(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Pt&a)===a&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>Ke()-uh?Zi(r,0):lh|=a),tn(r,s)}function Fg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ls,Ls<<=1,(Ls&130023424)===0&&(Ls=4194304)));var a=Kt();r=Pr(r,s),r!==null&&(Yr(r,s,a),tn(r,a))}function ME(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Fg(r,a)}function LE(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Fg(r,a)}var jg;jg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Zt=!1,IE(r,s,a);Zt=(r.flags&131072)!==0}else Zt=!1,Ze&&(s.flags&1048576)!==0&&_m(s,cu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Au(r,s),r=s.pendingProps;var h=to(s,Mt.current);ao(s,a),h=Ud(null,s,d,r,h,a);var m=zd();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(d)?(m=!0,au(s)):m=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Dd(s),h.updater=Iu,s.stateNode=h,h._reactInternals=s,Kd(s,d,r,a),s=Xd(null,s,d,!0,m,a)):(s.tag=0,Ze&&m&&Id(s),Ht(null,s,h,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Au(r,s),r=s.pendingProps,h=d._init,d=h(d._payload),s.type=d,h=s.tag=FE(d),r=Ln(d,r),h){case 0:s=Yd(null,s,d,r,a);break e;case 1:s=dg(null,s,d,r,a);break e;case 11:s=og(null,s,d,r,a);break e;case 14:s=ag(null,s,d,Ln(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Ln(d,h),Yd(r,s,d,h,a);case 1:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Ln(d,h),dg(r,s,d,h,a);case 3:e:{if(hg(s),r===null)throw Error(t(387));d=s.pendingProps,m=s.memoizedState,h=m.element,Cm(r,s),gu(s,d,null,a);var w=s.memoizedState;if(d=w.element,m.isDehydrated)if(m={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){h=uo(Error(t(423)),s),s=fg(r,s,d,a,h);break e}else if(d!==h){h=uo(Error(t(424)),s),s=fg(r,s,d,a,h);break e}else for(un=ri(s.stateNode.containerInfo.firstChild),ln=s,Ze=!0,Mn=null,a=Am(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(io(),d===h){s=Nr(r,s,a);break e}Ht(r,s,d,a)}s=s.child}return s;case 5:return xm(s),r===null&&kd(s),d=s.type,h=s.pendingProps,m=r!==null?r.memoizedProps:null,w=h.children,yd(d,h)?w=null:m!==null&&yd(d,m)&&(s.flags|=32),cg(r,s),Ht(r,s,w,a),s.child;case 6:return r===null&&kd(s),null;case 13:return pg(r,s,a);case 4:return Od(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=so(s,null,d,a):Ht(r,s,d,a),s.child;case 11:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Ln(d,h),og(r,s,d,h,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,h=s.pendingProps,m=s.memoizedProps,w=h.value,Ge(fu,d._currentValue),d._currentValue=w,m!==null)if(On(m.value,w)){if(m.children===h.children&&!Xt.current){s=Nr(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var R=I.firstContext;R!==null;){if(R.context===d){if(m.tag===1){R=xr(-1,a&-a),R.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var K=z.pending;K===null?R.next=R:(R.next=K.next,K.next=R),z.pending=R}}m.lanes|=a,R=m.alternate,R!==null&&(R.lanes|=a),Nd(m.return,a,s),I.lanes|=a;break}R=R.next}}else if(m.tag===10)w=m.type===s.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Nd(w,a,s),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===s){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Ht(r,s,h.children,a),s=s.child}return s;case 9:return h=s.type,d=s.pendingProps.children,ao(s,a),h=_n(h),d=d(h),s.flags|=1,Ht(r,s,d,a),s.child;case 14:return d=s.type,h=Ln(d,s.pendingProps),h=Ln(d.type,h),ag(r,s,d,h,a);case 15:return lg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Ln(d,h),Au(r,s),s.tag=1,Jt(d)?(r=!0,au(s)):r=!1,ao(s,a),Zm(s,d,h),Kd(s,d,h,a),Xd(null,s,d,!0,r,a);case 19:return gg(r,s,a);case 22:return ug(r,s,a)}throw Error(t(156,s.tag))};function Ug(r,s){return Os(r,s)}function VE(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,d){return new VE(r,s,a,d)}function yh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function FE(r){if(typeof r=="function")return yh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===Xe)return 14}return 2}function pi(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Lu(r,s,a,d,h,m){var w=2;if(d=r,typeof r=="function")yh(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return ts(a.children,h,m,s);case T:w=8,h|=8;break;case k:return r=En(12,a,s,h|2),r.elementType=k,r.lanes=m,r;case A:return r=En(13,a,s,h),r.elementType=A,r.lanes=m,r;case Le:return r=En(19,a,s,h),r.elementType=Le,r.lanes=m,r;case Pe:return Vu(a,h,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case D:w=9;break e;case O:w=11;break e;case Xe:w=14;break e;case st:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(w,a,s,h),s.elementType=r,s.type=d,s.lanes=m,s}function ts(r,s,a,d){return r=En(7,r,d,s),r.lanes=a,r}function Vu(r,s,a,d){return r=En(22,r,d,s),r.elementType=Pe,r.lanes=a,r.stateNode={isHidden:!1},r}function _h(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function vh(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function jE(r,s,a,d,h){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function wh(r,s,a,d,h,m,w,I,R){return r=new jE(r,s,a,I,R),s===1?(s=1,m===!0&&(s|=8)):s=0,m=En(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(m),r}function UE(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function zg(r){if(!r)return si;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return mm(r,a,s)}return s}function Bg(r,s,a,d,h,m,w,I,R){return r=wh(a,d,!0,r,h,m,w,I,R),r.context=zg(null),a=r.current,d=Kt(),h=hi(a),m=xr(d,h),m.callback=s??null,li(a,m,h),r.current.lanes=h,Yr(r,h,d),tn(r,d),r}function Fu(r,s,a,d){var h=s.current,m=Kt(),w=hi(h);return a=zg(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(m,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=li(h,s,w),r!==null&&(jn(r,h,w,m),mu(r,h,w)),w}function ju(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function $g(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Eh(r,s){$g(r,s),(r=r.alternate)&&$g(r,s)}function zE(){return null}var Wg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Th(r){this._internalRoot=r}Uu.prototype.render=Th.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Fu(r,s,null,null)},Uu.prototype.unmount=Th.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Ji(function(){Fu(null,r,null,null)}),s[Ar]=null}};function Uu(r){this._internalRoot=r}Uu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ul();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Gn.length&&s!==0&&s<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&$l(r)}};function Ih(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function qg(){}function BE(r,s,a,d,h){if(h){if(typeof d=="function"){var m=d;d=function(){var z=ju(w);m.call(z)}}var w=Bg(s,d,r,0,null,!1,!1,"",qg);return r._reactRootContainer=w,r[Ar]=w.current,va(r.nodeType===8?r.parentNode:r),Ji(),w}for(;h=r.lastChild;)r.removeChild(h);if(typeof d=="function"){var I=d;d=function(){var z=ju(R);I.call(z)}}var R=wh(r,0,!1,null,null,!1,!1,"",qg);return r._reactRootContainer=R,r[Ar]=R.current,va(r.nodeType===8?r.parentNode:r),Ji(function(){Fu(s,R,a,d)}),R}function Bu(r,s,a,d,h){var m=a._reactRootContainer;if(m){var w=m;if(typeof h=="function"){var I=h;h=function(){var R=ju(w);I.call(R)}}Fu(s,w,r,h)}else w=BE(a,s,r,h,d);return ju(w)}Fl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Gr(s.pendingLanes);a!==0&&(Xr(s,a|1),tn(s,Ke()),(Ve&6)===0&&(fo=Ke()+500,oi()))}break;case 13:Ji(function(){var d=Pr(r,1);if(d!==null){var h=Kt();jn(d,r,1,h)}}),Eh(r,1)}},Vs=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=Kt();jn(s,r,134217728,a)}Eh(r,134217728)}},jl=function(r){if(r.tag===13){var s=hi(r),a=Pr(r,s);if(a!==null){var d=Kt();jn(a,r,s,d)}Eh(r,s)}},Ul=function(){return Ne},zl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Rs=function(r,s,a){switch(s){case"input":if(Wo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var h=su(d);if(!h)throw Error(t(90));Ts(d),Wo(d,h)}}}break;case"textarea":ks(r,a);break;case"select":s=a.value,s!=null&&yr(r,!!a.multiple,s,!1)}},bi=ph,ea=Ji;var $E={usingClientEntryPoint:!1,Events:[Ta,Zs,su,Hn,Zo,ph]},La={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ra(r),r===null?null:r.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||zE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Vi=$u.inject(WE),rn=$u}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(s))throw Error(t(200));return UE(r,s,null,a)},nn.createRoot=function(r,s){if(!Ih(r))throw Error(t(299));var a=!1,d="",h=Wg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=wh(r,1,!1,null,null,a,!1,d,h),r[Ar]=s.current,va(r.nodeType===8?r.parentNode:r),new Th(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ra(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return Ji(r)},nn.hydrate=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Ih(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,h=!1,m="",w=Wg;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Bg(s,null,r,1,a??null,h,!1,m,w),r[Ar]=s.current,va(r),d)for(r=0;r<d.length;r++)a=d[r],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new Uu(s)},nn.render=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!zu(r))throw Error(t(40));return r._reactRootContainer?(Ji(function(){Bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},nn.unstable_batchedUpdates=ph,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Bu(r,s,a,!1,d)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var Zg;function JE(){if(Zg)return kh.exports;Zg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),kh.exports=XE(),kh.exports}var ey;function ZE(){if(ey)return Wu;ey=1;var n=JE();return Wu.createRoot=n.createRoot,Wu.hydrateRoot=n.hydrateRoot,Wu}var eT=ZE();const tT=Vf(eT),nT="modulepreload",rT=function(n){return"/Edith/"+n},ty={},gl=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(_){return Promise.all(_.map(v=>Promise.resolve(v).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=f?.nonce||f?.getAttribute("nonce");o=c(t.map(_=>{if(_=rT(_),_ in ty)return;ty[_]=!0;const v=_.endsWith(".css"),S=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${S}`))return;const C=document.createElement("link");if(C.rel=v?"stylesheet":nT,v||(C.as="script"),C.crossOrigin="",C.href=_,g&&C.setAttribute("nonce",g),document.head.appendChild(C),v)return new Promise((U,q)=>{C.addEventListener("load",U),C.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${_}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},iT="/Edith/";let nr=null,U_=null;function sT(){if(!(typeof window>"u")&&!nr){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;nr=new n,fetch(`${iT}sounds/click.mp3`).then(e=>e.arrayBuffer()).then(e=>nr.decodeAudioData(e)).then(e=>{U_=e}).catch(()=>{})}}function oT(n){if(nr||sT(),!nr||!n)return;nr.state==="suspended"&&nr.resume().catch(()=>{});const e=nr.createBufferSource();e.buffer=n;const t=nr.createGain();t.gain.value=.35,e.connect(t),t.connect(nr.destination),e.start(0)}function Ff(){try{oT(U_)}catch{}}let ny=0,ry=0;function l2(){const n=de.useRef(!1);de.useEffect(()=>{if(n.current)return;n.current=!0;const e=Date.now();e-ry>100&&(ny=0),ry=e;const t=ny++,i=Math.min(t*50,400),o=setTimeout(()=>Ff(),i);return()=>clearTimeout(o)},[])}const aT={},iy=n=>{let e;const t=new Set,i=(v,S)=>{const C=typeof v=="function"?v(e):v;if(!Object.is(C,e)){const U=e;e=S??(typeof C!="object"||C===null)?C:Object.assign({},e,C),t.forEach(q=>q(e,U))}},o=()=>e,g={setState:i,getState:o,getInitialState:()=>_,subscribe:v=>(t.add(v),()=>t.delete(v)),destroy:()=>{(aT?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},_=e=n(i,o,g);return g},lT=n=>n?iy(n):iy;var Ph={exports:{}},xh={},Nh={exports:{}},bh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function uT(){if(sy)return bh;sy=1;var n=ml();function e(S,C){return S===C&&(S!==0||1/S===1/C)||S!==S&&C!==C}var t=typeof Object.is=="function"?Object.is:e,i=n.useState,o=n.useEffect,l=n.useLayoutEffect,c=n.useDebugValue;function f(S,C){var U=C(),q=i({inst:{value:U,getSnapshot:C}}),$=q[0].inst,F=q[1];return l(function(){$.value=U,$.getSnapshot=C,g($)&&F({inst:$})},[S,U,C]),o(function(){return g($)&&F({inst:$}),S(function(){g($)&&F({inst:$})})},[S]),c(U),U}function g(S){var C=S.getSnapshot;S=S.value;try{var U=C();return!t(S,U)}catch{return!0}}function _(S,C){return C()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_:f;return bh.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:v,bh}var oy;function cT(){return oy||(oy=1,Nh.exports=uT()),Nh.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function dT(){if(ay)return xh;ay=1;var n=ml(),e=cT();function t(_,v){return _===v&&(_!==0||1/_===1/v)||_!==_&&v!==v}var i=typeof Object.is=="function"?Object.is:t,o=e.useSyncExternalStore,l=n.useRef,c=n.useEffect,f=n.useMemo,g=n.useDebugValue;return xh.useSyncExternalStoreWithSelector=function(_,v,S,C,U){var q=l(null);if(q.current===null){var $={hasValue:!1,value:null};q.current=$}else $=q.current;q=f(function(){function ee(_e){if(!ae){if(ae=!0,me=_e,_e=C(_e),U!==void 0&&$.hasValue){var P=$.value;if(U(P,_e))return ve=P}return ve=_e}if(P=ve,i(me,_e))return P;var T=C(_e);return U!==void 0&&U(P,T)?(me=_e,P):(me=_e,ve=T)}var ae=!1,me,ve,Ue=S===void 0?null:S;return[function(){return ee(v())},Ue===null?void 0:function(){return ee(Ue())}]},[v,S,C,U]);var F=o(_,q[0],q[1]);return c(function(){$.hasValue=!0,$.value=F},[F]),g(F),F},xh}var ly;function hT(){return ly||(ly=1,Ph.exports=dT()),Ph.exports}var fT=hT();const pT=Vf(fT),z_={},{useDebugValue:mT}=j_,{useSyncExternalStoreWithSelector:gT}=pT;let uy=!1;const yT=n=>n;function _T(n,e=yT,t){(z_?"production":void 0)!=="production"&&t&&!uy&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),uy=!0);const i=gT(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return mT(i),i}const vT=n=>{(z_?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?lT(n):n,t=(i,o)=>_T(e,i,o);return Object.assign(t,e),t},wT=n=>vT;var B_=Symbol.for("immer-nothing"),cy=Symbol.for("immer-draftable"),dn=Symbol.for("immer-state");function Un(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var el=Object.getPrototypeOf;function So(n){return!!n&&!!n[dn]}function cs(n){return n?$_(n)||Array.isArray(n)||!!n[cy]||!!n.constructor?.[cy]||yl(n)||xc(n):!1}var ET=Object.prototype.constructor.toString(),dy=new WeakMap;function $_(n){if(!n||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);if(e===null||e===Object.prototype)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(t===Object)return!0;if(typeof t!="function")return!1;let i=dy.get(t);return i===void 0&&(i=Function.toString.call(t),dy.set(t,i)),i===ET}function oc(n,e,t=!0){Pc(n)===0?(t?Reflect.ownKeys(n):Object.keys(n)).forEach(o=>{e(o,n[o],n)}):n.forEach((i,o)=>e(o,i,n))}function Pc(n){const e=n[dn];return e?e.type_:Array.isArray(n)?1:yl(n)?2:xc(n)?3:0}function tf(n,e){return Pc(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function W_(n,e,t){const i=Pc(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function TT(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function yl(n){return n instanceof Map}function xc(n){return n instanceof Set}function rs(n){return n.copy_||n.base_}function nf(n,e){if(yl(n))return new Map(n);if(xc(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=$_(n);if(e===!0||e==="class_only"&&!t){const i=Object.getOwnPropertyDescriptors(n);delete i[dn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const c=o[l],f=i[c];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[c]={configurable:!0,writable:!0,enumerable:f.enumerable,value:n[c]})}return Object.create(el(n),i)}else{const i=el(n);if(i!==null&&t)return{...n};const o=Object.create(i);return Object.assign(o,n)}}function jf(n,e=!1){return Nc(n)||So(n)||!cs(n)||(Pc(n)>1&&Object.defineProperties(n,{set:qu,add:qu,clear:qu,delete:qu}),Object.freeze(n),e&&Object.values(n).forEach(t=>jf(t,!0))),n}function IT(){Un(2)}var qu={value:IT};function Nc(n){return n===null||typeof n!="object"?!0:Object.isFrozen(n)}var ST={};function ds(n){const e=ST[n];return e||Un(0,n),e}var tl;function q_(){return tl}function AT(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function hy(n,e){e&&(ds("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function rf(n){sf(n),n.drafts_.forEach(kT),n.drafts_=null}function sf(n){n===tl&&(tl=n.parent_)}function fy(n){return tl=AT(tl,n)}function kT(n){const e=n[dn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function py(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[dn].modified_&&(rf(e),Un(4)),cs(n)&&(n=ac(e,n),e.parent_||lc(e,n)),e.patches_&&ds("Patches").generateReplacementPatches_(t[dn].base_,n,e.patches_,e.inversePatches_)):n=ac(e,t,[]),rf(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==B_?n:void 0}function ac(n,e,t){if(Nc(e))return e;const i=n.immer_.shouldUseStrictIteration(),o=e[dn];if(!o)return oc(e,(l,c)=>my(n,o,e,l,c,t),i),e;if(o.scope_!==n)return e;if(!o.modified_)return lc(n,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let c=l,f=!1;o.type_===3&&(c=new Set(l),l.clear(),f=!0),oc(c,(g,_)=>my(n,o,l,g,_,t,f),i),lc(n,l,!1),t&&n.patches_&&ds("Patches").generatePatches_(o,t,n.patches_,n.inversePatches_)}return o.copy_}function my(n,e,t,i,o,l,c){if(o==null||typeof o!="object"&&!c)return;const f=Nc(o);if(!(f&&!c)){if(So(o)){const g=l&&e&&e.type_!==3&&!tf(e.assigned_,i)?l.concat(i):void 0,_=ac(n,o,g);if(W_(t,i,_),So(_))n.canAutoFreeze_=!1;else return}else c&&t.add(o);if(cs(o)&&!f){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||e&&e.base_&&e.base_[i]===o&&f)return;ac(n,o),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&(yl(t)?t.has(i):Object.prototype.propertyIsEnumerable.call(t,i))&&lc(n,o)}}}function lc(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&jf(e,t)}function CT(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:q_(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=Uf;t&&(o=[i],l=nl);const{revoke:c,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=c,f}var Uf={get(n,e){if(e===dn)return n;const t=rs(n);if(!tf(t,e))return RT(n,t,e);const i=t[e];return n.finalized_||!cs(i)?i:i===Dh(n.base_,e)?(Oh(n),n.copy_[e]=af(i,n)):i},has(n,e){return e in rs(n)},ownKeys(n){return Reflect.ownKeys(rs(n))},set(n,e,t){const i=H_(rs(n),e);if(i?.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const o=Dh(rs(n),e),l=o?.[dn];if(l&&l.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(TT(t,o)&&(t!==void 0||tf(n.base_,e)))return!0;Oh(n),of(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Dh(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Oh(n),of(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=rs(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){Un(11)},getPrototypeOf(n){return el(n.base_)},setPrototypeOf(){Un(12)}},nl={};oc(Uf,(n,e)=>{nl[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});nl.deleteProperty=function(n,e){return nl.set.call(this,n,e,void 0)};nl.set=function(n,e,t){return Uf.set.call(this,n[0],e,t,n[0])};function Dh(n,e){const t=n[dn];return(t?rs(t):n)[e]}function RT(n,e,t){const i=H_(e,t);return i?"value"in i?i.value:i.get?.call(n.draft_):void 0}function H_(n,e){if(!(e in n))return;let t=el(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=el(t)}}function of(n){n.modified_||(n.modified_=!0,n.parent_&&of(n.parent_))}function Oh(n){n.copy_||(n.copy_=nf(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var PT=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const l=t;t=e;const c=this;return function(g=l,..._){return c.produce(g,v=>t.call(this,v,..._))}}typeof t!="function"&&Un(6),i!==void 0&&typeof i!="function"&&Un(7);let o;if(cs(e)){const l=fy(this),c=af(e,void 0);let f=!0;try{o=t(c),f=!1}finally{f?rf(l):sf(l)}return hy(l,i),py(o,l)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===B_&&(o=void 0),this.autoFreeze_&&jf(o,!0),i){const l=[],c=[];ds("Patches").generateReplacementPatches_(e,o,l,c),i(l,c)}return o}else Un(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(c,...f)=>this.produceWithPatches(c,g=>e(g,...f));let i,o;return[this.produce(e,t,(c,f)=>{i=c,o=f}),i,o]},typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof n?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy),typeof n?.useStrictIteration=="boolean"&&this.setUseStrictIteration(n.useStrictIteration)}createDraft(n){cs(n)||Un(8),So(n)&&(n=xT(n));const e=fy(this),t=af(n,void 0);return t[dn].isManual_=!0,sf(e),t}finishDraft(n,e){const t=n&&n[dn];(!t||!t.isManual_)&&Un(9);const{scope_:i}=t;return hy(i,e),py(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}setUseStrictIteration(n){this.useStrictIteration_=n}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}t>-1&&(e=e.slice(t+1));const i=ds("Patches").applyPatches_;return So(n)?i(n,e):this.produce(n,o=>i(o,e))}};function af(n,e){const t=yl(n)?ds("MapSet").proxyMap_(n,e):xc(n)?ds("MapSet").proxySet_(n,e):CT(n,e);return(e?e.scope_:q_()).drafts_.push(t),t}function xT(n){return So(n)||Un(10,n),K_(n)}function K_(n){if(!cs(n)||Nc(n))return n;const e=n[dn];let t,i=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=nf(n,e.scope_.immer_.useStrictShallowCopy_),i=e.scope_.immer_.shouldUseStrictIteration()}else t=nf(n,!0);return oc(t,(o,l)=>{W_(t,o,K_(l))},i),e&&(e.finalized_=!1),t}var NT=new PT,bT=NT.produce;const DT=n=>(e,t,i)=>(i.setState=(o,l,...c)=>{const f=typeof o=="function"?bT(o):o;return e(f,l,...c)},n(i.setState,t,i)),OT=DT,zf=["accounts","law","taxation_it","taxation_gst","costing","audit","fm","sm"],Ba={accounts:{name:"Adv. Accounts",group:"g1",lectures:69,revisions:12,color:"#6366f1"},law:{name:"Corp Law",group:"g1",lectures:60,revisions:14,color:"#a855f7"},taxation_it:{name:"Income Tax",group:"g1",lectures:63,revisions:15,color:"#10b981",parent:"Taxation"},taxation_gst:{name:"GST",group:"g1",lectures:20,revisions:6,color:"#f59e0b",parent:"Taxation"},costing:{name:"Costing",group:"g2",lectures:70,revisions:15,color:"#ec4899"},audit:{name:"Audit & Ethics",group:"g2",lectures:50,revisions:10,color:"#eab308"},fm:{name:"Financial Mgmt",group:"g2",lectures:55,revisions:12,color:"#0ea5e9",parent:"FM-SM"},sm:{name:"Strategic Mgmt",group:"g2",lectures:40,revisions:10,color:"#f43f5e",parent:"FM-SM"}},uc={accounts:0,law:0,taxation_it:0,taxation_gst:0,costing:0,audit:0,fm:0,sm:0},G_=100,u2=2,c2=1e3,Bf=4,MT=4e3,d2="https://wa.me/919422872892?text=Hey%20Suffu%2C%20reaching%20out%20regarding%20E.D.I.T.H%20%28CA%20Intermediate%20Tracker%29.%20Need%20some%20help...",Bn=(n=new Date)=>{const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${i}`},h2=(n=new Date)=>{const e=String(n.getHours()).padStart(2,"0"),t=String(n.getMinutes()).padStart(2,"0");return`${e}:${t}`},f2=n=>new Date(n+"T12:00:00").toLocaleDateString("en-US",{weekday:"long"}),LT=n=>{const e=new Date(n+"T12:00:00"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getFullYear()).slice(2);return`${e.toLocaleDateString("en-US",{weekday:"long"})}, ${t}-${i}-${o}`},p2=n=>{const e=new Date(n+"T12:00:00"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getFullYear()).slice(2);return`${t}-${i}-${o}`},Fa=(n,e)=>{const t=new Date(n+"T12:00:00"),i=new Date(e+"T12:00:00");return Math.round((i.getTime()-t.getTime())/(1e3*60*60*24))},m2=n=>{const e=new Date;return e.setDate(e.getDate()+1),n===Bn(e)},lf=(n,e)=>{const t=new Date(n+"T12:00:00");return t.setDate(t.getDate()+e),Bn(t)},g2=n=>{const t=new Date(n+"T12:00:00").getDay(),i=t===0?-6:1-t,o=lf(n,i),l=[];for(let c=0;c<7;c++)l.push(lf(o,c));return l},Or=()=>`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,Ao={progressSaved:"Noted. That lecture won't study itself 📚",importSuccess:"Data imported like a boss. Suffu approves ✅",importFail:"That file is more broken than my sleep schedule. Try again 💀",clearConfirm:"Slate wiped. Fresh start energy — don't waste it 🧹",testLogged:"Score recorded. No lies, no coping, just numbers 📊",chapterAdded:"Chapter added. Another one to conquer 💪",chapterDeleted:"Chapter gone. Hope you knew what you were doing 🫡",syncError:"Cloud's on a break. Saved locally, don't panic 🌧️",passwordReset:"Reset email sent. Check inbox, not Instagram 📬",signOut:"Signed out. Take a break, but not too long 🫠",reminderSet:"Reminder locked. No more 'I forgot' excuses 🔔",testScheduled:"Test scheduled. Your future self is already nervous 😬",memoryUpdated:"Memory saved. Edith remembers everything now 🧠",backupNeeded:"Been a while since your last backup. Export before karma hits 💾",onlineRestored:"Back online. Syncing your grind to the cloud ☁️",scheduleAdded:"Schedule item added. Tomorrow's looking productive 📋",plannerUpdated:"Planner updated. Discipline is the real syllabus 🗓️",loginSuccess:"Welcome back, soldier. The grind awaits 🔥",registerSuccess:"Account created. The Suffu era begins now 🚀",validationError:"Fix the red bits first. Suffu can wait ✋",emptyScore:"Score can't be blank. Put a number, even if it hurts 🔢",aiNotConfigured:"AI isn't set up yet. Check Settings → AI config 🤖",chatDeleted:"Chat wiped. Those messages are in a better place now 🪦",scheduledTestDeleted:"Test removed from the calendar. One less thing to stress about 📅",scheduleItemDeleted:"Schedule item gone. Your timeline approves 🕐",reminderDeleted:"Reminder deleted. Out of sight, out of mind 👻"};let Q_=null;const VT=n=>{Q_=n},Mh=(n,e)=>{const t={id:Or(),message:n,type:e,createdAt:Date.now()};Q_?.(t)},At={info:n=>Mh(n,"info"),success:n=>Mh(n,"success"),error:n=>Mh(n,"error")},uf={progress:{lectures:{...uc},revisions:{...uc},tests:[],scheduledTests:[],history:[],activityLogs:[],syllabus:[],planner:[],schedule:[],reminders:[]},config:{...Ba},deadlines:{lectures:"2026-04-15",exam:"2026-09-30"},studyStartDate:Bn(),themeMode:"system",lastExported:null,edithMemory:"",edithChatSessions:[],activeEdithSessionId:null,isThinkingEnabled:!1,isWebSearchEnabled:!1,notificationsEnabled:!1,fullScreenEnabled:!1,pacingAlertThreshold:Bf,lastWelcomeShownDate:null,updatedAt:"1970-01-01T00:00:00.000Z",githubToken:null},cf="edith_state",Re=n=>{try{localStorage.setItem(cf,JSON.stringify(n))}catch{}},gy=()=>{try{const n=localStorage.getItem(cf);if(!n)return null;const e=JSON.parse(n);return e&&e.progress?Y_(e):null}catch{return localStorage.removeItem(cf),null}},Y_=n=>{const e={...uf},t=n,i={...Ba};if(t.config){for(const f of zf)if(t.config[f]){const g=Ba[f].parent;i[f]={...Ba[f],...t.config[f],group:Ba[f].group},g?i[f].parent=g:delete i[f].parent}}let o=e.deadlines;t.deadlines&&(o={lectures:t.deadlines.lectures||e.deadlines.lectures,exam:t.deadlines.exam||t.deadlines.g1||e.deadlines.exam});let l="system";t.themeMode?l=t.themeMode:typeof t.darkMode=="boolean"&&(l=t.darkMode?"dark":"light");const c=t.progress||{};return{...e,progress:{lectures:{...uc,...c.lectures||{}},revisions:{...uc,...c.revisions||{}},tests:Array.isArray(c.tests)?c.tests:[],scheduledTests:Array.isArray(c.scheduledTests)?c.scheduledTests:[],history:Array.isArray(c.history)?c.history.slice(-730):[],activityLogs:Array.isArray(c.activityLogs)?c.activityLogs.slice(0,G_):[],syllabus:Array.isArray(c.syllabus)?c.syllabus:[],planner:Array.isArray(c.planner)?c.planner:[],schedule:Array.isArray(c.schedule)?c.schedule:[],reminders:Array.isArray(c.reminders)?c.reminders:[]},config:i,deadlines:o,studyStartDate:t.studyStartDate||e.studyStartDate,themeMode:l,lastExported:t.lastExported||null,edithMemory:t.edithMemory||"",edithChatSessions:Array.isArray(t.edithChatSessions)?t.edithChatSessions:[],activeEdithSessionId:t.activeEdithSessionId||null,notificationsEnabled:t.notificationsEnabled??!1,fullScreenEnabled:t.fullScreenEnabled??!1,pacingAlertThreshold:t.pacingAlertThreshold??Bf,lastWelcomeShownDate:t.lastWelcomeShownDate||null,updatedAt:t.updatedAt||"1970-01-01T00:00:00.000Z",userName:t.userName||null,githubToken:t.githubToken||null}},ns=(n,e)=>{const t={id:Or(),action:e,timestamp:new Date().toISOString()};n.progress.activityLogs=[t,...n.progress.activityLogs].slice(0,G_),n.updatedAt=new Date().toISOString()},ue=wT()(OT((n,e)=>({user:null,userProfile:null,syncStatus:"idle",authLoading:!0,authScreen:"login",data:gy()||{...uf},activeTab:"planner",activeGroup:"g1",showWelcomeModal:!1,showTodayModal:!1,showMobileMore:!1,toasts:[],pendingToolCall:null,setUser:i=>n(o=>{o.user=i}),setUserProfile:i=>n(o=>{o.userProfile=i}),setSyncStatus:i=>n(o=>{o.syncStatus=i}),setAuthLoading:i=>n(o=>{o.authLoading=i}),setAuthScreen:i=>n(o=>{o.authScreen=i}),setActiveTab:i=>n(o=>{o.activeTab=i,o.showMobileMore=!1}),setActiveGroup:i=>n(o=>{o.activeGroup=i}),setShowWelcomeModal:i=>n(o=>{o.showWelcomeModal=i}),setShowTodayModal:i=>n(o=>{o.showTodayModal=i}),setShowMobileMore:i=>n(o=>{o.showMobileMore=i}),setPendingToolCall:i=>n(o=>{o.pendingToolCall=i}),setData:i=>n(o=>{o.data=i,Re(i)}),updateProgress:(i,o,l)=>n(c=>{const f=c.data.config[o]?.[i]||0,g=Math.max(0,Math.min(f,l));c.data.progress[i][o]=g;const _=Bn(),v={lectures:{...c.data.progress.lectures},revisions:{...c.data.progress.revisions}},S=c.data.progress.history.findIndex(C=>C.date===_);S>=0?c.data.progress.history[S]={date:_,data:v}:c.data.progress.history.push({date:_,data:v}),c.data.progress.history=c.data.progress.history.slice(-730),ns(c.data,`Updated ${i} for ${c.data.config[o]?.name} to ${g}`),Re(c.data)}),setDeadlines:i=>n(o=>{o.data.deadlines=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setThemeMode:i=>n(o=>{o.data.themeMode=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setLastExported:i=>n(o=>{o.data.lastExported=i,Re(o.data)}),setPacingAlertThreshold:i=>n(o=>{o.data.pacingAlertThreshold=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setNotificationsEnabled:i=>n(o=>{o.data.notificationsEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setFullScreenEnabled:i=>n(o=>{o.data.fullScreenEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),updateSubjectConfig:(i,o,l)=>n(c=>{c.data.config[i][o]=l,c.data.updatedAt=new Date().toISOString(),Re(c.data)}),setUserName:i=>n(o=>{o.userProfile&&(o.userProfile.name=i),o.data.userName=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),addSyllabusChapter:(i,o)=>n(l=>{const c={id:Or(),subject:i,name:o,status:"Not Started",priority:"Medium"};l.data.progress.syllabus.push(c),ns(l.data,`Added Chapter: ${o} (${l.data.config[i]?.name})`),Re(l.data)}),updateSyllabusChapter:(i,o)=>n(l=>{const c=l.data.progress.syllabus.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteSyllabusChapter:i=>n(o=>{o.data.progress.syllabus=o.data.progress.syllabus.filter(l=>l.id!==i),ns(o.data,"Deleted a Chapter from Syllabus"),Re(o.data)}),moveSyllabusChapter:(i,o)=>n(l=>{const c=l.data.progress.syllabus,f=c.findIndex(v=>v.id===i);if(f===-1)return;const g=c[f];let _=-1;if(o===-1){for(let v=f-1;v>=0;v--)if(c[v].subject===g.subject){_=v;break}}else for(let v=f+1;v<c.length;v++)if(c[v].subject===g.subject){_=v;break}_!==-1&&([c[f],c[_]]=[c[_],c[f]]),Re(l.data)}),updatePlannerEntry:i=>n(o=>{const l=o.data.progress.planner.findIndex(c=>c.date===i.date&&c.subject===i.subject);l>=0?o.data.progress.planner[l]={...i,id:i.id||o.data.progress.planner[l].id||Or()}:o.data.progress.planner.push({...i,id:i.id||Or()}),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),togglePlannerTick:(i,o)=>n(l=>{const c=l.data.progress.planner.find(f=>f.date===i&&f.subject===o);c&&c.note.trim()&&(c.ticked=!c.ticked,l.data.updatedAt=new Date().toISOString(),Re(l.data))}),addScheduleItem:i=>n(o=>{o.data.progress.schedule.push(i),ns(o.data,`Added schedule: ${i.customTitle}`),Re(o.data)}),updateScheduleItem:(i,o)=>n(l=>{const c=l.data.progress.schedule.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteScheduleItem:i=>n(o=>{o.data.progress.schedule=o.data.progress.schedule.filter(l=>l.id!==i),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),toggleScheduleComplete:i=>n(o=>{const l=o.data.progress.schedule.find(c=>c.id===i);l&&(l.completed=!l.completed),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),addScheduledTest:i=>n(o=>{o.data.progress.scheduledTests.push(i),ns(o.data,`Scheduled test: ${o.data.config[i.subject]?.name}`),Re(o.data)}),updateScheduledTest:(i,o)=>n(l=>{const c=l.data.progress.scheduledTests.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteScheduledTest:i=>n(o=>{o.data.progress.scheduledTests=o.data.progress.scheduledTests.filter(l=>l.id!==i),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),logTest:i=>n(o=>{o.data.progress.tests.unshift(i),ns(o.data,`Logged test: ${o.data.config[i.subject]?.name} (${i.marksObtained}/${i.maxMarks})`),Re(o.data)}),addReminder:i=>n(o=>{o.data.progress.reminders.push(i),ns(o.data,`Added reminder: ${i.title}`),Re(o.data)}),updateReminder:(i,o)=>n(l=>{const c=l.data.progress.reminders.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteReminder:i=>n(o=>{o.data.progress.reminders=o.data.progress.reminders.filter(l=>l.id!==i),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),toggleReminderComplete:i=>n(o=>{const l=o.data.progress.reminders.find(c=>c.id===i);l&&(l.completed=!l.completed),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setEdithMemory:i=>n(o=>{o.data.edithMemory=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),addChatSession:i=>n(o=>{o.data.edithChatSessions.unshift(i),o.data.activeEdithSessionId=i.id,Re(o.data)}),addChatMessage:(i,o)=>n(l=>{const c=l.data.edithChatSessions.find(f=>f.id===i);c&&(c.messages.push(o),c.updatedAt=new Date().toISOString(),c.messages.length===1&&o.role==="user"&&(c.title=o.content.slice(0,40))),Re(l.data)}),setActiveEdithSessionId:i=>n(o=>{o.data.activeEdithSessionId=i}),setThinkingEnabled:i=>n(o=>{o.data.isThinkingEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setWebSearchEnabled:i=>n(o=>{o.data.isWebSearchEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),deleteChatSession:i=>n(o=>{o.data.edithChatSessions=o.data.edithChatSessions.filter(l=>l.id!==i),o.data.activeEdithSessionId===i&&(o.data.activeEdithSessionId=o.data.edithChatSessions[0]?.id||null),Re(o.data)}),addToast:i=>n(o=>{o.toasts=[...o.toasts,i].slice(-3)}),removeToast:i=>n(o=>{o.toasts=o.toasts.filter(l=>l.id!==i)}),clearAllData:(i=!1)=>n(o=>{o.data={...uf,deadlines:o.data.deadlines,themeMode:o.data.themeMode,lastExported:null,studyStartDate:Bn(),updatedAt:i?new Date().toISOString():"1970-01-01T00:00:00.000Z"},Re(o.data)}),importData:i=>n(o=>{o.data=Y_(i),Re(o.data)}),setLastWelcomeShownDate:i=>n(o=>{o.data.lastWelcomeShownDate=i,Re(o.data)}),setGithubToken:i=>n(o=>{o.data.githubToken=i,Re(o.data)}),hydrateFromStorage:()=>{const i=gy();i&&n(o=>{o.data=i})}})));VT(n=>ue.getState().addToast(n));var yy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},FT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},J_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,g=o+2<n.length,_=g?n[o+2]:0,v=l>>2,S=(l&3)<<4|f>>4;let C=(f&15)<<2|_>>6,U=_&63;g||(U=64,c||(C=64)),i.push(t[v],t[S],t[C],t[U])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(X_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):FT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const S=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||_==null||S==null)throw new jT;const C=l<<2|f>>4;if(i.push(C),_!==64){const U=f<<4&240|_>>2;if(i.push(U),S!==64){const q=_<<6&192|S;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UT=function(n){const e=X_(n);return J_.encodeByteArray(e,!0)},cc=function(n){return UT(n).replace(/\./g,"")},Z_=function(n){try{return J_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=()=>zT().__FIREBASE_DEFAULTS__,$T=()=>{if(typeof process>"u"||typeof yy>"u")return;const n=yy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},WT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Z_(n[1]);return e&&JSON.parse(e)},bc=()=>{try{return BT()||$T()||WT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ev=n=>{var e,t;return(t=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qT=n=>{const e=ev(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},tv=()=>{var n;return(n=bc())===null||n===void 0?void 0:n.config},nv=n=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[cc(JSON.stringify(t)),cc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function QT(){var n;const e=(n=bc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZT(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eI(){return!QT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rv(){try{return typeof indexedDB=="object"}catch{return!1}}function iv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function tI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="FirebaseError";class fr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=nI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?rI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new fr(o,f,i)}}function rI(n,e){return n.replace(iI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const iI=/\{\$([^}]+)}/g;function sI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(_y(l)&&_y(c)){if(!dc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function _y(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $a(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Wa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function oI(n,e){const t=new aI(n,e);return t.subscribe.bind(t)}class aI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");lI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Lh),o.error===void 0&&(o.error=Lh),o.complete===void 0&&(o.complete=Lh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Lh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new HT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dI(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(n){return n===is?void 0:n}function dI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const fI={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},pI=be.INFO,mI={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},gI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=mI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $f{constructor(e){this.name=e,this._logLevel=pI,this._logHandler=gI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const yI=(n,e)=>e.some(t=>n instanceof t);let vy,wy;function _I(){return vy||(vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vI(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,df=new WeakMap,ov=new WeakMap,Vh=new WeakMap,Wf=new WeakMap;function wI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Fr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&sv.set(t,n)}).catch(()=>{}),Wf.set(e,n),e}function EI(n){if(df.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});df.set(n,e)}let hf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return df.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ov.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function TI(n){hf=n(hf)}function II(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fh(this),e,...t);return ov.set(i,e.sort?e.sort():[e]),Fr(i)}:vI().includes(n)?function(...e){return n.apply(Fh(this),e),Fr(sv.get(this))}:function(...e){return Fr(n.apply(Fh(this),e))}}function SI(n){return typeof n=="function"?II(n):(n instanceof IDBTransaction&&EI(n),yI(n,_I())?new Proxy(n,hf):n)}function Fr(n){if(n instanceof IDBRequest)return wI(n);if(Vh.has(n))return Vh.get(n);const e=SI(n);return e!==n&&(Vh.set(n,e),Wf.set(e,n)),e}const Fh=n=>Wf.get(n);function Dc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Fr(c);return i&&c.addEventListener("upgradeneeded",g=>{i(Fr(c.result),g.oldVersion,g.newVersion,Fr(c.transaction),g)}),t&&c.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}function jh(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Fr(t).then(()=>{})}const AI=["get","getKey","getAll","getAllKeys","count"],kI=["put","add","delete","clear"],Uh=new Map;function Ey(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=kI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||AI.includes(t)))return;const l=async function(c,...f){const g=this.transaction(c,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Uh.set(e,l),l}TI(n=>({...n,get:(e,t,i)=>Ey(e,t)||n.get(e,t,i),has:(e,t)=>!!Ey(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(RI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function RI(n){const e=n.getComponent();return e?.type==="VERSION"}const ff="@firebase/app",Ty="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new $f("@firebase/app"),PI="@firebase/app-compat",xI="@firebase/analytics-compat",NI="@firebase/analytics",bI="@firebase/app-check-compat",DI="@firebase/app-check",OI="@firebase/auth",MI="@firebase/auth-compat",LI="@firebase/database",VI="@firebase/data-connect",FI="@firebase/database-compat",jI="@firebase/functions",UI="@firebase/functions-compat",zI="@firebase/installations",BI="@firebase/installations-compat",$I="@firebase/messaging",WI="@firebase/messaging-compat",qI="@firebase/performance",HI="@firebase/performance-compat",KI="@firebase/remote-config",GI="@firebase/remote-config-compat",QI="@firebase/storage",YI="@firebase/storage-compat",XI="@firebase/firestore",JI="@firebase/vertexai-preview",ZI="@firebase/firestore-compat",eS="firebase",tS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="[DEFAULT]",nS={[ff]:"fire-core",[PI]:"fire-core-compat",[NI]:"fire-analytics",[xI]:"fire-analytics-compat",[DI]:"fire-app-check",[bI]:"fire-app-check-compat",[OI]:"fire-auth",[MI]:"fire-auth-compat",[LI]:"fire-rtdb",[VI]:"fire-data-connect",[FI]:"fire-rtdb-compat",[jI]:"fire-fn",[UI]:"fire-fn-compat",[zI]:"fire-iid",[BI]:"fire-iid-compat",[$I]:"fire-fcm",[WI]:"fire-fcm-compat",[qI]:"fire-perf",[HI]:"fire-perf-compat",[KI]:"fire-rc",[GI]:"fire-rc-compat",[QI]:"fire-gcs",[YI]:"fire-gcs-compat",[XI]:"fire-fst",[ZI]:"fire-fst-compat",[JI]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map,rS=new Map,mf=new Map;function Iy(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(mf.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,n);for(const t of hc.values())Iy(t,n);for(const t of rS.values())Iy(t,n);return!0}function Lo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new vs("app","Firebase",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=tS;function av(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=tv()),!t)throw Ii.create("no-options");const l=hc.get(o);if(l){if(dc(t,l.options)&&dc(i,l.config))return l;throw Ii.create("duplicate-app",{appName:o})}const c=new hI(o);for(const g of mf.values())c.addComponent(g);const f=new sS(t,i,c);return hc.set(o,f),f}function qf(n=pf){const e=hc.get(n);if(!e&&n===pf&&tv())return av();if(!e)throw Ii.create("no-app",{appName:n});return e}function In(n,e,t){var i;let o=(i=nS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(f.join(" "));return}ur(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebase-heartbeat-database",aS=1,rl="firebase-heartbeat-store";let zh=null;function lv(){return zh||(zh=Dc(oS,aS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ii.create("idb-open",{originalErrorMessage:n.message})})),zh}async function lS(n){try{const t=(await lv()).transaction(rl),i=await t.objectStore(rl).get(uv(n));return await t.done,i}catch(e){if(e instanceof fr)Ur.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e?.message});Ur.warn(t.message)}}}async function Sy(n,e){try{const i=(await lv()).transaction(rl,"readwrite");await i.objectStore(rl).put(e,uv(n)),await i.done}catch(t){if(t instanceof fr)Ur.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t?.message});Ur.warn(i.message)}}}function uv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=1024,cS=720*60*60*1e3;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ay();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=cS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ay(),{heartbeatsToSend:i,unsentEntries:o}=hS(this._heartbeatsCache.heartbeats),l=cc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Ay(){return new Date().toISOString().substring(0,10)}function hS(n,e=uS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),ky(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ky(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rv()?iv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ky(n){return cc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(n){ur(new $n("platform-logger",e=>new CI(e),"PRIVATE")),ur(new $n("heartbeat",e=>new dS(e),"PRIVATE")),In(ff,Ty,n),In(ff,Ty,"esm2017"),In("fire-js","")}pS("");var mS="firebase",gS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(mS,gS,"app");function Hf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yS=cv,dv=new vs("auth","Firebase",cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new $f("@firebase/auth");function _S(n,...e){fc.logLevel<=be.WARN&&fc.warn(`Auth (${Vo}): ${n}`,...e)}function Xu(n,...e){fc.logLevel<=be.ERROR&&fc.error(`Auth (${Vo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,...e){throw Kf(n,...e)}function ir(n,...e){return Kf(n,...e)}function hv(n,e,t){const i=Object.assign(Object.assign({},yS()),{[e]:t});return new vs("auth","Firebase",i).create(e,{appName:n.name})}function jr(n){return hv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return dv.create(n,...e)}function we(n,e,...t){if(!n)throw Kf(e,...t)}function Mr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xu(e),new Error(e)}function zr(n,e){n||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vS(){return Cy()==="http:"||Cy()==="https:"}function Cy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||XT()||"connection"in navigator)?navigator.onLine:!0}function ES(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=GT()||JT()}get(){return wS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=new vl(3e4,6e4);function Wr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pr(n,e,t,i,o={}){return pv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=_l(Object.assign({key:n.config.apiKey},c)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:g},l);return YT()||(_.referrerPolicy="no-referrer"),fv.fetch()(mv(n,n.config.apiHost,t,f),_)})}async function pv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},TS),e);try{const o=new AS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Hu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw Hu(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw Hu(n,"user-disabled",c);const v=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw hv(n,v,_);Wn(n,v)}}catch(o){if(o instanceof fr)throw o;Wn(n,"network-request-failed",{message:String(o)})}}async function wl(n,e,t,i,o={}){const l=await pr(n,e,t,i,o);return"mfaPendingCredential"in l&&Wn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function mv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Gf(n.config,o):`${n.config.apiScheme}://${o}`}function SS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ir(this.auth,"network-request-failed")),IS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ir(n,e,i);return o.customData._tokenResponse=t,o}function Ry(n){return n!==void 0&&n.enterprise!==void 0}class kS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return SS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CS(n,e){return pr(n,"GET","/v2/recaptchaConfig",Wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(n,e){return pr(n,"POST","/v1/accounts:delete",e)}async function gv(n,e){return pr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PS(n,e=!1){const t=Dt(n),i=await t.getIdToken(e),o=Qf(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l?.sign_in_provider;return{claims:o,token:i,authTime:Qa(Bh(o.auth_time)),issuedAtTime:Qa(Bh(o.iat)),expirationTime:Qa(Bh(o.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Bh(n){return Number(n)*1e3}function Qf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Z_(t);return o?JSON.parse(o):(Xu("Failed to decode base64 JWT payload"),null)}catch(o){return Xu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Py(n){const e=Qf(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof fr&&xS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function xS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ko(n,gv(t,{idToken:i}));we(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?yv(l.providerUserInfo):[],f=DS(n.providerData,c),g=n.isAnonymous,_=!(n.email&&l.passwordHash)&&!f?.length,v=g?_:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new yf(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,S)}async function bS(n){const e=Dt(n);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function yv(n){return n.map(e=>{var{providerId:t}=e,i=Hf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(n,e){const t=await pv(n,{},async()=>{const i=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=mv(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",fv.fetch()(c,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function MS(n,e){return pr(n,"POST","/v2/accounts:revokeToken",Wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Py(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await OS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new wo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new yf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ko(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return PS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await ko(this,RS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,g,_,v;const S=(i=t.displayName)!==null&&i!==void 0?i:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,F=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ee=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ae=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:me,emailVerified:ve,isAnonymous:Ue,providerData:_e,stsTokenManager:P}=t;we(me&&P,e,"internal-error");const T=wo.fromJSON(this.name,P);we(typeof me=="string",e,"internal-error"),gi(S,e.name),gi(C,e.name),we(typeof ve=="boolean",e,"internal-error"),we(typeof Ue=="boolean",e,"internal-error"),gi(U,e.name),gi(q,e.name),gi($,e.name),gi(F,e.name),gi(ee,e.name),gi(ae,e.name);const k=new Lr({uid:me,auth:e,email:C,emailVerified:ve,displayName:S,isAnonymous:Ue,photoURL:q,phoneNumber:U,tenantId:$,stsTokenManager:T,createdAt:ee,lastLoginAt:ae});return _e&&Array.isArray(_e)&&(k.providerData=_e.map(x=>Object.assign({},x))),F&&(k._redirectEventId=F),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new wo;o.updateFromServerResponse(t);const l=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await pc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?yv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!l?.length,f=new wo;f.updateFromIdToken(i);const g=new Lr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new yf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;function Vr(n){zr(n instanceof Function,"Expected a class definition");let e=xy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_v.type="NONE";const Ny=_v;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n,e,t){return`firebase:${n}:${e}:${t}`}class Eo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ju(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ju("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Eo(Vr(Ny),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Vr(Ny);const c=Ju(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const v=await _._get(c);if(v){const S=Lr._fromJSON(e,v);_!==l&&(f=S),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Eo(l,e,i):(l=g[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(c)}catch{}})),new Eo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sv(e))return"Blackberry";if(Av(e))return"Webos";if(wv(e))return"Safari";if((e.includes("chrome/")||Ev(e))&&!e.includes("edge/"))return"Chrome";if(Iv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function vv(n=Bt()){return/firefox\//i.test(n)}function wv(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ev(n=Bt()){return/crios\//i.test(n)}function Tv(n=Bt()){return/iemobile/i.test(n)}function Iv(n=Bt()){return/android/i.test(n)}function Sv(n=Bt()){return/blackberry/i.test(n)}function Av(n=Bt()){return/webos/i.test(n)}function Yf(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function LS(n=Bt()){var e;return Yf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VS(){return ZT()&&document.documentMode===10}function kv(n=Bt()){return Yf(n)||Iv(n)||Av(n)||Sv(n)||/windows phone/i.test(n)||Tv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n,e=[]){let t;switch(n){case"Browser":t=by(Bt());break;case"Worker":t=`${by(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const g=e(l);c(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(n,e={}){return pr(n,"GET","/v2/passwordPolicy",Wr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=6;class zS{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:US,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(c=g.containsNumericCharacter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dy(this),this.idTokenSubscription=new Dy(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gv(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===f)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ES()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(jr(this));const t=e?Dt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),t=new zS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await MS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{c=!0,g()}}else{const g=e.addObserver(t);return()=>{c=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&_S(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ci(n){return Dt(n)}class Dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=oI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $S(n){Oc=n}function Rv(n){return Oc.loadJS(n)}function WS(){return Oc.recaptchaEnterpriseScript}function qS(){return Oc.gapiScript}function HS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const KS="recaptcha-enterprise",GS="NO_RECAPTCHA";class QS{constructor(e){this.type=KS,this.auth=Ci(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{CS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new kS(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,c(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,c,f){const g=window.grecaptcha;Ry(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{c(_)}).catch(()=>{c(GS)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&Ry(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let g=WS();g.length!==0&&(g+=f),Rv(g).then(()=>{o(f,l,c)}).catch(_=>{c(_)})}}).catch(f=>{c(f)})})}}async function Oy(n,e,t,i=!1){const o=new QS(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mc(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Oy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Oy(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(n,e){const t=Lo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(dc(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function XS(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Vr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function JS(n,e,t){const i=Ci(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Pv(e),{host:c,port:f}=ZS(e),g=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${c}${g}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),eA()}function Pv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ZS(n){const e=Pv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:My(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:My(c)}}}function My(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function eA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function tA(n,e){return pr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(n,e){return wl(n,"POST","/v1/accounts:signInWithPassword",Wr(n,e))}async function rA(n,e){return pr(n,"POST","/v1/accounts:sendOobCode",Wr(n,e))}async function iA(n,e){return rA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(n,e){return wl(n,"POST","/v1/accounts:signInWithEmailLink",Wr(n,e))}async function oA(n,e){return wl(n,"POST","/v1/accounts:signInWithEmailLink",Wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Xf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mc(e,t,"signInWithPassword",nA);case"emailLink":return sA(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mc(e,i,"signUpPassword",tA);case"emailLink":return oA(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n,e){return wl(n,"POST","/v1/accounts:signInWithIdp",Wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class hs extends Xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Hf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new hs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return To(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,To(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,To(e,t)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uA(n){const e=$a(Wa(n)).link,t=e?$a(Wa(e)).deep_link_id:null,i=$a(Wa(n)).deep_link_id;return(i?$a(Wa(i)).link:null)||i||t||e||n}class Jf{constructor(e){var t,i,o,l,c,f;const g=$a(Wa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,v=(i=g.oobCode)!==null&&i!==void 0?i:null,S=lA((o=g.mode)!==null&&o!==void 0?o:null);we(_&&v&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=v,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=g.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=uA(e);try{return new Jf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Jf.parseLink(t);return we(i,"argument-error"),il._fromEmailAndCode(e,i.code,i.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends xv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends El{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends El{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.GOOGLE_SIGN_IN_METHOD="google.com";_i.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends El{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends El{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(n,e){return wl(n,"POST","/v1/accounts:signUp",Wr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Lr._fromIdTokenResponse(e,i,o),c=Ly(i);return new fs({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ly(i);return new fs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ly(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends fr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,gc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new gc(e,t,i,o)}}function Nv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?gc._fromErrorAndOperation(n,l,e,i):l})}async function dA(n,e,t=!1){const i=await ko(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(n,e,t=!1){const{auth:i}=n;if(rr(i.app))return Promise.reject(jr(i));const o="reauthenticate";try{const l=await ko(n,Nv(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=Qf(l.idToken);we(c,i,"internal-error");const{sub:f}=c;return we(n.uid===f,i,"user-mismatch"),fs._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(n,e,t=!1){if(rr(n.app))return Promise.reject(jr(n));const i="signIn",o=await Nv(n,i,e),l=await fs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function fA(n,e){return bv(Ci(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n){const e=Ci(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pA(n,e,t){const i=Ci(n);await mc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",iA)}async function mA(n,e,t){if(rr(n.app))return Promise.reject(jr(n));const i=Ci(n),c=await mc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Dv(n),g}),f=await fs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function gA(n,e,t){return rr(n.app)?Promise.reject(jr(n)):fA(Dt(n),Fo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Dv(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(n,e){return pr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Dt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await ko(i,yA(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const f=i.providerData.find(({providerId:g})=>g==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function vA(n,e,t,i){return Dt(n).onIdTokenChanged(e,t,i)}function wA(n,e,t){return Dt(n).beforeAuthStateChanged(e,t)}function EA(n,e,t,i){return Dt(n).onAuthStateChanged(e,t,i)}function TA(n){return Dt(n).signOut()}const yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=1e3,SA=10;class Mv extends Ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,g)=>{this.notifyListeners(c,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);VS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,SA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mv.type="LOCAL";const AA=Mv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv extends Ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lv.type="SESSION";const Vv=Lv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Mc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async _=>_(t.origin,l)),g=await kA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,g)=>{const _=Zf("",20);o.port1.start();const v=setTimeout(()=>{g(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(v),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function RA(n){sr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function PA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xA(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function NA(){return Fv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firebaseLocalStorageDb",bA=1,_c="firebaseLocalStorage",Uv="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lc(n,e){return n.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function DA(){const n=indexedDB.deleteDatabase(jv);return new Tl(n).toPromise()}function _f(){const n=indexedDB.open(jv,bA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(_c,{keyPath:Uv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(_c)?e(i):(i.close(),await DA(),e(await _f()))})})}async function Vy(n,e,t){const i=Lc(n,!0).put({[Uv]:e,value:t});return new Tl(i).toPromise()}async function OA(n,e){const t=Lc(n,!1).get(e),i=await new Tl(t).toPromise();return i===void 0?null:i.value}function Fy(n,e){const t=Lc(n,!0).delete(e);return new Tl(t).toPromise()}const MA=800,LA=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>LA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(NA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await PA(),!this.activeServiceWorker)return;this.sender=new CA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await Vy(e,yc,"1"),await Fy(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>OA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Lc(o,!1).getAll();return new Tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const VA=zv;new vl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(n,e){return e?Vr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,t){return To(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jA(n){return bv(n.auth,new ep(n),n.bypassAuthState)}function UA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),hA(t,new ep(n),n.bypassAuthState)}async function zA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),dA(t,new ep(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jA;case"linkViaPopup":case"linkViaRedirect":return zA;case"reauthViaPopup":case"reauthViaRedirect":return UA;default:Wn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new vl(2e3,1e4);class _o extends Bv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,_o.currentPopupAction&&_o.currentPopupAction.cancel(),_o.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=Zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_o.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BA.get())};e()}}_o.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="pendingRedirect",Zu=new Map;class WA extends Bv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Zu.get(this.auth._key());if(!e){try{const i=await qA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Zu.set(this.auth._key(),e)}return this.bypassAuthState||Zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qA(n,e){const t=GA(e),i=KA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function HA(n,e){Zu.set(n._key(),e)}function KA(n){return Vr(n._redirectPersistence)}function GA(n){return Ju($A,n.config.apiKey,n.name)}async function QA(n,e,t=!1){if(rr(n.app))return Promise.reject(jr(n));const i=Ci(n),o=FA(i,e),c=await new WA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=600*1e3;class XA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!$v(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YA&&this.cachedEventUids.clear(),this.cachedEventUids.has(jy(e))}saveEventToCache(e){this.cachedEventUids.add(jy(e)),this.lastProcessedEventTime=Date.now()}}function jy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $v({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function JA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $v(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(n,e={}){return pr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tk=/^https?/;async function nk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ZA(n);for(const t of e)try{if(rk(t))return}catch{}Wn(n,"unauthorized-domain")}function rk(n){const e=gf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!tk.test(t))return!1;if(ek.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new vl(3e4,6e4);function Uy(){const n=sr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sk(n){return new Promise((e,t)=>{var i,o,l;function c(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),t(ir(n,"network-request-failed"))},timeout:ik.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)c();else{const f=HS("iframefcb");return sr()[f]=()=>{gapi.load?c():t(ir(n,"network-request-failed"))},Rv(`${qS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw ec=null,e})}let ec=null;function ok(n){return ec=ec||sk(n),ec}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=new vl(5e3,15e3),lk="__/auth/iframe",uk="emulator/auth/iframe",ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hk(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gf(e,uk):`https://${n.config.authDomain}/${lk}`,i={apiKey:e.apiKey,appName:n.name,v:Vo},o=dk.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${_l(i).slice(1)}`}async function fk(n){const e=await ok(n),t=sr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:hk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ck,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=ir(n,"network-request-failed"),f=sr().setTimeout(()=>{l(c)},ak.get());function g(){sr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mk=500,gk=600,yk="_blank",_k="http://localhost";class zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vk(n,e,t,i=mk,o=gk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},pk),{width:i.toString(),height:o.toString(),top:l,left:c}),_=Bt().toLowerCase();t&&(f=Ev(_)?yk:t),vv(_)&&(e=e||_k,g.scrollbars="yes");const v=Object.entries(g).reduce((C,[U,q])=>`${C}${U}=${q},`,"");if(LS(_)&&f!=="_self")return wk(e||"",f),new zy(null);const S=window.open(e||"",f,v);we(S,n,"popup-blocked");try{S.focus()}catch{}return new zy(S)}function wk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="__/auth/handler",Tk="emulator/auth/handler",Ik=encodeURIComponent("fac");async function By(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vo,eventId:o};if(e instanceof xv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",sI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,S]of Object.entries({}))c[v]=S}if(e instanceof El){const v=e.getScopes().filter(S=>S!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const g=await n._getAppCheckToken(),_=g?`#${Ik}=${encodeURIComponent(g)}`:"";return`${Sk(n)}?${_l(f).slice(1)}${_}`}function Sk({config:n}){return n.emulator?Gf(n,Tk):`https://${n.authDomain}/${Ek}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vv,this._completeRedirectFn=QA,this._overrideRedirectResult=HA}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await By(e,t,i,gf(),o);return vk(e,c,Zf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await By(e,t,i,gf(),o);return RA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await fk(e),i=new XA(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($h,{type:$h},o=>{var l;const c=(l=o?.[0])===null||l===void 0?void 0:l[$h];c!==void 0&&t(!!c),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kv()||wv()||Yf()}}const kk=Ak;var $y="@firebase/auth",Wy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pk(n){ur(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cv(n)},_=new BS(i,o,l,g);return XS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new $n("auth-internal",e=>{const t=Ci(e.getProvider("auth").getImmediate());return(i=>new Ck(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In($y,Wy,Rk(n)),In($y,Wy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=300,Nk=nv("authIdTokenMaxAge")||xk;let qy=null;const bk=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Nk)return;const o=t?.token;qy!==o&&(qy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Dk(n=qf()){const e=Lo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=YS(n,{popupRedirectResolver:kk,persistence:[VA,AA,Vv]}),i=nv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bk(l.toString());wA(t,c,()=>c(t.currentUser)),vA(t,f=>c(f))}}const o=ev("auth");return o&&JS(t,`http://${o}`),t}function Ok(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}$S({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Ok().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pk("Browser");var Hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,Wv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function k(){}k.prototype=T.prototype,P.D=T.prototype,P.prototype=new k,P.prototype.constructor=P,P.C=function(x,D,O){for(var A=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)A[Le-2]=arguments[Le];return T.prototype[D].apply(x,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,T,k){k||(k=0);var x=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)x[D]=T.charCodeAt(k++)|T.charCodeAt(k++)<<8|T.charCodeAt(k++)<<16|T.charCodeAt(k++)<<24;else for(D=0;16>D;++D)x[D]=T[k++]|T[k++]<<8|T[k++]<<16|T[k++]<<24;T=P.g[0],k=P.g[1],D=P.g[2];var O=P.g[3],A=T+(O^k&(D^O))+x[0]+3614090360&4294967295;T=k+(A<<7&4294967295|A>>>25),A=O+(D^T&(k^D))+x[1]+3905402710&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(k^O&(T^k))+x[2]+606105819&4294967295,D=O+(A<<17&4294967295|A>>>15),A=k+(T^D&(O^T))+x[3]+3250441966&4294967295,k=D+(A<<22&4294967295|A>>>10),A=T+(O^k&(D^O))+x[4]+4118548399&4294967295,T=k+(A<<7&4294967295|A>>>25),A=O+(D^T&(k^D))+x[5]+1200080426&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(k^O&(T^k))+x[6]+2821735955&4294967295,D=O+(A<<17&4294967295|A>>>15),A=k+(T^D&(O^T))+x[7]+4249261313&4294967295,k=D+(A<<22&4294967295|A>>>10),A=T+(O^k&(D^O))+x[8]+1770035416&4294967295,T=k+(A<<7&4294967295|A>>>25),A=O+(D^T&(k^D))+x[9]+2336552879&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(k^O&(T^k))+x[10]+4294925233&4294967295,D=O+(A<<17&4294967295|A>>>15),A=k+(T^D&(O^T))+x[11]+2304563134&4294967295,k=D+(A<<22&4294967295|A>>>10),A=T+(O^k&(D^O))+x[12]+1804603682&4294967295,T=k+(A<<7&4294967295|A>>>25),A=O+(D^T&(k^D))+x[13]+4254626195&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(k^O&(T^k))+x[14]+2792965006&4294967295,D=O+(A<<17&4294967295|A>>>15),A=k+(T^D&(O^T))+x[15]+1236535329&4294967295,k=D+(A<<22&4294967295|A>>>10),A=T+(D^O&(k^D))+x[1]+4129170786&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^D&(T^k))+x[6]+3225465664&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^k&(O^T))+x[11]+643717713&4294967295,D=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(D^O))+x[0]+3921069994&4294967295,k=D+(A<<20&4294967295|A>>>12),A=T+(D^O&(k^D))+x[5]+3593408605&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^D&(T^k))+x[10]+38016083&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^k&(O^T))+x[15]+3634488961&4294967295,D=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(D^O))+x[4]+3889429448&4294967295,k=D+(A<<20&4294967295|A>>>12),A=T+(D^O&(k^D))+x[9]+568446438&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^D&(T^k))+x[14]+3275163606&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^k&(O^T))+x[3]+4107603335&4294967295,D=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(D^O))+x[8]+1163531501&4294967295,k=D+(A<<20&4294967295|A>>>12),A=T+(D^O&(k^D))+x[13]+2850285829&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^D&(T^k))+x[2]+4243563512&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^k&(O^T))+x[7]+1735328473&4294967295,D=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(D^O))+x[12]+2368359562&4294967295,k=D+(A<<20&4294967295|A>>>12),A=T+(k^D^O)+x[5]+4294588738&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^D)+x[8]+2272392833&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^k)+x[11]+1839030562&4294967295,D=O+(A<<16&4294967295|A>>>16),A=k+(D^O^T)+x[14]+4259657740&4294967295,k=D+(A<<23&4294967295|A>>>9),A=T+(k^D^O)+x[1]+2763975236&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^D)+x[4]+1272893353&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^k)+x[7]+4139469664&4294967295,D=O+(A<<16&4294967295|A>>>16),A=k+(D^O^T)+x[10]+3200236656&4294967295,k=D+(A<<23&4294967295|A>>>9),A=T+(k^D^O)+x[13]+681279174&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^D)+x[0]+3936430074&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^k)+x[3]+3572445317&4294967295,D=O+(A<<16&4294967295|A>>>16),A=k+(D^O^T)+x[6]+76029189&4294967295,k=D+(A<<23&4294967295|A>>>9),A=T+(k^D^O)+x[9]+3654602809&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^D)+x[12]+3873151461&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^k)+x[15]+530742520&4294967295,D=O+(A<<16&4294967295|A>>>16),A=k+(D^O^T)+x[2]+3299628645&4294967295,k=D+(A<<23&4294967295|A>>>9),A=T+(D^(k|~O))+x[0]+4096336452&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~D))+x[7]+1126891415&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~k))+x[14]+2878612391&4294967295,D=O+(A<<15&4294967295|A>>>17),A=k+(O^(D|~T))+x[5]+4237533241&4294967295,k=D+(A<<21&4294967295|A>>>11),A=T+(D^(k|~O))+x[12]+1700485571&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~D))+x[3]+2399980690&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~k))+x[10]+4293915773&4294967295,D=O+(A<<15&4294967295|A>>>17),A=k+(O^(D|~T))+x[1]+2240044497&4294967295,k=D+(A<<21&4294967295|A>>>11),A=T+(D^(k|~O))+x[8]+1873313359&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~D))+x[15]+4264355552&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~k))+x[6]+2734768916&4294967295,D=O+(A<<15&4294967295|A>>>17),A=k+(O^(D|~T))+x[13]+1309151649&4294967295,k=D+(A<<21&4294967295|A>>>11),A=T+(D^(k|~O))+x[4]+4149444226&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~D))+x[11]+3174756917&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~k))+x[2]+718787259&4294967295,D=O+(A<<15&4294967295|A>>>17),A=k+(O^(D|~T))+x[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+O&4294967295}i.prototype.u=function(P,T){T===void 0&&(T=P.length);for(var k=T-this.blockSize,x=this.B,D=this.h,O=0;O<T;){if(D==0)for(;O<=k;)o(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<T;)if(x[D++]=P.charCodeAt(O++),D==this.blockSize){o(this,x),D=0;break}}else for(;O<T;)if(x[D++]=P[O++],D==this.blockSize){o(this,x),D=0;break}}this.h=D,this.o+=T},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;var k=8*this.o;for(T=P.length-8;T<P.length;++T)P[T]=k&255,k/=256;for(this.u(P),P=Array(16),T=k=0;4>T;++T)for(var x=0;32>x;x+=8)P[k++]=this.g[T]>>>x&255;return P};function l(P,T){var k=f;return Object.prototype.hasOwnProperty.call(k,P)?k[P]:k[P]=T(P)}function c(P,T){this.h=T;for(var k=[],x=!0,D=P.length-1;0<=D;D--){var O=P[D]|0;x&&O==T||(k[D]=O,x=!1)}this.g=k}var f={};function g(P){return-128<=P&&128>P?l(P,function(T){return new c([T|0],0>T?-1:0)}):new c([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return S;if(0>P)return F(_(-P));for(var T=[],k=1,x=0;P>=k;x++)T[x]=P/k|0,k*=4294967296;return new c(T,0)}function v(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return F(v(P.substring(1),T));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=_(Math.pow(T,8)),x=S,D=0;D<P.length;D+=8){var O=Math.min(8,P.length-D),A=parseInt(P.substring(D,D+O),T);8>O?(O=_(Math.pow(T,O)),x=x.j(O).add(_(A))):(x=x.j(k),x=x.add(_(A)))}return x}var S=g(0),C=g(1),U=g(16777216);n=c.prototype,n.m=function(){if($(this))return-F(this).m();for(var P=0,T=1,k=0;k<this.g.length;k++){var x=this.i(k);P+=(0<=x?x:4294967296+x)*T,T*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(q(this))return"0";if($(this))return"-"+F(this).toString(P);for(var T=_(Math.pow(P,6)),k=this,x="";;){var D=ve(k,T).g;k=ee(k,D.j(T));var O=((0<k.g.length?k.g[0]:k.h)>>>0).toString(P);if(k=D,q(k))return O+x;for(;6>O.length;)O="0"+O;x=O+x}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function q(P){if(P.h!=0)return!1;for(var T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function $(P){return P.h==-1}n.l=function(P){return P=ee(this,P),$(P)?-1:q(P)?0:1};function F(P){for(var T=P.g.length,k=[],x=0;x<T;x++)k[x]=~P.g[x];return new c(k,~P.h).add(C)}n.abs=function(){return $(this)?F(this):this},n.add=function(P){for(var T=Math.max(this.g.length,P.g.length),k=[],x=0,D=0;D<=T;D++){var O=x+(this.i(D)&65535)+(P.i(D)&65535),A=(O>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);x=A>>>16,O&=65535,A&=65535,k[D]=A<<16|O}return new c(k,k[k.length-1]&-2147483648?-1:0)};function ee(P,T){return P.add(F(T))}n.j=function(P){if(q(this)||q(P))return S;if($(this))return $(P)?F(this).j(F(P)):F(F(this).j(P));if($(P))return F(this.j(F(P)));if(0>this.l(U)&&0>P.l(U))return _(this.m()*P.m());for(var T=this.g.length+P.g.length,k=[],x=0;x<2*T;x++)k[x]=0;for(x=0;x<this.g.length;x++)for(var D=0;D<P.g.length;D++){var O=this.i(x)>>>16,A=this.i(x)&65535,Le=P.i(D)>>>16,Xe=P.i(D)&65535;k[2*x+2*D]+=A*Xe,ae(k,2*x+2*D),k[2*x+2*D+1]+=O*Xe,ae(k,2*x+2*D+1),k[2*x+2*D+1]+=A*Le,ae(k,2*x+2*D+1),k[2*x+2*D+2]+=O*Le,ae(k,2*x+2*D+2)}for(x=0;x<T;x++)k[x]=k[2*x+1]<<16|k[2*x];for(x=T;x<2*T;x++)k[x]=0;return new c(k,0)};function ae(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function me(P,T){this.g=P,this.h=T}function ve(P,T){if(q(T))throw Error("division by zero");if(q(P))return new me(S,S);if($(P))return T=ve(F(P),T),new me(F(T.g),F(T.h));if($(T))return T=ve(P,F(T)),new me(F(T.g),T.h);if(30<P.g.length){if($(P)||$(T))throw Error("slowDivide_ only works with positive integers.");for(var k=C,x=T;0>=x.l(P);)k=Ue(k),x=Ue(x);var D=_e(k,1),O=_e(x,1);for(x=_e(x,2),k=_e(k,2);!q(x);){var A=O.add(x);0>=A.l(P)&&(D=D.add(k),O=A),x=_e(x,1),k=_e(k,1)}return T=ee(P,D.j(T)),new me(D,T)}for(D=S;0<=P.l(T);){for(k=Math.max(1,Math.floor(P.m()/T.m())),x=Math.ceil(Math.log(k)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),O=_(k),A=O.j(T);$(A)||0<A.l(P);)k-=x,O=_(k),A=O.j(T);q(O)&&(O=C),D=D.add(O),P=ee(P,A)}return new me(D,P)}n.A=function(P){return ve(this,P).h},n.and=function(P){for(var T=Math.max(this.g.length,P.g.length),k=[],x=0;x<T;x++)k[x]=this.i(x)&P.i(x);return new c(k,this.h&P.h)},n.or=function(P){for(var T=Math.max(this.g.length,P.g.length),k=[],x=0;x<T;x++)k[x]=this.i(x)|P.i(x);return new c(k,this.h|P.h)},n.xor=function(P){for(var T=Math.max(this.g.length,P.g.length),k=[],x=0;x<T;x++)k[x]=this.i(x)^P.i(x);return new c(k,this.h^P.h)};function Ue(P){for(var T=P.g.length+1,k=[],x=0;x<T;x++)k[x]=P.i(x)<<1|P.i(x-1)>>>31;return new c(k,P.h)}function _e(P,T){var k=T>>5;T%=32;for(var x=P.g.length-k,D=[],O=0;O<x;O++)D[O]=0<T?P.i(O+k)>>>T|P.i(O+k+1)<<32-T:P.i(O+k);return new c(D,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Wv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=_,c.fromString=v,as=c}).apply(typeof Hy<"u"?Hy:typeof self<"u"?self:typeof window<"u"?window:{});var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qv,qa,Hv,tc,vf,Kv,Gv,Qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ku=="object"&&Ku];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function v(u,p,y){return u.call.apply(u.bind,arguments)}function S(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function C(u,p,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:S,C.apply(null,arguments)}function U(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function q(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var J=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)J[$e-2]=arguments[$e];return p.prototype[L].apply(E,J)}}function $(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function F(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let J=0;J<B;J++)u[L+J]=E[J]}else u.push(E)}}class ee{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ae(u){return/^[\s\xa0]*$/.test(u)}function me(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ve(u){return ve[" "](u),u}ve[" "]=function(){};var Ue=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function _e(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function P(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function T(u){const p={};for(const y in u)p[y]=u[y];return p}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let B=0;B<k.length;B++)y=k[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function O(u){f.setTimeout(()=>{throw u},0)}function A(){var u=he;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Le{constructor(){this.h=this.g=null}add(p,y){const E=Xe.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Xe=new ee(()=>new st,u=>u.reset());class st{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Z=!1,he=new Le,ne=()=>{const u=f.Promise.resolve(void 0);Pe=()=>{u.then(M)}};var M=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){O(y)}var p=Xe;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}Z=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function ke(u,p){if(ce.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ue){e:{try{ve(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ke.aa.h.call(this)}}q(ke,ce);var De={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Be=0;function He(u,p,y,E,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=L,this.key=++Be,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,p,y,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var J=qr(u,p,E,L);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new He(p,this.src,B,!!E,L),p.fa=y,u.push(p)),p};function Ts(u,p){var y=p.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(vt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function qr(u,p,y,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return L}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),Is={};function $o(u,p,y,E,L){if(Array.isArray(p)){for(var B=0;B<p.length;B++)$o(u,p[B],y,E,L);return null}return y=Ho(y),u&&u[ze]?u.K(p,y,_(E)?!!E.capture:!1,L):Wo(u,p,y,!1,E,L)}function Wo(u,p,y,E,L,B){if(!p)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,$e=As(u);if($e||(u[Ri]=$e=new mr(u)),y=$e.add(p,y,E,J,B),y.proxy)return y;if(E=Pl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ae||(L=J),L===void 0&&(L=!1),u.addEventListener(p.toString(),E,L);else if(u.attachEvent)u.attachEvent(yr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Pl(){function u(y){return p.call(u.src,u.listener,y)}const p=qo;return u}function Ss(u,p,y,E,L){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ss(u,p[B],y,E,L);else E=_(E)?!!E.capture:!!E,y=Ho(y),u&&u[ze]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=qr(B,y,E,L),-1<y&&(vt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=As(u))&&(p=u.g[p.toString()],u=-1,p&&(u=qr(p,y,E,L)),(y=-1<u?p[u]:null)&&gr(y))}function gr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ze])Ts(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(yr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=As(p))?(Ts(y,u),y.h==0&&(y.src=null,p[Ri]=null)):vt(u)}}}function yr(u){return u in Is?Is[u]:Is[u]="on"+u}function qo(u,p){if(u.da)u=!0;else{p=new ke(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&gr(u),u=y.call(E,p)}return u}function As(u){return u=u[Ri],u instanceof mr?u:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(u){return typeof u=="function"?u:(u[ks]||(u[ks]=function(p){return u.handleEvent(p)}),u[ks])}function ht(){W.call(this),this.i=new mr(this),this.M=this,this.F=null}q(ht,W),ht.prototype[ze]=!0,ht.prototype.removeEventListener=function(u,p,y,E){Ss(this,u,p,y,E)};function ft(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new ce(p,u);else if(p instanceof ce)p.target=p.target||u;else{var L=p;p=new ce(E,u),x(p,L)}if(L=!0,y)for(var B=y.length-1;0<=B;B--){var J=p.g=y[B];L=_r(J,E,!0,p)&&L}if(J=p.g=u,L=_r(J,E,!0,p)&&L,L=_r(J,E,!1,p)&&L,y)for(B=0;B<y.length;B++)J=p.g=y[B],L=_r(J,E,!1,p)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)vt(y[E]);delete u.g[p],u.h--}}this.F=null},ht.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ht.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function _r(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,B=0;B<p.length;++B){var J=p[B];if(J&&!J.da&&J.capture==y){var $e=J.listener,pt=J.ha||J.src;J.fa&&Ts(u.i,J),L=$e.call(pt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ko(u,p,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Hr(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Pi extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(u){W.call(this),this.h=u,this.g={}}q(xi,W);var Go=[];function Qo(u){_e(u.g,function(p,y){this.g.hasOwnProperty(y)&&gr(p)},u),u.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Qo(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yo=f.JSON.stringify,Xo=f.JSON.parse,Jo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ni(){}Ni.prototype.h=null;function Cs(u){return u.h||(u.h=u.i())}function Rs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qn(){ce.call(this,"d")}q(qn,ce);function Ps(){ce.call(this,"c")}q(Ps,ce);var Hn={},Zo=null;function bi(){return Zo=Zo||new ht}Hn.La="serverreachability";function ea(u){ce.call(this,Hn.La,u)}q(ea,ce);function vr(u){const p=bi();ft(p,new ea(p))}Hn.STAT_EVENT="statevent";function ta(u,p){ce.call(this,Hn.STAT_EVENT,u),this.stat=p}q(ta,ce);function ot(u){const p=bi();ft(p,new ta(p,u))}Hn.Ma="timingevent";function xs(u,p){ce.call(this,Hn.Ma,u),this.size=p}q(xs,ce);function An(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Di(){this.g=!0}Di.prototype.xa=function(){this.g=!1};function Oi(u,p,y,E,L,B){u.info(function(){if(u.g)if(B)for(var J="",$e=B.split("&"),pt=0;pt<$e.length;pt++){var Oe=$e[pt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var ut=wt.split("_");J=2<=ut.length&&ut[1]=="type"?J+(wt+"="+Oe+"&"):J+(wt+"=redacted&")}}else J=null;else J=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+p+`
`+y+`
`+J})}function Ns(u,p,y,E,L,B,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+p+`
`+y+`
`+B+" "+J})}function kn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Jc(u,y)+(E?" "+E:"")})}function na(u,p){u.info(function(){return"TIMEOUT: "+p})}Di.prototype.info=function(){};function Jc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return Yo(y)}catch{return p}}var bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Mi(){}q(Mi,Ni),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Cn=new Mi;function Rn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nl}function Nl(){this.i=null,this.g="",this.h=!1}var ra={},Ds={};function Os(u,p,y){u.L=1,u.v=Xr(sn(p)),u.m=y,u.P=!0,ia(u,null)}function ia(u,p){u.F=Date.now(),Ke(u),u.A=sn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Zr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Nl,u.g=Ql(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Pi(C(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Go[0]=L.toString()),L=Go);for(var B=0;B<L.length;B++){var J=$o(y,L[B],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),vr(),Oi(u.i,u.u,u.A,u.l,u.R,u.m)}Rn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Yt(u)==3?p.j():this.Y(u)},Rn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Yt(this.g);var p=this.g.Ba();const mn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||ca(this.g)))){this.J||ut!=4||p==7||(p==8||0>=mn?vr(3):vr(2)),Li(this);var y=this.g.Z();this.X=y;t:if(bl(this)){var E=ca(this.g);u="";var L=E.length,B=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Kr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==L-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Ns(this.i,this.u,this.A,this.l,this.R,ut,y),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,pt=this.g;if(($e=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae($e)){var Oe=$e;break t}}Oe=null}if(y=Oe)kn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sa(this,y);else{this.o=!1,this.s=3,ot(12),fn(this),Kr(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<J.length;)if(an=Zc(this,J),an==Ds){ut==4&&(this.s=4,ot(14),y=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==ra){this.s=4,ot(15),kn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else kn(this.i,this.l,an,null),sa(this,an);if(bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||J.length!=0||this.h.h||(this.s=1,ot(16),y=!1),this.o=this.o&&y,!y)kn(this.i,this.l,J,"[Invalid Chunked Response]"),fn(this),Kr(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ha(wt),wt.M=!0,ot(11))}}else kn(this.i,this.l,J,null),sa(this,J);ut==4&&fn(this),this.o&&!this.J&&(ut==4?qs(this.j,this):(this.o=!1,Ke(this)))}else Us(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),fn(this),Kr(this)}}}catch{}finally{}};function bl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Zc(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Ds:(y=Number(p.substring(y,E)),isNaN(y)?ra:(E+=1,E+y>p.length?Ds:(p=p.slice(E,E+y),u.C=E+y,p)))}Rn.prototype.cancel=function(){this.J=!0,fn(this)};function Ke(u){u.S=Date.now()+u.I,Dl(u,u.I)}function Dl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(C(u.ba,u),p)}function Li(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Rn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(na(this.i,this.A),this.L!=2&&(vr(),ot(17)),fn(this),this.s=2,Kr(this)):Dl(this,this.S-u)};function Kr(u){u.j.G==0||u.J||qs(u.j,u)}function fn(u){Li(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Qo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function sa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Wt(y.h,u))){if(!u.K&&Wt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ws(y),Dn(y);else break e;$s(y),ot(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=An(C(y.Za,y),6e3));if(1>=Ml(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Sr(y,11)}else if((u.K||y.g==u)&&Ws(y),!ae(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Oe=L[p];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const wt=Oe[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const ut=Oe[4];ut!=null&&(y.Aa=ut,y.j.info("SVER="+y.Aa));const mn=Oe[5];mn!=null&&typeof mn=="number"&&0<mn&&(E=1.5*mn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const an=u.g;if(an){const $i=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var B=E.h;B.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(oa(B,B.h),B.h=null))}if(E.D){const Ks=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(E.ya=Ks,qe(E.I,E.D,Ks))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=Gl(E,E.J?E.ia:null,E.W),J.K){Ll(E.h,J);var $e=J,pt=E.L;pt&&($e.I=pt),$e.B&&(Li($e),Ke($e)),E.g=J}else Bi(E);0<y.i.length&&Yn(y)}else Oe[0]!="stop"&&Oe[0]!="close"||Sr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Sr(y,7):Ct(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}vr(4)}catch{}}var Ol=class{constructor(u,p){this.g=u,this.map=p}};function Vi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ml(u){return u.h?1:u.g?u.g.size:0}function Wt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function oa(u,p){u.g?u.g.add(p):u.h=p}function Ll(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Vi.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Vl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return $(u.i)}function Ms(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Ls(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Gr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Ls(u),E=Ms(u),L=E.length,B=0;B<L;B++)p.call(void 0,E[B],y&&y[B],u)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var B=u[y].substring(0,E);L=u[y].substring(E+1)}else B=u[y];p(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function wr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof wr){this.h=u.h,ji(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var p=u.i,y=new Kn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Yr(this,y),this.m=u.m}else u&&(p=String(u).match(Fi))?(this.h=!1,ji(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Qr(this,p[4]),this.l=Ne(p[5]||"",!0),Yr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}wr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Jr(p,Vs,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Jr(p,Vs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Jr(y,y.charAt(0)=="/"?Ul:jl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Jr(y,aa)),u.join("")};function sn(u){return new wr(u)}function ji(u,p,y){u.j=y?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Yr(u,p,y){p instanceof Kn?(u.i=p,Gn(u.i,u.h)):(y||(p=Jr(p,zl)),u.i=new Kn(p,u.h))}function qe(u,p,y){u.i.set(p,y)}function Xr(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Jr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Fl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Fl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Vs=/[#\/\?@]/g,jl=/[#\?:]/g,Ul=/[#\?]/g,zl=/[#\?@]/g,aa=/#/g;function Kn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&ed(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}n=Kn.prototype,n.add=function(u,p){kt(this),this.i=null,u=pn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Pn(u,p){kt(u),p=pn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function xn(u,p){return kt(u),p=pn(u,p),u.g.has(p)}n.forEach=function(u,p){kt(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(p,L,E,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const L=u[E];for(let B=0;B<L.length;B++)y.push(p[E])}return y},n.V=function(u){kt(this);let p=[];if(typeof u=="string")xn(this,u)&&(p=p.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},n.set=function(u,p){return kt(this),this.i=null,u=pn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Zr(u,p,y){Pn(u,p),0<y.length&&(u.i=null,u.g.set(pn(u,p),$(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=B;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),u.push(L)}}return this.i=u.join("&")};function pn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Gn(u,p){p&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Pn(this,E),Zr(this,L,y))},u)),u.j=p}function td(u,p){const y=new Di;if(f.Image){const E=new Image;E.onload=U(Qt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=U(Qt,y,"TestLoadImage: error",!1,p,E),E.onabort=U(Qt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=U(Qt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Bl(u,p){const y=new Di,E=new AbortController,L=setTimeout(()=>{E.abort(),Qt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?Qt(y,"TestPingServer: ok",!0,p):Qt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Qt(y,"TestPingServer: error",!1,p)})}function Qt(u,p,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function nd(){this.g=new Jo}function $l(u,p,y){const E=y||"";try{Gr(u,function(L,B){let J=L;_(L)&&(J=Yo(L)),p.push(E+B+"="+encodeURIComponent(J))})}catch(L){throw p.push(E+"type="+encodeURIComponent("_badmap")),L}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}q(Er,Ni),Er.prototype.g=function(){return new Ui(this.l,this.j)},Er.prototype.i=(function(u){return function(){return u}})({});function Ui(u,p){ht.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Ui,ht),n=Ui.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Nn(this):bn(this),this.readyState==3&&Wl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Nn(this))},n.Qa=function(u){this.g&&(this.response=u,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,bn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let p="";return _e(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function ei(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Tr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):qe(u,p,y))}function Je(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Je,ht);var rd=/^https?$/i,la=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Cs(this.o):Cs(Cn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){zi(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(la,p,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,J]of y)this.g.setRequestHeader(B,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){zi(this,B)}};function zi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Fs(u),on(u)}function Fs(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},n.bb=function(){ua(this)};function ua(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)Ko(u.Ea,0,u);else if(ft(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=J===0){var L=String(u.D).match(Fi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),E=!rd.test(L?L.toLowerCase():"")}y=E}if(y)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var B=2<Yt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Fs(u)}}finally{on(u)}}}}function on(u,p){if(u.g){js(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ft(u,"ready");try{y.onreadystatechange=E}catch{}}}function js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Xo(p)}};function ca(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Us(u){const p={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ae(u[E]))continue;var y=D(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[L]||[];p[L]=B,B.push(y)}P(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function da(u){this.Aa=0,this.i=[],this.j=new Di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(u&&u.concurrentRequestLimit),this.Da=new nd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(u,p,y,E){ot(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Gl(this,null,this.W),Yn(this)};function Ct(u){if(zs(u),u.G==3){var p=u.U++,y=sn(u.I);if(qe(y,"SID",u.K),qe(y,"RID",p),qe(y,"TYPE","terminate"),Ir(u,y),p=new Rn(u,u.j,p),p.L=2,p.v=Xr(sn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Ql(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ke(p)}Kl(u)}function Dn(u){u.g&&(ha(u),u.g.cancel(),u.g=null)}function zs(u){Dn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ws(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Yn(u){if(!rn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Pe||ne(),Z||(Pe(),Z=!0),he.add(p,u),u.B=0}}function id(u,p){return Ml(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(C(u.Ga,u,p),Hl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Rn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=T(B),x(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ti(this,L,p),y=sn(this.I),qe(y,"RID",u),qe(y,"CVER",22),this.D&&qe(y,"X-HTTP-Session-Id",this.D),Ir(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Tr(B)))+"&"+p:this.m&&ei(y,this.m,B)),oa(this.h,L),this.Ua&&qe(y,"TYPE","init"),this.P?(qe(y,"$req",p),qe(y,"SID","null"),L.T=!0,Os(L,y,null)):Os(L,y,p),this.G=2}}else this.G==3&&(u?Bs(this,u):this.i.length==0||rn(this.h)||Bs(this))};function Bs(u,p){var y;p?y=p.l:y=u.U++;const E=sn(u.I);qe(E,"SID",u.K),qe(E,"RID",y),qe(E,"AID",u.T),Ir(u,E),u.m&&u.o&&ei(E,u.m,u.o),y=new Rn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ti(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),oa(u.h,y),Os(y,E,p)}function Ir(u,p){u.H&&_e(u.H,function(y,E){qe(p,E,y)}),u.l&&Gr({},function(y,E){qe(p,E,y)})}function ti(u,p,y){y=Math.min(u.i.length,y);var E=u.l?C(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const J=["count="+y];B==-1?0<y?(B=L[0].g,J.push("ofs="+B)):B=0:J.push("ofs="+B);let $e=!0;for(let pt=0;pt<y;pt++){let Oe=L[pt].g;const wt=L[pt].map;if(Oe-=B,0>Oe)B=Math.max(0,L[pt].g-100),$e=!1;else try{$l(wt,J,"req"+Oe+"_")}catch{E&&E(wt)}}if($e){E=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Bi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Pe||ne(),Z||(Pe(),Z=!0),he.add(p,u),u.v=0}}function $s(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(C(u.Fa,u),Hl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(C(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Dn(this),ql(this))};function ha(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function ql(u){u.g=new Rn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);qe(p,"RID","rpc"),qe(p,"SID",u.K),qe(p,"AID",u.T),qe(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(p,"TO",u.ja),qe(p,"TYPE","xmlhttp"),Ir(u,p),u.m&&u.o&&ei(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Xr(sn(p)),y.m=null,y.P=!0,ia(y,u)}n.Za=function(){this.C!=null&&(this.C=null,Dn(this),$s(this),ot(19))};function Ws(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function qs(u,p){var y=null;if(u.g==p){Ws(u),ha(u),u.g=null;var E=2}else if(Wt(u.h,p))y=p.D,Ll(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;E=bi(),ft(E,new xs(E,y)),Yn(u)}else Bi(u);else if(L=p.s,L==3||L==0&&0<p.X||!(E==1&&id(u,p)||E==2&&$s(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function Hl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Sr(u,p){if(u.j.info("Error code "+p),p==2){var y=C(u.fb,u),E=u.Xa;const L=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ji(E,"https"),Xr(E),L?td(E.toString(),y):Bl(E.toString(),y)}else ot(2);u.G=0,u.l&&u.l.sa(p),Kl(u),zs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Kl(u){if(u.G=0,u.ka=[],u.l){const p=Vl(u.h);(p.length!=0||u.i.length!=0)&&(F(u.ka,p),F(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Gl(u,p,y){var E=y instanceof wr?sn(y):new wr(y);if(E.g!="")p&&(E.g=p+"."+E.g),Qr(E,E.s);else{var L=f.location;E=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var B=new wr(null);E&&ji(B,E),p&&(B.g=p),L&&Qr(B,L),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&qe(E,y,p),qe(E,"VER",u.la),Ir(u,E),E}function Ql(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Je(new Er({eb:y})):new Je(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}n=fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hs(){}Hs.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){ht.call(this),this.g=new da(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ae(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ae(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Xn(this)}q(qt,ht),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Ct(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Yo(u),u=y);p.i.push(new Ol(p.Ya++,u)),p.G==3&&Yn(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,qt.aa.N.call(this)};function Yl(u){qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}q(Yl,qn);function Xl(){Ps.call(this),this.status=1}q(Xl,Ps);function Xn(u){this.g=u}q(Xn,fa),Xn.prototype.ua=function(){ft(this.g,"a")},Xn.prototype.ta=function(u){ft(this.g,new Yl(u))},Xn.prototype.sa=function(u){ft(this.g,new Xl)},Xn.prototype.ra=function(){ft(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Qv=function(){return new Hs},Gv=function(){return bi()},Kv=Hn,vf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bs.NO_ERROR=0,bs.TIMEOUT=8,bs.HTTP_ERROR=6,tc=bs,xl.COMPLETE="complete",Hv=xl,Rs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,qa=Rs,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,qv=Je}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});const Ky="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new $f("@firebase/firestore");function ja(){return ps.logLevel}function oe(n,...e){if(ps.logLevel<=be.DEBUG){const t=e.map(tp);ps.debug(`Firestore (${jo}): ${n}`,...t)}}function Br(n,...e){if(ps.logLevel<=be.ERROR){const t=e.map(tp);ps.error(`Firestore (${jo}): ${n}`,...t)}}function Co(n,...e){if(ps.logLevel<=be.WARN){const t=e.map(tp);ps.warn(`Firestore (${jo}): ${n}`,...t)}}function tp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function We(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class Lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Vk{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ls,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ls)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(We(typeof i.accessToken=="string"),new Yv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Ut(e)}}class Fk{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jk{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Fk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){We(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(We(typeof t.token=="string"),this.R=t.token,new Uk(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=Bk(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function je(n,e){return n<e?-1:n>e?1:0}function Ro(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ge(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new _t(0,0))}static max(){return new Ie(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return sl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sl?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class it extends sl{construct(e,t,i){return new it(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ge(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new it(t)}static emptyPath(){return new it([])}}const $k=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends sl{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return $k.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ge(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ge(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ge(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ge(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(it.fromString(e))}static fromName(e){return new ye(it.fromString(e).popFirst(5))}static empty(){return new ye(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new it(e.slice()))}}function Wk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Si(o,ye.empty(),e)}function qk(n){return new Si(n.readTime,n.key,-1)}class Si{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Si(Ie.min(),ye.empty(),-1)}static max(){return new Si(Ie.max(),ye.empty(),-1)}}function Hk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:je(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==Kk)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(g=>i(g)))})),c=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((v=>{c[_]=v,++f,f===l&&i(c)}),(v=>o(v)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function Qk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}np.oe=-1;function Vc(n){return n==null}function vc(n){return n===0&&1/n==-1/0}function Yk(n){return typeof n=="number"&&Number.isInteger(n)&&!vc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Uo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gu(this.root,e,this.comparator,!0)}}class Gu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qy(this.data.getIterator())}getIteratorFrom(e){return new Qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class Qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new bt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zv("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(n){if(We(!!n),typeof n=="string"){let e=0;const t=Xk.exec(n);if(We(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ms(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ip(n){const e=n.mapValue.fields.__previous_value__;return rp(e)?ip(e):e}function ol(n){const e=Ai(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t,i,o,l,c,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_}}class al{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new al("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={mapValue:{}};function gs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rp(n)?4:e1(n)?9007199254740991:Zk(n)?10:11:Te()}function cr(n,e){if(n===e)return!0;const t=gs(n);if(t!==gs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ol(n).isEqual(ol(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ai(o.timestampValue),f=Ai(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return ms(o.bytesValue).isEqual(ms(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=lt(o.doubleValue),f=lt(l.doubleValue);return c===f?vc(c)===vc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Ro(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Gy(c)!==Gy(f))return!1;for(const g in c)if(c.hasOwnProperty(g)&&(f[g]===void 0||!cr(c[g],f[g])))return!1;return!0})(n,e);default:return Te()}}function ll(n,e){return(n.values||[]).find((t=>cr(t,e)))!==void 0}function Po(n,e){if(n===e)return 0;const t=gs(n),i=gs(e);if(t!==i)return je(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return je(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=lt(l.integerValue||l.doubleValue),g=lt(c.integerValue||c.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return Yy(n.timestampValue,e.timestampValue);case 4:return Yy(ol(n),ol(e));case 5:return je(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=ms(l),g=ms(c);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),g=c.split("/");for(let _=0;_<f.length&&_<g.length;_++){const v=je(f[_],g[_]);if(v!==0)return v}return je(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=je(lt(l.latitude),lt(c.latitude));return f!==0?f:je(lt(l.longitude),lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Xy(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,g,_,v;const S=l.fields||{},C=c.fields||{},U=(f=S.value)===null||f===void 0?void 0:f.arrayValue,q=(g=C.value)===null||g===void 0?void 0:g.arrayValue,$=je(((_=U?.values)===null||_===void 0?void 0:_.length)||0,((v=q?.values)===null||v===void 0?void 0:v.length)||0);return $!==0?$:Xy(U,q)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Qu.mapValue&&c===Qu.mapValue)return 0;if(l===Qu.mapValue)return 1;if(c===Qu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=c.fields||{},v=Object.keys(_);g.sort(),v.sort();for(let S=0;S<g.length&&S<v.length;++S){const C=je(g[S],v[S]);if(C!==0)return C;const U=Po(f[g[S]],_[v[S]]);if(U!==0)return U}return je(g.length,v.length)})(n.mapValue,e.mapValue);default:throw Te()}}function Yy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return je(n,e);const t=Ai(n),i=Ai(e),o=je(t.seconds,i.seconds);return o!==0?o:je(t.nanos,i.nanos)}function Xy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Po(t[o],i[o]);if(l)return l}return je(t.length,i.length)}function xo(n){return wf(n)}function wf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ai(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ms(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ye.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=wf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${wf(t.fields[c])}`;return o+"}"})(n.mapValue):Te()}function Ef(n){return!!n&&"integerValue"in n}function sp(n){return!!n&&"arrayValue"in n}function Jy(n){return!!n&&"nullValue"in n}function Zy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nc(n){return!!n&&"mapValue"in n}function Zk(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ya(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Uo(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ya(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ya(n.arrayValue.values[t]);return e}return Object.assign({},n)}function e1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=Ya(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Uo(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Tn(Ya(this.value))}}function e0(n){const e=[];return Uo(n.fields,((t,i)=>{const o=new Nt([t]);if(nc(i)){const l=e0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Ie.min(),Ie.min(),Ie.min(),Tn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ie.min(),Ie.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ie.min(),Ie.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.position=e,this.inclusive=t}}function e_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=Po(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function t_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t="asc"){this.field=e,this.dir=t}}function t1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{}class yt extends t0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new r1(e,t,i):t==="array-contains"?new o1(e,i):t==="in"?new a1(e,i):t==="not-in"?new l1(e,i):t==="array-contains-any"?new u1(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new i1(e,i):new s1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Po(t,this.value)):t!==null&&gs(this.value)===gs(t)&&this.matchesComparison(Po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends t0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dr(e,t)}matches(e){return n0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function n0(n){return n.op==="and"}function r0(n){return n1(n)&&n0(n)}function n1(n){for(const e of n.filters)if(e instanceof dr)return!1;return!0}function Tf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+xo(n.value);if(r0(n))return n.filters.map((e=>Tf(e))).join(",");{const e=n.filters.map((t=>Tf(t))).join(",");return`${n.op}(${e})`}}function i0(n,e){return n instanceof yt?(function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)})(n,e):n instanceof dr?(function(i,o){return o instanceof dr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&i0(c,o.filters[f])),!0):!1})(n,e):void Te()}function s0(n){return n instanceof yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${xo(t.value)}`})(n):n instanceof dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(s0).join(" ,")+"}"})(n):"Filter"}class r1 extends yt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class i1 extends yt{constructor(e,t){super(e,"in",t),this.keys=o0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class s1 extends yt{constructor(e,t){super(e,"not-in",t),this.keys=o0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function o0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>ye.fromName(i.referenceValue)))}class o1 extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sp(t)&&ll(t.arrayValue,this.value)}}class a1 extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ll(this.value.arrayValue,t)}}class l1 extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ll(this.value.arrayValue,t)}}class u1 extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ll(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.ue=null}}function n_(n,e=null,t=[],i=[],o=null,l=null,c=null){return new c1(n,e,t,i,o,l,c)}function op(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Tf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Vc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>xo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>xo(i))).join(",")),e.ue=t}return e.ue}function ap(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!t1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!i0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!t_(n.startAt,e.startAt)&&t_(n.endAt,e.endAt)}function If(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function d1(n,e,t,i,o,l,c,f){return new Fc(n,e,t,i,o,l,c,f)}function lp(n){return new Fc(n)}function r_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function h1(n){return n.collectionGroup!==null}function Xa(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new bt(Nt.comparator);return c.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Ec(l,i))})),t.has(Nt.keyField().canonicalString())||e.ce.push(new Ec(Nt.keyField(),i))}return e.ce}function or(n){const e=Se(n);return e.le||(e.le=f1(e,Xa(n))),e.le}function f1(n,e){if(n.limitType==="F")return n_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Ec(o.field,l)}));const t=n.endAt?new wc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new wc(n.startAt.position,n.startAt.inclusive):null;return n_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Sf(n,e,t){return new Fc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jc(n,e){return ap(or(n),or(e))&&n.limitType===e.limitType}function a0(n){return`${op(or(n))}|lt:${n.limitType}`}function mo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>s0(o))).join(", ")}]`),Vc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>xo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>xo(o))).join(",")),`Target(${i})`})(or(n))}; limitType=${n.limitType})`}function Uc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of Xa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,g){const _=e_(c,f,g);return c.inclusive?_<=0:_<0})(i.startAt,Xa(i),o)||i.endAt&&!(function(c,f,g){const _=e_(c,f,g);return c.inclusive?_>=0:_>0})(i.endAt,Xa(i),o))})(n,e)}function p1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function l0(n){return(e,t)=>{let i=!1;for(const o of Xa(n)){const l=m1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function m1(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,c,f){const g=c.data.field(l),_=f.data.field(l);return g!==null&&_!==null?Po(g,_):Te()})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Uo(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Jv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new nt(ye.comparator);function $r(){return g1}const u0=new nt(ye.comparator);function Ha(...n){let e=u0;for(const t of n)e=e.insert(t.key,t);return e}function c0(n){let e=u0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ss(){return Ja()}function d0(){return Ja()}function Ja(){return new zo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const y1=new nt(ye.comparator),_1=new bt(ye.comparator);function xe(...n){let e=_1;for(const t of n)e=e.add(t);return e}const v1=new bt(je);function w1(){return v1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function h0(n){return{integerValue:""+n}}function E1(n,e){return Yk(e)?h0(e):up(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._=void 0}}function T1(n,e,t){return n instanceof Tc?(function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&rp(l)&&(l=ip(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}})(t,e):n instanceof ul?p0(n,e):n instanceof cl?m0(n,e):(function(o,l){const c=f0(o,l),f=i_(c)+i_(o.Pe);return Ef(c)&&Ef(o.Pe)?h0(f):up(o.serializer,f)})(n,e)}function I1(n,e,t){return n instanceof ul?p0(n,e):n instanceof cl?m0(n,e):t}function f0(n,e){return n instanceof Ic?(function(i){return Ef(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Tc extends zc{}class ul extends zc{constructor(e){super(),this.elements=e}}function p0(n,e){const t=g0(e);for(const i of n.elements)t.some((o=>cr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class cl extends zc{constructor(e){super(),this.elements=e}}function m0(n,e){let t=g0(e);for(const i of n.elements)t=t.filter((o=>!cr(o,i)));return{arrayValue:{values:t}}}class Ic extends zc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function i_(n){return lt(n.integerValue||n.doubleValue)}function g0(n){return sp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function S1(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof ul&&o instanceof ul||i instanceof cl&&o instanceof cl?Ro(i.elements,o.elements,cr):i instanceof Ic&&o instanceof Ic?cr(i.Pe,o.Pe):i instanceof Tc&&o instanceof Tc})(n.transform,e.transform)}class A1{constructor(e,t){this.version=e,this.transformResults=t}}class ar{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bc{}function y0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cp(n.key,ar.none()):new Al(n.key,n.data,ar.none());{const t=n.data,i=Tn.empty();let o=new bt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new ws(n.key,i,new zn(o.toArray()),ar.none())}}function k1(n,e,t){n instanceof Al?(function(o,l,c){const f=o.value.clone(),g=o_(o.fieldTransforms,l,c.transformResults);f.setAll(g),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof ws?(function(o,l,c){if(!rc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=o_(o.fieldTransforms,l,c.transformResults),g=l.data;g.setAll(_0(o)),g.setAll(f),l.convertToFoundDocument(c.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Za(n,e,t,i){return n instanceof Al?(function(l,c,f,g){if(!rc(l.precondition,c))return f;const _=l.value.clone(),v=a_(l.fieldTransforms,g,c);return _.setAll(v),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),null})(n,e,t,i):n instanceof ws?(function(l,c,f,g){if(!rc(l.precondition,c))return f;const _=a_(l.fieldTransforms,g,c),v=c.data;return v.setAll(_0(l)),v.setAll(_),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(n,e,t,i):(function(l,c,f){return rc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function C1(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=f0(i.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(i.field,l))}return t||null}function s_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Ro(i,o,((l,c)=>S1(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Al extends Bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ws extends Bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function _0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function o_(n,e,t){const i=new Map;We(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,I1(c,f,t[o]))}return i}function a_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,T1(l,c,e))}return i}class cp extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class R1 extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&k1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=d0();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const g=y0(c,f);g!==null&&i.set(o.key,g),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,((t,i)=>s_(t,i)))&&Ro(this.baseMutations,e.baseMutations,((t,i)=>s_(t,i)))}}class dp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){We(e.mutations.length===i.length);let o=(function(){return y1})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new dp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Me;function b1(n){switch(n){default:return Te();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function v0(n){if(n===void 0)return Br("GRPC error has no .code"),Y.UNKNOWN;switch(n){case dt.OK:return Y.OK;case dt.CANCELLED:return Y.CANCELLED;case dt.UNKNOWN:return Y.UNKNOWN;case dt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case dt.INTERNAL:return Y.INTERNAL;case dt.UNAVAILABLE:return Y.UNAVAILABLE;case dt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case dt.NOT_FOUND:return Y.NOT_FOUND;case dt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case dt.ABORTED:return Y.ABORTED;case dt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case dt.DATA_LOSS:return Y.DATA_LOSS;default:return Te()}}(Me=dt||(dt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new as([4294967295,4294967295],0);function l_(n){const e=D1().encode(n),t=new Wv;return t.update(e),new Uint8Array(t.digest())}function u_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new as([t,i],0),new as([o,l],0)]}class hp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(i<0)throw new Ka(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=as.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(as.fromNumber(i)));return o.compare(O1)===1&&(o=new as([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=l_(e),[i,o]=u_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new hp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.Ie===0)return;const t=l_(e),[i,o]=u_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,kl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new $c(Ie.min(),o,new nt(je),$r(),xe())}}class kl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new kl(i,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class w0{constructor(e,t){this.targetId=e,this.me=t}}class E0{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class c_{constructor(){this.fe=0,this.ge=h_(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=xe(),t=xe(),i=xe();return this.ge.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}})),new kl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=h_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class M1{constructor(e){this.Le=e,this.Be=new Map,this.ke=$r(),this.qe=d_(),this.Qe=new nt(je)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Te()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((i,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(If(l))if(i===0){const c=new ye(l.path);this.Ue(t,c,zt.newNoDocument(c,Ie.min()))}else We(i===1);else{const c=this.Ye(t);if(c!==i){const f=this.Ze(e),g=f?this.Xe(f,e,c):1;if(g!==0){this.je(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,_)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=ms(i).toUint8Array()}catch(g){if(g instanceof Zv)return Co("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new hp(c,o,l)}catch(g){return Co(g instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Ie===0?null:f}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Le.tt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((l,c)=>{const f=this.Je(c);if(f){if(l.current&&If(f.target)){const g=new ye(f.target.path);this.ke.get(g)!==null||this.it(c,g)||this.Ue(c,g,zt.newNoDocument(g,e))}l.be&&(t.set(c,l.ve()),l.Ce())}}));let i=xe();this.qe.forEach(((l,c)=>{let f=!0;c.forEachWhile((g=>{const _=this.Je(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ke.forEach(((l,c)=>c.setReadTime(e)));const o=new $c(e,t,this.Qe,this.ke,i);return this.ke=$r(),this.qe=d_(),this.Qe=new nt(je),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new c_,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new bt(je),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new c_),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function d_(){return new nt(ye.comparator)}function h_(){return new nt(ye.comparator)}const L1={asc:"ASCENDING",desc:"DESCENDING"},V1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},F1={and:"AND",or:"OR"};class j1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Af(n,e){return n.useProto3Json||Vc(e)?e:{value:e}}function Sc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function U1(n,e){return Sc(n,e.toTimestamp())}function lr(n){return We(!!n),Ie.fromTimestamp((function(t){const i=Ai(t);return new _t(i.seconds,i.nanos)})(n))}function fp(n,e){return kf(n,e).canonicalString()}function kf(n,e){const t=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function I0(n){const e=it.fromString(n);return We(R0(e)),e}function Cf(n,e){return fp(n.databaseId,e.path)}function Wh(n,e){const t=I0(e);if(t.get(1)!==n.databaseId.projectId)throw new ge(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ge(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(A0(t))}function S0(n,e){return fp(n.databaseId,e)}function z1(n){const e=I0(n);return e.length===4?it.emptyPath():A0(e)}function Rf(n){return new it(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function A0(n){return We(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function f_(n,e,t){return{name:Cf(n,e),fields:t.value.mapValue.fields}}function B1(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,v){return _.useProto3Json?(We(v===void 0||typeof v=="string"),Ot.fromBase64String(v||"")):(We(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Ot.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(_){const v=_.code===void 0?Y.UNKNOWN:v0(_.code);return new ge(v,_.message||"")})(c);t=new E0(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Wh(n,i.document.name),l=lr(i.document.updateTime),c=i.document.createTime?lr(i.document.createTime):Ie.min(),f=new Tn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,c,f),_=i.targetIds||[],v=i.removedTargetIds||[];t=new ic(_,v,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Wh(n,i.document),l=i.readTime?lr(i.readTime):Ie.min(),c=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ic([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Wh(n,i.document),l=i.removedTargetIds||[];t=new ic([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new N1(o,l),f=i.targetId;t=new w0(f,c)}}return t}function $1(n,e){let t;if(e instanceof Al)t={update:f_(n,e.key,e.value)};else if(e instanceof cp)t={delete:Cf(n,e.key)};else if(e instanceof ws)t={update:f_(n,e.key,e.data),updateMask:J1(e.fieldMask)};else{if(!(e instanceof R1))return Te();t={verify:Cf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Tc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ul)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof cl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ic)return{fieldPath:c.field.canonicalString(),increment:f.Pe};throw Te()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:U1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()})(n,e.precondition)),t}function W1(n,e){return n&&n.length>0?(We(e!==void 0),n.map((t=>(function(o,l){let c=o.updateTime?lr(o.updateTime):lr(l);return c.isEqual(Ie.min())&&(c=lr(l)),new A1(c,o.transformResults||[])})(t,e)))):[]}function q1(n,e){return{documents:[S0(n,e.path)]}}function H1(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=S0(n,o);const l=(function(_){if(_.length!==0)return C0(dr.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(_){if(_.length!==0)return _.map((v=>(function(C){return{field:go(C.field),direction:Q1(C.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Af(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{_t:t,parent:o}}function K1(n){let e=z1(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){We(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(S){const C=k0(S);return C instanceof dr&&r0(C)?C.getFilters():[C]})(t.where));let c=[];t.orderBy&&(c=(function(S){return S.map((C=>(function(q){return new Ec(yo(q.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(S){let C;return C=typeof S=="object"?S.value:S,Vc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(S){const C=!!S.before,U=S.values||[];return new wc(U,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(S){const C=!S.before,U=S.values||[];return new wc(U,C)})(t.endAt)),d1(e,o,c,l,f,"F",g,_)}function G1(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function k0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=yo(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=yo(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=yo(t.unaryFilter.field);return yt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}})(n):n.fieldFilter!==void 0?(function(t){return yt.create(yo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return dr.create(t.compositeFilter.filters.map((i=>k0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}})(t.compositeFilter.op))})(n):Te()}function Q1(n){return L1[n]}function Y1(n){return V1[n]}function X1(n){return F1[n]}function go(n){return{fieldPath:n.canonicalString()}}function yo(n){return Nt.fromServerFormat(n.fieldPath)}function C0(n){return n instanceof yt?(function(t){if(t.op==="=="){if(Zy(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NAN"}};if(Jy(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zy(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NAN"}};if(Jy(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(t.field),op:Y1(t.op),value:t.value}}})(n):n instanceof dr?(function(t){const i=t.getFilters().map((o=>C0(o)));return i.length===1?i[0]:{compositeFilter:{op:X1(t.op),filters:i}}})(n):Te()}function J1(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function R0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),f=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.ct=e}}function eC(n){const e=K1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.un=new nC}addToCollectionParentIndex(e,t){return this.un.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Si.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class nC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new bt(it.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new bt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new No(0)}static kn(){return new No(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.changes=new zo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&Za(i.mutation,o,zn.empty(),_t.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,xe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=xe()){const o=ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Ha();return l.forEach(((f,g)=>{c=c.insert(f,g.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=ss();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,xe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=$r();const c=Ja(),f=(function(){return Ja()})();return t.forEach(((g,_)=>{const v=i.get(_.key);o.has(_.key)&&(v===void 0||v.mutation instanceof ws)?l=l.insert(_.key,_):v!==void 0?(c.set(_.key,v.mutation.getFieldMask()),Za(v.mutation,_,v.mutation.getFieldMask(),_t.now())):c.set(_.key,zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,v)=>c.set(_,v))),t.forEach(((_,v)=>{var S;return f.set(_,new iC(v,(S=c.get(_))!==null&&S!==void 0?S:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Ja();let o=new nt(((c,f)=>c-f)),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let v=i.get(g)||zn.empty();v=f.applyToLocalView(_,v),i.set(g,v);const S=(o.get(f.batchId)||xe()).add(g);o=o.insert(f.batchId,S)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,v=g.value,S=d0();v.forEach((C=>{if(!l.has(C)){const U=y0(t.get(C),i.get(C));U!==null&&S.set(C,U),l=l.add(C)}})),c.push(this.documentOverlayCache.saveOverlays(e,_,S))}return G.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):h1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ss());let f=-1,g=l;return c.next((_=>G.forEach(_,((v,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next((C=>{g=g.insert(v,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,xe()))).next((v=>({batchId:f,changes:c0(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Ha();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(g=>{const _=(function(S,C){return new Fc(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((v=>{v.forEach(((S,C)=>{c=c.insert(S,C)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((g,_)=>{const v=_.getKey();c.get(v)===null&&(c=c.insert(v,zt.newInvalidDocument(v)))}));let f=Ha();return c.forEach(((g,_)=>{const v=l.get(g);v!==void 0&&Za(v.mutation,_,zn.empty(),_t.now()),Uc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return G.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:eC(o.bundledQuery),readTime:lr(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.overlays=new nt(ye.comparator),this.Ir=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ss();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.ht(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Ir.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ss(),l=t.length+1,c=new ye(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((_,v)=>_-v));const c=this.overlays.getIterator();for(;c.hasNext();){const _=c.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let v=l.get(_.largestBatchId);v===null&&(v=ss(),l=l.insert(_.largestBatchId,v)),v.set(_.getKey(),_)}}const f=ss(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,v)=>f.set(_,v))),!(f.size()>=o)););return G.resolve(f)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new x1(t,i));let l=this.Ir.get(t);l===void 0&&(l=xe(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.Tr=new bt(St.Er),this.dr=new bt(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Vr(new St(e,t))}mr(e,t){e.forEach((i=>this.removeReference(i,t)))}gr(e){const t=new ye(new it([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.dr.forEachInRange([i,o],(c=>{this.Vr(c),l.push(c.key)})),l}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new it([])),i=new St(t,e),o=new St(t,e+1);let l=xe();return this.dr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new St(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||je(e.wr,t.wr)}static Ar(e,t){return je(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new bt(St.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new P1(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.br=this.br.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],(c=>{const f=this.Dr(c.wr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new bt(je);return t.forEach((o=>{const l=new St(o,0),c=new St(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],(f=>{i=i.add(f.wr)}))})),G.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const c=new St(new ye(l),0);let f=new bt(je);return this.br.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.wr)),!0)}),c),G.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach((i=>{const o=this.Dr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){We(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return G.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=i}))}On(e){}containsKey(e,t){const i=new St(t,0),o=this.br.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.Mr=e,this.docs=(function(){return new nt(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const c=t.path,f=new ye(c.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:v}}=g.getNext();if(!c.isPrefixOf(_.path))break;_.path.length>c.length+1||Hk(qk(v),i)<=0||(o.has(v.key)||Uc(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Or(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new dC(this)}getSize(e){return G.resolve(this.size)}}class dC extends rC{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.persistence=e,this.Nr=new zo((t=>op(t)),ap),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pp,this.targetCount=0,this.kr=No.Bn()}forEachTarget(e,t){return this.Nr.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),G.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new No(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Kn(t),G.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,t){this.qr={},this.overlays={},this.Qr=new np(0),this.Kr=!1,this.Kr=!0,this.$r=new lC,this.referenceDelegate=e(this),this.Ur=new hC(this),this.indexManager=new tC,this.remoteDocumentCache=(function(o){return new cC(o)})((i=>this.referenceDelegate.Wr(i))),this.serializer=new Z1(t),this.Gr=new oC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new uC(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new pC(this.Qr.next());return this.referenceDelegate.zr(),i(o).next((l=>this.referenceDelegate.jr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Hr(e,t){return G.or(Object.values(this.qr).map((i=>()=>i.containsKey(e,t))))}}class pC extends Gk{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Jr=new pp,this.Yr=null}static Zr(e){return new mp(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),G.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.Xr.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,(i=>{const o=ye.fromPath(i);return this.ei(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return G.or([()=>G.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=xe(),o=xe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new gp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return eI()?8:Qk(Bt())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.Zi(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new mC;return this.Xi(e,t,c).next((f=>{if(l.result=f,this.zi)return this.es(e,t,c,f.size)}))})).next((()=>l.result))}es(e,t,i,o){return i.documentReadCount<this.ji?(ja()<=be.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(ja()<=be.DEBUG&&oe("QueryEngine","Query:",mo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(ja()<=be.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):G.resolve())}Yi(e,t){if(r_(t))return G.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Sf(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=xe(...l);return this.Ji.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.ts(t,f);return this.ns(t,_,c,g.readTime)?this.Yi(e,Sf(t,null,"F")):this.rs(e,_,t,g)}))))})))))}Zi(e,t,i,o){return r_(t)||o.isEqual(Ie.min())?G.resolve(null):this.Ji.getDocuments(e,i).next((l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?G.resolve(null):(ja()<=be.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),mo(t)),this.rs(e,c,t,Wk(o,-1)).next((f=>f)))}))}ts(e,t){let i=new bt(l0(e));return t.forEach(((o,l)=>{Uc(e,l)&&(i=i.add(l))})),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return ja()<=be.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",mo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Si.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new nt(je),this._s=new zo((l=>op(l)),ap),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function _C(n,e,t,i){return new yC(n,e,t,i)}async function P0(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let g=xe();for(const _ of o){c.push(_.batchId);for(const v of _.mutations)g=g.add(v.key)}for(const _ of l){f.push(_.batchId);for(const v of _.mutations)g=g.add(v.key)}return t.localDocuments.getDocuments(i,g).next((_=>({hs:_,removedBatchIds:c,addedBatchIds:f})))}))}))}function vC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,v){const S=_.batch,C=S.keys();let U=G.resolve();return C.forEach((q=>{U=U.next((()=>v.getEntry(g,q))).next(($=>{const F=_.docVersions.get(q);We(F!==null),$.version.compareTo(F)<0&&(S.applyToRemoteDocument($,_),$.isValidDocument()&&($.setReadTime(_.commitVersion),v.addEntry($)))}))})),U.next((()=>f.mutationQueue.removeMutationBatch(g,S)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=xe();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function x0(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function wC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const f=[];e.targetChanges.forEach(((v,S)=>{const C=o.get(S);if(!C)return;f.push(t.Ur.removeMatchingKeys(l,v.removedDocuments,S).next((()=>t.Ur.addMatchingKeys(l,v.addedDocuments,S))));let U=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?U=U.withResumeToken(Ot.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(v.resumeToken,i)),o=o.insert(S,U),(function($,F,ee){return $.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(C,U,v)&&f.push(t.Ur.updateTargetData(l,U))}));let g=$r(),_=xe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(EC(l,c,e.documentUpdates).next((v=>{g=v.Ps,_=v.Is}))),!i.isEqual(Ie.min())){const v=t.Ur.getLastRemoteSnapshotVersion(l).next((S=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return G.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.os=o,l)))}function EC(n,e,t){let i=xe(),o=xe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=$r();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),c=c.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),c=c.insert(f,g)):oe("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ps:c,Is:o}}))}function TC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function IC(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Ur.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.Ur.allocateTargetId(i).next((c=>(o=new Ei(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i}))}async function Pf(n,e,t){const i=Se(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!Sl(c))throw c;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function p_(n,e,t){const i=Se(n);let o=Ie.min(),l=xe();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(g,_,v){const S=Se(g),C=S._s.get(v);return C!==void 0?G.resolve(S.os.get(C)):S.Ur.getTargetData(_,v)})(i,c,or(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,f.targetId).next((g=>{l=g}))})).next((()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:xe()))).next((f=>(SC(i,p1(e),f),{documents:f,Ts:l})))))}function SC(n,e,t){let i=n.us.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.us.set(e,i)}class m_{constructor(){this.activeTargetIds=w1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AC{constructor(){this.so=new m_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new m_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=null;function qh(){return Yu===null?Yu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yu++,"0x"+Yu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class PC extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const f=qh(),g=this.xo(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,l,c),this.No(t,g,_,o).then((v=>(oe("RestConnection",`Received RPC '${t}' ${f}: `,v),v)),(v=>{throw Co("RestConnection",`RPC '${t}' ${f} failed with error: `,v,"url: ",g,"request:",o),v}))}Lo(t,i,o,l,c,f){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),o&&o.headers.forEach(((l,c)=>t[c]=l))}xo(t,i){const o=CC[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=qh();return new Promise(((c,f)=>{const g=new qv;g.setWithCredentials(!0),g.listenOnce(Hv.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case tc.NO_ERROR:const v=g.getResponseJson();oe(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case tc.TIMEOUT:oe(jt,`RPC '${e}' ${l} timed out`),f(new ge(Y.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const S=g.getStatus();if(oe(jt,`RPC '${e}' ${l} failed with status:`,S,"response text:",g.getResponseText()),S>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const U=C?.error;if(U&&U.status&&U.message){const q=(function(F){const ee=F.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ee)>=0?ee:Y.UNKNOWN})(U.status);f(new ge(q,U.message))}else f(new ge(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ge(Y.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{oe(jt,`RPC '${e}' ${l} completed.`)}}));const _=JSON.stringify(o);oe(jt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",_,i,15)}))}Bo(e,t,i){const o=qh(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Qv(),f=Gv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const v=l.join("");oe(jt,`Creating RPC '${e}' stream ${o}: ${v}`,g);const S=c.createWebChannel(v,g);let C=!1,U=!1;const q=new RC({Io:F=>{U?oe(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(C||(oe(jt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),C=!0),oe(jt,`RPC '${e}' stream ${o} sending:`,F),S.send(F))},To:()=>S.close()}),$=(F,ee,ae)=>{F.listen(ee,(me=>{try{ae(me)}catch(ve){setTimeout((()=>{throw ve}),0)}}))};return $(S,qa.EventType.OPEN,(()=>{U||(oe(jt,`RPC '${e}' stream ${o} transport opened.`),q.yo())})),$(S,qa.EventType.CLOSE,(()=>{U||(U=!0,oe(jt,`RPC '${e}' stream ${o} transport closed`),q.So())})),$(S,qa.EventType.ERROR,(F=>{U||(U=!0,Co(jt,`RPC '${e}' stream ${o} transport errored:`,F),q.So(new ge(Y.UNAVAILABLE,"The operation could not be completed")))})),$(S,qa.EventType.MESSAGE,(F=>{var ee;if(!U){const ae=F.data[0];We(!!ae);const me=ae,ve=me.error||((ee=me[0])===null||ee===void 0?void 0:ee.error);if(ve){oe(jt,`RPC '${e}' stream ${o} received error:`,ve);const Ue=ve.status;let _e=(function(k){const x=dt[k];if(x!==void 0)return v0(x)})(Ue),P=ve.message;_e===void 0&&(_e=Y.INTERNAL,P="Unknown error status: "+Ue+" with message "+ve.message),U=!0,q.So(new ge(_e,P)),S.close()}else oe(jt,`RPC '${e}' stream ${o} received:`,ae),q.bo(ae)}})),$(f,Kv.STAT_EVENT,(F=>{F.stat===vf.PROXY?oe(jt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===vf.NOPROXY&&oe(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.wo()}),0),q}}function Hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){return new j1(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t,i,o,l,c,f,g){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new N0(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.Yo===t&&this.P_(i,o)}),(i=>{e((()=>{const o=new ge(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)}))}))}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{i((()=>this.listener.Eo()))})),this.stream.Ro((()=>{i((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{i((()=>this.I_(o)))})),this.stream.onMessage((o=>{i((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xC extends b0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=B1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?lr(c.readTime):Ie.min()})(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=Rf(this.serializer),t.addTarget=(function(l,c){let f;const g=c.target;if(f=If(g)?{documents:q1(l,g)}:{query:H1(l,g)._t},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=T0(l,c.resumeToken);const _=Af(l,c.expectedCount);_!==null&&(f.expectedCount=_)}else if(c.snapshotVersion.compareTo(Ie.min())>0){f.readTime=Sc(l,c.snapshotVersion.toTimestamp());const _=Af(l,c.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=G1(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=Rf(this.serializer),t.removeTarget=e,this.a_(t)}}class NC extends b0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=W1(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=Rf(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>$1(this.serializer,i)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ge(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Mo(e,kf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ge(Y.UNKNOWN,l.toString())}))}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Lo(e,kf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ge(Y.UNKNOWN,c.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class DC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Br(t),this.D_=!1):oe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o((c=>{i.enqueueAndForget((async()=>{Es(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const _=Se(g);_.L_.add(4),await Cl(_),_.q_.set("Unknown"),_.L_.delete(4),await qc(_)})(this))}))})),this.q_=new DC(i,o)}}async function qc(n){if(Es(n))for(const e of n.B_)await e(!0)}async function Cl(n){for(const e of n.B_)await e(!1)}function D0(n,e){const t=Se(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),wp(t)?vp(t):Bo(t).r_()&&_p(t,e))}function yp(n,e){const t=Se(n),i=Bo(t);t.N_.delete(e),i.r_()&&O0(t,e),t.N_.size===0&&(i.r_()?i.o_():Es(t)&&t.q_.set("Unknown"))}function _p(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bo(n).A_(e)}function O0(n,e){n.Q_.xe(e),Bo(n).R_(e)}function vp(n){n.Q_=new M1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Bo(n).start(),n.q_.v_()}function wp(n){return Es(n)&&!Bo(n).n_()&&n.N_.size>0}function Es(n){return Se(n).L_.size===0}function M0(n){n.Q_=void 0}async function MC(n){n.q_.set("Online")}async function LC(n){n.N_.forEach(((e,t)=>{_p(n,e)}))}async function VC(n,e){M0(n),wp(n)?(n.q_.M_(e),vp(n)):n.q_.set("Unknown")}async function FC(n,e,t){if(n.q_.set("Online"),e instanceof E0&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.N_.delete(f),o.Q_.removeTarget(f))})(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ac(n,i)}else if(e instanceof ic?n.Q_.Ke(e):e instanceof w0?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ie.min()))try{const i=await x0(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Q_.rt(c);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const v=l.N_.get(_);v&&l.N_.set(_,v.withResumeToken(g.resumeToken,c))}})),f.targetMismatches.forEach(((g,_)=>{const v=l.N_.get(g);if(!v)return;l.N_.set(g,v.withResumeToken(Ot.EMPTY_BYTE_STRING,v.snapshotVersion)),O0(l,g);const S=new Ei(v.target,g,_,v.sequenceNumber);_p(l,S)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await Ac(n,i)}}async function Ac(n,e,t){if(!Sl(e))throw e;n.L_.add(1),await Cl(n),n.q_.set("Offline"),t||(t=()=>x0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await qc(n)}))}function L0(n,e){return e().catch((t=>Ac(n,t,e)))}async function Hc(n){const e=Se(n),t=ki(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;jC(e);)try{const o=await TC(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,UC(e,o)}catch(o){await Ac(e,o)}V0(e)&&F0(e)}function jC(n){return Es(n)&&n.O_.length<10}function UC(n,e){n.O_.push(e);const t=ki(n);t.r_()&&t.V_&&t.m_(e.mutations)}function V0(n){return Es(n)&&!ki(n).n_()&&n.O_.length>0}function F0(n){ki(n).start()}async function zC(n){ki(n).p_()}async function BC(n){const e=ki(n);for(const t of n.O_)e.m_(t.mutations)}async function $C(n,e,t){const i=n.O_.shift(),o=dp.from(i,e,t);await L0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Hc(n)}async function WC(n,e){e&&ki(n).V_&&await(async function(i,o){if((function(c){return b1(c)&&c!==Y.ABORTED})(o.code)){const l=i.O_.shift();ki(i).s_(),await L0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Hc(i)}})(n,e),V0(n)&&F0(n)}async function y_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=Es(t);t.L_.add(3),await Cl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await qc(t)}async function qC(n,e){const t=Se(n);e?(t.L_.delete(2),await qc(t)):e||(t.L_.add(2),await Cl(t),t.q_.set("Unknown"))}function Bo(n){return n.K_||(n.K_=(function(t,i,o){const l=Se(t);return l.w_(),new xC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Eo:MC.bind(null,n),Ro:LC.bind(null,n),mo:VC.bind(null,n),d_:FC.bind(null,n)}),n.B_.push((async e=>{e?(n.K_.s_(),wp(n)?vp(n):n.q_.set("Unknown")):(await n.K_.stop(),M0(n))}))),n.K_}function ki(n){return n.U_||(n.U_=(function(t,i,o){const l=Se(t);return l.w_(),new NC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:zC.bind(null,n),mo:WC.bind(null,n),f_:BC.bind(null,n),g_:$C.bind(null,n)}),n.B_.push((async e=>{e?(n.U_.s_(),await Hc(n)):(await n.U_.stop(),n.O_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))}))),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new Ep(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Sl(n))return new ge(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Io(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Io;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.W_=new nt(ye.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class bo{constructor(e,t,i,o,l,c,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new bo(e,t,Io.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class KC{constructor(){this.queries=v_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=v_(),l.forEach(((c,f)=>{for(const g of f.j_)g.onError(i)}))})(this,new ge(Y.ABORTED,"Firestore shutting down"))}}function v_(){return new zo((n=>a0(n)),jc)}async function GC(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new HC,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=Tp(c,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Ip(t)}async function QC(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function YC(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.j_)f.X_(o)&&(i=!0);c.z_=o}}i&&Ip(t)}function XC(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function Ip(n){n.Y_.forEach((e=>{e.next()}))}var xf,w_;(w_=xf||(xf={})).ea="default",w_.Cache="cache";class JC{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new bo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.key=e}}class U0{constructor(e){this.key=e}}class ZC{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=xe(),this.mutatedKeys=xe(),this.Aa=l0(e),this.Ra=new Io(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new __,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,S)=>{const C=o.get(v),U=Uc(this.query,S)?S:null,q=!!C&&this.mutatedKeys.has(C.key),$=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let F=!1;C&&U?C.data.isEqual(U.data)?q!==$&&(i.track({type:3,doc:U}),F=!0):this.ga(C,U)||(i.track({type:2,doc:U}),F=!0,(g&&this.Aa(U,g)>0||_&&this.Aa(U,_)<0)&&(f=!0)):!C&&U?(i.track({type:0,doc:U}),F=!0):C&&!U&&(i.track({type:1,doc:C}),F=!0,(g||_)&&(f=!0)),F&&(U?(c=c.add(U),l=$?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ra:c,fa:i,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort(((v,S)=>(function(U,q){const $=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return $(U)-$(q)})(v.type,S.type)||this.Aa(v.doc,S.doc))),this.pa(i),o=o!=null&&o;const f=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,_=g!==this.Ea;return this.Ea=g,c.length!==0||_?{snapshot:new bo(this.query,e.Ra,l,c,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new __,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=xe(),this.Ra.forEach((i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))}));const t=[];return e.forEach((i=>{this.da.has(i)||t.push(new U0(i))})),this.da.forEach((i=>{e.has(i)||t.push(new j0(i))})),t}ba(e){this.Ta=e.Ts,this.da=xe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return bo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eR{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class tR{constructor(e){this.key=e,this.va=!1}}class nR{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new zo((f=>a0(f)),jc),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(ye.comparator),this.Na=new Map,this.La=new pp,this.Ba={},this.ka=new Map,this.qa=No.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rR(n,e,t=!0){const i=H0(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await z0(i,e,t,!0),o}async function iR(n,e){const t=H0(n);await z0(t,e,!0,!1)}async function z0(n,e,t,i){const o=await IC(n.localStore,or(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await sR(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&D0(n.remoteStore,o),f}async function sR(n,e,t,i,o){n.Ka=(S,C,U)=>(async function($,F,ee,ae){let me=F.view.ma(ee);me.ns&&(me=await p_($.localStore,F.query,!1).then((({documents:P})=>F.view.ma(P,me))));const ve=ae&&ae.targetChanges.get(F.targetId),Ue=ae&&ae.targetMismatches.get(F.targetId)!=null,_e=F.view.applyChanges(me,$.isPrimaryClient,ve,Ue);return T_($,F.targetId,_e.wa),_e.snapshot})(n,S,C,U);const l=await p_(n.localStore,e,!0),c=new ZC(e,l.Ts),f=c.ma(l.documents),g=kl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),_=c.applyChanges(f,n.isPrimaryClient,g);T_(n,t,_.wa);const v=new eR(e,t,c);return n.Fa.set(e,v),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),_.snapshot}async function oR(n,e,t){const i=Se(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter((c=>!jc(c,e)))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Pf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&yp(i.remoteStore,o.targetId),Nf(i,o.targetId)})).catch(Il)):(Nf(i,o.targetId),await Pf(i.localStore,o.targetId,!0))}async function aR(n,e){const t=Se(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),yp(t.remoteStore,i.targetId))}async function lR(n,e,t){const i=mR(n);try{const o=await(function(c,f){const g=Se(c),_=_t.now(),v=f.reduce(((U,q)=>U.add(q.key)),xe());let S,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let q=$r(),$=xe();return g.cs.getEntries(U,v).next((F=>{q=F,q.forEach(((ee,ae)=>{ae.isValidDocument()||($=$.add(ee))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,q))).next((F=>{S=F;const ee=[];for(const ae of f){const me=C1(ae,S.get(ae.key).overlayedDocument);me!=null&&ee.push(new ws(ae.key,me,e0(me.value.mapValue),ar.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,ee,f)})).next((F=>{C=F;const ee=F.applyToLocalDocumentSet(S,$);return g.documentOverlayCache.saveOverlays(U,F.batchId,ee)}))})).then((()=>({batchId:C.batchId,changes:c0(S)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,g){let _=c.Ba[c.currentUser.toKey()];_||(_=new nt(je)),_=_.insert(f,g),c.Ba[c.currentUser.toKey()]=_})(i,o.batchId,t),await Rl(i,o.changes),await Hc(i.remoteStore)}catch(o){const l=Tp(o,"Failed to persist write");t.reject(l)}}async function B0(n,e){const t=Se(n);try{const i=await wC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Na.get(l);c&&(We(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?We(c.va):o.removedDocuments.size>0&&(We(c.va),c.va=!1))})),await Rl(t,i,e)}catch(i){await Il(i)}}function E_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach(((l,c)=>{const f=c.view.Z_(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const g=Se(c);g.onlineState=f;let _=!1;g.queries.forEach(((v,S)=>{for(const C of S.j_)C.Z_(f)&&(_=!0)})),_&&Ip(g)})(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function uR(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new nt(ye.comparator);c=c.insert(l,zt.newNoDocument(l,Ie.min()));const f=xe().add(l),g=new $c(Ie.min(),new Map,new nt(je),c,f);await B0(i,g),i.Oa=i.Oa.remove(l),i.Na.delete(e),Sp(i)}else await Pf(i.localStore,e,!1).then((()=>Nf(i,e,t))).catch(Il)}async function cR(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await vC(t.localStore,e);W0(t,i,null),$0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Rl(t,o)}catch(o){await Il(o)}}async function dR(n,e,t){const i=Se(n);try{const o=await(function(c,f){const g=Se(c);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let v;return g.mutationQueue.lookupMutationBatch(_,f).next((S=>(We(S!==null),v=S.keys(),g.mutationQueue.removeMutationBatch(_,S)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,v,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,v))).next((()=>g.localDocuments.getDocuments(_,v)))}))})(i.localStore,e);W0(i,e,t),$0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Rl(i,o)}catch(o){await Il(o)}}function $0(n,e){(n.ka.get(e)||[]).forEach((t=>{t.resolve()})),n.ka.delete(e)}function W0(n,e,t){const i=Se(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function Nf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach((i=>{n.La.containsKey(i)||q0(n,i)}))}function q0(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(yp(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Sp(n))}function T_(n,e,t){for(const i of t)i instanceof j0?(n.La.addReference(i.key,e),hR(n,i)):i instanceof U0?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||q0(n,i.key)):Te()}function hR(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.xa.add(i),Sp(n))}function Sp(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(it.fromString(e)),i=n.qa.next();n.Na.set(i,new tR(t)),n.Oa=n.Oa.insert(t,i),D0(n.remoteStore,new Ei(or(lp(t.path)),i,"TargetPurposeLimboResolution",np.oe))}}async function Rl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach(((f,g)=>{c.push(i.Ka(g,e,t).then((_=>{var v;if((_||t)&&i.isPrimaryClient){const S=_?!_.fromCache:(v=t?.targetChanges.get(g.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=gp.Wi(g.targetId,_);l.push(S)}})))})),await Promise.all(c),i.Ca.d_(o),await(async function(g,_){const v=Se(g);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>G.forEach(_,(C=>G.forEach(C.$i,(U=>v.persistence.referenceDelegate.addReference(S,C.targetId,U))).next((()=>G.forEach(C.Ui,(U=>v.persistence.referenceDelegate.removeReference(S,C.targetId,U)))))))))}catch(S){if(!Sl(S))throw S;oe("LocalStore","Failed to update sequence numbers: "+S)}for(const S of _){const C=S.targetId;if(!S.fromCache){const U=v.os.get(C),q=U.snapshotVersion,$=U.withLastLimboFreeSnapshotVersion(q);v.os=v.os.insert(C,$)}}})(i.localStore,l))}async function fR(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await P0(t.localStore,e);t.currentUser=e,(function(l,c){l.ka.forEach((f=>{f.forEach((g=>{g.reject(new ge(Y.CANCELLED,c))}))})),l.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Rl(t,i.hs)}}function pR(n,e){const t=Se(n),i=t.Na.get(e);if(i&&i.va)return xe().add(i.key);{let o=xe();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const f=t.Fa.get(c);o=o.unionWith(f.view.Va)}return o}}function H0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=B0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uR.bind(null,e),e.Ca.d_=YC.bind(null,e.eventManager),e.Ca.$a=XC.bind(null,e.eventManager),e}function mR(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dR.bind(null,e),e}class kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return _C(this.persistence,new gC,e.initialUser,this.serializer)}Ga(e){return new fC(mp.Zr,this.serializer)}Wa(e){return new AC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kc.provider={build:()=>new kc};class bf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>E_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fR.bind(null,this.syncEngine),await qC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new KC})()}createDatastore(e){const t=Wc(e.databaseInfo.databaseId),i=(function(l){return new PC(l)})(e.databaseInfo);return(function(l,c,f,g){return new bC(l,c,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new OC(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>E_(this.syncEngine,t,0)),(function(){return g_.D()?new g_:new kC})())}createSyncEngine(e,t){return(function(o,l,c,f,g,_,v){const S=new nR(o,l,c,f,g,_);return v&&(S.Qa=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);oe("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Cl(l),l.k_.shutdown(),l.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bf.provider={build:()=>new bf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{oe("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(oe("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Tp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Kh(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await P0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function I_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _R(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>y_(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>y_(e.remoteStore,o))),n._onlineComponents=e}async function _R(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Co("Error using user provided cache. Falling back to memory cache: "+t),await Kh(n,new kc)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Kh(n,new kc);return n._offlineComponents}async function K0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await I_(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await I_(n,new bf))),n._onlineComponents}function vR(n){return K0(n).then((e=>e.syncEngine))}async function S_(n){const e=await K0(n),t=e.eventManager;return t.onListen=rR.bind(null,e.syncEngine),t.onUnlisten=oR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aR.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n,e,t){if(!t)throw new ge(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ER(n,e,t,i){if(e===!0&&i===!0)throw new ge(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function k_(n){if(!ye.isDocumentKey(n))throw new ge(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ap(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function us(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ge(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ap(n);throw new ge(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ge(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ER("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ge(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ge(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ge(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Mk;switch(i.type){case"firstParty":return new jk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ge(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=A_.get(t);i&&(oe("ComponentProvider","Removing Datastore"),A_.delete(t),i.terminate())})(this),Promise.resolve()}}function TR(n,e,t,i={}){var o;const l=(n=us(n,kp))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=Ut.MOCK_USER;else{f=KT(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new ge(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ut(_)}n._authCredentials=new Lk(new Yv(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Kc(this.firestore,e,this._query)}}class Sn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sn(this.firestore,e,this._key)}}class dl extends Kc{constructor(e,t,i){super(e,t,lp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sn(this.firestore,null,new ye(e))}withConverter(e){return new dl(this.firestore,e,this._path)}}function Gc(n,e,...t){if(n=Dt(n),arguments.length===1&&(e=Xv.newId()),wR("doc","path",e),n instanceof kp){const i=it.fromString(e,...t);return k_(i),new Sn(n,null,new ye(i))}{if(!(n instanceof Sn||n instanceof dl))throw new ge(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(it.fromString(e,...t));return k_(i),new Sn(n.firestore,n instanceof dl?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new N0(this,"async_queue_retry"),this.Vu=()=>{const i=Hh();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Hh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Hh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new ls;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Sl(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((i=>{this.Eu=i,this.du=!1;const o=(function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f})(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i})).then((i=>(this.du=!1,i))))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Ep.createAndSchedule(this,e,t,i,(l=>this.yu(l)));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function P_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class hl extends kp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new R_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R_(e),this._firestoreClient=void 0,await e}}}function IR(n,e){const t=typeof n=="object"?n:qf(),i=typeof n=="string"?n:"(default)",o=Lo(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=qT("firestore");l&&TR(o,...l)}return o}function Q0(n){if(n._terminated)throw new ge(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SR(n),n._firestoreClient}function SR(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,g,_,v){return new Jk(f,g,_,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,G0(v.experimentalLongPollingOptions),v.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new yR(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const g=f?._online.build();return{_offline:f?._offline.build(g),_online:g}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(Ot.fromBase64String(e))}catch(t){throw new ge(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Do(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=/^__.*__$/;class kR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new Al(e,this.data,t,this.fieldTransforms)}}function X0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class xp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Cc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(X0(this.Cu)&&AR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class CR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Wc(e)}Qu(e,t,i,o=!1){return new xp({Cu:e,methodName:t,qu:i,path:Nt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RR(n){const e=n._freezeSettings(),t=Wc(n._databaseId);return new CR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function PR(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);tw("Data must be an object, but it was:",c,i);const f=Z0(i,c);let g,_;if(l.merge)g=new zn(c.fieldMask),_=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const S of l.mergeFields){const C=xR(e,S,t);if(!c.contains(C))throw new ge(Y.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);bR(v,C)||v.push(C)}g=new zn(v),_=c.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,_=c.fieldTransforms;return new kR(new Tn(f),g,_)}function J0(n,e){if(ew(n=Dt(n)))return tw("Unsupported field value:",e,n),Z0(n,e);if(n instanceof Y0)return(function(i,o){if(!X0(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let g=J0(f,o.Lu(c));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Dt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return E1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:Sc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Sc(o.serializer,l)}}if(i instanceof Rp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Do)return{bytesValue:T0(o.serializer,i._byteString)};if(i instanceof Sn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:fp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Pp)return(function(c,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Bu("VectorValues must only contain numeric values.");return up(f.serializer,g)}))}}}}}})(i,o);throw o.Bu(`Unsupported field value: ${Ap(i)}`)})(n,e)}function Z0(n,e){const t={};return Jv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Uo(n,((i,o)=>{const l=J0(o,e.Mu(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function ew(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Rp||n instanceof Do||n instanceof Sn||n instanceof Y0||n instanceof Pp)}function tw(n,e,t){if(!ew(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const i=Ap(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function xR(n,e,t){if((e=Dt(e))instanceof Cp)return e._internalPath;if(typeof e=="string")return nw(n,e);throw Cc("Field path arguments must be of type string or ",n,!1,void 0,t)}const NR=new RegExp("[~\\*/\\[\\]]");function nw(n,e,t){if(e.search(NR)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cp(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||c)&&(g+=" (found",l&&(g+=` in field ${i}`),c&&(g+=` in document ${o}`),g+=")"),new ge(Y.INVALID_ARGUMENT,f+n+g)}function bR(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(iw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DR extends rw{data(){return super.data()}}function iw(n,e){return typeof e=="string"?nw(n,e):e instanceof Cp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ge(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MR{convertValue(e,t="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Uo(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>lt(c.doubleValue)));return new Pp(l)}convertGeoPoint(e){return new Rp(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ip(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=it.fromString(e);We(R0(i));const o=new al(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sw extends rw{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(iw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class sc extends sw{data(e={}){return super.data(e)}}class VR{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new sc(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ge(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const g=new sc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new sc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,v=-1;return f.type!==0&&(_=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:FR(f.type),doc:g,oldIndex:_,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function FR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class ow extends MR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sn(this.firestore,null,t)}}function aw(n,e,t){n=us(n,Sn);const i=us(n.firestore,hl),o=LR(n.converter,e);return lw(i,[PR(RR(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,ar.none())])}function jR(n){return lw(us(n.firestore,hl),[new cp(n._key,ar.none())])}function UR(n,...e){var t,i,o;n=Dt(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||P_(e[c])||(l=e[c],c++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(P_(e[c])){const S=e[c];e[c]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[c+1]=(i=S.error)===null||i===void 0?void 0:i.bind(S),e[c+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let g,_,v;if(n instanceof Sn)_=us(n.firestore,hl),v=lp(n._key.path),g={next:S=>{e[c]&&e[c](zR(_,n,S))},error:e[c+1],complete:e[c+2]};else{const S=us(n,Kc);_=us(S.firestore,hl),v=S._query;const C=new ow(_);g={next:U=>{e[c]&&e[c](new VR(_,C,S,U))},error:e[c+1],complete:e[c+2]},OR(n._query)}return(function(C,U,q,$){const F=new gR($),ee=new JC(U,F,q);return C.asyncQueue.enqueueAndForget((async()=>GC(await S_(C),ee))),()=>{F.Za(),C.asyncQueue.enqueueAndForget((async()=>QC(await S_(C),ee)))}})(Q0(_),v,f,g)}function lw(n,e){return(function(i,o){const l=new ls;return i.asyncQueue.enqueueAndForget((async()=>lR(await vR(i),o,l))),l.promise})(Q0(n),e)}function zR(n,e,t){const i=t.docs.get(e._key),o=new ow(n);return new sw(n,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){jo=o})(Vo),ur(new $n("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new hl(new Vk(i.getProvider("auth-internal")),new zk(i.getProvider("app-check-internal")),(function(_,v){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ge(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(_.options.projectId,v)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),In(Ky,"4.7.3",e),In(Ky,"4.7.3","esm2017")})();const uw="@firebase/installations",Np="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=1e4,dw=`w:${Np}`,hw="FIS_v2",BR="https://firebaseinstallations.googleapis.com/v1",$R=3600*1e3,WR="installations",qR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ys=new vs(WR,qR,HR);function fw(n){return n instanceof fr&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw({projectId:n}){return`${BR}/projects/${n}/installations`}function mw(n){return{token:n.token,requestStatus:2,expiresIn:GR(n.expiresIn),creationTime:Date.now()}}async function gw(n,e){const i=(await e.json()).error;return ys.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function yw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function KR(n,{refreshToken:e}){const t=yw(n);return t.append("Authorization",QR(e)),t}async function _w(n){const e=await n();return e.status>=500&&e.status<600?n():e}function GR(n){return Number(n.replace("s","000"))}function QR(n){return`${hw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=pw(n),o=yw(n),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const c={fid:t,authVersion:hw,appId:n.appId,sdkVersion:dw},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await _w(()=>fetch(i,f));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:mw(_.authToken)}}else throw await gw("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=/^[cdef][\w-]{21}$/,Df="";function ZR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=eP(n);return JR.test(t)?t:Df}catch{return Df}}function eP(n){return XR(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new Map;function Ew(n,e){const t=Qc(n);Tw(t,e),tP(t,e)}function Tw(n,e){const t=ww.get(n);if(t)for(const i of t)i(e)}function tP(n,e){const t=nP();t&&t.postMessage({key:n,fid:e}),rP()}let os=null;function nP(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=n=>{Tw(n.data.key,n.data.fid)}),os}function rP(){ww.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="firebase-installations-database",sP=1,_s="firebase-installations-store";let Gh=null;function bp(){return Gh||(Gh=Dc(iP,sP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_s)}}})),Gh}async function Rc(n,e){const t=Qc(n),o=(await bp()).transaction(_s,"readwrite"),l=o.objectStore(_s),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&Ew(n,e.fid),e}async function Iw(n){const e=Qc(n),i=(await bp()).transaction(_s,"readwrite");await i.objectStore(_s).delete(e),await i.done}async function Yc(n,e){const t=Qc(n),o=(await bp()).transaction(_s,"readwrite"),l=o.objectStore(_s),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&Ew(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n){let e;const t=await Yc(n.appConfig,i=>{const o=oP(i),l=aP(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Df?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function oP(n){const e=n||{fid:ZR(),registrationStatus:0};return Sw(e)}function aP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ys.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=lP(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uP(n)}:{installationEntry:e}}async function lP(n,e){try{const t=await YR(n,e);return Rc(n.appConfig,t)}catch(t){throw fw(t)&&t.customData.serverCode===409?await Iw(n.appConfig):await Rc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function uP(n){let e=await x_(n.appConfig);for(;e.registrationStatus===1;)await vw(100),e=await x_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Dp(n);return i||t}return e}function x_(n){return Yc(n,e=>{if(!e)throw ys.create("installation-not-found");return Sw(e)})}function Sw(n){return cP(n)?{fid:n.fid,registrationStatus:0}:n}function cP(n){return n.registrationStatus===1&&n.registrationTime+cw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP({appConfig:n,heartbeatServiceProvider:e},t){const i=hP(n,t),o=KR(n,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const c={installation:{sdkVersion:dw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await _w(()=>fetch(i,f));if(g.ok){const _=await g.json();return mw(_)}else throw await gw("Generate Auth Token",g)}function hP(n,{fid:e}){return`${pw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(n,e=!1){let t;const i=await Yc(n.appConfig,l=>{if(!Aw(l))throw ys.create("not-registered");const c=l.authToken;if(!e&&mP(c))return l;if(c.requestStatus===1)return t=fP(n,e),l;{if(!navigator.onLine)throw ys.create("app-offline");const f=yP(l);return t=pP(n,f),f}});return t?await t:i.authToken}async function fP(n,e){let t=await N_(n.appConfig);for(;t.authToken.requestStatus===1;)await vw(100),t=await N_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Op(n,e):i}function N_(n){return Yc(n,e=>{if(!Aw(e))throw ys.create("not-registered");const t=e.authToken;return _P(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pP(n,e){try{const t=await dP(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Rc(n.appConfig,i),t}catch(t){if(fw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Iw(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rc(n.appConfig,i)}throw t}}function Aw(n){return n!==void 0&&n.registrationStatus===2}function mP(n){return n.requestStatus===2&&!gP(n)}function gP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$R}function yP(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function _P(n){return n.requestStatus===1&&n.requestTime+cw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(n){const e=n,{installationEntry:t,registrationPromise:i}=await Dp(e);return i?i.catch(console.error):Op(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(n,e=!1){const t=n;return await EP(t),(await Op(t,e)).token}async function EP(n){const{registrationPromise:e}=await Dp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(n){if(!n||!n.options)throw Qh("App Configuration");if(!n.name)throw Qh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Qh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Qh(n){return ys.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="installations",IP="installations-internal",SP=n=>{const e=n.getProvider("app").getImmediate(),t=TP(e),i=Lo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},AP=n=>{const e=n.getProvider("app").getImmediate(),t=Lo(e,kw).getImmediate();return{getId:()=>vP(t),getToken:o=>wP(t,o)}};function kP(){ur(new $n(kw,SP,"PUBLIC")),ur(new $n(IP,AP,"PRIVATE"))}kP();In(uw,Np);In(uw,Np,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="/firebase-messaging-sw.js",RP="/firebase-cloud-messaging-push-scope",Cw="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",PP="https://fcmregistrations.googleapis.com/v1",Rw="google.c.a.c_id",xP="google.c.a.c_l",NP="google.c.a.ts",bP="google.c.a.e";var b_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(b_||(b_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var fl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(fl||(fl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function DP(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="fcm_token_details_db",OP=5,D_="fcm_token_object_Store";async function MP(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Yh))return null;let e=null;return(await Dc(Yh,OP,{upgrade:async(i,o,l,c)=>{var f;if(o<2||!i.objectStoreNames.contains(D_))return;const g=c.objectStore(D_),_=await g.index("fcmSenderId").get(n);if(await g.clear(),!!_){if(o===2){const v=_;if(!v.auth||!v.p256dh||!v.endpoint)return;e={token:v.fcmToken,createTime:(f=v.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:v.auth,p256dh:v.p256dh,endpoint:v.endpoint,swScope:v.swScope,vapidKey:typeof v.vapidKey=="string"?v.vapidKey:Dr(v.vapidKey)}}}else if(o===3){const v=_;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:Dr(v.auth),p256dh:Dr(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:Dr(v.vapidKey)}}}else if(o===4){const v=_;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:Dr(v.auth),p256dh:Dr(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:Dr(v.vapidKey)}}}}}})).close(),await jh(Yh),await jh("fcm_vapid_details_db"),await jh("undefined"),LP(e)?e:null}function LP(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="firebase-messaging-database",FP=1,pl="firebase-messaging-store";let Xh=null;function Pw(){return Xh||(Xh=Dc(VP,FP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pl)}}})),Xh}async function jP(n){const e=xw(n),i=await(await Pw()).transaction(pl).objectStore(pl).get(e);if(i)return i;{const o=await MP(n.appConfig.senderId);if(o)return await Mp(n,o),o}}async function Mp(n,e){const t=xw(n),o=(await Pw()).transaction(pl,"readwrite");return await o.objectStore(pl).put(e,t),await o.done,e}function xw({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Gt=new vs("messaging","Messaging",UP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(n,e){const t=await Vp(n),i=Nw(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(Lp(n.appConfig),o)).json()}catch(c){throw Gt.create("token-subscribe-failed",{errorInfo:c?.toString()})}if(l.error){const c=l.error.message;throw Gt.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw Gt.create("token-subscribe-no-token");return l.token}async function BP(n,e){const t=await Vp(n),i=Nw(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Lp(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw Gt.create("token-update-failed",{errorInfo:c?.toString()})}if(l.error){const c=l.error.message;throw Gt.create("token-update-failed",{errorInfo:c})}if(!l.token)throw Gt.create("token-update-no-token");return l.token}async function $P(n,e){const i={method:"DELETE",headers:await Vp(n)};try{const l=await(await fetch(`${Lp(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw Gt.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw Gt.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function Lp({projectId:n}){return`${PP}/projects/${n}/registrations`}async function Vp({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Nw({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==Cw&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=10080*60*1e3;async function qP(n){const e=await KP(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Dr(e.getKey("auth")),p256dh:Dr(e.getKey("p256dh"))},i=await jP(n.firebaseDependencies);if(i){if(GP(i.subscriptionOptions,t))return Date.now()>=i.createTime+WP?HP(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await $P(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return O_(n.firebaseDependencies,t)}else return O_(n.firebaseDependencies,t)}async function HP(n,e){try{const t=await BP(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Mp(n.firebaseDependencies,i),t}catch(t){throw t}}async function O_(n,e){const i={token:await zP(n,e),createTime:Date.now(),subscriptionOptions:e};return await Mp(n,i),i.token}async function KP(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:DP(e)})}function GP(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return QP(e,n),YP(e,n),XP(e,n),e}function QP(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function YP(n,e){e.data&&(n.data=e.data)}function XP(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const g=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;g&&(n.fcmOptions.analyticsLabel=g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(n){return typeof n=="object"&&!!n&&Rw in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(n){if(!n||!n.options)throw Jh("App Configuration Object");if(!n.name)throw Jh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw Jh(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Jh(n){return Gt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=ZP(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(n){try{n.swRegistration=await navigator.serviceWorker.register(CP,{scope:RP}),n.swRegistration.update().catch(()=>{})}catch(e){throw Gt.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nx(n,e){if(!e&&!n.swRegistration&&await tx(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Gt.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Cw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e){if(!navigator)throw Gt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Gt.create("permission-blocked");return await rx(n,e?.vapidKey),await nx(n,e?.serviceWorkerRegistration),qP(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix(n,e,t){const i=sx(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[Rw],message_name:t[xP],message_time:t[NP],message_device_time:Math.floor(Date.now()/1e3)})}function sx(n){switch(n){case fl.NOTIFICATION_CLICKED:return"notification_open";case fl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===fl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(M_(t)):n.onMessageHandler.next(M_(t)));const i=t.data;JP(i)&&i[bP]==="1"&&await ix(n,t.messageType,i)}const L_="@firebase/messaging",V_="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=n=>{const e=new ex(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>ox(e,t)),e},lx=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>bw(e,i)}};function ux(){ur(new $n("messaging",ax,"PUBLIC")),ur(new $n("messaging-internal",lx,"PRIVATE")),In(L_,V_),In(L_,V_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(){try{await iv()}catch{return!1}return typeof window<"u"&&rv()&&tI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n=qf()){return Dw().then(e=>{if(!e)throw Gt.create("unsupported-browser")},e=>{throw Gt.create("indexed-db-unsupported")}),Lo(Dt(n),"messaging").getImmediate()}async function dx(n,e){return n=Dt(n),bw(n,e)}ux();const hx={apiKey:"AIzaSyBe11U4RkUbpvs-H0YbJH8oIztS0f5r4Dc",authDomain:"edith-4f693.firebaseapp.com",projectId:"edith-4f693",storageBucket:"edith-4f693.firebasestorage.app",messagingSenderId:"199651360117",appId:"1:199651360117:web:82732458f9a9a6ff08673c"},Fp=av(hx),hr=Dk(Fp),Oo=IR(Fp),fx="BB2SuH4VAVFH4HbgQBwYy3hp5sui3BRl1v_NDvsSgf8xZ-lXsXK8xdXQO2gN-jg9rTyt25_Wcf5x2R6tATtmZYk",px=async()=>{try{return await Dw()?cx(Fp):(console.warn("FCM is not supported in this browser."),null)}catch(n){return console.warn("Failed to initialize FCM:",n),null}},Of=!0;let Zh=null;const Mf=(n=1500)=>{Oo&&(Zh&&clearTimeout(Zh),Zh=setTimeout(async()=>{const{user:e,data:t}=ue.getState();if(e){ue.setState({syncStatus:"syncing"});try{const i=Gc(Oo,"users",e.uid,"data","master");await aw(i,t),ue.setState({syncStatus:"idle"})}catch(i){console.error("Firestore sync error:",i),ue.setState({syncStatus:"error"}),At.error(Ao.syncError)}}},n))},mx=(n,e)=>{if(!Oo)return()=>{};const t=Gc(Oo,"users",n,"data","master");return UR(t,i=>{i.exists()&&e(i.data())},i=>{console.error("Firestore snapshot error:",i.code,i.message),ue.setState({syncStatus:"error"}),At.error(Ao.syncError)})},gx="1970-01-01T00:00:00.000Z",yx=n=>!n||n===gx,_x=()=>{const n=ue(l=>l.setUser),e=ue(l=>l.setUserProfile),t=ue(l=>l.setAuthLoading),i=ue(l=>l.setData),o=ue(l=>l.user);return de.useEffect(()=>{if(!hr){t(!1);return}const l=EA(hr,c=>{if(n(c),c){const f=ue.getState().data.userName;e({name:f||c.displayName||"Student",email:c.email||""})}else e(null);t(!1)});return()=>l()},[]),de.useEffect(()=>{if(!o||!Of)return;const l=mx(o.uid,c=>{const g=ue.getState().data.updatedAt;if(yx(g)){i(c),c.userName&&ue.getState().setUserProfile({name:c.userName,email:ue.getState().userProfile?.email||""});return}c.updatedAt>g&&(i(c),c.userName&&ue.getState().setUserProfile({name:c.userName,email:ue.getState().userProfile?.email||""}))});return()=>l()},[o]),{user:o,isAuthenticated:!!o,isFirebaseConfigured:Of}},vx=async(n,e)=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{return await gA(hr,n,e),{success:!0}}catch(t){const i=t?.code||"";return i==="auth/user-not-found"?{success:!1,error:"No account found. Double check your email."}:i==="auth/wrong-password"?{success:!1,error:"Wrong password. Try harder."}:i==="auth/invalid-email"?{success:!1,error:"That email doesn't look right."}:i==="auth/too-many-requests"?{success:!1,error:"Too many attempts. Take a breather."}:{success:!1,error:t?.message||"Login failed"}}},wx=async(n,e,t)=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{const i=await mA(hr,n,e);return await _A(i.user,{displayName:t}),{success:!0}}catch(i){const o=i?.code||"";return o==="auth/email-already-in-use"?{success:!1,error:"That email's taken. Log in instead."}:o==="auth/weak-password"?{success:!1,error:"That password's weaker than my prep schedule. Try harder."}:o==="auth/invalid-email"?{success:!1,error:"That email doesn't look right."}:{success:!1,error:i?.message||"Registration failed"}}},w2=async()=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{return await TA(hr),{success:!0}}catch(n){return{success:!1,error:n?.message||"Sign out failed"}}},Ex=async n=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{return await pA(hr,n),{success:!0}}catch(e){return{success:!1,error:e?.message||"Password reset failed"}}},Tx={primary:"bg-accent text-white hover:brightness-110 shadow-lg",secondary:"bg-surface-2 text-text-1 border border-border hover:bg-surface-3",ghost:"bg-transparent text-text-2 hover:bg-surface-2 hover:text-text-1",danger:"bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20"},Ix={sm:"px-3 py-1.5 text-xs rounded-xl",md:"px-5 py-2.5 text-sm rounded-xl",lg:"px-8 py-3 text-sm rounded-xl"},Mo=({variant:n="primary",size:e="md",loading:t=!1,children:i,className:o="",disabled:l,...c})=>b.jsxs("button",{className:`
        font-body font-semibold uppercase tracking-wide
        transition-all duration-150 active:scale-95
        focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none
        disabled:opacity-50 disabled:pointer-events-none
        inline-flex items-center justify-center gap-2
        ${Tx[n]} ${Ix[e]} ${o}
      `,disabled:l||t,...c,children:[t&&b.jsx("div",{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spinner"}),i]}),vo=({label:n,error:e,className:t="",...i})=>{const o=de.useRef(null),[l,c]=de.useState(!1);return de.useEffect(()=>{if(e){c(!0);const f=setTimeout(()=>c(!1),420);return()=>clearTimeout(f)}},[e]),b.jsxs("div",{className:`flex flex-col gap-1 ${l?"shake-error":""}`,ref:o,children:[n&&b.jsx("label",{className:"text-[10px] uppercase font-semibold tracking-wider text-text-2 ml-1",children:n}),b.jsx("input",{className:`
          w-full px-4 py-2.5 rounded-xl border border-border bg-surface-2
          text-sm text-text-1 font-body
          placeholder:text-text-3
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
          transition-colors
          ${e?"border-danger":""}
          ${t}
        `,...i}),e&&b.jsx("span",{className:"text-[11px] text-danger ml-1",children:e})]})},Sx=()=>{const n=ue(C=>C.setAuthScreen),[e,t]=de.useState(""),[i,o]=de.useState(""),[l,c]=de.useState(""),[f,g]=de.useState(!1),_=async C=>{if(C.preventDefault(),!e.trim()||!i.trim()){c("Fill in both fields.");return}g(!0),c(""),(await vx(e,i)).success?At.success(Ao.loginSuccess):c("Suffu didn't find you in his mind. Create a new account or Reset the password."),g(!1)},v=async()=>{if(!e.trim()){c("Enter your email first, then hit Forgot Password.");return}const C=await Ex(e);C.success?At.info(Ao.passwordReset):c(C.error||"Reset failed")},S=()=>{n("register")};return b.jsx("div",{className:"h-full flex items-center justify-center p-4 relative",style:{zIndex:2},children:b.jsxs("div",{className:"w-full max-w-md auth-enter",children:[b.jsxs("div",{className:"text-center mb-10",children:[b.jsxs("div",{className:"relative inline-block",children:[b.jsx("img",{src:"/Edith/logo.png",alt:"E.D.I.T.H",className:"w-20 h-20 mx-auto rounded-2xl mb-4 relative",style:{zIndex:1}}),b.jsx("div",{className:"absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-liquid-pulse opacity-30",style:{background:"var(--accent)",filter:"blur(20px)"}})]}),b.jsx("h1",{className:"font-display text-4xl font-extrabold text-text-1 tracking-tight uppercase",children:"E.D.I.T.H"}),b.jsx("p",{className:"text-text-2 text-sm mt-2 font-medium",children:"CA Intermediate Study Tracker"})]}),b.jsxs("form",{onSubmit:_,className:"glass rounded-3xl p-6 card-shadow space-y-5",children:[b.jsx("h2",{className:"font-display text-lg font-bold text-text-1",children:"Sign In"}),!Of,b.jsx(vo,{label:"Email",type:"email",placeholder:"your@email.com",value:e,onChange:C=>t(C.target.value),autoComplete:"email"}),b.jsx(vo,{label:"Password",type:"password",placeholder:"••••••••",value:i,onChange:C=>o(C.target.value),autoComplete:"current-password"}),l&&b.jsx("p",{className:"text-danger text-xs font-medium shake-error",children:l}),b.jsx(Mo,{type:"submit",loading:f,className:"w-full",size:"lg",children:"Login"}),b.jsxs("div",{className:"flex justify-between items-center text-xs",children:[b.jsx("button",{type:"button",onClick:v,className:"text-accent hover:underline font-medium",children:"Forgot password?"}),b.jsx("button",{type:"button",onClick:S,className:"text-text-2 hover:text-text-1 font-medium",children:"Create account →"})]})]})]})})},Ax=()=>{const n=ue($=>$.setAuthScreen),[e,t]=de.useState(""),[i,o]=de.useState(""),[l,c]=de.useState(""),[f,g]=de.useState(""),[_,v]=de.useState(""),[S,C]=de.useState(!1),U=async $=>{if($.preventDefault(),v(""),!e.trim()){v("Name is required.");return}if(!i.trim()){v("Email is required.");return}if(l.length<8){v("That password's weaker than my prep schedule. Min 8 characters.");return}if(l!==f){v("Passwords don't match. Try again.");return}C(!0);const F=await wx(i,l,e);F.success?At.success(Ao.registerSuccess):v(F.error||"Registration failed"),C(!1)},q=()=>{n("login")};return b.jsx("div",{className:"h-full flex items-center justify-center p-4 relative",style:{zIndex:2},children:b.jsxs("div",{className:"w-full max-w-md auth-enter",children:[b.jsxs("div",{className:"text-center mb-10",children:[b.jsxs("div",{className:"relative inline-block",children:[b.jsx("img",{src:"/Edith/logo.png",alt:"E.D.I.T.H",className:"w-20 h-20 mx-auto rounded-2xl mb-4 relative",style:{zIndex:1}}),b.jsx("div",{className:"absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-liquid-pulse opacity-30",style:{background:"var(--accent)",filter:"blur(20px)"}})]}),b.jsx("h1",{className:"font-display text-4xl font-extrabold text-text-1 tracking-tight uppercase",children:"E.D.I.T.H"}),b.jsx("p",{className:"text-text-2 text-sm mt-2 font-medium",children:"Create your account"})]}),b.jsxs("form",{onSubmit:U,className:"glass rounded-3xl p-6 card-shadow space-y-5",children:[b.jsx("h2",{className:"font-display text-lg font-bold text-text-1",children:"Register"}),b.jsx(vo,{label:"Name",type:"text",placeholder:"Your name",value:e,onChange:$=>t($.target.value),autoComplete:"name"}),b.jsx(vo,{label:"Email",type:"email",placeholder:"your@email.com",value:i,onChange:$=>o($.target.value),autoComplete:"email"}),b.jsx(vo,{label:"Password",type:"password",placeholder:"Min 8 characters",value:l,onChange:$=>c($.target.value),autoComplete:"new-password"}),b.jsx(vo,{label:"Confirm Password",type:"password",placeholder:"Repeat password",value:f,onChange:$=>g($.target.value),autoComplete:"new-password"}),_&&b.jsx("p",{className:"text-danger text-xs font-medium shake-error",children:_}),b.jsx(Mo,{type:"submit",loading:S,className:"w-full",size:"lg",children:"Create Account"}),b.jsx("div",{className:"text-center",children:b.jsx("button",{type:"button",onClick:q,className:"text-text-2 text-xs hover:text-text-1 font-medium",children:"← Already have an account? Sign in"})})]})]})})},kx=(n,e,t)=>{const i=e==="lectures",o=i?"all":t,l=new Date,c=Bn(l),f=n.deadlines.lectures,g=n.deadlines.exam,_=i?f:g,v=Math.max(0,Fa(c,f)),S=Math.max(0,Fa(c,g)),C=i?v:S,U=Fa(c,_)<0,q=zf.filter(Le=>o==="all"||n.config[Le].group===o);let $=0,F=0,ee=0,ae=0;q.forEach(Le=>{const Xe=n.config[Le],st=n.progress.lectures[Le]||0,Pe=n.progress.revisions[Le]||0;$+=Xe.lectures,F+=st,ee+=Xe.lectures+Xe.revisions,ae+=st+Pe});const me=ee>0?ae/ee*100:0,ve=$-F,Ue=v>0?(ve/v).toFixed(1):"0",_e=n.studyStartDate||"2025-11-01",P=Math.max(1,Fa(_e,c)),T=F/P,k=T>0?Math.min(100,(F+T*C)/$*100):0,x=n.pacingAlertThreshold??Bf;let D=null;U&&F<$?D=i?"CRITICAL: SYLLABUS DEADLINE EXCEEDED.":"CRITICAL: EXAM DEADLINE EXCEEDED.":parseFloat(Ue)>x&&F<$&&(D=`PACE ALERT: ${Ue} LECTURES/DAY REQUIRED`),F>=$&&$>0&&(D=null);let O=0;if(n.progress.history&&n.progress.history.length>0){const Le=[...n.progress.history].sort((Pe,Z)=>Z.date.localeCompare(Pe.date)),Xe=new Date;Xe.setDate(Xe.getDate()-1);const st=Bn(Xe);if(Le[0].date===c||Le[0].date===st){O=1;for(let Pe=0;Pe<Le.length-1&&Fa(Le[Pe+1].date,Le[Pe].date)===1;Pe++)O++}}const A=!n.lastExported||l.getTime()-new Date(n.lastExported).getTime()>7*864e5;return{overallProgress:me,daysToLectures:v,daysToExam:S,requiredPerDay:Ue,projectedCompletion:k,isOnTrack:k>=95,warning:D,streak:O,isBackupNeeded:A,totalTasks:ee,completedTasks:ae}},Ow=()=>{const n=ue(i=>i.data),e=ue(i=>i.activeTab),t=ue(i=>i.activeGroup);return de.useMemo(()=>kx(n,e,t),[n.progress.lectures,n.progress.revisions,n.config,n.deadlines,n.studyStartDate,n.pacingAlertThreshold,n.progress.history,n.lastExported,e,t])};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mw=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=de.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...f},g)=>de.createElement("svg",{ref:g,...Rx,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Mw("lucide",o),...f},[...c.map(([_,v])=>de.createElement(_,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(n,e)=>{const t=de.forwardRef(({className:i,...o},l)=>de.createElement(Px,{ref:l,iconNode:e,className:Mw(`lucide-${Cx(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=$t("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=$t("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=$t("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=$t("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=$t("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=$t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=$t("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=$t("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=$t("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=$t("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=$t("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=$t("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=$t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=$t("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=$t("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Fx=()=>{const n=ue(C=>C.syncStatus),e=ue(C=>C.setShowTodayModal),t=ue(C=>C.userProfile?.name),i=ue(C=>C.user),o=Ow(),[l,c]=de.useState(!1);de.useEffect(()=>{const C=setInterval(()=>{c(U=>!U)},3e3);return()=>clearInterval(C)},[]);const f=t&&t!=="Student"&&t.trim()!=="",g=()=>{if(!i){At.info("Sync unavailable — not logged in.");return}At.info("Syncing..."),Mf(500)},_={idle:null,syncing:b.jsx(Ox,{size:12,className:"animate-spinner text-accent"}),error:b.jsx(zw,{size:12,className:"text-danger"}),offline:b.jsx(Vx,{size:12,className:"text-warning"})}[n],v=l?o.daysToExam:o.daysToLectures,S=l?"Exam Deadline":"Lectures Deadline";return b.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 shrink-0 relative",style:{zIndex:10},children:[b.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[b.jsxs("div",{className:"flex flex-col items-start",style:{minWidth:60},children:[b.jsxs("div",{className:"flex items-center gap-1.5 transition-all duration-300",children:[b.jsx("span",{className:"font-mono text-lg font-bold text-text-1",children:v},l?"exam":"lec"),b.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-wider text-text-3",children:"days left"})]}),b.jsx("span",{className:"text-[8px] font-medium text-text-3/70 uppercase tracking-wider leading-none mt-0.5 transition-all duration-300",children:S})]}),b.jsxs("div",{className:"flex items-center gap-1 ml-1",children:[_&&b.jsx("span",{children:_}),b.jsx("button",{onClick:g,className:"p-1 rounded-md hover:bg-surface-2 text-text-3 hover:text-accent transition-colors active:scale-90","aria-label":"Manual sync",title:"Sync now",children:b.jsx(Mx,{size:11})})]})]}),f&&b.jsx("span",{className:"absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-text-2 truncate max-w-[140px] pointer-events-none",children:t}),b.jsxs("button",{onClick:()=>e(!0),className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold hover:bg-accent/15 transition-colors active:scale-95","aria-label":"Open today's overview",children:[b.jsx(Lx,{size:14}),"Today"]})]})},jx=[{id:"planner",label:"Planner",icon:b.jsx(Vw,{size:20})},{id:"tracker",label:"Tracker",icon:b.jsx(Lw,{size:20})},{id:"performance",label:"Performance",icon:b.jsx(jw,{size:20})},{id:"edith",label:"Edith AI",icon:b.jsx(Fw,{size:20})},{id:"settings",label:"Settings",icon:b.jsx(Uw,{size:20})}],Ux=()=>{const n=ue(t=>t.activeTab),e=ue(t=>t.setActiveTab);return b.jsx("nav",{className:"hidden md:flex flex-col items-center w-[60px] shrink-0 border-r border-border py-4 gap-1 bg-surface/50",style:{zIndex:5},"aria-label":"Main navigation",children:jx.map(t=>{const i=n===t.id;return b.jsxs("button",{role:"tab","aria-selected":i,"aria-label":t.label,title:t.label,onClick:()=>e(t.id),className:`
              relative w-10 h-10 rounded-xl flex items-center justify-center
              transition-all duration-200
              ${i?"bg-accent/12 text-accent":"text-text-3 hover:text-text-1 hover:bg-surface-2"}
            `,children:[t.icon,i&&b.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[1px] w-[3px] h-5 rounded-r-full bg-accent"})]},t.id)})})},zx=[{id:"planner",label:"Planner",icon:b.jsx(Vw,{size:20})},{id:"tracker",label:"Tracker",icon:b.jsx(Lw,{size:20})},{id:"performance",label:"Metrics",icon:b.jsx(jw,{size:20})},{id:"edith",label:"Edith",icon:b.jsx(Fw,{size:20})},{id:"settings",label:"Settings",icon:b.jsx(Uw,{size:20})}],Bx=()=>{const n=ue(t=>t.activeTab),e=ue(t=>t.setActiveTab);return b.jsxs("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-border","aria-label":"Mobile navigation",children:[b.jsx("div",{className:"flex items-center justify-around px-1 py-1.5",children:zx.map(t=>{const i=n===t.id;return b.jsxs("button",{role:"tab","aria-selected":i,"aria-label":t.label,onClick:()=>e(t.id),className:`
                flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl
                transition-all duration-200 min-w-[52px]
                ${i?"text-accent":"text-text-3 active:text-text-2"}
              `,children:[t.icon,b.jsx("span",{className:`text-[9px] font-semibold ${i?"text-accent":""}`,children:t.label})]},t.id)})}),b.jsx("div",{className:"h-[env(safe-area-inset-bottom)]"})]})},Bw=({open:n,onClose:e,title:t,children:i,maxWidth:o="max-w-xl"})=>{const l=de.useRef(null);return de.useEffect(()=>{n&&Ff()},[n]),de.useEffect(()=>{if(!n)return;const c=f=>{f.key==="Escape"&&e()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[n,e]),de.useEffect(()=>{if(n){const c=requestAnimationFrame(()=>{l.current&&!l.current.contains(document.activeElement)&&l.current.focus()});return()=>cancelAnimationFrame(c)}},[n]),n?b.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4",onClick:c=>{c.target===c.currentTarget&&e()},role:"presentation",children:[b.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm"}),b.jsxs("div",{ref:l,role:"dialog","aria-modal":"true","aria-label":t||"Dialog",tabIndex:-1,className:`
          relative w-full ${o} bg-surface border border-border
          rounded-3xl modal-shadow overflow-hidden
          flex flex-col max-h-[90vh]
          animate-modal-open
          focus:outline-none
        `,children:[t&&b.jsxs("div",{className:"p-5 border-b border-border flex justify-between items-center shrink-0",children:[b.jsx("h2",{className:"font-display text-lg font-bold uppercase tracking-tight text-text-1",children:t}),b.jsx("button",{onClick:e,className:"p-2 hover:bg-surface-2 rounded-xl transition-colors text-text-2 hover:text-text-1","aria-label":"Close dialog",children:b.jsx(jp,{size:20})})]}),i]})]}):null},$x=()=>{const n=ue(c=>c.showWelcomeModal),e=ue(c=>c.setShowWelcomeModal),t=ue(c=>c.setActiveTab),i=ue(c=>c.userProfile?.name||"Soldier"),o=Ow(),l=()=>{e(!1),t("tracker")};return b.jsx(Bw,{open:n,onClose:()=>e(!1),maxWidth:"max-w-md",children:b.jsxs("div",{className:"p-8 text-center space-y-6",children:[b.jsx("img",{src:"/Edith/logo.png",alt:"E.D.I.T.H",className:"w-20 h-20 mx-auto rounded-2xl"}),b.jsxs("h2",{className:"font-display text-2xl font-bold text-text-1",children:["Welcome back, ",i," 🔥"]}),b.jsxs("p",{className:"text-text-2 text-sm leading-relaxed",children:["You have ",b.jsx("span",{className:"font-mono font-bold text-accent",children:o.daysToLectures})," days until your lecture deadline.",b.jsx("br",{}),"No pressure... just your entire career on the line 😬"]}),b.jsxs("div",{className:"flex gap-3 justify-center pt-2",children:[b.jsx(Mo,{onClick:l,size:"lg",children:"Let's get it →"}),b.jsx(Mo,{variant:"ghost",onClick:()=>e(!1),size:"lg",children:"Not now"})]})]})})},Wx=()=>{const n=ue(v=>v.showTodayModal),e=ue(v=>v.setShowTodayModal),t=ue(v=>v.data.progress.planner),i=ue(v=>v.data.progress.schedule),o=ue(v=>v.data.config),l=ue(v=>v.togglePlannerTick),c=ue(v=>v.toggleScheduleComplete),f=Bn(),g=zf.map(v=>{const S=t.find(C=>C.date===f&&C.subject===v);return{key:v,name:o[v].name,color:o[v].color,entry:S}}),_=i.filter(v=>v.date===f||v.date==="__fixed__").sort((v,S)=>v.startTime.localeCompare(S.startTime));return b.jsx(Bw,{open:n,onClose:()=>e(!1),title:`📅 Today — ${LT(f)}`,maxWidth:"max-w-lg",children:b.jsxs("div",{className:"p-5 overflow-y-auto no-scrollbar max-h-[60vh] space-y-6",children:[_.length>0&&b.jsxs("div",{children:[b.jsx("h3",{className:"text-[10px] uppercase font-bold tracking-widest text-text-3 mb-3",children:"Schedule"}),b.jsx("div",{className:"space-y-2",children:_.map(v=>b.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-border",children:[b.jsx("span",{className:"font-mono text-xs text-text-2 w-12 shrink-0",children:v.startTime}),b.jsx("span",{className:"flex-1 text-sm font-medium text-text-1 truncate",children:v.customTitle}),v.durationMinutes>0&&b.jsxs("span",{className:"text-[10px] text-text-3 flex items-center gap-1",children:[b.jsx(bx,{size:10}),v.durationMinutes,"m"]}),b.jsx("button",{onClick:()=>c(v.id),className:`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${v.completed?"bg-success/20 border-success/30 text-success":"border-border hover:border-accent"}`,"aria-label":v.completed?"Mark incomplete":"Mark complete",children:v.completed&&b.jsx(Lf,{size:14})})]},v.id))})]}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-[10px] uppercase font-bold tracking-widest text-text-3 mb-3",children:"Planner"}),b.jsx("div",{className:"space-y-1.5",children:g.map(({key:v,name:S,color:C,entry:U})=>b.jsxs("div",{className:"flex items-center gap-3 p-2.5 rounded-xl bg-surface-2 border border-border",children:[b.jsx("div",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:C}}),b.jsx("span",{className:"text-sm font-medium text-text-1 w-28 shrink-0",children:S}),b.jsx("span",{className:`flex-1 text-xs truncate ${U?.note?"text-text-2":"text-text-3"}`,children:U?.note||"—"}),b.jsx("button",{onClick:()=>U?.note&&l(f,v),disabled:!U?.note,className:`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${U?.ticked?"bg-success/20 border-success/30 text-success":U?.note?"border-border hover:border-accent cursor-pointer":"border-border/50 opacity-30 cursor-not-allowed"}`,"aria-label":U?.ticked?"Unmark":"Mark done",children:U?.ticked&&b.jsx(Lf,{size:14})})]},v))})]}),_.length===0&&g.every(v=>!v.entry?.note)&&b.jsx("div",{className:"text-center py-8 text-text-3 text-sm",children:"Nothing planned for today. Hit the Planner or Schedule tab to set things up."})]})})},Ti=n=>n.toLowerCase()==="today"?Bn():n.toLowerCase()==="tomorrow"?lf(Bn(),1):n,ef=n=>!n||!n.includes(":")?"12:00":n.slice(0,5),qx=(n,e)=>{try{const i=ue.getState().data.config,o=e.subject?i[e.subject]?.name||e.subject:"";switch(n){case"update_progress":return`Update ${o} ${e.category}: ${e.operation} ${e.amount}`;case"add_reminder":return`Set reminder: "${e.title}" at ${e.time} on ${Ti(e.date)}`;case"add_schedule_item":return`Schedule "${e.title}" for ${e.durationMinutes}m at ${e.time||e.startTime} on ${Ti(e.date)}`;case"add_planner_entry":return`Add to Planner (${o}): "${e.note}" on ${Ti(e.date)}`;case"schedule_test":return`Schedule Mock Test for ${o} at ${e.time} on ${Ti(e.date)}`;case"add_syllabus_chapter":return`Add Chapter: "${e.chapterName}" to ${o}`;default:return`Execute unknown action: ${n}`}}catch{return`Execute ${n} (Failed to parse args)`}},Hx=(n,e)=>{try{const t=ue.getState();switch(n){case"update_progress":{const{subject:i,category:o,operation:l,amount:c}=e,f=t.data.progress[o][i]||0;let g=f;return l==="add"?g=f+c:l==="subtract"?g=f-c:l==="set"&&(g=c),t.updateProgress(o,i,g),{success:!0,result:`Successfully updated ${o} for ${i} to ${g}.`}}case"add_reminder":{const i={id:Or(),title:e.title,body:e.body,scheduledAt:`${Ti(e.date)}T${ef(e.time)}`,repeat:"none",notifyEnabled:!0,fired:!1};return t.addReminder(i),{success:!0,result:`Reminder '${e.title}' created.`}}case"add_schedule_item":{const i={id:Or(),customTitle:e.title,subject:e.subject||null,date:Ti(e.date),startTime:ef(e.startTime||e.time),durationMinutes:e.durationMinutes||60,notifyEnabled:!0,completed:!1};return t.addScheduleItem(i),{success:!0,result:`Scheduled '${e.title}' for ${e.durationMinutes}m.`}}case"add_planner_entry":{const i={id:Or(),date:Ti(e.date),subject:e.subject,note:(e.note||"").slice(0,50),ticked:!1,notifyEnabled:!1};return t.updatePlannerEntry(i),{success:!0,result:`Added planner entry for ${e.subject} on ${e.date}.`}}case"schedule_test":{const i={id:Or(),subject:e.subject,date:Ti(e.date),time:ef(e.time),note:e.note,notifyEnabled:!0,completed:!1};return t.addScheduledTest(i),{success:!0,result:`Scheduled test for ${e.subject}.`}}case"add_syllabus_chapter":return t.addSyllabusChapter(e.subject,e.chapterName),{success:!0,result:`Added chapter '${e.chapterName}' to ${e.subject}.`};default:return{success:!1,result:`Error: Tool '${n}' is not recognized.`}}}catch(t){return{success:!1,result:`Error executing ${n}: ${t.message}`}}},Ua=15,Kx=()=>{const n=ue(_=>_.pendingToolCall),e=ue(_=>_.setPendingToolCall),[t,i]=de.useState(Ua),o=de.useRef(null);de.useEffect(()=>{if(!n){i(Ua),o.current&&clearInterval(o.current);return}return i(Ua),o.current=setInterval(()=>{i(_=>_<=1?(clearInterval(o.current),c(),0):_-1)},1e3),()=>{o.current&&clearInterval(o.current)}},[n]);const l=()=>{o.current&&clearInterval(o.current),n&&(n.resolve({success:!1,result:"User aborted the action inside the UI modal."}),e(null),At.info("Action aborted. Edith will stand by."))},c=()=>{if(o.current&&clearInterval(o.current),n){const{name:_,args:v,resolve:S}=n,C=Hx(_,v);S(C),e(null)}};if(!n)return null;const f=qx(n.name,n.args),g=(Ua-t)/Ua*100;return b.jsxs("div",{className:"fixed inset-0 z-[250] flex items-center justify-center p-4",children:[b.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:l}),b.jsxs("div",{className:"relative w-full max-w-sm bg-surface border border-accent/40 rounded-3xl modal-shadow overflow-hidden animate-modal-open flex flex-col focus:outline-none",children:[b.jsxs("div",{className:"p-4 border-b border-border flex items-center gap-3 bg-accent/5",children:[b.jsx(xx,{className:"text-accent",size:20}),b.jsx("h2",{className:"font-display text-base font-bold uppercase tracking-tight text-text-1",children:n.description||"Edith Action"})]}),b.jsxs("div",{className:"p-6 text-center space-y-4",children:[b.jsx("p",{className:"text-sm font-medium text-text-2",children:"Edith wants to execute:"}),b.jsxs("div",{className:"bg-surface-2 border border-border rounded-xl p-4 inline-block mx-auto",children:[b.jsx("code",{className:"text-xs font-mono text-accent",children:n.name}),b.jsx("p",{className:"text-[13px] font-bold text-text-1 mt-2",children:f})]}),b.jsxs("p",{className:"text-[10px] text-text-3 font-mono",children:["Auto-confirming in ",t,"s..."]})]}),b.jsxs("div",{className:"p-4 border-t border-border flex items-center gap-3 bg-surface-1 relative",children:[b.jsx("div",{className:"absolute top-0 left-0 h-[2px] bg-accent transition-all duration-1000 ease-linear",style:{width:`${g}%`}}),b.jsxs(Mo,{variant:"ghost",className:"flex-1",onClick:l,autoFocus:!0,children:[b.jsx(jp,{size:16})," Abort"]}),b.jsxs(Mo,{variant:"primary",className:"flex-1",onClick:c,children:[b.jsx(Lf,{size:16})," Confirm"]})]})]})]})},Gx=n=>{const e=[];for(let t=0;t<n;t++){const i=2+(t*7+3)%5,o=(t*31+17)%100,l=10+(t*13+5)%14,c=(t*3+1)%15,f=-30+(t*19+7)%60,g=.2+(t*11+3)%40/100;e.push({size:i,left:o,duration:l,delay:c,drift:f,opacity:g,id:t})}return e},Qx=()=>{const n=de.useMemo(()=>Gx(38),[]);return b.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",style:{zIndex:1},"aria-hidden":"true",children:n.map(e=>b.jsx("div",{className:"particle",style:{width:`${e.size}px`,height:`${e.size}px`,left:`${e.left}%`,bottom:`-${e.size+10}px`,background:"radial-gradient(circle, var(--accent) 0%, transparent 70%)",animationDuration:`${e.duration}s`,animationDelay:`${e.delay}s`,"--particle-drift":`${e.drift}px`,"--particle-opacity":e.opacity}},e.id))})},Yx={info:b.jsx(Dx,{size:16}),success:b.jsx(Nx,{size:16}),error:b.jsx(zw,{size:16})},Xx={info:"border-accent/40 bg-accent/10 text-accent",success:"border-success/40 bg-success/10 text-success",error:"border-danger/40 bg-danger/10 text-danger"},F_=()=>{const n=ue(t=>t.toasts),e=ue(t=>t.removeToast);return b.jsx("div",{className:"fixed bottom-[5.5rem] md:bottom-6 right-4 z-[200] flex flex-col gap-2 pointer-events-none max-w-sm w-full",style:{bottom:"max(5.5rem, calc(5rem + env(safe-area-inset-bottom)))"},children:n.map(t=>b.jsx(Jx,{id:t.id,message:t.message,type:t.type,createdAt:t.createdAt,onRemove:e},t.id))})},Jx=({id:n,message:e,type:t,createdAt:i,onRemove:o})=>(de.useEffect(()=>{const l=setTimeout(()=>o(n),MT);return()=>clearTimeout(l)},[n,o]),b.jsxs("div",{className:`
        pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border
        font-body text-sm font-medium
        animate-toast-in card-shadow
        ${t==="error"?"shake-error ":""}${Xx[t]}
      `,children:[Yx[t],b.jsx("span",{className:"flex-1 text-text-1",children:e}),b.jsx("button",{onClick:()=>o(n),className:"text-text-3 hover:text-text-1 transition-colors","aria-label":"Dismiss",children:b.jsx(jp,{size:14})})]})),Xc=()=>"serviceWorker"in navigator&&"Notification"in window&&"PushManager"in window,E2=async()=>{if(!Xc())return"default";const n=await Notification.requestPermission();if(n==="granted")try{console.log("Permission granted, fetching FCM token...");const e=await px();if(e){const t=await navigator.serviceWorker.ready;console.log("Service Worker ready, requesting token with VAPID key...");const i=await dx(e,{vapidKey:fx,serviceWorkerRegistration:t});i?(localStorage.setItem("fcm_token",i),console.log("FCM Token retrieved successfully:",i.slice(0,10)+"..."),At.success("Notifications fully enabled!")):(console.warn("No registration token available. Request permission to generate one."),At.error("Failed to generate Device ID. Try again."))}else console.warn("Messaging instance could not be initialized."),At.error("Device does not support push notifications.")}catch(e){console.error("An error occurred while retrieving token. ",e),At.error("Error connecting to notification service.")}return n},Zx=async()=>{if(Xc())try{const n="/Edith/",e=`${n}sw-custom.js`.replace(/\/+/g,"/"),t=await navigator.serviceWorker.register(e,{scope:n});console.log("Service Worker registered successfully:",t.scope)}catch(n){console.error("Service Worker registration failed:",n)}},T2=async(n,e,t,i)=>e2(n,e,t,i),e2=async(n,e,t,i)=>{if(!Xc())return;if(Notification.permission==="denied"){At.error("Notifications are blocked. Please enable them in settings.");return}const l=localStorage.getItem("fcm_token");if(!l){At.error("Device ID (Token) missing. Try toggling notifications in Settings.");return}try{if(!n||!e||!i)throw new Error("Invalid notification data");const c=new Date(i).getTime();if(isNaN(c))throw new Error("Invalid scheduled time");const f=Gc(Oo,"scheduled_notifications",n);await aw(f,{id:n,title:e,body:t,scheduledAt:i,targetTimeMs:c,token:l,status:"pending",createdAt:Date.now()}),console.log("Notification scheduled in Firestore:",n),At.success("Reminder scheduled successfully!")}catch(c){console.error("Scheduling error:",c),At.error(`Failed to schedule: ${c.message||"Unknown error"}`)}},I2=async n=>{if(Xc())try{(await navigator.serviceWorker.ready).active?.postMessage({type:"CANCEL_NOTIFICATION",payload:{id:n}});const t=Gc(Oo,"scheduled_notifications",n);await jR(t),At.info("Notification cancelled.")}catch(e){console.warn("Error cancelling notification:",e)}},t2=de.lazy(()=>gl(()=>import("./TrackerTab-BK-Gvv0l.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(n=>({default:n.TrackerTab}))),n2=de.lazy(()=>gl(()=>import("./PlannerHubTab-F1kw5LAq.js"),__vite__mapDeps([8,2,5,9,10,3,1,6,11,7])).then(n=>({default:n.PlannerHubTab}))),r2=de.lazy(()=>gl(()=>import("./PerformanceTab-x1qfn8AF.js"),__vite__mapDeps([12,10,9,3,6,4,7])).then(n=>({default:n.PerformanceTab}))),i2=de.lazy(()=>gl(()=>import("./EdithTab-CjmxNr7L.js"),__vite__mapDeps([13,3,1,6])).then(n=>({default:n.EdithTab}))),s2=de.lazy(()=>gl(()=>import("./SettingsTab-DSNk0iJo.js"),__vite__mapDeps([14,2,9,11,6,4])).then(n=>({default:n.SettingsTab}))),o2=n=>{if(n==="light")return"light";if(n==="dark")return"";if(n==="system")return window.matchMedia("(prefers-color-scheme: light)").matches?"light":"";if(n==="auto"){const e=new Date().getHours();return e>=7&&e<19?"light":""}return""},za=()=>b.jsx("div",{className:"h-full flex items-center justify-center",children:b.jsx("div",{className:"w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spinner"})}),a2=()=>{const{isAuthenticated:n,isFirebaseConfigured:e}=_x(),t=ue(F=>F.authLoading),i=ue(F=>F.authScreen),o=ue(F=>F.activeTab),l=ue(F=>F.data.themeMode),c=ue(F=>F.data.fullScreenEnabled),f=ue(F=>F.data.lastWelcomeShownDate),g=ue(F=>F.setShowWelcomeModal),_=ue(F=>F.setLastWelcomeShownDate),v=ue(F=>F.setSyncStatus),S=ue(F=>F.setActiveTab),C=ue(F=>F.user),U=de.useRef(null),q=de.useRef("");de.useEffect(()=>{if(!C||!e)return;const F=ue.subscribe(ee=>{const ae=ee.data.updatedAt;ae&&ae!==q.current&&(q.current=ae,Mf())});return()=>F()},[C,e]),de.useEffect(()=>{const F=()=>{const ee=o2(l),ae=document.documentElement,me=ae.classList.contains("light"),ve=ee==="light";U.current!==null&&me!==ve&&(ae.classList.add("theme-transitioning"),setTimeout(()=>ae.classList.remove("theme-transitioning"),700)),ae.classList.toggle("light",ve),U.current=ee};if(F(),l==="system"){const ee=window.matchMedia("(prefers-color-scheme: light)"),ae=()=>F();return ee.addEventListener("change",ae),()=>ee.removeEventListener("change",ae)}if(l==="auto"){const ee=setInterval(F,6e4);return()=>clearInterval(ee)}},[l]),de.useEffect(()=>{const F=Bn();f!==F&&(n||!e)&&(g(!0),_(F))},[n,f,e,g,_]),de.useEffect(()=>{const F=()=>{v("idle"),At.info(Ao.onlineRestored),Mf(500)},ee=()=>v("offline");return window.addEventListener("online",F),window.addEventListener("offline",ee),()=>{window.removeEventListener("online",F),window.removeEventListener("offline",ee)}},[v]),de.useEffect(()=>{Zx()},[]),de.useEffect(()=>{(n||!e)&&S("planner")},[n,e,S]),de.useEffect(()=>{if(!c||document.fullscreenElement)return;const F=setTimeout(()=>{if(document.fullscreenElement||!document.documentElement.requestFullscreen)return;const ee=document.createElement("button");ee.style.position="fixed",ee.style.top="5%",ee.style.left="50%",ee.style.width="0px",ee.style.height="0px",ee.style.opacity="0",ee.style.pointerEvents="none",ee.setAttribute("aria-hidden","true"),ee.setAttribute("data-auto-click","true"),document.body.appendChild(ee),ee.click(),setTimeout(()=>{document.body.contains(ee)&&document.body.removeChild(ee)},100)},1e3);return()=>clearTimeout(F)},[c]);const $=de.useCallback(F=>{c&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),F.target?.closest?.('button, a, [role="tab"], [role="button"], input[type="checkbox"], input[type="radio"], select, .toggle-track, [data-clickable]')&&Ff()},[c]);return de.useEffect(()=>(document.addEventListener("click",$,!0),()=>document.removeEventListener("click",$,!0)),[$]),t?b.jsx("div",{className:"h-screen flex items-center justify-center bg-bg",children:b.jsxs("div",{className:"text-center",children:[b.jsxs("div",{style:{position:"relative",width:130,height:130,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto"},children:[b.jsx("div",{style:{position:"absolute",width:50,height:50,borderRadius:"50%",background:"conic-gradient(from 0deg, var(--accent, #3b82f6) 0%, transparent 40%, transparent 50%, var(--accent, #3b82f6) 50%, transparent 90%)",animation:"edith-fan-spin 1s linear infinite",zIndex:2}}),b.jsx("div",{style:{position:"absolute",width:50,height:50,borderRadius:"50%",zIndex:1,animation:"edith-ring-pulse 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1)"}})]}),b.jsx("style",{children:`
            @keyframes edith-fan-spin { to { transform: rotate(-360deg); } }
            @keyframes edith-ring-pulse {
              0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent, #3b82f6) 70%, transparent); }
              100% { box-shadow: 0 0 0 40px color-mix(in srgb, var(--accent, #3b82f6) 0%, transparent); }
            }
          `})]})}):n?b.jsxs("div",{className:"h-screen w-full flex flex-col bg-bg font-body overflow-hidden relative",style:{zIndex:0},children:[b.jsx(Qx,{}),b.jsx(Fx,{}),b.jsxs("div",{className:"flex flex-1 min-h-0",children:[b.jsx(Ux,{}),b.jsxs("main",{className:"flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3 md:px-5 py-2 pb-20 md:pb-2 relative",style:{zIndex:2},children:[b.jsx("div",{className:o==="tracker"?"h-full":"hidden",children:b.jsx(de.Suspense,{fallback:b.jsx(za,{}),children:b.jsx(t2,{})})}),b.jsx("div",{className:o==="planner"?"h-full":"hidden",children:b.jsx(de.Suspense,{fallback:b.jsx(za,{}),children:b.jsx(n2,{})})}),b.jsx("div",{className:o==="performance"?"h-full":"hidden",children:b.jsx(de.Suspense,{fallback:b.jsx(za,{}),children:b.jsx(r2,{})})}),b.jsx("div",{className:o==="edith"?"h-full":"hidden",children:b.jsx(de.Suspense,{fallback:b.jsx(za,{}),children:b.jsx(i2,{})})}),b.jsx("div",{className:o==="settings"?"h-full":"hidden",children:b.jsx(de.Suspense,{fallback:b.jsx(za,{}),children:b.jsx(s2,{})})})]})]}),b.jsx(Bx,{}),b.jsx($x,{}),b.jsx(Wx,{}),b.jsx(Kx,{}),b.jsx(F_,{})]}):b.jsxs("div",{className:"h-screen auth-gradient-bg relative overflow-hidden",children:[i==="login"?b.jsx(Sx,{}):b.jsx(Ax,{}),b.jsx(F_,{})]})};document.addEventListener("contextmenu",n=>{n.preventDefault()});tT.createRoot(document.getElementById("root")).render(b.jsx(j_.StrictMode,{children:b.jsx(a2,{})}));export{u2 as A,Mo as B,Lf as C,jR as D,c2 as E,Vf as F,xx as G,Fw as H,vo as I,Ex as J,w2 as K,E2 as L,Bw as M,T2 as N,Xc as O,jw as P,j_ as R,zf as S,Ao as T,d2 as W,l2 as a,Bn as b,$t as c,lf as d,Or as e,p2 as f,g2 as g,I2 as h,f2 as i,b as j,LT as k,m2 as l,bx as m,h2 as n,Vw as o,Ow as p,Lw as q,de as r,e2 as s,At as t,ue as u,Uw as v,kx as w,Gc as x,Oo as y,UR as z};
