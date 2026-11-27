(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var Ze=!1,Ye=!1,D=[],Qe=-1,Te=!1,gt=!1;function lr(e){fr(e)}function dr(){gt=!0}function ur(){gt=!1,Gt()}function fr(e){D.includes(e)||(D.push(e),e._x_schedulerPriority!==void 0&&(Te=!0)),Gt()}function ht(e){let t=D.indexOf(e);t!==-1&&t>Qe&&D.splice(t,1)}function Gt(){if(!Ye&&!Ze){if(gt)return;Ze=!0,queueMicrotask(pr)}}function pr(){Ze=!1,Ye=!0;for(let e=0;e<D.length;e++)Te&&gr(e),D[e](),Qe=e;D.length=0,Qe=-1,Te=!1,Ye=!1}function gr(e){let t=new Map,i=D.slice(e).sort((n,r)=>hr(n,r,t));for(let n=0;n<i.length;n++)D[e+n]=i[n];Te=!1}function hr(e,t,i){return je(e)?je(t)?kt(e._x_schedulerPriority.el,i)-kt(t._x_schedulerPriority.el,i)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:je(t)?1:0}function je(e){return e._x_schedulerPriority!==void 0}function kt(e,t){if(t.has(e))return t.get(e);let i=0,n=e;for(;e;)i++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(n,i),i}var re,Z,ne,Jt,br=0,Xe=!0;function mr(e){Xe=!1,e(),Xe=!0}function vr(e){re=e.reactive,ne=e.release,Z=t=>e.effect(t,{scheduler:i=>{Xe?lr(i):i()}}),Jt=e.raw}function Ft(e){Z=e}function yr(e){let t=()=>{};return[(n,r)=>{let o=(r==null?void 0:r.priority)==="structural"?br++:void 0,a=Z(n);return o!==void 0&&a!==void 0&&(a._x_schedulerPriority={el:e,order:o}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(s=>s())}),e._x_effects.add(a),t=()=>{a!==void 0&&(e._x_effects.delete(a),ne(a))},a},()=>{t()}]}function Zt(e,t){let i=!0,n,r,o=Z(()=>{let a=e(),s=JSON.stringify(a);if(!i&&(typeof a=="object"||a!==n)){let c=typeof n=="object"?JSON.parse(r):n;queueMicrotask(()=>{t(a,c)})}n=a,r=s,i=!1});return()=>{ht(o),ne(o)}}async function _r(e){dr();try{await e(),await Promise.resolve()}finally{ur()}}var Yt=[],Qt=[],Xt=[];function Sr(e){Xt.push(e)}function bt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Qt.push(t))}function ei(e){Yt.push(e)}function ti(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function ii(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,n])=>{(t===void 0||t.includes(i))&&(n.forEach(r=>r()),delete e._x_attributeCleanups[i])})}function xr(e){var t,i;for((t=e._x_effects)==null||t.forEach(ht);(i=e._x_cleanups)!=null&&i.length;)e._x_cleanups.pop()()}var Pe=new MutationObserver(ke),mt=!1;function vt(){Pe.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),mt=!0}function ri(){wr(),Pe.disconnect(),mt=!1}var N=[];function wr(){let e=Pe.takeRecords();N.push(()=>e.length>0&&ke(e));let t=N.length;queueMicrotask(()=>{if(N.length===t)for(;N.length>0;)N.shift()()})}function Cr(){for(;N.length>0;)N.shift()();let e=Pe.takeRecords();e.length>0&&ke(e)}function m(e){if(!mt)return e();ri();try{return e()}finally{vt()}}var yt=!1,Ie=[];function Ar(){yt=!0}function Rr(){yt=!1,ke(Ie),Ie=[]}function ke(e){if(yt){Ie=Ie.concat(e);return}let t=[],i=new Set,n=new Map,r=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].removedNodes.forEach(a=>{a.nodeType===1&&a._x_marker&&i.add(a)}),e[o].addedNodes.forEach(a=>{if(a.nodeType===1){if(i.has(a)){i.delete(a);return}a._x_marker||t.push(a)}})),e[o].type==="attributes")){let a=e[o].target,s=e[o].attributeName,c=e[o].oldValue,l=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:s,value:a.getAttribute(s)})},d=()=>{r.has(a)||r.set(a,[]),r.get(a).push(s)};a.hasAttribute(s)&&c===null?l():a.hasAttribute(s)?(d(),l()):d()}r.forEach((o,a)=>{ii(a,o)}),n.forEach((o,a)=>{Yt.forEach(s=>s(a,o))});for(let o of i)t.some(a=>a.contains(o))||Qt.forEach(a=>a(o));for(let o of t)o.isConnected&&Xt.forEach(a=>a(o));t=null,i=null,n=null,r=null}function ni(e){return U($(e))}function Se(e,t,i){return e._x_dataStack=[t,...$(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function $(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?$(e.host):e.parentNode?$(e.parentNode):[]}function U(e){return new Proxy({objects:e},Er)}function oi(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:oi(Object.getPrototypeOf(e),t)}var Er={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(i=>Object.prototype.hasOwnProperty.call(i,t)||Reflect.has(i,t))},get({objects:e},t,i){return t=="toJSON"?Tr:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,i)},set({objects:e},t,i,n){let r;for(const a of e)if(r=oi(a,t),r)break;r||(r=e[e.length-1]);const o=Object.getOwnPropertyDescriptor(r,t);return o!=null&&o.set&&(o!=null&&o.get)?o.set.call(n,i)||!0:Reflect.set(r,t,i)}};function Tr(){return Reflect.ownKeys(this).reduce((t,i)=>(t[i]=Reflect.get(this,i),t),{})}function _t(e,t=()=>{}){let i=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([a,{value:s,enumerable:c}])=>{if(c===!1||s===void 0||typeof s=="object"&&s!==null&&s.__v_skip)return;let l=o===""?a:`${o}.${a}`;typeof s=="object"&&s!==null&&s._x_interceptor?r[a]=s.initialize(e,l,a,t):i(s)&&s!==r&&!(s instanceof Element)&&n(s,l)})};return n(e)}function ai(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(n,r,o,a){return e(this.initialValue,()=>Ir(n,r),s=>et(n,r,s),r,o,a)}};return t(i),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let r=i.initialize.bind(i);i.initialize=(o,a,s,c)=>{let l=n.initialize(o,a,s,c);return i.initialValue=l,r(o,a,s,c)}}else i.initialValue=n;return i}}function Ir(e,t){return t.split(".").reduce((i,n)=>i[n],e)}function et(e,t,i){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=i;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),et(e[t[0]],t.slice(1),i)}}var si={};function A(e,t){si[e]=t}function ge(e,t){let i=Lr(t);return Object.entries(si).forEach(([n,r])=>{Object.defineProperty(e,`$${n}`,{get(){return r(t,i)},enumerable:!1})}),e}function Lr(e){let[t,i]=gi(e),n={interceptor:ai,...t};return bt(e,i),n}function Or(e,t,i,...n){try{return i(...n)}catch(r){ie(r,e,t)}}function ie(...e){return ci(...e)}var ci=Mr;function Dr(e){ci=e}function Mr(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}

