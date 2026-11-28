(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var rt=!1,nt=!1,M=[],ot=-1,Le=!1,St=!1;function xr(e){Ar(e)}function wr(){St=!0}function Cr(){St=!1,oi()}function Ar(e){M.includes(e)||(M.push(e),e._x_schedulerPriority!==void 0&&(Le=!0)),oi()}function xt(e){let t=M.indexOf(e);t!==-1&&t>ot&&M.splice(t,1)}function oi(){if(!nt&&!rt){if(St)return;rt=!0,queueMicrotask(Rr)}}function Rr(){rt=!1,nt=!0;for(let e=0;e<M.length;e++)Le&&Er(e),M[e](),ot=e;M.length=0,ot=-1,Le=!1,nt=!1}function Er(e){let t=new Map,i=M.slice(e).sort((n,r)=>Tr(n,r,t));for(let n=0;n<i.length;n++)M[e+n]=i[n];Le=!1}function Tr(e,t,i){return Ge(e)?Ge(t)?qt(e._x_schedulerPriority.el,i)-qt(t._x_schedulerPriority.el,i)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:Ge(t)?1:0}function Ge(e){return e._x_schedulerPriority!==void 0}function qt(e,t){if(t.has(e))return t.get(e);let i=0,n=e;for(;e;)i++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(n,i),i}var oe,X,ae,ai,Ir=0,at=!0;function Or(e){at=!1,e(),at=!0}function Lr(e){oe=e.reactive,ae=e.release,X=t=>e.effect(t,{scheduler:i=>{at?xr(i):i()}}),ai=e.raw}function zt(e){X=e}function Mr(e){let t=()=>{};return[(n,r)=>{let o=(r==null?void 0:r.priority)==="structural"?Ir++:void 0,a=X(n);return o!==void 0&&a!==void 0&&(a._x_schedulerPriority={el:e,order:o}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(s=>s())}),e._x_effects.add(a),t=()=>{a!==void 0&&(e._x_effects.delete(a),ae(a))},a},()=>{t()}]}function si(e,t){let i=!0,n,r,o=X(()=>{let a=e(),s=JSON.stringify(a);if(!i&&(typeof a=="object"||a!==n)){let c=typeof n=="object"?JSON.parse(r):n;queueMicrotask(()=>{t(a,c)})}n=a,r=s,i=!1});return()=>{xt(o),ae(o)}}async function Dr(e){wr();try{await e(),await Promise.resolve()}finally{Cr()}}var ci=[],li=[],di=[];function Pr(e){di.push(e)}function wt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,li.push(t))}function ui(e){ci.push(e)}function fi(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function pi(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,n])=>{(t===void 0||t.includes(i))&&(n.forEach(r=>r()),delete e._x_attributeCleanups[i])})}function Fr(e){var t,i;for((t=e._x_effects)==null||t.forEach(xt);(i=e._x_cleanups)!=null&&i.length;)e._x_cleanups.pop()()}var Ne=new MutationObserver(Be),Ct=!1;function At(){Ne.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ct=!0}function gi(){kr(),Ne.disconnect(),Ct=!1}var H=[];function kr(){let e=Ne.takeRecords();H.push(()=>e.length>0&&Be(e));let t=H.length;queueMicrotask(()=>{if(H.length===t)for(;H.length>0;)H.shift()()})}function Nr(){for(;H.length>0;)H.shift()();let e=Ne.takeRecords();e.length>0&&Be(e)}function _(e){if(!Ct)return e();gi();try{return e()}finally{At()}}var Rt=!1,Me=[];function Br(){Rt=!0}function Hr(){Rt=!1,Be(Me),Me=[]}function Be(e){if(Rt){Me=Me.concat(e);return}let t=[],i=new Set,n=new Map,r=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(a=>{a.nodeType===1&&a._x_marker&&i.add(a)}),e[o].addedNodes.forEach(a=>{if(a.nodeType===1){if(i.has(a)){i.delete(a);return}a._x_marker||t.push(a)}})),e[o].type==="attributes")){let a=e[o].target,s=e[o].attributeName,c=e[o].oldValue,l=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:s,value:a.getAttribute(s)})},d=()=>{r.has(a)||r.set(a,[]),r.get(a).push(s)};a.hasAttribute(s)&&c===null?l():a.hasAttribute(s)?(d(),l()):d()}r.forEach((o,a)=>{pi(a,o)}),n.forEach((o,a)=>{ci.forEach(s=>s(a,o))});for(let o of i)t.some(a=>a.contains(o))||li.forEach(a=>a(o));for(let o of t)o.isConnected&&di.forEach(a=>a(o));t=null,i=null,n=null,r=null}function hi(e){return V(K(e))}function we(e,t,i){return e._x_dataStack=[t,...K(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function K(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?K(e.host):e.parentNode?K(e.parentNode):[]}function V(e){return new Proxy({objects:e},$r)}function bi(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:bi(Object.getPrototypeOf(e),t)}var $r={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(i=>Object.prototype.hasOwnProperty.call(i,t)||Reflect.has(i,t))},get({objects:e},t,i){return t=="toJSON"?jr:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,i)},set({objects:e},t,i,n){let r;for(const a of e)if(r=bi(a,t),r)break;r||(r=e[e.length-1]);const o=Object.getOwnPropertyDescriptor(r,t);return o!=null&&o.set&&(o!=null&&o.get)?o.set.call(n,i)||!0:Reflect.set(r,t,i)}};function jr(){return Reflect.ownKeys(this).reduce((t,i)=>(t[i]=Reflect.get(this,i),t),{})}function Et(e,t=()=>{}){let i=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([a,{value:s,enumerable:c}])=>{if(c===!1||s===void 0||typeof s=="object"&&s!==null&&s.__v_skip)return;let l=o===""?a:`${o}.${a}`;typeof s=="object"&&s!==null&&s._x_interceptor?r[a]=s.initialize(e,l,a,t):i(s)&&s!==r&&!(s instanceof Element)&&n(s,l)})};return n(e)}function mi(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(n,r,o,a){return e(this.initialValue,()=>Wr(n,r),s=>st(n,r,s),r,o,a)}};return t(i),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let r=i.initialize.bind(i);i.initialize=(o,a,s,c)=>{let l=n.initialize(o,a,s,c);return i.initialValue=l,r(o,a,s,c)}}else i.initialValue=n;return i}}function Wr(e,t){return t.split(".").reduce((i,n)=>i[n],e)}function st(e,t,i){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=i;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),st(e[t[0]],t.slice(1),i)}}var vi={};function R(e,t){vi[e]=t}function be(e,t){let i=Ur(t);return Object.entries(vi).forEach(([n,r])=>{Object.defineProperty(e,`$${n}`,{get(){return r(t,i)},enumerable:!1})}),e}function Ur(e){let[t,i]=Ai(e),n={interceptor:mi,...t};return wt(e,i),n}function Kr(e,t,i,...n){try{return i(...n)}catch(r){ne(r,e,t)}}function ne(...e){return _i(...e)}var _i=qr;function Vr(e){_i=e}function qr(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}

