(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}})();function Ht(e,s){const o=Object.create(null),a=e.split(",");for(let i=0;i<a.length;i++)o[a[i]]=!0;return s?i=>!!o[i.toLowerCase()]:i=>!!o[i]}const je=Object.freeze({}),Es=Object.freeze([]),xn=()=>{},_p=()=>!1,Vf=/^on[^a-z]/,jo=e=>Vf.test(e),$a=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Jl=(e,s)=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)},Uf=Object.prototype.hasOwnProperty,Ce=(e,s)=>Uf.call(e,s),ue=Array.isArray,rs=e=>Ko(e)==="[object Map]",gp=e=>Ko(e)==="[object Set]",Gf=e=>Ko(e)==="[object RegExp]",fe=e=>typeof e=="function",We=e=>typeof e=="string",Xl=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",er=e=>Oe(e)&&fe(e.then)&&fe(e.catch),vp=Object.prototype.toString,Ko=e=>vp.call(e),nr=e=>Ko(e).slice(8,-1),bp=e=>Ko(e)==="[object Object]",tr=e=>We(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ha=Ht(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yf=Ht("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Za=e=>{const s=Object.create(null);return o=>s[o]||(s[o]=e(o))},Zf=/-(\w)/g,st=Za(e=>e.replace(Zf,(s,o)=>o?o.toUpperCase():"")),Qf=/\B([A-Z])/g,gt=Za(e=>e.replace(Qf,"-$1").toLowerCase()),_s=Za(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zt=Za(e=>e?`on${_s(e)}`:""),yo=(e,s)=>!Object.is(e,s),Jt=(e,s)=>{for(let o=0;o<e.length;o++)e[o](s)},Ia=(e,s,o)=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value:o})},Jf=e=>{const s=parseFloat(e);return isNaN(s)?e:s},Xf=e=>{const s=We(e)?Number(e):NaN;return isNaN(s)?e:s};let Jr;const La=()=>Jr||(Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(e){if(ue(e)){const s={};for(let o=0;o<e.length;o++){const a=e[o],i=We(a)?s1(a):tn(a);if(i)for(const l in i)s[l]=i[l]}return s}else{if(We(e))return e;if(Oe(e))return e}}const e1=/;(?![^(]*\))/g,n1=/:([^]+)/,t1=/\/\*[^]*?\*\//g;function s1(e){const s={};return e.replace(t1,"").split(e1).forEach(o=>{if(o){const a=o.split(n1);a.length>1&&(s[a[0].trim()]=a[1].trim())}}),s}function qe(e){let s="";if(We(e))s=e;else if(ue(e))for(let o=0;o<e.length;o++){const a=qe(e[o]);a&&(s+=a+" ")}else if(Oe(e))for(const o in e)e[o]&&(s+=o+" ");return s.trim()}function j(e){if(!e)return null;let{class:s,style:o}=e;return s&&!We(s)&&(e.class=qe(s)),o&&(e.style=tn(o)),e}const o1="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",a1="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",kp=Ht(o1),i1=Ht(a1),l1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r1=Ht(l1);function xp(e){return!!e||e===""}const kn=e=>We(e)?e:e==null?"":ue(e)||Oe(e)&&(e.toString===vp||!fe(e.toString))?JSON.stringify(e,wp,2):String(e),wp=(e,s)=>s&&s.__v_isRef?wp(e,s.value):rs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((o,[a,i])=>(o[`${a} =>`]=i,o),{})}:gp(s)?{[`Set(${s.size})`]:[...s.values()]}:Oe(s)&&!ue(s)&&!bp(s)?String(s):s;function Ca(e,...s){console.warn(`[Vue warn] ${e}`,...s)}let Cn;class yp{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Cn,!s&&Cn&&(this.index=(Cn.scopes||(Cn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const o=Cn;try{return Cn=this,s()}finally{Cn=o}}else Ca("cannot run an inactive effect scope.")}on(){Cn=this}off(){Cn=this.parent}stop(s){if(this._active){let o,a;for(o=0,a=this.effects.length;o<a;o++)this.effects[o].stop();for(o=0,a=this.cleanups.length;o<a;o++)this.cleanups[o]();if(this.scopes)for(o=0,a=this.scopes.length;o<a;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!s){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function c1(e){return new yp(e)}function u1(e,s=Cn){s&&s.active&&s.effects.push(e)}function sr(){return Cn}function $p(e){Cn?Cn.cleanups.push(e):Ca("onScopeDispose() is called when there is no active effect scope to be associated with.")}const or=e=>{const s=new Set(e);return s.w=0,s.n=0,s},Ip=e=>(e.w&Nt)>0,Lp=e=>(e.n&Nt)>0,p1=({deps:e})=>{if(e.length)for(let s=0;s<e.length;s++)e[s].w|=Nt},d1=e=>{const{deps:s}=e;if(s.length){let o=0;for(let a=0;a<s.length;a++){const i=s[a];Ip(i)&&!Lp(i)?i.delete(e):s[o++]=i,i.w&=~Nt,i.n&=~Nt}s.length=o}},Sa=new WeakMap;let to=0,Nt=1;const Yi=30;let fn;const cs=Symbol("iterate"),Zi=Symbol("Map key iterate");class ar{constructor(s,o=null,a){this.fn=s,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,u1(this,a)}run(){if(!this.active)return this.fn();let s=fn,o=Et;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=fn,fn=this,Et=!0,Nt=1<<++to,to<=Yi?p1(this):Xr(this),this.fn()}finally{to<=Yi&&d1(this),Nt=1<<--to,fn=this.parent,Et=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(Xr(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(e){const{deps:s}=e;if(s.length){for(let o=0;o<s.length;o++)s[o].delete(e);s.length=0}}let Et=!0;const Cp=[];function vs(){Cp.push(Et),Et=!1}function bs(){const e=Cp.pop();Et=e===void 0?!0:e}function cn(e,s,o){if(Et&&fn){let a=Sa.get(e);a||Sa.set(e,a=new Map);let i=a.get(o);i||a.set(o,i=or()),Sp(i,{effect:fn,target:e,type:s,key:o})}}function Sp(e,s){let o=!1;to<=Yi?Lp(e)||(e.n|=Nt,o=!Ip(e)):o=!e.has(fn),o&&(e.add(fn),fn.deps.push(e),fn.onTrack&&fn.onTrack(Ke({effect:fn},s)))}function ot(e,s,o,a,i,l){const r=Sa.get(e);if(!r)return;let c=[];if(s==="clear")c=[...r.values()];else if(o==="length"&&ue(e)){const p=Number(a);r.forEach((d,m)=>{(m==="length"||m>=p)&&c.push(d)})}else switch(o!==void 0&&c.push(r.get(o)),s){case"add":ue(e)?tr(o)&&c.push(r.get("length")):(c.push(r.get(cs)),rs(e)&&c.push(r.get(Zi)));break;case"delete":ue(e)||(c.push(r.get(cs)),rs(e)&&c.push(r.get(Zi)));break;case"set":rs(e)&&c.push(r.get(cs));break}const u={target:e,type:s,key:o,newValue:a,oldValue:i,oldTarget:l};if(c.length===1)c[0]&&Qi(c[0],u);else{const p=[];for(const d of c)d&&p.push(...d);Qi(or(p),u)}}function Qi(e,s){const o=ue(e)?e:[...e];for(const a of o)a.computed&&ec(a,s);for(const a of o)a.computed||ec(a,s)}function ec(e,s){(e!==fn||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ke({effect:e},s)),e.scheduler?e.scheduler():e.run())}function m1(e,s){var o;return(o=Sa.get(e))==null?void 0:o.get(s)}const f1=Ht("__proto__,__v_isRef,__isVue"),Rp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xl)),h1=Qa(),_1=Qa(!1,!0),g1=Qa(!0),v1=Qa(!0,!0),nc=b1();function b1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(s=>{e[s]=function(...o){const a=ge(this);for(let l=0,r=this.length;l<r;l++)cn(a,"get",l+"");const i=a[s](...o);return i===-1||i===!1?a[s](...o.map(ge)):i}}),["push","pop","shift","unshift","splice"].forEach(s=>{e[s]=function(...o){vs();const a=ge(this)[s].apply(this,o);return bs(),a}}),e}function k1(e){const s=ge(this);return cn(s,"has",e),s.hasOwnProperty(e)}function Qa(e=!1,s=!1){return function(a,i,l){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return s;if(i==="__v_raw"&&l===(e?s?Dp:Pp:s?zp:Op).get(a))return a;const r=ue(a);if(!e){if(r&&Ce(nc,i))return Reflect.get(nc,i,l);if(i==="hasOwnProperty")return k1}const c=Reflect.get(a,i,l);return(Xl(i)?Rp.has(i):f1(i))||(e||cn(a,"get",i),s)?c:Te(c)?r&&tr(i)?c:c.value:Oe(c)?e?Vn(c):Be(c):c}}const x1=Ep(),w1=Ep(!0);function Ep(e=!1){return function(o,a,i,l){let r=o[a];if(Ft(r)&&Te(r)&&!Te(i))return!1;if(!e&&(!Ra(i)&&!Ft(i)&&(r=ge(r),i=ge(i)),!ue(o)&&Te(r)&&!Te(i)))return r.value=i,!0;const c=ue(o)&&tr(a)?Number(a)<o.length:Ce(o,a),u=Reflect.set(o,a,i,l);return o===ge(l)&&(c?yo(i,r)&&ot(o,"set",a,i,r):ot(o,"add",a,i)),u}}function y1(e,s){const o=Ce(e,s),a=e[s],i=Reflect.deleteProperty(e,s);return i&&o&&ot(e,"delete",s,void 0,a),i}function $1(e,s){const o=Reflect.has(e,s);return(!Xl(s)||!Rp.has(s))&&cn(e,"has",s),o}function I1(e){return cn(e,"iterate",ue(e)?"length":cs),Reflect.ownKeys(e)}const Ap={get:h1,set:x1,deleteProperty:y1,has:$1,ownKeys:I1},Tp={get:g1,set(e,s){return Ca(`Set operation on key "${String(s)}" failed: target is readonly.`,e),!0},deleteProperty(e,s){return Ca(`Delete operation on key "${String(s)}" failed: target is readonly.`,e),!0}},L1=Ke({},Ap,{get:_1,set:w1}),C1=Ke({},Tp,{get:v1}),ir=e=>e,Ja=e=>Reflect.getPrototypeOf(e);function Qo(e,s,o=!1,a=!1){e=e.__v_raw;const i=ge(e),l=ge(s);o||(s!==l&&cn(i,"get",s),cn(i,"get",l));const{has:r}=Ja(i),c=a?ir:o?lr:$o;if(r.call(i,s))return c(e.get(s));if(r.call(i,l))return c(e.get(l));e!==i&&e.get(s)}function Jo(e,s=!1){const o=this.__v_raw,a=ge(o),i=ge(e);return s||(e!==i&&cn(a,"has",e),cn(a,"has",i)),e===i?o.has(e):o.has(e)||o.has(i)}function Xo(e,s=!1){return e=e.__v_raw,!s&&cn(ge(e),"iterate",cs),Reflect.get(e,"size",e)}function tc(e){e=ge(e);const s=ge(this);return Ja(s).has.call(s,e)||(s.add(e),ot(s,"add",e,e)),this}function sc(e,s){s=ge(s);const o=ge(this),{has:a,get:i}=Ja(o);let l=a.call(o,e);l?Mp(o,a,e):(e=ge(e),l=a.call(o,e));const r=i.call(o,e);return o.set(e,s),l?yo(s,r)&&ot(o,"set",e,s,r):ot(o,"add",e,s),this}function oc(e){const s=ge(this),{has:o,get:a}=Ja(s);let i=o.call(s,e);i?Mp(s,o,e):(e=ge(e),i=o.call(s,e));const l=a?a.call(s,e):void 0,r=s.delete(e);return i&&ot(s,"delete",e,void 0,l),r}function ac(){const e=ge(this),s=e.size!==0,o=rs(e)?new Map(e):new Set(e),a=e.clear();return s&&ot(e,"clear",void 0,void 0,o),a}function ea(e,s){return function(a,i){const l=this,r=l.__v_raw,c=ge(r),u=s?ir:e?lr:$o;return!e&&cn(c,"iterate",cs),r.forEach((p,d)=>a.call(i,u(p),u(d),l))}}function na(e,s,o){return function(...a){const i=this.__v_raw,l=ge(i),r=rs(l),c=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=i[e](...a),d=o?ir:s?lr:$o;return!s&&cn(l,"iterate",u?Zi:cs),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function xt(e){return function(...s){{const o=s[0]?`on key "${s[0]}" `:"";console.warn(`${_s(e)} operation ${o}failed: target is readonly.`,ge(this))}return e==="delete"?!1:this}}function S1(){const e={get(l){return Qo(this,l)},get size(){return Xo(this)},has:Jo,add:tc,set:sc,delete:oc,clear:ac,forEach:ea(!1,!1)},s={get(l){return Qo(this,l,!1,!0)},get size(){return Xo(this)},has:Jo,add:tc,set:sc,delete:oc,clear:ac,forEach:ea(!1,!0)},o={get(l){return Qo(this,l,!0)},get size(){return Xo(this,!0)},has(l){return Jo.call(this,l,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:ea(!0,!1)},a={get(l){return Qo(this,l,!0,!0)},get size(){return Xo(this,!0)},has(l){return Jo.call(this,l,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=na(l,!1,!1),o[l]=na(l,!0,!1),s[l]=na(l,!1,!0),a[l]=na(l,!0,!0)}),[e,o,s,a]}const[R1,E1,A1,T1]=S1();function Xa(e,s){const o=s?e?T1:A1:e?E1:R1;return(a,i,l)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?a:Reflect.get(Ce(o,i)&&i in a?o:a,i,l)}const M1={get:Xa(!1,!1)},O1={get:Xa(!1,!0)},z1={get:Xa(!0,!1)},P1={get:Xa(!0,!0)};function Mp(e,s,o){const a=ge(o);if(a!==o&&s.call(e,a)){const i=nr(e);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Op=new WeakMap,zp=new WeakMap,Pp=new WeakMap,Dp=new WeakMap;function D1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function N1(e){return e.__v_skip||!Object.isExtensible(e)?0:D1(nr(e))}function Be(e){return Ft(e)?e:ei(e,!1,Ap,M1,Op)}function F1(e){return ei(e,!1,L1,O1,zp)}function Vn(e){return ei(e,!0,Tp,z1,Pp)}function so(e){return ei(e,!0,C1,P1,Dp)}function ei(e,s,o,a,i){if(!Oe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(s&&e.__v_isReactive))return e;const l=i.get(e);if(l)return l;const r=N1(e);if(r===0)return e;const c=new Proxy(e,r===2?a:o);return i.set(e,c),c}function us(e){return Ft(e)?us(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Ra(e){return!!(e&&e.__v_isShallow)}function Ea(e){return us(e)||Ft(e)}function ge(e){const s=e&&e.__v_raw;return s?ge(s):e}function ni(e){return Ia(e,"__v_skip",!0),e}const $o=e=>Oe(e)?Be(e):e,lr=e=>Oe(e)?Vn(e):e;function rr(e){Et&&fn&&(e=ge(e),Sp(e.dep||(e.dep=or()),{target:e,type:"get",key:"value"}))}function cr(e,s){e=ge(e);const o=e.dep;o&&Qi(o,{target:e,type:"set",key:"value",newValue:s})}function Te(e){return!!(e&&e.__v_isRef===!0)}function J(e){return Np(e,!1)}function at(e){return Np(e,!0)}function Np(e,s){return Te(e)?e:new j1(e,s)}class j1{constructor(s,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?s:ge(s),this._value=o?s:$o(s)}get value(){return rr(this),this._value}set value(s){const o=this.__v_isShallow||Ra(s)||Ft(s);s=o?s:ge(s),yo(s,this._rawValue)&&(this._rawValue=s,this._value=o?s:$o(s),cr(this,s))}}function O(e){return Te(e)?e.value:e}const K1={get:(e,s,o)=>O(Reflect.get(e,s,o)),set:(e,s,o,a)=>{const i=e[s];return Te(i)&&!Te(o)?(i.value=o,!0):Reflect.set(e,s,o,a)}};function Fp(e){return us(e)?e:new Proxy(e,K1)}class H1{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:a}=s(()=>rr(this),()=>cr(this));this._get=o,this._set=a}get value(){return this._get()}set value(s){this._set(s)}}function ur(e){return new H1(e)}function W1(e){Ea(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ue(e)?new Array(e.length):{};for(const o in e)s[o]=jp(e,o);return s}class B1{constructor(s,o,a){this._object=s,this._key=o,this._defaultValue=a,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return m1(ge(this._object),this._key)}}class q1{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function V1(e,s,o){return Te(e)?e:fe(e)?new q1(e):Oe(e)&&arguments.length>1?jp(e,s,o):J(e)}function jp(e,s,o){const a=e[s];return Te(a)?a:new B1(e,s,o)}class U1{constructor(s,o,a,i){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ar(s,()=>{this._dirty||(this._dirty=!0,cr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=a}get value(){const s=ge(this);return rr(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function G1(e,s,o=!1){let a,i;const l=fe(e);l?(a=e,i=()=>{console.warn("Write operation failed: computed value is readonly")}):(a=e.get,i=e.set);const r=new U1(a,i,l||!i,o);return s&&!o&&(r.effect.onTrack=s.onTrack,r.effect.onTrigger=s.onTrigger),r}const ps=[];function _a(e){ps.push(e)}function ga(){ps.pop()}function q(e,...s){vs();const o=ps.length?ps[ps.length-1].component:null,a=o&&o.appContext.config.warnHandler,i=Y1();if(a)_t(a,o,11,[e+s.join(""),o&&o.proxy,i.map(({vnode:l})=>`at <${pi(o,l.type)}>`).join(`
`),i]);else{const l=[`[Vue warn]: ${e}`,...s];i.length&&l.push(`
`,...Z1(i)),console.warn(...l)}bs()}function Y1(){let e=ps[ps.length-1];if(!e)return[];const s=[];for(;e;){const o=s[0];o&&o.vnode===e?o.recurseCount++:s.push({vnode:e,recurseCount:0});const a=e.component&&e.component.parent;e=a&&a.vnode}return s}function Z1(e){const s=[];return e.forEach((o,a)=>{s.push(...a===0?[]:[`
`],...Q1(o))}),s}function Q1({vnode:e,recurseCount:s}){const o=s>0?`... (${s} recursive calls)`:"",a=e.component?e.component.parent==null:!1,i=` at <${pi(e.component,e.type,a)}`,l=">"+o;return e.props?[i,...J1(e.props),l]:[i+l]}function J1(e){const s=[],o=Object.keys(e);return o.slice(0,3).forEach(a=>{s.push(...Kp(a,e[a]))}),o.length>3&&s.push(" ..."),s}function Kp(e,s,o){return We(s)?(s=JSON.stringify(s),o?s:[`${e}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?o?s:[`${e}=${s}`]:Te(s)?(s=Kp(e,ge(s.value),!0),o?s:[`${e}=Ref<`,s,">"]):fe(s)?[`${e}=fn${s.name?`<${s.name}>`:""}`]:(s=ge(s),o?s:[`${e}=`,s])}function X1(e,s){e!==void 0&&(typeof e!="number"?q(`${s} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&q(`${s} is NaN - the duration expression might be incorrect.`))}const pr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function _t(e,s,o,a){let i;try{i=a?e(...a):e()}catch(l){ti(l,s,o)}return i}function Nn(e,s,o,a){if(fe(e)){const l=_t(e,s,o,a);return l&&er(l)&&l.catch(r=>{ti(r,s,o)}),l}const i=[];for(let l=0;l<e.length;l++)i.push(Nn(e[l],s,o,a));return i}function ti(e,s,o,a=!0){const i=s?s.vnode:null;if(s){let l=s.parent;const r=s.proxy,c=pr[o];for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,r,c)===!1)return}l=l.parent}const u=s.appContext.config.errorHandler;if(u){_t(u,null,10,[e,r,c]);return}}eh(e,o,i,a)}function eh(e,s,o,a=!0){{const i=pr[s];if(o&&_a(o),q(`Unhandled error${i?` during execution of ${i}`:""}`),o&&ga(),a)throw e;console.error(e)}}let Io=!1,Ji=!1;const on=[];let Xn=0;const As=[];let Jn=null,It=0;const Hp=Promise.resolve();let dr=null;const nh=100;function an(e){const s=dr||Hp;return e?s.then(this?e.bind(this):e):s}function th(e){let s=Xn+1,o=on.length;for(;s<o;){const a=s+o>>>1;Lo(on[a])<e?s=a+1:o=a}return s}function si(e){(!on.length||!on.includes(e,Io&&e.allowRecurse?Xn+1:Xn))&&(e.id==null?on.push(e):on.splice(th(e.id),0,e),Wp())}function Wp(){!Io&&!Ji&&(Ji=!0,dr=Hp.then(Vp))}function sh(e){const s=on.indexOf(e);s>Xn&&on.splice(s,1)}function Bp(e){ue(e)?As.push(...e):(!Jn||!Jn.includes(e,e.allowRecurse?It+1:It))&&As.push(e),Wp()}function ic(e,s=Io?Xn+1:0){for(e=e||new Map;s<on.length;s++){const o=on[s];if(o&&o.pre){if(mr(e,o))continue;on.splice(s,1),s--,o()}}}function qp(e){if(As.length){const s=[...new Set(As)];if(As.length=0,Jn){Jn.push(...s);return}for(Jn=s,e=e||new Map,Jn.sort((o,a)=>Lo(o)-Lo(a)),It=0;It<Jn.length;It++)mr(e,Jn[It])||Jn[It]();Jn=null,It=0}}const Lo=e=>e.id==null?1/0:e.id,oh=(e,s)=>{const o=Lo(e)-Lo(s);if(o===0){if(e.pre&&!s.pre)return-1;if(s.pre&&!e.pre)return 1}return o};function Vp(e){Ji=!1,Io=!0,e=e||new Map,on.sort(oh);const s=o=>mr(e,o);try{for(Xn=0;Xn<on.length;Xn++){const o=on[Xn];if(o&&o.active!==!1){if(s(o))continue;_t(o,null,14)}}}finally{Xn=0,on.length=0,qp(e),Io=!1,dr=null,(on.length||As.length)&&Vp(e)}}function mr(e,s){if(!e.has(s))e.set(s,1);else{const o=e.get(s);if(o>nh){const a=s.ownerInstance,i=a&&Ro(a.type);return q(`Maximum recursive updates exceeded${i?` in component <${i}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(s,o+1)}}let At=!1;const Ss=new Set;La().__VUE_HMR_RUNTIME__={createRecord:gi(Up),rerender:gi(lh),reload:gi(rh)};const gs=new Map;function ah(e){const s=e.type.__hmrId;let o=gs.get(s);o||(Up(s,e.type),o=gs.get(s)),o.instances.add(e)}function ih(e){gs.get(e.type.__hmrId).instances.delete(e)}function Up(e,s){return gs.has(e)?!1:(gs.set(e,{initialDef:co(s),instances:new Set}),!0)}function co(e){return Id(e)?e.__vccOpts:e}function lh(e,s){const o=gs.get(e);o&&(o.initialDef.render=s,[...o.instances].forEach(a=>{s&&(a.render=s,co(a.type).render=s),a.renderCache=[],At=!0,a.update(),At=!1}))}function rh(e,s){const o=gs.get(e);if(!o)return;s=co(s),lc(o.initialDef,s);const a=[...o.instances];for(const i of a){const l=co(i.type);Ss.has(l)||(l!==o.initialDef&&lc(l,s),Ss.add(l)),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(Ss.add(l),i.ceReload(s.styles),Ss.delete(l)):i.parent?si(i.parent.update):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Bp(()=>{for(const i of a)Ss.delete(co(i.type))})}function lc(e,s){Ke(e,s);for(const o in e)o!=="__file"&&!(o in s)&&delete e[o]}function gi(e){return(s,o)=>{try{return e(s,o)}catch(a){console.error(a),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let et,oo=[],Xi=!1;function Ho(e,...s){et?et.emit(e,...s):Xi||oo.push({event:e,args:s})}function Gp(e,s){var o,a;et=e,et?(et.enabled=!0,oo.forEach(({event:i,args:l})=>et.emit(i,...l)),oo=[]):typeof window<"u"&&window.HTMLElement&&!((a=(o=window.navigator)==null?void 0:o.userAgent)!=null&&a.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(l=>{Gp(l,s)}),setTimeout(()=>{et||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xi=!0,oo=[])},3e3)):(Xi=!0,oo=[])}function ch(e,s){Ho("app:init",e,s,{Fragment:Ae,Text:qo,Comment:hn,Static:uo})}function uh(e){Ho("app:unmount",e)}const el=fr("component:added"),Yp=fr("component:updated"),ph=fr("component:removed"),dh=e=>{et&&typeof et.cleanupBuffer=="function"&&!et.cleanupBuffer(e)&&ph(e)};function fr(e){return s=>{Ho(e,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const mh=Zp("perf:start"),fh=Zp("perf:end");function Zp(e){return(s,o,a)=>{Ho(e,s.appContext.app,s.uid,s,o,a)}}function hh(e,s,o){Ho("component:emit",e.appContext.app,e,s,o)}function _h(e,s,...o){if(e.isUnmounted)return;const a=e.vnode.props||je;{const{emitsOptions:d,propsOptions:[m]}=e;if(d)if(!(s in d))(!m||!(Zt(s)in m))&&q(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${Zt(s)}" prop.`);else{const f=d[s];fe(f)&&(f(...o)||q(`Invalid event arguments: event validation failed for event "${s}".`))}}let i=o;const l=s.startsWith("update:"),r=l&&s.slice(7);if(r&&r in a){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:f}=a[d]||je;f&&(i=o.map(h=>We(h)?h.trim():h)),m&&(i=o.map(Jf))}hh(e,s,i);{const d=s.toLowerCase();d!==s&&a[Zt(d)]&&q(`Event "${d}" is emitted in component ${pi(e,e.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${gt(s)}" instead of "${s}".`)}let c,u=a[c=Zt(s)]||a[c=Zt(st(s))];!u&&l&&(u=a[c=Zt(gt(s))]),u&&Nn(u,e,6,i);const p=a[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Nn(p,e,6,i)}}function Qp(e,s,o=!1){const a=s.emitsCache,i=a.get(e);if(i!==void 0)return i;const l=e.emits;let r={},c=!1;if(!fe(e)){const u=p=>{const d=Qp(p,s,!0);d&&(c=!0,Ke(r,d))};!o&&s.mixins.length&&s.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!c?(Oe(e)&&a.set(e,null),null):(ue(l)?l.forEach(u=>r[u]=null):Ke(r,l),Oe(e)&&a.set(e,r),r)}function oi(e,s){return!e||!jo(s)?!1:(s=s.slice(2).replace(/Once$/,""),Ce(e,s[0].toLowerCase()+s.slice(1))||Ce(e,gt(s))||Ce(e,s))}let Xe=null,ai=null;function Aa(e){const s=Xe;return Xe=e,ai=e&&e.type.__scopeId||null,s}function BP(e){ai=e}function qP(){ai=null}function v(e,s=Xe,o){if(!s||e._n)return e;const a=(...i)=>{a._d&&xc(-1);const l=Aa(s);let r;try{r=e(...i)}finally{Aa(l),a._d&&xc(1)}return Yp(s),r};return a._n=!0,a._c=!0,a._d=!0,a}let nl=!1;function Ta(){nl=!0}function vi(e){const{type:s,vnode:o,proxy:a,withProxy:i,props:l,propsOptions:[r],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:_,inheritAttrs:w}=e;let y,$;const I=Aa(e);nl=!1;try{if(o.shapeFlag&4){const E=i||a;y=qn(d.call(E,E,m,l,h,f,_)),$=u}else{const E=s;u===l&&Ta(),y=qn(E.length>1?E(l,{get attrs(){return Ta(),u},slots:c,emit:p}):E(l,null)),$=s.props?u:vh(u)}}catch(E){po.length=0,ti(E,e,1),y=A(hn)}let k=y,M;if(y.patchFlag>0&&y.patchFlag&2048&&([k,M]=gh(y)),$&&w!==!1){const E=Object.keys($),{shapeFlag:z}=k;if(E.length){if(z&7)r&&E.some($a)&&($=bh($,r)),k=it(k,$);else if(!nl&&k.type!==hn){const B=Object.keys(u),D=[],U=[];for(let le=0,me=B.length;le<me;le++){const X=B[le];jo(X)?$a(X)||D.push(X[2].toLowerCase()+X.slice(3)):U.push(X)}U.length&&q(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),D.length&&q(`Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(rc(k)||q("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=it(k),k.dirs=k.dirs?k.dirs.concat(o.dirs):o.dirs),o.transition&&(rc(k)||q("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=o.transition),M?M(k):y=k,Aa(I),y}const gh=e=>{const s=e.children,o=e.dynamicChildren,a=Jp(s);if(!a)return[e,void 0];const i=s.indexOf(a),l=o?o.indexOf(a):-1,r=c=>{s[i]=c,o&&(l>-1?o[l]=c:c.patchFlag>0&&(e.dynamicChildren=[...o,c]))};return[qn(a),r]};function Jp(e){let s;for(let o=0;o<e.length;o++){const a=e[o];if(jt(a)){if(a.type!==hn||a.children==="v-if"){if(s)return;s=a}}else return}return s}const vh=e=>{let s;for(const o in e)(o==="class"||o==="style"||jo(o))&&((s||(s={}))[o]=e[o]);return s},bh=(e,s)=>{const o={};for(const a in e)(!$a(a)||!(a.slice(9)in s))&&(o[a]=e[a]);return o},rc=e=>e.shapeFlag&7||e.type===hn;function kh(e,s,o){const{props:a,children:i,component:l}=e,{props:r,children:c,patchFlag:u}=s,p=l.emitsOptions;if((i||c)&&At||s.dirs||s.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return a?cc(a,r,p):!!r;if(u&8){const d=s.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(r[f]!==a[f]&&!oi(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:a===r?!1:a?r?cc(a,r,p):!0:!!r;return!1}function cc(e,s,o){const a=Object.keys(s);if(a.length!==Object.keys(e).length)return!0;for(let i=0;i<a.length;i++){const l=a[i];if(s[l]!==e[l]&&!oi(o,l))return!0}return!1}function xh({vnode:e,parent:s},o){for(;s&&s.subTree===e;)(e=s.vnode).el=o,s=s.parent}const Xp=e=>e.__isSuspense;function wh(e,s){s&&s.pendingBranch?ue(e)?s.effects.push(...e):s.effects.push(e):Bp(e)}function ks(e,s){return ii(e,null,s)}function yh(e,s){return ii(e,null,Ke({},s,{flush:"post"}))}const ta={};function be(e,s,o){return fe(s)||q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),ii(e,s,o)}function ii(e,s,{immediate:o,deep:a,flush:i,onTrack:l,onTrigger:r}=je){var c;s||(o!==void 0&&q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),a!==void 0&&q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const u=E=>{q("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=sr()===((c=Je)==null?void 0:c.scope)?Je:null;let d,m=!1,f=!1;if(Te(e)?(d=()=>e.value,m=Ra(e)):us(e)?(d=()=>e,a=!0):ue(e)?(f=!0,m=e.some(E=>us(E)||Ra(E)),d=()=>e.map(E=>{if(Te(E))return E.value;if(us(E))return as(E);if(fe(E))return _t(E,p,2);u(E)})):fe(e)?s?d=()=>_t(e,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),Nn(e,p,3,[_])}:(d=xn,u(e)),s&&a){const E=d;d=()=>as(E())}let h,_=E=>{h=k.onStop=()=>{_t(E,p,4)}},w;if(So)if(_=xn,s?o&&Nn(s,p,3,[d(),f?[]:void 0,_]):d(),i==="sync"){const E=A_();w=E.__watcherHandles||(E.__watcherHandles=[])}else return xn;let y=f?new Array(e.length).fill(ta):ta;const $=()=>{if(k.active)if(s){const E=k.run();(a||m||(f?E.some((z,B)=>yo(z,y[B])):yo(E,y)))&&(h&&h(),Nn(s,p,3,[E,y===ta?void 0:f&&y[0]===ta?[]:y,_]),y=E)}else k.run()};$.allowRecurse=!!s;let I;i==="sync"?I=$:i==="post"?I=()=>nn($,p&&p.suspense):($.pre=!0,p&&($.id=p.uid),I=()=>si($));const k=new ar(d,I);k.onTrack=l,k.onTrigger=r,s?o?$():y=k.run():i==="post"?nn(k.run.bind(k),p&&p.suspense):k.run();const M=()=>{k.stop(),p&&p.scope&&Jl(p.scope.effects,k)};return w&&w.push(M),M}function $h(e,s,o){const a=this.proxy,i=We(e)?e.includes(".")?ed(a,e):()=>a[e]:e.bind(a,a);let l;fe(s)?l=s:(l=s.handler,o=s);const r=Je;zs(this);const c=ii(i,l.bind(a),o);return r?zs(r):ms(),c}function ed(e,s){const o=s.split(".");return()=>{let a=e;for(let i=0;i<o.length&&a;i++)a=a[o[i]];return a}}function as(e,s){if(!Oe(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),Te(e))as(e.value,s);else if(ue(e))for(let o=0;o<e.length;o++)as(e[o],s);else if(gp(e)||rs(e))e.forEach(o=>{as(o,s)});else if(bp(e))for(const o in e)as(e[o],s);return e}function nd(e){Yf(e)&&q("Do not use built-in directive ids as custom directive id: "+e)}function td(e,s){const o=Xe;if(o===null)return q("withDirectives can only be used inside render functions."),e;const a=ui(o)||o.proxy,i=e.dirs||(e.dirs=[]);for(let l=0;l<s.length;l++){let[r,c,u,p=je]=s[l];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&as(c),i.push({dir:r,instance:a,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function qt(e,s,o,a){const i=e.dirs,l=s&&s.dirs;for(let r=0;r<i.length;r++){const c=i[r];l&&(c.oldValue=l[r].value);let u=c.dir[a];u&&(vs(),Nn(u,o,8,[e.el,c,e,s]),bs())}}function Ih(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const On=[Function,Array],Lh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On};function Ch(e,s){const{leavingVNodes:o}=e;let a=o.get(s.type);return a||(a=Object.create(null),o.set(s.type,a)),a}function tl(e,s,o,a){const{appear:i,mode:l,persisted:r=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:f,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:w,onAppear:y,onAfterAppear:$,onAppearCancelled:I}=s,k=String(e.key),M=Ch(o,e),E=(D,U)=>{D&&Nn(D,a,9,U)},z=(D,U)=>{const le=U[1];E(D,U),ue(D)?D.every(me=>me.length<=1)&&le():D.length<=1&&le()},B={mode:l,persisted:r,beforeEnter(D){let U=c;if(!o.isMounted)if(i)U=w||c;else return;D._leaveCb&&D._leaveCb(!0);const le=M[k];le&&Xt(e,le)&&le.el._leaveCb&&le.el._leaveCb(),E(U,[D])},enter(D){let U=u,le=p,me=d;if(!o.isMounted)if(i)U=y||u,le=$||p,me=I||d;else return;let X=!1;const ve=D._enterCb=ke=>{X||(X=!0,ke?E(me,[D]):E(le,[D]),B.delayedLeave&&B.delayedLeave(),D._enterCb=void 0)};U?z(U,[D,ve]):ve()},leave(D,U){const le=String(e.key);if(D._enterCb&&D._enterCb(!0),o.isUnmounting)return U();E(m,[D]);let me=!1;const X=D._leaveCb=ve=>{me||(me=!0,U(),ve?E(_,[D]):E(h,[D]),D._leaveCb=void 0,M[le]===e&&delete M[le])};M[le]=e,f?z(f,[D,X]):X()},clone(D){return tl(D,s,o,a)}};return B}function Ma(e,s){e.shapeFlag&6&&e.component?Ma(e.component.subTree,s):e.shapeFlag&128?(e.ssContent.transition=s.clone(e.ssContent),e.ssFallback.transition=s.clone(e.ssFallback)):e.transition=s}function sd(e,s=!1,o){let a=[],i=0;for(let l=0;l<e.length;l++){let r=e[l];const c=o==null?r.key:String(o)+String(r.key!=null?r.key:l);r.type===Ae?(r.patchFlag&128&&i++,a=a.concat(sd(r.children,s,c))):(s||r.type!==hn)&&a.push(c!=null?it(r,{key:c}):r)}if(i>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function Me(e,s){return fe(e)?(()=>Ke({name:e.name},s,{setup:e}))():e}const Ts=e=>!!e.type.__asyncLoader,hr=e=>e.type.__isKeepAlive,Sh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:s}){const o=$n(),a=o.ctx;if(!a.renderer)return()=>{const I=s.default&&s.default();return I&&I.length===1?I[0]:I};const i=new Map,l=new Set;let r=null;o.__v_cache=i;const c=o.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=a,f=m("div");a.activate=(I,k,M,E,z)=>{const B=I.component;p(I,k,M,0,c),u(B.vnode,I,k,M,B,c,E,I.slotScopeIds,z),nn(()=>{B.isDeactivated=!1,B.a&&Jt(B.a);const D=I.props&&I.props.onVnodeMounted;D&&zn(D,B.parent,I)},c),el(B)},a.deactivate=I=>{const k=I.component;p(I,f,null,1,c),nn(()=>{k.da&&Jt(k.da);const M=I.props&&I.props.onVnodeUnmounted;M&&zn(M,k.parent,I),k.isDeactivated=!0},c),el(k)};function h(I){bi(I),d(I,o,c,!0)}function _(I){i.forEach((k,M)=>{const E=Ro(k.type);E&&(!I||!I(E))&&w(M)})}function w(I){const k=i.get(I);!r||!Xt(k,r)?h(k):r&&bi(r),i.delete(I),l.delete(I)}be(()=>[e.include,e.exclude],([I,k])=>{I&&_(M=>ao(I,M)),k&&_(M=>!ao(k,M))},{flush:"post",deep:!0});let y=null;const $=()=>{y!=null&&i.set(y,ki(o.subTree))};return kt($),ri($),Wo(()=>{i.forEach(I=>{const{subTree:k,suspense:M}=o,E=ki(k);if(I.type===E.type&&I.key===E.key){bi(E);const z=E.component.da;z&&nn(z,M);return}h(I)})}),()=>{if(y=null,!s.default)return null;const I=s.default(),k=I[0];if(I.length>1)return q("KeepAlive should contain exactly one component child."),r=null,I;if(!jt(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return r=null,k;let M=ki(k);const E=M.type,z=Ro(Ts(M)?M.type.__asyncResolved||{}:E),{include:B,exclude:D,max:U}=e;if(B&&(!z||!ao(B,z))||D&&z&&ao(D,z))return r=M,k;const le=M.key==null?E:M.key,me=i.get(le);return M.el&&(M=it(M),k.shapeFlag&128&&(k.ssContent=M)),y=le,me?(M.el=me.el,M.component=me.component,M.transition&&Ma(M,M.transition),M.shapeFlag|=512,l.delete(le),l.add(le)):(l.add(le),U&&l.size>parseInt(U,10)&&w(l.values().next().value)),M.shapeFlag|=256,r=M,Xp(k.type)?k:M}}},od=Sh;function ao(e,s){return ue(e)?e.some(o=>ao(o,s)):We(e)?e.split(",").includes(s):Gf(e)?e.test(s):!1}function ad(e,s){ld(e,"a",s)}function id(e,s){ld(e,"da",s)}function ld(e,s,o=Je){const a=e.__wdc||(e.__wdc=()=>{let i=o;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(li(s,a,o),o){let i=o.parent;for(;i&&i.parent;)hr(i.parent.vnode)&&Rh(a,s,o,i),i=i.parent}}function Rh(e,s,o,a){const i=li(s,e,a,!0);Bo(()=>{Jl(a[s],i)},o)}function bi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ki(e){return e.shapeFlag&128?e.ssContent:e}function li(e,s,o=Je,a=!1){if(o){const i=o[e]||(o[e]=[]),l=s.__weh||(s.__weh=(...r)=>{if(o.isUnmounted)return;vs(),zs(o);const c=Nn(s,o,e,r);return ms(),bs(),c});return a?i.unshift(l):i.push(l),l}else{const i=Zt(pr[e].replace(/ hook$/,""));q(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const bt=e=>(s,o=Je)=>(!So||e==="sp")&&li(e,(...a)=>s(...a),o),Eh=bt("bm"),kt=bt("m"),Ah=bt("bu"),ri=bt("u"),Wo=bt("bum"),Bo=bt("um"),Th=bt("sp"),Mh=bt("rtg"),Oh=bt("rtc");function zh(e,s=Je){li("ec",e,s)}const sl="components";function Oa(e,s){return Dh(sl,e,!0,s)||e}const Ph=Symbol.for("v-ndc");function Dh(e,s,o=!0,a=!1){const i=Xe||Je;if(i){const l=i.type;if(e===sl){const c=Ro(l,!1);if(c&&(c===s||c===st(s)||c===_s(st(s))))return l}const r=uc(i[e]||l[e],s)||uc(i.appContext[e],s);if(!r&&a)return l;if(o&&!r){const c=e===sl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";q(`Failed to resolve ${e.slice(0,-1)}: ${s}${c}`)}return r}else q(`resolve${_s(e.slice(0,-1))} can only be used in render() or setup().`)}function uc(e,s){return e&&(e[s]||e[st(s)]||e[_s(st(s))])}function Fs(e,s,o,a){let i;const l=o&&o[a];if(ue(e)||We(e)){i=new Array(e.length);for(let r=0,c=e.length;r<c;r++)i[r]=s(e[r],r,void 0,l&&l[r])}else if(typeof e=="number"){Number.isInteger(e)||q(`The v-for range expect an integer value but got ${e}.`),i=new Array(e);for(let r=0;r<e;r++)i[r]=s(r+1,r,void 0,l&&l[r])}else if(Oe(e))if(e[Symbol.iterator])i=Array.from(e,(r,c)=>s(r,c,void 0,l&&l[c]));else{const r=Object.keys(e);i=new Array(r.length);for(let c=0,u=r.length;c<u;c++){const p=r[c];i[c]=s(e[p],p,c,l&&l[c])}}else i=[];return o&&(o[a]=i),i}function Fn(e,s,o={},a,i){if(Xe.isCE||Xe.parent&&Ts(Xe.parent)&&Xe.parent.isCE)return s!=="default"&&(o.name=s),A("slot",o,a&&a());let l=e[s];l&&l.length>1&&(q("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),l=()=>[]),l&&l._c&&(l._d=!1),b();const r=l&&rd(l(o)),c=C(Ae,{key:o.key||r&&r.key||`_${s}`},r||(a?a():[]),r&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function rd(e){return e.some(s=>jt(s)?!(s.type===hn||s.type===Ae&&!rd(s.children)):!0)?e:null}const ol=e=>e?wd(e)?ui(e)||e.proxy:ol(e.parent):null,ds=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>so(e.props),$attrs:e=>so(e.attrs),$slots:e=>so(e.slots),$refs:e=>so(e.refs),$parent:e=>ol(e.parent),$root:e=>ol(e.root),$emit:e=>e.emit,$options:e=>gr(e),$forceUpdate:e=>e.f||(e.f=()=>si(e.update)),$nextTick:e=>e.n||(e.n=an.bind(e.proxy)),$watch:e=>$h.bind(e)}),_r=e=>e==="_"||e==="$",xi=(e,s)=>e!==je&&!e.__isScriptSetup&&Ce(e,s),cd={get({_:e},s){const{ctx:o,setupState:a,data:i,props:l,accessCache:r,type:c,appContext:u}=e;if(s==="__isVue")return!0;let p;if(s[0]!=="$"){const h=r[s];if(h!==void 0)switch(h){case 1:return a[s];case 2:return i[s];case 4:return o[s];case 3:return l[s]}else{if(xi(a,s))return r[s]=1,a[s];if(i!==je&&Ce(i,s))return r[s]=2,i[s];if((p=e.propsOptions[0])&&Ce(p,s))return r[s]=3,l[s];if(o!==je&&Ce(o,s))return r[s]=4,o[s];al&&(r[s]=0)}}const d=ds[s];let m,f;if(d)return s==="$attrs"?(cn(e,"get",s),Ta()):s==="$slots"&&cn(e,"get",s),d(e);if((m=c.__cssModules)&&(m=m[s]))return m;if(o!==je&&Ce(o,s))return r[s]=4,o[s];if(f=u.config.globalProperties,Ce(f,s))return f[s];Xe&&(!We(s)||s.indexOf("__v")!==0)&&(i!==je&&_r(s[0])&&Ce(i,s)?q(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Xe&&q(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:e},s,o){const{data:a,setupState:i,ctx:l}=e;return xi(i,s)?(i[s]=o,!0):i.__isScriptSetup&&Ce(i,s)?(q(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):a!==je&&Ce(a,s)?(a[s]=o,!0):Ce(e.props,s)?(q(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in e?(q(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in e.appContext.config.globalProperties?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,value:o}):l[s]=o,!0)},has({_:{data:e,setupState:s,accessCache:o,ctx:a,appContext:i,propsOptions:l}},r){let c;return!!o[r]||e!==je&&Ce(e,r)||xi(s,r)||(c=l[0])&&Ce(c,r)||Ce(a,r)||Ce(ds,r)||Ce(i.config.globalProperties,r)},defineProperty(e,s,o){return o.get!=null?e._.accessCache[s]=0:Ce(o,"value")&&this.set(e,s,o.value,null),Reflect.defineProperty(e,s,o)}};cd.ownKeys=e=>(q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Nh(e){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ds).forEach(o=>{Object.defineProperty(s,o,{configurable:!0,enumerable:!1,get:()=>ds[o](e),set:xn})}),s}function Fh(e){const{ctx:s,propsOptions:[o]}=e;o&&Object.keys(o).forEach(a=>{Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>e.props[a],set:xn})})}function jh(e){const{ctx:s,setupState:o}=e;Object.keys(ge(o)).forEach(a=>{if(!o.__isScriptSetup){if(_r(a[0])){q(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>o[a],set:xn})}})}function Kh(){return Hh().slots}function Hh(){const e=$n();return e||q("useContext() called without active instance."),e.setupContext||(e.setupContext=$d(e))}function pc(e){return ue(e)?e.reduce((s,o)=>(s[o]=null,s),{}):e}function Wh(){const e=Object.create(null);return(s,o)=>{e[o]?q(`${s} property "${o}" is already defined in ${e[o]}.`):e[o]=s}}let al=!0;function Bh(e){const s=gr(e),o=e.proxy,a=e.ctx;al=!1,s.beforeCreate&&dc(s.beforeCreate,e,"bc");const{data:i,computed:l,methods:r,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:_,activated:w,deactivated:y,beforeDestroy:$,beforeUnmount:I,destroyed:k,unmounted:M,render:E,renderTracked:z,renderTriggered:B,errorCaptured:D,serverPrefetch:U,expose:le,inheritAttrs:me,components:X,directives:ve,filters:ke}=s,ye=Wh();{const[oe]=e.propsOptions;if(oe)for(const pe in oe)ye("Props",pe)}if(p&&qh(p,a,ye),r)for(const oe in r){const pe=r[oe];fe(pe)?(Object.defineProperty(a,oe,{value:pe.bind(o),configurable:!0,enumerable:!0,writable:!0}),ye("Methods",oe)):q(`Method "${oe}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(i){fe(i)||q("The data option must be a function. Plain object usage is no longer supported.");const oe=i.call(o,o);if(er(oe)&&q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Oe(oe))q("data() should return an object.");else{e.data=Be(oe);for(const pe in oe)ye("Data",pe),_r(pe[0])||Object.defineProperty(a,pe,{configurable:!0,enumerable:!0,get:()=>oe[pe],set:xn})}}if(al=!0,l)for(const oe in l){const pe=l[oe],Le=fe(pe)?pe.bind(o,o):fe(pe.get)?pe.get.bind(o,o):xn;Le===xn&&q(`Computed property "${oe}" has no getter.`);const Pe=!fe(pe)&&fe(pe.set)?pe.set.bind(o):()=>{q(`Write operation failed: computed property "${oe}" is readonly.`)},Tn=N({get:Le,set:Pe});Object.defineProperty(a,oe,{enumerable:!0,configurable:!0,get:()=>Tn.value,set:sn=>Tn.value=sn}),ye("Computed",oe)}if(c)for(const oe in c)ud(c[oe],a,o,oe);if(u){const oe=fe(u)?u.call(o):u;Reflect.ownKeys(oe).forEach(pe=>{Sn(pe,oe[pe])})}d&&dc(d,e,"c");function De(oe,pe){ue(pe)?pe.forEach(Le=>oe(Le.bind(o))):pe&&oe(pe.bind(o))}if(De(Eh,m),De(kt,f),De(Ah,h),De(ri,_),De(ad,w),De(id,y),De(zh,D),De(Oh,z),De(Mh,B),De(Wo,I),De(Bo,M),De(Th,U),ue(le))if(le.length){const oe=e.exposed||(e.exposed={});le.forEach(pe=>{Object.defineProperty(oe,pe,{get:()=>o[pe],set:Le=>o[pe]=Le})})}else e.exposed||(e.exposed={});E&&e.render===xn&&(e.render=E),me!=null&&(e.inheritAttrs=me),X&&(e.components=X),ve&&(e.directives=ve)}function qh(e,s,o=xn){ue(e)&&(e=il(e));for(const a in e){const i=e[a];let l;Oe(i)?"default"in i?l=L(i.from||a,i.default,!0):l=L(i.from||a):l=L(i),Te(l)?Object.defineProperty(s,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):s[a]=l,o("Inject",a)}}function dc(e,s,o){Nn(ue(e)?e.map(a=>a.bind(s.proxy)):e.bind(s.proxy),s,o)}function ud(e,s,o,a){const i=a.includes(".")?ed(o,a):()=>o[a];if(We(e)){const l=s[e];fe(l)?be(i,l):q(`Invalid watch handler specified by key "${e}"`,l)}else if(fe(e))be(i,e.bind(o));else if(Oe(e))if(ue(e))e.forEach(l=>ud(l,s,o,a));else{const l=fe(e.handler)?e.handler.bind(o):s[e.handler];fe(l)?be(i,l,e):q(`Invalid watch handler specified by key "${e.handler}"`,l)}else q(`Invalid watch option: "${a}"`,e)}function gr(e){const s=e.type,{mixins:o,extends:a}=s,{mixins:i,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,c=l.get(s);let u;return c?u=c:!i.length&&!o&&!a?u=s:(u={},i.length&&i.forEach(p=>za(u,p,r,!0)),za(u,s,r)),Oe(s)&&l.set(s,u),u}function za(e,s,o,a=!1){const{mixins:i,extends:l}=s;l&&za(e,l,o,!0),i&&i.forEach(r=>za(e,r,o,!0));for(const r in s)if(a&&r==="expose")q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Vh[r]||o&&o[r];e[r]=c?c(e[r],s[r]):s[r]}return e}const Vh={data:mc,props:fc,emits:fc,methods:io,computed:io,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:io,directives:io,watch:Gh,provide:mc,inject:Uh};function mc(e,s){return s?e?function(){return Ke(fe(e)?e.call(this,this):e,fe(s)?s.call(this,this):s)}:s:e}function Uh(e,s){return io(il(e),il(s))}function il(e){if(ue(e)){const s={};for(let o=0;o<e.length;o++)s[e[o]]=e[o];return s}return e}function pn(e,s){return e?[...new Set([].concat(e,s))]:s}function io(e,s){return e?Ke(Object.create(null),e,s):s}function fc(e,s){return e?ue(e)&&ue(s)?[...new Set([...e,...s])]:Ke(Object.create(null),pc(e),pc(s??{})):s}function Gh(e,s){if(!e)return s;if(!s)return e;const o=Ke(Object.create(null),e);for(const a in s)o[a]=pn(e[a],s[a]);return o}function pd(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function Zh(e,s){return function(a,i=null){fe(a)||(a=Ke({},a)),i!=null&&!Oe(i)&&(q("root props passed to app.mount() must be an object."),i=null);const l=pd();Object.defineProperty(l.config,"unwrapInjectedRef",{get(){return!0},set(){q("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const r=new Set;let c=!1;const u=l.app={_uid:Yh++,_component:a,_props:i,_container:null,_context:l,_instance:null,version:Fa,get config(){return l.config},set config(p){q("app.config cannot be replaced. Modify individual options instead.")},use(p,...d){return r.has(p)?q("Plugin has already been applied to target app."):p&&fe(p.install)?(r.add(p),p.install(u,...d)):fe(p)?(r.add(p),p(u,...d)):q('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return l.mixins.includes(p)?q("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):l.mixins.push(p),u},component(p,d){return pl(p,l.config),d?(l.components[p]&&q(`Component "${p}" has already been registered in target app.`),l.components[p]=d,u):l.components[p]},directive(p,d){return nd(p),d?(l.directives[p]&&q(`Directive "${p}" has already been registered in target app.`),l.directives[p]=d,u):l.directives[p]},mount(p,d,m){if(c)q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=A(a,i);return f.appContext=l,l.reload=()=>{e(it(f),p,m)},d&&s?s(f,p):e(f,p,m),c=!0,u._container=p,p.__vue_app__=u,u._instance=f.component,ch(u,Fa),ui(f.component)||f.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,uh(u),delete u._container.__vue_app__):q("Cannot unmount an app that is not mounted.")},provide(p,d){return p in l.provides&&q(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),l.provides[p]=d,u},runWithContext(p){Pa=u;try{return p()}finally{Pa=null}}};return u}}let Pa=null;function Sn(e,s){if(!Je)q("provide() can only be used inside setup().");else{let o=Je.provides;const a=Je.parent&&Je.parent.provides;a===o&&(o=Je.provides=Object.create(a)),o[e]=s}}function L(e,s,o=!1){const a=Je||Xe;if(a||Pa){const i=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:Pa._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return o&&fe(s)?s.call(a&&a.proxy):s;q(`injection "${String(e)}" not found.`)}else q("inject() can only be used inside setup() or functional components.")}function Qh(e,s,o,a=!1){const i={},l={};Ia(l,ci,1),e.propsDefaults=Object.create(null),dd(e,s,i,l);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);fd(s||{},i,e),o?e.props=a?i:F1(i):e.type.props?e.props=i:e.props=l,e.attrs=l}function Jh(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Xh(e,s,o,a){const{props:i,attrs:l,vnode:{patchFlag:r}}=e,c=ge(i),[u]=e.propsOptions;let p=!1;if(!Jh(e)&&(a||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(oi(e.emitsOptions,f))continue;const h=s[f];if(u)if(Ce(l,f))h!==l[f]&&(l[f]=h,p=!0);else{const _=st(f);i[_]=ll(u,c,_,h,e,!1)}else h!==l[f]&&(l[f]=h,p=!0)}}}else{dd(e,s,i,l)&&(p=!0);let d;for(const m in c)(!s||!Ce(s,m)&&((d=gt(m))===m||!Ce(s,d)))&&(u?o&&(o[m]!==void 0||o[d]!==void 0)&&(i[m]=ll(u,c,m,void 0,e,!0)):delete i[m]);if(l!==c)for(const m in l)(!s||!Ce(s,m))&&(delete l[m],p=!0)}p&&ot(e,"set","$attrs"),fd(s||{},i,e)}function dd(e,s,o,a){const[i,l]=e.propsOptions;let r=!1,c;if(s)for(let u in s){if(ha(u))continue;const p=s[u];let d;i&&Ce(i,d=st(u))?!l||!l.includes(d)?o[d]=p:(c||(c={}))[d]=p:oi(e.emitsOptions,u)||(!(u in a)||p!==a[u])&&(a[u]=p,r=!0)}if(l){const u=ge(o),p=c||je;for(let d=0;d<l.length;d++){const m=l[d];o[m]=ll(i,u,m,p[m],e,!Ce(p,m))}}return r}function ll(e,s,o,a,i,l){const r=e[o];if(r!=null){const c=Ce(r,"default");if(c&&a===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&fe(u)){const{propsDefaults:p}=i;o in p?a=p[o]:(zs(i),a=p[o]=u.call(null,s),ms())}else a=u}r[0]&&(l&&!c?a=!1:r[1]&&(a===""||a===gt(o))&&(a=!0))}return a}function md(e,s,o=!1){const a=s.propsCache,i=a.get(e);if(i)return i;const l=e.props,r={},c=[];let u=!1;if(!fe(e)){const d=m=>{u=!0;const[f,h]=md(m,s,!0);Ke(r,f),h&&c.push(...h)};!o&&s.mixins.length&&s.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!u)return Oe(e)&&a.set(e,Es),Es;if(ue(l))for(let d=0;d<l.length;d++){We(l[d])||q("props must be strings when using array syntax.",l[d]);const m=st(l[d]);hc(m)&&(r[m]=je)}else if(l){Oe(l)||q("invalid props options",l);for(const d in l){const m=st(d);if(hc(m)){const f=l[d],h=r[m]=ue(f)||fe(f)?{type:f}:Ke({},f);if(h){const _=gc(Boolean,h.type),w=gc(String,h.type);h[0]=_>-1,h[1]=w<0||_<w,(_>-1||Ce(h,"default"))&&c.push(m)}}}}const p=[r,c];return Oe(e)&&a.set(e,p),p}function hc(e){return e[0]!=="$"?!0:(q(`Invalid prop name: "${e}" is a reserved property.`),!1)}function rl(e){const s=e&&e.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:e===null?"null":""}function _c(e,s){return rl(e)===rl(s)}function gc(e,s){return ue(s)?s.findIndex(o=>_c(o,e)):fe(s)&&_c(s,e)?0:-1}function fd(e,s,o){const a=ge(s),i=o.propsOptions[0];for(const l in i){let r=i[l];r!=null&&e_(l,a[l],r,!Ce(e,l)&&!Ce(e,gt(l)))}}function e_(e,s,o,a){const{type:i,required:l,validator:r,skipCheck:c}=o;if(l&&a){q('Missing required prop: "'+e+'"');return}if(!(s==null&&!l)){if(i!=null&&i!==!0&&!c){let u=!1;const p=ue(i)?i:[i],d=[];for(let m=0;m<p.length&&!u;m++){const{valid:f,expectedType:h}=t_(s,p[m]);d.push(h||""),u=f}if(!u){q(s_(e,s,d));return}}r&&!r(s)&&q('Invalid prop: custom validator check failed for prop "'+e+'".')}}const n_=Ht("String,Number,Boolean,Function,Symbol,BigInt");function t_(e,s){let o;const a=rl(s);if(n_(a)){const i=typeof e;o=i===a.toLowerCase(),!o&&i==="object"&&(o=e instanceof s)}else a==="Object"?o=Oe(e):a==="Array"?o=ue(e):a==="null"?o=e===null:o=e instanceof s;return{valid:o,expectedType:a}}function s_(e,s,o){let a=`Invalid prop: type check failed for prop "${e}". Expected ${o.map(_s).join(" | ")}`;const i=o[0],l=nr(s),r=vc(s,i),c=vc(s,l);return o.length===1&&bc(i)&&!o_(i,l)&&(a+=` with value ${r}`),a+=`, got ${l} `,bc(l)&&(a+=`with value ${c}.`),a}function vc(e,s){return s==="String"?`"${e}"`:s==="Number"?`${Number(e)}`:`${e}`}function bc(e){return["string","number","boolean"].some(o=>e.toLowerCase()===o)}function o_(...e){return e.some(s=>s.toLowerCase()==="boolean")}const hd=e=>e[0]==="_"||e==="$stable",vr=e=>ue(e)?e.map(qn):[qn(e)],a_=(e,s,o)=>{if(s._n)return s;const a=v((...i)=>(Je&&q(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),vr(s(...i))),o);return a._c=!1,a},_d=(e,s,o)=>{const a=e._ctx;for(const i in e){if(hd(i))continue;const l=e[i];if(fe(l))s[i]=a_(i,l,a);else if(l!=null){q(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);const r=vr(l);s[i]=()=>r}}},gd=(e,s)=>{hr(e.vnode)||q("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=vr(s);e.slots.default=()=>o},i_=(e,s)=>{if(e.vnode.shapeFlag&32){const o=s._;o?(e.slots=ge(s),Ia(s,"_",o)):_d(s,e.slots={})}else e.slots={},s&&gd(e,s);Ia(e.slots,ci,1)},l_=(e,s,o)=>{const{vnode:a,slots:i}=e;let l=!0,r=je;if(a.shapeFlag&32){const c=s._;c?At?(Ke(i,s),ot(e,"set","$slots")):o&&c===1?l=!1:(Ke(i,s),!o&&c===1&&delete i._):(l=!s.$stable,_d(s,i)),r=s}else s&&(gd(e,s),r={default:1});if(l)for(const c in i)!hd(c)&&!(c in r)&&delete i[c]};function cl(e,s,o,a,i=!1){if(ue(e)){e.forEach((f,h)=>cl(f,s&&(ue(s)?s[h]:s),o,a,i));return}if(Ts(a)&&!i)return;const l=a.shapeFlag&4?ui(a.component)||a.component.proxy:a.el,r=i?null:l,{i:c,r:u}=e;if(!c){q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=s&&s.r,d=c.refs===je?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(We(p)?(d[p]=null,Ce(m,p)&&(m[p]=null)):Te(p)&&(p.value=null)),fe(u))_t(u,c,12,[r,d]);else{const f=We(u),h=Te(u);if(f||h){const _=()=>{if(e.f){const w=f?Ce(m,u)?m[u]:d[u]:u.value;i?ue(w)&&Jl(w,l):ue(w)?w.includes(l)||w.push(l):f?(d[u]=[l],Ce(m,u)&&(m[u]=d[u])):(u.value=[l],e.k&&(d[e.k]=u.value))}else f?(d[u]=r,Ce(m,u)&&(m[u]=r)):h?(u.value=r,e.k&&(d[e.k]=r)):q("Invalid template ref type:",u,`(${typeof u})`)};r?(_.id=-1,nn(_,o)):_()}else q("Invalid template ref type:",u,`(${typeof u})`)}}let Bs,St;function ut(e,s){e.appContext.config.performance&&Da()&&St.mark(`vue-${s}-${e.uid}`),mh(e,s,Da()?St.now():Date.now())}function pt(e,s){if(e.appContext.config.performance&&Da()){const o=`vue-${s}-${e.uid}`,a=o+":end";St.mark(a),St.measure(`<${pi(e,e.type)}> ${s}`,o,a),St.clearMarks(o),St.clearMarks(a)}fh(e,s,Da()?St.now():Date.now())}function Da(){return Bs!==void 0||(typeof window<"u"&&window.performance?(Bs=!0,St=window.performance):Bs=!1),Bs}function r_(){const e=[];if(e.length){const s=e.length>1;console.warn(`Feature flag${s?"s":""} ${e.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=wh;function c_(e){return u_(e)}function u_(e,s){r_();const o=La();o.__VUE__=!0,Gp(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:a,remove:i,patchProp:l,createElement:r,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=xn,insertStaticContent:_}=e,w=(g,x,T,W=null,H=null,Z=null,ne=!1,Y=null,Q=At?!1:!!x.dynamicChildren)=>{if(g===x)return;g&&!Xt(g,x)&&(W=ee(g),gn(g,H,Z,!0),g=null),x.patchFlag===-2&&(Q=!1,x.dynamicChildren=null);const{type:V,ref:ce,shapeFlag:re}=x;switch(V){case qo:y(g,x,T,W);break;case hn:$(g,x,T,W);break;case uo:g==null?I(x,T,W,ne):k(g,x,T,ne);break;case Ae:ve(g,x,T,W,H,Z,ne,Y,Q);break;default:re&1?z(g,x,T,W,H,Z,ne,Y,Q):re&6?ke(g,x,T,W,H,Z,ne,Y,Q):re&64||re&128?V.process(g,x,T,W,H,Z,ne,Y,Q,ae):q("Invalid VNode type:",V,`(${typeof V})`)}ce!=null&&H&&cl(ce,g&&g.ref,Z,x||g,!x)},y=(g,x,T,W)=>{if(g==null)a(x.el=c(x.children),T,W);else{const H=x.el=g.el;x.children!==g.children&&p(H,x.children)}},$=(g,x,T,W)=>{g==null?a(x.el=u(x.children||""),T,W):x.el=g.el},I=(g,x,T,W)=>{[g.el,g.anchor]=_(g.children,x,T,W,g.el,g.anchor)},k=(g,x,T,W)=>{if(x.children!==g.children){const H=f(g.anchor);E(g),[x.el,x.anchor]=_(x.children,T,H,W)}else x.el=g.el,x.anchor=g.anchor},M=({el:g,anchor:x},T,W)=>{let H;for(;g&&g!==x;)H=f(g),a(g,T,W),g=H;a(x,T,W)},E=({el:g,anchor:x})=>{let T;for(;g&&g!==x;)T=f(g),i(g),g=T;i(x)},z=(g,x,T,W,H,Z,ne,Y,Q)=>{ne=ne||x.type==="svg",g==null?B(x,T,W,H,Z,ne,Y,Q):le(g,x,H,Z,ne,Y,Q)},B=(g,x,T,W,H,Z,ne,Y)=>{let Q,V;const{type:ce,props:re,shapeFlag:de,transition:_e,dirs:Se}=g;if(Q=g.el=r(g.type,Z,re&&re.is,re),de&8?d(Q,g.children):de&16&&U(g.children,Q,null,W,H,Z&&ce!=="foreignObject",ne,Y),Se&&qt(g,null,W,"created"),D(Q,g,g.scopeId,ne,W),re){for(const Fe in re)Fe!=="value"&&!ha(Fe)&&l(Q,Fe,null,re[Fe],Z,g.children,W,H,P);"value"in re&&l(Q,"value",null,re.value),(V=re.onVnodeBeforeMount)&&zn(V,W,g)}Object.defineProperty(Q,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(Q,"__vueParentComponent",{value:W,enumerable:!1}),Se&&qt(g,null,W,"beforeMount");const He=(!H||H&&!H.pendingBranch)&&_e&&!_e.persisted;He&&_e.beforeEnter(Q),a(Q,x,T),((V=re&&re.onVnodeMounted)||He||Se)&&nn(()=>{V&&zn(V,W,g),He&&_e.enter(Q),Se&&qt(g,null,W,"mounted")},H)},D=(g,x,T,W,H)=>{if(T&&h(g,T),W)for(let Z=0;Z<W.length;Z++)h(g,W[Z]);if(H){let Z=H.subTree;if(Z.patchFlag>0&&Z.patchFlag&2048&&(Z=Jp(Z.children)||Z),x===Z){const ne=H.vnode;D(g,ne,ne.scopeId,ne.slotScopeIds,H.parent)}}},U=(g,x,T,W,H,Z,ne,Y,Q=0)=>{for(let V=Q;V<g.length;V++){const ce=g[V]=Y?Lt(g[V]):qn(g[V]);w(null,ce,x,T,W,H,Z,ne,Y)}},le=(g,x,T,W,H,Z,ne)=>{const Y=x.el=g.el;let{patchFlag:Q,dynamicChildren:V,dirs:ce}=x;Q|=g.patchFlag&16;const re=g.props||je,de=x.props||je;let _e;T&&Vt(T,!1),(_e=de.onVnodeBeforeUpdate)&&zn(_e,T,x,g),ce&&qt(x,g,T,"beforeUpdate"),T&&Vt(T,!0),At&&(Q=0,ne=!1,V=null);const Se=H&&x.type!=="foreignObject";if(V?(me(g.dynamicChildren,V,Y,T,W,Se,Z),Na(g,x)):ne||Le(g,x,Y,null,T,W,Se,Z,!1),Q>0){if(Q&16)X(Y,x,re,de,T,W,H);else if(Q&2&&re.class!==de.class&&l(Y,"class",null,de.class,H),Q&4&&l(Y,"style",re.style,de.style,H),Q&8){const He=x.dynamicProps;for(let Fe=0;Fe<He.length;Fe++){const Ue=He[Fe],Hn=re[Ue],ys=de[Ue];(ys!==Hn||Ue==="value")&&l(Y,Ue,Hn,ys,H,g.children,T,W,P)}}Q&1&&g.children!==x.children&&d(Y,x.children)}else!ne&&V==null&&X(Y,x,re,de,T,W,H);((_e=de.onVnodeUpdated)||ce)&&nn(()=>{_e&&zn(_e,T,x,g),ce&&qt(x,g,T,"updated")},W)},me=(g,x,T,W,H,Z,ne)=>{for(let Y=0;Y<x.length;Y++){const Q=g[Y],V=x[Y],ce=Q.el&&(Q.type===Ae||!Xt(Q,V)||Q.shapeFlag&70)?m(Q.el):T;w(Q,V,ce,null,W,H,Z,ne,!0)}},X=(g,x,T,W,H,Z,ne)=>{if(T!==W){if(T!==je)for(const Y in T)!ha(Y)&&!(Y in W)&&l(g,Y,T[Y],null,ne,x.children,H,Z,P);for(const Y in W){if(ha(Y))continue;const Q=W[Y],V=T[Y];Q!==V&&Y!=="value"&&l(g,Y,V,Q,ne,x.children,H,Z,P)}"value"in W&&l(g,"value",T.value,W.value)}},ve=(g,x,T,W,H,Z,ne,Y,Q)=>{const V=x.el=g?g.el:c(""),ce=x.anchor=g?g.anchor:c("");let{patchFlag:re,dynamicChildren:de,slotScopeIds:_e}=x;(At||re&2048)&&(re=0,Q=!1,de=null),_e&&(Y=Y?Y.concat(_e):_e),g==null?(a(V,T,W),a(ce,T,W),U(x.children,T,ce,H,Z,ne,Y,Q)):re>0&&re&64&&de&&g.dynamicChildren?(me(g.dynamicChildren,de,T,H,Z,ne,Y),Na(g,x)):Le(g,x,T,ce,H,Z,ne,Y,Q)},ke=(g,x,T,W,H,Z,ne,Y,Q)=>{x.slotScopeIds=Y,g==null?x.shapeFlag&512?H.ctx.activate(x,T,W,ne,Q):ye(x,T,W,H,Z,ne,Q):De(g,x,Q)},ye=(g,x,T,W,H,Z,ne)=>{const Y=g.component=x_(g,W,H);if(Y.type.__hmrId&&ah(Y),_a(g),ut(Y,"mount"),hr(g)&&(Y.ctx.renderer=ae),ut(Y,"init"),y_(Y),pt(Y,"init"),Y.asyncDep){if(H&&H.registerDep(Y,oe),!g.el){const Q=Y.subTree=A(hn);$(null,Q,x,T)}return}oe(Y,g,x,T,H,Z,ne),ga(),pt(Y,"mount")},De=(g,x,T)=>{const W=x.component=g.component;if(kh(g,x,T))if(W.asyncDep&&!W.asyncResolved){_a(x),pe(W,x,T),ga();return}else W.next=x,sh(W.update),W.update();else x.el=g.el,W.vnode=x},oe=(g,x,T,W,H,Z,ne)=>{const Y=()=>{if(g.isMounted){let{next:ce,bu:re,u:de,parent:_e,vnode:Se}=g,He=ce,Fe;_a(ce||g.vnode),Vt(g,!1),ce?(ce.el=Se.el,pe(g,ce,ne)):ce=Se,re&&Jt(re),(Fe=ce.props&&ce.props.onVnodeBeforeUpdate)&&zn(Fe,_e,ce,Se),Vt(g,!0),ut(g,"render");const Ue=vi(g);pt(g,"render");const Hn=g.subTree;g.subTree=Ue,ut(g,"patch"),w(Hn,Ue,m(Hn.el),ee(Hn),g,H,Z),pt(g,"patch"),ce.el=Ue.el,He===null&&xh(g,Ue.el),de&&nn(de,H),(Fe=ce.props&&ce.props.onVnodeUpdated)&&nn(()=>zn(Fe,_e,ce,Se),H),Yp(g),ga()}else{let ce;const{el:re,props:de}=x,{bm:_e,m:Se,parent:He}=g,Fe=Ts(x);if(Vt(g,!1),_e&&Jt(_e),!Fe&&(ce=de&&de.onVnodeBeforeMount)&&zn(ce,He,x),Vt(g,!0),re&&Ne){const Ue=()=>{ut(g,"render"),g.subTree=vi(g),pt(g,"render"),ut(g,"hydrate"),Ne(re,g.subTree,g,H,null),pt(g,"hydrate")};Fe?x.type.__asyncLoader().then(()=>!g.isUnmounted&&Ue()):Ue()}else{ut(g,"render");const Ue=g.subTree=vi(g);pt(g,"render"),ut(g,"patch"),w(null,Ue,T,W,g,H,Z),pt(g,"patch"),x.el=Ue.el}if(Se&&nn(Se,H),!Fe&&(ce=de&&de.onVnodeMounted)){const Ue=x;nn(()=>zn(ce,He,Ue),H)}(x.shapeFlag&256||He&&Ts(He.vnode)&&He.vnode.shapeFlag&256)&&g.a&&nn(g.a,H),g.isMounted=!0,el(g),x=T=W=null}},Q=g.effect=new ar(Y,()=>si(V),g.scope),V=g.update=()=>Q.run();V.id=g.uid,Vt(g,!0),Q.onTrack=g.rtc?ce=>Jt(g.rtc,ce):void 0,Q.onTrigger=g.rtg?ce=>Jt(g.rtg,ce):void 0,V.ownerInstance=g,V()},pe=(g,x,T)=>{x.component=g;const W=g.vnode.props;g.vnode=x,g.next=null,Xh(g,x.props,W,T),l_(g,x.children,T),vs(),ic(),bs()},Le=(g,x,T,W,H,Z,ne,Y,Q=!1)=>{const V=g&&g.children,ce=g?g.shapeFlag:0,re=x.children,{patchFlag:de,shapeFlag:_e}=x;if(de>0){if(de&128){Tn(V,re,T,W,H,Z,ne,Y,Q);return}else if(de&256){Pe(V,re,T,W,H,Z,ne,Y,Q);return}}_e&8?(ce&16&&P(V,H,Z),re!==V&&d(T,re)):ce&16?_e&16?Tn(V,re,T,W,H,Z,ne,Y,Q):P(V,H,Z,!0):(ce&8&&d(T,""),_e&16&&U(re,T,W,H,Z,ne,Y,Q))},Pe=(g,x,T,W,H,Z,ne,Y,Q)=>{g=g||Es,x=x||Es;const V=g.length,ce=x.length,re=Math.min(V,ce);let de;for(de=0;de<re;de++){const _e=x[de]=Q?Lt(x[de]):qn(x[de]);w(g[de],_e,T,null,H,Z,ne,Y,Q)}V>ce?P(g,H,Z,!0,!1,re):U(x,T,W,H,Z,ne,Y,Q,re)},Tn=(g,x,T,W,H,Z,ne,Y,Q)=>{let V=0;const ce=x.length;let re=g.length-1,de=ce-1;for(;V<=re&&V<=de;){const _e=g[V],Se=x[V]=Q?Lt(x[V]):qn(x[V]);if(Xt(_e,Se))w(_e,Se,T,null,H,Z,ne,Y,Q);else break;V++}for(;V<=re&&V<=de;){const _e=g[re],Se=x[de]=Q?Lt(x[de]):qn(x[de]);if(Xt(_e,Se))w(_e,Se,T,null,H,Z,ne,Y,Q);else break;re--,de--}if(V>re){if(V<=de){const _e=de+1,Se=_e<ce?x[_e].el:W;for(;V<=de;)w(null,x[V]=Q?Lt(x[V]):qn(x[V]),T,Se,H,Z,ne,Y,Q),V++}}else if(V>de)for(;V<=re;)gn(g[V],H,Z,!0),V++;else{const _e=V,Se=V,He=new Map;for(V=Se;V<=de;V++){const un=x[V]=Q?Lt(x[V]):qn(x[V]);un.key!=null&&(He.has(un.key)&&q("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),He.set(un.key,V))}let Fe,Ue=0;const Hn=de-Se+1;let ys=!1,Yr=0;const Ws=new Array(Hn);for(V=0;V<Hn;V++)Ws[V]=0;for(V=_e;V<=re;V++){const un=g[V];if(Ue>=Hn){gn(un,H,Z,!0);continue}let Qn;if(un.key!=null)Qn=He.get(un.key);else for(Fe=Se;Fe<=de;Fe++)if(Ws[Fe-Se]===0&&Xt(un,x[Fe])){Qn=Fe;break}Qn===void 0?gn(un,H,Z,!0):(Ws[Qn-Se]=V+1,Qn>=Yr?Yr=Qn:ys=!0,w(un,x[Qn],T,null,H,Z,ne,Y,Q),Ue++)}const Zr=ys?p_(Ws):Es;for(Fe=Zr.length-1,V=Hn-1;V>=0;V--){const un=Se+V,Qn=x[un],Qr=un+1<ce?x[un+1].el:W;Ws[V]===0?w(null,Qn,T,Qr,H,Z,ne,Y,Q):ys&&(Fe<0||V!==Zr[Fe]?sn(Qn,T,Qr,2):Fe--)}}},sn=(g,x,T,W,H=null)=>{const{el:Z,type:ne,transition:Y,children:Q,shapeFlag:V}=g;if(V&6){sn(g.component.subTree,x,T,W);return}if(V&128){g.suspense.move(x,T,W);return}if(V&64){ne.move(g,x,T,ae);return}if(ne===Ae){a(Z,x,T);for(let re=0;re<Q.length;re++)sn(Q[re],x,T,W);a(g.anchor,x,T);return}if(ne===uo){M(g,x,T);return}if(W!==2&&V&1&&Y)if(W===0)Y.beforeEnter(Z),a(Z,x,T),nn(()=>Y.enter(Z),H);else{const{leave:re,delayLeave:de,afterLeave:_e}=Y,Se=()=>a(Z,x,T),He=()=>{re(Z,()=>{Se(),_e&&_e()})};de?de(Z,Se,He):He()}else a(Z,x,T)},gn=(g,x,T,W=!1,H=!1)=>{const{type:Z,props:ne,ref:Y,children:Q,dynamicChildren:V,shapeFlag:ce,patchFlag:re,dirs:de}=g;if(Y!=null&&cl(Y,null,T,g,!0),ce&256){x.ctx.deactivate(g);return}const _e=ce&1&&de,Se=!Ts(g);let He;if(Se&&(He=ne&&ne.onVnodeBeforeUnmount)&&zn(He,x,g),ce&6)Mn(g.component,T,W);else{if(ce&128){g.suspense.unmount(T,W);return}_e&&qt(g,null,x,"beforeUnmount"),ce&64?g.type.remove(g,x,T,H,ae,W):V&&(Z!==Ae||re>0&&re&64)?P(V,x,T,!1,!0):(Z===Ae&&re&384||!H&&ce&16)&&P(Q,x,T),W&&Zn(g)}(Se&&(He=ne&&ne.onVnodeUnmounted)||_e)&&nn(()=>{He&&zn(He,x,g),_e&&qt(g,null,x,"unmounted")},T)},Zn=g=>{const{type:x,el:T,anchor:W,transition:H}=g;if(x===Ae){g.patchFlag>0&&g.patchFlag&2048&&H&&!H.persisted?g.children.forEach(ne=>{ne.type===hn?i(ne.el):Zn(ne)}):Bt(T,W);return}if(x===uo){E(g);return}const Z=()=>{i(T),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(g.shapeFlag&1&&H&&!H.persisted){const{leave:ne,delayLeave:Y}=H,Q=()=>ne(T,Z);Y?Y(g.el,Z,Q):Q()}else Z()},Bt=(g,x)=>{let T;for(;g!==x;)T=f(g),i(g),g=T;i(x)},Mn=(g,x,T)=>{g.type.__hmrId&&ih(g);const{bum:W,scope:H,update:Z,subTree:ne,um:Y}=g;W&&Jt(W),H.stop(),Z&&(Z.active=!1,gn(ne,g,x,T)),Y&&nn(Y,x),nn(()=>{g.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve()),dh(g)},P=(g,x,T,W=!1,H=!1,Z=0)=>{for(let ne=Z;ne<g.length;ne++)gn(g[ne],x,T,W,H)},ee=g=>g.shapeFlag&6?ee(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),se=(g,x,T)=>{g==null?x._vnode&&gn(x._vnode,null,null,!0):w(x._vnode||null,g,x,null,null,null,T),ic(),qp(),x._vnode=g},ae={p:w,um:gn,m:sn,r:Zn,mt:ye,mc:U,pc:Le,pbc:me,n:ee,o:e};let Ie,Ne;return s&&([Ie,Ne]=s(ae)),{render:se,hydrate:Ie,createApp:Zh(se,Ie)}}function Vt({effect:e,update:s},o){e.allowRecurse=s.allowRecurse=o}function Na(e,s,o=!1){const a=e.children,i=s.children;if(ue(a)&&ue(i))for(let l=0;l<a.length;l++){const r=a[l];let c=i[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[l]=Lt(i[l]),c.el=r.el),o||Na(r,c)),c.type===qo&&(c.el=r.el),c.type===hn&&!c.el&&(c.el=r.el)}}function p_(e){const s=e.slice(),o=[0];let a,i,l,r,c;const u=e.length;for(a=0;a<u;a++){const p=e[a];if(p!==0){if(i=o[o.length-1],e[i]<p){s[a]=i,o.push(a);continue}for(l=0,r=o.length-1;l<r;)c=l+r>>1,e[o[c]]<p?l=c+1:r=c;p<e[o[l]]&&(l>0&&(s[a]=o[l-1]),o[l]=a)}}for(l=o.length,r=o[l-1];l-- >0;)o[l]=r,r=s[r];return o}const d_=e=>e.__isTeleport,Ms=e=>e&&(e.disabled||e.disabled===""),kc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ul=(e,s)=>{const o=e&&e.to;if(We(o))if(s){const a=s(o);return a||q(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),a}else return q("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!Ms(e)&&q(`Invalid Teleport target: ${o}`),o},m_={__isTeleport:!0,process(e,s,o,a,i,l,r,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:_,createText:w,createComment:y}}=p,$=Ms(s.props);let{shapeFlag:I,children:k,dynamicChildren:M}=s;if(At&&(u=!1,M=null),e==null){const E=s.el=y("teleport start"),z=s.anchor=y("teleport end");h(E,o,a),h(z,o,a);const B=s.target=ul(s.props,_),D=s.targetAnchor=w("");B?(h(D,B),r=r||kc(B)):$||q("Invalid Teleport target on mount:",B,`(${typeof B})`);const U=(le,me)=>{I&16&&d(k,le,me,i,l,r,c,u)};$?U(o,z):B&&U(B,D)}else{s.el=e.el;const E=s.anchor=e.anchor,z=s.target=e.target,B=s.targetAnchor=e.targetAnchor,D=Ms(e.props),U=D?o:z,le=D?E:B;if(r=r||kc(z),M?(f(e.dynamicChildren,M,U,i,l,r,c),Na(e,s,!0)):u||m(e,s,U,le,i,l,r,c,!1),$)D||sa(s,o,E,p,1);else if((s.props&&s.props.to)!==(e.props&&e.props.to)){const me=s.target=ul(s.props,_);me?sa(s,me,null,p,0):q("Invalid Teleport target on update:",z,`(${typeof z})`)}else D&&sa(s,z,B,p,1)}vd(s)},remove(e,s,o,a,{um:i,o:{remove:l}},r){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=e;if(m&&l(d),(r||!Ms(f))&&(l(p),c&16))for(let h=0;h<u.length;h++){const _=u[h];i(_,s,o,!0,!!_.dynamicChildren)}},move:sa,hydrate:f_};function sa(e,s,o,{o:{insert:a},m:i},l=2){l===0&&a(e.targetAnchor,s,o);const{el:r,anchor:c,shapeFlag:u,children:p,props:d}=e,m=l===2;if(m&&a(r,s,o),(!m||Ms(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],s,o,2);m&&a(c,s,o)}function f_(e,s,o,a,i,l,{o:{nextSibling:r,parentNode:c,querySelector:u}},p){const d=s.target=ul(s.props,u);if(d){const m=d._lpa||d.firstChild;if(s.shapeFlag&16)if(Ms(s.props))s.anchor=p(r(e),s,c(e),o,a,i,l),s.targetAnchor=m;else{s.anchor=r(e);let f=m;for(;f;)if(f=r(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&r(s.targetAnchor);break}p(m,s,d,o,a,i,l)}vd(s)}return s.anchor&&r(s.anchor)}const h_=m_;function vd(e){const s=e.ctx;if(s&&s.ut){let o=e.children[0].el;for(;o!==e.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",s.uid),o=o.nextSibling;s.ut()}}const Ae=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),po=[];let Un=null;function b(e=!1){po.push(Un=e?null:[])}function __(){po.pop(),Un=po[po.length-1]||null}let Co=1;function xc(e){Co+=e}function bd(e){return e.dynamicChildren=Co>0?Un||Es:null,__(),Co>0&&Un&&Un.push(e),e}function ie(e,s,o,a,i,l){return bd(n(e,s,o,a,i,l,!0))}function C(e,s,o,a,i){return bd(A(e,s,o,a,i,!0))}function jt(e){return e?e.__v_isVNode===!0:!1}function Xt(e,s){return s.shapeFlag&6&&Ss.has(s.type)?(e.shapeFlag&=-257,s.shapeFlag&=-513,!1):e.type===s.type&&e.key===s.key}const g_=(...e)=>v_(...e),ci="__vInternal",kd=({key:e})=>e??null,va=({ref:e,ref_key:s,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?We(e)||Te(e)||fe(e)?{i:Xe,r:e,k:s,f:!!o}:e:null);function n(e,s=null,o=null,a=0,i=null,l=e===Ae?0:1,r=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:s,key:s&&kd(s),ref:s&&va(s),scopeId:ai,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xe};return c?(br(u,o),l&128&&e.normalize(u)):o&&(u.shapeFlag|=We(o)?8:16),u.key!==u.key&&q("VNode created with invalid key (NaN). VNode type:",u.type),Co>0&&!r&&Un&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&Un.push(u),u}const A=g_;function v_(e,s=null,o=null,a=0,i=null,l=!1){if((!e||e===Ph)&&(e||q(`Invalid vnode type when creating vnode: ${e}.`),e=hn),jt(e)){const c=it(e,s,!0);return o&&br(c,o),Co>0&&!l&&Un&&(c.shapeFlag&6?Un[Un.indexOf(e)]=c:Un.push(c)),c.patchFlag|=-2,c}if(Id(e)&&(e=e.__vccOpts),s){s=F(s);let{class:c,style:u}=s;c&&!We(c)&&(s.class=qe(c)),Oe(u)&&(Ea(u)&&!ue(u)&&(u=Ke({},u)),s.style=tn(u))}const r=We(e)?1:Xp(e)?128:d_(e)?64:Oe(e)?4:fe(e)?2:0;return r&4&&Ea(e)&&(e=ge(e),q("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,s,o,a,i,r,l,!0)}function F(e){return e?Ea(e)||ci in e?Ke({},e):e:null}function it(e,s,o=!1){const{props:a,ref:i,patchFlag:l,children:r}=e,c=s?G(a||{},s):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&kd(c),ref:s&&s.ref?o&&i?ue(i)?i.concat(va(s)):[i,va(s)]:va(s):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l===-1&&ue(r)?r.map(xd):r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:s&&e.type!==Ae?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&it(e.ssContent),ssFallback:e.ssFallback&&it(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xd(e){const s=it(e);return ue(e.children)&&(s.children=e.children.map(xd)),s}function t(e=" ",s=0){return A(qo,null,e,s)}function we(e="",s=!1){return s?(b(),C(hn,null,e)):A(hn,null,e)}function qn(e){return e==null||typeof e=="boolean"?A(hn):ue(e)?A(Ae,null,e.slice()):typeof e=="object"?Lt(e):A(qo,null,String(e))}function Lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:it(e)}function br(e,s){let o=0;const{shapeFlag:a}=e;if(s==null)s=null;else if(ue(s))o=16;else if(typeof s=="object")if(a&65){const i=s.default;i&&(i._c&&(i._d=!1),br(e,i()),i._c&&(i._d=!0));return}else{o=32;const i=s._;!i&&!(ci in s)?s._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?s._=1:(s._=2,e.patchFlag|=1024))}else fe(s)?(s={default:s,_ctx:Xe},o=32):(s=String(s),a&64?(o=16,s=[t(s)]):o=8);e.children=s,e.shapeFlag|=o}function G(...e){const s={};for(let o=0;o<e.length;o++){const a=e[o];for(const i in a)if(i==="class")s.class!==a.class&&(s.class=qe([s.class,a.class]));else if(i==="style")s.style=tn([s.style,a.style]);else if(jo(i)){const l=s[i],r=a[i];r&&l!==r&&!(ue(l)&&l.includes(r))&&(s[i]=l?[].concat(l,r):r)}else i!==""&&(s[i]=a[i])}return s}function zn(e,s,o,a=null){Nn(e,s,7,[o,a])}const b_=pd();let k_=0;function x_(e,s,o){const a=e.type,i=(s?s.appContext:e.appContext)||b_,l={uid:k_++,vnode:e,type:a,parent:s,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:md(a,i),emitsOptions:Qp(a,i),emit:null,emitted:null,propsDefaults:je,inheritAttrs:a.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx=Nh(l),l.root=s?s.root:l,l.emit=_h.bind(null,l),e.ce&&e.ce(l),l}let Je=null;const $n=()=>Je||Xe;let kr,$s,wc="__VUE_INSTANCE_SETTERS__";($s=La()[wc])||($s=La()[wc]=[]),$s.push(e=>Je=e),kr=e=>{$s.length>1?$s.forEach(s=>s(e)):$s[0](e)};const zs=e=>{kr(e),e.scope.on()},ms=()=>{Je&&Je.scope.off(),kr(null)},w_=Ht("slot,component");function pl(e,s){const o=s.isNativeTag||_p;(w_(e)||o(e))&&q("Do not use built-in or reserved HTML elements as component id: "+e)}function wd(e){return e.vnode.shapeFlag&4}let So=!1;function y_(e,s=!1){So=s;const{props:o,children:a}=e.vnode,i=wd(e);Qh(e,o,i,s),i_(e,a);const l=i?$_(e,s):void 0;return So=!1,l}function $_(e,s){var o;const a=e.type;{if(a.name&&pl(a.name,e.appContext.config),a.components){const l=Object.keys(a.components);for(let r=0;r<l.length;r++)pl(l[r],e.appContext.config)}if(a.directives){const l=Object.keys(a.directives);for(let r=0;r<l.length;r++)nd(l[r])}a.compilerOptions&&I_()&&q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ni(new Proxy(e.ctx,cd)),Fh(e);const{setup:i}=a;if(i){const l=e.setupContext=i.length>1?$d(e):null;zs(e),vs();const r=_t(i,e,0,[so(e.props),l]);if(bs(),ms(),er(r)){if(r.then(ms,ms),s)return r.then(c=>{yc(e,c,s)}).catch(c=>{ti(c,e,0)});if(e.asyncDep=r,!e.suspense){const c=(o=a.name)!=null?o:"Anonymous";q(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else yc(e,r,s)}else yd(e,s)}function yc(e,s,o){fe(s)?e.type.__ssrInlineRender?e.ssrRender=s:e.render=s:Oe(s)?(jt(s)&&q("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=s,e.setupState=Fp(s),jh(e)):s!==void 0&&q(`setup() should return an object. Received: ${s===null?"null":typeof s}`),yd(e,o)}let dl;const I_=()=>!dl;function yd(e,s,o){const a=e.type;if(!e.render){if(!s&&dl&&!a.render){const i=a.template||gr(e).template;if(i){ut(e,"compile");const{isCustomElement:l,compilerOptions:r}=e.appContext.config,{delimiters:c,compilerOptions:u}=a,p=Ke(Ke({isCustomElement:l,delimiters:c},r),u);a.render=dl(i,p),pt(e,"compile")}}e.render=a.render||xn}zs(e),vs(),Bh(e),bs(),ms(),!a.render&&e.render===xn&&!s&&(a.template?q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):q("Component is missing template or render function."))}function L_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(s,o){return Ta(),cn(e,"get","$attrs"),s[o]},set(){return q("setupContext.attrs is readonly."),!1},deleteProperty(){return q("setupContext.attrs is readonly."),!1}}))}function C_(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(s,o){return cn(e,"get","$slots"),s[o]}}))}function $d(e){return Object.freeze({get attrs(){return L_(e)},get slots(){return C_(e)},get emit(){return(o,...a)=>e.emit(o,...a)},expose:o=>{if(e.exposed&&q("expose() should be called only once per setup()."),o!=null){let a=typeof o;a==="object"&&(ue(o)?a="array":Te(o)&&(a="ref")),a!=="object"&&q(`expose() should be passed a plain object, received ${a}.`)}e.exposed=o||{}}})}function ui(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fp(ni(e.exposed)),{get(s,o){if(o in s)return s[o];if(o in ds)return ds[o](e)},has(s,o){return o in s||o in ds}}))}const S_=/(?:^|[-_])(\w)/g,R_=e=>e.replace(S_,s=>s.toUpperCase()).replace(/[-_]/g,"");function Ro(e,s=!0){return fe(e)?e.displayName||e.name:e.name||s&&e.__name}function pi(e,s,o=!1){let a=Ro(s);if(!a&&s.__file){const i=s.__file.match(/([^/\\]+)\.\w+$/);i&&(a=i[1])}if(!a&&e&&e.parent){const i=l=>{for(const r in l)if(l[r]===s)return r};a=i(e.components||e.parent.type.components)||i(e.appContext.components)}return a?R_(a):o?"App":"Anonymous"}function Id(e){return fe(e)&&"__vccOpts"in e}const N=(e,s)=>G1(e,s,So);function yn(e,s,o){const a=arguments.length;return a===2?Oe(s)&&!ue(s)?jt(s)?A(e,null,[s]):A(e,s):A(e,null,s):(a>3?o=Array.prototype.slice.call(arguments,2):a===3&&jt(o)&&(o=[o]),A(e,s,o))}const E_=Symbol.for("v-scx"),A_=()=>{{const e=L(E_);return e||q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function wi(e){return!!(e&&e.__v_isShallow)}function T_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},s={style:"color:#0b1bc9"},o={style:"color:#b62e24"},a={style:"color:#9d288c"},i={header(m){return Oe(m)?m.__isVue?["div",e,"VueInstance"]:Te(m)?["div",{},["span",e,d(m)],"<",c(m.value),">"]:us(m)?["div",{},["span",e,wi(m)?"ShallowReactive":"Reactive"],"<",c(m),`>${Ft(m)?" (readonly)":""}`]:Ft(m)?["div",{},["span",e,wi(m)?"ShallowReadonly":"Readonly"],"<",c(m),">"]:null:null},hasBody(m){return m&&m.__isVue},body(m){if(m&&m.__isVue)return["div",{},...l(m.$)]}};function l(m){const f=[];m.type.props&&m.props&&f.push(r("props",ge(m.props))),m.setupState!==je&&f.push(r("setup",m.setupState)),m.data!==je&&f.push(r("data",ge(m.data)));const h=u(m,"computed");h&&f.push(r("computed",h));const _=u(m,"inject");return _&&f.push(r("injected",_)),f.push(["div",{},["span",{style:a.style+";opacity:0.66"},"$ (internal): "],["object",{object:m}]]),f}function r(m,f){return f=Ke({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},m],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",a,h+": "],c(f[h],!1)])]]:["span",{}]}function c(m,f=!0){return typeof m=="number"?["span",s,m]:typeof m=="string"?["span",o,JSON.stringify(m)]:typeof m=="boolean"?["span",a,m]:Oe(m)?["object",{object:f?ge(m):m}]:["span",o,String(m)]}function u(m,f){const h=m.type;if(fe(h))return;const _={};for(const w in m.ctx)p(h,w,f)&&(_[w]=m.ctx[w]);return _}function p(m,f,h){const _=m[h];if(ue(_)&&_.includes(f)||Oe(_)&&f in _||m.extends&&p(m.extends,f,h)||m.mixins&&m.mixins.some(w=>p(w,f,h)))return!0}function d(m){return wi(m)?"ShallowRef":m.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(i):window.devtoolsFormatters=[i]}const Fa="3.3.4",M_="http://www.w3.org/2000/svg",es=typeof document<"u"?document:null,$c=es&&es.createElement("template"),O_={insert:(e,s,o)=>{s.insertBefore(e,o||null)},remove:e=>{const s=e.parentNode;s&&s.removeChild(e)},createElement:(e,s,o,a)=>{const i=s?es.createElementNS(M_,e):es.createElement(e,o?{is:o}:void 0);return e==="select"&&a&&a.multiple!=null&&i.setAttribute("multiple",a.multiple),i},createText:e=>es.createTextNode(e),createComment:e=>es.createComment(e),setText:(e,s)=>{e.nodeValue=s},setElementText:(e,s)=>{e.textContent=s},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>es.querySelector(e),setScopeId(e,s){e.setAttribute(s,"")},insertStaticContent(e,s,o,a,i,l){const r=o?o.previousSibling:s.lastChild;if(i&&(i===l||i.nextSibling))for(;s.insertBefore(i.cloneNode(!0),o),!(i===l||!(i=i.nextSibling)););else{$c.innerHTML=a?`<svg>${e}</svg>`:e;const c=$c.content;if(a){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}s.insertBefore(c,o)}return[r?r.nextSibling:s.firstChild,o?o.previousSibling:s.lastChild]}};function z_(e,s,o){const a=e._vtc;a&&(s=(s?[s,...a]:[...a]).join(" ")),s==null?e.removeAttribute("class"):o?e.setAttribute("class",s):e.className=s}function P_(e,s,o){const a=e.style,i=We(o);if(o&&!i){if(s&&!We(s))for(const l in s)o[l]==null&&ml(a,l,"");for(const l in o)ml(a,l,o[l])}else{const l=a.display;i?s!==o&&(a.cssText=o):s&&e.removeAttribute("style"),"_vod"in e&&(a.display=l)}}const D_=/[^\\];\s*$/,Ic=/\s*!important$/;function ml(e,s,o){if(ue(o))o.forEach(a=>ml(e,s,a));else if(o==null&&(o=""),D_.test(o)&&q(`Unexpected semicolon at the end of '${s}' style value: '${o}'`),s.startsWith("--"))e.setProperty(s,o);else{const a=N_(e,s);Ic.test(o)?e.setProperty(gt(a),o.replace(Ic,""),"important"):e[a]=o}}const Lc=["Webkit","Moz","ms"],yi={};function N_(e,s){const o=yi[s];if(o)return o;let a=st(s);if(a!=="filter"&&a in e)return yi[s]=a;a=_s(a);for(let i=0;i<Lc.length;i++){const l=Lc[i]+a;if(l in e)return yi[s]=l}return s}const Cc="http://www.w3.org/1999/xlink";function F_(e,s,o,a,i){if(a&&s.startsWith("xlink:"))o==null?e.removeAttributeNS(Cc,s.slice(6,s.length)):e.setAttributeNS(Cc,s,o);else{const l=r1(s);o==null||l&&!xp(o)?e.removeAttribute(s):e.setAttribute(s,l?"":o)}}function j_(e,s,o,a,i,l,r){if(s==="innerHTML"||s==="textContent"){a&&r(a,i,l),e[s]=o??"";return}const c=e.tagName;if(s==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=o;const p=c==="OPTION"?e.getAttribute("value"):e.value,d=o??"";p!==d&&(e.value=d),o==null&&e.removeAttribute(s);return}let u=!1;if(o===""||o==null){const p=typeof e[s];p==="boolean"?o=xp(o):o==null&&p==="string"?(o="",u=!0):p==="number"&&(o=0,u=!0)}try{e[s]=o}catch(p){u||q(`Failed setting prop "${s}" on <${c.toLowerCase()}>: value ${o} is invalid.`,p)}u&&e.removeAttribute(s)}function K_(e,s,o,a){e.addEventListener(s,o,a)}function H_(e,s,o,a){e.removeEventListener(s,o,a)}function W_(e,s,o,a,i=null){const l=e._vei||(e._vei={}),r=l[s];if(a&&r)r.value=a;else{const[c,u]=B_(s);if(a){const p=l[s]=U_(a,i);K_(e,c,p,u)}else r&&(H_(e,c,r,u),l[s]=void 0)}}const Sc=/(?:Once|Passive|Capture)$/;function B_(e){let s;if(Sc.test(e)){s={};let a;for(;a=e.match(Sc);)e=e.slice(0,e.length-a[0].length),s[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),s]}let $i=0;const q_=Promise.resolve(),V_=()=>$i||(q_.then(()=>$i=0),$i=Date.now());function U_(e,s){const o=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=o.attached)return;Nn(G_(a,o.value),s,5,[a])};return o.value=e,o.attached=V_(),o}function G_(e,s){if(ue(s)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},s.map(a=>i=>!i._stopped&&a&&a(i))}else return s}const Rc=/^on[a-z]/,Y_=(e,s,o,a,i=!1,l,r,c,u)=>{s==="class"?z_(e,a,i):s==="style"?P_(e,o,a):jo(s)?$a(s)||W_(e,s,o,a,r):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Z_(e,s,a,i))?j_(e,s,a,l,r,c,u):(s==="true-value"?e._trueValue=a:s==="false-value"&&(e._falseValue=a),F_(e,s,a,i))};function Z_(e,s,o,a){return a?!!(s==="innerHTML"||s==="textContent"||s in e&&Rc.test(s)&&fe(o)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&e.tagName==="INPUT"||s==="type"&&e.tagName==="TEXTAREA"||Rc.test(s)&&We(o)?!1:s in e}function Ld(e){const s=$n();if(!s){q("useCssVars is called without current active component instance.");return}const o=s.ut=(i=e(s.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${s.uid}"]`)).forEach(l=>hl(l,i))},a=()=>{const i=e(s.proxy);fl(s.subTree,i),o(i)};yh(a),kt(()=>{const i=new MutationObserver(a);i.observe(s.subTree.el.parentNode,{childList:!0}),Bo(()=>i.disconnect())})}function fl(e,s){if(e.shapeFlag&128){const o=e.suspense;e=o.activeBranch,o.pendingBranch&&!o.isHydrating&&o.effects.push(()=>{fl(o.activeBranch,s)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)hl(e.el,s);else if(e.type===Ae)e.children.forEach(o=>fl(o,s));else if(e.type===uo){let{el:o,anchor:a}=e;for(;o&&(hl(o,s),o!==a);)o=o.nextSibling}}function hl(e,s){if(e.nodeType===1){const o=e.style;for(const a in s)o.setProperty(`--${a}`,s[a])}}const wt="transition",qs="animation",Cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Q_=Ke({},Lh,Cd),Ut=(e,s=[])=>{ue(e)?e.forEach(o=>o(...s)):e&&e(...s)},Ec=e=>e?ue(e)?e.some(s=>s.length>1):e.length>1:!1;function J_(e){const s={};for(const X in e)X in Cd||(s[X]=e[X]);if(e.css===!1)return s;const{name:o="v",type:a,duration:i,enterFromClass:l=`${o}-enter-from`,enterActiveClass:r=`${o}-enter-active`,enterToClass:c=`${o}-enter-to`,appearFromClass:u=l,appearActiveClass:p=r,appearToClass:d=c,leaveFromClass:m=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:h=`${o}-leave-to`}=e,_=X_(i),w=_&&_[0],y=_&&_[1],{onBeforeEnter:$,onEnter:I,onEnterCancelled:k,onLeave:M,onLeaveCancelled:E,onBeforeAppear:z=$,onAppear:B=I,onAppearCancelled:D=k}=s,U=(X,ve,ke)=>{$t(X,ve?d:c),$t(X,ve?p:r),ke&&ke()},le=(X,ve)=>{X._isLeaving=!1,$t(X,m),$t(X,h),$t(X,f),ve&&ve()},me=X=>(ve,ke)=>{const ye=X?B:I,De=()=>U(ve,X,ke);Ut(ye,[ve,De]),Ac(()=>{$t(ve,X?u:l),dt(ve,X?d:c),Ec(ye)||Tc(ve,a,w,De)})};return Ke(s,{onBeforeEnter(X){Ut($,[X]),dt(X,l),dt(X,r)},onBeforeAppear(X){Ut(z,[X]),dt(X,u),dt(X,p)},onEnter:me(!1),onAppear:me(!0),onLeave(X,ve){X._isLeaving=!0;const ke=()=>le(X,ve);dt(X,m),Rd(),dt(X,f),Ac(()=>{X._isLeaving&&($t(X,m),dt(X,h),Ec(M)||Tc(X,a,y,ke))}),Ut(M,[X,ke])},onEnterCancelled(X){U(X,!1),Ut(k,[X])},onAppearCancelled(X){U(X,!0),Ut(D,[X])},onLeaveCancelled(X){le(X),Ut(E,[X])}})}function X_(e){if(e==null)return null;if(Oe(e))return[Ii(e.enter),Ii(e.leave)];{const s=Ii(e);return[s,s]}}function Ii(e){const s=Xf(e);return X1(s,"<transition> explicit duration"),s}function dt(e,s){s.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e._vtc||(e._vtc=new Set)).add(s)}function $t(e,s){s.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const{_vtc:o}=e;o&&(o.delete(s),o.size||(e._vtc=void 0))}function Ac(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let eg=0;function Tc(e,s,o,a){const i=e._endId=++eg,l=()=>{i===e._endId&&a()};if(o)return setTimeout(l,o);const{type:r,timeout:c,propCount:u}=Sd(e,s);if(!r)return a();const p=r+"end";let d=0;const m=()=>{e.removeEventListener(p,f),l()},f=h=>{h.target===e&&++d>=u&&m()};setTimeout(()=>{d<u&&m()},c+1),e.addEventListener(p,f)}function Sd(e,s){const o=window.getComputedStyle(e),a=_=>(o[_]||"").split(", "),i=a(`${wt}Delay`),l=a(`${wt}Duration`),r=Mc(i,l),c=a(`${qs}Delay`),u=a(`${qs}Duration`),p=Mc(c,u);let d=null,m=0,f=0;s===wt?r>0&&(d=wt,m=r,f=l.length):s===qs?p>0&&(d=qs,m=p,f=u.length):(m=Math.max(r,p),d=m>0?r>p?wt:qs:null,f=d?d===wt?l.length:u.length:0);const h=d===wt&&/\b(transform|all)(,|$)/.test(a(`${wt}Property`).toString());return{type:d,timeout:m,propCount:f,hasTransform:h}}function Mc(e,s){for(;e.length<s.length;)e=e.concat(e);return Math.max(...s.map((o,a)=>Oc(o)+Oc(e[a])))}function Oc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Rd(){return document.body.offsetHeight}const Ed=new WeakMap,Ad=new WeakMap,Td={name:"TransitionGroup",props:Ke({},Q_,{tag:String,moveClass:String}),setup(e,{slots:s}){const o=$n(),a=Ih();let i,l;return ri(()=>{if(!i.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!ig(i[0].el,o.vnode.el,r))return;i.forEach(sg),i.forEach(og);const c=i.filter(ag);Rd(),c.forEach(u=>{const p=u.el,d=p.style;dt(p,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=p._moveCb=f=>{f&&f.target!==p||(!f||/transform$/.test(f.propertyName))&&(p.removeEventListener("transitionend",m),p._moveCb=null,$t(p,r))};p.addEventListener("transitionend",m)})}),()=>{const r=ge(e),c=J_(r);let u=r.tag||Ae;i=l,l=s.default?sd(s.default()):[];for(let p=0;p<l.length;p++){const d=l[p];d.key!=null?Ma(d,tl(d,c,a,o)):q("<TransitionGroup> children must be keyed.")}if(i)for(let p=0;p<i.length;p++){const d=i[p];Ma(d,tl(d,c,a,o)),Ed.set(d,d.el.getBoundingClientRect())}return A(u,null,l)}}},ng=e=>delete e.mode;Td.props;const tg=Td;function sg(e){const s=e.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function og(e){Ad.set(e,e.el.getBoundingClientRect())}function ag(e){const s=Ed.get(e),o=Ad.get(e),a=s.left-o.left,i=s.top-o.top;if(a||i){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${a}px,${i}px)`,l.transitionDuration="0s",e}}function ig(e,s,o){const a=e.cloneNode();e._vtc&&e._vtc.forEach(r=>{r.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),o.split(/\s+/).forEach(r=>r&&a.classList.add(r)),a.style.display="none";const i=s.nodeType===1?s:s.parentNode;i.appendChild(a);const{hasTransform:l}=Sd(a);return i.removeChild(a),l}const lg=["ctrl","shift","alt","meta"],rg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,s)=>lg.some(o=>e[`${o}Key`]&&!s.includes(o))},cg=(e,s)=>(o,...a)=>{for(let i=0;i<s.length;i++){const l=rg[s[i]];if(l&&l(o,s))return}return e(o,...a)},ug={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oa=(e,s)=>o=>{if(!("key"in o))return;const a=gt(o.key);if(s.some(i=>i===a||ug[i]===a))return e(o)},Md={beforeMount(e,{value:s},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&s?o.beforeEnter(e):Vs(e,s)},mounted(e,{value:s},{transition:o}){o&&s&&o.enter(e)},updated(e,{value:s,oldValue:o},{transition:a}){!s!=!o&&(a?s?(a.beforeEnter(e),Vs(e,!0),a.enter(e)):a.leave(e,()=>{Vs(e,!1)}):Vs(e,s))},beforeUnmount(e,{value:s}){Vs(e,s)}};function Vs(e,s){e.style.display=s?e._vod:"none"}const pg=Ke({patchProp:Y_},O_);let zc;function dg(){return zc||(zc=c_(pg))}const mg=(...e)=>{const s=dg().createApp(...e);fg(s),hg(s);const{mount:o}=s;return s.mount=a=>{const i=_g(a);if(!i)return;const l=s._component;!fe(l)&&!l.render&&!l.template&&(l.template=i.innerHTML),i.innerHTML="";const r=o(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},s};function fg(e){Object.defineProperty(e.config,"isNativeTag",{value:s=>kp(s)||i1(s),writable:!1})}function hg(e){{const s=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return s},set(){q("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=e.config.compilerOptions,a='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return q(a),o},set(){q(a)}})}}function _g(e){if(We(e)){const s=document.querySelector(e);return s||q(`Failed to mount app: mount target selector "${e}" returned null.`),s}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&q('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function gg(){T_()}gg();function _l(e,s={},o){for(const a in e){const i=e[a],l=o?`${o}:${a}`:a;typeof i=="object"&&i!==null?_l(i,s,l):typeof i=="function"&&(s[l]=i)}return s}const vg={run:e=>e()},bg=()=>vg,Od=typeof console.createTask<"u"?console.createTask:bg;function kg(e,s){const o=s.shift(),a=Od(o);return e.reduce((i,l)=>i.then(()=>a.run(()=>l(...s))),Promise.resolve())}function xg(e,s){const o=s.shift(),a=Od(o);return Promise.all(e.map(i=>a.run(()=>i(...s))))}function Li(e,s){for(const o of[...e])o(s)}class wg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,o,a={}){if(!s||typeof o!="function")return()=>{};const i=s;let l;for(;this._deprecatedHooks[s];)l=this._deprecatedHooks[s],s=l.to;if(l&&!a.allowDeprecated){let r=l.message;r||(r=`${i} hook has been deprecated`+(l.to?`, please use ${l.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!o.name)try{Object.defineProperty(o,"name",{get:()=>"_"+s.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(o),()=>{o&&(this.removeHook(s,o),o=void 0)}}hookOnce(s,o){let a,i=(...l)=>(typeof a=="function"&&a(),a=void 0,i=void 0,o(...l));return a=this.hook(s,i),a}removeHook(s,o){if(this._hooks[s]){const a=this._hooks[s].indexOf(o);a!==-1&&this._hooks[s].splice(a,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,o){this._deprecatedHooks[s]=typeof o=="string"?{to:o}:o;const a=this._hooks[s]||[];delete this._hooks[s];for(const i of a)this.hook(s,i)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const o in s)this.deprecateHook(o,s[o])}addHooks(s){const o=_l(s),a=Object.keys(o).map(i=>this.hook(i,o[i]));return()=>{for(const i of a.splice(0,a.length))i()}}removeHooks(s){const o=_l(s);for(const a in o)this.removeHook(a,o[a])}removeAllHooks(){for(const s in this._hooks)delete this._hooks[s]}callHook(s,...o){return o.unshift(s),this.callHookWith(kg,s,...o)}callHookParallel(s,...o){return o.unshift(s),this.callHookWith(xg,s,...o)}callHookWith(s,o,...a){const i=this._before||this._after?{name:o,args:a,context:{}}:void 0;this._before&&Li(this._before,i);const l=s(o in this._hooks?[...this._hooks[o]]:[],a);return l instanceof Promise?l.finally(()=>{this._after&&i&&Li(this._after,i)}):(this._after&&i&&Li(this._after,i),l)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{if(this._before!==void 0){const o=this._before.indexOf(s);o!==-1&&this._before.splice(o,1)}}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{if(this._after!==void 0){const o=this._after.indexOf(s);o!==-1&&this._after.splice(o,1)}}}}function yg(){return new wg}function $g(e){return Array.isArray(e)?e:[e]}const zd=["title","script","style","noscript"],Pd=["base","meta","link","style","script","noscript"],Ig=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Lg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Cg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Dd(e){let s=9;for(let o=0;o<e.length;)s=Math.imul(s^e.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function gl(e){return Dd(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([s,o])=>`${s}:${String(o)}`).join(",")}`)}function Sg(e){let s=9;for(const o of e)for(let a=0;a<o.length;)s=Math.imul(s^o.charCodeAt(a++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Nd(e,s){const{props:o,tag:a}=e;if(Lg.includes(a))return a;if(a==="link"&&o.rel==="canonical")return"canonical";if(o.charset)return"charset";const i=["id"];a==="meta"&&i.push("name","property","http-equiv");for(const l of i)if(typeof o[l]<"u"){const r=String(o[l]);return s&&!s(r)?!1:`${a}:${l}:${r}`}return!1}function Pc(e,s){return e==null?s||null:typeof e=="function"?e(s):e}function aa(e,s=!1,o){const{tag:a,$el:i}=e;i&&(Object.entries(a.props).forEach(([l,r])=>{r=String(r);const c=`attr:${l}`;if(l==="class"){if(!r)return;for(const u of r.split(" ")){const p=`${c}:${u}`;o&&o(e,p,()=>i.classList.remove(u)),i.classList.contains(u)||i.classList.add(u)}return}o&&!l.startsWith("data-h-")&&o(e,c,()=>i.removeAttribute(l)),(s||i.getAttribute(l)!==r)&&i.setAttribute(l,r)}),zd.includes(a.tag)&&(a.textContent&&a.textContent!==i.textContent?i.textContent=a.textContent:a.innerHTML&&a.innerHTML!==i.innerHTML&&(i.innerHTML=a.innerHTML)))}let Us=!1;async function Fd(e,s={}){var f,h;const o={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const a=s.document||e.resolvedOptions.document||window.document,i=(await e.resolveTags()).map(c);if(e.resolvedOptions.experimentalHashHydration&&(Us=Us||e._hash||!1,Us)){const _=Sg(i.map(w=>w.tag._h));if(Us===_)return;Us=_}const l=e._popSideEffectQueue();e.headEntries().map(_=>_._sde).forEach(_=>{Object.entries(_).forEach(([w,y])=>{l[w]=y})});const r=(_,w,y)=>{w=`${_.renderId}:${w}`,_.entry&&(_.entry._sde[w]=y),delete l[w]};function c(_){const w=e.headEntries().find($=>$._i===_._e),y={renderId:_._d||gl(_),$el:null,shouldRender:!0,tag:_,entry:w,markSideEffect:($,I)=>r(y,$,I)};return y}const u=[],p={body:[],head:[]},d=_=>{e._elMap[_.renderId]=_.$el,u.push(_),r(_,"el",()=>{var w;(w=_.$el)==null||w.remove(),delete e._elMap[_.renderId]})};for(const _ of i){if(await e.hooks.callHook("dom:beforeRenderTag",_),!_.shouldRender)continue;const{tag:w}=_;if(w.tag==="title"){a.title=w.textContent||"",u.push(_);continue}if(w.tag==="htmlAttrs"||w.tag==="bodyAttrs"){_.$el=a[w.tag==="htmlAttrs"?"documentElement":"body"],aa(_,!1,r),u.push(_);continue}if(_.$el=e._elMap[_.renderId],!_.$el&&w.key&&(_.$el=a.querySelector(`${(f=w.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${w.tag}[data-h-${w._h}]`)),_.$el){_.tag._d&&aa(_),d(_);continue}p[(h=w.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(_)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([_,w])=>{var $;if(!w.length)return;const y=($=a==null?void 0:a[_])==null?void 0:$.children;if(y){for(const I of[...y].reverse()){const k=I.tagName.toLowerCase();if(!Pd.includes(k))continue;const M=I.getAttributeNames().reduce((D,U)=>({...D,[U]:I.getAttribute(U)}),{}),E={tag:k,props:M};I.innerHTML&&(E.innerHTML=I.innerHTML);const z=gl(E);let B=w.findIndex(D=>(D==null?void 0:D.renderId)===z);if(B===-1){const D=Nd(E);B=w.findIndex(U=>(U==null?void 0:U.tag._d)&&U.tag._d===D)}if(B!==-1){const D=w[B];D.$el=I,aa(D),d(D),delete w[B]}}w.forEach(I=>{const k=I.tag.tagPosition||"head";m[k]=m[k]||a.createDocumentFragment(),I.$el||(I.$el=a.createElement(I.tag.tag),aa(I,!0)),m[k].appendChild(I.$el),d(I)})}}),m.head&&a.head.appendChild(m.head),m.bodyOpen&&a.body.insertBefore(m.bodyOpen,a.body.firstChild),m.bodyClose&&a.body.appendChild(m.bodyClose);for(const _ of u)await e.hooks.callHook("dom:renderTag",_);Object.values(l).forEach(_=>_())}let Ci=null;async function jd(e,s={}){function o(){return Ci=null,Fd(e,s)}const a=s.delayFn||(i=>setTimeout(i,10));return Ci=Ci||new Promise(i=>a(()=>i(o())))}function Rg(e){return{hooks:{"entries:updated":function(s){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let o=e==null?void 0:e.delayFn;!o&&typeof requestAnimationFrame<"u"&&(o=requestAnimationFrame),jd(s,{document:(e==null?void 0:e.document)||window.document,delayFn:o})}}}}function Eg(e){var s;return((s=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const Dc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Nc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const s=e.tagPriority||e.tag;return s in Dc?Dc[s]:10}const Ag=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Tg(){return{hooks:{"tags:resolve":e=>{const s=o=>{var a;return(a=e.tags.find(i=>i._d===o))==null?void 0:a._p};for(const{prefix:o,offset:a}of Ag)for(const i of e.tags.filter(l=>typeof l.tagPriority=="string"&&l.tagPriority.startsWith(o))){const l=s(i.tagPriority.replace(o,""));typeof l<"u"&&(i._p=l+a)}e.tags.sort((o,a)=>o._p-a._p).sort((o,a)=>Nc(o)-Nc(a))}}}}function Mg(){return{hooks:{"tags:resolve":e=>{const{tags:s}=e;let o=s.findIndex(i=>i.tag==="titleTemplate");const a=s.findIndex(i=>i.tag==="title");if(a!==-1&&o!==-1){const i=Pc(s[o].textContent,s[a].textContent);i!==null?s[a].textContent=i||s[a].textContent:delete s[a]}else if(o!==-1){const i=Pc(s[o].textContent);i!==null&&(s[o].textContent=i,s[o].tag="title",o=-1)}o!==-1&&delete s[o],e.tags=s.filter(Boolean)}}}}function Og(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const zg=["link","style","script","noscript"];function Pg(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:s})=>{s.experimentalHashHydration===!0&&(e._h=gl(e)),e.key&&zg.includes(e.tag)&&(e._h=Dd(e.key),e.props[`data-h-${e._h}`]="")}}}}const Fc=["script","link","bodyAttrs"];function Dg(){const e=(s,o)=>{const a={},i={};Object.entries(o.props).forEach(([r,c])=>{r.startsWith("on")&&typeof c=="function"?i[r]=c:a[r]=c});let l;return s==="dom"&&o.tag==="script"&&typeof a.src=="string"&&typeof i.onload<"u"&&(l=a.src,delete a.src),{props:a,eventHandlers:i,delayedSrc:l}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(o=>(!Fc.includes(o.tag)||!Object.entries(o.props).find(([a,i])=>a.startsWith("on")&&typeof i=="function")||(o.props=e("ssr",o).props),o))},"dom:beforeRenderTag":function(s){if(!Fc.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([l,r])=>l.startsWith("on")&&typeof r=="function"))return;const{props:o,eventHandlers:a,delayedSrc:i}=e("dom",s.tag);Object.keys(a).length&&(s.tag.props=o,s.tag._eventHandlers=a,s.tag._delayedSrc=i)},"dom:renderTag":function(s){const o=s.$el;if(!s.tag._eventHandlers||!o)return;const a=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:o;Object.entries(s.tag._eventHandlers).forEach(([i,l])=>{const r=`${s.tag._d||s.tag._p}:${i}`,c=i.slice(2).toLowerCase(),u=`data-h-${c}`;if(s.markSideEffect(r,()=>{}),o.hasAttribute(u))return;const p=l;o.setAttribute(u,""),a.addEventListener(c,p),s.entry&&(s.entry._sde[r]=()=>{a.removeEventListener(c,p),o.removeAttribute(u)})}),s.tag._delayedSrc&&o.setAttribute("src",s.tag._delayedSrc)}}}}const Ng=["templateParams","htmlAttrs","bodyAttrs"];function Fg(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(a=>{e.props[a]&&(e.key=e.props[a],delete e.props[a])});const o=Nd(e)||(e.key?`${e.tag}:${e.key}`:!1);o&&(e._d=o)},"tags:resolve":function(e){const s={};e.tags.forEach(a=>{const i=(a.key?`${a.tag}:${a.key}`:a._d)||a._p,l=s[i];if(l){let c=a==null?void 0:a.tagDuplicateStrategy;if(!c&&Ng.includes(a.tag)&&(c="merge"),c==="merge"){const u=l.props;["class","style"].forEach(p=>{a.props[p]&&u[p]&&(p==="style"&&!u[p].endsWith(";")&&(u[p]+=";"),a.props[p]=`${u[p]} ${a.props[p]}`)}),s[i].props={...u,...a.props};return}else if(a._e===l._e){l._duped=l._duped||[],a._d=`${l._d}:${l._duped.length+1}`,l._duped.push(a);return}}const r=Object.keys(a.props).length+(a.innerHTML?1:0)+(a.textContent?1:0);if(Pd.includes(a.tag)&&r===0){delete s[i];return}s[i]=a});const o=[];Object.values(s).forEach(a=>{const i=a._duped;delete a._duped,o.push(a),i&&o.push(...i)}),e.tags=o}}}}function ia(e,s){function o(l){if(["s","pageTitle"].includes(l))return s.pageTitle;let r;return l.includes(".")?r=l.split(".").reduce((c,u)=>c&&c[u]||void 0,s):r=s[l],typeof r<"u"?r||"":!1}let a=e;try{a=decodeURI(e)}catch{}return(a.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(l=>{const r=o(l.slice(1));typeof r=="string"&&(e=e.replace(new RegExp(`\\${l}(\\W|$)`,"g"),`${r}$1`).trim())}),s.separator&&(e.endsWith(s.separator)&&(e=e.slice(0,-s.separator.length).trim()),e.startsWith(s.separator)&&(e=e.slice(s.separator.length).trim()),e=e.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),e}function jg(){return{hooks:{"tags:resolve":e=>{var l;const{tags:s}=e,o=(l=s.find(r=>r.tag==="title"))==null?void 0:l.textContent,a=s.findIndex(r=>r.tag==="templateParams"),i=a!==-1?s[a].props:{};i.pageTitle=i.pageTitle||o||"";for(const r of s)if(["titleTemplate","title"].includes(r.tag)&&typeof r.textContent=="string")r.textContent=ia(r.textContent,i);else if(r.tag==="meta"&&typeof r.props.content=="string")r.props.content=ia(r.props.content,i);else if(r.tag==="link"&&typeof r.props.href=="string")r.props.href=ia(r.props.href,i);else if(r.tag==="script"&&["application/json","application/ld+json"].includes(r.props.type)&&typeof r.innerHTML=="string")try{r.innerHTML=JSON.stringify(JSON.parse(r.innerHTML),(c,u)=>typeof u=="string"?ia(u,i):u)}catch{}e.tags=s.filter(r=>r.tag!=="templateParams")}}}}const Kg=typeof window<"u";let Kd;function Hg(e){return Kd=e}function Wg(){return Kd}async function Bg(e,s){const o={tag:e,props:{}};return e==="templateParams"?(o.props=s,o):["title","titleTemplate"].includes(e)?(o.textContent=s instanceof Promise?await s:s,o):typeof s=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?o.props.src=s:o.innerHTML=s,o):!1:(o.props=await Vg(e,{...s}),o.props.children&&(o.props.innerHTML=o.props.children),delete o.props.children,Object.keys(o.props).filter(a=>Cg.includes(a)).forEach(a=>{(!["innerHTML","textContent"].includes(a)||zd.includes(o.tag))&&(o[a]=o.props[a]),delete o.props[a]}),["innerHTML","textContent"].forEach(a=>{if(o.tag==="script"&&typeof o[a]=="string"&&["application/ld+json","application/json"].includes(o.props.type))try{o[a]=JSON.parse(o[a])}catch{o[a]=""}typeof o[a]=="object"&&(o[a]=JSON.stringify(o[a]))}),o.props.class&&(o.props.class=qg(o.props.class)),o.props.content&&Array.isArray(o.props.content)?o.props.content.map(a=>({...o,props:{...o.props,content:a}})):o)}function qg(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(s=>e[s])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function Vg(e,s){for(const o of Object.keys(s)){const a=o.startsWith("data-");s[o]instanceof Promise&&(s[o]=await s[o]),String(s[o])==="true"?s[o]=a?"true":"":String(s[o])==="false"&&(a?s[o]="false":delete s[o])}return s}const Ug=10;async function Gg(e){const s=[];return Object.entries(e.resolvedInput).filter(([o,a])=>typeof a<"u"&&Ig.includes(o)).forEach(([o,a])=>{const i=$g(a);s.push(...i.map(l=>Bg(o,l)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((o,a)=>(o._e=e._i,o._p=(e._i<<Ug)+a,o))}function Yg(){return[Fg(),Tg(),jg(),Mg(),Pg(),Dg(),Og()]}function Zg(e={}){return[Rg({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Qg(e={}){const s=Jg({...e,plugins:[...Zg(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=Eg(s.resolvedOptions.document)),Hg(s),s}function Jg(e={}){let s=[],o={},a=0;const i=yg();e!=null&&e.hooks&&i.addHooks(e.hooks),e.plugins=[...Yg(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(c=>c.hooks&&i.addHooks(c.hooks)),e.document=e.document||(Kg?document:void 0);const l=()=>i.callHook("entries:updated",r),r={resolvedOptions:e,headEntries(){return s},get hooks(){return i},use(c){c.hooks&&i.addHooks(c.hooks)},push(c,u){const p={_i:a++,input:c,_sde:{}};return u!=null&&u.mode&&(p._m=u==null?void 0:u.mode),u!=null&&u.transform&&(p._t=u==null?void 0:u.transform),s.push(p),l(),{dispose(){s=s.filter(d=>d._i!==p._i?!0:(o={...o,...d._sde||{}},d._sde={},l(),!1))},patch(d){s=s.map(m=>(m._i===p._i&&(p.input=m.input=d,l()),m))}}},async resolveTags(){const c={tags:[],entries:[...s]};await i.callHook("entries:resolve",c);for(const u of c.entries){const p=u._t||(d=>d);if(u.resolvedInput=p(u.resolvedInput||u.input),u.resolvedInput)for(const d of await Gg(u)){const m={tag:d,entry:u,resolvedOptions:r.resolvedOptions};await i.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await i.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...o};return o={},c},_elMap:{}};return r.hooks.callHook("init",r),r}function Xg(e){return typeof e=="function"?e():O(e)}function ja(e,s=""){if(e instanceof Promise)return e;const o=Xg(e);return!e||!o?o:Array.isArray(o)?o.map(a=>ja(a,s)):typeof o=="object"?Object.fromEntries(Object.entries(o).map(([a,i])=>a==="titleTemplate"||a.startsWith("on")?[a,O(i)]:[a,ja(i,a)])):o}const e0=Fa.startsWith("3"),n0=typeof window<"u",Hd="usehead";function xr(){return $n()&&L(Hd)||Wg()}function t0(e){return{install(o){e0&&(o.config.globalProperties.$unhead=e,o.config.globalProperties.$head=e,o.provide(Hd,e))}}.install}function s0(e={}){const s=Qg({...e,domDelayFn:o=>setTimeout(()=>an(()=>o()),10),plugins:[o0(),...(e==null?void 0:e.plugins)||[]]});return s.install=t0(s),s}function o0(){return{hooks:{"entries:resolve":function(e){for(const s of e.entries)s.resolvedInput=ja(s.input)}}}}function a0(e,s={}){const o=xr(),a=J(!1),i=J({});ks(()=>{i.value=a.value?{}:ja(e)});const l=o.push(i.value,s);return be(i,c=>{l.patch(c)}),$n()&&(Wo(()=>{l.dispose()}),id(()=>{a.value=!0}),ad(()=>{a.value=!1})),l}function i0(e,s={}){return xr().push(e,s)}function Wd(e,s={}){var a;const o=xr();if(o){const i=n0||!!((a=o.resolvedOptions)!=null&&a.document);return s.mode==="server"&&i||s.mode==="client"&&!i?void 0:i?a0(e,s):i0(e,s)}}function l0(e,s){const o=s0(s||{}),a={unhead:o,install(i){Fa.startsWith("3")&&(i.config.globalProperties.$head=o,i.provide("usehead",o))},use(i){o.use(i)},resolveTags(){return o.resolveTags()},headEntries(){return o.headEntries()},headTags(){return o.resolveTags()},push(i,l){return o.push(i,l)},addEntry(i,l){return o.push(i,l)},addHeadObjs(i,l){return o.push(i,l)},addReactiveEntry(i,l){const r=Wd(i,l);return typeof r<"u"?r.dispose:()=>{}},removeHeadObjs(){},updateDOM(i,l){l?Fd(o,{document:i}):jd(o,{delayFn:r=>setTimeout(()=>r(),50),document:i})},internalHooks:o.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return o.addHeadObjs=a.addHeadObjs,o.updateDOM=a.updateDOM,o.hooks.hook("dom:beforeRender",i=>{for(const l of a.hooks["before:dom"])l()===!1&&(i.shouldRender=!1)}),e&&a.addHeadObjs(e),a}const mo=Symbol("v-click-clicks"),ns=Symbol("v-click-clicks-elements"),vl=Symbol("v-click-clicks-order-map"),fo=Symbol("v-click-clicks-disabled"),Bd=Symbol("slidev-slide-scale"),S=Symbol("slidev-slidev-context"),r0=Symbol("slidev-route"),c0=Symbol("slidev-slide-context"),Qt="slidev-vclick-target",Si="slidev-vclick-hidden",u0="slidev-vclick-fade",Ri="slidev-vclick-hidden-explicitly",Gs="slidev-vclick-current",la="slidev-vclick-prior",p0=["localhost","127.0.0.1"];let d0=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((s,o)=>(o&=63,o<36?s+=o.toString(36):o<62?s+=(o-26).toString(36).toUpperCase():o>62?s+="-":s+="_",s),"");function bl(e,s){if(!e)return!1;const o=e.indexOf(s);return o>=0?(e.splice(o,1),!0):!1}function m0(...e){let s,o,a;e.length===1?(s=0,a=1,[o]=e):[s,o,a=1]=e;const i=[];let l=s;for(;l<o;)i.push(l),l+=a||1;return i}function f0(e){return e!=null}function h0(e,s){return Object.fromEntries(Object.entries(e).map(([o,a])=>s(o,a)).filter(f0))}const lo={theme:"default",title:"RETI 3",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"/cover.png",class:"text-center",materia:"RETI 3",as:"2024/2025",version:"1.1.1"},Ee=lo,Tt=Ee.aspectRatio??16/9,Mt=Ee.canvasWidth??980,wr=Math.ceil(Mt/Tt),yr=N(()=>h0(Ee.themeConfig||{},(e,s)=>[`--slidev-theme-${e}`,s]));function qd(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Kn(e,s,o){Object.defineProperty(e,s,{value:o,writable:!0,enumerable:!1})}const xs=Be({page:0,clicks:0});let _0=[],g0=[];Kn(xs,"$syncUp",!0);Kn(xs,"$syncDown",!0);Kn(xs,"$paused",!1);Kn(xs,"$onSet",e=>_0.push(e));Kn(xs,"$onPatch",e=>g0.push(e));qd();Kn(xs,"$patch",async()=>!1);function Vd(e,s,o=!1){const a=[];let i=!1,l=!1,r,c;const u=Be(s);function p(h){a.push(h)}function d(h,_){u[h]!==_&&(clearTimeout(r),i=!0,u[h]=_,r=setTimeout(()=>i=!1,0))}function m(h){i||(clearTimeout(c),l=!0,Object.entries(h).forEach(([_,w])=>{u[_]=w}),c=setTimeout(()=>l=!1,0))}function f(h){let _;o?o&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&m(JSON.parse(y.newValue))}):(_=new BroadcastChannel(h),_.addEventListener("message",y=>m(y.data)));function w(){!o&&_&&!l?_.postMessage(ge(u)):o&&!l&&window.localStorage.setItem(h,JSON.stringify(u)),i||a.forEach(y=>y(u))}if(be(u,w,{deep:!0,flush:"sync"}),o){const y=window.localStorage.getItem(h);y&&m(JSON.parse(y))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:v0,onPatch:b0,patch:Ys,state:Ei}=Vd(xs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ws=Be({});let k0=[],x0=[];Kn(ws,"$syncUp",!0);Kn(ws,"$syncDown",!0);Kn(ws,"$paused",!1);Kn(ws,"$onSet",e=>k0.push(e));Kn(ws,"$onPatch",e=>x0.push(e));qd();Kn(ws,"$patch",async()=>!1);const{init:w0,onPatch:y0,patch:Ud,state:Ka}=Vd(ws,{},!1),$0="modulepreload",I0=function(e){return"/3/linux_cli/"+e},jc={},Ot=function(s,o,a){if(!o||o.length===0)return s();const i=document.getElementsByTagName("link");return Promise.all(o.map(l=>{if(l=I0(l),l in jc)return;jc[l]=!0;const r=l.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!a)for(let d=i.length-1;d>=0;d--){const m=i[d];if(m.href===l&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":$0,r||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),r)return new Promise((d,m)=>{p.addEventListener("load",d),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>s())};function L0(e,s){let o,a,i;const l=J(!0),r=()=>{l.value=!0,i()};be(e,r,{flush:"sync"});const c=typeof s=="function"?s:s.get,u=typeof s=="function"?void 0:s.set,p=ur((d,m)=>(a=d,i=m,{get(){return l.value&&(o=c(),l.value=!1),a(),o},set(f){u==null||u(f)}}));return Object.isExtensible(p)&&(p.trigger=r),p}function lt(e){return sr()?($p(e),!0):!1}function Ge(e){return typeof e=="function"?e():O(e)}function C0(e){if(!Te(e))return Be(e);const s=new Proxy({},{get(o,a,i){return O(Reflect.get(e.value,a,i))},set(o,a,i){return Te(e.value[a])&&!Te(i)?e.value[a].value=i:e.value[a]=i,!0},deleteProperty(o,a){return Reflect.deleteProperty(e.value,a)},has(o,a){return Reflect.has(e.value,a)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Be(s)}const Gn=typeof window<"u",S0=e=>typeof e<"u",R0=e=>e!=null,E0=Object.prototype.toString,kl=e=>E0.call(e)==="[object Object]",xl=()=>+Date.now(),fs=()=>{},A0=T0();function T0(){var e;return Gn&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function M0(e,s){function o(...a){return new Promise((i,l)=>{Promise.resolve(e(()=>s.apply(this,a),{fn:s,thisArg:this,args:a})).then(i).catch(l)})}return o}const Gd=e=>e();function O0(e=Gd){const s=J(!0);function o(){s.value=!1}function a(){s.value=!0}const i=(...l)=>{s.value&&e(...l)};return{isActive:Vn(s),pause:o,resume:a,eventFilter:i}}function z0(e,s){var o;if(typeof e=="number")return e+s;const a=((o=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",i=e.slice(a.length),l=parseFloat(a)+s;return Number.isNaN(l)?e:l+i}function Yd(...e){if(e.length!==1)return V1(...e);const s=e[0];return typeof s=="function"?Vn(ur(()=>({get:s,set:fs}))):J(s)}var P0=Object.defineProperty,D0=Object.defineProperties,N0=Object.getOwnPropertyDescriptors,Kc=Object.getOwnPropertySymbols,F0=Object.prototype.hasOwnProperty,j0=Object.prototype.propertyIsEnumerable,Hc=(e,s,o)=>s in e?P0(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,K0=(e,s)=>{for(var o in s||(s={}))F0.call(s,o)&&Hc(e,o,s[o]);if(Kc)for(var o of Kc(s))j0.call(s,o)&&Hc(e,o,s[o]);return e},H0=(e,s)=>D0(e,N0(s));function W0(e){if(!Te(e))return W1(e);const s=Array.isArray(e.value)?new Array(e.value.length):{};for(const o in e.value)s[o]=ur(()=>({get(){return e.value[o]},set(a){if(Array.isArray(e.value)){const i=[...e.value];i[o]=a,e.value=i}else{const i=H0(K0({},e.value),{[o]:a});Object.setPrototypeOf(i,e.value),e.value=i}}}));return s}function Zd(e,s=!0){$n()?kt(e):s?e():an(e)}function B0(e){$n()&&Bo(e)}function q0(e,s=1e3,o={}){const{immediate:a=!0,immediateCallback:i=!1}=o;let l=null;const r=J(!1);function c(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,c()}function p(){const d=Ge(s);d<=0||(r.value=!0,i&&e(),c(),l=setInterval(e,d))}if(a&&Gn&&p(),Te(s)||typeof s=="function"){const d=be(s,()=>{r.value&&Gn&&p()});lt(d)}return lt(u),{isActive:r,pause:u,resume:p}}function V0(e,s,o={}){const{immediate:a=!0}=o,i=J(!1);let l=null;function r(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,r()}function u(...p){r(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,e(...p)},Ge(s))}return a&&(i.value=!0,Gn&&u()),lt(c),{isPending:Vn(i),start:u,stop:c}}function Qd(e=!1,s={}){const{truthyValue:o=!0,falsyValue:a=!1}=s,i=Te(e),l=J(e);function r(c){if(arguments.length)return l.value=c,l.value;{const u=Ge(o);return l.value=l.value===u?Ge(a):u,l.value}}return i?r:[l,r]}var Wc=Object.getOwnPropertySymbols,U0=Object.prototype.hasOwnProperty,G0=Object.prototype.propertyIsEnumerable,Y0=(e,s)=>{var o={};for(var a in e)U0.call(e,a)&&s.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&Wc)for(var a of Wc(e))s.indexOf(a)<0&&G0.call(e,a)&&(o[a]=e[a]);return o};function Z0(e,s,o={}){const a=o,{eventFilter:i=Gd}=a,l=Y0(a,["eventFilter"]);return be(e,M0(i,s),l)}var Q0=Object.defineProperty,J0=Object.defineProperties,X0=Object.getOwnPropertyDescriptors,Ha=Object.getOwnPropertySymbols,Jd=Object.prototype.hasOwnProperty,Xd=Object.prototype.propertyIsEnumerable,Bc=(e,s,o)=>s in e?Q0(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,ev=(e,s)=>{for(var o in s||(s={}))Jd.call(s,o)&&Bc(e,o,s[o]);if(Ha)for(var o of Ha(s))Xd.call(s,o)&&Bc(e,o,s[o]);return e},nv=(e,s)=>J0(e,X0(s)),tv=(e,s)=>{var o={};for(var a in e)Jd.call(e,a)&&s.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&Ha)for(var a of Ha(e))s.indexOf(a)<0&&Xd.call(e,a)&&(o[a]=e[a]);return o};function sv(e,s,o={}){const a=o,{eventFilter:i}=a,l=tv(a,["eventFilter"]),{eventFilter:r,pause:c,resume:u,isActive:p}=O0(i);return{stop:Z0(e,s,nv(ev({},l),{eventFilter:r})),pause:c,resume:u,isActive:p}}function ln(e){var s;const o=Ge(e);return(s=o==null?void 0:o.$el)!=null?s:o}const en=Gn?window:void 0,em=Gn?window.document:void 0,ov=Gn?window.navigator:void 0;function $e(...e){let s,o,a,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,a,i]=e,s=en):[s,o,a,i]=e,!s)return fs;Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]);const l=[],r=()=>{l.forEach(d=>d()),l.length=0},c=(d,m,f,h)=>(d.addEventListener(m,f,h),()=>d.removeEventListener(m,f,h)),u=be(()=>[ln(s),Ge(i)],([d,m])=>{r(),d&&l.push(...o.flatMap(f=>a.map(h=>c(d,f,h,m))))},{immediate:!0,flush:"post"}),p=()=>{u(),r()};return lt(p),p}let qc=!1;function av(e,s,o={}){const{window:a=en,ignore:i=[],capture:l=!0,detectIframe:r=!1}=o;if(!a)return;A0&&!qc&&(qc=!0,Array.from(a.document.body.children).forEach(f=>f.addEventListener("click",fs)));let c=!0;const u=f=>i.some(h=>{if(typeof h=="string")return Array.from(a.document.querySelectorAll(h)).some(_=>_===f.target||f.composedPath().includes(_));{const _=ln(h);return _&&(f.target===_||f.composedPath().includes(_))}}),d=[$e(a,"click",f=>{const h=ln(e);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!u(f)),!c){c=!0;return}s(f)}},{passive:!0,capture:l}),$e(a,"pointerdown",f=>{const h=ln(e);h&&(c=!f.composedPath().includes(h)&&!u(f))},{passive:!0}),r&&$e(a,"blur",f=>{var h;const _=ln(e);((h=a.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(_!=null&&_.contains(a.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function iv(e){return typeof e=="function"?e:typeof e=="string"?s=>s.key===e:Array.isArray(e)?s=>e.includes(s.key):()=>!0}function lv(...e){let s,o,a={};e.length===3?(s=e[0],o=e[1],a=e[2]):e.length===2?typeof e[1]=="object"?(s=!0,o=e[0],a=e[1]):(s=e[0],o=e[1]):(s=!0,o=e[0]);const{target:i=en,eventName:l="keydown",passive:r=!1,dedupe:c=!1}=a,u=iv(s);return $e(i,l,d=>{d.repeat&&Ge(c)||u(d)&&o(d)},r)}function rv(e={}){var s;const{window:o=en}=e,a=(s=e.document)!=null?s:o==null?void 0:o.document,i=L0(()=>null,()=>a==null?void 0:a.activeElement);return o&&($e(o,"blur",l=>{l.relatedTarget===null&&i.trigger()},!0),$e(o,"focus",i.trigger,!0)),i}function cv(){const e=J(!1);return $n()&&kt(()=>{e.value=!0}),e}function Vo(e){const s=cv();return N(()=>(s.value,!!e()))}function uv(e,s={}){const{immediate:o=!0,window:a=en}=s,i=J(!1);let l=0,r=null;function c(d){if(!i.value||!a)return;const m=d-l;e({delta:m,timestamp:d}),l=d,r=a.requestAnimationFrame(c)}function u(){!i.value&&a&&(i.value=!0,r=a.requestAnimationFrame(c))}function p(){i.value=!1,r!=null&&a&&(a.cancelAnimationFrame(r),r=null)}return o&&u(),lt(p),{isActive:Vn(i),pause:p,resume:u}}function ts(e,s={}){const{window:o=en}=s,a=Vo(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let i;const l=J(!1),r=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",c):i.removeListener(c))},c=()=>{a.value&&(r(),i=o.matchMedia(Yd(e).value),l.value=!!(i!=null&&i.matches),i&&("addEventListener"in i?i.addEventListener("change",c):i.addListener(c)))};return ks(c),lt(()=>r()),l}const pv={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function dv(e,s={}){function o(c,u){let p=e[c];return u!=null&&(p=z0(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:a=en}=s;function i(c){return a?a.matchMedia(c).matches:!1}const l=c=>ts(`(min-width: ${o(c)})`,s),r=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>l(u),enumerable:!0,configurable:!0}),c),{});return Object.assign(r,{greater(c){return ts(`(min-width: ${o(c,.1)})`,s)},greaterOrEqual:l,smaller(c){return ts(`(max-width: ${o(c,-.1)})`,s)},smallerOrEqual(c){return ts(`(max-width: ${o(c)})`,s)},between(c,u){return ts(`(min-width: ${o(c)}) and (max-width: ${o(u,-.1)})`,s)},isGreater(c){return i(`(min-width: ${o(c,.1)})`)},isGreaterOrEqual(c){return i(`(min-width: ${o(c)})`)},isSmaller(c){return i(`(max-width: ${o(c,-.1)})`)},isSmallerOrEqual(c){return i(`(max-width: ${o(c)})`)},isInBetween(c,u){return i(`(min-width: ${o(c)}) and (max-width: ${o(u,-.1)})`)},current(){const c=Object.keys(e).map(u=>[u,l(u)]);return N(()=>c.filter(([,u])=>u.value).map(([u])=>u))}})}function mv(e={}){const{navigator:s=ov,read:o=!1,source:a,copiedDuring:i=1500,legacy:l=!1}=e,r=["copy","cut"],c=Vo(()=>s&&"clipboard"in s),u=N(()=>c.value||l),p=J(""),d=J(!1),m=V0(()=>d.value=!1,i);function f(){c.value?s.clipboard.readText().then(y=>{p.value=y}):p.value=w()}if(u.value&&o)for(const y of r)$e(y,f);async function h(y=Ge(a)){u.value&&y!=null&&(c.value?await s.clipboard.writeText(y):_(y),p.value=y,d.value=!0,m.start())}function _(y){const $=document.createElement("textarea");$.value=y??"",$.style.position="absolute",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),$.remove()}function w(){var y,$,I;return(I=($=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:$.toString())!=null?I:""}return{isSupported:u,text:p,copied:d,copy:h}}function fv(e){return JSON.parse(JSON.stringify(e))}const ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ca="__vueuse_ssr_handlers__",hv=_v();function _v(){return ca in ra||(ra[ca]=ra[ca]||{}),ra[ca]}function gv(e,s){return hv[e]||s}function vv(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var bv=Object.defineProperty,Vc=Object.getOwnPropertySymbols,kv=Object.prototype.hasOwnProperty,xv=Object.prototype.propertyIsEnumerable,Uc=(e,s,o)=>s in e?bv(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,Gc=(e,s)=>{for(var o in s||(s={}))kv.call(s,o)&&Uc(e,o,s[o]);if(Vc)for(var o of Vc(s))xv.call(s,o)&&Uc(e,o,s[o]);return e};const wv={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Yc="vueuse-storage";function yv(e,s,o,a={}){var i;const{flush:l="pre",deep:r=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:d,window:m=en,eventFilter:f,onError:h=D=>{console.error(D)}}=a,_=(d?at:J)(s);if(!o)try{o=gv("getDefaultStorage",()=>{var D;return(D=en)==null?void 0:D.localStorage})()}catch(D){h(D)}if(!o)return _;const w=Ge(s),y=vv(w),$=(i=a.serializer)!=null?i:wv[y],{pause:I,resume:k}=sv(_,()=>M(_.value),{flush:l,deep:r,eventFilter:f});return m&&c&&($e(m,"storage",B),$e(m,Yc,z)),B(),_;function M(D){try{if(D==null)o.removeItem(e);else{const U=$.write(D),le=o.getItem(e);le!==U&&(o.setItem(e,U),m&&m.dispatchEvent(new CustomEvent(Yc,{detail:{key:e,oldValue:le,newValue:U,storageArea:o}})))}}catch(U){h(U)}}function E(D){const U=D?D.newValue:o.getItem(e);if(U==null)return u&&w!==null&&o.setItem(e,$.write(w)),w;if(!D&&p){const le=$.read(U);return typeof p=="function"?p(le,w):y==="object"&&!Array.isArray(le)?Gc(Gc({},w),le):le}else return typeof U!="string"?U:$.read(U)}function z(D){B(D.detail)}function B(D){if(!(D&&D.storageArea!==o)){if(D&&D.key==null){_.value=w;return}if(!(D&&D.key!==e)){I();try{_.value=E(D)}catch(U){h(U)}finally{D?an(k):k()}}}}}function $v(e){return ts("(prefers-color-scheme: dark)",e)}var Iv=Object.defineProperty,Lv=Object.defineProperties,Cv=Object.getOwnPropertyDescriptors,Zc=Object.getOwnPropertySymbols,Sv=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,Qc=(e,s,o)=>s in e?Iv(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,Ev=(e,s)=>{for(var o in s||(s={}))Sv.call(s,o)&&Qc(e,o,s[o]);if(Zc)for(var o of Zc(s))Rv.call(s,o)&&Qc(e,o,s[o]);return e},Av=(e,s)=>Lv(e,Cv(s));function VP(e,s={}){var o,a;const{pointerTypes:i,preventDefault:l,stopPropagation:r,exact:c,onMove:u,onEnd:p,onStart:d,initialValue:m,axis:f="both",draggingElement:h=en,handle:_=e}=s,w=J((o=Ge(m))!=null?o:{x:0,y:0}),y=J(),$=z=>i?i.includes(z.pointerType):!0,I=z=>{Ge(l)&&z.preventDefault(),Ge(r)&&z.stopPropagation()},k=z=>{if(!$(z)||Ge(c)&&z.target!==Ge(e))return;const B=Ge(e).getBoundingClientRect(),D={x:z.clientX-B.left,y:z.clientY-B.top};(d==null?void 0:d(D,z))!==!1&&(y.value=D,I(z))},M=z=>{if(!$(z)||!y.value)return;let{x:B,y:D}=w.value;(f==="x"||f==="both")&&(B=z.clientX-y.value.x),(f==="y"||f==="both")&&(D=z.clientY-y.value.y),w.value={x:B,y:D},u==null||u(w.value,z),I(z)},E=z=>{$(z)&&y.value&&(y.value=void 0,p==null||p(w.value,z),I(z))};if(Gn){const z={capture:(a=s.capture)!=null?a:!0};$e(_,"pointerdown",k,z),$e(h,"pointermove",M,z),$e(h,"pointerup",E,z)}return Av(Ev({},W0(w)),{position:w,isDragging:N(()=>!!y.value),style:N(()=>`left:${w.value.x}px;top:${w.value.y}px;`)})}var Jc=Object.getOwnPropertySymbols,Tv=Object.prototype.hasOwnProperty,Mv=Object.prototype.propertyIsEnumerable,Ov=(e,s)=>{var o={};for(var a in e)Tv.call(e,a)&&s.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&Jc)for(var a of Jc(e))s.indexOf(a)<0&&Mv.call(e,a)&&(o[a]=e[a]);return o};function zv(e,s,o={}){const a=o,{window:i=en}=a,l=Ov(a,["window"]);let r;const c=Vo(()=>i&&"ResizeObserver"in i),u=()=>{r&&(r.disconnect(),r=void 0)},p=N(()=>Array.isArray(e)?e.map(f=>ln(f)):[ln(e)]),d=be(p,f=>{if(u(),c.value&&i){r=new ResizeObserver(s);for(const h of f)h&&r.observe(h,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),d()};return lt(m),{isSupported:c,stop:m}}function Pv(e,s={width:0,height:0},o={}){const{window:a=en,box:i="content-box"}=o,l=N(()=>{var u,p;return(p=(u=ln(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),r=J(s.width),c=J(s.height);return zv(e,([u])=>{const p=i==="border-box"?u.borderBoxSize:i==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(a&&l.value){const d=ln(e);if(d){const m=a.getComputedStyle(d);r.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(p){const d=Array.isArray(p)?p:[p];r.value=d.reduce((m,{inlineSize:f})=>m+f,0),c.value=d.reduce((m,{blockSize:f})=>m+f,0)}else r.value=u.contentRect.width,c.value=u.contentRect.height},o),be(()=>ln(e),u=>{r.value=u?s.width:0,c.value=u?s.height:0}),{width:r,height:c}}function Dv(e,s,o={}){const{root:a,rootMargin:i="0px",threshold:l=.1,window:r=en,immediate:c=!0}=o,u=Vo(()=>r&&"IntersectionObserver"in r),p=N(()=>{const _=Ge(e);return(Array.isArray(_)?_:[_]).map(ln).filter(R0)});let d=fs;const m=J(c),f=u.value?be(()=>[p.value,ln(a),m.value],([_,w])=>{if(d(),!m.value||!_.length)return;const y=new IntersectionObserver(s,{root:ln(w),rootMargin:i,threshold:l});_.forEach($=>$&&y.observe($)),d=()=>{y.disconnect(),d=fs}},{immediate:c,flush:"post"}):fs,h=()=>{d(),f(),m.value=!1};return lt(h),{isSupported:u,isActive:m,pause(){d(),m.value=!1},resume(){m.value=!0},stop:h}}const Xc=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Nv(e,s={}){const{document:o=em,autoExit:a=!1}=s,i=N(()=>{var $;return($=ln(e))!=null?$:o==null?void 0:o.querySelector("html")}),l=J(!1),r=N(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find($=>o&&$ in o||i.value&&$ in i.value)),c=N(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find($=>o&&$ in o||i.value&&$ in i.value)),u=N(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find($=>o&&$ in o||i.value&&$ in i.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find($=>o&&$ in o),d=Vo(()=>i.value&&o&&r.value!==void 0&&c.value!==void 0&&u.value!==void 0),m=()=>p?(o==null?void 0:o[p])===i.value:!1,f=()=>{if(u.value){if(o&&o[u.value]!=null)return o[u.value];{const $=i.value;if(($==null?void 0:$[u.value])!=null)return!!$[u.value]}}return!1};async function h(){if(d.value){if(c.value)if((o==null?void 0:o[c.value])!=null)await o[c.value]();else{const $=i.value;($==null?void 0:$[c.value])!=null&&await $[c.value]()}l.value=!1}}async function _(){if(!d.value)return;f()&&await h();const $=i.value;r.value&&($==null?void 0:$[r.value])!=null&&(await $[r.value](),l.value=!0)}async function w(){await(l.value?h():_())}const y=()=>{const $=f();(!$||$&&m())&&(l.value=$)};return $e(o,Xc,y,!1),$e(()=>ln(i),Xc,y,!1),a&&lt(h),{isSupported:d,isFullscreen:l,enter:_,exit:h,toggle:w}}function Yn(e,s,o={}){const{window:a=en}=o;return yv(e,s,a==null?void 0:a.localStorage,o)}const Fv={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function jv(e={}){const{reactive:s=!1,target:o=en,aliasMap:a=Fv,passive:i=!0,onEventFired:l=fs}=e,r=Be(new Set),c={toJSON(){return{}},current:r},u=s?Be(c):c,p=new Set,d=new Set;function m(w,y){w in u&&(s?u[w]=y:u[w].value=y)}function f(){r.clear();for(const w of d)m(w,!1)}function h(w,y){var $,I;const k=($=w.key)==null?void 0:$.toLowerCase(),E=[(I=w.code)==null?void 0:I.toLowerCase(),k].filter(Boolean);k&&(y?r.add(k):r.delete(k));for(const z of E)d.add(z),m(z,y);k==="meta"&&!y?(p.forEach(z=>{r.delete(z),m(z,!1)}),p.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&y&&[...r,...E].forEach(z=>p.add(z))}$e(o,"keydown",w=>(h(w,!0),l(w)),{passive:i}),$e(o,"keyup",w=>(h(w,!1),l(w)),{passive:i}),$e("blur",f,{passive:!0}),$e("focus",f,{passive:!0});const _=new Proxy(u,{get(w,y,$){if(typeof y!="string")return Reflect.get(w,y,$);if(y=y.toLowerCase(),y in a&&(y=a[y]),!(y in u))if(/[+_-]/.test(y)){const k=y.split(/[+_-]/g).map(M=>M.trim());u[y]=N(()=>k.every(M=>Ge(_[M])))}else u[y]=J(!1);const I=Reflect.get(w,y,$);return s?Ge(I):I}});return _}const Kv={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function UP(e={}){const{type:s="page",touch:o=!0,resetOnTouchEnds:a=!1,initialValue:i={x:0,y:0},window:l=en,target:r=l,eventFilter:c}=e,u=J(i.x),p=J(i.y),d=J(null),m=typeof s=="function"?s:Kv[s],f=$=>{const I=m($);I&&([u.value,p.value]=I,d.value="mouse")},h=$=>{if($.touches.length>0){const I=m($.touches[0]);I&&([u.value,p.value]=I,d.value="touch")}},_=()=>{u.value=i.x,p.value=i.y},w=c?$=>c(()=>f($),{}):$=>f($),y=c?$=>c(()=>h($),{}):$=>h($);return r&&($e(r,"mousemove",w,{passive:!0}),$e(r,"dragover",w,{passive:!0}),o&&s!=="movement"&&($e(r,"touchstart",y,{passive:!0}),$e(r,"touchmove",y,{passive:!0}),a&&$e(r,"touchend",_,{passive:!0}))),{x:u,y:p,sourceType:d}}function Hv(e,s={}){const o=Yd(e),{threshold:a=50,onSwipe:i,onSwipeEnd:l,onSwipeStart:r}=s,c=Be({x:0,y:0}),u=(z,B)=>{c.x=z,c.y=B},p=Be({x:0,y:0}),d=(z,B)=>{p.x=z,p.y=B},m=N(()=>c.x-p.x),f=N(()=>c.y-p.y),{max:h,abs:_}=Math,w=N(()=>h(_(m.value),_(f.value))>=a),y=J(!1),$=J(!1),I=N(()=>w.value?_(m.value)>_(f.value)?m.value>0?"left":"right":f.value>0?"up":"down":"none"),k=z=>{var B,D,U;const le=z.buttons===0,me=z.buttons===1;return(U=(D=(B=s.pointerTypes)==null?void 0:B.includes(z.pointerType))!=null?D:le||me)!=null?U:!0},M=[$e(e,"pointerdown",z=>{var B,D;if(!k(z))return;$.value=!0,(D=(B=o.value)==null?void 0:B.style)==null||D.setProperty("touch-action","none");const U=z.target;U==null||U.setPointerCapture(z.pointerId);const{clientX:le,clientY:me}=z;u(le,me),d(le,me),r==null||r(z)}),$e(e,"pointermove",z=>{if(!k(z)||!$.value)return;const{clientX:B,clientY:D}=z;d(B,D),!y.value&&w.value&&(y.value=!0),y.value&&(i==null||i(z))}),$e(e,"pointerup",z=>{var B,D;k(z)&&(y.value&&(l==null||l(z,I.value)),$.value=!1,y.value=!1,(D=(B=o.value)==null?void 0:B.style)==null||D.setProperty("touch-action","initial"))})],E=()=>M.forEach(z=>z());return{isSwiping:Vn(y),direction:Vn(I),posStart:Vn(c),posEnd:Vn(p),distanceX:m,distanceY:f,stop:E}}let Wv=0;function GP(e,s={}){const o=J(!1),{document:a=em,immediate:i=!0,manual:l=!1,id:r=`vueuse_styletag_${++Wv}`}=s,c=J(e);let u=()=>{};const p=()=>{if(!a)return;const m=a.getElementById(r)||a.createElement("style");m.isConnected||(m.type="text/css",m.id=r,s.media&&(m.media=s.media),a.head.appendChild(m)),!o.value&&(u=be(c,f=>{m.textContent=f},{immediate:!0}),o.value=!0)},d=()=>{!a||!o.value||(u(),a.head.removeChild(a.getElementById(r)),o.value=!1)};return i&&!l&&Zd(p),l||lt(d),{id:r,css:c,unload:d,load:p,isLoaded:Vn(o)}}var Bv=Object.defineProperty,eu=Object.getOwnPropertySymbols,qv=Object.prototype.hasOwnProperty,Vv=Object.prototype.propertyIsEnumerable,nu=(e,s,o)=>s in e?Bv(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,Uv=(e,s)=>{for(var o in s||(s={}))qv.call(s,o)&&nu(e,o,s[o]);if(eu)for(var o of eu(s))Vv.call(s,o)&&nu(e,o,s[o]);return e};function YP(e={}){const{controls:s=!1,offset:o=0,immediate:a=!0,interval:i="requestAnimationFrame",callback:l}=e,r=J(xl()+o),c=()=>r.value=xl()+o,u=l?()=>{c(),l(r.value)}:c,p=i==="requestAnimationFrame"?uv(u,{immediate:a}):q0(u,i,{immediate:a});return s?Uv({timestamp:r},p):r}function Qe(e,s,o,a={}){var i,l,r;const{clone:c=!1,passive:u=!1,eventName:p,deep:d=!1,defaultValue:m,shouldEmit:f}=a,h=$n(),_=o||(h==null?void 0:h.emit)||((i=h==null?void 0:h.$emit)==null?void 0:i.bind(h))||((r=(l=h==null?void 0:h.proxy)==null?void 0:l.$emit)==null?void 0:r.bind(h==null?void 0:h.proxy));let w=p;s||(s="modelValue"),w=p||w||`update:${s.toString()}`;const y=k=>c?typeof c=="function"?c(k):fv(k):k,$=()=>S0(e[s])?y(e[s]):m,I=k=>{f?f(k)&&_(w,k):_(w,k)};if(u){const k=$(),M=J(k);return be(()=>e[s],E=>M.value=y(E)),be(M,E=>{(E!==e[s]||d)&&I(E)},{deep:d}),M}else return N({get(){return $()},set(k){I(k)}})}function ZP({window:e=en}={}){if(!e)return J(!1);const s=J(e.document.hasFocus());return $e(e,"blur",()=>{s.value=!1}),$e(e,"focus",()=>{s.value=!0}),s}function Gv(e={}){const{window:s=en,initialWidth:o=1/0,initialHeight:a=1/0,listenOrientation:i=!0,includeScrollbar:l=!0}=e,r=J(o),c=J(a),u=()=>{s&&(l?(r.value=s.innerWidth,c.value=s.innerHeight):(r.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};if(u(),Zd(u),$e("resize",u,{passive:!0}),i){const p=ts("(orientation: portrait)");be(p,()=>u())}return{width:r,height:c}}function Yv(){return nm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function nm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Zv=typeof Proxy=="function",Qv="devtools-plugin:setup",Jv="plugin:settings:set";let Is,wl;function Xv(){var e;return Is!==void 0||(typeof window<"u"&&window.performance?(Is=!0,wl=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Is=!0,wl=global.perf_hooks.performance):Is=!1),Is}function eb(){return Xv()?wl.now():Date.now()}class nb{constructor(s,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=o;const a={};if(s.settings)for(const r in s.settings){const c=s.settings[r];a[r]=c.defaultValue}const i=`__vue-devtools-plugin-settings__${s.id}`;let l=Object.assign({},a);try{const r=localStorage.getItem(i),c=JSON.parse(r);Object.assign(l,c)}catch{}this.fallbacks={getSettings(){return l},setSettings(r){try{localStorage.setItem(i,JSON.stringify(r))}catch{}l=r},now(){return eb()}},o&&o.on(Jv,(r,c)=>{r===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(r,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(r,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(s){this.target=s;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function tb(e,s){const o=e,a=nm(),i=Yv(),l=Zv&&o.enableEarlyProxy;if(i&&(a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!l))i.emit(Qv,e,s);else{const r=l?new nb(o,i):null;(a.__VUE_DEVTOOLS_PLUGINS__=a.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:s,proxy:r}),r&&s(r.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ft=typeof window<"u";function sb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Ai(e,s){const o={};for(const a in s){const i=s[a];o[a]=An(i)?i.map(e):e(i)}return o}const ho=()=>{},An=Array.isArray;function Re(e){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(s))}const ob=/\/$/,ab=e=>e.replace(ob,"");function Ti(e,s,o="/"){let a,i={},l="",r="";const c=s.indexOf("#");let u=s.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(a=s.slice(0,u),l=s.slice(u+1,c>-1?c:s.length),i=e(l)),c>-1&&(a=a||s.slice(0,c),r=s.slice(c,s.length)),a=rb(a??s,o),{fullPath:a+(l&&"?")+l+r,path:a,query:i,hash:r}}function ib(e,s){const o=s.query?e(s.query):"";return s.path+(o&&"?")+o+(s.hash||"")}function tu(e,s){return!s||!e.toLowerCase().startsWith(s.toLowerCase())?e:e.slice(s.length)||"/"}function su(e,s,o){const a=s.matched.length-1,i=o.matched.length-1;return a>-1&&a===i&&Kt(s.matched[a],o.matched[i])&&tm(s.params,o.params)&&e(s.query)===e(o.query)&&s.hash===o.hash}function Kt(e,s){return(e.aliasOf||e)===(s.aliasOf||s)}function tm(e,s){if(Object.keys(e).length!==Object.keys(s).length)return!1;for(const o in e)if(!lb(e[o],s[o]))return!1;return!0}function lb(e,s){return An(e)?ou(e,s):An(s)?ou(s,e):e===s}function ou(e,s){return An(s)?e.length===s.length&&e.every((o,a)=>o===s[a]):e.length===1&&e[0]===s}function rb(e,s){if(e.startsWith("/"))return e;if(!s.startsWith("/"))return Re(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${s}". It should look like "/${s}".`),e;if(!e)return s;const o=s.split("/"),a=e.split("/"),i=a[a.length-1];(i===".."||i===".")&&a.push("");let l=o.length-1,r,c;for(r=0;r<a.length;r++)if(c=a[r],c!==".")if(c==="..")l>1&&l--;else break;return o.slice(0,l).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var Eo;(function(e){e.pop="pop",e.push="push"})(Eo||(Eo={}));var _o;(function(e){e.back="back",e.forward="forward",e.unknown=""})(_o||(_o={}));function cb(e){if(!e)if(ft){const s=document.querySelector("base");e=s&&s.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ab(e)}const ub=/^[^#]+#/;function pb(e,s){return e.replace(ub,"#")+s}function db(e,s){const o=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:s.behavior,left:a.left-o.left-(s.left||0),top:a.top-o.top-(s.top||0)}}const di=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(e){let s;if("el"in e){const o=e.el,a=typeof o=="string"&&o.startsWith("#");if(typeof e.el=="string"&&(!a||!document.getElementById(e.el.slice(1))))try{const l=document.querySelector(e.el);if(a&&l){Re(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Re(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const i=typeof o=="string"?a?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!i){Re(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}s=db(i,e)}else s=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function au(e,s){return(history.state?history.state.position-s:-1)+e}const yl=new Map;function fb(e,s){yl.set(e,s)}function hb(e){const s=yl.get(e);return yl.delete(e),s}let _b=()=>location.protocol+"//"+location.host;function sm(e,s){const{pathname:o,search:a,hash:i}=s,l=e.indexOf("#");if(l>-1){let c=i.includes(e.slice(l))?e.slice(l).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),tu(u,"")}return tu(o,e)+a+i}function gb(e,s,o,a){let i=[],l=[],r=null;const c=({state:f})=>{const h=sm(e,location),_=o.value,w=s.value;let y=0;if(f){if(o.value=h,s.value=f,r&&r===_){r=null;return}y=w?f.position-w.position:0}else a(h);i.forEach($=>{$(o.value,_,{delta:y,type:Eo.pop,direction:y?y>0?_o.forward:_o.back:_o.unknown})})};function u(){r=o.value}function p(f){i.push(f);const h=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return l.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(ze({},f.state,{scroll:di()}),"")}function m(){for(const f of l)f();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:p,destroy:m}}function iu(e,s,o,a=!1,i=!1){return{back:e,current:s,forward:o,replaced:a,position:window.history.length,scroll:i?di():null}}function vb(e){const{history:s,location:o}=window,a={value:sm(e,o)},i={value:s.state};i.value||l(a.value,{back:null,current:a.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(u,p,d){const m=e.indexOf("#"),f=m>-1?(o.host&&document.querySelector("base")?e:e.slice(m))+u:_b()+e+u;try{s[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){Re("Error with push/replace State",h),o[d?"replace":"assign"](f)}}function r(u,p){const d=ze({},s.state,iu(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});l(u,d,!0),a.value=u}function c(u,p){const d=ze({},i.value,s.state,{forward:u,scroll:di()});s.state||Re(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),l(d.current,d,!0);const m=ze({},iu(a.value,u,null),{position:d.position+1},p);l(u,m,!1),a.value=u}return{location:a,state:i,push:c,replace:r}}function bb(e){e=cb(e);const s=vb(e),o=gb(e,s.state,s.location,s.replace);function a(l,r=!0){r||o.pauseListeners(),history.go(l)}const i=ze({location:"",base:e,go:a,createHref:pb.bind(null,e)},s,o);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>s.state.value}),i}function kb(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),!e.endsWith("#/")&&!e.endsWith("#")&&Re(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/,"#")}".`),bb(e)}function xb(e){return typeof e=="string"||e&&typeof e=="object"}function om(e){return typeof e=="string"||typeof e=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("navigation failure");var lu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(lu||(lu={}));const wb={[1]({location:e,currentLocation:s}){return`No match for
 ${JSON.stringify(e)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:e,to:s}){return`Redirected from "${e.fullPath}" to "${$b(s)}" via a navigation guard.`},[4]({from:e,to:s}){return`Navigation aborted from "${e.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:e,to:s}){return`Navigation cancelled from "${e.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:e,to:s}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Ps(e,s){return ze(new Error(wb[e](s)),{type:e,[am]:!0},s)}function ct(e,s){return e instanceof Error&&am in e&&(s==null||!!(e.type&s))}const yb=["params","query","hash"];function $b(e){if(typeof e=="string")return e;if("path"in e)return e.path;const s={};for(const o of yb)o in e&&(s[o]=e[o]);return JSON.stringify(s,null,2)}const ru="[^/]+?",Ib={sensitive:!1,strict:!1,start:!0,end:!0},Lb=/[.+*?^${}()[\]/\\]/g;function Cb(e,s){const o=ze({},Ib,s),a=[];let i=o.start?"^":"";const l=[];for(const p of e){const d=p.length?[]:[90];o.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(o.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace(Lb,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:w,optional:y,regexp:$}=f;l.push({name:_,repeatable:w,optional:y});const I=$||ru;if(I!==ru){h+=10;try{new RegExp(`(${I})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${I}): `+M.message)}}let k=w?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;m||(k=y&&p.length<2?`(?:/${k})`:"/"+k),y&&(k+="?"),i+=k,h+=20,y&&(h+=-8),w&&(h+=-20),I===".*"&&(h+=-50)}d.push(h)}a.push(d)}if(o.strict&&o.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}o.strict||(i+="/?"),o.end?i+="$":o.strict&&(i+="(?:/|$)");const r=new RegExp(i,o.sensitive?"":"i");function c(p){const d=p.match(r),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",_=l[f-1];m[_.name]=h&&_.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:_,repeatable:w,optional:y}=h,$=_ in p?p[_]:"";if(An($)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const I=An($)?$.join("/"):$;if(!I)if(y)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${_}"`);d+=I}}return d||"/"}return{re:r,score:a,keys:l,parse:c,stringify:u}}function Sb(e,s){let o=0;for(;o<e.length&&o<s.length;){const a=s[o]-e[o];if(a)return a;o++}return e.length<s.length?e.length===1&&e[0]===40+40?-1:1:e.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Rb(e,s){let o=0;const a=e.score,i=s.score;for(;o<a.length&&o<i.length;){const l=Sb(a[o],i[o]);if(l)return l;o++}if(Math.abs(i.length-a.length)===1){if(cu(a))return 1;if(cu(i))return-1}return i.length-a.length}function cu(e){const s=e[e.length-1];return e.length>0&&s[s.length-1]<0}const Eb={type:0,value:""},Ab=/[a-zA-Z0-9_]/;function Tb(e){if(!e)return[[]];if(e==="/")return[[Eb]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function s(h){throw new Error(`ERR (${o})/"${p}": ${h}`)}let o=0,a=o;const i=[];let l;function r(){l&&i.push(l),l=[]}let c=0,u,p="",d="";function m(){p&&(o===0?l.push({type:0,value:p}):o===1||o===2||o===3?(l.length>1&&(u==="*"||u==="+")&&s(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):s("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&o!==2){a=o,o=4;continue}switch(o){case 0:u==="/"?(p&&m(),r()):u===":"?(m(),o=1):f();break;case 4:f(),o=a;break;case 1:u==="("?o=2:Ab.test(u)?f():(m(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:o=3:d+=u;break;case 3:m(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:s("Unknown state");break}}return o===2&&s(`Unfinished custom RegExp for param "${p}"`),m(),r(),i}function Mb(e,s,o){const a=Cb(Tb(e.path),o);{const l=new Set;for(const r of a.keys)l.has(r.name)&&Re(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),l.add(r.name)}const i=ze(a,{record:e,parent:s,children:[],alias:[]});return s&&!i.record.aliasOf==!s.record.aliasOf&&s.children.push(i),i}function Ob(e,s){const o=[],a=new Map;s=du({strict:!1,end:!0,sensitive:!1},s);function i(d){return a.get(d)}function l(d,m,f){const h=!f,_=zb(d);Fb(_,m),_.aliasOf=f&&f.record;const w=du(s,d),y=[_];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of k)y.push(ze({},_,{components:f?f.record.components:_.components,path:M,aliasOf:f?f.record:_}))}let $,I;for(const k of y){const{path:M}=k;if(m&&M[0]!=="/"){const E=m.record.path,z=E[E.length-1]==="/"?"":"/";k.path=m.record.path+(M&&z+M)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if($=Mb(k,m,w),m&&M[0]==="/"&&jb($,m),f?(f.alias.push($),Nb(f,$)):(I=I||$,I!==$&&I.alias.push($),h&&d.name&&!pu($)&&r(d.name)),_.children){const E=_.children;for(let z=0;z<E.length;z++)l(E[z],$,f&&f.children[z])}f=f||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&u($)}return I?()=>{r(I)}:ho}function r(d){if(om(d)){const m=a.get(d);m&&(a.delete(d),o.splice(o.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=o.indexOf(d);m>-1&&(o.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function c(){return o}function u(d){let m=0;for(;m<o.length&&Rb(d,o[m])>=0&&(d.record.path!==o[m].record.path||!im(d,o[m]));)m++;o.splice(m,0,d),d.record.name&&!pu(d)&&a.set(d.record.name,d)}function p(d,m){let f,h={},_,w;if("name"in d&&d.name){if(f=a.get(d.name),!f)throw Ps(1,{location:d});{const I=Object.keys(d.params||{}).filter(k=>!f.keys.find(M=>M.name===k));I.length&&Re(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}w=f.record.name,h=ze(uu(m.params,f.keys.filter(I=>!I.optional).map(I=>I.name)),d.params&&uu(d.params,f.keys.map(I=>I.name))),_=f.stringify(h)}else if("path"in d)_=d.path,_.startsWith("/")||Re(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=o.find(I=>I.re.test(_)),f&&(h=f.parse(_),w=f.record.name);else{if(f=m.name?a.get(m.name):o.find(I=>I.re.test(m.path)),!f)throw Ps(1,{location:d,currentLocation:m});w=f.record.name,h=ze({},m.params,d.params),_=f.stringify(h)}const y=[];let $=f;for(;$;)y.unshift($.record),$=$.parent;return{name:w,path:_,params:h,matched:y,meta:Db(y)}}return e.forEach(d=>l(d)),{addRoute:l,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:i}}function uu(e,s){const o={};for(const a of s)a in e&&(o[a]=e[a]);return o}function zb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Pb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Pb(e){const s={},o=e.props||!1;if("component"in e)s.default=o;else for(const a in e.components)s[a]=typeof o=="boolean"?o:o[a];return s}function pu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Db(e){return e.reduce((s,o)=>ze(s,o.meta),{})}function du(e,s){const o={};for(const a in e)o[a]=a in s?s[a]:e[a];return o}function $l(e,s){return e.name===s.name&&e.optional===s.optional&&e.repeatable===s.repeatable}function Nb(e,s){for(const o of e.keys)if(!o.optional&&!s.keys.find($l.bind(null,o)))return Re(`Alias "${s.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${o.name}"`);for(const o of s.keys)if(!o.optional&&!e.keys.find($l.bind(null,o)))return Re(`Alias "${s.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${o.name}"`)}function Fb(e,s){s&&s.record.name&&!e.name&&!e.path&&Re(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function jb(e,s){for(const o of s.keys)if(!e.keys.find($l.bind(null,o)))return Re(`Absolute path "${e.record.path}" must have the exact same param named "${o.name}" as its parent "${s.record.path}".`)}function im(e,s){return s.children.some(o=>o===e||im(e,o))}const lm=/#/g,Kb=/&/g,Hb=/\//g,Wb=/=/g,Bb=/\?/g,rm=/\+/g,qb=/%5B/g,Vb=/%5D/g,cm=/%5E/g,Ub=/%60/g,um=/%7B/g,Gb=/%7C/g,pm=/%7D/g,Yb=/%20/g;function $r(e){return encodeURI(""+e).replace(Gb,"|").replace(qb,"[").replace(Vb,"]")}function Zb(e){return $r(e).replace(um,"{").replace(pm,"}").replace(cm,"^")}function Il(e){return $r(e).replace(rm,"%2B").replace(Yb,"+").replace(lm,"%23").replace(Kb,"%26").replace(Ub,"`").replace(um,"{").replace(pm,"}").replace(cm,"^")}function Qb(e){return Il(e).replace(Wb,"%3D")}function Jb(e){return $r(e).replace(lm,"%23").replace(Bb,"%3F")}function Xb(e){return e==null?"":Jb(e).replace(Hb,"%2F")}function Ao(e){try{return decodeURIComponent(""+e)}catch{Re(`Error decoding "${e}". Using original value`)}return""+e}function ek(e){const s={};if(e===""||e==="?")return s;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<a.length;++i){const l=a[i].replace(rm," "),r=l.indexOf("="),c=Ao(r<0?l:l.slice(0,r)),u=r<0?null:Ao(l.slice(r+1));if(c in s){let p=s[c];An(p)||(p=s[c]=[p]),p.push(u)}else s[c]=u}return s}function mu(e){let s="";for(let o in e){const a=e[o];if(o=Qb(o),a==null){a!==void 0&&(s+=(s.length?"&":"")+o);continue}(An(a)?a.map(l=>l&&Il(l)):[a&&Il(a)]).forEach(l=>{l!==void 0&&(s+=(s.length?"&":"")+o,l!=null&&(s+="="+l))})}return s}function nk(e){const s={};for(const o in e){const a=e[o];a!==void 0&&(s[o]=An(a)?a.map(i=>i==null?null:""+i):a==null?a:""+a)}return s}const tk=Symbol("router view location matched"),fu=Symbol("router view depth"),Ir=Symbol("router"),dm=Symbol("route location"),Ll=Symbol("router view location");function Zs(){let e=[];function s(a){return e.push(a),()=>{const i=e.indexOf(a);i>-1&&e.splice(i,1)}}function o(){e=[]}return{add:s,list:()=>e,reset:o}}function Ct(e,s,o,a,i){const l=a&&(a.enterCallbacks[i]=a.enterCallbacks[i]||[]);return()=>new Promise((r,c)=>{const u=m=>{m===!1?c(Ps(4,{from:o,to:s})):m instanceof Error?c(m):xb(m)?c(Ps(2,{from:s,to:m})):(l&&a.enterCallbacks[i]===l&&typeof m=="function"&&l.push(m),r())},p=e.call(a&&a.instances[i],s,o,sk(u,s,o));let d=Promise.resolve(p);if(e.length<3&&(d=d.then(u)),e.length>2){const m=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)d=d.then(f=>u._called?f:(Re(m),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){Re(m),c(new Error("Invalid navigation guard"));return}}d.catch(m=>c(m))})}function sk(e,s,o){let a=0;return function(){a++===1&&Re(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,a===1&&e.apply(null,arguments)}}function Mi(e,s,o,a){const i=[];for(const l of e){!l.components&&!l.children.length&&Re(`Record with path "${l.path}" is either missing a "component(s)" or "children" property.`);for(const r in l.components){let c=l.components[r];{if(!c||typeof c!="object"&&typeof c!="function")throw Re(`Component "${r}" in record with path "${l.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Re(`Component "${r}" in record with path "${l.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Re(`Component "${r}" in record with path "${l.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!l.instances[r]))if(ok(c)){const p=(c.__vccOpts||c)[s];p&&i.push(Ct(p,o,a,l,r))}else{let u=c();"catch"in u||(Re(`Component "${r}" in record with path "${l.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${l.path}"`));const d=sb(p)?p.default:p;l.components[r]=d;const f=(d.__vccOpts||d)[s];return f&&Ct(f,o,a,l,r)()}))}}}return i}function ok(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hu(e){const s=L(Ir),o=L(dm),a=N(()=>s.resolve(O(e.to))),i=N(()=>{const{matched:u}=a.value,{length:p}=u,d=u[p-1],m=o.matched;if(!d||!m.length)return-1;const f=m.findIndex(Kt.bind(null,d));if(f>-1)return f;const h=_u(u[p-2]);return p>1&&_u(d)===h&&m[m.length-1].path!==h?m.findIndex(Kt.bind(null,u[p-2])):f}),l=N(()=>i.value>-1&&rk(o.params,a.value.params)),r=N(()=>i.value>-1&&i.value===o.matched.length-1&&tm(o.params,a.value.params));function c(u={}){return lk(u)?s[O(e.replace)?"replace":"push"](O(e.to)).catch(ho):Promise.resolve()}if(ft){const u=$n();if(u){const p={route:a.value,isActive:l.value,isExactActive:r.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ks(()=>{p.route=a.value,p.isActive=l.value,p.isExactActive=r.value},{flush:"post"})}}return{route:a,href:N(()=>a.value.href),isActive:l,isExactActive:r,navigate:c}}const ak=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hu,setup(e,{slots:s}){const o=Be(hu(e)),{options:a}=L(Ir),i=N(()=>({[gu(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[gu(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=s.default&&s.default(o);return e.custom?l:yn("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},l)}}}),ik=ak;function lk(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const s=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return e.preventDefault&&e.preventDefault(),!0}}function rk(e,s){for(const o in s){const a=s[o],i=e[o];if(typeof a=="string"){if(a!==i)return!1}else if(!An(i)||i.length!==a.length||a.some((l,r)=>l!==i[r]))return!1}return!0}function _u(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const gu=(e,s,o)=>e??s??o,ck=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:s,slots:o}){pk();const a=L(Ll),i=N(()=>e.route||a.value),l=L(fu,0),r=N(()=>{let p=O(l);const{matched:d}=i.value;let m;for(;(m=d[p])&&!m.components;)p++;return p}),c=N(()=>i.value.matched[r.value]);Sn(fu,N(()=>r.value+1)),Sn(tk,c),Sn(Ll,i);const u=J();return be(()=>[u.value,c.value,e.name],([p,d,m],[f,h,_])=>{d&&(d.instances[m]=p,h&&h!==d&&p&&p===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),p&&d&&(!h||!Kt(d,h)||!f)&&(d.enterCallbacks[m]||[]).forEach(w=>w(p))},{flush:"post"}),()=>{const p=i.value,d=e.name,m=c.value,f=m&&m.components[d];if(!f)return vu(o.default,{Component:f,route:p});const h=m.props[d],_=h?h===!0?p.params:typeof h=="function"?h(p):h:null,y=yn(f,ze({},_,s,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(m.instances[d]=null)},ref:u}));if(ft&&y.ref){const $={depth:r.value,name:m.name,path:m.path,meta:m.meta};(An(y.ref)?y.ref.map(k=>k.i):[y.ref.i]).forEach(k=>{k.__vrv_devtools=$})}return vu(o.default,{Component:y,route:p})||y}}});function vu(e,s){if(!e)return null;const o=e(s);return o.length===1?o[0]:o}const uk=ck;function pk(){const e=$n(),s=e.parent&&e.parent.type.name,o=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(s&&(s==="KeepAlive"||s.includes("Transition"))&&typeof o=="object"&&o.name==="RouterView"){const a=s==="KeepAlive"?"keep-alive":"transition";Re(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${a}>
    <component :is="Component" />
  </${a}>
</router-view>`)}}function Qs(e,s){const o=ze({},e,{matched:e.matched.map(a=>kk(a,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:s,value:o}}}function ua(e){return{_custom:{display:e}}}let dk=0;function mk(e,s,o){if(s.__hasDevtools)return;s.__hasDevtools=!0;const a=dk++;tb({id:"org.vuejs.router"+(a?"."+a:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((d,m)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Qs(s.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:d,componentInstance:m})=>{if(m.__vrv_devtools){const f=m.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:mm})}An(m.__vrl_devtools)&&(m.__devtoolsApi=i,m.__vrl_devtools.forEach(f=>{let h=_m,_="";f.isExactActive?(h=hm,_="This is exactly active"):f.isActive&&(h=fm,_="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:h})}))}),be(s.currentRoute,()=>{u(),i.notifyComponentUpdate(),i.sendInspectorTree(c),i.sendInspectorState(c)});const l="router:navigations:"+a;i.addTimelineLayer({id:l,label:`Router${a?" "+a:""} Navigations`,color:4237508}),s.onError((d,m)=>{i.addTimelineEvent({layerId:l,event:{title:"Error during Navigation",subtitle:m.fullPath,logType:"error",time:i.now(),data:{error:d},groupId:m.meta.__navigationId}})});let r=0;s.beforeEach((d,m)=>{const f={guard:ua("beforeEach"),from:Qs(m,"Current Location during this navigation"),to:Qs(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:r++}),i.addTimelineEvent({layerId:l,event:{time:i.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,m,f)=>{const h={guard:ua("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=ua("❌")):h.status=ua("✅"),h.from=Qs(m,"Current Location during this navigation"),h.to=Qs(d,"Target location"),i.addTimelineEvent({layerId:l,event:{title:"End of navigation",subtitle:d.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+a;i.addInspector({id:c,label:"Routes"+(a?" "+a:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const d=p;let m=o.getRoutes().filter(f=>!f.parent);m.forEach(bm),d.filter&&(m=m.filter(f=>Cl(f,d.filter.toLowerCase()))),m.forEach(f=>vm(f,s.currentRoute.value)),d.rootNodes=m.map(gm)}let p;i.on.getInspectorTree(d=>{p=d,d.app===e&&d.inspectorId===c&&u()}),i.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===c){const f=o.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:hk(f)})}}),i.sendInspectorTree(c),i.sendInspectorState(c)})}function fk(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function hk(e){const{record:s}=e,o=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&o.push({editable:!1,key:"name",value:s.name}),o.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(a=>`${a.name}${fk(a)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),s.redirect!=null&&o.push({editable:!1,key:"redirect",value:s.redirect}),e.alias.length&&o.push({editable:!1,key:"aliases",value:e.alias.map(a=>a.record.path)}),Object.keys(e.record.meta).length&&o.push({editable:!1,key:"meta",value:e.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(a=>a.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),o}const mm=15485081,fm=2450411,hm=8702998,_k=2282478,_m=16486972,gk=6710886;function gm(e){const s=[],{record:o}=e;o.name!=null&&s.push({label:String(o.name),textColor:0,backgroundColor:_k}),o.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:_m}),e.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:mm}),e.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:hm}),e.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:fm}),o.redirect&&s.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:gk});let a=o.__vd_id;return a==null&&(a=String(vk++),o.__vd_id=a),{id:a,label:o.path,tags:s,children:e.children.map(gm)}}let vk=0;const bk=/^\/(.*)\/([a-z]*)$/;function vm(e,s){const o=s.matched.length&&Kt(s.matched[s.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=o,o||(e.__vd_active=s.matched.some(a=>Kt(a,e.record))),e.children.forEach(a=>vm(a,s))}function bm(e){e.__vd_match=!1,e.children.forEach(bm)}function Cl(e,s){const o=String(e.re).match(bk);if(e.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(s))return e.children.forEach(r=>Cl(r,s)),e.record.path!=="/"||s==="/"?(e.__vd_match=e.re.test(s),!0):!1;const i=e.record.path.toLowerCase(),l=Ao(i);return!s.startsWith("/")&&(l.includes(s)||i.includes(s))||l.startsWith(s)||i.startsWith(s)||e.record.name&&String(e.record.name).includes(s)?!0:e.children.some(r=>Cl(r,s))}function kk(e,s){const o={};for(const a in e)s.includes(a)||(o[a]=e[a]);return o}function xk(e){const s=Ob(e.routes,e),o=e.parseQuery||ek,a=e.stringifyQuery||mu,i=e.history;if(!i)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const l=Zs(),r=Zs(),c=Zs(),u=at(yt);let p=yt;ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ai.bind(null,P=>""+P),m=Ai.bind(null,Xb),f=Ai.bind(null,Ao);function h(P,ee){let se,ae;return om(P)?(se=s.getRecordMatcher(P),ae=ee):ae=P,s.addRoute(ae,se)}function _(P){const ee=s.getRecordMatcher(P);ee?s.removeRoute(ee):Re(`Cannot remove non-existent route "${String(P)}"`)}function w(){return s.getRoutes().map(P=>P.record)}function y(P){return!!s.getRecordMatcher(P)}function $(P,ee){if(ee=ze({},ee||u.value),typeof P=="string"){const x=Ti(o,P,ee.path),T=s.resolve({path:x.path},ee),W=i.createHref(x.fullPath);return W.startsWith("//")?Re(`Location "${P}" resolved to "${W}". A resolved location cannot start with multiple slashes.`):T.matched.length||Re(`No match found for location with path "${P}"`),ze(x,T,{params:f(T.params),hash:Ao(x.hash),redirectedFrom:void 0,href:W})}let se;if("path"in P)"params"in P&&!("name"in P)&&Object.keys(P.params).length&&Re(`Path "${P.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),se=ze({},P,{path:Ti(o,P.path,ee.path).path});else{const x=ze({},P.params);for(const T in x)x[T]==null&&delete x[T];se=ze({},P,{params:m(x)}),ee.params=m(ee.params)}const ae=s.resolve(se,ee),Ie=P.hash||"";Ie&&!Ie.startsWith("#")&&Re(`A \`hash\` should always start with the character "#". Replace "${Ie}" with "#${Ie}".`),ae.params=d(f(ae.params));const Ne=ib(a,ze({},P,{hash:Zb(Ie),path:ae.path})),g=i.createHref(Ne);return g.startsWith("//")?Re(`Location "${P}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):ae.matched.length||Re(`No match found for location with path "${"path"in P?P.path:P}"`),ze({fullPath:Ne,hash:Ie,query:a===mu?nk(P.query):P.query||{}},ae,{redirectedFrom:void 0,href:g})}function I(P){return typeof P=="string"?Ti(o,P,u.value.path):ze({},P)}function k(P,ee){if(p!==P)return Ps(8,{from:ee,to:P})}function M(P){return B(P)}function E(P){return M(ze(I(P),{replace:!0}))}function z(P){const ee=P.matched[P.matched.length-1];if(ee&&ee.redirect){const{redirect:se}=ee;let ae=typeof se=="function"?se(P):se;if(typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=I(ae):{path:ae},ae.params={}),!("path"in ae)&&!("name"in ae))throw Re(`Invalid redirect found:
${JSON.stringify(ae,null,2)}
 when navigating to "${P.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ze({query:P.query,hash:P.hash,params:"path"in ae?{}:P.params},ae)}}function B(P,ee){const se=p=$(P),ae=u.value,Ie=P.state,Ne=P.force,g=P.replace===!0,x=z(se);if(x)return B(ze(I(x),{state:typeof x=="object"?ze({},Ie,x.state):Ie,force:Ne,replace:g}),ee||se);const T=se;T.redirectedFrom=ee;let W;return!Ne&&su(a,ae,se)&&(W=Ps(16,{to:T,from:ae}),Tn(ae,ae,!0,!1)),(W?Promise.resolve(W):le(T,ae)).catch(H=>ct(H)?ct(H,2)?H:Pe(H):pe(H,T,ae)).then(H=>{if(H){if(ct(H,2))return su(a,$(H.to),T)&&ee&&(ee._count=ee._count?ee._count+1:1)>30?(Re(`Detected a possibly infinite redirection in a navigation guard when going from "${ae.fullPath}" to "${T.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):B(ze({replace:g},I(H.to),{state:typeof H.to=="object"?ze({},Ie,H.to.state):Ie,force:Ne}),ee||T)}else H=X(T,ae,!0,g,Ie);return me(T,ae,H),H})}function D(P,ee){const se=k(P,ee);return se?Promise.reject(se):Promise.resolve()}function U(P){const ee=Zn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(P):P()}function le(P,ee){let se;const[ae,Ie,Ne]=wk(P,ee);se=Mi(ae.reverse(),"beforeRouteLeave",P,ee);for(const x of ae)x.leaveGuards.forEach(T=>{se.push(Ct(T,P,ee))});const g=D.bind(null,P,ee);return se.push(g),Mn(se).then(()=>{se=[];for(const x of l.list())se.push(Ct(x,P,ee));return se.push(g),Mn(se)}).then(()=>{se=Mi(Ie,"beforeRouteUpdate",P,ee);for(const x of Ie)x.updateGuards.forEach(T=>{se.push(Ct(T,P,ee))});return se.push(g),Mn(se)}).then(()=>{se=[];for(const x of P.matched)if(x.beforeEnter&&!ee.matched.includes(x))if(An(x.beforeEnter))for(const T of x.beforeEnter)se.push(Ct(T,P,ee));else se.push(Ct(x.beforeEnter,P,ee));return se.push(g),Mn(se)}).then(()=>(P.matched.forEach(x=>x.enterCallbacks={}),se=Mi(Ne,"beforeRouteEnter",P,ee),se.push(g),Mn(se))).then(()=>{se=[];for(const x of r.list())se.push(Ct(x,P,ee));return se.push(g),Mn(se)}).catch(x=>ct(x,8)?x:Promise.reject(x))}function me(P,ee,se){for(const ae of c.list())U(()=>ae(P,ee,se))}function X(P,ee,se,ae,Ie){const Ne=k(P,ee);if(Ne)return Ne;const g=ee===yt,x=ft?history.state:{};se&&(ae||g?i.replace(P.fullPath,ze({scroll:g&&x&&x.scroll},Ie)):i.push(P.fullPath,Ie)),u.value=P,Tn(P,ee,se,g),Pe()}let ve;function ke(){ve||(ve=i.listen((P,ee,se)=>{if(!Bt.listening)return;const ae=$(P),Ie=z(ae);if(Ie){B(ze(Ie,{replace:!0}),ae).catch(ho);return}p=ae;const Ne=u.value;ft&&fb(au(Ne.fullPath,se.delta),di()),le(ae,Ne).catch(g=>ct(g,12)?g:ct(g,2)?(B(g.to,ae).then(x=>{ct(x,20)&&!se.delta&&se.type===Eo.pop&&i.go(-1,!1)}).catch(ho),Promise.reject()):(se.delta&&i.go(-se.delta,!1),pe(g,ae,Ne))).then(g=>{g=g||X(ae,Ne,!1),g&&(se.delta&&!ct(g,8)?i.go(-se.delta,!1):se.type===Eo.pop&&ct(g,20)&&i.go(-1,!1)),me(ae,Ne,g)}).catch(ho)}))}let ye=Zs(),De=Zs(),oe;function pe(P,ee,se){Pe(P);const ae=De.list();return ae.length?ae.forEach(Ie=>Ie(P,ee,se)):(Re("uncaught error during route navigation:"),console.error(P)),Promise.reject(P)}function Le(){return oe&&u.value!==yt?Promise.resolve():new Promise((P,ee)=>{ye.add([P,ee])})}function Pe(P){return oe||(oe=!P,ke(),ye.list().forEach(([ee,se])=>P?se(P):ee()),ye.reset()),P}function Tn(P,ee,se,ae){const{scrollBehavior:Ie}=e;if(!ft||!Ie)return Promise.resolve();const Ne=!se&&hb(au(P.fullPath,0))||(ae||!se)&&history.state&&history.state.scroll||null;return an().then(()=>Ie(P,ee,Ne)).then(g=>g&&mb(g)).catch(g=>pe(g,P,ee))}const sn=P=>i.go(P);let gn;const Zn=new Set,Bt={currentRoute:u,listening:!0,addRoute:h,removeRoute:_,hasRoute:y,getRoutes:w,resolve:$,options:e,push:M,replace:E,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:l.add,beforeResolve:r.add,afterEach:c.add,onError:De.add,isReady:Le,install(P){const ee=this;P.component("RouterLink",ik),P.component("RouterView",uk),P.config.globalProperties.$router=ee,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>O(u)}),ft&&!gn&&u.value===yt&&(gn=!0,M(i.location).catch(Ie=>{Re("Unexpected error when starting the router:",Ie)}));const se={};for(const Ie in yt)se[Ie]=N(()=>u.value[Ie]);P.provide(Ir,ee),P.provide(dm,Be(se)),P.provide(Ll,u);const ae=P.unmount;Zn.add(P),P.unmount=function(){Zn.delete(P),Zn.size<1&&(p=yt,ve&&ve(),ve=null,u.value=yt,gn=!1,oe=!1),ae()},ft&&mk(P,ee,s)}};function Mn(P){return P.reduce((ee,se)=>ee.then(()=>U(se)),Promise.resolve())}return Bt}function wk(e,s){const o=[],a=[],i=[],l=Math.max(s.matched.length,e.matched.length);for(let r=0;r<l;r++){const c=s.matched[r];c&&(e.matched.find(p=>Kt(p,c))?a.push(c):o.push(c));const u=e.matched[r];u&&(s.matched.find(p=>Kt(p,u))||i.push(u))}return[o,a,i]}const Oi=J(!1),go=J(!1),Rs=J(!1),yk=J(!0),Sl=dv({xs:460,...pv}),hs=Gv(),km=jv(),$k=N(()=>hs.height.value-hs.width.value/Tt>180),xm=Nv(Gn?document.body:null),zt=rv(),Ik=N(()=>{var e,s;return["INPUT","TEXTAREA"].includes(((e=zt.value)==null?void 0:e.tagName)||"")||((s=zt.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),Lk=N(()=>{var e;return["BUTTON","A"].includes(((e=zt.value)==null?void 0:e.tagName)||"")});Yn("slidev-camera","default");Yn("slidev-mic","default");const ba=Yn("slidev-scale",0),dn=Yn("slidev-show-overview",!1),zi=Yn("slidev-presenter-cursor",!0),bu=Yn("slidev-show-editor",!1);Yn("slidev-editor-width",Gn?window.innerWidth*.4:100);const wm=Qd(dn);function ku(e,s,o,a=i=>i){return e*a(.5-s*(.5-o))}function Ck(e){return[-e[0],-e[1]]}function Bn(e,s){return[e[0]+s[0],e[1]+s[1]]}function Pn(e,s){return[e[0]-s[0],e[1]-s[1]]}function Wn(e,s){return[e[0]*s,e[1]*s]}function Sk(e,s){return[e[0]/s,e[1]/s]}function Js(e){return[e[1],-e[0]]}function xu(e,s){return e[0]*s[0]+e[1]*s[1]}function Rk(e,s){return e[0]===s[0]&&e[1]===s[1]}function Ek(e){return Math.hypot(e[0],e[1])}function Ak(e){return e[0]*e[0]+e[1]*e[1]}function wu(e,s){return Ak(Pn(e,s))}function ym(e){return Sk(e,Ek(e))}function Tk(e,s){return Math.hypot(e[1]-s[1],e[0]-s[0])}function Xs(e,s,o){let a=Math.sin(o),i=Math.cos(o),l=e[0]-s[0],r=e[1]-s[1],c=l*i-r*a,u=l*a+r*i;return[c+s[0],u+s[1]]}function Rl(e,s,o){return Bn(e,Wn(Pn(s,e),o))}function yu(e,s,o){return Bn(e,Wn(s,o))}var{min:Ls,PI:Mk}=Math,$u=.275,eo=Mk+1e-4;function Ok(e,s={}){let{size:o=16,smoothing:a=.5,thinning:i=.5,simulatePressure:l=!0,easing:r=oe=>oe,start:c={},end:u={},last:p=!1}=s,{cap:d=!0,easing:m=oe=>oe*(2-oe)}=c,{cap:f=!0,easing:h=oe=>--oe*oe*oe+1}=u;if(e.length===0||o<=0)return[];let _=e[e.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(o,_):c.taper,y=u.taper===!1?0:u.taper===!0?Math.max(o,_):u.taper,$=Math.pow(o*a,2),I=[],k=[],M=e.slice(0,10).reduce((oe,pe)=>{let Le=pe.pressure;if(l){let Pe=Ls(1,pe.distance/o),Tn=Ls(1,1-Pe);Le=Ls(1,oe+(Tn-oe)*(Pe*$u))}return(oe+Le)/2},e[0].pressure),E=ku(o,i,e[e.length-1].pressure,r),z,B=e[0].vector,D=e[0].point,U=D,le=D,me=U,X=!1;for(let oe=0;oe<e.length;oe++){let{pressure:pe}=e[oe],{point:Le,vector:Pe,distance:Tn,runningLength:sn}=e[oe];if(oe<e.length-1&&_-sn<3)continue;if(i){if(l){let ae=Ls(1,Tn/o),Ie=Ls(1,1-ae);pe=Ls(1,M+(Ie-M)*(ae*$u))}E=ku(o,i,pe,r)}else E=o/2;z===void 0&&(z=E);let gn=sn<w?m(sn/w):1,Zn=_-sn<y?h((_-sn)/y):1;E=Math.max(.01,E*Math.min(gn,Zn));let Bt=(oe<e.length-1?e[oe+1]:e[oe]).vector,Mn=oe<e.length-1?xu(Pe,Bt):1,P=xu(Pe,B)<0&&!X,ee=Mn!==null&&Mn<0;if(P||ee){let ae=Wn(Js(B),E);for(let Ie=1/13,Ne=0;Ne<=1;Ne+=Ie)le=Xs(Pn(Le,ae),Le,eo*Ne),I.push(le),me=Xs(Bn(Le,ae),Le,eo*-Ne),k.push(me);D=le,U=me,ee&&(X=!0);continue}if(X=!1,oe===e.length-1){let ae=Wn(Js(Pe),E);I.push(Pn(Le,ae)),k.push(Bn(Le,ae));continue}let se=Wn(Js(Rl(Bt,Pe,Mn)),E);le=Pn(Le,se),(oe<=1||wu(D,le)>$)&&(I.push(le),D=le),me=Bn(Le,se),(oe<=1||wu(U,me)>$)&&(k.push(me),U=me),M=pe,B=Pe}let ve=e[0].point.slice(0,2),ke=e.length>1?e[e.length-1].point.slice(0,2):Bn(e[0].point,[1,1]),ye=[],De=[];if(e.length===1){if(!(w||y)||p){let oe=yu(ve,ym(Js(Pn(ve,ke))),-(z||E)),pe=[];for(let Le=1/13,Pe=Le;Pe<=1;Pe+=Le)pe.push(Xs(oe,ve,eo*2*Pe));return pe}}else{if(!(w||y&&e.length===1))if(d)for(let pe=1/13,Le=pe;Le<=1;Le+=pe){let Pe=Xs(k[0],ve,eo*Le);ye.push(Pe)}else{let pe=Pn(I[0],k[0]),Le=Wn(pe,.5),Pe=Wn(pe,.51);ye.push(Pn(ve,Le),Pn(ve,Pe),Bn(ve,Pe),Bn(ve,Le))}let oe=Js(Ck(e[e.length-1].vector));if(y||w&&e.length===1)De.push(ke);else if(f){let pe=yu(ke,oe,E);for(let Le=1/29,Pe=Le;Pe<1;Pe+=Le)De.push(Xs(pe,ke,eo*3*Pe))}else De.push(Bn(ke,Wn(oe,E)),Bn(ke,Wn(oe,E*.99)),Pn(ke,Wn(oe,E*.99)),Pn(ke,Wn(oe,E)))}return I.concat(De,k.reverse(),ye)}function zk(e,s={}){var o;let{streamline:a=.5,size:i=16,last:l=!1}=s;if(e.length===0)return[];let r=.15+(1-a)*.85,c=Array.isArray(e[0])?e:e.map(({x:h,y:_,pressure:w=.5})=>[h,_,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let _=1;_<5;_++)c.push(Rl(c[0],h,_/4))}c.length===1&&(c=[...c,[...Bn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let _=l&&h===f?c[h].slice(0,2):Rl(m.point,c[h],r);if(Rk(m.point,_))continue;let w=Tk(_,m.point);if(d+=w,h<f&&!p){if(d<i)continue;p=!0}m={point:_,pressure:c[h][2]>=0?c[h][2]:.5,vector:ym(Pn(m.point,_)),distance:w,runningLength:d},u.push(m)}return u[0].vector=((o=u[1])==null?void 0:o.vector)||[0,0],u}function Pk(e,s={}){return Ok(zk(e,s),s)}var Dk=()=>({events:{},emit(e,...s){let o=this.events[e]||[];for(let a=0,i=o.length;a<i;a++)o[a](...s)},on(e,s){var o;return(o=this.events[e])!=null&&o.push(s)||(this.events[e]=[s]),()=>{var a;this.events[e]=(a=this.events[e])==null?void 0:a.filter(i=>s!==i)}}});function Wa(e,s){return e-s}function Nk(e){return e<0?-1:1}function Ba(e){return[Math.abs(e),Nk(e)]}function $m(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Fk=2,ht=Fk,js=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var s;const o=this.drauu.el,a=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*a,y:(e.pageY-i.top)*a,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const l=i.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:l.x*a,y:l.y*a,pressure:e.pressure}}}createElement(e,s){const o=document.createElementNS("http://www.w3.org/2000/svg",e),a=s?{...this.brush,...s}:this.brush;return o.setAttribute("fill",a.fill??"transparent"),o.setAttribute("stroke",a.color),o.setAttribute("stroke-width",a.size.toString()),o.setAttribute("stroke-linecap","round"),a.dasharray&&o.setAttribute("stroke-dasharray",a.dasharray),o}attr(e,s){this.el.setAttribute(e,typeof s=="string"?s:s.toFixed(ht))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},jk=class extends js{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const s=Pk(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const o=s.reduce((a,[i,l],r,c)=>{const[u,p]=c[(r+1)%c.length];return a.push(i,l,(i+u)/2,(l+p)/2),a},["M",...s[0],"Q"]);return o.push("Z"),o.map(a=>typeof a=="number"?a.toFixed(2):a).join(" ")}},Kk=class extends js{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[s,o]=Ba(e.x-this.start.x),[a,i]=Ba(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(s,a);s=l,a=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",a);else{const[l,r]=[this.start.x,this.start.x+s*o].sort(Wa),[c,u]=[this.start.y,this.start.y+a*i].sort(Wa);this.attr("cx",(l+r)/2),this.attr("cy",(c+u)/2),this.attr("rx",(r-l)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Im(e,s){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),a=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",s),a.setAttribute("id",e),a.setAttribute("viewBox","0 -5 10 10"),a.setAttribute("refX","5"),a.setAttribute("refY","0"),a.setAttribute("markerWidth","4"),a.setAttribute("markerHeight","4"),a.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),a.appendChild(i),o.appendChild(a),o}var Hk=class extends js{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const s=$m(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(Im(s,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${s})`),o}return this.el}onMove(e){if(!this.el)return!1;let{x:s,y:o}=e;if(this.shiftPressed){const a=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let l=a/i;l=Math.round(l),Math.abs(l)<=1?(s=this.start.x+i*l,o=this.start.y+i):(s=this.start.x+a,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-o),this.attr("x2",s),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",o)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Wk=class extends js{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[s,o]=Ba(e.x-this.start.x),[a,i]=Ba(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(s,a);s=l,a=l}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-a),this.attr("width",s*2),this.attr("height",a*2);else{const[l,r]=[this.start.x,this.start.x+s*o].sort(Wa),[c,u]=[this.start.y,this.start.y+a*i].sort(Wa);this.attr("x",l),this.attr("y",c),this.attr("width",r-l),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Bk(e,s){const o=e.x-s.x,a=e.y-s.y;return o*o+a*a}function qk(e,s,o){let a=s.x,i=s.y,l=o.x-a,r=o.y-i;if(l!==0||r!==0){const c=((e.x-a)*l+(e.y-i)*r)/(l*l+r*r);c>1?(a=o.x,i=o.y):c>0&&(a+=l*c,i+=r*c)}return l=e.x-a,r=e.y-i,l*l+r*r}function Vk(e,s){let o=e[0];const a=[o];let i;for(let l=1,r=e.length;l<r;l++)i=e[l],Bk(i,o)>s&&(a.push(i),o=i);return o!==i&&i&&a.push(i),a}function El(e,s,o,a,i){let l=a,r=0;for(let c=s+1;c<o;c++){const u=qk(e[c],e[s],e[o]);u>l&&(r=c,l=u)}l>a&&(r-s>1&&El(e,s,r,a,i),i.push(e[r]),o-r>1&&El(e,r,o,a,i))}function Uk(e,s){const o=e.length-1,a=[e[0]];return El(e,0,o,s,a),a.push(e[o]),a}function Iu(e,s,o=!1){if(e.length<=2)return e;const a=s!==void 0?s*s:1;return e=o?e:Vk(e,a),e=Uk(e,a),e}var Gk=class extends js{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=$m();const s=Im(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Iu(this.points,1,!0),this.count=0),this.attr("d",Cu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Cu(Iu(this.points,1,!0))),!e.getTotalLength()))}};function Yk(e,s){const o=s.x-e.x,a=s.y-e.y;return{length:Math.sqrt(o**2+a**2),angle:Math.atan2(a,o)}}function Lu(e,s,o,a){const i=s||e,l=o||e,r=.2,c=Yk(i,l),u=c.angle+(a?Math.PI:0),p=c.length*r,d=e.x+Math.cos(u)*p,m=e.y+Math.sin(u)*p;return{x:d,y:m}}function Zk(e,s,o){const a=Lu(o[s-1],o[s-2],e),i=Lu(e,o[s-1],o[s+1],!0);return`C ${a.x.toFixed(ht)},${a.y.toFixed(ht)} ${i.x.toFixed(ht)},${i.y.toFixed(ht)} ${e.x.toFixed(ht)},${e.y.toFixed(ht)}`}function Cu(e){return e.reduce((s,o,a,i)=>a===0?`M ${o.x.toFixed(ht)},${o.y.toFixed(ht)}`:`${s} ${Zk(o,a,i)}`,"")}var Qk=class extends js{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const s=(o,a)=>{if(o&&o.length)for(let i=0;i<o.length;i++){const l=o[i];if(l.getTotalLength){const r=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=l.getPointAtLength(r*c/this.pathSubFactor),p=l.getPointAtLength(r*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:a||l})}}else l.children&&s(l.children,l)}};e&&s(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const o=this.pathFragments[s],a={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,a)&&(o.element.remove(),e.push(s))}return e.length&&(this.pathFragments=this.pathFragments.filter((s,o)=>!e.includes(o))),e.length>0}lineLineIntersect(e,s){const o=e.x1,a=e.x2,i=s.x1,l=s.x2,r=e.y1,c=e.y2,u=s.y1,p=s.y2,d=(o-a)*(u-p)-(r-c)*(i-l),m=(o*c-r*a)*(i-l)-(o-a)*(i*p-u*l),f=(o*c-r*a)*(u-p)-(r-c)*(i*p-u*l),h=(_,w,y)=>_>=w&&_<=y?!0:_>=y&&_<=w;if(d===0)return!1;{const _={x:m/d,y:f/d};return h(_.x,o,a)&&h(_.y,r,c)&&h(_.x,i,l)&&h(_.y,u,p)}}};function Jk(e){return{draw:new Gk(e),stylus:new jk(e),line:new Hk(e),rectangle:new Wk(e),ellipse:new Kk(e),eraseLine:new Qk(e)}}var Xk=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Dk(),this._models=Jk(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(s)||this.el,a=this.eventStart.bind(this),i=this.eventMove.bind(this),l=this.eventEnd.bind(this),r=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",a,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",r,!1),window.addEventListener("keyup",r,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",a),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",r,!1),window.removeEventListener("keyup",r,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,s){return this._emitter.on(e,s)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const s=this.model._eventUp(e);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function e2(e){return new Xk(e)}const Al=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],nt=Yn("slidev-drawing-enabled",!1),QP=Yn("slidev-drawing-pinned",!1),n2=J(!1),t2=J(!1),s2=J(!1),To=J(!1),is=C0(Yn("slidev-drawing-brush",{color:Al[0],size:4,mode:"stylus"})),Su=J("stylus"),Lm=N(()=>Ee.drawings.syncAll||bn.value);let Mo=!1;const no=N({get(){return Su.value},set(e){Su.value=e,e==="arrow"?(is.mode="line",is.arrowEnd=!0):(is.mode=e,is.arrowEnd=!1)}}),o2=Be({brush:is,acceptsInputTypes:N(()=>nt.value&&(!Ee.drawings.presenterOnly||bn.value)?void 0:["pen"]),coordinateTransform:!1}),_n=ni(e2(o2));function a2(){_n.clear(),Lm.value&&Ud(Ve.value,"")}function Lr(){var e;t2.value=_n.canRedo(),n2.value=_n.canUndo(),s2.value=!!((e=_n.el)!=null&&e.children.length)}function i2(e){Mo=!0;const s=Ka[e||Ve.value];s!=null?_n.load(s):_n.clear(),Lr(),Mo=!1}_n.on("changed",()=>{if(Lr(),!Mo){const e=_n.dump(),s=Ve.value;(Ka[s]||"")!==e&&Lm.value&&Ud(s,_n.dump())}});y0(e=>{Mo=!0,e[Ve.value]!=null&&_n.load(e[Ve.value]||""),Mo=!1,Lr()});an(()=>{be(Ve,()=>{_n.mounted&&i2()},{immediate:!0})});_n.on("start",()=>To.value=!0);_n.on("end",()=>To.value=!1);window.addEventListener("keydown",e=>{if(!nt.value)return;const s=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let o=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?_n.redo():_n.undo():e.code==="Escape"?nt.value=!1:e.code==="KeyL"&&s?no.value="line":e.code==="KeyA"&&s?no.value="arrow":e.code==="KeyS"&&s?no.value="stylus":e.code==="KeyR"&&s?no.value="rectangle":e.code==="KeyE"&&s?no.value="ellipse":e.code==="KeyC"&&s?a2():e.code.startsWith("Digit")&&s&&+e.code[5]<=Al.length?is.color=Al[+e.code[5]-1]:o=!1,o&&(e.preventDefault(),e.stopPropagation())},!1);function Ze(...e){return N(()=>e.every(s=>Ge(s)))}function Ln(e){return N(()=>!Ge(e))}const Ru=$v(),Pi=Yn("slidev-color-schema","auto"),Tl=N(()=>Ee.colorSchema!=="auto"),Cr=N({get(){return Tl.value?Ee.colorSchema==="dark":Pi.value==="auto"?Ru.value:Pi.value==="dark"},set(e){Tl.value||(Pi.value=e===Ru.value?"auto":e?"dark":"light")}}),Cm=Qd(Cr);Gn&&be(Cr,e=>{const s=document.querySelector("html");s.classList.toggle("dark",e),s.classList.toggle("light",!e)},{immediate:!0});const ka=J(1),xa=N(()=>Ye.length-1),En=J(0),Sr=J(0);function l2(){En.value>ka.value&&(En.value-=1)}function r2(){En.value<xa.value&&(En.value+=1)}function c2(){if(En.value>ka.value){let e=En.value-Sr.value;e<ka.value&&(e=ka.value),En.value=e}}function u2(){if(En.value<xa.value){let e=En.value+Sr.value;e>xa.value&&(e=xa.value),En.value=e}}function p2(){const{escape:e,space:s,shift:o,left:a,right:i,up:l,down:r,enter:c,d:u,g:p,o:d}=km;let m=[{name:"next_space",key:Ze(s,Ln(o)),fn:Pt,autoRepeat:!0},{name:"prev_space",key:Ze(s,o),fn:Dt,autoRepeat:!0},{name:"next_right",key:Ze(i,Ln(o),Ln(dn)),fn:Pt,autoRepeat:!0},{name:"prev_left",key:Ze(a,Ln(o),Ln(dn)),fn:Dt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Pt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Dt,autoRepeat:!0},{name:"next_down",key:Ze(r,Ln(dn)),fn:zo,autoRepeat:!0},{name:"prev_up",key:Ze(l,Ln(dn)),fn:()=>Po(!1),autoRepeat:!0},{name:"next_shift",key:Ze(i,o),fn:zo,autoRepeat:!0},{name:"prev_shift",key:Ze(a,o),fn:()=>Po(!1),autoRepeat:!0},{name:"toggle_dark",key:Ze(u,Ln(nt)),fn:Cm},{name:"toggle_overview",key:Ze(d,Ln(nt)),fn:wm},{name:"hide_overview",key:Ze(e,Ln(nt)),fn:()=>dn.value=!1},{name:"goto",key:Ze(p,Ln(nt)),fn:()=>Rs.value=!Rs.value},{name:"next_overview",key:Ze(i,dn),fn:r2},{name:"prev_overview",key:Ze(a,dn),fn:l2},{name:"up_overview",key:Ze(l,dn),fn:c2},{name:"down_overview",key:Ze(r,dn),fn:u2},{name:"goto_from_overview",key:Ze(c,dn),fn:()=>{Ns(En.value),dn.value=!1}}];const f=new Set(m.map(_=>_.name));if(m.filter(_=>_.name&&f.has(_.name)).length===0){const _=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(_),console.warn(_)}return m}const Sm=Ze(Ln(Ik),Ln(Lk),yk);function d2(e,s,o=!1){typeof e=="string"&&(e=km[e]);const a=Ze(e,Sm);let i=0,l;const r=()=>{if(clearTimeout(l),!a.value){i=0;return}o&&(l=setTimeout(r,Math.max(1e3-i*250,150)),i++),s()};return be(a,r,{flush:"sync"})}function m2(e,s){return lv(e,o=>{Sm.value&&(o.repeat||s())})}function f2(){const e=p2();new Map(e.map(o=>[o.key,o])).forEach(o=>{o.fn&&d2(o.key,o.fn,o.autoRepeat)}),m2("f",()=>xm.toggle())}const h2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_2=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),g2=[_2];function v2(e,s){return b(),ie("svg",h2,g2)}const b2={name:"carbon-close",render:v2};function Rr(e,s=""){var i,l;const o=["slidev-page",s],a=(l=(i=e==null?void 0:e.meta)==null?void 0:i.slide)==null?void 0:l.no;return a!=null&&o.push(`slidev-page-${a}`),o.filter(Boolean).join(" ")}const k2=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const s=e;L(S);const o=J(),a=Pv(o),i=N(()=>s.width?s.width:a.width.value),l=N(()=>s.width?s.width/Tt:a.height.value);s.width&&ks(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${l.value}px`)});const r=N(()=>i.value/l.value),c=N(()=>s.scale&&!Ds.value?s.scale:r.value<Tt?i.value/Mt:l.value*Tt/Mt),u=N(()=>({height:`${wr}px`,width:`${Mt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=N(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return Sn(Bd,c),(d,m)=>(b(),ie("div",{id:"slide-container",ref_key:"root",ref:o,class:qe(p.value)},[n("div",{id:"slide-content",style:tn(u.value)},[Fn(d.$slots,"default")],4),Fn(d.$slots,"controls")],2))}});const R=(e,s)=>{const o=e.__vccOpts||e;for(const[a,i]of s)o[a]=i;return o},Rm=R(k2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Er=Me({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:s}){const o=Qe(e,"clicks",s),a=Qe(e,"clicksElements",s),i=Qe(e,"clicksDisabled",s),l=Qe(e,"clicksOrderMap",s);a.value.length=0,Sn(r0,e.route),Sn(c0,e.context),Sn(mo,o),Sn(fo,i),Sn(ns,a),Sn(vl,l)},render(){var e,s;return this.$props.is?yn(this.$props.is):(s=(e=this.$slots)==null?void 0:e.default)==null?void 0:s.call(e)}}),x2=["innerHTML"],w2=Me({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return L(S),(s,o)=>O(Ka)[s.page]?(b(),ie("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:O(Ka)[s.page]},null,8,x2)):we("v-if",!0)}}),Em=R(w2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),y2=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"})),$2={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},I2=["onClick"],Di=4*16*2,Eu=2*16,L2=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:s}){const o=e;L(S);const a=Qe(o,"modelValue",s);function i(){a.value=!1}function l(m){Ns(m),i()}function r(m){return m===En.value}const c=Sl.smaller("xs"),u=Sl.smaller("sm"),p=N(()=>c.value?hs.width.value-Di:u.value?(hs.width.value-Di-Eu)/2:300),d=N(()=>Math.floor((hs.width.value-Di)/(p.value+Eu)));return ks(()=>{En.value=Ve.value,Sr.value=d.value}),(m,f)=>{const h=b2;return b(),ie(Ae,null,[td(n("div",$2,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${p.value}px,1fr))`)},[(b(!0),ie(Ae,null,Fs(O(Ye).slice(0,-1),(_,w)=>(b(),ie("div",{key:_.path,class:"relative"},[n("div",{class:qe(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":r(w+1),"border-gray-400":!r(w+1)}]),style:tn(O(yr)),onClick:y=>l(+_.path)},[(b(),C(Rm,{key:_.path,width:p.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:v(()=>[_!=null&&_.component?(b(),C(O(Er),{key:0,is:_.component,"clicks-disabled":!0,class:qe(O(Rr)(_)),route:_,context:"overview"},null,8,["is","class","route"])):we("v-if",!0),A(Em,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,I2),n("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${p.value+5}px`)},kn(w+1),5)]))),128))],4)],512),[[Md,O(a)]]),O(a)?(b(),ie("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:i},[A(h)])):we("v-if",!0)],64)}}});const C2=R(L2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),S2="/3/linux_cli/assets/logo-b72bde5d.png",R2={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},E2=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:s}){const o=e;L(S);const a=Qe(o,"modelValue",s);function i(){a.value=!1}return(l,r)=>(b(),C(od,null,[O(a)?(b(),ie("div",R2,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=c=>i())}),n("div",{class:qe(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ main"},[Fn(l.$slots,"default")],2)])):we("v-if",!0)],1024))}}),A2=R(E2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Modal.vue"]]),T2={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},M2=["innerHTML"],O2=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:S2,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),t("dev ")])])],-1),z2=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:s}){const o=e;L(S);const a=Qe(o,"modelValue",s),i=N(()=>typeof Ee.info=="string");return(l,r)=>(b(),C(A2,{modelValue:O(a),"onUpdate:modelValue":r[0]||(r[0]=c=>Te(a)?a.value=c:null),class:"px-6 py-4"},{default:v(()=>[n("div",T2,[i.value?(b(),ie("div",{key:0,class:"mb-4",innerHTML:O(Ee).info},null,8,M2)):we("v-if",!0),O2])]),_:1},8,["modelValue"]))}});const P2=R(z2,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vt(e){return Array.isArray?Array.isArray(e):Mm(e)==="[object Array]"}const D2=1/0;function N2(e){if(typeof e=="string")return e;let s=e+"";return s=="0"&&1/e==-D2?"-0":s}function F2(e){return e==null?"":N2(e)}function tt(e){return typeof e=="string"}function Am(e){return typeof e=="number"}function j2(e){return e===!0||e===!1||K2(e)&&Mm(e)=="[object Boolean]"}function Tm(e){return typeof e=="object"}function K2(e){return Tm(e)&&e!==null}function Rn(e){return e!=null}function Ni(e){return!e.trim().length}function Mm(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const H2="Incorrect 'index' type",W2=e=>`Invalid value for key ${e}`,B2=e=>`Pattern length exceeds max of ${e}.`,q2=e=>`Missing ${e} property in key`,V2=e=>`Property 'weight' in key '${e}' must be a positive integer`,Au=Object.prototype.hasOwnProperty;class U2{constructor(s){this._keys=[],this._keyMap={};let o=0;s.forEach(a=>{let i=Om(a);o+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,o+=i.weight}),this._keys.forEach(a=>{a.weight/=o})}get(s){return this._keyMap[s]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Om(e){let s=null,o=null,a=null,i=1,l=null;if(tt(e)||vt(e))a=e,s=Tu(e),o=Ml(e);else{if(!Au.call(e,"name"))throw new Error(q2("name"));const r=e.name;if(a=r,Au.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(V2(r));s=Tu(r),o=Ml(r),l=e.getFn}return{path:s,id:o,weight:i,src:a,getFn:l}}function Tu(e){return vt(e)?e:e.split(".")}function Ml(e){return vt(e)?e.join("."):e}function G2(e,s){let o=[],a=!1;const i=(l,r,c)=>{if(Rn(l))if(!r[c])o.push(l);else{let u=r[c];const p=l[u];if(!Rn(p))return;if(c===r.length-1&&(tt(p)||Am(p)||j2(p)))o.push(F2(p));else if(vt(p)){a=!0;for(let d=0,m=p.length;d<m;d+=1)i(p[d],r,c+1)}else r.length&&i(p,r,c+1)}};return i(e,tt(s)?s.split("."):s,0),a?o:o[0]}const Y2={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Z2={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,s)=>e.score===s.score?e.idx<s.idx?-1:1:e.score<s.score?-1:1},Q2={location:0,threshold:.6,distance:100},J2={useExtendedSearch:!1,getFn:G2,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var he={...Z2,...Y2,...Q2,...J2};const X2=/[^ ]+/g;function ex(e=1,s=3){const o=new Map,a=Math.pow(10,s);return{get(i){const l=i.match(X2).length;if(o.has(l))return o.get(l);const r=1/Math.pow(l,.5*e),c=parseFloat(Math.round(r*a)/a);return o.set(l,c),c},clear(){o.clear()}}}class Ar{constructor({getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){this.norm=ex(o,3),this.getFn=s,this.isCreated=!1,this.setIndexRecords()}setSources(s=[]){this.docs=s}setIndexRecords(s=[]){this.records=s}setKeys(s=[]){this.keys=s,this._keysMap={},s.forEach((o,a)=>{this._keysMap[o.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,tt(this.docs[0])?this.docs.forEach((s,o)=>{this._addString(s,o)}):this.docs.forEach((s,o)=>{this._addObject(s,o)}),this.norm.clear())}add(s){const o=this.size();tt(s)?this._addString(s,o):this._addObject(s,o)}removeAt(s){this.records.splice(s,1);for(let o=s,a=this.size();o<a;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(s,o){return s[this._keysMap[o]]}size(){return this.records.length}_addString(s,o){if(!Rn(s)||Ni(s))return;let a={v:s,i:o,n:this.norm.get(s)};this.records.push(a)}_addObject(s,o){let a={i:o,$:{}};this.keys.forEach((i,l)=>{let r=i.getFn?i.getFn(s):this.getFn(s,i.path);if(Rn(r)){if(vt(r)){let c=[];const u=[{nestedArrIndex:-1,value:r}];for(;u.length;){const{nestedArrIndex:p,value:d}=u.pop();if(Rn(d))if(tt(d)&&!Ni(d)){let m={v:d,i:p,n:this.norm.get(d)};c.push(m)}else vt(d)&&d.forEach((m,f)=>{u.push({nestedArrIndex:f,value:m})})}a.$[l]=c}else if(tt(r)&&!Ni(r)){let c={v:r,n:this.norm.get(r)};a.$[l]=c}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function zm(e,s,{getFn:o=he.getFn,fieldNormWeight:a=he.fieldNormWeight}={}){const i=new Ar({getFn:o,fieldNormWeight:a});return i.setKeys(e.map(Om)),i.setSources(s),i.create(),i}function nx(e,{getFn:s=he.getFn,fieldNormWeight:o=he.fieldNormWeight}={}){const{keys:a,records:i}=e,l=new Ar({getFn:s,fieldNormWeight:o});return l.setKeys(a),l.setIndexRecords(i),l}function pa(e,{errors:s=0,currentLocation:o=0,expectedLocation:a=0,distance:i=he.distance,ignoreLocation:l=he.ignoreLocation}={}){const r=s/e.length;if(l)return r;const c=Math.abs(a-o);return i?r+c/i:c?1:r}function tx(e=[],s=he.minMatchCharLength){let o=[],a=-1,i=-1,l=0;for(let r=e.length;l<r;l+=1){let c=e[l];c&&a===-1?a=l:!c&&a!==-1&&(i=l-1,i-a+1>=s&&o.push([a,i]),a=-1)}return e[l-1]&&l-a>=s&&o.push([a,l-1]),o}const ss=32;function sx(e,s,o,{location:a=he.location,distance:i=he.distance,threshold:l=he.threshold,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,includeMatches:u=he.includeMatches,ignoreLocation:p=he.ignoreLocation}={}){if(s.length>ss)throw new Error(B2(ss));const d=s.length,m=e.length,f=Math.max(0,Math.min(a,m));let h=l,_=f;const w=c>1||u,y=w?Array(m):[];let $;for(;($=e.indexOf(s,_))>-1;){let B=pa(s,{currentLocation:$,expectedLocation:f,distance:i,ignoreLocation:p});if(h=Math.min(B,h),_=$+d,w){let D=0;for(;D<d;)y[$+D]=1,D+=1}}_=-1;let I=[],k=1,M=d+m;const E=1<<d-1;for(let B=0;B<d;B+=1){let D=0,U=M;for(;D<U;)pa(s,{errors:B,currentLocation:f+U,expectedLocation:f,distance:i,ignoreLocation:p})<=h?D=U:M=U,U=Math.floor((M-D)/2+D);M=U;let le=Math.max(1,f-U+1),me=r?m:Math.min(f+U,m)+d,X=Array(me+2);X[me+1]=(1<<B)-1;for(let ke=me;ke>=le;ke-=1){let ye=ke-1,De=o[e.charAt(ye)];if(w&&(y[ye]=+!!De),X[ke]=(X[ke+1]<<1|1)&De,B&&(X[ke]|=(I[ke+1]|I[ke])<<1|1|I[ke+1]),X[ke]&E&&(k=pa(s,{errors:B,currentLocation:ye,expectedLocation:f,distance:i,ignoreLocation:p}),k<=h)){if(h=k,_=ye,_<=f)break;le=Math.max(1,2*f-_)}}if(pa(s,{errors:B+1,currentLocation:f,expectedLocation:f,distance:i,ignoreLocation:p})>h)break;I=X}const z={isMatch:_>=0,score:Math.max(.001,k)};if(w){const B=tx(y,c);B.length?u&&(z.indices=B):z.isMatch=!1}return z}function ox(e){let s={};for(let o=0,a=e.length;o<a;o+=1){const i=e.charAt(o);s[i]=(s[i]||0)|1<<a-o-1}return s}class Pm{constructor(s,{location:o=he.location,threshold:a=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){if(this.options={location:o,threshold:a,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p},this.pattern=u?s:s.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:ox(f),startIndex:h})},m=this.pattern.length;if(m>ss){let f=0;const h=m%ss,_=m-h;for(;f<_;)d(this.pattern.substr(f,ss),f),f+=ss;if(h){const w=m-ss;d(this.pattern.substr(w),w)}}else d(this.pattern,0)}searchIn(s){const{isCaseSensitive:o,includeMatches:a}=this.options;if(o||(s=s.toLowerCase()),this.pattern===s){let _={isMatch:!0,score:0};return a&&(_.indices=[[0,s.length-1]]),_}const{location:i,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,ignoreLocation:p}=this.options;let d=[],m=0,f=!1;this.chunks.forEach(({pattern:_,alphabet:w,startIndex:y})=>{const{isMatch:$,score:I,indices:k}=sx(s,_,w,{location:i+y,distance:l,threshold:r,findAllMatches:c,minMatchCharLength:u,includeMatches:a,ignoreLocation:p});$&&(f=!0),m+=I,$&&k&&(d=[...d,...k])});let h={isMatch:f,score:f?m/this.chunks.length:1};return f&&a&&(h.indices=d),h}}class Wt{constructor(s){this.pattern=s}static isMultiMatch(s){return Mu(s,this.multiRegex)}static isSingleMatch(s){return Mu(s,this.singleRegex)}search(){}}function Mu(e,s){const o=e.match(s);return o?o[1]:null}class ax extends Wt{constructor(s){super(s)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(s){const o=s===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class ix extends Wt{constructor(s){super(s)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(s){const a=s.indexOf(this.pattern)===-1;return{isMatch:a,score:a?0:1,indices:[0,s.length-1]}}}class lx extends Wt{constructor(s){super(s)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(s){const o=s.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class rx extends Wt{constructor(s){super(s)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(s){const o=!s.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class cx extends Wt{constructor(s){super(s)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(s){const o=s.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[s.length-this.pattern.length,s.length-1]}}}class ux extends Wt{constructor(s){super(s)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(s){const o=!s.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class Dm extends Wt{constructor(s,{location:o=he.location,threshold:a=he.threshold,distance:i=he.distance,includeMatches:l=he.includeMatches,findAllMatches:r=he.findAllMatches,minMatchCharLength:c=he.minMatchCharLength,isCaseSensitive:u=he.isCaseSensitive,ignoreLocation:p=he.ignoreLocation}={}){super(s),this._bitapSearch=new Pm(s,{location:o,threshold:a,distance:i,includeMatches:l,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:u,ignoreLocation:p})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(s){return this._bitapSearch.searchIn(s)}}class Nm extends Wt{constructor(s){super(s)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(s){let o=0,a;const i=[],l=this.pattern.length;for(;(a=s.indexOf(this.pattern,o))>-1;)o=a+l,i.push([a,o-1]);const r=!!i.length;return{isMatch:r,score:r?0:1,indices:i}}}const Ol=[ax,Nm,lx,rx,ux,cx,ix,Dm],Ou=Ol.length,px=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,dx="|";function mx(e,s={}){return e.split(dx).map(o=>{let a=o.trim().split(px).filter(l=>l&&!!l.trim()),i=[];for(let l=0,r=a.length;l<r;l+=1){const c=a[l];let u=!1,p=-1;for(;!u&&++p<Ou;){const d=Ol[p];let m=d.isMultiMatch(c);m&&(i.push(new d(m,s)),u=!0)}if(!u)for(p=-1;++p<Ou;){const d=Ol[p];let m=d.isSingleMatch(c);if(m){i.push(new d(m,s));break}}}return i})}const fx=new Set([Dm.type,Nm.type]);class hx{constructor(s,{isCaseSensitive:o=he.isCaseSensitive,includeMatches:a=he.includeMatches,minMatchCharLength:i=he.minMatchCharLength,ignoreLocation:l=he.ignoreLocation,findAllMatches:r=he.findAllMatches,location:c=he.location,threshold:u=he.threshold,distance:p=he.distance}={}){this.query=null,this.options={isCaseSensitive:o,includeMatches:a,minMatchCharLength:i,findAllMatches:r,ignoreLocation:l,location:c,threshold:u,distance:p},this.pattern=o?s:s.toLowerCase(),this.query=mx(this.pattern,this.options)}static condition(s,o){return o.useExtendedSearch}searchIn(s){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:i}=this.options;s=i?s:s.toLowerCase();let l=0,r=[],c=0;for(let u=0,p=o.length;u<p;u+=1){const d=o[u];r.length=0,l=0;for(let m=0,f=d.length;m<f;m+=1){const h=d[m],{isMatch:_,indices:w,score:y}=h.search(s);if(_){if(l+=1,c+=y,a){const $=h.constructor.type;fx.has($)?r=[...r,...w]:r.push(w)}}else{c=0,l=0,r.length=0;break}}if(l){let m={isMatch:!0,score:c/l};return a&&(m.indices=r),m}}return{isMatch:!1,score:1}}}const zl=[];function _x(...e){zl.push(...e)}function Pl(e,s){for(let o=0,a=zl.length;o<a;o+=1){let i=zl[o];if(i.condition(e,s))return new i(e,s)}return new Pm(e,s)}const qa={AND:"$and",OR:"$or"},Dl={PATH:"$path",PATTERN:"$val"},Nl=e=>!!(e[qa.AND]||e[qa.OR]),gx=e=>!!e[Dl.PATH],vx=e=>!vt(e)&&Tm(e)&&!Nl(e),zu=e=>({[qa.AND]:Object.keys(e).map(s=>({[s]:e[s]}))});function Fm(e,s,{auto:o=!0}={}){const a=i=>{let l=Object.keys(i);const r=gx(i);if(!r&&l.length>1&&!Nl(i))return a(zu(i));if(vx(i)){const u=r?i[Dl.PATH]:l[0],p=r?i[Dl.PATTERN]:i[u];if(!tt(p))throw new Error(W2(u));const d={keyId:Ml(u),pattern:p};return o&&(d.searcher=Pl(p,s)),d}let c={children:[],operator:l[0]};return l.forEach(u=>{const p=i[u];vt(p)&&p.forEach(d=>{c.children.push(a(d))})}),c};return Nl(e)||(e=zu(e)),a(e)}function bx(e,{ignoreFieldNorm:s=he.ignoreFieldNorm}){e.forEach(o=>{let a=1;o.matches.forEach(({key:i,norm:l,score:r})=>{const c=i?i.weight:null;a*=Math.pow(r===0&&c?Number.EPSILON:r,(c||1)*(s?1:l))}),o.score=a})}function kx(e,s){const o=e.matches;s.matches=[],Rn(o)&&o.forEach(a=>{if(!Rn(a.indices)||!a.indices.length)return;const{indices:i,value:l}=a;let r={indices:i,value:l};a.key&&(r.key=a.key.src),a.idx>-1&&(r.refIndex=a.idx),s.matches.push(r)})}function xx(e,s){s.score=e.score}function wx(e,s,{includeMatches:o=he.includeMatches,includeScore:a=he.includeScore}={}){const i=[];return o&&i.push(kx),a&&i.push(xx),e.map(l=>{const{idx:r}=l,c={item:s[r],refIndex:r};return i.length&&i.forEach(u=>{u(l,c)}),c})}class Ks{constructor(s,o={},a){this.options={...he,...o},this.options.useExtendedSearch,this._keyStore=new U2(this.options.keys),this.setCollection(s,a)}setCollection(s,o){if(this._docs=s,o&&!(o instanceof Ar))throw new Error(H2);this._myIndex=o||zm(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){Rn(s)&&(this._docs.push(s),this._myIndex.add(s))}remove(s=()=>!1){const o=[];for(let a=0,i=this._docs.length;a<i;a+=1){const l=this._docs[a];s(l,a)&&(this.removeAt(a),a-=1,i-=1,o.push(l))}return o}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:o=-1}={}){const{includeMatches:a,includeScore:i,shouldSort:l,sortFn:r,ignoreFieldNorm:c}=this.options;let u=tt(s)?tt(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return bx(u,{ignoreFieldNorm:c}),l&&u.sort(r),Am(o)&&o>-1&&(u=u.slice(0,o)),wx(u,this._docs,{includeMatches:a,includeScore:i})}_searchStringList(s){const o=Pl(s,this.options),{records:a}=this._myIndex,i=[];return a.forEach(({v:l,i:r,n:c})=>{if(!Rn(l))return;const{isMatch:u,score:p,indices:d}=o.searchIn(l);u&&i.push({item:l,idx:r,matches:[{score:p,value:l,norm:c,indices:d}]})}),i}_searchLogical(s){const o=Fm(s,this.options),a=(c,u,p)=>{if(!c.children){const{keyId:m,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:f});return h&&h.length?[{idx:p,item:u,matches:h}]:[]}const d=[];for(let m=0,f=c.children.length;m<f;m+=1){const h=c.children[m],_=a(h,u,p);if(_.length)d.push(..._);else if(c.operator===qa.AND)return[]}return d},i=this._myIndex.records,l={},r=[];return i.forEach(({$:c,i:u})=>{if(Rn(c)){let p=a(o,c,u);p.length&&(l[u]||(l[u]={idx:u,item:c,matches:[]},r.push(l[u])),p.forEach(({matches:d})=>{l[u].matches.push(...d)}))}}),r}_searchObjectList(s){const o=Pl(s,this.options),{keys:a,records:i}=this._myIndex,l=[];return i.forEach(({$:r,i:c})=>{if(!Rn(r))return;let u=[];a.forEach((p,d)=>{u.push(...this._findMatches({key:p,value:r[d],searcher:o}))}),u.length&&l.push({idx:c,item:r,matches:u})}),l}_findMatches({key:s,value:o,searcher:a}){if(!Rn(o))return[];let i=[];if(vt(o))o.forEach(({v:l,i:r,n:c})=>{if(!Rn(l))return;const{isMatch:u,score:p,indices:d}=a.searchIn(l);u&&i.push({score:p,key:s,value:l,idx:r,norm:c,indices:d})});else{const{v:l,n:r}=o,{isMatch:c,score:u,indices:p}=a.searchIn(l);c&&i.push({score:u,key:s,value:l,norm:r,indices:p})}return i}}Ks.version="6.6.2";Ks.createIndex=zm;Ks.parseIndex=nx;Ks.config=he;Ks.parseQuery=Fm;_x(hx);const yx={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},$x=["value","disabled","onKeydown"],Ix=["border","onClick"],Lx={"w-4":"","text-right":"",op50:"","text-sm":""},Cx=Me({__name:"Goto",setup(e){L(S);const s=J(),o=J(),a=J(),i=J(),l=J(""),r=J(0);function c(k){return k!=null}const u=N(()=>new Ks(Ye.map(k=>{var M;return(M=k.meta)==null?void 0:M.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=N(()=>l.value.startsWith("/")?l.value.substring(1):l.value),d=N(()=>u.value.search(p.value).map(k=>k.item)),m=N(()=>!!d.value.length);function f(){if(m.value){const k=d.value.at(r.value||0);k&&Ns(k.no)}h()}function h(){l.value="",Rs.value=!1}function _(k){k.preventDefault(),r.value++,r.value>=d.value.length&&(r.value=0),y()}function w(k){k.preventDefault(),r.value--,r.value<=-2&&(r.value=d.value.length-1),y()}function y(){var M;const k=(M=i.value)==null?void 0:M[r.value];k&&a.value&&(k.offsetTop+k.offsetHeight>a.value.offsetHeight+a.value.scrollTop?a.value.scrollTo({behavior:"smooth",top:k.offsetTop+k.offsetHeight-a.value.offsetHeight+1}):k.offsetTop<a.value.scrollTop&&a.value.scrollTo({behavior:"smooth",top:k.offsetTop}))}function $(k){r.value=0,l.value=k.target.value}function I(k){Ns(k),h()}return be(Rs,async k=>{var M;k?(l.value="",r.value=0,setTimeout(()=>{var E;return(E=o.value)==null?void 0:E.focus()},0)):(M=o.value)==null||M.blur()}),be(zt,()=>{var k;(k=s.value)!=null&&k.contains(zt.value)||h()}),(k,M)=>(b(),ie("div",{id:"slidev-goto-dialog",ref_key:"container",ref:s,class:qe(["fixed right-5 transition-all",O(Rs)?"top-5":"-top-20"]),"w-90":""},[n("div",yx,[n("input",{ref_key:"input",ref:o,value:l.value,type:"text",disabled:!O(Rs),class:qe(["outline-none bg-transparent",{"text-red-400":!m.value&&l.value}]),placeholder:"Goto...",onKeydown:[oa(f,["enter"]),oa(h,["escape"]),oa(_,["down"]),oa(w,["up"])],onInput:$},null,42,$x)]),d.value.length>0?(b(),ie("ul",{key:0,ref_key:"list",ref:a,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(b(!0),ie(Ae,null,Fs(d.value,(E,z)=>(b(),ie("li",{ref_for:!0,ref_key:"items",ref:i,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:z===0?"":"t main",class:qe(r.value===z?"bg-active op100":"op80"),onClick:cg(B=>I(E.no),["stop"])},[n("div",Lx,kn(E.no),1),t(" "+kn(E.title),1)],10,Ix))),128))],512)):we("v-if",!0)],2))}});const Sx=R(Cx,[["__scopeId","data-v-f5ee02a7"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Goto.vue"]]),Rx=Me({__name:"Controls",setup(e){L(S);const s=at(),o=at();return(a,i)=>(b(),ie(Ae,null,[A(C2,{modelValue:O(dn),"onUpdate:modelValue":i[0]||(i[0]=l=>Te(dn)?dn.value=l:null)},null,8,["modelValue"]),A(Sx),s.value?(b(),C(O(s),{key:0})):we("v-if",!0),o.value?(b(),C(O(o),{key:1,modelValue:O(Oi),"onUpdate:modelValue":i[1]||(i[1]=l=>Te(Oi)?Oi.value=l:null)},null,8,["modelValue"])):we("v-if",!0),O(Ee).info?(b(),C(P2,{key:2,modelValue:O(go),"onUpdate:modelValue":i[2]||(i[2]=l=>Te(go)?go.value=l:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),Ex=R(Rx,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Controls.vue"]]),Ax={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tx=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Mx=[Tx];function Ox(e,s){return b(),ie("svg",Ax,Mx)}const zx={name:"carbon-settings-adjust",render:Ox},Px={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dx=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Nx=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Fx=[Dx,Nx];function jx(e,s){return b(),ie("svg",Px,Fx)}const Kx={name:"carbon-information",render:jx},Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wx=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Bx=[Wx];function qx(e,s){return b(),ie("svg",Hx,Bx)}const Vx={name:"carbon-download",render:qx},Ux={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gx=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Yx=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Zx=[Gx,Yx];function Qx(e,s){return b(),ie("svg",Ux,Zx)}const Jx={name:"carbon-user-speaker",render:Qx},Xx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ew=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),nw=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),tw=[ew,nw];function sw(e,s){return b(),ie("svg",Xx,tw)}const ow={name:"carbon-presentation-file",render:sw},aw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iw=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),lw=[iw];function rw(e,s){return b(),ie("svg",aw,lw)}const cw={name:"carbon-pen",render:rw},uw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},pw=n("g",{fill:"currentColor"},[n("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),n("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),dw=[pw];function mw(e,s){return b(),ie("svg",uw,dw)}const fw={name:"ph-cursor-duotone",render:mw},hw={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_w=n("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),gw=[_w];function vw(e,s){return b(),ie("svg",hw,gw)}const jm={name:"ph-cursor-fill",render:vw},bw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kw=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),xw=[kw];function ww(e,s){return b(),ie("svg",bw,xw)}const yw={name:"carbon-sun",render:ww},$w={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iw=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Lw=[Iw];function Cw(e,s){return b(),ie("svg",$w,Lw)}const Sw={name:"carbon-moon",render:Cw},Rw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ew=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Aw=[Ew];function Tw(e,s){return b(),ie("svg",Rw,Aw)}const Mw={name:"carbon-apps",render:Tw},Ow={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zw=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Pw=[zw];function Dw(e,s){return b(),ie("svg",Ow,Pw)}const Km={name:"carbon-arrow-right",render:Dw},Nw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fw=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),jw=[Fw];function Kw(e,s){return b(),ie("svg",Nw,jw)}const Hw={name:"carbon-arrow-left",render:Kw},Ww={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bw=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),qw=[Bw];function Vw(e,s){return b(),ie("svg",Ww,qw)}const Uw={name:"carbon-maximize",render:Vw},Gw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yw=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Zw=[Yw];function Qw(e,s){return b(),ie("svg",Gw,Zw)}const Jw={name:"carbon-minimize",render:Qw},Xw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ey=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),ny=[ey];function ty(e,s){return b(),ie("svg",Xw,ny)}const sy={name:"carbon-checkmark",render:ty},oy={class:"select-list"},ay={class:"title"},iy={class:"items"},ly=["onClick"],ry=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:s}){const o=e;L(S);const a=Qe(o,"modelValue",s,{passive:!0});return(i,l)=>{const r=sy;return b(),ie("div",oy,[n("div",ay,kn(e.title),1),n("div",iy,[(b(!0),ie(Ae,null,Fs(e.items,c=>(b(),ie("div",{key:c.value,class:qe(["item",{active:O(a)===c.value}]),onClick:()=>{var u;a.value=c.value,(u=c.onClick)==null||u.call(c)}},[A(r,{class:qe(["text-green-500",{"opacity-0":O(a)!==c.value}])},null,8,["class"]),t(" "+kn(c.display||c.value),1)],10,ly))),128))])])}}});const cy=R(ry,[["__scopeId","data-v-3f89fa11"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),uy={class:"text-sm"},py=Me({__name:"Settings",setup(e){L(S);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,a)=>(b(),ie("div",uy,[A(cy,{modelValue:O(ba),"onUpdate:modelValue":a[0]||(a[0]=i=>Te(ba)?ba.value=i:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),dy=R(py,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Settings.vue"]]),my={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},fy=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:s}){const o=e;L(S);const a=Qe(o,"modelValue",s,{passive:!0}),i=J();return av(i,()=>{a.value=!1}),(l,r)=>(b(),ie("div",{ref_key:"el",ref:i,class:"flex relative"},[n("button",{class:qe({disabled:e.disabled}),onClick:r[0]||(r[0]=c=>a.value=!O(a))},[Fn(l.$slots,"button",{class:qe({disabled:e.disabled})})],2),(b(),C(od,null,[O(a)?(b(),ie("div",my,[Fn(l.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),hy=R(fy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),_y={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},gy={__name:"VerticalDivider",setup(e){return L(S),(s,o)=>(b(),ie("div",_y))}},da=R(gy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),vy={render(){return[]}},by={class:"slidev-icon-btn"},ky={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},xy={class:"my-auto"},wy={class:"opacity-50"},yy=Me({__name:"NavControls",props:{persist:{default:!1}},setup(e){const s=e;L(S);const o=Sl.smaller("md"),{isFullscreen:a,toggle:i}=xm,l=N(()=>jl.value?`?password=${jl.value}`:""),r=N(()=>`/presenter/${Ve.value}${l.value}`),c=N(()=>`/${Ve.value}${l.value}`),u=J();function p(){u.value&&zt.value&&u.value.contains(zt.value)&&zt.value.blur()}const d=N(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=at(),f=at();return Ot(()=>import("./DrawingControls-f23d4ca2.js"),[]).then(h=>f.value=h.default),(h,_)=>{const w=Jw,y=Uw,$=Hw,I=Km,k=Mw,M=Sw,E=yw,z=jm,B=fw,D=cw,U=ow,le=Oa("RouterLink"),me=Jx,X=Vx,ve=Kx,ke=zx;return b(),ie("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[n("div",{class:qe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:p},[O(mt)?we("v-if",!0):(b(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[0]||(_[0]=(...ye)=>O(i)&&O(i)(...ye))},[O(a)?(b(),C(w,{key:0})):(b(),C(y,{key:1}))])),n("button",{class:qe(["slidev-icon-btn",{disabled:!O(mO)}]),onClick:_[1]||(_[1]=(...ye)=>O(Dt)&&O(Dt)(...ye))},[A($)],2),n("button",{class:qe(["slidev-icon-btn",{disabled:!O(dO)}]),title:"Next",onClick:_[2]||(_[2]=(...ye)=>O(Pt)&&O(Pt)(...ye))},[A(I)],2),O(mt)?we("v-if",!0):(b(),ie("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:_[3]||(_[3]=ye=>O(wm)())},[A(k)])),O(Tl)?we("v-if",!0):(b(),ie("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:_[4]||(_[4]=ye=>O(Cm)())},[O(Cr)?(b(),C(M,{key:0})):(b(),C(E,{key:1}))])),A(da),O(mt)?we("v-if",!0):(b(),ie(Ae,{key:3},[!O(bn)&&!O(o)&&m.value?(b(),ie(Ae,{key:0},[A(O(m)),A(da)],64)):we("v-if",!0),O(bn)?(b(),ie("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:_[5]||(_[5]=ye=>zi.value=!O(zi))},[O(zi)?(b(),C(z,{key:0})):(b(),C(B,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!O(Ee).drawings.presenterOnly||O(bn))&&!O(mt)?(b(),ie(Ae,{key:4},[n("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:_[6]||(_[6]=ye=>nt.value=!O(nt))},[A(D),O(nt)?(b(),ie("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:O(is).color})},null,4)):we("v-if",!0)]),A(da)],64)):we("v-if",!0),O(mt)?we("v-if",!0):(b(),ie(Ae,{key:5},[O(bn)?(b(),C(le,{key:0,to:c.value,class:"slidev-icon-btn",title:"Play Mode"},{default:v(()=>[A(U)]),_:1},8,["to"])):we("v-if",!0),O(lO)?(b(),C(le,{key:1,to:r.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:v(()=>[A(me)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(b(),ie(Ae,{key:6},[O(Ee).download?(b(),ie("button",{key:0,class:"slidev-icon-btn",onClick:_[8]||(_[8]=(...ye)=>O(Kl)&&O(Kl)(...ye))},[A(X)])):we("v-if",!0)],64)),!O(bn)&&O(Ee).info&&!O(mt)?(b(),ie("button",{key:7,class:"slidev-icon-btn",onClick:_[9]||(_[9]=ye=>go.value=!O(go))},[A(ve)])):we("v-if",!0),!O(bn)&&!O(mt)?(b(),C(hy,{key:8},{button:v(()=>[n("button",by,[A(ke)])]),menu:v(()=>[A(dy)]),_:1})):we("v-if",!0),O(mt)?we("v-if",!0):(b(),C(da,{key:9})),n("div",ky,[n("div",xy,[t(kn(O(Ve))+" ",1),n("span",wy,"/ "+kn(O(rO)),1)])]),A(O(vy))],34)],512)}}}),$y=R(yy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),Iy={style:{"font-size":"0.55rem","line-height":"1rem"}},Ly=n("div",{class:"absolute bottom-0 left-1"},[n("img",{src:"https://agnelli.it/wp-content/uploads/2021/02/logo_agnelli.png",width:"60"})],-1),Cy={class:"absolute bottom-1 left-89 text-gray-700"},Sy={key:0,class:"absolute bottom-1 right-1 text-gray-700"},Ry={__name:"global-top",setup(e){const s=L(S);return(o,a)=>(b(),ie("footer",Iy,[Ly,n("div",Cy," ITT E.Agnelli - Informatica - "+kn(O(s).configs.materia)+" - prof. Antonio Mancuso - a.s. "+kn(O(s).configs.as)+" - v "+kn(O(s).configs.version||0),1),O(s).nav.currentPage!==1&&O(s).nav.currentPage!=O(s).nav.total+1?(b(),ie("div",Sy,kn(O(s).nav.currentPage-1)+" / "+kn(O(s).nav.total-1),1)):we("v-if",!0)]))}},Ey=R(Ry,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/global-top.vue"]]),Hm={render(){return[yn(Ey)]}},Wm={render(){return[]}},Ay={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Ty=Me({__name:"PresenterMouse",setup(e){return L(S),(s,o)=>{const a=jm;return O(Ei).cursor?(b(),ie("div",Ay,[A(a,{class:"absolute",style:tn({left:`${O(Ei).cursor.x}%`,top:`${O(Ei).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),My=R(Ty,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Oy=Me({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){L(S),be(mn,()=>{var a,i;(a=mn.value)!=null&&a.meta&&mn.value.meta.preload!==!1&&(mn.value.meta.__preloaded=!0),(i=Fi.value)!=null&&i.meta&&Fi.value.meta.preload!==!1&&(Fi.value.meta.__preloaded=!0)},{immediate:!0});const s=at();Ot(()=>import("./DrawingLayer-f6af6d6f.js"),[]).then(a=>s.value=a.default);const o=N(()=>Ye.filter(a=>{var i;return((i=a.meta)==null?void 0:i.__preloaded)||a===mn.value}));return(a,i)=>(b(),ie(Ae,null,[we(" Global Bottom "),A(O(Wm)),we(" Slides "),A(tg,G(O(_O),{id:"slideshow",tag:"div"}),{default:v(()=>[(b(!0),ie(Ae,null,Fs(o.value,l=>{var r;return td((b(),C(O(Er),{key:l.path,is:l==null?void 0:l.component,clicks:l===O(mn)?O(Dn):0,"clicks-elements":((r=l.meta)==null?void 0:r.__clicksElements)||[],"clicks-disabled":!1,class:qe(O(Rr)(l)),route:l,context:a.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Md,l===O(mn)]])}),128))]),_:1},16),we(" Global Top "),A(O(Hm)),s.value?(b(),C(O(s),{key:0})):we("v-if",!0),O(bn)?we("v-if",!0):(b(),C(My,{key:1}))],64))}});const zy=R(Oy,[["__scopeId","data-v-afb4231e"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Py=Me({__name:"PrintStyle",setup(e){L(S);function s(o,{slots:a}){if(a.default)return yn("style",a.default())}return(o,a)=>(b(),C(s,null,{default:v(()=>[t(" @page { size: "+kn(O(Mt))+"px "+kn(O(wr))+"px; margin: 0px; } ",1)]),_:1}))}}),Bm=R(Py,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Dy=Me({__name:"Play",setup(e){L(S),f2();const s=J();function o(l){var r;bu.value||((r=l.target)==null?void 0:r.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?Pt():Dt())}gO(s);const a=N(()=>$k.value||bu.value);at();const i=at();return Ot(()=>import("./DrawingControls-f23d4ca2.js"),[]).then(l=>i.value=l.default),(l,r)=>(b(),ie(Ae,null,[O(Ds)?(b(),C(Bm,{key:0})):we("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:tn(O(yr))},[A(Rm,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:O(Ds)?O(hs).width.value:void 0,scale:O(ba),onPointerdown:o},{default:v(()=>[A(zy,{context:"slide"})]),controls:v(()=>[n("div",{class:qe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[a.value?"opacity-100 right-0":"opacity-0 p-2",O(To)?"pointer-events-none":""]])},[A($y,{class:"m-auto",persist:a.value},null,8,["persist"])],2),!O(Ee).drawings.presenterOnly&&!O(mt)&&i.value?(b(),C(O(i),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),A(Ex)],64))}}),Ny=R(Dy,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function qm(e){return typeof e>"u"||e===null}function Fy(e){return typeof e=="object"&&e!==null}function jy(e){return Array.isArray(e)?e:qm(e)?[]:[e]}function Ky(e,s){var o,a,i,l;if(s)for(l=Object.keys(s),o=0,a=l.length;o<a;o+=1)i=l[o],e[i]=s[i];return e}function Hy(e,s){var o="",a;for(a=0;a<s;a+=1)o+=e;return o}function Wy(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var By=qm,qy=Fy,Vy=jy,Uy=Hy,Gy=Wy,Yy=Ky,Tr={isNothing:By,isObject:qy,toArray:Vy,repeat:Uy,isNegativeZero:Gy,extend:Yy};function Vm(e,s){var o="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(o+='in "'+e.mark.name+'" '),o+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!s&&e.mark.snippet&&(o+=`

`+e.mark.snippet),a+" "+o):a}function Oo(e,s){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=s,this.message=Vm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Oo.prototype=Object.create(Error.prototype);Oo.prototype.constructor=Oo;Oo.prototype.toString=function(s){return this.name+": "+Vm(this,s)};var os=Oo,Zy=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Qy=["scalar","sequence","mapping"];function Jy(e){var s={};return e!==null&&Object.keys(e).forEach(function(o){e[o].forEach(function(a){s[String(a)]=o})}),s}function Xy(e,s){if(s=s||{},Object.keys(s).forEach(function(o){if(Zy.indexOf(o)===-1)throw new os('Unknown option "'+o+'" is met in definition of "'+e+'" YAML type.')}),this.options=s,this.tag=e,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(o){return o},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=Jy(s.styleAliases||null),Qy.indexOf(this.kind)===-1)throw new os('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var rn=Xy;function Pu(e,s){var o=[];return e[s].forEach(function(a){var i=o.length;o.forEach(function(l,r){l.tag===a.tag&&l.kind===a.kind&&l.multi===a.multi&&(i=r)}),o[i]=a}),o}function e$(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,o;function a(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(s=0,o=arguments.length;s<o;s+=1)arguments[s].forEach(a);return e}function Fl(e){return this.extend(e)}Fl.prototype.extend=function(s){var o=[],a=[];if(s instanceof rn)a.push(s);else if(Array.isArray(s))a=a.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(o=o.concat(s.implicit)),s.explicit&&(a=a.concat(s.explicit));else throw new os("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof rn))throw new os("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new os("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new os("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(l){if(!(l instanceof rn))throw new os("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Fl.prototype);return i.implicit=(this.implicit||[]).concat(o),i.explicit=(this.explicit||[]).concat(a),i.compiledImplicit=Pu(i,"implicit"),i.compiledExplicit=Pu(i,"explicit"),i.compiledTypeMap=e$(i.compiledImplicit,i.compiledExplicit),i};var n$=Fl,t$=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),s$=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),o$=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),a$=new n$({explicit:[t$,s$,o$]});function i$(e){if(e===null)return!0;var s=e.length;return s===1&&e==="~"||s===4&&(e==="null"||e==="Null"||e==="NULL")}function l$(){return null}function r$(e){return e===null}var c$=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:i$,construct:l$,predicate:r$,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function u$(e){if(e===null)return!1;var s=e.length;return s===4&&(e==="true"||e==="True"||e==="TRUE")||s===5&&(e==="false"||e==="False"||e==="FALSE")}function p$(e){return e==="true"||e==="True"||e==="TRUE"}function d$(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var m$=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:u$,construct:p$,predicate:d$,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function f$(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function h$(e){return 48<=e&&e<=55}function _$(e){return 48<=e&&e<=57}function g$(e){if(e===null)return!1;var s=e.length,o=0,a=!1,i;if(!s)return!1;if(i=e[o],(i==="-"||i==="+")&&(i=e[++o]),i==="0"){if(o+1===s)return!0;if(i=e[++o],i==="b"){for(o++;o<s;o++)if(i=e[o],i!=="_"){if(i!=="0"&&i!=="1")return!1;a=!0}return a&&i!=="_"}if(i==="x"){for(o++;o<s;o++)if(i=e[o],i!=="_"){if(!f$(e.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}if(i==="o"){for(o++;o<s;o++)if(i=e[o],i!=="_"){if(!h$(e.charCodeAt(o)))return!1;a=!0}return a&&i!=="_"}}if(i==="_")return!1;for(;o<s;o++)if(i=e[o],i!=="_"){if(!_$(e.charCodeAt(o)))return!1;a=!0}return!(!a||i==="_")}function v$(e){var s=e,o=1,a;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),a=s[0],(a==="-"||a==="+")&&(a==="-"&&(o=-1),s=s.slice(1),a=s[0]),s==="0")return 0;if(a==="0"){if(s[1]==="b")return o*parseInt(s.slice(2),2);if(s[1]==="x")return o*parseInt(s.slice(2),16);if(s[1]==="o")return o*parseInt(s.slice(2),8)}return o*parseInt(s,10)}function b$(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Tr.isNegativeZero(e)}var k$=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:g$,construct:v$,predicate:b$,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),x$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function w$(e){return!(e===null||!x$.test(e)||e[e.length-1]==="_")}function y$(e){var s,o;return s=e.replace(/_/g,"").toLowerCase(),o=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:o*parseFloat(s,10)}var $$=/^[-+]?[0-9]+e/;function I$(e,s){var o;if(isNaN(e))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Tr.isNegativeZero(e))return"-0.0";return o=e.toString(10),$$.test(o)?o.replace("e",".e"):o}function L$(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Tr.isNegativeZero(e))}var C$=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:w$,construct:y$,predicate:L$,represent:I$,defaultStyle:"lowercase"}),S$=a$.extend({implicit:[c$,m$,k$,C$]}),R$=S$,Um=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Gm=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function E$(e){return e===null?!1:Um.exec(e)!==null||Gm.exec(e)!==null}function A$(e){var s,o,a,i,l,r,c,u=0,p=null,d,m,f;if(s=Um.exec(e),s===null&&(s=Gm.exec(e)),s===null)throw new Error("Date resolve error");if(o=+s[1],a=+s[2]-1,i=+s[3],!s[4])return new Date(Date.UTC(o,a,i));if(l=+s[4],r=+s[5],c=+s[6],s[7]){for(u=s[7].slice(0,3);u.length<3;)u+="0";u=+u}return s[9]&&(d=+s[10],m=+(s[11]||0),p=(d*60+m)*6e4,s[9]==="-"&&(p=-p)),f=new Date(Date.UTC(o,a,i,l,r,c,u)),p&&f.setTime(f.getTime()-p),f}function T$(e){return e.toISOString()}var M$=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:E$,construct:A$,instanceOf:Date,represent:T$});function O$(e){return e==="<<"||e===null}var z$=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:O$}),Mr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function P$(e){if(e===null)return!1;var s,o,a=0,i=e.length,l=Mr;for(o=0;o<i;o++)if(s=l.indexOf(e.charAt(o)),!(s>64)){if(s<0)return!1;a+=6}return a%8===0}function D$(e){var s,o,a=e.replace(/[\r\n=]/g,""),i=a.length,l=Mr,r=0,c=[];for(s=0;s<i;s++)s%4===0&&s&&(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)),r=r<<6|l.indexOf(a.charAt(s));return o=i%4*6,o===0?(c.push(r>>16&255),c.push(r>>8&255),c.push(r&255)):o===18?(c.push(r>>10&255),c.push(r>>2&255)):o===12&&c.push(r>>4&255),new Uint8Array(c)}function N$(e){var s="",o=0,a,i,l=e.length,r=Mr;for(a=0;a<l;a++)a%3===0&&a&&(s+=r[o>>18&63],s+=r[o>>12&63],s+=r[o>>6&63],s+=r[o&63]),o=(o<<8)+e[a];return i=l%3,i===0?(s+=r[o>>18&63],s+=r[o>>12&63],s+=r[o>>6&63],s+=r[o&63]):i===2?(s+=r[o>>10&63],s+=r[o>>4&63],s+=r[o<<2&63],s+=r[64]):i===1&&(s+=r[o>>2&63],s+=r[o<<4&63],s+=r[64],s+=r[64]),s}function F$(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var j$=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:P$,construct:D$,predicate:F$,represent:N$}),K$=Object.prototype.hasOwnProperty,H$=Object.prototype.toString;function W$(e){if(e===null)return!0;var s=[],o,a,i,l,r,c=e;for(o=0,a=c.length;o<a;o+=1){if(i=c[o],r=!1,H$.call(i)!=="[object Object]")return!1;for(l in i)if(K$.call(i,l))if(!r)r=!0;else return!1;if(!r)return!1;if(s.indexOf(l)===-1)s.push(l);else return!1}return!0}function B$(e){return e!==null?e:[]}var q$=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:W$,construct:B$}),V$=Object.prototype.toString;function U$(e){if(e===null)return!0;var s,o,a,i,l,r=e;for(l=new Array(r.length),s=0,o=r.length;s<o;s+=1){if(a=r[s],V$.call(a)!=="[object Object]"||(i=Object.keys(a),i.length!==1))return!1;l[s]=[i[0],a[i[0]]]}return!0}function G$(e){if(e===null)return[];var s,o,a,i,l,r=e;for(l=new Array(r.length),s=0,o=r.length;s<o;s+=1)a=r[s],i=Object.keys(a),l[s]=[i[0],a[i[0]]];return l}var Y$=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:U$,construct:G$}),Z$=Object.prototype.hasOwnProperty;function Q$(e){if(e===null)return!0;var s,o=e;for(s in o)if(Z$.call(o,s)&&o[s]!==null)return!1;return!0}function J$(e){return e!==null?e:{}}var X$=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:Q$,construct:J$});R$.extend({implicit:[M$,z$],explicit:[j$,q$,Y$,X$]});function Du(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var eI=new Array(256),nI=new Array(256);for(var Cs=0;Cs<256;Cs++)eI[Cs]=Du(Cs)?1:0,nI[Cs]=Du(Cs);function tI(e){return Array.from(new Set(e))}function Nu(...e){let s,o,a;e.length===1?(s=0,a=1,[o]=e):[s,o,a=1]=e;const i=[];let l=s;for(;l<o;)i.push(l),l+=a||1;return i}function Ym(e,s){if(!s||s==="all"||s==="*")return Nu(1,e+1);const o=[];for(const a of s.split(/[,;]/g))if(!a.includes("-"))o.push(+a);else{const[i,l]=a.split("-",2);o.push(...Nu(+i,l?+l+1:e+1))}return tI(o).filter(a=>a<=e).sort((a,i)=>a-i)}function Zm(e){const s=N(()=>e.value.path),o=N(()=>Ye.length-1),a=N(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),i=N(()=>mi(a.value)),l=N(()=>Ye.find(f=>f.path===`${a.value}`)),r=N(()=>{var f,h,_;return(_=(h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:_.id}),c=N(()=>{var f,h;return((h=(f=l.value)==null?void 0:f.meta)==null?void 0:h.layout)||(a.value===1?"cover":"default")}),u=N(()=>Ye.find(f=>f.path===`${Math.min(Ye.length,a.value+1)}`)),p=N(()=>Ye.filter(f=>{var h,_;return(_=(h=f.meta)==null?void 0:h.slide)==null?void 0:_.title}).reduce((f,h)=>(Or(f,h),f),[])),d=N(()=>zr(p.value,l.value)),m=N(()=>Pr(d.value));return{route:e,path:s,total:o,currentPage:a,currentPath:i,currentRoute:l,currentSlideId:r,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m,downloadPDF:Kl,next:Pt,nextSlide:zo,openInEditor:vO,prev:Dt,prevSlide:Po}}function Qm(e,s,o){const a=J(0);an(()=>{wn.afterEach(async()=>{await an(),a.value+=1})});const i=N(()=>{var u,p;return a.value,((p=(u=s.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),l=N(()=>{var u,p;return+(((p=(u=s.value)==null?void 0:u.meta)==null?void 0:p.clicks)??i.value.length)}),r=N(()=>o.value<Ye.length-1||e.value<l.value),c=N(()=>o.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:l,hasNext:r,hasPrev:c}}const sI=["id"],oI=Me({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:s}){const o=e,a=Qe(o,"clicksElements",s),i=N(()=>({height:`${wr}px`,width:`${Mt}px`})),l=at();Ot(()=>Promise.resolve().then(()=>y2),void 0).then(p=>l.value=p.default);const r=N(()=>o.clicks),c=Qm(r,o.nav.currentRoute,o.nav.currentPage),u=N(()=>`${o.route.path.toString().padStart(3,"0")}-${(r.value+1).toString().padStart(2,"0")}`);return Sn(S,Be({nav:{...o.nav,...c},configs:Ee,themeConfigs:N(()=>Ee.themeConfig)})),(p,d)=>{var m;return b(),ie("div",{id:u.value,class:"print-slide-container",style:tn(i.value)},[A(O(Wm)),A(O(Er),{is:(m=p.route)==null?void 0:m.component,"clicks-elements":O(a),"onUpdate:clicksElements":d[0]||(d[0]=f=>Te(a)?a.value=f:null),clicks:r.value,"clicks-disabled":!1,class:qe(O(Rr)(p.route)),route:p.route},null,8,["is","clicks-elements","clicks","class","route"]),l.value?(b(),C(O(l),{key:0,page:+p.route.path},null,8,["page"])):we("v-if",!0),A(O(Hm))],12,sI)}}}),Fu=R(oI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),aI=Me({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var l;const s=e;L(S);const o=J(((l=s.route.meta)==null?void 0:l.__clicksElements)||[]),a=N(()=>s.route),i=Zm(a);return(r,c)=>(b(),ie(Ae,null,[A(Fu,{"clicks-elements":o.value,"onUpdate:clicksElements":c[0]||(c[0]=u=>o.value=u),clicks:0,nav:O(i),route:a.value},null,8,["clicks-elements","nav","route"]),O(vo)?we("v-if",!0):(b(!0),ie(Ae,{key:0},Fs(o.value.length,u=>(b(),C(Fu,{key:u,clicks:u,nav:O(i),route:a.value},null,8,["clicks","nav","route"]))),128))],64))}}),iI=R(aI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),lI={id:"print-content"},rI=Me({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const s=e;L(S);const o=N(()=>s.width),a=N(()=>s.width/Tt),i=N(()=>o.value/a.value),l=N(()=>i.value<Tt?o.value/Mt:a.value*Tt/Mt);let r=Ye.slice(0,-1);jn.value.query.range&&(r=Ym(r.length,jn.value.query.range).map(p=>r[p-1]));const c=N(()=>({"select-none":!Ee.selectable,"slidev-code-line-numbers":Ee.lineNumbers}));return Sn(Bd,l),(u,p)=>(b(),ie("div",{id:"print-container",class:qe(c.value)},[n("div",lI,[(b(!0),ie(Ae,null,Fs(O(r),d=>(b(),C(iI,{key:d.path,route:d},null,8,["route"]))),128))]),Fn(u.$slots,"controls")],2))}});const cI=R(rI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),uI=Me({__name:"Print",setup(e){return L(S),ks(()=>{Ds?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,o)=>(b(),ie(Ae,null,[O(Ds)?(b(),C(Bm,{key:0})):we("v-if",!0),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(O(yr))},[A(cI,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:O(hs).width.value},null,8,["style","width"])],4)],64))}});const pI=R(uI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/internals/Print.vue"]]);const dI={class:"slidev-layout end"},mI={__name:"end",setup(e){return L(S),(s,o)=>(b(),ie("div",dI,[Fn(s.$slots,"default",{},()=>[t("END")],!0)]))}},fI=R(mI,[["__scopeId","data-v-e532b98d"],["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/end.vue"]]);function ju(e){return e.startsWith("/")?"/3/linux_cli/"+e.slice(1):e}function hI(e,s=!1){const o=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),a={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${ju(e)})`:`url("${ju(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const _I={class:"my-auto w-full"},gI=Me({__name:"cover",props:{background:{default:""}},setup(e){const s=e;L(S);const o=N(()=>hI(s.background,!0));return(a,i)=>(b(),ie("div",{class:"slidev-layout cover",style:tn(o.value)},[n("div",_I,[Fn(a.$slots,"default")])],4))}}),vI=R(gI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/theme-default/layouts/cover.vue"]]),bI=n("h1",null,"RETI 3",-1),kI=n("p",null,"Linux CLI",-1),xI={class:"pt-12"},wI={class:"px-2 py-1"},yI={__name:"1",setup(e){const s={theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.1.1"};return L(S),(o,a)=>{const i=Km;return b(),C(vI,j(F(s)),{default:v(()=>[we(" https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook "),bI,kI,n("div",xI,[n("span",wI,[t(" Premi spazio o "),A(i,{class:"inline"}),t(" per la prossima slide ")])])]),_:1},16)}}},$I=R(yI,[["__file","/@slidev/slides/1.md"]]),II="/3/linux_cli/assets/cli_00-1fd55adb.png",LI={class:"slidev-layout default"},CI={__name:"default",setup(e){return L(S),(s,o)=>(b(),ie("div",LI,[Fn(s.$slots,"default")]))}},K=R(CI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/layouts/default.vue"]]),SI=n("h1",null,"Linux CLI",-1),RI=n("img",{src:II,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),EI={__name:"2",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[SI,RI]),_:1},16))}},AI=R(EI,[["__file","/@slidev/slides/2.md"]]),TI="/3/linux_cli/assets/c_01-ec6830b4.jpg",MI=n("h1",null,"Linux CLI",-1),OI=n("img",{src:TI,width:"650",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),zI={__name:"3",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[MI,OI]),_:1},16))}},PI=R(zI,[["__file","/@slidev/slides/3.md"]]),DI="/3/linux_cli/assets/c_02-25fc3292.jpg",NI=n("h1",null,"Linux CLI",-1),FI=n("img",{src:DI,width:"600",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),jI={__name:"4",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[NI,FI]),_:1},16))}},KI=R(jI,[["__file","/@slidev/slides/4.md"]]),HI="/3/linux_cli/assets/c_03-2292d779.jpg",WI=n("h1",null,"Linux CLI",-1),BI=n("img",{src:HI,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),qI={__name:"5",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[WI,BI]),_:1},16))}},VI=R(qI,[["__file","/@slidev/slides/5.md"]]),UI=n("h1",null,"Linux CLI",-1),GI=n("p",null,"Materiale Aggiuntivo",-1),YI=n("ul",null,[n("li",null,[n("a",{href:"/support/3/linux_cli/linux_commands.pdf",target:"_blank",rel:"noopener"},"Linux CLI Commands")]),n("li",null,[n("a",{href:"/support/3/linux_cli/introduction-to-bash-scripting-light.pdf",target:"_blank",rel:"noopener"},"Introduction to Bash")])],-1),ZI={__name:"6",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[UI,GI,YI]),_:1},16))}},QI=R(ZI,[["__file","/@slidev/slides/6.md"]]),JI={class:"cover"},XI=Me({__name:"Cover",props:{bg:{default:"yellow"},fg:{default:"black"},fs:{default:"80px"}},setup(e,{emit:s}){const o=e;Ld(r=>({"759f654d-fs":O(l),"759f654d-bgcol":O(a),"759f654d-fgcol":O(i)})),L(S);const a=Qe(o,"bg",s),i=Qe(o,"fg",s),l=Qe(o,"fs",s);return(r,c)=>(b(),ie("div",JI,[Fn(r.$slots,"default")]))}});const rt=R(XI,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Cover.vue"]]),e4=n("p",null," ",-1),n4={__name:"7",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[e4,A(i,{fs:"100px"},{default:v(()=>[t(" Intro ")]),_:1})]),_:1},16)}}},t4=R(n4,[["__file","/@slidev/slides/7.md"]]),s4=n("h1",null,"Linux CLI",-1),o4=n("p",null,"Introduzione",-1),a4=n("ul",null,[n("li",null,"Unix e Linux hanno una lunga tradizione nel fornire degli ambienti grafici per le proprie versioni o distribuzioni."),n("li",null,"Oggi ci sono decine di ambienti desktop diversi per Linux, al contrario di 1 solo per Windows e MAC"),n("li",null,"Questo è legato a motivi storici e legato al concetto che ogni utente può scegliere veramente l’ambiente che preferisce ed è maggiormente congeniale per lui"),n("li",null,[t("Alcuni tra i più popolari ambienti desktop sono "),n("ul",null,[n("li",null,"Gnome"),n("li",null,"KDE"),n("li",null,"XFCE"),n("li",null,"LXQt"),n("li",null,"Cinnamon"),n("li",null,"Mate"),n("li",null,"Unit")])])],-1),i4={__name:"8",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[s4,o4,a4]),_:1},16))}},l4=R(i4,[["__file","/@slidev/slides/8.md"]]),r4=n("h1",null,"Linux CLI",-1),c4=n("p",null,"Introduzione",-1),u4=n("ul",null,[n("li",null,"Gli ambienti desktop sono molto evoluti e permettono all’utente di svolgere qualsiasi funzione necessaria durante l’utilizzo convenzionale del PC con Linux, esattamente come avviene per un utente Windows o Mac"),n("li",null,"Oggi un utente Desktop Linux non sente la mancanza di nessuno strumento disponibile su Windows o Mac"),n("li",null,[t("Tuttavia per quanto un’ambiente possa essere evoluto, per sfruttare al meglio e al massimo le funzionalità di un sistema Linux è necessario utilizzare uno strumento imprescindibile che si chiama "),n("code",null,"CLI")])],-1),p4=n("p",null,[n("span",{class:"cli",style:{"font-size":"3rem",margin:"70px auto","text-align":"center",display:"block",width:"85%",color:"#00fe00",background:"black","line-height":"4rem",height:"4rem"}},"Command Line Interface")],-1),d4={__name:"9",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[r4,c4,u4,p4]),_:1},16))}},m4=R(d4,[["__file","/@slidev/slides/9.md"]]),f4="/3/linux_cli/assets/cli_01-79073bdb.png",h4=n("h1",null,"Linux CLI",-1),_4=n("p",null,"Introduzione",-1),g4=n("img",{src:f4,width:"750",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),v4={__name:"10",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[h4,_4,g4]),_:1},16))}},b4=R(v4,[["__file","/@slidev/slides/10.md"]]),k4="/3/linux_cli/assets/cli_02-be67e48e.png",x4=n("h1",null,"Linux CLI",-1),w4=n("p",null,"Introduzione",-1),y4=n("ul",null,[n("li",null,"La Linea di Comando di Linux (Command Line Interface, CLI) è un’interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali.")],-1),$4=n("img",{src:k4,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),I4={__name:"11",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[x4,w4,y4,$4]),_:1},16))}},L4=R(I4,[["__file","/@slidev/slides/11.md"]]),C4=n("h1",null,"Linux CLI",-1),S4=n("p",null,"Introduzione",-1),R4=n("ul",null,[n("li",null,"A differenza delle interfacce grafiche, che utilizzano icone e finestre, la CLI richiede l’uso di comandi testuali per eseguire operazioni sul sistema."),n("li",null,[t("La CLI di Linux offre numerosi vantaggi, tra cui: "),n("ul",null,[n("li",null,[t("il controllo più preciso e potente sul sistema ("),n("em",null,"root mode"),t(")")]),n("li",null,[t("crea i tuoi comandi per risolvere i tuoi problemi ("),n("em",null,"god mode"),t(")")]),n("li",null,[t("l’automazione delle attività ripetitive ("),n("em",null,"Productive laziness - Do it right, do it once. That’s the lazy option."),t(")")]),n("li",null,"la possibilità di lavorare in ambienti in cui le interfacce grafiche non sono disponibili (server remoti, sistemi embedded)."),n("li",null,"maggior velocità, flessibilità ed efficienza")])])],-1),E4={__name:"12",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[C4,S4,R4]),_:1},16))}},A4=R(E4,[["__file","/@slidev/slides/12.md"]]),T4=n("p",null," ",-1),M4={__name:"13",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[T4,A(i,{fs:"100px"},{default:v(()=>[t(" Cenni Storici ")]),_:1})]),_:1},16)}}},O4=R(M4,[["__file","/@slidev/slides/13.md"]]),z4="/3/linux_cli/assets/cli_16-36df4747.png",P4=n("h1",null,"Linux CLI",-1),D4=n("p",null,"Breve Storia",-1),N4=n("ul",null,[n("li",null,[t("La "),n("em",null,"Bourne Shell"),t(" (sh) è stata originariamente sviluppata da Stephen Bourne mentre lavorava ai Bell Labs.")]),n("li",null,"Rilasciato nel 1979 nella versione Unix versione 7 distribuita a college e università."),n("li",null,[t("La "),n("code",null,"Bourne Again Shell"),t(" ("),n("strong",null,"bash"),t(") è stata scritta come sostituto gratuito e open source della Bourne Shell.")]),n("li",null,"Data la natura aperta di Bash, nel tempo è stata adottata come shell predefinita sulla maggior parte dei sistemi Linux."),n("li",null,[t("Esistono molte altre shell (csh, ksh) ed in epoca più moderna "),n("strong",null,"zsh"),t(" e "),n("strong",null,"fish")])],-1),F4=n("img",{src:z4,width:"800",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),j4={__name:"14",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[P4,D4,N4,F4]),_:1},16))}},K4=R(j4,[["__file","/@slidev/slides/14.md"]]),H4="/3/linux_cli/assets/cli_04-092808b1.png",W4=n("h1",null,"Linux CLI",-1),B4=n("img",{src:H4,width:"700",style:{margin:"auto",position:"relative",left:"0px",top:"-10px"}},null,-1),q4={__name:"15",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[W4,B4]),_:1},16))}},V4=R(q4,[["__file","/@slidev/slides/15.md"]]),U4="/3/linux_cli/assets/cli_03-dd7d6ef3.png",G4=n("h1",null,"Linux CLI",-1),Y4=n("img",{src:U4,width:"600",style:{margin:"auto",position:"relative",left:"0px",top:"-10px"}},null,-1),Z4={__name:"16",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[G4,Y4]),_:1},16))}},Q4=R(Z4,[["__file","/@slidev/slides/16.md"]]),J4=n("p",null," ",-1),X4={__name:"17",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[J4,A(i,{fs:"100px"},{default:v(()=>[t(" Concetti Chiave ")]),_:1})]),_:1},16)}}},e3=R(X4,[["__file","/@slidev/slides/17.md"]]),n3="/3/linux_cli/assets/cli_05-ad4cc1fd.png",t3=n("h1",null,"Linux CLI",-1),s3=n("div",{style:{width:"50%"}},[n("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:"),n("ul",null,[n("li",null,[n("strong",null,"Terminale"),t(": Il terminale è l’ambiente in cui vengono inseriti i comandi. E’ un’applicazione che fornisce un’interfaccia testuale per interagire con il sistema operativo. Mostra un prompt, di solito indicato dal simbolo del dollaro ($) per gli utenti normali e dal cancelletto (#) per l’utente root con privilegi amministrativi.")]),n("li",null,[n("strong",null,"Comandi"),t(": I comandi sono le istruzioni testuali che vengono inserite nel terminale per eseguire azioni specifiche. Un comando è generalmente composto da un nome di comando seguito da argomenti e opzioni. Ad esempio, il comando ls -l elenca i file e le directory con dettagli.")])])],-1),o3=n("img",{src:n3,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-450px"}},null,-1),a3={__name:"18",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[t3,s3,o3]),_:1},16))}},i3=R(a3,[["__file","/@slidev/slides/18.md"]]),l3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r3=n("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),c3=[r3];function u3(e,s){return b(),ie("svg",l3,c3)}const p3={name:"ph-clipboard",render:u3},d3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},m3=n("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),f3=[m3];function h3(e,s){return b(),ie("svg",d3,f3)}const _3={name:"ph-check-circle",render:h3},g3=["title"],v3=Me({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const s=e;L(S);const o=L(mo),a=L(ns),i=L(fo);function l(m=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_=h.length;for(let w=0;w<m;w++)f.push(h.charAt(Math.floor(Math.random()*_)));return f.join("")}const r=J(),c=$n();kt(()=>{const m=s.at==null?a==null?void 0:a.value.length:s.at,f=N(()=>i!=null&&i.value?s.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(m||0)),s.ranges.length-1)),h=N(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(i!=null&&i.value)){const _=l(),w=m0(s.ranges.length-1).map(y=>_+y);a!=null&&a.value&&(a.value.push(...w),Bo(()=>w.forEach(y=>bl(a.value,y)),c))}ks(()=>{if(!r.value)return;const w=r.value.querySelector(".shiki-dark")?Array.from(r.value.querySelectorAll(".shiki")):[r.value];for(const y of w){const $=Array.from(y.querySelectorAll(".line")),I=Ym($.length,h.value);if($.forEach((k,M)=>{const E=I.includes(M+1);k.classList.toggle(Qt,!0),k.classList.toggle("highlighted",E),k.classList.toggle("dishonored",!E)}),s.maxHeight){const k=Array.from(y.querySelectorAll(".line.highlighted"));k.reduce((E,z)=>z.offsetHeight+E,0)>r.value.offsetHeight?k[0].scrollIntoView({behavior:"smooth",block:"start"}):k.length>0&&k[Math.round((k.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=mv();function d(){var f,h;const m=(h=(f=r.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;m&&p(m)}return(m,f)=>{const h=_3,_=p3;return b(),ie("div",{ref_key:"el",ref:r,class:"slidev-code-wrapper relative group",style:tn({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[Fn(m.$slots,"default"),O(Ee).codeCopy?(b(),ie("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:O(u)?"Copied":"Copy",onClick:f[0]||(f[0]=w=>d())},[O(u)?(b(),C(h,{key:0,class:"p-2 w-8 h-8"})):(b(),C(_,{key:1,class:"p-2 w-8 h-8"}))],8,g3)):we("v-if",!0)],4)}}}),te=R(v3,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),b3=n("h1",null,"Linux CLI",-1),k3=n("p",null,"File System",-1),x3=n("div",{style:{width:"50%"}},[n("p",null,[n("strong",null,"File System"),t(":")]),n("ul",null,[n("li",null,"Linux organizza file e directory in una struttura ad albero chiamata file system."),n("li",null,'Il file system di Linux segue la filosofia "tutto è un file", che significa che anche le periferiche hardware sono rappresentate come file.')]),n("p",null,[n("strong",null,"Path"),t(":")]),n("ul",null,[n("li",null,"Il percorso è la posizione di un file o di una directory all’interno del File System."),n("li",null,"Il percorso assoluto inizia dalla radice del sistema (/)"),n("li",null,"Il percorso relativo si basa sulla posizione corrente.")])],-1),w3={style:{width:"50%",position:"relative",top:"-490px",left:"450px"}},y3=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("❯❯❯ tree "),n("span",{class:"token parameter variable"},"-L"),t(),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},"/"),t(`
`),n("span",{class:"line"},[t("├── bin -"),n("span",{class:"token operator"},">"),t(" usr/bin")]),t(`
`),n("span",{class:"line"},"├── boot"),t(`
`),n("span",{class:"line"},"├── dev"),t(`
`),n("span",{class:"line"},"├── etc"),t(`
`),n("span",{class:"line"},"├── home"),t(`
`),n("span",{class:"line"},[t("├── lib -"),n("span",{class:"token operator"},">"),t(" usr/lib")]),t(`
`),n("span",{class:"line"},[t("├── lib32 -"),n("span",{class:"token operator"},">"),t(" usr/lib32")]),t(`
`),n("span",{class:"line"},[t("├── lib64 -"),n("span",{class:"token operator"},">"),t(" usr/lib64")]),t(`
`),n("span",{class:"line"},[t("├── libx32 -"),n("span",{class:"token operator"},">"),t(" usr/libx32")]),t(`
`),n("span",{class:"line"},"├── lost+found"),t(`
`),n("span",{class:"line"},"├── media"),t(`
`),n("span",{class:"line"},"├── mnt"),t(`
`),n("span",{class:"line"},"├── opt"),t(`
`),n("span",{class:"line"},"├── proc"),t(`
`),n("span",{class:"line"},"├── root"),t(`
`),n("span",{class:"line"},"├── run"),t(`
`),n("span",{class:"line"},[t("├── sbin -"),n("span",{class:"token operator"},">"),t(" usr/sbin")]),t(`
`),n("span",{class:"line"},"├── srv"),t(`
`),n("span",{class:"line"},"├── sys"),t(`
`),n("span",{class:"line"},"├── tmp"),t(`
`),n("span",{class:"line"},"├── usr"),t(`
`),n("span",{class:"line"},"└── var"),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"22"),t(" directories, "),n("span",{class:"token number"},"0"),t(" files")])])],-1),$3={__name:"19",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[b3,k3,x3,n("div",w3,[A(i,G({},{ranges:[""]}),{default:v(()=>[y3]),_:1},16)])]),_:1},16)}}},I3=R($3,[["__file","/@slidev/slides/19.md"]]),L3=n("h1",null,"Linux CLI",-1),C3=n("p",null,"File System",-1),S3=n("p",null,[n("strong",null,"/bin"),t(": è la directory che contiene i file binari, ovvero alcune applicazioni e programmi che è possibile eseguire. Troverai il programma ls menzionato sopra in questa directory, così come altri strumenti di base per creare e rimuovere file e directory, spostarli e così via.")],-1),R3=n("p",null,[n("strong",null,"/boot"),t(": contiene i file necessari per avviare il sistema. Il boot loader, il kernel etc… "),n("mark",null,"NON TOCCARE"),t(" Modificando i file contenuti in questa directory potresti non essere in grado di riavviare correttamente Linux")],-1),E3=n("p",null,[n("strong",null,"/dev"),t(": contiene i file dei dispositivi logici e HW (terminale, console, SSD, scheda video, scheda di rete, …). Molti di questi vengono generati all’avvio o addirittura al volo. Ad esempio, se colleghi una nuova webcam o una chiavetta USB al tuo computer, una nuova voce relativa al dispositivo verrà automaticamente visualizzata qui.")],-1),A3=n("p",null,[n("strong",null,"/etc"),t(": è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E’ una directory da "),n("mark",null,"MANEGGIARE CON CURA"),t(".")],-1),T3={__name:"20",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[L3,C3,S3,R3,E3,A3]),_:1},16))}},M3=R(T3,[["__file","/@slidev/slides/20.md"]]),O3=n("h1",null,"Linux CLI",-1),z3=n("p",null,"File System",-1),P3=n("p",null,[n("strong",null,"/home"),t(": contiene le directory personali degli utenti del sistema. Normalmente il nome della directory coincide con il nome dell’utente (utente "),n("em",null,"antonio"),t(", home dir: "),n("em",null,"/home/antonio"),t(")")],-1),D3=n("p",null,[n("strong",null,"/lib o /usr/lib"),t(": contiene le librerie di sistema che permettono l’esecuzione degli applicativi, della shell ed in genere di tutti i programmi che girano sul PC. In breve contengono frammenti di codice utilizzati dalle applicazioni per disegnare finestre sul desktop, controllare le periferiche o inviare file al disco rigido.")],-1),N3=n("p",null,[t("Una sotto directory importantissima è "),n("em",null,"modules"),t(" contiene gli importantissimi moduli del kernel. I moduli del kernel sono driver che fanno funzionare cose come la scheda video, la scheda audio, il WiFi, la stampante e così via.")],-1),F3=n("p",null,[n("strong",null,"/media"),t(": è dove la memoria esterna verrà montata automaticamente quando la colleghi e provi ad accedervi (pendrive, dischi USB, schede SD, ecc.)")],-1),j3=n("p",null,[n("strong",null,"/mnt"),t(": luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni.")],-1),K3={__name:"21",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[O3,z3,P3,D3,N3,F3,j3]),_:1},16))}},H3=R(K3,[["__file","/@slidev/slides/21.md"]]),W3=n("h1",null,"Linux CLI",-1),B3=n("p",null,"File System",-1),q3=n("p",null,[n("strong",null,"/opt"),t(": contiene tradizionalmente il software opzionale, non di sistema, spesso quello installato dall’utente. Le applicazioni finiranno nella directory /opt/bin e le librerie nella directory /opt/lib.")],-1),V3=n("p",null,"Un’altra directory in cui finiscono applicazioni opzionali e librerie è /usr/local. Quando il software viene installato qui, ci saranno anche le directory /usr/local/bin e /usr/local/lib. Ciò che determina quale software va dove è il modo in cui gli sviluppatori hanno configurato i file che controllano il processo di compilazione e installazione.",-1),U3=n("p",null,[n("strong",null,"/proc"),t(": come /dev, è una directory virtuale. Contiene informazioni sul tuo computer, come informazioni sulla CPU, sul kernel su cui è in esecuzione il tuo sistema Linux, sui processi che stanno girando, sulla rete, … Come con /dev, i file e le directory vengono generati all’avvio del computer o al volo, mentre il sistema è in esecuzione e le cose cambiano.")],-1),G3=n("p",null,[n("strong",null,"/root"),t(": è la directory home del "),n("strong",null,"superutente"),t(),n("mark",null,"root"),t(' (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale.')],-1),Y3={__name:"22",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[W3,B3,q3,V3,U3,G3]),_:1},16))}},Z3=R(Y3,[["__file","/@slidev/slides/22.md"]]),Q3=n("h1",null,"Linux CLI",-1),J3=n("p",null,"File System",-1),X3=n("p",null,[n("strong",null,"/run"),t(": è una directory utilizzata dai processi di sistema per archiviare dati temporanei utili all’esecuzione. Questa è un’altra di quelle cartelle da "),n("mark",null,"NON TOCCARE"),t(".")],-1),eL=n("p",null,[n("strong",null,"/sbin o /usr/bin"),t(": è simile a /bin, ma contiene applicazioni di cui avrà bisogno solo il superutente (da qui la "),n("strong",null,"s"),t(" iniziale). Pertanto le applicazioni qui contenute possono essere eseguite solo da root o dagli utenti a cui viene concesso un permesso temporaneo. Come puoi immaginare, alcune di queste istruzioni sono letali se le usi in modo improprio, quindi "),n("mark",null,"MANEGGIALE CON CURA"),t(".")],-1),nL=n("p",null,[n("strong",null,"/srv"),t(": la directory contiene dati per i server. Oggi tendenzialmente vuota.")],-1),tL=n("p",null,[n("strong",null,"/sys"),t(": è un’altra directory virtuale come /proc e /dev e contiene anche informazioni dai dispositivi collegati al tuo computer.")],-1),sL=n("p",null,[t("In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di "),n("mark",null,"NON TOCCARE"),t(" finché non sei sicuro di sapere esattamente cosa stai facendo.")],-1),oL={__name:"23",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[Q3,J3,X3,eL,nL,tL,sL]),_:1},16))}},aL=R(oL,[["__file","/@slidev/slides/23.md"]]),iL=n("h1",null,"Linux CLI",-1),lL=n("p",null,"File System",-1),rL=n("p",null,[n("strong",null,"/tmp"),t(": contiene file temporanei, solitamente inseriti lì dalle applicazioni in esecuzione. I file e le directory spesso contengono dati di cui un’applicazione non ha bisogno in questo momento, ma che potrebbe aver bisogno in seguito. Puoi anche usare /tmp per archiviare i tuoi file temporanei: /tmp è una delle poche directory appese / con cui puoi effettivamente interagire senza diventare superutente.")],-1),cL=n("p",null,[n("strong",null,"/usr"),t(": conteneva le directory utente quando /home non esisteva. Al giorno d’oggi, /usr contiene un miscuglio di directory che a loro volta contengono applicazioni, librerie, documentazione, sfondi, icone e un lungo elenco di altre cose che devono essere condivise da applicazioni e servizi.")],-1),uL=n("p",null,[n("strong",null,"/var"),t(": è stato originariamente dato questo nome perché il suo contenuto era considerato variabile, nel senso che cambiava frequentemente. Oggi è un termine un po’ improprio perché ci sono molte altre directory che contengono dati che cambiano frequentemente, soprattutto le directory virtuali che abbiamo visto sopra. Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www")],-1),pL={__name:"24",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[iL,lL,rL,cL,uL]),_:1},16))}},dL=R(pL,[["__file","/@slidev/slides/24.md"]]),mL="/3/linux_cli/assets/cli_06-72f0f737.png",fL=n("h1",null,"Linux CLI",-1),hL=n("p",null,"File System",-1),_L=n("div",{style:{width:"50%"}},[n("p",null,[t("Il percorse "),n("code",null,"ASSOLUTO"),t(" del file "),n("em",null,"README.md"),t(" è:")]),n("p",null,[n("code",null,"/home/antonio/SARP/README.md")]),n("ul",null,[n("li",null,[n("strong",null,"/"),t(" ("),n("em",null,"root directory, radice dell’albero del filesystem"),t(")")]),n("li",null,[n("strong",null,"home"),t(": sotto directory di /")]),n("li",null,[n("strong",null,"antonio"),t(": sotto directory di home")]),n("li",null,[n("strong",null,"SARP"),t(": sotto directory di antonio")]),n("li",null,[n("strong",null,"README.md"),t(": file di testo ("),n("em",null,"foglia dell’albero"),t(")")])])],-1),gL=n("img",{src:mL,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-350px"}},null,-1),vL={__name:"25",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[fL,hL,_L,gL]),_:1},16))}},bL=R(vL,[["__file","/@slidev/slides/25.md"]]),kL=n("h1",null,"Linux CLI",-1),xL=n("p",null,"File System",-1),wL=n("p",null,[t("In ogni directory ci sono due directory speciali "),n("code",null,"."),t(" e "),n("code",null,"..")],-1),yL=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("❯❯❯ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t("                           ")]),t(`
`),n("span",{class:"line"},[t("totale "),n("span",{class:"token number"},"1836")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"1"),t(),n("span",{class:"token number"},"14"),t(":48 "),n("span",{class:"token builtin class-name"},"."),t("  "),n("span",{class:"token operator"},"<"),t("------ directory corrente")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(" ago "),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"15"),t(":18 "),n("span",{class:"token punctuation"},".."),t(),n("span",{class:"token operator"},"<"),t("------ directory precedente")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"119686"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"10"),t(":29 c_01.jpg")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"73756"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"10"),t(":29 c_02.jpg")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"25078"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"10"),t(":29 c_03.jpg")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"699558"),t(" ago "),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"16"),t(":11 cli_00.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"108107"),t(" ago "),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"16"),t(":29 cli_01.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"79049"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"10"),t(":42 cli_02.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"119269"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"11"),t(":02 cli_03.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"177065"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"11"),t(":22 cli_04.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"60778"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"11"),t(":37 cli_05.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"54990"),t(),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"1"),t(),n("span",{class:"token number"},"14"),t(":40 cli_06.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"55905"),t(),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"1"),t(),n("span",{class:"token number"},"14"),t(":46 cli_07.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"41286"),t(),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"1"),t(),n("span",{class:"token number"},"14"),t(":48 cli_08.png")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"222693"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"10"),t(":24 cover.png")])])],-1),$L={__name:"26",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[kL,xL,wL,A(i,G({},{ranges:[""]}),{default:v(()=>[yL]),_:1},16)]),_:1},16)}}},IL=R($L,[["__file","/@slidev/slides/26.md"]]),LL="/3/linux_cli/assets/cli_07-8bb6e8e1.png",CL=n("h1",null,"Linux CLI",-1),SL=n("p",null,"File System",-1),RL=n("div",{style:{width:"50%"}},[n("p",null,[t("Il percorse "),n("code",null,"RELATIVO"),t(" alla home del file "),n("em",null,"README.md"),t(" è:")]),n("p",null,[n("code",null,"./SARP/README.md"),t(" o "),n("code",null,"SARP/README.md")]),n("ul",null,[n("li",null,[n("strong",null,"/"),t(" ("),n("em",null,"root directory, radice dell’albero del filesystem"),t(")")]),n("li",null,[n("strong",null,"home"),t(": sotto directory di /")]),n("li",null,[n("strong",null,"antonio"),t(": sotto directory di home")]),n("li",null,[n("strong",null,"SARP"),t(": sotto directory di antonio")]),n("li",null,[n("strong",null,"README.md"),t(": file di testo ("),n("em",null,"foglia dell’albero"),t(")")])])],-1),EL=n("img",{src:LL,width:"450",style:{margin:"auto",position:"relative",left:"250px",top:"-370px"}},null,-1),AL={__name:"27",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[CL,SL,RL,EL]),_:1},16))}},TL=R(AL,[["__file","/@slidev/slides/27.md"]]),ML="/3/linux_cli/assets/cli_08-9461a39d.png",OL=n("h1",null,"Linux CLI",-1),zL=n("p",null," ",-1),PL=n("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),DL=n("ul",null,[n("li",null,[n("strong",null,"Utenti"),t(": Linux utilizza un sistema di autorizzazioni basato su "),n("code",null,"utenti"),t(" e "),n("code",null,"gruppi"),t(" univoci per controllare l’accesso ai file e alle risorse del sistema (ricorda "),n("em",null,"everything is a file"),t("). "),n("ul",null,[n("li",null,[t("L’utente "),n("strong",null,"root"),t(" ha privilegi amministrativi completi ("),n("em",null,"god"),t("), mentre gli utenti normali hanno "),n("strong",null,"accesso limitato"),t(".")]),n("li",null,"Ogni utente appartiene ad uno o più gruppi")])])],-1),NL=n("img",{src:ML,width:"500",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),FL={__name:"28",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[OL,zL,PL,DL,NL]),_:1},16))}},jL=R(FL,[["__file","/@slidev/slides/28.md"]]),KL="/3/linux_cli/assets/cli_09-f59b3cee.png",HL=n("h1",null,"Linux CLI",-1),WL=n("ul",null,[n("li",null,[n("strong",null,"Permessi"),t(": Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo ("),n("em",null,"es: non voglio che l’utente Jon possa leggere i miei file"),t(")")])],-1),BL=n("img",{src:KL,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),qL={__name:"29",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[HL,WL,BL]),_:1},16))}},VL=R(qL,[["__file","/@slidev/slides/29.md"]]),UL="/3/linux_cli/assets/cli_10-6d8791bc.png",GL=n("h1",null,"Linux CLI",-1),YL=n("img",{src:UL,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"80px"}},null,-1),ZL={__name:"30",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[GL,YL]),_:1},16))}},QL=R(ZL,[["__file","/@slidev/slides/30.md"]]),JL="/3/linux_cli/assets/cli_11-d5d854a8.png",XL=n("h1",null,"Linux CLI",-1),e6=n("img",{src:JL,width:"950",style:{margin:"auto",position:"relative",left:"0px",top:"50px"}},null,-1),n6={__name:"31",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[XL,e6]),_:1},16))}},t6=R(n6,[["__file","/@slidev/slides/31.md"]]),s6=n("h1",null,"Linux CLI",-1),o6=n("p",null," ",-1),a6=n("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),i6=n("p",null,[n("strong",null,"Completamento del Tab"),t(": Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.")],-1),l6=n("p",null,[t("In shell moderne come "),n("em",null,"zsh"),t(" e "),n("em",null,"fish"),t(" il tab può anche completare i comandi e il manuale di sistema")],-1),r6={__name:"32",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[s6,o6,a6,i6,l6]),_:1},16))}},c6=R(r6,[["__file","/@slidev/slides/32.md"]]),u6="/3/linux_cli/assets/cli_12-d3515f38.gif",p6=n("h1",null,"Linux CLI",-1),d6=n("img",{src:u6,width:"700",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),m6={__name:"33",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[p6,d6]),_:1},16))}},f6=R(m6,[["__file","/@slidev/slides/33.md"]]),h6=n("h1",null,"Linux CLI",-1),_6=n("p",null," ",-1),g6=n("p",null,"Ecco alcuni concetti chiave relativi alla CLI di Linux:",-1),v6=n("p",null,[n("strong",null,"Redirezione"),t(": Puoi redirigere l’output di un comando su file file utilizzando i simboli > o >>")],-1),b6=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"echo"),t(),n("span",{class:"token string"},'"ciao io sono Linux"')]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"ciao io sono Linux"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"echo"),t(),n("span",{class:"token string"},'"ciao io sono Linux"'),t(),n("span",{class:"token operator"},">"),t(" file.txt")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" file.txt")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"19"),t(),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"3"),t(),n("span",{class:"token number"},"17"),t(":57 file.txt")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"more"),t(" file.txt")]),t(`
`),n("span",{class:"line"},"ciao io sono Linux"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"echo"),t(),n("span",{class:"token string"},'"ed io sono Babbo Natale"'),t(),n("span",{class:"token operator"},">>"),t(" file.txt")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"more"),t(" file.txt ")]),t(`
`),n("span",{class:"line"},"ciao io sono Linux"),t(`
`),n("span",{class:"line"},"ed io sono Babbo Natale")])],-1),k6={__name:"34",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[h6,_6,g6,v6,A(i,G({},{ranges:[""]}),{default:v(()=>[b6]),_:1},16)]),_:1},16)}}},x6=R(k6,[["__file","/@slidev/slides/34.md"]]),w6="/3/linux_cli/assets/cli_12-63718bf4.png",y6=n("h1",null,"Linux CLI",-1),$6=n("img",{src:w6,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"100px"}},null,-1),I6={__name:"35",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[y6,$6]),_:1},16))}},L6=R(I6,[["__file","/@slidev/slides/35.md"]]),C6=n("p",null," ",-1),S6={__name:"36",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[C6,A(i,{fs:"100px"},{default:v(()=>[t(" La Fisolofia Unix ")]),_:1})]),_:1},16)}}},R6=R(S6,[["__file","/@slidev/slides/36.md"]]),E6={class:"banner"},A6=Me({__name:"Banner",props:{bg:{default:"green"},fg:{default:"yellow"},padding:{default:"10px"},mt:{default:"0px"},mb:{default:"0px"},ml:{default:"0px"},mr:{default:"0px"}},setup(e,{emit:s}){const o=e;Ld(p=>({"76049b2e-bgcol":O(a),"76049b2e-fgcol":O(i),"76049b2e-padding":O(l),"76049b2e-marginTop":O(r),"76049b2e-marginBottom":O(c),"76049b2e-marginLeft":p.marginLeft,"76049b2e-marginRight":O(u)})),L(S);const a=Qe(o,"bg",s),i=Qe(o,"fg",s),l=Qe(o,"padding",s),r=Qe(o,"mt",s),c=Qe(o,"mb",s),u=Qe(o,"mr",s);return(p,d)=>(b(),ie("div",E6,[Fn(p.$slots,"default")]))}});const T6=R(A6,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/components/Banner.vue"]]),M6="/3/linux_cli/assets/cli_13-758ca9e1.png",O6=n("h1",null,"Linux CLI",-1),z6=n("p",null,"Filosofia Linux",-1),P6=n("p",null,[n("a",{href:"http://www.catb.org/esr/writings/taoup/html/ch01s06.html",target:"_blank",rel:"noopener"},"La filosofia di Unix"),t(" (in inglese: Unix philosophy) è una metodologia di sviluppo del software proposta nel 1969 da Ken Thompson e adottata dagli sviluppatori del sistema operativo Unix e Linux")],-1),D6=n("br",null,null,-1),N6=n("img",{src:M6,width:"250",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),F6={__name:"37",setup(e){const s={};return L(S),(o,a)=>{const i=T6;return b(),C(K,j(F(s)),{default:v(()=>[O6,z6,P6,D6,A(i,{padding:"30px"},{default:v(()=>[t(" Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. (Doug McIlroy) ")]),_:1}),N6]),_:1},16)}}},j6=R(F6,[["__file","/@slidev/slides/37.md"]]),K6=n("p",null," ",-1),H6={__name:"38",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[K6,A(i,{fs:"100px"},{default:v(()=>[t(" Le Pipe ")]),_:1})]),_:1},16)}}},W6=R(H6,[["__file","/@slidev/slides/38.md"]]),B6=n("h1",null,"Linux CLI",-1),q6=n("p",null," ",-1),V6=n("p",null,[n("strong",null,"Pipe"),t(": (Doug McIlroy) La pipe "),n("code",null,"|"),t(" permette di concatenare più comandi shell insieme per creare un nuovo comando che risolve un problema specifico. Il concetto è che l’output di un programma viene utilizzato come input di un altro comando. Questo concetto è un meccanismo "),n("strong",null,"POTENTISSIMO"),t(" che rende la CLI di Unix/Linux infinitamente potente e flessibile")],-1),U6=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file.txt")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")])])],-1),G6={__name:"39",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[B6,q6,V6,A(i,G({},{ranges:[""]}),{default:v(()=>[U6]),_:1},16)]),_:1},16)}}},Y6=R(G6,[["__file","/@slidev/slides/39.md"]]),Z6="/3/linux_cli/assets/cli_14-68d0e0fd.png",Q6=n("h1",null,"Linux CLI",-1),J6=n("p",null," ",-1),X6=n("p",null,[n("strong",null,"Domanda"),t(": Qual’è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescete partendo da file.txt? "),n("strong",null,"Risposta"),t(": NON ESISTE")],-1),e5=n("p",null,"Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente",-1),n5=n("img",{src:Z6,width:"850",style:{margin:"auto",position:"relative",left:"0px",top:"10px"}},null,-1),t5={__name:"40",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[Q6,J6,X6,e5,n5]),_:1},16))}},s5=R(t5,[["__file","/@slidev/slides/40.md"]]),o5="/3/linux_cli/assets/cli_15-17e5f5b0.png",a5=n("h1",null,"Linux CLI",-1),i5=n("p",null," ",-1),l5=n("ul",null,[n("li",null,"Proviamo ad implementare la pipeline descritta prima con comandi linux"),n("li",null,[t("La prima cosa dobbiamo leggere il file, quindi usiamo il comando "),n("code",null,"cat"),t(" che prende in input il nome del file e genera in output la lettura del file")]),n("li",null,[t("Questo output (lista di numeri non ordinati e duplicati) viene preso in input dal comando "),n("code",null,"sort"),t(" che in output produce l’input ma ordinato")]),n("li",null,[t("A questo punto avremo una lista di numeri ordinati ma ancora duplicati, quindi forniamo questa lista in input al comando "),n("code",null,"uniq"),t(" che in output rimuove tutti i numeri duplicati")]),n("li",null,"In questo modo all’output della pipeline avremo una lista di numeri ordinati ed univoci, che è esattamente la soluzione al problema posto")],-1),r5=n("img",{src:o5,width:"500",style:{margin:"auto",position:"relative",left:"100px",top:"-40px"}},null,-1),c5={__name:"41",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[a5,i5,l5,r5]),_:1},16))}},u5=R(c5,[["__file","/@slidev/slides/41.md"]]),p5=n("h1",null,"Linux CLI",-1),d5=n("p",null," ",-1),m5=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file.txt  "),n("span",{class:"token comment"},"# prende in input il file e in output lo stampa")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")])])],-1),f5={__name:"42",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[p5,d5,A(i,G({},{ranges:[""]}),{default:v(()=>[m5]),_:1},16)]),_:1},16)}}},h5=R(f5,[["__file","/@slidev/slides/42.md"]]),_5=n("h1",null,"Linux CLI",-1),g5=n("p",null," ",-1),v5=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# l'output di cat viene usato come input da sort che in output stampa il file ordinato")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file.txt "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t()]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")])])],-1),b5={__name:"43",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[_5,g5,A(i,G({},{ranges:[""]}),{default:v(()=>[v5]),_:1},16)]),_:1},16)}}},k5=R(b5,[["__file","/@slidev/slides/43.md"]]),x5=n("h1",null,"Linux CLI",-1),w5=n("p",null," ",-1),y5=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# l'output ordinato di sort viene preso in input da uniq che in output elimina le occorrenze multiple")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file.txt "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"uniq")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")])])],-1),$5={__name:"44",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[x5,w5,A(i,G({},{ranges:[""]}),{default:v(()=>[y5]),_:1},16)]),_:1},16)}}},I5=R($5,[["__file","/@slidev/slides/44.md"]]),L5=n("h1",null,"Linux CLI",-1),C5=n("p",null," ",-1),S5=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"# l'output della pipeline viene rediretto e quindi scritto sul file file_ord.txt")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file.txt "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"uniq"),t(),n("span",{class:"token operator"},">"),t(" file_ord.txt")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file_ord.txt ")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# quindi in ingresso alla pipeline abbiamo il file di numeri  non ordinati e duplicati")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# in uscita abbiamo la lista di numeri ordinati e de-duplicati")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# abbiamo così creato un nuovo comando che risolve esattamente il nostro problema")])])],-1),R5={__name:"45",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[L5,C5,A(i,G({},{ranges:[""]}),{default:v(()=>[S5]),_:1},16)]),_:1},16)}}},E5=R(R5,[["__file","/@slidev/slides/45.md"]]),A5=n("h1",null,"Linux CLI",-1),T5=n("p",null," ",-1),M5=n("ul",null,[n("li",null,[t("La CLI di Linux offre una vasta gamma di comandi per eseguire varie attività, tra cui: "),n("ul",null,[n("li",null,"la navigazione del sistema di file"),n("li",null,"la gestione dei processi"),n("li",null,"la configurazione di rete"),n("li",null,"la gestione degli utenti"),n("li",null,"…e molto altro.")])])],-1),O5=n("p",null,"Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando",-1),z5={__name:"46",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[A5,T5,M5,O5]),_:1},16))}},P5=R(z5,[["__file","/@slidev/slides/46.md"]]),D5=n("h1",null,"Linux CLI",-1),N5=n("p",null,"Sintassi Generale",-1),F5=n("ul",null,[n("li",null,"I comandi possono essere eseguiti da soli o possono accettare argomenti per alterarne il comportamento.")],-1),j5=n("p",null,"Una sintassi tipica può essere simile a questa:",-1),K5=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("comando "),n("span",{class:"token punctuation"},"["),t("-argomento"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token punctuation"},"["),t("--argomento-lungo"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token function"},"file")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-l"),t(),n("span",{class:"token parameter variable"},"-a"),t(" - h")])])],-1),H5=n("br",null,null,-1),W5=n("ul",null,[n("li",null,[n("strong",null,"ls"),t(" è il nome del comando (list)")]),n("li",null,"-l è un parametro che modifica l’output di ls in modo da visualizzare una lista di file uno per ogni riga"),n("li",null,"-a è un parametro che indica ad ls di far vedere tutti i file anche quelli nascosti (come . e …)"),n("li",null,"-h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall’uomo)")],-1),B5={__name:"47",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[D5,N5,F5,j5,A(i,G({},{ranges:[""]}),{default:v(()=>[K5]),_:1},16),H5,W5]),_:1},16)}}},q5=R(B5,[["__file","/@slidev/slides/47.md"]]),V5=n("p",null," ",-1),U5={__name:"48",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[V5,A(i,{fs:"100px"},{default:v(()=>[t(" Indice dei Comandi ")]),_:1})]),_:1},16)}}},G5=R(U5,[["__file","/@slidev/slides/48.md"]]),Y5="/3/linux_cli/assets/cli_17-cc02eb38.png",Z5=n("h1",null,"Linux CLI",-1),Q5=n("img",{src:Y5,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"-20px"}},null,-1),J5={__name:"49",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[Z5,Q5]),_:1},16))}},X5=R(J5,[["__file","/@slidev/slides/49.md"]]),eC="/3/linux_cli/assets/cli_18-9dbf9d0f.png",nC=n("h1",null,"Linux CLI",-1),tC=n("img",{src:eC,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"-20px"}},null,-1),sC={__name:"50",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[nC,tC]),_:1},16))}},oC=R(sC,[["__file","/@slidev/slides/50.md"]]),aC="/3/linux_cli/assets/cli_19-379d852a.png",iC=n("h1",null,"Linux CLI",-1),lC=n("img",{src:aC,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),rC={__name:"51",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[iC,lC]),_:1},16))}},cC=R(rC,[["__file","/@slidev/slides/51.md"]]),uC="/3/linux_cli/assets/cli_20-d498d8d9.png",pC=n("h1",null,"Linux CLI",-1),dC=n("img",{src:uC,width:"900",style:{margin:"auto",position:"relative",left:"0px",top:"0px"}},null,-1),mC={__name:"52",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[pC,dC]),_:1},16))}},fC=R(mC,[["__file","/@slidev/slides/52.md"]]),hC=n("p",null," ",-1),_C={__name:"53",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[hC,A(i,{fs:"100px"},{default:v(()=>[t(" Comandi di uso generale ")]),_:1})]),_:1},16)}}},gC=R(_C,[["__file","/@slidev/slides/53.md"]]),vC=n("h1",null,"Linux CLI",-1),bC=n("p",null,"man - un’interfaccia ai manuali di riferimento in linea",-1),kC=n("ul",null,[n("li",null,[t("Il comando più importante di tutti è "),n("code",null,"man"),t(" che permette di accedere al manuale di sistema e di TUTTI i comandi")]),n("li",null,"E’ buona regola consultare SEMPRE il manuale per capire come funziona un comando, quali sono i suoi parametri e conoscere le particolarità del singolo comando")],-1),xC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"man"),t(),n("span",{class:"token operator"},"<"),t("nome comando"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"man"),t(),n("span",{class:"token function"},"ls")]),t(`
`),n("span",{class:"line"},[t("LS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t("                                   User Commands                                   LS"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"NAME"),t(`
`),n("span",{class:"line"},[t("       "),n("span",{class:"token function"},"ls"),t(" - list directory contents")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"SYNOPSIS"),t(`
`),n("span",{class:"line"},[t("       "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token punctuation"},"["),t("OPTION"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},".."),t(". "),n("span",{class:"token punctuation"},"["),t("FILE"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},".."),t(".")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"DESCRIPTION"),t(`
`),n("span",{class:"line"},[t("       List  information  about  the FILEs "),n("span",{class:"token punctuation"},"("),t("the current directory by default"),n("span",{class:"token punctuation"},")"),t(".  Sort entries ")]),t(`
`),n("span",{class:"line"},[t("       nor "),n("span",{class:"token parameter variable"},"--sort"),t(" is specified.")])])],-1),wC={__name:"54",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[vC,bC,kC,A(i,G({},{ranges:[""]}),{default:v(()=>[xC]),_:1},16)]),_:1},16)}}},yC=R(wC,[["__file","/@slidev/slides/54.md"]]),$C=n("h1",null,"Linux CLI",-1),IC=n("p",null,"man - un’interfaccia ai manuali di riferimento in linea",-1),LC=n("ul",null,[n("li",null,"Ecco alcuni parametri utili")],-1),CC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"-K: cerca e visualizza i manuali compatibili con la parola chiave"),t(`
`),n("span",{class:"line"},"-k: visualizza possibili comandi compatibili con la parola chiave")])],-1),SC=n("br",null,null,-1),RC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"man"),t(),n("span",{class:"token parameter variable"},"-K"),t("  "),n("span",{class:"token string"},'"concatenate files"')]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"man"),t(),n("span",{class:"token parameter variable"},"-k"),t("  "),n("span",{class:"token string"},'"concatenate files"')]),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"cat"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t("              - concatenate files and print on the standard output")])])],-1),EC={__name:"55",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[$C,IC,LC,A(i,G({},{ranges:[""]}),{default:v(()=>[CC]),_:1},16),SC,A(i,G({},{ranges:[""]}),{default:v(()=>[RC]),_:1},16)]),_:1},16)}}},AC=R(EC,[["__file","/@slidev/slides/55.md"]]),TC=n("h1",null,"Linux CLI",-1),MC=n("p",null,"info - read Info documents",-1),OC=n("ul",null,[n("li",null,[t("Un’altro comando utilissimo per reperire informazione è "),n("code",null,"info"),t(".")]),n("li",null,"Si usa esattamente come man")],-1),zC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ info "),n("span",{class:"token operator"},"<"),t("nome comando"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"},[t("$ info "),n("span",{class:"token function"},"ls")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"10.1"),t(" ‘ls’: List directory contents")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"=="),n("span",{class:"token operator"},"==")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("The ‘ls’ program lists information about files "),n("span",{class:"token punctuation"},"("),t("of any type, including")]),t(`
`),n("span",{class:"line"},[t("directories"),n("span",{class:"token punctuation"},")"),t(".  Options and "),n("span",{class:"token function"},"file"),t(" arguments can be intermixed arbitrarily,")]),t(`
`),n("span",{class:"line"},"as usual."),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"   For non-option command-line arguments that are directories, by"),t(`
`),n("span",{class:"line"},"default ‘ls’ lists the contents of directories, not recursively, and"),t(`
`),n("span",{class:"line"},"omitting files with names beginning with ‘.’.  For other non-option"),t(`
`),n("span",{class:"line"},[t("arguments, by default ‘ls’ lists just the "),n("span",{class:"token function"},"file"),t(" name.  If no non-option")]),t(`
`),n("span",{class:"line"},"argument is specified, ‘ls’ operates on the current directory, acting as"),t(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"if"),t(" it had been invoked with a single argument of ‘.’.")])])],-1),PC={__name:"56",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[TC,MC,OC,A(i,G({},{ranges:[""]}),{default:v(()=>[zC]),_:1},16)]),_:1},16)}}},DC=R(PC,[["__file","/@slidev/slides/56.md"]]),NC=n("h1",null,"Linux CLI",-1),FC=n("p",null,"apropos - ricerca nei nomi e nelle descrizioni delle pagine di manuale",-1),jC=n("ul",null,[n("li",null,"Effettua una ricerca all’interno dei manuali. Molto utile quando non sappiamo esattamente il nome di un comando ma ne conosciamo il suo contesto.")],-1),KC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"apropos"),t(),n("span",{class:"token operator"},"<"),t("parole chiave"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"apropos"),t(),n("span",{class:"token string"},'"concatenate files"')]),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"cat"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t("              - concatenate files and print on the standard output")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"apropos"),t(),n("span",{class:"token string"},'"remove files"')]),t(`
`),n("span",{class:"line"},[t("git-rm "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t("           - Remove files from the working tree and from the index")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"rm"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t("               - remove files or directories")])])],-1),HC=n("p",null,"Se apropos non trova nessun suggerimento potrebbe essere utile eseguire il seguente comando",-1),WC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(" mandb "),n("span",{class:"token parameter variable"},"-c")])])],-1),BC=n("p",null,"In questo modo si ricrea il DB per apropos",-1),qC={__name:"57",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[NC,FC,jC,A(i,G({},{ranges:[""]}),{default:v(()=>[KC]),_:1},16),HC,A(i,G({},{ranges:[""]}),{default:v(()=>[WC]),_:1},16),BC]),_:1},16)}}},VC=R(qC,[["__file","/@slidev/slides/57.md"]]),UC=n("h1",null,"Linux CLI",-1),GC=n("p",null,"clear - clear the terminal screen",-1),YC=n("ul",null,[n("li",null,"Alle volte è utile svuotare e cancellare la finestra di terminale"),n("li",null,"Ciò si può ottenere con il comando clear")],-1),ZC=n("br",null,null,-1),QC=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"clear")])])],-1),JC=n("br",null,null,-1),XC=n("p",null,[t("Si può anche utilizzare uno shortcuts da tastiera che è "),n("code",null,"CTRL + L")],-1),e9={__name:"58",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[UC,GC,YC,ZC,QC,JC,XC]),_:1},16))}},n9=R(e9,[["__file","/@slidev/slides/58.md"]]),t9=n("h1",null,"Linux CLI",-1),s9=n("p",null,"reset - terminal initialization",-1),o9=n("ul",null,[n("li",null,"In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset")],-1),a9=n("br",null,null,-1),i9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"$ reset")])],-1),l9={__name:"59",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[t9,s9,o9,a9,A(i,G({},{ranges:[""]}),{default:v(()=>[i9]),_:1},16)]),_:1},16)}}},r9=R(l9,[["__file","/@slidev/slides/59.md"]]),c9=n("p",null," ",-1),u9={__name:"60",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[c9,A(i,{fs:"100px"},{default:v(()=>[t(" Filesystem ")]),_:1})]),_:1},16)}}},p9=R(u9,[["__file","/@slidev/slides/60.md"]]),d9=n("h1",null,"Linux CLI",-1),m9=n("p",null,"pwd - output the current working directory",-1),f9=n("ul",null,[n("li",null,[t("Per conosce l’attuale posizione nel filesystem, in altre parole per sapere in quale directory ci troviamo basta eseguire il comando "),n("strong",null,"pwd")])],-1),h9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/home/antonio/tmp/SARP"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/media/antonio/NAS")])],-1),_9={__name:"61",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[d9,m9,f9,A(i,G({},{ranges:[""]}),{default:v(()=>[h9]),_:1},16)]),_:1},16)}}},g9=R(_9,[["__file","/@slidev/slides/61.md"]]),v9=n("h1",null,"Linux CLI",-1),b9=n("p",null,"cd - change directory",-1),k9=n("ul",null,[n("li",null,"Permette di cambiare directory e quindi di spostarsi da una directory all’altra")],-1),x9=n("br",null,null,-1),w9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(),n("span",{class:"token operator"},"<"),t("percorso assoluto o relativo della directory destinazione"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/home/antonio/tmp/SARP/src/routes"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(" tools/  "),n("span",{class:"token comment"},"# questo è un percorso relativo")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/home/antonio/tmp/SARP/src/routes/tools"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(),n("span",{class:"token punctuation"},".."),t(),n("span",{class:"token comment"},"# torna indietro di una directory (o torna alla directory padre)")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd"),t("                                                                    ")]),t(`
`),n("span",{class:"line"},"/home/antonio/tmp/SARP/src/routes"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(),n("span",{class:"token punctuation"},".."),t("/"),n("span",{class:"token punctuation"},".."),t(),n("span",{class:"token comment"},"# torna indietro di due livelli")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd"),t("                                      ")]),t(`
`),n("span",{class:"line"},"/home/antonio/tmp/SARP")])],-1),y9={__name:"62",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[v9,b9,k9,x9,A(i,G({},{ranges:[""]}),{default:v(()=>[w9]),_:1},16)]),_:1},16)}}},$9=R(y9,[["__file","/@slidev/slides/62.md"]]),I9=n("h1",null,"Linux CLI",-1),L9=n("p",null,"cd - change directory",-1),C9=n("br",null,null,-1),S9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(),n("span",{class:"token comment"},"# torna alla HOME directory")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/home/antonio"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(" /usr/bin "),n("span",{class:"token comment"},"# questo è un percorso assoluto")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/usr/bin"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(" ~ "),n("span",{class:"token comment"},"# torna alla HOME directory")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/home/antonio"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"cd"),t(" - "),n("span",{class:"token comment"},"# torna alla directory in cui eravamo prima")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"pwd")]),t(`
`),n("span",{class:"line"},"/usr/bin")])],-1),R9={__name:"63",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[I9,L9,C9,A(i,G({},{ranges:[""]}),{default:v(()=>[S9]),_:1},16)]),_:1},16)}}},E9=R(R9,[["__file","/@slidev/slides/63.md"]]),A9=n("h1",null,"Linux CLI",-1),T9=n("p",null,"ls - list directory contents",-1),M9=n("ul",null,[n("li",null,"Il comando ls (list) permette di vedere (listare) il contenuto della directory corrente o di una directory specifica")],-1),O9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token operator"},"<"),t("file"),n("span",{class:"token operator"},">"),t(" o "),n("span",{class:"token operator"},"<"),t("directory"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token comment"},"#list della directory corrente")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel")]),t(`
`),n("span",{class:"line"},[t(),n("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101  Desktop               keyrings           regole01.jpg")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'"),t("       desktop-directories   linked_list,h      report.html")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'"),t("       Documents             linked_list.h      report.xml")]),t(`
`),n("span",{class:"line"}," Android                        Downloads             LocalSend-1.deb    scripts"),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'Android Open Source Project'"),t("   espedito.keys.asc     mime               static.key")]),t(`
`),n("span",{class:"line"}," android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf"),t(`
`),n("span",{class:"line"}," AndroidStudioProjects          evolution             msgFilterRules.dat Templates")])],-1),z9={__name:"64",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[A9,T9,M9,A(i,G({},{ranges:[""]}),{default:v(()=>[O9]),_:1},16)]),_:1},16)}}},P9=R(z9,[["__file","/@slidev/slides/64.md"]]),D9=n("h1",null,"Linux CLI",-1),N9=n("p",null,"ls - list directory contents",-1),F9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(" /usr/bin/ "),n("span",{class:"token comment"},"# lista il contenuto della directory /usr/bin")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'['"),t("                                                gtscompare                         ppmtolj")]),t(`
`),n("span",{class:"line"}," 411toppm                                          gts-config                         ppmtomap"),t(`
`),n("span",{class:"line"}," aa-enabled                                        gtstemplate                        ppmtomitsu"),t(`
`),n("span",{class:"line"}," aa-exec                                           gucharmap                          ppmtompeg"),t(`
`),n("span",{class:"line"}," aa-features-abi                                   guestfish                          ppmtoneo"),t(`
`),n("span",{class:"line"}," ab                                                guestmount                         ppmtopcx"),t(`
`),n("span",{class:"line"}," aclocal                                           guestunmount                       ppmtopgm"),t(`
`),n("span",{class:"line"}," aclocal-1.16                                      gunzip                             ppmtopi1"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(" ~ "),n("span",{class:"token comment"},"# list della home directory")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel")]),t(`
`),n("span",{class:"line"},[t(),n("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101  Desktop               keyrings           regole01.jpg")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'"),t("       desktop-directories   linked_list,h      report.html")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'"),t("       Documents             linked_list.h      report.xml")]),t(`
`),n("span",{class:"line"}," Android                        Downloads             LocalSend-1.deb    scripts"),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'Android Open Source Project'"),t("   espedito.keys.asc     mime               static.key")]),t(`
`),n("span",{class:"line"}," android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf"),t(`
`),n("span",{class:"line"}," AndroidStudioProjects          evolution             msgFilterRules.dat Templates")])],-1),j9={__name:"65",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[D9,N9,A(i,G({},{ranges:[""]}),{default:v(()=>[F9]),_:1},16)]),_:1},16)}}},K9=R(j9,[["__file","/@slidev/slides/65.md"]]),H9=n("h1",null,"Linux CLI",-1),W9=n("p",null,"ls - list directory contents",-1),B9=n("ul",null,[n("li",null,"ls possiede 55 parametri e quindi è un comando molto complesso"),n("li",null,"tuttavia nella maggioranza dei casi ci servono solo 2 o 3 parametri"),n("li",null,"in queste situazioni l’uso del manuale è fondamentale")],-1),q9=n("p",null,"Ecco alcuni parametri utili",-1),V9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("-1: lista il contenuto dei "),n("span",{class:"token function"},"file"),t(),n("span",{class:"token function"},"su"),t(" una singola colonna")]),t(`
`),n("span",{class:"line"},[t("-l: long list "),n("span",{class:"token function"},"format")]),t(`
`),n("span",{class:"line"},[t("-a: visualizza tutti i "),n("span",{class:"token function"},"file"),t(" anche quelli nascosti come "),n("span",{class:"token builtin class-name"},"."),t(" e "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},"-F: appende un indicatore per ogni entry indicandone il tipo"),t(`
`),n("span",{class:"line"},[t("-h: visualizza le dimensioni dei "),n("span",{class:"token function"},"file"),t(),n("span",{class:"token keyword"},"in"),t(" un formato utile per gli umani")]),t(`
`),n("span",{class:"line"},[t("-S: ordina per dimensione del "),n("span",{class:"token function"},"file"),t(),n("span",{class:"token keyword"},"in"),t(" ordine decrescente")]),t(`
`),n("span",{class:"line"},"-r: inverte l'ordine di visualizzazione")])],-1),U9={__name:"66",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[H9,W9,B9,q9,A(i,G({},{ranges:[""]}),{default:v(()=>[V9]),_:1},16)]),_:1},16)}}},G9=R(U9,[["__file","/@slidev/slides/66.md"]]),Y9=n("h1",null,"Linux CLI",-1),Z9=n("p",null,"ls - list directory contents",-1),Q9=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-lah")]),t(`
`),n("span",{class:"line"},"totale 62M"),t(`
`),n("span",{class:"line"},[t("drwxr-xr-x  "),n("span",{class:"token number"},"95"),t(" antonio antonio  12K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"4"),t(),n("span",{class:"token number"},"14"),t(":59  "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxr-xr-x   "),n("span",{class:"token number"},"5"),t(" root    root    "),n("span",{class:"token number"},"4"),t(",0K ago  "),n("span",{class:"token number"},"1"),t("  "),n("span",{class:"token number"},"2022"),t("  "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-r--r--   "),n("span",{class:"token number"},"1"),t(" root    root      "),n("span",{class:"token number"},"24"),t(" nov "),n("span",{class:"token number"},"13"),t("  "),n("span",{class:"token number"},"2022"),t("  "),n("span",{class:"token number"},"151.101"),t(".242.137.00443-192.168.001.077.37480")]),t(`
`),n("span",{class:"line"},[t("-rw-r--r--   "),n("span",{class:"token number"},"1"),t(" root    root      "),n("span",{class:"token number"},"24"),t(" nov "),n("span",{class:"token number"},"13"),t("  "),n("span",{class:"token number"},"2022"),t("  "),n("span",{class:"token number"},"192.168"),t(".001.077.37480-151.101.242.137.00443")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"2"),t(",0M lug "),n("span",{class:"token number"},"28"),t(),n("span",{class:"token number"},"18"),t(":52 "),n("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"7"),t(",3M lug "),n("span",{class:"token number"},"28"),t(),n("span",{class:"token number"},"18"),t(":55 "),n("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"6"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K giu  "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"2022"),t("  .android")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K mar  "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"2022"),t("  Android")]),t(`
`),n("span",{class:"line"},[t("drwx------   "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K mar  "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"2022"),t(),n("span",{class:"token string"},"'Android Open Source Project'")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"7"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K mar  "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"2022"),t("  android-studio")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K mar "),n("span",{class:"token number"},"14"),t("  "),n("span",{class:"token number"},"2022"),t("  AndroidStudioProjects")]),t(`
`),n("span",{class:"line"},[t("drwxr-xr-x  "),n("span",{class:"token number"},"48"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"7"),t("  "),n("span",{class:"token number"},"2022"),t("  antonio")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"5"),t(",1K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"2022"),t("  antonio.pub.asc")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"2"),t(",4K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"2022"),t("  antonioy.pub.asc")]),t(`
`),n("span",{class:"line"},[t("drwxr-xr-x   "),n("span",{class:"token number"},"2"),t(" antonio staff   "),n("span",{class:"token number"},"4"),t(",0K ago "),n("span",{class:"token number"},"30"),t("  "),n("span",{class:"token number"},"2022"),t("  app")]),t(`
`),n("span",{class:"line"},[t("-rwxr-xr-x   "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"649"),t(" ago "),n("span",{class:"token number"},"12"),t("  "),n("span",{class:"token number"},"2022"),t("  appimagekit-openshot-qt.desktop")]),t(`
`),n("span",{class:"line"},[t("-rwxr-xr-x   "),n("span",{class:"token number"},"1"),t(" antonio antonio  "),n("span",{class:"token number"},"351"),t(" ago "),n("span",{class:"token number"},"12"),t("  "),n("span",{class:"token number"},"2022"),t("  appimagekit-shotcut.desktop")])])],-1),J9={__name:"67",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[Y9,Z9,A(i,G({},{ranges:[""]}),{default:v(()=>[Q9]),_:1},16)]),_:1},16)}}},X9=R(J9,[["__file","/@slidev/slides/67.md"]]),eS=n("h1",null,"Linux CLI",-1),nS=n("p",null,"ls - list directory contents",-1),tS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-lahFS")]),t(`
`),n("span",{class:"line"},"totale 62M"),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio  34M giu "),n("span",{class:"token number"},"10"),t("  "),n("span",{class:"token number"},"2022"),t("  aws.tgz")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"8"),t(",5M giu  "),n("span",{class:"token number"},"2"),t(),n("span",{class:"token number"},"14"),t(":15  LocalSend-1.10.0-linux-x86-64.deb")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"7"),t(",3M lug "),n("span",{class:"token number"},"28"),t(),n("span",{class:"token number"},"18"),t(":55 "),n("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"3"),t(",6M lug "),n("span",{class:"token number"},"11"),t("  "),n("span",{class:"token number"},"2022"),t("  TBR.pdf")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"3"),t(",4M nov "),n("span",{class:"token number"},"19"),t("  "),n("span",{class:"token number"},"2022"),t("  _HR.pdf")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio "),n("span",{class:"token number"},"2"),t(",0M lug "),n("span",{class:"token number"},"28"),t(),n("span",{class:"token number"},"18"),t(":52 "),n("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'")]),t(`
`),n("span",{class:"line"},[t("-rw-------   "),n("span",{class:"token number"},"1"),t(" antonio antonio 488K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"4"),t(),n("span",{class:"token number"},"10"),t(":33  .zsh_history")]),t(`
`),n("span",{class:"line"},[t("-rw-------   "),n("span",{class:"token number"},"1"),t(" antonio antonio 336K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"4"),t(),n("span",{class:"token number"},"10"),t(":33  .bash_history")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"223"),t(" antonio antonio 236K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"4"),t(" 08:46  tmp/ ----------"),n("span",{class:"token operator"},">"),t(" directory")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio 215K lug "),n("span",{class:"token number"},"17"),t(),n("span",{class:"token number"},"11"),t(":12  index.html.3")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio 215K lug "),n("span",{class:"token number"},"17"),t(),n("span",{class:"token number"},"11"),t(":13  index.html.4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio 194K lug "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"17"),t(":52  index.html.5")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio 185K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"13"),t("  "),n("span",{class:"token number"},"2022"),t("  regole01.jpg")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio 136K lug "),n("span",{class:"token number"},"13"),t(),n("span",{class:"token number"},"15"),t(":56  package-lock.json")]),t(`
`),n("span",{class:"line"},[t("-rw-r--r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio  88K "),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"5"),t("  "),n("span",{class:"token number"},"2022"),t("  report.html")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio  51K ago "),n("span",{class:"token number"},"22"),t(" 02:54  .zcompdump-asus-5.8.1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio  50K ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"10"),t(":15  .zcompdump")])])],-1),sS={__name:"68",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[eS,nS,A(i,G({},{ranges:[""]}),{default:v(()=>[tS]),_:1},16)]),_:1},16)}}},oS=R(sS,[["__file","/@slidev/slides/68.md"]]),aS=n("h1",null,"Linux CLI",-1),iS=n("p",null,"alias",-1),lS=n("ul",null,[n("li",null,[t("Alle volte ricordarsi comandi lunghi come "),n("code",null,"ls -lahFSr"),t(" può essere poco conveniente")]),n("li",null,[t("Allora la shell ci viene in aiuto con il concetto di "),n("code",null,"alias")]),n("li",null,[t("Gli "),n("code",null,"alias"),t(" non è un comando, ma una funzionalità della shell")]),n("li",null,[t("Gli "),n("code",null,"alias"),t(" consentono di sostituire una stringa con una parola quando viene utilizzata come prima parola di un comando semplice")])],-1),rS=n("p",null,"Quindi ogni utente può creare tutti gli alias che desidera per rendersi la vita più semplice.",-1),cS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"alias"),t(),n("span",{class:"token operator"},"<"),t("nome alias"),n("span",{class:"token operator"},">="),n("span",{class:"token operator"},"<"),t("comando"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"alias"),t(),n("span",{class:"token assign-left variable"},"lo"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'ls -lahFSr'")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"alias"),t(),n("span",{class:"token assign-left variable"},"l1"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'ls -1'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token builtin class-name"},"alias"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"grep"),t(),n("span",{class:"token parameter variable"},"-E"),t(),n("span",{class:"token string"},"'^l1|^lo'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token assign-left variable"},"l1"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'ls -1'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token assign-left variable"},"lo"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},"'ls -lahFSr'")])])],-1),uS={__name:"69",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[aS,iS,lS,rS,A(i,G({},{ranges:[""]}),{default:v(()=>[cS]),_:1},16)]),_:1},16)}}},pS=R(uS,[["__file","/@slidev/slides/69.md"]]),dS=n("h1",null,"Linux CLI",-1),mS=n("p",null,"alias",-1),fS=n("ul",null,[n("li",null,"Quindi ora abbiamo due nuovi comandi (o alias) chiamati lo e l1 che possiamo usare esattamente come ogni altro comando linux")],-1),hS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$  lo ----"),n("span",{class:"token operator"},">"),t(" equivale a "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-lahFSr")]),t(`
`),n("span",{class:"line"},"totale 62M"),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t("  "),n("span",{class:"token number"},"2"),t("  "),n("span",{class:"token number"},"2022"),t("  .zshenv")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(" gen  "),n("span",{class:"token number"},"7"),t("  "),n("span",{class:"token number"},"2022"),t("  .todo.bak")]),t(`
`),n("span",{class:"line"},[t("-rw-r--r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(" dic "),n("span",{class:"token number"},"27"),t("  "),n("span",{class:"token number"},"2021"),t("  .sudo_as_admin_successful")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(" gen  "),n("span",{class:"token number"},"2"),t("  "),n("span",{class:"token number"},"2022"),t("  mimeapps.list")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ l1 ----"),n("span",{class:"token operator"},">"),t(" equivale a "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'2023-07-28 18-52-21.mkv'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'2023-07-28 18-55-11.mkv'")]),t(`
`),n("span",{class:"line"},"Android"),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'Android Open Source Project'")]),t(`
`),n("span",{class:"line"},"android-studio"),t(`
`),n("span",{class:"line"},"AndroidStudioProjects"),t(`
`),n("span",{class:"line"},"antonio")])],-1),_S={__name:"70",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[dS,mS,fS,A(i,G({},{ranges:[""]}),{default:v(()=>[hS]),_:1},16)]),_:1},16)}}},gS=R(_S,[["__file","/@slidev/slides/70.md"]]),vS=n("h1",null,"Linux CLI",-1),bS=n("p",null,"File Timestamps",-1),kS=n("ul",null,[n("li",null,"Ogni file e directory una serie di timestamp che ci indicano esattamente quando sono avvenute particolari operazioni sul file stesso"),n("li",null,[t("Nello specifico i 4 principali timestamp sono: "),n("ul",null,[n("li",null,[n("strong",null,"Accesso"),t(": indica l’ultima volta che è stato effettuato l’accesso al file")]),n("li",null,[n("strong",null,"Modifica"),t(": indica l’ultima volta che è stato modificato il contenuto del file")]),n("li",null,[n("strong",null,"Cambio"),t(": indica l’ultima volta che è stato effettuato un cambio ai metadata del file")]),n("li",null,[n("strong",null,"Creazione"),t(": indica quando il file è stato creato e rimane costante")])])])],-1),xS={__name:"71",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[vS,bS,kS]),_:1},16))}},wS=R(xS,[["__file","/@slidev/slides/71.md"]]),yS=n("h1",null,"Linux CLI",-1),$S=n("p",null,"stat - visualizza i timestamp di un file",-1),IS=n("ul",null,[n("li",null,[t("Per visualizzare le informazioni relative ad un file o directory, quali dimensione e timestamp si utilizza il comando "),n("strong",null,"stat")])],-1),LS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"stat"),t(),n("span",{class:"token operator"},"<"),t("file/dir name"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$stat"),t(" README.md                                                     main")]),t(`
`),n("span",{class:"line"},"  File: README.md"),t(`
`),n("span",{class:"line"},[t("  Dim.: "),n("span",{class:"token number"},"1164"),t("      	Blocchi: "),n("span",{class:"token number"},"8"),t("          Blocco di IO: "),n("span",{class:"token number"},"4096"),t("   "),n("span",{class:"token function"},"file"),t(" regolare")]),t(`
`),n("span",{class:"line"},[t("Device: 10305h/66309d	Inode: "),n("span",{class:"token number"},"11665449"),t("    Coll.: "),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[t("Accesso: "),n("span",{class:"token punctuation"},"("),t("0664/-rw-rw-r--"),n("span",{class:"token punctuation"},")"),t("  Uid: "),n("span",{class:"token punctuation"},"("),t(),n("span",{class:"token number"},"1000"),t("/ antonio"),n("span",{class:"token punctuation"},")"),t("   Gid: "),n("span",{class:"token punctuation"},"("),t(),n("span",{class:"token number"},"1000"),t("/ antonio"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("Accesso  "),n("span",{class:"token builtin class-name"},":"),t(),n("span",{class:"token number"},"2022"),t("-08-27 "),n("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),n("span",{class:"line"},[t("Modifica "),n("span",{class:"token builtin class-name"},":"),t(),n("span",{class:"token number"},"2022"),t("-08-27 "),n("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),n("span",{class:"line"},[t("Cambio   "),n("span",{class:"token builtin class-name"},":"),t(),n("span",{class:"token number"},"2022"),t("-08-27 "),n("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")]),t(`
`),n("span",{class:"line"},[t("Creazione: "),n("span",{class:"token number"},"2022"),t("-08-27 "),n("span",{class:"token number"},"11"),t(":11:42.197271632 +0200")])])],-1),CS={__name:"72",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[yS,$S,IS,A(i,G({},{ranges:[""]}),{default:v(()=>[LS]),_:1},16)]),_:1},16)}}},SS=R(CS,[["__file","/@slidev/slides/72.md"]]),RS=n("h1",null,"Linux CLI",-1),ES=n("p",null,"stat - visualizza i timestamp di un file",-1),AS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"stat"),t(" code                                                          main")]),t(`
`),n("span",{class:"line"},"  File: code"),t(`
`),n("span",{class:"line"},[t("  Dim.: "),n("span",{class:"token number"},"4096"),t("      	Blocchi: "),n("span",{class:"token number"},"8"),t("          Blocco di IO: "),n("span",{class:"token number"},"4096"),t("   directory")]),t(`
`),n("span",{class:"line"},[t("Device: 10305h/66309d	Inode: "),n("span",{class:"token number"},"16777517"),t("    Coll.: "),n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[t("Accesso: "),n("span",{class:"token punctuation"},"("),t("0775/drwxrwxr-x"),n("span",{class:"token punctuation"},")"),t("  Uid: "),n("span",{class:"token punctuation"},"("),t(),n("span",{class:"token number"},"1000"),t("/ antonio"),n("span",{class:"token punctuation"},")"),t("   Gid: "),n("span",{class:"token punctuation"},"("),t(),n("span",{class:"token number"},"1000"),t("/ antonio"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("Accesso  "),n("span",{class:"token builtin class-name"},":"),t(),n("span",{class:"token number"},"2023"),t("-07-09 "),n("span",{class:"token number"},"10"),t(":18:25.132871216 +0200")]),t(`
`),n("span",{class:"line"},[t("Modifica "),n("span",{class:"token builtin class-name"},":"),t(),n("span",{class:"token number"},"2023"),t("-07-16 "),n("span",{class:"token number"},"17"),t(":41:17.282502735 +0200")]),t(`
`),n("span",{class:"line"},[t("Cambio   "),n("span",{class:"token builtin class-name"},":"),t(),n("span",{class:"token number"},"2023"),t("-07-16 "),n("span",{class:"token number"},"17"),t(":41:17.282502735 +0200")]),t(`
`),n("span",{class:"line"},[t("Creazione: "),n("span",{class:"token number"},"2023"),t("-07-09 "),n("span",{class:"token number"},"10"),t(":18:25.132871216 +0200")])])],-1),TS={__name:"73",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[RS,ES,A(i,G({},{ranges:[""]}),{default:v(()=>[AS]),_:1},16)]),_:1},16)}}},MS=R(TS,[["__file","/@slidev/slides/73.md"]]),OS=n("h1",null,"Linux CLI",-1),zS=n("p",null,"cp - copiare file e directory",-1),PS=n("ul",null,[n("li",null,[t("Spesso è molto utile "),n("strong",null,"copiare"),t(" un file o un’intera directory all’interno del filesystem")])],-1),DS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file sorgente"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file destinazione"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file sorgente"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},".."),t("."),n("span",{class:"token operator"},"<"),t("file sorgente"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("directory destinazione"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("directory sorgente"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("directory destinazione"),n("span",{class:"token operator"},">")])])],-1),NS=n("br",null,null,-1),FS=n("ul",null,[n("li",null,"cp ha 24 parametri e i più utili sono:")],-1),jS=n("br",null,null,-1),KS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"- r: copia ricorsivamente un albero di directory e il suo contenuto"),t(`
`),n("span",{class:"line"},"- v: verbose permette di vedere lo stato della copia"),t(`
`),n("span",{class:"line"},[t("- a: copia "),n("span",{class:"token keyword"},"in"),t(" modalità archivio preservando ownership, timestamps, mode")]),t(`
`),n("span",{class:"line"},[t("- i: copia "),n("span",{class:"token keyword"},"in"),t(" modalità interattiva "),n("span",{class:"token punctuation"},"("),t("chiede conferma "),n("span",{class:"token keyword"},"in"),t(" caso di overwrite"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("- f: forza la copia anche "),n("span",{class:"token keyword"},"in"),t(" caso di overwrite")])])],-1),HS={__name:"74",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[OS,zS,PS,A(i,G({},{ranges:[""]}),{default:v(()=>[DS]),_:1},16),NS,FS,jS,A(i,G({},{ranges:[""]}),{default:v(()=>[KS]),_:1},16)]),_:1},16)}}},WS=R(HS,[["__file","/@slidev/slides/74.md"]]),BS=n("h1",null,"Linux CLI",-1),qS=n("p",null,"cp - copiare file e directory",-1),VS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t()]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 DIR1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(" file1 "),n("span",{class:"token function"},"file"),t(),n("span",{class:"token comment"},"# crea una copia di file1 nella directory corrente chiamato file2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 DIR1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 file2")])])],-1),US={__name:"75",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[BS,qS,A(i,G({},{ranges:[""]}),{default:v(()=>[VS]),_:1},16)]),_:1},16)}}},GS=R(US,[["__file","/@slidev/slides/75.md"]]),YS=n("h1",null,"Linux CLI",-1),ZS=n("p",null,"cp - copiare file e directory",-1),QS=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(" file1 DIR1 "),n("span",{class:"token comment"},"# crea una copia di file1 nella directory DIR1 con nome file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")])])],-1),JS={__name:"76",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[YS,ZS,A(i,G({},{ranges:[""]}),{default:v(()=>[QS]),_:1},16)]),_:1},16)}}},XS=R(JS,[["__file","/@slidev/slides/76.md"]]),eR=n("h1",null,"Linux CLI",-1),nR=n("p",null,"cp - copiare file e directory",-1),tR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(" file1 DIR1/fileDIR1 "),n("span",{class:"token comment"},"# crea una copia di file1 nella directory dIR1 con nome fileDIR1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),sR={__name:"77",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[eR,nR,A(i,G({},{ranges:[""]}),{default:v(()=>[tR]),_:1},16)]),_:1},16)}}},oR=R(sR,[["__file","/@slidev/slides/77.md"]]),aR=n("h1",null,"Linux CLI",-1),iR=n("p",null,"cp - copiare file e directory",-1),lR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 DIR1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 file2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(),n("span",{class:"token parameter variable"},"-rv"),t(" DIR1 DIR2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'DIR1'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'DIR1/file1'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2/file1'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'DIR1/fileDIR1'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2/fileDIR1'")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":35 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 DIR1")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":35 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 file2")])])],-1),rR={__name:"78",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[aR,iR,lR]),_:1},16))}},cR=R(rR,[["__file","/@slidev/slides/78.md"]]),uR=n("h1",null,"Linux CLI",-1),pR=n("p",null,"cp - copiare file e directory",-1),dR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"touch"),t(" file3 file4")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(),n("span",{class:"token parameter variable"},"-v"),t(" file3 file4 DIR2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'file3'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2/file3'")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'file4'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2/file4'")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR2")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"4"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":36 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":35 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 file3")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":35 fileDIR1")])])],-1),mR={__name:"79",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[uR,pR,A(i,G({},{ranges:[""]}),{default:v(()=>[dR]),_:1},16)]),_:1},16)}}},fR=R(mR,[["__file","/@slidev/slides/79.md"]]),hR=n("h1",null,"Linux CLI",-1),_R=n("p",null,"cp - copiare file e directory",-1),gR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cp"),t(),n("span",{class:"token parameter variable"},"-vi"),t(" file3 file4 DIR2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("cp: sovrascrivere "),n("span",{class:"token string"},"'DIR2/file3'"),t("? y")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'file3'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2/file3'")]),t(`
`),n("span",{class:"line"},[t("cp: sovrascrivere "),n("span",{class:"token string"},"'DIR2/file4'"),t("? y")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token string"},"'file4'"),t(" -"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token string"},"'DIR2/file4'")])])],-1),vR={__name:"80",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[hR,_R,A(i,G({},{ranges:[""]}),{default:v(()=>[gR]),_:1},16)]),_:1},16)}}},bR=R(vR,[["__file","/@slidev/slides/80.md"]]),kR=n("h1",null,"Linux CLI",-1),xR=n("p",null,"mv - muove o rinomina file",-1),wR=n("ul",null,[n("li",null,[t("Il comando "),n("strong",null,"mv"),t(" è utilizzato per spostare un file o una directory da una directory ad un altra nel filesystem")]),n("li",null,"Il comando è anche utilizzato per rinominare un file nel caso la directory sorgente e destinazione siano le stesse")],-1),yR=n("br",null,null,-1),$R=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(),n("span",{class:"token operator"},"<"),t("source file"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("destination dir"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# muove un file dalla directory corrente ad un'altra directory")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# sposta il file in una directory diversa e lo rinomina")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(),n("span",{class:"token operator"},"<"),t("source file"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("destination dir/destination file"),n("span",{class:"token operator"},">"),t()]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(),n("span",{class:"token operator"},"<"),t("source dir"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("destination dir"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# sposta o rinomina una directory")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(),n("span",{class:"token operator"},"<"),t("source file"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("destination file"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# rinomina un file nella stessa directory")])])],-1),IR={__name:"81",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[kR,xR,wR,yR,A(i,G({},{ranges:[""]}),{default:v(()=>[$R]),_:1},16)]),_:1},16)}}},LR=R(IR,[["__file","/@slidev/slides/81.md"]]),CR=n("h1",null,"Linux CLI",-1),SR=n("p",null,"mv - muove o rinomina file",-1),RR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":10 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"4"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":10 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 fileDIR1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(" file4 DIR1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":10 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"4"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":10 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":36 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),ER={__name:"82",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[CR,SR,A(i,G({},{ranges:[""]}),{default:v(()=>[RR]),_:1},16)]),_:1},16)}}},AR=R(ER,[["__file","/@slidev/slides/82.md"]]),TR=n("h1",null,"Linux CLI",-1),MR=n("p",null,"mv - muove o rinomina file",-1),OR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":10 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"4"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":10 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":36 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 fileDIR1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(" file3  DIR1/file33")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR1/")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"4"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":33 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":36 file33")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":36 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":34 fileDIR1")])])],-1),zR={__name:"83",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[TR,MR,A(i,G({},{ranges:[""]}),{default:v(()=>[OR]),_:1},16)]),_:1},16)}}},PR=R(zR,[["__file","/@slidev/slides/83.md"]]),DR=n("h1",null,"Linux CLI",-1),NR=n("p",null,"mv - muove o rinomina file",-1),FR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR1")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 file2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(" DIR1 DIR11")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 file2")])])],-1),jR={__name:"84",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[DR,NR,A(i,G({},{ranges:[""]}),{default:v(()=>[FR]),_:1},16)]),_:1},16)}}},KR=R(jR,[["__file","/@slidev/slides/84.md"]]),HR=n("h1",null,"Linux CLI",-1),WR=n("p",null,"mv - muove o rinomina file",-1),BR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":13 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 file2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(" file2 fileAAA2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":14 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),qR={__name:"85",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[HR,WR,A(i,G({},{ranges:[""]}),{default:v(()=>[BR]),_:1},16)]),_:1},16)}}},VR=R(qR,[["__file","/@slidev/slides/85.md"]]),UR=n("h1",null,"Linux CLI",-1),GR=n("p",null,"mv - muove o rinomina file",-1),YR=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 fileAAA2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mv"),t(" file1 fileAAA2 /tmp")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" /tmp/")]),t(`
`),n("span",{class:"line"},[t("srwx------  "),n("span",{class:"token number"},"1"),t(" antonio antonio     "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"12"),t(":59 "),n("span",{class:"token string"},"'844uMDg5r12KpmxXG2wGOx0Hlsvelh2xjo6CL4epTjM='")]),t(`
`),n("span",{class:"line"},[t("drwx------  "),n("span",{class:"token number"},"2"),t(" antonio antonio  "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"18"),t(":53  .com.google.Chrome.RGR4te")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--  "),n("span",{class:"token number"},"1"),t(" antonio antonio     "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30  file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--  "),n("span",{class:"token number"},"1"),t(" antonio antonio     "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31  fileAAA2")])])],-1),ZR={__name:"86",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[UR,GR,A(i,G({},{ranges:[""]}),{default:v(()=>[YR]),_:1},16)]),_:1},16)}}},QR=R(ZR,[["__file","/@slidev/slides/86.md"]]),JR=n("h1",null,"Linux CLI",-1),XR=n("p",null,"rm - rimuove file o directory",-1),eE=n("ul",null,[n("li",null,[t("Per cancellare un file in modo permanente (non c’è il cestino nella CLI) si utilizza il comando "),n("strong",null,"rm (remove)")])],-1),nE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"rm"),t(),n("span",{class:"token operator"},"<"),t("- parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file o directory"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":30 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 fileAAA2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"rm"),t(" file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),tE={__name:"87",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[JR,XR,eE,A(i,G({},{ranges:[""]}),{default:v(()=>[nE]),_:1},16)]),_:1},16)}}},sE=R(tE,[["__file","/@slidev/slides/87.md"]]),oE=n("h1",null,"Linux CLI",-1),aE=n("p",null,"rm - rimuove file o directory",-1),iE=n("ul",null,[n("li",null,"I parametri più utilizzati sono:")],-1),lE=n("br",null,null,-1),rE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"-i: interactive chiede conferma prima di rimuovere"),t(`
`),n("span",{class:"line"},"-d: rimuove una directory vuota"),t(`
`),n("span",{class:"line"},"-r: rimuove ricorsivamente il contenuto nelle sotto directory"),t(`
`),n("span",{class:"line"},[t("-f: forza il comando anche "),n("span",{class:"token keyword"},"in"),t(" caso di directory non vuote")])])],-1),cE=n("br",null,null,-1),uE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"rm"),t(),n("span",{class:"token parameter variable"},"-i"),t(" fileAAA2 ")]),t(`
`),n("span",{class:"line"},[t("rm: rimuovere "),n("span",{class:"token function"},"file"),t(" regolare "),n("span",{class:"token string"},"'fileAAA2'"),t("? y")])])],-1),pE={__name:"88",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[oE,aE,iE,lE,A(i,G({},{ranges:[""]}),{default:v(()=>[rE]),_:1},16),cE,A(i,G({},{ranges:[""]}),{default:v(()=>[uE]),_:1},16)]),_:1},16)}}},dE=R(pE,[["__file","/@slidev/slides/88.md"]]),mE=n("h1",null,"Linux CLI",-1),fE=n("p",null,"rm - rimuove file o directory",-1),hE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" DIR3")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":21 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"5"),t(" antonio antonio "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":20 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":21 file13")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$  "),n("span",{class:"token function"},"rm"),t(" DIR3                                                                                 ✘ "),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[t("rm: impossibile rimuovere "),n("span",{class:"token string"},"'DIR3'"),n("span",{class:"token builtin class-name"},":"),t(" È una directory")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"rm"),t(),n("span",{class:"token parameter variable"},"-d"),t(" DIR3                                                                              ✘ "),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[t("rm: impossibile rimuovere "),n("span",{class:"token string"},"'DIR3'"),n("span",{class:"token builtin class-name"},":"),t(" Directory non vuota")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# svuotiamo la directory 3")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token variable"},"$rm"),t(),n("span",{class:"token parameter variable"},"-d"),t(" DIR3                                                                             ✘ "),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":31 fileAAA2")])])],-1),_E={__name:"89",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[mE,fE,A(i,G({},{ranges:[""]}),{default:v(()=>[hE]),_:1},16)]),_:1},16)}}},gE=R(_E,[["__file","/@slidev/slides/89.md"]]),vE=n("h1",null,"Linux CLI",-1),bE=n("p",null,"rm - rimuove file o directory",-1),kE=n("ul",null,[n("li",null,"Per rimuovere una directory e tutto il suo contenuto senza priam svuotarla possiamo fare così")],-1),xE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"rm"),t(),n("span",{class:"token parameter variable"},"-dr"),t(" DIR3")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"oppure"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"rm"),t(),n("span",{class:"token parameter variable"},"-rf"),t(" DIR3")])])],-1),wE=n("br",null,null,-1),yE=n("ul",null,[n("li",null,"Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux")],-1),$E={__name:"90",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[vE,bE,kE,A(i,G({},{ranges:[""]}),{default:v(()=>[xE]),_:1},16),wE,yE]),_:1},16)}}},IE=R($E,[["__file","/@slidev/slides/90.md"]]),LE=n("h1",null,"Linux CLI",-1),CE=n("p",null,"more - visualizzazione file paginata",-1),SE=n("ul",null,[n("li",null,"more permette di leggere un file di testo una pagina alla volta")],-1),RE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"more"),t(),n("span",{class:"token operator"},"<"),t("nome file"),n("span",{class:"token operator"},">")])])],-1),EE=n("br",null,null,-1),AE=n("ul",null,[n("li",null,"Se il file è più corto di una pagina di video viene visualizzato e more esce"),n("li",null,"Se il file è più lungo e rivhiede più paginate del video per essere visualizzato, more entra in modalità comando"),n("li",null,"more accetta i seguenti comandi principali:")],-1),TE=n("br",null,null,-1),ME=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),t("spaca"),n("span",{class:"token operator"},">"),t(": avanza alla prossima pagina del testo")]),t(`
`),n("span",{class:"line"},"b: torna indietro alla pagina precedente"),t(`
`),n("span",{class:"line"},[t("/"),n("span",{class:"token operator"},"<"),t("pattern"),n("span",{class:"token operator"},">"),t(": effettua una ricerca del pattern all'interno del "),n("span",{class:"token function"},"file")]),t(`
`),n("span",{class:"line"},[t("n: salta alla prossima occorrenza di "),n("span",{class:"token operator"},"<"),t("pattern"),n("span",{class:"token operator"},">"),t(" se presente")]),t(`
`),n("span",{class:"line"},"q: esce dalla visualizzazione")])],-1),OE={__name:"91",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[LE,CE,SE,A(i,G({},{ranges:[""]}),{default:v(()=>[RE]),_:1},16),EE,AE,TE,A(i,G({},{ranges:[""]}),{default:v(()=>[ME]),_:1},16)]),_:1},16)}}},zE=R(OE,[["__file","/@slidev/slides/91.md"]]),PE=n("h1",null,"Linux CLI",-1),DE=n("p",null,"less - visualizzazione file avanzata",-1),NE=n("ul",null,[n("li",null,"less è molto simile a more ed ha lo stesso scopo che è quello di visualizzare un file multipagina"),n("li",null,"less ha alcune funzione più sofisticate di more, ma nell’uso comune sono sostanzialmente uguali")],-1),FE=n("br",null,null,-1),jE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"less"),t(),n("span",{class:"token operator"},"<"),t("nome file"),n("span",{class:"token operator"},">")])])],-1),KE=n("br",null,null,-1),HE=n("ul",null,[n("li",null,[n("p",null,"i comandi accettati sono gli stessi di more")]),n("li",null,[n("p",null,[t("Spesso "),n("strong",null,"more"),t(" e "),n("strong",null,"less"),t(" sono utilizzati come filtri finali di una pipeline di comandi")])])],-1),WE=n("br",null,null,-1),BE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file_grande "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token parameter variable"},"-r"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"less")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"oppure"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ $ "),n("span",{class:"token function"},"cat"),t(" file_grande "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token parameter variable"},"-r"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"more")])])],-1),qE={__name:"92",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[PE,DE,NE,FE,A(i,G({},{ranges:[""]}),{default:v(()=>[jE]),_:1},16),KE,HE,WE,A(i,G({},{ranges:[""]}),{default:v(()=>[BE]),_:1},16)]),_:1},16)}}},VE=R(qE,[["__file","/@slidev/slides/92.md"]]),UE=n("h1",null,"Linux CLI",-1),GE=n("p",null,"cat - concatenazione file",-1),YE=n("ul",null,[n("li",null,[n("strong",null,"cat"),t(" concatena uno o più file e lo visualizza sullo standard output")]),n("li",null,"quindi usando cat con un solo file ha l’effetto di visualizzare il file sullo schermo")],-1),ZE=n("br",null,null,-1),QE=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t("  "),n("span",{class:"token operator"},"<"),t("nome file"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"<"),t("nome file"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("nome file"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"]")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t("     ")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"14"),t(":54 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"14"),t(":47 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"7"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"14"),t(":54 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"7"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"14"),t(":54 file2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"7"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"14"),t(":54 file3")])])],-1),JE={__name:"93",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[UE,GE,YE,ZE,A(i,G({},{ranges:[""]}),{default:v(()=>[QE]),_:1},16)]),_:1},16)}}},XE=R(JE,[["__file","/@slidev/slides/93.md"]]),eA=n("h1",null,"Linux CLI",-1),nA=n("p",null,"cat - concatenazione file",-1),tA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token variable"},"$cat"),t(" file1               ")]),t(`
`),n("span",{class:"line"},"linea1"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file2")]),t(`
`),n("span",{class:"line"},"linea2"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file3")]),t(`
`),n("span",{class:"line"},"linea3"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file1 file2 file3")]),t(`
`),n("span",{class:"line"},"linea1"),t(`
`),n("span",{class:"line"},"linea2"),t(`
`),n("span",{class:"line"},"linea3"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file1 file2 file3 "),n("span",{class:"token operator"},">"),t(" file4")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file4                    ")]),t(`
`),n("span",{class:"line"},"linea1"),t(`
`),n("span",{class:"line"},"linea2"),t(`
`),n("span",{class:"line"},"linea3")])],-1),sA={__name:"94",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[eA,nA,A(i,G({},{ranges:[""]}),{default:v(()=>[tA]),_:1},16)]),_:1},16)}}},oA=R(sA,[["__file","/@slidev/slides/94.md"]]),aA=n("h1",null,"Linux CLI",-1),iA=n("p",null,"head - visualizzare la parte iniziale di un file",-1),lA=n("ul",null,[n("li",null,"Visualizza la prima parte di un file di solito specificata in bytes o linee")],-1),rA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"head"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"head"),t(" file1")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"8")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"9")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"10")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"head"),t(),n("span",{class:"token parameter variable"},"-n"),t(),n("span",{class:"token number"},"2"),t(" file1 "),n("span",{class:"token comment"},"# visualizza solo le prime 2 linee del file")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"2")])])],-1),cA={__name:"95",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[aA,iA,lA,A(i,G({},{ranges:[""]}),{default:v(()=>[rA]),_:1},16)]),_:1},16)}}},uA=R(cA,[["__file","/@slidev/slides/95.md"]]),pA=n("h1",null,"Linux CLI",-1),dA=n("p",null,"tail - visualizzare la parte finale di un file",-1),mA=n("ul",null,[n("li",null,"In maniera esattamente analoga ad head, visualizza la parte finale di un file in linee o bytes")],-1),fA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token variable"},"$tail"),t(" file1                                  ")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"991")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"992")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"993")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"994")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"995")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"996")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"997")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"998")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"999")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"1000")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"tail"),t(),n("span",{class:"token parameter variable"},"-n"),t(),n("span",{class:"token number"},"3"),t(" file1 "),n("span",{class:"token comment"},"# visualizza le ultime 3 linee di un file")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"998")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"999")]),t(`
`),n("span",{class:"line"},[t("linea "),n("span",{class:"token number"},"1000")])])],-1),hA={__name:"96",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[pA,dA,mA,A(i,G({},{ranges:[""]}),{default:v(()=>[fA]),_:1},16)]),_:1},16)}}},_A=R(hA,[["__file","/@slidev/slides/96.md"]]),gA=n("h1",null,"Linux CLI",-1),vA=n("p",null,"tail - visualizzare la parte finale di un file",-1),bA=n("ul",null,[n("li",null,[t("Un parametro molto usate per tail è "),n("code",null,"-f"),t(" che permette di continuare a leggere un file per scritture successive")]),n("li",null,'Utilizzato prevalentemente per l’analisi di file di log in cui un processo "appende" nuovi dati al fondo del file')],-1),kA=n("p",null,"Aprire due shelle 1 e 2",-1),xA=n("p",null,"shell 1:",-1),wA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"touch"),t(" file1")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"tail"),t(),n("span",{class:"token parameter variable"},"-f"),t(" file1")])])],-1),yA=n("p",null,"shell 2:",-1),$A=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token builtin class-name"},"echo"),t(" ciao "),n("span",{class:"token operator"},">"),t(" file1")])])],-1),IA={__name:"97",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[gA,vA,bA,kA,xA,A(i,G({},{ranges:[""]}),{default:v(()=>[wA]),_:1},16),yA,A(i,G({},{ranges:[""]}),{default:v(()=>[$A]),_:1},16)]),_:1},16)}}},LA=R(IA,[["__file","/@slidev/slides/97.md"]]),CA=n("h1",null,"Linux CLI",-1),SA=n("p",null,"sort - ordinare le linee di un file di testo",-1),RA=n("ul",null,[n("li",null,"Ordina un file di testo")],-1),EA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sort"),t(" file1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"10")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"9")])])],-1),AA={__name:"98",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[CA,SA,RA,A(i,G({},{ranges:[""]}),{default:v(()=>[EA]),_:1},16)]),_:1},16)}}},TA=R(AA,[["__file","/@slidev/slides/98.md"]]),MA=n("h1",null,"Linux CLI",-1),OA=n("p",null,"sort - ordinare le linee di un file di testo",-1),zA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token parameter variable"},"-g"),t(" file1 "),n("span",{class:"token comment"},"# usa ordine numerico")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"9")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"10")])])],-1),PA={__name:"99",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[MA,OA,A(i,G({},{ranges:[""]}),{default:v(()=>[zA]),_:1},16)]),_:1},16)}}},DA=R(PA,[["__file","/@slidev/slides/99.md"]]),NA=n("h1",null,"Linux CLI",-1),FA=n("p",null,"sort - ordinare le linee di un file di testo",-1),jA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token parameter variable"},"-rg"),t(" file1 "),n("span",{class:"token comment"},"# usa ordine numerico inverso (reverse)")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"10")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"9")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")])])],-1),KA=n("br",null,null,-1),HA=n("ul",null,[n("li",null,[t("Sort ha 20 parametri opzionali inclusi "),n("strong",null,"g"),t(" e "),n("strong",null,"r")]),n("li",null,"Consultare il manuale per eventuali necessità")],-1),WA={__name:"100",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[NA,FA,A(i,G({},{ranges:[""]}),{default:v(()=>[jA]),_:1},16),KA,HA]),_:1},16)}}},BA=R(WA,[["__file","/@slidev/slides/100.md"]]),qA=n("h1",null,"Linux CLI",-1),VA=n("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),UA=n("ul",null,[n("li",null,"Uniq permette di identificare le occorrenze uguali di linee di testo in un file"),n("li",null,"Permette di riportare o di eliminare tali occorrenze")],-1),GA=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file1 ")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"9")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"10")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")])])],-1),YA={__name:"101",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[qA,VA,UA,A(i,G({},{ranges:[""]}),{default:v(()=>[GA]),_:1},16)]),_:1},16)}}},ZA=R(YA,[["__file","/@slidev/slides/101.md"]]),QA=n("h1",null,"Linux CLI",-1),JA=n("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),XA=n("ul",null,[n("li",null,"uniq deve lavorare su un file ordinato")],-1),e8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file1 "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token parameter variable"},"-g"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"uniq")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"9")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"10")])])],-1),n8=n("br",null,null,-1),t8=n("ul",null,[n("li",null,[n("strong",null,"uniq"),t(" ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta")])],-1),s8={__name:"102",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[QA,JA,XA,A(i,G({},{ranges:[""]}),{default:v(()=>[e8]),_:1},16),n8,t8]),_:1},16)}}},o8=R(s8,[["__file","/@slidev/slides/102.md"]]),a8=n("h1",null,"Linux CLI",-1),i8=n("p",null,"uniq - rimuovere le linee occorrenti di un file",-1),l8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token variable"},"$cat"),t(" file1 "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"sort"),t(),n("span",{class:"token parameter variable"},"-g"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token function"},"uniq"),t(),n("span",{class:"token parameter variable"},"-d")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"7")])])],-1),r8=n("br",null,null,-1),c8=n("ul",null,[n("li",null,[n("strong",null,"uniq"),t(" ha mantenuto solo le occorrenze doppie e rimosso quelle singole")])],-1),u8={__name:"103",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[a8,i8,A(i,G({},{ranges:[""]}),{default:v(()=>[l8]),_:1},16),r8,c8]),_:1},16)}}},p8=R(u8,[["__file","/@slidev/slides/103.md"]]),d8=n("h1",null,"Linux CLI",-1),m8=n("p",null,"wc - contare caratteri, parole e linee di un file",-1),f8=n("ul",null,[n("li",null,"Spesso è utile contare quanti caratteri, parole o linee sono presenti in un file di testo"),n("li",null,[n("strong",null,"wc"),t(" assolve esattamente a questo compito")])],-1),h8=n("br",null,null,-1),_8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"wc"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"-c: conta i bytes o caratteri"),t(`
`),n("span",{class:"line"},"-w: conta le parole"),t(`
`),n("span",{class:"line"},"-l: conta le linee "),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"cat"),t(" file1                    ")]),t(`
`),n("span",{class:"line"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "),t(`
`),n("span",{class:"line"},[t("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "),n("span",{class:"token builtin class-name"},"type"),t(" and scrambled it to "),n("span",{class:"token function"},"make"),t(" a "),n("span",{class:"token builtin class-name"},"type"),t(" specimen book. ")]),t(`
`),n("span",{class:"line"},"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "),t(`
`),n("span",{class:"line"},[t("It was popularised "),n("span",{class:"token keyword"},"in"),t(" the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and "),n("span",{class:"token function"},"more"),t(" recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])],-1),g8={__name:"104",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[d8,m8,f8,h8,A(i,G({},{ranges:[""]}),{default:v(()=>[_8]),_:1},16)]),_:1},16)}}},v8=R(g8,[["__file","/@slidev/slides/104.md"]]),b8=n("h1",null,"Linux CLI",-1),k8=n("p",null,"wc - contare caratteri, parole e linee di un file",-1),x8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"wc"),t(),n("span",{class:"token parameter variable"},"-c"),t(" file1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"579"),t(" file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"wc"),t(),n("span",{class:"token parameter variable"},"-w"),t(" file1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"91"),t(" file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"wc"),t(),n("span",{class:"token parameter variable"},"-l"),t(" file1")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"5"),t(" file1")])])],-1),w8=n("br",null,null,-1),y8=n("ul",null,[n("li",null,"Spesso usato come parte finale di una pipeline di comandi")],-1),$8={__name:"105",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[b8,k8,A(i,G({},{ranges:[""]}),{default:v(()=>[x8]),_:1},16),w8,y8]),_:1},16)}}},I8=R($8,[["__file","/@slidev/slides/105.md"]]),L8=n("h1",null,"Linux CLI",-1),C8=n("p",null,"touch - creare un file vuoto",-1),S8=n("ul",null,[n("li",null,[t("Per creare velocemente un file vuoto è possibile usare il comando "),n("strong",null,"touch")])],-1),R8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"touch"),t(),n("span",{class:"token operator"},"<"),t("nome file"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"touch"),t(" file4")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"4"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":13 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"579"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"9"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 file4")])])],-1),E8={__name:"106",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[L8,C8,S8,A(i,G({},{ranges:[""]}),{default:v(()=>[R8]),_:1},16)]),_:1},16)}}},A8=R(E8,[["__file","/@slidev/slides/106.md"]]),T8=n("h1",null,"Linux CLI",-1),M8=n("p",null,"mkdir - creare una directory",-1),O8=n("ul",null,[n("li",null,[t("Per creare una nuova directory o albero di directory si usa il comando "),n("strong",null,"mkdir")])],-1),z8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mkdir"),t(),n("span",{class:"token operator"},"<"),t("directory"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# crea una nuova directory")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mkdir"),t(),n("span",{class:"token parameter variable"},"-p"),t(),n("span",{class:"token operator"},"<"),t("dir"),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"1"),t(">")]),t("/"),n("span",{class:"token operator"},"<"),t("dir"),n("span",{class:"token operator"},[n("span",{class:"token file-descriptor important"},"2"),t(">")]),t("/"),n("span",{class:"token punctuation"},".."),t("./"),n("span",{class:"token operator"},"<"),t("dirN"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# crea un albero di directory")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mkdir"),t(" DIR3")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"mkdir"),t(),n("span",{class:"token parameter variable"},"-p"),t(" DIR4/DIR5/DIR6")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"$  tree DIR4   "),t(`
`),n("span",{class:"line"},"DIR4"),t(`
`),n("span",{class:"line"},"└── DIR5"),t(`
`),n("span",{class:"line"},"    └── DIR6"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"2"),t(" directories, "),n("span",{class:"token number"},"0"),t(" files")])])],-1),P8={__name:"107",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[T8,M8,O8,A(i,G({},{ranges:[""]}),{default:v(()=>[z8]),_:1},16)]),_:1},16)}}},D8=R(P8,[["__file","/@slidev/slides/107.md"]]),N8=n("h1",null,"Linux CLI",-1),F8=n("p",null,"du - calcola lo spazio disco occupato da una directory",-1),j8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"du")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4"),t("	./DIR3")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"12"),t("	./DIR2")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"12"),t("	./DIR11")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4"),t("	./DIR4/DIR5/DIR6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8"),t("	./DIR4/DIR5")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"12"),t("	./DIR4")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"52"),t("	"),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"du"),t(),n("span",{class:"token parameter variable"},"-h"),t(),n("span",{class:"token comment"},"# visualizza le dimensioni human readable")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4"),t(",0K	./DIR3")]),t(`
`),n("span",{class:"line"},"12K	./DIR2"),t(`
`),n("span",{class:"line"},"12K	./DIR11"),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"4"),t(",0K	./DIR4/DIR5/DIR6")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"8"),t(",0K	./DIR4/DIR5")]),t(`
`),n("span",{class:"line"},"12K	./DIR4"),t(`
`),n("span",{class:"line"},[t("52K	"),n("span",{class:"token builtin class-name"},".")])])],-1),K8={__name:"108",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[N8,F8,A(i,G({},{ranges:[""]}),{default:v(()=>[j8]),_:1},16)]),_:1},16)}}},H8=R(K8,[["__file","/@slidev/slides/108.md"]]),W8=n("h1",null,"Linux CLI",-1),B8=n("p",null,"df - visualizza lo spazio disponibile su un filesystem",-1),q8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"df"),t("   ")]),t(`
`),n("span",{class:"line"},[t("File system    1K-blocchi     Usati Disponib. Uso% Montato "),n("span",{class:"token function"},"su")]),t(`
`),n("span",{class:"line"},[t("tmpfs             "),n("span",{class:"token number"},"1617056"),t("      "),n("span",{class:"token number"},"2132"),t("   "),n("span",{class:"token number"},"1614924"),t("   "),n("span",{class:"token number"},"1"),t("% /run")]),t(`
`),n("span",{class:"line"},[t("/dev/nvme0n1p4  "),n("span",{class:"token number"},"123390456"),t("  "),n("span",{class:"token number"},"82302484"),t("  "),n("span",{class:"token number"},"34773940"),t("  "),n("span",{class:"token number"},"71"),t("% /")]),t(`
`),n("span",{class:"line"},[t("tmpfs             "),n("span",{class:"token number"},"8085268"),t("     "),n("span",{class:"token number"},"45036"),t("   "),n("span",{class:"token number"},"8040232"),t("   "),n("span",{class:"token number"},"1"),t("% /dev/shm")]),t(`
`),n("span",{class:"line"},[t("tmpfs                "),n("span",{class:"token number"},"5120"),t("         "),n("span",{class:"token number"},"0"),t("      "),n("span",{class:"token number"},"5120"),t("   "),n("span",{class:"token number"},"0"),t("% /run/lock")]),t(`
`),n("span",{class:"line"},[t("tmpfs             "),n("span",{class:"token number"},"8085268"),t("         "),n("span",{class:"token number"},"0"),t("   "),n("span",{class:"token number"},"8085268"),t("   "),n("span",{class:"token number"},"0"),t("% /run/qemu")]),t(`
`),n("span",{class:"line"},[t("/dev/nvme0n1p1     "),n("span",{class:"token number"},"521200"),t("    "),n("span",{class:"token number"},"326952"),t("    "),n("span",{class:"token number"},"194248"),t("  "),n("span",{class:"token number"},"63"),t("% /boot/efi")]),t(`
`),n("span",{class:"line"},[t("/dev/nvme0n1p5  "),n("span",{class:"token number"},"775506816"),t(),n("span",{class:"token number"},"491167292"),t(),n("span",{class:"token number"},"249685692"),t("  "),n("span",{class:"token number"},"67"),t("% /home")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"df"),t(),n("span",{class:"token parameter variable"},"-h"),t(),n("span",{class:"token comment"},"# visualizza le dimensioni human readable")]),t(`
`),n("span",{class:"line"},[t("File system     Dim. Usati Dispon. Uso% Montato "),n("span",{class:"token function"},"su")]),t(`
`),n("span",{class:"line"},[t("tmpfs           "),n("span",{class:"token number"},"1"),t(",6G  "),n("span",{class:"token number"},"2"),t(",1M    "),n("span",{class:"token number"},"1"),t(",6G   "),n("span",{class:"token number"},"1"),t("% /run")]),t(`
`),n("span",{class:"line"},[t("/dev/nvme0n1p4  118G   79G     34G  "),n("span",{class:"token number"},"71"),t("% /")]),t(`
`),n("span",{class:"line"},[t("tmpfs           "),n("span",{class:"token number"},"7"),t(",8G   48M    "),n("span",{class:"token number"},"7"),t(",7G   "),n("span",{class:"token number"},"1"),t("% /dev/shm")]),t(`
`),n("span",{class:"line"},[t("tmpfs           "),n("span",{class:"token number"},"5"),t(",0M     "),n("span",{class:"token number"},"0"),t("    "),n("span",{class:"token number"},"5"),t(",0M   "),n("span",{class:"token number"},"0"),t("% /run/lock")]),t(`
`),n("span",{class:"line"},[t("tmpfs           "),n("span",{class:"token number"},"7"),t(",8G     "),n("span",{class:"token number"},"0"),t("    "),n("span",{class:"token number"},"7"),t(",8G   "),n("span",{class:"token number"},"0"),t("% /run/qemu")]),t(`
`),n("span",{class:"line"},[t("/dev/nvme0n1p1  509M  320M    190M  "),n("span",{class:"token number"},"63"),t("% /boot/efi")]),t(`
`),n("span",{class:"line"},[t("/dev/nvme0n1p5  740G  469G    239G  "),n("span",{class:"token number"},"67"),t("% /home")])])],-1),V8={__name:"109",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[W8,B8,A(i,G({},{ranges:[""]}),{default:v(()=>[q8]),_:1},16)]),_:1},16)}}},U8=R(V8,[["__file","/@slidev/slides/109.md"]]),G8=n("h1",null,"Linux CLI",-1),Y8=n("p",null,"find - search for files in a directory hierarchy",-1),Z8=n("ul",null,[n("li",null,"Spesso quando navighiamo nel filesystem abbiamo la necessità di cercare dei file"),n("li",null,[n("code",null,"find"),t(" è un comando potentissimo che permette di fare ricerche nel filesystem molto sofisticate")]),n("li",null,[n("strong",null,"find"),t(" ha 71 parametri, ma non abbiamo bisogno di conoscerli tutti. CI ricordiamo i principali e quando ci serve qualcosa di particolare consultiamo il manuale")])],-1),Q8=n("br",null,null,-1),J8=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token operator"},"<"),t("directory iniziale"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t(" - parametri opzionali"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# partendo dalla directory corrente scandisce tutti i file e sottodirectory alla ricerca ")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# di ogni file che fa match con pillole*.png")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-name"),t(),n("span",{class:"token string"},"'pillole*.png'"),t("  --"),n("span",{class:"token operator"},">"),t(" il carattere * rappresenta uno o più caratteri")]),t(`
`),n("span",{class:"line"}," "),t(`
`),n("span",{class:"line"},"./Downloads/pillole-di-css.png"),t(`
`),n("span",{class:"line"},"./Downloads/img/pillole.png"),t(`
`),n("span",{class:"line"},"./Downloads/pillole-css.png"),t(`
`),n("span",{class:"line"},"./tmp/profmancusoa.github.io/pillole-css.png")])],-1),X8={__name:"110",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[G8,Y8,Z8,Q8,A(i,G({},{ranges:[""]}),{default:v(()=>[J8]),_:1},16)]),_:1},16)}}},eT=R(X8,[["__file","/@slidev/slides/110.md"]]),nT=n("h1",null,"Linux CLI",-1),tT=n("p",null,"find - search for files in a directory hierarchy",-1),sT=n("p",null,"Vediamo alcuni parametri utili",-1),oT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("-type: specifica il tipo di "),n("span",{class:"token function"},"file"),t(" da ricercare "),n("span",{class:"token punctuation"},"("),t("f file, d directory, "),n("span",{class:"token punctuation"},".."),t("."),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("-user: specifica l'owner del "),n("span",{class:"token function"},"file"),t(),n("span",{class:"token punctuation"},"("),t("nome utente o "),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("-atime: cerca un "),n("span",{class:"token function"},"file"),t(" che a cui è stato fatto accesso -n, n o +n giorni fà")]),t(`
`),n("span",{class:"line"},[t("-mtime: cerca un "),n("span",{class:"token function"},"file"),t(" o directory che è stata modificato -n, n o +n giorni fà")]),t(`
`),n("span",{class:"line"},[t("-size: cerca "),n("span",{class:"token function"},"file"),t(" di dimensione -n, n o +n unità di spazio "),n("span",{class:"token punctuation"},"("),t("b,c,k,M,G"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("-exec: esegue un comando per ogni "),n("span",{class:"token function"},"file"),t(" selezionato")])])],-1),aT=n("br",null,null,-1),iT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-type"),t(" d "),n("span",{class:"token comment"},"# cerca tutte le sottodirectory a partire dalla directory corrente")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-type"),t(" f  "),n("span",{class:"token parameter variable"},"-user"),t(" root "),n("span",{class:"token comment"},"# cerca tutti i file di proprietà root")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-mtime"),t(),n("span",{class:"token parameter variable"},"-2"),t(),n("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati meno di 2 giorni fà")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-mtime"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati esattamente 2 giorni fà")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-mtime"),t(" +2 "),n("span",{class:"token comment"},"# cerca tutti i file che sono stati modificati più di 2 giorni fà")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-size"),t(" 512c "),n("span",{class:"token comment"},"# cerca tutti i file di 512 byte")]),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"find"),t(),n("span",{class:"token builtin class-name"},"."),t(),n("span",{class:"token parameter variable"},"-size"),t(" +100M "),n("span",{class:"token parameter variable"},"-exec"),t(),n("span",{class:"token function"},"rm"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token punctuation"},"\\"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"# rimuove tutti i file più grandi di 100MByte")])])],-1),lT={__name:"111",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[nT,tT,sT,A(i,G({},{ranges:[""]}),{default:v(()=>[oT]),_:1},16),aT,A(i,G({},{ranges:[""]}),{default:v(()=>[iT]),_:1},16)]),_:1},16)}}},rT=R(lT,[["__file","/@slidev/slides/111.md"]]),cT=n("h1",null,"Linux CLI",-1),uT=n("p",null,"watch - eseguire un programma periodicamente (monitoring)",-1),pT=n("ul",null,[n("li",null,[t("Il comando "),n("strong",null,"watch"),t(" permette di eseguire un comando periodicamente e di visualizzare il suo output sullo schermo")]),n("li",null,[t("Quindi "),n("strong",null,"watch"),t(" è molto comodo per monitorare un’attività di sistema di cui vogliamo osservare il progresso nel tempo")])],-1),dT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"watch"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("comando"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"watch"),t(),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("Every "),n("span",{class:"token number"},"2"),t(",0s: "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t("                            ")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"6"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":13 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"579"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"9"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 file4")])])],-1),mT=n("br",null,null,-1),fT=n("ul",null,[n("li",null,[t("Esegue ogni 2 secondi il comando "),n("code",null,"ls -la")])],-1),hT={__name:"112",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[cT,uT,pT,A(i,G({},{ranges:[""]}),{default:v(()=>[dT]),_:1},16),mT,fT]),_:1},16)}}},_T=R(hT,[["__file","/@slidev/slides/112.md"]]),gT=n("h1",null,"Linux CLI",-1),vT=n("p",null,"watch - eseguire un programma periodicamente (monitoring)",-1),bT=n("ul",null,[n("li",null,"I parametri più importanti sono")],-1),kT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},"-d: evidenzia le differenze tra un periodo di osservazione e il successivo"),t(`
`),n("span",{class:"line"},[t("-n: specifica l'intervallo di osservazione "),n("span",{class:"token keyword"},"in"),t(" secondi")])])],-1),xT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"watch"),t(),n("span",{class:"token parameter variable"},"-d"),t(),n("span",{class:"token parameter variable"},"-n1"),t(),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("very "),n("span",{class:"token number"},"1"),t(",0s: "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t("                            ")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"6"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"225"),t(" antonio antonio "),n("span",{class:"token number"},"241664"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":13 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"579"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"9"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 file4")])])],-1),wT=n("br",null,null,-1),yT=n("ul",null,[n("li",null,"Visualizza ogni secondo l’output di ls -la evidenziandone le differenze"),n("li",null,"Watch è il tool perfetto per il monitoring di sistema")],-1),$T={__name:"113",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[gT,vT,bT,A(i,G({},{ranges:[""]}),{default:v(()=>[kT]),_:1},16),A(i,G({},{ranges:[""]}),{default:v(()=>[xT]),_:1},16),wT,yT]),_:1},16)}}},IT=R($T,[["__file","/@slidev/slides/113.md"]]),LT=n("h1",null,"Linux CLI",-1),CT=n("p",null,"chown - cambiare proprietario di un file",-1),ST=n("ul",null,[n("li",null,[n("strong",null,"chown"),t(" permette di cambiare l’owner o proprietario di un file")]),n("li",null,"Nello specifico permette di cambiare l’utente e/o il gruppo di appartenenza di un file")],-1),RT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"chown"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token punctuation"},"["),t("Utente"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t(":Gruppo"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t("file"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio    antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"19"),t(":16 file5")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(),n("span",{class:"token function"},"chown"),t(" root file5 "),n("span",{class:"token comment"},"#cambia l'utente proprietario del file")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" root    antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"19"),t(":16 file5")])])],-1),ET={__name:"114",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[LT,CT,ST,A(i,G({},{ranges:[""]}),{default:v(()=>[RT]),_:1},16)]),_:1},16)}}},AT=R(ET,[["__file","/@slidev/slides/114.md"]]),TT=n("h1",null,"Linux CLI",-1),MT=n("p",null,"chown - cambiare proprietario di un file",-1),OT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(),n("span",{class:"token function"},"chown"),t(" root:backup file5 "),n("span",{class:"token comment"},"# cambia il gruppo di appartenenza del file")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":22 file4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r-- "),n("span",{class:"token number"},"1"),t(" root    backup     "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"19"),t(":16 file5")])])],-1),zT=n("br",null,null,-1),PT=n("ul",null,[n("li",null,[n("strong",null,"-R"),t(" è il parametro più importante che cambia l’ownership ricorsivamente di tutti i file e directory")])],-1),DT=n("br",null,null,-1),NT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"chown"),t(),n("span",{class:"token parameter variable"},"-R"),t(" antonio:backup DIR4")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t(" $ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"11"),t(),n("span",{class:"token number"},"19"),t(":11 DIR11")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"2"),t(" antonio antonio "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x "),n("span",{class:"token number"},"3"),t(" antonio backup  "),n("span",{class:"token number"},"4"),t(",0K "),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")])])],-1),FT={__name:"115",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[TT,MT,A(i,G({},{ranges:[""]}),{default:v(()=>[OT]),_:1},16),zT,PT,DT,A(i,G({},{ranges:[""]}),{default:v(()=>[NT]),_:1},16)]),_:1},16)}}},jT=R(FT,[["__file","/@slidev/slides/115.md"]]),KT=n("h1",null,"Linux CLI",-1),HT=n("p",null,"chmod - cambiare permessi di un file",-1),WT=n("ul",null,[n("li",null,[t("Il comando "),n("strong",null,"chmod"),t(" permette di cambiare i permessi di un file di cui si è proprietari")])],-1),BT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"chmod"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token parameter variable"},"-parametri"),t(" opzionali"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("octal mode"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"<"),t("file"),n("span",{class:"token operator"},">")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio backup    "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"579"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"9"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":04 file2")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"chmod"),t(),n("span",{class:"token number"},"551"),t(" file1")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"12"),t(":37 DIR2")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"2"),t(" antonio antonio   "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR3")]),t(`
`),n("span",{class:"line"},[t("drwxrwxr-x   "),n("span",{class:"token number"},"3"),t(" antonio backup    "),n("span",{class:"token number"},"4096"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":24 DIR4")]),t(`
`),n("span",{class:"line"},[t("-r-xr-x--x   "),n("span",{class:"token number"},"1"),t(" antonio antonio    "),n("span",{class:"token number"},"579"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":21 file1")]),t(`
`),n("span",{class:"line"},[t("-rw-rw-r--   "),n("span",{class:"token number"},"1"),t(" antonio antonio      "),n("span",{class:"token number"},"9"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"12"),t(),n("span",{class:"token number"},"15"),t(":04 file2")])])],-1),qT={__name:"116",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[KT,HT,WT,A(i,G({},{ranges:[""]}),{default:v(()=>[BT]),_:1},16)]),_:1},16)}}},VT=R(qT,[["__file","/@slidev/slides/116.md"]]),UT=n("p",null," ",-1),GT={__name:"117",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[UT,A(i,{fs:"100px"},{default:v(()=>[t(" Gestione dei processi ")]),_:1})]),_:1},16)}}},YT=R(GT,[["__file","/@slidev/slides/117.md"]]),ZT=n("h1",null,"Linux CLI",-1),QT=n("p",null,"ps - visualizza i processi di sistema",-1),JT=n("ul",null,[n("li",null,[t("Il comando "),n("strong",null,"ps"),t(" visualizza una snapshot dei processi in esecuzione sul sistema")]),n("li",null,"Ha 32 parametri opzionali ma i più comuni sono")],-1),XT=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("-a: visualizza tutti i processi "),n("span",{class:"token keyword"},"in"),t(" esecuzione")]),t(`
`),n("span",{class:"line"},"-u: visualizza il nome del proprietario dei processi"),t(`
`),n("span",{class:"line"},"-x: visualizza anche i processi root")])],-1),eM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"ps"),t(" aux o "),n("span",{class:"token function"},"ps"),t(),n("span",{class:"token parameter variable"},"-aux")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token environment constant"},"USER"),t("         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND")]),t(`
`),n("span",{class:"line"},[t("root           "),n("span",{class:"token number"},"1"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t(),n("span",{class:"token number"},"166600"),t(),n("span",{class:"token number"},"11996"),t(" ?        Ss   set14   "),n("span",{class:"token number"},"0"),t(":04 /sbin/init splash")]),t(`
`),n("span",{class:"line"},[t("root           "),n("span",{class:"token number"},"2"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t("      "),n("span",{class:"token number"},"0"),t("     "),n("span",{class:"token number"},"0"),t(" ?        S    set14   "),n("span",{class:"token number"},"0"),t(":00 "),n("span",{class:"token punctuation"},"["),t("kthreadd"),n("span",{class:"token punctuation"},"]")]),t(`
`),n("span",{class:"line"},[t("root           "),n("span",{class:"token number"},"3"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t("      "),n("span",{class:"token number"},"0"),t("     "),n("span",{class:"token number"},"0"),t(" ?        I"),n("span",{class:"token operator"},"<"),t("   set14   "),n("span",{class:"token number"},"0"),t(":00 "),n("span",{class:"token punctuation"},"["),t("rcu_gp"),n("span",{class:"token punctuation"},"]")]),t(`
`),n("span",{class:"line"},[t("root           "),n("span",{class:"token number"},"4"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t("      "),n("span",{class:"token number"},"0"),t("     "),n("span",{class:"token number"},"0"),t(" ?        I"),n("span",{class:"token operator"},"<"),t("   set14   "),n("span",{class:"token number"},"0"),t(":00 "),n("span",{class:"token punctuation"},"["),t("rcu_par_gp"),n("span",{class:"token punctuation"},"]")]),t(`
`),n("span",{class:"line"},[t("antonio     "),n("span",{class:"token number"},"3329"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.1"),t(),n("span",{class:"token number"},"271324"),t(),n("span",{class:"token number"},"19684"),t(" ?        S"),n("span",{class:"token operator"},"<"),t("sl set14   "),n("span",{class:"token number"},"0"),t(":08 /usr/bin/wireplumber")]),t(`
`),n("span",{class:"line"},[t("antonio     "),n("span",{class:"token number"},"3330"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.1"),t("  "),n("span",{class:"token number"},"59836"),t(),n("span",{class:"token number"},"25776"),t(" ?        S"),n("span",{class:"token operator"},"<"),t("sl set14   "),n("span",{class:"token number"},"0"),t(":17 /usr/bin/pipewire-pulse")]),t(`
`),n("span",{class:"line"},[t("antonio     "),n("span",{class:"token number"},"3332"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t(),n("span",{class:"token number"},"325608"),t("  "),n("span",{class:"token number"},"9352"),t(" ?        SNLl set14   "),n("span",{class:"token number"},"0"),t(":03 /usr/bin/gnome-keyring-daemon")]),t(`
`),n("span",{class:"line"},[t("antonio     "),n("span",{class:"token number"},"3334"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t("   "),n("span",{class:"token number"},"9672"),t("  "),n("span",{class:"token number"},"4280"),t(" ?        SNs  set14   "),n("span",{class:"token number"},"0"),t(":00 /usr/bin/dbus-broker-launch")]),t(`
`),n("span",{class:"line"},[t("antonio     "),n("span",{class:"token number"},"3338"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.1"),t("  "),n("span",{class:"token number"},"30732"),t(),n("span",{class:"token number"},"28020"),t(" ?        SN   set14   "),n("span",{class:"token number"},"0"),t(":09 dbus-broker "),n("span",{class:"token parameter variable"},"--log"),t(),n("span",{class:"token number"},"4"),t()]),t(`
`),n("span",{class:"line"},[t("antonio     "),n("span",{class:"token number"},"3340"),t("  "),n("span",{class:"token number"},"0.0"),t("  "),n("span",{class:"token number"},"0.0"),t(),n("span",{class:"token number"},"250744"),t("  "),n("span",{class:"token number"},"8516"),t(" ?        SNsl set14   "),n("span",{class:"token number"},"0"),t(":00 /usr/libexec/gvfsd")])])],-1),nM={__name:"118",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[ZT,QT,JT,A(i,G({},{ranges:[""]}),{default:v(()=>[XT]),_:1},16),A(i,G({},{ranges:[""]}),{default:v(()=>[eM]),_:1},16)]),_:1},16)}}},tM=R(nM,[["__file","/@slidev/slides/118.md"]]),sM=n("h1",null,"Linux CLI",-1),oM=n("p",null,"top - monitor dei processi",-1),aM=n("ul",null,[n("li",null,[t("Il comando "),n("strong",null,"top"),t(" permette di monitorare in realtime lo stato dei processi e del sistema")])],-1),iM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"top"),t(" o "),n("span",{class:"token function"},"top"),t(),n("span",{class:"token parameter variable"},"-d1"),t(),n("span",{class:"token punctuation"},"("),t("-d imposta la frequenza di aggiornamento "),n("span",{class:"token keyword"},"in"),t(" secondi"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"top"),t(" - "),n("span",{class:"token number"},"19"),t(":33:42 up "),n("span",{class:"token number"},"2"),t(" days, "),n("span",{class:"token number"},"11"),t(":19,  "),n("span",{class:"token number"},"1"),t(" user,  load average: "),n("span",{class:"token number"},"0,99"),t(", "),n("span",{class:"token number"},"0,79"),t(", "),n("span",{class:"token number"},"0,76")]),t(`
`),n("span",{class:"line"},[t("Tasks: "),n("span",{class:"token number"},"324"),t(" total,   "),n("span",{class:"token number"},"1"),t(" running, "),n("span",{class:"token number"},"323"),t(" sleeping,   "),n("span",{class:"token number"},"0"),t(" stopped,   "),n("span",{class:"token number"},"0"),t(" zombie")]),t(`
`),n("span",{class:"line"},[t("%Cpu"),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},")"),t(":  "),n("span",{class:"token number"},"0,8"),t(" us,  "),n("span",{class:"token number"},"0,7"),t(" sy,  "),n("span",{class:"token number"},"0,1"),t(" ni, "),n("span",{class:"token number"},"98,2"),t(" id,  "),n("span",{class:"token number"},"0,2"),t(" wa,  "),n("span",{class:"token number"},"0,0"),t(" hi,  "),n("span",{class:"token number"},"0,0"),t(" si,  "),n("span",{class:"token number"},"0,0"),t(" st")]),t(`
`),n("span",{class:"line"},[t("MiB Mem "),n("span",{class:"token builtin class-name"},":"),t("  "),n("span",{class:"token number"},"15791,6"),t(" total,   "),n("span",{class:"token number"},"1786,3"),t(" free,   "),n("span",{class:"token number"},"3292,2"),t(" used,  "),n("span",{class:"token number"},"10713,1"),t(" buff/cache")]),t(`
`),n("span",{class:"line"},[t("MiB Swap:  "),n("span",{class:"token number"},"15792,0"),t(" total,  "),n("span",{class:"token number"},"15791,7"),t(" free,      "),n("span",{class:"token number"},"0,2"),t(" used.   "),n("span",{class:"token number"},"7012,9"),t(" avail Mem")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("    PID "),n("span",{class:"token environment constant"},"USER"),t("      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND")]),t(`
`),n("span",{class:"line"},[t("   "),n("span",{class:"token number"},"3554"),t(" antonio   "),n("span",{class:"token number"},"15"),t("  "),n("span",{class:"token parameter variable"},"-5"),t(),n("span",{class:"token number"},"9759148"),t(),n("span",{class:"token number"},"449940"),t(),n("span",{class:"token number"},"140404"),t(" S   "),n("span",{class:"token number"},"7,0"),t("   "),n("span",{class:"token number"},"2,8"),t("  "),n("span",{class:"token number"},"70"),t(":34.56 gnome-shell")]),t(`
`),n("span",{class:"line"},[t("   "),n("span",{class:"token number"},"3376"),t(" antonio   "),n("span",{class:"token number"},"15"),t("  "),n("span",{class:"token parameter variable"},"-5"),t(),n("span",{class:"token number"},"1576484"),t(),n("span",{class:"token number"},"138616"),t("  "),n("span",{class:"token number"},"74300"),t(" S   "),n("span",{class:"token number"},"4,0"),t("   "),n("span",{class:"token number"},"0,9"),t("  "),n("span",{class:"token number"},"34"),t(":09.73 Xorg     ")]),t(`
`),n("span",{class:"line"},[t(),n("span",{class:"token number"},"127381"),t(" antonio   "),n("span",{class:"token number"},"15"),t("  "),n("span",{class:"token parameter variable"},"-5"),t("  "),n("span",{class:"token number"},"801916"),t("  "),n("span",{class:"token number"},"81964"),t("  "),n("span",{class:"token number"},"50044"),t(" S   "),n("span",{class:"token number"},"2,3"),t("   "),n("span",{class:"token number"},"0,5"),t("   "),n("span",{class:"token number"},"0"),t(":09.48 terminator")]),t(`
`),n("span",{class:"line"},[t("    "),n("span",{class:"token number"},"588"),t(" root      "),n("span",{class:"token number"},"29"),t("   "),n("span",{class:"token number"},"9"),t("   "),n("span",{class:"token number"},"86268"),t("   "),n("span",{class:"token number"},"6220"),t("   "),n("span",{class:"token number"},"5644"),t(" S   "),n("span",{class:"token number"},"0,3"),t("   "),n("span",{class:"token number"},"0,0"),t("   "),n("span",{class:"token number"},"0"),t(":37.69 system76-power")]),t(`
`),n("span",{class:"line"},[t("   "),n("span",{class:"token number"},"3715"),t(" antonio   "),n("span",{class:"token number"},"25"),t("   "),n("span",{class:"token number"},"5"),t("  "),n("span",{class:"token number"},"325420"),t("  "),n("span",{class:"token number"},"13064"),t("   "),n("span",{class:"token number"},"7372"),t(" S   "),n("span",{class:"token number"},"0,3"),t("   "),n("span",{class:"token number"},"0,1"),t("   "),n("span",{class:"token number"},"4"),t(":46.58 ibus-daemon")]),t(`
`),n("span",{class:"line"},[t(),n("span",{class:"token number"},"118065"),t(" antonio   "),n("span",{class:"token number"},"25"),t("   "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token number"},"1357808"),t("  "),n("span",{class:"token number"},"98500"),t("  "),n("span",{class:"token number"},"57336"),t(" S   "),n("span",{class:"token number"},"0,3"),t("   "),n("span",{class:"token number"},"0,6"),t("   "),n("span",{class:"token number"},"0"),t(":09.93 warpinator")]),t(`
`),n("span",{class:"line"},[t(),n("span",{class:"token number"},"128253"),t(" antonio   "),n("span",{class:"token number"},"25"),t("   "),n("span",{class:"token number"},"5"),t(),n("span",{class:"token number"},"1122"),t(",0g "),n("span",{class:"token number"},"177448"),t(),n("span",{class:"token number"},"130300"),t(" S   "),n("span",{class:"token number"},"0,3"),t("   "),n("span",{class:"token number"},"1,1"),t("   "),n("span",{class:"token number"},"0"),t(":28.34 code  ")]),t(`
`),n("span",{class:"line"},[t("      "),n("span",{class:"token number"},"1"),t(" root      "),n("span",{class:"token number"},"20"),t("   "),n("span",{class:"token number"},"0"),t("  "),n("span",{class:"token number"},"166600"),t("  "),n("span",{class:"token number"},"11996"),t("   "),n("span",{class:"token number"},"8436"),t(" S   "),n("span",{class:"token number"},"0,0"),t("   "),n("span",{class:"token number"},"0,1"),t("   "),n("span",{class:"token number"},"0"),t(":04.89 systemd ")]),t(`
`),n("span",{class:"line"},[t("      "),n("span",{class:"token number"},"2"),t(" root      "),n("span",{class:"token number"},"20"),t("   "),n("span",{class:"token number"},"0"),t("       "),n("span",{class:"token number"},"0"),t("      "),n("span",{class:"token number"},"0"),t("      "),n("span",{class:"token number"},"0"),t(" S   "),n("span",{class:"token number"},"0,0"),t("   "),n("span",{class:"token number"},"0,0"),t("   "),n("span",{class:"token number"},"0"),t(":00.11 kthreadd ")]),t(`
`),n("span",{class:"line"},[t("      "),n("span",{class:"token number"},"3"),t(" root       "),n("span",{class:"token number"},"0"),t(),n("span",{class:"token parameter variable"},"-20"),t("       "),n("span",{class:"token number"},"0"),t("      "),n("span",{class:"token number"},"0"),t("      "),n("span",{class:"token number"},"0"),t(" I   "),n("span",{class:"token number"},"0,0"),t("   "),n("span",{class:"token number"},"0,0"),t("   "),n("span",{class:"token number"},"0"),t(":00.00 rcu_gp")])])],-1),lM={__name:"119",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[sM,oM,aM,A(i,G({},{ranges:[""]}),{default:v(()=>[iM]),_:1},16)]),_:1},16)}}},rM=R(lM,[["__file","/@slidev/slides/119.md"]]),cM=n("h1",null,"Linux CLI",-1),uM=n("p",null,"kill - inviare un segnale ad un processo (uccidere un processo)",-1),pM=n("ul",null,[n("li",null,[t("Il comando "),n("strong",null,"kill"),t(" server per inviare un segnale ad un processo")]),n("li",null,[t("Il segnale più comune è quello nominato "),n("strong",null,"SIGKILL"),t(" che termina e uccide un process")])],-1),dM=n("br",null,null,-1),mM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"kill"),t(),n("span",{class:"token parameter variable"},"-9"),t(),n("span",{class:"token operator"},"<"),t("process id"),n("span",{class:"token operator"},">"),t("  "),n("span",{class:"token comment"},"# uccide il processo identificato da id")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"kill"),t(),n("span",{class:"token parameter variable"},"-9"),t(),n("span",{class:"token number"},"132480")])])],-1),fM={__name:"120",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[cM,uM,pM,dM,A(i,G({},{ranges:[""]}),{default:v(()=>[mM]),_:1},16)]),_:1},16)}}},hM=R(fM,[["__file","/@slidev/slides/120.md"]]),_M=n("h1",null,"Linux CLI",-1),gM=n("p",null,"free - visualizzare la memoria disponibile",-1),vM=n("ul",null,[n("li",null,"Visualizza lo statod ella memoria RAM indicando la capacità occupata e quella disponibile")],-1),bM=n("br",null,null,-1),kM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"free"),t(),n("span",{class:"token parameter variable"},"-h")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},"               buff/cache condivisi gratuiti totali utilizzati disponibili"),t(`
`),n("span",{class:"line"},[t("Mem:            15Gi       "),n("span",{class:"token number"},"3"),t(",1Gi       "),n("span",{class:"token number"},"1"),t(",9Gi       "),n("span",{class:"token number"},"4"),t(",2Gi        10Gi       "),n("span",{class:"token number"},"7"),t(",0Gi")]),t(`
`),n("span",{class:"line"},[t("Swap:           15Gi       "),n("span",{class:"token number"},"0"),t(",0Ki        15Gi")])])],-1),xM={__name:"121",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[_M,gM,vM,bM,A(i,G({},{ranges:[""]}),{default:v(()=>[kM]),_:1},16)]),_:1},16)}}},wM=R(xM,[["__file","/@slidev/slides/121.md"]]),yM=n("p",null," ",-1),$M={__name:"122",setup(e){const s={};return L(S),(o,a)=>{const i=rt;return b(),C(K,j(F(s)),{default:v(()=>[yM,A(i,{fs:"100px"},{default:v(()=>[t(" Comandi di sistema ")]),_:1})]),_:1},16)}}},IM=R($M,[["__file","/@slidev/slides/122.md"]]),LM=n("h1",null,"Linux CLI",-1),CM=n("p",null,"sudo - eseguire un comando come un’altro utente",-1),SM=n("ul",null,[n("li",null,"In alcuni casi è necessario eseguire un comando con i privilegi di root"),n("li",null,"Tuttavia in un sistema, a meno che noi siamo root, non conosciamo la password"),n("li",null,"Pertanto l’amministratore può decidere di fornirci i permessi per eseguire alcuni o tutti i comandi come root"),n("li",null,[t("Per far ciò si usa il comando "),n("strong",null,"sudo")])],-1),RM=n("br",null,null,-1),EM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(),n("span",{class:"token operator"},"<"),t("comando"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# esegue comando come root")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(),n("span",{class:"token function"},"ls"),t(),n("span",{class:"token parameter variable"},"-la"),t(" /root")]),t(`
`),n("span",{class:"line"},[t("drwx------  "),n("span",{class:"token number"},"8"),t(" root root  "),n("span",{class:"token number"},"4096"),t(" ago "),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"17"),t(":18 "),n("span",{class:"token builtin class-name"},".")]),t(`
`),n("span",{class:"line"},[t("drwxr-xr-x "),n("span",{class:"token number"},"18"),t(" root root  "),n("span",{class:"token number"},"4096"),t(" ago "),n("span",{class:"token number"},"29"),t(),n("span",{class:"token number"},"11"),t(":42 "),n("span",{class:"token punctuation"},"..")]),t(`
`),n("span",{class:"line"},[t("-rw-------  "),n("span",{class:"token number"},"1"),t(" root root "),n("span",{class:"token number"},"32037"),t(),n("span",{class:"token builtin class-name"},"set"),t(),n("span",{class:"token number"},"16"),t(),n("span",{class:"token number"},"19"),t(":19 .bash_history")]),t(`
`),n("span",{class:"line"},[t("-rw-r--r--  "),n("span",{class:"token number"},"1"),t(" root root  "),n("span",{class:"token number"},"3106"),t(" ott "),n("span",{class:"token number"},"15"),t("  "),n("span",{class:"token number"},"2021"),t(" .bashrc")]),t(`
`),n("span",{class:"line"},[t("drwx------  "),n("span",{class:"token number"},"6"),t(" root root  "),n("span",{class:"token number"},"4096"),t(" ago  "),n("span",{class:"token number"},"7"),t(),n("span",{class:"token number"},"15"),t(":11 .cache")]),t(`
`),n("span",{class:"line"},[t("drwxr-xr-x  "),n("span",{class:"token number"},"7"),t(" root root  "),n("span",{class:"token number"},"4096"),t(" ago "),n("span",{class:"token number"},"24"),t(),n("span",{class:"token number"},"18"),t(":05 .config")]),t(`
`),n("span",{class:"line"},[t("drwx------  "),n("span",{class:"token number"},"3"),t(" root root  "),n("span",{class:"token number"},"4096"),t(" nov "),n("span",{class:"token number"},"18"),t("  "),n("span",{class:"token number"},"2022"),t(" .gnupg")]),t(`
`),n("span",{class:"line"},[t("drwx------  "),n("span",{class:"token number"},"3"),t(" root root  "),n("span",{class:"token number"},"4096"),t(" lug  "),n("span",{class:"token number"},"3"),t("  "),n("span",{class:"token number"},"2022"),t(" .launchpadlib")]),t(`
`),n("span",{class:"line"},[t("-rw-------  "),n("span",{class:"token number"},"1"),t(" root root    "),n("span",{class:"token number"},"48"),t(" ago "),n("span",{class:"token number"},"10"),t(),n("span",{class:"token number"},"17"),t(":18 .lesshst")])])],-1),AM={__name:"123",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[LM,CM,SM,RM,A(i,G({},{ranges:[""]}),{default:v(()=>[EM]),_:1},16)]),_:1},16)}}},TM=R(AM,[["__file","/@slidev/slides/123.md"]]),MM=n("h1",null,"Linux CLI",-1),OM=n("p",null,"Il packet manager APT",-1),zM=n("ul",null,[n("li",null,[n("p",null,"Fin dagli albori, ogni distribuzione di linux fornisce un packet manager più o meno sofisticato")]),n("li",null,[n("p",null,"Windows non ha mai fornito un packet manager (esiste qualche scimmiottamento in tempi recenti)")]),n("li",null,[n("p",null,[t("Le distribuzioni derivate da Debiam incorporano tutte il packet manager "),n("code",null,"APT")])]),n("li",null,[n("p",null,[n("strong",null,"APT"),t(" permette con estrema semplicità, e gestendo le dipendenze per noi,di")]),n("ul",null,[n("li",null,"cercare"),n("li",null,"installare"),n("li",null,"rimuovere")])]),n("li",null,[n("p",null,"ogni tipo di software che vogliamo usare su linux")])],-1),PM={__name:"124",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[MM,OM,zM]),_:1},16))}},DM=R(PM,[["__file","/@slidev/slides/124.md"]]),NM=n("h1",null,"Linux CLI",-1),FM=n("p",null,"apt search - ricerchiamo un programma da installare",-1),jM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"apt"),t(" search "),n("span",{class:"token operator"},"<"),t("stringa"),n("span",{class:"token operator"},">"),t(),n("span",{class:"token comment"},"# cerca nel repository tutti i software e paccketti che includono stringa")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"apt"),t(" search figlet                                                     ")]),t(`
`),n("span",{class:"line"},[t("Ordinamento"),n("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),n("span",{class:"line"},[t("Ricerca sul testo"),n("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),n("span",{class:"line"},[t("figlet/jammy "),n("span",{class:"token number"},"2.2"),t(".5-3 amd64")]),t(`
`),n("span",{class:"line"},"  crea striscioni ASCII con grandi caratteri da testo normale"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("irssi-scripts/jammy,jammy "),n("span",{class:"token number"},"20201016"),t(" all")]),t(`
`),n("span",{class:"line"},"  raccolta di script per irssi"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("php-text-figlet/jammy,jammy "),n("span",{class:"token number"},"1.0"),t(".2-5 all")]),t(`
`),n("span",{class:"line"},"  motore per usare tipi di carattere FIGlet per fare il rendering di testo"),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("presentty/jammy,jammy "),n("span",{class:"token number"},"0.2"),t(".1-1.1 all")]),t(`
`),n("span",{class:"line"},[t("  software per presentazioni basato "),n("span",{class:"token function"},"su"),t(" console")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("python3-pyfiglet/jammy,jammy "),n("span",{class:"token number"},"0.8"),t(".0+dfsg-1 all")]),t(`
`),n("span",{class:"line"},[t("  port per Python "),n("span",{class:"token number"},"3"),t(" della specifica FIGlet")])])],-1),KM={__name:"125",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[NM,FM,A(i,G({},{ranges:[""]}),{default:v(()=>[jM]),_:1},16)]),_:1},16)}}},HM=R(KM,[["__file","/@slidev/slides/125.md"]]),WM=n("h1",null,"Linux CLI",-1),BM=n("p",null,"apt install - installare un software",-1),qM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(),n("span",{class:"token function"},"apt"),t(),n("span",{class:"token function"},"install"),t(" figlet "),n("span",{class:"token comment"},"# installa il paccketto figlet")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("Lettura elenco dei pacchetti"),n("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),n("span",{class:"line"},[t("Generazione albero delle dipendenze"),n("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),n("span",{class:"line"},[t("Lettura informazioni sullo stato"),n("span",{class:"token punctuation"},".."),t(". Fatto   ")]),t(`
`),n("span",{class:"line"},"I seguenti pacchetti NUOVI saranno installati:"),t(`
`),n("span",{class:"line"},"  figlet"),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"0"),t(" aggiornati, "),n("span",{class:"token number"},"1"),t(" installati, "),n("span",{class:"token number"},"0"),t(" da rimuovere e "),n("span",{class:"token number"},"579"),t(" non aggiornati.")]),t(`
`),n("span",{class:"line"},[t("È necessario scaricare "),n("span",{class:"token number"},"133"),t(" kB di archivi.")]),t(`
`),n("span",{class:"line"},[t("Dopo quest'operazione, verranno occupati "),n("span",{class:"token number"},"752"),t(" kB di spazio "),n("span",{class:"token function"},"su"),t(" disco.")]),t(`
`),n("span",{class:"line"},[t("Scaricamento di:1 http://apt.pop-os.org/ubuntu jammy/universe amd64 figlet amd64 "),n("span",{class:"token number"},"2.2"),t(".5-3 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"133"),t(" kB"),n("span",{class:"token punctuation"},"]")]),t(`
`),n("span",{class:"line"},[t("Recuperati "),n("span",{class:"token number"},"133"),t(" kB "),n("span",{class:"token keyword"},"in"),t(" 0s "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"799"),t(" kB/s"),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},"Selezionato il pacchetto figlet non precedentemente selezionato."),t(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"("),t("Lettura del database"),n("span",{class:"token punctuation"},".."),t(". "),n("span",{class:"token number"},"381484"),t(),n("span",{class:"token function"},"file"),t(" e directory attualmente installati."),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("Preparativi per estrarre "),n("span",{class:"token punctuation"},".."),t("./figlet_2.2.5-3_amd64.deb"),n("span",{class:"token punctuation"},".."),t(".")]),t(`
`),n("span",{class:"line"},[t("Estrazione di figlet "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.2"),t(".5-3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},".."),t(".")]),t(`
`),n("span",{class:"line"},[t("Configurazione di figlet "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.2"),t(".5-3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},".."),t(".")]),t(`
`),n("span",{class:"line"},"update-alternatives: viene usato /usr/bin/figlet-figlet per fornire /usr/bin/figlet"),t(`
`),n("span",{class:"line"},[t("Elaborazione dei trigger per man-db "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.10"),t(".2-1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},".."),t(".")])])],-1),VM={__name:"126",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[WM,BM,A(i,G({},{ranges:[""]}),{default:v(()=>[qM]),_:1},16)]),_:1},16)}}},UM=R(VM,[["__file","/@slidev/slides/126.md"]]),GM=n("h1",null,"Linux CLI",-1),YM=n("p",null,"apt remove - disinstallare un software",-1),ZM=n("pre",{class:"slidev-code language-bash"},[n("code",null,[n("span",{class:"line"},[t("$ "),n("span",{class:"token function"},"sudo"),t(),n("span",{class:"token function"},"apt"),t(" remove figlet "),n("span",{class:"token comment"},"# rimuove il paccketto figlet")]),t(`
`),n("span",{class:"line"}),t(`
`),n("span",{class:"line"},[t("Lettura elenco dei pacchetti"),n("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),n("span",{class:"line"},[t("Generazione albero delle dipendenze"),n("span",{class:"token punctuation"},".."),t(". Fatto")]),t(`
`),n("span",{class:"line"},[t("Lettura informazioni sullo stato"),n("span",{class:"token punctuation"},".."),t(". Fatto   ")]),t(`
`),n("span",{class:"line"},"I seguenti pacchetti saranno RIMOSSI:"),t(`
`),n("span",{class:"line"},"  figlet"),t(`
`),n("span",{class:"line"},[n("span",{class:"token number"},"0"),t(" aggiornati, "),n("span",{class:"token number"},"0"),t(" installati, "),n("span",{class:"token number"},"1"),t(" da rimuovere e "),n("span",{class:"token number"},"579"),t(" non aggiornati.")]),t(`
`),n("span",{class:"line"},[t("Dopo quest'operazione, verranno liberati "),n("span",{class:"token number"},"752"),t(" kB di spazio "),n("span",{class:"token function"},"su"),t(" disco.")]),t(`
`),n("span",{class:"line"},[t("Continuare? "),n("span",{class:"token punctuation"},"["),t("S/n"),n("span",{class:"token punctuation"},"]"),t(" s")]),t(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"("),t("Lettura del database"),n("span",{class:"token punctuation"},".."),t(". "),n("span",{class:"token number"},"381556"),t(),n("span",{class:"token function"},"file"),t(" e directory attualmente installati."),n("span",{class:"token punctuation"},")")]),t(`
`),n("span",{class:"line"},[t("Rimozione di figlet "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.2"),t(".5-3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},".."),t(".")]),t(`
`),n("span",{class:"line"},"update-alternatives: viene usato /usr/bin/figlet-toilet per fornire /usr/bin/figlet"),t(`
`),n("span",{class:"line"},[t("Elaborazione dei trigger per man-db "),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.10"),t(".2-1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},".."),t(".")])])],-1),QM={__name:"127",setup(e){const s={};return L(S),(o,a)=>{const i=te;return b(),C(K,j(F(s)),{default:v(()=>[GM,YM,A(i,G({},{ranges:[""]}),{default:v(()=>[ZM]),_:1},16)]),_:1},16)}}},JM=R(QM,[["__file","/@slidev/slides/127.md"]]),XM="/3/linux_cli/assets/hh01-23d0a28c.webp",eO=n("img",{src:XM,style:{position:"relative",top:"-20px"}},null,-1),nO={__name:"128",setup(e){const s={};return L(S),(o,a)=>(b(),C(K,j(F(s)),{default:v(()=>[eO]),_:1},16))}},tO=R(nO,[["__file","/@slidev/slides/128.md"]]),sO=[{path:"1",name:"page-1",component:$I,meta:{theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.1.1",title:"RETI 3",slide:{raw:`---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
background: /cover.png
class: 'text-center'
# https://sli.dev/custom/highlighters.html
# show line numbers in code blocks
lineNumbers: false
aspectRatio: '16_/9'
routerMode: 'hash'
materia: RETI 3
as: 2024/2025
version: '1.1.1'
---  

<!-- https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook -->

# RETI 3

Linux CLI

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>
`,title:"RETI 3",level:1,content:`<!-- https://www.linuxjournal.com/content/linux-command-line-interface-introduction-guide#firstlook -->

# RETI 3

Linux CLI

<div class="pt-12">
  <span class="px-2 py-1">
    Premi spazio o <carbon:arrow-right class="inline"/> per la prossima slide
  </span>
</div>`,frontmatter:{theme:"default",background:"/cover.png",class:"text-center",lineNumbers:!1,aspectRatio:"16_/9",routerMode:"hash",materia:"RETI 3",as:"2024/2025",version:"1.1.1",title:"RETI 3"},index:0,start:0,end:29,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:AI,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_00.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:1,start:30,end:36,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:PI,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_01.jpg" width="650" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_01.jpg" width="650" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:2,start:37,end:42,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:KI,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_02.jpg" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_02.jpg" width="600" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:3,start:43,end:48,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:VI,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/c_03.jpg" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/c_03.jpg" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:4,start:49,end:54,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:QI,meta:{slide:{raw:`
# Linux CLI

Materiale Aggiuntivo

- [Linux CLI Commands](/support/3/linux_cli/linux_commands.pdf)
- [Introduction to Bash](/support/3/linux_cli/introduction-to-bash-scripting-light.pdf)

`,title:"Linux CLI",level:1,content:`# Linux CLI

Materiale Aggiuntivo

- [Linux CLI Commands](/support/3/linux_cli/linux_commands.pdf)
- [Introduction to Bash](/support/3/linux_cli/introduction-to-bash-scripting-light.pdf)`,frontmatter:{},index:5,start:55,end:64,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:t4,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Intro
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Intro
</Cover>`,frontmatter:{},index:6,start:65,end:72,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:l4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

- Unix e Linux hanno una lunga tradizione nel fornire degli ambienti grafici per le proprie versioni o distribuzioni.
- Oggi ci sono decine di ambienti desktop diversi per Linux, al contrario di 1 solo per Windows e MAC
- Questo è legato a motivi storici e legato al concetto che ogni utente può scegliere veramente l'ambiente che preferisce ed è maggiormente congeniale per lui
- Alcuni tra i più popolari ambienti desktop sono
  - Gnome
  - KDE
  - XFCE
  - LXQt
  - Cinnamon
  - Mate
  - Unit
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

- Unix e Linux hanno una lunga tradizione nel fornire degli ambienti grafici per le proprie versioni o distribuzioni.
- Oggi ci sono decine di ambienti desktop diversi per Linux, al contrario di 1 solo per Windows e MAC
- Questo è legato a motivi storici e legato al concetto che ogni utente può scegliere veramente l'ambiente che preferisce ed è maggiormente congeniale per lui
- Alcuni tra i più popolari ambienti desktop sono
  - Gnome
  - KDE
  - XFCE
  - LXQt
  - Cinnamon
  - Mate
  - Unit`,frontmatter:{},index:7,start:73,end:90,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:m4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

- Gli ambienti desktop sono molto evoluti e permettono all'utente di svolgere qualsiasi funzione necessaria durante l'utilizzo convenzionale del PC con Linux, esattamente come avviene per un utente Windows o Mac
- Oggi un utente Desktop Linux non sente la mancanza di nessuno strumento disponibile su Windows o Mac
- Tuttavia per quanto un'ambiente possa essere evoluto, per sfruttare al meglio e al massimo le funzionalità di un sistema Linux è necessario utilizzare uno strumento imprescindibile che si chiama \`CLI\`

<span class="cli" style="font-size:3rem; margin:70px auto; text-align: center; display:block; width:85%;color: #00fe00; background: black; line-height: 4rem; height: 4rem;">Command Line Interface</span>

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

- Gli ambienti desktop sono molto evoluti e permettono all'utente di svolgere qualsiasi funzione necessaria durante l'utilizzo convenzionale del PC con Linux, esattamente come avviene per un utente Windows o Mac
- Oggi un utente Desktop Linux non sente la mancanza di nessuno strumento disponibile su Windows o Mac
- Tuttavia per quanto un'ambiente possa essere evoluto, per sfruttare al meglio e al massimo le funzionalità di un sistema Linux è necessario utilizzare uno strumento imprescindibile che si chiama \`CLI\`

<span class="cli" style="font-size:3rem; margin:70px auto; text-align: center; display:block; width:85%;color: #00fe00; background: black; line-height: 4rem; height: 4rem;">Command Line Interface</span>`,frontmatter:{},index:8,start:91,end:103,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:b4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

<img src="/media/cli_01.png" width="750" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:9,start:104,end:112,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:L4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

- La Linea di Comando di Linux (Command Line Interface, CLI) è un'interfaccia testuale che consente agli utenti di comunicare direttamente con il sistema operativo Linux attraverso comandi testuali. 

<img src="/media/cli_02.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:10,start:113,end:122,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:A4,meta:{slide:{raw:`
# Linux CLI 
 
Introduzione

- A differenza delle interfacce grafiche, che utilizzano icone e finestre, la CLI richiede l'uso di comandi testuali    per eseguire operazioni sul sistema.
- La CLI di Linux offre numerosi vantaggi, tra cui:
  - il controllo più preciso e potente sul sistema (*root mode*)
  - crea i tuoi comandi per risolvere i tuoi problemi (*god mode*)
  - l'automazione delle attività ripetitive (*Productive laziness - Do it right, do it once. That’s the lazy option.*)
  - la possibilità di lavorare in ambienti in cui le interfacce grafiche non sono disponibili (server remoti, sistemi embedded).
  - maggior velocità, flessibilità ed efficienza
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Introduzione

- A differenza delle interfacce grafiche, che utilizzano icone e finestre, la CLI richiede l'uso di comandi testuali    per eseguire operazioni sul sistema.
- La CLI di Linux offre numerosi vantaggi, tra cui:
  - il controllo più preciso e potente sul sistema (*root mode*)
  - crea i tuoi comandi per risolvere i tuoi problemi (*god mode*)
  - l'automazione delle attività ripetitive (*Productive laziness - Do it right, do it once. That’s the lazy option.*)
  - la possibilità di lavorare in ambienti in cui le interfacce grafiche non sono disponibili (server remoti, sistemi embedded).
  - maggior velocità, flessibilità ed efficienza`,frontmatter:{},index:11,start:123,end:136,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:O4,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Cenni Storici
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Cenni Storici
</Cover>`,frontmatter:{},index:12,start:137,end:145,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:K4,meta:{slide:{raw:`
# Linux CLI 
 
Breve Storia

- La *Bourne Shell* (sh) è stata originariamente sviluppata da Stephen Bourne mentre lavorava ai Bell Labs.
- Rilasciato nel 1979 nella versione Unix versione 7 distribuita a college e università.
- La \`Bourne Again Shell\` (**bash**) è stata scritta come sostituto gratuito e open source della Bourne Shell.
- Data la natura aperta di Bash, nel tempo è stata adottata come shell predefinita sulla maggior parte dei sistemi Linux.
- Esistono molte altre shell (csh, ksh) ed in epoca più moderna **zsh** e **fish**


<img src="/media/cli_16.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Breve Storia

- La *Bourne Shell* (sh) è stata originariamente sviluppata da Stephen Bourne mentre lavorava ai Bell Labs.
- Rilasciato nel 1979 nella versione Unix versione 7 distribuita a college e università.
- La \`Bourne Again Shell\` (**bash**) è stata scritta come sostituto gratuito e open source della Bourne Shell.
- Data la natura aperta di Bash, nel tempo è stata adottata come shell predefinita sulla maggior parte dei sistemi Linux.
- Esistono molte altre shell (csh, ksh) ed in epoca più moderna **zsh** e **fish**


<img src="/media/cli_16.png" width="800" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:13,start:146,end:161,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:V4,meta:{slide:{raw:`
# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 

<img src="/media/cli_04.png" width="700" style="margin:auto;position:relative; left: 0px; top: -10px;">`,frontmatter:{},index:14,start:162,end:168,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Q4,meta:{slide:{raw:`
# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
<img src="/media/cli_03.png" width="600" style="margin:auto;position:relative; left: 0px; top: -10px;">`,frontmatter:{},index:15,start:169,end:174,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:e3,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Concetti Chiave
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Concetti Chiave
</Cover>`,frontmatter:{},index:16,start:175,end:183,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:i3,meta:{slide:{raw:`
# Linux CLI 

<div style="width:50%">

Ecco alcuni concetti chiave relativi alla CLI di Linux:

- **Terminale**: Il terminale è l'ambiente in cui vengono inseriti i comandi. E' un'applicazione che fornisce un'interfaccia testuale per interagire con il sistema operativo. Mostra un prompt, di solito indicato dal simbolo del dollaro ($) per gli utenti normali e dal cancelletto (#) per l'utente root con privilegi amministrativi.
- **Comandi**: I comandi sono le istruzioni testuali che vengono inserite nel terminale per eseguire azioni specifiche. Un comando è generalmente composto da un nome di comando seguito da argomenti e opzioni. Ad esempio, il comando ls -l elenca i file e le directory con dettagli.

</div>

<img src="/media/cli_05.png" width="450" style="margin:auto;position:relative; left: 250px; top: -450px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<div style="width:50%">

Ecco alcuni concetti chiave relativi alla CLI di Linux:

- **Terminale**: Il terminale è l'ambiente in cui vengono inseriti i comandi. E' un'applicazione che fornisce un'interfaccia testuale per interagire con il sistema operativo. Mostra un prompt, di solito indicato dal simbolo del dollaro ($) per gli utenti normali e dal cancelletto (#) per l'utente root con privilegi amministrativi.
- **Comandi**: I comandi sono le istruzioni testuali che vengono inserite nel terminale per eseguire azioni specifiche. Un comando è generalmente composto da un nome di comando seguito da argomenti e opzioni. Ad esempio, il comando ls -l elenca i file e le directory con dettagli.

</div>

<img src="/media/cli_05.png" width="450" style="margin:auto;position:relative; left: 250px; top: -450px;">`,frontmatter:{},index:17,start:184,end:199,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:I3,meta:{slide:{raw:`
# Linux CLI 
 
File System

<div style="width:50%">

**File System**: 
- Linux organizza file e directory in una struttura ad albero chiamata file system. 
- Il file system di Linux segue la filosofia "tutto è un file", che significa che anche le periferiche hardware sono rappresentate come file.

**Path**: 
- Il percorso è la posizione di un file o di una directory all'interno del File System. 
- Il percorso assoluto inizia dalla radice del sistema (/)
- Il percorso relativo si basa sulla posizione corrente.

</div>

<div style="width:50%; position: relative;top: -490px; left:450px;">

\`\`\`bash
❯❯❯ tree -L 1
/
├── bin -> usr/bin
├── boot
├── dev
├── etc
├── home
├── lib -> usr/lib
├── lib32 -> usr/lib32
├── lib64 -> usr/lib64
├── libx32 -> usr/libx32
├── lost+found
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin -> usr/sbin
├── srv
├── sys
├── tmp
├── usr
└── var
22 directories, 0 files
\`\`\`

</div>
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

<div style="width:50%">

**File System**: 
- Linux organizza file e directory in una struttura ad albero chiamata file system. 
- Il file system di Linux segue la filosofia "tutto è un file", che significa che anche le periferiche hardware sono rappresentate come file.

**Path**: 
- Il percorso è la posizione di un file o di una directory all'interno del File System. 
- Il percorso assoluto inizia dalla radice del sistema (/)
- Il percorso relativo si basa sulla posizione corrente.

</div>

<div style="width:50%; position: relative;top: -490px; left:450px;">

\`\`\`bash
❯❯❯ tree -L 1
/
├── bin -> usr/bin
├── boot
├── dev
├── etc
├── home
├── lib -> usr/lib
├── lib32 -> usr/lib32
├── lib64 -> usr/lib64
├── libx32 -> usr/libx32
├── lost+found
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin -> usr/sbin
├── srv
├── sys
├── tmp
├── usr
└── var
22 directories, 0 files
\`\`\`

</div>`,frontmatter:{},index:18,start:200,end:250,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:M3,meta:{slide:{raw:`
# Linux CLI 
 
File System

**/bin**: è la directory che contiene i file binari, ovvero alcune applicazioni e programmi che è possibile eseguire. Troverai il programma ls menzionato sopra in questa directory, così come altri strumenti di base per creare e rimuovere file e directory, spostarli e così via. 

**/boot**: contiene i file necessari per avviare il sistema. Il boot loader, il kernel etc... <mark>NON TOCCARE</mark> Modificando i file contenuti in questa directory potresti non essere in grado di riavviare correttamente Linux

**/dev**: contiene i file dei dispositivi logici e HW (terminale, console, SSD, scheda video, scheda di rete, ...). Molti di questi vengono generati all'avvio o addirittura al volo. Ad esempio, se colleghi una nuova webcam o una chiavetta USB al tuo computer, una nuova voce relativa al dispositivo verrà automaticamente visualizzata qui.

**/etc**: è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E' una directory da <mark>MANEGGIARE CON CURA</mark>.
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

**/bin**: è la directory che contiene i file binari, ovvero alcune applicazioni e programmi che è possibile eseguire. Troverai il programma ls menzionato sopra in questa directory, così come altri strumenti di base per creare e rimuovere file e directory, spostarli e così via. 

**/boot**: contiene i file necessari per avviare il sistema. Il boot loader, il kernel etc... <mark>NON TOCCARE</mark> Modificando i file contenuti in questa directory potresti non essere in grado di riavviare correttamente Linux

**/dev**: contiene i file dei dispositivi logici e HW (terminale, console, SSD, scheda video, scheda di rete, ...). Molti di questi vengono generati all'avvio o addirittura al volo. Ad esempio, se colleghi una nuova webcam o una chiavetta USB al tuo computer, una nuova voce relativa al dispositivo verrà automaticamente visualizzata qui.

**/etc**: è la directory che contiene la maggior parte, se non tutti, i file di configurazione a livello di sistema. Ad esempio, i file che contengono il nome del tuo sistema, gli utenti e le loro password, i nomi delle macchine sulla tua rete e quando e dove dovrebbero essere montate le partizioni sui tuoi dischi rigidi sono tutti qui. E' una directory da <mark>MANEGGIARE CON CURA</mark>.`,frontmatter:{},index:19,start:251,end:264,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:H3,meta:{slide:{raw:`
# Linux CLI 
 
File System

**/home**: contiene le directory personali degli utenti del sistema. Normalmente il nome della directory coincide con il nome dell'utente (utente *antonio*, home dir: */home/antonio*)

**/lib o /usr/lib**: contiene le librerie di sistema che permettono l'esecuzione degli applicativi, della shell ed in genere di tutti i programmi che girano sul PC. In breve contengono frammenti di codice utilizzati dalle applicazioni per disegnare finestre sul desktop, controllare le periferiche o inviare file al disco rigido.

Una sotto directory importantissima è *modules* contiene gli importantissimi moduli del kernel. I moduli del kernel sono driver che fanno funzionare cose come la scheda video, la scheda audio, il WiFi, la stampante e così via.

**/media**: è dove la memoria esterna verrà montata automaticamente quando la colleghi e provi ad accedervi (pendrive, dischi USB, schede SD, ecc.)

**/mnt**: luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni. 

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

**/home**: contiene le directory personali degli utenti del sistema. Normalmente il nome della directory coincide con il nome dell'utente (utente *antonio*, home dir: */home/antonio*)

**/lib o /usr/lib**: contiene le librerie di sistema che permettono l'esecuzione degli applicativi, della shell ed in genere di tutti i programmi che girano sul PC. In breve contengono frammenti di codice utilizzati dalle applicazioni per disegnare finestre sul desktop, controllare le periferiche o inviare file al disco rigido.

Una sotto directory importantissima è *modules* contiene gli importantissimi moduli del kernel. I moduli del kernel sono driver che fanno funzionare cose come la scheda video, la scheda audio, il WiFi, la stampante e così via.

**/media**: è dove la memoria esterna verrà montata automaticamente quando la colleghi e provi ad accedervi (pendrive, dischi USB, schede SD, ecc.)

**/mnt**: luogo dove monterai manualmente i dispositivi di archiviazione o le partizioni.`,frontmatter:{},index:20,start:265,end:281,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Z3,meta:{slide:{raw:`
# Linux CLI 
 
File System

**/opt**:  contiene tradizionalmente il software opzionale, non di sistema, spesso quello installato dall'utente. Le applicazioni finiranno nella directory /opt/bin e le librerie nella directory /opt/lib.

Un'altra directory in cui finiscono applicazioni opzionali e librerie è /usr/local. Quando il software viene installato qui, ci saranno anche le directory /usr/local/bin e /usr/local/lib. Ciò che determina quale software va dove è il modo in cui gli sviluppatori hanno configurato i file che controllano il processo di compilazione e installazione.

**/proc**: come /dev, è una directory virtuale. Contiene informazioni sul tuo computer, come informazioni sulla CPU, sul kernel su cui è in esecuzione il tuo sistema Linux, sui processi che stanno girando, sulla rete, .... Come con /dev, i file e le directory vengono generati all'avvio del computer o al volo, mentre il sistema è in esecuzione e le cose cambiano.

**/root**: è la directory home del **superutente** <mark>root</mark> (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale. 
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

**/opt**:  contiene tradizionalmente il software opzionale, non di sistema, spesso quello installato dall'utente. Le applicazioni finiranno nella directory /opt/bin e le librerie nella directory /opt/lib.

Un'altra directory in cui finiscono applicazioni opzionali e librerie è /usr/local. Quando il software viene installato qui, ci saranno anche le directory /usr/local/bin e /usr/local/lib. Ciò che determina quale software va dove è il modo in cui gli sviluppatori hanno configurato i file che controllano il processo di compilazione e installazione.

**/proc**: come /dev, è una directory virtuale. Contiene informazioni sul tuo computer, come informazioni sulla CPU, sul kernel su cui è in esecuzione il tuo sistema Linux, sui processi che stanno girando, sulla rete, .... Come con /dev, i file e le directory vengono generati all'avvio del computer o al volo, mentre il sistema è in esecuzione e le cose cambiano.

**/root**: è la directory home del **superutente** <mark>root</mark> (noto anche come "Amministratore") del sistema. È separato dal resto delle directory home degli utenti in quanto non è un utente normale.`,frontmatter:{},index:21,start:282,end:295,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:aL,meta:{slide:{raw:`
# Linux CLI 
 
File System

**/run**: è una directory utilizzata dai processi di sistema per archiviare dati temporanei utili all'esecuzione. Questa è un'altra di quelle cartelle da <mark>NON TOCCARE</mark>.

**/sbin o /usr/bin**: è simile a /bin, ma contiene applicazioni di cui avrà bisogno solo il superutente (da qui la **s** iniziale). Pertanto le applicazioni qui contenute possono essere eseguite solo da root o dagli utenti a cui viene concesso un permesso temporaneo. Come puoi immaginare, alcune di queste istruzioni sono letali se le usi in modo improprio, quindi <mark>MANEGGIALE CON CURA</mark>.

**/srv**: la directory contiene dati per i server. Oggi tendenzialmente vuota.

**/sys**: è un'altra directory virtuale come /proc e /dev e contiene anche informazioni dai dispositivi collegati al tuo computer.

In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di <mark>NON TOCCARE</mark> finché non sei sicuro di sapere esattamente cosa stai facendo.
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

**/run**: è una directory utilizzata dai processi di sistema per archiviare dati temporanei utili all'esecuzione. Questa è un'altra di quelle cartelle da <mark>NON TOCCARE</mark>.

**/sbin o /usr/bin**: è simile a /bin, ma contiene applicazioni di cui avrà bisogno solo il superutente (da qui la **s** iniziale). Pertanto le applicazioni qui contenute possono essere eseguite solo da root o dagli utenti a cui viene concesso un permesso temporaneo. Come puoi immaginare, alcune di queste istruzioni sono letali se le usi in modo improprio, quindi <mark>MANEGGIALE CON CURA</mark>.

**/srv**: la directory contiene dati per i server. Oggi tendenzialmente vuota.

**/sys**: è un'altra directory virtuale come /proc e /dev e contiene anche informazioni dai dispositivi collegati al tuo computer.

In alcuni casi puoi anche manipolare questi dispositivi. Posso, ad esempio, cambiare la luminosità dello schermo del mio portatile modificando il valore memorizzato in /sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight.Anche per questa directory è consigliato di <mark>NON TOCCARE</mark> finché non sei sicuro di sapere esattamente cosa stai facendo.`,frontmatter:{},index:22,start:296,end:311,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:dL,meta:{slide:{raw:`
# Linux CLI 
 
File System

**/tmp**: contiene file temporanei, solitamente inseriti lì dalle applicazioni in esecuzione. I file e le directory spesso contengono dati di cui un'applicazione non ha bisogno in questo momento, ma che potrebbe aver bisogno in seguito.
Puoi anche usare /tmp per archiviare i tuoi file temporanei: /tmp è una delle poche directory appese / con cui puoi effettivamente interagire senza diventare superutente.

**/usr**: conteneva le directory utente quando /home non esisteva. Al giorno d'oggi, /usr contiene un miscuglio di directory che a loro volta contengono applicazioni, librerie, documentazione, sfondi, icone e un lungo elenco di altre cose che devono essere condivise da applicazioni e servizi.

**/var**: è stato originariamente dato questo nome perché il suo contenuto era considerato variabile, nel senso che cambiava frequentemente. Oggi è un termine un po' improprio perché ci sono molte altre directory che contengono dati che cambiano frequentemente, soprattutto le directory virtuali che abbiamo visto sopra.
Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

**/tmp**: contiene file temporanei, solitamente inseriti lì dalle applicazioni in esecuzione. I file e le directory spesso contengono dati di cui un'applicazione non ha bisogno in questo momento, ma che potrebbe aver bisogno in seguito.
Puoi anche usare /tmp per archiviare i tuoi file temporanei: /tmp è una delle poche directory appese / con cui puoi effettivamente interagire senza diventare superutente.

**/usr**: conteneva le directory utente quando /home non esisteva. Al giorno d'oggi, /usr contiene un miscuglio di directory che a loro volta contengono applicazioni, librerie, documentazione, sfondi, icone e un lungo elenco di altre cose che devono essere condivise da applicazioni e servizi.

**/var**: è stato originariamente dato questo nome perché il suo contenuto era considerato variabile, nel senso che cambiava frequentemente. Oggi è un termine un po' improprio perché ci sono molte altre directory che contengono dati che cambiano frequentemente, soprattutto le directory virtuali che abbiamo visto sopra.
Comunque sia, /var contiene cose come i log di sistema e delle applicazioni, lo spool della stampante, ed altri tipi di dati. Alcuni web server impostano la document root di default in /var/www`,frontmatter:{},index:23,start:312,end:325,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:bL,meta:{slide:{raw:`
# Linux CLI 
 
File System

<div style="width:50%">

Il percorse \`ASSOLUTO\` del file *README.md* è:

\`/home/antonio/SARP/README.md\`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_06.png" width="450" style="margin:auto;position:relative; left: 250px; top: -350px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

<div style="width:50%">

Il percorse \`ASSOLUTO\` del file *README.md* è:

\`/home/antonio/SARP/README.md\`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_06.png" width="450" style="margin:auto;position:relative; left: 250px; top: -350px;">`,frontmatter:{},index:24,start:326,end:346,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:IL,meta:{slide:{raw:`
# Linux CLI 
 
File System

In ogni directory ci sono due directory speciali \`.\` e \`..\`

\`\`\`bash
❯❯❯ ls -la                           
totale 1836
drwxrwxr-x 2 antonio antonio   4096 set  1 14:48 .  <------ directory corrente
drwxrwxr-x 3 antonio antonio   4096 ago 16 15:18 .. <------ directory precedente
-rw-rw-r-- 1 antonio antonio 119686 ago 29 10:29 c_01.jpg
-rw-rw-r-- 1 antonio antonio  73756 ago 29 10:29 c_02.jpg
-rw-rw-r-- 1 antonio antonio  25078 ago 29 10:29 c_03.jpg
-rw-rw-r-- 1 antonio antonio 699558 ago 16 16:11 cli_00.png
-rw-rw-r-- 1 antonio antonio 108107 ago 16 16:29 cli_01.png
-rw-rw-r-- 1 antonio antonio  79049 ago 29 10:42 cli_02.png
-rw-rw-r-- 1 antonio antonio 119269 ago 29 11:02 cli_03.png
-rw-rw-r-- 1 antonio antonio 177065 ago 29 11:22 cli_04.png
-rw-rw-r-- 1 antonio antonio  60778 ago 29 11:37 cli_05.png
-rw-rw-r-- 1 antonio antonio  54990 set  1 14:40 cli_06.png
-rw-rw-r-- 1 antonio antonio  55905 set  1 14:46 cli_07.png
-rw-rw-r-- 1 antonio antonio  41286 set  1 14:48 cli_08.png
-rw-rw-r-- 1 antonio antonio 222693 ago 29 10:24 cover.png
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

In ogni directory ci sono due directory speciali \`.\` e \`..\`

\`\`\`bash
❯❯❯ ls -la                           
totale 1836
drwxrwxr-x 2 antonio antonio   4096 set  1 14:48 .  <------ directory corrente
drwxrwxr-x 3 antonio antonio   4096 ago 16 15:18 .. <------ directory precedente
-rw-rw-r-- 1 antonio antonio 119686 ago 29 10:29 c_01.jpg
-rw-rw-r-- 1 antonio antonio  73756 ago 29 10:29 c_02.jpg
-rw-rw-r-- 1 antonio antonio  25078 ago 29 10:29 c_03.jpg
-rw-rw-r-- 1 antonio antonio 699558 ago 16 16:11 cli_00.png
-rw-rw-r-- 1 antonio antonio 108107 ago 16 16:29 cli_01.png
-rw-rw-r-- 1 antonio antonio  79049 ago 29 10:42 cli_02.png
-rw-rw-r-- 1 antonio antonio 119269 ago 29 11:02 cli_03.png
-rw-rw-r-- 1 antonio antonio 177065 ago 29 11:22 cli_04.png
-rw-rw-r-- 1 antonio antonio  60778 ago 29 11:37 cli_05.png
-rw-rw-r-- 1 antonio antonio  54990 set  1 14:40 cli_06.png
-rw-rw-r-- 1 antonio antonio  55905 set  1 14:46 cli_07.png
-rw-rw-r-- 1 antonio antonio  41286 set  1 14:48 cli_08.png
-rw-rw-r-- 1 antonio antonio 222693 ago 29 10:24 cover.png
\`\`\``,frontmatter:{},index:25,start:347,end:374,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:TL,meta:{slide:{raw:`
# Linux CLI 
 
File System

<div style="width:50%">

Il percorse \`RELATIVO\` alla home del file *README.md* è:

\`./SARP/README.md\` o \`SARP/README.md\`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_07.png" width="450" style="margin:auto;position:relative; left: 250px; top: -370px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File System

<div style="width:50%">

Il percorse \`RELATIVO\` alla home del file *README.md* è:

\`./SARP/README.md\` o \`SARP/README.md\`

- **/** (*root directory, radice dell'albero del filesystem*)
- **home**: sotto directory di /
- **antonio**: sotto directory di home
-  **SARP**: sotto directory di antonio
-  **README.md**: file di testo (*foglia dell'albero*)
</div>

<img src="/media/cli_07.png" width="450" style="margin:auto;position:relative; left: 250px; top: -370px;">`,frontmatter:{},index:26,start:375,end:395,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:jL,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

Ecco alcuni concetti chiave relativi alla CLI di Linux:

- **Utenti**: Linux utilizza un sistema di autorizzazioni basato su \`utenti\` e \`gruppi\` univoci per controllare l'accesso ai file e alle risorse del sistema (ricorda *everything is a file*). 
  - L'utente **root** ha privilegi amministrativi completi (*god*), mentre gli utenti normali hanno **accesso limitato**.
  - Ogni utente appartiene ad uno o più gruppi

<img src="/media/cli_08.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

Ecco alcuni concetti chiave relativi alla CLI di Linux:

- **Utenti**: Linux utilizza un sistema di autorizzazioni basato su \`utenti\` e \`gruppi\` univoci per controllare l'accesso ai file e alle risorse del sistema (ricorda *everything is a file*). 
  - L'utente **root** ha privilegi amministrativi completi (*god*), mentre gli utenti normali hanno **accesso limitato**.
  - Ogni utente appartiene ad uno o più gruppi

<img src="/media/cli_08.png" width="500" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:27,start:396,end:409,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:VL,meta:{slide:{raw:`
# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

- **Permessi**: Ogni gruppo ed ogni utente ha una serie di permessi su ogni risorsa (file). Con questo livello di granularità è possibile creare policy dei permessi molto dettagliate e garantire la sicurezza del sistema operativo (*es: non voglio che l'utente Jon possa leggere i miei file*)

<img src="/media/cli_09.png" width="950" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:28,start:410,end:418,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:QL,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_10.png" width="950" style="margin:auto;position:relative; left: 0px; top: 80px;">`,frontmatter:{},index:29,start:419,end:425,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:t6,meta:{slide:{raw:`
# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

<img src="/media/cli_11.png" width="950" style="margin:auto;position:relative; left: 0px; top: 50px;">`,frontmatter:{},index:30,start:426,end:431,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:c6,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Completamento del Tab**: Puoi premere il tasto Tab per completare automaticamente nomi di file, directory e comandi. Questa funzionalità aiuta a risparmiare tempo e riduce gli errori di battitura.

In shell moderne come *zsh* e *fish* il tab può anche completare i comandi e il manuale di sistema`,frontmatter:{},index:31,start:432,end:444,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:f6,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_12.gif" width="700" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:32,start:445,end:452,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:x6,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Redirezione**: Puoi redirigere l'output di un comando su file file utilizzando i simboli > o >> 

\`\`\`bash
$ echo "ciao io sono Linux"

ciao io sono Linux

$ echo "ciao io sono Linux" > file.txt
$ ls -la file.txt
-rw-rw-r-- 1 antonio antonio 19 set  3 17:57 file.txt

$ more file.txt
ciao io sono Linux

$ echo "ed io sono Babbo Natale" >> file.txt
$ more file.txt 
ciao io sono Linux
ed io sono Babbo Natale
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;
 
Ecco alcuni concetti chiave relativi alla CLI di Linux:

**Redirezione**: Puoi redirigere l'output di un comando su file file utilizzando i simboli > o >> 

\`\`\`bash
$ echo "ciao io sono Linux"

ciao io sono Linux

$ echo "ciao io sono Linux" > file.txt
$ ls -la file.txt
-rw-rw-r-- 1 antonio antonio 19 set  3 17:57 file.txt

$ more file.txt
ciao io sono Linux

$ echo "ed io sono Babbo Natale" >> file.txt
$ more file.txt 
ciao io sono Linux
ed io sono Babbo Natale
\`\`\``,frontmatter:{},index:33,start:453,end:480,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:L6,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_12.png" width="900" style="margin:auto;position:relative; left: 0px; top: 100px;">`,frontmatter:{},index:34,start:481,end:487,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:R6,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
La Fisolofia Unix
</Cover>


`,content:`&nbsp;

<Cover fs=100px>
La Fisolofia Unix
</Cover>`,frontmatter:{},index:35,start:488,end:497,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:j6,meta:{slide:{raw:`
# Linux CLI 

Filosofia Linux

[La filosofia di Unix](http://www.catb.org/esr/writings/taoup/html/ch01s06.html) (in inglese: Unix philosophy) è una metodologia di sviluppo del software proposta nel 1969 da Ken Thompson e adottata dagli sviluppatori del sistema operativo Unix e Linux

<br>

<Banner padding=30px>
Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. (Doug McIlroy)
</Banner>

<img src="/media/cli_13.png" width="250" style="margin:auto;position:relative; left: 0px; top: 10px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 

Filosofia Linux

[La filosofia di Unix](http://www.catb.org/esr/writings/taoup/html/ch01s06.html) (in inglese: Unix philosophy) è una metodologia di sviluppo del software proposta nel 1969 da Ken Thompson e adottata dagli sviluppatori del sistema operativo Unix e Linux

<br>

<Banner padding=30px>
Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. (Doug McIlroy)
</Banner>

<img src="/media/cli_13.png" width="250" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:36,start:498,end:513,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:W6,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Le Pipe
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Le Pipe
</Cover>`,frontmatter:{},index:37,start:514,end:522,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Y6,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 
 **Pipe**: (Doug McIlroy) La pipe \`|\` permette di concatenare più comandi shell insieme per creare un nuovo comando che risolve un problema specifico.
 Il concetto è che l'output di un programma viene utilizzato come input di un altro comando.
 Questo concetto è un meccanismo **POTENTISSIMO** che rende la CLI di Unix/Linux infinitamente potente e flessibile

\`\`\`bash
$ cat file.txt
2
4
6
7
3
1
2
1
4
6
5
2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;
 
 **Pipe**: (Doug McIlroy) La pipe \`|\` permette di concatenare più comandi shell insieme per creare un nuovo comando che risolve un problema specifico.
 Il concetto è che l'output di un programma viene utilizzato come input di un altro comando.
 Questo concetto è un meccanismo **POTENTISSIMO** che rende la CLI di Unix/Linux infinitamente potente e flessibile

\`\`\`bash
$ cat file.txt
2
4
6
7
3
1
2
1
4
6
5
2
\`\`\``,frontmatter:{},index:38,start:523,end:548,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:s5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

**Domanda**: Qual'è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescete partendo da file.txt?
**Risposta**: NON ESISTE

Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente

<img src="/media/cli_14.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

**Domanda**: Qual'è il comando che mi permette di ottenere una lista di numeri univoci ordinati in senso crescete partendo da file.txt?
**Risposta**: NON ESISTE

Ma niente paura, possiamo creare noi stessi questo comando a partire da comandi esistenti e quindi risolvere il problema. Una volta appreso questo concetto, si dimostrerà un meccanismo incredibilmente potente

<img src="/media/cli_14.png" width="850" style="margin:auto;position:relative; left: 0px; top: 10px;">`,frontmatter:{},index:39,start:549,end:562,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:u5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

- Proviamo ad implementare la pipeline descritta prima con comandi linux
- La prima cosa dobbiamo leggere il file, quindi usiamo il comando \`cat\` che prende in input il nome del file e genera in output la lettura del file
- Questo output (lista di numeri non ordinati e duplicati) viene preso in input dal comando \`sort\` che in output produce l'input ma ordinato
- A questo punto avremo una lista di numeri ordinati ma ancora duplicati, quindi forniamo questa lista in input al comando \`uniq\` che in output rimuove tutti i numeri duplicati
- In questo modo all'output della pipeline avremo una lista di numeri ordinati ed univoci, che è esattamente la soluzione al problema posto


<img src="/media/cli_15.png" width="500" style="margin:auto;position:relative; left: 100px; top: -40px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

- Proviamo ad implementare la pipeline descritta prima con comandi linux
- La prima cosa dobbiamo leggere il file, quindi usiamo il comando \`cat\` che prende in input il nome del file e genera in output la lettura del file
- Questo output (lista di numeri non ordinati e duplicati) viene preso in input dal comando \`sort\` che in output produce l'input ma ordinato
- A questo punto avremo una lista di numeri ordinati ma ancora duplicati, quindi forniamo questa lista in input al comando \`uniq\` che in output rimuove tutti i numeri duplicati
- In questo modo all'output della pipeline avremo una lista di numeri ordinati ed univoci, che è esattamente la soluzione al problema posto


<img src="/media/cli_15.png" width="500" style="margin:auto;position:relative; left: 100px; top: -40px;">`,frontmatter:{},index:40,start:563,end:578,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:h5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

\`\`\`bash
$ cat file.txt  # prende in input il file e in output lo stampa
2
4
6
7
3
1
2
1
4
6
5
2
\`\`\`

`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

\`\`\`bash
$ cat file.txt  # prende in input il file e in output lo stampa
2
4
6
7
3
1
2
1
4
6
5
2
\`\`\``,frontmatter:{},index:41,start:579,end:601,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:k5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

\`\`\`bash
# l'output di cat viene usato come input da sort che in output stampa il file ordinato

$ cat file.txt | sort 
1
1
2
2
2
3
4
4
5
6
6
7
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

\`\`\`bash
# l'output di cat viene usato come input da sort che in output stampa il file ordinato

$ cat file.txt | sort 
1
1
2
2
2
3
4
4
5
6
6
7
\`\`\``,frontmatter:{},index:42,start:602,end:625,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:I5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

\`\`\`bash
# l'output ordinato di sort viene preso in input da uniq che in output elimina le occorrenze multiple

$ cat file.txt | sort | uniq
1
2
3
4
5
6
7
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

\`\`\`bash
# l'output ordinato di sort viene preso in input da uniq che in output elimina le occorrenze multiple

$ cat file.txt | sort | uniq
1
2
3
4
5
6
7
\`\`\``,frontmatter:{},index:43,start:626,end:644,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:E5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;

\`\`\`bash
# l'output della pipeline viene rediretto e quindi scritto sul file file_ord.txt

$ cat file.txt | sort | uniq > file_ord.txt

$ cat file_ord.txt 
1
2
3
4
5
6
7

# quindi in ingresso alla pipeline abbiamo il file di numeri  non ordinati e duplicati
# in uscita abbiamo la lista di numeri ordinati e de-duplicati
# abbiamo così creato un nuovo comando che risolve esattamente il nostro problema
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;

\`\`\`bash
# l'output della pipeline viene rediretto e quindi scritto sul file file_ord.txt

$ cat file.txt | sort | uniq > file_ord.txt

$ cat file_ord.txt 
1
2
3
4
5
6
7

# quindi in ingresso alla pipeline abbiamo il file di numeri  non ordinati e duplicati
# in uscita abbiamo la lista di numeri ordinati e de-duplicati
# abbiamo così creato un nuovo comando che risolve esattamente il nostro problema
\`\`\``,frontmatter:{},index:44,start:645,end:669,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:P5,meta:{slide:{raw:`
# Linux CLI 

&nbsp;
 

- La CLI di Linux offre una vasta gamma di comandi per eseguire varie attività, tra cui:
  -  la navigazione del sistema di file
  -  la gestione dei processi
  -  la configurazione di rete
  -  la gestione degli utenti 
  -  .......e molto altro. 

Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando
`,title:"Linux CLI",level:1,content:`# Linux CLI 

&nbsp;
 

- La CLI di Linux offre una vasta gamma di comandi per eseguire varie attività, tra cui:
  -  la navigazione del sistema di file
  -  la gestione dei processi
  -  la configurazione di rete
  -  la gestione degli utenti 
  -  .......e molto altro. 

Vediamo ora i principali comandi base per poter iniziare ad usare Linux in modo efficiente ed agevole dalla linea di comando`,frontmatter:{},index:45,start:670,end:685,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:q5,meta:{slide:{raw:`
# Linux CLI 
 
Sintassi Generale

- I comandi possono essere eseguiti da soli o possono accettare argomenti per alterarne il comportamento.

Una sintassi tipica può essere simile a questa:

\`\`\`bash
comando [-argomento] [--argomento-lungo] file

$ ls -l -a - h
\`\`\`

<br>

- **ls** è il nome del comando (list)
- -l è un parametro che modifica l'output di ls in modo da visualizzare una lista di file uno per ogni riga
- -a è un parametro che indica ad ls di far vedere tutti i file anche quelli nascosti (come . e ..)
- -h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall'uomo)
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Sintassi Generale

- I comandi possono essere eseguiti da soli o possono accettare argomenti per alterarne il comportamento.

Una sintassi tipica può essere simile a questa:

\`\`\`bash
comando [-argomento] [--argomento-lungo] file

$ ls -l -a - h
\`\`\`

<br>

- **ls** è il nome del comando (list)
- -l è un parametro che modifica l'output di ls in modo da visualizzare una lista di file uno per ogni riga
- -a è un parametro che indica ad ls di far vedere tutti i file anche quelli nascosti (come . e ..)
- -h è un parametro che dice a ls di visualizzare un output facilmente leggibile da un umano(stampa la dimensione del file in un formato leggibile dall'uomo)`,frontmatter:{},index:46,start:686,end:708,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:G5,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Indice dei Comandi
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Indice dei Comandi
</Cover>`,frontmatter:{},index:47,start:709,end:717,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:X5,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_17.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">`,frontmatter:{},index:48,start:718,end:724,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:oC,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">
`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_18.png" width="900" style="margin:auto;position:relative; left: 0px; top: -20px;">`,frontmatter:{},index:49,start:725,end:731,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:cC,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_19.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:50,start:732,end:739,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:fC,meta:{slide:{raw:`
# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">

`,title:"Linux CLI",level:1,content:`# Linux CLI 


<img src="/media/cli_20.png" width="900" style="margin:auto;position:relative; left: 0px; top: 0px;">`,frontmatter:{},index:51,start:740,end:747,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:gC,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Comandi di uso generale
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Comandi di uso generale
</Cover>`,frontmatter:{},index:52,start:748,end:756,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:yC,meta:{slide:{raw:`
# Linux CLI 
 
man - un'interfaccia ai manuali di riferimento in linea

- Il comando più importante di tutti è \`man\` che permette di accedere al manuale di sistema e di TUTTI i comandi 
- E' buona regola consultare SEMPRE il manuale per capire come funziona un comando, quali sono i suoi parametri e conoscere le particolarità del singolo comando

\`\`\`bash
$ man <nome comando>
$ man ls
LS(1)                                   User Commands                                   LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about  the FILEs (the current directory by default).  Sort entries 
       nor --sort is specified.
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
man - un'interfaccia ai manuali di riferimento in linea

- Il comando più importante di tutti è \`man\` che permette di accedere al manuale di sistema e di TUTTI i comandi 
- E' buona regola consultare SEMPRE il manuale per capire come funziona un comando, quali sono i suoi parametri e conoscere le particolarità del singolo comando

\`\`\`bash
$ man <nome comando>
$ man ls
LS(1)                                   User Commands                                   LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about  the FILEs (the current directory by default).  Sort entries 
       nor --sort is specified.
\`\`\``,frontmatter:{},index:53,start:757,end:781,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:AC,meta:{slide:{raw:`
# Linux CLI 
 
man - un'interfaccia ai manuali di riferimento in linea

- Ecco alcuni parametri utili

\`\`\`bash
-K: cerca e visualizza i manuali compatibili con la parola chiave
-k: visualizza possibili comandi compatibili con la parola chiave  
\`\`\`

<br>

\`\`\`bash
$ man -K  "concatenate files"

$ man -k  "concatenate files"
cat (1)              - concatenate files and print on the standard output
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
man - un'interfaccia ai manuali di riferimento in linea

- Ecco alcuni parametri utili

\`\`\`bash
-K: cerca e visualizza i manuali compatibili con la parola chiave
-k: visualizza possibili comandi compatibili con la parola chiave  
\`\`\`

<br>

\`\`\`bash
$ man -K  "concatenate files"

$ man -k  "concatenate files"
cat (1)              - concatenate files and print on the standard output
\`\`\``,frontmatter:{},index:54,start:782,end:803,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:DC,meta:{slide:{raw:`
# Linux CLI 
 
info - read Info documents

- Un'altro comando utilissimo per reperire informazione è \`info\`. 
- Si usa esattamente come man

\`\`\`bash
$ info <nome comando>
$ info ls
10.1 ‘ls’: List directory contents
==================================

The ‘ls’ program lists information about files (of any type, including
directories).  Options and file arguments can be intermixed arbitrarily,
as usual.

   For non-option command-line arguments that are directories, by
default ‘ls’ lists the contents of directories, not recursively, and
omitting files with names beginning with ‘.’.  For other non-option
arguments, by default ‘ls’ lists just the file name.  If no non-option
argument is specified, ‘ls’ operates on the current directory, acting as
if it had been invoked with a single argument of ‘.’.

\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
info - read Info documents

- Un'altro comando utilissimo per reperire informazione è \`info\`. 
- Si usa esattamente come man

\`\`\`bash
$ info <nome comando>
$ info ls
10.1 ‘ls’: List directory contents
==================================

The ‘ls’ program lists information about files (of any type, including
directories).  Options and file arguments can be intermixed arbitrarily,
as usual.

   For non-option command-line arguments that are directories, by
default ‘ls’ lists the contents of directories, not recursively, and
omitting files with names beginning with ‘.’.  For other non-option
arguments, by default ‘ls’ lists just the file name.  If no non-option
argument is specified, ‘ls’ operates on the current directory, acting as
if it had been invoked with a single argument of ‘.’.

\`\`\``,frontmatter:{},index:55,start:804,end:831,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:VC,meta:{slide:{raw:`
# Linux CLI 
 
apropos - ricerca nei nomi e nelle descrizioni delle pagine di manuale

- Effettua una ricerca all'interno dei manuali. Molto utile quando non sappiamo esattamente il nome di un comando ma ne conosciamo il suo contesto.

\`\`\`bash
$ apropos <parole chiave>

$ apropos "concatenate files"
cat (1)              - concatenate files and print on the standard output

$ apropos "remove files"
git-rm (1)           - Remove files from the working tree and from the index
rm (1)               - remove files or directories
\`\`\`

Se apropos non trova nessun suggerimento potrebbe essere utile eseguire il seguente comando

\`\`\`bash
$ sudo mandb -c
\`\`\`

In questo modo si ricrea il DB per apropos
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
apropos - ricerca nei nomi e nelle descrizioni delle pagine di manuale

- Effettua una ricerca all'interno dei manuali. Molto utile quando non sappiamo esattamente il nome di un comando ma ne conosciamo il suo contesto.

\`\`\`bash
$ apropos <parole chiave>

$ apropos "concatenate files"
cat (1)              - concatenate files and print on the standard output

$ apropos "remove files"
git-rm (1)           - Remove files from the working tree and from the index
rm (1)               - remove files or directories
\`\`\`

Se apropos non trova nessun suggerimento potrebbe essere utile eseguire il seguente comando

\`\`\`bash
$ sudo mandb -c
\`\`\`

In questo modo si ricrea il DB per apropos`,frontmatter:{},index:56,start:832,end:858,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:n9,meta:{slide:{raw:`
# Linux CLI 
 
clear - clear the terminal screen

- Alle volte è utile svuotare e cancellare la finestra di terminale
- Ciò si può ottenere con il comando clear

<br>

 \`\`\`bash
 $ clear
 \`\`\`
<br>

Si può anche utilizzare uno shortcuts da tastiera che è \`CTRL + L\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
clear - clear the terminal screen

- Alle volte è utile svuotare e cancellare la finestra di terminale
- Ciò si può ottenere con il comando clear

<br>

 \`\`\`bash
 $ clear
 \`\`\`
<br>

Si può anche utilizzare uno shortcuts da tastiera che è \`CTRL + L\``,frontmatter:{},index:57,start:859,end:876,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:r9,meta:{slide:{raw:`
# Linux CLI 
 
reset - terminal initialization

- In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset

<br>

\`\`\`bash
$ reset
\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 
 
reset - terminal initialization

- In alcuni scenari clear può non essere efficace, quindi per resettare un terminale al suo stato iniziale possiamo usare il comando reset

<br>

\`\`\`bash
$ reset
\`\`\``,frontmatter:{},index:58,start:877,end:889,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:p9,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Filesystem
</Cover>

`,content:`&nbsp;

<Cover fs=100px>
Filesystem
</Cover>`,frontmatter:{},index:59,start:890,end:898,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:g9,meta:{slide:{raw:`
# Linux CLI 
 
pwd - output the current working directory

- Per conosce l'attuale posizione nel filesystem, in altre parole per sapere in quale directory ci troviamo basta eseguire il comando **pwd**

\`\`\`bash
$ pwd
/home/antonio/tmp/SARP

$ pwd
/media/antonio/NAS
\`\`\`

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
pwd - output the current working directory

- Per conosce l'attuale posizione nel filesystem, in altre parole per sapere in quale directory ci troviamo basta eseguire il comando **pwd**

\`\`\`bash
$ pwd
/home/antonio/tmp/SARP

$ pwd
/media/antonio/NAS
\`\`\``,frontmatter:{},index:60,start:899,end:915,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:$9,meta:{slide:{raw:`
# Linux CLI 
 
cd - change directory

- Permette di cambiare directory e quindi di spostarsi da una directory all'altra

<br>
\`\`\`bash
$ cd <percorso assoluto o relativo della directory destinazione>

$ pwd
/home/antonio/tmp/SARP/src/routes

$ cd tools/  # questo è un percorso relativo
$ pwd
/home/antonio/tmp/SARP/src/routes/tools

$ cd .. # torna indietro di una directory (o torna alla directory padre)
$ pwd                                                                    
/home/antonio/tmp/SARP/src/routes

$ cd ../.. # torna indietro di due livelli
$ pwd                                      
/home/antonio/tmp/SARP
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cd - change directory

- Permette di cambiare directory e quindi di spostarsi da una directory all'altra

<br>
\`\`\`bash
$ cd <percorso assoluto o relativo della directory destinazione>

$ pwd
/home/antonio/tmp/SARP/src/routes

$ cd tools/  # questo è un percorso relativo
$ pwd
/home/antonio/tmp/SARP/src/routes/tools

$ cd .. # torna indietro di una directory (o torna alla directory padre)
$ pwd                                                                    
/home/antonio/tmp/SARP/src/routes

$ cd ../.. # torna indietro di due livelli
$ pwd                                      
/home/antonio/tmp/SARP
\`\`\``,frontmatter:{},index:61,start:916,end:943,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:E9,meta:{slide:{raw:`
# Linux CLI 
 
cd - change directory

<br>
\`\`\`bash
$ cd # torna alla HOME directory
$ pwd
/home/antonio

$ cd /usr/bin # questo è un percorso assoluto
$ pwd
/usr/bin

$ cd ~ # torna alla HOME directory
$ pwd
/home/antonio

$ cd - # torna alla directory in cui eravamo prima
$ pwd
/usr/bin
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cd - change directory

<br>
\`\`\`bash
$ cd # torna alla HOME directory
$ pwd
/home/antonio

$ cd /usr/bin # questo è un percorso assoluto
$ pwd
/usr/bin

$ cd ~ # torna alla HOME directory
$ pwd
/home/antonio

$ cd - # torna alla directory in cui eravamo prima
$ pwd
/usr/bin
\`\`\``,frontmatter:{},index:62,start:944,end:968,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:P9,meta:{slide:{raw:`
# Linux CLI 
 
ls - list directory contents

- Il comando ls (list) permette di vedere (listare) il contenuto della directory corrente o di una directory specifica

\`\`\`bash
$ ls <file> o <directory>

$ ls #list della directory corrente
151.101.242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel
 192.168.001.077.37480-151.101  Desktop               keyrings           regole01.jpg
'2023-07-28 18-52-21.mkv'       desktop-directories   linked_list,h      report.html
'2023-07-28 18-55-11.mkv'       Documents             linked_list.h      report.xml
 Android                        Downloads             LocalSend-1.deb    scripts
'Android Open Source Project'   espedito.keys.asc     mime               static.key
 android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf
 AndroidStudioProjects          evolution             msgFilterRules.dat Templates
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
ls - list directory contents

- Il comando ls (list) permette di vedere (listare) il contenuto della directory corrente o di una directory specifica

\`\`\`bash
$ ls <file> o <directory>

$ ls #list della directory corrente
151.101.242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel
 192.168.001.077.37480-151.101  Desktop               keyrings           regole01.jpg
'2023-07-28 18-52-21.mkv'       desktop-directories   linked_list,h      report.html
'2023-07-28 18-55-11.mkv'       Documents             linked_list.h      report.xml
 Android                        Downloads             LocalSend-1.deb    scripts
'Android Open Source Project'   espedito.keys.asc     mime               static.key
 android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf
 AndroidStudioProjects          evolution             msgFilterRules.dat Templates
\`\`\``,frontmatter:{},index:63,start:969,end:990,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:K9,meta:{slide:{raw:`
# Linux CLI 
 
ls - list directory contents

\`\`\`bash
$ ls /usr/bin/ # lista il contenuto della directory /usr/bin
'['                                                gtscompare                         ppmtolj
 411toppm                                          gts-config                         ppmtomap
 aa-enabled                                        gtstemplate                        ppmtomitsu
 aa-exec                                           gucharmap                          ppmtompeg
 aa-features-abi                                   guestfish                          ppmtoneo
 ab                                                guestmount                         ppmtopcx
 aclocal                                           guestunmount                       ppmtopgm
 aclocal-1.16                                      gunzip                             ppmtopi1

$ ls ~ # list della home directory
151.101.242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel
 192.168.001.077.37480-151.101  Desktop               keyrings           regole01.jpg
'2023-07-28 18-52-21.mkv'       desktop-directories   linked_list,h      report.html
'2023-07-28 18-55-11.mkv'       Documents             linked_list.h      report.xml
 Android                        Downloads             LocalSend-1.deb    scripts
'Android Open Source Project'   espedito.keys.asc     mime               static.key
 android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf
 AndroidStudioProjects          evolution             msgFilterRules.dat Templates
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
ls - list directory contents

\`\`\`bash
$ ls /usr/bin/ # lista il contenuto della directory /usr/bin
'['                                                gtscompare                         ppmtolj
 411toppm                                          gts-config                         ppmtomap
 aa-enabled                                        gtstemplate                        ppmtomitsu
 aa-exec                                           gucharmap                          ppmtompeg
 aa-features-abi                                   guestfish                          ppmtoneo
 ab                                                guestmount                         ppmtopcx
 aclocal                                           guestunmount                       ppmtopgm
 aclocal-1.16                                      gunzip                             ppmtopi1

$ ls ~ # list della home directory
151.101.242.137.00443-192.168   CMakeTools            index.html.5       recently-used.xbel
 192.168.001.077.37480-151.101  Desktop               keyrings           regole01.jpg
'2023-07-28 18-52-21.mkv'       desktop-directories   linked_list,h      report.html
'2023-07-28 18-55-11.mkv'       Documents             linked_list.h      report.xml
 Android                        Downloads             LocalSend-1.deb    scripts
'Android Open Source Project'   espedito.keys.asc     mime               static.key
 android-studio                 espedito.pub.asc      mimeapps.list      TBR.pdf
 AndroidStudioProjects          evolution             msgFilterRules.dat Templates
\`\`\``,frontmatter:{},index:64,start:991,end:1018,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:G9,meta:{slide:{raw:`
# Linux CLI 
 
ls - list directory contents

- ls possiede 55 parametri e quindi è un comando molto complesso
- tuttavia nella maggioranza dei casi ci servono solo 2 o 3 parametri
- in queste situazioni l'uso del manuale è fondamentale

Ecco alcuni parametri utili

\`\`\`bash
-1: lista il contenuto dei file su una singola colonna
-l: long list format
-a: visualizza tutti i file anche quelli nascosti come . e ..
-F: appende un indicatore per ogni entry indicandone il tipo
-h: visualizza le dimensioni dei file in un formato utile per gli umani
-S: ordina per dimensione del file in ordine decrescente
-r: inverte l'ordine di visualizzazione
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
ls - list directory contents

- ls possiede 55 parametri e quindi è un comando molto complesso
- tuttavia nella maggioranza dei casi ci servono solo 2 o 3 parametri
- in queste situazioni l'uso del manuale è fondamentale

Ecco alcuni parametri utili

\`\`\`bash
-1: lista il contenuto dei file su una singola colonna
-l: long list format
-a: visualizza tutti i file anche quelli nascosti come . e ..
-F: appende un indicatore per ogni entry indicandone il tipo
-h: visualizza le dimensioni dei file in un formato utile per gli umani
-S: ordina per dimensione del file in ordine decrescente
-r: inverte l'ordine di visualizzazione
\`\`\``,frontmatter:{},index:65,start:1019,end:1040,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:X9,meta:{slide:{raw:`
# Linux CLI 
 
ls - list directory contents

\`\`\`bash
$ ls -lah
totale 62M
drwxr-xr-x  95 antonio antonio  12K set  4 14:59  .
drwxr-xr-x   5 root    root    4,0K ago  1  2022  ..
-rw-r--r--   1 root    root      24 nov 13  2022  151.101.242.137.00443-192.168.001.077.37480
-rw-r--r--   1 root    root      24 nov 13  2022  192.168.001.077.37480-151.101.242.137.00443
-rw-rw-r--   1 antonio antonio 2,0M lug 28 18:52 '2023-07-28 18-52-21.mkv'
-rw-rw-r--   1 antonio antonio 7,3M lug 28 18:55 '2023-07-28 18-55-11.mkv'
drwxrwxr-x   6 antonio antonio 4,0K giu  4  2022  .android
drwxrwxr-x   3 antonio antonio 4,0K mar  4  2022  Android
drwx------   3 antonio antonio 4,0K mar  4  2022 'Android Open Source Project'
drwxrwxr-x   7 antonio antonio 4,0K mar  4  2022  android-studio
drwxrwxr-x   3 antonio antonio 4,0K mar 14  2022  AndroidStudioProjects
drwxr-xr-x  48 antonio antonio 4,0K set  7  2022  antonio
-rw-rw-r--   1 antonio antonio 5,1K set  4  2022  antonio.pub.asc
-rw-rw-r--   1 antonio antonio 2,4K set  4  2022  antonioy.pub.asc
drwxr-xr-x   2 antonio staff   4,0K ago 30  2022  app
-rwxr-xr-x   1 antonio antonio  649 ago 12  2022  appimagekit-openshot-qt.desktop
-rwxr-xr-x   1 antonio antonio  351 ago 12  2022  appimagekit-shotcut.desktop
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
ls - list directory contents

\`\`\`bash
$ ls -lah
totale 62M
drwxr-xr-x  95 antonio antonio  12K set  4 14:59  .
drwxr-xr-x   5 root    root    4,0K ago  1  2022  ..
-rw-r--r--   1 root    root      24 nov 13  2022  151.101.242.137.00443-192.168.001.077.37480
-rw-r--r--   1 root    root      24 nov 13  2022  192.168.001.077.37480-151.101.242.137.00443
-rw-rw-r--   1 antonio antonio 2,0M lug 28 18:52 '2023-07-28 18-52-21.mkv'
-rw-rw-r--   1 antonio antonio 7,3M lug 28 18:55 '2023-07-28 18-55-11.mkv'
drwxrwxr-x   6 antonio antonio 4,0K giu  4  2022  .android
drwxrwxr-x   3 antonio antonio 4,0K mar  4  2022  Android
drwx------   3 antonio antonio 4,0K mar  4  2022 'Android Open Source Project'
drwxrwxr-x   7 antonio antonio 4,0K mar  4  2022  android-studio
drwxrwxr-x   3 antonio antonio 4,0K mar 14  2022  AndroidStudioProjects
drwxr-xr-x  48 antonio antonio 4,0K set  7  2022  antonio
-rw-rw-r--   1 antonio antonio 5,1K set  4  2022  antonio.pub.asc
-rw-rw-r--   1 antonio antonio 2,4K set  4  2022  antonioy.pub.asc
drwxr-xr-x   2 antonio staff   4,0K ago 30  2022  app
-rwxr-xr-x   1 antonio antonio  649 ago 12  2022  appimagekit-openshot-qt.desktop
-rwxr-xr-x   1 antonio antonio  351 ago 12  2022  appimagekit-shotcut.desktop
\`\`\``,frontmatter:{},index:66,start:1041,end:1068,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:oS,meta:{slide:{raw:`
# Linux CLI 
 
ls - list directory contents

\`\`\`bash
$ ls -lahFS
totale 62M
-rw-rw-r--   1 antonio antonio  34M giu 10  2022  aws.tgz
-rw-rw-r--   1 antonio antonio 8,5M giu  2 14:15  LocalSend-1.10.0-linux-x86-64.deb
-rw-rw-r--   1 antonio antonio 7,3M lug 28 18:55 '2023-07-28 18-55-11.mkv'
-rw-rw-r--   1 antonio antonio 3,6M lug 11  2022  TBR.pdf
-rw-rw-r--   1 antonio antonio 3,4M nov 19  2022  _HR.pdf
-rw-rw-r--   1 antonio antonio 2,0M lug 28 18:52 '2023-07-28 18-52-21.mkv'
-rw-------   1 antonio antonio 488K set  4 10:33  .zsh_history
-rw-------   1 antonio antonio 336K set  4 10:33  .bash_history
drwxrwxr-x 223 antonio antonio 236K set  4 08:46  tmp/ ----------> directory
-rw-rw-r--   1 antonio antonio 215K lug 17 11:12  index.html.3
-rw-rw-r--   1 antonio antonio 215K lug 17 11:13  index.html.4
-rw-rw-r--   1 antonio antonio 194K lug 29 17:52  index.html.5
-rw-rw-r--   1 antonio antonio 185K set 13  2022  regole01.jpg
-rw-rw-r--   1 antonio antonio 136K lug 13 15:56  package-lock.json
-rw-r--r--   1 antonio antonio  88K set  5  2022  report.html
-rw-rw-r--   1 antonio antonio  51K ago 22 02:54  .zcompdump-asus-5.8.1
-rw-rw-r--   1 antonio antonio  50K ago 29 10:15  .zcompdump
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
ls - list directory contents

\`\`\`bash
$ ls -lahFS
totale 62M
-rw-rw-r--   1 antonio antonio  34M giu 10  2022  aws.tgz
-rw-rw-r--   1 antonio antonio 8,5M giu  2 14:15  LocalSend-1.10.0-linux-x86-64.deb
-rw-rw-r--   1 antonio antonio 7,3M lug 28 18:55 '2023-07-28 18-55-11.mkv'
-rw-rw-r--   1 antonio antonio 3,6M lug 11  2022  TBR.pdf
-rw-rw-r--   1 antonio antonio 3,4M nov 19  2022  _HR.pdf
-rw-rw-r--   1 antonio antonio 2,0M lug 28 18:52 '2023-07-28 18-52-21.mkv'
-rw-------   1 antonio antonio 488K set  4 10:33  .zsh_history
-rw-------   1 antonio antonio 336K set  4 10:33  .bash_history
drwxrwxr-x 223 antonio antonio 236K set  4 08:46  tmp/ ----------> directory
-rw-rw-r--   1 antonio antonio 215K lug 17 11:12  index.html.3
-rw-rw-r--   1 antonio antonio 215K lug 17 11:13  index.html.4
-rw-rw-r--   1 antonio antonio 194K lug 29 17:52  index.html.5
-rw-rw-r--   1 antonio antonio 185K set 13  2022  regole01.jpg
-rw-rw-r--   1 antonio antonio 136K lug 13 15:56  package-lock.json
-rw-r--r--   1 antonio antonio  88K set  5  2022  report.html
-rw-rw-r--   1 antonio antonio  51K ago 22 02:54  .zcompdump-asus-5.8.1
-rw-rw-r--   1 antonio antonio  50K ago 29 10:15  .zcompdump
\`\`\``,frontmatter:{},index:67,start:1069,end:1096,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:pS,meta:{slide:{raw:`
# Linux CLI 
 
alias

- Alle volte ricordarsi comandi lunghi come \`ls -lahFSr\` può essere poco conveniente
- Allora la shell ci viene in aiuto con il concetto di \`alias\`
- Gli \`alias\` non è un comando, ma una funzionalità della shell
- Gli \`alias\` consentono di sostituire una stringa con una parola quando viene utilizzata come prima parola di un comando semplice

Quindi ogni utente può creare tutti gli alias che desidera per rendersi la vita più semplice.

\`\`\`bash
$ alias <nome alias>=<comando>

$ alias lo='ls -lahFSr'
$ alias l1='ls -1'
alias | grep -E '^l1|^lo'
l1='ls -1'
lo='ls -lahFSr'
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
alias

- Alle volte ricordarsi comandi lunghi come \`ls -lahFSr\` può essere poco conveniente
- Allora la shell ci viene in aiuto con il concetto di \`alias\`
- Gli \`alias\` non è un comando, ma una funzionalità della shell
- Gli \`alias\` consentono di sostituire una stringa con una parola quando viene utilizzata come prima parola di un comando semplice

Quindi ogni utente può creare tutti gli alias che desidera per rendersi la vita più semplice.

\`\`\`bash
$ alias <nome alias>=<comando>

$ alias lo='ls -lahFSr'
$ alias l1='ls -1'
alias | grep -E '^l1|^lo'
l1='ls -1'
lo='ls -lahFSr'
\`\`\``,frontmatter:{},index:68,start:1097,end:1119,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:gS,meta:{slide:{raw:`
# Linux CLI 
 
alias

- Quindi ora abbiamo due nuovi comandi (o alias) chiamati lo e l1 che possiamo usare esattamente come ogni altro comando linux

\`\`\`bash
$  lo ----> equivale a ls -lahFSr
totale 62M
-rw-rw-r--   1 antonio antonio    0 set  2  2022  .zshenv
-rw-rw-r--   1 antonio antonio    0 gen  7  2022  .todo.bak
-rw-r--r--   1 antonio antonio    0 dic 27  2021  .sudo_as_admin_successful
-rw-rw-r--   1 antonio antonio    0 gen  2  2022  mimeapps.list

$ l1 ----> equivale a ls -1
'2023-07-28 18-52-21.mkv'
'2023-07-28 18-55-11.mkv'
Android
'Android Open Source Project'
android-studio
AndroidStudioProjects
antonio
\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 
 
alias

- Quindi ora abbiamo due nuovi comandi (o alias) chiamati lo e l1 che possiamo usare esattamente come ogni altro comando linux

\`\`\`bash
$  lo ----> equivale a ls -lahFSr
totale 62M
-rw-rw-r--   1 antonio antonio    0 set  2  2022  .zshenv
-rw-rw-r--   1 antonio antonio    0 gen  7  2022  .todo.bak
-rw-r--r--   1 antonio antonio    0 dic 27  2021  .sudo_as_admin_successful
-rw-rw-r--   1 antonio antonio    0 gen  2  2022  mimeapps.list

$ l1 ----> equivale a ls -1
'2023-07-28 18-52-21.mkv'
'2023-07-28 18-55-11.mkv'
Android
'Android Open Source Project'
android-studio
AndroidStudioProjects
antonio
\`\`\``,frontmatter:{},index:69,start:1120,end:1144,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:wS,meta:{slide:{raw:`
# Linux CLI 
 
File Timestamps

- Ogni file e directory una serie di timestamp che ci indicano esattamente quando sono avvenute particolari operazioni sul file stesso
- Nello specifico i 4 principali timestamp sono:
  - **Accesso**: indica l'ultima volta che è stato effettuato l'accesso al file
  - **Modifica**: indica l'ultima volta che è stato modificato il contenuto del file
  - **Cambio**: indica l'ultima volta che è stato effettuato un cambio ai metadata del file
  - **Creazione**: indica quando il file è stato creato e rimane costante

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
File Timestamps

- Ogni file e directory una serie di timestamp che ci indicano esattamente quando sono avvenute particolari operazioni sul file stesso
- Nello specifico i 4 principali timestamp sono:
  - **Accesso**: indica l'ultima volta che è stato effettuato l'accesso al file
  - **Modifica**: indica l'ultima volta che è stato modificato il contenuto del file
  - **Cambio**: indica l'ultima volta che è stato effettuato un cambio ai metadata del file
  - **Creazione**: indica quando il file è stato creato e rimane costante`,frontmatter:{},index:70,start:1145,end:1158,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:SS,meta:{slide:{raw:`
# Linux CLI 
 
stat - visualizza i timestamp di un file

- Per visualizzare le informazioni relative ad un file o directory, quali dimensione e timestamp si utilizza il comando **stat**

\`\`\`bash
$ stat <file/dir name>

$stat README.md                                                     main
  File: README.md
  Dim.: 1164      	Blocchi: 8          Blocco di IO: 4096   file regolare
Device: 10305h/66309d	Inode: 11665449    Coll.: 1
Accesso: (0664/-rw-rw-r--)  Uid: ( 1000/ antonio)   Gid: ( 1000/ antonio)
Accesso  : 2022-08-27 11:11:42.197271632 +0200
Modifica : 2022-08-27 11:11:42.197271632 +0200
Cambio   : 2022-08-27 11:11:42.197271632 +0200
Creazione: 2022-08-27 11:11:42.197271632 +0200
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
stat - visualizza i timestamp di un file

- Per visualizzare le informazioni relative ad un file o directory, quali dimensione e timestamp si utilizza il comando **stat**

\`\`\`bash
$ stat <file/dir name>

$stat README.md                                                     main
  File: README.md
  Dim.: 1164      	Blocchi: 8          Blocco di IO: 4096   file regolare
Device: 10305h/66309d	Inode: 11665449    Coll.: 1
Accesso: (0664/-rw-rw-r--)  Uid: ( 1000/ antonio)   Gid: ( 1000/ antonio)
Accesso  : 2022-08-27 11:11:42.197271632 +0200
Modifica : 2022-08-27 11:11:42.197271632 +0200
Cambio   : 2022-08-27 11:11:42.197271632 +0200
Creazione: 2022-08-27 11:11:42.197271632 +0200
\`\`\``,frontmatter:{},index:71,start:1159,end:1180,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:MS,meta:{slide:{raw:`
# Linux CLI 
 
stat - visualizza i timestamp di un file

\`\`\`bash
stat code                                                          main
  File: code
  Dim.: 4096      	Blocchi: 8          Blocco di IO: 4096   directory
Device: 10305h/66309d	Inode: 16777517    Coll.: 5
Accesso: (0775/drwxrwxr-x)  Uid: ( 1000/ antonio)   Gid: ( 1000/ antonio)
Accesso  : 2023-07-09 10:18:25.132871216 +0200
Modifica : 2023-07-16 17:41:17.282502735 +0200
Cambio   : 2023-07-16 17:41:17.282502735 +0200
Creazione: 2023-07-09 10:18:25.132871216 +0200
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
stat - visualizza i timestamp di un file

\`\`\`bash
stat code                                                          main
  File: code
  Dim.: 4096      	Blocchi: 8          Blocco di IO: 4096   directory
Device: 10305h/66309d	Inode: 16777517    Coll.: 5
Accesso: (0775/drwxrwxr-x)  Uid: ( 1000/ antonio)   Gid: ( 1000/ antonio)
Accesso  : 2023-07-09 10:18:25.132871216 +0200
Modifica : 2023-07-16 17:41:17.282502735 +0200
Cambio   : 2023-07-16 17:41:17.282502735 +0200
Creazione: 2023-07-09 10:18:25.132871216 +0200
\`\`\``,frontmatter:{},index:72,start:1181,end:1198,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:WS,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

- Spesso è molto utile **copiare** un file o un'intera directory all'interno del filesystem

\`\`\`bash
$ cp < - parametri opzionali> <file sorgente> <file destinazione>
$ cp < - parametri opzionali> <file sorgente>...<file sorgente> <directory destinazione>
$ cp < - parametri opzionali> <directory sorgente> <directory destinazione>
\`\`\`

<br>

- cp ha 24 parametri e i più utili sono:

<br>

\`\`\`bash
- r: copia ricorsivamente un albero di directory e il suo contenuto
- v: verbose permette di vedere lo stato della copia
- a: copia in modalità archivio preservando ownership, timestamps, mode
- i: copia in modalità interattiva (chiede conferma in caso di overwrite)
- f: forza la copia anche in caso di overwrite 
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

- Spesso è molto utile **copiare** un file o un'intera directory all'interno del filesystem

\`\`\`bash
$ cp < - parametri opzionali> <file sorgente> <file destinazione>
$ cp < - parametri opzionali> <file sorgente>...<file sorgente> <directory destinazione>
$ cp < - parametri opzionali> <directory sorgente> <directory destinazione>
\`\`\`

<br>

- cp ha 24 parametri e i più utili sono:

<br>

\`\`\`bash
- r: copia ricorsivamente un albero di directory e il suo contenuto
- v: verbose permette di vedere lo stato della copia
- a: copia in modalità archivio preservando ownership, timestamps, mode
- i: copia in modalità interattiva (chiede conferma in caso di overwrite)
- f: forza la copia anche in caso di overwrite 
\`\`\``,frontmatter:{},index:73,start:1199,end:1226,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:GS,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ ls -la 
drwxrwxr-x   3 antonio antonio   4096 set 10 12:30 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:30 DIR1
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1

$ cp file1 file # crea una copia di file1 nella directory corrente chiamato file2

$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:30 DIR1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:30 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:31 file2

\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ ls -la 
drwxrwxr-x   3 antonio antonio   4096 set 10 12:30 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:30 DIR1
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1

$ cp file1 file # crea una copia di file1 nella directory corrente chiamato file2

$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:30 DIR1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:30 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:31 file2

\`\`\``,frontmatter:{},index:74,start:1227,end:1248,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:XS,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:30 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..

$ cp file1 DIR1 # crea una copia di file1 nella directory DIR1 con nome file1

$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:33 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:30 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..

$ cp file1 DIR1 # crea una copia di file1 nella directory DIR1 con nome file1

$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:33 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
\`\`\``,frontmatter:{},index:75,start:1249,end:1266,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:oR,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:33 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1

$ cp file1 DIR1/fileDIR1 # crea una copia di file1 nella directory dIR1 con nome fileDIR1

$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:34 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:33 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1

$ cp file1 DIR1/fileDIR1 # crea una copia di file1 nella directory dIR1 con nome fileDIR1

$ ls -la DIR1
drwxrwxr-x 2 antonio antonio 4096 set 10 12:34 .
drwxrwxr-x 3 antonio antonio 4096 set 10 12:31 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
\`\`\``,frontmatter:{},index:76,start:1267,end:1287,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:cR,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash 
$ ls -la
drwxrwxr-x   3 antonio antonio   4096 set 10 12:31 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:34 DIR1
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ cp -rv DIR1 DIR2
'DIR1' -> 'DIR2'
'DIR1/file1' -> 'DIR2/file1'
'DIR1/fileDIR1' -> 'DIR2/fileDIR1'

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 10 12:35 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:34 DIR1
drwxrwxr-x   2 antonio antonio   4096 set 10 12:35 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash 
$ ls -la
drwxrwxr-x   3 antonio antonio   4096 set 10 12:31 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:34 DIR1
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ cp -rv DIR1 DIR2
'DIR1' -> 'DIR2'
'DIR1/file1' -> 'DIR2/file1'
'DIR1/fileDIR1' -> 'DIR2/fileDIR1'

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 10 12:35 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 10 12:34 DIR1
drwxrwxr-x   2 antonio antonio   4096 set 10 12:35 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

\`\`\``,frontmatter:{},index:77,start:1288,end:1316,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:fR,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ touch file3 file4

$ cp -v file3 file4 DIR2
'file3' -> 'DIR2/file3'
'file4' -> 'DIR2/file4'

ls -la DIR2
drwxrwxr-x 2 antonio antonio 4096 set 10 12:37 .
drwxrwxr-x 4 antonio antonio 4096 set 10 12:36 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:35 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:37 file3
-rw-rw-r-- 1 antonio antonio    0 set 10 12:37 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:35 fileDIR1
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ touch file3 file4

$ cp -v file3 file4 DIR2
'file3' -> 'DIR2/file3'
'file4' -> 'DIR2/file4'

ls -la DIR2
drwxrwxr-x 2 antonio antonio 4096 set 10 12:37 .
drwxrwxr-x 4 antonio antonio 4096 set 10 12:36 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:35 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:37 file3
-rw-rw-r-- 1 antonio antonio    0 set 10 12:37 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:35 fileDIR1
\`\`\``,frontmatter:{},index:78,start:1317,end:1338,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",name:"page-80",component:bR,meta:{slide:{raw:`
# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ cp -vi file3 file4 DIR2

cp: sovrascrivere 'DIR2/file3'? y
'file3' -> 'DIR2/file3'
cp: sovrascrivere 'DIR2/file4'? y
'file4' -> 'DIR2/file4'

\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cp - copiare file e directory

\`\`\`bash
$ cp -vi file3 file4 DIR2

cp: sovrascrivere 'DIR2/file3'? y
'file3' -> 'DIR2/file3'
cp: sovrascrivere 'DIR2/file4'? y
'file4' -> 'DIR2/file4'

\`\`\``,frontmatter:{},index:79,start:1339,end:1354,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:79,no:80},__clicksElements:[],__preloaded:!1}},{path:"81",name:"page-81",component:LR,meta:{slide:{raw:`
# Linux CLI 
 
mv - muove o rinomina file

- Il comando **mv** è utilizzato per spostare un file o una directory da una directory ad un altra nel filesystem
- Il comando è anche utilizzato per rinominare un file nel caso la directory sorgente e destinazione siano le stesse

<br>

\`\`\`bash
$ mv <source file> <destination dir> # muove un file dalla directory corrente ad un'altra directory
# sposta il file in una directory diversa e lo rinomina
$ mv <source file> <destination dir/destination file> 
$ mv <source dir> <destination dir> # sposta o rinomina una directory
$ mv <source file> <destination file> # rinomina un file nella stessa directory
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
mv - muove o rinomina file

- Il comando **mv** è utilizzato per spostare un file o una directory da una directory ad un altra nel filesystem
- Il comando è anche utilizzato per rinominare un file nel caso la directory sorgente e destinazione siano le stesse

<br>

\`\`\`bash
$ mv <source file> <destination dir> # muove un file dalla directory corrente ad un'altra directory
# sposta il file in una directory diversa e lo rinomina
$ mv <source file> <destination dir/destination file> 
$ mv <source dir> <destination dir> # sposta o rinomina una directory
$ mv <source file> <destination file> # rinomina un file nella stessa directory
\`\`\``,frontmatter:{},index:80,start:1355,end:1373,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:80,no:81},__clicksElements:[],__preloaded:!1}},{path:"82",name:"page-82",component:AR,meta:{slide:{raw:`
# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1

$ mv file4 DIR1

$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1

$ mv file4 DIR1

$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
\`\`\``,frontmatter:{},index:81,start:1374,end:1396,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:81,no:82},__clicksElements:[],__preloaded:!1}},{path:"83",name:"page-83",component:PR,meta:{slide:{raw:`
# Linux CLI 
 
mv - muove o rinomina file


\`\`\`bash
$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1

$ mv file3  DIR1/file33

$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:11 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:11 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file33
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
mv - muove o rinomina file


\`\`\`bash
$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:10 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:10 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1

$ mv file3  DIR1/file33

$ls -la DIR1/
drwxrwxr-x 2 antonio antonio 4096 set 11 19:11 .
drwxrwxr-x 4 antonio antonio 4096 set 11 19:11 ..
-rw-rw-r-- 1 antonio antonio    5 set 10 12:33 file1
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file33
-rw-rw-r-- 1 antonio antonio    0 set 10 12:36 file4
-rw-rw-r-- 1 antonio antonio    5 set 10 12:34 fileDIR1
\`\`\``,frontmatter:{},index:82,start:1397,end:1422,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:82,no:83},__clicksElements:[],__preloaded:!1}},{path:"84",name:"page-84",component:KR,meta:{slide:{raw:`
# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:11 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR1
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ mv DIR1 DIR11

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:11 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:11 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR1
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ mv DIR1 DIR11

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:11 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2
\`\`\``,frontmatter:{},index:83,start:1423,end:1448,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:83,no:84},__clicksElements:[],__preloaded:!1}},{path:"85",name:"page-85",component:VR,meta:{slide:{raw:`
# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:13 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ mv file2 fileAAA2

$ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:14 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:13 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 file2

$ mv file2 fileAAA2

$ls -la
drwxrwxr-x   4 antonio antonio   4096 set 11 19:14 .
drwxrwxr-x 225 antonio antonio 241664 set 10 12:30 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2
\`\`\``,frontmatter:{},index:84,start:1449,end:1474,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:84,no:85},__clicksElements:[],__preloaded:!1}},{path:"86",name:"page-86",component:QR,meta:{slide:{raw:`
# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2

$ mv file1 fileAAA2 /tmp

$ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2

$ls -la /tmp/
srwx------  1 antonio antonio     0 set 11 12:59 '844uMDg5r12KpmxXG2wGOx0Hlsvelh2xjo6CL4epTjM='
drwx------  2 antonio antonio  4096 set 11 18:53  .com.google.Chrome.RGR4te
-rw-rw-r--  1 antonio antonio     5 set 10 12:30  file1
-rw-rw-r--  1 antonio antonio     5 set 10 12:31  fileAAA2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
mv - muove o rinomina file

\`\`\`bash
$ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2

$ mv file1 fileAAA2 /tmp

$ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2

$ls -la /tmp/
srwx------  1 antonio antonio     0 set 11 12:59 '844uMDg5r12KpmxXG2wGOx0Hlsvelh2xjo6CL4epTjM='
drwx------  2 antonio antonio  4096 set 11 18:53  .com.google.Chrome.RGR4te
-rw-rw-r--  1 antonio antonio     5 set 10 12:30  file1
-rw-rw-r--  1 antonio antonio     5 set 10 12:31  fileAAA2
\`\`\``,frontmatter:{},index:85,start:1475,end:1500,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:85,no:86},__clicksElements:[],__preloaded:!1}},{path:"87",name:"page-87",component:sE,meta:{slide:{raw:`
# Linux CLI 
 
rm - rimuove file o directory

- Per cancellare un file in modo permanente (non c'è il cestino nella CLI) si utilizza il comando **rm (remove)**
\`\`\`bash
$ rm <- parametri opzionali> <file o directory>

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2

$ rm file1

ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
rm - rimuove file o directory

- Per cancellare un file in modo permanente (non c'è il cestino nella CLI) si utilizza il comando **rm (remove)**
\`\`\`bash
$ rm <- parametri opzionali> <file o directory>

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:30 file1
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2

$ rm file1

ls -la
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      5 set 10 12:31 fileAAA2
\`\`\``,frontmatter:{},index:86,start:1501,end:1524,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:86,no:87},__clicksElements:[],__preloaded:!1}},{path:"88",name:"page-88",component:dE,meta:{slide:{raw:`
# Linux CLI 
 
rm - rimuove file o directory

- I parametri più utilizzati sono:

<br>

\`\`\`bash
-i: interactive chiede conferma prima di rimuovere
-d: rimuove una directory vuota
-r: rimuove ricorsivamente il contenuto nelle sotto directory
-f: forza il comando anche in caso di directory non vuote
\`\`\`

<br>

\`\`\`bash
$ rm -i fileAAA2 
rm: rimuovere file regolare 'fileAAA2'? y

\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 
 
rm - rimuove file o directory

- I parametri più utilizzati sono:

<br>

\`\`\`bash
-i: interactive chiede conferma prima di rimuovere
-d: rimuove una directory vuota
-r: rimuove ricorsivamente il contenuto nelle sotto directory
-f: forza il comando anche in caso di directory non vuote
\`\`\`

<br>

\`\`\`bash
$ rm -i fileAAA2 
rm: rimuovere file regolare 'fileAAA2'? y

\`\`\``,frontmatter:{},index:87,start:1525,end:1548,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:87,no:88},__clicksElements:[],__preloaded:!1}},{path:"89",name:"page-89",component:gE,meta:{slide:{raw:`
# Linux CLI 
 
rm - rimuove file o directory

\`\`\`bash
$ ls -la DIR3
drwxrwxr-x 2 antonio antonio 4096 set 11 19:21 .
drwxrwxr-x 5 antonio antonio 4096 set 11 19:20 ..
-rw-rw-r-- 1 antonio antonio    0 set 11 19:21 file13

$  rm DIR3                                                                                 ✘ 1
rm: impossibile rimuovere 'DIR3': È una directory

$ rm -d DIR3                                                                              ✘ 1
rm: impossibile rimuovere 'DIR3': Directory non vuota

# svuotiamo la directory 3

$rm -d DIR3                                                                             ✘ 1

$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
-rw-rw-r-- 1 antonio antonio    5 set 10 12:31 fileAAA2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
rm - rimuove file o directory

\`\`\`bash
$ ls -la DIR3
drwxrwxr-x 2 antonio antonio 4096 set 11 19:21 .
drwxrwxr-x 5 antonio antonio 4096 set 11 19:20 ..
-rw-rw-r-- 1 antonio antonio    0 set 11 19:21 file13

$  rm DIR3                                                                                 ✘ 1
rm: impossibile rimuovere 'DIR3': È una directory

$ rm -d DIR3                                                                              ✘ 1
rm: impossibile rimuovere 'DIR3': Directory non vuota

# svuotiamo la directory 3

$rm -d DIR3                                                                             ✘ 1

$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
-rw-rw-r-- 1 antonio antonio    5 set 10 12:31 fileAAA2
\`\`\``,frontmatter:{},index:88,start:1549,end:1576,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:88,no:89},__clicksElements:[],__preloaded:!1}},{path:"90",name:"page-90",component:IE,meta:{slide:{raw:`
# Linux CLI 
 
rm - rimuove file o directory

- Per rimuovere una directory e tutto il suo contenuto senza priam svuotarla possiamo fare così

\`\`\`bash
$ rm -dr DIR3

oppure

$ rm -rf DIR3

\`\`\`
<br>

- Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
rm - rimuove file o directory

- Per rimuovere una directory e tutto il suo contenuto senza priam svuotarla possiamo fare così

\`\`\`bash
$ rm -dr DIR3

oppure

$ rm -rf DIR3

\`\`\`
<br>

- Entrambi i comandi hanno lo stesso effetto ma il secondo è più comune tra gli amministratori di sistemi Linux`,frontmatter:{},index:89,start:1577,end:1596,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:89,no:90},__clicksElements:[],__preloaded:!1}},{path:"91",name:"page-91",component:zE,meta:{slide:{raw:`
# Linux CLI 
 
more - visualizzazione file paginata

- more permette di leggere un file di testo una pagina alla volta

\`\`\`bash
$ more <nome file>
\`\`\`

<br>

- Se il file è più corto di una pagina di video viene visualizzato e more esce
- Se il file è più lungo e rivhiede più paginate del video per essere visualizzato, more entra in modalità comando
- more accetta i seguenti comandi principali:

<br>

\`\`\`bash
<spaca>: avanza alla prossima pagina del testo
b: torna indietro alla pagina precedente
/<pattern>: effettua una ricerca del pattern all'interno del file
n: salta alla prossima occorrenza di <pattern> se presente
q: esce dalla visualizzazione
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
more - visualizzazione file paginata

- more permette di leggere un file di testo una pagina alla volta

\`\`\`bash
$ more <nome file>
\`\`\`

<br>

- Se il file è più corto di una pagina di video viene visualizzato e more esce
- Se il file è più lungo e rivhiede più paginate del video per essere visualizzato, more entra in modalità comando
- more accetta i seguenti comandi principali:

<br>

\`\`\`bash
<spaca>: avanza alla prossima pagina del testo
b: torna indietro alla pagina precedente
/<pattern>: effettua una ricerca del pattern all'interno del file
n: salta alla prossima occorrenza di <pattern> se presente
q: esce dalla visualizzazione
\`\`\``,frontmatter:{},index:90,start:1597,end:1624,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:90,no:91},__clicksElements:[],__preloaded:!1}},{path:"92",name:"page-92",component:VE,meta:{slide:{raw:`
# Linux CLI 
 
less - visualizzazione file avanzata

- less è molto simile a more ed ha lo stesso scopo che è quello di visualizzare un file multipagina
- less ha alcune funzione più sofisticate di more, ma nell'uso comune sono sostanzialmente uguali

<br>

\`\`\`bash
$ less <nome file>
\`\`\`

<br>

- i comandi accettati sono gli stessi di more

- Spesso **more** e **less** sono utilizzati come filtri finali di una pipeline di comandi

<br>

\`\`\`bash
$ cat file_grande | sort -r | less

oppure

$ $ cat file_grande | sort -r | more
 
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
less - visualizzazione file avanzata

- less è molto simile a more ed ha lo stesso scopo che è quello di visualizzare un file multipagina
- less ha alcune funzione più sofisticate di more, ma nell'uso comune sono sostanzialmente uguali

<br>

\`\`\`bash
$ less <nome file>
\`\`\`

<br>

- i comandi accettati sono gli stessi di more

- Spesso **more** e **less** sono utilizzati come filtri finali di una pipeline di comandi

<br>

\`\`\`bash
$ cat file_grande | sort -r | less

oppure

$ $ cat file_grande | sort -r | more
 
\`\`\``,frontmatter:{},index:91,start:1625,end:1656,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:91,no:92},__clicksElements:[],__preloaded:!1}},{path:"93",name:"page-93",component:XE,meta:{slide:{raw:`
# Linux CLI 
 
cat - concatenazione file

- **cat** concatena uno o più file e lo visualizza sullo standard output
- quindi usando cat con un solo file ha l'effetto di visualizzare il file sullo schermo

<br>

\`\`\`bash
$ cat  <nome file> [<nome file> <nome file>]

$ ls -la
ls -la     
drwxrwxr-x   4 antonio antonio   4096 set 12 14:54 .
drwxrwxr-x 225 antonio antonio 241664 set 12 14:47 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      7 set 12 14:54 file1
-rw-rw-r--   1 antonio antonio      7 set 12 14:54 file2
-rw-rw-r--   1 antonio antonio      7 set 12 14:54 file3
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cat - concatenazione file

- **cat** concatena uno o più file e lo visualizza sullo standard output
- quindi usando cat con un solo file ha l'effetto di visualizzare il file sullo schermo

<br>

\`\`\`bash
$ cat  <nome file> [<nome file> <nome file>]

$ ls -la
ls -la     
drwxrwxr-x   4 antonio antonio   4096 set 12 14:54 .
drwxrwxr-x 225 antonio antonio 241664 set 12 14:47 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio      7 set 12 14:54 file1
-rw-rw-r--   1 antonio antonio      7 set 12 14:54 file2
-rw-rw-r--   1 antonio antonio      7 set 12 14:54 file3
\`\`\``,frontmatter:{},index:92,start:1657,end:1681,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:92,no:93},__clicksElements:[],__preloaded:!1}},{path:"94",name:"page-94",component:oA,meta:{slide:{raw:`
# Linux CLI 
 
cat - concatenazione file

\`\`\`bash
$cat file1               
linea1

$ cat file2
linea2

$ cat file3
linea3

$ cat file1 file2 file3
linea1
linea2
linea3

$ cat file1 file2 file3 > file4
$ cat file4                    
linea1
linea2
linea3
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
cat - concatenazione file

\`\`\`bash
$cat file1               
linea1

$ cat file2
linea2

$ cat file3
linea3

$ cat file1 file2 file3
linea1
linea2
linea3

$ cat file1 file2 file3 > file4
$ cat file4                    
linea1
linea2
linea3
\`\`\``,frontmatter:{},index:93,start:1682,end:1709,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:93,no:94},__clicksElements:[],__preloaded:!1}},{path:"95",name:"page-95",component:uA,meta:{slide:{raw:`
# Linux CLI 
 
head - visualizzare la parte iniziale di un file

- Visualizza la prima parte di un file di solito specificata in bytes o linee

\`\`\`bash
$ head < - parametri opzionali> <file>

$ head file1
linea 1
linea 2
linea 3
linea 4
linea 5
linea 6
linea 7
linea 8
linea 9
linea 10

$ head -n 2 file1 # visualizza solo le prime 2 linee del file
linea 1
linea 2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
head - visualizzare la parte iniziale di un file

- Visualizza la prima parte di un file di solito specificata in bytes o linee

\`\`\`bash
$ head < - parametri opzionali> <file>

$ head file1
linea 1
linea 2
linea 3
linea 4
linea 5
linea 6
linea 7
linea 8
linea 9
linea 10

$ head -n 2 file1 # visualizza solo le prime 2 linee del file
linea 1
linea 2
\`\`\``,frontmatter:{},index:94,start:1710,end:1737,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:94,no:95},__clicksElements:[],__preloaded:!1}},{path:"96",name:"page-96",component:_A,meta:{slide:{raw:`
# Linux CLI 
 
tail - visualizzare la parte finale di un file

- In maniera esattamente analoga ad head, visualizza la parte finale di un file in linee o bytes

\`\`\`bash
$tail file1                                  
linea 991
linea 992
linea 993
linea 994
linea 995
linea 996
linea 997
linea 998
linea 999
linea 1000

$ tail -n 3 file1 # visualizza le ultime 3 linee di un file
linea 998
linea 999
linea 1000
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
tail - visualizzare la parte finale di un file

- In maniera esattamente analoga ad head, visualizza la parte finale di un file in linee o bytes

\`\`\`bash
$tail file1                                  
linea 991
linea 992
linea 993
linea 994
linea 995
linea 996
linea 997
linea 998
linea 999
linea 1000

$ tail -n 3 file1 # visualizza le ultime 3 linee di un file
linea 998
linea 999
linea 1000
\`\`\``,frontmatter:{},index:95,start:1738,end:1764,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:95,no:96},__clicksElements:[],__preloaded:!1}},{path:"97",name:"page-97",component:LA,meta:{slide:{raw:`
# Linux CLI 
 
tail - visualizzare la parte finale di un file

- Un parametro molto usate per tail è \`-f\` che permette di continuare a leggere un file per scritture successive
- Utilizzato prevalentemente per l'analisi di file di log in cui un processo "appende" nuovi dati al fondo del file

Aprire due shelle 1 e 2

shell 1:
\`\`\`bash
$ touch file1
$ tail -f file1
\`\`\`

shell 2:
\`\`\`bash
$ echo ciao > file1
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
tail - visualizzare la parte finale di un file

- Un parametro molto usate per tail è \`-f\` che permette di continuare a leggere un file per scritture successive
- Utilizzato prevalentemente per l'analisi di file di log in cui un processo "appende" nuovi dati al fondo del file

Aprire due shelle 1 e 2

shell 1:
\`\`\`bash
$ touch file1
$ tail -f file1
\`\`\`

shell 2:
\`\`\`bash
$ echo ciao > file1
\`\`\``,frontmatter:{},index:96,start:1765,end:1786,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:96,no:97},__clicksElements:[],__preloaded:!1}},{path:"98",name:"page-98",component:TA,meta:{slide:{raw:`
# Linux CLI 
 
sort - ordinare le linee di un file di testo

- Ordina un file di testo

\`\`\`bash
$ sort < - parametri opzionali> <file>

$ sort file1
1
10
2
3
4
5
6
7
8
9
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
sort - ordinare le linee di un file di testo

- Ordina un file di testo

\`\`\`bash
$ sort < - parametri opzionali> <file>

$ sort file1
1
10
2
3
4
5
6
7
8
9
\`\`\``,frontmatter:{},index:97,start:1787,end:1810,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:97,no:98},__clicksElements:[],__preloaded:!1}},{path:"99",name:"page-99",component:DA,meta:{slide:{raw:`
# Linux CLI 
 
sort - ordinare le linee di un file di testo


\`\`\`bash
$ sort -g file1 # usa ordine numerico
1
2
3
4
5
6
7
8
9
10
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
sort - ordinare le linee di un file di testo


\`\`\`bash
$ sort -g file1 # usa ordine numerico
1
2
3
4
5
6
7
8
9
10
\`\`\``,frontmatter:{},index:98,start:1811,end:1831,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:98,no:99},__clicksElements:[],__preloaded:!1}},{path:"100",name:"page-100",component:BA,meta:{slide:{raw:`
# Linux CLI 
 
sort - ordinare le linee di un file di testo


\`\`\`bash
$ sort -rg file1 # usa ordine numerico inverso (reverse)
10
9
8
7
6
5
4
3
2
1
\`\`\`

<br>

- Sort ha 20 parametri opzionali inclusi **g** e **r**
- Consultare il manuale per eventuali necessità
  `,title:"Linux CLI",level:1,content:`# Linux CLI 
 
sort - ordinare le linee di un file di testo


\`\`\`bash
$ sort -rg file1 # usa ordine numerico inverso (reverse)
10
9
8
7
6
5
4
3
2
1
\`\`\`

<br>

- Sort ha 20 parametri opzionali inclusi **g** e **r**
- Consultare il manuale per eventuali necessità`,frontmatter:{},index:99,start:1832,end:1857,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:99,no:100},__clicksElements:[],__preloaded:!1}},{path:"101",name:"page-101",component:ZA,meta:{slide:{raw:`
# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

- Uniq permette di identificare le occorrenze uguali di linee di testo in un file
- Permette di riportare o di eliminare tali occorrenze

\`\`\`bash
$ cat file1 
1
2
3
1
7
3
4
5
6
7
3
8
9
6
10
1
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

- Uniq permette di identificare le occorrenze uguali di linee di testo in un file
- Permette di riportare o di eliminare tali occorrenze

\`\`\`bash
$ cat file1 
1
2
3
1
7
3
4
5
6
7
3
8
9
6
10
1
\`\`\``,frontmatter:{},index:100,start:1858,end:1886,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:100,no:101},__clicksElements:[],__preloaded:!1}},{path:"102",name:"page-102",component:o8,meta:{slide:{raw:`
# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

- uniq deve lavorare su un file ordinato

\`\`\`bash
$ cat file1 | sort -g | uniq
1
2
3
4
5
6
7
8
9
10
\`\`\`

<br>

- **uniq** ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

- uniq deve lavorare su un file ordinato

\`\`\`bash
$ cat file1 | sort -g | uniq
1
2
3
4
5
6
7
8
9
10
\`\`\`

<br>

- **uniq** ha rimosso le occorrenze e ora tutti i numeri compaio una sola volta`,frontmatter:{},index:101,start:1887,end:1912,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:101,no:102},__clicksElements:[],__preloaded:!1}},{path:"103",name:"page-103",component:p8,meta:{slide:{raw:`
# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

\`\`\`bash
$cat file1 | sort -g | uniq -d

1
3
6
7
\`\`\`

<br>

- **uniq** ha mantenuto solo le occorrenze doppie e rimosso quelle singole

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
uniq - rimuovere le linee occorrenti di un file

\`\`\`bash
$cat file1 | sort -g | uniq -d

1
3
6
7
\`\`\`

<br>

- **uniq** ha mantenuto solo le occorrenze doppie e rimosso quelle singole`,frontmatter:{},index:102,start:1913,end:1932,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:102,no:103},__clicksElements:[],__preloaded:!1}},{path:"104",name:"page-104",component:v8,meta:{slide:{raw:`
# Linux CLI 
 
wc - contare caratteri, parole e linee di un file

- Spesso è utile contare quanti caratteri, parole o linee sono presenti in un file di testo
- **wc** assolve esattamente a questo compito

<br>

\`\`\`bash
$ wc < - parametri opzionali> <file>

-c: conta i bytes o caratteri
-w: conta le parole
-l: conta le linee 

$ cat file1                    
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
wc - contare caratteri, parole e linee di un file

- Spesso è utile contare quanti caratteri, parole o linee sono presenti in un file di testo
- **wc** assolve esattamente a questo compito

<br>

\`\`\`bash
$ wc < - parametri opzionali> <file>

-c: conta i bytes o caratteri
-w: conta le parole
-l: conta le linee 

$ cat file1                    
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
\`\`\``,frontmatter:{},index:103,start:1933,end:1957,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:103,no:104},__clicksElements:[],__preloaded:!1}},{path:"105",name:"page-105",component:I8,meta:{slide:{raw:`
# Linux CLI 
 
wc - contare caratteri, parole e linee di un file

\`\`\`bash
$ wc -c file1
579 file1

$ wc -w file1
91 file1

$ wc -l file1
5 file1
\`\`\`

<br>

- Spesso usato come parte finale di una pipeline di comandi
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
wc - contare caratteri, parole e linee di un file

\`\`\`bash
$ wc -c file1
579 file1

$ wc -w file1
91 file1

$ wc -l file1
5 file1
\`\`\`

<br>

- Spesso usato come parte finale di una pipeline di comandi`,frontmatter:{},index:104,start:1958,end:1978,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:104,no:105},__clicksElements:[],__preloaded:!1}},{path:"106",name:"page-106",component:A8,meta:{slide:{raw:`
# Linux CLI 
 
touch - creare un file vuoto

- Per creare velocemente un file vuoto è possibile usare il comando **touch**

\`\`\`bash
$ touch <nome file>

$ touch file4

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 12 15:22 .
drwxrwxr-x 225 antonio antonio 241664 set 12 15:13 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
-rw-rw-r--   1 antonio antonio      0 set 12 15:22 file4
\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 
 
touch - creare un file vuoto

- Per creare velocemente un file vuoto è possibile usare il comando **touch**

\`\`\`bash
$ touch <nome file>

$ touch file4

$ ls -la
drwxrwxr-x   4 antonio antonio   4096 set 12 15:22 .
drwxrwxr-x 225 antonio antonio 241664 set 12 15:13 ..
drwxrwxr-x   2 antonio antonio   4096 set 11 19:11 DIR11
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
-rw-rw-r--   1 antonio antonio      0 set 12 15:22 file4
\`\`\``,frontmatter:{},index:105,start:1979,end:2e3,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:105,no:106},__clicksElements:[],__preloaded:!1}},{path:"107",name:"page-107",component:D8,meta:{slide:{raw:`
# Linux CLI 

mkdir - creare una directory

- Per creare una nuova directory o albero di directory si usa il comando **mkdir**

\`\`\`bash
$ mkdir <directory> # crea una nuova directory

$ mkdir -p <dir1>/<dir2>/.../<dirN> # crea un albero di directory

$ mkdir DIR3
$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
drwxrwxr-x 2 antonio antonio 4,0K set 12 15:24 DIR3

$ mkdir -p DIR4/DIR5/DIR6

$  tree DIR4   
DIR4
└── DIR5
    └── DIR6

2 directories, 0 files
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

mkdir - creare una directory

- Per creare una nuova directory o albero di directory si usa il comando **mkdir**

\`\`\`bash
$ mkdir <directory> # crea una nuova directory

$ mkdir -p <dir1>/<dir2>/.../<dirN> # crea un albero di directory

$ mkdir DIR3
$ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
drwxrwxr-x 2 antonio antonio 4,0K set 12 15:24 DIR3

$ mkdir -p DIR4/DIR5/DIR6

$  tree DIR4   
DIR4
└── DIR5
    └── DIR6

2 directories, 0 files
\`\`\``,frontmatter:{},index:106,start:2001,end:2029,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:106,no:107},__clicksElements:[],__preloaded:!1}},{path:"108",name:"page-108",component:H8,meta:{slide:{raw:`
# Linux CLI 

du - calcola lo spazio disco occupato da una directory

\`\`\`bash
$ du
4	./DIR3
12	./DIR2
12	./DIR11
4	./DIR4/DIR5/DIR6
8	./DIR4/DIR5
12	./DIR4
52	.

$ du -h # visualizza le dimensioni human readable
4,0K	./DIR3
12K	./DIR2
12K	./DIR11
4,0K	./DIR4/DIR5/DIR6
8,0K	./DIR4/DIR5
12K	./DIR4
52K	.
\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 

du - calcola lo spazio disco occupato da una directory

\`\`\`bash
$ du
4	./DIR3
12	./DIR2
12	./DIR11
4	./DIR4/DIR5/DIR6
8	./DIR4/DIR5
12	./DIR4
52	.

$ du -h # visualizza le dimensioni human readable
4,0K	./DIR3
12K	./DIR2
12K	./DIR11
4,0K	./DIR4/DIR5/DIR6
8,0K	./DIR4/DIR5
12K	./DIR4
52K	.
\`\`\``,frontmatter:{},index:107,start:2030,end:2054,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:107,no:108},__clicksElements:[],__preloaded:!1}},{path:"109",name:"page-109",component:U8,meta:{slide:{raw:`
# Linux CLI 

df - visualizza lo spazio disponibile su un filesystem

\`\`\`bash
$ df   
File system    1K-blocchi     Usati Disponib. Uso% Montato su
tmpfs             1617056      2132   1614924   1% /run
/dev/nvme0n1p4  123390456  82302484  34773940  71% /
tmpfs             8085268     45036   8040232   1% /dev/shm
tmpfs                5120         0      5120   0% /run/lock
tmpfs             8085268         0   8085268   0% /run/qemu
/dev/nvme0n1p1     521200    326952    194248  63% /boot/efi
/dev/nvme0n1p5  775506816 491167292 249685692  67% /home

$ df -h # visualizza le dimensioni human readable
File system     Dim. Usati Dispon. Uso% Montato su
tmpfs           1,6G  2,1M    1,6G   1% /run
/dev/nvme0n1p4  118G   79G     34G  71% /
tmpfs           7,8G   48M    7,7G   1% /dev/shm
tmpfs           5,0M     0    5,0M   0% /run/lock
tmpfs           7,8G     0    7,8G   0% /run/qemu
/dev/nvme0n1p1  509M  320M    190M  63% /boot/efi
/dev/nvme0n1p5  740G  469G    239G  67% /home
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

df - visualizza lo spazio disponibile su un filesystem

\`\`\`bash
$ df   
File system    1K-blocchi     Usati Disponib. Uso% Montato su
tmpfs             1617056      2132   1614924   1% /run
/dev/nvme0n1p4  123390456  82302484  34773940  71% /
tmpfs             8085268     45036   8040232   1% /dev/shm
tmpfs                5120         0      5120   0% /run/lock
tmpfs             8085268         0   8085268   0% /run/qemu
/dev/nvme0n1p1     521200    326952    194248  63% /boot/efi
/dev/nvme0n1p5  775506816 491167292 249685692  67% /home

$ df -h # visualizza le dimensioni human readable
File system     Dim. Usati Dispon. Uso% Montato su
tmpfs           1,6G  2,1M    1,6G   1% /run
/dev/nvme0n1p4  118G   79G     34G  71% /
tmpfs           7,8G   48M    7,7G   1% /dev/shm
tmpfs           5,0M     0    5,0M   0% /run/lock
tmpfs           7,8G     0    7,8G   0% /run/qemu
/dev/nvme0n1p1  509M  320M    190M  63% /boot/efi
/dev/nvme0n1p5  740G  469G    239G  67% /home
\`\`\``,frontmatter:{},index:108,start:2055,end:2082,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:108,no:109},__clicksElements:[],__preloaded:!1}},{path:"110",name:"page-110",component:eT,meta:{slide:{raw:`
# Linux CLI 
 
find - search for files in a directory hierarchy

- Spesso quando navighiamo nel filesystem abbiamo la necessità di cercare dei file
- \`find\` è un comando potentissimo che permette di fare ricerche nel filesystem molto sofisticate
- **find** ha 71 parametri, ma non abbiamo bisogno di conoscerli tutti. CI ricordiamo i principali e quando ci serve qualcosa di particolare consultiamo il manuale

<br>
\`\`\`bash
$ find <directory iniziale> < - parametri opzionali>

# partendo dalla directory corrente scandisce tutti i file e sottodirectory alla ricerca 
# di ogni file che fa match con pillole*.png
$ find . -name 'pillole*.png'  --> il carattere * rappresenta uno o più caratteri
 
./Downloads/pillole-di-css.png
./Downloads/img/pillole.png
./Downloads/pillole-css.png
./tmp/profmancusoa.github.io/pillole-css.png
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
find - search for files in a directory hierarchy

- Spesso quando navighiamo nel filesystem abbiamo la necessità di cercare dei file
- \`find\` è un comando potentissimo che permette di fare ricerche nel filesystem molto sofisticate
- **find** ha 71 parametri, ma non abbiamo bisogno di conoscerli tutti. CI ricordiamo i principali e quando ci serve qualcosa di particolare consultiamo il manuale

<br>
\`\`\`bash
$ find <directory iniziale> < - parametri opzionali>

# partendo dalla directory corrente scandisce tutti i file e sottodirectory alla ricerca 
# di ogni file che fa match con pillole*.png
$ find . -name 'pillole*.png'  --> il carattere * rappresenta uno o più caratteri
 
./Downloads/pillole-di-css.png
./Downloads/img/pillole.png
./Downloads/pillole-css.png
./tmp/profmancusoa.github.io/pillole-css.png
\`\`\``,frontmatter:{},index:109,start:2083,end:2106,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:109,no:110},__clicksElements:[],__preloaded:!1}},{path:"111",name:"page-111",component:rT,meta:{slide:{raw:`
# Linux CLI 
 
find - search for files in a directory hierarchy

Vediamo alcuni parametri utili

\`\`\`bash
-type: specifica il tipo di file da ricercare (f file, d directory, ...)
-user: specifica l'owner del file (nome utente o id)
-atime: cerca un file che a cui è stato fatto accesso -n, n o +n giorni fà
-mtime: cerca un file o directory che è stata modificato -n, n o +n giorni fà
-size: cerca file di dimensione -n, n o +n unità di spazio (b,c,k,M,G)
-exec: esegue un comando per ogni file selezionato
\`\`\`

<br>

\`\`\`bash
$ find . -type d # cerca tutte le sottodirectory a partire dalla directory corrente
$ find . -type f  -user root # cerca tutti i file di proprietà root
$ find . -mtime -2 # cerca tutti i file che sono stati modificati meno di 2 giorni fà
$ find . -mtime 2 # cerca tutti i file che sono stati modificati esattamente 2 giorni fà
$ find . -mtime +2 # cerca tutti i file che sono stati modificati più di 2 giorni fà
$ find . -size 512c # cerca tutti i file di 512 byte
$ find . -size +100M -exec rm {} \\; # rimuove tutti i file più grandi di 100MByte
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
find - search for files in a directory hierarchy

Vediamo alcuni parametri utili

\`\`\`bash
-type: specifica il tipo di file da ricercare (f file, d directory, ...)
-user: specifica l'owner del file (nome utente o id)
-atime: cerca un file che a cui è stato fatto accesso -n, n o +n giorni fà
-mtime: cerca un file o directory che è stata modificato -n, n o +n giorni fà
-size: cerca file di dimensione -n, n o +n unità di spazio (b,c,k,M,G)
-exec: esegue un comando per ogni file selezionato
\`\`\`

<br>

\`\`\`bash
$ find . -type d # cerca tutte le sottodirectory a partire dalla directory corrente
$ find . -type f  -user root # cerca tutti i file di proprietà root
$ find . -mtime -2 # cerca tutti i file che sono stati modificati meno di 2 giorni fà
$ find . -mtime 2 # cerca tutti i file che sono stati modificati esattamente 2 giorni fà
$ find . -mtime +2 # cerca tutti i file che sono stati modificati più di 2 giorni fà
$ find . -size 512c # cerca tutti i file di 512 byte
$ find . -size +100M -exec rm {} \\; # rimuove tutti i file più grandi di 100MByte
\`\`\``,frontmatter:{},index:110,start:2107,end:2135,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:110,no:111},__clicksElements:[],__preloaded:!1}},{path:"112",name:"page-112",component:_T,meta:{slide:{raw:`
# Linux CLI 

watch - eseguire un programma periodicamente (monitoring)

- Il comando **watch** permette di eseguire un comando periodicamente e di visualizzare il suo output sullo schermo
- Quindi **watch** è molto comodo per monitorare un'attività di sistema di cui vogliamo osservare il progresso nel tempo

\`\`\`bash
$ watch < -parametri opzionali> <comando>

$ watch ls -la
Every 2,0s: ls -la                            
drwxrwxr-x   6 antonio antonio   4096 set 12 15:24 .
drwxrwxr-x 225 antonio antonio 241664 set 12 15:13 ..
drwxrwxr-x   3 antonio antonio   4096 set 12 15:24 DIR4
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
-rw-rw-r--   1 antonio antonio      0 set 12 15:22 file4
\`\`\`

<br>

- Esegue ogni 2 secondi il comando \`ls -la\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 

watch - eseguire un programma periodicamente (monitoring)

- Il comando **watch** permette di eseguire un comando periodicamente e di visualizzare il suo output sullo schermo
- Quindi **watch** è molto comodo per monitorare un'attività di sistema di cui vogliamo osservare il progresso nel tempo

\`\`\`bash
$ watch < -parametri opzionali> <comando>

$ watch ls -la
Every 2,0s: ls -la                            
drwxrwxr-x   6 antonio antonio   4096 set 12 15:24 .
drwxrwxr-x 225 antonio antonio 241664 set 12 15:13 ..
drwxrwxr-x   3 antonio antonio   4096 set 12 15:24 DIR4
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
-rw-rw-r--   1 antonio antonio      0 set 12 15:22 file4
\`\`\`

<br>

- Esegue ogni 2 secondi il comando \`ls -la\``,frontmatter:{},index:111,start:2136,end:2161,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:111,no:112},__clicksElements:[],__preloaded:!1}},{path:"113",name:"page-113",component:IT,meta:{slide:{raw:`
# Linux CLI 

watch - eseguire un programma periodicamente (monitoring)

- I parametri più importanti sono

\`\`\`bash
-d: evidenzia le differenze tra un periodo di osservazione e il successivo
-n: specifica l'intervallo di osservazione in secondi
\`\`\`

\`\`\`bash
$ watch -d -n1 ls -la
very 1,0s: ls -la                            
drwxrwxr-x   6 antonio antonio   4096 set 12 15:24 .
drwxrwxr-x 225 antonio antonio 241664 set 12 15:13 ..
drwxrwxr-x   3 antonio antonio   4096 set 12 15:24 DIR4
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
-rw-rw-r--   1 antonio antonio      0 set 12 15:22 file4
\`\`\`
<br>

- Visualizza ogni secondo l'output di ls -la evidenziandone le differenze
- Watch è il tool perfetto per il monitoring di sistema
`,title:"Linux CLI",level:1,content:`# Linux CLI 

watch - eseguire un programma periodicamente (monitoring)

- I parametri più importanti sono

\`\`\`bash
-d: evidenzia le differenze tra un periodo di osservazione e il successivo
-n: specifica l'intervallo di osservazione in secondi
\`\`\`

\`\`\`bash
$ watch -d -n1 ls -la
very 1,0s: ls -la                            
drwxrwxr-x   6 antonio antonio   4096 set 12 15:24 .
drwxrwxr-x 225 antonio antonio 241664 set 12 15:13 ..
drwxrwxr-x   3 antonio antonio   4096 set 12 15:24 DIR4
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
-rw-rw-r--   1 antonio antonio      0 set 12 15:22 file4
\`\`\`
<br>

- Visualizza ogni secondo l'output di ls -la evidenziandone le differenze
- Watch è il tool perfetto per il monitoring di sistema`,frontmatter:{},index:112,start:2162,end:2189,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:112,no:113},__clicksElements:[],__preloaded:!1}},{path:"114",name:"page-114",component:AT,meta:{slide:{raw:`
# Linux CLI 
 
chown - cambiare proprietario di un file

- **chown** permette di cambiare l'owner o proprietario di un file
- Nello specifico permette di cambiare l'utente e/o il gruppo di appartenenza di un file

\`\`\`bash
$ chown < -parametri opzionali> [Utente][:Gruppo] <file>

$ ls -la
drwxrwxr-x 3 antonio antonio 4,0K set 12 15:24 DIR4
-rw-rw-r-- 1 antonio antonio    0 set 12 15:22 file4
-rw-rw-r-- 1 antonio    antonio    0 set 16 19:16 file5

$ sudo chown root file5 #cambia l'utente proprietario del file

$ ls -la
drwxrwxr-x 3 antonio antonio 4,0K set 12 15:24 DIR4
-rw-rw-r-- 1 antonio antonio    0 set 12 15:22 file4
-rw-rw-r-- 1 root    antonio    0 set 16 19:16 file5
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
chown - cambiare proprietario di un file

- **chown** permette di cambiare l'owner o proprietario di un file
- Nello specifico permette di cambiare l'utente e/o il gruppo di appartenenza di un file

\`\`\`bash
$ chown < -parametri opzionali> [Utente][:Gruppo] <file>

$ ls -la
drwxrwxr-x 3 antonio antonio 4,0K set 12 15:24 DIR4
-rw-rw-r-- 1 antonio antonio    0 set 12 15:22 file4
-rw-rw-r-- 1 antonio    antonio    0 set 16 19:16 file5

$ sudo chown root file5 #cambia l'utente proprietario del file

$ ls -la
drwxrwxr-x 3 antonio antonio 4,0K set 12 15:24 DIR4
-rw-rw-r-- 1 antonio antonio    0 set 12 15:22 file4
-rw-rw-r-- 1 root    antonio    0 set 16 19:16 file5
\`\`\``,frontmatter:{},index:113,start:2190,end:2214,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:113,no:114},__clicksElements:[],__preloaded:!1}},{path:"115",name:"page-115",component:jT,meta:{slide:{raw:`
# Linux CLI 
 
chown - cambiare proprietario di un file


\`\`\`bash
$ sudo chown root:backup file5 # cambia il gruppo di appartenenza del file

$ ls -la
drwxrwxr-x 3 antonio antonio 4,0K set 12 15:24 DIR4
-rw-rw-r-- 1 antonio antonio    0 set 12 15:22 file4
-rw-rw-r-- 1 root    backup     0 set 16 19:16 file5
\`\`\`

<br>

- **-R** è il parametro più importante che cambia l'ownership ricorsivamente di tutti i file e directory 

<br>

\`\`\`bash
$ chown -R antonio:backup DIR4

 $ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
drwxrwxr-x 2 antonio antonio 4,0K set 12 15:24 DIR3
drwxrwxr-x 3 antonio backup  4,0K set 12 15:24 DIR4
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
chown - cambiare proprietario di un file


\`\`\`bash
$ sudo chown root:backup file5 # cambia il gruppo di appartenenza del file

$ ls -la
drwxrwxr-x 3 antonio antonio 4,0K set 12 15:24 DIR4
-rw-rw-r-- 1 antonio antonio    0 set 12 15:22 file4
-rw-rw-r-- 1 root    backup     0 set 16 19:16 file5
\`\`\`

<br>

- **-R** è il parametro più importante che cambia l'ownership ricorsivamente di tutti i file e directory 

<br>

\`\`\`bash
$ chown -R antonio:backup DIR4

 $ ls -la
drwxrwxr-x 2 antonio antonio 4,0K set 11 19:11 DIR11
drwxrwxr-x 2 antonio antonio 4,0K set 10 12:37 DIR2
drwxrwxr-x 2 antonio antonio 4,0K set 12 15:24 DIR3
drwxrwxr-x 3 antonio backup  4,0K set 12 15:24 DIR4
\`\`\``,frontmatter:{},index:114,start:2215,end:2246,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:114,no:115},__clicksElements:[],__preloaded:!1}},{path:"116",name:"page-116",component:VT,meta:{slide:{raw:`
# Linux CLI 
 
chmod - cambiare permessi di un file

- Il comando **chmod** permette di cambiare i permessi di un file di cui si è proprietari

\`\`\`bash
$ chmod < -parametri opzionali> <octal mode> <file>

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
drwxrwxr-x   2 antonio antonio   4096 set 12 15:24 DIR3
drwxrwxr-x   3 antonio backup    4096 set 12 15:24 DIR4
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2

$ chmod 551 file1

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
drwxrwxr-x   2 antonio antonio   4096 set 12 15:24 DIR3
drwxrwxr-x   3 antonio backup    4096 set 12 15:24 DIR4
-r-xr-x--x   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
chmod - cambiare permessi di un file

- Il comando **chmod** permette di cambiare i permessi di un file di cui si è proprietari

\`\`\`bash
$ chmod < -parametri opzionali> <octal mode> <file>

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
drwxrwxr-x   2 antonio antonio   4096 set 12 15:24 DIR3
drwxrwxr-x   3 antonio backup    4096 set 12 15:24 DIR4
-rw-rw-r--   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2

$ chmod 551 file1

$ ls -la
drwxrwxr-x   2 antonio antonio   4096 set 10 12:37 DIR2
drwxrwxr-x   2 antonio antonio   4096 set 12 15:24 DIR3
drwxrwxr-x   3 antonio backup    4096 set 12 15:24 DIR4
-r-xr-x--x   1 antonio antonio    579 set 12 15:21 file1
-rw-rw-r--   1 antonio antonio      9 set 12 15:04 file2
\`\`\``,frontmatter:{},index:115,start:2247,end:2274,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:115,no:116},__clicksElements:[],__preloaded:!1}},{path:"117",name:"page-117",component:YT,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Gestione dei processi
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Gestione dei processi
</Cover>`,frontmatter:{},index:116,start:2275,end:2282,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:116,no:117},__clicksElements:[],__preloaded:!1}},{path:"118",name:"page-118",component:tM,meta:{slide:{raw:`
# Linux CLI 
 
ps - visualizza i processi di sistema

- Il comando **ps** visualizza una snapshot dei processi in esecuzione sul sistema
- Ha 32 parametri opzionali ma i più comuni sono

\`\`\`bash
-a: visualizza tutti i processi in esecuzione
-u: visualizza il nome del proprietario dei processi
-x: visualizza anche i processi root
\`\`\`

\`\`\`bash
$ ps aux o ps -aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.0 166600 11996 ?        Ss   set14   0:04 /sbin/init splash
root           2  0.0  0.0      0     0 ?        S    set14   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   set14   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   set14   0:00 [rcu_par_gp]
antonio     3329  0.0  0.1 271324 19684 ?        S<sl set14   0:08 /usr/bin/wireplumber
antonio     3330  0.0  0.1  59836 25776 ?        S<sl set14   0:17 /usr/bin/pipewire-pulse
antonio     3332  0.0  0.0 325608  9352 ?        SNLl set14   0:03 /usr/bin/gnome-keyring-daemon
antonio     3334  0.0  0.0   9672  4280 ?        SNs  set14   0:00 /usr/bin/dbus-broker-launch
antonio     3338  0.0  0.1  30732 28020 ?        SN   set14   0:09 dbus-broker --log 4 
antonio     3340  0.0  0.0 250744  8516 ?        SNsl set14   0:00 /usr/libexec/gvfsd
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
ps - visualizza i processi di sistema

- Il comando **ps** visualizza una snapshot dei processi in esecuzione sul sistema
- Ha 32 parametri opzionali ma i più comuni sono

\`\`\`bash
-a: visualizza tutti i processi in esecuzione
-u: visualizza il nome del proprietario dei processi
-x: visualizza anche i processi root
\`\`\`

\`\`\`bash
$ ps aux o ps -aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.0 166600 11996 ?        Ss   set14   0:04 /sbin/init splash
root           2  0.0  0.0      0     0 ?        S    set14   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   set14   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   set14   0:00 [rcu_par_gp]
antonio     3329  0.0  0.1 271324 19684 ?        S<sl set14   0:08 /usr/bin/wireplumber
antonio     3330  0.0  0.1  59836 25776 ?        S<sl set14   0:17 /usr/bin/pipewire-pulse
antonio     3332  0.0  0.0 325608  9352 ?        SNLl set14   0:03 /usr/bin/gnome-keyring-daemon
antonio     3334  0.0  0.0   9672  4280 ?        SNs  set14   0:00 /usr/bin/dbus-broker-launch
antonio     3338  0.0  0.1  30732 28020 ?        SN   set14   0:09 dbus-broker --log 4 
antonio     3340  0.0  0.0 250744  8516 ?        SNsl set14   0:00 /usr/libexec/gvfsd
\`\`\``,frontmatter:{},index:117,start:2283,end:2312,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:117,no:118},__clicksElements:[],__preloaded:!1}},{path:"119",name:"page-119",component:rM,meta:{slide:{raw:`
# Linux CLI 
 
top - monitor dei processi

- Il comando **top** permette di monitorare in realtime lo stato dei processi e del sistema

\`\`\`bash
$ top o top -d1 (-d imposta la frequenza di aggiornamento in secondi)
top - 19:33:42 up 2 days, 11:19,  1 user,  load average: 0,99, 0,79, 0,76
Tasks: 324 total,   1 running, 323 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0,8 us,  0,7 sy,  0,1 ni, 98,2 id,  0,2 wa,  0,0 hi,  0,0 si,  0,0 st
MiB Mem :  15791,6 total,   1786,3 free,   3292,2 used,  10713,1 buff/cache
MiB Swap:  15792,0 total,  15791,7 free,      0,2 used.   7012,9 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   3554 antonio   15  -5 9759148 449940 140404 S   7,0   2,8  70:34.56 gnome-shell
   3376 antonio   15  -5 1576484 138616  74300 S   4,0   0,9  34:09.73 Xorg     
 127381 antonio   15  -5  801916  81964  50044 S   2,3   0,5   0:09.48 terminator
    588 root      29   9   86268   6220   5644 S   0,3   0,0   0:37.69 system76-power
   3715 antonio   25   5  325420  13064   7372 S   0,3   0,1   4:46.58 ibus-daemon
 118065 antonio   25   5 1357808  98500  57336 S   0,3   0,6   0:09.93 warpinator
 128253 antonio   25   5 1122,0g 177448 130300 S   0,3   1,1   0:28.34 code  
      1 root      20   0  166600  11996   8436 S   0,0   0,1   0:04.89 systemd 
      2 root      20   0       0      0      0 S   0,0   0,0   0:00.11 kthreadd 
      3 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 rcu_gp
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
top - monitor dei processi

- Il comando **top** permette di monitorare in realtime lo stato dei processi e del sistema

\`\`\`bash
$ top o top -d1 (-d imposta la frequenza di aggiornamento in secondi)
top - 19:33:42 up 2 days, 11:19,  1 user,  load average: 0,99, 0,79, 0,76
Tasks: 324 total,   1 running, 323 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0,8 us,  0,7 sy,  0,1 ni, 98,2 id,  0,2 wa,  0,0 hi,  0,0 si,  0,0 st
MiB Mem :  15791,6 total,   1786,3 free,   3292,2 used,  10713,1 buff/cache
MiB Swap:  15792,0 total,  15791,7 free,      0,2 used.   7012,9 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   3554 antonio   15  -5 9759148 449940 140404 S   7,0   2,8  70:34.56 gnome-shell
   3376 antonio   15  -5 1576484 138616  74300 S   4,0   0,9  34:09.73 Xorg     
 127381 antonio   15  -5  801916  81964  50044 S   2,3   0,5   0:09.48 terminator
    588 root      29   9   86268   6220   5644 S   0,3   0,0   0:37.69 system76-power
   3715 antonio   25   5  325420  13064   7372 S   0,3   0,1   4:46.58 ibus-daemon
 118065 antonio   25   5 1357808  98500  57336 S   0,3   0,6   0:09.93 warpinator
 128253 antonio   25   5 1122,0g 177448 130300 S   0,3   1,1   0:28.34 code  
      1 root      20   0  166600  11996   8436 S   0,0   0,1   0:04.89 systemd 
      2 root      20   0       0      0      0 S   0,0   0,0   0:00.11 kthreadd 
      3 root       0 -20       0      0      0 I   0,0   0,0   0:00.00 rcu_gp
\`\`\``,frontmatter:{},index:118,start:2313,end:2341,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:118,no:119},__clicksElements:[],__preloaded:!1}},{path:"120",name:"page-120",component:hM,meta:{slide:{raw:`
# Linux CLI 
 
kill - inviare un segnale ad un processo (uccidere un processo)

- Il comando **kill** server per inviare un segnale ad un processo
- Il segnale più comune è quello nominato **SIGKILL** che termina e uccide un process

<br>

\`\`\`bash
$ kill -9 <process id>  # uccide il processo identificato da id

$ kill -9 132480
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
kill - inviare un segnale ad un processo (uccidere un processo)

- Il comando **kill** server per inviare un segnale ad un processo
- Il segnale più comune è quello nominato **SIGKILL** che termina e uccide un process

<br>

\`\`\`bash
$ kill -9 <process id>  # uccide il processo identificato da id

$ kill -9 132480
\`\`\``,frontmatter:{},index:119,start:2342,end:2358,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:119,no:120},__clicksElements:[],__preloaded:!1}},{path:"121",name:"page-121",component:wM,meta:{slide:{raw:`
# Linux CLI 
 
free - visualizzare la memoria disponibile

- Visualizza lo statod ella memoria RAM indicando la capacità occupata e quella disponibile

<br>

\`\`\`bash
$ free -h

               buff/cache condivisi gratuiti totali utilizzati disponibili
Mem:            15Gi       3,1Gi       1,9Gi       4,2Gi        10Gi       7,0Gi
Swap:           15Gi       0,0Ki        15Gi
\`\`\``,title:"Linux CLI",level:1,content:`# Linux CLI 
 
free - visualizzare la memoria disponibile

- Visualizza lo statod ella memoria RAM indicando la capacità occupata e quella disponibile

<br>

\`\`\`bash
$ free -h

               buff/cache condivisi gratuiti totali utilizzati disponibili
Mem:            15Gi       3,1Gi       1,9Gi       4,2Gi        10Gi       7,0Gi
Swap:           15Gi       0,0Ki        15Gi
\`\`\``,frontmatter:{},index:120,start:2359,end:2375,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:120,no:121},__clicksElements:[],__preloaded:!1}},{path:"122",name:"page-122",component:IM,meta:{slide:{raw:`
&nbsp;

<Cover fs=100px>
Comandi di sistema
</Cover>
`,content:`&nbsp;

<Cover fs=100px>
Comandi di sistema
</Cover>`,frontmatter:{},index:121,start:2376,end:2383,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:121,no:122},__clicksElements:[],__preloaded:!1}},{path:"123",name:"page-123",component:TM,meta:{slide:{raw:`
# Linux CLI 
 
sudo - eseguire un comando come un'altro utente

- In alcuni casi è necessario eseguire un comando con i privilegi di root
- Tuttavia in un sistema, a meno che noi siamo root, non conosciamo la password
- Pertanto l'amministratore può decidere di fornirci i permessi per eseguire alcuni o tutti i comandi come root
- Per far ciò si usa il comando **sudo**

<br>

\`\`\`bash
$ sudo <comando> # esegue comando come root

$ sudo ls -la /root
drwx------  8 root root  4096 ago 10 17:18 .
drwxr-xr-x 18 root root  4096 ago 29 11:42 ..
-rw-------  1 root root 32037 set 16 19:19 .bash_history
-rw-r--r--  1 root root  3106 ott 15  2021 .bashrc
drwx------  6 root root  4096 ago  7 15:11 .cache
drwxr-xr-x  7 root root  4096 ago 24 18:05 .config
drwx------  3 root root  4096 nov 18  2022 .gnupg
drwx------  3 root root  4096 lug  3  2022 .launchpadlib
-rw-------  1 root root    48 ago 10 17:18 .lesshst

\`\`\`
  `,title:"Linux CLI",level:1,content:`# Linux CLI 
 
sudo - eseguire un comando come un'altro utente

- In alcuni casi è necessario eseguire un comando con i privilegi di root
- Tuttavia in un sistema, a meno che noi siamo root, non conosciamo la password
- Pertanto l'amministratore può decidere di fornirci i permessi per eseguire alcuni o tutti i comandi come root
- Per far ciò si usa il comando **sudo**

<br>

\`\`\`bash
$ sudo <comando> # esegue comando come root

$ sudo ls -la /root
drwx------  8 root root  4096 ago 10 17:18 .
drwxr-xr-x 18 root root  4096 ago 29 11:42 ..
-rw-------  1 root root 32037 set 16 19:19 .bash_history
-rw-r--r--  1 root root  3106 ott 15  2021 .bashrc
drwx------  6 root root  4096 ago  7 15:11 .cache
drwxr-xr-x  7 root root  4096 ago 24 18:05 .config
drwx------  3 root root  4096 nov 18  2022 .gnupg
drwx------  3 root root  4096 lug  3  2022 .launchpadlib
-rw-------  1 root root    48 ago 10 17:18 .lesshst

\`\`\``,frontmatter:{},index:122,start:2384,end:2412,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:122,no:123},__clicksElements:[],__preloaded:!1}},{path:"124",name:"page-124",component:DM,meta:{slide:{raw:`
# Linux CLI 
 
Il packet manager APT

- Fin dagli albori, ogni distribuzione di linux fornisce un packet manager più o meno sofisticato
- Windows non ha mai fornito un packet manager (esiste qualche scimmiottamento in tempi recenti)
- Le distribuzioni derivate da Debiam incorporano tutte il packet manager \`APT\`
- **APT** permette con estrema semplicità, e gestendo le dipendenze per noi,di
  - cercare
  - installare
  - rimuovere

- ogni tipo di software che vogliamo usare su linux

`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
Il packet manager APT

- Fin dagli albori, ogni distribuzione di linux fornisce un packet manager più o meno sofisticato
- Windows non ha mai fornito un packet manager (esiste qualche scimmiottamento in tempi recenti)
- Le distribuzioni derivate da Debiam incorporano tutte il packet manager \`APT\`
- **APT** permette con estrema semplicità, e gestendo le dipendenze per noi,di
  - cercare
  - installare
  - rimuovere

- ogni tipo di software che vogliamo usare su linux`,frontmatter:{},index:123,start:2413,end:2429,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:123,no:124},__clicksElements:[],__preloaded:!1}},{path:"125",name:"page-125",component:HM,meta:{slide:{raw:`
# Linux CLI 
 
apt search - ricerchiamo un programma da installare

\`\`\`bash
$ apt search <stringa> # cerca nel repository tutti i software e paccketti che includono stringa

$ apt search figlet                                                     
Ordinamento... Fatto
Ricerca sul testo... Fatto
figlet/jammy 2.2.5-3 amd64
  crea striscioni ASCII con grandi caratteri da testo normale

irssi-scripts/jammy,jammy 20201016 all
  raccolta di script per irssi

php-text-figlet/jammy,jammy 1.0.2-5 all
  motore per usare tipi di carattere FIGlet per fare il rendering di testo

presentty/jammy,jammy 0.2.1-1.1 all
  software per presentazioni basato su console

python3-pyfiglet/jammy,jammy 0.8.0+dfsg-1 all
  port per Python 3 della specifica FIGlet
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
apt search - ricerchiamo un programma da installare

\`\`\`bash
$ apt search <stringa> # cerca nel repository tutti i software e paccketti che includono stringa

$ apt search figlet                                                     
Ordinamento... Fatto
Ricerca sul testo... Fatto
figlet/jammy 2.2.5-3 amd64
  crea striscioni ASCII con grandi caratteri da testo normale

irssi-scripts/jammy,jammy 20201016 all
  raccolta di script per irssi

php-text-figlet/jammy,jammy 1.0.2-5 all
  motore per usare tipi di carattere FIGlet per fare il rendering di testo

presentty/jammy,jammy 0.2.1-1.1 all
  software per presentazioni basato su console

python3-pyfiglet/jammy,jammy 0.8.0+dfsg-1 all
  port per Python 3 della specifica FIGlet
\`\`\``,frontmatter:{},index:124,start:2430,end:2457,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:124,no:125},__clicksElements:[],__preloaded:!1}},{path:"126",name:"page-126",component:UM,meta:{slide:{raw:`
# Linux CLI 
 
apt install - installare un software

\`\`\`bash
$ sudo apt install figlet # installa il paccketto figlet

Lettura elenco dei pacchetti... Fatto
Generazione albero delle dipendenze... Fatto
Lettura informazioni sullo stato... Fatto   
I seguenti pacchetti NUOVI saranno installati:
  figlet
0 aggiornati, 1 installati, 0 da rimuovere e 579 non aggiornati.
È necessario scaricare 133 kB di archivi.
Dopo quest'operazione, verranno occupati 752 kB di spazio su disco.
Scaricamento di:1 http://apt.pop-os.org/ubuntu jammy/universe amd64 figlet amd64 2.2.5-3 [133 kB]
Recuperati 133 kB in 0s (799 kB/s)
Selezionato il pacchetto figlet non precedentemente selezionato.
(Lettura del database... 381484 file e directory attualmente installati.)
Preparativi per estrarre .../figlet_2.2.5-3_amd64.deb...
Estrazione di figlet (2.2.5-3)...
Configurazione di figlet (2.2.5-3)...
update-alternatives: viene usato /usr/bin/figlet-figlet per fornire /usr/bin/figlet
Elaborazione dei trigger per man-db (2.10.2-1)...
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
apt install - installare un software

\`\`\`bash
$ sudo apt install figlet # installa il paccketto figlet

Lettura elenco dei pacchetti... Fatto
Generazione albero delle dipendenze... Fatto
Lettura informazioni sullo stato... Fatto   
I seguenti pacchetti NUOVI saranno installati:
  figlet
0 aggiornati, 1 installati, 0 da rimuovere e 579 non aggiornati.
È necessario scaricare 133 kB di archivi.
Dopo quest'operazione, verranno occupati 752 kB di spazio su disco.
Scaricamento di:1 http://apt.pop-os.org/ubuntu jammy/universe amd64 figlet amd64 2.2.5-3 [133 kB]
Recuperati 133 kB in 0s (799 kB/s)
Selezionato il pacchetto figlet non precedentemente selezionato.
(Lettura del database... 381484 file e directory attualmente installati.)
Preparativi per estrarre .../figlet_2.2.5-3_amd64.deb...
Estrazione di figlet (2.2.5-3)...
Configurazione di figlet (2.2.5-3)...
update-alternatives: viene usato /usr/bin/figlet-figlet per fornire /usr/bin/figlet
Elaborazione dei trigger per man-db (2.10.2-1)...
\`\`\``,frontmatter:{},index:125,start:2458,end:2485,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:125,no:126},__clicksElements:[],__preloaded:!1}},{path:"127",name:"page-127",component:JM,meta:{slide:{raw:`
# Linux CLI 
 
apt remove - disinstallare un software

\`\`\`bash
$ sudo apt remove figlet # rimuove il paccketto figlet

Lettura elenco dei pacchetti... Fatto
Generazione albero delle dipendenze... Fatto
Lettura informazioni sullo stato... Fatto   
I seguenti pacchetti saranno RIMOSSI:
  figlet
0 aggiornati, 0 installati, 1 da rimuovere e 579 non aggiornati.
Dopo quest'operazione, verranno liberati 752 kB di spazio su disco.
Continuare? [S/n] s
(Lettura del database... 381556 file e directory attualmente installati.)
Rimozione di figlet (2.2.5-3)...
update-alternatives: viene usato /usr/bin/figlet-toilet per fornire /usr/bin/figlet
Elaborazione dei trigger per man-db (2.10.2-1)...
\`\`\`
`,title:"Linux CLI",level:1,content:`# Linux CLI 
 
apt remove - disinstallare un software

\`\`\`bash
$ sudo apt remove figlet # rimuove il paccketto figlet

Lettura elenco dei pacchetti... Fatto
Generazione albero delle dipendenze... Fatto
Lettura informazioni sullo stato... Fatto   
I seguenti pacchetti saranno RIMOSSI:
  figlet
0 aggiornati, 0 installati, 1 da rimuovere e 579 non aggiornati.
Dopo quest'operazione, verranno liberati 752 kB di spazio su disco.
Continuare? [S/n] s
(Lettura del database... 381556 file e directory attualmente installati.)
Rimozione di figlet (2.2.5-3)...
update-alternatives: viene usato /usr/bin/figlet-toilet per fornire /usr/bin/figlet
Elaborazione dei trigger per man-db (2.10.2-1)...
\`\`\``,frontmatter:{},index:126,start:2486,end:2508,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:126,no:127},__clicksElements:[],__preloaded:!1}},{path:"128",name:"page-128",component:tO,meta:{slide:{raw:`
<img src="/media/hh01.webp" style="position:relative;top:-20px;">
`,content:'<img src="/media/hh01.webp" style="position:relative;top:-20px;">',frontmatter:{},index:127,start:2509,end:2512,noteHTML:"",filepath:"/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/slides.md",id:127,no:128},__clicksElements:[],__preloaded:!1}},{path:"129",component:fI,meta:{layout:"end"}}],Ye=sO,ro=[{name:"play",path:"/",component:Ny,children:[...Ye]},{name:"print",path:"/print",component:pI},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(s){if(!lo.remote||lo.remote===s.query.password)return!0;if(lo.remote&&s.query.password===void 0){const o=prompt("Enter password");if(lo.remote===o)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};ro.push({path:"/presenter/print",component:()=>Ot(()=>import("./PresenterPrint-ecef2872.js"),["assets/PresenterPrint-ecef2872.js","assets/NoteDisplay-5be7ef29.js"])}),ro.push({name:"notes",path:"/notes",component:()=>Ot(()=>import("./NotesView-589de136.js"),["assets/NotesView-589de136.js","assets/NoteDisplay-5be7ef29.js"]),beforeEnter:e}),ro.push({name:"presenter",path:"/presenter/:no",component:()=>Ot(()=>import("./Presenter-342793f4.js"),["assets/Presenter-342793f4.js","assets/NoteDisplay-5be7ef29.js","assets/DrawingControls-f23d4ca2.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:e}),ro.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const wn=xk({history:kb("/3/linux_cli/"),routes:ro});function oO(e,s,{mode:o="replace"}={}){return N({get(){const a=wn.currentRoute.value.query[e];return a==null?s??null:Array.isArray(a)?a.filter(Boolean):a},set(a){an(()=>{wn[O(o)]({query:{...wn.currentRoute.value.query,[e]:a}})})}})}const Jm=J(0);an(()=>{wn.afterEach(async()=>{await an(),Jm.value+=1})});const Xm=J(0),jn=N(()=>wn.currentRoute.value),Ds=N(()=>jn.value.query.print!==void 0),aO=N(()=>jn.value.query.print==="clicks"),mt=N(()=>jn.value.query.embedded!==void 0),bn=N(()=>jn.value.path.startsWith("/presenter")),iO=N(()=>jn.value.path.startsWith("/notes")),vo=N(()=>Ds.value&&!aO.value),jl=N(()=>jn.value.query.password),lO=N(()=>!bn.value&&(!Ee.remote||jl.value===Ee.remote)),Ku=oO("clicks","0"),rO=N(()=>Ye.length-1),cO=N(()=>jn.value.path),Ve=N(()=>parseInt(cO.value.split(/\//g).slice(-1)[0])||1);N(()=>mi(Ve.value));const mn=N(()=>Ye.find(e=>e.path===`${Ve.value}`));N(()=>{var e,s,o;return(o=(s=(e=mn.value)==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:o.id});N(()=>{var e,s;return((s=(e=mn.value)==null?void 0:e.meta)==null?void 0:s.layout)||(Ve.value===1?"cover":"default")});const Fi=N(()=>Ye.find(e=>e.path===`${Math.min(Ye.length,Ve.value+1)}`)),uO=N(()=>Ye.find(e=>e.path===`${Math.max(1,Ve.value-1)}`)),pO=N(()=>{var e,s;return Jm.value,((s=(e=mn.value)==null?void 0:e.meta)==null?void 0:s.__clicksElements)||[]}),Dn=N({get(){if(vo.value)return 99999;let e=+(Ku.value||0);return isNaN(e)&&(e=0),e},set(e){Ku.value=e.toString()}}),Va=N(()=>{var e,s;return+(((s=(e=mn.value)==null?void 0:e.meta)==null?void 0:s.clicks)??pO.value.length)}),dO=N(()=>Ve.value<Ye.length-1||Dn.value<Va.value),mO=N(()=>Ve.value>1||Dn.value>0),fO=N(()=>Ye.filter(e=>{var s,o;return(o=(s=e.meta)==null?void 0:s.slide)==null?void 0:o.title}).reduce((e,s)=>(Or(e,s),e),[])),hO=N(()=>zr(fO.value,mn.value));N(()=>Pr(hO.value));const _O=N(()=>xO(Xm.value,mn.value,uO.value));be(mn,(e,s)=>{Xm.value=Number(e==null?void 0:e.path)-Number(s==null?void 0:s.path)});function Pt(){Va.value<=Dn.value?zo():Dn.value+=1}async function Dt(){Dn.value<=0?await Po():Dn.value-=1}function mi(e){return bn.value?`/presenter/${e}`:`/${e}`}function zo(){const e=Math.min(Ye.length,Ve.value+1);return Ns(e)}async function Po(e=!0){const s=Math.max(1,Ve.value-1);await Ns(s),e&&Va.value&&wn.replace({query:{...jn.value.query,clicks:Va.value}})}function Ns(e,s){return wn.push({path:mi(e),query:{...jn.value.query,clicks:s}})}function gO(e){const s=J(0),{direction:o,distanceX:a,distanceY:i}=Hv(e,{onSwipeStart(l){l.pointerType==="touch"&&(To.value||(s.value=xl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!s.value||To.value)return;const r=Math.abs(a.value),c=Math.abs(i.value);r/window.innerWidth>.3||r>100?o.value==="left"?Pt():Dt():(c/window.innerHeight>.4||c>200)&&(o.value==="down"?Po():zo())}})}async function Kl(){const{saveAs:e}=await Ot(()=>import("./FileSaver.min-23a5d44b.js").then(s=>s.F),[]);e(typeof Ee.download=="string"?Ee.download:Ee.exportFilename?`${Ee.exportFilename}.pdf`:"/3/linux_cli/slidev-exported.pdf",`${Ee.title}.pdf`)}async function vO(e){var s,o;if(e==null){const a=(o=(s=mn.value)==null?void 0:s.meta)==null?void 0:o.slide;if(!(a!=null&&a.filepath))return!1;e=`${a.filepath}:${a.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Or(e,s,o=1){var i,l,r,c,u;const a=(l=(i=s.meta)==null?void 0:i.slide)==null?void 0:l.level;a&&a>o&&e.length>0?Or(e[e.length-1].children,s,o+1):e.push({children:[],level:o,path:s.path,hideInToc:!!((r=s.meta)!=null&&r.hideInToc),title:(u=(c=s.meta)==null?void 0:c.slide)==null?void 0:u.title})}function zr(e,s,o=!1,a){return e.map(i=>{const l={...i,active:i.path===(s==null?void 0:s.path),hasActiveParent:o};return l.children.length>0&&(l.children=zr(l.children,s,l.active||l.hasActiveParent,l)),a&&(l.active||l.activeParent)&&(a.activeParent=!0),l})}function Pr(e,s=1){return e.filter(o=>!o.hideInToc).map(o=>({...o,children:Pr(o.children,s+1)}))}const bO={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function kO(e,s=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let o=e.name.includes("|")?e.name:bO[e.name]||e.name;if(o.includes("|")){const[a,i]=o.split("|").map(l=>l.trim());o=s?i:a}if(o)return{...e,name:o}}function xO(e,s,o){var i,l;let a=e>0?(i=o==null?void 0:o.meta)==null?void 0:i.transition:(l=s==null?void 0:s.meta)==null?void 0:l.transition;return a||(a=Ee.transition),kO(a,e<0)}function wO(){const e=Ee.titleTemplate.replace("%s",Ee.title||"Slidev");Wd({title:e,htmlAttrs:Ee.htmlAttrs}),v0(`${e} - shared`),w0(`${e} - drawings`);const s=`${location.origin}_${d0()}`;function o(){iO.value||!bn.value&&!p0.includes(location.host.split(":")[0])||(bn.value?(Ys("page",+Ve.value),Ys("clicks",Dn.value)):(Ys("viewerPage",+Ve.value),Ys("viewerClicks",Dn.value)),Ys("lastUpdate",{id:s,type:bn.value?"presenter":"viewer",time:new Date().getTime()}))}wn.afterEach(o),be(Dn,o),b0(a=>{var l;wn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((l=a.lastUpdate)==null?void 0:l.type)==="presenter"&&(+a.page!=+Ve.value||+Dn.value!=+a.clicks)&&wn.replace({path:mi(a.page),query:{...wn.currentRoute.value.query,clicks:a.clicks||0}})})}const yO=Me({__name:"App",setup(e){return L(S),wO(),(s,o)=>{const a=Oa("RouterView"),i=Oa("StarportCarrier");return b(),ie(Ae,null,[A(a),A(i)],64)}}}),$O=R(yO,[["__file","/home/mancusoa/WORK/ITI_Agnelli/Materie/slidev/node_modules/@slidev/client/App.vue"]]);function ji(e){return e!==null&&typeof e=="object"}function Hl(e,s,o=".",a){if(!ji(s))return Hl(e,{},o,a);const i=Object.assign({},s);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const r=e[l];r!=null&&(a&&a(i,l,r,o)||(Array.isArray(r)&&Array.isArray(i[l])?i[l]=[...r,...i[l]]:ji(r)&&ji(i[l])?i[l]=Hl(r,i[l],(o?`${o}.`:"")+l.toString(),a):i[l]=r))}return i}function IO(e){return(...s)=>s.reduce((o,a)=>Hl(o,a,"",e),{})}const LO=IO(),ef=1/60*1e3,CO=typeof performance<"u"?()=>performance.now():()=>Date.now(),nf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(CO()),ef);function SO(e){let s=[],o=[],a=0,i=!1,l=!1;const r=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?s:o;return p&&r.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(a=s.length)),u},cancel:u=>{const p=o.indexOf(u);p!==-1&&o.splice(p,1),r.delete(u)},process:u=>{if(i){l=!0;return}if(i=!0,[s,o]=[o,s],o.length=0,a=s.length,a)for(let p=0;p<a;p++){const d=s[p];d(u),r.has(d)&&(c.schedule(d),e())}i=!1,l&&(l=!1,c.process(u))}};return c}const RO=40;let Wl=!0,Do=!1,Bl=!1;const Os={delta:0,timestamp:0},Uo=["read","update","preRender","render","postRender"],fi=Uo.reduce((e,s)=>(e[s]=SO(()=>Do=!0),e),{}),ql=Uo.reduce((e,s)=>{const o=fi[s];return e[s]=(a,i=!1,l=!1)=>(Do||TO(),o.schedule(a,i,l)),e},{}),EO=Uo.reduce((e,s)=>(e[s]=fi[s].cancel,e),{});Uo.reduce((e,s)=>(e[s]=()=>fi[s].process(Os),e),{});const AO=e=>fi[e].process(Os),tf=e=>{Do=!1,Os.delta=Wl?ef:Math.max(Math.min(e-Os.timestamp,RO),1),Os.timestamp=e,Bl=!0,Uo.forEach(AO),Bl=!1,Do&&(Wl=!1,nf(tf))},TO=()=>{Do=!0,Wl=!0,Bl||nf(tf)},sf=()=>Os;function of(e,s){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&s.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)s.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]]);return o}var Dr=function(){},No=function(){};Dr=function(e,s){!e&&typeof console<"u"&&console.warn(s)},No=function(e,s){if(!e)throw new Error(s)};const Vl=(e,s,o)=>Math.min(Math.max(o,e),s),Ki=.001,MO=.01,Hu=10,OO=.05,zO=1;function PO({duration:e=800,bounce:s=.25,velocity:o=0,mass:a=1}){let i,l;Dr(e<=Hu*1e3,"Spring duration must be 10 seconds or less");let r=1-s;r=Vl(OO,zO,r),e=Vl(MO,Hu,e/1e3),r<1?(i=p=>{const d=p*r,m=d*e,f=d-o,h=Ul(p,r),_=Math.exp(-m);return Ki-f/h*_},l=p=>{const m=p*r*e,f=m*o+o,h=Math.pow(r,2)*Math.pow(p,2)*e,_=Math.exp(-m),w=Ul(Math.pow(p,2),r);return(-i(p)+Ki>0?-1:1)*((f-h)*_)/w}):(i=p=>{const d=Math.exp(-p*e),m=(p-o)*e+1;return-Ki+d*m},l=p=>{const d=Math.exp(-p*e),m=(o-p)*(e*e);return d*m});const c=5/e,u=NO(i,l,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*a;return{stiffness:p,damping:r*2*Math.sqrt(a*p),duration:e}}}const DO=12;function NO(e,s,o){let a=o;for(let i=1;i<DO;i++)a=a-e(a)/s(a);return a}function Ul(e,s){return e*Math.sqrt(1-s*s)}const FO=["duration","bounce"],jO=["stiffness","damping","mass"];function Wu(e,s){return s.some(o=>e[o]!==void 0)}function KO(e){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Wu(e,jO)&&Wu(e,FO)){const o=PO(e);s=Object.assign(Object.assign(Object.assign({},s),o),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function Nr(e){var{from:s=0,to:o=1,restSpeed:a=2,restDelta:i}=e,l=of(e,["from","to","restSpeed","restDelta"]);const r={done:!1,value:s};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=KO(l),h=Bu,_=Bu;function w(){const y=d?-(d/1e3):0,$=o-s,I=u/(2*Math.sqrt(c*p)),k=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(o-s)/100,.4)),I<1){const M=Ul(k,I);h=E=>{const z=Math.exp(-I*k*E);return o-z*((y+I*k*$)/M*Math.sin(M*E)+$*Math.cos(M*E))},_=E=>{const z=Math.exp(-I*k*E);return I*k*z*(Math.sin(M*E)*(y+I*k*$)/M+$*Math.cos(M*E))-z*(Math.cos(M*E)*(y+I*k*$)-M*$*Math.sin(M*E))}}else if(I===1)h=M=>o-Math.exp(-k*M)*($+(y+k*$)*M);else{const M=k*Math.sqrt(I*I-1);h=E=>{const z=Math.exp(-I*k*E),B=Math.min(M*E,300);return o-z*((y+I*k*$)*Math.sinh(B)+M*$*Math.cosh(B))/M}}}return w(),{next:y=>{const $=h(y);if(f)r.done=y>=m;else{const I=_(y)*1e3,k=Math.abs(I)<=a,M=Math.abs(o-$)<=i;r.done=k&&M}return r.value=r.done?o:$,r},flipTarget:()=>{d=-d,[s,o]=[o,s],w()}}}Nr.needsInterpolation=(e,s)=>typeof e=="string"||typeof s=="string";const Bu=e=>0,af=(e,s,o)=>{const a=s-e;return a===0?1:(o-e)/a},Fr=(e,s,o)=>-o*e+o*s+e,lf=(e,s)=>o=>Math.max(Math.min(o,s),e),bo=e=>e%1?Number(e.toFixed(5)):e,Fo=/(-)?([\d]*\.?[\d])+/g,Gl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,HO=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Go(e){return typeof e=="string"}const Yo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ko=Object.assign(Object.assign({},Yo),{transform:lf(0,1)}),ma=Object.assign(Object.assign({},Yo),{default:1}),jr=e=>({test:s=>Go(s)&&s.endsWith(e)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${e}`}),Gt=jr("deg"),xo=jr("%"),xe=jr("px"),qu=Object.assign(Object.assign({},xo),{parse:e=>xo.parse(e)/100,transform:e=>xo.transform(e*100)}),Kr=(e,s)=>o=>!!(Go(o)&&HO.test(o)&&o.startsWith(e)||s&&Object.prototype.hasOwnProperty.call(o,s)),rf=(e,s,o)=>a=>{if(!Go(a))return a;const[i,l,r,c]=a.match(Fo);return{[e]:parseFloat(i),[s]:parseFloat(l),[o]:parseFloat(r),alpha:c!==void 0?parseFloat(c):1}},ls={test:Kr("hsl","hue"),parse:rf("hue","saturation","lightness"),transform:({hue:e,saturation:s,lightness:o,alpha:a=1})=>"hsla("+Math.round(e)+", "+xo.transform(bo(s))+", "+xo.transform(bo(o))+", "+bo(ko.transform(a))+")"},WO=lf(0,255),Hi=Object.assign(Object.assign({},Yo),{transform:e=>Math.round(WO(e))}),Rt={test:Kr("rgb","red"),parse:rf("red","green","blue"),transform:({red:e,green:s,blue:o,alpha:a=1})=>"rgba("+Hi.transform(e)+", "+Hi.transform(s)+", "+Hi.transform(o)+", "+bo(ko.transform(a))+")"};function BO(e){let s="",o="",a="",i="";return e.length>5?(s=e.substr(1,2),o=e.substr(3,2),a=e.substr(5,2),i=e.substr(7,2)):(s=e.substr(1,1),o=e.substr(2,1),a=e.substr(3,1),i=e.substr(4,1),s+=s,o+=o,a+=a,i+=i),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:i?parseInt(i,16)/255:1}}const Yl={test:Kr("#"),parse:BO,transform:Rt.transform},vn={test:e=>Rt.test(e)||Yl.test(e)||ls.test(e),parse:e=>Rt.test(e)?Rt.parse(e):ls.test(e)?ls.parse(e):Yl.parse(e),transform:e=>Go(e)?e:e.hasOwnProperty("red")?Rt.transform(e):ls.transform(e)},cf="${c}",uf="${n}";function qO(e){var s,o,a,i;return isNaN(e)&&Go(e)&&((o=(s=e.match(Fo))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)+((i=(a=e.match(Gl))===null||a===void 0?void 0:a.length)!==null&&i!==void 0?i:0)>0}function pf(e){typeof e=="number"&&(e=`${e}`);const s=[];let o=0;const a=e.match(Gl);a&&(o=a.length,e=e.replace(Gl,cf),s.push(...a.map(vn.parse)));const i=e.match(Fo);return i&&(e=e.replace(Fo,uf),s.push(...i.map(Yo.parse))),{values:s,numColors:o,tokenised:e}}function df(e){return pf(e).values}function mf(e){const{values:s,numColors:o,tokenised:a}=pf(e),i=s.length;return l=>{let r=a;for(let c=0;c<i;c++)r=r.replace(c<o?cf:uf,c<o?vn.transform(l[c]):bo(l[c]));return r}}const VO=e=>typeof e=="number"?0:e;function UO(e){const s=df(e);return mf(e)(s.map(VO))}const Zo={test:qO,parse:df,createTransformer:mf,getAnimatableNone:UO},GO=new Set(["brightness","contrast","saturate","opacity"]);function YO(e){let[s,o]=e.slice(0,-1).split("(");if(s==="drop-shadow")return e;const[a]=o.match(Fo)||[];if(!a)return e;const i=o.replace(a,"");let l=GO.has(s)?1:0;return a!==o&&(l*=100),s+"("+l+i+")"}const ZO=/([a-z-]*)\(.*?\)/g,Zl=Object.assign(Object.assign({},Zo),{getAnimatableNone:e=>{const s=e.match(ZO);return s?s.map(YO).join(" "):e}});function Wi(e,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(s-e)*6*o:o<1/2?s:o<2/3?e+(s-e)*(2/3-o)*6:e}function Vu({hue:e,saturation:s,lightness:o,alpha:a}){e/=360,s/=100,o/=100;let i=0,l=0,r=0;if(!s)i=l=r=o;else{const c=o<.5?o*(1+s):o+s-o*s,u=2*o-c;i=Wi(u,c,e+1/3),l=Wi(u,c,e),r=Wi(u,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(l*255),blue:Math.round(r*255),alpha:a}}const QO=(e,s,o)=>{const a=e*e,i=s*s;return Math.sqrt(Math.max(0,o*(i-a)+a))},JO=[Yl,Rt,ls],Uu=e=>JO.find(s=>s.test(e)),Gu=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,ff=(e,s)=>{let o=Uu(e),a=Uu(s);No(!!o,Gu(e)),No(!!a,Gu(s));let i=o.parse(e),l=a.parse(s);o===ls&&(i=Vu(i),o=Rt),a===ls&&(l=Vu(l),a=Rt);const r=Object.assign({},i);return c=>{for(const u in r)u!=="alpha"&&(r[u]=QO(i[u],l[u],c));return r.alpha=Fr(i.alpha,l.alpha,c),o.transform(r)}},XO=e=>typeof e=="number",e7=(e,s)=>o=>s(e(o)),hf=(...e)=>e.reduce(e7);function _f(e,s){return XO(e)?o=>Fr(e,s,o):vn.test(e)?ff(e,s):vf(e,s)}const gf=(e,s)=>{const o=[...e],a=o.length,i=e.map((l,r)=>_f(l,s[r]));return l=>{for(let r=0;r<a;r++)o[r]=i[r](l);return o}},n7=(e,s)=>{const o=Object.assign(Object.assign({},e),s),a={};for(const i in o)e[i]!==void 0&&s[i]!==void 0&&(a[i]=_f(e[i],s[i]));return i=>{for(const l in a)o[l]=a[l](i);return o}};function Yu(e){const s=Zo.parse(e),o=s.length;let a=0,i=0,l=0;for(let r=0;r<o;r++)a||typeof s[r]=="number"?a++:s[r].hue!==void 0?l++:i++;return{parsed:s,numNumbers:a,numRGB:i,numHSL:l}}const vf=(e,s)=>{const o=Zo.createTransformer(s),a=Yu(e),i=Yu(s);return a.numHSL===i.numHSL&&a.numRGB===i.numRGB&&a.numNumbers>=i.numNumbers?hf(gf(a.parsed,i.parsed),o):(Dr(!0,`Complex values '${e}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?s:e}`)},t7=(e,s)=>o=>Fr(e,s,o);function s7(e){if(typeof e=="number")return t7;if(typeof e=="string")return vn.test(e)?ff:vf;if(Array.isArray(e))return gf;if(typeof e=="object")return n7}function o7(e,s,o){const a=[],i=o||s7(e[0]),l=e.length-1;for(let r=0;r<l;r++){let c=i(e[r],e[r+1]);if(s){const u=Array.isArray(s)?s[r]:s;c=hf(u,c)}a.push(c)}return a}function a7([e,s],[o]){return a=>o(af(e,s,a))}function i7(e,s){const o=e.length,a=o-1;return i=>{let l=0,r=!1;if(i<=e[0]?r=!0:i>=e[a]&&(l=a-1,r=!0),!r){let u=1;for(;u<o&&!(e[u]>i||u===a);u++);l=u-1}const c=af(e[l],e[l+1],i);return s[l](c)}}function bf(e,s,{clamp:o=!0,ease:a,mixer:i}={}){const l=e.length;No(l===s.length,"Both input and output ranges must be the same length"),No(!a||!Array.isArray(a)||a.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),s=[].concat(s),e.reverse(),s.reverse());const r=o7(s,a,i),c=l===2?a7(e,r):i7(e,r);return o?u=>c(Vl(e[0],e[l-1],u)):c}const hi=e=>s=>1-e(1-s),Hr=e=>s=>s<=.5?e(2*s)/2:(2-e(2*(1-s)))/2,l7=e=>s=>Math.pow(s,e),kf=e=>s=>s*s*((e+1)*s-e),r7=e=>{const s=kf(e);return o=>(o*=2)<1?.5*s(o):.5*(2-Math.pow(2,-10*(o-1)))},xf=1.525,c7=4/11,u7=8/11,p7=9/10,wf=e=>e,Wr=l7(2),d7=hi(Wr),yf=Hr(Wr),$f=e=>1-Math.sin(Math.acos(e)),If=hi($f),m7=Hr(If),Br=kf(xf),f7=hi(Br),h7=Hr(Br),_7=r7(xf),g7=4356/361,v7=35442/1805,b7=16061/1805,Ua=e=>{if(e===1||e===0)return e;const s=e*e;return e<c7?7.5625*s:e<u7?9.075*s-9.9*e+3.4:e<p7?g7*s-v7*e+b7:10.8*e*e-20.52*e+10.72},k7=hi(Ua),x7=e=>e<.5?.5*(1-Ua(1-e*2)):.5*Ua(e*2-1)+.5;function w7(e,s){return e.map(()=>s||yf).splice(0,e.length-1)}function y7(e){const s=e.length;return e.map((o,a)=>a!==0?a/(s-1):0)}function $7(e,s){return e.map(o=>o*s)}function wa({from:e=0,to:s=1,ease:o,offset:a,duration:i=300}){const l={done:!1,value:e},r=Array.isArray(s)?s:[e,s],c=$7(a&&a.length===r.length?a:y7(r),i);function u(){return bf(c,r,{ease:Array.isArray(o)?o:w7(r,o)})}let p=u();return{next:d=>(l.value=p(d),l.done=d>=i,l),flipTarget:()=>{r.reverse(),p=u()}}}function I7({velocity:e=0,from:s=0,power:o=.8,timeConstant:a=350,restDelta:i=.5,modifyTarget:l}){const r={done:!1,value:s};let c=o*e;const u=s+c,p=l===void 0?u:l(u);return p!==u&&(c=p-s),{next:d=>{const m=-c*Math.exp(-d/a);return r.done=!(m>i||m<-i),r.value=r.done?p:p+m,r},flipTarget:()=>{}}}const Zu={keyframes:wa,spring:Nr,decay:I7};function L7(e){if(Array.isArray(e.to))return wa;if(Zu[e.type])return Zu[e.type];const s=new Set(Object.keys(e));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?wa:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?Nr:wa}function Lf(e,s,o=0){return e-s-o}function C7(e,s,o=0,a=!0){return a?Lf(s+-e,s,o):s-(e-s)+o}function S7(e,s,o,a){return a?e>=s+o:e<=-o}const R7=e=>{const s=({delta:o})=>e(o);return{start:()=>ql.update(s,!0),stop:()=>EO.update(s)}};function Cf(e){var s,o,{from:a,autoplay:i=!0,driver:l=R7,elapsed:r=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:_}=e,w=of(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=w,$,I=0,k=w.duration,M,E=!1,z=!0,B;const D=L7(w);!((o=(s=D).needsInterpolation)===null||o===void 0)&&o.call(s,a,y)&&(B=bf([0,100],[a,y],{clamp:!1}),a=0,y=100);const U=D(Object.assign(Object.assign({},w),{from:a,to:y}));function le(){I++,u==="reverse"?(z=I%2===0,r=C7(r,k,p,z)):(r=Lf(r,k,p),u==="mirror"&&U.flipTarget()),E=!1,h&&h()}function me(){$.stop(),f&&f()}function X(ke){if(z||(ke=-ke),r+=ke,!E){const ye=U.next(Math.max(0,r));M=ye.value,B&&(M=B(M)),E=z?ye.done:r<=0}_==null||_(M),E&&(I===0&&(k??(k=r)),I<c?S7(r,k,p,z)&&le():me())}function ve(){d==null||d(),$=l(X),$.start()}return i&&ve(),{stop:()=>{m==null||m(),$.stop()}}}function Sf(e,s){return s?e*(1e3/s):0}function E7({from:e=0,velocity:s=0,min:o,max:a,power:i=.8,timeConstant:l=750,bounceStiffness:r=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let _;function w(k){return o!==void 0&&k<o||a!==void 0&&k>a}function y(k){return o===void 0?a:a===void 0||Math.abs(o-k)<Math.abs(a-k)?o:a}function $(k){_==null||_.stop(),_=Cf(Object.assign(Object.assign({},k),{driver:d,onUpdate:M=>{var E;m==null||m(M),(E=k.onUpdate)===null||E===void 0||E.call(k,M)},onComplete:f,onStop:h}))}function I(k){$(Object.assign({type:"spring",stiffness:r,damping:c,restDelta:u},k))}if(w(e))I({from:e,velocity:s,to:y(e)});else{let k=i*s+e;typeof p<"u"&&(k=p(k));const M=y(k),E=M===o?-1:1;let z,B;const D=U=>{z=B,B=U,s=Sf(U-z,sf().delta),(E===1&&U>M||E===-1&&U<M)&&I({from:U,to:M,velocity:s})};$({type:"decay",from:e,velocity:s,timeConstant:l,power:i,restDelta:u,modifyTarget:p,onUpdate:w(k)?D:void 0})}return{stop:()=>_==null?void 0:_.stop()}}const Rf=(e,s)=>1-3*s+3*e,Ef=(e,s)=>3*s-6*e,Af=e=>3*e,Ga=(e,s,o)=>((Rf(s,o)*e+Ef(s,o))*e+Af(s))*e,Tf=(e,s,o)=>3*Rf(s,o)*e*e+2*Ef(s,o)*e+Af(s),A7=1e-7,T7=10;function M7(e,s,o,a,i){let l,r,c=0;do r=s+(o-s)/2,l=Ga(r,a,i)-e,l>0?o=r:s=r;while(Math.abs(l)>A7&&++c<T7);return r}const O7=8,z7=.001;function P7(e,s,o,a){for(let i=0;i<O7;++i){const l=Tf(s,o,a);if(l===0)return s;const r=Ga(s,o,a)-e;s-=r/l}return s}const ya=11,fa=1/(ya-1);function D7(e,s,o,a){if(e===s&&o===a)return wf;const i=new Float32Array(ya);for(let r=0;r<ya;++r)i[r]=Ga(r*fa,e,o);function l(r){let c=0,u=1;const p=ya-1;for(;u!==p&&i[u]<=r;++u)c+=fa;--u;const d=(r-i[u])/(i[u+1]-i[u]),m=c+d*fa,f=Tf(m,e,o);return f>=z7?P7(r,m,e,o):f===0?m:M7(r,c,c+fa,e,o)}return r=>r===0||r===1?r:Ga(l(r),s,a)}const Bi={};class N7{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,o,a){if(this.subscriptions.size)for(const i of this.subscriptions)i(s,o,a)}clear(){this.subscriptions.clear()}}function Qu(e){return!isNaN(parseFloat(e))}class F7{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new N7,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:a,timestamp:i}=sf();this.lastUpdated!==i&&(this.timeDelta=a,this.lastUpdated=i),ql.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ql.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Qu(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Qu(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Sf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(o=>{const{stop:a}=s(o);this.stopAnimation=a}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function j7(e){return new F7(e)}const{isArray:K7}=Array;function H7(){const e=J({}),s=a=>{const i=l=>{e.value[l]&&(e.value[l].stop(),e.value[l].destroy(),delete e.value[l])};a?K7(a)?a.forEach(i):i(a):Object.keys(e.value).forEach(i)},o=(a,i,l)=>{if(e.value[a])return e.value[a];const r=j7(i);return r.onChange(c=>l[a]=c),e.value[a]=r,r};return B0(s),{motionValues:e,get:o,stop:s}}function W7(e){return Array.isArray(e)}function Yt(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function qi(e){return{type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function B7(e){return{type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}}function Vi(){return{type:"keyframes",ease:"linear",duration:300}}function q7(e){return{type:"keyframes",duration:800,values:e}}const Ju={default:B7,x:Yt,y:Yt,z:Yt,rotate:Yt,rotateX:Yt,rotateY:Yt,rotateZ:Yt,scaleX:qi,scaleY:qi,scale:qi,backgroundColor:Vi,color:Vi,opacity:Vi};function Mf(e,s){let o;return W7(s)?o=q7:o=Ju[e]||Ju.default,{to:s,...o(s)}}const Xu={...Yo,transform:Math.round},Of={color:vn,backgroundColor:vn,outlineColor:vn,fill:vn,stroke:vn,borderColor:vn,borderTopColor:vn,borderRightColor:vn,borderBottomColor:vn,borderLeftColor:vn,borderWidth:xe,borderTopWidth:xe,borderRightWidth:xe,borderBottomWidth:xe,borderLeftWidth:xe,borderRadius:xe,radius:xe,borderTopLeftRadius:xe,borderTopRightRadius:xe,borderBottomRightRadius:xe,borderBottomLeftRadius:xe,width:xe,maxWidth:xe,height:xe,maxHeight:xe,size:xe,top:xe,right:xe,bottom:xe,left:xe,padding:xe,paddingTop:xe,paddingRight:xe,paddingBottom:xe,paddingLeft:xe,margin:xe,marginTop:xe,marginRight:xe,marginBottom:xe,marginLeft:xe,rotate:Gt,rotateX:Gt,rotateY:Gt,rotateZ:Gt,scale:ma,scaleX:ma,scaleY:ma,scaleZ:ma,skew:Gt,skewX:Gt,skewY:Gt,distance:xe,translateX:xe,translateY:xe,translateZ:xe,x:xe,y:xe,z:xe,perspective:xe,transformPerspective:xe,opacity:ko,originX:qu,originY:qu,originZ:xe,zIndex:Xu,filter:Zl,WebkitFilter:Zl,fillOpacity:ko,strokeOpacity:ko,numOctaves:Xu},qr=e=>Of[e];function zf(e,s){return s&&typeof e=="number"&&s.transform?s.transform(e):e}function V7(e,s){let o=qr(e);return o!==Zl&&(o=Zo),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const U7={linear:wf,easeIn:Wr,easeInOut:yf,easeOut:d7,circIn:$f,circInOut:m7,circOut:If,backIn:Br,backInOut:h7,backOut:f7,anticipate:_7,bounceIn:k7,bounceInOut:x7,bounceOut:Ua};function ep(e){if(Array.isArray(e)){const[s,o,a,i]=e;return D7(s,o,a,i)}else if(typeof e=="string")return U7[e];return e}function G7(e){return Array.isArray(e)&&typeof e[0]!="number"}function np(e,s){return e==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Zo.test(s)&&!s.startsWith("url("))}function Y7(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Z7({ease:e,times:s,delay:o,...a}){const i={...a};return s&&(i.offset=s),e&&(i.ease=G7(e)?e.map(ep):ep(e)),o&&(i.elapsed=-o),i}function Q7(e,s,o){return Array.isArray(s.to)&&(e.duration||(e.duration=800)),Y7(s),J7(e)||(e={...e,...Mf(o,s.to)}),{...s,...Z7(e)}}function J7({delay:e,repeat:s,repeatType:o,repeatDelay:a,from:i,...l}){return!!Object.keys(l).length}function X7(e,s){return e[s]||e.default||e}function ez(e,s,o,a,i){const l=X7(a,e);let r=l.from===null||l.from===void 0?s.get():l.from;const c=np(e,o);r==="none"&&c&&typeof o=="string"&&(r=V7(e,o));const u=np(e,r);function p(m){const f={from:r,to:o,velocity:a.velocity?a.velocity:s.getVelocity(),onUpdate:h=>s.set(h)};return l.type==="inertia"||l.type==="decay"?E7({...f,...l}):Cf({...Q7(l,f,e),onUpdate:h=>{f.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{a.onComplete&&a.onComplete(),i&&i(),m&&m()}})}function d(m){return s.set(o),a.onComplete&&a.onComplete(),i&&i(),m&&m(),{stop:()=>{}}}return!u||!c||l.type===!1?d:p}function nz(){const{motionValues:e,stop:s,get:o}=H7();return{motionValues:e,stop:s,push:(i,l,r,c={},u)=>{const p=r[i],d=o(i,p,r);if(c&&c.immediate){d.set(l);return}const m=ez(i,d,l,c,u);d.start(m)}}}function tz(e,s={},{motionValues:o,push:a,stop:i}=nz()){const l=O(s),r=J(!1);be(o,m=>{r.value=Object.values(m).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=m=>{if(!l||!l[m])throw new Error(`The variant ${m} does not exist.`);return l[m]},u=m=>(typeof m=="string"&&(m=c(m)),Promise.all(Object.entries(m).map(([f,h])=>{if(f!=="transition")return new Promise(_=>a(f,h,e,m.transition||Mf(f,m[f]),_))}).filter(Boolean)));return{isAnimating:r,apply:u,set:m=>{const f=kl(m)?m:c(m);Object.entries(f).forEach(([h,_])=>{h!=="transition"&&a(h,_,e,{immediate:!0})})},leave:async m=>{let f;if(l&&(l.leave&&(f=l.leave),!l.leave&&l.initial&&(f=l.initial)),!f){m();return}await u(f),m()},stop:i}}const Vr=typeof window<"u",sz=()=>Vr&&window.onpointerdown===null,oz=()=>Vr&&window.ontouchstart===null,az=()=>Vr&&window.onmousedown===null;function iz({target:e,state:s,variants:o,apply:a}){const i=O(o),l=J(!1),r=J(!1),c=J(!1),u=N(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),p=N(()=>{const d={};Object.assign(d,s.value),l.value&&i.hovered&&Object.assign(d,i.hovered),r.value&&i.tapped&&Object.assign(d,i.tapped),c.value&&i.focused&&Object.assign(d,i.focused);for(const m in d)u.value.includes(m)||delete d[m];return d});i.hovered&&($e(e,"mouseenter",()=>l.value=!0),$e(e,"mouseleave",()=>{l.value=!1,r.value=!1}),$e(e,"mouseout",()=>{l.value=!1,r.value=!1})),i.tapped&&(az()&&($e(e,"mousedown",()=>r.value=!0),$e(e,"mouseup",()=>r.value=!1)),sz()&&($e(e,"pointerdown",()=>r.value=!0),$e(e,"pointerup",()=>r.value=!1)),oz()&&($e(e,"touchstart",()=>r.value=!0),$e(e,"touchend",()=>r.value=!1))),i.focused&&($e(e,"focus",()=>c.value=!0),$e(e,"blur",()=>c.value=!1)),be(p,a)}function lz({set:e,target:s,variants:o,variant:a}){const i=O(o);be(()=>s,()=>{i&&(i.initial&&e("initial"),i.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function rz({state:e,apply:s}){be(e,o=>{o&&s(o)},{immediate:!0})}function cz({target:e,variants:s,variant:o}){const a=O(s);a&&(a.visible||a.visibleOnce)&&Dv(e,([{isIntersecting:i}])=>{a.visible?i?o.value="visible":o.value="initial":a.visibleOnce&&(i&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function uz(e,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&lz(e),s.syncVariants&&rz(e),s.visibilityHooks&&cz(e),s.eventListeners&&iz(e)}function Pf(e={}){const s=Be({...e}),o=J({});return be(s,()=>{const a={};for(const[i,l]of Object.entries(s)){const r=qr(i),c=zf(l,r);a[i]=c}o.value=a},{immediate:!0,deep:!0}),{state:s,style:o}}function Ur(e,s){be(()=>ln(e),o=>{o&&s(o)},{immediate:!0})}const pz={x:"translateX",y:"translateY",z:"translateZ"};function Df(e={},s=!0){const o=Be({...e}),a=J("");return be(o,i=>{let l="",r=!1;if(s&&(i.x||i.y||i.z)){const c=[i.x||0,i.y||0,i.z||0].map(xe.transform).join(",");l+=`translate3d(${c}) `,r=!0}for(const[c,u]of Object.entries(i)){if(s&&(c==="x"||c==="y"||c==="z"))continue;const p=qr(c),d=zf(u,p);l+=`${pz[c]||c}(${d}) `}s&&!r&&(l+="translateZ(0px) "),a.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:a}}const dz=["","X","Y","Z"],mz=["perspective","translate","scale","rotate","skew"],Nf=["transformPerspective","x","y","z"];mz.forEach(e=>{dz.forEach(s=>{const o=e+s;Nf.push(o)})});const fz=new Set(Nf);function Gr(e){return fz.has(e)}const hz=new Set(["originX","originY","originZ"]);function Ff(e){return hz.has(e)}function _z(e){const s={},o={};return Object.entries(e).forEach(([a,i])=>{Gr(a)||Ff(a)?s[a]=i:o[a]=i}),{transform:s,style:o}}function jf(e){const{transform:s,style:o}=_z(e),{transform:a}=Df(s),{style:i}=Pf(o);return a.value&&(i.value.transform=a.value),i.value}function gz(e,s){let o,a;const{state:i,style:l}=Pf();return Ur(e,r=>{a=r;for(const c of Object.keys(Of))r.style[c]===null||r.style[c]===""||Gr(c)||Ff(c)||(i[c]=r.style[c]);o&&Object.entries(o).forEach(([c,u])=>r.style[c]=u),s&&s(i)}),be(l,r=>{if(!a){o=r;return}for(const c in r)a.style[c]=r[c]},{immediate:!0}),{style:i}}function vz(e){const s=e.trim().split(/\) |\)/);if(s.length===1)return{};const o=a=>a.endsWith("px")||a.endsWith("deg")?parseFloat(a):isNaN(Number(a))?Number(a):a;return s.reduce((a,i)=>{if(!i)return a;const[l,r]=i.split("("),u=r.split(",").map(d=>o(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return{...a,[l]:p}},{})}function bz(e,s){Object.entries(vz(s)).forEach(([o,a])=>{const i=["x","y","z"];if(o==="translate3d"){if(a===0){i.forEach(l=>e[l]=0);return}a.forEach((l,r)=>e[i[r]]=l);return}if(a=parseFloat(a),o==="translateX"){e.x=a;return}if(o==="translateY"){e.y=a;return}if(o==="translateZ"){e.z=a;return}e[o]=a})}function kz(e,s){let o,a;const{state:i,transform:l}=Df();return Ur(e,r=>{a=r,r.style.transform&&bz(i,r.style.transform),o&&(r.style.transform=o),s&&s(i)}),be(l,r=>{if(!a){o=r;return}a.style.transform=r},{immediate:!0}),{transform:i}}function xz(e,s){const o=Be({}),a=r=>Object.entries(r).forEach(([c,u])=>o[c]=u),{style:i}=gz(e,a),{transform:l}=kz(e,a);return be(o,r=>{Object.entries(r).forEach(([c,u])=>{const p=Gr(c)?l:i;p[c]&&p[c]===u||(p[c]=u)})},{immediate:!0,deep:!0}),Ur(e,()=>s&&a(s)),{motionProperties:o,style:i,transform:l}}function wz(e={}){const s=O(e),o=J();return{state:N(()=>{if(o.value)return s[o.value]}),variant:o}}function Kf(e,s={},o){const{motionProperties:a}=xz(e),{variant:i,state:l}=wz(s),r=tz(a,s),c={target:e,variant:i,variants:s,state:l,motionProperties:a,...r};return uz(c,o),c}const yz=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function $z(e,s){const o=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};o&&(o.variants&&kl(o.variants)&&(s.value={...s.value,...o.variants}),yz.forEach(a=>{if(a==="delay"){if(o&&o[a]&&typeof o[a]=="number"){const i=o[a];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:i,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:i,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:i,...s.value.visibleOnce.transition}))}return}a==="visible-once"&&(a="visibleOnce"),o&&o[a]&&kl(o[a])&&(s.value[a]=o[a])}))}function Ui(e){return{created:(o,a,i)=>{const l=a.value&&typeof a.value=="string"?a.value:i.key;l&&Bi[l]&&Bi[l].stop();const r=J(e||{});typeof a.value=="object"&&(r.value=a.value),$z(i,r);const c=Kf(o,r);o.motionInstance=c,l&&(Bi[l]=c)},getSSRProps(o,a){let{initial:i}=o.value||a&&(a==null?void 0:a.props)||{};i=O(i);const l=LO((e==null?void 0:e.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:jf(l)}}}}const Iz={initial:{opacity:0},enter:{opacity:1}},Lz={initial:{opacity:0},visible:{opacity:1}},Cz={initial:{opacity:0},visibleOnce:{opacity:1}},Sz={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Rz={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Ez={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Az={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Tz={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Mz={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Oz={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zz={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Pz={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Dz={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Nz={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Fz={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},jz={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Kz={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Hz={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Wz={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Bz={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},qz={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Vz={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Uz={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Gz={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Yz={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Zz={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Qz={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Jz={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Xz={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},eP={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ql={__proto__:null,fade:Iz,fadeVisible:Lz,fadeVisibleOnce:Cz,pop:Sz,popVisible:Rz,popVisibleOnce:Ez,rollBottom:jz,rollLeft:Az,rollRight:Oz,rollTop:Dz,rollVisibleBottom:Kz,rollVisibleLeft:Tz,rollVisibleOnceBottom:Hz,rollVisibleOnceLeft:Mz,rollVisibleOnceRight:Pz,rollVisibleOnceTop:Fz,rollVisibleRight:zz,rollVisibleTop:Nz,slideBottom:Jz,slideLeft:Wz,slideRight:Vz,slideTop:Yz,slideVisibleBottom:Xz,slideVisibleLeft:Bz,slideVisibleOnceBottom:eP,slideVisibleOnceLeft:qz,slideVisibleOnceRight:Gz,slideVisibleOnceTop:Qz,slideVisibleRight:Uz,slideVisibleTop:Zz},nP=Me({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var c;const s=Kh(),o=Be({});if(!e.is&&!s.default)return()=>yn("div",{});const a=N(()=>{let u;return e.preset&&(u=Ql[e.preset]),u}),i=N(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),l=N(()=>{const u={...i.value,...a.value||{},...e.variants||{}};return e.delay&&(u.enter.transition={...u.enter.transition},u.enter.transition.delay=parseInt(e.delay)),u}),r=N(()=>{if(!e.is)return;let u=e.is;return typeof r.value=="string"&&!kp(u)&&(u=Oa(u)),u});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const u=p=>{var d;(d=p.variants)!=null&&d.initial&&p.set("initial"),setTimeout(()=>{var m,f,h;(m=p.variants)!=null&&m.enter&&p.apply("enter"),(f=p.variants)!=null&&f.visible&&p.apply("visible"),(h=p.variants)!=null&&h.visibleOnce&&p.apply("visibleOnce")},10)};ri(()=>Object.entries(o).forEach(([p,d])=>u(d)))}return{slots:s,component:r,motionConfig:l,instances:o}},render({slots:e,motionConfig:s,instances:o,component:a}){var c;const i=jf(s.initial||{}),l=(u,p)=>(u.props||(u.props={}),u.props.style=i,u.props.onVnodeMounted=({el:d})=>{const m=Kf(d,s);o[p]=m},u);if(a){const u=yn(a,void 0,e);return l(u,0),u}return(((c=e.default)==null?void 0:c.call(e))||[]).map((u,p)=>l(u,p))}});function tP(e){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",a=new RegExp(s.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(a,i=>o.charAt(s.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const sP={install(e,s){if(e.directive("motion",Ui()),e.component("Motion",nP),!s||s&&!s.excludePresets)for(const o in Ql){const a=Ql[o];e.directive(`motion-${tP(o)}`,Ui(a))}if(s&&s.directives)for(const o in s.directives){const a=s.directives[o];a.initial,e.directive(`motion-${o}`,Ui(a))}}};var tp;const wo=typeof window<"u",oP=Object.prototype.toString,aP=e=>oP.call(e)==="[object Object]";wo&&((tp=window==null?void 0:window.navigator)!=null&&tp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function iP(e){return sr()?($p(e),!0):!1}function lP(e){var s;const o=O(e);return(s=o==null?void 0:o.$el)!=null?s:o}const rP=wo?window:void 0,sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},op="__vueuse_ssr_handlers__";sp[op]=sp[op]||{};function cP(e,s={}){const{immediate:o=!0,window:a=rP}=s,i=J(!1);let l=null;function r(){!i.value||!a||(e(),l=a.requestAnimationFrame(r))}function c(){!i.value&&a&&(i.value=!0,r())}function u(){i.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return o&&c(),iP(u),{isActive:i,pause:u,resume:c}}var ap;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ap||(ap={}));const _i="vue-starport-injection",Hf="vue-starport-options",uP={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Wf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var pP=Object.defineProperty,Ya=Object.getOwnPropertySymbols,Bf=Object.prototype.hasOwnProperty,qf=Object.prototype.propertyIsEnumerable,ip=(e,s,o)=>s in e?pP(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,dP=(e,s)=>{for(var o in s||(s={}))Bf.call(s,o)&&ip(e,o,s[o]);if(Ya)for(var o of Ya(s))qf.call(s,o)&&ip(e,o,s[o]);return e},lp=(e,s)=>{var o={};for(var a in e)Bf.call(e,a)&&s.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&Ya)for(var a of Ya(e))s.indexOf(a)<0&&qf.call(e,a)&&(o[a]=e[a]);return o};const mP=Me({name:"StarportProxy",props:dP({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Wf),setup(e,s){const o=L(_i),a=N(()=>o.getInstance(e.port,e.component)),i=J(),l=a.value.generateId(),r=J(!1);return a.value.isVisible||(a.value.land(),r.value=!0),kt(async()=>{if(a.value.el){console.error(`[Vue Starport] Multiple proxies of "${a.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(a.value.el=i.value,await an(),r.value=!0,a.value.rect.update(),a.value.rect.width===0||a.value.rect.height===0){const c=a.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${a.value.componentName}" (port "${e.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",a.value.el),console.warn("rect:",a.value.rect)}}),Wo(async()=>{a.value.rect.update(),a.value.liftOff(),a.value.el=void 0,r.value=!1,!a.value.options.keepAlive&&(await an(),await an(),!a.value.el&&o.dispose(a.value.port))}),be(()=>e,async()=>{a.value.props&&await an();const c=e,{props:u}=c,p=lp(c,["props"]);a.value.props=u||{},a.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=lp(c,["initialProps","mountedProps"]),m=G(d,(r.value?p:u)||{});return yn("div",G(m,{id:l,ref:i,"data-starport-proxy":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true"}),s.slots.default?yn(s.slots.default):void 0)}}});var fP=Object.defineProperty,hP=Object.defineProperties,_P=Object.getOwnPropertyDescriptors,rp=Object.getOwnPropertySymbols,gP=Object.prototype.hasOwnProperty,vP=Object.prototype.propertyIsEnumerable,cp=(e,s,o)=>s in e?fP(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,bP=(e,s)=>{for(var o in s||(s={}))gP.call(s,o)&&cp(e,o,s[o]);if(rp)for(var o of rp(s))vP.call(s,o)&&cp(e,o,s[o]);return e},kP=(e,s)=>hP(e,_P(s));const xP=Me({name:"Starport",inheritAttrs:!0,props:Wf,setup(e,s){const o=J(!1);return kt(()=>{if(o.value=!0,!L(_i))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var r,c;const a=(c=(r=s.slots).default)==null?void 0:c.call(r);if(!a)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(a.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${a.length}`);const i=a[0];let l=i.type;return(!aP(l)||jt(l))&&(l={render(){return a}}),yn(mP,kP(bP({},e),{key:e.port,component:ni(l),props:i.props}))}}});function wP(e){const s=Be({height:0,width:0,left:0,top:0,update:a,listen:l,pause:r,margin:"0px",padding:"0px"}),o=wo?document.documentElement||document.body:void 0;function a(){if(!wo)return;const c=lP(e);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,_=f.padding;Object.assign(s,{height:u,width:p,left:d,top:o.scrollTop+m,margin:h,padding:_})}const i=cP(a,{immediate:!1});function l(){wo&&(a(),i.resume())}function r(){i.pause()}return s}let yP=(e,s=21)=>(o=s)=>{let a="",i=o;for(;i--;)a+=e[Math.random()*e.length|0];return a};const up=yP("abcdefghijklmnopqrstuvwxyz",5);function pp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function $P(e){var s;return e.name||((s=e.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var IP=Object.defineProperty,dp=Object.getOwnPropertySymbols,LP=Object.prototype.hasOwnProperty,CP=Object.prototype.propertyIsEnumerable,mp=(e,s,o)=>s in e?IP(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,Gi=(e,s)=>{for(var o in s||(s={}))LP.call(s,o)&&mp(e,o,s[o]);if(dp)for(var o of dp(s))CP.call(s,o)&&mp(e,o,s[o]);return e};function SP(e,s,o={}){const a=$P(s),i=pp(a)||up(),l=J(),r=J(null),c=J(!1),u=J(!1),p=c1(!0),d=J({}),m=N(()=>Gi(Gi(Gi({},uP),o),d.value)),f=J(0);let h;p.run(()=>{h=wP(l),be(l,async $=>{$&&(u.value=!0),await an(),l.value||(u.value=!1)})});const _=pp(e);function w(){return`starport-${i}-${_}-${up()}`}const y=w();return Be({el:l,id:y,port:e,props:r,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:s,componentName:a,componentId:i,generateId:w,setLocalOptions($={}){d.value=JSON.parse(JSON.stringify($))},elRef(){return l},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function RP(e){const s=Be(new Map);function o(i,l){let r=s.get(i);return r||(r=SP(i,l,e),s.set(i,r)),r.component=l,r}function a(i){var l;(l=s.get(i))==null||l.scope.stop(),s.delete(i)}return{portMap:s,dispose:a,getInstance:o}}var EP=Object.defineProperty,AP=Object.defineProperties,TP=Object.getOwnPropertyDescriptors,fp=Object.getOwnPropertySymbols,MP=Object.prototype.hasOwnProperty,OP=Object.prototype.propertyIsEnumerable,hp=(e,s,o)=>s in e?EP(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,zP=(e,s)=>{for(var o in s||(s={}))MP.call(s,o)&&hp(e,o,s[o]);if(fp)for(var o of fp(s))OP.call(s,o)&&hp(e,o,s[o]);return e},PP=(e,s)=>AP(e,TP(s));const DP=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const s=L(_i);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=N(()=>s.getInstance(e.port,e.component)),a=N(()=>{var r;return((r=o.value.el)==null?void 0:r.id)||o.value.id}),i=N(()=>{const r=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-r),u=o.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,margin:u.margin,padding:u.padding,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!o.value.isVisible||!o.value.el?PP(zP({},p),{zIndex:-1,display:"none"}):(o.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),p)}),l={onTransitionend(r){o.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${o.value.componentName}" is too short (${r.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${o.value.options.duration/1e3}s).`)}};return()=>{const r=!!(o.value.isLanded&&o.value.el);return yn("div",{style:i.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},yn(h_,{to:r?`#${a.value}`:"body",disabled:!r},yn(o.value.component,G(l,o.value.props))))}}}),NP=Me({name:"StarportCarrier",setup(e,{slots:s}){const o=RP(L(Hf,{}));return $n().appContext.app.provide(_i,o),()=>{var i;return[(i=s.default)==null?void 0:i.call(s),Array.from(o.portMap.entries()).map(([l,{component:r}])=>yn(DP,{key:l,port:l,component:r}))]}}});function FP(e={}){return{install(s){s.provide(Hf,e),s.component("Starport",xP),s.component("StarportCarrier",NP)}}}function jP(e){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),e.app.use(sP),e.app.use(FP({keepAlive:!0}))}function In(e,s,o){var a;return((a=e.instance)==null?void 0:a.$).provides[s]??o}function KP(){return{install(e){e.directive("click",{name:"v-click",mounted(s,o){var d,m,f,h,_,w;if(vo.value||(d=In(o,fo))!=null&&d.value)return;const a=In(o,ns),i=In(o,mo),l=In(o,vl),r=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,u=((m=a==null?void 0:a.value)==null?void 0:m.length)||0,p=c?u0:Si;if(a&&!((f=a==null?void 0:a.value)!=null&&f.includes(s))&&a.value.push(s),o.value==null&&(o.value=(h=a==null?void 0:a.value)==null?void 0:h.length),typeof o.value=="string"&&(o.value.startsWith("+")||o.value.startsWith("-"))&&(o.value=(((_=a==null?void 0:a.value)==null?void 0:_.length)||0)+Number(o.value)),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[s]);else if(!((w=l==null?void 0:l.value.get(o.value))!=null&&w.includes(s))){const y=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[s].concat(y))}s==null||s.classList.toggle(Qt,!0),i&&be(i,()=>{const y=(i==null?void 0:i.value)??0,$=o.value!=null?y>=o.value:y>u;s.classList.contains(Ri)||s.classList.toggle(p,!$),r!==!1&&r!==void 0&&s.classList.toggle(p,$),s.classList.toggle(Gs,!1);const I=l==null?void 0:l.value.get(y);I==null||I.forEach((k,M)=>{k.classList.toggle(la,!1),M===I.length-1?k.classList.toggle(Gs,!0):k.classList.toggle(la,!0)}),s.classList.contains(Gs)||s.classList.toggle(la,$)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Qt,!1);const a=In(o,ns);a!=null&&a.value&&bl(a.value,s)}}),e.directive("after",{name:"v-after",mounted(s,o){var c,u,p;if(vo.value||(c=In(o,fo))!=null&&c.value)return;const a=In(o,ns),i=In(o,mo),l=In(o,vl),r=a==null?void 0:a.value.length;o.value==null&&(o.value=a==null?void 0:a.value.length),typeof o.value=="string"&&(o.value.startsWith("+")||o.value.startsWith("-"))&&(o.value=(((u=a==null?void 0:a.value)==null?void 0:u.length)||0)+Number(o.value)),l!=null&&l.value.has(o.value)?(p=l==null?void 0:l.value.get(o.value))==null||p.push(s):l==null||l.value.set(o.value,[s]),s==null||s.classList.toggle(Qt,!0),i&&be(i,()=>{const d=(i.value??0)>=(o.value??r??0);s.classList.contains(Ri)||s.classList.toggle(Si,!d),s.classList.toggle(Gs,!1),s.classList.contains(Gs)||s.classList.toggle(la,d)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Qt,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(s,o){var r,c,u;if(vo.value||(r=In(o,fo))!=null&&r.value)return;const a=In(o,ns),i=In(o,mo),l=((c=a==null?void 0:a.value)==null?void 0:c.length)||0;a&&!((u=a==null?void 0:a.value)!=null&&u.includes(s))&&a.value.push(s),s==null||s.classList.toggle(Qt,!0),i&&be(i,()=>{const p=(i==null?void 0:i.value)??0,d=o.value!=null?p>=o.value:p>l;s.classList.toggle(Si,d),s.classList.toggle(Ri,d)},{immediate:!0})},unmounted(s,o){s==null||s.classList.toggle(Qt,!1);const a=In(o,ns);a!=null&&a.value&&bl(a.value,s)}})}}}function HP(e,s){const o=Zm(e),a=Qm(s,o.currentRoute,o.currentPage);return{nav:{...o,...a},configs:Ee,themeConfigs:N(()=>Ee.themeConfig)}}function WP(){return{install(e){const s=HP(jn,Dn);e.provide(S,Be(s))}}}const Hs=mg($O);Hs.use(wn);Hs.use(l0());Hs.use(KP());Hs.use(WP());jP({app:Hs,router:wn});Hs.mount("#app");export{zy as $,Uw as A,J as B,YP as C,mn as D,qe as E,Ae as F,f2 as G,gO as H,Dn as I,Va as J,dO as K,Fi as L,kt as M,Be as N,UP as O,ZP as P,be as Q,v as R,Rm as S,Te as T,dn as U,C2 as V,BP as W,qP as X,To as Y,zi as Z,R as _,S as a,Rr as a0,Er as a1,Ve as a2,$y as a3,Sx as a4,VP as a5,Fn as a6,no as a7,is as a8,nt as a9,Al as aa,n2 as ab,t2 as ac,s2 as ad,a2 as ae,td as af,Md as ag,QP as ah,_n as ai,da as aj,cw as ak,Bd as al,i2 as am,Wo as an,Wd as b,Ee as c,Me as d,G1 as e,ie as f,n as g,O as h,L as i,Ye as j,rO as k,t as l,A as m,tn as n,b as o,we as p,yr as q,Fs as r,Yn as s,kn as t,GP as u,N as v,Ei as w,C as x,xm as y,Jw as z};
