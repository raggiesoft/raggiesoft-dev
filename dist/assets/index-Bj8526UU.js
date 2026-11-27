(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();var Ze=!1,Xe=!1,M=[],Qe=-1,Te=!1,ht=!1;function lr(e){fr(e)}function dr(){ht=!0}function ur(){ht=!1,Gt()}function fr(e){M.includes(e)||(M.push(e),e._x_schedulerPriority!==void 0&&(Te=!0)),Gt()}function gt(e){let t=M.indexOf(e);t!==-1&&t>Qe&&M.splice(t,1)}function Gt(){if(!Xe&&!Ze){if(ht)return;Ze=!0,queueMicrotask(pr)}}function pr(){Ze=!1,Xe=!0;for(let e=0;e<M.length;e++)Te&&hr(e),M[e](),Qe=e;M.length=0,Qe=-1,Te=!1,Xe=!1}function hr(e){let t=new Map,i=M.slice(e).sort((n,r)=>gr(n,r,t));for(let n=0;n<i.length;n++)M[e+n]=i[n];Te=!1}function gr(e,t,i){return $e(e)?$e(t)?Ft(e._x_schedulerPriority.el,i)-Ft(t._x_schedulerPriority.el,i)||e._x_schedulerPriority.order-t._x_schedulerPriority.order:-1:$e(t)?1:0}function $e(e){return e._x_schedulerPriority!==void 0}function Ft(e,t){if(t.has(e))return t.get(e);let i=0,n=e;for(;e;)i++,e._x_teleportBack?e=e._x_teleportBack:typeof ShadowRoot=="function"&&e.parentNode instanceof ShadowRoot?e=e.parentNode.host:e=e.parentElement;return t.set(n,i),i}var re,Z,ne,Jt,br=0,Ye=!0;function mr(e){Ye=!1,e(),Ye=!0}function vr(e){re=e.reactive,ne=e.release,Z=t=>e.effect(t,{scheduler:i=>{Ye?lr(i):i()}}),Jt=e.raw}function kt(e){Z=e}function _r(e){let t=()=>{};return[(n,r)=>{let a=(r==null?void 0:r.priority)==="structural"?br++:void 0,o=Z(n);return a!==void 0&&o!==void 0&&(o._x_schedulerPriority={el:e,order:a}),e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(s=>s())}),e._x_effects.add(o),t=()=>{o!==void 0&&(e._x_effects.delete(o),ne(o))},o},()=>{t()}]}function Zt(e,t){let i=!0,n,r,a=Z(()=>{let o=e(),s=JSON.stringify(o);if(!i&&(typeof o=="object"||o!==n)){let c=typeof n=="object"?JSON.parse(r):n;queueMicrotask(()=>{t(o,c)})}n=o,r=s,i=!1});return()=>{gt(a),ne(a)}}async function yr(e){dr();try{await e(),await Promise.resolve()}finally{ur()}}var Xt=[],Qt=[],Yt=[];function Sr(e){Yt.push(e)}function bt(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Qt.push(t))}function ei(e){Xt.push(e)}function ti(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function ii(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,n])=>{(t===void 0||t.includes(i))&&(n.forEach(r=>r()),delete e._x_attributeCleanups[i])})}function xr(e){var t,i;for((t=e._x_effects)==null||t.forEach(gt);(i=e._x_cleanups)!=null&&i.length;)e._x_cleanups.pop()()}var Pe=new MutationObserver(Fe),mt=!1;function vt(){Pe.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),mt=!0}function ri(){wr(),Pe.disconnect(),mt=!1}var N=[];function wr(){let e=Pe.takeRecords();N.push(()=>e.length>0&&Fe(e));let t=N.length;queueMicrotask(()=>{if(N.length===t)for(;N.length>0;)N.shift()()})}function Cr(){for(;N.length>0;)N.shift()();let e=Pe.takeRecords();e.length>0&&Fe(e)}function m(e){if(!mt)return e();ri();try{return e()}finally{vt()}}var _t=!1,Oe=[];function Ar(){_t=!0}function Er(){_t=!1,Fe(Oe),Oe=[]}function Fe(e){if(_t){Oe=Oe.concat(e);return}let t=[],i=new Set,n=new Map,r=new Map;for(let a=0;a<e.length;a++)if(!e[a].target._x_ignoreMutationObserver&&(e[a].type==="childList"&&(e[a].removedNodes.forEach(o=>{o.nodeType===1&&o._x_marker&&i.add(o)}),e[a].addedNodes.forEach(o=>{if(o.nodeType===1){if(i.has(o)){i.delete(o);return}o._x_marker||t.push(o)}})),e[a].type==="attributes")){let o=e[a].target,s=e[a].attributeName,c=e[a].oldValue,l=()=>{n.has(o)||n.set(o,[]),n.get(o).push({name:s,value:o.getAttribute(s)})},d=()=>{r.has(o)||r.set(o,[]),r.get(o).push(s)};o.hasAttribute(s)&&c===null?l():o.hasAttribute(s)?(d(),l()):d()}r.forEach((a,o)=>{ii(o,a)}),n.forEach((a,o)=>{Xt.forEach(s=>s(o,a))});for(let a of i)t.some(o=>o.contains(a))||Qt.forEach(o=>o(a));for(let a of t)a.isConnected&&Yt.forEach(o=>o(a));t=null,i=null,n=null,r=null}function ni(e){return U(W(e))}function Se(e,t,i){return e._x_dataStack=[t,...W(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function W(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?W(e.host):e.parentNode?W(e.parentNode):[]}function U(e){return new Proxy({objects:e},Rr)}function ai(e,t){return e===null||e===Object.prototype?null:Object.prototype.hasOwnProperty.call(e,t)?e:ai(Object.getPrototypeOf(e),t)}var Rr={ownKeys({objects:e}){return Array.from(new Set(e.flatMap(t=>Object.keys(t))))},has({objects:e},t){return t==Symbol.unscopables?!1:e.some(i=>Object.prototype.hasOwnProperty.call(i,t)||Reflect.has(i,t))},get({objects:e},t,i){return t=="toJSON"?Tr:Reflect.get(e.find(n=>Reflect.has(n,t))||{},t,i)},set({objects:e},t,i,n){let r;for(const o of e)if(r=ai(o,t),r)break;r||(r=e[e.length-1]);const a=Object.getOwnPropertyDescriptor(r,t);return a!=null&&a.set&&(a!=null&&a.get)?a.set.call(n,i)||!0:Reflect.set(r,t,i)}};function Tr(){return Reflect.ownKeys(this).reduce((t,i)=>(t[i]=Reflect.get(this,i),t),{})}function yt(e,t=()=>{}){let i=r=>typeof r=="object"&&!Array.isArray(r)&&r!==null,n=(r,a="")=>{Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([o,{value:s,enumerable:c}])=>{if(c===!1||s===void 0||typeof s=="object"&&s!==null&&s.__v_skip)return;let l=a===""?o:`${a}.${o}`;typeof s=="object"&&s!==null&&s._x_interceptor?r[o]=s.initialize(e,l,o,t):i(s)&&s!==r&&!(s instanceof Element)&&n(s,l)})};return n(e)}function oi(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(n,r,a,o){return e(this.initialValue,()=>Or(n,r),s=>et(n,r,s),r,a,o)}};return t(i),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let r=i.initialize.bind(i);i.initialize=(a,o,s,c)=>{let l=n.initialize(a,o,s,c);return i.initialValue=l,r(a,o,s,c)}}else i.initialValue=n;return i}}function Or(e,t){return t.split(".").reduce((i,n)=>i[n],e)}function et(e,t,i){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=i;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),et(e[t[0]],t.slice(1),i)}}var si={};function A(e,t){si[e]=t}function he(e,t){let i=Ir(t);return Object.entries(si).forEach(([n,r])=>{Object.defineProperty(e,`$${n}`,{get(){return r(t,i)},enumerable:!1})}),e}function Ir(e){let[t,i]=hi(e),n={interceptor:oi,...t};return bt(e,i),n}function Lr(e,t,i,...n){try{return i(...n)}catch(r){ie(r,e,t)}}function ie(...e){return ci(...e)}var ci=Dr;function Mr(e){ci=e}function Dr(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}