${i?'Expression: "'+i+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var te=!0;function li(e){let t=te;te=!1;let i=e();return te=t,i}function W(e,t,i={}){let n;return S(e,t)(r=>n=r,i),n}function S(...e){return di(...e)}var di=()=>{};function Pr(e){di=e}var ui;function kr(e){ui=e}function Fr(e,t){let i={};ge(i,e);let n=[i,...$(e)],r=typeof t=="function"?Nr(n,t):Hr(n,t,e);return Or.bind(null,e,t,r)}function Nr(e,t){return(i=()=>{},{scope:n={},params:r=[],context:o}={})=>{if(!te){he(i,t,U([n,...e]),r);return}let a=t.apply(U([n,...e]),r);he(i,a)}}var $e={};function Br(e,t){if($e[e])return $e[e];let i=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,o=(()=>{try{let a=new i(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${e}`}),a}catch(a){return ie(a,t,e),Promise.resolve()}})();return $e[e]=o,o}function Hr(e,t,i){let n=Br(t,i);return(r=()=>{},{scope:o={},params:a=[],context:s}={})=>{n.result=void 0,n.finished=!1;let c=U([o,...e]);if(typeof n=="function"){let l=n.call(s,n,c).catch(d=>ie(d,i,t));n.finished?(he(r,n.result,c,a,i),n.result=void 0):l.then(d=>{he(r,d,c,a,i)}).catch(d=>ie(d,i,t)).finally(()=>n.result=void 0)}}}function he(e,t,i,n,r){if(te&&typeof t=="function"){let o=t.apply(i,n);o instanceof Promise?o.then(a=>he(e,a,i,n)).catch(a=>ie(a,r,t)):e(o)}else typeof t=="object"&&t instanceof Promise?t.then(o=>e(o)):e(t)}function Wr(...e){return ui(...e)}function jr(e,t,i={}){let n={};ge(n,e);let r=[n,...$(e)],o=U([i.scope??{},...r]),a=i.params??[];if(t.includes("await")){let s=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new s(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(i.context,o)}else{let s=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,l=new Function(["scope"],`with (scope) { let __result = ${s}; return __result }`).call(i.context,o);return typeof l=="function"&&te?l.apply(o,a):l}}var St="x-";function V(e=""){return St+e}function $r(e){St=e}var Le={};function v(e,t){return Le[e]=t,{before(i){if(!Le[i]){console.warn(String.raw`Cannot find directive \`${i}\`. \`${e}\` will use the default order of execution`);return}const n=H.indexOf(i);H.splice(n>=0?n:H.indexOf("DEFAULT"),0,e)}}}function Ur(e){return Object.keys(Le).includes(e)}function Fe(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let o=Object.entries(e._x_virtualDirectives).map(([s,c])=>({name:s,value:c})),a=fi(o);o=o.map(s=>a.find(c=>c.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),t=t.concat(o)}let n={};return t.map(mi((o,a)=>n[o]=a)).filter(yi).map(qr(n,i)).sort(zr).map(o=>Kr(e,o))}function fi(e){return Array.from(e).map(mi()).filter(t=>!yi(t))}var tt=!1,ce=new Map,pi=Symbol();function Vr(e){tt=!0;let t=Symbol();pi=t,ce.set(t,[]);let i=()=>{for(;ce.get(t).length;)ce.get(t).shift()();ce.delete(t)},n=()=>{tt=!1,i()};e(i),n()}function gi(e){let t=[],i=s=>t.push(s),[n,r]=yr(e);return t.push(r),[{Alpine:oe,effect:n,cleanup:i,evaluateLater:S.bind(S,e),evaluate:W.bind(W,e)},()=>t.forEach(s=>s())]}function Kr(e,t){let i=()=>{},n=Le[t.type]||i,[r,o]=gi(e);ti(e,t.original,o);let a=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,r),n=n.bind(n,e,t,r),tt?ce.get(pi).push(n):n())};return a.runCleanups=o,a}var hi=(e,t)=>({name:i,value:n})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:n}),bi=e=>e;function mi(e=()=>{}){return({name:t,value:i})=>{let{name:n,value:r}=vi.reduce((o,a)=>a(o),{name:t,value:i});return n!==t&&e(n,t),{name:n,value:r}}}var vi=[];function xt(e){vi.push(e)}function yi({name:e}){return _i().test(e)}var _i=()=>new RegExp(`^${St}([^:^.]+)\\b`);function qr(e,t){return({name:i,value:n})=>{i===n&&(n="");let r=i.match(_i()),o=i.match(/:([a-zA-Z0-9\-_:]+)/),a=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[i]||i;return{type:r?r[1]:null,value:o?o[1]:null,modifiers:a.map(c=>c.replace(".","")),expression:n,original:s}}}var it="DEFAULT",H=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",it,"teleport"];function zr(e,t){let i=H.indexOf(e.type)===-1?it:e.type,n=H.indexOf(t.type)===-1?it:t.type;return H.indexOf(i)-H.indexOf(n)}function K(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(r=>K(r,t));return}let i=!1;if(t(e,()=>i=!0),i)return;let n=e.firstElementChild;for(;n;)K(n,t),n=n.nextElementSibling}var M=!1;function P(e,t=()=>{}){return(...i)=>M?t(...i):e(...i)}function Gr(e){return(...t)=>M&&e(...t)}var Si=[];function xe(e){Si.push(e)}function Jr(e,t){Si.forEach(i=>i(e,t)),M=!0,xi(()=>{T(t,(i,n)=>{n(i,()=>{})})}),M=!1}var rt=!1;function Zr(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),M=!0,rt=!0,xi(()=>{Yr(t)}),M=!1,rt=!1}function Yr(e){let t=!1;T(e,(n,r)=>{K(n,(o,a)=>{if(t&&nn(o))return a();t=!0,r(o,a)})})}function xi(e){let t=Z;Ft((i,n)=>{let r=t(i);return ne(r),()=>{}}),e(),Ft(t)}var Ne=0;function Qr(e,t){let i=e._x_deferInit;i||(i=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},i.ownsIgnore&&(e._x_ignore=!0),Ne++),i.pending++,Promise.resolve(t).catch(n=>{try{ie(n,e)}catch(r){setTimeout(()=>{throw r},0)}}).then(()=>Xr(e,i))}function Xr(e,t){t.pending--,!(t.pending>0)&&(Cr(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,Ne--,e.isConnected&&(tn(t),T(e))))}function en(e,t){if(Ne===0)return!1;let i=w(e,n=>n._x_deferInit);return i?(wi(i._x_deferInit,e,t.map(({name:n})=>n)),!0):!1}function wi(e,t,i){let n=e.queuedAttributes.get(t);(!n||n.marker!==t._x_marker)&&(n={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,n)),i.forEach(r=>n.names.add(r))}function tn(e){e.queuedAttributes.forEach((t,i)=>{if(!i.isConnected||!i._x_marker||i._x_marker!==t.marker)return;let n=w(i,o=>o._x_deferInit);if(n){wi(n._x_deferInit,i,Array.from(t.names));return}let r=Array.from(t.names).filter(o=>i.hasAttribute(o)).map(o=>({name:o,value:i.getAttribute(o)}));r.length!==0&&Fe(i,r).forEach(o=>o())})}xe((e,t)=>{Ne!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||w(e,i=>i._x_deferInit)&&(t._x_ignore=!0))});function le(e,t,i={},n={}){return e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0,...n}))}function E(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Nt=!1;function rn(){Nt&&E("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Nt=!0,document.body||E("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),le(document,"alpine:init"),le(document,"alpine:initializing"),vt(),Sr(t=>T(t,K)),bt(t=>Y(t)),ei((t,i)=>{en(t,i)||Fe(t,i).forEach(n=>n())});let e=t=>!Be(t.parentElement,!0);Array.from(document.querySelectorAll(Ri().join(","))).filter(e).forEach(t=>{T(t)}),le(document,"alpine:initialized"),setTimeout(()=>{sn()})}var wt=[],Ci=[];function Ai(){return wt.map(e=>e())}function Ri(){return wt.concat(Ci).map(e=>e())}function Ei(e){wt.push(e)}function Ti(e){Ci.push(e)}function Be(e,t=!1){return w(e,i=>{if((t?Ri():Ai()).some(r=>i.matches(r)))return!0})}function w(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return w(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return w(e.parentNode.host,t);if(e.parentElement)return w(e.parentElement,t)}}function nn(e){return Ai().some(t=>e.matches(t))}var Ii=[];function on(e){Ii.push(e)}var an=1;function T(e,t=K,i=()=>{}){w(e,n=>n._x_ignore)||Vr(()=>{t(e,(n,r)=>{n._x_marker||(i(n,r),Ii.forEach(o=>o(n,r)),Fe(n,n.attributes).forEach(o=>o()),n._x_ignore||(n._x_marker=an++),n._x_ignore&&r())})})}function Y(e,t=K){t(e,i=>{xr(i),ii(i),delete i._x_marker})}function sn(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,i,n])=>{Ur(i)||n.some(r=>{if(document.querySelector(r))return E(`found "${r}", but missing ${t} plugin`),!0})})}var nt=[],Ct=!1;function At(e=()=>{}){return queueMicrotask(()=>{Ct||setTimeout(()=>{ot()})}),new Promise(t=>{nt.push(()=>{e(),t()})})}function ot(){for(Ct=!1;nt.length;)nt.shift()()}function cn(){Ct=!0}function Rt(e,t){return Array.isArray(t)?Bt(e,t.join(" ")):typeof t=="object"&&t!==null?ln(e,t):typeof t=="function"?Rt(e,t()):Bt(e,t)}function at(e){return e.split(/\s/).filter(Boolean)}function Bt(e,t){let i=r=>at(r).filter(o=>!e.classList.contains(o)).filter(Boolean),n=r=>(e.classList.add(...r),()=>{e.classList.remove(...r)});return t=t===!0?t="":t||"",n(i(t))}function ln(e,t){let i=Object.entries(t).flatMap(([a,s])=>s?at(a):!1).filter(Boolean),n=Object.entries(t).flatMap(([a,s])=>s?!1:at(a)).filter(Boolean),r=[],o=[];return n.forEach(a=>{e.classList.contains(a)&&(e.classList.remove(a),o.push(a))}),i.forEach(a=>{e.classList.contains(a)||(e.classList.add(a),r.push(a))}),()=>{o.forEach(a=>e.classList.add(a)),r.forEach(a=>e.classList.remove(a))}}function He(e,t){return typeof t=="object"&&t!==null?dn(e,t):un(e,t)}function dn(e,t){let i={};return Object.entries(t).forEach(([n,r])=>{i[n]=e.style[n],n.startsWith("--")||(n=fn(n)),e.style.setProperty(n,r)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{He(e,i)}}function un(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}function fn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function st(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:i,expression:n},{evaluate:r})=>{typeof n=="function"&&(n=r(n)),n!==!1&&(!n||typeof n=="boolean"?gn(e,i,t):pn(e,n,t))});function pn(e,t,i){Li(e,Rt,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[i](t)}function gn(e,t,i){Li(e,He);let n=!t.includes("in")&&!t.includes("out")&&!i,r=n||t.includes("in")||["enter"].includes(i),o=n||t.includes("out")||["leave"].includes(i);t.includes("in")&&!n&&(t=t.filter((_,Q)=>Q<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((_,Q)=>Q>t.indexOf("out")));let a=!t.includes("opacity")&&!t.includes("scale"),s=a||t.includes("opacity"),c=a||t.includes("scale"),l=s?0:1,d=c?ae(t,"scale",95)/100:1,u=ae(t,"delay",0)/1e3,h=ae(t,"origin","center"),b="opacity, transform",I=ae(t,"duration",150)/1e3,f=ae(t,"duration",75)/1e3,y="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(e._x_transition.enter.during={transformOrigin:h,transitionDelay:`${u}s`,transitionProperty:b,transitionDuration:`${I}s`,transitionTimingFunction:y},e._x_transition.enter.start={opacity:l,transform:`scale(${d})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:h,transitionDelay:`${u}s`,transitionProperty:b,transitionDuration:`${f}s`,transitionTimingFunction:y},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${d})`})}function Li(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(n=()=>{},r=()=>{}){ct(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,r)},out(n=()=>{},r=()=>{}){ct(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,n){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let o=()=>r(i);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):o():e._x_transition?e._x_transition.in(i):o();return}e._x_hidePromise=e._x_transition?new Promise((a,s)=>{e._x_transition.out(()=>{},()=>a(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=Oi(e);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(e)):r(()=>{let s=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(s)]).then(([d])=>d==null?void 0:d());return delete c._x_hidePromise,delete c._x_hideChildren,l};s(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Oi(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Oi(t)}function ct(e,t,{during:i,start:n,end:r}={},o=()=>{},a=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(i).length===0&&Object.keys(n).length===0&&Object.keys(r).length===0){o(),a();return}let s,c,l;hn(e,{start(){s=t(e,n)},during(){c=t(e,i)},before:o,end(){s(),l=t(e,r)},after:a,cleanup(){c(),l()}})}function hn(e,t){let i,n,r,o=st(()=>{m(()=>{i=!0,n||t.before(),r||(t.end(),ot()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:st(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},m(()=>{t.start(),t.during()}),cn(),requestAnimationFrame(()=>{if(i)return;let a=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),m(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{i||(m(()=>{t.end()}),ot(),setTimeout(e._x_transitioning.finish,a+s),r=!0)})})}function ae(e,t,i){if(e.indexOf(t)===-1)return i;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return i;if(t==="duration"||t==="delay"){let r=n.match(/([0-9]+)ms/);if(r)return r[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}function Di(e,t,i,n=[]){switch(e._x_bindings||(e._x_bindings=re({})),e._x_bindings[t]=i,t=n.includes("camel")?wn(t):t,t){case"value":bn(e,i);break;case"style":vn(e,i);break;case"class":mn(e,i);break;case"selected":case"checked":yn(e,t,i);break;default:Et(e,t,i);break}}function bn(e,t){if(Tt(e))e.attributes.value===void 0&&(e.value=t);else if(Oe(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(i=>Cn(i,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")xn(e,t);else if(e.tagName==="OPTION")Et(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function mn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Rt(e,t)}function vn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=He(e,t)}function yn(e,t,i){Et(e,t,i),Sn(e,t,i)}function Et(e,t,i){[null,void 0,!1].includes(i)&&Rn(t)?e.removeAttribute(t):(Mi(t)&&(i=t),En(i)&&(i=JSON.stringify(i)),_n(e,t,i))}function _n(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}function Sn(e,t,i){e[t]!==i&&(e[t]=i)}function xn(e,t){const i=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=i.includes(n.value)})}function wn(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Cn(e,t){return e==t}function Ee(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var An=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Mi(e){return An.has(e)}function Rn(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function En(e){return typeof e=="object"&&e!==null}function Tn(e,t,i){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Pi(e,t,i)}function In(e,t,i,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let r=e._x_inlineBindings[t];return r.extract=n,li(()=>W(e,r.expression))}return Pi(e,t,i)}function Pi(e,t,i){let n=e.getAttribute(t);return n===null?typeof i=="function"?i():i:n===""?!0:Mi(t)?!![t,"true"].includes(n):n}function Oe(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Tt(e){return e.type==="radio"||e.localName==="ui-radio"}function ki(e,t){let i;return function(){const n=this,r=arguments,o=function(){i=null,e.apply(n,r)};clearTimeout(i),i=setTimeout(o,t)}}function Fi(e,t){let i;return function(){let n=this,r=arguments;i||(e.apply(n,r),i=!0,setTimeout(()=>i=!1,t))}}function Ni({get:e,set:t},{get:i,set:n}){let r=!0,o,a=Z(()=>{let s=e(),c=i();if(r)n(Ue(s)),r=!1;else{let l=JSON.stringify(s),d=JSON.stringify(c);l!==o?n(Ue(s)):l!==d&&t(Ue(c))}o=JSON.stringify(e()),JSON.stringify(i())});return()=>{ht(a),ne(a)}}function Ue(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function Ln(e){(Array.isArray(e)?e:[e]).forEach(i=>i(oe))}var O={},Ht=!1;function On(e,t){if(Ht||(O=re(O),Ht=!0),t===void 0)return O[e];O[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?O[e]=t.initialize(O,e,e,()=>{}):_t(O[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&O[e].init()}function Dn(){return O}var Bi={};function Mn(e,t){let i=typeof t!="function"?()=>t:t;return e instanceof Element?Hi(e,i()):(Bi[e]=i,()=>{})}function Pn(e){return Object.entries(Bi).forEach(([t,i])=>{Object.defineProperty(e,t,{get(){return(...n)=>i(...n)}})}),e}function Hi(e,t,i){let n=[];for(;n.length;)n.pop()();let r=Object.entries(t).map(([a,s])=>({name:a,value:s})),o=fi(r);return r=r.map(a=>o.find(s=>s.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),Fe(e,r,i).map(a=>{n.push(a.runCleanups),a()}),()=>{for(;n.length;)n.pop()()}}var Wi={};function kn(e,t){Wi[e]=t}function Fn(e,t){return Object.entries(Wi).forEach(([i,n])=>{Object.defineProperty(e,i,{get(){return(...r)=>n.bind(t)(...r)},enumerable:!1})}),e}var Nn={get reactive(){return re},get release(){return ne},get effect(){return Z},get raw(){return Jt},get transaction(){return _r},version:"3.17.5",flushAndStopDeferringMutations:Rr,dontAutoEvaluateFunctions:li,disableEffectScheduling:mr,startObservingMutations:vt,stopObservingMutations:ri,setReactivityEngine:vr,onAttributeRemoved:ti,onAttributesAdded:ei,closestDataStack:$,skipDuringClone:P,onlyDuringClone:Gr,addRootSelector:Ei,addInitSelector:Ti,setErrorHandler:Dr,interceptClone:xe,addScopeToNode:Se,deferMutations:Ar,mapAttributes:xt,evaluateLater:S,interceptInit:on,initInterceptors:_t,injectMagics:ge,setEvaluator:Pr,setRawEvaluator:kr,mergeProxies:U,extractProp:In,findClosest:w,onElRemoved:bt,closestRoot:Be,destroyTree:Y,interceptor:ai,transition:ct,setStyles:He,mutateDom:m,deferInit:Qr,directive:v,entangle:Ni,throttle:Fi,debounce:ki,evaluate:W,evaluateRaw:Wr,initTree:T,nextTick:At,prefixed:V,prefix:$r,plugin:Ln,magic:A,store:On,start:rn,clone:Zr,cloneNode:Jr,bound:Tn,$data:ni,watch:Zt,walk:K,data:kn,bind:Mn},oe=Nn;function Bn(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}var be=Object.assign,Hn=Object.prototype.hasOwnProperty,lt=(e,t)=>Hn.call(e,t),me=Array.isArray,de=e=>ji(e)==="[object Map]",Wn=e=>typeof e=="string",we=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",jn=Object.prototype.toString,ji=e=>jn.call(e),$i=e=>ji(e).slice(8,-1),It=e=>Wn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$n=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},Un=$n(e=>e.charAt(0).toUpperCase()+e.slice(1)),B=(e,t)=>!Object.is(e,t);function q(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var p,Ve=new WeakSet,Wt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ve.has(this)&&(Ve.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jt(this),Vi(this);const e=p,t=C;p=this,C=!0;try{return this.fn()}finally{p!==this&&q("Active effect was not restored correctly - this is likely a Vue internal bug."),Ki(this),p=e,C=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dt(e);this.deps=this.depsTail=void 0,jt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ve.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dt(this)&&this.run()}get dirty(){return dt(this)}},Ui=0,ue,fe;function Vn(e,t=!1){if(e.flags|=8,t){e.next=fe,fe=e;return}e.next=ue,ue=e}function Lt(){Ui++}function Ot(){if(--Ui>0)return;if(fe){let t=fe;for(fe=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;ue;){let t=ue;for(ue=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function Vi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ki(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),Dt(n),qn(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function dt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===De)||(e.globalVersion=De,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dt(e))))return;e.flags|=2;const t=e.dep,i=p,n=C;p=e,C=!0;try{Vi(e);const r=e.fn(e._value);(t.version===0||B(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{p=i,C=n,Ki(e),e.flags&=-3}}function Dt(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subsHead===e&&(i.subsHead=r),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let o=i.computed.deps;o;o=o.nextDep)Dt(o,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function qn(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function zn(e,t){e.effect instanceof Wt&&(e=e.effect.fn);const i=new Wt(e);t&&be(i,t);try{i.run()}catch(r){throw i.stop(),r}const n=i.run.bind(i);return n.effect=i,n}function Gn(e){e.effect.stop()}var C=!0,qi=[];function Jn(){qi.push(C),C=!1}function Zn(){const e=qi.pop();C=e===void 0?!0:e}function jt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=p;p=void 0;try{t()}finally{p=i}}}var De=0,Yn=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Qn=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!p||!C||p===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==p)t=this.activeLink=new Yn(p,this),p.deps?(t.prevDep=p.depsTail,p.depsTail.nextDep=t,p.depsTail=t):p.deps=p.depsTail=t,zi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=p.depsTail,t.nextDep=void 0,p.depsTail.nextDep=t,p.depsTail=t,p.deps===t&&(p.deps=i)}return p.onTrack&&p.onTrack(be({effect:p},e)),t}trigger(e){this.version++,De++,this.notify(e)}notify(e){Lt();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(be({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ot()}}};function zi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)zi(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var ut=new WeakMap,j=Symbol("Object iterate"),ft=Symbol("Map keys iterate"),ye=Symbol("Array iterate");function x(e,t,i){if(C&&p){let n=ut.get(e);n||ut.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new Qn),r.map=n,r.key=i),r.track({target:e,type:t,key:i})}}function k(e,t,i,n,r,o){const a=ut.get(e);if(!a){De++;return}const s=c=>{c&&c.trigger({target:e,type:t,key:i,newValue:n,oldValue:r,oldTarget:o})};if(Lt(),t==="clear")a.forEach(s);else{const c=me(e),l=c&&It(i);if(c&&i==="length"){const d=Number(n);a.forEach((u,h)=>{(h==="length"||h===ye||!we(h)&&h>=d)&&s(u)})}else switch((i!==void 0||a.has(void 0))&&s(a.get(i)),l&&s(a.get(ye)),t){case"add":c?l&&s(a.get("length")):(s(a.get(j)),de(e)&&s(a.get(ft)));break;case"delete":c||(s(a.get(j)),de(e)&&s(a.get(ft)));break;case"set":de(e)&&s(a.get(j));break}}Ot()}function X(e){const t=g(e);return t===e?t:(x(t,"iterate",ye),G(e)?t:t.map(J))}function Mt(e){return x(e=g(e),"iterate",ye),e}function R(e,t){return z(e)?er(e)?_e(J(t)):_e(t):J(t)}var Xn={__proto__:null,[Symbol.iterator](){return Ke(this,Symbol.iterator,e=>R(this,e))},concat(...e){return X(this).concat(...e.map(t=>me(t)?X(t):t))},entries(){return Ke(this,"entries",e=>(e[1]=R(this,e[1]),e))},every(e,t){return L(this,"every",e,t,void 0,arguments)},filter(e,t){return L(this,"filter",e,t,i=>i.map(n=>R(this,n)),arguments)},find(e,t){return L(this,"find",e,t,i=>R(this,i),arguments)},findIndex(e,t){return L(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return L(this,"findLast",e,t,i=>R(this,i),arguments)},findLastIndex(e,t){return L(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return L(this,"forEach",e,t,void 0,arguments)},includes(...e){return qe(this,"includes",e)},indexOf(...e){return qe(this,"indexOf",e)},join(e){return X(this).join(e)},lastIndexOf(...e){return qe(this,"lastIndexOf",e)},map(e,t){return L(this,"map",e,t,void 0,arguments)},pop(){return se(this,"pop")},push(...e){return se(this,"push",e)},reduce(e,...t){return $t(this,"reduce",e,t)},reduceRight(e,...t){return $t(this,"reduceRight",e,t)},shift(){return se(this,"shift")},some(e,t){return L(this,"some",e,t,void 0,arguments)},splice(...e){return se(this,"splice",e)},toReversed(){return X(this).toReversed()},toSorted(e){return X(this).toSorted(e)},toSpliced(...e){return X(this).toSpliced(...e)},unshift(...e){return se(this,"unshift",e)},values(){return Ke(this,"values",e=>R(this,e))}};function Ke(e,t,i){const n=Mt(e),r=n[t]();return n!==e&&!G(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=i(o.value)),o}),r}var eo=Array.prototype;function L(e,t,i,n,r,o){const a=Mt(e),s=a!==e&&!G(e),c=a[t];if(c!==eo[t]){const u=c.apply(e,o);return s?J(u):u}let l=i;a!==e&&(s?l=function(u,h){return i.call(this,R(e,u),h,e)}:i.length>2&&(l=function(u,h){return i.call(this,u,h,e)}));const d=c.call(a,l,n);return s&&r?r(d):d}function $t(e,t,i,n){const r=Mt(e),o=r!==e&&!G(e);let a=i,s=!1;r!==e&&(o?(s=n.length===0,a=function(l,d,u){return s&&(s=!1,l=R(e,l)),i.call(this,l,R(e,d),u,e)}):i.length>3&&(a=function(l,d,u){return i.call(this,l,d,u,e)}));const c=r[t](a,...n);return s?R(e,c):c}function qe(e,t,i){const n=g(e);x(n,"iterate",ye);const r=n[t](...i);return(r===-1||r===!1)&&ho(i[0])?(i[0]=g(i[0]),n[t](...i)):r}function se(e,t,i=[]){Jn(),Lt();const n=g(e)[t].apply(e,i);return Ot(),Zn(),n}var to=Bn("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(we));function io(e){we(e)||(e=String(e));const t=g(this);return x(t,"has",e),t.hasOwnProperty(e)}var Ji=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(n?r?po:Qi:r?fo:Yi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=me(e);if(!n){let s;if(o&&(s=Xn[t]))return s;if(t==="hasOwnProperty")return io}const a=Reflect.get(e,t,pe(e)?e:i);if((we(t)?Gi.has(t):to(t))||(n||x(e,"get",t),r))return a;if(pe(a)){const s=o&&It(t)?a:a.value;return n&&ve(s)?pt(s):s}return ve(a)?n?pt(a):Pt(a):a}},ro=class extends Ji{constructor(e=!1){super(!1,e)}set(e,t,i,n){let r=e[t];const o=me(e)&&It(t);if(!this._isShallow){const c=z(r);if(!G(i)&&!z(i)&&(r=g(r),i=g(i)),!o&&pe(r)&&!pe(i))return c?(q(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(r.value=i,!0)}const a=o?Number(t)<e.length:lt(e,t),s=Reflect.set(e,t,i,pe(e)?e:n);return e===g(n)&&s&&(a?B(i,r)&&k(e,"set",t,i,r):k(e,"add",t,i)),s}deleteProperty(e,t){const i=lt(e,t),n=e[t],r=Reflect.deleteProperty(e,t);return r&&i&&k(e,"delete",t,void 0,n),r}has(e,t){const i=Reflect.has(e,t);return(!we(t)||!Gi.has(t))&&x(e,"has",t),i}ownKeys(e){return x(e,"iterate",me(e)?"length":j),Reflect.ownKeys(e)}},no=class extends Ji{constructor(e=!1){super(!0,e)}set(e,t){return q(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return q(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},oo=new ro,ao=new no,Ce=e=>Reflect.getPrototypeOf(e);function so(e,t,i){return function(...n){const r=this.__v_raw,o=g(r),a=de(o),s=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=r[e](...n),d=t?_e:J;return!t&&x(o,"iterate",c?ft:j),be(Object.create(l),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:s?[d(u[0]),d(u[1])]:d(u),done:h}}})}}function Ae(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";q(`${Un(e)} operation ${i}failed: target is readonly.`,g(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function co(e,t){const i={get(r){const o=this.__v_raw,a=g(o),s=g(r);e||(B(r,s)&&x(a,"get",r),x(a,"get",s));const{has:c}=Ce(a),l=e?_e:J;if(c.call(a,r))return l(o.get(r));if(c.call(a,s))return l(o.get(s));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!e&&x(g(r),"iterate",j),r.size},has(r){const o=this.__v_raw,a=g(o),s=g(r);return e||(B(r,s)&&x(a,"has",r),x(a,"has",s)),r===s?o.has(r):o.has(r)||o.has(s)},forEach(r,o){const a=this,s=a.__v_raw,c=g(s),l=e?_e:J;return!e&&x(c,"iterate",j),s.forEach((d,u)=>r.call(o,l(d),l(u),a))}};return be(i,e?{add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear")}:{add(r){const o=g(this),a=Ce(o),s=g(r),c=!G(r)&&!z(r)?s:r;return a.has.call(o,c)||B(r,c)&&a.has.call(o,r)||B(s,c)&&a.has.call(o,s)||(o.add(c),k(o,"add",c,c)),this},set(r,o){!G(o)&&!z(o)&&(o=g(o));const a=g(this),{has:s,get:c}=Ce(a);let l=s.call(a,r);l?Ut(a,s,r):(r=g(r),l=s.call(a,r));const d=c.call(a,r);return a.set(r,o),l?B(o,d)&&k(a,"set",r,o,d):k(a,"add",r,o),this},delete(r){const o=g(this),{has:a,get:s}=Ce(o);let c=a.call(o,r);c?Ut(o,a,r):(r=g(r),c=a.call(o,r));const l=s?s.call(o,r):void 0,d=o.delete(r);return c&&k(o,"delete",r,void 0,l),d},clear(){const r=g(this),o=r.size!==0,a=de(r)?new Map(r):new Set(r),s=r.clear();return o&&k(r,"clear",void 0,void 0,a),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=so(r,e)}),i}function Zi(e,t){const i=co(e);return(n,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(lt(i,r)&&r in n?i:n,r,o)}var lo={get:Zi(!1)},uo={get:Zi(!0)};function Ut(e,t,i){const n=g(i);if(n!==i&&t.call(e,n)){const r=$i(e);q(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Yi=new WeakMap,fo=new WeakMap,Qi=new WeakMap,po=new WeakMap;function go(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pt(e){return z(e)?e:Xi(e,!1,oo,lo,Yi)}function pt(e){return Xi(e,!0,ao,uo,Qi)}function Xi(e,t,i,n,r){if(!ve(e))return q(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=r.get(e);if(o)return o;const a=go($i(e));if(a===0)return e;const s=new Proxy(e,a===2?n:i);return r.set(e,s),s}function er(e){return z(e)?er(e.__v_raw):!!(e&&e.__v_isReactive)}function z(e){return!!(e&&e.__v_isReadonly)}function G(e){return!!(e&&e.__v_isShallow)}function ho(e){return e?!!e.__v_raw:!1}function g(e){const t=e&&e.__v_raw;return t?g(t):e}var J=e=>ve(e)?Pt(e):e,_e=e=>ve(e)?pt(e):e;function pe(e){return e?e.__v_isRef===!0:!1}A("nextTick",()=>At);A("dispatch",e=>le.bind(le,e));A("watch",(e,{evaluateLater:t,cleanup:i})=>(n,r)=>{let o=t(n),s=Zt(()=>{let c;return o(l=>c=l),c},r);i(s)});A("store",Dn);A("data",e=>ni(e));A("root",e=>Be(e));A("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=U(bo(e))),e._x_refs_proxy));function bo(e){let t=[];return w(e,i=>{i._x_refs&&t.push(i._x_refs)}),t}var ze={};function tr(e){return ze[e]||(ze[e]=0),++ze[e]}function mo(e,t){return w(e,i=>{if(i._x_ids&&i._x_ids[t])return!0})}function vo(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=tr(t))}A("id",(e,{cleanup:t})=>(i,n=null)=>{let r=`${i}${n?`-${n}`:""}`;return yo(e,r,t,()=>{let o=mo(e,i),a=o?o._x_ids[i]:tr(i);return n?`${i}-${a}-${n}`:`${i}-${a}`})});xe((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function yo(e,t,i,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let r=n();return e._x_id[t]=r,i(()=>{delete e._x_id[t]}),r}A("el",e=>e);ir("Focus","focus","focus");ir("Persist","persist","persist");function ir(e,t,i){A(t,n=>E(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}v("modelable",(e,{expression:t},{effect:i,evaluateLater:n,cleanup:r})=>{let o=n(t),a=()=>{let d;return o(u=>d=u),d},s=n(`${t} = __placeholder`),c=d=>s(()=>{},{scope:{__placeholder:d}}),l=a();c(l),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let d=e._x_model.get,u=e._x_model.setWithModifiers,h=Ni({get(){return d()},set(b){u(b)}},{get(){return a()},set(b){c(b)}});r(h)})});v("teleport",(e,{modifiers:t,expression:i},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&E("x-teleport can only be used on a <template> tag",e);let r=Vt(i),o=e.content.cloneNode(!0).firstElementChild;e._x_teleport=o,o._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),o.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{o.addEventListener(s,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),Se(o,{},e);let a=(s,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(s,c):l.includes("append")?c.parentNode.insertBefore(s,c.nextSibling):c.appendChild(s)};m(()=>{P(()=>{a(o,r,t),T(o)})()}),e._x_teleportPutBack=()=>{let s=Vt(i);m(()=>{a(e._x_teleport,s,t)})},n(()=>m(()=>{o.remove(),Y(o)}))});var _o=document.createElement("div");function Vt(e){let t=P(()=>document.querySelector(e),()=>_o)();return t||E(`Cannot find x-teleport element for selector: "${e}"`),t}var rr=()=>{};rr.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",rr);v("effect",P((e,{expression:t},{effect:i})=>{i(S(e,t))}));function ee(e,t,i,n){let r=e,o=c=>n(c),a={},s=(c,l)=>d=>l(c,d);return i.includes("dot")&&(t=So(t)),i.includes("camel")&&(t=xo(t)),i.includes("capture")&&(a.capture=!0),i.includes("window")&&(r=window),i.includes("document")&&(r=document),i.includes("passive")&&(a.passive=i[i.indexOf("passive")+1]!=="false"),o=nr(i,o),i.includes("prevent")&&(o=s(o,(c,l)=>{l.preventDefault(),c(l)})),i.includes("stop")&&(o=s(o,(c,l)=>{l.stopPropagation(),c(l)})),i.includes("once")&&(o=s(o,(c,l)=>{c(l),r.removeEventListener(t,o,a)})),(i.includes("away")||i.includes("outside"))&&(r=document,o=s(o,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),i.includes("self")&&(o=s(o,(c,l)=>{l.target===e&&c(l)})),t==="submit"&&(o=s(o,(c,l)=>{l.target._x_pendingModelUpdates&&l.target._x_pendingModelUpdates.forEach(d=>d()),c(l)})),(Co(t)||or(t))&&(o=s(o,(c,l)=>{Ro(l,i)||c(l)})),r.addEventListener(t,o,a),()=>{r.removeEventListener(t,o,a)}}function nr(e,t){if(e.includes("debounce")){let i=e[e.indexOf("debounce")+1]||"invalid-wait",n=Me(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=ki(t,n)}if(e.includes("throttle")){let i=e[e.indexOf("throttle")+1]||"invalid-wait",n=Me(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=Fi(t,n)}return t}function So(e){return e.replace(/-/g,".")}function xo(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Me(e){return!Array.isArray(e)&&!isNaN(e)}function wo(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Co(e){return["keydown","keyup"].includes(e)}function or(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Ao=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Ro(e,t){let i=t.filter((o,a)=>o==="false"&&t[a-1]==="passive"?!1:!Ao.includes(o));if(i.includes("debounce")){let o=i.indexOf("debounce");i.splice(o,Me((i[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let o=i.indexOf("throttle");i.splice(o,Me((i[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.length===0||i.length===1&&Kt(e.key).includes(i[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(o=>i.includes(o));return i=i.filter(o=>!r.includes(o)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),e[`${a}Key`])).length===r.length&&(or(e.type)||Kt(e.key).includes(i[0])))}function Kt(e){if(!e)return[];e=wo(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(i=>{if(t[i]===e)return i}).filter(i=>i)}v("model",(e,{modifiers:t,expression:i},{effect:n,cleanup:r})=>{let o=e;t.includes("parent")&&(o=w(e,f=>f!==e));let a=S(o,i),s;typeof i=="string"?s=S(o,`${i} = __placeholder`):typeof i=="function"&&typeof i()=="string"?s=S(o,`${i()} = __placeholder`):s=()=>{};let c=()=>{let f;return a(y=>f=y),qt(f)?f.get():f},l=f=>{let y;a(_=>y=_),qt(y)?y.set(f):s(()=>{},{scope:{__placeholder:f}})};typeof i=="string"&&e.type==="radio"&&m(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let d=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),h=t.includes("enter"),b=d||u||h,I;if(M)I=()=>{};else if(b){let f=[],y=_=>l(Re(e,t,_,c()));if(d&&f.push(ee(e,"change",t,y)),u&&(f.push(ee(e,"blur",t,y)),e.form)){let _=e.form,Q=()=>y({target:e});_._x_pendingModelUpdates||(_._x_pendingModelUpdates=[]),_._x_pendingModelUpdates.push(Q),r(()=>{_._x_pendingModelUpdates&&_._x_pendingModelUpdates.splice(_._x_pendingModelUpdates.indexOf(Q),1)})}h&&f.push(ee(e,"keydown",t,_=>{_.key==="Enter"&&y(_)})),I=()=>f.forEach(_=>_())}else{let f=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";I=ee(e,f,t,y=>{l(Re(e,t,y,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Oe(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&l(Re(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=I,r(()=>e._x_removeModelListeners.default()),e.form){let f=ee(e.form,"reset",[],y=>{At(()=>e._x_model&&e._x_model.set(Re(e,t,{target:e},c())))});r(()=>f())}if(e._x_model={get(){return c()},set(f){l(f)},setWithModifiers:nr(t,l)},e._x_forceModelUpdate=f=>{f===void 0&&typeof i=="string"&&i.match(/\./)&&(f=""),m(()=>{Oe(e)?Array.isArray(f)?e.checked=f.some(y=>y==e.value):e.checked=!!f:Tt(e)?typeof f=="boolean"?e.checked=Ee(e.value)===f:e.checked=e.value==f:Di(e,"value",f)})},e.tagName==="SELECT"){let f=new MutationObserver(()=>{e._x_forceModelUpdate(c())});f.observe(e,{childList:!0}),r(()=>f.disconnect())}n(()=>{let f=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(f)})});function Re(e,t,i,n){return m(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail!==null&&i.detail!==void 0?i.detail:i.target.value;if(Oe(e))if(Array.isArray(n)){let r=null;return t.includes("number")?r=Ge(i.target.value):t.includes("boolean")?r=Ee(i.target.value):r=i.target.value,i.target.checked?n.includes(r)?n:n.concat([r]):n.filter(o=>!Eo(o,r))}else return i.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(r=>{let o=r.value||r.text;return Ge(o)}):t.includes("boolean")?Array.from(i.target.selectedOptions).map(r=>{let o=r.value||r.text;return Ee(o)}):Array.from(i.target.selectedOptions).map(r=>r.value||r.text);{let r;return Tt(e)?i.target.checked?r=i.target.value:r=n:r=i.target.value,t.includes("number")?Ge(r):t.includes("boolean")?Ee(r):t.includes("trim")?r.trim():r}}})}function Ge(e){let t=e?parseFloat(e):null;return To(t)?t:e}function Eo(e,t){return e==t}function To(e){return!Array.isArray(e)&&!isNaN(e)}function qt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(M)return e.removeAttribute(V("cloak"));queueMicrotask(()=>m(()=>e.removeAttribute(V("cloak"))))});Ti(()=>`[${V("init")}]`);v("init",P((e,{expression:t},{evaluate:i})=>typeof t=="string"?!!t.trim()&&i(t,{},!1):i(t,{},!1)));v("text",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(o=>{m(()=>{e.textContent=o})})})});v("html",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(o=>{m(()=>{Array.from(e.children).forEach(a=>Y(a)),e.innerHTML=o??"",e._x_ignoreSelf=!0,T(e),delete e._x_ignoreSelf})})},{priority:"structural"})});xt(hi(":",bi(V("bind:"))));var ar=(e,{value:t,modifiers:i,expression:n,original:r},{effect:o,cleanup:a})=>{if(!t){let c={};Pn(c),S(e,n)(d=>{Hi(e,d,r)},{scope:c});return}if(t==="key")return Io(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let s=S(e,n);o(()=>s(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),m(()=>Di(e,t,c,i))})),a(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};ar.inline=(e,{value:t,modifiers:i,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};v("bind",ar);function Io(e,t){e._x_keyExpression=t}Ei(()=>`[${V("data")}]`);var F=Symbol();v("data",(e,{expression:t},{cleanup:i})=>{if(Oo(e))return;let n=e[F];if((n==null?void 0:n.expression)===t)return;t=t===""?"{}":t;let r={};ge(r,e);let o={};Fn(o,r);let a=W(e,t,{scope:o});(a===void 0||a===!0)&&(a={}),ge(a,e);let s;if(n!=null&&n.reactiveData){s=n.reactiveData,Lo(s,a);let l={expression:t};e[F]=l,queueMicrotask(()=>{e[F]===l&&delete e[F]})}else s=re(a);_t(s,i);let c=Se(e,s);P(()=>{s.init&&W(e,s.init)})(),i(()=>{s.destroy&&W(e,s.destroy),c();let l={reactiveData:s};e[F]=l,queueMicrotask(()=>{e[F]===l&&delete e[F]})})});function Lo(e,t){Object.keys(t).forEach(i=>{let n=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);n.get||n.set||r!=null&&r.get||r!=null&&r.set?(r&&delete e[i],r||(e[i]=void 0),n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]):e[i]=t[i]}),Object.keys(e).filter(i=>!Object.prototype.hasOwnProperty.call(t,i)).forEach(i=>delete e[i])}xe((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Oo(e){return M?rt?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:i},{effect:n})=>{let r=S(e,i);e._x_doHide||(e._x_doHide=()=>{m(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{m(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},a=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(a),c=st(u=>u?a():o(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,a,o):u?s():o()}),l,d=!0;n(()=>r(u=>{!d&&u===l||(t.includes("immediate")&&(u?s():o()),c(u),l=u,d=!1)}))});v("for",P((e,{expression:t},{effect:i,cleanup:n})=>{let r=Po(t),o=S(e,r.items),a=S(e,e._x_keyExpression||"index");e._x_lookup=new Map,i(()=>Mo(e,r,o,a),{priority:"structural"}),n(()=>{e._x_lookup.forEach(s=>m(()=>{Y(s),s.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function Do(e){return t=>{Object.entries(t).forEach(([i,n])=>{e[i]=n})}}function Mo(e,t,i,n){i(r=>{Fo(r)&&(r=Array.from({length:r},(l,d)=>d+1)),r==null&&(r=[]),r instanceof Set&&(r=Array.from(r)),r instanceof Map&&(r=Array.from(r));let o=e._x_lookup,a=new Map;e._x_lookup=a;let s=No(r),c=Object.entries(r).map(([l,d])=>{s||(l=parseInt(l));let u=ko(t,d,l,r),h;return n(b=>{typeof b=="object"&&E("x-for key cannot be an object, it must be a string or an integer",e),o.has(b)&&(a.set(b,o.get(b)),o.delete(b)),h=b},{scope:{index:l,...u}}),[h,u]});m(()=>{o.forEach(u=>{Y(u),u.remove()});let l=new Set,d=e;c.forEach(([u,h])=>{if(a.has(u)){let f=a.get(u);f._x_refreshXForScope(h),d.nextElementSibling!==f&&(d.nextElementSibling&&f.replaceWith(d.nextElementSibling),d.after(f)),d=f,f._x_currentIfEl&&(f.nextElementSibling!==f._x_currentIfEl&&d.after(f._x_currentIfEl),d=f._x_currentIfEl);return}e.content.children.length>1&&E("x-for templates require a single root element, additional elements will be ignored.",e);let b=document.importNode(e.content,!0).firstElementChild,I=re(h);Se(b,I,e),b._x_refreshXForScope=Do(I),a.set(u,b),l.add(b),d.after(b),d=b}),l.forEach(u=>T(u)),d!==e?e._x_lastRenderedEl=d:delete e._x_lastRenderedEl})})}function Po(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,r=e.match(n);if(!r)return;let o={};o.items=r[2].trim();let a=r[1].replace(i,"").trim(),s=a.match(t);return s?(o.item=a.replace(t,"").trim(),o.index=s[1].trim(),s[2]&&(o.collection=s[2].trim())):o.item=a,o}function ko(e,t,i,n){let r={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,s)=>{r[a]=t[s]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=t[a]}):r[e.item]=t,e.index&&(r[e.index]=i),e.collection&&(r[e.collection]=n),r}function Fo(e){return typeof e!="object"&&!isNaN(e)}function No(e){return typeof e=="object"&&!Array.isArray(e)}function sr(){}sr.inline=(e,{expression:t},{cleanup:i})=>{let n=Be(e);n&&(n._x_refs||(n._x_refs={}),n._x_refs[t]=e,i(()=>delete n._x_refs[t]))};v("ref",sr);v("if",P((e,{expression:t},{effect:i,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&E("x-if can only be used on a <template> tag",e);let r=S(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return Se(s,{},e),m(()=>{e.after(s),T(s)}),e._x_currentIfEl=s,e._x_lastRenderedEl=s,e._x_undoIf=()=>{m(()=>{Y(s),s.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},s},a=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};i(()=>r(s=>{s?o():a()}),{priority:"structural"}),n(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(r=>vo(e,r))});xe((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});xt(hi("@",bi(V("on:"))));v("on",P((e,{value:t,modifiers:i,expression:n},{cleanup:r})=>{let o=n?S(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let a=ee(e,t,i,s=>{o(()=>{},{scope:{$event:s},params:[s]})});r(()=>a())}));We("Collapse","collapse","collapse");We("Intersect","intersect","intersect");We("Focus","trap","focus");We("Mask","mask","mask");function We(e,t,i){v(t,n=>E(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}oe.setEvaluator(Fr);oe.setRawEvaluator(jr);oe.setReactivityEngine({reactive:Pt,effect:(e,t={})=>{let i;return i=zn(e,{scheduler:()=>{i&&(t.scheduler?t.scheduler(i):i())}}),i},release:Gn,raw:g});var Bo=oe,cr=Bo;/*! Bundled license information:

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
*/const Ho="Fictitious Persons & Entities Disclaimer: All narrative characters (including Zoë Wren Brooks, Jordan Fuller, and Daniel Brooks), bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including Vectron Energy Corp., OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events across RaggieSoft creative works are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function Wo(){return`
    <section class="hero" aria-labelledby="dev-hero">
      <span class="eyebrow">The Code Behind RaggieSoft's Projects • 100% Open Source (MIT Code • CC BY-SA 4.0 Creative)</span>
      <h1 id="dev-hero">raggiesoft.dev — The Open-Source Code Behind RaggieSoft's Projects</h1>
      <p class="lead">
        Every RaggieSoft software engine, compiler, desktop workstation, and web framework is <strong>100% open source under the
        MIT License</strong>, paired with <strong>CC BY-SA 4.0</strong> across our novels, music, and worldbuilding. Each language
        and engineering stack gets its own dedicated <strong><code>&lt;project&gt;.raggiesoft.dev</code></strong> portal—starting with
        <strong><a href="https://raggiescript.raggiesoft.dev"><code>raggiescript.raggiesoft.dev</code></a></strong> and
        <strong><a href="https://finsharp.raggiesoft.dev"><code>finsharp.raggiesoft.dev</code></a></strong> (both dogfooded &amp;
        compiled by <strong>RaggieSoft Help Studio v0.6.0</strong>!).
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
      <span class="eyebrow">Dogfooded Standalone Learn Portals • Compiled by Help Studio v0.6.0 (rshbuild.exe)</span>
      <h2 id="subdomains-heading" style="margin-top: 0.25rem;">Live <code>*.raggiesoft.dev</code> Language &amp; API Portals</h2>
      <div class="lab-grid-2x2">
        <article class="card" style="border: 2px solid var(--primary);">
          <div>
            <span class="eyebrow">Canonical Language Reference • 16 Chapters • 175+ Indexed Calls &amp; .NET SDK</span>
            <h3><a href="https://raggiescript.raggiesoft.dev">raggiescript.raggiesoft.dev</a> — RaggieScript v1.2 (<code>.rssc</code>)</h3>
            <p>
              Complete <code>learn.microsoft.com</code>-style reference documenting every function, property, enum constant,
              23-method zero-dependency <code>archive.*</code> suite (<code>.7z</code>/<code>LZMA2</code>, <code>.zip</code>,
              <code>.rswpak</code>, <code>.cab</code>, <code>.tar.zst</code>, <code>.iso</code>, <code>.wim</code>),
              declarative Win32 Wizard UI control, <strong>two-way <code>.NET</code> Host SDK (<code>RaggieScript.Core</code>)</strong>,
              <code>RSWBC2</code> opcode, and <code>RSW700</code>&ndash;<code>RSW715</code> diagnostic—compiled by
              <code>rshbuild.exe</code> with instant <code>Ctrl+K</code> symbol search.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiescript.raggiesoft.dev">Open RaggieScript Docs &rarr;</a>
            <a class="btn btn-outline" href="https://raggiescript.raggiesoft.dev/api-index.html">Master A&ndash;Z API Index</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">Studio Playground</a>
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
            <h3>RaggieSoft Installer Studio (v0.5.0 Shipped • v0.7.0 Staged in Lab)</h3>
            <p>
              Zero-dependency Windows packaging suite (<code>InstallerStudio.exe</code>, <code>instbuild.exe --edition=...</code>,
              <code>SetupWizard.exe</code>, standalone read/write <code>msiprism.exe</code>, standalone <code>rswsfx.exe</code>, &amp;
              <code>RaggieSoftHelp.exe</code>) featuring <strong>Dual WYSIWYG Dialog Designers</strong> built on shared
              <code>RaggieSoftVisualCanvas.hpp</code>, turnkey <strong><code>RsDialog</code></strong> wizard scripting, non-clobbering
              <code>[Environment.*]</code> <code>PATH</code> updates, and <strong>monotonic Dual-Bar Suites</strong>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/installer-studio">Installer Hub</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/roadmap">v0.7&ndash;v1.0 Roadmap</a>
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
            <h3>RaggieScript v1.0 (.rssc) — Linear Stack VM, Type Binder &amp; Wizard UI</h3>
            <p>
              Gradually typed curly-brace scripting &amp; declarative UI language (<code>struct</code>, <code>enum</code>,
              <code>match</code>, <code>=&gt;</code> closures, <code>RSW701</code>&ndash;<code>RSW715</code> static diagnostics,
              <code>RSWBC2</code> SHA-256 linear stack bytecode, Per-Monitor V2 DPI Win32 Wizard UI engine, <code>fmt</code>,
              JSON-RPC 2.0 <code>lsp</code>, <code>.NET</code> <code>RaggieScript.Core</code>, and zero-<code>eval()</code> SCORM <code>ES2022</code>).
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
              Alongside Installer Studio: <strong>Showcase Studio v0.5.0</strong> (static <code>/MT</code> C++20 1990s <code>.BMP</code>,
              <code>FluentMica</code> &amp; <code>_support\\</code> canvas installers sharing DRY <code>RaggieSoftVisualCanvas.hpp</code>),
              <strong>Accessibility Studio v1.0.0</strong> (.NET 11 + Monaco + SARIF CLI),
              <strong>Help Studio v0.6.0</strong> (static <code>/MT</code> C++20 <code>.CHM</code> &amp; WinHelp <code>.HLP</code>/<code>.CNT</code> decompiler &amp; <code>&lt;5ms</code> <code>F1</code> IPC),
              <strong>Training Studio v0.5.0</strong> (<code>&lt;50 KB</code> proxy-proof SCORM 1.2/2004), <strong>Document Studio</strong>,
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
  `}function jo(){return`
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
            <span class="status-pill">Lab Track 04 • Staged in Installer Studio v0.6.0 &amp; v0.7.0</span>
            <h3>Shared <code>RaggieSoftVisualCanvas</code> Designers, Turnkey <code>RsDialog</code> &amp; Dual-Bar Suites</h3>
            <p>
              Unifies 2D WYSIWYG stage math, 8-grip resize handles, smart snap guides, keyboard-only arrow nudging, and one-click
              <code>.rssc</code> export in <code>studio-shared/include/RaggieSoftVisualCanvas.hpp</code> across Studio IDEs—paired
              with turnkey <code>RsWelcome</code>..<code>RsFinish</code> functions, non-clobbering <code>[Environment.*]</code>
              <code>PATH</code> rules, and monotonic Dual-Bar Suite progress!
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">View Real Win32 Captures &rarr;</a>
          </div>
        </article>
      </div>
    </section>
  `}function $o(){return`
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
  `}function Uo(){return`
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
            <td>Visual IDE (<code>InstallerStudio.exe</code>), <code>.rsip</code>/<code>.rsis</code> compiler (<code>instbuild.exe</code>), 10-style <code>SetupWizard.exe</code>, Monotonic Dual-Bar Suites, <code>sfx</code>, &amp; <code>msiprism.exe</code>.</td>
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
  `}function Vo(){return`
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
              <td>Author, JSON-lint (<code>instbuild --validate --diagnostics=json</code>), and compile <code>x64</code>/<code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>.msp</code>, <code>sfx</code>, &amp; Dual-Bar Suites.</td>
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
              <th scope="row">RaggieScript v1.0 Language &amp; Multi-Target SDK (<code>.rssc</code>)</th>
              <td>
                <a href="/raggiescript/llms-raggiescript.txt">llms-raggiescript.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/raggiescript">Playground</a>
              </td>
              <td>Author, format (<code>fmt</code>), type-check (<code>RSW701</code>&ndash;<code>RSW715</code>), compile to <code>RSWBC2</code> stack bytecode, render declarative Win32 Wizard UIs, &amp; transpile SCORM <code>ES2022</code>.</td>
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
  `}function Ko(){return`
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
          <span class="eyebrow">Win32 UX &amp; Taskbar Guidelines</span>
          <h3>Why Suite Installers Must Never Reset Progress Bars Per Component</h3>
          <p>
            Replacing sawtooth <code>0%&rarr;100%&rarr;0%</code> suite progress resets with byte-weighted, high-water-mark clamped
            <strong>Overall Suite Progress</strong> (bound 1:1 to <code>ITaskbarList3</code>) above a live intra-package
            <strong>Current Component</strong> bar.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">See Dual-Bar Suite UI</a>
      </article>

      <article class="card">
        <div>
          <span class="eyebrow">Zero-Telemetry Cryptography • v1.0 GA Roadmap</span>
          <h3>Offline .rswlic Edition Paygating Without Activation Servers</h3>
          <p>
            How <code>v1.0.0 GA</code> transitions Technical Preview's open <code>Editions &amp; Help</code> QA switcher into
            <code>bcrypt.dll</code> asymmetric <code>.rswlic</code> license verification, <code>RSW_LICENSE_KEY</code> CI runner claims,
            Community attestation, and lower-tier QA simulation—100% air-gapped with zero phone-home calls.
          </p>
        </div>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/roadmap">Read v1.0 GA Licensing Spec</a>
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
  `}const zt=[{path:"/",navLabel:"Engineering Hub",seoTitle:"raggiesoft.dev — Open-Source Compilers, Studio & Labs",seoDescription:"Official RaggieSoft engineering portal: 8-tool RaggieSoft Studio, RaggieScript (.rssc), Fin# linear-type compiler lab, Stardust CMS, and llms.txt skills.",renderBody:Wo},{path:"/labs",navLabel:"Labs",seoTitle:"RaggieSoft Labs — Fin#, RaggieScript & Compiler R&D",seoDescription:"Experimental R&D incubator at RaggieSoft: Fin# (Financial Sharp) linear-type double-entry compiler, RaggieScript bytecode VM, and _support\\ packagers.",renderBody:jo},{path:"/labs/finsharp",navLabel:"Fin# Lab",seoTitle:"Fin# (Financial Sharp) — Linear-Type Accounting Compiler",seoDescription:"Explore Fin# (FinSharp): RaggieSoft Labs linear-type .NET/Roslyn financial language catching unbalanced double-entry ledgers at compile time (FIN0001).",renderBody:$o},{path:"/repositories",navLabel:"GitHub Repos",seoTitle:"Open-Source GitHub Repositories | raggiesoft.dev",seoDescription:"Browse MIT-licensed RaggieSoft repositories on GitHub: 8-tool RaggieSoft Studio, Installer Studio (C++20), Accessibility Studio, and Fin# compiler R&D.",renderBody:Uo},{path:"/ai-skills",navLabel:"llms.txt & AI Skills",seoTitle:"AI Agent Skills, llms.txt & SKILL.md | raggiesoft.dev",seoDescription:"Machine-readable llms.txt, llms-full.txt, and SKILL.md endpoints for RaggieSoft Studio, RaggieScript, Training Studio, and Fin# compiler specifications.",renderBody:Vo},{path:"/notes",navLabel:"Dev Notes",seoTitle:"Systems Architecture & Developer Notes | raggiesoft.dev",seoDescription:"Engineering dispatches on Fin# linear-type compilers, RaggieScript bytecode VMs, monotonic Dual-Bar Suite progress, and Win32 C++20 MSI packaging.",renderBody:Ko}];function qo(e){const t=zt.find(o=>o.path===e),i=zt.map(o=>{const a=o.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${o.path}"${a}>${o.navLabel}</a></li>`}).join(""),n=t?t.renderBody():`
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
    `;return{html:`
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
          <a href="https://raggiesoftstudio.com/installer-studio">Installer Studio (v0.5.0)</a>
          <a href="https://raggiesoftstudio.com/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          <a href="https://raggiesoft.com">RaggieSoft Consumer Hub</a>
          <a href="https://michaelpragsdale.com">Michael P. Ragsdale Portfolio</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. All RaggieSoft code is open source under the <strong>MIT License</strong>; all creative and narrative works are licensed under <strong>CC BY-SA 4.0</strong>.
        </p>
        <p class="disclaimer-box">${Ho}</p>
      </div>
    </footer>
  `}}const Je=document.getElementById("app");if(Je&&Je.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Je.innerHTML=qo(e).html}window.Alpine=cr;cr.start();
