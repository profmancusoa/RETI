(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function xr(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gf=xr(hf);function Oc(e){return!!e||e===""}function Je(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Fe(s)?yf(s):Je(s);if(o)for(const r in o)t[r]=o[r]}return t}else{if(Fe(e))return e;if(Be(e))return e}}const _f=/;(?![^(]*\))/g,vf=/:(.+)/;function yf(e){const t={};return e.split(_f).forEach(n=>{if(n){const s=n.split(vf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Le(e){let t="";if(Fe(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const s=Le(e[n]);s&&(t+=s+" ")}else if(Be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ne(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Fe(t)&&(e.class=Le(t)),n&&(e.style=Je(n)),e}const Pt=e=>Fe(e)?e:e==null?"":ie(e)||Be(e)&&(e.toString===Cc||!pe(e.toString))?JSON.stringify(e,Vc,2):String(e),Vc=(e,t)=>t&&t.__v_isRef?Vc(e,t.value):Gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:Ac(t)?{[`Set(${t.size})`]:[...t.values()]}:Be(t)&&!ie(t)&&!Mc(t)?String(t):t,Ae={},Zn=[],St=()=>{},bf=()=>!1,Pf=/^on[^a-z]/,Fo=e=>Pf.test(e),Nr=e=>e.startsWith("onUpdate:"),st=Object.assign,Ir=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kf=Object.prototype.hasOwnProperty,ve=(e,t)=>kf.call(e,t),ie=Array.isArray,Gn=e=>Ho(e)==="[object Map]",Ac=e=>Ho(e)==="[object Set]",pe=e=>typeof e=="function",Fe=e=>typeof e=="string",Er=e=>typeof e=="symbol",Be=e=>e!==null&&typeof e=="object",Tc=e=>Be(e)&&pe(e.then)&&pe(e.catch),Cc=Object.prototype.toString,Ho=e=>Cc.call(e),wf=e=>Ho(e).slice(8,-1),Mc=e=>Ho(e)==="[object Object]",Sr=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,go=xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rf=/-(\w)/g,jt=Do(e=>e.replace(Rf,(t,n)=>n?n.toUpperCase():"")),xf=/\B([A-Z])/g,Cn=Do(e=>e.replace(xf,"-$1").toLowerCase()),jo=Do(e=>e.charAt(0).toUpperCase()+e.slice(1)),ii=Do(e=>e?`on${jo(e)}`:""),Fs=(e,t)=>!Object.is(e,t),Jn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},xo=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Oi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pa;const Nf=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pt;class zc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&pt&&(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=pt;try{return pt=this,t()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function If(e){return new zc(e)}function Ef(e,t=pt){t&&t.active&&t.effects.push(e)}function $r(){return pt}function Or(e){pt&&pt.cleanups.push(e)}const Vr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Lc=e=>(e.w&fn)>0,Fc=e=>(e.n&fn)>0,Sf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=fn},$f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Lc(o)&&!Fc(o)?o.delete(e):t[n++]=o,o.w&=~fn,o.n&=~fn}t.length=n}},Vi=new WeakMap;let ks=0,fn=1;const Ai=30;let It;const En=Symbol(""),Ti=Symbol("");class Ar{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ef(this,s)}run(){if(!this.active)return this.fn();let t=It,n=an;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=It,It=this,an=!0,fn=1<<++ks,ks<=Ai?Sf(this):ka(this),this.fn()}finally{ks<=Ai&&$f(this),fn=1<<--ks,It=this.parent,an=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(ka(this),this.onStop&&this.onStop(),this.active=!1)}}function ka(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let an=!0;const Hc=[];function as(){Hc.push(an),an=!1}function ls(){const e=Hc.pop();an=e===void 0?!0:e}function _t(e,t,n){if(an&&It){let s=Vi.get(e);s||Vi.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=Vr()),Dc(o)}}function Dc(e,t){let n=!1;ks<=Ai?Fc(e)||(e.n|=fn,n=!Lc(e)):n=!e.has(It),n&&(e.add(It),It.deps.push(e))}function Yt(e,t,n,s,o,r){const a=Vi.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&ie(e))a.forEach((c,p)=>{(p==="length"||p>=s)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":ie(e)?Sr(n)&&l.push(a.get("length")):(l.push(a.get(En)),Gn(e)&&l.push(a.get(Ti)));break;case"delete":ie(e)||(l.push(a.get(En)),Gn(e)&&l.push(a.get(Ti)));break;case"set":Gn(e)&&l.push(a.get(En));break}if(l.length===1)l[0]&&Ci(l[0]);else{const c=[];for(const p of l)p&&c.push(...p);Ci(Vr(c))}}function Ci(e,t){const n=ie(e)?e:[...e];for(const s of n)s.computed&&wa(s);for(const s of n)s.computed||wa(s)}function wa(e,t){(e!==It||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Of=xr("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Er)),Vf=Tr(),Af=Tr(!1,!0),Tf=Tr(!0),Ra=Cf();function Cf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Re(this);for(let r=0,a=this.length;r<a;r++)_t(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(Re)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){as();const s=Re(this)[t].apply(this,n);return ls(),s}}),e}function Tr(e=!1,t=!1){return function(s,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?Jf:qc:t?Uc:Wc).get(s))return s;const a=ie(s);if(!e&&a&&ve(Ra,o))return Reflect.get(Ra,o,r);const l=Reflect.get(s,o,r);return(Er(o)?jc.has(o):Of(o))||(e||_t(s,"get",o),t)?l:xe(l)?a&&Sr(o)?l:l.value:Be(l)?e?qn(l):ze(l):l}}const Mf=Kc(),zf=Kc(!0);function Kc(e=!1){return function(n,s,o,r){let a=n[s];if(Hs(a)&&xe(a)&&!xe(o))return!1;if(!e&&!Hs(o)&&(Mi(o)||(o=Re(o),a=Re(a)),!ie(n)&&xe(a)&&!xe(o)))return a.value=o,!0;const l=ie(n)&&Sr(s)?Number(s)<n.length:ve(n,s),c=Reflect.set(n,s,o,r);return n===Re(r)&&(l?Fs(o,a)&&Yt(n,"set",s,o):Yt(n,"add",s,o)),c}}function Lf(e,t){const n=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Yt(e,"delete",t,void 0),s}function Ff(e,t){const n=Reflect.has(e,t);return(!Er(t)||!jc.has(t))&&_t(e,"has",t),n}function Hf(e){return _t(e,"iterate",ie(e)?"length":En),Reflect.ownKeys(e)}const Bc={get:Vf,set:Mf,deleteProperty:Lf,has:Ff,ownKeys:Hf},Df={get:Tf,set(e,t){return!0},deleteProperty(e,t){return!0}},jf=st({},Bc,{get:Af,set:zf}),Cr=e=>e,Ko=e=>Reflect.getPrototypeOf(e);function io(e,t,n=!1,s=!1){e=e.__v_raw;const o=Re(e),r=Re(t);n||(t!==r&&_t(o,"get",t),_t(o,"get",r));const{has:a}=Ko(o),l=s?Cr:n?Lr:Ds;if(a.call(o,t))return l(e.get(t));if(a.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function ro(e,t=!1){const n=this.__v_raw,s=Re(n),o=Re(e);return t||(e!==o&&_t(s,"has",e),_t(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ao(e,t=!1){return e=e.__v_raw,!t&&_t(Re(e),"iterate",En),Reflect.get(e,"size",e)}function xa(e){e=Re(e);const t=Re(this);return Ko(t).has.call(t,e)||(t.add(e),Yt(t,"add",e,e)),this}function Na(e,t){t=Re(t);const n=Re(this),{has:s,get:o}=Ko(n);let r=s.call(n,e);r||(e=Re(e),r=s.call(n,e));const a=o.call(n,e);return n.set(e,t),r?Fs(t,a)&&Yt(n,"set",e,t):Yt(n,"add",e,t),this}function Ia(e){const t=Re(this),{has:n,get:s}=Ko(t);let o=n.call(t,e);o||(e=Re(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&Yt(t,"delete",e,void 0),r}function Ea(){const e=Re(this),t=e.size!==0,n=e.clear();return t&&Yt(e,"clear",void 0,void 0),n}function lo(e,t){return function(s,o){const r=this,a=r.__v_raw,l=Re(a),c=t?Cr:e?Lr:Ds;return!e&&_t(l,"iterate",En),a.forEach((p,f)=>s.call(o,c(p),c(f),r))}}function co(e,t,n){return function(...s){const o=this.__v_raw,r=Re(o),a=Gn(r),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=o[e](...s),f=n?Cr:t?Lr:Ds;return!t&&_t(r,"iterate",c?Ti:En),{next(){const{value:m,done:d}=p.next();return d?{value:m,done:d}:{value:l?[f(m[0]),f(m[1])]:f(m),done:d}},[Symbol.iterator](){return this}}}}function Qt(e){return function(...t){return e==="delete"?!1:this}}function Kf(){const e={get(r){return io(this,r)},get size(){return ao(this)},has:ro,add:xa,set:Na,delete:Ia,clear:Ea,forEach:lo(!1,!1)},t={get(r){return io(this,r,!1,!0)},get size(){return ao(this)},has:ro,add:xa,set:Na,delete:Ia,clear:Ea,forEach:lo(!1,!0)},n={get(r){return io(this,r,!0)},get size(){return ao(this,!0)},has(r){return ro.call(this,r,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:lo(!0,!1)},s={get(r){return io(this,r,!0,!0)},get size(){return ao(this,!0)},has(r){return ro.call(this,r,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=co(r,!1,!1),n[r]=co(r,!0,!1),t[r]=co(r,!1,!0),s[r]=co(r,!0,!0)}),[e,n,t,s]}const[Bf,Wf,Uf,qf]=Kf();function Mr(e,t){const n=t?e?qf:Uf:e?Wf:Bf;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(ve(n,o)&&o in s?n:s,o,r)}const Yf={get:Mr(!1,!1)},Zf={get:Mr(!1,!0)},Gf={get:Mr(!0,!1)},Wc=new WeakMap,Uc=new WeakMap,qc=new WeakMap,Jf=new WeakMap;function Xf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qf(e){return e.__v_skip||!Object.isExtensible(e)?0:Xf(wf(e))}function ze(e){return Hs(e)?e:zr(e,!1,Bc,Yf,Wc)}function ed(e){return zr(e,!1,jf,Zf,Uc)}function qn(e){return zr(e,!0,Df,Gf,qc)}function zr(e,t,n,s,o){if(!Be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const a=Qf(e);if(a===0)return e;const l=new Proxy(e,a===2?s:n);return o.set(e,l),l}function Xn(e){return Hs(e)?Xn(e.__v_raw):!!(e&&e.__v_isReactive)}function Hs(e){return!!(e&&e.__v_isReadonly)}function Mi(e){return!!(e&&e.__v_isShallow)}function Yc(e){return Xn(e)||Hs(e)}function Re(e){const t=e&&e.__v_raw;return t?Re(t):e}function Bo(e){return xo(e,"__v_skip",!0),e}const Ds=e=>Be(e)?ze(e):e,Lr=e=>Be(e)?qn(e):e;function Fr(e){an&&It&&(e=Re(e),Dc(e.dep||(e.dep=Vr())))}function Hr(e,t){e=Re(e),e.dep&&Ci(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function W(e){return Zc(e,!1)}function Vt(e){return Zc(e,!0)}function Zc(e,t){return xe(e)?e:new td(e,t)}class td{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Re(t),this._value=n?t:Ds(t)}get value(){return Fr(this),this._value}set value(t){t=this.__v_isShallow?t:Re(t),Fs(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ds(t),Hr(this))}}function P(e){return xe(e)?e.value:e}const nd={get:(e,t,n)=>P(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return xe(o)&&!xe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Gc(e){return Xn(e)?e:new Proxy(e,nd)}class sd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Fr(this),()=>Hr(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function od(e){return new sd(e)}function id(e){const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=ad(e,n);return t}class rd{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ad(e,t,n){const s=e[t];return xe(s)?s:new rd(e,t,n)}class ld{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ar(t,()=>{this._dirty||(this._dirty=!0,Hr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=Re(this);return Fr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cd(e,t,n=!1){let s,o;const r=pe(e);return r?(s=e,o=St):(s=e.get,o=e.set),new ld(s,o,r||!o,n)}function ln(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){Wo(r,t,n)}return o}function $t(e,t,n,s){if(pe(e)){const r=ln(e,t,n,s);return r&&Tc(r)&&r.catch(a=>{Wo(a,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push($t(e[r],t,n,s));return o}function Wo(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,l=n;for(;r;){const p=r.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,a,l)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){ln(c,null,10,[e,a,l]);return}}ud(e,n,o,s)}function ud(e,t,n,s=!0){console.error(e)}let No=!1,zi=!1;const mt=[];let Ut=0;const xs=[];let ws=null,Kn=0;const Ns=[];let tn=null,Bn=0;const Jc=Promise.resolve();let Dr=null,Li=null;function qe(e){const t=Dr||Jc;return e?t.then(this?e.bind(this):e):t}function pd(e){let t=Ut+1,n=mt.length;for(;t<n;){const s=t+n>>>1;js(mt[s])<e?t=s+1:n=s}return t}function Xc(e){(!mt.length||!mt.includes(e,No&&e.allowRecurse?Ut+1:Ut))&&e!==Li&&(e.id==null?mt.push(e):mt.splice(pd(e.id),0,e),Qc())}function Qc(){!No&&!zi&&(zi=!0,Dr=Jc.then(nu))}function fd(e){const t=mt.indexOf(e);t>Ut&&mt.splice(t,1)}function eu(e,t,n,s){ie(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),Qc()}function dd(e){eu(e,ws,xs,Kn)}function md(e){eu(e,tn,Ns,Bn)}function Uo(e,t=null){if(xs.length){for(Li=t,ws=[...new Set(xs)],xs.length=0,Kn=0;Kn<ws.length;Kn++)ws[Kn]();ws=null,Kn=0,Li=null,Uo(e,t)}}function tu(e){if(Uo(),Ns.length){const t=[...new Set(Ns)];if(Ns.length=0,tn){tn.push(...t);return}for(tn=t,tn.sort((n,s)=>js(n)-js(s)),Bn=0;Bn<tn.length;Bn++)tn[Bn]();tn=null,Bn=0}}const js=e=>e.id==null?1/0:e.id;function nu(e){zi=!1,No=!0,Uo(e),mt.sort((n,s)=>js(n)-js(s));const t=St;try{for(Ut=0;Ut<mt.length;Ut++){const n=mt[Ut];n&&n.active!==!1&&ln(n,null,14)}}finally{Ut=0,mt.length=0,tu(),No=!1,Dr=null,(mt.length||xs.length||Ns.length)&&nu(e)}}function hd(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ae;let o=n;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in s){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:d}=s[f]||Ae;d&&(o=n.map(h=>h.trim())),m&&(o=n.map(Oi))}let l,c=s[l=ii(t)]||s[l=ii(jt(t))];!c&&r&&(c=s[l=ii(Cn(t))]),c&&$t(c,e,6,o);const p=s[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$t(p,e,6,o)}}function su(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let a={},l=!1;if(!pe(e)){const c=p=>{const f=su(p,t,!0);f&&(l=!0,st(a,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(s.set(e,null),null):(ie(r)?r.forEach(c=>a[c]=null):st(a,r),s.set(e,a),a)}function qo(e,t){return!e||!Fo(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,Cn(t))||ve(e,t))}let Ze=null,Yo=null;function Io(e){const t=Ze;return Ze=e,Yo=e&&e.type.__scopeId||null,t}function ES(e){Yo=e}function SS(){Yo=null}function V(e,t=Ze,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Fa(-1);const r=Io(t),a=e(...o);return Io(r),s._d&&Fa(1),a};return s._n=!0,s._c=!0,s._d=!0,s}function ri(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[a],slots:l,attrs:c,emit:p,render:f,renderCache:m,data:d,setupState:h,ctx:g,inheritAttrs:b}=e;let y,N;const x=Io(e);try{if(n.shapeFlag&4){const I=o||s;y=Lt(f.call(I,I,m,r,h,d,g)),N=c}else{const I=t;y=Lt(I.length>1?I(r,{attrs:c,slots:l,emit:p}):I(r,null)),N=t.props?c:gd(c)}}catch(I){Es.length=0,Wo(I,e,1),y=T(dn)}let R=y;if(N&&b!==!1){const I=Object.keys(N),{shapeFlag:F}=R;I.length&&F&7&&(a&&I.some(Nr)&&(N=_d(N,a)),R=An(R,N))}return n.dirs&&(R=An(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),y=R,Io(x),y}const gd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fo(n))&&((t||(t={}))[n]=e[n]);return t},_d=(e,t)=>{const n={};for(const s in e)(!Nr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function vd(e,t,n){const{props:s,children:o,component:r}=e,{props:a,children:l,patchFlag:c}=t,p=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sa(s,a,p):!!a;if(c&8){const f=t.dynamicProps;for(let m=0;m<f.length;m++){const d=f[m];if(a[d]!==s[d]&&!qo(p,d))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?Sa(s,a,p):!0:!!a;return!1}function Sa(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!qo(n,r))return!0}return!1}function yd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ou=e=>e.__isSuspense;function bd(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):md(e)}function dt(e,t){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[e]=t}}function C(e,t,n=!1){const s=We||Ze;if(s){const o=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&pe(t)?t.call(s.proxy):t}}function Qs(e,t){return jr(e,null,t)}const $a={};function fe(e,t,n){return jr(e,t,n)}function jr(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:a}=Ae){const l=We;let c,p=!1,f=!1;if(xe(e)?(c=()=>e.value,p=Mi(e)):Xn(e)?(c=()=>e,s=!0):ie(e)?(f=!0,p=e.some(N=>Xn(N)||Mi(N)),c=()=>e.map(N=>{if(xe(N))return N.value;if(Xn(N))return Rn(N);if(pe(N))return ln(N,l,2)})):pe(e)?t?c=()=>ln(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return m&&m(),$t(e,l,3,[d])}:c=St,t&&s){const N=c;c=()=>Rn(N())}let m,d=N=>{m=y.onStop=()=>{ln(N,l,4)}};if(Bs)return d=St,t?n&&$t(t,l,3,[c(),f?[]:void 0,d]):c(),St;let h=f?[]:$a;const g=()=>{if(!!y.active)if(t){const N=y.run();(s||p||(f?N.some((x,R)=>Fs(x,h[R])):Fs(N,h)))&&(m&&m(),$t(t,l,3,[N,h===$a?void 0:h,d]),h=N)}else y.run()};g.allowRecurse=!!t;let b;o==="sync"?b=g:o==="post"?b=()=>Ue(g,l&&l.suspense):b=()=>dd(g);const y=new Ar(c,b);return t?n?g():h=y.run():o==="post"?Ue(y.run.bind(y),l&&l.suspense):y.run(),()=>{y.stop(),l&&l.scope&&Ir(l.scope.effects,y)}}function Pd(e,t,n){const s=this.proxy,o=Fe(e)?e.includes(".")?iu(s,e):()=>s[e]:e.bind(s,s);let r;pe(t)?r=t:(r=t.handler,n=t);const a=We;ss(this);const l=jr(o,r.bind(s),n);return a?ss(a):Sn(),l}function iu(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function Rn(e,t){if(!Be(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))Rn(e.value,t);else if(ie(e))for(let n=0;n<e.length;n++)Rn(e[n],t);else if(Ac(e)||Gn(e))e.forEach(n=>{Rn(n,t)});else if(Mc(e))for(const n in e)Rn(e[n],t);return e}function ru(e,t){e.shapeFlag&6&&e.component?ru(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ee(e){return pe(e)?{setup:e,name:e.name}:e}const Qn=e=>!!e.type.__asyncLoader,au=e=>e.type.__isKeepAlive,kd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Mn(),s=n.ctx;if(!s.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const o=new Map,r=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:p,um:f,o:{createElement:m}}}=s,d=m("div");s.activate=(x,R,I,F,z)=>{const B=x.component;p(x,R,I,0,l),c(B.vnode,x,R,I,B,l,F,x.slotScopeIds,z),Ue(()=>{B.isDeactivated=!1,B.a&&Jn(B.a);const te=x.props&&x.props.onVnodeMounted;te&&yt(te,B.parent,x)},l)},s.deactivate=x=>{const R=x.component;p(x,d,null,1,l),Ue(()=>{R.da&&Jn(R.da);const I=x.props&&x.props.onVnodeUnmounted;I&&yt(I,R.parent,x),R.isDeactivated=!0},l)};function h(x){ai(x),f(x,n,l,!0)}function g(x){o.forEach((R,I)=>{const F=Ui(R.type);F&&(!x||!x(F))&&b(I)})}function b(x){const R=o.get(x);!a||R.type!==a.type?h(R):a&&ai(a),o.delete(x),r.delete(x)}fe(()=>[e.include,e.exclude],([x,R])=>{x&&g(I=>Rs(x,I)),R&&g(I=>!Rs(R,I))},{flush:"post",deep:!0});let y=null;const N=()=>{y!=null&&o.set(y,li(n.subTree))};return cs(N),pu(N),Go(()=>{o.forEach(x=>{const{subTree:R,suspense:I}=n,F=li(R);if(x.type===F.type){ai(F);const z=F.component.da;z&&Ue(z,I);return}h(x)})}),()=>{if(y=null,!t.default)return null;const x=t.default(),R=x[0];if(x.length>1)return a=null,x;if(!ns(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return a=null,R;let I=li(R);const F=I.type,z=Ui(Qn(I)?I.type.__asyncResolved||{}:F),{include:B,exclude:te,max:le}=e;if(B&&(!z||!Rs(B,z))||te&&z&&Rs(te,z))return a=I,R;const ge=I.key==null?F:I.key,ye=o.get(ge);return I.el&&(I=An(I),R.shapeFlag&128&&(R.ssContent=I)),y=ge,ye?(I.el=ye.el,I.component=ye.component,I.transition&&ru(I,I.transition),I.shapeFlag|=512,r.delete(ge),r.add(ge)):(r.add(ge),le&&r.size>parseInt(le,10)&&b(r.values().next().value)),I.shapeFlag|=256,a=I,ou(R.type)?R:I}}},lu=kd;function Rs(e,t){return ie(e)?e.some(n=>Rs(n,t)):Fe(e)?e.split(",").includes(t):e.test?e.test(t):!1}function wd(e,t){cu(e,"a",t)}function Rd(e,t){cu(e,"da",t)}function cu(e,t,n=We){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Zo(t,s,n),n){let o=n.parent;for(;o&&o.parent;)au(o.parent.vnode)&&xd(s,t,n,o),o=o.parent}}function xd(e,t,n,s){const o=Zo(t,e,s,!0);Jo(()=>{Ir(s[t],o)},n)}function ai(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function li(e){return e.shapeFlag&128?e.ssContent:e}function Zo(e,t,n=We,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;as(),ss(n);const l=$t(t,n,e,a);return Sn(),ls(),l});return s?o.unshift(r):o.push(r),r}}const Gt=e=>(t,n=We)=>(!Bs||e==="sp")&&Zo(e,t,n),uu=Gt("bm"),cs=Gt("m"),Nd=Gt("bu"),pu=Gt("u"),Go=Gt("bum"),Jo=Gt("um"),Id=Gt("sp"),Ed=Gt("rtg"),Sd=Gt("rtc");function $d(e,t=We){Zo("ec",e,t)}function Kr(e,t){const n=Ze;if(n===null)return e;const s=Qo(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[a,l,c,p=Ae]=t[r];pe(a)&&(a={mounted:a,updated:a}),a.deep&&Rn(l),o.push({dir:a,instance:s,value:l,oldValue:void 0,arg:c,modifiers:p})}return e}function hn(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let a=0;a<o.length;a++){const l=o[a];r&&(l.oldValue=r[a].value);let c=l.dir[s];c&&(as(),$t(c,n,8,[e.el,l,e,t]),ls())}}const fu="components";function Fi(e,t){return Vd(fu,e,!0,t)||e}const Od=Symbol();function Vd(e,t,n=!0,s=!1){const o=Ze||We;if(o){const r=o.type;if(e===fu){const l=Ui(r,!1);if(l&&(l===t||l===jt(t)||l===jo(jt(t))))return r}const a=Oa(o[e]||r[e],t)||Oa(o.appContext[e],t);return!a&&s?r:a}}function Oa(e,t){return e&&(e[t]||e[jt(t)]||e[jo(jt(t))])}function eo(e,t,n,s){let o;const r=n&&n[s];if(ie(e)||Fe(e)){o=new Array(e.length);for(let a=0,l=e.length;a<l;a++)o[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r&&r[a])}else if(Be(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,r&&r[l]));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const p=a[l];o[l]=t(e[p],p,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}function Zt(e,t,n={},s,o){if(Ze.isCE||Ze.parent&&Qn(Ze.parent)&&Ze.parent.isCE)return T("slot",t==="default"?null:{name:t},s&&s());let r=e[t];r&&r._c&&(r._d=!1),k();const a=r&&du(r(n)),l=D(Ne,{key:n.key||`_${t}`},a||(s?s():[]),a&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function du(e){return e.some(t=>ns(t)?!(t.type===dn||t.type===Ne&&!du(t.children)):!0)?e:null}const Hi=e=>e?Ru(e)?Qo(e)||e.proxy:Hi(e.parent):null,Eo=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hi(e.parent),$root:e=>Hi(e.root),$emit:e=>e.emit,$options:e=>hu(e),$forceUpdate:e=>e.f||(e.f=()=>Xc(e.update)),$nextTick:e=>e.n||(e.n=qe.bind(e.proxy)),$watch:e=>Pd.bind(e)}),Ad={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:a,type:l,appContext:c}=e;let p;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(s!==Ae&&ve(s,t))return a[t]=1,s[t];if(o!==Ae&&ve(o,t))return a[t]=2,o[t];if((p=e.propsOptions[0])&&ve(p,t))return a[t]=3,r[t];if(n!==Ae&&ve(n,t))return a[t]=4,n[t];Di&&(a[t]=0)}}const f=Eo[t];let m,d;if(f)return t==="$attrs"&&_t(e,"get",t),f(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Ae&&ve(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,ve(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return o!==Ae&&ve(o,t)?(o[t]=n,!0):s!==Ae&&ve(s,t)?(s[t]=n,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},a){let l;return!!n[a]||e!==Ae&&ve(e,a)||t!==Ae&&ve(t,a)||(l=r[0])&&ve(l,a)||ve(s,a)||ve(Eo,a)||ve(o.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Di=!0;function Td(e){const t=hu(e),n=e.proxy,s=e.ctx;Di=!1,t.beforeCreate&&Va(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:a,watch:l,provide:c,inject:p,created:f,beforeMount:m,mounted:d,beforeUpdate:h,updated:g,activated:b,deactivated:y,beforeDestroy:N,beforeUnmount:x,destroyed:R,unmounted:I,render:F,renderTracked:z,renderTriggered:B,errorCaptured:te,serverPrefetch:le,expose:ge,inheritAttrs:ye,components:Me,directives:He,filters:Ye}=t;if(p&&Cd(p,s,null,e.appContext.config.unwrapInjectedRef),a)for(const re in a){const Q=a[re];pe(Q)&&(s[re]=Q.bind(n))}if(o){const re=o.call(n,n);Be(re)&&(e.data=ze(re))}if(Di=!0,r)for(const re in r){const Q=r[re],_e=pe(Q)?Q.bind(n,n):pe(Q.get)?Q.get.bind(n,n):St,Mt=!pe(Q)&&pe(Q.set)?Q.set.bind(n):St,Xe=E({get:_e,set:Mt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:vt=>Xe.value=vt})}if(l)for(const re in l)mu(l[re],s,n,re);if(c){const re=pe(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Q=>{dt(Q,re[Q])})}f&&Va(f,e,"c");function se(re,Q){ie(Q)?Q.forEach(_e=>re(_e.bind(n))):Q&&re(Q.bind(n))}if(se(uu,m),se(cs,d),se(Nd,h),se(pu,g),se(wd,b),se(Rd,y),se($d,te),se(Sd,z),se(Ed,B),se(Go,x),se(Jo,I),se(Id,le),ie(ge))if(ge.length){const re=e.exposed||(e.exposed={});ge.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:_e=>n[Q]=_e})})}else e.exposed||(e.exposed={});F&&e.render===St&&(e.render=F),ye!=null&&(e.inheritAttrs=ye),Me&&(e.components=Me),He&&(e.directives=He)}function Cd(e,t,n=St,s=!1){ie(e)&&(e=ji(e));for(const o in e){const r=e[o];let a;Be(r)?"default"in r?a=C(r.from||o,r.default,!0):a=C(r.from||o):a=C(r),xe(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[o]=a}}function Va(e,t,n){$t(ie(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function mu(e,t,n,s){const o=s.includes(".")?iu(n,s):()=>n[s];if(Fe(e)){const r=t[e];pe(r)&&fe(o,r)}else if(pe(e))fe(o,e.bind(n));else if(Be(e))if(ie(e))e.forEach(r=>mu(r,t,n,s));else{const r=pe(e.handler)?e.handler.bind(n):t[e.handler];pe(r)&&fe(o,r,e)}}function hu(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(p=>So(c,p,a,!0)),So(c,t,a)),r.set(t,c),c}function So(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&So(e,r,n,!0),o&&o.forEach(a=>So(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const l=Md[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Md={data:Aa,props:yn,emits:yn,methods:yn,computed:yn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:yn,directives:yn,watch:Ld,provide:Aa,inject:zd};function Aa(e,t){return t?e?function(){return st(pe(e)?e.call(this,this):e,pe(t)?t.call(this,this):t)}:t:e}function zd(e,t){return yn(ji(e),ji(t))}function ji(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function yn(e,t){return e?st(st(Object.create(null),e),t):t}function Ld(e,t){if(!e)return t;if(!t)return e;const n=st(Object.create(null),e);for(const s in t)n[s]=Qe(e[s],t[s]);return n}function Fd(e,t,n,s=!1){const o={},r={};xo(r,Xo,1),e.propsDefaults=Object.create(null),gu(e,t,o,r);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:ed(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Hd(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:a}}=e,l=Re(o),[c]=e.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let d=f[m];if(qo(e.emitsOptions,d))continue;const h=t[d];if(c)if(ve(r,d))h!==r[d]&&(r[d]=h,p=!0);else{const g=jt(d);o[g]=Ki(c,l,g,h,e,!1)}else h!==r[d]&&(r[d]=h,p=!0)}}}else{gu(e,t,o,r)&&(p=!0);let f;for(const m in l)(!t||!ve(t,m)&&((f=Cn(m))===m||!ve(t,f)))&&(c?n&&(n[m]!==void 0||n[f]!==void 0)&&(o[m]=Ki(c,l,m,void 0,e,!0)):delete o[m]);if(r!==l)for(const m in r)(!t||!ve(t,m)&&!0)&&(delete r[m],p=!0)}p&&Yt(e,"set","$attrs")}function gu(e,t,n,s){const[o,r]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(go(c))continue;const p=t[c];let f;o&&ve(o,f=jt(c))?!r||!r.includes(f)?n[f]=p:(l||(l={}))[f]=p:qo(e.emitsOptions,c)||(!(c in s)||p!==s[c])&&(s[c]=p,a=!0)}if(r){const c=Re(n),p=l||Ae;for(let f=0;f<r.length;f++){const m=r[f];n[m]=Ki(o,c,m,p[m],e,!ve(p,m))}}return a}function Ki(e,t,n,s,o,r){const a=e[n];if(a!=null){const l=ve(a,"default");if(l&&s===void 0){const c=a.default;if(a.type!==Function&&pe(c)){const{propsDefaults:p}=o;n in p?s=p[n]:(ss(o),s=p[n]=c.call(null,t),Sn())}else s=c}a[0]&&(r&&!l?s=!1:a[1]&&(s===""||s===Cn(n))&&(s=!0))}return s}function _u(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,a={},l=[];let c=!1;if(!pe(e)){const f=m=>{c=!0;const[d,h]=_u(m,t,!0);st(a,d),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!c)return s.set(e,Zn),Zn;if(ie(r))for(let f=0;f<r.length;f++){const m=jt(r[f]);Ta(m)&&(a[m]=Ae)}else if(r)for(const f in r){const m=jt(f);if(Ta(m)){const d=r[f],h=a[m]=ie(d)||pe(d)?{type:d}:d;if(h){const g=za(Boolean,h.type),b=za(String,h.type);h[0]=g>-1,h[1]=b<0||g<b,(g>-1||ve(h,"default"))&&l.push(m)}}}const p=[a,l];return s.set(e,p),p}function Ta(e){return e[0]!=="$"}function Ca(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ma(e,t){return Ca(e)===Ca(t)}function za(e,t){return ie(t)?t.findIndex(n=>Ma(n,e)):pe(t)&&Ma(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",Br=e=>ie(e)?e.map(Lt):[Lt(e)],Dd=(e,t,n)=>{if(t._n)return t;const s=V((...o)=>Br(t(...o)),n);return s._c=!1,s},yu=(e,t,n)=>{const s=e._ctx;for(const o in e){if(vu(o))continue;const r=e[o];if(pe(r))t[o]=Dd(o,r,s);else if(r!=null){const a=Br(r);t[o]=()=>a}}},bu=(e,t)=>{const n=Br(t);e.slots.default=()=>n},jd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Re(t),xo(t,"_",n)):yu(t,e.slots={})}else e.slots={},t&&bu(e,t);xo(e.slots,Xo,1)},Kd=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,a=Ae;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(st(o,t),!n&&l===1&&delete o._):(r=!t.$stable,yu(t,o)),a=t}else t&&(bu(e,t),a={default:1});if(r)for(const l in o)!vu(l)&&!(l in a)&&delete o[l]};function Pu(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bd=0;function Wd(e,t){return function(s,o=null){pe(s)||(s=Object.assign({},s)),o!=null&&!Be(o)&&(o=null);const r=Pu(),a=new Set;let l=!1;const c=r.app={_uid:Bd++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:cm,get config(){return r.config},set config(p){},use(p,...f){return a.has(p)||(p&&pe(p.install)?(a.add(p),p.install(c,...f)):pe(p)&&(a.add(p),p(c,...f))),c},mixin(p){return r.mixins.includes(p)||r.mixins.push(p),c},component(p,f){return f?(r.components[p]=f,c):r.components[p]},directive(p,f){return f?(r.directives[p]=f,c):r.directives[p]},mount(p,f,m){if(!l){const d=T(s,o);return d.appContext=r,f&&t?t(d,p):e(d,p,m),l=!0,c._container=p,p.__vue_app__=c,Qo(d.component)||d.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(p,f){return r.provides[p]=f,c}};return c}}function Bi(e,t,n,s,o=!1){if(ie(e)){e.forEach((d,h)=>Bi(d,t&&(ie(t)?t[h]:t),n,s,o));return}if(Qn(s)&&!o)return;const r=s.shapeFlag&4?Qo(s.component)||s.component.proxy:s.el,a=o?null:r,{i:l,r:c}=e,p=t&&t.r,f=l.refs===Ae?l.refs={}:l.refs,m=l.setupState;if(p!=null&&p!==c&&(Fe(p)?(f[p]=null,ve(m,p)&&(m[p]=null)):xe(p)&&(p.value=null)),pe(c))ln(c,l,12,[a,f]);else{const d=Fe(c),h=xe(c);if(d||h){const g=()=>{if(e.f){const b=d?f[c]:c.value;o?ie(b)&&Ir(b,r):ie(b)?b.includes(r)||b.push(r):d?(f[c]=[r],ve(m,c)&&(m[c]=f[c])):(c.value=[r],e.k&&(f[e.k]=c.value))}else d?(f[c]=a,ve(m,c)&&(m[c]=a)):h&&(c.value=a,e.k&&(f[e.k]=a))};a?(g.id=-1,Ue(g,n)):g()}}}const Ue=bd;function Ud(e){return qd(e)}function qd(e,t){const n=Nf();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:a,createText:l,createComment:c,setText:p,setElementText:f,parentNode:m,nextSibling:d,setScopeId:h=St,cloneNode:g,insertStaticContent:b}=e,y=(_,v,w,O=null,$=null,H=null,U=!1,L=null,j=!!v.dynamicChildren)=>{if(_===v)return;_&&!ms(_,v)&&(O=Z(_),it(_,$,H,!0),_=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:A,ref:J,shapeFlag:G}=v;switch(A){case Ur:N(_,v,w,O);break;case dn:x(_,v,w,O);break;case ci:_==null&&R(v,w,O,U);break;case Ne:He(_,v,w,O,$,H,U,L,j);break;default:G&1?z(_,v,w,O,$,H,U,L,j):G&6?Ye(_,v,w,O,$,H,U,L,j):(G&64||G&128)&&A.process(_,v,w,O,$,H,U,L,j,Te)}J!=null&&$&&Bi(J,_&&_.ref,H,v||_,!v)},N=(_,v,w,O)=>{if(_==null)s(v.el=l(v.children),w,O);else{const $=v.el=_.el;v.children!==_.children&&p($,v.children)}},x=(_,v,w,O)=>{_==null?s(v.el=c(v.children||""),w,O):v.el=_.el},R=(_,v,w,O)=>{[_.el,_.anchor]=b(_.children,v,w,O,_.el,_.anchor)},I=({el:_,anchor:v},w,O)=>{let $;for(;_&&_!==v;)$=d(_),s(_,w,O),_=$;s(v,w,O)},F=({el:_,anchor:v})=>{let w;for(;_&&_!==v;)w=d(_),o(_),_=w;o(v)},z=(_,v,w,O,$,H,U,L,j)=>{U=U||v.type==="svg",_==null?B(v,w,O,$,H,U,L,j):ge(_,v,$,H,U,L,j)},B=(_,v,w,O,$,H,U,L)=>{let j,A;const{type:J,props:G,shapeFlag:X,transition:ae,patchFlag:be,dirs:$e}=_;if(_.el&&g!==void 0&&be===-1)j=_.el=g(_.el);else{if(j=_.el=a(_.type,H,G&&G.is,G),X&8?f(j,_.children):X&16&&le(_.children,j,null,O,$,H&&J!=="foreignObject",U,L),$e&&hn(_,null,O,"created"),G){for(const Ce in G)Ce!=="value"&&!go(Ce)&&r(j,Ce,null,G[Ce],H,_.children,O,$,M);"value"in G&&r(j,"value",null,G.value),(A=G.onVnodeBeforeMount)&&yt(A,O,_)}te(j,_,_.scopeId,U,O)}$e&&hn(_,null,O,"beforeMount");const Oe=(!$||$&&!$.pendingBranch)&&ae&&!ae.persisted;Oe&&ae.beforeEnter(j),s(j,v,w),((A=G&&G.onVnodeMounted)||Oe||$e)&&Ue(()=>{A&&yt(A,O,_),Oe&&ae.enter(j),$e&&hn(_,null,O,"mounted")},$)},te=(_,v,w,O,$)=>{if(w&&h(_,w),O)for(let H=0;H<O.length;H++)h(_,O[H]);if($){let H=$.subTree;if(v===H){const U=$.vnode;te(_,U,U.scopeId,U.slotScopeIds,$.parent)}}},le=(_,v,w,O,$,H,U,L,j=0)=>{for(let A=j;A<_.length;A++){const J=_[A]=L?nn(_[A]):Lt(_[A]);y(null,J,v,w,O,$,H,U,L)}},ge=(_,v,w,O,$,H,U)=>{const L=v.el=_.el;let{patchFlag:j,dynamicChildren:A,dirs:J}=v;j|=_.patchFlag&16;const G=_.props||Ae,X=v.props||Ae;let ae;w&&gn(w,!1),(ae=X.onVnodeBeforeUpdate)&&yt(ae,w,v,_),J&&hn(v,_,w,"beforeUpdate"),w&&gn(w,!0);const be=$&&v.type!=="foreignObject";if(A?ye(_.dynamicChildren,A,L,w,O,be,H):U||_e(_,v,L,null,w,O,be,H,!1),j>0){if(j&16)Me(L,v,G,X,w,O,$);else if(j&2&&G.class!==X.class&&r(L,"class",null,X.class,$),j&4&&r(L,"style",G.style,X.style,$),j&8){const $e=v.dynamicProps;for(let Oe=0;Oe<$e.length;Oe++){const Ce=$e[Oe],Rt=G[Ce],Fn=X[Ce];(Fn!==Rt||Ce==="value")&&r(L,Ce,Rt,Fn,$,_.children,w,O,M)}}j&1&&_.children!==v.children&&f(L,v.children)}else!U&&A==null&&Me(L,v,G,X,w,O,$);((ae=X.onVnodeUpdated)||J)&&Ue(()=>{ae&&yt(ae,w,v,_),J&&hn(v,_,w,"updated")},O)},ye=(_,v,w,O,$,H,U)=>{for(let L=0;L<v.length;L++){const j=_[L],A=v[L],J=j.el&&(j.type===Ne||!ms(j,A)||j.shapeFlag&70)?m(j.el):w;y(j,A,J,null,O,$,H,U,!0)}},Me=(_,v,w,O,$,H,U)=>{if(w!==O){for(const L in O){if(go(L))continue;const j=O[L],A=w[L];j!==A&&L!=="value"&&r(_,L,A,j,U,v.children,$,H,M)}if(w!==Ae)for(const L in w)!go(L)&&!(L in O)&&r(_,L,w[L],null,U,v.children,$,H,M);"value"in O&&r(_,"value",w.value,O.value)}},He=(_,v,w,O,$,H,U,L,j)=>{const A=v.el=_?_.el:l(""),J=v.anchor=_?_.anchor:l("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:ae}=v;ae&&(L=L?L.concat(ae):ae),_==null?(s(A,w,O),s(J,w,O),le(v.children,w,J,$,H,U,L,j)):G>0&&G&64&&X&&_.dynamicChildren?(ye(_.dynamicChildren,X,w,$,H,U,L),(v.key!=null||$&&v===$.subTree)&&Wr(_,v,!0)):_e(_,v,w,J,$,H,U,L,j)},Ye=(_,v,w,O,$,H,U,L,j)=>{v.slotScopeIds=L,_==null?v.shapeFlag&512?$.ctx.activate(v,w,O,U,j):Se(v,w,O,$,H,U,j):se(_,v,j)},Se=(_,v,w,O,$,H,U)=>{const L=_.component=sm(_,O,$);if(au(_)&&(L.ctx.renderer=Te),om(L),L.asyncDep){if($&&$.registerDep(L,re),!_.el){const j=L.subTree=T(dn);x(null,j,v,w)}return}re(L,_,v,w,$,H,U)},se=(_,v,w)=>{const O=v.component=_.component;if(vd(_,v,w))if(O.asyncDep&&!O.asyncResolved){Q(O,v,w);return}else O.next=v,fd(O.update),O.update();else v.el=_.el,O.vnode=v},re=(_,v,w,O,$,H,U)=>{const L=()=>{if(_.isMounted){let{next:J,bu:G,u:X,parent:ae,vnode:be}=_,$e=J,Oe;gn(_,!1),J?(J.el=be.el,Q(_,J,U)):J=be,G&&Jn(G),(Oe=J.props&&J.props.onVnodeBeforeUpdate)&&yt(Oe,ae,J,be),gn(_,!0);const Ce=ri(_),Rt=_.subTree;_.subTree=Ce,y(Rt,Ce,m(Rt.el),Z(Rt),_,$,H),J.el=Ce.el,$e===null&&yd(_,Ce.el),X&&Ue(X,$),(Oe=J.props&&J.props.onVnodeUpdated)&&Ue(()=>yt(Oe,ae,J,be),$)}else{let J;const{el:G,props:X}=v,{bm:ae,m:be,parent:$e}=_,Oe=Qn(v);if(gn(_,!1),ae&&Jn(ae),!Oe&&(J=X&&X.onVnodeBeforeMount)&&yt(J,$e,v),gn(_,!0),G&&de){const Ce=()=>{_.subTree=ri(_),de(G,_.subTree,_,$,null)};Oe?v.type.__asyncLoader().then(()=>!_.isUnmounted&&Ce()):Ce()}else{const Ce=_.subTree=ri(_);y(null,Ce,w,O,_,$,H),v.el=Ce.el}if(be&&Ue(be,$),!Oe&&(J=X&&X.onVnodeMounted)){const Ce=v;Ue(()=>yt(J,$e,Ce),$)}(v.shapeFlag&256||$e&&Qn($e.vnode)&&$e.vnode.shapeFlag&256)&&_.a&&Ue(_.a,$),_.isMounted=!0,v=w=O=null}},j=_.effect=new Ar(L,()=>Xc(A),_.scope),A=_.update=()=>j.run();A.id=_.uid,gn(_,!0),A()},Q=(_,v,w)=>{v.component=_;const O=_.vnode.props;_.vnode=v,_.next=null,Hd(_,v.props,O,w),Kd(_,v.children,w),as(),Uo(void 0,_.update),ls()},_e=(_,v,w,O,$,H,U,L,j=!1)=>{const A=_&&_.children,J=_?_.shapeFlag:0,G=v.children,{patchFlag:X,shapeFlag:ae}=v;if(X>0){if(X&128){Xe(A,G,w,O,$,H,U,L,j);return}else if(X&256){Mt(A,G,w,O,$,H,U,L,j);return}}ae&8?(J&16&&M(A,$,H),G!==A&&f(w,G)):J&16?ae&16?Xe(A,G,w,O,$,H,U,L,j):M(A,$,H,!0):(J&8&&f(w,""),ae&16&&le(G,w,O,$,H,U,L,j))},Mt=(_,v,w,O,$,H,U,L,j)=>{_=_||Zn,v=v||Zn;const A=_.length,J=v.length,G=Math.min(A,J);let X;for(X=0;X<G;X++){const ae=v[X]=j?nn(v[X]):Lt(v[X]);y(_[X],ae,w,null,$,H,U,L,j)}A>J?M(_,$,H,!0,!1,G):le(v,w,O,$,H,U,L,j,G)},Xe=(_,v,w,O,$,H,U,L,j)=>{let A=0;const J=v.length;let G=_.length-1,X=J-1;for(;A<=G&&A<=X;){const ae=_[A],be=v[A]=j?nn(v[A]):Lt(v[A]);if(ms(ae,be))y(ae,be,w,null,$,H,U,L,j);else break;A++}for(;A<=G&&A<=X;){const ae=_[G],be=v[X]=j?nn(v[X]):Lt(v[X]);if(ms(ae,be))y(ae,be,w,null,$,H,U,L,j);else break;G--,X--}if(A>G){if(A<=X){const ae=X+1,be=ae<J?v[ae].el:O;for(;A<=X;)y(null,v[A]=j?nn(v[A]):Lt(v[A]),w,be,$,H,U,L,j),A++}}else if(A>X)for(;A<=G;)it(_[A],$,H,!0),A++;else{const ae=A,be=A,$e=new Map;for(A=be;A<=X;A++){const lt=v[A]=j?nn(v[A]):Lt(v[A]);lt.key!=null&&$e.set(lt.key,A)}let Oe,Ce=0;const Rt=X-be+1;let Fn=!1,va=0;const ds=new Array(Rt);for(A=0;A<Rt;A++)ds[A]=0;for(A=ae;A<=G;A++){const lt=_[A];if(Ce>=Rt){it(lt,$,H,!0);continue}let zt;if(lt.key!=null)zt=$e.get(lt.key);else for(Oe=be;Oe<=X;Oe++)if(ds[Oe-be]===0&&ms(lt,v[Oe])){zt=Oe;break}zt===void 0?it(lt,$,H,!0):(ds[zt-be]=A+1,zt>=va?va=zt:Fn=!0,y(lt,v[zt],w,null,$,H,U,L,j),Ce++)}const ya=Fn?Yd(ds):Zn;for(Oe=ya.length-1,A=Rt-1;A>=0;A--){const lt=be+A,zt=v[lt],ba=lt+1<J?v[lt+1].el:O;ds[A]===0?y(null,zt,w,ba,$,H,U,L,j):Fn&&(Oe<0||A!==ya[Oe]?vt(zt,w,ba,2):Oe--)}}},vt=(_,v,w,O,$=null)=>{const{el:H,type:U,transition:L,children:j,shapeFlag:A}=_;if(A&6){vt(_.component.subTree,v,w,O);return}if(A&128){_.suspense.move(v,w,O);return}if(A&64){U.move(_,v,w,Te);return}if(U===Ne){s(H,v,w);for(let G=0;G<j.length;G++)vt(j[G],v,w,O);s(_.anchor,v,w);return}if(U===ci){I(_,v,w);return}if(O!==2&&A&1&&L)if(O===0)L.beforeEnter(H),s(H,v,w),Ue(()=>L.enter(H),$);else{const{leave:G,delayLeave:X,afterLeave:ae}=L,be=()=>s(H,v,w),$e=()=>{G(H,()=>{be(),ae&&ae()})};X?X(H,be,$e):$e()}else s(H,v,w)},it=(_,v,w,O=!1,$=!1)=>{const{type:H,props:U,ref:L,children:j,dynamicChildren:A,shapeFlag:J,patchFlag:G,dirs:X}=_;if(L!=null&&Bi(L,null,w,_,!0),J&256){v.ctx.deactivate(_);return}const ae=J&1&&X,be=!Qn(_);let $e;if(be&&($e=U&&U.onVnodeBeforeUnmount)&&yt($e,v,_),J&6)Y(_.component,w,O);else{if(J&128){_.suspense.unmount(w,O);return}ae&&hn(_,null,v,"beforeUnmount"),J&64?_.type.remove(_,v,w,$,Te,O):A&&(H!==Ne||G>0&&G&64)?M(A,v,w,!1,!0):(H===Ne&&G&384||!$&&J&16)&&M(j,v,w),O&&Xt(_)}(be&&($e=U&&U.onVnodeUnmounted)||ae)&&Ue(()=>{$e&&yt($e,v,_),ae&&hn(_,null,v,"unmounted")},w)},Xt=_=>{const{type:v,el:w,anchor:O,transition:$}=_;if(v===Ne){S(w,O);return}if(v===ci){F(_);return}const H=()=>{o(w),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(_.shapeFlag&1&&$&&!$.persisted){const{leave:U,delayLeave:L}=$,j=()=>U(w,H);L?L(_.el,H,j):j()}else H()},S=(_,v)=>{let w;for(;_!==v;)w=d(_),o(_),_=w;o(v)},Y=(_,v,w)=>{const{bum:O,scope:$,update:H,subTree:U,um:L}=_;O&&Jn(O),$.stop(),H&&(H.active=!1,it(U,_,v,w)),L&&Ue(L,v),Ue(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},M=(_,v,w,O=!1,$=!1,H=0)=>{for(let U=H;U<_.length;U++)it(_[U],v,w,O,$)},Z=_=>_.shapeFlag&6?Z(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),Pe=(_,v,w)=>{_==null?v._vnode&&it(v._vnode,null,null,!0):y(v._vnode||null,_,v,null,null,null,w),tu(),v._vnode=_},Te={p:y,um:it,m:vt,r:Xt,mt:Se,mc:le,pc:_e,pbc:ye,n:Z,o:e};let me,de;return t&&([me,de]=t(Te)),{render:Pe,hydrate:me,createApp:Wd(Pe,me)}}function gn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wr(e,t,n=!1){const s=e.children,o=t.children;if(ie(s)&&ie(o))for(let r=0;r<s.length;r++){const a=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=nn(o[r]),l.el=a.el),n||Wr(a,l))}}function Yd(e){const t=e.slice(),n=[0];let s,o,r,a,l;const c=e.length;for(s=0;s<c;s++){const p=e[s];if(p!==0){if(o=n[n.length-1],e[o]<p){t[s]=o,n.push(s);continue}for(r=0,a=n.length-1;r<a;)l=r+a>>1,e[n[l]]<p?r=l+1:a=l;p<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}const Zd=e=>e.__isTeleport,Is=e=>e&&(e.disabled||e.disabled===""),La=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Wi=(e,t)=>{const n=e&&e.to;return Fe(n)?t?t(n):null:n},Gd={__isTeleport:!0,process(e,t,n,s,o,r,a,l,c,p){const{mc:f,pc:m,pbc:d,o:{insert:h,querySelector:g,createText:b,createComment:y}}=p,N=Is(t.props);let{shapeFlag:x,children:R,dynamicChildren:I}=t;if(e==null){const F=t.el=b(""),z=t.anchor=b("");h(F,n,s),h(z,n,s);const B=t.target=Wi(t.props,g),te=t.targetAnchor=b("");B&&(h(te,B),a=a||La(B));const le=(ge,ye)=>{x&16&&f(R,ge,ye,o,r,a,l,c)};N?le(n,z):B&&le(B,te)}else{t.el=e.el;const F=t.anchor=e.anchor,z=t.target=e.target,B=t.targetAnchor=e.targetAnchor,te=Is(e.props),le=te?n:z,ge=te?F:B;if(a=a||La(z),I?(d(e.dynamicChildren,I,le,o,r,a,l),Wr(e,t,!0)):c||m(e,t,le,ge,o,r,a,l,!1),N)te||uo(t,n,F,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ye=t.target=Wi(t.props,g);ye&&uo(t,ye,null,p,0)}else te&&uo(t,z,B,p,1)}},remove(e,t,n,s,{um:o,o:{remove:r}},a){const{shapeFlag:l,children:c,anchor:p,targetAnchor:f,target:m,props:d}=e;if(m&&r(f),(a||!Is(d))&&(r(p),l&16))for(let h=0;h<c.length;h++){const g=c[h];o(g,t,n,!0,!!g.dynamicChildren)}},move:uo,hydrate:Jd};function uo(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:p,props:f}=e,m=r===2;if(m&&s(a,t,n),(!m||Is(f))&&c&16)for(let d=0;d<p.length;d++)o(p[d],t,n,2);m&&s(l,t,n)}function Jd(e,t,n,s,o,r,{o:{nextSibling:a,parentNode:l,querySelector:c}},p){const f=t.target=Wi(t.props,c);if(f){const m=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Is(t.props))t.anchor=p(a(e),t,l(e),n,s,o,r),t.targetAnchor=m;else{t.anchor=a(e);let d=m;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,f._lpa=t.targetAnchor&&a(t.targetAnchor);break}p(m,t,f,n,s,o,r)}}return t.anchor&&a(t.anchor)}const Xd=Gd,Ne=Symbol(void 0),Ur=Symbol(void 0),dn=Symbol(void 0),ci=Symbol(void 0),Es=[];let Et=null;function k(e=!1){Es.push(Et=e?null:[])}function Qd(){Es.pop(),Et=Es[Es.length-1]||null}let Ks=1;function Fa(e){Ks+=e}function ku(e){return e.dynamicChildren=Ks>0?Et||Zn:null,Qd(),Ks>0&&Et&&Et.push(e),e}function q(e,t,n,s,o,r){return ku(i(e,t,n,s,o,r,!0))}function D(e,t,n,s,o){return ku(T(e,t,n,s,o,!0))}function ns(e){return e?e.__v_isVNode===!0:!1}function ms(e,t){return e.type===t.type&&e.key===t.key}const Xo="__vInternal",wu=({key:e})=>e!=null?e:null,_o=({ref:e,ref_key:t,ref_for:n})=>e!=null?Fe(e)||xe(e)||pe(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function i(e,t=null,n=null,s=0,o=null,r=e===Ne?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wu(t),ref:t&&_o(t),scopeId:Yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(qr(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Ks>0&&!a&&Et&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Et.push(c),c}const T=em;function em(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Od)&&(e=dn),ns(e)){const l=An(e,t,!0);return n&&qr(l,n),Ks>0&&!r&&Et&&(l.shapeFlag&6?Et[Et.indexOf(e)]=l:Et.push(l)),l.patchFlag|=-2,l}if(lm(e)&&(e=e.__vccOpts),t){t=ee(t);let{class:l,style:c}=t;l&&!Fe(l)&&(t.class=Le(l)),Be(c)&&(Yc(c)&&!ie(c)&&(c=st({},c)),t.style=Je(c))}const a=Fe(e)?1:ou(e)?128:Zd(e)?64:Be(e)?4:pe(e)?2:0;return i(e,t,n,s,o,a,r,!0)}function ee(e){return e?Yc(e)||Xo in e?st({},e):e:null}function An(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:a}=e,l=t?ce(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&wu(l),ref:t&&t.ref?n&&o?ie(o)?o.concat(_o(t)):[o,_o(t)]:_o(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),el:e.el,anchor:e.anchor}}function u(e=" ",t=0){return T(Ur,null,e,t)}function he(e="",t=!1){return t?(k(),D(dn,null,e)):T(dn,null,e)}function Lt(e){return e==null||typeof e=="boolean"?T(dn):ie(e)?T(Ne,null,e.slice()):typeof e=="object"?nn(e):T(Ur,null,String(e))}function nn(e){return e.el===null||e.memo?e:An(e)}function qr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),qr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Xo in t)?t._ctx=Ze:o===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else pe(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),s&64?(n=16,t=[u(t)]):n=8);e.children=t,e.shapeFlag|=n}function ce(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Le([t.class,s.class]));else if(o==="style")t.style=Je([t.style,s.style]);else if(Fo(o)){const r=t[o],a=s[o];a&&r!==a&&!(ie(r)&&r.includes(a))&&(t[o]=r?[].concat(r,a):a)}else o!==""&&(t[o]=s[o])}return t}function yt(e,t,n,s=null){$t(e,t,7,[n,s])}const tm=Pu();let nm=0;function sm(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||tm,r={uid:nm++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new zc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_u(s,o),emitsOptions:su(s,o),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=hd.bind(null,r),e.ce&&e.ce(r),r}let We=null;const Mn=()=>We||Ze,ss=e=>{We=e,e.scope.on()},Sn=()=>{We&&We.scope.off(),We=null};function Ru(e){return e.vnode.shapeFlag&4}let Bs=!1;function om(e,t=!1){Bs=t;const{props:n,children:s}=e.vnode,o=Ru(e);Fd(e,n,o,t),jd(e,s);const r=o?im(e,t):void 0;return Bs=!1,r}function im(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Bo(new Proxy(e.ctx,Ad));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?am(e):null;ss(e),as();const r=ln(s,e,0,[e.props,o]);if(ls(),Sn(),Tc(r)){if(r.then(Sn,Sn),t)return r.then(a=>{Ha(e,a,t)}).catch(a=>{Wo(a,e,0)});e.asyncDep=r}else Ha(e,r,t)}else xu(e,t)}function Ha(e,t,n){pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Be(t)&&(e.setupState=Gc(t)),xu(e,n)}let Da;function xu(e,t,n){const s=e.type;if(!e.render){if(!t&&Da&&!s.render){const o=s.template;if(o){const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,p=st(st({isCustomElement:r,delimiters:l},a),c);s.render=Da(o,p)}}e.render=s.render||St}ss(e),as(),Td(e),ls(),Sn()}function rm(e){return new Proxy(e.attrs,{get(t,n){return _t(e,"get","$attrs"),t[n]}})}function am(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=rm(e))},slots:e.slots,emit:e.emit,expose:t}}function Qo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gc(Bo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Eo)return Eo[n](e)}}))}function Ui(e,t=!0){return pe(e)?e.displayName||e.name:e.name||t&&e.__name}function lm(e){return pe(e)&&"__vccOpts"in e}const E=(e,t)=>cd(e,t,Bs);function kt(e,t,n){const s=arguments.length;return s===2?Be(t)&&!ie(t)?ns(t)?T(e,null,[t]):T(e,t):T(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ns(n)&&(n=[n]),T(e,t,n))}const cm="3.2.37",um="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,ja=Pn&&Pn.createElement("template"),pm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?Pn.createElementNS(um,e):Pn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Pn.createTextNode(e),createComment:e=>Pn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{ja.innerHTML=s?`<svg>${e}</svg>`:e;const l=ja.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function fm(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function dm(e,t,n){const s=e.style,o=Fe(n);if(n&&!o){for(const r in n)qi(s,r,n[r]);if(t&&!Fe(t))for(const r in t)n[r]==null&&qi(s,r,"")}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Ka=/\s*!important$/;function qi(e,t,n){if(ie(n))n.forEach(s=>qi(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=mm(e,t);Ka.test(n)?e.setProperty(Cn(s),n.replace(Ka,""),"important"):e[s]=n}}const Ba=["Webkit","Moz","ms"],ui={};function mm(e,t){const n=ui[t];if(n)return n;let s=jt(t);if(s!=="filter"&&s in e)return ui[t]=s;s=jo(s);for(let o=0;o<Ba.length;o++){const r=Ba[o]+s;if(r in e)return ui[t]=r}return t}const Wa="http://www.w3.org/1999/xlink";function hm(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Wa,t.slice(6,t.length)):e.setAttributeNS(Wa,t,n);else{const r=gf(t);n==null||r&&!Oc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function gm(e,t,n,s,o,r,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,o,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Oc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[Nu,_m]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Yi=0;const vm=Promise.resolve(),ym=()=>{Yi=0},bm=()=>Yi||(vm.then(ym),Yi=Nu());function Wn(e,t,n,s){e.addEventListener(t,n,s)}function Pm(e,t,n,s){e.removeEventListener(t,n,s)}function km(e,t,n,s,o=null){const r=e._vei||(e._vei={}),a=r[t];if(s&&a)a.value=s;else{const[l,c]=wm(t);if(s){const p=r[t]=Rm(s,o);Wn(e,l,p,c)}else a&&(Pm(e,l,a,c),r[t]=void 0)}}const Ua=/(?:Once|Passive|Capture)$/;function wm(e){let t;if(Ua.test(e)){t={};let n;for(;n=e.match(Ua);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Cn(e.slice(2)),t]}function Rm(e,t){const n=s=>{const o=s.timeStamp||Nu();(_m||o>=n.attached-1)&&$t(xm(s,n.value),t,5,[s])};return n.value=e,n.attached=bm(),n}function xm(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const qa=/^on[a-z]/,Nm=(e,t,n,s,o=!1,r,a,l,c)=>{t==="class"?fm(e,s,o):t==="style"?dm(e,n,s):Fo(t)?Nr(t)||km(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Im(e,t,s,o))?gm(e,t,s,r,a,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),hm(e,t,s,o))};function Im(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&qa.test(t)&&pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qa.test(t)&&Fe(n)?!1:t in e}const Ya=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ie(t)?n=>Jn(t,n):t};function Em(e){e.target.composing=!0}function Za(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Sm={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e._assign=Ya(o);const r=s||o.props&&o.props.type==="number";Wn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=Oi(l)),e._assign(l)}),n&&Wn(e,"change",()=>{e.value=e.value.trim()}),t||(Wn(e,"compositionstart",Em),Wn(e,"compositionend",Za),Wn(e,"change",Za))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e._assign=Ya(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(o||e.type==="number")&&Oi(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},$m={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ga=(e,t)=>n=>{if(!("key"in n))return;const s=Cn(n.key);if(t.some(o=>o===s||$m[o]===s))return e(n)},Iu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):hs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),hs(e,!0),s.enter(e)):s.leave(e,()=>{hs(e,!1)}):hs(e,t))},beforeUnmount(e,{value:t}){hs(e,t)}};function hs(e,t){e.style.display=t?e._vod:"none"}const Om=st({patchProp:Nm},pm);let Ja;function Vm(){return Ja||(Ja=Ud(Om))}const Am=(...e)=>{const t=Vm().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Tm(s);if(!o)return;const r=t._component;!pe(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function Tm(e){return Fe(e)?document.querySelector(e):e}var Cm=Object.defineProperty,Xa=Object.getOwnPropertySymbols,Mm=Object.prototype.hasOwnProperty,zm=Object.prototype.propertyIsEnumerable,Qa=(e,t,n)=>t in e?Cm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lm=(e,t)=>{for(var n in t||(t={}))Mm.call(t,n)&&Qa(e,n,t[n]);if(Xa)for(var n of Xa(t))zm.call(t,n)&&Qa(e,n,t[n]);return e},Eu="usehead",el="head:count",pi="data-head-attrs",Su="data-meta-body",Fm=(e,t,n)=>{const s=n.createElement(e);for(const o of Object.keys(t))if(o==="body"&&t.body===!0)s.setAttribute(Su,"true");else{let r=t[o];if(o==="key"||r===!1)continue;o==="children"?s.textContent=r:s.setAttribute(o,r)}return s};function tl(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const s=t.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===e.nonce&&e.isEqualNode(s)}}return e.isEqualNode(t)}var Hm=e=>{const t=["key","id","name","property"];for(const n of t){const s=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(s!==void 0)return{name:n,value:s}}},Dm=()=>{const e=C(Eu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},jm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Km=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(P(t)),Bm=e=>{const t=[],n=Object.keys(e);for(const s of n)if(e[s]!=null)switch(s){case"title":t.push({tag:s,props:{children:e[s]}});break;case"titleTemplate":break;case"base":t.push({tag:s,props:Lm({key:"default"},e[s])});break;default:if(jm.includes(s)){const o=e[s];Array.isArray(o)?o.forEach(r=>{t.push({tag:s,props:r})}):o&&t.push({tag:s,props:o})}break}return t},nl=(e,t)=>{const n=e.getAttribute(pi);if(n)for(const o of n.split(","))o in t||e.removeAttribute(o);const s=[];for(const o in t){const r=t[o];r!=null&&(r===!1?e.removeAttribute(o):e.setAttribute(o,r),s.push(o))}s.length?e.setAttribute(pi,s.join(",")):e.removeAttribute(pi)},Wm=(e=window.document,t,n)=>{var s,o;const r=e.head,a=e.body;let l=r.querySelector(`meta[name="${el}"]`),c=a.querySelectorAll(`[${Su}]`);const p=l?Number(l.getAttribute("content")):0,f=[],m=[];if(c)for(let h=0;h<c.length;h++)c[h]&&((s=c[h].tagName)==null?void 0:s.toLowerCase())===t&&m.push(c[h]);if(l)for(let h=0,g=l.previousElementSibling;h<p;h++,g=(g==null?void 0:g.previousElementSibling)||null)((o=g==null?void 0:g.tagName)==null?void 0:o.toLowerCase())===t&&f.push(g);else l=e.createElement("meta"),l.setAttribute("name",el),l.setAttribute("content","0"),r.append(l);let d=n.map(h=>{var g;return{element:Fm(h.tag,h.props,e),body:(g=h.props.body)!=null?g:!1}});d=d.filter(h=>{for(let g=0;g<f.length;g++){const b=f[g];if(tl(b,h.element))return f.splice(g,1),!1}for(let g=0;g<m.length;g++){const b=m[g];if(tl(b,h.element))return m.splice(g,1),!1}return!0}),m.forEach(h=>{var g;return(g=h.parentNode)==null?void 0:g.removeChild(h)}),f.forEach(h=>{var g;return(g=h.parentNode)==null?void 0:g.removeChild(h)}),d.forEach(h=>{h.body===!0?a.insertAdjacentElement("beforeend",h.element):r.insertBefore(h.element,l)}),l.setAttribute("content",""+(p-f.length+d.filter(h=>!h.body).length))},Um=e=>{let t=[],n=new Set;e&&t.push(Vt(e));const s={install(o){o.config.globalProperties.$head=s,o.provide(Eu,s)},get headTags(){const o=[],r=t.map(a=>P(a).titleTemplate).reverse().find(a=>a!=null);return t.forEach(a=>{Bm(P(a)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const p=Hm(c.props);if(p){let f=-1;for(let m=0;m<o.length;m++){const d=o[m],h=d.props[p.name],g=c.props[p.name];if(d.tag===c.tag&&h===g){f=m;break}}f!==-1&&o.splice(f,1)}}r&&c.tag==="title"&&(c.props.children=Km(r,c.props.children)),o.push(c)})}),o},addHeadObjs(o){t.push(o)},removeHeadObjs(o){t=t.filter(r=>r!==o)},updateDOM(o=window.document){let r,a={},l={};const c={};for(const f of s.headTags){if(f.tag==="title"){r=f.props.children;continue}if(f.tag==="htmlAttrs"){Object.assign(a,f.props);continue}if(f.tag==="bodyAttrs"){Object.assign(l,f.props);continue}c[f.tag]=c[f.tag]||[],c[f.tag].push(f)}r!==void 0&&(o.title=r),nl(o.documentElement,a),nl(o.body,l);const p=new Set([...Object.keys(c),...n]);for(const f of p)Wm(o,f,c[f]||[]);n.clear(),Object.keys(c).forEach(f=>n.add(f))}};return s},qm=typeof window<"u",Ym=e=>{const t=Dm(),n=W(e);t.addHeadObjs(n),qm&&(Qs(()=>{t.updateDOM()}),Go(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const Ss=Symbol("v-click-clicks"),kn=Symbol("v-click-clicks-elements"),Zi=Symbol("v-click-clicks-order-map"),$s=Symbol("v-click-clicks-disabled"),$u=Symbol("slidev-slide-scale"),K=Symbol("slidev-slidev-context"),Zm=Symbol("slidev-route"),Gm=Symbol("slidev-slide-context"),bn="slidev-vclick-target",fi="slidev-vclick-hidden",Jm="slidev-vclick-fade",di="slidev-vclick-hidden-explicitly",gs="slidev-vclick-current",po="slidev-vclick-prior";function Gi(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Xm(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let r=t;for(;r<n;)o.push(r),r+=s||1;return o}function Qm(e){return e!=null}function eh(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Qm))}const xn={theme:"default",title:"SISTEMI & RETI",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",materia:"RETI",as:"2022/2023",version:"1.0.0"},we=xn;var Sc;const cn=(Sc=we.aspectRatio)!=null?Sc:16/9;var $c;const $n=($c=we.canvasWidth)!=null?$c:980,Ou=Math.round($n/cn),Vu=E(()=>eh(we.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function wt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const zn=ze({page:0,clicks:0});let th=[],nh=[];wt(zn,"$syncUp",!0);wt(zn,"$syncDown",!0);wt(zn,"$paused",!1);wt(zn,"$onSet",e=>th.push(e));wt(zn,"$onPatch",e=>nh.push(e));wt(zn,"$patch",async()=>!1);function Au(e,t,n=!1){const s=[];let o=!1,r=!1,a,l;const c=ze(t);function p(h){s.push(h)}function f(h,g){clearTimeout(a),o=!0,c[h]=g,a=setTimeout(()=>o=!1,0)}function m(h){o||(clearTimeout(l),r=!0,Object.entries(h).forEach(([g,b])=>{c[g]=b}),l=setTimeout(()=>r=!1,0))}function d(h){let g;n?n&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&m(JSON.parse(y.newValue))}):(g=new BroadcastChannel(h),g.addEventListener("message",y=>m(y.data)));function b(){!n&&g&&!r?g.postMessage(Re(c)):n&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),o||s.forEach(y=>y(c))}if(fe(c,b,{deep:!0}),n){const y=window.localStorage.getItem(h);y&&m(JSON.parse(y))}}return{init:d,onPatch:p,patch:f,state:c}}const{init:sh,onPatch:oh,patch:sl,state:mi}=Au(zn,{page:1,clicks:0}),Ln=ze({});let ih=[],rh=[];wt(Ln,"$syncUp",!0);wt(Ln,"$syncDown",!0);wt(Ln,"$paused",!1);wt(Ln,"$onSet",e=>ih.push(e));wt(Ln,"$onPatch",e=>rh.push(e));wt(Ln,"$patch",async()=>!1);const{init:ah,onPatch:lh,patch:Tu,state:$o}=Au(Ln,{},!1),ch="modulepreload",uh=function(e){return"/RETI/5/VPN/"+e},ol={},us=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=uh(o),o in ol)return;ol[o]=!0;const r=o.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":ch,r||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),r)return new Promise((c,p)=>{l.addEventListener("load",c),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function at(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function ph(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var il;const At=typeof window<"u",fh=e=>typeof e<"u",dh=e=>typeof e=="function",Cu=e=>typeof e=="string",Ji=()=>+Date.now(),vo=()=>{};At&&((il=window==null?void 0:window.navigator)==null?void 0:il.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function tt(e){return typeof e=="function"?e():P(e)}function mh(e,t){function n(...s){e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})}return n}const Mu=e=>e();function hh(e=Mu){const t=W(!0);function n(){t.value=!1}function s(){t.value=!0}return{isActive:t,pause:n,resume:s,eventFilter:(...r)=>{t.value&&e(...r)}}}function gh(e){return e}function _h(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(s.length),r=parseFloat(s)+t;return Number.isNaN(r)?e:r+o}function mn(e){return $r()?(Or(e),!0):!1}function vh(e){if(!xe(e))return ze(e);const t=new Proxy({},{get(n,s,o){return P(Reflect.get(e.value,s,o))},set(n,s,o){return xe(e.value[s])&&!xe(o)?e.value[s].value=o:e.value[s]=o,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ze(t)}function yh(e){return typeof e=="function"?E(e):W(e)}var bh=Object.defineProperty,Ph=Object.defineProperties,kh=Object.getOwnPropertyDescriptors,rl=Object.getOwnPropertySymbols,wh=Object.prototype.hasOwnProperty,Rh=Object.prototype.propertyIsEnumerable,al=(e,t,n)=>t in e?bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xh=(e,t)=>{for(var n in t||(t={}))wh.call(t,n)&&al(e,n,t[n]);if(rl)for(var n of rl(t))Rh.call(t,n)&&al(e,n,t[n]);return e},Nh=(e,t)=>Ph(e,kh(t));function Ih(e){if(!xe(e))return id(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=od(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const o=[...e.value];o[n]=s,e.value=o}else{const o=Nh(xh({},e.value),{[n]:s});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Eh(e,t=!0){Mn()?uu(e):t?e():qe(e)}function zu(e,t=!0){Mn()?cs(e):t?e():qe(e)}function Sh(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:o=!1}=n;let r=null;const a=W(!1);function l(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,l()}function p(){P(t)<=0||(a.value=!0,o&&e(),l(),r=setInterval(e,tt(t)))}if(s&&At&&p(),xe(t)){const f=fe(t,()=>{a.value&&At&&p()});mn(f)}return mn(c),{isActive:a,pause:c,resume:p}}function $h(e,t,n={}){const{immediate:s=!0}=n,o=W(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function l(){o.value=!1,a()}function c(...p){a(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...p)},tt(t))}return s&&(o.value=!0,At&&c()),mn(l),{isPending:o,start:c,stop:l}}function Lu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,o=xe(e),r=W(e);function a(l){if(arguments.length)return r.value=l,r.value;{const c=tt(n);return r.value=r.value===c?tt(s):c,r.value}}return o?a:[r,a]}var ll=Object.getOwnPropertySymbols,Oh=Object.prototype.hasOwnProperty,Vh=Object.prototype.propertyIsEnumerable,Ah=(e,t)=>{var n={};for(var s in e)Oh.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ll)for(var s of ll(e))t.indexOf(s)<0&&Vh.call(e,s)&&(n[s]=e[s]);return n};function Th(e,t,n={}){const s=n,{eventFilter:o=Mu}=s,r=Ah(s,["eventFilter"]);return fe(e,mh(o,t),r)}var Ch=Object.defineProperty,Mh=Object.defineProperties,zh=Object.getOwnPropertyDescriptors,Oo=Object.getOwnPropertySymbols,Fu=Object.prototype.hasOwnProperty,Hu=Object.prototype.propertyIsEnumerable,cl=(e,t,n)=>t in e?Ch(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lh=(e,t)=>{for(var n in t||(t={}))Fu.call(t,n)&&cl(e,n,t[n]);if(Oo)for(var n of Oo(t))Hu.call(t,n)&&cl(e,n,t[n]);return e},Fh=(e,t)=>Mh(e,zh(t)),Hh=(e,t)=>{var n={};for(var s in e)Fu.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Oo)for(var s of Oo(e))t.indexOf(s)<0&&Hu.call(e,s)&&(n[s]=e[s]);return n};function Dh(e,t,n={}){const s=n,{eventFilter:o}=s,r=Hh(s,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:p}=hh(o);return{stop:Th(e,t,Fh(Lh({},r),{eventFilter:a})),pause:l,resume:c,isActive:p}}function on(e){var t;const n=tt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ot=At?window:void 0,jh=At?window.document:void 0,Kh=At?window.navigator:void 0;function Ie(...e){let t,n,s,o;if(Cu(e[0])?([n,s,o]=e,t=ot):[t,n,s,o]=e,!t)return vo;let r=vo;const a=fe(()=>on(t),c=>{r(),c&&(c.addEventListener(n,s,o),r=()=>{c.removeEventListener(n,s,o),r=vo})},{immediate:!0,flush:"post"}),l=()=>{a(),r()};return mn(l),l}function Bh(e,t,n={}){const{window:s=ot,ignore:o,capture:r=!0,detectIframe:a=!1}=n;if(!s)return;const l=W(!0);let c;const p=d=>{s.clearTimeout(c);const h=on(e),g=d.composedPath();!h||h===d.target||g.includes(h)||!l.value||o&&o.length>0&&o.some(b=>{const y=on(b);return y&&(d.target===y||g.includes(y))})||t(d)},f=[Ie(s,"click",p,{passive:!0,capture:r}),Ie(s,"pointerdown",d=>{const h=on(e);l.value=!!h&&!d.composedPath().includes(h)},{passive:!0}),Ie(s,"pointerup",d=>{if(d.button===0){const h=d.composedPath();d.composedPath=()=>h,c=s.setTimeout(()=>p(d),50)}},{passive:!0}),a&&Ie(s,"blur",d=>{var h;const g=on(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(d)})].filter(Boolean);return()=>f.forEach(d=>d())}const Wh=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Uh(e,t,n={}){const{target:s=ot,eventName:o="keydown",passive:r=!1}=n,a=Wh(e);return Ie(s,o,c=>{a(c)&&t(c)},r)}function qh(e={}){const{window:t=ot}=e,n=W(0);return t&&(Ie(t,"blur",()=>n.value+=1,!0),Ie(t,"focus",()=>n.value+=1,!0)),E(()=>(n.value,t==null?void 0:t.document.activeElement))}function ei(e,t=!1){const n=W(),s=()=>n.value=Boolean(e());return s(),zu(s,t),n}function yo(e,t={}){const{window:n=ot}=t,s=ei(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const r=W(!1),a=()=>{!s.value||(o||(o=n.matchMedia(e)),r.value=o.matches)};return Eh(()=>{a(),o&&("addEventListener"in o?o.addEventListener("change",a):o.addListener(a),mn(()=>{"removeEventListener"in o?o.removeEventListener("change",a):o.removeListener(a)}))}),r}const Yh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Zh=Object.defineProperty,ul=Object.getOwnPropertySymbols,Gh=Object.prototype.hasOwnProperty,Jh=Object.prototype.propertyIsEnumerable,pl=(e,t,n)=>t in e?Zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xh=(e,t)=>{for(var n in t||(t={}))Gh.call(t,n)&&pl(e,n,t[n]);if(ul)for(var n of ul(t))Jh.call(t,n)&&pl(e,n,t[n]);return e};function Qh(e,t={}){function n(l,c){let p=e[l];return c!=null&&(p=_h(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:s=ot}=t;function o(l){return s?s.matchMedia(l).matches:!1}const r=l=>yo(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>r(c),enumerable:!0,configurable:!0}),l),{});return Xh({greater:r,smaller(l){return yo(`(max-width: ${n(l,-.1)})`,t)},between(l,c){return yo(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isInBetween(l,c){return o(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},a)}function eg(e={}){const{navigator:t=Kh,read:n=!1,source:s,copiedDuring:o=1500}=e,r=["copy","cut"],a=ei(()=>t&&"clipboard"in t),l=W(""),c=W(!1),p=$h(()=>c.value=!1,o);function f(){t.clipboard.readText().then(d=>{l.value=d})}if(a.value&&n)for(const d of r)Ie(d,f);async function m(d=tt(s)){a.value&&d!=null&&(await t.clipboard.writeText(d),l.value=d,c.value=!0,p.start())}return{isSupported:a,text:l,copied:c,copy:m}}const Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qi="__vueuse_ssr_handlers__";Xi[Qi]=Xi[Qi]||{};const tg=Xi[Qi];function ng(e,t){return tg[e]||t}function sg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var og=Object.defineProperty,fl=Object.getOwnPropertySymbols,ig=Object.prototype.hasOwnProperty,rg=Object.prototype.propertyIsEnumerable,dl=(e,t,n)=>t in e?og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ml=(e,t)=>{for(var n in t||(t={}))ig.call(t,n)&&dl(e,n,t[n]);if(fl)for(var n of fl(t))rg.call(t,n)&&dl(e,n,t[n]);return e};const ag={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ct(e,t,n,s={}){var o;const{flush:r="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:f,window:m=ot,eventFilter:d,onError:h=B=>{console.error(B)}}=s,g=(f?Vt:W)(t);if(!n)try{n=ng("getDefaultStorage",()=>{var B;return(B=ot)==null?void 0:B.localStorage})()}catch(B){h(B)}if(!n)return g;const b=tt(t),y=sg(b),N=(o=s.serializer)!=null?o:ag[y],{pause:x,resume:R}=Dh(g,()=>I(g.value),{flush:r,deep:a,eventFilter:d});return m&&l&&Ie(m,"storage",z),z(),g;function I(B){try{B==null?n.removeItem(e):n.setItem(e,N.write(B))}catch(te){h(te)}}function F(B){if(!(B&&B.key!==e)){x();try{const te=B?B.newValue:n.getItem(e);if(te==null)return c&&b!==null&&n.setItem(e,N.write(b)),b;if(!B&&p){const le=N.read(te);return dh(p)?p(le,b):y==="object"&&!Array.isArray(le)?ml(ml({},b),le):le}else return typeof te!="string"?te:N.read(te)}catch(te){h(te)}finally{R()}}}function z(B){B&&B.key!==e||(g.value=F(B))}}function lg(e){return yo("(prefers-color-scheme: dark)",e)}var cg=Object.defineProperty,ug=Object.defineProperties,pg=Object.getOwnPropertyDescriptors,hl=Object.getOwnPropertySymbols,fg=Object.prototype.hasOwnProperty,dg=Object.prototype.propertyIsEnumerable,gl=(e,t,n)=>t in e?cg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mg=(e,t)=>{for(var n in t||(t={}))fg.call(t,n)&&gl(e,n,t[n]);if(hl)for(var n of hl(t))dg.call(t,n)&&gl(e,n,t[n]);return e},hg=(e,t)=>ug(e,pg(t));function $S(e,t={}){var n,s;const o=(n=t.draggingElement)!=null?n:ot,r=W((s=tt(t.initialValue))!=null?s:{x:0,y:0}),a=W(),l=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{tt(t.preventDefault)&&d.preventDefault(),tt(t.stopPropagation)&&d.stopPropagation()},p=d=>{var h;if(!l(d)||tt(t.exact)&&d.target!==tt(e))return;const g=tt(e).getBoundingClientRect(),b={x:d.pageX-g.left,y:d.pageY-g.top};((h=t.onStart)==null?void 0:h.call(t,b,d))!==!1&&(a.value=b,c(d))},f=d=>{var h;!l(d)||!a.value||(r.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(h=t.onMove)==null||h.call(t,r.value,d),c(d))},m=d=>{var h;!l(d)||!a.value||(a.value=void 0,(h=t.onEnd)==null||h.call(t,r.value,d),c(d))};return At&&(Ie(e,"pointerdown",p,!0),Ie(o,"pointermove",f,!0),Ie(o,"pointerup",m,!0)),hg(mg({},Ih(r)),{position:r,isDragging:E(()=>!!a.value),style:E(()=>`left:${r.value.x}px;top:${r.value.y}px;`)})}var _l=Object.getOwnPropertySymbols,gg=Object.prototype.hasOwnProperty,_g=Object.prototype.propertyIsEnumerable,vg=(e,t)=>{var n={};for(var s in e)gg.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&_l)for(var s of _l(e))t.indexOf(s)<0&&_g.call(e,s)&&(n[s]=e[s]);return n};function yg(e,t,n={}){const s=n,{window:o=ot}=s,r=vg(s,["window"]);let a;const l=ei(()=>o&&"ResizeObserver"in o),c=()=>{a&&(a.disconnect(),a=void 0)},p=fe(()=>on(e),m=>{c(),l.value&&o&&m&&(a=new ResizeObserver(t),a.observe(m,r))},{immediate:!0,flush:"post"}),f=()=>{c(),p()};return mn(f),{isSupported:l,stop:f}}function bg(e,t={}){const{immediate:n=!0,window:s=ot}=t,o=W(!1);let r=null;function a(){!o.value||!s||(e(),r=s.requestAnimationFrame(a))}function l(){!o.value&&s&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return n&&l(),mn(c),{isActive:o,pause:c,resume:l}}function Pg(e,t={width:0,height:0},n={}){const s=W(t.width),o=W(t.height);return yg(e,([r])=>{s.value=r.contentRect.width,o.value=r.contentRect.height},n),fe(()=>on(e),r=>{s.value=r?t.width:0,o.value=r?t.height:0}),{width:s,height:o}}const vl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function kg(e,t={}){const{document:n=jh,autoExit:s=!1}=t,o=e||(n==null?void 0:n.querySelector("html")),r=W(!1);let a=vl[0];const l=ei(()=>{if(n){for(const b of vl)if(b[1]in n)return a=b,!0}else return!1;return!1}),[c,p,f,,m]=a;async function d(){!l.value||(n!=null&&n[f]&&await n[p](),r.value=!1)}async function h(){if(!l.value)return;await d();const b=on(o);b&&(await b[c](),r.value=!0)}async function g(){r.value?await d():await h()}return n&&Ie(n,m,()=>{r.value=!!(n!=null&&n[f])},!1),s&&mn(d),{isSupported:l,isFullscreen:r,enter:h,exit:d,toggle:g}}const wg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Rg(e={}){const{reactive:t=!1,target:n=ot,aliasMap:s=wg,passive:o=!0,onEventFired:r=vo}=e,a=ze(new Set),l={toJSON(){return{}},current:a},c=t?ze(l):l,p=new Set,f=new Set;function m(b,y){b in c&&(t?c[b]=y:c[b].value=y)}function d(){for(const b of f)m(b,!1)}function h(b,y){var N,x;const R=(N=b.key)==null?void 0:N.toLowerCase(),F=[(x=b.code)==null?void 0:x.toLowerCase(),R].filter(Boolean);R&&(y?a.add(R):a.delete(R));for(const z of F)f.add(z),m(z,y);R==="meta"&&!y?(p.forEach(z=>{a.delete(z),m(z,!1)}),p.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&y&&[...a,...F].forEach(z=>p.add(z))}Ie(n,"keydown",b=>(h(b,!0),r(b)),{passive:o}),Ie(n,"keyup",b=>(h(b,!1),r(b)),{passive:o}),Ie("blur",d,{passive:!0}),Ie("focus",d,{passive:!0});const g=new Proxy(c,{get(b,y,N){if(typeof y!="string")return Reflect.get(b,y,N);if(y=y.toLowerCase(),y in s&&(y=s[y]),!(y in c))if(/[+_-]/.test(y)){const R=y.split(/[+_-]/g).map(I=>I.trim());c[y]=E(()=>R.every(I=>P(g[I])))}else c[y]=W(!1);const x=Reflect.get(b,y,N);return t?P(x):x}});return g}function OS(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:o={x:0,y:0},window:r=ot,eventFilter:a}=e,l=W(o.x),c=W(o.y),p=W(null),f=b=>{t==="page"?(l.value=b.pageX,c.value=b.pageY):t==="client"&&(l.value=b.clientX,c.value=b.clientY),p.value="mouse"},m=()=>{l.value=o.x,c.value=o.y},d=b=>{if(b.touches.length>0){const y=b.touches[0];t==="page"?(l.value=y.pageX,c.value=y.pageY):t==="client"&&(l.value=y.clientX,c.value=y.clientY),p.value="touch"}},h=b=>a===void 0?f(b):a(()=>f(b),{}),g=b=>a===void 0?d(b):a(()=>d(b),{});return r&&(Ie(r,"mousemove",h,{passive:!0}),Ie(r,"dragover",h,{passive:!0}),n&&(Ie(r,"touchstart",g,{passive:!0}),Ie(r,"touchmove",g,{passive:!0}),s&&Ie(r,"touchend",m,{passive:!0}))),{x:l,y:c,sourceType:p}}var qt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(qt||(qt={}));function xg(e,t={}){const n=yh(e),{threshold:s=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:a}=t,l=ze({x:0,y:0}),c=(z,B)=>{l.x=z,l.y=B},p=ze({x:0,y:0}),f=(z,B)=>{p.x=z,p.y=B},m=E(()=>l.x-p.x),d=E(()=>l.y-p.y),{max:h,abs:g}=Math,b=E(()=>h(g(m.value),g(d.value))>=s),y=W(!1),N=W(!1),x=E(()=>b.value?g(m.value)>g(d.value)?m.value>0?qt.LEFT:qt.RIGHT:d.value>0?qt.UP:qt.DOWN:qt.NONE),R=z=>t.pointerTypes?t.pointerTypes.includes(z.pointerType):!0,I=[Ie(e,"pointerdown",z=>{var B,te;if(!R(z))return;N.value=!0,(te=(B=n.value)==null?void 0:B.style)==null||te.setProperty("touch-action","none");const le=z.target;le==null||le.setPointerCapture(z.pointerId);const{clientX:ge,clientY:ye}=z;c(ge,ye),f(ge,ye),a==null||a(z)}),Ie(e,"pointermove",z=>{if(!R(z)||!N.value)return;const{clientX:B,clientY:te}=z;f(B,te),!y.value&&b.value&&(y.value=!0),y.value&&(o==null||o(z))}),Ie(e,"pointerup",z=>{var B,te;!R(z)||(y.value&&(r==null||r(z,x.value)),N.value=!1,y.value=!1,(te=(B=n.value)==null?void 0:B.style)==null||te.setProperty("touch-action","initial"))})],F=()=>I.forEach(z=>z());return{isSwiping:qn(y),direction:qn(x),posStart:qn(l),posEnd:qn(p),distanceX:m,distanceY:d,stop:F}}var Ng=Object.defineProperty,yl=Object.getOwnPropertySymbols,Ig=Object.prototype.hasOwnProperty,Eg=Object.prototype.propertyIsEnumerable,bl=(e,t,n)=>t in e?Ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sg=(e,t)=>{for(var n in t||(t={}))Ig.call(t,n)&&bl(e,n,t[n]);if(yl)for(var n of yl(t))Eg.call(t,n)&&bl(e,n,t[n]);return e};function VS(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:o="requestAnimationFrame"}=e,r=W(Ji()+n),a=()=>r.value=Ji()+n,l=o==="requestAnimationFrame"?bg(a,{immediate:s}):Sh(a,o,{immediate:s});return t?Sg({timestamp:r},l):r}var $g=Object.defineProperty,Pl=Object.getOwnPropertySymbols,Og=Object.prototype.hasOwnProperty,Vg=Object.prototype.propertyIsEnumerable,kl=(e,t,n)=>t in e?$g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ag=(e,t)=>{for(var n in t||(t={}))Og.call(t,n)&&kl(e,n,t[n]);if(Pl)for(var n of Pl(t))Vg.call(t,n)&&kl(e,n,t[n]);return e};const Tg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ag({linear:gh},Tg);function Ht(e,t,n,s={}){var o,r,a;const{passive:l=!1,eventName:c,deep:p=!1,defaultValue:f}=s,m=Mn(),d=n||(m==null?void 0:m.emit)||((o=m==null?void 0:m.$emit)==null?void 0:o.bind(m))||((a=(r=m==null?void 0:m.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(m==null?void 0:m.proxy));let h=c;t||(t="modelValue"),h=c||h||`update:${t.toString()}`;const g=()=>fh(e[t])?e[t]:f;if(l){const b=W(g());return fe(()=>e[t],y=>b.value=y),fe(b,y=>{(y!==e[t]||p)&&d(h,y)},{deep:p}),b}else return E({get(){return g()},set(b){d(h,b)}})}function AS({window:e=ot}={}){if(!e)return W(!1);const t=W(e.document.hasFocus());return Ie(e,"blur",()=>{t.value=!1}),Ie(e,"focus",()=>{t.value=!0}),t}function Cg(e={}){const{window:t=ot,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:o=!0}=e,r=W(n),a=W(s),l=()=>{t&&(r.value=t.innerWidth,a.value=t.innerHeight)};return l(),zu(l),Ie("resize",l,{passive:!0}),o&&Ie("orientationchange",l,{passive:!0}),{width:r,height:a}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Un=typeof window<"u";function Mg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function hi(e,t){const n={};for(const s in t){const o=t[s];n[s]=Tt(o)?o.map(e):e(o)}return n}const Os=()=>{},Tt=Array.isArray,zg=/\/$/,Lg=e=>e.replace(zg,"");function gi(e,t,n="/"){let s,o={},r="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),a=t.slice(l,t.length)),s=jg(s!=null?s:t,n),{fullPath:s+(r&&"?")+r+a,path:s,query:o,hash:a}}function Fg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Hg(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&os(t.matched[s],n.matched[o])&&Du(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function os(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Du(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Dg(e[n],t[n]))return!1;return!0}function Dg(e,t){return Tt(e)?Rl(e,t):Tt(t)?Rl(t,e):e===t}function Rl(e,t){return Tt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function jg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let o=n.length-1,r,a;for(r=0;r<s.length;r++)if(a=s[r],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ws;(function(e){e.pop="pop",e.push="push"})(Ws||(Ws={}));var Vs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vs||(Vs={}));function Kg(e){if(!e)if(Un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lg(e)}const Bg=/^[^#]+#/;function Wg(e,t){return e.replace(Bg,"#")+t}function Ug(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ti=()=>({left:window.pageXOffset,top:window.pageYOffset});function qg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ug(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xl(e,t){return(history.state?history.state.position-t:-1)+e}const er=new Map;function Yg(e,t){er.set(e,t)}function Zg(e){const t=er.get(e);return er.delete(e),t}let Gg=()=>location.protocol+"//"+location.host;function ju(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let l=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),wl(c,"")}return wl(n,e)+s+o}function Jg(e,t,n,s){let o=[],r=[],a=null;const l=({state:d})=>{const h=ju(e,location),g=n.value,b=t.value;let y=0;if(d){if(n.value=h,t.value=d,a&&a===g){a=null;return}y=b?d.position-b.position:0}else s(h);o.forEach(N=>{N(n.value,g,{delta:y,type:Ws.pop,direction:y?y>0?Vs.forward:Vs.back:Vs.unknown})})};function c(){a=n.value}function p(d){o.push(d);const h=()=>{const g=o.indexOf(d);g>-1&&o.splice(g,1)};return r.push(h),h}function f(){const{history:d}=window;!d.state||d.replaceState(Ve({},d.state,{scroll:ti()}),"")}function m(){for(const d of r)d();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:p,destroy:m}}function Nl(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ti():null}}function Xg(e){const{history:t,location:n}=window,s={value:ju(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,p,f){const m=e.indexOf("#"),d=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+c:Gg()+e+c;try{t[f?"replaceState":"pushState"](p,"",d),o.value=p}catch(h){console.error(h),n[f?"replace":"assign"](d)}}function a(c,p){const f=Ve({},t.state,Nl(o.value.back,c,o.value.forward,!0),p,{position:o.value.position});r(c,f,!0),s.value=c}function l(c,p){const f=Ve({},o.value,t.state,{forward:c,scroll:ti()});r(f.current,f,!0);const m=Ve({},Nl(s.value,c,null),{position:f.position+1},p);r(c,m,!1),s.value=c}return{location:s,state:o,push:l,replace:a}}function Qg(e){e=Kg(e);const t=Xg(e),n=Jg(e,t.state,t.location,t.replace);function s(r,a=!0){a||n.pauseListeners(),history.go(r)}const o=Ve({location:"",base:e,go:s,createHref:Wg.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function e_(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Qg(e)}function t_(e){return typeof e=="string"||e&&typeof e=="object"}function Ku(e){return typeof e=="string"||typeof e=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bu=Symbol("");var Il;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Il||(Il={}));function is(e,t){return Ve(new Error,{type:e,[Bu]:!0},t)}function Kt(e,t){return e instanceof Error&&Bu in e&&(t==null||!!(e.type&t))}const El="[^/]+?",n_={sensitive:!1,strict:!1,start:!0,end:!0},s_=/[.+*?^${}()[\]/\\]/g;function o_(e,t){const n=Ve({},n_,t),s=[];let o=n.start?"^":"";const r=[];for(const p of e){const f=p.length?[]:[90];n.strict&&!p.length&&(o+="/");for(let m=0;m<p.length;m++){const d=p[m];let h=40+(n.sensitive?.25:0);if(d.type===0)m||(o+="/"),o+=d.value.replace(s_,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:b,optional:y,regexp:N}=d;r.push({name:g,repeatable:b,optional:y});const x=N||El;if(x!==El){h+=10;try{new RegExp(`(${x})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+I.message)}}let R=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(R=y&&p.length<2?`(?:/${R})`:"/"+R),y&&(R+="?"),o+=R,h+=20,y&&(h+=-8),b&&(h+=-20),x===".*"&&(h+=-50)}f.push(h)}s.push(f)}if(n.strict&&n.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function l(p){const f=p.match(a),m={};if(!f)return null;for(let d=1;d<f.length;d++){const h=f[d]||"",g=r[d-1];m[g.name]=h&&g.repeatable?h.split("/"):h}return m}function c(p){let f="",m=!1;for(const d of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const h of d)if(h.type===0)f+=h.value;else if(h.type===1){const{value:g,repeatable:b,optional:y}=h,N=g in p?p[g]:"";if(Tt(N)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Tt(N)?N.join("/"):N;if(!x)if(y)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);f+=x}}return f||"/"}return{re:a,score:s,keys:r,parse:l,stringify:c}}function i_(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function r_(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=i_(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(Sl(s))return 1;if(Sl(o))return-1}return o.length-s.length}function Sl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const a_={type:0,value:""},l_=/[a-zA-Z0-9_]/;function c_(e){if(!e)return[[]];if(e==="/")return[[a_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${p}": ${h}`)}let n=0,s=n;const o=[];let r;function a(){r&&o.push(r),r=[]}let l=0,c,p="",f="";function m(){!p||(n===0?r.push({type:0,value:p}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function d(){p+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(p&&m(),a()):c===":"?(m(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:l_.test(c)?d():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),m(),a(),o}function u_(e,t,n){const s=o_(c_(e.path),n),o=Ve(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function p_(e,t){const n=[],s=new Map;t=Ol({strict:!1,end:!0,sensitive:!1},t);function o(f){return s.get(f)}function r(f,m,d){const h=!d,g=d_(f);g.aliasOf=d&&d.record;const b=Ol(t,f),y=[g];if("alias"in f){const R=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of R)y.push(Ve({},g,{components:d?d.record.components:g.components,path:I,aliasOf:d?d.record:g}))}let N,x;for(const R of y){const{path:I}=R;if(m&&I[0]!=="/"){const F=m.record.path,z=F[F.length-1]==="/"?"":"/";R.path=m.record.path+(I&&z+I)}if(N=u_(R,m,b),d?d.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),h&&f.name&&!$l(N)&&a(f.name)),g.children){const F=g.children;for(let z=0;z<F.length;z++)r(F[z],N,d&&d.children[z])}d=d||N,c(N)}return x?()=>{a(x)}:Os}function a(f){if(Ku(f)){const m=s.get(f);m&&(s.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function l(){return n}function c(f){let m=0;for(;m<n.length&&r_(f,n[m])>=0&&(f.record.path!==n[m].record.path||!Wu(f,n[m]));)m++;n.splice(m,0,f),f.record.name&&!$l(f)&&s.set(f.record.name,f)}function p(f,m){let d,h={},g,b;if("name"in f&&f.name){if(d=s.get(f.name),!d)throw is(1,{location:f});b=d.record.name,h=Ve(f_(m.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),f.params),g=d.stringify(h)}else if("path"in f)g=f.path,d=n.find(x=>x.re.test(g)),d&&(h=d.parse(g),b=d.record.name);else{if(d=m.name?s.get(m.name):n.find(x=>x.re.test(m.path)),!d)throw is(1,{location:f,currentLocation:m});b=d.record.name,h=Ve({},m.params,f.params),g=d.stringify(h)}const y=[];let N=d;for(;N;)y.unshift(N.record),N=N.parent;return{name:b,path:g,params:h,matched:y,meta:h_(y)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:p,removeRoute:a,getRoutes:l,getRecordMatcher:o}}function f_(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function d_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:m_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function m_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function $l(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function h_(e){return e.reduce((t,n)=>Ve(t,n.meta),{})}function Ol(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Wu(e,t){return t.children.some(n=>n===e||Wu(e,n))}const Uu=/#/g,g_=/&/g,__=/\//g,v_=/=/g,y_=/\?/g,qu=/\+/g,b_=/%5B/g,P_=/%5D/g,Yu=/%5E/g,k_=/%60/g,Zu=/%7B/g,w_=/%7C/g,Gu=/%7D/g,R_=/%20/g;function Yr(e){return encodeURI(""+e).replace(w_,"|").replace(b_,"[").replace(P_,"]")}function x_(e){return Yr(e).replace(Zu,"{").replace(Gu,"}").replace(Yu,"^")}function tr(e){return Yr(e).replace(qu,"%2B").replace(R_,"+").replace(Uu,"%23").replace(g_,"%26").replace(k_,"`").replace(Zu,"{").replace(Gu,"}").replace(Yu,"^")}function N_(e){return tr(e).replace(v_,"%3D")}function I_(e){return Yr(e).replace(Uu,"%23").replace(y_,"%3F")}function E_(e){return e==null?"":I_(e).replace(__,"%2F")}function Vo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function S_(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(qu," "),a=r.indexOf("="),l=Vo(a<0?r:r.slice(0,a)),c=a<0?null:Vo(r.slice(a+1));if(l in t){let p=t[l];Tt(p)||(p=t[l]=[p]),p.push(c)}else t[l]=c}return t}function Vl(e){let t="";for(let n in e){const s=e[n];if(n=N_(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Tt(s)?s.map(r=>r&&tr(r)):[s&&tr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function $_(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Tt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const O_=Symbol(""),Al=Symbol(""),Zr=Symbol(""),Ju=Symbol(""),nr=Symbol("");function _s(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function sn(e,t,n,s,o){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const c=m=>{m===!1?l(is(4,{from:n,to:t})):m instanceof Error?l(m):t_(m)?l(is(2,{from:t,to:m})):(r&&s.enterCallbacks[o]===r&&typeof m=="function"&&r.push(m),a())},p=e.call(s&&s.instances[o],t,n,c);let f=Promise.resolve(p);e.length<3&&(f=f.then(c)),f.catch(m=>l(m))})}function _i(e,t,n,s){const o=[];for(const r of e)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(V_(l)){const p=(l.__vccOpts||l)[t];p&&o.push(sn(p,n,s,r,a))}else{let c=l();o.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const f=Mg(p)?p.default:p;r.components[a]=f;const d=(f.__vccOpts||f)[t];return d&&sn(d,n,s,r,a)()}))}}return o}function V_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tl(e){const t=C(Zr),n=C(Ju),s=E(()=>t.resolve(P(e.to))),o=E(()=>{const{matched:c}=s.value,{length:p}=c,f=c[p-1],m=n.matched;if(!f||!m.length)return-1;const d=m.findIndex(os.bind(null,f));if(d>-1)return d;const h=Cl(c[p-2]);return p>1&&Cl(f)===h&&m[m.length-1].path!==h?m.findIndex(os.bind(null,c[p-2])):d}),r=E(()=>o.value>-1&&M_(n.params,s.value.params)),a=E(()=>o.value>-1&&o.value===n.matched.length-1&&Du(n.params,s.value.params));function l(c={}){return C_(c)?t[P(e.replace)?"replace":"push"](P(e.to)).catch(Os):Promise.resolve()}return{route:s,href:E(()=>s.value.href),isActive:r,isExactActive:a,navigate:l}}const A_=Ee({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tl,setup(e,{slots:t}){const n=ze(Tl(e)),{options:s}=C(Zr),o=E(()=>({[Ml(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ml(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:kt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),T_=A_;function C_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function M_(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Tt(o)||o.length!==s.length||s.some((r,a)=>r!==o[a]))return!1}return!0}function Cl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ml=(e,t,n)=>e!=null?e:t!=null?t:n,z_=Ee({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=C(nr),o=E(()=>e.route||s.value),r=C(Al,0),a=E(()=>{let p=P(r);const{matched:f}=o.value;let m;for(;(m=f[p])&&!m.components;)p++;return p}),l=E(()=>o.value.matched[a.value]);dt(Al,E(()=>a.value+1)),dt(O_,l),dt(nr,o);const c=W();return fe(()=>[c.value,l.value,e.name],([p,f,m],[d,h,g])=>{f&&(f.instances[m]=p,h&&h!==f&&p&&p===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),p&&f&&(!h||!os(f,h)||!d)&&(f.enterCallbacks[m]||[]).forEach(b=>b(p))},{flush:"post"}),()=>{const p=o.value,f=e.name,m=l.value,d=m&&m.components[f];if(!d)return zl(n.default,{Component:d,route:p});const h=m.props[f],g=h?h===!0?p.params:typeof h=="function"?h(p):h:null,y=kt(d,Ve({},g,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(m.instances[f]=null)},ref:c}));return zl(n.default,{Component:y,route:p})||y}}});function zl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const L_=z_;function F_(e){const t=p_(e.routes,e),n=e.parseQuery||S_,s=e.stringifyQuery||Vl,o=e.history,r=_s(),a=_s(),l=_s(),c=Vt(en);let p=en;Un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hi.bind(null,S=>""+S),m=hi.bind(null,E_),d=hi.bind(null,Vo);function h(S,Y){let M,Z;return Ku(S)?(M=t.getRecordMatcher(S),Z=Y):Z=S,t.addRoute(Z,M)}function g(S){const Y=t.getRecordMatcher(S);Y&&t.removeRoute(Y)}function b(){return t.getRoutes().map(S=>S.record)}function y(S){return!!t.getRecordMatcher(S)}function N(S,Y){if(Y=Ve({},Y||c.value),typeof S=="string"){const de=gi(n,S,Y.path),_=t.resolve({path:de.path},Y),v=o.createHref(de.fullPath);return Ve(de,_,{params:d(_.params),hash:Vo(de.hash),redirectedFrom:void 0,href:v})}let M;if("path"in S)M=Ve({},S,{path:gi(n,S.path,Y.path).path});else{const de=Ve({},S.params);for(const _ in de)de[_]==null&&delete de[_];M=Ve({},S,{params:m(S.params)}),Y.params=m(Y.params)}const Z=t.resolve(M,Y),Pe=S.hash||"";Z.params=f(d(Z.params));const Te=Fg(s,Ve({},S,{hash:x_(Pe),path:Z.path})),me=o.createHref(Te);return Ve({fullPath:Te,hash:Pe,query:s===Vl?$_(S.query):S.query||{}},Z,{redirectedFrom:void 0,href:me})}function x(S){return typeof S=="string"?gi(n,S,c.value.path):Ve({},S)}function R(S,Y){if(p!==S)return is(8,{from:Y,to:S})}function I(S){return B(S)}function F(S){return I(Ve(x(S),{replace:!0}))}function z(S){const Y=S.matched[S.matched.length-1];if(Y&&Y.redirect){const{redirect:M}=Y;let Z=typeof M=="function"?M(S):M;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),Ve({query:S.query,hash:S.hash,params:"path"in Z?{}:S.params},Z)}}function B(S,Y){const M=p=N(S),Z=c.value,Pe=S.state,Te=S.force,me=S.replace===!0,de=z(M);if(de)return B(Ve(x(de),{state:Pe,force:Te,replace:me}),Y||M);const _=M;_.redirectedFrom=Y;let v;return!Te&&Hg(s,Z,M)&&(v=is(16,{to:_,from:Z}),Mt(Z,Z,!0,!1)),(v?Promise.resolve(v):le(_,Z)).catch(w=>Kt(w)?Kt(w,2)?w:_e(w):re(w,_,Z)).then(w=>{if(w){if(Kt(w,2))return B(Ve({replace:me},x(w.to),{state:Pe,force:Te}),Y||_)}else w=ye(_,Z,!0,me,Pe);return ge(_,Z,w),w})}function te(S,Y){const M=R(S,Y);return M?Promise.reject(M):Promise.resolve()}function le(S,Y){let M;const[Z,Pe,Te]=H_(S,Y);M=_i(Z.reverse(),"beforeRouteLeave",S,Y);for(const de of Z)de.leaveGuards.forEach(_=>{M.push(sn(_,S,Y))});const me=te.bind(null,S,Y);return M.push(me),Hn(M).then(()=>{M=[];for(const de of r.list())M.push(sn(de,S,Y));return M.push(me),Hn(M)}).then(()=>{M=_i(Pe,"beforeRouteUpdate",S,Y);for(const de of Pe)de.updateGuards.forEach(_=>{M.push(sn(_,S,Y))});return M.push(me),Hn(M)}).then(()=>{M=[];for(const de of S.matched)if(de.beforeEnter&&!Y.matched.includes(de))if(Tt(de.beforeEnter))for(const _ of de.beforeEnter)M.push(sn(_,S,Y));else M.push(sn(de.beforeEnter,S,Y));return M.push(me),Hn(M)}).then(()=>(S.matched.forEach(de=>de.enterCallbacks={}),M=_i(Te,"beforeRouteEnter",S,Y),M.push(me),Hn(M))).then(()=>{M=[];for(const de of a.list())M.push(sn(de,S,Y));return M.push(me),Hn(M)}).catch(de=>Kt(de,8)?de:Promise.reject(de))}function ge(S,Y,M){for(const Z of l.list())Z(S,Y,M)}function ye(S,Y,M,Z,Pe){const Te=R(S,Y);if(Te)return Te;const me=Y===en,de=Un?history.state:{};M&&(Z||me?o.replace(S.fullPath,Ve({scroll:me&&de&&de.scroll},Pe)):o.push(S.fullPath,Pe)),c.value=S,Mt(S,Y,M,me),_e()}let Me;function He(){Me||(Me=o.listen((S,Y,M)=>{if(!Xt.listening)return;const Z=N(S),Pe=z(Z);if(Pe){B(Ve(Pe,{replace:!0}),Z).catch(Os);return}p=Z;const Te=c.value;Un&&Yg(xl(Te.fullPath,M.delta),ti()),le(Z,Te).catch(me=>Kt(me,12)?me:Kt(me,2)?(B(me.to,Z).then(de=>{Kt(de,20)&&!M.delta&&M.type===Ws.pop&&o.go(-1,!1)}).catch(Os),Promise.reject()):(M.delta&&o.go(-M.delta,!1),re(me,Z,Te))).then(me=>{me=me||ye(Z,Te,!1),me&&(M.delta&&!Kt(me,8)?o.go(-M.delta,!1):M.type===Ws.pop&&Kt(me,20)&&o.go(-1,!1)),ge(Z,Te,me)}).catch(Os)}))}let Ye=_s(),Se=_s(),se;function re(S,Y,M){_e(S);const Z=Se.list();return Z.length?Z.forEach(Pe=>Pe(S,Y,M)):console.error(S),Promise.reject(S)}function Q(){return se&&c.value!==en?Promise.resolve():new Promise((S,Y)=>{Ye.add([S,Y])})}function _e(S){return se||(se=!S,He(),Ye.list().forEach(([Y,M])=>S?M(S):Y()),Ye.reset()),S}function Mt(S,Y,M,Z){const{scrollBehavior:Pe}=e;if(!Un||!Pe)return Promise.resolve();const Te=!M&&Zg(xl(S.fullPath,0))||(Z||!M)&&history.state&&history.state.scroll||null;return qe().then(()=>Pe(S,Y,Te)).then(me=>me&&qg(me)).catch(me=>re(me,S,Y))}const Xe=S=>o.go(S);let vt;const it=new Set,Xt={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,hasRoute:y,getRoutes:b,resolve:N,options:e,push:I,replace:F,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:a.add,afterEach:l.add,onError:Se.add,isReady:Q,install(S){const Y=this;S.component("RouterLink",T_),S.component("RouterView",L_),S.config.globalProperties.$router=Y,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>P(c)}),Un&&!vt&&c.value===en&&(vt=!0,I(o.location).catch(Pe=>{}));const M={};for(const Pe in en)M[Pe]=E(()=>c.value[Pe]);S.provide(Zr,Y),S.provide(Ju,ze(M)),S.provide(nr,c);const Z=S.unmount;it.add(S),S.unmount=function(){it.delete(S),it.size<1&&(p=en,Me&&Me(),Me=null,c.value=en,vt=!1,se=!1),Z()}}};return Xt}function Hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function H_(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const l=t.matched[a];l&&(e.matched.find(p=>os(p,l))?s.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(p=>os(p,c))||o.push(c))}return[n,s,o]}const vi=W(!1),As=W(!1),Yn=W(!1),D_=W(!0),sr=Qh({xs:460,...Yh}),On=Cg(),Xu=Rg(),j_=E(()=>On.height.value-On.width.value/cn>180),Qu=kg(At?document.body:null),es=qh(),K_=E(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=es.value)==null?void 0:e.tagName)||"")||((t=es.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),B_=E(()=>{var e;return["BUTTON","A"].includes(((e=es.value)==null?void 0:e.tagName)||"")});Ct("slidev-camera","default");Ct("slidev-mic","default");const bo=Ct("slidev-scale",0),et=Ct("slidev-show-overview",!1),yi=Ct("slidev-presenter-cursor",!0),Ll=Ct("slidev-show-editor",!1);Ct("slidev-editor-width",At?window.innerWidth*.4:100);const ep=Lu(et);function Fl(e,t,n,s=o=>o){return e*s(.5-t*(.5-n))}function W_(e){return[-e[0],-e[1]]}function Nt(e,t){return[e[0]+t[0],e[1]+t[1]]}function bt(e,t){return[e[0]-t[0],e[1]-t[1]]}function xt(e,t){return[e[0]*t,e[1]*t]}function U_(e,t){return[e[0]/t,e[1]/t]}function vs(e){return[e[1],-e[0]]}function q_(e,t){return e[0]*t[0]+e[1]*t[1]}function Y_(e,t){return e[0]===t[0]&&e[1]===t[1]}function Z_(e){return Math.hypot(e[0],e[1])}function G_(e){return e[0]*e[0]+e[1]*e[1]}function Hl(e,t){return G_(bt(e,t))}function tp(e){return U_(e,Z_(e))}function J_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function ys(e,t,n){let s=Math.sin(n),o=Math.cos(n),r=e[0]-t[0],a=e[1]-t[1],l=r*o-a*s,c=r*s+a*o;return[l+t[0],c+t[1]]}function or(e,t,n){return Nt(e,xt(bt(t,e),n))}function Dl(e,t,n){return Nt(e,xt(t,n))}var{min:Dn,PI:X_}=Math,jl=.275,bs=X_+1e-4;function Q_(e,t={}){let{size:n=16,smoothing:s=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=se=>se,start:l={},end:c={},last:p=!1}=t,{cap:f=!0,easing:m=se=>se*(2-se)}=l,{cap:d=!0,easing:h=se=>--se*se*se+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,b=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,y=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,N=Math.pow(n*s,2),x=[],R=[],I=e.slice(0,10).reduce((se,re)=>{let Q=re.pressure;if(r){let _e=Dn(1,re.distance/n),Mt=Dn(1,1-_e);Q=Dn(1,se+(Mt-se)*(_e*jl))}return(se+Q)/2},e[0].pressure),F=Fl(n,o,e[e.length-1].pressure,a),z,B=e[0].vector,te=e[0].point,le=te,ge=te,ye=le;for(let se=0;se<e.length;se++){let{pressure:re}=e[se],{point:Q,vector:_e,distance:Mt,runningLength:Xe}=e[se];if(se<e.length-1&&g-Xe<3)continue;if(o){if(r){let M=Dn(1,Mt/n),Z=Dn(1,1-M);re=Dn(1,I+(Z-I)*(M*jl))}F=Fl(n,o,re,a)}else F=n/2;z===void 0&&(z=F);let vt=Xe<b?m(Xe/b):1,it=g-Xe<y?h((g-Xe)/y):1;if(F=Math.max(.01,F*Math.min(vt,it)),se===e.length-1){let M=xt(vs(_e),F);x.push(bt(Q,M)),R.push(Nt(Q,M));continue}let Xt=e[se+1].vector,S=q_(_e,Xt);if(S<0){let M=xt(vs(B),F);for(let Z=1/13,Pe=0;Pe<=1;Pe+=Z)ge=ys(bt(Q,M),Q,bs*Pe),x.push(ge),ye=ys(Nt(Q,M),Q,bs*-Pe),R.push(ye);te=ge,le=ye;continue}let Y=xt(vs(or(Xt,_e,S)),F);ge=bt(Q,Y),(se<=1||Hl(te,ge)>N)&&(x.push(ge),te=ge),ye=Nt(Q,Y),(se<=1||Hl(le,ye)>N)&&(R.push(ye),le=ye),I=re,B=_e}let Me=e[0].point.slice(0,2),He=e.length>1?e[e.length-1].point.slice(0,2):Nt(e[0].point,[1,1]),Ye=[],Se=[];if(e.length===1){if(!(b||y)||p){let se=Dl(Me,tp(vs(bt(Me,He))),-(z||F)),re=[];for(let Q=1/13,_e=Q;_e<=1;_e+=Q)re.push(ys(se,Me,bs*2*_e));return re}}else{if(!(b||y&&e.length===1))if(f)for(let re=1/13,Q=re;Q<=1;Q+=re){let _e=ys(R[0],Me,bs*Q);Ye.push(_e)}else{let re=bt(x[0],R[0]),Q=xt(re,.5),_e=xt(re,.51);Ye.push(bt(Me,Q),bt(Me,_e),Nt(Me,_e),Nt(Me,Q))}let se=vs(W_(e[e.length-1].vector));if(y||b&&e.length===1)Se.push(He);else if(d){let re=Dl(He,se,F);for(let Q=1/29,_e=Q;_e<1;_e+=Q)Se.push(ys(re,He,bs*3*_e))}else Se.push(Nt(He,xt(se,F)),Nt(He,xt(se,F*.99)),bt(He,xt(se,F*.99)),bt(He,xt(se,F)))}return x.concat(Se,R.reverse(),Ye)}function e1(e,t={}){var n;let{streamline:s=.5,size:o=16,last:r=!1}=t;if(e.length===0)return[];let a=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:h,y:g,pressure:b=.5})=>[h,g,b]);if(l.length===2){let h=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(or(l[0],h,g/4))}l.length===1&&(l=[...l,[...Nt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,f=0,m=c[0],d=l.length-1;for(let h=1;h<l.length;h++){let g=r&&h===d?l[h].slice(0,2):or(m.point,l[h],a);if(Y_(m.point,g))continue;let b=J_(g,m.point);if(f+=b,h<d&&!p){if(f<o)continue;p=!0}m={point:g,pressure:l[h][2]>=0?l[h][2]:.5,vector:tp(bt(m.point,g)),distance:b,runningLength:f},c.push(m)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function t1(e,t={}){return Q_(e1(e,t),t)}var n1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,o=n.length;s<o;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(o=>t!==o)}}});function Ao(e,t){return e-t}function s1(e){return e<0?-1:1}function To(e){return[Math.abs(e),s1(e)]}function np(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var o1=2,Wt=o1,ps=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;var t;const n=this.drauu.el,s=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const a=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*s,y:a.y*s,pressure:e.pressure}}}createElement(e,t){var o;const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(o=s.fill)!=null?o:"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Wt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},i1=class extends ps{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=t1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[o,r],a,l)=>{const[c,p]=l[(a+1)%l.length];return s.push(o,r,(o+c)/2,(r+p)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},r1=class extends ps{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=To(e.x-this.start.x),[s,o]=To(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(Ao),[l,c]=[this.start.y,this.start.y+s*o].sort(Ao);this.attr("cx",(r+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function sp(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(o),n.appendChild(s),n}var a1=class extends ps{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=np(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(sp(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let r=s/o;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+o*r,n=this.start.y+o):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},l1=class extends ps{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=To(e.x-this.start.x),[s,o]=To(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,s);t=r,s=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(Ao),[l,c]=[this.start.y,this.start.y+s*o].sort(Ao);this.attr("x",r),this.attr("y",l),this.attr("width",a-r),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function c1(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function u1(e,t,n){let s=t.x,o=t.y,r=n.x-s,a=n.y-o;if(r!==0||a!==0){const l=((e.x-s)*r+(e.y-o)*a)/(r*r+a*a);l>1?(s=n.x,o=n.y):l>0&&(s+=r*l,o+=a*l)}return r=e.x-s,a=e.y-o,r*r+a*a}function p1(e,t){let n=e[0];const s=[n];let o;for(let r=1,a=e.length;r<a;r++)o=e[r],c1(o,n)>t&&(s.push(o),n=o);return n!==o&&o&&s.push(o),s}function ir(e,t,n,s,o){let r=s,a=0;for(let l=t+1;l<n;l++){const c=u1(e[l],e[t],e[n]);c>r&&(a=l,r=c)}r>s&&(a-t>1&&ir(e,t,a,s,o),o.push(e[a]),n-a>1&&ir(e,a,n,s,o))}function f1(e,t){const n=e.length-1,s=[e[0]];return ir(e,0,n,t,s),s.push(e[n]),s}function Kl(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:p1(e,s),e=f1(e,s),e}var d1=class extends ps{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=np();const t=sp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Kl(this.points,1,!0),this.count=0),this.attr("d",Wl(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Wl(Kl(this.points,1,!0))),!e.getTotalLength()))}};function m1(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),angle:Math.atan2(s,n)}}function Bl(e,t,n,s){const o=t||e,r=n||e,a=.2,l=m1(o,r),c=l.angle+(s?Math.PI:0),p=l.length*a,f=e.x+Math.cos(c)*p,m=e.y+Math.sin(c)*p;return{x:f,y:m}}function h1(e,t,n){const s=Bl(n[t-1],n[t-2],e),o=Bl(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(Wt)},${s.y.toFixed(Wt)} ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)} ${e.x.toFixed(Wt)},${e.y.toFixed(Wt)}`}function Wl(e){return e.reduce((t,n,s,o)=>s===0?`M ${n.x.toFixed(Wt)},${n.y.toFixed(Wt)}`:`${t} ${h1(n,s,o)}`,"")}var g1=class extends ps{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const r=n[o];if(r.getTotalLength){const a=r.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=r.getPointAtLength(a*l/this.pathSubFactor),p=r.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:l,element:s||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,o=t.x1,r=t.x2,a=e.y1,l=e.y2,c=t.y1,p=t.y2,f=(n-s)*(c-p)-(a-l)*(o-r),m=(n*l-a*s)*(o-r)-(n-s)*(o*p-c*r),d=(n*l-a*s)*(c-p)-(a-l)*(o*p-c*r),h=(g,b,y)=>g>=b&&g<=y?!0:g>=y&&g<=b;if(f===0)return!1;{const g={x:m/f,y:d/f};return h(g.x,n,s)&&h(g.y,a,l)&&h(g.x,o,r)&&h(g.y,c,p)}}};function _1(e){return{draw:new d1(e),stylus:new i1(e),line:new a1(e),rectangle:new l1(e),ellipse:new r1(e),eraseLine:new g1(e)}}var v1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=n1(),this._models=_1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function y1(e){return new v1(e)}const rr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Dt=Ct("slidev-drawing-enabled",!1),TS=Ct("slidev-drawing-pinned",!1),b1=W(!1),P1=W(!1),k1=W(!1),Us=W(!1),Nn=vh(Ct("slidev-drawing-brush",{color:rr[0],size:4,mode:"stylus"})),Ul=W("stylus"),op=E(()=>we.drawings.syncAll||Ft.value);let qs=!1;const Ps=E({get(){return Ul.value},set(e){Ul.value=e,e==="arrow"?(Nn.mode="line",Nn.arrowEnd=!0):(Nn.mode=e,Nn.arrowEnd=!1)}}),w1=ze({brush:Nn,acceptsInputTypes:E(()=>Dt.value?void 0:["pen"]),coordinateTransform:!1}),nt=Bo(y1(w1));function R1(){nt.clear(),op.value&&Tu(Ke.value,"")}function ip(){var e;P1.value=nt.canRedo(),b1.value=nt.canUndo(),k1.value=!!((e=nt.el)!=null&&e.children.length)}function x1(e){qs=!0;const t=$o[e||Ke.value];t!=null?nt.load(t):nt.clear(),qs=!1}nt.on("changed",()=>{if(ip(),!qs){const e=nt.dump(),t=Ke.value;($o[t]||"")!==e&&op.value&&Tu(t,nt.dump())}});lh(e=>{qs=!0,e[Ke.value]!=null&&nt.load(e[Ke.value]||""),qs=!1,ip()});qe(()=>{fe(Ke,()=>{!nt.mounted||x1()},{immediate:!0})});nt.on("start",()=>Us.value=!0);nt.on("end",()=>Us.value=!1);window.addEventListener("keydown",e=>{if(!Dt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?nt.redo():nt.undo():e.code==="Escape"?Dt.value=!1:e.code==="KeyL"&&t?Ps.value="line":e.code==="KeyA"&&t?Ps.value="arrow":e.code==="KeyS"&&t?Ps.value="stylus":e.code==="KeyR"&&t?Ps.value="rectangle":e.code==="KeyE"&&t?Ps.value="ellipse":e.code==="KeyC"&&t?R1():e.code.startsWith("Digit")&&t&&+e.code[5]<=rr.length?Nn.color=rr[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function De(...e){return E(()=>e.every(t=>tt(t)))}function ut(e){return E(()=>!tt(e))}const ql=lg(),bi=Ct("slidev-color-schema","auto"),ar=E(()=>we.colorSchema!=="auto"),Gr=E({get(){return ar.value?we.colorSchema==="dark":bi.value==="auto"?ql.value:bi.value==="dark"},set(e){ar.value||(bi.value=e===ql.value?"auto":e?"dark":"light")}}),rp=Lu(Gr);At&&fe(Gr,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const Po=W(1),ko=E(()=>je.length-1),ht=W(0),Jr=W(0);function N1(){ht.value>Po.value&&(ht.value-=1)}function I1(){ht.value<ko.value&&(ht.value+=1)}function E1(){if(ht.value>Po.value){let e=ht.value-Jr.value;e<Po.value&&(e=Po.value),ht.value=e}}function S1(){if(ht.value<ko.value){let e=ht.value+Jr.value;e>ko.value&&(e=ko.value),ht.value=e}}function $1(){const{escape:e,space:t,shift:n,left:s,right:o,up:r,down:a,enter:l,d:c,g:p,o:f}=Xu,m=[{name:"next_space",key:De(t,ut(n)),fn:un,autoRepeat:!0},{name:"prev_space",key:De(t,n),fn:pn,autoRepeat:!0},{name:"next_right",key:De(o,ut(n),ut(et)),fn:un,autoRepeat:!0},{name:"prev_left",key:De(s,ut(n),ut(et)),fn:pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:un,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:pn,autoRepeat:!0},{name:"next_down",key:De(a,ut(et)),fn:Zs,autoRepeat:!0},{name:"prev_up",key:De(r,ut(et)),fn:()=>Gs(!1),autoRepeat:!0},{name:"next_shift",key:De(o,n),fn:Zs,autoRepeat:!0},{name:"prev_shift",key:De(s,n),fn:()=>Gs(!1),autoRepeat:!0},{name:"toggle_dark",key:De(c,ut(Dt)),fn:rp},{name:"toggle_overview",key:De(f,ut(Dt)),fn:ep},{name:"hide_overview",key:De(e,ut(Dt)),fn:()=>et.value=!1},{name:"goto",key:De(p,ut(Dt)),fn:()=>Yn.value=!Yn.value},{name:"next_overview",key:De(o,et),fn:I1},{name:"prev_overview",key:De(s,et),fn:N1},{name:"up_overview",key:De(r,et),fn:E1},{name:"down_overview",key:De(a,et),fn:S1},{name:"goto_from_overview",key:De(l,et),fn:()=>{rs(ht.value),et.value=!1}}];return{customShortcuts:[],defaultShortcuts:m}}const ap=De(ut(K_),ut(B_),D_);function O1(e,t,n=!1){typeof e=="string"&&(e=Xu[e]);const s=De(e,ap);let o=0,r;const a=()=>{if(clearTimeout(r),!s.value){o=0;return}n&&(r=setTimeout(a,Math.max(1e3-o*250,150)),o++),t()};return fe(s,a,{flush:"sync"})}function V1(e,t){return Uh(e,n=>{!ap.value||n.repeat||t()})}function A1(){const{customShortcuts:e,defaultShortcuts:t}=$1();new Map([...t,...e].map(s=>[s.key,s])).forEach(s=>{s.fn&&O1(s.key,s.fn,s.autoRepeat)}),V1("f",()=>Qu.toggle())}const T1={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C1=i("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),M1=[C1];function z1(e,t){return k(),q("svg",T1,M1)}const L1={name:"carbon-close",render:z1};function Xr(e){var n,s;const t=(s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.no;return t!=null?`slidev-page-${t}`:""}const lp=Ee({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;C(K);const n=W(),s=Pg(n),o=E(()=>t.width?t.width:s.width.value),r=E(()=>t.width?t.width/cn:s.height.value);t.width&&Qs(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${r.value}px`)});const a=E(()=>o.value/r.value),l=E(()=>t.scale?t.scale:a.value<cn?o.value/$n:r.value*cn/$n),c=E(()=>({height:`${Ou}px`,width:`${$n}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),p=E(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return dt($u,l),(f,m)=>(k(),q("div",{id:"slide-container",ref_key:"root",ref:n,class:Le(P(p))},[i("div",{id:"slide-content",style:Je(P(c))},[Zt(f.$slots,"default")],4),Zt(f.$slots,"controls")],2))}});const Qr=Ee({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),s=Ht(e,"clicksElements",t),o=Ht(e,"clicksDisabled",t),r=Ht(e,"clicksOrderMap",t);s.value.length=0,dt(Zm,e.route),dt(Gm,e.context),dt(Ss,n),dt($s,o),dt(kn,s),dt(Zi,r)},render(){var e,t;return this.$props.is?kt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),F1=["innerHTML"],H1=Ee({__name:"DrawingPreview",props:{page:null},setup(e){return C(K),(t,n)=>P($o)[e.page]?(k(),q("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:P($o)[e.page]},null,8,F1)):he("v-if",!0)}}),D1={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},j1=["onClick"],K1=Ee({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;C(K);const s=Ht(n,"modelValue",t);function o(){s.value=!1}function r(h){rs(h),o()}function a(h){return h===ht.value}const l=sr.smaller("xs"),c=sr.smaller("sm"),p=4*16*2,f=2*16,m=E(()=>l.value?On.width.value-p:c.value?(On.width.value-p-f)/2:300),d=E(()=>Math.floor((On.width.value-p)/(m.value+f)));return Qs(()=>{ht.value=Ke.value,Jr.value=d.value}),(h,g)=>{const b=L1;return k(),q(Ne,null,[Kr(i("div",D1,[i("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Je(`grid-template-columns: repeat(auto-fit,minmax(${P(m)}px,1fr))`)},[(k(!0),q(Ne,null,eo(P(je).slice(0,-1),(y,N)=>(k(),q("div",{key:y.path,class:"relative"},[i("div",{class:Le(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(N+1)}]),onClick:x=>r(+y.path)},[(k(),D(lp,{key:y.path,width:P(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:V(()=>[T(P(Qr),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:Le(P(Xr)(y)),route:y,context:"overview"},null,8,["is","class","route"]),T(H1,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],10,j1),i("div",{class:"absolute top-0 opacity-50",style:Je(`left: ${P(m)+5}px`)},Pt(N+1),5)]))),128))],4)],512),[[Iu,P(s)]]),P(s)?(k(),q("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[T(b)])):he("v-if",!0)],64)}}});const B1="/RETI/5/VPN/assets/logo.b72bde5d.png",W1={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},U1=Ee({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;C(K);const s=Ht(n,"modelValue",t);function o(){s.value=!1}return(r,a)=>(k(),D(lu,null,[P(s)?(k(),q("div",W1,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>o())}),i("div",{class:Le(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Zt(r.$slots,"default")],2)])):he("v-if",!0)],1024))}}),q1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Y1=["innerHTML"],Z1=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:B1,alt:"Slidev"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),u("dev ")])])],-1),G1=Ee({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;C(K);const s=Ht(n,"modelValue",t),o=E(()=>typeof we.info=="string");return(r,a)=>(k(),D(U1,{modelValue:P(s),"onUpdate:modelValue":a[0]||(a[0]=l=>xe(s)?s.value=l:null),class:"px-6 py-4"},{default:V(()=>[i("div",q1,[P(o)?(k(),q("div",{key:0,class:"mb-4",innerHTML:P(we).info},null,8,Y1)):he("v-if",!0),Z1])]),_:1},8,["modelValue"]))}});const J1=["disabled","onKeydown"],X1=Ee({__name:"Goto",setup(e){C(K);const t=W(),n=W(""),s=E(()=>{if(n.value.startsWith("/"))return!!je.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=Pp.value}});function o(){s.value&&(n.value.startsWith("/")?rs(n.value.substring(1)):rs(+n.value)),r()}function r(){Yn.value=!1}return fe(Yn,async a=>{var l,c;a?(await qe(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),fe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,l)=>(k(),q("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",P(Yn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Kr(i("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!P(Yn),class:Le(["outline-none bg-transparent",{"text-red-400":!P(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Ga(o,["enter"]),Ga(r,["escape"])],onBlur:r},null,42,J1),[[Sm,n.value]])],2))}}),Q1=Ee({__name:"Controls",setup(e){C(K);const t=Vt(),n=Vt();return(s,o)=>(k(),q(Ne,null,[T(K1,{modelValue:P(et),"onUpdate:modelValue":o[0]||(o[0]=r=>xe(et)?et.value=r:null)},null,8,["modelValue"]),T(X1),P(t)?(k(),D(P(t),{key:0})):he("v-if",!0),P(n)?(k(),D(P(n),{key:1,modelValue:P(vi),"onUpdate:modelValue":o[1]||(o[1]=r=>xe(vi)?vi.value=r:null)},null,8,["modelValue"])):he("v-if",!0),P(we).info?(k(),D(G1,{key:2,modelValue:P(As),"onUpdate:modelValue":o[2]||(o[2]=r=>xe(As)?As.value=r:null)},null,8,["modelValue"])):he("v-if",!0)],64))}}),e0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t0=i("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),n0=[t0];function s0(e,t){return k(),q("svg",e0,n0)}const o0={name:"carbon-settings-adjust",render:s0},i0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r0=i("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),a0=i("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),l0=[r0,a0];function c0(e,t){return k(),q("svg",i0,l0)}const u0={name:"carbon-information",render:c0},p0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f0=i("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),d0=[f0];function m0(e,t){return k(),q("svg",p0,d0)}const h0={name:"carbon-download",render:m0},g0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_0=i("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),v0=i("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),y0=[_0,v0];function b0(e,t){return k(),q("svg",g0,y0)}const P0={name:"carbon-user-speaker",render:b0},k0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w0=i("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),R0=i("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),x0=[w0,R0];function N0(e,t){return k(),q("svg",k0,x0)}const I0={name:"carbon-presentation-file",render:N0},E0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S0=i("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),$0=[S0];function O0(e,t){return k(),q("svg",E0,$0)}const V0={name:"carbon-pen",render:O0},A0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},T0=i("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),C0=i("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),M0=[T0,C0];function z0(e,t){return k(),q("svg",A0,M0)}const L0={name:"ph-cursor-duotone",render:z0},F0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},H0=i("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),D0=[H0];function j0(e,t){return k(),q("svg",F0,D0)}const cp={name:"ph-cursor-fill",render:j0},K0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B0=i("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),W0=[B0];function U0(e,t){return k(),q("svg",K0,W0)}const q0={name:"carbon-sun",render:U0},Y0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z0=i("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),G0=[Z0];function J0(e,t){return k(),q("svg",Y0,G0)}const X0={name:"carbon-moon",render:J0},Q0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ev=i("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),tv=[ev];function nv(e,t){return k(),q("svg",Q0,tv)}const sv={name:"carbon-apps",render:nv},ov={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iv=i("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),rv=[iv];function av(e,t){return k(),q("svg",ov,rv)}const up={name:"carbon-arrow-right",render:av},lv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cv=i("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),uv=[cv];function pv(e,t){return k(),q("svg",lv,uv)}const fv={name:"carbon-arrow-left",render:pv},dv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mv=i("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),hv=[mv];function gv(e,t){return k(),q("svg",dv,hv)}const _v={name:"carbon-maximize",render:gv},vv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yv=i("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),bv=[yv];function Pv(e,t){return k(),q("svg",vv,bv)}const kv={name:"carbon-minimize",render:Pv},wv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rv=i("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),xv=[Rv];function Nv(e,t){return k(),q("svg",wv,xv)}const Iv={name:"carbon-checkmark",render:Nv},Ev={class:"select-list"},Sv={class:"title"},$v={class:"items"},Ov=["onClick"],Vv=Ee({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;C(K);const s=Ht(n,"modelValue",t,{passive:!0});return(o,r)=>{const a=Iv;return k(),q("div",Ev,[i("div",Sv,Pt(e.title),1),i("div",$v,[(k(!0),q(Ne,null,eo(e.items,l=>(k(),q("div",{key:l.value,class:Le(["item",{active:P(s)===l.value}]),onClick:()=>{var c;s.value=l.value,(c=l.onClick)==null||c.call(l)}},[T(a,{class:Le(["text-green-500",{"opacity-0":P(s)!==l.value}])},null,8,["class"]),u(" "+Pt(l.display||l.value),1)],10,Ov))),128))])])}}});const pp=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Av=pp(Vv,[["__scopeId","data-v-7dd0eaca"]]),Tv={class:"text-sm"},Cv=Ee({__name:"Settings",setup(e){C(K);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(k(),q("div",Tv,[T(Av,{modelValue:P(bo),"onUpdate:modelValue":s[0]||(s[0]=o=>xe(bo)?bo.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),Mv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},zv=Ee({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;C(K);const s=Ht(n,"modelValue",t,{passive:!0}),o=W();return Bh(o,()=>{s.value=!1}),(r,a)=>(k(),q("div",{ref_key:"el",ref:o,class:"flex relative"},[i("button",{class:Le({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>s.value=!P(s))},[Zt(r.$slots,"button",{class:Le({disabled:e.disabled})})],2),(k(),D(lu,null,[P(s)?(k(),q("div",Mv,[Zt(r.$slots,"menu")])):he("v-if",!0)],1024))],512))}}),Lv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},fo={__name:"VerticalDivider",setup(e){return C(K),(t,n)=>(k(),q("div",Lv))}},Fv={render(){return[]}},Hv={class:"icon-btn"},Dv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},jv={class:"my-auto"},Kv={class:"opacity-50"},Bv=Ee({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;C(K);const n=sr.smaller("md"),{isFullscreen:s,toggle:o}=Qu,r=E(()=>cr.value?`?password=${cr.value}`:""),a=E(()=>`/presenter/${Ke.value}${r.value}`),l=E(()=>`/${Ke.value}${r.value}`),c=W(),p=()=>{c.value&&es.value&&c.value.contains(es.value)&&es.value.blur()},f=E(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=Vt(),d=Vt();return us(()=>import("./DrawingControls.4c0553b7.js"),["assets/DrawingControls.4c0553b7.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.b1ef75f8.js"]).then(h=>d.value=h.default),(h,g)=>{const b=kv,y=_v,N=fv,x=up,R=sv,I=X0,F=q0,z=cp,B=L0,te=V0,le=I0,ge=Fi("RouterLink"),ye=P0,Me=h0,He=u0,Ye=o0;return k(),q("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[i("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",P(f)]),onMouseleave:p},[P(Bt)?he("v-if",!0):(k(),q("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Se)=>P(o)&&P(o)(...Se))},[P(s)?(k(),D(b,{key:0})):(k(),D(y,{key:1}))])),i("button",{class:Le(["icon-btn",{disabled:!P(Zx)}]),onClick:g[1]||(g[1]=(...Se)=>P(pn)&&P(pn)(...Se))},[T(N)],2),i("button",{class:Le(["icon-btn",{disabled:!P(Yx)}]),title:"Next",onClick:g[2]||(g[2]=(...Se)=>P(un)&&P(un)(...Se))},[T(x)],2),P(Bt)?he("v-if",!0):(k(),q("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Se=>P(ep)())},[T(R)])),P(ar)?he("v-if",!0):(k(),q("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Se=>P(rp)())},[P(Gr)?(k(),D(I,{key:0})):(k(),D(F,{key:1}))])),T(fo),P(Bt)?he("v-if",!0):(k(),q(Ne,{key:3},[!P(Ft)&&!P(n)&&P(m)?(k(),q(Ne,{key:0},[T(P(m)),T(fo)],64)):he("v-if",!0),P(Ft)?(k(),q("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Se=>yi.value=!P(yi))},[P(yi)?(k(),D(z,{key:0})):(k(),D(B,{key:1,class:"opacity-50"}))])):he("v-if",!0)],64)),!P(we).drawings.presenterOnly&&!P(Bt)?(k(),q(Ne,{key:4},[i("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Se=>Dt.value=!P(Dt))},[T(te),P(Dt)?(k(),q("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Je({background:P(Nn).color})},null,4)):he("v-if",!0)]),T(fo)],64)):he("v-if",!0),P(Bt)?he("v-if",!0):(k(),q(Ne,{key:5},[P(Ft)?(k(),D(ge,{key:0,to:P(l),class:"icon-btn",title:"Play Mode"},{default:V(()=>[T(le)]),_:1},8,["to"])):he("v-if",!0),P(Wx)?(k(),D(ge,{key:1,to:P(a),class:"icon-btn",title:"Presenter Mode"},{default:V(()=>[T(ye)]),_:1},8,["to"])):he("v-if",!0),he("v-if",!0)],64)),(k(),q(Ne,{key:6},[P(we).download?(k(),q("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Se)=>P(ur)&&P(ur)(...Se))},[T(Me)])):he("v-if",!0)],64)),!P(Ft)&&P(we).info&&!P(Bt)?(k(),q("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Se=>As.value=!P(As))},[T(He)])):he("v-if",!0),!P(Ft)&&!P(Bt)?(k(),D(zv,{key:8},{button:V(()=>[i("button",Hv,[T(Ye)])]),menu:V(()=>[T(Cv)]),_:1})):he("v-if",!0),P(Bt)?he("v-if",!0):(k(),D(fo,{key:9})),i("div",Dv,[i("div",jv,[u(Pt(P(Ke))+" ",1),i("span",Kv,"/ "+Pt(P(Pp)),1)])]),T(P(Fv))],34)],512)}}}),Wv={style:{"font-size":"0.55rem","line-height":"1rem"}},Uv=i("div",{class:"absolute bottom-0 left-1"},[i("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),qv={class:"absolute bottom-1 left-89 text-gray-700"},Yv={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Zv={__name:"global-top",setup(e){const t=C(K);return(n,s)=>(k(),q("footer",Wv,[Uv,i("div",qv," ITT E.Agnelli - Informatica - "+Pt(P(t).configs.materia)+" - prof. Antonio Mancuso - a.s. "+Pt(P(t).configs.as)+" - v "+Pt(P(t).configs.version||0),1),P(t).nav.currentPage!==1&&P(t).nav.currentPage!=P(t).nav.total+1?(k(),q("div",Yv,Pt(P(t).nav.currentPage-1)+" / "+Pt(P(t).nav.total-1),1)):he("v-if",!0)]))}},fp={render(){return[kt(Zv)]}},dp={render(){return[]}},Gv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Jv=Ee({__name:"PresenterMouse",setup(e){return C(K),(t,n)=>{const s=cp;return P(mi).cursor?(k(),q("div",Gv,[T(s,{class:"absolute",style:Je({left:`${P(mi).cursor.x}%`,top:`${P(mi).cursor.y}%`})},null,8,["style"])])):he("v-if",!0)}}}),Xv=Ee({__name:"SlidesShow",props:{context:null},setup(e){C(K),fe(ft,()=>{var n,s;((n=ft.value)==null?void 0:n.meta)&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),((s=Pi.value)==null?void 0:s.meta)&&Pi.value.meta.preload!==!1&&(Pi.value.meta.__preloaded=!0)},{immediate:!0});const t=Vt();return us(()=>import("./DrawingLayer.4385d57b.js"),[]).then(n=>t.value=n.default),(n,s)=>(k(),q(Ne,null,[he(" Global Bottom "),T(P(dp)),he(" Slides "),(k(!0),q(Ne,null,eo(P(je),o=>{var r,a;return k(),q(Ne,{key:o.path},[((r=o.meta)==null?void 0:r.__preloaded)||o===P(ft)?Kr((k(),D(P(Qr),{key:0,is:o==null?void 0:o.component,clicks:o===P(ft)?P(Ot):0,"clicks-elements":((a=o.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Le(P(Xr)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Iu,o===P(ft)]]):he("v-if",!0)],64)}),128)),he(" Global Top "),T(P(fp)),P(t)?(k(),D(P(t),{key:0})):he("v-if",!0),P(Ft)?he("v-if",!0):(k(),D(Jv,{key:1}))],64))}}),Qv=Ee({__name:"Play",setup(e){C(K),A1();const t=W();function n(r){var a;Ll.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?un():pn())}Xx(t);const s=E(()=>j_.value||Ll.value);Vt();const o=Vt();return us(()=>import("./DrawingControls.4c0553b7.js"),["assets/DrawingControls.4c0553b7.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.b1ef75f8.js"]).then(r=>o.value=r.default),(r,a)=>(k(),q(Ne,null,[i("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Je(P(Vu))},[T(lp,{class:"w-full h-full",style:Je({background:"var(--slidev-slide-container-background, black)"}),width:P(na)?P(On).width.value:void 0,scale:P(bo),onPointerdown:n},{default:V(()=>[T(Xv,{context:"slide"})]),controls:V(()=>[i("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[P(s)?"opacity-100 right-0":"opacity-0 p-2",P(Us)?"pointer-events-none":""]])},[T(Bv,{class:"m-auto",persist:P(s)},null,8,["persist"])],2),!P(we).drawings.presenterOnly&&!P(Bt)&&P(o)?(k(),D(P(o),{key:0,class:"ml-0"})):he("v-if",!0)]),_:1},8,["style","width","scale"]),he("v-if",!0)],4),T(Q1)],64))}});function mp(e){const t=E(()=>e.value.path),n=E(()=>je.length-1),s=E(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=E(()=>ni(s.value)),r=E(()=>je.find(d=>d.path===`${s.value}`)),a=E(()=>{var d,h,g;return(g=(h=(d=r.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:g.id}),l=E(()=>{var d,h;return(h=(d=r.value)==null?void 0:d.meta)==null?void 0:h.layout}),c=E(()=>je.find(d=>d.path===`${Math.min(je.length,s.value+1)}`)),p=E(()=>je.filter(d=>{var h,g;return(g=(h=d.meta)==null?void 0:h.slide)==null?void 0:g.title}).reduce((d,h)=>(sa(d,h),d),[])),f=E(()=>oa(p.value,r.value)),m=E(()=>ia(f.value));return{route:e,path:t,total:n,currentPage:s,currentPath:o,currentRoute:r,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:p,treeWithActiveStatuses:f,tree:m}}function hp(e,t,n){const s=W(0);qe(()=>{gt.afterEach(async()=>{await qe(),s.value+=1})});const o=E(()=>{var c,p;return s.value,((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=E(()=>{var c,p,f;return+((f=(p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.clicks)!=null?f:o.value.length)}),a=E(()=>n.value<je.length-1||e.value<r.value),l=E(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:r,hasNext:a,hasPrev:l}}const ey=["id"],Yl=Ee({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Ht(n,"clicksElements",t),o=E(()=>({height:`${Ou}px`,width:`${$n}px`})),r=Vt();us(()=>import("./DrawingPreview.9aa755f9.js"),[]).then(p=>r.value=p.default);const a=E(()=>n.clicks),l=hp(a,n.nav.currentRoute,n.nav.currentPage),c=E(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return dt(K,ze({nav:{...n.nav,...l},configs:we,themeConfigs:E(()=>we.themeConfig)})),(p,f)=>{var m;return k(),q("div",{id:P(c),class:"slide-container",style:Je(P(o))},[T(P(dp)),T(P(Qr),{is:(m=e.route)==null?void 0:m.component,"clicks-elements":P(s),"onUpdate:clicks-elements":f[0]||(f[0]=d=>xe(s)?s.value=d:null),clicks:P(a),"clicks-disabled":!1,class:Le(P(Xr)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),P(r)?(k(),D(P(r),{key:0,page:+e.route.path},null,8,["page"])):he("v-if",!0),T(P(fp))],12,ey)}}}),ty=Ee({__name:"PrintSlide",props:{route:null},setup(e){var r;const t=e;C(K);const n=ze(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),s=E(()=>t.route),o=mp(s);return(a,l)=>(k(),q(Ne,null,[T(Yl,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=c=>xe(n)?n.value=c:null),clicks:0,nav:P(o),route:P(s)},null,8,["clicks-elements","nav","route"]),P(Ts)?he("v-if",!0):(k(!0),q(Ne,{key:0},eo(n.length,c=>(k(),D(Yl,{key:c,clicks:c,nav:P(o),route:P(s)},null,8,["clicks","nav","route"]))),128))],64))}}),ny={id:"print-content"},sy=Ee({__name:"PrintContainer",props:{width:null},setup(e){const t=e;C(K);const n=E(()=>t.width),s=E(()=>t.width/cn),o=E(()=>n.value/s.value),r=E(()=>o.value<cn?n.value/$n:s.value*cn/$n),a=je.slice(0,-1),l=E(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return dt($u,r),(c,p)=>(k(),q("div",{id:"print-container",class:Le(P(l))},[i("div",ny,[(k(!0),q(Ne,null,eo(P(a),f=>(k(),D(ty,{key:f.path,route:f},null,8,["route"]))),128))]),Zt(c.$slots,"controls")],2))}});const oy=Ee({__name:"Print",setup(e){C(K);const t=xn.canvasWidth,n=Math.round(t/xn.aspectRatio)+1;function s(o,{slots:r}){if(r.default)return kt("style",r.default())}return Qs(()=>{na?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,r)=>(k(),q(Ne,null,[T(s,null,{default:V(()=>[u(" @page { size: "+Pt(P(t))+"px "+Pt(n)+"px; margin: 0px; } ",1)]),_:1}),i("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Je(P(Vu))},[T(sy,{class:"w-full h-full",style:Je({background:"var(--slidev-slide-container-background, black)"}),width:P(On).width.value},null,8,["style","width"])],4)],64))}});const iy={class:"slidev-layout end"},ry={__name:"end",setup(e){return C(K),(t,n)=>(k(),q("div",iy," END "))}},ay=pp(ry,[["__scopeId","data-v-ab32435f"]]);function Zl(e){return e.startsWith("/")?"/RETI/5/VPN/"+e.slice(1):e}function ly(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Zl(e)})`:`url("${Zl(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const cy={class:"my-auto w-full"},uy=Ee({__name:"cover",props:{background:{default:""}},setup(e){const t=e;C(K);const n=E(()=>ly(t.background,!0));return(s,o)=>(k(),q("div",{class:"slidev-layout cover",style:Je(P(n))},[i("div",cy,[Zt(s.$slots,"default")])],4))}}),py=i("h1",null,"SISTEMI & RETI",-1),fy=i("p",null,"IPsec VPN su Cisco IOS",-1),dy={class:"pt-12"},my={class:"px-2 py-1"},hy=u(" Premi spazio o "),gy=u(" per la prossima slide "),_y={__name:"1",setup(e){const t={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI",as:"2022/2023",version:"1.0.0"};return C(K),(n,s)=>{const o=up;return k(),D(uy,ne(ee(t)),{default:V(()=>[py,fy,i("div",dy,[i("span",my,[hy,T(o,{class:"inline"}),gy])])]),_:1},16)}}},vy="/RETI/5/VPN/assets/vpn_00.d1de31a5.png",yy={class:"slidev-layout default"},oe={__name:"default",setup(e){return C(K),(t,n)=>(k(),q("div",yy,[Zt(t.$slots,"default")]))}},by=i("h1",null,"IPsec VPN",-1),Py=i("p",null,"Intro",-1),ky=i("ul",null,[i("li",null,[u("In telecomunicazioni e informatica "),i("code",null,"IPsec"),u(", abbreviazione di "),i("em",null,[i("strong",null,"IP Security")]),u(", \xE8 uno standard per reti a pacchetto che permette di ottenere connessioni sicure su reti IP pubbliche.")]),i("li",null,[u("Tale sicurezza viene raggiunta attraverso l\u2019aggiunta di funzionalit\xE0 di "),i("strong",null,"autenticazione, cifratura e controllo di integrit\xE0"),u(" dei pacchetti IP.")]),i("li",null,"La capacit\xE0 di fornire protezione e sicurezza viene dunque fornita a livello di rete (diversamente da HTTPS, SSL/TLS), fatto che rende questo protocollo trasparente al livello delle applicazioni che quindi non devono essere modificate."),i("li",null,"IPsec \xE8 parte integrante di IPv6, mentre \xE8 opzionale in IPv4")],-1),wy=i("img",{src:vy,style:{width:"450px",margin:"auto"}},null,-1),Ry={__name:"2",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[by,Py,ky,wy]),_:1},16))}},xy=i("h1",null,"IPsec VPN",-1),Ny=i("p",null,"Intro",-1),Iy=i("ul",null,[i("li",null,[i("p",null,"IPsec \xE8 una collezione di protocolli formata da:"),i("ol",null,[i("li",null,"Protocolli che implementano lo scambio delle chiavi per realizzare il flusso crittografato."),i("li",null,"Protocolli che forniscono la cifratura del flusso di dati.")])]),i("li",null,[i("p",null,[u("Per lo scambio delle chiavi esiste un solo protocollo chiamato "),i("code",null,"IKE"),u(),i("strong",null,"(Internet Key Exchange)")])]),i("li",null,[i("p",null,[u("Per quanto riguarda l\u2019autenticazione e integrit\xE0 dei pacchetti IP si pu\xF2 utilizzare il protocollo "),i("code",null,"AH"),u(),i("strong",null,"(Authentication Header (AH)")])]),i("li",null,[i("p",null,[u("Un terzo protocollo chiamato "),i("code",null,"ESP"),u(),i("strong",null,"(Encapsulating Security Payload)"),u(" fornisce invece autenticazione, riservatezza e controllo di integrit\xE0 dei pacchetti IP")])]),i("li",null,[i("p",null,"Per questi motivi ESP \xE8 molto pi\xF9 usato di AH")])],-1),Ey={__name:"3",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[xy,Ny,Iy]),_:1},16))}},Sy="/RETI/5/VPN/assets/vpn_01.56b907cd.png",$y=i("h1",null,"IPsec VPN",-1),Oy=i("p",null,"Intro",-1),Vy=i("p",null,"IPsec supporta due modalit\xE0 di funzionamento:",-1),Ay=i("ul",null,[i("li",null,[i("strong",null,"Transport mode"),i("ul",null,[i("li",null,"connessione host-to-host tra due end-point o host-to-router;"),i("li",null,"in caso di cifratura, viene cifrato solo il payload dei datagrammi IP, non l\u2019header"),i("li",null,"computazionalmente leggero;"),i("li",null,"ogni host che vuole comunicare deve avere tutto il software necessario ad implementare IPsec"),i("li",null,"si aggiunge solo l\u2019header IPsec"),i("li",null,"gli indirizzi mittente e destinatario degli end-point sono rilevabili.")])])],-1),Ty=i("img",{src:Sy,style:{width:"550px",margin:"auto"}},null,-1),Cy={__name:"4",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[$y,Oy,Vy,Ay,Ty]),_:1},16))}},My="/RETI/5/VPN/assets/vpn_02.9a1a8e02.png",zy=i("h1",null,"IPsec VPN",-1),Ly=i("p",null,"Intro",-1),Fy=i("p",null,"IPsec supporta due modalit\xE0 di funzionamento:",-1),Hy=i("ul",null,[i("li",null,[i("strong",null,"Tunnel mode"),i("ul",null,[i("li",null,"connessione router-to-router (site-to-site) (sia da AH che da ESP)"),i("li",null,"in caso di cifratura, viene cifrato tutto il pacchetto IP originale"),i("li",null,"computazionalmente oneroso"),i("li",null,"solo i router devono avere il software IPsec"),i("li",null,"utilizza un doppio incapsulamento o tunneling"),i("li",null,"adottando il protocollo Encapsulating Security Payload, gli indirizzi mittente e destinatario degli end-point non sono quindi pi\xF9 rilevabili")])])],-1),Dy=i("img",{src:My,style:{width:"500px",margin:"auto"}},null,-1),jy={__name:"5",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[zy,Ly,Fy,Hy,Dy]),_:1},16))}},Ky="/RETI/5/VPN/assets/vpn_03.78185675.png",By="/RETI/5/VPN/assets/vpn_04.e2082af9.png",Wy=i("h1",null,"IPsec VPN",-1),Uy=i("p",null,"Remote VPN e Site-to-Site VPN",-1),qy=i("ul",null,[i("li",null,[u("Nel resto di questa esercitazione configureremo i due tipi di VPN studiati "),i("ol",null,[i("li",null,"Remote VPN: VPN tra un dipendente mobile e la sede principale dell\u2019azienda ACME")])])],-1),Yy=i("br",null,null,-1),Zy=i("img",{src:Ky,style:{width:"400px",margin:"auto"}},null,-1),Gy=i("br",null,null,-1),Jy=i("ol",{start:"2"},[i("li",null,"Site-to-Site VPN: tra una sede remota e la la sede principale dell\u2019azienda ACME")],-1),Xy=i("br",null,null,-1),Qy=i("img",{src:By,style:{width:"400px",margin:"auto"}},null,-1),eb={__name:"6",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[Wy,Uy,qy,Yy,Zy,Gy,Jy,Xy,Qy]),_:1},16))}},tb="/RETI/5/VPN/assets/vpn_05.1eacd2e3.png",nb=i("h1",null,"IPsec VPN",-1),sb=i("p",null,"Remote VPN",-1),ob=i("img",{src:tb,style:{width:"900px",margin:"auto"}},null,-1),ib=i("br",null,null,-1),rb=i("ul",null,[i("li",null,"il VPN Router \xE8 il modello Cisco c1900")],-1),ab={__name:"7",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[nb,sb,ob,ib,rb]),_:1},16))}},lb={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},cb=i("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),ub=[cb];function pb(e,t){return k(),q("svg",lb,ub)}const fb={name:"ph-clipboard",render:pb},db={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},mb=i("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),hb=[mb];function gb(e,t){return k(),q("svg",db,hb)}const _b={name:"ph-check-circle",render:gb};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function gp(e){return typeof e>"u"||e===null}function vb(e){return typeof e=="object"&&e!==null}function yb(e){return Array.isArray(e)?e:gp(e)?[]:[e]}function bb(e,t){var n,s,o,r;if(t)for(r=Object.keys(t),n=0,s=r.length;n<s;n+=1)o=r[n],e[o]=t[o];return e}function Pb(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function kb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var wb=gp,Rb=vb,xb=yb,Nb=Pb,Ib=kb,Eb=bb,ea={isNothing:wb,isObject:Rb,toArray:xb,repeat:Nb,isNegativeZero:Ib,extend:Eb};function _p(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Ys(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=_p(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ys.prototype=Object.create(Error.prototype);Ys.prototype.constructor=Ys;Ys.prototype.toString=function(t){return this.name+": "+_p(this,t)};var wn=Ys,Sb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],$b=["scalar","sequence","mapping"];function Ob(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function Vb(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Sb.indexOf(n)===-1)throw new wn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Ob(t.styleAliases||null),$b.indexOf(this.kind)===-1)throw new wn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ge=Vb;function Gl(e,t){var n=[];return e[t].forEach(function(s){var o=n.length;n.forEach(function(r,a){r.tag===s.tag&&r.kind===s.kind&&r.multi===s.multi&&(o=a)}),n[o]=s}),n}function Ab(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function lr(e){return this.extend(e)}lr.prototype.extend=function(t){var n=[],s=[];if(t instanceof Ge)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new wn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof Ge))throw new wn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new wn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new wn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(r){if(!(r instanceof Ge))throw new wn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(lr.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(s),o.compiledImplicit=Gl(o,"implicit"),o.compiledExplicit=Gl(o,"explicit"),o.compiledTypeMap=Ab(o.compiledImplicit,o.compiledExplicit),o};var Tb=lr,Cb=new Ge("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Mb=new Ge("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),zb=new Ge("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Lb=new Tb({explicit:[Cb,Mb,zb]});function Fb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Hb(){return null}function Db(e){return e===null}var jb=new Ge("tag:yaml.org,2002:null",{kind:"scalar",resolve:Fb,construct:Hb,predicate:Db,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Kb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Bb(e){return e==="true"||e==="True"||e==="TRUE"}function Wb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Ub=new Ge("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Kb,construct:Bb,predicate:Wb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function qb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Yb(e){return 48<=e&&e<=55}function Zb(e){return 48<=e&&e<=57}function Gb(e){if(e===null)return!1;var t=e.length,n=0,s=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;s=!0}return s&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!qb(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!Yb(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!Zb(e.charCodeAt(n)))return!1;s=!0}return!(!s||o==="_")}function Jb(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Xb(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ea.isNegativeZero(e)}var Qb=new Ge("tag:yaml.org,2002:int",{kind:"scalar",resolve:Gb,construct:Jb,predicate:Xb,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),eP=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function tP(e){return!(e===null||!eP.test(e)||e[e.length-1]==="_")}function nP(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var sP=/^[-+]?[0-9]+e/;function oP(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ea.isNegativeZero(e))return"-0.0";return n=e.toString(10),sP.test(n)?n.replace("e",".e"):n}function iP(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ea.isNegativeZero(e))}var rP=new Ge("tag:yaml.org,2002:float",{kind:"scalar",resolve:tP,construct:nP,predicate:iP,represent:oP,defaultStyle:"lowercase"}),aP=Lb.extend({implicit:[jb,Ub,Qb,rP]}),lP=aP,vp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),yp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function cP(e){return e===null?!1:vp.exec(e)!==null||yp.exec(e)!==null}function uP(e){var t,n,s,o,r,a,l,c=0,p=null,f,m,d;if(t=vp.exec(e),t===null&&(t=yp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,s,o));if(r=+t[4],a=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(f=+t[10],m=+(t[11]||0),p=(f*60+m)*6e4,t[9]==="-"&&(p=-p)),d=new Date(Date.UTC(n,s,o,r,a,l,c)),p&&d.setTime(d.getTime()-p),d}function pP(e){return e.toISOString()}var fP=new Ge("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:cP,construct:uP,instanceOf:Date,represent:pP});function dP(e){return e==="<<"||e===null}var mP=new Ge("tag:yaml.org,2002:merge",{kind:"scalar",resolve:dP}),ta=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function hP(e){if(e===null)return!1;var t,n,s=0,o=e.length,r=ta;for(n=0;n<o;n++)if(t=r.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function gP(e){var t,n,s=e.replace(/[\r\n=]/g,""),o=s.length,r=ta,a=0,l=[];for(t=0;t<o;t++)t%4===0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)),a=a<<6|r.indexOf(s.charAt(t));return n=o%4*6,n===0?(l.push(a>>16&255),l.push(a>>8&255),l.push(a&255)):n===18?(l.push(a>>10&255),l.push(a>>2&255)):n===12&&l.push(a>>4&255),new Uint8Array(l)}function _P(e){var t="",n=0,s,o,r=e.length,a=ta;for(s=0;s<r;s++)s%3===0&&s&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[s];return o=r%3,o===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):o===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):o===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function vP(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var yP=new Ge("tag:yaml.org,2002:binary",{kind:"scalar",resolve:hP,construct:gP,predicate:vP,represent:_P}),bP=Object.prototype.hasOwnProperty,PP=Object.prototype.toString;function kP(e){if(e===null)return!0;var t=[],n,s,o,r,a,l=e;for(n=0,s=l.length;n<s;n+=1){if(o=l[n],a=!1,PP.call(o)!=="[object Object]")return!1;for(r in o)if(bP.call(o,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function wP(e){return e!==null?e:[]}var RP=new Ge("tag:yaml.org,2002:omap",{kind:"sequence",resolve:kP,construct:wP}),xP=Object.prototype.toString;function NP(e){if(e===null)return!0;var t,n,s,o,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(s=a[t],xP.call(s)!=="[object Object]"||(o=Object.keys(s),o.length!==1))return!1;r[t]=[o[0],s[o[0]]]}return!0}function IP(e){if(e===null)return[];var t,n,s,o,r,a=e;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1)s=a[t],o=Object.keys(s),r[t]=[o[0],s[o[0]]];return r}var EP=new Ge("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:NP,construct:IP}),SP=Object.prototype.hasOwnProperty;function $P(e){if(e===null)return!0;var t,n=e;for(t in n)if(SP.call(n,t)&&n[t]!==null)return!1;return!0}function OP(e){return e!==null?e:{}}var VP=new Ge("tag:yaml.org,2002:set",{kind:"mapping",resolve:$P,construct:OP});lP.extend({implicit:[fP,mP],explicit:[yP,RP,EP,VP]});function Jl(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var AP=new Array(256),TP=new Array(256);for(var jn=0;jn<256;jn++)AP[jn]=Jl(jn)?1:0,TP[jn]=Jl(jn);function CP(e){return Array.from(new Set(e))}function Xl(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let r=t;for(;r<n;)o.push(r),r+=s||1;return o}function MP(e,t){if(!t||t==="all"||t==="*")return Xl(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[o,r]=s.split("-",2);n.push(...Xl(+o,r?+r+1:e+1))}return CP(n).filter(s=>s<=e).sort((s,o)=>s-o)}const zP=["title"],ke=Ee({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;C(K);const n=C(Ss),s=C(kn),o=C($s);function r(m=5){const d=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=h.length;for(let b=0;b<m;b++)d.push(h.charAt(Math.floor(Math.random()*g)));return d.join("")}const a=W(),l=Mn();cs(()=>{const m=t.at==null?s==null?void 0:s.value.length:t.at,d=E(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(m||0)),t.ranges.length-1)),h=E(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const g=r(),b=Xm(t.ranges.length-1).map(y=>g+y);s!=null&&s.value&&(s.value.push(...b),Jo(()=>b.forEach(y=>Gi(s.value,y)),l))}Qs(()=>{if(!a.value)return;const b=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const y of b){const N=Array.from(y.querySelectorAll(".line")),x=MP(N.length,h.value);if(N.forEach((R,I)=>{const F=x.includes(I+1);R.classList.toggle(bn,!0),R.classList.toggle("highlighted",F),R.classList.toggle("dishonored",!F)}),t.maxHeight){const R=y.querySelector(".line.highlighted");R&&R.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=eg();function f(){var d,h;const m=(h=(d=a.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,d)=>{const h=_b,g=fb;return k(),q("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Je({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Zt(m.$slots,"default"),P(we).codeCopy?(k(),q("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:P(c)?"Copied":"Copy",onClick:d[0]||(d[0]=b=>f())},[P(c)?(k(),D(h,{key:0,class:"p-2 w-8 h-8"})):(k(),D(g,{key:1,class:"p-2 w-8 h-8"}))],8,zP)):he("v-if",!0)],4)}}}),LP=i("h1",null,"IPsec VPN",-1),FP=i("p",null,"Remote VPN",-1),HP=i("p",null,[i("strong",null,"#1 abilitare la licenza per le VPN")],-1),DP=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#conf t")]),u(`
`),i("span",{class:"line"},"Enter configuration commands, one per line.  End with CNTL/Z."),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#license boot module c1900 technology-package securityk9")])])],-1),jP=i("br",null,null,-1),KP=i("p",null,[i("strong",null,"#2 salvare la configurazione e fare il reload")],-1),BP=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#copy running-config startup-config ")]),u(`
`),i("span",{class:"line"},[u("Destination filename "),i("span",{class:"token punctuation"},"["),u("startup-config"),i("span",{class:"token punctuation"},"]"),u("? ")]),u(`
`),i("span",{class:"line"},[u("Building configuration"),i("span",{class:"token punctuation"},".."),u(".")]),u(`
`),i("span",{class:"line"},[i("span",{class:"token punctuation"},"["),u("OK"),i("span",{class:"token punctuation"},"]")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#reload")])])],-1),WP={__name:"8",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[LP,FP,HP,T(o,ce({},{ranges:[""]}),{default:V(()=>[DP]),_:1},16),jP,KP,T(o,ce({},{ranges:[""]}),{default:V(()=>[BP]),_:1},16)]),_:1},16)}}},UP=i("h1",null,"IPsec VPN",-1),qP=i("p",null,"Remote VPN",-1),YP=i("p",null,[i("strong",null,"#3 confermare l\u2019attivazione della licenza per VPN")],-1),ZP=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show version ")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},"----------------------------------------------------------------"),u(`
`),i("span",{class:"line"},"Technology    Technology-package          Technology-package"),u(`
`),i("span",{class:"line"},[u("              Current       Type          Next "),i("span",{class:"token function"},"reboot")]),u(`
`),i("span",{class:"line"},"-----------------------------------------------------------------"),u(`
`),i("span",{class:"line"},"ipbase        ipbasek9      Permanent     ipbasek9"),u(`
`),i("span",{class:"line"},"security      securityk9    Evaluation    securityk9"),u(`
`),i("span",{class:"line"},"data          disable       None          None")])],-1),GP={__name:"9",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[UP,qP,YP,T(o,ce({},{ranges:[""]}),{default:V(()=>[ZP]),_:1},16)]),_:1},16)}}},JP=i("h1",null,"IPsec VPN",-1),XP=i("p",null,"Remote VPN",-1),QP=i("p",null,[i("strong",null,"#4 configurare il pool di indirizzi da assegnare ai client VPN")],-1),ek=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#conf t")]),u(`
`),i("span",{class:"line"},"Enter configuration commands, one per line.  End with CNTL/Z."),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#ip local pool VPN-pool 172.16.32.101 172.16.32.200")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),tk=i("br",null,null,-1),nk=i("p",null,[i("strong",null,"#5 abilitare il modulo e le fuinzionalit\xE0 AAA")],-1),sk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#Router(config)#aaa new-model ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),ok={__name:"10",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[JP,XP,QP,T(o,ce({},{ranges:[""]}),{default:V(()=>[ek]),_:1},16),tk,nk,T(o,ce({},{ranges:[""]}),{default:V(()=>[sk]),_:1},16)]),_:1},16)}}},ik=i("h1",null,"IPsec VPN",-1),rk=i("p",null,"Remote VPN",-1),ak=i("p",null,[i("strong",null,"#6 abilitare autenticazione con username locale (no RADIUS server)")],-1),lk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#aaa authentication login VPN-client local")])])],-1),ck=i("br",null,null,-1),uk=i("p",null,[i("strong",null,"#7 abilitare authorizzazione locale per network client per il gruppo VPN-ATS")],-1),pk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#aaa authorization network VPN-ATS local")])])],-1),fk=i("br",null,null,-1),dk=i("p",null,[i("strong",null,"#8 creare un account per ogni remote client ed aggiungerlo al DB locale")],-1),mk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#username ats-dennis secret password1")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#username ats-linus secret password2")])])],-1),hk={__name:"11",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[ik,rk,ak,T(o,ce({},{ranges:[""]}),{default:V(()=>[lk]),_:1},16),ck,uk,T(o,ce({},{ranges:[""]}),{default:V(()=>[pk]),_:1},16),fk,dk,T(o,ce({},{ranges:[""]}),{default:V(()=>[mk]),_:1},16)]),_:1},16)}}},gk=i("h1",null,"IPsec VPN",-1),_k=i("p",null,"Remote VPN",-1),vk=i("p",null,[i("strong",null,"#9 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)")],-1),yk=i("ul",null,[i("li",null,"si configura il protocollo di encryption"),i("li",null,"il protocollo di hashing per l\u2019integrit\xE0"),i("li",null,"il modello di scambio delle chiavi"),i("li",null,"il metodo di scambio delle chiavi DH-5 (1536 bit)")],-1),bk=i("br",null,null,-1),Pk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto isakmp policy 1")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#encryption aes 256")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#hash sha ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#authentication pre-share")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#group 5")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#lifetime 7200")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),kk={__name:"12",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[gk,_k,vk,yk,bk,T(o,ce({},{ranges:[""]}),{default:V(()=>[Pk]),_:1},16)]),_:1},16)}}},wk=i("h1",null,"IPsec VPN",-1),Rk=i("p",null,"Remote VPN",-1),xk=i("p",null,[i("strong",null,"#10 crea la configurazione isakmp client per il gruppo VPN-ATS")],-1),Nk=i("ul",null,[i("li",null,"si configura la password di gruppo"),i("li",null,"si assegna il pool di indirizzi al gruppo")],-1),Ik=i("br",null,null,-1),Ek=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto isakmp client configuration group VPN-ATS")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp-group"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#key atsvpngroupsecret")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp-group"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#pool VPN-pool")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp-group"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),Sk={__name:"13",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[wk,Rk,xk,Nk,Ik,T(o,ce({},{ranges:[""]}),{default:V(()=>[Ek]),_:1},16)]),_:1},16)}}},$k=i("h1",null,"IPsec VPN",-1),Ok=i("p",null,"Remote VPN",-1),Vk=i("p",null,[i("strong",null,"#11 creare la policy per isakmp (IKE) per stabilire la SA (Phase 2)")],-1),Ak=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto ipsec transform-set VPNipsec esp-aes esp-sha-hmac")])])],-1),Tk=i("br",null,null,-1),Ck=i("ul",null,[i("li",null,"abilitiamo il protocollo ESP con encryption AES"),i("li",null,"per l\u2019integrit\xE0 utilizziamo sha-hmac")],-1),Mk={__name:"14",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[$k,Ok,Vk,T(o,ce({},{ranges:[""]}),{default:V(()=>[Ak]),_:1},16),Tk,Ck]),_:1},16)}}},zk=i("h1",null,"IPsec VPN",-1),Lk=i("p",null,"Remote VPN",-1),Fk=i("p",null,[i("strong",null,"#12 definiamo un dynamic crypto map table (Policy) per il trasnform-setr VPNipsec (SA)")],-1),Hk=i("p",null,"Un dynamic crypto map \xE8 un template per la policy IPsec che verr\xE0 successivamente popolato con i parametri negoziati durante la fase di instaurazione della SA",-1),Dk=i("ul",null,[i("li",null,"abilitiamo il reverse route injection in modo da poter comunicare con il client")],-1),jk=i("p",null,"Il Reverse route injection (RRI)permette al router di aggiungere delle route statiche per gli host presenti all\u2019altro capo della VPN",-1),Kk=i("br",null,null,-1),Bk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto dynamic-map VPNdynset 1")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#set transform-set VPNipsec ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#reverse-route ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),Wk={__name:"15",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[zk,Lk,Fk,Hk,Dk,jk,Kk,T(o,ce({},{ranges:[""]}),{default:V(()=>[Bk]),_:1},16)]),_:1},16)}}},Uk=i("h1",null,"IPsec VPN",-1),qk=i("p",null,"Remote VPN",-1),Yk=i("p",null,[i("strong",null,"#13 definiziamo un crypto map per il client configurando autenticazione e autorizzazione")],-1),Zk=i("p",null,"Un crypto map \xE8 una configurazione software che ha due scopi principali:",-1),Gk=i("ol",null,[i("li",null,"selezionare i pacchetti che necessit\xE0 del processamento IPsec"),i("li",null,"definire le policy per questi pacchetti")],-1),Jk=i("ul",null,[i("li",null,"una crypto map deve essere applicata ad un interfaccia")],-1),Xk=i("br",null,null,-1),Qk=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPNstaticmap client configuration address respond ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPNstaticmap client authentication list VPN-client")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPNstaticmap isakmp authorization list VPN-ATS")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPNstaticmap 1 ipsec-isakmp dynamic VPNdynset")])])],-1),e2={__name:"16",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[Uk,qk,Yk,Zk,Gk,Jk,Xk,T(o,ce({},{ranges:[""]}),{default:V(()=>[Qk]),_:1},16)]),_:1},16)}}},t2=i("h1",null,"IPsec VPN",-1),n2=i("p",null,"Remote VPN",-1),s2=i("p",null,[i("strong",null,"#14 abilitiamo la VPN sull\u2019interfaccia pubblica")],-1),o2=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#interface gigabitEthernet 0/0")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-if"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPNstaticmap")]),u(`
`),i("span",{class:"line"},[u("*Jan  "),i("span",{class:"token number"},"3"),u(" 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-if"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#end")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},"%SYS-5-CONFIG_I: Configured from console by console"),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")])])],-1),i2=i("br",null,null,-1),r2=i("ul",null,[i("li",null,"OK!!! ora il VPN router \xE8 in attesa di connessioni da parte dei remote client")],-1),a2={__name:"17",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[t2,n2,s2,T(o,ce({},{ranges:[""]}),{default:V(()=>[o2]),_:1},16),i2,r2]),_:1},16)}}},l2="/RETI/5/VPN/assets/vpn_06.812ac677.png",c2=i("h1",null,"IPsec VPN",-1),u2=i("p",null,"Remote VPN",-1),p2=i("ul",null,[i("li",null,"Ora proviamo a stabilire una connessione tra un remote client (PC2) e la sede aziendale (VPN Router)"),i("li",null,"Configuriamo il client nel seguente modo")],-1),f2=i("img",{src:l2,style:{width:"350px",margin:"auto"}},null,-1),d2={__name:"18",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[c2,u2,p2,f2]),_:1},16))}},m2="/RETI/5/VPN/assets/vpn_07.53cddd1c.png",h2=i("h1",null,"IPsec VPN",-1),g2=i("p",null,"Remote VPN",-1),_2=i("img",{src:m2,style:{width:"400px",margin:"auto"}},null,-1),v2={__name:"19",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[h2,g2,_2]),_:1},16))}},y2="/RETI/5/VPN/assets/vpn_08.333749ae.png",b2=i("h1",null,"IPsec VPN",-1),P2=i("p",null,"Remote VPN",-1),k2=i("ul",null,[i("li",null,"Se tutto \xE8 stato configurato correttamente, ora il client \xE8 connesso in modo sicuro con la sede principale")],-1),w2=i("img",{src:y2,style:{width:"400px",margin:"auto"}},null,-1),R2={__name:"20",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[b2,P2,k2,w2]),_:1},16))}},x2="/RETI/5/VPN/assets/vpn_09.5b6101a0.png",N2=i("h1",null,"IPsec VPN",-1),I2=i("p",null,"Remote VPN",-1),E2=i("ul",null,[i("li",null,"Al client \xE8 stato assegnato un indirizzo del VPN-pool definito lato VPN Router")],-1),S2=i("br",null,null,-1),$2=i("img",{src:x2,style:{width:"380px",margin:"auto"}},null,-1),O2={__name:"21",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[N2,I2,E2,S2,$2]),_:1},16))}},V2="/RETI/5/VPN/assets/vpn_10.1ac5d9e5.png",A2=i("h1",null,"IPsec VPN",-1),T2=i("p",null,"Remote VPN",-1),C2=i("ul",null,[i("li",null,"Abbiamo ricevuto il primo indirizzo IP del pool VPN")],-1),M2=i("br",null,null,-1),z2=i("img",{src:V2,style:{width:"380px",margin:"auto"}},null,-1),L2={__name:"22",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[A2,T2,C2,M2,z2]),_:1},16))}},F2="/RETI/5/VPN/assets/vpn_11.c8c6d56b.png",H2=i("h1",null,"IPsec VPN",-1),D2=i("p",null,"Remote VPN",-1),j2=i("ul",null,[i("li",null,"Perfetto ora possiamo raggiungere il web server nella rete aziendale")],-1),K2=i("img",{src:F2,style:{width:"450px",margin:"auto"}},null,-1),B2={__name:"23",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[H2,D2,j2,K2]),_:1},16))}},W2="/RETI/5/VPN/assets/vpn_12.c35343e3.png",U2=i("h1",null,"IPsec VPN",-1),q2=i("p",null,"Remote VPN",-1),Y2=i("img",{src:W2,style:{width:"450px",margin:"auto"}},null,-1),Z2={__name:"24",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[U2,q2,Y2]),_:1},16))}},G2=i("h1",null,"IPsec VPN",-1),J2=i("p",null,"Remote VPN",-1),X2=i("p",null,[i("strong",null,"Esercizio:")],-1),Q2=i("ul",null,[i("li",null,[u("In modalit\xE0 simulazione: "),i("ol",null,[i("li",null,"inviare un pacchetto ICMP dal client VPN al web server aziendale"),i("li",null,"osservare il pacchetto all\u2019uscita del PC2"),i("li",null,"osservare il pacchetto all\u2019ingresso del router VPN (da Internet)"),i("li",null,"osservare il pacchetto all\u2019uscita del router VPN (verso la LAN interna)")])]),i("li",null,"Descrivi cosa osservi?"),i("li",null,"Il comportamento \xE8 in linea con le tue aspettative?")],-1),ew={__name:"25",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[G2,J2,X2,Q2]),_:1},16))}},tw=i("h1",null,"IPsec VPN",-1),nw=i("p",null,"Remote VPN",-1),sw=i("ul",null,[i("li",null,"Alcuni utili comandi per verificare lo stato della VPN sono")],-1),ow=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show aaa sessions ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show crypto ipsec sa")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"# ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show crypto isakmp sa ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"# ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show crypto isakmp  policy ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")])])],-1),iw={__name:"26",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[tw,nw,sw,T(o,ce({},{ranges:[""]}),{default:V(()=>[ow]),_:1},16)]),_:1},16)}}},rw=i("h1",null,"IPsec VPN",-1),aw=i("p",null,"Remote VPN",-1),lw=i("p",null,[i("strong",null,"Esercizio:")],-1),cw=i("ul",null,[i("li",null,"Ispezionare la tabella di routing"),i("li",null,"Identificare le reverse route")],-1),uw={__name:"27",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[rw,aw,lw,cw]),_:1},16))}},pw="/RETI/5/VPN/assets/vpn_13.50084ca5.png",fw=i("h1",null,"IPsec VPN",-1),dw=i("p",null,"Site-to-Site VPN",-1),mw=i("img",{src:pw,style:{width:"900px",margin:"auto"}},null,-1),hw=i("ul",null,[i("li",null,"i VPN Router R1 e R2 sono Cisco c1900")],-1),gw={__name:"28",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[fw,dw,mw,hw]),_:1},16))}},_w=i("h1",null,"IPsec VPN",-1),vw=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),yw=i("p",null,[i("strong",null,"#1 abilitare la licenza per le VPN")],-1),bw=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#conf t")]),u(`
`),i("span",{class:"line"},"Enter configuration commands, one per line.  End with CNTL/Z."),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#license boot module c1900 technology-package securityk9")])])],-1),Pw=i("br",null,null,-1),kw=i("p",null,[i("strong",null,"#2 salvare la configurazione e fare il reload")],-1),ww=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#copy running-config startup-config ")]),u(`
`),i("span",{class:"line"},[u("Destination filename "),i("span",{class:"token punctuation"},"["),u("startup-config"),i("span",{class:"token punctuation"},"]"),u("? ")]),u(`
`),i("span",{class:"line"},[u("Building configuration"),i("span",{class:"token punctuation"},".."),u(".")]),u(`
`),i("span",{class:"line"},[i("span",{class:"token punctuation"},"["),u("OK"),i("span",{class:"token punctuation"},"]")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#reload")])])],-1),Rw={__name:"29",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[_w,vw,yw,T(o,ce({},{ranges:[""]}),{default:V(()=>[bw]),_:1},16),Pw,kw,T(o,ce({},{ranges:[""]}),{default:V(()=>[ww]),_:1},16)]),_:1},16)}}},xw=i("h1",null,"IPsec VPN",-1),Nw=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),Iw=i("p",null,[i("strong",null,"#3 confermare l\u2019attivazione della licenza per VPN")],-1),Ew=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show version ")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},"----------------------------------------------------------------"),u(`
`),i("span",{class:"line"},"Technology    Technology-package          Technology-package"),u(`
`),i("span",{class:"line"},[u("              Current       Type          Next "),i("span",{class:"token function"},"reboot")]),u(`
`),i("span",{class:"line"},"-----------------------------------------------------------------"),u(`
`),i("span",{class:"line"},"ipbase        ipbasek9      Permanent     ipbasek9"),u(`
`),i("span",{class:"line"},"security      securityk9    Evaluation    securityk9"),u(`
`),i("span",{class:"line"},"data          disable       None          None")])],-1),Sw={__name:"30",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[xw,Nw,Iw,T(o,ce({},{ranges:[""]}),{default:V(()=>[Ew]),_:1},16)]),_:1},16)}}},$w=i("h1",null,"IPsec VPN",-1),Ow=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),Vw=i("p",null,[i("strong",null,"#4 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)")],-1),Aw=i("ul",null,[i("li",null,"si configura il protocollo di encryption"),i("li",null,"il protocollo di hashing per l\u2019integrit\xE0"),i("li",null,"il modello di scambio delle chiavi"),i("li",null,"il metodo di scambio delle chiavi DH-5 (1536 bit)")],-1),Tw=i("br",null,null,-1),Cw=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto isakmp policy 10")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#encryption aes 256")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#hash sha ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#authentication pre-share")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#group 5")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#lifetime 86400")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),Mw={__name:"31",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[$w,Ow,Vw,Aw,Tw,T(o,ce({},{ranges:[""]}),{default:V(()=>[Cw]),_:1},16)]),_:1},16)}}},zw=i("h1",null,"IPsec VPN",-1),Lw=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),Fw=i("p",null,[i("strong",null,"#5 definire la chiave isakmp")],-1),Hw=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto isakmp key vpnsecurepasswd address 94.45.32.65")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),Dw={__name:"32",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[zw,Lw,Fw,T(o,ce({},{ranges:[""]}),{default:V(()=>[Hw]),_:1},16)]),_:1},16)}}},jw=i("h1",null,"IPsec VPN",-1),Kw=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),Bw=i("p",null,[i("strong",null,"#6 configuriamo la fase 2 di IKE")],-1),Ww=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto ipsec transform-set VPN-MAIN esp-aes esp-sha-hmac ")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),Uw={__name:"33",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[jw,Kw,Bw,T(o,ce({},{ranges:[""]}),{default:V(()=>[Ww]),_:1},16)]),_:1},16)}}},qw=i("h1",null,"IPsec VPN",-1),Yw=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),Zw=i("p",null,[i("strong",null,"#7 Definiamo adesso l\u2019ACL che si occuper\xE0 di indentificare il traffico VPN (detto, in gergo, interesting traffic):")],-1),Gw=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#access-list 100 permit ip 172.16.0.0 0.0.255.255 192.168.100.0 0.0.0.255 ")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),Jw={__name:"34",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[qw,Yw,Zw,T(o,ce({},{ranges:[""]}),{default:V(()=>[Gw]),_:1},16)]),_:1},16)}}},Xw=i("h1",null,"IPsec VPN",-1),Qw=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),eR=i("p",null,[i("strong",null,"#8 definiamo la cryptomap")],-1),tR=i("ul",null,[i("li",null,"definiamo il router peer (remote branch)"),i("li",null,"associamo il transform set"),i("li",null,"indichiamo quali indirizzi sono accettati tramite l\u2019acces slist")],-1),nR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPN-MAIN-MAP 10  ipsec-isakmp ")]),u(`
`),i("span",{class:"line"},[u("% NOTE: This new crypto map will remain disabled "),i("span",{class:"token keyword"},"until"),u(" a peer")]),u(`
`),i("span",{class:"line"},"        and a valid access list have been configured"),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#set peer 94.45.32.65")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#set transform-set VPN-MAIN ")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#match address 100")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),sR={__name:"35",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[Xw,Qw,eR,tR,T(o,ce({},{ranges:[""]}),{default:V(()=>[nR]),_:1},16)]),_:1},16)}}},oR=i("h1",null,"IPsec VPN",-1),iR=i("p",null,"Site-to-Site VPN - Configurazione di R1",-1),rR=i("p",null,[i("strong",null,"#9 associamo la crypto map all\u2019interfaccia esposta su Internet")],-1),aR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#int gigabitEthernet 0/0")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-if"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPN-MAIN-MAP")]),u(`
`),i("span",{class:"line"},[u("*Jan  "),i("span",{class:"token number"},"3"),u(" 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-if"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#end")])])],-1),lR={__name:"36",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[oR,iR,rR,T(o,ce({},{ranges:[""]}),{default:V(()=>[aR]),_:1},16)]),_:1},16)}}},cR=i("h1",null,"IPsec VPN",-1),uR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),pR=i("p",null,[i("strong",null,"#1 abilitare la licenza per le VPN")],-1),fR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#conf t")]),u(`
`),i("span",{class:"line"},"Enter configuration commands, one per line.  End with CNTL/Z."),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#license boot module c1900 technology-package securityk9")])])],-1),dR=i("br",null,null,-1),mR=i("p",null,[i("strong",null,"#2 salvare la configurazione e fare il reload")],-1),hR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#copy running-config startup-config ")]),u(`
`),i("span",{class:"line"},[u("Destination filename "),i("span",{class:"token punctuation"},"["),u("startup-config"),i("span",{class:"token punctuation"},"]"),u("? ")]),u(`
`),i("span",{class:"line"},[u("Building configuration"),i("span",{class:"token punctuation"},".."),u(".")]),u(`
`),i("span",{class:"line"},[i("span",{class:"token punctuation"},"["),u("OK"),i("span",{class:"token punctuation"},"]")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#reload")])])],-1),gR={__name:"37",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[cR,uR,pR,T(o,ce({},{ranges:[""]}),{default:V(()=>[fR]),_:1},16),dR,mR,T(o,ce({},{ranges:[""]}),{default:V(()=>[hR]),_:1},16)]),_:1},16)}}},_R=i("h1",null,"IPsec VPN",-1),vR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),yR=i("p",null,[i("strong",null,"#3 confermare l\u2019attivazione della licenza per VPN")],-1),bR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token comment"},"#show version ")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},"----------------------------------------------------------------"),u(`
`),i("span",{class:"line"},"Technology    Technology-package          Technology-package"),u(`
`),i("span",{class:"line"},[u("              Current       Type          Next "),i("span",{class:"token function"},"reboot")]),u(`
`),i("span",{class:"line"},"-----------------------------------------------------------------"),u(`
`),i("span",{class:"line"},"ipbase        ipbasek9      Permanent     ipbasek9"),u(`
`),i("span",{class:"line"},"security      securityk9    Evaluation    securityk9"),u(`
`),i("span",{class:"line"},"data          disable       None          None")])],-1),PR={__name:"38",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[_R,vR,yR,T(o,ce({},{ranges:[""]}),{default:V(()=>[bR]),_:1},16)]),_:1},16)}}},kR=i("h1",null,"IPsec VPN",-1),wR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),RR=i("p",null,[i("strong",null,"#4 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)")],-1),xR=i("ul",null,[i("li",null,"si configura il protocollo di encryption"),i("li",null,"il protocollo di hashing per l\u2019integrit\xE0"),i("li",null,"il modello di scambio delle chiavi"),i("li",null,"il metodo di scambio delle chiavi DH-5 (1536 bit)")],-1),NR=i("br",null,null,-1),IR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto isakmp policy 10")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#encryption aes 256")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#hash sha ")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#authentication pre-share")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#group 5")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#lifetime 86400")]),u(`
`),i("span",{class:"line"},[u("Router"),i("span",{class:"token punctuation"},"("),u("config-isakmp"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),ER={__name:"39",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[kR,wR,RR,xR,NR,T(o,ce({},{ranges:[""]}),{default:V(()=>[IR]),_:1},16)]),_:1},16)}}},SR=i("h1",null,"IPsec VPN",-1),$R=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),OR=i("p",null,[i("strong",null,"#5 definire la chiave isakmp")],-1),VR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto isakmp key vpnsecurepasswd address 93.39.156.32")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),AR={__name:"40",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[SR,$R,OR,T(o,ce({},{ranges:[""]}),{default:V(()=>[VR]),_:1},16)]),_:1},16)}}},TR=i("h1",null,"IPsec VPN",-1),CR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),MR=i("p",null,[i("strong",null,"#6 configuriamo la fase 2 di IKE")],-1),zR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto ipsec transform-set VPN-BRANCH esp-aes esp-sha-hmac ")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),LR={__name:"41",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[TR,CR,MR,T(o,ce({},{ranges:[""]}),{default:V(()=>[zR]),_:1},16)]),_:1},16)}}},FR=i("h1",null,"IPsec VPN",-1),HR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),DR=i("p",null,[i("strong",null,"#7 Definiamo adesso l\u2019ACL che si occuper\xE0 di indentificare il traffico VPN (detto, in gergo, interesting traffic):")],-1),jR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#access-list 101 permit ip 192.168.100.0 0.0.0.255 172.16.0.0 0.0.255.255")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),KR={__name:"42",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[FR,HR,DR,T(o,ce({},{ranges:[""]}),{default:V(()=>[jR]),_:1},16)]),_:1},16)}}},BR=i("h1",null,"IPsec VPN",-1),WR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),UR=i("p",null,[i("strong",null,"#8 definiamo la cryptomap")],-1),qR=i("ul",null,[i("li",null,"definiamo il router peer (remote branch)"),i("li",null,"associamo il transform set"),i("li",null,"indichiamo quali indirizzi sono accettati tramite l\u2019acces slist")],-1),YR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPN-BRANCH-MAP 10 ipsec-isakmp ")]),u(`
`),i("span",{class:"line"},[u("% NOTE: This new crypto map will remain disabled "),i("span",{class:"token keyword"},"until"),u(" a peer")]),u(`
`),i("span",{class:"line"},"        and a valid access list have been configured"),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#set peer 93.39.156.32")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#set transform-set VPN-BRANCH")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#match address 101")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-crypto-map"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),ZR={__name:"43",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[BR,WR,UR,qR,T(o,ce({},{ranges:[""]}),{default:V(()=>[YR]),_:1},16)]),_:1},16)}}},GR=i("h1",null,"IPsec VPN",-1),JR=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),XR=i("p",null,[i("strong",null,"#9 dobbiamo evitare che il traffico LAN-to-LAN passi attraverso il NAT")],-1),QR=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#access-list 100 remark --NO-NAT--")]),u(`
`),i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#access-list 100 deny ip 192.168.100.0 0.0.0.255 172.16.0.0 0.0.255.255")]),u(`
`),i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#access-list 100 permit ip  192.168.100.0 0.0.0.255 any ")]),u(`
`),i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")])])],-1),ex={__name:"44",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[GR,JR,XR,T(o,ce({},{ranges:[""]}),{default:V(()=>[QR]),_:1},16)]),_:1},16)}}},tx=i("h1",null,"IPsec VPN",-1),nx=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),sx=i("p",null,[i("strong",null,"#10 associamo la ACl al NAT")],-1),ox=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#no access-list 1")]),u(`
`),i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#no ip nat inside source list 1 interface GigabitEthernet0/1 overload")]),u(`
`),i("span",{class:"line"},[u("R2"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#ip nat inside source list 100 interface gigabitEthernet 0/1 overload")])])],-1),ix={__name:"45",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[tx,nx,sx,T(o,ce({},{ranges:[""]}),{default:V(()=>[ox]),_:1},16)]),_:1},16)}}},rx=i("h1",null,"IPsec VPN",-1),ax=i("p",null,"Site-to-Site VPN - Configurazione di R2",-1),lx=i("p",null,[i("strong",null,"#11 associamo la crypto map all\u2019interfaccia esposta su Internet")],-1),cx=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#int gigabitEthernet 0/1")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-if"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#crypto map VPN-BRANCH-MAP")]),u(`
`),i("span",{class:"line"},[u("*Jan  "),i("span",{class:"token number"},"3"),u(" 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON")]),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token punctuation"},"("),u("config-if"),i("span",{class:"token punctuation"},")"),i("span",{class:"token comment"},"#end")])])],-1),ux={__name:"46",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[rx,ax,lx,T(o,ce({},{ranges:[""]}),{default:V(()=>[cx]),_:1},16)]),_:1},16)}}},px=i("h1",null,"IPsec VPN",-1),fx=i("p",null,"Site-to-Site VPN",-1),dx=i("ul",null,[i("li",null,"OK ora verifichiamo che le SA sono correttamente configurate (R1)")],-1),mx=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token comment"},"#show crypto ipsec sa ")]),u(`
`),i("span",{class:"line"},"interface: GigabitEthernet0/0"),u(`
`),i("span",{class:"line"},[u("    Crypto map tag: VPN-MAIN-MAP, "),i("span",{class:"token builtin class-name"},"local"),u(" addr "),i("span",{class:"token number"},"93.39"),u(".156.32")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},[u("   protected vrf: "),i("span",{class:"token punctuation"},"("),u("none"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token builtin class-name"},"local"),u("  ident "),i("span",{class:"token punctuation"},"("),u("addr/mask/prot/port"),i("span",{class:"token punctuation"},")"),u(": "),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"172.16"),u(".0.0/255.255.0.0/0/0"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("   remote  ident "),i("span",{class:"token punctuation"},"("),u("addr/mask/prot/port"),i("span",{class:"token punctuation"},")"),u(": "),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"192.168"),u(".100.0/255.255.255.0/0/0"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("   current_peer "),i("span",{class:"token number"},"94.45"),u(".32.65 port "),i("span",{class:"token number"},"500")]),u(`
`),i("span",{class:"line"},[u("    PERMIT, "),i("span",{class:"token assign-left variable"},"flags"),i("span",{class:"token operator"},"="),i("span",{class:"token punctuation"},"{"),u("origin_is_acl,"),i("span",{class:"token punctuation"},"}")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token comment"},"#pkts encaps: 0, #pkts encrypt: 0, #pkts digest: 0")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},".."),u(".")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token comment"},"#pkts not decompressed: 0, #pkts decompress failed: 0")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token comment"},"#send errors 0, #recv errors 0")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},[u("     "),i("span",{class:"token builtin class-name"},"local"),u(" crypto endpt.: "),i("span",{class:"token number"},"93.39"),u(".156.32, remote crypto endpt.:94.45.32.65")]),u(`
`),i("span",{class:"line"},[u("     path mtu "),i("span",{class:"token number"},"1500"),u(", "),i("span",{class:"token function"},"ip"),u(" mtu "),i("span",{class:"token number"},"1500"),u(", "),i("span",{class:"token function"},"ip"),u(" mtu idb GigabitEthernet0/0")]),u(`
`),i("span",{class:"line"},[u("     current outbound spi: 0x0"),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"0"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("     "),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},"..")]),u(`
`),i("span",{class:"line"},[u("     "),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},"..")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},[u("R1"),i("span",{class:"token comment"},"#")])])],-1),hx={__name:"47",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[px,fx,dx,T(o,ce({},{ranges:[""]}),{default:V(()=>[mx]),_:1},16)]),_:1},16)}}},gx=i("h1",null,"IPsec VPN",-1),_x=i("p",null,"Site-to-Site VPN",-1),vx=i("ul",null,[i("li",null,"OK ora verifichiamo che le SA sono correttamente configurate (R2)")],-1),yx=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R2"),i("span",{class:"token comment"},"#show crypto ipsec sa ")]),u(`
`),i("span",{class:"line"},"interface: GigabitEthernet0/1"),u(`
`),i("span",{class:"line"},[u("    Crypto map tag: VPN-BRANCH-MAP, "),i("span",{class:"token builtin class-name"},"local"),u(" addr "),i("span",{class:"token number"},"94.45"),u(".32.65")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},[u("   protected vrf: "),i("span",{class:"token punctuation"},"("),u("none"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token builtin class-name"},"local"),u("  ident "),i("span",{class:"token punctuation"},"("),u("addr/mask/prot/port"),i("span",{class:"token punctuation"},")"),u(": "),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"192.168"),u(".100.0/255.255.255.0/0/0"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("   remote  ident "),i("span",{class:"token punctuation"},"("),u("addr/mask/prot/port"),i("span",{class:"token punctuation"},")"),u(": "),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"172.16"),u(".0.0/255.255.0.0/0/0"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("   current_peer "),i("span",{class:"token number"},"93.39"),u(".156.32 port "),i("span",{class:"token number"},"500")]),u(`
`),i("span",{class:"line"},[u("    PERMIT, "),i("span",{class:"token assign-left variable"},"flags"),i("span",{class:"token operator"},"="),i("span",{class:"token punctuation"},"{"),u("origin_is_acl,"),i("span",{class:"token punctuation"},"}")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token comment"},"#pkts encaps: 0, #pkts encrypt: 0, #pkts digest: 0")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},".."),u(".")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token comment"},"#pkts not decompressed: 0, #pkts decompress failed: 0")]),u(`
`),i("span",{class:"line"},[u("   "),i("span",{class:"token comment"},"#send errors 0, #recv errors 0")]),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},[u("     "),i("span",{class:"token builtin class-name"},"local"),u(" crypto endpt.: "),i("span",{class:"token number"},"94.45"),u(".32.65, remote crypto endpt.:93.39.156.32")]),u(`
`),i("span",{class:"line"},[u("     path mtu "),i("span",{class:"token number"},"1500"),u(", "),i("span",{class:"token function"},"ip"),u(" mtu "),i("span",{class:"token number"},"1500"),u(", "),i("span",{class:"token function"},"ip"),u(" mtu idb GigabitEthernet0/1")]),u(`
`),i("span",{class:"line"},[u("     current outbound spi: 0x0"),i("span",{class:"token punctuation"},"("),i("span",{class:"token number"},"0"),i("span",{class:"token punctuation"},")")]),u(`
`),i("span",{class:"line"},[u("     "),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},"..")]),u(`
`),i("span",{class:"line"},[u("     "),i("span",{class:"token punctuation"},".."),i("span",{class:"token punctuation"},"..")]),u(`
`),i("span",{class:"line"},[u("R2"),i("span",{class:"token comment"},"#")])])],-1),bx={__name:"48",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[gx,_x,vx,T(o,ce({},{ranges:[""]}),{default:V(()=>[yx]),_:1},16)]),_:1},16)}}},Px=i("h1",null,"IPsec VPN",-1),kx=i("p",null,"Site-to-Site VPN",-1),wx=i("pre",{class:"slidev-code language-bash"},[i("code",null,[i("span",{class:"line"},[u("R1"),i("span",{class:"token comment"},"#show crypto isakmp sa ")]),u(`
`),i("span",{class:"line"},"IPv4 Crypto ISAKMP SA"),u(`
`),i("span",{class:"line"},"dst             src             state          conn-id slot status"),u(`
`),i("span",{class:"line"}),u(`
`),i("span",{class:"line"},"IPv6 Crypto ISAKMP SA")])],-1),Rx=i("br",null,null,-1),xx=i("ul",null,[i("li",null,"come si pu\xF2 vedere il tunnel non \xE8 ancora stabilito"),i("li",null,"il tunnel verr\xE0 creato on demand")],-1),Nx={__name:"49",setup(e){const t={};return C(K),(n,s)=>{const o=ke;return k(),D(oe,ne(ee(t)),{default:V(()=>[Px,kx,T(o,ce({},{ranges:[""]}),{default:V(()=>[wx]),_:1},16),Rx,xx]),_:1},16)}}},Ix="/RETI/5/VPN/assets/vpn_14.8c753d5b.png",Ex=i("h1",null,"IPsec VPN",-1),Sx=i("p",null,"Site-to-Site VPN",-1),$x=i("p",null,[i("strong",null,"Esercizio:")],-1),Ox=i("ul",null,[i("li",null,"fare un ping dal PC2 al ATS Web Server"),i("li",null,"il ping funziona?"),i("li",null,"il tunnel adesso \xE8 presente?")],-1),Vx=i("img",{src:Ix,style:{width:"600px",margin:"auto"}},null,-1),Ax={__name:"50",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[Ex,Sx,$x,Ox,Vx]),_:1},16))}},Tx="/RETI/5/VPN/assets/vpn_15.75673708.png",Cx=i("h1",null,"IPsec VPN",-1),Mx=i("p",null,"Site-to-Site VPN",-1),zx=i("p",null,[i("strong",null,"Esercizio:")],-1),Lx=i("ul",null,[i("li",null,[i("p",null,"dal PC2 accedere via browser alla home page della intranet aziendale")]),i("li",null,[i("p",null,"verificare il pacchetto durante il transito di R2")]),i("li",null,[i("p",null,"com\u2019\xE8 fatto il pacchetto all\u2019ingresso di R2-Gi0/0?")]),i("li",null,[i("p",null,"com\u2019\xE8 fatto il pacchetto all\u2019uscita di R2-Gi0/1?")]),i("li",null,[i("p",null,"verificare il pacchetto durante il transito di R1")]),i("li",null,[i("p",null,"com\u2019\xE8 fatto il pacchetto all\u2019ingresso di R1-Gi0/0?")]),i("li",null,[i("p",null,"com\u2019\xE8 fatto il pacchetto all\u2019uscita di R1-Gi0/1?")])],-1),Fx=i("img",{src:Tx,style:{width:"450px",position:"relative",right:"-27rem",top:"-15rem"}},null,-1),Hx={__name:"51",setup(e){const t={};return C(K),(n,s)=>(k(),D(oe,ne(ee(t)),{default:V(()=>[Cx,Mx,zx,Lx,Fx]),_:1},16))}},Dx=[{path:"1",name:"page-1",component:_y,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI",as:"2022/2023",version:"1.0.0",title:"SISTEMI & RETI",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
#highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: "RETI"
as: "2022/2023"
version: '1.0.0'

#https://www.cisco.com/c/en/us/support/docs/routers/1700-series-modular-access-routers/71462-rtr-l2l-ipsec-split.html
---  


# SISTEMI & RETI

IPsec VPN su Cisco IOS

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>
`,title:"SISTEMI & RETI",level:1,content:`# SISTEMI & RETI

IPsec VPN su Cisco IOS

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI",as:"2022/2023",version:"1.0.0",title:"SISTEMI & RETI"},index:0,start:0,end:31,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Ry,meta:{slide:{raw:`
# IPsec VPN

Intro

- In telecomunicazioni e informatica \`IPsec\`, abbreviazione di ***IP Security***, \xE8 uno standard per reti a pacchetto che permette di ottenere connessioni sicure su reti IP pubbliche. 
- Tale sicurezza viene raggiunta attraverso l'aggiunta di funzionalit\xE0 di **autenticazione, cifratura e controllo di integrit\xE0** dei pacchetti IP. 
- La capacit\xE0 di fornire protezione e sicurezza viene dunque fornita a livello di rete (diversamente da HTTPS, SSL/TLS), fatto che rende questo protocollo trasparente al livello delle applicazioni che quindi non devono essere modificate.
- IPsec \xE8 parte integrante di IPv6, mentre \xE8 opzionale in IPv4

<img src="/media/vpn_00.png" style="width:450px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Intro

- In telecomunicazioni e informatica \`IPsec\`, abbreviazione di ***IP Security***, \xE8 uno standard per reti a pacchetto che permette di ottenere connessioni sicure su reti IP pubbliche. 
- Tale sicurezza viene raggiunta attraverso l'aggiunta di funzionalit\xE0 di **autenticazione, cifratura e controllo di integrit\xE0** dei pacchetti IP. 
- La capacit\xE0 di fornire protezione e sicurezza viene dunque fornita a livello di rete (diversamente da HTTPS, SSL/TLS), fatto che rende questo protocollo trasparente al livello delle applicazioni che quindi non devono essere modificate.
- IPsec \xE8 parte integrante di IPv6, mentre \xE8 opzionale in IPv4

<img src="/media/vpn_00.png" style="width:450px;margin:auto;"/>`,frontmatter:{},index:1,start:32,end:44,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Ey,meta:{slide:{raw:`
# IPsec VPN

Intro

- IPsec \xE8 una collezione di protocolli formata da:
  1. Protocolli che implementano lo scambio delle chiavi per realizzare il flusso crittografato.
  2. Protocolli che forniscono la cifratura del flusso di dati.

- Per lo scambio delle chiavi esiste un solo protocollo chiamato \`IKE\` **(Internet Key Exchange)**
- Per quanto riguarda l'autenticazione e integrit\xE0 dei pacchetti IP si pu\xF2 utilizzare il protocollo \`AH\` **(Authentication Header (AH)**
- Un terzo protocollo chiamato \`ESP\` **(Encapsulating Security Payload)** fornisce invece autenticazione, riservatezza e controllo di integrit\xE0 dei pacchetti IP
- Per questi motivi ESP \xE8 molto pi\xF9 usato di AH
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Intro

- IPsec \xE8 una collezione di protocolli formata da:
  1. Protocolli che implementano lo scambio delle chiavi per realizzare il flusso crittografato.
  2. Protocolli che forniscono la cifratura del flusso di dati.

- Per lo scambio delle chiavi esiste un solo protocollo chiamato \`IKE\` **(Internet Key Exchange)**
- Per quanto riguarda l'autenticazione e integrit\xE0 dei pacchetti IP si pu\xF2 utilizzare il protocollo \`AH\` **(Authentication Header (AH)**
- Un terzo protocollo chiamato \`ESP\` **(Encapsulating Security Payload)** fornisce invece autenticazione, riservatezza e controllo di integrit\xE0 dei pacchetti IP
- Per questi motivi ESP \xE8 molto pi\xF9 usato di AH`,frontmatter:{},index:2,start:45,end:59,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Cy,meta:{slide:{raw:`
# IPsec VPN

Intro

IPsec supporta due modalit\xE0 di funzionamento:
- **Transport mode**
  - connessione host-to-host tra due end-point o host-to-router;
  - in caso di cifratura, viene cifrato solo il payload dei datagrammi IP, non l'header
  - computazionalmente leggero;
  - ogni host che vuole comunicare deve avere tutto il software necessario ad implementare IPsec
  - si aggiunge solo l'header IPsec
  - gli indirizzi mittente e destinatario degli end-point sono rilevabili.

<img src="/media/vpn_01.png" style="width:550px;margin:auto;"/>

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Intro

IPsec supporta due modalit\xE0 di funzionamento:
- **Transport mode**
  - connessione host-to-host tra due end-point o host-to-router;
  - in caso di cifratura, viene cifrato solo il payload dei datagrammi IP, non l'header
  - computazionalmente leggero;
  - ogni host che vuole comunicare deve avere tutto il software necessario ad implementare IPsec
  - si aggiunge solo l'header IPsec
  - gli indirizzi mittente e destinatario degli end-point sono rilevabili.

<img src="/media/vpn_01.png" style="width:550px;margin:auto;"/>`,frontmatter:{},index:3,start:60,end:77,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:jy,meta:{slide:{raw:`
# IPsec VPN

Intro

IPsec supporta due modalit\xE0 di funzionamento:
- **Tunnel mode**
  - connessione router-to-router (site-to-site) (sia da AH che da ESP) 
  - in caso di cifratura, viene cifrato tutto il pacchetto IP originale
  - computazionalmente oneroso
  - solo i router devono avere il software IPsec
  - utilizza un doppio incapsulamento o tunneling
  - adottando il protocollo Encapsulating Security Payload, gli indirizzi mittente e destinatario degli end-point non sono quindi pi\xF9 rilevabili

<img src="/media/vpn_02.png" style="width:500px;margin:auto;"/>

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Intro

IPsec supporta due modalit\xE0 di funzionamento:
- **Tunnel mode**
  - connessione router-to-router (site-to-site) (sia da AH che da ESP) 
  - in caso di cifratura, viene cifrato tutto il pacchetto IP originale
  - computazionalmente oneroso
  - solo i router devono avere il software IPsec
  - utilizza un doppio incapsulamento o tunneling
  - adottando il protocollo Encapsulating Security Payload, gli indirizzi mittente e destinatario degli end-point non sono quindi pi\xF9 rilevabili

<img src="/media/vpn_02.png" style="width:500px;margin:auto;"/>`,frontmatter:{},index:4,start:78,end:95,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:eb,meta:{slide:{raw:`
# IPsec VPN

Remote VPN e Site-to-Site VPN

- Nel resto di questa esercitazione configureremo i due tipi di VPN studiati
  1. Remote VPN: VPN tra un dipendente mobile e la sede principale dell'azienda ACME

<br>
<img src="/media/vpn_03.png" style="width:400px;margin:auto;"/>

<br>

  2. Site-to-Site VPN: tra una sede remota e la la sede principale dell'azienda ACME

<br>
<img src="/media/vpn_04.png" style="width:400px;margin:auto;"/>

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN e Site-to-Site VPN

- Nel resto di questa esercitazione configureremo i due tipi di VPN studiati
  1. Remote VPN: VPN tra un dipendente mobile e la sede principale dell'azienda ACME

<br>
<img src="/media/vpn_03.png" style="width:400px;margin:auto;"/>

<br>

  2. Site-to-Site VPN: tra una sede remota e la la sede principale dell'azienda ACME

<br>
<img src="/media/vpn_04.png" style="width:400px;margin:auto;"/>`,frontmatter:{},index:5,start:96,end:115,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:ab,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

<img src="/media/vpn_05.png" style="width:900px;margin:auto;"/>

<br>

- il VPN Router \xE8 il modello Cisco c1900
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

<img src="/media/vpn_05.png" style="width:900px;margin:auto;"/>

<br>

- il VPN Router \xE8 il modello Cisco c1900`,frontmatter:{},index:6,start:116,end:127,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:WP,meta:{slide:{raw:`
# IPsec VPN

Remote VPN


**#1 abilitare la licenza per le VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
\`\`\`
<br>

**#2 salvare la configurazione e fare il reload**

\`\`\`bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN


**#1 abilitare la licenza per le VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
\`\`\`
<br>

**#2 salvare la configurazione e fare il reload**

\`\`\`bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
\`\`\``,frontmatter:{},index:7,start:128,end:156,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:GP,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#3 confermare l'attivazione della licenza per VPN**

\`\`\`bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#3 confermare l'attivazione della licenza per VPN**

\`\`\`bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
\`\`\``,frontmatter:{},index:8,start:157,end:177,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:ok,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#4 configurare il pool di indirizzi da assegnare ai client VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#ip local pool VPN-pool 172.16.32.101 172.16.32.200
Router(config)#
\`\`\`

<br>

**#5 abilitare il modulo e le fuinzionalit\xE0 AAA**

\`\`\`bash
Router(config)#Router(config)#aaa new-model 
Router(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#4 configurare il pool di indirizzi da assegnare ai client VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#ip local pool VPN-pool 172.16.32.101 172.16.32.200
Router(config)#
\`\`\`

<br>

**#5 abilitare il modulo e le fuinzionalit\xE0 AAA**

\`\`\`bash
Router(config)#Router(config)#aaa new-model 
Router(config)#
\`\`\``,frontmatter:{},index:9,start:178,end:202,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:hk,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#6 abilitare autenticazione con username locale (no RADIUS server)**

\`\`\`bash
Router(config)#aaa authentication login VPN-client local
\`\`\`

<br>

**#7 abilitare authorizzazione locale per network client per il gruppo VPN-ATS**

\`\`\`bash
Router(config)#aaa authorization network VPN-ATS local
\`\`\`

<br>

**#8 creare un account per ogni remote client ed aggiungerlo al DB locale**

\`\`\`bash
Router(config)#username ats-dennis secret password1
Router(config)#username ats-linus secret password2
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#6 abilitare autenticazione con username locale (no RADIUS server)**

\`\`\`bash
Router(config)#aaa authentication login VPN-client local
\`\`\`

<br>

**#7 abilitare authorizzazione locale per network client per il gruppo VPN-ATS**

\`\`\`bash
Router(config)#aaa authorization network VPN-ATS local
\`\`\`

<br>

**#8 creare un account per ogni remote client ed aggiungerlo al DB locale**

\`\`\`bash
Router(config)#username ats-dennis secret password1
Router(config)#username ats-linus secret password2
\`\`\``,frontmatter:{},index:10,start:203,end:231,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:kk,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#9 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrit\xE0
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

\`\`\`bash
Router(config)#crypto isakmp policy 1
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 7200
Router(config-isakmp)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#9 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrit\xE0
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

\`\`\`bash
Router(config)#crypto isakmp policy 1
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 7200
Router(config-isakmp)#
\`\`\``,frontmatter:{},index:11,start:232,end:255,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Sk,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#10 crea la configurazione isakmp client per il gruppo VPN-ATS**
- si configura la password di gruppo
- si assegna il pool di indirizzi al gruppo

<br>

\`\`\`bash
Router(config)#crypto isakmp client configuration group VPN-ATS
Router(config-isakmp-group)#key atsvpngroupsecret
Router(config-isakmp-group)#pool VPN-pool
Router(config-isakmp-group)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#10 crea la configurazione isakmp client per il gruppo VPN-ATS**
- si configura la password di gruppo
- si assegna il pool di indirizzi al gruppo

<br>

\`\`\`bash
Router(config)#crypto isakmp client configuration group VPN-ATS
Router(config-isakmp-group)#key atsvpngroupsecret
Router(config-isakmp-group)#pool VPN-pool
Router(config-isakmp-group)#
\`\`\``,frontmatter:{},index:12,start:256,end:274,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Mk,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#11 creare la policy per isakmp (IKE) per stabilire la SA (Phase 2)**

\`\`\`bash
Router(config)#crypto ipsec transform-set VPNipsec esp-aes esp-sha-hmac 
\`\`\`

<br>

- abilitiamo il protocollo ESP con encryption AES
- per l'integrit\xE0 utilizziamo sha-hmac
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#11 creare la policy per isakmp (IKE) per stabilire la SA (Phase 2)**

\`\`\`bash
Router(config)#crypto ipsec transform-set VPNipsec esp-aes esp-sha-hmac 
\`\`\`

<br>

- abilitiamo il protocollo ESP con encryption AES
- per l'integrit\xE0 utilizziamo sha-hmac`,frontmatter:{},index:13,start:275,end:291,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Wk,meta:{slide:{raw:`
# IPsec VPN

Remote VPN


**#12 definiamo un dynamic crypto map table (Policy) per il trasnform-setr VPNipsec (SA)**

Un dynamic crypto map \xE8 un template per la policy IPsec che verr\xE0 successivamente popolato con i parametri negoziati durante la fase di instaurazione della SA

- abilitiamo il reverse route injection in modo da poter comunicare con il client

Il Reverse route injection (RRI)permette al router di aggiungere delle route statiche per gli host presenti all'altro capo della VPN

<br>

\`\`\`bash
Router(config)#crypto dynamic-map VPNdynset 1
Router(config-crypto-map)#set transform-set VPNipsec 
Router(config-crypto-map)#reverse-route 
Router(config-crypto-map)#
\`\`\`

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN


**#12 definiamo un dynamic crypto map table (Policy) per il trasnform-setr VPNipsec (SA)**

Un dynamic crypto map \xE8 un template per la policy IPsec che verr\xE0 successivamente popolato con i parametri negoziati durante la fase di instaurazione della SA

- abilitiamo il reverse route injection in modo da poter comunicare con il client

Il Reverse route injection (RRI)permette al router di aggiungere delle route statiche per gli host presenti all'altro capo della VPN

<br>

\`\`\`bash
Router(config)#crypto dynamic-map VPNdynset 1
Router(config-crypto-map)#set transform-set VPNipsec 
Router(config-crypto-map)#reverse-route 
Router(config-crypto-map)#
\`\`\``,frontmatter:{},index:14,start:292,end:316,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:e2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#13 definiziamo un crypto map per il client configurando autenticazione e autorizzazione**

Un crypto map \xE8 una configurazione software che ha due scopi principali:
1. selezionare i pacchetti che necessit\xE0 del processamento IPsec
2. definire le policy per questi pacchetti 

- una crypto map deve essere applicata ad un interfaccia

<br>

\`\`\`bash
Router(config)#
Router(config)#crypto map VPNstaticmap client configuration address respond 
Router(config)#crypto map VPNstaticmap client authentication list VPN-client
Router(config)#crypto map VPNstaticmap isakmp authorization list VPN-ATS
Router(config)#crypto map VPNstaticmap 1 ipsec-isakmp dynamic VPNdynset
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#13 definiziamo un crypto map per il client configurando autenticazione e autorizzazione**

Un crypto map \xE8 una configurazione software che ha due scopi principali:
1. selezionare i pacchetti che necessit\xE0 del processamento IPsec
2. definire le policy per questi pacchetti 

- una crypto map deve essere applicata ad un interfaccia

<br>

\`\`\`bash
Router(config)#
Router(config)#crypto map VPNstaticmap client configuration address respond 
Router(config)#crypto map VPNstaticmap client authentication list VPN-client
Router(config)#crypto map VPNstaticmap isakmp authorization list VPN-ATS
Router(config)#crypto map VPNstaticmap 1 ipsec-isakmp dynamic VPNdynset
\`\`\``,frontmatter:{},index:15,start:317,end:340,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:a2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**#14 abilitiamo la VPN sull'interfaccia pubblica**

\`\`\`bash
Router(config)#interface gigabitEthernet 0/0
Router(config-if)#crypto map VPNstaticmap
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
Router(config-if)#end
Router#
%SYS-5-CONFIG_I: Configured from console by console
Router#
\`\`\`

<br>

- OK!!! ora il VPN router \xE8 in attesa di connessioni da parte dei remote client
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**#14 abilitiamo la VPN sull'interfaccia pubblica**

\`\`\`bash
Router(config)#interface gigabitEthernet 0/0
Router(config-if)#crypto map VPNstaticmap
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
Router(config-if)#end
Router#
%SYS-5-CONFIG_I: Configured from console by console
Router#
\`\`\`

<br>

- OK!!! ora il VPN router \xE8 in attesa di connessioni da parte dei remote client`,frontmatter:{},index:16,start:341,end:362,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:d2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

- Ora proviamo a stabilire una connessione tra un remote client (PC2) e la sede aziendale (VPN Router)
- Configuriamo il client nel seguente  modo
 
<img src="/media/vpn_06.png" style="width:350px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

- Ora proviamo a stabilire una connessione tra un remote client (PC2) e la sede aziendale (VPN Router)
- Configuriamo il client nel seguente  modo
 
<img src="/media/vpn_06.png" style="width:350px;margin:auto;"/>`,frontmatter:{},index:17,start:363,end:373,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:v2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

<img src="/media/vpn_07.png" style="width:400px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

<img src="/media/vpn_07.png" style="width:400px;margin:auto;"/>`,frontmatter:{},index:18,start:374,end:381,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:R2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

- Se tutto \xE8 stato configurato correttamente, ora il client \xE8 connesso in modo sicuro con la sede principale
  
<img src="/media/vpn_08.png" style="width:400px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

- Se tutto \xE8 stato configurato correttamente, ora il client \xE8 connesso in modo sicuro con la sede principale
  
<img src="/media/vpn_08.png" style="width:400px;margin:auto;"/>`,frontmatter:{},index:19,start:382,end:391,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:O2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

- Al client \xE8 stato assegnato un indirizzo del VPN-pool definito lato VPN Router

<br>

<img src="/media/vpn_09.png" style="width:380px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

- Al client \xE8 stato assegnato un indirizzo del VPN-pool definito lato VPN Router

<br>

<img src="/media/vpn_09.png" style="width:380px;margin:auto;"/>`,frontmatter:{},index:20,start:392,end:403,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:L2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

- Abbiamo ricevuto il primo indirizzo IP del pool VPN

<br>

<img src="/media/vpn_10.png" style="width:380px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

- Abbiamo ricevuto il primo indirizzo IP del pool VPN

<br>

<img src="/media/vpn_10.png" style="width:380px;margin:auto;"/>`,frontmatter:{},index:21,start:404,end:415,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:B2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

- Perfetto ora possiamo raggiungere  il web server nella rete aziendale
  
<img src="/media/vpn_11.png" style="width:450px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

- Perfetto ora possiamo raggiungere  il web server nella rete aziendale
  
<img src="/media/vpn_11.png" style="width:450px;margin:auto;"/>`,frontmatter:{},index:22,start:416,end:425,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Z2,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

  
<img src="/media/vpn_12.png" style="width:450px;margin:auto;"/>

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

  
<img src="/media/vpn_12.png" style="width:450px;margin:auto;"/>`,frontmatter:{},index:23,start:426,end:435,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:ew,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**Esercizio:**

- In  modalit\xE0 simulazione:
  1. inviare un pacchetto ICMP dal client VPN al web server aziendale
  2. osservare il pacchetto all'uscita del PC2
  3. osservare il pacchetto all'ingresso del router VPN (da Internet)
  4. osservare il pacchetto all'uscita del router VPN (verso la LAN interna)
 - Descrivi cosa osservi?
 - Il comportamento \xE8 in linea con le tue aspettative?
    `,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**Esercizio:**

- In  modalit\xE0 simulazione:
  1. inviare un pacchetto ICMP dal client VPN al web server aziendale
  2. osservare il pacchetto all'uscita del PC2
  3. osservare il pacchetto all'ingresso del router VPN (da Internet)
  4. osservare il pacchetto all'uscita del router VPN (verso la LAN interna)
 - Descrivi cosa osservi?
 - Il comportamento \xE8 in linea con le tue aspettative?`,frontmatter:{},index:24,start:436,end:451,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:iw,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

- Alcuni utili comandi per verificare lo stato della VPN sono
  
\`\`\`bash
Router#
Router#show aaa sessions 
Router#
Router#
Router#show crypto ipsec sa
Router# 
Router#show crypto isakmp sa 
Router# 
Router#show crypto isakmp  policy 
Router# 
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

- Alcuni utili comandi per verificare lo stato della VPN sono
  
\`\`\`bash
Router#
Router#show aaa sessions 
Router#
Router#
Router#show crypto ipsec sa
Router# 
Router#show crypto isakmp sa 
Router# 
Router#show crypto isakmp  policy 
Router# 
\`\`\``,frontmatter:{},index:25,start:452,end:472,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:uw,meta:{slide:{raw:`
# IPsec VPN

Remote VPN

**Esercizio:**

- Ispezionare la tabella di routing
- Identificare le reverse route

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Remote VPN

**Esercizio:**

- Ispezionare la tabella di routing
- Identificare le reverse route`,frontmatter:{},index:26,start:473,end:484,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:gw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN

<img src="/media/vpn_13.png" style="width:900px;margin:auto;"/>

- i VPN Router R1 e R2 sono Cisco c1900
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN

<img src="/media/vpn_13.png" style="width:900px;margin:auto;"/>

- i VPN Router R1 e R2 sono Cisco c1900`,frontmatter:{},index:27,start:485,end:494,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Rw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#1 abilitare la licenza per le VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
\`\`\`
<br>

**#2 salvare la configurazione e fare il reload**

\`\`\`bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#1 abilitare la licenza per le VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
\`\`\`
<br>

**#2 salvare la configurazione e fare il reload**

\`\`\`bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
\`\`\``,frontmatter:{},index:28,start:495,end:522,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Sw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#3 confermare l'attivazione della licenza per VPN**

\`\`\`bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#3 confermare l'attivazione della licenza per VPN**

\`\`\`bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
\`\`\``,frontmatter:{},index:29,start:523,end:543,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Mw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#4 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrit\xE0
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

\`\`\`bash
Router(config)#crypto isakmp policy 10
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 86400
Router(config-isakmp)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#4 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrit\xE0
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

\`\`\`bash
Router(config)#crypto isakmp policy 10
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 86400
Router(config-isakmp)#
\`\`\``,frontmatter:{},index:30,start:544,end:567,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Dw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#5 definire la chiave isakmp**

\`\`\`bash
R1(config)#
R1(config)#crypto isakmp key vpnsecurepasswd address 94.45.32.65
R1(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#5 definire la chiave isakmp**

\`\`\`bash
R1(config)#
R1(config)#crypto isakmp key vpnsecurepasswd address 94.45.32.65
R1(config)#
\`\`\``,frontmatter:{},index:31,start:568,end:581,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Uw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#6 configuriamo la fase 2 di IKE**


\`\`\`bash
R1(config)#
R1(config)#crypto ipsec transform-set VPN-MAIN esp-aes esp-sha-hmac 
R1(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#6 configuriamo la fase 2 di IKE**


\`\`\`bash
R1(config)#
R1(config)#crypto ipsec transform-set VPN-MAIN esp-aes esp-sha-hmac 
R1(config)#
\`\`\``,frontmatter:{},index:32,start:582,end:596,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Jw,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#7 Definiamo adesso l\u2019ACL che si occuper\xE0 di indentificare il traffico VPN (detto, in gergo, interesting traffic):**


\`\`\`bash
R1(config)#access-list 100 permit ip 172.16.0.0 0.0.255.255 192.168.100.0 0.0.0.255 
R1(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#7 Definiamo adesso l\u2019ACL che si occuper\xE0 di indentificare il traffico VPN (detto, in gergo, interesting traffic):**


\`\`\`bash
R1(config)#access-list 100 permit ip 172.16.0.0 0.0.255.255 192.168.100.0 0.0.0.255 
R1(config)#
\`\`\``,frontmatter:{},index:33,start:597,end:610,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:sR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#8 definiamo la cryptomap**

- definiamo il router peer (remote branch)
- associamo il transform set
- indichiamo quali indirizzi sono accettati tramite l'acces slist

\`\`\`bash
R1(config)#crypto map VPN-MAIN-MAP 10  ipsec-isakmp 
% NOTE: This new crypto map will remain disabled until a peer
        and a valid access list have been configured
R1(config-crypto-map)#set peer 94.45.32.65
R1(config-crypto-map)#set transform-set VPN-MAIN 
R1(config-crypto-map)#match address 100
R1(config-crypto-map)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#8 definiamo la cryptomap**

- definiamo il router peer (remote branch)
- associamo il transform set
- indichiamo quali indirizzi sono accettati tramite l'acces slist

\`\`\`bash
R1(config)#crypto map VPN-MAIN-MAP 10  ipsec-isakmp 
% NOTE: This new crypto map will remain disabled until a peer
        and a valid access list have been configured
R1(config-crypto-map)#set peer 94.45.32.65
R1(config-crypto-map)#set transform-set VPN-MAIN 
R1(config-crypto-map)#match address 100
R1(config-crypto-map)#
\`\`\``,frontmatter:{},index:34,start:611,end:632,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:lR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#9 associamo la crypto map all'interfaccia esposta su Internet**


\`\`\`bash
R1(config)#
R1(config)#int gigabitEthernet 0/0
R1(config-if)#crypto map VPN-MAIN-MAP
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
R1(config-if)#end
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R1

**#9 associamo la crypto map all'interfaccia esposta su Internet**


\`\`\`bash
R1(config)#
R1(config)#int gigabitEthernet 0/0
R1(config-if)#crypto map VPN-MAIN-MAP
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
R1(config-if)#end
\`\`\``,frontmatter:{},index:35,start:633,end:649,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:gR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#1 abilitare la licenza per le VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
\`\`\`
<br>

**#2 salvare la configurazione e fare il reload**

\`\`\`bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#1 abilitare la licenza per le VPN**

\`\`\`bash
Router#
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#license boot module c1900 technology-package securityk9
\`\`\`
<br>

**#2 salvare la configurazione e fare il reload**

\`\`\`bash
Router#
Router#copy running-config startup-config 
Destination filename [startup-config]? 
Building configuration...
[OK]
Router#
Router#reload 
\`\`\``,frontmatter:{},index:36,start:650,end:677,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:PR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#3 confermare l'attivazione della licenza per VPN**

\`\`\`bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#3 confermare l'attivazione della licenza per VPN**

\`\`\`bash
Router#
Router#show version 

----------------------------------------------------------------
Technology    Technology-package          Technology-package
              Current       Type          Next reboot
-----------------------------------------------------------------
ipbase        ipbasek9      Permanent     ipbasek9
security      securityk9    Evaluation    securityk9
data          disable       None          None
\`\`\``,frontmatter:{},index:37,start:678,end:698,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:ER,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#4 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrit\xE0
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

\`\`\`bash
Router(config)#crypto isakmp policy 10
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 86400
Router(config-isakmp)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#4 creare la policy per isakmp (IKE) per stabilire la SA (Phase 1)**
- si configura il protocollo di encryption
- il protocollo di hashing per l'integrit\xE0
- il modello di scambio delle chiavi
- il metodo di scambio delle chiavi DH-5 (1536 bit)

<br>

\`\`\`bash
Router(config)#crypto isakmp policy 10
Router(config-isakmp)#encryption aes 256
Router(config-isakmp)#hash sha 
Router(config-isakmp)#authentication pre-share
Router(config-isakmp)#group 5
Router(config-isakmp)#lifetime 86400
Router(config-isakmp)#
\`\`\``,frontmatter:{},index:38,start:699,end:722,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:AR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#5 definire la chiave isakmp**

\`\`\`bash
R1(config)#
R1(config)#crypto isakmp key vpnsecurepasswd address 93.39.156.32
R1(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#5 definire la chiave isakmp**

\`\`\`bash
R1(config)#
R1(config)#crypto isakmp key vpnsecurepasswd address 93.39.156.32
R1(config)#
\`\`\``,frontmatter:{},index:39,start:723,end:736,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:LR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#6 configuriamo la fase 2 di IKE**


\`\`\`bash
R1(config)#
R1(config)#crypto ipsec transform-set VPN-BRANCH esp-aes esp-sha-hmac 
R1(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#6 configuriamo la fase 2 di IKE**


\`\`\`bash
R1(config)#
R1(config)#crypto ipsec transform-set VPN-BRANCH esp-aes esp-sha-hmac 
R1(config)#
\`\`\``,frontmatter:{},index:40,start:737,end:751,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:KR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#7 Definiamo adesso l\u2019ACL che si occuper\xE0 di indentificare il traffico VPN (detto, in gergo, interesting traffic):**


\`\`\`bash
R1(config)#access-list 101 permit ip 192.168.100.0 0.0.0.255 172.16.0.0 0.0.255.255
R1(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#7 Definiamo adesso l\u2019ACL che si occuper\xE0 di indentificare il traffico VPN (detto, in gergo, interesting traffic):**


\`\`\`bash
R1(config)#access-list 101 permit ip 192.168.100.0 0.0.0.255 172.16.0.0 0.0.255.255
R1(config)#
\`\`\``,frontmatter:{},index:41,start:752,end:765,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:ZR,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#8 definiamo la cryptomap**

- definiamo il router peer (remote branch)
- associamo il transform set
- indichiamo quali indirizzi sono accettati tramite l'acces slist

\`\`\`bash
R1(config)#crypto map VPN-BRANCH-MAP 10 ipsec-isakmp 
% NOTE: This new crypto map will remain disabled until a peer
        and a valid access list have been configured
R1(config-crypto-map)#set peer 93.39.156.32
R1(config-crypto-map)#set transform-set VPN-BRANCH
R1(config-crypto-map)#match address 101
R1(config-crypto-map)#
\`\`\``,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#8 definiamo la cryptomap**

- definiamo il router peer (remote branch)
- associamo il transform set
- indichiamo quali indirizzi sono accettati tramite l'acces slist

\`\`\`bash
R1(config)#crypto map VPN-BRANCH-MAP 10 ipsec-isakmp 
% NOTE: This new crypto map will remain disabled until a peer
        and a valid access list have been configured
R1(config-crypto-map)#set peer 93.39.156.32
R1(config-crypto-map)#set transform-set VPN-BRANCH
R1(config-crypto-map)#match address 101
R1(config-crypto-map)#
\`\`\``,frontmatter:{},index:42,start:766,end:786,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:ex,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#9 dobbiamo evitare che il traffico LAN-to-LAN passi attraverso il NAT**


\`\`\`bash
R2(config)#access-list 100 remark --NO-NAT--
R2(config)#access-list 100 deny ip 192.168.100.0 0.0.0.255 172.16.0.0 0.0.255.255
R2(config)#access-list 100 permit ip  192.168.100.0 0.0.0.255 any 
R2(config)#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#9 dobbiamo evitare che il traffico LAN-to-LAN passi attraverso il NAT**


\`\`\`bash
R2(config)#access-list 100 remark --NO-NAT--
R2(config)#access-list 100 deny ip 192.168.100.0 0.0.0.255 172.16.0.0 0.0.255.255
R2(config)#access-list 100 permit ip  192.168.100.0 0.0.0.255 any 
R2(config)#
\`\`\``,frontmatter:{},index:43,start:787,end:802,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:ix,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#10 associamo la ACl al NAT**


\`\`\`bash
R2(config)#no access-list 1
R2(config)#no ip nat inside source list 1 interface GigabitEthernet0/1 overload
R2(config)#ip nat inside source list 100 interface gigabitEthernet 0/1 overload 

\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#10 associamo la ACl al NAT**


\`\`\`bash
R2(config)#no access-list 1
R2(config)#no ip nat inside source list 1 interface GigabitEthernet0/1 overload
R2(config)#ip nat inside source list 100 interface gigabitEthernet 0/1 overload 

\`\`\``,frontmatter:{},index:44,start:803,end:818,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:ux,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#11 associamo la crypto map all'interfaccia esposta su Internet**


\`\`\`bash
R1(config)#
R1(config)#int gigabitEthernet 0/1
R1(config-if)#crypto map VPN-BRANCH-MAP
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
R1(config-if)#end
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN - Configurazione di R2

**#11 associamo la crypto map all'interfaccia esposta su Internet**


\`\`\`bash
R1(config)#
R1(config)#int gigabitEthernet 0/1
R1(config-if)#crypto map VPN-BRANCH-MAP
*Jan  3 07:16:26.785: %CRYPTO-6-ISAKMP_ON_OFF: ISAKMP is ON
R1(config-if)#end
\`\`\``,frontmatter:{},index:45,start:819,end:835,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:hx,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN

- OK ora verifichiamo che le SA sono correttamente configurate (R1)

\`\`\`bash
R1#show crypto ipsec sa 
interface: GigabitEthernet0/0
    Crypto map tag: VPN-MAIN-MAP, local addr 93.39.156.32

   protected vrf: (none)
   local  ident (addr/mask/prot/port): (172.16.0.0/255.255.0.0/0/0)
   remote  ident (addr/mask/prot/port): (192.168.100.0/255.255.255.0/0/0)
   current_peer 94.45.32.65 port 500
    PERMIT, flags={origin_is_acl,}
   #pkts encaps: 0, #pkts encrypt: 0, #pkts digest: 0
   .....
   #pkts not decompressed: 0, #pkts decompress failed: 0
   #send errors 0, #recv errors 0

     local crypto endpt.: 93.39.156.32, remote crypto endpt.:94.45.32.65
     path mtu 1500, ip mtu 1500, ip mtu idb GigabitEthernet0/0
     current outbound spi: 0x0(0)
     ......
     ......

R1#
\`\`\`
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN

- OK ora verifichiamo che le SA sono correttamente configurate (R1)

\`\`\`bash
R1#show crypto ipsec sa 
interface: GigabitEthernet0/0
    Crypto map tag: VPN-MAIN-MAP, local addr 93.39.156.32

   protected vrf: (none)
   local  ident (addr/mask/prot/port): (172.16.0.0/255.255.0.0/0/0)
   remote  ident (addr/mask/prot/port): (192.168.100.0/255.255.255.0/0/0)
   current_peer 94.45.32.65 port 500
    PERMIT, flags={origin_is_acl,}
   #pkts encaps: 0, #pkts encrypt: 0, #pkts digest: 0
   .....
   #pkts not decompressed: 0, #pkts decompress failed: 0
   #send errors 0, #recv errors 0

     local crypto endpt.: 93.39.156.32, remote crypto endpt.:94.45.32.65
     path mtu 1500, ip mtu 1500, ip mtu idb GigabitEthernet0/0
     current outbound spi: 0x0(0)
     ......
     ......

R1#
\`\`\``,frontmatter:{},index:46,start:836,end:867,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:bx,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN

- OK ora verifichiamo che le SA sono correttamente configurate (R2)

\`\`\`bash
R2#show crypto ipsec sa 
interface: GigabitEthernet0/1
    Crypto map tag: VPN-BRANCH-MAP, local addr 94.45.32.65

   protected vrf: (none)
   local  ident (addr/mask/prot/port): (192.168.100.0/255.255.255.0/0/0)
   remote  ident (addr/mask/prot/port): (172.16.0.0/255.255.0.0/0/0)
   current_peer 93.39.156.32 port 500
    PERMIT, flags={origin_is_acl,}
   #pkts encaps: 0, #pkts encrypt: 0, #pkts digest: 0
   .....
   #pkts not decompressed: 0, #pkts decompress failed: 0
   #send errors 0, #recv errors 0

     local crypto endpt.: 94.45.32.65, remote crypto endpt.:93.39.156.32
     path mtu 1500, ip mtu 1500, ip mtu idb GigabitEthernet0/1
     current outbound spi: 0x0(0)
     ....
     ....
R2#
\`\`\`
  `,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN

- OK ora verifichiamo che le SA sono correttamente configurate (R2)

\`\`\`bash
R2#show crypto ipsec sa 
interface: GigabitEthernet0/1
    Crypto map tag: VPN-BRANCH-MAP, local addr 94.45.32.65

   protected vrf: (none)
   local  ident (addr/mask/prot/port): (192.168.100.0/255.255.255.0/0/0)
   remote  ident (addr/mask/prot/port): (172.16.0.0/255.255.0.0/0/0)
   current_peer 93.39.156.32 port 500
    PERMIT, flags={origin_is_acl,}
   #pkts encaps: 0, #pkts encrypt: 0, #pkts digest: 0
   .....
   #pkts not decompressed: 0, #pkts decompress failed: 0
   #send errors 0, #recv errors 0

     local crypto endpt.: 94.45.32.65, remote crypto endpt.:93.39.156.32
     path mtu 1500, ip mtu 1500, ip mtu idb GigabitEthernet0/1
     current outbound spi: 0x0(0)
     ....
     ....
R2#
\`\`\``,frontmatter:{},index:47,start:868,end:898,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Nx,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN

\`\`\`bash
R1#show crypto isakmp sa 
IPv4 Crypto ISAKMP SA
dst             src             state          conn-id slot status

IPv6 Crypto ISAKMP SA
\`\`\`

<br>

- come si pu\xF2 vedere il tunnel non \xE8 ancora stabilito
- il tunnel verr\xE0 creato on demand  
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN

\`\`\`bash
R1#show crypto isakmp sa 
IPv4 Crypto ISAKMP SA
dst             src             state          conn-id slot status

IPv6 Crypto ISAKMP SA
\`\`\`

<br>

- come si pu\xF2 vedere il tunnel non \xE8 ancora stabilito
- il tunnel verr\xE0 creato on demand`,frontmatter:{},index:48,start:899,end:917,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Ax,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN

**Esercizio:**

- fare un ping dal PC2 al ATS Web Server
- il ping funziona?
- il tunnel adesso \xE8 presente?

<img src="/media/vpn_14.png" style="width:600px;margin:auto;"/>
`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN

**Esercizio:**

- fare un ping dal PC2 al ATS Web Server
- il ping funziona?
- il tunnel adesso \xE8 presente?

<img src="/media/vpn_14.png" style="width:600px;margin:auto;"/>`,frontmatter:{},index:49,start:918,end:931,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Hx,meta:{slide:{raw:`
# IPsec VPN

Site-to-Site VPN

**Esercizio:**

- dal PC2 accedere via browser alla home page della intranet aziendale
- verificare il pacchetto durante il transito di R2
- com'\xE8 fatto il pacchetto all'ingresso di R2-Gi0/0?
- com'\xE8 fatto il pacchetto all'uscita di R2-Gi0/1?
 
- verificare il pacchetto durante il transito di R1
- com'\xE8 fatto il pacchetto all'ingresso di R1-Gi0/0?
- com'\xE8 fatto il pacchetto all'uscita di R1-Gi0/1?

<img src="/media/vpn_15.png" style="width:450px;position:relative;right:-27rem;top: -15rem;"/>

`,title:"IPsec VPN",level:1,content:`# IPsec VPN

Site-to-Site VPN

**Esercizio:**

- dal PC2 accedere via browser alla home page della intranet aziendale
- verificare il pacchetto durante il transito di R2
- com'\xE8 fatto il pacchetto all'ingresso di R2-Gi0/0?
- com'\xE8 fatto il pacchetto all'uscita di R2-Gi0/1?
 
- verificare il pacchetto durante il transito di R1
- com'\xE8 fatto il pacchetto all'ingresso di R1-Gi0/0?
- com'\xE8 fatto il pacchetto all'uscita di R1-Gi0/1?

<img src="/media/vpn_15.png" style="width:450px;position:relative;right:-27rem;top: -15rem;"/>`,frontmatter:{},index:50,start:932,end:951,notesHTML:"",filepath:"/home/antonio/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",component:ay,meta:{layout:"end"}}],je=Dx,jx=[{name:"play",path:"/",component:Qv,children:[...je]},{name:"print",path:"/print",component:oy},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>us(()=>import("./Presenter.ed97e966.js"),["assets/Presenter.ed97e966.js","assets/Presenter.1ea605f8.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.b1ef75f8.js"]),beforeEnter:e=>{if(!xn.remote||xn.remote===e.query.password)return!0;if(xn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(xn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=F_({history:e_("/RETI/5/VPN/"),routes:jx});function Kx(e,t,{mode:n="replace"}={}){return E({get(){const s=gt.currentRoute.value.query[e];return s==null?t!=null?t:null:Array.isArray(s)?s.filter(Boolean):s},set(s){qe(()=>{gt[P(n)]({query:{...gt.currentRoute.value.query,[e]:s}})})}})}const bp=W(0);qe(()=>{gt.afterEach(async()=>{await qe(),bp.value+=1})});const Jt=E(()=>gt.currentRoute.value),na=E(()=>Jt.value.query.print!==void 0),Bx=E(()=>Jt.value.query.print==="clicks"),Bt=E(()=>Jt.value.query.embedded!==void 0),Ft=E(()=>Jt.value.path.startsWith("/presenter")),Ts=E(()=>na.value&&!Bx.value),cr=E(()=>Jt.value.query.password),Wx=E(()=>!Ft.value&&(!we.remote||cr.value===we.remote)),Ql=Kx("clicks","0"),Pp=E(()=>je.length-1),Ux=E(()=>Jt.value.path),Ke=E(()=>parseInt(Ux.value.split(/\//g).slice(-1)[0])||1);E(()=>ni(Ke.value));const ft=E(()=>je.find(e=>e.path===`${Ke.value}`));E(()=>{var e,t,n;return(n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});E(()=>{var e,t;return(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout});const Pi=E(()=>je.find(e=>e.path===`${Math.min(je.length,Ke.value+1)}`)),qx=E(()=>{var e,t;return bp.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ot=E({get(){if(Ts.value)return 99999;let e=+(Ql.value||0);return isNaN(e)&&(e=0),e},set(e){Ql.value=e.toString()}}),Co=E(()=>{var e,t,n;return+((n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:qx.value.length)}),Yx=E(()=>Ke.value<je.length-1||Ot.value<Co.value),Zx=E(()=>Ke.value>1||Ot.value>0),Gx=E(()=>je.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(sa(e,t),e),[])),Jx=E(()=>oa(Gx.value,ft.value));E(()=>ia(Jx.value));function un(){Co.value<=Ot.value?Zs():Ot.value+=1}async function pn(){Ot.value<=0?await Gs():Ot.value-=1}function ni(e){return Ft.value?`/presenter/${e}`:`/${e}`}function Zs(){const e=Math.min(je.length,Ke.value+1);return rs(e)}async function Gs(e=!0){const t=Math.max(1,Ke.value-1);await rs(t),e&&Co.value&&gt.replace({query:{...Jt.value.query,clicks:Co.value}})}function rs(e,t){return gt.push({path:ni(e),query:{...Jt.value.query,clicks:t}})}function Xx(e){const t=W(0),{direction:n,distanceX:s,distanceY:o}=xg(e,{onSwipeStart(r){r.pointerType==="touch"&&(Us.value||(t.value=Ji()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Us.value)return;const a=Math.abs(s.value),l=Math.abs(o.value);a/window.innerWidth>.3||a>100?n.value===qt.LEFT?un():pn():(l/window.innerHeight>.4||l>200)&&(n.value===qt.DOWN?Gs():Zs())}})}async function ur(){const{saveAs:e}=await us(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Cu(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/RETI/5/VPN/slidev-exported.pdf",`${we.title}.pdf`)}async function Qx(e){var t,n;if(e==null){const s=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function sa(e,t,n=1){var o,r,a,l,c;const s=(r=(o=t.meta)==null?void 0:o.slide)==null?void 0:r.level;s&&s>n&&e.length>0?sa(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function oa(e,t,n=!1,s){return e.map(o=>{const r={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return r.children.length>0&&(r.children=oa(r.children,t,r.active||r.hasActiveParent,r)),s&&(r.active||r.activeParent)&&(s.activeParent=!0),r})}function ia(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ia(n.children,t+1)}))}function eN(){const e=we.titleTemplate.replace("%s",we.title||"Slidev");Ym({title:e}),sh(`${e} - shared`),ah(`${e} - drawings`);function t(){Ft.value&&(sl("page",+Ke.value),sl("clicks",Ot.value))}gt.afterEach(t),fe(Ot,t),oh(n=>{(+n.page!=+Ke.value||Ot.value!==n.clicks)&&gt.replace({path:ni(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const tN=Ee({__name:"App",setup(e){return C(K),eN(),(t,n)=>{const s=Fi("RouterView"),o=Fi("StarportCarrier");return k(),q(Ne,null,[T(s),T(o)],64)}}});function ki(e){return e!==null&&typeof e=="object"}function pr(e,t,n=".",s){if(!ki(t))return pr(e,{},n,s);const o=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const a=e[r];a!=null&&(s&&s(o,r,a,n)||(Array.isArray(a)&&Array.isArray(o[r])?o[r]=a.concat(o[r]):ki(a)&&ki(o[r])?o[r]=pr(a,o[r],(n?`${n}.`:"")+r.toString(),s):o[r]=a))}return o}function nN(e){return(...t)=>t.reduce((n,s)=>pr(n,s,"",e),{})}const sN=nN();var ec;const kp=typeof window<"u",oN=Object.prototype.toString,iN=e=>typeof e=="number",rN=e=>typeof e=="string",fr=e=>oN.call(e)==="[object Object]",Vn=()=>{};kp&&((ec=window==null?void 0:window.navigator)==null?void 0:ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function wp(e){return $r()?(Or(e),!0):!1}function ra(e){Mn()&&Jo(e)}function aN(e,t,n){const s=fe(e,(...o)=>(qe(()=>s()),t(...o)),n)}function Tn(e){var t;const n=P(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Rp=kp?window:void 0;function lN(...e){let t,n,s,o;if(rN(e[0])?([n,s,o]=e,t=Rp):[t,n,s,o]=e,!t)return Vn;let r=Vn;const a=fe(()=>Tn(t),c=>{r(),c&&(c.addEventListener(n,s,o),r=()=>{c.removeEventListener(n,s,o),r=Vn})},{immediate:!0,flush:"post"}),l=()=>{a(),r()};return wp(l),l}const dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mr="__vueuse_ssr_handlers__";dr[mr]=dr[mr]||{};dr[mr];function cN(e,t,n={}){const{root:s,rootMargin:o="0px",threshold:r=.1,window:a=Rp}=n,l=a&&"IntersectionObserver"in a;let c=Vn;const p=l?fe(()=>({el:Tn(e),root:Tn(s)}),({el:m,root:d})=>{if(c(),!m)return;const h=new IntersectionObserver(t,{root:d,rootMargin:o,threshold:r});h.observe(m),c=()=>{h.disconnect(),c=Vn}},{immediate:!0,flush:"post"}):Vn,f=()=>{c(),p()};return wp(f),{isSupported:l,stop:f}}var tc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tc||(tc={}));const xp=1/60*1e3,uN=typeof performance<"u"?()=>performance.now():()=>Date.now(),Np=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(uN()),xp);function pN(e){let t=[],n=[],s=0,o=!1,r=!1;const a=new WeakSet,l={schedule:(c,p=!1,f=!1)=>{const m=f&&o,d=m?t:n;return p&&a.add(c),d.indexOf(c)===-1&&(d.push(c),m&&o&&(s=t.length)),c},cancel:c=>{const p=n.indexOf(c);p!==-1&&n.splice(p,1),a.delete(c)},process:c=>{if(o){r=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let p=0;p<s;p++){const f=t[p];f(c),a.has(f)&&(l.schedule(f),e())}o=!1,r&&(r=!1,l.process(c))}};return l}const fN=40;let hr=!0,Js=!1,gr=!1;const ts={delta:0,timestamp:0},to=["read","update","preRender","render","postRender"],si=to.reduce((e,t)=>(e[t]=pN(()=>Js=!0),e),{}),_r=to.reduce((e,t)=>{const n=si[t];return e[t]=(s,o=!1,r=!1)=>(Js||hN(),n.schedule(s,o,r)),e},{}),dN=to.reduce((e,t)=>(e[t]=si[t].cancel,e),{});to.reduce((e,t)=>(e[t]=()=>si[t].process(ts),e),{});const mN=e=>si[e].process(ts),Ip=e=>{Js=!1,ts.delta=hr?xp:Math.max(Math.min(e-ts.timestamp,fN),1),ts.timestamp=e,gr=!0,to.forEach(mN),gr=!1,Js&&(hr=!1,Np(Ip))},hN=()=>{Js=!0,hr=!0,gr||Np(Ip)},Ep=()=>ts;function Sp(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n}var gN=function(){},nc=function(){};const vr=(e,t,n)=>Math.min(Math.max(n,e),t),wi=.001,_N=.01,sc=10,vN=.05,yN=1;function bN({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let o,r;gN(e<=sc*1e3);let a=1-t;a=vr(vN,yN,a),e=vr(_N,sc,e/1e3),a<1?(o=p=>{const f=p*a,m=f*e,d=f-n,h=yr(p,a),g=Math.exp(-m);return wi-d/h*g},r=p=>{const m=p*a*e,d=m*n+n,h=Math.pow(a,2)*Math.pow(p,2)*e,g=Math.exp(-m),b=yr(Math.pow(p,2),a);return(-o(p)+wi>0?-1:1)*((d-h)*g)/b}):(o=p=>{const f=Math.exp(-p*e),m=(p-n)*e+1;return-wi+f*m},r=p=>{const f=Math.exp(-p*e),m=(n-p)*(e*e);return f*m});const l=5/e,c=kN(o,r,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(c,2)*s;return{stiffness:p,damping:a*2*Math.sqrt(s*p),duration:e}}}const PN=12;function kN(e,t,n){let s=n;for(let o=1;o<PN;o++)s=s-e(s)/t(s);return s}function yr(e,t){return e*Math.sqrt(1-t*t)}const wN=["duration","bounce"],RN=["stiffness","damping","mass"];function oc(e,t){return t.some(n=>e[n]!==void 0)}function xN(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!oc(e,RN)&&oc(e,wN)){const n=bN(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function aa(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:o}=e,r=Sp(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:p,velocity:f,duration:m,isResolvedFromDuration:d}=xN(r),h=ic,g=ic;function b(){const y=f?-(f/1e3):0,N=n-t,x=c/(2*Math.sqrt(l*p)),R=Math.sqrt(l/p)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),x<1){const I=yr(R,x);h=F=>{const z=Math.exp(-x*R*F);return n-z*((y+x*R*N)/I*Math.sin(I*F)+N*Math.cos(I*F))},g=F=>{const z=Math.exp(-x*R*F);return x*R*z*(Math.sin(I*F)*(y+x*R*N)/I+N*Math.cos(I*F))-z*(Math.cos(I*F)*(y+x*R*N)-I*N*Math.sin(I*F))}}else if(x===1)h=I=>n-Math.exp(-R*I)*(N+(y+R*N)*I);else{const I=R*Math.sqrt(x*x-1);h=F=>{const z=Math.exp(-x*R*F),B=Math.min(I*F,300);return n-z*((y+x*R*N)*Math.sinh(B)+I*N*Math.cosh(B))/I}}}return b(),{next:y=>{const N=h(y);if(d)a.done=y>=m;else{const x=g(y)*1e3,R=Math.abs(x)<=s,I=Math.abs(n-N)<=o;a.done=R&&I}return a.value=a.done?n:N,a},flipTarget:()=>{f=-f,[t,n]=[n,t],b()}}}aa.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ic=e=>0,$p=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},la=(e,t,n)=>-n*e+n*t+e,Op=(e,t)=>n=>Math.max(Math.min(n,t),e),Cs=e=>e%1?Number(e.toFixed(5)):e,Xs=/(-)?([\d]*\.?[\d])+/g,br=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,NN=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function no(e){return typeof e=="string"}const so={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ms=Object.assign(Object.assign({},so),{transform:Op(0,1)}),mo=Object.assign(Object.assign({},so),{default:1}),ca=e=>({test:t=>no(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),_n=ca("deg"),zs=ca("%"),ue=ca("px"),rc=Object.assign(Object.assign({},zs),{parse:e=>zs.parse(e)/100,transform:e=>zs.transform(e*100)}),ua=(e,t)=>n=>Boolean(no(n)&&NN.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Vp=(e,t,n)=>s=>{if(!no(s))return s;const[o,r,a,l]=s.match(Xs);return{[e]:parseFloat(o),[t]:parseFloat(r),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},In={test:ua("hsl","hue"),parse:Vp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+zs.transform(Cs(t))+", "+zs.transform(Cs(n))+", "+Cs(Ms.transform(s))+")"},IN=Op(0,255),Ri=Object.assign(Object.assign({},so),{transform:e=>Math.round(IN(e))}),rn={test:ua("rgb","red"),parse:Vp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ri.transform(e)+", "+Ri.transform(t)+", "+Ri.transform(n)+", "+Cs(Ms.transform(s))+")"};function EN(e){let t="",n="",s="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Pr={test:ua("#"),parse:EN,transform:rn.transform},rt={test:e=>rn.test(e)||Pr.test(e)||In.test(e),parse:e=>rn.test(e)?rn.parse(e):In.test(e)?In.parse(e):Pr.parse(e),transform:e=>no(e)?e:e.hasOwnProperty("red")?rn.transform(e):In.transform(e)},Ap="${c}",Tp="${n}";function SN(e){var t,n,s,o;return isNaN(e)&&no(e)&&((n=(t=e.match(Xs))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(s=e.match(br))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)>0}function Cp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(br);s&&(n=s.length,e=e.replace(br,Ap),t.push(...s.map(rt.parse)));const o=e.match(Xs);return o&&(e=e.replace(Xs,Tp),t.push(...o.map(so.parse))),{values:t,numColors:n,tokenised:e}}function Mp(e){return Cp(e).values}function zp(e){const{values:t,numColors:n,tokenised:s}=Cp(e),o=t.length;return r=>{let a=s;for(let l=0;l<o;l++)a=a.replace(l<n?Ap:Tp,l<n?rt.transform(r[l]):Cs(r[l]));return a}}const $N=e=>typeof e=="number"?0:e;function ON(e){const t=Mp(e);return zp(e)(t.map($N))}const oo={test:SN,parse:Mp,createTransformer:zp,getAnimatableNone:ON},VN=new Set(["brightness","contrast","saturate","opacity"]);function AN(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Xs)||[];if(!s)return e;const o=n.replace(s,"");let r=VN.has(t)?1:0;return s!==n&&(r*=100),t+"("+r+o+")"}const TN=/([a-z-]*)\(.*?\)/g,kr=Object.assign(Object.assign({},oo),{getAnimatableNone:e=>{const t=e.match(TN);return t?t.map(AN).join(" "):e}});function xi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ac({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let o=0,r=0,a=0;if(!t)o=r=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;o=xi(c,l,e+1/3),r=xi(c,l,e),a=xi(c,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:s}}const CN=(e,t,n)=>{const s=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-s)+s))},MN=[Pr,rn,In],lc=e=>MN.find(t=>t.test(e)),Lp=(e,t)=>{let n=lc(e),s=lc(t),o=n.parse(e),r=s.parse(t);n===In&&(o=ac(o),n=rn),s===In&&(r=ac(r),s=rn);const a=Object.assign({},o);return l=>{for(const c in a)c!=="alpha"&&(a[c]=CN(o[c],r[c],l));return a.alpha=la(o.alpha,r.alpha,l),n.transform(a)}},zN=e=>typeof e=="number",LN=(e,t)=>n=>t(e(n)),Fp=(...e)=>e.reduce(LN);function Hp(e,t){return zN(e)?n=>la(e,t,n):rt.test(e)?Lp(e,t):jp(e,t)}const Dp=(e,t)=>{const n=[...e],s=n.length,o=e.map((r,a)=>Hp(r,t[a]));return r=>{for(let a=0;a<s;a++)n[a]=o[a](r);return n}},FN=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(s[o]=Hp(e[o],t[o]));return o=>{for(const r in s)n[r]=s[r](o);return n}};function cc(e){const t=oo.parse(e),n=t.length;let s=0,o=0,r=0;for(let a=0;a<n;a++)s||typeof t[a]=="number"?s++:t[a].hue!==void 0?r++:o++;return{parsed:t,numNumbers:s,numRGB:o,numHSL:r}}const jp=(e,t)=>{const n=oo.createTransformer(t),s=cc(e),o=cc(t);return s.numHSL===o.numHSL&&s.numRGB===o.numRGB&&s.numNumbers>=o.numNumbers?Fp(Dp(s.parsed,o.parsed),n):a=>`${a>0?t:e}`},HN=(e,t)=>n=>la(e,t,n);function DN(e){if(typeof e=="number")return HN;if(typeof e=="string")return rt.test(e)?Lp:jp;if(Array.isArray(e))return Dp;if(typeof e=="object")return FN}function jN(e,t,n){const s=[],o=n||DN(e[0]),r=e.length-1;for(let a=0;a<r;a++){let l=o(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=Fp(c,l)}s.push(l)}return s}function KN([e,t],[n]){return s=>n($p(e,t,s))}function BN(e,t){const n=e.length,s=n-1;return o=>{let r=0,a=!1;if(o<=e[0]?a=!0:o>=e[s]&&(r=s-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>o||c===s);c++);r=c-1}const l=$p(e[r],e[r+1],o);return t[r](l)}}function Kp(e,t,{clamp:n=!0,ease:s,mixer:o}={}){const r=e.length;nc(r===t.length),nc(!s||!Array.isArray(s)||s.length===r-1),e[0]>e[r-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=jN(t,s,o),l=r===2?KN(e,a):BN(e,a);return n?c=>l(vr(e[0],e[r-1],c)):l}const oi=e=>t=>1-e(1-t),pa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,WN=e=>t=>Math.pow(t,e),Bp=e=>t=>t*t*((e+1)*t-e),UN=e=>{const t=Bp(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Wp=1.525,qN=4/11,YN=8/11,ZN=9/10,Up=e=>e,fa=WN(2),GN=oi(fa),qp=pa(fa),Yp=e=>1-Math.sin(Math.acos(e)),Zp=oi(Yp),JN=pa(Zp),da=Bp(Wp),XN=oi(da),QN=pa(da),eI=UN(Wp),tI=4356/361,nI=35442/1805,sI=16061/1805,Mo=e=>{if(e===1||e===0)return e;const t=e*e;return e<qN?7.5625*t:e<YN?9.075*t-9.9*e+3.4:e<ZN?tI*t-nI*e+sI:10.8*e*e-20.52*e+10.72},oI=oi(Mo),iI=e=>e<.5?.5*(1-Mo(1-e*2)):.5*Mo(e*2-1)+.5;function rI(e,t){return e.map(()=>t||qp).splice(0,e.length-1)}function aI(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function lI(e,t){return e.map(n=>n*t)}function wo({from:e=0,to:t=1,ease:n,offset:s,duration:o=300}){const r={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=lI(s&&s.length===a.length?s:aI(a),o);function c(){return Kp(l,a,{ease:Array.isArray(n)?n:rI(a,n)})}let p=c();return{next:f=>(r.value=p(f),r.done=f>=o,r),flipTarget:()=>{a.reverse(),p=c()}}}function cI({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:o=.5,modifyTarget:r}){const a={done:!1,value:t};let l=n*e;const c=t+l,p=r===void 0?c:r(c);return p!==c&&(l=p-t),{next:f=>{const m=-l*Math.exp(-f/s);return a.done=!(m>o||m<-o),a.value=a.done?p:p+m,a},flipTarget:()=>{}}}const uc={keyframes:wo,spring:aa,decay:cI};function uI(e){if(Array.isArray(e.to))return wo;if(uc[e.type])return uc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?wo:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?aa:wo}function Gp(e,t,n=0){return e-t-n}function pI(e,t,n=0,s=!0){return s?Gp(t+-e,t,n):t-(e-t)+n}function fI(e,t,n,s){return s?e>=t+n:e<=-n}const dI=e=>{const t=({delta:n})=>e(n);return{start:()=>_r.update(t,!0),stop:()=>dN.update(t)}};function Jp(e){var t,n,{from:s,autoplay:o=!0,driver:r=dI,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:p=0,onPlay:f,onStop:m,onComplete:d,onRepeat:h,onUpdate:g}=e,b=Sp(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=b,N,x=0,R=b.duration,I,F=!1,z=!0,B;const te=uI(b);!((n=(t=te).needsInterpolation)===null||n===void 0)&&n.call(t,s,y)&&(B=Kp([0,100],[s,y],{clamp:!1}),s=0,y=100);const le=te(Object.assign(Object.assign({},b),{from:s,to:y}));function ge(){x++,c==="reverse"?(z=x%2===0,a=pI(a,R,p,z)):(a=Gp(a,R,p),c==="mirror"&&le.flipTarget()),F=!1,h&&h()}function ye(){N.stop(),d&&d()}function Me(Ye){if(z||(Ye=-Ye),a+=Ye,!F){const Se=le.next(Math.max(0,a));I=Se.value,B&&(I=B(I)),F=z?Se.done:a<=0}g==null||g(I),F&&(x===0&&(R!=null||(R=a)),x<l?fI(a,R,p,z)&&ge():ye())}function He(){f==null||f(),N=r(Me),N.start()}return o&&He(),{stop:()=>{m==null||m(),N.stop()}}}function Xp(e,t){return t?e*(1e3/t):0}function mI({from:e=0,velocity:t=0,min:n,max:s,power:o=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:p,driver:f,onUpdate:m,onComplete:d,onStop:h}){let g;function b(R){return n!==void 0&&R<n||s!==void 0&&R>s}function y(R){return n===void 0?s:s===void 0||Math.abs(n-R)<Math.abs(s-R)?n:s}function N(R){g==null||g.stop(),g=Jp(Object.assign(Object.assign({},R),{driver:f,onUpdate:I=>{var F;m==null||m(I),(F=R.onUpdate)===null||F===void 0||F.call(R,I)},onComplete:d,onStop:h}))}function x(R){N(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},R))}if(b(e))x({from:e,velocity:t,to:y(e)});else{let R=o*t+e;typeof p<"u"&&(R=p(R));const I=y(R),F=I===n?-1:1;let z,B;const te=le=>{z=B,B=le,t=Xp(le-z,Ep().delta),(F===1&&le>I||F===-1&&le<I)&&x({from:le,to:I,velocity:t})};N({type:"decay",from:e,velocity:t,timeConstant:r,power:o,restDelta:c,modifyTarget:p,onUpdate:b(R)?te:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Qp=(e,t)=>1-3*t+3*e,ef=(e,t)=>3*t-6*e,tf=e=>3*e,zo=(e,t,n)=>((Qp(t,n)*e+ef(t,n))*e+tf(t))*e,nf=(e,t,n)=>3*Qp(t,n)*e*e+2*ef(t,n)*e+tf(t),hI=1e-7,gI=10;function _I(e,t,n,s,o){let r,a,l=0;do a=t+(n-t)/2,r=zo(a,s,o)-e,r>0?n=a:t=a;while(Math.abs(r)>hI&&++l<gI);return a}const vI=8,yI=.001;function bI(e,t,n,s){for(let o=0;o<vI;++o){const r=nf(t,n,s);if(r===0)return t;t-=(zo(t,n,s)-e)/r}return t}const Ro=11,ho=1/(Ro-1);function PI(e,t,n,s){if(e===t&&n===s)return Up;const o=new Float32Array(Ro);for(let a=0;a<Ro;++a)o[a]=zo(a*ho,e,n);function r(a){let l=0,c=1;const p=Ro-1;for(;c!==p&&o[c]<=a;++c)l+=ho;--c;const f=(a-o[c])/(o[c+1]-o[c]),m=l+f*ho,d=nf(m,e,n);return d>=yI?bI(a,m,e,n):d===0?m:_I(a,l,l+ho,e,n)}return a=>a===0||a===1?a:zo(r(a),t,s)}const Ni={};class kI{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(t,n,s)}clear(){this.subscriptions.clear()}}const pc=e=>!isNaN(parseFloat(e));class wI{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new kI,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:o}=Ep();this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o),_r.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>_r.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=pc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=pc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Xp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function RI(e){return new wI(e)}const{isArray:xI}=Array;function NI(){const e=W({}),t=s=>{const o=r=>{!e.value[r]||(e.value[r].stop(),e.value[r].destroy(),ph(e.value,r))};s?xI(s)?s.forEach(o):o(s):Object.keys(e.value).forEach(o)},n=(s,o,r)=>{if(e.value[s])return e.value[s];const a=RI(o);return a.onChange(l=>{at(r,s,l)}),at(e.value,s,a),a};return ra(t),{motionValues:e,get:n,stop:t}}const II=e=>Array.isArray(e),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ii=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),EI=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ei=()=>({type:"keyframes",ease:"linear",duration:300}),SI=e=>({type:"keyframes",duration:800,values:e}),fc={default:EI,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Ii,scaleY:Ii,scale:Ii,backgroundColor:Ei,color:Ei,opacity:Ei},sf=(e,t)=>{let n;return II(t)?n=SI:n=fc[e]||fc.default,{to:t,...n(t)}},dc={...so,transform:Math.round},of={color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,size:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:mo,scaleX:mo,scaleY:mo,scaleZ:mo,skew:_n,skewX:_n,skewY:_n,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:Ms,originX:rc,originY:rc,originZ:ue,zIndex:dc,filter:kr,WebkitFilter:kr,fillOpacity:Ms,strokeOpacity:Ms,numOctaves:dc},ma=e=>of[e],rf=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function $I(e,t){let n=ma(e);return n!==kr&&(n=oo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const OI={linear:Up,easeIn:fa,easeInOut:qp,easeOut:GN,circIn:Yp,circInOut:JN,circOut:Zp,backIn:da,backInOut:QN,backOut:XN,anticipate:eI,bounceIn:oI,bounceInOut:iI,bounceOut:Mo},mc=e=>{if(Array.isArray(e)){const[t,n,s,o]=e;return PI(t,n,s,o)}else if(typeof e=="string")return OI[e];return e},VI=e=>Array.isArray(e)&&typeof e[0]!="number",hc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&oo.test(t)&&!t.startsWith("url("));function AI(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function TI({ease:e,times:t,delay:n,...s}){const o={...s};return t&&(o.offset=t),e&&(o.ease=VI(e)?e.map(mc):mc(e)),n&&(o.elapsed=-n),o}function CI(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),AI(t),MI(e)||(e={...e,...sf(n,t.to)}),{...t,...TI(e)}}function MI({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:o,...r}){return!!Object.keys(r).length}function zI(e,t){return e[t]||e.default||e}function LI(e,t,n,s,o){const r=zI(s,e);let a=r.from===null||r.from===void 0?t.get():r.from;const l=hc(e,n);a==="none"&&l&&typeof n=="string"&&(a=$I(e,n));const c=hc(e,a);function p(m){const d={from:a,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return r.type==="inertia"||r.type==="decay"?mI({...d,...r}):Jp({...CI(r,d,e),onUpdate:h=>{d.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),o&&o(),m&&m()}})}function f(m){return t.set(n),s.onComplete&&s.onComplete(),o&&o(),m&&m(),{stop:()=>{}}}return!c||!l||r.type===!1?f:p}function FI(){const{motionValues:e,stop:t,get:n}=NI();return{motionValues:e,stop:t,push:(o,r,a,l={},c)=>{const p=a[o],f=n(o,p,a);if(l&&l.immediate){f.set(r);return}const m=LI(o,f,r,l,c);f.start(m)}}}function HI(e,t={},{motionValues:n,push:s,stop:o}=FI()){const r=P(t),a=W(!1),l=fe(n,d=>{a.value=Object.values(d).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!r||!r[d])throw new Error(`The variant ${d} does not exist.`);return r[d]},p=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([h,g])=>{if(h!=="transition")return new Promise(b=>{s(h,g,e,d.transition||sf(h,d[h]),b)})}).filter(Boolean)));return{isAnimating:a,apply:p,set:d=>{const h=fr(d)?d:c(d);Object.entries(h).forEach(([g,b])=>{g!=="transition"&&s(g,b,e,{immediate:!0})})},stopTransitions:()=>{l(),o()},leave:async d=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){d();return}await p(h),d()}}}const ha=typeof window<"u",DI=()=>ha&&window.onpointerdown===null,jI=()=>ha&&window.ontouchstart===null,KI=()=>ha&&window.onmousedown===null;function BI({target:e,state:t,variants:n,apply:s}){const o=P(n),r=[],a=(...g)=>{const b=lN.apply(null,g);return r.push(b),b},l=W(!1),c=W(!1),p=W(!1),f=E(()=>{let g=[];return o&&(o.hovered&&(g=[...g,...Object.keys(o.hovered)]),o.tapped&&(g=[...g,...Object.keys(o.tapped)]),o.focused&&(g=[...g,...Object.keys(o.focused)])),g}),m=E(()=>{const g={};Object.assign(g,t.value),l.value&&o.hovered&&Object.assign(g,o.hovered),c.value&&o.tapped&&Object.assign(g,o.tapped),p.value&&o.focused&&Object.assign(g,o.focused);for(const b in g)f.value.includes(b)||delete g[b];return g});o.hovered&&(a(e,"mouseenter",()=>{l.value=!0}),a(e,"mouseleave",()=>{l.value=!1,c.value=!1}),a(e,"mouseout",()=>{l.value=!1,c.value=!1})),o.tapped&&(KI()&&(a(e,"mousedown",()=>{c.value=!0}),a(e,"mouseup",()=>{c.value=!1})),DI()&&(a(e,"pointerdown",()=>{c.value=!0}),a(e,"pointerup",()=>{c.value=!1})),jI()&&(a(e,"touchstart",()=>{c.value=!0}),a(e,"touchend",()=>{c.value=!1}))),o.focused&&(a(e,"focus",()=>{p.value=!0}),a(e,"blur",()=>{p.value=!1}));const d=fe(m,s);return{stop:()=>{r.forEach(g=>g()),d()}}}function WI({set:e,target:t,variants:n,variant:s}){const o=P(n);return{stop:fe(()=>t,()=>{!o||(o.initial&&e("initial"),o.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function UI({state:e,apply:t}){return{stop:fe(e,s=>{s&&t(s)},{immediate:!0})}}function qI({target:e,variants:t,variant:n}){const s=P(t);let o=Vn;if(s&&(s.visible||s.visibleOnce)){const{stop:r}=cN(e,([{isIntersecting:a}])=>{s.visible?a?n.value="visible":n.value="initial":s.visibleOnce&&(a?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});o=r}return{stop:o}}function YI(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=W([]);if(t.lifeCycleHooks){const{stop:o}=WI(e);n.value.push(o)}if(t.syncVariants){const{stop:o}=UI(e);n.value.push(o)}if(t.visibilityHooks){const{stop:o}=qI(e);n.value.push(o)}if(t.eventListeners){const{stop:o}=BI(e);n.value.push(o)}const s=()=>n.value.forEach(o=>o());return ra(s),{stop:s}}function af(e={}){const t=ze({...e}),n=W({});return fe(t,()=>{const s={};for(const[o,r]of Object.entries(t)){const a=ma(o),l=rf(r,a);s[o]=l}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}const ZI=["","X","Y","Z"],GI=["perspective","translate","scale","rotate","skew"],lf=["transformPerspective","x","y","z"];GI.forEach(e=>{ZI.forEach(t=>{const n=e+t;lf.push(n)})});const JI=new Set(lf);function ga(e){return JI.has(e)}const XI=new Set(["originX","originY","originZ"]);function cf(e){return XI.has(e)}function QI(e){const t={},n={};return Object.entries(e).forEach(([s,o])=>{ga(s)||cf(s)?t[s]=o:n[s]=o}),{transform:t,style:n}}function eE(e,t){let n,s;const{state:o,style:r}=af(),a=fe(()=>Tn(e),p=>{if(!!p){s=p;for(const f of Object.keys(of))p.style[f]===null||p.style[f]===""||ga(f)||cf(f)||at(o,f,p.style[f]);n&&Object.entries(n).forEach(([f,m])=>at(p.style,f,m)),t&&t(o)}},{immediate:!0}),l=fe(r,p=>{if(!s){n=p;return}for(const f in p)at(s.style,f,p[f])},{immediate:!0});return{style:o,stop:()=>{s=void 0,n=void 0,a(),l()}}}const tE={x:"translateX",y:"translateY",z:"translateZ"};function uf(e={},t=!0){const n=ze({...e}),s=W("");return fe(n,o=>{let r="",a=!1;t&&(o.x||o.y||o.z)&&(r+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(ue.transform).join(",")}) `,a=!0);for(const[l,c]of Object.entries(o)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const p=ma(l),f=rf(c,p);r+=`${tE[l]||l}(${f}) `}t&&!a&&(r+="translateZ(0px) "),s.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function nE(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,o)=>{if(!o)return s;const[r,a]=o.split("("),c=a.split(",").map(f=>n(f.endsWith(")")?f.replace(")",""):f.trim())),p=c.length===1?c[0]:c;return{...s,[r]:p}},{})}function sE(e,t){Object.entries(nE(t)).forEach(([n,s])=>{s=parseFloat(s);const o=["x","y","z"];if(n==="translate3d"){if(s===0){o.forEach(r=>{at(e,r,0)});return}s.forEach((r,a)=>{at(e,o[a],r)});return}if(n==="translateX"){at(e,"x",s);return}if(n==="translateY"){at(e,"y",s);return}if(n==="translateZ"){at(e,"z",s);return}at(e,n,s)})}function oE(e,t){let n,s;const{state:o,transform:r}=uf(),a=fe(()=>Tn(e),p=>{!p||(s=p,p.style.transform&&sE(o,p.style.transform),n&&(p.style.transform=n),t&&t(o))},{immediate:!0}),l=fe(r,p=>{if(!s){n=p;return}s.style.transform=p},{immediate:!0});return{transform:o,stop:()=>{n=void 0,s=void 0,a(),l()}}}function iE(e,t){const n=ze({}),s=m=>{Object.entries(m).forEach(([d,h])=>{at(n,d,h)})},{style:o,stop:r}=eE(e,s),{transform:a,stop:l}=oE(e,s),c=fe(n,m=>{Object.entries(m).forEach(([d,h])=>{const g=ga(d)?a:o;g[d]&&g[d]===h||at(g,d,h)})},{immediate:!0,deep:!0}),p=fe(()=>Tn(e),m=>{!m||t&&s(t)},{immediate:!0});return{motionProperties:n,style:o,transform:a,stop:()=>{r(),l(),c(),p()}}}function rE(e={}){const t=P(e),n=W();return{state:E(()=>{if(!!n.value)return t[n.value]}),variant:n}}function aE(e,t={},n){const{motionProperties:s,stop:o}=iE(e),{variant:r,state:a}=rE(t),l=HI(s,t),c={target:e,variant:r,variants:t,state:a,motionProperties:s,...l,stop:(f=!1)=>{}},{stop:p}=YI(c,n);return c.stop=(f=!1)=>{const m=()=>{c.stopTransitions(),o(),p()};if(!f&&t.value&&t.value.leave){const d=fe(c.isAnimating,h=>{h||(d(),m())})}else m()},ra(()=>c.stop()),aN(()=>Tn(e),f=>{!f||f!=null&&f.motionInstance&&(c.stop(),Object.assign(c,f.motionInstance))}),c}const lE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],cE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&fr(n.variants)&&(t.value={...t.value,...n.variants}),lE.forEach(s=>{if(s==="delay"){if(n&&n[s]&&iN(n[s])){const o=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:o}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:o}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:o}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&fr(n[s])&&(t.value[s]=n[s])}))},Si=e=>{const t=(s,o,r)=>{const a=o.value&&typeof o.value=="string"?o.value:r.key;a&&Ni[a]&&Ni[a].stop();const l=W(e||{});typeof o.value=="object"&&(l.value=o.value),cE(r,l);const c=aE(s,l);s.motionInstance=c,a&&at(Ni,a,c)},n=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(s,o){const{initial:r}=s.value||o&&o.props||{},a=sN((e==null?void 0:e.initial)||{},r||{});if(!a||Object.keys(a).length===0)return;const{transform:l,style:c}=QI(a),{transform:p}=uf(l),{style:f}=af(c);return p.value&&(f.value.transform=p.value),{style:f.value}}}},uE={initial:{opacity:0},enter:{opacity:1}},pE={initial:{opacity:0},visible:{opacity:1}},fE={initial:{opacity:0},visibleOnce:{opacity:1}},dE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},mE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},hE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},gE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},_E={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},vE={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},yE={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},bE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},PE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},wE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},RE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},xE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},NE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},IE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},EE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},SE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},$E={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},OE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},VE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},AE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},TE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},CE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},ME={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},zE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},LE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},FE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},gc={__proto__:null,fade:uE,fadeVisible:pE,fadeVisibleOnce:fE,pop:dE,popVisible:mE,popVisibleOnce:hE,rollBottom:xE,rollLeft:gE,rollRight:yE,rollTop:kE,rollVisibleBottom:NE,rollVisibleLeft:_E,rollVisibleRight:bE,rollVisibleTop:wE,rollVisibleOnceBottom:IE,rollVisibleOnceLeft:vE,rollVisibleOnceRight:PE,rollVisibleOnceTop:RE,slideBottom:zE,slideLeft:EE,slideRight:OE,slideTop:TE,slideVisibleBottom:LE,slideVisibleLeft:SE,slideVisibleRight:VE,slideVisibleTop:CE,slideVisibleOnceBottom:FE,slideVisibleOnceLeft:$E,slideVisibleOnceRight:AE,slideVisibleOnceTop:ME};function HE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(s,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const DE={install(e,t){if(e.directive("motion",Si()),!t||t&&!t.excludePresets)for(const n in gc){const s=gc[n];e.directive(`motion-${HE(n)}`,Si(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Si(s))}}};var _c;const Ls=typeof window<"u",jE=Object.prototype.toString,KE=e=>jE.call(e)==="[object Object]";Ls&&((_c=window==null?void 0:window.navigator)==null?void 0:_c.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function BE(e){return $r()?(Or(e),!0):!1}function WE(e){var t;const n=P(e);return(t=n==null?void 0:n.$el)!=null?t:n}const UE=Ls?window:void 0,wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rr="__vueuse_ssr_handlers__";wr[Rr]=wr[Rr]||{};wr[Rr];function qE(e,t={}){const{immediate:n=!0,window:s=UE}=t,o=W(!1);let r=null;function a(){!o.value||!s||(e(),r=s.requestAnimationFrame(a))}function l(){!o.value&&s&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return n&&l(),BE(c),{isActive:o,pause:c,resume:l}}var vc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(vc||(vc={}));const _a="vue-starport-injection",pf="vue-starport-options",YE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},ff={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var ZE=Object.defineProperty,Lo=Object.getOwnPropertySymbols,df=Object.prototype.hasOwnProperty,mf=Object.prototype.propertyIsEnumerable,yc=(e,t,n)=>t in e?ZE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,GE=(e,t)=>{for(var n in t||(t={}))df.call(t,n)&&yc(e,n,t[n]);if(Lo)for(var n of Lo(t))mf.call(t,n)&&yc(e,n,t[n]);return e},bc=(e,t)=>{var n={};for(var s in e)df.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Lo)for(var s of Lo(e))t.indexOf(s)<0&&mf.call(e,s)&&(n[s]=e[s]);return n};const JE=Ee({name:"StarportProxy",props:GE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},ff),setup(e,t){const n=C(_a),s=E(()=>n.getInstance(e.port,e.component)),o=W(),r=s.value.generateId(),a=W(!1);return s.value.isVisible||(s.value.land(),a.value=!0),cs(async()=>{s.value.el||(s.value.el=o.value,await qe(),a.value=!0,s.value.rect.update())}),Go(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,a.value=!1,!s.value.options.keepAlive&&(await qe(),await qe(),!s.value.el&&n.dispose(s.value.port))}),fe(()=>e,async()=>{s.value.props&&await qe();const l=e,{props:c}=l,p=bc(l,["props"]);s.value.props=c||{},s.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:p}=l,f=bc(l,["initialProps","mountedProps"]),m=ce(f,(a.value?p:c)||{});return kt("div",ce(m,{id:r,ref:o,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?kt(t.slots.default):void 0)}}});var XE=Object.defineProperty,QE=Object.defineProperties,eS=Object.getOwnPropertyDescriptors,Pc=Object.getOwnPropertySymbols,tS=Object.prototype.hasOwnProperty,nS=Object.prototype.propertyIsEnumerable,kc=(e,t,n)=>t in e?XE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sS=(e,t)=>{for(var n in t||(t={}))tS.call(t,n)&&kc(e,n,t[n]);if(Pc)for(var n of Pc(t))nS.call(t,n)&&kc(e,n,t[n]);return e},oS=(e,t)=>QE(e,eS(t));const iS=Ee({name:"Starport",inheritAttrs:!0,props:ff,setup(e,t){const n=W(!1);return cs(()=>{n.value=!0}),()=>{var a,l;const s=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const o=s[0];let r=o.type;return(!KE(r)||ns(r))&&(r={render(){return s}}),kt(JE,oS(sS({},e),{key:e.port,component:Bo(r),props:o.props}))}}});function rS(e){const t=ze({height:0,width:0,left:0,top:0,update:s,listen:r,pause:a,margin:"0px",padding:"0px"}),n=Ls?document.documentElement||document.body:void 0;function s(){if(!Ls)return;const l=WE(e);if(!l)return;const{height:c,width:p,left:f,top:m}=l.getBoundingClientRect(),d=window.getComputedStyle(l),h=d.margin,g=d.padding;Object.assign(t,{height:c,width:p,left:f,top:n.scrollTop+m,margin:h,padding:g})}const o=qE(s,{immediate:!1});function r(){!Ls||(s(),o.resume())}function a(){o.pause()}return t}let aS=(e,t=21)=>(n=t)=>{let s="",o=n;for(;o--;)s+=e[Math.random()*e.length|0];return s};const wc=aS("abcdefghijklmnopqrstuvwxyz",5);function Rc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function lS(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var cS=Object.defineProperty,xc=Object.getOwnPropertySymbols,uS=Object.prototype.hasOwnProperty,pS=Object.prototype.propertyIsEnumerable,Nc=(e,t,n)=>t in e?cS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$i=(e,t)=>{for(var n in t||(t={}))uS.call(t,n)&&Nc(e,n,t[n]);if(xc)for(var n of xc(t))pS.call(t,n)&&Nc(e,n,t[n]);return e};function fS(e,t,n={}){const s=lS(t),o=Rc(s)||wc(),r=W(),a=W(null),l=W(!1),c=W(!1),p=If(!0),f=W({}),m=E(()=>$i($i($i({},YE),n),f.value)),d=W(0);let h;p.run(()=>{h=rS(r),fe(r,async N=>{N&&(c.value=!0),await qe(),r.value||(c.value=!1)})});const g=Rc(e);function b(){return`starport-${o}-${g}-${wc()}`}const y=b();return ze({el:r,id:y,port:e,props:a,rect:h,scope:p,isLanded:l,isVisible:c,options:m,liftOffTime:d,component:t,componentName:s,componentId:o,generateId:b,setLocalOptions(N={}){f.value=JSON.parse(JSON.stringify(N))},elRef(){return r},liftOff(){!l.value||(l.value=!1,d.value=Date.now(),h.listen())},land(){l.value||(l.value=!0,h.pause())}})}function dS(e){const t=ze(new Map);function n(o,r){let a=t.get(o);return a||(a=fS(o,r,e),t.set(o,a)),a.component=r,a}function s(o){var r;(r=t.get(o))==null||r.scope.stop(),t.delete(o)}return{portMap:t,dispose:s,getInstance:n}}var mS=Object.defineProperty,hS=Object.defineProperties,gS=Object.getOwnPropertyDescriptors,Ic=Object.getOwnPropertySymbols,_S=Object.prototype.hasOwnProperty,vS=Object.prototype.propertyIsEnumerable,Ec=(e,t,n)=>t in e?mS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yS=(e,t)=>{for(var n in t||(t={}))_S.call(t,n)&&Ec(e,n,t[n]);if(Ic)for(var n of Ic(t))vS.call(t,n)&&Ec(e,n,t[n]);return e},bS=(e,t)=>hS(e,gS(t));const PS=Ee({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=C(_a);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=E(()=>t.getInstance(e.port,e.component)),s=E(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),o=E(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?bS(yS({},p),{zIndex:-1,display:"none"}):(n.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),p)}),r={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return kt("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},kt(Xd,{to:a?`#${s.value}`:"body",disabled:!a},kt(n.value.component,ce(r,n.value.props))))}}}),kS=Ee({name:"StarportCarrier",setup(e,{slots:t}){const n=dS(C(pf,{}));return Mn().appContext.app.provide(_a,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([r,{component:a}])=>kt(PS,{key:r,port:r,component:a}))]}}});function wS(e={}){return{install(t){t.provide(pf,e),t.component("Starport",iS),t.component("StarportCarrier",kS)}}}function RS(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(DE),e.app.use(wS({keepAlive:!0}))}function ct(e,t,n){var s,o;return(o=((s=e.instance)==null?void 0:s.$).provides[t])!=null?o:n}function xS(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var f,m,d,h;if(Ts.value||((f=ct(n,$s))==null?void 0:f.value))return;const s=ct(n,kn),o=ct(n,Ss),r=ct(n,Zi),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((m=s==null?void 0:s.value)==null?void 0:m.length)||0,p=l?Jm:fi;if(s&&!((d=s==null?void 0:s.value)!=null&&d.includes(t))&&s.value.push(t),n.value===null&&(n.value=s==null?void 0:s.value.length),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[t]);else if(!((h=r==null?void 0:r.value.get(n.value))!=null&&h.includes(t))){const g=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[t].concat(g))}t==null||t.classList.toggle(bn,!0),o&&fe(o,()=>{var N;const g=(N=o==null?void 0:o.value)!=null?N:0,b=n.value!=null?g>=n.value:g>c;t.classList.contains(di)||t.classList.toggle(p,!b),a!==!1&&a!==void 0&&t.classList.toggle(p,b),t.classList.toggle(gs,!1);const y=r==null?void 0:r.value.get(g);y==null||y.forEach((x,R)=>{x.classList.toggle(po,!1),R===y.length-1?x.classList.toggle(gs,!0):x.classList.toggle(po,!0)}),t.classList.contains(gs)||t.classList.toggle(po,b)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(bn,!1);const s=ct(n,kn);s!=null&&s.value&&Gi(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c;if(Ts.value||((l=ct(n,$s))==null?void 0:l.value))return;const s=ct(n,kn),o=ct(n,Ss),r=ct(n,Zi),a=s==null?void 0:s.value.length;n.value===void 0&&(n.value=s==null?void 0:s.value.length),r!=null&&r.value.has(n.value)?(c=r==null?void 0:r.value.get(n.value))==null||c.push(t):r==null||r.value.set(n.value,[t]),t==null||t.classList.toggle(bn,!0),o&&fe(o,()=>{var f,m,d;const p=((f=o.value)!=null?f:0)>=((d=(m=n.value)!=null?m:a)!=null?d:0);t.classList.contains(di)||t.classList.toggle(fi,!p),t.classList.toggle(gs,!1),t.classList.contains(gs)||t.classList.toggle(po,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(bn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(Ts.value||((a=ct(n,$s))==null?void 0:a.value))return;const s=ct(n,kn),o=ct(n,Ss),r=((l=s==null?void 0:s.value)==null?void 0:l.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(bn,!0),o&&fe(o,()=>{var m;const p=(m=o==null?void 0:o.value)!=null?m:0,f=n.value!=null?p>=n.value:p>r;t.classList.toggle(fi,f),t.classList.toggle(di,f)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(bn,!1);const s=ct(n,kn);s!=null&&s.value&&Gi(s.value,t)}})}}}function NS(e,t){const n=mp(e),s=hp(t,n.currentRoute,n.currentPage);return{nav:{...n,...s,downloadPDF:ur,next:un,nextSlide:Zs,openInEditor:Qx,prev:pn,prevSlide:Gs},configs:we,themeConfigs:E(()=>we.themeConfig)}}function IS(){return{install(e){const t=NS(Jt,Ot);e.provide(K,ze(t))}}}const fs=Am(tN);fs.use(gt);fs.use(Um());fs.use(xS());fs.use(IS());RS({app:fs,router:gt});fs.mount("#app");export{Ps as $,he as A,xe as B,et as C,K1 as D,ES as E,Ne as F,SS as G,Ot as H,Co as I,Yx as J,Pi as K,mi as L,Us as M,yi as N,Vu as O,Xv as P,Xr as Q,Bv as R,Qr as S,Ke as T,Pp as U,X1 as V,pp as W,Ct as X,$S as Y,Zt as Z,lp as _,i as a,fo as a0,eo as a1,Nn as a2,Dt as a3,rr as a4,b1 as a5,P1 as a6,k1 as a7,R1 as a8,Kr as a9,Iu as aa,TS as ab,nt as ac,V0 as ad,$u as ae,x1 as af,Go as ag,H1 as ah,E as b,q as c,Ee as d,K as e,ft as f,D as g,P as h,C as i,A1 as j,Xx as k,we as l,Ym as m,Le as n,k as o,cs as p,ze as q,W as r,OS as s,Pt as t,VS as u,AS as v,fe as w,T as x,Je as y,V as z};
