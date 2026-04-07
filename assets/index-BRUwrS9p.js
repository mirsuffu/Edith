const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TrackerTab-37tHQ0U8.js","assets/plus-CvXlnXFf.js","assets/useEditorMode-FPZfzArb.js","assets/ConfirmModal-VPke2-Lc.js","assets/chevron-down-DnLtmCKG.js","assets/chevron-right-CMkf-0uw.js","assets/trash-2-wBPtSnbE.js","assets/SubtabBar-bBzUkCE8.js","assets/PlannerHubTab-DIyrpAvC.js","assets/Toggle-CX_bjoGP.js","assets/Select-BBNbAnNd.js","assets/useNotifications-C0AjCUph.js","assets/PerformanceTab-Cxxi2Jhv.js","assets/EdithTab-Cds36kxj.js","assets/SettingsTab-C2pWDiOl.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Bf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ph={exports:{}},ja={},Rh={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function ZE(){if(Xg)return Pe;Xg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.iterator;function C(L){return L===null||typeof L!="object"?null:(L=I&&L[I]||L["@@iterator"],typeof L=="function"?L:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,$={};function M(L,q,ce){this.props=L,this.context=q,this.refs=$,this.updater=ce||U}M.prototype.isReactComponent={},M.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function Z(){}Z.prototype=M.prototype;function se(L,q,ce){this.props=L,this.context=q,this.refs=$,this.updater=ce||U}var de=se.prototype=new Z;de.constructor=se,W(de,M.prototype),de.isPureReactComponent=!0;var me=Array.isArray,Oe=Object.prototype.hasOwnProperty,ge={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function T(L,q,ce){var Ae,Ce={},Le=null,ze=null;if(q!=null)for(Ae in q.ref!==void 0&&(ze=q.ref),q.key!==void 0&&(Le=""+q.key),q)Oe.call(q,Ae)&&!x.hasOwnProperty(Ae)&&(Ce[Ae]=q[Ae]);var Be=arguments.length-2;if(Be===1)Ce.children=ce;else if(1<Be){for(var Ke=Array(Be),wt=0;wt<Be;wt++)Ke[wt]=arguments[wt+2];Ce.children=Ke}if(L&&L.defaultProps)for(Ae in Be=L.defaultProps,Be)Ce[Ae]===void 0&&(Ce[Ae]=Be[Ae]);return{$$typeof:n,type:L,key:Le,ref:ze,props:Ce,_owner:ge.current}}function k(L,q){return{$$typeof:n,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function b(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ce){return q[ce]})}var O=/\/+/g;function A(L,q){return typeof L=="object"&&L!==null&&L.key!=null?b(""+L.key):q.toString(36)}function ke(L,q,ce,Ae,Ce){var Le=typeof L;(Le==="undefined"||Le==="boolean")&&(L=null);var ze=!1;if(L===null)ze=!0;else switch(Le){case"string":case"number":ze=!0;break;case"object":switch(L.$$typeof){case n:case e:ze=!0}}if(ze)return ze=L,Ce=Ce(ze),L=Ae===""?"."+A(ze,0):Ae,me(Ce)?(ce="",L!=null&&(ce=L.replace(O,"$&/")+"/"),ke(Ce,q,ce,"",function(wt){return wt})):Ce!=null&&(R(Ce)&&(Ce=k(Ce,ce+(!Ce.key||ze&&ze.key===Ce.key?"":(""+Ce.key).replace(O,"$&/")+"/")+L)),q.push(Ce)),1;if(ze=0,Ae=Ae===""?".":Ae+":",me(L))for(var Be=0;Be<L.length;Be++){Le=L[Be];var Ke=Ae+A(Le,Be);ze+=ke(Le,q,ce,Ke,Ce)}else if(Ke=C(L),typeof Ke=="function")for(L=Ke.call(L),Be=0;!(Le=L.next()).done;)Le=Le.value,Ke=Ae+A(Le,Be++),ze+=ke(Le,q,ce,Ke,Ce);else if(Le==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ze}function $e(L,q,ce){if(L==null)return L;var Ae=[],Ce=0;return ke(L,Ae,"","",function(Le){return q.call(ce,Le,Ce++)}),Ae}function ot(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(ce){(L._status===0||L._status===-1)&&(L._status=1,L._result=ce)},function(ce){(L._status===0||L._status===-1)&&(L._status=2,L._result=ce)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var xe={current:null},ee={transition:null},he={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ge};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:$e,forEach:function(L,q,ce){$e(L,function(){q.apply(this,arguments)},ce)},count:function(L){var q=0;return $e(L,function(){q++}),q},toArray:function(L){return $e(L,function(q){return q})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Pe.Component=M,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=se,Pe.StrictMode=i,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Pe.act=ne,Pe.cloneElement=function(L,q,ce){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ae=W({},L.props),Ce=L.key,Le=L.ref,ze=L._owner;if(q!=null){if(q.ref!==void 0&&(Le=q.ref,ze=ge.current),q.key!==void 0&&(Ce=""+q.key),L.type&&L.type.defaultProps)var Be=L.type.defaultProps;for(Ke in q)Oe.call(q,Ke)&&!x.hasOwnProperty(Ke)&&(Ae[Ke]=q[Ke]===void 0&&Be!==void 0?Be[Ke]:q[Ke])}var Ke=arguments.length-2;if(Ke===1)Ae.children=ce;else if(1<Ke){Be=Array(Ke);for(var wt=0;wt<Ke;wt++)Be[wt]=arguments[wt+2];Ae.children=Be}return{$$typeof:n,type:L.type,key:Ce,ref:Le,props:Ae,_owner:ze}},Pe.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Pe.createElement=T,Pe.createFactory=function(L){var q=T.bind(null,L);return q.type=L,q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(L){return{$$typeof:f,render:L}},Pe.isValidElement=R,Pe.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ot}},Pe.memo=function(L,q){return{$$typeof:v,type:L,compare:q===void 0?null:q}},Pe.startTransition=function(L){var q=ee.transition;ee.transition={};try{L()}finally{ee.transition=q}},Pe.unstable_act=ne,Pe.useCallback=function(L,q){return xe.current.useCallback(L,q)},Pe.useContext=function(L){return xe.current.useContext(L)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(L){return xe.current.useDeferredValue(L)},Pe.useEffect=function(L,q){return xe.current.useEffect(L,q)},Pe.useId=function(){return xe.current.useId()},Pe.useImperativeHandle=function(L,q,ce){return xe.current.useImperativeHandle(L,q,ce)},Pe.useInsertionEffect=function(L,q){return xe.current.useInsertionEffect(L,q)},Pe.useLayoutEffect=function(L,q){return xe.current.useLayoutEffect(L,q)},Pe.useMemo=function(L,q){return xe.current.useMemo(L,q)},Pe.useReducer=function(L,q,ce){return xe.current.useReducer(L,q,ce)},Pe.useRef=function(L){return xe.current.useRef(L)},Pe.useState=function(L){return xe.current.useState(L)},Pe.useSyncExternalStore=function(L,q,ce){return xe.current.useSyncExternalStore(L,q,ce)},Pe.useTransition=function(){return xe.current.useTransition()},Pe.version="18.3.1",Pe}var Jg;function vl(){return Jg||(Jg=1,Rh.exports=ZE()),Rh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function eT(){if(Zg)return ja;Zg=1;var n=vl(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,g,v){var _,I={},C=null,U=null;v!==void 0&&(C=""+v),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(U=g.ref);for(_ in g)i.call(g,_)&&!l.hasOwnProperty(_)&&(I[_]=g[_]);if(f&&f.defaultProps)for(_ in g=f.defaultProps,g)I[_]===void 0&&(I[_]=g[_]);return{$$typeof:e,type:f,key:C,ref:U,props:I,_owner:o.current}}return ja.Fragment=t,ja.jsx=c,ja.jsxs=c,ja}var ey;function tT(){return ey||(ey=1,Ph.exports=eT()),Ph.exports}var N=tT(),ye=vl();const Hv=Bf(ye);var Ku={},xh={exports:{}},nn={},bh={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function nT(){return ty||(ty=1,(function(n){function e(ee,he){var ne=ee.length;ee.push(he);e:for(;0<ne;){var L=ne-1>>>1,q=ee[L];if(0<o(q,he))ee[L]=he,ee[ne]=q,ne=L;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var he=ee[0],ne=ee.pop();if(ne!==he){ee[0]=ne;e:for(var L=0,q=ee.length,ce=q>>>1;L<ce;){var Ae=2*(L+1)-1,Ce=ee[Ae],Le=Ae+1,ze=ee[Le];if(0>o(Ce,ne))Le<q&&0>o(ze,Ce)?(ee[L]=ze,ee[Le]=ne,L=Le):(ee[L]=Ce,ee[Ae]=ne,L=Ae);else if(Le<q&&0>o(ze,ne))ee[L]=ze,ee[Le]=ne,L=Le;else break e}}return he}function o(ee,he){var ne=ee.sortIndex-he.sortIndex;return ne!==0?ne:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var g=[],v=[],_=1,I=null,C=3,U=!1,W=!1,$=!1,M=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(ee){for(var he=t(v);he!==null;){if(he.callback===null)i(v);else if(he.startTime<=ee)i(v),he.sortIndex=he.expirationTime,e(g,he);else break;he=t(v)}}function me(ee){if($=!1,de(ee),!W)if(t(g)!==null)W=!0,ot(Oe);else{var he=t(v);he!==null&&xe(me,he.startTime-ee)}}function Oe(ee,he){W=!1,$&&($=!1,Z(T),T=-1),U=!0;var ne=C;try{for(de(he),I=t(g);I!==null&&(!(I.expirationTime>he)||ee&&!b());){var L=I.callback;if(typeof L=="function"){I.callback=null,C=I.priorityLevel;var q=L(I.expirationTime<=he);he=n.unstable_now(),typeof q=="function"?I.callback=q:I===t(g)&&i(g),de(he)}else i(g);I=t(g)}if(I!==null)var ce=!0;else{var Ae=t(v);Ae!==null&&xe(me,Ae.startTime-he),ce=!1}return ce}finally{I=null,C=ne,U=!1}}var ge=!1,x=null,T=-1,k=5,R=-1;function b(){return!(n.unstable_now()-R<k)}function O(){if(x!==null){var ee=n.unstable_now();R=ee;var he=!0;try{he=x(!0,ee)}finally{he?A():(ge=!1,x=null)}}else ge=!1}var A;if(typeof se=="function")A=function(){se(O)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,$e=ke.port2;ke.port1.onmessage=O,A=function(){$e.postMessage(null)}}else A=function(){M(O,0)};function ot(ee){x=ee,ge||(ge=!0,A())}function xe(ee,he){T=M(function(){ee(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){W||U||(W=!0,ot(Oe))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ee){switch(C){case 1:case 2:case 3:var he=3;break;default:he=C}var ne=C;C=he;try{return ee()}finally{C=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=C;C=ee;try{return he()}finally{C=ne}},n.unstable_scheduleCallback=function(ee,he,ne){var L=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?L+ne:L):ne=L,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ne+q,ee={id:_++,callback:he,priorityLevel:ee,startTime:ne,expirationTime:q,sortIndex:-1},ne>L?(ee.sortIndex=ne,e(v,ee),t(g)===null&&ee===t(v)&&($?(Z(T),T=-1):$=!0,xe(me,ne-L))):(ee.sortIndex=q,e(g,ee),W||U||(W=!0,ot(Oe))),ee},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ee){var he=C;return function(){var ne=C;C=he;try{return ee.apply(this,arguments)}finally{C=ne}}}})(Nh)),Nh}var ny;function rT(){return ny||(ny=1,bh.exports=nT()),bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function iT(){if(ry)return nn;ry=1;var n=vl(),e=rT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},I={};function C(r){return g.call(I,r)?!0:g.call(_,r)?!1:v.test(r)?I[r]=!0:(_[r]=!0,!1)}function U(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,s,a,d){if(s===null||typeof s>"u"||U(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,d,h,m,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function se(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Z,se);M[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Z,se);M[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Z,se);M[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function de(r,s,a,d){var h=M.hasOwnProperty(s)?M[s]:null;(h!==null?h.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,h,d)&&(a=null),d||h===null?C(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,d=h.attributeNamespace,a===null?r.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var me=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),ge=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),b=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,L;function q(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var ce=!1;function Ae(r,s){if(!r||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var d=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){d=z}r.call(s.prototype)}else{try{throw Error()}catch(z){d=z}r()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var h=z.stack.split(`
`),m=d.stack.split(`
`),w=h.length-1,S=m.length-1;1<=w&&0<=S&&h[w]!==m[S];)S--;for(;1<=w&&0<=S;w--,S--)if(h[w]!==m[S]){if(w!==1||S!==1)do if(w--,S--,0>S||h[w]!==m[S]){var P=`
`+h[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=S);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Ce(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function Le(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case ge:return"Portal";case k:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case ke:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case $e:return s=r.displayName||null,s!==null?s:Le(r.type)||"Memo";case ot:s=r._payload,r=r._init;try{return Le(r(s))}catch{}}return null}function ze(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ke(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=Ke(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return h.call(this)},set:function(w){d=""+w,m.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function mr(r){r._valueTracker||(r._valueTracker=wt(r))}function Ss(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=Ke(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function qr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function xi(r,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function As(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=Be(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(r,s){s=s.checked,s!=null&&de(r,"checked",s,!1)}function Ho(r,s){qo(r,s);var a=Be(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ks(r,s.type,a):s.hasOwnProperty("defaultValue")&&ks(r,s.type,Be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Nl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ks(r,s,a){(s!=="number"||qr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var gr=Array.isArray;function yr(r,s,a,d){if(r=r.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=s.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&d&&(r[a].defaultSelected=!0)}else{for(a=""+Be(a),s=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,d&&(r[h].defaultSelected=!0);return}s!==null||r[h].disabled||(s=r[h])}s!==null&&(s.selected=!0)}}function Ko(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Cs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(gr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Be(a)}}function Ps(r,s){var a=Be(s.value),d=Be(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function Go(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var vr,Qo=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,h){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,h)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=vr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ni=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(r){Ni.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),bi[s]=bi[r]})});function Yo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||bi.hasOwnProperty(r)&&bi[r]?(""+s).trim():s+"px"}function Xo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,h=Yo(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,h):r[a]=h}}var Jo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zo(r,s){if(s){if(Jo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ea(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Rs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xs=null,hn=null,qn=null;function bs(r){if(r=Sa(r)){if(typeof xs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=lu(s),xs(r.stateNode,r.type,s))}}function Hn(r){hn?qn?qn.push(r):qn=[r]:hn=r}function ta(){if(hn){var r=hn,s=qn;if(qn=hn=null,bs(r),s)for(r=0;r<s.length;r++)bs(s[r])}}function Oi(r,s){return r(s)}function na(){}var _r=!1;function ra(r,s,a){if(_r)return r(s,a);_r=!0;try{return Oi(r,s,a)}finally{_r=!1,(hn!==null||qn!==null)&&(na(),ta())}}function at(r,s){var a=r.stateNode;if(a===null)return null;var d=lu(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ns=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ns=!1}function Li(r,s,a,d,h,m,w,S,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(K){this.onError(K)}}var Mi=!1,Ds=null,kn=!1,ia=null,nd={onError:function(r){Mi=!0,Ds=r}};function Os(r,s,a,d,h,m,w,S,P){Mi=!1,Ds=null,Li.apply(nd,arguments)}function Dl(r,s,a,d,h,m,w,S,P){if(Os.apply(this,arguments),Mi){if(Mi){var z=Ds;Mi=!1,Ds=null}else throw Error(t(198));kn||(kn=!0,ia=z)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Vi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(Cn(r)!==r)throw Error(t(188))}function Ol(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(d=h.return,d!==null){a=d;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return Pn(h),r;if(m===d)return Pn(h),s;m=m.sibling}throw Error(t(188))}if(a.return!==d.return)a=h,d=m;else{for(var w=!1,S=h.child;S;){if(S===a){w=!0,a=h,d=m;break}if(S===d){w=!0,d=h,a=m;break}S=S.sibling}if(!w){for(S=m.child;S;){if(S===a){w=!0,a=m,d=h;break}if(S===d){w=!0,d=m,a=h;break}S=S.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function sa(r){return r=Ol(r),r!==null?Ls(r):null}function Ls(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ls(r);if(s!==null)return s;r=r.sibling}return null}var Ms=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,Ll=e.unstable_shouldYield,rd=e.unstable_requestPaint,Ge=e.unstable_now,Ml=e.unstable_getCurrentPriorityLevel,Fi=e.unstable_ImmediatePriority,Kr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,aa=e.unstable_LowPriority,Vl=e.unstable_IdlePriority,ji=null,rn=null;function Fl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(ji,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Ul,la=Math.log,jl=Math.LN2;function Ul(r){return r>>>=0,r===0?32:31-(la(r)/jl|0)|0}var Vs=64,Fs=4194304;function Gr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ui(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,h=r.suspendedLanes,m=r.pingedLanes,w=a&268435455;if(w!==0){var S=w&~h;S!==0?d=Gr(S):(m&=w,m!==0&&(d=Gr(m)))}else w=a&~h,w!==0?d=Gr(w):m!==0&&(d=Gr(m));if(d===0)return 0;if(s!==0&&s!==d&&(s&h)===0&&(h=d&-d,m=s&-s,h>=m||h===16&&(m&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-Wt(s),h=1<<a,d|=r[a],s&=~h;return d}function id(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,h=r.expirationTimes,m=r.pendingLanes;0<m;){var w=31-Wt(m),S=1<<w,P=h[w];P===-1?((S&a)===0||(S&d)!==0)&&(h[w]=id(S,s)):P<=s&&(r.expiredLanes|=S),m&=~S}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function zi(){var r=Vs;return Vs<<=1,(Vs&4194240)===0&&(Vs=64),r}function Qr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Yr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-Wt(a),m=1<<h;s[h]=0,d[h]=-1,r[h]=-1,a&=~m}}function Xr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-Wt(a),h=1<<d;h&s|r[d]&s&&(r[d]|=s),a&=~h}}var Ne=0;function Jr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var zl,js,Bl,$l,Wl,ua=!1,Kn=[],kt=null,Rn=null,xn=null,Zr=new Map,pn=new Map,Gn=[],sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ql(r,s){switch(r){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Zr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(s.pointerId)}}function Qt(r,s,a,d,h,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:m,targetContainers:[h]},s!==null&&(s=Sa(s),s!==null&&js(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),r)}function od(r,s,a,d,h){switch(s){case"focusin":return kt=Qt(kt,r,s,a,d,h),!0;case"dragenter":return Rn=Qt(Rn,r,s,a,d,h),!0;case"mouseover":return xn=Qt(xn,r,s,a,d,h),!0;case"pointerover":var m=h.pointerId;return Zr.set(m,Qt(Zr.get(m)||null,r,s,a,d,h)),!0;case"gotpointercapture":return m=h.pointerId,pn.set(m,Qt(pn.get(m)||null,r,s,a,d,h)),!0}return!1}function Hl(r){var s=Hi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=Vi(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){Bl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Us(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Di=d,a.target.dispatchEvent(d),Di=null}else return s=Sa(a),s!==null&&js(s),r.blockedOn=a,!1;s.shift()}return!0}function Bi(r,s,a){Er(r)&&a.delete(s)}function Kl(){ua=!1,kt!==null&&Er(kt)&&(kt=null),Rn!==null&&Er(Rn)&&(Rn=null),xn!==null&&Er(xn)&&(xn=null),Zr.forEach(Bi),pn.forEach(Bi)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,ua||(ua=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kl)))}function Nn(r){function s(h){return bn(h,r)}if(0<Kn.length){bn(Kn[0],r);for(var a=1;a<Kn.length;a++){var d=Kn[a];d.blockedOn===r&&(d.blockedOn=null)}}for(kt!==null&&bn(kt,r),Rn!==null&&bn(Rn,r),xn!==null&&bn(xn,r),Zr.forEach(s),pn.forEach(s),a=0;a<Gn.length;a++)d=Gn[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Hl(a),a.blockedOn===null&&Gn.shift()}var Tr=me.ReactCurrentBatchConfig,ei=!0;function Je(r,s,a,d){var h=Ne,m=Tr.transition;Tr.transition=null;try{Ne=1,ca(r,s,a,d)}finally{Ne=h,Tr.transition=m}}function ad(r,s,a,d){var h=Ne,m=Tr.transition;Tr.transition=null;try{Ne=4,ca(r,s,a,d)}finally{Ne=h,Tr.transition=m}}function ca(r,s,a,d){if(ei){var h=Us(r,s,a,d);if(h===null)vd(r,s,d,$i,a),ql(r,d);else if(od(h,r,s,a,d))d.stopPropagation();else if(ql(r,d),s&4&&-1<sd.indexOf(r)){for(;h!==null;){var m=Sa(h);if(m!==null&&zl(m),m=Us(r,s,a,d),m===null&&vd(r,s,d,$i,a),m===h)break;h=m}h!==null&&d.stopPropagation()}else vd(r,s,d,null,a)}}var $i=null;function Us(r,s,a,d){if($i=null,r=Rs(d),r=Hi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Vi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return $i=r,null}function da(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ml()){case Fi:return 1;case Kr:return 4;case fn:case aa:return 16;case Vl:return 536870912;default:return 16}default:return 16}}var on=null,zs=null,Yt=null;function ha(){if(Yt)return Yt;var r,s=zs,a=s.length,d,h="value"in on?on.value:on.textContent,m=h.length;for(r=0;r<a&&s[r]===h[r];r++);var w=a-r;for(d=1;d<=w&&s[a-d]===h[m-d];d++);return Yt=h.slice(r,1<d?1-d:void 0)}function Bs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function fa(){return!1}function Ct(r){function s(a,d,h,m,w){this._reactName=a,this._targetInst=h,this.type=d,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Qn:fa,this.isPropagationStopped=fa,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),s}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=Ct(Dn),Yn=ne({},Dn,{view:0,detail:0}),ld=Ct(Yn),Ws,Ir,ti,Wi=ne({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ti&&(ti&&r.type==="mousemove"?(Ws=r.screenX-ti.screenX,Ir=r.screenY-ti.screenY):Ir=Ws=0,ti=r),Ws)},movementY:function(r){return"movementY"in r?r.movementY:Ir}}),qs=Ct(Wi),pa=ne({},Wi,{dataTransfer:0}),Gl=Ct(pa),Hs=ne({},Yn,{relatedTarget:0}),Ks=Ct(Hs),Ql=ne({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sr=Ct(Ql),Yl=ne({},Dn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xl=Ct(Yl),Jl=ne({},Dn,{data:0}),ma=Ct(Jl),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Zl[r])?!!s[r]:!1}function Xn(){return eu}var u=ne({},Yn,{key:function(r){if(r.key){var s=Gs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Bs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Bs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Bs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Ct(u),y=ne({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(y),V=ne({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),B=Ct(V),J=ne({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=Ct(J),mt=ne({},Wi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Ct(mt),Et=[9,13,27,32],ct=f&&"CompositionEvent"in window,mn=null;f&&"documentMode"in document&&(mn=document.documentMode);var an=f&&"TextEvent"in window&&!mn,qi=f&&(!ct||mn&&8<mn&&11>=mn),Qs=" ",qp=!1;function Hp(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ys=!1;function Y0(r,s){switch(r){case"compositionend":return Kp(s);case"keypress":return s.which!==32?null:(qp=!0,Qs);case"textInput":return r=s.data,r===Qs&&qp?null:r;default:return null}}function X0(r,s){if(Ys)return r==="compositionend"||!ct&&Hp(r,s)?(r=ha(),Yt=zs=on=null,Ys=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return qi&&s.locale!=="ko"?null:s.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!J0[r.type]:s==="textarea"}function Qp(r,s,a,d){Hn(d),s=su(s,"onChange"),0<s.length&&(a=new $s("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var ga=null,ya=null;function Z0(r){fm(r,0)}function tu(r){var s=to(r);if(Ss(s))return r}function eE(r,s){if(r==="change")return s}var Yp=!1;if(f){var ud;if(f){var cd="oninput"in document;if(!cd){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),cd=typeof Xp.oninput=="function"}ud=cd}else ud=!1;Yp=ud&&(!document.documentMode||9<document.documentMode)}function Jp(){ga&&(ga.detachEvent("onpropertychange",Zp),ya=ga=null)}function Zp(r){if(r.propertyName==="value"&&tu(ya)){var s=[];Qp(s,ya,r,Rs(r)),ra(Z0,s)}}function tE(r,s,a){r==="focusin"?(Jp(),ga=s,ya=a,ga.attachEvent("onpropertychange",Zp)):r==="focusout"&&Jp()}function nE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return tu(ya)}function rE(r,s){if(r==="click")return tu(s)}function iE(r,s){if(r==="input"||r==="change")return tu(s)}function sE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var On=typeof Object.is=="function"?Object.is:sE;function va(r,s){if(On(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var h=a[d];if(!g.call(s,h)||!On(r[h],s[h]))return!1}return!0}function em(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tm(r,s){var a=em(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=em(a)}}function nm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?nm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var r=window,s=qr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=qr(r.document)}return s}function dd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function oE(r){var s=rm(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&nm(a.ownerDocument.documentElement,a)){if(d!==null&&dd(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,m=Math.min(d.start,h);d=d.end===void 0?m:Math.min(d.end,h),!r.extend&&m>d&&(h=d,d=m,m=h),h=tm(a,m);var w=tm(a,d);h&&w&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),r.removeAllRanges(),m>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var aE=f&&"documentMode"in document&&11>=document.documentMode,Xs=null,hd=null,_a=null,fd=!1;function im(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fd||Xs==null||Xs!==qr(d)||(d=Xs,"selectionStart"in d&&dd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),_a&&va(_a,d)||(_a=d,d=su(hd,"onSelect"),0<d.length&&(s=new $s("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=Xs)))}function nu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Js={animationend:nu("Animation","AnimationEnd"),animationiteration:nu("Animation","AnimationIteration"),animationstart:nu("Animation","AnimationStart"),transitionend:nu("Transition","TransitionEnd")},pd={},sm={};f&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ru(r){if(pd[r])return pd[r];if(!Js[r])return r;var s=Js[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in sm)return pd[r]=s[a];return r}var om=ru("animationend"),am=ru("animationiteration"),lm=ru("animationstart"),um=ru("transitionend"),cm=new Map,dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(r,s){cm.set(r,s),l(s,[r])}for(var md=0;md<dm.length;md++){var gd=dm[md],lE=gd.toLowerCase(),uE=gd[0].toUpperCase()+gd.slice(1);ni(lE,"on"+uE)}ni(om,"onAnimationEnd"),ni(am,"onAnimationIteration"),ni(lm,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(um,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cE=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function hm(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,Dl(d,s,void 0,r),r.currentTarget=null}function fm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],h=d.event;d=d.listeners;e:{var m=void 0;if(s)for(var w=d.length-1;0<=w;w--){var S=d[w],P=S.instance,z=S.currentTarget;if(S=S.listener,P!==m&&h.isPropagationStopped())break e;hm(h,S,z),m=P}else for(w=0;w<d.length;w++){if(S=d[w],P=S.instance,z=S.currentTarget,S=S.listener,P!==m&&h.isPropagationStopped())break e;hm(h,S,z),m=P}}}if(kn)throw r=ia,kn=!1,ia=null,r}function Ye(r,s){var a=s[Sd];a===void 0&&(a=s[Sd]=new Set);var d=r+"__bubble";a.has(d)||(pm(s,r,2,!1),a.add(d))}function yd(r,s,a){var d=0;s&&(d|=4),pm(a,r,d,s)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Ea(r){if(!r[iu]){r[iu]=!0,i.forEach(function(a){a!=="selectionchange"&&(cE.has(a)||yd(a,!1,r),yd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[iu]||(s[iu]=!0,yd("selectionchange",!1,s))}}function pm(r,s,a,d){switch(da(s)){case 1:var h=Je;break;case 4:h=ad;break;default:h=ca}a=h.bind(null,s,a,r),h=void 0,!Ns||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),d?h!==void 0?r.addEventListener(s,a,{capture:!0,passive:h}):r.addEventListener(s,a,!0):h!==void 0?r.addEventListener(s,a,{passive:h}):r.addEventListener(s,a,!1)}function vd(r,s,a,d,h){var m=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var S=d.stateNode.containerInfo;if(S===h||S.nodeType===8&&S.parentNode===h)break;if(w===4)for(w=d.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===h||P.nodeType===8&&P.parentNode===h))return;w=w.return}for(;S!==null;){if(w=Hi(S),w===null)return;if(P=w.tag,P===5||P===6){d=m=w;continue e}S=S.parentNode}}d=d.return}ra(function(){var z=m,K=Rs(a),Q=[];e:{var H=cm.get(r);if(H!==void 0){var te=$s,ie=r;switch(r){case"keypress":if(Bs(a)===0)break e;case"keydown":case"keyup":te=p;break;case"focusin":ie="focus",te=Ks;break;case"focusout":ie="blur",te=Ks;break;case"beforeblur":case"afterblur":te=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B;break;case om:case am:case lm:te=Sr;break;case um:te=We;break;case"scroll":te=ld;break;case"wheel":te=Me;break;case"copy":case"cut":case"paste":te=Xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var oe=(s&4)!==0,lt=!oe&&r==="scroll",F=oe?H!==null?H+"Capture":null:H;oe=[];for(var D=z,j;D!==null;){j=D;var X=j.stateNode;if(j.tag===5&&X!==null&&(j=X,F!==null&&(X=at(D,F),X!=null&&oe.push(Ta(D,X,j)))),lt)break;D=D.return}0<oe.length&&(H=new te(H,ie,null,a,K),Q.push({event:H,listeners:oe}))}}if((s&7)===0){e:{if(H=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",H&&a!==Di&&(ie=a.relatedTarget||a.fromElement)&&(Hi(ie)||ie[Ar]))break e;if((te||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,te?(ie=a.relatedTarget||a.toElement,te=z,ie=ie?Hi(ie):null,ie!==null&&(lt=Cn(ie),ie!==lt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(te=null,ie=z),te!==ie)){if(oe=qs,X="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(oe=E,X="onPointerLeave",F="onPointerEnter",D="pointer"),lt=te==null?H:to(te),j=ie==null?H:to(ie),H=new oe(X,D+"leave",te,a,K),H.target=lt,H.relatedTarget=j,X=null,Hi(K)===z&&(oe=new oe(F,D+"enter",ie,a,K),oe.target=j,oe.relatedTarget=lt,X=oe),lt=X,te&&ie)t:{for(oe=te,F=ie,D=0,j=oe;j;j=Zs(j))D++;for(j=0,X=F;X;X=Zs(X))j++;for(;0<D-j;)oe=Zs(oe),D--;for(;0<j-D;)F=Zs(F),j--;for(;D--;){if(oe===F||F!==null&&oe===F.alternate)break t;oe=Zs(oe),F=Zs(F)}oe=null}else oe=null;te!==null&&mm(Q,H,te,oe,!1),ie!==null&&lt!==null&&mm(Q,lt,ie,oe,!0)}}e:{if(H=z?to(z):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var le=eE;else if(Gp(H))if(Yp)le=iE;else{le=nE;var fe=tE}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(le=rE);if(le&&(le=le(r,z))){Qp(Q,le,a,K);break e}fe&&fe(r,H,z),r==="focusout"&&(fe=H._wrapperState)&&fe.controlled&&H.type==="number"&&ks(H,"number",H.value)}switch(fe=z?to(z):window,r){case"focusin":(Gp(fe)||fe.contentEditable==="true")&&(Xs=fe,hd=z,_a=null);break;case"focusout":_a=hd=Xs=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,im(Q,a,K);break;case"selectionchange":if(aE)break;case"keydown":case"keyup":im(Q,a,K)}var pe;if(ct)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ys?Hp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(qi&&a.locale!=="ko"&&(Ys||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ys&&(pe=ha()):(on=K,zs="value"in on?on.value:on.textContent,Ys=!0)),fe=su(z,Ee),0<fe.length&&(Ee=new ma(Ee,r,null,a,K),Q.push({event:Ee,listeners:fe}),pe?Ee.data=pe:(pe=Kp(a),pe!==null&&(Ee.data=pe)))),(pe=an?Y0(r,a):X0(r,a))&&(z=su(z,"onBeforeInput"),0<z.length&&(K=new ma("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:z}),K.data=pe))}fm(Q,s)})}function Ta(r,s,a){return{instance:r,listener:s,currentTarget:a}}function su(r,s){for(var a=s+"Capture",d=[];r!==null;){var h=r,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=at(r,a),m!=null&&d.unshift(Ta(r,m,h)),m=at(r,s),m!=null&&d.push(Ta(r,m,h))),r=r.return}return d}function Zs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function mm(r,s,a,d,h){for(var m=s._reactName,w=[];a!==null&&a!==d;){var S=a,P=S.alternate,z=S.stateNode;if(P!==null&&P===d)break;S.tag===5&&z!==null&&(S=z,h?(P=at(a,m),P!=null&&w.unshift(Ta(a,P,S))):h||(P=at(a,m),P!=null&&w.push(Ta(a,P,S)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var dE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function gm(r){return(typeof r=="string"?r:""+r).replace(dE,`
`).replace(hE,"")}function ou(r,s,a){if(s=gm(s),gm(r)!==s&&a)throw Error(t(425))}function au(){}var _d=null,wd=null;function Ed(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,fE=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,pE=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(r){return ym.resolve(null).then(r).catch(mE)}:Td;function mE(r){setTimeout(function(){throw r})}function Id(r,s){var a=s,d=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(d===0){r.removeChild(h),Nn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=h}while(a);Nn(s)}function ri(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function vm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+eo,Ia="__reactProps$"+eo,Ar="__reactContainer$"+eo,Sd="__reactEvents$"+eo,gE="__reactListeners$"+eo,yE="__reactHandles$"+eo;function Hi(r){var s=r[Jn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=vm(r);r!==null;){if(a=r[Jn])return a;r=vm(r)}return s}r=a,a=r.parentNode}return null}function Sa(r){return r=r[Jn]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function to(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function lu(r){return r[Ia]||null}var Ad=[],no=-1;function ii(r){return{current:r}}function Xe(r){0>no||(r.current=Ad[no],Ad[no]=null,no--)}function Qe(r,s){no++,Ad[no]=r.current,r.current=s}var si={},Lt=ii(si),Xt=ii(!1),Ki=si;function ro(r,s){var a=r.type.contextTypes;if(!a)return si;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=s[m];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=h),h}function Jt(r){return r=r.childContextTypes,r!=null}function uu(){Xe(Xt),Xe(Lt)}function _m(r,s,a){if(Lt.current!==si)throw Error(t(168));Qe(Lt,s),Qe(Xt,a)}function wm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var h in d)if(!(h in s))throw Error(t(108,ze(r)||"Unknown",h));return ne({},a,d)}function cu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||si,Ki=Lt.current,Qe(Lt,r),Qe(Xt,Xt.current),!0}function Em(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=wm(r,s,Ki),d.__reactInternalMemoizedMergedChildContext=r,Xe(Xt),Xe(Lt),Qe(Lt,r)):Xe(Xt),Qe(Xt,a)}var kr=null,du=!1,kd=!1;function Tm(r){kr===null?kr=[r]:kr.push(r)}function vE(r){du=!0,Tm(r)}function oi(){if(!kd&&kr!==null){kd=!0;var r=0,s=Ne;try{var a=kr;for(Ne=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}kr=null,du=!1}catch(h){throw kr!==null&&(kr=kr.slice(r+1)),Ms(Fi,oi),h}finally{Ne=s,kd=!1}}return null}var io=[],so=0,hu=null,fu=0,gn=[],yn=0,Gi=null,Cr=1,Pr="";function Qi(r,s){io[so++]=fu,io[so++]=hu,hu=r,fu=s}function Im(r,s,a){gn[yn++]=Cr,gn[yn++]=Pr,gn[yn++]=Gi,Gi=r;var d=Cr;r=Pr;var h=32-Wt(d)-1;d&=~(1<<h),a+=1;var m=32-Wt(s)+h;if(30<m){var w=h-h%5;m=(d&(1<<w)-1).toString(32),d>>=w,h-=w,Cr=1<<32-Wt(s)+h|a<<h|d,Pr=m+r}else Cr=1<<m|a<<h|d,Pr=r}function Cd(r){r.return!==null&&(Qi(r,1),Im(r,1,0))}function Pd(r){for(;r===hu;)hu=io[--so],io[so]=null,fu=io[--so],io[so]=null;for(;r===Gi;)Gi=gn[--yn],gn[yn]=null,Pr=gn[--yn],gn[yn]=null,Cr=gn[--yn],gn[yn]=null}var ln=null,un=null,Ze=!1,Ln=null;function Sm(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Am(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ri(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Gi!==null?{id:Cr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Rd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function xd(r){if(Ze){var s=un;if(s){var a=s;if(!Am(r,s)){if(Rd(r))throw Error(t(418));s=ri(a.nextSibling);var d=ln;s&&Am(r,s)?Sm(d,a):(r.flags=r.flags&-4097|2,Ze=!1,ln=r)}}else{if(Rd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,ln=r}}}function km(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function pu(r){if(r!==ln)return!1;if(!Ze)return km(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ed(r.type,r.memoizedProps)),s&&(s=un)){if(Rd(r))throw Cm(),Error(t(418));for(;s;)Sm(r,s),s=ri(s.nextSibling)}if(km(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ri(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ri(r.stateNode.nextSibling):null;return!0}function Cm(){for(var r=un;r;)r=ri(r.nextSibling)}function oo(){un=ln=null,Ze=!1}function bd(r){Ln===null?Ln=[r]:Ln.push(r)}var _E=me.ReactCurrentBatchConfig;function Aa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var h=d,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(w){var S=h.refs;w===null?delete S[m]:S[m]=w},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function mu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Pm(r){var s=r._init;return s(r._payload)}function Rm(r){function s(F,D){if(r){var j=F.deletions;j===null?(F.deletions=[D],F.flags|=16):j.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function d(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function h(F,D){return F=pi(F,D),F.index=0,F.sibling=null,F}function m(F,D,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<D?(F.flags|=2,D):j):(F.flags|=2,D)):(F.flags|=1048576,D)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,D,j,X){return D===null||D.tag!==6?(D=Th(j,F.mode,X),D.return=F,D):(D=h(D,j),D.return=F,D)}function P(F,D,j,X){var le=j.type;return le===x?K(F,D,j.props.children,X,j.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ot&&Pm(le)===D.type)?(X=h(D,j.props),X.ref=Aa(F,D,j),X.return=F,X):(X=ju(j.type,j.key,j.props,null,F.mode,X),X.ref=Aa(F,D,j),X.return=F,X)}function z(F,D,j,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=Ih(j,F.mode,X),D.return=F,D):(D=h(D,j.children||[]),D.return=F,D)}function K(F,D,j,X,le){return D===null||D.tag!==7?(D=rs(j,F.mode,X,le),D.return=F,D):(D=h(D,j),D.return=F,D)}function Q(F,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Th(""+D,F.mode,j),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Oe:return j=ju(D.type,D.key,D.props,null,F.mode,j),j.ref=Aa(F,null,D),j.return=F,j;case ge:return D=Ih(D,F.mode,j),D.return=F,D;case ot:var X=D._init;return Q(F,X(D._payload),j)}if(gr(D)||he(D))return D=rs(D,F.mode,j,null),D.return=F,D;mu(F,D)}return null}function H(F,D,j,X){var le=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return le!==null?null:S(F,D,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Oe:return j.key===le?P(F,D,j,X):null;case ge:return j.key===le?z(F,D,j,X):null;case ot:return le=j._init,H(F,D,le(j._payload),X)}if(gr(j)||he(j))return le!==null?null:K(F,D,j,X,null);mu(F,j)}return null}function te(F,D,j,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return F=F.get(j)||null,S(D,F,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Oe:return F=F.get(X.key===null?j:X.key)||null,P(D,F,X,le);case ge:return F=F.get(X.key===null?j:X.key)||null,z(D,F,X,le);case ot:var fe=X._init;return te(F,D,j,fe(X._payload),le)}if(gr(X)||he(X))return F=F.get(j)||null,K(D,F,X,le,null);mu(D,X)}return null}function ie(F,D,j,X){for(var le=null,fe=null,pe=D,Ee=D=0,St=null;pe!==null&&Ee<j.length;Ee++){pe.index>Ee?(St=pe,pe=null):St=pe.sibling;var je=H(F,pe,j[Ee],X);if(je===null){pe===null&&(pe=St);break}r&&pe&&je.alternate===null&&s(F,pe),D=m(je,D,Ee),fe===null?le=je:fe.sibling=je,fe=je,pe=St}if(Ee===j.length)return a(F,pe),Ze&&Qi(F,Ee),le;if(pe===null){for(;Ee<j.length;Ee++)pe=Q(F,j[Ee],X),pe!==null&&(D=m(pe,D,Ee),fe===null?le=pe:fe.sibling=pe,fe=pe);return Ze&&Qi(F,Ee),le}for(pe=d(F,pe);Ee<j.length;Ee++)St=te(pe,F,Ee,j[Ee],X),St!==null&&(r&&St.alternate!==null&&pe.delete(St.key===null?Ee:St.key),D=m(St,D,Ee),fe===null?le=St:fe.sibling=St,fe=St);return r&&pe.forEach(function(mi){return s(F,mi)}),Ze&&Qi(F,Ee),le}function oe(F,D,j,X){var le=he(j);if(typeof le!="function")throw Error(t(150));if(j=le.call(j),j==null)throw Error(t(151));for(var fe=le=null,pe=D,Ee=D=0,St=null,je=j.next();pe!==null&&!je.done;Ee++,je=j.next()){pe.index>Ee?(St=pe,pe=null):St=pe.sibling;var mi=H(F,pe,je.value,X);if(mi===null){pe===null&&(pe=St);break}r&&pe&&mi.alternate===null&&s(F,pe),D=m(mi,D,Ee),fe===null?le=mi:fe.sibling=mi,fe=mi,pe=St}if(je.done)return a(F,pe),Ze&&Qi(F,Ee),le;if(pe===null){for(;!je.done;Ee++,je=j.next())je=Q(F,je.value,X),je!==null&&(D=m(je,D,Ee),fe===null?le=je:fe.sibling=je,fe=je);return Ze&&Qi(F,Ee),le}for(pe=d(F,pe);!je.done;Ee++,je=j.next())je=te(pe,F,Ee,je.value,X),je!==null&&(r&&je.alternate!==null&&pe.delete(je.key===null?Ee:je.key),D=m(je,D,Ee),fe===null?le=je:fe.sibling=je,fe=je);return r&&pe.forEach(function(JE){return s(F,JE)}),Ze&&Qi(F,Ee),le}function lt(F,D,j,X){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Oe:e:{for(var le=j.key,fe=D;fe!==null;){if(fe.key===le){if(le=j.type,le===x){if(fe.tag===7){a(F,fe.sibling),D=h(fe,j.props.children),D.return=F,F=D;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ot&&Pm(le)===fe.type){a(F,fe.sibling),D=h(fe,j.props),D.ref=Aa(F,fe,j),D.return=F,F=D;break e}a(F,fe);break}else s(F,fe);fe=fe.sibling}j.type===x?(D=rs(j.props.children,F.mode,X,j.key),D.return=F,F=D):(X=ju(j.type,j.key,j.props,null,F.mode,X),X.ref=Aa(F,D,j),X.return=F,F=X)}return w(F);case ge:e:{for(fe=j.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(F,D.sibling),D=h(D,j.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else s(F,D);D=D.sibling}D=Ih(j,F.mode,X),D.return=F,F=D}return w(F);case ot:return fe=j._init,lt(F,D,fe(j._payload),X)}if(gr(j))return ie(F,D,j,X);if(he(j))return oe(F,D,j,X);mu(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(F,D.sibling),D=h(D,j),D.return=F,F=D):(a(F,D),D=Th(j,F.mode,X),D.return=F,F=D),w(F)):a(F,D)}return lt}var ao=Rm(!0),xm=Rm(!1),gu=ii(null),yu=null,lo=null,Nd=null;function Dd(){Nd=lo=yu=null}function Od(r){var s=gu.current;Xe(gu),r._currentValue=s}function Ld(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function uo(r,s){yu=r,Nd=lo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Zt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Nd!==r)if(r={context:r,memoizedValue:s,next:null},lo===null){if(yu===null)throw Error(t(308));lo=r,yu.dependencies={lanes:0,firstContext:r}}else lo=lo.next=r;return s}var Yi=null;function Md(r){Yi===null?Yi=[r]:Yi.push(r)}function bm(r,s,a,d){var h=s.interleaved;return h===null?(a.next=a,Md(s)):(a.next=h.next,h.next=a),s.interleaved=a,Rr(r,d)}function Rr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ai=!1;function Vd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function li(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Fe&2)!==0){var h=d.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s,Rr(r,a)}return h=d.interleaved,h===null?(s.next=s,Md(d)):(s.next=h.next,h.next=s),d.interleaved=s,Rr(r,a)}function vu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Xr(r,a)}}function Dm(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?h=m=s:m=m.next=s}else h=m=s;a={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function _u(r,s,a,d){var h=r.updateQueue;ai=!1;var m=h.firstBaseUpdate,w=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var P=S,z=P.next;P.next=null,w===null?m=z:w.next=z,w=P;var K=r.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==w&&(S===null?K.firstBaseUpdate=z:S.next=z,K.lastBaseUpdate=P))}if(m!==null){var Q=h.baseState;w=0,K=z=P=null,S=m;do{var H=S.lane,te=S.eventTime;if((d&H)===H){K!==null&&(K=K.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=r,oe=S;switch(H=s,te=a,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){Q=ie.call(te,Q,H);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,H=typeof ie=="function"?ie.call(te,Q,H):ie,H==null)break e;Q=ne({},Q,H);break e;case 2:ai=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,H=h.effects,H===null?h.effects=[S]:H.push(S))}else te={eventTime:te,lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(z=K=te,P=Q):K=K.next=te,w|=H;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;H=S,S=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);if(K===null&&(P=Q),h.baseState=P,h.firstBaseUpdate=z,h.lastBaseUpdate=K,s=h.shared.interleaved,s!==null){h=s;do w|=h.lane,h=h.next;while(h!==s)}else m===null&&(h.shared.lanes=0);Zi|=w,r.lanes=w,r.memoizedState=Q}}function Om(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],h=d.callback;if(h!==null){if(d.callback=null,d=a,typeof h!="function")throw Error(t(191,h));h.call(d)}}}var ka={},Zn=ii(ka),Ca=ii(ka),Pa=ii(ka);function Xi(r){if(r===ka)throw Error(t(174));return r}function Fd(r,s){switch(Qe(Pa,s),Qe(Ca,r),Qe(Zn,ka),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Xe(Zn),Qe(Zn,s)}function co(){Xe(Zn),Xe(Ca),Xe(Pa)}function Lm(r){Xi(Pa.current);var s=Xi(Zn.current),a=pt(s,r.type);s!==a&&(Qe(Ca,r),Qe(Zn,a))}function jd(r){Ca.current===r&&(Xe(Zn),Xe(Ca))}var et=ii(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ud=[];function zd(){for(var r=0;r<Ud.length;r++)Ud[r]._workInProgressVersionPrimary=null;Ud.length=0}var Eu=me.ReactCurrentDispatcher,Bd=me.ReactCurrentBatchConfig,Ji=0,tt=null,gt=null,Tt=null,Tu=!1,Ra=!1,xa=0,wE=0;function Mt(){throw Error(t(321))}function $d(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!On(r[a],s[a]))return!1;return!0}function Wd(r,s,a,d,h,m){if(Ji=m,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Eu.current=r===null||r.memoizedState===null?SE:AE,r=a(d,h),Ra){m=0;do{if(Ra=!1,xa=0,25<=m)throw Error(t(301));m+=1,Tt=gt=null,s.updateQueue=null,Eu.current=kE,r=a(d,h)}while(Ra)}if(Eu.current=Au,s=gt!==null&&gt.next!==null,Ji=0,Tt=gt=tt=null,Tu=!1,s)throw Error(t(300));return r}function qd(){var r=xa!==0;return xa=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?tt.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function _n(){if(gt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=Tt===null?tt.memoizedState:Tt.next;if(s!==null)Tt=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?tt.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function ba(r,s){return typeof s=="function"?s(r):s}function Hd(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=gt,h=d.baseQueue,m=a.pending;if(m!==null){if(h!==null){var w=h.next;h.next=m.next,m.next=w}d.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,d=d.baseState;var S=w=null,P=null,z=m;do{var K=z.lane;if((Ji&K)===K)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:r(d,z.action);else{var Q={lane:K,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(S=P=Q,w=d):P=P.next=Q,tt.lanes|=K,Zi|=K}z=z.next}while(z!==null&&z!==m);P===null?w=d:P.next=S,On(d,s.memoizedState)||(Zt=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=P,a.lastRenderedState=d}if(r=a.interleaved,r!==null){h=r;do m=h.lane,tt.lanes|=m,Zi|=m,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Kd(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,h=a.pending,m=s.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do m=r(m,w.action),w=w.next;while(w!==h);On(m,s.memoizedState)||(Zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,d]}function Mm(){}function Vm(r,s){var a=tt,d=_n(),h=s(),m=!On(d.memoizedState,h);if(m&&(d.memoizedState=h,Zt=!0),d=d.queue,Gd(Um.bind(null,a,d,r),[r]),d.getSnapshot!==s||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Na(9,jm.bind(null,a,d,h,s),void 0,null),It===null)throw Error(t(349));(Ji&30)!==0||Fm(a,s,h)}return h}function Fm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function jm(r,s,a,d){s.value=a,s.getSnapshot=d,zm(s)&&Bm(r)}function Um(r,s,a){return a(function(){zm(s)&&Bm(r)})}function zm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!On(r,a)}catch{return!0}}function Bm(r){var s=Rr(r,1);s!==null&&jn(s,r,1,-1)}function $m(r){var s=er();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:r},s.queue=r,r=r.dispatch=IE.bind(null,tt,r),[s.memoizedState,r]}function Na(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function Wm(){return _n().memoizedState}function Iu(r,s,a,d){var h=er();tt.flags|=r,h.memoizedState=Na(1|s,a,void 0,d===void 0?null:d)}function Su(r,s,a,d){var h=_n();d=d===void 0?null:d;var m=void 0;if(gt!==null){var w=gt.memoizedState;if(m=w.destroy,d!==null&&$d(d,w.deps)){h.memoizedState=Na(s,a,m,d);return}}tt.flags|=r,h.memoizedState=Na(1|s,a,m,d)}function qm(r,s){return Iu(8390656,8,r,s)}function Gd(r,s){return Su(2048,8,r,s)}function Hm(r,s){return Su(4,2,r,s)}function Km(r,s){return Su(4,4,r,s)}function Gm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Qm(r,s,a){return a=a!=null?a.concat([r]):null,Su(4,4,Gm.bind(null,s,r),a)}function Qd(){}function Ym(r,s){var a=_n();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&$d(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function Xm(r,s){var a=_n();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&$d(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function Jm(r,s,a){return(Ji&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(On(a,s)||(a=zi(),tt.lanes|=a,Zi|=a,r.baseState=!0),s)}function EE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var d=Bd.transition;Bd.transition={};try{r(!1),s()}finally{Ne=a,Bd.transition=d}}function Zm(){return _n().memoizedState}function TE(r,s,a){var d=hi(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},eg(r))tg(s,a);else if(a=bm(r,s,a,d),a!==null){var h=Kt();jn(a,r,d,h),ng(a,s,d)}}function IE(r,s,a){var d=hi(r),h={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(eg(r))tg(s,h);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,S=m(w,a);if(h.hasEagerState=!0,h.eagerState=S,On(S,w)){var P=s.interleaved;P===null?(h.next=h,Md(s)):(h.next=P.next,P.next=h),s.interleaved=h;return}}catch{}finally{}a=bm(r,s,h,d),a!==null&&(h=Kt(),jn(a,r,d,h),ng(a,s,d))}}function eg(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function tg(r,s){Ra=Tu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function ng(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Xr(r,a)}}var Au={readContext:vn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},SE={readContext:vn,useCallback:function(r,s){return er().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:qm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Iu(4194308,4,Gm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Iu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Iu(4,2,r,s)},useMemo:function(r,s){var a=er();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=er();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=TE.bind(null,tt,r),[d.memoizedState,r]},useRef:function(r){var s=er();return r={current:r},s.memoizedState=r},useState:$m,useDebugValue:Qd,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=$m(!1),s=r[0];return r=EE.bind(null,r[1]),er().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=tt,h=er();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));(Ji&30)!==0||Fm(d,s,a)}h.memoizedState=a;var m={value:a,getSnapshot:s};return h.queue=m,qm(Um.bind(null,d,m,r),[r]),d.flags|=2048,Na(9,jm.bind(null,d,m,a,s),void 0,null),a},useId:function(){var r=er(),s=It.identifierPrefix;if(Ze){var a=Pr,d=Cr;a=(d&~(1<<32-Wt(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=xa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=wE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},AE={readContext:vn,useCallback:Ym,useContext:vn,useEffect:Gd,useImperativeHandle:Qm,useInsertionEffect:Hm,useLayoutEffect:Km,useMemo:Xm,useReducer:Hd,useRef:Wm,useState:function(){return Hd(ba)},useDebugValue:Qd,useDeferredValue:function(r){var s=_n();return Jm(s,gt.memoizedState,r)},useTransition:function(){var r=Hd(ba)[0],s=_n().memoizedState;return[r,s]},useMutableSource:Mm,useSyncExternalStore:Vm,useId:Zm,unstable_isNewReconciler:!1},kE={readContext:vn,useCallback:Ym,useContext:vn,useEffect:Gd,useImperativeHandle:Qm,useInsertionEffect:Hm,useLayoutEffect:Km,useMemo:Xm,useReducer:Kd,useRef:Wm,useState:function(){return Kd(ba)},useDebugValue:Qd,useDeferredValue:function(r){var s=_n();return gt===null?s.memoizedState=r:Jm(s,gt.memoizedState,r)},useTransition:function(){var r=Kd(ba)[0],s=_n().memoizedState;return[r,s]},useMutableSource:Mm,useSyncExternalStore:Vm,useId:Zm,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=ne({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Yd(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ne({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ku={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Kt(),h=hi(r),m=xr(d,h);m.payload=s,a!=null&&(m.callback=a),s=li(r,m,h),s!==null&&(jn(s,r,h,d),vu(s,r,h))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Kt(),h=hi(r),m=xr(d,h);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=li(r,m,h),s!==null&&(jn(s,r,h,d),vu(s,r,h))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),d=hi(r),h=xr(a,d);h.tag=2,s!=null&&(h.callback=s),s=li(r,h,d),s!==null&&(jn(s,r,d,a),vu(s,r,d))}};function rg(r,s,a,d,h,m,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,m,w):s.prototype&&s.prototype.isPureReactComponent?!va(a,d)||!va(h,m):!0}function ig(r,s,a){var d=!1,h=si,m=s.contextType;return typeof m=="object"&&m!==null?m=vn(m):(h=Jt(s)?Ki:Lt.current,d=s.contextTypes,m=(d=d!=null)?ro(r,h):si),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ku,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=m),s}function sg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&ku.enqueueReplaceState(s,s.state,null)}function Xd(r,s,a,d){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},Vd(r);var m=s.contextType;typeof m=="object"&&m!==null?h.context=vn(m):(m=Jt(s)?Ki:Lt.current,h.context=ro(r,m)),h.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Yd(r,s,m,a),h.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&ku.enqueueReplaceState(h,h.state,null),_u(r,a,h,d),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function ho(r,s){try{var a="",d=s;do a+=Ce(d),d=d.return;while(d);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:h,digest:null}}function Jd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Zd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function og(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){Du||(Du=!0,ph=d),Zd(r,s)},a}function ag(r,s,a){a=xr(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var h=s.value;a.payload=function(){return d(h)},a.callback=function(){Zd(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Zd(r,s),typeof d!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function lg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new CE;var h=new Set;d.set(s,h)}else h=d.get(s),h===void 0&&(h=new Set,d.set(s,h));h.has(a)||(h.add(a),r=zE.bind(null,r,s,a),s.then(r,r))}function ug(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function cg(r,s,a,d,h){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,li(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var PE=me.ReactCurrentOwner,Zt=!1;function Ht(r,s,a,d){s.child=r===null?xm(s,null,a,d):ao(s,r.child,a,d)}function dg(r,s,a,d,h){a=a.render;var m=s.ref;return uo(s,h),d=Wd(r,s,a,d,m,h),a=qd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,br(r,s,h)):(Ze&&a&&Cd(s),s.flags|=1,Ht(r,s,d,h),s.child)}function hg(r,s,a,d,h){if(r===null){var m=a.type;return typeof m=="function"&&!Eh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,fg(r,s,m,d,h)):(r=ju(a.type,null,d,s,s.mode,h),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&h)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(w,d)&&r.ref===s.ref)return br(r,s,h)}return s.flags|=1,r=pi(m,d),r.ref=s.ref,r.return=s,s.child=r}function fg(r,s,a,d,h){if(r!==null){var m=r.memoizedProps;if(va(m,d)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=d=m,(r.lanes&h)!==0)(r.flags&131072)!==0&&(Zt=!0);else return s.lanes=r.lanes,br(r,s,h)}return eh(r,s,a,d,h)}function pg(r,s,a){var d=s.pendingProps,h=d.children,m=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(po,cn),cn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Qe(po,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=m!==null?m.baseLanes:a,Qe(po,cn),cn|=d}else m!==null?(d=m.baseLanes|a,s.memoizedState=null):d=a,Qe(po,cn),cn|=d;return Ht(r,s,h,a),s.child}function mg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function eh(r,s,a,d,h){var m=Jt(a)?Ki:Lt.current;return m=ro(s,m),uo(s,h),a=Wd(r,s,a,d,m,h),d=qd(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~h,br(r,s,h)):(Ze&&d&&Cd(s),s.flags|=1,Ht(r,s,a,h),s.child)}function gg(r,s,a,d,h){if(Jt(a)){var m=!0;cu(s)}else m=!1;if(uo(s,h),s.stateNode===null)Pu(r,s),ig(s,a,d),Xd(s,a,d,h),d=!0;else if(r===null){var w=s.stateNode,S=s.memoizedProps;w.props=S;var P=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=vn(z):(z=Jt(a)?Ki:Lt.current,z=ro(s,z));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof w.getSnapshotBeforeUpdate=="function";Q||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==d||P!==z)&&sg(s,w,d,z),ai=!1;var H=s.memoizedState;w.state=H,_u(s,d,w,h),P=s.memoizedState,S!==d||H!==P||Xt.current||ai?(typeof K=="function"&&(Yd(s,a,K,d),P=s.memoizedState),(S=ai||rg(s,a,S,d,H,P,z))?(Q||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=P),w.props=d,w.state=P,w.context=z,d=S):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,Nm(r,s),S=s.memoizedProps,z=s.type===s.elementType?S:Mn(s.type,S),w.props=z,Q=s.pendingProps,H=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=vn(P):(P=Jt(a)?Ki:Lt.current,P=ro(s,P));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(S!==Q||H!==P)&&sg(s,w,d,P),ai=!1,H=s.memoizedState,w.state=H,_u(s,d,w,h);var ie=s.memoizedState;S!==Q||H!==ie||Xt.current||ai?(typeof te=="function"&&(Yd(s,a,te,d),ie=s.memoizedState),(z=ai||rg(s,a,z,d,H,ie,P)||!1)?(K||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ie,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ie,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||S===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ie),w.props=d,w.state=ie,w.context=P,d=z):(typeof w.componentDidUpdate!="function"||S===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),d=!1)}return th(r,s,a,d,m,h)}function th(r,s,a,d,h,m){mg(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return h&&Em(s,a,!1),br(r,s,m);d=s.stateNode,PE.current=s;var S=w&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=ao(s,r.child,null,m),s.child=ao(s,null,S,m)):Ht(r,s,S,m),s.memoizedState=d.state,h&&Em(s,a,!0),s.child}function yg(r){var s=r.stateNode;s.pendingContext?_m(r,s.pendingContext,s.pendingContext!==s.context):s.context&&_m(r,s.context,!1),Fd(r,s.containerInfo)}function vg(r,s,a,d,h){return oo(),bd(h),s.flags|=256,Ht(r,s,a,d),s.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function rh(r){return{baseLanes:r,cachePool:null,transitions:null}}function _g(r,s,a){var d=s.pendingProps,h=et.current,m=!1,w=(s.flags&128)!==0,S;if((S=w)||(S=r!==null&&r.memoizedState===null?!1:(h&2)!==0),S?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),Qe(et,h&1),r===null)return xd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,r=d.fallback,m?(d=s.mode,m=s.child,w={mode:"hidden",children:w},(d&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=Uu(w,d,0,null),r=rs(r,d,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=rh(a),s.memoizedState=nh,r):ih(s,w));if(h=r.memoizedState,h!==null&&(S=h.dehydrated,S!==null))return RE(r,s,w,d,S,h,a);if(m){m=d.fallback,w=s.mode,h=r.child,S=h.sibling;var P={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==h?(d=s.child,d.childLanes=0,d.pendingProps=P,s.deletions=null):(d=pi(h,P),d.subtreeFlags=h.subtreeFlags&14680064),S!==null?m=pi(S,m):(m=rs(m,w,a,null),m.flags|=2),m.return=s,d.return=s,d.sibling=m,s.child=d,d=m,m=s.child,w=r.child.memoizedState,w=w===null?rh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=r.childLanes&~a,s.memoizedState=nh,d}return m=r.child,r=m.sibling,d=pi(m,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function ih(r,s){return s=Uu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Cu(r,s,a,d){return d!==null&&bd(d),ao(s,r.child,null,a),r=ih(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function RE(r,s,a,d,h,m,w){if(a)return s.flags&256?(s.flags&=-257,d=Jd(Error(t(422))),Cu(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=d.fallback,h=s.mode,d=Uu({mode:"visible",children:d.children},h,0,null),m=rs(m,h,w,null),m.flags|=2,d.return=s,m.return=s,d.sibling=m,s.child=d,(s.mode&1)!==0&&ao(s,r.child,null,w),s.child.memoizedState=rh(w),s.memoizedState=nh,m);if((s.mode&1)===0)return Cu(r,s,w,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var S=d.dgst;return d=S,m=Error(t(419)),d=Jd(m,d,void 0),Cu(r,s,w,d)}if(S=(w&r.childLanes)!==0,Zt||S){if(d=It,d!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(d.suspendedLanes|w))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Rr(r,h),jn(d,r,h,-1))}return wh(),d=Jd(Error(t(421))),Cu(r,s,w,d)}return h.data==="$?"?(s.flags|=128,s.child=r.child,s=BE.bind(null,r),h._reactRetry=s,null):(r=m.treeContext,un=ri(h.nextSibling),ln=s,Ze=!0,Ln=null,r!==null&&(gn[yn++]=Cr,gn[yn++]=Pr,gn[yn++]=Gi,Cr=r.id,Pr=r.overflow,Gi=s),s=ih(s,d.children),s.flags|=4096,s)}function wg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Ld(r.return,s,a)}function sh(r,s,a,d,h){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:h}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=d,m.tail=a,m.tailMode=h)}function Eg(r,s,a){var d=s.pendingProps,h=d.revealOrder,m=d.tail;if(Ht(r,s,d.children,a),d=et.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wg(r,a,s);else if(r.tag===19)wg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Qe(et,d),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)r=a.alternate,r!==null&&wu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),sh(s,!1,h,a,m);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(r=h.alternate,r!==null&&wu(r)===null){s.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}sh(s,!0,a,null,m);break;case"together":sh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Pu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function br(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Zi|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=pi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=pi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function xE(r,s,a){switch(s.tag){case 3:yg(s),oo();break;case 5:Lm(s);break;case 1:Jt(s.type)&&cu(s);break;case 4:Fd(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,h=s.memoizedProps.value;Qe(gu,d._currentValue),d._currentValue=h;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Qe(et,et.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?_g(r,s,a):(Qe(et,et.current&1),r=br(r,s,a),r!==null?r.sibling:null);Qe(et,et.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Eg(r,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Qe(et,et.current),d)break;return null;case 22:case 23:return s.lanes=0,pg(r,s,a)}return br(r,s,a)}var Tg,oh,Ig,Sg;Tg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},oh=function(){},Ig=function(r,s,a,d){var h=r.memoizedProps;if(h!==d){r=s.stateNode,Xi(Zn.current);var m=null;switch(a){case"input":h=xi(r,h),d=xi(r,d),m=[];break;case"select":h=ne({},h,{value:void 0}),d=ne({},d,{value:void 0}),m=[];break;case"textarea":h=Ko(r,h),d=Ko(r,d),m=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=au)}Zo(a,d);var w;a=null;for(z in h)if(!d.hasOwnProperty(z)&&h.hasOwnProperty(z)&&h[z]!=null)if(z==="style"){var S=h[z];for(w in S)S.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?m||(m=[]):(m=m||[]).push(z,null));for(z in d){var P=d[z];if(S=h?.[z],d.hasOwnProperty(z)&&P!==S&&(P!=null||S!=null))if(z==="style")if(S){for(w in S)!S.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&S[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(m||(m=[]),m.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&Ye("scroll",r),m||S===P||(m=[])):(m=m||[]).push(z,P))}a&&(m=m||[]).push("style",a);var z=m;(s.updateQueue=z)&&(s.flags|=4)}},Sg=function(r,s,a,d){a!==d&&(s.flags|=4)};function Da(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function bE(r,s,a){var d=s.pendingProps;switch(Pd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Jt(s.type)&&uu(),Vt(s),null;case 3:return d=s.stateNode,co(),Xe(Xt),Xe(Lt),zd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(pu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ln!==null&&(yh(Ln),Ln=null))),oh(r,s),Vt(s),null;case 5:jd(s);var h=Xi(Pa.current);if(a=s.type,r!==null&&s.stateNode!=null)Ig(r,s,a,d,h),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=Xi(Zn.current),pu(s)){d=s.stateNode,a=s.type;var m=s.memoizedProps;switch(d[Jn]=s,d[Ia]=m,r=(s.mode&1)!==0,a){case"dialog":Ye("cancel",d),Ye("close",d);break;case"iframe":case"object":case"embed":Ye("load",d);break;case"video":case"audio":for(h=0;h<wa.length;h++)Ye(wa[h],d);break;case"source":Ye("error",d);break;case"img":case"image":case"link":Ye("error",d),Ye("load",d);break;case"details":Ye("toggle",d);break;case"input":As(d,m),Ye("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!m.multiple},Ye("invalid",d);break;case"textarea":Cs(d,m),Ye("invalid",d)}Zo(a,m),h=null;for(var w in m)if(m.hasOwnProperty(w)){var S=m[w];w==="children"?typeof S=="string"?d.textContent!==S&&(m.suppressHydrationWarning!==!0&&ou(d.textContent,S,r),h=["children",S]):typeof S=="number"&&d.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&ou(d.textContent,S,r),h=["children",""+S]):o.hasOwnProperty(w)&&S!=null&&w==="onScroll"&&Ye("scroll",d)}switch(a){case"input":mr(d),Nl(d,m,!0);break;case"textarea":mr(d),Go(d);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(d.onclick=au)}d=h,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(a,{is:d.is}):(r=w.createElement(a),a==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,a),r[Jn]=s,r[Ia]=d,Tg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ea(a,d),a){case"dialog":Ye("cancel",r),Ye("close",r),h=d;break;case"iframe":case"object":case"embed":Ye("load",r),h=d;break;case"video":case"audio":for(h=0;h<wa.length;h++)Ye(wa[h],r);h=d;break;case"source":Ye("error",r),h=d;break;case"img":case"image":case"link":Ye("error",r),Ye("load",r),h=d;break;case"details":Ye("toggle",r),h=d;break;case"input":As(r,d),h=xi(r,d),Ye("invalid",r);break;case"option":h=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},h=ne({},d,{value:void 0}),Ye("invalid",r);break;case"textarea":Cs(r,d),h=Ko(r,d),Ye("invalid",r);break;default:h=d}Zo(a,h),S=h;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?Xo(r,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Qo(r,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Hr(r,P):typeof P=="number"&&Hr(r,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ye("scroll",r):P!=null&&de(r,m,P,w))}switch(a){case"input":mr(r),Nl(r,d,!1);break;case"textarea":mr(r),Go(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Be(d.value));break;case"select":r.multiple=!!d.multiple,m=d.value,m!=null?yr(r,!!d.multiple,m,!1):d.defaultValue!=null&&yr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=au)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)Sg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=Xi(Pa.current),Xi(Zn.current),pu(s)){if(d=s.stateNode,a=s.memoizedProps,d[Jn]=s,(m=d.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:ou(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ou(d.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[Jn]=s,s.stateNode=d}return Vt(s),null;case 13:if(Xe(et),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&un!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Cm(),oo(),s.flags|=98560,m=!1;else if(m=pu(s),d!==null&&d.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Jn]=s}else oo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vt(s),m=!1}else Ln!==null&&(yh(Ln),Ln=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(et.current&1)!==0?yt===0&&(yt=3):wh())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return co(),oh(r,s),r===null&&Ea(s.stateNode.containerInfo),Vt(s),null;case 10:return Od(s.type._context),Vt(s),null;case 17:return Jt(s.type)&&uu(),Vt(s),null;case 19:if(Xe(et),m=s.memoizedState,m===null)return Vt(s),null;if(d=(s.flags&128)!==0,w=m.rendering,w===null)if(d)Da(m,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=wu(r),w!==null){for(s.flags|=128,Da(m,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)m=a,r=d,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,r=w.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Qe(et,et.current&1|2),s.child}r=r.sibling}m.tail!==null&&Ge()>mo&&(s.flags|=128,d=!0,Da(m,!1),s.lanes=4194304)}else{if(!d)if(r=wu(w),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ze)return Vt(s),null}else 2*Ge()-m.renderingStartTime>mo&&a!==1073741824&&(s.flags|=128,d=!0,Da(m,!1),s.lanes=4194304);m.isBackwards?(w.sibling=s.child,s.child=w):(a=m.last,a!==null?a.sibling=w:s.child=w,m.last=w)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ge(),s.sibling=null,a=et.current,Qe(et,d?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return _h(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function NE(r,s){switch(Pd(s),s.tag){case 1:return Jt(s.type)&&uu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return co(),Xe(Xt),Xe(Lt),zd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return jd(s),null;case 13:if(Xe(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Xe(et),null;case 4:return co(),null;case 10:return Od(s.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var Ru=!1,Ft=!1,DE=typeof WeakSet=="function"?WeakSet:Set,re=null;function fo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){rt(r,s,d)}else a.current=null}function ah(r,s,a){try{a()}catch(d){rt(r,s,d)}}var Ag=!1;function OE(r,s){if(_d=ei,r=rm(),dd(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var h=d.anchorOffset,m=d.focusNode;d=d.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,S=-1,P=-1,z=0,K=0,Q=r,H=null;t:for(;;){for(var te;Q!==a||h!==0&&Q.nodeType!==3||(S=w+h),Q!==m||d!==0&&Q.nodeType!==3||(P=w+d),Q.nodeType===3&&(w+=Q.nodeValue.length),(te=Q.firstChild)!==null;)H=Q,Q=te;for(;;){if(Q===r)break t;if(H===a&&++z===h&&(S=w),H===m&&++K===d&&(P=w),(te=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=te}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(wd={focusedElem:r,selectionRange:a},ei=!1,re=s;re!==null;)if(s=re,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,re=r;else for(;re!==null;){s=re;try{var ie=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,lt=ie.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?oe:Mn(s.type,oe),lt);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){rt(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,re=r;break}re=s.return}return ie=Ag,Ag=!1,ie}function Oa(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&r)===r){var m=h.destroy;h.destroy=void 0,m!==void 0&&ah(s,a,m)}h=h.next}while(h!==d)}}function xu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function lh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function kg(r){var s=r.alternate;s!==null&&(r.alternate=null,kg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Jn],delete s[Ia],delete s[Sd],delete s[gE],delete s[yE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Cg(r){return r.tag===5||r.tag===3||r.tag===4}function Pg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Cg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function uh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=au));else if(d!==4&&(r=r.child,r!==null))for(uh(r,s,a),r=r.sibling;r!==null;)uh(r,s,a),r=r.sibling}function ch(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(ch(r,s,a),r=r.sibling;r!==null;)ch(r,s,a),r=r.sibling}var Pt=null,Vn=!1;function ui(r,s,a){for(a=a.child;a!==null;)Rg(r,s,a),a=a.sibling}function Rg(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(ji,a)}catch{}switch(a.tag){case 5:Ft||fo(a,s);case 6:var d=Pt,h=Vn;Pt=null,ui(r,s,a),Pt=d,Vn=h,Pt!==null&&(Vn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Vn?(r=Pt,a=a.stateNode,r.nodeType===8?Id(r.parentNode,a):r.nodeType===1&&Id(r,a),Nn(r)):Id(Pt,a.stateNode));break;case 4:d=Pt,h=Vn,Pt=a.stateNode.containerInfo,Vn=!0,ui(r,s,a),Pt=d,Vn=h;break;case 0:case 11:case 14:case 15:if(!Ft&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var m=h,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&ah(a,s,w),h=h.next}while(h!==d)}ui(r,s,a);break;case 1:if(!Ft&&(fo(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(S){rt(a,s,S)}ui(r,s,a);break;case 21:ui(r,s,a);break;case 22:a.mode&1?(Ft=(d=Ft)||a.memoizedState!==null,ui(r,s,a),Ft=d):ui(r,s,a);break;default:ui(r,s,a)}}function xg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new DE),s.forEach(function(d){var h=$E.bind(null,r,d);a.has(d)||(a.add(d),d.then(h,h))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var h=a[d];try{var m=r,w=s,S=w;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Vn=!1;break e;case 3:Pt=S.stateNode.containerInfo,Vn=!0;break e;case 4:Pt=S.stateNode.containerInfo,Vn=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Rg(m,w,h),Pt=null,Vn=!1;var P=h.alternate;P!==null&&(P.return=null),h.return=null}catch(z){rt(h,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)bg(s,r),s=s.sibling}function bg(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),tr(r),d&4){try{Oa(3,r,r.return),xu(3,r)}catch(oe){rt(r,r.return,oe)}try{Oa(5,r,r.return)}catch(oe){rt(r,r.return,oe)}}break;case 1:Fn(s,r),tr(r),d&512&&a!==null&&fo(a,a.return);break;case 5:if(Fn(s,r),tr(r),d&512&&a!==null&&fo(a,a.return),r.flags&32){var h=r.stateNode;try{Hr(h,"")}catch(oe){rt(r,r.return,oe)}}if(d&4&&(h=r.stateNode,h!=null)){var m=r.memoizedProps,w=a!==null?a.memoizedProps:m,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&qo(h,m),ea(S,w);var z=ea(S,m);for(w=0;w<P.length;w+=2){var K=P[w],Q=P[w+1];K==="style"?Xo(h,Q):K==="dangerouslySetInnerHTML"?Qo(h,Q):K==="children"?Hr(h,Q):de(h,K,Q,z)}switch(S){case"input":Ho(h,m);break;case"textarea":Ps(h,m);break;case"select":var H=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var te=m.value;te!=null?yr(h,!!m.multiple,te,!1):H!==!!m.multiple&&(m.defaultValue!=null?yr(h,!!m.multiple,m.defaultValue,!0):yr(h,!!m.multiple,m.multiple?[]:"",!1))}h[Ia]=m}catch(oe){rt(r,r.return,oe)}}break;case 6:if(Fn(s,r),tr(r),d&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,m=r.memoizedProps;try{h.nodeValue=m}catch(oe){rt(r,r.return,oe)}}break;case 3:if(Fn(s,r),tr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Nn(s.containerInfo)}catch(oe){rt(r,r.return,oe)}break;case 4:Fn(s,r),tr(r);break;case 13:Fn(s,r),tr(r),h=r.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(fh=Ge())),d&4&&xg(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(z=Ft)||K,Fn(s,r),Ft=z):Fn(s,r),tr(r),d&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!K&&(r.mode&1)!==0)for(re=r,K=r.child;K!==null;){for(Q=re=K;re!==null;){switch(H=re,te=H.child,H.tag){case 0:case 11:case 14:case 15:Oa(4,H,H.return);break;case 1:fo(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){d=H,a=H.return;try{s=d,ie.props=s.memoizedProps,ie.state=s.memoizedState,ie.componentWillUnmount()}catch(oe){rt(d,a,oe)}}break;case 5:fo(H,H.return);break;case 22:if(H.memoizedState!==null){Og(Q);continue}}te!==null?(te.return=H,re=te):Og(Q)}K=K.sibling}e:for(K=null,Q=r;;){if(Q.tag===5){if(K===null){K=Q;try{h=Q.stateNode,z?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Q.stateNode,P=Q.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Yo("display",w))}catch(oe){rt(r,r.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=z?"":Q.memoizedProps}catch(oe){rt(r,r.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===r)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===r)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===r)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Fn(s,r),tr(r),d&4&&xg(r);break;case 21:break;default:Fn(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Cg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(Hr(h,""),d.flags&=-33);var m=Pg(r);ch(r,m,h);break;case 3:case 4:var w=d.stateNode.containerInfo,S=Pg(r);uh(r,S,w);break;default:throw Error(t(161))}}catch(P){rt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function LE(r,s,a){re=r,Ng(r)}function Ng(r,s,a){for(var d=(r.mode&1)!==0;re!==null;){var h=re,m=h.child;if(h.tag===22&&d){var w=h.memoizedState!==null||Ru;if(!w){var S=h.alternate,P=S!==null&&S.memoizedState!==null||Ft;S=Ru;var z=Ft;if(Ru=w,(Ft=P)&&!z)for(re=h;re!==null;)w=re,P=w.child,w.tag===22&&w.memoizedState!==null?Lg(h):P!==null?(P.return=w,re=P):Lg(h);for(;m!==null;)re=m,Ng(m),m=m.sibling;re=h,Ru=S,Ft=z}Dg(r)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,re=m):Dg(r)}}function Dg(r){for(;re!==null;){var s=re;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||xu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ft)if(a===null)d.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);d.componentDidUpdate(h,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Om(s,m,d);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Om(s,w,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var K=z.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Nn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&lh(s)}catch(H){rt(s,s.return,H)}}if(s===r){re=null;break}if(a=s.sibling,a!==null){a.return=s.return,re=a;break}re=s.return}}function Og(r){for(;re!==null;){var s=re;if(s===r){re=null;break}var a=s.sibling;if(a!==null){a.return=s.return,re=a;break}re=s.return}}function Lg(r){for(;re!==null;){var s=re;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{xu(4,s)}catch(P){rt(s,a,P)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var h=s.return;try{d.componentDidMount()}catch(P){rt(s,h,P)}}var m=s.return;try{lh(s)}catch(P){rt(s,m,P)}break;case 5:var w=s.return;try{lh(s)}catch(P){rt(s,w,P)}}}catch(P){rt(s,s.return,P)}if(s===r){re=null;break}var S=s.sibling;if(S!==null){S.return=s.return,re=S;break}re=s.return}}var ME=Math.ceil,bu=me.ReactCurrentDispatcher,dh=me.ReactCurrentOwner,wn=me.ReactCurrentBatchConfig,Fe=0,It=null,dt=null,Rt=0,cn=0,po=ii(0),yt=0,La=null,Zi=0,Nu=0,hh=0,Ma=null,en=null,fh=0,mo=1/0,Nr=null,Du=!1,ph=null,ci=null,Ou=!1,di=null,Lu=0,Va=0,mh=null,Mu=-1,Vu=0;function Kt(){return(Fe&6)!==0?Ge():Mu!==-1?Mu:Mu=Ge()}function hi(r){return(r.mode&1)===0?1:(Fe&2)!==0&&Rt!==0?Rt&-Rt:_E.transition!==null?(Vu===0&&(Vu=zi()),Vu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:da(r.type)),r)}function jn(r,s,a,d){if(50<Va)throw Va=0,mh=null,Error(t(185));Yr(r,a,d),((Fe&2)===0||r!==It)&&(r===It&&((Fe&2)===0&&(Nu|=a),yt===4&&fi(r,Rt)),tn(r,d),a===1&&Fe===0&&(s.mode&1)===0&&(mo=Ge()+500,du&&oi()))}function tn(r,s){var a=r.callbackNode;wr(r,s);var d=Ui(r,r===It?Rt:0);if(d===0)a!==null&&oa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&oa(a),s===1)r.tag===0?vE(Vg.bind(null,r)):Tm(Vg.bind(null,r)),pE(function(){(Fe&6)===0&&oi()}),a=null;else{switch(Jr(d)){case 1:a=Fi;break;case 4:a=Kr;break;case 16:a=fn;break;case 536870912:a=Vl;break;default:a=fn}a=qg(a,Mg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Mg(r,s){if(Mu=-1,Vu=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(go()&&r.callbackNode!==a)return null;var d=Ui(r,r===It?Rt:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Fu(r,d);else{s=d;var h=Fe;Fe|=2;var m=jg();(It!==r||Rt!==s)&&(Nr=null,mo=Ge()+500,ts(r,s));do try{jE();break}catch(S){Fg(r,S)}while(!0);Dd(),bu.current=m,Fe=h,dt!==null?s=0:(It=null,Rt=0,s=yt)}if(s!==0){if(s===2&&(h=sn(r),h!==0&&(d=h,s=gh(r,h))),s===1)throw a=La,ts(r,0),fi(r,d),tn(r,Ge()),a;if(s===6)fi(r,d);else{if(h=r.current.alternate,(d&30)===0&&!VE(h)&&(s=Fu(r,d),s===2&&(m=sn(r),m!==0&&(d=m,s=gh(r,m))),s===1))throw a=La,ts(r,0),fi(r,d),tn(r,Ge()),a;switch(r.finishedWork=h,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:ns(r,en,Nr);break;case 3:if(fi(r,d),(d&130023424)===d&&(s=fh+500-Ge(),10<s)){if(Ui(r,0)!==0)break;if(h=r.suspendedLanes,(h&d)!==d){Kt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=Td(ns.bind(null,r,en,Nr),s);break}ns(r,en,Nr);break;case 4:if(fi(r,d),(d&4194240)===d)break;for(s=r.eventTimes,h=-1;0<d;){var w=31-Wt(d);m=1<<w,w=s[w],w>h&&(h=w),d&=~m}if(d=h,d=Ge()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ME(d/1960))-d,10<d){r.timeoutHandle=Td(ns.bind(null,r,en,Nr),d);break}ns(r,en,Nr);break;case 5:ns(r,en,Nr);break;default:throw Error(t(329))}}}return tn(r,Ge()),r.callbackNode===a?Mg.bind(null,r):null}function gh(r,s){var a=Ma;return r.current.memoizedState.isDehydrated&&(ts(r,s).flags|=256),r=Fu(r,s),r!==2&&(s=en,en=a,s!==null&&yh(s)),r}function yh(r){en===null?en=r:en.push.apply(en,r)}function VE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var h=a[d],m=h.getSnapshot;h=h.value;try{if(!On(m(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fi(r,s){for(s&=~hh,s&=~Nu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),d=1<<a;r[a]=-1,s&=~d}}function Vg(r){if((Fe&6)!==0)throw Error(t(327));go();var s=Ui(r,0);if((s&1)===0)return tn(r,Ge()),null;var a=Fu(r,s);if(r.tag!==0&&a===2){var d=sn(r);d!==0&&(s=d,a=gh(r,d))}if(a===1)throw a=La,ts(r,0),fi(r,s),tn(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ns(r,en,Nr),tn(r,Ge()),null}function vh(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(mo=Ge()+500,du&&oi())}}function es(r){di!==null&&di.tag===0&&(Fe&6)===0&&go();var s=Fe;Fe|=1;var a=wn.transition,d=Ne;try{if(wn.transition=null,Ne=1,r)return r()}finally{Ne=d,wn.transition=a,Fe=s,(Fe&6)===0&&oi()}}function _h(){cn=po.current,Xe(po)}function ts(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,fE(a)),dt!==null)for(a=dt.return;a!==null;){var d=a;switch(Pd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&uu();break;case 3:co(),Xe(Xt),Xe(Lt),zd();break;case 5:jd(d);break;case 4:co();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:Od(d.type._context);break;case 22:case 23:_h()}a=a.return}if(It=r,dt=r=pi(r.current,null),Rt=cn=s,yt=0,La=null,hh=Nu=Zi=0,en=Ma=null,Yi!==null){for(s=0;s<Yi.length;s++)if(a=Yi[s],d=a.interleaved,d!==null){a.interleaved=null;var h=d.next,m=a.pending;if(m!==null){var w=m.next;m.next=h,d.next=w}a.pending=d}Yi=null}return r}function Fg(r,s){do{var a=dt;try{if(Dd(),Eu.current=Au,Tu){for(var d=tt.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}Tu=!1}if(Ji=0,Tt=gt=tt=null,Ra=!1,xa=0,dh.current=null,a===null||a.return===null){yt=1,La=s,dt=null;break}e:{var m=r,w=a.return,S=a,P=s;if(s=Rt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,K=S,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=K.alternate;H?(K.updateQueue=H.updateQueue,K.memoizedState=H.memoizedState,K.lanes=H.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=ug(w);if(te!==null){te.flags&=-257,cg(te,w,S,m,s),te.mode&1&&lg(m,z,s),s=te,P=z;var ie=s.updateQueue;if(ie===null){var oe=new Set;oe.add(P),s.updateQueue=oe}else ie.add(P);break e}else{if((s&1)===0){lg(m,z,s),wh();break e}P=Error(t(426))}}else if(Ze&&S.mode&1){var lt=ug(w);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),cg(lt,w,S,m,s),bd(ho(P,S));break e}}m=P=ho(P,S),yt!==4&&(yt=2),Ma===null?Ma=[m]:Ma.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var F=og(m,P,s);Dm(m,F);break e;case 1:S=P;var D=m.type,j=m.stateNode;if((m.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ci===null||!ci.has(j)))){m.flags|=65536,s&=-s,m.lanes|=s;var X=ag(m,S,s);Dm(m,X);break e}}m=m.return}while(m!==null)}zg(a)}catch(le){s=le,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function jg(){var r=bu.current;return bu.current=Au,r===null?Au:r}function wh(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||(Zi&268435455)===0&&(Nu&268435455)===0||fi(It,Rt)}function Fu(r,s){var a=Fe;Fe|=2;var d=jg();(It!==r||Rt!==s)&&(Nr=null,ts(r,s));do try{FE();break}catch(h){Fg(r,h)}while(!0);if(Dd(),Fe=a,bu.current=d,dt!==null)throw Error(t(261));return It=null,Rt=0,yt}function FE(){for(;dt!==null;)Ug(dt)}function jE(){for(;dt!==null&&!Ll();)Ug(dt)}function Ug(r){var s=Wg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?zg(r):dt=s,dh.current=null}function zg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=bE(a,s,cn),a!==null){dt=a;return}}else{if(a=NE(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);yt===0&&(yt=5)}function ns(r,s,a){var d=Ne,h=wn.transition;try{wn.transition=null,Ne=1,UE(r,s,a,d)}finally{wn.transition=h,Ne=d}return null}function UE(r,s,a,d){do go();while(di!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(He(r,m),r===It&&(dt=It=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ou||(Ou=!0,qg(fn,function(){return go(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=wn.transition,wn.transition=null;var w=Ne;Ne=1;var S=Fe;Fe|=4,dh.current=null,OE(r,a),bg(a,r),oE(wd),ei=!!_d,wd=_d=null,r.current=a,LE(a),rd(),Fe=S,Ne=w,wn.transition=m}else r.current=a;if(Ou&&(Ou=!1,di=r,Lu=h),m=r.pendingLanes,m===0&&(ci=null),Fl(a.stateNode),tn(r,Ge()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)h=s[a],d(h.value,{componentStack:h.stack,digest:h.digest});if(Du)throw Du=!1,r=ph,ph=null,r;return(Lu&1)!==0&&r.tag!==0&&go(),m=r.pendingLanes,(m&1)!==0?r===mh?Va++:(Va=0,mh=r):Va=0,oi(),null}function go(){if(di!==null){var r=Jr(Lu),s=wn.transition,a=Ne;try{if(wn.transition=null,Ne=16>r?16:r,di===null)var d=!1;else{if(r=di,di=null,Lu=0,(Fe&6)!==0)throw Error(t(331));var h=Fe;for(Fe|=4,re=r.current;re!==null;){var m=re,w=m.child;if((re.flags&16)!==0){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var z=S[P];for(re=z;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:Oa(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var H=K.sibling,te=K.return;if(kg(K),K===z){re=null;break}if(H!==null){H.return=te,re=H;break}re=te}}}var ie=m.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var lt=oe.sibling;oe.sibling=null,oe=lt}while(oe!==null)}}re=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,re=w;else e:for(;re!==null;){if(m=re,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var F=m.sibling;if(F!==null){F.return=m.return,re=F;break e}re=m.return}}var D=r.current;for(re=D;re!==null;){w=re;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,re=j;else e:for(w=D;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:xu(9,S)}}catch(le){rt(S,S.return,le)}if(S===w){re=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,re=X;break e}re=S.return}}if(Fe=h,oi(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(ji,r)}catch{}d=!0}return d}finally{Ne=a,wn.transition=s}}return!1}function Bg(r,s,a){s=ho(a,s),s=og(r,s,1),r=li(r,s,1),s=Kt(),r!==null&&(Yr(r,1,s),tn(r,s))}function rt(r,s,a){if(r.tag===3)Bg(r,r,a);else for(;s!==null;){if(s.tag===3){Bg(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ci===null||!ci.has(d))){r=ho(a,r),r=ag(s,r,1),s=li(s,r,1),r=Kt(),s!==null&&(Yr(s,1,r),tn(s,r));break}}s=s.return}}function zE(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(Rt&a)===a&&(yt===4||yt===3&&(Rt&130023424)===Rt&&500>Ge()-fh?ts(r,0):hh|=a),tn(r,s)}function $g(r,s){s===0&&((r.mode&1)===0?s=1:(s=Fs,Fs<<=1,(Fs&130023424)===0&&(Fs=4194304)));var a=Kt();r=Rr(r,s),r!==null&&(Yr(r,s,a),tn(r,a))}function BE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),$g(r,a)}function $E(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),$g(r,a)}var Wg;Wg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Xt.current)Zt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Zt=!1,xE(r,s,a);Zt=(r.flags&131072)!==0}else Zt=!1,Ze&&(s.flags&1048576)!==0&&Im(s,fu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Pu(r,s),r=s.pendingProps;var h=ro(s,Lt.current);uo(s,a),h=Wd(null,s,d,r,h,a);var m=qd();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(d)?(m=!0,cu(s)):m=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Vd(s),h.updater=ku,s.stateNode=h,h._reactInternals=s,Xd(s,d,r,a),s=th(null,s,d,!0,m,a)):(s.tag=0,Ze&&m&&Cd(s),Ht(null,s,h,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Pu(r,s),r=s.pendingProps,h=d._init,d=h(d._payload),s.type=d,h=s.tag=qE(d),r=Mn(d,r),h){case 0:s=eh(null,s,d,r,a);break e;case 1:s=gg(null,s,d,r,a);break e;case 11:s=dg(null,s,d,r,a);break e;case 14:s=hg(null,s,d,Mn(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Mn(d,h),eh(r,s,d,h,a);case 1:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Mn(d,h),gg(r,s,d,h,a);case 3:e:{if(yg(s),r===null)throw Error(t(387));d=s.pendingProps,m=s.memoizedState,h=m.element,Nm(r,s),_u(s,d,null,a);var w=s.memoizedState;if(d=w.element,m.isDehydrated)if(m={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){h=ho(Error(t(423)),s),s=vg(r,s,d,a,h);break e}else if(d!==h){h=ho(Error(t(424)),s),s=vg(r,s,d,a,h);break e}else for(un=ri(s.stateNode.containerInfo.firstChild),ln=s,Ze=!0,Ln=null,a=xm(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),d===h){s=br(r,s,a);break e}Ht(r,s,d,a)}s=s.child}return s;case 5:return Lm(s),r===null&&xd(s),d=s.type,h=s.pendingProps,m=r!==null?r.memoizedProps:null,w=h.children,Ed(d,h)?w=null:m!==null&&Ed(d,m)&&(s.flags|=32),mg(r,s),Ht(r,s,w,a),s.child;case 6:return r===null&&xd(s),null;case 13:return _g(r,s,a);case 4:return Fd(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=ao(s,null,d,a):Ht(r,s,d,a),s.child;case 11:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Mn(d,h),dg(r,s,d,h,a);case 7:return Ht(r,s,s.pendingProps,a),s.child;case 8:return Ht(r,s,s.pendingProps.children,a),s.child;case 12:return Ht(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,h=s.pendingProps,m=s.memoizedProps,w=h.value,Qe(gu,d._currentValue),d._currentValue=w,m!==null)if(On(m.value,w)){if(m.children===h.children&&!Xt.current){s=br(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){w=m.child;for(var P=S.firstContext;P!==null;){if(P.context===d){if(m.tag===1){P=xr(-1,a&-a),P.tag=2;var z=m.updateQueue;if(z!==null){z=z.shared;var K=z.pending;K===null?P.next=P:(P.next=K.next,K.next=P),z.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Ld(m.return,a,s),S.lanes|=a;break}P=P.next}}else if(m.tag===10)w=m.type===s.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,S=w.alternate,S!==null&&(S.lanes|=a),Ld(w,a,s),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===s){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Ht(r,s,h.children,a),s=s.child}return s;case 9:return h=s.type,d=s.pendingProps.children,uo(s,a),h=vn(h),d=d(h),s.flags|=1,Ht(r,s,d,a),s.child;case 14:return d=s.type,h=Mn(d,s.pendingProps),h=Mn(d.type,h),hg(r,s,d,h,a);case 15:return fg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,h=s.pendingProps,h=s.elementType===d?h:Mn(d,h),Pu(r,s),s.tag=1,Jt(d)?(r=!0,cu(s)):r=!1,uo(s,a),ig(s,d,h),Xd(s,d,h,a),th(null,s,d,!0,r,a);case 19:return Eg(r,s,a);case 22:return pg(r,s,a)}throw Error(t(156,s.tag))};function qg(r,s){return Ms(r,s)}function WE(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,d){return new WE(r,s,a,d)}function Eh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function qE(r){if(typeof r=="function")return Eh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===$e)return 14}return 2}function pi(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function ju(r,s,a,d,h,m){var w=2;if(d=r,typeof r=="function")Eh(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case x:return rs(a.children,h,m,s);case T:w=8,h|=8;break;case k:return r=En(12,a,s,h|2),r.elementType=k,r.lanes=m,r;case A:return r=En(13,a,s,h),r.elementType=A,r.lanes=m,r;case ke:return r=En(19,a,s,h),r.elementType=ke,r.lanes=m,r;case xe:return Uu(a,h,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:w=10;break e;case b:w=9;break e;case O:w=11;break e;case $e:w=14;break e;case ot:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(w,a,s,h),s.elementType=r,s.type=d,s.lanes=m,s}function rs(r,s,a,d){return r=En(7,r,d,s),r.lanes=a,r}function Uu(r,s,a,d){return r=En(22,r,d,s),r.elementType=xe,r.lanes=a,r.stateNode={isHidden:!1},r}function Th(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function Ih(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function HE(r,s,a,d,h){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Sh(r,s,a,d,h,m,w,S,P){return r=new HE(r,s,a,S,P),s===1?(s=1,m===!0&&(s|=8)):s=0,m=En(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(m),r}function KE(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function Hg(r){if(!r)return si;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return wm(r,a,s)}return s}function Kg(r,s,a,d,h,m,w,S,P){return r=Sh(a,d,!0,r,h,m,w,S,P),r.context=Hg(null),a=r.current,d=Kt(),h=hi(a),m=xr(d,h),m.callback=s??null,li(a,m,h),r.current.lanes=h,Yr(r,h,d),tn(r,d),r}function zu(r,s,a,d){var h=s.current,m=Kt(),w=hi(h);return a=Hg(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(m,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=li(h,s,w),r!==null&&(jn(r,h,w,m),vu(r,h,w)),w}function Bu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Ah(r,s){Gg(r,s),(r=r.alternate)&&Gg(r,s)}function GE(){return null}var Qg=typeof reportError=="function"?reportError:function(r){console.error(r)};function kh(r){this._internalRoot=r}$u.prototype.render=kh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));zu(r,s,null,null)},$u.prototype.unmount=kh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;es(function(){zu(null,r,null,null)}),s[Ar]=null}};function $u(r){this._internalRoot=r}$u.prototype.unstable_scheduleHydration=function(r){if(r){var s=$l();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Gn.length&&s!==0&&s<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&Hl(r)}};function Ch(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function QE(r,s,a,d,h){if(h){if(typeof d=="function"){var m=d;d=function(){var z=Bu(w);m.call(z)}}var w=Kg(s,d,r,0,null,!1,!1,"",Yg);return r._reactRootContainer=w,r[Ar]=w.current,Ea(r.nodeType===8?r.parentNode:r),es(),w}for(;h=r.lastChild;)r.removeChild(h);if(typeof d=="function"){var S=d;d=function(){var z=Bu(P);S.call(z)}}var P=Sh(r,0,!1,null,null,!1,!1,"",Yg);return r._reactRootContainer=P,r[Ar]=P.current,Ea(r.nodeType===8?r.parentNode:r),es(function(){zu(s,P,a,d)}),P}function qu(r,s,a,d,h){var m=a._reactRootContainer;if(m){var w=m;if(typeof h=="function"){var S=h;h=function(){var P=Bu(w);S.call(P)}}zu(s,w,r,h)}else w=QE(a,s,r,h,d);return Bu(w)}zl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Gr(s.pendingLanes);a!==0&&(Xr(s,a|1),tn(s,Ge()),(Fe&6)===0&&(mo=Ge()+500,oi()))}break;case 13:es(function(){var d=Rr(r,1);if(d!==null){var h=Kt();jn(d,r,1,h)}}),Ah(r,1)}},js=function(r){if(r.tag===13){var s=Rr(r,134217728);if(s!==null){var a=Kt();jn(s,r,134217728,a)}Ah(r,134217728)}},Bl=function(r){if(r.tag===13){var s=hi(r),a=Rr(r,s);if(a!==null){var d=Kt();jn(a,r,s,d)}Ah(r,s)}},$l=function(){return Ne},Wl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},xs=function(r,s,a){switch(s){case"input":if(Ho(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var h=lu(d);if(!h)throw Error(t(90));Ss(d),Ho(d,h)}}}break;case"textarea":Ps(r,a);break;case"select":s=a.value,s!=null&&yr(r,!!a.multiple,s,!1)}},Oi=vh,na=es;var YE={usingClientEntryPoint:!1,Events:[Sa,to,lu,Hn,ta,vh]},Fa={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XE={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=sa(r),r===null?null:r.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||GE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{ji=Hu.inject(XE),rn=Hu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(s))throw Error(t(200));return KE(r,s,null,a)},nn.createRoot=function(r,s){if(!Ch(r))throw Error(t(299));var a=!1,d="",h=Qg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Sh(r,1,!1,null,null,a,!1,d,h),r[Ar]=s.current,Ea(r.nodeType===8?r.parentNode:r),new kh(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=sa(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return es(r)},nn.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return qu(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Ch(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,h=!1,m="",w=Qg;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Kg(s,null,r,1,a??null,h,!1,m,w),r[Ar]=s.current,Ea(r),d)for(r=0;r<d.length;r++)a=d[r],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new $u(s)},nn.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return qu(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(es(function(){qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},nn.unstable_batchedUpdates=vh,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return qu(r,s,a,!1,d)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var iy;function sT(){if(iy)return xh.exports;iy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),xh.exports=iT(),xh.exports}var sy;function oT(){if(sy)return Ku;sy=1;var n=sT();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var aT=oT();const lT=Bf(aT),uT="modulepreload",cT=function(n){return"/Edith/"+n},oy={},_l=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let c=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(I=>({status:"fulfilled",value:I}),I=>({status:"rejected",reason:I}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=f?.nonce||f?.getAttribute("nonce");o=c(t.map(v=>{if(v=cT(v),v in oy)return;oy[v]=!0;const _=v.endsWith(".css"),I=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${I}`))return;const C=document.createElement("link");if(C.rel=_?"stylesheet":uT,_||(C.as="script"),C.crossOrigin="",C.href=v,g&&C.setAttribute("nonce",g),document.head.appendChild(C),_)return new Promise((U,W)=>{C.addEventListener("load",U),C.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},dT="/Edith/";let nr=null,Kv=null;function hT(){if(!(typeof window>"u")&&!nr){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;nr=new n,fetch(`${dT}sounds/click.mp3`).then(e=>e.arrayBuffer()).then(e=>nr.decodeAudioData(e)).then(e=>{Kv=e}).catch(()=>{})}}function fT(n){if(nr||hT(),!nr||!n)return;nr.state==="suspended"&&nr.resume().catch(()=>{});const e=nr.createBufferSource();e.buffer=n;const t=nr.createGain();t.gain.value=.35,e.connect(t),t.connect(nr.destination),e.start(0)}function pT(){try{fT(Kv)}catch{}}const mT={},ay=n=>{let e;const t=new Set,i=(_,I)=>{const C=typeof _=="function"?_(e):_;if(!Object.is(C,e)){const U=e;e=I??(typeof C!="object"||C===null)?C:Object.assign({},e,C),t.forEach(W=>W(e,U))}},o=()=>e,g={setState:i,getState:o,getInitialState:()=>v,subscribe:_=>(t.add(_),()=>t.delete(_)),destroy:()=>{(mT?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},v=e=n(i,o,g);return g},gT=n=>n?ay(n):ay;var Dh={exports:{}},Oh={},Lh={exports:{}},Mh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function yT(){if(ly)return Mh;ly=1;var n=vl();function e(I,C){return I===C&&(I!==0||1/I===1/C)||I!==I&&C!==C}var t=typeof Object.is=="function"?Object.is:e,i=n.useState,o=n.useEffect,l=n.useLayoutEffect,c=n.useDebugValue;function f(I,C){var U=C(),W=i({inst:{value:U,getSnapshot:C}}),$=W[0].inst,M=W[1];return l(function(){$.value=U,$.getSnapshot=C,g($)&&M({inst:$})},[I,U,C]),o(function(){return g($)&&M({inst:$}),I(function(){g($)&&M({inst:$})})},[I]),c(U),U}function g(I){var C=I.getSnapshot;I=I.value;try{var U=C();return!t(I,U)}catch{return!0}}function v(I,C){return C()}var _=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?v:f;return Mh.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:_,Mh}var uy;function vT(){return uy||(uy=1,Lh.exports=yT()),Lh.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function _T(){if(cy)return Oh;cy=1;var n=vl(),e=vT();function t(v,_){return v===_&&(v!==0||1/v===1/_)||v!==v&&_!==_}var i=typeof Object.is=="function"?Object.is:t,o=e.useSyncExternalStore,l=n.useRef,c=n.useEffect,f=n.useMemo,g=n.useDebugValue;return Oh.useSyncExternalStoreWithSelector=function(v,_,I,C,U){var W=l(null);if(W.current===null){var $={hasValue:!1,value:null};W.current=$}else $=W.current;W=f(function(){function Z(ge){if(!se){if(se=!0,de=ge,ge=C(ge),U!==void 0&&$.hasValue){var x=$.value;if(U(x,ge))return me=x}return me=ge}if(x=me,i(de,ge))return x;var T=C(ge);return U!==void 0&&U(x,T)?(de=ge,x):(de=ge,me=T)}var se=!1,de,me,Oe=I===void 0?null:I;return[function(){return Z(_())},Oe===null?void 0:function(){return Z(Oe())}]},[_,I,C,U]);var M=o(v,W[0],W[1]);return c(function(){$.hasValue=!0,$.value=M},[M]),g(M),M},Oh}var dy;function wT(){return dy||(dy=1,Dh.exports=_T()),Dh.exports}var ET=wT();const TT=Bf(ET),Gv={},{useDebugValue:IT}=Hv,{useSyncExternalStoreWithSelector:ST}=TT;let hy=!1;const AT=n=>n;function kT(n,e=AT,t){(Gv?"production":void 0)!=="production"&&t&&!hy&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),hy=!0);const i=ST(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return IT(i),i}const CT=n=>{(Gv?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?gT(n):n,t=(i,o)=>kT(e,i,o);return Object.assign(t,e),t},PT=n=>CT;var Qv=Symbol.for("immer-nothing"),fy=Symbol.for("immer-draftable"),dn=Symbol.for("immer-state");function Un(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var nl=Object.getPrototypeOf;function ko(n){return!!n&&!!n[dn]}function hs(n){return n?Yv(n)||Array.isArray(n)||!!n[fy]||!!n.constructor?.[fy]||wl(n)||Dc(n):!1}var RT=Object.prototype.constructor.toString(),py=new WeakMap;function Yv(n){if(!n||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);if(e===null||e===Object.prototype)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(t===Object)return!0;if(typeof t!="function")return!1;let i=py.get(t);return i===void 0&&(i=Function.toString.call(t),py.set(t,i)),i===RT}function uc(n,e,t=!0){Nc(n)===0?(t?Reflect.ownKeys(n):Object.keys(n)).forEach(o=>{e(o,n[o],n)}):n.forEach((i,o)=>e(o,i,n))}function Nc(n){const e=n[dn];return e?e.type_:Array.isArray(n)?1:wl(n)?2:Dc(n)?3:0}function af(n,e){return Nc(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function Xv(n,e,t){const i=Nc(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function xT(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function wl(n){return n instanceof Map}function Dc(n){return n instanceof Set}function ss(n){return n.copy_||n.base_}function lf(n,e){if(wl(n))return new Map(n);if(Dc(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=Yv(n);if(e===!0||e==="class_only"&&!t){const i=Object.getOwnPropertyDescriptors(n);delete i[dn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const c=o[l],f=i[c];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[c]={configurable:!0,writable:!0,enumerable:f.enumerable,value:n[c]})}return Object.create(nl(n),i)}else{const i=nl(n);if(i!==null&&t)return{...n};const o=Object.create(i);return Object.assign(o,n)}}function $f(n,e=!1){return Oc(n)||ko(n)||!hs(n)||(Nc(n)>1&&Object.defineProperties(n,{set:Gu,add:Gu,clear:Gu,delete:Gu}),Object.freeze(n),e&&Object.values(n).forEach(t=>$f(t,!0))),n}function bT(){Un(2)}var Gu={value:bT};function Oc(n){return n===null||typeof n!="object"?!0:Object.isFrozen(n)}var NT={};function fs(n){const e=NT[n];return e||Un(0,n),e}var rl;function Jv(){return rl}function DT(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function my(n,e){e&&(fs("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function uf(n){cf(n),n.drafts_.forEach(OT),n.drafts_=null}function cf(n){n===rl&&(rl=n.parent_)}function gy(n){return rl=DT(rl,n)}function OT(n){const e=n[dn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function yy(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[dn].modified_&&(uf(e),Un(4)),hs(n)&&(n=cc(e,n),e.parent_||dc(e,n)),e.patches_&&fs("Patches").generateReplacementPatches_(t[dn].base_,n,e.patches_,e.inversePatches_)):n=cc(e,t,[]),uf(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==Qv?n:void 0}function cc(n,e,t){if(Oc(e))return e;const i=n.immer_.shouldUseStrictIteration(),o=e[dn];if(!o)return uc(e,(l,c)=>vy(n,o,e,l,c,t),i),e;if(o.scope_!==n)return e;if(!o.modified_)return dc(n,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let c=l,f=!1;o.type_===3&&(c=new Set(l),l.clear(),f=!0),uc(c,(g,v)=>vy(n,o,l,g,v,t,f),i),dc(n,l,!1),t&&n.patches_&&fs("Patches").generatePatches_(o,t,n.patches_,n.inversePatches_)}return o.copy_}function vy(n,e,t,i,o,l,c){if(o==null||typeof o!="object"&&!c)return;const f=Oc(o);if(!(f&&!c)){if(ko(o)){const g=l&&e&&e.type_!==3&&!af(e.assigned_,i)?l.concat(i):void 0,v=cc(n,o,g);if(Xv(t,i,v),ko(v))n.canAutoFreeze_=!1;else return}else c&&t.add(o);if(hs(o)&&!f){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||e&&e.base_&&e.base_[i]===o&&f)return;cc(n,o),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&(wl(t)?t.has(i):Object.prototype.propertyIsEnumerable.call(t,i))&&dc(n,o)}}}function dc(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&$f(e,t)}function LT(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:Jv(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=Wf;t&&(o=[i],l=il);const{revoke:c,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=c,f}var Wf={get(n,e){if(e===dn)return n;const t=ss(n);if(!af(t,e))return MT(n,t,e);const i=t[e];return n.finalized_||!hs(i)?i:i===Vh(n.base_,e)?(Fh(n),n.copy_[e]=hf(i,n)):i},has(n,e){return e in ss(n)},ownKeys(n){return Reflect.ownKeys(ss(n))},set(n,e,t){const i=Zv(ss(n),e);if(i?.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const o=Vh(ss(n),e),l=o?.[dn];if(l&&l.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(xT(t,o)&&(t!==void 0||af(n.base_,e)))return!0;Fh(n),df(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Vh(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Fh(n),df(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=ss(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){Un(11)},getPrototypeOf(n){return nl(n.base_)},setPrototypeOf(){Un(12)}},il={};uc(Wf,(n,e)=>{il[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});il.deleteProperty=function(n,e){return il.set.call(this,n,e,void 0)};il.set=function(n,e,t){return Wf.set.call(this,n[0],e,t,n[0])};function Vh(n,e){const t=n[dn];return(t?ss(t):n)[e]}function MT(n,e,t){const i=Zv(e,t);return i?"value"in i?i.value:i.get?.call(n.draft_):void 0}function Zv(n,e){if(!(e in n))return;let t=nl(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=nl(t)}}function df(n){n.modified_||(n.modified_=!0,n.parent_&&df(n.parent_))}function Fh(n){n.copy_||(n.copy_=lf(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var VT=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const l=t;t=e;const c=this;return function(g=l,...v){return c.produce(g,_=>t.call(this,_,...v))}}typeof t!="function"&&Un(6),i!==void 0&&typeof i!="function"&&Un(7);let o;if(hs(e)){const l=gy(this),c=hf(e,void 0);let f=!0;try{o=t(c),f=!1}finally{f?uf(l):cf(l)}return my(l,i),yy(o,l)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===Qv&&(o=void 0),this.autoFreeze_&&$f(o,!0),i){const l=[],c=[];fs("Patches").generateReplacementPatches_(e,o,l,c),i(l,c)}return o}else Un(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(c,...f)=>this.produceWithPatches(c,g=>e(g,...f));let i,o;return[this.produce(e,t,(c,f)=>{i=c,o=f}),i,o]},typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof n?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy),typeof n?.useStrictIteration=="boolean"&&this.setUseStrictIteration(n.useStrictIteration)}createDraft(n){hs(n)||Un(8),ko(n)&&(n=FT(n));const e=gy(this),t=hf(n,void 0);return t[dn].isManual_=!0,cf(e),t}finishDraft(n,e){const t=n&&n[dn];(!t||!t.isManual_)&&Un(9);const{scope_:i}=t;return my(i,e),yy(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}setUseStrictIteration(n){this.useStrictIteration_=n}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}t>-1&&(e=e.slice(t+1));const i=fs("Patches").applyPatches_;return ko(n)?i(n,e):this.produce(n,o=>i(o,e))}};function hf(n,e){const t=wl(n)?fs("MapSet").proxyMap_(n,e):Dc(n)?fs("MapSet").proxySet_(n,e):LT(n,e);return(e?e.scope_:Jv()).drafts_.push(t),t}function FT(n){return ko(n)||Un(10,n),e_(n)}function e_(n){if(!hs(n)||Oc(n))return n;const e=n[dn];let t,i=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=lf(n,e.scope_.immer_.useStrictShallowCopy_),i=e.scope_.immer_.shouldUseStrictIteration()}else t=lf(n,!0);return uc(t,(o,l)=>{Xv(t,o,e_(l))},i),e&&(e.finalized_=!1),t}var jT=new VT,UT=jT.produce;const zT=n=>(e,t,i)=>(i.setState=(o,l,...c)=>{const f=typeof o=="function"?UT(o):o;return e(f,l,...c)},n(i.setState,t,i)),BT=zT,qf=["accounts","law","taxation_it","taxation_gst","costing","audit","fm","sm"],Wa={accounts:{name:"Adv. Accounts",group:"g1",lectures:69,revisions:12,color:"#6366f1"},law:{name:"Corp Law",group:"g1",lectures:60,revisions:14,color:"#a855f7"},taxation_it:{name:"Income Tax",group:"g1",lectures:63,revisions:15,color:"#10b981",parent:"Taxation"},taxation_gst:{name:"GST",group:"g1",lectures:20,revisions:6,color:"#f59e0b",parent:"Taxation"},costing:{name:"Costing",group:"g2",lectures:70,revisions:15,color:"#ec4899"},audit:{name:"Audit & Ethics",group:"g2",lectures:50,revisions:10,color:"#eab308"},fm:{name:"Financial Mgmt",group:"g2",lectures:55,revisions:12,color:"#0ea5e9",parent:"FM-SM"},sm:{name:"Strategic Mgmt",group:"g2",lectures:40,revisions:10,color:"#f43f5e",parent:"FM-SM"}},hc={accounts:0,law:0,taxation_it:0,taxation_gst:0,costing:0,audit:0,fm:0,sm:0},t_=100,k2=2,C2=1e3,Hf=4,$T=4e3,P2="https://wa.me/919422872892?text=Hey%20Suffu%2C%20reaching%20out%20regarding%20E.D.I.T.H%20%28CA%20Intermediate%20Tracker%29.%20Need%20some%20help...",Bn=(n=new Date)=>{const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${i}`},R2=(n=new Date)=>{const e=String(n.getHours()).padStart(2,"0"),t=String(n.getMinutes()).padStart(2,"0");return`${e}:${t}`},x2=n=>new Date(n+"T12:00:00").toLocaleDateString("en-US",{weekday:"long"}),WT=n=>{const e=new Date(n+"T12:00:00"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getFullYear()).slice(2);return`${e.toLocaleDateString("en-US",{weekday:"long"})}, ${t}-${i}-${o}`},b2=n=>{const e=new Date(n+"T12:00:00"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getFullYear()).slice(2);return`${t}-${i}-${o}`},Ua=(n,e)=>{const t=new Date(n+"T12:00:00"),i=new Date(e+"T12:00:00");return Math.round((i.getTime()-t.getTime())/(1e3*60*60*24))},N2=n=>{const e=new Date;return e.setDate(e.getDate()+1),n===Bn(e)},ff=(n,e)=>{const t=new Date(n+"T12:00:00");return t.setDate(t.getDate()+e),Bn(t)},D2=n=>{const t=new Date(n+"T12:00:00").getDay(),i=t===0?-6:1-t,o=ff(n,i),l=[];for(let c=0;c<7;c++)l.push(ff(o,c));return l},Or=()=>`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,Co={progressSaved:"Noted. That lecture won't study itself 📚",importSuccess:"Data imported like a boss. Suffu approves ✅",importFail:"That file is more broken than my sleep schedule. Try again 💀",clearConfirm:"Slate wiped. Fresh start energy — don't waste it 🧹",testLogged:"Score recorded. No lies, no coping, just numbers 📊",chapterAdded:"Chapter added. Another one to conquer 💪",chapterDeleted:"Chapter gone. Hope you knew what you were doing 🫡",syncError:"Cloud's on a break. Saved locally, don't panic 🌧️",passwordReset:"Reset email sent. Check inbox, not Instagram 📬",signOut:"Signed out. Take a break, but not too long 🫠",reminderSet:"Reminder locked. No more 'I forgot' excuses 🔔",testScheduled:"Test scheduled. Your future self is already nervous 😬",memoryUpdated:"Memory saved. Edith remembers everything now 🧠",backupNeeded:"Been a while since your last backup. Export before karma hits 💾",onlineRestored:"Back online. Syncing your grind to the cloud ☁️",scheduleAdded:"Schedule item added. Tomorrow's looking productive 📋",plannerUpdated:"Planner updated. Discipline is the real syllabus 🗓️",loginSuccess:"Welcome back, soldier. The grind awaits 🔥",registerSuccess:"Account created. The Suffu era begins now 🚀",validationError:"Fix the red bits first. Suffu can wait ✋",emptyScore:"Score can't be blank. Put a number, even if it hurts 🔢",aiNotConfigured:"AI isn't set up yet. Check Settings → AI config 🤖",chatDeleted:"Chat wiped. Those messages are in a better place now 🪦",scheduledTestDeleted:"Test removed from the calendar. One less thing to stress about 📅",scheduleItemDeleted:"Schedule item gone. Your timeline approves 🕐",reminderDeleted:"Reminder deleted. Out of sight, out of mind 👻"};let n_=null;const qT=n=>{n_=n},jh=(n,e)=>{const t={id:Or(),message:n,type:e,createdAt:Date.now()};n_?.(t)},it={info:n=>jh(n,"info"),success:n=>jh(n,"success"),error:n=>jh(n,"error")},pf={progress:{lectures:{...hc},revisions:{...hc},tests:[],scheduledTests:[],history:[],activityLogs:[],syllabus:[],planner:[],schedule:[],reminders:[]},config:{...Wa},deadlines:{lectures:"2026-04-15",exam:"2026-09-30"},studyStartDate:Bn(),themeMode:"system",lastExported:null,edithMemory:"",edithChatSessions:[],activeEdithSessionId:null,isThinkingEnabled:!1,isWebSearchEnabled:!1,notificationsEnabled:!1,fullScreenEnabled:!1,pacingAlertThreshold:Hf,lastWelcomeShownDate:null,updatedAt:"1970-01-01T00:00:00.000Z",githubToken:null},mf="edith_state",Re=n=>{try{localStorage.setItem(mf,JSON.stringify(n))}catch{}},_y=()=>{try{const n=localStorage.getItem(mf);if(!n)return null;const e=JSON.parse(n);return e&&e.progress?r_(e):null}catch{return localStorage.removeItem(mf),null}},r_=n=>{const e={...pf},t=n,i={...Wa};if(t.config){for(const f of qf)if(t.config[f]){const g=Wa[f].parent;i[f]={...Wa[f],...t.config[f],group:Wa[f].group},g?i[f].parent=g:delete i[f].parent}}let o=e.deadlines;t.deadlines&&(o={lectures:t.deadlines.lectures||e.deadlines.lectures,exam:t.deadlines.exam||t.deadlines.g1||e.deadlines.exam});let l="system";t.themeMode?l=t.themeMode:typeof t.darkMode=="boolean"&&(l=t.darkMode?"dark":"light");const c=t.progress||{};return{...e,progress:{lectures:{...hc,...c.lectures||{}},revisions:{...hc,...c.revisions||{}},tests:Array.isArray(c.tests)?c.tests:[],scheduledTests:Array.isArray(c.scheduledTests)?c.scheduledTests:[],history:Array.isArray(c.history)?c.history.slice(-730):[],activityLogs:Array.isArray(c.activityLogs)?c.activityLogs.slice(0,t_):[],syllabus:Array.isArray(c.syllabus)?c.syllabus:[],planner:Array.isArray(c.planner)?c.planner:[],schedule:Array.isArray(c.schedule)?c.schedule:[],reminders:Array.isArray(c.reminders)?c.reminders:[]},config:i,deadlines:o,studyStartDate:t.studyStartDate||e.studyStartDate,themeMode:l,lastExported:t.lastExported||null,edithMemory:t.edithMemory||"",edithChatSessions:Array.isArray(t.edithChatSessions)?t.edithChatSessions:[],activeEdithSessionId:t.activeEdithSessionId||null,notificationsEnabled:t.notificationsEnabled??!1,fullScreenEnabled:t.fullScreenEnabled??!1,pacingAlertThreshold:t.pacingAlertThreshold??Hf,lastWelcomeShownDate:t.lastWelcomeShownDate||null,updatedAt:t.updatedAt||"1970-01-01T00:00:00.000Z",userName:t.userName||null,githubToken:t.githubToken||null}},is=(n,e)=>{const t={id:Or(),action:e,timestamp:new Date().toISOString()};n.progress.activityLogs=[t,...n.progress.activityLogs].slice(0,t_),n.updatedAt=new Date().toISOString()},ue=PT()(BT((n,e)=>({user:null,userProfile:null,syncStatus:"idle",authLoading:!0,authScreen:"login",data:_y()||{...pf},activeTab:"planner",activeGroup:"g1",showWelcomeModal:!1,showTodayModal:!1,showMobileMore:!1,toasts:[],pendingToolCall:null,setUser:i=>n(o=>{o.user=i}),setUserProfile:i=>n(o=>{o.userProfile=i}),setSyncStatus:i=>n(o=>{o.syncStatus=i}),setAuthLoading:i=>n(o=>{o.authLoading=i}),setAuthScreen:i=>n(o=>{o.authScreen=i}),setActiveTab:i=>n(o=>{o.activeTab=i,o.showMobileMore=!1}),setActiveGroup:i=>n(o=>{o.activeGroup=i}),setShowWelcomeModal:i=>n(o=>{o.showWelcomeModal=i}),setShowTodayModal:i=>n(o=>{o.showTodayModal=i}),setShowMobileMore:i=>n(o=>{o.showMobileMore=i}),setPendingToolCall:i=>n(o=>{o.pendingToolCall=i}),setData:i=>n(o=>{o.data=i,Re(i)}),updateProgress:(i,o,l)=>n(c=>{const f=c.data.config[o]?.[i]||0,g=Math.max(0,Math.min(f,l));c.data.progress[i][o]=g;const v=Bn(),_={lectures:{...c.data.progress.lectures},revisions:{...c.data.progress.revisions}},I=c.data.progress.history.findIndex(C=>C.date===v);I>=0?c.data.progress.history[I]={date:v,data:_}:c.data.progress.history.push({date:v,data:_}),c.data.progress.history=c.data.progress.history.slice(-730),is(c.data,`Updated ${i} for ${c.data.config[o]?.name} to ${g}`),Re(c.data)}),setDeadlines:i=>n(o=>{o.data.deadlines=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setThemeMode:i=>n(o=>{o.data.themeMode=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setLastExported:i=>n(o=>{o.data.lastExported=i,Re(o.data)}),setPacingAlertThreshold:i=>n(o=>{o.data.pacingAlertThreshold=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setNotificationsEnabled:i=>n(o=>{o.data.notificationsEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setFullScreenEnabled:i=>n(o=>{o.data.fullScreenEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),updateSubjectConfig:(i,o,l)=>n(c=>{c.data.config[i][o]=l,c.data.updatedAt=new Date().toISOString(),Re(c.data)}),setUserName:i=>n(o=>{o.userProfile&&(o.userProfile.name=i),o.data.userName=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),addSyllabusChapter:(i,o)=>n(l=>{const c={id:Or(),subject:i,name:o,status:"Not Started",priority:"Medium"};l.data.progress.syllabus.push(c),is(l.data,`Added Chapter: ${o} (${l.data.config[i]?.name})`),Re(l.data)}),updateSyllabusChapter:(i,o)=>n(l=>{const c=l.data.progress.syllabus.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteSyllabusChapter:i=>n(o=>{o.data.progress.syllabus=o.data.progress.syllabus.filter(l=>l.id!==i),is(o.data,"Deleted a Chapter from Syllabus"),Re(o.data)}),moveSyllabusChapter:(i,o)=>n(l=>{const c=l.data.progress.syllabus,f=c.findIndex(_=>_.id===i);if(f===-1)return;const g=c[f];let v=-1;if(o===-1){for(let _=f-1;_>=0;_--)if(c[_].subject===g.subject){v=_;break}}else for(let _=f+1;_<c.length;_++)if(c[_].subject===g.subject){v=_;break}v!==-1&&([c[f],c[v]]=[c[v],c[f]]),Re(l.data)}),updatePlannerEntry:i=>n(o=>{const l=o.data.progress.planner.findIndex(c=>c.date===i.date&&c.subject===i.subject);l>=0?o.data.progress.planner[l]={...i,id:i.id||o.data.progress.planner[l].id||Or()}:o.data.progress.planner.push({...i,id:i.id||Or()}),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),togglePlannerTick:(i,o)=>n(l=>{const c=l.data.progress.planner.find(f=>f.date===i&&f.subject===o);c&&c.note.trim()&&(c.ticked=!c.ticked,l.data.updatedAt=new Date().toISOString(),Re(l.data))}),addScheduleItem:i=>n(o=>{o.data.progress.schedule.push(i),is(o.data,`Added schedule: ${i.customTitle}`),Re(o.data)}),updateScheduleItem:(i,o)=>n(l=>{const c=l.data.progress.schedule.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteScheduleItem:i=>n(o=>{o.data.progress.schedule=o.data.progress.schedule.filter(l=>l.id!==i),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),toggleScheduleComplete:i=>n(o=>{const l=o.data.progress.schedule.find(c=>c.id===i);l&&(l.completed=!l.completed),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),addScheduledTest:i=>n(o=>{o.data.progress.scheduledTests.push(i),is(o.data,`Scheduled test: ${o.data.config[i.subject]?.name}`),Re(o.data)}),updateScheduledTest:(i,o)=>n(l=>{const c=l.data.progress.scheduledTests.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteScheduledTest:i=>n(o=>{o.data.progress.scheduledTests=o.data.progress.scheduledTests.filter(l=>l.id!==i),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),logTest:i=>n(o=>{o.data.progress.tests.unshift(i),is(o.data,`Logged test: ${o.data.config[i.subject]?.name} (${i.marksObtained}/${i.maxMarks})`),Re(o.data)}),addReminder:i=>n(o=>{o.data.progress.reminders.push(i),is(o.data,`Added reminder: ${i.title}`),Re(o.data)}),updateReminder:(i,o)=>n(l=>{const c=l.data.progress.reminders.find(f=>f.id===i);c&&Object.assign(c,o),l.data.updatedAt=new Date().toISOString(),Re(l.data)}),deleteReminder:i=>n(o=>{o.data.progress.reminders=o.data.progress.reminders.filter(l=>l.id!==i),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),toggleReminderComplete:i=>n(o=>{const l=o.data.progress.reminders.find(c=>c.id===i);l&&(l.completed=!l.completed),o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setEdithMemory:i=>n(o=>{o.data.edithMemory=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),addChatSession:i=>n(o=>{o.data.edithChatSessions.unshift(i),o.data.activeEdithSessionId=i.id,Re(o.data)}),addChatMessage:(i,o)=>n(l=>{const c=l.data.edithChatSessions.find(f=>f.id===i);c&&(c.messages.push(o),c.updatedAt=new Date().toISOString(),c.messages.length===1&&o.role==="user"&&(c.title=o.content.slice(0,40))),Re(l.data)}),setActiveEdithSessionId:i=>n(o=>{o.data.activeEdithSessionId=i}),setThinkingEnabled:i=>n(o=>{o.data.isThinkingEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),setWebSearchEnabled:i=>n(o=>{o.data.isWebSearchEnabled=i,o.data.updatedAt=new Date().toISOString(),Re(o.data)}),deleteChatSession:i=>n(o=>{o.data.edithChatSessions=o.data.edithChatSessions.filter(l=>l.id!==i),o.data.activeEdithSessionId===i&&(o.data.activeEdithSessionId=o.data.edithChatSessions[0]?.id||null),Re(o.data)}),addToast:i=>n(o=>{o.toasts=[...o.toasts,i].slice(-3)}),removeToast:i=>n(o=>{o.toasts=o.toasts.filter(l=>l.id!==i)}),clearAllData:(i=!1)=>n(o=>{o.data={...pf,deadlines:o.data.deadlines,themeMode:o.data.themeMode,lastExported:null,studyStartDate:Bn(),updatedAt:i?new Date().toISOString():"1970-01-01T00:00:00.000Z"},Re(o.data)}),importData:i=>n(o=>{o.data=r_(i),Re(o.data)}),setLastWelcomeShownDate:i=>n(o=>{o.data.lastWelcomeShownDate=i,Re(o.data)}),setGithubToken:i=>n(o=>{o.data.githubToken=i,Re(o.data)}),hydrateFromStorage:()=>{const i=_y();i&&n(o=>{o.data=i})}})));qT(n=>ue.getState().addToast(n));var wy={};/**
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
 */const i_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},HT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],g=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},s_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,g=o+2<n.length,v=g?n[o+2]:0,_=l>>2,I=(l&3)<<4|f>>4;let C=(f&15)<<2|v>>6,U=v&63;g||(U=64,c||(C=64)),i.push(t[_],t[I],t[C],t[U])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(i_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):HT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||v==null||I==null)throw new KT;const C=l<<2|f>>4;if(i.push(C),v!==64){const U=f<<4&240|v>>2;if(i.push(U),I!==64){const W=v<<6&192|I;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GT=function(n){const e=i_(n);return s_.encodeByteArray(e,!0)},fc=function(n){return GT(n).replace(/\./g,"")},o_=function(n){try{return s_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YT=()=>QT().__FIREBASE_DEFAULTS__,XT=()=>{if(typeof process>"u"||typeof wy>"u")return;const n=wy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},JT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&o_(n[1]);return e&&JSON.parse(e)},Lc=()=>{try{return YT()||XT()||JT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},a_=n=>{var e,t;return(t=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ZT=n=>{const e=a_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},l_=()=>{var n;return(n=Lc())===null||n===void 0?void 0:n.config},u_=n=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class eI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function tI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fc(JSON.stringify(t)),fc(JSON.stringify(c)),""].join(".")}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function rI(){var n;const e=(n=Lc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aI(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lI(){return!rI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function d_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function uI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const cI="FirebaseError";class fr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=cI,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?dI(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new fr(o,f,i)}}function dI(n,e){return n.replace(hI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const hI=/\{\$([^}]+)}/g;function fI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Ey(l)&&Ey(c)){if(!pc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ey(n){return n!==null&&typeof n=="object"}/**
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
 */function El(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function qa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ha(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function pI(n,e){const t=new mI(n,e);return t.subscribe.bind(t)}class mI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Uh),o.error===void 0&&(o.error=Uh),o.complete===void 0&&(o.complete=Uh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uh(){}/**
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
 */const os="[DEFAULT]";/**
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
 */class yI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new eI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vI(n){return n===os?void 0:n}function _I(n){return n.instantiationMode==="EAGER"}/**
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
 */class wI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const EI={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},TI=De.INFO,II={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},SI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=II[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kf{constructor(e){this.name=e,this._logLevel=TI,this._logHandler=SI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const AI=(n,e)=>e.some(t=>n instanceof t);let Ty,Iy;function kI(){return Ty||(Ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CI(){return Iy||(Iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h_=new WeakMap,gf=new WeakMap,f_=new WeakMap,zh=new WeakMap,Gf=new WeakMap;function PI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Fr(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&h_.set(t,n)}).catch(()=>{}),Gf.set(e,n),e}function RI(n){if(gf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});gf.set(n,e)}let yf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||f_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xI(n){yf=n(yf)}function bI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Bh(this),e,...t);return f_.set(i,e.sort?e.sort():[e]),Fr(i)}:CI().includes(n)?function(...e){return n.apply(Bh(this),e),Fr(h_.get(this))}:function(...e){return Fr(n.apply(Bh(this),e))}}function NI(n){return typeof n=="function"?bI(n):(n instanceof IDBTransaction&&RI(n),AI(n,kI())?new Proxy(n,yf):n)}function Fr(n){if(n instanceof IDBRequest)return PI(n);if(zh.has(n))return zh.get(n);const e=NI(n);return e!==n&&(zh.set(n,e),Gf.set(e,n)),e}const Bh=n=>Gf.get(n);function Mc(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=Fr(c);return i&&c.addEventListener("upgradeneeded",g=>{i(Fr(c.result),g.oldVersion,g.newVersion,Fr(c.transaction),g)}),t&&c.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}function $h(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Fr(t).then(()=>{})}const DI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],Wh=new Map;function Sy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wh.get(e))return Wh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=OI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||DI.includes(t)))return;const l=async function(c,...f){const g=this.transaction(c,o?"readwrite":"readonly");let v=g.store;return i&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return Wh.set(e,l),l}xI(n=>({...n,get:(e,t,i)=>Sy(e,t)||n.get(e,t,i),has:(e,t)=>!!Sy(e,t)||n.has(e,t)}));/**
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
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(MI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function MI(n){const e=n.getComponent();return e?.type==="VERSION"}const vf="@firebase/app",Ay="0.10.13";/**
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
 */const Ur=new Kf("@firebase/app"),VI="@firebase/app-compat",FI="@firebase/analytics-compat",jI="@firebase/analytics",UI="@firebase/app-check-compat",zI="@firebase/app-check",BI="@firebase/auth",$I="@firebase/auth-compat",WI="@firebase/database",qI="@firebase/data-connect",HI="@firebase/database-compat",KI="@firebase/functions",GI="@firebase/functions-compat",QI="@firebase/installations",YI="@firebase/installations-compat",XI="@firebase/messaging",JI="@firebase/messaging-compat",ZI="@firebase/performance",eS="@firebase/performance-compat",tS="@firebase/remote-config",nS="@firebase/remote-config-compat",rS="@firebase/storage",iS="@firebase/storage-compat",sS="@firebase/firestore",oS="@firebase/vertexai-preview",aS="@firebase/firestore-compat",lS="firebase",uS="10.14.1";/**
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
 */const _f="[DEFAULT]",cS={[vf]:"fire-core",[VI]:"fire-core-compat",[jI]:"fire-analytics",[FI]:"fire-analytics-compat",[zI]:"fire-app-check",[UI]:"fire-app-check-compat",[BI]:"fire-auth",[$I]:"fire-auth-compat",[WI]:"fire-rtdb",[qI]:"fire-data-connect",[HI]:"fire-rtdb-compat",[KI]:"fire-fn",[GI]:"fire-fn-compat",[QI]:"fire-iid",[YI]:"fire-iid-compat",[XI]:"fire-fcm",[JI]:"fire-fcm-compat",[ZI]:"fire-perf",[eS]:"fire-perf-compat",[tS]:"fire-rc",[nS]:"fire-rc-compat",[rS]:"fire-gcs",[iS]:"fire-gcs-compat",[sS]:"fire-fst",[aS]:"fire-fst-compat",[oS]:"fire-vertex","fire-js":"fire-js",[lS]:"fire-js-all"};/**
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
 */const mc=new Map,dS=new Map,wf=new Map;function ky(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(wf.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,n);for(const t of mc.values())ky(t,n);for(const t of dS.values())ky(t,n);return!0}function Fo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rr(n){return n.settings!==void 0}/**
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
 */const hS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Si=new Es("app","Firebase",hS);/**
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
 */class fS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Si.create("app-deleted",{appName:this._name})}}/**
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
 */const jo=uS;function p_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_f,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Si.create("bad-app-name",{appName:String(o)});if(t||(t=l_()),!t)throw Si.create("no-options");const l=mc.get(o);if(l){if(pc(t,l.options)&&pc(i,l.config))return l;throw Si.create("duplicate-app",{appName:o})}const c=new wI(o);for(const g of wf.values())c.addComponent(g);const f=new fS(t,i,c);return mc.set(o,f),f}function Qf(n=_f){const e=mc.get(n);if(!e&&n===_f&&l_())return p_();if(!e)throw Si.create("no-app",{appName:n});return e}function In(n,e,t){var i;let o=(i=cS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(f.join(" "));return}ur(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const pS="firebase-heartbeat-database",mS=1,sl="firebase-heartbeat-store";let qh=null;function m_(){return qh||(qh=Mc(pS,mS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Si.create("idb-open",{originalErrorMessage:n.message})})),qh}async function gS(n){try{const t=(await m_()).transaction(sl),i=await t.objectStore(sl).get(g_(n));return await t.done,i}catch(e){if(e instanceof fr)Ur.warn(e.message);else{const t=Si.create("idb-get",{originalErrorMessage:e?.message});Ur.warn(t.message)}}}async function Cy(n,e){try{const i=(await m_()).transaction(sl,"readwrite");await i.objectStore(sl).put(e,g_(n)),await i.done}catch(t){if(t instanceof fr)Ur.warn(t.message);else{const i=Si.create("idb-set",{originalErrorMessage:t?.message});Ur.warn(i.message)}}}function g_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yS=1024,vS=720*60*60*1e3;class _S{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ES(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Py();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=vS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Py(),{heartbeatsToSend:i,unsentEntries:o}=wS(this._heartbeatsCache.heartbeats),l=fc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Py(){return new Date().toISOString().substring(0,10)}function wS(n,e=yS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Ry(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ry(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ES{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?d_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ry(n){return fc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function TS(n){ur(new $n("platform-logger",e=>new LI(e),"PRIVATE")),ur(new $n("heartbeat",e=>new _S(e),"PRIVATE")),In(vf,Ay,n),In(vf,Ay,"esm2017"),In("fire-js","")}TS("");var IS="firebase",SS="10.14.1";/**
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
 */In(IS,SS,"app");function Yf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AS=y_,v_=new Es("auth","Firebase",y_());/**
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
 */const gc=new Kf("@firebase/auth");function kS(n,...e){gc.logLevel<=De.WARN&&gc.warn(`Auth (${jo}): ${n}`,...e)}function ec(n,...e){gc.logLevel<=De.ERROR&&gc.error(`Auth (${jo}): ${n}`,...e)}/**
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
 */function Wn(n,...e){throw Xf(n,...e)}function ir(n,...e){return Xf(n,...e)}function __(n,e,t){const i=Object.assign(Object.assign({},AS()),{[e]:t});return new Es("auth","Firebase",i).create(e,{appName:n.name})}function jr(n){return __(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return v_.create(n,...e)}function we(n,e,...t){if(!n)throw Xf(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ec(e),new Error(e)}function zr(n,e){n||Lr(e)}/**
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
 */function Ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function CS(){return xy()==="http:"||xy()==="https:"}function xy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function PS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CS()||sI()||"connection"in navigator)?navigator.onLine:!0}function RS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=nI()||oI()}get(){return PS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jf(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class w_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bS=new Tl(3e4,6e4);function Wr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pr(n,e,t,i,o={}){return E_(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=El(Object.assign({key:n.config.apiKey},c)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:g},l);return iI()||(v.referrerPolicy="no-referrer"),w_.fetch()(T_(n,n.config.apiHost,t,f),v)})}async function E_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},xS),e);try{const o=new DS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Qu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",c);if(g==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",c);if(g==="USER_DISABLED")throw Qu(n,"user-disabled",c);const _=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw __(n,_,v);Wn(n,_)}}catch(o){if(o instanceof fr)throw o;Wn(n,"network-request-failed",{message:String(o)})}}async function Il(n,e,t,i,o={}){const l=await pr(n,e,t,i,o);return"mfaPendingCredential"in l&&Wn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function T_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Jf(n.config,o):`${n.config.apiScheme}://${o}`}function NS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ir(this.auth,"network-request-failed")),bS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=ir(n,e,i);return o.customData._tokenResponse=t,o}function by(n){return n!==void 0&&n.enterprise!==void 0}class OS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return NS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function LS(n,e){return pr(n,"GET","/v2/recaptchaConfig",Wr(n,e))}/**
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
 */async function MS(n,e){return pr(n,"POST","/v1/accounts:delete",e)}async function I_(n,e){return pr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(n,e=!1){const t=Dt(n),i=await t.getIdToken(e),o=Zf(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l?.sign_in_provider;return{claims:o,token:i,authTime:Xa(Hh(o.auth_time)),issuedAtTime:Xa(Hh(o.iat)),expirationTime:Xa(Hh(o.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Hh(n){return Number(n)*1e3}function Zf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const o=o_(t);return o?JSON.parse(o):(ec("Failed to decode base64 JWT payload"),null)}catch(o){return ec("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ny(n){const e=Zf(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof fr&&FS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function FS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Po(n,I_(t,{idToken:i}));we(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?S_(l.providerUserInfo):[],f=zS(n.providerData,c),g=n.isAnonymous,v=!(n.email&&l.passwordHash)&&!f?.length,_=g?v:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Tf(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,I)}async function US(n){const e=Dt(n);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function S_(n){return n.map(e=>{var{providerId:t}=e,i=Yf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function BS(n,e){const t=await E_(n,{},async()=>{const i=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=T_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",w_.fetch()(c,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $S(n,e){return pr(n,"POST","/v2/accounts:revokeToken",Wr(n,e))}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ny(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Ny(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await BS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new To;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
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
 */function gi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Yf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Tf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Po(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VS(this,e)}reload(){return US(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await yc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(jr(this.auth));const e=await this.getIdToken();return await Po(this,MS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,f,g,v,_;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,W=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,M=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,Z=(v=t.createdAt)!==null&&v!==void 0?v:void 0,se=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:de,emailVerified:me,isAnonymous:Oe,providerData:ge,stsTokenManager:x}=t;we(de&&x,e,"internal-error");const T=To.fromJSON(this.name,x);we(typeof de=="string",e,"internal-error"),gi(I,e.name),gi(C,e.name),we(typeof me=="boolean",e,"internal-error"),we(typeof Oe=="boolean",e,"internal-error"),gi(U,e.name),gi(W,e.name),gi($,e.name),gi(M,e.name),gi(Z,e.name),gi(se,e.name);const k=new Mr({uid:de,auth:e,email:C,emailVerified:me,displayName:I,isAnonymous:Oe,photoURL:W,phoneNumber:U,tenantId:$,stsTokenManager:T,createdAt:Z,lastLoginAt:se});return ge&&Array.isArray(ge)&&(k.providerData=ge.map(R=>Object.assign({},R))),M&&(k._redirectEventId=M),k}static async _fromIdTokenResponse(e,t,i=!1){const o=new To;o.updateFromServerResponse(t);const l=new Mr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await yc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?S_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!l?.length,f=new To;f.updateFromIdToken(i);const g=new Mr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Tf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(g,v),g}}/**
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
 */const Dy=new Map;function Vr(n){zr(n instanceof Function,"Expected a class definition");let e=Dy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dy.set(n,e),e)}/**
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
 */class A_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}A_.type="NONE";const Oy=A_;/**
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
 */function tc(n,e,t){return`firebase:${n}:${e}:${t}`}class Io{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=tc(this.userKey,o.apiKey,l),this.fullPersistenceKey=tc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Io(Vr(Oy),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Vr(Oy);const c=tc(i,e.config.apiKey,e.name);let f=null;for(const v of t)try{const _=await v._get(c);if(_){const I=Mr._fromJSON(e,_);v!==l&&(f=I),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Io(l,e,i):(l=g[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(c)}catch{}})),new Io(l,e,i))}}/**
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
 */function Ly(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(R_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b_(e))return"Blackberry";if(N_(e))return"Webos";if(C_(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(x_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function k_(n=Bt()){return/firefox\//i.test(n)}function C_(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(n=Bt()){return/crios\//i.test(n)}function R_(n=Bt()){return/iemobile/i.test(n)}function x_(n=Bt()){return/android/i.test(n)}function b_(n=Bt()){return/blackberry/i.test(n)}function N_(n=Bt()){return/webos/i.test(n)}function ep(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WS(n=Bt()){var e;return ep(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qS(){return aI()&&document.documentMode===10}function D_(n=Bt()){return ep(n)||x_(n)||N_(n)||b_(n)||/windows phone/i.test(n)||R_(n)}/**
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
 */function O_(n,e=[]){let t;switch(n){case"Browser":t=Ly(Bt());break;case"Worker":t=`${Ly(Bt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jo}/${i}`}/**
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
 */class HS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const g=e(l);c(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function KS(n,e={}){return pr(n,"GET","/v2/passwordPolicy",Wr(n,e))}/**
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
 */const GS=6;class QS{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:GS,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(c=g.containsNumericCharacter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class YS{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new My(this),this.idTokenSubscription=new My(this),this.beforeStateQueue=new HS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await I_(this,{idToken:e}),i=await Mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!c||c===f)&&g?.user&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(jr(this));const t=e?Dt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KS(this),t=new QS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $S(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{c=!0,g()}}else{const g=e.addObserver(t);return()=>{c=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&kS(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ri(n){return Dt(n)}class My{constructor(e){this.auth=e,this.observer=null,this.addObserver=pI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XS(n){Vc=n}function L_(n){return Vc.loadJS(n)}function JS(){return Vc.recaptchaEnterpriseScript}function ZS(){return Vc.gapiScript}function eA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tA="recaptcha-enterprise",nA="NO_RECAPTCHA";class rA{constructor(e){this.type=tA,this.auth=Ri(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{LS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new OS(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,c(v.siteKey)}}).catch(g=>{f(g)})})}function o(l,c,f){const g=window.grecaptcha;by(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{c(v)}).catch(()=>{c(nA)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&by(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let g=JS();g.length!==0&&(g+=f),L_(g).then(()=>{o(f,l,c)}).catch(v=>{c(v)})}}).catch(f=>{c(f)})})}}async function Vy(n,e,t,i=!1){const o=new rA(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function vc(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Vy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Vy(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
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
 */function iA(n,e){const t=Fo(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(pc(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function sA(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Vr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function oA(n,e,t){const i=Ri(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=M_(e),{host:c,port:f}=aA(e),g=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${c}${g}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),lA()}function M_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aA(n){const e=M_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Fy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Fy(c)}}}function Fy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class tp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function uA(n,e){return pr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cA(n,e){return Il(n,"POST","/v1/accounts:signInWithPassword",Wr(n,e))}async function dA(n,e){return pr(n,"POST","/v1/accounts:sendOobCode",Wr(n,e))}async function hA(n,e){return dA(n,e)}/**
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
 */async function fA(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Wr(n,e))}async function pA(n,e){return Il(n,"POST","/v1/accounts:signInWithEmailLink",Wr(n,e))}/**
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
 */class ol extends tp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ol(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ol(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vc(e,t,"signInWithPassword",cA);case"emailLink":return fA(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vc(e,i,"signUpPassword",uA);case"emailLink":return pA(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function So(n,e){return Il(n,"POST","/v1/accounts:signInWithIdp",Wr(n,e))}/**
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
 */const mA="http://localhost";class ps extends tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Yf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ps(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,So(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:mA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
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
 */function gA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yA(n){const e=qa(Ha(n)).link,t=e?qa(Ha(e)).deep_link_id:null,i=qa(Ha(n)).deep_link_id;return(i?qa(Ha(i)).link:null)||i||t||e||n}class np{constructor(e){var t,i,o,l,c,f;const g=qa(Ha(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,_=(i=g.oobCode)!==null&&i!==void 0?i:null,I=gA((o=g.mode)!==null&&o!==void 0?o:null);we(v&&_&&I,"argument-error"),this.apiKey=v,this.operation=I,this.code=_,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=g.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=yA(e);try{return new np(t)}catch{return null}}}/**
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
 */class Uo{constructor(){this.providerId=Uo.PROVIDER_ID}static credential(e,t){return ol._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=np.parseLink(t);return we(i,"argument-error"),ol._fromEmailAndCode(e,i.code,i.tenantId)}}Uo.PROVIDER_ID="password";Uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class V_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sl extends V_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yi extends Sl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
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
 */class vi extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ps._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
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
 */class _i extends Sl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
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
 */class wi extends Sl{constructor(){super("twitter.com")}static credential(e,t){return ps._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wi.credential(t,i)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
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
 */async function vA(n,e){return Il(n,"POST","/v1/accounts:signUp",Wr(n,e))}/**
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
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Mr._fromIdTokenResponse(e,i,o),c=jy(i);return new ms({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=jy(i);return new ms({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function jy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class _c extends fr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new _c(e,t,i,o)}}function F_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(n,l,e,i):l})}async function _A(n,e,t=!1){const i=await Po(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ms._forOperation(n,"link",i)}/**
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
 */async function wA(n,e,t=!1){const{auth:i}=n;if(rr(i.app))return Promise.reject(jr(i));const o="reauthenticate";try{const l=await Po(n,F_(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=Zf(l.idToken);we(c,i,"internal-error");const{sub:f}=c;return we(n.uid===f,i,"user-mismatch"),ms._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
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
 */async function j_(n,e,t=!1){if(rr(n.app))return Promise.reject(jr(n));const i="signIn",o=await F_(n,i,e),l=await ms._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function EA(n,e){return j_(Ri(n),e)}/**
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
 */async function U_(n){const e=Ri(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TA(n,e,t){const i=Ri(n);await vc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",hA)}async function IA(n,e,t){if(rr(n.app))return Promise.reject(jr(n));const i=Ri(n),c=await vc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vA).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&U_(n),g}),f=await ms._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function SA(n,e,t){return rr(n.app)?Promise.reject(jr(n)):EA(Dt(n),Uo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&U_(n),i})}/**
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
 */async function AA(n,e){return pr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function kA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Dt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Po(i,AA(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const f=i.providerData.find(({providerId:g})=>g==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function CA(n,e,t,i){return Dt(n).onIdTokenChanged(e,t,i)}function PA(n,e,t){return Dt(n).beforeAuthStateChanged(e,t)}function RA(n,e,t,i){return Dt(n).onAuthStateChanged(e,t,i)}function xA(n){return Dt(n).signOut()}const wc="__sak";/**
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
 */class z_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bA=1e3,NA=10;class B_ extends z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=D_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,g)=>{this.notifyListeners(c,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);qS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,NA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}B_.type="LOCAL";const DA=B_;/**
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
 */class $_ extends z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$_.type="SESSION";const W_=$_;/**
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
 */function OA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Fc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async v=>v(t.origin,l)),g=await OA(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
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
 */function rp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,g)=>{const v=rp("",20);o.port1.start();const _=setTimeout(()=>{g(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(I){const C=I;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(_),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function sr(){return window}function MA(n){sr().location.href=n}/**
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
 */function q_(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function VA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FA(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jA(){return q_()?self:null}/**
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
 */const H_="firebaseLocalStorageDb",UA=1,Ec="firebaseLocalStorage",K_="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jc(n,e){return n.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function zA(){const n=indexedDB.deleteDatabase(H_);return new Al(n).toPromise()}function If(){const n=indexedDB.open(H_,UA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ec,{keyPath:K_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ec)?e(i):(i.close(),await zA(),e(await If()))})})}async function Uy(n,e,t){const i=jc(n,!0).put({[K_]:e,value:t});return new Al(i).toPromise()}async function BA(n,e){const t=jc(n,!1).get(e),i=await new Al(t).toPromise();return i===void 0?null:i.value}function zy(n,e){const t=jc(n,!0).delete(e);return new Al(t).toPromise()}const $A=800,WA=3;class G_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>WA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(jA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await VA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await Uy(e,wc,"1"),await zy(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Uy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>BA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=jc(o,!1).getAll();return new Al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G_.type="LOCAL";const qA=G_;new Tl(3e4,6e4);/**
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
 */function HA(n,e){return e?Vr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ip extends tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function KA(n){return j_(n.auth,new ip(n),n.bypassAuthState)}function GA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),wA(t,new ip(n),n.bypassAuthState)}async function QA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),_A(t,new ip(n),n.bypassAuthState)}/**
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
 */class Q_{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KA;case"linkViaPopup":case"linkViaRedirect":return QA;case"reauthViaPopup":case"reauthViaRedirect":return GA;default:Wn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YA=new Tl(2e3,1e4);class wo extends Q_{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YA.get())};e()}}wo.currentPopupAction=null;/**
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
 */const XA="pendingRedirect",nc=new Map;class JA extends Q_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const i=await ZA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZA(n,e){const t=nk(e),i=tk(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function ek(n,e){nc.set(n._key(),e)}function tk(n){return Vr(n._redirectPersistence)}function nk(n){return tc(XA,n.config.apiKey,n.name)}async function rk(n,e,t=!1){if(rr(n.app))return Promise.reject(jr(n));const i=Ri(n),o=HA(i,e),c=await new JA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const ik=600*1e3;class sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ok(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Y_(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ik&&this.cachedEventUids.clear(),this.cachedEventUids.has(By(e))}saveEventToCache(e){this.cachedEventUids.add(By(e)),this.lastProcessedEventTime=Date.now()}}function By(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Y_({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ok(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y_(n);default:return!1}}/**
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
 */async function ak(n,e={}){return pr(n,"GET","/v1/projects",e)}/**
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
 */const lk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uk=/^https?/;async function ck(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ak(n);for(const t of e)try{if(dk(t))return}catch{}Wn(n,"unauthorized-domain")}function dk(n){const e=Ef(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!uk.test(t))return!1;if(lk.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const hk=new Tl(3e4,6e4);function $y(){const n=sr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fk(n){return new Promise((e,t)=>{var i,o,l;function c(){$y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$y(),t(ir(n,"network-request-failed"))},timeout:hk.get()})}if(!((o=(i=sr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)c();else{const f=eA("iframefcb");return sr()[f]=()=>{gapi.load?c():t(ir(n,"network-request-failed"))},L_(`${ZS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw rc=null,e})}let rc=null;function pk(n){return rc=rc||fk(n),rc}/**
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
 */const mk=new Tl(5e3,15e3),gk="__/auth/iframe",yk="emulator/auth/iframe",vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_k=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wk(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jf(e,yk):`https://${n.config.authDomain}/${gk}`,i={apiKey:e.apiKey,appName:n.name,v:jo},o=_k.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${El(i).slice(1)}`}async function Ek(n){const e=await pk(n),t=sr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:wk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=ir(n,"network-request-failed"),f=sr().setTimeout(()=>{l(c)},mk.get());function g(){sr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(c)})}))}/**
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
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ik=500,Sk=600,Ak="_blank",kk="http://localhost";class Wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ck(n,e,t,i=Ik,o=Sk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},Tk),{width:i.toString(),height:o.toString(),top:l,left:c}),v=Bt().toLowerCase();t&&(f=P_(v)?Ak:t),k_(v)&&(e=e||kk,g.scrollbars="yes");const _=Object.entries(g).reduce((C,[U,W])=>`${C}${U}=${W},`,"");if(WS(v)&&f!=="_self")return Pk(e||"",f),new Wy(null);const I=window.open(e||"",f,_);we(I,n,"popup-blocked");try{I.focus()}catch{}return new Wy(I)}function Pk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Rk="__/auth/handler",xk="emulator/auth/handler",bk=encodeURIComponent("fac");async function qy(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:jo,eventId:o};if(e instanceof V_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",fI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,I]of Object.entries({}))c[_]=I}if(e instanceof Sl){const _=e.getScopes().filter(I=>I!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const g=await n._getAppCheckToken(),v=g?`#${bk}=${encodeURIComponent(g)}`:"";return`${Nk(n)}?${El(f).slice(1)}${v}`}function Nk({config:n}){return n.emulator?Jf(n,xk):`https://${n.authDomain}/${Rk}`}/**
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
 */const Kh="webStorageSupport";class Dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W_,this._completeRedirectFn=rk,this._overrideRedirectResult=ek}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await qy(e,t,i,Ef(),o);return Ck(e,c,rp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await qy(e,t,i,Ef(),o);return MA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Ek(e),i=new sk(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kh,{type:Kh},o=>{var l;const c=(l=o?.[0])===null||l===void 0?void 0:l[Kh];c!==void 0&&t(!!c),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ck(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return D_()||C_()||ep()}}const Ok=Dk;var Hy="@firebase/auth",Ky="1.7.9";/**
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
 */class Lk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vk(n){ur(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O_(n)},v=new YS(i,o,l,g);return sA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new $n("auth-internal",e=>{const t=Ri(e.getProvider("auth").getImmediate());return(i=>new Lk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Hy,Ky,Mk(n)),In(Hy,Ky,"esm2017")}/**
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
 */const Fk=300,jk=u_("authIdTokenMaxAge")||Fk;let Gy=null;const Uk=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>jk)return;const o=t?.token;Gy!==o&&(Gy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function zk(n=Qf()){const e=Fo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iA(n,{popupRedirectResolver:Ok,persistence:[qA,DA,W_]}),i=u_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=Uk(l.toString());PA(t,c,()=>c(t.currentUser)),CA(t,f=>c(f))}}const o=a_("auth");return o&&oA(t,`http://${o}`),t}function Bk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}XS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Bk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vk("Browser");var Qy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var us,X_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,T){function k(){}k.prototype=T.prototype,x.D=T.prototype,x.prototype=new k,x.prototype.constructor=x,x.C=function(R,b,O){for(var A=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)A[ke-2]=arguments[ke];return T.prototype[b].apply(R,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,T,k){k||(k=0);var R=Array(16);if(typeof T=="string")for(var b=0;16>b;++b)R[b]=T.charCodeAt(k++)|T.charCodeAt(k++)<<8|T.charCodeAt(k++)<<16|T.charCodeAt(k++)<<24;else for(b=0;16>b;++b)R[b]=T[k++]|T[k++]<<8|T[k++]<<16|T[k++]<<24;T=x.g[0],k=x.g[1],b=x.g[2];var O=x.g[3],A=T+(O^k&(b^O))+R[0]+3614090360&4294967295;T=k+(A<<7&4294967295|A>>>25),A=O+(b^T&(k^b))+R[1]+3905402710&4294967295,O=T+(A<<12&4294967295|A>>>20),A=b+(k^O&(T^k))+R[2]+606105819&4294967295,b=O+(A<<17&4294967295|A>>>15),A=k+(T^b&(O^T))+R[3]+3250441966&4294967295,k=b+(A<<22&4294967295|A>>>10),A=T+(O^k&(b^O))+R[4]+4118548399&4294967295,T=k+(A<<7&4294967295|A>>>25),A=O+(b^T&(k^b))+R[5]+1200080426&4294967295,O=T+(A<<12&4294967295|A>>>20),A=b+(k^O&(T^k))+R[6]+2821735955&4294967295,b=O+(A<<17&4294967295|A>>>15),A=k+(T^b&(O^T))+R[7]+4249261313&4294967295,k=b+(A<<22&4294967295|A>>>10),A=T+(O^k&(b^O))+R[8]+1770035416&4294967295,T=k+(A<<7&4294967295|A>>>25),A=O+(b^T&(k^b))+R[9]+2336552879&4294967295,O=T+(A<<12&4294967295|A>>>20),A=b+(k^O&(T^k))+R[10]+4294925233&4294967295,b=O+(A<<17&4294967295|A>>>15),A=k+(T^b&(O^T))+R[11]+2304563134&4294967295,k=b+(A<<22&4294967295|A>>>10),A=T+(O^k&(b^O))+R[12]+1804603682&4294967295,T=k+(A<<7&4294967295|A>>>25),A=O+(b^T&(k^b))+R[13]+4254626195&4294967295,O=T+(A<<12&4294967295|A>>>20),A=b+(k^O&(T^k))+R[14]+2792965006&4294967295,b=O+(A<<17&4294967295|A>>>15),A=k+(T^b&(O^T))+R[15]+1236535329&4294967295,k=b+(A<<22&4294967295|A>>>10),A=T+(b^O&(k^b))+R[1]+4129170786&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^b&(T^k))+R[6]+3225465664&4294967295,O=T+(A<<9&4294967295|A>>>23),A=b+(T^k&(O^T))+R[11]+643717713&4294967295,b=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(b^O))+R[0]+3921069994&4294967295,k=b+(A<<20&4294967295|A>>>12),A=T+(b^O&(k^b))+R[5]+3593408605&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^b&(T^k))+R[10]+38016083&4294967295,O=T+(A<<9&4294967295|A>>>23),A=b+(T^k&(O^T))+R[15]+3634488961&4294967295,b=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(b^O))+R[4]+3889429448&4294967295,k=b+(A<<20&4294967295|A>>>12),A=T+(b^O&(k^b))+R[9]+568446438&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^b&(T^k))+R[14]+3275163606&4294967295,O=T+(A<<9&4294967295|A>>>23),A=b+(T^k&(O^T))+R[3]+4107603335&4294967295,b=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(b^O))+R[8]+1163531501&4294967295,k=b+(A<<20&4294967295|A>>>12),A=T+(b^O&(k^b))+R[13]+2850285829&4294967295,T=k+(A<<5&4294967295|A>>>27),A=O+(k^b&(T^k))+R[2]+4243563512&4294967295,O=T+(A<<9&4294967295|A>>>23),A=b+(T^k&(O^T))+R[7]+1735328473&4294967295,b=O+(A<<14&4294967295|A>>>18),A=k+(O^T&(b^O))+R[12]+2368359562&4294967295,k=b+(A<<20&4294967295|A>>>12),A=T+(k^b^O)+R[5]+4294588738&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^b)+R[8]+2272392833&4294967295,O=T+(A<<11&4294967295|A>>>21),A=b+(O^T^k)+R[11]+1839030562&4294967295,b=O+(A<<16&4294967295|A>>>16),A=k+(b^O^T)+R[14]+4259657740&4294967295,k=b+(A<<23&4294967295|A>>>9),A=T+(k^b^O)+R[1]+2763975236&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^b)+R[4]+1272893353&4294967295,O=T+(A<<11&4294967295|A>>>21),A=b+(O^T^k)+R[7]+4139469664&4294967295,b=O+(A<<16&4294967295|A>>>16),A=k+(b^O^T)+R[10]+3200236656&4294967295,k=b+(A<<23&4294967295|A>>>9),A=T+(k^b^O)+R[13]+681279174&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^b)+R[0]+3936430074&4294967295,O=T+(A<<11&4294967295|A>>>21),A=b+(O^T^k)+R[3]+3572445317&4294967295,b=O+(A<<16&4294967295|A>>>16),A=k+(b^O^T)+R[6]+76029189&4294967295,k=b+(A<<23&4294967295|A>>>9),A=T+(k^b^O)+R[9]+3654602809&4294967295,T=k+(A<<4&4294967295|A>>>28),A=O+(T^k^b)+R[12]+3873151461&4294967295,O=T+(A<<11&4294967295|A>>>21),A=b+(O^T^k)+R[15]+530742520&4294967295,b=O+(A<<16&4294967295|A>>>16),A=k+(b^O^T)+R[2]+3299628645&4294967295,k=b+(A<<23&4294967295|A>>>9),A=T+(b^(k|~O))+R[0]+4096336452&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~b))+R[7]+1126891415&4294967295,O=T+(A<<10&4294967295|A>>>22),A=b+(T^(O|~k))+R[14]+2878612391&4294967295,b=O+(A<<15&4294967295|A>>>17),A=k+(O^(b|~T))+R[5]+4237533241&4294967295,k=b+(A<<21&4294967295|A>>>11),A=T+(b^(k|~O))+R[12]+1700485571&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~b))+R[3]+2399980690&4294967295,O=T+(A<<10&4294967295|A>>>22),A=b+(T^(O|~k))+R[10]+4293915773&4294967295,b=O+(A<<15&4294967295|A>>>17),A=k+(O^(b|~T))+R[1]+2240044497&4294967295,k=b+(A<<21&4294967295|A>>>11),A=T+(b^(k|~O))+R[8]+1873313359&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~b))+R[15]+4264355552&4294967295,O=T+(A<<10&4294967295|A>>>22),A=b+(T^(O|~k))+R[6]+2734768916&4294967295,b=O+(A<<15&4294967295|A>>>17),A=k+(O^(b|~T))+R[13]+1309151649&4294967295,k=b+(A<<21&4294967295|A>>>11),A=T+(b^(k|~O))+R[4]+4149444226&4294967295,T=k+(A<<6&4294967295|A>>>26),A=O+(k^(T|~b))+R[11]+3174756917&4294967295,O=T+(A<<10&4294967295|A>>>22),A=b+(T^(O|~k))+R[2]+718787259&4294967295,b=O+(A<<15&4294967295|A>>>17),A=k+(O^(b|~T))+R[9]+3951481745&4294967295,x.g[0]=x.g[0]+T&4294967295,x.g[1]=x.g[1]+(b+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+b&4294967295,x.g[3]=x.g[3]+O&4294967295}i.prototype.u=function(x,T){T===void 0&&(T=x.length);for(var k=T-this.blockSize,R=this.B,b=this.h,O=0;O<T;){if(b==0)for(;O<=k;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<T;)if(R[b++]=x.charCodeAt(O++),b==this.blockSize){o(this,R),b=0;break}}else for(;O<T;)if(R[b++]=x[O++],b==this.blockSize){o(this,R),b=0;break}}this.h=b,this.o+=T},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var T=1;T<x.length-8;++T)x[T]=0;var k=8*this.o;for(T=x.length-8;T<x.length;++T)x[T]=k&255,k/=256;for(this.u(x),x=Array(16),T=k=0;4>T;++T)for(var R=0;32>R;R+=8)x[k++]=this.g[T]>>>R&255;return x};function l(x,T){var k=f;return Object.prototype.hasOwnProperty.call(k,x)?k[x]:k[x]=T(x)}function c(x,T){this.h=T;for(var k=[],R=!0,b=x.length-1;0<=b;b--){var O=x[b]|0;R&&O==T||(k[b]=O,R=!1)}this.g=k}var f={};function g(x){return-128<=x&&128>x?l(x,function(T){return new c([T|0],0>T?-1:0)}):new c([x|0],0>x?-1:0)}function v(x){if(isNaN(x)||!isFinite(x))return I;if(0>x)return M(v(-x));for(var T=[],k=1,R=0;x>=k;R++)T[R]=x/k|0,k*=4294967296;return new c(T,0)}function _(x,T){if(x.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x.charAt(0)=="-")return M(_(x.substring(1),T));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=v(Math.pow(T,8)),R=I,b=0;b<x.length;b+=8){var O=Math.min(8,x.length-b),A=parseInt(x.substring(b,b+O),T);8>O?(O=v(Math.pow(T,O)),R=R.j(O).add(v(A))):(R=R.j(k),R=R.add(v(A)))}return R}var I=g(0),C=g(1),U=g(16777216);n=c.prototype,n.m=function(){if($(this))return-M(this).m();for(var x=0,T=1,k=0;k<this.g.length;k++){var R=this.i(k);x+=(0<=R?R:4294967296+R)*T,T*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(W(this))return"0";if($(this))return"-"+M(this).toString(x);for(var T=v(Math.pow(x,6)),k=this,R="";;){var b=me(k,T).g;k=Z(k,b.j(T));var O=((0<k.g.length?k.g[0]:k.h)>>>0).toString(x);if(k=b,W(k))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function W(x){if(x.h!=0)return!1;for(var T=0;T<x.g.length;T++)if(x.g[T]!=0)return!1;return!0}function $(x){return x.h==-1}n.l=function(x){return x=Z(this,x),$(x)?-1:W(x)?0:1};function M(x){for(var T=x.g.length,k=[],R=0;R<T;R++)k[R]=~x.g[R];return new c(k,~x.h).add(C)}n.abs=function(){return $(this)?M(this):this},n.add=function(x){for(var T=Math.max(this.g.length,x.g.length),k=[],R=0,b=0;b<=T;b++){var O=R+(this.i(b)&65535)+(x.i(b)&65535),A=(O>>>16)+(this.i(b)>>>16)+(x.i(b)>>>16);R=A>>>16,O&=65535,A&=65535,k[b]=A<<16|O}return new c(k,k[k.length-1]&-2147483648?-1:0)};function Z(x,T){return x.add(M(T))}n.j=function(x){if(W(this)||W(x))return I;if($(this))return $(x)?M(this).j(M(x)):M(M(this).j(x));if($(x))return M(this.j(M(x)));if(0>this.l(U)&&0>x.l(U))return v(this.m()*x.m());for(var T=this.g.length+x.g.length,k=[],R=0;R<2*T;R++)k[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<x.g.length;b++){var O=this.i(R)>>>16,A=this.i(R)&65535,ke=x.i(b)>>>16,$e=x.i(b)&65535;k[2*R+2*b]+=A*$e,se(k,2*R+2*b),k[2*R+2*b+1]+=O*$e,se(k,2*R+2*b+1),k[2*R+2*b+1]+=A*ke,se(k,2*R+2*b+1),k[2*R+2*b+2]+=O*ke,se(k,2*R+2*b+2)}for(R=0;R<T;R++)k[R]=k[2*R+1]<<16|k[2*R];for(R=T;R<2*T;R++)k[R]=0;return new c(k,0)};function se(x,T){for(;(x[T]&65535)!=x[T];)x[T+1]+=x[T]>>>16,x[T]&=65535,T++}function de(x,T){this.g=x,this.h=T}function me(x,T){if(W(T))throw Error("division by zero");if(W(x))return new de(I,I);if($(x))return T=me(M(x),T),new de(M(T.g),M(T.h));if($(T))return T=me(x,M(T)),new de(M(T.g),T.h);if(30<x.g.length){if($(x)||$(T))throw Error("slowDivide_ only works with positive integers.");for(var k=C,R=T;0>=R.l(x);)k=Oe(k),R=Oe(R);var b=ge(k,1),O=ge(R,1);for(R=ge(R,2),k=ge(k,2);!W(R);){var A=O.add(R);0>=A.l(x)&&(b=b.add(k),O=A),R=ge(R,1),k=ge(k,1)}return T=Z(x,b.j(T)),new de(b,T)}for(b=I;0<=x.l(T);){for(k=Math.max(1,Math.floor(x.m()/T.m())),R=Math.ceil(Math.log(k)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=v(k),A=O.j(T);$(A)||0<A.l(x);)k-=R,O=v(k),A=O.j(T);W(O)&&(O=C),b=b.add(O),x=Z(x,A)}return new de(b,x)}n.A=function(x){return me(this,x).h},n.and=function(x){for(var T=Math.max(this.g.length,x.g.length),k=[],R=0;R<T;R++)k[R]=this.i(R)&x.i(R);return new c(k,this.h&x.h)},n.or=function(x){for(var T=Math.max(this.g.length,x.g.length),k=[],R=0;R<T;R++)k[R]=this.i(R)|x.i(R);return new c(k,this.h|x.h)},n.xor=function(x){for(var T=Math.max(this.g.length,x.g.length),k=[],R=0;R<T;R++)k[R]=this.i(R)^x.i(R);return new c(k,this.h^x.h)};function Oe(x){for(var T=x.g.length+1,k=[],R=0;R<T;R++)k[R]=x.i(R)<<1|x.i(R-1)>>>31;return new c(k,x.h)}function ge(x,T){var k=T>>5;T%=32;for(var R=x.g.length-k,b=[],O=0;O<R;O++)b[O]=0<T?x.i(O+k)>>>T|x.i(O+k+1)<<32-T:x.i(O+k);return new c(b,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,X_=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=_,us=c}).apply(typeof Qy<"u"?Qy:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var J_,Ka,Z_,ic,Sf,ew,tw,nw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var V=u[E];if(!(V in y))break e;y=y[V]}u=u[u.length-1],E=y[u],p=p(E),p!=E&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,E=!1,V={next:function(){if(!E&&y<u.length){var B=y++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function _(u,p,y){return u.call.apply(u.bind,arguments)}function I(u,p,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,E),u.apply(p,V)}}return function(){return u.apply(p,arguments)}}function C(u,p,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,C.apply(null,arguments)}function U(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function W(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,V,B){for(var J=Array(arguments.length-2),We=2;We<arguments.length;We++)J[We-2]=arguments[We];return p.prototype[V].apply(E,J)}}function $(u){const p=u.length;if(0<p){const y=Array(p);for(let E=0;E<p;E++)y[E]=u[E];return y}return[]}function M(u,p){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const V=u.length||0,B=E.length||0;u.length=V+B;for(let J=0;J<B;J++)u[V+J]=E[J]}else u.push(E)}}class Z{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function se(u){return/^[\s\xa0]*$/.test(u)}function de(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function me(u){return me[" "](u),u}me[" "]=function(){};var Oe=de().indexOf("Gecko")!=-1&&!(de().toLowerCase().indexOf("webkit")!=-1&&de().indexOf("Edge")==-1)&&!(de().indexOf("Trident")!=-1||de().indexOf("MSIE")!=-1)&&de().indexOf("Edge")==-1;function ge(u,p,y){for(const E in u)p.call(y,u[E],E,u)}function x(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function T(u){const p={};for(const y in u)p[y]=u[y];return p}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,p){let y,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(y in E)u[y]=E[y];for(let B=0;B<k.length;B++)y=k[B],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function b(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function O(u){f.setTimeout(()=>{throw u},0)}function A(){var u=he;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class ke{constructor(){this.h=this.g=null}add(p,y){const E=$e.get();E.set(p,y),this.h?this.h.next=E:this.g=E,this.h=E}}var $e=new Z(()=>new ot,u=>u.reset());class ot{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,ee=!1,he=new ke,ne=()=>{const u=f.Promise.resolve(void 0);xe=()=>{u.then(L)}};var L=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){O(y)}var p=$e;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Ce(u,p){if(ce.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Oe){e:{try{me(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Le[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}W(Ce,ce);var Le={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Be=0;function Ke(u,p,y,E,V){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!E,this.ha=V,this.key=++Be,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function mr(u){this.src=u,this.g={},this.h=0}mr.prototype.add=function(u,p,y,E,V){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var J=qr(u,p,E,V);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new Ke(p,this.src,B,!!E,V),p.fa=y,u.push(p)),p};function Ss(u,p){var y=p.type;if(y in u.g){var E=u.g[y],V=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=V)&&Array.prototype.splice.call(E,V,1),B&&(wt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function qr(u,p,y,E){for(var V=0;V<u.length;++V){var B=u[V];if(!B.da&&B.listener==p&&B.capture==!!y&&B.ha==E)return V}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),As={};function qo(u,p,y,E,V){if(Array.isArray(p)){for(var B=0;B<p.length;B++)qo(u,p[B],y,E,V);return null}return y=Go(y),u&&u[ze]?u.K(p,y,v(E)?!!E.capture:!1,V):Ho(u,p,y,!1,E,V)}function Ho(u,p,y,E,V,B){if(!p)throw Error("Invalid event type");var J=v(V)?!!V.capture:!!V,We=Cs(u);if(We||(u[xi]=We=new mr(u)),y=We.add(p,y,E,J,B),y.proxy)return y;if(E=Nl(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ae||(V=J),V===void 0&&(V=!1),u.addEventListener(p.toString(),E,V);else if(u.attachEvent)u.attachEvent(yr(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Nl(){function u(y){return p.call(u.src,u.listener,y)}const p=Ko;return u}function ks(u,p,y,E,V){if(Array.isArray(p))for(var B=0;B<p.length;B++)ks(u,p[B],y,E,V);else E=v(E)?!!E.capture:!!E,y=Go(y),u&&u[ze]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],y=qr(B,y,E,V),-1<y&&(wt(B[y]),Array.prototype.splice.call(B,y,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Cs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=qr(p,y,E,V)),(y=-1<u?p[u]:null)&&gr(y))}function gr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ze])Ss(p.i,u);else{var y=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(y,E,u.capture):p.detachEvent?p.detachEvent(yr(y),E):p.addListener&&p.removeListener&&p.removeListener(E),(y=Cs(p))?(Ss(y,u),y.h==0&&(y.src=null,p[xi]=null)):wt(u)}}}function yr(u){return u in As?As[u]:As[u]="on"+u}function Ko(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var y=u.listener,E=u.ha||u.src;u.fa&&gr(u),u=y.call(E,p)}return u}function Cs(u){return u=u[xi],u instanceof mr?u:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(u){return typeof u=="function"?u:(u[Ps]||(u[Ps]=function(p){return u.handleEvent(p)}),u[Ps])}function ft(){q.call(this),this.i=new mr(this),this.M=this,this.F=null}W(ft,q),ft.prototype[ze]=!0,ft.prototype.removeEventListener=function(u,p,y,E){ks(this,u,p,y,E)};function pt(u,p){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new ce(p,u);else if(p instanceof ce)p.target=p.target||u;else{var V=p;p=new ce(E,u),R(p,V)}if(V=!0,y)for(var B=y.length-1;0<=B;B--){var J=p.g=y[B];V=vr(J,E,!0,p)&&V}if(J=p.g=u,V=vr(J,E,!0,p)&&V,V=vr(J,E,!1,p)&&V,y)for(B=0;B<y.length;B++)J=p.g=y[B],V=vr(J,E,!1,p)&&V}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],E=0;E<y.length;E++)wt(y[E]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,y,E){return this.i.add(String(u),p,!1,y,E)},ft.prototype.L=function(u,p,y,E){return this.i.add(String(u),p,!0,y,E)};function vr(u,p,y,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,B=0;B<p.length;++B){var J=p[B];if(J&&!J.da&&J.capture==y){var We=J.listener,mt=J.ha||J.src;J.fa&&Ss(u.i,J),V=We.call(mt,E)!==!1&&V}}return V&&!E.defaultPrevented}function Qo(u,p,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Hr(u){u.g=Qo(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class bi extends q{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(u){q.call(this),this.h=u,this.g={}}W(Ni,q);var Yo=[];function Xo(u){ge(u.g,function(p,y){this.g.hasOwnProperty(y)&&gr(p)},u),u.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),Xo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=f.JSON.stringify,Zo=f.JSON.parse,ea=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Di(){}Di.prototype.h=null;function Rs(u){return u.h||(u.h=u.i())}function xs(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qn(){ce.call(this,"d")}W(qn,ce);function bs(){ce.call(this,"c")}W(bs,ce);var Hn={},ta=null;function Oi(){return ta=ta||new ft}Hn.La="serverreachability";function na(u){ce.call(this,Hn.La,u)}W(na,ce);function _r(u){const p=Oi();pt(p,new na(p))}Hn.STAT_EVENT="statevent";function ra(u,p){ce.call(this,Hn.STAT_EVENT,u),this.stat=p}W(ra,ce);function at(u){const p=Oi();pt(p,new ra(p,u))}Hn.Ma="timingevent";function Ns(u,p){ce.call(this,Hn.Ma,u),this.size=p}W(Ns,ce);function An(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function Mi(u,p,y,E,V,B){u.info(function(){if(u.g)if(B)for(var J="",We=B.split("&"),mt=0;mt<We.length;mt++){var Me=We[mt].split("=");if(1<Me.length){var Et=Me[0];Me=Me[1];var ct=Et.split("_");J=2<=ct.length&&ct[1]=="type"?J+(Et+"="+Me+"&"):J+(Et+"=redacted&")}}else J=null;else J=B;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+p+`
`+y+`
`+J})}function Ds(u,p,y,E,V,B,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+p+`
`+y+`
`+B+" "+J})}function kn(u,p,y,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+nd(u,y)+(E?" "+E:"")})}function ia(u,p){u.info(function(){return"TIMEOUT: "+p})}Li.prototype.info=function(){};function nd(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var V=E[1];if(Array.isArray(V)&&!(1>V.length)){var B=V[0];if(B!="noop"&&B!="stop"&&B!="close")for(var J=1;J<V.length;J++)V[J]=""}}}}return Jo(y)}catch{return p}}var Os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Vi(){}W(Vi,Di),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},Cn=new Vi;function Pn(u,p,y,E){this.j=u,this.i=p,this.l=y,this.R=E||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var sa={},Ls={};function Ms(u,p,y){u.L=1,u.v=Xr(sn(p)),u.m=y,u.P=!0,oa(u,null)}function oa(u,p){u.F=Date.now(),Ge(u),u.A=sn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Zr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new Ol,u.g=Jl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new bi(C(u.Y,u,u.g),u.O)),p=u.U,y=u.g,E=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Yo[0]=V.toString()),V=Yo);for(var B=0;B<V.length;B++){var J=qo(y,V[B],E||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),_r(),Mi(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Yt(u)==3?p.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Yt(this.g);var p=this.g.Ba();const mn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||ct!=4||p==7||(p==8||0>=mn?_r(3):_r(2)),Fi(this);var y=this.g.Z();this.X=y;t:if(Ll(this)){var E=ha(this.g);u="";var V=E.length,B=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Kr(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==V-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Ds(this.i,this.u,this.A,this.l,this.R,ct,y),this.o){if(this.T&&!this.K){t:{if(this.g){var We,mt=this.g;if((We=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(We)){var Me=We;break t}}Me=null}if(y=Me)kn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,y);else{this.o=!1,this.s=3,at(12),fn(this),Kr(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<J.length;)if(an=rd(this,J),an==Ls){ct==4&&(this.s=4,at(14),y=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==sa){this.s=4,at(15),kn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else kn(this.i,this.l,an,null),aa(this,an);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||J.length!=0||this.h.h||(this.s=1,at(16),y=!1),this.o=this.o&&y,!y)kn(this.i,this.l,J,"[Invalid Chunked Response]"),fn(this),Kr(this);else if(0<J.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),pa(Et),Et.M=!0,at(11))}}else kn(this.i,this.l,J,null),aa(this,J);ct==4&&fn(this),this.o&&!this.J&&(ct==4?Ks(this.j,this):(this.o=!1,Ge(this)))}else Bs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),fn(this),Kr(this)}}}catch{}finally{}};function Ll(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function rd(u,p){var y=u.C,E=p.indexOf(`
`,y);return E==-1?Ls:(y=Number(p.substring(y,E)),isNaN(y)?sa:(E+=1,E+y>p.length?Ls:(p=p.slice(E,E+y),u.C=E+y,p)))}Pn.prototype.cancel=function(){this.J=!0,fn(this)};function Ge(u){u.S=Date.now()+u.I,Ml(u,u.I)}function Ml(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(C(u.ba,u),p)}function Fi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ia(this.i,this.A),this.L!=2&&(_r(),at(17)),fn(this),this.s=2,Kr(this)):Ml(this,this.S-u)};function Kr(u){u.j.G==0||u.J||Ks(u.j,u)}function fn(u){Fi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Xo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function aa(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Wt(y.h,u))){if(!u.K&&Wt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Hs(y),Dn(y);else break e;qs(y),at(18)}}else y.za=V[1],0<y.za-y.T&&37500>V[2]&&y.F&&y.v==0&&!y.C&&(y.C=An(C(y.Za,y),6e3));if(1>=Fl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Sr(y,11)}else if((u.K||y.g==u)&&Hs(y),!se(p))for(V=y.Da.g.parse(p),p=0;p<V.length;p++){let Me=V[p];if(y.T=Me[0],Me=Me[1],y.G==2)if(Me[0]=="c"){y.K=Me[1],y.ia=Me[2];const Et=Me[3];Et!=null&&(y.la=Et,y.j.info("VER="+y.la));const ct=Me[4];ct!=null&&(y.Aa=ct,y.j.info("SVER="+y.Aa));const mn=Me[5];mn!=null&&typeof mn=="number"&&0<mn&&(E=1.5*mn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const an=u.g;if(an){const qi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var B=E.h;B.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(la(B,B.h),B.h=null))}if(E.D){const Qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(E.ya=Qs,He(E.I,E.D,Qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=Xl(E,E.J?E.ia:null,E.W),J.K){jl(E.h,J);var We=J,mt=E.L;mt&&(We.I=mt),We.B&&(Fi(We),Ge(We)),E.g=J}else Wi(E);0<y.i.length&&Yn(y)}else Me[0]!="stop"&&Me[0]!="close"||Sr(y,7);else y.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Sr(y,7):Ct(y):Me[0]!="noop"&&y.l&&y.l.ta(Me),y.v=0)}}_r(4)}catch{}}var Vl=class{constructor(u,p){this.g=u,this.map=p}};function ji(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function la(u,p){u.g?u.g.add(p):u.h=p}function jl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}ji.prototype.cancel=function(){if(this.i=Ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ul(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return $(u.i)}function Vs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,E=0;E<y;E++)p.push(u[E]);return p}p=[],y=0;for(E in u)p[y++]=u[E];return p}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const E in u)p[y++]=E;return p}}}function Gr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Fs(u),E=Vs(u),V=E.length,B=0;B<V;B++)p.call(void 0,E[B],y&&y[B],u)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),V=null;if(0<=E){var B=u[y].substring(0,E);V=u[y].substring(E+1)}else B=u[y];p(B,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function wr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof wr){this.h=u.h,zi(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var p=u.i,y=new Kn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Yr(this,y),this.m=u.m}else u&&(p=String(u).match(Ui))?(this.h=!1,zi(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Qr(this,p[4]),this.l=Ne(p[5]||"",!0),Yr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}wr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Jr(p,js,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Jr(p,js,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Jr(y,y.charAt(0)=="/"?$l:Bl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Jr(y,ua)),u.join("")};function sn(u){return new wr(u)}function zi(u,p,y){u.j=y?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Yr(u,p,y){p instanceof Kn?(u.i=p,Gn(u.i,u.h)):(y||(p=Jr(p,Wl)),u.i=new Kn(p,u.h))}function He(u,p,y){u.i.set(p,y)}function Xr(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Jr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,zl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function zl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var js=/[#\/\?@]/g,Bl=/[#\?:]/g,$l=/[#\?]/g,Wl=/[#\?@]/g,ua=/#/g;function Kn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function kt(u){u.g||(u.g=new Map,u.h=0,u.i&&id(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}n=Kn.prototype,n.add=function(u,p){kt(this),this.i=null,u=pn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Rn(u,p){kt(u),p=pn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function xn(u,p){return kt(u),p=pn(u,p),u.g.has(p)}n.forEach=function(u,p){kt(this),this.g.forEach(function(y,E){y.forEach(function(V){u.call(p,V,E,this)},this)},this)},n.na=function(){kt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let E=0;E<p.length;E++){const V=u[E];for(let B=0;B<V.length;B++)y.push(p[E])}return y},n.V=function(u){kt(this);let p=[];if(typeof u=="string")xn(this,u)&&(p=p.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},n.set=function(u,p){return kt(this),this.i=null,u=pn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Zr(u,p,y){Rn(u,p),0<y.length&&(u.i=null,u.g.set(pn(u,p),$(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var E=p[y];const B=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var V=B;J[E]!==""&&(V+="="+encodeURIComponent(String(J[E]))),u.push(V)}}return this.i=u.join("&")};function pn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Gn(u,p){p&&!u.j&&(kt(u),u.i=null,u.g.forEach(function(y,E){var V=E.toLowerCase();E!=V&&(Rn(this,E),Zr(this,V,y))},u)),u.j=p}function sd(u,p){const y=new Li;if(f.Image){const E=new Image;E.onload=U(Qt,y,"TestLoadImage: loaded",!0,p,E),E.onerror=U(Qt,y,"TestLoadImage: error",!1,p,E),E.onabort=U(Qt,y,"TestLoadImage: abort",!1,p,E),E.ontimeout=U(Qt,y,"TestLoadImage: timeout",!1,p,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function ql(u,p){const y=new Li,E=new AbortController,V=setTimeout(()=>{E.abort(),Qt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(V),B.ok?Qt(y,"TestPingServer: ok",!0,p):Qt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),Qt(y,"TestPingServer: error",!1,p)})}function Qt(u,p,y,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(y)}catch{}}function od(){this.g=new ea}function Hl(u,p,y){const E=y||"";try{Gr(u,function(V,B){let J=V;v(V)&&(J=Jo(V)),p.push(E+B+"="+encodeURIComponent(J))})}catch(V){throw p.push(E+"type="+encodeURIComponent("_badmap")),V}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}W(Er,Di),Er.prototype.g=function(){return new Bi(this.l,this.j)},Er.prototype.i=(function(u){return function(){return u}})({});function Bi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Bi,ft),n=Bi.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Nn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?bn(this):Nn(this),this.readyState==3&&Kl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Nn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Nn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Tr(u){let p="";return ge(u,function(y,E){p+=E,p+=":",p+=y,p+=`\r
`}),p}function ei(u,p,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Tr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):He(u,p,y))}function Je(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Je,ft);var ad=/^https?$/i,ca=["POST","PUT"];n=Je.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Rs(this.o):Rs(Cn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){$i(this,B);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)y.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())y.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(B=>B.toLowerCase()=="content-type"),V=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ca,p,void 0))||E||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,J]of y)this.g.setRequestHeader(B,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){$i(this,B)}};function $i(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Us(u),on(u)}function Us(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?da(this):this.bb())},n.bb=function(){da(this)};function da(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)Qo(u.Ea,0,u);else if(pt(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var E;if(E=J===0){var V=String(u.D).match(Ui)[1]||null;!V&&f.self&&f.self.location&&(V=f.self.location.protocol.slice(0,-1)),E=!ad.test(V?V.toLowerCase():"")}y=E}if(y)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var B=2<Yt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Us(u)}}finally{on(u)}}}}function on(u,p){if(u.g){zs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||pt(u,"ready");try{y.onreadystatechange=E}catch{}}}function zs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Zo(p)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Bs(u){const p={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(se(u[E]))continue;var y=b(u[E]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const B=p[V]||[];p[V]=B,B.push(y)}x(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function fa(u){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ji(u&&u.concurrentRequestLimit),this.Da=new od,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fa.prototype,n.la=8,n.G=1,n.connect=function(u,p,y,E){at(0),this.W=u,this.H=p||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Xl(this,null,this.W),Yn(this)};function Ct(u){if($s(u),u.G==3){var p=u.U++,y=sn(u.I);if(He(y,"SID",u.K),He(y,"RID",p),He(y,"TYPE","terminate"),Ir(u,y),p=new Pn(u,u.j,p),p.L=2,p.v=Xr(sn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Jl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ge(p)}Yl(u)}function Dn(u){u.g&&(pa(u),u.g.cancel(),u.g=null)}function $s(u){Dn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Hs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Yn(u){if(!rn(u.h)&&!u.s){u.s=!0;var p=u.Ga;xe||ne(),ee||(xe(),ee=!0),he.add(p,u),u.B=0}}function ld(u,p){return Fl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(C(u.Ga,u,p),Ql(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Pn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=T(B),R(B,this.S)):B=this.S),this.m!==null||this.O||(V.H=B,B=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=ti(this,V,p),y=sn(this.I),He(y,"RID",u),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),Ir(this,y),B&&(this.O?p="headers="+encodeURIComponent(String(Tr(B)))+"&"+p:this.m&&ei(y,this.m,B)),la(this.h,V),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",p),He(y,"SID","null"),V.T=!0,Ms(V,y,null)):Ms(V,y,p),this.G=2}}else this.G==3&&(u?Ws(this,u):this.i.length==0||rn(this.h)||Ws(this))};function Ws(u,p){var y;p?y=p.l:y=u.U++;const E=sn(u.I);He(E,"SID",u.K),He(E,"RID",y),He(E,"AID",u.T),Ir(u,E),u.m&&u.o&&ei(E,u.m,u.o),y=new Pn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ti(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),la(u.h,y),Ms(y,E,p)}function Ir(u,p){u.H&&ge(u.H,function(y,E){He(p,E,y)}),u.l&&Gr({},function(y,E){He(p,E,y)})}function ti(u,p,y){y=Math.min(u.i.length,y);var E=u.l?C(u.l.Na,u.l,u):null;e:{var V=u.i;let B=-1;for(;;){const J=["count="+y];B==-1?0<y?(B=V[0].g,J.push("ofs="+B)):B=0:J.push("ofs="+B);let We=!0;for(let mt=0;mt<y;mt++){let Me=V[mt].g;const Et=V[mt].map;if(Me-=B,0>Me)B=Math.max(0,V[mt].g-100),We=!1;else try{Hl(Et,J,"req"+Me+"_")}catch{E&&E(Et)}}if(We){E=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,E}function Wi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;xe||ne(),ee||(xe(),ee=!0),he.add(p,u),u.v=0}}function qs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(C(u.Fa,u),Ql(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(C(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Dn(this),Gl(this))};function pa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Gl(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);He(p,"RID","rpc"),He(p,"SID",u.K),He(p,"AID",u.T),He(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(p,"TO",u.ja),He(p,"TYPE","xmlhttp"),Ir(u,p),u.m&&u.o&&ei(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Xr(sn(p)),y.m=null,y.P=!0,oa(y,u)}n.Za=function(){this.C!=null&&(this.C=null,Dn(this),qs(this),at(19))};function Hs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ks(u,p){var y=null;if(u.g==p){Hs(u),pa(u),u.g=null;var E=2}else if(Wt(u.h,p))y=p.D,jl(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var V=u.B;E=Oi(),pt(E,new Ns(E,y)),Yn(u)}else Wi(u);else if(V=p.s,V==3||V==0&&0<p.X||!(E==1&&ld(u,p)||E==2&&qs(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),V){case 1:Sr(u,5);break;case 4:Sr(u,10);break;case 3:Sr(u,6);break;default:Sr(u,2)}}}function Ql(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Sr(u,p){if(u.j.info("Error code "+p),p==2){var y=C(u.fb,u),E=u.Xa;const V=!E;E=new wr(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||zi(E,"https"),Xr(E),V?sd(E.toString(),y):ql(E.toString(),y)}else at(2);u.G=0,u.l&&u.l.sa(p),Yl(u),$s(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Yl(u){if(u.G=0,u.ka=[],u.l){const p=Ul(u.h);(p.length!=0||u.i.length!=0)&&(M(u.ka,p),M(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Xl(u,p,y){var E=y instanceof wr?sn(y):new wr(y);if(E.g!="")p&&(E.g=p+"."+E.g),Qr(E,E.s);else{var V=f.location;E=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var B=new wr(null);E&&zi(B,E),p&&(B.g=p),V&&Qr(B,V),y&&(B.l=y),E=B}return y=u.D,p=u.ya,y&&p&&He(E,y,p),He(E,"VER",u.la),Ir(u,E),E}function Jl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Je(new Er({eb:y})):new Je(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ma(){}n=ma.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gs(){}Gs.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){ft.call(this),this.g=new fa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!se(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!se(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Xn(this)}W(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Ct(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Jo(u),u=y);p.i.push(new Vl(p.Ya++,u)),p.G==3&&Yn(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,qt.aa.N.call(this)};function Zl(u){qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}W(Zl,qn);function eu(){bs.call(this),this.status=1}W(eu,bs);function Xn(u){this.g=u}W(Xn,ma),Xn.prototype.ua=function(){pt(this.g,"a")},Xn.prototype.ta=function(u){pt(this.g,new Zl(u))},Xn.prototype.sa=function(u){pt(this.g,new eu)},Xn.prototype.ra=function(){pt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,nw=function(){return new Gs},tw=function(){return Oi()},ew=Hn,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,ic=Os,Dl.COMPLETE="complete",Z_=Dl,xs.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ka=xs,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,J_=Je}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const Yy="@firebase/firestore";/**
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
 */let zo="10.14.0";/**
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
 */const gs=new Kf("@firebase/firestore");function za(){return gs.logLevel}function ae(n,...e){if(gs.logLevel<=De.DEBUG){const t=e.map(sp);gs.debug(`Firestore (${zo}): ${n}`,...t)}}function Br(n,...e){if(gs.logLevel<=De.ERROR){const t=e.map(sp);gs.error(`Firestore (${zo}): ${n}`,...t)}}function Ro(n,...e){if(gs.logLevel<=De.WARN){const t=e.map(sp);gs.warn(`Firestore (${zo}): ${n}`,...t)}}function sp(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function qe(n,e){n||Te()}function Se(n,e){return n}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class rw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class Wk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qk{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new cs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new cs,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new cs)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string"),new rw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new Ut(e)}}class Hk{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kk{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Hk(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){qe(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string"),this.R=t.token,new Gk(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Yk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class iw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=Yk(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ue(n,e){return n<e?-1:n>e?1:0}function xo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */class _t{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ve(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class al{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return al.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof al?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class st extends al{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ve(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const Xk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends al{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return Xk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ve(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ve(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ve(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new ve(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(st.fromString(e))}static fromName(e){return new _e(st.fromString(e).popFirst(5))}static empty(){return new _e(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new st(e.slice()))}}function Jk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Ai(o,_e.empty(),e)}function Zk(n){return new Ai(n.readTime,n.key,-1)}class Ai{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ai(Ie.min(),_e.empty(),-1)}static max(){return new Ai(Ie.max(),_e.empty(),-1)}}function e1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const t1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function kl(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==t1)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(g=>i(g)))})),c=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((_=>{c[v]=_,++f,f===l&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function r1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class op{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}op.oe=-1;function Uc(n){return n==null}function Tc(n){return n===0&&1/n==-1/0}function i1(n){return typeof n=="number"&&Number.isInteger(n)&&!Tc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Xy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}}class Xu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jy(this.data.getIterator())}getIteratorFrom(e){return new Jy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Nt(this.comparator);return t.data=e,t}}class Jy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new Nt(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class ow extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ow("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const s1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(n){if(qe(!!n),typeof n=="string"){let e=0;const t=s1.exec(n);if(qe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ys(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
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
 */function ap(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function lp(n){const e=n.mapValue.fields.__previous_value__;return ap(e)?lp(e):e}function ll(n){const e=ki(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class o1{constructor(e,t,i,o,l,c,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v}}class ul{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ju={mapValue:{}};function vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ap(n)?4:l1(n)?9007199254740991:a1(n)?10:11:Te()}function cr(n,e){if(n===e)return!0;const t=vs(n);if(t!==vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ll(n).isEqual(ll(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=ki(o.timestampValue),f=ki(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return ys(o.bytesValue).isEqual(ys(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ut(o.doubleValue),f=ut(l.doubleValue);return c===f?Tc(c)===Tc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return xo(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Xy(c)!==Xy(f))return!1;for(const g in c)if(c.hasOwnProperty(g)&&(f[g]===void 0||!cr(c[g],f[g])))return!1;return!0})(n,e);default:return Te()}}function cl(n,e){return(n.values||[]).find((t=>cr(t,e)))!==void 0}function bo(n,e){if(n===e)return 0;const t=vs(n),i=vs(e);if(t!==i)return Ue(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ut(l.integerValue||l.doubleValue),g=ut(c.integerValue||c.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(n,e);case 3:return Zy(n.timestampValue,e.timestampValue);case 4:return Zy(ll(n),ll(e));case 5:return Ue(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=ys(l),g=ys(c);return f.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),g=c.split("/");for(let v=0;v<f.length&&v<g.length;v++){const _=Ue(f[v],g[v]);if(_!==0)return _}return Ue(f.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ue(ut(l.latitude),ut(c.latitude));return f!==0?f:Ue(ut(l.longitude),ut(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ev(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,g,v,_;const I=l.fields||{},C=c.fields||{},U=(f=I.value)===null||f===void 0?void 0:f.arrayValue,W=(g=C.value)===null||g===void 0?void 0:g.arrayValue,$=Ue(((v=U?.values)===null||v===void 0?void 0:v.length)||0,((_=W?.values)===null||_===void 0?void 0:_.length)||0);return $!==0?$:ev(U,W)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Ju.mapValue&&c===Ju.mapValue)return 0;if(l===Ju.mapValue)return 1;if(c===Ju.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),v=c.fields||{},_=Object.keys(v);g.sort(),_.sort();for(let I=0;I<g.length&&I<_.length;++I){const C=Ue(g[I],_[I]);if(C!==0)return C;const U=bo(f[g[I]],v[_[I]]);if(U!==0)return U}return Ue(g.length,_.length)})(n.mapValue,e.mapValue);default:throw Te()}}function Zy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const t=ki(n),i=ki(e),o=Ue(t.seconds,i.seconds);return o!==0?o:Ue(t.nanos,i.nanos)}function ev(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=bo(t[o],i[o]);if(l)return l}return Ue(t.length,i.length)}function No(n){return Af(n)}function Af(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=ki(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ys(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Af(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Af(t.fields[c])}`;return o+"}"})(n.mapValue):Te()}function kf(n){return!!n&&"integerValue"in n}function up(n){return!!n&&"arrayValue"in n}function tv(n){return!!n&&"nullValue"in n}function nv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sc(n){return!!n&&"mapValue"in n}function a1(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bo(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ja(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function l1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=Ja(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Bo(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Tn(Ja(this.value))}}function aw(n){const e=[];return Bo(n.fields,((t,i)=>{const o=new bt([t]);if(sc(i)){const l=aw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new zn(e)}/**
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
 */class Ic{constructor(e,t){this.position=e,this.inclusive=t}}function rv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(c.referenceValue),t.key):i=bo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function iv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Sc{constructor(e,t="asc"){this.field=e,this.dir=t}}function u1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lw{}class vt extends lw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new d1(e,t,i):t==="array-contains"?new p1(e,i):t==="in"?new m1(e,i):t==="not-in"?new g1(e,i):t==="array-contains-any"?new y1(e,i):new vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new h1(e,i):new f1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bo(t,this.value)):t!==null&&vs(this.value)===vs(t)&&this.matchesComparison(bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends lw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dr(e,t)}matches(e){return uw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uw(n){return n.op==="and"}function cw(n){return c1(n)&&uw(n)}function c1(n){for(const e of n.filters)if(e instanceof dr)return!1;return!0}function Cf(n){if(n instanceof vt)return n.field.canonicalString()+n.op.toString()+No(n.value);if(cw(n))return n.filters.map((e=>Cf(e))).join(",");{const e=n.filters.map((t=>Cf(t))).join(",");return`${n.op}(${e})`}}function dw(n,e){return n instanceof vt?(function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)})(n,e):n instanceof dr?(function(i,o){return o instanceof dr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&dw(c,o.filters[f])),!0):!1})(n,e):void Te()}function hw(n){return n instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`})(n):n instanceof dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(hw).join(" ,")+"}"})(n):"Filter"}class d1 extends vt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class h1 extends vt{constructor(e,t){super(e,"in",t),this.keys=fw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class f1 extends vt{constructor(e,t){super(e,"not-in",t),this.keys=fw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>_e.fromName(i.referenceValue)))}class p1 extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return up(t)&&cl(t.arrayValue,this.value)}}class m1 extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cl(this.value.arrayValue,t)}}class g1 extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cl(this.value.arrayValue,t)}}class y1 extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!up(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>cl(this.value.arrayValue,i)))}}/**
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
 */class v1{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.ue=null}}function sv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new v1(n,e,t,i,o,l,c)}function cp(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Cf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Uc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>No(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>No(i))).join(",")),e.ue=t}return e.ue}function dp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!u1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iv(n.startAt,e.startAt)&&iv(n.endAt,e.endAt)}function Pf(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class zc{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _1(n,e,t,i,o,l,c,f){return new zc(n,e,t,i,o,l,c,f)}function hp(n){return new zc(n)}function ov(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function w1(n){return n.collectionGroup!==null}function Za(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Nt(bt.comparator);return c.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(f=f.add(v.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Sc(l,i))})),t.has(bt.keyField().canonicalString())||e.ce.push(new Sc(bt.keyField(),i))}return e.ce}function or(n){const e=Se(n);return e.le||(e.le=E1(e,Za(n))),e.le}function E1(n,e){if(n.limitType==="F")return sv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Sc(o.field,l)}));const t=n.endAt?new Ic(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ic(n.startAt.position,n.startAt.inclusive):null;return sv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Rf(n,e,t){return new zc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bc(n,e){return dp(or(n),or(e))&&n.limitType===e.limitType}function pw(n){return`${cp(or(n))}|lt:${n.limitType}`}function yo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>hw(o))).join(", ")}]`),Uc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>No(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>No(o))).join(",")),`Target(${i})`})(or(n))}; limitType=${n.limitType})`}function $c(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of Za(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,g){const v=rv(c,f,g);return c.inclusive?v<=0:v<0})(i.startAt,Za(i),o)||i.endAt&&!(function(c,f,g){const v=rv(c,f,g);return c.inclusive?v>=0:v>0})(i.endAt,Za(i),o))})(n,e)}function T1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mw(n){return(e,t)=>{let i=!1;for(const o of Za(n)){const l=I1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function I1(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(l,c,f){const g=c.data.field(l),v=f.data.field(l);return g!==null&&v!==null?bo(g,v):Te()})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
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
 */class $o{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Bo(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return sw(this.inner)}size(){return this.innerSize}}/**
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
 */const S1=new nt(_e.comparator);function $r(){return S1}const gw=new nt(_e.comparator);function Ga(...n){let e=gw;for(const t of n)e=e.insert(t.key,t);return e}function yw(n){let e=gw;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function as(){return el()}function vw(){return el()}function el(){return new $o((n=>n.toString()),((n,e)=>n.isEqual(e)))}const A1=new nt(_e.comparator),k1=new Nt(_e.comparator);function be(...n){let e=k1;for(const t of n)e=e.add(t);return e}const C1=new Nt(Ue);function P1(){return C1}/**
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
 */function fp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function _w(n){return{integerValue:""+n}}function R1(n,e){return i1(e)?_w(e):fp(n,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function x1(n,e,t){return n instanceof Ac?(function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&ap(l)&&(l=lp(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}})(t,e):n instanceof dl?Ew(n,e):n instanceof hl?Tw(n,e):(function(o,l){const c=ww(o,l),f=av(c)+av(o.Pe);return kf(c)&&kf(o.Pe)?_w(f):fp(o.serializer,f)})(n,e)}function b1(n,e,t){return n instanceof dl?Ew(n,e):n instanceof hl?Tw(n,e):t}function ww(n,e){return n instanceof kc?(function(i){return kf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Ac extends Wc{}class dl extends Wc{constructor(e){super(),this.elements=e}}function Ew(n,e){const t=Iw(e);for(const i of n.elements)t.some((o=>cr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class hl extends Wc{constructor(e){super(),this.elements=e}}function Tw(n,e){let t=Iw(e);for(const i of n.elements)t=t.filter((o=>!cr(o,i)));return{arrayValue:{values:t}}}class kc extends Wc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function av(n){return ut(n.integerValue||n.doubleValue)}function Iw(n){return up(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function N1(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof dl&&o instanceof dl||i instanceof hl&&o instanceof hl?xo(i.elements,o.elements,cr):i instanceof kc&&o instanceof kc?cr(i.Pe,o.Pe):i instanceof Ac&&o instanceof Ac})(n.transform,e.transform)}class D1{constructor(e,t){this.version=e,this.transformResults=t}}class ar{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qc{}function Sw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new pp(n.key,ar.none()):new Pl(n.key,n.data,ar.none());{const t=n.data,i=Tn.empty();let o=new Nt(bt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Ts(n.key,i,new zn(o.toArray()),ar.none())}}function O1(n,e,t){n instanceof Pl?(function(o,l,c){const f=o.value.clone(),g=uv(o.fieldTransforms,l,c.transformResults);f.setAll(g),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ts?(function(o,l,c){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=uv(o.fieldTransforms,l,c.transformResults),g=l.data;g.setAll(Aw(o)),g.setAll(f),l.convertToFoundDocument(c.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function tl(n,e,t,i){return n instanceof Pl?(function(l,c,f,g){if(!oc(l.precondition,c))return f;const v=l.value.clone(),_=cv(l.fieldTransforms,g,c);return v.setAll(_),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,i):n instanceof Ts?(function(l,c,f,g){if(!oc(l.precondition,c))return f;const v=cv(l.fieldTransforms,g,c),_=c.data;return _.setAll(Aw(l)),_.setAll(v),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((I=>I.field)))})(n,e,t,i):(function(l,c,f){return oc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function L1(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=ww(i.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(i.field,l))}return t||null}function lv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&xo(i,o,((l,c)=>N1(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pl extends qc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ts extends qc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Aw(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function uv(n,e,t){const i=new Map;qe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,b1(c,f,t[o]))}return i}function cv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,x1(l,c,e))}return i}class pp extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M1 extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class V1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&O1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=vw();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const g=Sw(c,f);g!==null&&i.set(o.key,g),c.isValidDocument()||c.convertToNoDocument(Ie.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,((t,i)=>lv(t,i)))&&xo(this.baseMutations,e.baseMutations,((t,i)=>lv(t,i)))}}class mp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){qe(e.mutations.length===i.length);let o=(function(){return A1})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new mp(e,t,i,o)}}/**
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
 */class F1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class j1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ht,Ve;function U1(n){switch(n){default:return Te();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function kw(n){if(n===void 0)return Br("GRPC error has no .code"),Y.UNKNOWN;switch(n){case ht.OK:return Y.OK;case ht.CANCELLED:return Y.CANCELLED;case ht.UNKNOWN:return Y.UNKNOWN;case ht.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ht.INTERNAL:return Y.INTERNAL;case ht.UNAVAILABLE:return Y.UNAVAILABLE;case ht.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ht.NOT_FOUND:return Y.NOT_FOUND;case ht.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ht.ABORTED:return Y.ABORTED;case ht.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ht.DATA_LOSS:return Y.DATA_LOSS;default:return Te()}}(Ve=ht||(ht={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function z1(){return new TextEncoder}/**
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
 */const B1=new us([4294967295,4294967295],0);function dv(n){const e=z1().encode(n),t=new X_;return t.update(e),new Uint8Array(t.digest())}function hv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new us([t,i],0),new us([o,l],0)]}class gp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Qa(`Invalid padding: ${t}`);if(i<0)throw new Qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=us.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(us.fromNumber(i)));return o.compare(B1)===1&&(o=new us([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=dv(e),[i,o]=hv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new gp(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.Ie===0)return;const t=dv(e),[i,o]=hv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Rl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Hc(Ie.min(),o,new nt(Ue),$r(),be())}}class Rl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Rl(i,t,be(),be(),be())}}/**
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
 */class ac{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Cw{constructor(e,t){this.targetId=e,this.me=t}}class Pw{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class fv{constructor(){this.fe=0,this.ge=mv(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),i=be();return this.ge.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}})),new Rl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=mv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $1{constructor(e){this.Le=e,this.Be=new Map,this.ke=$r(),this.qe=pv(),this.Qe=new nt(Ue)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Te()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((i,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(Pf(l))if(i===0){const c=new _e(l.path);this.Ue(t,c,zt.newNoDocument(c,Ie.min()))}else qe(i===1);else{const c=this.Ye(t);if(c!==i){const f=this.Ze(e),g=f?this.Xe(f,e,c):1;if(g!==0){this.je(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=ys(i).toUint8Array()}catch(g){if(g instanceof ow)return Ro("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new gp(c,o,l)}catch(g){return Ro(g instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Ie===0?null:f}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Le.tt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((l,c)=>{const f=this.Je(c);if(f){if(l.current&&Pf(f.target)){const g=new _e(f.target.path);this.ke.get(g)!==null||this.it(c,g)||this.Ue(c,g,zt.newNoDocument(g,e))}l.be&&(t.set(c,l.ve()),l.Ce())}}));let i=be();this.qe.forEach(((l,c)=>{let f=!0;c.forEachWhile((g=>{const v=this.Je(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ke.forEach(((l,c)=>c.setReadTime(e)));const o=new Hc(e,t,this.Qe,this.ke,i);return this.ke=$r(),this.qe=pv(),this.Qe=new nt(Ue),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new fv,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Nt(Ue),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fv),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function pv(){return new nt(_e.comparator)}function mv(){return new nt(_e.comparator)}const W1={asc:"ASCENDING",desc:"DESCENDING"},q1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H1={and:"AND",or:"OR"};class K1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xf(n,e){return n.useProto3Json||Uc(e)?e:{value:e}}function Cc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function G1(n,e){return Cc(n,e.toTimestamp())}function lr(n){return qe(!!n),Ie.fromTimestamp((function(t){const i=ki(t);return new _t(i.seconds,i.nanos)})(n))}function yp(n,e){return bf(n,e).canonicalString()}function bf(n,e){const t=(function(o){return new st(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function xw(n){const e=st.fromString(n);return qe(Lw(e)),e}function Nf(n,e){return yp(n.databaseId,e.path)}function Gh(n,e){const t=xw(e);if(t.get(1)!==n.databaseId.projectId)throw new ve(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ve(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(Nw(t))}function bw(n,e){return yp(n.databaseId,e)}function Q1(n){const e=xw(n);return e.length===4?st.emptyPath():Nw(e)}function Df(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nw(n){return qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gv(n,e,t){return{name:Nf(n,e),fields:t.value.mapValue.fields}}function Y1(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Te()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,_){return v.useProto3Json?(qe(_===void 0||typeof _=="string"),Ot.fromBase64String(_||"")):(qe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Ot.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(v){const _=v.code===void 0?Y.UNKNOWN:kw(v.code);return new ve(_,v.message||"")})(c);t=new Pw(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Gh(n,i.document.name),l=lr(i.document.updateTime),c=i.document.createTime?lr(i.document.createTime):Ie.min(),f=new Tn({mapValue:{fields:i.document.fields}}),g=zt.newFoundDocument(o,l,c,f),v=i.targetIds||[],_=i.removedTargetIds||[];t=new ac(v,_,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Gh(n,i.document),l=i.readTime?lr(i.readTime):Ie.min(),c=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new ac([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Gh(n,i.document),l=i.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new j1(o,l),f=i.targetId;t=new Cw(f,c)}}return t}function X1(n,e){let t;if(e instanceof Pl)t={update:gv(n,e.key,e.value)};else if(e instanceof pp)t={delete:Nf(n,e.key)};else if(e instanceof Ts)t={update:gv(n,e.key,e.data),updateMask:oC(e.fieldMask)};else{if(!(e instanceof M1))return Te();t={verify:Nf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Ac)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof dl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof hl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof kc)return{fieldPath:c.field.canonicalString(),increment:f.Pe};throw Te()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:G1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()})(n,e.precondition)),t}function J1(n,e){return n&&n.length>0?(qe(e!==void 0),n.map((t=>(function(o,l){let c=o.updateTime?lr(o.updateTime):lr(l);return c.isEqual(Ie.min())&&(c=lr(l)),new D1(c,o.transformResults||[])})(t,e)))):[]}function Z1(n,e){return{documents:[bw(n,e.path)]}}function eC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=bw(n,o);const l=(function(v){if(v.length!==0)return Ow(dr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(v){if(v.length!==0)return v.map((_=>(function(C){return{field:vo(C.field),direction:rC(C.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=xf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{_t:t,parent:o}}function tC(n){let e=Q1(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){qe(i===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(I){const C=Dw(I);return C instanceof dr&&cw(C)?C.getFilters():[C]})(t.where));let c=[];t.orderBy&&(c=(function(I){return I.map((C=>(function(W){return new Sc(_o(W.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(I){let C;return C=typeof I=="object"?I.value:I,Uc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(I){const C=!!I.before,U=I.values||[];return new Ic(U,C)})(t.startAt));let v=null;return t.endAt&&(v=(function(I){const C=!I.before,U=I.values||[];return new Ic(U,C)})(t.endAt)),_1(e,o,c,l,f,"F",g,v)}function nC(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dw(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=_o(t.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_o(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=_o(t.unaryFilter.field);return vt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}})(n):n.fieldFilter!==void 0?(function(t){return vt.create(_o(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return dr.create(t.compositeFilter.filters.map((i=>Dw(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}})(t.compositeFilter.op))})(n):Te()}function rC(n){return W1[n]}function iC(n){return q1[n]}function sC(n){return H1[n]}function vo(n){return{fieldPath:n.canonicalString()}}function _o(n){return bt.fromServerFormat(n.fieldPath)}function Ow(n){return n instanceof vt?(function(t){if(t.op==="=="){if(nv(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(tv(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nv(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(tv(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:iC(t.op),value:t.value}}})(n):n instanceof dr?(function(t){const i=t.getFilters().map((o=>Ow(o)));return i.length===1?i[0]:{compositeFilter:{op:sC(t.op),filters:i}}})(n):Te()}function oC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Lw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class aC{constructor(e){this.ct=e}}function lC(n){const e=tC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rf(e,e.limit,"L"):e}/**
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
 */class uC{constructor(){this.un=new cC}addToCollectionParentIndex(e,t){return this.un.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ai.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class cC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Nt(st.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Nt(st.comparator)).toArray()}}/**
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
 */class Do{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Do(0)}static kn(){return new Do(-1)}}/**
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
 */class dC{constructor(){this.changes=new $o((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&tl(i.mutation,o,zn.empty(),_t.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=as();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Ga();return l.forEach(((f,g)=>{c=c.insert(f,g.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=as();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=$r();const c=el(),f=(function(){return el()})();return t.forEach(((g,v)=>{const _=i.get(v.key);o.has(v.key)&&(_===void 0||_.mutation instanceof Ts)?l=l.insert(v.key,v):_!==void 0?(c.set(v.key,_.mutation.getFieldMask()),tl(_.mutation,v,_.mutation.getFieldMask(),_t.now())):c.set(v.key,zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,_)=>c.set(v,_))),t.forEach(((v,_)=>{var I;return f.set(v,new hC(_,(I=c.get(v))!==null&&I!==void 0?I:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=el();let o=new nt(((c,f)=>c-f)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let _=i.get(g)||zn.empty();_=f.applyToLocalView(v,_),i.set(g,_);const I=(o.get(f.batchId)||be()).add(g);o=o.insert(f.batchId,I)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,_=g.value,I=vw();_.forEach((C=>{if(!l.has(C)){const U=Sw(t.get(C),i.get(C));U!==null&&I.set(C,U),l=l.add(C)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,I))}return G.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):w1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(as());let f=-1,g=l;return c.next((v=>G.forEach(v,((_,I)=>(f<I.largestBatchId&&(f=I.largestBatchId),l.get(_)?G.resolve():this.remoteDocumentCache.getEntry(e,_).next((C=>{g=g.insert(_,C)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,be()))).next((_=>({batchId:f,changes:yw(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((i=>{let o=Ga();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Ga();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(g=>{const v=(function(I,C){return new zc(C,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((_=>{_.forEach(((I,C)=>{c=c.insert(I,C)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((g,v)=>{const _=v.getKey();c.get(_)===null&&(c=c.insert(_,zt.newInvalidDocument(_)))}));let f=Ga();return c.forEach(((g,v)=>{const _=l.get(g);_!==void 0&&tl(_.mutation,v,zn.empty(),_t.now()),$c(t,v)&&(f=f.insert(g,v))})),f}))}}/**
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
 */class pC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return G.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:lC(o.bundledQuery),readTime:lr(o.readTime)}})(t)),G.resolve()}}/**
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
 */class mC{constructor(){this.overlays=new nt(_e.comparator),this.Ir=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=as();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.ht(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Ir.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=as(),l=t.length+1,c=new _e(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new nt(((v,_)=>v-_));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let _=l.get(v.largestBatchId);_===null&&(_=as(),l=l.insert(v.largestBatchId,_)),_.set(v.getKey(),v)}}const f=as(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,_)=>f.set(v,_))),!(f.size()>=o)););return G.resolve(f)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new F1(t,i));let l=this.Ir.get(t);l===void 0&&(l=be(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
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
 */class gC{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class vp{constructor(){this.Tr=new Nt(At.Er),this.dr=new Nt(At.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new At(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Vr(new At(e,t))}mr(e,t){e.forEach((i=>this.removeReference(i,t)))}gr(e){const t=new _e(new st([])),i=new At(t,e),o=new At(t,e+1),l=[];return this.dr.forEachInRange([i,o],(c=>{this.Vr(c),l.push(c.key)})),l}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new _e(new st([])),i=new At(t,e),o=new At(t,e+1);let l=be();return this.dr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new At(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class At{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return _e.comparator(e.key,t.key)||Ue(e.wr,t.wr)}static Ar(e,t){return Ue(e.wr,t.wr)||_e.comparator(e.key,t.key)}}/**
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
 */class yC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Nt(At.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new V1(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.br=this.br.add(new At(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],(c=>{const f=this.Dr(c.wr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Nt(Ue);return t.forEach((o=>{const l=new At(o,0),c=new At(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],(f=>{i=i.add(f.wr)}))})),G.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const c=new At(new _e(l),0);let f=new Nt(Ue);return this.br.forEachWhile((g=>{const v=g.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.wr)),!0)}),c),G.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach((i=>{const o=this.Dr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){qe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return G.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=i}))}On(e){}containsKey(e,t){const i=new At(t,0),o=this.br.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vC{constructor(e){this.Mr=e,this.docs=(function(){return new nt(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const c=t.path,f=new _e(c.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:_}}=g.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||e1(Zk(_),i)<=0||(o.has(_.key)||$c(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Or(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new _C(this)}getSize(e){return G.resolve(this.size)}}class _C extends dC{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class wC{constructor(e){this.persistence=e,this.Nr=new $o((t=>cp(t)),dp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vp,this.targetCount=0,this.kr=Do.Bn()}forEachTarget(e,t){return this.Nr.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),G.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Kn(t),G.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.Br.containsKey(t))}}/**
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
 */class EC{constructor(e,t){this.qr={},this.overlays={},this.Qr=new op(0),this.Kr=!1,this.Kr=!0,this.$r=new gC,this.referenceDelegate=e(this),this.Ur=new wC(this),this.indexManager=new uC,this.remoteDocumentCache=(function(o){return new vC(o)})((i=>this.referenceDelegate.Wr(i))),this.serializer=new aC(t),this.Gr=new pC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new yC(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new TC(this.Qr.next());return this.referenceDelegate.zr(),i(o).next((l=>this.referenceDelegate.jr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Hr(e,t){return G.or(Object.values(this.qr).map((i=>()=>i.containsKey(e,t))))}}class TC extends n1{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.Jr=new vp,this.Yr=null}static Zr(e){return new _p(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),G.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.Xr.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,(i=>{const o=_e.fromPath(i);return this.ei(e,o).next((l=>{l||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return G.or([()=>G.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class wp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new wp(e,t.fromCache,i,o)}}/**
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
 */class IC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return lI()?8:r1(Bt())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.Zi(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new IC;return this.Xi(e,t,c).next((f=>{if(l.result=f,this.zi)return this.es(e,t,c,f.size)}))})).next((()=>l.result))}es(e,t,i,o){return i.documentReadCount<this.ji?(za()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(za()<=De.DEBUG&&ae("QueryEngine","Query:",yo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(za()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):G.resolve())}Yi(e,t){if(ov(t))return G.resolve(null);let i=or(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Rf(t,null,"F"),i=or(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=be(...l);return this.Ji.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const v=this.ts(t,f);return this.ns(t,v,c,g.readTime)?this.Yi(e,Rf(t,null,"F")):this.rs(e,v,t,g)}))))})))))}Zi(e,t,i,o){return ov(t)||o.isEqual(Ie.min())?G.resolve(null):this.Ji.getDocuments(e,i).next((l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?G.resolve(null):(za()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.rs(e,c,t,Jk(o,-1)).next((f=>f)))}))}ts(e,t){let i=new Nt(mw(e));return t.forEach(((o,l)=>{$c(e,l)&&(i=i.add(l))})),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return za()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",yo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ai.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */class AC{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new nt(Ue),this._s=new $o((l=>cp(l)),dp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function kC(n,e,t,i){return new AC(n,e,t,i)}async function Mw(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let g=be();for(const v of o){c.push(v.batchId);for(const _ of v.mutations)g=g.add(_.key)}for(const v of l){f.push(v.batchId);for(const _ of v.mutations)g=g.add(_.key)}return t.localDocuments.getDocuments(i,g).next((v=>({hs:v,removedBatchIds:c,addedBatchIds:f})))}))}))}function CC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return(function(f,g,v,_){const I=v.batch,C=I.keys();let U=G.resolve();return C.forEach((W=>{U=U.next((()=>_.getEntry(g,W))).next(($=>{const M=v.docVersions.get(W);qe(M!==null),$.version.compareTo(M)<0&&(I.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),_.addEntry($)))}))})),U.next((()=>f.mutationQueue.removeMutationBatch(g,I)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=be();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function Vw(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function PC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const f=[];e.targetChanges.forEach(((_,I)=>{const C=o.get(I);if(!C)return;f.push(t.Ur.removeMatchingKeys(l,_.removedDocuments,I).next((()=>t.Ur.addMatchingKeys(l,_.addedDocuments,I))));let U=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?U=U.withResumeToken(Ot.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(_.resumeToken,i)),o=o.insert(I,U),(function($,M,Z){return $.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(C,U,_)&&f.push(t.Ur.updateTargetData(l,U))}));let g=$r(),v=be();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),f.push(RC(l,c,e.documentUpdates).next((_=>{g=_.Ps,v=_.Is}))),!i.isEqual(Ie.min())){const _=t.Ur.getLastRemoteSnapshotVersion(l).next((I=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(_)}return G.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.os=o,l)))}function RC(n,e,t){let i=be(),o=be();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=$r();return t.forEach(((f,g)=>{const v=l.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ie.min())?(e.removeEntry(f,g.readTime),c=c.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),c=c.insert(f,g)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)})),{Ps:c,Is:o}}))}function xC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function bC(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Ur.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.Ur.allocateTargetId(i).next((c=>(o=new Ei(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i}))}async function Of(n,e,t){const i=Se(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!Cl(c))throw c;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function yv(n,e,t){const i=Se(n);let o=Ie.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(g,v,_){const I=Se(g),C=I._s.get(_);return C!==void 0?G.resolve(I.os.get(C)):I.Ur.getTargetData(v,_)})(i,c,or(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,f.targetId).next((g=>{l=g}))})).next((()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:be()))).next((f=>(NC(i,T1(e),f),{documents:f,Ts:l})))))}function NC(n,e,t){let i=n.us.get(e)||Ie.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.us.set(e,i)}class vv{constructor(){this.activeTargetIds=P1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DC{constructor(){this.so=new vv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OC{_o(e){}shutdown(){}}/**
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
 */class _v{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zu=null;function Qh(){return Zu===null?Zu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zu++,"0x"+Zu.toString(16)}/**
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
 */const LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class MC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const jt="WebChannelConnection";class VC extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const f=Qh(),g=this.xo(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,l,c),this.No(t,g,v,o).then((_=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,_),_)),(_=>{throw Ro("RestConnection",`RPC '${t}' ${f} failed with error: `,_,"url: ",g,"request:",o),_}))}Lo(t,i,o,l,c,f){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),o&&o.headers.forEach(((l,c)=>t[c]=l))}xo(t,i){const o=LC[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=Qh();return new Promise(((c,f)=>{const g=new J_;g.setWithCredentials(!0),g.listenOnce(Z_.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case ic.NO_ERROR:const _=g.getResponseJson();ae(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case ic.TIMEOUT:ae(jt,`RPC '${e}' ${l} timed out`),f(new ve(Y.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const I=g.getStatus();if(ae(jt,`RPC '${e}' ${l} failed with status:`,I,"response text:",g.getResponseText()),I>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const U=C?.error;if(U&&U.status&&U.message){const W=(function(M){const Z=M.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(Z)>=0?Z:Y.UNKNOWN})(U.status);f(new ve(W,U.message))}else f(new ve(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ve(Y.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ae(jt,`RPC '${e}' ${l} completed.`)}}));const v=JSON.stringify(o);ae(jt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",v,i,15)}))}Bo(e,t,i){const o=Qh(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=nw(),f=tw(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const _=l.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${_}`,g);const I=c.createWebChannel(_,g);let C=!1,U=!1;const W=new MC({Io:M=>{U?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(C||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),C=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,M),I.send(M))},To:()=>I.close()}),$=(M,Z,se)=>{M.listen(Z,(de=>{try{se(de)}catch(me){setTimeout((()=>{throw me}),0)}}))};return $(I,Ka.EventType.OPEN,(()=>{U||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),W.yo())})),$(I,Ka.EventType.CLOSE,(()=>{U||(U=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),W.So())})),$(I,Ka.EventType.ERROR,(M=>{U||(U=!0,Ro(jt,`RPC '${e}' stream ${o} transport errored:`,M),W.So(new ve(Y.UNAVAILABLE,"The operation could not be completed")))})),$(I,Ka.EventType.MESSAGE,(M=>{var Z;if(!U){const se=M.data[0];qe(!!se);const de=se,me=de.error||((Z=de[0])===null||Z===void 0?void 0:Z.error);if(me){ae(jt,`RPC '${e}' stream ${o} received error:`,me);const Oe=me.status;let ge=(function(k){const R=ht[k];if(R!==void 0)return kw(R)})(Oe),x=me.message;ge===void 0&&(ge=Y.INTERNAL,x="Unknown error status: "+Oe+" with message "+me.message),U=!0,W.So(new ve(ge,x)),I.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,se),W.bo(se)}})),$(f,ew.STAT_EVENT,(M=>{M.stat===Sf.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===Sf.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{W.wo()}),0),W}}function Yh(){return typeof document<"u"?document:null}/**
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
 */function Kc(n){return new K1(n,!0)}/**
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
 */class Fw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class jw{constructor(e,t,i,o,l,c,f,g){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fw(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.Yo===t&&this.P_(i,o)}),(i=>{e((()=>{const o=new ve(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)}))}))}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{i((()=>this.listener.Eo()))})),this.stream.Ro((()=>{i((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{i((()=>this.I_(o)))})),this.stream.onMessage((o=>{i((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FC extends jw{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Y1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?lr(c.readTime):Ie.min()})(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=Df(this.serializer),t.addTarget=(function(l,c){let f;const g=c.target;if(f=Pf(g)?{documents:Z1(l,g)}:{query:eC(l,g)._t},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=Rw(l,c.resumeToken);const v=xf(l,c.expectedCount);v!==null&&(f.expectedCount=v)}else if(c.snapshotVersion.compareTo(Ie.min())>0){f.readTime=Cc(l,c.snapshotVersion.toTimestamp());const v=xf(l,c.expectedCount);v!==null&&(f.expectedCount=v)}return f})(this.serializer,e);const i=nC(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=Df(this.serializer),t.removeTarget=e,this.a_(t)}}class jC extends jw{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=J1(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=Df(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>X1(this.serializer,i)))};this.a_(t)}}/**
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
 */class UC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ve(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Mo(e,bf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(Y.UNKNOWN,l.toString())}))}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Lo(e,bf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ve(Y.UNKNOWN,c.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class zC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Br(t),this.D_=!1):ae("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class BC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o((c=>{i.enqueueAndForget((async()=>{Is(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const v=Se(g);v.L_.add(4),await xl(v),v.q_.set("Unknown"),v.L_.delete(4),await Gc(v)})(this))}))})),this.q_=new zC(i,o)}}async function Gc(n){if(Is(n))for(const e of n.B_)await e(!0)}async function xl(n){for(const e of n.B_)await e(!1)}function Uw(n,e){const t=Se(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Sp(t)?Ip(t):Wo(t).r_()&&Tp(t,e))}function Ep(n,e){const t=Se(n),i=Wo(t);t.N_.delete(e),i.r_()&&zw(t,e),t.N_.size===0&&(i.r_()?i.o_():Is(t)&&t.q_.set("Unknown"))}function Tp(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wo(n).A_(e)}function zw(n,e){n.Q_.xe(e),Wo(n).R_(e)}function Ip(n){n.Q_=new $1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Wo(n).start(),n.q_.v_()}function Sp(n){return Is(n)&&!Wo(n).n_()&&n.N_.size>0}function Is(n){return Se(n).L_.size===0}function Bw(n){n.Q_=void 0}async function $C(n){n.q_.set("Online")}async function WC(n){n.N_.forEach(((e,t)=>{Tp(n,e)}))}async function qC(n,e){Bw(n),Sp(n)?(n.q_.M_(e),Ip(n)):n.q_.set("Unknown")}async function HC(n,e,t){if(n.q_.set("Online"),e instanceof Pw&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.N_.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.N_.delete(f),o.Q_.removeTarget(f))})(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pc(n,i)}else if(e instanceof ac?n.Q_.Ke(e):e instanceof Cw?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ie.min()))try{const i=await Vw(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Q_.rt(c);return f.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const _=l.N_.get(v);_&&l.N_.set(v,_.withResumeToken(g.resumeToken,c))}})),f.targetMismatches.forEach(((g,v)=>{const _=l.N_.get(g);if(!_)return;l.N_.set(g,_.withResumeToken(Ot.EMPTY_BYTE_STRING,_.snapshotVersion)),zw(l,g);const I=new Ei(_.target,g,v,_.sequenceNumber);Tp(l,I)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Pc(n,i)}}async function Pc(n,e,t){if(!Cl(e))throw e;n.L_.add(1),await xl(n),n.q_.set("Offline"),t||(t=()=>Vw(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Gc(n)}))}function $w(n,e){return e().catch((t=>Pc(n,t,e)))}async function Qc(n){const e=Se(n),t=Ci(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;KC(e);)try{const o=await xC(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,GC(e,o)}catch(o){await Pc(e,o)}Ww(e)&&qw(e)}function KC(n){return Is(n)&&n.O_.length<10}function GC(n,e){n.O_.push(e);const t=Ci(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Ww(n){return Is(n)&&!Ci(n).n_()&&n.O_.length>0}function qw(n){Ci(n).start()}async function QC(n){Ci(n).p_()}async function YC(n){const e=Ci(n);for(const t of n.O_)e.m_(t.mutations)}async function XC(n,e,t){const i=n.O_.shift(),o=mp.from(i,e,t);await $w(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Qc(n)}async function JC(n,e){e&&Ci(n).V_&&await(async function(i,o){if((function(c){return U1(c)&&c!==Y.ABORTED})(o.code)){const l=i.O_.shift();Ci(i).s_(),await $w(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Qc(i)}})(n,e),Ww(n)&&qw(n)}async function wv(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=Is(t);t.L_.add(3),await xl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Gc(t)}async function ZC(n,e){const t=Se(n);e?(t.L_.delete(2),await Gc(t)):e||(t.L_.add(2),await xl(t),t.q_.set("Unknown"))}function Wo(n){return n.K_||(n.K_=(function(t,i,o){const l=Se(t);return l.w_(),new FC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Eo:$C.bind(null,n),Ro:WC.bind(null,n),mo:qC.bind(null,n),d_:HC.bind(null,n)}),n.B_.push((async e=>{e?(n.K_.s_(),Sp(n)?Ip(n):n.q_.set("Unknown")):(await n.K_.stop(),Bw(n))}))),n.K_}function Ci(n){return n.U_||(n.U_=(function(t,i,o){const l=Se(t);return l.w_(),new jC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:QC.bind(null,n),mo:JC.bind(null,n),f_:YC.bind(null,n),g_:XC.bind(null,n)}),n.B_.push((async e=>{e?(n.U_.s_(),await Qc(n)):(await n.U_.stop(),n.O_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))}))),n.U_}/**
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
 */class Ap{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new Ap(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Cl(n))return new ve(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ao{constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=Ga(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ao;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Ev{constructor(){this.W_=new nt(_e.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Oo{constructor(e,t,i,o,l,c,f,g,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Oo(e,t,Ao.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class eP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class tP{constructor(){this.queries=Tv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=Tv(),l.forEach(((c,f)=>{for(const g of f.j_)g.onError(i)}))})(this,new ve(Y.ABORTED,"Firestore shutting down"))}}function Tv(){return new $o((n=>pw(n)),Bc)}async function nP(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new eP,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=kp(c,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Cp(t)}async function rP(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function iP(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.j_)f.X_(o)&&(i=!0);c.z_=o}}i&&Cp(t)}function sP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function Cp(n){n.Y_.forEach((e=>{e.next()}))}var Lf,Iv;(Iv=Lf||(Lf={})).ea="default",Iv.Cache="cache";class oP{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Oo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lf.Cache}}/**
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
 */class Hw{constructor(e){this.key=e}}class Kw{constructor(e){this.key=e}}class aP{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=be(),this.mutatedKeys=be(),this.Aa=mw(e),this.Ra=new Ao(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Ev,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,I)=>{const C=o.get(_),U=$c(this.query,I)?I:null,W=!!C&&this.mutatedKeys.has(C.key),$=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let M=!1;C&&U?C.data.isEqual(U.data)?W!==$&&(i.track({type:3,doc:U}),M=!0):this.ga(C,U)||(i.track({type:2,doc:U}),M=!0,(g&&this.Aa(U,g)>0||v&&this.Aa(U,v)<0)&&(f=!0)):!C&&U?(i.track({type:0,doc:U}),M=!0):C&&!U&&(i.track({type:1,doc:C}),M=!0,(g||v)&&(f=!0)),M&&(U?(c=c.add(U),l=$?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{Ra:c,fa:i,ns:f,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort(((_,I)=>(function(U,W){const $=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return $(U)-$(W)})(_.type,I.type)||this.Aa(_.doc,I.doc))),this.pa(i),o=o!=null&&o;const f=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,v=g!==this.Ea;return this.Ea=g,c.length!==0||v?{snapshot:new Oo(this.query,e.Ra,l,c,e.mutatedKeys,g===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:f}:{wa:f}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ev,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=be(),this.Ra.forEach((i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))}));const t=[];return e.forEach((i=>{this.da.has(i)||t.push(new Kw(i))})),this.da.forEach((i=>{e.has(i)||t.push(new Hw(i))})),t}ba(e){this.Ta=e.Ts,this.da=be();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class lP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class uP{constructor(e){this.key=e,this.va=!1}}class cP{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new $o((f=>pw(f)),Bc),this.Ma=new Map,this.xa=new Set,this.Oa=new nt(_e.comparator),this.Na=new Map,this.La=new vp,this.Ba={},this.ka=new Map,this.qa=Do.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dP(n,e,t=!0){const i=Zw(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await Gw(i,e,t,!0),o}async function hP(n,e){const t=Zw(n);await Gw(t,e,!0,!1)}async function Gw(n,e,t,i){const o=await bC(n.localStore,or(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await fP(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&Uw(n.remoteStore,o),f}async function fP(n,e,t,i,o){n.Ka=(I,C,U)=>(async function($,M,Z,se){let de=M.view.ma(Z);de.ns&&(de=await yv($.localStore,M.query,!1).then((({documents:x})=>M.view.ma(x,de))));const me=se&&se.targetChanges.get(M.targetId),Oe=se&&se.targetMismatches.get(M.targetId)!=null,ge=M.view.applyChanges(de,$.isPrimaryClient,me,Oe);return Av($,M.targetId,ge.wa),ge.snapshot})(n,I,C,U);const l=await yv(n.localStore,e,!0),c=new aP(e,l.Ts),f=c.ma(l.documents),g=Rl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),v=c.applyChanges(f,n.isPrimaryClient,g);Av(n,t,v.wa);const _=new lP(e,t,c);return n.Fa.set(e,_),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),v.snapshot}async function pP(n,e,t){const i=Se(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter((c=>!Bc(c,e)))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Of(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ep(i.remoteStore,o.targetId),Mf(i,o.targetId)})).catch(kl)):(Mf(i,o.targetId),await Of(i.localStore,o.targetId,!0))}async function mP(n,e){const t=Se(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ep(t.remoteStore,i.targetId))}async function gP(n,e,t){const i=IP(n);try{const o=await(function(c,f){const g=Se(c),v=_t.now(),_=f.reduce(((U,W)=>U.add(W.key)),be());let I,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let W=$r(),$=be();return g.cs.getEntries(U,_).next((M=>{W=M,W.forEach(((Z,se)=>{se.isValidDocument()||($=$.add(Z))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,W))).next((M=>{I=M;const Z=[];for(const se of f){const de=L1(se,I.get(se.key).overlayedDocument);de!=null&&Z.push(new Ts(se.key,de,aw(de.value.mapValue),ar.exists(!0)))}return g.mutationQueue.addMutationBatch(U,v,Z,f)})).next((M=>{C=M;const Z=M.applyToLocalDocumentSet(I,$);return g.documentOverlayCache.saveOverlays(U,M.batchId,Z)}))})).then((()=>({batchId:C.batchId,changes:yw(I)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,g){let v=c.Ba[c.currentUser.toKey()];v||(v=new nt(Ue)),v=v.insert(f,g),c.Ba[c.currentUser.toKey()]=v})(i,o.batchId,t),await bl(i,o.changes),await Qc(i.remoteStore)}catch(o){const l=kp(o,"Failed to persist write");t.reject(l)}}async function Qw(n,e){const t=Se(n);try{const i=await PC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Na.get(l);c&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?qe(c.va):o.removedDocuments.size>0&&(qe(c.va),c.va=!1))})),await bl(t,i,e)}catch(i){await kl(i)}}function Sv(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach(((l,c)=>{const f=c.view.Z_(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const g=Se(c);g.onlineState=f;let v=!1;g.queries.forEach(((_,I)=>{for(const C of I.j_)C.Z_(f)&&(v=!0)})),v&&Cp(g)})(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function yP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new nt(_e.comparator);c=c.insert(l,zt.newNoDocument(l,Ie.min()));const f=be().add(l),g=new Hc(Ie.min(),new Map,new nt(Ue),c,f);await Qw(i,g),i.Oa=i.Oa.remove(l),i.Na.delete(e),Pp(i)}else await Of(i.localStore,e,!1).then((()=>Mf(i,e,t))).catch(kl)}async function vP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await CC(t.localStore,e);Xw(t,i,null),Yw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await bl(t,o)}catch(o){await kl(o)}}async function _P(n,e,t){const i=Se(n);try{const o=await(function(c,f){const g=Se(c);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let _;return g.mutationQueue.lookupMutationBatch(v,f).next((I=>(qe(I!==null),_=I.keys(),g.mutationQueue.removeMutationBatch(v,I)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,_,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,_))).next((()=>g.localDocuments.getDocuments(v,_)))}))})(i.localStore,e);Xw(i,e,t),Yw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await bl(i,o)}catch(o){await kl(o)}}function Yw(n,e){(n.ka.get(e)||[]).forEach((t=>{t.resolve()})),n.ka.delete(e)}function Xw(n,e,t){const i=Se(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function Mf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach((i=>{n.La.containsKey(i)||Jw(n,i)}))}function Jw(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ep(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Pp(n))}function Av(n,e,t){for(const i of t)i instanceof Hw?(n.La.addReference(i.key,e),wP(n,i)):i instanceof Kw?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||Jw(n,i.key)):Te()}function wP(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.xa.add(i),Pp(n))}function Pp(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new _e(st.fromString(e)),i=n.qa.next();n.Na.set(i,new uP(t)),n.Oa=n.Oa.insert(t,i),Uw(n.remoteStore,new Ei(or(hp(t.path)),i,"TargetPurposeLimboResolution",op.oe))}}async function bl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach(((f,g)=>{c.push(i.Ka(g,e,t).then((v=>{var _;if((v||t)&&i.isPrimaryClient){const I=v?!v.fromCache:(_=t?.targetChanges.get(g.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(g.targetId,I?"current":"not-current")}if(v){o.push(v);const I=wp.Wi(g.targetId,v);l.push(I)}})))})),await Promise.all(c),i.Ca.d_(o),await(async function(g,v){const _=Se(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>G.forEach(v,(C=>G.forEach(C.$i,(U=>_.persistence.referenceDelegate.addReference(I,C.targetId,U))).next((()=>G.forEach(C.Ui,(U=>_.persistence.referenceDelegate.removeReference(I,C.targetId,U)))))))))}catch(I){if(!Cl(I))throw I;ae("LocalStore","Failed to update sequence numbers: "+I)}for(const I of v){const C=I.targetId;if(!I.fromCache){const U=_.os.get(C),W=U.snapshotVersion,$=U.withLastLimboFreeSnapshotVersion(W);_.os=_.os.insert(C,$)}}})(i.localStore,l))}async function EP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await Mw(t.localStore,e);t.currentUser=e,(function(l,c){l.ka.forEach((f=>{f.forEach((g=>{g.reject(new ve(Y.CANCELLED,c))}))})),l.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await bl(t,i.hs)}}function TP(n,e){const t=Se(n),i=t.Na.get(e);if(i&&i.va)return be().add(i.key);{let o=be();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const f=t.Fa.get(c);o=o.unionWith(f.view.Va)}return o}}function Zw(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yP.bind(null,e),e.Ca.d_=iP.bind(null,e.eventManager),e.Ca.$a=sP.bind(null,e.eventManager),e}function IP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_P.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return kC(this.persistence,new SC,e.initialUser,this.serializer)}Ga(e){return new EC(_p.Zr,this.serializer)}Wa(e){return new DC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class Vf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Sv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=EP.bind(null,this.syncEngine),await ZC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new tP})()}createDatastore(e){const t=Kc(e.databaseInfo.databaseId),i=(function(l){return new VC(l)})(e.databaseInfo);return(function(l,c,f,g){return new UC(l,c,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new BC(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Sv(this.syncEngine,t,0)),(function(){return _v.D()?new _v:new OC})())}createSyncEngine(e,t){return(function(o,l,c,f,g,v,_){const I=new cP(o,l,c,f,g,v);return _&&(I.Qa=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await xl(l),l.k_.shutdown(),l.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vf.provider={build:()=>new Vf};/**
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
 */class SP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class AP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=iw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ae("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ae("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=kp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Xh(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Mw(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function kv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kP(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>wv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>wv(e.remoteStore,o))),n._onlineComponents=e}async function kP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ro("Error using user provided cache. Falling back to memory cache: "+t),await Xh(n,new Rc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Xh(n,new Rc);return n._offlineComponents}async function e0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await kv(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await kv(n,new Vf))),n._onlineComponents}function CP(n){return e0(n).then((e=>e.syncEngine))}async function Cv(n){const e=await e0(n),t=e.eventManager;return t.onListen=dP.bind(null,e.syncEngine),t.onUnlisten=pP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mP.bind(null,e.syncEngine),t}/**
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
 */function t0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pv=new Map;/**
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
 */function PP(n,e,t){if(!t)throw new ve(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function RP(n,e,t,i){if(e===!0&&i===!0)throw new ve(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Rv(n){if(!_e.isDocumentKey(n))throw new ve(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function ds(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rp(n);throw new ve(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class xv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ve(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ve(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ve(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xp{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xv(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new $k;switch(i.type){case"firstParty":return new Kk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ve(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Pv.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Pv.delete(t),i.terminate())})(this),Promise.resolve()}}function xP(n,e,t,i={}){var o;const l=(n=ds(n,xp))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=Ut.MOCK_USER;else{f=tI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new ve(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ut(v)}n._authCredentials=new Wk(new rw(f,g))}}/**
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
 */class Yc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yc(this.firestore,e,this._query)}}class Sn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sn(this.firestore,e,this._key)}}class fl extends Yc{constructor(e,t,i){super(e,t,hp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sn(this.firestore,null,new _e(e))}withConverter(e){return new fl(this.firestore,e,this._path)}}function Xc(n,e,...t){if(n=Dt(n),arguments.length===1&&(e=iw.newId()),PP("doc","path",e),n instanceof xp){const i=st.fromString(e,...t);return Rv(i),new Sn(n,null,new _e(i))}{if(!(n instanceof Sn||n instanceof fl))throw new ve(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return Rv(i),new Sn(n.firestore,n instanceof fl?n.converter:null,new _e(i))}}/**
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
 */class bv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fw(this,"async_queue_retry"),this.Vu=()=>{const i=Yh();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Yh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Yh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new cs;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Cl(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((i=>{this.Eu=i,this.du=!1;const o=(function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f})(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i})).then((i=>(this.du=!1,i))))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Ap.createAndSchedule(this,e,t,i,(l=>this.yu(l)));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Nv(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}class pl extends xp{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new bv,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bv(e),this._firestoreClient=void 0,await e}}}function bP(n,e){const t=typeof n=="object"?n:Qf(),i=typeof n=="string"?n:"(default)",o=Fo(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=ZT("firestore");l&&xP(o,...l)}return o}function n0(n){if(n._terminated)throw new ve(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||NP(n),n._firestoreClient}function NP(n){var e,t,i;const o=n._freezeSettings(),l=(function(f,g,v,_){return new o1(f,g,v,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,t0(_.experimentalLongPollingOptions),_.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new AP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const g=f?._online.build();return{_offline:f?._offline.build(g),_online:g}})(n._componentsProvider))}/**
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
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(Ot.fromBase64String(e))}catch(t){throw new ve(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Lo(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class r0{constructor(e){this._methodName=e}}/**
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
 */class Np{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}}/**
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
 */class Dp{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}}/**
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
 */const DP=/^__.*__$/;class OP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pl(e,this.data,t,this.fieldTransforms)}}function i0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Op{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(i0(this.Cu)&&DP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class LP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Kc(e)}Qu(e,t,i,o=!1){return new Op({Cu:e,methodName:t,qu:i,path:bt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MP(n){const e=n._freezeSettings(),t=Kc(n._databaseId);return new LP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function VP(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);l0("Data must be an object, but it was:",c,i);const f=o0(i,c);let g,v;if(l.merge)g=new zn(c.fieldMask),v=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const I of l.mergeFields){const C=FP(e,I,t);if(!c.contains(C))throw new ve(Y.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);UP(_,C)||_.push(C)}g=new zn(_),v=c.fieldTransforms.filter((I=>g.covers(I.field)))}else g=null,v=c.fieldTransforms;return new OP(new Tn(f),g,v)}function s0(n,e){if(a0(n=Dt(n)))return l0("Unsupported field value:",e,n),o0(n,e);if(n instanceof r0)return(function(i,o){if(!i0(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let g=s0(f,o.Lu(c));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Dt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return R1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:Cc(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Cc(o.serializer,l)}}if(i instanceof Np)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Lo)return{bytesValue:Rw(o.serializer,i._byteString)};if(i instanceof Sn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:yp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Dp)return(function(c,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Bu("VectorValues must only contain numeric values.");return fp(f.serializer,g)}))}}}}}})(i,o);throw o.Bu(`Unsupported field value: ${Rp(i)}`)})(n,e)}function o0(n,e){const t={};return sw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bo(n,((i,o)=>{const l=s0(o,e.Mu(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function a0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Np||n instanceof Lo||n instanceof Sn||n instanceof r0||n instanceof Dp)}function l0(n,e,t){if(!a0(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const i=Rp(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function FP(n,e,t){if((e=Dt(e))instanceof bp)return e._internalPath;if(typeof e=="string")return u0(n,e);throw xc("Field path arguments must be of type string or ",n,!1,void 0,t)}const jP=new RegExp("[~\\*/\\[\\]]");function u0(n,e,t){if(e.search(jP)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bp(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||c)&&(g+=" (found",l&&(g+=` in field ${i}`),c&&(g+=` in document ${o}`),g+=")"),new ve(Y.INVALID_ARGUMENT,f+n+g)}function UP(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class c0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(d0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zP extends c0{data(){return super.data()}}function d0(n,e){return typeof e=="string"?u0(n,e):e instanceof bp?e._internalPath:e._delegate._internalPath}/**
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
 */function BP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ve(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $P{convertValue(e,t="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Bo(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>ut(c.doubleValue)));return new Dp(l)}convertGeoPoint(e){return new Np(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=lp(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const t=ki(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);qe(Lw(i));const o=new ul(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function WP(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class Ya{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h0 extends c0{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(d0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class lc extends h0{data(e={}){return super.data(e)}}class qP{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ya(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new lc(this._firestore,this._userDataWriter,i.key,i,new Ya(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ve(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ya(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new lc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ya(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,_=-1;return f.type!==0&&(v=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),_=c.indexOf(f.doc.key)),{type:HP(f.type),doc:g,oldIndex:v,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function HP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class f0 extends $P{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sn(this.firestore,null,t)}}function p0(n,e,t){n=ds(n,Sn);const i=ds(n.firestore,pl),o=WP(n.converter,e);return m0(i,[VP(MP(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,ar.none())])}function KP(n){return m0(ds(n.firestore,pl),[new pp(n._key,ar.none())])}function GP(n,...e){var t,i,o;n=Dt(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Nv(e[c])||(l=e[c],c++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Nv(e[c])){const I=e[c];e[c]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[c+1]=(i=I.error)===null||i===void 0?void 0:i.bind(I),e[c+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let g,v,_;if(n instanceof Sn)v=ds(n.firestore,pl),_=hp(n._key.path),g={next:I=>{e[c]&&e[c](QP(v,n,I))},error:e[c+1],complete:e[c+2]};else{const I=ds(n,Yc);v=ds(I.firestore,pl),_=I._query;const C=new f0(v);g={next:U=>{e[c]&&e[c](new qP(v,C,I,U))},error:e[c+1],complete:e[c+2]},BP(n._query)}return(function(C,U,W,$){const M=new SP($),Z=new oP(U,M,W);return C.asyncQueue.enqueueAndForget((async()=>nP(await Cv(C),Z))),()=>{M.Za(),C.asyncQueue.enqueueAndForget((async()=>rP(await Cv(C),Z)))}})(n0(v),_,f,g)}function m0(n,e){return(function(i,o){const l=new cs;return i.asyncQueue.enqueueAndForget((async()=>gP(await CP(i),o,l))),l.promise})(n0(n),e)}function QP(n,e,t){const i=t.docs.get(e._key),o=new f0(n);return new h0(n,o,e._key,i,new Ya(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){zo=o})(jo),ur(new $n("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new pl(new qk(i.getProvider("auth-internal")),new Qk(i.getProvider("app-check-internal")),(function(v,_){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ve(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(v.options.projectId,_)})(c,o),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),In(Yy,"4.7.3",e),In(Yy,"4.7.3","esm2017")})();const g0="@firebase/installations",Lp="0.6.9";/**
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
 */const y0=1e4,v0=`w:${Lp}`,_0="FIS_v2",YP="https://firebaseinstallations.googleapis.com/v1",XP=3600*1e3,JP="installations",ZP="Installations";/**
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
 */const eR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_s=new Es(JP,ZP,eR);function w0(n){return n instanceof fr&&n.code.includes("request-failed")}/**
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
 */function E0({projectId:n}){return`${YP}/projects/${n}/installations`}function T0(n){return{token:n.token,requestStatus:2,expiresIn:nR(n.expiresIn),creationTime:Date.now()}}async function I0(n,e){const i=(await e.json()).error;return _s.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function S0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tR(n,{refreshToken:e}){const t=S0(n);return t.append("Authorization",rR(e)),t}async function A0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nR(n){return Number(n.replace("s","000"))}function rR(n){return`${_0} ${n}`}/**
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
 */async function iR({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=E0(n),o=S0(n),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const c={fid:t,authVersion:_0,appId:n.appId,sdkVersion:v0},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await A0(()=>fetch(i,f));if(g.ok){const v=await g.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:T0(v.authToken)}}else throw await I0("Create Installation",g)}/**
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
 */function k0(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function sR(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oR=/^[cdef][\w-]{21}$/,Ff="";function aR(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=lR(n);return oR.test(t)?t:Ff}catch{return Ff}}function lR(n){return sR(n).substr(0,22)}/**
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
 */function Jc(n){return`${n.appName}!${n.appId}`}/**
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
 */const C0=new Map;function P0(n,e){const t=Jc(n);R0(t,e),uR(t,e)}function R0(n,e){const t=C0.get(n);if(t)for(const i of t)i(e)}function uR(n,e){const t=cR();t&&t.postMessage({key:n,fid:e}),dR()}let ls=null;function cR(){return!ls&&"BroadcastChannel"in self&&(ls=new BroadcastChannel("[Firebase] FID Change"),ls.onmessage=n=>{R0(n.data.key,n.data.fid)}),ls}function dR(){C0.size===0&&ls&&(ls.close(),ls=null)}/**
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
 */const hR="firebase-installations-database",fR=1,ws="firebase-installations-store";let Jh=null;function Mp(){return Jh||(Jh=Mc(hR,fR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ws)}}})),Jh}async function bc(n,e){const t=Jc(n),o=(await Mp()).transaction(ws,"readwrite"),l=o.objectStore(ws),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&P0(n,e.fid),e}async function x0(n){const e=Jc(n),i=(await Mp()).transaction(ws,"readwrite");await i.objectStore(ws).delete(e),await i.done}async function Zc(n,e){const t=Jc(n),o=(await Mp()).transaction(ws,"readwrite"),l=o.objectStore(ws),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&P0(n,f.fid),f}/**
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
 */async function Vp(n){let e;const t=await Zc(n.appConfig,i=>{const o=pR(i),l=mR(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Ff?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function pR(n){const e=n||{fid:aR(),registrationStatus:0};return b0(e)}function mR(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(_s.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=gR(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yR(n)}:{installationEntry:e}}async function gR(n,e){try{const t=await iR(n,e);return bc(n.appConfig,t)}catch(t){throw w0(t)&&t.customData.serverCode===409?await x0(n.appConfig):await bc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function yR(n){let e=await Dv(n.appConfig);for(;e.registrationStatus===1;)await k0(100),e=await Dv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Vp(n);return i||t}return e}function Dv(n){return Zc(n,e=>{if(!e)throw _s.create("installation-not-found");return b0(e)})}function b0(n){return vR(n)?{fid:n.fid,registrationStatus:0}:n}function vR(n){return n.registrationStatus===1&&n.registrationTime+y0<Date.now()}/**
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
 */async function _R({appConfig:n,heartbeatServiceProvider:e},t){const i=wR(n,t),o=tR(n,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const c={installation:{sdkVersion:v0,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},g=await A0(()=>fetch(i,f));if(g.ok){const v=await g.json();return T0(v)}else throw await I0("Generate Auth Token",g)}function wR(n,{fid:e}){return`${E0(n)}/${e}/authTokens:generate`}/**
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
 */async function Fp(n,e=!1){let t;const i=await Zc(n.appConfig,l=>{if(!N0(l))throw _s.create("not-registered");const c=l.authToken;if(!e&&IR(c))return l;if(c.requestStatus===1)return t=ER(n,e),l;{if(!navigator.onLine)throw _s.create("app-offline");const f=AR(l);return t=TR(n,f),f}});return t?await t:i.authToken}async function ER(n,e){let t=await Ov(n.appConfig);for(;t.authToken.requestStatus===1;)await k0(100),t=await Ov(n.appConfig);const i=t.authToken;return i.requestStatus===0?Fp(n,e):i}function Ov(n){return Zc(n,e=>{if(!N0(e))throw _s.create("not-registered");const t=e.authToken;return kR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function TR(n,e){try{const t=await _R(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await bc(n.appConfig,i),t}catch(t){if(w0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await x0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bc(n.appConfig,i)}throw t}}function N0(n){return n!==void 0&&n.registrationStatus===2}function IR(n){return n.requestStatus===2&&!SR(n)}function SR(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+XP}function AR(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function kR(n){return n.requestStatus===1&&n.requestTime+y0<Date.now()}/**
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
 */async function CR(n){const e=n,{installationEntry:t,registrationPromise:i}=await Vp(e);return i?i.catch(console.error):Fp(e).catch(console.error),t.fid}/**
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
 */async function PR(n,e=!1){const t=n;return await RR(t),(await Fp(t,e)).token}async function RR(n){const{registrationPromise:e}=await Vp(n);e&&await e}/**
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
 */function xR(n){if(!n||!n.options)throw Zh("App Configuration");if(!n.name)throw Zh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Zh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Zh(n){return _s.create("missing-app-config-values",{valueName:n})}/**
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
 */const D0="installations",bR="installations-internal",NR=n=>{const e=n.getProvider("app").getImmediate(),t=xR(e),i=Fo(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},DR=n=>{const e=n.getProvider("app").getImmediate(),t=Fo(e,D0).getImmediate();return{getId:()=>CR(t),getToken:o=>PR(t,o)}};function OR(){ur(new $n(D0,NR,"PUBLIC")),ur(new $n(bR,DR,"PRIVATE"))}OR();In(g0,Lp);In(g0,Lp,"esm2017");/**
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
 */const LR="/firebase-messaging-sw.js",MR="/firebase-cloud-messaging-push-scope",O0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",VR="https://fcmregistrations.googleapis.com/v1",L0="google.c.a.c_id",FR="google.c.a.c_l",jR="google.c.a.ts",UR="google.c.a.e";var Lv;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Lv||(Lv={}));/**
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
 */var ml;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(ml||(ml={}));/**
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
 */function Dr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function zR(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const ef="fcm_token_details_db",BR=5,Mv="fcm_token_object_Store";async function $R(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(ef))return null;let e=null;return(await Mc(ef,BR,{upgrade:async(i,o,l,c)=>{var f;if(o<2||!i.objectStoreNames.contains(Mv))return;const g=c.objectStore(Mv),v=await g.index("fcmSenderId").get(n);if(await g.clear(),!!v){if(o===2){const _=v;if(!_.auth||!_.p256dh||!_.endpoint)return;e={token:_.fcmToken,createTime:(f=_.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:_.auth,p256dh:_.p256dh,endpoint:_.endpoint,swScope:_.swScope,vapidKey:typeof _.vapidKey=="string"?_.vapidKey:Dr(_.vapidKey)}}}else if(o===3){const _=v;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Dr(_.auth),p256dh:Dr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Dr(_.vapidKey)}}}else if(o===4){const _=v;e={token:_.fcmToken,createTime:_.createTime,subscriptionOptions:{auth:Dr(_.auth),p256dh:Dr(_.p256dh),endpoint:_.endpoint,swScope:_.swScope,vapidKey:Dr(_.vapidKey)}}}}}})).close(),await $h(ef),await $h("fcm_vapid_details_db"),await $h("undefined"),WR(e)?e:null}function WR(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const qR="firebase-messaging-database",HR=1,gl="firebase-messaging-store";let tf=null;function M0(){return tf||(tf=Mc(qR,HR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gl)}}})),tf}async function KR(n){const e=V0(n),i=await(await M0()).transaction(gl).objectStore(gl).get(e);if(i)return i;{const o=await $R(n.appConfig.senderId);if(o)return await jp(n,o),o}}async function jp(n,e){const t=V0(n),o=(await M0()).transaction(gl,"readwrite");return await o.objectStore(gl).put(e,t),await o.done,e}function V0({appConfig:n}){return n.appId}/**
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
 */const GR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Gt=new Es("messaging","Messaging",GR);/**
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
 */async function QR(n,e){const t=await zp(n),i=F0(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(Up(n.appConfig),o)).json()}catch(c){throw Gt.create("token-subscribe-failed",{errorInfo:c?.toString()})}if(l.error){const c=l.error.message;throw Gt.create("token-subscribe-failed",{errorInfo:c})}if(!l.token)throw Gt.create("token-subscribe-no-token");return l.token}async function YR(n,e){const t=await zp(n),i=F0(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Up(n.appConfig)}/${e.token}`,o)).json()}catch(c){throw Gt.create("token-update-failed",{errorInfo:c?.toString()})}if(l.error){const c=l.error.message;throw Gt.create("token-update-failed",{errorInfo:c})}if(!l.token)throw Gt.create("token-update-no-token");return l.token}async function XR(n,e){const i={method:"DELETE",headers:await zp(n)};try{const l=await(await fetch(`${Up(n.appConfig)}/${e}`,i)).json();if(l.error){const c=l.error.message;throw Gt.create("token-unsubscribe-failed",{errorInfo:c})}}catch(o){throw Gt.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function Up({projectId:n}){return`${VR}/projects/${n}/registrations`}async function zp({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function F0({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==O0&&(o.web.applicationPubKey=i),o}/**
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
 */const JR=10080*60*1e3;async function ZR(n){const e=await tx(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Dr(e.getKey("auth")),p256dh:Dr(e.getKey("p256dh"))},i=await KR(n.firebaseDependencies);if(i){if(nx(i.subscriptionOptions,t))return Date.now()>=i.createTime+JR?ex(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await XR(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return Vv(n.firebaseDependencies,t)}else return Vv(n.firebaseDependencies,t)}async function ex(n,e){try{const t=await YR(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await jp(n.firebaseDependencies,i),t}catch(t){throw t}}async function Vv(n,e){const i={token:await QR(n,e),createTime:Date.now(),subscriptionOptions:e};return await jp(n,i),i.token}async function tx(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:zR(e)})}function nx(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
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
 */function Fv(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return rx(e,n),ix(e,n),sx(e,n),e}function rx(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function ix(n,e){e.data&&(n.data=e.data)}function sx(n,e){var t,i,o,l,c;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const f=(o=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&o!==void 0?o:(l=e.notification)===null||l===void 0?void 0:l.click_action;f&&(n.fcmOptions.link=f);const g=(c=e.fcmOptions)===null||c===void 0?void 0:c.analytics_label;g&&(n.fcmOptions.analyticsLabel=g)}/**
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
 */function ox(n){return typeof n=="object"&&!!n&&L0 in n}/**
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
 */function ax(n){if(!n||!n.options)throw nf("App Configuration Object");if(!n.name)throw nf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw nf(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function nf(n){return Gt.create("missing-app-config-values",{valueName:n})}/**
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
 */class lx{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=ax(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function ux(n){try{n.swRegistration=await navigator.serviceWorker.register(LR,{scope:MR}),n.swRegistration.update().catch(()=>{})}catch(e){throw Gt.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}/**
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
 */async function cx(n,e){if(!e&&!n.swRegistration&&await ux(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Gt.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function dx(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=O0)}/**
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
 */async function j0(n,e){if(!navigator)throw Gt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Gt.create("permission-blocked");return await dx(n,e?.vapidKey),await cx(n,e?.serviceWorkerRegistration),ZR(n)}/**
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
 */async function hx(n,e,t){const i=fx(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[L0],message_name:t[FR],message_time:t[jR],message_device_time:Math.floor(Date.now()/1e3)})}function fx(n){switch(n){case ml.NOTIFICATION_CLICKED:return"notification_open";case ml.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function px(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===ml.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Fv(t)):n.onMessageHandler.next(Fv(t)));const i=t.data;ox(i)&&i[UR]==="1"&&await hx(n,t.messageType,i)}const jv="@firebase/messaging",Uv="0.12.12";/**
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
 */const mx=n=>{const e=new lx(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>px(e,t)),e},gx=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>j0(e,i)}};function yx(){ur(new $n("messaging",mx,"PUBLIC")),ur(new $n("messaging-internal",gx,"PRIVATE")),In(jv,Uv),In(jv,Uv,"esm2017")}/**
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
 */async function U0(){try{await d_()}catch{return!1}return typeof window<"u"&&c_()&&uI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function vx(n=Qf()){return U0().then(e=>{if(!e)throw Gt.create("unsupported-browser")},e=>{throw Gt.create("indexed-db-unsupported")}),Fo(Dt(n),"messaging").getImmediate()}async function _x(n,e){return n=Dt(n),j0(n,e)}yx();const wx={apiKey:"AIzaSyBe11U4RkUbpvs-H0YbJH8oIztS0f5r4Dc",authDomain:"edith-4f693.firebaseapp.com",projectId:"edith-4f693",storageBucket:"edith-4f693.firebasestorage.app",messagingSenderId:"199651360117",appId:"1:199651360117:web:82732458f9a9a6ff08673c"},Bp=p_(wx),hr=zk(Bp),Mo=bP(Bp),Ex="BB2SuH4VAVFH4HbgQBwYy3hp5sui3BRl1v_NDvsSgf8xZ-lXsXK8xdXQO2gN-jg9rTyt25_Wcf5x2R6tATtmZYk",Tx=async()=>{try{return await U0()?vx(Bp):(console.warn("FCM is not supported in this browser."),null)}catch(n){return console.warn("Failed to initialize FCM:",n),null}},jf=!0;let rf=null;const Uf=(n=1500)=>{Mo&&(rf&&clearTimeout(rf),rf=setTimeout(async()=>{const{user:e,data:t}=ue.getState();if(e){ue.setState({syncStatus:"syncing"});try{const i=Xc(Mo,"users",e.uid,"data","master");await p0(i,t),ue.setState({syncStatus:"idle"})}catch(i){console.error("Firestore sync error:",i),ue.setState({syncStatus:"error"}),it.error(Co.syncError)}}},n))},Ix=(n,e)=>{if(!Mo)return()=>{};const t=Xc(Mo,"users",n,"data","master");return GP(t,i=>{i.exists()&&e(i.data())},i=>{console.error("Firestore snapshot error:",i.code,i.message),ue.setState({syncStatus:"error"}),it.error(Co.syncError)})},Sx="1970-01-01T00:00:00.000Z",Ax=n=>!n||n===Sx,kx=()=>{const n=ue(l=>l.setUser),e=ue(l=>l.setUserProfile),t=ue(l=>l.setAuthLoading),i=ue(l=>l.setData),o=ue(l=>l.user);return ye.useEffect(()=>{if(!hr){t(!1);return}const l=RA(hr,c=>{if(n(c),c){const f=ue.getState().data.userName;e({name:f||c.displayName||"Student",email:c.email||""})}else e(null);t(!1)});return()=>l()},[]),ye.useEffect(()=>{if(!o||!jf)return;const l=Ix(o.uid,c=>{const g=ue.getState().data.updatedAt;if(Ax(g)){i(c),c.userName&&ue.getState().setUserProfile({name:c.userName,email:ue.getState().userProfile?.email||""});return}c.updatedAt>g&&(i(c),c.userName&&ue.getState().setUserProfile({name:c.userName,email:ue.getState().userProfile?.email||""}))});return()=>l()},[o]),{user:o,isAuthenticated:!!o,isFirebaseConfigured:jf}},Cx=async(n,e)=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{return await SA(hr,n,e),{success:!0}}catch(t){const i=t?.code||"";return i==="auth/user-not-found"?{success:!1,error:"No account found. Double check your email."}:i==="auth/wrong-password"?{success:!1,error:"Wrong password. Try harder."}:i==="auth/invalid-email"?{success:!1,error:"That email doesn't look right."}:i==="auth/too-many-requests"?{success:!1,error:"Too many attempts. Take a breather."}:{success:!1,error:t?.message||"Login failed"}}},Px=async(n,e,t)=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{const i=await IA(hr,n,e);return await kA(i.user,{displayName:t}),{success:!0}}catch(i){const o=i?.code||"";return o==="auth/email-already-in-use"?{success:!1,error:"That email's taken. Log in instead."}:o==="auth/weak-password"?{success:!1,error:"That password's weaker than my prep schedule. Try harder."}:o==="auth/invalid-email"?{success:!1,error:"That email doesn't look right."}:{success:!1,error:i?.message||"Registration failed"}}},V2=async()=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{return await xA(hr),{success:!0}}catch(n){return{success:!1,error:n?.message||"Sign out failed"}}},Rx=async n=>{if(!hr)return{success:!1,error:"Firebase not configured"};try{return await TA(hr,n),{success:!0}}catch(e){return{success:!1,error:e?.message||"Password reset failed"}}},xx={primary:"bg-accent text-white hover:brightness-110 shadow-lg",secondary:"bg-surface-2 text-text-1 border border-border hover:bg-surface-3",ghost:"bg-transparent text-text-2 hover:bg-surface-2 hover:text-text-1",danger:"bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20"},bx={sm:"px-3 py-1.5 text-xs rounded-xl",md:"px-5 py-2.5 text-sm rounded-xl",lg:"px-8 py-3 text-sm rounded-xl"},yl=({variant:n="primary",size:e="md",loading:t=!1,children:i,className:o="",disabled:l,...c})=>N.jsxs("button",{className:`
        font-body font-semibold uppercase tracking-wide
        transition-all duration-150 active:scale-95
        focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none
        disabled:opacity-50 disabled:pointer-events-none
        inline-flex items-center justify-center gap-2
        ${xx[n]} ${bx[e]} ${o}
      `,disabled:l||t,...c,children:[t&&N.jsx("div",{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spinner"}),i]}),Eo=({label:n,error:e,className:t="",...i})=>{const o=ye.useRef(null),[l,c]=ye.useState(!1);return ye.useEffect(()=>{if(e){c(!0);const f=setTimeout(()=>c(!1),420);return()=>clearTimeout(f)}},[e]),N.jsxs("div",{className:`flex flex-col gap-1 ${l?"shake-error":""}`,ref:o,children:[n&&N.jsx("label",{className:"text-[10px] uppercase font-semibold tracking-wider text-text-2 ml-1",children:n}),N.jsx("input",{className:`
          w-full px-4 py-2.5 rounded-xl border border-border bg-surface-2
          text-sm text-text-1 font-body
          placeholder:text-text-3
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30
          transition-colors
          ${e?"border-danger":""}
          ${t}
        `,...i}),e&&N.jsx("span",{className:"text-[11px] text-danger ml-1",children:e})]})},Nx=()=>{const n=ue(C=>C.setAuthScreen),[e,t]=ye.useState(""),[i,o]=ye.useState(""),[l,c]=ye.useState(""),[f,g]=ye.useState(!1),v=async C=>{if(C.preventDefault(),!e.trim()||!i.trim()){c("Fill in both fields.");return}g(!0),c(""),(await Cx(e,i)).success?it.success(Co.loginSuccess):c("Suffu didn't find you in his mind. Create a new account or Reset the password."),g(!1)},_=async()=>{if(!e.trim()){c("Enter your email first, then hit Forgot Password.");return}const C=await Rx(e);C.success?it.info(Co.passwordReset):c(C.error||"Reset failed")},I=()=>{n("register")};return N.jsx("div",{className:"h-full flex items-center justify-center p-4 relative",style:{zIndex:2},children:N.jsxs("div",{className:"w-full max-w-md auth-enter",children:[N.jsxs("div",{className:"text-center mb-10",children:[N.jsxs("div",{className:"relative inline-block",children:[N.jsx("img",{src:"/Edith/logo.png",alt:"E.D.I.T.H",className:"w-20 h-20 mx-auto rounded-2xl mb-4 relative",style:{zIndex:1}}),N.jsx("div",{className:"absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-liquid-pulse opacity-30",style:{background:"var(--accent)",filter:"blur(20px)"}})]}),N.jsx("h1",{className:"font-display text-4xl font-extrabold text-text-1 tracking-tight uppercase",children:"E.D.I.T.H"}),N.jsx("p",{className:"text-text-2 text-sm mt-2 font-medium",children:"CA Intermediate Study Tracker"})]}),N.jsxs("form",{onSubmit:v,className:"glass rounded-3xl p-6 card-shadow space-y-5",children:[N.jsx("h2",{className:"font-display text-lg font-bold text-text-1",children:"Sign In"}),!jf,N.jsx(Eo,{label:"Email",type:"email",placeholder:"your@email.com",value:e,onChange:C=>t(C.target.value),autoComplete:"email"}),N.jsx(Eo,{label:"Password",type:"password",placeholder:"••••••••",value:i,onChange:C=>o(C.target.value),autoComplete:"current-password"}),l&&N.jsx("p",{className:"text-danger text-xs font-medium shake-error",children:l}),N.jsx(yl,{type:"submit",loading:f,className:"w-full",size:"lg",children:"Login"}),N.jsxs("div",{className:"flex justify-between items-center text-xs",children:[N.jsx("button",{type:"button",onClick:_,className:"text-accent hover:underline font-medium",children:"Forgot password?"}),N.jsx("button",{type:"button",onClick:I,className:"text-text-2 hover:text-text-1 font-medium",children:"Create account →"})]})]})]})})},Dx=()=>{const n=ue($=>$.setAuthScreen),[e,t]=ye.useState(""),[i,o]=ye.useState(""),[l,c]=ye.useState(""),[f,g]=ye.useState(""),[v,_]=ye.useState(""),[I,C]=ye.useState(!1),U=async $=>{if($.preventDefault(),_(""),!e.trim()){_("Name is required.");return}if(!i.trim()){_("Email is required.");return}if(l.length<8){_("That password's weaker than my prep schedule. Min 8 characters.");return}if(l!==f){_("Passwords don't match. Try again.");return}C(!0);const M=await Px(i,l,e);M.success?it.success(Co.registerSuccess):_(M.error||"Registration failed"),C(!1)},W=()=>{n("login")};return N.jsx("div",{className:"h-full flex items-center justify-center p-4 relative",style:{zIndex:2},children:N.jsxs("div",{className:"w-full max-w-md auth-enter",children:[N.jsxs("div",{className:"text-center mb-10",children:[N.jsxs("div",{className:"relative inline-block",children:[N.jsx("img",{src:"/Edith/logo.png",alt:"E.D.I.T.H",className:"w-20 h-20 mx-auto rounded-2xl mb-4 relative",style:{zIndex:1}}),N.jsx("div",{className:"absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-liquid-pulse opacity-30",style:{background:"var(--accent)",filter:"blur(20px)"}})]}),N.jsx("h1",{className:"font-display text-4xl font-extrabold text-text-1 tracking-tight uppercase",children:"E.D.I.T.H"}),N.jsx("p",{className:"text-text-2 text-sm mt-2 font-medium",children:"Create your account"})]}),N.jsxs("form",{onSubmit:U,className:"glass rounded-3xl p-6 card-shadow space-y-5",children:[N.jsx("h2",{className:"font-display text-lg font-bold text-text-1",children:"Register"}),N.jsx(Eo,{label:"Name",type:"text",placeholder:"Your name",value:e,onChange:$=>t($.target.value),autoComplete:"name"}),N.jsx(Eo,{label:"Email",type:"email",placeholder:"your@email.com",value:i,onChange:$=>o($.target.value),autoComplete:"email"}),N.jsx(Eo,{label:"Password",type:"password",placeholder:"Min 8 characters",value:l,onChange:$=>c($.target.value),autoComplete:"new-password"}),N.jsx(Eo,{label:"Confirm Password",type:"password",placeholder:"Repeat password",value:f,onChange:$=>g($.target.value),autoComplete:"new-password"}),v&&N.jsx("p",{className:"text-danger text-xs font-medium shake-error",children:v}),N.jsx(yl,{type:"submit",loading:I,className:"w-full",size:"lg",children:"Create Account"}),N.jsx("div",{className:"text-center",children:N.jsx("button",{type:"button",onClick:W,className:"text-text-2 text-xs hover:text-text-1 font-medium",children:"← Already have an account? Sign in"})})]})]})})},Ox=(n,e,t)=>{const i=e==="lectures",o=i?"all":t,l=new Date,c=Bn(l),f=n.deadlines.lectures,g=n.deadlines.exam,v=i?f:g,_=Math.max(0,Ua(c,f)),I=Math.max(0,Ua(c,g)),C=i?_:I,U=Ua(c,v)<0,W=qf.filter(ke=>o==="all"||n.config[ke].group===o);let $=0,M=0,Z=0,se=0;W.forEach(ke=>{const $e=n.config[ke],ot=n.progress.lectures[ke]||0,xe=n.progress.revisions[ke]||0;$+=$e.lectures,M+=ot,Z+=$e.lectures+$e.revisions,se+=ot+xe});const de=Z>0?se/Z*100:0,me=$-M,Oe=_>0?(me/_).toFixed(1):"0",ge=n.studyStartDate||"2025-11-01",x=Math.max(1,Ua(ge,c)),T=M/x,k=T>0?Math.min(100,(M+T*C)/$*100):0,R=n.pacingAlertThreshold??Hf;let b=null;U&&M<$?b=i?"CRITICAL: SYLLABUS DEADLINE EXCEEDED.":"CRITICAL: EXAM DEADLINE EXCEEDED.":parseFloat(Oe)>R&&M<$&&(b=`PACE ALERT: ${Oe} LECTURES/DAY REQUIRED`),M>=$&&$>0&&(b=null);let O=0;if(n.progress.history&&n.progress.history.length>0){const ke=[...n.progress.history].sort((xe,ee)=>ee.date.localeCompare(xe.date)),$e=new Date;$e.setDate($e.getDate()-1);const ot=Bn($e);if(ke[0].date===c||ke[0].date===ot){O=1;for(let xe=0;xe<ke.length-1&&Ua(ke[xe+1].date,ke[xe].date)===1;xe++)O++}}const A=!n.lastExported||l.getTime()-new Date(n.lastExported).getTime()>7*864e5;return{overallProgress:de,daysToLectures:_,daysToExam:I,requiredPerDay:Oe,projectedCompletion:k,isOnTrack:k>=95,warning:b,streak:O,isBackupNeeded:A,totalTasks:Z,completedTasks:se}},z0=()=>{const n=ue(i=>i.data),e=ue(i=>i.activeTab),t=ue(i=>i.activeGroup);return ye.useMemo(()=>Ox(n,e,t),[n.progress.lectures,n.progress.revisions,n.config,n.deadlines,n.studyStartDate,n.pacingAlertThreshold,n.progress.history,n.lastExported,e,t])};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B0=(...n)=>n.filter((e,t,i)=>!!e&&i.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=ye.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...f},g)=>ye.createElement("svg",{ref:g,...Mx,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:B0("lucide",o),...f},[...c.map(([v,_])=>ye.createElement(v,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(n,e)=>{const t=ye.forwardRef(({className:i,...o},l)=>ye.createElement(Vx,{ref:l,iconNode:e,className:B0(`lucide-${Lx(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=$t("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=$t("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=$t("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=$t("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=$t("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=$t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=$t("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=$t("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=$t("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=$t("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=$t("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=$t("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=$t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=$t("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=$t("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Hx=()=>{const n=ue(g=>g.syncStatus),e=ue(g=>g.setShowTodayModal),t=ue(g=>g.userProfile?.name),i=ue(g=>g.user),o=z0(),l=t&&t!=="Student"&&t.trim()!=="",c=()=>{if(!i){it.info("Sync unavailable — not logged in.");return}it.info("Syncing..."),Uf(500)},f={idle:null,syncing:N.jsx(Bx,{size:12,className:"animate-spinner text-accent"}),error:N.jsx(G0,{size:12,className:"text-danger"}),offline:N.jsx(qx,{size:12,className:"text-warning"})}[n];return N.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 shrink-0 relative",style:{zIndex:10},children:[N.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[N.jsxs("div",{className:"flex flex-col items-start overflow-hidden py-0.5",style:{minWidth:90},children:[N.jsxs("div",{className:"relative h-6 w-full mt-1",children:[N.jsxs("div",{className:"absolute left-0 top-0 flex items-baseline gap-1.5 date-ticker-item-1",children:[N.jsx("span",{className:"font-mono text-lg font-bold text-text-1",children:o.daysToLectures}),N.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-wider text-text-3",children:"Days"})]}),N.jsxs("div",{className:"absolute left-0 top-0 flex items-baseline gap-1.5 date-ticker-item-2",children:[N.jsx("span",{className:"font-mono text-lg font-bold text-text-1",children:o.daysToExam}),N.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-wider text-text-3",children:"Days"})]})]}),N.jsxs("div",{className:"relative h-3 w-full mb-1",children:[N.jsx("span",{className:"absolute left-0 top-0 text-[8px] font-medium text-text-3/70 uppercase tracking-wider leading-none date-ticker-item-1",children:"Lectures Deadline"}),N.jsx("span",{className:"absolute left-0 top-0 text-[8px] font-medium text-text-3/70 uppercase tracking-wider leading-none date-ticker-item-2",children:"Exam Deadline"})]})]}),N.jsxs("div",{className:"flex items-center gap-1 ml-1 z-10",children:[f&&N.jsx("span",{children:f}),N.jsx("button",{onClick:c,className:"p-1 rounded-md hover:bg-surface-2 text-text-3 hover:text-accent transition-colors active:scale-90","aria-label":"Manual sync",title:"Sync now",children:N.jsx($x,{size:11})})]})]}),l&&N.jsx("span",{className:"absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-text-2 truncate max-w-[140px] pointer-events-none",children:t}),N.jsxs("button",{onClick:()=>e(!0),className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold hover:bg-accent/15 transition-colors active:scale-95","aria-label":"Open today's overview",children:[N.jsx(Wx,{size:14}),"Today"]})]})},Kx=[{id:"planner",label:"Planner",icon:N.jsx(W0,{size:20})},{id:"tracker",label:"Tracker",icon:N.jsx($0,{size:20})},{id:"performance",label:"Performance",icon:N.jsx(H0,{size:20})},{id:"edith",label:"Edith AI",icon:N.jsx(q0,{size:20})},{id:"settings",label:"Settings",icon:N.jsx(K0,{size:20})}],Gx=()=>{const n=ue(t=>t.activeTab),e=ue(t=>t.setActiveTab);return N.jsx("nav",{className:"hidden md:flex flex-col items-center w-[60px] shrink-0 border-r border-border py-4 gap-1 bg-surface/50",style:{zIndex:5},"aria-label":"Main navigation",children:Kx.map(t=>{const i=n===t.id;return N.jsxs("button",{role:"tab","aria-selected":i,"aria-label":t.label,title:t.label,onClick:()=>e(t.id),className:`
              relative w-10 h-10 rounded-xl flex items-center justify-center
              transition-all duration-200
              ${i?"bg-accent/12 text-accent":"text-text-3 hover:text-text-1 hover:bg-surface-2"}
            `,children:[t.icon,i&&N.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[1px] w-[3px] h-5 rounded-r-full bg-accent"})]},t.id)})})},Qx=[{id:"planner",label:"Planner",icon:N.jsx(W0,{size:20})},{id:"tracker",label:"Tracker",icon:N.jsx($0,{size:20})},{id:"performance",label:"Metrics",icon:N.jsx(H0,{size:20})},{id:"edith",label:"Edith",icon:N.jsx(q0,{size:20})},{id:"settings",label:"Settings",icon:N.jsx(K0,{size:20})}],Yx=()=>{const n=ue(t=>t.activeTab),e=ue(t=>t.setActiveTab);return N.jsxs("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-border","aria-label":"Mobile navigation",children:[N.jsx("div",{className:"flex items-center justify-around px-1 py-1.5",children:Qx.map(t=>{const i=n===t.id;return N.jsxs("button",{role:"tab","aria-selected":i,"aria-label":t.label,onClick:()=>e(t.id),className:`
                flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl
                transition-all duration-200 min-w-[52px]
                ${i?"text-accent":"text-text-3 active:text-text-2"}
              `,children:[t.icon,N.jsx("span",{className:`text-[9px] font-semibold ${i?"text-accent":""}`,children:t.label})]},t.id)})}),N.jsx("div",{className:"h-[env(safe-area-inset-bottom)]"})]})},Q0=({open:n,onClose:e,title:t,children:i,maxWidth:o="max-w-xl"})=>{const l=ye.useRef(null);return ye.useEffect(()=>{if(!n)return;const c=f=>{f.key==="Escape"&&e()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[n,e]),ye.useEffect(()=>{if(n){const c=requestAnimationFrame(()=>{l.current&&!l.current.contains(document.activeElement)&&l.current.focus()});return()=>cancelAnimationFrame(c)}},[n]),n?N.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4",onClick:c=>{c.target===c.currentTarget&&e()},role:"presentation",children:[N.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm"}),N.jsxs("div",{ref:l,role:"dialog","aria-modal":"true","aria-label":t||"Dialog",tabIndex:-1,className:`
          relative w-full ${o} bg-surface border border-border
          rounded-3xl modal-shadow overflow-hidden
          flex flex-col max-h-[90vh]
          animate-modal-open
          focus:outline-none
        `,children:[t&&N.jsxs("div",{className:"p-5 border-b border-border flex justify-between items-center shrink-0",children:[N.jsx("h2",{className:"font-display text-lg font-bold uppercase tracking-tight text-text-1",children:t}),N.jsx("button",{onClick:e,className:"p-2 hover:bg-surface-2 rounded-xl transition-colors text-text-2 hover:text-text-1","aria-label":"Close dialog",children:N.jsx($p,{size:20})})]}),i]})]}):null},Xx=()=>{const n=ue(c=>c.showWelcomeModal),e=ue(c=>c.setShowWelcomeModal),t=ue(c=>c.setActiveTab),i=ue(c=>c.userProfile?.name||"Soldier"),o=z0(),l=()=>{e(!1),t("planner")};return N.jsx(Q0,{open:n,onClose:()=>e(!1),maxWidth:"max-w-md",children:N.jsxs("div",{className:"p-8 text-center space-y-6",children:[N.jsx("img",{src:"/Edith/logo.png",alt:"E.D.I.T.H",className:"w-20 h-20 mx-auto rounded-2xl"}),N.jsxs("h2",{className:"font-display text-2xl font-bold text-text-1",children:["Welcome back, ",i," 🔥"]}),N.jsxs("p",{className:"text-text-2 text-sm leading-relaxed",children:["You have ",N.jsx("span",{className:"font-mono font-bold text-accent",children:o.daysToLectures})," days until your lecture deadline.",N.jsx("br",{}),"No pressure... just your entire career on the line 😬"]}),N.jsx("div",{className:"flex gap-3 justify-center pt-2",children:N.jsx(yl,{onClick:l,size:"lg",children:"Let's get it →"})})]})})},Jx=()=>{const n=ue(_=>_.showTodayModal),e=ue(_=>_.setShowTodayModal),t=ue(_=>_.data.progress.planner),i=ue(_=>_.data.progress.schedule),o=ue(_=>_.data.config),l=ue(_=>_.togglePlannerTick),c=ue(_=>_.toggleScheduleComplete),f=Bn(),g=qf.map(_=>{const I=t.find(C=>C.date===f&&C.subject===_);return{key:_,name:o[_].name,color:o[_].color,entry:I}}),v=i.filter(_=>_.date===f||_.date==="__fixed__").sort((_,I)=>_.startTime.localeCompare(I.startTime));return N.jsx(Q0,{open:n,onClose:()=>e(!1),title:`📅 Today — ${WT(f)}`,maxWidth:"max-w-lg",children:N.jsxs("div",{className:"p-5 overflow-y-auto no-scrollbar max-h-[60vh] space-y-6",children:[v.length>0&&N.jsxs("div",{children:[N.jsx("h3",{className:"text-[10px] uppercase font-bold tracking-widest text-text-3 mb-3",children:"Schedule"}),N.jsx("div",{className:"space-y-2",children:v.map(_=>N.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-border",children:[N.jsx("span",{className:"font-mono text-xs text-text-2 w-12 shrink-0",children:_.startTime}),N.jsx("span",{className:"flex-1 text-sm font-medium text-text-1 truncate",children:_.customTitle}),_.durationMinutes>0&&N.jsxs("span",{className:"text-[10px] text-text-3 flex items-center gap-1",children:[N.jsx(Ux,{size:10}),_.durationMinutes,"m"]}),N.jsx("button",{onClick:()=>c(_.id),className:`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${_.completed?"bg-success/20 border-success/30 text-success":"border-border hover:border-accent"}`,"aria-label":_.completed?"Mark incomplete":"Mark complete",children:_.completed&&N.jsx(zf,{size:14})})]},_.id))})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-[10px] uppercase font-bold tracking-widest text-text-3 mb-3",children:"Planner"}),N.jsx("div",{className:"space-y-1.5",children:g.map(({key:_,name:I,color:C,entry:U})=>N.jsxs("div",{className:"flex items-center gap-3 p-2.5 rounded-xl bg-surface-2 border border-border",children:[N.jsx("div",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:C}}),N.jsx("span",{className:"text-sm font-medium text-text-1 w-28 shrink-0",children:I}),N.jsx("span",{className:`flex-1 text-xs truncate ${U?.note?"text-text-2":"text-text-3"}`,children:U?.note||"—"}),N.jsx("button",{onClick:()=>U?.note&&l(f,_),disabled:!U?.note,className:`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${U?.ticked?"bg-success/20 border-success/30 text-success":U?.note?"border-border hover:border-accent cursor-pointer":"border-border/50 opacity-30 cursor-not-allowed"}`,"aria-label":U?.ticked?"Unmark":"Mark done",children:U?.ticked&&N.jsx(zf,{size:14})})]},_))})]}),v.length===0&&g.every(_=>!_.entry?.note)&&N.jsx("div",{className:"text-center py-8 text-text-3 text-sm",children:"Nothing planned for today. Hit the Planner or Schedule tab to set things up."})]})})},Ti=n=>n.toLowerCase()==="today"?Bn():n.toLowerCase()==="tomorrow"?ff(Bn(),1):n,sf=n=>!n||!n.includes(":")?"12:00":n.slice(0,5),Zx=(n,e)=>{try{const i=ue.getState().data.config,o=e.subject?i[e.subject]?.name||e.subject:"";switch(n){case"update_progress":return`Update ${o} ${e.category}: ${e.operation} ${e.amount}`;case"add_reminder":return`Set reminder: "${e.title}" at ${e.time} on ${Ti(e.date)}`;case"add_schedule_item":return`Schedule "${e.title}" for ${e.durationMinutes}m at ${e.time||e.startTime} on ${Ti(e.date)}`;case"add_planner_entry":return`Add to Planner (${o}): "${e.note}" on ${Ti(e.date)}`;case"schedule_test":return`Schedule Mock Test for ${o} at ${e.time} on ${Ti(e.date)}`;case"add_syllabus_chapter":return`Add Chapter: "${e.chapterName}" to ${o}`;default:return`Execute unknown action: ${n}`}}catch{return`Execute ${n} (Failed to parse args)`}},e2=(n,e)=>{try{const t=ue.getState();switch(n){case"update_progress":{const{subject:i,category:o,operation:l,amount:c}=e,f=t.data.progress[o][i]||0;let g=f;return l==="add"?g=f+c:l==="subtract"?g=f-c:l==="set"&&(g=c),t.updateProgress(o,i,g),{success:!0,result:`Successfully updated ${o} for ${i} to ${g}.`}}case"add_reminder":{const i={id:Or(),title:e.title,body:e.body,scheduledAt:`${Ti(e.date)}T${sf(e.time)}`,repeat:"none",notifyEnabled:!0,fired:!1};return t.addReminder(i),{success:!0,result:`Reminder '${e.title}' created.`}}case"add_schedule_item":{const i={id:Or(),customTitle:e.title,subject:e.subject||null,date:Ti(e.date),startTime:sf(e.startTime||e.time),durationMinutes:e.durationMinutes||60,notifyEnabled:!0,completed:!1};return t.addScheduleItem(i),{success:!0,result:`Scheduled '${e.title}' for ${e.durationMinutes}m.`}}case"add_planner_entry":{const i={id:Or(),date:Ti(e.date),subject:e.subject,note:(e.note||"").slice(0,50),ticked:!1,notifyEnabled:!1};return t.updatePlannerEntry(i),{success:!0,result:`Added planner entry for ${e.subject} on ${e.date}.`}}case"schedule_test":{const i={id:Or(),subject:e.subject,date:Ti(e.date),time:sf(e.time),note:e.note,notifyEnabled:!0,completed:!1};return t.addScheduledTest(i),{success:!0,result:`Scheduled test for ${e.subject}.`}}case"add_syllabus_chapter":return t.addSyllabusChapter(e.subject,e.chapterName),{success:!0,result:`Added chapter '${e.chapterName}' to ${e.subject}.`};default:return{success:!1,result:`Error: Tool '${n}' is not recognized.`}}}catch(t){return{success:!1,result:`Error executing ${n}: ${t.message}`}}},Ba=15,t2=()=>{const n=ue(v=>v.pendingToolCall),e=ue(v=>v.setPendingToolCall),[t,i]=ye.useState(Ba),o=ye.useRef(null);ye.useEffect(()=>{if(!n){i(Ba),o.current&&clearInterval(o.current);return}return i(Ba),o.current=setInterval(()=>{i(v=>v<=1?(clearInterval(o.current),c(),0):v-1)},1e3),()=>{o.current&&clearInterval(o.current)}},[n]);const l=()=>{o.current&&clearInterval(o.current),n&&(n.resolve({success:!1,result:"User aborted the action inside the UI modal."}),e(null),it.info("Action aborted. Edith will stand by."))},c=()=>{if(o.current&&clearInterval(o.current),n){const{name:v,args:_,resolve:I}=n,C=e2(v,_);I(C),e(null)}};if(!n)return null;const f=Zx(n.name,n.args),g=(Ba-t)/Ba*100;return N.jsxs("div",{className:"fixed inset-0 z-[250] flex items-center justify-center p-4",children:[N.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:l}),N.jsxs("div",{className:"relative w-full max-w-sm bg-surface border border-accent/40 rounded-3xl modal-shadow overflow-hidden animate-modal-open flex flex-col focus:outline-none",children:[N.jsxs("div",{className:"p-4 border-b border-border flex items-center gap-3 bg-accent/5",children:[N.jsx(Fx,{className:"text-accent",size:20}),N.jsx("h2",{className:"font-display text-base font-bold uppercase tracking-tight text-text-1",children:n.description||"Edith Action"})]}),N.jsxs("div",{className:"p-6 text-center space-y-4",children:[N.jsx("p",{className:"text-sm font-medium text-text-2",children:"Edith wants to execute:"}),N.jsxs("div",{className:"bg-surface-2 border border-border rounded-xl p-4 inline-block mx-auto",children:[N.jsx("code",{className:"text-xs font-mono text-accent",children:n.name}),N.jsx("p",{className:"text-[13px] font-bold text-text-1 mt-2",children:f})]}),N.jsxs("p",{className:"text-[10px] text-text-3 font-mono",children:["Auto-confirming in ",t,"s..."]})]}),N.jsxs("div",{className:"p-4 border-t border-border flex items-center gap-3 bg-surface-1 relative",children:[N.jsx("div",{className:"absolute top-0 left-0 h-[2px] bg-accent transition-all duration-1000 ease-linear",style:{width:`${g}%`}}),N.jsxs(yl,{variant:"ghost",className:"flex-1",onClick:l,autoFocus:!0,children:[N.jsx($p,{size:16})," Abort"]}),N.jsxs(yl,{variant:"primary",className:"flex-1",onClick:c,children:[N.jsx(zf,{size:16})," Confirm"]})]})]})]})},n2=n=>{const e=[];for(let t=0;t<n;t++){const i=2+(t*7+3)%5,o=(t*31+17)%100,l=10+(t*13+5)%14,c=(t*3+1)%15,f=-30+(t*19+7)%60,g=.2+(t*11+3)%40/100;e.push({size:i,left:o,duration:l,delay:c,drift:f,opacity:g,id:t})}return e},r2=()=>{const n=ye.useMemo(()=>n2(38),[]);return N.jsx("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",style:{zIndex:1},"aria-hidden":"true",children:n.map(e=>N.jsx("div",{className:"particle",style:{width:`${e.size}px`,height:`${e.size}px`,left:`${e.left}%`,bottom:`-${e.size+10}px`,background:"radial-gradient(circle, var(--accent) 0%, transparent 70%)",animationDuration:`${e.duration}s`,animationDelay:`${e.delay}s`,"--particle-drift":`${e.drift}px`,"--particle-opacity":e.opacity}},e.id))})},i2={info:N.jsx(zx,{size:16}),success:N.jsx(jx,{size:16}),error:N.jsx(G0,{size:16})},s2={info:"border-accent/40 bg-accent/10 text-accent",success:"border-success/40 bg-success/10 text-success",error:"border-danger/40 bg-danger/10 text-danger"},zv=()=>{const n=ue(t=>t.toasts),e=ue(t=>t.removeToast);return N.jsx("div",{className:"fixed bottom-[5.5rem] md:bottom-6 right-4 z-[200] flex flex-col gap-2 pointer-events-none max-w-sm w-full",style:{bottom:"max(5.5rem, calc(5rem + env(safe-area-inset-bottom)))"},children:n.map(t=>N.jsx(o2,{id:t.id,message:t.message,type:t.type,createdAt:t.createdAt,onRemove:e},t.id))})},o2=({id:n,message:e,type:t,createdAt:i,onRemove:o})=>(ye.useEffect(()=>{const l=setTimeout(()=>o(n),$T);return()=>clearTimeout(l)},[n,o]),N.jsxs("div",{className:`
        pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border
        font-body text-sm font-medium
        animate-toast-in card-shadow
        ${t==="error"?"shake-error ":""}${s2[t]}
      `,children:[i2[t],N.jsx("span",{className:"flex-1 text-text-1",children:e}),N.jsx("button",{onClick:()=>o(n),className:"text-text-3 hover:text-text-1 transition-colors","aria-label":"Dismiss",children:N.jsx($p,{size:14})})]}));/*! Capacitor: https://capacitorjs.com/ - MIT License */var Vo;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Vo||(Vo={}));class of extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const a2=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},l2=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},i=t.Plugins=t.Plugins||{},o=()=>e!==null?e.name:a2(n),l=()=>o()!=="web",c=I=>{const C=v.get(I);return!!(C?.platforms.has(o())||f(I))},f=I=>{var C;return(C=t.PluginHeaders)===null||C===void 0?void 0:C.find(U=>U.name===I)},g=I=>n.console.error(I),v=new Map,_=(I,C={})=>{const U=v.get(I);if(U)return console.warn(`Capacitor plugin "${I}" already registered. Cannot register plugins twice.`),U.proxy;const W=o(),$=f(I);let M;const Z=async()=>(!M&&W in C?M=typeof C[W]=="function"?M=await C[W]():M=C[W]:e!==null&&!M&&"web"in C&&(M=typeof C.web=="function"?M=await C.web():M=C.web),M),se=(T,k)=>{var R,b;if($){const O=$?.methods.find(A=>k===A.name);if(O)return O.rtype==="promise"?A=>t.nativePromise(I,k.toString(),A):(A,ke)=>t.nativeCallback(I,k.toString(),A,ke);if(T)return(R=T[k])===null||R===void 0?void 0:R.bind(T)}else{if(T)return(b=T[k])===null||b===void 0?void 0:b.bind(T);throw new of(`"${I}" plugin is not implemented on ${W}`,Vo.Unimplemented)}},de=T=>{let k;const R=(...b)=>{const O=Z().then(A=>{const ke=se(A,T);if(ke){const $e=ke(...b);return k=$e?.remove,$e}else throw new of(`"${I}.${T}()" is not implemented on ${W}`,Vo.Unimplemented)});return T==="addListener"&&(O.remove=async()=>k()),O};return R.toString=()=>`${T.toString()}() { [capacitor code] }`,Object.defineProperty(R,"name",{value:T,writable:!1,configurable:!1}),R},me=de("addListener"),Oe=de("removeListener"),ge=(T,k)=>{const R=me({eventName:T},k),b=async()=>{const A=await R;Oe({eventName:T,callbackId:A},k)},O=new Promise(A=>R.then(()=>A({remove:b})));return O.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await b()},O},x=new Proxy({},{get(T,k){switch(k){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return $?ge:me;case"removeListener":return Oe;default:return de(k)}}});return i[I]=x,v.set(I,{name:I,proxy:x,platforms:new Set([...Object.keys(C),...$?[W]:[]])}),x};return t.convertFileSrc||(t.convertFileSrc=I=>I),t.getPlatform=o,t.handleError=g,t.isNativePlatform=l,t.isPluginAvailable=c,t.registerPlugin=_,t.Exception=of,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},u2=n=>n.Capacitor=l2(n),Pi=u2(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ed=Pi.registerPlugin;class Wp{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);const l=this.windowListeners[e];l&&!l.registered&&this.addWindowListener(l),i&&this.sendRetainedArgumentsForEvent(e);const c=async()=>this.removeListener(e,t);return Promise.resolve({remove:c})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){const o=this.listeners[e];if(!o){if(i){let l=this.retainedEventArguments[e];l||(l=[]),l.push(t),this.retainedEventArguments[e]=l}return}o.forEach(l=>l(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new Pi.Exception(e,Vo.Unimplemented)}unavailable(e="not available"){return new Pi.Exception(e,Vo.Unavailable)}async removeListener(e,t){const i=this.listeners[e];if(!i)return;const o=i.indexOf(t);this.listeners[e].splice(o,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const Bv=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),$v=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class c2 extends Wp{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[o,l]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");o=$v(o).trim(),l=$v(l).trim(),t[o]=l}),t}async setCookie(e){try{const t=Bv(e.key),i=Bv(e.value),o=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",l=(e.path||"/").replace("path=",""),c=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${o}; path=${l}; ${c};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}ed("CapacitorCookies",{web:()=>new c2});const d2=async n=>new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const o=i.result;e(o.indexOf(",")>=0?o.split(",")[1]:o)},i.onerror=o=>t(o),i.readAsDataURL(n)}),h2=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(o=>o.toLocaleLowerCase()).reduce((o,l,c)=>(o[l]=n[e[c]],o),{})},f2=(n,e=!0)=>n?Object.entries(n).reduce((i,o)=>{const[l,c]=o;let f,g;return Array.isArray(c)?(g="",c.forEach(v=>{f=e?encodeURIComponent(v):v,g+=`${l}=${f}&`}),g.slice(0,-1)):(f=e?encodeURIComponent(c):c,g=`${l}=${f}`),`${i}&${g}`},"").substr(1):null,p2=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),o=h2(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(o.includes("application/x-www-form-urlencoded")){const l=new URLSearchParams;for(const[c,f]of Object.entries(n.data||{}))l.set(c,f);t.body=l.toString()}else if(o.includes("multipart/form-data")||n.data instanceof FormData){const l=new FormData;if(n.data instanceof FormData)n.data.forEach((f,g)=>{l.append(g,f)});else for(const f of Object.keys(n.data))l.append(f,n.data[f]);t.body=l;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(o.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class m2 extends Wp{async request(e){const t=p2(e,e.webFetchExtra),i=f2(e.params,e.shouldEncodeUrlParams),o=i?`${e.url}?${i}`:e.url,l=await fetch(o,t),c=l.headers.get("content-type")||"";let{responseType:f="text"}=l.ok?e:{};c.includes("application/json")&&(f="json");let g,v;switch(f){case"arraybuffer":case"blob":v=await l.blob(),g=await d2(v);break;case"json":g=await l.json();break;case"document":case"text":default:g=await l.text()}const _={};return l.headers.forEach((I,C)=>{_[C]=I}),{data:g,headers:_,status:l.status,url:l.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}ed("CapacitorHttp",{web:()=>new m2});var Wv;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Wv||(Wv={}));var qv;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(qv||(qv={}));class g2 extends Wp{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}ed("SystemBars",{web:()=>new g2});const Ii=ed("PushNotifications",{}),td=()=>Pi.isNativePlatform()?!0:"serviceWorker"in navigator&&"Notification"in window&&"PushManager"in window,F2=async()=>{if(!td())return"default";if(Pi.isNativePlatform()){let e=await Ii.checkPermissions();if(e.receive==="prompt"&&(e=await Ii.requestPermissions()),e.receive!=="granted")return it.error("Native Push permissions denied."),"denied";try{return await Ii.register(),it.success("Native Notifications fully enabled!"),"granted"}catch(t){return console.error("Failed to register native push",t),it.error("Failed to connect to native messaging service."),"denied"}}const n=await Notification.requestPermission();if(n==="granted")try{console.log("Permission granted, fetching FCM token...");const e=await Tx();if(e){const t=await navigator.serviceWorker.ready;console.log("Service Worker ready, requesting token with VAPID key...");const i=await _x(e,{vapidKey:Ex,serviceWorkerRegistration:t});i?(localStorage.setItem("fcm_token",i),console.log("FCM Token retrieved successfully:",i.slice(0,10)+"..."),it.success("Notifications fully enabled!")):(console.warn("No registration token available. Request permission to generate one."),it.error("Failed to generate Device ID. Try again."))}else console.warn("Messaging instance could not be initialized."),it.error("Device does not support push notifications.")}catch(e){console.error("An error occurred while retrieving token. ",e),it.error("Error connecting to notification service.")}return n},y2=async()=>{if(td()){if(Pi.isNativePlatform()){console.log("Native environment detected. Initializing Native Push Listeners and skipping SW."),Ii.addListener("registration",n=>{console.log("Native FCM Token generated:",n.value.slice(0,10)+"..."),localStorage.setItem("fcm_token",n.value)}),Ii.addListener("registrationError",n=>{console.error("Error on native FCM registration:",JSON.stringify(n))}),Ii.addListener("pushNotificationReceived",n=>{console.log("Native push received in foreground:",n)}),Ii.addListener("pushNotificationActionPerformed",n=>{console.log("Native push action performed:",n.actionId)});return}try{const n="/Edith/",e=`${n}sw-custom.js`.replace(/\/+/g,"/"),t=await navigator.serviceWorker.register(e,{scope:n});console.log("Service Worker registered successfully:",t.scope)}catch(n){console.error("Service Worker registration failed:",n)}}},j2=async(n,e,t,i)=>v2(n,e,t,i),v2=async(n,e,t,i)=>{if(!td())return;if(Notification.permission==="denied"){it.error("Notifications are blocked. Please enable them in settings.");return}const l=localStorage.getItem("fcm_token");if(!l){Pi.isNativePlatform()?(it.error("Device ID (Native Token) missing. Automatically retrying on next launch."),await Ii.register()):it.error("Device ID (Token) missing. Try toggling notifications in Settings.");return}try{if(!n||!e||!i)throw new Error("Invalid notification data");const c=new Date(i).getTime();if(isNaN(c))throw new Error("Invalid scheduled time");const f=Xc(Mo,"scheduled_notifications",n);await p0(f,{id:n,title:e,body:t,scheduledAt:i,targetTimeMs:c,token:l,status:"pending",createdAt:Date.now()}),console.log("Notification scheduled in Firestore:",n),it.success("Reminder scheduled successfully!")}catch(c){console.error("Scheduling error:",c),it.error(`Failed to schedule: ${c.message||"Unknown error"}`)}},U2=async n=>{if(td())try{Pi.isNativePlatform()||(await navigator.serviceWorker.ready).active?.postMessage({type:"CANCEL_NOTIFICATION",payload:{id:n}});const e=Xc(Mo,"scheduled_notifications",n);await KP(e),it.info("Notification cancelled.")}catch(e){console.warn("Error cancelling notification:",e)}},_2=ye.lazy(()=>_l(()=>import("./TrackerTab-37tHQ0U8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(n=>({default:n.TrackerTab}))),w2=ye.lazy(()=>_l(()=>import("./PlannerHubTab-DIyrpAvC.js"),__vite__mapDeps([8,2,5,9,10,3,1,6,11,7])).then(n=>({default:n.PlannerHubTab}))),E2=ye.lazy(()=>_l(()=>import("./PerformanceTab-Cxxi2Jhv.js"),__vite__mapDeps([12,10,9,3,6,4,7])).then(n=>({default:n.PerformanceTab}))),T2=ye.lazy(()=>_l(()=>import("./EdithTab-Cds36kxj.js"),__vite__mapDeps([13,3,1,6])).then(n=>({default:n.EdithTab}))),I2=ye.lazy(()=>_l(()=>import("./SettingsTab-C2pWDiOl.js").then(n=>n.S),__vite__mapDeps([14,2,9,11,6,4])).then(n=>({default:n.SettingsTab}))),S2=n=>{if(n==="light")return"light";if(n==="dark")return"";if(n==="system")return window.matchMedia("(prefers-color-scheme: light)").matches?"light":"";if(n==="auto"){const e=new Date().getHours();return e>=7&&e<19?"light":""}return""},$a=()=>N.jsx("div",{className:"h-full flex items-center justify-center",children:N.jsx("div",{className:"w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spinner"})}),A2=()=>{const{isAuthenticated:n,isFirebaseConfigured:e}=kx(),t=ue(M=>M.authLoading),i=ue(M=>M.authScreen),o=ue(M=>M.activeTab),l=ue(M=>M.data.themeMode),c=ue(M=>M.data.fullScreenEnabled),f=ue(M=>M.data.lastWelcomeShownDate),g=ue(M=>M.setShowWelcomeModal),v=ue(M=>M.setLastWelcomeShownDate),_=ue(M=>M.setSyncStatus),I=ue(M=>M.setActiveTab),C=ue(M=>M.user),U=ye.useRef(null),W=ye.useRef("");ye.useEffect(()=>{if(!C||!e)return;const M=ue.subscribe(Z=>{const se=Z.data.updatedAt;se&&se!==W.current&&(W.current=se,Uf())});return()=>M()},[C,e]),ye.useEffect(()=>{const M=()=>{const Z=S2(l),se=document.documentElement,de=se.classList.contains("light"),me=Z==="light";U.current!==null&&de!==me&&(se.classList.add("theme-transitioning"),setTimeout(()=>se.classList.remove("theme-transitioning"),700)),se.classList.toggle("light",me),U.current=Z};if(M(),l==="system"){const Z=window.matchMedia("(prefers-color-scheme: light)"),se=()=>M();return Z.addEventListener("change",se),()=>Z.removeEventListener("change",se)}if(l==="auto"){const Z=setInterval(M,6e4);return()=>clearInterval(Z)}},[l]),ye.useEffect(()=>{const M=Bn();f!==M&&(n||!e)&&(g(!0),v(M))},[n,f,e,g,v]),ye.useEffect(()=>{const M=()=>{_("idle"),it.info(Co.onlineRestored),Uf(500)},Z=()=>_("offline");return window.addEventListener("online",M),window.addEventListener("offline",Z),()=>{window.removeEventListener("online",M),window.removeEventListener("offline",Z)}},[_]),ye.useEffect(()=>{y2()},[]),ye.useEffect(()=>{(n||!e)&&I("planner")},[n,e,I]),ye.useEffect(()=>{if(!c||document.fullscreenElement)return;const M=setTimeout(()=>{if(document.fullscreenElement||!document.documentElement.requestFullscreen)return;const Z=document.createElement("button");Z.style.position="fixed",Z.style.top="5%",Z.style.left="50%",Z.style.width="0px",Z.style.height="0px",Z.style.opacity="0",Z.style.pointerEvents="none",Z.setAttribute("aria-hidden","true"),Z.setAttribute("data-auto-click","true"),document.body.appendChild(Z),Z.click(),setTimeout(()=>{document.body.contains(Z)&&document.body.removeChild(Z)},100)},1e3);return()=>clearTimeout(M)},[c]);const $=ye.useCallback(M=>{c&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{}),M.target?.closest?.('button, a, [role="tab"], [role="button"], input[type="checkbox"], input[type="radio"], select, .toggle-track, [data-clickable]')&&pT()},[c]);return ye.useEffect(()=>(document.addEventListener("click",$,!0),()=>document.removeEventListener("click",$,!0)),[$]),t?N.jsx("div",{className:"h-screen flex items-center justify-center bg-bg",children:N.jsxs("div",{className:"text-center",children:[N.jsxs("div",{style:{position:"relative",width:130,height:130,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto"},children:[N.jsx("div",{style:{position:"absolute",width:50,height:50,borderRadius:"50%",background:"conic-gradient(from 0deg, var(--accent, #3b82f6) 0%, transparent 40%, transparent 50%, var(--accent, #3b82f6) 50%, transparent 90%)",animation:"edith-fan-spin 1s linear infinite",zIndex:2}}),N.jsx("div",{style:{position:"absolute",width:50,height:50,borderRadius:"50%",zIndex:1,animation:"edith-ring-pulse 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1)"}})]}),N.jsx("style",{children:`
            @keyframes edith-fan-spin { to { transform: rotate(-360deg); } }
            @keyframes edith-ring-pulse {
              0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent, #3b82f6) 70%, transparent); }
              100% { box-shadow: 0 0 0 40px color-mix(in srgb, var(--accent, #3b82f6) 0%, transparent); }
            }
          `})]})}):n?N.jsxs("div",{className:"h-screen w-full flex flex-col bg-bg font-body overflow-hidden relative",style:{zIndex:0},children:[N.jsx(r2,{}),N.jsx(Hx,{}),N.jsxs("div",{className:"flex flex-1 min-h-0",children:[N.jsx(Gx,{}),N.jsxs("main",{className:"flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3 md:px-5 py-2 pb-20 md:pb-2 relative",style:{zIndex:2},children:[N.jsx("div",{className:o==="tracker"?"h-full":"hidden",children:N.jsx(ye.Suspense,{fallback:N.jsx($a,{}),children:N.jsx(_2,{})})}),N.jsx("div",{className:o==="planner"?"h-full":"hidden",children:N.jsx(ye.Suspense,{fallback:N.jsx($a,{}),children:N.jsx(w2,{})})}),N.jsx("div",{className:o==="performance"?"h-full":"hidden",children:N.jsx(ye.Suspense,{fallback:N.jsx($a,{}),children:N.jsx(E2,{})})}),N.jsx("div",{className:o==="edith"?"h-full":"hidden",children:N.jsx(ye.Suspense,{fallback:N.jsx($a,{}),children:N.jsx(T2,{})})}),N.jsx("div",{className:o==="settings"?"h-full":"hidden",children:N.jsx(ye.Suspense,{fallback:N.jsx($a,{}),children:N.jsx(I2,{})})})]})]}),N.jsx(Yx,{}),N.jsx(Xx,{}),N.jsx(Jx,{}),N.jsx(t2,{}),N.jsx(zv,{})]}):N.jsxs("div",{className:"h-screen auth-gradient-bg relative overflow-hidden",children:[i==="login"?N.jsx(Nx,{}):N.jsx(Dx,{}),N.jsx(zv,{})]})};document.addEventListener("contextmenu",n=>{n.preventDefault()});lT.createRoot(document.getElementById("root")).render(N.jsx(Hv.StrictMode,{children:N.jsx(A2,{})}));export{k2 as A,yl as B,zf as C,C2 as D,Bf as E,Fx as F,q0 as G,ed as H,Eo as I,Rx as J,V2 as K,Pi as L,Q0 as M,F2 as N,j2 as O,H0 as P,td as Q,Hv as R,qf as S,Co as T,Wp as U,p2 as V,P2 as W,_l as _,Bn as a,ff as b,$t as c,Or as d,U2 as e,b2 as f,D2 as g,x2 as h,WT as i,N as j,N2 as k,Ux as l,R2 as m,W0 as n,z0 as o,$0 as p,K0 as q,ye as r,v2 as s,it as t,ue as u,Ox as v,Xc as w,Mo as x,GP as y,KP as z};