${i?'Expression: "'+i+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var re=!0;function yi(e){let t=re;re=!1;let i=e();return re=t,i}function W(e,t,i={}){let n;return x(e,t)(r=>n=r,i),n}function x(...e){return Si(...e)}var Si=()=>{};function zr(e){Si=e}var xi;function Gr(e){xi=e}function Jr(e,t){let i={};be(i,e);let n=[i,...K(e)],r=typeof t=="function"?Zr(n,t):Xr(n,t,e);return Kr.bind(null,e,t,r)}function Zr(e,t){return(i=()=>{},{scope:n={},params:r=[],context:o}={})=>{if(!re){me(i,t,V([n,...e]),r);return}let a=t.apply(V([n,...e]),r);me(i,a)}}var Je={};function Yr(e,t){if(Je[e])return Je[e];let i=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let a=new i(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${e}`}),a}catch(a){return ne(a,t,e),Promise.resolve()}})();return Je[e]=o,o}function Xr(e,t,i){let n=Yr(t,i);return(r=()=>{},{scope:o={},params:a=[],context:s}={})=>{n.result=void 0,n.finished=!1;let c=V([o,...e]);if(typeof n=="function"){let l=n.call(s,n,c).catch(d=>ne(d,i,t));n.finished?(me(r,n.result,c,a,i),n.result=void 0):l.then(d=>{me(r,d,c,a,i)}).catch(d=>ne(d,i,t)).finally(()=>n.result=void 0)}}}function me(e,t,i,n,r){if(re&&typeof t=="function"){let o=t.apply(i,n);o instanceof Promise?o.then(a=>me(e,a,i,n)).catch(a=>ne(a,r,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function Qr(...e){return xi(...e)}function en(e,t,i={}){let n={};be(n,e);let r=[n,...K(e)],o=V([i.scope??{},...r]),a=i.params??[];if(t.includes("await")){let s=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new s(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(i.context,o)}else{let s=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,l=new Function(["scope"],`with (scope) { let __result = ${s}; return __result }`).call(i.context,o);return typeof l=="function"&&re?l.apply(o,a):l}}var Tt="x-";function q(e=""){return Tt+e}function tn(e){Tt=e}var De={};function y(e,t){return De[e]=t,{before(i){if(!De[i]){console.warn(String.raw`Cannot find directive \`${i}\`. \`${e}\` will use the default order of execution`);return}const n=j.indexOf(i);j.splice(n>=0?n:j.indexOf("DEFAULT"),0,e)}}}function rn(e){return Object.keys(De).includes(e)}function He(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([s,c])=>({name:s,value:c})),a=wi(o);o=o.map(s=>a.find(c=>c.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),t=t.concat(o)}let n={};return t.map(Ti((o,a)=>n[o]=a)).filter(Oi).map(an(n,i)).sort(sn).map(o=>on(e,o))}function wi(e){return Array.from(e).map(Ti()).filter(t=>!Oi(t))}var ct=!1,de=new Map,Ci=Symbol();function nn(e){ct=!0;let t=Symbol();Ci=t,de.set(t,[]);let i=()=>{for(;de.get(t).length;)de.get(t).shift()();de.delete(t)},n=()=>{ct=!1,i()};e(i),n()}function Ai(e){let t=[],i=s=>t.push(s),[n,r]=Mr(e);return t.push(r),[{Alpine:se,effect:n,cleanup:i,evaluateLater:x.bind(x,e),evaluate:W.bind(W,e)},()=>t.forEach(s=>s())]}function on(e,t){let i=()=>{},n=De[t.type]||i,[r,o]=Ai(e);fi(e,t.original,o);let a=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,r),n=n.bind(n,e,t,r),ct?de.get(Ci).push(n):n())};return a.runCleanups=o,a}var Ri=(e,t)=>({name:i,value:n})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:n}),Ei=e=>e;function Ti(e=()=>{}){return({name:t,value:i})=>{let{name:n,value:r}=Ii.reduce((o,a)=>a(o),{name:t,value:i});return n!==t&&e(n,t),{name:n,value:r}}}var Ii=[];function It(e){Ii.push(e)}function Oi({name:e}){return Li().test(e)}var Li=()=>new RegExp(`^${Tt}([^:^.]+)\\b`);function an(e,t){return({name:i,value:n})=>{i===n&&(n="");let r=i.match(Li()),o=i.match(/:([a-zA-Z0-9\-_:]+)/),a=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[i]||i;return{type:r?r[1]:null,value:o?o[1]:null,modifiers:a.map(c=>c.replace(".","")),expression:n,original:s}}}var lt="DEFAULT",j=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",lt,"teleport"];function sn(e,t){let i=j.indexOf(e.type)===-1?lt:e.type,n=j.indexOf(t.type)===-1?lt:t.type;return j.indexOf(i)-j.indexOf(n)}function z(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(r=>z(r,t));return}let i=!1;if(t(e,()=>i=!0),i)return;let n=e.firstElementChild;for(;n;)z(n,t),n=n.nextElementSibling}var D=!1;function P(e,t=()=>{}){return(...i)=>D?t(...i):e(...i)}function cn(e){return(...t)=>D&&e(...t)}var Mi=[];function Ce(e){Mi.push(e)}function ln(e,t){Mi.forEach(i=>i(e,t)),D=!0,Di(()=>{I(t,(i,n)=>{n(i,()=>{})})}),D=!1}var dt=!1;function dn(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),D=!0,dt=!0,Di(()=>{un(t)}),D=!1,dt=!1}function un(e){let t=!1;I(e,(n,r)=>{z(n,(o,a)=>{if(t&&mn(o))return a();t=!0,r(o,a)})})}function Di(e){let t=X;zt((i,n)=>{let r=t(i);return ae(r),()=>{}}),e(),zt(t)}var $e=0;function fn(e,t){let i=e._x_deferInit;i||(i=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},i.ownsIgnore&&(e._x_ignore=!0),$e++),i.pending++,Promise.resolve(t).catch(n=>{try{ne(n,e)}catch(r){setTimeout(()=>{throw r},0)}}).then(()=>pn(e,i))}function pn(e,t){t.pending--,!(t.pending>0)&&(Nr(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,$e--,e.isConnected&&(hn(t),I(e))))}function gn(e,t){if($e===0)return!1;let i=C(e,n=>n._x_deferInit);return i?(Pi(i._x_deferInit,e,t.map(({name:n})=>n)),!0):!1}function Pi(e,t,i){let n=e.queuedAttributes.get(t);(!n||n.marker!==t._x_marker)&&(n={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,n)),i.forEach(r=>n.names.add(r))}function hn(e){e.queuedAttributes.forEach((t,i)=>{if(!i.isConnected||!i._x_marker||i._x_marker!==t.marker)return;let n=C(i,o=>o._x_deferInit);if(n){Pi(n._x_deferInit,i,Array.from(t.names));return}let r=Array.from(t.names).filter(o=>i.hasAttribute(o)).map(o=>({name:o,value:i.getAttribute(o)}));r.length!==0&&He(i,r).forEach(o=>o())})}Ce((e,t)=>{$e!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||C(e,i=>i._x_deferInit)&&(t._x_ignore=!0))});function ue(e,t,i={},n={}){return e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0,...n}))}function T(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Gt=!1;function bn(){Gt&&T("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Gt=!0,document.body||T("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),ue(document,"alpine:init"),ue(document,"alpine:initializing"),At(),Pr(t=>I(t,z)),wt(t=>Q(t)),ui((t,i)=>{gn(t,i)||He(t,i).forEach(n=>n())});let e=t=>!je(t.parentElement,!0);Array.from(document.querySelectorAll(Ni().join(","))).filter(e).forEach(t=>{I(t)}),ue(document,"alpine:initialized"),setTimeout(()=>{yn()})}var Ot=[],Fi=[];function ki(){return Ot.map(e=>e())}function Ni(){return Ot.concat(Fi).map(e=>e())}function Bi(e){Ot.push(e)}function Hi(e){Fi.push(e)}function je(e,t=!1){return C(e,i=>{if((t?Ni():ki()).some(r=>i.matches(r)))return!0})}function C(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return C(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return C(e.parentNode.host,t);if(e.parentElement)return C(e.parentElement,t)}}function mn(e){return ki().some(t=>e.matches(t))}var $i=[];function vn(e){$i.push(e)}var _n=1;function I(e,t=z,i=()=>{}){C(e,n=>n._x_ignore)||nn(()=>{t(e,(n,r)=>{n._x_marker||(i(n,r),$i.forEach(o=>o(n,r)),He(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=_n++),n._x_ignore&&r())})})}function Q(e,t=z){t(e,i=>{Fr(i),pi(i),delete i._x_marker})}function yn(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,i,n])=>{rn(i)||n.some(r=>{if(document.querySelector(r))return T(`found "${r}", but missing ${t} plugin`),!0})})}var ut=[],Lt=!1;function Mt(e=()=>{}){return queueMicrotask(()=>{Lt||setTimeout(()=>{ft()})}),new Promise(t=>{ut.push(()=>{e(),t()})})}function ft(){for(Lt=!1;ut.length;)ut.shift()()}function Sn(){Lt=!0}function Dt(e,t){return Array.isArray(t)?Jt(e,t.join(" ")):typeof t=="object"&&t!==null?xn(e,t):typeof t=="function"?Dt(e,t()):Jt(e,t)}function pt(e){return e.split(/\s/).filter(Boolean)}function Jt(e,t){let i=r=>pt(r).filter(o=>!e.classList.contains(o)).filter(Boolean),n=r=>(e.classList.add(...r),()=>{e.classList.remove(...r)});return t=t===!0?t="":t||"",n(i(t))}function xn(e,t){let i=Object.entries(t).flatMap(([a,s])=>s?pt(a):!1).filter(Boolean),n=Object.entries(t).flatMap(([a,s])=>s?!1:pt(a)).filter(Boolean),r=[],o=[];return n.forEach(a=>{e.classList.contains(a)&&(e.classList.remove(a),o.push(a))}),i.forEach(a=>{e.classList.contains(a)||(e.classList.add(a),r.push(a))}),()=>{o.forEach(a=>e.classList.add(a)),r.forEach(a=>e.classList.remove(a))}}function We(e,t){return typeof t=="object"&&t!==null?wn(e,t):Cn(e,t)}function wn(e,t){let i={};return Object.entries(t).forEach(([n,r])=>{i[n]=e.style[n],n.startsWith("--")||(n=An(n)),e.style.setProperty(n,r)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{We(e,i)}}function Cn(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}function An(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function gt(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}y("transition",(e,{value:t,modifiers:i,expression:n},{evaluate:r})=>{typeof n=="function"&&(n=r(n)),n!==!1&&(!n||typeof n=="boolean"?En(e,i,t):Rn(e,n,t))});function Rn(e,t,i){ji(e,Dt,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[i](t)}function En(e,t,i){ji(e,We);let n=!t.includes("in")&&!t.includes("out")&&!i,r=n||t.includes("in")||["enter"].includes(i),o=n||t.includes("out")||["leave"].includes(i);t.includes("in")&&!n&&(t=t.filter((v,F)=>F<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((v,F)=>F>t.indexOf("out")));let a=!t.includes("opacity")&&!t.includes("scale"),s=a||t.includes("opacity"),c=a||t.includes("scale"),l=s?0:1,d=c?ce(t,"scale",95)/100:1,f=ce(t,"delay",0)/1e3,p=ce(t,"origin","center"),g="opacity, transform",S=ce(t,"duration",150)/1e3,u=ce(t,"duration",75)/1e3,m="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(e._x_transition.enter.during={transformOrigin:p,transitionDelay:`${f}s`,transitionProperty:g,transitionDuration:`${S}s`,transitionTimingFunction:m},e._x_transition.enter.start={opacity:l,transform:`scale(${d})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:p,transitionDelay:`${f}s`,transitionProperty:g,transitionDuration:`${u}s`,transitionTimingFunction:m},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${d})`})}function ji(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(n=()=>{},r=()=>{}){ht(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,r)},out(n=()=>{},r=()=>{}){ht(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,n){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>r(i);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):o():e._x_transition?e._x_transition.in(i):o();return}e._x_hidePromise=e._x_transition?new Promise((a,s)=>{e._x_transition.out(()=>{},()=>a(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=Wi(e);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(e)):r(()=>{let s=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(s)]).then(([d])=>d==null?void 0:d());return delete c._x_hidePromise,delete c._x_hideChildren,l};s(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Wi(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Wi(t)}function ht(e,t,{during:i,start:n,end:r}={},o=()=>{},a=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(i).length===0&&Object.keys(n).length===0&&Object.keys(r).length===0){o(),a();return}let s,c,l;Tn(e,{start(){s=t(e,n)},during(){c=t(e,i)},before:o,end(){s(),l=t(e,r)},after:a,cleanup(){c(),l()}})}function Tn(e,t){let i,n,r,o=gt(()=>{_(()=>{i=!0,n||t.before(),r||(t.end(),ft()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:gt(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},_(()=>{t.start(),t.during()}),Sn(),requestAnimationFrame(()=>{if(i)return;let a=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),_(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{i||(_(()=>{t.end()}),ft(),setTimeout(e._x_transitioning.finish,a+s),r=!0)})})}function ce(e,t,i){if(e.indexOf(t)===-1)return i;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return i;if(t==="duration"||t==="delay"){let r=n.match(/([0-9]+)ms/);if(r)return r[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}function Ui(e,t,i,n=[]){switch(e._x_bindings||(e._x_bindings=oe({})),e._x_bindings[t]=i,t=n.includes("camel")?kn(t):t,t){case"value":In(e,i);break;case"style":Ln(e,i);break;case"class":On(e,i);break;case"selected":case"checked":Mn(e,t,i);break;default:Pt(e,t,i);break}}function In(e,t){if(Ft(e))e.attributes.value===void 0&&(e.value=t);else if(Pe(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(i=>Nn(i,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Fn(e,t);else if(e.tagName==="OPTION")Pt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function On(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Dt(e,t)}function Ln(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=We(e,t)}function Mn(e,t,i){Pt(e,t,i),Pn(e,t,i)}function Pt(e,t,i){[null,void 0,!1].includes(i)&&Hn(t)?e.removeAttribute(t):(Ki(t)&&(i=t),$n(i)&&(i=JSON.stringify(i)),Dn(e,t,i))}function Dn(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}function Pn(e,t,i){e[t]!==i&&(e[t]=i)}function Fn(e,t){const i=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=i.includes(n.value)})}function kn(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Nn(e,t){return e==t}function Oe(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var Bn=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Ki(e){return Bn.has(e)}function Hn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function $n(e){return typeof e=="object"&&e!==null}function jn(e,t,i){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Vi(e,t,i)}function Wn(e,t,i,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let r=e._x_inlineBindings[t];return r.extract=n,yi(()=>W(e,r.expression))}return Vi(e,t,i)}function Vi(e,t,i){let n=e.getAttribute(t);return n===null?typeof i=="function"?i():i:n===""?!0:Ki(t)?!![t,"true"].includes(n):n}function Pe(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Ft(e){return e.type==="radio"||e.localName==="ui-radio"}function qi(e,t){let i;return function(){const n=this,r=arguments,o=function(){i=null,e.apply(n,r)};clearTimeout(i),i=setTimeout(o,t)}}function zi(e,t){let i;return function(){let n=this,r=arguments;i||(e.apply(n,r),i=!0,setTimeout(()=>i=!1,t))}}function Gi({get:e,set:t},{get:i,set:n}){let r=!0,o,a=X(()=>{let s=e(),c=i();if(r)n(Ze(s)),r=!1;else{let l=JSON.stringify(s),d=JSON.stringify(c);l!==o?n(Ze(s)):l!==d&&t(Ze(c))}o=JSON.stringify(e()),JSON.stringify(i())});return()=>{xt(a),ae(a)}}function Ze(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Un(e){(Array.isArray(e)?e:[e]).forEach(i=>i(se))}var L={},Zt=!1;function Kn(e,t){if(Zt||(L=oe(L),Zt=!0),t===void 0)return L[e];L[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?L[e]=t.initialize(L,e,e,()=>{}):Et(L[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&L[e].init()}function Vn(){return L}var Ji={};function qn(e,t){let i=typeof t!="function"?()=>t:t;return e instanceof Element?Zi(e,i()):(Ji[e]=i,()=>{})}function zn(e){return Object.entries(Ji).forEach(([t,i])=>{Object.defineProperty(e,t,{get(){return(...n)=>i(...n)}})}),e}function Zi(e,t,i){let n=[];for(;n.length;)n.pop()();let r=Object.entries(t).map(([a,s])=>({name:a,value:s})),o=wi(r);return r=r.map(a=>o.find(s=>s.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),He(e,r,i).map(a=>{n.push(a.runCleanups),a()}),()=>{for(;n.length;)n.pop()()}}var Yi={};function Gn(e,t){Yi[e]=t}function Jn(e,t){return Object.entries(Yi).forEach(([i,n])=>{Object.defineProperty(e,i,{get(){return(...r)=>n.bind(t)(...r)},enumerable:!1})}),e}var Zn={get reactive(){return oe},get release(){return ae},get effect(){return X},get raw(){return ai},get transaction(){return Dr},version:"3.17.5",flushAndStopDeferringMutations:Hr,dontAutoEvaluateFunctions:yi,disableEffectScheduling:Or,startObservingMutations:At,stopObservingMutations:gi,setReactivityEngine:Lr,onAttributeRemoved:fi,onAttributesAdded:ui,closestDataStack:K,skipDuringClone:P,onlyDuringClone:cn,addRootSelector:Bi,addInitSelector:Hi,setErrorHandler:Vr,interceptClone:Ce,addScopeToNode:we,deferMutations:Br,mapAttributes:It,evaluateLater:x,interceptInit:vn,initInterceptors:Et,injectMagics:be,setEvaluator:zr,setRawEvaluator:Gr,mergeProxies:V,extractProp:Wn,findClosest:C,onElRemoved:wt,closestRoot:je,destroyTree:Q,interceptor:mi,transition:ht,setStyles:We,mutateDom:_,deferInit:fn,directive:y,entangle:Gi,throttle:zi,debounce:qi,evaluate:W,evaluateRaw:Qr,initTree:I,nextTick:Mt,prefixed:q,prefix:tn,plugin:Un,magic:R,store:Kn,start:bn,clone:dn,cloneNode:ln,bound:jn,$data:hi,watch:si,walk:z,data:Gn,bind:qn},se=Zn;function Yn(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}var ve=Object.assign,Xn=Object.prototype.hasOwnProperty,bt=(e,t)=>Xn.call(e,t),_e=Array.isArray,fe=e=>Xi(e)==="[object Map]",Qn=e=>typeof e=="string",Ae=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",eo=Object.prototype.toString,Xi=e=>eo.call(e),Qi=e=>Xi(e).slice(8,-1),kt=e=>Qn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,to=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},io=to(e=>e.charAt(0).toUpperCase()+e.slice(1)),$=(e,t)=>!Object.is(e,t);function G(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var h,Ye=new WeakSet,Yt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ye.has(this)&&(Ye.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ro(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xt(this),tr(this);const e=h,t=A;h=this,A=!0;try{return this.fn()}finally{h!==this&&G("Active effect was not restored correctly - this is likely a Vue internal bug."),ir(this),h=e,A=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ht(e);this.deps=this.depsTail=void 0,Xt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ye.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mt(this)&&this.run()}get dirty(){return mt(this)}},er=0,pe,ge;function ro(e,t=!1){if(e.flags|=8,t){e.next=ge,ge=e;return}e.next=pe,pe=e}function Nt(){er++}function Bt(){if(--er>0)return;if(ge){let t=ge;for(ge=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;pe;){let t=pe;for(pe=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function tr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ir(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),Ht(n),oo(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function mt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(no(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function no(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Fe)||(e.globalVersion=Fe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mt(e))))return;e.flags|=2;const t=e.dep,i=h,n=A;h=e,A=!0;try{tr(e);const r=e.fn(e._value);(t.version===0||$(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{h=i,A=n,ir(e),e.flags&=-3}}function Ht(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subsHead===e&&(i.subsHead=r),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let o=i.computed.deps;o;o=o.nextDep)Ht(o,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function oo(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function ao(e,t){e.effect instanceof Yt&&(e=e.effect.fn);const i=new Yt(e);t&&ve(i,t);try{i.run()}catch(r){throw i.stop(),r}const n=i.run.bind(i);return n.effect=i,n}function so(e){e.effect.stop()}var A=!0,rr=[];function co(){rr.push(A),A=!1}function lo(){const e=rr.pop();A=e===void 0?!0:e}function Xt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=h;h=void 0;try{t()}finally{h=i}}}var Fe=0,uo=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},fo=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!h||!A||h===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==h)t=this.activeLink=new uo(h,this),h.deps?(t.prevDep=h.depsTail,h.depsTail.nextDep=t,h.depsTail=t):h.deps=h.depsTail=t,nr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=h.depsTail,t.nextDep=void 0,h.depsTail.nextDep=t,h.depsTail=t,h.deps===t&&(h.deps=i)}return h.onTrack&&h.onTrack(ve({effect:h},e)),t}trigger(e){this.version++,Fe++,this.notify(e)}notify(e){Nt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(ve({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bt()}}};function nr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)nr(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var vt=new WeakMap,U=Symbol("Object iterate"),_t=Symbol("Map keys iterate"),Se=Symbol("Array iterate");function w(e,t,i){if(A&&h){let n=vt.get(e);n||vt.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new fo),r.map=n,r.key=i),r.track({target:e,type:t,key:i})}}function k(e,t,i,n,r,o){const a=vt.get(e);if(!a){Fe++;return}const s=c=>{c&&c.trigger({target:e,type:t,key:i,newValue:n,oldValue:r,oldTarget:o})};if(Nt(),t==="clear")a.forEach(s);else{const c=_e(e),l=c&&kt(i);if(c&&i==="length"){const d=Number(n);a.forEach((f,p)=>{(p==="length"||p===Se||!Ae(p)&&p>=d)&&s(f)})}else switch((i!==void 0||a.has(void 0))&&s(a.get(i)),l&&s(a.get(Se)),t){case"add":c?l&&s(a.get("length")):(s(a.get(U)),fe(e)&&s(a.get(_t)));break;case"delete":c||(s(a.get(U)),fe(e)&&s(a.get(_t)));break;case"set":fe(e)&&s(a.get(U));break}}Bt()}function te(e){const t=b(e);return t===e?t:(w(t,"iterate",Se),Z(e)?t:t.map(Y))}function $t(e){return w(e=b(e),"iterate",Se),e}function E(e,t){return J(e)?ur(e)?xe(Y(t)):xe(t):Y(t)}var po={__proto__:null,[Symbol.iterator](){return Xe(this,Symbol.iterator,e=>E(this,e))},concat(...e){return te(this).concat(...e.map(t=>_e(t)?te(t):t))},entries(){return Xe(this,"entries",e=>(e[1]=E(this,e[1]),e))},every(e,t){return O(this,"every",e,t,void 0,arguments)},filter(e,t){return O(this,"filter",e,t,i=>i.map(n=>E(this,n)),arguments)},find(e,t){return O(this,"find",e,t,i=>E(this,i),arguments)},findIndex(e,t){return O(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return O(this,"findLast",e,t,i=>E(this,i),arguments)},findLastIndex(e,t){return O(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return O(this,"forEach",e,t,void 0,arguments)},includes(...e){return Qe(this,"includes",e)},indexOf(...e){return Qe(this,"indexOf",e)},join(e){return te(this).join(e)},lastIndexOf(...e){return Qe(this,"lastIndexOf",e)},map(e,t){return O(this,"map",e,t,void 0,arguments)},pop(){return le(this,"pop")},push(...e){return le(this,"push",e)},reduce(e,...t){return Qt(this,"reduce",e,t)},reduceRight(e,...t){return Qt(this,"reduceRight",e,t)},shift(){return le(this,"shift")},some(e,t){return O(this,"some",e,t,void 0,arguments)},splice(...e){return le(this,"splice",e)},toReversed(){return te(this).toReversed()},toSorted(e){return te(this).toSorted(e)},toSpliced(...e){return te(this).toSpliced(...e)},unshift(...e){return le(this,"unshift",e)},values(){return Xe(this,"values",e=>E(this,e))}};function Xe(e,t,i){const n=$t(e),r=n[t]();return n!==e&&!Z(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=i(o.value)),o}),r}var go=Array.prototype;function O(e,t,i,n,r,o){const a=$t(e),s=a!==e&&!Z(e),c=a[t];if(c!==go[t]){const f=c.apply(e,o);return s?Y(f):f}let l=i;a!==e&&(s?l=function(f,p){return i.call(this,E(e,f),p,e)}:i.length>2&&(l=function(f,p){return i.call(this,f,p,e)}));const d=c.call(a,l,n);return s&&r?r(d):d}function Qt(e,t,i,n){const r=$t(e),o=r!==e&&!Z(e);let a=i,s=!1;r!==e&&(o?(s=n.length===0,a=function(l,d,f){return s&&(s=!1,l=E(e,l)),i.call(this,l,E(e,d),f,e)}):i.length>3&&(a=function(l,d,f){return i.call(this,l,d,f,e)}));const c=r[t](a,...n);return s?E(e,c):c}function Qe(e,t,i){const n=b(e);w(n,"iterate",Se);const r=n[t](...i);return(r===-1||r===!1)&&To(i[0])?(i[0]=b(i[0]),n[t](...i)):r}function le(e,t,i=[]){co(),Nt();const n=b(e)[t].apply(e,i);return Bt(),lo(),n}var ho=Yn("__proto__,__v_isRef,__isVue"),or=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ae));function bo(e){Ae(e)||(e=String(e));const t=b(this);return w(t,"has",e),t.hasOwnProperty(e)}var ar=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(n?r?Ro:lr:r?Ao:cr).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=_e(e);if(!n){let s;if(o&&(s=po[t]))return s;if(t==="hasOwnProperty")return bo}const a=Reflect.get(e,t,he(e)?e:i);if((Ae(t)?or.has(t):ho(t))||(n||w(e,"get",t),r))return a;if(he(a)){const s=o&&kt(t)?a:a.value;return n&&ye(s)?yt(s):s}return ye(a)?n?yt(a):jt(a):a}},mo=class extends ar{constructor(e=!1){super(!1,e)}set(e,t,i,n){let r=e[t];const o=_e(e)&&kt(t);if(!this._isShallow){const c=J(r);if(!Z(i)&&!J(i)&&(r=b(r),i=b(i)),!o&&he(r)&&!he(i))return c?(G(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(r.value=i,!0)}const a=o?Number(t)<e.length:bt(e,t),s=Reflect.set(e,t,i,he(e)?e:n);return e===b(n)&&s&&(a?$(i,r)&&k(e,"set",t,i,r):k(e,"add",t,i)),s}deleteProperty(e,t){const i=bt(e,t),n=e[t],r=Reflect.deleteProperty(e,t);return r&&i&&k(e,"delete",t,void 0,n),r}has(e,t){const i=Reflect.has(e,t);return(!Ae(t)||!or.has(t))&&w(e,"has",t),i}ownKeys(e){return w(e,"iterate",_e(e)?"length":U),Reflect.ownKeys(e)}},vo=class extends ar{constructor(e=!1){super(!0,e)}set(e,t){return G(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return G(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},_o=new mo,yo=new vo,Ee=e=>Reflect.getPrototypeOf(e);function So(e,t,i){return function(...n){const r=this.__v_raw,o=b(r),a=fe(o),s=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=r[e](...n),d=t?xe:Y;return!t&&w(o,"iterate",c?_t:U),ve(Object.create(l),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:s?[d(f[0]),d(f[1])]:d(f),done:p}}})}}function Te(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";G(`${io(e)} operation ${i}failed: target is readonly.`,b(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function xo(e,t){const i={get(r){const o=this.__v_raw,a=b(o),s=b(r);e||($(r,s)&&w(a,"get",r),w(a,"get",s));const{has:c}=Ee(a),l=e?xe:Y;if(c.call(a,r))return l(o.get(r));if(c.call(a,s))return l(o.get(s));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!e&&w(b(r),"iterate",U),r.size},has(r){const o=this.__v_raw,a=b(o),s=b(r);return e||($(r,s)&&w(a,"has",r),w(a,"has",s)),r===s?o.has(r):o.has(r)||o.has(s)},forEach(r,o){const a=this,s=a.__v_raw,c=b(s),l=e?xe:Y;return!e&&w(c,"iterate",U),s.forEach((d,f)=>r.call(o,l(d),l(f),a))}};return ve(i,e?{add:Te("add"),set:Te("set"),delete:Te("delete"),clear:Te("clear")}:{add(r){const o=b(this),a=Ee(o),s=b(r),c=!Z(r)&&!J(r)?s:r;return a.has.call(o,c)||$(r,c)&&a.has.call(o,r)||$(s,c)&&a.has.call(o,s)||(o.add(c),k(o,"add",c,c)),this},set(r,o){!Z(o)&&!J(o)&&(o=b(o));const a=b(this),{has:s,get:c}=Ee(a);let l=s.call(a,r);l?ei(a,s,r):(r=b(r),l=s.call(a,r));const d=c.call(a,r);return a.set(r,o),l?$(o,d)&&k(a,"set",r,o,d):k(a,"add",r,o),this},delete(r){const o=b(this),{has:a,get:s}=Ee(o);let c=a.call(o,r);c?ei(o,a,r):(r=b(r),c=a.call(o,r));const l=s?s.call(o,r):void 0,d=o.delete(r);return c&&k(o,"delete",r,void 0,l),d},clear(){const r=b(this),o=r.size!==0,a=fe(r)?new Map(r):new Set(r),s=r.clear();return o&&k(r,"clear",void 0,void 0,a),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=So(r,e)}),i}function sr(e,t){const i=xo(e);return(n,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(bt(i,r)&&r in n?i:n,r,o)}var wo={get:sr(!1)},Co={get:sr(!0)};function ei(e,t,i){const n=b(i);if(n!==i&&t.call(e,n)){const r=Qi(e);G(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var cr=new WeakMap,Ao=new WeakMap,lr=new WeakMap,Ro=new WeakMap;function Eo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jt(e){return J(e)?e:dr(e,!1,_o,wo,cr)}function yt(e){return dr(e,!0,yo,Co,lr)}function dr(e,t,i,n,r){if(!ye(e))return G(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=r.get(e);if(o)return o;const a=Eo(Qi(e));if(a===0)return e;const s=new Proxy(e,a===2?n:i);return r.set(e,s),s}function ur(e){return J(e)?ur(e.__v_raw):!!(e&&e.__v_isReactive)}function J(e){return!!(e&&e.__v_isReadonly)}function Z(e){return!!(e&&e.__v_isShallow)}function To(e){return e?!!e.__v_raw:!1}function b(e){const t=e&&e.__v_raw;return t?b(t):e}var Y=e=>ye(e)?jt(e):e,xe=e=>ye(e)?yt(e):e;function he(e){return e?e.__v_isRef===!0:!1}R("nextTick",()=>Mt);R("dispatch",e=>ue.bind(ue,e));R("watch",(e,{evaluateLater:t,cleanup:i})=>(n,r)=>{let o=t(n),s=si(()=>{let c;return o(l=>c=l),c},r);i(s)});R("store",Vn);R("data",e=>hi(e));R("root",e=>je(e));R("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=V(Io(e))),e._x_refs_proxy));function Io(e){let t=[];return C(e,i=>{i._x_refs&&t.push(i._x_refs)}),t}var et={};function fr(e){return et[e]||(et[e]=0),++et[e]}function Oo(e,t){return C(e,i=>{if(i._x_ids&&i._x_ids[t])return!0})}function Lo(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=fr(t))}R("id",(e,{cleanup:t})=>(i,n=null)=>{let r=`${i}${n?`-${n}`:""}`;return Mo(e,r,t,()=>{let o=Oo(e,i),a=o?o._x_ids[i]:fr(i);return n?`${i}-${a}-${n}`:`${i}-${a}`})});Ce((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function Mo(e,t,i,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let r=n();return e._x_id[t]=r,i(()=>{delete e._x_id[t]}),r}R("el",e=>e);pr("Focus","focus","focus");pr("Persist","persist","persist");function pr(e,t,i){R(t,n=>T(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}y("modelable",(e,{expression:t},{effect:i,evaluateLater:n,cleanup:r})=>{let o=n(t),a=()=>{let d;return o(f=>d=f),d},s=n(`${t} = __placeholder`),c=d=>s(()=>{},{scope:{__placeholder:d}}),l=a();c(l),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let d=e._x_model.get,f=e._x_model.setWithModifiers,p=Gi({get(){return d()},set(g){f(g)}},{get(){return a()},set(g){c(g)}});r(p)})});y("teleport",(e,{modifiers:t,expression:i},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&T("x-teleport can only be used on a <template> tag",e);let r=ti(i),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{o.addEventListener(s,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),we(o,{},e);let a=(s,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(s,c):l.includes("append")?c.parentNode.insertBefore(s,c.nextSibling):c.appendChild(s)};_(()=>{P(()=>{a(o,r,t),I(o)})()}),e._x_teleportPutBack=()=>{let s=ti(i);_(()=>{a(e._x_teleport,s,t)})},n(()=>_(()=>{o.remove(),Q(o)}))});var Do=document.createElement("div");function ti(e){let t=P(()=>document.querySelector(e),()=>Do)();return t||T(`Cannot find x-teleport element for selector: "${e}"`),t}var gr=()=>{};gr.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};y("ignore",gr);y("effect",P((e,{expression:t},{effect:i})=>{i(x(e,t))}));function ie(e,t,i,n){let r=e,o=c=>n(c),a={},s=(c,l)=>d=>l(c,d);return i.includes("dot")&&(t=Po(t)),i.includes("camel")&&(t=Fo(t)),i.includes("capture")&&(a.capture=!0),i.includes("window")&&(r=window),i.includes("document")&&(r=document),i.includes("passive")&&(a.passive=i[i.indexOf("passive")+1]!=="false"),o=hr(i,o),i.includes("prevent")&&(o=s(o,(c,l)=>{l.preventDefault(),c(l)})),i.includes("stop")&&(o=s(o,(c,l)=>{l.stopPropagation(),c(l)})),i.includes("once")&&(o=s(o,(c,l)=>{c(l),r.removeEventListener(t,o,a)})),(i.includes("away")||i.includes("outside"))&&(r=document,o=s(o,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),i.includes("self")&&(o=s(o,(c,l)=>{l.target===e&&c(l)})),t==="submit"&&(o=s(o,(c,l)=>{l.target._x_pendingModelUpdates&&l.target._x_pendingModelUpdates.forEach(d=>d()),c(l)})),(No(t)||br(t))&&(o=s(o,(c,l)=>{Ho(l,i)||c(l)})),r.addEventListener(t,o,a),()=>{r.removeEventListener(t,o,a)}}function hr(e,t){if(e.includes("debounce")){let i=e[e.indexOf("debounce")+1]||"invalid-wait",n=ke(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=qi(t,n)}if(e.includes("throttle")){let i=e[e.indexOf("throttle")+1]||"invalid-wait",n=ke(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=zi(t,n)}return t}function Po(e){return e.replace(/-/g,".")}function Fo(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function ke(e){return!Array.isArray(e)&&!isNaN(e)}function ko(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function No(e){return["keydown","keyup"].includes(e)}function br(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Bo=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Ho(e,t){let i=t.filter((o,a)=>o==="false"&&t[a-1]==="passive"?!1:!Bo.includes(o));if(i.includes("debounce")){let o=i.indexOf("debounce");i.splice(o,ke((i[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let o=i.indexOf("throttle");i.splice(o,ke((i[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.length===0||i.length===1&&ii(e.key).includes(i[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(o=>i.includes(o));return i=i.filter(o=>!r.includes(o)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),e[`${a}Key`])).length===r.length&&(br(e.type)||ii(e.key).includes(i[0])))}function ii(e){if(!e)return[];e=ko(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(i=>{if(t[i]===e)return i}).filter(i=>i)}y("model",(e,{modifiers:t,expression:i},{effect:n,cleanup:r})=>{let o=e;t.includes("parent")&&(o=C(e,u=>u!==e));let a=x(o,i),s;typeof i=="string"?s=x(o,`${i} = __placeholder`):typeof i=="function"&&typeof i()=="string"?s=x(o,`${i()} = __placeholder`):s=()=>{};let c=()=>{let u;return a(m=>u=m),ri(u)?u.get():u},l=u=>{let m;a(v=>m=v),ri(m)?m.set(u):s(()=>{},{scope:{__placeholder:u}})};typeof i=="string"&&e.type==="radio"&&_(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let d=t.includes("change")||t.includes("lazy"),f=t.includes("blur"),p=t.includes("enter"),g=d||f||p,S;if(D)S=()=>{};else if(g){let u=[],m=v=>l(Ie(e,t,v,c()));if(d&&u.push(ie(e,"change",t,m)),f&&(u.push(ie(e,"blur",t,m)),e.form)){let v=e.form,F=()=>m({target:e});v._x_pendingModelUpdates||(v._x_pendingModelUpdates=[]),v._x_pendingModelUpdates.push(F),r(()=>{v._x_pendingModelUpdates&&v._x_pendingModelUpdates.splice(v._x_pendingModelUpdates.indexOf(F),1)})}p&&u.push(ie(e,"keydown",t,v=>{v.key==="Enter"&&m(v)})),S=()=>u.forEach(v=>v())}else{let u=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";S=ie(e,u,t,m=>{l(Ie(e,t,m,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Pe(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&l(Ie(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=S,r(()=>e._x_removeModelListeners.default()),e.form){let u=ie(e.form,"reset",[],m=>{Mt(()=>e._x_model&&e._x_model.set(Ie(e,t,{target:e},c())))});r(()=>u())}if(e._x_model={get(){return c()},set(u){l(u)},setWithModifiers:hr(t,l)},e._x_forceModelUpdate=u=>{u===void 0&&typeof i=="string"&&i.match(/\./)&&(u=""),_(()=>{Pe(e)?Array.isArray(u)?e.checked=u.some(m=>m==e.value):e.checked=!!u:Ft(e)?typeof u=="boolean"?e.checked=Oe(e.value)===u:e.checked=e.value==u:Ui(e,"value",u)})},e.tagName==="SELECT"){let u=new MutationObserver(()=>{e._x_forceModelUpdate(c())});u.observe(e,{childList:!0}),r(()=>u.disconnect())}n(()=>{let u=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(u)})});function Ie(e,t,i,n){return _(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail!==null&&i.detail!==void 0?i.detail:i.target.value;if(Pe(e))if(Array.isArray(n)){let r=null;return t.includes("number")?r=tt(i.target.value):t.includes("boolean")?r=Oe(i.target.value):r=i.target.value,i.target.checked?n.includes(r)?n:n.concat([r]):n.filter(o=>!$o(o,r))}else return i.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(r=>{let o=r.value||r.text;return tt(o)}):t.includes("boolean")?Array.from(i.target.selectedOptions).map(r=>{let o=r.value||r.text;return Oe(o)}):Array.from(i.target.selectedOptions).map(r=>r.value||r.text);{let r;return Ft(e)?i.target.checked?r=i.target.value:r=n:r=i.target.value,t.includes("number")?tt(r):t.includes("boolean")?Oe(r):t.includes("trim")?r.trim():r}}})}function tt(e){let t=e?parseFloat(e):null;return jo(t)?t:e}function $o(e,t){return e==t}function jo(e){return!Array.isArray(e)&&!isNaN(e)}function ri(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}y("cloak",e=>{if(D)return e.removeAttribute(q("cloak"));queueMicrotask(()=>_(()=>e.removeAttribute(q("cloak"))))});Hi(()=>`[${q("init")}]`);y("init",P((e,{expression:t},{evaluate:i})=>typeof t=="string"?!!t.trim()&&i(t,{},!1):i(t,{},!1)));y("text",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(o=>{_(()=>{e.textContent=o})})})});y("html",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(o=>{_(()=>{Array.from(e.children).forEach(a=>Q(a)),e.innerHTML=o??"",e._x_ignoreSelf=!0,I(e),delete e._x_ignoreSelf})})},{priority:"structural"})});It(Ri(":",Ei(q("bind:"))));var mr=(e,{value:t,modifiers:i,expression:n,original:r},{effect:o,cleanup:a})=>{if(!t){let c={};zn(c),x(e,n)(d=>{Zi(e,d,r)},{scope:c});return}if(t==="key")return Wo(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let s=x(e,n);o(()=>s(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),_(()=>Ui(e,t,c,i))})),a(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};mr.inline=(e,{value:t,modifiers:i,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};y("bind",mr);function Wo(e,t){e._x_keyExpression=t}Bi(()=>`[${q("data")}]`);var B=Symbol();y("data",(e,{expression:t},{cleanup:i})=>{if(Ko(e))return;let n=e[B];if((n==null?void 0:n.expression)===t)return;t=t===""?"{}":t;let r={};be(r,e);let o={};Jn(o,r);let a=W(e,t,{scope:o});(a===void 0||a===!0)&&(a={}),be(a,e);let s;if(n!=null&&n.reactiveData){s=n.reactiveData,Uo(s,a);let l={expression:t};e[B]=l,queueMicrotask(()=>{e[B]===l&&delete e[B]})}else s=oe(a);Et(s,i);let c=we(e,s);P(()=>{s.init&&W(e,s.init)})(),i(()=>{s.destroy&&W(e,s.destroy),c();let l={reactiveData:s};e[B]=l,queueMicrotask(()=>{e[B]===l&&delete e[B]})})});function Uo(e,t){Object.keys(t).forEach(i=>{let n=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);n.get||n.set||r!=null&&r.get||r!=null&&r.set?(r&&delete e[i],r||(e[i]=void 0),n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]):e[i]=t[i]}),Object.keys(e).filter(i=>!Object.prototype.hasOwnProperty.call(t,i)).forEach(i=>delete e[i])}Ce((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Ko(e){return D?dt?!0:e.hasAttribute("data-has-alpine-state"):!1}y("show",(e,{modifiers:t,expression:i},{effect:n})=>{let r=x(e,i);e._x_doHide||(e._x_doHide=()=>{_(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{_(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},a=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(a),c=gt(f=>f?a():o(),f=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,f,a,o):f?s():o()}),l,d=!0;n(()=>r(f=>{!d&&f===l||(t.includes("immediate")&&(f?s():o()),c(f),l=f,d=!1)}))});y("for",P((e,{expression:t},{effect:i,cleanup:n})=>{let r=zo(t),o=x(e,r.items),a=x(e,e._x_keyExpression||"index");e._x_lookup=new Map,i(()=>qo(e,r,o,a),{priority:"structural"}),n(()=>{e._x_lookup.forEach(s=>_(()=>{Q(s),s.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Vo(e){return t=>{Object.entries(t).forEach(([i,n])=>{e[i]=n})}}function qo(e,t,i,n){i(r=>{Jo(r)&&(r=Array.from({length:r},(l,d)=>d+1)),r==null&&(r=[]),r instanceof Set&&(r=Array.from(r)),r instanceof Map&&(r=Array.from(r));let o=e._x_lookup,a=new Map;e._x_lookup=a;let s=Zo(r),c=Object.entries(r).map(([l,d])=>{s||(l=parseInt(l));let f=Go(t,d,l,r),p;return n(g=>{typeof g=="object"&&T("x-for key cannot be an object, it must be a string or an integer",e),o.has(g)&&(a.set(g,o.get(g)),o.delete(g)),p=g},{scope:{index:l,...f}}),[p,f]});_(()=>{o.forEach(f=>{Q(f),f.remove()});let l=new Set,d=e;c.forEach(([f,p])=>{if(a.has(f)){let u=a.get(f);u._x_refreshXForScope(p),d.nextElementSibling!==u&&(d.nextElementSibling&&u.replaceWith(d.nextElementSibling),d.after(u)),d=u,u._x_currentIfEl&&(u.nextElementSibling!==u._x_currentIfEl&&d.after(u._x_currentIfEl),d=u._x_currentIfEl);return}e.content.children.length>1&&T("x-for templates require a single root element, additional elements will be ignored.",e);let g=document.importNode(e.content,!0).firstElementChild,S=oe(p);we(g,S,e),g._x_refreshXForScope=Vo(S),a.set(f,g),l.add(g),d.after(g),d=g}),l.forEach(f=>I(f)),d!==e?e._x_lastRenderedEl=d:delete e._x_lastRenderedEl})})}function zo(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,r=e.match(n);if(!r)return;let o={};o.items=r[2].trim();let a=r[1].replace(i,"").trim(),s=a.match(t);return s?(o.item=a.replace(t,"").trim(),o.index=s[1].trim(),s[2]&&(o.collection=s[2].trim())):o.item=a,o}function Go(e,t,i,n){let r={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,s)=>{r[a]=t[s]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=t[a]}):r[e.item]=t,e.index&&(r[e.index]=i),e.collection&&(r[e.collection]=n),r}function Jo(e){return typeof e!="object"&&!isNaN(e)}function Zo(e){return typeof e=="object"&&!Array.isArray(e)}function vr(){}vr.inline=(e,{expression:t},{cleanup:i})=>{let n=je(e);n&&(n._x_refs||(n._x_refs={}),n._x_refs[t]=e,i(()=>delete n._x_refs[t]))};y("ref",vr);y("if",P((e,{expression:t},{effect:i,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&T("x-if can only be used on a <template> tag",e);let r=x(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return we(s,{},e),_(()=>{e.after(s),I(s)}),e._x_currentIfEl=s,e._x_lastRenderedEl=s,e._x_undoIf=()=>{_(()=>{Q(s),s.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},s},a=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};i(()=>r(s=>{s?o():a()}),{priority:"structural"}),n(()=>e._x_undoIf&&e._x_undoIf())}));y("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(r=>Lo(e,r))});Ce((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});It(Ri("@",Ei(q("on:"))));y("on",P((e,{value:t,modifiers:i,expression:n},{cleanup:r})=>{let o=n?x(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let a=ie(e,t,i,s=>{o(()=>{},{scope:{$event:s},params:[s]})});r(()=>a())}));Ue("Collapse","collapse","collapse");Ue("Intersect","intersect","intersect");Ue("Focus","trap","focus");Ue("Mask","mask","mask");function Ue(e,t,i){y(t,n=>T(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}se.setEvaluator(Jr);se.setRawEvaluator(en);se.setReactivityEngine({reactive:jt,effect:(e,t={})=>{let i;return i=ao(e,{scheduler:()=>{i&&(t.scheduler?t.scheduler(i):i())}}),i},release:so,raw:b});var Yo=se,_r=Yo;/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/const Xo="Fictitious Persons & Entities Disclaimer: All narrative characters (including Zoë Wren Brooks, Jordan Fuller, and Daniel Brooks), bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including Vectron Energy Corp., OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events across RaggieSoft creative works are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function Qo(){return`
    <section class="hero" aria-labelledby="dev-hero">
      <span class="eyebrow">The Code Behind RaggieSoft's Projects • 100% Open Source (MIT Code • CC BY-SA 4.0 Creative)</span>
      <h1 id="dev-hero">raggiesoft.dev — The Open-Source Code Behind RaggieSoft's Projects</h1>
      <p class="lead">
        Every RaggieSoft software engine, compiler, desktop workstation, and web framework is <strong>100% open source under the
        MIT License</strong>, paired with <strong>CC BY-SA 4.0</strong> across our novels, music, and worldbuilding. Each language
        and engineering stack gets its own dedicated <strong><code>&lt;project&gt;.raggiesoft.dev</code></strong> portal—starting with
        <strong><a href="https://raggiescript.raggiesoft.dev"><code>raggiescript.raggiesoft.dev</code></a></strong> and
        <strong><a href="https://finsharp.raggiesoft.dev"><code>finsharp.raggiesoft.dev</code></a></strong> (both dogfooded &amp;
        compiled by <strong>RaggieSoft Help Studio v0.7.0</strong>!).
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">RaggieScript Docs (raggiescript.raggiesoft.dev) &rarr;</a>
        <a class="btn btn-outline" href="https://finsharp.raggiesoft.dev">Fin# Docs (finsharp.raggiesoft.dev) &rarr;</a>
        <a class="btn btn-outline" href="/labs">RaggieSoft Labs</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com">RaggieSoft Studio (8 Tools)</a>
        <a class="btn btn-outline" href="https://github.com/raggiesoft">GitHub (@raggiesoft)</a>
      </div>
    </section>

    <section aria-labelledby="subdomains-heading" style="margin-bottom: 2rem;">
      <span class="eyebrow">Dogfooded Standalone RaggieSoft Reference Portals • Compiled by Help Studio v0.7.0 (rshbuild.exe)</span>
      <h2 id="subdomains-heading" style="margin-top: 0.25rem;">Live <code>*.raggiesoft.dev</code> Language &amp; API Portals</h2>
      <div class="lab-grid-2x2">
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Canonical Language Reference • 17 Chapters • 275+ Indexed Calls, RaggieScript MSI, StoreScript &amp; .NET SDK</span>
            <h3><a href="https://raggiescript.raggiesoft.dev">raggiescript.raggiesoft.dev</a> — RaggieScript v1.3 (<code>.rssc</code>)</h3>
            <p>
              Complete three-column <strong>RaggieSoft Reference Portal</strong> documenting all <strong>31 built-in namespaces</strong>,
              <code>defer</code> LIFO cleanup, <code>?.</code> optional chaining, built-in <code>raggiescript.exe test</code> runner,
              <strong>RaggieScript MSI</strong> (<code>Engine = raggiescript-msi</code> + <code>RsscMsiCa.dll</code> <code>msi.session.*</code>),
              23-method zero-DLL <code>archive.*</code> suite (<code>.7z</code>/<code>LZMA2</code>, <code>.zip</code>,
              <code>.rswpak</code>, <code>.cab</code>, <code>.tar.zst</code>, <code>.iso</code>, <code>.wim</code>), Reg-Free COM
              <code>com.generateRegFreeManifest</code>, <strong>StoreScript (<code>use storescript;</code> for StoreTrainer)</strong>,
              <strong>Story Crossroads (<code>use crossroads;</code>)</strong>, and the <strong>two-way <code>.NET</code> Host SDK</strong>!
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">Open RaggieScript Docs &rarr;</a>
            <a class="btn btn-outline" href="https://raggiescript.raggiesoft.dev/storescript-and-crossroads.html">StoreScript &amp; Crossroads</a>
            <a class="btn btn-outline" href="https://raggiescript.raggiesoft.dev/api-index.html">Master A&ndash;Z API Index</a>
          </div>
        </article>

        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">From /books/aubrie Plot Device to Real MIT Language • 6 Chapters</span>
            <h3><a href="https://finsharp.raggiesoft.dev">finsharp.raggiesoft.dev</a> — Fin# (<em>Financial Sharp</em> / <code>finsc</code>)</h3>
            <p>
              Standalone language specification &amp; conservation reference for <code>Fin#</code>—tracing how a plot device
              co-developed for Zo&euml; Wren Brooks and Jordan Fuller in
              <a href="https://books.raggiesoft.com/aubrie/fall-semester-2015/the-5-45-am-problem-the-birth-of-fin-home-on-geneva-street/part-3-question-the-rules-the-birth-of-fin"><em>The Eleventh Child</em> (<code>/books/aubrie</code>)</a>
              became a real MIT-licensed linear-type <code>.NET</code> financial language enforcing Conservation of Capital
              (<code>FIN0001</code>&ndash;<code>FIN0005</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://finsharp.raggiesoft.dev">Open Fin# Docs &rarr;</a>
            <a class="btn btn-outline" href="https://finsharp.raggiesoft.dev/origin-in-aubrie.html">Origin in /books/aubrie</a>
            <a class="btn btn-outline" href="/labs/finsharp">Interactive Simulator</a>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="projects-heading" x-data="{ filter: 'all' }">
      <h2 id="projects-heading">Flagship Engineering Suites, Compilers &amp; Platforms</h2>
      <div class="btn-row" style="margin-bottom: 1.25rem;" role="group" aria-label="Filter Engineering Efforts by Discipline">
        <button type="button" class="btn" :class="filter === 'all' ? 'btn-primary' : 'btn-outline'" @click="filter = 'all'">All Efforts (8)</button>
        <button type="button" class="btn" :class="filter === 'compilers' ? 'btn-primary' : 'btn-outline'" @click="filter = 'compilers'">Compilers &amp; Labs (Fin# / RaggieScript)</button>
        <button type="button" class="btn" :class="filter === 'desktop' ? 'btn-primary' : 'btn-outline'" @click="filter = 'desktop'">RaggieSoft Studio &amp; Native Apps</button>
        <button type="button" class="btn" :class="filter === 'web' ? 'btn-primary' : 'btn-outline'" @click="filter = 'web'">Web Frameworks &amp; DevOps</button>
      </div>

      <div class="card-grid">
        <article class="card" x-show="filter === 'all' || filter === 'desktop' || filter === 'compilers'" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Flagship • Static /MT Win32 C++20 • x64 &amp; ARM64</span>
            <h3>RaggieSoft Installer Studio &amp; Studio Suite (v0.9.1 Shipping • Archive v0.5.0&ndash;v0.9.1)</h3>
            <p>
              Zero-dependency Windows packaging &amp; servicing suite: <strong>Multi-Step Unified Workload Suites</strong>
              (<code>PackageKind = suite</code>, <code>Delivery = embedded | side-by-side | web</code>, Suite Maintenance Mode &amp;
              <code>rollback_new</code> 100% Cancel LIFO undo), <strong>Host-Aware Add-On Installers</strong>
              (<code>PackageKind = addon</code> + <code>[HostApp]</code>), <code>instbuild.exe --plan-update</code>,
              <code>RsPatch.exe</code> <code>msdelta.dll</code> <code>.msp</code> &amp; <strong>RaggieScript EXE</strong>
              <code>.rswpatch</code> deltas, DRY <code>RsUpdate.exe</code>, offline ECDSA <code>.rswlic</code> licensing,
              read/write <code>msiprism.exe</code>, <code>rswsfx.exe</code>, &amp; <code>RaggieSoftHelp.exe</code>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/download">Suite Download Center (v0.9.1) &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/download/previous-versions">Previous Versions</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio">Installer Hub</a>
            <a class="btn btn-outline" href="https://github.com/raggiesoft/installer-studio">GitHub</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'compilers'" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">RaggieSoft Labs • Linear-Type .NET / Roslyn Compiler</span>
            <h3>Fin# (Financial Sharp — /labs/finsharp)</h3>
            <p>
              Born from <em>Ocean View Archives</em> (<code>/books/aubrie</code>): an experimental domain-specific financial
              programming language &amp; compiler (<code>finsc</code>) replacing mutable scalar decimals with linear
              <code>Capital&lt;TCurrency&gt;</code> resource types so unbalanced journal entries halt at compile time with
              <code>FIN0001: ConservationOfCapitalViolationException</code>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://finsharp.raggiesoft.dev">Fin# Docs Portal &rarr;</a>
            <a class="btn btn-outline" href="/labs/finsharp">Compiler Simulator</a>
            <a class="btn btn-outline" href="https://books.raggiesoft.com/aubrie">Read /books/aubrie</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'compilers' || filter === 'desktop'">
          <div>
            <span class="eyebrow">Shipped Multi-Target SDK • Static C++20, .NET &amp; ES2022</span>
            <h3>RaggieScript v1.3 (.rssc) — 31-Namespace VM, StoreScript &amp; Wizard UI</h3>
            <p>
              Gradually typed curly-brace scripting &amp; declarative UI language (<code>struct</code>, <code>enum</code>,
              <code>match</code>, <code>=&gt;</code> closures, <code>defer</code>, <code>?.</code>, <code>raggiescript.exe test</code>,
              <code>RSW701</code>&ndash;<code>RSW715</code> static diagnostics, <code>RSWBC2</code> SHA-256 bytecode, Reg-Free COM,
              <code>StoreScript</code> save-trainer sandbox, <code>Story Crossroads</code>, <code>.NET</code> <code>RaggieScript.Core</code>, &amp; zero-<code>eval()</code> <code>ES2022</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">Full Docs (raggiescript.raggiesoft.dev) &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">Playground</a>
            <a class="btn btn-outline" href="/raggiescript/llms-raggiescript.txt">llms-raggiescript.txt</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">8-Tool Suite • Community, Essentials, Developer &amp; Architect</span>
            <h3>RaggieSoft Studio Showcase, Compliance, Help &amp; Training</h3>
            <p>
              Alongside Installer Studio: <strong>Showcase Studio v0.5.1</strong> (static <code>/MT</code> C++20 1990s <code>.BMP</code>,
              <code>FluentMica</code> &amp; <code>_support\\</code> canvas installers sharing DRY <code>RaggieSoftVisualCanvas.hpp</code>),
              <strong>Accessibility Studio v1.0.1</strong> (.NET 11 + Monaco + SARIF CLI),
              <strong>Help Studio v0.7.0</strong> (static <code>/MT</code> C++20 9-view IDE, <code>use help;</code> <code>RaggieScript</code>, federated search, <code>.CHM</code> &amp; WinHelp <code>.HLP</code>/<code>.CNT</code> decompilers &amp; <code>&lt;5ms</code> <code>F1</code> IPC),
              <strong>Training Studio v0.7.0</strong> (<code>&lt;50 KB</code> proxy-proof SCORM 1.2/2004, xAPI &amp; cmi5 + <code>.pptx</code> importer), <strong>Document Studio</strong>,
              <strong>Localization Studio</strong>, and <strong>Launcher Studio</strong>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/showcase-studio">Showcase Studio</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/editions">8-Tool Editions Matrix</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">.NET 11 WPF &amp; Multiplatform SwiftUI</span>
            <h3>Offline-First Companion Apps &amp; Launcher</h3>
            <p>
              Cross-platform Windows 11 and Apple (macOS, iOS, iPadOS SwiftUI) consumer apps (<em>Launcher</em>, <em>Book Reader</em>,
              <em>The Listening Room</em>, <em>Backstage</em>, and <em>StoreTrainer</em>) engineered to run 100% offline from first boot.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://launcher.raggiesoft.com">RaggieSoft Launcher</a>
            <a class="btn btn-outline" href="https://storetrainer.raggiesoft.com">StoreTrainer 2.0</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'web'">
          <div>
            <span class="eyebrow">PHP 8.5 OOP / MVC • Zero SQL</span>
            <h3>Stardust Engine CMS</h3>
            <p>
              MIT-licensed, zero-database PHP 8.5 MVC and JSON-routed web framework powering high-speed server-rendered
              applications with strict security headers and zero relational SQL attack surface.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://github.com/raggiesoft/stardust-engine-cms">GitHub Repo</a>
            <a class="btn btn-outline" href="https://raggiesoft.com">Live Hub</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'web'">
          <div>
            <span class="eyebrow">Interactive Worldbuilding &amp; Branching DAGs</span>
            <h3>Story Crossroads &amp; Lore Graph Engines</h3>
            <p>
              Static-first interactive narrative compilers (<code>paige.php</code>), directed-acyclic branching engines
              (<code>crossroads.raggiesoft.com</code>), and dual-layer HTML5 Canvas + ARIA worldbuilders.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://crossroads.raggiesoft.com">Story Crossroads</a>
            <a class="btn btn-outline" href="https://lore.raggiesoft.com">Lore Graph</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'web'">
          <div>
            <span class="eyebrow">Bash • PHP CLI • Node.js • rclone • cf • doctl</span>
            <h3>Polyglot CI/CD &amp; Media Tooling</h3>
            <p>
              Non-interactive multi-repo release orchestration (<code>jenna-sync.sh</code>), self-healing non-root Nginx/Linux
              pull deployment (<code>sarah-deploy.sh</code>), and parallel EBU R128 FFmpeg mastering (<code>harper.sh</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://github.com/raggiesoft/raggiesoft-deployment-tools">GitHub Tooling</a>
            <a class="btn btn-outline" href="/notes">Architecture Notes</a>
          </div>
        </article>
      </div>
    </section>
  `}function ea(){return`
    <section class="hero" aria-labelledby="labs-title">
      <span class="eyebrow">RaggieSoft Labs • Compiler Design, Bytecode VMs &amp; Lore-to-Reality R&amp;D</span>
      <h1 id="labs-title">RaggieSoft Labs — Experimental Compilers &amp; Systems Research</h1>
      <p class="lead">
        At RaggieSoft, ideas regularly cross the boundary between narrative worldbuilding and working MIT-licensed software.
        <strong>RaggieSoft Labs</strong> is our open engineering incubator for domain-specific compilers, capability-gated
        bytecode virtual machines, and upcoming candidates for the <a href="https://raggiesoftstudio.com">RaggieSoft Studio</a>
        product line.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/labs/finsharp">Enter Fin# (Financial Sharp) Lab &rarr;</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">RaggieScript (.rssc) Playground &rarr;</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">v0.6.0 Win32 Lab Previews &rarr;</a>
      </div>
    </section>

    <section aria-labelledby="active-labs-heading">
      <h2 id="active-labs-heading">Active Incubator Tracks</h2>
      <div class="lab-grid-2x2">
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="status-pill">Lab Track 01 • Active Compiler Design</span>
            <h3>Fin# (Financial Sharp — <code>finsc</code>)</h3>
            <p>
              Inspired directly by Zo&euml; Wren Brooks and Jordan Fuller's dining-table breakthrough in
              <em>Question The Rules: The Birth of Fin#</em> (<code>/books/aubrie</code>): a linear-type financial programming
              language on <code>.NET</code> / Roslyn principles where money cannot be created out of thin air, mutated outside a
              balanced <code>transaction</code> block, or rounded into thin air without triggering a compile-time error
              (<code>FIN0001: ConservationOfCapitalViolationException</code>).
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/labs/finsharp">Open Fin# Spec &amp; Simulator &rarr;</a>
            <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">Cold-Start AI Spec</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 02 • Built &amp; Verified in C++20 (x64 &amp; ARM64)</span>
            <h3>RaggieScript (<code>.rssc</code>), Deferred UAC, MSI SQL &amp; <code>msiprism.exe</code></h3>
            <p>
              Static <code>/MT</code> C++20 compiler &amp; 16-namespace Win32 VM enforcing <code>RSW701</code> wizard phase
              isolation (powering zero-upfront-prompt <code>Uac.Deferred</code> commit elevation), direct relational
              <code>msi.*</code> SQL table surgery, 64-bit <code>ffi.call</code>, Windows Restart Manager, standalone read/write
              <strong>RaggieSoft MSI Prism</strong>, and official VS Code <code>.vsix</code> + multi-editor syntax highlighting.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/raggiescript">Try 6-Profile Playground &amp; Stdlib &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Spec (.md)</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 03 • Shipped in Showcase Studio v0.5.0 (x64 &amp; ARM64)</span>
            <h3>Bespoke Full-Canvas Self-Extracting Installers (<code>_support\\</code>)</h3>
            <p>
              Static <code>/MT</code> C++20 runtime (<code>ShowcaseStub.exe</code>) &amp; compiler (<code>rssbuild.exe</code>)
              marrying 1990s painted <code>.BMP</code> &amp; Windows 11 <code>FluentMica</code> canvases (rect + polygon hotspots,
              Media Foundation + <code>.vtt</code> audio) with embedded <code>_support\\</code> staging, <code>RaggieScript</code>
              <code>RSWBC2</code>, selectable/deferred UAC, and <code>.rsw-rollback.jnl</code> undo journals.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/showcase-studio">Explore Showcase Studio &rarr;</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 04 • Shipped in Installer Studio v0.7.0&ndash;v0.9.1</span>
            <h3>Multi-Step Workload Suites (<code>embedded | side-by-side | web</code>), Maintenance Mode, Add-Ons &amp; <code>RsPatch.exe</code></h3>
            <p>
              Combines <code>v0.9.1</code>'s <strong>Multi-Step Suite Wizard &amp; Maintenance Hub</strong> (<code>PackageKind = suite</code>
              with Express/Typical/Compact/Complete/Custom Setup Types, DVD-scale <code>packages\\</code> staging, live HTTPS Workload
              streaming, <code>--suite-uninstall</code>, &amp; 100% Cancel LIFO session rollback) and <strong>Host-Aware Add-On
              Installers</strong> (<code>PackageKind = addon</code> + <code>[HostApp]</code>) with <code>v0.8.0</code>'s
              <code>RsPatch.exe</code> <code>msdelta.dll</code> deltas and DRY <code>RsUpdate.exe</code>!
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/download">Suite Download Center (v0.9.1) &rarr;</a>
          </div>
        </article>
      </div>
    </section>
  `}function ta(){return`
    <section class="hero" aria-labelledby="finsharp-title">
      <span class="eyebrow">RaggieSoft Labs • Linear-Type Financial Compiler Research (v0.1.0-lab)</span>
      <h1 id="finsharp-title">Fin# (Financial Sharp) — Enforcing Conservation of Capital at Compile Time.</h1>
      <p class="lead">
        <em>&ldquo;Because rules made by monopolies can be questioned. The laws of conservation cannot.&rdquo;</em><br />
        Originating in RaggieSoft's <em>Ocean View Archives</em> novel series (<code>/books/aubrie</code>, Chapter
        <em>Question The Rules: The Birth of Fin#</em>) and now under active engineering design in <strong>RaggieSoft Labs</strong>,
        <strong><code>Fin#</code> (<code>FinSharp</code> / <code>finsc</code>)</strong> brings <strong>linear resource types</strong>
        to the <code>.NET</code> &amp; Roslyn compiler ecosystem—turning unbalanced double-entry accounting entries, binary
        floating-point rounding drift, and synthetic revenue creation from post-facto audit findings into <strong>hard compile-time
        errors</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="https://finsharp.raggiesoft.dev">Open Full Fin# Docs (finsharp.raggiesoft.dev) &rarr;</a>
        <a class="btn btn-outline" href="#finsc-simulator">Try Interactive finsc Simulator &darr;</a>
        <a class="btn btn-outline" href="https://books.raggiesoft.com/aubrie/fall-semester-2015/the-5-45-am-problem-the-birth-of-fin-home-on-geneva-street/part-3-question-the-rules-the-birth-of-fin">Read &ldquo;The Birth of Fin#&rdquo; in /books/aubrie &nearr;</a>
        <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">llms-finsharp.txt</a>
      </div>
    </section>

    <section aria-labelledby="why-finsharp-heading">
      <h2 id="why-finsharp-heading">The Core Bug in Imperative Finance Code</h2>
      <div class="lab-grid-2x2">
        <article class="card">
          <div>
            <span class="eyebrow">Standard Imperative Languages (C#, Java, C++, COBOL)</span>
            <h3>Money Treated as an Unconstrained Scalar</h3>
            <p>
              In general-purpose languages, <code>decimal</code> is just a mutable number. A developer or rogue script can write
              <code>companyRevenue += 500_000_000.00m;</code> and the compiler succeeds with <strong>0 errors and 0 warnings</strong>—even
              though half a billion dollars appeared out of nowhere with zero corresponding debit, and fractional allocation
              remainders can be silently dropped into garbage collection. Sarbanes-Oxley (<code>SOX</code> Sections 302 &amp; 404)
              only catches the corruption months later during human audits.
            </p>
          </div>
        </article>
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Fin# Linear Resource Type System (finsc)</span>
            <h3>First Law of Thermodynamics Applied to Luca Pacioli (1494)</h3>
            <p>
              Just as quantum programming languages forbid cloning or deleting an entangled qubit, <code>Fin#</code> models
              <code>Capital&lt;TCurrency&gt;</code> as a <strong>protected linear resource type</strong>. Capital cannot be
              instantiated out of thin air, overwritten, or dropped at scope exit; it can only move inside a balanced
              <code>transaction</code> block where the compiler symbolically proves <code>&Sigma; Debits == &Sigma; Credits</code>
              before emitting a single instruction of <code>.NET</code> IL!
            </p>
          </div>
        </article>
      </div>
    </section>

    <section id="finsc-simulator" class="lab-sandbox" aria-labelledby="finsc-sim-heading" x-data="{ snippet: 'violation' }">
      <span class="eyebrow">Interactive Compiler Diagnostic Simulator • finsc v0.1.0-lab</span>
      <h2 id="finsc-sim-heading" style="margin-top: 0.25rem;">Test How <code>finsc</code> Rejects Unbalanced Capital &amp; Verifies Double-Entry Ledgers</h2>
      <div class="btn-row" role="tablist" aria-label="Choose Fin# Compiler Test Case" style="margin-bottom: 1rem;">
        <button type="button" class="btn" :class="snippet === 'violation' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(snippet === 'violation')" @click="snippet = 'violation'">1. Thin-Air Revenue Mutation (FIN0001)</button>
        <button type="button" class="btn" :class="snippet === 'remainder' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(snippet === 'remainder')" @click="snippet = 'remainder'">2. Dropped Penny Remainder (FIN0005)</button>
        <button type="button" class="btn" :class="snippet === 'valid' ? 'btn-primary' : 'btn-outline'" role="tab" :aria-selected="String(snippet === 'valid')" @click="snippet = 'valid'">3. Verified Balanced Transaction (PASS)</button>
      </div>

      <div x-show="snippet === 'violation'">
        <pre aria-label="Invalid Imperative Revenue Mutation Rejected by Fin#">// File: QuarterlyClose.fin — Attempting unconstrained scalar addition on an Account
ledger CorporateBooks&lt;USD&gt; {
  account OperatingCash    : Asset&lt;USD&gt;;
  account WholesaleRevenue : Revenue&lt;USD&gt;;
}

fn BookSyntheticGain(books: ref CorporateBooks&lt;USD&gt;) {
  // Illegal in Fin#: where did 500,000,000.00 USD come from? Which account was debited?
  books.WholesaleRevenue += 500_000_000.00_USD;
}</pre>
        <div class="lab-diag-box" aria-live="polite">
          <strong>Build FAILED (Exit Code 1) — Halted Before IL Emission:</strong>
          <pre style="margin: 0.5rem 0 0;">QuarterlyClose.fin(9,3): error FIN0001: ConservationOfCapitalViolationException —
  Account 'WholesaleRevenue' (Revenue&lt;USD&gt;) cannot be mutated via scalar '+=' outside an atomic
  'transaction' block with a proving Debit counterparty of equal Capital&lt;USD&gt; magnitude.</pre>
        </div>
      </div>

      <div x-show="snippet === 'remainder'" style="display: none;">
        <pre aria-label="Dropped Split Remainder Rejected by Fin# Linear Flow Analyzer">// File: DividendSplit.fin — Splitting $100.00 USD equally across 3 accounts ($33.33 * 3 = $99.99)
transaction AllocateGrant(pool: move Capital&lt;USD&gt;) {
  // Exact 3-way floor division returns a linear tuple: (quotient[3], remainder: 0.01_USD)
  let (shares, unallocatedCents) = capital.splitEqual(move pool, parts: 3);

  debit  DeptResearch &lt;- move shares[0];
  debit  DeptTransit  &lt;- move shares[1];
  debit  DeptAquatic  &lt;- move shares[2];
  // Oops! 'unallocatedCents' (0.01_USD) goes out of scope without being posted!
}</pre>
        <div class="lab-diag-box" aria-live="polite">
          <strong>Build FAILED (Exit Code 1) — Linear Resource Leak Detected:</strong>
          <pre style="margin: 0.5rem 0 0;">DividendSplit.fin(10,1): error FIN0005: UnconsumedLinearCapitalError —
  Linear binding 'unallocatedCents' of type 'Capital&lt;USD&gt;' goes out of scope unconsumed!
  Route the exact remainder explicitly (e.g., 'debit RoundingReserve &lt;- move unallocatedCents;').</pre>
        </div>
      </div>

      <div x-show="snippet === 'valid'" style="display: none;">
        <pre aria-label="Valid Fin# Balanced Double-Entry Transaction">// File: AquaticMembership.fin — Verified balanced journal entry + Z-SOX-302 audit hash
ledger HouseholdLedger&lt;USD&gt; {
  account CheckingAccount          : Asset&lt;USD&gt;;
  account RecreationAndPhysicalTherapy : Expense&lt;USD&gt;;
}

fn RecordMonthlyKeytag(books: ref HouseholdLedger&lt;USD&gt;) {
  transaction "Christiansburg Aquatic Center Non-Resident Keytag" [audit: Z_SOX_302] {
    debit  books.RecreationAndPhysicalTherapy : 30.00_USD;
    credit books.CheckingAccount              : 30.00_USD;
  }
}</pre>
        <div class="lab-diag-box" aria-live="polite">
          <strong>Build SUCCEEDED (0 Errors, 0 Warnings — Conservation Proof Verified in 1.4 ms):</strong>
          <pre style="margin: 0.5rem 0 0;">[OK] finsc AquaticMembership.fin --target=net11.0 --verify-linear-conservation
     Proved: Sum(Debits&lt;USD&gt;) [30.00] == Sum(Credits&lt;USD&gt;) [30.00] (Delta == 0.00_USD)
     Emitted: AquaticMembership.dll + Z-SOX-302 deterministic ledger proof manifest.</pre>
        </div>
      </div>
    </section>

    <section aria-labelledby="finsharp-diagnostics-heading">
      <h2 id="finsharp-diagnostics-heading">Core Compile-Time Type Rules &amp; Diagnostic Codes</h2>
      <div class="table-wrap">
        <table>
          <caption>Fin# v0.1.0-lab Compiler Invariants &amp; Fatal Diagnostic Gates</caption>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Compiler Invariant</th>
              <th scope="col">What It Prevents at Compile Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>FIN0001</code></th>
              <td><strong>Conservation of Capital</strong> (<code>ConservationOfCapitalViolationException</code>)</td>
              <td>Blocks thin-air currency literal creation, overwrite, or scalar <code>+=</code> / <code>-=</code> on accounts outside a balanced <code>transaction</code>.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0002</code></th>
              <td><strong>Balanced Double-Entry Proof</strong> (<code>&Sigma; Debits == &Sigma; Credits</code>)</td>
              <td>Rejects any <code>transaction</code> block whose concrete or symbolic debits and credits do not balance identically per currency.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0003</code></th>
              <td><strong>Zero Binary Floating-Point</strong> (IEEE 754 <code>float</code> / <code>double</code> Banned)</td>
              <td>Eliminates <code>0.1 + 0.2 != 0.3</code> base-2 drift by enforcing 128-bit scaled fixed-point arithmetic on all monetary types.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0004</code></th>
              <td><strong>Dimension-Typed ISO 4217 Currencies</strong> (<code>Capital&lt;USD&gt;</code> vs. <code>Capital&lt;EUR&gt;</code>)</td>
              <td>Prevents accidental cross-currency addition without an explicit, timestamped FX conversion &amp; settlement bridge.</td>
            </tr>
            <tr>
              <th scope="row"><code>FIN0005</code></th>
              <td><strong>Linear Remainder Conservation</strong> (No Silent Rounding Drops)</td>
              <td>Forces division/proration operations to return <code>(shares, remainder)</code> linear tuples where every single cent must be routed.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="finsharp-arch-heading">
      <h2 id="finsharp-arch-heading">Compiler Engineering Roadmap &amp; Potential RaggieSoft Studio Integration</h2>
      <div class="lab-grid-2x2">
        <article class="card">
          <div>
            <h3>Clean C# &ldquo;Mini-Roslyn&rdquo; Frontend &rarr; .NET 11 / Roslyn Backend</h3>
            <p>
              Rather than carrying a 4-million-line upstream <code>dotnet/roslyn</code> merge burden, our primary architecture pairs
              a crisp, 100-level-commented C# immutable syntax/binding/linear-flow frontend (<code>FinSharp.Compiler</code>) with
              in-process <code>Microsoft.CodeAnalysis.CSharp</code> lowering &amp; PE emission—delivering sub-second builds, full
              NuGet interoperability, NativeAOT support, and PDB debugging!
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Candidate Studio Tool: <em>RaggieSoft Fin# / Ledger Studio</em></h3>
            <p>
              Pairing <strong>Accessibility Studio</strong>'s proven <code>.NET 11 + Monaco</code> workstation shell with a live
              <code>Fin#</code> Language Server (<code>LSP</code>), real-time T-account conservation diagrams, <code>Z-SOX-302</code>
              audit proofs, and <strong>Document Studio</strong> Tagged <code>PDF/UA-1</code> statement generation—following our
              permanent <code>Community == 100% Architect</code> rule.
            </p>
          </div>
        </article>
      </div>
    </section>
  `}function ia(){return`
    <section class="hero" aria-labelledby="repos-title">
      <span class="eyebrow">MIT-Licensed Open Source • @raggiesoft</span>
      <h1 id="repos-title">Public GitHub Repositories</h1>
      <p class="lead">
        Every hand-authored source file across RaggieSoft's public repositories includes a plain-English Top-of-File Overview
        and step-by-step 100-level inline teaching comments so engineers and students can read any module cold.
      </p>
    </section>

    <div class="table-wrap">
      <table>
        <caption>Flagship RaggieSoft Open-Source Repositories &amp; Studio Toolchains on GitHub</caption>
        <thead>
          <tr>
            <th scope="col">Repository / Suite Module</th>
            <th scope="col">Primary Stack</th>
            <th scope="col">Summary</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>raggiesoft/installer-studio</code></th>
            <td>Native Win32 C++20 (<code>/MT</code>)</td>
            <td>Visual IDE (<code>InstallerStudio.exe</code>), <code>.rsip</code>/<code>.rsis</code> compiler (<code>instbuild.exe</code>), 11-style <code>SetupWizard.exe</code>, <code>embedded | side-by-side | web</code> Workload Suites, <code>[HostApp]</code> Add-On Installers, <code>RsPatch.exe</code>, &amp; <code>msiprism.exe</code>.</td>
            <td><a href="https://github.com/raggiesoft/installer-studio">GitHub</a> &bull; <a href="https://raggiesoftstudio.com/installer-studio">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/accessibility-studio</code></th>
            <td>C# / .NET 11 WinForms + Monaco</td>
            <td>Workstation WCAG 2.2 AA &amp; Section 508 IDE, Guided Fix diffs, live contrast/reflow emulator, &amp; SARIF 2.1.0 CLI.</td>
            <td><a href="https://github.com/raggiesoft/accessibility-studio">GitHub</a> &bull; <a href="https://raggiesoftstudio.com/accessibility-studio">Portal</a></td>
          </tr>
          <tr>
            <th scope="row">RaggieSoft Training, Help, Document, Localization, Launcher &amp; Showcase Studio</th>
            <td>Win32 C++20 &amp; .NET 11</td>
            <td>Bandwidth-proof <code>&lt;50 KB</code> SCORM 1.2/2004 (<code>rstbuild</code>), legacy <code>.CHM</code>/<code>F1</code> migration, Tagged <code>PDF/UA-1</code>, multilingual <code>.vtt</code> gates, &amp; <code>_support\\</code> canvas installers.</td>
            <td><a href="https://raggiesoftstudio.com">8-Tool Suite</a> &bull; <a href="https://raggiesoftstudio.com/editions">Editions</a></td>
          </tr>
          <tr>
            <th scope="row">RaggieSoft Labs: <code>Fin#</code> &amp; <code>RaggieScript</code></th>
            <td>C# / .NET 11 &amp; Win32 C++20 VM</td>
            <td>Experimental linear-type double-entry financial compiler (<code>finsc</code>) + unified <code>RSWBC1</code> Studio scripting VM (<code>.rssc</code>).</td>
            <td><a href="/labs/finsharp">Fin# Lab</a> &bull; <a href="https://raggiesoftstudio.com/raggiescript">RaggieScript</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/stardust-engine-cms</code></th>
            <td>PHP 8.5 OOP / MVC</td>
            <td>Zero-database JSON-routed PHP 8.5 CMS core with automated OpenGraph &amp; security headers.</td>
            <td><a href="https://github.com/raggiesoft/stardust-engine-cms">GitHub</a> &bull; <a href="https://raggiesoft.com">Live Hub</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/storetrainer</code></th>
            <td>C# / .NET 11 + Classic VB6 Archive</td>
            <td>Desktop PC game &amp; companion trainer organizer with custom <code>.stfx</code> profile associations.</td>
            <td><a href="https://github.com/raggiesoft/storetrainer">GitHub</a> &bull; <a href="https://storetrainer.raggiesoft.com">Portal</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/raggiesoft-deployment-tools</code></th>
            <td>Bash, PHP 8.5 CLI &amp; PowerShell</td>
            <td>Jenna multi-repo release gate, Sarah atomic Nginx pull deployer, Paige manuscript compiler, &amp; Harper audio suite.</td>
            <td><a href="https://github.com/raggiesoft/raggiesoft-deployment-tools">GitHub</a></td>
          </tr>
          <tr>
            <th scope="row"><code>raggiesoft/raggiesoft-music</code></th>
            <td>SvelteKit 2 + Svelte 5 Runes</td>
            <td>The Listening Room streaming PWA &amp; synchronized WebVTT caption playback engine.</td>
            <td><a href="https://github.com/raggiesoft/raggiesoft-music">GitHub</a> &bull; <a href="https://music.raggiesoft.com">Live App</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `}function ra(){return`
    <section class="hero" aria-labelledby="ai-title">
      <span class="eyebrow">llms.txt • llms-full.txt • SKILL.md</span>
      <h1 id="ai-title">AI Agent Skills &amp; Machine-Readable Specifications</h1>
      <p class="lead">
        Rather than hand-maintaining documentation that drifts out of date, RaggieSoft compilers emit
        deterministic <code>llms.txt</code>, <code>llms-full.txt</code>, and <code>SKILL.md</code> files directly from
        compile-time <code>constexpr</code> schema tables—kept in 1:1 lockstep with <code>raggiesoft.dev</code>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open raggiesoft.dev/llms.txt</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/llms.txt">8-Tool Studio /llms.txt</a>
        <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">Fin# Compiler Spec</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/SKILL.md">Installer SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="skill-table-heading">
      <h2 id="skill-table-heading">Direct Endpoints for Antigravity, Cursor, Claude Code &amp; Gemini CLI</h2>
      <div class="table-wrap">
        <table>
          <caption>Published RaggieSoft AI Specifications, Language Blueprints &amp; Agent Skills</caption>
          <thead>
            <tr>
              <th scope="col">Specification / Skill</th>
              <th scope="col">Canonical URL</th>
              <th scope="col">Agent Capability Unlocked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Umbrella Engineering &amp; Labs Index (<code>llms.txt</code>)</th>
              <td><a href="/llms.txt">https://raggiesoft.dev/llms.txt</a></td>
              <td>Maps all RaggieSoft open-source repositories, 8 Studio tools, RaggieScript, and Labs in one compact token budget.</td>
            </tr>
            <tr>
              <th scope="row">RaggieSoft Studio 8-Tool Suite Index</th>
              <td><a href="https://raggiesoftstudio.com/llms.txt">https://raggiesoftstudio.com/llms.txt</a></td>
              <td>Indexes all 8 Studio tools, 4-tier <code>Community == Architect</code> licensing, and VPAT 2.5 links.</td>
            </tr>
            <tr>
              <th scope="row">Installer Studio (<code>.rsip</code> / <code>.rsis</code> / <code>SKILL.md</code>)</th>
              <td>
                <a href="https://raggiesoftstudio.com/installer-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/installer-studio/SKILL.md">SKILL.md</a> &bull;
                <a href="https://raggiesoftstudio.com/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Editions &amp; RaggieScript</a>
              </td>
              <td>Author, JSON-lint (<code>instbuild --validate --diagnostics=json</code>), and compile <code>x64</code>/<code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>.msp</code>, <code>sfx</code>, <code>[HostApp]</code> Add-On Installers, &amp; <code>embedded | side-by-side | web</code> Workload Suites.</td>
            </tr>
            <tr>
              <th scope="row">Help Studio (<code>.rshp</code> + <code>.CHM</code> / <code>.HLP</code> Rescue)</th>
              <td>
                <a href="https://raggiesoftstudio.com/help-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/help-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Decompile raw <code>.chm</code> (<code>ITSF/LZX</code>) and WinHelp <code>.hlp</code>/<code>.cnt</code> archives, scrub Word <code>MsoNormal</code> HTML, and compile C++20 <code>F1</code> viewers, SDKs, web portals, &amp; VPAT 2.5.</td>
            </tr>
            <tr>
              <th scope="row">Showcase Studio (<code>.rssp</code> + <code>_support\\</code> Canvas Installers)</th>
              <td>
                <a href="https://raggiesoftstudio.com/showcase-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/showcase-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Author, validate WCAG 2.2 AA (<code>RSS010</code>&ndash;<code>RSS095</code>), and compile zero-dependency static <code>/MT</code> C++20 1990s <code>.BMP</code>, <code>FluentMica</code>, Kiosk, &amp; Bespoke <code>_support\\</code> installers.</td>
            </tr>
            <tr>
              <th scope="row">Training Studio (<code>.rstp</code> SCORM 1.2 &amp; 2004)</th>
              <td>
                <a href="https://raggiesoftstudio.com/training-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/training-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Compile bandwidth-resilient <code>&lt;50 KB</code> WCAG 2.2 AA SCORM packages and audit legacy third-party SCORM <code>.zip</code> archives.</td>
            </tr>
            <tr>
              <th scope="row">RaggieScript v1.3 Language &amp; Multi-Target SDK (<code>.rssc</code>)</th>
              <td>
                <a href="/raggiescript/llms-raggiescript.txt">llms-raggiescript.txt</a> &bull;
                <a href="https://raggiescript.raggiesoft.dev">raggiescript.raggiesoft.dev</a>
              </td>
              <td>Author, format (<code>fmt</code>), type-check (<code>RSW701</code>&ndash;<code>RSW715</code>), unit-test (<code>raggiescript.exe test</code>), compile <code>RSWBC2</code>, author <code>StoreScript</code> &amp; <code>Story Crossroads</code>, &amp; transpile <code>ES2022</code>.</td>
            </tr>
            <tr>
              <th scope="row">Fin# (Financial Sharp) Compiler Blueprint</th>
              <td><a href="/labs/finsharp/llms-finsharp.txt">https://raggiesoft.dev/labs/finsharp/llms-finsharp.txt</a></td>
              <td>Cold-start specification for building the <code>finsc</code> linear-type double-entry financial compiler &amp; Language Server.</td>
            </tr>
            <tr>
              <th scope="row">Accessibility Studio Headless SARIF 2.1.0 CLI</th>
              <td><a href="https://raggiesoftstudio.com/accessibility-studio/docs">raggiesoftstudio.com/accessibility-studio/docs</a></td>
              <td>Integrates headless WCAG 2.2 AA &amp; Section 508 DOM/source audits into agent-driven CI/CD remediation loops.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `}function na(){return`
    <section class="hero" aria-labelledby="notes-title">
      <span class="eyebrow">Engineering Dispatches &amp; Systems Architecture</span>
      <h1 id="notes-title">Developer Notes &amp; Architecture Log</h1>
      <p class="lead">
        Deep-dive notes from engineering linear-type financial compilers, capability-gated C++20 bytecode VMs,
        monotonic Dual-Bar Suite installers, and 100% offline-ready accessible applications.
      </p>
    </section>

    <div class="card-grid">
      <article class="card">
        <div>
          <span class="eyebrow">Compiler Design • Linear Types</span>
          <h3>Enforcing Double-Entry Accounting at Compile Time with Fin#</h3>
          <p>
            Why mutable scalar <code>decimal</code> variables let accounting bugs slip past compilers, and how modeling
            <code>Capital&lt;TCurrency&gt;</code> as a non-droppable linear resource inside atomic <code>transaction</code> blocks
            proves conservation of capital before emitting <code>.NET</code> IL.
          </p>
        </div>
        <a class="btn btn-outline" href="/labs/finsharp">Open Fin# Compiler Lab</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Bytecode VMs &amp; Custom UI</span>
          <h3>RaggieScript (.rssc) &amp; Showcase _support Canvas Installers</h3>
          <p>
            How a single <code>&lt;200 KB</code> static C++20 bytecode VM unifies zero-MSI setup transactions, standalone Windows
            micro-utilities, and heavily themed <code>.BMP</code> / <code>FluentMica</code> collector installers with automatic
            rollback journaling.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">Explore RaggieScript</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Win32 UX &amp; Suite Architecture • Shipped in v0.9.1</span>
          <h3>Multi-Step Workload Suites (embedded | side-by-side | web), Maintenance Mode &amp; Cancel LIFO Rollback</h3>
          <p>
            Eliminating sawtooth progress resets, flat single-screen setup prompts, and the 2 GB Win32 PE resource ceiling with
            <code>SuiteSetupWizardApp</code> (Setup Types, Custom Checklist, Billboards, Maintenance Modify/Repair/Remove, &amp;
            <code>--suite-uninstall</code>), universal Cancel confirmation + 100% LIFO rollback, and <code>[HostApp]</code> Add-Ons.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/download">Download Studio Suite v0.9.1</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Zero-Telemetry Cryptography • Shipped in v0.8.0</span>
          <h3>Offline .rswlic Edition Licensing Without Activation Servers</h3>
          <p>
            How <code>RswLicensing.hpp</code> verifies NIST P-256 ECDSA <code>.rswlic</code> certificates in <code>&lt;0.2ms</code>
            via stock Windows <code>System32\bcrypt.dll</code> across <code>%LOCALAPPDATA%</code>, <code>%PROGRAMDATA%</code>, and
            <code>RSW_LICENSE_KEY</code> CI secrets—automatically presenting <strong>Community Edition</strong> when no license file is present.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/editions">Read .rswlic Licensing Architecture</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Win32 C++20 &amp; Windows SDK</span>
          <h3>Why Plain-Text .rsip + .rsis Beats XML &amp; Binary Installer Formats</h3>
          <p>
            Calling <code>MsiOpenDatabaseW</code> and <code>FCICreate</code> directly from static <code>/MT</code> C++20 eliminates
            seat locks while a comment-preserving AST lets GUI edits in <code>InstallerStudio.exe</code> coexist with clean
            <code>git diff</code> history and AI coding agents.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/docs">Read .rsip Specification</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Desktop Architecture</span>
          <h3>Engineering 100% Offline-First Desktop Apps from First Boot</h3>
          <p>
            How RaggieSoft's 4-tier asset resolver combines installed content packs, local caches, bundled <code>OfflineSeed</code>
            catalogs, and CDN streaming so every desktop app renders covers, TOCs, and synchronized lyrics with Wi-Fi unplugged.
          </p>
        </div>
        <a class="btn btn-outline" href="https://launcher.raggiesoft.com">Explore RaggieSoft Launcher</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Maintainability &amp; Education</span>
          <h3>100-Level Read-Along Teaching Comments + Production Minification</h3>
          <p>
            Why every GitHub repository keeps step-by-step inline explanations for newcomers while <code>sarah-deploy.sh</code>
            strips comments and whitespace automatically inside <code>/var/www/*</code> on production Linux hosts.
          </p>
        </div>
        <a class="btn btn-outline" href="https://michaelpragsdale.com">Author Engineering Dossier</a>
      </article>
    </div>
  `}const ni=[{path:"/",navLabel:"Engineering Hub",seoTitle:"raggiesoft.dev — Open-Source Compilers, Studio & Labs",seoDescription:"Official RaggieSoft engineering portal: 8-tool RaggieSoft Studio, RaggieScript (.rssc), Fin# linear-type compiler lab, Stardust CMS, and llms.txt skills.",renderBody:Qo},{path:"/labs",navLabel:"Labs",seoTitle:"RaggieSoft Labs — Fin#, RaggieScript & Compiler R&D",seoDescription:"Experimental R&D incubator at RaggieSoft: Fin# (Financial Sharp) linear-type double-entry compiler, RaggieScript bytecode VM, and _support\\ packagers.",renderBody:ea},{path:"/labs/finsharp",navLabel:"Fin# Lab",seoTitle:"Fin# (Financial Sharp) — Linear-Type Accounting Compiler",seoDescription:"Explore Fin# (FinSharp): RaggieSoft Labs linear-type .NET/Roslyn financial language catching unbalanced double-entry ledgers at compile time (FIN0001).",renderBody:ta},{path:"/repositories",navLabel:"GitHub Repos",seoTitle:"Open-Source GitHub Repositories | raggiesoft.dev",seoDescription:"Browse MIT-licensed RaggieSoft repositories on GitHub: 8-tool RaggieSoft Studio, Installer Studio (C++20), Accessibility Studio, and Fin# compiler R&D.",renderBody:ia},{path:"/ai-skills",navLabel:"llms.txt & AI Skills",seoTitle:"AI Agent Skills, llms.txt & SKILL.md | raggiesoft.dev",seoDescription:"Machine-readable llms.txt, llms-full.txt, and SKILL.md endpoints for RaggieSoft Studio, RaggieScript, Training Studio, and Fin# compiler specifications.",renderBody:ra},{path:"/notes",navLabel:"Dev Notes",seoTitle:"Systems Architecture & Developer Notes | raggiesoft.dev",seoDescription:"Engineering dispatches on Fin# linear-type compilers, RaggieScript bytecode VMs, monotonic Dual-Bar Suite progress, and Win32 C++20 MSI packaging.",renderBody:na}];function oa(e){const t=ni.find(a=>a.path===e),i=ni.map(a=>{const s=a.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${a.path}"${s}>${a.navLabel}</a></li>`}).join(""),n=t?t.renderBody():`
      <section class="hero" aria-labelledby="err-title">
        <span class="eyebrow">HTTP 404 • Route Not Found</span>
        <h1 id="err-title">Page Not Found</h1>
        <p class="lead">The requested raggiesoft.dev developer resource could not be found.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/">Return to raggiesoft.dev</a>
          <a class="btn btn-outline" href="/labs">Explore RaggieSoft Labs &amp; Fin#</a>
          <a class="btn btn-outline" href="/repositories">Browse GitHub Repositories</a>
        </div>
      </section>
    `,r=`
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">raggiesoft.dev</span>
          <span class="brand-sub">Open-Source Engineering • Compilers • Studio • Labs</span>
        </a>

        <button
          type="button"
          class="rs-mobile-header-toggle dev-mobile-toggle"
          data-rs-mobile-toggle
          data-open-label="Open developer portal and RaggieSoft network menu"
          data-close-label="Close developer portal and RaggieSoft network menu"
          aria-expanded="false"
          aria-controls="header-navigation-panel"
          aria-label="Open developer portal and RaggieSoft network menu"
        >
          <svg class="rs-icon-bars" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg class="rs-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="header-navigation-panel" class="header-nav-panel" data-rs-collapsible="true">
          <nav aria-label="Developer Portal Navigation">
            <ul class="nav-list">
              ${i}
              <li><a class="nav-link" href="https://raggiesoftstudio.com">RaggieSoft Studio</a></li>
              <li><a class="nav-link" href="https://github.com/raggiesoft">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${n}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Engineering Hub</a>
          <a href="https://raggiescript.raggiesoft.dev">raggiescript.raggiesoft.dev</a>
          <a href="https://finsharp.raggiesoft.dev">finsharp.raggiesoft.dev</a>
          <a href="/labs">RaggieSoft Labs</a>
          <a href="/labs/finsharp">Fin# (Financial Sharp) Lab</a>
          <a href="https://books.raggiesoft.com/aubrie">The Eleventh Child (/books/aubrie)</a>
          <a href="/repositories">GitHub Repositories</a>
          <a href="/ai-skills">llms.txt &amp; AI Skills</a>
          <a href="/notes">Dev Notes</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="https://raggiesoftstudio.com">RaggieSoft Studio (8 Tools)</a>
          <a href="https://raggiesoftstudio.com/editions">Studio Editions</a>
          <a href="https://raggiesoftstudio.com/raggiescript">RaggieScript Playground</a>
          <a href="https://raggiesoftstudio.com/download">Studio Download Center</a>
          <a href="https://raggiesoftstudio.com/installer-studio">Installer Studio (v0.9.1)</a>
          <a href="https://raggiesoftstudio.com/accessibility-studio">Accessibility Studio (v1.0.1)</a>
          <a href="https://raggiesoft.com">RaggieSoft Consumer Hub</a>
          <a href="https://michaelpragsdale.com">Michael P. Ragsdale Portfolio</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. All RaggieSoft code is open source under the <strong>MIT License</strong>; all creative and narrative works are licensed under <strong>CC BY-SA 4.0</strong>.
        </p>
        <p class="disclaimer-box">${Xo}</p>
      </div>
    </footer>
  `;function o(a){return a.replace(/<table\b([^>]*)>([\s\S]*?)<\/table>/gi,(s,c,l)=>{const d=[],f=l.match(/<thead\b[^>]*>([\s\S]*?)<\/thead>/i);if(f){const S=/<th\b[^>]*>([\s\S]*?)<\/th>/gi;let u;for(;(u=S.exec(f[1]))!==null;){const m=u[1].replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&bull;/g,"•").replace(/&ndash;/g,"–").replace(/&mdash;/g,"—").replace(/\s+/g," ").trim();d.push(m)}}let p=l.replace(/<thead\b([^>]*)>/gi,(S,u)=>/\brole=/i.test(u)?`<thead${u}>`:`<thead${u} role="rowgroup">`).replace(/<tbody\b([^>]*)>/gi,(S,u)=>/\brole=/i.test(u)?`<tbody${u}>`:`<tbody${u} role="rowgroup">`);p=p.replace(/<thead\b([^>]*)>([\s\S]*?)<\/thead>/gi,(S,u,m)=>{const v=m.replace(/<tr\b([^>]*)>([\s\S]*?)<\/tr>/gi,(F,N,Ke)=>{const Ve=/\brole=/i.test(N)?N:`${N} role="row"`,qe=Ke.replace(/<th\b([^>]*)>/gi,(Wt,Re)=>/\brole=/i.test(Re)?`<th${Re}>`:`<th${Re} role="columnheader">`);return`<tr${Ve}>${qe}</tr>`});return`<thead${u}>${v}</thead>`}),p=p.replace(/<tbody\b([^>]*)>([\s\S]*?)<\/tbody>/gi,(S,u,m)=>{const v=m.replace(/<tr\b([^>]*)>([\s\S]*?)<\/tr>/gi,(F,N,Ke)=>{const Ve=/\brole=/i.test(N)?N:`${N} role="row"`;let qe=0;const Wt=Ke.replace(/<(th|td)\b([^>]*)>([\s\S]*?)<\/\1>/gi,(Re,yr,ee,Ut)=>{const Sr=qe++;if(yr.toLowerCase()==="th")return`<th${/\brole=/i.test(ee)?ee:`${ee} role="rowheader"`}>${Ut}</th>`;let ze=/\brole=/i.test(ee)?ee:`${ee} role="cell"`;const Kt=d[Sr]||"";if(Kt&&!/\bdata-label=/i.test(ze)){const Vt=Kt.replace(/"/g,"&quot;");ze+=` data-label="${Vt}"`}return`<td${ze}>${Ut}</td>`});return`<tr${Ve}>${Wt}</tr>`});return`<tbody${u}>${v}</tbody>`});let g=c;return/\brole=/i.test(g)||(g+=' role="table"'),/\bclass="([^"]*)"/i.test(g)?g=g.replace(/\bclass="([^"]*)"/i,'class="$1 rs-mobile-cards"'):g+=' class="rs-mobile-cards"',`<table${g}>${p}</table>`})}return{html:o(r)}}const it=document.getElementById("app");if(it&&it.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";it.innerHTML=oa(e).html}window.Alpine=_r;_r.start();
