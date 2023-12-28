import{r as E,a as Ie,R as Ne,b as x,g as Be,c as He,d as Ve}from"./vendor-kX6pW5M-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();var Oe={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=E,We=Symbol.for("react.element"),ze=Symbol.for("react.fragment"),ke=Object.prototype.hasOwnProperty,Je=Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ye={key:!0,ref:!0,__self:!0,__source:!0};function _e(i,n,r){var e,t={},s=null,u=null;r!==void 0&&(s=""+r),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(u=n.ref);for(e in n)ke.call(n,e)&&!Ye.hasOwnProperty(e)&&(t[e]=n[e]);if(i&&i.defaultProps)for(e in n=i.defaultProps,n)t[e]===void 0&&(t[e]=n[e]);return{$$typeof:We,type:i,key:s,ref:u,props:t,_owner:Je.current}}W.Fragment=ze;W.jsx=_e;W.jsxs=_e;Oe.exports=W;var P=Oe.exports,ne={},ce=Ie;ne.createRoot=ce.createRoot,ne.hydrateRoot=ce.hydrateRoot;function re(i,n){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},re(i,n)}function z(i,n){i.prototype=Object.create(n.prototype),i.prototype.constructor=i,re(i,n)}var k=function(){function i(){this.listeners=[]}var n=i.prototype;return n.subscribe=function(e){var t=this,s=e||function(){};return this.listeners.push(s),this.onSubscribe(),function(){t.listeners=t.listeners.filter(function(u){return u!==s}),t.onUnsubscribe()}},n.hasListeners=function(){return this.listeners.length>0},n.onSubscribe=function(){},n.onUnsubscribe=function(){},i}();function v(){return v=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(i[e]=r[e])}return i},v.apply(this,arguments)}var Pe=typeof window>"u";function g(){}function Xe(i,n){return typeof i=="function"?i(n):i}function Ze(i){return typeof i=="number"&&i>=0&&i!==1/0}function H(i){return Array.isArray(i)?i:[i]}function et(i,n){return Math.max(i+(n||0)-Date.now(),0)}function Z(i,n,r){return J(i)?typeof n=="function"?v({},r,{queryKey:i,queryFn:n}):v({},n,{queryKey:i}):i}function D(i,n,r){return J(i)?[v({},n,{queryKey:i}),r]:[i||{},n]}function tt(i,n){if(i===!0&&n===!0||i==null&&n==null)return"all";if(i===!1&&n===!1)return"none";var r=i??!n;return r?"active":"inactive"}function fe(i,n){var r=i.active,e=i.exact,t=i.fetching,s=i.inactive,u=i.predicate,o=i.queryKey,a=i.stale;if(J(o)){if(e){if(n.queryHash!==se(o,n.options))return!1}else if(!V(n.queryKey,o))return!1}var c=tt(r,s);if(c==="none")return!1;if(c!=="all"){var f=n.isActive();if(c==="active"&&!f||c==="inactive"&&f)return!1}return!(typeof a=="boolean"&&n.isStale()!==a||typeof t=="boolean"&&n.isFetching()!==t||u&&!u(n))}function le(i,n){var r=i.exact,e=i.fetching,t=i.predicate,s=i.mutationKey;if(J(s)){if(!n.options.mutationKey)return!1;if(r){if(Q(n.options.mutationKey)!==Q(s))return!1}else if(!V(n.options.mutationKey,s))return!1}return!(typeof e=="boolean"&&n.state.status==="loading"!==e||t&&!t(n))}function se(i,n){var r=(n==null?void 0:n.queryKeyHashFn)||Q;return r(i)}function Q(i){var n=H(i);return nt(n)}function nt(i){return JSON.stringify(i,function(n,r){return ie(r)?Object.keys(r).sort().reduce(function(e,t){return e[t]=r[t],e},{}):r})}function V(i,n){return Ce(H(i),H(n))}function Ce(i,n){return i===n?!0:typeof i!=typeof n?!1:i&&n&&typeof i=="object"&&typeof n=="object"?!Object.keys(n).some(function(r){return!Ce(i[r],n[r])}):!1}function Ee(i,n){if(i===n)return i;var r=Array.isArray(i)&&Array.isArray(n);if(r||ie(i)&&ie(n)){for(var e=r?i.length:Object.keys(i).length,t=r?n:Object.keys(n),s=t.length,u=r?[]:{},o=0,a=0;a<s;a++){var c=r?a:t[a];u[c]=Ee(i[c],n[c]),u[c]===i[c]&&o++}return e===s&&o===e?i:u}return n}function on(i,n){if(i&&!n||n&&!i)return!1;for(var r in i)if(i[r]!==n[r])return!1;return!0}function ie(i){if(!he(i))return!1;var n=i.constructor;if(typeof n>"u")return!0;var r=n.prototype;return!(!he(r)||!r.hasOwnProperty("isPrototypeOf"))}function he(i){return Object.prototype.toString.call(i)==="[object Object]"}function J(i){return typeof i=="string"||Array.isArray(i)}function rt(i){return new Promise(function(n){setTimeout(n,i)})}function de(i){Promise.resolve().then(i).catch(function(n){return setTimeout(function(){throw n})})}function Fe(){if(typeof AbortController=="function")return new AbortController}var it=function(i){z(n,i);function n(){var e;return e=i.call(this)||this,e.setup=function(t){var s;if(!Pe&&((s=window)!=null&&s.addEventListener)){var u=function(){return t()};return window.addEventListener("visibilitychange",u,!1),window.addEventListener("focus",u,!1),function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("focus",u)}}},e}var r=n.prototype;return r.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},r.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},r.setEventListener=function(t){var s,u=this;this.setup=t,(s=this.cleanup)==null||s.call(this),this.cleanup=t(function(o){typeof o=="boolean"?u.setFocused(o):u.onFocus()})},r.setFocused=function(t){this.focused=t,t&&this.onFocus()},r.onFocus=function(){this.listeners.forEach(function(t){t()})},r.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},n}(k),N=new it,st=function(i){z(n,i);function n(){var e;return e=i.call(this)||this,e.setup=function(t){var s;if(!Pe&&((s=window)!=null&&s.addEventListener)){var u=function(){return t()};return window.addEventListener("online",u,!1),window.addEventListener("offline",u,!1),function(){window.removeEventListener("online",u),window.removeEventListener("offline",u)}}},e}var r=n.prototype;return r.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},r.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},r.setEventListener=function(t){var s,u=this;this.setup=t,(s=this.cleanup)==null||s.call(this),this.cleanup=t(function(o){typeof o=="boolean"?u.setOnline(o):u.onOnline()})},r.setOnline=function(t){this.online=t,t&&this.onOnline()},r.onOnline=function(){this.listeners.forEach(function(t){t()})},r.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},n}(k),B=new st;function ut(i){return Math.min(1e3*Math.pow(2,i),3e4)}function G(i){return typeof(i==null?void 0:i.cancel)=="function"}var Se=function(n){this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent};function ee(i){return i instanceof Se}var qe=function(n){var r=this,e=!1,t,s,u,o;this.abort=n.abort,this.cancel=function(h){return t==null?void 0:t(h)},this.cancelRetry=function(){e=!0},this.continueRetry=function(){e=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(h,l){u=h,o=l});var a=function(l){r.isResolved||(r.isResolved=!0,n.onSuccess==null||n.onSuccess(l),s==null||s(),u(l))},c=function(l){r.isResolved||(r.isResolved=!0,n.onError==null||n.onError(l),s==null||s(),o(l))},f=function(){return new Promise(function(l){s=l,r.isPaused=!0,n.onPause==null||n.onPause()}).then(function(){s=void 0,r.isPaused=!1,n.onContinue==null||n.onContinue()})},d=function h(){if(!r.isResolved){var l;try{l=n.fn()}catch(p){l=Promise.reject(p)}t=function(y){if(!r.isResolved&&(c(new Se(y)),r.abort==null||r.abort(),G(l)))try{l.cancel()}catch{}},r.isTransportCancelable=G(l),Promise.resolve(l).then(a).catch(function(p){var y,S;if(!r.isResolved){var O=(y=n.retry)!=null?y:3,b=(S=n.retryDelay)!=null?S:ut,_=typeof b=="function"?b(r.failureCount,p):b,j=O===!0||typeof O=="number"&&r.failureCount<O||typeof O=="function"&&O(r.failureCount,p);if(e||!j){c(p);return}r.failureCount++,n.onFail==null||n.onFail(r.failureCount,p),rt(_).then(function(){if(!N.isFocused()||!B.isOnline())return f()}).then(function(){e?c(p):h()})}})}};d()},ot=function(){function i(){this.queue=[],this.transactions=0,this.notifyFn=function(r){r()},this.batchNotifyFn=function(r){r()}}var n=i.prototype;return n.batch=function(e){var t;this.transactions++;try{t=e()}finally{this.transactions--,this.transactions||this.flush()}return t},n.schedule=function(e){var t=this;this.transactions?this.queue.push(e):de(function(){t.notifyFn(e)})},n.batchCalls=function(e){var t=this;return function(){for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];t.schedule(function(){e.apply(void 0,u)})}},n.flush=function(){var e=this,t=this.queue;this.queue=[],t.length&&de(function(){e.batchNotifyFn(function(){t.forEach(function(s){e.notifyFn(s)})})})},n.setNotifyFunction=function(e){this.notifyFn=e},n.setBatchNotifyFunction=function(e){this.batchNotifyFn=e},i}(),m=new ot,we=console;function De(){return we}function at(i){we=i}var ct=function(){function i(r){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=r.defaultOptions,this.setOptions(r.options),this.observers=[],this.cache=r.cache,this.queryKey=r.queryKey,this.queryHash=r.queryHash,this.initialState=r.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=r.meta,this.scheduleGc()}var n=i.prototype;return n.setOptions=function(e){var t;this.options=v({},this.defaultOptions,e),this.meta=e==null?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,(t=this.options.cacheTime)!=null?t:5*60*1e3)},n.setDefaultOptions=function(e){this.defaultOptions=e},n.scheduleGc=function(){var e=this;this.clearGcTimeout(),Ze(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){e.optionalRemove()},this.cacheTime))},n.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},n.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},n.setData=function(e,t){var s,u,o=this.state.data,a=Xe(e,o);return(s=(u=this.options).isDataEqual)!=null&&s.call(u,o,a)?a=o:this.options.structuralSharing!==!1&&(a=Ee(o,a)),this.dispatch({data:a,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt}),a},n.setState=function(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})},n.cancel=function(e){var t,s=this.promise;return(t=this.retryer)==null||t.cancel(e),s?s.then(g).catch(g):Promise.resolve()},n.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},n.reset=function(){this.destroy(),this.setState(this.initialState)},n.isActive=function(){return this.observers.some(function(e){return e.options.enabled!==!1})},n.isFetching=function(){return this.state.isFetching},n.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(e){return e.getCurrentResult().isStale})},n.isStaleByTime=function(e){return e===void 0&&(e=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!et(this.state.dataUpdatedAt,e)},n.onFocus=function(){var e,t=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},n.onOnline=function(){var e,t=this.observers.find(function(s){return s.shouldFetchOnReconnect()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},n.addObserver=function(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))},n.removeObserver=function(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(function(t){return t!==e}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))},n.getObserversCount=function(){return this.observers.length},n.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},n.fetch=function(e,t){var s=this,u,o,a;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){var f=this.observers.find(function(b){return b.options.queryFn});f&&this.setOptions(f.options)}var d=H(this.queryKey),h=Fe(),l={queryKey:d,pageParam:void 0,meta:this.meta};Object.defineProperty(l,"signal",{enumerable:!0,get:function(){if(h)return s.abortSignalConsumed=!0,h.signal}});var p=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(l)):Promise.reject("Missing queryFn")},y={fetchOptions:t,options:this.options,queryKey:d,state:this.state,fetchFn:p,meta:this.meta};if((u=this.options.behavior)!=null&&u.onFetch){var S;(S=this.options.behavior)==null||S.onFetch(y)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((o=y.fetchOptions)==null?void 0:o.meta)){var O;this.dispatch({type:"fetch",meta:(O=y.fetchOptions)==null?void 0:O.meta})}return this.retryer=new qe({fn:y.fetchFn,abort:h==null||(a=h.abort)==null?void 0:a.bind(h),onSuccess:function(_){s.setData(_),s.cache.config.onSuccess==null||s.cache.config.onSuccess(_,s),s.cacheTime===0&&s.optionalRemove()},onError:function(_){ee(_)&&_.silent||s.dispatch({type:"error",error:_}),ee(_)||(s.cache.config.onError==null||s.cache.config.onError(_,s),De().error(_)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay}),this.promise=this.retryer.promise,this.promise},n.dispatch=function(e){var t=this;this.state=this.reducer(this.state,e),m.batch(function(){t.observers.forEach(function(s){s.onQueryUpdate(e)}),t.cache.notify({query:t,type:"queryUpdated",action:e})})},n.getDefaultState=function(e){var t=typeof e.initialData=="function"?e.initialData():e.initialData,s=typeof e.initialData<"u",u=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,o=typeof t<"u";return{data:t,dataUpdateCount:0,dataUpdatedAt:o?u??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:o?"success":"idle"}},n.reducer=function(e,t){var s,u;switch(t.type){case"failed":return v({},e,{fetchFailureCount:e.fetchFailureCount+1});case"pause":return v({},e,{isPaused:!0});case"continue":return v({},e,{isPaused:!1});case"fetch":return v({},e,{fetchFailureCount:0,fetchMeta:(s=t.meta)!=null?s:null,isFetching:!0,isPaused:!1},!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return v({},e,{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:(u=t.dataUpdatedAt)!=null?u:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var o=t.error;return ee(o)&&o.revert&&this.revertState?v({},this.revertState):v({},e,{error:o,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return v({},e,{isInvalidated:!0});case"setState":return v({},e,t.state);default:return e}},i}(),ft=function(i){z(n,i);function n(e){var t;return t=i.call(this)||this,t.config=e||{},t.queries=[],t.queriesMap={},t}var r=n.prototype;return r.build=function(t,s,u){var o,a=s.queryKey,c=(o=s.queryHash)!=null?o:se(a,s),f=this.get(c);return f||(f=new ct({cache:this,queryKey:a,queryHash:c,options:t.defaultQueryOptions(s),state:u,defaultOptions:t.getQueryDefaults(a),meta:s.meta}),this.add(f)),f},r.add=function(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"queryAdded",query:t}))},r.remove=function(t){var s=this.queriesMap[t.queryHash];s&&(t.destroy(),this.queries=this.queries.filter(function(u){return u!==t}),s===t&&delete this.queriesMap[t.queryHash],this.notify({type:"queryRemoved",query:t}))},r.clear=function(){var t=this;m.batch(function(){t.queries.forEach(function(s){t.remove(s)})})},r.get=function(t){return this.queriesMap[t]},r.getAll=function(){return this.queries},r.find=function(t,s){var u=D(t,s),o=u[0];return typeof o.exact>"u"&&(o.exact=!0),this.queries.find(function(a){return fe(o,a)})},r.findAll=function(t,s){var u=D(t,s),o=u[0];return Object.keys(o).length>0?this.queries.filter(function(a){return fe(o,a)}):this.queries},r.notify=function(t){var s=this;m.batch(function(){s.listeners.forEach(function(u){u(t)})})},r.onFocus=function(){var t=this;m.batch(function(){t.queries.forEach(function(s){s.onFocus()})})},r.onOnline=function(){var t=this;m.batch(function(){t.queries.forEach(function(s){s.onOnline()})})},n}(k),lt=function(){function i(r){this.options=v({},r.defaultOptions,r.options),this.mutationId=r.mutationId,this.mutationCache=r.mutationCache,this.observers=[],this.state=r.state||ht(),this.meta=r.meta}var n=i.prototype;return n.setState=function(e){this.dispatch({type:"setState",state:e})},n.addObserver=function(e){this.observers.indexOf(e)===-1&&this.observers.push(e)},n.removeObserver=function(e){this.observers=this.observers.filter(function(t){return t!==e})},n.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(g).catch(g)):Promise.resolve()},n.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},n.execute=function(){var e=this,t,s=this.state.status==="loading",u=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),u=u.then(function(){e.mutationCache.config.onMutate==null||e.mutationCache.config.onMutate(e.state.variables,e)}).then(function(){return e.options.onMutate==null?void 0:e.options.onMutate(e.state.variables)}).then(function(o){o!==e.state.context&&e.dispatch({type:"loading",context:o,variables:e.state.variables})})),u.then(function(){return e.executeMutation()}).then(function(o){t=o,e.mutationCache.config.onSuccess==null||e.mutationCache.config.onSuccess(t,e.state.variables,e.state.context,e)}).then(function(){return e.options.onSuccess==null?void 0:e.options.onSuccess(t,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(t,null,e.state.variables,e.state.context)}).then(function(){return e.dispatch({type:"success",data:t}),t}).catch(function(o){return e.mutationCache.config.onError==null||e.mutationCache.config.onError(o,e.state.variables,e.state.context,e),De().error(o),Promise.resolve().then(function(){return e.options.onError==null?void 0:e.options.onError(o,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(void 0,o,e.state.variables,e.state.context)}).then(function(){throw e.dispatch({type:"error",error:o}),o})})},n.executeMutation=function(){var e=this,t;return this.retryer=new qe({fn:function(){return e.options.mutationFn?e.options.mutationFn(e.state.variables):Promise.reject("No mutationFn found")},onFail:function(){e.dispatch({type:"failed"})},onPause:function(){e.dispatch({type:"pause"})},onContinue:function(){e.dispatch({type:"continue"})},retry:(t=this.options.retry)!=null?t:0,retryDelay:this.options.retryDelay}),this.retryer.promise},n.dispatch=function(e){var t=this;this.state=dt(this.state,e),m.batch(function(){t.observers.forEach(function(s){s.onMutationUpdate(e)}),t.mutationCache.notify(t)})},i}();function ht(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function dt(i,n){switch(n.type){case"failed":return v({},i,{failureCount:i.failureCount+1});case"pause":return v({},i,{isPaused:!0});case"continue":return v({},i,{isPaused:!1});case"loading":return v({},i,{context:n.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:n.variables});case"success":return v({},i,{data:n.data,error:null,status:"success",isPaused:!1});case"error":return v({},i,{data:void 0,error:n.error,failureCount:i.failureCount+1,isPaused:!1,status:"error"});case"setState":return v({},i,n.state);default:return i}}var vt=function(i){z(n,i);function n(e){var t;return t=i.call(this)||this,t.config=e||{},t.mutations=[],t.mutationId=0,t}var r=n.prototype;return r.build=function(t,s,u){var o=new lt({mutationCache:this,mutationId:++this.mutationId,options:t.defaultMutationOptions(s),state:u,defaultOptions:s.mutationKey?t.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(o),o},r.add=function(t){this.mutations.push(t),this.notify(t)},r.remove=function(t){this.mutations=this.mutations.filter(function(s){return s!==t}),t.cancel(),this.notify(t)},r.clear=function(){var t=this;m.batch(function(){t.mutations.forEach(function(s){t.remove(s)})})},r.getAll=function(){return this.mutations},r.find=function(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(function(s){return le(t,s)})},r.findAll=function(t){return this.mutations.filter(function(s){return le(t,s)})},r.notify=function(t){var s=this;m.batch(function(){s.listeners.forEach(function(u){u(t)})})},r.onFocus=function(){this.resumePausedMutations()},r.onOnline=function(){this.resumePausedMutations()},r.resumePausedMutations=function(){var t=this.mutations.filter(function(s){return s.state.isPaused});return m.batch(function(){return t.reduce(function(s,u){return s.then(function(){return u.continue().catch(g)})},Promise.resolve())})},n}(k);function pt(){return{onFetch:function(n){n.fetchFn=function(){var r,e,t,s,u,o,a=(r=n.fetchOptions)==null||(e=r.meta)==null?void 0:e.refetchPage,c=(t=n.fetchOptions)==null||(s=t.meta)==null?void 0:s.fetchMore,f=c==null?void 0:c.pageParam,d=(c==null?void 0:c.direction)==="forward",h=(c==null?void 0:c.direction)==="backward",l=((u=n.state.data)==null?void 0:u.pages)||[],p=((o=n.state.data)==null?void 0:o.pageParams)||[],y=Fe(),S=y==null?void 0:y.signal,O=p,b=!1,_=n.options.queryFn||function(){return Promise.reject("Missing queryFn")},j=function(q,R,C,U){return O=U?[R].concat(O):[].concat(O,[R]),U?[C].concat(q):[].concat(q,[C])},L=function(q,R,C,U){if(b)return Promise.reject("Cancelled");if(typeof C>"u"&&!R&&q.length)return Promise.resolve(q);var w={queryKey:n.queryKey,signal:S,pageParam:C,meta:n.meta},M=_(w),I=Promise.resolve(M).then(function(Ke){return j(q,C,Ke,U)});if(G(M)){var X=I;X.cancel=M.cancel}return I},F;if(!l.length)F=L([]);else if(d){var ue=typeof f<"u",Le=ue?f:ve(n.options,l);F=L(l,ue,Le)}else if(h){var oe=typeof f<"u",Ue=oe?f:yt(n.options,l);F=L(l,oe,Ue,!0)}else(function(){O=[];var A=typeof n.options.getNextPageParam>"u",q=a&&l[0]?a(l[0],0,l):!0;F=q?L([],A,p[0]):Promise.resolve(j([],p[0],l[0]));for(var R=function(w){F=F.then(function(M){var I=a&&l[w]?a(l[w],w,l):!0;if(I){var X=A?p[w]:ve(n.options,M);return L(M,A,X)}return Promise.resolve(j(M,p[w],l[w]))})},C=1;C<l.length;C++)R(C)})();var ae=F.then(function(A){return{pages:A,pageParams:O}}),Te=ae;return Te.cancel=function(){b=!0,y==null||y.abort(),G(F)&&F.cancel()},ae}}}}function ve(i,n){return i.getNextPageParam==null?void 0:i.getNextPageParam(n[n.length-1],n)}function yt(i,n){return i.getPreviousPageParam==null?void 0:i.getPreviousPageParam(n[0],n)}var mt=function(){function i(r){r===void 0&&(r={}),this.queryCache=r.queryCache||new ft,this.mutationCache=r.mutationCache||new vt,this.defaultOptions=r.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var n=i.prototype;return n.mount=function(){var e=this;this.unsubscribeFocus=N.subscribe(function(){N.isFocused()&&B.isOnline()&&(e.mutationCache.onFocus(),e.queryCache.onFocus())}),this.unsubscribeOnline=B.subscribe(function(){N.isFocused()&&B.isOnline()&&(e.mutationCache.onOnline(),e.queryCache.onOnline())})},n.unmount=function(){var e,t;(e=this.unsubscribeFocus)==null||e.call(this),(t=this.unsubscribeOnline)==null||t.call(this)},n.isFetching=function(e,t){var s=D(e,t),u=s[0];return u.fetching=!0,this.queryCache.findAll(u).length},n.isMutating=function(e){return this.mutationCache.findAll(v({},e,{fetching:!0})).length},n.getQueryData=function(e,t){var s;return(s=this.queryCache.find(e,t))==null?void 0:s.state.data},n.getQueriesData=function(e){return this.getQueryCache().findAll(e).map(function(t){var s=t.queryKey,u=t.state,o=u.data;return[s,o]})},n.setQueryData=function(e,t,s){var u=Z(e),o=this.defaultQueryOptions(u);return this.queryCache.build(this,o).setData(t,s)},n.setQueriesData=function(e,t,s){var u=this;return m.batch(function(){return u.getQueryCache().findAll(e).map(function(o){var a=o.queryKey;return[a,u.setQueryData(a,t,s)]})})},n.getQueryState=function(e,t){var s;return(s=this.queryCache.find(e,t))==null?void 0:s.state},n.removeQueries=function(e,t){var s=D(e,t),u=s[0],o=this.queryCache;m.batch(function(){o.findAll(u).forEach(function(a){o.remove(a)})})},n.resetQueries=function(e,t,s){var u=this,o=D(e,t,s),a=o[0],c=o[1],f=this.queryCache,d=v({},a,{active:!0});return m.batch(function(){return f.findAll(a).forEach(function(h){h.reset()}),u.refetchQueries(d,c)})},n.cancelQueries=function(e,t,s){var u=this,o=D(e,t,s),a=o[0],c=o[1],f=c===void 0?{}:c;typeof f.revert>"u"&&(f.revert=!0);var d=m.batch(function(){return u.queryCache.findAll(a).map(function(h){return h.cancel(f)})});return Promise.all(d).then(g).catch(g)},n.invalidateQueries=function(e,t,s){var u,o,a,c=this,f=D(e,t,s),d=f[0],h=f[1],l=v({},d,{active:(u=(o=d.refetchActive)!=null?o:d.active)!=null?u:!0,inactive:(a=d.refetchInactive)!=null?a:!1});return m.batch(function(){return c.queryCache.findAll(d).forEach(function(p){p.invalidate()}),c.refetchQueries(l,h)})},n.refetchQueries=function(e,t,s){var u=this,o=D(e,t,s),a=o[0],c=o[1],f=m.batch(function(){return u.queryCache.findAll(a).map(function(h){return h.fetch(void 0,v({},c,{meta:{refetchPage:a==null?void 0:a.refetchPage}}))})}),d=Promise.all(f).then(g);return c!=null&&c.throwOnError||(d=d.catch(g)),d},n.fetchQuery=function(e,t,s){var u=Z(e,t,s),o=this.defaultQueryOptions(u);typeof o.retry>"u"&&(o.retry=!1);var a=this.queryCache.build(this,o);return a.isStaleByTime(o.staleTime)?a.fetch(o):Promise.resolve(a.state.data)},n.prefetchQuery=function(e,t,s){return this.fetchQuery(e,t,s).then(g).catch(g)},n.fetchInfiniteQuery=function(e,t,s){var u=Z(e,t,s);return u.behavior=pt(),this.fetchQuery(u)},n.prefetchInfiniteQuery=function(e,t,s){return this.fetchInfiniteQuery(e,t,s).then(g).catch(g)},n.cancelMutations=function(){var e=this,t=m.batch(function(){return e.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(t).then(g).catch(g)},n.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},n.executeMutation=function(e){return this.mutationCache.build(this,e).execute()},n.getQueryCache=function(){return this.queryCache},n.getMutationCache=function(){return this.mutationCache},n.getDefaultOptions=function(){return this.defaultOptions},n.setDefaultOptions=function(e){this.defaultOptions=e},n.setQueryDefaults=function(e,t){var s=this.queryDefaults.find(function(u){return Q(e)===Q(u.queryKey)});s?s.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})},n.getQueryDefaults=function(e){var t;return e?(t=this.queryDefaults.find(function(s){return V(e,s.queryKey)}))==null?void 0:t.defaultOptions:void 0},n.setMutationDefaults=function(e,t){var s=this.mutationDefaults.find(function(u){return Q(e)===Q(u.mutationKey)});s?s.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})},n.getMutationDefaults=function(e){var t;return e?(t=this.mutationDefaults.find(function(s){return V(e,s.mutationKey)}))==null?void 0:t.defaultOptions:void 0},n.defaultQueryOptions=function(e){if(e!=null&&e._defaulted)return e;var t=v({},this.defaultOptions.queries,this.getQueryDefaults(e==null?void 0:e.queryKey),e,{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=se(t.queryKey,t)),t},n.defaultQueryObserverOptions=function(e){return this.defaultQueryOptions(e)},n.defaultMutationOptions=function(e){return e!=null&&e._defaulted?e:v({},this.defaultOptions.mutations,this.getMutationDefaults(e==null?void 0:e.mutationKey),e,{_defaulted:!0})},n.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},i}(),bt=Ne.unstable_batchedUpdates;m.setBatchNotifyFunction(bt);var gt=console;at(gt);var pe=x.createContext(void 0),xe=x.createContext(!1);function Ae(i){return i&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=pe),window.ReactQueryClientContext):pe}var an=function(){var n=x.useContext(Ae(x.useContext(xe)));if(!n)throw new Error("No QueryClient set, use QueryClientProvider to set one");return n},Ot=function(n){var r=n.client,e=n.contextSharing,t=e===void 0?!1:e,s=n.children;x.useEffect(function(){return r.mount(),function(){r.unmount()}},[r]);var u=Ae(t);return x.createElement(xe.Provider,{value:t},x.createElement(u.Provider,{value:r},s))},_t={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ye=i=>{let n;const r=new Set,e=(a,c)=>{const f=typeof a=="function"?a(n):a;if(!Object.is(f,n)){const d=n;n=c??(typeof f!="object"||f===null)?f:Object.assign({},n,f),r.forEach(h=>h(n,d))}},t=()=>n,o={setState:e,getState:t,subscribe:a=>(r.add(a),()=>r.delete(a)),destroy:()=>{r.clear()}};return n=i(e,t,o),o},Pt=i=>i?ye(i):ye;var Me={exports:{}},Qe={},Re={exports:{}},$e={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=E;function Ct(i,n){return i===n&&(i!==0||1/i===1/n)||i!==i&&n!==n}var Et=typeof Object.is=="function"?Object.is:Ct,Ft=$.useState,St=$.useEffect,qt=$.useLayoutEffect,wt=$.useDebugValue;function Dt(i,n){var r=n(),e=Ft({inst:{value:r,getSnapshot:n}}),t=e[0].inst,s=e[1];return qt(function(){t.value=r,t.getSnapshot=n,te(t)&&s({inst:t})},[i,r,n]),St(function(){return te(t)&&s({inst:t}),i(function(){te(t)&&s({inst:t})})},[i]),wt(r),r}function te(i){var n=i.getSnapshot;i=i.value;try{var r=n();return!Et(i,r)}catch{return!0}}function xt(i,n){return n()}var At=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xt:Dt;$e.useSyncExternalStore=$.useSyncExternalStore!==void 0?$.useSyncExternalStore:At;Re.exports=$e;var Mt=Re.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=E,Qt=Mt;function Rt(i,n){return i===n&&(i!==0||1/i===1/n)||i!==i&&n!==n}var $t=typeof Object.is=="function"?Object.is:Rt,jt=Qt.useSyncExternalStore,Lt=Y.useRef,Ut=Y.useEffect,Tt=Y.useMemo,Kt=Y.useDebugValue;Qe.useSyncExternalStoreWithSelector=function(i,n,r,e,t){var s=Lt(null);if(s.current===null){var u={hasValue:!1,value:null};s.current=u}else u=s.current;s=Tt(function(){function a(l){if(!c){if(c=!0,f=l,l=e(l),t!==void 0&&u.hasValue){var p=u.value;if(t(p,l))return d=p}return d=l}if(p=d,$t(f,l))return p;var y=e(l);return t!==void 0&&t(p,y)?p:(f=l,d=y)}var c=!1,f,d,h=r===void 0?null:r;return[function(){return a(n())},h===null?void 0:function(){return a(h())}]},[n,r,e,t]);var o=jt(i,s[0],s[1]);return Ut(function(){u.hasValue=!0,u.value=o},[o]),Kt(o),o};Me.exports=Qe;var It=Me.exports;const Nt=Be(It);var je={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:Bt}=x,{useSyncExternalStoreWithSelector:Ht}=Nt;let me=!1;function Vt(i,n=i.getState,r){(je?"production":void 0)!=="production"&&r&&!me&&(me=!0);const e=Ht(i.subscribe,i.getState,i.getServerState||i.getState,n,r);return Bt(e),e}const be=i=>{const n=typeof i=="function"?Pt(i):i,r=(e,t)=>Vt(n,e,t);return Object.assign(r,n),r},Gt=i=>i?be(i):be,Wt=Gt(i=>({isMobile:!1,setIsMobile:n=>{i({isMobile:n})}})),zt=({children:i})=>{const n=Wt(r=>r.setIsMobile);return E.useEffect(()=>{const e=/Android|iPhone/i.test(navigator.userAgent);n(e)},[]),P.jsx(P.Fragment,{children:i})},kt="modulepreload",Jt=function(i){return"/"+i},ge={},K=function(n,r,e){let t=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link");t=Promise.all(r.map(u=>{if(u=Jt(u),u in ge)return;ge[u]=!0;const o=u.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!e)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===u&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${a}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":kt,o||(f.as="script",f.crossOrigin=""),f.href=u,document.head.appendChild(f),o)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}return t.then(()=>n()).catch(s=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s})},Yt=E.lazy(()=>K(()=>import("./index-CBsVDFkt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),Xt=E.lazy(()=>K(()=>import("./index-N6WNInvt.js"),__vite__mapDeps([10,1,11,3,4,5,7,8,12]))),Zt=E.lazy(()=>K(()=>import("./index-4hIzijgW.js"),__vite__mapDeps([13,3,1,11,6,7,8,14,15]))),en=E.lazy(()=>K(()=>import("./index-1SGi_M0K.js"),__vite__mapDeps([16,1,14,3,17]))),tn=E.lazy(()=>K(()=>import("./index-ryWYLHbg.js"),__vite__mapDeps([18,4,5,1,19]))),T={main:"/",question:"/question",portfolio:"/portfolio",editor:"/editor",error:"*"},nn=He([{path:T.main,element:P.jsx(Yt,{})},{path:T.question,element:P.jsx(Xt,{})},{path:T.portfolio,element:P.jsx(Zt,{})},{path:T.editor,element:P.jsx(en,{})},{path:T.error,element:P.jsx(tn,{})}]),rn=new mt,sn=()=>P.jsx(Ot,{client:rn,children:P.jsx(zt,{children:P.jsx(E.Suspense,{fallback:P.jsx("div",{}),children:P.jsx(Ve,{router:nn})})})});ne.createRoot(document.getElementById("root")).render(P.jsx(sn,{}));export{k as S,K as _,Wt as a,z as b,Pt as c,v as d,Ze as e,N as f,Ee as g,De as h,Pe as i,P as j,ee as k,m as l,an as m,g as n,Gt as o,Z as p,T as r,on as s,et as t,Nt as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["app/index-CBsVDFkt.js","app/vendor-kX6pW5M-.js","app/extends-dGVwEr9R.js","app/constants-T-c9kqBK.js","app/index-NAykRfP2.js","app/index-0wKfDsBP.css","app/useCustomQuery-aR4ehRDR.js","app/api-Gjmf6SNA.js","app/api-cAqwx3WW.css","app/index-XAjMwz2V.css","app/index-N6WNInvt.js","app/useLocaleValue-bXkvFXJN.js","app/index-cFoxS9ko.css","app/index-4hIzijgW.js","app/commonUtil-Nhzy4l6V.js","app/index-mwP0qvbS.css","app/index-1SGi_M0K.js","app/index--OlDckvE.css","app/index-ryWYLHbg.js","app/index-jhjgiYut.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}