${i?'Expression: "'+i+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var te=!0;function li(e){let t=te;te=!1;let i=e();return te=t,i}function H(e,t,i={}){let n;return S(e,t)(r=>n=r,i),n}function S(...e){return di(...e)}var di=()=>{};function Pr(e){di=e}var ui;function Fr(e){ui=e}function kr(e,t){let i={};he(i,e);let n=[i,...W(e)],r=typeof t=="function"?Nr(n,t):jr(n,t,e);return Lr.bind(null,e,t,r)}function Nr(e,t){return(i=()=>{},{scope:n={},params:r=[],context:a}={})=>{if(!te){ge(i,t,U([n,...e]),r);return}let o=t.apply(U([n,...e]),r);ge(i,o)}}var We={};function Br(e,t){if(We[e])return We[e];let i=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e,a=(()=>{try{let o=new i(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(o,"name",{value:`[Alpine] ${e}`}),o}catch(o){return ie(o,t,e),Promise.resolve()}})();return We[e]=a,a}function jr(e,t,i){let n=Br(t,i);return(r=()=>{},{scope:a={},params:o=[],context:s}={})=>{n.result=void 0,n.finished=!1;let c=U([a,...e]);if(typeof n=="function"){let l=n.call(s,n,c).catch(d=>ie(d,i,t));n.finished?(ge(r,n.result,c,o,i),n.result=void 0):l.then(d=>{ge(r,d,c,o,i)}).catch(d=>ie(d,i,t)).finally(()=>n.result=void 0)}}}function ge(e,t,i,n,r){if(te&&typeof t=="function"){let a=t.apply(i,n);a instanceof Promise?a.then(o=>ge(e,o,i,n)).catch(o=>ie(o,r,t)):e(a)}else typeof t=="object"&&t instanceof Promise?t.then(a=>e(a)):e(t)}function Hr(...e){return ui(...e)}function $r(e,t,i={}){let n={};he(n,e);let r=[n,...W(e)],a=U([i.scope??{},...r]),o=i.params??[];if(t.includes("await")){let s=Object.getPrototypeOf(async function(){}).constructor,c=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;return new s(["scope"],`with (scope) { let __result = ${c}; return __result }`).call(i.context,a)}else{let s=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,l=new Function(["scope"],`with (scope) { let __result = ${s}; return __result }`).call(i.context,a);return typeof l=="function"&&te?l.apply(a,o):l}}var St="x-";function V(e=""){return St+e}function Wr(e){St=e}var Ie={};function v(e,t){return Ie[e]=t,{before(i){if(!Ie[i]){console.warn(String.raw`Cannot find directive \`${i}\`. \`${e}\` will use the default order of execution`);return}const n=j.indexOf(i);j.splice(n>=0?n:j.indexOf("DEFAULT"),0,e)}}}function Ur(e){return Object.keys(Ie).includes(e)}function ke(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let a=Object.entries(e._x_virtualDirectives).map(([s,c])=>({name:s,value:c})),o=fi(a);a=a.map(s=>o.find(c=>c.name===s.name)?{name:`x-bind:${s.name}`,value:`"${s.value}"`}:s),t=t.concat(a)}let n={};return t.map(mi((a,o)=>n[a]=o)).filter(_i).map(qr(n,i)).sort(zr).map(a=>Kr(e,a))}function fi(e){return Array.from(e).map(mi()).filter(t=>!_i(t))}var tt=!1,ce=new Map,pi=Symbol();function Vr(e){tt=!0;let t=Symbol();pi=t,ce.set(t,[]);let i=()=>{for(;ce.get(t).length;)ce.get(t).shift()();ce.delete(t)},n=()=>{tt=!1,i()};e(i),n()}function hi(e){let t=[],i=s=>t.push(s),[n,r]=_r(e);return t.push(r),[{Alpine:ae,effect:n,cleanup:i,evaluateLater:S.bind(S,e),evaluate:H.bind(H,e)},()=>t.forEach(s=>s())]}function Kr(e,t){let i=()=>{},n=Ie[t.type]||i,[r,a]=hi(e);ti(e,t.original,a);let o=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,r),n=n.bind(n,e,t,r),tt?ce.get(pi).push(n):n())};return o.runCleanups=a,o}var gi=(e,t)=>({name:i,value:n})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:n}),bi=e=>e;function mi(e=()=>{}){return({name:t,value:i})=>{let{name:n,value:r}=vi.reduce((a,o)=>o(a),{name:t,value:i});return n!==t&&e(n,t),{name:n,value:r}}}var vi=[];function xt(e){vi.push(e)}function _i({name:e}){return yi().test(e)}var yi=()=>new RegExp(`^${St}([^:^.]+)\\b`);function qr(e,t){return({name:i,value:n})=>{i===n&&(n="");let r=i.match(yi()),a=i.match(/:([a-zA-Z0-9\-_:]+)/),o=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],s=t||e[i]||i;return{type:r?r[1]:null,value:a?a[1]:null,modifiers:o.map(c=>c.replace(".","")),expression:n,original:s}}}var it="DEFAULT",j=["ignore","ref","id","data","anchor","bind","init","for","model","modelable","transition","show","if",it,"teleport"];function zr(e,t){let i=j.indexOf(e.type)===-1?it:e.type,n=j.indexOf(t.type)===-1?it:t.type;return j.indexOf(i)-j.indexOf(n)}function K(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(r=>K(r,t));return}let i=!1;if(t(e,()=>i=!0),i)return;let n=e.firstElementChild;for(;n;)K(n,t),n=n.nextElementSibling}var D=!1;function P(e,t=()=>{}){return(...i)=>D?t(...i):e(...i)}function Gr(e){return(...t)=>D&&e(...t)}var Si=[];function xe(e){Si.push(e)}function Jr(e,t){Si.forEach(i=>i(e,t)),D=!0,xi(()=>{T(t,(i,n)=>{n(i,()=>{})})}),D=!1}var rt=!1;function Zr(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),D=!0,rt=!0,xi(()=>{Xr(t)}),D=!1,rt=!1}function Xr(e){let t=!1;T(e,(n,r)=>{K(n,(a,o)=>{if(t&&nn(a))return o();t=!0,r(a,o)})})}function xi(e){let t=Z;kt((i,n)=>{let r=t(i);return ne(r),()=>{}}),e(),kt(t)}var Ne=0;function Qr(e,t){let i=e._x_deferInit;i||(i=e._x_deferInit={pending:0,ownsIgnore:!e._x_ignore,queuedAttributes:new Map},i.ownsIgnore&&(e._x_ignore=!0),Ne++),i.pending++,Promise.resolve(t).catch(n=>{try{ie(n,e)}catch(r){setTimeout(()=>{throw r},0)}}).then(()=>Yr(e,i))}function Yr(e,t){t.pending--,!(t.pending>0)&&(Cr(),!(t.pending>0)&&e._x_deferInit===t&&(delete e._x_deferInit,t.ownsIgnore&&delete e._x_ignore,Ne--,e.isConnected&&(tn(t),T(e))))}function en(e,t){if(Ne===0)return!1;let i=w(e,n=>n._x_deferInit);return i?(wi(i._x_deferInit,e,t.map(({name:n})=>n)),!0):!1}function wi(e,t,i){let n=e.queuedAttributes.get(t);(!n||n.marker!==t._x_marker)&&(n={marker:t._x_marker,names:new Set},e.queuedAttributes.set(t,n)),i.forEach(r=>n.names.add(r))}function tn(e){e.queuedAttributes.forEach((t,i)=>{if(!i.isConnected||!i._x_marker||i._x_marker!==t.marker)return;let n=w(i,a=>a._x_deferInit);if(n){wi(n._x_deferInit,i,Array.from(t.names));return}let r=Array.from(t.names).filter(a=>i.hasAttribute(a)).map(a=>({name:a,value:i.getAttribute(a)}));r.length!==0&&ke(i,r).forEach(a=>a())})}xe((e,t)=>{Ne!==0&&(!e||e.nodeType!==1||!t||t.nodeType!==1||w(e,i=>i._x_deferInit)&&(t._x_ignore=!0))});function le(e,t,i={},n={}){return e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0,...n}))}function R(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Nt=!1;function rn(){Nt&&R("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Nt=!0,document.body||R("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),le(document,"alpine:init"),le(document,"alpine:initializing"),vt(),Sr(t=>T(t,K)),bt(t=>X(t)),ei((t,i)=>{en(t,i)||ke(t,i).forEach(n=>n())});let e=t=>!Be(t.parentElement,!0);Array.from(document.querySelectorAll(Ei().join(","))).filter(e).forEach(t=>{T(t)}),le(document,"alpine:initialized"),setTimeout(()=>{sn()})}var wt=[],Ci=[];function Ai(){return wt.map(e=>e())}function Ei(){return wt.concat(Ci).map(e=>e())}function Ri(e){wt.push(e)}function Ti(e){Ci.push(e)}function Be(e,t=!1){return w(e,i=>{if((t?Ei():Ai()).some(r=>i.matches(r)))return!0})}function w(e,t){if(e){if(t(e))return e;if(e._x_teleportBack)return w(e._x_teleportBack,t);if(e.parentNode instanceof ShadowRoot)return w(e.parentNode.host,t);if(e.parentElement)return w(e.parentElement,t)}}function nn(e){return Ai().some(t=>e.matches(t))}var Oi=[];function an(e){Oi.push(e)}var on=1;function T(e,t=K,i=()=>{}){w(e,n=>n._x_ignore)||Vr(()=>{t(e,(n,r)=>{n._x_marker||(i(n,r),Oi.forEach(a=>a(n,r)),ke(n,n.attributes).forEach(a=>a()),n._x_ignore||(n._x_marker=on++),n._x_ignore&&r())})})}function X(e,t=K){t(e,i=>{xr(i),ii(i),delete i._x_marker})}function sn(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,i,n])=>{Ur(i)||n.some(r=>{if(document.querySelector(r))return R(`found "${r}", but missing ${t} plugin`),!0})})}var nt=[],Ct=!1;function At(e=()=>{}){return queueMicrotask(()=>{Ct||setTimeout(()=>{at()})}),new Promise(t=>{nt.push(()=>{e(),t()})})}function at(){for(Ct=!1;nt.length;)nt.shift()()}function cn(){Ct=!0}function Et(e,t){return Array.isArray(t)?Bt(e,t.join(" ")):typeof t=="object"&&t!==null?ln(e,t):typeof t=="function"?Et(e,t()):Bt(e,t)}function ot(e){return e.split(/\s/).filter(Boolean)}function Bt(e,t){let i=r=>ot(r).filter(a=>!e.classList.contains(a)).filter(Boolean),n=r=>(e.classList.add(...r),()=>{e.classList.remove(...r)});return t=t===!0?t="":t||"",n(i(t))}function ln(e,t){let i=Object.entries(t).flatMap(([o,s])=>s?ot(o):!1).filter(Boolean),n=Object.entries(t).flatMap(([o,s])=>s?!1:ot(o)).filter(Boolean),r=[],a=[];return n.forEach(o=>{e.classList.contains(o)&&(e.classList.remove(o),a.push(o))}),i.forEach(o=>{e.classList.contains(o)||(e.classList.add(o),r.push(o))}),()=>{a.forEach(o=>e.classList.add(o)),r.forEach(o=>e.classList.remove(o))}}function je(e,t){return typeof t=="object"&&t!==null?dn(e,t):un(e,t)}function dn(e,t){let i={};return Object.entries(t).forEach(([n,r])=>{i[n]=e.style[n],n.startsWith("--")||(n=fn(n)),e.style.setProperty(n,r)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{je(e,i)}}function un(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}function fn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function st(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}v("transition",(e,{value:t,modifiers:i,expression:n},{evaluate:r})=>{typeof n=="function"&&(n=r(n)),n!==!1&&(!n||typeof n=="boolean"?hn(e,i,t):pn(e,n,t))});function pn(e,t,i){Ii(e,Et,""),{enter:r=>{e._x_transition.enter.during=r},"enter-start":r=>{e._x_transition.enter.start=r},"enter-end":r=>{e._x_transition.enter.end=r},leave:r=>{e._x_transition.leave.during=r},"leave-start":r=>{e._x_transition.leave.start=r},"leave-end":r=>{e._x_transition.leave.end=r}}[i](t)}function hn(e,t,i){Ii(e,je);let n=!t.includes("in")&&!t.includes("out")&&!i,r=n||t.includes("in")||["enter"].includes(i),a=n||t.includes("out")||["leave"].includes(i);t.includes("in")&&!n&&(t=t.filter((y,Q)=>Q<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((y,Q)=>Q>t.indexOf("out")));let o=!t.includes("opacity")&&!t.includes("scale"),s=o||t.includes("opacity"),c=o||t.includes("scale"),l=s?0:1,d=c?oe(t,"scale",95)/100:1,u=oe(t,"delay",0)/1e3,g=oe(t,"origin","center"),b="opacity, transform",O=oe(t,"duration",150)/1e3,f=oe(t,"duration",75)/1e3,_="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(e._x_transition.enter.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:b,transitionDuration:`${O}s`,transitionTimingFunction:_},e._x_transition.enter.start={opacity:l,transform:`scale(${d})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),a&&(e._x_transition.leave.during={transformOrigin:g,transitionDelay:`${u}s`,transitionProperty:b,transitionDuration:`${f}s`,transitionTimingFunction:_},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${d})`})}function Ii(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(n=()=>{},r=()=>{}){ct(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,r)},out(n=()=>{},r=()=>{}){ct(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,n){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let a=()=>r(i);if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):a():e._x_transition?e._x_transition.in(i):a();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(n)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let o=Li(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):r(()=>{let s=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(s)]).then(([d])=>d==null?void 0:d());return delete c._x_hidePromise,delete c._x_hideChildren,l};s(e).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Li(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:Li(t)}function ct(e,t,{during:i,start:n,end:r}={},a=()=>{},o=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(i).length===0&&Object.keys(n).length===0&&Object.keys(r).length===0){a(),o();return}let s,c,l;gn(e,{start(){s=t(e,n)},during(){c=t(e,i)},before:a,end(){s(),l=t(e,r)},after:o,cleanup(){c(),l()}})}function gn(e,t){let i,n,r,a=st(()=>{m(()=>{i=!0,n||t.before(),r||(t.end(),at()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:st(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();a()}),finish:a},m(()=>{t.start(),t.during()}),cn(),requestAnimationFrame(()=>{if(i)return;let o=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),m(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{i||(m(()=>{t.end()}),at(),setTimeout(e._x_transitioning.finish,o+s),r=!0)})})}function oe(e,t,i){if(e.indexOf(t)===-1)return i;const n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return i;if(t==="duration"||t==="delay"){let r=n.match(/([0-9]+)ms/);if(r)return r[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}function Mi(e,t,i,n=[]){switch(e._x_bindings||(e._x_bindings=re({})),e._x_bindings[t]=i,t=n.includes("camel")?wn(t):t,t){case"value":bn(e,i);break;case"style":vn(e,i);break;case"class":mn(e,i);break;case"selected":case"checked":_n(e,t,i);break;default:Rt(e,t,i);break}}function bn(e,t){if(Tt(e))e.attributes.value===void 0&&(e.value=t);else if(Le(e))Number.isInteger(t)?e.value=t:!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(i=>Cn(i,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")xn(e,t);else if(e.tagName==="OPTION")Rt(e,"value",t);else{if(e.value===t&&(typeof t!="object"||t===null))return;e.value=t===void 0?"":t}}function mn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=Et(e,t)}function vn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=je(e,t)}function _n(e,t,i){Rt(e,t,i),Sn(e,t,i)}function Rt(e,t,i){[null,void 0,!1].includes(i)&&En(t)?e.removeAttribute(t):(Di(t)&&(i=t),Rn(i)&&(i=JSON.stringify(i)),yn(e,t,i))}function yn(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}function Sn(e,t,i){e[t]!==i&&(e[t]=i)}function xn(e,t){const i=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=i.includes(n.value)})}function wn(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function Cn(e,t){return e==t}function Re(e){return[1,"1","true","on","yes",!0].includes(e)?!0:[0,"0","false","off","no",!1].includes(e)?!1:e?!!e:null}var An=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Di(e){return An.has(e)}function En(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function Rn(e){return typeof e=="object"&&e!==null}function Tn(e,t,i){return e._x_bindings&&e._x_bindings[t]!==void 0?e._x_bindings[t]:Pi(e,t,i)}function On(e,t,i,n=!0){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];if(e._x_inlineBindings&&e._x_inlineBindings[t]!==void 0){let r=e._x_inlineBindings[t];return r.extract=n,li(()=>H(e,r.expression))}return Pi(e,t,i)}function Pi(e,t,i){let n=e.getAttribute(t);return n===null?typeof i=="function"?i():i:n===""?!0:Di(t)?!![t,"true"].includes(n):n}function Le(e){return e.type==="checkbox"||e.localName==="ui-checkbox"||e.localName==="ui-switch"}function Tt(e){return e.type==="radio"||e.localName==="ui-radio"}function Fi(e,t){let i;return function(){const n=this,r=arguments,a=function(){i=null,e.apply(n,r)};clearTimeout(i),i=setTimeout(a,t)}}function ki(e,t){let i;return function(){let n=this,r=arguments;i||(e.apply(n,r),i=!0,setTimeout(()=>i=!1,t))}}function Ni({get:e,set:t},{get:i,set:n}){let r=!0,a,o=Z(()=>{let s=e(),c=i();if(r)n(Ue(s)),r=!1;else{let l=JSON.stringify(s),d=JSON.stringify(c);l!==a?n(Ue(s)):l!==d&&t(Ue(c))}a=JSON.stringify(e()),JSON.stringify(i())});return()=>{gt(o),ne(o)}}function Ue(e){return typeof e=="object"?JSON.parse(JSON.stringify(e)):e}function In(e){(Array.isArray(e)?e:[e]).forEach(i=>i(ae))}var L={},jt=!1;function Ln(e,t){if(jt||(L=re(L),jt=!0),t===void 0)return L[e];L[e]=t,typeof t=="object"&&t!==null&&t._x_interceptor?L[e]=t.initialize(L,e,e,()=>{}):yt(L[e]),typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&L[e].init()}function Mn(){return L}var Bi={};function Dn(e,t){let i=typeof t!="function"?()=>t:t;return e instanceof Element?ji(e,i()):(Bi[e]=i,()=>{})}function Pn(e){return Object.entries(Bi).forEach(([t,i])=>{Object.defineProperty(e,t,{get(){return(...n)=>i(...n)}})}),e}function ji(e,t,i){let n=[];for(;n.length;)n.pop()();let r=Object.entries(t).map(([o,s])=>({name:o,value:s})),a=fi(r);return r=r.map(o=>a.find(s=>s.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),ke(e,r,i).map(o=>{n.push(o.runCleanups),o()}),()=>{for(;n.length;)n.pop()()}}var Hi={};function Fn(e,t){Hi[e]=t}function kn(e,t){return Object.entries(Hi).forEach(([i,n])=>{Object.defineProperty(e,i,{get(){return(...r)=>n.bind(t)(...r)},enumerable:!1})}),e}var Nn={get reactive(){return re},get release(){return ne},get effect(){return Z},get raw(){return Jt},get transaction(){return yr},version:"3.17.5",flushAndStopDeferringMutations:Er,dontAutoEvaluateFunctions:li,disableEffectScheduling:mr,startObservingMutations:vt,stopObservingMutations:ri,setReactivityEngine:vr,onAttributeRemoved:ti,onAttributesAdded:ei,closestDataStack:W,skipDuringClone:P,onlyDuringClone:Gr,addRootSelector:Ri,addInitSelector:Ti,setErrorHandler:Mr,interceptClone:xe,addScopeToNode:Se,deferMutations:Ar,mapAttributes:xt,evaluateLater:S,interceptInit:an,initInterceptors:yt,injectMagics:he,setEvaluator:Pr,setRawEvaluator:Fr,mergeProxies:U,extractProp:On,findClosest:w,onElRemoved:bt,closestRoot:Be,destroyTree:X,interceptor:oi,transition:ct,setStyles:je,mutateDom:m,deferInit:Qr,directive:v,entangle:Ni,throttle:ki,debounce:Fi,evaluate:H,evaluateRaw:Hr,initTree:T,nextTick:At,prefixed:V,prefix:Wr,plugin:In,magic:A,store:Ln,start:rn,clone:Zr,cloneNode:Jr,bound:Tn,$data:ni,watch:Zt,walk:K,data:Fn,bind:Dn},ae=Nn;function Bn(e){const t=Object.create(null);for(const i of e.split(","))t[i]=1;return i=>i in t}var be=Object.assign,jn=Object.prototype.hasOwnProperty,lt=(e,t)=>jn.call(e,t),me=Array.isArray,de=e=>$i(e)==="[object Map]",Hn=e=>typeof e=="string",we=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",$n=Object.prototype.toString,$i=e=>$n.call(e),Wi=e=>$i(e).slice(8,-1),Ot=e=>Hn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},Un=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),B=(e,t)=>!Object.is(e,t);function q(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var p,Ve=new WeakSet,Ht=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ve.has(this)&&(Ve.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$t(this),Vi(this);const e=p,t=C;p=this,C=!0;try{return this.fn()}finally{p!==this&&q("Active effect was not restored correctly - this is likely a Vue internal bug."),Ki(this),p=e,C=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mt(e);this.deps=this.depsTail=void 0,$t(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ve.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dt(this)&&this.run()}get dirty(){return dt(this)}},Ui=0,ue,fe;function Vn(e,t=!1){if(e.flags|=8,t){e.next=fe,fe=e;return}e.next=ue,ue=e}function It(){Ui++}function Lt(){if(--Ui>0)return;if(fe){let t=fe;for(fe=void 0;t;){const i=t.next;t.next=void 0,t.flags&=-9,t=i}}let e;for(;ue;){let t=ue;for(ue=void 0;t;){const i=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=i}}if(e)throw e}function Vi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ki(e){let t,i=e.depsTail,n=i;for(;n;){const r=n.prevDep;n.version===-1?(n===i&&(i=r),Mt(n),qn(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=i}function dt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Me)||(e.globalVersion=Me,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dt(e))))return;e.flags|=2;const t=e.dep,i=p,n=C;p=e,C=!0;try{Vi(e);const r=e.fn(e._value);(t.version===0||B(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{p=i,C=n,Ki(e),e.flags&=-3}}function Mt(e,t=!1){const{dep:i,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),i.subsHead===e&&(i.subsHead=r),i.subs===e&&(i.subs=n,!n&&i.computed)){i.computed.flags&=-5;for(let a=i.computed.deps;a;a=a.nextDep)Mt(a,!0)}!t&&!--i.sc&&i.map&&i.map.delete(i.key)}function qn(e){const{prevDep:t,nextDep:i}=e;t&&(t.nextDep=i,e.prevDep=void 0),i&&(i.prevDep=t,e.nextDep=void 0)}function zn(e,t){e.effect instanceof Ht&&(e=e.effect.fn);const i=new Ht(e);t&&be(i,t);try{i.run()}catch(r){throw i.stop(),r}const n=i.run.bind(i);return n.effect=i,n}function Gn(e){e.effect.stop()}var C=!0,qi=[];function Jn(){qi.push(C),C=!1}function Zn(){const e=qi.pop();C=e===void 0?!0:e}function $t(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const i=p;p=void 0;try{t()}finally{p=i}}}var Me=0,Xn=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Qn=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!p||!C||p===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==p)t=this.activeLink=new Xn(p,this),p.deps?(t.prevDep=p.depsTail,p.depsTail.nextDep=t,p.depsTail=t):p.deps=p.depsTail=t,zi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=p.depsTail,t.nextDep=void 0,p.depsTail.nextDep=t,p.depsTail=t,p.deps===t&&(p.deps=i)}return p.onTrack&&p.onTrack(be({effect:p},e)),t}trigger(e){this.version++,Me++,this.notify(e)}notify(e){It();try{for(let t=this.subsHead;t;t=t.nextSub)t.sub.onTrigger&&!(t.sub.flags&8)&&t.sub.onTrigger(be({effect:t.sub},e));for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lt()}}};function zi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)zi(n)}const i=e.dep.subs;i!==e&&(e.prevSub=i,i&&(i.nextSub=e)),e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}var ut=new WeakMap,$=Symbol("Object iterate"),ft=Symbol("Map keys iterate"),_e=Symbol("Array iterate");function x(e,t,i){if(C&&p){let n=ut.get(e);n||ut.set(e,n=new Map);let r=n.get(i);r||(n.set(i,r=new Qn),r.map=n,r.key=i),r.track({target:e,type:t,key:i})}}function F(e,t,i,n,r,a){const o=ut.get(e);if(!o){Me++;return}const s=c=>{c&&c.trigger({target:e,type:t,key:i,newValue:n,oldValue:r,oldTarget:a})};if(It(),t==="clear")o.forEach(s);else{const c=me(e),l=c&&Ot(i);if(c&&i==="length"){const d=Number(n);o.forEach((u,g)=>{(g==="length"||g===_e||!we(g)&&g>=d)&&s(u)})}else switch((i!==void 0||o.has(void 0))&&s(o.get(i)),l&&s(o.get(_e)),t){case"add":c?l&&s(o.get("length")):(s(o.get($)),de(e)&&s(o.get(ft)));break;case"delete":c||(s(o.get($)),de(e)&&s(o.get(ft)));break;case"set":de(e)&&s(o.get($));break}}Lt()}function Y(e){const t=h(e);return t===e?t:(x(t,"iterate",_e),G(e)?t:t.map(J))}function Dt(e){return x(e=h(e),"iterate",_e),e}function E(e,t){return z(e)?er(e)?ye(J(t)):ye(t):J(t)}var Yn={__proto__:null,[Symbol.iterator](){return Ke(this,Symbol.iterator,e=>E(this,e))},concat(...e){return Y(this).concat(...e.map(t=>me(t)?Y(t):t))},entries(){return Ke(this,"entries",e=>(e[1]=E(this,e[1]),e))},every(e,t){return I(this,"every",e,t,void 0,arguments)},filter(e,t){return I(this,"filter",e,t,i=>i.map(n=>E(this,n)),arguments)},find(e,t){return I(this,"find",e,t,i=>E(this,i),arguments)},findIndex(e,t){return I(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return I(this,"findLast",e,t,i=>E(this,i),arguments)},findLastIndex(e,t){return I(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return I(this,"forEach",e,t,void 0,arguments)},includes(...e){return qe(this,"includes",e)},indexOf(...e){return qe(this,"indexOf",e)},join(e){return Y(this).join(e)},lastIndexOf(...e){return qe(this,"lastIndexOf",e)},map(e,t){return I(this,"map",e,t,void 0,arguments)},pop(){return se(this,"pop")},push(...e){return se(this,"push",e)},reduce(e,...t){return Wt(this,"reduce",e,t)},reduceRight(e,...t){return Wt(this,"reduceRight",e,t)},shift(){return se(this,"shift")},some(e,t){return I(this,"some",e,t,void 0,arguments)},splice(...e){return se(this,"splice",e)},toReversed(){return Y(this).toReversed()},toSorted(e){return Y(this).toSorted(e)},toSpliced(...e){return Y(this).toSpliced(...e)},unshift(...e){return se(this,"unshift",e)},values(){return Ke(this,"values",e=>E(this,e))}};function Ke(e,t,i){const n=Dt(e),r=n[t]();return n!==e&&!G(e)&&(r._next=r.next,r.next=()=>{const a=r._next();return a.done||(a.value=i(a.value)),a}),r}var ea=Array.prototype;function I(e,t,i,n,r,a){const o=Dt(e),s=o!==e&&!G(e),c=o[t];if(c!==ea[t]){const u=c.apply(e,a);return s?J(u):u}let l=i;o!==e&&(s?l=function(u,g){return i.call(this,E(e,u),g,e)}:i.length>2&&(l=function(u,g){return i.call(this,u,g,e)}));const d=c.call(o,l,n);return s&&r?r(d):d}function Wt(e,t,i,n){const r=Dt(e),a=r!==e&&!G(e);let o=i,s=!1;r!==e&&(a?(s=n.length===0,o=function(l,d,u){return s&&(s=!1,l=E(e,l)),i.call(this,l,E(e,d),u,e)}):i.length>3&&(o=function(l,d,u){return i.call(this,l,d,u,e)}));const c=r[t](o,...n);return s?E(e,c):c}function qe(e,t,i){const n=h(e);x(n,"iterate",_e);const r=n[t](...i);return(r===-1||r===!1)&&ha(i[0])?(i[0]=h(i[0]),n[t](...i)):r}function se(e,t,i=[]){Jn(),It();const n=h(e)[t].apply(e,i);return Lt(),Zn(),n}var ta=Bn("__proto__,__v_isRef,__isVue"),Gi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(we));function ia(e){we(e)||(e=String(e));const t=h(this);return x(t,"has",e),t.hasOwnProperty(e)}var Ji=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(n?r?fa:Qi:r?ua:Xi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=me(e);if(!n){let s;if(a&&(s=Yn[t]))return s;if(t==="hasOwnProperty")return ia}const o=Reflect.get(e,t,pe(e)?e:i);if((we(t)?Gi.has(t):ta(t))||(n||x(e,"get",t),r))return o;if(pe(o)){const s=a&&Ot(t)?o:o.value;return n&&ve(s)?pt(s):s}return ve(o)?n?pt(o):Pt(o):o}},ra=class extends Ji{constructor(e=!1){super(!1,e)}set(e,t,i,n){let r=e[t];const a=me(e)&&Ot(t);if(!this._isShallow){const c=z(r);if(!G(i)&&!z(i)&&(r=h(r),i=h(i)),!a&&pe(r)&&!pe(i))return c?(q(`Set operation on key "${String(t)}" failed: target is readonly.`,e[t]),!0):(r.value=i,!0)}const o=a?Number(t)<e.length:lt(e,t),s=Reflect.set(e,t,i,pe(e)?e:n);return e===h(n)&&s&&(o?B(i,r)&&F(e,"set",t,i,r):F(e,"add",t,i)),s}deleteProperty(e,t){const i=lt(e,t),n=e[t],r=Reflect.deleteProperty(e,t);return r&&i&&F(e,"delete",t,void 0,n),r}has(e,t){const i=Reflect.has(e,t);return(!we(t)||!Gi.has(t))&&x(e,"has",t),i}ownKeys(e){return x(e,"iterate",me(e)?"length":$),Reflect.ownKeys(e)}},na=class extends Ji{constructor(e=!1){super(!0,e)}set(e,t){return q(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return q(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},aa=new ra,oa=new na,Ce=e=>Reflect.getPrototypeOf(e);function sa(e,t,i){return function(...n){const r=this.__v_raw,a=h(r),o=de(a),s=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...n),d=t?ye:J;return!t&&x(a,"iterate",c?ft:$),be(Object.create(l),{next(){const{value:u,done:g}=l.next();return g?{value:u,done:g}:{value:s?[d(u[0]),d(u[1])]:d(u),done:g}}})}}function Ae(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";q(`${Un(e)} operation ${i}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function ca(e,t){const i={get(r){const a=this.__v_raw,o=h(a),s=h(r);e||(B(r,s)&&x(o,"get",r),x(o,"get",s));const{has:c}=Ce(o),l=e?ye:J;if(c.call(o,r))return l(a.get(r));if(c.call(o,s))return l(a.get(s));a!==o&&a.get(r)},get size(){const r=this.__v_raw;return!e&&x(h(r),"iterate",$),r.size},has(r){const a=this.__v_raw,o=h(a),s=h(r);return e||(B(r,s)&&x(o,"has",r),x(o,"has",s)),r===s?a.has(r):a.has(r)||a.has(s)},forEach(r,a){const o=this,s=o.__v_raw,c=h(s),l=e?ye:J;return!e&&x(c,"iterate",$),s.forEach((d,u)=>r.call(a,l(d),l(u),o))}};return be(i,e?{add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear")}:{add(r){const a=h(this),o=Ce(a),s=h(r),c=!G(r)&&!z(r)?s:r;return o.has.call(a,c)||B(r,c)&&o.has.call(a,r)||B(s,c)&&o.has.call(a,s)||(a.add(c),F(a,"add",c,c)),this},set(r,a){!G(a)&&!z(a)&&(a=h(a));const o=h(this),{has:s,get:c}=Ce(o);let l=s.call(o,r);l?Ut(o,s,r):(r=h(r),l=s.call(o,r));const d=c.call(o,r);return o.set(r,a),l?B(a,d)&&F(o,"set",r,a,d):F(o,"add",r,a),this},delete(r){const a=h(this),{has:o,get:s}=Ce(a);let c=o.call(a,r);c?Ut(a,o,r):(r=h(r),c=o.call(a,r));const l=s?s.call(a,r):void 0,d=a.delete(r);return c&&F(a,"delete",r,void 0,l),d},clear(){const r=h(this),a=r.size!==0,o=de(r)?new Map(r):new Set(r),s=r.clear();return a&&F(r,"clear",void 0,void 0,o),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=sa(r,e)}),i}function Zi(e,t){const i=ca(e);return(n,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(lt(i,r)&&r in n?i:n,r,a)}var la={get:Zi(!1)},da={get:Zi(!0)};function Ut(e,t,i){const n=h(i);if(n!==i&&t.call(e,n)){const r=Wi(e);q(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Xi=new WeakMap,ua=new WeakMap,Qi=new WeakMap,fa=new WeakMap;function pa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pt(e){return z(e)?e:Yi(e,!1,aa,la,Xi)}function pt(e){return Yi(e,!0,oa,da,Qi)}function Yi(e,t,i,n,r){if(!ve(e))return q(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const a=r.get(e);if(a)return a;const o=pa(Wi(e));if(o===0)return e;const s=new Proxy(e,o===2?n:i);return r.set(e,s),s}function er(e){return z(e)?er(e.__v_raw):!!(e&&e.__v_isReactive)}function z(e){return!!(e&&e.__v_isReadonly)}function G(e){return!!(e&&e.__v_isShallow)}function ha(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}var J=e=>ve(e)?Pt(e):e,ye=e=>ve(e)?pt(e):e;function pe(e){return e?e.__v_isRef===!0:!1}A("nextTick",()=>At);A("dispatch",e=>le.bind(le,e));A("watch",(e,{evaluateLater:t,cleanup:i})=>(n,r)=>{let a=t(n),s=Zt(()=>{let c;return a(l=>c=l),c},r);i(s)});A("store",Mn);A("data",e=>ni(e));A("root",e=>Be(e));A("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=U(ga(e))),e._x_refs_proxy));function ga(e){let t=[];return w(e,i=>{i._x_refs&&t.push(i._x_refs)}),t}var ze={};function tr(e){return ze[e]||(ze[e]=0),++ze[e]}function ba(e,t){return w(e,i=>{if(i._x_ids&&i._x_ids[t])return!0})}function ma(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=tr(t))}A("id",(e,{cleanup:t})=>(i,n=null)=>{let r=`${i}${n?`-${n}`:""}`;return va(e,r,t,()=>{let a=ba(e,i),o=a?a._x_ids[i]:tr(i);return n?`${i}-${o}-${n}`:`${i}-${o}`})});xe((e,t)=>{e._x_id&&(t._x_id=e._x_id)});function va(e,t,i,n){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let r=n();return e._x_id[t]=r,i(()=>{delete e._x_id[t]}),r}A("el",e=>e);ir("Focus","focus","focus");ir("Persist","persist","persist");function ir(e,t,i){A(t,n=>R(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}v("modelable",(e,{expression:t},{effect:i,evaluateLater:n,cleanup:r})=>{let a=n(t),o=()=>{let d;return a(u=>d=u),d},s=n(`${t} = __placeholder`),c=d=>s(()=>{},{scope:{__placeholder:d}}),l=o();c(l),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let d=e._x_model.get,u=e._x_model.setWithModifiers,g=Ni({get(){return d()},set(b){u(b)}},{get(){return o()},set(b){c(b)}});r(g)})});v("teleport",(e,{modifiers:t,expression:i},{cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&R("x-teleport can only be used on a <template> tag",e);let r=Vt(i),a=e.content.cloneNode(!0).firstElementChild;e._x_teleport=a,a._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),a.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(s=>{a.addEventListener(s,c=>{c.stopPropagation(),e.dispatchEvent(new c.constructor(c.type,c))})}),Se(a,{},e);let o=(s,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(s,c):l.includes("append")?c.parentNode.insertBefore(s,c.nextSibling):c.appendChild(s)};m(()=>{P(()=>{o(a,r,t),T(a)})()}),e._x_teleportPutBack=()=>{let s=Vt(i);m(()=>{o(e._x_teleport,s,t)})},n(()=>m(()=>{a.remove(),X(a)}))});var _a=document.createElement("div");function Vt(e){let t=P(()=>document.querySelector(e),()=>_a)();return t||R(`Cannot find x-teleport element for selector: "${e}"`),t}var rr=()=>{};rr.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};v("ignore",rr);v("effect",P((e,{expression:t},{effect:i})=>{i(S(e,t))}));function ee(e,t,i,n){let r=e,a=c=>n(c),o={},s=(c,l)=>d=>l(c,d);return i.includes("dot")&&(t=ya(t)),i.includes("camel")&&(t=Sa(t)),i.includes("capture")&&(o.capture=!0),i.includes("window")&&(r=window),i.includes("document")&&(r=document),i.includes("passive")&&(o.passive=i[i.indexOf("passive")+1]!=="false"),a=nr(i,a),i.includes("prevent")&&(a=s(a,(c,l)=>{l.preventDefault(),c(l)})),i.includes("stop")&&(a=s(a,(c,l)=>{l.stopPropagation(),c(l)})),i.includes("once")&&(a=s(a,(c,l)=>{c(l),r.removeEventListener(t,a,o)})),(i.includes("away")||i.includes("outside"))&&(r=document,a=s(a,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),i.includes("self")&&(a=s(a,(c,l)=>{l.target===e&&c(l)})),t==="submit"&&(a=s(a,(c,l)=>{l.target._x_pendingModelUpdates&&l.target._x_pendingModelUpdates.forEach(d=>d()),c(l)})),(wa(t)||ar(t))&&(a=s(a,(c,l)=>{Aa(l,i)||c(l)})),r.addEventListener(t,a,o),()=>{r.removeEventListener(t,a,o)}}function nr(e,t){if(e.includes("debounce")){let i=e[e.indexOf("debounce")+1]||"invalid-wait",n=De(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=Fi(t,n)}if(e.includes("throttle")){let i=e[e.indexOf("throttle")+1]||"invalid-wait",n=De(i.split("ms")[0])?Number(i.split("ms")[0]):250;t=ki(t,n)}return t}function ya(e){return e.replace(/-/g,".")}function Sa(e){return e.toLowerCase().replace(/-(\w)/g,(t,i)=>i.toUpperCase())}function De(e){return!Array.isArray(e)&&!isNaN(e)}function xa(e){return[" ","_"].includes(e)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function wa(e){return["keydown","keyup"].includes(e)}function ar(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}var Ca=["window","document","prevent","stop","once","capture","self","away","outside","passive","dot","camel","preserve-scroll","blur","change","lazy","number","boolean","trim","fill","unintrusive","parent"];function Aa(e,t){let i=t.filter((a,o)=>a==="false"&&t[o-1]==="passive"?!1:!Ca.includes(a));if(i.includes("debounce")){let a=i.indexOf("debounce");i.splice(a,De((i[a+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let a=i.indexOf("throttle");i.splice(a,De((i[a+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.length===0||i.length===1&&Kt(e.key).includes(i[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(a=>i.includes(a));return i=i.filter(a=>!r.includes(a)),!(r.length>0&&r.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),e[`${o}Key`])).length===r.length&&(ar(e.type)||Kt(e.key).includes(i[0])))}function Kt(e){if(!e)return[];e=xa(e);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return t[e]=e,Object.keys(t).map(i=>{if(t[i]===e)return i}).filter(i=>i)}v("model",(e,{modifiers:t,expression:i},{effect:n,cleanup:r})=>{let a=e;t.includes("parent")&&(a=w(e,f=>f!==e));let o=S(a,i),s;typeof i=="string"?s=S(a,`${i} = __placeholder`):typeof i=="function"&&typeof i()=="string"?s=S(a,`${i()} = __placeholder`):s=()=>{};let c=()=>{let f;return o(_=>f=_),qt(f)?f.get():f},l=f=>{let _;o(y=>_=y),qt(_)?_.set(f):s(()=>{},{scope:{__placeholder:f}})};typeof i=="string"&&e.type==="radio"&&m(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let d=t.includes("change")||t.includes("lazy"),u=t.includes("blur"),g=t.includes("enter"),b=d||u||g,O;if(D)O=()=>{};else if(b){let f=[],_=y=>l(Ee(e,t,y,c()));if(d&&f.push(ee(e,"change",t,_)),u&&(f.push(ee(e,"blur",t,_)),e.form)){let y=e.form,Q=()=>_({target:e});y._x_pendingModelUpdates||(y._x_pendingModelUpdates=[]),y._x_pendingModelUpdates.push(Q),r(()=>{y._x_pendingModelUpdates&&y._x_pendingModelUpdates.splice(y._x_pendingModelUpdates.indexOf(Q),1)})}g&&f.push(ee(e,"keydown",t,y=>{y.key==="Enter"&&_(y)})),O=()=>f.forEach(y=>y())}else{let f=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)?"change":"input";O=ee(e,f,t,_=>{l(Ee(e,t,_,c()))})}if(t.includes("fill")&&([void 0,null,""].includes(c())||Le(e)&&Array.isArray(c())||e.tagName.toLowerCase()==="select"&&e.multiple)&&l(Ee(e,t,{target:e},c())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=O,r(()=>e._x_removeModelListeners.default()),e.form){let f=ee(e.form,"reset",[],_=>{At(()=>e._x_model&&e._x_model.set(Ee(e,t,{target:e},c())))});r(()=>f())}if(e._x_model={get(){return c()},set(f){l(f)},setWithModifiers:nr(t,l)},e._x_forceModelUpdate=f=>{f===void 0&&typeof i=="string"&&i.match(/\./)&&(f=""),m(()=>{Le(e)?Array.isArray(f)?e.checked=f.some(_=>_==e.value):e.checked=!!f:Tt(e)?typeof f=="boolean"?e.checked=Re(e.value)===f:e.checked=e.value==f:Mi(e,"value",f)})},e.tagName==="SELECT"){let f=new MutationObserver(()=>{e._x_forceModelUpdate(c())});f.observe(e,{childList:!0}),r(()=>f.disconnect())}n(()=>{let f=c();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(f)})});function Ee(e,t,i,n){return m(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail!==null&&i.detail!==void 0?i.detail:i.target.value;if(Le(e))if(Array.isArray(n)){let r=null;return t.includes("number")?r=Ge(i.target.value):t.includes("boolean")?r=Re(i.target.value):r=i.target.value,i.target.checked?n.includes(r)?n:n.concat([r]):n.filter(a=>!Ea(a,r))}else return i.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(r=>{let a=r.value||r.text;return Ge(a)}):t.includes("boolean")?Array.from(i.target.selectedOptions).map(r=>{let a=r.value||r.text;return Re(a)}):Array.from(i.target.selectedOptions).map(r=>r.value||r.text);{let r;return Tt(e)?i.target.checked?r=i.target.value:r=n:r=i.target.value,t.includes("number")?Ge(r):t.includes("boolean")?Re(r):t.includes("trim")?r.trim():r}}})}function Ge(e){let t=e?parseFloat(e):null;return Ra(t)?t:e}function Ea(e,t){return e==t}function Ra(e){return!Array.isArray(e)&&!isNaN(e)}function qt(e){return e!==null&&typeof e=="object"&&typeof e.get=="function"&&typeof e.set=="function"}v("cloak",e=>{if(D)return e.removeAttribute(V("cloak"));queueMicrotask(()=>m(()=>e.removeAttribute(V("cloak"))))});Ti(()=>`[${V("init")}]`);v("init",P((e,{expression:t},{evaluate:i})=>typeof t=="string"?!!t.trim()&&i(t,{},!1):i(t,{},!1)));v("text",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(a=>{m(()=>{e.textContent=a})})})});v("html",(e,{expression:t},{effect:i,evaluateLater:n})=>{let r=n(t);i(()=>{r(a=>{m(()=>{Array.from(e.children).forEach(o=>X(o)),e.innerHTML=a??"",e._x_ignoreSelf=!0,T(e),delete e._x_ignoreSelf})})},{priority:"structural"})});xt(gi(":",bi(V("bind:"))));var or=(e,{value:t,modifiers:i,expression:n,original:r},{effect:a,cleanup:o})=>{if(!t){let c={};Pn(c),S(e,n)(d=>{ji(e,d,r)},{scope:c});return}if(t==="key")return Ta(e,n);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let s=S(e,n);a(()=>s(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),m(()=>Mi(e,t,c,i))})),o(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};or.inline=(e,{value:t,modifiers:i,expression:n})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:n,extract:!1})};v("bind",or);function Ta(e,t){e._x_keyExpression=t}Ri(()=>`[${V("data")}]`);var k=Symbol();v("data",(e,{expression:t},{cleanup:i})=>{if(Ia(e))return;let n=e[k];if((n==null?void 0:n.expression)===t)return;t=t===""?"{}":t;let r={};he(r,e);let a={};kn(a,r);let o=H(e,t,{scope:a});(o===void 0||o===!0)&&(o={}),he(o,e);let s;if(n!=null&&n.reactiveData){s=n.reactiveData,Oa(s,o);let l={expression:t};e[k]=l,queueMicrotask(()=>{e[k]===l&&delete e[k]})}else s=re(o);yt(s,i);let c=Se(e,s);P(()=>{s.init&&H(e,s.init)})(),i(()=>{s.destroy&&H(e,s.destroy),c();let l={reactiveData:s};e[k]=l,queueMicrotask(()=>{e[k]===l&&delete e[k]})})});function Oa(e,t){Object.keys(t).forEach(i=>{let n=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);n.get||n.set||r!=null&&r.get||r!=null&&r.set?(r&&delete e[i],r||(e[i]=void 0),n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]):e[i]=t[i]}),Object.keys(e).filter(i=>!Object.prototype.hasOwnProperty.call(t,i)).forEach(i=>delete e[i])}xe((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))});function Ia(e){return D?rt?!0:e.hasAttribute("data-has-alpine-state"):!1}v("show",(e,{modifiers:t,expression:i},{effect:n})=>{let r=S(e,i);e._x_doHide||(e._x_doHide=()=>{m(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{m(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let a=()=>{e._x_doHide(),e._x_isShown=!1},o=()=>{e._x_doShow(),e._x_isShown=!0},s=()=>setTimeout(o),c=st(u=>u?o():a(),u=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,u,o,a):u?s():a()}),l,d=!0;n(()=>r(u=>{!d&&u===l||(t.includes("immediate")&&(u?s():a()),c(u),l=u,d=!1)}))});v("for",P((e,{expression:t},{effect:i,cleanup:n})=>{let r=Da(t),a=S(e,r.items),o=S(e,e._x_keyExpression||"index");e._x_lookup=new Map,i(()=>Ma(e,r,a,o),{priority:"structural"}),n(()=>{e._x_lookup.forEach(s=>m(()=>{X(s),s.remove()})),delete e._x_lookup,delete e._x_lastRenderedEl})}));function La(e){return t=>{Object.entries(t).forEach(([i,n])=>{e[i]=n})}}function Ma(e,t,i,n){i(r=>{Fa(r)&&(r=Array.from({length:r},(l,d)=>d+1)),r==null&&(r=[]),r instanceof Set&&(r=Array.from(r)),r instanceof Map&&(r=Array.from(r));let a=e._x_lookup,o=new Map;e._x_lookup=o;let s=ka(r),c=Object.entries(r).map(([l,d])=>{s||(l=parseInt(l));let u=Pa(t,d,l,r),g;return n(b=>{typeof b=="object"&&R("x-for key cannot be an object, it must be a string or an integer",e),a.has(b)&&(o.set(b,a.get(b)),a.delete(b)),g=b},{scope:{index:l,...u}}),[g,u]});m(()=>{a.forEach(u=>{X(u),u.remove()});let l=new Set,d=e;c.forEach(([u,g])=>{if(o.has(u)){let f=o.get(u);f._x_refreshXForScope(g),d.nextElementSibling!==f&&(d.nextElementSibling&&f.replaceWith(d.nextElementSibling),d.after(f)),d=f,f._x_currentIfEl&&(f.nextElementSibling!==f._x_currentIfEl&&d.after(f._x_currentIfEl),d=f._x_currentIfEl);return}e.content.children.length>1&&R("x-for templates require a single root element, additional elements will be ignored.",e);let b=document.importNode(e.content,!0).firstElementChild,O=re(g);Se(b,O,e),b._x_refreshXForScope=La(O),o.set(u,b),l.add(b),d.after(b),d=b}),l.forEach(u=>T(u)),d!==e?e._x_lastRenderedEl=d:delete e._x_lastRenderedEl})})}function Da(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\b(?:in|of)\b([\s\S]*)/,r=e.match(n);if(!r)return;let a={};a.items=r[2].trim();let o=r[1].replace(i,"").trim(),s=o.match(t);return s?(a.item=o.replace(t,"").trim(),a.index=s[1].trim(),s[2]&&(a.collection=s[2].trim())):a.item=o,a}function Pa(e,t,i,n){let r={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,s)=>{r[o]=t[s]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{r[o]=t[o]}):r[e.item]=t,e.index&&(r[e.index]=i),e.collection&&(r[e.collection]=n),r}function Fa(e){return typeof e!="object"&&!isNaN(e)}function ka(e){return typeof e=="object"&&!Array.isArray(e)}function sr(){}sr.inline=(e,{expression:t},{cleanup:i})=>{let n=Be(e);n&&(n._x_refs||(n._x_refs={}),n._x_refs[t]=e,i(()=>delete n._x_refs[t]))};v("ref",sr);v("if",P((e,{expression:t},{effect:i,cleanup:n})=>{e.tagName.toLowerCase()!=="template"&&R("x-if can only be used on a <template> tag",e);let r=S(e,t),a=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let s=e.content.cloneNode(!0).firstElementChild;return Se(s,{},e),m(()=>{e.after(s),T(s)}),e._x_currentIfEl=s,e._x_lastRenderedEl=s,e._x_undoIf=()=>{m(()=>{X(s),s.remove()}),delete e._x_currentIfEl,delete e._x_lastRenderedEl},s},o=()=>{e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)};i(()=>r(s=>{s?a():o()}),{priority:"structural"}),n(()=>e._x_undoIf&&e._x_undoIf())}));v("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(r=>ma(e,r))});xe((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)});xt(gi("@",bi(V("on:"))));v("on",P((e,{value:t,modifiers:i,expression:n},{cleanup:r})=>{let a=n?S(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let o=ee(e,t,i,s=>{a(()=>{},{scope:{$event:s},params:[s]})});r(()=>o())}));He("Collapse","collapse","collapse");He("Intersect","intersect","intersect");He("Focus","trap","focus");He("Mask","mask","mask");function He(e,t,i){v(t,n=>R(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,n))}ae.setEvaluator(kr);ae.setRawEvaluator($r);ae.setReactivityEngine({reactive:Pt,effect:(e,t={})=>{let i;return i=zn(e,{scheduler:()=>{i&&(t.scheduler?t.scheduler(i):i())}}),i},release:Gn,raw:h});var Na=ae,cr=Na;/*! Bundled license information:

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
*/const Ba="Fictitious Persons & Entities Disclaimer: All narrative characters (including Zoë Wren Brooks, Jordan Fuller, and Daniel Brooks), bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including Vectron Energy Corp., OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events across RaggieSoft creative works are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.";function ja(){return`
    <section class="hero" aria-labelledby="dev-hero">
      <span class="eyebrow">Open-Source Software • Native Compilers • 8-Tool Studio • RaggieSoft Labs</span>
      <h1 id="dev-hero">raggiesoft.dev — Software, Compiler &amp; Systems Engineering Hub</h1>
      <p class="lead">
        Explore RaggieSoft's <strong>8-product Windows 11 <code>x64</code> &amp; <code>ARM64</code> Studio suite</strong>,
        capability-sandboxed <strong><code>RaggieScript</code> (<code>.rssc</code>)</strong> bytecode engine, experimental
        <strong><a href="/labs/finsharp"><code>Fin#</code> (<em>Financial Sharp</em>)</a></strong> linear-type accounting compiler,
        zero-database web frameworks, and deterministic AI agent specifications (<code>llms.txt</code> &amp; <code>SKILL.md</code>).
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/labs">Explore RaggieSoft Labs &amp; Fin# &rarr;</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com">RaggieSoft Studio (8 Tools)</a>
        <a class="btn btn-outline" href="https://raggiesoftstudio.com/raggiescript">RaggieScript (.rssc)</a>
        <a class="btn btn-outline" href="/ai-skills">llms.txt &amp; Agent Skills</a>
        <a class="btn btn-outline" href="https://github.com/raggiesoft">GitHub (@raggiesoft)</a>
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
            <h3>RaggieSoft Installer Studio (v0.5.0 Shipped • v0.6.0 In Lab)</h3>
            <p>
              Zero-dependency Windows packaging suite (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>,
              <code>SetupWizard.exe</code>, <code>msiprism.exe</code>, <code>RaggieSoftHelp.exe</code>) compiling plain-text
              <code>.rsip</code>/<code>.rsis</code> manifests into signed <code>.msi</code>, <code>.msm</code>, <code>.msp</code>,
              <code>sfx</code> self-extractors, and <strong>monotonic Dual-Bar Suite installers</strong>—with permanent
              <code>Community == 100% Architect</code> parity.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/installer-studio">Installer Hub</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/roadmap">v0.6&ndash;v1.0 Roadmap</a>
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
            <a class="btn btn-primary" href="/labs/finsharp">Open Fin# Compiler Lab &rarr;</a>
            <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">llms-finsharp.txt</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'compilers' || filter === 'desktop'">
          <div>
            <span class="eyebrow">Bytecode VM • &lt;200 KB Static C++20 &amp; .NET 11</span>
            <h3>RaggieScript (.rssc) &amp; Showcase _support Engine</h3>
            <p>
              One C-family curly-brace scripting language spanning all 8 RaggieSoft Studio products plus zero-prerequisite
              standalone Windows micro-apps (<code>raggiescript.exe</code>)—powering zero-MSI installers, Showcase Studio
              <code>_support\\</code> bespoke canvas installers, and sandboxed SCORM ES2022 courseware.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/raggiescript">Interactive Playground</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/showcase-studio">Showcase Studio</a>
          </div>
        </article>

        <article class="card" x-show="filter === 'all' || filter === 'desktop'">
          <div>
            <span class="eyebrow">8-Tool Suite • Community, Essentials, Developer &amp; Architect</span>
            <h3>RaggieSoft Studio Compliance, Help, Training &amp; Docs</h3>
            <p>
              Alongside Installer &amp; Showcase Studio: <strong>Accessibility Studio v1.0.0</strong> (.NET 11 + Monaco + SARIF CLI),
              <strong>Training Studio</strong> (<code>&lt;50 KB</code> proxy-proof SCORM 1.2/2004), <strong>Help Studio</strong>
              (legacy <code>.CHM</code>/<code>.hhp</code> migration &amp; <code>F1</code> IPC), <strong>Document Studio</strong>
              (Tagged <code>PDF/UA-1</code>), <strong>Localization Studio</strong>, and <strong>Launcher Studio</strong>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/editions">8-Tool Editions Matrix</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/accessibility-studio">Accessibility Studio</a>
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
  `}function Ha(){return`
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
            <span class="status-pill">Lab Track 02 • Targeting Studio v0.7.0</span>
            <h3>RaggieScript (<code>.rssc</code>) &amp; <code>RSWBC1</code> Bytecode VM</h3>
            <p>
              A deterministic C-family scripting engine compiling to compact <code>&lt;200 KB</code> static <code>/MT</code> C++20
              bytecode (plus <code>.NET 11</code> and sandboxed ES2022 targets). Powers zero-MSI setups, standalone zero-runtime
              Windows micro-utilities (<code>raggiescript.exe</code>), and unified automation across all 8 Studio tools.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="https://raggiesoftstudio.com/raggiescript">Try 5-Profile Playground &rarr;</a>
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/EDITIONS_AND_RAGGIESCRIPT.md">Spec (.md)</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 03 • Showcase Studio Community &amp; Architect</span>
            <h3>Bespoke Full-Canvas Self-Extracting Installers (<code>_support\\</code>)</h3>
            <p>
              Marries 1990s painted <code>.BMP</code> &amp; modern Windows 11 <code>FluentMica</code> multimedia canvases with
              embedded <code>_support\\</code> payload staging, <code>fs.copy</code> / <code>fs.extract</code>, Registry &amp;
              Shortcut APIs, selectable UAC manifests (<code>asInvoker</code> / <code>highestAvailable</code> /
              <code>requireAdministrator</code>), and automatic rollback journals.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/showcase-studio">Explore Showcase Studio &rarr;</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill">Lab Track 04 • Staged in Installer Studio v0.6.0</span>
            <h3>Monotonic Dual-Bar Suites &amp; <code>_ISDEL</code>-Aware <code>%TEMP%</code> SFX</h3>
            <p>
              Eliminates legacy single-bar suite sawtooth resets via byte-weighted monotonic <strong>Overall Suite Progress</strong>
              (bound 1:1 to Windows Taskbar <code>ITaskbarList3</code>) + live <strong>Current Component</strong> bars, alongside
              our standalone <code>LZMS</code> Self-Extractor (<code>rswsfx.exe</code>) that watches child cleanup helpers before
              scrubbing <code>%TEMP%</code>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="https://raggiesoftstudio.com/installer-studio/screenshots#v060-lab-previews">View Real Win32 Captures &rarr;</a>
          </div>
        </article>
      </div>
    </section>
  `}function $a(){return`
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
        <a class="btn btn-primary" href="#finsc-simulator">Try Interactive finsc Compiler Simulator &darr;</a>
        <a class="btn btn-outline" href="/labs/finsharp/llms-finsharp.txt">Open Cold-Start Compiler Spec (llms-finsharp.txt)</a>
        <a class="btn btn-outline" href="/labs">&larr; All RaggieSoft Labs</a>
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
  `}function Wa(){return`
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
  `}function Ua(){return`
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
              <th scope="row">Training Studio (<code>.rstp</code> SCORM 1.2 &amp; 2004)</th>
              <td>
                <a href="https://raggiesoftstudio.com/training-studio/llms-full.txt">llms-full.txt</a> &bull;
                <a href="https://raggiesoftstudio.com/training-studio/SKILL.md">SKILL.md</a>
              </td>
              <td>Compile bandwidth-resilient <code>&lt;50 KB</code> WCAG 2.2 AA SCORM packages and audit legacy third-party SCORM <code>.zip</code> archives.</td>
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
  `}function Va(){return`
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
  `}const zt=[{path:"/",navLabel:"Engineering Hub",seoTitle:"raggiesoft.dev — Open-Source Compilers, Studio & Labs",seoDescription:"Official RaggieSoft engineering portal: 8-tool RaggieSoft Studio, RaggieScript (.rssc), Fin# linear-type compiler lab, Stardust CMS, and llms.txt skills.",renderBody:ja},{path:"/labs",navLabel:"Labs",seoTitle:"RaggieSoft Labs — Fin#, RaggieScript & Compiler R&D",seoDescription:"Experimental R&D incubator at RaggieSoft: Fin# (Financial Sharp) linear-type double-entry compiler, RaggieScript bytecode VM, and _support\\ packagers.",renderBody:Ha},{path:"/labs/finsharp",navLabel:"Fin# Lab",seoTitle:"Fin# (Financial Sharp) — Linear-Type Accounting Compiler",seoDescription:"Explore Fin# (FinSharp): RaggieSoft Labs linear-type .NET/Roslyn financial language catching unbalanced double-entry ledgers at compile time (FIN0001).",renderBody:$a},{path:"/repositories",navLabel:"GitHub Repos",seoTitle:"Open-Source GitHub Repositories | raggiesoft.dev",seoDescription:"Browse MIT-licensed RaggieSoft repositories on GitHub: 8-tool RaggieSoft Studio, Installer Studio (C++20), Accessibility Studio, and Fin# compiler R&D.",renderBody:Wa},{path:"/ai-skills",navLabel:"llms.txt & AI Skills",seoTitle:"AI Agent Skills, llms.txt & SKILL.md | raggiesoft.dev",seoDescription:"Machine-readable llms.txt, llms-full.txt, and SKILL.md endpoints for RaggieSoft Studio, RaggieScript, Training Studio, and Fin# compiler specifications.",renderBody:Ua},{path:"/notes",navLabel:"Dev Notes",seoTitle:"Systems Architecture & Developer Notes | raggiesoft.dev",seoDescription:"Engineering dispatches on Fin# linear-type compilers, RaggieScript bytecode VMs, monotonic Dual-Bar Suite progress, and Win32 C++20 MSI packaging.",renderBody:Va}];function Ka(e){const t=zt.find(a=>a.path===e),i=zt.map(a=>{const o=a.path===e?' aria-current="page"':"";return`<li><a class="nav-link" href="${a.path}"${o}>${a.navLabel}</a></li>`}).join(""),n=t?t.renderBody():`
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
          <a href="/labs">RaggieSoft Labs</a>
          <a href="/labs/finsharp">Fin# (Financial Sharp) Lab</a>
          <a href="/repositories">GitHub Repositories</a>
          <a href="/ai-skills">llms.txt &amp; AI Skills</a>
          <a href="/notes">Dev Notes</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="https://raggiesoftstudio.com">RaggieSoft Studio (8 Tools)</a>
          <a href="https://raggiesoftstudio.com/editions">Studio Editions</a>
          <a href="https://raggiesoftstudio.com/raggiescript">RaggieScript (.rssc)</a>
          <a href="https://raggiesoftstudio.com/installer-studio">Installer Studio (v0.5.0)</a>
          <a href="https://raggiesoftstudio.com/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          <a href="https://raggiesoft.com">RaggieSoft Consumer Hub</a>
          <a href="https://michaelpragsdale.com">Michael P. Ragsdale Portfolio</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source software licensed under the MIT License.
        </p>
        <p class="disclaimer-box">${Ba}</p>
      </div>
    </footer>
  `}}const Je=document.getElementById("app");if(Je&&Je.innerHTML.includes("SSR_OUTLET")){const e=window.location.pathname.replace(/\/+$/,"")||"/";Je.innerHTML=Ka(e).html}window.Alpine=cr;cr.start();
